import Cookies, { CookieAttributes } from 'js-cookie'
import storage from 'good-storage'

/**
 * 设置cookie
 * @param key
 * @param value
 * @param options
 */
export function saveCookie (key: string, value: string, options?: CookieAttributes | undefined): string {
  Cookies.set(key, value, options)
  return value
}

/**
 * 获取cookie
 * @param key
 * @param defaultValue
 */
export function loadCookie (key: string, defaultValue: string): string {
  return Cookies.get(key) || defaultValue
}

/**
 * 删除cookie
 * @param key
 * @param options
 */
export function removeCookie (key: string, options?: CookieAttributes | undefined): string {
  Cookies.remove(key, options)
  return ''
}

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
