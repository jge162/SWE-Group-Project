import './css/lookUpScreen.css';

import React from 'react';

const Scroll = (props) => {
  return( 
    <div style={{marginTop: "58px", padding: "0 113px 0 113px", overflowY: 'scroll', height:'453px'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;