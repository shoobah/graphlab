import { createStore } from 'redux'
import { RANDOMIZE } from './action-creators'

const initialState = {
  grid:{
    width:100,
    height:100,
    gridsize:10
  },
  plugins:[
    {
      id:'b41b06bd-c4c3-dfa4-2699-a945a4445bc9',
      x:0,
      y:10,
      width:20,
      height:10,
      ins:['alpha', 'beta'],
      outs:['oner']
    },
    {
      id:'1f08b868-b539-a739-a259-463f95bcd21b',
      x:30,
      y:10,
      width:20,
      height:10,
      ins:['alpha','beta','theta'],
      outs:['oner','twoer']
    }
  ],
  connections:[
    {
      from:{
        pluginId:'b41b06bd-c4c3-dfa4-2699-a945a4445bc9',
        out:'oner'
      },
      to:{
        pluginId:'1f08b868-b539-a739-a259-463f95bcd21b',
        in:'beta'
      }
    },
    {
      from:{
        pluginId:'b41b06bd-c4c3-dfa4-2699-a945a4445bc9',
        out:'oner'
      },
      to:{
        pluginId:'1f08b868-b539-a739-a259-463f95bcd21b',
        in:'theta'
      }
    }
  ]
}

//Redux: en reducer är en funktion som tar state och action och returnerar en ny state beroende på vilken action
//som ska utföras på den
//man kan ange default värden i funktioner, här används det för att vi ska få initialState som startvärde på state när
//applikationen startas.
function reducer (state = initialState, action) {
  //vår action som definierats i action-creators skickar med typen RANDOMIZE och ett värde på hur många
  //värden som ska slumpas
  switch (action.type) {
    case RANDOMIZE:
      let giveMeRandom = () => (Math.round(Math.random() * 1000))
      let newList = []
      for (let i = 0; i < action.length; i++) {
        newList.push(giveMeRandom())
      }
      return Object.assign({}, state, {
        list: newList
      })
      break
    default: //Om ingen action signalerats ska man returnera samma state som kom in som argument
      return state
  }
}

export default createStore(reducer)
