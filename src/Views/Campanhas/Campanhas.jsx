import React, { useState } from "react";
import { useEffect } from "react";

// Material UI
import { Paper, Avatar, CircularProgress } from "@material-ui/core";

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

  const [openCampDialog, setOpenCampDialog] = useState(false);
  const [campaignList, setCampaignList] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);

  // useEffect(async () => {
  //   setCampaignList(await firebase.getCampInformation());
  //   console.log(campaignList);
  // }, [campaignList]);

  // this.db.collection('users')
  // .doc(userId)
  // .collection('camps')
  // .get()
  // .then(await function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //       list.push(doc.data());
  //   });

  useEffect(() => {
    const list = [];
    firebase.getCampInformation().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        list.push(doc.data());
      });
      setCampaignList(list);
    });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = firebase.getCampInformation()
  //       console.log(result)
  //       setCampaignList(result);
  //       setLoadingContent(false);
  //     }
  //     catch {
  //       console.log("mai que merda em")
  //     }
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   async function getCamp() {
  //     let userId = firebase.auth.currentUser.uid;
  //     let list = [];
  //     firebase.db.collection('users')
  //       .doc(userId)
  //       .collection('camps')
  //       .get()
  //       .then(function (querySnapshot) {
  //         querySnapshot.forEach(function (doc) {
  //           list.push(doc.data());
  //         });

  //       });
  //     await setCampaignList(list);
  //   }
  //   getCamp();
  // }, []);

  if (!firebase.getCurrentUsername()) {
    //Não logado
    alert('Por favor, primeiro faça o login!')
    props.history.replace('/login')
    return null;
  }

  // function useCamps() {
  //   const [campList, setCampList] = useState([]);



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

  return (loadingContent === true ?
    <div className={classes.container}>
      <div className={classes.bookContainer}>
        {campaignList.map((camp) =>
          <CampaingCard camp={camp} />
        )}
        <CampaingCard camp={null} setOpenCampDialog={setOpenCampDialog} />
      </div>
      {openCampDialog &&
        <CampAdd openCampDialog={openCampDialog} setOpenCampDialog={setOpenCampDialog} />
      }
    </div> : <CircularProgress />
  );
}
