"use strict";
var OpenAPM = require("./OpenAPM");
var asyncLocalStorage_http = require("./async-local-storage.http");
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var OpenAPM__default = /*#__PURE__*/ _interopDefault(OpenAPM);
Object.defineProperty(exports, "OpenAPM", {
    enumerable: true,
    get: function get() {
        return OpenAPM__default.default;
    }
});
Object.defineProperty(exports, "getMetricClient", {
    enumerable: true,
    get: function get() {
        return OpenAPM.getMetricClient;
    }
});
Object.defineProperty(exports, "setOpenAPMLabels", {
    enumerable: true,
    get: function get() {
        return asyncLocalStorage_http.setOpenAPMLabels;
    }
});
