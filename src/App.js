import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Views
import Home from "./Views/Home/Home";
import Fichas from "./Views/Fichas/Fichas";
import Campanhas from "./Views/Campanhas/Campanhas";
import Login from "./Views/Login/login";

//icones
import { FaHome, FaScroll, FaBook, FaUser } from "react-icons/fa";

//css
import "./App.css";

//logo
import logo from "./Assets/logo/logoRPG.png";

//materialUi
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, IconButton } from "@material-ui/core";

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

  return (
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
          <li>
            <Tooltip title="Login">
              <IconButton className={classes.navIcon} aria-label="login">
                <Link to="/login">
                  <FaUser />
                </Link>
              </IconButton>
            </Tooltip>
          </li>
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
  );
}
