import './css/lookUpScreen.css';
import Search from './Search';
import initialDetails from './media/initialDetails';
import backArrow from './media/Vector.png';

const LookUpScreen = ({  }) => {
    const goBack = () => {
        document.querySelector('#look-up-screen').style.display = "none";
        document.querySelector('#home-screen').style.display = "flex";
        document.querySelector('#search-screen').style.display = "none";
        document.querySelector("#search-bar").value = "";
    }

    return (
        <div id="look-up-screen">
            <img id="go-back-btn1" onClick={() => {goBack();}} src={backArrow} />
            <div style={{marginLeft:"71px"}}>
                <Search details={initialDetails}/>
            </div>
        </div>
    );
    
}

export default LookUpScreen;