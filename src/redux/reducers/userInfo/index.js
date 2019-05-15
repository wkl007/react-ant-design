import Types from '../../constants'
import { loadUserInfo } from '../../../utils/catche'

const defaultState = loadUserInfo()
/**
 * state树
 * userInfo:''
 */

/**
 *
 * @param state
 * @param action
 */

export default function onAction (state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case Types.SET_USER_INFO:
      return data
    default:
      return state
  }
}
