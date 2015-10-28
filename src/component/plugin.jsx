import React from 'react'
import Contact from './contact'
import Box from './box'

export default ({data, scale, isOn}) => {
  let color='#ffdf54'
  if(isOn){
    color='rgb(45, 249, 35)'
  }
  return (
    <svg style={{fontSize:'10px'}}>
      <Box
        color={color}
        x={data.x * scale}
        y={data.y * scale}
        width={data.width * scale}
        height={Math.max(data.ins.length, data.outs.length) * 2 * scale + 20} 
      />
      {data.ins.map((item, index) => (
        <Contact type={'in'} key={index} info={{data:data, scale:scale, index:index, item:item}}/>
      ))}
      {data.outs.map((item, index) => (
        <Contact type={'out'} key={index} info={{data:data, scale:scale, index:index, item:item}}/>
      ))}
    </svg>
  )
}

//TODO: När man loopar igenom out pinnarna, kolla om den har en 'to' och rita en koppling dit.
