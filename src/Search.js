import './css/lookUpScreen.css';

import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredItems = details.filter(
    item => {
      return (
        item.name.toLowerCase().includes(searchField.toLowerCase()) ||
        item.id.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = (e) => {
    setSearchField(e);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredItems={filteredItems} />
      </Scroll>
    );
  }

  const close = () => {
    document.querySelector('#search-screen').style.display = "none";
  }

  const pressKey = (value) => {
      var prevText = document.querySelector("#search-bar").value;
      document.querySelector("#search-bar").value = prevText + value
      handleChange(prevText + value);
  }

  const removeKey = () => {
      var prevText = document.querySelector("#search-bar").value;
      prevText = prevText.slice(0, -1);
      document.querySelector("#search-bar").value = prevText;
      handleChange(prevText);
  }

  const searchScreen = () => {
    document.querySelector('#search-screen').style.display = "flex";
  }


  return (
    <div>
      <div className="search">
        <input readOnly onClick={() => {searchScreen();}} id="search-bar" type="search" placeholder="Search"/>
      </div>
      {searchList()}
      <div id="search-screen">
        <div>
          <div onClick={() => {close();}} id="close-search"> X</div>
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
                  <input onClick={() => {removeKey();}} className="key" type="button" value="delete" className="delete"></input>
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
  );
}

export default Search;