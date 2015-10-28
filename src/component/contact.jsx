import React, { Component } from 'react'
import { connect } from 'react-redux'
import { contactClick } from '../data/action-creators'


class Contact extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let con=null
    let info=this.props.info  
    if(this.props.type === 'in'){
      con = (
        <svg >
          <circle onClick={this.props.click.bind(this,{dir:'in', data: info.data, contact:info.item}, true)} cx={info.data.x * info.scale} cy={info.data.y * info.scale + info.scale * 2 * (info.index+1)} r={6} fill={'rgb(130, 224, 182)'} stroke={'black'} />
          <text x={info.data.x * info.scale + 10} y={info.data.y * info.scale + info.scale * 2 * (info.index+1) + 3}>{info.item.name}</text>
        </svg>
      )
    } else { //out contact
      con = (
        <svg>
          <circle onClick={this.props.click.bind(this,{dir:'out', data: info.data, contact:info.item}, true)} cx={info.data.x * info.scale + info.data.width*info.scale} cy={info.data.y * info.scale + info.scale * 2 * (info.index+1)} r={6} fill={'rgb(68, 145, 224)'} stroke={'black'} />
          <text x={info.data.x * info.scale + info.data.width*info.scale - 10} y={info.data.y * info.scale + info.scale * 2 * (info.index+1) + 3} textAnchor={'end'}>{info.item.name}</text>
        </svg>
      )
    }
    
    return con
  }
}

function mapStateToProps(state){
  return{
    mouse: state.mouse
  }
}

function mapDispatchToProps(dispatch){
  return {
    click: (id, isOn) => dispatch(contactClick(id, isOn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)