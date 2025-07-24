"use strict";
var defineProperty = function(object, name, value) {
    var enumerable = !!object[name] && typeof object === "object" && object !== null && object.propertyIsEnumerable(name);
    Object.defineProperty(object, name, {
        enumerable: enumerable,
        value: value,
        configurable: true,
        writable: true
    });
};
var symbols = {
    WRAPPED: Symbol("WRAPPED"),
    // Symbol indicating that a function or property has been wrapped.
    ORIGINAL: Symbol("ORIGINAL"),
    // Symbol used to store the original version of the function or property prior to wrapping.
    UNWRAP: Symbol("UNWRAP")
};
function isWrapped(nodule, name) {
    var original = nodule === null || nodule === void 0 ? void 0 : nodule[name];
    return original.hasOwnProperty(symbols.WRAPPED);
}
function wrap(nodule, name, wrapper) {
    var original = nodule === null || nodule === void 0 ? void 0 : nodule[name];
    if (name && (!nodule || !original)) {
        console.error("Function ".concat(String(name), " does not exists"));
        return;
    }
    if (typeof wrapper !== "function" && typeof original !== "function") {
        console.error("The wrapper and the original object property must be a function");
        return;
    }
    var wrappedFn = wrapper(original);
    defineProperty(wrappedFn, symbols.ORIGINAL, original);
    defineProperty(wrappedFn, symbols.UNWRAP, function() {
        if (nodule[name] === wrappedFn) {
            defineProperty(nodule, symbols.WRAPPED, false);
            defineProperty(nodule, name, original);
        }
    });
    defineProperty(wrappedFn, symbols.WRAPPED, true);
    defineProperty(nodule, name, wrappedFn);
    return wrappedFn;
}
exports.defineProperty = defineProperty;
exports.isWrapped = isWrapped;
exports.symbols = symbols;
exports.wrap = wrap;
