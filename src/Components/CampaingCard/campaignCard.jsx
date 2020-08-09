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

// firebase.firestore().collection('campBook'.add({
//   master: 'Pedro Pinho',
//   character: 'Miffir',
//   campName: 'Thunder Lords'
// }))


const useStyles = makeStyles({
  container: {
    width: "20%",
    margin: "1rem",
    marginTop: "3rem",
  },
  addCampContainer: {
    width: "100%",
    padding: "0.5rem",
    height: "18rem",
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

export default function CampaingCard({ camp }) {

  const classes = useStyles();

  function useCamp() {
    const [campList, setCampList] = useState([])

    useEffect(() => {
      firebase
        .firestore()
        .collection('campList')
        .onSnapshot((snapshot) => {
          const newCamps = snapshot.docs.map((camp) => ({
            id: camp.id,
            ...camp.data()
          }))
        })
    }, [])

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
      <Paper className={classes.addCampContainer}>
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
