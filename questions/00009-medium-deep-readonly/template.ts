type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends () => unknown
    ? T[key]
    : T[key] extends {}
    ? DeepReadonly<T[key]>
    : T[key]
}
