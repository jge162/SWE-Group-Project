import './css/homeScreen.css';

const HomeScreen = ({ }) => {
    const cancelScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#cancel-screen').style.display = "flex";
    }

    const removeItemScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#remove-item-screen').style.display = "flex";
    }

    const lookUpScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#look-up-screen').style.display = "flex";
    }

    const finishScreen = () => {
        document.querySelector('#home-screen').style.display = "none";
        document.querySelector('#finish-screen').style.display = "flex";
    }
    
    return (
        <div id="home-screen">
            <div id="hs-1">
                <div id="item-list">Items</div>
            </div>
            <div id="hs-2">
                <div>
                    <div id="total">Total</div>
                </div>
                <div onClick={() => {lookUpScreen();}} className="btn-design" id="look-up-btn">Look Up Item</div>
                <div onClick={() => {finishScreen();}} className="btn-design" id="finish-btn">$ Finish and Pay</div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div onClick={() => {removeItemScreen();}} className="btn-design" id="remove-btn">Remove Item</div>
                    <div onClick={() => {cancelScreen();}} className="btn-design" id="cancel-btn">Cancel Process</div>
                </div>
            </div>
        </div>
    );
    
}

export default HomeScreen;