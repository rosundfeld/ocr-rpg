import React, { useState } from 'react';
import { useEffect } from 'react';

export default function GetInfo() {

  const [imagePreview, setImagePreview] = useState(null);

  function handleImage(event){
    setImagePreview({
      image: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0]
    })
  }

  return (
    <div>
      <form>
        <label for="myfile">Select a file:</label>
        <input type="file" onChange={handleImage} accept="image/png, image/jpeg, image/jfif" />
        {
          imagePreview === null ? <span>Selecione uma imagem de ficha</span> : <img src={imagePreview.image}></img> 
        }
      </form>
    </div>
  );
}
