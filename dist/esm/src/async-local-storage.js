import { AsyncLocalStorage } from "node:async_hooks";
var storeAsyncLocalStorageInGlobalThis = function(key, asyncLocalStorage) {
    globalThis[key] = asyncLocalStorage;
};
var createAsyncLocalStorage = function() {
    return new AsyncLocalStorage();
};
export { createAsyncLocalStorage, storeAsyncLocalStorageInGlobalThis };
