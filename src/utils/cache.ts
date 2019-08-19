// @ts-ignore
import storage from 'good-storage'

const USER_KEY: string = '__userInfo__'

/* 用户信息相关 */
export function loadUserInfo (): string {
  return storage.session.get(USER_KEY, '')
}

export function saveUserInfo (query: void): void {
  storage.session.set(USER_KEY, query)
  return query
}

export function deleteUserInfo (): string {
  storage.session.remove(USER_KEY)
  return ''
}
