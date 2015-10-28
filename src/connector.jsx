import React from 'react'

class Connector extends React.Component {
  constructor( props) {
    super(props)
    this.state = {
      overIn: false,
      overOut: false
    }
  }
  handleOver( end) {
    if (end === 'in') {
      this.setState({
        overIn: true
      })
    }
    if (end === 'out') {
      this.setState({
        overOut: true
      })
    }
  }

  handleOut( end) {
    if (end === 'in') {
      this.setState({
        overIn: false
      })
    }
    if (end === 'out') {
      this.setState({
        overOut: false
      })
    }
  }

  render() {
    let connectorRadius = 4
    let t = 50
    let c = 'rgb(113, 113, 113)'
    if (this.props.color) {
      c = this.props.color
    }
    let pathString = 'M' + this.props.start.x + ' ' + this.props.start.y +
      ' C ' + (this.props.start.x + t) + ' ' + this.props.start.y + ' ,' +
      (this.props.end.x - t) + ' ' + this.props.end.y + ', ' +
      this.props.end.x + ' ' + this.props.end.y
      let mark1 = null
      if(this.state.overIn){
        mark1 = <circle cx={this.props.start.x} cy={this.props.start.y} r={connectorRadius + 3} fill={'red'} stroke={'transparent'} />
      }
      let mark2 = null
      if(this.state.overOut){
        mark2 = <circle cx={this.props.end.x} cy={this.props.end.y} r={connectorRadius + 3} fill={'red'} stroke={'transparent'} />
      }
    return (
    <svg>
      <path d={pathString} strokeWidth={2} stroke={c} fill={'transparent'} />
      <circle onMouseEnter={this.handleOver.bind(this, 'in')} onMouseLeave={this.handleOut.bind(this, 'in')}
        cx={this.props.start.x} cy={this.props.start.y} r={connectorRadius} fill={c} stroke={'transparent'} />
      {mark1}
      <circle  onMouseEnter={this.handleOver.bind(this, 'out')} onMouseLeave={this.handleOut.bind(this, 'out')}
        cx={this.props.end.x} cy={this.props.end.y} r={connectorRadius} fill={c} stroke={'transparent'} />
    </svg>
    )
  }
}

export default Connector
