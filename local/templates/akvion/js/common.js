! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(a) {
        function i(e) {
            if (o[e]) return o[e].exports;
            var t = o[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return a[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        var o = {};
        return i.m = a, i.c = o, i.p = "dist/", i(0)
    }([function(e, t, a) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                }
                return e
            },
            r = i((i(a(1)), a(6))),
            n = i(a(7)),
            s = i(a(8)),
            l = i(a(9)),
            c = i(a(10)),
            u = i(a(11)),
            d = i(a(14)),
            p = [],
            f = !1,
            m = document.all && !window.atob,
            g = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded"
            },
            h = function() {
                if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (f = !0), f) return p = (0, u.default)(p, g), (0, c.default)(p, g.once), p
            },
            v = function() {
                p = (0, d.default)(), h()
            };
        e.exports = {
            init: function(e) {
                return g = o(g, e), p = (0, d.default)(), !0 === (t = g.disable) || "mobile" === t && l.default.mobile() || "phone" === t && l.default.phone() || "tablet" === t && l.default.tablet() || "function" == typeof t && !0 === t() || m ? void p.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", g.easing), document.querySelector("body").setAttribute("data-aos-duration", g.duration), document.querySelector("body").setAttribute("data-aos-delay", g.delay), "DOMContentLoaded" === g.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? h(!0) : "load" === g.startEvent ? window.addEventListener(g.startEvent, function() {
                    h(!0)
                }) : document.addEventListener(g.startEvent, function() {
                    h(!0)
                }), window.addEventListener("resize", (0, n.default)(h, 50, !0)), window.addEventListener("orientationchange", (0, n.default)(h, 50, !0)), window.addEventListener("scroll", (0, r.default)(function() {
                    (0, c.default)(p, g.once)
                }, 99)), document.addEventListener("DOMNodeRemoved", function(e) {
                    var t = e.target;
                    t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, n.default)(v, 50, !0)
                }), (0, s.default)("[data-aos]", v), p);
                var t
            },
            refresh: h,
            refreshHard: v
        }
    }, function(e, t) {}, , , , , function(g, e) {
        (function(e) {
            "use strict";

            function r(i, o, e) {
                function r(e) {
                    var t = c,
                        a = u;
                    return c = u = void 0, g = e, p = i.apply(a, t)
                }

                function n(e) {
                    var t = e - m;
                    return void 0 === m || o <= t || t < 0 || v && d <= e - g
                }

                function s() {
                    var e, t, a = k();
                    return n(a) ? l(a) : void(f = setTimeout(s, (t = o - ((e = a) - m), v ? x(t, d - (e - g)) : t)))
                }

                function l(e) {
                    return f = void 0, a && c ? r(e) : (c = u = void 0, p)
                }

                function t() {
                    var e, t = k(),
                        a = n(t);
                    if (c = arguments, u = this, m = t, a) {
                        if (void 0 === f) return g = e = m, f = setTimeout(s, o), h ? r(e) : p;
                        if (v) return f = setTimeout(s, o), r(m)
                    }
                    return void 0 === f && (f = setTimeout(s, o)), p
                }
                var c, u, d, p, f, m, g = 0,
                    h = !1,
                    v = !1,
                    a = !0;
                if ("function" != typeof i) throw new TypeError(w);
                return o = y(o) || 0, b(e) && (h = !!e.leading, d = (v = "maxWait" in e) ? _(y(e.maxWait) || 0, o) : d, a = "trailing" in e ? !!e.trailing : a), t.cancel = function() {
                    void 0 !== f && clearTimeout(f), c = m = u = f = void(g = 0)
                }, t.flush = function() {
                    return void 0 === f ? p : l(k())
                }, t
            }

            function b(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : a(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : a(t)) && m.call(e) == n;
                var t
            }

            function y(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (b(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = b(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(s, "");
                var a = c.test(e);
                return a || u.test(e) ? d(e.slice(2), a ? 2 : 8) : l.test(e) ? o : +e
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                w = "Expected a function",
                o = NaN,
                n = "[object Symbol]",
                s = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                d = parseInt,
                t = "object" == (void 0 === e ? "undefined" : a(e)) && e && e.Object === Object && e,
                p = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                f = t || p || Function("return this")(),
                m = Object.prototype.toString,
                _ = Math.max,
                x = Math.min,
                k = function() {
                    return f.Date.now()
                };
            g.exports = function(e, t, a) {
                var i = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError(w);
                return b(a) && (i = "leading" in a ? !!a.leading : i, o = "trailing" in a ? !!a.trailing : o), r(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: o
                })
            }
        }).call(e, function() {
            return this
        }())
    }, function(m, e) {
        (function(e) {
            "use strict";

            function b(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return "symbol" == (void 0 === e ? "undefined" : a(e)) || !!(t = e) && "object" == (void 0 === t ? "undefined" : a(t)) && f.call(e) == r;
                var t
            }

            function y(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return o;
                if (b(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = b(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(n, "");
                var a = l.test(e);
                return a || c.test(e) ? u(e.slice(2), a ? 2 : 8) : s.test(e) ? o : +e
            }
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = NaN,
                r = "[object Symbol]",
                n = /^\s+|\s+$/g,
                s = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt,
                t = "object" == (void 0 === e ? "undefined" : a(e)) && e && e.Object === Object && e,
                d = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
                p = t || d || Function("return this")(),
                f = Object.prototype.toString,
                w = Math.max,
                _ = Math.min,
                x = function() {
                    return p.Date.now()
                };
            m.exports = function(i, o, e) {
                function r(e) {
                    var t = c,
                        a = u;
                    return c = u = void 0, g = e, p = i.apply(a, t)
                }

                function n(e) {
                    var t = e - m;
                    return void 0 === m || o <= t || t < 0 || v && d <= e - g
                }

                function s() {
                    var e, t, a = x();
                    return n(a) ? l(a) : void(f = setTimeout(s, (t = o - ((e = a) - m), v ? _(t, d - (e - g)) : t)))
                }

                function l(e) {
                    return f = void 0, a && c ? r(e) : (c = u = void 0, p)
                }

                function t() {
                    var e, t = x(),
                        a = n(t);
                    if (c = arguments, u = this, m = t, a) {
                        if (void 0 === f) return g = e = m, f = setTimeout(s, o), h ? r(e) : p;
                        if (v) return f = setTimeout(s, o), r(m)
                    }
                    return void 0 === f && (f = setTimeout(s, o)), p
                }
                var c, u, d, p, f, m, g = 0,
                    h = !1,
                    v = !1,
                    a = !0;
                if ("function" != typeof i) throw new TypeError("Expected a function");
                return o = y(o) || 0, b(e) && (h = !!e.leading, d = (v = "maxWait" in e) ? w(y(e.maxWait) || 0, o) : d, a = "trailing" in e ? !!e.trailing : a), t.cancel = function() {
                    void 0 !== f && clearTimeout(f), c = m = u = f = void(g = 0)
                }, t.flush = function() {
                    return void 0 === f ? p : l(x())
                }, t
            }
        }).call(e, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function a() {
            for (var e, t, a = 0, i = l.length; a < i; a++) {
                e = l[a];
                for (var o, r = 0, n = (t = s.querySelectorAll(e.selector)).length; r < n; r++)(o = t[r]).ready || (o.ready = !0, e.fn.call(o, o))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = window.document,
            i = window.MutationObserver || window.WebKitMutationObserver,
            l = [],
            o = void 0;
        t.default = function(e, t) {
            l.push({
                selector: e,
                fn: t
            }), !o && i && (o = new i(a)).observe(s.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            }), a()
        }
    }, function(e, t) {
        "use strict";

        function a() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function i(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var i = t[a];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(e, t, a) {
                    return t && i(e.prototype, t), a && i(e, a), e
                }
            }(),
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = a();
                        return !(!o.test(e) && !r.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = a();
                        return !(!n.test(e) && !s.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e, n) {
            var s = window.pageYOffset,
                l = window.innerHeight;
            e.forEach(function(e, t) {
                var a, i, o, r;
                i = l + s, o = n, r = (a = e).node.getAttribute("data-aos-once"), i > a.position ? a.node.classList.add("aos-animate") : void 0 !== r && ("false" === r || !o && "true" !== r) && a.node.classList.remove("aos-animate")
            })
        }
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = a(12),
            r = (i = o) && i.__esModule ? i : {
                default: i
            };
        t.default = function(e, a) {
            return e.forEach(function(e, t) {
                e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, a.offset)
            }), e
        }
    }, function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = a(13),
            n = (i = o) && i.__esModule ? i : {
                default: i
            };
        t.default = function(e, t) {
            var a = 0,
                i = 0,
                o = window.innerHeight,
                r = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
            switch (r.offset && !isNaN(r.offset) && (i = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), a = (0, n.default)(e).top, r.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    a += e.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    a += e.offsetHeight;
                    break;
                case "top-center":
                    a += o / 2;
                    break;
                case "bottom-center":
                    a += o / 2 + e.offsetHeight;
                    break;
                case "center-center":
                    a += o / 2 + e.offsetHeight / 2;
                    break;
                case "top-top":
                    a += o;
                    break;
                case "bottom-top":
                    a += e.offsetHeight + o;
                    break;
                case "center-top":
                    a += e.offsetHeight / 2 + o
            }
            return r.anchorPlacement || r.offset || isNaN(t) || (i = t), a + i
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            for (var t = 0, a = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), a += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: a,
                left: t
            }
        }
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function(e) {
            e = e || document.querySelectorAll("[data-aos]");
            var a = [];
            return [].forEach.call(e, function(e, t) {
                a.push({
                    node: e
                })
            }), a
        }
    }])
}),
function(t) {
    function s(e) {
        var t = e.length,
            a = u.type(e);
        return "function" !== a && !u.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === a || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    if (!t.jQuery) {
        var u = function(e, t) {
            return new u.fn.init(e, t)
        };
        u.isWindow = function(e) {
            return null != e && e == e.window
        }, u.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }, u.isArray = Array.isArray || function(e) {
            return "array" === u.type(e)
        }, u.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== u.type(e) || e.nodeType || u.isWindow(e)) return !1;
            try {
                if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || i.call(e, t)
        }, u.each = function(e, t, a) {
            var i = 0,
                o = e.length,
                r = s(e);
            if (a) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], a); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], a)) break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        }, u.data = function(e, t, a) {
            if (void 0 === a) {
                var i = (o = e[u.expando]) && r[o];
                if (void 0 === t) return i;
                if (i && t in i) return i[t]
            } else if (void 0 !== t) {
                var o = e[u.expando] || (e[u.expando] = ++u.uuid);
                return r[o] = r[o] || {}, r[o][t] = a
            }
        }, u.removeData = function(e, t) {
            var a = e[u.expando],
                i = a && r[a];
            i && u.each(t, function(e, t) {
                delete i[t]
            })
        }, u.extend = function() {
            var e, t, a, i, o, r, n = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof n && (c = n, n = arguments[s] || {}, s++), "object" != typeof n && "function" !== u.type(n) && (n = {}), s === l && (n = this, s--); s < l; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = n[i], n !== (a = o[i]) && (c && a && (u.isPlainObject(a) || (t = u.isArray(a))) ? (r = t ? (t = !1, e && u.isArray(e) ? e : []) : e && u.isPlainObject(e) ? e : {}, n[i] = u.extend(c, r, a)) : void 0 !== a && (n[i] = a));
            return n
        }, u.queue = function(e, t, a) {
            if (e) {
                t = (t || "fx") + "queue";
                var i = u.data(e, t);
                return a ? (!i || u.isArray(a) ? i = u.data(e, t, (n = r || [], null != (o = a) && (s(Object(o)) ? function(e, t) {
                    for (var a = +t.length, i = 0, o = e.length; i < a;) e[o++] = t[i++];
                    if (a != a)
                        for (; void 0 !== t[i];) e[o++] = t[i++];
                    e.length = o
                }(n, "string" == typeof o ? [o] : o) : [].push.call(n, o)), n)) : i.push(a), i) : i || []
            }
            var o, r, n
        }, u.dequeue = function(e, o) {
            u.each(e.nodeType ? [e] : e, function(e, t) {
                o = o || "fx";
                var a = u.queue(t, o),
                    i = a.shift();
                "inprogress" === i && (i = a.shift()), i && ("fx" === o && a.unshift("inprogress"), i.call(t, function() {
                    u.dequeue(t, o)
                }))
            })
        }, u.fn = u.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    a = this.offset(),
                    i = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : u(e).offset();
                return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: a.top - i.top,
                    left: a.left - i.left
                }
            }
        };
        var r = {};
        u.expando = "velocity" + (new Date).getTime(), u.uuid = 0;
        for (var a = {}, i = a.hasOwnProperty, o = a.toString, e = "Boolean Number String Function Array Date RegExp Object Error".split(" "), n = 0; n < e.length; n++) a["[object " + e[n] + "]"] = e[n].toLowerCase();
        u.fn.init.prototype = u.fn, t.Velocity = {
            Utilities: u
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, L, N, H) {
        function m(e) {
            return D.isWrapped(e) ? e = [].slice.call(e) : D.isNode(e) && (e = [e]), e
        }

        function I(e) {
            var t = W.data(e, "velocity");
            return null === t ? H : t
        }

        function i(n, t, s, a) {
            function i(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function o(e, t) {
                return 3 * t - 6 * e
            }

            function r(e) {
                return 3 * e
            }

            function l(e, t, a) {
                return ((i(t, a) * e + o(t, a)) * e + r(t)) * e
            }

            function c(e, t, a) {
                return 3 * i(t, a) * e * e + 2 * o(t, a) * e + r(t)
            }

            function u(e) {
                for (var t = 0, a = 1, i = g - 1; a != i && b[a] <= e; ++a) t += h;
                var o = t + (e - b[--a]) / (b[a + 1] - b[a]) * h,
                    r = c(o, n, s);
                return .001 <= r ? function(e, t) {
                    for (var a = 0; a < p; ++a) {
                        var i = c(t, n, s);
                        if (0 === i) return t;
                        t -= (l(t, n, s) - e) / i
                    }
                    return t
                }(e, o) : 0 == r ? o : function(e, t, a) {
                    for (var i, o, r = 0; 0 < (i = l(o = t + (a - t) / 2, n, s) - e) ? a = o : t = o, Math.abs(i) > f && ++r < m;);
                    return o
                }(e, t, t + h)
            }

            function d() {
                y = !0, (n != t || s != a) && function() {
                    for (var e = 0; e < g; ++e) b[e] = l(e * h, n, s)
                }()
            }
            var p = 4,
                f = 1e-7,
                m = 10,
                g = 11,
                h = 1 / (g - 1),
                e = "Float32Array" in L;
            if (4 !== arguments.length) return !1;
            for (var v = 0; v < 4; ++v)
                if ("number" != typeof arguments[v] || isNaN(arguments[v]) || !isFinite(arguments[v])) return !1;
            n = Math.min(n, 1), s = Math.min(s, 1), n = Math.max(n, 0), s = Math.max(s, 0);
            var b = e ? new Float32Array(g) : new Array(g),
                y = !1,
                w = function(e) {
                    return y || d(), n === t && s === a ? e : 0 === e ? 0 : 1 === e ? 1 : l(u(e), t, a)
                };
            w.getControlPoints = function() {
                return [{
                    x: n,
                    y: t
                }, {
                    x: s,
                    y: a
                }]
            };
            var _ = "generateBezier(" + [n, t, s, a] + ")";
            return w.toString = function() {
                return _
            }, w
        }

        function M(e, t) {
            var a = e;
            return D.isString(e) ? B.Easings[e] || (a = !1) : a = D.isArray(e) && 1 === e.length ? function(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }.apply(null, e) : D.isArray(e) && 2 === e.length ? n.apply(null, e.concat([t])) : !(!D.isArray(e) || 4 !== e.length) && i.apply(null, e), !1 === a && (a = B.Easings[B.defaults.easing] ? B.defaults.easing : r), a
        }

        function R(e) {
            if (e) {
                var t = (new Date).getTime(),
                    a = B.State.calls.length;
                1e4 < a && (B.State.calls = function(e) {
                    for (var t = -1, a = e ? e.length : 0, i = []; ++t < a;) {
                        var o = e[t];
                        o && i.push(o)
                    }
                    return i
                }(B.State.calls));
                for (var i = 0; i < a; i++)
                    if (B.State.calls[i]) {
                        var o = B.State.calls[i],
                            r = o[0],
                            n = o[2],
                            s = o[3],
                            l = !!s,
                            c = null;
                        s || (s = B.State.calls[i][3] = t - 16);
                        for (var u = Math.min((t - s) / n.duration, 1), d = 0, p = r.length; d < p; d++) {
                            var f = r[d],
                                m = f.element;
                            if (I(m)) {
                                var g = !1;
                                if (n.display !== H && null !== n.display && "none" !== n.display) {
                                    if ("flex" === n.display) {
                                        W.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                            Y.setPropertyValue(m, "display", t)
                                        })
                                    }
                                    Y.setPropertyValue(m, "display", n.display)
                                }
                                for (var h in n.visibility !== H && "hidden" !== n.visibility && Y.setPropertyValue(m, "visibility", n.visibility), f)
                                    if ("element" !== h) {
                                        var v, b = f[h],
                                            y = D.isString(b.easing) ? B.Easings[b.easing] : b.easing;
                                        if (1 === u) v = b.endValue;
                                        else {
                                            var w = b.endValue - b.startValue;
                                            if (v = b.startValue + w * y(u, n, w), !l && v === b.currentValue) continue
                                        }
                                        if (b.currentValue = v, "tween" === h) c = v;
                                        else {
                                            if (Y.Hooks.registered[h]) {
                                                var _ = Y.Hooks.getRoot(h),
                                                    x = I(m).rootPropertyValueCache[_];
                                                x && (b.rootPropertyValue = x)
                                            }
                                            var k = Y.setPropertyValue(m, h, b.currentValue + (0 === parseFloat(v) ? "" : b.unitType), b.rootPropertyValue, b.scrollData);
                                            Y.Hooks.registered[h] && (I(m).rootPropertyValueCache[_] = Y.Normalizations.registered[_] ? Y.Normalizations.registered[_]("extract", null, k[1]) : k[1]), "transform" === k[0] && (g = !0)
                                        }
                                    }
                                n.mobileHA && I(m).transformCache.translate3d === H && (I(m).transformCache.translate3d = "(0px, 0px, 0px)", g = !0), g && Y.flushTransformCache(m)
                            }
                        }
                        n.display !== H && "none" !== n.display && (B.State.calls[i][2].display = !1), n.visibility !== H && "hidden" !== n.visibility && (B.State.calls[i][2].visibility = !1), n.progress && n.progress.call(o[1], o[1], u, Math.max(0, s + n.duration - t), s, c), 1 === u && $(i)
                    }
            }
            B.State.isTicking && C(R)
        }

        function $(e, t) {
            if (!B.State.calls[e]) return !1;
            for (var a = B.State.calls[e][0], i = B.State.calls[e][1], o = B.State.calls[e][2], r = B.State.calls[e][4], n = !1, s = 0, l = a.length; s < l; s++) {
                var c = a[s].element;
                if (t || o.loop || ("none" === o.display && Y.setPropertyValue(c, "display", o.display), "hidden" === o.visibility && Y.setPropertyValue(c, "visibility", o.visibility)), !0 !== o.loop && (W.queue(c)[1] === H || !/\.velocityQueueEntryFlag/i.test(W.queue(c)[1])) && I(c)) {
                    I(c).isAnimating = !1;
                    var u = !(I(c).rootPropertyValueCache = {});
                    W.each(Y.Lists.transforms3D, function(e, t) {
                        var a = /^scale/.test(t) ? 1 : 0,
                            i = I(c).transformCache[t];
                        I(c).transformCache[t] !== H && new RegExp("^\\(" + a + "[^.]").test(i) && (u = !0, delete I(c).transformCache[t])
                    }), o.mobileHA && (u = !0, delete I(c).transformCache.translate3d), u && Y.flushTransformCache(c), Y.Values.removeClass(c, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && s === l - 1) try {
                    o.complete.call(i, i)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 1)
                }
                r && !0 !== o.loop && r(i), I(c) && !0 === o.loop && !t && (W.each(I(c).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), B(c, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), !1 !== o.queue && W.dequeue(c, o.queue)
            }
            B.State.calls[e] = !1;
            for (var d = 0, p = B.State.calls.length; d < p; d++)
                if (!1 !== B.State.calls[d]) {
                    n = !0;
                    break
                }!1 === n && (B.State.isTicking = !1, delete B.State.calls, B.State.calls = [])
        }
        var W, o, d = function() {
                if (N.documentMode) return N.documentMode;
                for (var e = 7; 4 < e; e--) {
                    var t = N.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                }
                return H
            }(),
            t = (o = 0, L.webkitRequestAnimationFrame || L.mozRequestAnimationFrame || function(e) {
                var t, a = (new Date).getTime();
                return t = Math.max(0, 16 - (a - o)), o = a + t, setTimeout(function() {
                    e(a + t)
                }, t)
            }),
            D = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== H && (0 === e.length || "object" == typeof e[0] && 0 < e[0].nodeType)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || L.Zepto && L.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return L.SVGElement && e instanceof L.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            a = !1;
        if (e.fn && e.fn.jquery ? (W = e, a = !0) : W = L.Velocity.Utilities, d <= 8 && !a) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(d <= 7)) {
            var r = "swing",
                B = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: L.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: N.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: W,
                    Redirects: {},
                    Easings: {},
                    Promise: L.Promise,
                    defaults: {
                        queue: "",
                        duration: 400,
                        easing: r,
                        begin: H,
                        complete: H,
                        progress: H,
                        display: H,
                        visibility: H,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        W.data(e, "velocity", {
                            isSVG: D.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            L.pageYOffset !== H ? (B.State.scrollAnchor = L, B.State.scrollPropertyLeft = "pageXOffset", B.State.scrollPropertyTop = "pageYOffset") : (B.State.scrollAnchor = N.documentElement || N.body.parentNode || N.body, B.State.scrollPropertyLeft = "scrollLeft", B.State.scrollPropertyTop = "scrollTop");
            var n = function() {
                function b(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function y(e, t, a) {
                    var i = {
                        x: e.x + a.dx * t,
                        v: e.v + a.dv * t,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: i.v,
                        dv: b(i)
                    }
                }
                return function e(t, a, i) {
                    var o, r, n, s, l, c, u, d, p, f, m, g = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        h = [0],
                        v = 0;
                    for (t = parseFloat(t) || 500, a = parseFloat(a) || 20, i = i || null, g.tension = t, g.friction = a, r = (o = null !== i) ? (v = e(t, a)) / i * .016 : .016; l = r, void 0, c = {
                            dx: (s = n || g).v,
                            dv: b(s)
                        }, u = y(s, .5 * l, c), d = y(s, .5 * l, u), p = y(s, l, d), f = 1 / 6 * (c.dx + 2 * (u.dx + d.dx) + p.dx), m = 1 / 6 * (c.dv + 2 * (u.dv + d.dv) + p.dv), s.x = s.x + f * l, s.v = s.v + m * l, n = s, h.push(1 + n.x), v += 16, 1e-4 < Math.abs(n.x) && 1e-4 < Math.abs(n.v););
                    return o ? function(e) {
                        return h[e * (h.length - 1) | 0]
                    } : v
                }
            }();
            B.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, W.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                B.Easings[t[0]] = i.apply(null, t[1])
            });
            var Y = B.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < Y.Lists.colors.length; e++) {
                            var t = "color" === Y.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            Y.Hooks.templates[Y.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var a, i, o;
                        if (d)
                            for (a in Y.Hooks.templates) {
                                o = (i = Y.Hooks.templates[a])[0].split(" ");
                                var r = i[1].match(Y.RegEx.valueSplit);
                                "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), Y.Hooks.templates[a] = [o.join(" "), r.join(" ")])
                            }
                        for (a in Y.Hooks.templates)
                            for (var e in o = (i = Y.Hooks.templates[a])[0].split(" ")) {
                                var n = a + o[e],
                                    s = e;
                                Y.Hooks.registered[n] = [a, s]
                            }
                    },
                    getRoot: function(e) {
                        var t = Y.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return Y.RegEx.valueUnwrap.test(t) && (t = t.match(Y.RegEx.valueUnwrap)[1]), Y.Values.isCSSNullValue(t) && (t = Y.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var a = Y.Hooks.registered[e];
                        if (a) {
                            var i = a[0],
                                o = a[1];
                            return (t = Y.Hooks.cleanRootPropertyValue(i, t)).toString().match(Y.RegEx.valueSplit)[o]
                        }
                        return t
                    },
                    injectValue: function(e, t, a) {
                        var i = Y.Hooks.registered[e];
                        if (i) {
                            var o, r = i[0],
                                n = i[1];
                            return (o = (a = Y.Hooks.cleanRootPropertyValue(r, a)).toString().match(Y.RegEx.valueSplit))[n] = t, o.join(" ")
                        }
                        return a
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, a) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var i;
                                    return i = Y.RegEx.wrappedValueAlreadyExtracted.test(a) ? a : (i = a.toString().match(Y.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : a;
                                case "inject":
                                    return "rect(" + a + ")"
                            }
                        },
                        blur: function(e, t, a) {
                            switch (e) {
                                case "name":
                                    return B.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(a);
                                    if (!i && 0 !== i) {
                                        var o = a.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = o ? o[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(a) ? "blur(" + a + ")" : "none"
                            }
                        },
                        opacity: function(e, t, a) {
                            if (d <= 8) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var i = a.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i ? i[1] / 100 : 1;
                                case "inject":
                                    return (t.style.zoom = 1) <= parseFloat(a) ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(a), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return a
                            }
                        }
                    },
                    register: function() {
                        d <= 9 || B.State.isGingerbread || (Y.Lists.transformsBase = Y.Lists.transformsBase.concat(Y.Lists.transforms3D));
                        for (var e = 0; e < Y.Lists.transformsBase.length; e++) ! function() {
                            var o = Y.Lists.transformsBase[e];
                            Y.Normalizations.registered[o] = function(e, t, a) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return I(t) === H || I(t).transformCache[o] === H ? /^scale/i.test(o) ? 1 : 0 : I(t).transformCache[o].replace(/[()]/g, "");
                                    case "inject":
                                        var i = !1;
                                        switch (o.substr(0, o.length - 1)) {
                                            case "translate":
                                                i = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                                break;
                                            case "scal":
                                            case "scale":
                                                B.State.isAndroid && I(t).transformCache[o] === H && a < 1 && (a = 1), i = !/(\d)$/i.test(a);
                                                break;
                                            case "skew":
                                                i = !/(deg|\d)$/i.test(a);
                                                break;
                                            case "rotate":
                                                i = !/(deg|\d)$/i.test(a)
                                        }
                                        return i || (I(t).transformCache[o] = "(" + a + ")"), I(t).transformCache[o]
                                }
                            }
                        }();
                        for (e = 0; e < Y.Lists.colors.length; e++) ! function() {
                            var n = Y.Lists.colors[e];
                            Y.Normalizations.registered[n] = function(e, t, a) {
                                switch (e) {
                                    case "name":
                                        return n;
                                    case "extract":
                                        var i;
                                        if (Y.RegEx.wrappedValueAlreadyExtracted.test(a)) i = a;
                                        else {
                                            var o, r = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(a) ? o = r[a] !== H ? r[a] : r.black : Y.RegEx.isHex.test(a) ? o = "rgb(" + Y.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = r.black), i = (o || a).toString().match(Y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return d <= 8 || 3 !== i.split(" ").length || (i += " 1"), i;
                                    case "inject":
                                        return d <= 8 ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (d <= 8 ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || B.State.isAndroid && !B.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (B.State.prefixMatches[e]) return [B.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], a = 0, i = t.length; a < i; a++) {
                            var o;
                            if (o = 0 === a ? e : t[a] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), D.isString(B.State.prefixElement.style[o])) return [B.State.prefixMatches[e] = o, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, a, i) {
                            return t + t + a + a + i + i
                        }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, t, a, c) {
                    function u(e, t) {
                        function a() {
                            r && Y.setPropertyValue(e, "display", "none")
                        }
                        var i = 0;
                        if (d <= 8) i = W.css(e, t);
                        else {
                            var o, r = !1;
                            if (/^(width|height)$/.test(t) && 0 === Y.getPropertyValue(e, "display") && (r = !0, Y.setPropertyValue(e, "display", Y.Values.getDisplayType(e))), !c) {
                                if ("height" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var n = e.offsetHeight - (parseFloat(Y.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingBottom")) || 0);
                                    return a(), n
                                }
                                if ("width" === t && "border-box" !== Y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var s = e.offsetWidth - (parseFloat(Y.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(Y.getPropertyValue(e, "paddingRight")) || 0);
                                    return a(), s
                                }
                            }
                            o = I(e) === H ? L.getComputedStyle(e, null) : I(e).computedStyle ? I(e).computedStyle : I(e).computedStyle = L.getComputedStyle(e, null), "borderColor" === t && (t = "borderTopColor"), ("" === (i = 9 === d && "filter" === t ? o.getPropertyValue(t) : o[t]) || null === i) && (i = e.style[t]), a()
                        }
                        if ("auto" === i && /^(top|right|bottom|left)$/i.test(t)) {
                            var l = u(e, "position");
                            ("fixed" === l || "absolute" === l && /top|left/i.test(t)) && (i = W(e).position()[t] + "px")
                        }
                        return i
                    }
                    var i;
                    if (Y.Hooks.registered[t]) {
                        var o = t,
                            r = Y.Hooks.getRoot(o);
                        a === H && (a = Y.getPropertyValue(e, Y.Names.prefixCheck(r)[0])), Y.Normalizations.registered[r] && (a = Y.Normalizations.registered[r]("extract", e, a)), i = Y.Hooks.extractValue(o, a)
                    } else if (Y.Normalizations.registered[t]) {
                        var n, s;
                        "transform" !== (n = Y.Normalizations.registered[t]("name", e)) && (s = u(e, Y.Names.prefixCheck(n)[0]), Y.Values.isCSSNullValue(s) && Y.Hooks.templates[t] && (s = Y.Hooks.templates[t][1])), i = Y.Normalizations.registered[t]("extract", e, s)
                    }
                    if (!/^[\d-]/.test(i))
                        if (I(e) && I(e).isSVG && Y.Names.SVGAttribute(t))
                            if (/^(height|width)$/i.test(t)) try {
                                i = e.getBBox()[t]
                            } catch (e) {
                                i = 0
                            } else i = e.getAttribute(t);
                            else i = u(e, Y.Names.prefixCheck(t)[0]);
                    return Y.Values.isCSSNullValue(i) && (i = 0), 2 <= B.debug && console.log("Get " + t + ": " + i), i
                },
                setPropertyValue: function(e, t, a, i, o) {
                    var r = t;
                    if ("scroll" === t) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? L.scrollTo(a, o.alternateValue) : L.scrollTo(o.alternateValue, a);
                    else if (Y.Normalizations.registered[t] && "transform" === Y.Normalizations.registered[t]("name", e)) Y.Normalizations.registered[t]("inject", e, a), r = "transform", a = I(e).transformCache[t];
                    else {
                        if (Y.Hooks.registered[t]) {
                            var n = t,
                                s = Y.Hooks.getRoot(t);
                            i = i || Y.getPropertyValue(e, s), a = Y.Hooks.injectValue(n, a, i), t = s
                        }
                        if (Y.Normalizations.registered[t] && (a = Y.Normalizations.registered[t]("inject", e, a), t = Y.Normalizations.registered[t]("name", e)), r = Y.Names.prefixCheck(t)[0], d <= 8) try {
                            e.style[r] = a
                        } catch (e) {
                            B.debug && console.log("Browser does not support [" + a + "] for [" + r + "]")
                        } else I(e) && I(e).isSVG && Y.Names.SVGAttribute(t) ? e.setAttribute(t, a) : e.style[r] = a;
                        2 <= B.debug && console.log("Set " + t + " (" + r + "): " + a)
                    }
                    return [r, a]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(Y.getPropertyValue(t, e))
                    }
                    var a = "";
                    if ((d || B.State.isAndroid && !B.State.isChrome) && I(t).isSVG) {
                        var i = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        W.each(I(t).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (a += e + "(" + i[e].join(" ") + ") ", delete i[e])
                        })
                    } else {
                        var o, r;
                        W.each(I(t).transformCache, function(e) {
                            return o = I(t).transformCache[e], "transformPerspective" === e ? (r = o, !0) : (9 === d && "rotateZ" === e && (e = "rotate"), void(a += e + o + " "))
                        }), r && (a = "perspective" + r + " " + a)
                    }
                    Y.setPropertyValue(t, "transform", a)
                }
            };
            Y.Hooks.register(), Y.Normalizations.register(), B.hook = function(e, i, o) {
                var r = H;
                return e = m(e), W.each(e, function(e, t) {
                    if (I(t) === H && B.init(t), o === H) r === H && (r = B.CSS.getPropertyValue(t, i));
                    else {
                        var a = B.CSS.setPropertyValue(t, i, o);
                        "transform" === a[0] && B.CSS.flushTransformCache(t), r = a
                    }
                }), r
            };
            var g = function() {
                function e() {
                    return t ? E.promise || null : a
                }
                var t, a, i, T, V, j, o = arguments[0] && (arguments[0].p || W.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || D.isString(arguments[0].properties));
                if (D.isWrapped(this) ? (t = !1, i = 0, a = T = this) : (t = !0, i = 1, T = o ? arguments[0].elements || arguments[0].e : arguments[0]), T = m(T)) {
                    j = o ? (V = arguments[0].properties || arguments[0].p, arguments[0].options || arguments[0].o) : (V = arguments[i], arguments[i + 1]);
                    var A = T.length,
                        O = 0;
                    if (!/^(stop|finish)$/i.test(V) && !W.isPlainObject(j)) {
                        j = {};
                        for (var r = i + 1; r < arguments.length; r++) D.isArray(arguments[r]) || !/^(fast|normal|slow)$/i.test(arguments[r]) && !/^\d/.test(arguments[r]) ? D.isString(arguments[r]) || D.isArray(arguments[r]) ? j.easing = arguments[r] : D.isFunction(arguments[r]) && (j.complete = arguments[r]) : j.duration = arguments[r]
                    }
                    var q, E = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (t && B.Promise && (E.promise = new B.Promise(function(e, t) {
                        E.resolver = e, E.rejecter = t
                    })), V) {
                        case "scroll":
                            q = "scroll";
                            break;
                        case "reverse":
                            q = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            W.each(T, function(e, t) {
                                I(t) && I(t).delayTimer && (clearTimeout(I(t).delayTimer.setTimeout), I(t).delayTimer.next && I(t).delayTimer.next(), delete I(t).delayTimer)
                            });
                            var n = [];
                            return W.each(B.State.calls, function(o, r) {
                                r && W.each(r[1], function(e, a) {
                                    var i = j === H ? "" : j;
                                    return !0 !== i && r[2].queue !== i && (j !== H || !1 !== r[2].queue) || void W.each(T, function(e, t) {
                                        t === a && ((!0 === j || D.isString(j)) && (W.each(W.queue(t, D.isString(j) ? j : ""), function(e, t) {
                                            D.isFunction(t) && t(null, !0)
                                        }), W.queue(t, D.isString(j) ? j : "", [])), "stop" === V ? (I(t) && I(t).tweensContainer && !1 !== i && W.each(I(t).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), n.push(o)) : "finish" === V && (r[2].duration = 1))
                                    })
                                })
                            }), "stop" === V && (W.each(n, function(e, t) {
                                $(t, !0)
                            }), E.promise && E.resolver(T)), e();
                        default:
                            if (!W.isPlainObject(V) || D.isEmptyObject(V)) {
                                if (D.isString(V) && B.Redirects[V]) {
                                    var s = (u = W.extend({}, j)).duration,
                                        l = u.delay || 0;
                                    return !0 === u.backwards && (T = W.extend(!0, [], T).reverse()), W.each(T, function(e, t) {
                                        parseFloat(u.stagger) ? u.delay = l + parseFloat(u.stagger) * e : D.isFunction(u.stagger) && (u.delay = l + u.stagger.call(t, e, A)), u.drag && (u.duration = parseFloat(s) || (/^(callout|transition)/.test(V) ? 1e3 : 400), u.duration = Math.max(u.duration * (u.backwards ? 1 - e / A : (e + 1) / A), .75 * u.duration, 200)), B.Redirects[V].call(t, t, u || {}, e, A, T, E.promise ? E : H)
                                    }), e()
                                }
                                var c = "Velocity: First argument (" + V + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return E.promise ? E.rejecter(new Error(c)) : console.log(c), e()
                            }
                            q = "start"
                    }
                    var u, d, z = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        F = [];
                    if (W.each(T, function(e, t) {
                            D.isNode(t) && function() {
                                function a(e) {
                                    function d(e, t) {
                                        var a = H,
                                            i = H,
                                            o = H;
                                        return D.isArray(e) ? (a = e[0], !D.isArray(e[1]) && /^[\d-]/.test(e[1]) || D.isFunction(e[1]) || Y.RegEx.isHex.test(e[1]) ? o = e[1] : (D.isString(e[1]) && !Y.RegEx.isHex.test(e[1]) || D.isArray(e[1])) && (i = t ? e[1] : M(e[1], S.duration), e[2] !== H && (o = e[2]))) : a = e, t || (i = i || S.easing), D.isFunction(a) && (a = a.call(C, O, A)), D.isFunction(o) && (o = o.call(C, O, A)), [a || 0, i, o]
                                    }

                                    function t(e, t) {
                                        var a, i;
                                        return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                            return a = e, ""
                                        }), a || (a = Y.Values.getUnitType(e)), [i, a]
                                    }

                                    function a() {
                                        var e = {
                                                myParent: C.parentNode || N.body,
                                                position: Y.getPropertyValue(C, "position"),
                                                fontSize: Y.getPropertyValue(C, "fontSize")
                                            },
                                            t = e.position === z.lastPosition && e.myParent === z.lastParent,
                                            a = e.fontSize === z.lastFontSize;
                                        z.lastParent = e.myParent, z.lastPosition = e.position, z.lastFontSize = e.fontSize;
                                        var i = {};
                                        if (a && t) i.emToPx = z.lastEmToPx, i.percentToPxWidth = z.lastPercentToPxWidth, i.percentToPxHeight = z.lastPercentToPxHeight;
                                        else {
                                            var o = I(C).isSVG ? N.createElementNS("http://www.w3.org/2000/svg", "rect") : N.createElement("div");
                                            B.init(o), e.myParent.appendChild(o), W.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                B.CSS.setPropertyValue(o, t, "hidden")
                                            }), B.CSS.setPropertyValue(o, "position", e.position), B.CSS.setPropertyValue(o, "fontSize", e.fontSize), B.CSS.setPropertyValue(o, "boxSizing", "content-box"), W.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                B.CSS.setPropertyValue(o, t, "100%")
                                            }), B.CSS.setPropertyValue(o, "paddingLeft", "100em"), i.percentToPxWidth = z.lastPercentToPxWidth = (parseFloat(Y.getPropertyValue(o, "width", null, !0)) || 1) / 100, i.percentToPxHeight = z.lastPercentToPxHeight = (parseFloat(Y.getPropertyValue(o, "height", null, !0)) || 1) / 100, i.emToPx = z.lastEmToPx = (parseFloat(Y.getPropertyValue(o, "paddingLeft")) || 1) / 100, e.myParent.removeChild(o)
                                        }
                                        return null === z.remToPx && (z.remToPx = parseFloat(Y.getPropertyValue(N.body, "fontSize")) || 16), null === z.vwToPx && (z.vwToPx = parseFloat(L.innerWidth) / 100, z.vhToPx = parseFloat(L.innerHeight) / 100), i.remToPx = z.remToPx, i.vwToPx = z.vwToPx, i.vhToPx = z.vhToPx, 1 <= B.debug && console.log("Unit ratios: " + JSON.stringify(i), C), i
                                    }
                                    if (S.begin && 0 === O) try {
                                        S.begin.call(T, T)
                                    } catch (e) {
                                        setTimeout(function() {
                                            throw e
                                        }, 1)
                                    }
                                    if ("scroll" === q) {
                                        var i, o, r, n = /^x$/i.test(S.axis) ? "Left" : "Top",
                                            s = parseFloat(S.offset) || 0;
                                        S.container ? D.isWrapped(S.container) || D.isNode(S.container) ? (S.container = S.container[0] || S.container, r = (i = S.container["scroll" + n]) + W(C).position()[n.toLowerCase()] + s) : S.container = null : (i = B.State.scrollAnchor[B.State["scrollProperty" + n]], o = B.State.scrollAnchor[B.State["scrollProperty" + ("Left" === n ? "Top" : "Left")]], r = W(C).offset()[n.toLowerCase()] + s), P = {
                                            scroll: {
                                                rootPropertyValue: !1,
                                                startValue: i,
                                                currentValue: i,
                                                endValue: r,
                                                unitType: "",
                                                easing: S.easing,
                                                scrollData: {
                                                    container: S.container,
                                                    direction: n,
                                                    alternateValue: o
                                                }
                                            },
                                            element: C
                                        }, B.debug && console.log("tweensContainer (scroll): ", P.scroll, C)
                                    } else if ("reverse" === q) {
                                        if (!I(C).tweensContainer) return void W.dequeue(C, S.queue);
                                        "none" === I(C).opts.display && (I(C).opts.display = "auto"), "hidden" === I(C).opts.visibility && (I(C).opts.visibility = "visible"), I(C).opts.loop = !1, I(C).opts.begin = null, I(C).opts.complete = null, j.easing || delete S.easing, j.duration || delete S.duration, S = W.extend({}, I(C).opts, S);
                                        var l = W.extend(!0, {}, I(C).tweensContainer);
                                        for (var c in l)
                                            if ("element" !== c) {
                                                var u = l[c].startValue;
                                                l[c].startValue = l[c].currentValue = l[c].endValue, l[c].endValue = u, D.isEmptyObject(j) || (l[c].easing = S.easing), B.debug && console.log("reverse tweensContainer (" + c + "): " + JSON.stringify(l[c]), C)
                                            }
                                        P = l
                                    } else if ("start" === q) {
                                        for (var p in I(C).tweensContainer && !0 === I(C).isAnimating && (l = I(C).tweensContainer), W.each(V, function(e, t) {
                                                if (RegExp("^" + Y.Lists.colors.join("$|^") + "$").test(e)) {
                                                    var a = d(t, !0),
                                                        i = a[0],
                                                        o = a[1],
                                                        r = a[2];
                                                    if (Y.RegEx.isHex.test(i)) {
                                                        for (var n = ["Red", "Green", "Blue"], s = Y.Values.hexToRgb(i), l = r ? Y.Values.hexToRgb(r) : H, c = 0; c < n.length; c++) {
                                                            var u = [s[c]];
                                                            o && u.push(o), l !== H && u.push(l[c]), V[e + n[c]] = u
                                                        }
                                                        delete V[e]
                                                    }
                                                }
                                            }), V) {
                                            var f = d(V[p]),
                                                m = f[0],
                                                g = f[1],
                                                h = f[2];
                                            p = Y.Names.camelCase(p);
                                            var v = Y.Hooks.getRoot(p),
                                                b = !1;
                                            if (I(C).isSVG || "tween" === v || !1 !== Y.Names.prefixCheck(v)[1] || Y.Normalizations.registered[v] !== H) {
                                                (S.display !== H && null !== S.display && "none" !== S.display || S.visibility !== H && "hidden" !== S.visibility) && /opacity|filter/.test(p) && !h && 0 !== m && (h = 0), S._cacheValues && l && l[p] ? (h === H && (h = l[p].endValue + l[p].unitType), b = I(C).rootPropertyValueCache[v]) : Y.Hooks.registered[p] ? h === H ? (b = Y.getPropertyValue(C, v), h = Y.getPropertyValue(C, p, b)) : b = Y.Hooks.templates[v][1] : h === H && (h = Y.getPropertyValue(C, p));
                                                var y, w, _, x = !1;
                                                if (h = (y = t(p, h))[0], _ = y[1], m = (y = t(p, m))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                        return x = t, ""
                                                    }), w = y[1], h = parseFloat(h) || 0, m = parseFloat(m) || 0, "%" === w && (/^(fontSize|lineHeight)$/.test(p) ? (m /= 100, w = "em") : /^scale/.test(p) ? (m /= 100, w = "") : /(Red|Green|Blue)$/i.test(p) && (m = m / 100 * 255, w = "")), /[\/*]/.test(x)) w = _;
                                                else if (_ !== w && 0 !== h)
                                                    if (0 === m) w = _;
                                                    else {
                                                        $ = $ || a();
                                                        var k = /margin|padding|left|right|width|text|word|letter/i.test(p) || /X$/.test(p) || "x" === p ? "x" : "y";
                                                        switch (_) {
                                                            case "%":
                                                                h *= "x" === k ? $.percentToPxWidth : $.percentToPxHeight;
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                h *= $[_ + "ToPx"]
                                                        }
                                                        switch (w) {
                                                            case "%":
                                                                h *= 1 / ("x" === k ? $.percentToPxWidth : $.percentToPxHeight);
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                h *= 1 / $[w + "ToPx"]
                                                        }
                                                    }
                                                switch (x) {
                                                    case "+":
                                                        m = h + m;
                                                        break;
                                                    case "-":
                                                        m = h - m;
                                                        break;
                                                    case "*":
                                                        m *= h;
                                                        break;
                                                    case "/":
                                                        m = h / m
                                                }
                                                P[p] = {
                                                    rootPropertyValue: b,
                                                    startValue: h,
                                                    currentValue: h,
                                                    endValue: m,
                                                    unitType: w,
                                                    easing: g
                                                }, B.debug && console.log("tweensContainer (" + p + "): " + JSON.stringify(P[p]), C)
                                            } else B.debug && console.log("Skipping [" + v + "] due to a lack of browser support.")
                                        }
                                        P.element = C
                                    }
                                    P.element && (Y.Values.addClass(C, "velocity-animating"), F.push(P), "" === S.queue && (I(C).tweensContainer = P, I(C).opts = S), I(C).isAnimating = !0, O === A - 1 ? (B.State.calls.push([F, T, S, null, E.resolver]), !1 === B.State.isTicking && (B.State.isTicking = !0, R())) : O++)
                                }
                                var $, C = this,
                                    S = W.extend({}, B.defaults, j),
                                    P = {};
                                switch (I(C) === H && B.init(C), parseFloat(S.delay) && !1 !== S.queue && W.queue(C, S.queue, function(e) {
                                    B.velocityQueueEntryFlag = !0, I(C).delayTimer = {
                                        setTimeout: setTimeout(e, parseFloat(S.delay)),
                                        next: e
                                    }
                                }), S.duration.toString().toLowerCase()) {
                                    case "fast":
                                        S.duration = 200;
                                        break;
                                    case "normal":
                                        S.duration = 400;
                                        break;
                                    case "slow":
                                        S.duration = 600;
                                        break;
                                    default:
                                        S.duration = parseFloat(S.duration) || 1
                                }!1 !== B.mock && (!0 === B.mock ? S.duration = S.delay = 1 : (S.duration *= parseFloat(B.mock) || 1, S.delay *= parseFloat(B.mock) || 1)), S.easing = M(S.easing, S.duration), S.begin && !D.isFunction(S.begin) && (S.begin = null), S.progress && !D.isFunction(S.progress) && (S.progress = null), S.complete && !D.isFunction(S.complete) && (S.complete = null), S.display !== H && null !== S.display && (S.display = S.display.toString().toLowerCase(), "auto" === S.display && (S.display = B.CSS.Values.getDisplayType(C))), S.visibility !== H && null !== S.visibility && (S.visibility = S.visibility.toString().toLowerCase()), S.mobileHA = S.mobileHA && B.State.isMobile && !B.State.isGingerbread, !1 === S.queue ? S.delay ? setTimeout(a, S.delay) : a() : W.queue(C, S.queue, function(e, t) {
                                    return !0 === t ? (E.promise && E.resolver(T), !0) : (B.velocityQueueEntryFlag = !0, void a())
                                }), "" !== S.queue && "fx" !== S.queue || "inprogress" === W.queue(C)[0] || W.dequeue(C)
                            }.call(t)
                        }), (u = W.extend({}, B.defaults, j)).loop = parseInt(u.loop), d = 2 * u.loop - 1, u.loop)
                        for (var p = 0; p < d; p++) {
                            var f = {
                                delay: u.delay,
                                progress: u.progress
                            };
                            p === d - 1 && (f.display = u.display, f.visibility = u.visibility, f.complete = u.complete), g(T, "reverse", f)
                        }
                    return e()
                }
            };
            (B = W.extend(g, B)).animate = g;
            var C = L.requestAnimationFrame || t;
            return B.State.isMobile || N.hidden === H || N.addEventListener("visibilitychange", function() {
                N.hidden ? (C = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, R()) : C = L.requestAnimationFrame || t
            }), e.Velocity = B, e !== L && (e.fn.velocity = g, e.fn.velocity.defaults = B.defaults), W.each(["Down", "Up"], function(e, d) {
                B.Redirects["slide" + d] = function(a, e, t, i, o, r) {
                    var n = W.extend({}, e),
                        s = n.begin,
                        l = n.complete,
                        c = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        u = {};
                    n.display === H && (n.display = "Down" === d ? "inline" === B.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), n.begin = function() {
                        for (var e in s && s.call(o, o), c) {
                            u[e] = a.style[e];
                            var t = B.CSS.getPropertyValue(a, e);
                            c[e] = "Down" === d ? [t, 0] : [0, t]
                        }
                        u.overflow = a.style.overflow, a.style.overflow = "hidden"
                    }, n.complete = function() {
                        for (var e in u) a.style[e] = u[e];
                        l && l.call(o, o), r && r.resolver(o)
                    }, B(a, c, n)
                }
            }), W.each(["In", "Out"], function(e, c) {
                B.Redirects["fade" + c] = function(e, t, a, i, o, r) {
                    var n = W.extend({}, t),
                        s = {
                            opacity: "In" === c ? 1 : 0
                        },
                        l = n.complete;
                    n.complete = a !== i - 1 ? n.begin = null : function() {
                        l && l.call(o, o), r && r.resolver(o)
                    }, n.display === H && (n.display = "In" === c ? "auto" : "none"), B(this, s, n)
                }
            }), B
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
}),
function(i) {
    i.fn.extend({
        mouseParallax: function(e) {
            e = i.extend({
                moveFactor: 5,
                zIndexValue: "-1",
                targetContainer: "body"
            }, e);
            return this.each(function() {
                var t = e,
                    a = i(this);
                i(t.targetContainer).on("mousemove", function(e) {
                    mouseX = e.pageX, mouseY = e.pageY, windowWidth = i(window).width(), windowHeight = i(window).height(), percentX = mouseX / windowWidth * t.moveFactor - t.moveFactor / 2, percentY = mouseY / windowHeight * t.moveFactor - t.moveFactor / 2, leftString = 0 - percentX - t.moveFactor + "%", topString = 0 - percentY - t.moveFactor + "%", a.velocity({
                        translateY: topString,
                        translateX: leftString
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "linear"
                    })
                })
            })
        }
    })
}(jQuery), $(document).ready(function() {
    $(".eff_block_wrap_row").attr("data-aos", "fade-up"), $(".eff_block_footnote").attr("data-aos", "fade-up"), AOS.init({
        easing: "ease-in-out-sine",
        disable: "phone",
        once: !0
    });
	var first_scroll_skip = false;
	
	$('.s_header_wrap form').on('submit', function(e){

		if( $(this).find('.txt_search').val().length < 3){
			e.preventDefault();
			$(this).find('.txt_search').addClass('error');
		} else {
			$(this).find('.txt_search').removeClass('error');
			//$(this).trigger('submit');
		}
		
		
 		
		
	});
	
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));
    var i = $(".slider-cirles__item").length;

    function o(e) {
        var t = e;
        $(".slider-cirles__item").removeClass("slider-cirles__item_active"), $(".slider-cirles__item").find("circle").removeClass("circle-animation"), $(".slider-cirles__item:eq(" + t + ")").addClass("slider-cirles__item_active"), $(".slider-cirles__item:eq(" + t + ")").find("circle").addClass("circle-animation");
        var a = $(".slider-cirles__item:eq(" + t + ")").find(".slider-cirles__text").text();
        $(".mobile_circle_text").text(a), $(".slider-cirles__item:eq(" + t + ")").find("circle").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
            o(i <= t + 1 ? 0 : t + 1)
        })
    }
    o(0), $(".slider-cirles__item").mouseenter(function() {
        o($(this).index() - 1)
    }), $(".sit-slider").owlCarousel({
        center: !1,
        items: 8,
        loop: !1,
        nav: !0,
        navText: [" ", " "],
        dots: !1,
        margin: 11
    }), $(".situations-wrapper__back").click(function() {
        $(".second-situations").toggleClass("active")
    });
    var r = 0,
        n = $(".second-slideritem").length;

    function e(e, t) {
        var a;
        r = a = "next" == t ? r == n - 1 ? 0 : e + 1 : 0 == r ? n - 1 : e - 1, $(".second-slideritem").removeClass("active"), $(".second-slideritem:eq(" + a + ")").addClass("active"), $(".nav-value_cutrrent").text(r + 1), $(".sit-slider .owl-item").find(".sit-slider__item").removeClass("active"), $(".sit-slider .owl-item:eq(" + r + ")").find(".sit-slider__item").addClass("active")
    }
    $(".nav-value_total").text(n), $(".nav-value_cutrrent").text(r + 1), $(".nav-right").click(function() {
        e(r, "next")
    }), $(".nav-left").click(function() {
        e(r, "prev")
    }), e(-1, "next"), $(document).mouseup(function(e) {
        var t = $(".second-situations");
        t.is(e.target) || 0 !== t.has(e.target).length || ($(".second-situations").removeClass("active"), $(".right_vest-art_soc_obj").removeClass("active"), $(".pagefooter-share__wrap").removeClass("active"))
    }), $(".sit-slider__item").click(function() {
        e($(this).parent().index() - 1, "next"), $(".second-situations").removeClass("active")
    });
    var t = !1;
    $(".js-click").mousedown(function(e) {
        $(this).addClass("click-in"), t = !0
    }), $(window).mouseup(function() {
        t && ($(".js-click").removeClass("click-in"), t = !1)
    }), $(".js-click").mouseleave(function() {
        t && ($(".js-click").removeClass("click-in"), t = !1)
    }), $(".pagefooter-share__wrap, .header_share_wrap").click(function() {
        $(".right_vest-art_soc_obj").toggleClass("active"), $(this).toggleClass("active")
    }), $('.products_all_filter .products_all_filter_item[data-item="0"] .products_all_filter_item_tip').html("Линейка Дыши <sup>®</sup>"), $(".products_all_filter").append("<div class='products_all_filter_mobile_text'></div>"), $(".products_all_filter").prepend("<div class='products_all_filter_mobile_text_additional'>Выберите симптом и узнайте, какой продукт вам подойдет.</div>");
    var a, s;

    function l() {
        if (0 < $(".products_all_filter_item").length) {
            var e = $(".products_all_filter_item.active").attr("data-item");
            if ("0" == e) return void $(".product_list_item").addClass("active");
            var t = JSON.parse("[" + e + "]");
            $(".product_list_item").removeClass("active"), $.each(t, function(e, t) {
                $(".product_list_item[data-item=" + t + "]").addClass("active")
            })
        }
    }
    if ( $(".products_all_filter_item").click(function() {
            if (!$(this).hasClass("active")) {
                $(".products_all_filter_item").removeClass("active"), $(this).addClass("active"), l();
                var e = $(this).find(".products_all_filter_item_tip").text();
                $(".products_all_filter_mobile_text").text(e);
                var t = {
                        symptom_id: $(this).data("id")
                    },
                    a = $(this).data("url");
                history.pushState(t, "", a), $.post("/ajax/symptoms.php", {
                    id: $(this).data("id")
                }, function(e) {
                    e.h1 && $("h1").html(e.h1), $(".category-text").html(e.text)
                }, "json")
            }
        }), $(".products_all_filter_mobile_text").text($(".products_all_filter_item.active").find(".products_all_filter_item_tip").text()), l(), $(".faq_item_question").click(function() {
            $(this).parents(".faq_item").hasClass("active") ? ($(this).parents(".faq_item").removeClass("active"), $(this).parents(".faq_item").find(".faq_item_answer").slideUp(300), $(this).parents(".faq_item").find(".faq_item_caret").removeClass("active")) : ($(".faq_item").removeClass("active"), $(".faq_item_answer").slideUp(300), $(".faq_item_caret").removeClass("active"), $(this).parents(".faq_item").addClass("active"), $(this).parents(".faq_item").find(".faq_item_answer").slideDown(300), $(this).parents(".faq_item").find(".faq_item_caret").addClass("active"))
        }), void 0 !== $.fn.masonry && ($(".grid").masonry({
            itemSelector: ".grid-item",
            columnWidth: ".grid-sizer",
            percentPosition: !0
        }), setTimeout(function() {
            $(".grid").masonry({
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
                percentPosition: !0
            })
        }, 200)), a = .33 * $(".feedbacks_wrap").outerWidth(), s = .66 * $(".feedbacks_wrap").outerWidth(), $(".feedback_item").each(function() {
            $(this).position().left < s && $(this).addClass("feedback_item_center"), $(this).position().left < a && ($(this).addClass("feedback_item_left"), $(this).removeClass("feedback_item_center")), $(this).position().left >= s && $(this).addClass("feedback_item_right")
        }), $(".js-toggle-tab").click(function(e) {
            if (e.preventDefault(), !$(this).hasClass("active")) {
                $(".js-toggle-tab").removeClass("active"), $(this).addClass("active");
                var t = $(this).attr("data-tab");
                $(".wb_tabs_item").removeClass("active"), $(".wb_places_tab").removeClass("active"), $(".wb_tabs_item[data-tab=" + t + "]").addClass("active"), $(".wb_places_tab[data-tab=" + t + "]").addClass("active"), 0 < $(this).parents(".button_list_wrap").length ? $(this).parents(".button_list_wrap").addClass("active") : $(".button_list_wrap").each(function() {
                    $(this).find(".button_list_item").removeClass("active")
                }).removeClass("active");
				
			
            }
			if(first_scroll_skip){
						jQuery("html:not(:animated),body:not(:animated)").animate({
						scrollTop: $('.wb_tabs').offset().top - 100
					}, 800)
				};
				first_scroll_skip = true;
        }), $(".up_icon").click(function() {
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: 0
            }, 800)
        }), $(".js-action").click(function(e) {
            e.preventDefault(), $(".action_wrapper").addClass("show")
        }), $(document).mouseup(function(e) {
            var t = $(".action_t");
            t.is(e.target) || 0 !== t.has(e.target).length || $(".action_wrapper").removeClass("show")
        }), $(".action_close").click(function() {
            $(".action_wrapper").removeClass("show")
        }), $(".header_menu_wrap a.active").addClass("here"), $(".header_menu_wrap a").mouseenter(function() {
            if ($(this).hasClass("js-submenu")) {
                $(this).addClass("active");
                var e = $(this).attr("data-menu");
                $(".header_i[data-menu=" + e + "]").addClass("open");
				
				if( $('html').hasClass('bx-core') ){
					var pan_height = $("#bx-panel").outerHeight();
					var header_height = $('.header').outerHeight();
					$(".header_i[data-menu=" + e + "]").css('top',pan_height+header_height+12+'px');
				} 
            }
        }).mouseleave(function() {
            $(this).hasClass("here") || ($(".header_i").removeClass("open"), $(this).removeClass("active"), $(".header_i").attr('style',''))
        }), $(".header_i").mouseenter(function() {
            var e = $(this).attr("data-menu");
            $(".header_menu_wrap a[data-menu=" + e + "]").addClass("active"), $(this).addClass("open");
			if( $('html').hasClass('bx-core') ){
					var pan_height = $("#bx-panel").outerHeight();
					var header_height = $('.header').outerHeight();
					$(this).css('top',pan_height+header_height+12+'px');
				} 
        }).mouseleave(function() {
            $(this).hasClass("open_fix") || ($(this).removeClass("open"), $(".header_menu_wrap a").removeClass("active"), $(this).attr('style',''))
        }), $(".header_i").hasClass("open")) {
        var c = $(".header_i.open").attr("data-menu");
        $(".header_menu_wrap a[data-menu=" + c + "]").addClass("active active_fix")
    }
    $(".play_icon").click(function(e) {
        var t = $(this),
            a = $(this).parent(),
            i = $(this).attr("data-videourl");
        t.hide();
        var o = a.width(),
            r = a.height();
        a.find("img").fadeOut(500), a.height(r).width(o), a.append('<iframe src="' + i + '?autoplay=1&color=ffffff&title=0&portrait=0" autoplay="true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width: ' + o + "px;height:" + r + 'px;border:none"></iframe>')
    });
    var u = null;
    if ($(".header_hamb").on("click", function() {
            if (null === u) {
                var e = $(".burger-click-region");
                e.toggleClass("active"), $(".mobile_menu").toggleClass("open"), e.hasClass("active") || e.addClass("closing"), u = setTimeout(function() {
                    e.removeClass("closing"), clearTimeout(u), u = null
                }, 300)
            }
        }), $(".pagefooter-scroll_text").click(function() {}), $(".pagefooter-scroll").click(function(e) {
            e.stopPropagation();
            var t = parseInt($(this).attr("data-screen")) - 1,
                a = $(".screen").eq(t).offset().top;
            return jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: a
            }, 800), !1
        }), $(window).scroll(function() {
            100 < $(this).scrollTop() ? $(".page_up_button").addClass("show") : $(".page_up_button").removeClass("show"), $("body").height() <= $(window).height() + $(window).scrollTop() + 400 ? ($(".page_up_button").removeClass("show"), $(".product_navigation").addClass("hide"), $(".product_notify").addClass("hide")) : ($(".product_navigation").removeClass("hide"), $(".product_notify").removeClass("hide"))
        }), 0 < $(".article_content").length, $(".js-contactus").click(function(e) {
            e.preventDefault(), $(".contactus_wrapper").addClass("show")
        }), $(document).mouseup(function(e) {
            var t = $(".contactus_t");
            t.is(e.target) || 0 !== t.has(e.target).length || $(".contactus_wrapper").removeClass("show")
        }), $(".js-contactus-close").click(function() {
            $(".action_wrapper").removeClass("show")
        }), $(".video_pp").magnificPopup({
            type: "iframe",
            iframe: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
                patterns: {
                    youtube: {
                        index: "youtube.com/",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                },
                srcAction: "iframe_src"
            },
            closeMarkup: '<button type="button" class="mfp-close"></button>'
        }), $(document).on("keypress change", ".error", function() {
            $(this).attr("name");
            $(this).removeClass("error");
			$(this).parent().find('.error_text').remove();
        }), $(".prlx_").mouseParallax({
            moveFactor: 2,
            targetContainer: "body"
        }), $(".prlx_mp1").mouseParallax({
            moveFactor: 25,
            targetContainer: "body"
        }), $(".prlx_mp1_2").mouseParallax({
            moveFactor: 18,
            targetContainer: "body"
        }), $(".prlx_mp1_3").mouseParallax({
            moveFactor: 12,
            targetContainer: "body"
        }), $(".prlx_mp1_4").mouseParallax({
            moveFactor: 5,
            targetContainer: "body"
        }), $('div[data-type="background"]').each(function() {
            var t = $(this);
            $(window).scroll(function() {
                var e = -$(window).scrollTop() / t.data("speed") + "px";
                t.css({
                    transform: "translateY(" + e + ")"
                })
            })
        }), setTimeout(function() {
            $(".text-tip").each(function() {
                $(this).qtip({
                    content: {
                        text: $(this).prev(".tip-block")
                    },
                    position: {
                        target: "mouse",
                        my: "left center",
                        at: "left center",
                        adjust: {
                            mouse: !1
                        }
                    },
                    hide: {
                        fixed: !0
                    }
                })
            })
        }, 500), window.location.hash && scroll(0, 0), setTimeout(function() {
            scroll(0, 0)
        }, 1), $(function() {
            if ($(".scroll").on("click", function(e) {
                    e.preventDefault(), $("html, body").animate({
                        scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
                    }, 1e3, "swing")
                }), window.location.hash) {
                var e = $(window.location.hash);
                0 < e.length || (e = $("[name=" + window.location.hash.slice(1) + "]")), $("html, body").animate({
                    scrollTop: e.offset().top - 100 + "px"
                }, 1e3, "swing")
            }
        }), $(window).outerWidth() <= 1024, $(".product_notify_text_close").click(function(e) {
            $(".product_notify").addClass("hide close")
        }), $(".js-warn").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("href");
            "undefined" == t && (t = "/for-specialists/"), "1" == $.cookie("warn_accept") ? window.location.href = t : $(".pp_warn_overlay").addClass("show")
        }), $(".js-pp-close, .js-warn-dec").click(function(e) {
            e.preventDefault(), $(".pp_warn_overlay").removeClass("show")
        }), $(".js-warn-accept").click(function(e) {
            $.cookie("warn_accept", "1", {
                expires: 7,
                path: "/"
            })
        }), 0 < $(".screen-first__slogan").length && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=1&a.ct=d", setTimeout(function() {
            (new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=2&a.ct=d"
        }, 3e4)), $(".social_share, .mobile_menu_share_item a").click(function() {
            "ok" == $(this).attr("data-type") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=10&a.ct=d"), "tw" == $(this).attr("data-type") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=11&a.ct=d"), "vk" == $(this).attr("data-type") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=12&a.ct=d"), "fb" == $(this).attr("data-type") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=13&a.ct=d")
        }), $(".copyrs").click(function() {
            (new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=14&a.ct=d"
        }), $(".slider-cirles__item").click(function() {
            $(this).hasClass("slider-cirles__item_1") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=15&a.ct=d"), $(this).hasClass("slider-cirles__item_2") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=16&a.ct=d"), $(this).hasClass("slider-cirles__item_3") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=17&a.ct=d"), $(this).hasClass("slider-cirles__item_4") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=18&a.ct=d"), $(this).hasClass("slider-cirles__item_5") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=19&a.ct=d"), $(this).hasClass("slider-cirles__item_6") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=20&a.ct=d")
        }), $(".wb_links_list_item a").click(function() {
            var e = $(this).attr("href");
            0 <= e.toLowerCase().indexOf("lekprice") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=21&a.ct=d"), 0 <= e.toLowerCase().indexOf("medlux") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=22&a.ct=d"), 0 <= e.toLowerCase().indexOf("aptekamos") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=23&a.ct=d"), 0 <= e.toLowerCase().indexOf("biosfera") && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=24&a.ct=d")
        }), $(".header_menu_wrap a").click(function() {
            var e = $(this).index();
            0 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=3&a.ct=d"), 1 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=4&a.ct=d"), 2 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=5&a.ct=d"), 3 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=6&a.ct=d"), 4 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=7&a.ct=d"), 5 == e && ((new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=8&a.ct=d")
        }), $(".pf_buy, .wherebuy__button").click(function() {
            (new Image).src = "https://akvion.solution.weborama.fr/fcgi-bin/dispatch.fcgi?a.A=co&a.si=5173&a.cp=9&a.ct=d"
        }), $("input[name=accept]").change(function() {
            $("input[name=accept]").is(":checked") ? $(this).parents("form").find(".btn[type=submit]").removeClass("disabled") : $(this).parents("form").find(".btn[type=submit]").addClass("disabled")
        }), $(".btn[type=submit]").click(function(e) {
            $(this).attr("data-th_text") && $(".form_thanks .ft_text").text($(this).attr("data-th_text")), $(this).hasClass("disabled") && e.preventDefault()
        }), $("body :not(script)").contents().filter(function() {
            return 3 === this.nodeType
        }).replaceWith(function() {
            return this.nodeValue.replace(/[™®©]/g, "<sup>$&</sup>")
        }), 768 <= $(window).width()) {
        var d = 0;
        $(".news-list__item").each(function() {
            var e = parseInt($(this).height());
            d < e && (d = e)
        }), $(".news-list__item").height(d)
    }
});
var ww = $(window).width();
768 <= ww && window.addEventListener("resize", function() {
    var t = 0;
    $(".news-list__item").each(function() {
        var e = parseInt($(this).height());
        t < e && (t = e)
    }), $(".news-list__item").height(t)
}), $(".articles_list_item_image img").each(function() {
    var e = $(this),
        t = "url(" + e.attr("src") + ")",
        a = e.parent(),
        i = $('<div class="articles_list_item_image-img"></div>');
    e.hide(), a.append(i), i.css({
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-image": t
    })
});