import './css/finishScreen.css';
import backArrow from './media/Vector.png';

const FinishScreen = ({ }) => {
    const goBack = () => {
        document.querySelector('#finish-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }
    return (
        <div id="finish-screen">
            <img id="go-back-btn1" onClick={() => {goBack();}} src={backArrow} />
            <div id="total-box">
                <div id="total-txt">Grand Total: </div>
                <div id="total-price">$40.83</div>
            </div>
            <div id="pay-btn-box">
                <div id="pay-btn">Place Order</div>
            </div>
        </div>
    );
    
}

export default FinishScreen;