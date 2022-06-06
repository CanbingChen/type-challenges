import type { Equal } from "@type-challenges/utils"

type Includes<T extends readonly any[], U> = T extends [infer A, ...infer Rest]
  ? Equal<A, U> extends true
    ? true
    : Includes<Rest, U>
  : false