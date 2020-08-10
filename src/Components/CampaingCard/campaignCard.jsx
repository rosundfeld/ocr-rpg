import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { Paper, Grid, Typography, IconButton } from "@material-ui/core";

//Icons
import AddIcon from '@material-ui/icons/Add';

//css

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';

const useStyles = makeStyles({
  container: {
    width: "20%",
    margin: "1rem",
    marginTop: "3rem",
  },
  addCampContainer: {
    width: "100%",
    padding: "0.5rem",
    height: "",
    justifyContent: "center",
    alignItems: "center"
  },
  campCard: {

  },
  textContainer: {
    width: "100%",
  },
  title: {
    borderBottom: "solid lightgray 1px",
    fontWeight: "bold",
    fontSize: "1.8rem"
  },
  master: {
    borderBottom: "solid lightgray 1px",
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "gray"
  },
  addButton: {
    border: "3px #944b44 solid",
    color: "#944b44",
    width: "4rem",
    height: "4rem",
    backgroundColor: "white"
  }

});

export default function CampaingCard({ camp, setOpenCampDialog }) {

  const classes = useStyles();

  function openCampDialog() {
    setOpenCampDialog(true);
  }

  function useCamp() {
    const [campList, setCampList] = useState([])



    return campList;
  }

  return (camp !== null ?
    <div className={classes.container}>
      <Paper className={classes.addCampContainer}>
        <Grid container justify="space-between" alignItems="stretch" direction="column" className={classes.campCard}>
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.title}>
              {camp.campaignName}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.master}>
              Mestre: {camp.master}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.history}>
              Personagem: {camp.character}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div> :
    <div className={classes.container}>
      <Paper onClick={() => openCampDialog()} className={classes.addCampContainer}>
        <Grid container direction="column" justify="center" alignItems="center" className={classes.campCard}>
          <Grid item xs={12} className={classes.textContainer}>
            <IconButton className={classes.addButton}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
