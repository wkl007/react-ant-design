declare module 'good-storage' {

  function get (key: string, def: any): any

  function set (key: string, val: any): void

  function remove (key: string): void

  interface sessionInterface {
    storage: WindowSessionStorage

    get (USER_KEY: string, s: string): any

    set (USER_KEY: string, query: void): void

    remove (USER_KEY: string): void
  }

  declare let session: sessionInterface
}
