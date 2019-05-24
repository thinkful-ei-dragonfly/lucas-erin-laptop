import React from 'react';
import Features from '../Features/Features';

function TechSpecs(props){
  console.log('log from Tech Specs')
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Features features={props.features}/>
    </section>
  )
}

export default TechSpecs;