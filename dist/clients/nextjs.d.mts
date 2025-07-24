import NextNodeServer from 'next/dist/server/next-server';
import { RequestMeta, NextIncomingMessage } from 'next/dist/server/request-meta';
import prom from 'prom-client';
import { O as OpenAPM } from '../OpenAPM-0f1dde00.js';
import 'express';
import 'http';
import 'events';

interface NextUtilities {
    getRequestMeta: <K extends keyof RequestMeta>(req: NextIncomingMessage, key?: K) => RequestMeta[K] | RequestMeta;
}
declare const instrumentNextjs: (nextServer: typeof NextNodeServer, nextUtilities: NextUtilities, { counter, histogram }: {
    counter?: prom.Counter<string> | undefined;
    histogram?: prom.Histogram<string> | undefined;
}, openapm: OpenAPM) => void;

export { instrumentNextjs };
