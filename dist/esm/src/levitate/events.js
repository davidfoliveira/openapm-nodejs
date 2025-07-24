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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
import EventEmitter from "events";
import chalk from "chalk";
import { request } from "undici";
var defaultHost = "https://app.last9.io";
var LevitateEvents = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(LevitateEvents, EventEmitter);
    var _super = _create_super(LevitateEvents);
    function LevitateEvents(options) {
        _class_call_check(this, LevitateEvents);
        var _this;
        var _this_levitateConfig, _this_levitateConfig1;
        _this = _super.call(this);
        var _this1 = _assert_this_initialized(_this);
        _this.generateAccessToken = /*#__PURE__*/ _async_to_generator(function() {
            var _this_levitateConfig, _this_levitateConfig1, endpoint, _this_levitateConfig_host, url, _this_levitateConfig_refreshTokens_write;
            return _ts_generator(this, function(_state) {
                endpoint = "/api/v4/oauth/access_token";
                url = new URL(endpoint, (_this_levitateConfig_host = (_this_levitateConfig = _this1.levitateConfig) === null || _this_levitateConfig === void 0 ? void 0 : _this_levitateConfig.host) !== null && _this_levitateConfig_host !== void 0 ? _this_levitateConfig_host : defaultHost);
                return [
                    2,
                    request(url.toString(), {
                        method: "POST",
                        body: JSON.stringify({
                            refresh_token: (_this_levitateConfig_refreshTokens_write = (_this_levitateConfig1 = _this1.levitateConfig) === null || _this_levitateConfig1 === void 0 ? void 0 : _this_levitateConfig1.refreshTokens.write) !== null && _this_levitateConfig_refreshTokens_write !== void 0 ? _this_levitateConfig_refreshTokens_write : ""
                        })
                    }).then(function(response) {
                        return response.body.json();
                    }).catch(function(error) {
                        console.log(error);
                        return;
                    })
                ];
            });
        });
        _this.levitateConfig = options === null || options === void 0 ? void 0 : options.levitateConfig;
        var _this_levitateConfig_host;
        _this.eventsUrl = new URL("/api/v4/organizations/".concat((_this_levitateConfig = _this.levitateConfig) === null || _this_levitateConfig === void 0 ? void 0 : _this_levitateConfig.orgSlug, "/domain_events"), (_this_levitateConfig_host = (_this_levitateConfig1 = _this.levitateConfig) === null || _this_levitateConfig1 === void 0 ? void 0 : _this_levitateConfig1.host) !== null && _this_levitateConfig_host !== void 0 ? _this_levitateConfig_host : defaultHost);
        _this.initiateEventListeners();
        return _this;
    }
    _create_class(LevitateEvents, [
        {
            key: "emit",
            value: function emit(event) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _$_get;
                return (_$_get = _get(_get_prototype_of(LevitateEvents.prototype), "emit", this)).call.apply(_$_get, [
                    this,
                    event
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "on",
            value: function on(event, listener) {
                return _get(_get_prototype_of(LevitateEvents.prototype), "on", this).call(this, event, listener);
            }
        },
        {
            key: "once",
            value: function once(event, listener) {
                return _get(_get_prototype_of(LevitateEvents.prototype), "on", this).call(this, event, listener);
            }
        },
        {
            key: "initiateEventListeners",
            value: function initiateEventListeners() {
                var _this_levitateConfig_refreshTokens, _this_levitateConfig;
                if (typeof ((_this_levitateConfig = this.levitateConfig) === null || _this_levitateConfig === void 0 ? void 0 : (_this_levitateConfig_refreshTokens = _this_levitateConfig.refreshTokens) === null || _this_levitateConfig_refreshTokens === void 0 ? void 0 : _this_levitateConfig_refreshTokens.write) === "string") {
                    console.log(chalk.green("\nYou've enabled Events powered by Levitate \uD83D\uDE80"));
                    console.log("For more info checkout https://docs.last9.io/change-events\n");
                    this.once("application_started", this.putDomainEvents);
                }
            }
        },
        {
            key: "putDomainEvents",
            value: function putDomainEvents(body) {
                var _this = this;
                return _async_to_generator(function() {
                    var tokenResponse, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!!body) return [
                                    3,
                                    5
                                ];
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    4,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this.generateAccessToken()
                                ];
                            case 2:
                                tokenResponse = _state.sent();
                                return [
                                    4,
                                    request(_this.eventsUrl.toString(), {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                            "X-LAST9-API-TOKEN": "Bearer ".concat(tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.access_token)
                                        },
                                        body: JSON.stringify(body)
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                error = _state.sent();
                                console.log(error);
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return LevitateEvents;
}(EventEmitter);
export { LevitateEvents };
