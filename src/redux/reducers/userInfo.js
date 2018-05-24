import * as actionTypes from '../constants/userInfo'

const initialState = ''

export default function userInfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_ADD:
      return action.data
    case actionTypes.USERINFO_RM:
      return ''
    default:
      return state
  }
}