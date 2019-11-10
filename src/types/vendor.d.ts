/**
 * nzh/cn
 */
declare module 'nzh/cn' {
  interface options {
    tenMin: boolean;
    ww: boolean;
    complete: boolean;
    outSymbol: boolean;
  }

  function toMoney (number: string, options?: options): string
}

declare module 'enquire-js' {
  function enquireScreen (cb: (b: boolean) => void, query?: string): any

  function unenquireScreen (handler, query?: string): void;
}
