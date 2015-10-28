import React from 'react'
import Plugin from './component/plugin'
import Connection from './connection'

export default ({isOn, scale, plugins, connections}) => {
  return (
    <svg>
      {plugins.map((plugin) => (
          <Plugin key={plugin.id} data={plugin} scale={scale} isOn={isOn} />
        )
      )}
      {connections.map((connection, index) => (
        <Connection key={index} connection={connection} plugins={plugins} scale={scale} />
      ))}
    </svg>
  )
}
