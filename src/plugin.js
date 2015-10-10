import React from 'react'
import Box from './box'

export default ({data, scale}) => (
  <Box x={data.x * scale}
    y={data.y * scale}
    width={data.width * scale}
    height={data.height * scale} />
)
