import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomize } from './data/action-creators'
import Number from './number'
import Box from './box'
import Line from './line'

class App extends Component {
  constructor( props) {
    super(props)
  }

  render() {
    console.time('render')
    let style={
      fontFamily: 'arial',
      position: 'relative'
    }
    let tag =  <svg width={1000} height={1000} viewBox={'0 0 1000 1000'} style={style}>
                  <Box width={80} height={80} x={100} y={200} content={'Hej'} />
                  <Line pathinfo={'M30 60 C 120 180, 180 180, 200 60'} color={'lime'} />
               </svg>
    console.timeEnd('render')
    return tag;
  }
}

function mapStateToProps(state){
  return{
    state: state
  }
}

function mapDispatchToProps(dispatch){
  return {
    randomize: (length) => dispatch(randomize(length))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
