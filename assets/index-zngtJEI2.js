function Yc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ss = { exports: {} },
  gl = {},
  ks = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lr = Symbol.for("react.element"),
  Gc = Symbol.for("react.portal"),
  Zc = Symbol.for("react.fragment"),
  Jc = Symbol.for("react.strict_mode"),
  qc = Symbol.for("react.profiler"),
  bc = Symbol.for("react.provider"),
  ef = Symbol.for("react.context"),
  tf = Symbol.for("react.forward_ref"),
  nf = Symbol.for("react.suspense"),
  rf = Symbol.for("react.memo"),
  lf = Symbol.for("react.lazy"),
  ou = Symbol.iterator;
function of(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Es = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xs = Object.assign,
  Cs = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Es);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _s() {}
_s.prototype = dn.prototype;
function so(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cs),
    (this.updater = n || Es);
}
var ao = (so.prototype = new _s());
ao.constructor = so;
xs(ao, dn.prototype);
ao.isPureReactComponent = !0;
var uu = Array.isArray,
  Ps = Object.prototype.hasOwnProperty,
  co = { current: null },
  Ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ls(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ps.call(t, r) && !Ns.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: lr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: co.current,
  };
}
function uf(e, t) {
  return {
    $$typeof: lr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function fo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function sf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var su = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sf("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case lr:
          case Gc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Bl(o, 0) : r),
      uu(l)
        ? ((n = ""),
          e != null && (n = e.replace(su, "$&/") + "/"),
          Rr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (fo(l) &&
            (l = uf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(su, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), uu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Bl(i, u);
      o += Rr(i, t, n, s, l);
    }
  else if (((s = of(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Bl(i, u++)), (o += Rr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function af(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  zr = { transition: null },
  cf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: co,
  };
function Ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: pr,
  forEach: function (e, t, n) {
    pr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!fo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = dn;
j.Fragment = Zc;
j.Profiler = qc;
j.PureComponent = so;
j.StrictMode = Jc;
j.Suspense = nf;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cf;
j.act = Ts;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = xs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = co.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ps.call(t, s) &&
        !Ns.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: ef,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bc, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Ls;
j.createFactory = function (e) {
  var t = Ls.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: tf, render: e };
};
j.isValidElement = fo;
j.lazy = function (e) {
  return { $$typeof: lf, _payload: { _status: -1, _result: e }, _init: af };
};
j.memo = function (e, t) {
  return { $$typeof: rf, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
j.unstable_act = Ts;
j.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ae.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
j.useId = function () {
  return ae.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ae.current.useRef(e);
};
j.useState = function (e) {
  return ae.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ae.current.useTransition();
};
j.version = "18.3.1";
ks.exports = j;
var k = ks.exports;
const po = Xc(k),
  ff = Yc({ __proto__: null, default: po }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var df = k,
  pf = Symbol.for("react.element"),
  hf = Symbol.for("react.fragment"),
  mf = Object.prototype.hasOwnProperty,
  vf = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  yf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) mf.call(t, r) && !yf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: pf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: vf.current,
  };
}
gl.Fragment = hf;
gl.jsx = Rs;
gl.jsxs = Rs;
Ss.exports = gl;
var R = Ss.exports,
  zs = { exports: {} },
  ke = {},
  Os = { exports: {} },
  js = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var O = _.length;
    _.push(T);
    e: for (; 0 < O; ) {
      var K = (O - 1) >>> 1,
        J = _[K];
      if (0 < l(J, T)) (_[K] = T), (_[O] = J), (O = K);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      O = _.pop();
    if (O !== T) {
      _[0] = O;
      e: for (var K = 0, J = _.length, fr = J >>> 1; K < fr; ) {
        var St = 2 * (K + 1) - 1,
          $l = _[St],
          kt = St + 1,
          dr = _[kt];
        if (0 > l($l, O))
          kt < J && 0 > l(dr, $l)
            ? ((_[K] = dr), (_[kt] = O), (K = kt))
            : ((_[K] = $l), (_[St] = O), (K = St));
        else if (kt < J && 0 > l(dr, O)) (_[K] = dr), (_[kt] = O), (K = kt);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var O = _.sortIndex - T.sortIndex;
    return O !== 0 ? O : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    g = !1,
    y = !1,
    w = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= _)
        r(a), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(a);
    }
  }
  function v(_) {
    if (((w = !1), d(_), !y))
      if (n(s) !== null) (y = !0), Fl(E);
      else {
        var T = n(a);
        T !== null && Ul(v, T.startTime - _);
      }
  }
  function E(_, T) {
    (y = !1), w && ((w = !1), f(L), (L = -1)), (g = !0);
    var O = m;
    try {
      for (
        d(T), p = n(s);
        p !== null && (!(p.expirationTime > T) || (_ && !ve()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var J = K(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(s) && r(s),
            d(T);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var fr = !0;
      else {
        var St = n(a);
        St !== null && Ul(v, St.startTime - T), (fr = !1);
      }
      return fr;
    } finally {
      (p = null), (m = O), (g = !1);
    }
  }
  var P = !1,
    N = null,
    L = -1,
    B = 5,
    z = -1;
  function ve() {
    return !(e.unstable_now() - z < B);
  }
  function mn() {
    if (N !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = N(!0, _);
      } finally {
        T ? vn() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var vn;
  if (typeof c == "function")
    vn = function () {
      c(mn);
    };
  else if (typeof MessageChannel < "u") {
    var iu = new MessageChannel(),
      Kc = iu.port2;
    (iu.port1.onmessage = mn),
      (vn = function () {
        Kc.postMessage(null);
      });
  } else
    vn = function () {
      x(mn, 0);
    };
  function Fl(_) {
    (N = _), P || ((P = !0), vn());
  }
  function Ul(_, T) {
    L = x(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Fl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var O = m;
      m = T;
      try {
        return _();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var O = m;
      m = _;
      try {
        return T();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, O) {
      var K = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? K + O : K))
          : (O = K),
        _)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = O + J),
        (_ = {
          id: h++,
          callback: T,
          priorityLevel: _,
          startTime: O,
          expirationTime: J,
          sortIndex: -1,
        }),
        O > K
          ? ((_.sortIndex = O),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (w ? (f(L), (L = -1)) : (w = !0), Ul(v, O - K)))
          : ((_.sortIndex = J), t(s, _), y || g || ((y = !0), Fl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (_) {
      var T = m;
      return function () {
        var O = m;
        m = T;
        try {
          return _.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(js);
Os.exports = js;
var gf = Os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = k,
  Se = gf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Is = new Set(),
  Un = {};
function It(e, t) {
  rn(e, t), rn(e + "Capture", t);
}
function rn(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) Is.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hi = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  cu = {};
function kf(e) {
  return hi.call(cu, e)
    ? !0
    : hi.call(au, e)
    ? !1
    : Sf.test(e)
    ? (cu[e] = !0)
    : ((au[e] = !0), !1);
}
function Ef(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xf(e, t, n, r) {
  if (t === null || typeof t > "u" || Ef(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ho = /[\-:]([a-z])/g;
function mo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ho, mo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ho, mo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ho, mo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xf(t, n, l, r) && (n = null),
    r || l === null
      ? kf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  yo = Symbol.for("react.strict_mode"),
  mi = Symbol.for("react.profiler"),
  Ms = Symbol.for("react.provider"),
  Ds = Symbol.for("react.context"),
  go = Symbol.for("react.forward_ref"),
  vi = Symbol.for("react.suspense"),
  yi = Symbol.for("react.suspense_list"),
  wo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Fs = Symbol.for("react.offscreen"),
  fu = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Al;
function _n(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var Vl = !1;
function Wl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Cf(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return "";
  }
}
function gi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case $t:
      return "Portal";
    case mi:
      return "Profiler";
    case yo:
      return "StrictMode";
    case vi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ds:
        return (e.displayName || "Context") + ".Consumer";
      case Ms:
        return (e._context.displayName || "Context") + ".Provider";
      case go:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case wo:
        return (
          (t = e.displayName || null), t !== null ? t : gi(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return gi(e(t));
        } catch {}
    }
  return null;
}
function _f(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gi(t);
    case 8:
      return t === yo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Us(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Pf(e) {
  var t = Us(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = Pf(e));
}
function $s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Us(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function du(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bs(e, t) {
  (t = t.checked), t != null && vo(e, "checked", t, !1);
}
function Si(e, t) {
  Bs(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ki(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ki(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ki(e, t, n) {
  (t !== "number" || Wr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pn = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Pn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function As(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vr,
  Ws = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vr = vr || document.createElement("div"),
          vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Tn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function (e) {
  Nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Tn[t] = Tn[e]);
  });
});
function Hs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Tn.hasOwnProperty(e) && Tn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Qs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Hs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Lf = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ci(e, t) {
  if (t) {
    if (Lf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function _i(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function So(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ni = null,
  qt = null,
  bt = null;
function vu(e) {
  if ((e = ur(e))) {
    if (typeof Ni != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = xl(t)), Ni(e.stateNode, e.type, t));
  }
}
function Ks(e) {
  qt ? (bt ? bt.push(e) : (bt = [e])) : (qt = e);
}
function Ys() {
  if (qt) {
    var e = qt,
      t = bt;
    if (((bt = qt = null), vu(e), t)) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function Xs(e, t) {
  return e(t);
}
function Gs() {}
var Hl = !1;
function Zs(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return Xs(e, t, n);
  } finally {
    (Hl = !1), (qt !== null || bt !== null) && (Gs(), Ys());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Li = !1;
if (Ke)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn);
  } catch {
    Li = !1;
  }
function Tf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1,
  Hr = null,
  Qr = !1,
  Ti = null,
  Rf = {
    onError: function (e) {
      (Rn = !0), (Hr = e);
    },
  };
function zf(e, t, n, r, l, i, o, u, s) {
  (Rn = !1), (Hr = null), Tf.apply(Rf, arguments);
}
function Of(e, t, n, r, l, i, o, u, s) {
  if ((zf.apply(this, arguments), Rn)) {
    if (Rn) {
      var a = Hr;
      (Rn = !1), (Hr = null);
    } else throw Error(S(198));
    Qr || ((Qr = !0), (Ti = a));
  }
}
function Mt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Js(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yu(e) {
  if (Mt(e) !== e) throw Error(S(188));
}
function jf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Mt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return yu(l), e;
        if (i === r) return yu(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function qs(e) {
  return (e = jf(e)), e !== null ? bs(e) : null;
}
function bs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ea = Se.unstable_scheduleCallback,
  gu = Se.unstable_cancelCallback,
  If = Se.unstable_shouldYield,
  Mf = Se.unstable_requestPaint,
  Y = Se.unstable_now,
  Df = Se.unstable_getCurrentPriorityLevel,
  ko = Se.unstable_ImmediatePriority,
  ta = Se.unstable_UserBlockingPriority,
  Kr = Se.unstable_NormalPriority,
  Ff = Se.unstable_LowPriority,
  na = Se.unstable_IdlePriority,
  wl = null,
  $e = null;
function Uf(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var je = Math.clz32 ? Math.clz32 : Af,
  $f = Math.log,
  Bf = Math.LN2;
function Af(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($f(e) / Bf) | 0)) | 0;
}
var yr = 64,
  gr = 4194304;
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Nn(u)) : ((i &= o), i !== 0 && (r = Nn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Nn(o)) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Vf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Wf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - je(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Vf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ra() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - je(t)),
    (e[t] = n);
}
function Hf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Eo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function la(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ia,
  xo,
  oa,
  ua,
  sa,
  zi = !1,
  wr = [],
  it = null,
  ot = null,
  ut = null,
  An = new Map(),
  Vn = new Map(),
  et = [],
  Qf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = ur(t)), t !== null && xo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Kf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = wn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = wn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = wn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, wn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, wn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function aa(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Js(n)), t !== null)) {
          (e.blockedOn = t),
            sa(e.priority, function () {
              oa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Or(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pi = r), n.target.dispatchEvent(r), (Pi = null);
    } else return (t = ur(n)), t !== null && xo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, n) {
  Or(e) && n.delete(t);
}
function Yf() {
  (zi = !1),
    it !== null && Or(it) && (it = null),
    ot !== null && Or(ot) && (ot = null),
    ut !== null && Or(ut) && (ut = null),
    An.forEach(Su),
    Vn.forEach(Su);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zi ||
      ((zi = !0),
      Se.unstable_scheduleCallback(Se.unstable_NormalPriority, Yf)));
}
function Wn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < wr.length) {
    Sn(wr[0], e);
    for (var n = 1; n < wr.length; n++) {
      var r = wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && Sn(it, e),
      ot !== null && Sn(ot, e),
      ut !== null && Sn(ut, e),
      An.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    aa(n), n.blockedOn === null && et.shift();
}
var en = Ze.ReactCurrentBatchConfig,
  Xr = !0;
function Xf(e, t, n, r) {
  var l = M,
    i = en.transition;
  en.transition = null;
  try {
    (M = 1), Co(e, t, n, r);
  } finally {
    (M = l), (en.transition = i);
  }
}
function Gf(e, t, n, r) {
  var l = M,
    i = en.transition;
  en.transition = null;
  try {
    (M = 4), Co(e, t, n, r);
  } finally {
    (M = l), (en.transition = i);
  }
}
function Co(e, t, n, r) {
  if (Xr) {
    var l = Oi(e, t, n, r);
    if (l === null) ti(e, t, r, Gr, n), wu(e, r);
    else if (Kf(l, e, t, n, r)) r.stopPropagation();
    else if ((wu(e, r), t & 4 && -1 < Qf.indexOf(e))) {
      for (; l !== null; ) {
        var i = ur(l);
        if (
          (i !== null && ia(i),
          (i = Oi(e, t, n, r)),
          i === null && ti(e, t, r, Gr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ti(e, t, r, null, n);
  }
}
var Gr = null;
function Oi(e, t, n, r) {
  if (((Gr = null), (e = So(r)), (e = Ct(e)), e !== null))
    if (((t = Mt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Js(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Gr = e), null;
}
function ca(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Df()) {
        case ko:
          return 1;
        case ta:
          return 4;
        case Kr:
        case Ff:
          return 16;
        case na:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  _o = null,
  jr = null;
function fa() {
  if (jr) return jr;
  var e,
    t = _o,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sr() {
  return !0;
}
function ku() {
  return !1;
}
function Ee(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Sr
        : ku),
      (this.isPropagationStopped = ku),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sr));
      },
      persist: function () {},
      isPersistent: Sr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Po = Ee(pn),
  or = W({}, pn, { view: 0, detail: 0 }),
  Zf = Ee(or),
  Kl,
  Yl,
  kn,
  Sl = W({}, or, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: No,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((Kl = e.screenX - kn.screenX), (Yl = e.screenY - kn.screenY))
              : (Yl = Kl = 0),
            (kn = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  Eu = Ee(Sl),
  Jf = W({}, Sl, { dataTransfer: 0 }),
  qf = Ee(Jf),
  bf = W({}, or, { relatedTarget: 0 }),
  Xl = Ee(bf),
  ed = W({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  td = Ee(ed),
  nd = W({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rd = Ee(nd),
  ld = W({}, pn, { data: 0 }),
  xu = Ee(ld),
  id = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  od = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ud = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ud[e]) ? !!t[e] : !1;
}
function No() {
  return sd;
}
var ad = W({}, or, {
    key: function (e) {
      if (e.key) {
        var t = id[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? od[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: No,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cd = Ee(ad),
  fd = W({}, Sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cu = Ee(fd),
  dd = W({}, or, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: No,
  }),
  pd = Ee(dd),
  hd = W({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  md = Ee(hd),
  vd = W({}, Sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  yd = Ee(vd),
  gd = [9, 13, 27, 32],
  Lo = Ke && "CompositionEvent" in window,
  zn = null;
Ke && "documentMode" in document && (zn = document.documentMode);
var wd = Ke && "TextEvent" in window && !zn,
  da = Ke && (!Lo || (zn && 8 < zn && 11 >= zn)),
  _u = " ",
  Pu = !1;
function pa(e, t) {
  switch (e) {
    case "keyup":
      return gd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ha(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Sd(e, t) {
  switch (e) {
    case "compositionend":
      return ha(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pu = !0), _u);
    case "textInput":
      return (e = t.data), e === _u && Pu ? null : e;
    default:
      return null;
  }
}
function kd(e, t) {
  if (At)
    return e === "compositionend" || (!Lo && pa(e, t))
      ? ((e = fa()), (jr = _o = nt = null), (At = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return da && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ed = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ed[e.type] : t === "textarea";
}
function ma(e, t, n, r) {
  Ks(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new Po("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var On = null,
  Hn = null;
function xd(e) {
  Pa(e, 0);
}
function kl(e) {
  var t = Ht(e);
  if ($s(t)) return e;
}
function Cd(e, t) {
  if (e === "change") return t;
}
var va = !1;
if (Ke) {
  var Gl;
  if (Ke) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Lu = document.createElement("div");
      Lu.setAttribute("oninput", "return;"),
        (Zl = typeof Lu.oninput == "function");
    }
    Gl = Zl;
  } else Gl = !1;
  va = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  On && (On.detachEvent("onpropertychange", ya), (Hn = On = null));
}
function ya(e) {
  if (e.propertyName === "value" && kl(Hn)) {
    var t = [];
    ma(t, Hn, e, So(e)), Zs(xd, t);
  }
}
function _d(e, t, n) {
  e === "focusin"
    ? (Tu(), (On = t), (Hn = n), On.attachEvent("onpropertychange", ya))
    : e === "focusout" && Tu();
}
function Pd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(Hn);
}
function Nd(e, t) {
  if (e === "click") return kl(t);
}
function Ld(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function Td(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Td;
function Qn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!hi.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Ru(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ru(n);
  }
}
function ga(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ga(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wa() {
  for (var e = window, t = Wr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wr(e.document);
  }
  return t;
}
function To(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Rd(e) {
  var t = wa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ga(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && To(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = zu(n, i));
        var o = zu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zd = Ke && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  ji = null,
  jn = null,
  Ii = !1;
function Ou(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii ||
    Vt == null ||
    Vt !== Wr(r) ||
    ((r = Vt),
    "selectionStart" in r && To(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jn && Qn(jn, r)) ||
      ((jn = r),
      (r = Zr(ji, "onSelect")),
      0 < r.length &&
        ((t = new Po("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: kr("Animation", "AnimationEnd"),
    animationiteration: kr("Animation", "AnimationIteration"),
    animationstart: kr("Animation", "AnimationStart"),
    transitionend: kr("Transition", "TransitionEnd"),
  },
  Jl = {},
  Sa = {};
Ke &&
  ((Sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function El(e) {
  if (Jl[e]) return Jl[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sa) return (Jl[e] = t[n]);
  return e;
}
var ka = El("animationend"),
  Ea = El("animationiteration"),
  xa = El("animationstart"),
  Ca = El("transitionend"),
  _a = new Map(),
  ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  _a.set(e, t), It(t, [e]);
}
for (var ql = 0; ql < ju.length; ql++) {
  var bl = ju[ql],
    Od = bl.toLowerCase(),
    jd = bl[0].toUpperCase() + bl.slice(1);
  vt(Od, "on" + jd);
}
vt(ka, "onAnimationEnd");
vt(Ea, "onAnimationIteration");
vt(xa, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(Ca, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function Iu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Of(r, t, void 0, e), (e.currentTarget = null);
}
function Pa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Iu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Iu(l, u, a), (i = s);
        }
    }
  }
  if (Qr) throw ((e = Ti), (Qr = !1), (Ti = null), e);
}
function F(e, t) {
  var n = t[$i];
  n === void 0 && (n = t[$i] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Na(t, e, 2, !1), n.add(r));
}
function ei(e, t, n) {
  var r = 0;
  t && (r |= 4), Na(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Is.forEach(function (n) {
        n !== "selectionchange" && (Id.has(n) || ei(n, !1, e), ei(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), ei("selectionchange", !1, t));
  }
}
function Na(e, t, n, r) {
  switch (ca(t)) {
    case 1:
      var l = Xf;
      break;
    case 4:
      l = Gf;
      break;
    default:
      l = Co;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ti(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ct(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Zs(function () {
    var a = i,
      h = So(n),
      p = [];
    e: {
      var m = _a.get(e);
      if (m !== void 0) {
        var g = Po,
          y = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = cd;
            break;
          case "focusin":
            (y = "focus"), (g = Xl);
            break;
          case "focusout":
            (y = "blur"), (g = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = pd;
            break;
          case ka:
          case Ea:
          case xa:
            g = td;
            break;
          case Ca:
            g = md;
            break;
          case "scroll":
            g = Zf;
            break;
          case "wheel":
            g = yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = rd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Cu;
        }
        var w = (t & 4) !== 0,
          x = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Bn(c, f)), v != null && w.push(Yn(c, v, d)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new g(m, y, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Pi &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ct(y) || y[Ye]))
        )
          break e;
        if (
          (g || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = a),
              (y = y ? Ct(y) : null),
              y !== null &&
                ((x = Mt(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = a)),
          g !== y)
        ) {
          if (
            ((w = Eu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Cu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (x = g == null ? m : Ht(g)),
            (d = y == null ? m : Ht(y)),
            (m = new w(v, c + "leave", g, n, h)),
            (m.target = x),
            (m.relatedTarget = d),
            (v = null),
            Ct(h) === a &&
              ((w = new w(f, c + "enter", y, n, h)),
              (w.target = d),
              (w.relatedTarget = x),
              (v = w)),
            (x = v),
            g && y)
          )
            t: {
              for (w = g, f = y, c = 0, d = w; d; d = Ut(d)) c++;
              for (d = 0, v = f; v; v = Ut(v)) d++;
              for (; 0 < c - d; ) (w = Ut(w)), c--;
              for (; 0 < d - c; ) (f = Ut(f)), d--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Ut(w)), (f = Ut(f));
              }
              w = null;
            }
          else w = null;
          g !== null && Mu(p, m, g, w, !1),
            y !== null && x !== null && Mu(p, x, y, w, !0);
        }
      }
      e: {
        if (
          ((m = a ? Ht(a) : window),
          (g = m.nodeName && m.nodeName.toLowerCase()),
          g === "select" || (g === "input" && m.type === "file"))
        )
          var E = Cd;
        else if (Nu(m))
          if (va) E = Ld;
          else {
            E = Pd;
            var P = _d;
          }
        else
          (g = m.nodeName) &&
            g.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Nd);
        if (E && (E = E(e, a))) {
          ma(p, E, n, h);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            ki(m, "number", m.value);
      }
      switch (((P = a ? Ht(a) : window), e)) {
        case "focusin":
          (Nu(P) || P.contentEditable === "true") &&
            ((Vt = P), (ji = a), (jn = null));
          break;
        case "focusout":
          jn = ji = Vt = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ii = !1), Ou(p, n, h);
          break;
        case "selectionchange":
          if (zd) break;
        case "keydown":
        case "keyup":
          Ou(p, n, h);
      }
      var N;
      if (Lo)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        At
          ? pa(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (da &&
          n.locale !== "ko" &&
          (At || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && At && (N = fa())
            : ((nt = h),
              (_o = "value" in nt ? nt.value : nt.textContent),
              (At = !0))),
        (P = Zr(a, L)),
        0 < P.length &&
          ((L = new xu(L, e, null, n, h)),
          p.push({ event: L, listeners: P }),
          N ? (L.data = N) : ((N = ha(n)), N !== null && (L.data = N)))),
        (N = wd ? Sd(e, n) : kd(e, n)) &&
          ((a = Zr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new xu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = N)));
    }
    Pa(p, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Bn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Bn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Bn(n, i)), s != null && o.unshift(Yn(n, s, u)))
        : l || ((s = Bn(n, i)), s != null && o.push(Yn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Md = /\r\n?/g,
  Dd = /\u0000|\uFFFD/g;
function Du(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Md,
      `
`
    )
    .replace(Dd, "");
}
function xr(e, t, n) {
  if (((t = Du(t)), Du(e) !== t && n)) throw Error(S(425));
}
function Jr() {}
var Mi = null,
  Di = null;
function Fi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0,
  Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Fu = typeof Promise == "function" ? Promise : void 0,
  Ud =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Fu < "u"
      ? function (e) {
          return Fu.resolve(null).then(e).catch($d);
        }
      : Ui;
function $d(e) {
  setTimeout(function () {
    throw e;
  });
}
function ni(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Wn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Uu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + hn,
  Xn = "__reactProps$" + hn,
  Ye = "__reactContainer$" + hn,
  $i = "__reactEvents$" + hn,
  Bd = "__reactListeners$" + hn,
  Ad = "__reactHandles$" + hn;
function Ct(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Uu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Uu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ur(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function xl(e) {
  return e[Xn] || null;
}
var Bi = [],
  Qt = -1;
function yt(e) {
  return { current: e };
}
function U(e) {
  0 > Qt || ((e.current = Bi[Qt]), (Bi[Qt] = null), Qt--);
}
function D(e, t) {
  Qt++, (Bi[Qt] = e.current), (e.current = t);
}
var mt = {},
  oe = yt(mt),
  pe = yt(!1),
  Tt = mt;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  U(pe), U(oe);
}
function $u(e, t, n) {
  if (oe.current !== mt) throw Error(S(168));
  D(oe, t), D(pe, n);
}
function La(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, _f(e) || "Unknown", l));
  return W({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (Tt = oe.current),
    D(oe, e),
    D(pe, pe.current),
    !0
  );
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = La(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      D(oe, e))
    : U(pe),
    D(pe, n);
}
var Ve = null,
  Cl = !1,
  ri = !1;
function Ta(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Vd(e) {
  (Cl = !0), Ta(e);
}
function gt() {
  if (!ri && Ve !== null) {
    ri = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (Cl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), ea(ko, gt), l);
    } finally {
      (M = t), (ri = !1);
    }
  }
  return null;
}
var Kt = [],
  Yt = 0,
  el = null,
  tl = 0,
  xe = [],
  Ce = 0,
  Rt = null,
  We = 1,
  He = "";
function Et(e, t) {
  (Kt[Yt++] = tl), (Kt[Yt++] = el), (el = e), (tl = t);
}
function Ra(e, t, n) {
  (xe[Ce++] = We), (xe[Ce++] = He), (xe[Ce++] = Rt), (Rt = e);
  var r = We;
  e = He;
  var l = 32 - je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - je(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - je(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (We = (1 << i) | (n << l) | r), (He = e);
}
function Ro(e) {
  e.return !== null && (Et(e, 1), Ra(e, 1, 0));
}
function zo(e) {
  for (; e === el; )
    (el = Kt[--Yt]), (Kt[Yt] = null), (tl = Kt[--Yt]), (Kt[Yt] = null);
  for (; e === Rt; )
    (Rt = xe[--Ce]),
      (xe[Ce] = null),
      (He = xe[--Ce]),
      (xe[Ce] = null),
      (We = xe[--Ce]),
      (xe[Ce] = null);
}
var we = null,
  ge = null,
  $ = !1,
  Oe = null;
function za(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (we = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (we = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Rt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (we = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ai(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (Ai(e)) throw Error(S(418));
        t = st(n.nextSibling);
        var r = we;
        t && Au(e, t)
          ? za(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e));
      }
    } else {
      if (Ai(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (we = e);
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  we = e;
}
function Cr(e) {
  if (e !== we) return !1;
  if (!$) return Vu(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Ai(e)) throw (Oa(), Error(S(418)));
    for (; t; ) za(e, t), (t = st(t.nextSibling));
  }
  if ((Vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = we ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function Oa() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function on() {
  (ge = we = null), ($ = !1);
}
function Oo(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var Wd = Ze.ReactCurrentBatchConfig;
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wu(e) {
  var t = e._init;
  return t(e._payload);
}
function ja(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = ci(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === Bt
      ? h(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Wu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = En(f, c, d)), (v.return = f), v)
      : ((v = Ar(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = En(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = fi(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Lt(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ci("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case hr:
          return (
            (d = Ar(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = En(f, null, c)),
            (d.return = f),
            d
          );
        case $t:
          return (c = fi(c, f.mode, d)), (c.return = f), c;
        case qe:
          var v = c._init;
          return p(f, v(c._payload), d);
      }
      if (Pn(c) || yn(c))
        return (c = Lt(c, f.mode, d, null)), (c.return = f), c;
      _r(f, c);
    }
    return null;
  }
  function m(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hr:
          return d.key === E ? s(f, c, d, v) : null;
        case $t:
          return d.key === E ? a(f, c, d, v) : null;
        case qe:
          return (E = d._init), m(f, c, E(d._payload), v);
      }
      if (Pn(d) || yn(d)) return E !== null ? null : h(f, c, d, v, null);
      _r(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(c, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case $t:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case qe:
          var P = v._init;
          return g(f, c, d, P(v._payload), E);
      }
      if (Pn(v) || yn(v)) return (f = f.get(d) || null), h(c, f, v, E, null);
      _r(c, v);
    }
    return null;
  }
  function y(f, c, d, v) {
    for (
      var E = null, P = null, N = c, L = (c = 0), B = null;
      N !== null && L < d.length;
      L++
    ) {
      N.index > L ? ((B = N), (N = null)) : (B = N.sibling);
      var z = m(f, N, d[L], v);
      if (z === null) {
        N === null && (N = B);
        break;
      }
      e && N && z.alternate === null && t(f, N),
        (c = i(z, c, L)),
        P === null ? (E = z) : (P.sibling = z),
        (P = z),
        (N = B);
    }
    if (L === d.length) return n(f, N), $ && Et(f, L), E;
    if (N === null) {
      for (; L < d.length; L++)
        (N = p(f, d[L], v)),
          N !== null &&
            ((c = i(N, c, L)), P === null ? (E = N) : (P.sibling = N), (P = N));
      return $ && Et(f, L), E;
    }
    for (N = r(f, N); L < d.length; L++)
      (B = g(N, f, L, d[L], v)),
        B !== null &&
          (e && B.alternate !== null && N.delete(B.key === null ? L : B.key),
          (c = i(B, c, L)),
          P === null ? (E = B) : (P.sibling = B),
          (P = B));
    return (
      e &&
        N.forEach(function (ve) {
          return t(f, ve);
        }),
      $ && Et(f, L),
      E
    );
  }
  function w(f, c, d, v) {
    var E = yn(d);
    if (typeof E != "function") throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var P = (E = null), N = c, L = (c = 0), B = null, z = d.next();
      N !== null && !z.done;
      L++, z = d.next()
    ) {
      N.index > L ? ((B = N), (N = null)) : (B = N.sibling);
      var ve = m(f, N, z.value, v);
      if (ve === null) {
        N === null && (N = B);
        break;
      }
      e && N && ve.alternate === null && t(f, N),
        (c = i(ve, c, L)),
        P === null ? (E = ve) : (P.sibling = ve),
        (P = ve),
        (N = B);
    }
    if (z.done) return n(f, N), $ && Et(f, L), E;
    if (N === null) {
      for (; !z.done; L++, z = d.next())
        (z = p(f, z.value, v)),
          z !== null &&
            ((c = i(z, c, L)), P === null ? (E = z) : (P.sibling = z), (P = z));
      return $ && Et(f, L), E;
    }
    for (N = r(f, N); !z.done; L++, z = d.next())
      (z = g(N, f, L, z.value, v)),
        z !== null &&
          (e && z.alternate !== null && N.delete(z.key === null ? L : z.key),
          (c = i(z, c, L)),
          P === null ? (E = z) : (P.sibling = z),
          (P = z));
    return (
      e &&
        N.forEach(function (mn) {
          return t(f, mn);
        }),
      $ && Et(f, L),
      E
    );
  }
  function x(f, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Bt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case hr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === Bt)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Wu(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = En(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Bt
              ? ((c = Lt(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Ar(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = En(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case $t:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = fi(d, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case qe:
          return (P = d._init), x(f, c, P(d._payload), v);
      }
      if (Pn(d)) return y(f, c, d, v);
      if (yn(d)) return w(f, c, d, v);
      _r(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = ci(d, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return x;
}
var un = ja(!0),
  Ia = ja(!1),
  nl = yt(null),
  rl = null,
  Xt = null,
  jo = null;
function Io() {
  jo = Xt = rl = null;
}
function Mo(e) {
  var t = nl.current;
  U(nl), (e._currentValue = t);
}
function Wi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function tn(e, t) {
  (rl = e),
    (jo = Xt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (jo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xt === null)) {
      if (rl === null) throw Error(S(308));
      (Xt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else Xt = Xt.next = e;
  return t;
}
var _t = null;
function Do(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Ma(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Do(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Fo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Da(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Do(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
function Hu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        g = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(g, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(g, p, m) : y),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (g = {
          eventTime: g,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = g), (s = p)) : (h = h.next = g),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Ot |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Qu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var sr = {},
  Be = yt(sr),
  Gn = yt(sr),
  Zn = yt(sr);
function Pt(e) {
  if (e === sr) throw Error(S(174));
  return e;
}
function Uo(e, t) {
  switch ((D(Zn, t), D(Gn, e), D(Be, sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e));
  }
  U(Be), D(Be, t);
}
function sn() {
  U(Be), U(Gn), U(Zn);
}
function Fa(e) {
  Pt(Zn.current);
  var t = Pt(Be.current),
    n = xi(t, e.type);
  t !== n && (D(Gn, e), D(Be, n));
}
function $o(e) {
  Gn.current === e && (U(Be), U(Gn));
}
var A = yt(0);
function il(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var li = [];
function Bo() {
  for (var e = 0; e < li.length; e++)
    li[e]._workInProgressVersionPrimary = null;
  li.length = 0;
}
var Dr = Ze.ReactCurrentDispatcher,
  ii = Ze.ReactCurrentBatchConfig,
  zt = 0,
  V = null,
  G = null,
  q = null,
  ol = !1,
  In = !1,
  Jn = 0,
  Hd = 0;
function re() {
  throw Error(S(321));
}
function Ao(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, i) {
  if (
    ((zt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? Xd : Gd),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (Jn = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Dr.current = Zd),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Dr.current = ul),
    (t = G !== null && G.next !== null),
    (zt = 0),
    (q = G = V = null),
    (ol = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Wo() {
  var e = Jn !== 0;
  return (Jn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (V.memoizedState = q = e) : (q = q.next = e), q;
}
function Le() {
  if (G === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(S(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oi(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (V.lanes |= h),
          (Ot |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (Ot |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ua() {}
function $a(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Ho(Va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bn(9, Aa.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    zt & 30 || Ba(n, t, l);
  }
  return l;
}
function Ba(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Aa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wa(t) && Ha(e);
}
function Va(e, t, n) {
  return n(function () {
    Wa(t) && Ha(e);
  });
}
function Wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Ha(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Ku(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Yd.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qa() {
  return Le().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Fe();
  (V.flags |= e),
    (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function _l(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Ao(r, o.deps))) {
      l.memoizedState = bn(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function Yu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Ho(e, t) {
  return _l(2048, 8, e, t);
}
function Ka(e, t) {
  return _l(4, 2, e, t);
}
function Ya(e, t) {
  return _l(4, 4, e, t);
}
function Xa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ga(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _l(4, 4, Xa.bind(null, t, e), n)
  );
}
function Qo() {}
function Za(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ja(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qa(e, t, n) {
  return zt & 21
    ? (Me(n, t) || ((n = ra()), (V.lanes |= n), (Ot |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Qd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ii.transition;
  ii.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (ii.transition = r);
  }
}
function ba() {
  return Le().memoizedState;
}
function Kd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ec(e))
  )
    tc(t, n);
  else if (((n = Ma(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), nc(n, t, r);
  }
}
function Yd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Do(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ma(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), nc(n, t, r));
  }
}
function ec(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function tc(e, t) {
  In = ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function nc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eo(e, n);
  }
}
var ul = {
    readContext: Ne,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, Xa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Kd.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ku,
    useDebugValue: Qo,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Ku(!1),
        t = e[0];
      return (e = Qd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        zt & 30 || Ba(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Yu(Va.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bn(9, Aa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Hd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gd = {
    readContext: Ne,
    useCallback: Za,
    useContext: Ne,
    useEffect: Ho,
    useImperativeHandle: Ga,
    useInsertionEffect: Ka,
    useLayoutEffect: Ya,
    useMemo: Ja,
    useReducer: oi,
    useRef: Qa,
    useState: function () {
      return oi(qn);
    },
    useDebugValue: Qo,
    useDeferredValue: function (e) {
      var t = Le();
      return qa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = oi(qn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ua,
    useSyncExternalStore: $a,
    useId: ba,
    unstable_isNewReconciler: !1,
  },
  Zd = {
    readContext: Ne,
    useCallback: Za,
    useContext: Ne,
    useEffect: Ho,
    useImperativeHandle: Ga,
    useInsertionEffect: Ka,
    useLayoutEffect: Ya,
    useMemo: Ja,
    useReducer: ui,
    useRef: Qa,
    useState: function () {
      return ui(qn);
    },
    useDebugValue: Qo,
    useDeferredValue: function (e) {
      var t = Le();
      return G === null ? (t.memoizedState = e) : qa(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(qn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ua,
    useSyncExternalStore: $a,
    useId: ba,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Mr(t, e, r));
  },
};
function Xu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(l, i)
      : !0
  );
}
function rc(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = he(t) ? Tt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ln(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Gu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Qi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = he(t) ? Tt : oe.current), (l.context = ln(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Hi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function an(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Cf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ki(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jd = typeof WeakMap == "function" ? WeakMap : Map;
function lc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (no = r)), Ki(e, t);
    }),
    n
  );
}
function ic(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ki(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ki(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = fp.bind(null, e, t, n)), t.then(e, e));
}
function Ju(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qd = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ia(t, null, n, r) : un(t, e.child, n, r);
}
function bu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    tn(t, l),
    (r = Vo(e, t, n, r, i, l)),
    (n = Wo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && Ro(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function es(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !bo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), oc(e, t, i, r, l))
      : ((e = Ar(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function oc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Yi(e, t, n, r, l);
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(Zt, ye),
        (ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Zt, ye),
          (ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(Zt, ye),
        (ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Zt, ye),
      (ye |= r);
  return ue(e, t, l, n), t.child;
}
function sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Yi(e, t, n, r, l) {
  var i = he(n) ? Tt : oe.current;
  return (
    (i = ln(t, i)),
    tn(t, l),
    (n = Vo(e, t, n, r, i, l)),
    (r = Wo()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && Ro(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function ts(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if ((tn(t, l), t.stateNode === null))
    Ur(e, t), rc(t, n, r), Qi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ne(a))
      : ((a = he(n) ? Tt : oe.current), (a = ln(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Gu(t, o, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      ll(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof h == "function" && (Hi(t, n, h, r), (s = t.memoizedState)),
          (u = be || Xu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Da(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = he(n) ? Tt : oe.current), (s = ln(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && Gu(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      ll(t, r, o, l);
    var y = t.memoizedState;
    u !== p || m !== y || pe.current || be
      ? (typeof g == "function" && (Hi(t, n, g, r), (y = t.memoizedState)),
        (a = be || Xu(t, n, a, r, m, y, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xi(e, t, n, r, i, l);
}
function Xi(e, t, n, r, l, i) {
  sc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Bu(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (qd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, i)), (t.child = un(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Bu(t, n, !0),
    t.child
  );
}
function ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    Uo(e, t.containerInfo);
}
function ns(e, t, n, r, l) {
  return on(), Oo(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Gi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(A, l & 1),
    e === null)
  )
    return (
      Vi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Tl(o, r, 0, null)),
              (e = Lt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zi(n)),
              (t.memoizedState = Gi),
              e)
            : Ko(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return bd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Lt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ko(e, t) {
  return (
    (t = Tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && Oo(r),
    un(t, e.child, null, n),
    (e = Ko(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = si(Error(S(422)))), Pr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Tl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Lt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && un(t, e.child, null, o),
        (t.child.memoizedState = Zi(o)),
        (t.memoizedState = Gi),
        i);
  if (!(t.mode & 1)) return Pr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = si(i, r, void 0)), Pr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return qo(), (r = si(Error(S(421)))), Pr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = st(l.nextSibling)),
      (we = t),
      ($ = !0),
      (Oe = null),
      e !== null &&
        ((xe[Ce++] = We),
        (xe[Ce++] = He),
        (xe[Ce++] = Rt),
        (We = e.id),
        (He = e.overflow),
        (Rt = t)),
      (t = Ko(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Wi(e.return, t, n);
}
function ai(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function fc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
        else if (e.tag === 19) rs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && il(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ai(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && il(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ai(t, !0, n, null, i);
        break;
      case "together":
        ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ot |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ep(e, t, n) {
  switch (t.tag) {
    case 3:
      ac(t), on();
      break;
    case 5:
      Fa(t);
      break;
    case 1:
      he(t.type) && br(t);
      break;
    case 4:
      Uo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? cc(e, t, n)
          : (D(A, A.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      D(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uc(e, t, n);
  }
  return Ge(e, t, n);
}
var dc, Ji, pc, hc;
dc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ji = function () {};
pc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Pt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = wi(e, l)), (r = wi(e, r)), (i = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ei(e, l)), (r = Ei(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    Ci(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Un.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && F("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
hc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function tp(e, t, n) {
  var r = t.pendingProps;
  switch ((zo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && qr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sn(),
        U(pe),
        U(oe),
        Bo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (io(Oe), (Oe = null)))),
        Ji(e, t),
        le(t),
        null
      );
    case 5:
      $o(t);
      var l = Pt(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = Pt(Be.current)), Cr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) F(Ln[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              du(r, i), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              hu(r, i), F("invalid", r);
          }
          Ci(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Un.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              mr(r), pu(r, i, !0);
              break;
            case "textarea":
              mr(r), mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Xn] = r),
            dc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = _i(n, r)), n)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) F(Ln[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                du(e, r), (l = wi(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                hu(e, r), (l = Ei(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            Ci(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Qs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ws(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && $n(e, s)
                    : typeof s == "number" && $n(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Un.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && F("scroll", e)
                      : s != null && vo(e, i, s, o));
              }
            switch (n) {
              case "input":
                mr(e), pu(e, r, !1);
                break;
              case "textarea":
                mr(e), mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Pt(Zn.current)), Pt(Be.current), Cr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = we), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          Oa(), on(), (t.flags |= 98560), (i = !1);
        else if (((i = Cr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[Ue] = t;
          } else
            on(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Oe !== null && (io(Oe), (Oe = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? Z === 0 && (Z = 3) : qo())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        sn(), Ji(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Mo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && qr(), le(t), null;
    case 19:
      if ((U(A), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) xn(i, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = il(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > cn &&
            ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = il(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * Y() - i.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = A.current),
          D(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Jo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ye & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function np(e, t) {
  switch ((zo(t), t.tag)) {
    case 1:
      return (
        he(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sn(),
        U(pe),
        U(oe),
        Bo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $o(t), null;
    case 13:
      if ((U(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        on();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(A), null;
    case 4:
      return sn(), null;
    case 10:
      return Mo(t.type._context), null;
    case 22:
    case 23:
      return Jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ie = !1,
  rp = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Gt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function qi(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var ls = !1;
function lp(e, t) {
  if (((Mi = Xr), (e = wa()), To(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (m = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Di = { focusedElem: e, selectionRange: n }, Xr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (C = e);
    else
      for (; C !== null; ) {
        t = C;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    x = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Re(t.type, w),
                      x
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (C = e);
          break;
        }
        C = t.return;
      }
  return (y = ls), (ls = !1), y;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && qi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Xn], delete t[$i], delete t[Bd], delete t[Ad])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function is(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), (e = e.sibling);
}
function to(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (to(e, t, n), e = e.sibling; e !== null; ) to(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), (n = n.sibling);
}
function yc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Gt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        Je(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ni(e.parentNode, n)
              : e.nodeType === 1 && ni(e, n),
            Wn(e))
          : ni(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        Je(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && qi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Gt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          H(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Je(e, t, n), (ie = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function os(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rp()),
      t.forEach(function (r) {
        var l = pp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        yc(i, o, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        H(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), De(e), r & 4)) {
        try {
          Mn(3, e, e.return), Nl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          Mn(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(t, e), De(e), r & 512 && n !== null && Gt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        De(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Bs(l, i),
              _i(u, o);
            var a = _i(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? Qs(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Ws(l, p)
                : h === "children"
                ? $n(l, p)
                : vo(l, h, p, a);
            }
            switch (u) {
              case "input":
                Si(l, i);
                break;
              case "textarea":
                As(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? Jt(l, !!i.multiple, g, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jt(l, !!i.multiple, i.defaultValue, !0)
                      : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xn] = i;
          } catch (w) {
            H(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wn(t.containerInfo);
        } catch (w) {
          H(e, e.return, w);
        }
      break;
    case 4:
      Te(t, e), De(e);
      break;
    case 13:
      Te(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Go = Y())),
        r & 4 && os(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Te(t, e), (ie = a)) : Te(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (p = C = h; C !== null; ) {
              switch (((m = C), (g = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, m, m.return);
                  break;
                case 1:
                  Gt(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      H(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Gt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ss(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = m), (C = g)) : ss(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Hs("display", o)));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                H(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), De(e), r & 4 && os(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), (r.flags &= -33));
          var i = is(e);
          to(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = is(e);
          eo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ip(e, t, n) {
  (C = e), wc(e);
}
function wc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Nr;
        var a = ie;
        if (((Nr = o), (ie = s) && !a))
          for (C = l; C !== null; )
            (o = C),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? as(l)
                : s !== null
                ? ((s.return = o), (C = s))
                : as(l);
        for (; i !== null; ) (C = i), wc(i), (i = i.sibling);
        (C = l), (Nr = u), (ie = a);
      }
      us(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (C = i)) : us(e);
  }
}
function us(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Qu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Wn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        ie || (t.flags & 512 && bi(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function ss(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (C = n);
      break;
    }
    C = t.return;
  }
}
function as(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var i = t.return;
          try {
            bi(t);
          } catch (s) {
            H(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bi(t);
          } catch (s) {
            H(t, o, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (C = u);
      break;
    }
    C = t.return;
  }
}
var op = Math.ceil,
  sl = Ze.ReactCurrentDispatcher,
  Yo = Ze.ReactCurrentOwner,
  Pe = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  X = null,
  te = 0,
  ye = 0,
  Zt = yt(0),
  Z = 0,
  er = null,
  Ot = 0,
  Ll = 0,
  Xo = 0,
  Dn = null,
  fe = null,
  Go = 0,
  cn = 1 / 0,
  Ae = null,
  al = !1,
  no = null,
  ct = null,
  Lr = !1,
  rt = null,
  cl = 0,
  Fn = 0,
  ro = null,
  $r = -1,
  Br = 0;
function se() {
  return I & 6 ? Y() : $r !== -1 ? $r : ($r = Y());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Wd.transition !== null
      ? (Br === 0 && (Br = ra()), Br)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ca(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Fn) throw ((Fn = 0), (ro = null), Error(S(185)));
  ir(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Ll |= n), Z === 4 && tt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((cn = Y() + 500), Cl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Wf(e, t);
  var r = Yr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && gu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gu(n), t === 1))
      e.tag === 0 ? Vd(cs.bind(null, e)) : Ta(cs.bind(null, e)),
        Ud(function () {
          !(I & 6) && gt();
        }),
        (n = null);
    else {
      switch (la(r)) {
        case 1:
          n = ko;
          break;
        case 4:
          n = ta;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = na;
          break;
        default:
          n = Kr;
      }
      n = Nc(n, Sc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sc(e, t) {
  if ((($r = -1), (Br = 0), I & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Yr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Ec();
    (b !== e || te !== t) && ((Ae = null), (cn = Y() + 500), Nt(e, t));
    do
      try {
        ap();
        break;
      } catch (u) {
        kc(e, u);
      }
    while (!0);
    Io(),
      (sl.current = i),
      (I = l),
      X !== null ? (t = 0) : ((b = null), (te = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = lo(e, l)))), t === 1)
    )
      throw ((n = er), Nt(e, 0), tt(e, r), me(e, Y()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !up(l) &&
          ((t = fl(e, r)),
          t === 2 && ((i = Ri(e)), i !== 0 && ((r = i), (t = lo(e, i)))),
          t === 1))
      )
        throw ((n = er), Nt(e, 0), tt(e, r), me(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          xt(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Go + 500 - Y()), 10 < t))
          ) {
            if (Yr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ui(xt.bind(null, e, fe, Ae), t);
            break;
          }
          xt(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - je(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * op(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ui(xt.bind(null, e, fe, Ae), r);
            break;
          }
          xt(e, fe, Ae);
          break;
        case 5:
          xt(e, fe, Ae);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === n ? Sc.bind(null, e) : null;
}
function lo(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = fl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && io(t)),
    e
  );
}
function io(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function up(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Xo,
      t &= ~Ll,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cs(e) {
  if (I & 6) throw Error(S(327));
  nn();
  var t = Yr(e, 0);
  if (!(t & 1)) return me(e, Y()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = lo(e, r)));
  }
  if (n === 1) throw ((n = er), Nt(e, 0), tt(e, t), me(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, fe, Ae),
    me(e, Y()),
    null
  );
}
function Zo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((cn = Y() + 500), Cl && gt());
  }
}
function jt(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && nn();
  var t = I;
  I |= 1;
  var n = Pe.transition,
    r = M;
  try {
    if (((Pe.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Pe.transition = n), (I = t), !(I & 6) && gt();
  }
}
function Jo() {
  (ye = Zt.current), U(Zt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fd(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((zo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          sn(), U(pe), U(oe), Bo();
          break;
        case 5:
          $o(r);
          break;
        case 4:
          sn();
          break;
        case 13:
          U(A);
          break;
        case 19:
          U(A);
          break;
        case 10:
          Mo(r.type._context);
          break;
        case 22:
        case 23:
          Jo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (X = e = dt(e.current, null)),
    (te = ye = t),
    (Z = 0),
    (er = null),
    (Xo = Ll = Ot = 0),
    (fe = Dn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function kc(e, t) {
  do {
    var n = X;
    try {
      if ((Io(), (Dr.current = ul), ol)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ol = !1;
      }
      if (
        ((zt = 0),
        (q = G = V = null),
        (In = !1),
        (Jn = 0),
        (Yo.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (er = t), (X = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = Ju(o);
          if (g !== null) {
            (g.flags &= -257),
              qu(g, o, u, i, t),
              g.mode & 1 && Zu(i, a, t),
              (t = g),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(i, a, t), qo();
              break e;
            }
            s = Error(S(426));
          }
        } else if ($ && u.mode & 1) {
          var x = Ju(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              qu(x, o, u, i, t),
              Oo(an(s, u));
            break e;
          }
        }
        (i = s = an(s, u)),
          Z !== 4 && (Z = 2),
          Dn === null ? (Dn = [i]) : Dn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = lc(i, s, t);
              Hu(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = ic(i, u, t);
                Hu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cc(n);
    } catch (E) {
      (t = E), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ec() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function qo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Ot & 268435455) && !(Ll & 268435455)) || tt(b, te);
}
function fl(e, t) {
  var n = I;
  I |= 2;
  var r = Ec();
  (b !== e || te !== t) && ((Ae = null), Nt(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      kc(e, l);
    }
  while (!0);
  if ((Io(), (I = n), (sl.current = r), X !== null)) throw Error(S(261));
  return (b = null), (te = 0), Z;
}
function sp() {
  for (; X !== null; ) xc(X);
}
function ap() {
  for (; X !== null && !If(); ) xc(X);
}
function xc(e) {
  var t = Pc(e.alternate, e, ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Cc(e) : (X = t),
    (Yo.current = null);
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = np(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (X = null);
        return;
      }
    } else if (((n = tp(n, t, ye)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function xt(e, t, n) {
  var r = M,
    l = Pe.transition;
  try {
    (Pe.transition = null), (M = 1), cp(e, t, n, r);
  } finally {
    (Pe.transition = l), (M = r);
  }
  return null;
}
function cp(e, t, n, r) {
  do nn();
  while (rt !== null);
  if (I & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Hf(e, i),
    e === b && ((X = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      Nc(Kr, function () {
        return nn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pe.transition), (Pe.transition = null);
    var o = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Yo.current = null),
      lp(e, n),
      gc(n, e),
      Rd(Di),
      (Xr = !!Mi),
      (Di = Mi = null),
      (e.current = n),
      ip(n),
      Mf(),
      (I = u),
      (M = o),
      (Pe.transition = i);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (rt = e), (cl = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    Uf(n.stateNode),
    me(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = no), (no = null), e);
  return (
    cl & 1 && e.tag !== 0 && nn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ro ? Fn++ : ((Fn = 0), (ro = e))) : (Fn = 0),
    gt(),
    null
  );
}
function nn() {
  if (rt !== null) {
    var e = la(cl),
      t = Pe.transition,
      n = M;
    try {
      if (((Pe.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (cl = 0), I & 6)) throw Error(S(331));
        var l = I;
        for (I |= 4, C = e.current; C !== null; ) {
          var i = C,
            o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (C = a; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (C = p);
                  else
                    for (; C !== null; ) {
                      h = C;
                      var m = h.sibling,
                        g = h.return;
                      if ((mc(h), h === a)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = g), (C = m);
                        break;
                      }
                      C = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (C = o);
          else
            e: for (; C !== null; ) {
              if (((i = C), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (C = f);
                break e;
              }
              C = i.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (C = d);
          else
            e: for (o = c; C !== null; ) {
              if (((u = C), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, u);
                  }
                } catch (E) {
                  H(u, u.return, E);
                }
              if (u === o) {
                C = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (C = v);
                break e;
              }
              C = u.return;
            }
        }
        if (
          ((I = l), gt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Pe.transition = t);
    }
  }
  return !1;
}
function fs(e, t, n) {
  (t = an(n, t)),
    (t = lc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (ir(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) fs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = an(n, e)),
            (e = ic(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (ir(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (Z === 4 || (Z === 3 && (te & 130023424) === te && 500 > Y() - Go)
        ? Nt(e, 0)
        : (Xo |= n)),
    me(e, t);
}
function _c(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (ir(e, t, n), me(e, n));
}
function dp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _c(e, n);
}
function pp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), _c(e, n);
}
var Pc;
Pc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), ep(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && Ra(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = ln(t, oe.current);
      tn(t, n), (l = Vo(null, t, r, e, l, n));
      var i = Wo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), br(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Fo(t),
            (l.updater = Pl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Qi(t, r, e, n),
            (t = Xi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Ro(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = mp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Yi(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = bu(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Yi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        ts(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ac(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Da(e, t),
          ll(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = an(Error(S(423)), t)), (t = ns(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = an(Error(S(424)), t)), (t = ns(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                we = t,
                $ = !0,
                Oe = null,
                n = Ia(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((on(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fa(t),
        e === null && Vi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Fi(r, l) ? (o = null) : i !== null && Fi(r, i) && (t.flags |= 32),
        sc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return cc(e, t, n);
    case 4:
      return (
        Uo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        bu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(nl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Wi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Wi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        es(e, t, r, l, n)
      );
    case 15:
      return oc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ur(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), br(t)) : (e = !1),
        tn(t, n),
        rc(t, r, l),
        Qi(t, r, l, n),
        Xi(null, t, r, !0, e, n)
      );
    case 19:
      return fc(e, t, n);
    case 22:
      return uc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Nc(e, t) {
  return ea(e, t);
}
function hp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function _e(e, t, n, r) {
  return new hp(e, t, n, r);
}
function bo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mp(e) {
  if (typeof e == "function") return bo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === go)) return 11;
    if (e === wo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ar(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) bo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Bt:
        return Lt(n.children, l, i, t);
      case yo:
        (o = 8), (l |= 8);
        break;
      case mi:
        return (
          (e = _e(12, n, t, l | 2)), (e.elementType = mi), (e.lanes = i), e
        );
      case vi:
        return (e = _e(13, n, t, l)), (e.elementType = vi), (e.lanes = i), e;
      case yi:
        return (e = _e(19, n, t, l)), (e.elementType = yi), (e.lanes = i), e;
      case Fs:
        return Tl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ms:
              o = 10;
              break e;
            case Ds:
              o = 9;
              break e;
            case go:
              o = 11;
              break e;
            case wo:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Lt(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Tl(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Fs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ci(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function fi(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function eu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new vp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = _e(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fo(i),
    e
  );
}
function yp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return La(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = eu(n, r, !0, e, l, i, o, u, s)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    ir(e, l, r),
    me(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Ie(e, l, o, i), Mr(e, l, o)),
    o
  );
}
function dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ds(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  ds(e, t), (e = e.alternate) && ds(e, t);
}
function gp() {
  return null;
}
var Rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function nu(e) {
  this._internalRoot = e;
}
zl.prototype.render = nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Rl(e, t, null, null);
};
zl.prototype.unmount = nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function () {
      Rl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ua();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && aa(e);
  }
};
function ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ps() {}
function wp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = dl(o);
        i.call(a);
      };
    }
    var o = Tc(t, r, e, 0, null, !1, !1, "", ps);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Kn(e.nodeType === 8 ? e.parentNode : e),
      jt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = dl(s);
      u.call(a);
    };
  }
  var s = eu(e, 0, !1, null, null, !1, !1, "", ps);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      Rl(t, s, n, r);
    }),
    s
  );
}
function jl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = dl(o);
        u.call(s);
      };
    }
    Rl(t, o, e, l);
  } else o = wp(n, t, e, l, r);
  return dl(o);
}
ia = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (Eo(t, n | 1), me(t, Y()), !(I & 6) && ((cn = Y() + 500), gt()));
      }
      break;
    case 13:
      jt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        tu(e, 1);
  }
};
xo = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
oa = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    tu(e, t);
  }
};
ua = function () {
  return M;
};
sa = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Ni = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Si(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xl(r);
            if (!l) throw Error(S(90));
            $s(r), Si(r, l);
          }
        }
      }
      break;
    case "textarea":
      As(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jt(e, !!n.multiple, t, !1);
  }
};
Xs = Zo;
Gs = jt;
var Sp = { usingClientEntryPoint: !1, Events: [ur, Ht, xl, Ks, Ys, Zo] },
  Cn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kp = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || gp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (wl = Tr.inject(kp)), ($e = Tr);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(S(200));
  return yp(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!ru(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = eu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new nu(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = qs(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return jt(e);
};
ke.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return jl(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!ru(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Tc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Kn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
ke.render = function (e, t, n) {
  if (!Ol(t)) throw Error(S(200));
  return jl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (jt(function () {
        jl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Zo;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return jl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function zc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), (zs.exports = ke);
var Ep = zs.exports,
  Oc,
  hs = Ep;
(Oc = hs.createRoot), hs.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const ms = "popstate";
function xp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return pl(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : nr(l);
  }
  return jc(t, n, null, e);
}
function Cp(e) {
  e === void 0 && (e = {});
  function t(l, i) {
    let {
      pathname: o = "/",
      search: u = "",
      hash: s = "",
    } = Dt(l.location.hash.substr(1));
    return (
      !o.startsWith("/") && !o.startsWith(".") && (o = "/" + o),
      pl(
        "",
        { pathname: o, search: u, hash: s },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(l, i) {
    let o = l.document.querySelector("base"),
      u = "";
    if (o && o.getAttribute("href")) {
      let s = l.location.href,
        a = s.indexOf("#");
      u = a === -1 ? s : s.slice(0, a);
    }
    return u + "#" + (typeof i == "string" ? i : nr(i));
  }
  function r(l, i) {
    lu(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return jc(t, n, r, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function lu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _p() {
  return Math.random().toString(36).substr(2, 8);
}
function vs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function pl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    tr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || _p() }
    )
  );
}
function nr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function jc(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = lt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(tr({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    u = lt.Pop;
    let x = h(),
      f = x == null ? null : x - a;
    (a = x), s && s({ action: u, location: w.location, delta: f });
  }
  function m(x, f) {
    u = lt.Push;
    let c = pl(w.location, x, f);
    n && n(c, x), (a = h() + 1);
    let d = vs(c, a),
      v = w.createHref(c);
    try {
      o.pushState(d, "", v);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(v);
    }
    i && s && s({ action: u, location: w.location, delta: 1 });
  }
  function g(x, f) {
    u = lt.Replace;
    let c = pl(w.location, x, f);
    n && n(c, x), (a = h());
    let d = vs(c, a),
      v = w.createHref(c);
    o.replaceState(d, "", v),
      i && s && s({ action: u, location: w.location, delta: 0 });
  }
  function y(x) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof x == "string" ? x : nr(x);
    return (
      (c = c.replace(/ $/, "%20")),
      Q(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(x) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ms, p),
        (s = x),
        () => {
          l.removeEventListener(ms, p), (s = null);
        }
      );
    },
    createHref(x) {
      return t(l, x);
    },
    createURL: y,
    encodeLocation(x) {
      let f = y(x);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: g,
    go(x) {
      return o.go(x);
    },
  };
  return w;
}
var ys;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ys || (ys = {}));
function Pp(e, t, n) {
  return n === void 0 && (n = "/"), Np(e, t, n, !1);
}
function Np(e, t, n, r) {
  let l = typeof t == "string" ? Dt(t) : t,
    i = fn(l.pathname || "/", n);
  if (i == null) return null;
  let o = Ic(e);
  Lp(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let a = $p(i);
    u = Fp(o[s], a, r);
  }
  return u;
}
function Ic(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (Q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = pt([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Ic(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Mp(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of Mc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Mc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Mc(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Lp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Tp = /^:[\w-]+$/,
  Rp = 3,
  zp = 2,
  Op = 1,
  jp = 10,
  Ip = -2,
  gs = (e) => e === "*";
function Mp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gs) && (r += Ip),
    t && (r += zp),
    n
      .filter((l) => !gs(l))
      .reduce((l, i) => l + (Tp.test(i) ? Rp : i === "" ? Op : jp), r)
  );
}
function Dp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      a = u === r.length - 1,
      h = i === "/" ? t : t.slice(i.length) || "/",
      p = hl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: a },
        h
      ),
      m = s.route;
    if (
      (!p &&
        a &&
        n &&
        !r[r.length - 1].route.index &&
        (p = hl(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          h
        )),
      !p)
    )
      return null;
    Object.assign(l, p.params),
      o.push({
        params: l,
        pathname: pt([i, p.pathname]),
        pathnameBase: Wp(pt([i, p.pathnameBase])),
        route: m,
      }),
      p.pathnameBase !== "/" && (i = pt([i, p.pathnameBase]));
  }
  return o;
}
function hl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Up(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: g } = h;
      if (m === "*") {
        let w = u[p] || "";
        o = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = u[p];
      return (
        g && !y ? (a[m] = void 0) : (a[m] = (y || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Up(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    lu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function $p(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      lu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function fn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Bp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ap(n, t)) : t,
    search: Hp(r),
    hash: Qp(l),
  };
}
function Ap(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function di(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Dc(e, t) {
  let n = Vp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Fc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Dt(e))
    : ((l = tr({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        di("?", "pathname", "search", l)
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        di("#", "pathname", "hash", l)
      ),
      Q(!l.search || !l.search.includes("#"), di("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Bp(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Wp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Hp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Qp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Kp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Uc = ["post", "put", "patch", "delete"];
new Set(Uc);
const Yp = ["get", ...Uc];
new Set(Yp);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function rr() {
  return (
    (rr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rr.apply(this, arguments)
  );
}
const Il = k.createContext(null),
  $c = k.createContext(null),
  wt = k.createContext(null),
  Ml = k.createContext(null),
  Ft = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Bc = k.createContext(null);
function Xp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ar() || Q(!1);
  let { basename: r, navigator: l } = k.useContext(wt),
    { hash: i, pathname: o, search: u } = Dl(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : pt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function ar() {
  return k.useContext(Ml) != null;
}
function cr() {
  return ar() || Q(!1), k.useContext(Ml).location;
}
function Ac(e) {
  k.useContext(wt).static || k.useLayoutEffect(e);
}
function Gp() {
  let { isDataRoute: e } = k.useContext(Ft);
  return e ? sh() : Zp();
}
function Zp() {
  ar() || Q(!1);
  let e = k.useContext(Il),
    { basename: t, future: n, navigator: r } = k.useContext(wt),
    { matches: l } = k.useContext(Ft),
    { pathname: i } = cr(),
    o = JSON.stringify(Dc(l, n.v7_relativeSplatPath)),
    u = k.useRef(!1);
  return (
    Ac(() => {
      u.current = !0;
    }),
    k.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = Fc(a, JSON.parse(o), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : pt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function Dl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = k.useContext(wt),
    { matches: l } = k.useContext(Ft),
    { pathname: i } = cr(),
    o = JSON.stringify(Dc(l, r.v7_relativeSplatPath));
  return k.useMemo(() => Fc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Jp(e, t) {
  return qp(e, t);
}
function qp(e, t, n, r) {
  ar() || Q(!1);
  let { navigator: l } = k.useContext(wt),
    { matches: i } = k.useContext(Ft),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = cr(),
    h;
  if (t) {
    var p;
    let x = typeof t == "string" ? Dt(t) : t;
    s === "/" || ((p = x.pathname) != null && p.startsWith(s)) || Q(!1),
      (h = x);
  } else h = a;
  let m = h.pathname || "/",
    g = m;
  if (s !== "/") {
    let x = s.replace(/^\//, "").split("/");
    g = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let y = Pp(e, { pathname: g }),
    w = rh(
      y &&
        y.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, u, x.params),
            pathname: pt([
              s,
              l.encodeLocation
                ? l.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? s
                : pt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? k.createElement(
        Ml.Provider,
        {
          value: {
            location: rr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        w
      )
    : w;
}
function bp() {
  let e = uh(),
    t = Kp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? k.createElement("pre", { style: l }, n) : null,
    null
  );
}
const eh = k.createElement(bp, null);
class th extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          Ft.Provider,
          { value: this.props.routeContext },
          k.createElement(Bc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function nh(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = k.useContext(Il);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    k.createElement(Ft.Provider, { value: t }, r)
  );
}
function rh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = o.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: g } = n,
          y =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!g || g[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, m) => {
    let g,
      y = !1,
      w = null,
      x = null;
    n &&
      ((g = u && p.route.id ? u[p.route.id] : void 0),
      (w = p.route.errorElement || eh),
      s &&
        (a < 0 && m === 0
          ? ((y = !0), (x = null))
          : a === m &&
            ((y = !0), (x = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          g
            ? (d = w)
            : y
            ? (d = x)
            : p.route.Component
            ? (d = k.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          k.createElement(nh, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? k.createElement(th, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: g,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Vc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Vc || {}),
  ml = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ml || {});
function lh(e) {
  let t = k.useContext(Il);
  return t || Q(!1), t;
}
function ih(e) {
  let t = k.useContext($c);
  return t || Q(!1), t;
}
function oh(e) {
  let t = k.useContext(Ft);
  return t || Q(!1), t;
}
function Wc(e) {
  let t = oh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function uh() {
  var e;
  let t = k.useContext(Bc),
    n = ih(ml.UseRouteError),
    r = Wc(ml.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sh() {
  let { router: e } = lh(Vc.UseNavigateStable),
    t = Wc(ml.UseNavigateStable),
    n = k.useRef(!1);
  return (
    Ac(() => {
      n.current = !0;
    }),
    k.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, rr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Vr(e) {
  Q(!1);
}
function Hc(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  ar() && Q(!1);
  let s = t.replace(/^\/*/, "/"),
    a = k.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: rr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == "string" && (r = Dt(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: g = null,
      key: y = "default",
    } = r,
    w = k.useMemo(() => {
      let x = fn(h, s);
      return x == null
        ? null
        : {
            location: { pathname: x, search: p, hash: m, state: g, key: y },
            navigationType: l,
          };
    }, [s, h, p, m, g, y, l]);
  return w == null
    ? null
    : k.createElement(
        wt.Provider,
        { value: a },
        k.createElement(Ml.Provider, { children: n, value: w })
      );
}
function ah(e) {
  let { children: t, location: n } = e;
  return Jp(oo(t), n);
}
new Promise(() => {});
function oo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    k.Children.forEach(e, (r, l) => {
      if (!k.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === k.Fragment) {
        n.push.apply(n, oo(r.props.children, i));
        return;
      }
      r.type !== Vr && Q(!1), !r.props.index || !r.props.children || Q(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = oo(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
function Qc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ch(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function fh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ch(e);
}
const dh = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  ph = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  hh = "6";
try {
  window.__reactRouterVersion = hh;
} catch {}
const mh = k.createContext({ isTransitioning: !1 }),
  vh = "startTransition",
  yl = ff[vh];
function yh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = xp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = k.useCallback(
      (p) => {
        a && yl ? yl(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    k.useLayoutEffect(() => o.listen(h), [o, h]),
    k.createElement(Hc, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
function gh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = k.useRef();
  i.current == null && (i.current = Cp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = k.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = k.useCallback(
      (p) => {
        a && yl ? yl(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    k.useLayoutEffect(() => o.listen(h), [o, h]),
    k.createElement(Hc, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const wh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kh = k.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        viewTransition: p,
      } = t,
      m = Qc(t, dh),
      { basename: g } = k.useContext(wt),
      y,
      w = !1;
    if (typeof a == "string" && Sh.test(a) && ((y = a), wh))
      try {
        let d = new URL(window.location.href),
          v = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
          E = fn(v.pathname, g);
        v.origin === d.origin && E != null
          ? (a = E + v.search + v.hash)
          : (w = !0);
      } catch {}
    let x = Xp(a, { relative: l }),
      f = xh(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return k.createElement(
      "a",
      vl({}, m, { href: y || x, onClick: w || i ? r : c, ref: n, target: s })
    );
  }),
  pi = k.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: u,
        to: s,
        viewTransition: a,
        children: h,
      } = t,
      p = Qc(t, ph),
      m = Dl(s, { relative: p.relative }),
      g = cr(),
      y = k.useContext($c),
      { navigator: w, basename: x } = k.useContext(wt),
      f = y != null && Ch(m) && a === !0,
      c = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      d = g.pathname,
      v =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((d = d.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (c = c.toLowerCase())),
      v && x && (v = fn(v, x) || v);
    const E = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let P = d === c || (!o && d.startsWith(c) && d.charAt(E) === "/"),
      N =
        v != null &&
        (v === c || (!o && v.startsWith(c) && v.charAt(c.length) === "/")),
      L = { isActive: P, isPending: N, isTransitioning: f },
      B = P ? r : void 0,
      z;
    typeof i == "function"
      ? (z = i(L))
      : (z = [
          i,
          P ? "active" : null,
          N ? "pending" : null,
          f ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ve = typeof u == "function" ? u(L) : u;
    return k.createElement(
      kh,
      vl({}, p, {
        "aria-current": B,
        className: z,
        ref: n,
        style: ve,
        to: s,
        viewTransition: a,
      }),
      typeof h == "function" ? h(L) : h
    );
  });
var uo;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(uo || (uo = {}));
var ws;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ws || (ws = {}));
function Eh(e) {
  let t = k.useContext(Il);
  return t || Q(!1), t;
}
function xh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Gp(),
    a = cr(),
    h = Dl(e, { relative: o });
  return k.useCallback(
    (p) => {
      if (fh(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : nr(a) === nr(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
function Ch(e, t) {
  t === void 0 && (t = {});
  let n = k.useContext(mh);
  n == null && Q(!1);
  let { basename: r } = Eh(uo.useViewTransitionState),
    l = Dl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = fn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = fn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return hl(l.pathname, o) != null || hl(l.pathname, i) != null;
}
const _h = () => {
    const [e, t] = k.useState(!1);
    k.useEffect(() => {
      document.body.className = e ? "dark" : "light";
    }, [e]);
    const n = () => {
      t((r) => !r);
    };
    return R.jsx("button", {
      className: "theme-switch__btn",
      onClick: n,
      children: e ? "Light mode" : "Dark Mode",
    });
  },
  Ph = ({ toggleTheme: e, isDarkMode: t }) =>
    R.jsx("header", {
      children: R.jsx("div", {
        children: R.jsxs("nav", {
          className: "header__inner",
          children: [
            R.jsxs("ul", {
              className: "header__list",
              children: [
                R.jsx("li", {
                  children: R.jsx(pi, { to: "/", children: "Main" }),
                }),
                R.jsx("li", {
                  children: R.jsx(pi, {
                    to: "/contacts",
                    children: "Contacts",
                  }),
                }),
                R.jsx("li", {
                  children: R.jsx(pi, { to: "/about", children: "About Me" }),
                }),
              ],
            }),
            R.jsx(_h, { isDarkMode: t, toggleTheme: e }),
          ],
        }),
      }),
    }),
  Nh = () => {
    const [e, t] = k.useState([]),
      [n, r] = k.useState(""),
      l = () => {
        n.trim() && (t([...e, n]), r(""));
      },
      i = (o) => {
        const u = e.filter((s, a) => a !== o);
        t(u);
      };
    return R.jsxs("div", {
      className: "todo",
      children: [
        R.jsx("h1", { className: "todo__title", children: "TODO LIST" }),
        R.jsxs("div", {
          className: "todo__input-container",
          children: [
            R.jsx("input", {
              type: "text",
              className: "todo__input",
              value: n,
              onChange: (o) => r(o.target.value),
              placeholder: "Your task",
            }),
            R.jsx("button", {
              className: "todo__button",
              onClick: l,
              children: "Add",
            }),
          ],
        }),
        R.jsx("ul", {
          className: "todo__list",
          children: e.map((o, u) =>
            R.jsxs(
              "li",
              {
                className: "todo__item",
                children: [
                  o,
                  R.jsx("button", {
                    className: "todo__delete-button",
                    onClick: () => i(u),
                    children: "Удалить",
                  }),
                ],
              },
              u
            )
          ),
        }),
      ],
    });
  },
  Lh = () =>
    R.jsxs("div", {
      children: [
        R.jsx("h1", { children: "Contacts" }),
        R.jsx("p", { children: "This is page for Contacts" }),
      ],
    }),
  Th = () =>
    R.jsxs("div", {
      children: [
        R.jsx("h1", { children: "About Me" }),
        R.jsx("p", { children: "This is About Me Page" }),
      ],
    });
class Rh extends po.Component {
  constructor(t) {
    super(t), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentsDidCatch(t, n) {
    console.error("Error", t, n);
  }
  render() {
    return this.state.hasError
      ? R.jsx("h1", { children: "Something goes wrong" })
      : this.props.children;
  }
}
const zh = () => {
  const [e, t] = k.useState(!1),
    n = () => {
      t((r) => !r);
    };
  return R.jsx(yh, {
    children: R.jsxs(Rh, {
      children: [
        R.jsx(Ph, { toggleTheme: n, isDarkMode: e }),
        R.jsxs("div", {
          className: e ? "dark" : "light",
          children: [
            " ",
            R.jsxs(ah, {
              children: [
                R.jsx(Vr, { path: "/", element: R.jsx(Nh, {}) }),
                R.jsx(Vr, { path: "/contacts", element: R.jsx(Lh, {}) }),
                R.jsx(Vr, { path: "/about", element: R.jsx(Th, {}) }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
Oc(document.getElementById("root")).render(
  R.jsx(po.StrictMode, { children: R.jsx(gh, { children: R.jsx(zh, {}) }) })
);
