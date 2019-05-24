import React from 'react';



function Features(props){
  console.log(props.features)
  const featureItems = props.features.map(item => {
    debugger;
    return (
      <div key={props.key} className={item.props.className}>
        <div className='feature__name'>{item.key}</div>
        <ul classname='feature__list'>
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
