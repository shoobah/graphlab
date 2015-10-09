import React from 'react'

export default ({x, y, width, height, content}) => {
  let style = {
    display: 'inline-block',
    fill: '#23FF88',
    stroke: 'black',
    strokeWidth: '2'
  }
  let fontsize=20;

  return (
    <svg>
      <rect x={x} y={y} width={width} rx={5} ry={5} height={height} style={style} />
      <text x={x+width/2} y={y+height/2+fontsize/3} fontSize={fontsize} textAnchor={'middle'}>{content}</text>
    </svg>
  )
}
