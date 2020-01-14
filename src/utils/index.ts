import dayjs from 'dayjs'
import { parse, stringify } from 'qs'
import nzh from 'nzh/cn'

enum DateType {'today', 'week', 'month', 'year'}

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
export function getTimeDistance (type: DateType): Array<dayjs.Dayjs> {
  const now: Date = new Date()
  const oneDay: number = 1000 * 60 * 60 * 24
  const year: number = now.getFullYear()

  switch (type) {
    case DateType.today:
      now.setHours(0)
      now.setMinutes(0)
      now.setSeconds(0)
      return [dayjs(now), dayjs(now.getTime() + (oneDay - 1000))]
    case DateType.week: {
      let day: number = now.getDay()
      now.setHours(0)
      now.setMinutes(0)
      now.setSeconds(0)
      if (day === 0) { day = 6 } else { day -= 1 }
      // eslint-disable-next-line no-case-declarations
      const beginTime: number = now.getTime() - day * oneDay
      return [dayjs(beginTime), dayjs(beginTime + (7 * oneDay - 1000))]
    }
    case DateType.month: {
      const month: number = now.getMonth()
      const nextDate: dayjs.Dayjs = dayjs(now).add(1, 'month')
      const nextYear: number = nextDate.year()
      const nextMonth: number = nextDate.month()
      return [
        dayjs(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
        dayjs(dayjs(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`)
          .valueOf() - 1000)
      ]
    }
    case DateType.year:
      return [dayjs(`${year}-01-01 00:00:00`), dayjs(`${year}-12-31 23:59:59`)]
    default:
      return []
  }
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
 * @param path
 */
export function isUrl (path: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const reg: RegExp = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}
