import {M as e, q as s, aE as t, u as a, aQ as n, I as o, bx as l, bz as r, v as u, ao as d, bc as i, aq as p, b3 as c, bp as f, g as m, aZ as y, aM as g, ax as v, bs as b, s as x, t as C, aT as h, F as S, bC as T, bF as B, ai as N, bE as _, aO as w} from "./index-f4b1b3ff.js";
import {b as M, d as k, u as I, e as $, K as E, _ as L, w as z, x as H, q as A, X as D, V as O, ay as Z, O as j, a7 as q, E as F, az as U, aA as R, Q, av as K, aB as V} from "./el-input-22ab3590.js";
const X = {}
  , G = M({
    value: {
        type: [String, Number],
        default: ""
    },
    max: {
        type: Number,
        default: 99
    },
    isDot: Boolean,
    hidden: Boolean,
    type: {
        type: String,
        values: ["primary", "success", "warning", "info", "danger"],
        default: "danger"
    },
    showZero: {
        type: Boolean,
        default: !0
    },
    color: String,
    dotStyle: {
        type: k([String, Object, Array])
    },
    offset: {
        type: k(Array),
        default: [0, 0]
    },
    dotClass: {
        type: String
    }
})
  , J = ["textContent"]
  , P = e({
    name: "ElBadge"
});
const W = z(L(e({
    ...P,
    props: G,
    setup(e, {expose: y}) {
        const g = e
          , v = I("badge")
          , b = s((()=>g.isDot ? "" : $(g.value) && $(g.max) ? g.max < g.value ? `${g.max}+` : 0 !== g.value || g.showZero ? `${g.value}` : "" : `${g.value}`))
          , x = s((()=>{
            var e, s, t, a, n;
            return [{
                backgroundColor: g.color,
                marginRight: E(-(null != (s = null == (e = g.offset) ? void 0 : e[0]) ? s : 0)),
                marginTop: E(null != (a = null == (t = g.offset) ? void 0 : t[1]) ? a : 0)
            }, null != (n = g.dotStyle) ? n : {}]
        }
        ));
        return y({
            content: b
        }),
        (e,s)=>(t(),
        a("div", {
            class: d(i(v).b())
        }, [n(e.$slots, "default"), o(m, {
            name: `${i(v).namespace.value}-zoom-in-center`,
            persisted: ""
        }, {
            default: l((()=>[r(u("sup", {
                class: d([i(v).e("content"), i(v).em("content", e.type), i(v).is("fixed", !!e.$slots.default), i(v).is("dot", e.isDot), e.dotClass]),
                style: p(i(x)),
                textContent: c(i(b))
            }, null, 14, J), [[f, !e.hidden && (i(b) || e.isDot)]])])),
            _: 1
        }, 8, ["name"])], 2))
    }
}), [["__file", "badge.vue"]]))
  , Y = ["success", "info", "warning", "error"]
  , ee = A({
    customClass: "",
    center: !1,
    dangerouslyUseHTMLString: !1,
    duration: 3e3,
    icon: void 0,
    id: "",
    message: "",
    onClose: void 0,
    showClose: !1,
    type: "info",
    plain: !1,
    offset: 16,
    zIndex: 0,
    grouping: !1,
    repeatNum: 1,
    appendTo: D ? document.body : void 0
})
  , se = M({
    customClass: {
        type: String,
        default: ee.customClass
    },
    center: {
        type: Boolean,
        default: ee.center
    },
    dangerouslyUseHTMLString: {
        type: Boolean,
        default: ee.dangerouslyUseHTMLString
    },
    duration: {
        type: Number,
        default: ee.duration
    },
    icon: {
        type: H,
        default: ee.icon
    },
    id: {
        type: String,
        default: ee.id
    },
    message: {
        type: k([String, Object, Function]),
        default: ee.message
    },
    onClose: {
        type: k(Function),
        default: ee.onClose
    },
    showClose: {
        type: Boolean,
        default: ee.showClose
    },
    type: {
        type: String,
        values: Y,
        default: ee.type
    },
    plain: {
        type: Boolean,
        default: ee.plain
    },
    offset: {
        type: Number,
        default: ee.offset
    },
    zIndex: {
        type: Number,
        default: ee.zIndex
    },
    grouping: {
        type: Boolean,
        default: ee.grouping
    },
    repeatNum: {
        type: Number,
        default: ee.repeatNum
    }
})
  , te = y([])
  , ae = e=>{
    const {prev: s} = (e=>{
        const s = te.findIndex((s=>s.id === e))
          , t = te[s];
        let a;
        return s > 0 && (a = te[s - 1]),
        {
            current: t,
            prev: a
        }
    }
    )(e);
    return s ? s.vm.exposed.bottom.value : 0
}
  , ne = ["id"]
  , oe = ["innerHTML"]
  , le = e({
    name: "ElMessage"
});
var re = L(e({
    ...le,
    props: se,
    emits: {
        destroy: ()=>!0
    },
    setup(e, {expose: y}) {
        const B = e
          , {Close: N} = U
          , {ns: _, zIndex: w} = O("message")
          , {currentZIndex: M, nextZIndex: k} = w
          , I = g()
          , $ = g(!1)
          , E = g(0);
        let L;
        const z = s((()=>B.type ? "error" === B.type ? "danger" : B.type : "info"))
          , H = s((()=>{
            const e = B.type;
            return {
                [_.bm("icon", e)]: e && Z[e]
            }
        }
        ))
          , A = s((()=>B.icon || Z[B.type] || ""))
          , D = s((()=>ae(B.id)))
          , K = s((()=>((e,s)=>te.findIndex((s=>s.id === e)) > 0 ? 16 : s)(B.id, B.offset) + D.value))
          , V = s((()=>E.value + K.value))
          , X = s((()=>({
            top: `${K.value}px`,
            zIndex: M.value
        })));
        function G() {
            0 !== B.duration && ({stop: L} = R((()=>{
                P()
            }
            ), B.duration))
        }
        function J() {
            null == L || L()
        }
        function P() {
            $.value = !1
        }
        return v((()=>{
            G(),
            k(),
            $.value = !0
        }
        )),
        b((()=>B.repeatNum), (()=>{
            J(),
            G()
        }
        )),
        j(document, "keydown", (function({code: e}) {
            e === Q.esc && P()
        }
        )),
        q(I, (()=>{
            E.value = I.value.getBoundingClientRect().height
        }
        )),
        y({
            visible: $,
            bottom: V,
            close: P
        }),
        (e,s)=>(t(),
        x(m, {
            name: i(_).b("fade"),
            onBeforeLeave: e.onClose,
            onAfterLeave: s[0] || (s[0] = s=>e.$emit("destroy")),
            persisted: ""
        }, {
            default: l((()=>[r(u("div", {
                id: e.id,
                ref_key: "messageRef",
                ref: I,
                class: d([i(_).b(), {
                    [i(_).m(e.type)]: e.type
                }, i(_).is("center", e.center), i(_).is("closable", e.showClose), i(_).is("plain", e.plain), e.customClass]),
                style: p(i(X)),
                role: "alert",
                onMouseenter: J,
                onMouseleave: G
            }, [e.repeatNum > 1 ? (t(),
            x(i(W), {
                key: 0,
                value: e.repeatNum,
                type: i(z),
                class: d(i(_).e("badge"))
            }, null, 8, ["value", "type", "class"])) : C("v-if", !0), i(A) ? (t(),
            x(i(F), {
                key: 1,
                class: d([i(_).e("icon"), i(H)])
            }, {
                default: l((()=>[(t(),
                x(h(i(A))))])),
                _: 1
            }, 8, ["class"])) : C("v-if", !0), n(e.$slots, "default", {}, (()=>[e.dangerouslyUseHTMLString ? (t(),
            a(S, {
                key: 1
            }, [C(" Caution here, message could've been compromised, never use user's input as message "), u("p", {
                class: d(i(_).e("content")),
                innerHTML: e.message
            }, null, 10, oe)], 2112)) : (t(),
            a("p", {
                key: 0,
                class: d(i(_).e("content"))
            }, c(e.message), 3))])), e.showClose ? (t(),
            x(i(F), {
                key: 2,
                class: d(i(_).e("closeBtn")),
                onClick: T(P, ["stop"])
            }, {
                default: l((()=>[o(i(N))])),
                _: 1
            }, 8, ["class", "onClick"])) : C("v-if", !0)], 46, ne), [[f, $.value]])])),
            _: 3
        }, 8, ["name", "onBeforeLeave"]))
    }
}), [["__file", "message.vue"]]);
let ue = 1;
const de = e=>{
    const s = !e || B(e) || N(e) || _(e) ? {
        message: e
    } : e
      , t = {
        ...ee,
        ...s
    };
    if (t.appendTo) {
        if (B(t.appendTo)) {
            let e = document.querySelector(t.appendTo);
            K(e) || (e = document.body),
            t.appendTo = e
        }
    } else
        t.appendTo = document.body;
    return t
}
  , ie = ({appendTo: e, ...s},t)=>{
    const a = "message_" + ue++
      , n = s.onClose
      , l = document.createElement("div")
      , r = {
        ...s,
        id: a,
        onClose: ()=>{
            null == n || n(),
            (e=>{
                const s = te.indexOf(e);
                if (-1 === s)
                    return;
                te.splice(s, 1);
                const {handler: t} = e;
                t.close()
            }
            )(p)
        }
        ,
        onDestroy: ()=>{
            w(null, l)
        }
    }
      , u = o(re, r, _(r.message) || N(r.message) ? {
        default: _(r.message) ? r.message : ()=>r.message
    } : null);
    u.appContext = t || pe._context,
    w(u, l),
    e.appendChild(l.firstElementChild);
    const d = u.component
      , i = {
        close: ()=>{
            d.exposed.visible.value = !1
        }
    }
      , p = {
        id: a,
        vnode: u,
        vm: d,
        handler: i,
        props: u.component.props
    };
    return p
}
  , pe = (e={},s)=>{
    if (!D)
        return {
            close: ()=>{}
        };
    if ($(X.max) && te.length >= X.max)
        return {
            close: ()=>{}
        };
    const t = de(e);
    if (t.grouping && te.length) {
        const e = te.find((({vnode: e})=>{
            var s;
            return (null == (s = e.props) ? void 0 : s.message) === t.message
        }
        ));
        if (e)
            return e.props.repeatNum += 1,
            e.props.type = t.type,
            e.handler
    }
    const a = ie(t, s);
    return te.push(a),
    a.handler
}
;
Y.forEach((e=>{
    pe[e] = (s={},t)=>{
        const a = de(s);
        return pe({
            ...a,
            type: e
        }, t)
    }
}
)),
pe.closeAll = function(e) {
    for (const s of te)
        e && e !== s.props.type || s.handler.close()
}
,
pe._context = null;
const ce = V(pe, "$message");
export {ce as E};
