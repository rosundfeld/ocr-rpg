import React, { useState } from "react";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//MaterialUi
import { Paper, Grid, Typography, IconButton, Dialog, DialogTitle, InputLabel, Input, Select, Button } from "@material-ui/core";

//Icons
import AddIcon from '@material-ui/icons/Add';

import campWallpaper2 from "../../Assets/CampWallpaper/campBookOpen.png";

//Firebase
import firebase from "../../firebase";
import 'firebase/firestore';

const useStyles = makeStyles({
    container: {
        overflow: "hidden",
        backgroundColor: "transparent",
    },
    bookContainer: {
        width: "100%",
        padding: "0.5rem",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        background: `url(${campWallpaper2}) no-repeat center`,
        backgroundSize: "cover",
        boxShadow: "none",
        height: "100hv"
    }

});

export default function CampInfomation({ handleCloseInformation, openCampInformation }) {

    const classes = useStyles();

    return (
        <div >
            <Dialog
                className={classes.container}
                open={openCampInformation}
                fullWidth
                maxWidth="lg"
                onClose={() => handleCloseInformation()}
                aria-labelledby="Informações da Campanha"
            >
                <Paper className={classes.bookContainer}>
                    <Grid>

                    </Grid>
                </Paper>
            </Dialog>
        </div>
    );
}
