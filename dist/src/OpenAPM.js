"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
var os = require("os");
var http = require("http");
var ResponseTime = require("response-time");
var promClient = require("prom-client");
var path = require("path");
var utils = require("./utils");
var express = require("./clients/express");
var mysql2 = require("./clients/mysql2");
var nestjs = require("./clients/nestjs");
var nextjs = require("./clients/nextjs");
var events = require("./levitate/events");
var asyncLocalStorage_http = require("./async-local-storage.http");
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function(k) {
            if (k !== "default") {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function get() {
                        return e[k];
                    }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}
var os__namespace = /*#__PURE__*/ _interopNamespace(os);
var http__default = /*#__PURE__*/ _interopDefault(http);
var ResponseTime__default = /*#__PURE__*/ _interopDefault(ResponseTime);
var promClient__default = /*#__PURE__*/ _interopDefault(promClient);
var path__default = /*#__PURE__*/ _interopDefault(path);
var moduleNames = {
    express: "express",
    mysql: "mysql2",
    nestjs: "@nestjs/core",
    nextjs: "next"
};
var packageJson = utils.getPackageJson();
var OpenAPM = /*#__PURE__*/ function(_events_LevitateEvents) {
    _inherits(OpenAPM, _events_LevitateEvents);
    var _super = _create_super(OpenAPM);
    function OpenAPM(options) {
        _class_call_check(this, OpenAPM);
        var _this;
        _this = _super.call(this, options);
        _this.simpleCache = {};
        _this.requestLabels = [];
        _this.setRequestCounterConfig = function(options) {
            var _ref = options !== null && options !== void 0 ? options : {}, requestsCounterConfig = _ref.requestsCounterConfig, extractLabels = _ref.extractLabels;
            var defaultConfig = {
                name: "http_requests_total",
                help: "Total number of requests",
                labelNames: _this.requestLabels
            };
            var _ref1 = requestsCounterConfig !== null && requestsCounterConfig !== void 0 ? requestsCounterConfig : {}, _ = _ref1.labelNames, restConfig = _object_without_properties(_ref1, [
                "labelNames"
            ]);
            return _object_spread({}, defaultConfig, restConfig !== null && restConfig !== void 0 ? restConfig : {});
        };
        _this.setRequestDurationHistogramConfig = function(options) {
            var _ref = options !== null && options !== void 0 ? options : {}, requestDurationHistogramConfig = _ref.requestDurationHistogramConfig, extractLabels = _ref.extractLabels;
            var defaultConfig = {
                name: "http_requests_duration_milliseconds",
                help: "Duration of HTTP requests in milliseconds",
                labelNames: _this.requestLabels,
                buckets: promClient__default.default.exponentialBuckets(0.25, 1.5, 31)
            };
            var _ref1 = requestDurationHistogramConfig !== null && requestDurationHistogramConfig !== void 0 ? requestDurationHistogramConfig : {}, _ = _ref1.labelNames, restConfig = _object_without_properties(_ref1, [
                "labelNames"
            ]);
            return _object_spread({}, defaultConfig, restConfig !== null && restConfig !== void 0 ? restConfig : {});
        };
        _this.getDefaultLabels = function() {
            var _packageJson_name, _packageJson_version;
            var defaultLabels = _object_spread({
                environment: _this.environment,
                program: (_packageJson_name = packageJson === null || packageJson === void 0 ? void 0 : packageJson.name) !== null && _packageJson_name !== void 0 ? _packageJson_name : "",
                version: (_packageJson_version = packageJson === null || packageJson === void 0 ? void 0 : packageJson.version) !== null && _packageJson_version !== void 0 ? _packageJson_version : "",
                host: os__namespace.hostname()
            }, _this.defaultLabels);
            if (Array.isArray(_this.excludeDefaultLabels)) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _this.excludeDefaultLabels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var label = _step.value;
                        Reflect.deleteProperty(defaultLabels, label);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            return defaultLabels;
        };
        _this.initiatePromClient = function() {
            promClient__default.default.register.setDefaultLabels(_this.getDefaultLabels());
            promClient__default.default.collectDefaultMetrics({
                gcDurationBuckets: _this.requestDurationHistogramConfig.buckets
            });
            _this.requestsCounter = new promClient__default.default.Counter(_this.requestsCounterConfig);
            _this.requestsDurationHistogram = new promClient__default.default.Histogram(_this.requestDurationHistogramConfig);
        };
        var _this1 = _assert_this_initialized(_this);
        _this.shutdown = /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    new Promise(function(resolve, reject) {
                        var _this_metricsServer;
                        if (!_this1.enabled) {
                            resolve(void 0);
                        }
                        if (_this1.enableMetricsServer) {
                            console.log("Shutting down metrics server gracefully.");
                        }
                        (_this_metricsServer = _this1.metricsServer) === null || _this_metricsServer === void 0 ? void 0 : _this_metricsServer.close(function(err) {
                            if (err) {
                                reject(err);
                                return;
                            }
                            resolve(void 0);
                            console.log("Metrics server shut down gracefully.");
                        });
                        promClient__default.default.register.clear();
                        resolve(void 0);
                    })
                ];
            });
        });
        _this.initiateMetricsRoute = function() {
            var _this_metricsServer;
            if (!_this.enableMetricsServer) {
                return;
            }
            var _this1 = _assert_this_initialized(_this);
            _this.metricsServer = http__default.default.createServer(function() {
                var _ref = _async_to_generator(function(req, res) {
                    var _req_url, path2, metrics;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                path2 = utils.getSanitizedPath((_req_url = req.url) !== null && _req_url !== void 0 ? _req_url : "/");
                                if (!(path2 === _this1.path && req.method === "GET")) return [
                                    3,
                                    2
                                ];
                                res.setHeader("Content-Type", promClient__default.default.register.contentType);
                                return [
                                    4,
                                    _this1.getMetrics()
                                ];
                            case 1:
                                metrics = _state.sent();
                                return [
                                    2,
                                    res.end(metrics)
                                ];
                            case 2:
                                res.statusCode = 404;
                                res.end("404 Not found");
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(req, res) {
                    return _ref.apply(this, arguments);
                };
            }());
            (_this_metricsServer = _this.metricsServer) === null || _this_metricsServer === void 0 ? void 0 : _this_metricsServer.listen(_this.metricsServerPort, function() {
                console.log("Metrics server running at ".concat(_this.metricsServerPort));
            });
        };
        _this.parseLabelsFromParams = function(pathname, params) {
            var labels = {};
            var parsedPathname = pathname;
            if (typeof params === "undefined" || params === null) {
                return {
                    pathname: pathname,
                    labels: labels
                };
            }
            var _this_extractLabels;
            var configs = Object.keys((_this_extractLabels = _this.extractLabels) !== null && _this_extractLabels !== void 0 ? _this_extractLabels : {}).map(function(labelName) {
                var _this_extractLabels;
                return _object_spread_props(_object_spread({}, (_this_extractLabels = _this.extractLabels) === null || _this_extractLabels === void 0 ? void 0 : _this_extractLabels[labelName]), {
                    label: labelName
                });
            });
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = configs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var item = _step.value;
                    if (item.key && item.label && item.from === "params" && (params === null || params === void 0 ? void 0 : params[item.key])) {
                        var labelValue = params[item.key];
                        var escapedLabelValue = labelValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                        var regex = new RegExp(escapedLabelValue, "g");
                        if (item.mask) {
                            parsedPathname = parsedPathname.replace(regex, item.mask);
                        }
                        labels[item.label] = escapedLabelValue;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return {
                pathname: parsedPathname,
                labels: labels
            };
        };
        /**
     * Middleware Function, which is essentially the response-time middleware with a callback that captures the
     * metrics
     */ _this._REDMiddleware = function(req, res, next) {
            asyncLocalStorage_http.runInHTTPRequestStore(function() {
                ResponseTime__default.default(function(req2, res2, time) {
                    var _req2_route, _this_requestsCounterConfig_labelNames;
                    if (!_this.enabled) {
                        return;
                    }
                    var store = asyncLocalStorage_http.getHTTPRequestStore();
                    var _req2_originalUrl;
                    var sanitizedPathname = utils.getSanitizedPath((_req2_originalUrl = req2.originalUrl) !== null && _req2_originalUrl !== void 0 ? _req2_originalUrl : "/");
                    var _this_parseLabelsFromParams = _this.parseLabelsFromParams(sanitizedPathname, req2.params), pathname = _this_parseLabelsFromParams.pathname, parsedLabelsFromPathname = _this_parseLabelsFromParams.labels;
                    if (!req2.route && req2.method === "OPTIONS") {
                        return;
                    }
                    var path2 = req2.route ? req2.baseUrl + ((_req2_route = req2.route) === null || _req2_route === void 0 ? void 0 : _req2_route.path) : pathname;
                    var _store_labels;
                    var labels = _object_spread({
                        path: path2,
                        status: res2.statusCode.toString(),
                        method: req2.method
                    }, parsedLabelsFromPathname, (_store_labels = store === null || store === void 0 ? void 0 : store.labels) !== null && _store_labels !== void 0 ? _store_labels : {});
                    var requestsCounterArgs = (_this_requestsCounterConfig_labelNames = _this.requestsCounterConfig.labelNames) === null || _this_requestsCounterConfig_labelNames === void 0 ? void 0 : _this_requestsCounterConfig_labelNames.map(function(labelName) {
                        var _labels_labelName;
                        return (_labels_labelName = labels[labelName]) !== null && _labels_labelName !== void 0 ? _labels_labelName : "";
                    });
                    try {
                        if (requestsCounterArgs) {
                            var _this_requestsCounter, _this_requestsDurationHistogram;
                            (_this_requestsCounter = _this.requestsCounter) === null || _this_requestsCounter === void 0 ? void 0 : _this_requestsCounter.inc(labels);
                            (_this_requestsDurationHistogram = _this.requestsDurationHistogram) === null || _this_requestsDurationHistogram === void 0 ? void 0 : _this_requestsDurationHistogram.observe(labels, time);
                        }
                    } catch (err) {
                        console.error("OpenAPM:", err);
                    }
                })(req, res, next);
            });
        };
        /**
     * Middleware Function, which is essentially the response-time middleware with a callback that captures the
     * metrics
     * @deprecated
     */ _this.REDMiddleware = _this._REDMiddleware;
        var _this2 = _assert_this_initialized(_this);
        _this.getMetrics = /*#__PURE__*/ _async_to_generator(function() {
            var metrics, PrismaClient, prisma, prismaMetrics, _tmp, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        metrics = "";
                        if (!_this2.enabled) {
                            return [
                                2,
                                metrics
                            ];
                        }
                        if (!(typeof _this2.simpleCache["prisma:installed"] === "undefined" || _this2.simpleCache["prisma:installed"])) return [
                            3,
                            7
                        ];
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            ,
                            7
                        ]);
                        PrismaClient = require("@prisma/client").PrismaClient;
                        prisma = new PrismaClient();
                        if (!prisma) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            prisma.$metrics.prometheus()
                        ];
                    case 2:
                        _tmp = _state.sent();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        _tmp = "";
                        _state.label = 4;
                    case 4:
                        prismaMetrics = _tmp;
                        metrics += prisma ? prismaMetrics : "";
                        _this2.simpleCache["prisma:installed"] = true;
                        return [
                            4,
                            prisma.$disconnect()
                        ];
                    case 5:
                        _state.sent();
                        return [
                            3,
                            7
                        ];
                    case 6:
                        error = _state.sent();
                        _this2.simpleCache["prisma:installed"] = false;
                        return [
                            3,
                            7
                        ];
                    case 7:
                        return [
                            4,
                            promClient__default.default.register.metrics()
                        ];
                    case 8:
                        metrics += _state.sent();
                        if (metrics.startsWith('"') && metrics.endsWith('"')) {
                            metrics = metrics.slice(1, -1);
                        }
                        return [
                            2,
                            metrics.trim()
                        ];
                }
            });
        });
        var _options_enabled;
        _this.enabled = (_options_enabled = options === null || options === void 0 ? void 0 : options.enabled) !== null && _options_enabled !== void 0 ? _options_enabled : true;
        var _options_path;
        _this.path = (_options_path = options === null || options === void 0 ? void 0 : options.path) !== null && _options_path !== void 0 ? _options_path : "/metrics";
        var _options_metricsServerPort;
        _this.metricsServerPort = (_options_metricsServerPort = options === null || options === void 0 ? void 0 : options.metricsServerPort) !== null && _options_metricsServerPort !== void 0 ? _options_metricsServerPort : 9097;
        var _options_enableMetricsServer;
        _this.enableMetricsServer = (_options_enableMetricsServer = options === null || options === void 0 ? void 0 : options.enableMetricsServer) !== null && _options_enableMetricsServer !== void 0 ? _options_enableMetricsServer : true;
        var _options_environment;
        _this.environment = (_options_environment = options === null || options === void 0 ? void 0 : options.environment) !== null && _options_environment !== void 0 ? _options_environment : "production";
        var _packageJson_name;
        _this.program = (_packageJson_name = packageJson === null || packageJson === void 0 ? void 0 : packageJson.name) !== null && _packageJson_name !== void 0 ? _packageJson_name : "";
        _this.defaultLabels = options === null || options === void 0 ? void 0 : options.defaultLabels;
        var _options_additionalLabels;
        _this.requestLabels = [
            "path",
            "method",
            "status"
        ].concat(_to_consumable_array((options === null || options === void 0 ? void 0 : options.extractLabels) ? Object.keys(options === null || options === void 0 ? void 0 : options.extractLabels) : []), _to_consumable_array((_options_additionalLabels = options === null || options === void 0 ? void 0 : options.additionalLabels) !== null && _options_additionalLabels !== void 0 ? _options_additionalLabels : []));
        _this.requestsCounterConfig = _this.setRequestCounterConfig(options);
        _this.requestDurationHistogramConfig = _this.setRequestDurationHistogramConfig(options);
        var _options_extractLabels;
        _this.extractLabels = (_options_extractLabels = options === null || options === void 0 ? void 0 : options.extractLabels) !== null && _options_extractLabels !== void 0 ? _options_extractLabels : {};
        _this.customPathsToMask = options === null || options === void 0 ? void 0 : options.customPathsToMask;
        _this.excludeDefaultLabels = options === null || options === void 0 ? void 0 : options.excludeDefaultLabels;
        if (_this.enabled) {
            _this.initiateMetricsRoute();
            _this.initiatePromClient();
        }
        return _this;
    }
    _create_class(OpenAPM, [
        {
            key: "instrument",
            value: function instrument(moduleName) {
                if (!this.enabled) {
                    return false;
                }
                try {
                    if (moduleName === "express") {
                        var express$1 = require("express");
                        express.instrumentExpress(express$1, this._REDMiddleware, this);
                    }
                    if (moduleName === "mysql") {
                        var mysql2$1 = require("mysql2");
                        mysql2.instrumentMySQL(mysql2$1);
                    }
                    if (moduleName === "nestjs") {
                        var NestFactory = require("@nestjs/core").NestFactory;
                        nestjs.instrumentNestFactory(NestFactory, this._REDMiddleware);
                    }
                    if (moduleName === "nextjs") {
                        var nextServer = require(path__default.default.resolve("node_modules/next/dist/server/next-server.js"));
                        nextjs.instrumentNextjs(nextServer.default, {
                            getRequestMeta: require(path__default.default.resolve("node_modules/next/dist/server/request-meta.js")).getRequestMeta
                        }, {
                            counter: this.requestsCounter,
                            histogram: this.requestsDurationHistogram
                        }, this);
                    }
                    return true;
                } catch (error) {
                    console.error("OpenAPM:", error);
                    if (Object.keys(moduleNames).includes(moduleName)) {
                        throw new Error("OpenAPM couldn't import the ".concat(moduleNames[moduleName], " package, please install it."));
                    } else {
                        throw new Error("OpenAPM doesn't support the following module: ".concat(moduleName));
                    }
                }
            }
        }
    ]);
    return OpenAPM;
}(events.LevitateEvents);
function getMetricClient() {
    return promClient__default.default;
}
var OpenAPM_default = OpenAPM;
exports.OpenAPM = OpenAPM;
exports.default = OpenAPM_default;
exports.getMetricClient = getMetricClient;
