import React from 'react';

function Features(props){
  const featureItems = props.features.map(item => {
    return (
      <div key={item.key} className={item.props.className}>
        <div className='feature__name'>{item.key}</div>
        <ul className='feature__list'>
          {item.props.children[1].props.children}
        </ul>
      </div>
    )
  })

  return (
    <div>
    {featureItems}
    </div>)
}

export default Features;
