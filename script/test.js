(function (sttc) {
  /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  "use strict";
  var aa = {},
    m = this || self;
  function ba(a) {
    a = a.split(".");
    for (var b = m, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function ca(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
    return "array" == b || ("object" == b && "number" == typeof a.length);
  }
  function da(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ea(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, fa) && a[fa]) || (a[fa] = ++ha)
    );
  }
  var fa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ha = 0;
  function ia(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function ka(a, b, c) {
    ka =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? ia
        : ja;
    return ka.apply(null, arguments);
  }
  function la(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function ma(a, b) {
    a = a.split(".");
    var c = m;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function na(a) {
    return a;
  }
  let oa = new Date().getTime();
  function pa(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function ra(a, b) {
    let c = 0;
    a = pa(String(a)).split(".");
    b = pa(String(b)).split(".");
    const d = Math.max(a.length, b.length);
    for (let g = 0; 0 == c && g < d; g++) {
      var e = a[g] || "",
        f = b[g] || "";
      do {
        e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
        f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
        if (0 == e[0].length && 0 == f[0].length) break;
        c =
          sa(
            0 == e[1].length ? 0 : parseInt(e[1], 10),
            0 == f[1].length ? 0 : parseInt(f[1], 10)
          ) ||
          sa(0 == e[2].length, 0 == f[2].length) ||
          sa(e[2], f[2]);
        e = e[3];
        f = f[3];
      } while (0 == c);
    }
    return c;
  }
  function sa(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var ta,
    ua = ba("CLOSURE_FLAGS"),
    va = ua && ua[610401301];
  ta = null != va ? va : !1;
  function ya() {
    var a = m.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var za;
  const Aa = m.navigator;
  za = Aa ? Aa.userAgentData || null : null;
  function Ba(a) {
    return ta
      ? za
        ? za.brands.some(({ brand: b }) => b && -1 != b.indexOf(a))
        : !1
      : !1;
  }
  function p(a) {
    return -1 != ya().indexOf(a);
  }
  function Ca() {
    return ta ? !!za && 0 < za.brands.length : !1;
  }
  function Da() {
    return Ca() ? !1 : p("Trident") || p("MSIE");
  }
  function Ea() {
    return Ca() ? Ba("Microsoft Edge") : p("Edg/");
  }
  function Fa() {
    !p("Safari") ||
      Ha() ||
      (Ca() ? 0 : p("Coast")) ||
      (Ca() ? 0 : p("Opera")) ||
      (Ca() ? 0 : p("Edge")) ||
      Ea() ||
      (Ca() && Ba("Opera"));
  }
  function Ha() {
    return Ca()
      ? Ba("Chromium")
      : ((p("Chrome") || p("CriOS")) && !(Ca() ? 0 : p("Edge"))) || p("Silk");
  }
  function Ia(a) {
    const b = {};
    a.forEach((c) => {
      b[c[0]] = c[1];
    });
    return (c) => b[c.find((d) => d in b)] || "";
  }
  function Ja() {
    var a = ya();
    if (Da()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];
      else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
          if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
            if (a && a[1])
              switch (a[1]) {
                case "4.0":
                  b = "8.0";
                  break;
                case "5.0":
                  b = "9.0";
                  break;
                case "6.0":
                  b = "10.0";
                  break;
                case "7.0":
                  b = "11.0";
              }
            else b = "7.0";
          else b = c[1];
        a = b;
      }
      return a;
    }
    c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
    b = [];
    let d;
    for (; (d = c.exec(a)); ) b.push([d[1], d[2], d[3] || void 0]);
    a = Ia(b);
    return (Ca() ? 0 : p("Opera"))
      ? a(["Version", "Opera"])
      : (Ca() ? 0 : p("Edge"))
      ? a(["Edge"])
      : Ea()
      ? a(["Edg"])
      : p("Silk")
      ? a(["Silk"])
      : Ha()
      ? a(["Chrome", "CriOS", "HeadlessChrome"])
      : ((a = b[2]) && a[1]) || "";
  }
  function Ka(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function La(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ma(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = "string" === typeof a ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Na(a, b) {
    const c = a.length,
      d = Array(c),
      e = "string" === typeof a ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Oa(a, b) {
    const c = a.length,
      d = "string" === typeof a ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Pa(a, b) {
    a: {
      const c = a.length,
        d = "string" === typeof a ? a.split("") : a;
      for (let e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Qa(a, b) {
    a: {
      var c = a.length;
      const d = "string" === typeof a ? a.split("") : a;
      for (--c; 0 <= c; c--)
        if (c in d && b.call(void 0, d[c], c, a)) {
          b = c;
          break a;
        }
      b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Ra(a, b) {
    return 0 <= Ka(a, b);
  }
  function q(a) {
    const b = a.length;
    if (0 < b) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Ta(a) {
    Ta[" "](a);
    return a;
  }
  Ta[" "] = function () {};
  var Ua = Da();
  !p("Android") || Ha();
  Ha();
  Fa();
  var Va = null;
  function Wa(a) {
    var b = [];
    Xa(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function Xa(a, b) {
    function c(k) {
      for (; d < a.length; ) {
        var l = a.charAt(d++),
          n = Va[l];
        if (null != n) return n;
        if (!/^[\s\xa0]*$/.test(l))
          throw Error("Unknown base64 encoding at char: " + l);
      }
      return k;
    }
    Ya();
    for (var d = 0; ; ) {
      var e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (64 === h && -1 === e) break;
      b((e << 2) | (f >> 4));
      64 != g &&
        (b(((f << 4) & 240) | (g >> 2)), 64 != h && b(((g << 6) & 192) | h));
    }
  }
  function Ya() {
    if (!Va) {
      Va = {};
      for (
        var a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
          b = ["+/=", "+/", "-_=", "-_.", "-_"],
          c = 0;
        5 > c;
        c++
      )
        for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
          var f = d[e];
          void 0 === Va[f] && (Va[f] = e);
        }
    }
  }
  const Za = Symbol();
  function $a(a, b) {
    if (Za) return (a[Za] |= b);
    if (void 0 !== a.g) return (a.g |= b);
    Object.defineProperties(a, {
      g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
    });
    return b;
  }
  function ab(a) {
    const b = r(a);
    1 !== (b & 1) &&
      (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), bb(a, b | 1));
  }
  function cb(a, b) {
    Za ? a[Za] && (a[Za] &= ~b) : void 0 !== a.g && (a.g &= ~b);
  }
  function r(a) {
    let b;
    Za ? (b = a[Za]) : (b = a.g);
    return null == b ? 0 : b;
  }
  function bb(a, b) {
    Za
      ? (a[Za] = b)
      : void 0 !== a.g
      ? (a.g = b)
      : Object.defineProperties(a, {
          g: { value: b, configurable: !0, writable: !0, enumerable: !1 },
        });
    return a;
  }
  function db(a, b) {
    Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
    bb(a, b);
    return a;
  }
  function eb(a) {
    $a(a, 1);
    return a;
  }
  function fb(a) {
    return !!(r(a) & 2);
  }
  function gb(a) {
    $a(a, 16);
    return a;
  }
  function hb(a, b) {
    bb(b, (a | 0) & -51);
  }
  function ib(a, b) {
    bb(b, (a | 18) & -41);
  }
  var jb = {};
  function kb(a) {
    return (
      null !== a &&
      "object" === typeof a &&
      !Array.isArray(a) &&
      a.constructor === Object
    );
  }
  let lb;
  var mb = Object.freeze(bb([], 23));
  function nb(a) {
    if (r(a.s) & 2) throw Error();
  }
  function ob(a) {
    if (null == a) return a;
    switch (typeof a) {
      case "string":
        return +a;
      case "number":
        return a;
    }
  }
  function pb(a) {
    return a;
  }
  function qb(a, b, c) {
    var d = !1;
    if (
      null != a &&
      "object" === typeof a &&
      !(d = Array.isArray(a)) &&
      a.ta === jb
    )
      return a;
    if (d) {
      var e = (d = r(a));
      0 === e && (e |= c & 16);
      e |= c & 2;
      e !== d && bb(a, e);
      return new b(a);
    }
  }
  function t(a, b, c) {
    return -1 === b
      ? null
      : b >= a.i
      ? a.h
        ? a.h[b]
        : void 0
      : c && a.h && ((c = a.h[b]), null != c)
      ? c
      : a.s[b + -1];
  }
  function v(a, b, c) {
    nb(a);
    return y(a, b, c);
  }
  function y(a, b, c, d) {
    a.A && (a.A = void 0);
    if (b >= a.i || d)
      return (d = a.i + -1), ((a.h || (a.h = a.s[d] = {}))[b] = c), a;
    a.s[b + -1] = c;
    (c = a.h) && b in c && delete c[b];
    return a;
  }
  function rb(a, b, c, d, e) {
    let f = t(a, b, d);
    Array.isArray(f) || (f = mb);
    const g = r(f);
    g & 1 || eb(f);
    if (e) g & 2 || $a(f, 18), c & 1 || Object.freeze(f);
    else {
      e = !(c & 2);
      const h = g & 2;
      c & 1 || !h
        ? e && g & 16 && !h && cb(f, 16)
        : ((f = eb(Array.prototype.slice.call(f))), y(a, b, f, d));
    }
    return f;
  }
  function sb(a, b) {
    a = t(a, b);
    return null == a ? a : !!a;
  }
  function tb(a, b, c) {
    const d = fb(a.s);
    let e = rb(a, b, 1, void 0, d),
      f = r(e);
    if (!(f & 4)) {
      Object.isFrozen(e) && ((e = eb(e.slice())), y(a, b, e));
      let g = 0,
        h = 0;
      for (; g < e.length; g++) {
        const k = c(e[g]);
        null != k && (e[h++] = k);
      }
      h < g && (e.length = h);
      f |= 5;
      d && (f |= 18);
      bb(e, f);
      f & 2 && Object.freeze(e);
    }
    !d &&
      (f & 2 || Object.isFrozen(e)) &&
      ((e = Array.prototype.slice.call(e)), $a(e, 5), y(a, b, e));
    return e;
  }
  function A(a, b, c = !1) {
    return B(sb(a, b), c);
  }
  function ub(a, b, c) {
    if (null == c) a = v(a, b, mb);
    else {
      var d = r(c);
      if (!(d & 4)) {
        if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
        for (let e = 0; e < c.length; e++) c[e] = c[e];
        bb(c, d | 5);
      }
      a = v(a, b, c);
    }
    return a;
  }
  function C(a, b, c, d) {
    nb(a);
    c !== d ? y(a, b, c) : y(a, b, void 0, !1);
    return a;
  }
  function vb(a, b, c, d) {
    nb(a);
    (c = wb(a, c)) && c !== b && null != d && y(a, c, void 0, !1);
    return y(a, b, d);
  }
  function xb(a, b, c) {
    return wb(a, b) === c ? c : -1;
  }
  function wb(a, b) {
    let c = 0;
    for (let d = 0; d < b.length; d++) {
      const e = b[d];
      null != t(a, e) && (0 !== c && y(a, c, void 0, !1), (c = e));
    }
    return c;
  }
  function yb(a, b, c, d) {
    const e = t(a, c, d);
    b = qb(e, b, r(a.s));
    b !== e && null != b && y(a, c, b, d);
    return b;
  }
  function D(a, b, c) {
    b = yb(a, b, c, !1);
    if (null == b) return b;
    if (!fb(a.s)) {
      const d = zb(b);
      d !== b && ((b = d), y(a, c, b, !1));
    }
    return b;
  }
  function Ab(a, b, c, d, e) {
    var f = !!(e & 2),
      g = rb(a, c, 1, void 0, f);
    if (g === mb || !(r(g) & 4)) {
      var h = g;
      g = !!(e & 2);
      var k = !!(r(h) & 2);
      f = h;
      !g && k && (h = Array.prototype.slice.call(h));
      var l = e | (k ? 2 : 0);
      e = k;
      let n = (k = 0);
      for (; k < h.length; k++) {
        const u = qb(h[k], b, l);
        void 0 !== u && ((e = e || !!(2 & r(u.s))), (h[n++] = u));
      }
      n < k && (h.length = n);
      b = h;
      h = r(b);
      l = h | 5;
      e = e ? l & -9 : l | 8;
      h != e && (b = db(b, e));
      h = b;
      f !== h && y(a, c, h);
      (g || 1 === d) && Object.freeze(h);
      return h;
    }
    if (3 === d) return g;
    f ||
      ((f = Object.isFrozen(g)),
      1 === d
        ? f || Object.freeze(g)
        : ((d = r(g)),
          (b = d & -19),
          f && ((g = Array.prototype.slice.call(g)), (d = 0), y(a, c, g)),
          d !== b && bb(g, b)));
    return g;
  }
  function F(a, b, c) {
    const d = r(a.s);
    var e = !!(d & 2);
    a = Ab(a, b, c, e ? 1 : 2, d);
    if (!(e || r(a) & 8)) {
      for (e = 0; e < a.length; e++)
        (b = a[e]), (c = zb(b)), b !== c && (a[e] = c);
      $a(a, 8);
    }
    return a;
  }
  function Bb(a, b, c) {
    nb(a);
    null == c && (c = void 0);
    return y(a, b, c);
  }
  function Cb(a, b, c, d) {
    nb(a);
    null == d && (d = void 0);
    return vb(a, b, c, d);
  }
  function Db(a, b, c) {
    nb(a);
    if (null != c) {
      var d = !!c.length;
      for (var e = 0; e < c.length; e++) {
        var f = c[e];
        d = d && !fb(f.s);
      }
      e = r(c);
      f = e | 1;
      d = (d ? f | 8 : f & -9) | 4;
      d != e && (c = db(c, d));
    }
    null == c && (c = mb);
    return y(a, b, c);
  }
  function Eb(a, b) {
    return ob(t(a, b));
  }
  function Fb(a, b) {
    a: if (((a = t(a, b)), null != a)) {
      switch (typeof a) {
        case "string":
          a = +a;
          break a;
        case "number":
          break a;
      }
      a = void 0;
    }
    return a;
  }
  function Gb(a, b, c) {
    return v(a, b, null == c ? c : !!c);
  }
  function B(a, b) {
    return null == a ? b : a;
  }
  function G(a, b) {
    return B(t(a, b), "");
  }
  function Hb(a, b) {
    const c = t(a, b);
    var d =
      null == c
        ? c
        : "number" === typeof c ||
          "NaN" === c ||
          "Infinity" === c ||
          "-Infinity" === c
        ? Number(c)
        : void 0;
    null != d && d !== c && y(a, b, d);
    return B(d, 0);
  }
  function H(a, b) {
    return B(t(a, b), 0);
  }
  function Ib(a, b, c, d) {
    return D(a, b, xb(a, d, c));
  }
  let Jb;
  function Kb(a, b) {
    Jb = b;
    a = new a(b);
    Jb = void 0;
    return a;
  }
  function Lb(a, b) {
    return Mb(b);
  }
  function Mb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a && !Array.isArray(a) && null != a && a instanceof Uint8Array) {
          let b = "",
            c = 0;
          const d = a.length - 10240;
          for (; c < d; )
            b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
          b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
          return btoa(b);
        }
    }
    return a;
  }
  function Nb(a, b) {
    const c = Array.prototype.slice.call(a.s),
      d = a.h;
    var e = c.length + (d ? -1 : 0);
    let f = 0;
    for (; f < e; f++) c[f] = b(c[f]);
    if (d) {
      e = c[f] = {};
      for (const g in d)
        Object.prototype.hasOwnProperty.call(d, g) && (e[g] = b(d[g]));
    }
    b = Kb(a.constructor, gb(c));
    a.B && (b.B = a.B.slice());
    return b;
  }
  function Ob(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a))
        a =
          e && 0 == a.length && r(a) & 1
            ? void 0
            : f && r(a) & 2
            ? a
            : Pb(a, b, c, void 0 !== d, e, f);
      else if (kb(a)) {
        const g = {};
        for (let h in a)
          Object.prototype.hasOwnProperty.call(a, h) &&
            (g[h] = Ob(a[h], b, c, d, e, f));
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Pb(a, b, c, d, e, f) {
    const g = d || c ? r(a) : 0;
    d = d ? !!(g & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (let h = 0; h < a.length; h++) a[h] = Ob(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Qb(a) {
    return a.ta === jb ? a.toJSON() : Mb(a);
  }
  function Rb(a, b, c = ib) {
    if (null != a) {
      if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        const d = r(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return bb(a, d | 18), a;
        a = Pb(a, Rb, d & 4 ? ib : c, !0, !1, !0);
        b = r(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.ta === jb && (fb(a.s) || ((a = Sb(a, !0)), $a(a.s, 18)));
      return a;
    }
  }
  function Sb(a, b) {
    const c = b || fb(a.s) ? ib : hb,
      d = !!(r(a.s) & 16);
    return Nb(a, (e) => Rb(e, d, c));
  }
  function zb(a) {
    if (!fb(a.s)) return a;
    const b = Sb(a, !1);
    b.A = a;
    return b;
  }
  var I = class {
    constructor(a) {
      null == a && (a = Jb);
      Jb = void 0;
      if (null == a) (a = []), bb(a, 48);
      else {
        if (!Array.isArray(a)) throw Error();
        var b = $a(a, 0) | 32;
        bb(a, b);
      }
      this.s = a;
      a: {
        b = this.s.length;
        a = b - 1;
        if (b && ((b = this.s[a]), kb(b))) {
          this.h = b;
          this.i = a - -1;
          break a;
        }
        this.i = Number.MAX_VALUE;
      }
    }
    toJSON() {
      if (lb) var a = Tb(this, this.s, !1);
      else (a = Pb(this.s, Qb, void 0, void 0, !1, !1)), (a = Tb(this, a, !0));
      return a;
    }
  };
  I.prototype.ta = jb;
  function Tb(a, b, c) {
    const d = a ? a.constructor.u : void 0;
    var e = a.i;
    if (d) {
      if (!c) {
        b = Array.prototype.slice.call(b);
        var f;
        if (b.length && kb((f = b[b.length - 1])))
          for (var g = 0; g < d.length; g++)
            if (d[g] >= e) {
              Object.assign((b[b.length - 1] = {}), f);
              break;
            }
      }
      e = b;
      c = !c;
      a = a.i;
      let k;
      for (f = 0; f < d.length; f++)
        if (((g = d[f]), g < a)) {
          g += -1;
          var h = e[g];
          null == h ? (e[g] = c ? mb : eb([])) : c && h !== mb && ab(h);
        } else {
          if (!k) {
            let l;
            e.length && kb((l = e[e.length - 1])) ? (k = l) : e.push((k = {}));
          }
          h = k[g];
          null == k[g] ? (k[g] = c ? mb : eb([])) : c && h !== mb && ab(h);
        }
    }
    return b;
  }
  function Ub(a, b) {
    const c = Vb;
    Vb = void 0;
    if (!b(a)) throw ((b = c ? c() + "\n" : ""), Error(b + String(a)));
  }
  const Wb = (a) => null !== a && void 0 !== a;
  let Vb = void 0;
  function Xb(a) {
    return (b) => {
      if (null == b || "" == b) b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        b = Kb(a, gb(b));
      }
      return b;
    };
  }
  var Yb = class extends I {};
  var Zb = class extends I {};
  Zb.u = [2, 3];
  function $b(a, b) {
    this.h = (a === ac && b) || "";
    this.g = bc;
  }
  var bc = {},
    ac = {};
  function cc(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function dc(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function fc(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function gc(a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  }
  function hc(a, b, c) {
    return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1;
  }
  function ic(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function jc(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function kc(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function lc(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  var mc;
  var nc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function oc(a, b) {
    a = pc.exec(qc(a).toString());
    var c = a[3] || "";
    return rc(a[1] + sc("?", a[2] || "", b) + sc("#", c));
  }
  function qc(a) {
    return a instanceof nc && a.constructor === nc
      ? a.g
      : "type_error:TrustedResourceUrl";
  }
  var pc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    tc = {};
  function rc(a) {
    if (void 0 === mc) {
      var b = null;
      var c = m.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: na,
            createScript: na,
            createScriptURL: na,
          });
        } catch (d) {
          m.console && m.console.error(d.message);
        }
        mc = b;
      } else mc = b;
    }
    a = (b = mc) ? b.createScriptURL(a) : a;
    return new nc(a, tc);
  }
  function sc(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c)
      if (Object.prototype.hasOwnProperty.call(c, d)) {
        var e = c[d];
        e = Array.isArray(e) ? e : [e];
        for (var f = 0; f < e.length; f++) {
          var g = e[f];
          null != g &&
            (b || (b = a),
            (b +=
              (b.length > a.length ? "&" : "") +
              encodeURIComponent(d) +
              "=" +
              encodeURIComponent(String(g))));
        }
      }
    return b;
  }
  function uc(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function vc(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
    }
    for (var e = 1; e < c.length; e++) {
      var f = c[e];
      if (!ca(f) || (da(f) && 0 < f.nodeType)) d(f);
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (da(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item;
              break a;
            }
            if ("function" === typeof f) {
              g = "function" == typeof f.item;
              break a;
            }
          }
          g = !1;
        }
        La(g ? q(f) : f, d);
      }
    }
  }
  function wc(a) {
    this.g = a || m.document || document;
  }
  wc.prototype.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  wc.prototype.createElement = function (a) {
    var b = this.g;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  };
  wc.prototype.createTextNode = function (a) {
    return this.g.createTextNode(String(a));
  };
  wc.prototype.append = function (a, b) {
    vc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
  };
  wc.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  function xc() {
    return ta && za
      ? za.mobile
      : !yc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"));
  }
  function yc() {
    return ta && za
      ? !za.mobile && (p("iPad") || p("Android") || p("Silk"))
      : p("iPad") || (p("Android") && !p("Mobile")) || p("Silk");
  }
  var zc = RegExp(
      "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
    ),
    Ac = /#|$/;
  function Bc(a, b) {
    var c = a.search(Ac);
    a: {
      var d = 0;
      for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (38 == f || 63 == f)
          if (((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (0 > d) return null;
    e = a.indexOf("&", d);
    if (0 > e || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
  } /* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
  function Cc(a) {
    try {
      var b;
      if ((b = !!a && null != a.location.href))
        a: {
          try {
            Ta(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
      return b;
    } catch {
      return !1;
    }
  }
  function Dc(a) {
    return Cc(a.top) ? a.top : null;
  }
  function Ec(a, b) {
    const c = Fc("SCRIPT", a);
    c.src = qc(b);
    (b = (b = (
      (c.ownerDocument && c.ownerDocument.defaultView) ||
      window
    ).document.querySelector?.("script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && c.setAttribute("nonce", b);
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null;
  }
  function Gc(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Hc(a, b) {
    if (!Ic() && !Jc()) {
      let c = Math.random();
      if (c < b) return (c = Kc()), a[Math.floor(c * a.length)];
    }
    return null;
  }
  function Kc() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function J(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Lc(a) {
    const b = a.length;
    if (0 == b) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return 0 < c ? c : 4294967296 + c;
  }
  var Jc = dc(
      () =>
        Oa(
          [
            "Google Web Preview",
            "Mediapartners-Google",
            "Google-Read-Aloud",
            "Google-Adwords",
          ],
          Mc
        ) || 1e-4 > Math.random()
    ),
    Ic = dc(() => -1 != ya().indexOf("MSIE"));
  const Mc = (a) => -1 != ya().indexOf(a);
  var Nc = /^([0-9.]+)px$/,
    Oc = /^(-?[0-9.]{1,30})$/;
  function Pc(a) {
    if (!Oc.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function K(a) {
    return (a = Nc.exec(a)) ? +a[1] : null;
  }
  var Qc = (a, b) => {
      for (let e = 0; 50 > e; ++e) {
        try {
          var c = !(!a.frames || !a.frames[b]);
        } catch {
          c = !1;
        }
        if (c) return a;
        a: {
          try {
            const f = a.parent;
            if (f && f != a) {
              var d = f;
              break a;
            }
          } catch {}
          d = null;
        }
        if (!(a = d)) break;
      }
      return null;
    },
    Rc = dc(() => (xc() ? 2 : yc() ? 1 : 0)),
    Sc = (a, b) => {
      J(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    };
  let Tc = [];
  const Uc = () => {
    const a = Tc;
    Tc = [];
    for (const b of a)
      try {
        b();
      } catch {}
  };
  var Vc = (a) => {
      if ("number" !== typeof a.goog_pvsid)
        try {
          var b = Object,
            c = b.defineProperty,
            d = Math.random;
          var e = Math.floor(d() * 2 ** 52);
          c.call(b, a, "goog_pvsid", { value: e, configurable: !1 });
        } catch (f) {}
      return Number(a.goog_pvsid) || -1;
    },
    Xc = (a) => {
      var b = Wc;
      "complete" === b.readyState || "interactive" === b.readyState
        ? (Tc.push(a),
          1 == Tc.length &&
            (window.Promise
              ? Promise.resolve().then(Uc)
              : window.setImmediate
              ? setImmediate(Uc)
              : setTimeout(Uc, 0)))
        : b.addEventListener("DOMContentLoaded", a);
    };
  function Fc(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  function Yc(a, b, c = null, d = !1, e = !1) {
    Zc(a, b, c, d, e);
  }
  function Zc(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = Fc("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        if (d) {
          h = a.google_image_requests;
          const k = Ka(h, f);
          0 <= k && Array.prototype.splice.call(h, k, 1);
        }
        hc(f, "load", g);
        hc(f, "error", g);
      };
      gc(f, "load", g);
      gc(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var ad = (a) => {
      let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      J(a, (c, d) => {
        if (c || 0 === c) b += `&${d}=${encodeURIComponent("" + c)}`;
      });
      $c(b);
    },
    $c = (a) => {
      var b = window;
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : Yc(b, a, void 0, !1, !1);
    };
  let bd = null;
  var Wc = document,
    L = window;
  let cd = null;
  var dd = (a, b = []) => {
    let c = !1;
    m.google_logging_queue || ((c = !0), (m.google_logging_queue = []));
    m.google_logging_queue.push([a, b]);
    if ((a = c)) {
      if (null == cd) {
        cd = !1;
        try {
          var d = Dc(m);
          d && -1 !== d.location.hash.indexOf("google_logging") && (cd = !0);
          m.localStorage.getItem("google_logging") && (cd = !0);
        } catch (e) {}
      }
      a = cd;
    }
    a &&
      ((d = m.document),
      (a = new $b(
        ac,
        "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"
      )),
      (a = rc(
        a instanceof $b && a.constructor === $b && a.g === bc
          ? a.h
          : "type_error:Const"
      )),
      Ec(d, a));
  };
  function ed(a = m) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function gd(a = ed()) {
    return a ? (Cc(a.master) ? a.master : null) : null;
  }
  function hd(a, ...b) {
    if (0 === b.length) return rc(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return rc(c);
  }
  var id = (a) => {
      a = gd(ed(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
      return a.google_unique_id;
    },
    jd = (a) => {
      a = a.google_unique_id;
      return "number" === typeof a ? a : 0;
    },
    kd = () => {
      if (!L) return !1;
      try {
        return !(!L.navigator.standalone && !L.top.navigator.standalone);
      } catch (a) {
        return !1;
      }
    },
    ld = (a) => {
      if (!a) return "";
      a = a.toLowerCase();
      "ca-" != a.substring(0, 3) && (a = "ca-" + a);
      return a;
    };
  class md {
    constructor(a, b) {
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = {};
    }
  }
  var nd = (a) => !!(a.error && a.meta && a.id);
  const od = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var pd = class {
      constructor(a, b) {
        this.g = a;
        this.h = b;
      }
    },
    qd = class {
      constructor(a, b, c) {
        this.url = a;
        this.m = b;
        this.Ka = !!c;
        this.depth = null;
      }
    };
  function rd(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function sd(a, b, c, d, e) {
    const f = [];
    J(a, function (g, h) {
      (g = td(g, b, c, d, e)) && f.push(h + "=" + g);
    });
    return f.join(b);
  }
  function td(a, b, c, d, e) {
    if (null == a) return "";
    b = b || "&";
    c = c || ",$";
    "string" == typeof c && (c = c.split(""));
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(td(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(sd(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function ud(a) {
    let b = 1;
    for (const c in a.h) b = c.length > b ? c.length : b;
    return 3997 - b - a.i.length - 1;
  }
  function vd(a, b) {
    let c = "https://pagead2.googlesyndication.com" + b,
      d = ud(a) - b.length;
    if (0 > d) return "";
    a.g.sort(function (f, g) {
      return f - g;
    });
    b = null;
    let e = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.h[g];
      for (let k = 0; k < h.length; k++) {
        if (!d) {
          b = null == b ? g : b;
          break;
        }
        let l = sd(h[k], a.i, ",$");
        if (l) {
          l = e + l;
          if (d >= l.length) {
            d -= l.length;
            c += l;
            e = a.i;
            break;
          }
          b = null == b ? g : b;
        }
      }
    }
    a = "";
    null != b && (a = e + "trn=" + b);
    return c + a;
  }
  class wd {
    constructor() {
      this.i = "&";
      this.h = {};
      this.j = 0;
      this.g = [];
    }
  }
  function xd(a, b) {
    0 <= b && 1 >= b && (a.g = b);
  }
  function yd(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof wd
          ? (f = c)
          : ((f = new wd()),
            J(c, (h, k) => {
              var l = f;
              const n = l.j++;
              h = rd(k, h);
              l.g.push(n);
              l.h[n] = h;
            }));
        const g = vd(f, "/pagead/gen_204?id=" + b + "&");
        g && Yc(m, g);
      } catch (f) {}
  }
  class zd {
    constructor() {
      this.g = Math.random();
    }
  }
  let Ad = null;
  function Bd() {
    if (null === Ad) {
      Ad = "";
      try {
        let a = "";
        try {
          a = m.top.location.hash;
        } catch (b) {
          a = m.location.hash;
        }
        if (a) {
          const b = a.match(/\bdeid=([\d,]+)/);
          Ad = b ? b[1] : "";
        }
      } catch (a) {}
    }
    return Ad;
  }
  function Cd() {
    const a = m.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Dd() {
    const a = m.performance;
    return a && a.now ? a.now() : null;
  }
  class Ed {
    constructor(a, b) {
      var c = Dd() || Cd();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.uniqueId = Math.random();
      this.taskId = this.slotId = void 0;
    }
  }
  const Fd = m.performance,
    Gd = !!(Fd && Fd.mark && Fd.measure && Fd.clearMarks),
    Hd = dc(() => {
      var a;
      if ((a = Gd)) (a = Bd()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
      return a;
    });
  function Id(a) {
    a &&
      Fd &&
      Hd() &&
      (Fd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Fd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Jd(a) {
    a.g = !1;
    a.h != a.i.google_js_reporting_queue &&
      (Hd() && La(a.h, Id), (a.h.length = 0));
  }
  class Kd {
    constructor(a) {
      this.h = [];
      this.i = a || m;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.h = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = Hd() || (null != b ? b : 1 > Math.random());
    }
    start(a, b) {
      if (!this.g) return null;
      a = new Ed(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      Fd && Hd() && Fd.mark(b);
      return a;
    }
    end(a) {
      if (this.g && "number" === typeof a.value) {
        a.duration = (Dd() || Cd()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        Fd && Hd() && Fd.mark(b);
        !this.g || 2048 < this.h.length || this.h.push(a);
      }
    }
  }
  function Ld(a) {
    let b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        let d;
        for (; a != d; )
          (d = a),
            (a = a.replace(
              RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
              "$1"
            ));
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (d) {
        b = c;
      }
    }
    return b;
  }
  class Md {
    constructor(a, b = null) {
      this.v = a;
      this.g = null;
      this.l = this.I;
      this.h = b;
      this.i = !1;
    }
    Ra(a) {
      this.l = a;
    }
    va(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    da(a, b, c) {
      let d, e;
      try {
        this.h && this.h.g
          ? ((e = this.h.start(a.toString(), 3)), (d = b()), this.h.end(e))
          : (d = b());
      } catch (f) {
        b = !0;
        try {
          Id(e), (b = this.l(a, new md(f, { message: Ld(f) }), void 0, c));
        } catch (g) {
          this.I(217, g);
        }
        if (b) window.console?.error?.(f);
        else throw f;
      }
      return d;
    }
    ma(a, b) {
      return (...c) => this.da(a, () => b.apply(void 0, c));
    }
    I(a, b, c, d, e) {
      e = e || "jserror";
      let f;
      try {
        const Ga = new wd();
        var g = Ga;
        g.g.push(1);
        g.h[1] = rd("context", a);
        nd(b) || (b = new md(b, { message: Ld(b) }));
        if (b.msg) {
          g = Ga;
          var h = b.msg.substring(0, 512);
          g.g.push(2);
          g.h[2] = rd("msg", h);
        }
        var k = b.meta || {};
        b = k;
        if (this.g)
          try {
            this.g(b);
          } catch (Sa) {}
        if (d)
          try {
            d(b);
          } catch (Sa) {}
        d = Ga;
        k = [k];
        d.g.push(3);
        d.h[3] = k;
        d = m;
        k = [];
        b = null;
        do {
          var l = d;
          if (Cc(l)) {
            var n = l.location.href;
            b = (l.document && l.document.referrer) || null;
          } else (n = b), (b = null);
          k.push(new qd(n || "", l));
          try {
            d = l.parent;
          } catch (Sa) {
            d = null;
          }
        } while (d && l != d);
        for (let Sa = 0, of = k.length - 1; Sa <= of; ++Sa)
          k[Sa].depth = of - Sa;
        l = m;
        if (
          l.location &&
          l.location.ancestorOrigins &&
          l.location.ancestorOrigins.length == k.length - 1
        )
          for (n = 1; n < k.length; ++n) {
            var u = k[n];
            u.url ||
              ((u.url = l.location.ancestorOrigins[n - 1] || ""), (u.Ka = !0));
          }
        var z = k;
        let ec = new qd(m.location.href, m, !1);
        l = null;
        const fd = z.length - 1;
        for (u = fd; 0 <= u; --u) {
          var x = z[u];
          !l && od.test(x.url) && (l = x);
          if (x.url && !x.Ka) {
            ec = x;
            break;
          }
        }
        x = null;
        const aj = z.length && z[fd].url;
        0 != ec.depth && aj && (x = z[fd]);
        f = new pd(ec, x);
        if (f.h) {
          z = Ga;
          var w = f.h.url || "";
          z.g.push(4);
          z.h[4] = rd("top", w);
        }
        var E = { url: f.g.url || "" };
        if (f.g.url) {
          var wa = f.g.url.match(zc),
            T = wa[1],
            xa = wa[3],
            qa = wa[4];
          w = "";
          T && (w += T + ":");
          xa && ((w += "//"), (w += xa), qa && (w += ":" + qa));
          var pf = w;
        } else pf = "";
        T = Ga;
        E = [E, { url: pf }];
        T.g.push(5);
        T.h[5] = E;
        yd(this.v, e, Ga, this.i, c);
      } catch (Ga) {
        try {
          yd(
            this.v,
            e,
            { context: "ecmserr", rctx: a, msg: Ld(Ga), url: f && f.g.url },
            this.i,
            c
          );
        } catch (ec) {}
      }
      return !0;
    }
    Z(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  }
  var Nd = (a) => "string" === typeof a,
    Od = (a) => void 0 === a;
  var Pd = class extends I {};
  Pd.u = [2, 8];
  var Qd = [3, 4, 5],
    Rd = [6, 7];
  function Sd(a) {
    return null != a ? !a : a;
  }
  function Td(a, b) {
    let c = !1;
    for (let d = 0; d < a.length; d++) {
      const e = a[d]();
      if (e === b) return e;
      null == e && (c = !0);
    }
    if (!c) return !b;
  }
  function Ud(a, b) {
    var c = F(a, Pd, 2);
    if (!c.length) return Vd(a, b);
    a = H(a, 1);
    if (1 === a) return Sd(Ud(c[0], b));
    c = Na(c, (d) => () => Ud(d, b));
    switch (a) {
      case 2:
        return Td(c, !1);
      case 3:
        return Td(c, !0);
    }
  }
  function Vd(a, b) {
    const c = wb(a, Qd);
    a: {
      switch (c) {
        case 3:
          var d = H(a, xb(a, Qd, 3));
          break a;
        case 4:
          d = H(a, xb(a, Qd, 4));
          break a;
        case 5:
          d = H(a, xb(a, Qd, 5));
          break a;
      }
      d = void 0;
    }
    if (d && (b = (b = b[c]) && b[d])) {
      try {
        var e = b(...tb(a, 8, pb));
      } catch (f) {
        return;
      }
      b = H(a, 1);
      if (4 === b) return !!e;
      if (5 === b) return null != e;
      if (12 === b) a = G(a, xb(a, Rd, 7));
      else
        a: {
          switch (c) {
            case 4:
              a = Hb(a, xb(a, Rd, 6));
              break a;
            case 5:
              a = G(a, xb(a, Rd, 7));
              break a;
          }
          a = void 0;
        }
      if (null != a) {
        if (6 === b) return e === a;
        if (9 === b) return null != e && 0 === ra(String(e), a);
        if (null != e)
          switch (b) {
            case 7:
              return e < a;
            case 8:
              return e > a;
            case 12:
              return Nd(a) && Nd(e) && new RegExp(a).test(e);
            case 10:
              return null != e && -1 === ra(String(e), a);
            case 11:
              return null != e && 1 === ra(String(e), a);
          }
      }
    }
  }
  function Wd(a, b) {
    return !a || !(!b || !Ud(a, b));
  }
  var Xd = class extends I {};
  Xd.u = [4];
  var Yd = class extends I {};
  var Zd = class extends I {},
    $d = Xb(Zd);
  Zd.u = [5];
  var ae = [1, 2, 3, 6, 7];
  var be = class extends I {
    constructor() {
      super();
    }
  };
  be.u = [2];
  function ce(a, b) {
    return v(a, 1, b);
  }
  var de = class extends I {
    constructor() {
      super();
    }
  };
  function ee(a, b) {
    return C(a, 1, b, 0);
  }
  function fe(a, b) {
    return C(a, 2, b, 0);
  }
  var ge = class extends I {
    constructor() {
      super();
    }
    getWidth() {
      return B(t(this, 1), 0);
    }
    getHeight() {
      return B(t(this, 2), 0);
    }
  };
  function he(a, b) {
    return Bb(a, 1, b);
  }
  function ie(a, b) {
    return Bb(a, 2, b);
  }
  function je(a, b) {
    Bb(a, 3, b);
  }
  function ke(a, b) {
    return C(a, 5, null == b ? b : !!b, !1);
  }
  var le = class extends I {
    constructor() {
      super();
    }
    getContentUrl() {
      return G(this, 4);
    }
  };
  var me = class extends I {
    constructor() {
      super();
    }
    getContentUrl() {
      return G(this, 1);
    }
  };
  function ne(a, b) {
    return Cb(a, 4, oe, b);
  }
  var pe = class extends I {
      constructor() {
        super();
      }
    },
    oe = [4, 5, 6, 8, 9, 10];
  function qe(a, b) {
    return C(a, 1, b, 0);
  }
  function re(a, b) {
    return C(a, 2, b, 0);
  }
  var se = class extends I {
    constructor() {
      super();
    }
  };
  var te = class extends I {
      constructor() {
        super();
      }
    },
    ue = [1, 2];
  function ve(a, b) {
    return Bb(a, 1, b);
  }
  function we(a, b) {
    return Db(a, 2, b);
  }
  function xe(a, b) {
    return ub(a, 4, b);
  }
  function ye(a, b) {
    return Db(a, 5, b);
  }
  function ze(a, b) {
    return C(a, 6, b, 0);
  }
  var Ae = class extends I {
    constructor() {
      super();
    }
  };
  Ae.u = [2, 4, 5];
  var Be = class extends I {
    constructor() {
      super();
    }
  };
  Be.u = [5];
  var Ce = [1, 2, 3, 4];
  var De = class extends I {
    constructor() {
      super();
    }
  };
  De.u = [2, 3];
  function Ee(a, b) {
    return Cb(a, 4, Fe, b);
  }
  var Ge = class extends I {
      constructor() {
        super();
      }
      getTagSessionCorrelator() {
        return B(t(this, 2), 0);
      }
    },
    Fe = [4, 5, 7];
  function He(a, ...b) {
    Ie(a, ...b.map((c) => ({ Ua: 4, message: c })));
  }
  function Je(a, ...b) {
    Ie(a, ...b.map((c) => ({ Ua: 7, message: c })));
  }
  function Ke(a) {
    return JSON.stringify([a.map((b) => [{ [b.Ua]: b.message.toJSON() }])]);
  }
  var Le = (a, b) => {
    globalThis
      .fetch(a, {
        method: "POST",
        body: b,
        keepalive: 65536 > b.length,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      })
      .catch(() => {});
  };
  function Me() {
    this.v = this.v;
    this.i = this.i;
  }
  Me.prototype.v = !1;
  function Ne(a) {
    a.v || ((a.v = !0), a.g());
  }
  function Oe(a, b) {
    a.v ? b() : (a.i || (a.i = []), a.i.push(b));
  }
  Me.prototype.g = function () {
    if (this.i) for (; this.i.length; ) this.i.shift()();
  };
  function Pe(a, b, c, d) {
    gc(b, c, d);
    Oe(a, () => hc(b, c, d));
  }
  function Qe(a, b) {
    1 !== a.h && ((a.h = 1), a.H && a.H(b));
  }
  function Re(a) {
    a.m.document.visibilityState
      ? Pe(a, a.m.document, "visibilitychange", (b) => {
          "hidden" === a.m.document.visibilityState && Qe(a, b);
          "visible" === a.m.document.visibilityState && (a.h = 0);
        })
      : "onpagehide" in a.m
      ? (Pe(a, a.m, "pagehide", (b) => {
          Qe(a, b);
        }),
        Pe(a, a.m, "pageshow", () => {
          a.h = 0;
        }))
      : Pe(a, a.m, "beforeunload", (b) => {
          Qe(a, b);
        });
  }
  function Se(a, b) {
    a.H || Re(a);
    a.H = b;
  }
  var Te = class extends Me {
    constructor(a) {
      super();
      this.m = a;
      this.h = 0;
      this.H = null;
    }
  };
  function Ie(a, ...b) {
    a.v && 65536 <= Ke(a.g.concat(b)).length && Ue(a);
    a.g.push(...b);
    a.g.length >= a.l && Ue(a);
    a.g.length &&
      null === a.h &&
      (a.h = setTimeout(() => {
        Ue(a);
      }, a.B));
  }
  function Ve(a, b, c, d) {
    a.i ||
      ((a.i = new Te(b)),
      Se(a.i, () => {
        for (const e of a.j) e();
        c();
      }));
    d && 1 !== a.i.h && a.j.push(d);
  }
  function Ue(a) {
    null !== a.h && (clearTimeout(a.h), (a.h = null));
    if (a.g.length) {
      var b = Ke(a.g);
      a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.g = [];
    }
  }
  function We(a, b, c) {
    Ve(
      a,
      b,
      () => {
        Ue(a);
      },
      c
    );
  }
  var Xe = class {
      constructor(a, b, c) {
        this.A = Le;
        this.B = a;
        this.l = b;
        this.v = c;
        this.j = [];
        this.g = [];
        this.h = null;
      }
    },
    Ye = class extends Xe {
      constructor(a = 1e3, b = 100, c = !1) {
        super(a, b, c && !0);
      }
    };
  function Ze(a, b) {
    b = C(b, 1, Date.now(), 0);
    var c = Vc(window);
    b = C(b, 2, c, 0);
    return C(b, 6, a.l, 0);
  }
  function $e(a, b, c, d, e, f) {
    if (a.i) {
      var g = re(qe(new se(), b), c);
      b = ze(we(ve(ye(xe(new Ae(), d), e), g), a.g.slice()), f);
      b = Ee(new Ge(), b);
      He(a.h, Ze(a, b));
      if (
        1 === f ||
        3 === f ||
        (4 === f && !a.g.some((h) => H(h, 1) === H(g, 1) && H(h, 2) === c))
      )
        a.g.push(g), 100 < a.g.length && a.g.shift();
    }
  }
  function af(a, b, c, d) {
    if (a.i && a.j) {
      var e = new De();
      b = Db(e, 2, b);
      c = Db(b, 3, c);
      d && C(c, 1, d, 0);
      d = new Ge();
      d = Cb(d, 7, Fe, c);
      He(a.h, Ze(a, d));
    }
  }
  var bf = class {
    constructor(a, b, c, d = new Ye(b)) {
      this.l = a;
      this.j = c;
      this.h = d;
      this.g = [];
      this.i = 0 < a && Kc() < 1 / a;
    }
  };
  var M = (a) => {
    var b = "sa";
    if (a.sa && a.hasOwnProperty(b)) return a.sa;
    b = new a();
    return (a.sa = b);
  };
  var cf = class {
    constructor() {
      this.G = { [3]: {}, [4]: {}, [5]: {} };
    }
  };
  var df = /^true$/.test("false");
  function ef(a, b) {
    switch (b) {
      case 1:
        return H(a, xb(a, ae, 1));
      case 2:
        return H(a, xb(a, ae, 2));
      case 3:
        return H(a, xb(a, ae, 3));
      case 6:
        return H(a, xb(a, ae, 6));
      default:
        return null;
    }
  }
  function ff(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return A(a, 1);
      case 7:
        return G(a, 3);
      case 2:
        return Hb(a, 2);
      case 3:
        return G(a, 3);
      case 6:
        return tb(a, 4, pb);
      default:
        return null;
    }
  }
  const gf = dc(() => {
    if (!df) return {};
    try {
      const a =
        window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
      if (a) return JSON.parse(a);
    } catch {}
    return {};
  });
  function hf(a, b, c, d = 0) {
    M(jf).i[d] = M(jf).i[d]?.add(b) ?? new Set().add(b);
    const e = gf();
    if (null != e[b]) return e[b];
    b = kf(d)[b];
    if (!b) return c;
    b = $d(JSON.stringify(b));
    b = lf(b);
    a = ff(b, a);
    return null != a ? a : c;
  }
  function lf(a) {
    const b = M(cf).G;
    if (b) {
      const c = Qa(F(a, Yd, 5), (d) => Wd(D(d, Pd, 1), b));
      if (c) return D(c, Xd, 2) ?? null;
    }
    return D(a, Xd, 4) ?? null;
  }
  class jf {
    constructor() {
      this.h = {};
      this.j = [];
      this.i = {};
      this.g = new Map();
    }
  }
  function mf(a, b = !1, c) {
    return !!hf(1, a, b, c);
  }
  function nf(a, b = 0, c) {
    a = Number(hf(2, a, b, c));
    return isNaN(a) ? b : a;
  }
  function qf(a, b = "", c) {
    a = hf(3, a, b, c);
    return "string" === typeof a ? a : b;
  }
  function rf(a, b = [], c) {
    a = hf(6, a, b, c);
    return Array.isArray(a) ? a : b;
  }
  function kf(a) {
    return M(jf).h[a] || (M(jf).h[a] = {});
  }
  function sf(a, b) {
    const c = kf(b);
    J(a, (d, e) => (c[e] = d));
  }
  function tf(a, b, c, d, e = !1) {
    const f = [],
      g = [];
    La(b, (h) => {
      const k = kf(h);
      La(a, (l) => {
        var n = wb(l, ae);
        const u = ef(l, n);
        if (u) {
          var z = M(jf).g.get(h)?.get(u)?.slice(0) ?? [];
          a: {
            const x = new Be();
            switch (n) {
              case 1:
                vb(x, 1, Ce, u);
                break;
              case 2:
                vb(x, 2, Ce, u);
                break;
              case 3:
                vb(x, 3, Ce, u);
                break;
              case 6:
                vb(x, 4, Ce, u);
                break;
              default:
                n = void 0;
                break a;
            }
            ub(x, 5, z);
            n = x;
          }
          if ((z = n)) z = !!M(jf).i[h]?.has(u);
          z && f.push(n);
          if ((z = n)) z = !!M(jf).g.get(h)?.has(u);
          z && g.push(n);
          e ||
            ((n = M(jf)),
            n.g.has(h) || n.g.set(h, new Map()),
            n.g.get(h).has(u) || n.g.get(h).set(u, []),
            d && n.g.get(h).get(u).push(d));
          k[u] = l.toJSON();
        }
      });
    });
    (f.length || g.length) && af(c, f, g, d ?? void 0);
  }
  function uf(a, b) {
    const c = kf(b);
    La(a, (d) => {
      var e = $d(JSON.stringify(d));
      const f = wb(e, ae);
      (e = ef(e, f)) && (c[e] || (c[e] = d));
    });
  }
  function vf() {
    return Na(Object.keys(M(jf).h), (a) => Number(a));
  }
  function wf(a) {
    Ra(M(jf).j, a) || sf(kf(4), a);
  }
  function N(a, b, c) {
    c.hasOwnProperty(a) || Object.defineProperty(c, String(a), { value: b });
  }
  function xf(a, b, c) {
    return b[a] || c;
  }
  function yf(a) {
    N(5, mf, a);
    N(6, nf, a);
    N(7, qf, a);
    N(8, rf, a);
    N(13, uf, a);
    N(15, wf, a);
  }
  function zf(a) {
    N(
      4,
      (b) => {
        M(cf).G = b;
      },
      a
    );
    N(
      9,
      (b, c) => {
        var d = M(cf);
        null == d.G[3][b] && (d.G[3][b] = c);
      },
      a
    );
    N(
      10,
      (b, c) => {
        var d = M(cf);
        null == d.G[4][b] && (d.G[4][b] = c);
      },
      a
    );
    N(
      11,
      (b, c) => {
        var d = M(cf);
        null == d.G[5][b] && (d.G[5][b] = c);
      },
      a
    );
    N(
      14,
      (b) => {
        var c = M(cf);
        for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d]);
      },
      a
    );
  }
  function Af(a) {
    a.hasOwnProperty("init-done") ||
      Object.defineProperty(a, "init-done", { value: !0 });
  }
  function Bf(a, b, c) {
    a.i = xf(1, b, () => {});
    a.j = (d, e) => xf(2, b, () => [])(d, c, e);
    a.g = () => xf(3, b, () => [])(c);
    a.h = (d) => {
      xf(16, b, () => {})(d, c);
    };
  }
  class Cf {
    i() {}
    h() {}
    j() {
      return [];
    }
    g() {
      return [];
    }
  }
  let Df, Ef;
  const Ff = new Kd(window);
  ((a) => {
    Df = a ?? new zd();
    "number" !== typeof window.google_srt &&
      (window.google_srt = Math.random());
    xd(Df, window.google_srt);
    Ef = new Md(Df, Ff);
    Ef.va(() => {});
    Ef.j(!0);
    "complete" == window.document.readyState
      ? window.google_measure_js_timing || Jd(Ff)
      : Ff.g &&
        gc(window, "load", () => {
          window.google_measure_js_timing || Jd(Ff);
        });
  })();
  var Gf = {
    Gb: 0,
    Fb: 1,
    Cb: 2,
    xb: 3,
    Db: 4,
    yb: 5,
    Eb: 6,
    Ab: 7,
    Bb: 8,
    wb: 9,
    zb: 10,
  };
  var Hf = { Ib: 0, Jb: 1, Hb: 2 };
  function If(a) {
    if (0 != a.g) throw Error("Already resolved/rejected.");
  }
  var Lf = class {
    constructor() {
      this.h = new Jf(this);
      this.g = 0;
    }
    resolve(a) {
      If(this);
      this.g = 1;
      this.j = a;
      Kf(this.h);
    }
  };
  function Kf(a) {
    switch (a.g.g) {
      case 0:
        break;
      case 1:
        a.h && a.h(a.g.j);
        break;
      case 2:
        a.i && a.i(a.g.i);
        break;
      default:
        throw Error("Unhandled deferred state.");
    }
  }
  var Jf = class {
    constructor(a) {
      this.g = a;
    }
    then(a, b) {
      if (this.h) throw Error("Then functions already set.");
      this.h = a;
      this.i = b;
      Kf(this);
    }
  };
  const Mf = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Mf(Ma(this.g, a));
    }
    apply(a) {
      return new Mf(a(this.g.slice(0)));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = this.g.slice(0);
      b.push(a);
      return new Mf(b);
    }
  };
  function Nf(a, b) {
    for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
    c.forEach(b, void 0);
  }
  const Pf = class {
    constructor() {
      this.g = {};
      this.h = {};
    }
    set(a, b) {
      const c = Of(a);
      this.g[c] = b;
      this.h[c] = a;
    }
    get(a, b) {
      a = Of(a);
      return void 0 !== this.g[a] ? this.g[a] : b;
    }
    clear() {
      this.g = {};
      this.h = {};
    }
  };
  function Of(a) {
    return a instanceof Object ? String(ea(a)) : a + "";
  }
  function Qf(a) {
    return new Rf({ value: a }, null);
  }
  function Sf(a) {
    return new Rf(null, a);
  }
  function Tf(a) {
    try {
      return Qf(a());
    } catch (b) {
      return Sf(b);
    }
  }
  function Uf(a) {
    return null != a.g ? a.g.value : null;
  }
  function Vf(a, b) {
    null != a.g && b(a.g.value);
    return a;
  }
  function Wf(a, b) {
    null != a.g || b(a.h);
    return a;
  }
  class Rf {
    constructor(a, b) {
      this.g = a;
      this.h = b;
    }
    map(a) {
      return null != this.g
        ? ((a = a(this.g.value)), a instanceof Rf ? a : Qf(a))
        : this;
    }
  }
  const Xf = class {
    constructor(a) {
      this.g = new Pf();
      if (a) for (var b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.g.set(a, !0);
    }
    contains(a) {
      return void 0 !== this.g.g[Of(a)];
    }
  };
  class Yf {
    constructor() {
      this.g = new Pf();
    }
    set(a, b) {
      let c = this.g.get(a);
      c || ((c = new Xf()), this.g.set(a, c));
      c.add(b);
    }
  }
  var O = class extends I {
    getId() {
      return t(this, 3);
    }
  };
  O.u = [4];
  class Zf {
    constructor({ Wa: a, Kb: b, Sb: c, nb: d }) {
      this.g = b;
      this.j = new Mf(a || []);
      this.i = d;
      this.h = c;
    }
  }
  const ag = (a) => {
      const b = [],
        c = a.j;
      c && c.g.length && b.push({ X: "a", ca: $f(c) });
      null != a.g && b.push({ X: "as", ca: a.g });
      null != a.h && b.push({ X: "i", ca: String(a.h) });
      null != a.i && b.push({ X: "rp", ca: String(a.i) });
      b.sort(function (d, e) {
        return d.X.localeCompare(e.X);
      });
      b.unshift({ X: "t", ca: "aa" });
      return b;
    },
    $f = (a) => {
      a = a.g.slice(0).map(bg);
      a = JSON.stringify(a);
      return Lc(a);
    },
    bg = (a) => {
      const b = {};
      null != t(a, 7) && (b.q = t(a, 7));
      null != Eb(a, 2) && (b.o = Eb(a, 2));
      null != Eb(a, 5) && (b.p = Eb(a, 5));
      return b;
    };
  var cg = class extends I {
    setLocation(a) {
      return v(this, 1, a);
    }
  };
  function dg(a) {
    const b = [].slice.call(arguments).filter(cc((e) => null === e));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.Ja || []);
      d = Object.assign(d, e.Qa);
    });
    return new eg(c, d);
  }
  function fg(a) {
    switch (a) {
      case 1:
        return new eg(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new eg(null, { google_ad_semantic_area: "h" });
      case 3:
        return new eg(null, { google_ad_semantic_area: "f" });
      case 4:
        return new eg(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function gg(a) {
    if (null == a) var b = null;
    else {
      var c = ag(a);
      a = [];
      for (b of c)
        (c = String(b.ca)),
          a.push(b.X + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
      b = new eg(null, { google_placement_id: a.join("~") });
    }
    return b;
  }
  class eg {
    constructor(a, b) {
      this.Ja = a;
      this.Qa = b;
    }
  }
  const hg = new eg(["google-auto-placed"], {
    google_reactive_ad_format: 40,
    google_tag_origin: "qs",
  });
  var ig = {
    overlays: 1,
    interstitials: 2,
    vignettes: 2,
    inserts: 3,
    immersives: 4,
    list_view: 5,
    full_page: 6,
    side_rails: 7,
  };
  function jg(a) {
    a.google_reactive_ads_global_state
      ? (null ==
          a.google_reactive_ads_global_state.sideRailProcessedFixedElements &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new Set()),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new Map()),
        null == a.google_reactive_ads_global_state.sideRailPlasParam &&
          (a.google_reactive_ads_global_state.sideRailPlasParam = new Map()))
      : (a.google_reactive_ads_global_state = new kg());
    return a.google_reactive_ads_global_state;
  }
  class kg {
    constructor() {
      this.wasPlaTagProcessed = !1;
      this.wasReactiveAdConfigReceived = {};
      this.adCount = {};
      this.wasReactiveAdVisible = {};
      this.stateForType = {};
      this.reactiveTypeEnabledInAsfe = {};
      this.wasReactiveTagRequestSent = !1;
      this.reactiveTypeDisabledByPublisher = {};
      this.tagSpecificState = {};
      this.messageValidationEnabled = !1;
      this.floatingAdsStacking = new lg();
      this.sideRailProcessedFixedElements = new Set();
      this.sideRailAvailableSpace = new Map();
      this.sideRailPlasParam = new Map();
    }
  }
  var lg = class {
    constructor() {
      this.maxZIndexRestrictions = {};
      this.nextRestrictionId = 0;
      this.maxZIndexListeners = [];
    }
  };
  var P = (a) => {
    a = a.document;
    let b = {};
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
    return b || {};
  };
  var mg = (a) => {
      a = a.getBoundingClientRect();
      return 0 < a.width && 0 < a.height;
    },
    ng = (a) => {
      let b = 0;
      a.forEach((c) => (b = Math.max(b, c.getBoundingClientRect().width)));
      return (c) => c.getBoundingClientRect().width > 0.5 * b;
    },
    og = (a) => {
      const b = P(a).clientHeight || 0;
      return (c) => c.getBoundingClientRect().height >= 0.75 * b;
    },
    pg = (a, b) =>
      a.getBoundingClientRect().top - b.getBoundingClientRect().top;
  var qg = class extends I {};
  var rg = class extends I {
    constructor() {
      super();
    }
  };
  var sg = class extends I {
    constructor() {
      super();
    }
  };
  sg.u = [1];
  var tg = class extends I {
    g() {
      return A(this, 2);
    }
  };
  var ug = class extends I {};
  var vg = class extends I {};
  var wg = class extends I {
    g() {
      return F(this, vg, 1);
    }
  };
  wg.u = [1];
  var Q = class extends I {};
  var xg = class extends I {};
  var yg = class extends I {};
  yg.u = [6, 7, 9, 10, 11];
  function zg(a) {
    var b = [];
    Nf(a.getElementsByTagName("p"), function (c) {
      100 <= Ag(c) && b.push(c);
    });
    return b;
  }
  function Ag(a) {
    if (3 == a.nodeType) return a.length;
    if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
    var b = 0;
    Nf(a.childNodes, function (c) {
      b += Ag(c);
    });
    return b;
  }
  function Bg(a) {
    return 0 == a.length || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function Cg(a, b) {
    if (null == a.g) return b;
    switch (a.g) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.g);
    }
  }
  const Dg = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.h = b;
      this.i = c;
      this.g = d;
    }
    query(a) {
      var b = [];
      try {
        b = a.querySelectorAll(this.j);
      } catch (f) {}
      if (!b.length) return [];
      a = q(b);
      a = Cg(this, a);
      "number" === typeof this.h &&
        ((b = this.h),
        0 > b && (b += a.length),
        (a = 0 <= b && b < a.length ? [a[b]] : []));
      if ("number" === typeof this.i) {
        b = [];
        for (var c = 0; c < a.length; c++) {
          var d = zg(a[c]),
            e = this.i;
          0 > e && (e += d.length);
          0 <= e && e < d.length && b.push(d[e]);
        }
        a = b;
      }
      return a;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.j,
        occurrenceIndex: this.h,
        paragraphIndex: this.i,
        ignoreMode: this.g,
      });
    }
  };
  function Eg(a) {
    if (1 != a.nodeType) var b = !1;
    else if ((b = "INS" == a.tagName))
      a: {
        b = ["adsbygoogle-placeholder"];
        a = a.className ? a.className.split(/\s+/) : [];
        for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
        for (d = 0; d < b.length; ++d)
          if (!c[b[d]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  var R = class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Fg = class {
      constructor(a, b = 0) {
        this.g = a;
        this.defaultValue = b;
      }
    };
  var Gg = new R(1082, !0),
    Hg = new Fg(1130, 100),
    Ig = new (class {
      constructor(a, b = "") {
        this.g = a;
        this.defaultValue = b;
      }
    })(14),
    Jg = new R(1247, !0),
    Kg = new R(316),
    Lg = new R(1207, !0),
    Mg = new R(313),
    Ng = new R(369),
    Og = new R(1230),
    Pg = new R(1229),
    Qg = new R(1231),
    Rg = new R(1171, !0),
    Sg = new R(217),
    Tg = new R(1258),
    Ug = new R(1255, !0),
    Vg = new R(529723966),
    Wg = new R(1120),
    Xg = new R(522099048),
    Yg = new R(529362570),
    Zg = new Fg(1114, 1),
    $g = new R(506914611),
    ah = new R(501545959, !0),
    bh = new R(1086, !0),
    ch = new Fg(1079, 5),
    dh = new (class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    })(1934, [
      "A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
      "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
      "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
    ]),
    eh = new R(203),
    fh = new R(84);
  var gh = class {
    constructor() {
      const a = {};
      this.h = (b, c) => (null != a[b] ? a[b] : c);
      this.g = (b, c) => (null != a[b] ? a[b] : c);
      this.i = (b, c) => (null != a[b] ? a[b] : c);
      this.j = (b, c) => (null != a[b] ? a[b] : c);
      this.l = () => {};
    }
  };
  function S(a) {
    return M(gh).h(a.g, a.defaultValue);
  }
  function hh() {
    return M(gh).i(Ig.g, Ig.defaultValue);
  }
  function ih(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          var d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && 8 == d.nodeType; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    Eg(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function jh(a, b) {
    const c = (e) => {
        e = kh(e);
        return null == e ? !1 : 0 < e;
      },
      d = (e) => {
        e = kh(e);
        return null == e ? !1 : 0 > e;
      };
    switch (b) {
      case 0:
        return {
          init: lh(a.previousSibling, c),
          ha: (e) => lh(e.previousSibling, c),
          la: 0,
        };
      case 2:
        return {
          init: lh(a.lastChild, c),
          ha: (e) => lh(e.previousSibling, c),
          la: 0,
        };
      case 3:
        return {
          init: lh(a.nextSibling, d),
          ha: (e) => lh(e.nextSibling, d),
          la: 3,
        };
      case 1:
        return {
          init: lh(a.firstChild, d),
          ha: (e) => lh(e.nextSibling, d),
          la: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function kh(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function lh(a, b) {
    return a && b(a) ? a : null;
  }
  var mh = { rectangle: 1, horizontal: 2, vertical: 4 };
  var nh = (a) => {
    if (a == a.top) return 0;
    for (; a && a != a.top && Cc(a); a = a.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  };
  var oh = (a, b) => {
    do {
      const c = Gc(a, b);
      if (c && "fixed" == c.position) return !1;
    } while ((a = a.parentElement));
    return !0;
  };
  function ph(a, b) {
    var c = ["width", "height"];
    for (let e = 0; e < c.length; e++) {
      const f = "google_ad_" + c[e];
      if (!b.hasOwnProperty(f)) {
        var d = K(a[c[e]]);
        d = null === d ? null : Math.round(d);
        null != d && (b[f] = d);
      }
    }
  }
  var qh = (a, b) =>
      !(
        (Oc.test(b.google_ad_width) || Nc.test(a.style.width)) &&
        (Oc.test(b.google_ad_height) || Nc.test(a.style.height))
      ),
    sh = (a, b) => ((a = rh(a, b)) ? a.y : 0),
    rh = (a, b) => {
      try {
        const c = b.document.documentElement.getBoundingClientRect(),
          d = a.getBoundingClientRect();
        return { x: d.left - c.left, y: d.top - c.top };
      } catch (c) {
        return null;
      }
    },
    th = (a) => {
      let b = 0;
      for (let c in mh) -1 != a.indexOf(c) && (b |= mh[c]);
      return b;
    },
    uh = (a, b, c, d, e) => {
      if (a !== a.top) return Dc(a) ? 3 : 16;
      if (!(488 > P(a).clientWidth)) return 4;
      if (!(a.innerHeight >= a.innerWidth)) return 5;
      const f = P(a).clientWidth;
      if (!f || (f - c) / f > d) a = 6;
      else {
        if ((c = "true" != e.google_full_width_responsive))
          a: {
            c = b.parentElement;
            for (b = P(a).clientWidth; c; c = c.parentElement)
              if (
                (d = Gc(c, a)) &&
                (e = K(d.width)) &&
                !(e >= b) &&
                "visible" != d.overflow
              ) {
                c = !0;
                break a;
              }
            c = !1;
          }
        a = c ? 7 : !0;
      }
      return a;
    },
    vh = (a, b, c, d) => {
      const e = uh(b, c, a, 0.3, d);
      !0 !== e
        ? (a = e)
        : "true" == d.google_full_width_responsive || oh(c, b)
        ? ((b = P(b).clientWidth),
          (a = b - a),
          (a = b && 0 <= a ? !0 : b ? (-10 > a ? 11 : 0 > a ? 14 : 12) : 10))
        : (a = 9);
      return a;
    },
    wh = (a, b, c) => {
      a = a.style;
      "rtl" == b ? (a.marginRight = c) : (a.marginLeft = c);
    };
  const xh = (a, b) => {
      if (3 == b.nodeType) return /\S/.test(b.data);
      if (1 == b.nodeType) {
        if (/^(script|style)$/i.test(b.nodeName)) return !1;
        let c;
        try {
          c = Gc(b, a);
        } catch (d) {}
        return (
          !c ||
          ("none" != c.display &&
            !(
              "absolute" == c.position &&
              ("hidden" == c.visibility || "collapse" == c.visibility)
            ))
        );
      }
      return !1;
    },
    yh = (a, b, c) => {
      a = rh(b, a);
      return "rtl" == c ? -a.x : a.x;
    };
  var zh = (a, b) => {
    var c;
    c = (c = b.parentElement) ? ((c = Gc(c, a)) ? c.direction : "") : "";
    if (c) {
      b.style.border =
        b.style.borderStyle =
        b.style.outline =
        b.style.outlineStyle =
        b.style.transition =
          "none";
      b.style.borderSpacing = b.style.padding = "0";
      wh(b, c, "0px");
      b.style.width = P(a).clientWidth + "px";
      if (0 !== yh(a, b, c)) {
        wh(b, c, "0px");
        var d = yh(a, b, c);
        wh(b, c, -1 * d + "px");
        a = yh(a, b, c);
        0 !== a && a !== d && wh(b, c, (d / (a - d)) * d + "px");
      }
      b.style.zIndex = 30;
    }
  };
  var Ah = class {
    constructor(a, b) {
      this.K = a;
      this.i = b;
    }
    height() {
      return this.i;
    }
    g(a) {
      return 300 < a && 300 < this.i ? this.K : Math.min(1200, Math.round(a));
    }
    h() {}
  };
  var Bh = (a, b, c, d = (e) => e) => {
      let e;
      return (
        (a.style && a.style[c] && d(a.style[c])) ||
        ((e = Gc(a, b)) && e[c] && d(e[c])) ||
        null
      );
    },
    Ch = (a) => (b) => b.K <= a,
    Fh = (a, b, c, d) => {
      const e = a && Dh(c, b),
        f = Eh(b, d);
      return (g) => !(e && g.height() >= f);
    },
    Gh = (a) => (b) => b.height() <= a,
    Dh = (a, b) => sh(a, b) < P(b).clientHeight - 100,
    Hh = (a, b) => {
      var c = Bh(b, a, "height", K);
      if (c) return c;
      var d = b.style.height;
      b.style.height = "inherit";
      c = Bh(b, a, "height", K);
      b.style.height = d;
      if (c) return c;
      c = Infinity;
      do
        (d = b.style && K(b.style.height)) && (c = Math.min(c, d)),
          (d = Bh(b, a, "maxHeight", K)) && (c = Math.min(c, d));
      while ((b = b.parentElement) && "HTML" != b.tagName);
      return c;
    };
  const Eh = (a, b) => {
    const c = 0 == jd(a);
    return b && c ? Math.max(250, (2 * P(a).clientHeight) / 3) : 250;
  };
  var Ih = {
    google_ad_channel: !0,
    google_ad_client: !0,
    google_ad_host: !0,
    google_ad_host_channel: !0,
    google_adtest: !0,
    google_tag_for_child_directed_treatment: !0,
    google_tag_for_under_age_of_consent: !0,
    google_tag_partner: !0,
    google_restrict_data_processing: !0,
    google_page_url: !0,
    google_debug_params: !0,
    google_shadow_mode: !0,
    google_adbreak_test: !0,
    google_ad_frequency_hint: !0,
    google_admob_interstitial_slot: !0,
    google_admob_rewarded_slot: !0,
    google_admob_ads_only: !0,
    google_max_ad_content_rating: !0,
    google_traffic_source: !0,
  };
  const Jh = RegExp("(^| )adsbygoogle($| )");
  function Kh(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c],
        e = uc(d.Tb);
      a[e] = d.value;
    }
  }
  class Lh {
    constructor() {
      var a = hd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
      this.g = null;
      this.i = !1;
      this.l = Math.random();
      this.h = this.I;
      this.v = a;
    }
    va(a) {
      this.g = a;
    }
    j(a) {
      this.i = a;
    }
    Ra(a) {
      this.h = a;
    }
    I(a, b, c = 0.01, d, e = "jserror") {
      if ((this.i ? this.l : Math.random()) > c) return !1;
      nd(b) || (b = new md(b, { context: a, id: e }));
      if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
      m.google_js_errors = m.google_js_errors || [];
      m.google_js_errors.push(b);
      m.error_rep_loaded || (Ec(m.document, this.v), (m.error_rep_loaded = !0));
      return !1;
    }
    da(a, b, c) {
      try {
        return b();
      } catch (d) {
        if (!this.h(a, d, 0.01, c, "jserror")) throw d;
      }
    }
    ma(a, b) {
      return (...c) => this.da(a, () => b.apply(void 0, c));
    }
    Z(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.I(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0);
      });
    }
  }
  const Mh = (a, b) => {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    2048 > b.length && b.push(a);
  };
  var Nh = (a, b, c, d, e = !1) => {
      const f = d || window,
        g = "undefined" !== typeof queueMicrotask;
      return function () {
        e &&
          g &&
          queueMicrotask(() => {
            f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
            f.google_rum_task_id_counter += 1;
          });
        const h = Dd();
        let k,
          l = 3;
        try {
          k = b.apply(this, arguments);
        } catch (n) {
          l = 13;
          if (!c) throw n;
          c(a, n);
        } finally {
          f.google_measure_js_timing &&
            h &&
            Mh(
              {
                label: a.toString(),
                value: h,
                duration: (Dd() || 0) - h,
                type: l,
                ...(e &&
                  g && {
                    taskId: (f.google_rum_task_id_counter =
                      f.google_rum_task_id_counter || 1),
                  }),
              },
              f
            );
        }
        return k;
      };
    },
    Oh = (a, b) =>
      Nh(
        a,
        b,
        (c, d) => {
          new Lh().I(c, d);
        },
        void 0,
        !1
      );
  function Ph(a, b, c) {
    return Nh(a, b, void 0, c, !0).apply();
  }
  function Qh(a) {
    if (!a) return null;
    var b = t(a, 7);
    if (t(a, 1) || a.getId() || 0 < tb(a, 4, pb).length) {
      b = tb(a, 4, pb);
      var c = t(a, 3),
        d = t(a, 1),
        e = "";
      d && (e += d);
      c && (e += "#" + Bg(c));
      if (b) for (c = 0; c < b.length; c++) e += "." + Bg(b[c]);
      a = (b = e) ? new Dg(b, Eb(a, 2), Eb(a, 5), Rh(t(a, 6))) : null;
    } else a = b ? new Dg(b, Eb(a, 2), Eb(a, 5), Rh(t(a, 6))) : null;
    return a;
  }
  var Sh = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function Rh(a) {
    return null == a ? a : Sh[a];
  }
  var Th = { 1: 0, 2: 1, 3: 2, 4: 3 };
  function Uh(a) {
    return (a.google_ama_state = a.google_ama_state || {});
  }
  function Vh(a) {
    a = Uh(a);
    return (a.optimization = a.optimization || {});
  }
  var Wh = Xb(class extends I {});
  var Xh = (a) => {
    switch (t(a, 8)) {
      case 1:
      case 2:
        if (null == a) var b = null;
        else
          (b = D(a, O, 1)),
            null == b
              ? (b = null)
              : ((a = t(a, 2)),
                (b = null == a ? null : new Zf({ Wa: [b], nb: a })));
        return null != b
          ? Qf(b)
          : Sf(Error("Missing dimension when creating placement id"));
      case 3:
        return Sf(Error("Missing dimension when creating placement id"));
      default:
        return Sf(Error("Invalid type: " + t(a, 8)));
    }
  };
  var Yh = class extends I {};
  var Zh = class extends I {};
  var $h = class extends I {
    g() {
      return sb(this, 23);
    }
  };
  var ai = class extends I {};
  var bi = class extends I {};
  var ci = class extends I {};
  var di = class extends I {};
  var ei = class extends I {};
  var fi = class extends I {
      getName() {
        return t(this, 4);
      }
    },
    gi = [1, 2, 3];
  var hi = class extends I {};
  hi.u = [2, 5, 6, 11];
  var ii = class extends I {};
  var ki = class extends I {
      g() {
        return Ib(this, ii, 2, ji);
      }
    },
    ji = [1, 2];
  var li = class extends I {
    g() {
      return D(this, ki, 3);
    }
  };
  li.u = [1, 4];
  var mi = class extends I {},
    ni = Xb(mi);
  mi.u = [1, 2, 5, 7];
  var oi = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({ anchor: d.anchor, position: d.position });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = { anchor: d.anchor.firstChild, position: 1 };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = { anchor: d.anchor.parentNode, position: 3 };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = { anchor: d.anchor.nextSibling, position: 1 })
        : (d = null);
    }
    return c;
  };
  function pi(a, b) {
    const c = new Yf(),
      d = new Xf();
    b.forEach((e) => {
      if (Ib(e, di, 1, gi)) {
        e = Ib(e, di, 1, gi);
        if (
          D(e, Q, 1) &&
          D(D(e, Q, 1), O, 1) &&
          D(e, Q, 2) &&
          D(D(e, Q, 2), O, 1)
        ) {
          const g = qi(a, D(D(e, Q, 1), O, 1)),
            h = qi(a, D(D(e, Q, 2), O, 1));
          if (g && h)
            for (var f of oi(
              { anchor: g, position: t(D(e, Q, 1), 2) },
              { anchor: h, position: t(D(e, Q, 2), 2) }
            ))
              c.set(ea(f.anchor), f.position);
        }
        D(e, Q, 3) &&
          D(D(e, Q, 3), O, 1) &&
          (f = qi(a, D(D(e, Q, 3), O, 1))) &&
          c.set(ea(f), t(D(e, Q, 3), 2));
      } else
        Ib(e, ei, 2, gi)
          ? ri(a, Ib(e, ei, 2, gi), c)
          : Ib(e, ci, 3, gi) && si(a, Ib(e, ci, 3, gi), d);
    });
    return new ti(c, d);
  }
  class ti {
    constructor(a, b) {
      this.h = a;
      this.g = b;
    }
  }
  const ri = (a, b, c) => {
      D(b, Q, 2)
        ? ((b = D(b, Q, 2)), (a = qi(a, D(b, O, 1))) && c.set(ea(a), t(b, 2)))
        : D(b, O, 1) &&
          (a = ui(a, D(b, O, 1))) &&
          a.forEach((d) => {
            d = ea(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
          });
    },
    si = (a, b, c) => {
      D(b, O, 1) &&
        (a = ui(a, D(b, O, 1))) &&
        a.forEach((d) => {
          c.add(ea(d));
        });
    },
    qi = (a, b) => ((a = ui(a, b)) && 0 < a.length ? a[0] : null),
    ui = (a, b) => ((b = Qh(b)) ? b.query(a) : null);
  function vi(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (wi(b)) return !0;
      if (a.g.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.g.add(d));
    return !1;
  }
  function xi(a) {
    a = yi(a);
    return a.has("all") || a.has("after");
  }
  function zi(a) {
    a = yi(a);
    return a.has("all") || a.has("before");
  }
  function yi(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }
  function wi(a) {
    const b = yi(a);
    return (
      a &&
      ("AUTO-ADS-EXCLUSION-AREA" === a.tagName ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var Ai = class {
    constructor() {
      this.g = new Set();
    }
  };
  function Bi(a, b) {
    if (!a) return !1;
    a = Gc(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return "left" == a || "right" == a;
  }
  function Ci(a) {
    for (a = a.previousSibling; a && 1 != a.nodeType; ) a = a.previousSibling;
    return a ? a : null;
  }
  function Di(a) {
    return !!a.nextSibling || (!!a.parentNode && Di(a.parentNode));
  }
  function Ei(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (-1 != a.indexOf(b)) return !0;
    b = Fi(b);
    return "go" != b && -1 != a.indexOf(b) ? !0 : !1;
  }
  function Fi(a) {
    let b = "";
    J(a.split("_"), (c) => {
      b += c.substr(0, 2);
    });
    return b;
  }
  function Gi(a = window) {
    a = a.googletag;
    return a?.apiReady ? a : void 0;
  }
  const Hi = (a) => {
    const b = Gi(a);
    return b
      ? Ma(
          Na(b.pubads().getSlots(), (c) =>
            a.document.getElementById(c.getSlotElementId())
          ),
          (c) => null != c
        )
      : null;
  };
  var Ii = (a) => {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  };
  function Ji(a, b) {
    if (a.j) return !0;
    a.j = !0;
    const c = F(a.h, yg, 1);
    a.i = 0;
    const d = Ki(a.B);
    if (Ei(a.g.location, "google_audio_sense")) {
      var e = new ug();
      e = v(e, 1, 1);
      var f = new tg();
      f = Gb(f, 2, !0);
      e = Bb(e, 2, f);
      f = new sg();
      var g = new qg();
      g = v(g, 1, 1);
      var h = r(f.s);
      if (h & 2) throw Error();
      h = Ab(f, qg, 1, 2, h);
      g = null != g ? g : new qg();
      h.push(g);
      fb(g.s) && cb(h, 8);
      g = new rg();
      g = Gb(g, 1, !0);
      f = Bb(f, 2, g);
      e = Bb(e, 3, f);
    } else e = D(a.h, ug, 27);
    if ((f = e))
      if (
        ((g = D(a.h, wg, 6)?.g() || []),
        (e = a.g),
        1 == H(f, 1) && D(f, tg, 2)?.g() && 0 != g.length)
      ) {
        var k;
        f = [];
        for (k of g)
          if ((g = Qh(D(k, O, 1) || null)))
            (g = g.query(e.document)), 0 < g.length && f.push(g[0]);
        f = f.filter(mg).filter(ng(f)).filter(og(e));
        f.sort(pg);
        if ((k = f[0] || null))
          (f = e.document.createElement("div")),
            (f.id = "google-auto-placed-read-aloud-player-reserved"),
            Sc(f, { width: "100%", height: "65px" }),
            k.insertBefore(f, k.firstChild),
            (Uh(e).audioSenseSpaceReserved = !0);
      }
    k = a.g;
    var l;
    try {
      var n = (l = k.localStorage.getItem("google_ama_settings"))
        ? Wh(l)
        : null;
    } catch (z) {
      n = null;
    }
    l = null !== n && A(n, 2, !1);
    n = Uh(k);
    l && ((n.eatf = !0), dd(7, [!0, 0, !1]));
    b: {
      f = { gb: !1, hb: !1 };
      h = q(k.document.querySelectorAll(".google-auto-placed"));
      const z = q(
          k.document.querySelectorAll(
            "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"
          )
        ),
        x = q(
          k.document.querySelectorAll(
            "ins.adsbygoogle[data-ad-format=autorelaxed]"
          )
        );
      g = (
        Hi(k) || q(k.document.querySelectorAll("div[id^=div-gpt-ad]"))
      ).concat(q(k.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
      const w = q(
          k.document.querySelectorAll(
            "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
          )
        ),
        E = q(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
        wa = q(k.document.querySelectorAll("div.googlepublisherpluginad")),
        T = q(k.document.querySelectorAll("html > ins.adsbygoogle"));
      e = [].concat(
        q(
          k.document.querySelectorAll(
            "iframe[id^=aswift_],iframe[id^=google_ads_frame]"
          )
        ),
        q(k.document.querySelectorAll("body ins.adsbygoogle"))
      );
      l = [];
      for (const [xa, qa] of [
        [f.Nb, h],
        [f.gb, z],
        [f.Qb, x],
        [f.Ob, g],
        [f.Rb, w],
        [f.Mb, E],
        [f.Pb, wa],
        [f.hb, T],
      ])
        (f = qa), !1 === xa ? (l = l.concat(f)) : (e = e.concat(f));
      e = Ii(e);
      l = Ii(l);
      e = e.slice(0);
      for (u of l)
        for (l = 0; l < e.length; l++)
          (u.contains(e[l]) || e[l].contains(u)) && e.splice(l, 1);
      var u = e;
      l = P(k).clientHeight;
      for (k = 0; k < u.length; k++)
        if (!(u[k].getBoundingClientRect().top > l)) {
          u = !0;
          break b;
        }
      u = !1;
    }
    u = u ? (n.eatfAbg = !0) : !1;
    if (u) return !0;
    u = new Xf([2]);
    for (n = 0; n < c.length; n++) {
      l = a;
      e = c[n];
      k = n;
      f = b;
      g = d;
      h = u;
      if (
        D(e, cg, 4) &&
        h.contains(t(D(e, cg, 4), 1)) &&
        1 === t(e, 8) &&
        Li(e, g)
      ) {
        l.i++;
        if ((f = Mi(l, e, f, g)))
          (g = Uh(l.g)),
            g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0),
            D(e, O, 1) &&
              null != Eb(D(e, O, 1), 5) &&
              (g.numPostPlacementsPlaced
                ? g.numPostPlacementsPlaced++
                : (g.numPostPlacementsPlaced = 1)),
            null == g.placed && (g.placed = []),
            g.numAutoAdsPlaced++,
            g.placed.push({ index: k, element: f.ga }),
            dd(7, [!1, l.i, !0]);
        l = f;
      } else l = null;
      if (l) return !0;
    }
    dd(7, [!1, a.i, !1]);
    return !1;
  }
  function Mi(a, b, c, d) {
    if (!Li(b, d) || 1 != t(b, 8)) return null;
    d = D(b, O, 1);
    if (!d) return null;
    d = Qh(d);
    if (!d) return null;
    d = d.query(a.g.document);
    if (0 == d.length) return null;
    d = d[0];
    var e = Th[t(b, 2)];
    e = void 0 === e ? null : e;
    var f;
    if (!(f = null == e)) {
      a: {
        f = a.g;
        switch (e) {
          case 0:
            f = Bi(Ci(d), f);
            break a;
          case 3:
            f = Bi(d, f);
            break a;
          case 2:
            var g = d.lastChild;
            f = Bi(g ? (1 == g.nodeType ? g : Ci(g)) : null, f);
            break a;
        }
        f = !1;
      }
      if ((c = !f && !(!c && 2 == e && !Di(d))))
        (c = 1 == e || 2 == e ? d : d.parentNode),
          (c = !(c && !Eg(c) && 0 >= c.offsetWidth));
      f = !c;
    }
    if (!(c = f)) {
      c = a.v;
      f = t(b, 2);
      g = ea(d);
      g = c.h.g.get(g);
      if (!(g = g ? g.contains(f) : !1))
        a: {
          if (c.g.contains(ea(d)))
            switch (f) {
              case 2:
              case 3:
                g = !0;
                break a;
              default:
                g = !1;
                break a;
            }
          for (f = d.parentElement; f; ) {
            if (c.g.contains(ea(f))) {
              g = !0;
              break a;
            }
            f = f.parentElement;
          }
          g = !1;
        }
      c = g;
    }
    if (!c) {
      c = a.A;
      f = t(b, 2);
      a: switch (f) {
        case 1:
          g = xi(d.previousElementSibling) || zi(d);
          break a;
        case 4:
          g = xi(d) || zi(d.nextElementSibling);
          break a;
        case 2:
          g = zi(d.firstElementChild);
          break a;
        case 3:
          g = xi(d.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + f);
      }
      c = g || vi(c, d, f);
    }
    if (c) return null;
    f = D(b, xg, 3);
    c = {};
    f && ((c.Ta = t(f, 1)), (c.Ia = t(f, 2)), (c.Za = !!sb(f, 3)));
    f = D(b, cg, 4) && t(D(b, cg, 4), 2) ? t(D(b, cg, 4), 2) : null;
    f = fg(f);
    g = null != Eb(b, 12) ? Eb(b, 12) : null;
    g = null == g ? null : new eg(null, { google_ml_rank: g });
    b = Ni(a, b);
    b = dg(a.l, f, g, b);
    f = a.g;
    a = a.F;
    var h = f.document,
      k = c.Za || !1;
    g = new wc(h).createElement("DIV");
    const l = g.style;
    l.width = "100%";
    l.height = "auto";
    l.clear = k ? "both" : "none";
    k = g.style;
    k.textAlign = "center";
    c.lb && Kh(k, c.lb);
    h = new wc(h).createElement("INS");
    k = h.style;
    k.display = "block";
    k.margin = "auto";
    k.backgroundColor = "transparent";
    c.Ta && (k.marginTop = c.Ta);
    c.Ia && (k.marginBottom = c.Ia);
    c.Va && Kh(k, c.Va);
    g.appendChild(h);
    c = { qa: g, ga: h };
    c.ga.setAttribute("data-ad-format", "auto");
    g = [];
    if ((h = b && b.Ja)) c.qa.className = h.join(" ");
    h = c.ga;
    h.className = "adsbygoogle";
    h.setAttribute("data-ad-client", a);
    g.length && h.setAttribute("data-ad-channel", g.join("+"));
    a: {
      try {
        var n = c.qa;
        if (S(Mg)) {
          {
            const E = jh(d, e);
            if (E.init) {
              var u = E.init;
              for (d = u; (d = E.ha(d)); ) u = d;
              var z = { anchor: u, position: E.la };
            } else z = { anchor: d, position: e };
          }
          n["google-ama-order-assurance"] = 0;
          ih(n, z.anchor, z.position);
        } else ih(n, d, e);
        b: {
          var x = c.ga;
          x.dataset.adsbygoogleStatus = "reserved";
          x.className += " adsbygoogle-noablate";
          n = { element: x };
          var w = b && b.Qa;
          if (x.hasAttribute("data-pub-vars")) {
            try {
              w = JSON.parse(x.getAttribute("data-pub-vars"));
            } catch (E) {
              break b;
            }
            x.removeAttribute("data-pub-vars");
          }
          w && (n.params = w);
          (f.adsbygoogle = f.adsbygoogle || []).push(n);
        }
      } catch (E) {
        (x = c.qa) &&
          x.parentNode &&
          ((w = x.parentNode),
          w.removeChild(x),
          Eg(w) &&
            (w.style.display = w.getAttribute("data-init-display") || "none"));
        x = !1;
        break a;
      }
      x = !0;
    }
    return x ? c : null;
  }
  function Ni(a, b) {
    return Uf(
      Wf(Xh(b).map(gg), (c) => {
        Uh(a.g).exception = c;
      })
    );
  }
  const Oi = class {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.F = b;
      this.h = c;
      this.l = e || null;
      this.v = (this.B = d) ? pi(a.document, F(d, fi, 5)) : pi(a.document, []);
      this.A = new Ai();
      this.i = 0;
      this.j = !1;
    }
  };
  function Ki(a) {
    const b = {};
    a &&
      rb(a, 6, 0, !1, fb(a.s)).forEach((c) => {
        b[c] = !0;
      });
    return b;
  }
  function Li(a, b) {
    return a && void 0 !== yb(a, cg, 4, !1) && b[t(D(a, cg, 4), 2)] ? !1 : !0;
  }
  var Pi = Xb(class extends I {});
  class U extends Error {
    constructor(a = "") {
      super();
      this.name = "TagError";
      this.message = a ? "adsbygoogle.push() error: " + a : "";
      Error.captureStackTrace
        ? Error.captureStackTrace(this, U)
        : (this.stack = Error().stack || "");
    }
  }
  let Qi, V;
  const Ri = new Kd(m);
  var Si = (a) => {
    null != a && (m.google_measure_js_timing = a);
    m.google_measure_js_timing || Jd(Ri);
  };
  ((a) => {
    Qi = a || new zd();
    "number" !== typeof m.google_srt && (m.google_srt = Math.random());
    xd(Qi, m.google_srt);
    V = new Md(Qi, Ri);
    V.j(!0);
    "complete" == m.document.readyState
      ? Si()
      : Ri.g &&
        gc(m, "load", () => {
          Si();
        });
  })();
  var Ti = (a, b, c) => V.da(a, b, c),
    Ui = (a, b, c) => {
      const d = M(Cf).g();
      !b.eid && d.length && (b.eid = d.toString());
      yd(Qi, a, b, !0, c);
    },
    Vi = (a, b) => {
      V.Z(a, b);
    },
    Wi = (a, b, c, d) => {
      let e;
      nd(b) ? (e = b.msg || Ld(b.error)) : (e = Ld(b));
      return 0 == e.indexOf("TagError")
        ? ((c = b instanceof md ? b.error : b),
          c.pbr || ((c.pbr = !0), V.I(a, b, 0.1, d, "puberror")),
          !1)
        : V.I(a, b, c, d);
    };
  function Xi(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? Tf(() => Pi(c)) : Qf(null);
  }
  function Yi() {
    if (Zi) return Zi;
    const a = gd() || window,
      b = a.google_persistent_state_async;
    return null != b &&
      "object" == typeof b &&
      null != b.S &&
      "object" == typeof b.S
      ? (Zi = b)
      : (a.google_persistent_state_async = Zi = new $i());
  }
  function bj(a) {
    return cj[a] || "google_ps_" + a;
  }
  function dj(a, b, c) {
    b = bj(b);
    a = a.S;
    const d = a[b];
    return void 0 === d ? ((a[b] = c()), a[b]) : d;
  }
  function ej(a, b, c) {
    return dj(a, b, () => c);
  }
  class $i {
    constructor() {
      this.S = {};
    }
  }
  var Zi = null;
  const cj = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  function fj(a) {
    this.g = a || { cookie: "" };
  }
  fj.prototype.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    "object" === typeof c &&
      ((h = c.Ub),
      (g = c.Vb || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.kb));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (0 > d
        ? ""
        : 0 == d
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + 1e3 * d).toUTCString()) +
      (g ? ";secure" : "") +
      (null != h ? ";samesite=" + h : "");
  };
  fj.prototype.get = function (a, b) {
    const c = a + "=",
      d = (this.g.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = pa(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  fj.prototype.isEmpty = function () {
    return !this.g.cookie;
  };
  fj.prototype.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [];
    var c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = pa(a[f])),
        (d = e.indexOf("=")),
        -1 == d
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (c = b.length - 1; 0 <= c; c--)
      (a = b[c]),
        this.get(a),
        this.set(a, "", { kb: 0, path: void 0, domain: void 0 });
  };
  function gj(a, b = window) {
    if (A(a, 5))
      try {
        return b.localStorage;
      } catch {}
    return null;
  }
  function hj(a) {
    var b = new ij();
    return Gb(b, 5, a);
  }
  var ij = class extends I {
    constructor() {
      super();
    }
  };
  const jj = (a) => {
    void 0 !== a.addtlConsent &&
      "string" !== typeof a.addtlConsent &&
      (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies &&
      "boolean" !== typeof a.gdprApplies &&
      (a.gdprApplies = void 0);
    return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
      (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
      ? 2
      : a.cmpStatus && "error" !== a.cmpStatus
      ? 0
      : 3;
  };
  function kj(a) {
    if (!1 === a.gdprApplies) return !0;
    void 0 === a.internalErrorState && (a.internalErrorState = jj(a));
    return "error" === a.cmpStatus || 0 !== a.internalErrorState
      ? a.internalBlockOnErrors
        ? (ad({ e: String(a.internalErrorState) }), !1)
        : !0
      : "loaded" !== a.cmpStatus ||
        ("tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus)
      ? !1
      : !0;
  }
  function lj(a) {
    if (a.h) return a.h;
    a.h = Qc(a.j, "__tcfapiLocator");
    return a.h;
  }
  function mj(a) {
    return "function" === typeof a.j.__tcfapi || null != lj(a);
  }
  function nj(a, b, c, d) {
    c || (c = () => {});
    if ("function" === typeof a.j.__tcfapi) (a = a.j.__tcfapi), a(b, 2, c, d);
    else if (lj(a)) {
      oj(a);
      const e = ++a.J;
      a.A[e] = c;
      a.h &&
        a.h.postMessage(
          { __tcfapiCall: { command: b, version: 2, callId: e, parameter: d } },
          "*"
        );
    } else c({}, !1);
  }
  function oj(a) {
    a.l ||
      ((a.l = (b) => {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
            .__tcfapiReturn;
          a.A[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }),
      gc(a.j, "message", a.l));
  }
  class pj extends Me {
    constructor(a) {
      var b = {};
      super();
      this.j = a;
      this.h = null;
      this.A = {};
      this.J = 0;
      this.F = b.Sa ?? 500;
      this.B = b.Lb ?? !1;
      this.l = null;
    }
    g() {
      this.A = {};
      this.l && (hc(this.j, "message", this.l), delete this.l);
      delete this.A;
      delete this.j;
      delete this.h;
      super.g();
    }
    addEventListener(a) {
      let b = { internalBlockOnErrors: this.B };
      const c = fc(() => a(b));
      let d = 0;
      -1 !== this.F &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.F));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = jj(b)),
            (b.internalBlockOnErrors = this.B),
            (g && 0 === b.internalErrorState) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        nj(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && nj(this, "removeEventListener", null, a.listenerId);
    }
  }
  var uj = ({ m: a, V: b, Sa: c, H: d, ia: e = !1, ja: f = !1 }) => {
      b = qj({ m: a, V: b, ia: e, ja: f });
      null != b.g || "tcunav" != b.h.message
        ? d(b)
        : rj(a, c)
            .then((g) => g.map(sj))
            .then((g) => g.map((h) => tj(a, h)))
            .then(d);
    },
    qj = ({ m: a, V: b, ia: c = !1, ja: d = !1 }) => {
      if (!vj({ m: a, V: b, ia: c, ja: d })) return tj(a, hj(!0));
      b = Yi();
      return (b = ej(b, 24)) ? tj(a, sj(b)) : Sf(Error("tcunav"));
    };
  function vj({ m: a, V: b, ia: c, ja: d }) {
    if (!(d = !d && mj(new pj(a)))) {
      if ((c = !c)) {
        if (b) {
          a = Xi(a);
          if (null != a.g)
            if ((a = a.g.value) && null != t(a, 1))
              b: switch (((a = t(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else V.I(806, a.h, void 0, void 0), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }
  function rj(a, b) {
    return Promise.race([wj(), xj(a, b)]);
  }
  function wj() {
    return new Promise((a) => {
      var b = Yi();
      a = { resolve: a };
      const c = ej(b, 25, []);
      c.push(a);
      b.S[bj(25)] = c;
    }).then(yj);
  }
  function xj(a, b) {
    return new Promise((c) => {
      a.setTimeout(c, b, Sf(Error("tcto")));
    });
  }
  function yj(a) {
    return a ? Qf(a) : Sf(Error("tcnull"));
  }
  function sj(a) {
    if (kj(a))
      if (
        !1 !== a.gdprApplies &&
        "tcunavailable" !== a.tcString &&
        void 0 !== a.gdprApplies &&
        "string" === typeof a.tcString &&
        a.tcString.length
      ) {
        b: {
          if (a.publisher && a.publisher.restrictions) {
            var b = a.publisher.restrictions["1"];
            if (void 0 !== b) {
              b = b["755"];
              break b;
            }
          }
          b = void 0;
        }
        0 === b
          ? (a = !1)
          : a.purpose && a.vendor
          ? ((b = a.vendor.consents),
            (b = !(!b || !b["755"])) &&
            a.purposeOneTreatment &&
            "CH" === a.publisherCC
              ? (a = !0)
              : (b && ((a = a.purpose.consents), (b = !(!a || !a["1"]))),
                (a = b)))
          : (a = !0);
      } else a = !0;
    else a = !1;
    return hj(a);
  }
  function tj(a, b) {
    return (a = gj(b, a)) ? Qf(a) : Sf(Error("unav"));
  }
  var zj = class extends I {};
  zj.u = [1, 2, 3];
  var Aj = class extends I {};
  Aj.u = [1, 2, 3];
  var Bj = class extends I {
    g() {
      return D(this, zj, 2);
    }
    j() {
      return D(this, Aj, 3);
    }
  };
  const Cj = class {
    constructor(a) {
      this.exception = a;
    }
  };
  function Dj(a, b) {
    try {
      var c = a.h,
        d = c.resolve,
        e = a.g;
      Uh(e.g);
      F(e.h, yg, 1);
      d.call(c, new Cj(b));
    } catch (f) {
      (a = a.h), (b = f), If(a), (a.g = 2), (a.i = b), Kf(a.h);
    }
  }
  var Ej = class {
    constructor(a, b, c) {
      this.i = a;
      this.g = b;
      this.h = c;
    }
    start() {
      this.j();
    }
    j() {
      try {
        switch (this.i.document.readyState) {
          case "complete":
          case "interactive":
            Ji(this.g, !0);
            Dj(this);
            break;
          default:
            Ji(this.g, !1)
              ? Dj(this)
              : this.i.setTimeout(ka(this.j, this), 100);
        }
      } catch (a) {
        Dj(this, a);
      }
    }
  };
  var Fj = "a".charCodeAt(),
    Gj = kc(Gf),
    Hj = kc(Hf);
  function W(a, b) {
    if (a.g + b > a.h.length)
      throw Error("Requested length " + b + " is past end of string.");
    const c = a.h.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function Ij(a) {
    return (
      String.fromCharCode(Fj + W(a, 6)) + String.fromCharCode(Fj + W(a, 6))
    );
  }
  function Jj(a) {
    let b = W(a, 12);
    const c = [];
    for (; b--; ) {
      var d = !0 === !!W(a, 1),
        e = W(a, 16);
      if (d) for (d = W(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function Kj(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++)
      if (W(a, 1)) {
        const f = e + 1;
        if (c && -1 === c.indexOf(f))
          throw Error(`ID: ${f} is outside of allowed values!`);
        d.push(f);
      }
    return d;
  }
  function Lj(a) {
    const b = W(a, 16);
    return !0 === !!W(a, 1)
      ? ((a = Jj(a)),
        a.forEach((c) => {
          if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }),
        a)
      : Kj(a, b);
  }
  class Mj {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.h = a;
      this.g = 0;
    }
  }
  var Oj = (a, b) => {
    try {
      var c = Wa(a.split(".")[0])
        .map((e) => e.toString(2).padStart(8, "0"))
        .join("");
      const d = new Mj(c);
      c = {};
      c.tcString = a;
      c.gdprApplies = !0;
      d.g += 78;
      c.cmpId = W(d, 12);
      c.cmpVersion = W(d, 12);
      d.g += 30;
      c.tcfPolicyVersion = W(d, 6);
      c.isServiceSpecific = !!W(d, 1);
      c.useNonStandardStacks = !!W(d, 1);
      c.specialFeatureOptins = Nj(Kj(d, 12, Hj), Hj);
      c.purpose = {
        consents: Nj(Kj(d, 24, Gj), Gj),
        legitimateInterests: Nj(Kj(d, 24, Gj), Gj),
      };
      c.purposeOneTreatment = !!W(d, 1);
      c.publisherCC = Ij(d);
      c.vendor = { consents: Nj(Lj(d), b), legitimateInterests: Nj(Lj(d), b) };
      return c;
    } catch (d) {
      return null;
    }
  };
  const Nj = (a, b) => {
    const c = {};
    if (Array.isArray(b) && 0 !== b.length)
      for (const d of b) c[d] = -1 !== a.indexOf(d);
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  var Pj = class extends I {};
  var Qj = class extends I {};
  var Rj = class extends I {},
    Sj = Xb(Rj);
  Rj.u = [7];
  function Tj(a) {
    return (a = Uj(a)) ? D(a, Qj, 4) : null;
  }
  function Uj(a) {
    if ((a = new fj(a).get("FCCDCF", "")))
      if (a.startsWith("%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    try {
      return b ? Sj(b) : null;
    } catch (c) {
      return null;
    }
  }
  kc(Gf).map((a) => Number(a));
  kc(Hf).map((a) => Number(a));
  function Vj(a) {
    a.__tcfapiPostMessageReady || Wj(new Xj(a));
  }
  function Wj(a) {
    a.h = (b) => {
      const c = "string" == typeof b.data;
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__tcfapiCall;
      !e ||
        ("ping" !== e.command &&
          "getTCData" !== e.command &&
          "addEventListener" !== e.command &&
          "removeEventListener" !== e.command) ||
        a.g.__tcfapi(
          e.command,
          e.version,
          (f, g) => {
            const h = {};
            h.__tcfapiReturn =
              "removeEventListener" === e.command
                ? { success: f, callId: e.callId }
                : { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              "function" === typeof b.source.postMessage &&
              b.source.postMessage(f, b.origin);
            return f;
          },
          e.parameter
        );
    };
    a.g.addEventListener("message", a.h);
    a.g.__tcfapiPostMessageReady = !0;
  }
  var Xj = class {
    constructor(a) {
      this.g = a;
      this.h = null;
    }
  };
  var Yj = (a, b) => {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = Fc("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  };
  function Zj() {
    var a = window,
      b = S(Rg);
    a.__uspapi ||
      a.frames.__uspapiLocator ||
      ((a = new ak(a)), bk(a), b && ck(a));
  }
  function bk(a) {
    !a.j ||
      a.g.__uspapi ||
      a.g.frames.__uspapiLocator ||
      ((a.g.__uspapiManager = "fc"),
      Yj(a.g, "__uspapiLocator"),
      ma("__uspapi", (...b) => dk(a, ...b)));
  }
  function ck(a) {
    !a.h ||
      a.g.__tcfapi ||
      a.g.frames.__tcfapiLocator ||
      ((a.g.__tcfapiManager = "fc"),
      Yj(a.g, "__tcfapiLocator"),
      (a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || []),
      ma("__tcfapi", (...b) => ek(a, ...b)),
      Vj(a.g));
  }
  function dk(a, b, c, d) {
    "function" === typeof d &&
      "getUSPData" === b &&
      d({ version: 1, uspString: a.j }, !0);
  }
  function ek(a, b, c, d, e = null) {
    if ("function" === typeof d)
      if (c && (2.1 < c || 1 >= c)) d(null, !1);
      else
        switch (((c = a.g.__tcfapiEventListeners), b)) {
          case "getTCData":
            !e || (Array.isArray(e) && e.every((f) => "number" === typeof f))
              ? d(fk(a, e, null), !0)
              : d(null, !1);
            break;
          case "ping":
            d({
              gdprApplies: !0,
              cmpLoaded: !0,
              cmpStatus: "loaded",
              displayStatus: "disabled",
              apiVersion: "2.1",
              cmpVersion: 2,
              cmpId: 300,
            });
            break;
          case "addEventListener":
            b = c.push(d);
            d(fk(a, null, b - 1), !0);
            break;
          case "removeEventListener":
            c[e] ? ((c[e] = null), d(!0)) : d(!1);
            break;
          case "getInAppTCData":
          case "getVendorList":
            d(null, !1);
        }
  }
  function fk(a, b, c) {
    if (!a.h) return null;
    b = Oj(a.h, b);
    b.addtlConsent = null != a.i ? a.i : void 0;
    b.cmpStatus = "loaded";
    b.eventStatus = "tcloaded";
    null != c && (b.listenerId = c);
    return b;
  }
  class ak {
    constructor(a) {
      this.g = a;
      var b;
      this.j = (b = (b = Uj(a.document)) ? D(b, Pj, 5) || null : null)
        ? t(b, 2)
        : null;
      this.h = (b = Tj(a.document)) && null != t(b, 1) ? t(b, 1) : null;
      this.i = (a = Tj(a.document)) && null != t(a, 2) ? t(a, 2) : null;
    }
  }
  const gk = { google_ad_channel: !0, google_ad_host: !0 };
  var hk = (a, b) => {
      a.location.href &&
        a.location.href.substring &&
        (b.url = a.location.href.substring(0, 200));
      Ui("ama", b, 0.01);
    },
    ik = (a) => {
      const b = {};
      J(gk, (c, d) => {
        d in a && (b[d] = a[d]);
      });
      return b;
    };
  const jk = (a) => {
      const b = /[a-zA-Z0-9._~-]/,
        c = /%[89a-zA-Z]./;
      return a.replace(/(%[a-zA-Z0-9]{2})/g, function (d) {
        if (!d.match(c)) {
          const e = decodeURIComponent(d);
          if (e.match(b)) return e;
        }
        return d.toUpperCase();
      });
    },
    kk = (a) => {
      let b = "";
      const c = /[/%?&=]/;
      for (let d = 0; d < a.length; ++d) {
        const e = a[d];
        b = e.match(c) ? b + e : b + encodeURIComponent(e);
      }
      return b;
    };
  var lk = (a) => {
      a = rb(a, 2, 0, !1, fb(a.s));
      if (!a) return !1;
      for (let b = 0; b < a.length; b++) if (1 == a[b]) return !0;
      return !1;
    },
    nk = (a, b) => {
      a = kk(jk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
      const c = Lc(a),
        d = mk(a);
      return (
        b.find((e) => {
          const f = void 0 !== yb(e, bi, 7, !1) ? Fb(D(e, bi, 7), 1) : Fb(e, 1);
          e = void 0 !== yb(e, bi, 7, !1) ? t(D(e, bi, 7), 2) : 2;
          if ("number" !== typeof f) return !1;
          switch (e) {
            case 1:
              return f == c;
            case 2:
              return d[f] || !1;
          }
          return !1;
        }) || null
      );
    };
  const mk = (a) => {
    const b = {};
    for (;;) {
      b[Lc(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  };
  var ok = (a) => {
    a = D(a, ai, 3);
    return !a || t(a, 1) <= Date.now() ? !1 : !0;
  };
  function pk(a) {
    if (S(Kg)) var b = null;
    else
      try {
        b = a.getItem("google_ama_config");
      } catch (d) {
        b = null;
      }
    try {
      var c = b ? ni(b) : null;
    } catch (d) {
      c = null;
    }
    return c;
  }
  var qk = class extends I {
    g() {
      return D(this, Bj, 2);
    }
    j() {
      return A(this, 3);
    }
  };
  var rk = class extends I {
    g() {
      return tb(this, 1, pb);
    }
    j() {
      return D(this, qk, 2);
    }
  };
  rk.u = [1];
  var sk = class extends I {
    getId() {
      return B(t(this, 1), 0);
    }
  };
  sk.u = [2];
  var tk = class extends I {};
  tk.u = [2];
  var uk = class extends I {};
  uk.u = [2];
  var vk = class extends I {
    g() {
      return B(t(this, 2), 0);
    }
    j() {
      return B(t(this, 4), 0);
    }
    l() {
      return A(this, 3);
    }
  };
  var wk = class extends I {};
  wk.u = [1, 4, 2, 3];
  var yk = class extends I {
    j() {
      return Ib(this, qk, 13, xk);
    }
    v() {
      return void 0 !== yb(this, qk, xb(this, xk, 13));
    }
    g() {
      return Ib(this, rk, 14, xk);
    }
    l() {
      return void 0 !== yb(this, rk, xb(this, xk, 14));
    }
  };
  yk.u = [19];
  var xk = [13, 14];
  let zk = void 0;
  function X(a) {
    a.google_ad_modifications || (a.google_ad_modifications = {});
    return a.google_ad_modifications;
  }
  function Ak(a) {
    a = X(a);
    const b = a.space_collapsing || "none";
    return a.remove_ads_by_default
      ? { Ha: !0, sb: b, oa: a.ablation_viewport_offset }
      : null;
  }
  function Bk(a, b) {
    a = X(a);
    a.had_ads_ablation = !0;
    a.remove_ads_by_default = !0;
    a.space_collapsing = "slot";
    a.ablation_viewport_offset = b;
  }
  function Ck(a) {
    X(L).allow_second_reactive_tag = a;
  }
  function Dk() {
    const a = X(window);
    a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
    return a.afg_slotcar_vars;
  }
  function Ek(a) {
    return X(a)?.head_tag_slot_vars?.google_ad_host ?? Fk(a);
  }
  function Fk(a) {
    return (
      a.document
        ?.querySelector('meta[name="google-adsense-platform-account"]')
        ?.getAttribute("content") ?? null
    );
  }
  const Gk = [2, 7, 1];
  var Jk = (a, b, c = "", d = null) =>
      1 === b && Hk(c, d)
        ? !0
        : Ik(a, c, (e) => Oa(F(e, Yb, 2), (f) => t(f, 1) === b)),
    Hk = (a, b) =>
      b
        ? b.v()
          ? A(b.j(), 1)
          : b.l() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a
          ? A(b.g().j(), 1)
          : !1
        : !1,
    Kk = (a, b) => {
      b = B(t(b, 18), 0);
      -1 !== b && (a.tmod = b);
    },
    Mk = (a) => {
      const b = Dc(L) || L;
      return Lk(b, a)
        ? !0
        : Ik(L, "", (c) => Oa(rb(c, 3, 0, !1, fb(c.s)), (d) => d === a));
    };
  function Lk(a, b) {
    a =
      (a =
        (a = a.location && a.location.hash) &&
        a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
    return !!a && Ra(a.split(","), b.toString());
  }
  function Ik(a, b, c) {
    a = Dc(a) || a;
    const d = Nk(a);
    b && (b = ld(String(b)));
    return jc(
      d,
      (e, f) =>
        Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
    );
  }
  function Nk(a) {
    a = Ok(a);
    const b = {};
    J(a, (c, d) => {
      try {
        const e = new Zb(c);
        b[d] = e;
      } catch (e) {}
    });
    return b;
  }
  var Ok = (a) =>
    S(Gg)
      ? (Ub(zk, Wb),
        (a = qj({ m: a, V: zk })),
        null != a.g ? Pk(a.g.value) : {})
      : Pk(a.localStorage);
  function Pk(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : ic(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              "string" === typeof e &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }
  function Qk(a) {
    Ui("atf_ad_settings_from_ppabg", { p_s: a }, 0.01);
  }
  const Rk = (a) =>
      !!a && (0 < F(a, yg, 1).length || (S(Lg) && 0 < F(a, vg, 3).length)),
    Sk = (a) => {
      Ui("overlay_settings_from_ppabg", { p_s: a }, 0.01);
    },
    Tk = (a) => {
      const b = F(a, hi, 2);
      return nk(m, b) ? [] : rb(a, 3, 0, !1, fb(a.s));
    },
    Uk = (a, b) => {
      if (Ek(m) && !A(b, 22)) return Gk;
      if (b?.v()) {
        a = b?.j()?.g()?.j();
        if (!a) return Gk;
        Sk(!1);
        return Tk(a);
      }
      if (b?.l()) {
        const c = b?.g()?.g();
        if (
          !c ||
          1 !== c.length ||
          !a ||
          c[0] !== a ||
          G(b, 17) != m.location.host
        )
          return Gk;
        a = b?.g()?.j()?.g()?.j();
        if (!a) return Gk;
        Sk(!0);
        return Tk(a);
      }
      return Gk;
    };
  var Vk = (a, b) => {
    const c = [];
    let d = [];
    if (S(Pg) || S(Og) || S(Qg)) d = Uk(a, b);
    S(Pg) && !d.includes(1) && c.push(1);
    S(Og) && !d.includes(2) && c.push(2);
    S(Qg) && !d.includes(7) && c.push(7);
    return c;
  };
  function Wk(a, b, c, d) {
    Xk(new Yk(a, b, c, d));
  }
  function Xk(a) {
    Wf(
      Vf(qj({ m: a.m, V: A(a.h, 6) }), (b) => {
        Zk(a, b, !0);
      }),
      () => {
        $k(a);
      }
    );
  }
  function Zk(a, b, c) {
    Wf(
      Vf(al(b), (d) => {
        bl("ok");
        a.g(d, { fromLocalStorage: !0 });
      }),
      () => {
        var d = a.m;
        try {
          b.removeItem("google_ama_config");
        } catch (e) {
          hk(d, { lserr: 1 });
        }
        c ? $k(a) : a.g(null, null);
      }
    );
  }
  function $k(a) {
    Wf(
      Vf(cl(a), (b) => {
        a.g(b, { fromPABGSettings: !0 });
      }),
      () => {
        dl(a);
      }
    );
  }
  function al(a) {
    return (a = (a = pk(a)) ? (ok(a) ? a : null) : null)
      ? Qf(a)
      : Sf(Error("invlocst"));
  }
  function cl(a) {
    if (Ek(a.m) && !A(a.h, 22)) return Sf(Error("invtag"));
    a: {
      var b = a.m;
      var c = a.i;
      a = a.h;
      if (a?.v()) (b = a?.j()?.g()?.g()), Rk(b) ? Qk(!1) : (b = null);
      else {
        if (a?.l()) {
          const d = a?.g()?.g(),
            e = a?.g()?.j()?.g()?.g();
          if (
            d &&
            1 === d.length &&
            d[0] === c &&
            Rk(e) &&
            G(a, 17) === b.location.host
          ) {
            Qk(!0);
            b = e;
            break a;
          }
        }
        b = null;
      }
    }
    b
      ? ((c = new mi()),
        (a = F(b, yg, 1)),
        (c = Db(c, 1, a)),
        (a = F(b, hi, 2)),
        (c = Db(c, 7, a)),
        S(Lg) &&
          0 < F(b, vg, 3).length &&
          ((a = new wg()), (b = F(b, vg, 3)), (b = Db(a, 1, b)), Bb(c, 6, b)),
        (b = Qf(c)))
      : (b = Sf(Error("invtag")));
    return b;
  }
  function dl(a) {
    uj({
      m: a.m,
      V: A(a.h, 6),
      Sa: 50,
      H: (b) => {
        el(a, b);
      },
    });
  }
  function el(a, b) {
    Wf(
      Vf(b, (c) => {
        Zk(a, c, !1);
      }),
      (c) => {
        bl(c.message);
        a.g(null, null);
      }
    );
  }
  function bl(a) {
    Ui(
      "abg::amalserr",
      { status: a, guarding: "true", timeout: 50, rate: 0.01 },
      0.01
    );
  }
  class Yk {
    constructor(a, b, c, d) {
      this.m = a;
      this.h = b;
      this.i = c;
      this.g = d;
    }
  }
  var hl = (a, b, c, d) => {
    try {
      const e = nk(a, F(c, hi, 7));
      if (e && lk(e)) {
        t(e, 4) && (d = dg(d, new eg(null, { google_package: t(e, 4) })));
        const f = new Oi(a, b, c, e, d);
        Ph(
          1e3,
          () => {
            var g = new Lf();
            new Ej(a, f, g).start();
            return g.h;
          },
          a
        ).then(la(fl, a), la(gl, a));
      }
    } catch (e) {
      hk(a, { atf: -1 });
    }
  };
  const fl = (a) => {
      hk(a, { atf: 1 });
    },
    gl = (a, b) => {
      (a.google_ama_state = a.google_ama_state || {}).exception = b;
      hk(a, { atf: 0 });
    };
  function il(a) {
    if (S(Wg)) {
      a.easpi = !0;
      if (S(Vg) || !S($g)) a.easpa = !0;
      a.asntp = 0;
      a.asntpv = 0;
      a.asntpl = 0;
      a.asntpm = 0;
      a.asntpc = 1e3;
      a.asna = 5;
      a.asnd = 5;
      a.asnp = 5;
      a.asns = 5;
      !S(Vg) && S($g)
        ? (a.asmat = M(gh).g(Zg.g, Zg.defaultValue))
        : ((a.aseb = !0), (a.ascet = !0), (a.asla = 0.4), (a.asaa = -1));
      a.asptt = -1;
      a.asro = S($g);
      S(ah) || (a.asrc = !1);
      a.asbu = !0;
      S(Xg) && (a.easppi = !0);
      S(Yg) && (a.asiscm = !0);
    }
  }
  Ua || Fa();
  class jl {
    constructor() {
      this.promise = new Promise((a) => {
        this.resolve = a;
      });
    }
  }
  function kl() {
    const { promise: a, resolve: b } = new jl();
    return { promise: a, resolve: b };
  }
  function ll(a = () => {}) {
    m.google_llp || (m.google_llp = {});
    const b = m.google_llp;
    let c = b[7];
    if (c) return c;
    c = kl();
    b[7] = c;
    a();
    return c;
  }
  function ml(a) {
    return ll(() => {
      Ec(m.document, a);
    }).promise;
  }
  var nl = (a) => {
    if (m.google_apltlad || m !== m.top || !a.google_ad_client) return null;
    m.google_apltlad = !0;
    const b = {
        enable_page_level_ads: { pltais: !0 },
        google_ad_client: a.google_ad_client,
      },
      c = b.enable_page_level_ads;
    J(a, (d, e) => {
      Ih[e] && "google_ad_client" !== e && (c[e] = d);
    });
    c.google_pgb_reactive = 7;
    il(c);
    if ("google_ad_section" in a || "google_ad_region" in a)
      c.google_ad_section = a.google_ad_section || a.google_ad_region;
    return b;
  };
  var ql = (a, b) => {
    X(L).ama_ran_on_page || Ph(1001, () => ol(new pl(a, b)), m);
  };
  function ol(a) {
    Wk(a.g, a.i, a.h.google_ad_client || "", (b, c) => {
      var d = a.g,
        e = a.h;
      X(L).ama_ran_on_page || (b && rl(d, e, b, c));
    });
  }
  class pl {
    constructor(a, b) {
      this.g = m;
      this.h = a;
      this.i = b;
    }
  }
  function rl(a, b, c, d) {
    d && (Uh(a).configSourceInAbg = d);
    void 0 !== yb(c, li, 24, !1) &&
      ((d = Vh(a)),
      (d.availableAbg = !0),
      (d.ablationFromStorage = !!D(c, li, 24)?.g()?.g()));
    if (
      da(b.enable_page_level_ads) &&
      7 === b.enable_page_level_ads.google_pgb_reactive
    ) {
      d = nk(a, F(c, hi, 7));
      if (!d || !sb(d, 8)) {
        Ui("amaait", { value: "true" });
        return;
      }
      Ui("amaait", { value: "false" });
    }
    X(L).ama_ran_on_page = !0;
    D(c, $h, 15)?.g() && (X(a).enable_overlap_observer = !0);
    var e = D(c, Zh, 13);
    e && 1 === t(e, 1)
      ? ((d = 0),
        (e = D(e, Yh, 6)) && Eb(e, 3) && (d = Eb(e, 3) || 0),
        Bk(a, d))
      : D(c, li, 24)?.g()?.g() && ((Vh(a).ablatingThisPageview = !0), Bk(a, 1));
    dd(3, [c.toJSON()]);
    const f = b.google_ad_client || "";
    b = ik(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
    const g = dg(hg, new eg(null, b));
    Ti(782, () => {
      hl(a, f, c, g);
    });
  }
  var sl = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function tl(a, b) {
    if (15 == b) {
      if (728 <= a) return 728;
      if (468 <= a) return 468;
    } else if (90 == b) {
      if (200 <= a) return 200;
      if (180 <= a) return 180;
      if (160 <= a) return 160;
      if (120 <= a) return 120;
    }
    return null;
  }
  function ul(a) {
    return (b) => !!(b.ea & a);
  }
  class Y extends Ah {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.ea = c;
      this.jb = d;
    }
    na() {
      return this.ea;
    }
    h(a, b, c) {
      b.google_ad_resize ||
        ((c.style.height = this.height() + "px"), (b.rpe = !0));
    }
  }
  const vl = {
      image_stacked: 1 / 1.91,
      image_sidebyside: 1 / 3.82,
      mobile_banner_image_sidebyside: 1 / 3.82,
      pub_control_image_stacked: 1 / 1.91,
      pub_control_image_sidebyside: 1 / 3.82,
      pub_control_image_card_stacked: 1 / 1.91,
      pub_control_image_card_sidebyside: 1 / 3.74,
      pub_control_text: 0,
      pub_control_text_card: 0,
    },
    wl = {
      image_stacked: 80,
      image_sidebyside: 0,
      mobile_banner_image_sidebyside: 0,
      pub_control_image_stacked: 80,
      pub_control_image_sidebyside: 0,
      pub_control_image_card_stacked: 85,
      pub_control_image_card_sidebyside: 0,
      pub_control_text: 80,
      pub_control_text_card: 80,
    },
    xl = {
      pub_control_image_stacked: 100,
      pub_control_image_sidebyside: 200,
      pub_control_image_card_stacked: 150,
      pub_control_image_card_sidebyside: 250,
      pub_control_text: 100,
      pub_control_text_card: 150,
    };
  function yl(a) {
    var b = 0;
    a.U && b++;
    a.L && b++;
    a.M && b++;
    if (3 > b)
      return {
        O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.U.split(",");
    const c = a.M.split(",");
    a = a.L.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (2 < b.length)
      return {
        O:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " +
          `you are providing ${
            b.length
          } parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`,
      };
    const d = [],
      e = [];
    for (let g = 0; g < b.length; g++) {
      var f = Number(c[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`,
        };
      d.push(f);
      f = Number(a[g]);
      if (Number.isNaN(f) || 0 === f)
        return {
          O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`,
        };
      e.push(f);
    }
    return { M: d, L: e, Ma: b };
  }
  function zl(a) {
    return 1200 <= a
      ? { width: 1200, height: 600 }
      : 850 <= a
      ? { width: a, height: Math.floor(0.5 * a) }
      : 550 <= a
      ? { width: a, height: Math.floor(0.6 * a) }
      : 468 <= a
      ? { width: a, height: Math.floor(0.7 * a) }
      : { width: a, height: Math.floor(3.44 * a) };
  }
  const Al = Ta("script");
  function Bl(a, b, c) {
    null != a.ea && (c.google_responsive_formats = a.ea);
    null != a.R && (c.google_safe_for_responsive_override = a.R);
    null != a.h &&
      (!0 === a.h
        ? (c.google_full_width_responsive_allowed = !0)
        : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = a.h)));
    null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
    var d = a.l || c.google_ad_width;
    null != d && (c.google_resizing_width = d);
    d = a.j || c.google_ad_height;
    null != d && (c.google_resizing_height = d);
    d = a.size().g(b);
    const e = a.size().height();
    if (!c.google_ad_resize) {
      c.google_ad_width = d;
      c.google_ad_height = e;
      var f = a.size();
      b = f.g(b) + "x" + f.height();
      c.google_ad_format = b;
      c.google_responsive_auto_format = a.v;
      null != a.g && (c.armr = a.g);
      c.google_ad_resizable = !0;
      c.google_override_format = 1;
      c.google_loader_features_used = 128;
      !0 === a.h && (c.gfwrnh = a.size().height() + "px");
    }
    null != a.F && (c.gfwroml = a.F);
    null != a.J && (c.gfwromr = a.J);
    null != a.j && (c.gfwroh = a.j);
    null != a.l && (c.gfwrow = a.l);
    null != a.P && (c.gfwroz = a.P);
    null != a.A && (c.gml = a.A);
    null != a.B && (c.gmr = a.B);
    null != a.T && (c.gzi = a.T);
    b = Dc(window) || window;
    Ei(b.location, "google_responsive_dummy_ad") &&
      (Ra([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 === a.g) &&
      2 !== a.g &&
      ((a = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{ key: "qid", value: "DUMMY_AD" }],
      })),
      (c.dash = `<${Al}>window.top.postMessage('${a}', '*'); 
          </${Al}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`));
  }
  class Cl {
    constructor(
      a,
      b,
      c = null,
      d = null,
      e = null,
      f = null,
      g = null,
      h = null,
      k = null,
      l = null,
      n = null,
      u = null
    ) {
      this.v = a;
      this.fa = b;
      this.ea = c;
      this.g = d;
      this.R = e;
      this.h = f;
      this.i = g;
      this.F = h;
      this.J = k;
      this.j = l;
      this.l = n;
      this.P = u;
      this.T = this.B = this.A = null;
    }
    size() {
      return this.fa;
    }
  }
  const Dl = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  var El = class extends Ah {
      g(a) {
        return Math.min(1200, Math.max(this.K, Math.round(a)));
      }
    },
    Hl = (a, b) => {
      Fl(a, b);
      if ("pedestal" == b.google_content_recommendation_ui_type)
        return new Cl(9, new El(a, Math.floor(a * b.google_phwr)));
      var c = xc();
      468 > a
        ? c
          ? ((c = a - 8 - 8),
            (c =
              Math.floor(c / 1.91 + 70) +
              Math.floor(
                11 *
                  (c * vl.mobile_banner_image_sidebyside +
                    wl.mobile_banner_image_sidebyside) +
                  96
              )),
            (a = {
              ba: a,
              aa: c,
              L: 1,
              M: 12,
              U: "mobile_banner_image_sidebyside",
            }))
          : ((a = zl(a)),
            (a = {
              ba: a.width,
              aa: a.height,
              L: 1,
              M: 13,
              U: "image_sidebyside",
            }))
        : ((a = zl(a)),
          (a = { ba: a.width, aa: a.height, L: 4, M: 2, U: "image_stacked" }));
      Gl(b, a);
      return new Cl(9, new El(a.ba, a.aa));
    },
    Il = (a, b) => {
      Fl(a, b);
      var c = yl({
        M: b.google_content_recommendation_rows_num,
        L: b.google_content_recommendation_columns_num,
        U: b.google_content_recommendation_ui_type,
      });
      if (c.O) a = { ba: 0, aa: 0, L: 0, M: 0, U: "image_stacked", O: c.O };
      else {
        var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
        var e = c.Ma[d];
        e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
        var f = xl[e];
        let g = c.L[d];
        for (; a / g < f && 1 < g; ) g--;
        f = g;
        d = c.M[d];
        c = Math.floor((((a - 8 * f - 8) / f) * vl[e] + wl[e]) * d + 8 * d + 8);
        a =
          1500 < a
            ? {
                width: 0,
                height: 0,
                qb: "Calculated slot width is too large: " + a,
              }
            : 1500 < c
            ? {
                width: 0,
                height: 0,
                qb: "Calculated slot height is too large: " + c,
              }
            : { width: a, height: c };
        a = { ba: a.width, aa: a.height, L: f, M: d, U: e };
      }
      if (a.O) throw new U(a.O);
      Gl(b, a);
      return new Cl(9, new El(a.ba, a.aa));
    };
  function Fl(a, b) {
    if (0 >= a)
      throw new U(
        "Invalid responsive width from Matched Content slot " +
          b.google_ad_slot +
          ": " +
          a +
          ". Please ensure to put this Matched Content slot into a non-zero width div container."
      );
  }
  function Gl(a, b) {
    a.google_content_recommendation_ui_type = b.U;
    a.google_content_recommendation_columns_num = b.L;
    a.google_content_recommendation_rows_num = b.M;
  }
  class Jl extends Ah {
    g() {
      return this.K;
    }
    h(a, b, c) {
      zh(a, c);
      b.google_ad_resize ||
        ((c.style.height = this.height() + "px"), (b.rpe = !0));
    }
  }
  const Kl = {
    "image-top": (a) => (600 >= a ? 284 + 0.414 * (a - 250) : 429),
    "image-middle": (a) =>
      500 >= a ? 196 - 0.13 * (a - 250) : 164 + 0.2 * (a - 500),
    "image-side": (a) =>
      500 >= a ? 205 - 0.28 * (a - 250) : 134 + 0.21 * (a - 500),
    "text-only": (a) => (500 >= a ? 187 - 0.228 * (a - 250) : 130),
    "in-article": (a) =>
      420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200,
  };
  var Ll = class extends Ah {
      g() {
        return Math.min(1200, this.K);
      }
    },
    Ml = (a, b, c, d, e) => {
      var f = e.google_ad_layout || "image-top";
      if ("in-article" == f) {
        var g = a;
        if ("false" == e.google_full_width_responsive) a = g;
        else if (((a = uh(b, c, g, 0.2, e)), !0 !== a))
          (e.gfwrnwer = a), (a = g);
        else if ((a = P(b).clientWidth))
          if (
            ((e.google_full_width_responsive_allowed = !0), c.parentElement)
          ) {
            b: {
              g = c;
              for (let h = 0; 100 > h && g.parentElement; ++h) {
                const k = g.parentElement.childNodes;
                for (let l = 0; l < k.length; ++l) {
                  const n = k[l];
                  if (n != g && xh(b, n)) break b;
                }
                g = g.parentElement;
                g.style.width = "100%";
                g.style.height = "auto";
              }
            }
            zh(b, c);
          } else a = g;
        else a = g;
      }
      if (250 > a)
        throw new U(
          "Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a
        );
      a = Math.min(1200, Math.floor(a));
      if (d && "in-article" != f) {
        f = Math.ceil(d);
        if (50 > f)
          throw new U(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        return new Cl(11, new Ah(a, f));
      }
      if ("in-article" != f && (d = e.google_ad_layout_key)) {
        f = "" + d;
        c = Math.pow(10, 3);
        if ((e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length))
          for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
        else b = null;
        if (!b) throw new U("Invalid data-ad-layout-key value: " + f);
        f = (a + -725) / 1e3;
        c = 0;
        d = 1;
        e = b.length;
        for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
        f = Math.ceil(1e3 * c - -725 + 10);
        if (isNaN(f)) throw new U("Invalid height: height=" + f);
        if (50 > f)
          throw new U(
            "Fluid responsive ads must be at least 50px tall: height=" + f
          );
        if (1200 < f)
          throw new U(
            "Fluid responsive ads must be at most 1200px tall: height=" + f
          );
        return new Cl(11, new Ah(a, f));
      }
      d = Kl[f];
      if (!d) throw new U("Invalid data-ad-layout value: " + f);
      c = Dh(c, b);
      b = P(b).clientWidth;
      b =
        "in-article" !== f || c || a !== b
          ? Math.ceil(d(a))
          : Math.ceil(1.25 * d(a));
      return new Cl(11, "in-article" == f ? new Ll(a, b) : new Ah(a, b));
    };
  var Nl = (a) => (b) => {
      for (let c = a.length - 1; 0 <= c; --c) if (!a[c](b)) return !1;
      return !0;
    },
    Pl = (a, b) => {
      var c = Ol.slice(0);
      const d = c.length;
      let e = null;
      for (let f = 0; f < d; ++f) {
        const g = c[f];
        if (a(g)) {
          if (!b || b(g)) return g;
          null === e && (e = g);
        }
      }
      return e;
    };
  var Z = [
      new Y(970, 90, 2),
      new Y(728, 90, 2),
      new Y(468, 60, 2),
      new Y(336, 280, 1),
      new Y(320, 100, 2),
      new Y(320, 50, 2),
      new Y(300, 600, 4),
      new Y(300, 250, 1),
      new Y(250, 250, 1),
      new Y(234, 60, 2),
      new Y(200, 200, 1),
      new Y(180, 150, 1),
      new Y(160, 600, 4),
      new Y(125, 125, 1),
      new Y(120, 600, 4),
      new Y(120, 240, 4),
      new Y(120, 120, 1, !0),
    ],
    Ol = [
      Z[6],
      Z[12],
      Z[3],
      Z[0],
      Z[7],
      Z[14],
      Z[1],
      Z[8],
      Z[10],
      Z[4],
      Z[15],
      Z[2],
      Z[11],
      Z[5],
      Z[13],
      Z[9],
      Z[16],
    ];
  var Rl = (a, b, c, d, e) => {
      "false" == e.google_full_width_responsive
        ? (c = { C: a, D: 1 })
        : ("autorelaxed" == b && e.google_full_width_responsive) ||
          Ql(b) ||
          e.google_ad_resize
        ? ((b = vh(a, c, d, e)),
          (c = !0 !== b ? { C: a, D: b } : { C: P(c).clientWidth || a, D: !0 }))
        : (c = { C: a, D: 2 });
      const { C: f, D: g } = c;
      return !0 !== g
        ? { C: a, D: g }
        : d.parentElement
        ? { C: f, D: g }
        : { C: a, D: g };
    },
    Ul = (a, b, c, d, e) => {
      const { C: f, D: g } = Ti(247, () => Rl(a, b, c, d, e));
      var h = !0 === g;
      const k = K(d.style.width),
        l = K(d.style.height),
        { Y: n, W: u, na: z, La: x } = Sl(f, b, c, d, e, h);
      h = Tl(b, z);
      var w;
      const E = (w = Bh(d, c, "marginLeft", K)) ? w + "px" : "",
        wa = (w = Bh(d, c, "marginRight", K)) ? w + "px" : "";
      w = Bh(d, c, "zIndex") || "";
      return new Cl(h, n, z, null, x, g, u, E, wa, l, k, w);
    },
    Ql = (a) =>
      "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
    Sl = (a, b, c, d, e, f) => {
      b =
        "auto" == b
          ? 0.25 >= a / Math.min(1200, P(c).clientWidth)
            ? 4
            : 3
          : th(b);
      let g;
      var h = !1;
      let k = !1;
      var l = 488 > P(c).clientWidth;
      if (l) {
        g = oh(d, c);
        var n = Dh(d, c);
        h = !n && g;
        k = n && g;
      }
      n = [Ch(a), ul(b)];
      n.push(Fh(l, c, d, k));
      null != e.google_max_responsive_height &&
        n.push(Gh(e.google_max_responsive_height));
      l = [(w) => !w.jb];
      if (h || k) (h = Hh(c, d)), l.push(Gh(h));
      let u = Pl(Nl(n), Nl(l));
      if (!u) throw new U("No slot size for availableWidth=" + a);
      const { Y: z, W: x } = Ti(248, () => {
        var w;
        a: if (f) {
          if (e.gfwrnh && (w = K(e.gfwrnh))) {
            w = { Y: new Jl(a, w), W: !0 };
            break a;
          }
          w = a / 1.2;
          var E = Math;
          var wa = E.min;
          if (
            e.google_resizing_allowed ||
            "true" == e.google_full_width_responsive
          )
            var T = Infinity;
          else {
            T = d;
            let qa = Infinity;
            do {
              var xa = Bh(T, c, "height", K);
              xa && (qa = Math.min(qa, xa));
              (xa = Bh(T, c, "maxHeight", K)) && (qa = Math.min(qa, xa));
            } while ((T = T.parentElement) && "HTML" != T.tagName);
            T = qa;
          }
          E = wa.call(E, w, T);
          if (E < 0.5 * w || 100 > E) E = w;
          w = { Y: new Jl(a, Math.floor(E)), W: E < w ? 102 : !0 };
        } else w = { Y: u, W: 100 };
        return w;
      });
      return "in-article" === e.google_ad_layout &&
        c.location &&
        "#hffwroe2etoq" == c.location.hash
        ? { Y: Vl(a, c, d, z, e), W: !1, na: b, La: g }
        : { Y: z, W: x, na: b, La: g };
    };
  const Tl = (a, b) => {
      if ("auto" == a) return 1;
      switch (b) {
        case 2:
          return 2;
        case 1:
          return 3;
        case 4:
          return 4;
        case 3:
          return 5;
        case 6:
          return 6;
        case 5:
          return 7;
        case 7:
          return 8;
      }
      throw Error("bad mask");
    },
    Vl = (a, b, c, d, e) => {
      const f = e.google_ad_height || Bh(c, b, "height", K);
      b = Ml(a, b, c, f, e).size();
      return b.K * b.height() > a * d.height() ? new Y(b.K, b.height(), 1) : d;
    };
  var Wl = (a, b, c, d, e) => {
    var f;
    (f = P(b).clientWidth)
      ? 488 > P(b).clientWidth
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            zh(b, c),
            (f = { C: f, D: !0 }))
          : (f = { C: a, D: 5 })
        : (f = { C: a, D: 4 })
      : (f = { C: a, D: 10 });
    const { C: g, D: h } = f;
    if (!0 !== h || a == g)
      return new Cl(12, new Ah(a, d), null, null, !0, h, 100);
    const { Y: k, W: l, na: n } = Sl(g, "auto", b, c, e, !0);
    return new Cl(1, k, n, 2, !0, h, l);
  };
  var Yl = (a, b) => {
      const c = b.google_ad_format;
      if ("autorelaxed" == c) {
        a: {
          if ("pedestal" != b.google_content_recommendation_ui_type)
            for (const d of Dl)
              if (null != b[d]) {
                a = !0;
                break a;
              }
          a = !1;
        }
        return a ? 9 : 5;
      }
      if (Ql(c)) return 1;
      if ("link" === c) return 4;
      if ("fluid" == c)
        return "in-article" !== b.google_ad_layout ||
          !a.location ||
          ("#hffwroe2etop" != a.location.hash &&
            "#hffwroe2etoq" != a.location.hash)
          ? 8
          : (Xl(b), 1);
      if (27 === b.google_reactive_ad_format) return Xl(b), 1;
    },
    $l = (a, b, c, d, e = !1) => {
      e =
        b.offsetWidth ||
        ((c.google_ad_resize || e) && Bh(b, d, "width", K)) ||
        c.google_ad_width ||
        0;
      4 === a && ((c.google_ad_format = "auto"), (a = 1));
      var f = (f = Zl(a, e, b, c, d)) ? f : Ul(e, c.google_ad_format, d, b, c);
      f.size().h(d, c, b);
      Bl(f, e, c);
      1 != a && ((a = f.size().height()), (b.style.height = a + "px"));
    };
  const Zl = (a, b, c, d, e) => {
      const f = d.google_ad_height || Bh(c, e, "height", K);
      switch (a) {
        case 5:
          const { C: g, D: h } = Ti(247, () =>
            Rl(b, d.google_ad_format, e, c, d)
          );
          !0 === h && b != g && zh(e, c);
          !0 === h
            ? (d.google_full_width_responsive_allowed = !0)
            : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = h));
          return Hl(g, d);
        case 9:
          return Il(b, d);
        case 8:
          return Ml(b, e, c, f, d);
        case 10:
          return Wl(b, e, c, f, d);
      }
    },
    Xl = (a) => {
      a.google_ad_format = "auto";
      a.armr = 3;
    };
  function am(a, b) {
    var c = Dc(b);
    if (c) {
      c = P(c).clientWidth;
      const d = Gc(a, b) || {},
        e = d.direction;
      if ("0px" === d.width && "none" !== d.cssFloat) return -1;
      if ("ltr" === e && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if ("rtl" === e && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  var bm = {
      google_ad_modifications: !0,
      google_analytics_domain_name: !0,
      google_analytics_uacct: !0,
      google_pause_ad_requests: !0,
      google_user_agent_client_hint: !0,
    },
    cm = (a) =>
      (a = a.innerText || a.innerHTML) &&
      (a = a
        .replace(/^\s+/, "")
        .split(/\r?\n/, 1)[0]
        .match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) &&
      RegExp("google_ad_client").test(a[1])
        ? a[1]
        : null,
    dm = (a) => {
      if ((a = a.innerText || a.innerHTML))
        if (
          ((a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";")),
          (a =
            a.match(/^\x3c!--+(.*?)(?:--+>)?$/) ||
            a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
            RegExp("google_ad_client").test(a[1]))
        )
          return a[1];
      return null;
    },
    em = (a) => {
      switch (a) {
        case "true":
          return !0;
        case "false":
          return !1;
        case "null":
          return null;
        case "undefined":
          break;
        default:
          try {
            const b = a.match(/^(?:'(.*)'|"(.*)")$/);
            if (b) return b[1] || b[2] || "";
            if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
              const c = parseFloat(a);
              return c === c ? c : void 0;
            }
          } catch (b) {}
      }
    };
  function fm(a) {
    if (a.google_ad_client) var b = String(a.google_ad_client);
    else {
      if (
        null ==
        (b =
          X(a).head_tag_slot_vars?.google_ad_client ??
          a.document
            .querySelector(".adsbygoogle[data-ad-client]")
            ?.getAttribute("data-ad-client"))
      ) {
        b: {
          b = a.document.getElementsByTagName("script");
          a = (a.navigator && a.navigator.userAgent) || "";
          a =
            RegExp(
              "appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
              "i"
            ).test(a) ||
            (/i(phone|pad|pod)/i.test(a) &&
              /applewebkit/i.test(a) &&
              !/version|safari/i.test(a) &&
              !kd())
              ? cm
              : dm;
          for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            if (
              !d.google_parsed_script_for_pub_code &&
              ((d.google_parsed_script_for_pub_code = !0), (d = a(d)))
            ) {
              b = d;
              break b;
            }
          }
          b = null;
        }
        if (b) {
          a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
          for (c = {}; (d = a.exec(b)); ) c[d[1]] = em(d[2]);
          b = c;
          b = b.google_ad_client ? b.google_ad_client : "";
        } else b = "";
      }
      b = b ?? "";
    }
    return b;
  }
  async function gm(a, b) {
    var c = 10;
    return 0 >= c
      ? Promise.reject()
      : b()
      ? Promise.resolve()
      : new Promise((d, e) => {
          const f = a.setInterval(() => {
            --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e());
          }, 200);
        });
  }
  function hm(a) {
    const b = a.g.pc;
    return null !== b && 0 !== b ? b : (a.g.pc = Vc(a.m));
  }
  function im(a) {
    const b = a.g.wpc;
    return null !== b && "" !== b ? b : (a.g.wpc = fm(a.m));
  }
  function jm(a, b) {
    var c = new pe();
    var d = hm(a);
    c = C(c, 1, d, 0);
    d = im(a);
    c = C(c, 2, d, "");
    c = C(c, 3, a.g.sd, 0);
    return C(c, 7, Math.round(b || a.m.performance.now()), 0);
  }
  async function km(a) {
    await gm(a.m, () => !(!hm(a) || !im(a)));
  }
  async function lm(a, b) {
    if (a.j && !a.g.le.includes(1)) {
      a.g.le.push(1);
      var c = a.m.performance.now();
      await km(a);
      b = he(
        ie(
          ke(new le(), b),
          fe(ee(new ge(), P(a.m).scrollWidth), P(a.m).scrollHeight)
        ),
        fe(ee(new ge(), P(a.m).clientWidth), P(a.m).clientHeight)
      );
      var d = new me();
      S(Jg)
        ? (C(b, 4, a.i, ""), C(d, 1, a.i, ""))
        : (C(b, 4, a.m?.document?.URL, ""), C(d, 1, a.m?.document?.URL, ""));
      var e = nh(a.m);
      0 !== e && je(b, ce(new de(), e));
      Je(a.h, ne(jm(a, c), b));
      We(a.h, a.m, () => {
        var f = a.h;
        var g = jm(a);
        g = Cb(g, 8, oe, d);
        Je(f, g);
      });
    }
  }
  async function mm(a, b, c) {
    if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
      a.g.lgdp.push(Number(b));
      var d = a.m.performance.now();
      await km(a);
      var e = a.h;
      a = jm(a, d);
      d = new be();
      b = C(d, 1, b, 0);
      c = ub(b, 2, c);
      c = Cb(a, 9, oe, c);
      Je(e, c);
    }
  }
  var nm = class {
    constructor(a) {
      this.m = gd() || window;
      this.h = a ?? new Ye(100, 100, !0);
      this.g = dj(Yi(), 33, () => {
        const b = M(gh).g(Hg.g, Hg.defaultValue);
        return {
          sd: b,
          ssp: 0 < b && Kc() < 1 / b,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
        };
      });
    }
    get j() {
      return this.g.ssp;
    }
    get i() {
      return this.g.cu;
    }
    set i(a) {
      this.g.cu = a;
    }
  };
  function om() {
    var a = window;
    return !S(Tg) ||
      ("on" !== m.google_adtest &&
        "on" !== m.google_adbreak_test &&
        !a.location.host.endsWith("h5games.usercontent.goog"))
      ? []
      : a.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((b) => Math.floor(Number(b)))
          .filter((b) => !isNaN(b) && 0 < b) || [];
  }
  function pm(a, b) {
    return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1;
  }
  function qm(a) {
    var b = L.document;
    if (b.currentScript) return pm(b.currentScript, a);
    for (const c of b.scripts) if (0 === pm(c, a)) return 0;
    return 1;
  }
  function rm(a, b) {
    return {
      [3]: {
        [55]: () => 0 === a,
        [23]: (c) => Jk(L, Number(c)),
        [24]: (c) => Mk(Number(c)),
        [61]: () => A(b, 6),
        [63]: () => A(b, 6) || ".google.ch" === G(b, 8),
      },
      [4]: {},
      [5]: { [6]: () => G(b, 15) },
    };
  }
  function sm(a = m) {
    return a.ggeac || (a.ggeac = {});
  }
  function tm() {
    var a = M(gh).j(dh.g, dh.defaultValue),
      b = L.document;
    if (a.length && b.head)
      for (const d of a)
        if ((a = d) && b.head) {
          var c = Fc("META");
          b.head.appendChild(c);
          c.httpEquiv = "origin-trial";
          c.content = a;
        }
  }
  function um(a, b = document) {
    return !!b.featurePolicy?.features().includes(a);
  }
  function vm(a, b = document) {
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  function wm(a, b) {
    try {
      const d = a.split(".");
      a = m;
      let e = 0,
        f;
      for (; null != a && e < d.length; e++)
        (f = a), (a = a[d[e]]), "function" === typeof a && (a = f[d[e]]());
      var c = a;
      if (typeof c === b) return c;
    } catch {}
  }
  var xm = {
    [3]: {
      [8]: (a) => {
        try {
          return null != ba(a);
        } catch {}
      },
      [9]: (a) => {
        try {
          var b = ba(a);
        } catch {
          return;
        }
        if ((a = "function" === typeof b))
          (b = b && b.toString && b.toString()),
            (a = "string" === typeof b && -1 != b.indexOf("[native code]"));
        return a;
      },
      [10]: () => window === window.top,
      [6]: (a) => Ra(M(Cf).g(), Number(a)),
      [27]: (a) => {
        a = wm(a, "boolean");
        return void 0 !== a ? a : void 0;
      },
      [60]: (a) => {
        try {
          return !!m.document.querySelector(a);
        } catch {}
      },
      [69]: (a) => um(a, m.document),
      [70]: (a) => vm(a, m.document),
    },
    [4]: {
      [3]: () => Rc(),
      [6]: (a) => {
        a = wm(a, "number");
        return void 0 !== a ? a : void 0;
      },
    },
    [5]: {
      [2]: () => window.location.href,
      [3]: () => {
        try {
          return window.top.location.hash;
        } catch {
          return "";
        }
      },
      [4]: (a) => {
        a = wm(a, "string");
        return void 0 !== a ? a : void 0;
      },
    },
  };
  const ym = [12, 13, 20];
  function zm(a, b, c, d) {
    const e = M(cf).G;
    if (!Wd(D(b, Pd, 3), e)) return null;
    var f = F(b, sk, 2),
      g = H(b, 6);
    if (g) {
      vb(d, 1, ue, g);
      f = e[4];
      switch (c) {
        case 2:
          var h = f[8];
          break;
        case 1:
          h = f[7];
      }
      c = void 0;
      if (h)
        try {
          (c = h(g)), C(d, 3, c, 0);
        } catch (k) {}
      return (b = Am(b, c)) ? Bm(a, [b], 1) : null;
    }
    if ((g = H(b, 10))) {
      vb(d, 2, ue, g);
      h = null;
      switch (c) {
        case 1:
          h = e[4][9];
          break;
        case 2:
          h = e[4][10];
          break;
        default:
          return null;
      }
      c = h ? h(String(g)) : void 0;
      if (void 0 === c && 1 === H(b, 11)) return null;
      void 0 !== c && C(d, 3, c, 0);
      return (b = Am(b, c)) ? Bm(a, [b], 1) : null;
    }
    d = e ? Ma(f, (k) => Wd(D(k, Pd, 3), e)) : f;
    if (!d.length) return null;
    c = d.length * B(Fb(b, 1), 0);
    return (b = H(b, 4)) ? Cm(a, b, c, d) : Bm(a, d, c / 1e3);
  }
  function Dm(a, b, c) {
    a.g[c] || (a.g[c] = []);
    a = a.g[c];
    Ra(a, b) || a.push(b);
  }
  function Em(a, b, c) {
    const d = [],
      e = Fm(a.i, b);
    var f;
    if ((f = 9 !== b)) a.j[b] ? (f = !0) : ((a.j[b] = !0), (f = !1));
    if (f) return $e(a.N, b, c, d, [], 4), d;
    if (!e.length) return $e(a.N, b, c, d, [], 3), d;
    const g = Ra(ym, b),
      h = [];
    La(e, (k) => {
      var l = new te();
      if ((k = zm(a, k, c, l)))
        0 !== wb(l, ue) && h.push(l),
          (l = k.getId()),
          d.push(l),
          Dm(a, l, g ? 4 : c),
          (k = F(k, Zd, 2)) && (g ? tf(k, vf(), a.N, l) : tf(k, [c], a.N, l));
    });
    $e(a.N, b, c, d, h, 1);
    return d;
  }
  function Gm(a, b) {
    a.i.push(
      ...Ma(
        Na(b, (c) => new uk(c)),
        (c) => !Ra(ym, H(c, 1))
      )
    );
  }
  function Bm(a, b, c) {
    const d = a.h,
      e = Pa(b, (f) => !!d[f.getId()]);
    return e ? e : a.ra ? null : Hc(b, c);
  }
  function Cm(a, b, c, d) {
    const e = null != a.ka[b] ? a.ka[b] : 1e3;
    if (0 >= e) return null;
    d = Bm(a, d, c / e);
    a.ka[b] = d ? 0 : e - c;
    return d;
  }
  function Hm(a, b) {
    N(
      1,
      (c) => {
        a.h[c] = !0;
      },
      b
    );
    N(2, (c, d) => Em(a, c, d), b);
    N(3, (c) => (a.g[c] || []).concat(a.g[4]), b);
    N(12, (c) => void Gm(a, c), b);
    N(16, (c, d) => void Dm(a, c, d), b);
  }
  var Im = class {
    constructor(a, b, c, { ra: d = !1, Wb: e = [], ka: f = {} } = {}) {
      this.N = c;
      this.i = a.slice();
      this.j = {};
      this.ra = d;
      this.ka = f;
      this.g = { [b]: [], [4]: [] };
      this.h = {};
      (a = Bd()) &&
        La(a.split(",") || [], (g) => {
          (g = Number(g)) && (this.h[g] = !0);
        });
      La(e, (g) => {
        this.h[g] = !0;
      });
    }
  };
  function Fm(a, b) {
    return ((a = Pa(a, (c) => H(c, 1) === b)) && F(a, tk, 2)) || [];
  }
  function Am(a, b) {
    var c = F(a, sk, 2),
      d = c.length,
      e = B(Fb(a, 8), 0);
    a = d * B(Fb(a, 1), 0) - 1;
    b = void 0 !== b ? b : Math.floor(1e3 * Kc());
    d = (b - e) % d;
    if (b < e || b - e - d >= a) return null;
    c = c[d];
    e = M(cf).G;
    return !c || (e && !Wd(D(c, Pd, 3), e)) ? null : c;
  }
  function Jm(a, b) {
    a.g = xf(14, b, () => {});
  }
  class Km {
    constructor() {
      this.g = () => {};
    }
  }
  function Lm(a) {
    M(Km).g(a);
  }
  function Mm({
    eb: a,
    G: b,
    ab: c,
    Xa: d = sm(),
    Ya: e = 0,
    N: f = new bf(
      D(a, vk, 5)?.g() ?? 0,
      D(a, vk, 5)?.j() ?? 0,
      D(a, vk, 5)?.l() ?? !1
    ),
  }) {
    d.hasOwnProperty("init-done")
      ? (xf(12, d, () => {})(Na(F(a, uk, 2), (g) => g.toJSON())),
        xf(13, d, () => {})(
          Na(F(a, Zd, 1), (g) => g.toJSON()),
          e
        ),
        b && xf(14, d, () => {})(b),
        Nm(e, d))
      : (Hm(new Im(F(a, uk, 2), e, f, c), d),
        yf(d),
        zf(d),
        Af(d),
        Nm(e, d),
        tf(F(a, Zd, 1), [e], f, void 0, !0),
        (df = df || !(!c || !c.ib)),
        Lm(xm),
        b && Lm(b));
  }
  function Nm(a, b = sm()) {
    Bf(M(Cf), b, a);
    Om(b, a);
    Jm(M(Km), b);
    M(gh).l();
  }
  function Om(a, b) {
    const c = M(gh);
    c.h = (d, e) => xf(5, a, () => !1)(d, e, b);
    c.g = (d, e) => xf(6, a, () => 0)(d, e, b);
    c.i = (d, e) => xf(7, a, () => "")(d, e, b);
    c.j = (d, e) => xf(8, a, () => [])(d, e, b);
    c.l = () => {
      xf(15, a, () => {})(b);
    };
  }
  function Pm(a = Kc()) {
    return (b) => Lc(`${a}.${b}`) % 1e3;
  }
  function Qm(a, b) {
    b = { [0]: Pm(Vc(b).toString()) };
    b = M(Cf).j(a, b);
    Ef.Z(1085, mm(M(nm), a, b));
  }
  var Rm = (a, b, c) => {
    var d = X(a);
    if (d.plle) Nm(1, sm(a));
    else {
      d.plle = !0;
      d = D(b, wk, 12);
      var e = A(b, 9);
      Mm({
        eb: d,
        G: rm(c, b),
        ab: { ra: e && !!a.google_disable_experiments, ib: e },
        Xa: sm(a),
        Ya: 1,
      });
      if ((c = G(b, 15))) (c = Number(c)), M(Cf).i(c);
      for (const f of tb(b, 19, ob)) (b = f), M(Cf).h(b);
      Qm(12, a);
      Qm(10, a);
      a = Dc(a) || a;
      Ei(a.location, "google_mc_lab") && M(Cf).h(44738307);
      Ei(a.location, "google_auto_storify_swipeable") && M(Cf).h(44773747);
      Ei(a.location, "google_auto_storify_scrollable") && M(Cf).h(44773746);
    }
  };
  function Sm({ pa: a, ua: b }) {
    return a || ("dev" === b ? "dev" : "");
  }
  function Tm(a) {
    V.va((b) => {
      b.shv = String(a);
      b.mjsv = Sm({ pa: "m202305160101", ua: a });
      const c = M(Cf).g();
      var d = X(m);
      d.eids || (d.eids = []);
      d = d.eids;
      const e = om();
      b.eid = c.concat(d).concat(e).join(",");
    });
  }
  function Um(a) {
    Tm(G(a, 2));
    a = A(a, 6);
    Ub(zk, Od);
    zk = a;
  }
  var Vm = "undefined" === typeof sttc ? void 0 : sttc;
  function Wm(a) {
    var b = V;
    try {
      return Ub(a, Nd), new yk(JSON.parse(a));
    } catch (c) {
      b.I(838, c instanceof Error ? c : Error(String(c)), void 0, (d) => {
        d.jspb = String(a);
      });
    }
    return new yk();
  }
  function Xm(a, b) {
    return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`;
  }
  function Ym(a, b) {
    return `&${a}=${b.toFixed(3)}`;
  }
  function Zm() {
    const a = new Set(),
      b = Gi();
    try {
      if (!b) return a;
      const c = b.pubads();
      for (const d of c.getSlots()) a.add(d.getSlotId().getDomId());
    } catch {}
    return a;
  }
  function $m(a) {
    a = a.id;
    return (
      null != a &&
      (Zm().has(a) ||
        a.startsWith("google_ads_iframe_") ||
        a.startsWith("aswift"))
    );
  }
  function an(a, b, c) {
    if (!a.sources) return !1;
    switch (bn(a)) {
      case 2:
        const d = cn(a);
        if (d) return c.some((f) => dn(d, f));
        break;
      case 1:
        const e = en(a);
        if (e) return b.some((f) => dn(e, f));
    }
    return !1;
  }
  function bn(a) {
    if (!a.sources) return 0;
    a = a.sources.filter((b) => b.previousRect && b.currentRect);
    if (1 <= a.length) {
      a = a[0];
      if (a.previousRect.top < a.currentRect.top) return 2;
      if (a.previousRect.top > a.currentRect.top) return 1;
    }
    return 0;
  }
  function en(a) {
    return fn(a, (b) => b.currentRect);
  }
  function cn(a) {
    return fn(a, (b) => b.previousRect);
  }
  function fn(a, b) {
    return a.sources.reduce((c, d) => {
      d = b(d);
      return c
        ? d && 0 !== d.width * d.height
          ? d.top < c.top
            ? d
            : c
          : c
        : d;
    }, null);
  }
  function dn(a, b) {
    const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    return 0 >= c || 0 >= a
      ? !1
      : 50 <= (100 * c * a) / ((b.right - b.left) * (b.bottom - b.top));
  }
  function gn() {
    const a = Array.from(document.getElementsByTagName("iframe")).filter($m),
      b = [...Zm()]
        .map((c) => document.getElementById(c))
        .filter((c) => null !== c);
    hn = window.scrollX;
    jn = window.scrollY;
    return (kn = [...a, ...b].map((c) => c.getBoundingClientRect()));
  }
  function ln() {
    var a = new mn();
    if (S(eh)) {
      var b = window;
      if (!b.google_plmetrics && window.PerformanceObserver) {
        b.google_plmetrics = !0;
        b = [
          "layout-shift",
          "largest-contentful-paint",
          "first-input",
          "longtask",
        ];
        for (const c of b) nn(a).observe({ type: c, buffered: !0 });
        on(a);
      }
    }
  }
  function nn(a) {
    a.N ||
      (a.N = new PerformanceObserver(
        Oh(640, (b) => {
          const c = hn !== window.scrollX || jn !== window.scrollY ? [] : kn,
            d = gn();
          for (const h of b.getEntries())
            switch (h.entryType) {
              case "layout-shift":
                b = a;
                var e = h,
                  f = c,
                  g = d;
                if (!e.hadRecentInput) {
                  b.B += Number(e.value);
                  Number(e.value) > b.J && (b.J = Number(e.value));
                  b.P += 1;
                  if ((f = an(e, f, g))) (b.l += e.value), b.Ba++;
                  if (5e3 < e.startTime - b.Aa || 1e3 < e.startTime - b.Da)
                    (b.Aa = e.startTime), (b.h = 0), (b.j = 0);
                  b.Da = e.startTime;
                  b.h += e.value;
                  f && (b.j += e.value);
                  b.h > b.T &&
                    ((b.T = b.h),
                    (b.Ga = b.j),
                    (b.Fa = e.startTime + e.duration));
                }
                break;
              case "largest-contentful-paint":
                b = h;
                a.za = Math.floor(b.renderTime || b.loadTime);
                a.ya = b.size;
                break;
              case "first-input":
                b = h;
                a.wa = Number((b.processingStart - b.startTime).toFixed(3));
                a.xa = !0;
                break;
              case "longtask":
                (b = Math.max(0, h.duration - 50)),
                  (a.A += b),
                  (a.F = Math.max(a.F, b)),
                  (a.R += 1);
            }
        })
      ));
    return a.N;
  }
  function on(a) {
    const b = Oh(641, () => {
        var d = document;
        2 ===
          (d.prerendering
            ? 3
            : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
                d.visibilityState ||
                  d.webkitVisibilityState ||
                  d.mozVisibilityState ||
                  ""
              ] || 0) && pn(a);
      }),
      c = Oh(641, () => void pn(a));
    document.addEventListener("visibilitychange", b);
    document.addEventListener("pagehide", c);
    a.fa = () => {
      document.removeEventListener("visibilitychange", b);
      document.removeEventListener("pagehide", c);
      nn(a).disconnect();
    };
  }
  function pn(a) {
    if (!a.Ca) {
      a.Ca = !0;
      nn(a).takeRecords();
      var b =
        "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
      window.LayoutShift &&
        ((b += Ym("cls", a.B)),
        (b += Ym("mls", a.J)),
        (b += Xm("nls", a.P)),
        window.LayoutShiftAttribution &&
          ((b += Ym("cas", a.l)),
          (b += Xm("nas", a.Ba)),
          (b += Ym("was", a.Ga))),
        (b += Ym("wls", a.T)),
        (b += Ym("tls", a.Fa)));
      window.LargestContentfulPaint &&
        ((b += Xm("lcp", a.za)), (b += Xm("lcps", a.ya)));
      window.PerformanceEventTiming && a.xa && (b += Xm("fid", a.wa));
      window.PerformanceLongTaskTiming &&
        ((b += Xm("cbt", a.A)), (b += Xm("mbt", a.F)), (b += Xm("nlt", a.R)));
      let d = 0;
      for (var c of document.getElementsByTagName("iframe")) $m(c) && d++;
      b += Xm("nif", d);
      b += Xm("ifi", jd(window));
      c = M(Cf).g();
      b += `&${"eid"}=${encodeURIComponent(c.join())}`;
      b += `&${"top"}=${m === m.top ? 1 : 0}`;
      b += a.Ea ? `&${"qqid"}=${encodeURIComponent(a.Ea)}` : Xm("pvsid", Vc(m));
      window.googletag && (b += "&gpt=1");
      window.fetch(b, {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors",
      });
      Ne(a);
    }
  }
  var mn = class extends Me {
      constructor() {
        super();
        this.j = this.h = this.P = this.J = this.B = 0;
        this.Da = this.Aa = Number.NEGATIVE_INFINITY;
        this.wa =
          this.ya =
          this.za =
          this.Ba =
          this.Ga =
          this.l =
          this.Fa =
          this.T =
            0;
        this.xa = !1;
        this.R = this.F = this.A = 0;
        this.N = null;
        this.Ca = !1;
        this.fa = () => {};
        const a = document.querySelector("[data-google-query-id]");
        this.Ea = a ? a.getAttribute("data-google-query-id") : null;
      }
      g() {
        super.g();
        this.fa();
      }
    },
    hn,
    jn,
    kn = [];
  var qn = class extends I {
    constructor() {
      super();
    }
    getVersion() {
      return G(this, 2);
    }
  };
  function rn(a, b) {
    return v(a, 2, b);
  }
  function sn(a, b) {
    return v(a, 3, b);
  }
  function tn(a, b) {
    return v(a, 4, b);
  }
  function un(a, b) {
    return v(a, 5, b);
  }
  function vn(a, b) {
    return v(a, 9, b);
  }
  function wn(a, b) {
    return Db(a, 10, b);
  }
  function xn(a, b) {
    return Gb(a, 11, b);
  }
  function yn(a, b) {
    return v(a, 1, b);
  }
  function zn(a, b) {
    return Gb(a, 7, b);
  }
  var An = class extends I {
    constructor() {
      super();
    }
  };
  An.u = [10, 6];
  const Bn =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Cn() {
    if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues)
      return null;
    const a = L.google_tag_data ?? (L.google_tag_data = {});
    if (a.uach_promise) return a.uach_promise;
    const b = L.navigator.userAgentData.getHighEntropyValues(Bn).then((c) => {
      a.uach ?? (a.uach = c);
      return c;
    });
    return (a.uach_promise = b);
  }
  function Dn(a) {
    return xn(
      wn(
        un(
          rn(
            yn(
              tn(
                zn(
                  vn(sn(new An(), a.architecture || ""), a.bitness || ""),
                  a.mobile || !1
                ),
                a.model || ""
              ),
              a.platform || ""
            ),
            a.platformVersion || ""
          ),
          a.uaFullVersion || ""
        ),
        a.fullVersionList?.map((b) => {
          var c = new qn();
          c = v(c, 1, b.brand);
          return v(c, 2, b.version);
        }) || []
      ),
      a.wow64 || !1
    );
  }
  function En() {
    return Cn()?.then((a) => Dn(a)) ?? null;
  }
  function Fn(a, b) {
    b.google_ad_host || ((a = Fk(a)) && (b.google_ad_host = a));
  }
  function Gn(a, b, c = "") {
    L.google_sa_impl &&
      !L.document.getElementById("google_shimpl") &&
      (delete L.google_sa_queue, delete L.google_sa_impl);
    L.google_sa_queue ||
      ((L.google_sa_queue = []),
      (L.google_process_slots = V.ma(215, () => Hn(L.google_sa_queue))),
      (a = In(c, a, b)),
      (Ec(L.document, a).id = "google_shimpl"));
  }
  function Hn(a) {
    const b = a.shift();
    "function" === typeof b && V.da(216, b);
    a.length &&
      m.setTimeout(
        V.ma(215, () => Hn(a)),
        0
      );
  }
  function Jn(a, b, c) {
    a.google_sa_queue = a.google_sa_queue || [];
    a.google_sa_impl ? c(b) : a.google_sa_queue.push(b);
  }
  function In(a, b, c) {
    b = A(c, 4) ? b.ob : b.pb;
    const d = {};
    a: {
      if (A(c, 4)) {
        if ((a = a || fm(L))) {
          a = { client: a, plah: L.location.host };
          break a;
        }
        throw Error("PublisherCodeNotFoundForAma");
      }
      a = {};
    }
    Kn(a, d);
    Kn(hh() ? { bust: hh() } : {}, d);
    return oc(b, d);
  }
  function Kn(a, b) {
    J(a, (c, d) => {
      void 0 === b[d] && (b[d] = c);
    });
  }
  function Ln(a) {
    a: {
      var b = [m.top];
      var c = [];
      let e = 0,
        f;
      for (; (f = b[e++]); ) {
        c.push(f);
        try {
          if (f.frames)
            for (let g = 0; g < f.frames.length && 1024 > b.length; ++g)
              b.push(f.frames[g]);
        } catch {}
      }
      b = c;
      for (c = 0; c < b.length; c++)
        try {
          var d = b[c].frames.google_esf;
          if (d) {
            bd = d;
            break a;
          }
        } catch (g) {}
      bd = null;
    }
    if (bd) return null;
    d = Fc("IFRAME");
    d.id = "google_esf";
    d.name = "google_esf";
    d.src = qc(a.vb).toString();
    d.style.display = "none";
    return d;
  }
  function Mn(a, b, c, d, e) {
    const f = e.fb;
    Nn(a, c, b);
    c = oa;
    const g = new Date().getTime();
    b.google_lrv = Sm({ pa: "m202305160101", ua: G(d, 2) });
    b.google_async_iframe_id = f;
    b.google_start_time = c;
    b.google_bpp = g > c ? g - c : 1;
    a.google_sv_map = a.google_sv_map || {};
    a.google_sv_map[f] = b;
    d = a.document.getElementById(f + "_host")
      ? (h) => h()
      : (h) => window.setTimeout(h, 0);
    Jn(
      a,
      () => {
        var { ub: h } = e;
        if (!h || !h.isConnected)
          if (
            ((h = a.document.getElementById(
              String(b.google_async_iframe_id) + "_host"
            )),
            null == h)
          )
            throw Error("no_div");
        (h = a.google_sa_impl({ pubWin: a, vars: b, innerInsElement: h })) &&
          V.Z(911, h);
      },
      d
    );
  }
  function Nn(a, b, c) {
    var d = c.google_ad_output,
      e = c.google_ad_format,
      f = c.google_ad_width || 0,
      g = c.google_ad_height || 0;
    e || ("html" !== d && null != d) || (e = f + "x" + g);
    d =
      !c.google_ad_slot ||
      c.google_override_format ||
      (!sl[c.google_ad_width + "x" + c.google_ad_height] &&
        "aa" === c.google_loader_used);
    e && d ? (e = e.toLowerCase()) : (e = "");
    c.google_ad_format = e;
    if (
      "number" !== typeof c.google_reactive_sra_index ||
      !c.google_ad_unit_key
    ) {
      e = [
        c.google_ad_slot,
        c.google_orig_ad_format || c.google_ad_format,
        c.google_ad_type,
        c.google_orig_ad_width || c.google_ad_width,
        c.google_orig_ad_height || c.google_ad_height,
      ];
      d = [];
      f = 0;
      for (g = b; g && 25 > f; g = g.parentNode, ++f)
        9 === g.nodeType ? d.push("") : d.push(g.id);
      (d = d.join()) && e.push(d);
      c.google_ad_unit_key = Lc(e.join(":")).toString();
      e = [];
      for (d = 0; b && 25 > d; ++d) {
        f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
        a: {
          if (b && b.nodeName && b.parentElement) {
            g = b.nodeName.toString().toLowerCase();
            const h = b.parentElement.childNodes;
            let k = 0;
            for (let l = 0; l < h.length; ++l) {
              const n = h[l];
              if (n.nodeName && n.nodeName.toString().toLowerCase() === g) {
                if (b === n) {
                  g = "." + k;
                  break a;
                }
                ++k;
              }
            }
          }
          g = "";
        }
        e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
        b = b.parentElement;
      }
      b = e.join() + ":";
      e = [];
      if (a)
        try {
          let h = a.parent;
          for (d = 0; h && h !== a && 25 > d; ++d) {
            const k = h.frames;
            for (f = 0; f < k.length; ++f)
              if (a === k[f]) {
                e.push(f);
                break;
              }
            a = h;
            h = a.parent;
          }
        } catch (h) {}
      c.google_ad_dom_fingerprint = Lc(b + e.join()).toString();
    }
  }
  function On() {
    var a = Dc(m);
    a &&
      ((a = jg(a)),
      a.tagSpecificState[1] ||
        (a.tagSpecificState[1] = { debugCard: null, debugCardRequested: !1 }));
  }
  function Pn() {
    const a = En();
    null != a &&
      a.then((b) => {
        a: {
          lb = !0;
          try {
            var c = JSON.stringify(b.toJSON(), Lb);
            break a;
          } finally {
            lb = !1;
          }
          c = void 0;
        }
        L.google_user_agent_client_hint = c;
      });
    tm();
  }
  function Qn(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      case "google_allow_expandable_ads":
        return /^true$/.test(b);
      default:
        return b;
    }
  }
  function Rn(a, b) {
    if (a.getAttribute("src")) {
      var c = a.getAttribute("src") || "",
        d = Bc(c, "client");
      d && (b.google_ad_client = Qn("google_ad_client", d));
      (c = Bc(c, "host")) && (b.google_ad_host = Qn("google_ad_host", c));
    }
    a = a.attributes;
    c = a.length;
    for (d = 0; d < c; d++) {
      var e = a[d];
      if (/data-/.test(e.name)) {
        const f = pa(
          e.name
            .replace("data-matched-content", "google_content_recommendation")
            .replace("data", "google")
            .replace(/-/g, "_")
        );
        b.hasOwnProperty(f) || ((e = Qn(f, e.value)), null !== e && (b[f] = e));
      }
    }
  }
  function Sn(a) {
    if ((a = ed(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return 12;
  }
  function Tn(a, b, c, d) {
    Rn(a, b);
    if (
      c.document &&
      c.document.body &&
      !Yl(c, b) &&
      !b.google_reactive_ad_format
    ) {
      var e = parseInt(a.style.width, 10),
        f = am(a, c);
      if (0 < f && e > f) {
        var g = parseInt(a.style.height, 10);
        e = !!sl[e + "x" + g];
        var h = f;
        if (e) {
          const k = tl(f, g);
          if (k) (h = k), (b.google_ad_format = k + "x" + g + "_0ads_al");
          else throw new U("No slot size for availableWidth=" + f);
        }
        b.google_ad_resize = !0;
        b.google_ad_width = h;
        e || ((b.google_ad_format = null), (b.google_override_format = !0));
        f = h;
        a.style.width = `${f}px`;
        g = Ul(f, "auto", c, a, b);
        h = f;
        g.size().h(c, b, a);
        Bl(g, h, b);
        g = g.size();
        b.google_responsive_formats = null;
        g.K > f &&
          !e &&
          ((b.google_ad_width = g.K), (a.style.width = `${g.K}px`));
      }
    }
    (e = a.offsetWidth) || (e = Bh(a, c, "width", K));
    e = e || b.google_ad_width || 0;
    if (488 > P(c).clientWidth) {
      f = Dc(c) || c;
      g = b.google_ad_client;
      if (
        (d =
          Ei(f.location, "google_responsive_slot_preview") ||
          S(Sg) ||
          Jk(f, 1, g, d))
      )
        b: if (
          b.google_reactive_ad_format ||
          b.google_ad_resize ||
          Yl(c, b) ||
          qh(a, b)
        )
          d = !1;
        else {
          for (d = a; d; d = d.parentElement) {
            f = Gc(d, c);
            if (!f) {
              b.gfwrnwer = 18;
              d = !1;
              break b;
            }
            if (!Ra(["static", "relative"], f.position)) {
              b.gfwrnwer = 17;
              d = !1;
              break b;
            }
          }
          d = uh(c, a, e, 0.3, b);
          !0 !== d ? ((b.gfwrnwer = d), (d = !1)) : (d = c === c.top ? !0 : !1);
        }
      d
        ? ((b.google_resizing_allowed = !0),
          (b.ovlp = !0),
          (b.google_ad_format = "auto"),
          (b.iaaso = !0),
          (b.armr = 1),
          (d = !0))
        : (d = !1);
    } else d = !1;
    if ((e = Yl(c, b))) $l(e, a, b, c, d);
    else {
      if (qh(a, b)) {
        if ((d = Gc(a, c)))
          (a.style.width = d.width), (a.style.height = d.height), ph(d, b);
        b.google_ad_width || (b.google_ad_width = a.offsetWidth);
        b.google_ad_height || (b.google_ad_height = a.offsetHeight);
        b.google_loader_features_used = 256;
        b.google_responsive_auto_format = Sn(c);
      } else ph(a.style, b);
      (c.location && "#gfwmrp" == c.location.hash) ||
      (12 == b.google_responsive_auto_format &&
        "true" == b.google_full_width_responsive)
        ? $l(10, a, b, c, !1)
        : 0.01 > Math.random() &&
          12 === b.google_responsive_auto_format &&
          ((a = vh(
            a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width,
            c,
            a,
            b
          )),
          !0 !== a ? ((b.efwr = !1), (b.gfwrnwer = a)) : (b.efwr = !0));
    }
  }
  function Un(a) {
    if (a.h) return a.h;
    a.B && a.B(a.j) ? (a.h = a.j) : (a.h = Qc(a.j, a.J));
    return a.h ?? null;
  }
  function Vn(a, b) {
    a.F.set("getDataWithCallback", b);
  }
  function Wn(a, b) {
    a.A.set("getDataWithCallback", b);
  }
  var Xn = class extends Me {
    constructor(a, b, c) {
      super();
      this.J = a;
      this.B = b;
      this.P = c;
      this.F = new Map();
      this.A = new Map();
      this.T = new Map();
      this.R = new Map();
      this.l = void 0;
      this.j = L;
    }
    g() {
      delete this.h;
      this.F.clear();
      this.A.clear();
      this.T.clear();
      this.R.clear();
      this.l && (hc(this.j, "message", this.l), delete this.l);
      delete this.j;
      delete this.P;
      super.g();
    }
  };
  const Yn = (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.H({ consentData: c ?? void 0, bb: d ? void 0 : 2 });
      });
    },
    Zn = {
      Na: (a) => a.H,
      Oa: (a, b) => ({
        __uspapiCall: { callId: b, command: "getUSPData", version: 1 },
      }),
      Pa: (a, b) => {
        b = b.__uspapiReturn;
        a({ consentData: b.returnValue ?? void 0, bb: b.success ? void 0 : 2 });
      },
    };
  function $n(a) {
    let b = {};
    "string" === typeof a.data ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, mb: b.__uspapiReturn.callId };
  }
  var ao = class extends Me {
    constructor() {
      super();
      this.caller = new Xn(
        "__uspapiLocator",
        (a) => "function" === typeof a.__uspapi,
        $n
      );
      Vn(this.caller, Yn);
      Wn(this.caller, Zn);
    }
    g() {
      Ne(this.caller);
      super.g();
    }
  };
  var bo = Xb(class extends I {});
  const co = (a, b) => {
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, (c) => {
        c = bo(c);
        b.H({ consentData: c });
      });
    },
    eo = {
      Na: (a) => a.H,
      Oa: (a, b) => ({ __fciCall: { callId: b, command: a.command } }),
      Pa: (a, b) => {
        a({ consentData: b });
      },
    },
    fo = (a, b) => {
      const c = {
        cb: (d) => {
          d = bo(d);
          b.H({ consentData: d });
        },
      };
      b.spsp && (c.spsp = b.spsp);
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, c);
    },
    go = {
      Na: (a) => a.H,
      Oa: (a, b) => ({
        __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 },
      }),
      Pa: (a, b) => {
        a({ consentData: b });
      },
    };
  function ho(a) {
    a = bo(a.data.__fciReturn);
    return { payload: a, mb: B(t(a, 1), 0) };
  }
  var io = class extends Me {
    constructor() {
      var a = S(Ug);
      super();
      this.h = this.j = !1;
      this.caller = new Xn("googlefcPresent", void 0, ho);
      a
        ? (Vn(this.caller, fo), Wn(this.caller, go))
        : (Vn(this.caller, co), Wn(this.caller, eo));
    }
    g() {
      Ne(this.caller);
      super.g();
    }
  };
  var jo = (a) => {
    gc(window, "message", (b) => {
      let c;
      try {
        c = JSON.parse(b.data);
      } catch (d) {
        return;
      }
      !c || "sc-cnf" !== c.googMsgType || a(c, b);
    });
  };
  let ko = null;
  const lo = [],
    mo = new Map();
  let no = -1;
  function oo(a) {
    return Jh.test(a.className) && "done" !== a.dataset.adsbygoogleStatus;
  }
  function po(a, b, c) {
    a.dataset.adsbygoogleStatus = "done";
    qo(a, b, c);
  }
  function qo(a, b, c) {
    var d = window;
    d.google_spfd || (d.google_spfd = Tn);
    var e = b.google_reactive_ads_config;
    e || Tn(a, b, d, c);
    Fn(d, b);
    if (!ro(a, b, d)) {
      e || (d.google_lpabyc = sh(a, d) + (Bh(a, d, "height", K) || 0));
      if (e) {
        e = e.page_level_pubvars || {};
        if (
          X(L).page_contains_reactive_tag &&
          !X(L).allow_second_reactive_tag
        ) {
          if (e.pltais) {
            Ck(!1);
            return;
          }
          throw new U("Only one 'enable_page_level_ads' allowed per page.");
        }
        X(L).page_contains_reactive_tag = !0;
        Ck(7 === e.google_pgb_reactive);
      }
      b.google_unique_id = id(d);
      J(bm, (f, g) => {
        b[g] = b[g] || d[g];
      });
      "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
      b.google_reactive_tag_first = 1 === (X(L).first_tag_on_page || 0);
      Ti(164, () => {
        var f = d.document;
        for (var g = void 0, h = 0; !g || f.getElementById(g + "_host"); )
          g = "aswift_" + h++;
        f = g;
        g = Number(b.google_ad_width || 0);
        h = Number(b.google_ad_height || 0);
        const k = Fc("DIV");
        k.id = f + "_host";
        const l = k.style;
        l.border = "none";
        l.height = `${h}px`;
        l.width = `${g}px`;
        l.margin = "0px";
        l.padding = "0px";
        l.position = "relative";
        l.visibility = "visible";
        l.backgroundColor = "transparent";
        k.style.display = "inline-block";
        a.appendChild(k);
        Mn(d, b, a, c, { fb: f, ub: k });
      });
    }
  }
  function ro(a, b, c) {
    var d = b.google_reactive_ads_config,
      e =
        "string" === typeof a.className &&
        RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
      f = Ak(c);
    if (f && f.Ha && "on" !== b.google_adtest && !e) {
      e = sh(a, c);
      const g = P(c).clientHeight;
      e = 0 == g ? null : e / g;
      if (!f.oa || (f.oa && (e || 0) >= f.oa))
        return (
          (a.className += " adsbygoogle-ablated-ad-slot"),
          (c = c.google_sv_map = c.google_sv_map || {}),
          (d = ea(a)),
          (b.google_element_uid = d),
          (c[b.google_element_uid] = b),
          a.setAttribute("google_element_uid", String(d)),
          "slot" === f.sb &&
            (null !== Pc(a.getAttribute("width")) && a.setAttribute("width", 0),
            null !== Pc(a.getAttribute("height")) &&
              a.setAttribute("height", 0),
            (a.style.width = "0px"),
            (a.style.height = "0px")),
          !0
        );
    }
    if (
      (f = Gc(a, c)) &&
      "none" === f.display &&
      !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)
    )
      return (
        c.document.createComment &&
          a.appendChild(
            c.document.createComment(
              "No ad requested because of display:none on the adsbygoogle tag"
            )
          ),
        !0
      );
    a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
    return (1 !== b.google_reactive_ad_format &&
      8 !== b.google_reactive_ad_format) ||
      !a
      ? !1
      : (m.console &&
          m.console.warn(
            "Adsbygoogle tag with data-reactive-ad-format=" +
              String(b.google_reactive_ad_format) +
              " is deprecated. Check out page-level ads at https://www.google.com/adsense"
          ),
        !0);
  }
  function so(a) {
    var b = document.getElementsByTagName("INS");
    for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
      var c = e;
      if (
        oo(c) &&
        "reserved" !== c.dataset.adsbygoogleStatus &&
        (!a || e.id === a)
      )
        return e;
    }
    return null;
  }
  function to(a, b, c) {
    if (a && "shift" in a)
      for (var d = 20; 0 < a.length && 0 < d; ) {
        try {
          uo(a.shift(), b, c);
        } catch (e) {
          setTimeout(() => {
            throw e;
          });
        }
        --d;
      }
  }
  function vo() {
    const a = Fc("INS");
    a.className = "adsbygoogle";
    a.className += " adsbygoogle-noablate";
    Sc(a, { display: "none" });
    return a;
  }
  function wo(a, b) {
    const c = {},
      d = Vk(a.google_ad_client, b);
    J(ig, (g, h) => {
      !1 === a.enable_page_level_ads
        ? (c[h] = !1)
        : a.hasOwnProperty(h)
        ? (c[h] = a[h])
        : d.includes(g) && (c[h] = !1);
    });
    da(a.enable_page_level_ads) &&
      (c.page_level_pubvars = a.enable_page_level_ads);
    const e = vo();
    Wc.body.appendChild(e);
    const f = {
      google_reactive_ads_config: c,
      google_ad_client: a.google_ad_client,
    };
    f.google_pause_ad_requests = !!X(L).pause_ad_requests;
    po(e, f, b);
  }
  function xo(a, b) {
    jg(m).wasPlaTagProcessed = !0;
    const c = () => {
        wo(a, b);
      },
      d = m.document;
    if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
      wo(a, b);
    else {
      const e = fc(V.ma(191, c));
      gc(d, "DOMContentLoaded", e);
      new m.MutationObserver((f, g) => {
        d.body && (e(), g.disconnect());
      }).observe(d, { childList: !0, subtree: !0 });
    }
  }
  function uo(a, b, c) {
    const d = {};
    Ti(
      165,
      () => yo(a, d, b, c),
      (e) => {
        e.client = e.client || d.google_ad_client || a.google_ad_client;
        e.slotname = e.slotname || d.google_ad_slot;
        e.tag_origin = e.tag_origin || d.google_tag_origin;
      }
    );
  }
  function zo(a) {
    delete a.google_checked_head;
    J(a, (b, c) => {
      Ih[c] ||
        (delete a[c],
        (b = c.replace("google", "data").replace(/_/g, "-")),
        m.console.warn(`AdSense head tag doesn't support ${b} attribute.`));
    });
  }
  function Ao(a, b) {
    var c =
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])'
      ) ||
      L.document.querySelector(
        'script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])'
      );
    if (c) {
      c.setAttribute("data-checked-head", "true");
      var d = X(window);
      if (d.head_tag_slot_vars) Bo(c);
      else {
        var e = {};
        Rn(c, e);
        zo(e);
        var f = lc(e);
        d.head_tag_slot_vars = f;
        c = { google_ad_client: e.google_ad_client, enable_page_level_ads: e };
        L.adsbygoogle || (L.adsbygoogle = []);
        d = L.adsbygoogle;
        d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
        e.google_adbreak_test || (b.j()?.j() && S(bh))
          ? Co(f, a)
          : jo(() => {
              Co(f, a);
            });
      }
    }
  }
  function Bo(a) {
    const b = X(window).head_tag_slot_vars,
      c = a.getAttribute("src") || "";
    if (
      (a = Bc(c, "client") || a.getAttribute("data-ad-client") || "") &&
      a !== b.google_ad_client
    )
      throw new U(
        "Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " +
          a +
          ", " +
          b.google_ad_client
      );
  }
  function Do(a) {
    if ("object" === typeof a && null != a) {
      if ("string" === typeof a.type) return 2;
      if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
        return 3;
    }
    return 0;
  }
  function yo(a, b, c, d) {
    if (null == a) throw new U("push() called with no parameters.");
    d.l() && Eo(a, d.g().g(), G(d, 2));
    var e = Do(a);
    if (0 !== e)
      if (
        ((d = Dk()),
        d.first_slotcar_request_processing_time ||
          ((d.first_slotcar_request_processing_time = Date.now()),
          (d.adsbygoogle_execution_start_time = oa)),
        null == ko)
      )
        Fo(a), lo.push(a);
      else if (3 === e) {
        const f = ko;
        Ti(787, () => {
          f.handleAdConfig(a);
        });
      } else Vi(730, ko.handleAdBreak(a));
    else {
      oa = new Date().getTime();
      Gn(c, d, Go(a));
      Ho();
      a: {
        if (void 0 != a.enable_page_level_ads) {
          if ("string" === typeof a.google_ad_client) {
            e = !0;
            break a;
          }
          throw new U("'google_ad_client' is missing from the tag config.");
        }
        e = !1;
      }
      if (e) Io(a, d);
      else if (
        ((e = a.params) &&
          J(e, (f, g) => {
            b[g] = f;
          }),
        "js" === b.google_ad_output)
      )
        console.warn(
          "Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."
        );
      else {
        e = Jo(a.element);
        Rn(e, b);
        c = X(m).head_tag_slot_vars || {};
        J(c, (f, g) => {
          b.hasOwnProperty(g) || (b[g] = f);
        });
        if (e.hasAttribute("data-require-head") && !X(m).head_tag_slot_vars)
          throw new U(
            "AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com."
          );
        if (!b.google_ad_client)
          throw new U("Ad client is missing from the slot.");
        (c = 0 === (X(L).first_tag_on_page || 0) && nl(b)) && Ko(c);
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 2);
        b.google_pause_ad_requests = !!X(L).pause_ad_requests;
        po(e, b, d);
      }
    }
  }
  let Lo = !1;
  function Eo(a, b, c) {
    Lo ||
      ((Lo = !0),
      (a = Go(a) || fm(L)),
      Ui("predictive_abg", { a_c: a, p_c: b.join(), b_v: c }, 0.01));
  }
  function Go(a) {
    return a.google_ad_client
      ? a.google_ad_client
      : (a = a.params) && a.google_ad_client
      ? a.google_ad_client
      : "";
  }
  function Ho() {
    if (S(Ng)) {
      var a = Ak(L);
      if (!(a = a && a.Ha)) {
        try {
          var b = L.localStorage;
        } catch (c) {
          b = null;
        }
        b = b ? pk(b) : null;
        a = !(b && ok(b) && b);
      }
      a || Bk(L, 1);
    }
  }
  function Ko(a) {
    Xc(() => {
      jg(m).wasPlaTagProcessed || (m.adsbygoogle && m.adsbygoogle.push(a));
    });
  }
  function Io(a, b) {
    0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 1);
    if (a.tag_partner) {
      var c = a.tag_partner;
      const d = X(m);
      d.tag_partners = d.tag_partners || [];
      d.tag_partners.push(c);
    }
    ql(a, b);
    xo(a, b);
  }
  function Jo(a) {
    if (a) {
      if (!oo(a) && (a.id ? (a = so(a.id)) : (a = null), !a))
        throw new U("'element' has already been filled.");
      if (!("innerHTML" in a))
        throw new U("'element' is not a good DOM element.");
    } else if (((a = so()), !a))
      throw new U(
        "All ins elements in the DOM with class=adsbygoogle already have ads in them."
      );
    return a;
  }
  function Mo() {
    var a = new pj(L),
      b = new ao();
    const c = new io();
    var d = L.__cmp ? 1 : 0;
    a = mj(a) ? 1 : 0;
    b = Un(b.caller) ? 1 : 0;
    c.j || ((c.h = !!Un(c.caller)), (c.j = !0));
    Ui(
      "cmpMet",
      { tcfv1: d, tcfv2: a, usp: b, fc: c.h ? 1 : 0, ptt: 9 },
      0.001
    );
  }
  function No(a) {
    Yi().S[bj(26)] = !!Number(a);
  }
  function Oo(a) {
    Number(a)
      ? (X(L).pause_ad_requests = !0)
      : ((X(L).pause_ad_requests = !1),
        (a = () => {
          if (!X(L).pause_ad_requests) {
            var b = {};
            let c;
            "function" === typeof window.CustomEvent
              ? (c = new CustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  b
                ))
              : ((c = document.createEvent("CustomEvent")),
                c.initCustomEvent(
                  "adsbygoogle-pub-unpause-ad-requests-event",
                  !!b.bubbles,
                  !!b.cancelable,
                  b.detail
                ));
            L.dispatchEvent(c);
          }
        }),
        m.setTimeout(a, 0),
        m.setTimeout(a, 1e3));
  }
  function Po(a) {
    try {
      Object.defineProperty(a, "requestNonPersonalizedAds", { set: No }),
        Object.defineProperty(a, "pauseAdRequests", { set: Oo }),
        Object.defineProperty(a, "onload", { set: Qo });
    } catch {}
  }
  function Qo(a) {
    a && a.call && "function" === typeof a && window.setTimeout(a, 0);
  }
  function Co(a, b) {
    b = ml(oc(b.rb, hh() ? { bust: hh() } : {})).then((c) => {
      null == ko && (c.init(a), (ko = c), Ro(c));
    });
    V.Z(723, b);
    b.finally(() => {
      lo.length = 0;
      Ui("slotcar", {
        event: "api_ld",
        time: Date.now() - oa,
        time_pr: Date.now() - no,
      });
    });
  }
  function Ro(a) {
    for (const [c, d] of mo) {
      var b = c;
      const e = d;
      -1 !== e && (m.clearTimeout(e), mo.delete(b));
    }
    for (b = 0; b < lo.length; b++) {
      if (mo.has(b)) continue;
      const c = lo[b],
        d = Do(c);
      Ti(723, () => {
        if (3 === d) a.handleAdConfig(c);
        else if (2 === d) {
          var e = a.handleAdBreakBeforeReady(c);
          V.Z(730, e);
        }
      });
    }
  }
  function Fo(a) {
    var b = lo.length;
    if (2 === Do(a) && "preroll" === a.type && null != a.adBreakDone) {
      var c = a.adBreakDone;
      -1 === no && (no = Date.now());
      var d = m.setTimeout(() => {
        try {
          c({
            breakType: "preroll",
            breakName: a.name,
            breakFormat: "preroll",
            breakStatus: "timeout",
          }),
            mo.set(b, -1),
            Ui("slotcar", { event: "pr_to", source: "adsbygoogle" });
        } catch (e) {
          console.error(
            "[Ad Placement API] adBreakDone callback threw an error:",
            e instanceof Error ? e : Error(String(e))
          );
        }
      }, 1e3 * M(gh).g(ch.g, ch.defaultValue));
      mo.set(b, d);
    }
  }
  (function (a, b, c, d = () => {}) {
    V.Ra(Wi);
    Ti(166, () => {
      const e = Wm(b);
      Um(e);
      d();
      dd(16, [1, e.toJSON()]);
      var f = gd(ed(L)) || L;
      const g = c(Sm({ pa: a, ua: G(e, 2) }), e);
      var h = null === L.document.currentScript ? 1 : qm(g.tb);
      Kk(f, e);
      Rm(f, e, h);
      Vi(1086, lm(M(nm), 0 === h));
      if (!Da() || 0 <= ra(Ja(), 11)) {
        Si(S(fh));
        Pn();
        Zj();
        try {
          ln();
        } catch {}
        On();
        Ao(g, e);
        f = window;
        h = f.adsbygoogle;
        if (!h || !h.loaded) {
          Ui(
            "new_abg_tag",
            { value: `${A(e, 16)}`, host_v: `${A(e, 22)}`, frequency: 0.01 },
            0.01
          );
          Mo();
          var k = {
            push: (n) => {
              uo(n, g, e);
            },
            loaded: !0,
          };
          Po(k);
          if (h)
            for (var l of ["requestNonPersonalizedAds", "pauseAdRequests"])
              void 0 !== h[l] && (k[l] = h[l]);
          to(h, g, e);
          f.adsbygoogle = k;
          h && (k.onload = h.onload);
          (l = Ln(g)) && document.documentElement.appendChild(l);
        }
      }
    });
  })("m202305160101", Vm, function (a, b) {
    const c = 2012 < B(t(b, 1), 0) ? `_fy${B(t(b, 1), 0)}` : "";
    var d = G(b, 3);
    const e = G(b, 2);
    b = hd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
    d = hd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
    return {
      rb: b,
      pb: hd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
      ob: hd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
      Xb: hd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
      vb: d,
      tb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/,
    };
  });
}).call(
  this,
  '[2021,"r20230517","r20190131",1,null,1,null,".google.co.uk",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,"Android",["navigator.userAgent"]],[null,500]]]],[1247,null,null,[1]],[1252,null,null,[1]],[1240,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1243,null,null,[1]],[1255,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[null,1114,null,[null,1]],[null,523968586,null,[null,4.5]],[527208176,null,null,[1]],[501545959,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,["1","2"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10007,null,null,[1]],[10005,null,null,[1]],[1033,null,null,[1]],[10006,null,null,[1]],[null,null,null,[null,null,null,["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==","AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,["LayoutShift"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,["31061691"]]],[1000,[[31067146,null,[4,null,70,null,null,null,null,["browsing-topics"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067147,null,[2,[[4,null,70,null,null,null,null,["run-ad-auction"]],[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067148,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,["browsing-topics"]],[1,[[4,null,70,null,null,null,null,["browsing-topics"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,["join-ad-interest-group"]],[1,[[4,null,70,null,null,null,null,["join-ad-interest-group"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,["run-ad-auction"]],[1,[[4,null,70,null,null,null,null,["run-ad-auction"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,["attribution-reporting"]],[1,[[4,null,70,null,null,null,null,["attribution-reporting"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31068556,null,[4,null,70,null,null,null,null,["shared-storage"]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,["shared-storage"]],[1,[[4,null,70,null,null,null,null,["shared-storage"]]]]]]]],[12,null,null,null,4,null,"Chrome/((?!100)\\\\d{3,})",["navigator.userAgent"]]],[null,[[44768158,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44768159,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,74],[200,[[44776500,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44776501,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,74],[100,[[44776502,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44776503,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,74],[10,[[44783616,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791426,null,[4,null,70,null,null,null,null,["attribution-reporting"]]],[44791427,null,[4,null,70,null,null,null,null,["attribution-reporting"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44784478],[44792510]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[10,[[31073763],[31073764,[[1250,null,null,[1]]]]]],[50,[[31074198],[31074199,[[1254,null,null,[1]]]]]],[1,[[31074344],[31074345,[[1229,null,null,[1]]]],[31074346,[[1230,null,null,[1]]]],[31074347,[[1231,null,null,[1]]]],[31074348,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[100,[[31074468],[31074469,[[1238,null,null,[1]]]]]],[100,[[31074545],[31074546,[[1257,null,null,[1]]]]]],[100,[[31074687],[31074688,[[1258,null,null,[1]]]]]],[100,[[31074689],[31074690,[[null,523968586,null,[null,2.5]]]]]],[1000,[[31074718,[[null,null,14,[null,null,"31074718"]]],[6,null,null,null,6,null,"31074718"]],[31074719,[[null,null,14,[null,null,"31074719"]]],[6,null,null,null,6,null,"31074719"]]],[4,null,55],63],[10,[[31074734],[31074735,[[1259,null,null,[1]]]]]],[1000,[[31074754,[[null,null,14,[null,null,"31074754"]]],[6,null,null,null,6,null,"31074754"]],[31074755,[[null,null,14,[null,null,"31074755"]]],[6,null,null,null,6,null,"31074755"]]],[4,null,55],63],[1,[[31074771],[31074772,[[531007060,null,null,[1]],[531582260,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,76],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,["gmaSdk.getQueryInfo"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaQueryInfo.postMessage"]],[4,null,8,null,null,null,null,["webkit.messageHandlers.getGmaSig.postMessage"]]]],69],[50,[[44782466],[44782467,[[1160,null,null,[1]]]],[44782468,[[1226,null,null,[1]],[1160,null,null,[1]]]]]],[50,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[50,[[44785294],[44785295]]],[null,[[44786918],[44788443,[[1147,null,null,[1]]]]],null,54],[500,[[44788441],[44788442,[[1147,null,null,[1]]]]],null,54],[200,[[44789779,[[1236,null,null,[1]]]],[44789923],[44790154]],null,75],[null,[[44790542],[44790543]]],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[200,[[44792088],[44792089,[[1223,null,null,[1]]]]],null,75]]],[17,[[10,[[31071260]]],[10,[[44788469,[[null,506871937,null,[null,44788469]]]],[44788470,[[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44788470]]]],[44788471,[[1120,null,null,[1]],[null,506871937,null,[null,44788471]]]]],[4,null,55],null,null,null,null,2,null,118,1],[10,[[44789815],[44789816],[44789817],[44789818]],null,null,null,null,22,null,null,101],[10,[[44789819],[44789820]],null,null,null,null,null,500,null,101],[10,[[44791169,[[1120,null,null,[1]],[null,506871937,null,[null,44791169]]]],[44791170,[[1120,null,null,[1]],[522099048,null,null,[1]],[null,506871937,null,[null,44791170]]]]],[4,null,55],null,null,null,null,152,null,118,1],[10,[[44791770,[[1120,null,null,[1]],[null,506871937,null,[null,44791770]]]],[44791771,[[1120,null,null,[1]],[null,524139171,null,[null,0.01]],[null,506871937,null,[null,44791771]]]],[44791772,[[1120,null,null,[1]],[null,524139171,null,[null,0.1]],[null,506871937,null,[null,44791772]]]]],[4,null,55],null,null,null,null,192,null,118,1],[3,[[44792295,[[null,506871937,null,[null,44792295]]]],[44792296,[[1120,null,null,[1]],[null,506871937,null,[null,44792296]]]]],[2,[[4,null,55],[7,null,null,15,null,20230512]]],null,null,null,null,222,null,118,1],[28,[[44792297,[[1120,null,null,[1]],[null,506871937,null,[null,44792297]]],[4,null,71,null,null,null,null,["118","14"]]]],[2,[[4,null,55],[7,null,null,15,null,20230512]]],null,null,null,null,228,null,118,1],[15,[[44792403],[44792404,[[1957,null,null,[]]]]],[2,[[4,null,55],[6,null,null,3,null,0],[7,null,null,15,null,20230515]]],null,null,null,null,null,null,119,1],[140,[[44792405,[[1957,null,null,[]]],[4,null,71,null,null,null,null,["119","14"]]]],[2,[[4,null,55],[6,null,null,3,null,0],[7,null,null,15,null,20230515]]],null,null,null,null,30,null,119,1],[1,[[44792640,[[506914611,null,null,[1]],[null,506871937,null,[null,44792640]]]],[44792641,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44792641]]]],[44792642,[[529723966,null,null,[1]],[1120,null,null,[1]],[506914611,null,null,[1]],[null,506871937,null,[null,44792642]]]]],[4,null,55],null,null,null,null,256,null,118,1]]],[11,[[5,[[44790788,null,[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44790789,[[null,1245,null,[null,1]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44790790,[[null,1245,null,[null,60]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44790791,[[null,1245,null,[null,120]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44790792,[[null,1245,null,[null,300]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44790793,[[null,1245,null,[null,600]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]],[44791974,[[null,1245,null,[null,30]]],[2,[[5,null,8,null,null,null,null,["localStorage"]],[4,null,8,null,null,null,null,["localStorage"]]]]]]]]]],null,null,[null,"1000",1,"1000"]],[null,[null,null,[]]],null,null,1,null,1062200306,[44759927,44759876,44792109,44759837]]'
);
