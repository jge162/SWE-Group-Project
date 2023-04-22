import './css/cancelScreen.css';

const CancelScreen = ({ }) => {
    const noOption = () => {
        document.querySelector('#cancel-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
    }
    
    const yesOption = () => {
        document.querySelector('#cancel-screen').style.display = "none";
        document.querySelector('#welcome-screen').style.display = "flex";
    }

    return (
        <div id="cancel-screen">
            <div id="cancel-txt1">Are you sure you want to exit?</div>
            <div id="cancel-txt2"> All of your items will be removed.</div>
            <div style={{display:"flex", flexDirection:"row"}}>
              <div onClick={() => {yesOption();}} className="cancel-opt">Yes</div>
              <div onClick={() => {noOption();}} className="cancel-opt">No</div>
            </div>
        </div>
    );
}

export default CancelScreen;