import Types from '@/redux/constants'
import { loadSessionStorage, USER_INFO } from '@/utils/cache'

const defaultState: string = loadSessionStorage(USER_INFO, '')

/**
 *
 * @param state
 * @param action
 */
export default function onAction (state: string = defaultState, action: { type: string; data: any; }) {
  const { type, data } = action
  switch (type) {
    case Types.SET_USER_INFO:
      return data
    default:
      return state
  }
}
