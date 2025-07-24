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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var promClient = require("prom-client");
var utils = require("../utils");
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var promClient__default = /*#__PURE__*/ _interopDefault(promClient);
var symbols = {
    WRAP_CONNECTION: Symbol("WRAP_CONNECTION"),
    WRAP_POOL: Symbol("WRAP_POOL"),
    WRAP_GET_CONNECTION_CB: Symbol("WRAP_GET_CONNECTION_CB"),
    WRAP_POOL_CLUSTER: Symbol("WRAP_POOL_CLUSTER"),
    WRAP_POOL_CLUSTER_OF: Symbol("WRAP_POOL_CLUSTER_OF"),
    WRAP_QUERYABLE_CB: Symbol("WRAP_QUERYABLE_CB")
};
function getConnectionConfig(config) {
    var _config_connectionConfig;
    return (_config_connectionConfig = config.connectionConfig) !== null && _config_connectionConfig !== void 0 ? _config_connectionConfig : config;
}
var wrapQueryableCB = function(cb, ctx) {
    var end = ctx.histogram.startTimer({});
    if (typeof cb === "undefined") {
        return function wrapQueryableCB() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            end({
                database_name: ctx.database_name,
                query: ctx.query,
                status: args[0] === null ? "success" : "failure"
            });
            return;
        };
    }
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        end({
            database_name: ctx.database_name,
            query: ctx.query,
            status: args[0] === null ? "success" : "failure"
        });
        return cb.apply(this, args);
    };
};
function interceptQueryable(fn, connectionConfig, ctx) {
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var lastArgIndex = args.length - 1;
        var _getConnectionConfig_database;
        var dbName = (_getConnectionConfig_database = getConnectionConfig(connectionConfig).database) !== null && _getConnectionConfig_database !== void 0 ? _getConnectionConfig_database : "[db-name]";
        var query = utils.maskValuesInSQLQuery(typeof args[0] === "string" ? args[0] : args[0].sql).substring(0, 100);
        var hasCallback = typeof args[lastArgIndex] !== "string" && typeof args[lastArgIndex] !== "object";
        args[hasCallback ? lastArgIndex : 1] = wrapQueryableCB(hasCallback ? args[lastArgIndex] : void 0, _object_spread_props(_object_spread({}, ctx), {
            database_name: dbName,
            query: query
        }));
        return fn.apply(this, args);
    };
}
var wrapConnection = function(connection, ctx) {
    var connectionProto = Object.getPrototypeOf(connection);
    if (!(connectionProto === null || connectionProto === void 0 ? void 0 : connectionProto[symbols.WRAP_CONNECTION])) {
        connectionProto.query = interceptQueryable(connection.query, connection.config, ctx);
        if (typeof connection.execute !== "undefined") {
            connectionProto.execute = interceptQueryable(connection.execute, connection.config, ctx);
        }
        connectionProto[symbols.WRAP_CONNECTION] = true;
    }
    return connection;
};
var wrapPoolGetConnectionCB = function(cb, ctx) {
    return function wrapPoolGetConnectionCB() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var wrappedConn = wrapConnection(args[1], ctx);
        return cb.apply(this, [
            args[0],
            wrappedConn
        ]);
    };
};
var wrapPoolGetConnection = function(getConnectionFn, ctx) {
    return function wrapPoolGetConnection() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var getConnectionFnProto = Object.getPrototypeOf(getConnectionFn);
        if (!(getConnectionFnProto === null || getConnectionFnProto === void 0 ? void 0 : getConnectionFnProto[symbols.WRAP_GET_CONNECTION_CB]) && typeof args[0] !== "undefined") {
            args[0] = wrapPoolGetConnectionCB(args[0], ctx);
            getConnectionFnProto[symbols.WRAP_GET_CONNECTION_CB] = true;
        }
        return getConnectionFn.apply(this, args);
    };
};
var wrapPoolClusterOfFn = function(of, poolClusterConfig, ctx) {
    return function wrapPoolClusterOfFn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var poolNamespace = of.apply(this, args);
        var poolNamespaceProto = Object.getPrototypeOf(poolNamespace);
        if (!(poolNamespaceProto === null || poolNamespaceProto === void 0 ? void 0 : poolNamespaceProto[symbols.WRAP_POOL_CLUSTER_OF])) {
            poolNamespaceProto.query = interceptQueryable(poolNamespace.query, poolClusterConfig, ctx);
            if (typeof poolNamespace.execute !== "undefined") {
                poolNamespaceProto.execute = interceptQueryable(poolNamespace.execute, poolClusterConfig, ctx);
            }
            poolNamespaceProto.getConnection = wrapPoolGetConnection(poolNamespace["getConnection"], ctx);
            poolNamespaceProto[symbols.WRAP_POOL_CLUSTER_OF] = true;
        }
        return poolNamespace;
    };
};
var wrapPool = function(pool, ctx) {
    var poolProto = Object.getPrototypeOf(pool);
    if (!(poolProto === null || poolProto === void 0 ? void 0 : poolProto[symbols.WRAP_POOL])) {
        poolProto.query = interceptQueryable(pool.query, pool.config, ctx);
        if (typeof pool.execute !== "undefined") {
            poolProto.execute = interceptQueryable(pool.execute, pool.config, ctx);
        }
        poolProto.getConnection = wrapPoolGetConnection(pool["getConnection"], ctx);
        poolProto[symbols.WRAP_POOL] = true;
    }
    return pool;
};
var wrapPoolCluster = function(poolCluster, ctx) {
    var poolClusterProto = Object.getPrototypeOf(poolCluster);
    if (!(poolClusterProto === null || poolClusterProto === void 0 ? void 0 : poolClusterProto[symbols.WRAP_POOL_CLUSTER])) {
        poolClusterProto.of = wrapPoolClusterOfFn(poolCluster.of, poolCluster.config, ctx);
        poolClusterProto[symbols.WRAP_POOL_CLUSTER] = true;
    }
    return poolCluster;
};
var instrumentMySQL = function(mysql) {
    var histogram = new promClient__default.default.Histogram({
        name: "db_requests_duration_milliseconds",
        help: "Duration of DB transactions in milliseconds",
        labelNames: [
            "database_name",
            "query",
            "status"
        ],
        buckets: promClient__default.default.exponentialBuckets(0.25, 1.5, 31)
    });
    mysql.createConnection = new Proxy(mysql.createConnection, {
        apply: function(target, prop, args) {
            var connection = Reflect.apply(target, prop, args);
            return wrapConnection(connection, {
                histogram: histogram
            });
        }
    });
    mysql.createPool = new Proxy(mysql.createPool, {
        apply: function(target, prop, args) {
            var pool = Reflect.apply(target, prop, args);
            return wrapPool(pool, {
                histogram: histogram
            });
        }
    });
    mysql.createPoolCluster = new Proxy(mysql.createPoolCluster, {
        apply: function(target, prop, args) {
            var poolCluster = Reflect.apply(target, prop, args);
            return wrapPoolCluster(poolCluster, {
                histogram: histogram
            });
        }
    });
};
exports.instrumentMySQL = instrumentMySQL;
exports.interceptQueryable = interceptQueryable;
exports.symbols = symbols;
exports.wrapConnection = wrapConnection;
exports.wrapPool = wrapPool;
exports.wrapPoolCluster = wrapPoolCluster;
exports.wrapPoolClusterOfFn = wrapPoolClusterOfFn;
exports.wrapPoolGetConnection = wrapPoolGetConnection;
exports.wrapPoolGetConnectionCB = wrapPoolGetConnectionCB;
