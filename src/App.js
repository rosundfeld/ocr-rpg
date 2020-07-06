import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Fichas from "./Views/Fichas/Fichas";
import Campanhas from "./Views/Campanhas/Campanhas";
import Login from "./Views/Login/login";

//icones
import { FaHome, FaScroll, FaBook, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

//css
import "./App.css";

//logo
import logo from "./Assets/logo/logoRPG.png";

//materialUi
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton, CircularProgress, Typography } from "@material-ui/core";

//firebase
import firebase from "./firebase";

const useStyles = makeStyles({
  navIcon: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#944b44",
    },
  },
});

export default function App() {
  const classes = useStyles();

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);


  async function logout() {
    await firebase.logout();
    // props.history.push('/')
  }

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })

  return firebaseInitialized !== false ? (
    <Router>
      <div className="App">
        <div className="header">
          <div className="logoContainer">
            <IconButton className={"logo"} aria-label="home">
              <Link to="/">
                <img src={logo} alt="logo"></img>
              </Link>
            </IconButton>
            { firebase.getCurrentUsername() && <Typography style={{fontSize: "5vh", fontWeight: "bold"}}> Hello { firebase.getCurrentUsername() }</Typography>}
          </div>
        </div>
        <ul className="navUl">
          <li>
            <Tooltip title="Home">
              <IconButton className={classes.navIcon} aria-label="home">
                <Link to="/">
                  <FaHome />
                </Link>
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Fichas">
              <IconButton className={classes.navIcon} aria-label="fichas">
                <Link to="/fichas">
                  <FaScroll />
                </Link>
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Campanhas">
              <IconButton className={classes.navIcon} aria-label="campanhas">
                <Link to="/campanhas">
                  <FaBook />
                </Link>
              </IconButton>
            </Tooltip>
          </li>
          { !firebase.getCurrentUsername() ?
            <li>
              <Tooltip title="Login">
                <IconButton className={classes.navIcon} aria-label="login">
                  <Link to="/login">
                    <FaSignInAlt />
                  </Link>
                </IconButton>
              </Tooltip>
            </li>
            :
            <li>
            <Tooltip title="logout">
              <IconButton className={classes.navIcon} onClick={() => logout()} aria-label="login">
                  <FaSignOutAlt style={{color: "white"}} />
              </IconButton>
            </Tooltip>
          </li>
          }
        </ul>
        <div className="index">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/fichas" component={Fichas} />
            <Route exact path="/campanhas" component={Campanhas} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  ) : <div id="loader"><CircularProgress /></div>
}
