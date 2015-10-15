import React, { Component } from 'react'
import { connect } from 'react-redux'
import Connector from './connector'
// cx={data.x*scale + data.width*scale} cy={data.y * scale + scale * 2 * (index+1)}

class Connection extends Component {
  constructor(props){
    super(props)
  }

  render() {
    // TODO:Get coords for the from and to connectors
    return (
      <svg>
        <Connector start={{x: 10, y: 10}} end={{x: this.props.mouse.x, y: this.props.mouse.y}} color={'#6c1b5f'} />
      </svg>
    )
  }
}

function mapStateToProps(state){
  return{
    mouse: state.mouse
  }
}

export default connect(mapStateToProps)(Connection)