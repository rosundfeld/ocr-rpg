import React, { useState } from "react";
import { useEffect } from "react";

//varias classes
import classnames from "classnames";


//Wallpaper
import forestBG from '../../Assets/CampWallpaper/campWallpaper.jpg';
import tavernBG from '../../Assets/Ficha/fichaPaper.jpg';
import wallpaper from "../../Assets/Home/woodTexture.png";
import tutoCamp from "../../Assets/tutorial/campHome.png";
import tutoFicha from "../../Assets/tutorial/fichaHome.png";

//material UI
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, TextField } from "@material-ui/core";

import firebase from "../../firebase";

const useStyles = makeStyles({
  homeContainer: {
    background: `url(${wallpaper}) repeat center`,
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    overflow: "hidden"
  },
  wellcome: {
    color: "black",
    fontWeight: "bold",
    fontSize: "4rem",
    marginTop: "5rem",
    textShadow:
      "-1px -1px 0 gold, 1px -1px 0 gold, -1px 1px 0 gold, 1px 1px 0 gold"
  },
  infoContainer: {
    border: "gold 2px solid",
    borderRadius: "25px",
    marginTop: "2rem",
    minHeight: "700px",
    padding: "0.5rem"
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    padding: "2rem",
    color: "white",
    // textShadow:
    //   "-1px -1px 0 gold, 1px -1px 0 gold, -1px 1px 0 gold, 1px 1px 0 gold"
  },
  fichasWall: {
    background: `url(${tavernBG}) repeat center`,
  },
  campWall: {
    background: `url(${forestBG}) repeat center`,
  },
  info: {
    color: "white",
    background: "white",
    borderRadius: "25px",
    width: "80%",
    padding: "1rem"
  },
  tutoImg: {
    marginTop: "2rem",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block"
  }
});

export default function Home(props) {
  const classes = useStyles();

  if (!firebase.getCurrentUsername()) {
    //Não logado
    alert('Por favor, primeiro faça o login!')
    props.history.replace('/login')
    return null;
  }

  return <div>
    <div>
      <Paper className={classes.homeContainer}>
        <Typography className={classes.wellcome}>Bem-Vindo, {firebase.getCurrentUsername()}!</Typography>
        <Grid container justify="space-evenly" alignItems="center">
          <Grid xs={4} item >
            <Paper className={classnames(classes.infoContainer, classes.fichasWall)}>
              <Typography className={classes.infoTitle} >Fichas</Typography>
              <TextField readOnly multiline className={classes.info} value={" A aba ficha é onde você poderá, criar, excluir e editar seus personagens!"} />
              <img className={classes.tutoImg} src={tutoFicha}></img>
            </Paper>
          </Grid>
          <Grid xs={4} item >
            <Paper className={classnames(classes.infoContainer, classes.campWall)}>
              <Typography className={classes.infoTitle} >Campanhas</Typography>
              <TextField readOnly multiline className={classes.info} value={"A aba campanhas organizará seus personagens em suas respectivas campanhas, para você não perder nenhuma informação"} />
              <img className={classes.tutoImg} src={tutoCamp}></img>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  </div >;
}
