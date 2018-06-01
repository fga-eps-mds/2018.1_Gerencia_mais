import {
  IS_LOGGED,
} from '../actions/actions'

let initalState = {
  status: false
}

export default function loggin(state = initalState, action){
  switch(action.type){
    case IS_LOGGED:
      return Object.assign({},state, {
        status: action.status
      })
      default:
        return state
  }
}
