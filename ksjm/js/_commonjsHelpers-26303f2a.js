var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
function o(e) {
    if (e.__esModule)
        return e;
    var t = e.default;
    if ("function" == typeof t) {
        var o = function e() {
            return this instanceof e ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        o.prototype = t.prototype
    } else
        o = {};
    return Object.defineProperty(o, "__esModule", {
        value: !0
    }),
    Object.keys(e).forEach((function(t) {
        var n = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    }
    )),
    o
}
export {t as a, e as c, o as g};
