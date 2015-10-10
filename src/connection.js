import React from 'react'

//cx={data.x*scale + data.width*scale} cy={data.y * scale + scale * 2 * (index+1)}

export default ({connection, plugins, scale}) => {
  console.log('connection', connection)
  console.log('plugins', plugins)
  //TODO:Get coords for the from and to connectors
  return(
    <path d={'M' + 120 + ' 60 C 120 80, 180 80, 170 60'} strokeWidth={2} stroke={'black'} fill={'transparent'} />
  )
}
