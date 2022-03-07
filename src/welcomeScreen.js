import './App.css';
import React, { useState } from 'react';
import groceryUtils from './grocery';

function WelcomeScreen() {
    const [groceryList, setGroceryList] = useState(groceryUtils.get());

    const begin = () => {
        document.querySelector('#welcome-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
      }

    return (
        <>
        {console.log(groceryList)}
        {groceryList.length !== 0 ? (
            <div style={{display: "none"}} onClick={() => {begin();}} id="welcome-screen">
                <div style={{position: "absolute", marginTop:"-200px", color: "rgb(209, 209, 209)", fontSize:"25px", fontStyle:"italic"}}>Your Logo Here</div>
                <div id="title1">Welcome</div><div id="title2">Touch anywhere to begin.</div>
            </div>
        ) : (
            <div onClick={() => {begin();}} id="welcome-screen">
                <div style={{position: "absolute", marginTop:"-200px", color: "rgb(209, 209, 209)", fontSize:"25px", fontStyle:"italic"}}>Your Logo Here</div>
                <div id="title1">Welcome</div><div id="title2">Touch anywhere to begin.</div>
            </div>
        )}
        </>

       
    );
}

export default WelcomeScreen;