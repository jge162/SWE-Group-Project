import React from 'react';
import './css/lookUpScreen.css';

function SearchList({ filteredItems }) {
  var groceryItem ="";
  const quantityAdd = (item) => {
    document.querySelector('#add-box').style.display = "flex";
    groceryItem = item.name;
  }

  const close = () => {
    document.querySelector('#add-box').style.display = "none";
  }

  const filtered = filteredItems.map(item => 
    <div onClick={() => {quantityAdd(item);}} className="grocery-box">
      <img draggable="false" className="image-item"alt={item.name} src={item.imgPath} />
      <div>
        <div className="item-label" >{item.name}</div>
      </div>
    </div>
  ); 

  return (
    <>
    <div id="add-box">
      <div id="enter-add">
          <div onClick={() => {close();}} id="close-add"> X</div>
          <div id="add-question">How many {groceryItem} would you like to add{"\n"} to checkout?</div>
          <input id="add-amount"></input>
          <div id="number-pad">
              <div onClick={() => null} className="number-btn">1</div>
              <div onClick={() => null} className="number-btn">2</div>
              <div onClick={() => null} className="number-btn">3</div>
              <div style={{width: "100%", height: "6px"}}></div>
              <div onClick={() => null} className="number-btn">4</div>
              <div onClick={() => null} className="number-btn">5</div>
              <div onClick={() => null} className="number-btn">6</div>
              <div style={{width: "100%", height: "6px"}}></div>
              <div onClick={() => null} className="number-btn">7</div>
              <div onClick={() => null} className="number-btn">8</div>
              <div onClick={() => null} className="number-btn">9</div>
          </div>
          <div className="bottom-row-btns">
            <div onClick={() => null} className="number-btn">0</div>
            <div onClick={() => null} className="enter-btn">Enter</div>
          </div>
         
      </div>
    </div>
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
      {filtered}
    </div>
    </>
    
  );
}

export default SearchList;