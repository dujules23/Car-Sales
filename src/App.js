import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


import { connect } from 'react-redux'

const App = (props) => {

  
  
   
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// Represent state from app reducuer so that you can use props
const mapStateToProps = (state) => {
  console.log(state)
  return{
    additionalFeatures: state.additionalFeatures,
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}



export default connect(mapStateToProps)(App);

/// ***rule of 3***