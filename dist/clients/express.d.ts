import * as Express from 'express';
import { O as OpenAPM } from '../OpenAPM-0f1dde00.js';
import 'prom-client';
import 'http';
import 'events';

declare const instrumentExpress: (express: typeof Express, redMiddleware: Express.RequestHandler, openapm: OpenAPM) => void;

export { instrumentExpress };
