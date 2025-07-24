import { AsyncLocalStorage } from 'node:async_hooks';

declare const storeAsyncLocalStorageInGlobalThis: <T>(key: string, asyncLocalStorage: AsyncLocalStorage<T>) => void;
declare const createAsyncLocalStorage: <T>() => AsyncLocalStorage<T>;

export { createAsyncLocalStorage, storeAsyncLocalStorageInGlobalThis };
