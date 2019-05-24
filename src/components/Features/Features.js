import React from 'react';
import './Features.css'
import FeatureItem from '../FeatureItem/FeatureItem'

function Features(props){
  return (
    <div>
      <FeatureItem features={props.features}/>
    </div>)
}

export default Features;
