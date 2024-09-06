/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var Jb = Object.create;
    var sn = Object.defineProperty;
    var e_ = Object.getOwnPropertyDescriptor;
    var t_ = Object.getOwnPropertyNames;
    var r_ = Object.getPrototypeOf,
        n_ = Object.prototype.hasOwnProperty;
    var ye = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        ke = (e, t) => {
            for (var r in t) sn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ps = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of t_(t)) !n_.call(e, i) && i !== r && sn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = e_(t, i)) || n.enumerable
                });
            return e
        };
    var fe = (e, t, r) => (r = e != null ? Jb(r_(e)) : {}, Ps(t || !e || !e.__esModule ? sn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        nt = e => Ps(sn({}, "__esModule", {
            value: !0
        }), e);
    var qs = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = u.getPropertyValue("position"),
                        m = u.getPropertyValue("overflow"),
                        p = u.getPropertyValue("display");
                    (!l || l === "static") && (a.style.position = "relative"), m !== "hidden" && (a.style.overflow = "hidden"), (!p || p === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let m in l) u.getPropertyValue(m) !== l[m] && (a.style[m] = l[m])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let l = a[u].nodeName.toLowerCase();
                        if (l === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Fs = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Pi = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, T) {
                var x = new b.Bare;
                return x.init(f, T)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(f) {
                var T = parseInt(f.slice(1), 16),
                    x = T >> 16 & 255,
                    R = T >> 8 & 255,
                    A = 255 & T;
                return [x, R, A]
            }

            function i(f, T, x) {
                return "#" + (1 << 24 | f << 16 | T << 8 | x).toString(16).slice(1)
            }

            function o() {}

            function s(f, T) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T)
            }

            function a(f, T, x) {
                l("Units do not match [" + f + "]: " + T + ", " + x)
            }

            function u(f, T, x) {
                if (T !== void 0 && (x = T), f === void 0) return x;
                var R = x;
                return Me.test(f) || !Xe.test(f) ? R = parseInt(f, 10) : Xe.test(f) && (R = 1e3 * parseFloat(f)), 0 > R && (R = 0), R === R ? R : x
            }

            function l(f) {
                ae.debug && window && window.console.warn(f)
            }

            function m(f) {
                for (var T = -1, x = f ? f.length : 0, R = []; ++T < x;) {
                    var A = f[T];
                    A && R.push(A)
                }
                return R
            }
            var p = function(f, T, x) {
                    function R(oe) {
                        return typeof oe == "object"
                    }

                    function A(oe) {
                        return typeof oe == "function"
                    }

                    function P() {}

                    function te(oe, he) {
                        function z() {
                            var Le = new se;
                            return A(Le.init) && Le.init.apply(Le, arguments), Le
                        }

                        function se() {}
                        he === x && (he = oe, oe = Object), z.Bare = se;
                        var ue, Te = P[f] = oe[f],
                            rt = se[f] = z[f] = new P;
                        return rt.constructor = z, z.mixin = function(Le) {
                            return se[f] = z[f] = te(z, Le)[f], z
                        }, z.open = function(Le) {
                            if (ue = {}, A(Le) ? ue = Le.call(z, rt, Te, z, oe) : R(Le) && (ue = Le), R(ue))
                                for (var br in ue) T.call(ue, br) && (rt[br] = ue[br]);
                            return A(rt.init) || (rt.init = oe), z
                        }, z.open(he)
                    }
                    return te
                }("prototype", {}.hasOwnProperty),
                h = {
                    ease: ["ease", function(f, T, x, R) {
                        var A = (f /= R) * f,
                            P = A * f;
                        return T + x * (-2.75 * P * A + 11 * A * A + -15.5 * P + 8 * A + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, T, x, R) {
                        var A = (f /= R) * f,
                            P = A * f;
                        return T + x * (-1 * P * A + 3 * A * A + -3 * P + 2 * A)
                    }],
                    "ease-out": ["ease-out", function(f, T, x, R) {
                        var A = (f /= R) * f,
                            P = A * f;
                        return T + x * (.3 * P * A + -1.6 * A * A + 2.2 * P + -1.8 * A + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, T, x, R) {
                        var A = (f /= R) * f,
                            P = A * f;
                        return T + x * (2 * P * A + -5 * A * A + 2 * P + 2 * A)
                    }],
                    linear: ["linear", function(f, T, x, R) {
                        return x * f / R + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, T, x, R) {
                        return x * (f /= R) * f + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, T, x, R) {
                        return -x * (f /= R) * (f - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, T, x, R) {
                        return (f /= R / 2) < 1 ? x / 2 * f * f + T : -x / 2 * (--f * (f - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, T, x, R) {
                        return x * (f /= R) * f * f + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, T, x, R) {
                        return x * ((f = f / R - 1) * f * f + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, T, x, R) {
                        return (f /= R / 2) < 1 ? x / 2 * f * f * f + T : x / 2 * ((f -= 2) * f * f + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, T, x, R) {
                        return x * (f /= R) * f * f * f + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, T, x, R) {
                        return -x * ((f = f / R - 1) * f * f * f - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, T, x, R) {
                        return (f /= R / 2) < 1 ? x / 2 * f * f * f * f + T : -x / 2 * ((f -= 2) * f * f * f - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, T, x, R) {
                        return x * (f /= R) * f * f * f * f + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, T, x, R) {
                        return x * ((f = f / R - 1) * f * f * f * f + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, T, x, R) {
                        return (f /= R / 2) < 1 ? x / 2 * f * f * f * f * f + T : x / 2 * ((f -= 2) * f * f * f * f + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, T, x, R) {
                        return -x * Math.cos(f / R * (Math.PI / 2)) + x + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, T, x, R) {
                        return x * Math.sin(f / R * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, T, x, R) {
                        return -x / 2 * (Math.cos(Math.PI * f / R) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, T, x, R) {
                        return f === 0 ? T : x * Math.pow(2, 10 * (f / R - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, T, x, R) {
                        return f === R ? T + x : x * (-Math.pow(2, -10 * f / R) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, T, x, R) {
                        return f === 0 ? T : f === R ? T + x : (f /= R / 2) < 1 ? x / 2 * Math.pow(2, 10 * (f - 1)) + T : x / 2 * (-Math.pow(2, -10 * --f) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, T, x, R) {
                        return -x * (Math.sqrt(1 - (f /= R) * f) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, T, x, R) {
                        return x * Math.sqrt(1 - (f = f / R - 1) * f) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, T, x, R) {
                        return (f /= R / 2) < 1 ? -x / 2 * (Math.sqrt(1 - f * f) - 1) + T : x / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, T, x, R, A) {
                        return A === void 0 && (A = 1.70158), x * (f /= R) * f * ((A + 1) * f - A) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, T, x, R, A) {
                        return A === void 0 && (A = 1.70158), x * ((f = f / R - 1) * f * ((A + 1) * f + A) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, T, x, R, A) {
                        return A === void 0 && (A = 1.70158), (f /= R / 2) < 1 ? x / 2 * f * f * (((A *= 1.525) + 1) * f - A) + T : x / 2 * ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) + T
                    }]
                },
                E = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                w = document,
                I = window,
                S = "bkwld-tram",
                O = /[\-\.0-9]/g,
                q = /[A-Z]/,
                C = "number",
                M = /^(rgb|#)/,
                D = /(em|cm|mm|in|pt|pc|px)$/,
                F = /(em|cm|mm|in|pt|pc|px|%)$/,
                X = /(deg|rad|turn)$/,
                K = "unitless",
                Y = /(all|none) 0s ease 0s/,
                re = /^(width|height)$/,
                U = " ",
                L = w.createElement("a"),
                y = ["Webkit", "Moz", "O", "ms"],
                N = ["-webkit-", "-moz-", "-o-", "-ms-"],
                k = function(f) {
                    if (f in L.style) return {
                        dom: f,
                        css: f
                    };
                    var T, x, R = "",
                        A = f.split("-");
                    for (T = 0; T < A.length; T++) R += A[T].charAt(0).toUpperCase() + A[T].slice(1);
                    for (T = 0; T < y.length; T++)
                        if (x = y[T] + R, x in L.style) return {
                            dom: x,
                            css: N[T] + f
                        }
                },
                V = t.support = {
                    bind: Function.prototype.bind,
                    transform: k("transform"),
                    transition: k("transition"),
                    backface: k("backface-visibility"),
                    timing: k("transition-timing-function")
                };
            if (V.transition) {
                var J = V.timing.dom;
                if (L.style[J] = h["ease-in-back"][0], !L.style[J])
                    for (var ne in E) h[ne][0] = E[ne]
            }
            var G = t.frame = function() {
                    var f = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                    return f && V.bind ? f.bind(I) : function(T) {
                        I.setTimeout(T, 16)
                    }
                }(),
                W = t.now = function() {
                    var f = I.performance,
                        T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return T && V.bind ? T.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                d = p(function(f) {
                    function T(ie, le) {
                        var Ee = m(("" + ie).split(U)),
                            pe = Ee[0];
                        le = le || {};
                        var Ne = j[pe];
                        if (!Ne) return l("Unsupported property: " + pe);
                        if (!le.weak || !this.props[pe]) {
                            var ze = Ne[0],
                                De = this.props[pe];
                            return De || (De = this.props[pe] = new ze.Bare), De.init(this.$el, Ee, Ne, le), De
                        }
                    }

                    function x(ie, le, Ee) {
                        if (ie) {
                            var pe = typeof ie;
                            if (le || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && le) return this.timer = new ce({
                                duration: ie,
                                context: this,
                                complete: P
                            }), void(this.active = !0);
                            if (pe == "string" && le) {
                                switch (ie) {
                                    case "hide":
                                        z.call(this);
                                        break;
                                    case "stop":
                                        te.call(this);
                                        break;
                                    case "redraw":
                                        se.call(this);
                                        break;
                                    default:
                                        T.call(this, ie, Ee && Ee[1])
                                }
                                return P.call(this)
                            }
                            if (pe == "function") return void ie.call(this, this);
                            if (pe == "object") {
                                var Ne = 0;
                                rt.call(this, ie, function(Ie, Zb) {
                                    Ie.span > Ne && (Ne = Ie.span), Ie.stop(), Ie.animate(Zb)
                                }, function(Ie) {
                                    "wait" in Ie && (Ne = u(Ie.wait, 0))
                                }), Te.call(this), Ne > 0 && (this.timer = new ce({
                                    duration: Ne,
                                    context: this
                                }), this.active = !0, le && (this.timer.complete = P));
                                var ze = this,
                                    De = !1,
                                    an = {};
                                G(function() {
                                    rt.call(ze, ie, function(Ie) {
                                        Ie.active && (De = !0, an[Ie.name] = Ie.nextStyle)
                                    }), De && ze.$el.css(an)
                                })
                            }
                        }
                    }

                    function R(ie) {
                        ie = u(ie, 0), this.active ? this.queue.push({
                            options: ie
                        }) : (this.timer = new ce({
                            duration: ie,
                            context: this,
                            complete: P
                        }), this.active = !0)
                    }

                    function A(ie) {
                        return this.active ? (this.queue.push({
                            options: ie,
                            args: arguments
                        }), void(this.timer.complete = P)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function P() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ie = this.queue.shift();
                            x.call(this, ie.options, !0, ie.args)
                        }
                    }

                    function te(ie) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var le;
                        typeof ie == "string" ? (le = {}, le[ie] = 1) : le = typeof ie == "object" && ie != null ? ie : this.props, rt.call(this, le, Le), Te.call(this)
                    }

                    function oe(ie) {
                        te.call(this, ie), rt.call(this, ie, br, $b)
                    }

                    function he(ie) {
                        typeof ie != "string" && (ie = "block"), this.el.style.display = ie
                    }

                    function z() {
                        te.call(this), this.el.style.display = "none"
                    }

                    function se() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        te.call(this), e.removeData(this.el, S), this.$el = this.el = null
                    }

                    function Te() {
                        var ie, le, Ee = [];
                        this.upstream && Ee.push(this.upstream);
                        for (ie in this.props) le = this.props[ie], le.active && Ee.push(le.string);
                        Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[V.transition.dom] = Ee)
                    }

                    function rt(ie, le, Ee) {
                        var pe, Ne, ze, De, an = le !== Le,
                            Ie = {};
                        for (pe in ie) ze = ie[pe], pe in de ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = ze) : (q.test(pe) && (pe = r(pe)), pe in j ? Ie[pe] = ze : (De || (De = {}), De[pe] = ze));
                        for (pe in Ie) {
                            if (ze = Ie[pe], Ne = this.props[pe], !Ne) {
                                if (!an) continue;
                                Ne = T.call(this, pe)
                            }
                            le.call(this, Ne, ze)
                        }
                        Ee && De && Ee.call(this, De)
                    }

                    function Le(ie) {
                        ie.stop()
                    }

                    function br(ie, le) {
                        ie.set(le)
                    }

                    function $b(ie) {
                        this.$el.css(ie)
                    }

                    function je(ie, le) {
                        f[ie] = function() {
                            return this.children ? Qb.call(this, le, arguments) : (this.el && le.apply(this, arguments), this)
                        }
                    }

                    function Qb(ie, le) {
                        var Ee, pe = this.children.length;
                        for (Ee = 0; pe > Ee; Ee++) ie.apply(this.children[Ee], le);
                        return this
                    }
                    f.init = function(ie) {
                        if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ae.keepInherited && !ae.fallback) {
                            var le = B(this.el, "transition");
                            le && !Y.test(le) && (this.upstream = le)
                        }
                        V.backface && ae.hideBackface && g(this.el, V.backface.css, "hidden")
                    }, je("add", T), je("start", x), je("wait", R), je("then", A), je("next", P), je("stop", te), je("set", oe), je("show", he), je("hide", z), je("redraw", se), je("destroy", ue)
                }),
                b = p(d, function(f) {
                    function T(x, R) {
                        var A = e.data(x, S) || e.data(x, S, new d.Bare);
                        return A.el || A.init(x), R ? A.start(R) : A
                    }
                    f.init = function(x, R) {
                        var A = e(x);
                        if (!A.length) return this;
                        if (A.length === 1) return T(A[0], R);
                        var P = [];
                        return A.each(function(te, oe) {
                            P.push(T(oe, R))
                        }), this.children = P, this
                    }
                }),
                _ = p(function(f) {
                    function T() {
                        var P = this.get();
                        this.update("auto");
                        var te = this.get();
                        return this.update(P), te
                    }

                    function x(P, te, oe) {
                        return te !== void 0 && (oe = te), P in h ? P : oe
                    }

                    function R(P) {
                        var te = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(P);
                        return (te ? i(te[1], te[2], te[3]) : P).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var A = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(P, te, oe, he) {
                        this.$el = P, this.el = P[0];
                        var z = te[0];
                        oe[2] && (z = oe[2]), Z[z] && (z = Z[z]), this.name = z, this.type = oe[1], this.duration = u(te[1], this.duration, A.duration), this.ease = x(te[2], this.ease, A.ease), this.delay = u(te[3], this.delay, A.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = re.test(this.name), this.unit = he.unit || this.unit || ae.defaultUnit, this.angle = he.angle || this.angle || ae.defaultAngle, ae.fallback || he.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + U + this.duration + "ms" + (this.ease != "ease" ? U + h[this.ease][0] : "") + (this.delay ? U + this.delay + "ms" : ""))
                    }, f.set = function(P) {
                        P = this.convert(P, this.type), this.update(P), this.redraw()
                    }, f.transition = function(P) {
                        this.active = !0, P = this.convert(P, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), P == "auto" && (P = T.call(this))), this.nextStyle = P
                    }, f.fallback = function(P) {
                        var te = this.el.style[this.name] || this.convert(this.get(), this.type);
                        P = this.convert(P, this.type), this.auto && (te == "auto" && (te = this.convert(this.get(), this.type)), P == "auto" && (P = T.call(this))), this.tween = new ee({
                            from: te,
                            to: P,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return B(this.el, this.name)
                    }, f.update = function(P) {
                        g(this.el, this.name, P)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, g(this.el, this.name, this.get()));
                        var P = this.tween;
                        P && P.context && P.destroy()
                    }, f.convert = function(P, te) {
                        if (P == "auto" && this.auto) return P;
                        var oe, he = typeof P == "number",
                            z = typeof P == "string";
                        switch (te) {
                            case C:
                                if (he) return P;
                                if (z && P.replace(O, "") === "") return +P;
                                oe = "number(unitless)";
                                break;
                            case M:
                                if (z) {
                                    if (P === "" && this.original) return this.original;
                                    if (te.test(P)) return P.charAt(0) == "#" && P.length == 7 ? P : R(P)
                                }
                                oe = "hex or rgb string";
                                break;
                            case D:
                                if (he) return P + this.unit;
                                if (z && te.test(P)) return P;
                                oe = "number(px) or string(unit)";
                                break;
                            case F:
                                if (he) return P + this.unit;
                                if (z && te.test(P)) return P;
                                oe = "number(px) or string(unit or %)";
                                break;
                            case X:
                                if (he) return P + this.angle;
                                if (z && te.test(P)) return P;
                                oe = "number(deg) or string(angle)";
                                break;
                            case K:
                                if (he || z && F.test(P)) return P;
                                oe = "number(unitless) or string(unit or %)"
                        }
                        return s(oe, P), P
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                v = p(_, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
                    }
                }),
                H = p(_, function(f, T) {
                    f.init = function() {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(x) {
                        this.$el[this.name](x)
                    }
                }),
                Q = p(_, function(f, T) {
                    function x(R, A) {
                        var P, te, oe, he, z;
                        for (P in R) he = de[P], oe = he[0], te = he[1] || P, z = this.convert(R[P], oe), A.call(this, te, z, oe)
                    }
                    f.init = function() {
                        T.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && ae.perspective && (this.current.perspective = ae.perspective, g(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(R) {
                        x.call(this, R, function(A, P) {
                            this.current[A] = P
                        }), g(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(R) {
                        var A = this.values(R);
                        this.tween = new _e({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var P, te = {};
                        for (P in this.current) te[P] = P in A ? A[P] : this.current[P];
                        this.active = !0, this.nextStyle = this.style(te)
                    }, f.fallback = function(R) {
                        var A = this.values(R);
                        this.tween = new _e({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        g(this.el, this.name, this.style(this.current))
                    }, f.style = function(R) {
                        var A, P = "";
                        for (A in R) P += A + "(" + R[A] + ") ";
                        return P
                    }, f.values = function(R) {
                        var A, P = {};
                        return x.call(this, R, function(te, oe, he) {
                            P[te] = oe, this.current[te] === void 0 && (A = 0, ~te.indexOf("scale") && (A = 1), this.current[te] = this.convert(A, he))
                        }), P
                    }
                }),
                ee = p(function(f) {
                    function T(z) {
                        oe.push(z) === 1 && G(x)
                    }

                    function x() {
                        var z, se, ue, Te = oe.length;
                        if (Te)
                            for (G(x), se = W(), z = Te; z--;) ue = oe[z], ue && ue.render(se)
                    }

                    function R(z) {
                        var se, ue = e.inArray(z, oe);
                        ue >= 0 && (se = oe.slice(ue + 1), oe.length = ue, se.length && (oe = oe.concat(se)))
                    }

                    function A(z) {
                        return Math.round(z * he) / he
                    }

                    function P(z, se, ue) {
                        return i(z[0] + ue * (se[0] - z[0]), z[1] + ue * (se[1] - z[1]), z[2] + ue * (se[2] - z[2]))
                    }
                    var te = {
                        ease: h.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(z) {
                        this.duration = z.duration || 0, this.delay = z.delay || 0;
                        var se = z.ease || te.ease;
                        h[se] && (se = h[se][1]), typeof se != "function" && (se = te.ease), this.ease = se, this.update = z.update || o, this.complete = z.complete || o, this.context = z.context || this, this.name = z.name;
                        var ue = z.from,
                            Te = z.to;
                        ue === void 0 && (ue = te.from), Te === void 0 && (Te = te.to), this.unit = z.unit || "", typeof ue == "number" && typeof Te == "number" ? (this.begin = ue, this.change = Te - ue) : this.format(Te, ue), this.value = this.begin + this.unit, this.start = W(), z.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = W()), this.active = !0, T(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, R(this))
                    }, f.render = function(z) {
                        var se, ue = z - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var Te = this.ease(ue, 0, 1, this.duration);
                            return se = this.startRGB ? P(this.startRGB, this.endRGB, Te) : A(this.begin + Te * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value)
                        }
                        se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(z, se) {
                        if (se += "", z += "", z.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(z), this.endHex = z, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ue = se.replace(O, ""),
                                Te = z.replace(O, "");
                            ue !== Te && a("tween", se, z), this.unit = ue
                        }
                        se = parseFloat(se), z = parseFloat(z), this.begin = this.value = se, this.change = z - se
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var oe = [],
                        he = 1e3
                }),
                ce = p(ee, function(f) {
                    f.init = function(T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, f.render = function(T) {
                        var x = T - this.start;
                        x < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                _e = p(ee, function(f, T) {
                    f.init = function(x) {
                        this.context = x.context, this.update = x.update, this.tweens = [], this.current = x.current;
                        var R, A;
                        for (R in x.values) A = x.values[R], this.current[R] !== A && this.tweens.push(new ee({
                            name: R,
                            from: this.current[R],
                            to: A,
                            duration: x.duration,
                            delay: x.delay,
                            ease: x.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(x) {
                        var R, A, P = this.tweens.length,
                            te = !1;
                        for (R = P; R--;) A = this.tweens[R], A.context && (A.render(x), this.current[A.name] = A.value, te = !0);
                        return te ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (T.destroy.call(this), this.tweens) {
                            var x, R = this.tweens.length;
                            for (x = R; x--;) this.tweens[x].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ae = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !V.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!V.transition) return ae.fallback = !0;
                ae.agentTests.push("(" + f + ")");
                var T = new RegExp(ae.agentTests.join("|"), "i");
                ae.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new ee(f)
            }, t.delay = function(f, T, x) {
                return new ce({
                    complete: T,
                    duration: f,
                    context: x
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var g = e.style,
                B = e.css,
                Z = {
                    transform: V.transform && V.transform.css
                },
                j = {
                    color: [v, M],
                    background: [v, M, "background-color"],
                    "outline-color": [v, M],
                    "border-color": [v, M],
                    "border-top-color": [v, M],
                    "border-right-color": [v, M],
                    "border-bottom-color": [v, M],
                    "border-left-color": [v, M],
                    "border-width": [_, D],
                    "border-top-width": [_, D],
                    "border-right-width": [_, D],
                    "border-bottom-width": [_, D],
                    "border-left-width": [_, D],
                    "border-spacing": [_, D],
                    "letter-spacing": [_, D],
                    margin: [_, D],
                    "margin-top": [_, D],
                    "margin-right": [_, D],
                    "margin-bottom": [_, D],
                    "margin-left": [_, D],
                    padding: [_, D],
                    "padding-top": [_, D],
                    "padding-right": [_, D],
                    "padding-bottom": [_, D],
                    "padding-left": [_, D],
                    "outline-width": [_, D],
                    opacity: [_, C],
                    top: [_, F],
                    right: [_, F],
                    bottom: [_, F],
                    left: [_, F],
                    "font-size": [_, F],
                    "text-indent": [_, F],
                    "word-spacing": [_, F],
                    width: [_, F],
                    "min-width": [_, F],
                    "max-width": [_, F],
                    height: [_, F],
                    "min-height": [_, F],
                    "max-height": [_, F],
                    "line-height": [_, K],
                    "scroll-top": [H, C, "scrollTop"],
                    "scroll-left": [H, C, "scrollLeft"]
                },
                de = {};
            V.transform && (j.transform = [Q], de = {
                x: [F, "translateX"],
                y: [F, "translateY"],
                rotate: [X],
                rotateX: [X],
                rotateY: [X],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [X],
                skewX: [X],
                skewY: [X]
            }), V.transform && V.backface && (de.z = [F, "translateZ"], de.rotateZ = [X], de.scaleZ = [C], de.perspective = [D]);
            var Me = /ms/,
                Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ds = c((YU, Ms) => {
        "use strict";
        var i_ = window.$,
            o_ = Pi() && i_.tram;
        Ms.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                m = r.forEach,
                p = r.map,
                h = r.reduce,
                E = r.reduceRight,
                w = r.filter,
                I = r.every,
                S = r.some,
                O = r.indexOf,
                q = r.lastIndexOf,
                C = Array.isArray,
                M = Object.keys,
                D = i.bind,
                F = e.each = e.forEach = function(y, N, k) {
                    if (y == null) return y;
                    if (m && y.forEach === m) y.forEach(N, k);
                    else if (y.length === +y.length) {
                        for (var V = 0, J = y.length; V < J; V++)
                            if (N.call(k, y[V], V, y) === t) return
                    } else
                        for (var ne = e.keys(y), V = 0, J = ne.length; V < J; V++)
                            if (N.call(k, y[ne[V]], ne[V], y) === t) return;
                    return y
                };
            e.map = e.collect = function(y, N, k) {
                var V = [];
                return y == null ? V : p && y.map === p ? y.map(N, k) : (F(y, function(J, ne, G) {
                    V.push(N.call(k, J, ne, G))
                }), V)
            }, e.find = e.detect = function(y, N, k) {
                var V;
                return X(y, function(J, ne, G) {
                    if (N.call(k, J, ne, G)) return V = J, !0
                }), V
            }, e.filter = e.select = function(y, N, k) {
                var V = [];
                return y == null ? V : w && y.filter === w ? y.filter(N, k) : (F(y, function(J, ne, G) {
                    N.call(k, J, ne, G) && V.push(J)
                }), V)
            };
            var X = e.some = e.any = function(y, N, k) {
                N || (N = e.identity);
                var V = !1;
                return y == null ? V : S && y.some === S ? y.some(N, k) : (F(y, function(J, ne, G) {
                    if (V || (V = N.call(k, J, ne, G))) return t
                }), !!V)
            };
            e.contains = e.include = function(y, N) {
                return y == null ? !1 : O && y.indexOf === O ? y.indexOf(N) != -1 : X(y, function(k) {
                    return k === N
                })
            }, e.delay = function(y, N) {
                var k = s.call(arguments, 2);
                return setTimeout(function() {
                    return y.apply(null, k)
                }, N)
            }, e.defer = function(y) {
                return e.delay.apply(e, [y, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(y) {
                var N, k, V;
                return function() {
                    N || (N = !0, k = arguments, V = this, o_.frame(function() {
                        N = !1, y.apply(V, k)
                    }))
                }
            }, e.debounce = function(y, N, k) {
                var V, J, ne, G, W, d = function() {
                    var b = e.now() - G;
                    b < N ? V = setTimeout(d, N - b) : (V = null, k || (W = y.apply(ne, J), ne = J = null))
                };
                return function() {
                    ne = this, J = arguments, G = e.now();
                    var b = k && !V;
                    return V || (V = setTimeout(d, N)), b && (W = y.apply(ne, J), ne = J = null), W
                }
            }, e.defaults = function(y) {
                if (!e.isObject(y)) return y;
                for (var N = 1, k = arguments.length; N < k; N++) {
                    var V = arguments[N];
                    for (var J in V) y[J] === void 0 && (y[J] = V[J])
                }
                return y
            }, e.keys = function(y) {
                if (!e.isObject(y)) return [];
                if (M) return M(y);
                var N = [];
                for (var k in y) e.has(y, k) && N.push(k);
                return N
            }, e.has = function(y, N) {
                return l.call(y, N)
            }, e.isObject = function(y) {
                return y === Object(y)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/,
                Y = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                re = /\\|'|\r|\n|\u2028|\u2029/g,
                U = function(y) {
                    return "\\" + Y[y]
                },
                L = /^\s*(\w|\$)+\s*$/;
            return e.template = function(y, N, k) {
                !N && k && (N = k), N = e.defaults({}, N, e.templateSettings);
                var V = RegExp([(N.escape || K).source, (N.interpolate || K).source, (N.evaluate || K).source].join("|") + "|$", "g"),
                    J = 0,
                    ne = "__p+='";
                y.replace(V, function(b, _, v, H, Q) {
                    return ne += y.slice(J, Q).replace(re, U), J = Q + b.length, _ ? ne += `'+
((__t=(` + _ + `))==null?'':_.escape(__t))+
'` : v ? ne += `'+
((__t=(` + v + `))==null?'':__t)+
'` : H && (ne += `';
` + H + `
__p+='`), b
                }), ne += `';
`;
                var G = N.variable;
                if (G) {
                    if (!L.test(G)) throw new Error("variable is not a bare identifier: " + G)
                } else ne = `with(obj||{}){
` + ne + `}
`, G = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var W;
                try {
                    W = new Function(N.variable || "obj", "_", ne)
                } catch (b) {
                    throw b.source = ne, b
                }
                var d = function(b) {
                    return W.call(this, b, e)
                };
                return d.source = "function(" + G + `){
` + ne + "}", d
            }, e
        }()
    });
    var Ge = c(($U, Xs) => {
        "use strict";
        var ve = {},
            Bt = {},
            Wt = [],
            Fi = window.Webflow || [],
            bt = window.jQuery,
            Ye = bt(window),
            a_ = bt(document),
            it = bt.isFunction,
            Ke = ve._ = Ds(),
            Gs = ve.tram = Pi() && bt.tram,
            cn = !1,
            Mi = !1;
        Gs.config.hideBackface = !1;
        Gs.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            Bt[e] && Us(Bt[e]);
            var n = Bt[e] = t(bt, Ke, r) || {};
            return Vs(n), n
        };
        ve.require = function(e) {
            return Bt[e]
        };

        function Vs(e) {
            ve.env() && (it(e.design) && Ye.on("__wf_design", e.design), it(e.preview) && Ye.on("__wf_preview", e.preview)), it(e.destroy) && Ye.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && s_(e)
        }

        function s_(e) {
            if (cn) {
                e.ready();
                return
            }
            Ke.contains(Wt, e.ready) || Wt.push(e.ready)
        }

        function Us(e) {
            it(e.design) && Ye.off("__wf_design", e.design), it(e.preview) && Ye.off("__wf_preview", e.preview), it(e.destroy) && Ye.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && u_(e)
        }

        function u_(e) {
            Wt = Ke.filter(Wt, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (cn) {
                it(e) && e();
                return
            }
            Fi.push(e)
        };
        ve.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var un = navigator.userAgent.toLowerCase(),
            Bs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            c_ = ve.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10),
            l_ = ve.env.ios = /(ipod|iphone|ipad)/.test(un);
        ve.env.safari = /safari/.test(un) && !c_ && !l_;
        var qi;
        Bs && a_.on("touchstart mousedown", function(e) {
            qi = e.target
        });
        ve.validClick = Bs ? function(e) {
            return e === qi || bt.contains(e, qi)
        } : function() {
            return !0
        };
        var Ws = "resize.webflow orientationchange.webflow load.webflow",
            f_ = "scroll.webflow " + Ws;
        ve.resize = Di(Ye, Ws);
        ve.scroll = Di(Ye, f_);
        ve.redraw = Di();

        function Di(e, t) {
            var r = [],
                n = {};
            return n.up = Ke.throttle(function(i) {
                Ke.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Ke.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ke.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ve.location = function(e) {
            window.location = e
        };
        ve.env() && (ve.location = function() {});
        ve.ready = function() {
            cn = !0, Mi ? d_() : Ke.each(Wt, ks), Ke.each(Fi, ks), ve.resize.up()
        };

        function ks(e) {
            it(e) && e()
        }

        function d_() {
            Mi = !1, Ke.each(Bt, Vs)
        }
        var Lt;
        ve.load = function(e) {
            Lt.then(e)
        };

        function Hs() {
            Lt && (Lt.reject(), Ye.off("load", Lt.resolve)), Lt = new bt.Deferred, Ye.on("load", Lt.resolve)
        }
        ve.destroy = function(e) {
            e = e || {}, Mi = !0, Ye.triggerHandler("__wf_destroy"), e.domready != null && (cn = e.domready), Ke.each(Bt, Us), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Wt = [], Fi = [], Lt.state() === "pending" && Hs()
        };
        bt(ve.ready);
        Hs();
        Xs.exports = window.Webflow = ve
    });
    var Ks = c((QU, zs) => {
        "use strict";
        var js = Ge();
        js.define("brand", zs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var E = n.attr("data-wf-status"),
                    w = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(w) && s.hostname !== w && (E = !0), E && !a && (l = l || p(), h(), setTimeout(h, 500), e(r).off(u, m).on(u, m))
            };

            function m() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", E ? "display: none !important;" : "")
            }

            function p() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    w = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(w, I), E[0]
            }

            function h() {
                var E = i.children(o),
                    w = E.length && E.get(0) === l,
                    I = js.env("editor");
                if (w) {
                    I && E.remove();
                    return
                }
                E.length && E.remove(), I || i.append(l)
            }
            return t
        })
    });
    var $s = c((ZU, Ys) => {
        "use strict";
        var ki = Ge();
        ki.define("edit", Ys.exports = function(e, t, r) {
            if (r = r || {}, (ki.env("test") || ki.env("frame")) && !r.fixture && !p_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, l = r.load || h,
                m = !1;
            try {
                m = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            m ? l() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && l() : i.on(a, p).triggerHandler(a);

            function p() {
                u || /\?edit/.test(s.hash) && l()
            }

            function h() {
                u = !0, window.WebflowEditor = !0, i.off(a, p), q(function(M) {
                    e.ajax({
                        url: O("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(M)
                    })
                })
            }

            function E(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M, w(S(D.scriptPath), function() {
                        window.WebflowEditor(D)
                    })
                }
            }

            function w(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, I)
            }

            function I(M, D, F) {
                throw console.error("Could not load editor script: " + D), F
            }

            function S(M) {
                return M.indexOf("//") >= 0 ? M : O("https://editor-api.webflow.com" + M)
            }

            function O(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }

            function q(M) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html", D.style.display = "none", D.sandbox = "allow-scripts allow-same-origin";
                var F = function(X) {
                    X.data === "WF_third_party_cookies_unsupported" ? (C(D, F), M(!1)) : X.data === "WF_third_party_cookies_supported" && (C(D, F), M(!0))
                };
                D.onerror = function() {
                    C(D, F), M(!1)
                }, window.addEventListener("message", F, !1), window.document.body.appendChild(D)
            }

            function C(M, D) {
                window.removeEventListener("message", D, !1), M.remove()
            }
            return n
        });

        function p_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Zs = c((JU, Qs) => {
        "use strict";
        var v_ = Ge();
        v_.define("focus-visible", Qs.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList" in C && "contains" in C.classList)
                }

                function u(C) {
                    var M = C.type,
                        D = C.tagName;
                    return !!(D === "INPUT" && s[M] && !C.readOnly || D === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }

                function l(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }

                function m(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }

                function p(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (a(r.activeElement) && l(r.activeElement), n = !0)
                }

                function h() {
                    n = !1
                }

                function E(C) {
                    a(C.target) && (n || u(C.target)) && l(C.target)
                }

                function w(C) {
                    a(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), m(C.target))
                }

                function I() {
                    document.visibilityState === "hidden" && (i && (n = !0), S())
                }

                function S() {
                    document.addEventListener("mousemove", q), document.addEventListener("mousedown", q), document.addEventListener("mouseup", q), document.addEventListener("pointermove", q), document.addEventListener("pointerdown", q), document.addEventListener("pointerup", q), document.addEventListener("touchmove", q), document.addEventListener("touchstart", q), document.addEventListener("touchend", q)
                }

                function O() {
                    document.removeEventListener("mousemove", q), document.removeEventListener("mousedown", q), document.removeEventListener("mouseup", q), document.removeEventListener("pointermove", q), document.removeEventListener("pointerdown", q), document.removeEventListener("pointerup", q), document.removeEventListener("touchmove", q), document.removeEventListener("touchstart", q), document.removeEventListener("touchend", q)
                }

                function q(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1, O())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", I, !0), S(), r.addEventListener("focus", E, !0), r.addEventListener("blur", w, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var tu = c((eB, eu) => {
        "use strict";
        var Js = Ge();
        Js.define("focus", eu.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Js.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var iu = c((tB, nu) => {
        "use strict";
        var Gi = window.jQuery,
            ot = {},
            ln = [],
            ru = ".w-ix",
            fn = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Gi(t).triggerHandler(ot.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Gi(t).triggerHandler(ot.types.OUTRO))
                }
            };
        ot.triggers = {};
        ot.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        ot.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [], Gi.extend(ot.triggers, fn)
        };
        ot.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                    ln.push([t, n])
                })
            }
        };
        ot.async();
        nu.exports = ot
    });
    var _r = c((rB, su) => {
        "use strict";
        var Vi = iu();

        function ou(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var h_ = window.jQuery,
            dn = {},
            au = ".w-ix",
            g_ = {
                reset: function(e, t) {
                    Vi.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Vi.triggers.intro(e, t), ou(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Vi.triggers.outro(e, t), ou(t, "COMPONENT_INACTIVE")
                }
            };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + au,
            OUTRO: "w-ix-outro" + au
        };
        h_.extend(dn.triggers, g_);
        su.exports = dn
    });
    var uu = c((nB, pt) => {
        function Ui(e) {
            return pt.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Ui(e)
        }
        pt.exports = Ui, pt.exports.__esModule = !0, pt.exports.default = pt.exports
    });
    var pn = c((iB, Tr) => {
        var y_ = uu().default;

        function cu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (cu = function(i) {
                return i ? r : t
            })(e)
        }

        function m_(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || y_(e) != "object" && typeof e != "function") return {
                default: e
            };
            var r = cu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        Tr.exports = m_, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
    });
    var lu = c((oB, Ir) => {
        function E_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ir.exports = E_, Ir.exports.__esModule = !0, Ir.exports.default = Ir.exports
    });
    var me = c((aB, fu) => {
        var vn = function(e) {
            return e && e.Math == Math && e
        };
        fu.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Ht = c((sB, du) => {
        du.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Nt = c((uB, pu) => {
        var b_ = Ht();
        pu.exports = !b_(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var hn = c((cB, vu) => {
        var wr = Function.prototype.call;
        vu.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    });
    var mu = c(yu => {
        "use strict";
        var hu = {}.propertyIsEnumerable,
            gu = Object.getOwnPropertyDescriptor,
            __ = gu && !hu.call({
                1: 2
            }, 1);
        yu.f = __ ? function(t) {
            var r = gu(this, t);
            return !!r && r.enumerable
        } : hu
    });
    var Bi = c((fB, Eu) => {
        Eu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var $e = c((dB, _u) => {
        var bu = Function.prototype,
            Wi = bu.bind,
            Hi = bu.call,
            T_ = Wi && Wi.bind(Hi);
        _u.exports = Wi ? function(e) {
            return e && T_(Hi, e)
        } : function(e) {
            return e && function() {
                return Hi.apply(e, arguments)
            }
        }
    });
    var wu = c((pB, Iu) => {
        var Tu = $e(),
            I_ = Tu({}.toString),
            w_ = Tu("".slice);
        Iu.exports = function(e) {
            return w_(I_(e), 8, -1)
        }
    });
    var Au = c((vB, Ou) => {
        var O_ = me(),
            A_ = $e(),
            x_ = Ht(),
            S_ = wu(),
            Xi = O_.Object,
            C_ = A_("".split);
        Ou.exports = x_(function() {
            return !Xi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return S_(e) == "String" ? C_(e, "") : Xi(e)
        } : Xi
    });
    var ji = c((hB, xu) => {
        var R_ = me(),
            L_ = R_.TypeError;
        xu.exports = function(e) {
            if (e == null) throw L_("Can't call method on " + e);
            return e
        }
    });
    var Or = c((gB, Su) => {
        var N_ = Au(),
            P_ = ji();
        Su.exports = function(e) {
            return N_(P_(e))
        }
    });
    var at = c((yB, Cu) => {
        Cu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Xt = c((mB, Ru) => {
        var q_ = at();
        Ru.exports = function(e) {
            return typeof e == "object" ? e !== null : q_(e)
        }
    });
    var Ar = c((EB, Lu) => {
        var zi = me(),
            F_ = at(),
            M_ = function(e) {
                return F_(e) ? e : void 0
            };
        Lu.exports = function(e, t) {
            return arguments.length < 2 ? M_(zi[e]) : zi[e] && zi[e][t]
        }
    });
    var Pu = c((bB, Nu) => {
        var D_ = $e();
        Nu.exports = D_({}.isPrototypeOf)
    });
    var Fu = c((_B, qu) => {
        var k_ = Ar();
        qu.exports = k_("navigator", "userAgent") || ""
    });
    var Bu = c((TB, Uu) => {
        var Vu = me(),
            Ki = Fu(),
            Mu = Vu.process,
            Du = Vu.Deno,
            ku = Mu && Mu.versions || Du && Du.version,
            Gu = ku && ku.v8,
            Qe, gn;
        Gu && (Qe = Gu.split("."), gn = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
        !gn && Ki && (Qe = Ki.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Ki.match(/Chrome\/(\d+)/), Qe && (gn = +Qe[1])));
        Uu.exports = gn
    });
    var Yi = c((IB, Hu) => {
        var Wu = Bu(),
            G_ = Ht();
        Hu.exports = !!Object.getOwnPropertySymbols && !G_(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Wu && Wu < 41
        })
    });
    var $i = c((wB, Xu) => {
        var V_ = Yi();
        Xu.exports = V_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Qi = c((OB, ju) => {
        var U_ = me(),
            B_ = Ar(),
            W_ = at(),
            H_ = Pu(),
            X_ = $i(),
            j_ = U_.Object;
        ju.exports = X_ ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = B_("Symbol");
            return W_(t) && H_(t.prototype, j_(e))
        }
    });
    var Ku = c((AB, zu) => {
        var z_ = me(),
            K_ = z_.String;
        zu.exports = function(e) {
            try {
                return K_(e)
            } catch {
                return "Object"
            }
        }
    });
    var $u = c((xB, Yu) => {
        var Y_ = me(),
            $_ = at(),
            Q_ = Ku(),
            Z_ = Y_.TypeError;
        Yu.exports = function(e) {
            if ($_(e)) return e;
            throw Z_(Q_(e) + " is not a function")
        }
    });
    var Zu = c((SB, Qu) => {
        var J_ = $u();
        Qu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : J_(r)
        }
    });
    var ec = c((CB, Ju) => {
        var eT = me(),
            Zi = hn(),
            Ji = at(),
            eo = Xt(),
            tT = eT.TypeError;
        Ju.exports = function(e, t) {
            var r, n;
            if (t === "string" && Ji(r = e.toString) && !eo(n = Zi(r, e)) || Ji(r = e.valueOf) && !eo(n = Zi(r, e)) || t !== "string" && Ji(r = e.toString) && !eo(n = Zi(r, e))) return n;
            throw tT("Can't convert object to primitive value")
        }
    });
    var rc = c((RB, tc) => {
        tc.exports = !1
    });
    var yn = c((LB, ic) => {
        var nc = me(),
            rT = Object.defineProperty;
        ic.exports = function(e, t) {
            try {
                rT(nc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                nc[e] = t
            }
            return t
        }
    });
    var mn = c((NB, ac) => {
        var nT = me(),
            iT = yn(),
            oc = "__core-js_shared__",
            oT = nT[oc] || iT(oc, {});
        ac.exports = oT
    });
    var to = c((PB, uc) => {
        var aT = rc(),
            sc = mn();
        (uc.exports = function(e, t) {
            return sc[e] || (sc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: aT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var lc = c((qB, cc) => {
        var sT = me(),
            uT = ji(),
            cT = sT.Object;
        cc.exports = function(e) {
            return cT(uT(e))
        }
    });
    var _t = c((FB, fc) => {
        var lT = $e(),
            fT = lc(),
            dT = lT({}.hasOwnProperty);
        fc.exports = Object.hasOwn || function(t, r) {
            return dT(fT(t), r)
        }
    });
    var ro = c((MB, dc) => {
        var pT = $e(),
            vT = 0,
            hT = Math.random(),
            gT = pT(1.toString);
        dc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + gT(++vT + hT, 36)
        }
    });
    var no = c((DB, yc) => {
        var yT = me(),
            mT = to(),
            pc = _t(),
            ET = ro(),
            vc = Yi(),
            gc = $i(),
            jt = mT("wks"),
            Pt = yT.Symbol,
            hc = Pt && Pt.for,
            bT = gc ? Pt : Pt && Pt.withoutSetter || ET;
        yc.exports = function(e) {
            if (!pc(jt, e) || !(vc || typeof jt[e] == "string")) {
                var t = "Symbol." + e;
                vc && pc(Pt, e) ? jt[e] = Pt[e] : gc && hc ? jt[e] = hc(t) : jt[e] = bT(t)
            }
            return jt[e]
        }
    });
    var _c = c((kB, bc) => {
        var _T = me(),
            TT = hn(),
            mc = Xt(),
            Ec = Qi(),
            IT = Zu(),
            wT = ec(),
            OT = no(),
            AT = _T.TypeError,
            xT = OT("toPrimitive");
        bc.exports = function(e, t) {
            if (!mc(e) || Ec(e)) return e;
            var r = IT(e, xT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = TT(r, e, t), !mc(n) || Ec(n)) return n;
                throw AT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), wT(e, t)
        }
    });
    var io = c((GB, Tc) => {
        var ST = _c(),
            CT = Qi();
        Tc.exports = function(e) {
            var t = ST(e, "string");
            return CT(t) ? t : t + ""
        }
    });
    var ao = c((VB, wc) => {
        var RT = me(),
            Ic = Xt(),
            oo = RT.document,
            LT = Ic(oo) && Ic(oo.createElement);
        wc.exports = function(e) {
            return LT ? oo.createElement(e) : {}
        }
    });
    var so = c((UB, Oc) => {
        var NT = Nt(),
            PT = Ht(),
            qT = ao();
        Oc.exports = !NT && !PT(function() {
            return Object.defineProperty(qT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var uo = c(xc => {
        var FT = Nt(),
            MT = hn(),
            DT = mu(),
            kT = Bi(),
            GT = Or(),
            VT = io(),
            UT = _t(),
            BT = so(),
            Ac = Object.getOwnPropertyDescriptor;
        xc.f = FT ? Ac : function(t, r) {
            if (t = GT(t), r = VT(r), BT) try {
                return Ac(t, r)
            } catch {}
            if (UT(t, r)) return kT(!MT(DT.f, t, r), t[r])
        }
    });
    var xr = c((WB, Cc) => {
        var Sc = me(),
            WT = Xt(),
            HT = Sc.String,
            XT = Sc.TypeError;
        Cc.exports = function(e) {
            if (WT(e)) return e;
            throw XT(HT(e) + " is not an object")
        }
    });
    var Sr = c(Nc => {
        var jT = me(),
            zT = Nt(),
            KT = so(),
            Rc = xr(),
            YT = io(),
            $T = jT.TypeError,
            Lc = Object.defineProperty;
        Nc.f = zT ? Lc : function(t, r, n) {
            if (Rc(t), r = YT(r), Rc(n), KT) try {
                return Lc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw $T("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var En = c((XB, Pc) => {
        var QT = Nt(),
            ZT = Sr(),
            JT = Bi();
        Pc.exports = QT ? function(e, t, r) {
            return ZT.f(e, t, JT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var lo = c((jB, qc) => {
        var eI = $e(),
            tI = at(),
            co = mn(),
            rI = eI(Function.toString);
        tI(co.inspectSource) || (co.inspectSource = function(e) {
            return rI(e)
        });
        qc.exports = co.inspectSource
    });
    var Dc = c((zB, Mc) => {
        var nI = me(),
            iI = at(),
            oI = lo(),
            Fc = nI.WeakMap;
        Mc.exports = iI(Fc) && /native code/.test(oI(Fc))
    });
    var fo = c((KB, Gc) => {
        var aI = to(),
            sI = ro(),
            kc = aI("keys");
        Gc.exports = function(e) {
            return kc[e] || (kc[e] = sI(e))
        }
    });
    var bn = c((YB, Vc) => {
        Vc.exports = {}
    });
    var jc = c(($B, Xc) => {
        var uI = Dc(),
            Hc = me(),
            po = $e(),
            cI = Xt(),
            lI = En(),
            vo = _t(),
            ho = mn(),
            fI = fo(),
            dI = bn(),
            Uc = "Object already initialized",
            yo = Hc.TypeError,
            pI = Hc.WeakMap,
            _n, Cr, Tn, vI = function(e) {
                return Tn(e) ? Cr(e) : _n(e, {})
            },
            hI = function(e) {
                return function(t) {
                    var r;
                    if (!cI(t) || (r = Cr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        uI || ho.state ? (Tt = ho.state || (ho.state = new pI), Bc = po(Tt.get), go = po(Tt.has), Wc = po(Tt.set), _n = function(e, t) {
            if (go(Tt, e)) throw new yo(Uc);
            return t.facade = e, Wc(Tt, e, t), t
        }, Cr = function(e) {
            return Bc(Tt, e) || {}
        }, Tn = function(e) {
            return go(Tt, e)
        }) : (qt = fI("state"), dI[qt] = !0, _n = function(e, t) {
            if (vo(e, qt)) throw new yo(Uc);
            return t.facade = e, lI(e, qt, t), t
        }, Cr = function(e) {
            return vo(e, qt) ? e[qt] : {}
        }, Tn = function(e) {
            return vo(e, qt)
        });
        var Tt, Bc, go, Wc, qt;
        Xc.exports = {
            set: _n,
            get: Cr,
            has: Tn,
            enforce: vI,
            getterFor: hI
        }
    });
    var Yc = c((QB, Kc) => {
        var mo = Nt(),
            gI = _t(),
            zc = Function.prototype,
            yI = mo && Object.getOwnPropertyDescriptor,
            Eo = gI(zc, "name"),
            mI = Eo && function() {}.name === "something",
            EI = Eo && (!mo || mo && yI(zc, "name").configurable);
        Kc.exports = {
            EXISTS: Eo,
            PROPER: mI,
            CONFIGURABLE: EI
        }
    });
    var el = c((ZB, Jc) => {
        var bI = me(),
            $c = at(),
            _I = _t(),
            Qc = En(),
            TI = yn(),
            II = lo(),
            Zc = jc(),
            wI = Yc().CONFIGURABLE,
            OI = Zc.get,
            AI = Zc.enforce,
            xI = String(String).split("String");
        (Jc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if ($c(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!_I(r, "name") || wI && r.name !== a) && Qc(r, "name", a), u = AI(r), u.source || (u.source = xI.join(typeof a == "string" ? a : ""))), e === bI) {
                o ? e[t] = r : TI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Qc(e, t, r)
        })(Function.prototype, "toString", function() {
            return $c(this) && OI(this).source || II(this)
        })
    });
    var bo = c((JB, tl) => {
        var SI = Math.ceil,
            CI = Math.floor;
        tl.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? CI : SI)(t)
        }
    });
    var nl = c((eW, rl) => {
        var RI = bo(),
            LI = Math.max,
            NI = Math.min;
        rl.exports = function(e, t) {
            var r = RI(e);
            return r < 0 ? LI(r + t, 0) : NI(r, t)
        }
    });
    var ol = c((tW, il) => {
        var PI = bo(),
            qI = Math.min;
        il.exports = function(e) {
            return e > 0 ? qI(PI(e), 9007199254740991) : 0
        }
    });
    var sl = c((rW, al) => {
        var FI = ol();
        al.exports = function(e) {
            return FI(e.length)
        }
    });
    var _o = c((nW, cl) => {
        var MI = Or(),
            DI = nl(),
            kI = sl(),
            ul = function(e) {
                return function(t, r, n) {
                    var i = MI(t),
                        o = kI(i),
                        s = DI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        cl.exports = {
            includes: ul(!0),
            indexOf: ul(!1)
        }
    });
    var Io = c((iW, fl) => {
        var GI = $e(),
            To = _t(),
            VI = Or(),
            UI = _o().indexOf,
            BI = bn(),
            ll = GI([].push);
        fl.exports = function(e, t) {
            var r = VI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !To(BI, o) && To(r, o) && ll(i, o);
            for (; t.length > n;) To(r, o = t[n++]) && (~UI(i, o) || ll(i, o));
            return i
        }
    });
    var In = c((oW, dl) => {
        dl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var vl = c(pl => {
        var WI = Io(),
            HI = In(),
            XI = HI.concat("length", "prototype");
        pl.f = Object.getOwnPropertyNames || function(t) {
            return WI(t, XI)
        }
    });
    var gl = c(hl => {
        hl.f = Object.getOwnPropertySymbols
    });
    var ml = c((uW, yl) => {
        var jI = Ar(),
            zI = $e(),
            KI = vl(),
            YI = gl(),
            $I = xr(),
            QI = zI([].concat);
        yl.exports = jI("Reflect", "ownKeys") || function(t) {
            var r = KI.f($I(t)),
                n = YI.f;
            return n ? QI(r, n(t)) : r
        }
    });
    var bl = c((cW, El) => {
        var ZI = _t(),
            JI = ml(),
            e0 = uo(),
            t0 = Sr();
        El.exports = function(e, t) {
            for (var r = JI(t), n = t0.f, i = e0.f, o = 0; o < r.length; o++) {
                var s = r[o];
                ZI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var Tl = c((lW, _l) => {
        var r0 = Ht(),
            n0 = at(),
            i0 = /#|\.prototype\./,
            Rr = function(e, t) {
                var r = a0[o0(e)];
                return r == u0 ? !0 : r == s0 ? !1 : n0(t) ? r0(t) : !!t
            },
            o0 = Rr.normalize = function(e) {
                return String(e).replace(i0, ".").toLowerCase()
            },
            a0 = Rr.data = {},
            s0 = Rr.NATIVE = "N",
            u0 = Rr.POLYFILL = "P";
        _l.exports = Rr
    });
    var wl = c((fW, Il) => {
        var wo = me(),
            c0 = uo().f,
            l0 = En(),
            f0 = el(),
            d0 = yn(),
            p0 = bl(),
            v0 = Tl();
        Il.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, l, m;
            if (n ? s = wo : i ? s = wo[r] || d0(r, {}) : s = (wo[r] || {}).prototype, s)
                for (a in t) {
                    if (l = t[a], e.noTargetGet ? (m = c0(s, a), u = m && m.value) : u = s[a], o = v0(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof l == typeof u) continue;
                        p0(l, u)
                    }(e.sham || u && u.sham) && l0(l, "sham", !0), f0(s, a, l, e)
                }
        }
    });
    var Al = c((dW, Ol) => {
        var h0 = Io(),
            g0 = In();
        Ol.exports = Object.keys || function(t) {
            return h0(t, g0)
        }
    });
    var Sl = c((pW, xl) => {
        var y0 = Nt(),
            m0 = Sr(),
            E0 = xr(),
            b0 = Or(),
            _0 = Al();
        xl.exports = y0 ? Object.defineProperties : function(t, r) {
            E0(t);
            for (var n = b0(r), i = _0(r), o = i.length, s = 0, a; o > s;) m0.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var Rl = c((vW, Cl) => {
        var T0 = Ar();
        Cl.exports = T0("document", "documentElement")
    });
    var kl = c((hW, Dl) => {
        var I0 = xr(),
            w0 = Sl(),
            Ll = In(),
            O0 = bn(),
            A0 = Rl(),
            x0 = ao(),
            S0 = fo(),
            Nl = ">",
            Pl = "<",
            Ao = "prototype",
            xo = "script",
            Fl = S0("IE_PROTO"),
            Oo = function() {},
            Ml = function(e) {
                return Pl + xo + Nl + e + Pl + "/" + xo + Nl
            },
            ql = function(e) {
                e.write(Ml("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            C0 = function() {
                var e = x0("iframe"),
                    t = "java" + xo + ":",
                    r;
                return e.style.display = "none", A0.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ml("document.F=Object")), r.close(), r.F
            },
            wn, On = function() {
                try {
                    wn = new ActiveXObject("htmlfile")
                } catch {}
                On = typeof document < "u" ? document.domain && wn ? ql(wn) : C0() : ql(wn);
                for (var e = Ll.length; e--;) delete On[Ao][Ll[e]];
                return On()
            };
        O0[Fl] = !0;
        Dl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[Ao] = I0(t), n = new Oo, Oo[Ao] = null, n[Fl] = t) : n = On(), r === void 0 ? n : w0(n, r)
        }
    });
    var Vl = c((gW, Gl) => {
        var R0 = no(),
            L0 = kl(),
            N0 = Sr(),
            So = R0("unscopables"),
            Co = Array.prototype;
        Co[So] == null && N0.f(Co, So, {
            configurable: !0,
            value: L0(null)
        });
        Gl.exports = function(e) {
            Co[So][e] = !0
        }
    });
    var Ul = c(() => {
        "use strict";
        var P0 = wl(),
            q0 = _o().includes,
            F0 = Vl();
        P0({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return q0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        F0("includes")
    });
    var Wl = c((EW, Bl) => {
        var M0 = me(),
            D0 = $e();
        Bl.exports = function(e, t) {
            return D0(M0[e].prototype[t])
        }
    });
    var Xl = c((bW, Hl) => {
        Ul();
        var k0 = Wl();
        Hl.exports = k0("Array", "includes")
    });
    var zl = c((_W, jl) => {
        var G0 = Xl();
        jl.exports = G0
    });
    var Yl = c((TW, Kl) => {
        var V0 = zl();
        Kl.exports = V0
    });
    var Ro = c((IW, $l) => {
        var U0 = typeof global == "object" && global && global.Object === Object && global;
        $l.exports = U0
    });
    var Ze = c((wW, Ql) => {
        var B0 = Ro(),
            W0 = typeof self == "object" && self && self.Object === Object && self,
            H0 = B0 || W0 || Function("return this")();
        Ql.exports = H0
    });
    var zt = c((OW, Zl) => {
        var X0 = Ze(),
            j0 = X0.Symbol;
        Zl.exports = j0
    });
    var rf = c((AW, tf) => {
        var Jl = zt(),
            ef = Object.prototype,
            z0 = ef.hasOwnProperty,
            K0 = ef.toString,
            Lr = Jl ? Jl.toStringTag : void 0;

        function Y0(e) {
            var t = z0.call(e, Lr),
                r = e[Lr];
            try {
                e[Lr] = void 0;
                var n = !0
            } catch {}
            var i = K0.call(e);
            return n && (t ? e[Lr] = r : delete e[Lr]), i
        }
        tf.exports = Y0
    });
    var of = c((xW, nf) => {
        var $0 = Object.prototype,
            Q0 = $0.toString;

        function Z0(e) {
            return Q0.call(e)
        }
        nf.exports = Z0
    });
    var It = c((SW, uf) => {
        var af = zt(),
            J0 = rf(),
            ew = of (),
            tw = "[object Null]",
            rw = "[object Undefined]",
            sf = af ? af.toStringTag : void 0;

        function nw(e) {
            return e == null ? e === void 0 ? rw : tw : sf && sf in Object(e) ? J0(e) : ew(e)
        }
        uf.exports = nw
    });
    var Lo = c((CW, cf) => {
        function iw(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        cf.exports = iw
    });
    var No = c((RW, lf) => {
        var ow = Lo(),
            aw = ow(Object.getPrototypeOf, Object);
        lf.exports = aw
    });
    var vt = c((LW, ff) => {
        function sw(e) {
            return e != null && typeof e == "object"
        }
        ff.exports = sw
    });
    var Po = c((NW, pf) => {
        var uw = It(),
            cw = No(),
            lw = vt(),
            fw = "[object Object]",
            dw = Function.prototype,
            pw = Object.prototype,
            df = dw.toString,
            vw = pw.hasOwnProperty,
            hw = df.call(Object);

        function gw(e) {
            if (!lw(e) || uw(e) != fw) return !1;
            var t = cw(e);
            if (t === null) return !0;
            var r = vw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && df.call(r) == hw
        }
        pf.exports = gw
    });
    var vf = c(qo => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        qo.default = yw;

        function yw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var hf = c((Mo, Fo) => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        var mw = vf(),
            Ew = bw(mw);

        function bw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Kt;
        typeof self < "u" ? Kt = self : typeof window < "u" ? Kt = window : typeof global < "u" ? Kt = global : typeof Fo < "u" ? Kt = Fo : Kt = Function("return this")();
        var _w = (0, Ew.default)(Kt);
        Mo.default = _w
    });
    var Do = c(Nr => {
        "use strict";
        Nr.__esModule = !0;
        Nr.ActionTypes = void 0;
        Nr.default = Ef;
        var Tw = Po(),
            Iw = mf(Tw),
            ww = hf(),
            gf = mf(ww);

        function mf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var yf = Nr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function Ef(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(Ef)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function l() {
                a === s && (a = s.slice())
            }

            function m() {
                return o
            }

            function p(I) {
                if (typeof I != "function") throw new Error("Expected listener to be a function.");
                var S = !0;
                return l(), a.push(I),
                    function() {
                        if (S) {
                            S = !1, l();
                            var q = a.indexOf(I);
                            a.splice(q, 1)
                        }
                    }
            }

            function h(I) {
                if (!(0, Iw.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, I)
                } finally {
                    u = !1
                }
                for (var S = s = a, O = 0; O < S.length; O++) S[O]();
                return I
            }

            function E(I) {
                if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
                i = I, h({
                    type: yf.INIT
                })
            }

            function w() {
                var I, S = p;
                return I = {
                    subscribe: function(q) {
                        if (typeof q != "object") throw new TypeError("Expected the observer to be an object.");

                        function C() {
                            q.next && q.next(m())
                        }
                        C();
                        var M = S(C);
                        return {
                            unsubscribe: M
                        }
                    }
                }, I[gf.default] = function() {
                    return this
                }, I
            }
            return h({
                type: yf.INIT
            }), n = {
                dispatch: h,
                subscribe: p,
                getState: m,
                replaceReducer: E
            }, n[gf.default] = w, n
        }
    });
    var Go = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = Ow;

        function Ow(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var Tf = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Rw;
        var bf = Do(),
            Aw = Po(),
            MW = _f(Aw),
            xw = Go(),
            DW = _f(xw);

        function _f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Sw(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Cw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: bf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + bf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Rw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                Cw(r)
            } catch (u) {
                a = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    m = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var h = !1, E = {}, w = 0; w < o.length; w++) {
                    var I = o[w],
                        S = r[I],
                        O = l[I],
                        q = S(O, m);
                    if (typeof q > "u") {
                        var C = Sw(I, m);
                        throw new Error(C)
                    }
                    E[I] = q, h = h || q !== O
                }
                return h ? E : l
            }
        }
    });
    var wf = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = Lw;

        function If(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function Lw(e, t) {
            if (typeof e == "function") return If(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = If(s, t))
            }
            return n
        }
    });
    var Wo = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        Bo.default = Nw;

        function Nw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var Of = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        var Pw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Ho.default = Dw;
        var qw = Wo(),
            Fw = Mw(qw);

        function Mw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Dw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        l = [],
                        m = {
                            getState: a.getState,
                            dispatch: function(h) {
                                return u(h)
                            }
                        };
                    return l = t.map(function(p) {
                        return p(m)
                    }), u = Fw.default.apply(void 0, l)(a.dispatch), Pw({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Xo = c(He => {
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var kw = Do(),
            Gw = Yt(kw),
            Vw = Tf(),
            Uw = Yt(Vw),
            Bw = wf(),
            Ww = Yt(Bw),
            Hw = Of(),
            Xw = Yt(Hw),
            jw = Wo(),
            zw = Yt(jw),
            Kw = Go(),
            BW = Yt(Kw);

        function Yt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        He.createStore = Gw.default;
        He.combineReducers = Uw.default;
        He.bindActionCreators = Ww.default;
        He.applyMiddleware = Xw.default;
        He.compose = zw.default
    });
    var Je, jo, st, Yw, $w, An, Qw, zo = ye(() => {
        "use strict";
        Je = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, jo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, st = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Yw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, $w = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, An = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Qw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ve, Zw, xn = ye(() => {
        "use strict";
        Ve = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, Zw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var Jw, Af = ye(() => {
        "use strict";
        Jw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var eO, tO, rO, nO, iO, oO, aO, Ko, xf = ye(() => {
        "use strict";
        xn();
        ({
            TRANSFORM_MOVE: eO,
            TRANSFORM_SCALE: tO,
            TRANSFORM_ROTATE: rO,
            TRANSFORM_SKEW: nO,
            STYLE_SIZE: iO,
            STYLE_FILTER: oO,
            STYLE_FONT_VARIATION: aO
        } = Ve), Ko = {
            [eO]: !0,
            [tO]: !0,
            [rO]: !0,
            [nO]: !0,
            [iO]: !0,
            [oO]: !0,
            [aO]: !0
        }
    });
    var we = {};
    ke(we, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => IO,
        IX2_ANIMATION_FRAME_CHANGED: () => yO,
        IX2_CLEAR_REQUESTED: () => vO,
        IX2_ELEMENT_STATE_CHANGED: () => TO,
        IX2_EVENT_LISTENER_ADDED: () => hO,
        IX2_EVENT_STATE_CHANGED: () => gO,
        IX2_INSTANCE_ADDED: () => EO,
        IX2_INSTANCE_REMOVED: () => _O,
        IX2_INSTANCE_STARTED: () => bO,
        IX2_MEDIA_QUERIES_DEFINED: () => OO,
        IX2_PARAMETER_CHANGED: () => mO,
        IX2_PLAYBACK_REQUESTED: () => dO,
        IX2_PREVIEW_REQUESTED: () => fO,
        IX2_RAW_DATA_IMPORTED: () => sO,
        IX2_SESSION_INITIALIZED: () => uO,
        IX2_SESSION_STARTED: () => cO,
        IX2_SESSION_STOPPED: () => lO,
        IX2_STOP_REQUESTED: () => pO,
        IX2_TEST_FRAME_RENDERED: () => AO,
        IX2_VIEWPORT_WIDTH_CHANGED: () => wO
    });
    var sO, uO, cO, lO, fO, dO, pO, vO, hO, gO, yO, mO, EO, bO, _O, TO, IO, wO, OO, AO, Sf = ye(() => {
        "use strict";
        sO = "IX2_RAW_DATA_IMPORTED", uO = "IX2_SESSION_INITIALIZED", cO = "IX2_SESSION_STARTED", lO = "IX2_SESSION_STOPPED", fO = "IX2_PREVIEW_REQUESTED", dO = "IX2_PLAYBACK_REQUESTED", pO = "IX2_STOP_REQUESTED", vO = "IX2_CLEAR_REQUESTED", hO = "IX2_EVENT_LISTENER_ADDED", gO = "IX2_EVENT_STATE_CHANGED", yO = "IX2_ANIMATION_FRAME_CHANGED", mO = "IX2_PARAMETER_CHANGED", EO = "IX2_INSTANCE_ADDED", bO = "IX2_INSTANCE_STARTED", _O = "IX2_INSTANCE_REMOVED", TO = "IX2_ELEMENT_STATE_CHANGED", IO = "IX2_ACTION_LIST_PLAYBACK_CHANGED", wO = "IX2_VIEWPORT_WIDTH_CHANGED", OO = "IX2_MEDIA_QUERIES_DEFINED", AO = "IX2_TEST_FRAME_RENDERED"
    });
    var Re = {};
    ke(Re, {
        ABSTRACT_NODE: () => wA,
        AUTO: () => pA,
        BACKGROUND: () => sA,
        BACKGROUND_COLOR: () => aA,
        BAR_DELIMITER: () => gA,
        BORDER_COLOR: () => uA,
        BOUNDARY_SELECTOR: () => LO,
        CHILDREN: () => yA,
        COLON_DELIMITER: () => hA,
        COLOR: () => cA,
        COMMA_DELIMITER: () => vA,
        CONFIG_UNIT: () => GO,
        CONFIG_VALUE: () => FO,
        CONFIG_X_UNIT: () => MO,
        CONFIG_X_VALUE: () => NO,
        CONFIG_Y_UNIT: () => DO,
        CONFIG_Y_VALUE: () => PO,
        CONFIG_Z_UNIT: () => kO,
        CONFIG_Z_VALUE: () => qO,
        DISPLAY: () => lA,
        FILTER: () => rA,
        FLEX: () => fA,
        FONT_VARIATION_SETTINGS: () => nA,
        HEIGHT: () => oA,
        HTML_ELEMENT: () => TA,
        IMMEDIATE_CHILDREN: () => mA,
        IX2_ID_DELIMITER: () => xO,
        OPACITY: () => tA,
        PARENT: () => bA,
        PLAIN_OBJECT: () => IA,
        PRESERVE_3D: () => _A,
        RENDER_GENERAL: () => AA,
        RENDER_PLUGIN: () => SA,
        RENDER_STYLE: () => xA,
        RENDER_TRANSFORM: () => OA,
        ROTATE_X: () => YO,
        ROTATE_Y: () => $O,
        ROTATE_Z: () => QO,
        SCALE_3D: () => KO,
        SCALE_X: () => XO,
        SCALE_Y: () => jO,
        SCALE_Z: () => zO,
        SIBLINGS: () => EA,
        SKEW: () => ZO,
        SKEW_X: () => JO,
        SKEW_Y: () => eA,
        TRANSFORM: () => VO,
        TRANSLATE_3D: () => HO,
        TRANSLATE_X: () => UO,
        TRANSLATE_Y: () => BO,
        TRANSLATE_Z: () => WO,
        WF_PAGE: () => SO,
        WIDTH: () => iA,
        WILL_CHANGE: () => dA,
        W_MOD_IX: () => RO,
        W_MOD_JS: () => CO
    });
    var xO, SO, CO, RO, LO, NO, PO, qO, FO, MO, DO, kO, GO, VO, UO, BO, WO, HO, XO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, hA, gA, yA, mA, EA, bA, _A, TA, IA, wA, OA, AA, xA, SA, Cf = ye(() => {
        "use strict";
        xO = "|", SO = "data-wf-page", CO = "w-mod-js", RO = "w-mod-ix", LO = ".w-dyn-item", NO = "xValue", PO = "yValue", qO = "zValue", FO = "value", MO = "xUnit", DO = "yUnit", kO = "zUnit", GO = "unit", VO = "transform", UO = "translateX", BO = "translateY", WO = "translateZ", HO = "translate3d", XO = "scaleX", jO = "scaleY", zO = "scaleZ", KO = "scale3d", YO = "rotateX", $O = "rotateY", QO = "rotateZ", ZO = "skew", JO = "skewX", eA = "skewY", tA = "opacity", rA = "filter", nA = "font-variation-settings", iA = "width", oA = "height", aA = "backgroundColor", sA = "background", uA = "borderColor", cA = "color", lA = "display", fA = "flex", dA = "willChange", pA = "AUTO", vA = ",", hA = ":", gA = "|", yA = "CHILDREN", mA = "IMMEDIATE_CHILDREN", EA = "SIBLINGS", bA = "PARENT", _A = "preserve-3d", TA = "HTML_ELEMENT", IA = "PLAIN_OBJECT", wA = "ABSTRACT_NODE", OA = "RENDER_TRANSFORM", AA = "RENDER_GENERAL", xA = "RENDER_STYLE", SA = "RENDER_PLUGIN"
    });
    var Rf = {};
    ke(Rf, {
        ActionAppliesTo: () => Zw,
        ActionTypeConsts: () => Ve,
        EventAppliesTo: () => jo,
        EventBasedOn: () => st,
        EventContinuousMouseAxes: () => Yw,
        EventLimitAffectedElements: () => $w,
        EventTypeConsts: () => Je,
        IX2EngineActionTypes: () => we,
        IX2EngineConstants: () => Re,
        InteractionTypeConsts: () => Jw,
        QuickEffectDirectionConsts: () => Qw,
        QuickEffectIds: () => An,
        ReducedMotionTypes: () => Ko
    });
    var Ue = ye(() => {
        "use strict";
        zo();
        xn();
        Af();
        xf();
        Sf();
        Cf();
        xn();
        zo()
    });
    var CA, Lf, Nf = ye(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: CA
        } = we), Lf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case CA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var $t = c(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        var RA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        be.clone = Cn;
        be.addLast = Ff;
        be.addFirst = Mf;
        be.removeLast = Df;
        be.removeFirst = kf;
        be.insert = Gf;
        be.removeAt = Vf;
        be.replaceAt = Uf;
        be.getIn = Rn;
        be.set = Ln;
        be.setIn = Nn;
        be.update = Wf;
        be.updateIn = Hf;
        be.merge = Xf;
        be.mergeDeep = jf;
        be.mergeIn = zf;
        be.omit = Kf;
        be.addDefaults = Yf;
        var Pf = "INVALID_ARGS";

        function qf(e) {
            throw new Error(e)
        }

        function Yo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var LA = {}.hasOwnProperty;

        function Cn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Be(e, t, r) {
            var n = r;
            n == null && qf(Pf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l != null) {
                    var m = Yo(l);
                    if (m.length)
                        for (var p = 0; p <= m.length; p++) {
                            var h = m[p];
                            if (!(e && n[h] !== void 0)) {
                                var E = l[h];
                                t && Sn(n[h]) && Sn(E) && (E = Be(e, t, n[h], E)), !(E === void 0 || E === n[h]) && (i || (i = !0, n = Cn(n)), n[h] = E)
                            }
                        }
                }
            }
            return n
        }

        function Sn(e) {
            var t = typeof e > "u" ? "undefined" : RA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Ff(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Mf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Df(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function kf(e) {
            return e.length ? e.slice(1) : e
        }

        function Gf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Vf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Uf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Rn(e, t) {
            if (!Array.isArray(t) && qf(Pf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Ln(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Cn(i);
            return o[t] = r, o
        }

        function Bf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Bf(s, t, r, n + 1)
            }
            return Ln(e, o, i)
        }

        function Nn(e, t, r) {
            return t.length ? Bf(e, t, r, 0) : r
        }

        function Wf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Ln(e, t, i)
        }

        function Hf(e, t, r) {
            var n = Rn(e, t),
                i = r(n);
            return Nn(e, t, i)
        }

        function Xf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Be(!1, !1, e, t, r, n, i, o)
        }

        function jf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Be(!1, !0, e, t, r, n, i, o)
        }

        function zf(e, t, r, n, i, o, s) {
            var a = Rn(e, t);
            a == null && (a = {});
            for (var u = void 0, l = arguments.length, m = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++) m[p - 7] = arguments[p];
            return m.length ? u = Be.call.apply(Be, [null, !1, !1, a, r, n, i, o, s].concat(m)) : u = Be(!1, !1, a, r, n, i, o, s), Nn(e, t, u)
        }

        function Kf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (LA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = Yo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Yf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Be(!0, !1, e, t, r, n, i, o)
        }
        var NA = {
            clone: Cn,
            addLast: Ff,
            addFirst: Mf,
            removeLast: Df,
            removeFirst: kf,
            insert: Gf,
            removeAt: Vf,
            replaceAt: Uf,
            getIn: Rn,
            set: Ln,
            setIn: Nn,
            update: Wf,
            updateIn: Hf,
            merge: Xf,
            mergeDeep: jf,
            mergeIn: zf,
            omit: Kf,
            addDefaults: Yf
        };
        be.default = NA
    });
    var Qf, PA, qA, FA, MA, DA, $f, Zf, Jf = ye(() => {
        "use strict";
        Ue();
        Qf = fe($t()), {
            IX2_PREVIEW_REQUESTED: PA,
            IX2_PLAYBACK_REQUESTED: qA,
            IX2_STOP_REQUESTED: FA,
            IX2_CLEAR_REQUESTED: MA
        } = we, DA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, $f = Object.create(null, {
            [PA]: {
                value: "preview"
            },
            [qA]: {
                value: "playback"
            },
            [FA]: {
                value: "stop"
            },
            [MA]: {
                value: "clear"
            }
        }), Zf = (e = DA, t) => {
            if (t.type in $f) {
                let r = [$f[t.type]];
                return (0, Qf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Pe, kA, GA, VA, UA, BA, WA, HA, XA, jA, zA, ed, KA, td, rd = ye(() => {
        "use strict";
        Ue();
        Pe = fe($t()), {
            IX2_SESSION_INITIALIZED: kA,
            IX2_SESSION_STARTED: GA,
            IX2_TEST_FRAME_RENDERED: VA,
            IX2_SESSION_STOPPED: UA,
            IX2_EVENT_LISTENER_ADDED: BA,
            IX2_EVENT_STATE_CHANGED: WA,
            IX2_ANIMATION_FRAME_CHANGED: HA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: XA,
            IX2_VIEWPORT_WIDTH_CHANGED: jA,
            IX2_MEDIA_QUERIES_DEFINED: zA
        } = we, ed = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, KA = 20, td = (e = ed, t) => {
            switch (t.type) {
                case kA:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Pe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case GA:
                    return (0, Pe.set)(e, "active", !0);
                case VA:
                    {
                        let {
                            payload: {
                                step: r = KA
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", e.tick + r)
                    }
                case UA:
                    return ed;
                case HA:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Pe.set)(e, "tick", r)
                    }
                case BA:
                    {
                        let r = (0, Pe.addLast)(e.eventListeners, t.payload);
                        return (0, Pe.set)(e, "eventListeners", r)
                    }
                case WA:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["eventState", r], n)
                    }
                case XA:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Pe.setIn)(e, ["playbackState", r], n)
                    }
                case jA:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: l
                            } = n[s];
                            if (r >= u && r <= l) {
                                o = a;
                                break
                            }
                        }
                        return (0, Pe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case zA:
                    return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var id = c((u5, nd) => {
        function YA() {
            this.__data__ = [], this.size = 0
        }
        nd.exports = YA
    });
    var Pn = c((c5, od) => {
        function $A(e, t) {
            return e === t || e !== e && t !== t
        }
        od.exports = $A
    });
    var Pr = c((l5, ad) => {
        var QA = Pn();

        function ZA(e, t) {
            for (var r = e.length; r--;)
                if (QA(e[r][0], t)) return r;
            return -1
        }
        ad.exports = ZA
    });
    var ud = c((f5, sd) => {
        var JA = Pr(),
            ex = Array.prototype,
            tx = ex.splice;

        function rx(e) {
            var t = this.__data__,
                r = JA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : tx.call(t, r, 1), --this.size, !0
        }
        sd.exports = rx
    });
    var ld = c((d5, cd) => {
        var nx = Pr();

        function ix(e) {
            var t = this.__data__,
                r = nx(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        cd.exports = ix
    });
    var dd = c((p5, fd) => {
        var ox = Pr();

        function ax(e) {
            return ox(this.__data__, e) > -1
        }
        fd.exports = ax
    });
    var vd = c((v5, pd) => {
        var sx = Pr();

        function ux(e, t) {
            var r = this.__data__,
                n = sx(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        pd.exports = ux
    });
    var qr = c((h5, hd) => {
        var cx = id(),
            lx = ud(),
            fx = ld(),
            dx = dd(),
            px = vd();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = cx;
        Qt.prototype.delete = lx;
        Qt.prototype.get = fx;
        Qt.prototype.has = dx;
        Qt.prototype.set = px;
        hd.exports = Qt
    });
    var yd = c((g5, gd) => {
        var vx = qr();

        function hx() {
            this.__data__ = new vx, this.size = 0
        }
        gd.exports = hx
    });
    var Ed = c((y5, md) => {
        function gx(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        md.exports = gx
    });
    var _d = c((m5, bd) => {
        function yx(e) {
            return this.__data__.get(e)
        }
        bd.exports = yx
    });
    var Id = c((E5, Td) => {
        function mx(e) {
            return this.__data__.has(e)
        }
        Td.exports = mx
    });
    var ut = c((b5, wd) => {
        function Ex(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        wd.exports = Ex
    });
    var $o = c((_5, Od) => {
        var bx = It(),
            _x = ut(),
            Tx = "[object AsyncFunction]",
            Ix = "[object Function]",
            wx = "[object GeneratorFunction]",
            Ox = "[object Proxy]";

        function Ax(e) {
            if (!_x(e)) return !1;
            var t = bx(e);
            return t == Ix || t == wx || t == Tx || t == Ox
        }
        Od.exports = Ax
    });
    var xd = c((T5, Ad) => {
        var xx = Ze(),
            Sx = xx["__core-js_shared__"];
        Ad.exports = Sx
    });
    var Rd = c((I5, Cd) => {
        var Qo = xd(),
            Sd = function() {
                var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Cx(e) {
            return !!Sd && Sd in e
        }
        Cd.exports = Cx
    });
    var Zo = c((w5, Ld) => {
        var Rx = Function.prototype,
            Lx = Rx.toString;

        function Nx(e) {
            if (e != null) {
                try {
                    return Lx.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Ld.exports = Nx
    });
    var Pd = c((O5, Nd) => {
        var Px = $o(),
            qx = Rd(),
            Fx = ut(),
            Mx = Zo(),
            Dx = /[\\^$.*+?()[\]{}|]/g,
            kx = /^\[object .+?Constructor\]$/,
            Gx = Function.prototype,
            Vx = Object.prototype,
            Ux = Gx.toString,
            Bx = Vx.hasOwnProperty,
            Wx = RegExp("^" + Ux.call(Bx).replace(Dx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Hx(e) {
            if (!Fx(e) || qx(e)) return !1;
            var t = Px(e) ? Wx : kx;
            return t.test(Mx(e))
        }
        Nd.exports = Hx
    });
    var Fd = c((A5, qd) => {
        function Xx(e, t) {
            return e ? .[t]
        }
        qd.exports = Xx
    });
    var wt = c((x5, Md) => {
        var jx = Pd(),
            zx = Fd();

        function Kx(e, t) {
            var r = zx(e, t);
            return jx(r) ? r : void 0
        }
        Md.exports = Kx
    });
    var qn = c((S5, Dd) => {
        var Yx = wt(),
            $x = Ze(),
            Qx = Yx($x, "Map");
        Dd.exports = Qx
    });
    var Fr = c((C5, kd) => {
        var Zx = wt(),
            Jx = Zx(Object, "create");
        kd.exports = Jx
    });
    var Ud = c((R5, Vd) => {
        var Gd = Fr();

        function eS() {
            this.__data__ = Gd ? Gd(null) : {}, this.size = 0
        }
        Vd.exports = eS
    });
    var Wd = c((L5, Bd) => {
        function tS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Bd.exports = tS
    });
    var Xd = c((N5, Hd) => {
        var rS = Fr(),
            nS = "__lodash_hash_undefined__",
            iS = Object.prototype,
            oS = iS.hasOwnProperty;

        function aS(e) {
            var t = this.__data__;
            if (rS) {
                var r = t[e];
                return r === nS ? void 0 : r
            }
            return oS.call(t, e) ? t[e] : void 0
        }
        Hd.exports = aS
    });
    var zd = c((P5, jd) => {
        var sS = Fr(),
            uS = Object.prototype,
            cS = uS.hasOwnProperty;

        function lS(e) {
            var t = this.__data__;
            return sS ? t[e] !== void 0 : cS.call(t, e)
        }
        jd.exports = lS
    });
    var Yd = c((q5, Kd) => {
        var fS = Fr(),
            dS = "__lodash_hash_undefined__";

        function pS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = fS && t === void 0 ? dS : t, this
        }
        Kd.exports = pS
    });
    var Qd = c((F5, $d) => {
        var vS = Ud(),
            hS = Wd(),
            gS = Xd(),
            yS = zd(),
            mS = Yd();

        function Zt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = vS;
        Zt.prototype.delete = hS;
        Zt.prototype.get = gS;
        Zt.prototype.has = yS;
        Zt.prototype.set = mS;
        $d.exports = Zt
    });
    var ep = c((M5, Jd) => {
        var Zd = Qd(),
            ES = qr(),
            bS = qn();

        function _S() {
            this.size = 0, this.__data__ = {
                hash: new Zd,
                map: new(bS || ES),
                string: new Zd
            }
        }
        Jd.exports = _S
    });
    var rp = c((D5, tp) => {
        function TS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        tp.exports = TS
    });
    var Mr = c((k5, np) => {
        var IS = rp();

        function wS(e, t) {
            var r = e.__data__;
            return IS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        np.exports = wS
    });
    var op = c((G5, ip) => {
        var OS = Mr();

        function AS(e) {
            var t = OS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        ip.exports = AS
    });
    var sp = c((V5, ap) => {
        var xS = Mr();

        function SS(e) {
            return xS(this, e).get(e)
        }
        ap.exports = SS
    });
    var cp = c((U5, up) => {
        var CS = Mr();

        function RS(e) {
            return CS(this, e).has(e)
        }
        up.exports = RS
    });
    var fp = c((B5, lp) => {
        var LS = Mr();

        function NS(e, t) {
            var r = LS(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        lp.exports = NS
    });
    var Fn = c((W5, dp) => {
        var PS = ep(),
            qS = op(),
            FS = sp(),
            MS = cp(),
            DS = fp();

        function Jt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Jt.prototype.clear = PS;
        Jt.prototype.delete = qS;
        Jt.prototype.get = FS;
        Jt.prototype.has = MS;
        Jt.prototype.set = DS;
        dp.exports = Jt
    });
    var vp = c((H5, pp) => {
        var kS = qr(),
            GS = qn(),
            VS = Fn(),
            US = 200;

        function BS(e, t) {
            var r = this.__data__;
            if (r instanceof kS) {
                var n = r.__data__;
                if (!GS || n.length < US - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new VS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        pp.exports = BS
    });
    var Jo = c((X5, hp) => {
        var WS = qr(),
            HS = yd(),
            XS = Ed(),
            jS = _d(),
            zS = Id(),
            KS = vp();

        function er(e) {
            var t = this.__data__ = new WS(e);
            this.size = t.size
        }
        er.prototype.clear = HS;
        er.prototype.delete = XS;
        er.prototype.get = jS;
        er.prototype.has = zS;
        er.prototype.set = KS;
        hp.exports = er
    });
    var yp = c((j5, gp) => {
        var YS = "__lodash_hash_undefined__";

        function $S(e) {
            return this.__data__.set(e, YS), this
        }
        gp.exports = $S
    });
    var Ep = c((z5, mp) => {
        function QS(e) {
            return this.__data__.has(e)
        }
        mp.exports = QS
    });
    var _p = c((K5, bp) => {
        var ZS = Fn(),
            JS = yp(),
            eC = Ep();

        function Mn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new ZS; ++t < r;) this.add(e[t])
        }
        Mn.prototype.add = Mn.prototype.push = JS;
        Mn.prototype.has = eC;
        bp.exports = Mn
    });
    var Ip = c((Y5, Tp) => {
        function tC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Tp.exports = tC
    });
    var Op = c(($5, wp) => {
        function rC(e, t) {
            return e.has(t)
        }
        wp.exports = rC
    });
    var ea = c((Q5, Ap) => {
        var nC = _p(),
            iC = Ip(),
            oC = Op(),
            aC = 1,
            sC = 2;

        function uC(e, t, r, n, i, o) {
            var s = r & aC,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var l = o.get(e),
                m = o.get(t);
            if (l && m) return l == t && m == e;
            var p = -1,
                h = !0,
                E = r & sC ? new nC : void 0;
            for (o.set(e, t), o.set(t, e); ++p < a;) {
                var w = e[p],
                    I = t[p];
                if (n) var S = s ? n(I, w, p, t, e, o) : n(w, I, p, e, t, o);
                if (S !== void 0) {
                    if (S) continue;
                    h = !1;
                    break
                }
                if (E) {
                    if (!iC(t, function(O, q) {
                            if (!oC(E, q) && (w === O || i(w, O, r, n, o))) return E.push(q)
                        })) {
                        h = !1;
                        break
                    }
                } else if (!(w === I || i(w, I, r, n, o))) {
                    h = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), h
        }
        Ap.exports = uC
    });
    var Sp = c((Z5, xp) => {
        var cC = Ze(),
            lC = cC.Uint8Array;
        xp.exports = lC
    });
    var Rp = c((J5, Cp) => {
        function fC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        Cp.exports = fC
    });
    var Np = c((eH, Lp) => {
        function dC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Lp.exports = dC
    });
    var Dp = c((tH, Mp) => {
        var Pp = zt(),
            qp = Sp(),
            pC = Pn(),
            vC = ea(),
            hC = Rp(),
            gC = Np(),
            yC = 1,
            mC = 2,
            EC = "[object Boolean]",
            bC = "[object Date]",
            _C = "[object Error]",
            TC = "[object Map]",
            IC = "[object Number]",
            wC = "[object RegExp]",
            OC = "[object Set]",
            AC = "[object String]",
            xC = "[object Symbol]",
            SC = "[object ArrayBuffer]",
            CC = "[object DataView]",
            Fp = Pp ? Pp.prototype : void 0,
            ta = Fp ? Fp.valueOf : void 0;

        function RC(e, t, r, n, i, o, s) {
            switch (r) {
                case CC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case SC:
                    return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
                case EC:
                case bC:
                case IC:
                    return pC(+e, +t);
                case _C:
                    return e.name == t.name && e.message == t.message;
                case wC:
                case AC:
                    return e == t + "";
                case TC:
                    var a = hC;
                case OC:
                    var u = n & yC;
                    if (a || (a = gC), e.size != t.size && !u) return !1;
                    var l = s.get(e);
                    if (l) return l == t;
                    n |= mC, s.set(e, t);
                    var m = vC(a(e), a(t), n, i, o, s);
                    return s.delete(e), m;
                case xC:
                    if (ta) return ta.call(e) == ta.call(t)
            }
            return !1
        }
        Mp.exports = RC
    });
    var Dn = c((rH, kp) => {
        function LC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        kp.exports = LC
    });
    var Oe = c((nH, Gp) => {
        var NC = Array.isArray;
        Gp.exports = NC
    });
    var ra = c((iH, Vp) => {
        var PC = Dn(),
            qC = Oe();

        function FC(e, t, r) {
            var n = t(e);
            return qC(e) ? n : PC(n, r(e))
        }
        Vp.exports = FC
    });
    var Bp = c((oH, Up) => {
        function MC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Up.exports = MC
    });
    var na = c((aH, Wp) => {
        function DC() {
            return []
        }
        Wp.exports = DC
    });
    var ia = c((sH, Xp) => {
        var kC = Bp(),
            GC = na(),
            VC = Object.prototype,
            UC = VC.propertyIsEnumerable,
            Hp = Object.getOwnPropertySymbols,
            BC = Hp ? function(e) {
                return e == null ? [] : (e = Object(e), kC(Hp(e), function(t) {
                    return UC.call(e, t)
                }))
            } : GC;
        Xp.exports = BC
    });
    var zp = c((uH, jp) => {
        function WC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        jp.exports = WC
    });
    var Yp = c((cH, Kp) => {
        var HC = It(),
            XC = vt(),
            jC = "[object Arguments]";

        function zC(e) {
            return XC(e) && HC(e) == jC
        }
        Kp.exports = zC
    });
    var Dr = c((lH, Zp) => {
        var $p = Yp(),
            KC = vt(),
            Qp = Object.prototype,
            YC = Qp.hasOwnProperty,
            $C = Qp.propertyIsEnumerable,
            QC = $p(function() {
                return arguments
            }()) ? $p : function(e) {
                return KC(e) && YC.call(e, "callee") && !$C.call(e, "callee")
            };
        Zp.exports = QC
    });
    var ev = c((fH, Jp) => {
        function ZC() {
            return !1
        }
        Jp.exports = ZC
    });
    var kn = c((kr, tr) => {
        var JC = Ze(),
            eR = ev(),
            nv = typeof kr == "object" && kr && !kr.nodeType && kr,
            tv = nv && typeof tr == "object" && tr && !tr.nodeType && tr,
            tR = tv && tv.exports === nv,
            rv = tR ? JC.Buffer : void 0,
            rR = rv ? rv.isBuffer : void 0,
            nR = rR || eR;
        tr.exports = nR
    });
    var Gn = c((dH, iv) => {
        var iR = 9007199254740991,
            oR = /^(?:0|[1-9]\d*)$/;

        function aR(e, t) {
            var r = typeof e;
            return t = t ? ? iR, !!t && (r == "number" || r != "symbol" && oR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        iv.exports = aR
    });
    var Vn = c((pH, ov) => {
        var sR = 9007199254740991;

        function uR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sR
        }
        ov.exports = uR
    });
    var sv = c((vH, av) => {
        var cR = It(),
            lR = Vn(),
            fR = vt(),
            dR = "[object Arguments]",
            pR = "[object Array]",
            vR = "[object Boolean]",
            hR = "[object Date]",
            gR = "[object Error]",
            yR = "[object Function]",
            mR = "[object Map]",
            ER = "[object Number]",
            bR = "[object Object]",
            _R = "[object RegExp]",
            TR = "[object Set]",
            IR = "[object String]",
            wR = "[object WeakMap]",
            OR = "[object ArrayBuffer]",
            AR = "[object DataView]",
            xR = "[object Float32Array]",
            SR = "[object Float64Array]",
            CR = "[object Int8Array]",
            RR = "[object Int16Array]",
            LR = "[object Int32Array]",
            NR = "[object Uint8Array]",
            PR = "[object Uint8ClampedArray]",
            qR = "[object Uint16Array]",
            FR = "[object Uint32Array]",
            ge = {};
        ge[xR] = ge[SR] = ge[CR] = ge[RR] = ge[LR] = ge[NR] = ge[PR] = ge[qR] = ge[FR] = !0;
        ge[dR] = ge[pR] = ge[OR] = ge[vR] = ge[AR] = ge[hR] = ge[gR] = ge[yR] = ge[mR] = ge[ER] = ge[bR] = ge[_R] = ge[TR] = ge[IR] = ge[wR] = !1;

        function MR(e) {
            return fR(e) && lR(e.length) && !!ge[cR(e)]
        }
        av.exports = MR
    });
    var cv = c((hH, uv) => {
        function DR(e) {
            return function(t) {
                return e(t)
            }
        }
        uv.exports = DR
    });
    var fv = c((Gr, rr) => {
        var kR = Ro(),
            lv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
            Vr = lv && typeof rr == "object" && rr && !rr.nodeType && rr,
            GR = Vr && Vr.exports === lv,
            oa = GR && kR.process,
            VR = function() {
                try {
                    var e = Vr && Vr.require && Vr.require("util").types;
                    return e || oa && oa.binding && oa.binding("util")
                } catch {}
            }();
        rr.exports = VR
    });
    var Un = c((gH, vv) => {
        var UR = sv(),
            BR = cv(),
            dv = fv(),
            pv = dv && dv.isTypedArray,
            WR = pv ? BR(pv) : UR;
        vv.exports = WR
    });
    var aa = c((yH, hv) => {
        var HR = zp(),
            XR = Dr(),
            jR = Oe(),
            zR = kn(),
            KR = Gn(),
            YR = Un(),
            $R = Object.prototype,
            QR = $R.hasOwnProperty;

        function ZR(e, t) {
            var r = jR(e),
                n = !r && XR(e),
                i = !r && !n && zR(e),
                o = !r && !n && !i && YR(e),
                s = r || n || i || o,
                a = s ? HR(e.length, String) : [],
                u = a.length;
            for (var l in e)(t || QR.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || KR(l, u))) && a.push(l);
            return a
        }
        hv.exports = ZR
    });
    var Bn = c((mH, gv) => {
        var JR = Object.prototype;

        function eL(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || JR;
            return e === r
        }
        gv.exports = eL
    });
    var mv = c((EH, yv) => {
        var tL = Lo(),
            rL = tL(Object.keys, Object);
        yv.exports = rL
    });
    var Wn = c((bH, Ev) => {
        var nL = Bn(),
            iL = mv(),
            oL = Object.prototype,
            aL = oL.hasOwnProperty;

        function sL(e) {
            if (!nL(e)) return iL(e);
            var t = [];
            for (var r in Object(e)) aL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Ev.exports = sL
    });
    var Ft = c((_H, bv) => {
        var uL = $o(),
            cL = Vn();

        function lL(e) {
            return e != null && cL(e.length) && !uL(e)
        }
        bv.exports = lL
    });
    var Ur = c((TH, _v) => {
        var fL = aa(),
            dL = Wn(),
            pL = Ft();

        function vL(e) {
            return pL(e) ? fL(e) : dL(e)
        }
        _v.exports = vL
    });
    var Iv = c((IH, Tv) => {
        var hL = ra(),
            gL = ia(),
            yL = Ur();

        function mL(e) {
            return hL(e, yL, gL)
        }
        Tv.exports = mL
    });
    var Av = c((wH, Ov) => {
        var wv = Iv(),
            EL = 1,
            bL = Object.prototype,
            _L = bL.hasOwnProperty;

        function TL(e, t, r, n, i, o) {
            var s = r & EL,
                a = wv(e),
                u = a.length,
                l = wv(t),
                m = l.length;
            if (u != m && !s) return !1;
            for (var p = u; p--;) {
                var h = a[p];
                if (!(s ? h in t : _L.call(t, h))) return !1
            }
            var E = o.get(e),
                w = o.get(t);
            if (E && w) return E == t && w == e;
            var I = !0;
            o.set(e, t), o.set(t, e);
            for (var S = s; ++p < u;) {
                h = a[p];
                var O = e[h],
                    q = t[h];
                if (n) var C = s ? n(q, O, h, t, e, o) : n(O, q, h, e, t, o);
                if (!(C === void 0 ? O === q || i(O, q, r, n, o) : C)) {
                    I = !1;
                    break
                }
                S || (S = h == "constructor")
            }
            if (I && !S) {
                var M = e.constructor,
                    D = t.constructor;
                M != D && "constructor" in e && "constructor" in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (I = !1)
            }
            return o.delete(e), o.delete(t), I
        }
        Ov.exports = TL
    });
    var Sv = c((OH, xv) => {
        var IL = wt(),
            wL = Ze(),
            OL = IL(wL, "DataView");
        xv.exports = OL
    });
    var Rv = c((AH, Cv) => {
        var AL = wt(),
            xL = Ze(),
            SL = AL(xL, "Promise");
        Cv.exports = SL
    });
    var Nv = c((xH, Lv) => {
        var CL = wt(),
            RL = Ze(),
            LL = CL(RL, "Set");
        Lv.exports = LL
    });
    var sa = c((SH, Pv) => {
        var NL = wt(),
            PL = Ze(),
            qL = NL(PL, "WeakMap");
        Pv.exports = qL
    });
    var Hn = c((CH, Vv) => {
        var ua = Sv(),
            ca = qn(),
            la = Rv(),
            fa = Nv(),
            da = sa(),
            Gv = It(),
            nr = Zo(),
            qv = "[object Map]",
            FL = "[object Object]",
            Fv = "[object Promise]",
            Mv = "[object Set]",
            Dv = "[object WeakMap]",
            kv = "[object DataView]",
            ML = nr(ua),
            DL = nr(ca),
            kL = nr(la),
            GL = nr(fa),
            VL = nr(da),
            Mt = Gv;
        (ua && Mt(new ua(new ArrayBuffer(1))) != kv || ca && Mt(new ca) != qv || la && Mt(la.resolve()) != Fv || fa && Mt(new fa) != Mv || da && Mt(new da) != Dv) && (Mt = function(e) {
            var t = Gv(e),
                r = t == FL ? e.constructor : void 0,
                n = r ? nr(r) : "";
            if (n) switch (n) {
                case ML:
                    return kv;
                case DL:
                    return qv;
                case kL:
                    return Fv;
                case GL:
                    return Mv;
                case VL:
                    return Dv
            }
            return t
        });
        Vv.exports = Mt
    });
    var Kv = c((RH, zv) => {
        var pa = Jo(),
            UL = ea(),
            BL = Dp(),
            WL = Av(),
            Uv = Hn(),
            Bv = Oe(),
            Wv = kn(),
            HL = Un(),
            XL = 1,
            Hv = "[object Arguments]",
            Xv = "[object Array]",
            Xn = "[object Object]",
            jL = Object.prototype,
            jv = jL.hasOwnProperty;

        function zL(e, t, r, n, i, o) {
            var s = Bv(e),
                a = Bv(t),
                u = s ? Xv : Uv(e),
                l = a ? Xv : Uv(t);
            u = u == Hv ? Xn : u, l = l == Hv ? Xn : l;
            var m = u == Xn,
                p = l == Xn,
                h = u == l;
            if (h && Wv(e)) {
                if (!Wv(t)) return !1;
                s = !0, m = !1
            }
            if (h && !m) return o || (o = new pa), s || HL(e) ? UL(e, t, r, n, i, o) : BL(e, t, u, r, n, i, o);
            if (!(r & XL)) {
                var E = m && jv.call(e, "__wrapped__"),
                    w = p && jv.call(t, "__wrapped__");
                if (E || w) {
                    var I = E ? e.value() : e,
                        S = w ? t.value() : t;
                    return o || (o = new pa), i(I, S, r, n, o)
                }
            }
            return h ? (o || (o = new pa), WL(e, t, r, n, i, o)) : !1
        }
        zv.exports = zL
    });
    var va = c((LH, Qv) => {
        var KL = Kv(),
            Yv = vt();

        function $v(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Yv(e) && !Yv(t) ? e !== e && t !== t : KL(e, t, r, n, $v, i)
        }
        Qv.exports = $v
    });
    var Jv = c((NH, Zv) => {
        var YL = Jo(),
            $L = va(),
            QL = 1,
            ZL = 2;

        function JL(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    l = e[u],
                    m = a[1];
                if (s && a[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var p = new YL;
                    if (n) var h = n(l, m, u, e, t, p);
                    if (!(h === void 0 ? $L(m, l, QL | ZL, n, p) : h)) return !1
                }
            }
            return !0
        }
        Zv.exports = JL
    });
    var ha = c((PH, eh) => {
        var eN = ut();

        function tN(e) {
            return e === e && !eN(e)
        }
        eh.exports = tN
    });
    var rh = c((qH, th) => {
        var rN = ha(),
            nN = Ur();

        function iN(e) {
            for (var t = nN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, rN(i)]
            }
            return t
        }
        th.exports = iN
    });
    var ga = c((FH, nh) => {
        function oN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        nh.exports = oN
    });
    var oh = c((MH, ih) => {
        var aN = Jv(),
            sN = rh(),
            uN = ga();

        function cN(e) {
            var t = sN(e);
            return t.length == 1 && t[0][2] ? uN(t[0][0], t[0][1]) : function(r) {
                return r === e || aN(r, e, t)
            }
        }
        ih.exports = cN
    });
    var Br = c((DH, ah) => {
        var lN = It(),
            fN = vt(),
            dN = "[object Symbol]";

        function pN(e) {
            return typeof e == "symbol" || fN(e) && lN(e) == dN
        }
        ah.exports = pN
    });
    var jn = c((kH, sh) => {
        var vN = Oe(),
            hN = Br(),
            gN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            yN = /^\w*$/;

        function mN(e, t) {
            if (vN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || hN(e) ? !0 : yN.test(e) || !gN.test(e) || t != null && e in Object(t)
        }
        sh.exports = mN
    });
    var lh = c((GH, ch) => {
        var uh = Fn(),
            EN = "Expected a function";

        function ya(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(EN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(ya.Cache || uh), r
        }
        ya.Cache = uh;
        ch.exports = ya
    });
    var dh = c((VH, fh) => {
        var bN = lh(),
            _N = 500;

        function TN(e) {
            var t = bN(e, function(n) {
                    return r.size === _N && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        fh.exports = TN
    });
    var vh = c((UH, ph) => {
        var IN = dh(),
            wN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            ON = /\\(\\)?/g,
            AN = IN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(wN, function(r, n, i, o) {
                    t.push(i ? o.replace(ON, "$1") : n || r)
                }), t
            });
        ph.exports = AN
    });
    var ma = c((BH, hh) => {
        function xN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        hh.exports = xN
    });
    var _h = c((WH, bh) => {
        var gh = zt(),
            SN = ma(),
            CN = Oe(),
            RN = Br(),
            LN = 1 / 0,
            yh = gh ? gh.prototype : void 0,
            mh = yh ? yh.toString : void 0;

        function Eh(e) {
            if (typeof e == "string") return e;
            if (CN(e)) return SN(e, Eh) + "";
            if (RN(e)) return mh ? mh.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -LN ? "-0" : t
        }
        bh.exports = Eh
    });
    var Ih = c((HH, Th) => {
        var NN = _h();

        function PN(e) {
            return e == null ? "" : NN(e)
        }
        Th.exports = PN
    });
    var Wr = c((XH, wh) => {
        var qN = Oe(),
            FN = jn(),
            MN = vh(),
            DN = Ih();

        function kN(e, t) {
            return qN(e) ? e : FN(e, t) ? [e] : MN(DN(e))
        }
        wh.exports = kN
    });
    var ir = c((jH, Oh) => {
        var GN = Br(),
            VN = 1 / 0;

        function UN(e) {
            if (typeof e == "string" || GN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -VN ? "-0" : t
        }
        Oh.exports = UN
    });
    var zn = c((zH, Ah) => {
        var BN = Wr(),
            WN = ir();

        function HN(e, t) {
            t = BN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[WN(t[r++])];
            return r && r == n ? e : void 0
        }
        Ah.exports = HN
    });
    var Kn = c((KH, xh) => {
        var XN = zn();

        function jN(e, t, r) {
            var n = e == null ? void 0 : XN(e, t);
            return n === void 0 ? r : n
        }
        xh.exports = jN
    });
    var Ch = c((YH, Sh) => {
        function zN(e, t) {
            return e != null && t in Object(e)
        }
        Sh.exports = zN
    });
    var Lh = c(($H, Rh) => {
        var KN = Wr(),
            YN = Dr(),
            $N = Oe(),
            QN = Gn(),
            ZN = Vn(),
            JN = ir();

        function eP(e, t, r) {
            t = KN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = JN(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && ZN(i) && QN(s, i) && ($N(e) || YN(e)))
        }
        Rh.exports = eP
    });
    var Ph = c((QH, Nh) => {
        var tP = Ch(),
            rP = Lh();

        function nP(e, t) {
            return e != null && rP(e, t, tP)
        }
        Nh.exports = nP
    });
    var Fh = c((ZH, qh) => {
        var iP = va(),
            oP = Kn(),
            aP = Ph(),
            sP = jn(),
            uP = ha(),
            cP = ga(),
            lP = ir(),
            fP = 1,
            dP = 2;

        function pP(e, t) {
            return sP(e) && uP(t) ? cP(lP(e), t) : function(r) {
                var n = oP(r, e);
                return n === void 0 && n === t ? aP(r, e) : iP(t, n, fP | dP)
            }
        }
        qh.exports = pP
    });
    var Yn = c((JH, Mh) => {
        function vP(e) {
            return e
        }
        Mh.exports = vP
    });
    var Ea = c((eX, Dh) => {
        function hP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Dh.exports = hP
    });
    var Gh = c((tX, kh) => {
        var gP = zn();

        function yP(e) {
            return function(t) {
                return gP(t, e)
            }
        }
        kh.exports = yP
    });
    var Uh = c((rX, Vh) => {
        var mP = Ea(),
            EP = Gh(),
            bP = jn(),
            _P = ir();

        function TP(e) {
            return bP(e) ? mP(_P(e)) : EP(e)
        }
        Vh.exports = TP
    });
    var Ot = c((nX, Bh) => {
        var IP = oh(),
            wP = Fh(),
            OP = Yn(),
            AP = Oe(),
            xP = Uh();

        function SP(e) {
            return typeof e == "function" ? e : e == null ? OP : typeof e == "object" ? AP(e) ? wP(e[0], e[1]) : IP(e) : xP(e)
        }
        Bh.exports = SP
    });
    var ba = c((iX, Wh) => {
        var CP = Ot(),
            RP = Ft(),
            LP = Ur();

        function NP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!RP(t)) {
                    var o = CP(r, 3);
                    t = LP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Wh.exports = NP
    });
    var _a = c((oX, Hh) => {
        function PP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Hh.exports = PP
    });
    var jh = c((aX, Xh) => {
        var qP = /\s/;

        function FP(e) {
            for (var t = e.length; t-- && qP.test(e.charAt(t)););
            return t
        }
        Xh.exports = FP
    });
    var Kh = c((sX, zh) => {
        var MP = jh(),
            DP = /^\s+/;

        function kP(e) {
            return e && e.slice(0, MP(e) + 1).replace(DP, "")
        }
        zh.exports = kP
    });
    var $n = c((uX, Qh) => {
        var GP = Kh(),
            Yh = ut(),
            VP = Br(),
            $h = 0 / 0,
            UP = /^[-+]0x[0-9a-f]+$/i,
            BP = /^0b[01]+$/i,
            WP = /^0o[0-7]+$/i,
            HP = parseInt;

        function XP(e) {
            if (typeof e == "number") return e;
            if (VP(e)) return $h;
            if (Yh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Yh(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = GP(e);
            var r = BP.test(e);
            return r || WP.test(e) ? HP(e.slice(2), r ? 2 : 8) : UP.test(e) ? $h : +e
        }
        Qh.exports = XP
    });
    var eg = c((cX, Jh) => {
        var jP = $n(),
            Zh = 1 / 0,
            zP = 17976931348623157e292;

        function KP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = jP(e), e === Zh || e === -Zh) {
                var t = e < 0 ? -1 : 1;
                return t * zP
            }
            return e === e ? e : 0
        }
        Jh.exports = KP
    });
    var Ta = c((lX, tg) => {
        var YP = eg();

        function $P(e) {
            var t = YP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        tg.exports = $P
    });
    var ng = c((fX, rg) => {
        var QP = _a(),
            ZP = Ot(),
            JP = Ta(),
            eq = Math.max;

        function tq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : JP(r);
            return i < 0 && (i = eq(n + i, 0)), QP(e, ZP(t, 3), i)
        }
        rg.exports = tq
    });
    var Ia = c((dX, ig) => {
        var rq = ba(),
            nq = ng(),
            iq = rq(nq);
        ig.exports = iq
    });
    var sg = {};
    ke(sg, {
        ELEMENT_MATCHES: () => oq,
        FLEX_PREFIXED: () => wa,
        IS_BROWSER_ENV: () => et,
        TRANSFORM_PREFIXED: () => At,
        TRANSFORM_STYLE_PREFIXED: () => Zn,
        withBrowser: () => Qn
    });
    var ag, et, Qn, oq, wa, At, og, Zn, Jn = ye(() => {
        "use strict";
        ag = fe(Ia()), et = typeof window < "u", Qn = (e, t) => et ? e() : t, oq = Qn(() => (0, ag.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), wa = Qn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), At = Qn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), og = At.split("transform")[0], Zn = og ? og + "TransformStyle" : "transformStyle"
    });
    var Oa = c((pX, dg) => {
        var aq = 4,
            sq = .001,
            uq = 1e-7,
            cq = 10,
            Hr = 11,
            ei = 1 / (Hr - 1),
            lq = typeof Float32Array == "function";

        function ug(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function cg(e, t) {
            return 3 * t - 6 * e
        }

        function lg(e) {
            return 3 * e
        }

        function ti(e, t, r) {
            return ((ug(t, r) * e + cg(t, r)) * e + lg(t)) * e
        }

        function fg(e, t, r) {
            return 3 * ug(t, r) * e * e + 2 * cg(t, r) * e + lg(t)
        }

        function fq(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = ti(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > uq && ++a < cq);
            return s
        }

        function dq(e, t, r, n) {
            for (var i = 0; i < aq; ++i) {
                var o = fg(t, r, n);
                if (o === 0) return t;
                var s = ti(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        dg.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = lq ? new Float32Array(Hr) : new Array(Hr);
            if (t !== r || n !== i)
                for (var s = 0; s < Hr; ++s) o[s] = ti(s * ei, t, n);

            function a(u) {
                for (var l = 0, m = 1, p = Hr - 1; m !== p && o[m] <= u; ++m) l += ei;
                --m;
                var h = (u - o[m]) / (o[m + 1] - o[m]),
                    E = l + h * ei,
                    w = fg(E, t, n);
                return w >= sq ? dq(u, E, t, n) : w === 0 ? E : fq(u, l, l + ei, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ti(a(l), r, i)
            }
        }
    });
    var jr = {};
    ke(jr, {
        bounce: () => Kq,
        bouncePast: () => Yq,
        ease: () => pq,
        easeIn: () => vq,
        easeInOut: () => gq,
        easeOut: () => hq,
        inBack: () => Gq,
        inCirc: () => Fq,
        inCubic: () => bq,
        inElastic: () => Bq,
        inExpo: () => Nq,
        inOutBack: () => Uq,
        inOutCirc: () => Dq,
        inOutCubic: () => Tq,
        inOutElastic: () => Hq,
        inOutExpo: () => qq,
        inOutQuad: () => Eq,
        inOutQuart: () => Oq,
        inOutQuint: () => Sq,
        inOutSine: () => Lq,
        inQuad: () => yq,
        inQuart: () => Iq,
        inQuint: () => Aq,
        inSine: () => Cq,
        outBack: () => Vq,
        outBounce: () => kq,
        outCirc: () => Mq,
        outCubic: () => _q,
        outElastic: () => Wq,
        outExpo: () => Pq,
        outQuad: () => mq,
        outQuart: () => wq,
        outQuint: () => xq,
        outSine: () => Rq,
        swingFrom: () => jq,
        swingFromTo: () => Xq,
        swingTo: () => zq
    });

    function yq(e) {
        return Math.pow(e, 2)
    }

    function mq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function bq(e) {
        return Math.pow(e, 3)
    }

    function _q(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Tq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Iq(e) {
        return Math.pow(e, 4)
    }

    function wq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Oq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Aq(e) {
        return Math.pow(e, 5)
    }

    function xq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Sq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Cq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Rq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Lq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Nq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Pq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function qq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Fq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Mq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Dq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Gq(e) {
        let t = ht;
        return e * e * ((t + 1) * e - t)
    }

    function Vq(e) {
        let t = ht;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Uq(e) {
        let t = ht;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Bq(e) {
        let t = ht,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Wq(e) {
        let t = ht,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Hq(e) {
        let t = ht,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Xq(e) {
        let t = ht;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function jq(e) {
        let t = ht;
        return e * e * ((t + 1) * e - t)
    }

    function zq(e) {
        let t = ht;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Yq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Xr, ht, pq, vq, hq, gq, Aa = ye(() => {
        "use strict";
        Xr = fe(Oa()), ht = 1.70158, pq = (0, Xr.default)(.25, .1, .25, 1), vq = (0, Xr.default)(.42, 0, 1, 1), hq = (0, Xr.default)(0, 0, .58, 1), gq = (0, Xr.default)(.42, 0, .58, 1)
    });
    var vg = {};
    ke(vg, {
        applyEasing: () => Qq,
        createBezierEasing: () => $q,
        optimizeFloat: () => zr
    });

    function zr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function $q(e) {
        return (0, pg.default)(...e)
    }

    function Qq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : zr(r ? t > 0 ? r(t) : t : t > 0 && e && jr[e] ? jr[e](t) : t)
    }
    var pg, xa = ye(() => {
        "use strict";
        Aa();
        pg = fe(Oa())
    });
    var yg = {};
    ke(yg, {
        createElementState: () => gg,
        ixElements: () => fF,
        mergeActionState: () => Sa
    });

    function gg(e, t, r, n, i) {
        let o = r === Zq ? (0, or.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, or.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Sa(e, t, r, n, i) {
        let o = pF(i);
        return (0, or.mergeIn)(e, [t, lF, r], n, o)
    }

    function pF(e) {
        let {
            config: t
        } = e;
        return dF.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var or, hX, Zq, gX, Jq, eF, tF, rF, nF, iF, oF, aF, sF, uF, cF, hg, lF, fF, dF, mg = ye(() => {
        "use strict";
        or = fe($t());
        Ue();
        ({
            HTML_ELEMENT: hX,
            PLAIN_OBJECT: Zq,
            ABSTRACT_NODE: gX,
            CONFIG_X_VALUE: Jq,
            CONFIG_Y_VALUE: eF,
            CONFIG_Z_VALUE: tF,
            CONFIG_VALUE: rF,
            CONFIG_X_UNIT: nF,
            CONFIG_Y_UNIT: iF,
            CONFIG_Z_UNIT: oF,
            CONFIG_UNIT: aF
        } = Re), {
            IX2_SESSION_STOPPED: sF,
            IX2_INSTANCE_ADDED: uF,
            IX2_ELEMENT_STATE_CHANGED: cF
        } = we, hg = {}, lF = "refState", fF = (e = hg, t = {}) => {
            switch (t.type) {
                case sF:
                    return hg;
                case uF:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, or.getIn)(u, [r, n]) !== n && (u = gg(u, n, s, r, o)),
                        Sa(u, r, a, i, o)
                    }
                case cF:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Sa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        dF = [
            [Jq, nF],
            [eF, iF],
            [tF, oF],
            [rF, aF]
        ]
    });
    var Eg = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var vF = e => e.value;
        Ae.getPluginConfig = vF;
        var hF = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Ae.getPluginDuration = hF;
        var gF = e => e || {
            value: 0
        };
        Ae.getPluginOrigin = gF;
        var yF = e => ({
            value: e.value
        });
        Ae.getPluginDestination = yF;
        var mF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Ae.createPluginInstance = mF;
        var EF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Ae.renderPlugin = EF;
        var bF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Ae.clearPlugin = bF
    });
    var _g = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var _F = e => document.querySelector(`[data-w-id="${e}"]`),
            TF = () => window.Webflow.require("spline"),
            IF = (e, t) => e.filter(r => !t.includes(r)),
            wF = (e, t) => e.value[t];
        xe.getPluginConfig = wF;
        var OF = () => null;
        xe.getPluginDuration = OF;
        var bg = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            AF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = IF(n, o);
                    return s.length ? s.reduce((u, l) => (u[l] = bg[l], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = bg[s], o), {})
            };
        xe.getPluginOrigin = AF;
        var xF = e => e.value;
        xe.getPluginDestination = xF;
        var SF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? _F(n) : null
        };
        xe.createPluginInstance = SF;
        var CF = (e, t, r) => {
            let n = TF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: l
                    } = t;
                    l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        xe.renderPlugin = CF;
        var RF = () => null;
        xe.clearPlugin = RF
    });
    var Ra = c(Ca => {
        "use strict";
        Object.defineProperty(Ca, "__esModule", {
            value: !0
        });
        Ca.normalizeColor = LF;
        var Tg = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function LF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof Tg[o] == "string" ? Tg[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    m = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let h = (1 - Math.abs(2 * p - 1)) * m,
                    E = h * (1 - Math.abs(l / 60 % 2 - 1)),
                    w = p - h / 2,
                    I, S, O;
                l >= 0 && l < 60 ? (I = h, S = E, O = 0) : l >= 60 && l < 120 ? (I = E, S = h, O = 0) : l >= 120 && l < 180 ? (I = 0, S = h, O = E) : l >= 180 && l < 240 ? (I = 0, S = E, O = h) : l >= 240 && l < 300 ? (I = E, S = 0, O = h) : (I = h, S = 0, O = E), t = Math.round((I + w) * 255), r = Math.round((S + w) * 255), n = Math.round((O + w) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    m = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    h = (1 - Math.abs(2 * p - 1)) * m,
                    E = h * (1 - Math.abs(l / 60 % 2 - 1)),
                    w = p - h / 2,
                    I, S, O;
                l >= 0 && l < 60 ? (I = h, S = E, O = 0) : l >= 60 && l < 120 ? (I = E, S = h, O = 0) : l >= 120 && l < 180 ? (I = 0, S = h, O = E) : l >= 180 && l < 240 ? (I = 0, S = E, O = h) : l >= 240 && l < 300 ? (I = E, S = 0, O = h) : (I = h, S = 0, O = E), t = Math.round((I + w) * 255), r = Math.round((S + w) * 255), n = Math.round((O + w) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var Ig = c(Se => {
        "use strict";
        Object.defineProperty(Se, "__esModule", {
            value: !0
        });
        Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
        var NF = Ra(),
            PF = (e, t) => e.value[t];
        Se.getPluginConfig = PF;
        var qF = () => null;
        Se.getPluginDuration = qF;
        var FF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, NF.normalizeColor)(i)
        };
        Se.getPluginOrigin = FF;
        var MF = e => e.value;
        Se.getPluginDestination = MF;
        var DF = () => null;
        Se.createPluginInstance = DF;
        var kF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: l,
                    alpha: m
                } = o,
                p;
            s != null && (p = s + i), a != null && l != null && u != null && m != null && (p = `rgba(${a}, ${u}, ${l}, ${m})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        Se.renderPlugin = kF;
        var GF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Se.clearPlugin = GF
    });
    var wg = c(ri => {
        "use strict";
        var Na = pn().default;
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri.pluginMethodMap = void 0;
        var La = (Ue(), nt(Rf)),
            VF = Na(Eg()),
            UF = Na(_g()),
            BF = Na(Ig()),
            _X = ri.pluginMethodMap = new Map([
                [La.ActionTypeConsts.PLUGIN_LOTTIE, { ...VF
                }],
                [La.ActionTypeConsts.PLUGIN_SPLINE, { ...UF
                }],
                [La.ActionTypeConsts.PLUGIN_VARIABLE, { ...BF
                }]
            ])
    });
    var Og = {};
    ke(Og, {
        clearPlugin: () => ka,
        createPluginInstance: () => HF,
        getPluginConfig: () => qa,
        getPluginDestination: () => Ma,
        getPluginDuration: () => WF,
        getPluginOrigin: () => Fa,
        isPluginType: () => Dt,
        renderPlugin: () => Da
    });

    function Dt(e) {
        return Pa.pluginMethodMap.has(e)
    }
    var Pa, kt, qa, Fa, WF, Ma, HF, Da, ka, Ga = ye(() => {
        "use strict";
        Jn();
        Pa = fe(wg());
        kt = e => t => {
            if (!et) return () => null;
            let r = Pa.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, qa = kt("getPluginConfig"), Fa = kt("getPluginOrigin"), WF = kt("getPluginDuration"), Ma = kt("getPluginDestination"), HF = kt("createPluginInstance"), Da = kt("renderPlugin"), ka = kt("clearPlugin")
    });
    var xg = c((wX, Ag) => {
        function XF(e, t) {
            return e == null || e !== e ? t : e
        }
        Ag.exports = XF
    });
    var Cg = c((OX, Sg) => {
        function jF(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Sg.exports = jF
    });
    var Lg = c((AX, Rg) => {
        function zF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Rg.exports = zF
    });
    var Pg = c((xX, Ng) => {
        var KF = Lg(),
            YF = KF();
        Ng.exports = YF
    });
    var Va = c((SX, qg) => {
        var $F = Pg(),
            QF = Ur();

        function ZF(e, t) {
            return e && $F(e, t, QF)
        }
        qg.exports = ZF
    });
    var Mg = c((CX, Fg) => {
        var JF = Ft();

        function eM(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!JF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Fg.exports = eM
    });
    var Ua = c((RX, Dg) => {
        var tM = Va(),
            rM = Mg(),
            nM = rM(tM);
        Dg.exports = nM
    });
    var Gg = c((LX, kg) => {
        function iM(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        kg.exports = iM
    });
    var Ug = c((NX, Vg) => {
        var oM = Cg(),
            aM = Ua(),
            sM = Ot(),
            uM = Gg(),
            cM = Oe();

        function lM(e, t, r) {
            var n = cM(e) ? oM : uM,
                i = arguments.length < 3;
            return n(e, sM(t, 4), r, i, aM)
        }
        Vg.exports = lM
    });
    var Wg = c((PX, Bg) => {
        var fM = _a(),
            dM = Ot(),
            pM = Ta(),
            vM = Math.max,
            hM = Math.min;

        function gM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = pM(r), i = r < 0 ? vM(n + i, 0) : hM(i, n - 1)), fM(e, dM(t, 3), i, !0)
        }
        Bg.exports = gM
    });
    var Xg = c((qX, Hg) => {
        var yM = ba(),
            mM = Wg(),
            EM = yM(mM);
        Hg.exports = EM
    });

    function jg(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function bM(e, t) {
        if (jg(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !jg(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var Ba, zg = ye(() => {
        "use strict";
        Ba = bM
    });
    var fy = {};
    ke(fy, {
        cleanupHTMLElement: () => y1,
        clearAllStyles: () => g1,
        clearObjectCache: () => DM,
        getActionListProgress: () => E1,
        getAffectedElements: () => za,
        getComputedStyle: () => XM,
        getDestinationValues: () => ZM,
        getElementId: () => UM,
        getInstanceId: () => GM,
        getInstanceOrigin: () => KM,
        getItemConfigByKey: () => QM,
        getMaxDurationItemIndex: () => ly,
        getNamespacedParameterId: () => T1,
        getRenderType: () => sy,
        getStyleProp: () => JM,
        mediaQueriesEqual: () => w1,
        observeStore: () => HM,
        reduceListToGroup: () => b1,
        reifyState: () => BM,
        renderHTMLElement: () => e1,
        shallowEqual: () => Ba,
        shouldAllowMediaQuery: () => I1,
        shouldNamespaceEventParameter: () => _1,
        stringifyTarget: () => O1
    });

    function DM() {
        ni.clear()
    }

    function GM() {
        return "i" + kM++
    }

    function UM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + VM++
    }

    function BM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, si.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function HM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = WM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                s();
                return
            }
            n(l, a) || (a = l, r(a, e))
        }
        return s
    }

    function $g(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function za({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((L, y) => L.concat(za({
            config: {
                target: y
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: m,
            matchSelector: p,
            elementContains: h,
            isSiblingNode: E
        } = i, {
            target: w
        } = e;
        if (!w) return [];
        let {
            id: I,
            objectId: S,
            selector: O,
            selectorGuids: q,
            appliesTo: C,
            useEventTarget: M
        } = $g(w);
        if (S) return [ni.has(S) ? ni.get(S) : ni.set(S, {}).get(S)];
        if (C === jo.PAGE) {
            let L = s(I);
            return L ? [L] : []
        }
        let F = (t ? .action ? .config ? .affectedElements ? ? {})[I || O] || {},
            X = !!(F.id || F.selector),
            K, Y, re, U = t && a($g(t.target));
        if (X ? (K = F.limitAffectedElements, Y = U, re = a(F)) : Y = re = a({
                id: I,
                selector: O,
                selectorGuids: q
            }), t && M) {
            let L = r && (re || M === !0) ? [r] : u(U);
            if (re) {
                if (M === qM) return u(re).filter(y => L.some(N => h(y, N)));
                if (M === Kg) return u(re).filter(y => L.some(N => h(N, y)));
                if (M === Yg) return u(re).filter(y => L.some(N => E(N, y)))
            }
            return L
        }
        return Y == null || re == null ? [] : et && n ? u(re).filter(L => n.contains(L)) : K === Kg ? u(Y, re) : K === PM ? l(u(Y)).filter(p(re)) : K === Yg ? m(u(Y)).filter(p(re)) : u(re)
    }

    function XM({
        element: e,
        actionItem: t
    }) {
        if (!et) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case lr:
            case fr:
            case dr:
            case pr:
            case ci:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function KM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (Dt(s)) return Fa(s)(t[s], n);
        switch (n.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr:
                return t[n.actionTypeId] || Ka[n.actionTypeId];
            case Zr:
                return jM(t[n.actionTypeId], n.config.filters);
            case Jr:
                return zM(t[n.actionTypeId], n.config.fontVariations);
            case iy:
                return {
                    value: (0, gt.default)(parseFloat(o(e, oi)), 1)
                };
            case lr:
                {
                    let a = o(e, ct),
                        u = o(e, lt),
                        l, m;
                    return n.config.widthUnit === xt ? l = Qg.test(a) ? parseFloat(a) : parseFloat(r.width) : l = (0, gt.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === xt ? m = Qg.test(u) ? parseFloat(u) : parseFloat(r.height) : m = (0, gt.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: l,
                        heightValue: m
                    }
                }
            case fr:
            case dr:
            case pr:
                return p1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ci:
                return {
                    value: (0, gt.default)(o(e, ai), r.display)
                };
            case MM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function ZM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (Dt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case sr:
            case ur:
            case cr:
            case Qr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case lr:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!et) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (s === xt) {
                        let m = n(e, ct);
                        i(e, ct, ""), u = o(e, "offsetWidth"), i(e, ct, m)
                    }
                    if (a === xt) {
                        let m = n(e, lt);
                        i(e, lt, ""), l = o(e, "offsetHeight"), i(e, lt, m)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case fr:
            case dr:
            case pr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, l = u(e, a), m = (0, ey.normalizeColor)(l);
                        return {
                            rValue: m.red,
                            gValue: m.green,
                            bValue: m.blue,
                            aValue: m.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case Zr:
                return t.config.filters.reduce(YM, {});
            case Jr:
                return t.config.fontVariations.reduce($M, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function sy(e) {
        if (/^TRANSFORM_/.test(e)) return ry;
        if (/^STYLE_/.test(e)) return Xa;
        if (/^GENERAL_/.test(e)) return Ha;
        if (/^PLUGIN_/.test(e)) return ny
    }

    function JM(e, t) {
        return e === Xa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function e1(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case ry:
                return o1(e, t, r, i, s);
            case Xa:
                return v1(e, t, r, i, o, s);
            case Ha:
                return h1(e, i, s);
            case ny:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (Dt(l)) return Da(l)(u, t, i)
                }
        }
    }

    function o1(e, t, r, n, i) {
        let o = i1.map(a => {
                let u = Ka[a],
                    {
                        xValue: l = u.xValue,
                        yValue: m = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: h = "",
                        yUnit: E = "",
                        zUnit: w = ""
                    } = t[a] || {};
                switch (a) {
                    case sr:
                        return `${IM}(${l}${h}, ${m}${E}, ${p}${w})`;
                    case ur:
                        return `${wM}(${l}${h}, ${m}${E}, ${p}${w})`;
                    case cr:
                        return `${OM}(${l}${h}) ${AM}(${m}${E}) ${xM}(${p}${w})`;
                    case Qr:
                        return `${SM}(${l}${h}, ${m}${E})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Gt(e, At, i), s(e, At, o), u1(n, r) && s(e, Zn, CM)
    }

    function a1(e, t, r, n) {
        let i = (0, si.default)(t, (s, a, u) => `${s} ${u}(${a}${n1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Gt(e, Kr, n), o(e, Kr, i)
    }

    function s1(e, t, r, n) {
        let i = (0, si.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Gt(e, Yr, n), o(e, Yr, i)
    }

    function u1({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === sr && n !== void 0 || e === ur && n !== void 0 || e === cr && (t !== void 0 || r !== void 0)
    }

    function d1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function p1({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = ja[t],
            o = n(e, i),
            s = l1.test(o) ? o : r[i],
            a = d1(f1, s).split($r);
        return {
            rValue: (0, gt.default)(parseInt(a[0], 10), 255),
            gValue: (0, gt.default)(parseInt(a[1], 10), 255),
            bValue: (0, gt.default)(parseInt(a[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(a[3]), 1)
        }
    }

    function v1(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case lr:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: l,
                        heightValue: m
                    } = r;l !== void 0 && (a === xt && (a = "px"), Gt(e, ct, o), s(e, ct, l + a)),
                    m !== void 0 && (u === xt && (u = "px"), Gt(e, lt, o), s(e, lt, m + u));
                    break
                }
            case Zr:
                {
                    a1(e, r, n.config, o);
                    break
                }
            case Jr:
                {
                    s1(e, r, n.config, o);
                    break
                }
            case fr:
            case dr:
            case pr:
                {
                    let a = ja[n.actionTypeId],
                        u = Math.round(r.rValue),
                        l = Math.round(r.gValue),
                        m = Math.round(r.bValue),
                        p = r.aValue;Gt(e, a, o),
                    s(e, a, p >= 1 ? `rgb(${u},${l},${m})` : `rgba(${u},${l},${m},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;Gt(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function h1(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ci:
                {
                    let {
                        value: i
                    } = t.config;i === RM && et ? n(e, ai, wa) : n(e, ai, i);
                    return
                }
        }
    }

    function Gt(e, t, r) {
        if (!et) return;
        let n = ay[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ar);
        if (!s) {
            o(e, ar, n);
            return
        }
        let a = s.split($r).map(oy);
        a.indexOf(n) === -1 && o(e, ar, a.concat(n).join($r))
    }

    function uy(e, t, r) {
        if (!et) return;
        let n = ay[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ar);
        !s || s.indexOf(n) === -1 || o(e, ar, s.split($r).map(oy).filter(a => a !== n).join($r))
    }

    function g1({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                l = i[u];
            l && Zg({
                actionList: l,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Zg({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Zg({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Jg({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Jg({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Jg({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            Dt(o) ? a = u => ka(o)(u, i) : a = cy({
                effect: m1,
                actionTypeId: o,
                elementApi: r
            }), za({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function y1(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === lr) {
            let {
                config: s
            } = t;
            s.widthUnit === xt && n(e, ct, ""), s.heightUnit === xt && n(e, lt, "")
        }
        i(e, ar) && cy({
            effect: uy,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function m1(e, t, r) {
        let {
            setStyle: n
        } = r;
        uy(e, t, r), n(e, t, ""), t === At && n(e, Zn, "")
    }

    function ly(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function E1(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: m
            } = u, p = m[ly(m)], {
                config: h,
                actionTypeId: E
            } = p;
            i.id === p.id && (a = s + o);
            let w = sy(E) === Ha ? 0 : h.duration;
            s += h.delay + w
        }), s > 0 ? zr(a / s) : 0
    }

    function b1({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, ui.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: l
            }) => l.some(s))
        }), (0, ui.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function _1(e, {
        basedOn: t
    }) {
        return e === Je.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Je.MOUSE_MOVE && t === st.ELEMENT
    }

    function T1(e, t) {
        return e + FM + t
    }

    function I1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function w1(e, t) {
        return Ba(e && e.sort(), t && t.sort())
    }

    function O1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Wa + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Wa + r + Wa + n
    }
    var gt, si, ii, ui, ey, _M, TM, IM, wM, OM, AM, xM, SM, CM, RM, oi, Kr, Yr, ct, lt, ty, LM, NM, Kg, PM, Yg, qM, ai, ar, xt, $r, FM, Wa, ry, Ha, Xa, ny, sr, ur, cr, Qr, iy, Zr, Jr, lr, fr, dr, pr, ci, MM, oy, ja, ay, ni, kM, VM, WM, Qg, jM, zM, YM, $M, QM, Ka, t1, r1, n1, i1, c1, l1, f1, cy, dy = ye(() => {
        "use strict";
        gt = fe(xg()), si = fe(Ug()), ii = fe(Xg()), ui = fe($t());
        Ue();
        zg();
        xa();
        ey = fe(Ra());
        Ga();
        Jn();
        ({
            BACKGROUND: _M,
            TRANSFORM: TM,
            TRANSLATE_3D: IM,
            SCALE_3D: wM,
            ROTATE_X: OM,
            ROTATE_Y: AM,
            ROTATE_Z: xM,
            SKEW: SM,
            PRESERVE_3D: CM,
            FLEX: RM,
            OPACITY: oi,
            FILTER: Kr,
            FONT_VARIATION_SETTINGS: Yr,
            WIDTH: ct,
            HEIGHT: lt,
            BACKGROUND_COLOR: ty,
            BORDER_COLOR: LM,
            COLOR: NM,
            CHILDREN: Kg,
            IMMEDIATE_CHILDREN: PM,
            SIBLINGS: Yg,
            PARENT: qM,
            DISPLAY: ai,
            WILL_CHANGE: ar,
            AUTO: xt,
            COMMA_DELIMITER: $r,
            COLON_DELIMITER: FM,
            BAR_DELIMITER: Wa,
            RENDER_TRANSFORM: ry,
            RENDER_GENERAL: Ha,
            RENDER_STYLE: Xa,
            RENDER_PLUGIN: ny
        } = Re), {
            TRANSFORM_MOVE: sr,
            TRANSFORM_SCALE: ur,
            TRANSFORM_ROTATE: cr,
            TRANSFORM_SKEW: Qr,
            STYLE_OPACITY: iy,
            STYLE_FILTER: Zr,
            STYLE_FONT_VARIATION: Jr,
            STYLE_SIZE: lr,
            STYLE_BACKGROUND_COLOR: fr,
            STYLE_BORDER: dr,
            STYLE_TEXT_COLOR: pr,
            GENERAL_DISPLAY: ci,
            OBJECT_VALUE: MM
        } = Ve, oy = e => e.trim(), ja = Object.freeze({
            [fr]: ty,
            [dr]: LM,
            [pr]: NM
        }), ay = Object.freeze({
            [At]: TM,
            [ty]: _M,
            [oi]: oi,
            [Kr]: Kr,
            [ct]: ct,
            [lt]: lt,
            [Yr]: Yr
        }), ni = new Map;
        kM = 1;
        VM = 1;
        WM = (e, t) => e === t;
        Qg = /px/, jM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = t1[n.type]), r), e || {}), zM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = r1[n.type] || n.defaultValue || 0), r), e || {});
        YM = (e, t) => (t && (e[t.type] = t.value || 0), e), $M = (e, t) => (t && (e[t.type] = t.value || 0), e), QM = (e, t, r) => {
            if (Dt(e)) return qa(e)(r, t);
            switch (e) {
                case Zr:
                    {
                        let n = (0, ii.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Jr:
                    {
                        let n = (0, ii.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Ka = {
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ur]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [cr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, t1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), r1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), n1 = (e, t) => {
            let r = (0, ii.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, i1 = Object.keys(Ka);
        c1 = "\\(([^)]+)\\)", l1 = /^rgb/, f1 = RegExp(`rgba?${c1}`);
        cy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case sr:
                case ur:
                case cr:
                case Qr:
                    e(n, At, r);
                    break;
                case Zr:
                    e(n, Kr, r);
                    break;
                case Jr:
                    e(n, Yr, r);
                    break;
                case iy:
                    e(n, oi, r);
                    break;
                case lr:
                    e(n, ct, r), e(n, lt, r);
                    break;
                case fr:
                case dr:
                case pr:
                    e(n, ja[t], r);
                    break;
                case ci:
                    e(n, ai, r);
                    break
            }
        }
    });
    var Vt = c(qe => {
        "use strict";
        var vr = pn().default;
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.IX2VanillaUtils = qe.IX2VanillaPlugins = qe.IX2ElementsReducer = qe.IX2Easings = qe.IX2EasingUtils = qe.IX2BrowserSupport = void 0;
        var A1 = vr((Jn(), nt(sg)));
        qe.IX2BrowserSupport = A1;
        var x1 = vr((Aa(), nt(jr)));
        qe.IX2Easings = x1;
        var S1 = vr((xa(), nt(vg)));
        qe.IX2EasingUtils = S1;
        var C1 = vr((mg(), nt(yg)));
        qe.IX2ElementsReducer = C1;
        var R1 = vr((Ga(), nt(Og)));
        qe.IX2VanillaPlugins = R1;
        var L1 = vr((dy(), nt(fy)));
        qe.IX2VanillaUtils = L1
    });
    var fi, yt, N1, P1, q1, F1, M1, D1, li, py, k1, G1, Ya, V1, U1, B1, W1, vy, hy = ye(() => {
        "use strict";
        Ue();
        fi = fe(Vt()), yt = fe($t()), {
            IX2_RAW_DATA_IMPORTED: N1,
            IX2_SESSION_STOPPED: P1,
            IX2_INSTANCE_ADDED: q1,
            IX2_INSTANCE_STARTED: F1,
            IX2_INSTANCE_REMOVED: M1,
            IX2_ANIMATION_FRAME_CHANGED: D1
        } = we, {
            optimizeFloat: li,
            applyEasing: py,
            createBezierEasing: k1
        } = fi.IX2EasingUtils, {
            RENDER_GENERAL: G1
        } = Re, {
            getItemConfigByKey: Ya,
            getRenderType: V1,
            getStyleProp: U1
        } = fi.IX2VanillaUtils, B1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: m,
                skipToValue: p
            } = e, {
                parameters: h
            } = t.payload, E = Math.max(1 - s, .01), w = h[n];
            w == null && (E = 1, w = a);
            let I = Math.max(w, 0) || 0,
                S = li(I - r),
                O = m ? p : li(r + S * E),
                q = O * 100;
            if (O === r && e.current) return e;
            let C, M, D, F;
            for (let K = 0, {
                    length: Y
                } = i; K < Y; K++) {
                let {
                    keyframe: re,
                    actionItems: U
                } = i[K];
                if (K === 0 && (C = U[0]), q >= re) {
                    C = U[0];
                    let L = i[K + 1],
                        y = L && q !== re;
                    M = y ? L.actionItems[0] : null, y && (D = re / 100, F = (L.keyframe - re) / 100)
                }
            }
            let X = {};
            if (C && !M)
                for (let K = 0, {
                        length: Y
                    } = o; K < Y; K++) {
                    let re = o[K];
                    X[re] = Ya(u, re, C.config)
                } else if (C && M && D !== void 0 && F !== void 0) {
                    let K = (O - D) / F,
                        Y = C.config.easing,
                        re = py(Y, K, l);
                    for (let U = 0, {
                            length: L
                        } = o; U < L; U++) {
                        let y = o[U],
                            N = Ya(u, y, C.config),
                            J = (Ya(u, y, M.config) - N) * re + N;
                        X[y] = J
                    }
                }
            return (0, yt.merge)(e, {
                position: O,
                current: X
            })
        }, W1 = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: l,
                destinationKeys: m,
                pluginDuration: p,
                instanceDelay: h,
                customEasingFn: E,
                skipMotion: w
            } = e, I = u.config.easing, {
                duration: S,
                delay: O
            } = u.config;
            p != null && (S = p), O = h ? ? O, s === G1 ? S = 0 : (o || w) && (S = O = 0);
            let {
                now: q
            } = t.payload;
            if (r && n) {
                let C = q - (i + O);
                if (a) {
                    let K = q - i,
                        Y = S + O,
                        re = li(Math.min(Math.max(0, K / Y), 1));
                    e = (0, yt.set)(e, "verboseTimeElapsed", Y * re)
                }
                if (C < 0) return e;
                let M = li(Math.min(Math.max(0, C / S), 1)),
                    D = py(I, M, E),
                    F = {},
                    X = null;
                return m.length && (X = m.reduce((K, Y) => {
                    let re = l[Y],
                        U = parseFloat(n[Y]) || 0,
                        y = (parseFloat(re) - U) * D + U;
                    return K[Y] = y, K
                }, {})), F.current = X, F.position = M, M === 1 && (F.active = !1, F.complete = !0), (0, yt.merge)(e, F)
            }
            return e
        }, vy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case N1:
                    return t.payload.ixInstances || Object.freeze({});
                case P1:
                    return Object.freeze({});
                case q1:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: m,
                            origin: p,
                            destination: h,
                            immediate: E,
                            verbose: w,
                            continuous: I,
                            parameterId: S,
                            actionGroups: O,
                            smoothing: q,
                            restingValue: C,
                            pluginInstance: M,
                            pluginDuration: D,
                            instanceDelay: F,
                            skipMotion: X,
                            skipToValue: K
                        } = t.payload,
                        {
                            actionTypeId: Y
                        } = i,
                        re = V1(Y),
                        U = U1(re, Y),
                        L = Object.keys(h).filter(N => h[N] != null && typeof h[N] != "string"),
                        {
                            easing: y
                        } = i.config;
                        return (0, yt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: h,
                            destinationKeys: L,
                            immediate: E,
                            verbose: w,
                            current: null,
                            actionItem: i,
                            actionTypeId: Y,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            renderType: re,
                            isCarrier: m,
                            styleProp: U,
                            continuous: I,
                            parameterId: S,
                            actionGroups: O,
                            smoothing: q,
                            restingValue: C,
                            pluginInstance: M,
                            pluginDuration: D,
                            instanceDelay: F,
                            skipMotion: X,
                            skipToValue: K,
                            customEasingFn: Array.isArray(y) && y.length === 4 ? k1(y) : void 0
                        })
                    }
                case F1:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, yt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case M1:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case D1:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? B1 : W1;
                            r = (0, yt.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var H1, X1, j1, gy, yy = ye(() => {
        "use strict";
        Ue();
        ({
            IX2_RAW_DATA_IMPORTED: H1,
            IX2_SESSION_STOPPED: X1,
            IX2_PARAMETER_CHANGED: j1
        } = we), gy = (e = {}, t) => {
            switch (t.type) {
                case H1:
                    return t.payload.ixParameters || {};
                case X1:
                    return {};
                case j1:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var by = {};
    ke(by, {
        default: () => K1
    });
    var my, Ey, z1, K1, _y = ye(() => {
        "use strict";
        my = fe(Xo());
        Nf();
        Jf();
        rd();
        Ey = fe(Vt());
        hy();
        yy();
        ({
            ixElements: z1
        } = Ey.IX2ElementsReducer), K1 = (0, my.combineReducers)({
            ixData: Lf,
            ixRequest: Zf,
            ixSession: td,
            ixElements: z1,
            ixInstances: vy,
            ixParameters: gy
        })
    });
    var Iy = c((QX, Ty) => {
        var Y1 = It(),
            $1 = Oe(),
            Q1 = vt(),
            Z1 = "[object String]";

        function J1(e) {
            return typeof e == "string" || !$1(e) && Q1(e) && Y1(e) == Z1
        }
        Ty.exports = J1
    });
    var Oy = c((ZX, wy) => {
        var eD = Ea(),
            tD = eD("length");
        wy.exports = tD
    });
    var xy = c((JX, Ay) => {
        var rD = "\\ud800-\\udfff",
            nD = "\\u0300-\\u036f",
            iD = "\\ufe20-\\ufe2f",
            oD = "\\u20d0-\\u20ff",
            aD = nD + iD + oD,
            sD = "\\ufe0e\\ufe0f",
            uD = "\\u200d",
            cD = RegExp("[" + uD + rD + aD + sD + "]");

        function lD(e) {
            return cD.test(e)
        }
        Ay.exports = lD
    });
    var My = c((ej, Fy) => {
        var Cy = "\\ud800-\\udfff",
            fD = "\\u0300-\\u036f",
            dD = "\\ufe20-\\ufe2f",
            pD = "\\u20d0-\\u20ff",
            vD = fD + dD + pD,
            hD = "\\ufe0e\\ufe0f",
            gD = "[" + Cy + "]",
            $a = "[" + vD + "]",
            Qa = "\\ud83c[\\udffb-\\udfff]",
            yD = "(?:" + $a + "|" + Qa + ")",
            Ry = "[^" + Cy + "]",
            Ly = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ny = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            mD = "\\u200d",
            Py = yD + "?",
            qy = "[" + hD + "]?",
            ED = "(?:" + mD + "(?:" + [Ry, Ly, Ny].join("|") + ")" + qy + Py + ")*",
            bD = qy + Py + ED,
            _D = "(?:" + [Ry + $a + "?", $a, Ly, Ny, gD].join("|") + ")",
            Sy = RegExp(Qa + "(?=" + Qa + ")|" + _D + bD, "g");

        function TD(e) {
            for (var t = Sy.lastIndex = 0; Sy.test(e);) ++t;
            return t
        }
        Fy.exports = TD
    });
    var ky = c((tj, Dy) => {
        var ID = Oy(),
            wD = xy(),
            OD = My();

        function AD(e) {
            return wD(e) ? OD(e) : ID(e)
        }
        Dy.exports = AD
    });
    var Vy = c((rj, Gy) => {
        var xD = Wn(),
            SD = Hn(),
            CD = Ft(),
            RD = Iy(),
            LD = ky(),
            ND = "[object Map]",
            PD = "[object Set]";

        function qD(e) {
            if (e == null) return 0;
            if (CD(e)) return RD(e) ? LD(e) : e.length;
            var t = SD(e);
            return t == ND || t == PD ? e.size : xD(e).length
        }
        Gy.exports = qD
    });
    var By = c((nj, Uy) => {
        var FD = "Expected a function";

        function MD(e) {
            if (typeof e != "function") throw new TypeError(FD);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Uy.exports = MD
    });
    var Za = c((ij, Wy) => {
        var DD = wt(),
            kD = function() {
                try {
                    var e = DD(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Wy.exports = kD
    });
    var Ja = c((oj, Xy) => {
        var Hy = Za();

        function GD(e, t, r) {
            t == "__proto__" && Hy ? Hy(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Xy.exports = GD
    });
    var zy = c((aj, jy) => {
        var VD = Ja(),
            UD = Pn(),
            BD = Object.prototype,
            WD = BD.hasOwnProperty;

        function HD(e, t, r) {
            var n = e[t];
            (!(WD.call(e, t) && UD(n, r)) || r === void 0 && !(t in e)) && VD(e, t, r)
        }
        jy.exports = HD
    });
    var $y = c((sj, Yy) => {
        var XD = zy(),
            jD = Wr(),
            zD = Gn(),
            Ky = ut(),
            KD = ir();

        function YD(e, t, r, n) {
            if (!Ky(e)) return e;
            t = jD(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = KD(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var m = a[u];
                    l = n ? n(m, u, a) : void 0, l === void 0 && (l = Ky(m) ? m : zD(t[i + 1]) ? [] : {})
                }
                XD(a, u, l), a = a[u]
            }
            return e
        }
        Yy.exports = YD
    });
    var Zy = c((uj, Qy) => {
        var $D = zn(),
            QD = $y(),
            ZD = Wr();

        function JD(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = $D(e, s);
                r(a, s) && QD(o, ZD(s, e), a)
            }
            return o
        }
        Qy.exports = JD
    });
    var em = c((cj, Jy) => {
        var e2 = Dn(),
            t2 = No(),
            r2 = ia(),
            n2 = na(),
            i2 = Object.getOwnPropertySymbols,
            o2 = i2 ? function(e) {
                for (var t = []; e;) e2(t, r2(e)), e = t2(e);
                return t
            } : n2;
        Jy.exports = o2
    });
    var rm = c((lj, tm) => {
        function a2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        tm.exports = a2
    });
    var im = c((fj, nm) => {
        var s2 = ut(),
            u2 = Bn(),
            c2 = rm(),
            l2 = Object.prototype,
            f2 = l2.hasOwnProperty;

        function d2(e) {
            if (!s2(e)) return c2(e);
            var t = u2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !f2.call(e, n)) || r.push(n);
            return r
        }
        nm.exports = d2
    });
    var am = c((dj, om) => {
        var p2 = aa(),
            v2 = im(),
            h2 = Ft();

        function g2(e) {
            return h2(e) ? p2(e, !0) : v2(e)
        }
        om.exports = g2
    });
    var um = c((pj, sm) => {
        var y2 = ra(),
            m2 = em(),
            E2 = am();

        function b2(e) {
            return y2(e, E2, m2)
        }
        sm.exports = b2
    });
    var lm = c((vj, cm) => {
        var _2 = ma(),
            T2 = Ot(),
            I2 = Zy(),
            w2 = um();

        function O2(e, t) {
            if (e == null) return {};
            var r = _2(w2(e), function(n) {
                return [n]
            });
            return t = T2(t), I2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        cm.exports = O2
    });
    var dm = c((hj, fm) => {
        var A2 = Ot(),
            x2 = By(),
            S2 = lm();

        function C2(e, t) {
            return S2(e, x2(A2(t)))
        }
        fm.exports = C2
    });
    var vm = c((gj, pm) => {
        var R2 = Wn(),
            L2 = Hn(),
            N2 = Dr(),
            P2 = Oe(),
            q2 = Ft(),
            F2 = kn(),
            M2 = Bn(),
            D2 = Un(),
            k2 = "[object Map]",
            G2 = "[object Set]",
            V2 = Object.prototype,
            U2 = V2.hasOwnProperty;

        function B2(e) {
            if (e == null) return !0;
            if (q2(e) && (P2(e) || typeof e == "string" || typeof e.splice == "function" || F2(e) || D2(e) || N2(e))) return !e.length;
            var t = L2(e);
            if (t == k2 || t == G2) return !e.size;
            if (M2(e)) return !R2(e).length;
            for (var r in e)
                if (U2.call(e, r)) return !1;
            return !0
        }
        pm.exports = B2
    });
    var gm = c((yj, hm) => {
        var W2 = Ja(),
            H2 = Va(),
            X2 = Ot();

        function j2(e, t) {
            var r = {};
            return t = X2(t, 3), H2(e, function(n, i, o) {
                W2(r, i, t(n, i, o))
            }), r
        }
        hm.exports = j2
    });
    var mm = c((mj, ym) => {
        function z2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        ym.exports = z2
    });
    var bm = c((Ej, Em) => {
        var K2 = Yn();

        function Y2(e) {
            return typeof e == "function" ? e : K2
        }
        Em.exports = Y2
    });
    var Tm = c((bj, _m) => {
        var $2 = mm(),
            Q2 = Ua(),
            Z2 = bm(),
            J2 = Oe();

        function ek(e, t) {
            var r = J2(e) ? $2 : Q2;
            return r(e, Z2(t))
        }
        _m.exports = ek
    });
    var wm = c((_j, Im) => {
        var tk = Ze(),
            rk = function() {
                return tk.Date.now()
            };
        Im.exports = rk
    });
    var xm = c((Tj, Am) => {
        var nk = ut(),
            es = wm(),
            Om = $n(),
            ik = "Expected a function",
            ok = Math.max,
            ak = Math.min;

        function sk(e, t, r) {
            var n, i, o, s, a, u, l = 0,
                m = !1,
                p = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError(ik);
            t = Om(t) || 0, nk(r) && (m = !!r.leading, p = "maxWait" in r, o = p ? ok(Om(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

            function E(F) {
                var X = n,
                    K = i;
                return n = i = void 0, l = F, s = e.apply(K, X), s
            }

            function w(F) {
                return l = F, a = setTimeout(O, t), m ? E(F) : s
            }

            function I(F) {
                var X = F - u,
                    K = F - l,
                    Y = t - X;
                return p ? ak(Y, o - K) : Y
            }

            function S(F) {
                var X = F - u,
                    K = F - l;
                return u === void 0 || X >= t || X < 0 || p && K >= o
            }

            function O() {
                var F = es();
                if (S(F)) return q(F);
                a = setTimeout(O, I(F))
            }

            function q(F) {
                return a = void 0, h && n ? E(F) : (n = i = void 0, s)
            }

            function C() {
                a !== void 0 && clearTimeout(a), l = 0, n = u = i = a = void 0
            }

            function M() {
                return a === void 0 ? s : q(es())
            }

            function D() {
                var F = es(),
                    X = S(F);
                if (n = arguments, i = this, u = F, X) {
                    if (a === void 0) return w(u);
                    if (p) return clearTimeout(a), a = setTimeout(O, t), E(u)
                }
                return a === void 0 && (a = setTimeout(O, t)), s
            }
            return D.cancel = C, D.flush = M, D
        }
        Am.exports = sk
    });
    var Cm = c((Ij, Sm) => {
        var uk = xm(),
            ck = ut(),
            lk = "Expected a function";

        function fk(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(lk);
            return ck(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), uk(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Sm.exports = fk
    });
    var Lm = {};
    ke(Lm, {
        actionListPlaybackChanged: () => gr,
        animationFrameChanged: () => pi,
        clearRequested: () => Mk,
        elementStateChanged: () => us,
        eventListenerAdded: () => di,
        eventStateChanged: () => os,
        instanceAdded: () => as,
        instanceRemoved: () => ss,
        instanceStarted: () => vi,
        mediaQueriesDefined: () => ls,
        parameterChanged: () => hr,
        playbackRequested: () => qk,
        previewRequested: () => Pk,
        rawDataImported: () => ts,
        sessionInitialized: () => rs,
        sessionStarted: () => ns,
        sessionStopped: () => is,
        stopRequested: () => Fk,
        testFrameRendered: () => Dk,
        viewportWidthChanged: () => cs
    });
    var Rm, dk, pk, vk, hk, gk, yk, mk, Ek, bk, _k, Tk, Ik, wk, Ok, Ak, xk, Sk, Ck, Rk, Lk, Nk, ts, rs, ns, is, Pk, qk, Fk, Mk, di, Dk, os, pi, hr, as, vi, ss, us, gr, cs, ls, hi = ye(() => {
        "use strict";
        Ue();
        Rm = fe(Vt()), {
            IX2_RAW_DATA_IMPORTED: dk,
            IX2_SESSION_INITIALIZED: pk,
            IX2_SESSION_STARTED: vk,
            IX2_SESSION_STOPPED: hk,
            IX2_PREVIEW_REQUESTED: gk,
            IX2_PLAYBACK_REQUESTED: yk,
            IX2_STOP_REQUESTED: mk,
            IX2_CLEAR_REQUESTED: Ek,
            IX2_EVENT_LISTENER_ADDED: bk,
            IX2_TEST_FRAME_RENDERED: _k,
            IX2_EVENT_STATE_CHANGED: Tk,
            IX2_ANIMATION_FRAME_CHANGED: Ik,
            IX2_PARAMETER_CHANGED: wk,
            IX2_INSTANCE_ADDED: Ok,
            IX2_INSTANCE_STARTED: Ak,
            IX2_INSTANCE_REMOVED: xk,
            IX2_ELEMENT_STATE_CHANGED: Sk,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Ck,
            IX2_VIEWPORT_WIDTH_CHANGED: Rk,
            IX2_MEDIA_QUERIES_DEFINED: Lk
        } = we, {
            reifyState: Nk
        } = Rm.IX2VanillaUtils, ts = e => ({
            type: dk,
            payload: { ...Nk(e)
            }
        }), rs = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: pk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ns = () => ({
            type: vk
        }), is = () => ({
            type: hk
        }), Pk = ({
            rawData: e,
            defer: t
        }) => ({
            type: gk,
            payload: {
                defer: t,
                rawData: e
            }
        }), qk = ({
            actionTypeId: e = Ve.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: yk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), Fk = e => ({
            type: mk,
            payload: {
                actionListId: e
            }
        }), Mk = () => ({
            type: Ek
        }), di = (e, t) => ({
            type: bk,
            payload: {
                target: e,
                listenerParams: t
            }
        }), Dk = (e = 1) => ({
            type: _k,
            payload: {
                step: e
            }
        }), os = (e, t) => ({
            type: Tk,
            payload: {
                stateKey: e,
                newState: t
            }
        }), pi = (e, t) => ({
            type: Ik,
            payload: {
                now: e,
                parameters: t
            }
        }), hr = (e, t) => ({
            type: wk,
            payload: {
                key: e,
                value: t
            }
        }), as = e => ({
            type: Ok,
            payload: { ...e
            }
        }), vi = (e, t) => ({
            type: Ak,
            payload: {
                instanceId: e,
                time: t
            }
        }), ss = e => ({
            type: xk,
            payload: {
                instanceId: e
            }
        }), us = (e, t, r, n) => ({
            type: Sk,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), gr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: Ck,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), cs = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: Rk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ls = () => ({
            type: Lk
        })
    });
    var Fe = {};
    ke(Fe, {
        elementContains: () => ps,
        getChildElements: () => zk,
        getClosestElement: () => en,
        getProperty: () => Bk,
        getQuerySelector: () => ds,
        getRefType: () => vs,
        getSiblingElements: () => Kk,
        getStyle: () => Uk,
        getValidDocument: () => Hk,
        isSiblingNode: () => jk,
        matchSelector: () => Wk,
        queryDocument: () => Xk,
        setStyle: () => Vk
    });

    function Vk(e, t, r) {
        e.style[t] = r
    }

    function Uk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function Bk(e, t) {
        return e[t]
    }

    function Wk(e) {
        return t => t[fs](e)
    }

    function ds({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Nm) !== -1) {
                let n = e.split(Nm),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(qm)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function Hk(e) {
        return e == null || e === document.documentElement.getAttribute(qm) ? document : null
    }

    function Xk(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ps(e, t) {
        return e.contains(t)
    }

    function jk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function zk(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function Kk(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function vs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? kk : Gk : null
    }
    var Pm, fs, Nm, kk, Gk, qm, en, Fm = ye(() => {
        "use strict";
        Pm = fe(Vt());
        Ue();
        ({
            ELEMENT_MATCHES: fs
        } = Pm.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Nm,
            HTML_ELEMENT: kk,
            PLAIN_OBJECT: Gk,
            WF_PAGE: qm
        } = Re;
        en = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[fs] && r[fs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var hs = c((Aj, Dm) => {
        var Yk = ut(),
            Mm = Object.create,
            $k = function() {
                function e() {}
                return function(t) {
                    if (!Yk(t)) return {};
                    if (Mm) return Mm(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Dm.exports = $k
    });
    var gi = c((xj, km) => {
        function Qk() {}
        km.exports = Qk
    });
    var mi = c((Sj, Gm) => {
        var Zk = hs(),
            Jk = gi();

        function yi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        yi.prototype = Zk(Jk.prototype);
        yi.prototype.constructor = yi;
        Gm.exports = yi
    });
    var Wm = c((Cj, Bm) => {
        var Vm = zt(),
            eG = Dr(),
            tG = Oe(),
            Um = Vm ? Vm.isConcatSpreadable : void 0;

        function rG(e) {
            return tG(e) || eG(e) || !!(Um && e && e[Um])
        }
        Bm.exports = rG
    });
    var jm = c((Rj, Xm) => {
        var nG = Dn(),
            iG = Wm();

        function Hm(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = iG), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? Hm(a, t - 1, r, n, i) : nG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        Xm.exports = Hm
    });
    var Km = c((Lj, zm) => {
        var oG = jm();

        function aG(e) {
            var t = e == null ? 0 : e.length;
            return t ? oG(e, 1) : []
        }
        zm.exports = aG
    });
    var $m = c((Nj, Ym) => {
        function sG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Ym.exports = sG
    });
    var Jm = c((Pj, Zm) => {
        var uG = $m(),
            Qm = Math.max;

        function cG(e, t, r) {
            return t = Qm(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = Qm(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), uG(e, this, a)
                }
        }
        Zm.exports = cG
    });
    var tE = c((qj, eE) => {
        function lG(e) {
            return function() {
                return e
            }
        }
        eE.exports = lG
    });
    var iE = c((Fj, nE) => {
        var fG = tE(),
            rE = Za(),
            dG = Yn(),
            pG = rE ? function(e, t) {
                return rE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: fG(t),
                    writable: !0
                })
            } : dG;
        nE.exports = pG
    });
    var aE = c((Mj, oE) => {
        var vG = 800,
            hG = 16,
            gG = Date.now;

        function yG(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = gG(),
                    i = hG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= vG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        oE.exports = yG
    });
    var uE = c((Dj, sE) => {
        var mG = iE(),
            EG = aE(),
            bG = EG(mG);
        sE.exports = bG
    });
    var lE = c((kj, cE) => {
        var _G = Km(),
            TG = Jm(),
            IG = uE();

        function wG(e) {
            return IG(TG(e, void 0, _G), e + "")
        }
        cE.exports = wG
    });
    var pE = c((Gj, dE) => {
        var fE = sa(),
            OG = fE && new fE;
        dE.exports = OG
    });
    var hE = c((Vj, vE) => {
        function AG() {}
        vE.exports = AG
    });
    var gs = c((Uj, yE) => {
        var gE = pE(),
            xG = hE(),
            SG = gE ? function(e) {
                return gE.get(e)
            } : xG;
        yE.exports = SG
    });
    var EE = c((Bj, mE) => {
        var CG = {};
        mE.exports = CG
    });
    var ys = c((Wj, _E) => {
        var bE = EE(),
            RG = Object.prototype,
            LG = RG.hasOwnProperty;

        function NG(e) {
            for (var t = e.name + "", r = bE[t], n = LG.call(bE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        _E.exports = NG
    });
    var bi = c((Hj, TE) => {
        var PG = hs(),
            qG = gi(),
            FG = 4294967295;

        function Ei(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = FG, this.__views__ = []
        }
        Ei.prototype = PG(qG.prototype);
        Ei.prototype.constructor = Ei;
        TE.exports = Ei
    });
    var wE = c((Xj, IE) => {
        function MG(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        IE.exports = MG
    });
    var AE = c((jj, OE) => {
        var DG = bi(),
            kG = mi(),
            GG = wE();

        function VG(e) {
            if (e instanceof DG) return e.clone();
            var t = new kG(e.__wrapped__, e.__chain__);
            return t.__actions__ = GG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        OE.exports = VG
    });
    var CE = c((zj, SE) => {
        var UG = bi(),
            xE = mi(),
            BG = gi(),
            WG = Oe(),
            HG = vt(),
            XG = AE(),
            jG = Object.prototype,
            zG = jG.hasOwnProperty;

        function _i(e) {
            if (HG(e) && !WG(e) && !(e instanceof UG)) {
                if (e instanceof xE) return e;
                if (zG.call(e, "__wrapped__")) return XG(e)
            }
            return new xE(e)
        }
        _i.prototype = BG.prototype;
        _i.prototype.constructor = _i;
        SE.exports = _i
    });
    var LE = c((Kj, RE) => {
        var KG = bi(),
            YG = gs(),
            $G = ys(),
            QG = CE();

        function ZG(e) {
            var t = $G(e),
                r = QG[t];
            if (typeof r != "function" || !(t in KG.prototype)) return !1;
            if (e === r) return !0;
            var n = YG(r);
            return !!n && e === n[0]
        }
        RE.exports = ZG
    });
    var FE = c((Yj, qE) => {
        var NE = mi(),
            JG = lE(),
            eV = gs(),
            ms = ys(),
            tV = Oe(),
            PE = LE(),
            rV = "Expected a function",
            nV = 8,
            iV = 32,
            oV = 128,
            aV = 256;

        function sV(e) {
            return JG(function(t) {
                var r = t.length,
                    n = r,
                    i = NE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(rV);
                    if (i && !s && ms(o) == "wrapper") var s = new NE([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = ms(o),
                        u = a == "wrapper" ? eV(o) : void 0;
                    u && PE(u[0]) && u[1] == (oV | nV | iV | aV) && !u[4].length && u[9] == 1 ? s = s[ms(u[0])].apply(s, u[3]) : s = o.length == 1 && PE(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var l = arguments,
                        m = l[0];
                    if (s && l.length == 1 && tV(m)) return s.plant(m).value();
                    for (var p = 0, h = r ? t[p].apply(this, l) : m; ++p < r;) h = t[p].call(this, h);
                    return h
                }
            })
        }
        qE.exports = sV
    });
    var DE = c(($j, ME) => {
        var uV = FE(),
            cV = uV();
        ME.exports = cV
    });
    var GE = c((Qj, kE) => {
        function lV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        kE.exports = lV
    });
    var UE = c((Zj, VE) => {
        var fV = GE(),
            Es = $n();

        function dV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), fV(Es(e), t, r)
        }
        VE.exports = dV
    });
    var $E, QE, ZE, JE, pV, vV, hV, gV, yV, mV, EV, bV, _V, TV, IV, wV, OV, AV, xV, eb, tb, SV, CV, RV, rb, LV, NV, nb, PV, bs, ib, BE, WE, ob, rn, qV, ft, ab, FV, We, tt, nn, sb, _s, HE, Ts, MV, tn, DV, kV, GV, ub, XE, VV, jE, UV, BV, WV, zE, Ti, Ii, KE, YE, cb, lb = ye(() => {
        "use strict";
        $E = fe(DE()), QE = fe(Kn()), ZE = fe(UE());
        Ue();
        Is();
        hi();
        JE = fe(Vt()), {
            MOUSE_CLICK: pV,
            MOUSE_SECOND_CLICK: vV,
            MOUSE_DOWN: hV,
            MOUSE_UP: gV,
            MOUSE_OVER: yV,
            MOUSE_OUT: mV,
            DROPDOWN_CLOSE: EV,
            DROPDOWN_OPEN: bV,
            SLIDER_ACTIVE: _V,
            SLIDER_INACTIVE: TV,
            TAB_ACTIVE: IV,
            TAB_INACTIVE: wV,
            NAVBAR_CLOSE: OV,
            NAVBAR_OPEN: AV,
            MOUSE_MOVE: xV,
            PAGE_SCROLL_DOWN: eb,
            SCROLL_INTO_VIEW: tb,
            SCROLL_OUT_OF_VIEW: SV,
            PAGE_SCROLL_UP: CV,
            SCROLLING_IN_VIEW: RV,
            PAGE_FINISH: rb,
            ECOMMERCE_CART_CLOSE: LV,
            ECOMMERCE_CART_OPEN: NV,
            PAGE_START: nb,
            PAGE_SCROLL: PV
        } = Je, bs = "COMPONENT_ACTIVE", ib = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: BE
        } = Re, {
            getNamespacedParameterId: WE
        } = JE.IX2VanillaUtils, ob = e => t => typeof t == "object" && e(t) ? !0 : t, rn = ob(({
            element: e,
            nativeEvent: t
        }) => e === t.target), qV = ob(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ft = (0, $E.default)([rn, qV]), ab = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !MV[i.eventTypeId]) return i
            }
            return null
        }, FV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!ab(e, n)
        }, We = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, l = ab(e, u);
            return l && yr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + BE + n.split(BE)[1],
                actionListId: (0, QE.default)(l, "action.config.actionListId")
            }), yr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), on({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, tt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, nn = {
            handler: tt(ft, We)
        }, sb = { ...nn,
            types: [bs, ib].join(" ")
        }, _s = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], HE = "mouseover mouseout", Ts = {
            types: _s
        }, MV = {
            PAGE_START: nb,
            PAGE_FINISH: rb
        }, tn = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, ZE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), DV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), kV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, GV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = tn(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return DV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, ub = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [bs, ib].indexOf(n) !== -1 ? n === bs : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, XE = e => (t, r) => {
            let n = {
                elementHovered: kV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, VV = e => (t, r) => {
            let n = { ...r,
                elementVisible: GV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, jE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = tn(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = s, m = l === "PX", p = i - o, h = Number((n / p).toFixed(2));
            if (r && r.percentTop === h) return r;
            let E = (m ? u : o * (u || 0) / 100) / p,
                w, I, S = 0;
            r && (w = h > r.percentTop, I = r.scrollingDown !== w, S = I ? h : r.anchorTop);
            let O = a === eb ? h >= S + E : h <= S - E,
                q = { ...r,
                    percentTop: h,
                    inBounds: O,
                    anchorTop: S,
                    scrollingDown: w
                };
            return r && O && (I || q.inBounds !== r.inBounds) && e(t, q) || q
        }, UV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, BV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, WV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, zE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Ti = (e = !0) => ({ ...sb,
            handler: tt(e ? ft : rn, ub((t, r) => r.isActive ? nn.handler(t, r) : r))
        }), Ii = (e = !0) => ({ ...sb,
            handler: tt(e ? ft : rn, ub((t, r) => r.isActive ? r : nn.handler(t, r)))
        }), KE = { ...Ts,
            handler: VV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === tb === r ? (We(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, YE = .05, cb = {
            [_V]: Ti(),
            [TV]: Ii(),
            [bV]: Ti(),
            [EV]: Ii(),
            [AV]: Ti(!1),
            [OV]: Ii(!1),
            [IV]: Ti(),
            [wV]: Ii(),
            [NV]: {
                types: "ecommerce-cart-open",
                handler: tt(ft, We)
            },
            [LV]: {
                types: "ecommerce-cart-close",
                handler: tt(ft, We)
            },
            [pV]: {
                types: "click",
                handler: tt(ft, zE((e, {
                    clickCount: t
                }) => {
                    FV(e) ? t === 1 && We(e) : We(e)
                }))
            },
            [vV]: {
                types: "click",
                handler: tt(ft, zE((e, {
                    clickCount: t
                }) => {
                    t === 2 && We(e)
                }))
            },
            [hV]: { ...nn,
                types: "mousedown"
            },
            [gV]: { ...nn,
                types: "mouseup"
            },
            [yV]: {
                types: HE,
                handler: tt(ft, XE((e, t) => {
                    t.elementHovered && We(e)
                }))
            },
            [mV]: {
                types: HE,
                handler: tt(ft, XE((e, t) => {
                    t.elementHovered || We(e)
                }))
            },
            [xV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: m = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: h = o.clientY,
                        pageX: E = o.pageX,
                        pageY: w = o.pageY
                    } = n, I = a === "X_AXIS", S = n.type === "mouseout", O = m / 100, q = u, C = !1;
                    switch (s) {
                        case st.VIEWPORT:
                            {
                                O = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case st.PAGE:
                            {
                                let {
                                    scrollLeft: M,
                                    scrollTop: D,
                                    scrollWidth: F,
                                    scrollHeight: X
                                } = tn();O = I ? Math.min(M + E, F) / F : Math.min(D + w, X) / X;
                                break
                            }
                        case st.ELEMENT:
                        default:
                            {
                                q = WE(i, u);
                                let M = n.type.indexOf("mouse") === 0;
                                if (M && ft({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let D = t.getBoundingClientRect(),
                                    {
                                        left: F,
                                        top: X,
                                        width: K,
                                        height: Y
                                    } = D;
                                if (!M && !UV({
                                        left: p,
                                        top: h
                                    }, D)) break;C = !0,
                                O = I ? (p - F) / K : (h - X) / Y;
                                break
                            }
                    }
                    return S && (O > 1 - YE || O < YE) && (O = Math.round(O)), (s !== st.ELEMENT || C || C !== o.elementHovered) && (O = l ? 1 - O : O, e.dispatch(hr(q, O))), {
                        elementHovered: C,
                        clientX: p,
                        clientY: h,
                        pageX: E,
                        pageY: w
                    }
                }
            },
            [PV]: {
                types: _s,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = tn(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(hr(r, a))
                }
            },
            [RV]: {
                types: _s,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: l
                    } = tn(), {
                        basedOn: m,
                        selectedAxis: p,
                        continuousParameterGroupId: h,
                        startsEntering: E,
                        startsExiting: w,
                        addEndOffset: I,
                        addStartOffset: S,
                        addOffsetValue: O = 0,
                        endOffsetValue: q = 0
                    } = r, C = p === "X_AXIS";
                    if (m === st.VIEWPORT) {
                        let M = C ? o / a : s / u;
                        return M !== i.scrollPercent && t.dispatch(hr(h, M)), {
                            scrollPercent: M
                        }
                    } else {
                        let M = WE(n, h),
                            D = e.getBoundingClientRect(),
                            F = (S ? O : 0) / 100,
                            X = (I ? q : 0) / 100;
                        F = E ? F : 1 - F, X = w ? X : 1 - X;
                        let K = D.top + Math.min(D.height * F, l),
                            re = D.top + D.height * X - K,
                            U = Math.min(l + re, u),
                            y = Math.min(Math.max(0, l - K), U) / U;
                        return y !== i.scrollPercent && t.dispatch(hr(M, y)), {
                            scrollPercent: y
                        }
                    }
                }
            },
            [tb]: KE,
            [SV]: KE,
            [eb]: { ...Ts,
                handler: jE((e, t) => {
                    t.scrollingDown && We(e)
                })
            },
            [CV]: { ...Ts,
                handler: jE((e, t) => {
                    t.scrollingDown || We(e)
                })
            },
            [rb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(rn, BV(We))
            },
            [nb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: tt(rn, WV(We))
            }
        }
    });
    var xb = {};
    ke(xb, {
        observeRequests: () => cU,
        startActionGroup: () => on,
        startEngine: () => Ci,
        stopActionGroup: () => yr,
        stopAllActionGroups: () => wb,
        stopEngine: () => Ri
    });

    function cU(e) {
        Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: dU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: pU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: vU
        }), Ut({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: hU
        })
    }

    function lU(e) {
        Ut({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ri(e), bb({
                    store: e,
                    elementApi: Fe
                }), Ci({
                    store: e,
                    allowEvents: !0
                }), _b()
            }
        })
    }

    function fU(e, t) {
        let r = Ut({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function dU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Ci({
                store: r,
                rawData: e,
                allowEvents: !0
            }), _b()
        };
        t ? setTimeout(n, 0) : n()
    }

    function _b() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function pU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: m
        } = e;
        if (n && i && m && a) {
            let p = m.actionLists[n];
            p && (m = ZV({
                actionList: p,
                actionItemId: i,
                rawData: m
            }))
        }
        if (Ci({
                store: t,
                rawData: m,
                allowEvents: s,
                testManual: u
            }), n && r === Ve.GENERAL_START_ACTION || ws(r)) {
            yr({
                store: t,
                actionListId: n
            }), Ib({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = on({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: l
            });
            l && p && t.dispatch(gr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function vU({
        actionListId: e
    }, t) {
        e ? yr({
            store: t,
            actionListId: e
        }) : wb({
            store: t
        }), Ri(t)
    }

    function hU(e, t) {
        Ri(t), bb({
            store: t,
            elementApi: Fe
        })
    }

    function Ci({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(ts(t)), i.active || (e.dispatch(rs({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (_U(e), gU(), e.getState().ixSession.hasDefinedMediaQueries && lU(e)), e.dispatch(ns()), yU(e, n))
    }

    function gU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(fb) === -1 && (e.className += ` ${fb}`)
    }

    function yU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(pi(n, o)), t ? fU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ri(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(mU), rU(), e.dispatch(is())
        }
    }

    function mU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function EU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: m
        } = e.getState(), {
            events: p
        } = l, h = p[n], {
            eventTypeId: E
        } = h, w = {}, I = {}, S = [], {
            continuousActionGroups: O
        } = s, {
            id: q
        } = s;
        JV(E, i) && (q = eU(t, q));
        let C = m.hasBoundaryNodes && r ? en(r, Oi) : null;
        O.forEach(M => {
            let {
                keyframe: D,
                actionItems: F
            } = M;
            F.forEach(X => {
                let {
                    actionTypeId: K
                } = X, {
                    target: Y
                } = X.config;
                if (!Y) return;
                let re = Y.boundaryMode ? C : null,
                    U = nU(Y) + Os + K;
                if (I[U] = bU(I[U], D, X), !w[U]) {
                    w[U] = !0;
                    let {
                        config: L
                    } = X;
                    Ai({
                        config: L,
                        event: h,
                        eventTarget: r,
                        elementRoot: re,
                        elementApi: Fe
                    }).forEach(y => {
                        S.push({
                            element: y,
                            key: U
                        })
                    })
                }
            })
        }), S.forEach(({
            element: M,
            key: D
        }) => {
            let F = I[D],
                X = (0, mt.default)(F, "[0].actionItems[0]", {}),
                {
                    actionTypeId: K
                } = X,
                Y = Si(K) ? xs(K)(M, X) : null,
                re = As({
                    element: M,
                    actionItem: X,
                    elementApi: Fe
                }, Y);
            Ss({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: X,
                destination: re,
                continuous: !0,
                parameterId: q,
                actionGroups: F,
                smoothing: a,
                restingValue: u,
                pluginInstance: Y
            })
        })
    }

    function bU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function _U(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        Tb(e), (0, mr.default)(r, (i, o) => {
            let s = cb[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            xU({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && IU(e)
    }

    function IU(e) {
        let t = () => {
            Tb(e)
        };
        TU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(di(window, [r, t]))
        }), t()
    }

    function Tb(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(cs({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function xU({
        logic: e,
        store: t,
        events: r
    }) {
        SU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = wU(r, AU);
        if (!(0, vb.default)(a)) return;
        (0, mr.default)(a, (p, h) => {
            let E = r[h],
                {
                    action: w,
                    id: I,
                    mediaQueries: S = o.mediaQueryKeys
                } = E,
                {
                    actionListId: O
                } = w.config;
            iU(S, o.mediaQueryKeys) || t.dispatch(ls()), w.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(C => {
                let {
                    continuousParameterGroupId: M
                } = C, D = (0, mt.default)(s, `${O}.continuousParameterGroups`, []), F = (0, pb.default)(D, ({
                    id: Y
                }) => Y === M), X = (C.smoothing || 0) / 100, K = (C.restingState || 0) / 100;
                F && p.forEach((Y, re) => {
                    let U = I + Os + re;
                    EU({
                        store: t,
                        eventStateKey: U,
                        eventTarget: Y,
                        eventId: I,
                        eventConfig: C,
                        actionListId: O,
                        parameterGroup: F,
                        smoothing: X,
                        restingValue: K
                    })
                })
            }), (w.actionTypeId === Ve.GENERAL_START_ACTION || ws(w.actionTypeId)) && Ib({
                store: t,
                actionListId: O,
                eventId: I
            })
        });
        let u = p => {
                let {
                    ixSession: h
                } = t.getState();
                OU(a, (E, w, I) => {
                    let S = r[w],
                        O = h.eventState[I],
                        {
                            action: q,
                            mediaQueries: C = o.mediaQueryKeys
                        } = S;
                    if (!xi(C, h.mediaQueryKey)) return;
                    let M = (D = {}) => {
                        let F = i({
                            store: t,
                            element: E,
                            event: S,
                            eventConfig: D,
                            nativeEvent: p,
                            eventStateKey: I
                        }, O);
                        oU(F, O) || t.dispatch(os(I, F))
                    };
                    q.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(S.config) ? S.config : [S.config]).forEach(M) : M()
                })
            },
            l = (0, mb.default)(u, uU),
            m = ({
                target: p = document,
                types: h,
                throttle: E
            }) => {
                h.split(" ").filter(Boolean).forEach(w => {
                    let I = E ? l : u;
                    p.addEventListener(w, I), t.dispatch(di(p, [w, I]))
                })
            };
        Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e)
    }

    function SU(e) {
        if (!sU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = ds(o);
            t[s] || (i === Je.MOUSE_CLICK || i === Je.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Ib({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
                m = (0, mt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!xi(m, i.mediaQueryKey)) return;
            l.forEach(p => {
                let {
                    config: h,
                    actionTypeId: E
                } = p, w = h ? .target ? .useEventTarget === !0 && h ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : h, I = Ai({
                    config: w,
                    event: a,
                    elementApi: Fe
                }), S = Si(E);
                I.forEach(O => {
                    let q = S ? xs(E)(O, p) : null;
                    Ss({
                        destination: As({
                            element: O,
                            actionItem: p,
                            elementApi: Fe
                        }, q),
                        immediate: !0,
                        store: e,
                        element: O,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: q
                    })
                })
            })
        }
    }

    function wb({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, mr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Cs(r, e), i && e.dispatch(gr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function yr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? en(r, Oi) : null;
        (0, mr.default)(o, u => {
            let l = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
                m = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && m) {
                if (a && l && !ps(a, u.element)) return;
                Cs(u, e), u.verbose && e.dispatch(gr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function on({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: m
        } = u, p = m[t] || {}, {
            mediaQueries: h = u.mediaQueryKeys
        } = p, E = (0, mt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: w,
            useFirstGroupAsInitialState: I
        } = E;
        if (!w || !w.length) return !1;
        o >= w.length && (0, mt.default)(p, "config.loop") && (o = 0), o === 0 && I && o++;
        let O = (o === 0 || o === 1 && I) && ws(p.action ? .actionTypeId) ? p.config.delay : void 0,
            q = (0, mt.default)(w, [o, "actionItems"], []);
        if (!q.length || !xi(h, l.mediaQueryKey)) return !1;
        let C = l.hasBoundaryNodes && r ? en(r, Oi) : null,
            M = YV(q),
            D = !1;
        return q.forEach((F, X) => {
            let {
                config: K,
                actionTypeId: Y
            } = F, re = Si(Y), {
                target: U
            } = K;
            if (!U) return;
            let L = U.boundaryMode ? C : null;
            Ai({
                config: K,
                event: p,
                eventTarget: r,
                elementRoot: L,
                elementApi: Fe
            }).forEach((N, k) => {
                let V = re ? xs(Y)(N, F) : null,
                    J = re ? aU(Y)(N, F) : null;
                D = !0;
                let ne = M === X && k === 0,
                    G = $V({
                        element: N,
                        actionItem: F
                    }),
                    W = As({
                        element: N,
                        actionItem: F,
                        elementApi: Fe
                    }, V);
                Ss({
                    store: e,
                    element: N,
                    actionItem: F,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ne,
                    computedStyle: G,
                    destination: W,
                    immediate: s,
                    verbose: a,
                    pluginInstance: V,
                    pluginDuration: J,
                    instanceDelay: O
                })
            })
        }), D
    }

    function Ss(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: l,
            eventId: m
        } = n, p = !u, h = zV(), {
            ixElements: E,
            ixSession: w,
            ixData: I
        } = t.getState(), S = jV(E, i), {
            refState: O
        } = E[S] || {}, q = vs(i), C = w.reducedMotion && Ko[o.actionTypeId], M;
        if (C && u) switch (I.events[m] ? .eventTypeId) {
            case Je.MOUSE_MOVE:
            case Je.MOUSE_MOVE_IN_VIEWPORT:
                M = l;
                break;
            default:
                M = .5;
                break
        }
        let D = QV(i, O, r, o, Fe, a);
        if (t.dispatch(as({
                instanceId: h,
                elementId: S,
                origin: D,
                refType: q,
                skipMotion: C,
                skipToValue: M,
                ...n
            })), Ob(document.body, "ix2-animation-started", h), s) {
            CU(t, h);
            return
        }
        Ut({
            store: t,
            select: ({
                ixInstances: F
            }) => F[h],
            onChange: Ab
        }), p && t.dispatch(vi(h, w.tick))
    }

    function Cs(e, t) {
        Ob(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === Eb && tU(o, n, Fe), t.dispatch(ss(e.id))
    }

    function Ob(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function CU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(vi(t, 0)), e.dispatch(pi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        Ab(n[t], e)
    }

    function Ab(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: l,
            groupIndex: m,
            eventId: p,
            eventTarget: h,
            eventStateKey: E,
            actionListId: w,
            isCarrier: I,
            styleProp: S,
            verbose: O,
            pluginInstance: q
        } = e, {
            ixData: C,
            ixSession: M
        } = t.getState(), {
            events: D
        } = C, F = D[p] || {}, {
            mediaQueries: X = C.mediaQueryKeys
        } = F;
        if (xi(X, M.mediaQueryKey) && (n || r || i)) {
            if (l || u === XV && i) {
                t.dispatch(us(o, a, l, s));
                let {
                    ixElements: K
                } = t.getState(), {
                    ref: Y,
                    refType: re,
                    refState: U
                } = K[o] || {}, L = U && U[a];
                (re === Eb || Si(a)) && KV(Y, U, L, p, s, S, Fe, u, q)
            }
            if (i) {
                if (I) {
                    let K = on({
                        store: t,
                        eventId: p,
                        eventTarget: h,
                        eventStateKey: E,
                        actionListId: w,
                        groupIndex: m + 1,
                        verbose: O
                    });
                    O && !K && t.dispatch(gr({
                        actionListId: w,
                        isPlaying: !1
                    }))
                }
                Cs(e, t)
            }
        }
    }
    var pb, mt, vb, hb, gb, yb, mr, mb, wi, HV, ws, Os, Oi, Eb, XV, fb, Ai, jV, As, Ut, zV, KV, bb, YV, $V, QV, ZV, JV, eU, xi, tU, rU, nU, iU, oU, Si, xs, aU, db, sU, uU, TU, wU, OU, AU, Is = ye(() => {
        "use strict";
        pb = fe(Ia()), mt = fe(Kn()), vb = fe(Vy()), hb = fe(dm()), gb = fe(vm()), yb = fe(gm()), mr = fe(Tm()), mb = fe(Cm());
        Ue();
        wi = fe(Vt());
        hi();
        Fm();
        lb();
        HV = Object.keys(An), ws = e => HV.includes(e), {
            COLON_DELIMITER: Os,
            BOUNDARY_SELECTOR: Oi,
            HTML_ELEMENT: Eb,
            RENDER_GENERAL: XV,
            W_MOD_IX: fb
        } = Re, {
            getAffectedElements: Ai,
            getElementId: jV,
            getDestinationValues: As,
            observeStore: Ut,
            getInstanceId: zV,
            renderHTMLElement: KV,
            clearAllStyles: bb,
            getMaxDurationItemIndex: YV,
            getComputedStyle: $V,
            getInstanceOrigin: QV,
            reduceListToGroup: ZV,
            shouldNamespaceEventParameter: JV,
            getNamespacedParameterId: eU,
            shouldAllowMediaQuery: xi,
            cleanupHTMLElement: tU,
            clearObjectCache: rU,
            stringifyTarget: nU,
            mediaQueriesEqual: iU,
            shallowEqual: oU
        } = wi.IX2VanillaUtils, {
            isPluginType: Si,
            createPluginInstance: xs,
            getPluginDuration: aU
        } = wi.IX2VanillaPlugins, db = navigator.userAgent, sU = db.match(/iPad/i) || db.match(/iPhone/), uU = 12;
        TU = ["resize", "orientationchange"];
        wU = (e, t) => (0, hb.default)((0, yb.default)(e, t), gb.default), OU = (e, t) => {
            (0, mr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + Os + o;
                    t(i, n, s)
                })
            })
        }, AU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ai({
                config: t,
                elementApi: Fe
            })
        }
    });
    var Cb = c(Et => {
        "use strict";
        var RU = pn().default,
            LU = lu().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = Sb;
        Et.init = MU;
        Et.setEnv = FU;
        Et.store = void 0;
        Yl();
        var NU = Xo(),
            PU = LU((_y(), nt(by))),
            Rs = (Is(), nt(xb)),
            qU = RU((hi(), nt(Lm)));
        Et.actions = qU;
        var Ls = Et.store = (0, NU.createStore)(PU.default);

        function FU(e) {
            e() && (0, Rs.observeRequests)(Ls)
        }

        function MU(e) {
            Sb(), (0, Rs.startEngine)({
                store: Ls,
                rawData: e,
                allowEvents: !0
            })
        }

        function Sb() {
            (0, Rs.stopEngine)(Ls)
        }
    });
    var Pb = c((sz, Nb) => {
        "use strict";
        var Rb = Ge(),
            Lb = Cb();
        Lb.setEnv(Rb.env);
        Rb.define("ix2", Nb.exports = function() {
            return Lb
        })
    });
    var Fb = c((uz, qb) => {
        "use strict";
        var Er = Ge();
        Er.define("links", qb.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Er.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                m = /\/$/,
                p, h;
            r.ready = r.design = r.preview = E;

            function E() {
                i = o && Er.env("design"), h = Er.env("slug") || s.pathname || "", Er.scroll.off(I), p = [];
                for (var O = document.links, q = 0; q < O.length; ++q) w(O[q]);
                p.length && (Er.scroll.on(I), I())
            }

            function w(O) {
                if (!O.getAttribute("hreflang")) {
                    var q = i && O.getAttribute("href-disabled") || O.getAttribute("href");
                    if (a.href = q, !(q.indexOf(":") >= 0)) {
                        var C = e(O);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var M = e(a.hash);
                            M.length && p.push({
                                link: C,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(q === "#" || q === "")) {
                            var D = a.href === s.href || q === h || l.test(q) && m.test(h);
                            S(C, u, D)
                        }
                    }
                }
            }

            function I() {
                var O = n.scrollTop(),
                    q = n.height();
                t.each(p, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var M = C.link,
                            D = C.sec,
                            F = D.offset().top,
                            X = D.outerHeight(),
                            K = q * .5,
                            Y = D.is(":visible") && F + X - K >= O && F + K <= O + q;
                        C.active !== Y && (C.active = Y, S(M, u, Y))
                    }
                })
            }

            function S(O, q, C) {
                var M = O.hasClass(q);
                C && M || !C && !M || (C ? O.addClass(q) : O.removeClass(q))
            }
            return r
        })
    });
    var Db = c((cz, Mb) => {
        "use strict";
        var Li = Ge();
        Li.define("scroll", Mb.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = w() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(L) {
                    window.setTimeout(L, 15)
                },
                u = Li.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                m = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")",
                h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                E = document.createElement("style");
            E.appendChild(document.createTextNode(h));

            function w() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;

            function S(L) {
                return I.test(L.hash) && L.host + L.pathname === r.host + r.pathname
            }
            let O = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function q() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || O.matches
            }

            function C(L, y) {
                var N;
                switch (y) {
                    case "add":
                        N = L.attr("tabindex"), N ? L.attr("data-wf-tabindex-swap", N) : L.attr("tabindex", "-1");
                        break;
                    case "remove":
                        N = L.attr("data-wf-tabindex-swap"), N ? (L.attr("tabindex", N), L.removeAttr("data-wf-tabindex-swap")) : L.removeAttr("tabindex");
                        break
                }
                L.toggleClass("wf-force-outline-none", y === "add")
            }

            function M(L) {
                var y = L.currentTarget;
                if (!(Li.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))) {
                    var N = S(y) ? y.hash : "";
                    if (N !== "") {
                        var k = e(N);
                        k.length && (L && (L.preventDefault(), L.stopPropagation()), D(N, L), window.setTimeout(function() {
                            F(k, function() {
                                C(k, "add"), k.get(0).focus({
                                    preventScroll: !0
                                }), C(k, "remove")
                            })
                        }, L ? 0 : 300))
                    }
                }
            }

            function D(L) {
                if (r.hash !== L && n && n.pushState && !(Li.env.chrome && r.protocol === "file:")) {
                    var y = n.state && n.state.hash;
                    y !== L && n.pushState({
                        hash: L
                    }, "", L)
                }
            }

            function F(L, y) {
                var N = i.scrollTop(),
                    k = X(L);
                if (N !== k) {
                    var V = K(L, N, k),
                        J = Date.now(),
                        ne = function() {
                            var G = Date.now() - J;
                            window.scroll(0, Y(N, k, G, V)), G <= V ? a(ne) : typeof y == "function" && y()
                        };
                    a(ne)
                }
            }

            function X(L) {
                var y = e(l),
                    N = y.css("position") === "fixed" ? y.outerHeight() : 0,
                    k = L.offset().top - N;
                if (L.data("scroll") === "mid") {
                    var V = i.height() - N,
                        J = L.outerHeight();
                    J < V && (k -= Math.round((V - J) / 2))
                }
                return k
            }

            function K(L, y, N) {
                if (q()) return 0;
                var k = 1;
                return s.add(L).each(function(V, J) {
                    var ne = parseFloat(J.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (k = ne)
                }), (472.143 * Math.log(Math.abs(y - N) + 125) - 2e3) * k
            }

            function Y(L, y, N, k) {
                return N > k ? y : L + (y - L) * re(N / k)
            }

            function re(L) {
                return L < .5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1
            }

            function U() {
                var {
                    WF_CLICK_EMPTY: L,
                    WF_CLICK_SCROLL: y
                } = t;
                o.on(y, p, M), o.on(L, m, function(N) {
                    N.preventDefault()
                }), document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: U
            }
        })
    });
    var Gb = c((lz, kb) => {
        "use strict";
        var DU = Ge();
        DU.define("touch", kb.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, m;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", E, !1), o.addEventListener("touchcancel", w, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", E, !1), o.addEventListener("mouseout", w, !1);

                function p(S) {
                    var O = S.touches;
                    O && O.length > 1 || (s = !0, O ? (a = !0, l = O[0].clientX) : l = S.clientX, m = l)
                }

                function h(S) {
                    if (s) {
                        if (a && S.type === "mousemove") {
                            S.preventDefault(), S.stopPropagation();
                            return
                        }
                        var O = S.touches,
                            q = O ? O[0].clientX : S.clientX,
                            C = q - m;
                        m = q, Math.abs(C) > u && r && String(r()) === "" && (i("swipe", S, {
                            direction: C > 0 ? "right" : "left"
                        }), w())
                    }
                }

                function E(S) {
                    if (s && (s = !1, a && S.type === "mouseup")) {
                        S.preventDefault(), S.stopPropagation(), a = !1;
                        return
                    }
                }

                function w() {
                    s = !1
                }

                function I() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", E, !1), o.removeEventListener("touchcancel", w, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", E, !1), o.removeEventListener("mouseout", w, !1), o = null
                }
                this.destroy = I
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var Vb = c(Ns => {
        "use strict";
        Object.defineProperty(Ns, "__esModule", {
            value: !0
        });
        Ns.default = kU;

        function kU(e, t, r, n, i, o, s, a, u, l, m, p, h) {
            return function(E) {
                e(E);
                var w = E.form,
                    I = {
                        name: w.attr("data-name") || w.attr("name") || "Untitled Form",
                        pageId: w.attr("data-wf-page-id") || "",
                        elementId: w.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(w.html()),
                        trackingCookies: n()
                    };
                let S = w.attr("data-wf-flow");
                S && (I.wfFlow = S), i(E);
                var O = o(w, I.fields);
                if (O) return s(O);
                if (I.fileUploads = a(w), u(E), !l) {
                    m(E);
                    return
                }
                p.ajax({
                    url: h,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(q) {
                    q && q.code === 200 && (E.success = !0), m(E)
                }).fail(function() {
                    m(E)
                })
            }
        }
    });
    var Bb = c((dz, Ub) => {
        "use strict";
        var Ni = Ge();
        Ni.define("forms", Ub.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, l = /e(-)?mail/i,
                m = /^\S+@\S+$/,
                p = window.alert,
                h = Ni.env(),
                E, w, I, S = /list-manage[1-9]?.com/i,
                O = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                q(), !h && !E && M()
            };

            function q() {
                u = e("html").attr("data-wf-site"), w = "https://webflow.com/api/v1/form/" + u, s && w.indexOf("https://webflow.com") >= 0 && (w = w.replace("https://webflow.com", "https://formdata.webflow.com")), I = `${w}/signFile`, i = e(a + " form"), i.length && i.each(C)
            }

            function C(G, W) {
                var d = e(W),
                    b = e.data(W, a);
                b || (b = e.data(W, a, {
                    form: d
                })), D(b);
                var _ = d.closest("div.w-form");
                b.done = _.find("> .w-form-done"), b.fail = _.find("> .w-form-fail"), b.fileUploads = _.find(".w-file-upload"), b.fileUploads.each(function(Q) {
                    V(Q, b)
                });
                var v = b.form.attr("aria-label") || b.form.attr("data-name") || "Form";
                b.done.attr("aria-label") || b.form.attr("aria-label", v), b.done.attr("tabindex", "-1"), b.done.attr("role", "region"), b.done.attr("aria-label") || b.done.attr("aria-label", v + " success"), b.fail.attr("tabindex", "-1"), b.fail.attr("role", "region"), b.fail.attr("aria-label") || b.fail.attr("aria-label", v + " failure");
                var H = b.action = d.attr("action");
                if (b.handler = null, b.redirect = d.attr("data-redirect"), S.test(H)) {
                    b.handler = y;
                    return
                }
                if (!H) {
                    if (u) {
                        b.handler = (() => {
                            let Q = Vb().default;
                            return Q(D, o, Ni, re, k, X, p, K, F, u, N, e, w)
                        })();
                        return
                    }
                    O()
                }
            }

            function M() {
                E = !0, n.on("submit", a + " form", function(Q) {
                    var ee = e.data(this, a);
                    ee.handler && (ee.evt = Q, ee.handler(ee))
                });
                let G = ".w-checkbox-input",
                    W = ".w-radio-input",
                    d = "w--redirected-checked",
                    b = "w--redirected-focus",
                    _ = "w--redirected-focus-visible",
                    v = ":focus-visible, [data-wf-focus-visible]",
                    H = [
                        ["checkbox", G],
                        ["radio", W]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + G + ")", Q => {
                    e(Q.target).siblings(G).toggleClass(d)
                }), n.on("change", a + ' form input[type="radio"]', Q => {
                    e(`input[name="${Q.target.name}"]:not(${G})`).map((ce, _e) => e(_e).siblings(W).removeClass(d));
                    let ee = e(Q.target);
                    ee.hasClass("w-radio-input") || ee.siblings(W).addClass(d)
                }), H.forEach(([Q, ee]) => {
                    n.on("focus", a + ` form input[type="${Q}"]:not(` + ee + ")", ce => {
                        e(ce.target).siblings(ee).addClass(b), e(ce.target).filter(v).siblings(ee).addClass(_)
                    }), n.on("blur", a + ` form input[type="${Q}"]:not(` + ee + ")", ce => {
                        e(ce.target).siblings(ee).removeClass(`${b} ${_}`)
                    })
                })
            }

            function D(G) {
                var W = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null, G.success = !1, W.prop("disabled", !1), G.label && W.val(G.label)
            }

            function F(G) {
                var W = G.btn,
                    d = G.wait;
                W.prop("disabled", !0), d && (G.label = W.val(), W.val(d))
            }

            function X(G, W) {
                var d = null;
                return W = W || {}, G.find(':input:not([type="submit"]):not([type="file"])').each(function(b, _) {
                    var v = e(_),
                        H = v.attr("type"),
                        Q = v.attr("data-name") || v.attr("name") || "Field " + (b + 1);
                    Q = encodeURIComponent(Q);
                    var ee = v.val();
                    if (H === "checkbox") ee = v.is(":checked");
                    else if (H === "radio") {
                        if (W[Q] === null || typeof W[Q] == "string") return;
                        ee = G.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof ee == "string" && (ee = e.trim(ee)), W[Q] = ee, d = d || U(v, H, Q, ee)
                }), d
            }

            function K(G) {
                var W = {};
                return G.find(':input[type="file"]').each(function(d, b) {
                    var _ = e(b),
                        v = _.attr("data-name") || _.attr("name") || "File " + (d + 1),
                        H = _.attr("data-value");
                    typeof H == "string" && (H = e.trim(H)), W[v] = H
                }), W
            }
            let Y = {
                _mkto_trk: "marketo"
            };

            function re() {
                return document.cookie.split("; ").reduce(function(W, d) {
                    let b = d.split("="),
                        _ = b[0];
                    if (_ in Y) {
                        let v = Y[_],
                            H = b.slice(1).join("=");
                        W[v] = H
                    }
                    return W
                }, {})
            }

            function U(G, W, d, b) {
                var _ = null;
                return W === "password" ? _ = "Passwords cannot be submitted." : G.attr("required") ? b ? l.test(G.attr("type")) && (m.test(b) || (_ = "Please enter a valid email address for: " + d)) : _ = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !b && (_ = "Please confirm you\u2019re not a robot."), _
            }

            function L(G) {
                k(G), N(G)
            }

            function y(G) {
                D(G);
                var W = G.form,
                    d = {};
                if (/^https/.test(o.href) && !/^https/.test(G.action)) {
                    W.attr("method", "post");
                    return
                }
                k(G);
                var b = X(W, d);
                if (b) return p(b);
                F(G);
                var _;
                t.each(d, function(ee, ce) {
                    l.test(ce) && (d.EMAIL = ee), /^((full[ _-]?)?name)$/i.test(ce) && (_ = ee), /^(first[ _-]?name)$/i.test(ce) && (d.FNAME = ee), /^(last[ _-]?name)$/i.test(ce) && (d.LNAME = ee)
                }), _ && !d.FNAME && (_ = _.split(" "), d.FNAME = _[0], d.LNAME = d.LNAME || _[1]);
                var v = G.action.replace("/post?", "/post-json?") + "&c=?",
                    H = v.indexOf("u=") + 2;
                H = v.substring(H, v.indexOf("&", H));
                var Q = v.indexOf("id=") + 3;
                Q = v.substring(Q, v.indexOf("&", Q)), d["b_" + H + "_" + Q] = "", e.ajax({
                    url: v,
                    data: d,
                    dataType: "jsonp"
                }).done(function(ee) {
                    G.success = ee.result === "success" || /already/.test(ee.msg), G.success || console.info("MailChimp error: " + ee.msg), N(G)
                }).fail(function() {
                    N(G)
                })
            }

            function N(G) {
                var W = G.form,
                    d = G.redirect,
                    b = G.success;
                if (b && d) {
                    Ni.location(d);
                    return
                }
                G.done.toggle(b), G.fail.toggle(!b), b ? G.done.focus() : G.fail.focus(), W.toggle(!b), D(G)
            }

            function k(G) {
                G.evt && G.evt.preventDefault(), G.evt = null
            }

            function V(G, W) {
                if (!W.fileUploads || !W.fileUploads[G]) return;
                var d, b = e(W.fileUploads[G]),
                    _ = b.find("> .w-file-upload-default"),
                    v = b.find("> .w-file-upload-uploading"),
                    H = b.find("> .w-file-upload-success"),
                    Q = b.find("> .w-file-upload-error"),
                    ee = _.find(".w-file-upload-input"),
                    ce = _.find(".w-file-upload-label"),
                    _e = ce.children(),
                    ae = Q.find(".w-file-upload-error-msg"),
                    g = H.find(".w-file-upload-file"),
                    B = H.find(".w-file-remove-link"),
                    Z = g.find(".w-file-upload-file-name"),
                    j = ae.attr("data-w-size-error"),
                    de = ae.attr("data-w-type-error"),
                    Me = ae.attr("data-w-generic-error");
                if (h || ce.on("click keydown", function(A) {
                        A.type === "keydown" && A.which !== 13 && A.which !== 32 || (A.preventDefault(), ee.click())
                    }), ce.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) ee.on("click", function(A) {
                    A.preventDefault()
                }), ce.on("click", function(A) {
                    A.preventDefault()
                }), _e.on("click", function(A) {
                    A.preventDefault()
                });
                else {
                    B.on("click keydown", function(A) {
                        if (A.type === "keydown") {
                            if (A.which !== 13 && A.which !== 32) return;
                            A.preventDefault()
                        }
                        ee.removeAttr("data-value"), ee.val(""), Z.html(""), _.toggle(!0), H.toggle(!1), ce.focus()
                    }), ee.on("change", function(A) {
                        d = A.target && A.target.files && A.target.files[0], d && (_.toggle(!1), Q.toggle(!1), v.toggle(!0), v.focus(), Z.text(d.name), R() || F(W), W.fileUploads[G].uploading = !0, J(d, T))
                    });
                    var Xe = ce.outerHeight();
                    ee.height(Xe), ee.width(1)
                }

                function f(A) {
                    var P = A.responseJSON && A.responseJSON.msg,
                        te = Me;
                    typeof P == "string" && P.indexOf("InvalidFileTypeError") === 0 ? te = de : typeof P == "string" && P.indexOf("MaxFileSizeError") === 0 && (te = j), ae.text(te), ee.removeAttr("data-value"), ee.val(""), v.toggle(!1), _.toggle(!0), Q.toggle(!0), Q.focus(), W.fileUploads[G].uploading = !1, R() || D(W)
                }

                function T(A, P) {
                    if (A) return f(A);
                    var te = P.fileName,
                        oe = P.postData,
                        he = P.fileId,
                        z = P.s3Url;
                    ee.attr("data-value", he), ne(z, oe, d, te, x)
                }

                function x(A) {
                    if (A) return f(A);
                    v.toggle(!1), H.css("display", "inline-block"), H.focus(), W.fileUploads[G].uploading = !1, R() || D(W)
                }

                function R() {
                    var A = W.fileUploads && W.fileUploads.toArray() || [];
                    return A.some(function(P) {
                        return P.uploading
                    })
                }
            }

            function J(G, W) {
                var d = new URLSearchParams({
                    name: G.name,
                    size: G.size
                });
                e.ajax({
                    type: "GET",
                    url: `${I}?${d}`,
                    crossDomain: !0
                }).done(function(b) {
                    W(null, b)
                }).fail(function(b) {
                    W(b)
                })
            }

            function ne(G, W, d, b, _) {
                var v = new FormData;
                for (var H in W) v.append(H, W[H]);
                v.append("file", d, b), e.ajax({
                    type: "POST",
                    url: G,
                    data: v,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    _(null)
                }).fail(function(Q) {
                    _(Q)
                })
            }
            return r
        })
    });
    var Hb = c((pz, Wb) => {
        "use strict";
        var St = Ge(),
            GU = _r(),
            Ce = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        St.define("navbar", Wb.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                s = t.debounce,
                a, u, l, m, p = St.env(),
                h = '<div class="w-nav-overlay" data-wf-ignore />',
                E = ".w-nav",
                w = "w--open",
                I = "w--nav-dropdown-open",
                S = "w--nav-dropdown-toggle-open",
                O = "w--nav-dropdown-list-open",
                q = "w--nav-link-open",
                C = GU.triggers,
                M = e();
            r.ready = r.design = r.preview = D, r.destroy = function() {
                M = e(), F(), u && u.length && u.each(re)
            };

            function D() {
                l = p && St.env("design"), m = St.env("editor"), a = e(document.body), u = o.find(E), u.length && (u.each(Y), F(), X())
            }

            function F() {
                St.resize.off(K)
            }

            function X() {
                St.resize.on(K)
            }

            function K() {
                u.each(_)
            }

            function Y(g, B) {
                var Z = e(B),
                    j = e.data(B, E);
                j || (j = e.data(B, E, {
                    open: !1,
                    el: Z,
                    config: {},
                    selectedIdx: -1
                })), j.menu = Z.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = Z.find(".w-nav-button"), j.container = Z.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + g, j.outside = d(j);
                var de = Z.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(E), j.button.off(E), j.menu.off(E), y(j), l ? (U(j), j.el.on("setting" + E, N(j))) : (L(j), j.button.on("click" + E, G(j)), j.menu.on("click" + E, "a", W(j)), j.button.on("keydown" + E, k(j)), j.el.on("keydown" + E, V(j))), _(g, B)
            }

            function re(g, B) {
                var Z = e.data(B, E);
                Z && (U(Z), e.removeData(B, E))
            }

            function U(g) {
                g.overlay && (ae(g, !0), g.overlay.remove(), g.overlay = null)
            }

            function L(g) {
                g.overlay || (g.overlay = e(h).appendTo(g.el), g.overlay.attr("id", g.overlayContainerId), g.parent = g.menu.parent(), ae(g, !0))
            }

            function y(g) {
                var B = {},
                    Z = g.config || {},
                    j = B.animation = g.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(j), B.animDirect = /left$/.test(j) ? -1 : 1, Z.animation !== j && g.open && t.defer(ne, g), B.easing = g.el.attr("data-easing") || "ease", B.easing2 = g.el.attr("data-easing2") || "ease";
                var de = g.el.attr("data-duration");
                B.duration = de != null ? Number(de) : 400, B.docHeight = g.el.attr("data-doc-height"), g.config = B
            }

            function N(g) {
                return function(B, Z) {
                    Z = Z || {};
                    var j = i.width();
                    y(g), Z.open === !0 && ce(g, !0), Z.open === !1 && ae(g, !0), g.open && t.defer(function() {
                        j !== i.width() && ne(g)
                    })
                }
            }

            function k(g) {
                return function(B) {
                    switch (B.keyCode) {
                        case Ce.SPACE:
                        case Ce.ENTER:
                            return G(g)(), B.preventDefault(), B.stopPropagation();
                        case Ce.ESCAPE:
                            return ae(g), B.preventDefault(), B.stopPropagation();
                        case Ce.ARROW_RIGHT:
                        case Ce.ARROW_DOWN:
                        case Ce.HOME:
                        case Ce.END:
                            return g.open ? (B.keyCode === Ce.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, J(g), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function V(g) {
                return function(B) {
                    if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), B.keyCode) {
                        case Ce.HOME:
                        case Ce.END:
                            return B.keyCode === Ce.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, J(g), B.preventDefault(), B.stopPropagation();
                        case Ce.ESCAPE:
                            return ae(g), g.button.focus(), B.preventDefault(), B.stopPropagation();
                        case Ce.ARROW_LEFT:
                        case Ce.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), J(g), B.preventDefault(), B.stopPropagation();
                        case Ce.ARROW_RIGHT:
                        case Ce.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), J(g), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function J(g) {
                if (g.links[g.selectedIdx]) {
                    var B = g.links[g.selectedIdx];
                    B.focus(), W(B)
                }
            }

            function ne(g) {
                g.open && (ae(g, !0), ce(g, !0))
            }

            function G(g) {
                return s(function() {
                    g.open ? ae(g) : ce(g)
                })
            }

            function W(g) {
                return function(B) {
                    var Z = e(this),
                        j = Z.attr("href");
                    if (!St.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && g.open && ae(g)
                }
            }

            function d(g) {
                return g.outside && o.off("click" + E, g.outside),
                    function(B) {
                        var Z = e(B.target);
                        m && Z.closest(".w-editor-bem-EditorOverlay").length || b(g, Z)
                    }
            }
            var b = s(function(g, B) {
                if (g.open) {
                    var Z = B.closest(".w-nav-menu");
                    g.menu.is(Z) || ae(g)
                }
            });

            function _(g, B) {
                var Z = e.data(B, E),
                    j = Z.collapsed = Z.button.css("display") !== "none";
                if (Z.open && !j && !l && ae(Z, !0), Z.container.length) {
                    var de = H(Z);
                    Z.links.each(de), Z.dropdowns.each(de)
                }
                Z.open && _e(Z)
            }
            var v = "max-width";

            function H(g) {
                var B = g.container.css(v);
                return B === "none" && (B = ""),
                    function(Z, j) {
                        j = e(j), j.css(v, ""), j.css(v) === "none" && j.css(v, B)
                    }
            }

            function Q(g, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function ee(g, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function ce(g, B) {
                if (g.open) return;
                g.open = !0, g.menu.each(Q), g.links.addClass(q), g.dropdowns.addClass(I), g.dropdownToggle.addClass(S), g.dropdownList.addClass(O), g.button.addClass(w);
                var Z = g.config,
                    j = Z.animation;
                (j === "none" || !n.support.transform || Z.duration <= 0) && (B = !0);
                var de = _e(g),
                    Me = g.menu.outerHeight(!0),
                    Xe = g.menu.outerWidth(!0),
                    f = g.el.height(),
                    T = g.el[0];
                if (_(0, T), C.intro(0, T), St.redraw.up(), l || o.on("click" + E, g.outside), B) {
                    A();
                    return
                }
                var x = "transform " + Z.duration + "ms " + Z.easing;
                if (g.overlay && (M = g.menu.prev(), g.overlay.show().append(g.menu)), Z.animOver) {
                    n(g.menu).add(x).set({
                        x: Z.animDirect * Xe,
                        height: de
                    }).start({
                        x: 0
                    }).then(A), g.overlay && g.overlay.width(Xe);
                    return
                }
                var R = f + Me;
                n(g.menu).add(x).set({
                    y: -R
                }).start({
                    y: 0
                }).then(A);

                function A() {
                    g.button.attr("aria-expanded", "true")
                }
            }

            function _e(g) {
                var B = g.config,
                    Z = B.docHeight ? o.height() : a.height();
                return B.animOver ? g.menu.height(Z) : g.el.css("position") !== "fixed" && (Z -= g.el.outerHeight(!0)), g.overlay && g.overlay.height(Z), Z
            }

            function ae(g, B) {
                if (!g.open) return;
                g.open = !1, g.button.removeClass(w);
                var Z = g.config;
                if ((Z.animation === "none" || !n.support.transform || Z.duration <= 0) && (B = !0), C.outro(0, g.el[0]), o.off("click" + E, g.outside), B) {
                    n(g.menu).stop(), T();
                    return
                }
                var j = "transform " + Z.duration + "ms " + Z.easing2,
                    de = g.menu.outerHeight(!0),
                    Me = g.menu.outerWidth(!0),
                    Xe = g.el.height();
                if (Z.animOver) {
                    n(g.menu).add(j).start({
                        x: Me * Z.animDirect
                    }).then(T);
                    return
                }
                var f = Xe + de;
                n(g.menu).add(j).start({
                    y: -f
                }).then(T);

                function T() {
                    g.menu.height(""), n(g.menu).set({
                        x: 0,
                        y: 0
                    }), g.menu.each(ee), g.links.removeClass(q), g.dropdowns.removeClass(I), g.dropdownToggle.removeClass(S), g.dropdownList.removeClass(O), g.overlay && g.overlay.children().length && (M.length ? g.menu.insertAfter(M) : g.menu.prependTo(g.parent), g.overlay.attr("style", "").hide()), g.el.triggerHandler("w-close"), g.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var zb = c((vz, jb) => {
        "use strict";
        var Ct = Ge(),
            VU = _r(),
            dt = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            Xb = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Ct.define("slider", jb.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, s, a = Ct.env(),
                u = ".w-slider",
                l = '<div class="w-slider-dot" data-wf-ignore />',
                m = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                p = "w-slider-force-show",
                h = VU.triggers,
                E, w = !1;
            r.ready = function() {
                s = Ct.env("design"), I()
            }, r.design = function() {
                s = !0, setTimeout(I, 1e3)
            }, r.preview = function() {
                s = !1, I()
            }, r.redraw = function() {
                w = !0, I(), w = !1
            }, r.destroy = S;

            function I() {
                o = i.find(u), o.length && (o.each(C), !E && (S(), O()))
            }

            function S() {
                Ct.resize.off(q), Ct.redraw.off(r.redraw)
            }

            function O() {
                Ct.resize.on(q), Ct.redraw.on(r.redraw)
            }

            function q() {
                o.filter(":visible").each(V)
            }

            function C(d, b) {
                var _ = e(b),
                    v = e.data(b, u);
                v || (v = e.data(b, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: _,
                    config: {}
                })), v.mask = _.children(".w-slider-mask"), v.left = _.children(".w-slider-arrow-left"), v.right = _.children(".w-slider-arrow-right"), v.nav = _.children(".w-slider-nav"), v.slides = v.mask.children(".w-slide"), v.slides.each(h.reset), w && (v.maskWidth = 0), _.attr("role") === void 0 && _.attr("role", "region"), _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
                var H = v.mask.attr("id");
                if (H || (H = "w-slider-mask-" + d, v.mask.attr("id", H)), !s && !v.ariaLiveLabel && (v.ariaLiveLabel = e(m).appendTo(v.mask)), v.left.attr("role", "button"), v.left.attr("tabindex", "0"), v.left.attr("aria-controls", H), v.left.attr("aria-label") === void 0 && v.left.attr("aria-label", "previous slide"), v.right.attr("role", "button"), v.right.attr("tabindex", "0"), v.right.attr("aria-controls", H), v.right.attr("aria-label") === void 0 && v.right.attr("aria-label", "next slide"), !n.support.transform) {
                    v.left.hide(), v.right.hide(), v.nav.hide(), E = !0;
                    return
                }
                v.el.off(u), v.left.off(u), v.right.off(u), v.nav.off(u), M(v), s ? (v.el.on("setting" + u, y(v)), L(v), v.hasTimer = !1) : (v.el.on("swipe" + u, y(v)), v.left.on("click" + u, K(v)), v.right.on("click" + u, Y(v)), v.left.on("keydown" + u, X(v, K)), v.right.on("keydown" + u, X(v, Y)), v.nav.on("keydown" + u, "> div", y(v)), v.config.autoplay && !v.hasTimer && (v.hasTimer = !0, v.timerCount = 1, U(v)), v.el.on("mouseenter" + u, F(v, !0, "mouse")), v.el.on("focusin" + u, F(v, !0, "keyboard")), v.el.on("mouseleave" + u, F(v, !1, "mouse")), v.el.on("focusout" + u, F(v, !1, "keyboard"))), v.nav.on("click" + u, "> div", y(v)), a || v.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var Q = _.filter(":hidden");
                Q.addClass(p);
                var ee = _.parents(":hidden");
                ee.addClass(p), w || V(d, b), Q.removeClass(p), ee.removeClass(p)
            }

            function M(d) {
                var b = {};
                b.crossOver = 0, b.animation = d.el.attr("data-animation") || "slide", b.animation === "outin" && (b.animation = "cross", b.crossOver = .5), b.easing = d.el.attr("data-easing") || "ease";
                var _ = d.el.attr("data-duration");
                if (b.duration = _ != null ? parseInt(_, 10) : 500, D(d.el.attr("data-infinite")) && (b.infinite = !0), D(d.el.attr("data-disable-swipe")) && (b.disableSwipe = !0), D(d.el.attr("data-hide-arrows")) ? b.hideArrows = !0 : d.config.hideArrows && (d.left.show(), d.right.show()), D(d.el.attr("data-autoplay"))) {
                    b.autoplay = !0, b.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3, b.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var v = "mousedown" + u + " touchstart" + u;
                    s || d.el.off(v).one(v, function() {
                        L(d)
                    })
                }
                var H = d.right.width();
                b.edge = H ? H + 40 : 100, d.config = b
            }

            function D(d) {
                return d === "1" || d === "true"
            }

            function F(d, b, _) {
                return function(v) {
                    if (b) d.hasFocus[_] = b;
                    else if (e.contains(d.el.get(0), v.relatedTarget) || (d.hasFocus[_] = b, d.hasFocus.mouse && _ === "keyboard" || d.hasFocus.keyboard && _ === "mouse")) return;
                    b ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && L(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && U(d))
                }
            }

            function X(d, b) {
                return function(_) {
                    switch (_.keyCode) {
                        case dt.SPACE:
                        case dt.ENTER:
                            return b(d)(), _.preventDefault(), _.stopPropagation()
                    }
                }
            }

            function K(d) {
                return function() {
                    k(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }

            function Y(d) {
                return function() {
                    k(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }

            function re(d, b) {
                var _ = null;
                b === d.slides.length && (I(), J(d)), t.each(d.anchors, function(v, H) {
                    e(v.els).each(function(Q, ee) {
                        e(ee).index() === b && (_ = H)
                    })
                }), _ != null && k(d, {
                    index: _,
                    immediate: !0
                })
            }

            function U(d) {
                L(d);
                var b = d.config,
                    _ = b.timerMax;
                _ && d.timerCount++ > _ || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || s || (Y(d)(), U(d))
                }, b.delay))
            }

            function L(d) {
                window.clearTimeout(d.timerId), d.timerId = null
            }

            function y(d) {
                return function(b, _) {
                    _ = _ || {};
                    var v = d.config;
                    if (s && b.type === "setting") {
                        if (_.select === "prev") return K(d)();
                        if (_.select === "next") return Y(d)();
                        if (M(d), J(d), _.select == null) return;
                        re(d, _.select);
                        return
                    }
                    if (b.type === "swipe") return v.disableSwipe || Ct.env("editor") ? void 0 : _.direction === "left" ? Y(d)() : _.direction === "right" ? K(d)() : void 0;
                    if (d.nav.has(b.target).length) {
                        var H = e(b.target).index();
                        if (b.type === "click" && k(d, {
                                index: H
                            }), b.type === "keydown") switch (b.keyCode) {
                            case dt.ENTER:
                            case dt.SPACE:
                                {
                                    k(d, {
                                        index: H
                                    }),
                                    b.preventDefault();
                                    break
                                }
                            case dt.ARROW_LEFT:
                            case dt.ARROW_UP:
                                {
                                    N(d.nav, Math.max(H - 1, 0)),
                                    b.preventDefault();
                                    break
                                }
                            case dt.ARROW_RIGHT:
                            case dt.ARROW_DOWN:
                                {
                                    N(d.nav, Math.min(H + 1, d.pages)),
                                    b.preventDefault();
                                    break
                                }
                            case dt.HOME:
                                {
                                    N(d.nav, 0),
                                    b.preventDefault();
                                    break
                                }
                            case dt.END:
                                {
                                    N(d.nav, d.pages),
                                    b.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function N(d, b) {
                var _ = d.children().eq(b).focus();
                d.children().not(_)
            }

            function k(d, b) {
                b = b || {};
                var _ = d.config,
                    v = d.anchors;
                d.previous = d.index;
                var H = b.index,
                    Q = {};
                H < 0 ? (H = v.length - 1, _.infinite && (Q.x = -d.endX, Q.from = 0, Q.to = v[0].width)) : H >= v.length && (H = 0, _.infinite && (Q.x = v[v.length - 1].width, Q.from = -v[v.length - 1].x, Q.to = Q.from - Q.x)), d.index = H;
                var ee = d.nav.children().eq(H).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(ee).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), _.hideArrows && (d.index === v.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                var ce = d.offsetX || 0,
                    _e = d.offsetX = -v[d.index].x,
                    ae = {
                        x: _e,
                        opacity: 1,
                        visibility: ""
                    },
                    g = e(v[d.index].els),
                    B = e(v[d.previous] && v[d.previous].els),
                    Z = d.slides.not(g),
                    j = _.animation,
                    de = _.easing,
                    Me = Math.round(_.duration),
                    Xe = b.vector || (d.index > d.previous ? 1 : -1),
                    f = "opacity " + Me + "ms " + de,
                    T = "transform " + Me + "ms " + de;
                if (g.find(Xb).removeAttr("tabindex"), g.removeAttr("aria-hidden"), g.find("*").removeAttr("aria-hidden"), Z.find(Xb).attr("tabindex", "-1"), Z.attr("aria-hidden", "true"), Z.find("*").attr("aria-hidden", "true"), s || (g.each(h.intro), Z.each(h.outro)), b.immediate && !w) {
                    n(g).set(ae), A();
                    return
                }
                if (d.index === d.previous) return;
                if (s || d.ariaLiveLabel.text(`Slide ${H+1} of ${v.length}.`), j === "cross") {
                    var x = Math.round(Me - Me * _.crossOver),
                        R = Math.round(Me - x);
                    f = "opacity " + x + "ms " + de, n(B).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }), n(g).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(f).wait(R).then({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (j === "fade") {
                    n(B).set({
                        visibility: ""
                    }).stop(), n(g).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (j === "over") {
                    ae = {
                        x: d.endX
                    }, n(B).set({
                        visibility: ""
                    }).stop(), n(g).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: _e + v[d.index].width * Xe
                    }).add(T).start({
                        x: _e
                    }).then(A);
                    return
                }
                _.infinite && Q.x ? (n(d.slides.not(B)).set({
                    visibility: "",
                    x: Q.x
                }).add(T).start({
                    x: _e
                }), n(B).set({
                    visibility: "",
                    x: Q.from
                }).add(T).start({
                    x: Q.to
                }), d.shifted = B) : (_.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ce
                }), d.shifted = null), n(d.slides).set({
                    visibility: ""
                }).add(T).start({
                    x: _e
                }));

                function A() {
                    g = e(v[d.index].els), Z = d.slides.not(g), j !== "slide" && (ae.visibility = "hidden"), n(Z).set(ae)
                }
            }

            function V(d, b) {
                var _ = e.data(b, u);
                if (_) {
                    if (G(_)) return J(_);
                    s && W(_) && J(_)
                }
            }

            function J(d) {
                var b = 1,
                    _ = 0,
                    v = 0,
                    H = 0,
                    Q = d.maskWidth,
                    ee = Q - d.config.edge;
                ee < 0 && (ee = 0), d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], d.slides.each(function(_e, ae) {
                    v - _ > ee && (b++, _ += Q, d.anchors[b - 1] = {
                        els: [],
                        x: v,
                        width: 0
                    }), H = e(ae).outerWidth(!0), v += H, d.anchors[b - 1].width += H, d.anchors[b - 1].els.push(ae);
                    var g = _e + 1 + " of " + d.slides.length;
                    e(ae).attr("aria-label", g), e(ae).attr("role", "group")
                }), d.endX = v, s && (d.pages = null), d.nav.length && d.pages !== b && (d.pages = b, ne(d));
                var ce = d.index;
                ce >= b && (ce = b - 1), k(d, {
                    immediate: !0,
                    index: ce
                })
            }

            function ne(d) {
                var b = [],
                    _, v = d.el.attr("data-nav-spacing");
                v && (v = parseFloat(v) + "px");
                for (var H = 0, Q = d.pages; H < Q; H++) _ = e(l), _.attr("aria-label", "Show slide " + (H + 1) + " of " + Q).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), d.nav.hasClass("w-num") && _.text(H + 1), v != null && _.css({
                    "margin-left": v,
                    "margin-right": v
                }), b.push(_);
                d.nav.empty().append(b)
            }

            function G(d) {
                var b = d.mask.width();
                return d.maskWidth !== b ? (d.maskWidth = b, !0) : !1
            }

            function W(d) {
                var b = 0;
                return d.slides.each(function(_, v) {
                    b += e(v).outerWidth(!0)
                }), d.slidesWidth !== b ? (d.slidesWidth = b, !0) : !1
            }
            return r
        })
    });
    var Yb = c((hz, Kb) => {
        "use strict";
        var Rt = Ge(),
            UU = _r();
        Rt.define("tabs", Kb.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, s = Rt.env,
                a = s.safari,
                u = s(),
                l = "data-w-tab",
                m = "data-w-pane",
                p = ".w-tabs",
                h = "w--current",
                E = "w--tab-active",
                w = UU.triggers,
                I = !1;
            t.ready = t.design = t.preview = S, t.redraw = function() {
                I = !0, S(), I = !1
            }, t.destroy = function() {
                i = n.find(p), i.length && (i.each(C), O())
            };

            function S() {
                o = u && Rt.env("design"), i = n.find(p), i.length && (i.each(M), Rt.env("preview") && !I && i.each(C), O(), q())
            }

            function O() {
                Rt.redraw.off(t.redraw)
            }

            function q() {
                Rt.redraw.on(t.redraw)
            }

            function C(U, L) {
                var y = e.data(L, p);
                y && (y.links && y.links.each(w.reset), y.panes && y.panes.each(w.reset))
            }

            function M(U, L) {
                var y = p.substr(1) + "-" + U,
                    N = e(L),
                    k = e.data(L, p);
                if (k || (k = e.data(L, p, {
                        el: N,
                        config: {}
                    })), k.current = null, k.tabIdentifier = y + "-" + l, k.paneIdentifier = y + "-" + m, k.menu = N.children(".w-tab-menu"), k.links = k.menu.children(".w-tab-link"), k.content = N.children(".w-tab-content"), k.panes = k.content.children(".w-tab-pane"), k.el.off(p), k.links.off(p), k.menu.attr("role", "tablist"), k.links.attr("tabindex", "-1"), D(k), !o) {
                    k.links.on("click" + p, X(k)), k.links.on("keydown" + p, K(k));
                    var V = k.links.filter("." + h),
                        J = V.attr(l);
                    J && Y(k, {
                        tab: J,
                        immediate: !0
                    })
                }
            }

            function D(U) {
                var L = {};
                L.easing = U.el.attr("data-easing") || "ease";
                var y = parseInt(U.el.attr("data-duration-in"), 10);
                y = L.intro = y === y ? y : 0;
                var N = parseInt(U.el.attr("data-duration-out"), 10);
                N = L.outro = N === N ? N : 0, L.immediate = !y && !N, U.config = L
            }

            function F(U) {
                var L = U.current;
                return Array.prototype.findIndex.call(U.links, y => y.getAttribute(l) === L, null)
            }

            function X(U) {
                return function(L) {
                    L.preventDefault();
                    var y = L.currentTarget.getAttribute(l);
                    y && Y(U, {
                        tab: y
                    })
                }
            }

            function K(U) {
                return function(L) {
                    var y = F(U),
                        N = L.key,
                        k = {
                            ArrowLeft: y - 1,
                            ArrowUp: y - 1,
                            ArrowRight: y + 1,
                            ArrowDown: y + 1,
                            End: U.links.length - 1,
                            Home: 0
                        };
                    if (N in k) {
                        L.preventDefault();
                        var V = k[N];
                        V === -1 && (V = U.links.length - 1), V === U.links.length && (V = 0);
                        var J = U.links[V],
                            ne = J.getAttribute(l);
                        ne && Y(U, {
                            tab: ne
                        })
                    }
                }
            }

            function Y(U, L) {
                L = L || {};
                var y = U.config,
                    N = y.easing,
                    k = L.tab;
                if (k !== U.current) {
                    U.current = k;
                    var V;
                    U.links.each(function(_, v) {
                        var H = e(v);
                        if (L.immediate || y.immediate) {
                            var Q = U.panes[_];
                            v.id || (v.id = U.tabIdentifier + "-" + _), Q.id || (Q.id = U.paneIdentifier + "-" + _), v.href = "#" + Q.id, v.setAttribute("role", "tab"), v.setAttribute("aria-controls", Q.id), v.setAttribute("aria-selected", "false"), Q.setAttribute("role", "tabpanel"), Q.setAttribute("aria-labelledby", v.id)
                        }
                        v.getAttribute(l) === k ? (V = v, H.addClass(h).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(w.intro)) : H.hasClass(h) && H.removeClass(h).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(w.outro)
                    });
                    var J = [],
                        ne = [];
                    U.panes.each(function(_, v) {
                        var H = e(v);
                        v.getAttribute(l) === k ? J.push(v) : H.hasClass(E) && ne.push(v)
                    });
                    var G = e(J),
                        W = e(ne);
                    if (L.immediate || y.immediate) {
                        G.addClass(E).each(w.intro), W.removeClass(E), I || Rt.redraw.up();
                        return
                    } else {
                        var d = window.scrollX,
                            b = window.scrollY;
                        V.focus(), window.scrollTo(d, b)
                    }
                    W.length && y.outro ? (W.each(w.outro), r(W).add("opacity " + y.outro + "ms " + N, {
                        fallback: a
                    }).start({
                        opacity: 0
                    }).then(() => re(y, W, G))) : re(y, W, G)
                }
            }

            function re(U, L, y) {
                if (L.removeClass(E).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), y.addClass(E).each(w.intro), Rt.redraw.up(), !U.intro) return r(y).set({
                    opacity: 1
                });
                r(y).set({
                    opacity: 0
                }).redraw().add("opacity " + U.intro + "ms " + U.easing, {
                    fallback: a
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    qs();
    Fs();
    Ks();
    $s();
    Zs();
    tu();
    _r();
    Pb();
    Fb();
    Db();
    Gb();
    Bb();
    Hb();
    zb();
    Yb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d84",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d98",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d8f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710781556911
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|717612bc-bfbf-cde0-4a89-262d50618387",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|717612bc-bfbf-cde0-4a89-262d50618387",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-5-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1710862410238
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|095caec7-8a8c-213a-7b7a-e487899f9a9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|095caec7-8a8c-213a-7b7a-e487899f9a9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 1000,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710868369289
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|aea189dc-13f3-44ca-d0e5-3ea2608d332b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|aea189dc-13f3-44ca-d0e5-3ea2608d332b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870233286
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|d54570b4-d1df-1aa4-2f1d-46106d2e4de6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|d54570b4-d1df-1aa4-2f1d-46106d2e4de6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870249631
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|974239e7-406c-2957-fd2a-8070ef3bafcd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|974239e7-406c-2957-fd2a-8070ef3bafcd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870264463
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|273f883a-5fdb-10e3-ac01-b79d4e0b8b47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|273f883a-5fdb-10e3-ac01-b79d4e0b8b47",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870276914
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|d1d9256a-c094-074e-f198-939836c34c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|d1d9256a-c094-074e-f198-939836c34c05",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1710870359269
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|5504f109-1274-bb49-4be3-222d14ab833b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|5504f109-1274-bb49-4be3-222d14ab833b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870529498
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|dde04866-ebe6-7908-1193-db9987b49fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|dde04866-ebe6-7908-1193-db9987b49fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870542745
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|aeede689-3a3e-0af2-d1fc-ea24737e67b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|aeede689-3a3e-0af2-d1fc-ea24737e67b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870560744
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|e73cd286-9196-c8e4-79da-51c19ab9710f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|e73cd286-9196-c8e4-79da-51c19ab9710f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870574027
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|85828b4d-78f3-6cf4-cccb-bbc7ae2a9cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|85828b4d-78f3-6cf4-cccb-bbc7ae2a9cd9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870583930
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cca8c4e0-aeef-1e28-393b-73feda02a303",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cca8c4e0-aeef-1e28-393b-73feda02a303",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870599179
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|850ddacc-fefe-467d-1f5c-3b96519372b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|850ddacc-fefe-467d-1f5c-3b96519372b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870610195
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-45"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d63",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|cb8df726-6044-2511-dbb2-5c25c0b89d63",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870624034
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a612",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a612",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870644877
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a616",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a616",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870666496
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a61a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|495d5bec-f570-a4f0-0bf2-9f979486a61a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870676142
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "966e8cc0-06e2-77ca-8b19-a0a409306397",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "966e8cc0-06e2-77ca-8b19-a0a409306397",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870705562
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "698eae0a-8106-29a2-476b-2f5157645fb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "698eae0a-8106-29a2-476b-2f5157645fb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870718753
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|28815a51-642f-bdcf-0f82-5dcc82389a91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|28815a51-642f-bdcf-0f82-5dcc82389a91",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1710870754464
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|eb6307d8-73d1-d361-c540-e0927bb17715",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|eb6307d8-73d1-d361-c540-e0927bb17715",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710870875967
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afd|456b2b96-0625-9545-cbf8-9b856770fcce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afd|456b2b96-0625-9545-cbf8-9b856770fcce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710918054043
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afd|456b2b96-0625-9545-cbf8-9b856770fcd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afd|456b2b96-0625-9545-cbf8-9b856770fcd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710918065874
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afe|cdf672c3-278f-06d1-4cd7-c4712d891b18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afe|cdf672c3-278f-06d1-4cd7-c4712d891b18",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710918418729
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afe|cdf672c3-278f-06d1-4cd7-c4712d891b1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afe|cdf672c3-278f-06d1-4cd7-c4712d891b1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1710918418729
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|8d834c8d-cb69-8695-9db7-ea26e7043b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|8d834c8d-cb69-8695-9db7-ea26e7043b8e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710932717282
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|5bfb8f2d-3a84-dce5-ae4d-f741ea7e575c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|5bfb8f2d-3a84-dce5-ae4d-f741ea7e575c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710938941474
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1710939969411
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710939969411
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710940514644
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710940514644
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710940589275
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710940589317
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-87"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880249",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880249",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710955920752
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880243",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880243",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710956278628
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880246",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|35a480f2-b836-353c-7c83-30d9b8880246",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710956430495
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|b144073a-ffd3-b81c-9dc9-2b2c3e2757a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|b144073a-ffd3-b81c-9dc9-2b2c3e2757a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710956792765
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|e1c6a23b-05a1-73e9-a4cd-9eedea1bb593",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|e1c6a23b-05a1-73e9-a4cd-9eedea1bb593",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710956908705
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|be2e6351-27da-3fc3-ee84-f09e68de28bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|be2e6351-27da-3fc3-ee84-f09e68de28bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957088508
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|be2e6351-27da-3fc3-ee84-f09e68de28bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|be2e6351-27da-3fc3-ee84-f09e68de28bd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957088509
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|b004f979-a26f-8282-3309-a47bed8df24a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|b004f979-a26f-8282-3309-a47bed8df24a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957520666
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|b004f979-a26f-8282-3309-a47bed8df24a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|b004f979-a26f-8282-3309-a47bed8df24a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957520667
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|ba01d356-ed41-8ced-3fa3-0ea1329e1808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|ba01d356-ed41-8ced-3fa3-0ea1329e1808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957608687
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|ba01d356-ed41-8ced-3fa3-0ea1329e1808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|ba01d356-ed41-8ced-3fa3-0ea1329e1808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957608688
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|f26a7874-1cc6-acbb-b94d-c857085d96bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|f26a7874-1cc6-acbb-b94d-c857085d96bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957662882
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|f26a7874-1cc6-acbb-b94d-c857085d96bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|f26a7874-1cc6-acbb-b94d-c857085d96bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1710957662883
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|a16f7007-f786-aa27-f38d-cacd2c382cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|a16f7007-f786-aa27-f38d-cacd2c382cd5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711009150822
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|25f2812f-ea37-d8c1-10e4-c569244d8d28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|25f2812f-ea37-d8c1-10e4-c569244d8d28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711018916956
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|02cac16e-ca25-dd78-70df-346aebe0ef1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|02cac16e-ca25-dd78-70df-346aebe0ef1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711019393591
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|34b6a202-2268-ed49-0afc-6bbc7b489cc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|34b6a202-2268-ed49-0afc-6bbc7b489cc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020534528
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|34b6a202-2268-ed49-0afc-6bbc7b489cc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|34b6a202-2268-ed49-0afc-6bbc7b489cc9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020534528
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|f8a7a08f-93a0-5026-484a-3cb8f4203e30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|f8a7a08f-93a0-5026-484a-3cb8f4203e30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020535094
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|f8a7a08f-93a0-5026-484a-3cb8f4203e30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|f8a7a08f-93a0-5026-484a-3cb8f4203e30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020535094
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|8ef12a05-78da-86a7-2563-dac3728ea120",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|8ef12a05-78da-86a7-2563-dac3728ea120",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020535612
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|8ef12a05-78da-86a7-2563-dac3728ea120",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|8ef12a05-78da-86a7-2563-dac3728ea120",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020535612
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|dabfb08e-8cbb-4a72-2c9d-4d12d41736e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|dabfb08e-8cbb-4a72-2c9d-4d12d41736e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020536052
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|dabfb08e-8cbb-4a72-2c9d-4d12d41736e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|dabfb08e-8cbb-4a72-2c9d-4d12d41736e5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020536052
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|1c1f3fc2-495c-16e9-218e-0f88057a5461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|1c1f3fc2-495c-16e9-218e-0f88057a5461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020536452
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65f99242020ea87653514afc|1c1f3fc2-495c-16e9-218e-0f88057a5461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65f99242020ea87653514afc|1c1f3fc2-495c-16e9-218e-0f88057a5461",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1711020536452
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "FAQ accordion [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq_answer",
                            "selectorGuids": ["180d8a77-cf79-b876-faef-525947d55f21"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq_answer",
                            "selectorGuids": ["180d8a77-cf79-b876-faef-525947d55f21"]
                        },
                        "widthValue": 100,
                        "widthUnit": "%",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq_icon-wrapper",
                            "selectorGuids": ["180d8a77-cf79-b876-faef-525947d55f26"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1628306749914
        },
        "a-2": {
            "id": "a-2",
            "title": "FAQ accordion [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".faq_answer",
                            "selectorGuids": ["180d8a77-cf79-b876-faef-525947d55f21"]
                        },
                        "widthValue": 100,
                        "heightValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq_icon-wrapper",
                            "selectorGuids": ["180d8a77-cf79-b876-faef-525947d55f26"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1628306749914
        },
        "a-5": {
            "id": "a-5",
            "title": "Scroll-to video-appear",
            "continuousParameterGroups": [{
                "id": "a-5-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-5-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-banner-second-wrapper",
                                "selectorGuids": ["2901672d-6980-0465-4d65-6aa739eb69a9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "zValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 45,
                    "actionItems": [{
                        "id": "a-5-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-video",
                                "selectorGuids": ["fbb42d01-2f94-fb27-5779-f0fe696fafe9"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-5-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-video",
                                "selectorGuids": ["fbb42d01-2f94-fb27-5779-f0fe696fafe9"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-5-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-video",
                                "selectorGuids": ["fbb42d01-2f94-fb27-5779-f0fe696fafe9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-5-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".background-video",
                                "selectorGuids": ["fbb42d01-2f94-fb27-5779-f0fe696fafe9"]
                            },
                            "xValue": 1.5,
                            "yValue": 1.5,
                            "locked": true
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-5-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-banner-second-wrapper",
                                "selectorGuids": ["2901672d-6980-0465-4d65-6aa739eb69a9"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "zValue": 1,
                            "locked": true
                        }
                    }]
                }]
            }],
            "createdOn": 1710861818363
        },
        "a-6": {
            "id": "a-6",
            "title": "Scroll-effect-on-circle",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65f99242020ea87653514afc|d1d9256a-c094-074e-f198-939836c34c05"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "65f99242020ea87653514afc|d1d9256a-c094-074e-f198-939836c34c05"
                            },
                            "xValue": 100,
                            "yValue": 0,
                            "xUnit": "px",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1710870365265
        },
        "a-8": {
            "id": "a-8",
            "title": "Scroll-to-more-img",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.img-big",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "1fd275a6-2da7-81be-5d10-8dc8360bc50c"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "9e0e4723-0bc5-2369-7484-bd8ab21061ce"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "649a6900-5ceb-5177-35bf-60e9d6297146"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "716526c7-a57a-9e10-ef86-ccf42890d5f9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "75168862-7a7a-2d6e-aff1-5711e431192a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "9e0e4723-0bc5-2369-7484-bd8ab21061ce"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "649a6900-5ceb-5177-35bf-60e9d6297146"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "716526c7-a57a-9e10-ef86-ccf42890d5f9"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.img-big",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "1fd275a6-2da7-81be-5d10-8dc8360bc50c"]
                        },
                        "yValue": -200,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "75168862-7a7a-2d6e-aff1-5711e431192a"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "75168862-7a7a-2d6e-aff1-5711e431192a"]
                        },
                        "xValue": -100,
                        "yValue": -160,
                        "xUnit": "%",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "716526c7-a57a-9e10-ef86-ccf42890d5f9"]
                        },
                        "xValue": -180,
                        "yValue": -160,
                        "xUnit": "%",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "649a6900-5ceb-5177-35bf-60e9d6297146"]
                        },
                        "xValue": 100,
                        "yValue": -160,
                        "xUnit": "%",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "9e0e4723-0bc5-2369-7484-bd8ab21061ce"]
                        },
                        "xValue": 180,
                        "yValue": -160,
                        "xUnit": "%",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "75168862-7a7a-2d6e-aff1-5711e431192a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.left-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "716526c7-a57a-9e10-ef86-ccf42890d5f9"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-2",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "649a6900-5ceb-5177-35bf-60e9d6297146"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".phone-banner-img.right-1",
                            "selectorGuids": ["52363211-7b8f-9945-a69e-7da331967511", "9e0e4723-0bc5-2369-7484-bd8ab21061ce"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710932736792
        },
        "a-9": {
            "id": "a-9",
            "title": "Be-betta-logo-animate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "xValue": -150,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "xValue": 3,
                        "yValue": 3,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-img",
                            "selectorGuids": ["210992c6-9ce0-7539-12b0-227edcc184cd"]
                        },
                        "xValue": -100,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-img",
                            "selectorGuids": ["210992c6-9ce0-7539-12b0-227edcc184cd"]
                        },
                        "yValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-img",
                            "selectorGuids": ["210992c6-9ce0-7539-12b0-227edcc184cd"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-img",
                            "selectorGuids": ["210992c6-9ce0-7539-12b0-227edcc184cd"]
                        },
                        "yValue": 360,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".b-img",
                            "selectorGuids": ["856cb753-8504-3899-b572-5b65c5409af2"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710938948353
        },
        "a-10": {
            "id": "a-10",
            "title": "Hover-cricket",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc"
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940216307
        },
        "a-11": {
            "id": "a-11",
            "title": "hover-out-cricket",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|23eb953f-ef2f-5c4f-c6f3-ca3d9dc4d5cc"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940372111
        },
        "a-12": {
            "id": "a-12",
            "title": "Hover-soccer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76"
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940519781
        },
        "a-13": {
            "id": "a-13",
            "title": "Hover-out-soccer",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|10b2d0b7-d4f9-0712-d236-65a46dd33e76"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940557145
        },
        "a-14": {
            "id": "a-14",
            "title": "Hover-kabbadi",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e"
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940594125
        },
        "a-15": {
            "id": "a-15",
            "title": "Hover-out-kabbadi",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65f99242020ea87653514afc|28fe4b08-52e6-124b-8da2-18d2c5c1058e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710940645823
        },
        "a-18": {
            "id": "a-18",
            "title": "Tic-mark-3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710955928785
        },
        "a-16": {
            "id": "a-16",
            "title": "Tick-mark",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-16-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-16-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-16-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-16-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-16-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710943229321
        },
        "a-17": {
            "id": "a-17",
            "title": "Tick-mark-2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710955730960
        },
        "a-19": {
            "id": "a-19",
            "title": "Tic-mark-4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710956797975
        },
        "a-20": {
            "id": "a-20",
            "title": "Tic-mark-5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710956915399
        },
        "a-21": {
            "id": "a-21",
            "title": "Rotate-card-1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "yValue": 0,
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957098028
        },
        "a-22": {
            "id": "a-22",
            "title": "Rotate-out-card-1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957230368
        },
        "a-23": {
            "id": "a-23",
            "title": "Rotate-card-2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957524326
        },
        "a-24": {
            "id": "a-24",
            "title": "Rotate-out-card-2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957555492
        },
        "a-25": {
            "id": "a-25",
            "title": "Rotate-card-3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957612574
        },
        "a-26": {
            "id": "a-26",
            "title": "Rotate-out-card-3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957636341
        },
        "a-27": {
            "id": "a-27",
            "title": "Rotate-card-4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957667522
        },
        "a-28": {
            "id": "a-28",
            "title": "Rotate-out-card-4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".cashless-img-icon",
                            "selectorGuids": ["7766c8e7-98a3-c699-c10e-b93d78683678"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1710957689844
        },
        "a-3": {
            "id": "a-3",
            "title": "Hero-circle-rotate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "id": "65f99242020ea87653514afc|ca0e274c-0fd9-53c2-7fc2-75af0faef14f"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "id": "65f99242020ea87653514afc|ca0e274c-0fd9-53c2-7fc2-75af0faef14f"
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "id": "65f99242020ea87653514afc|ca0e274c-0fd9-53c2-7fc2-75af0faef14f"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1710824284066
        },
        "a-30": {
            "id": "a-30",
            "title": "Tic-mark-6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711018920905
        },
        "a-31": {
            "id": "a-31",
            "title": "Tic-mark-7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-15",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-14",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-13",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t5",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "9b0da331-e6d3-e69d-faa2-3f1697a0e948"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t4",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d9d48335-148c-6ac7-9711-04d3b15922c0"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t3",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "627ad843-ea0c-14b8-589c-61d274fc80d5"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.t2",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "d623c25e-51e7-5b33-c498-825b2cb89a7d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-right-img.bt1",
                            "selectorGuids": ["bfcb87a3-fe7a-489d-cad4-e5d253c4cb85", "1176f6f7-f87e-a8ff-15d9-6f87c708a6c1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.t1",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "7fe2bf22-5079-4471-72b6-353f5f68f0c7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b2",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "bb07e294-0a11-64b8-b83e-12cb3a38287c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b3",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "74d9d76b-aff3-cda2-b197-f8f5e60fef39"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b4",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "469c5c17-b4b8-4410-7473-b37d1711fc2c"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".e-betta-blue-tick.b5",
                            "selectorGuids": ["0f5b780a-0b34-423b-d585-c1a439477baf", "aae3e505-133f-9779-4c46-6ced6296a041"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1711019397373
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});