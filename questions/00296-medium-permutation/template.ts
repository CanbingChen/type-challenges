// tip: ts三元判断中如果T类型是never会跳过三元判断
type Permutation<T extends keyof any> = [T] extends [never]
  ? []
  : {
      [TT in T]: [TT, ...Permutation<Exclude<T, TT>>]
    }[T]
