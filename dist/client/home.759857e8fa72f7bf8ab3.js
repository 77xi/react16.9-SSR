!(function(i) {
  function e(e) {
    for (
      var t, r, n = e[0], o = e[1], c = e[2], a = 0, u = [];
      a < n.length;
      a++
    )
      (r = n[a]),
        Object.prototype.hasOwnProperty.call(f, r) && f[r] && u.push(f[r][0]),
        (f[r] = 0)
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (i[t] = o[t])
    for (p && p(e); u.length; ) u.shift()()
    return s.push.apply(s, c || []), l()
  }
  function l() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], n = !0, o = 1; o < r.length; o++) {
        var c = r[o]
        0 !== f[c] && (n = !1)
      }
      n && (s.splice(t--, 1), (e = a((a.s = r[0]))))
    }
    return e
  }
  var r = {},
    f = { 3: 0 },
    s = []
  function a(e) {
    if (r[e]) return r[e].exports
    var t = (r[e] = { i: e, l: !1, exports: {} })
    return i[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports
  }
  ;(a.m = i),
    (a.c = r),
    (a.d = function(e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t
      if (4 & e && "object" == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          a.d(
            r,
            n,
            function(e) {
              return t[e]
            }.bind(null, n)
          )
      return r
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return a.d(t, "a", t), t
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a.p = "client/")
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    n = t.push.bind(t)
  ;(t.push = e), (t = t.slice())
  for (var o = 0; o < t.length; o++) e(t[o])
  var p = n
  s.push([37, 1, 0]), l()
})({
  36: function(e, t, r) {},
  37: function(e, t, r) {
    "use strict"
    r.r(t)
    var n = r(13),
      o = Symbol("MESSAGES_ACTIONS_SUCCESS")
    function c(t, e) {
      var r = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t)
        e &&
          (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          r.push.apply(r, n)
      }
      return r
    }
    function a(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      )
    }
    var u = { messages: [] },
      i = {
        home: function(e, t) {
          var r = 0 < arguments.length && void 0 !== e ? e : u,
            n = 1 < arguments.length ? t : void 0
          switch (n.type) {
            case o:
              return (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = null != arguments[e] ? arguments[e] : {}
                  e % 2
                    ? c(Object(r), !0).forEach(function(e) {
                        a(t, e, r[e])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        t,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : c(Object(r)).forEach(function(e) {
                        Object.defineProperty(
                          t,
                          e,
                          Object.getOwnPropertyDescriptor(r, e)
                        )
                      })
                }
                return t
              })({}, r, { messages: n.payload })
            default:
              return r
          }
        }
      },
      l = r(0),
      f = r.n(l),
      s = r(10),
      p = r.p + "37fe8322b169ddbdeabf75930e886ac6.png",
      b =
        (r(36),
        [
          {
            exact: !0,
            path: "/home",
            component: Object(s.connect)(function(e) {
              return e
            })(function() {
              return (
                Object(l.useEffect)(function() {
                  window.document.title = "I am Home page"
                }, []),
                f.a.createElement(
                  "div",
                  { className: "Home" },
                  f.a.createElement(
                    "div",
                    { className: "Home-header" },
                    "Header"
                  ),
                  f.a.createElement(
                    "div",
                    { className: "Home-content" },
                    f.a.createElement(
                      "div",
                      { className: "Home-left" },
                      "Menu"
                    ),
                    f.a.createElement(
                      "div",
                      { className: "Home-right" },
                      "Content",
                      f.a.createElement("img", {
                        className: "Home-ReactIcon",
                        src: p
                      })
                    )
                  )
                )
              )
            }),
            name: "home"
          }
        ])
    Object(n.a)({ routes: b, modules: i })
  }
})
