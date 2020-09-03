import { userConstants } from '../_constants';

export function users(state = {userName:""}, action) {
  switch (action.type) {
    case userConstants.USER_NAME: 
    return {
      ...state,
      userName: action.payload
    }
    default:
      return state
  }
}