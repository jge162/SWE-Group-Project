import './css/lookUpScreen.css';
import leftArrow from "./media/left.png";
import rightArrow from "./media/right.png";
import { mediaByIndex, descriptionByIndex, idByIndex} from "./media/grocery.js";

const LookUpScreen = ({ }) => {
    const items = Array.from(Array(20).keys());
    const goBack = () => {
        document.querySelector('#look-up-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }

    const quantityAdd = () => {
        document.querySelector('#select-box1').style.display = "flex";
    }

    const close = () => {
        document.querySelector('#select-box1').style.display = "none";
    }
    return (
        <div id="look-up-screen">
            <div onClick={() => {goBack();}} id="go-back-btn"> {"<"} Go Back</div>
            <div id="search-box"> Search <input id="search-text" type="text"/></div>
            <div id="arrows">
                <div className="arrow-btn"><img className="arrow" src={leftArrow} alt="left arrow"/> Prev</div>
                <div className="arrow-btn"><img className="arrow" src={rightArrow} alt="right arrow"/>Next</div>
            </div>
            <div id="item-options">
                {items.map((index) => (
                    <div className="item-box" key={index} onClick={() => {quantityAdd();}}>
                        <img
                        className="item"
                        src={mediaByIndex(index)}
                        alt={descriptionByIndex(index)}/>
                        <div className="item-label">{descriptionByIndex(index)}</div>
                    </div>
                ))}
            </div>
            <div id="select-box1">
            <div id="select-amount1">
                <div onClick={() => {close();}} id="close1"> X</div>
                <div id="add-question">How many would you like to add?</div>
                <input id="add-amount"></input>
                <div id="number-pad">
                    <div onClick={() => null} className="number-btn">1</div>
                    <div onClick={() => null} className="number-btn">2</div>
                    <div onClick={() => null} className="number-btn">3</div>
                    <div onClick={() => null} className="number-btn">4</div>
                    <div onClick={() => null} className="number-btn">5</div>
                    <div onClick={() => null} className="number-btn">6</div>
                    <div onClick={() => null} className="number-btn">7</div>
                    <div onClick={() => null} className="number-btn">8</div>
                    <div onClick={() => null} className="number-btn">9</div>
                    <div onClick={() => null} className="number-btn">0</div>
                    <div onClick={() => null} className="number-btn">ALL</div>
                </div>
            </div>
        </div>
        </div>
    );
    
}

export default LookUpScreen;