import * as os from 'os';
import type * as Express from 'express';
import { isWrapped, wrap } from '../shimmer';
import type OpenAPM from '../OpenAPM';
import { Server } from 'http';
import { AsyncLocalStorage } from 'async_hooks';
import type { HTTPRequestStore } from '../async-local-storage.http';

export const instrumentExpress = (
  express: typeof Express,
  redMiddleware: Express.RequestHandler,
  openapm: OpenAPM
) => {
  const routerProto = express.Router as unknown as Express.Router['prototype'];

  wrap(routerProto.use ? routerProto : routerProto.prototype, 'use', (original) => {
    return function wrappedUse(
      this: typeof original,
      ...args: Parameters<typeof original>
    ) {
      if (!this._redMiddlewareAdded) {
        original.apply(this, [redMiddleware]);
        this._redMiddlewareAdded = true;
      }
      return original.apply(this, args);
    };
  });

  if (!isWrapped(express.application, 'listen')) {
    wrap(
      express.application,
      'listen',
      function (
        original: (typeof Express)['application']['listen']['prototype']
      ) {
        return function (
          this: typeof original,
          ...args: Parameters<typeof original>
        ) {
          openapm.emit('application_started', {
            timestamp: new Date().toISOString(),
            event_name: `${openapm.program}_app`,
            event_state: 'start',
            entity_type: 'app',
            workspace: os.hostname(),
            namespace: openapm.environment,
            data_source_name: openapm.levitateConfig?.dataSourceName ?? ''
          });
          const server = original.apply(this, args) as Server;
          return server;
        };
      }
    );
  }
};
