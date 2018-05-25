import * as actionTypes from '../constants/userinfo'

export function add (data) {
  return {
    type: actionTypes.USERINFO_ADD,
    data,
  }
}

export function rm (data) {
  return {
    type: actionTypes.USERINFO_RM,
    data,
  }
}