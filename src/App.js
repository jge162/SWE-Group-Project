import './App.css';
import CancelScreen from './cancelScreen';
import HomeScreen from './homeScreen';
import RemoveItemScreen from './removeItemScreen';
import LookUpScreen from './lookUpScreen';
import FinishScreen from './finishScreen';

function App() {
  // window.onload = function() {
  //   inactivityTime();
  // }

  // var inactivityTime = function () {
  //   var time;
  //   window.addEventListener('load', resetTimer, true);
  //   var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  //   events.forEach(function(name) {
  //     document.addEventListener(name, resetTimer, true);
  //   });
  //   function logout() {
  //     document.querySelector('#welcome-screen').style.display = "flex";
  //     document.querySelector('#home-screen').style.display = "none";
  //     document.querySelector('#cancel-screen').style.display = "none";
  //     document.querySelector('#remove-item-screen').style.display = "none";
  //     document.querySelector('#look-up-screen').style.display = "none";
  //     document.querySelector('#finish-screen').style.display = "none";
  //   }

  //   function resetTimer() {
  //       clearTimeout(time);
  //       time = setTimeout(logout, 30000)
  //   }
  // };

  const begin = () => {
    document.querySelector('#welcome-screen').style.display = "none";
    document.querySelector('#home-screen').style.display = "flex";
  }

  return (
    <div className="App">
      <div className="register">
        <div id="interactive-screen">
          <div onClick={() => {begin();}} id="welcome-screen"><div id="title1">Welcome</div><div id="title2">Touch to Begin</div></div>
            <HomeScreen></HomeScreen>
            <CancelScreen></CancelScreen>
            <RemoveItemScreen></RemoveItemScreen>
            <LookUpScreen></LookUpScreen>
            <FinishScreen></FinishScreen>
        </div>
      </div>
    </div>
  );
}

export default App;