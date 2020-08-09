import React, { useState } from "react";
import { useEffect } from "react";

// Material UI
import { Paper, Avatar } from "@material-ui/core";

//MakeStyles
import { makeStyles } from "@material-ui/core/styles";

//Components
import CampaingCard from '../../Components/CampaingCard/campaignCard'

//Wallpaper
import forestBG from '../../Assets/CampWallpaper/campWallpaper.jpg'


const useStyles = makeStyles({
  bookContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "2rem",
  },
  container: {
    height: "100%",
    background:  `url(${forestBG}) no-repeat center center fixed`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    backgroundAttachment: "fixed",
    backgroundColor: "black"
  }
});

export default function Campanhas() {
  const classes = useStyles();

  const campaignSettings = [
    {
      campaignName:"Gods Name", 
      character:"Miffhir", 
      master:"Pedro Pinho"
    },
    {
      campaignName:"Aventura Fuinhal", 
      character:"Bixu", 
      master:"Sophia Schuster"
    },
    {
      campaignName:"Valorozo", 
      character:"Phoenix", 
      master:"Riot Games"
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.bookContainer}>
        {campaignSettings.map((camp) =>
          <CampaingCard camp={camp} />
          )}
          <CampaingCard camp={null}/>
      </div>
    </div>
  );
}
