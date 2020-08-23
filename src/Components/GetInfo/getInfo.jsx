import React, { useState } from "react";
import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

//css
import "./getInfo.css";

const useStyles = makeStyles({
  formOcr: {
    margin: "auto",
    marginTop: "2%",
    width: "20%"
  },
  inputImage: {
    border: "#944b44 solid 1px",
    padding: "1%",
    borderRadius: "25px",
    background: "#944b44",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    "&:hover": {
      background: "#7d3f39",
      cursor: "pointer",
    },
  },
  selectForm: {
    fontWeight: "bold",
    fontSize: "20px"
  },
  preview: {
    maxWidth: "500px",
    maxHeight: "900px",
    margin: "1%"
  },
  inputFileButton: {
    width: "15%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {

  }

});

export default function GetInfo() {
  const classes = useStyles();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageData, setImageData] = useState(null);


  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        Accept: "app/json",
        "Content-Type": "app/json",
        "Access-Control-Allow-Credentials": "true",
      },
      mode: "cors",
    };
    // Create an scoped async function in the hook
    async function sendImg() {
      const resp = await fetch("http://127.0.0.1:5000/ocr-route", config);
      console.log(resp);
    }
    sendImg();
  }, []);

  function handleImage(event) {
    setImagePreview({
      image: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  return (
    <div className={classes.paper}>
      <form className={classes.formOcr} action="/upload-image" enctype="multipart/form-data" method="POST">
        <label className={classes.selectForm} for="myfile">Selecione a Ficha
        </label>
        <input
          name="file"
          id={"submitButton"}
          className={classes.inputImage}
          type="file"
          onChange={handleImage}
          accept="image/*"
        />
        <input type="submit" />



        {/* <input type="submit" value="Escolher imagem da Ficha" /> */}
        {imagePreview === null ? (
          <span>Nenhuma ficha selecionada</span>
        ) : (
            <img className={classes.preview} src={imagePreview.image}></img>
          )}
      </form>
      <div>

      </div>
    </div >
  );
}
