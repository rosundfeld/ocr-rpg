import React, { useState } from "react";

//icones
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

//material UI
import { Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//css
import "./register.css";
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
        width: "120px",
        height: "120px",
    },
    registerTitle: {
        margin: "0",
        textAlign: "left"
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

export default function Register({ setRegisterOpen }) {
    const classes = useStyles();

    function handleRegister() {
        setRegisterOpen(false);
    }

    async function onRegister() {
        // if(userPwdInfo !== userPwdRptInfo){

        // }
        try {
            await firebase.register(userNameInfo, userEmailInfo, userPwdInfo);
            handleRegister();

        }
        catch (error) {
            alert(error.message);
        }
    }


    const [userNameInfo, setUserNameInfo] = useState("");
    const [userEmailInfo, setUserEmailInfo] = useState("");
    const [userPwdInfo, setUserPwdInfo] = useState("");
    const [userPwdRptInfo, setUserPwdRptInfo] = useState("");

    return (
        <React.Fragment>
            <Paper className={"formRegister"}>
                <div style={{ marginLeft: "35%", marginBottom: "10%" }}>
                    <Avatar className={classes.avatar}></Avatar>
                </div>
                <h5 className={classes.registerTitle}>Usuário</h5>
                <form className={"formContainer"}>
                    <div className={classes.inputText}>
                        <FaUser className={classes.icons} />
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
                    <h5 className={classes.registerTitle}>E-mail</h5>
                    <div className={classes.inputText}>
                        <FaEnvelope className={classes.icons} />
                        <input
                            onChange={(event) => setUserEmailInfo(event.target.value)}
                            className={classes.inputDark}
                            name="email"
                            type="text"
                            value={userEmailInfo}
                            placeholder="E-mail"
                            required
                        />
                    </div>
                    <br />
                    <h5 className={classes.registerTitle}>Senha</h5>
                    <div className={classes.inputText}>
                        <FaLock className={classes.icons} />
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
                    <h5 className={classes.registerTitle}>Repetir senha</h5>
                    <div className={classes.inputText}>
                        <FaLock className={classes.icons} />
                        <input
                            onChange={(event) => setUserPwdRptInfo(event.target.value)}
                            className={classes.inputDark}
                            name="password"
                            type="password"
                            placeholder="Repetir senha"
                            value={userPwdRptInfo}
                            required
                        />
                    </div>
                    <br />
                    <input
                        className={classes.buttonSubmit}
                        type="button"
                        value="Registrar"
                        onClick={() => onRegister()}
                    />
                </form>
            </Paper>
        </React.Fragment>
    );
}
