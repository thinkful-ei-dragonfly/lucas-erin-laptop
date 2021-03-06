import React from 'react';
import SelectedFeatures from '../SelectedFeatures/SelectedFeatures';
import Total from '../Total/Total';
import './Summary.css'

function Summary(props){
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <SelectedFeatures summary={props.summary}/>
      <Total total={props.total}/>
    </section>
  )
}

export default Summary;
