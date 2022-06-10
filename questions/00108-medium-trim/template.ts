type Trim<S extends string> = S extends `${infer Rest}${'\n' | '\t' | ' '}`
  ? Trim<TrimRight<Rest>>
  : S extends `${'\n' | '\t' | ' '}${infer R}`
    ? Trim<TrimLeft<R>>
    : S
