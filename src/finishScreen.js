import './css/finishScreen.css';
import groceryUtils from './grocery';
import shapes from './media/giphy.gif';
const FinishScreen = () => {
    const goBack = () => {
        document.querySelector('#finish-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }

    const placeOrder = () => {
        groceryUtils.clear();
        localStorage.setItem("total", JSON.stringify([]));
        document.querySelector('#finish-screen').style.display = "none";
        document.querySelector('#thank-you-screen').style.display = "flex";
        setTimeout(function () {
            document.querySelector('#thank-you-screen').style.display = "none";
            document.querySelector('#welcome-screen').style.display = "flex";
            document.location.reload();
        }, 3000);
    }
    
    return (
        <>
        <div id="finish-screen">
            <svg id="go-back-btn" onClick={() => {goBack();}} width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
            </svg>
            <div id="total-box">
                <div id="total-txt">Grand Total: </div>
                <div id="total-price">${(localStorage.getItem("total")) !== null ? JSON.parse(localStorage.getItem("total"))[2]: "0.00"}</div>
            </div>
            <div onClick={() => {placeOrder();}} id="pay-btn-box">
                Place Order
            </div>
        </div>
        <div id="thank-you-screen">
            <div id="thankyou-text">Thank you, your order has been processed.</div>
            <img id="load-gif" src={shapes} alt="shapes"/>
        </div>
        </>
        
    );  
}

export default FinishScreen;