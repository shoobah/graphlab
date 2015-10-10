import React from 'react'
import Box from './box'

export default ({data, scale, isOn}) => {
  let color='#ffdf54'
  if(isOn){
    color='rgb(45, 249, 35)'
  }
  return (<svg style={{fontSize:'10px'}}>
            <Box
              color={color}
              x={data.x * scale}
              y={data.y * scale}
              width={data.width * scale}
              height={Math.max(data.ins.length, data.outs.length) * 2 * scale + 20} />
            {data.ins.map((i, index) => (
              <svg key={index}>
                <circle cx={data.x*scale} cy={data.y * scale + scale * 2 * (index+1)} r={6} fill={'rgb(130, 224, 182)'} stroke={'black'} />
                <text x={data.x*scale + 10} y={data.y * scale + scale * 2 * (index+1) + 3}>{i.name}</text>
              </svg>
            ))}
            {data.outs.map((o, index) => (
              <svg key={index}>
                <circle cx={data.x*scale + data.width*scale} cy={data.y * scale + scale * 2 * (index+1)} r={6} fill={'rgb(68, 145, 224)'} stroke={'black'} />
                <text x={data.x*scale + data.width*scale - 10} y={data.y * scale + scale * 2 * (index+1) + 3} textAnchor={'end'}>{o.name}</text>
              </svg>
            ))}
          </svg>)
}
