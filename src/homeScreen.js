import './css/homeScreen.css';

const HomeScreen = ({ }) => {
    const lookUpScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#look-up-screen').style.display = "flex";
    }

    const finishScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#finish-screen').style.display = "flex";
    }

    const retrieveScreen = () => {
        document.querySelector('#retrieve-screen').style.display = "flex";
    }

    const cancelScreen = () => {
        document.querySelector('#cancel-box').style.display = "flex";
    }

    const noOption = () => {
        document.querySelector('#cancel-box').style.display = "none";
    }
    
    const yesOption = () => {
        document.querySelector('#cancel-box').style.display = "none";
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#welcome-screen').style.display = "flex";
    }

    const removeItems = () => {
        document.querySelector('.item-count').style.backgroundColor = "#416EFE";
        document.querySelector('.item-count').style.color = "#FFFFFF";     
        document.querySelector('.item-cost-box').style.display = "none";
        document.querySelector('.item-remove-box').style.display = "flex";
        document.querySelector('#done-btn').style.display = "flex";
    }

    const doneRemove = () => {   
        document.querySelector('.item-count').style.backgroundColor = "#E9F2F9";     
        document.querySelector('.item-count').style.color = "#161D39";     
        document.querySelector('.item-cost-box').style.display = "flex";
        document.querySelector('.item-remove-box').style.display = "none";
        document.querySelector('#done-btn').style.display = "none";    
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
        var retrieveCode = document.querySelector("#output").value;
        document.querySelector('#retrieve-screen').style.display = "none";
        //if retreiveCode exists
        // pull up list
        // else
        document.querySelector('#code-error').style.display = "flex";
        document.querySelector("#output").value = "";
    }

    const closeError = () => {
        document.querySelector('#code-error').style.display = "none";
    }

    return (
        <div id="home-screen">
            <div id="hs-1">
                <div id="item-title">Selected Items<div onClick={() => {retrieveScreen();}} id="retrieve-btn">Retrieve Order</div></div>
                
                <div id="item-list">
                    <div className="item-info">
                        <div className="item-count">2</div>
                        <div className="item-name">Apple</div>
                        <div className="item-cost-box">
                            <div className="item-cost">$11.27</div>
                            <div className="separator"></div>
                            <div className="item-total">$5.50 total</div>
                        </div>
                        <div className="item-remove-box">
                            <div className="remove-all-btn">Remove all</div>
                            <div className="remove-one-btn">Remove 1</div>
                        </div>
                    </div>
                </div>
                

                <div onClick={() => {doneRemove();}} id="done-btn">Done</div>
            </div>
            <div id="retrieve-screen">
                <div id="enter-code">
                    <div onClick={() => {close();}} id="close-retrieve"> X</div>
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
                        <div id="subtotal-box">Subtotal:<div id="subtotal-amount"> $12.54</div></div>
                        <div id="sales-tax-box">Sales Tax:<div id="sales-tax-amount">$2.32</div></div>
                        <div id="grand-total-box">Grand Total: <div id="grand-total-amount">$14.86</div></div>
                    </div>
                </div>
                <div onClick={() => {finishScreen();}} className="btn-design" id="finish-btn">Complete Order</div>
                <div onClick={() => {lookUpScreen();}} className="btn-design" id="look-up-btn">Look Up Item</div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div onClick={() => removeItems()} className="btn-design" id="remove-btn">Remove Item</div>
                    <div onClick={() => {cancelScreen();}} className="btn-design" id="cancel-btn">Cancel Process</div>
                </div>
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