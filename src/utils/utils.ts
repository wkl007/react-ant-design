import moment from 'moment'
import { parse, stringify } from 'qs'
import nzh from 'nzh/cn'

export enum dateType {'today', 'week', 'month', 'year'}

/**
 *
 * @param val
 */
export function fixedZero (val: number): string {
  return val < 10 ? `0${val}` : String(val)
}

/**
 *
 * @param type
 */
export function getTimeDistance (type: dateType): undefined[] | [moment.Moment] | [undefined, moment.Moment] | [moment.Moment, moment.Moment] {

  const now: Date = new Date()
  const oneDay: number = 1000 * 60 * 60 * 24
  const year: number = now.getFullYear()

  switch (type) {
    case dateType.today:
      now.setHours(0)
      now.setMinutes(0)
      now.setSeconds(0)
      return [moment(now), moment(now.getTime() + (oneDay - 1000))]
    case dateType.week:
      let day: number = now.getDay()
      now.setHours(0)
      now.setMinutes(0)
      now.setSeconds(0)
      if (day === 0) {day = 6} else {day -= 1}
      const beginTime: number = now.getTime() - day * oneDay
      return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))]
    case dateType.month:
      const month: number = now.getMonth()
      const nextDate: moment.Moment = moment(now).add(1, 'months')
      const nextYear: number = nextDate.year()
      const nextMonth: number = nextDate.month()
      return [
        moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
        moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`)
          .valueOf() - 1000)
      ]
    case dateType.year:
      return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)]
    default:
      return []
  }
}

/**
 *
 * @param nodeList
 * @param parentPath
 */
export function getPlainNode (nodeList: Array<any>, parentPath: string = ''): Array<object> {
  const arr: Array<object> = []
  nodeList.forEach(node => {
    const item = node
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/')
    item.exact = true
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path))
    } else {
      if (item.children && item.component) {
        item.exact = false
      }
      arr.push(item)
    }
  })
  return arr
}

/**
 *
 * @param n
 */
export function digitUppercase (n: string): string {
  return nzh.toMoney(n)
}

/**
 *
 * @param str1
 * @param str2
 */
function getRelation (str1: string, str2: string): number {
  if (str1 === str2) {
    console.warn('Two path are equal!') // eslint-disable-line
  }
  const arr1 = str1.split('/')
  const arr2 = str2.split('/')
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2
  } else {
    return 3
  }
}

/**
 *
 * @param routes
 */
function getRenderArr (routes: Array<any>): Array<any> {
  let renderArr: Array<any> = []
  renderArr.push(routes[0])
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1)
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3)
    if (isAdd) {
      renderArr.push(routes[i])
    }
  }
  return renderArr
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param path
 * @param routerData
 */
export function getRoutes (path: string, routerData: any): Array<any> {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  )
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''))
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes)
  // Conversion and stitching parameters
  return renderArr.map(item => {
    const exact = !routes.some(
      route => route !== item && getRelation(route, item) === 1)
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`
    }
  })
}

/**
 *
 */
export function getPageQuery (): object {
  return parse(window.location.href.split('?')[1])
}

/**
 *
 * @param path
 * @param query
 */
export function getQueryPath (path: string = '', query: object = {}): string {
  const search: string = stringify(query)
  return search.length ? `${path}?${search}` : path
}

/**
 *
 * @param path
 */
export function isUrl (path: string): boolean {
  const reg: RegExp = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

/**
 * /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userIndo/2144/id']
 * @param url
 */
export function urlToList (url: string): Array<string> {
  const urlList: Array<string> = url.split('/').filter(i => i)
  return urlList.map((urlItem, index) => {
    return `/${urlList.slice(0, index + 1).join('/')}`
  })
}
