import React, { useState } from "react";

//icones
import { FaUser, FaLock } from "react-icons/fa";

//material UI
import { Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//css
import "./login.css";

//components
import Register from "../Register/register.jsx"

//firebase
import firebase from "../../firebase";

const useStyles = makeStyles({
  inputText: {
    background: "#121212",
    padding: "2%",
    borderRadius: "2%",
    color: "white",
    display: "flex",
    borderRadius: "25px",
  },
  inputDark: {
    background: "#5F5F5F",
    borderRadius: "2%",
    color: "white",
    outline: "none",
    border: "0",
    margin: "0 2%",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
  buttonSubmit: {
    border: "#944b44 solid 1px",
    padding: "5px",
    borderRadius: "25px",
    background: "#944b44",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    "&:hover": {
      background: "#7d3f39",
      cursor: "pointer",
    },
  },
  buttonRegister: {
    color: "black",
    alignItems: "normal",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "rgb(0, 0, 238)",
    borderStyle: "none",
    boxSizing: "content-box",
    cursor: "pointer",
    display: "inline",
    font: "inherit",
    height: "auto",
    padding: "0",
    perspectiveOrigin: "0 0",
    textDecoration: "underline",
    transformOrigin: "0 0",
    width: "auto",
    outline: "1 solid red",

  }
});

export default function Login() {
  const classes = useStyles();

  const [userNameInfo, setUserNameInfo] = useState("");
  const [userPwdInfo, setUserPwdInfo] = useState("");

  const [registerOpen, setRegisterOpen] = useState(false);

  function handleRegister() {
    console.log(registerOpen)
    setRegisterOpen(true)
  }

  function handleUserInput(event) {
    setUserNameInfo(event.target.value)
  }

  function handlePwdInput(event) {
    setUserPwdInfo(event.target.value)
  }

  async function login() {
    try {
      await firebase.login(userNameInfo, userPwdInfo);
    }
    catch (error) {
      alert(error.message);
    }
  }

  return (
    <React.Fragment>
      <div className={"flexContainer"}>
        {registerOpen ?
          <div className={"login"}>
            <Register setRegisterOpen={() => setRegisterOpen()} />
          </div> :

          <div className={"login"}>
            <Paper className={"formLogin"}>
              <div style={{ marginLeft: "40%", marginBottom: "10%" }}>
                <Avatar className={classes.avatar}></Avatar>
              </div>
              <form className={"formContainer"}>
                <div className={classes.inputText}>
                  <FaUser />
                  <input
                    onChange={(event) => setUserNameInfo(event.target.value)}
                    className={classes.inputDark}
                    name="user"
                    type="text"
                    value={userNameInfo}
                    placeholder="E-mail"
                    required
                  />
                </div>
                <br />
                <div className={classes.inputText}>
                  <FaLock />
                  <input
                    onChange={(event) => setUserPwdInfo(event.target.value)}
                    className={classes.inputDark}
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={userPwdInfo}
                    required
                  />
                </div>
                <br />
                <input
                  className={classes.buttonSubmit}
                  type="button"
                  value="Login"
                  onClick={() => login()}
                />
                <button
                  className={classes.buttonRegister}
                  type="button"
                  onClick={() => handleRegister()}
                >Não possuo uma conta</button>
              </form>
            </Paper>
          </div>}
        <div className={"wallpaper"}>
          <figure></figure>
        </div>
      </div>
    </React.Fragment >
  );
}
