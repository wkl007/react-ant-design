import Types from '@/redux/constants'
import { saveSessionStorage, USER_INFO } from '@/utils/cache'

export function setUserInfo (data: any): object {
  saveSessionStorage(USER_INFO, data)
  return {
    type: Types.SET_USER_INFO,
    data
  }
}
