import React from 'react'

export default ({pathinfo, color}) => {
  return(
    <path d={pathinfo} fill={'transparent'} stroke={color} />
  )
}
