type Pop<T extends any[]> = T extends [...infer pre, infer last] ? pre : []
