!(function(e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t]
            }.bind(null, o)
          )
      return r
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, "a", t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = "client/"),
    n((n.s = 21))
})([
  function(e, t) {
    e.exports = require("react")
  },
  function(e, t) {
    e.exports = require("react-redux")
  },
  function(e, t) {
    e.exports = require("react-router-dom")
  },
  function(e, t) {
    e.exports = require("redux")
  },
  function(e, t, n) {
    "use strict"
    e.exports = function(e) {
      var t = []
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3]
              if (!r) return n
              if (t && "function" == typeof btoa) {
                var o =
                    ((c = r),
                    (i = btoa(unescape(encodeURIComponent(JSON.stringify(c))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      i
                    )),
                    "/*# ".concat(u, " */")),
                  a = r.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */")
                  })
                return [n]
                  .concat(a)
                  .concat([o])
                  .join("\n")
              }
              var c, i, u
              return [n].join("\n")
            })(t, e)
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
          }).join("")
        }),
        (t.i = function(e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]])
          var o = {}
          if (r)
            for (var a = 0; a < this.length; a++) {
              var c = this[a][0]
              null != c && (o[c] = !0)
            }
          for (var i = 0; i < e.length; i++) {
            var u = [].concat(e[i])
            ;(r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              t.push(u))
          }
        }),
        t
      )
    }
  },
  function(e, t) {
    e.exports = require("react-dom/server")
  },
  function(e, t) {
    e.exports = require("koa")
  },
  function(e, t) {
    e.exports = require("koa-static")
  },
  function(e, t) {
    e.exports = require("path")
  },
  function(e, t) {
    e.exports = require("app-root-dir")
  },
  function(e, t) {
    e.exports = require("fs")
  },
  function(e, t) {
    e.exports = require("react-router-config")
  },
  function(e, t) {
    e.exports = require("redux-thunk")
  },
  function(e, t) {
    e.exports = require("lodash")
  },
  function(e, t) {
    e.exports = require("serialize-javascript")
  },
  function(e, t) {
    e.exports = require("regenerator-runtime/runtime")
  },
  function(e, t, n) {
    ;(t = n(4)(!1)).push([
      e.i,
      "body {\n  padding: 0;\n  margin: 0;\n}\n\n.App {\n  color: red;\n}\n",
      ""
    ]),
      (e.exports = t)
  },
  function(e, t, n) {
    var r = { "./about/routes.ts": 24, "./home/routes.ts": 22 }
    function o(e) {
      var t = a(e)
      return n(t)
    }
    function a(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = "MODULE_NOT_FOUND"), t)
      }
      return r[e]
    }
    ;(o.keys = function() {
      return Object.keys(r)
    }),
      (o.resolve = a),
      (e.exports = o),
      (o.id = 17)
  },
  function(e, t, n) {
    ;(t = n(4)(!1)).push([e.i, ".About {\n  color: red;\n}\n", ""]),
      (e.exports = t)
  },
  function(e, t, n) {
    ;(t = n(4)(!1)).push([
      e.i,
      ".Home {\n  color: aliceblue;\n}\n\n.Home-header {\n  height: 5vh;\n  background-color: red;\n}\n\n.Home-content {\n  display: flex;\n}\n\n.Home-left {\n  width: 100px;\n  flex-shrink: 0;\n  height: 95vh;\n  background-color: rosybrown;\n}\n\n.Home-right {\n  flex-grow: 1;\n  height: 95vh;\n  background-color: salmon;\n}\n\n.Home-ReactIcon {\n  width: 100%;\n}\n",
      ""
    ]),
      (e.exports = t)
  },
  function(e, t, n) {
    var r = { "./home/modules/index.ts": 23 }
    function o(e) {
      var t = a(e)
      return n(t)
    }
    function a(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = "MODULE_NOT_FOUND"), t)
      }
      return r[e]
    }
    ;(o.keys = function() {
      return Object.keys(r)
    }),
      (o.resolve = a),
      (e.exports = o),
      (o.id = 20)
  },
  function(e, t, n) {
    "use strict"
    n.r(t)
    n(15)
    var r,
      o = n(6),
      a = n.n(o),
      c = n(7),
      i = n.n(c),
      u = n(8),
      s = n.n(u),
      l = n(9),
      f = n.n(l),
      p = s.a.resolve.bind(null, f.a.get()),
      m = n(10),
      d = n.n(m),
      v = n(0),
      h = n.n(v),
      b = n(5),
      y = n(2),
      g = n(11),
      O = n(3),
      j = n(1),
      w = n(12),
      x = n.n(w),
      E =
        (n(16),
        function(e) {
          var t = e.children
          return h.a.createElement("div", { className: "App" }, t)
        }),
      S = n(13),
      P = n.n(S),
      k = (r = n(17)).keys().map(function(e) {
        return r(e).default
      }),
      N = P.a.flatten(k),
      R = {
        env: function() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return e
        }
      },
      q = {}
    !(function(e) {
      e.keys().map(function(t) {
        return (q[t] = e(t).default)
      })
    })(n(20))
    var H = function(e) {
        return q["./".concat(e, "/modules/index.ts")]
      },
      _ = n(14),
      D = n.n(_),
      M = function(e) {
        var t = e.spanName,
          n = e.manifest,
          r = JSON.parse(n),
          o = r["common.css"],
          a = [r["vendor.js"], r["common.js"]]
        return {
          scripts: [].concat(a, [r["".concat(t, ".js")]]).filter(Boolean),
          styles: [o, r["".concat(t, ".css")]].filter(Boolean)
        }
      },
      T = function(e) {
        var t = e.markup,
          n = e.manifest,
          r = e.initalState,
          o = e.spanName,
          a = M({ manifest: n, spanName: o }),
          c = a.styles,
          i = a.scripts
        return h.a.createElement(
          "html",
          { lang: "en" },
          h.a.createElement(
            "head",
            null,
            h.a.createElement("meta", { charSet: "UTF-8" }),
            h.a.createElement("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0"
            }),
            h.a.createElement("meta", {
              httpEquiv: "X-UA-Compatible",
              content: "ie=edge"
            }),
            c.map(function(e, t) {
              return h.a.createElement("link", {
                rel: "stylesheet",
                href: e,
                key: t
              })
            })
          ),
          h.a.createElement(
            "body",
            null,
            h.a.createElement("div", {
              id: "root",
              dangerouslySetInnerHTML: { __html: t }
            }),
            h.a.createElement("script", {
              id: "js-initalData",
              type: "text/json",
              dangerouslySetInnerHTML: {
                __html: D()({ spanName: o, initalState: r })
              }
            }),
            i.map(function(e, t) {
              return h.a.createElement("script", { src: e, key: t, async: !0 })
            })
          )
        )
      }
    function A(e, t, n, r, o, a, c) {
      try {
        var i = e[a](c),
          u = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var U = (function() {
      var e,
        t =
          ((e = regeneratorRuntime.mark(function e(t) {
            var n, r, o
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = t.branch),
                      (r = t.store),
                      (o = n.map(function(e) {
                        var t = e.route,
                          n = e.match.params,
                          o = t.component.fetchData
                        if ("function" == typeof o) {
                          var a = o({
                            params: n,
                            dispatch: r.dispatch,
                            getState: r.getState
                          })
                          return "function" == typeof a
                            ? a(r.dispatch, r.getState)
                            : void 0
                        }
                      })),
                      e.abrupt("return", Promise.all(o.filter(Boolean)))
                    )
                  case 3:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
          function() {
            var t = this,
              n = arguments
            return new Promise(function(r, o) {
              var a = e.apply(t, n)
              function c(e) {
                A(a, r, o, c, i, "next", e)
              }
              function i(e) {
                A(a, r, o, c, i, "throw", e)
              }
              c(void 0)
            })
          })
      return function(e) {
        return t.apply(this, arguments)
      }
    })()
    function C() {
      return (C =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
    }
    function I(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
    }
    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? I(Object(n), !0).forEach(function(t) {
              F(e, t, n[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : I(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
      }
      return e
    }
    function F(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      )
    }
    function B(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e
        })(e) ||
        (function(e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
          )
            return
          var n = [],
            r = !0,
            o = !1,
            a = void 0
          try {
            for (
              var c, i = e[Symbol.iterator]();
              !(r = (c = i.next()).done) &&
              (n.push(c.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            ;(o = !0), (a = e)
          } finally {
            try {
              r || null == i.return || i.return()
            } finally {
              if (o) throw a
            }
          }
          return n
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          )
        })()
      )
    }
    function J(e, t, n, r, o, a, c) {
      try {
        var i = e[a](c),
          u = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var z = (function() {
      var e,
        t =
          ((e = regeneratorRuntime.mark(function e(t) {
            var n, r, o, a, c, i, u, s, l
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = t.url),
                      (r = t.path),
                      (o = Object(g.matchRoutes)(N, r)).length)
                    ) {
                      e.next = 5
                      break
                    }
                    return (t.status = 404), e.abrupt("return")
                  case 5:
                    return (
                      (a = B(o, 1)),
                      (c = a[0].route.name),
                      (i = d.a.readFileSync(
                        p("dist", "client", "manifest.json"),
                        "utf-8"
                      )),
                      (u = H(c)),
                      (s = Object(O.createStore)(
                        Object(O.combineReducers)(L({}, R, {}, u)),
                        Object(O.applyMiddleware)(x.a)
                      )),
                      (e.next = 11),
                      U({ branch: o, store: s })
                    )
                  case 11:
                    ;(l = Object(b.renderToString)(
                      h.a.createElement(
                        y.StaticRouter,
                        { location: n },
                        h.a.createElement(
                          j.Provider,
                          { store: s },
                          h.a.createElement(
                            E,
                            null,
                            h.a.createElement(
                              y.Switch,
                              null,
                              N.map(function(e, t) {
                                return h.a.createElement(
                                  y.Route,
                                  C({}, e, { key: t })
                                )
                              })
                            )
                          )
                        )
                      )
                    )),
                      (t.body =
                        "<!DOCTYPE html> \n" +
                        Object(b.renderToStaticMarkup)(
                          h.a.createElement(T, {
                            spanName: c,
                            markup: l,
                            manifest: i,
                            initalState: s.getState()
                          })
                        ))
                  case 13:
                  case "end":
                    return e.stop()
                }
            }, e)
          })),
          function() {
            var t = this,
              n = arguments
            return new Promise(function(r, o) {
              var a = e.apply(t, n)
              function c(e) {
                J(a, r, o, c, i, "next", e)
              }
              function i(e) {
                J(a, r, o, c, i, "throw", e)
              }
              c(void 0)
            })
          })
      return function(e) {
        return t.apply(this, arguments)
      }
    })()
    function G(e, t, n, r, o, a, c) {
      try {
        var i = e[a](c),
          u = i.value
      } catch (e) {
        return void n(e)
      }
      i.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    var X,
      Y,
      K = (function() {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e(t, n) {
              return regeneratorRuntime.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), n()
                      case 3:
                        e.next = 8
                        break
                      case 5:
                        ;(e.prev = 5), (e.t0 = e.catch(0)), console.log(e.t0)
                      case 8:
                      case "end":
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 5]]
              )
            })),
            function() {
              var t = this,
                n = arguments
              return new Promise(function(r, o) {
                var a = e.apply(t, n)
                function c(e) {
                  G(a, r, o, c, i, "next", e)
                }
                function i(e) {
                  G(a, r, o, c, i, "throw", e)
                }
                c(void 0)
              })
            })
        return function(e, n) {
          return t.apply(this, arguments)
        }
      })(),
      Q = process.env.PORT || 8083
    ;(X = Q),
      (Y = new a.a()).use(i()(p("dist"))),
      Y.use(z),
      Y.use(K),
      Y.listen(X, function() {
        return console.log("web server listening ".concat(X))
      })
  },
  function(e, t, n) {
    "use strict"
    n.r(t)
    var r = n(0),
      o = n.n(r),
      a = n(1),
      c = n.p + "37fe8322b169ddbdeabf75930e886ac6.png",
      i =
        (n(19),
        [
          {
            exact: !0,
            path: "/home",
            component: Object(a.connect)(function(e) {
              return e
            })(function() {
              return (
                Object(r.useEffect)(function() {
                  window.document.title = "I am Home page"
                }, []),
                o.a.createElement(
                  "div",
                  { className: "Home" },
                  o.a.createElement(
                    "div",
                    { className: "Home-header" },
                    "Header"
                  ),
                  o.a.createElement(
                    "div",
                    { className: "Home-content" },
                    o.a.createElement(
                      "div",
                      { className: "Home-left" },
                      "Menu"
                    ),
                    o.a.createElement(
                      "div",
                      { className: "Home-right" },
                      "Content",
                      o.a.createElement("img", {
                        className: "Home-ReactIcon",
                        src: c
                      })
                    )
                  )
                )
              )
            }),
            name: "home"
          }
        ])
    t.default = i
  },
  function(e, t, n) {
    "use strict"
    n.r(t)
    var r = Symbol("MESSAGES_ACTIONS_SUCCESS")
    function o(e, t) {
      var n = Object.keys(e)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e)
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {}
        t % 2
          ? o(Object(n), !0).forEach(function(t) {
              c(e, t, n[t])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
      }
      return e
    }
    function c(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      )
    }
    var i = { messages: [] },
      u = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case r:
            return a({}, e, { messages: t.payload })
          default:
            return e
        }
      }
    t.default = { home: u }
  },
  function(e, t, n) {
    "use strict"
    n.r(t)
    var r = n(0),
      o = n.n(r),
      a =
        (n(18),
        [
          {
            exact: !0,
            path: "/about",
            component: function() {
              return o.a.createElement(
                "div",
                { className: "About" },
                "i am about page"
              )
            },
            name: "about"
          }
        ])
    t.default = a
  }
])
