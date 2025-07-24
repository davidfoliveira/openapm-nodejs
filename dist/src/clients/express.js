"use strict";
var os = require("os");
var shimmer = require("../shimmer");
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
var instrumentExpress = function(express, redMiddleware, openapm) {
    var routerProto = express.Router;
    shimmer.wrap(routerProto.prototype, "use", function(original) {
        return function wrappedUse() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            if (!this._redMiddlewareAdded) {
                original.apply(this, [
                    redMiddleware
                ]);
                this._redMiddlewareAdded = true;
            }
            return original.apply(this, args);
        };
    });
    if (!shimmer.isWrapped(express.application, "listen")) {
        shimmer.wrap(express.application, "listen", function(original) {
            return function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _openapm_levitateConfig;
                var _openapm_levitateConfig_dataSourceName;
                openapm.emit("application_started", {
                    timestamp: /* @__PURE__ */ new Date().toISOString(),
                    event_name: "".concat(openapm.program, "_app"),
                    event_state: "start",
                    entity_type: "app",
                    workspace: os__namespace.hostname(),
                    namespace: openapm.environment,
                    data_source_name: (_openapm_levitateConfig_dataSourceName = (_openapm_levitateConfig = openapm.levitateConfig) === null || _openapm_levitateConfig === void 0 ? void 0 : _openapm_levitateConfig.dataSourceName) !== null && _openapm_levitateConfig_dataSourceName !== void 0 ? _openapm_levitateConfig_dataSourceName : ""
                });
                var server = original.apply(this, args);
                return server;
            };
        });
    }
};
exports.instrumentExpress = instrumentExpress;
