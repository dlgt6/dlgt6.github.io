import {b as u, d as e, v as t, U as D, I as n, C as r, S as o, j as a, u as i, l as s, P as l, T as c, E as F, R as C, H as A, L as E, _ as f, J as d, w as p, V as B, W as v, X as m, Y as g, Z as y} from "./el-input-22ab3590.js";
import {a as b, E as h} from "./el-button-e3b4a1de.js";
import {bM as w, bF as x, bG as S, M as N, bd as k, aM as I, q as O, ax as $, aE as P, s as _, bx as L, v as T, ao as j, bc as V, aq as R, I as J, u as z, aQ as H, F as M, aP as q, H as K, b3 as U, am as W, bA as X, bC as Z, A as Y, bH as G, aK as Q, r as uu, b8 as eu, a4 as tu, bz as Du, bp as nu, g as ru, an as ou, af as au, bN as iu, bK as su, bO as lu, aR as cu, aI as Fu, aF as Cu} from "./index-f4b1b3ff.js";
import {c as Au, a as Eu} from "./_commonjsHelpers-26303f2a.js";
import {g as fu, u as du} from "./tvbox-93cfa79f.js";
import {E as pu} from "./el-message-87050c21.js";
const Bu = u({
    valueKey: {
        type: String,
        default: "value"
    },
    modelValue: {
        type: [String, Number],
        default: ""
    },
    debounce: {
        type: Number,
        default: 300
    },
    placement: {
        type: e(String),
        values: ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end"],
        default: "bottom-start"
    },
    fetchSuggestions: {
        type: e([Function, Array]),
        default: w
    },
    popperClass: {
        type: String,
        default: ""
    },
    triggerOnFocus: {
        type: Boolean,
        default: !0
    },
    selectWhenUnmatched: {
        type: Boolean,
        default: !1
    },
    hideLoading: {
        type: Boolean,
        default: !1
    },
    label: {
        type: String
    },
    teleported: t.teleported,
    highlightFirstItem: {
        type: Boolean,
        default: !1
    },
    fitInputWidth: {
        type: Boolean,
        default: !1
    },
    clearable: {
        type: Boolean,
        default: !1
    },
    disabled: {
        type: Boolean,
        default: !1
    },
    name: String
})
  , vu = {
    [D]: u=>x(u),
    [n]: u=>x(u),
    [r]: u=>x(u),
    focus: u=>u instanceof FocusEvent,
    blur: u=>u instanceof FocusEvent,
    clear: ()=>!0,
    select: u=>S(u)
}
  , mu = ["aria-expanded", "aria-owns"]
  , gu = {
    key: 0
}
  , yu = ["id", "aria-selected", "onClick"]
  , bu = "ElAutocomplete"
  , hu = N({
    name: bu,
    inheritAttrs: !1
});
const wu = p(f(N({
    ...hu,
    props: Bu,
    emits: vu,
    setup(u, {expose: e, emit: t}) {
        const f = u
          , p = o()
          , B = k()
          , v = a()
          , m = i("autocomplete")
          , g = I()
          , y = I()
          , h = I()
          , w = I();
        let x = !1
          , S = !1;
        const N = I([])
          , Q = I(-1)
          , uu = I("")
          , eu = I(!1)
          , tu = I(!1)
          , Du = I(!1)
          , nu = s()
          , ru = O((()=>B.style))
          , ou = O((()=>(N.value.length > 0 || Du.value) && eu.value))
          , au = O((()=>!f.hideLoading && Du.value))
          , iu = O((()=>g.value ? Array.from(g.value.$el.querySelectorAll("input")) : []))
          , su = ()=>{
            ou.value && (uu.value = `${g.value.$el.offsetWidth}px`)
        }
          , lu = ()=>{
            Q.value = -1
        }
          , cu = l((async u=>{
            if (tu.value)
                return;
            const e = u=>{
                Du.value = !1,
                tu.value || (G(u) ? (N.value = u,
                Q.value = f.highlightFirstItem ? 0 : -1) : d(bu, "autocomplete suggestions must be an array"))
            }
            ;
            if (Du.value = !0,
            G(f.fetchSuggestions))
                e(f.fetchSuggestions);
            else {
                const t = await f.fetchSuggestions(u, e);
                G(t) && e(t)
            }
        }
        ), f.debounce)
          , Fu = u=>{
            const e = !!u;
            if (t(n, u),
            t(D, u),
            tu.value = !1,
            eu.value || (eu.value = e),
            !f.triggerOnFocus && !u)
                return tu.value = !0,
                void (N.value = []);
            cu(u)
        }
          , Cu = u=>{
            var e;
            v.value || ("INPUT" !== (null == (e = u.target) ? void 0 : e.tagName) || iu.value.includes(document.activeElement)) && (eu.value = !0)
        }
          , Au = u=>{
            t(r, u)
        }
          , Eu = u=>{
            S ? S = !1 : (eu.value = !0,
            t("focus", u),
            f.triggerOnFocus && !x && cu(String(f.modelValue)))
        }
          , fu = u=>{
            setTimeout((()=>{
                var e;
                (null == (e = h.value) ? void 0 : e.isFocusInsideContent()) ? S = !0 : (eu.value && vu(),
                t("blur", u))
            }
            ))
        }
          , du = ()=>{
            eu.value = !1,
            t(D, ""),
            t("clear")
        }
          , pu = async()=>{
            ou.value && Q.value >= 0 && Q.value < N.value.length ? hu(N.value[Q.value]) : f.selectWhenUnmatched && (t("select", {
                value: f.modelValue
            }),
            N.value = [],
            Q.value = -1)
        }
          , Bu = u=>{
            ou.value && (u.preventDefault(),
            u.stopPropagation(),
            vu())
        }
          , vu = ()=>{
            eu.value = !1
        }
          , hu = async u=>{
            t(n, u[f.valueKey]),
            t(D, u[f.valueKey]),
            t("select", u),
            N.value = [],
            Q.value = -1
        }
          , wu = u=>{
            if (!ou.value || Du.value)
                return;
            if (u < 0)
                return void (Q.value = -1);
            u >= N.value.length && (u = N.value.length - 1);
            const e = y.value.querySelector(`.${m.be("suggestion", "wrap")}`)
              , t = e.querySelectorAll(`.${m.be("suggestion", "list")} li`)[u]
              , D = e.scrollTop
              , {offsetTop: n, scrollHeight: r} = t;
            n + r > D + e.clientHeight && (e.scrollTop += r),
            n < D && (e.scrollTop -= r),
            Q.value = u,
            g.value.ref.setAttribute("aria-activedescendant", `${nu.value}-item-${Q.value}`)
        }
        ;
        return c(w, (()=>{
            ou.value && vu()
        }
        )),
        $((()=>{
            g.value.ref.setAttribute("role", "textbox"),
            g.value.ref.setAttribute("aria-autocomplete", "list"),
            g.value.ref.setAttribute("aria-controls", "id"),
            g.value.ref.setAttribute("aria-activedescendant", `${nu.value}-item-${Q.value}`),
            x = g.value.ref.hasAttribute("readonly")
        }
        )),
        e({
            highlightedIndex: Q,
            activated: eu,
            loading: Du,
            inputRef: g,
            popperRef: h,
            suggestions: N,
            handleSelect: hu,
            handleKeyEnter: pu,
            focus: ()=>{
                var u;
                null == (u = g.value) || u.focus()
            }
            ,
            blur: ()=>{
                var u;
                null == (u = g.value) || u.blur()
            }
            ,
            close: vu,
            highlight: wu
        }),
        (u,e)=>(P(),
        _(V(E), {
            ref_key: "popperRef",
            ref: h,
            visible: V(ou),
            placement: u.placement,
            "fallback-placements": ["bottom-start", "top-start"],
            "popper-class": [V(m).e("popper"), u.popperClass],
            teleported: u.teleported,
            "gpu-acceleration": !1,
            pure: "",
            "manual-mode": "",
            effect: "light",
            trigger: "click",
            transition: `${V(m).namespace.value}-zoom-in-top`,
            persistent: "",
            role: "listbox",
            onBeforeShow: su,
            onHide: lu
        }, {
            content: L((()=>[T("div", {
                ref_key: "regionRef",
                ref: y,
                class: j([V(m).b("suggestion"), V(m).is("loading", V(au))]),
                style: R({
                    [u.fitInputWidth ? "width" : "minWidth"]: uu.value,
                    outline: "none"
                }),
                role: "region"
            }, [J(V(b), {
                id: V(nu),
                tag: "ul",
                "wrap-class": V(m).be("suggestion", "wrap"),
                "view-class": V(m).be("suggestion", "list"),
                role: "listbox"
            }, {
                default: L((()=>[V(au) ? (P(),
                z("li", gu, [H(u.$slots, "loading", {}, (()=>[J(V(F), {
                    class: j(V(m).is("loading"))
                }, {
                    default: L((()=>[J(V(C))])),
                    _: 1
                }, 8, ["class"])]))])) : (P(!0),
                z(M, {
                    key: 1
                }, q(N.value, ((e,t)=>(P(),
                z("li", {
                    id: `${V(nu)}-item-${t}`,
                    key: t,
                    class: j({
                        highlighted: Q.value === t
                    }),
                    role: "option",
                    "aria-selected": Q.value === t,
                    onClick: u=>hu(e)
                }, [H(u.$slots, "default", {
                    item: e
                }, (()=>[K(U(e[u.valueKey]), 1)]))], 10, yu)))), 128))])),
                _: 3
            }, 8, ["id", "wrap-class", "view-class"])], 6)])),
            default: L((()=>[T("div", {
                ref_key: "listboxRef",
                ref: w,
                class: j([V(m).b(), u.$attrs.class]),
                style: R(V(ru)),
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-expanded": V(ou),
                "aria-owns": V(nu)
            }, [J(V(A), W({
                ref_key: "inputRef",
                ref: g
            }, V(p), {
                clearable: u.clearable,
                disabled: V(v),
                name: u.name,
                "model-value": u.modelValue,
                onInput: Fu,
                onChange: Au,
                onFocus: Eu,
                onBlur: fu,
                onClear: du,
                onKeydown: [e[0] || (e[0] = X(Z((u=>wu(Q.value - 1)), ["prevent"]), ["up"])), e[1] || (e[1] = X(Z((u=>wu(Q.value + 1)), ["prevent"]), ["down"])), X(pu, ["enter"]), X(vu, ["tab"]), X(Bu, ["esc"])],
                onMousedown: Cu
            }), Y({
                _: 2
            }, [u.$slots.prepend ? {
                name: "prepend",
                fn: L((()=>[H(u.$slots, "prepend")]))
            } : void 0, u.$slots.append ? {
                name: "append",
                fn: L((()=>[H(u.$slots, "append")]))
            } : void 0, u.$slots.prefix ? {
                name: "prefix",
                fn: L((()=>[H(u.$slots, "prefix")]))
            } : void 0, u.$slots.suffix ? {
                name: "suffix",
                fn: L((()=>[H(u.$slots, "suffix")]))
            } : void 0]), 1040, ["clearable", "disabled", "name", "model-value", "onKeydown"])], 14, mu)])),
            _: 3
        }, 8, ["visible", "placement", "popper-class", "teleported", "transition"]))
    }
}), [["__file", "autocomplete.vue"]]));
function xu(u) {
    let e;
    const t = I(!1)
      , D = Q({
        ...u,
        originalPosition: "",
        originalOverflow: "",
        visible: !1
    });
    function n() {
        var u, e;
        null == (e = null == (u = i.$el) ? void 0 : u.parentNode) || e.removeChild(i.$el)
    }
    function r() {
        if (!t.value)
            return;
        const u = D.parent;
        t.value = !1,
        u.vLoadingAddClassList = void 0,
        function() {
            const u = D.parent
              , e = i.ns;
            if (!u.vLoadingAddClassList) {
                let t = u.getAttribute("loading-number");
                t = Number.parseInt(t) - 1,
                t ? u.setAttribute("loading-number", t.toString()) : (v(u, e.bm("parent", "relative")),
                u.removeAttribute("loading-number")),
                v(u, e.bm("parent", "hidden"))
            }
            n(),
            a.unmount()
        }()
    }
    const o = N({
        name: "ElLoading",
        setup(u, {expose: e}) {
            const {ns: t, zIndex: n} = B("loading");
            return e({
                ns: t,
                zIndex: n
            }),
            ()=>{
                const u = D.spinner || D.svg
                  , e = tu("svg", {
                    class: "circular",
                    viewBox: D.svgViewBox ? D.svgViewBox : "0 0 50 50",
                    ...u ? {
                        innerHTML: u
                    } : {}
                }, [tu("circle", {
                    class: "path",
                    cx: "25",
                    cy: "25",
                    r: "20",
                    fill: "none"
                })])
                  , n = D.text ? tu("p", {
                    class: t.b("text")
                }, [D.text]) : void 0;
                return tu(ru, {
                    name: t.b("fade"),
                    onAfterLeave: r
                }, {
                    default: L((()=>[Du(J("div", {
                        style: {
                            backgroundColor: D.background || ""
                        },
                        class: [t.b("mask"), D.customClass, D.fullscreen ? "is-fullscreen" : ""]
                    }, [tu("div", {
                        class: t.b("spinner")
                    }, [e, n])]), [[nu, D.visible]])]))
                })
            }
        }
    })
      , a = uu(o)
      , i = a.mount(document.createElement("div"));
    return {
        ...eu(D),
        setText: function(u) {
            D.text = u
        },
        removeElLoadingChild: n,
        close: function() {
            var n;
            u.beforeClose && !u.beforeClose() || (t.value = !0,
            clearTimeout(e),
            e = window.setTimeout(r, 400),
            D.visible = !1,
            null == (n = u.closed) || n.call(u))
        },
        handleAfterLeave: r,
        vm: i,
        get $el() {
            return i.$el
        }
    }
}
let Su;
const Nu = function(u={}) {
    if (!m)
        return;
    const e = ku(u);
    if (e.fullscreen && Su)
        return Su;
    const t = xu({
        ...e,
        closed: ()=>{
            var u;
            null == (u = e.closed) || u.call(e),
            e.fullscreen && (Su = void 0)
        }
    });
    Iu(e, e.parent, t),
    Ou(e, e.parent, t),
    e.parent.vLoadingAddClassList = ()=>Ou(e, e.parent, t);
    let D = e.parent.getAttribute("loading-number");
    return D = D ? `${Number.parseInt(D) + 1}` : "1",
    e.parent.setAttribute("loading-number", D),
    e.parent.appendChild(t.$el),
    ou((()=>t.visible.value = e.visible)),
    e.fullscreen && (Su = t),
    t
}
  , ku = u=>{
    var e, t, D, n;
    let r;
    return r = x(u.target) ? null != (e = document.querySelector(u.target)) ? e : document.body : u.target || document.body,
    {
        parent: r === document.body || u.body ? document.body : r,
        background: u.background || "",
        svg: u.svg || "",
        svgViewBox: u.svgViewBox || "",
        spinner: u.spinner || !1,
        text: u.text || "",
        fullscreen: r === document.body && (null == (t = u.fullscreen) || t),
        lock: null != (D = u.lock) && D,
        customClass: u.customClass || "",
        visible: null == (n = u.visible) || n,
        target: r
    }
}
  , Iu = async(u,e,t)=>{
    const {nextZIndex: D} = t.vm.zIndex || t.vm._.exposed.zIndex
      , n = {};
    if (u.fullscreen)
        t.originalPosition.value = g(document.body, "position"),
        t.originalOverflow.value = g(document.body, "overflow"),
        n.zIndex = D();
    else if (u.parent === document.body) {
        t.originalPosition.value = g(document.body, "position"),
        await ou();
        for (const e of ["top", "left"]) {
            const t = "top" === e ? "scrollTop" : "scrollLeft";
            n[e] = u.target.getBoundingClientRect()[e] + document.body[t] + document.documentElement[t] - Number.parseInt(g(document.body, `margin-${e}`), 10) + "px"
        }
        for (const e of ["height", "width"])
            n[e] = `${u.target.getBoundingClientRect()[e]}px`
    } else
        t.originalPosition.value = g(e, "position");
    for (const [r,o] of Object.entries(n))
        t.$el.style[r] = o
}
  , Ou = (u,e,t)=>{
    const D = t.vm.ns || t.vm._.exposed.ns;
    ["absolute", "fixed", "sticky"].includes(t.originalPosition.value) ? v(e, D.bm("parent", "relative")) : y(e, D.bm("parent", "relative")),
    u.fullscreen && u.lock ? y(e, D.bm("parent", "hidden")) : v(e, D.bm("parent", "hidden"))
}
  , $u = Symbol("ElLoading")
  , Pu = (u,e)=>{
    var t, D, n, r;
    const o = e.instance
      , a = u=>S(e.value) ? e.value[u] : void 0
      , i = e=>(u=>{
        const e = x(u) && (null == o ? void 0 : o[u]) || u;
        return e ? I(e) : e
    }
    )(a(e) || u.getAttribute(`element-loading-${iu(e)}`))
      , s = null != (t = a("fullscreen")) ? t : e.modifiers.fullscreen
      , l = {
        text: i("text"),
        svg: i("svg"),
        svgViewBox: i("svgViewBox"),
        spinner: i("spinner"),
        background: i("background"),
        customClass: i("customClass"),
        fullscreen: s,
        target: null != (D = a("target")) ? D : s ? void 0 : u,
        body: null != (n = a("body")) ? n : e.modifiers.body,
        lock: null != (r = a("lock")) ? r : e.modifiers.lock
    };
    u[$u] = {
        options: l,
        instance: Nu(l)
    }
}
  , _u = {
    mounted(u, e) {
        e.value && Pu(u, e)
    },
    updated(u, e) {
        const t = u[$u];
        e.oldValue !== e.value && (e.value && !e.oldValue ? Pu(u, e) : e.value && e.oldValue ? S(e.value) && ((u,e)=>{
            for (const t of Object.keys(e))
                au(e[t]) && (e[t].value = u[t])
        }
        )(e.value, t.options) : null == t || t.instance.close())
    },
    unmounted(u) {
        var e;
        null == (e = u[$u]) || e.instance.close(),
        u[$u] = null
    }
};
var Lu = {
    exports: {}
};
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
const Tu = Eu(Lu.exports = function() {
    return function() {
        var u = {
            686: function(u, e, t) {
                t.d(e, {
                    default: function() {
                        return g
                    }
                });
                var D = t(279)
                  , n = t.n(D)
                  , r = t(370)
                  , o = t.n(r)
                  , a = t(817)
                  , i = t.n(a);
                function s(u) {
                    try {
                        return document.execCommand(u)
                    } catch (e) {
                        return !1
                    }
                }
                var l = function(u) {
                    var e = i()(u);
                    return s("cut"),
                    e
                }
                  , c = function(u, e) {
                    var t = function(u) {
                        var e = "rtl" === document.documentElement.getAttribute("dir")
                          , t = document.createElement("textarea");
                        t.style.fontSize = "12pt",
                        t.style.border = "0",
                        t.style.padding = "0",
                        t.style.margin = "0",
                        t.style.position = "absolute",
                        t.style[e ? "right" : "left"] = "-9999px";
                        var D = window.pageYOffset || document.documentElement.scrollTop;
                        return t.style.top = "".concat(D, "px"),
                        t.setAttribute("readonly", ""),
                        t.value = u,
                        t
                    }(u);
                    e.container.appendChild(t);
                    var D = i()(t);
                    return s("copy"),
                    t.remove(),
                    D
                }
                  , F = function(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        container: document.body
                    }
                      , t = "";
                    return "string" == typeof u ? t = c(u, e) : u instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == u ? void 0 : u.type) ? t = c(u.value, e) : (t = i()(u),
                    s("copy")),
                    t
                };
                function C(u) {
                    return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    }
                    : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    }
                    )(u)
                }
                var A = function() {
                    var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = u.action
                      , t = void 0 === e ? "copy" : e
                      , D = u.container
                      , n = u.target
                      , r = u.text;
                    if ("copy" !== t && "cut" !== t)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    if (void 0 !== n) {
                        if (!n || "object" !== C(n) || 1 !== n.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === t && n.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === t && (n.hasAttribute("readonly") || n.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                    }
                    return r ? F(r, {
                        container: D
                    }) : n ? "cut" === t ? l(n) : F(n, {
                        container: D
                    }) : void 0
                };
                function E(u) {
                    return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    }
                    : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    }
                    )(u)
                }
                function f(u, e) {
                    for (var t = 0; t < e.length; t++) {
                        var D = e[t];
                        D.enumerable = D.enumerable || !1,
                        D.configurable = !0,
                        "value"in D && (D.writable = !0),
                        Object.defineProperty(u, D.key, D)
                    }
                }
                function d(u, e) {
                    return (d = Object.setPrototypeOf || function(u, e) {
                        return u.__proto__ = e,
                        u
                    }
                    )(u, e)
                }
                function p(u) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ("function" == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                            ))),
                            !0
                        } catch (u) {
                            return !1
                        }
                    }();
                    return function() {
                        var t, D, n, r = B(u);
                        if (e) {
                            var o = B(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else
                            t = r.apply(this, arguments);
                        return D = this,
                        !(n = t) || "object" !== E(n) && "function" != typeof n ? function(u) {
                            if (void 0 === u)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return u
                        }(D) : n
                    }
                }
                function B(u) {
                    return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function(u) {
                        return u.__proto__ || Object.getPrototypeOf(u)
                    }
                    )(u)
                }
                function v(u, e) {
                    var t = "data-clipboard-".concat(u);
                    if (e.hasAttribute(t))
                        return e.getAttribute(t)
                }
                var m = function(u) {
                    !function(u, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Super expression must either be null or a function");
                        u.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: u,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        e && d(u, e)
                    }(r, u);
                    var e, t, D, n = p(r);
                    function r(u, e) {
                        var t;
                        return function(u, e) {
                            if (!(u instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, r),
                        (t = n.call(this)).resolveOptions(e),
                        t.listenClick(u),
                        t
                    }
                    return e = r,
                    t = [{
                        key: "resolveOptions",
                        value: function() {
                            var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof u.action ? u.action : this.defaultAction,
                            this.target = "function" == typeof u.target ? u.target : this.defaultTarget,
                            this.text = "function" == typeof u.text ? u.text : this.defaultText,
                            this.container = "object" === E(u.container) ? u.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(u) {
                            var e = this;
                            this.listener = o()(u, "click", (function(u) {
                                return e.onClick(u)
                            }
                            ))
                        }
                    }, {
                        key: "onClick",
                        value: function(u) {
                            var e = u.delegateTarget || u.currentTarget
                              , t = this.action(e) || "copy"
                              , D = A({
                                action: t,
                                container: this.container,
                                target: this.target(e),
                                text: this.text(e)
                            });
                            this.emit(D ? "success" : "error", {
                                action: t,
                                text: D,
                                trigger: e,
                                clearSelection: function() {
                                    e && e.focus(),
                                    window.getSelection().removeAllRanges()
                                }
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(u) {
                            return v("action", u)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(u) {
                            var e = v("target", u);
                            if (e)
                                return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(u) {
                            return v("text", u)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy()
                        }
                    }],
                    D = [{
                        key: "copy",
                        value: function(u) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                container: document.body
                            };
                            return F(u, e)
                        }
                    }, {
                        key: "cut",
                        value: function(u) {
                            return l(u)
                        }
                    }, {
                        key: "isSupported",
                        value: function() {
                            var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                              , e = "string" == typeof u ? [u] : u
                              , t = !!document.queryCommandSupported;
                            return e.forEach((function(u) {
                                t = t && !!document.queryCommandSupported(u)
                            }
                            )),
                            t
                        }
                    }],
                    t && f(e.prototype, t),
                    D && f(e, D),
                    r
                }(n())
                  , g = m
            },
            828: function(u) {
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var e = Element.prototype;
                    e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector
                }
                u.exports = function(u, e) {
                    for (; u && 9 !== u.nodeType; ) {
                        if ("function" == typeof u.matches && u.matches(e))
                            return u;
                        u = u.parentNode
                    }
                }
            },
            438: function(u, e, t) {
                var D = t(828);
                function n(u, e, t, D, n) {
                    var o = r.apply(this, arguments);
                    return u.addEventListener(t, o, n),
                    {
                        destroy: function() {
                            u.removeEventListener(t, o, n)
                        }
                    }
                }
                function r(u, e, t, n) {
                    return function(t) {
                        t.delegateTarget = D(t.target, e),
                        t.delegateTarget && n.call(u, t)
                    }
                }
                u.exports = function(u, e, t, D, r) {
                    return "function" == typeof u.addEventListener ? n.apply(null, arguments) : "function" == typeof t ? n.bind(null, document).apply(null, arguments) : ("string" == typeof u && (u = document.querySelectorAll(u)),
                    Array.prototype.map.call(u, (function(u) {
                        return n(u, e, t, D, r)
                    }
                    )))
                }
            },
            879: function(u, e) {
                e.node = function(u) {
                    return void 0 !== u && u instanceof HTMLElement && 1 === u.nodeType
                }
                ,
                e.nodeList = function(u) {
                    var t = Object.prototype.toString.call(u);
                    return void 0 !== u && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length"in u && (0 === u.length || e.node(u[0]))
                }
                ,
                e.string = function(u) {
                    return "string" == typeof u || u instanceof String
                }
                ,
                e.fn = function(u) {
                    return "[object Function]" === Object.prototype.toString.call(u)
                }
            },
            370: function(u, e, t) {
                var D = t(879)
                  , n = t(438);
                u.exports = function(u, e, t) {
                    if (!u && !e && !t)
                        throw new Error("Missing required arguments");
                    if (!D.string(e))
                        throw new TypeError("Second argument must be a String");
                    if (!D.fn(t))
                        throw new TypeError("Third argument must be a Function");
                    if (D.node(u))
                        return function(u, e, t) {
                            return u.addEventListener(e, t),
                            {
                                destroy: function() {
                                    u.removeEventListener(e, t)
                                }
                            }
                        }(u, e, t);
                    if (D.nodeList(u))
                        return function(u, e, t) {
                            return Array.prototype.forEach.call(u, (function(u) {
                                u.addEventListener(e, t)
                            }
                            )),
                            {
                                destroy: function() {
                                    Array.prototype.forEach.call(u, (function(u) {
                                        u.removeEventListener(e, t)
                                    }
                                    ))
                                }
                            }
                        }(u, e, t);
                    if (D.string(u))
                        return function(u, e, t) {
                            return n(document.body, u, e, t)
                        }(u, e, t);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
            },
            817: function(u) {
                u.exports = function(u) {
                    var e;
                    if ("SELECT" === u.nodeName)
                        u.focus(),
                        e = u.value;
                    else if ("INPUT" === u.nodeName || "TEXTAREA" === u.nodeName) {
                        var t = u.hasAttribute("readonly");
                        t || u.setAttribute("readonly", ""),
                        u.select(),
                        u.setSelectionRange(0, u.value.length),
                        t || u.removeAttribute("readonly"),
                        e = u.value
                    } else {
                        u.hasAttribute("contenteditable") && u.focus();
                        var D = window.getSelection()
                          , n = document.createRange();
                        n.selectNodeContents(u),
                        D.removeAllRanges(),
                        D.addRange(n),
                        e = D.toString()
                    }
                    return e
                }
            },
            279: function(u) {
                function e() {}
                e.prototype = {
                    on: function(u, e, t) {
                        var D = this.e || (this.e = {});
                        return (D[u] || (D[u] = [])).push({
                            fn: e,
                            ctx: t
                        }),
                        this
                    },
                    once: function(u, e, t) {
                        var D = this;
                        function n() {
                            D.off(u, n),
                            e.apply(t, arguments)
                        }
                        return n._ = e,
                        this.on(u, n, t)
                    },
                    emit: function(u) {
                        for (var e = [].slice.call(arguments, 1), t = ((this.e || (this.e = {}))[u] || []).slice(), D = 0, n = t.length; D < n; D++)
                            t[D].fn.apply(t[D].ctx, e);
                        return this
                    },
                    off: function(u, e) {
                        var t = this.e || (this.e = {})
                          , D = t[u]
                          , n = [];
                        if (D && e)
                            for (var r = 0, o = D.length; r < o; r++)
                                D[r].fn !== e && D[r].fn._ !== e && n.push(D[r]);
                        return n.length ? t[u] = n : delete t[u],
                        this
                    }
                },
                u.exports = e,
                u.exports.TinyEmitter = e
            }
        }
          , e = {};
        function t(D) {
            if (e[D])
                return e[D].exports;
            var n = e[D] = {
                exports: {}
            };
            return u[D](n, n.exports, t),
            n.exports
        }
        return t.n = function(u) {
            var e = u && u.__esModule ? function() {
                return u.default
            }
            : function() {
                return u
            }
            ;
            return t.d(e, {
                a: e
            }),
            e
        }
        ,
        t.d = function(u, e) {
            for (var D in e)
                t.o(e, D) && !t.o(u, D) && Object.defineProperty(u, D, {
                    enumerable: !0,
                    get: e[D]
                })
        }
        ,
        t.o = function(u, e) {
            return Object.prototype.hasOwnProperty.call(u, e)
        }
        ,
        t(686)
    }().default
}());
var ju = {
    Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    ID_Start: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
    ID_Continue: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
}
  , Vu = {
    isSpaceSeparator: u=>"string" == typeof u && ju.Space_Separator.test(u),
    isIdStartChar: u=>"string" == typeof u && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || "$" === u || "_" === u || ju.ID_Start.test(u)),
    isIdContinueChar: u=>"string" == typeof u && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u >= "0" && u <= "9" || "$" === u || "_" === u || "‌" === u || "‍" === u || ju.ID_Continue.test(u)),
    isDigit: u=>"string" == typeof u && /[0-9]/.test(u),
    isHexDigit: u=>"string" == typeof u && /[0-9A-Fa-f]/.test(u)
};
let Ru, Ju, zu, Hu, Mu, qu, Ku, Uu, Wu;
function Xu(u, e, t) {
    const D = u[e];
    if (null != D && "object" == typeof D)
        if (Array.isArray(D))
            for (let n = 0; n < D.length; n++) {
                const u = String(n)
                  , e = Xu(D, u, t);
                void 0 === e ? delete D[u] : Object.defineProperty(D, u, {
                    value: e,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            }
        else
            for (const n in D) {
                const u = Xu(D, n, t);
                void 0 === u ? delete D[n] : Object.defineProperty(D, n, {
                    value: u,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            }
    return t.call(u, e, D)
}
let Zu, Yu, Gu, Qu, ue;
function ee() {
    for (Zu = "default",
    Yu = "",
    Gu = !1,
    Qu = 1; ; ) {
        ue = te();
        const u = ne[Zu]();
        if (u)
            return u
    }
}
function te() {
    if (Ru[Hu])
        return String.fromCodePoint(Ru.codePointAt(Hu))
}
function De() {
    const u = te();
    return "\n" === u ? (Mu++,
    qu = 0) : u ? qu += u.length : qu++,
    u && (Hu += u.length),
    u
}
const ne = {
    default() {
        switch (ue) {
        case "\t":
        case "\v":
        case "\f":
        case " ":
        case " ":
        case "\ufeff":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
            return void De();
        case "/":
            return De(),
            void (Zu = "comment");
        case void 0:
            return De(),
            re("eof")
        }
        if (!Vu.isSpaceSeparator(ue))
            return ne[Ju]();
        De()
    },
    comment() {
        switch (ue) {
        case "*":
            return De(),
            void (Zu = "multiLineComment");
        case "/":
            return De(),
            void (Zu = "singleLineComment")
        }
        throw ce(De())
    },
    multiLineComment() {
        switch (ue) {
        case "*":
            return De(),
            void (Zu = "multiLineCommentAsterisk");
        case void 0:
            throw ce(De())
        }
        De()
    },
    multiLineCommentAsterisk() {
        switch (ue) {
        case "*":
            return void De();
        case "/":
            return De(),
            void (Zu = "default");
        case void 0:
            throw ce(De())
        }
        De(),
        Zu = "multiLineComment"
    },
    singleLineComment() {
        switch (ue) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
            return De(),
            void (Zu = "default");
        case void 0:
            return De(),
            re("eof")
        }
        De()
    },
    value() {
        switch (ue) {
        case "{":
        case "[":
            return re("punctuator", De());
        case "n":
            return De(),
            oe("ull"),
            re("null", null);
        case "t":
            return De(),
            oe("rue"),
            re("boolean", !0);
        case "f":
            return De(),
            oe("alse"),
            re("boolean", !1);
        case "-":
        case "+":
            return "-" === De() && (Qu = -1),
            void (Zu = "sign");
        case ".":
            return Yu = De(),
            void (Zu = "decimalPointLeading");
        case "0":
            return Yu = De(),
            void (Zu = "zero");
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            return Yu = De(),
            void (Zu = "decimalInteger");
        case "I":
            return De(),
            oe("nfinity"),
            re("numeric", 1 / 0);
        case "N":
            return De(),
            oe("aN"),
            re("numeric", NaN);
        case '"':
        case "'":
            return Gu = '"' === De(),
            Yu = "",
            void (Zu = "string")
        }
        throw ce(De())
    },
    identifierNameStartEscape() {
        if ("u" !== ue)
            throw ce(De());
        De();
        const u = ae();
        switch (u) {
        case "$":
        case "_":
            break;
        default:
            if (!Vu.isIdStartChar(u))
                throw Ce()
        }
        Yu += u,
        Zu = "identifierName"
    },
    identifierName() {
        switch (ue) {
        case "$":
        case "_":
        case "‌":
        case "‍":
            return void (Yu += De());
        case "\\":
            return De(),
            void (Zu = "identifierNameEscape")
        }
        if (!Vu.isIdContinueChar(ue))
            return re("identifier", Yu);
        Yu += De()
    },
    identifierNameEscape() {
        if ("u" !== ue)
            throw ce(De());
        De();
        const u = ae();
        switch (u) {
        case "$":
        case "_":
        case "‌":
        case "‍":
            break;
        default:
            if (!Vu.isIdContinueChar(u))
                throw Ce()
        }
        Yu += u,
        Zu = "identifierName"
    },
    sign() {
        switch (ue) {
        case ".":
            return Yu = De(),
            void (Zu = "decimalPointLeading");
        case "0":
            return Yu = De(),
            void (Zu = "zero");
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            return Yu = De(),
            void (Zu = "decimalInteger");
        case "I":
            return De(),
            oe("nfinity"),
            re("numeric", Qu * (1 / 0));
        case "N":
            return De(),
            oe("aN"),
            re("numeric", NaN)
        }
        throw ce(De())
    },
    zero() {
        switch (ue) {
        case ".":
            return Yu += De(),
            void (Zu = "decimalPoint");
        case "e":
        case "E":
            return Yu += De(),
            void (Zu = "decimalExponent");
        case "x":
        case "X":
            return Yu += De(),
            void (Zu = "hexadecimal")
        }
        return re("numeric", 0 * Qu)
    },
    decimalInteger() {
        switch (ue) {
        case ".":
            return Yu += De(),
            void (Zu = "decimalPoint");
        case "e":
        case "E":
            return Yu += De(),
            void (Zu = "decimalExponent")
        }
        if (!Vu.isDigit(ue))
            return re("numeric", Qu * Number(Yu));
        Yu += De()
    },
    decimalPointLeading() {
        if (Vu.isDigit(ue))
            return Yu += De(),
            void (Zu = "decimalFraction");
        throw ce(De())
    },
    decimalPoint() {
        switch (ue) {
        case "e":
        case "E":
            return Yu += De(),
            void (Zu = "decimalExponent")
        }
        return Vu.isDigit(ue) ? (Yu += De(),
        void (Zu = "decimalFraction")) : re("numeric", Qu * Number(Yu))
    },
    decimalFraction() {
        switch (ue) {
        case "e":
        case "E":
            return Yu += De(),
            void (Zu = "decimalExponent")
        }
        if (!Vu.isDigit(ue))
            return re("numeric", Qu * Number(Yu));
        Yu += De()
    },
    decimalExponent() {
        switch (ue) {
        case "+":
        case "-":
            return Yu += De(),
            void (Zu = "decimalExponentSign")
        }
        if (Vu.isDigit(ue))
            return Yu += De(),
            void (Zu = "decimalExponentInteger");
        throw ce(De())
    },
    decimalExponentSign() {
        if (Vu.isDigit(ue))
            return Yu += De(),
            void (Zu = "decimalExponentInteger");
        throw ce(De())
    },
    decimalExponentInteger() {
        if (!Vu.isDigit(ue))
            return re("numeric", Qu * Number(Yu));
        Yu += De()
    },
    hexadecimal() {
        if (Vu.isHexDigit(ue))
            return Yu += De(),
            void (Zu = "hexadecimalInteger");
        throw ce(De())
    },
    hexadecimalInteger() {
        if (!Vu.isHexDigit(ue))
            return re("numeric", Qu * Number(Yu));
        Yu += De()
    },
    string() {
        switch (ue) {
        case "\\":
            return De(),
            void (Yu += function() {
                switch (te()) {
                case "b":
                    return De(),
                    "\b";
                case "f":
                    return De(),
                    "\f";
                case "n":
                    return De(),
                    "\n";
                case "r":
                    return De(),
                    "\r";
                case "t":
                    return De(),
                    "\t";
                case "v":
                    return De(),
                    "\v";
                case "0":
                    if (De(),
                    Vu.isDigit(te()))
                        throw ce(De());
                    return "\0";
                case "x":
                    return De(),
                    function() {
                        let u = ""
                          , e = te();
                        if (!Vu.isHexDigit(e))
                            throw ce(De());
                        if (u += De(),
                        e = te(),
                        !Vu.isHexDigit(e))
                            throw ce(De());
                        return u += De(),
                        String.fromCodePoint(parseInt(u, 16))
                    }();
                case "u":
                    return De(),
                    ae();
                case "\n":
                case "\u2028":
                case "\u2029":
                    return De(),
                    "";
                case "\r":
                    return De(),
                    "\n" === te() && De(),
                    "";
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case void 0:
                    throw ce(De())
                }
                return De()
            }());
        case '"':
            return Gu ? (De(),
            re("string", Yu)) : void (Yu += De());
        case "'":
            return Gu ? void (Yu += De()) : (De(),
            re("string", Yu));
        case "\n":
        case "\r":
            throw ce(De());
        case "\u2028":
        case "\u2029":
            u = ue,
            console.warn(`JSON5: '${Ae(u)}' in strings is not valid ECMAScript; consider escaping`);
            break;
        case void 0:
            throw ce(De())
        }
        var u;
        Yu += De()
    },
    start() {
        switch (ue) {
        case "{":
        case "[":
            return re("punctuator", De())
        }
        Zu = "value"
    },
    beforePropertyName() {
        switch (ue) {
        case "$":
        case "_":
            return Yu = De(),
            void (Zu = "identifierName");
        case "\\":
            return De(),
            void (Zu = "identifierNameStartEscape");
        case "}":
            return re("punctuator", De());
        case '"':
        case "'":
            return Gu = '"' === De(),
            void (Zu = "string")
        }
        if (Vu.isIdStartChar(ue))
            return Yu += De(),
            void (Zu = "identifierName");
        throw ce(De())
    },
    afterPropertyName() {
        if (":" === ue)
            return re("punctuator", De());
        throw ce(De())
    },
    beforePropertyValue() {
        Zu = "value"
    },
    afterPropertyValue() {
        switch (ue) {
        case ",":
        case "}":
            return re("punctuator", De())
        }
        throw ce(De())
    },
    beforeArrayValue() {
        if ("]" === ue)
            return re("punctuator", De());
        Zu = "value"
    },
    afterArrayValue() {
        switch (ue) {
        case ",":
        case "]":
            return re("punctuator", De())
        }
        throw ce(De())
    },
    end() {
        throw ce(De())
    }
};
function re(u, e) {
    return {
        type: u,
        value: e,
        line: Mu,
        column: qu
    }
}
function oe(u) {
    for (const e of u) {
        if (te() !== e)
            throw ce(De());
        De()
    }
}
function ae() {
    let u = ""
      , e = 4;
    for (; e-- > 0; ) {
        const e = te();
        if (!Vu.isHexDigit(e))
            throw ce(De());
        u += De()
    }
    return String.fromCodePoint(parseInt(u, 16))
}
const ie = {
    start() {
        if ("eof" === Ku.type)
            throw Fe();
        se()
    },
    beforePropertyName() {
        switch (Ku.type) {
        case "identifier":
        case "string":
            return Uu = Ku.value,
            void (Ju = "afterPropertyName");
        case "punctuator":
            return void le();
        case "eof":
            throw Fe()
        }
    },
    afterPropertyName() {
        if ("eof" === Ku.type)
            throw Fe();
        Ju = "beforePropertyValue"
    },
    beforePropertyValue() {
        if ("eof" === Ku.type)
            throw Fe();
        se()
    },
    beforeArrayValue() {
        if ("eof" === Ku.type)
            throw Fe();
        "punctuator" !== Ku.type || "]" !== Ku.value ? se() : le()
    },
    afterPropertyValue() {
        if ("eof" === Ku.type)
            throw Fe();
        switch (Ku.value) {
        case ",":
            return void (Ju = "beforePropertyName");
        case "}":
            le()
        }
    },
    afterArrayValue() {
        if ("eof" === Ku.type)
            throw Fe();
        switch (Ku.value) {
        case ",":
            return void (Ju = "beforeArrayValue");
        case "]":
            le()
        }
    },
    end() {}
};
function se() {
    let u;
    switch (Ku.type) {
    case "punctuator":
        switch (Ku.value) {
        case "{":
            u = {};
            break;
        case "[":
            u = []
        }
        break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
        u = Ku.value
    }
    if (void 0 === Wu)
        Wu = u;
    else {
        const e = zu[zu.length - 1];
        Array.isArray(e) ? e.push(u) : Object.defineProperty(e, Uu, {
            value: u,
            writable: !0,
            enumerable: !0,
            configurable: !0
        })
    }
    if (null !== u && "object" == typeof u)
        zu.push(u),
        Ju = Array.isArray(u) ? "beforeArrayValue" : "beforePropertyName";
    else {
        const u = zu[zu.length - 1];
        Ju = null == u ? "end" : Array.isArray(u) ? "afterArrayValue" : "afterPropertyValue"
    }
}
function le() {
    zu.pop();
    const u = zu[zu.length - 1];
    Ju = null == u ? "end" : Array.isArray(u) ? "afterArrayValue" : "afterPropertyValue"
}
function ce(u) {
    return Ee(void 0 === u ? `JSON5: invalid end of input at ${Mu}:${qu}` : `JSON5: invalid character '${Ae(u)}' at ${Mu}:${qu}`)
}
function Fe() {
    return Ee(`JSON5: invalid end of input at ${Mu}:${qu}`)
}
function Ce() {
    return qu -= 5,
    Ee(`JSON5: invalid identifier character at ${Mu}:${qu}`)
}
function Ae(u) {
    const e = {
        "'": "\\'",
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\v": "\\v",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };
    if (e[u])
        return e[u];
    if (u < " ") {
        const e = u.charCodeAt(0).toString(16);
        return "\\x" + ("00" + e).substring(e.length)
    }
    return u
}
function Ee(u) {
    const e = new SyntaxError(u);
    return e.lineNumber = Mu,
    e.columnNumber = qu,
    e
}
var fe = {
    parse: function(u, e) {
        Ru = String(u),
        Ju = "start",
        zu = [],
        Hu = 0,
        Mu = 1,
        qu = 0,
        Ku = void 0,
        Uu = void 0,
        Wu = void 0;
        do {
            Ku = ee(),
            ie[Ju]()
        } while ("eof" !== Ku.type);
        return "function" == typeof e ? Xu({
            "": Wu
        }, "", e) : Wu
    },
    stringify: function(u, e, t) {
        const D = [];
        let n, r, o, a = "", i = "";
        if (null == e || "object" != typeof e || Array.isArray(e) || (t = e.space,
        o = e.quote,
        e = e.replacer),
        "function" == typeof e)
            r = e;
        else if (Array.isArray(e)) {
            n = [];
            for (const u of e) {
                let e;
                "string" == typeof u ? e = u : ("number" == typeof u || u instanceof String || u instanceof Number) && (e = String(u)),
                void 0 !== e && n.indexOf(e) < 0 && n.push(e)
            }
        }
        return t instanceof Number ? t = Number(t) : t instanceof String && (t = String(t)),
        "number" == typeof t ? t > 0 && (t = Math.min(10, Math.floor(t)),
        i = "          ".substr(0, t)) : "string" == typeof t && (i = t.substr(0, 10)),
        s("", {
            "": u
        });
        function s(u, e) {
            let t = e[u];
            switch (null != t && ("function" == typeof t.toJSON5 ? t = t.toJSON5(u) : "function" == typeof t.toJSON && (t = t.toJSON(u))),
            r && (t = r.call(e, u, t)),
            t instanceof Number ? t = Number(t) : t instanceof String ? t = String(t) : t instanceof Boolean && (t = t.valueOf()),
            t) {
            case null:
                return "null";
            case !0:
                return "true";
            case !1:
                return "false"
            }
            return "string" == typeof t ? l(t) : "number" == typeof t ? String(t) : "object" == typeof t ? Array.isArray(t) ? function(u) {
                if (D.indexOf(u) >= 0)
                    throw TypeError("Converting circular structure to JSON5");
                D.push(u);
                let e = a;
                a += i;
                let t, n = [];
                for (let D = 0; D < u.length; D++) {
                    const e = s(String(D), u);
                    n.push(void 0 !== e ? e : "null")
                }
                if (0 === n.length)
                    t = "[]";
                else if ("" === i) {
                    t = "[" + n.join(",") + "]"
                } else {
                    let u = ",\n" + a
                      , D = n.join(u);
                    t = "[\n" + a + D + ",\n" + e + "]"
                }
                return D.pop(),
                a = e,
                t
            }(t) : function(u) {
                if (D.indexOf(u) >= 0)
                    throw TypeError("Converting circular structure to JSON5");
                D.push(u);
                let e = a;
                a += i;
                let t, r = n || Object.keys(u), o = [];
                for (const D of r) {
                    const e = s(D, u);
                    if (void 0 !== e) {
                        let u = c(D) + ":";
                        "" !== i && (u += " "),
                        u += e,
                        o.push(u)
                    }
                }
                if (0 === o.length)
                    t = "{}";
                else {
                    let u;
                    if ("" === i)
                        u = o.join(","),
                        t = "{" + u + "}";
                    else {
                        let D = ",\n" + a;
                        u = o.join(D),
                        t = "{\n" + a + u + ",\n" + e + "}"
                    }
                }
                return D.pop(),
                a = e,
                t
            }(t) : void 0
        }
        function l(u) {
            const e = {
                "'": .1,
                '"': .2
            }
              , t = {
                "'": "\\'",
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\v": "\\v",
                "\0": "\\0",
                "\u2028": "\\u2028",
                "\u2029": "\\u2029"
            };
            let D = "";
            for (let r = 0; r < u.length; r++) {
                const n = u[r];
                switch (n) {
                case "'":
                case '"':
                    e[n]++,
                    D += n;
                    continue;
                case "\0":
                    if (Vu.isDigit(u[r + 1])) {
                        D += "\\x00";
                        continue
                    }
                }
                if (t[n])
                    D += t[n];
                else if (n < " ") {
                    let u = n.charCodeAt(0).toString(16);
                    D += "\\x" + ("00" + u).substring(u.length)
                } else
                    D += n
            }
            const n = o || Object.keys(e).reduce(((u,t)=>e[u] < e[t] ? u : t));
            return D = D.replace(new RegExp(n,"g"), t[n]),
            n + D + n
        }
        function c(u) {
            if (0 === u.length)
                return l(u);
            const e = String.fromCodePoint(u.codePointAt(0));
            if (!Vu.isIdStartChar(e))
                return l(u);
            for (let t = e.length; t < u.length; t++)
                if (!Vu.isIdContinueChar(String.fromCodePoint(u.codePointAt(t))))
                    return l(u);
            return u
        }
    }
};
const de = {
    class: "container",
    "element-loading-text": "下载中，莫着急..."
}
  , pe = (u=>(Fu("data-v-17a901dd"),
u = u(),
Cu(),
u))((()=>T("h1", {
    class: "title"
}, "TVBOX接口解密", -1)))
  , Be = {
    class: "row"
}
  , ve = {
    class: "name"
}
  , me = {
    class: "addr"
}
  , ge = {
    class: "row"
}
  , ye = {
    class: "row btn-row",
    style: {
        "text-align": "center"
    }
}
  , be = su({
    __name: "ua",
    setup(u) {
        const e = I("")
          , t = I("")
          , D = I("")
          , n = I(!1)
          , r = I(!1)
          , o = I(JSON.parse(localStorage.getItem("urls")));
        lu().currentRoute.value.path;
        const a = (u,e)=>{
            e(u ? o.value.filter(i(u)) : o.value)
        }
          , i = u=>e=>0 === e.url.toLowerCase().indexOf(u.toLowerCase())
          , s = async u=>{
            e.value = u.url,
            t.value = u.name,
            D.value = ""
        }
          , l = ()=>{
            t.value = ""
        }
          , c = async()=>{
            D.value = "";
            const u = e.value;
            if (u) {
                n.value = !0;
                try {
                    let e = (await du({
                        url: u
                    })).data;
                    t = e,
                    "[object Object]" === Object.prototype.toString.call(t) && (e = JSON.stringify(e, null, 2));
                    try {
                        e = fe.parse(e),
                        e = JSON.stringify(e, null, 2)
                    } catch (r) {
                        console.error(`JSON5 解析失败：${r}`)
                    }
                    D.value = e
                } catch (r) {
                    pu.error("解密失败，请检查线路"),
                    window.open(`http://lige.unaux.com?url=${encodeURIComponent(u)}`)
                } finally {
                    n.value = !1
                }
                var t
            } else
                pu("请先选择线路再解密")
        }
          , F = async u=>{
            let e = new Tu(u);
            e.on("success", (u=>{
                pu("复制成功"),
                u.clearSelection(),
                e.destroy()
            }
            ))
        }
        ;
        return $((()=>{
            (async()=>{
                try {
                    let {data: u} = await fu();
                    u = u.filter((u=>!u.url.includes("yydsys.top/duo/ali"))),
                    o.value = u,
                    localStorage.setItem("urls", JSON.stringify(u))
                } catch (u) {
                    console.error(u)
                }
            }
            )()
        }
        )),
        (u,t)=>{
            const o = h
              , i = wu
              , C = A
              , E = cu("router-link")
              , f = _u;
            return Du((P(),
            z("div", de, [pe, T("div", Be, [J(i, {
                size: "large",
                modelValue: e.value,
                "onUpdate:modelValue": t[2] || (t[2] = u=>e.value = u),
                "fetch-suggestions": a,
                placeholder: "可下拉选择",
                onSelect: s,
                onInput: l,
                clearable: ""
            }, {
                default: L((({item: u})=>[T("span", ve, U(u.name) + ":", 1), T("span", me, U(u.url), 1)])),
                append: L((()=>[J(o, {
                    plain: "",
                    class: "btn_oper",
                    id: "copyJoggle",
                    "data-clipboard-text": e.value,
                    onClick: t[0] || (t[0] = u=>F("#copyJoggle"))
                }, {
                    default: L((()=>[K(" 复制接口 ")])),
                    _: 1
                }, 8, ["data-clipboard-text"]), J(o, {
                    class: "btn_oper",
                    plain: "",
                    onClick: t[1] || (t[1] = u=>c()),
                    disabled: n.value
                }, {
                    default: L((()=>[K(" 一键解密 ")])),
                    _: 1
                }, 8, ["disabled"])])),
                _: 1
            }, 8, ["modelValue"])]), Du((P(),
            z("div", ge, [J(C, {
                type: "textarea",
                autosize: {
                    minRows: 20,
                    maxRows: 20
                },
                modelValue: D.value,
                "onUpdate:modelValue": t[3] || (t[3] = u=>D.value = u),
                readonly: ""
            }, null, 8, ["modelValue"])])), [[f, n.value]]), T("div", ye, [J(o, {
                size: "large",
                type: "primary",
                id: "copyResult",
                "data-clipboard-text": D.value,
                onClick: t[4] || (t[4] = u=>F("#copyResult"))
            }, {
                default: L((()=>[K(" 复制内容 ")])),
                _: 1
            }, 8, ["data-clipboard-text"]), J(o, {
                size: "large",
                type: "success",
                onClick: t[5] || (t[5] = u=>(async()=>{
                    const u = e.value;
                    u ? window.open(`https://api.lige.chat/downloadJar?url=${encodeURIComponent(u)}`) : pu("请先选择线路再下载")
                }
                )())
            }, {
                default: L((()=>[K("下载Jar")])),
                _: 1
            }), J(o, {
                size: "large",
                type: "warning"
            }, {
                default: L((()=>[K("主页 "), J(E, {
                    to: "/",
                    class: "back"
                })])),
                _: 1
            })])])), [[f, r.value]])
        }
    }
}, [["__scopeId", "data-v-17a901dd"]]);
export {be as default};
