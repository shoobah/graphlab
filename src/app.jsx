import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mouseClick, mouseMove } from './data/action-creators'
import Board from './board'
import Statusbar from './statusbar'

class App extends Component {
  constructor( props) {
    super(props)
  }

  render() {
    console.time('render')
    let style={
      fontFamily: 'arial',
      position: 'relative',
      backgroundColor:'#EEEEEE',
      MozUserSelect: '-moz-none',
      KhtmlUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    }
    let g = this.props.grid
    let tag =  <svg width={g.width * g.gridsize} height={g.height * g.gridsize} style={style} onMouseMove={this.props.move.bind(this)}>
                <Statusbar text={'lkasj'} color={'lime'} height={30}/>
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
    click: (e) => dispatch(mouseClick(e)),
    move: (e) => dispatch(mouseMove(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
