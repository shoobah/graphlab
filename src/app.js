import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomize } from './data/action-creators'
import Number from './number'
import Box from './box'

class App extends Component {
  constructor( props) {
    super(props)
  }

  render() {
    console.time('render') //Sparar undan starttid för det man vill mäta tiden på
    let style={
      fontFamily: 'arial',
      position: 'relative'
    }
    let tag =  <svg width={1000} height={1000} viewBox={'0 0 1000 1000'} style={style}>
                  <Box width={80} height={80} x={100} y={200} content={'Hej'} />
               </svg>
    console.timeEnd('render') //Skriver ut förfluten tid till konsollen (F12) för timern med samma namn
    return tag;
  }
}

//Redux: mappar state som kommer från vår store ( som finns i data/reducer.js) till en prop i denna komponent
//då har vi alltid aktuell state
function mapStateToProps(state){
  return{
    state: state
  }
}

//Redux: mappar dispatch funktionen till props på denna komponent. Då kan vi använda this.props.randomzie(10) för att skicka en signal
//till vår store, via action-creators, att vi vill slumpa nya värden
function mapDispatchToProps(dispatch){
  return {
    randomize: (length) => dispatch(randomize(length))
  }
}

//Redux: connect ser till att vår komponent, App, är en "smart" komponent som lyssnar på om
//det händer något i vår store.
export default connect(mapStateToProps, mapDispatchToProps)(App)
