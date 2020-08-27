import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { FormControl, InputLabel, FormHelperText, Input, Select, Paper, Button, Dialog, DialogTitle, Grid } from "@material-ui/core";

//Icons
import AddIcon from '@material-ui/icons/Add';

//css

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';

const useStyles = makeStyles({
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        padding: "2rem",
        paddingTop: "0"
    },
    formInput: {
        display: "flex",
        margin: "1rem",
        fontSize: "3rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttomSubmit: {
        color: "#944b44",
        border: "#944b44 solid 1px"
    }

});

export default function CampAdd({ openCampDialog, setOpenCampDialog }) {

    const classes = useStyles();

    const [campName, setCampName] = useState("");
    const [campMaster, setCampMaster] = useState("");
    const [campChar, setCampChar] = useState("");

    function handleClose() {
        setOpenCampDialog(false);
    }

    async function sendCampInformation() {
        await firebase.sendCampInformation(campName, campMaster, campChar);
        setOpenCampDialog(false);
        window.location.reload(false);
    };

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={openCampDialog} onClose={handleClose}>
            <DialogTitle id="simple-dialog-title">Adicione uma Campanha</DialogTitle>
            <Paper className={classes.formContainer}>
                <FormControl className={classes.formInput}>
                    <InputLabel htmlFor="my-input">Nome da Campanha</InputLabel>
                    <Input required value={campName} onChange={(event) => setCampName(event.target.value)} aria-describedby="Nome da Campanha" />
                </FormControl>
                <FormControl className={classes.formInput}>
                    <InputLabel htmlFor="my-input">Mestre</InputLabel>
                    <Input required value={campMaster} onChange={(event) => setCampMaster(event.target.value)} aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl className={classes.formInput}>
                    <InputLabel htmlFor="age-native-simple">Personagem</InputLabel>
                    <Select
                        required
                        native
                        value={campChar}
                        onChange={(event) => setCampChar(event.target.value)}
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
            </Paper>
        </Dialog>
    );
}
