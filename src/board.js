import React from 'react'
import Plugin from './plugin'

export default ({scale, plugins, connections}) => {
  console.log('plugins', plugins)
  return (
    <svg>
      {plugins.map((plugin) => (
          <Plugin key={plugin.id} data={plugin} scale={scale} />
        )
      )}
    </svg>
  )
}
