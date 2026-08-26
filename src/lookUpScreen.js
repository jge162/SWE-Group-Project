import './css/lookUpScreen.css';
import initialDetails from './media/initialDetails';
import React, { useState } from 'react';
import SearchList from './SearchList';

const LookUpScreen = () => {
  const [searchField, setSearchField] = useState("");
  const [itemType, setitemType] = useState("");

  let filteredItems;

  if (searchField !== "") {
    filteredItems = initialDetails.filter(
      item => {
        return (
          item.name.toLowerCase().includes(searchField.toLowerCase()) ||
          item.id.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    );
  } else {
    filteredItems = initialDetails.filter(
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
      <div style={{ marginTop: "47px", padding: "0 113px 0 113px", overflowY: 'scroll', height: '403px' }}>
        <SearchList filteredItems={filteredItems} />
      </div>
    );
  }

  const close = () => {
    document.querySelector('#search-screen').style.display = "none";
  }

  const pressKey = (value) => {
    var prevText = document.querySelector("#search-bar").value;
    document.querySelector("#search-bar").value = prevText + value;
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
      <svg id="go-back-btn" onClick={() => { goBack(); }} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white" />
      </svg>

      <div style={{ marginLeft: "71px" }}>
        <div className="search">
          <input
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
            autoComplete="off"
            onClick={() => { searchScreen(); }}
            id="search-bar"
            type="search"
            placeholder="Search"
          />
        </div>

        <div id="category-btns">
          <div onClick={() => { categoryButton("fruit"); }} id="fruit-btn" className="cat-btn">Fruit</div>
          <div onClick={() => { categoryButton("vegetable"); }} id="vegetable-btn" className="cat-btn">Vegetable</div>
          <div onClick={() => { categoryButton("snack"); }} id="snack-btn" className="cat-btn">Snack</div>
          <div onClick={() => { categoryButton("miscellaneous"); }} id="misc-btn" className="cat-btn">Miscellaneous</div>
        </div>

        {searchList()}

        <div id="search-screen">
          <div>
            <svg id="close-search" onClick={() => { close(); }} width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.826508" y="16.068" width="20" height="2" transform="rotate(-51.2253 0.826508 16.068)" fill="#161D39" />
              <rect x="2.20688" y="0.594833" width="20" height="2" transform="rotate(50 2.20688 0.594833)" fill="#161D39" />
            </svg>

            <div className="virtual-keyboard">
              <div className="row">
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="1" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="2" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="3" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="4" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="5" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="6" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="7" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="8" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="9" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="0" />
                <input onClick={() => { removeKey(); }} type="button" value="delete" className="delete" />
              </div>

              <div className="row">
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="q" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="w" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="e" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="r" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="t" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="y" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="u" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="i" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="o" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="p" />
              </div>

              <div className="row">
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="a" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="s" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="d" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="f" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="g" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="h" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="j" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="k" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="l" />
              </div>

              <div className="row">
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="z" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="x" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="c" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="v" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="b" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="n" />
                <input onClick={e => { pressKey(e.target.value); }} className="key" type="button" value="m" />
              </div>

              <div className="row-spacebar">
                <input onClick={e => { pressKey(e.target.value); }} className="spacebar" type="button" value=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookUpScreen;
