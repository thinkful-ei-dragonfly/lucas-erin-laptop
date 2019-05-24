import React from 'react';
import SelectedFeatures from '../SelectedFeatures/SelectedFeatures';
import Total from '../Total/Total'

function Summary(props){
  console.log('log from Summary')
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <SelectedFeatures summary={props.summary}/>
      <Total total={props.total}/>
    </section>
  )
}

export default Summary;