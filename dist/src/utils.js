"use strict";
var fs = require("fs");
var path = require("path");
var os = require("os");
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
var fs__namespace = /*#__PURE__*/ _interopNamespace(fs);
var path__namespace = /*#__PURE__*/ _interopNamespace(path);
var os__namespace = /*#__PURE__*/ _interopNamespace(os);
var getPackageJson = function() {
    var packageJsonPath = path__namespace.join(process.cwd(), "package.json");
    try {
        var packageJson = fs__namespace.readFileSync(packageJsonPath, "utf-8");
        return JSON.parse(packageJson);
    } catch (error) {
        console.error("Error parsing package.json");
        return null;
    }
};
var getHostIpAddress = function() {
    var networkInterfaces = os__namespace.networkInterfaces();
    for(var interfaceName in networkInterfaces){
        var interfaces = networkInterfaces[interfaceName];
        if (typeof interfaces !== "undefined") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = interfaces[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var iface = _step.value;
                    if (!iface.internal && iface.family === "IPv4") {
                        return iface.address;
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
        }
    }
    return null;
};
var getSanitizedPath = function(pathname) {
    var sanitizedPath = pathname.replace(/(\/[^?#]+)(?:\?[^#]*)?(?:#.*)?$/, "$1");
    return sanitizedPath;
};
var maskValuesInSQLQuery = function(query) {
    var counter = 1;
    var regex = /'[^']*'|(\b\d+\b)/g;
    return query.replace(regex, function(match) {
        if (match.match(/^\d+$/) || match.startsWith("'")) {
            return "$".concat(counter++);
        }
        return match;
    });
};
var isCJS = function() {
    return typeof exports === "object" && typeof module !== "undefined";
};
exports.getHostIpAddress = getHostIpAddress;
exports.getPackageJson = getPackageJson;
exports.getSanitizedPath = getSanitizedPath;
exports.isCJS = isCJS;
exports.maskValuesInSQLQuery = maskValuesInSQLQuery;
