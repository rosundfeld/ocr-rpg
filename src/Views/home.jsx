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
      
    </div>
  );
}
