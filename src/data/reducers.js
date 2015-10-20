import { createStore } from 'redux'
import { MOUSECLICK, MOUSEMOVE } from './action-creators'
import startState from './initial-state'

const initialState = startState

function reducer (state = initialState, action) {
  switch (action.type) {
    case MOUSECLICK:
      if(action.button === 1){
        return Object.assign({},state,{
          mouse:{
            clicked:true,
            x: action.x,
            y: action.y,
            button: action.button
          }
        })
      }
      else return state
      break
      
    case MOUSEMOVE:
      if(action.button === 1){
        return Object.assign({},state,{
          mouse:{
            clicked:true,
            x: action.x,
            y: action.y,
            button: action.button
          }
        })
      }
      else return state
      break
      
      default:
      return state
  }
}

export default createStore(reducer)
