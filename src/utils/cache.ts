// @ts-ignore
import storage from 'good-storage'
// @ts-ignore
declare module 'good-storage' {
  function get (key: string, def: any): any

  function set (key: string, val: any): void

  function remove (key: string): void
}

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
