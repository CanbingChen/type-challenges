type Last<T extends any[]> = T extends [...infer pre, infer last]
  ? last
  : unknown
