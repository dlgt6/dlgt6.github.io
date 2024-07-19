function e(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: t} = Object.prototype
  , {getPrototypeOf: n} = Object
  , r = (o = Object.create(null),
e=>{
    const n = t.call(e);
    return o[n] || (o[n] = n.slice(8, -1).toLowerCase())
}
);
var o;
const s = e=>(e = e.toLowerCase(),
t=>r(t) === e)
  , i = e=>t=>typeof t === e
  , {isArray: a} = Array
  , c = i("undefined");
const u = s("ArrayBuffer");
const l = i("string")
  , f = i("function")
  , d = i("number")
  , p = e=>null !== e && "object" == typeof e
  , h = e=>{
    if ("object" !== r(e))
        return !1;
    const t = n(e);
    return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
}
  , m = s("Date")
  , y = s("File")
  , g = s("Blob")
  , b = s("FileList")
  , w = s("URLSearchParams");
function E(e, t, {allOwnKeys: n=!1}={}) {
    if (null == e)
        return;
    let r, o;
    if ("object" != typeof e && (e = [e]),
    a(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let i;
        for (r = 0; r < s; r++)
            i = o[r],
            t.call(null, e[i], i, e)
    }
}
function O(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r, o = n.length;
    for (; o-- > 0; )
        if (r = n[o],
        t === r.toLowerCase())
            return r;
    return null
}
const S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global
  , R = e=>!c(e) && e !== S;
const A = (T = "undefined" != typeof Uint8Array && n(Uint8Array),
e=>T && e instanceof T);
var T;
const j = s("HTMLFormElement")
  , v = (({hasOwnProperty: e})=>(t,n)=>e.call(t, n))(Object.prototype)
  , N = s("RegExp")
  , C = (e,t)=>{
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    E(n, ((n,o)=>{
        let s;
        !1 !== (s = t(n, o, e)) && (r[o] = s || n)
    }
    )),
    Object.defineProperties(e, r)
}
  , x = "abcdefghijklmnopqrstuvwxyz"
  , P = "0123456789"
  , _ = {
    DIGIT: P,
    ALPHA: x,
    ALPHA_DIGIT: x + x.toUpperCase() + P
};
const F = s("AsyncFunction")
  , U = {
    isArray: a,
    isArrayBuffer: u,
    isBuffer: function(e) {
        return null !== e && !c(e) && null !== e.constructor && !c(e.constructor) && f(e.constructor.isBuffer) && e.constructor.isBuffer(e)
    },
    isFormData: e=>{
        let t;
        return e && ("function" == typeof FormData && e instanceof FormData || f(e.append) && ("formdata" === (t = r(e)) || "object" === t && f(e.toString) && "[object FormData]" === e.toString()))
    }
    ,
    isArrayBufferView: function(e) {
        let t;
        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && u(e.buffer),
        t
    },
    isString: l,
    isNumber: d,
    isBoolean: e=>!0 === e || !1 === e,
    isObject: p,
    isPlainObject: h,
    isUndefined: c,
    isDate: m,
    isFile: y,
    isBlob: g,
    isRegExp: N,
    isFunction: f,
    isStream: e=>p(e) && f(e.pipe),
    isURLSearchParams: w,
    isTypedArray: A,
    isFileList: b,
    forEach: E,
    merge: function e() {
        const {caseless: t} = R(this) && this || {}
          , n = {}
          , r = (r,o)=>{
            const s = t && O(n, o) || o;
            h(n[s]) && h(r) ? n[s] = e(n[s], r) : h(r) ? n[s] = e({}, r) : a(r) ? n[s] = r.slice() : n[s] = r
        }
        ;
        for (let o = 0, s = arguments.length; o < s; o++)
            arguments[o] && E(arguments[o], r);
        return n
    },
    extend: (t,n,r,{allOwnKeys: o}={})=>(E(n, ((n,o)=>{
        r && f(n) ? t[o] = e(n, r) : t[o] = n
    }
    ), {
        allOwnKeys: o
    }),
    t),
    trim: e=>e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: e=>(65279 === e.charCodeAt(0) && (e = e.slice(1)),
    e),
    inherits: (e,t,n,r)=>{
        e.prototype = Object.create(t.prototype, r),
        e.prototype.constructor = e,
        Object.defineProperty(e, "super", {
            value: t.prototype
        }),
        n && Object.assign(e.prototype, n)
    }
    ,
    toFlatObject: (e,t,r,o)=>{
        let s, i, a;
        const c = {};
        if (t = t || {},
        null == e)
            return t;
        do {
            for (s = Object.getOwnPropertyNames(e),
            i = s.length; i-- > 0; )
                a = s[i],
                o && !o(a, e, t) || c[a] || (t[a] = e[a],
                c[a] = !0);
            e = !1 !== r && n(e)
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t
    }
    ,
    kindOf: r,
    kindOfTest: s,
    endsWith: (e,t,n)=>{
        e = String(e),
        (void 0 === n || n > e.length) && (n = e.length),
        n -= t.length;
        const r = e.indexOf(t, n);
        return -1 !== r && r === n
    }
    ,
    toArray: e=>{
        if (!e)
            return null;
        if (a(e))
            return e;
        let t = e.length;
        if (!d(t))
            return null;
        const n = new Array(t);
        for (; t-- > 0; )
            n[t] = e[t];
        return n
    }
    ,
    forEachEntry: (e,t)=>{
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
            const n = r.value;
            t.call(e, n[0], n[1])
        }
    }
    ,
    matchAll: (e,t)=>{
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); )
            r.push(n);
        return r
    }
    ,
    isHTMLForm: j,
    hasOwnProperty: v,
    hasOwnProp: v,
    reduceDescriptors: C,
    freezeMethods: e=>{
        C(e, ((t,n)=>{
            if (f(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
            const r = e[n];
            f(r) && (t.enumerable = !1,
            "writable"in t ? t.writable = !1 : t.set || (t.set = ()=>{
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            ))
        }
        ))
    }
    ,
    toObjectSet: (e,t)=>{
        const n = {}
          , r = e=>{
            e.forEach((e=>{
                n[e] = !0
            }
            ))
        }
        ;
        return a(e) ? r(e) : r(String(e).split(t)),
        n
    }
    ,
    toCamelCase: e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
        return t.toUpperCase() + n
    }
    )),
    noop: ()=>{}
    ,
    toFiniteNumber: (e,t)=>(e = +e,
    Number.isFinite(e) ? e : t),
    findKey: O,
    global: S,
    isContextDefined: R,
    ALPHABET: _,
    generateString: (e=16,t=_.ALPHA_DIGIT)=>{
        let n = "";
        const {length: r} = t;
        for (; e--; )
            n += t[Math.random() * r | 0];
        return n
    }
    ,
    isSpecCompliantForm: function(e) {
        return !!(e && f(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
    },
    toJSONObject: e=>{
        const t = new Array(10)
          , n = (e,r)=>{
            if (p(e)) {
                if (t.indexOf(e) >= 0)
                    return;
                if (!("toJSON"in e)) {
                    t[r] = e;
                    const o = a(e) ? [] : {};
                    return E(e, ((e,t)=>{
                        const s = n(e, r + 1);
                        !c(s) && (o[t] = s)
                    }
                    )),
                    t[r] = void 0,
                    o
                }
            }
            return e
        }
        ;
        return n(e, 0)
    }
    ,
    isAsyncFn: F,
    isThenable: e=>e && (p(e) || f(e)) && f(e.then) && f(e.catch)
};
function B(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
U.inherits(B, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: U.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const L = B.prototype
  , D = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e=>{
    D[e] = {
        value: e
    }
}
)),
Object.defineProperties(B, D),
Object.defineProperty(L, "isAxiosError", {
    value: !0
}),
B.from = (e,t,n,r,o,s)=>{
    const i = Object.create(L);
    return U.toFlatObject(e, i, (function(e) {
        return e !== Error.prototype
    }
    ), (e=>"isAxiosError" !== e)),
    B.call(i, e.message, t, n, r, o),
    i.cause = e,
    i.name = e.name,
    s && Object.assign(i, s),
    i
}
;
function k(e) {
    return U.isPlainObject(e) || U.isArray(e)
}
function q(e) {
    return U.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function I(e, t, n) {
    return e ? e.concat(t).map((function(e, t) {
        return e = q(e),
        !n && t ? "[" + e + "]" : e
    }
    )).join(n ? "." : "") : t
}
const z = U.toFlatObject(U, {}, null, (function(e) {
    return /^is[A-Z]/.test(e)
}
));
function M(e, t, n) {
    if (!U.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData;
    const r = (n = U.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, (function(e, t) {
        return !U.isUndefined(t[e])
    }
    ))).metaTokens
      , o = n.visitor || u
      , s = n.dots
      , i = n.indexes
      , a = (n.Blob || "undefined" != typeof Blob && Blob) && U.isSpecCompliantForm(t);
    if (!U.isFunction(o))
        throw new TypeError("visitor must be a function");
    function c(e) {
        if (null === e)
            return "";
        if (U.isDate(e))
            return e.toISOString();
        if (!a && U.isBlob(e))
            throw new B("Blob is not supported. Use a Buffer instead.");
        return U.isArrayBuffer(e) || U.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }
    function u(e, n, o) {
        let a = e;
        if (e && !o && "object" == typeof e)
            if (U.endsWith(n, "{}"))
                n = r ? n : n.slice(0, -2),
                e = JSON.stringify(e);
            else if (U.isArray(e) && function(e) {
                return U.isArray(e) && !e.some(k)
            }(e) || (U.isFileList(e) || U.endsWith(n, "[]")) && (a = U.toArray(e)))
                return n = q(n),
                a.forEach((function(e, r) {
                    !U.isUndefined(e) && null !== e && t.append(!0 === i ? I([n], r, s) : null === i ? n : n + "[]", c(e))
                }
                )),
                !1;
        return !!k(e) || (t.append(I(o, n, s), c(e)),
        !1)
    }
    const l = []
      , f = Object.assign(z, {
        defaultVisitor: u,
        convertValue: c,
        isVisitable: k
    });
    if (!U.isObject(e))
        throw new TypeError("data must be an object");
    return function e(n, r) {
        if (!U.isUndefined(n)) {
            if (-1 !== l.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
            l.push(n),
            U.forEach(n, (function(n, s) {
                !0 === (!(U.isUndefined(n) || null === n) && o.call(t, n, U.isString(s) ? s.trim() : s, r, f)) && e(n, r ? r.concat(s) : [s])
            }
            )),
            l.pop()
        }
    }(e),
    t
}
function H(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
        return t[e]
    }
    ))
}
function J(e, t) {
    this._pairs = [],
    e && M(e, this, t)
}
const W = J.prototype;
function K(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function V(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || K
      , o = n && n.serialize;
    let s;
    if (s = o ? o(t, n) : U.isURLSearchParams(t) ? t.toString() : new J(t,n).toString(r),
    s) {
        const t = e.indexOf("#");
        -1 !== t && (e = e.slice(0, t)),
        e += (-1 === e.indexOf("?") ? "?" : "&") + s
    }
    return e
}
W.append = function(e, t) {
    this._pairs.push([e, t])
}
,
W.toString = function(e) {
    const t = e ? function(t) {
        return e.call(this, t, H)
    }
    : H;
    return this._pairs.map((function(e) {
        return t(e[0]) + "=" + t(e[1])
    }
    ), "").join("&")
}
;
const $ = class {
    constructor() {
        this.handlers = []
    }
    use(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        U.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }
        ))
    }
}
  , G = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , X = {
    isBrowser: !0,
    classes: {
        URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : J,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , Q = "undefined" != typeof window && "undefined" != typeof document
  , Z = (Y = "undefined" != typeof navigator && navigator.product,
Q && ["ReactNative", "NativeScript", "NS"].indexOf(Y) < 0);
var Y;
const ee = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts
  , te = {
    ...Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Q,
        hasStandardBrowserEnv: Z,
        hasStandardBrowserWebWorkerEnv: ee
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ...X
};
function ne(e) {
    function t(e, n, r, o) {
        let s = e[o++];
        if ("__proto__" === s)
            return !0;
        const i = Number.isFinite(+s)
          , a = o >= e.length;
        if (s = !s && U.isArray(r) ? r.length : s,
        a)
            return U.hasOwnProp(r, s) ? r[s] = [r[s], n] : r[s] = n,
            !i;
        r[s] && U.isObject(r[s]) || (r[s] = []);
        return t(e, n, r[s], o) && U.isArray(r[s]) && (r[s] = function(e) {
            const t = {}
              , n = Object.keys(e);
            let r;
            const o = n.length;
            let s;
            for (r = 0; r < o; r++)
                s = n[r],
                t[s] = e[s];
            return t
        }(r[s])),
        !i
    }
    if (U.isFormData(e) && U.isFunction(e.entries)) {
        const n = {};
        return U.forEachEntry(e, ((e,r)=>{
            t(function(e) {
                return U.matchAll(/\w+|\[(\w*)]/g, e).map((e=>"[]" === e[0] ? "" : e[1] || e[0]))
            }(e), r, n, 0)
        }
        )),
        n
    }
    return null
}
const re = {
    transitional: G,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, t) {
        const n = t.getContentType() || ""
          , r = n.indexOf("application/json") > -1
          , o = U.isObject(e);
        o && U.isHTMLForm(e) && (e = new FormData(e));
        if (U.isFormData(e))
            return r ? JSON.stringify(ne(e)) : e;
        if (U.isArrayBuffer(e) || U.isBuffer(e) || U.isStream(e) || U.isFile(e) || U.isBlob(e))
            return e;
        if (U.isArrayBufferView(e))
            return e.buffer;
        if (U.isURLSearchParams(e))
            return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            e.toString();
        let s;
        if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return function(e, t) {
                    return M(e, new te.classes.URLSearchParams, Object.assign({
                        visitor: function(e, t, n, r) {
                            return te.isNode && U.isBuffer(e) ? (this.append(t, e.toString("base64")),
                            !1) : r.defaultVisitor.apply(this, arguments)
                        }
                    }, t))
                }(e, this.formSerializer).toString();
            if ((s = U.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return M(s ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return o || r ? (t.setContentType("application/json", !1),
        function(e, t, n) {
            if (U.isString(e))
                try {
                    return (t || JSON.parse)(e),
                    U.trim(e)
                } catch (r) {
                    if ("SyntaxError" !== r.name)
                        throw r
                }
            return (n || JSON.stringify)(e)
        }(e)) : e
    }
    ],
    transformResponse: [function(e) {
        const t = this.transitional || re.transitional
          , n = t && t.forcedJSONParsing
          , r = "json" === this.responseType;
        if (e && U.isString(e) && (n && !this.responseType || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e)
            } catch (o) {
                if (n) {
                    if ("SyntaxError" === o.name)
                        throw B.from(o, B.ERR_BAD_RESPONSE, this, null, this.response);
                    throw o
                }
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: te.classes.FormData,
        Blob: te.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
U.forEach(["delete", "get", "head", "post", "put", "patch"], (e=>{
    re.headers[e] = {}
}
));
const oe = re
  , se = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , ie = Symbol("internals");
function ae(e) {
    return e && String(e).trim().toLowerCase()
}
function ce(e) {
    return !1 === e || null == e ? e : U.isArray(e) ? e.map(ce) : String(e)
}
function ue(e, t, n, r, o) {
    return U.isFunction(r) ? r.call(this, t, n) : (o && (t = n),
    U.isString(t) ? U.isString(r) ? -1 !== t.indexOf(r) : U.isRegExp(r) ? r.test(t) : void 0 : void 0)
}
class le {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, n) {
        const r = this;
        function o(e, t, n) {
            const o = ae(t);
            if (!o)
                throw new Error("header name must be a non-empty string");
            const s = U.findKey(r, o);
            (!s || void 0 === r[s] || !0 === n || void 0 === n && !1 !== r[s]) && (r[s || t] = ce(e))
        }
        const s = (e,t)=>U.forEach(e, ((e,n)=>o(e, n, t)));
        return U.isPlainObject(e) || e instanceof this.constructor ? s(e, t) : U.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? s((e=>{
            const t = {};
            let n, r, o;
            return e && e.split("\n").forEach((function(e) {
                o = e.indexOf(":"),
                n = e.substring(0, o).trim().toLowerCase(),
                r = e.substring(o + 1).trim(),
                !n || t[n] && se[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            }
            )),
            t
        }
        )(e), t) : null != e && o(t, e, n),
        this
    }
    get(e, t) {
        if (e = ae(e)) {
            const n = U.findKey(this, e);
            if (n) {
                const e = this[n];
                if (!t)
                    return e;
                if (!0 === t)
                    return function(e) {
                        const t = Object.create(null)
                          , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        let r;
                        for (; r = n.exec(e); )
                            t[r[1]] = r[2];
                        return t
                    }(e);
                if (U.isFunction(t))
                    return t.call(this, e, n);
                if (U.isRegExp(t))
                    return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(e, t) {
        if (e = ae(e)) {
            const n = U.findKey(this, e);
            return !(!n || void 0 === this[n] || t && !ue(0, this[n], n, t))
        }
        return !1
    }
    delete(e, t) {
        const n = this;
        let r = !1;
        function o(e) {
            if (e = ae(e)) {
                const o = U.findKey(n, e);
                !o || t && !ue(0, n[o], o, t) || (delete n[o],
                r = !0)
            }
        }
        return U.isArray(e) ? e.forEach(o) : o(e),
        r
    }
    clear(e) {
        const t = Object.keys(this);
        let n = t.length
          , r = !1;
        for (; n--; ) {
            const o = t[n];
            e && !ue(0, this[o], o, e, !0) || (delete this[o],
            r = !0)
        }
        return r
    }
    normalize(e) {
        const t = this
          , n = {};
        return U.forEach(this, ((r,o)=>{
            const s = U.findKey(n, o);
            if (s)
                return t[s] = ce(r),
                void delete t[o];
            const i = e ? function(e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e,t,n)=>t.toUpperCase() + n))
            }(o) : String(o).trim();
            i !== o && delete t[o],
            t[i] = ce(r),
            n[i] = !0
        }
        )),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        const t = Object.create(null);
        return U.forEach(this, ((n,r)=>{
            null != n && !1 !== n && (t[r] = e && U.isArray(n) ? n.join(", ") : n)
        }
        )),
        t
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map((([e,t])=>e + ": " + t)).join("\n")
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        const n = new this(e);
        return t.forEach((e=>n.set(e))),
        n
    }
    static accessor(e) {
        const t = (this[ie] = this[ie] = {
            accessors: {}
        }).accessors
          , n = this.prototype;
        function r(e) {
            const r = ae(e);
            t[r] || (!function(e, t) {
                const n = U.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r=>{
                    Object.defineProperty(e, r + n, {
                        value: function(e, n, o) {
                            return this[r].call(this, t, e, n, o)
                        },
                        configurable: !0
                    })
                }
                ))
            }(n, e),
            t[r] = !0)
        }
        return U.isArray(e) ? e.forEach(r) : r(e),
        this
    }
}
le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
U.reduceDescriptors(le.prototype, (({value: e},t)=>{
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: ()=>e,
        set(e) {
            this[n] = e
        }
    }
}
)),
U.freezeMethods(le);
const fe = le;
function de(e, t) {
    const n = this || oe
      , r = t || n
      , o = fe.from(r.headers);
    let s = r.data;
    return U.forEach(e, (function(e) {
        s = e.call(n, s, o.normalize(), t ? t.status : void 0)
    }
    )),
    o.normalize(),
    s
}
function pe(e) {
    return !(!e || !e.__CANCEL__)
}
function he(e, t, n) {
    B.call(this, null == e ? "canceled" : e, B.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
U.inherits(he, B, {
    __CANCEL__: !0
});
const me = te.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, s) {
        const i = [e + "=" + encodeURIComponent(t)];
        U.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        U.isString(r) && i.push("path=" + r),
        U.isString(o) && i.push("domain=" + o),
        !0 === s && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read: ()=>null,
    remove() {}
};
function ye(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
}
const ge = te.hasStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent)
      , t = document.createElement("a");
    let n;
    function r(n) {
        let r = n;
        return e && (t.setAttribute("href", r),
        r = t.href),
        t.setAttribute("href", r),
        {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
        }
    }
    return n = r(window.location.href),
    function(e) {
        const t = U.isString(e) ? r(e) : e;
        return t.protocol === n.protocol && t.host === n.host
    }
}() : function() {
    return !0
}
;
function be(e, t) {
    let n = 0;
    const r = function(e, t) {
        e = e || 10;
        const n = new Array(e)
          , r = new Array(e);
        let o, s = 0, i = 0;
        return t = void 0 !== t ? t : 1e3,
        function(a) {
            const c = Date.now()
              , u = r[i];
            o || (o = c),
            n[s] = a,
            r[s] = c;
            let l = i
              , f = 0;
            for (; l !== s; )
                f += n[l++],
                l %= e;
            if (s = (s + 1) % e,
            s === i && (i = (i + 1) % e),
            c - o < t)
                return;
            const d = u && c - u;
            return d ? Math.round(1e3 * f / d) : void 0
        }
    }(50, 250);
    return o=>{
        const s = o.loaded
          , i = o.lengthComputable ? o.total : void 0
          , a = s - n
          , c = r(a);
        n = s;
        const u = {
            loaded: s,
            total: i,
            progress: i ? s / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && s <= i ? (i - s) / c : void 0,
            event: o
        };
        u[t ? "download" : "upload"] = !0,
        e(u)
    }
}
const we = {
    http: null,
    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
        return new Promise((function(t, n) {
            let r = e.data;
            const o = fe.from(e.headers).normalize();
            let s, i, {responseType: a, withXSRFToken: c} = e;
            function u() {
                e.cancelToken && e.cancelToken.unsubscribe(s),
                e.signal && e.signal.removeEventListener("abort", s)
            }
            if (U.isFormData(r))
                if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
                    o.setContentType(!1);
                else if (!1 !== (i = o.getContentType())) {
                    const [e,...t] = i ? i.split(";").map((e=>e.trim())).filter(Boolean) : [];
                    o.setContentType([e || "multipart/form-data", ...t].join("; "))
                }
            let l = new XMLHttpRequest;
            if (e.auth) {
                const t = e.auth.username || ""
                  , n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(t + ":" + n))
            }
            const f = ye(e.baseURL, e.url);
            function d() {
                if (!l)
                    return;
                const r = fe.from("getAllResponseHeaders"in l && l.getAllResponseHeaders());
                !function(e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(new B("Request failed with status code " + n.status,[B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n)) : e(n)
                }((function(e) {
                    t(e),
                    u()
                }
                ), (function(e) {
                    n(e),
                    u()
                }
                ), {
                    data: a && "text" !== a && "json" !== a ? l.response : l.responseText,
                    status: l.status,
                    statusText: l.statusText,
                    headers: r,
                    config: e,
                    request: l
                }),
                l = null
            }
            if (l.open(e.method.toUpperCase(), V(f, e.params, e.paramsSerializer), !0),
            l.timeout = e.timeout,
            "onloadend"in l ? l.onloadend = d : l.onreadystatechange = function() {
                l && 4 === l.readyState && (0 !== l.status || l.responseURL && 0 === l.responseURL.indexOf("file:")) && setTimeout(d)
            }
            ,
            l.onabort = function() {
                l && (n(new B("Request aborted",B.ECONNABORTED,e,l)),
                l = null)
            }
            ,
            l.onerror = function() {
                n(new B("Network Error",B.ERR_NETWORK,e,l)),
                l = null
            }
            ,
            l.ontimeout = function() {
                let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                const r = e.transitional || G;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(new B(t,r.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,e,l)),
                l = null
            }
            ,
            te.hasStandardBrowserEnv && (c && U.isFunction(c) && (c = c(e)),
            c || !1 !== c && ge(f))) {
                const t = e.xsrfHeaderName && e.xsrfCookieName && me.read(e.xsrfCookieName);
                t && o.set(e.xsrfHeaderName, t)
            }
            void 0 === r && o.setContentType(null),
            "setRequestHeader"in l && U.forEach(o.toJSON(), (function(e, t) {
                l.setRequestHeader(t, e)
            }
            )),
            U.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
            a && "json" !== a && (l.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress && l.addEventListener("progress", be(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", be(e.onUploadProgress)),
            (e.cancelToken || e.signal) && (s = t=>{
                l && (n(!t || t.type ? new he(null,e,l) : t),
                l.abort(),
                l = null)
            }
            ,
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
            const p = function(e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return t && t[1] || ""
            }(f);
            p && -1 === te.protocols.indexOf(p) ? n(new B("Unsupported protocol " + p + ":",B.ERR_BAD_REQUEST,e)) : l.send(r || null)
        }
        ))
    }
};
U.forEach(we, ((e,t)=>{
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch (n) {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
));
const Ee = e=>`- ${e}`
  , Oe = e=>U.isFunction(e) || null === e || !1 === e
  , Se = e=>{
    e = U.isArray(e) ? e : [e];
    const {length: t} = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
        let t;
        if (n = e[s],
        r = n,
        !Oe(n) && (r = we[(t = String(n)).toLowerCase()],
        void 0 === r))
            throw new B(`Unknown adapter '${t}'`);
        if (r)
            break;
        o[t || "#" + s] = r
    }
    if (!r) {
        const e = Object.entries(o).map((([e,t])=>`adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")));
        throw new B("There is no suitable adapter to dispatch the request " + (t ? e.length > 1 ? "since :\n" + e.map(Ee).join("\n") : " " + Ee(e[0]) : "as no adapter specified"),"ERR_NOT_SUPPORT")
    }
    return r
}
;
function Re(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new he(null,e)
}
function Ae(e) {
    Re(e),
    e.headers = fe.from(e.headers),
    e.data = de.call(e, e.transformRequest),
    -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
    return Se(e.adapter || oe.adapter)(e).then((function(t) {
        return Re(e),
        t.data = de.call(e, e.transformResponse, t),
        t.headers = fe.from(t.headers),
        t
    }
    ), (function(t) {
        return pe(t) || (Re(e),
        t && t.response && (t.response.data = de.call(e, e.transformResponse, t.response),
        t.response.headers = fe.from(t.response.headers))),
        Promise.reject(t)
    }
    ))
}
const Te = e=>e instanceof fe ? {
    ...e
} : e;
function je(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
        return U.isPlainObject(e) && U.isPlainObject(t) ? U.merge.call({
            caseless: n
        }, e, t) : U.isPlainObject(t) ? U.merge({}, t) : U.isArray(t) ? t.slice() : t
    }
    function o(e, t, n) {
        return U.isUndefined(t) ? U.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
    }
    function s(e, t) {
        if (!U.isUndefined(t))
            return r(void 0, t)
    }
    function i(e, t) {
        return U.isUndefined(t) ? U.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
    }
    function a(n, o, s) {
        return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a,
        headers: (e,t)=>o(Te(e), Te(t), !0)
    };
    return U.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
        const s = c[r] || o
          , i = s(e[r], t[r], r);
        U.isUndefined(i) && s !== a || (n[r] = i)
    }
    )),
    n
}
const ve = "1.6.8"
  , Ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(((e,t)=>{
    Ne[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
));
const Ce = {};
Ne.transitional = function(e, t, n) {
    function r(e, t) {
        return "[Axios v1.6.8] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    }
    return (n,o,s)=>{
        if (!1 === e)
            throw new B(r(o, " has been removed" + (t ? " in " + t : "")),B.ERR_DEPRECATED);
        return t && !Ce[o] && (Ce[o] = !0,
        console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
        !e || e(n, o, s)
    }
}
;
const xe = {
    assertOptions: function(e, t, n) {
        if ("object" != typeof e)
            throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let o = r.length;
        for (; o-- > 0; ) {
            const s = r[o]
              , i = t[s];
            if (i) {
                const t = e[s]
                  , n = void 0 === t || i(t, s, e);
                if (!0 !== n)
                    throw new B("option " + s + " must be " + n,B.ERR_BAD_OPTION_VALUE)
            } else if (!0 !== n)
                throw new B("Unknown option " + s,B.ERR_BAD_OPTION)
        }
    },
    validators: Ne
}
  , Pe = xe.validators;
class _e {
    constructor(e) {
        this.defaults = e,
        this.interceptors = {
            request: new $,
            response: new $
        }
    }
    async request(e, t) {
        try {
            return await this._request(e, t)
        } catch (n) {
            if (n instanceof Error) {
                let e;
                Error.captureStackTrace ? Error.captureStackTrace(e = {}) : e = new Error;
                const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
                n.stack ? t && !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (n.stack += "\n" + t) : n.stack = t
            }
            throw n
        }
    }
    _request(e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {},
        t = je(this.defaults, t);
        const {transitional: n, paramsSerializer: r, headers: o} = t;
        void 0 !== n && xe.assertOptions(n, {
            silentJSONParsing: Pe.transitional(Pe.boolean),
            forcedJSONParsing: Pe.transitional(Pe.boolean),
            clarifyTimeoutError: Pe.transitional(Pe.boolean)
        }, !1),
        null != r && (U.isFunction(r) ? t.paramsSerializer = {
            serialize: r
        } : xe.assertOptions(r, {
            encode: Pe.function,
            serialize: Pe.function
        }, !0)),
        t.method = (t.method || this.defaults.method || "get").toLowerCase();
        let s = o && U.merge(o.common, o[t.method]);
        o && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e=>{
            delete o[e]
        }
        )),
        t.headers = fe.concat(s, o);
        const i = [];
        let a = !0;
        this.interceptors.request.forEach((function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous,
            i.unshift(e.fulfilled, e.rejected))
        }
        ));
        const c = [];
        let u;
        this.interceptors.response.forEach((function(e) {
            c.push(e.fulfilled, e.rejected)
        }
        ));
        let l, f = 0;
        if (!a) {
            const e = [Ae.bind(this), void 0];
            for (e.unshift.apply(e, i),
            e.push.apply(e, c),
            l = e.length,
            u = Promise.resolve(t); f < l; )
                u = u.then(e[f++], e[f++]);
            return u
        }
        l = i.length;
        let d = t;
        for (f = 0; f < l; ) {
            const e = i[f++]
              , t = i[f++];
            try {
                d = e(d)
            } catch (p) {
                t.call(this, p);
                break
            }
        }
        try {
            u = Ae.call(this, d)
        } catch (p) {
            return Promise.reject(p)
        }
        for (f = 0,
        l = c.length; f < l; )
            u = u.then(c[f++], c[f++]);
        return u
    }
    getUri(e) {
        return V(ye((e = je(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
    }
}
U.forEach(["delete", "get", "head", "options"], (function(e) {
    _e.prototype[e] = function(t, n) {
        return this.request(je(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
}
)),
U.forEach(["post", "put", "patch"], (function(e) {
    function t(t) {
        return function(n, r, o) {
            return this.request(je(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
            }))
        }
    }
    _e.prototype[e] = t(),
    _e.prototype[e + "Form"] = t(!0)
}
));
const Fe = _e;
class Ue {
    constructor(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise((function(e) {
            t = e
        }
        ));
        const n = this;
        this.promise.then((e=>{
            if (!n._listeners)
                return;
            let t = n._listeners.length;
            for (; t-- > 0; )
                n._listeners[t](e);
            n._listeners = null
        }
        )),
        this.promise.then = e=>{
            let t;
            const r = new Promise((e=>{
                n.subscribe(e),
                t = e
            }
            )).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }
            ,
            r
        }
        ,
        e((function(e, r, o) {
            n.reason || (n.reason = new he(e,r,o),
            t(n.reason))
        }
        ))
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        const t = this._listeners.indexOf(e);
        -1 !== t && this._listeners.splice(t, 1)
    }
    static source() {
        let e;
        return {
            token: new Ue((function(t) {
                e = t
            }
            )),
            cancel: e
        }
    }
}
const Be = Ue;
const Le = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Le).forEach((([e,t])=>{
    Le[t] = e
}
));
const De = Le;
const ke = function t(n) {
    const r = new Fe(n)
      , o = e(Fe.prototype.request, r);
    return U.extend(o, Fe.prototype, r, {
        allOwnKeys: !0
    }),
    U.extend(o, r, null, {
        allOwnKeys: !0
    }),
    o.create = function(e) {
        return t(je(n, e))
    }
    ,
    o
}(oe);
ke.Axios = Fe,
ke.CanceledError = he,
ke.CancelToken = Be,
ke.isCancel = pe,
ke.VERSION = ve,
ke.toFormData = M,
ke.AxiosError = B,
ke.Cancel = ke.CanceledError,
ke.all = function(e) {
    return Promise.all(e)
}
,
ke.spread = function(e) {
    return function(t) {
        return e.apply(null, t)
    }
}
,
ke.isAxiosError = function(e) {
    return U.isObject(e) && !0 === e.isAxiosError
}
,
ke.mergeConfig = je,
ke.AxiosHeaders = fe,
ke.formToJSON = e=>ne(U.isHTMLForm(e) ? new FormData(e) : e),
ke.getAdapter = Se,
ke.HttpStatusCode = De,
ke.default = ke;
const qe = ke
  , Ie = "https://api.lige.chat"
  , ze = async()=>await qe(`${Ie}/getJson`)
  , Me = async e=>await qe({
    method: "post",
    data: e,
    url: `${Ie}/ua`
})
  , He = async()=>await qe(`${Ie}/routerAll`);
export {ze as g, He as r, Me as u};
