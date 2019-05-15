import storage from 'good-storage'

const USER_KEY = '__userInfo__'

/*用户信息相关*/
export function loadUserInfo () {
  return storage.session.get(USER_KEY, '')
}

export function saveUserInfo (query) {
  storage.session.set(USER_KEY, query)
  return query
}

export function deleteUserInfo () {
  storage.session.remove(USER_KEY)
  return ''
}
