import React from 'react';
import {spinner} from 'uikit'

function Roading({ratio}) {
    return (
       <div className="uk-position-center"><span className="uk-margin-small-right" uk-spinner={`ratio: ${ratio}`}></span></div>
    )
  }
  
  export default Roading