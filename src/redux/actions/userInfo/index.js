import Types from '../../constants'
import { saveUserInfo } from '../../../utils/catche'

export function setUserInfo (data) {
  saveUserInfo(data)
  return {
    type: Types.SET_USER_INFO,
    data
  }
}
