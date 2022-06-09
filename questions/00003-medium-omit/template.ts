type MyOmit<T, K> = {
  [k in keyof T as k extends K ? never : k]: k extends K ? unknown : T[k]
}
