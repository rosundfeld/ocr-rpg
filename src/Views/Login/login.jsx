import React, { useState } from "react";

//logo
import logoText from "../../Assets/logo/logo.jpg"

//icones
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

//material UI
import { Paper, Avatar, Typography, Button } from "@material-ui/core";
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
  attInfoButton: {
    border: "#944b44 solid 1px",
    padding: "1rem",
    borderRadius: "25px",
    background: "#944b44",
    color: "white",
    fontWeight: "bold",
    marginTop: "2rem",
    fontSize: "3rem",
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
  },
  profileFormText: {
    margin: "0",
    textAlign: "left"
  },
  resetPwd: {
    border: "white",
    color: "white"
  },
  changPwdButton: {
    backgroundColor: "#5F5F5F",
    fontWeight: "bold",
    color: "white",
    borderRadius: "25px",
    width: "100%",
  }
});

export default function Login(props) {
  const classes = useStyles();

  const [userNameInfo, setUserNameInfo] = useState("");
  const [userPwdInfo, setUserPwdInfo] = useState("");

  const [userNameLogged, setUserNameInfoLogged] = useState(firebase.getCurrentUsername());
  const [userEmailLogged, setUserEmailLogged] = useState(firebase.getCurrentEmail());
  const [userPwdLogged, setUserPwdLogged] = useState("");

  const [registerOpen, setRegisterOpen] = useState(false);

  function attUserInfo() {
    var user = firebase.auth.currentUser;

    user.updateProfile({
      displayName: { userNameLogged },
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      alert("Houve algum imprevisto: " + { error } + ", tente novamente.")
    });

    user.updateEmail(userEmailLogged).then(function () {
      // Update successful.
    }).catch(function (error) {
      alert("Houve algum imprevisto: " + { error } + ", tente novamente.")
    });

    user.updatePassword(userPwdLogged).then(function () {
      // Update successful.
    }).catch(function (error) {
      alert("Houve algum imprevisto: " + { error } + ", tente novamente.")
    });
  }

  function attPasswrd() {
    firebase.auth.sendPasswordResetEmail(firebase.getCurrentEmail()).then(function () {
      alert("Um Email para alterar sua senha foi enviado para: " + firebase.getCurrentEmail())
    }).catch(function (error) {
      alert("Houve algum imprevisto: " + { error } + ", tente novamente.")
    });
  }

  function handleRegister() {
    setRegisterOpen(true)
  }

  async function login() {
    try {
      await firebase.login(userNameInfo, userPwdInfo);
      props.history.replace('/')
      window.location.reload(false);
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

          //Profile
          <div className={"login"}>
            {firebase.getCurrentUsername() ?
              <div className={"formProfile"}>
                <div className={"logoTextContainer"}>
                  <h2 className={"profileText"}> PERFIL </h2>
                </div>
                <form className={"formContainer"}>
                  <h5 className={classes.profileFormText}>Nome de Usuário</h5>
                  <div className={classes.inputText}>
                    <FaUser />
                    <input
                      onChange={(event) => setUserNameInfoLogged(event.target.value)}
                      className={classes.inputDark}
                      name="userAtt"
                      type="text"
                      value={userNameLogged}
                      placeholder="Nome Usuário"
                    />
                  </div>
                  <br />
                  <h5 className={classes.profileFormText}>Email</h5>
                  <div className={classes.inputText}>
                    <FaEnvelope />
                    <input
                      onChange={(event) => setUserEmailLogged(event.target.value)}
                      className={classes.inputDark}
                      name="emailAtt"
                      type="text"
                      placeholder="Email"
                      value={userEmailLogged}
                    />
                  </div>
                  <br />
                  <h5 className={classes.profileFormText}>Alterar Senha</h5>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className={classes.inputText}>
                    <Button onClick={() => attPasswrd()} className={classes.changPwdButton}>
                      <FaLock className={classes.icons} style={{ marginRight: "2rem" }} />
                      <Typography>
                        Redefinir senha
                    </Typography>
                    </Button>
                  </div>
                  <br />
                  <input
                    className={classes.attInfoButton}
                    type="button"
                    value="Atualizar Informações"
                    onClick={() => attUserInfo()}
                  />
                </form>
              </div> :
              //Login
              <Paper className={"formLogin"}>
                <div className={"logoTextContainer"}>
                  <img src={logoText} alt="logo" />
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
              </Paper>}
          </div>}
        <div className={"wallpaper"}>
          <figure></figure>
        </div>
      </div>
    </React.Fragment >
  );
}
