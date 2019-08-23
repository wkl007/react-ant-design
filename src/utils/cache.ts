import storage from 'good-storage'

export const USER_INFO: string = 'User_Info'

/**
 * 设置本地存储
 * @param key
 * @param value
 * @returns {*}
 */
export function saveStorage (key: string, value: any): any {
  storage.set(key, value)
  return value
}

/**
 * 获取本地存储
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export function loadStorage (key: string, defaultValue: any): any {
  return storage.get(key, defaultValue)
}

/**
 * 删除本地存储
 * @param key
 * @returns {string}
 */
export function removeStorage (key: string): string {
  storage.remove(key)
  return ''
}

/**
 * 保存会话存储
 * @param key
 * @param value
 * @returns {*}
 */
export function saveSessionStorage (key: string, value: any): any {
  storage.session.set(key, value)
  return value
}

/**
 * 获取会话存储
 * @param key
 * @param defaultValue
 * @returns {*}
 */
export function loadSessionStorage (key: string, defaultValue: any): any {
  return storage.session.get(key, defaultValue)
}

/**
 * 删除会话存储
 * @param key
 * @returns {string}
 */
export function removeSessionStorage (key: string): string {
  storage.session.remove(key)
  return ''
}
