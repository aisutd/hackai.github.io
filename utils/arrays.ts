// Source: https://github.com/acmutd/calendar-converter/blob/master/src/util.ts
export function arrayEquals<T>(xs: readonly T[], ys: readonly T[]): boolean {
  return xs.length === ys.length && xs.every((v, i) => v === ys[i])
}
