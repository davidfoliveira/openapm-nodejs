declare const defineProperty: <V extends unknown, N extends string | number | symbol>(object: Record<N, V>, name: N, value: V) => void;
declare const symbols: {
    WRAPPED: symbol;
    ORIGINAL: symbol;
    UNWRAP: symbol;
};
declare function isWrapped<T extends Record<string | number | symbol, any>, K extends keyof T>(nodule: T, name: K): any;
/**
 * @description Wraps a property (typically a function) of a given object (nodule) with a provided wrapper function.
 *
 * @param {T} nodule - The object containing the property to be wrapped.
 * @param {K} name - The key of the property to be wrapped.
 * @param {(original: T[K]) => T[K]} wrapper - The function that will be used to wrap the original property.
 *
 * @returns {T[K]} The wrapped function.
 */
declare function wrap<T extends Record<string | number | symbol, any>, K extends keyof T>(nodule: T, name: K, wrapper: (original: T[K]) => T[K]): T[K] | undefined;

export { defineProperty, isWrapped, symbols, wrap };
