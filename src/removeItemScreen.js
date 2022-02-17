import './css/removeItemScreen.css';

const RemoveItemScreen = ({ }) => {
    const goBack = () => {
        document.querySelector('#remove-item-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }

    const quantityRemove = () => {
        document.querySelector('#select-box').style.display = "flex";
    }

    const close = () => {
        document.querySelector('#select-box').style.display = "none";
    }

    return (
    <div id="remove-item-screen">
        <div onClick={() => {goBack();}} id="go-back-btn"> {"<"} Go Back</div>
        <div id="remove-box">
            <div id="remove-item-title">Select Item(s) You Want to Remove</div>
            {/* Check if any items have been selected */}
            {/* If selected item has more than one quantity, ask how many to remove*/}
            <div onClick={() => {quantityRemove();}} id="remove-item-selection"></div>
        </div>
        <div id="select-box">
            <div id="select-amount">
                <div onClick={() => {close();}} id="close"> X</div>
                <div id="remove-question">How many would you like to remove?</div>
                <input id="remove-amount"></input>
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

export default RemoveItemScreen;