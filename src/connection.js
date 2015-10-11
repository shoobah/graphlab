import React from 'react'
import Connector from './connector'
// cx={data.x*scale + data.width*scale} cy={data.y * scale + scale * 2 * (index+1)}

export default ({connection, plugins, scale}) => {
  console.log('connection', connection)
  console.log('plugins', plugins)
  // TODO:Get coords for the from and to connectors
  return (
    <svg>
      <Connector start={{x: 10, y: 10}} end={{x: 100, y: 80}} color={'#6c1b5f'} />
    </svg>
  )
}
