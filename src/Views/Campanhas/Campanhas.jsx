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
    marginLeft: "7rem",
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
  },
  circularProgress: {
    marginTop: "18rem",
  }
});

export default function Campanhas(props) {
  const classes = useStyles();

  const [openCampDialog, setOpenCampDialog] = useState(false);
  const [campaignList, setCampaignList] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);


  useEffect(() => {
    async function getData() {
      const info = await firebase.getCampInformation();
      setCampaignList(info);
      setLoadingContent(false);
    };
    getData();
  }, []);

  if (!firebase.getCurrentUsername()) {
    //Não logado
    alert('Por favor, primeiro faça o login!')
    props.history.replace('/login')
    return null;
  }

  return (
    <div className={classes.container}>
      {loadingContent === false ?
        <div className={classes.bookContainer}>
          {campaignList.map((camp, id) =>
            <CampaingCard key={id} camp={camp} />
          )}
          <CampaingCard camp={null} setOpenCampDialog={setOpenCampDialog} />
        </div>
        : <CircularProgress color="secundary" className={classes.circularProgress} />}
      {openCampDialog &&
        <CampAdd openCampDialog={openCampDialog} setOpenCampDialog={setOpenCampDialog} />
      }
    </div>
  );
}
