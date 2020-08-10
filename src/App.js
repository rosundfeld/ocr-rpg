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
import { Tooltip, IconButton, CircularProgress, Typography, Button, Menu, MenuItem } from "@material-ui/core";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  async function logout() {
    await firebase.logout();
    // history.replace('/login')
    window.location.reload(false);
  }

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          </div>
          <div className="userContainer">
            {firebase.getCurrentUsername() ? 
            <div>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Typography className="username" > { firebase.getCurrentUsername() }</Typography>
              </Button> 
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose}> <Link to="/login">Perfil</Link></MenuItem>
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </Menu>
              </div>
              :
              <div>
                <Tooltip title="Login">
                  <Link to="/login" className="loginHeaderButton">
                      <FaSignInAlt />
                  </Link>
                </Tooltip>
              </div>
            }
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
            <Tooltip title="Campanhas">
              <IconButton className={classes.navIcon} aria-label="campanhas">
                <Link to="/campanhas">
                  <FaBook />
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
          {/* { !firebase.getCurrentUsername() ?
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
          } */}
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
