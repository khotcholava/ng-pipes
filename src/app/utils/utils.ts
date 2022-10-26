export function isobject<T>(obj: T): boolean {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

export function isEmptyArray<T>(arr: T[]): boolean {
  return arr.length === 0
}

export function isString(value: any): value is string {
  return  typeof value === "string"
}

export function length<T>(value: T[] | T): T | number {
  if(!isArray(value) && !isobject(value) && !isString(value)) {
    return  value as T
  }
  if(isobject(value)) {
    return  Object.keys(value).length
  }
  return (value as T[]).length
}

export function isArray<T>(arg: T): boolean {
  return Array.isArray(arg)
}

export function isNull<T>(value: T): boolean {
  return  value === null
}

export function every<T>(arr: T[], predicate: (value: T, index: number, array: T[]) => unknown): boolean {
  const {length} = arr
  for (let i = 0; i < length; i++) {
    const value = arr[i]
    if (!predicate(value, i, arr)) {
      return false
    }
  }
  return true
}

