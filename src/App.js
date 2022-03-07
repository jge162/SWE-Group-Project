import './App.css';
import HomeScreen from './homeScreen';
import LookUpScreen from './lookUpScreen';
import FinishScreen from './finishScreen';
import WelcomeScreen from './welcomeScreen';

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

 
  return (
    <div className="App">
        <div id="interactive-screen">

      <WelcomeScreen></WelcomeScreen>
      <HomeScreen></HomeScreen>
      <LookUpScreen></LookUpScreen>
      <FinishScreen></FinishScreen>
    </div>
    </div>
  );
}

export default App;



    // // add item divs to home screen
    // const item_info =
    // React.createElement('div', { className: 'item-info' },
    //   React.createElement('div', { className: 'item-count' }, amount),
    //   React.createElement('div', { className: 'item-name' }, groceryItem),
    //   React.createElement('div', { className: 'item-cost-box' }, 
    //     React.createElement('div', { className: 'item-cost' }, groceryPrice),
    //     React.createElement('div', { className: 'separator' }, ),
    //     React.createElement('div', { className: 'item-total' }, "$"+ groceryTotal + " total"),
    //   ),
    //   React.createElement('div', { className: 'item-remove-box' }, 
    //     React.createElement('div', { className: 'remove-all-btn' }, "Remove all"),
    //     React.createElement('div', { className: 'remove-one-btn' }, "Remove 1"),
    //   ),
    // );
    
    // ReactDOM.render(
    //   item_info,
    //   document.getElementById('item-list')
    // );
