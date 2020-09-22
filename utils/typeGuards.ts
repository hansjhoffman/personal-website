type Undefinable<A> = A | undefined;

export const isUndefined = (x: unknown): x is undefined => x === undefined;

export const isNotUndefined = <A>(x: Undefinable<A>): x is Exclude<A, undefined> => !isUndefined(x);
