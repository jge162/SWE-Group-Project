import './css/finishScreen.css';

const FinishScreen = ({ }) => {
    const goBack = () => {
        document.querySelector('#finish-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }
    return (
        <div id="finish-screen">
            <div onClick={() => {goBack();}} id="go-back-btn"> {"<"} Go Back</div>
            <div id="total-txt">Your total is: </div>
            <div id="total-price">$40.83</div>
            <div id="pay-btn-box">
                <div className="pay-btn">Pay with Card</div>
                <div className="pay-btn">Pay with Cash</div>
            </div>
        </div>
    );
    
}

export default FinishScreen;