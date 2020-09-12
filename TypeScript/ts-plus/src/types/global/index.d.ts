declare var haha: () => void

declare var xixi: {
  houhou(message: any): void
}

interface wuwu {
  haha(message?: any): void
  xixi(message?: any): void
}

declare var wuwu: wuwu;

declare namespace aoao {
  function log(message?: any): void
  function error(message?: any): void
}

declare function setHaha(func: () => void, time: number): number