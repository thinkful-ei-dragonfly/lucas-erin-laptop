import React from 'react';
import Features from '../Features/Features';
import './TechSpecs.css'

function TechSpecs(props){
  console.log('log from Tech Specs')
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      <Features onUpdate={props.onUpdate} features={props.features}/>
    </section>
  )
}

export default TechSpecs;
