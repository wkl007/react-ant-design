/*declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
  }
}*/

/**
 * good-storage
 */
declare module 'good-storage' {

  function set (key: string, val: any): any

  function get (key: string, def: any): any

  function has (key: string): boolean

  function remove (key: string): void

  function clear (): void

  function getAll (): object

  function forEach (callback): void

  interface sessionInterface {
    set (key: string, val: any): any

    get (key: string, def: any): any

    has (key: string): boolean

    remove (key: string): void

    clear (): void

    getAll (): object

    forEach (callback): void
  }

  declare let session: sessionInterface
}

/**
 * nzh/cn
 */
declare module 'nzh/cn' {
  interface optionsInterface {
    tenMin: boolean,
    ww: boolean,
    complete: boolean,
    outSymbol: boolean
  }

  function toMoney (number: string, options?: optionsInterface): string
}
