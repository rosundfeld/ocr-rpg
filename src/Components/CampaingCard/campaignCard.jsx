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

export default function CampaingCard({ camp, setOpenCampDialog }) {

  const classes = useStyles();

  const [openConfim, setOpenConfim] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const [campNameEdit, setCampNameEdit] = useState("");
  const [campMasterEdit, setCampMasterEdit] = useState("");
  const [campCharEdit, setCampCharEdit] = useState("");

  function sendCampInformation() {

  }

  function openAddCampDialog() {
    setOpenCampDialog(true);
  }

  function openConfirmDialog() {
    setOpenConfim(true);
  }

  function handleClose() {
    setOpenConfim(false);
  }

  async function trueConfirm() {
    handleClose();
    await firebase.removeCampInformation(camp);
    window.location.reload(false);
  }

  return (camp !== null ?
    <div className={classes.container}>
      <Paper className={classes.addCampContainer}>
        <Grid container justify="space-between" alignItems="stretch" direction="column" className={classes.campCard}>
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.title}>
              {camp.name}
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
          <Grid item xs={12} className={classes.textContainer}>
            <ButtonGroup size="large" color="secondary" className={classes.buttonContainer}>
              <Button>Editar</Button>
              <Button onClick={() => openConfirmDialog()}>Remover</Button>
            </ButtonGroup>
          </Grid>
          {openConfim &&
            <Dialog
              open={openConfim}
              onClose={() => handleClose()}
              aria-labelledby="Confirmar Remoção"
            >
              <DialogTitle>{"Deseja mesmo deletar essa campanha?"}</DialogTitle>
              <DialogActions>
                <Button onClick={() => handleClose()} color="secundary">
                  Cancelar
              </Button>
                <Button onClick={() => trueConfirm()} color="secundary" autoFocus>
                  Aceitar
              </Button>
              </DialogActions>
            </Dialog>
          }
          {openEdit &&
            <Dialog
              open={openConfim}
              onClose={() => handleClose()}
              aria-labelledby="Confirmar Remoção"
            >
              <DialogTitle>{"Deseja mesmo deletar essa campanha?"}</DialogTitle>
              <FormControl className={classes.formInput}>
                <InputLabel htmlFor="my-input">Nome da Campanha</InputLabel>
                <Input required value={campNameEdit} onChange={(event) => setCampNameEdit(event.target.value)} aria-describedby="Nome da Campanha" />
              </FormControl>
              <FormControl className={classes.formInput}>
                <InputLabel htmlFor="my-input">Mestre</InputLabel>
                <Input required value={campMasterEdit} onChange={(event) => setCampMasterEdit(event.target.value)} aria-describedby="my-helper-text" />
              </FormControl>
              <FormControl className={classes.formInput}>
                <InputLabel htmlFor="age-native-simple">Personagem</InputLabel>
                <Select
                  required
                  native
                  value={campCharEdit}
                  onChange={(event) => setCampCharEdit(event.target.value)}
                >
                  <option aria-label="None" value="" />
                  <option value={"Miffihir"}>Miffihir</option>
                  <option value={"Aragorn"}>Aragorn</option>
                  <option value={"Legolas"}>Legolas</option>
                </Select>
              </FormControl>
              <Button className={classes.buttomSubmit} onClick={() => sendCampInformation()}>
                Enviar dados
                </Button>
            </Dialog>
          }
        </Grid>
      </Paper>
    </div > :
    <div className={classes.container}>
      <Paper onClick={() => openAddCampDialog()} className={classes.addCampContainer}>
        <Grid container direction="column" justify="center" alignItems="center" className={classes.campCardAdd}>
          <Grid item xs={12} className={classes.textContainer}>
            <IconButton className={classes.addButton}>
              <AddIcon style={{ fontSize: "4rem" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
