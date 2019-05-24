import React from 'react';
import Features from '../Features/Features';
import './TechSpecs.css'

function TechSpecs(props){
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Features features={props.features}/>
    </section>
  )
}

export default TechSpecs;
