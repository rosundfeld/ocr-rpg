import React, { useState } from "react";
import { useEffect } from "react";

// Material UI
import { Paper, Avatar } from "@material-ui/core";

//MakeStyles
import { makeStyles } from "@material-ui/core/styles";

//Components
import CampaingCard from '../../Components/CampaingCard/campaignCard';
import CampAdd from '../../Components/CampAdd/campAdd';

//Wallpaper
import forestBG from '../../Assets/CampWallpaper/campWallpaper.jpg'

//firebase
import firebase from "../../firebase";


const useStyles = makeStyles({
  bookContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "2rem",
    flexWrap: "wrap",
    overflow: "auto"
  },
  container: {
    height: "100%",
    background: `url(${forestBG}) no-repeat center center fixed`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundColor: "black"
  }
});

export default function Campanhas(props) {
  const classes = useStyles();

  const [openCampDialog, setOpenCampDialog] = useState(false)

  if (!firebase.getCurrentUsername()) {
    //Não logado
    alert('Por favor, primeiro faça o login!')
    props.history.replace('/login')
    return null;
  }

  // function useCamps() {
  //   const [campList, setCampList] = useState([]);

  //   useEffect(() => {
  //     firebase
  //       .firestore()
  //       .collection('camp-list')
  //       .onSnapshot(snapshot) => {
  //       debbuger
  //     }
  //   }, [])
  // }

  const campaignSettings = [
    {
      campaignName: "Gods Name",
      character: "Miffhir",
      master: "Pedro Pinho"
    },
    {
      campaignName: "O Calice de Fogo",
      character: "Aragorn",
      master: "Sophia Schuster"
    },
    {
      campaignName: "Valorozo",
      character: "Phoenix",
      master: "Riot Games"
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.bookContainer}>
        {campaignSettings.map((camp) =>
          <CampaingCard camp={camp} />
        )}
        <CampaingCard camp={null} setOpenCampDialog={setOpenCampDialog} />
      </div>
      {openCampDialog &&
        <CampAdd openCampDialog={openCampDialog} setOpenCampDialog={setOpenCampDialog} />
      }
    </div>
  );
}
