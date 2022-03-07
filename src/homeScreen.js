import './css/homeScreen.css';
import React, { useState } from 'react';
import groceryUtils from './grocery';
import GroceryItem from './groceryItem';

function HomeScreen() {
    
    const lookUpScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#look-up-screen').style.display = "flex";
    }

    const finishScreen = () => {
        // goes to grand total only if there is a price over $0
        if (document.querySelector("#grand-total-amount").innerText !== "$0.00") {
            document.querySelector('#home-screen').style.display = "none";
            document.querySelector('#finish-screen').style.display = "flex";
        }
    }

    const retrieveScreen = () => {
        document.querySelector('#retrieve-screen').style.display = "flex";
    }

    const removeItems = () => {
        if (document.querySelector(".item-info")) {
            for(var i=0; i< document.getElementsByClassName('item-count').length; i++){
                document.getElementsByClassName('item-count')[i].style.backgroundColor = "#416EFE";
                document.getElementsByClassName('item-count')[i].style.color = "#FFFFFF";
                document.getElementsByClassName('item-cost-box')[i].style.display = "none";
                document.getElementsByClassName('item-remove-box')[i].style.display = "flex";
            }

            document.querySelector('#done-btn').style.display = "flex";
            document.querySelector("#block-hs-2").style.display = "flex"
        }
    }

    const doneRemove = () => {   
        for (var i=0; i< document.getElementsByClassName('item-count').length; i++){
            document.getElementsByClassName('item-count')[i].style.backgroundColor = "#E9F2F9";
            document.getElementsByClassName('item-count')[i].style.color = "#161D39";
            document.getElementsByClassName('item-cost-box')[i].style.display = "flex";
            document.getElementsByClassName('item-remove-box')[i].style.display = "none";
        }

        document.querySelector('#done-btn').style.display = "none";   
        document.querySelector("#block-hs-2").style.display = "none";
    }

    const close = () => {
        document.querySelector('#retrieve-screen').style.display = "none";
        document.querySelector("#output").value = "";
    }

    const pressKey = (value) => {
        var prevText = document.querySelector("#output").value;
        document.querySelector("#output").value = prevText + value
    }

    const removeKey = () => {
        var prevText = document.querySelector("#output").value;
        prevText = prevText.slice(0, -1);
        document.querySelector("#output").value = prevText
    }

    const enterCode = () => {
        // var retrieveCode = document.querySelector("#output").value;
        document.querySelector('#retrieve-screen').style.display = "none";
        //if retreiveCode exists
        //  pull up list
        // else
        document.querySelector('#code-error').style.display = "flex";
        document.querySelector("#output").value = "";
    }

    const closeError = () => {
        document.querySelector('#code-error').style.display = "none";
    }

    const cancelScreen = () => {
        document.querySelector('#cancel-box').style.display = "flex";
    }

    const noOption = () => {
        document.querySelector('#cancel-box').style.display = "none";
    }
    
    const [groceryList, setGroceryList] = useState(groceryUtils.get());

    const yesOption = () => {
        document.querySelector('#cancel-box').style.display = "none";
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#welcome-screen').style.display = "flex";

        groceryUtils.clear();
        setGroceryList(groceryUtils.get());
    }

    const deleteHandler = (id) => {
        groceryUtils.remove(id);
        setGroceryList(groceryUtils.get());
      };
    
      const removeOneHandler = (id, quantity) => {
        groceryUtils.removeOne(id, quantity);
        setGroceryList(groceryUtils.get());
      };

    function handleChange() {
        setGroceryList(groceryUtils.get());
      }

    return (
        <div id="home-screen">
            <div id="hs-1">
                <div id="item-title">Selected Items<div onClick={() => {retrieveScreen();}} id="retrieve-btn">Retrieve Order</div></div>
                <div id="item-list">
                <button id="refresh" type="button" onClick={handleChange}>
                    Add
                </button>
                    {/* Item divs get added here */}
                    {[...groceryList].map((listItem) =>
                        <GroceryItem
                            key={listItem.id}
                            id={listItem.id}
                            quantity={listItem.quantity}
                            name={listItem.name}
                            remoneOne={removeOneHandler}
                            delete={deleteHandler}
                        />
                    )}
                </div>
                <div onClick={() => {doneRemove();}} id="done-btn">Done</div>
            </div>
            <div id="retrieve-screen">
                <div id="enter-code">
                    <svg id="close-retrieve" onClick={() => {close();}} width="16" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.826508" y="16.068" width="20" height="2" transform="rotate(-51.2253 0.826508 16.068)" fill="#161D39"/>
                        <rect x="2.20688" y="0.594833" width="20" height="2" transform="rotate(50 2.20688 0.594833)" fill="#161D39"/>
                    </svg>
                    <div id="instruct-txt">Enter the code of your past order.</div>
                    <input readOnly type="text" name="output" id="output"></input>
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
                        <div onClick={() => {enterCode();}} id="enter-btn">Enter</div>
                    </div>
                </div>
            </div>

            <div id="code-error">
                <div id="error-screen">
                    <div id="cancel-txt">The code you entered does not exist. Please try again. </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div onClick={() => {closeError();}} className="cancel-opt">Ok</div>
                    </div>
                </div>
            </div>

            <div id="hs-2">
                <div>
                    <div id="total-title">Total</div>
                    <div id="total-calc">
                        <div id="subtotal-box">Subtotal:<div id="subtotal-amount"> $0.00</div></div>
                        <div id="sales-tax-box">Sales Tax:<div id="sales-tax-amount">$0.00</div></div>
                        <div id="grand-total-box">Grand Total: <div id="grand-total-amount">$0.00</div></div>
                    </div>
                </div>
                <div onClick={() => {finishScreen();}} className="btn-design" id="finish-btn">Complete Order</div>
                <div onClick={() => {lookUpScreen();}} className="btn-design" id="look-up-btn">Look Up Item</div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div onClick={() => removeItems()} className="btn-design" id="remove-btn">Remove Item</div>
                    <div onClick={() => {cancelScreen();}} className="btn-design" id="cancel-btn">Cancel Process</div>
                </div>
                <div id="block-hs-2"></div>
            </div>

            <div id="cancel-box">
                <div id="cancel-screen">
                    <div id="cancel-txt">Are you sure you want to exit? All of your items will be removed.</div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div onClick={() => {noOption();}} className="cancel-opt">No</div>
                        <div style={{backgroundColor: "#474951"}} onClick={() => {yesOption();}} className="cancel-opt">Yes</div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default HomeScreen;