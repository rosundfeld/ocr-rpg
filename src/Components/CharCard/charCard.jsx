import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { Paper, Grid, Typography, IconButton, ButtonGroup, Button, Dialog, DialogActions, DialogTitle, Input, InputLabel, FormControl, Select } from "@material-ui/core";

//images
import fichaBackground from "../../Assets/Ficha/fichaBackground.png"

//Icons
import AddIcon from '@material-ui/icons/Add';

//use more than 1 class
import classnames from 'classnames'

//css
import "./charCard.css"

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';
import CharInformation from "../CharInformation/charInformation";

const useStyles = makeStyles({
    container: {
        width: "30%",
        margin: "1rem",
        marginTop: "3rem",
    },
    addCampContainer: {
        width: "60%",
        padding: "0.5rem",
        minHeight: "380px",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${fichaBackground}) no-repeat center`,
        backgroundSize: "cover",
        margin: "2px",
        "&:hover, &:focus": {
            border: "2px solid #944b44",
            margin: "0",
            cursor: "pointer"
        },
    },
    campCardAdd: {
        lineHeight: "150px",
        marginTop: "7rem"
    },
    textContainer: {
        width: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: "4rem",
    },
    content: {
        fontWeight: "bold",
        fontSize: "1.5rem",
    },
    addButton: {
        border: "3px #944b44 solid",
        color: "#944b44",
        width: "6rem",
        height: "6rem",
        backgroundColor: "white",
    },
    paperLevel: {
        width: "30%",
        fontWeight: "bold",
        fontSize: "4rem",
        borderRadius: "50%",
        margin: "auto",
        border: "solid 5px #944b44"
    },

});

export default function CharCard({ char }) {

    const classes = useStyles();

    function handleOpenInfo() {
        setOpenCharInfo(true)
    }

    function handleCloseInfo() {
        setOpenCharInfo(false)
    }

    const [openCharInfo, setOpenCharInfo] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    // async function sendEditCamp() {
    //     handleClose();
    //     await firebase.updateCampInformation(camp, campNameEdit, campMasterEdit, campCharEdit);
    //     window.location.reload(false);
    // }

    return (char !== null ?
        <div className={classes.container}>
            <Paper onClick={() => handleOpenInfo()} className={classnames(classes.addCampContainer, "charWall")}>
                <Grid container justify="space-between" alignItems="stretch" direction="column" className={classes.campCard}>
                    <Grid item xs={12} className={classes.textContainer}>
                        <Typography className={classes.title}>
                            Personagem: {char.characterName}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textContainer}>
                        <Typography className={classes.content}>
                            Classe: {char.class}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textContainer}>
                        <Typography className={classes.content}>
                            Raça: {char.race}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.textContainer}>
                        <Typography className={classes.content}>
                            Level:
                        </Typography>
                        <Paper className={classes.paperLevel}>
                            5
                        </Paper>

                    </Grid>
                </Grid>
            </Paper>
            <Dialog
                fullScreen
                open={openCharInfo}
                onClose={() => handleCloseInfo()}
                aria-labelledby="Editar Camp"
            >
                <DialogTitle>{"Ficha de " + char.characterName}</DialogTitle>
                <CharInformation char={char} />
            </Dialog>
        </div >
        :
        <div className={classes.container}>
            <Paper onClick={() => handleOpenInfo()} className={classnames(classes.addCampContainer, "charWall")}>
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
