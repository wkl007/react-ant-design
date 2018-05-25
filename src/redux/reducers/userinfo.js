import * as actionTypes from '../constants/userinfo'
import { loadUserInfo } from '../../utils/catche'

const initialState = loadUserInfo()

export default function userinfo (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERINFO_ADD:
      return action.data
    case actionTypes.USERINFO_RM:
      return ''
    default:
      return state
  }
}