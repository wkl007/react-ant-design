/*declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
  }
}*/

declare module '*.less' {
  const classes: { [key: string]: string }
  export default classes
}

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

  interface session {
    set (key: string, val: any): any

    get (key: string, def: any): any

    has (key: string): boolean

    remove (key: string): void

    clear (): void

    getAll (): object

    forEach (callback): void
  }

  declare let session: session
}

/**
 * nzh/cn
 */
declare module 'nzh/cn' {
  interface options {
    tenMin: boolean,
    ww: boolean,
    complete: boolean,
    outSymbol: boolean
  }

  function toMoney (number: string, options?: options): string
}

declare module 'enquire-js' {
  function enquireScreen (cb: (b: boolean) => void, query?: string): any

  function unenquireScreen (handler, query?: string): void;
}
