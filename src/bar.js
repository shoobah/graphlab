//Skapar en div som är value bred med slumpad färg
import React from 'react'

let getRandomValue = () => (Math.round(Math.random() * 256))

let randomColor = () => {
  return 'rgba(' +
    getRandomValue() + ', ' +
    getRandomValue() + ', ' +
    getRandomValue() + ', 1' + ')'
}

export default ({value}) => {
  let style = {
    display: 'inline-block',
    backgroundColor: randomColor(),
    width: value + 'px',
    position: 'absolute',
    left: '100px'
  }
  return <rect style={style} />
}
