// 声明模块

declare module "lodash" {
  export function chunk<T>(array: T[], size: number): T[][];
}