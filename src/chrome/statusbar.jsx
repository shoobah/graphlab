import React from 'react'

export default ({text, color, bgColor, height}) => {
  return(
    <svg>
      <rect x={0} y={0} width={1000} height={height} style={{fill:'#CCCCCC'}} />
      <line x1={0} y1={height} x2={1000} y2={height} style={{stroke:'#AAAAAA', strokeWidth:'1px' }} />
      <text style={{stroke:'color'}} x={10} y={height - 10 + 'px'} >{text}</text>
    </svg>
  )
}
