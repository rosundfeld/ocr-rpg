import React, { useState } from "react";
import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formOcr: {
    margin: "auto",
    marginTop: "2%",
    width: "50%"
  }

});

export default function GetInfo() {
  const classes = useStyles();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageData, setImageData] = useState(null);

  useEffect(async () => {
    const config = {
      method: "GET",
      headers: {
        Accept: "app/json",
        "Content-Type": "app/json",
        "Access-Control-Allow-Credentials": "true",
      },
      mode: "cors",
    };
    const resp = await fetch("http://127.0.0.1:5000/ocr-route", config);
    console.log(resp);
  }, []);

  function handleImage(event) {
    setImagePreview({
      image: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0],
    });
  }

  return (
    <div>
      <form className={classes.formOcr}>
        <label for="myfile">Select a file:</label>
        <input
          type="file"
          onChange={handleImage}
          accept="image/png, image/jpeg, image/jfif"
        />
        {imagePreview === null ? (
          <span>Selecione uma imagem de ficha</span>
        ) : (
            <img src={imagePreview.image}></img>
          )}
      </form>
    </div>
  );
}
