import './App.css';

function App() {
  var showWelcome = true;
  const touchDetected = () => {
    if (showWelcome) {
      showWelcome = false;
      document.querySelector('#welcome-screen').style.display = "none";
      document.querySelector('#home-screen').style.display = "flex";
    }
  }
    
  return (
    <div className="App">
      <div className="register">
        <div onClick={() => {touchDetected();}} id="interactive-screen">
          <div id="welcome-screen"><div id="title1">Welcome</div><div id="title2">Touch to Begin</div></div>
          <div id="home-screen">
            <div id="total">Total</div>
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
            </div>
            <div id="look-up-btn">Look Up Item</div>
            <div id="finish-btn">$ Finish and Pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
