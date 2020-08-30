import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { Paper, Grid, Typography, IconButton, ButtonGroup, Button, Dialog, DialogActions, DialogTitle, Input, InputLabel, FormControl, Select } from "@material-ui/core";

//Icons
import AddIcon from '@material-ui/icons/Add';

//css

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "1rem",
    marginTop: "3rem",
  },
  addCampContainer: {
    width: "100%",
    padding: "0.5rem",
    minHeight: "150px",
    justifyContent: "center",
    alignItems: "center"
  },
  campCardAdd: {
    lineHeight: "150px",
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
    width: "6rem",
    height: "6rem",
    backgroundColor: "white",
  }

});

export default function MagicAndItems({ itemsArray }) {

  const classes = useStyles();

  useEffect(() => {
    async function getEditData() {
     
    };
    getEditData();
  }, []);


  return ( itemsArray !== null &&
    <div className={classes.container}>
    
    </div>
  );
}
