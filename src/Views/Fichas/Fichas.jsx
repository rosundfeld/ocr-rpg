import React, { useState } from "react";
import { useEffect } from "react";

//css
import "./Fichas.css";


//MakeStyles (material ui)
import { makeStyles } from "@material-ui/core/styles";

//material ui
import { } from "@material-ui/core"

//componentes
import GetInfo from "../../Components/GetInfo/getInfo";
import CharCard from "../../Components/CharCard/charCard";

//Firebase
import firebase from "../../firebase";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    marginTop: "2%",
    width: "calc(100% - 100px)",
  },
  paper: {
    backgroundColor: "white",
    borderRadius: "25px",
    marginBottom: "1rem"
  },
  bookContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "2rem",
    marginLeft: "7rem",
    flexWrap: "wrap",
    overflow: "auto"
  }

});


export default function Fichas(props) {

  const classes = useStyles();

  const [charList, setCharList] = useState([]);

  useEffect(() => {
    async function getData() {
      const info = await firebase.getCharInformation();
      setCharList(info);
      // setLoadingContent(false);
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
    <div className={"background"}>
      <div className={classes.container}>
        <div className={classes.paper}>
          <GetInfo />
        </div>
        <div className={classes.bookContainer}>
          {charList.map((char, id) =>
            <CharCard key={id} char={char} />
          )}
          <CharCard char={null} />
        </div>
      </div>
    </div >
  );
}
