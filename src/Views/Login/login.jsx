import React, { useState } from 'react';
import { useEffect } from 'react';

import './login.css';

export default function Login() {

  const [ userNameInfo, setUserNameInfo ] = useState(false);
  const [ userPwdInfo, setUserPwdInfo ] = useState(false);
 
  function randomImage(){
    let imgList = [1, 2, 3, 4, 5];
    console.log(Math.floor(Math.random() * 5));

    const img = require('../../Assets/LoginWallpaper/wallpaper' + Math.ceil(Math.random() * 5) + '.jpg');
    return img;
  };

  return (
    <React.Fragment>
        <div className={"flexContainer"}>
            <div className={"login"}>
                <form>
                    <input name='user' type='text' value={userNameInfo} required/>
                    <input name='password' type='password' value={userPwdInfo} required/>
                    <input type='submit' value='Login' />
                </form>
            </div>
            <div className={"wallpaper"}>
               <figure>
                    <img></img>
               </figure>
            </div>
        </div>
    </React.Fragment>
  );
}
