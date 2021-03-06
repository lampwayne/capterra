/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
function dean_addEvent(e, t, n) {
    if (e.addEventListener) e.addEventListener(t, n, !1); else {
        n.$$guid || (n.$$guid = dean_addEvent.guid++), e.events || (e.events = {});
        var i = e.events[t];
        i || (i = e.events[t] = {}, e["on" + t] && (i[0] = e["on" + t])), i[n.$$guid] = n, e["on" + t] = handleEvent
    }
}
function removeEvent(e, t, n) {
    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.events && e.events[t] && delete e.events[t][n.$$guid]
}
function handleEvent(e) {
    var t = !0;
    e = e || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
    var n = this.events[e.type];
    for (var i in n)this.$$handleEvent = n[i], !1 === this.$$handleEvent(e) && (t = !1);
    return t
}
function fixEvent(e) {
    return e.preventDefault = fixEvent.preventDefault, e.stopPropagation = fixEvent.stopPropagation, e
}
function doRecommendGauge(e, t) {
    $("html").hasClass("no-smil") || e ? $(".gauge-wrapper").each(function () {
        0 === $(this).find("img").length && ($(".gauge-svg").css("display", "none"), displayImage($(this), $(this).data("rating"), t))
    }) : $(".gauge-wrapper").each(function () {
        rotateGauge($(this).find(".gauge-meter"), $(this).data("rating"))
    })
}
function ratingFromForm(e) {
    return e.find(" > .ss-star > .ss-star").length
}
function buildStandardPayload(e, t, n) {
    return {event: "eventTracker", eventCategory: e, eventAction: t, eventLabel: n}
}
function buildVPPayload(e, t, n) {
    return {event: e, VPUrl: t, VPTitle: n}
}
function sendPayload(e, t, n, i) {
    i = i !== undefined && i;
    var r = i ? buildVPPayload(e, t, n) : buildStandardPayload(e, t, n);
    dataLayer.push(r)
}
function fieldLabel(e) {
    $(e).parent().find("label").text()
}
function pushTabData(e, t, n, i) {
    sendPayload("Infographic - " + e, n, i), sendPayload("VPTracker", i + t, "Infographic - " + e, !0)
}
/*
 * Symbolset
 * www.symbolset.com
 * Copyright © 2013 Oak Studios LLC
 *
 * Upload this file to your web server
 * and place this before the closing </body> tag.
 * <script src="webfonts/ss-FONTNAME.js"></script>
 */
