import React, { useState } from "react";

//icones
import { FaUser, FaLock } from "react-icons/fa";

//material UI
import { Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./login.css";

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
});

export default function Login() {
  const classes = useStyles();

  const [userNameInfo, setUserNameInfo] = useState("");
  const [userPwdInfo, setUserPwdInfo] = useState("");

  return (
    <React.Fragment>
      <div className={"flexContainer"}>
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
                  placeholder="Usuário"
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
                type="submit"
                value="Login"
              />
            </form>
          </Paper>
        </div>
        <div className={"wallpaper"}>
          <figure></figure>
        </div>
      </div>
    </React.Fragment>
  );
}
