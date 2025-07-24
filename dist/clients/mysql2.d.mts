import * as mysql2 from 'mysql2';
import { Connection, Pool, PoolCluster, PoolConnection, createConnection, createPool, createPoolCluster } from 'mysql2';
import * as mysql2_typings_mysql_lib_PoolConnection from 'mysql2/typings/mysql/lib/PoolConnection';
import { Histogram } from 'prom-client';

interface Context {
    histogram: Histogram;
    database_name?: string;
    query?: string;
}
declare const symbols: {
    WRAP_CONNECTION: symbol;
    WRAP_POOL: symbol;
    WRAP_GET_CONNECTION_CB: symbol;
    WRAP_POOL_CLUSTER: symbol;
    WRAP_POOL_CLUSTER_OF: symbol;
    WRAP_QUERYABLE_CB: symbol;
};
/**
 *
 * @param fn queryable function that needs to be intercepted and instrumented
 * @param connectionConfig config for the connection/pool/pool cluster
 * @param metricRegisterFns array of functions that could be used to register metrics
 */
declare function interceptQueryable(fn: Connection['query'], connectionConfig: Connection['config'] | Pool['config'] | PoolCluster['config'], ctx: Context): Connection['query'];
declare function interceptQueryable(fn: Connection['execute'], connectionConfig: Connection['config'] | Pool['config'] | PoolCluster['config'], ctx: Context): Connection['execute'];
/**
 *  The function will get the prototype of the connection object and mutate the values of queryable
 * with the intercepted versions of them
 *
 * @param connection Connection object that contains queryables
 * @param metricRegisterFns
 * @returns Returns wrapped connection
 */
declare const wrapConnection: (connection: Connection | PoolConnection, ctx: {
    histogram: Histogram;
}) => Connection | PoolConnection;
declare const wrapPoolGetConnectionCB: (cb: Parameters<Pool['getConnection']>['0'], ctx: Context) => Parameters<Pool['getConnection']>['0'];
declare const wrapPoolGetConnection: (getConnectionFn: Pool['getConnection'], ctx: Context) => (this: Pool['getConnection'], callback: (err: NodeJS.ErrnoException | null, connection: mysql2_typings_mysql_lib_PoolConnection.PoolConnection) => any) => void;
declare const wrapPoolClusterOfFn: (of: PoolCluster['of'], poolClusterConfig: PoolCluster['config'], ctx: Context) => (this: PoolCluster['of'], pattern: string, selector?: string | undefined) => mysql2.PoolNamespace;
/**
 * This function will get the proto type of the pool and intercept the queryable functions.
 * It will also wrap getConnection function of the pool so that it can wrap the callback function which consists of the db connection.
 * @param pool MySQL Pool
 * @param metricRegisterFns
 * @returns MySQL Pool
 */
declare const wrapPool: (pool: Pool, ctx: {
    histogram: Histogram;
}) => Pool;
declare const wrapPoolCluster: (poolCluster: PoolCluster, ctx: Context) => PoolCluster;
declare const instrumentMySQL: (mysql: {
    createConnection: typeof createConnection;
    createPool: typeof createPool;
    createPoolCluster: typeof createPoolCluster;
}) => void;

export { instrumentMySQL, interceptQueryable, symbols, wrapConnection, wrapPool, wrapPoolCluster, wrapPoolClusterOfFn, wrapPoolGetConnection, wrapPoolGetConnectionCB };
