import { AsyncLocalStorage } from 'async_hooks';

type HTTPRequestStore = {
    labels: Record<string, string>;
};
declare const asyncLocalStorage: AsyncLocalStorage<HTTPRequestStore>;
declare const getHTTPRequestStore: () => HTTPRequestStore | undefined;
declare const runInHTTPRequestStore: <R>(fn: any) => R;
declare const setOpenAPMLabels: (labels: Record<string, string>) => void;

export { HTTPRequestStore, asyncLocalStorage, getHTTPRequestStore, runInHTTPRequestStore, setOpenAPMLabels };
