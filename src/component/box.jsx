import React from 'react'

export default ({x, y, width, height, color}) => {
  let style = {
    fill: color,
    stroke: 'black',
    strokeWidth: '2'
  }
  let fontsize=20;

  return (
      <rect x={x} y={y} width={width} rx={5} ry={5} height={height} style={style} />
  )
}
