import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { Paper, Grid, Typography, IconButton, ButtonGroup, Button, Dialog, DialogActions, DialogTitle, Input, InputLabel, FormControl, Select, TextField } from "@material-ui/core";

//imagens
import campWallpaper from "../../Assets/CampWallpaper/campBook.png";


//Icons
import AddIcon from '@material-ui/icons/Add';

//components
import CampInformation from "../../Components/CampInformation/campInformation"

//css
import "./campaignCard.css";

//multipleClasses
import classnames from "classnames";

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "1rem",
    marginTop: "3rem",
    background: "none",
  },
  addCampContainerCampanha: {
    width: "100%",
    padding: "0.5rem",
    minHeight: "300px",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${campWallpaper}) no-repeat center`,
    backgroundSize: "250px",
    boxShadow: "none"
  },
  addCharContainer: {
    width: "100%",
    padding: "0.5rem",
    minHeight: "150px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7rem"
  },
  campCardAdd: {
    lineHeight: "300px",
    marginLeft: "1.2rem"
  },
  textContainer: {
    width: "100%"
  },
  title: {
    //tem que configurar pra caso o titulo seja maior do que oq cabe no livro
    color: "gold",
    //paddingTop:"6rem",
    marginLeft: "1.7rem",
    //borderBottom: "solid lightgray 1px ",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginTop: "4rem",
    textTransform: "capitalize"
  },
  master: {
    // marginBottom:"3rem",
    marginLeft: "1.7rem",
    //borderBottom: "solid lightgray 1px",
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "gray"
  },
  history: {
    marginTop: "0.3rem",
    marginLeft: "1.6rem",
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "white"
  },
  addButton: {
    border: "3px #944b44 solid",
    color: "gold",
    width: "6rem",
    height: "6rem",
  },
  buttonContainer: {
    marginTop: "3rem",
    marginLeft: "2.2rem",
  }


});

export default function CampaingCard({ camp, setOpenCampDialog, charInfo }) {

  const classes = useStyles();

  const [openConfim, setOpenConfim] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openCampInformation, setOpenCampInformation] = useState(false);

  const [campNameEdit, setCampNameEdit] = useState("");
  const [campMasterEdit, setCampMasterEdit] = useState("");
  const [campCharEdit, setCampCharEdit] = useState("");


  useEffect(() => {
    async function getEditData() {
      if (camp) {
        setCampNameEdit(camp.name);
        setCampMasterEdit(camp.master);
        setCampCharEdit(camp.character)
      }
    };
    getEditData();
  }, [camp]);

  function handleOpenInformation() {
    setOpenCampInformation(true);
  }
  function handleCloseInformation() {
    setOpenCampInformation(true);
  }

  function openEditCampDialog() {
    setOpenEdit(true)
  }

  function handleCloseEdit() {
    setOpenEdit(false)
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

  async function sendEditCamp() {
    handleClose();
    await firebase.updateCampInformation(camp, campNameEdit, campMasterEdit, campCharEdit);
    window.location.reload(false);
  }

  async function trueConfirm() {
    handleClose();
    await firebase.removeCampInformation(camp);
    window.location.reload(false);
  }

  return (camp !== null ?
    <div className={classes.container}>
      <Paper onClick={() => handleOpenInformation()} className={classnames(classes.addCampContainerCampanha, "campContainer")}>
        <Grid container justify="space-evenly" alignItems="center" direction="column" className={classes.campCard}>
          <Grid item xs={12} className={classnames(classes.textContainer, "bookContent")}>
            <Typography className={classes.title}>
              {camp.name}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classnames(classes.textContainer, "bookContent")}>
            <Typography className={classes.master}>
              Mestre: {camp.master}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classnames(classes.textContainer, "bookContent")}>
            <Typography className={classes.history}>
              Personagem: <br />
              {camp.character}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classnames(classes.textContainer, "bookContent")}>
            <ButtonGroup size="small" color="secondary" className={classes.buttonContainer}>
              <Button onClick={() => openEditCampDialog()}>Editar</Button>
              <Button onClick={() => openConfirmDialog()}>Remover</Button>
            </ButtonGroup>
          </Grid>
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
          <Dialog
            open={openEdit}
            onClose={() => handleCloseEdit()}
            aria-labelledby="Editar Camp"
          >
            <DialogTitle>{"Edite as informações da campanha"}</DialogTitle>
            <FormControl className={classes.formInput}>
              <InputLabel htmlFor="my-input">Nome da Campanha</InputLabel>
              <Input required value={campNameEdit} onChange={(event) => setCampNameEdit(event.target.value)} aria-describedby="Nome da Campanha" />
            </FormControl>
            <FormControl className={classes.formInput}>
              <InputLabel htmlFor="my-input">Mestre</InputLabel>
              <Input required value={campMasterEdit} onChange={(event) => setCampMasterEdit(event.target.value)} aria-describedby="Mestre da Campanha" />
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
                {/* {charInfo.map((char, id) =>
                  <option key={id} value={char.char}>{char.characterName}, {char.class}</option>
                )} */}
              </Select>
            </FormControl>
            <Button className={classes.buttomSubmit} onClick={() => sendEditCamp()}>
              Enviar dados
                </Button>
          </Dialog>
        </Grid>
        {/* {openCampInformation &&
          <CampInformation handleCloseInformation={handleCloseInformation} openCampInformation={openCampInformation} />
        } */}
      </Paper>
    </div > :
    <div className={classes.container}>
      <Paper onClick={() => openAddCampDialog()} className={classnames(classes.addCampContainerCampanha, "campContainer")}>
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
