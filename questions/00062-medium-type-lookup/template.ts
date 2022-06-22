type HasVal<U, T> = T extends U[keyof U] ? U : never
type LookUp<U, T> = U extends HasVal<U, T> ? U : never
