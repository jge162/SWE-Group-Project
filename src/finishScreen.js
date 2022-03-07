import './css/finishScreen.css';

const FinishScreen = () => {
    const goBack = () => {
        document.querySelector('#finish-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }
    
    return (
        <div id="finish-screen">
            <svg id="go-back-btn" onClick={() => {goBack();}} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
            </svg>
            <div id="total-box">
                <div id="total-txt">Grand Total: </div>
                <div id="total-price"></div>
            </div>
            <div id="pay-btn-box">
                Place Order
            </div>
        </div>
    );  
}

export default FinishScreen;