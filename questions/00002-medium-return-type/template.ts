type MyReturnType<T> = T extends (...args: infer P) => infer R ? R : undefined
