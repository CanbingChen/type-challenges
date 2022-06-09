type Permutation<T extends keyof any> = [T] extends [never] ? 
  [] :
  {
    [TT in T]: [TT, ...Permutation<Exclude<T, TT>>]
  }[T];
