"use strict";
var node_async_hooks = require("node:async_hooks");
var storeAsyncLocalStorageInGlobalThis = function(key, asyncLocalStorage) {
    globalThis[key] = asyncLocalStorage;
};
var createAsyncLocalStorage = function() {
    return new node_async_hooks.AsyncLocalStorage();
};
exports.createAsyncLocalStorage = createAsyncLocalStorage;
exports.storeAsyncLocalStorageInGlobalThis = storeAsyncLocalStorageInGlobalThis;
