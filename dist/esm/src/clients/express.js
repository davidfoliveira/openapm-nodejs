import * as os from "os";
import { wrap, isWrapped } from "../shimmer";
var instrumentExpress = function(express, redMiddleware, openapm) {
    var routerProto = express.Router;
    wrap(routerProto.prototype, "use", function(original) {
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
    if (!isWrapped(express.application, "listen")) {
        wrap(express.application, "listen", function(original) {
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
                    workspace: os.hostname(),
                    namespace: openapm.environment,
                    data_source_name: (_openapm_levitateConfig_dataSourceName = (_openapm_levitateConfig = openapm.levitateConfig) === null || _openapm_levitateConfig === void 0 ? void 0 : _openapm_levitateConfig.dataSourceName) !== null && _openapm_levitateConfig_dataSourceName !== void 0 ? _openapm_levitateConfig_dataSourceName : ""
                });
                var server = original.apply(this, args);
                return server;
            };
        });
    }
};
export { instrumentExpress };