if (function (e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
            if (!e.document)throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function n(e) {
            var t = e.length, n = re.type(e);
            return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
            if (re.isFunction(t))return re.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType)return re.grep(e, function (e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t))return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function (e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = be[e] = {};
            return re.each(e.match(ye) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            he.addEventListener ? (he.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (he.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (he.addEventListener || "load" === event.type || "complete" === he.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(_e, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n)
                    } catch (e) {
                    }
                    re.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, a = re.expando, s = e.nodeType, l = s ? re.cache : e, c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof t)return c || (c = s ? e[a] = X.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: re.noop}), "object" != typeof t && "function" != typeof t || (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[re.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[re.camelCase(t)]) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType, a = o ? re.cache : e, s = o ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;)delete i[t[r]];
                        if (n ? !c(i) : !re.isEmptyObject(i))return
                    }
                    (n || (delete a[s].data, c(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function p() {
            return !1
        }

        function h() {
            try {
                return he.activeElement
            } catch (e) {
            }
        }

        function m(e) {
            var t = Pe.split("|"), n = e.createDocumentFragment();
            if (n.createElement)for (; t.length;)n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : undefined;
            if (!o)for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)!t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
            return t === undefined || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) {
            Ne.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function w(e) {
            var t = Ue.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function C(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e), a = re._data(t, o), s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)for (i = 0, r = s[n].length; i < r; i++)re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function k(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events)re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function _(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function $(e) {
            var t = he, n = Ye[e];
            return n || (n = _(e, t), "none" !== n && n || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Je[0].contentWindow || Je[0].contentDocument).document, t.write(), t.close(), n = _(e, t), Je.detach()), Ye[e] = n), n
        }

        function T(e, t) {
            return {
                get: function () {
                    var n = e();
                    if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function E(e, t) {
            if (t in e)return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = dt.length; r--;)if ((t = dt[r] + n) in e)return t;
            return i
        }

        function S(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (o[a] = re._data(i, "olddisplay", $(i.nodeName)))) : (r = Ee(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
            for (a = 0; a < s; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function N(e, t, n) {
            var i = st.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function D(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += re.css(e, n + Te[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Te[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Te[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Te[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Te[o] + "Width", !0, r)));
            return a
        }

        function A(e, t, n) {
            var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = Ze(e),
                a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = et(e, t, o), (r < 0 || null == r) && (r = e.style[t]), nt.test(r))return r;
                i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + D(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function j(e, t, n, i, r) {
            return new j.prototype.init(e, t, n, i, r)
        }

        function L() {
            return setTimeout(function () {
                ft = undefined
            }), ft = re.now()
        }

        function F(e, t) {
            var n, i = {height: e}, r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t)n = Te[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function P(e, t, n) {
            for (var i, r = (yt[t] || []).concat(yt["*"]), o = 0, a = r.length; o < a; o++)if (i = r[o].call(n, t, e))return i
        }

        function H(e, t, n) {
            var i, r, o, a, s, l, c, u = this, d = {}, f = e.style, p = e.nodeType && Ee(e), h = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, u.always(function () {
                u.always(function () {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), "inline" === ("none" === c ? re._data(e, "olddisplay") || $(e.nodeName) : c) && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== $(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ne.shrinkWrapBlocks() || u.always(function () {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)if (r = t[i], ht.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || h[i] === undefined)continue;
                    p = !0
                }
                d[i] = h && h[i] || re.style(e, i)
            } else c = undefined;
            if (re.isEmptyObject(d)) "inline" === ("none" === c ? $(e.nodeName) : c) && (f.display = c); else {
                h ? "hidden" in h && (p = h.hidden) : h = re._data(e, "fxshow", {}), o && (h.hidden = !p), p ? re(e).show() : u.done(function () {
                    re(e).hide()
                }), u.done(function () {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in d)re.style(e, t, d[t])
                });
                for (i in d)a = P(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function q(e, t) {
            var n, i, r, o, a;
            for (n in e)if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = re.cssHooks[i]) && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o)n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
        }

        function B(e, t, n) {
            var i, r, o = 0, a = vt.length, s = re.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (r)return !1;
                for (var t = ft || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++)c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), o < 1 && l ? n : (s.resolveWith(e, [c]), !1)
            }, c = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {specialEasing: {}}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ft || L(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? c.tweens.length : 0;
                    if (r)return this;
                    for (r = !0; n < i; n++)c.tweens[n].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }), u = c.props;
            for (q(u, c.opts.specialEasing); o < a; o++)if (i = vt[o].call(c, e, u, c.opts))return i;
            return re.map(u, P, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function I(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0, o = t.toLowerCase().match(ye) || [];
                if (re.isFunction(n))for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, re.each(e[s] || [], function (e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }

            var o = {}, a = e === Mt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function O(e, t) {
            var n, i, r = re.ajaxSettings.flatOptions || {};
            for (i in t)t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function M(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)for (a in s)if (s[a] && s[a].test(r)) {
                l.unshift(a);
                break
            }
            if (l[0] in n) o = l[0]; else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            if (o)return o !== l[0] && l.unshift(o), n[o]
        }

        function z(e, t, n, i) {
            var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
            if (u[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                if (!(a = c[l + " " + o] || c["* " + o]))for (r in c)if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                    break
                }
                if (!0 !== a)if (a && e["throws"]) t = a(t); else try {
                    t = a(t)
                } catch (e) {
                    return {state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o}
                }
            }
            return {state: "success", data: t}
        }

        function V(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function (t, r) {
                n || Wt.test(e) ? i(e, r) : V(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            }); else if (n || "object" !== re.type(t)) i(e, t); else for (r in t)V(e + "[" + r + "]", t[r], n, i)
        }

        function W() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {
            }
        }

        function U() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function K(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }

        var X = [], G = X.slice, Q = X.concat, J = X.push, Y = X.indexOf, Z = {}, ee = Z.toString,
            te = Z.hasOwnProperty, ne = {}, ie = "1.11.1", re = function (e, t) {
                return new re.fn.init(e, t)
            }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ae = /^-ms-/, se = /-([\da-z])/gi, le = function (e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: ie, constructor: re, selector: "", length: 0, toArray: function () {
                return G.call(this)
            }, get: function (e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : G.call(this)
            }, pushStack: function (e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            }, each: function (e, t) {
                return re.each(this, e, t)
            }, map: function (e) {
                return this.pushStack(re.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(G.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: J, sort: X.sort, splice: X.splice
        }, re.extend = re.fn.extend = function () {
            var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)if (null != (r = arguments[s]))for (i in r)e = a[i], n = r[i], a !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(c, o, n)) : n !== undefined && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isFunction: function (e) {
                return "function" === re.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === re.type(e)
            }, isWindow: function (e) {
                return null != e && e == e.window
            }, isNumeric: function (e) {
                return !re.isArray(e) && e - parseFloat(e) >= 0
            }, isEmptyObject: function (e) {
                var t;
                for (t in e)return !1;
                return !0
            }, isPlainObject: function (e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e))return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (e) {
                    return !1
                }
                if (ne.ownLast)for (t in e)return te.call(e, t);
                for (t in e);
                return t === undefined || te.call(e, t)
            }, type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            }, globalEval: function (t) {
                t && re.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(ae, "ms-").replace(se, le)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }, each: function (e, t, i) {
                var r = 0, o = e.length, a = n(e);
                if (i) {
                    if (a)for (; r < o && !1 !== t.apply(e[r], i); r++); else for (r in e)if (!1 === t.apply(e[r], i))break
                } else if (a)for (; r < o && !1 !== t.call(e[r], r, e[r]); r++); else for (r in e)if (!1 === t.call(e[r], r, e[r]))break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(oe, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (Y)return Y.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)if (n in t && t[n] === e)return n
                }
                return -1
            }, merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n;)e[r++] = t[i++];
                if (n !== n)for (; t[i] !== undefined;)e[r++] = t[i++];
                return e.length = r, e
            }, grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)!t(e[r], r) !== a && i.push(e[r]);
                return i
            }, map: function (e, t, i) {
                var r, o = 0, a = e.length, s = n(e), l = [];
                if (s)for (; o < a; o++)null != (r = t(e[o], o, i)) && l.push(r); else for (o in e)null != (r = t(e[o], o, i)) && l.push(r);
                return Q.apply([], l)
            }, guid: 1, proxy: function (e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = G.call(arguments, 2), i = function () {
                    return e.apply(t || this, n.concat(G.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : undefined
            }, now: function () {
                return +new Date
            }, support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var ce = /*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
            function (e) {
                function t(e, t, n, i) {
                    var r, o, a, s, l, c, d, p, h, m;
                    if ((t ? t.ownerDocument || t : R) !== j && A(t), t = t || j, n = n || [], !e || "string" != typeof e)return n;
                    if (1 !== (s = t.nodeType) && 9 !== s)return [];
                    if (F && !i) {
                        if (r = ye.exec(e))if (a = r[1]) {
                            if (9 === s) {
                                if (!(o = t.getElementById(a)) || !o.parentNode)return n;
                                if (o.id === a)return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && B(t, o) && o.id === a)return n.push(o), n
                        } else {
                            if (r[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = r[3]) && x.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(a)), n
                        }
                        if (x.qsa && (!P || !P.test(e))) {
                            if (p = d = I, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = $(e), (d = t.getAttribute("id")) ? p = d.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + f(c[l]);
                                h = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                            }
                            if (m)try {
                                return Z.apply(n, h.querySelectorAll(m)), n
                            } catch (e) {
                            } finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return E(e.replace(le, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }

                    var t = [];
                    return e
                }

                function i(e) {
                    return e[I] = !0, e
                }

                function r(e) {
                    var t = j.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i)return i;
                    if (n)for (; n = n.nextSibling;)if (n === t)return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(e) {
                    return e && typeof e.getElementsByTagName !== K && e
                }

                function d() {
                }

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
                    return i
                }

                function p(e, t, n) {
                    var i = t.dir, r = n && "parentNode" === i, o = M++;
                    return t.first ? function (t, n, o) {
                        for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
                    } : function (t, n, a) {
                        var s, l, c = [O, o];
                        if (a) {
                            for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, a))return !0
                        } else for (; t = t[i];)if (1 === t.nodeType || r) {
                            if (l = t[I] || (t[I] = {}), (s = l[i]) && s[0] === O && s[1] === o)return c[2] = s[2];
                            if (l[i] = c, c[2] = e(t, n, a))return !0
                        }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, o = n.length; r < o; r++)t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                    return a
                }

                function v(e, t, n, r, o, a) {
                    return r && !r[I] && (r = v(r)), o && !o[I] && (o = v(o, a)), i(function (i, a, s, l) {
                        var c, u, d, f = [], p = [], h = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !i && t ? v : g(v, f, e, s, l), b = n ? o || (i ? e : h || r) ? [] : a : y;
                        if (n && n(y, b, s, l), r)for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                    o(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? te.call(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                        return e === t
                    }, a, !0), c = p(function (e) {
                        return te.call(t, e) > -1
                    }, a, !0), u = [function (e, n, i) {
                        return !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                    }]; s < r; s++)if (n = C.relative[e[s].type]) u = [p(h(u), n)]; else {
                        if (n = C.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                            for (i = ++s; i < r && !C.relative[e[i].type]; i++);
                            return v(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(le, "$1"), n, s < i && y(e.slice(s, i)), i < r && y(e = e.slice(i)), i < r && f(e))
                        }
                        u.push(n)
                    }
                    return h(u)
                }

                function b(e, n) {
                    var r = n.length > 0, o = e.length > 0, a = function (i, a, s, l, c) {
                        var u, d, f, p = 0, h = "0", m = i && [], v = [], y = S, b = i || o && C.find.TAG("*", c),
                            w = O += null == y ? 1 : Math.random() || .1, x = b.length;
                        for (c && (S = a !== j && a); h !== x && null != (u = b[h]); h++) {
                            if (o && u) {
                                for (d = 0; f = e[d++];)if (f(u, a, s)) {
                                    l.push(u);
                                    break
                                }
                                c && (O = w)
                            }
                            r && ((u = !f && u) && p--, i && m.push(u))
                        }
                        if (p += h, r && h !== p) {
                            for (d = 0; f = n[d++];)f(m, v, a, s);
                            if (i) {
                                if (p > 0)for (; h--;)m[h] || v[h] || (v[h] = J.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (O = w, S = y), m
                    };
                    return r ? i(a) : a
                }

                var w, x, C, k, _, $, T, E, S, N, D, A, j, L, F, P, H, q, B, I = "sizzle" + -new Date, R = e.document,
                    O = 0, M = 0, z = n(), V = n(), W = n(), U = function (e, t) {
                        return e === t && (D = !0), 0
                    }, K = typeof undefined, X = 1 << 31, G = {}.hasOwnProperty, Q = [], J = Q.pop, Y = Q.push, Z = Q.push,
                    ee = Q.slice, te = Q.indexOf || function (e) {
                            for (var t = 0, n = this.length; t < n; t++)if (this[t] === e)return t;
                            return -1
                        },
                    ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"),
                    ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                    se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                    le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    ce = new RegExp("^" + ie + "*," + ie + "*"),
                    ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), fe = new RegExp(se),
                    pe = new RegExp("^" + oe + "$"), he = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ae),
                        PSEUDO: new RegExp("^" + se),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ne + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g,
                    xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), Ce = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    Z.apply(Q = ee.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
                } catch (e) {
                    Z = {
                        apply: Q.length ? function (e, t) {
                            Y.apply(e, ee.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, _ = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, A = t.setDocument = function (e) {
                    var t, n = e ? e.ownerDocument || e : R, i = n.defaultView;
                    return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, L = n.documentElement, F = !_(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                        A()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                            A()
                        })), x.attributes = r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = r(function (e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function (e) {
                            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                        }), x.getById = r(function (e) {
                        return L.appendChild(e).id = I, !n.getElementsByName || !n.getElementsByName(I).length
                    }), x.getById ? (C.find.ID = function (e, t) {
                        if (typeof t.getElementById !== K && F) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, C.filter.ID = function (e) {
                        var t = e.replace(xe, Ce);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function (e) {
                        var t = e.replace(xe, Ce);
                        return function (e) {
                            var n = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), C.find.TAG = x.getElementsByTagName ? function (e, t) {
                        if (typeof t.getElementsByTagName !== K)return t.getElementsByTagName(e)
                    } : function (e, t) {
                        var n, i = [], r = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];)1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, C.find.CLASS = x.getElementsByClassName && function (e, t) {
                            if (typeof t.getElementsByClassName !== K && F)return t.getElementsByClassName(e)
                        }, H = [], P = [], (x.qsa = ve.test(n.querySelectorAll)) && (r(function (e) {
                        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && P.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || P.push(":checked")
                    }), r(function (e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (x.matchesSelector = ve.test(q = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function (e) {
                        x.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), H.push("!=", se)
                    }), P = P.length && new RegExp(P.join("|")), H = H.length && new RegExp(H.join("|")), t = ve.test(L.compareDocumentPosition), B = t || ve.test(L.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)for (; t = t.parentNode;)if (t === e)return !0;
                        return !1
                    }, U = t ? function (e, t) {
                        if (e === t)return D = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === R && B(R, e) ? -1 : t === n || t.ownerDocument === R && B(R, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & i ? -1 : 1)
                    } : function (e, t) {
                        if (e === t)return D = !0, 0;
                        var i, r = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                        if (!o || !s)return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
                        if (o === s)return a(e, t);
                        for (i = e; i = i.parentNode;)l.unshift(i);
                        for (i = t; i = i.parentNode;)c.unshift(i);
                        for (; l[r] === c[r];)r++;
                        return r ? a(l[r], c[r]) : l[r] === R ? -1 : c[r] === R ? 1 : 0
                    }, n) : j
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== j && A(e), n = n.replace(de, "='$1']"), x.matchesSelector && F && (!H || !H.test(n)) && (!P || !P.test(n)))try {
                        var i = q.call(e, n);
                        if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
                    } catch (e) {
                    }
                    return t(n, j, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== j && A(e), B(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== j && A(e);
                    var n = C.attrHandle[t.toLowerCase()],
                        i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !F) : undefined;
                    return i !== undefined ? i : x.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [], i = 0, r = 0;
                    if (D = !x.detectDuplicates, N = !x.sortStable && e.slice(0), e.sort(U), D) {
                        for (; t = e[r++];)t === e[r] && (i = n.push(r));
                        for (; i--;)e.splice(n[i], 1)
                    }
                    return N = null, e
                }, k = t.getText = function (e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
                        } else if (3 === r || 4 === r)return e.nodeValue
                    } else for (; t = e[i++];)n += k(t);
                    return n
                }, C = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: he,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(xe, Ce), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(xe, Ce).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, i) {
                            return function (r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                            return 1 === i && 0 === r ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, l) {
                                var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(), y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[I] || (g[I] = {}), c = u[e] || [], p = c[0] === O && c[1], f = c[0] === O && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)if (1 === d.nodeType && ++f && d === t) {
                                            u[e] = [O, p, f];
                                            break
                                        }
                                    } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === O) f = c[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [O, f]), d !== t)););
                                    return (f -= r) === i || f % i == 0 && f / i >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var r,
                                o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, r = o(e, n), a = r.length; a--;)i = te.call(e, r[a]), e[i] = !(t[i] = r[a])
                            }) : function (e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [], n = [], r = T(e.replace(le, "$1"));
                            return r[I] ? i(function (e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function (e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop()
                            }
                        }), has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }), contains: i(function (e) {
                            return function (t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }), lang: i(function (e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, Ce).toLowerCase(), function (t) {
                                var n;
                                do {
                                    if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }), target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === L
                        }, focus: function (e) {
                            return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return !1 === e.disabled
                        }, disabled: function (e) {
                            return !0 === e.disabled
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                            return !0
                        }, parent: function (e) {
                            return !C.pseudos.empty(e)
                        }, header: function (e) {
                            return ge.test(e.nodeName)
                        }, input: function (e) {
                            return me.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: c(function () {
                            return [0]
                        }), last: c(function (e, t) {
                            return [t - 1]
                        }), eq: c(function (e, t, n) {
                            return [n < 0 ? n + t : n]
                        }), even: c(function (e, t) {
                            for (var n = 0; n < t; n += 2)e.push(n);
                            return e
                        }), odd: c(function (e, t) {
                            for (var n = 1; n < t; n += 2)e.push(n);
                            return e
                        }), lt: c(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
                            return e
                        }), gt: c(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
                            return e
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = s(w);
                for (w in{submit: !0, reset: !0})C.pseudos[w] = l(w);
                return d.prototype = C.filters = C.pseudos, C.setFilters = new d, $ = t.tokenize = function (e, n) {
                    var i, r, o, a, s, l, c, u = V[e + " "];
                    if (u)return n ? 0 : u.slice(0);
                    for (s = e, l = [], c = C.preFilter; s;) {
                        i && !(r = ce.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), s = s.slice(i.length));
                        for (a in C.filter)!(r = he[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i)break
                    }
                    return n ? s.length : s ? t.error(e) : V(e, l).slice(0)
                }, T = t.compile = function (e, t) {
                    var n, i = [], r = [], o = W[e + " "];
                    if (!o) {
                        for (t || (t = $(e)), n = t.length; n--;)o = y(t[n]), o[I] ? i.push(o) : r.push(o);
                        o = W(e, b(r, i)), o.selector = e
                    }
                    return o
                }, E = t.select = function (e, t, n, i) {
                    var r, o, a, s, l, c = "function" == typeof e && e, d = !i && $(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && F && C.relative[o[1].type]) {
                            if (!(t = (C.find.ID(a.matches[0].replace(xe, Ce), t) || [])[0]))return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)if ((l = C.find[s]) && (i = l(a.matches[0].replace(xe, Ce), be.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && f(o)))return Z.apply(n, i), n;
                            break
                        }
                    }
                    return (c || T(e, d))(i, t, !F, n, be.test(e) && u(t.parentNode) || t), n
                }, x.sortStable = I.split("").sort(U).join("") === I, x.detectDuplicates = !!D, A(), x.sortDetached = r(function (e) {
                    return 1 & e.compareDocumentPosition(j.createElement("div"))
                }), r(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (e, t, n) {
                    if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && r(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
                }), r(function (e) {
                    return null == e.getAttribute("disabled")
                }) || o(ne, function (e, t, n) {
                    var i;
                    if (!n)return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var ue = re.expr.match.needsContext, de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, fe = /^.[^:#\[\.,]*$/;
        re.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function (e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e)return this.pushStack(re(e).filter(function () {
                    for (t = 0; t < r; t++)if (re.contains(i[t], this))return !0
                }));
                for (t = 0; t < r; t++)re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            }, filter: function (e) {
                return this.pushStack(i(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(i(this, e || [], !0))
            }, is: function (e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
            }
        });
        var pe, he = e.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (re.fn.init = function (e, t) {
            var n, i;
            if (!e)return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e)) || !n[1] && t)return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : he, !0)), de.test(n[1]) && re.isPlainObject(t))for (n in t)re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((i = he.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2])return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = he, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(re) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        }).prototype = re.fn, pe = re(he);
        var ge = /^(?:parents|prev(?:Until|All))/, ve = {children: !0, contents: !0, next: !0, prev: !0};
        re.extend({
            dir: function (e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (n === undefined || 1 !== r.nodeType || !re(r).is(n));)1 === r.nodeType && i.push(r), r = r[t];
                return i
            }, sibling: function (e, t) {
                for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function (e) {
                var t, n = re(e, this), i = n.length;
                return this.filter(function () {
                    for (t = 0; t < i; t++)if (re.contains(this, n[t]))return !0
                })
            }, closest: function (e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; i < r; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return re.dir(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return re.dir(e, "parentNode", n)
            }, next: function (e) {
                return r(e, "nextSibling")
            }, prev: function (e) {
                return r(e, "previousSibling")
            }, nextAll: function (e) {
                return re.dir(e, "nextSibling")
            }, prevAll: function (e) {
                return re.dir(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return re.dir(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return re.dir(e, "previousSibling", n)
            }, siblings: function (e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return re.sibling(e.firstChild)
            }, contents: function (e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function (e, t) {
            re.fn[e] = function (n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ve[e] || (r = re.unique(r)), ge.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var ye = /\S+/g, be = {};
        re.Callbacks = function (e) {
            e = "string" == typeof e ? be[e] || o(e) : re.extend({}, e);
            var t, n, i, r, a, s, l = [], c = !e.once && [], u = function (o) {
                for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && a < r; a++)if (!1 === l[a].apply(o[0], o[1]) && e.stopOnFalse) {
                    n = !1;
                    break
                }
                t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function t(n) {
                            re.each(n, function (n, i) {
                                var r = re.type(i);
                                "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                            })
                        }(arguments), t ? r = l.length : n && (s = i, u(n))
                    }
                    return this
                }, remove: function () {
                    return l && re.each(arguments, function (e, n) {
                        for (var i; (i = re.inArray(n, l, i)) > -1;)l.splice(i, 1), t && (i <= r && r--, i <= a && a--)
                    }), this
                }, has: function (e) {
                    return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], r = 0, this
                }, disable: function () {
                    return l = c = n = undefined, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = undefined, n || d.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (e, n) {
                    return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, re.extend({
            Deferred: function (e) {
                var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
                    n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return r.done(arguments).fail(arguments), this
                        }, then: function () {
                            var e = arguments;
                            return re.Deferred(function (n) {
                                re.each(t, function (t, o) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    }, r = {};
                return i.pipe = i.then, re.each(t, function (e, o) {
                    var a = o[2], s = o[3];
                    i[o[1]] = a.add, s && a.add(function () {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            }, when: function (e) {
                var t, n, i, r = 0, o = G.call(arguments), a = o.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0, l = 1 === s ? e : re.Deferred(),
                    c = function (e, n, i) {
                        return function (r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++)o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        re.fn.ready = function (e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? re.readyWait++ : re.ready(!0)
            }, ready: function (e) {
                if (!0 === e ? !--re.readyWait : !re.isReady) {
                    if (!he.body)return setTimeout(re.ready);
                    re.isReady = !0, !0 !== e && --re.readyWait > 0 || (we.resolveWith(he, [re]), re.fn.triggerHandler && (re(he).triggerHandler("ready"), re(he).off("ready")))
                }
            }
        }), re.ready.promise = function (t) {
            if (!we)if (we = re.Deferred(), "complete" === he.readyState) setTimeout(re.ready); else if (he.addEventListener) he.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1); else {
                he.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && he.documentElement
                } catch (e) {
                }
                n && n.doScroll && function e() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var xe, Ce = typeof undefined;
        for (xe in re(ne))break;
        ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, re(function () {
            var e, t, n, i;
            (n = he.getElementsByTagName("body")[0]) && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var e = he.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(), re.acceptData = function (e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
        var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, _e = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (e) {
                return !!(e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando]) && !c(e)
            },
            data: function (e, t, n) {
                return u(e, t, n)
            },
            removeData: function (e, t) {
                return d(e, t)
            },
            _data: function (e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function (e, t) {
                return d(e, t, !0)
            }
        }), re.fn.extend({
            data: function (e, t) {
                var n, i, r, o = this[0], a = o && o.attributes;
                if (e === undefined) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function () {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function () {
                    re.data(this, e, t)
                }) : o ? l(o, e, re.data(o, e)) : undefined
            }, removeData: function (e) {
                return this.each(function () {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function (e, t, n) {
                var i;
                if (e)return t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = re.queue(e, t), i = n.length, r = n.shift(), o = re._queueHooks(e, t), a = function () {
                    re.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                        empty: re.Callbacks("once memory").add(function () {
                            re._removeData(e, t + "queue"), re._removeData(e, n)
                        })
                    })
            }
        }), re.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : t === undefined ? this : this.each(function () {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    re.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, r = re.Deferred(), o = this, a = this.length, s = function () {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = re._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Te = ["Top", "Right", "Bottom", "Left"],
            Ee = function (e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            }, Se = re.access = function (e, t, n, i, r, o, a) {
                var s = 0, l = e.length, c = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (s in n)re.access(e, t, s, n[s], !0, o, a)
                } else if (i !== undefined && (r = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                        return c.call(re(e), n)
                    })), t))for (; s < l; s++)t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            }, Ne = /^(?:checkbox|radio)$/i;
        !function () {
            var e = he.createElement("input"), t = he.createElement("div"), n = he.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== he.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
        }(), function () {
            var t, n, i = he.createElement("div");
            for (t in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = !1 === i.attributes[n].expando);
            i = null
        }();
        var De = /^(?:input|select|textarea)$/i, Ae = /^key/, je = /^(?:mouse|pointer|contextmenu)|click/,
            Le = /^(?:focusinfocus|focusoutblur)$/, Fe = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function (e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, p, h, m, g = re._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                        return typeof re === Ce || e && re.event.triggered === e.type ? undefined : re.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(ye) || [""], s = t.length; s--;)o = Fe.exec(t[s]) || [], p = m = o[1], h = (o[2] || "").split(".").sort(), p && (c = re.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = re.event.special[p] || {}, d = re.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[p] = !0);
                    e = null
                }
            },
            remove: function (e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, p, h, m, g = re.hasData(e) && re._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(ye) || [""], c = t.length; c--;)if (s = Fe.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = re.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;)a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || re.removeEvent(e, p, g.handle), delete u[p])
                    } else for (p in u)re.event.remove(e, p + t[c], n, i, !0);
                    re.isEmptyObject(u) && (delete g.handle, re._removeData(e, "events"))
                }
            },
            trigger: function (t, n, i, r) {
                var o, a, s, l, c, u, d, f = [i || he], p = te.call(t, "type") ? t.type : t,
                    h = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || he, 3 !== i.nodeType && 8 !== i.nodeType && !Le.test(p + re.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t),
                        t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), c = re.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!r && !c.noBubble && !re.isWindow(i)) {
                        for (l = c.delegateType || p, Le.test(l + p) || (s = s.parentNode); s; s = s.parentNode)f.push(s), u = s;
                        u === (i.ownerDocument || he) && f.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0; (s = f[d++]) && !t.isPropagationStopped();)t.type = d > 1 ? l : c.bindType || p, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), (o = a && s[a]) && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = p, !r && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(f.pop(), n)) && re.acceptData(i) && a && i[p] && !re.isWindow(i)) {
                        u = i[a], u && (i[a] = null), re.event.triggered = p;
                        try {
                            i[p]()
                        } catch (e) {
                        }
                        re.event.triggered = undefined, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function (e) {
                e = re.event.fix(e);
                var t, n, i, r, o, a = [], s = G.call(arguments), l = (re._data(this, "events") || {})[e.type] || [],
                    c = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = re.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) !== undefined && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function (e, t) {
                var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                    for (r = [], o = 0; o < s; o++)i = t[o], n = i.selector + " ", r[n] === undefined && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                    r.length && a.push({elem: l, handlers: r})
                }
                return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
            },
            fix: function (e) {
                if (e[re.expando])return e;
                var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = je.test(r) ? this.mouseHooks : Ae.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || he), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (e, t) {
                    var n, i, r, o = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || he, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== h() && this.focus)try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === h() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (re.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                    }, _default: function (e) {
                        return re.nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function (e, t, n, i) {
                var r = re.extend(new re.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = he.removeEventListener ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Ce && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function (e, t) {
            if (!(this instanceof re.Event))return new re.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? f : p) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), this[re.expando] = !0
        }, re.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            re.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    return r && (r === i || re.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function () {
                if (re.nodeName(this, "form"))return !1;
                re.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : undefined;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            }, teardown: function () {
                if (re.nodeName(this, "form"))return !1;
                re.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function () {
                if (De.test(this.nodeName))return "checkbox" !== this.type && "radio" !== this.type || (re.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1;
                re.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    De.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function (e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return re.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ne.focusinBubbles || re.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function (e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = undefined);
                    for (o in e)this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = undefined) : null == i && ("string" == typeof t ? (i = n, n = undefined) : (i = n, n = t, t = undefined)), !1 === i) i = p; else if (!i)return this;
                return 1 === r && (a = i, i = function (e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function () {
                    re.event.add(this, e, i, n, t)
                })
            }, one: function (e, t, n, i) {
                return this.on(e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e)this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = p), this.each(function () {
                    re.event.remove(this, e, n, t)
                })
            }, trigger: function (e, t) {
                return this.each(function () {
                    re.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n)return re.event.trigger(e, t, n, !0)
            }
        });
        var Pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            He = / jQuery\d+="(?:null|\d+)"/g, qe = new RegExp("<(?:" + Pe + ")[\\s/>]", "i"), Be = /^\s+/,
            Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Re = /<([\w:]+)/,
            Oe = /<tbody/i, Me = /<|&#?\w+;/, ze = /<(?:script|style|link)/i, Ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
            We = /^$|\/(?:java|ecma)script/i, Ue = /^true\/(.*)/, Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }, Ge = m(he), Qe = Ge.appendChild(he.createElement("div"));
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, re.extend({
            clone: function (e, t, n) {
                var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !qe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(o = Qe.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a)i[a] && k(r, i[a]);
                if (t)if (n)for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++)C(r, i[a]); else C(e, o);
                return i = g(o, "script"), i.length > 0 && x(i, !l && g(e, "script")), i = s = r = null, o
            }, buildFragment: function (e, t, n, i) {
                for (var r, o, a, s, l, c, u, d = e.length, f = m(t), p = [], h = 0; h < d; h++)if ((o = e[h]) || 0 === o)if ("object" === re.type(o)) re.merge(p, o.nodeType ? [o] : o); else if (Me.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), l = (Re.exec(o) || ["", ""])[1].toLowerCase(), u = Xe[l] || Xe._default, s.innerHTML = u[1] + o.replace(Ie, "<$1></$2>") + u[2], r = u[0]; r--;)s = s.lastChild;
                    if (!ne.leadingWhitespace && Be.test(o) && p.push(t.createTextNode(Be.exec(o)[0])), !ne.tbody)for (o = "table" !== l || Oe.test(o) ? "<table>" !== u[1] || Oe.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;)re.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (re.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                    s = f.lastChild
                } else p.push(t.createTextNode(o));
                for (s && f.removeChild(s), ne.appendChecked || re.grep(g(p, "input"), v), h = 0; o = p[h++];)if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && x(s), n))for (r = 0; o = s[r++];)We.test(o.type || "") && n.push(o);
                return s = null, f
            }, cleanData: function (e, t) {
                for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = e[a]); a++)if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events)for (i in o.events)u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== Ce ? n.removeAttribute(s) : n[s] = null, X.push(r))
                }
            }
        }), re.fn.extend({
            text: function (e) {
                return Se(this, function (e) {
                    return e === undefined ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || he).createTextNode(e))
                }, null, e, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        y(this, e).appendChild(e)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, remove: function (e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return re.clone(this, e, t)
                })
            }, html: function (e) {
                return Se(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (e === undefined)return 1 === t.nodeType ? t.innerHTML.replace(He, "") : undefined;
                    if ("string" == typeof e && !ze.test(e) && (ne.htmlSerialize || !qe.test(e)) && (ne.leadingWhitespace || !Be.test(e)) && !Xe[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ie, "<$1></$2>");
                        try {
                            for (; n < i; n++)t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = arguments[0];
                return this.domManip(arguments, function (t) {
                    e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            }, detach: function (e) {
                return this.remove(e, !0)
            }, domManip: function (e, t) {
                e = Q.apply([], e);
                var n, i, r, o, a, s, l = 0, c = this.length, u = this, d = c - 1, f = e[0], p = re.isFunction(f);
                if (p || c > 1 && "string" == typeof f && !ne.checkClone && Ve.test(f))return this.each(function (n) {
                    var i = u.eq(n);
                    p && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = re.map(g(s, "script"), b), r = o.length; l < c; l++)i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (r)for (a = o[o.length - 1].ownerDocument, re.map(o, w), l = 0; l < r; l++)i = o[l], We.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ke, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            re.fn[e] = function (e) {
                for (var n, i = 0, r = [], o = re(e), a = o.length - 1; i <= a; i++)n = i === a ? this : this.clone(!0), re(o[i])[t](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Je, Ye = {};
        !function () {
            var e;
            ne.shrinkWrapBlocks = function () {
                if (null != e)return e;
                e = !1;
                var t, n, i;
                return (n = he.getElementsByTagName("body")[0]) && n.style ? (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(he.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var Ze, et, tt = /^margin/, nt = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"),
            it = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (Ze = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, et = function (e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || Ze(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), nt.test(a) && tt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), a === undefined ? a : a + ""
        }) : he.documentElement.currentStyle && (Ze = function (e) {
                return e.currentStyle
            }, et = function (e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || Ze(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), nt.test(a) && !it.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), a === undefined ? a : a + "" || "auto"
            }), function () {
            function t() {
                var t, n, i, r;
                (n = he.getElementsByTagName("body")[0]) && n.style && (t = he.createElement("div"), i = he.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, r = t.appendChild(he.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
            }

            var n, i, r, o, a, s, l;
            n = he.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], (i = r && r.style) && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                }, boxSizingReliable: function () {
                    return null == a && t(), a
                }, pixelPosition: function () {
                    return null == o && t(), o
                }, reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), re.swap = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)e.style[o] = a[o];
            return r
        };
        var rt = /alpha\([^)]*\)/i, ot = /opacity\s*=\s*([^)]*)/, at = /^(none|table(?!-c[ea]).+)/,
            st = new RegExp("^(" + $e + ")(.*)$", "i"), lt = new RegExp("^([+-])=(" + $e + ")", "i"),
            ct = {position: "absolute", visibility: "hidden", display: "block"},
            ut = {letterSpacing: "0", fontWeight: "400"}, dt = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = et(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = re.camelCase(t), l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = E(l, s)), a = re.cssHooks[t] || re.cssHooks[s], n === undefined)return a && "get" in a && (r = a.get(e, !1, i)) !== undefined ? r : l[t];
                    if (o = typeof n, "string" === o && (r = lt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined)))try {
                        l[t] = n
                    } catch (e) {
                    }
                }
            },
            css: function (e, t, n, i) {
                var r, o, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = E(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = et(e, t, i)), "normal" === o && t in ut && (o = ut[t]), "" === n || n ? (r = parseFloat(o), !0 === n || re.isNumeric(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function (e, t) {
            re.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)return at.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ct, function () {
                        return A(e, t, i)
                    }) : A(e, t, i)
                }, set: function (e, n, i) {
                    var r = i && Ze(e);
                    return N(e, n, i ? D(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.opacity || (re.cssHooks.opacity = {
            get: function (e, t) {
                return ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(o) ? o.replace(rt, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = T(ne.reliableMarginRight, function (e, t) {
            if (t)return re.swap(e, {display: "inline-block"}, et, [e, "marginRight"])
        }), re.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            re.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)r[e + Te[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, tt.test(e) || (re.cssHooks[e + t].set = N)
        }), re.fn.extend({
            css: function (e, t) {
                return Se(this, function (e, t, n) {
                    var i, r, o = {}, a = 0;
                    if (re.isArray(t)) {
                        for (i = Ze(e), r = t.length; a < r; a++)o[t[a]] = re.css(e, t[a], !1, i);
                        return o
                    }
                    return n !== undefined ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            }, show: function () {
                return S(this, !0)
            }, hide: function () {
                return S(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    Ee(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = j, j.prototype = {
            constructor: j, init: function (e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = j.propHooks[this.prop];
                return e && e.get ? e.get(this) : j.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = j.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                }, set: function (e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = j.prototype.init, re.fx.step = {};
        var ft, pt, ht = /^(?:toggle|show|hide)$/, mt = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"),
            gt = /queueHooks$/, vt = [H], yt = {
                "*": [function (e, t) {
                    var n = this.createTween(e, t), i = n.cur(), r = mt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== o && +i) && mt.exec(re.css(n.elem, e)), s = 1, l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do {
                            s = s || ".5", a /= s, re.style(n.elem, e, a + o)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(B, {
            tweener: function (e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; i < r; i++)n = e[i], yt[n] = yt[n] || [], yt[n].unshift(t)
            }, prefilter: function (e, t) {
                t ? vt.unshift(e) : vt.push(e)
            }
        }), re.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
            }, i
        }, re.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var r = re.isEmptyObject(e), o = re.speed(t, n, i), a = function () {
                    var t = B(this, re.extend({}, e), o);
                    (r || re._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, r = null != e && e + "queueHooks", o = re.timers, a = re._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && gt.test(r) && i(a[r]);
                    for (r = o.length; r--;)o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || re.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = re._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = re.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (e, t) {
            var n = re.fn[t];
            re.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
            }
        }), re.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            re.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), re.timers = [], re.fx.tick = function () {
            var e, t = re.timers, n = 0;
            for (ft = re.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
            t.length || re.fx.stop(), ft = undefined
        }, re.fx.timer = function (e) {
            re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
        }, re.fx.interval = 13, re.fx.start = function () {
            pt || (pt = setInterval(re.fx.tick, re.fx.interval))
        }, re.fx.stop = function () {
            clearInterval(pt), pt = null
        }, re.fx.speeds = {slow: 600, fast: 200, _default: 400}, re.fn.delay = function (e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var e, t, n, i, r;
            t = he.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = he.createElement("select"), r = n.appendChild(he.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!he.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = he.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
        }();
        var bt = /\r/g;
        re.fn.extend({
            val: function (e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)return i = re.isFunction(e), this.each(function (n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (e) {
                                return null == e ? "" : e + ""
                            })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                    });
                    if (r)return (t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                }, select: {
                    get: function (e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)if (n = i[l], (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), o)return t;
                            a.push(t)
                        }
                        return a
                    }, set: function (e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0)try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function () {
            re.valHooks[this] = {
                set: function (e, t) {
                    if (re.isArray(t))return e.checked = re.inArray(re(e).val(), t) >= 0
                }
            }, ne.checkOn || (re.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, xt, Ct = re.expr.attrHandle, kt = /^(?:checked|selected)$/i, _t = ne.getSetAttribute, $t = ne.input;
        re.fn.extend({
            attr: function (e, t) {
                return Se(this, re.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function (e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ce ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : wt)), n === undefined ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? undefined : r) : null !== n ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            }, removeAttr: function (e, t) {
                var n, i, r = 0, o = t && t.match(ye);
                if (o && 1 === e.nodeType)for (; n = o[r++];)i = re.propFix[n] || n, re.expr.match.bool.test(n) ? $t && _t || !kt.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(_t ? n : i)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), xt = {
            set: function (e, t, n) {
                return !1 === t ? re.removeAttr(e, n) : $t && _t || !kt.test(n) ? e.setAttribute(!_t && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Ct[t] || re.find.attr;
            Ct[t] = $t && _t || !kt.test(t) ? function (e, t, i) {
                var r, o;
                return i || (o = Ct[t], Ct[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ct[t] = o), r
            } : function (e, t, n) {
                if (!n)return e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), $t && _t || (re.attrHooks.value = {
            set: function (e, t, n) {
                if (!re.nodeName(e, "input"))return wt && wt.set(e, t, n);
                e.defaultValue = t
            }
        }), _t || (wt = {
            set: function (e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n))return t
            }
        }, Ct.id = Ct.name = Ct.coords = function (e, t, n) {
            var i;
            if (!n)return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function (e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified)return n.value
            }, set: wt.set
        }, re.attrHooks.contenteditable = {
            set: function (e, t, n) {
                wt.set(e, "" !== t && t, n)
            }
        }, re.each(["width", "height"], function (e, t) {
            re.attrHooks[t] = {
                set: function (e, n) {
                    if ("" === n)return e.setAttribute(t, "auto"), n
                }
            }
        })), ne.style || (re.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || undefined
            }, set: function (e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Tt = /^(?:input|select|textarea|button|object)$/i, Et = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function (e, t) {
                return Se(this, re.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return e = re.propFix[e] || e, this.each(function () {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (e) {
                    }
                })
            }
        }), re.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || re.each(["href", "src"], function (e, t) {
            re.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (re.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            re.propFix[this.toLowerCase()] = this
        }), ne.enctype || (re.propFix.enctype = "encoding");
        var St = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function (e) {
                var t, n, i, r, o, a, s = 0, l = this.length, c = "string" == typeof e && e;
                if (re.isFunction(e))return this.each(function (t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (c)for (t = (e || "").match(ye) || []; s < l; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : " ")) {
                    for (o = 0; r = t[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                    a = re.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, r, o, a, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e))return this.each(function (t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (c)for (t = (e || "").match(ye) || []; s < l; s++)if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(St, " ") : "")) {
                    for (o = 0; r = t[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                    a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function () {
                    if ("string" === n)for (var t, i = 0, r = re(this), o = e.match(ye) || []; t = o[i++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else n !== Ce && "boolean" !== n || (this.className && re._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : re._data(this, "__className__") || "")
                })
            }, hasClass: function (e) {
                for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(St, " ").indexOf(t) >= 0)return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
            re.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }, bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var Nt = re.now(), Dt = /\?/,
            At = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function (t) {
            if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
            var n, i = null, r = re.trim(t + "");
            return r && !re.trim(r.replace(At, function (e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function (t) {
            var n, i;
            if (!t || "string" != typeof t)return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = undefined
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var jt, Lt, Ft = /#.*$/, Pt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Bt = /^(?:GET|HEAD)$/, It = /^\/\//,
            Rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Ot = {}, Mt = {}, zt = "*/".concat("*");
        try {
            Lt = location.href
        } catch (e) {
            Lt = he.createElement("a"), Lt.href = "", Lt = Lt.href
        }
        jt = Rt.exec(Lt.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Lt,
                type: "GET",
                isLocal: qt.test(jt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? O(O(e, re.ajaxSettings), t) : O(re.ajaxSettings, e)
            },
            ajaxPrefilter: I(Ot),
            ajaxTransport: I(Mt),
            ajax: function (e, t) {
                function n(e, t, n, i) {
                    var r, u, v, y, w, C = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = undefined, a = i || "", x.readyState = e > 0 ? 4 : 0, r = e >= 200 && e < 300 || 304 === e, n && (y = M(d, x, n)), y = z(d, y, x, r), r ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (re.lastModified[o] = w), (w = x.getResponseHeader("etag")) && (re.etag[o] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, r = !v)) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || C) + "", r ? h.resolveWith(f, [u, C, x]) : h.rejectWith(f, [x, C, v]), x.statusCode(g), g = undefined, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [x, d, r ? u : v]), m.fireWith(f, [x, C]), l && (p.trigger("ajaxComplete", [x, d]), --re.active || re.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = undefined), t = t || {};
                var i, r, o, a, s, l, c, u, d = re.ajaxSetup({}, t), f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? re(f) : re.event, h = re.Deferred(),
                    m = re.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled",
                    x = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (2 === b) {
                                if (!u)for (u = {}; t = Ht.exec(a);)u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        }, setRequestHeader: function (e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        }, overrideMimeType: function (e) {
                            return b || (d.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e)if (b < 2)for (t in e)g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                            return this
                        }, abort: function (e) {
                            var t = e || w;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Lt) + "").replace(Ft, "").replace(It, jt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(ye) || [""], null == d.crossDomain && (i = Rt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === jt[1] && i[2] === jt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Ot, d, t, x), 2 === b)return x;
                l = d.global, l && 0 == re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Dt.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Pt.test(o) ? o.replace(Pt, "$1_=" + Nt++) : o + (Dt.test(o) ? "&" : "?") + "_=" + Nt++)), d.ifModified && (re.lastModified[o] && x.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && x.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers)x.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || 2 === b))return x.abort();
                w = "abort";
                for (r in{success: 1, error: 1, complete: 1})x[r](d[r]);
                if (c = R(Mt, d, t, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (e) {
                        if (!(b < 2))throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return re.get(e, undefined, t, "script")
            }
        }), re.each(["get", "post"], function (e, t) {
            re[t] = function (e, n, i, r) {
                return re.isFunction(n) && (r = r || i, i = n, n = undefined), re.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            re.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), re._evalUrl = function (e) {
            return re.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, re.fn.extend({
            wrapAll: function (e) {
                if (re.isFunction(e))return this.each(function (t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            }, wrapInner: function (e) {
                return re.isFunction(e) ? this.each(function (t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = re(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = re.isFunction(e);
                return this.each(function (n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function (e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function (e) {
            return !re.expr.filters.hidden(e)
        };
        var Vt = /%20/g, Wt = /\[\]$/, Ut = /\r?\n/g, Kt = /^(?:submit|button|image|reset|file)$/i,
            Xt = /^(?:input|select|textarea|keygen)/i;
        re.param = function (e, t) {
            var n, i = [], r = function (e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === undefined && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
                r(this.name, this.value)
            }); else for (n in e)V(n, e[n], t, r);
            return i.join("&").replace(Vt, "+")
        }, re.fn.extend({
            serialize: function () {
                return re.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Xt.test(this.nodeName) && !Kt.test(e) && (this.checked || !Ne.test(e))
                }).map(function (e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
                        return {name: t.name, value: e.replace(Ut, "\r\n")}
                    }) : {name: t.name, value: n.replace(Ut, "\r\n")}
                }).get()
            }
        }), re.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || U()
        } : W;
        var Gt = 0, Qt = {}, Jt = re.ajaxSettings.xhr();
        e.ActiveXObject && re(e).on("unload", function () {
            for (var e in Qt)Qt[e](undefined, !0)
        }), ne.cors = !!Jt && "withCredentials" in Jt, Jt = ne.ajax = !!Jt, Jt && re.ajaxTransport(function (e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function (n, i) {
                        var r, o = e.xhr(), a = ++Gt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n)n[r] !== undefined && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function (n, r) {
                            var s, l, c;
                            if (t && (r || 4 === o.readyState))if (delete Qt[a], t = undefined, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort(); else {
                                c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (e) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Qt[a] = t : t()
                    }, abort: function () {
                        t && t(undefined, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function (e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n = he.head || re("head")[0] || he.documentElement;
                return {
                    send: function (i, r) {
                        t = he.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    }, abort: function () {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var Yt = [], Zt = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Yt.pop() || re.expando + "_" + Nt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r, o, a,
                s = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])return r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Zt, "$1" + r) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                return a || re.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
                a = arguments
            }, i.always(function () {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Yt.push(r)), a && re.isFunction(o) && o(a[0]), a = o = undefined
            }), "script"
        }), re.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || he;
            var i = de.exec(e), r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var en = re.fn.load;
        re.fn.load = function (e, t, n) {
            if ("string" != typeof e && en)return en.apply(this, arguments);
            var i, r, o, a = this, s = e.indexOf(" ");
            return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function (e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function (e, t) {
                    a.each(n, r || [e.responseText, t, e])
                }), this
        }, re.expr.filters.animated = function (e) {
            return re.grep(re.timers, function (t) {
                return e === t.elem
            }).length
        };
        var tn = e.document.documentElement;
        re.offset = {
            setOffset: function (e, t, n) {
                var i, r, o, a, s, l, c, u = re.css(e, "position"), d = re(e), f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, re.fn.extend({
            offset: function (e) {
                if (arguments.length)return e === undefined ? this : this.each(function (t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
                if (o)return t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = K(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var e, t, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent || tn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");)e = e.offsetParent;
                    return e || tn
                })
            }
        }), re.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function (i) {
                return Se(this, function (e, i, r) {
                    var o = K(e);
                    if (r === undefined)return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function (e, t) {
            re.cssHooks[t] = T(ne.pixelPosition, function (e, n) {
                if (n)return n = et(e, t), nt.test(n) ? re(e).position()[t] + "px" : n
            })
        }), re.each({Height: "height", Width: "width"}, function (e, t) {
            re.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                re.fn[i] = function (i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return Se(this, function (t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, o ? i : undefined, o, null)
                }
            })
        }), re.fn.size = function () {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return re
        });
        var nn = e.jQuery, rn = e.$;
        return re.noConflict = function (t) {
            return e.$ === re && (e.$ = rn), t && e.jQuery === re && (e.jQuery = nn), re
        }, typeof t === Ce && (e.jQuery = e.$ = re), re
    }), function (e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function (t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function () {
                var t = e("meta[name=csrf-token]").attr("content"), n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function (t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), !1 !== r.result
            },
            confirm: function (e) {
                return confirm(e)
            },
            ajax: function (t) {
                return e.ajax(t)
            },
            href: function (e) {
                return e[0].href
            },
            handleRemote: function (i) {
                var r, o, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: r || "GET", data: a, dataType: l, beforeSend: function (e, r) {
                            if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r]))return !1;
                            i.trigger("ajax:send", e)
                        }, success: function (e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        }, complete: function (e, t) {
                            i.trigger("ajax:complete", [e, t])
                        }, error: function (e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        }, crossDomain: n.isCrossDomain(o)
                    }, s && (c.xhrFields = {withCredentials: s}), o && (c.url = o), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function (e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (e) {
                    return !0
                }
            },
            handleMethod: function (i) {
                var r = n.href(i), o = i.data("method"), a = i.attr("target"),
                    s = e("meta[name=csrf-token]").attr("content"), l = e("meta[name=csrf-param]").attr("content"),
                    c = e('<form method="post" action="' + r + '"></form>'),
                    u = '<input name="_method" value="' + o + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function (t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function (t) {
                n.formElements(t, n.disableSelector).each(function () {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function (e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
            },
            enableFormElements: function (t) {
                n.formElements(t, n.enableSelector).each(function () {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function (e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function (e) {
                var t, i = e.data("confirm"), r = !1;
                return !i || (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t)
            },
            blankInputs: function (t, n, i) {
                var r, o, a = e(), s = n || "input,textarea", l = t.find(s);
                return l.each(function () {
                    if (r = e(this), !(o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val()) == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return !0;
                        a = a.add(r)
                    }
                }), !!a.length && a
            },
            nonBlankInputs: function (e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function (t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function (e) {
                var i = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function (e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function (e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
            var r = e(this), o = r.data("method"), a = r.data("params"), s = i.metaKey || i.ctrlKey;
            if (!n.allowAction(r))return n.stopEverything(i);
            if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
                if (s && (!o || "GET" === o) && !a)return !0;
                var l = n.handleRemote(r);
                return !1 === l ? n.enableElement(r) : l.error(function () {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function (t) {
            var i = e(this);
            if (!n.allowAction(i))return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.error(function () {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function (t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
            var r, o, a = e(this), s = a.data("remote") !== t;
            if (!n.allowAction(a))return n.stopEverything(i);
            if (a.attr("novalidate") == t && (r = n.blankInputs(a, n.requiredInputSelector)) && n.fire(a, "ajax:aborted:required", [r]))return n.stopEverything(i);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function () {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function () {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function (t) {
            var i = e(this);
            if (!n.allowAction(i))return n.stopEverything(t);
            var r = i.attr("name"), o = r ? {name: r, value: i.val()} : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (t) {
            this == t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function () {
            n.refreshCSRFTokens()
        }))
    }(jQuery), /(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {
    var ss_set = {
        "five hundred pixels": "\uf642",
        fivehundredpixels: "\uf642",
        "five hundred px": "\uf642",
        "github octocat": "\uf671",
        "stack overflow": "\uf672",
        stackoverflow: "\uf672",
        fivehundredpx: "\uf642",
        githuboctocat: "\uf671",
        kickstarter: "\uf681",
        "app dot net": "\uf614",
        "google plus": "\uf613",
        googleplus: "\uf613",
        foursquare: "\uf690",
        soundcloud: "\uf6b3",
        letterboxd: "\uf632",
        blackberry: "\uf6f4",
        delicious: "\uf655",
        posterous: "\uf623",
        pinterest: "\uf650",
        microsoft: "\uf6f1",
        "thumbs up": "\ud83d\udc4d",
        telephone: "\ud83d\udcde",
        appdotnet: "\uf614",
        wordpress: "\uf621",
        instagram: "\uf641",
        facebook: "\uf610",
        thumbsup: "\ud83d\udc4d",
        readmill: "\uf652",
        pinboard: "\uf654",
        dribbble: "\uf660",
        envelope: "\u2709",
        "google +": "\uf613",
        linkedin: "\uf612",
        twitter: "\uf611",
        approve: "\ud83d\udc4d",
        behance: "\uf661",
        youtube: "\uf630",
        blogger: "\uf622",
        dropbox: "\uf653",
        octocat: "\uf671",
        android: "\uf6f3",
        "google+": "\uf613",
        "last fm": "\uf6b2",
        "app net": "\uf614",
        windows: "\uf6f2",
        spotify: "\uf6b1",
        flickr: "\uf640",
        lastfm: "\uf6b2",
        zerply: "\uf615",
        appnet: "\uf614",
        paypal: "\uf680",
        tumblr: "\uf620",
        github: "\uf670",
        svpply: "\uf651",
        reddit: "\uf616",
        share: "\uf601",
        phone: "\ud83d\udcde",
        apple: "\uf8ff",
        vimeo: "\uf631",
        email: "\u2709",
        steam: "\uf617",
        quora: "\uf624",
        "500px": "\uf642",
        skype: "\uf6a0",
        like: "\ud83d\udc4d",
        mail: "\u2709",
        call: "\ud83d\udcde",
        link: "\ud83d\udd17",
        rdio: "\uf6b0",
        yelp: "\uf691",
        etsy: "\uf682",
        vine: "\uf633",
        rss: "\ue310"
    };
    if ("object" != typeof ss_icons || "object" != typeof ss_icons) {
        var ss_icons = ss_set, ss_keywords = [];
        for (var i in ss_set)ss_keywords.push(i)
    } else for (var i in ss_set)ss_icons[i] = ss_set[i], ss_keywords.push(i);
    if ("function" != typeof ss_legacy) {
        !function (e, t) {
            "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
        }("ss_ready", function (e) {
            function t(e) {
                for (f = 1; e = i.shift();)e()
            }

            var n, i = [], r = !1, o = document, a = o.documentElement, s = a.doScroll, l = "DOMContentLoaded",
                c = "addEventListener", u = "onreadystatechange", d = "readyState", f = /^loade|c/.test(o[d]);
            return o[c] && o[c](l, n = function () {
                o.removeEventListener(l, n, r), t()
            }, r), s && o.attachEvent(u, n = function () {
                /^c/.test(o[d]) && (o.detachEvent(u, n), t())
            }), e = s ? function (t) {
                self != top ? f ? t() : i.push(t) : function () {
                    try {
                        a.doScroll("left")
                    } catch (n) {
                        return setTimeout(function () {
                            e(t)
                        }, 50)
                    }
                    t()
                }()
            } : function (e) {
                f ? e() : i.push(e)
            }
        });
        var ss_legacy = function (e) {
            if (!e instanceof Object)return !1;
            if (e.length)for (var t = 0; t < e.length; t++)ss_legacy(e[t]); else e.value ? e.value = ss_liga(e.value) : e.nodeValue ? e.nodeValue = ss_liga(e.nodeValue) : e.innerHTML && (e.innerHTML = ss_liga(e.innerHTML))
        }, ss_getElementsByClassName = function (e, t) {
            if (document.querySelectorAll)return document.querySelectorAll("." + t);
            for (var n = [], i = new RegExp("(^| )" + t + "( |$)"), r = e.getElementsByTagName("*"), o = 0, a = r.length; o < a; o++)i.test(r[o].className) && n.push(r[o]);
            return n
        }, ss_liga = function (e) {
            var t = new RegExp(ss_keywords.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"), "gi");
            return e.replace(t, function (e) {
                return ss_icons[e.toLowerCase()]
            })
        };
        ss_ready(function () {
            ss_legacy(document.getElementsByClassName ? document.getElementsByClassName("ss-icon") : ss_getElementsByClassName(document.body, "ss-icon"))
        })
    }
}
/*
 * Symbolset
 * www.symbolset.com
 * Copyright © 2012 Oak Studios LLC
 *
 * Upload this file to your web server
 * and place this before the closing </body> tag.
 * <script src="webfonts/ss-standard.js"></script>
 */
if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {
    var ss_set = {
        "notifications disabled": "\ud83d\udd15",
        "notification disabled": "\ud83d\udd15",
        notificationsdisabled: "\ud83d\udd15",
        notificationdisabled: "\ud83d\udd15",
        "telephone disabled": "\ue300",
        telephonedisabled: "\ue300",
        "writing disabled": "\ue071",
        "remove calendar": "\uf071",
        "calendar remove": "\uf071",
        "calendar delete": "\uf073",
        writingdisabled: "\ue071",
        "delete calendar": "\uf073",
        "pencil disabled": "\ue071",
        calendarremove: "\uf071",
        "phone disabled": "\ue300",
        "check calendar": "\uf072",
        "navigate right": "\u25bb",
        pencildisabled: "\ue071",
        removecalendar: "\uf071",
        "calendar check": "\uf072",
        deletecalendar: "\uf073",
        "download cloud": "\ueb00",
        "battery medium": "\uea11",
        calendardelete: "\uf073",
        "cloud download": "\ueb00",
        "medium battery": "\uea11",
        "ellipsis chat": "\ue399",
        mediumbattery: "\uea11",
        "bell disabled": "\ud83d\udd15",
        clouddownload: "\ueb00",
        "shopping cart": "\ue500",
        calendarcheck: "\uf072",
        phonedisabled: "\ue300",
        "female avatar": "\ud83d\udc67",
        notifications: "\ud83d\udd14",
        "call disabled": "\ue300",
        "battery empty": "\uea13",
        navigateright: "\u25bb",
        "empty battery": "\uea13",
        batterymedium: "\uea11",
        checkcalendar: "\uf072",
        "navigate down": "\uf501",
        "navigate left": "\u25c5",
        downloadcloud: "\ueb00",
        navigateleft: "\u25c5",
        ellipsischat: "\ue399",
        navigatedown: "\uf501",
        batteryempty: "\uea13",
        "battery high": "\uea10",
        notification: "\ud83d\udd14",
        "battery full": "\ud83d\udd0b",
        calldisabled: "\ue300",
        femaleavatar: "\ud83d\udc67",
        "rotate right": "\u21bb",
        "calendar add": "\uf070",
        "high battery": "\uea10",
        emptybattery: "\uea13",
        "cloud upload": "\ueb40",
        "direct right": "\u25b9",
        "full battery": "\ud83d\udd0b",
        "add calendar": "\uf070",
        "upload cloud": "\ueb40",
        belldisabled: "\ud83d\udd15",
        "fast forward": "\u23e9",
        "skip forward": "\u23ed",
        "mobile phone": "\ud83d\udcf1",
        shoppingcart: "\ue500",
        "direct left": "\u25c3",
        "low battery": "\uea12",
        skipforward: "\u23ed",
        rotateright: "\u21bb",
        "male avatar": "\ud83d\udc64",
        "direct down": "\u25be",
        videocamera: "\ud83d\udcf9",
        "female user": "\ud83d\udc67",
        information: "\u2139",
        "thumbs down": "\ud83d\udc4e",
        photographs: "\ud83c\udf04",
        calendaradd: "\uf070",
        "rotate left": "\u21ba",
        "high volume": "\ud83d\udd0a",
        batteryhigh: "\uea10",
        "credit card": "\ud83d\udcb3",
        batteryfull: "\ud83d\udd0b",
        "navigate up": "\uf500",
        "dollar sign": "\ud83d\udcb2",
        fastforward: "\u23e9",
        mobilephone: "\ud83d\udcf1",
        "battery low": "\uea12",
        addcalendar: "\uf070",
        fullbattery: "\ud83d\udd0b",
        uploadcloud: "\ueb40",
        "delete date": "\uf073",
        "remove date": "\uf071",
        "volume high": "\ud83d\udd0a",
        directright: "\u25b9",
        cloudupload: "\ueb40",
        highbattery: "\uea10",
        navigation: "\ue670",
        smartphone: "\ud83d\udcf1",
        screenshot: "\u2316",
        dollarsign: "\ud83d\udcb2",
        creditcard: "\ud83d\udcb3",
        "hard drive": "\ue7b0",
        femaleuser: "\ud83d\udc67",
        maleavatar: "\ud83d\udc64",
        removedate: "\uf071",
        microphone: "\ud83c\udfa4",
        "low volume": "\ud83d\udd09",
        "volume low": "\ud83d\udd09",
        highvolume: "\ud83d\udd0a",
        "check date": "\uf072",
        volumehigh: "\ud83d\udd0a",
        deletedate: "\uf073",
        "cell phone": "\ud83d\udcf1",
        directions: "\ue672",
        photograph: "\ud83c\udf04",
        "half heart": "\ue1a0",
        thumbsdown: "\ud83d\udc4e",
        disapprove: "\ud83d\udc4e",
        lowbattery: "\uea12",
        "down right": "\u2b0a",
        batterylow: "\uea12",
        thumbnails: "\ue9a3",
        navigateup: "\uf500",
        attachment: "\ud83d\udcce",
        visibility: "\ud83d\udc40",
        "pull quote": "\u201c",
        descending: "\u25be",
        directdown: "\u25be",
        directleft: "\u25c3",
        connection: "\ueb85",
        rotateleft: "\u21ba",
        eyedropper: "\ue200",
        volumelow: "\ud83d\udd09",
        stopwatch: "\u23f1",
        warehouse: "\ue602",
        paperclip: "\ud83d\udcce",
        backspace: "\u232b",
        ascending: "\u25b4",
        "half star": "\ue1a1",
        cellphone: "\ud83d\udcf1",
        lightbulb: "\ud83d\udca1",
        "thumbs up": "\ud83d\udc4d",
        "down left": "\u2b0b",
        newspaper: "\ud83d\udcf0",
        "direct up": "\u25b4",
        checkdate: "\uf072",
        halfheart: "\ue1a0",
        "bar chart": "\ud83d\udcca",
        harddrive: "\ue7b0",
        "male user": "\ud83d\udc64",
        "pie chart": "\ue570",
        downright: "\u2b0a",
        "skip back": "\u23ee",
        musicnote: "\u266b",
        dashboard: "\uf000",
        briefcase: "\ud83d\udcbc",
        pullquote: "\u201c",
        telephone: "\ud83d\udcde",
        checkmark: "\u2713",
        lowvolume: "\ud83d\udd09",
        buildings: "\ud83c\udfe2",
        crosshair: "\u2316",
        "open book": "\ud83d\udcd6",
        "add date": "\uf070",
        notebook: "\ud83d\udcd3",
        document: "\ud83d\udcc4",
        skipback: "\u23ee",
        typeface: "\ued01",
        transfer: "\u21c6",
        redirect: "\u21aa",
        computer: "\ud83d\udcbb",
        contract: "\uee01",
        question: "\u2753",
        "sign out": "\uee02",
        download: "\ueb01",
        pictures: "\ud83c\udf04",
        subtract: "-",
        settings: "\u2699",
        database: "\ue7a0",
        location: "\ue6d0",
        signpost: "\ue672",
        navigate: "\ue670",
        calendar: "\ud83d\udcc5",
        barchart: "\ud83d\udcca",
        openbook: "\ud83d\udcd6",
        maleuser: "\ud83d\udc64",
        ellipsis: "\u2026",
        envelope: "\u2709",
        facetime: "\ue320",
        "end call": "\ue300",
        halfstar: "\ue1a1",
        favorite: "\u22c6",
        thumbsup: "\ud83d\udc4d",
        "up right": "\u2b08",
        bookmark: "\ud83d\udd16",
        keywords: "\ue100",
        downleft: "\u2b0b",
        trashcan: "\ue0d0",
        insecure: "\ud83d\udd13",
        unlocked: "\ud83d\udd13",
        previous: "\u25c5",
        directup: "\u25b4",
        "zoom out": "\ue003",
        dropdown: "\u25be",
        piechart: "\ue570",
        caution: "\u26d4",
        desktop: "\ud83d\udcbb",
        "zoom in": "\ue002",
        display: "\ud83d\udcbb",
        monitor: "\ud83d\udcbb",
        windows: "\ue202",
        warning: "\u26a0",
        descend: "\u25be",
        "package": "\ud83d\udce6",
        upright: "\u2b08",
        droplet: "\ud83d\udca7",
        keyword: "\ue100",
        printer: "\u2399",
        "private": "\ud83d\udd12",
        avatars: "\ud83d\udc65",
        dictate: "\ud83c\udfa4",
        battery: "\ud83d\udd0b",
        zoomout: "\ue003",
        checked: "\u2713",
        speaker: "\ud83d\udd08",
        comment: "\ud83d\udcac",
        forward: "\u27a1",
        "up left": "\u2b09",
        approve: "\ud83d\udc4d",
        endcall: "\ue300",
        compass: "\ue671",
        retweet: "\uf600",
        loading: "\ueb83",
        shuffle: "\ud83d\udd00",
        syncing: "\ueb82",
        visible: "\ud83d\udc40",
        airplay: "\ue800",
        adddate: "\uf070",
        picture: "\ud83c\udf04",
        dislike: "\ud83d\udc4e",
        compose: "\ud83d\udcdd",
        refresh: "\u21bb",
        columns: "\ue9a2",
        signout: "\uee02",
        "log out": "\uee02",
        target: "\u25ce",
        cursor: "\ue001",
        search: "\ud83d\udd0e",
        zoomin: "\ue002",
        tablet: "\uea01",
        laptop: "\uea00",
        funnel: "\ue9b0",
        upload: "\ueb41",
        attach: "\ud83d\udcce",
        filter: "\ue9b0",
        pencil: "\u270e",
        ascend: "\u25b4",
        eraser: "\u2710",
        locked: "\ud83d\udd12",
        secure: "\ud83d\udd12",
        unlock: "\ud83d\udd13",
        replay: "\u21ba",
        "public": "\ud83d\udd13",
        repeat: "\ud83d\udd01",
        folder: "\ud83d\udcc1",
        upleft: "\u2b09",
        iphone: "\ud83d\udcf1",
        tagged: "\ue100",
        rewind: "\u23ea",
        record: "\u25cf",
        layout: "\ueda0",
        action: "\uee00",
        expand: "\u2922",
        sample: "\ue200",
        layers: "\ue202",
        videos: "\ud83d\udcf9",
        photos: "\ud83c\udf04",
        stroke: "\ue241",
        logout: "\uee02",
        images: "\ud83c\udf04",
        hyphen: "-",
        remove: "-",
        camera: "\ud83d\udcf7",
        volume: "\ud83d\udd08",
        "delete": "\u2421",
        avatar: "\ud83d\udc64",
        locate: "\ue670",
        mobile: "\ud83d\udcf1",
        pause: "\ue8a0",
        zelda: "\ue1a0",
        write: "\u270e",
        nodes: "\ueb85",
        merge: "\ueb81",
        alert: "\u26a0",
        video: "\ud83d\udcf9",
        world: "\ud83c\udf0e",
        print: "\u2399",
        trash: "\ue0d0",
        photo: "\ud83c\udf04",
        right: "\u27a1",
        image: "\ud83c\udf04",
        phone: "\ud83d\udcde",
        reply: "\u21a9",
        heart: "\u2665",
        minus: "-",
        erase: "\u2710",
        quote: "\u201c",
        check: "\u2713",
        sound: "\ud83d\udd08",
        flask: "\uf4c0",
        share: "\uee00",
        close: "\u2421",
        email: "\u2709",
        inbox: "\ud83d\udce5",
        visit: "\uee00",
        audio: "\u266b",
        music: "\u266b",
        users: "\ud83d\udc65",
        price: "\ud83d\udcb2",
        house: "\u2302",
        timer: "\u23f1",
        cloud: "\u2601",
        eject: "\u23cf",
        earth: "\ud83c\udf0e",
        globe: "\ud83c\udf0e",
        clock: "\u23f2",
        list: "\ued50",
        time: "\u23f2",
        cell: "\ud83d\udcf1",
        zoom: "\ue002",
        date: "\ud83d\udcc5",
        home: "\u2302",
        ipad: "\uea01",
        bell: "\ud83d\udd14",
        cost: "\ud83d\udcb2",
        cart: "\ue500",
        view: "\ud83d\udc40",
        gear: "\u2699",
        user: "\ud83d\udc64",
        talk: "\ud83d\udcac",
        chat: "\ud83d\udcac",
        look: "\ud83d\udc40",
        fork: "\ueb80",
        mail: "\u2709",
        send: "\ue350",
        link: "\ud83d\udd17",
        move: "\ue070",
        call: "\ud83d\udcde",
        plus: "+",
        exit: "\uee02",
        fill: "\ue240",
        info: "\u2139",
        crop: "\ue201",
        play: "\u25b6",
        star: "\u22c6",
        help: "\u2753",
        work: "\ud83d\udcbc",
        stop: "\u25a0",
        drop: "\ud83d\udca7",
        love: "\u2665",
        edit: "\u270e",
        rows: "\ue9a1",
        city: "\ud83c\udfe2",
        like: "\ud83d\udc4d",
        redo: "\u21bb",
        flag: "\u2691",
        font: "\ued01",
        tags: "\ue100",
        down: "\u2b07",
        grid: "\ue9a0",
        text: "\ued00",
        left: "\u2b05",
        back: "\u2b05",
        skip: "\u23ed",
        page: "\ud83d\udcc4",
        news: "\ud83d\udcf0",
        sync: "\ueb82",
        file: "\ud83d\udcc4",
        wifi: "\ueb84",
        next: "\u25bb",
        undo: "\u21ba",
        book: "\ud83d\udcd5",
        lock: "\ud83d\udd12",
        idea: "\ud83d\udca1",
        key: "\ud83d\udd11",
        tag: "\ue100",
        fax: "\ud83d\udce0",
        map: "\ue673",
        out: "\uee00",
        rss: "\ue310",
        add: "+",
        ban: "\ud83d\udeab",
        cog: "\u2699",
        eye: "\ud83d\udc40",
        hdd: "\ue7b0",
        box: "\ud83d\udce6",
        pin: "\ud83d\udccd",
        mic: "\ud83c\udfa4",
        up: "\u2b06"
    };
    if ("object" != typeof ss_icons || "object" != typeof ss_icons) {
        var ss_icons = ss_set, ss_keywords = [];
        for (var i in ss_set)ss_keywords.push(i)
    } else for (var i in ss_set)ss_icons[i] = ss_set[i], ss_keywords.push(i);
    if ("function" != typeof ss_legacy) {
        !function (e, t) {
            "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
        }("ss_ready", function (e) {
            function t(e) {
                for (f = 1; e = i.shift();)e()
            }

            var n, i = [], r = !1, o = document, a = o.documentElement, s = a.doScroll, l = "DOMContentLoaded",
                c = "addEventListener", u = "onreadystatechange", d = "readyState", f = /^loade|c/.test(o[d]);
            return o[c] && o[c](l, n = function () {
                o.removeEventListener(l, n, r), t()
            }, r), s && o.attachEvent(u, n = function () {
                /^c/.test(o[d]) && (o.detachEvent(u, n), t())
            }), e = s ? function (t) {
                self != top ? f ? t() : i.push(t) : function () {
                    try {
                        a.doScroll("left")
                    } catch (n) {
                        return setTimeout(function () {
                            e(t)
                        }, 50)
                    }
                    t()
                }()
            } : function (e) {
                f ? e() : i.push(e)
            }
        });
        var ss_legacy = function (e) {
            if (!e instanceof Object)return !1;
            if (e.length)for (var t = 0; t < e.length; t++)ss_legacy(e[t]); else e.value ? e.value = ss_liga(e.value) : e.nodeValue ? e.nodeValue = ss_liga(e.nodeValue) : e.innerHTML && (e.innerHTML = ss_liga(e.innerHTML))
        }, ss_getElementsByClassName = function (e, t) {
            if (document.querySelectorAll)return document.querySelectorAll("." + t);
            for (var n = [], i = new RegExp("(^| )" + t + "( |$)"), r = e.getElementsByTagName("*"), o = 0, a = r.length; o < a; o++)i.test(r[o].className) && n.push(r[o]);
            return n
        }, ss_liga = function (e) {
            var t = new RegExp(ss_keywords.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"), "gi");
            return e.replace(t, function (e) {
                return ss_icons[e.toLowerCase()]
            })
        };
        ss_ready(function () {
            ss_legacy(document.getElementsByClassName ? document.getElementsByClassName("ss-icon") : ss_getElementsByClassName(document.body, "ss-icon"))
        })
    }
}
var full_page_height = $(document).height(), viewport_height = $(window).height(), long_page_factor = 2,
    long_page_height = viewport_height * long_page_factor;
full_page_height > long_page_height && $(window).on("scroll", function () {
    $(this).scrollTop() > viewport_height ? ($(".back-to-top").removeClass("hide"), $(".footer-bottom").addClass("footer-back-to-top")) : ($(".back-to-top").addClass("hide"), $(".footer-bottom").removeClass("footer-back-to-top"))
}), $(".back-to-top").on("click", function (e) {
    e.preventDefault(), $("html, body").animate({scrollTop: 0}, "fast")
}), $(function () {
    function e(e) {
        var t = e.find("input:checked").length;
        if (t > 0) {
            e.addClass("js-selected").find(".js-filter-counter").html("(" + t + ")");
            var n = e.find("input:checked").siblings("label").text();
            e.find(".js-filter-current").html("(" + n + ")")
        } else e.removeClass("js-selected").find(".js-filter-counter").html("")
    }

    function t() {
        e($(this).parents(".dropdown")), $("#apply-dropdown-selections").removeClass("button-interior").addClass("button-positive")
    }

    $(".dropdown-trigger").on("click", function (e) {
        e.preventDefault(), $(this).parent().children(".dropdown-panel").slideToggle(250, "linear"), $(this).toggleClass("js-active")
    }), Modernizr.touch || $(".dropdown").on("mouseleave", function () {
        $(".dropdown-panel", this).slideUp(), $(".dropdown-trigger", this).removeClass("js-active")
    }), $(".dropdown").each(function () {
        e($(this))
    }), $(".dropdown-panel input").on("click", t)
}), $(".toggle-section-nav").on("click", function (e) {
    e.preventDefault(), $(".section-nav").slideToggle("fast", function () {
        $(this).toggleClass("is-open-for-palm")
    })
}), $(".section-nav").on("click", function (e) {
    var t = $(".toggle-section-nav").is(":visible"), n = $(".section-nav").hasClass("is-open-for-palm");
    t && !n && (e.preventDefault(), $(".section-nav").addClass("is-open-for-palm"))
}), Modernizr.svg || $(".site-logo").attr("src", "http://cdn2.capterra-static.com/assets/capterra-logo-e6e4db88ac7ae40ec43a4c0c1ce15af2.png"), Modernizr.touch || ($(".site-footer").after('<div class="off-canvas-stack"></div>'), $(".sticky-stack").clone().appendTo(".off-canvas-stack"), $(window).on("scroll", function () {
    if ($(".sticky-stack").length > 0) {
        var e = $(this).scrollTop();
        $(".sticky-stack").eq(0).offset().top - e <= 0 ? ($(".off-canvas-stack").addClass("is-showing"), $(".off-canvas-stack hr").hide()) : ($(".off-canvas-stack").removeClass("is-showing"), $(".off-canvas-stack hr").show())
    }
})), Modernizr.input.placeholder && $(".has-placeholder").hide(), $(document).click(function (e) {
    if (!$(e.target).closest(".dd-selection-panel").length) {
        var t = $(".dd-selection-panel .check-list");
        t.is(":visible") && (t.attr("display", "block").parentsUntil(".df-toggle-trigger").find(".ss-navigateup").toggleClass("ss-navigateup").toggleClass("ss-navigatedown"), t.attr("display", "block").slideUp("fast"))
    }
}), $(".df-toggle-trigger").click(function () {
    var e = $(this).find("i").first(), t = $(this).parent().find(".check-list"), n = e.hasClass("ss-navigateup"),
        i = $(".dd-selection-panel .check-list").not(this).attr("display", "block");
    t.is(":visible") ? (e.toggleClass("ss-navigatedown", n).toggleClass("ss-navigateup"), t.slideToggle("fast")) : (i.parentsUntil(".df-toggle-trigger").find(".ss-navigateup").toggleClass("ss-navigateup").toggleClass("ss-navigatedown"), i.slideUp("fast"), e.toggleClass("ss-navigatedown", n).toggleClass("ss-navigateup"), t.slideToggle("fast"))
}), $(function () {
    function e(e, n) {
        e.preventDefault(), n.hide(), infographic_class = "." + n.attr("data-infographic-type") + "-infographic", "show-all-data" === n.attr("class") ? ($(infographic_class + " .row-data").slideDown(300), t("hide", "down", "up")) : ($(infographic_class + " .row-data").slideUp(300), t("show", "up", "down"))
    }

    function t(e, t, n) {
        $(infographic_class + " ." + e + "-all-data").show(), $(infographic_class + " .toggle-all-data i").removeClass("ss-navigate" + t).addClass("ss-navigate" + n), $(infographic_class + " .infographic-row i").removeClass("ss-navigate" + t).addClass("ss-navigate" + n)
    }

    $(".show-all-data").hide(), $(".main-infographic .row-data").hide().delay(400).slideDown(300), $(".affordability-infographic .row-data").hide(), $(".affordability-infographic .infographic-row").first().find(".row-data").slideDown(0), $(".user-friendly-infographic .row-data").hide().delay(400).slideDown(300), $(document).on("click", ".show-data", function (e) {
        e.preventDefault(), $(this).parents(".infographic-row").find(".row-data").slideToggle(300), $(this).find(".ss-navigateup").length >= 1 ? $(this).find(".ss-navigateup").removeClass("ss-navigateup").addClass("ss-navigatedown") : $(this).find(".ss-navigatedown").removeClass("ss-navigatedown").addClass("ss-navigateup")
    }), $(document).on("click", ".show-all-data", function (t) {
        e(t, $(this))
    }), $(document).on("click", ".hide-all-data", function (t) {
        e(t, $(this))
    })
}), $(document).ready(function () {
    StickyScroll.init(".sticky")
}), $(function () {
    $(".media-viewer-screen").addClass("hide"), $(".media-viewer-screen").eq(0).removeClass("hide").addClass("active"), $(".media-viewer-thumbnail-container").removeClass("active"), $(".media-viewer-thumbnail-container").eq(0).addClass("active"), $(".media-viewer-thumbnail-container").on("click", function (e) {
        if (e.preventDefault(), !$(this).hasClass("active")) {
            $(".media-viewer-thumbnail-container.active").removeClass("active"), $(this).addClass("active");
            var t = $(this).index(".media-viewer-thumbnail-container");
            $(".media-viewer-screen.active").removeClass("active").addClass("hide"), $(".media-viewer-screen").eq(t).removeClass("hide").addClass("active")
        }
    })
}), $(function () {
    function e() {
        $(".cell-review:gt(" + (o - 1) + ")").hide()
    }

    function t() {
        $(".reviews-pagination").hide()
    }

    function n() {
        a += reviews_paginate, $(".cell-review:lt(" + a + ")").show(), a >= r && t()
    }

    function i() {
        var e = $("#reviews").offset().top, t = e - s;
        $("body, html").animate({scrollTop: t}, "fast")
    }

    var r = $(".cell-review").length, o = 50, a = o;
    reviews_paginate = 50, e(), r <= o && t(), $(".show-more-reviews").on("click", function (e) {
        e.preventDefault(), n(this)
    });
    var s = $(".sticky-stack").height();
    "#reviews" == window.location.hash && i(), $(".scroll-to-reviews").click(function (e) {
        e.preventDefault(), i()
    })
}), $(function () {
    var e = window.location.hash, t = [];
    if ($(".toggle-trigger").each(function () {
            var e = $(this).attr("href");
            t.push(e)
        }), -1 != $.inArray(e, t)) {
        var n = $('.toggle-trigger[href="' + e + '"]').index(".toggle-trigger");
        $('.toggle-trigger[href="' + e + '"]').addClass("active"), $(".toggle-panel").eq(n).addClass("active")
    } else 0 === $(".toggle-trigger.active").length && ($(".toggle-trigger").first().addClass("active"), $(".toggle-panel").first().addClass("active"));
    $(".toggle-panel:not(.active)").addClass("hide"), $(".toggle-trigger").on("click", function (e) {
        if (e.preventDefault(), !$(this).hasClass("active")) {
            var t = $(this).index(".toggle-trigger");
            $(".toggle-panel.active").removeClass("active").addClass("hide"), $(".toggle-panel").eq(t).removeClass("hide").addClass("active"), $(".toggle-trigger.active").removeClass("active"), $(this).addClass("active"), Modernizr.history && (0 == t ? history.replaceState("", document.title, window.location.pathname) : history.replaceState("", document.title, window.location.pathname + $(this).attr("href")))
        }
    })
}), $(function () {
    $(".mission-possible#button-lead-form").on("click", function () {
        ga("send", "event", "YouTube Landing Page 2", "Lead Submit")
    }), $(".mission-possible-nav .nav-browse").on("click", function () {
        ga("send", "event", "YouTube Landing Page 2", "Browse Header")
    }), $(".mission-possible-nav .nav-search").on("click", function () {
        ga("send", "event", "YouTube Landing Page 2", "Search Header")
    })
}), $(function () {
    function e(e) {
        return "" !== $(e).val() || ($("<div class='error  island  island-negative  island-thin  quarter-margin-top'><p class='color-red'><i class='ss-alert  icon-lead'></i>This field is required.</p></div>").insertAfter($(e)), !1)
    }

    $(".js-show_search_box").on("click", function () {
        $(".js-step_one").hide(), $(".js-step_two").show(), $(".js-step_two input").focus()
    }), $(".all-in-one-nav .nav-browse").on("click", function () {
        ga("send", "event", "Video - All in One", "Browse Header")
    }), $(".all-in-one-nav .nav-search").on("click", function () {
        ga("send", "event", "Video - All in One", "Search Header")
    }), $(".js-submit-all-in-one").submit(function (t) {
        t.preventDefault(), $(".error", this).remove();
        var n = !1;
        $.each([".js-first_name", ".js-last_name", ".js-company_name", ".js-email"], function (t, i) {
            e(i) || (n = !0)
        }), n || ($(this).remove(), $(".js-submit_all_in_one").click(), $(".js-progress-bar").remove(), $(".js-all_in_one_success").removeClass("hide").show())
    })
}), function () {
    $(function () {
        return $(document).ready(function () {
            var e;
            return e = 1, $(".browse-group").each(function () {
                return function (t, n) {
                    return $(n).find("li").each(function (t, n) {
                        return e % 2 == 0 ? $(n).addClass("even") : $(n).removeClass("even"), e += 1
                    })
                }
            }())
        }), $("#category_search").keyup(function () {
            var e, t;
            return t = $(this).val().trim(), e = 1, $(".browse-group").each(function () {
                return function (n, i) {
                    return $(i).find("li").each(function (n, i) {
                        return $(i).data("alias-name").search(new RegExp(t, "i")) < 0 ? ($(i).addClass("hide"), $(i).removeClass("show")) : ($(i).addClass("show"), $(i).removeClass("hide"), e % 2 == 0 ? $(i).addClass("even") : $(i).removeClass("even"), e += 1)
                    }), $(i).find("li.show").length > 0 ? ($(i).addClass("show"), $(i).removeClass("hide")) : ($(i).addClass("hide"), $(i).removeClass("show"))
                }
            }()), $(".browse-group").hasClass("show") ? ($("#browse-no-results").removeClass("show"), $("#browse-no-results").addClass("hide"), $(this).trigger("searchResultsFound")) : ($("#browse-no-results").removeClass("hide"), $("#browse-no-results").addClass("show"), $(this).trigger("searchResultsNotFound"))
        })
    })
}.call(this);
var stIsIE = !1;
if (sorttable = {
        init: function () {
            arguments.callee.done || (arguments.callee.done = !0, _timer && clearInterval(_timer), document.createElement && document.getElementsByTagName && (sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/, forEach(document.getElementsByTagName("table"), function (e) {
                -1 != e.className.search(/\bsortable\b/) && sorttable.makeSortable(e)
            })))
        }, makeSortable: function (e) {
            if (0 == e.getElementsByTagName("thead").length && (the = document.createElement("thead"), the.appendChild(e.rows[0]), e.insertBefore(the, e.firstChild)), null == e.tHead && (e.tHead = e.getElementsByTagName("thead")[0]), 1 == e.tHead.rows.length) {
                sortbottomrows = [];
                for (var t = 0; t < e.rows.length; t++)-1 != e.rows[t].className.search(/\bsortbottom\b/) && (sortbottomrows[sortbottomrows.length] = e.rows[t]);
                if (sortbottomrows) {
                    null == e.tFoot && (tfo = document.createElement("tfoot"), e.appendChild(tfo));
                    for (var t = 0; t < sortbottomrows.length; t++)tfo.appendChild(sortbottomrows[t]);
                    delete sortbottomrows
                }
                headrow = e.tHead.rows[0].cells;
                for (var t = 0; t < headrow.length; t++)headrow[t].className.match(/\bsorttable_nosort\b/) || (mtch = headrow[t].className.match(/\bsorttable_([a-z0-9]+)\b/), mtch && (override = mtch[1]), mtch && "function" == typeof sorttable["sort_" + override] ? headrow[t].sorttable_sortfunction = sorttable["sort_" + override] : headrow[t].sorttable_sortfunction = sorttable.guessType(e, t), headrow[t].sorttable_columnindex = t, headrow[t].sorttable_tbody = e.tBodies[0], dean_addEvent(headrow[t], "click", sorttable.innerSortFunction = function () {
                    if (-1 != this.className.search(/\bsorttable_sorted\b/))return sorttable.reverse(this.sorttable_tbody), this.className = this.className.replace("sorttable_sorted", "sorttable_sorted_reverse"), this.removeChild(document.getElementById("sorttable_sortfwdind")), sortrevind = document.createElement("span"), sortrevind.id = "sorttable_sortrevind", void this.appendChild(sortrevind);
                    if (-1 != this.className.search(/\bsorttable_sorted_reverse\b/))return sorttable.reverse(this.sorttable_tbody), this.className = this.className.replace("sorttable_sorted_reverse", "sorttable_sorted"), this.removeChild(document.getElementById("sorttable_sortrevind")), sortfwdind = document.createElement("span"), sortfwdind.id = "sorttable_sortfwdind", void this.appendChild(sortfwdind);
                    theadrow = this.parentNode, forEach(theadrow.childNodes, function (e) {
                        1 == e.nodeType && (e.className = e.className.replace("sorttable_sorted_reverse", ""), e.className = e.className.replace("sorttable_sorted", ""))
                    }), sortfwdind = document.getElementById("sorttable_sortfwdind"), sortfwdind && sortfwdind.parentNode.removeChild(sortfwdind), sortrevind = document.getElementById("sorttable_sortrevind"), sortrevind && sortrevind.parentNode.removeChild(sortrevind), this.className += " sorttable_sorted", sortfwdind = document.createElement("span"), sortfwdind.id = "sorttable_sortfwdind", this.appendChild(sortfwdind), row_array = [], col = this.sorttable_columnindex, rows = this.sorttable_tbody.rows;
                    for (var e = 0; e < rows.length; e++)row_array[row_array.length] = [sorttable.getInnerText(rows[e].cells[col]), rows[e]];
                    row_array.sort(this.sorttable_sortfunction), tb = this.sorttable_tbody;
                    for (var e = 0; e < row_array.length; e++)tb.appendChild(row_array[e][1]);
                    delete row_array
                }))
            }
        }, guessType: function (e, t) {
            sortfn = sorttable.sort_alpha;
            for (var n = 0; n < e.tBodies[0].rows.length; n++)if (text = sorttable.getInnerText(e.tBodies[0].rows[n].cells[t]), "" != text) {
                if (text.match(/^-?[\xa3$\xa4]?[\d,.]+%?$/))return sorttable.sort_numeric;
                if (possdate = text.match(sorttable.DATE_RE), possdate) {
                    if (first = parseInt(possdate[1]), second = parseInt(possdate[2]), first > 12)return sorttable.sort_ddmm;
                    if (second > 12)return sorttable.sort_mmdd;
                    sortfn = sorttable.sort_ddmm
                }
            }
            return sortfn
        }, getInnerText: function (e) {
            if (!e)return "";
            if (hasInputs = "function" == typeof e.getElementsByTagName && e.getElementsByTagName("input").length, null != e.getAttribute("sorttable_customkey"))return e.getAttribute("sorttable_customkey");
            if ("undefined" != typeof e.textContent && !hasInputs)return e.textContent.replace(/^\s+|\s+$/g, "");
            if ("undefined" != typeof e.innerText && !hasInputs)return e.innerText.replace(/^\s+|\s+$/g, "");
            if ("undefined" != typeof e.text && !hasInputs)return e.text.replace(/^\s+|\s+$/g, "");
            switch (e.nodeType) {
                case 3:
                    if ("input" == e.nodeName.toLowerCase())return e.value.replace(/^\s+|\s+$/g, "");
                case 4:
                    return e.nodeValue.replace(/^\s+|\s+$/g, "");
                case 1:
                case 11:
                    for (var t = "", n = 0; n < e.childNodes.length; n++)t += sorttable.getInnerText(e.childNodes[n]);
                    return t.replace(/^\s+|\s+$/g, "");
                default:
                    return ""
            }
        }, reverse: function (e) {
            newrows = [];
            for (var t = 0; t < e.rows.length; t++)newrows[newrows.length] = e.rows[t];
            for (var t = newrows.length - 1; t >= 0; t--)e.appendChild(newrows[t]);
            delete newrows
        }, sort_numeric: function (e, t) {
            return aa = parseFloat(e[0].replace(/[^0-9.-]/g, "")), isNaN(aa) && (aa = 0), bb = parseFloat(t[0].replace(/[^0-9.-]/g, "")), isNaN(bb) && (bb = 0), aa - bb
        }, sort_alpha: function (e, t) {
            return e[0] == t[0] ? 0 : e[0] < t[0] ? -1 : 1
        }, sort_ddmm: function (e, t) {
            return mtch = e[0].match(sorttable.DATE_RE), y = mtch[3], m = mtch[2], d = mtch[1], 1 == m.length && (m = "0" + m), 1 == d.length && (d = "0" + d), dt1 = y + m + d, mtch = t[0].match(sorttable.DATE_RE), y = mtch[3], m = mtch[2], d = mtch[1], 1 == m.length && (m = "0" + m), 1 == d.length && (d = "0" + d), dt2 = y + m + d, dt1 == dt2 ? 0 : dt1 < dt2 ? -1 : 1
        }, sort_mmdd: function (e, t) {
            return mtch = e[0].match(sorttable.DATE_RE), y = mtch[3], d = mtch[2], m = mtch[1], 1 == m.length && (m = "0" + m), 1 == d.length && (d = "0" + d), dt1 = y + m + d, mtch = t[0].match(sorttable.DATE_RE), y = mtch[3], d = mtch[2], m = mtch[1], 1 == m.length && (m = "0" + m), 1 == d.length && (d = "0" + d), dt2 = y + m + d, dt1 == dt2 ? 0 : dt1 < dt2 ? -1 : 1
        }, shaker_sort: function (e, t) {
            for (var n = 0, i = e.length - 1, r = !0; r;) {
                r = !1;
                for (var o = n; o < i; ++o)if (t(e[o], e[o + 1]) > 0) {
                    var a = e[o];
                    e[o] = e[o + 1], e[o + 1] = a, r = !0
                }
                if (i--, !r)break;
                for (var o = i; o > n; --o)if (t(e[o], e[o - 1]) < 0) {
                    var a = e[o];
                    e[o] = e[o - 1], e[o - 1] = a, r = !0
                }
                n++
            }
        }
    }, document.addEventListener && document.addEventListener("DOMContentLoaded", sorttable.init, !1), /WebKit/i.test(navigator.userAgent))var _timer = setInterval(function () {
    /loaded|complete/.test(document.readyState) && sorttable.init()
}, 10);
window.onload = sorttable.init, dean_addEvent.guid = 1, fixEvent.preventDefault = function () {
    this.returnValue = !1
}, fixEvent.stopPropagation = function () {
    this.cancelBubble = !0
}, /*
 forEach, version 1.0
 Copyright 2006, Dean Edwards
 License: http://www.opensource.org/licenses/mit-license.php
 */
Array.forEach || (Array.forEach = function (e, t, n) {
    for (var i = 0; i < e.length; i++)t.call(n, e[i], i, e)
}), Function.prototype.forEach = function (e, t, n) {
    for (var i in e)"undefined" == typeof this.prototype[i] && t.call(n, e[i], i, e)
}, String.forEach = function (e, t, n) {
    Array.forEach(e.split(""), function (i, r) {
        t.call(n, i, r, e)
    })
};
var forEach = function (e, t, n) {
    if (e) {
        var i = Object;
        if (e instanceof Function) i = Function; else {
            if (e.forEach instanceof Function)return void e.forEach(t, n);
            "string" == typeof e ? i = String : "number" == typeof e.length && (i = Array)
        }
        i.forEach(e, t, n)
    }
};
/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */
!function (e) {
    var t = function () {
        "use strict";
        return {
            isMsie: function () {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            }, isBlankString: function (e) {
                return !e || /^\s*$/.test(e)
            }, escapeRegExChars: function (e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }, isString: function (e) {
                return "string" == typeof e
            }, isNumber: function (e) {
                return "number" == typeof e
            }, isArray: e.isArray, isFunction: e.isFunction, isObject: e.isPlainObject, isUndefined: function (e) {
                return void 0 === e
            }, toStr: function (e) {
                return t.isUndefined(e) || null === e ? "" : e + ""
            }, bind: e.proxy, each: function (t, n) {
                function i(e, t) {
                    return n(t, e)
                }

                e.each(t, i)
            }, map: e.map, filter: e.grep, every: function (t, n) {
                var i = !0;
                return t ? (e.each(t, function (e, r) {
                    if (!(i = n.call(null, r, e, t)))return !1
                }), !!i) : i
            }, some: function (t, n) {
                var i = !1;
                return t ? (e.each(t, function (e, r) {
                    if (i = n.call(null, r, e, t))return !1
                }), !!i) : i
            }, mixin: e.extend, getUniqueId: function () {
                var e = 0;
                return function () {
                    return e++
                }
            }(), templatify: function (t) {
                function n() {
                    return String(t)
                }

                return e.isFunction(t) ? t : n
            }, defer: function (e) {
                setTimeout(e, 0)
            }, debounce: function (e, t, n) {
                var i, r;
                return function () {
                    var o, a, s = this, l = arguments;
                    return o = function () {
                        i = null, n || (r = e.apply(s, l))
                    }, a = n && !i, clearTimeout(i), i = setTimeout(o, t), a && (r = e.apply(s, l)), r
                }
            }, throttle: function (e, t) {
                var n, i, r, o, a, s;
                return a = 0, s = function () {
                    a = new Date, r = null, o = e.apply(n, i)
                }, function () {
                    var l = new Date, c = t - (l - a);
                    return n = this, i = arguments, c <= 0 ? (clearTimeout(r), r = null, a = l, o = e.apply(n, i)) : r || (r = setTimeout(s, c)), o
                }
            }, noop: function () {
            }
        }
    }(), n = "0.10.5", i = function () {
        "use strict";
        function e(e) {
            return e = t.toStr(e), e ? e.split(/\s+/) : []
        }

        function n(e) {
            return e = t.toStr(e), e ? e.split(/\W+/) : []
        }

        function i(e) {
            return function () {
                var n = [].slice.call(arguments, 0);
                return function (i) {
                    var r = [];
                    return t.each(n, function (n) {
                        r = r.concat(e(t.toStr(i[n])))
                    }), r
                }
            }
        }

        return {nonword: n, whitespace: e, obj: {nonword: i(n), whitespace: i(e)}}
    }(), r = function () {
        "use strict";
        function n(n) {
            this.maxSize = t.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = e.noop)
        }

        function i() {
            this.head = this.tail = null
        }

        function r(e, t) {
            this.key = e, this.val = t, this.prev = this.next = null
        }

        return t.mixin(n.prototype, {
            set: function (e, t) {
                var n, i = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[e]) ? (n.val = t, this.list.moveToFront(n)) : (n = new r(e, t), this.list.add(n), this.hash[e] = n, this.size++)
            }, get: function (e) {
                var t = this.hash[e];
                if (t)return this.list.moveToFront(t), t.val
            }, reset: function () {
                this.size = 0, this.hash = {}, this.list = new i
            }
        }), t.mixin(i.prototype, {
            add: function (e) {
                this.head && (e.next = this.head, this.head.prev = e), this.head = e, this.tail = this.tail || e
            }, remove: function (e) {
                e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev
            }, moveToFront: function (e) {
                this.remove(e), this.add(e)
            }
        }), n
    }(), o = function () {
        "use strict";
        function e(e) {
            this.prefix = ["__", e, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + t.escapeRegExChars(this.prefix))
        }

        function n() {
            return (new Date).getTime()
        }

        function i(e) {
            return JSON.stringify(t.isUndefined(e) ? null : e)
        }

        function r(e) {
            return JSON.parse(e)
        }

        var o, a;
        try {
            o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
        } catch (e) {
            o = null
        }
        return a = o && window.JSON ? {
            _prefix: function (e) {
                return this.prefix + e
            }, _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            }, get: function (e) {
                return this.isExpired(e) && this.remove(e), r(o.getItem(this._prefix(e)))
            }, set: function (e, r, a) {
                return t.isNumber(a) ? o.setItem(this._ttlKey(e), i(n() + a)) : o.removeItem(this._ttlKey(e)), o.setItem(this._prefix(e), i(r))
            }, remove: function (e) {
                return o.removeItem(this._ttlKey(e)), o.removeItem(this._prefix(e)), this
            }, clear: function () {
                var e, t, n = [], i = o.length;
                for (e = 0; e < i; e++)(t = o.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                for (e = n.length; e--;)this.remove(n[e]);
                return this
            }, isExpired: function (e) {
                var i = r(o.getItem(this._ttlKey(e)));
                return !!(t.isNumber(i) && n() > i)
            }
        } : {get: t.noop, set: t.noop, remove: t.noop, clear: t.noop, isExpired: t.noop}, t.mixin(e.prototype, a), e
    }(), a = function () {
        "use strict";
        function n(t) {
            t = t || {}, this.cancelled = !1, this.lastUrl = null, this._send = t.transport ? i(t.transport) : e.ajax, this._get = t.rateLimiter ? t.rateLimiter(this._get) : this._get, this._cache = !1 === t.cache ? new r(0) : l
        }

        function i(n) {
            return function (i, r) {
                function o(e) {
                    t.defer(function () {
                        s.resolve(e)
                    })
                }

                function a(e) {
                    t.defer(function () {
                        s.reject(e)
                    })
                }

                var s = e.Deferred();
                return n(i, r, o, a), s
            }
        }

        var o = 0, a = {}, s = 6, l = new r(10);
        return n.setMaxPendingRequests = function (e) {
            s = e
        }, n.resetCache = function () {
            l.reset()
        }, t.mixin(n.prototype, {
            _get: function (e, t, n) {
                function i(t) {
                    n && n(null, t), u._cache.set(e, t)
                }

                function r() {
                    n && n(!0)
                }

                function l() {
                    o--, delete a[e], u.onDeckRequestArgs && (u._get.apply(u, u.onDeckRequestArgs), u.onDeckRequestArgs = null)
                }

                var c, u = this;
                this.cancelled || e !== this.lastUrl || ((c = a[e]) ? c.done(i).fail(r) : o < s ? (o++, a[e] = this._send(e, t).done(i).fail(r).always(l)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
            }, get: function (e, n, i) {
                var r;
                return t.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = e, (r = this._cache.get(e)) ? t.defer(function () {
                    i && i(null, r)
                }) : this._get(e, n, i), !!r
            }, cancel: function () {
                this.cancelled = !0
            }
        }), n
    }(), s = function () {
        "use strict";
        function n(t) {
            t = t || {}, t.datumTokenizer && t.queryTokenizer || e.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = t.datumTokenizer, this.queryTokenizer = t.queryTokenizer, this.reset()
        }

        function i(e) {
            return e = t.filter(e, function (e) {
                return !!e
            }), e = t.map(e, function (e) {
                return e.toLowerCase()
            })
        }

        function r() {
            return {ids: [], children: {}}
        }

        function o(e) {
            for (var t = {}, n = [], i = 0, r = e.length; i < r; i++)t[e[i]] || (t[e[i]] = !0, n.push(e[i]));
            return n
        }

        function a(e, t) {
            function n(e, t) {
                return e - t
            }

            var i = 0, r = 0, o = [];
            e = e.sort(n), t = t.sort(n);
            for (var a = e.length, s = t.length; i < a && r < s;)e[i] < t[r] ? i++ : e[i] > t[r] ? r++ : (o.push(e[i]), i++, r++);
            return o
        }

        return t.mixin(n.prototype, {
            bootstrap: function (e) {
                this.datums = e.datums, this.trie = e.trie
            }, add: function (e) {
                var n = this;
                e = t.isArray(e) ? e : [e], t.each(e, function (e) {
                    var o, a;
                    o = n.datums.push(e) - 1, a = i(n.datumTokenizer(e)), t.each(a, function (e) {
                        var t, i, a;
                        for (t = n.trie, i = e.split(""); a = i.shift();)t = t.children[a] || (t.children[a] = r()), t.ids.push(o)
                    })
                })
            }, get: function (e) {
                var n, r, s = this;
                return n = i(this.queryTokenizer(e)), t.each(n, function (e) {
                    var t, n, i, o;
                    if (r && 0 === r.length)return !1;
                    for (t = s.trie, n = e.split(""); t && (i = n.shift());)t = t.children[i];
                    if (!t || 0 !== n.length)return r = [], !1;
                    o = t.ids.slice(0), r = r ? a(r, o) : o
                }), r ? t.map(o(r), function (e) {
                    return s.datums[e]
                }) : []
            }, reset: function () {
                this.datums = [], this.trie = r()
            }, serialize: function () {
                return {datums: this.datums, trie: this.trie}
            }
        }), n
    }(), l = function () {
        "use strict";
        function i(e) {
            return e.local || null
        }

        function r(i) {
            var r, o;
            return o = {
                url: null,
                thumbprint: "",
                ttl: 864e5,
                filter: null,
                ajax: {}
            }, (r = i.prefetch || null) && (r = t.isString(r) ? {url: r} : r, r = t.mixin(o, r), r.thumbprint = n + r.thumbprint, r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", !r.url && e.error("prefetch requires url to be set")), r
        }

        function o(n) {
            function i(e) {
                return function (n) {
                    return t.debounce(n, e)
                }
            }

            function r(e) {
                return function (n) {
                    return t.throttle(n, e)
                }
            }

            var o, a;
            return a = {
                url: null,
                cache: !0,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            }, (o = n.remote || null) && (o = t.isString(o) ? {url: o} : o, o = t.mixin(a, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? r(o.rateLimitWait) : i(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && e.error("remote requires url to be set")), o
        }

        return {local: i, prefetch: r, remote: o}
    }();
    !function (n) {
        "use strict";
        function r(t) {
            t && (t.local || t.prefetch || t.remote) || e.error("one of local, prefetch, or remote is required"), this.limit = t.limit || 5, this.sorter = c(t.sorter), this.dupDetector = t.dupDetector || u, this.local = l.local(t), this.prefetch = l.prefetch(t), this.remote = l.remote(t), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new s({
                datumTokenizer: t.datumTokenizer,
                queryTokenizer: t.queryTokenizer
            }), this.storage = this.cacheKey ? new o(this.cacheKey) : null
        }

        function c(e) {
            function n(t) {
                return t.sort(e)
            }

            function i(e) {
                return e
            }

            return t.isFunction(e) ? n : i
        }

        function u() {
            return !1
        }

        var d, f;
        d = n.Bloodhound, f = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        }, n.Bloodhound = r, r.noConflict = function () {
            return n.Bloodhound = d, r
        }, r.tokenizers = i, t.mixin(r.prototype, {
            _loadPrefetch: function (t) {
                function n(e) {
                    o.clear(), o.add(t.filter ? t.filter(e) : e), o._saveToStorage(o.index.serialize(), t.thumbprint, t.ttl)
                }

                var i, r, o = this;
                return (i = this._readFromStorage(t.thumbprint)) ? (this.index.bootstrap(i), r = e.Deferred().resolve()) : r = e.ajax(t.url, t.ajax).done(n), r
            }, _getFromRemote: function (e, t) {
                function n(e, n) {
                    t(e ? [] : o.remote.filter ? o.remote.filter(n) : n)
                }

                var i, r, o = this;
                if (this.transport)return e = e || "", r = encodeURIComponent(e), i = this.remote.replace ? this.remote.replace(this.remote.url, e) : this.remote.url.replace(this.remote.wildcard, r), this.transport.get(i, this.remote.ajax, n)
            }, _cancelLastRemoteRequest: function () {
                this.transport && this.transport.cancel()
            }, _saveToStorage: function (e, t, n) {
                this.storage && (this.storage.set(f.data, e, n), this.storage.set(f.protocol, location.protocol, n), this.storage.set(f.thumbprint, t, n))
            }, _readFromStorage: function (e) {
                var t, n = {};
                return this.storage && (n.data = this.storage.get(f.data), n.protocol = this.storage.get(f.protocol), n.thumbprint = this.storage.get(f.thumbprint)), t = n.thumbprint !== e || n.protocol !== location.protocol, n.data && !t ? n.data : null
            }, _initialize: function () {
                function n() {
                    r.add(t.isFunction(o) ? o() : o)
                }

                var i, r = this, o = this.local;
                return i = this.prefetch ? this._loadPrefetch(this.prefetch) : e.Deferred().resolve(), o && i.done(n), this.transport = this.remote ? new a(this.remote) : null, this.initPromise = i.promise()
            }, initialize: function (e) {
                return !this.initPromise || e ? this._initialize() : this.initPromise
            }, add: function (e) {
                this.index.add(e)
            }, get: function (e, n) {
                function i(e) {
                    var i = o.slice(0);
                    t.each(e, function (e) {
                        var n;
                        return n = t.some(i, function (t) {
                            return r.dupDetector(e, t)
                        }), !n && i.push(e), i.length < r.limit
                    }), n && n(r.sorter(i))
                }

                var r = this, o = [], a = !1;
                o = this.index.get(e), o = this.sorter(o).slice(0, this.limit), o.length < this.limit ? a = this._getFromRemote(e, i) : this._cancelLastRemoteRequest(), a || (o.length > 0 || !this.transport) && n && n(o)
            }, clear: function () {
                this.index.reset()
            }, clearPrefetchCache: function () {
                this.storage && this.storage.clear()
            }, clearRemoteCache: function () {
                this.transport && a.resetCache()
            }, ttAdapter: function () {
                return t.bind(this.get, this)
            }
        })
    }(this);
    var c = function () {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion  ss-navigateright"></div>'
        }
    }(), u = function () {
        "use strict";
        var e = {
            wrapper: {},
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                color: "#909090",
                paddingLeft: "36px",
                opacity: "1"
            },
            input: {position: "relative", verticalAlign: "top"},
            inputWithNoHint: {position: "relative", verticalAlign: "top"},
            dropdown: {position: "absolute", top: "100%", left: "0", zIndex: "100", display: "none"},
            suggestions: {display: "block"},
            suggestion: {whiteSpace: "nowrap", cursor: "pointer"},
            suggestionChild: {whiteSpace: "normal"},
            ltr: {left: "0", right: "auto"},
            rtl: {left: "auto", right: " 0"}
        };
        return t.isMsie() && t.mixin(e.input, {backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}), t.isMsie() && t.isMsie() <= 7 && t.mixin(e.input, {marginTop: "-1px"}), e
    }(), d = function () {
        "use strict";
        function n(t) {
            t && t.el || e.error("EventBus initialized without el"), this.$el = e(t.el)
        }

        return t.mixin(n.prototype, {
            trigger: function (e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger("typeahead:" + e, t)
            }
        }), n
    }(), f = function () {
        "use strict";
        function e(e, t, n, i) {
            var r;
            if (!n)return this;
            for (t = t.split(l), n = i ? s(n, i) : n, this._callbacks = this._callbacks || {}; r = t.shift();)this._callbacks[r] = this._callbacks[r] || {
                    sync: [],
                    async: []
                }, this._callbacks[r][e].push(n);
            return this
        }

        function t(t, n, i) {
            return e.call(this, "async", t, n, i)
        }

        function n(t, n, i) {
            return e.call(this, "sync", t, n, i)
        }

        function i(e) {
            var t;
            if (!this._callbacks)return this;
            for (e = e.split(l); t = e.shift();)delete this._callbacks[t];
            return this
        }

        function r(e) {
            var t, n, i, r, a;
            if (!this._callbacks)return this;
            for (e = e.split(l), i = [].slice.call(arguments, 1); (t = e.shift()) && (n = this._callbacks[t]);)r = o(n.sync, this, [t].concat(i)), a = o(n.async, this, [t].concat(i)), r() && c(a);
            return this
        }

        function o(e, t, n) {
            function i() {
                for (var i, r = 0, o = e.length; !i && r < o; r += 1)i = !1 === e[r].apply(t, n);
                return !i
            }

            return i
        }

        function a() {
            return window.setImmediate ? function (e) {
                setImmediate(function () {
                    e()
                })
            } : function (e) {
                setTimeout(function () {
                    e()
                }, 0)
            }
        }

        function s(e, t) {
            return e.bind ? e.bind(t) : function () {
                e.apply(t, [].slice.call(arguments, 0))
            }
        }

        var l = /\s+/, c = a();
        return {onSync: n, onAsync: t, off: i, trigger: r}
    }(), p = function (e) {
        "use strict";
        function n(e, n, i) {
            for (var r, o = [], a = 0, s = e.length; a < s; a++)o.push(t.escapeRegExChars(e[a]));
            return r = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
        }

        var i = {node: null, pattern: null, tagName: "strong", className: null, wordsOnly: !1, caseSensitive: !1};
        return function (r) {
            function o(t) {
                var n, i, o;
                return (n = s.exec(t.data)) && (o = e.createElement(r.tagName), r.className && (o.className = r.className), i = t.splitText(n.index), i.splitText(n[0].length), o.appendChild(i.cloneNode(!0)), t.parentNode.replaceChild(o, i)), !!n
            }

            function a(e, t) {
                for (var n, i = 3, r = 0; r < e.childNodes.length; r++)n = e.childNodes[r], n.nodeType === i ? r += t(n) ? 1 : 0 : a(n, t)
            }

            var s;
            r = t.mixin({}, i, r), r.node && r.pattern && (r.pattern = t.isArray(r.pattern) ? r.pattern : [r.pattern], s = n(r.pattern, r.caseSensitive, r.wordsOnly), a(r.node, o))
        }
    }(window.document), h = function () {
        "use strict";
        function n(n) {
            var r, o, s, l, c = this;
            n = n || {}, n.input || e.error("input is missing"), r = t.bind(this._onBlur, this), o = t.bind(this._onFocus, this), s = t.bind(this._onKeydown, this), l = t.bind(this._onInput, this), this.$hint = e(n.hint), this.$input = e(n.input).on("blur.tt", r).on("focus.tt", o).on("keydown.tt", s), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = t.noop), t.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (e) {
                a[e.which || e.keyCode] || t.defer(t.bind(c._onInput, c, e))
            }) : this.$input.on("input.tt", l), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
        }

        function i(t) {
            return e('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }

        function r(e, t) {
            return n.normalizeQuery(e) === n.normalizeQuery(t)
        }

        function o(e) {
            return e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        }

        var a;
        return a = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, n.normalizeQuery = function (e) {
            return (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, t.mixin(n.prototype, f, {
            _onBlur: function () {
                this.resetInputValue(), this.trigger("blurred")
            }, _onFocus: function () {
                this.trigger("focused")
            }, _onKeydown: function (e) {
                var t = a[e.which || e.keyCode];
                this._managePreventDefault(t, e), t && this._shouldTrigger(t, e) && this.trigger(t + "Keyed", e)
            }, _onInput: function () {
                this._checkInputValue()
            }, _managePreventDefault: function (e, t) {
                var n, i, r;
                switch (e) {
                    case"tab":
                        i = this.getHint(), r = this.getInputValue(), n = i && i !== r && !o(t);
                        break;
                    case"up":
                    case"down":
                        n = !o(t);
                        break;
                    default:
                        n = !1
                }
                n && t.preventDefault()
            }, _shouldTrigger: function (e, t) {
                var n;
                switch (e) {
                    case"tab":
                        n = !o(t);
                        break;
                    default:
                        n = !0
                }
                return n
            }, _checkInputValue: function () {
                var e, t, n;
                e = this.getInputValue(), t = r(e, this.query), n = !!t && this.query.length !== e.length, this.query = e, t ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            }, focus: function () {
                this.$input.focus()
            }, blur: function () {
                this.$input.blur()
            }, getQuery: function () {
                return this.query
            }, setQuery: function (e) {
                this.query = e
            }, getInputValue: function () {
                return this.$input.val()
            }, setInputValue: function (e, t) {
                this.$input.val(e), t ? this.clearHint() : this._checkInputValue()
            }, resetInputValue: function () {
                this.setInputValue(this.query, !0)
            }, getHint: function () {
                return this.$hint.val()
            }, setHint: function (e) {
                this.$hint.val(e)
            }, clearHint: function () {
                this.setHint("")
            }, clearHintIfInvalid: function () {
                var e, t, n, i;
                e = this.getInputValue(), t = this.getHint(), n = e !== t && 0 === t.indexOf(e), !(i = "" !== e && n && !this.hasOverflow()) && this.clearHint()
            }, getLanguageDirection: function () {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            }, hasOverflow: function () {
                var e = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= e
            }, isCursorAtEnd: function () {
                var e, n, i;
                return e = this.$input.val().length, n = this.$input[0].selectionStart, t.isNumber(n) ? n === e : !document.selection || (i = document.selection.createRange(), i.moveStart("character", -e), e === i.text.length)
            }, destroy: function () {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
            }
        }), n
    }(), m = function () {
        "use strict";
        function n(n) {
            n = n || {}, n.templates = n.templates || {}, n.source || e.error("missing source"), n.name && !o(n.name) && e.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || t.getUniqueId(), this.source = n.source, this.displayFn = i(n.display || n.displayKey), this.templates = r(n.templates, this.displayFn), this.$el = e(c.dataset.replace("%CLASS%", this.name))
        }

        function i(e) {
            function n(t) {
                return t[e]
            }

            return e = e || "value", t.isFunction(e) ? e : n
        }

        function r(e, n) {
            function i(e) {
                return "<p>" + n(e) + "</p>"
            }

            return {
                empty: e.empty && t.templatify(e.empty),
                header: e.header && t.templatify(e.header),
                footer: e.footer && t.templatify(e.footer),
                suggestion: e.suggestion || i
            }
        }

        function o(e) {
            return /^[_a-zA-Z0-9-]+$/.test(e)
        }

        var a = "ttDataset", s = "ttValue", l = "ttDatum";
        return n.extractDatasetName = function (t) {
            return e(t).data(a)
        }, n.extractValue = function (t) {
            return e(t).data(s)
        }, n.extractDatum = function (t) {
            return e(t).data(l)
        }, t.mixin(n.prototype, f, {
            _render: function (n, i) {
                function r() {
                    return m.templates.empty({query: n, isEmpty: !0})
                }

                function o() {
                    function r(t) {
                        var n;
                        return n = e(c.suggestion).append(m.templates.suggestion(t)).data(a, m.name).data(s, m.displayFn(t)).data(l, t), n.children().each(function () {
                            e(this).css(u.suggestionChild)
                        }), n
                    }

                    var o, d;
                    return o = e(c.suggestions).css(u.suggestions), d = t.map(i, r), o.append.apply(o, d), m.highlight && p({
                        className: "tt-highlight",
                        node: o[0],
                        pattern: n
                    }), o
                }

                function d() {
                    return m.templates.header({query: n, isEmpty: !h})
                }

                function f() {
                    return m.templates.footer({query: n, isEmpty: !h})
                }

                if (this.$el) {
                    var h, m = this;
                    this.$el.empty(), h = i && i.length, !h && this.templates.empty ? this.$el.html(r()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? f() : null) : h && this.$el.html(o()).prepend(m.templates.header ? d() : null).append(m.templates.footer ? f() : null), this.trigger("rendered")
                }
            }, getRoot: function () {
                return this.$el
            }, update: function (e) {
                function t(t) {
                    n.canceled || e !== n.query || n._render(e, t)
                }

                var n = this;
                this.query = e, this.canceled = !1, this.source(e, t)
            }, cancel: function () {
                this.canceled = !0
            }, clear: function () {
                this.cancel(), this.$el.empty(), this.trigger("rendered")
            }, isEmpty: function () {
                return this.$el.is(":empty")
            }, destroy: function () {
                this.$el = null
            }
        }), n
    }(), g = function () {
        "use strict";
        function n(n) {
            var r, o, a, s = this;
            n = n || {}, n.menu || e.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = t.map(n.datasets, i), r = t.bind(this._onSuggestionClick, this), o = t.bind(this._onSuggestionMouseEnter, this), a = t.bind(this._onSuggestionMouseLeave, this), this.$menu = e(n.menu).on("click.tt", ".tt-suggestion", r).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", a), t.each(this.datasets, function (e) {
                s.$menu.append(e.getRoot()), e.onSync("rendered", s._onRendered, s)
            })
        }

        function i(e) {
            return new m(e)
        }

        return t.mixin(n.prototype, f, {
            _onSuggestionClick: function (t) {
                this.trigger("suggestionClicked", e(t.currentTarget))
            }, _onSuggestionMouseEnter: function (t) {
                this._removeCursor(), this._setCursor(e(t.currentTarget), !0)
            }, _onSuggestionMouseLeave: function () {
                this._removeCursor()
            }, _onRendered: function () {
                function e(e) {
                    return e.isEmpty()
                }

                this.isEmpty = t.every(this.datasets, e), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
            }, _hide: function () {
                this.$menu.hide()
            }, _show: function () {
                this.$menu.css("display", "block")
            }, _getSuggestions: function () {
                return this.$menu.find(".tt-suggestion")
            }, _getCursor: function () {
                return this.$menu.find(".tt-cursor").first()
            }, _setCursor: function (e, t) {
                e.first().addClass("tt-cursor"), !t && this.trigger("cursorMoved")
            }, _removeCursor: function () {
                this._getCursor().removeClass("tt-cursor")
            }, _moveCursor: function (e) {
                var t, n, i, r;
                if (this.isOpen) {
                    if (n = this._getCursor(), t = this._getSuggestions(), this._removeCursor(), i = t.index(n) + e, -1 === (i = (i + 1) % (t.length + 1) - 1))return void this.trigger("cursorRemoved");
                    i < -1 && (i = t.length - 1), this._setCursor(r = t.eq(i)), this._ensureVisible(r)
                }
            }, _ensureVisible: function (e) {
                var t, n, i, r;
                t = e.position().top, n = t + e.outerHeight(!0), i = this.$menu.scrollTop(), r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), t < 0 ? this.$menu.scrollTop(i + t) : r < n && this.$menu.scrollTop(i + (n - r))
            }, close: function () {
                this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
            }, open: function () {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            }, setLanguageDirection: function (e) {
                this.$menu.css("ltr" === e ? u.ltr : u.rtl)
            }, moveCursorUp: function () {
                this._moveCursor(-1)
            }, moveCursorDown: function () {
                this._moveCursor(1)
            }, getDatumForSuggestion: function (e) {
                var t = null;
                return e.length && (t = {
                    raw: m.extractDatum(e),
                    value: m.extractValue(e),
                    datasetName: m.extractDatasetName(e)
                }), t
            }, getDatumForCursor: function () {
                return this.getDatumForSuggestion(this._getCursor().first())
            }, getDatumForTopSuggestion: function () {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            }, update: function (e) {
                function n(t) {
                    t.update(e)
                }

                t.each(this.datasets, n)
            }, empty: function () {
                function e(e) {
                    e.clear()
                }

                t.each(this.datasets, e), this.isEmpty = !0
            }, isVisible: function () {
                return this.isOpen && !this.isEmpty
            }, destroy: function () {
                function e(e) {
                    e.destroy()
                }

                this.$menu.off(".tt"), this.$menu = null, t.each(this.datasets, e)
            }
        }), n
    }(), v = function () {
        "use strict";
        function n(n) {
            var r, o, a;
            n = n || {}, n.input || e.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = t.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), r = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), a = this.$node.find(".tt-hint"), o.on("blur.tt", function (e) {
                var n, i, a;
                n = document.activeElement, i = r.is(n), a = r.has(n).length > 0, t.isMsie() && (i || a) && (e.preventDefault(), e.stopImmediatePropagation(), t.defer(function () {
                    o.focus()
                }))
            }), r.on("mousedown.tt", function (e) {
                e.preventDefault()
            }), this.eventBus = n.eventBus || new d({el: o}), this.dropdown = new g({
                menu: r,
                datasets: n.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new h({
                input: o,
                hint: a
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
        }

        function i(t, n) {
            var i, o, s, l;
            i = e(t), o = e(c.wrapper).css(u.wrapper), s = e(c.dropdown).css(u.dropdown), l = i.clone().css(u.hint).css(r(i)), l.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            }), i.data(a, {
                dir: i.attr("dir"),
                autocomplete: i.attr("autocomplete"),
                spellcheck: i.attr("spellcheck"),
                style: i.attr("style")
            }), i.addClass("tt-input").attr({autocomplete: "off", spellcheck: !1}).css(n ? u.input : u.inputWithNoHint);
            try {
                !i.attr("dir") && i.attr("dir", "auto")
            } catch (e) {
            }
            return i.wrap(o).parent().prepend(n ? l : null).append(s)
        }

        function r(e) {
            return {
                backgroundAttachment: e.css("background-attachment"),
                backgroundClip: e.css("background-clip"),
                backgroundColor: e.css("background-color"),
                backgroundImage: e.css("background-image"),
                backgroundOrigin: e.css("background-origin"),
                backgroundPosition: e.css("background-position"),
                backgroundRepeat: e.css("background-repeat"),
                backgroundSize: e.css("background-size")
            }
        }

        function o(e) {
            var n = e.find(".tt-input");
            t.each(n.data(a), function (e, i) {
                t.isUndefined(e) ? n.removeAttr(i) : n.attr(i, e)
            }), n.detach().removeData(a).removeClass("tt-input").insertAfter(e), e.remove()
        }

        var a = "ttAttrs";
        return t.mixin(n.prototype, {
            _onSuggestionClicked: function (e, t) {
                var n;
                (n = this.dropdown.getDatumForSuggestion(t)) && this._select(n)
            }, _onCursorMoved: function () {
                var e = this.dropdown.getDatumForCursor();
                this.input.setInputValue(e.value, !0), this.eventBus.trigger("cursorchanged", e.raw, e.datasetName)
            }, _onCursorRemoved: function () {
                this.input.resetInputValue(), this._updateHint()
            }, _onDatasetRendered: function () {
                this._updateHint()
            }, _onOpened: function () {
                this._updateHint(), this.eventBus.trigger("opened")
            }, _onClosed: function () {
                this.input.clearHint(), this.eventBus.trigger("closed")
            }, _onFocused: function () {
                this.isActivated = !0, this.dropdown.open()
            }, _onBlurred: function () {
                this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
            }, _onEnterKeyed: function (e, t) {
                var n, i;
                n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), t.preventDefault()) : this.autoselect && i && (this._select(i), t.preventDefault())
            }, _onTabKeyed: function (e, t) {
                var n;
                (n = this.dropdown.getDatumForCursor()) ? (this._select(n), t.preventDefault()) : this._autocomplete(!0)
            }, _onEscKeyed: function () {
                this.dropdown.close(), this.input.resetInputValue()
            }, _onUpKeyed: function () {
                var e = this.input.getQuery();
                this.dropdown.isEmpty && e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.moveCursorUp(), this.dropdown.open()
            }, _onDownKeyed: function () {
                var e = this.input.getQuery();
                this.dropdown.isEmpty && e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.moveCursorDown(), this.dropdown.open()
            }, _onLeftKeyed: function () {
                "rtl" === this.dir && this._autocomplete()
            }, _onRightKeyed: function () {
                "ltr" === this.dir && this._autocomplete()
            }, _onQueryChanged: function (e, t) {
                this.input.clearHintIfInvalid(), t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
            }, _onWhitespaceChanged: function () {
                this._updateHint(), this.dropdown.open()
            }, _setLanguageDirection: function () {
                var e;
                this.dir !== (e = this.input.getLanguageDirection()) && (this.dir = e, this.$node.css("direction", e), this.dropdown.setLanguageDirection(e))
            }, _updateHint: function () {
                var e, n, i, r, o, a;
                e = this.dropdown.getDatumForTopSuggestion(), e && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = h.normalizeQuery(n), r = t.escapeRegExChars(i), o = new RegExp("^(?:" + r + ")(.+$)", "i"), a = o.exec(e.value), a ? this.input.setHint(n + a[1]) : this.input.clearHint()) : this.input.clearHint()
            }, _autocomplete: function (e) {
                var t, n, i, r;
                t = this.input.getHint(), n = this.input.getQuery(), i = e || this.input.isCursorAtEnd(), t && n !== t && i && (r = this.dropdown.getDatumForTopSuggestion(), r && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
            }, _select: function (e) {
                this.input.setQuery(e.value), this.input.setInputValue(e.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", e.raw, e.datasetName), this.dropdown.close(), t.defer(t.bind(this.dropdown.empty, this.dropdown))
            }, open: function () {
                this.dropdown.open()
            }, close: function () {
                this.dropdown.close()
            }, setVal: function (e) {
                e = t.toStr(e), this.isActivated ? this.input.setInputValue(e) : (this.input.setQuery(e), this.input.setInputValue(e, !0)), this._setLanguageDirection()
            }, getVal: function () {
                return this.input.getQuery()
            }, destroy: function () {
                this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
            }
        }), n
    }();
    !function () {
        "use strict";
        var n, i, r;
        n = e.fn.typeahead, i = "ttTypeahead", r = {
            initialize: function (n, r) {
                function o() {
                    var o, a = e(this);
                    t.each(r, function (e) {
                        e.highlight = !!n.highlight
                    }), o = new v({
                        input: a,
                        eventBus: new d({el: a}),
                        withHint: !!t.isUndefined(n.hint) || !!n.hint,
                        minLength: n.minLength,
                        autoselect: n.autoselect,
                        datasets: r
                    }), a.data(i, o)
                }

                return r = t.isArray(r) ? r : [].slice.call(arguments, 1), n = n || {}, this.each(o)
            }, open: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && t.open()
                }

                return this.each(t)
            }, close: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && t.close()
                }

                return this.each(t)
            }, val: function (t) {
                function n() {
                    var n, r = e(this);
                    (n = r.data(i)) && n.setVal(t)
                }

                function r(e) {
                    var t, n;
                    return (t = e.data(i)) && (n = t.getVal()), n
                }

                return arguments.length ? this.each(n) : r(this.first())
            }, destroy: function () {
                function t() {
                    var t, n = e(this);
                    (t = n.data(i)) && (t.destroy(), n.removeData(i))
                }

                return this.each(t)
            }
        }, e.fn.typeahead = function (t) {
            var n;
            return r[t] && "initialize" !== t ? (n = this.filter(function () {
                return !!e(this).data(i)
            }), r[t].apply(n, [].slice.call(arguments, 1))) : r.initialize.apply(this, arguments)
        }, e.fn.typeahead.noConflict = function () {
            return e.fn.typeahead = n, this
        }
    }()
}(window.jQuery), function () {
    function e(e, t) {
        var n = e.find("thead.fixed-header-copy > tr:first").css("width", e.outerWidth(!0));
        $("tr:first > th", t).each(function (e, t) {
            n.find("th:eq(" + e + ")").css("width", $(t).outerWidth(!0))
        })
    }

    function t(e, t) {
        var n, r, o;
        e.is(":visible") && (o = t.data("isFixed"), r = t.length && t.offset().top - t.data("topOffset"), n = i.scrollTop(), n >= r && !o ? o = 1 : n <= r && o && (o = 0), o ? $("thead.fixed-header-copy", e).removeClass("hide") : $("thead.fixed-header-copy", e).addClass("hide"), t.data("isFixed", o))
    }

    function n(e, t) {
        var n = !1;
        return function () {
            n || (e.call(), n = !0, setTimeout(function () {
                n = !1
            }, t))
        }
    }

    var i, r = {topOffset: 0, bgColor: "#FFF"};
    $.fn.fixedHeader = function (n) {
        return n = $.extend({}, r, n || {}), this.each(function () {
            var i, r = $(this), o = $("thead.fixed-header", r);
            !r.find("thead.fixed-header-copy").length && o.length && (r.addClass("table-fixed-header"), i = $.extend({
                topOffset: r.data("fixed-header-top-offset"),
                bgColor: r.data("fixed-header-bg-color")
            }, n), o.data("topOffset", i.topOffset), o.clone().removeClass("fixed-header").addClass("fixed-header-copy").css({
                position: "fixed",
                margin: "0 auto",
                top: i.topOffset + "px",
                backgroundColor: i.bgColor,
                zIndex: 1020
            }).appendTo(r), e(r, o), t(r, o))
        })
    }, $(function () {
        i = $(window).on("resize", function () {
            $("table.table-fixed-header").each(function () {
                e($(this), $("thead.fixed-header", this))
            })
        }).on("scroll", n(function () {
            $("table.table-fixed-header").each(function () {
                t($(this), $("thead.fixed-header", this))
            })
        }, 50)), $("table.table-fixed-header").not("[data-init-manual]").fixedHeader()
    })
}(), $(function () {
    if ($("#hero-category-autocomplete").length > 0) {
        var e = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("long_name", "short_name"),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: typeahead_categories
        });
        e.initialize(), $("#hero-category-autocomplete .typeahead").typeahead({
            hint: !1,
            highlight: !0,
            minLength: 1,
            autoselect: !0
        }, {
            name: "categories",
            displayKey: "long_name",
            source: e.ttAdapter(),
            templates: {empty: ['<div class="empty-message">', '<strong>No results found.</strong> Please try searching again, and if you still don\'t see the category you need, <a href="mailto:help@capterra.com">let us know!</a>', "</div>"].join("\n")}
        }), $("#hero-category-autocomplete .home-search").focus(), $(".js-clear-search").on("click", function () {
            $(this).parent().find(".typeahead").val(""), $(this).addClass("hide")
        }), $("#hero-category-autocomplete .typeahead").keyup(function () {
            $(this).val().length >= 3 ? $(".js-clear-search").removeClass("hide") : $(".js-clear-search").addClass("hide")
        }), $(document).on("typeahead:selected", function (e, t) {
            ga("send", "event", "Homepage Browse", "Click on Directory"), window.location = "/" + t.html_name
        }), $(document).on("typeahead:opened", function () {
            ga("send", "event", "Homepage Browse", "Click Into Field")
        })
    }
}), /*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
    function (e) {
        if ("function" == typeof define && define.amd) define(e); else if ("object" == typeof exports) module.exports = e(); else {
            var t = window.Cookies, n = window.Cookies = e();
            n.noConflict = function () {
                return window.Cookies = t, n
            }
        }
    }(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)t[i] = n[i]
            }
            return t
        }

        function t(n) {
            function i(t, r, o) {
                var a;
                if (arguments.length > 1) {
                    if (o = e({path: "/"}, i.defaults, o), "number" == typeof o.expires) {
                        var s = new Date;
                        s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
                    }
                    try {
                        a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a)
                    } catch (e) {
                    }
                    return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
                }
                t || (a = {});
                for (var l = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, u = 0; u < l.length; u++) {
                    var d = l[u].split("="), f = d[0].replace(c, decodeURIComponent), p = d.slice(1).join("=");
                    '"' === p.charAt(0) && (p = p.slice(1, -1));
                    try {
                        if (p = n.read ? n.read(p, f) : n(p, f) || p.replace(c, decodeURIComponent), this.json)try {
                            p = JSON.parse(p)
                        } catch (e) {
                        }
                        if (t === f) {
                            a = p;
                            break
                        }
                        t || (a[f] = p)
                    } catch (e) {
                    }
                }
                return a
            }

            return i.get = i.set = i, i.getJSON = function () {
                return i.apply({json: !0}, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function (t, n) {
                i(t, "", e(n, {expires: -1}))
            }, i.withConverter = t, i
        }

        return t(function () {
        })
    });
var ProductCompare = function (e, t) {
    "use strict";
    function n(t) {
        l = t, i(), r(), e(l).data("product-compare") !== undefined ? m.init() : e(l).data("product-compare-page") !== undefined && g.init()
    }

    function i() {
        d = e(l).data("product-compare-url"), f = e(l).data("product-compare-scope"), p = e(l).data("product-compare-long-name"), h = "product-comparison-list-" + f
    }

    function r() {
        var e = t.getJSON(h);
        e !== undefined && (u = e)
    }

    function o() {
        t.set(h, u)
    }

    function a() {
        return u.length
    }

    function s(t) {
        return e(c.toggleProductCompareClass + '[data-product-id="' + t + '"]')
    }

    var l, c = {
        toggleProductCompareClass: ".toggle-product-compare",
        toggleProductCompareLabelClass: ".toggle-product-compare-label",
        toggleTabClass: ".toggle-trigger",
        summaryBoxID: "product-compare-summary-box",
        viewComparisonButtonHTML: "<a href=\"#\" class=\"view-comparison\" onclick=\"ga('send', 'event', 'Directory - Product Compare', 'Compare Now - Product');\">Compare Now!</a>",
        productRemoveButton: '<button class="toggle-product-compare" data-product-id=""><i class="ss-delete"></i></button>',
        maxNumberOfCompareProducts: 4
    }, u = [], d = "", f = "", p = "", h = "", m = function () {
        function t() {
            C(), n(), y(), k(), v()
        }

        function n() {
            e(document).on("click", c.toggleProductCompareClass, h), e(document).on("click", c.toggleTabClass, k), e(".remove-all-product-comparisons").on("click", f)
        }

        function i(t, n, i) {
            var r = e(c.viewComparisonButtonHTML);
            i !== undefined && i.length > 0 && r.attr("style", i), r.on("click", $), "after" === n ? e(t).after(r) : "inside" === n && e(t).append(r)
        }

        function r(t) {
            e(t).children(".view-comparison").remove()
        }

        function f(t) {
            t.preventDefault(), u = [], e(c.toggleProductCompareClass).prop("checked", !1), e(c.toggleProductCompareLabelClass).text("Add to Compare"), e(c.toggleProductCompareClass).removeClass("remove"), b(), e(".product-compare-selections .limit-tooltip").hide(), e("input" + c.toggleProductCompareClass).not(":checked").prop("disabled", !1), o(), k()
        }

        function h() {
            for (var t = e(this), n = !1, i = 0; i < a(); i++)if (u[i].id === t.data("product-id")) {
                g.call(this, i), n = !0;
                break
            }
            n || m.call(this), o(), k()
        }

        function m() {
            var t = e(this);
            a() < c.maxNumberOfCompareProducts && (u.push({
                id: t.data("product-id"),
                name: t.data("product-name"),
                product_logo: t.data("product-logo")
            }), v(), y(), a() === c.maxNumberOfCompareProducts && t.siblings(".limit-tooltip").show(), ga("send", "event", "Directory - Product Compare", "Add Product - " + a()))
        }

        function g(t) {
            var n = e(this);
            a() > 0 && (u.splice(t, 1), a() <= 1 ? b() : r(e('.product-compare-selections[data-product-id="' + n.data("product-id") + '"]')), e(c.toggleProductCompareClass + '[data-product-id="' + n.data("product-id") + '"]').removeClass("remove").prop("checked", !1), e("label[for='toggle-product-compare-" + n.data("product-id") + "']").text("Add to Compare"), e(".product-compare-selections .limit-tooltip").hide(), e("input" + c.toggleProductCompareClass).not(":checked").prop("disabled", !1), ga("send", "event", "Directory - Product Compare", "Remove Product"))
        }

        function v() {
            for (var t = 0; t < a(); t++) {
                var n = s(u[t].id);
                a() > 1 && e("label[for='" + n.attr("id") + "']").text(""), n.addClass("remove"), n.prop("checked", !0)
            }
            a() === c.maxNumberOfCompareProducts && e("input" + c.toggleProductCompareClass).not(":checked").prop("disabled", !0)
        }

        function y() {
            if (a() > 1)for (var t = 0; t < a(); t++) {
                var n = s(u[t].id);
                0 === n.siblings(".view-comparison").length && i(e('label[for="' + n.attr("id") + '"]'), "after")
            }
        }

        function b() {
            e(c.toggleProductCompareLabelClass).text("Add to Compare"), e(".product-compare-selections .view-comparison").remove()
        }

        function w() {
            e("#" + c.summaryBoxID + " .view-comparison").show()
        }

        function x() {
            e("#" + c.summaryBoxID + " .view-comparison").hide()
        }

        function C() {
            e(l).append('<div class="stack  stack-exterior  product-compare-stack" id="' + c.summaryBoxID + '" style="display:none;">                                 <div class="stack-content  stack-content-thin">                                   <div class="grid">                                     <div class="cell  seven-tenths  lap-ten-twelfths push-lap-one-twelfth">                                       <div class="grid">                                         <div class="cell  five-eighths">                                           <ul class="products"><li></li><li></li><li></li><li></li></ul>                                         </div>                                         <div class="cell  three-eighths  compare-stack-actions">                                           <p class="color-gray">Compare (<b id="summary-box-product-count">1</b>) ' + p + " Software products.</p>                                         </div>                                       </div>                                     </div>                                   </div>                                 </div>                               </div>"), i(e("#" + c.summaryBoxID + " .compare-stack-actions"), "inside", "display:none;"), e("#" + c.summaryBoxID + " .compare-stack-actions .view-comparison").attr("onclick", "ga('send', 'event', 'Directory - Product Compare', 'Compare Now - Summary Box']);"), _()
        }

        function k() {
            var t = e("#" + c.summaryBoxID), n = t.find(".products li");
            if (n.html(""), a() > 0 && "" === location.hash) {
                for (var i = 0; i < a(); i++)e(n[i]).append(S(u[i]));
                e("#summary-box-product-count").text(a()), t.slideDown("fast"), a() > 1 ? w() : x()
            } else t.slideUp("fast")
        }

        function _() {
            var t = e('<a href="#" class="remove-all-product-comparisons">Remove All</a>');
            e("#" + c.summaryBoxID + " .compare-stack-actions").append(t)
        }

        function $(e) {
            e.preventDefault(), window.location = d + "/" + T() + "/" + E()
        }

        function T() {
            for (var e = [], t = 0; t < u.length; t++)e.push(u[t].id);
            return e.join("-")
        }

        function E() {
            for (var e = [], t = 0; t < u.length; t++)e.push(u[t].name.trim().replace(/[\s\.\/]+/g, "-"));
            return e.join("-vs-")
        }

        function S(t) {
            var n = e(c.productRemoveButton);
            return n.attr("data-product-id", t.id), '<div class="product">' + n[0].outerHTML + '<span class="product-name-tooltip" data-title="' + t.name + '"><div class="listing-thumbnail-container"><div class="thumbnail  listing-thumbnail"><img src="' + t.product_logo + '" class="padding-skinny"></div></div></span></div>'
        }

        return {init: t}
    }(), g = function () {
        function t() {
            var t = e(".product-comparison .remove-product");
            t.on("click", n), u = [];
            for (var i = 0; i < t.length; i++)if (e(t[i]).data("product-id") !== undefined) {
                var r = e(t[i]);
                u.push({id: r.data("product-id"), name: r.data("product-name"), product_logo: r.data("product-logo")})
            }
            o()
        }

        function n() {
            var t = e(this);
            if (t.data("product-id")) {
                for (var n = 0; n < a(); n++)if (u[n].id === t.data("product-id")) {
                    u.splice(n, 1);
                    break
                }
            } else u = [];
            return o(), !0
        }

        return {init: t}
    }();
    return {settings: c, init: n}
}(jQuery, Cookies), StickyScroll = function (e) {
    var t, n, i, r, o = e(window), a = 960, s = function (n) {
        t = e(n), t.length > 0 && (u(), c())
    }, l = function () {
        n = t.data("sticky-offset") || 0, i = t.offset().top - n, r = t.outerWidth()
    }, c = function () {
        o.resize(function () {
            d(), u()
        })
    }, u = function () {
        h() && (l(), f(), o.on("scroll", f))
    }, d = function () {
        o.off("scroll", f), p()
    }, f = function () {
        var e = o.scrollTop();
        i < e ? t.css({position: "fixed", top: n, width: r}) : p()
    }, p = function () {
        t.css({position: "static", top: 0, width: "100%"})
    }, h = function () {
        return o.width() > a
    };
    return {init: s}
}(jQuery), images = {
    0: "http://cdn2.capterra-static.com/assets/reviews/js-gauge-0-54408495bc496615cd18962fd35cfd5c.png",
    1: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-1-5ccd24c05b595d44bee37c3c555a00c7.png",
    2: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-2-f5148a3c8a0ae551b229fd3ec971f913.png",
    3: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-3-c943e6134f70ecc1bd8d536bf6c4524c.png",
    4: "http://cdn2.capterra-static.com/assets/reviews/js-gauge-4-ed139cf93cac3bd6c6869c3cb7f690f3.png",
    5: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-5-98a08ea75f4e2d85cbf65039b7faf5e9.png",
    6: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-6-b29ed25980512c4a897d00dd5caa5a84.png",
    7: "http://cdn2.capterra-static.com/assets/reviews/js-gauge-7-44341c01203e6c72c59ea0b83c19209e.png",
    8: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-8-faffda2bfe679ec44a0cbd18318201a5.png",
    9: "http://cdn1.capterra-static.com/assets/reviews/js-gauge-9-2d6c142a05dea57f39026f13e5d44c71.png",
    10: "http://cdn2.capterra-static.com/assets/reviews/js-gauge-10-014925fc2d3d7fc8596e7666b10117c5.png"
}, is_safari = -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome");
jQuery(document).ready(function () {
    doRecommendGauge(is_safari, images)
});
var rotateGauge = function (e, t) {
    if (null !== t) {
        var n = e, i = 18 * t;
        n.css("transition-delay", "2s"), n.css("transform", "rotate(" + i + "deg)")
    }
}, displayImage = function (e, t, n) {
    var i = e, r = parseInt(t);
    "undefined" == typeof n[r] ? i.append('<img src="' + n[5] + '" class="gauge-svg-image" alt="5/10" />') : i.append('<img src="' + n[r] + '" class="gauge-svg-image" alt="' + r + '/10" />')
};
if ($(function () {
        $(".toggle-panel.partner-reviews").length > 0 && (setTimeout(function () {
            var e = $(".toggle-panel.partner-reviews").attr("data-url");
            $("img.caploader").show(), $.ajax({url: e, type: "GET", dataType: "html"}).done(function (e) {
                $(".toggle-panel.partner-reviews .reviews-list").html(e), $("img.caploader").hide(), doRecommendGauge(is_safari, images)
            }).fail(function () {
                $("img.caploader").hide()
            })
        }, 50), $("a.show-more-partner-reviews").click(function () {
            var e = $(this).attr("data-url");
            $("img.caploader").show(), $.ajax({url: e, type: "GET", dataType: "html"}).done(function (t) {
                if (0 === t.trim().length) $("a.show-more-partner-reviews").hide(); else {
                    $(".toggle-panel.partner-reviews .reviews-list").append(t);
                    var n = parseInt(e.match(/\d$/)[0]);
                    $("a.show-more-partner-reviews").attr("data-url", e.replace(/\d$/, n + 1))
                }
                $("img.caploader").hide(), doRecommendGauge(is_safari, images)
            }).fail(function () {
                $("img.caploader").hide()
            })
        }))
    }), $(".toggle-product-compare").click(function () {
        sendPayload("Product Listing", "Check Add to Compare", "Add to Compare")
    }), $(".listing-description .spotlight-link").click(function () {
        sendPayload("Product Listing", "View Profile Click", "View Profile")
    }), $("#filter_form .form-option-list.reviews-stars .checkbox, #filter_form .form-option-list.reviews-stars label").change(function () {
        var e = $(this).parent();
        sendPayload("Filter Results Interactions", "Product Rating", $.trim(e.find("label").text()))
    }), $("#filter_form #users").change(function () {
        sendPayload("Filter Results Interactions", "Number of Users", $(this).find("option:selected").text())
    }), $("#filter_form .form-option-list.deployment .checkbox, #filter_form .form-option-list.deployment label").change(function () {
        sendPayload("Filter Results Interactions", "Deployment", fieldLabel(this))
    }), $("#filter_form .form-option-list.features .checkbox, #filter_form .form-option-list.features .label ").change(function () {
        sendPayload("Filter Results Interactions", "Features", fieldLabel(this))
    }), $("#filter_form .product-filter-actions input").click(function () {
        sendPayload("Filter Results Interactions", "Filter Results", "")
    }), $(".review-information div.reviews").click(function () {
        sendPayload("Product Reviews", "Click to Read Reviews", $(this).data("rating"))
    }), $("#new_review #review-submit-button").click(function () {
        sendPayload("Write a Review Form", "Submit a Review Button Click", "")
    }), $("a.tab-spotlight").length > 0) {
    var descriptor = $("div.site-main.product-comparison").first(),
        product = descriptor.data("productCompareLongName") + " Software",
        productUrl = "/" + descriptor.data("productCompareScope") + "/#";
    $("a.tab-spotlight:contains('Most Popular')").first().click(function () {
        pushTabData("Most Popular", "most-popular", product, productUrl)
    }), $("a.tab-spotlight:contains('Most Affordable')").first().click(function () {
        pushTabData("Most Affordable", "most-affordable", product, productUrl)
    }), $("a.tab-spotlight:contains('Most User-Friendly')").first().click(function () {
        pushTabData("Most User-Friendly", "most-user-friendly", product, productUrl)
    })
}
$("#browse-no-results a").click(function () {
    sendPayload("Category Search", "Contact Us Form Click", "Let us know")
}), $('#customers a:contains("Get a Listing!")').click(function () {
    sendPayload("Vendor Content", "Vendor CTA Click", "Get a Listing")
}), $('#customers a:contains("Find Out More!")').click(function () {
    sendPayload("Vendor Content", "Vendor CTA Click", "Find Out More")
}), $("form#new_advertiser #advertiser_first_name").blur(function () {
    sendPayload("Vendor Content", "Get a Free Estimate Form", "First Name")
}), $("form#new_advertiser #advertiser_last_name").blur(function () {
    sendPayload("Vendor Content", "Get a Free Estimate Form", "Last Name")
}), $("form#new_advertiser #advertiser_email").blur(function () {
    sendPayload("Vendor Content", "Get a Free Estimate Form", "Email Address")
}), $("form#new_advertiser #advertiser_phone").blur(function () {
    sendPayload("Vendor Content", "Get a Free Estimate Form", "Phone Number")
}), $("form#new_advertiser #advertiser_url").blur(function () {
    sendPayload("Vendor Content", "Get a Free Estimate Form", "Website")
}), $("h2.subheading.delta:contains('received your estimate request and we look forward to')").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "Submit Button Click"), $("div.error-message").length > 0 && ($("form#new_advertiser #advertiser_first_name.error").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "First Name - Error"), $("form#new_advertiser #advertiser_last_name.error").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "Last Name - Error"), $("form#new_advertiser #advertiser_email.error").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "Email Address - Error"), $("form#new_advertiser #advertiser_phone.error").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "Phone Number - Error"), $("form#new_advertiser #advertiser_url.error").length > 0 && sendPayload("Vendor Content", "Get a Free Estimate Form", "Website - Error")), $("input.button.submit-calculator").click(function () {
    sendPayload("Vendor Content", "Calculate Bid", "Show Me My Target Bid")
}), $("form#new_applicant input.button").click(function () {
    sendPayload("Vendor Content", "Sign Up for Listing", "Create My Listing Button Click")
});
var locationPath = window.location.pathname;
if ($("div.site-main.product-comparison div.card.listing").length > 0) {
    var dirType = $('p:contains("Your filtered results returned")').length > 0 ? "(Filtered Directory)" : "(Directory)";
    $("div.site-main.product-comparison div.card.listing a.thumbnail.listing-thumbnail").click(function () {
        return sendPayload("Click Out", "Logo " + dirType, locationPath), !0
    }), $("div.site-main.product-comparison div.card.listing h2.listing-name a").click(function () {
        return sendPayload("Click Out", "Product Name " + dirType, locationPath), !0
    }), $("div.site-main.product-comparison div.card.listing a.button.visit-website-button").click(function () {
        return sendPayload("Click Out", "Visit Website Button " + dirType, locationPath), !0
    })
}
$("div.site-main:not(.product-comparison)").length > 0 && ($("div.site-main:not(.product-comparison) a.thumbnail.listing-thumbnail").click(function () {
    return sendPayload("Click Out", "Logo (SL)", locationPath), !0
}), $("div.site-main:not(.product-comparison) a.button.visit-website-button").click(function () {
    return sendPayload("Click Out", "Visit Website Button (SL)", locationPath), !0
}), $('div.site-main:not(.product-comparison) a.button.button-secondary.ss-action:contains("Free Trial")').click(function () {
    return sendPayload("Click Out", "Free Trial Button (SL)", locationPath), !0
}), $('div.site-main:not(.product-comparison) a.button.button-secondary.ss-action:contains("Free Demo")').click(function () {
    return sendPayload("Click Out", "Free Demo Button (SL)", locationPath), !0
}), $('div.site-main:not(.product-comparison) a:contains("pricing details")').click(function () {
    return sendPayload("Click Out", "Pricing Link (SL Product Details)", locationPath), !0
}), $('div.site-main:not(.product-comparison) a[data-external-click="spotlight-link"]:contains("free trial")').click(function () {
    return sendPayload("Click Out", "Free Trial Link (SL Product Details)", locationPath), !0
}), $('div.site-main:not(.product-comparison) a[data-external-click="spotlight-link"]:contains("free demo")').click(function () {
    return sendPayload("Click Out", "Free Demo Link (SL Product Details)", locationPath), !0
}), $("div.site-main:not(.product-comparison) div.spotlight-product-info div.tags a").click(function () {
    var e = $(this).text().trim();
    return sendPayload("Click Out", ($.inArray(e, ["Free Trial", "Pricing", "Free Demo"]) > -1 ? e + " Link" : " Custom") + " (SL Additional)", locationPath), !0
})), $('.compare-heading-table a[data-external-click="visit-website-button"]').click(function () {
    return sendPayload("Click Out", "Visit Website Button (Comparison)", window.location.pathname), !0
});