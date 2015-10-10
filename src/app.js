import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomize } from './data/action-creators'
import Board from './board'

class App extends Component {
  constructor( props) {
    super(props)
  }

  render() {
    console.time('render')
    let style={
      fontFamily: 'arial',
      position: 'relative',
      backgroundColor:'#EEEEEE'
    }
    let g = this.props.grid
    let tag =  <svg width={g.width * g.gridsize} height={g.height * g.gridsize} style={style}>
                <Board isOn={this.props.status.on} scale={g.gridsize} plugins={this.props.plugins} connections={this.props.connections} />
               </svg>
    console.timeEnd('render')
    return tag;
  }
}

function mapStateToProps(state){
  return{
    grid: state.grid,
    plugins: state.plugins,
    connections: state.connections,
    status: state.status
  }
}

function mapDispatchToProps(dispatch){
  return {
    randomize: (length) => dispatch(randomize(length))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
