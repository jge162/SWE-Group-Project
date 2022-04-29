import './css/lookUpScreen.css';
import initialDetails from './media/initialDetails';
import React, { useState, useEffect, useCallback } from 'react';
import SearchList from './SearchList';

const LookUpScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [itemType, setitemType] = useState("");
  
  if (searchField !== "") {
    var filteredItems = initialDetails.filter(
      item => {
          return (
          item.name.toLowerCase().includes(searchField.toLowerCase()) ||
          item.id.toLowerCase().includes(searchField.toLowerCase())
          );
        }
    );
  }
  else {
    var filteredItems = initialDetails.filter(
      item => {
        return (
          item.category.toLowerCase().includes(itemType.toLowerCase())
        );
      }
    );
  }
  
  const keyboardButton = (e) => {
    setSearchField(e);
    setitemType("");
  };

  const categoryButton = (e) => {
    setSearchField("");
    setitemType(e);
  };

  function searchList() {
    return (
        <div style={{marginTop: "47px", padding: "0 113px 0 113px", overflowY: 'scroll', height:'403px'}}>
            <SearchList filteredItems={filteredItems} />
        </div>	
    );
  }

  const close = () => {
    document.querySelector('#search-screen').style.display = "none";
  }

  const pressKey = (value) => {
    var prevText = document.querySelector("#search-bar").value;
    document.querySelector("#search-bar").value = prevText + value
    keyboardButton(prevText + value);
  }

  const removeKey = () => {
    var prevText = document.querySelector("#search-bar").value;
    prevText = prevText.slice(0, -1);
    document.querySelector("#search-bar").value = prevText;
    keyboardButton(prevText);
  }

  const searchScreen = () => {
    document.querySelector('#search-screen').style.display = "flex";
  }

  const goBack = () => {
    document.querySelector('#look-up-screen').style.display = "none";
    document.querySelector('#home-screen').style.display = "flex";
    document.querySelector('#search-screen').style.display = "none";
    document.querySelector("#search-bar").value = "";
    keyboardButton("");
  }

  return (
    <div id="look-up-screen">
      <svg id="go-back-btn" onClick={() => {goBack();}} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
      </svg>
    <div style={{marginLeft:"71px"}}>
      <div className="search">
        <input onChange={(e) => {
            setSearchField(document.querySelector("#search-bar").value);
          } 
          }
          autoComplete="off" onClick={() => {searchScreen();}} id="search-bar" type="search" placeholder="Search"/>
      </div>
      <div id="category-btns">
        <div onClick={e => {categoryButton("fruit");}} id="fruit-btn" className="cat-btn">Fruit</div>
        <div onClick={e => {categoryButton("vegetable");}} id="vegetable-btn" className="cat-btn">Vegetable</div>
        <div onClick={e => {categoryButton("snack");}} id="snack-btn" className="cat-btn">Snack</div>
        <div onClick={e => {categoryButton("miscellaneous");}} id="misc-btn" className="cat-btn">Miscellaneous</div>
      </div>
      {searchList()}
      <div id="search-screen">
        <div>
          <svg id="close-search" onClick={() => {close();}} width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.826508" y="16.068" width="20" height="2" transform="rotate(-51.2253 0.826508 16.068)" fill="#161D39"/>
              <rect x="2.20688" y="0.594833" width="20" height="2" transform="rotate(50 2.20688 0.594833)" fill="#161D39"/>
          </svg>
          <div className="virtual-keyboard">
            <div className="row">
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="1"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="2"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="3"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="4"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="5"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="6"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="7"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="8"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="9"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="0"></input>
                <input onClick={() => {removeKey();}} type="button" value="delete" className="delete"></input>
            </div>
            <div className="row">
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="q"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="w"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="e"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="r"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="t"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="y"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="u"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="i"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="o"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="p"></input>
            </div>
            <div className="row">
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="a"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="s"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="d"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="f"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="g"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="h"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="j"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="k"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="l"></input>
            </div>
            <div className="row">
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="z"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="x"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="c"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="v"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="b"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="n"></input>
                <input onClick={e => {pressKey(e.target.value);}} className="key" type="button" value="m"></input>
            </div>
            <div className="row-spacebar">
                <input onClick={e => {pressKey(e.target.value);}} className="spacebar" type="button" value=" "></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default LookUpScreen;