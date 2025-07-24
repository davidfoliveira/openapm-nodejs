"use strict";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var async_hooks = require("async_hooks");
var asyncLocalStorage = new async_hooks.AsyncLocalStorage();
var getHTTPRequestStore = function() {
    return asyncLocalStorage.getStore();
};
var runInHTTPRequestStore = function(fn) {
    return asyncLocalStorage.run({
        labels: {}
    }, fn);
};
var setOpenAPMLabels = function(labels) {
    var store = getHTTPRequestStore();
    if (typeof store !== "undefined") {
        store.labels = _object_spread({}, store.labels, labels);
    }
};
exports.asyncLocalStorage = asyncLocalStorage;
exports.getHTTPRequestStore = getHTTPRequestStore;
exports.runInHTTPRequestStore = runInHTTPRequestStore;
exports.setOpenAPMLabels = setOpenAPMLabels;
