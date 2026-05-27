import "./chunk-G3PMV62Z.js";

// node_modules/fabric/dist/index.min.mjs
function t(t2, e3, s2) {
  return (e3 = (function(t3) {
    var e4 = (function(t4, e5) {
      if ("object" != typeof t4 || !t4) return t4;
      var s3 = t4[Symbol.toPrimitive];
      if (void 0 !== s3) {
        var i2 = s3.call(t4, e5);
        if ("object" != typeof i2) return i2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e5 ? String : Number)(t4);
    })(t3, "string");
    return "symbol" == typeof e4 ? e4 : e4 + "";
  })(e3)) in t2 ? Object.defineProperty(t2, e3, { value: s2, enumerable: true, configurable: true, writable: true }) : t2[e3] = s2, t2;
}
var e = class {
  constructor() {
    t(this, "browserShadowBlurConstant", 1), t(this, "DPI", 96), t(this, "devicePixelRatio", "undefined" != typeof window ? window.devicePixelRatio : 1), t(this, "perfLimitSizeTotal", 2097152), t(this, "maxCacheSideLimit", 4096), t(this, "minCacheSideLimit", 256), t(this, "disableStyleCopyPaste", false), t(this, "enableGLFiltering", true), t(this, "textureSize", 4096), t(this, "forceGLPutImageData", false), t(this, "cachesBoundsOfCurve", false), t(this, "fontPaths", {}), t(this, "NUM_FRACTION_DIGITS", 4);
  }
};
var s = new class extends e {
  constructor(t2) {
    super(), this.configure(t2);
  }
  configure() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, t2);
  }
  addFonts() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.fontPaths = { ...this.fontPaths, ...t2 };
  }
  removeFonts() {
    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).forEach((t2) => {
      delete this.fontPaths[t2];
    });
  }
  clearFonts() {
    this.fontPaths = {};
  }
  restoreDefaults(t2) {
    const s2 = new e(), i2 = (null == t2 ? void 0 : t2.reduce((t3, e3) => (t3[e3] = s2[e3], t3), {})) || s2;
    this.configure(i2);
  }
}();
var i = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return console[t2]("fabric", ...s2);
};
var r = class extends Error {
  constructor(t2, e3) {
    super(`fabric: ${t2}`, e3);
  }
};
var n = class extends r {
  constructor(t2) {
    super(`${t2} 'options.signal' is in 'aborted' state`);
  }
};
var o = class {
};
var a = class extends o {
  testPrecision(t2, e3) {
    const s2 = `precision ${e3} float;
void main(){}`, i2 = t2.createShader(t2.FRAGMENT_SHADER);
    return !!i2 && (t2.shaderSource(i2, s2), t2.compileShader(i2), !!t2.getShaderParameter(i2, t2.COMPILE_STATUS));
  }
  queryWebGL(t2) {
    const e3 = t2.getContext("webgl");
    e3 && (this.maxTextureSize = e3.getParameter(e3.MAX_TEXTURE_SIZE), this.GLPrecision = ["highp", "mediump", "lowp"].find((t3) => this.testPrecision(e3, t3)), e3.getExtension("WEBGL_lose_context").loseContext(), i("log", `WebGL: max texture size ${this.maxTextureSize}`));
  }
  isSupported(t2) {
    return !!this.maxTextureSize && this.maxTextureSize >= t2;
  }
};
var h = {};
var l;
var c = (t2) => {
  l = t2;
};
var u = () => l || (l = { document, window, isTouchSupported: "ontouchstart" in window || "ontouchstart" in document || window && window.navigator && window.navigator.maxTouchPoints > 0, WebGLProbe: new a(), dispose() {
}, copyPasteData: h });
var d = () => u().document;
var g = () => u().window;
var f = () => {
  var t2;
  return Math.max(null !== (t2 = s.devicePixelRatio) && void 0 !== t2 ? t2 : g().devicePixelRatio, 1);
};
var p = new class {
  constructor() {
    t(this, "boundsOfCurveCache", {}), this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  getFontCache(t2) {
    let { fontFamily: e3, fontStyle: s2, fontWeight: i2 } = t2;
    e3 = e3.toLowerCase();
    const r2 = this.charWidthsCache;
    r2.has(e3) || r2.set(e3, /* @__PURE__ */ new Map());
    const n2 = r2.get(e3), o2 = `${s2.toLowerCase()}_${(i2 + "").toLowerCase()}`;
    return n2.has(o2) || n2.set(o2, /* @__PURE__ */ new Map()), n2.get(o2);
  }
  clearFontCache(t2) {
    t2 ? this.charWidthsCache.delete((t2 || "").toLowerCase()) : this.charWidthsCache = /* @__PURE__ */ new Map();
  }
  limitDimsByArea(t2) {
    const { perfLimitSizeTotal: e3 } = s, i2 = Math.sqrt(e3 * t2);
    return [Math.floor(i2), Math.floor(e3 / i2)];
  }
}();
var m = "7.1.0";
function v() {
}
var y = Math.PI / 2;
var _ = Math.PI / 4;
var x = 2 * Math.PI;
var C = Math.PI / 180;
var b = Object.freeze([1, 0, 0, 1, 0, 0]);
var S = 16;
var w = 0.4477152502;
var T = "center";
var O = "left";
var k = "top";
var D = "bottom";
var M = "right";
var E = "none";
var P = /\r?\n/;
var A = "moving";
var j = "scaling";
var F = "rotating";
var L = "rotate";
var I = "skewing";
var R = "resizing";
var B = "modifyPoly";
var $ = "modifyPath";
var X = "changed";
var Y = "scale";
var W = "scaleX";
var V = "scaleY";
var G = "skewX";
var z = "skewY";
var H = "fill";
var N = "stroke";
var U = "modified";
var q = "ltr";
var K = "rtl";
var J = "normal";
var Q = "json";
var Z = "svg";
var tt = new class {
  constructor() {
    this[Q] = /* @__PURE__ */ new Map(), this[Z] = /* @__PURE__ */ new Map();
  }
  has(t2) {
    return this[Q].has(t2);
  }
  getClass(t2) {
    const e3 = this[Q].get(t2);
    if (!e3) throw new r(`No class registered for ${t2}`);
    return e3;
  }
  setClass(t2, e3) {
    e3 ? this[Q].set(e3, t2) : (this[Q].set(t2.type, t2), this[Q].set(t2.type.toLowerCase(), t2));
  }
  getSVGClass(t2) {
    return this[Z].get(t2);
  }
  setSVGClass(t2, e3) {
    this[Z].set(null != e3 ? e3 : t2.type.toLowerCase(), t2);
  }
}();
var et = new class extends Array {
  remove(t2) {
    const e3 = this.indexOf(t2);
    e3 > -1 && this.splice(e3, 1);
  }
  cancelAll() {
    const t2 = this.splice(0);
    return t2.forEach((t3) => t3.abort()), t2;
  }
  cancelByCanvas(t2) {
    if (!t2) return [];
    const e3 = this.filter((e4) => {
      var s2;
      return e4.target === t2 || "object" == typeof e4.target && (null === (s2 = e4.target) || void 0 === s2 ? void 0 : s2.canvas) === t2;
    });
    return e3.forEach((t3) => t3.abort()), e3;
  }
  cancelByTarget(t2) {
    if (!t2) return [];
    const e3 = this.filter((e4) => e4.target === t2);
    return e3.forEach((t3) => t3.abort()), e3;
  }
}();
var st = class {
  constructor() {
    t(this, "__eventListeners", {});
  }
  on(t2, e3) {
    if (this.__eventListeners || (this.__eventListeners = {}), "object" == typeof t2) return Object.entries(t2).forEach((t3) => {
      let [e4, s2] = t3;
      this.on(e4, s2);
    }), () => this.off(t2);
    if (e3) {
      const s2 = t2;
      return this.__eventListeners[s2] || (this.__eventListeners[s2] = []), this.__eventListeners[s2].push(e3), () => this.off(s2, e3);
    }
    return () => false;
  }
  once(t2, e3) {
    if ("object" == typeof t2) {
      const e4 = [];
      return Object.entries(t2).forEach((t3) => {
        let [s2, i2] = t3;
        e4.push(this.once(s2, i2));
      }), () => e4.forEach((t3) => t3());
    }
    if (e3) {
      const s2 = this.on(t2, function() {
        for (var t3 = arguments.length, i2 = new Array(t3), r2 = 0; r2 < t3; r2++) i2[r2] = arguments[r2];
        e3.call(this, ...i2), s2();
      });
      return s2;
    }
    return () => false;
  }
  _removeEventListener(t2, e3) {
    if (this.__eventListeners[t2]) if (e3) {
      const s2 = this.__eventListeners[t2], i2 = s2.indexOf(e3);
      i2 > -1 && s2.splice(i2, 1);
    } else this.__eventListeners[t2] = [];
  }
  off(t2, e3) {
    if (this.__eventListeners) if (void 0 === t2) for (const t3 in this.__eventListeners) this._removeEventListener(t3);
    else "object" == typeof t2 ? Object.entries(t2).forEach((t3) => {
      let [e4, s2] = t3;
      this._removeEventListener(e4, s2);
    }) : this._removeEventListener(t2, e3);
  }
  fire(t2, e3) {
    var s2;
    if (!this.__eventListeners) return;
    const i2 = null === (s2 = this.__eventListeners[t2]) || void 0 === s2 ? void 0 : s2.concat();
    if (i2) for (let t3 = 0; t3 < i2.length; t3++) i2[t3].call(this, e3 || {});
  }
};
var it = (t2, e3) => {
  const s2 = t2.indexOf(e3);
  return -1 !== s2 && t2.splice(s2, 1), t2;
};
var rt = (t2) => {
  if (0 === t2) return 1;
  switch (Math.abs(t2) / y) {
    case 1:
    case 3:
      return 0;
    case 2:
      return -1;
  }
  return Math.cos(t2);
};
var nt = (t2) => {
  if (0 === t2) return 0;
  const e3 = t2 / y, s2 = Math.sign(t2);
  switch (e3) {
    case 1:
      return s2;
    case 2:
      return 0;
    case 3:
      return -s2;
  }
  return Math.sin(t2);
};
var ot = class _ot {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    "object" == typeof t2 ? (this.x = t2.x, this.y = t2.y) : (this.x = t2, this.y = e3);
  }
  add(t2) {
    return new _ot(this.x + t2.x, this.y + t2.y);
  }
  addEquals(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  scalarAdd(t2) {
    return new _ot(this.x + t2, this.y + t2);
  }
  scalarAddEquals(t2) {
    return this.x += t2, this.y += t2, this;
  }
  subtract(t2) {
    return new _ot(this.x - t2.x, this.y - t2.y);
  }
  subtractEquals(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  scalarSubtract(t2) {
    return new _ot(this.x - t2, this.y - t2);
  }
  scalarSubtractEquals(t2) {
    return this.x -= t2, this.y -= t2, this;
  }
  multiply(t2) {
    return new _ot(this.x * t2.x, this.y * t2.y);
  }
  scalarMultiply(t2) {
    return new _ot(this.x * t2, this.y * t2);
  }
  scalarMultiplyEquals(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  divide(t2) {
    return new _ot(this.x / t2.x, this.y / t2.y);
  }
  scalarDivide(t2) {
    return new _ot(this.x / t2, this.y / t2);
  }
  scalarDivideEquals(t2) {
    return this.x /= t2, this.y /= t2, this;
  }
  eq(t2) {
    return this.x === t2.x && this.y === t2.y;
  }
  lt(t2) {
    return this.x < t2.x && this.y < t2.y;
  }
  lte(t2) {
    return this.x <= t2.x && this.y <= t2.y;
  }
  gt(t2) {
    return this.x > t2.x && this.y > t2.y;
  }
  gte(t2) {
    return this.x >= t2.x && this.y >= t2.y;
  }
  lerp(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
    return e3 = Math.max(Math.min(1, e3), 0), new _ot(this.x + (t2.x - this.x) * e3, this.y + (t2.y - this.y) * e3);
  }
  distanceFrom(t2) {
    const e3 = this.x - t2.x, s2 = this.y - t2.y;
    return Math.sqrt(e3 * e3 + s2 * s2);
  }
  midPointFrom(t2) {
    return this.lerp(t2);
  }
  min(t2) {
    return new _ot(Math.min(this.x, t2.x), Math.min(this.y, t2.y));
  }
  max(t2) {
    return new _ot(Math.max(this.x, t2.x), Math.max(this.y, t2.y));
  }
  toString() {
    return `${this.x},${this.y}`;
  }
  setXY(t2, e3) {
    return this.x = t2, this.y = e3, this;
  }
  setX(t2) {
    return this.x = t2, this;
  }
  setY(t2) {
    return this.y = t2, this;
  }
  setFromPoint(t2) {
    return this.x = t2.x, this.y = t2.y, this;
  }
  swap(t2) {
    const e3 = this.x, s2 = this.y;
    this.x = t2.x, this.y = t2.y, t2.x = e3, t2.y = s2;
  }
  clone() {
    return new _ot(this.x, this.y);
  }
  rotate(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : at;
    const s2 = nt(t2), i2 = rt(t2), r2 = this.subtract(e3);
    return new _ot(r2.x * i2 - r2.y * s2, r2.x * s2 + r2.y * i2).add(e3);
  }
  transform(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return new _ot(t2[0] * this.x + t2[2] * this.y + (e3 ? 0 : t2[4]), t2[1] * this.x + t2[3] * this.y + (e3 ? 0 : t2[5]));
  }
};
var at = new ot(0, 0);
var ht = (t2) => !!t2 && Array.isArray(t2._objects);
function lt(e3) {
  class s2 extends e3 {
    constructor() {
      super(...arguments), t(this, "_objects", []);
    }
    _onObjectAdded(t2) {
    }
    _onObjectRemoved(t2) {
    }
    _onStackOrderChanged(t2) {
    }
    add() {
      for (var t2 = arguments.length, e4 = new Array(t2), s3 = 0; s3 < t2; s3++) e4[s3] = arguments[s3];
      const i2 = this._objects.push(...e4);
      return e4.forEach((t3) => this._onObjectAdded(t3)), i2;
    }
    insertAt(t2) {
      for (var e4 = arguments.length, s3 = new Array(e4 > 1 ? e4 - 1 : 0), i2 = 1; i2 < e4; i2++) s3[i2 - 1] = arguments[i2];
      return this._objects.splice(t2, 0, ...s3), s3.forEach((t3) => this._onObjectAdded(t3)), this._objects.length;
    }
    remove() {
      const t2 = this._objects, e4 = [];
      for (var s3 = arguments.length, i2 = new Array(s3), r2 = 0; r2 < s3; r2++) i2[r2] = arguments[r2];
      return i2.forEach((s4) => {
        const i3 = t2.indexOf(s4);
        -1 !== i3 && (t2.splice(i3, 1), e4.push(s4), this._onObjectRemoved(s4));
      }), e4;
    }
    forEachObject(t2) {
      this.getObjects().forEach((e4, s3, i2) => t2(e4, s3, i2));
    }
    getObjects() {
      for (var t2 = arguments.length, e4 = new Array(t2), s3 = 0; s3 < t2; s3++) e4[s3] = arguments[s3];
      return 0 === e4.length ? [...this._objects] : this._objects.filter((t3) => t3.isType(...e4));
    }
    item(t2) {
      return this._objects[t2];
    }
    isEmpty() {
      return 0 === this._objects.length;
    }
    size() {
      return this._objects.length;
    }
    contains(t2, e4) {
      return !!this._objects.includes(t2) || !!e4 && this._objects.some((e5) => e5 instanceof s2 && e5.contains(t2, true));
    }
    complexity() {
      return this._objects.reduce((t2, e4) => t2 += e4.complexity ? e4.complexity() : 0, 0);
    }
    sendObjectToBack(t2) {
      return !(!t2 || t2 === this._objects[0]) && (it(this._objects, t2), this._objects.unshift(t2), this._onStackOrderChanged(t2), true);
    }
    bringObjectToFront(t2) {
      return !(!t2 || t2 === this._objects[this._objects.length - 1]) && (it(this._objects, t2), this._objects.push(t2), this._onStackOrderChanged(t2), true);
    }
    sendObjectBackwards(t2, e4) {
      if (!t2) return false;
      const s3 = this._objects.indexOf(t2);
      if (0 !== s3) {
        const i2 = this.findNewLowerIndex(t2, s3, e4);
        return it(this._objects, t2), this._objects.splice(i2, 0, t2), this._onStackOrderChanged(t2), true;
      }
      return false;
    }
    bringObjectForward(t2, e4) {
      if (!t2) return false;
      const s3 = this._objects.indexOf(t2);
      if (s3 !== this._objects.length - 1) {
        const i2 = this.findNewUpperIndex(t2, s3, e4);
        return it(this._objects, t2), this._objects.splice(i2, 0, t2), this._onStackOrderChanged(t2), true;
      }
      return false;
    }
    moveObjectTo(t2, e4) {
      return t2 !== this._objects[e4] && (it(this._objects, t2), this._objects.splice(e4, 0, t2), this._onStackOrderChanged(t2), true);
    }
    findNewLowerIndex(t2, e4, s3) {
      let i2;
      if (s3) {
        i2 = e4;
        for (let s4 = e4 - 1; s4 >= 0; --s4) if (t2.isOverlapping(this._objects[s4])) {
          i2 = s4;
          break;
        }
      } else i2 = e4 - 1;
      return i2;
    }
    findNewUpperIndex(t2, e4, s3) {
      let i2;
      if (s3) {
        i2 = e4;
        for (let s4 = e4 + 1; s4 < this._objects.length; ++s4) if (t2.isOverlapping(this._objects[s4])) {
          i2 = s4;
          break;
        }
      } else i2 = e4 + 1;
      return i2;
    }
    collectObjects(t2) {
      let { left: e4, top: s3, width: i2, height: r2 } = t2, { includeIntersecting: n2 = true } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const o2 = [], a2 = new ot(e4, s3), h2 = a2.add(new ot(i2, r2));
      for (let t3 = this._objects.length - 1; t3 >= 0; t3--) {
        const e5 = this._objects[t3];
        e5.selectable && e5.visible && (n2 && e5.intersectsWithRect(a2, h2) || e5.isContainedWithinRect(a2, h2) || n2 && e5.containsPoint(a2) || n2 && e5.containsPoint(h2)) && o2.push(e5);
      }
      return o2;
    }
  }
  return s2;
}
var ct = class extends st {
  _setOptions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    for (const e3 in t2) this.set(e3, t2[e3]);
  }
  _setObject(t2) {
    for (const e3 in t2) this._set(e3, t2[e3]);
  }
  set(t2, e3) {
    return "object" == typeof t2 ? this._setObject(t2) : this._set(t2, e3), this;
  }
  _set(t2, e3) {
    this[t2] = e3;
  }
  toggle(t2) {
    const e3 = this.get(t2);
    return "boolean" == typeof e3 && this.set(t2, !e3), this;
  }
  get(t2) {
    return this[t2];
  }
};
function ut(t2) {
  return g().requestAnimationFrame(t2);
}
function dt(t2) {
  return g().cancelAnimationFrame(t2);
}
var gt = 0;
var ft = () => gt++;
var pt = () => {
  const t2 = d().createElement("canvas");
  if (!t2 || void 0 === t2.getContext) throw new r("Failed to create `canvas` element");
  return t2;
};
var mt = () => d().createElement("img");
var vt = (t2) => {
  const e3 = pt();
  return e3.width = t2.width, e3.height = t2.height, e3;
};
var yt = (t2, e3, s2) => t2.toDataURL(`image/${e3}`, s2);
var _t = (t2, e3, s2) => new Promise((i2, r2) => {
  t2.toBlob(i2, `image/${e3}`, s2);
});
var xt = (t2) => t2 * C;
var Ct = (t2) => t2 / C;
var bt = (t2) => t2.every((t3, e3) => t3 === b[e3]);
var St = (t2, e3, s2) => new ot(t2).transform(e3, s2);
var wt = (t2) => {
  const e3 = 1 / (t2[0] * t2[3] - t2[1] * t2[2]), s2 = [e3 * t2[3], -e3 * t2[1], -e3 * t2[2], e3 * t2[0], 0, 0], { x: i2, y: r2 } = new ot(t2[4], t2[5]).transform(s2, true);
  return s2[4] = -i2, s2[5] = -r2, s2;
};
var Tt = (t2, e3, s2) => [t2[0] * e3[0] + t2[2] * e3[1], t2[1] * e3[0] + t2[3] * e3[1], t2[0] * e3[2] + t2[2] * e3[3], t2[1] * e3[2] + t2[3] * e3[3], s2 ? 0 : t2[0] * e3[4] + t2[2] * e3[5] + t2[4], s2 ? 0 : t2[1] * e3[4] + t2[3] * e3[5] + t2[5]];
var Ot = (t2, e3) => t2.reduceRight((t3, s2) => s2 && t3 ? Tt(s2, t3, e3) : s2 || t3, void 0) || b.concat();
var kt = (t2) => {
  let [e3, s2] = t2;
  return Math.atan2(s2, e3);
};
var Dt = (t2) => {
  const e3 = kt(t2), s2 = Math.pow(t2[0], 2) + Math.pow(t2[1], 2), i2 = Math.sqrt(s2), r2 = (t2[0] * t2[3] - t2[2] * t2[1]) / i2, n2 = Math.atan2(t2[0] * t2[2] + t2[1] * t2[3], s2);
  return { angle: Ct(e3), scaleX: i2, scaleY: r2, skewX: Ct(n2), skewY: 0, translateX: t2[4] || 0, translateY: t2[5] || 0 };
};
var Mt = function(t2) {
  return [1, 0, 0, 1, t2, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0];
};
function Et() {
  let { angle: t2 = 0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, { x: e3 = 0, y: s2 = 0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const i2 = xt(t2), r2 = rt(i2), n2 = nt(i2);
  return [r2, n2, -n2, r2, e3 ? e3 - (r2 * e3 - n2 * s2) : 0, s2 ? s2 - (n2 * e3 + r2 * s2) : 0];
}
var Pt = function(t2) {
  return [t2, 0, 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2, 0, 0];
};
var At = (t2) => Math.tan(xt(t2));
var jt = (t2) => [1, 0, At(t2), 1, 0, 0];
var Ft = (t2) => [1, At(t2), 0, 1, 0, 0];
var Lt = (t2) => {
  let { scaleX: e3 = 1, scaleY: s2 = 1, flipX: i2 = false, flipY: r2 = false, skewX: n2 = 0, skewY: o2 = 0 } = t2, a2 = Pt(i2 ? -e3 : e3, r2 ? -s2 : s2);
  return n2 && (a2 = Tt(a2, jt(n2), true)), o2 && (a2 = Tt(a2, Ft(o2), true)), a2;
};
var It = (t2) => {
  const { translateX: e3 = 0, translateY: s2 = 0, angle: i2 = 0 } = t2;
  let r2 = Mt(e3, s2);
  i2 && (r2 = Tt(r2, Et({ angle: i2 })));
  const n2 = Lt(t2);
  return bt(n2) || (r2 = Tt(r2, n2)), r2;
};
var Rt = function(t2) {
  let { signal: e3, crossOrigin: s2 = null } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise(function(i2, o2) {
    if (e3 && e3.aborted) return o2(new n("loadImage"));
    const a2 = mt();
    let h2;
    e3 && (h2 = function(t3) {
      a2.src = "", o2(t3);
    }, e3.addEventListener("abort", h2, { once: true }));
    const l2 = function() {
      a2.onload = a2.onerror = null, h2 && (null == e3 || e3.removeEventListener("abort", h2)), i2(a2);
    };
    t2 ? (a2.onload = l2, a2.onerror = function() {
      h2 && (null == e3 || e3.removeEventListener("abort", h2)), o2(new r(`Error loading ${a2.src}`));
    }, s2 && (a2.crossOrigin = s2), a2.src = t2) : l2();
  });
};
var Bt = function(t2) {
  let { signal: e3, reviver: s2 = v } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((i2, r2) => {
    const n2 = [];
    e3 && e3.addEventListener("abort", r2, { once: true }), Promise.all(t2.map((t3) => tt.getClass(t3.type).fromObject(t3, { signal: e3 }).then((e4) => (s2(t3, e4), n2.push(e4), e4)))).then(i2).catch((t3) => {
      n2.forEach((t4) => {
        t4.dispose && t4.dispose();
      }), r2(t3);
    }).finally(() => {
      e3 && e3.removeEventListener("abort", r2);
    });
  });
};
var $t = function(t2) {
  let { signal: e3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return new Promise((s2, i2) => {
    const r2 = [];
    e3 && e3.addEventListener("abort", i2, { once: true });
    const n2 = Object.values(t2).map((t3) => t3 && t3.type && tt.has(t3.type) ? Bt([t3], { signal: e3 }).then((t4) => {
      let [e4] = t4;
      return r2.push(e4), e4;
    }) : t3), o2 = Object.keys(t2);
    Promise.all(n2).then((t3) => t3.reduce((t4, e4, s3) => (t4[o2[s3]] = e4, t4), {})).then(s2).catch((t3) => {
      r2.forEach((t4) => {
        t4.dispose && t4.dispose();
      }), i2(t3);
    }).finally(() => {
      e3 && e3.removeEventListener("abort", i2);
    });
  });
};
var Xt = function(t2) {
  return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).reduce((e3, s2) => (s2 in t2 && (e3[s2] = t2[s2]), e3), {});
};
var Yt = (t2, e3) => Object.keys(t2).reduce((s2, i2) => (e3(t2[i2], i2, t2) && (s2[i2] = t2[i2]), s2), {});
var Wt = (t2, e3) => parseFloat(Number(t2).toFixed(e3));
var Vt = (t2) => "matrix(" + t2.map((t3) => Wt(t3, s.NUM_FRACTION_DIGITS)).join(" ") + ")";
var Gt = (t2) => !!t2 && void 0 !== t2.toLive;
var zt = (t2) => !!t2 && "function" == typeof t2.toObject;
var Ht = (t2) => !!t2 && void 0 !== t2.offsetX && "source" in t2;
var Nt = (t2) => !!t2 && "multiSelectionStacking" in t2;
function Ut(t2) {
  const e3 = t2 && qt(t2);
  let s2 = 0, i2 = 0;
  if (!t2 || !e3) return { left: s2, top: i2 };
  let r2 = t2;
  const n2 = e3.documentElement, o2 = e3.body || { scrollLeft: 0, scrollTop: 0 };
  for (; r2 && (r2.parentNode || r2.host) && (r2 = r2.parentNode || r2.host, r2 === e3 ? (s2 = o2.scrollLeft || n2.scrollLeft || 0, i2 = o2.scrollTop || n2.scrollTop || 0) : (s2 += r2.scrollLeft || 0, i2 += r2.scrollTop || 0), 1 !== r2.nodeType || "fixed" !== r2.style.position); ) ;
  return { left: s2, top: i2 };
}
var qt = (t2) => t2.ownerDocument || null;
var Kt = (t2) => {
  var e3;
  return (null === (e3 = t2.ownerDocument) || void 0 === e3 ? void 0 : e3.defaultView) || null;
};
var Jt = function(t2, e3, s2) {
  let { width: i2, height: r2 } = s2, n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  t2.width = i2, t2.height = r2, n2 > 1 && (t2.setAttribute("width", (i2 * n2).toString()), t2.setAttribute("height", (r2 * n2).toString()), e3.scale(n2, n2));
};
var Qt = (t2, e3) => {
  let { width: s2, height: i2 } = e3;
  s2 && (t2.style.width = "number" == typeof s2 ? `${s2}px` : s2), i2 && (t2.style.height = "number" == typeof i2 ? `${i2}px` : i2);
};
function Zt(t2) {
  return void 0 !== t2.onselectstart && (t2.onselectstart = () => false), t2.style.userSelect = E, t2;
}
var te = class {
  constructor(e3) {
    t(this, "_originalCanvasStyle", void 0), t(this, "lower", void 0);
    const s2 = this.createLowerCanvas(e3);
    this.lower = { el: s2, ctx: s2.getContext("2d") };
  }
  createLowerCanvas(t2) {
    const e3 = (s2 = t2) && void 0 !== s2.getContext ? t2 : t2 && d().getElementById(t2) || pt();
    var s2;
    if (e3.hasAttribute("data-fabric")) throw new r("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");
    return this._originalCanvasStyle = e3.style.cssText, e3.setAttribute("data-fabric", "main"), e3.classList.add("lower-canvas"), e3;
  }
  cleanupDOM(t2) {
    let { width: e3, height: s2 } = t2;
    const { el: i2 } = this.lower;
    i2.classList.remove("lower-canvas"), i2.removeAttribute("data-fabric"), i2.setAttribute("width", `${e3}`), i2.setAttribute("height", `${s2}`), i2.style.cssText = this._originalCanvasStyle || "", this._originalCanvasStyle = void 0;
  }
  setDimensions(t2, e3) {
    const { el: s2, ctx: i2 } = this.lower;
    Jt(s2, i2, t2, e3);
  }
  setCSSDimensions(t2) {
    Qt(this.lower.el, t2);
  }
  calcOffset() {
    return (function(t2) {
      var e3;
      const s2 = t2 && qt(t2), i2 = { left: 0, top: 0 };
      if (!s2) return i2;
      const r2 = (null === (e3 = Kt(t2)) || void 0 === e3 ? void 0 : e3.getComputedStyle(t2, null)) || {};
      i2.left += parseInt(r2.borderLeftWidth, 10) || 0, i2.top += parseInt(r2.borderTopWidth, 10) || 0, i2.left += parseInt(r2.paddingLeft, 10) || 0, i2.top += parseInt(r2.paddingTop, 10) || 0;
      let n2 = { left: 0, top: 0 };
      const o2 = s2.documentElement;
      void 0 !== t2.getBoundingClientRect && (n2 = t2.getBoundingClientRect());
      const a2 = Ut(t2);
      return { left: n2.left + a2.left - (o2.clientLeft || 0) + i2.left, top: n2.top + a2.top - (o2.clientTop || 0) + i2.top };
    })(this.lower.el);
  }
  dispose() {
    u().dispose(this.lower.el), delete this.lower;
  }
};
var ee = { backgroundVpt: true, backgroundColor: "", overlayVpt: true, overlayColor: "", includeDefaultValues: true, svgViewportTransformation: true, renderOnAddRemove: true, skipOffscreen: true, enableRetinaScaling: true, imageSmoothingEnabled: true, controlsAboveOverlay: false, allowTouchScrolling: false, viewportTransform: [...b], patternQuality: "best" };
var se = class _se extends lt(ct) {
  get lowerCanvasEl() {
    var t2;
    return null === (t2 = this.elements.lower) || void 0 === t2 ? void 0 : t2.el;
  }
  get contextContainer() {
    var t2;
    return null === (t2 = this.elements.lower) || void 0 === t2 ? void 0 : t2.ctx;
  }
  static getDefaults() {
    return _se.ownDefaults;
  }
  constructor(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, this.constructor.getDefaults()), this.set(e3), this.initElements(t2), this._setDimensionsImpl({ width: this.width || this.elements.lower.el.width || 0, height: this.height || this.elements.lower.el.height || 0 }), this.skipControlsDrawing = false, this.viewportTransform = [...this.viewportTransform], this.calcViewportBoundaries();
  }
  initElements(t2) {
    this.elements = new te(t2);
  }
  add() {
    const t2 = super.add(...arguments);
    return arguments.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t2;
  }
  insertAt(t2) {
    for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
    const r2 = super.insertAt(t2, ...s2);
    return s2.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), r2;
  }
  remove() {
    const t2 = super.remove(...arguments);
    return t2.length > 0 && this.renderOnAddRemove && this.requestRenderAll(), t2;
  }
  _onObjectAdded(t2) {
    t2.canvas && t2.canvas !== this && (i("warn", "Canvas is trying to add an object that belongs to a different canvas.\nResulting to default behavior: removing object from previous canvas and adding to new canvas"), t2.canvas.remove(t2)), t2._set("canvas", this), t2.setCoords(), this.fire("object:added", { target: t2 }), t2.fire("added", { target: this });
  }
  _onObjectRemoved(t2) {
    t2._set("canvas", void 0), this.fire("object:removed", { target: t2 }), t2.fire("removed", { target: this });
  }
  _onStackOrderChanged() {
    this.renderOnAddRemove && this.requestRenderAll();
  }
  getRetinaScaling() {
    return this.enableRetinaScaling ? f() : 1;
  }
  calcOffset() {
    return this._offset = this.elements.calcOffset();
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  _setDimensionsImpl(t2) {
    let { cssOnly: e3 = false, backstoreOnly: s2 = false } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e3) {
      const e4 = { width: this.width, height: this.height, ...t2 };
      this.elements.setDimensions(e4, this.getRetinaScaling()), this.hasLostContext = true, this.width = e4.width, this.height = e4.height;
    }
    s2 || this.elements.setCSSDimensions(t2), this.calcOffset();
  }
  setDimensions(t2, e3) {
    this._setDimensionsImpl(t2, e3), e3 && e3.cssOnly || this.requestRenderAll();
  }
  getZoom() {
    return this.viewportTransform[0];
  }
  setViewportTransform(t2) {
    this.viewportTransform = t2, this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll();
  }
  zoomToPoint(t2, e3) {
    const s2 = t2, i2 = [...this.viewportTransform], r2 = St(t2, wt(i2));
    i2[0] = e3, i2[3] = e3;
    const n2 = St(r2, i2);
    i2[4] += s2.x - n2.x, i2[5] += s2.y - n2.y, this.setViewportTransform(i2);
  }
  setZoom(t2) {
    this.zoomToPoint(new ot(0, 0), t2);
  }
  absolutePan(t2) {
    const e3 = [...this.viewportTransform];
    return e3[4] = -t2.x, e3[5] = -t2.y, this.setViewportTransform(e3);
  }
  relativePan(t2) {
    return this.absolutePan(new ot(-t2.x - this.viewportTransform[4], -t2.y - this.viewportTransform[5]));
  }
  getElement() {
    return this.elements.lower.el;
  }
  clearContext(t2) {
    t2.clearRect(0, 0, this.width, this.height);
  }
  getContext() {
    return this.elements.lower.ctx;
  }
  clear() {
    this.remove(...this.getObjects()), this.backgroundImage = void 0, this.overlayImage = void 0, this.backgroundColor = "", this.overlayColor = "", this.clearContext(this.getContext()), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll();
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || this.renderCanvas(this.getContext(), this._objects);
  }
  renderAndReset() {
    this.nextRenderHandle = 0, this.renderAll();
  }
  requestRenderAll() {
    this.nextRenderHandle || this.disposed || this.destroyed || (this.nextRenderHandle = ut(() => this.renderAndReset()));
  }
  calcViewportBoundaries() {
    const t2 = this.width, e3 = this.height, s2 = wt(this.viewportTransform), i2 = St({ x: 0, y: 0 }, s2), r2 = St({ x: t2, y: e3 }, s2), n2 = i2.min(r2), o2 = i2.max(r2);
    return this.vptCoords = { tl: n2, tr: new ot(o2.x, n2.y), bl: new ot(n2.x, o2.y), br: o2 };
  }
  cancelRequestedRender() {
    this.nextRenderHandle && (dt(this.nextRenderHandle), this.nextRenderHandle = 0);
  }
  drawControls(t2) {
  }
  renderCanvas(t2, e3) {
    if (this.destroyed) return;
    const s2 = this.viewportTransform, i2 = this.clipPath;
    this.calcViewportBoundaries(), this.clearContext(t2), t2.imageSmoothingEnabled = this.imageSmoothingEnabled, t2.patternQuality = this.patternQuality, this.fire("before:render", { ctx: t2 }), this._renderBackground(t2), t2.save(), t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), this._renderObjects(t2, e3), t2.restore(), this.controlsAboveOverlay || this.skipControlsDrawing || this.drawControls(t2), i2 && (i2._set("canvas", this), i2.shouldCache(), i2._transformDone = true, i2.renderCache({ forClipping: true }), this.drawClipPathOnCanvas(t2, i2)), this._renderOverlay(t2), this.controlsAboveOverlay && !this.skipControlsDrawing && this.drawControls(t2), this.fire("after:render", { ctx: t2 }), this.__cleanupTask && (this.__cleanupTask(), this.__cleanupTask = void 0);
  }
  drawClipPathOnCanvas(t2, e3) {
    const s2 = this.viewportTransform;
    t2.save(), t2.transform(...s2), t2.globalCompositeOperation = "destination-in", e3.transform(t2), t2.scale(1 / e3.zoomX, 1 / e3.zoomY), t2.drawImage(e3._cacheCanvas, -e3.cacheTranslationX, -e3.cacheTranslationY), t2.restore();
  }
  _renderObjects(t2, e3) {
    for (let s2 = 0, i2 = e3.length; s2 < i2; ++s2) e3[s2] && e3[s2].render(t2);
  }
  _renderBackgroundOrOverlay(t2, e3) {
    const s2 = this[`${e3}Color`], i2 = this[`${e3}Image`], r2 = this.viewportTransform, n2 = this[`${e3}Vpt`];
    if (!s2 && !i2) return;
    const o2 = Gt(s2);
    if (s2) {
      if (t2.save(), t2.beginPath(), t2.moveTo(0, 0), t2.lineTo(this.width, 0), t2.lineTo(this.width, this.height), t2.lineTo(0, this.height), t2.closePath(), t2.fillStyle = o2 ? s2.toLive(t2) : s2, n2 && t2.transform(...r2), o2) {
        t2.transform(1, 0, 0, 1, s2.offsetX || 0, s2.offsetY || 0);
        const e4 = s2.gradientTransform || s2.patternTransform;
        e4 && t2.transform(...e4);
      }
      t2.fill(), t2.restore();
    }
    if (i2) {
      t2.save();
      const { skipOffscreen: e4 } = this;
      this.skipOffscreen = n2, n2 && t2.transform(...r2), i2.render(t2), this.skipOffscreen = e4, t2.restore();
    }
  }
  _renderBackground(t2) {
    this._renderBackgroundOrOverlay(t2, "background");
  }
  _renderOverlay(t2) {
    this._renderBackgroundOrOverlay(t2, "overlay");
  }
  getCenterPoint() {
    return new ot(this.width / 2, this.height / 2);
  }
  centerObjectH(t2) {
    return this._centerObject(t2, new ot(this.getCenterPoint().x, t2.getCenterPoint().y));
  }
  centerObjectV(t2) {
    return this._centerObject(t2, new ot(t2.getCenterPoint().x, this.getCenterPoint().y));
  }
  centerObject(t2) {
    return this._centerObject(t2, this.getCenterPoint());
  }
  viewportCenterObject(t2) {
    return this._centerObject(t2, this.getVpCenter());
  }
  viewportCenterObjectH(t2) {
    return this._centerObject(t2, new ot(this.getVpCenter().x, t2.getCenterPoint().y));
  }
  viewportCenterObjectV(t2) {
    return this._centerObject(t2, new ot(t2.getCenterPoint().x, this.getVpCenter().y));
  }
  getVpCenter() {
    return St(this.getCenterPoint(), wt(this.viewportTransform));
  }
  _centerObject(t2, e3) {
    t2.setXY(e3, T, T), t2.setCoords(), this.renderOnAddRemove && this.requestRenderAll();
  }
  toDatalessJSON(t2) {
    return this.toDatalessObject(t2);
  }
  toObject(t2) {
    return this._toObjectMethod("toObject", t2);
  }
  toJSON() {
    return this.toObject();
  }
  toDatalessObject(t2) {
    return this._toObjectMethod("toDatalessObject", t2);
  }
  _toObjectMethod(t2, e3) {
    const s2 = this.clipPath, i2 = s2 && !s2.excludeFromExport ? this._toObject(s2, t2, e3) : null;
    return { version: m, ...Xt(this, e3), objects: this._objects.filter((t3) => !t3.excludeFromExport).map((s3) => this._toObject(s3, t2, e3)), ...this.__serializeBgOverlay(t2, e3), ...i2 ? { clipPath: i2 } : null };
  }
  _toObject(t2, e3, s2) {
    let i2;
    this.includeDefaultValues || (i2 = t2.includeDefaultValues, t2.includeDefaultValues = false);
    const r2 = t2[e3](s2);
    return this.includeDefaultValues || (t2.includeDefaultValues = !!i2), r2;
  }
  __serializeBgOverlay(t2, e3) {
    const s2 = {}, i2 = this.backgroundImage, r2 = this.overlayImage, n2 = this.backgroundColor, o2 = this.overlayColor;
    return Gt(n2) ? n2.excludeFromExport || (s2.background = n2.toObject(e3)) : n2 && (s2.background = n2), Gt(o2) ? o2.excludeFromExport || (s2.overlay = o2.toObject(e3)) : o2 && (s2.overlay = o2), i2 && !i2.excludeFromExport && (s2.backgroundImage = this._toObject(i2, t2, e3)), r2 && !r2.excludeFromExport && (s2.overlayImage = this._toObject(r2, t2, e3)), s2;
  }
  toSVG() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e3 = arguments.length > 1 ? arguments[1] : void 0;
    t2.reviver = e3;
    const s2 = [];
    return this._setSVGPreamble(s2, t2), this._setSVGHeader(s2, t2), this.clipPath && s2.push(`<g clip-path="url(#${this.clipPath.clipPathId})" >
`), this._setSVGBgOverlayColor(s2, "background"), this._setSVGBgOverlayImage(s2, "backgroundImage", e3), this._setSVGObjects(s2, e3), this.clipPath && s2.push("</g>\n"), this._setSVGBgOverlayColor(s2, "overlay"), this._setSVGBgOverlayImage(s2, "overlayImage", e3), s2.push("</svg>"), s2.join("");
  }
  _setSVGPreamble(t2, e3) {
    e3.suppressPreamble || t2.push('<?xml version="1.0" encoding="', e3.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
  }
  _setSVGHeader(t2, e3) {
    const i2 = e3.width || `${this.width}`, r2 = e3.height || `${this.height}`, n2 = s.NUM_FRACTION_DIGITS, o2 = e3.viewBox;
    let a2;
    if (o2) a2 = `viewBox="${o2.x} ${o2.y} ${o2.width} ${o2.height}" `;
    else if (this.svgViewportTransformation) {
      const t3 = this.viewportTransform;
      a2 = `viewBox="${Wt(-t3[4] / t3[0], n2)} ${Wt(-t3[5] / t3[3], n2)} ${Wt(this.width / t3[0], n2)} ${Wt(this.height / t3[3], n2)}" `;
    } else a2 = `viewBox="0 0 ${this.width} ${this.height}" `;
    t2.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', i2, '" ', 'height="', r2, '" ', a2, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", m, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e3), "</defs>\n");
  }
  createSVGClipPathMarkup(t2) {
    const e3 = this.clipPath;
    return e3 ? (e3.clipPathId = `CLIPPATH_${ft()}`, `<clipPath id="${e3.clipPathId}" >
${e3.toClipPathSVG(t2.reviver)}</clipPath>
`) : "";
  }
  createSVGRefElementsMarkup() {
    return ["background", "overlay"].map((t2) => {
      const e3 = this[`${t2}Color`];
      if (Gt(e3)) {
        const s2 = this[`${t2}Vpt`], i2 = this.viewportTransform, r2 = { isType: () => false, width: this.width / (s2 ? i2[0] : 1), height: this.height / (s2 ? i2[3] : 1) };
        return e3.toSVG(r2, { additionalTransform: s2 ? Vt(i2) : "" });
      }
    }).join("");
  }
  createSVGFontFacesMarkup() {
    const t2 = [], e3 = {}, i2 = s.fontPaths;
    this._objects.forEach(function e4(s2) {
      t2.push(s2), ht(s2) && s2._objects.forEach(e4);
    }), t2.forEach((t3) => {
      if (!(s2 = t3) || "function" != typeof s2._renderText) return;
      var s2;
      const { styles: r3, fontFamily: n2 } = t3;
      !e3[n2] && i2[n2] && (e3[n2] = true, r3 && Object.values(r3).forEach((t4) => {
        Object.values(t4).forEach((t5) => {
          let { fontFamily: s3 = "" } = t5;
          !e3[s3] && i2[s3] && (e3[s3] = true);
        });
      }));
    });
    const r2 = Object.keys(e3).map((t3) => `		@font-face {
			font-family: '${t3}';
			src: url('${i2[t3]}');
		}
`).join("");
    return r2 ? `	<style type="text/css"><![CDATA[
${r2}]]></style>
` : "";
  }
  _setSVGObjects(t2, e3) {
    this.forEachObject((s2) => {
      s2.excludeFromExport || this._setSVGObject(t2, s2, e3);
    });
  }
  _setSVGObject(t2, e3, s2) {
    t2.push(e3.toSVG(s2));
  }
  _setSVGBgOverlayImage(t2, e3, s2) {
    const i2 = this[e3];
    i2 && !i2.excludeFromExport && i2.toSVG && t2.push(i2.toSVG(s2));
  }
  _setSVGBgOverlayColor(t2, e3) {
    const s2 = this[`${e3}Color`];
    if (s2) if (Gt(s2)) {
      const i2 = s2.repeat || "", r2 = this.width, n2 = this.height, o2 = this[`${e3}Vpt`] ? Vt(wt(this.viewportTransform)) : "";
      t2.push(`<rect transform="${o2} translate(${r2 / 2},${n2 / 2})" x="${s2.offsetX - r2 / 2}" y="${s2.offsetY - n2 / 2}" width="${"repeat-y" !== i2 && "no-repeat" !== i2 || !Ht(s2) ? r2 : s2.source.width}" height="${"repeat-x" !== i2 && "no-repeat" !== i2 || !Ht(s2) ? n2 : s2.source.height}" fill="url(#SVGID_${s2.id})"></rect>
`);
    } else t2.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', s2, '"', "></rect>\n");
  }
  loadFromJSON(t2, e3) {
    let { signal: s2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if (!t2) return Promise.reject(new r("`json` is undefined"));
    const { objects: i2 = [], ...n2 } = "string" == typeof t2 ? JSON.parse(t2) : t2, { backgroundImage: o2, background: a2, overlayImage: h2, overlay: l2, clipPath: c2 } = n2, u2 = this.renderOnAddRemove;
    return this.renderOnAddRemove = false, Promise.all([Bt(i2, { reviver: e3, signal: s2 }), $t({ backgroundImage: o2, backgroundColor: a2, overlayImage: h2, overlayColor: l2, clipPath: c2 }, { signal: s2 })]).then((t3) => {
      let [e4, s3] = t3;
      return this.clear(), this.add(...e4), this.set(n2), this.set(s3), this.renderOnAddRemove = u2, this;
    });
  }
  clone(t2) {
    const e3 = this.toObject(t2);
    return this.cloneWithoutData().loadFromJSON(e3);
  }
  cloneWithoutData() {
    const t2 = vt(this);
    return new this.constructor(t2);
  }
  toDataURL() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e3 = "png", quality: s2 = 1, multiplier: i2 = 1, enableRetinaScaling: r2 = false } = t2, n2 = i2 * (r2 ? this.getRetinaScaling() : 1);
    return yt(this.toCanvasElement(n2, t2), e3, s2);
  }
  toBlob() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const { format: e3 = "png", quality: s2 = 1, multiplier: i2 = 1, enableRetinaScaling: r2 = false } = t2, n2 = i2 * (r2 ? this.getRetinaScaling() : 1);
    return _t(this.toCanvasElement(n2, t2), e3, s2);
  }
  toCanvasElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, { width: e3, height: s2, left: i2, top: r2, filter: n2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const o2 = (e3 || this.width) * t2, a2 = (s2 || this.height) * t2, h2 = this.getZoom(), l2 = this.width, c2 = this.height, u2 = this.skipControlsDrawing, d2 = h2 * t2, g2 = this.viewportTransform, f2 = [d2, 0, 0, d2, (g2[4] - (i2 || 0)) * t2, (g2[5] - (r2 || 0)) * t2], p2 = this.enableRetinaScaling, m2 = vt({ width: o2, height: a2 }), v2 = n2 ? this._objects.filter((t3) => n2(t3)) : this._objects;
    return this.enableRetinaScaling = false, this.viewportTransform = f2, this.width = o2, this.height = a2, this.skipControlsDrawing = true, this.calcViewportBoundaries(), this.renderCanvas(m2.getContext("2d"), v2), this.viewportTransform = g2, this.width = l2, this.height = c2, this.calcViewportBoundaries(), this.enableRetinaScaling = p2, this.skipControlsDrawing = u2, m2;
  }
  dispose() {
    return !this.disposed && this.elements.cleanupDOM({ width: this.width, height: this.height }), et.cancelByCanvas(this), this.disposed = true, new Promise((t2, e3) => {
      const s2 = () => {
        this.destroy(), t2(true);
      };
      s2.kill = e3, this.__cleanupTask && this.__cleanupTask.kill("aborted"), this.destroyed ? t2(false) : this.nextRenderHandle ? this.__cleanupTask = s2 : s2();
    });
  }
  destroy() {
    this.destroyed = true, this.cancelRequestedRender(), this.forEachObject((t2) => t2.dispose()), this._objects = [], this.backgroundImage && this.backgroundImage.dispose(), this.backgroundImage = void 0, this.overlayImage && this.overlayImage.dispose(), this.overlayImage = void 0, this.elements.dispose();
  }
  toString() {
    return `#<Canvas (${this.complexity()}): { objects: ${this._objects.length} }>`;
  }
};
t(se, "ownDefaults", ee);
var ie = ["touchstart", "touchmove", "touchend"];
var re = (t2) => {
  const e3 = Ut(t2.target), s2 = (function(t3) {
    const e4 = t3.changedTouches;
    return e4 && e4[0] ? e4[0] : t3;
  })(t2);
  return new ot(s2.clientX + e3.left, s2.clientY + e3.top);
};
var ne = (t2) => ie.includes(t2.type) || "touch" === t2.pointerType;
var oe = (t2) => {
  t2.preventDefault(), t2.stopPropagation();
};
var ae = (t2) => {
  let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
  for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    const { x: o3, y: a2 } = t2[n2];
    (o3 > i2 || !n2) && (i2 = o3), (o3 < e3 || !n2) && (e3 = o3), (a2 > r2 || !n2) && (r2 = a2), (a2 < s2 || !n2) && (s2 = a2);
  }
  return { left: e3, top: s2, width: i2 - e3, height: r2 - s2 };
};
var he = (t2, e3) => le(t2, Tt(e3, t2.calcOwnMatrix()));
var le = (t2, e3) => {
  const { translateX: s2, translateY: i2, scaleX: r2, scaleY: n2, ...o2 } = Dt(e3), a2 = new ot(s2, i2);
  t2.flipX = false, t2.flipY = false, Object.assign(t2, o2), t2.set({ scaleX: r2, scaleY: n2 }), t2.setPositionByOrigin(a2, T, T);
};
var ce = (t2) => {
  t2.scaleX = 1, t2.scaleY = 1, t2.skewX = 0, t2.skewY = 0, t2.flipX = false, t2.flipY = false, t2.rotate(0);
};
var ue = (t2) => ({ scaleX: t2.scaleX, scaleY: t2.scaleY, skewX: t2.skewX, skewY: t2.skewY, angle: t2.angle, left: t2.left, flipX: t2.flipX, flipY: t2.flipY, top: t2.top });
var de = (t2, e3, s2) => {
  const i2 = t2 / 2, r2 = e3 / 2, n2 = [new ot(-i2, -r2), new ot(i2, -r2), new ot(-i2, r2), new ot(i2, r2)].map((t3) => t3.transform(s2)), o2 = ae(n2);
  return new ot(o2.width, o2.height);
};
var ge = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b;
  return Tt(wt(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b), t2);
};
var fe = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
  return t2.transform(ge(e3, s2));
};
var pe = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
  return t2.transform(ge(e3, s2), true);
};
var me = (t2, e3, s2) => {
  const i2 = ge(e3, s2);
  return le(t2, Tt(i2, t2.calcOwnMatrix())), i2;
};
var ve = { left: -0.5, top: -0.5, center: 0, bottom: 0.5, right: 0.5 };
var ye = (t2) => "string" == typeof t2 ? ve[t2] : t2 - 0.5;
var _e = new ot(1, 0);
var xe = new ot();
var Ce = (t2, e3) => t2.rotate(e3);
var be = (t2, e3) => new ot(e3).subtract(t2);
var Se = (t2) => t2.distanceFrom(xe);
var we = (t2, e3) => Math.atan2(De(t2, e3), Me(t2, e3));
var Te = (t2) => we(_e, t2);
var Oe = (t2) => t2.eq(xe) ? t2 : t2.scalarDivide(Se(t2));
var ke = function(t2) {
  let e3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
  return Oe(new ot(-t2.y, t2.x).scalarMultiply(e3 ? 1 : -1));
};
var De = (t2, e3) => t2.x * e3.y - t2.y * e3.x;
var Me = (t2, e3) => t2.x * e3.x + t2.y * e3.y;
var Ee = (t2, e3, s2) => {
  if (t2.eq(e3) || t2.eq(s2)) return true;
  const i2 = De(e3, s2), r2 = De(e3, t2), n2 = De(s2, t2);
  return i2 >= 0 ? r2 >= 0 && n2 <= 0 : !(r2 <= 0 && n2 >= 0);
};
var Pe = "not-allowed";
function Ae(t2) {
  return ye(t2.originX) === ye(T) && ye(t2.originY) === ye(T);
}
function je(t2) {
  return 0.5 - ye(t2);
}
var Fe = (t2, e3) => t2[e3];
var Le = (t2, e3, s2, i2) => ({ e: t2, transform: e3, pointer: new ot(s2, i2) });
function Ie(t2, e3, s2) {
  const i2 = s2, r2 = fe(t2.getCenterPoint(), t2.canvas.viewportTransform, void 0), n2 = Te(be(r2, i2)) + x;
  return Math.round(n2 % x / _);
}
function Re(t2, e3, s2, i2, r2) {
  var n2;
  let { target: o2, corner: a2 } = t2;
  const h2 = o2.controls[a2], l2 = (null === (n2 = o2.canvas) || void 0 === n2 ? void 0 : n2.getZoom()) || 1, c2 = o2.padding / l2, u2 = (function(t3, e4, s3, i3) {
    const r3 = t3.getRelativeCenterPoint(), n3 = void 0 !== s3 && void 0 !== i3 ? t3.translateToGivenOrigin(r3, T, T, s3, i3) : new ot(t3.left, t3.top);
    return (t3.angle ? e4.rotate(-xt(t3.angle), r3) : e4).subtract(n3);
  })(o2, new ot(i2, r2), e3, s2);
  return u2.x >= c2 && (u2.x -= c2), u2.x <= -c2 && (u2.x += c2), u2.y >= c2 && (u2.y -= c2), u2.y <= c2 && (u2.y += c2), u2.x -= h2.offsetX, u2.y -= h2.offsetY, u2;
}
var Be = (t2) => t2.replace(/\s+/g, " ");
var $e = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#0FF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000", blanchedalmond: "#FFEBCD", blue: "#00F", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#0FF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#F0F", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", indianred: "#CD5C5C", indigo: "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#789", lightslategrey: "#789", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#0F0", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#F0F", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#639", red: "#F00", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFF", whitesmoke: "#F5F5F5", yellow: "#FF0", yellowgreen: "#9ACD32" };
var Xe = (t2, e3, s2) => (s2 < 0 && (s2 += 1), s2 > 1 && (s2 -= 1), s2 < 1 / 6 ? t2 + 6 * (e3 - t2) * s2 : s2 < 0.5 ? e3 : s2 < 2 / 3 ? t2 + (e3 - t2) * (2 / 3 - s2) * 6 : t2);
var Ye = (t2, e3, s2, i2) => {
  t2 /= 255, e3 /= 255, s2 /= 255;
  const r2 = Math.max(t2, e3, s2), n2 = Math.min(t2, e3, s2);
  let o2, a2;
  const h2 = (r2 + n2) / 2;
  if (r2 === n2) o2 = a2 = 0;
  else {
    const i3 = r2 - n2;
    switch (a2 = h2 > 0.5 ? i3 / (2 - r2 - n2) : i3 / (r2 + n2), r2) {
      case t2:
        o2 = (e3 - s2) / i3 + (e3 < s2 ? 6 : 0);
        break;
      case e3:
        o2 = (s2 - t2) / i3 + 2;
        break;
      case s2:
        o2 = (t2 - e3) / i3 + 4;
    }
    o2 /= 6;
  }
  return [Math.round(360 * o2), Math.round(100 * a2), Math.round(100 * h2), i2];
};
var We = function() {
  let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1";
  return parseFloat(t2) / (t2.endsWith("%") ? 100 : 1);
};
var Ve = (t2) => Math.min(Math.round(t2), 255).toString(16).toUpperCase().padStart(2, "0");
var Ge = (t2) => {
  let [e3, s2, i2, r2 = 1] = t2;
  const n2 = Math.round(0.3 * e3 + 0.59 * s2 + 0.11 * i2);
  return [n2, n2, n2, r2];
};
var ze = class _ze {
  constructor(e3) {
    if (t(this, "isUnrecognised", false), e3) if (e3 instanceof _ze) this.setSource([...e3._source]);
    else if (Array.isArray(e3)) {
      const [t2, s2, i2, r2 = 1] = e3;
      this.setSource([t2, s2, i2, r2]);
    } else this.setSource(this._tryParsingColor(e3));
    else this.setSource([0, 0, 0, 1]);
  }
  _tryParsingColor(t2) {
    return (t2 = t2.toLowerCase()) in $e && (t2 = $e[t2]), "transparent" === t2 ? [255, 255, 255, 0] : _ze.sourceFromHex(t2) || _ze.sourceFromRgb(t2) || _ze.sourceFromHsl(t2) || (this.isUnrecognised = true) && [0, 0, 0, 1];
  }
  getSource() {
    return this._source;
  }
  setSource(t2) {
    this._source = t2;
  }
  toRgb() {
    const [t2, e3, s2] = this.getSource();
    return `rgb(${t2},${e3},${s2})`;
  }
  toRgba() {
    return `rgba(${this.getSource().join(",")})`;
  }
  toHsl() {
    const [t2, e3, s2] = Ye(...this.getSource());
    return `hsl(${t2},${e3}%,${s2}%)`;
  }
  toHsla() {
    const [t2, e3, s2, i2] = Ye(...this.getSource());
    return `hsla(${t2},${e3}%,${s2}%,${i2})`;
  }
  toHex() {
    return this.toHexa().slice(0, 6);
  }
  toHexa() {
    const [t2, e3, s2, i2] = this.getSource();
    return `${Ve(t2)}${Ve(e3)}${Ve(s2)}${Ve(Math.round(255 * i2))}`;
  }
  getAlpha() {
    return this.getSource()[3];
  }
  setAlpha(t2) {
    return this._source[3] = t2, this;
  }
  toGrayscale() {
    return this.setSource(Ge(this.getSource())), this;
  }
  toBlackWhite(t2) {
    const [e3, , , s2] = Ge(this.getSource()), i2 = e3 < (t2 || 127) ? 0 : 255;
    return this.setSource([i2, i2, i2, s2]), this;
  }
  overlayWith(t2) {
    t2 instanceof _ze || (t2 = new _ze(t2));
    const e3 = this.getSource(), s2 = t2.getSource(), [i2, r2, n2] = e3.map((t3, e4) => Math.round(0.5 * t3 + 0.5 * s2[e4]));
    return this.setSource([i2, r2, n2, e3[3]]), this;
  }
  static fromRgb(t2) {
    return _ze.fromRgba(t2);
  }
  static fromRgba(t2) {
    return new _ze(_ze.sourceFromRgb(t2));
  }
  static sourceFromRgb(t2) {
    const e3 = Be(t2).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);
    if (e3) {
      const [t3, s2, i2] = e3.slice(1, 4).map((t4) => {
        const e4 = parseFloat(t4);
        return t4.endsWith("%") ? Math.round(2.55 * e4) : e4;
      });
      return [t3, s2, i2, We(e3[4])];
    }
  }
  static fromHsl(t2) {
    return _ze.fromHsla(t2);
  }
  static fromHsla(t2) {
    return new _ze(_ze.sourceFromHsl(t2));
  }
  static sourceFromHsl(t2) {
    const e3 = Be(t2).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);
    if (!e3) return;
    const s2 = (_ze.parseAngletoDegrees(e3[1]) % 360 + 360) % 360 / 360, i2 = parseFloat(e3[2]) / 100, r2 = parseFloat(e3[3]) / 100;
    let n2, o2, a2;
    if (0 === i2) n2 = o2 = a2 = r2;
    else {
      const t3 = r2 <= 0.5 ? r2 * (i2 + 1) : r2 + i2 - r2 * i2, e4 = 2 * r2 - t3;
      n2 = Xe(e4, t3, s2 + 1 / 3), o2 = Xe(e4, t3, s2), a2 = Xe(e4, t3, s2 - 1 / 3);
    }
    return [Math.round(255 * n2), Math.round(255 * o2), Math.round(255 * a2), We(e3[4])];
  }
  static fromHex(t2) {
    return new _ze(_ze.sourceFromHex(t2));
  }
  static sourceFromHex(t2) {
    if (t2.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)) {
      const e3 = t2.slice(t2.indexOf("#") + 1);
      let s2;
      s2 = e3.length <= 4 ? e3.split("").map((t3) => t3 + t3) : e3.match(/.{2}/g);
      const [i2, r2, n2, o2 = 255] = s2.map((t3) => parseInt(t3, 16));
      return [i2, r2, n2, o2 / 255];
    }
  }
  static parseAngletoDegrees(t2) {
    const e3 = t2.toLowerCase(), s2 = parseFloat(e3);
    return e3.includes("rad") ? Ct(s2) : e3.includes("turn") ? 360 * s2 : s2;
  }
};
var He = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
  const i2 = /\D{0,2}$/.exec(t2), r2 = parseFloat(t2), n2 = s.DPI;
  switch (null == i2 ? void 0 : i2[0]) {
    case "mm":
      return r2 * n2 / 25.4;
    case "cm":
      return r2 * n2 / 2.54;
    case "in":
      return r2 * n2;
    case "pt":
      return r2 * n2 / 72;
    case "pc":
      return r2 * n2 / 72 * 12;
    case "em":
      return r2 * e3;
    default:
      return r2;
  }
};
var Ne = (t2) => {
  const [e3, s2] = t2.trim().split(" "), [i2, r2] = (n2 = e3) && n2 !== E ? [n2.slice(1, 4), n2.slice(5, 8)] : n2 === E ? [n2, n2] : ["Mid", "Mid"];
  var n2;
  return { meetOrSlice: s2 || "meet", alignX: i2, alignY: r2 };
};
var Ue = function(t2, e3) {
  let s2, i2, r2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
  if (e3) if (e3.toLive) s2 = `url(#SVGID_${e3.id})`;
  else {
    const t3 = new ze(e3), r3 = t3.getAlpha();
    s2 = t3.toRgb(), 1 !== r3 && (i2 = r3.toString());
  }
  else s2 = "none";
  return r2 ? `${t2}: ${s2}; ${i2 ? `${t2}-opacity: ${i2}; ` : ""}` : `${t2}="${s2}" ${i2 ? `${t2}-opacity="${i2}" ` : ""}`;
};
var qe = class {
  getSvgStyles(t2) {
    const e3 = this.fillRule ? this.fillRule : "nonzero", s2 = this.strokeWidth ? this.strokeWidth : "0", i2 = this.strokeDashArray ? this.strokeDashArray.join(" ") : E, r2 = this.strokeDashOffset ? this.strokeDashOffset : "0", n2 = this.strokeLineCap ? this.strokeLineCap : "butt", o2 = this.strokeLineJoin ? this.strokeLineJoin : "miter", a2 = this.strokeMiterLimit ? this.strokeMiterLimit : "4", h2 = void 0 !== this.opacity ? this.opacity : "1", l2 = this.visible ? "" : " visibility: hidden;", c2 = t2 ? "" : this.getSvgFilter(), u2 = Ue(H, this.fill);
    return [Ue(N, this.stroke), "stroke-width: ", s2, "; ", "stroke-dasharray: ", i2, "; ", "stroke-linecap: ", n2, "; ", "stroke-dashoffset: ", r2, "; ", "stroke-linejoin: ", o2, "; ", "stroke-miterlimit: ", a2, "; ", u2, "fill-rule: ", e3, "; ", "opacity: ", h2, ";", c2, l2].join("");
  }
  getSvgFilter() {
    return this.shadow ? `filter: url(#SVGID_${this.shadow.id});` : "";
  }
  getSvgCommons() {
    return [this.id ? `id="${this.id}" ` : "", this.clipPath ? `clip-path="url(#${this.clipPath.clipPathId})" ` : ""].join("");
  }
  getSvgTransform(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    const s2 = t2 ? this.calcTransformMatrix() : this.calcOwnMatrix();
    return `${`transform="${Vt(s2)}`}${e3}" `;
  }
  _toSVG(t2) {
    return [""];
  }
  toSVG(t2) {
    return this._createBaseSVGMarkup(this._toSVG(t2), { reviver: t2 });
  }
  toClipPathSVG(t2) {
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(t2), { reviver: t2 });
  }
  _createBaseClipPathSVGMarkup(t2) {
    let { reviver: e3, additionalTransform: s2 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const i2 = [this.getSvgTransform(true, s2), this.getSvgCommons()].join(""), r2 = t2.indexOf("COMMON_PARTS");
    return t2[r2] = i2, e3 ? e3(t2.join("")) : t2.join("");
  }
  _createBaseSVGMarkup(t2) {
    let { noStyle: e3, reviver: s2, withShadow: i2, additionalTransform: r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const n2 = e3 ? "" : `style="${this.getSvgStyles()}" `, o2 = i2 ? `style="${this.getSvgFilter()}" ` : "", a2 = this.clipPath, h2 = this.strokeUniform ? 'vector-effect="non-scaling-stroke" ' : "", l2 = a2 && a2.absolutePositioned, c2 = this.stroke, u2 = this.fill, d2 = this.shadow, g2 = [], f2 = t2.indexOf("COMMON_PARTS");
    let p2;
    a2 && (a2.clipPathId = `CLIPPATH_${ft()}`, p2 = `<clipPath id="${a2.clipPathId}" >
${a2.toClipPathSVG(s2)}</clipPath>
`), l2 && g2.push("<g ", o2, this.getSvgCommons(), " >\n"), g2.push("<g ", this.getSvgTransform(false), l2 ? "" : o2 + this.getSvgCommons(), " >\n");
    const m2 = [n2, h2, e3 ? "" : this.addPaintOrder(), " ", r2 ? `transform="${r2}" ` : ""].join("");
    return t2[f2] = m2, Gt(u2) && g2.push(u2.toSVG(this)), Gt(c2) && g2.push(c2.toSVG(this)), d2 && g2.push(d2.toSVG(this)), a2 && g2.push(p2), g2.push(t2.join("")), g2.push("</g>\n"), l2 && g2.push("</g>\n"), s2 ? s2(g2.join("")) : g2.join("");
  }
  addPaintOrder() {
    return this.paintFirst !== H ? ` paint-order="${this.paintFirst}" ` : "";
  }
};
function Ke(t2) {
  return new RegExp("^(" + t2.join("|") + ")\\b", "i");
}
var Je = "textDecorationThickness";
var Qe = ["fontSize", "fontWeight", "fontFamily", "fontStyle"];
var Ze = ["underline", "overline", "linethrough"];
var ts = [...Qe, "lineHeight", "text", "charSpacing", "textAlign", "styles", "path", "pathStartOffset", "pathSide", "pathAlign"];
var es = [...ts, ...Ze, "textBackgroundColor", "direction", Je];
var ss = [...Qe, ...Ze, N, "strokeWidth", H, "deltaY", "textBackgroundColor", Je];
var is = { _reNewline: P, _reSpacesAndTabs: /[ \t\r]/g, _reSpaceAndTab: /[ \t\r]/, _reWords: /\S+/g, fontSize: 40, fontWeight: J, fontFamily: "Times New Roman", underline: false, overline: false, linethrough: false, textAlign: O, fontStyle: J, lineHeight: 1.16, textBackgroundColor: "", stroke: null, shadow: null, path: void 0, pathStartOffset: 0, pathSide: O, pathAlign: "baseline", charSpacing: 0, deltaY: 0, direction: q, CACHE_FONT_SIZE: 400, MIN_TEXT_WIDTH: 2, superscript: { size: 0.6, baseline: -0.35 }, subscript: { size: 0.6, baseline: 0.11 }, _fontSizeFraction: 0.222, offsets: { underline: 0.1, linethrough: -0.28167, overline: -0.81333 }, _fontSizeMult: 1.13, [Je]: 66.667 };
var rs = "justify";
var ns = "justify-left";
var os = "justify-right";
var as = "justify-center";
var hs = String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?`;
var ls = String.raw`(?:\s*,?\s+|\s*,\s*)`;
var cs = "http://www.w3.org/2000/svg";
var us = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + hs + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + hs + "))?\\s+(.*)");
var ds = { cx: O, x: O, r: "radius", cy: k, y: k, display: "visible", visibility: "visible", transform: "transformMatrix", "fill-opacity": "fillOpacity", "fill-rule": "fillRule", "font-family": "fontFamily", "font-size": "fontSize", "font-style": "fontStyle", "font-weight": "fontWeight", "letter-spacing": "charSpacing", "paint-order": "paintFirst", "stroke-dasharray": "strokeDashArray", "stroke-dashoffset": "strokeDashOffset", "stroke-linecap": "strokeLineCap", "stroke-linejoin": "strokeLineJoin", "stroke-miterlimit": "strokeMiterLimit", "stroke-opacity": "strokeOpacity", "stroke-width": "strokeWidth", "text-decoration": "textDecoration", "text-anchor": "textAnchor", opacity: "opacity", "clip-path": "clipPath", "clip-rule": "clipRule", "vector-effect": "strokeUniform", "image-rendering": "imageSmoothing", "text-decoration-thickness": Je };
var gs = "font-size";
var fs = "clip-path";
var ps = Ke(["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"]);
var ms = Ke(["symbol", "image", "marker", "pattern", "view", "svg"]);
var vs = Ke(["symbol", "g", "a", "svg", "clipPath", "defs"]);
var ys = new RegExp(String.raw`^\s*(${hs})${ls}(${hs})${ls}(${hs})${ls}(${hs})\s*$`);
var _s = "(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?";
var xs = new RegExp("(?:\\s|^)" + _s + _s + "(" + hs + "?(?:px)?)?(?:\\s?|$)(?:$|\\s)");
var Cs = class _Cs {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e3 = "string" == typeof t2 ? _Cs.parseShadow(t2) : t2;
    Object.assign(this, _Cs.ownDefaults, e3), this.id = ft();
  }
  static parseShadow(t2) {
    const e3 = t2.trim(), [, s2 = 0, i2 = 0, r2 = 0] = (xs.exec(e3) || []).map((t3) => parseFloat(t3) || 0);
    return { color: (e3.replace(xs, "") || "rgb(0,0,0)").trim(), offsetX: s2, offsetY: i2, blur: r2 };
  }
  toString() {
    return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
  }
  toSVG(t2) {
    const e3 = Ce(new ot(this.offsetX, this.offsetY), xt(-t2.angle)), i2 = new ze(this.color);
    let r2 = 40, n2 = 40;
    return t2.width && t2.height && (r2 = 100 * Wt((Math.abs(e3.x) + this.blur) / t2.width, s.NUM_FRACTION_DIGITS) + 20, n2 = 100 * Wt((Math.abs(e3.y) + this.blur) / t2.height, s.NUM_FRACTION_DIGITS) + 20), t2.flipX && (e3.x *= -1), t2.flipY && (e3.y *= -1), `<filter id="SVGID_${this.id}" y="-${n2}%" height="${100 + 2 * n2}%" x="-${r2}%" width="${100 + 2 * r2}%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="${Wt(this.blur ? this.blur / 2 : 0, s.NUM_FRACTION_DIGITS)}"></feGaussianBlur>
	<feOffset dx="${Wt(e3.x, s.NUM_FRACTION_DIGITS)}" dy="${Wt(e3.y, s.NUM_FRACTION_DIGITS)}" result="oBlur" ></feOffset>
	<feFlood flood-color="${i2.toRgb()}" flood-opacity="${i2.getAlpha()}"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`;
  }
  toObject() {
    const t2 = { color: this.color, blur: this.blur, offsetX: this.offsetX, offsetY: this.offsetY, affectStroke: this.affectStroke, nonScaling: this.nonScaling, type: this.constructor.type }, e3 = _Cs.ownDefaults;
    return this.includeDefaultValues ? t2 : Yt(t2, (t3, s2) => t3 !== e3[s2]);
  }
  static async fromObject(t2) {
    return new this(t2);
  }
};
t(Cs, "ownDefaults", { color: "rgb(0,0,0)", blur: 0, offsetX: 0, offsetY: 0, affectStroke: false, includeDefaultValues: true, nonScaling: false }), t(Cs, "type", "shadow"), tt.setClass(Cs, "shadow");
var bs = (t2, e3, s2) => Math.max(t2, Math.min(e3, s2));
var Ss = [k, O, W, V, "flipX", "flipY", "originX", "originY", "angle", "opacity", "globalCompositeOperation", "shadow", "visible", G, z];
var ws = [H, N, "strokeWidth", "strokeDashArray", "width", "height", "paintFirst", "strokeUniform", "strokeLineCap", "strokeDashOffset", "strokeLineJoin", "strokeMiterLimit", "backgroundColor", "clipPath"];
var Ts = { top: 0, left: 0, width: 0, height: 0, angle: 0, flipX: false, flipY: false, scaleX: 1, scaleY: 1, minScaleLimit: 0, skewX: 0, skewY: 0, originX: T, originY: T, strokeWidth: 1, strokeUniform: false, padding: 0, opacity: 1, paintFirst: H, fill: "rgb(0,0,0)", fillRule: "nonzero", stroke: null, strokeDashArray: null, strokeDashOffset: 0, strokeLineCap: "butt", strokeLineJoin: "miter", strokeMiterLimit: 4, globalCompositeOperation: "source-over", backgroundColor: "", shadow: null, visible: true, includeDefaultValues: true, excludeFromExport: false, objectCaching: true, clipPath: void 0, inverted: false, absolutePositioned: false, centeredRotation: true, centeredScaling: false, dirty: true };
var Os = (t2, e3, s2, i2) => (t2 < Math.abs(e3) ? (t2 = e3, i2 = s2 / 4) : i2 = 0 === e3 && 0 === t2 ? s2 / x * Math.asin(1) : s2 / x * Math.asin(e3 / t2), { a: t2, c: e3, p: s2, s: i2 });
var ks = (t2, e3, s2, i2, r2) => t2 * Math.pow(2, 10 * (i2 -= 1)) * Math.sin((i2 * r2 - e3) * x / s2);
var Ds = (t2, e3, s2, i2) => -s2 * Math.cos(t2 / i2 * y) + s2 + e3;
var Ms = (t2, e3, s2, i2) => (t2 /= i2) < 1 / 2.75 ? s2 * (7.5625 * t2 * t2) + e3 : t2 < 2 / 2.75 ? s2 * (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) + e3 : t2 < 2.5 / 2.75 ? s2 * (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) + e3 : s2 * (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375) + e3;
var Es = (t2, e3, s2, i2) => s2 - Ms(i2 - t2, 0, s2, i2) + e3;
var Ps = Object.freeze({ __proto__: null, defaultEasing: Ds, easeInBack: function(t2, e3, s2, i2) {
  let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
  return s2 * (t2 /= i2) * t2 * ((r2 + 1) * t2 - r2) + e3;
}, easeInBounce: Es, easeInCirc: (t2, e3, s2, i2) => -s2 * (Math.sqrt(1 - (t2 /= i2) * t2) - 1) + e3, easeInCubic: (t2, e3, s2, i2) => s2 * (t2 / i2) ** 3 + e3, easeInElastic: (t2, e3, s2, i2) => {
  const r2 = s2;
  let n2 = 0;
  if (0 === t2) return e3;
  if (1 === (t2 /= i2)) return e3 + s2;
  n2 || (n2 = 0.3 * i2);
  const { a: o2, s: a2, p: h2 } = Os(r2, s2, n2, 1.70158);
  return -ks(o2, a2, h2, t2, i2) + e3;
}, easeInExpo: (t2, e3, s2, i2) => 0 === t2 ? e3 : s2 * 2 ** (10 * (t2 / i2 - 1)) + e3, easeInOutBack: function(t2, e3, s2, i2) {
  let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
  return (t2 /= i2 / 2) < 1 ? s2 / 2 * (t2 * t2 * ((1 + (r2 *= 1.525)) * t2 - r2)) + e3 : s2 / 2 * ((t2 -= 2) * t2 * ((1 + (r2 *= 1.525)) * t2 + r2) + 2) + e3;
}, easeInOutBounce: (t2, e3, s2, i2) => t2 < i2 / 2 ? 0.5 * Es(2 * t2, 0, s2, i2) + e3 : 0.5 * Ms(2 * t2 - i2, 0, s2, i2) + 0.5 * s2 + e3, easeInOutCirc: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? -s2 / 2 * (Math.sqrt(1 - t2 ** 2) - 1) + e3 : s2 / 2 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1) + e3, easeInOutCubic: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 3 + e3 : s2 / 2 * ((t2 - 2) ** 3 + 2) + e3, easeInOutElastic: (t2, e3, s2, i2) => {
  const r2 = s2;
  let n2 = 0;
  if (0 === t2) return e3;
  if (2 === (t2 /= i2 / 2)) return e3 + s2;
  n2 || (n2 = i2 * (0.3 * 1.5));
  const { a: o2, s: a2, p: h2, c: l2 } = Os(r2, s2, n2, 1.70158);
  return t2 < 1 ? -0.5 * ks(o2, a2, h2, t2, i2) + e3 : o2 * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 * i2 - a2) * x / h2) * 0.5 + l2 + e3;
}, easeInOutExpo: (t2, e3, s2, i2) => 0 === t2 ? e3 : t2 === i2 ? e3 + s2 : (t2 /= i2 / 2) < 1 ? s2 / 2 * 2 ** (10 * (t2 - 1)) + e3 : s2 / 2 * -(2 ** (-10 * --t2) + 2) + e3, easeInOutQuad: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 2 + e3 : -s2 / 2 * (--t2 * (t2 - 2) - 1) + e3, easeInOutQuart: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 4 + e3 : -s2 / 2 * ((t2 -= 2) * t2 ** 3 - 2) + e3, easeInOutQuint: (t2, e3, s2, i2) => (t2 /= i2 / 2) < 1 ? s2 / 2 * t2 ** 5 + e3 : s2 / 2 * ((t2 - 2) ** 5 + 2) + e3, easeInOutSine: (t2, e3, s2, i2) => -s2 / 2 * (Math.cos(Math.PI * t2 / i2) - 1) + e3, easeInQuad: (t2, e3, s2, i2) => s2 * (t2 /= i2) * t2 + e3, easeInQuart: (t2, e3, s2, i2) => s2 * (t2 /= i2) * t2 ** 3 + e3, easeInQuint: (t2, e3, s2, i2) => s2 * (t2 / i2) ** 5 + e3, easeInSine: (t2, e3, s2, i2) => -s2 * Math.cos(t2 / i2 * y) + s2 + e3, easeOutBack: function(t2, e3, s2, i2) {
  let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1.70158;
  return s2 * ((t2 = t2 / i2 - 1) * t2 * ((r2 + 1) * t2 + r2) + 1) + e3;
}, easeOutBounce: Ms, easeOutCirc: (t2, e3, s2, i2) => s2 * Math.sqrt(1 - (t2 = t2 / i2 - 1) * t2) + e3, easeOutCubic: (t2, e3, s2, i2) => s2 * ((t2 / i2 - 1) ** 3 + 1) + e3, easeOutElastic: (t2, e3, s2, i2) => {
  const r2 = s2;
  let n2 = 0;
  if (0 === t2) return e3;
  if (1 === (t2 /= i2)) return e3 + s2;
  n2 || (n2 = 0.3 * i2);
  const { a: o2, s: a2, p: h2, c: l2 } = Os(r2, s2, n2, 1.70158);
  return o2 * 2 ** (-10 * t2) * Math.sin((t2 * i2 - a2) * x / h2) + l2 + e3;
}, easeOutExpo: (t2, e3, s2, i2) => t2 === i2 ? e3 + s2 : s2 * -(2 ** (-10 * t2 / i2) + 1) + e3, easeOutQuad: (t2, e3, s2, i2) => -s2 * (t2 /= i2) * (t2 - 2) + e3, easeOutQuart: (t2, e3, s2, i2) => -s2 * ((t2 = t2 / i2 - 1) * t2 ** 3 - 1) + e3, easeOutQuint: (t2, e3, s2, i2) => s2 * ((t2 / i2 - 1) ** 5 + 1) + e3, easeOutSine: (t2, e3, s2, i2) => s2 * Math.sin(t2 / i2 * y) + e3 });
var As = () => false;
var js = class {
  constructor(e3) {
    let { startValue: s2, byValue: i2, duration: r2 = 500, delay: n2 = 0, easing: o2 = Ds, onStart: a2 = v, onChange: h2 = v, onComplete: l2 = v, abort: c2 = As, target: u2 } = e3;
    t(this, "_state", "pending"), t(this, "durationProgress", 0), t(this, "valueProgress", 0), this.tick = this.tick.bind(this), this.duration = r2, this.delay = n2, this.easing = o2, this._onStart = a2, this._onChange = h2, this._onComplete = l2, this._abort = c2, this.target = u2, this.startValue = s2, this.byValue = i2, this.value = this.startValue, this.endValue = Object.freeze(this.calculate(this.duration).value);
  }
  get state() {
    return this._state;
  }
  isDone() {
    return "aborted" === this._state || "completed" === this._state;
  }
  start() {
    const t2 = (t3) => {
      "pending" === this._state && (this.startTime = t3 || +/* @__PURE__ */ new Date(), this._state = "running", this._onStart(), this.tick(this.startTime));
    };
    this.register(), this.delay > 0 ? setTimeout(() => ut(t2), this.delay) : ut(t2);
  }
  tick(t2) {
    const e3 = (t2 || +/* @__PURE__ */ new Date()) - this.startTime, s2 = Math.min(e3, this.duration);
    this.durationProgress = s2 / this.duration;
    const { value: i2, valueProgress: r2 } = this.calculate(s2);
    this.value = Object.freeze(i2), this.valueProgress = r2, "aborted" !== this._state && (this._abort(this.value, this.valueProgress, this.durationProgress) ? (this._state = "aborted", this.unregister()) : e3 >= this.duration ? (this.durationProgress = this.valueProgress = 1, this._onChange(this.endValue, this.valueProgress, this.durationProgress), this._state = "completed", this._onComplete(this.endValue, this.valueProgress, this.durationProgress), this.unregister()) : (this._onChange(this.value, this.valueProgress, this.durationProgress), ut(this.tick)));
  }
  register() {
    et.push(this);
  }
  unregister() {
    et.remove(this);
  }
  abort() {
    this._state = "aborted", this.unregister();
  }
};
var Fs = class extends js {
  constructor(t2) {
    let { startValue: e3 = 0, endValue: s2 = 100, ...i2 } = t2;
    super({ ...i2, startValue: e3, byValue: s2 - e3 });
  }
  calculate(t2) {
    const e3 = this.easing(t2, this.startValue, this.byValue, this.duration);
    return { value: e3, valueProgress: Math.abs((e3 - this.startValue) / this.byValue) };
  }
};
var Ls = class extends js {
  constructor(t2) {
    let { startValue: e3 = [0], endValue: s2 = [100], ...i2 } = t2;
    super({ ...i2, startValue: e3, byValue: s2.map((t3, s3) => t3 - e3[s3]) });
  }
  calculate(t2) {
    const e3 = this.startValue.map((e4, s2) => this.easing(t2, e4, this.byValue[s2], this.duration, s2));
    return { value: e3, valueProgress: Math.abs((e3[0] - this.startValue[0]) / this.byValue[0]) };
  }
};
var Is = (t2, e3, s2, i2) => e3 + s2 * (1 - Math.cos(t2 / i2 * y));
var Rs = (t2) => t2 && ((e3, s2, i2) => t2(new ze(e3).toRgba(), s2, i2));
var Bs = class extends js {
  constructor(t2) {
    let { startValue: e3, endValue: s2, easing: i2 = Is, onChange: r2, onComplete: n2, abort: o2, ...a2 } = t2;
    const h2 = new ze(e3).getSource(), l2 = new ze(s2).getSource();
    super({ ...a2, startValue: h2, byValue: l2.map((t3, e4) => t3 - h2[e4]), easing: i2, onChange: Rs(r2), onComplete: Rs(n2), abort: Rs(o2) });
  }
  calculate(t2) {
    const [e3, s2, i2, r2] = this.startValue.map((e4, s3) => this.easing(t2, e4, this.byValue[s3], this.duration, s3)), n2 = [...[e3, s2, i2].map(Math.round), bs(0, r2, 1)];
    return { value: n2, valueProgress: n2.map((t3, e4) => 0 !== this.byValue[e4] ? Math.abs((t3 - this.startValue[e4]) / this.byValue[e4]) : 0).find((t3) => 0 !== t3) || 0 };
  }
};
function $s(t2) {
  const e3 = ((t3) => Array.isArray(t3.startValue) || Array.isArray(t3.endValue))(t2) ? new Ls(t2) : new Fs(t2);
  return e3.start(), e3;
}
function Xs(t2) {
  const e3 = new Bs(t2);
  return e3.start(), e3;
}
var Ys = class _Ys {
  constructor(t2) {
    this.status = t2, this.points = [];
  }
  includes(t2) {
    return this.points.some((e3) => e3.eq(t2));
  }
  append() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    return this.points = this.points.concat(e3.filter((t3) => !this.includes(t3))), this;
  }
  static isPointContained(t2, e3, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (e3.eq(s2)) return t2.eq(e3);
    if (e3.x === s2.x) return t2.x === e3.x && (i2 || t2.y >= Math.min(e3.y, s2.y) && t2.y <= Math.max(e3.y, s2.y));
    if (e3.y === s2.y) return t2.y === e3.y && (i2 || t2.x >= Math.min(e3.x, s2.x) && t2.x <= Math.max(e3.x, s2.x));
    {
      const r2 = be(e3, s2), n2 = be(e3, t2).divide(r2);
      return i2 ? Math.abs(n2.x) === Math.abs(n2.y) : n2.x === n2.y && n2.x >= 0 && n2.x <= 1;
    }
  }
  static isPointInPolygon(t2, e3) {
    const s2 = new ot(t2).setX(Math.min(t2.x - 1, ...e3.map((t3) => t3.x)));
    let i2 = 0;
    for (let r2 = 0; r2 < e3.length; r2++) {
      const n2 = this.intersectSegmentSegment(e3[r2], e3[(r2 + 1) % e3.length], t2, s2);
      if (n2.includes(t2)) return true;
      i2 += Number("Intersection" === n2.status);
    }
    return i2 % 2 == 1;
  }
  static intersectLineLine(t2, e3, s2, i2) {
    let r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
    const o2 = e3.x - t2.x, a2 = e3.y - t2.y, h2 = i2.x - s2.x, l2 = i2.y - s2.y, c2 = t2.x - s2.x, u2 = t2.y - s2.y, d2 = h2 * u2 - l2 * c2, g2 = o2 * u2 - a2 * c2, f2 = l2 * o2 - h2 * a2;
    if (0 !== f2) {
      const e4 = d2 / f2, s3 = g2 / f2;
      return (r2 || 0 <= e4 && e4 <= 1) && (n2 || 0 <= s3 && s3 <= 1) ? new _Ys("Intersection").append(new ot(t2.x + e4 * o2, t2.y + e4 * a2)) : new _Ys();
    }
    if (0 === d2 || 0 === g2) {
      const o3 = r2 || n2 || _Ys.isPointContained(t2, s2, i2) || _Ys.isPointContained(e3, s2, i2) || _Ys.isPointContained(s2, t2, e3) || _Ys.isPointContained(i2, t2, e3);
      return new _Ys(o3 ? "Coincident" : void 0);
    }
    return new _Ys("Parallel");
  }
  static intersectSegmentLine(t2, e3, s2, i2) {
    return _Ys.intersectLineLine(t2, e3, s2, i2, false, true);
  }
  static intersectSegmentSegment(t2, e3, s2, i2) {
    return _Ys.intersectLineLine(t2, e3, s2, i2, false, false);
  }
  static intersectLinePolygon(t2, e3, s2) {
    let i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
    const r2 = new _Ys(), n2 = s2.length;
    for (let o2, a2, h2, l2 = 0; l2 < n2; l2++) {
      if (o2 = s2[l2], a2 = s2[(l2 + 1) % n2], h2 = _Ys.intersectLineLine(t2, e3, o2, a2, i2, false), "Coincident" === h2.status) return h2;
      r2.append(...h2.points);
    }
    return r2.points.length > 0 && (r2.status = "Intersection"), r2;
  }
  static intersectSegmentPolygon(t2, e3, s2) {
    return _Ys.intersectLinePolygon(t2, e3, s2, false);
  }
  static intersectPolygonPolygon(t2, e3) {
    const s2 = new _Ys(), i2 = t2.length, r2 = [];
    for (let n2 = 0; n2 < i2; n2++) {
      const o2 = t2[n2], a2 = t2[(n2 + 1) % i2], h2 = _Ys.intersectSegmentPolygon(o2, a2, e3);
      "Coincident" === h2.status ? (r2.push(h2), s2.append(o2, a2)) : s2.append(...h2.points);
    }
    return r2.length > 0 && r2.length === t2.length ? new _Ys("Coincident") : (s2.points.length > 0 && (s2.status = "Intersection"), s2);
  }
  static intersectPolygonRectangle(t2, e3, s2) {
    const i2 = e3.min(s2), r2 = e3.max(s2), n2 = new ot(r2.x, i2.y), o2 = new ot(i2.x, r2.y);
    return _Ys.intersectPolygonPolygon(t2, [i2, n2, r2, o2]);
  }
};
var Ws = class extends ct {
  getX() {
    return this.getXY().x;
  }
  setX(t2) {
    this.setXY(this.getXY().setX(t2));
  }
  getY() {
    return this.getXY().y;
  }
  setY(t2) {
    this.setXY(this.getXY().setY(t2));
  }
  getRelativeX() {
    return this.left;
  }
  setRelativeX(t2) {
    this.left = t2;
  }
  getRelativeY() {
    return this.top;
  }
  setRelativeY(t2) {
    this.top = t2;
  }
  getXY() {
    const t2 = this.getRelativeXY();
    return this.group ? St(t2, this.group.calcTransformMatrix()) : t2;
  }
  setXY(t2, e3, s2) {
    this.group && (t2 = St(t2, wt(this.group.calcTransformMatrix()))), this.setRelativeXY(t2, e3, s2);
  }
  getRelativeXY() {
    return new ot(this.left, this.top);
  }
  setRelativeXY(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.originX, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.originY;
    this.setPositionByOrigin(t2, e3, s2);
  }
  isStrokeAccountedForInDimensions() {
    return false;
  }
  getCoords() {
    const { tl: t2, tr: e3, br: s2, bl: i2 } = this.aCoords || (this.aCoords = this.calcACoords()), r2 = [t2, e3, s2, i2];
    if (this.group) {
      const t3 = this.group.calcTransformMatrix();
      return r2.map((e4) => St(e4, t3));
    }
    return r2;
  }
  intersectsWithRect(t2, e3) {
    return "Intersection" === Ys.intersectPolygonRectangle(this.getCoords(), t2, e3).status;
  }
  intersectsWithObject(t2) {
    const e3 = Ys.intersectPolygonPolygon(this.getCoords(), t2.getCoords());
    return "Intersection" === e3.status || "Coincident" === e3.status || t2.isContainedWithinObject(this) || this.isContainedWithinObject(t2);
  }
  isContainedWithinObject(t2) {
    return this.getCoords().every((e3) => t2.containsPoint(e3));
  }
  isContainedWithinRect(t2, e3) {
    const { left: s2, top: i2, width: r2, height: n2 } = this.getBoundingRect();
    return s2 >= t2.x && s2 + r2 <= e3.x && i2 >= t2.y && i2 + n2 <= e3.y;
  }
  isOverlapping(t2) {
    return this.intersectsWithObject(t2) || this.isContainedWithinObject(t2) || t2.isContainedWithinObject(this);
  }
  containsPoint(t2) {
    return Ys.isPointInPolygon(t2, this.getCoords());
  }
  isOnScreen() {
    if (!this.canvas) return false;
    const { tl: t2, br: e3 } = this.canvas.vptCoords;
    return !!this.getCoords().some((s2) => s2.x <= e3.x && s2.x >= t2.x && s2.y <= e3.y && s2.y >= t2.y) || (!!this.intersectsWithRect(t2, e3) || this.containsPoint(t2.midPointFrom(e3)));
  }
  isPartiallyOnScreen() {
    if (!this.canvas) return false;
    const { tl: t2, br: e3 } = this.canvas.vptCoords;
    if (this.intersectsWithRect(t2, e3)) return true;
    return this.getCoords().every((s2) => (s2.x >= e3.x || s2.x <= t2.x) && (s2.y >= e3.y || s2.y <= t2.y)) && this.containsPoint(t2.midPointFrom(e3));
  }
  getBoundingRect() {
    return ae(this.getCoords());
  }
  getScaledWidth() {
    return this._getTransformedDimensions().x;
  }
  getScaledHeight() {
    return this._getTransformedDimensions().y;
  }
  scale(t2) {
    this._set(W, t2), this._set(V, t2), this.setCoords();
  }
  scaleToWidth(t2) {
    const e3 = this.getBoundingRect().width / this.getScaledWidth();
    return this.scale(t2 / this.width / e3);
  }
  scaleToHeight(t2) {
    const e3 = this.getBoundingRect().height / this.getScaledHeight();
    return this.scale(t2 / this.height / e3);
  }
  getCanvasRetinaScaling() {
    var t2;
    return (null === (t2 = this.canvas) || void 0 === t2 ? void 0 : t2.getRetinaScaling()) || 1;
  }
  getTotalAngle() {
    return this.group ? Ct(kt(this.calcTransformMatrix())) : this.angle;
  }
  getViewportTransform() {
    var t2;
    return (null === (t2 = this.canvas) || void 0 === t2 ? void 0 : t2.viewportTransform) || b.concat();
  }
  calcACoords() {
    const t2 = Et({ angle: this.angle }), { x: e3, y: s2 } = this.getRelativeCenterPoint(), i2 = Mt(e3, s2), r2 = Tt(i2, t2), n2 = this._getTransformedDimensions(), o2 = n2.x / 2, a2 = n2.y / 2;
    return { tl: St({ x: -o2, y: -a2 }, r2), tr: St({ x: o2, y: -a2 }, r2), bl: St({ x: -o2, y: a2 }, r2), br: St({ x: o2, y: a2 }, r2) };
  }
  setCoords() {
    this.aCoords = this.calcACoords();
  }
  transformMatrixKey() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = [];
    return !t2 && this.group && (e3 = this.group.transformMatrixKey(t2)), e3.push(this.top, this.left, this.width, this.height, this.scaleX, this.scaleY, this.angle, this.strokeWidth, this.skewX, this.skewY, +this.flipX, +this.flipY, ye(this.originX), ye(this.originY)), e3;
  }
  calcTransformMatrix() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e3 = this.calcOwnMatrix();
    if (t2 || !this.group) return e3;
    const s2 = this.transformMatrixKey(t2), i2 = this.matrixCache;
    return i2 && i2.key.every((t3, e4) => t3 === s2[e4]) ? i2.value : (this.group && (e3 = Tt(this.group.calcTransformMatrix(false), e3)), this.matrixCache = { key: s2, value: e3 }, e3);
  }
  calcOwnMatrix() {
    const t2 = this.transformMatrixKey(true), e3 = this.ownMatrixCache;
    if (e3 && e3.key.every((e4, s3) => e4 === t2[s3])) return e3.value;
    const s2 = this.getRelativeCenterPoint(), i2 = { angle: this.angle, translateX: s2.x, translateY: s2.y, scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, flipX: this.flipX, flipY: this.flipY }, r2 = It(i2);
    return this.ownMatrixCache = { key: t2, value: r2 }, r2;
  }
  _getNonTransformedDimensions() {
    return new ot(this.width, this.height).scalarAdd(this.strokeWidth);
  }
  _calculateCurrentDimensions(t2) {
    return this._getTransformedDimensions(t2).transform(this.getViewportTransform(), true).scalarAdd(2 * this.padding);
  }
  _getTransformedDimensions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e3 = { scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, width: this.width, height: this.height, strokeWidth: this.strokeWidth, ...t2 }, s2 = e3.strokeWidth;
    let i2 = s2, r2 = 0;
    this.strokeUniform && (i2 = 0, r2 = s2);
    const n2 = e3.width + i2, o2 = e3.height + i2;
    let a2;
    return a2 = 0 === e3.skewX && 0 === e3.skewY ? new ot(n2 * e3.scaleX, o2 * e3.scaleY) : de(n2, o2, Lt(e3)), a2.scalarAdd(r2);
  }
  translateToGivenOrigin(t2, e3, s2, i2, r2) {
    let n2 = t2.x, o2 = t2.y;
    const a2 = ye(i2) - ye(e3), h2 = ye(r2) - ye(s2);
    if (a2 || h2) {
      const t3 = this._getTransformedDimensions();
      n2 += a2 * t3.x, o2 += h2 * t3.y;
    }
    return new ot(n2, o2);
  }
  translateToCenterPoint(t2, e3, s2) {
    if (e3 === T && s2 === T) return t2;
    const i2 = this.translateToGivenOrigin(t2, e3, s2, T, T);
    return this.angle ? i2.rotate(xt(this.angle), t2) : i2;
  }
  translateToOriginPoint(t2, e3, s2) {
    const i2 = this.translateToGivenOrigin(t2, T, T, e3, s2);
    return this.angle ? i2.rotate(xt(this.angle), t2) : i2;
  }
  getCenterPoint() {
    const t2 = this.getRelativeCenterPoint();
    return this.group ? St(t2, this.group.calcTransformMatrix()) : t2;
  }
  getRelativeCenterPoint() {
    return this.translateToCenterPoint(new ot(this.left, this.top), this.originX, this.originY);
  }
  getPointByOrigin(t2, e3) {
    return this.getPositionByOrigin(t2, e3);
  }
  getPositionByOrigin(t2, e3) {
    return this.translateToOriginPoint(this.getRelativeCenterPoint(), t2, e3);
  }
  setPositionByOrigin(t2, e3, s2) {
    const i2 = this.translateToCenterPoint(t2, e3, s2), r2 = this.translateToOriginPoint(i2, this.originX, this.originY);
    this.set({ left: r2.x, top: r2.y });
  }
  _getLeftTopCoords() {
    return this.getPositionByOrigin(O, k);
  }
  positionByLeftTop(t2) {
    return this.setPositionByOrigin(t2, O, k);
  }
};
var Vs = class e2 extends Ws {
  static getDefaults() {
    return e2.ownDefaults;
  }
  get type() {
    const t2 = this.constructor.type;
    return "FabricObject" === t2 ? "object" : t2.toLowerCase();
  }
  set type(t2) {
    i("warn", "Setting type has no effect", t2);
  }
  constructor(s2) {
    super(), t(this, "_cacheContext", null), Object.assign(this, e2.ownDefaults), this.setOptions(s2);
  }
  _createCacheCanvas() {
    this._cacheCanvas = pt(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = true;
  }
  _limitCacheSize(t2) {
    const e3 = t2.width, i2 = t2.height, r2 = s.maxCacheSideLimit, n2 = s.minCacheSideLimit;
    if (e3 <= r2 && i2 <= r2 && e3 * i2 <= s.perfLimitSizeTotal) return e3 < n2 && (t2.width = n2), i2 < n2 && (t2.height = n2), t2;
    const o2 = e3 / i2, [a2, h2] = p.limitDimsByArea(o2), l2 = bs(n2, a2, r2), c2 = bs(n2, h2, r2);
    return e3 > l2 && (t2.zoomX /= e3 / l2, t2.width = l2, t2.capped = true), i2 > c2 && (t2.zoomY /= i2 / c2, t2.height = c2, t2.capped = true), t2;
  }
  _getCacheCanvasDimensions() {
    const t2 = this.getTotalObjectScaling(), e3 = this._getTransformedDimensions({ skewX: 0, skewY: 0 }), s2 = e3.x * t2.x / this.scaleX, i2 = e3.y * t2.y / this.scaleY;
    return { width: Math.ceil(s2 + 2), height: Math.ceil(i2 + 2), zoomX: t2.x, zoomY: t2.y, x: s2, y: i2 };
  }
  _updateCacheCanvas() {
    const t2 = this._cacheCanvas, e3 = this._cacheContext, { width: s2, height: i2, zoomX: r2, zoomY: n2, x: o2, y: a2 } = this._limitCacheSize(this._getCacheCanvasDimensions()), h2 = s2 !== t2.width || i2 !== t2.height, l2 = this.zoomX !== r2 || this.zoomY !== n2;
    if (!t2 || !e3) return false;
    if (h2 || l2) {
      s2 !== t2.width || i2 !== t2.height ? (t2.width = s2, t2.height = i2) : (e3.setTransform(1, 0, 0, 1, 0, 0), e3.clearRect(0, 0, t2.width, t2.height));
      const h3 = o2 / 2, l3 = a2 / 2;
      return this.cacheTranslationX = Math.round(t2.width / 2 - h3) + h3, this.cacheTranslationY = Math.round(t2.height / 2 - l3) + l3, e3.translate(this.cacheTranslationX, this.cacheTranslationY), e3.scale(r2, n2), this.zoomX = r2, this.zoomY = n2, true;
    }
    return false;
  }
  setOptions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this._setOptions(t2);
  }
  transform(t2) {
    const e3 = this.group && !this.group._transformDone || this.group && this.canvas && t2 === this.canvas.contextTop, s2 = this.calcTransformMatrix(!e3);
    t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]);
  }
  getObjectScaling() {
    if (!this.group) return new ot(Math.abs(this.scaleX), Math.abs(this.scaleY));
    const t2 = Dt(this.calcTransformMatrix());
    return new ot(Math.abs(t2.scaleX), Math.abs(t2.scaleY));
  }
  getTotalObjectScaling() {
    const t2 = this.getObjectScaling();
    if (this.canvas) {
      const e3 = this.canvas.getZoom(), s2 = this.getCanvasRetinaScaling();
      return t2.scalarMultiply(e3 * s2);
    }
    return t2;
  }
  getObjectOpacity() {
    let t2 = this.opacity;
    return this.group && (t2 *= this.group.getObjectOpacity()), t2;
  }
  _constrainScale(t2) {
    return Math.abs(t2) < this.minScaleLimit ? t2 < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t2 ? 1e-4 : t2;
  }
  _set(t2, e3) {
    t2 !== W && t2 !== V || (e3 = this._constrainScale(e3)), t2 === W && e3 < 0 ? (this.flipX = !this.flipX, e3 *= -1) : "scaleY" === t2 && e3 < 0 ? (this.flipY = !this.flipY, e3 *= -1) : "shadow" !== t2 || !e3 || e3 instanceof Cs || (e3 = new Cs(e3));
    const s2 = this[t2] !== e3;
    return this[t2] = e3, s2 && this.constructor.cacheProperties.includes(t2) && (this.dirty = true), this.parent && (this.dirty || s2 && this.constructor.stateProperties.includes(t2)) && this.parent._set("dirty", true), this;
  }
  isNotVisible() {
    return 0 === this.opacity || !this.width && !this.height && 0 === this.strokeWidth || !this.visible;
  }
  render(t2) {
    this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t2.save(), this._setupCompositeOperation(t2), this.drawSelectionBackground(t2), this.transform(t2), this._setOpacity(t2), this._setShadow(t2), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t2)) : (this._removeCacheCanvas(), this.drawObject(t2, false, {}), this.dirty = false), t2.restore());
  }
  drawSelectionBackground(t2) {
  }
  renderCache(t2) {
    if (t2 = t2 || {}, this._cacheCanvas && this._cacheContext || this._createCacheCanvas(), this.isCacheDirty() && this._cacheContext) {
      const { zoomX: e3, zoomY: s2, cacheTranslationX: i2, cacheTranslationY: r2 } = this, { width: n2, height: o2 } = this._cacheCanvas;
      this.drawObject(this._cacheContext, t2.forClipping, { zoomX: e3, zoomY: s2, cacheTranslationX: i2, cacheTranslationY: r2, width: n2, height: o2, parentClipPaths: [] }), this.dirty = false;
    }
  }
  _removeCacheCanvas() {
    this._cacheCanvas = void 0, this._cacheContext = null;
  }
  hasStroke() {
    return !!this.stroke && "transparent" !== this.stroke && 0 !== this.strokeWidth;
  }
  hasFill() {
    return !!this.fill && "transparent" !== this.fill;
  }
  needsItsOwnCache() {
    return !!(this.paintFirst === N && this.hasFill() && this.hasStroke() && this.shadow) || !!this.clipPath;
  }
  shouldCache() {
    return this.ownCaching = this.objectCaching && (!this.parent || !this.parent.isOnACache()) || this.needsItsOwnCache(), this.ownCaching;
  }
  willDrawShadow() {
    return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
  }
  drawClipPathOnCache(t2, e3, s2) {
    t2.save(), e3.inverted ? t2.globalCompositeOperation = "destination-out" : t2.globalCompositeOperation = "destination-in", t2.setTransform(1, 0, 0, 1, 0, 0), t2.drawImage(s2, 0, 0), t2.restore();
  }
  drawObject(t2, e3, s2) {
    const i2 = this.fill, r2 = this.stroke;
    e3 ? (this.fill = "black", this.stroke = "", this._setClippingProperties(t2)) : this._renderBackground(t2), this._render(t2), this._drawClipPath(t2, this.clipPath, s2), this.fill = i2, this.stroke = r2;
  }
  createClipPathLayer(t2, e3) {
    const s2 = vt(e3), i2 = s2.getContext("2d");
    if (i2.translate(e3.cacheTranslationX, e3.cacheTranslationY), i2.scale(e3.zoomX, e3.zoomY), t2._cacheCanvas = s2, e3.parentClipPaths.forEach((t3) => {
      t3.transform(i2);
    }), e3.parentClipPaths.push(t2), t2.absolutePositioned) {
      const t3 = wt(this.calcTransformMatrix());
      i2.transform(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
    }
    return t2.transform(i2), t2.drawObject(i2, true, e3), s2;
  }
  _drawClipPath(t2, e3, s2) {
    if (!e3) return;
    e3._transformDone = true;
    const i2 = this.createClipPathLayer(e3, s2);
    this.drawClipPathOnCache(t2, e3, i2);
  }
  drawCacheOnCanvas(t2) {
    t2.scale(1 / this.zoomX, 1 / this.zoomY), t2.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
  }
  isCacheDirty() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (this.isNotVisible()) return false;
    const e3 = this._cacheCanvas, s2 = this._cacheContext;
    return !(!e3 || !s2 || t2 || !this._updateCacheCanvas()) || !!(this.dirty || this.clipPath && this.clipPath.absolutePositioned) && (e3 && s2 && !t2 && (s2.save(), s2.setTransform(1, 0, 0, 1, 0, 0), s2.clearRect(0, 0, e3.width, e3.height), s2.restore()), true);
  }
  _renderBackground(t2) {
    if (!this.backgroundColor) return;
    const e3 = this._getNonTransformedDimensions();
    t2.fillStyle = this.backgroundColor, t2.fillRect(-e3.x / 2, -e3.y / 2, e3.x, e3.y), this._removeShadow(t2);
  }
  _setOpacity(t2) {
    this.group && !this.group._transformDone ? t2.globalAlpha = this.getObjectOpacity() : t2.globalAlpha *= this.opacity;
  }
  _setStrokeStyles(t2, e3) {
    const s2 = e3.stroke;
    s2 && (t2.lineWidth = e3.strokeWidth, t2.lineCap = e3.strokeLineCap, t2.lineDashOffset = e3.strokeDashOffset, t2.lineJoin = e3.strokeLineJoin, t2.miterLimit = e3.strokeMiterLimit, Gt(s2) ? "percentage" === s2.gradientUnits || s2.gradientTransform || s2.patternTransform ? this._applyPatternForTransformedGradient(t2, s2) : (t2.strokeStyle = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : t2.strokeStyle = e3.stroke);
  }
  _setFillStyles(t2, e3) {
    let { fill: s2 } = e3;
    s2 && (Gt(s2) ? (t2.fillStyle = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : t2.fillStyle = s2);
  }
  _setClippingProperties(t2) {
    t2.globalAlpha = 1, t2.strokeStyle = "transparent", t2.fillStyle = "#000000";
  }
  _setLineDash(t2, e3) {
    e3 && 0 !== e3.length && t2.setLineDash(e3);
  }
  _setShadow(t2) {
    if (!this.shadow) return;
    const e3 = this.shadow, i2 = this.canvas, r2 = this.getCanvasRetinaScaling(), [n2, , , o2] = (null == i2 ? void 0 : i2.viewportTransform) || b, a2 = n2 * r2, h2 = o2 * r2, l2 = e3.nonScaling ? new ot(1, 1) : this.getObjectScaling();
    t2.shadowColor = e3.color, t2.shadowBlur = e3.blur * s.browserShadowBlurConstant * (a2 + h2) * (l2.x + l2.y) / 4, t2.shadowOffsetX = e3.offsetX * a2 * l2.x, t2.shadowOffsetY = e3.offsetY * h2 * l2.y;
  }
  _removeShadow(t2) {
    this.shadow && (t2.shadowColor = "", t2.shadowBlur = t2.shadowOffsetX = t2.shadowOffsetY = 0);
  }
  _applyPatternGradientTransform(t2, e3) {
    if (!Gt(e3)) return { offsetX: 0, offsetY: 0 };
    const s2 = e3.gradientTransform || e3.patternTransform, i2 = -this.width / 2 + e3.offsetX || 0, r2 = -this.height / 2 + e3.offsetY || 0;
    return "percentage" === e3.gradientUnits ? t2.transform(this.width, 0, 0, this.height, i2, r2) : t2.transform(1, 0, 0, 1, i2, r2), s2 && t2.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), { offsetX: i2, offsetY: r2 };
  }
  _renderPaintInOrder(t2) {
    this.paintFirst === N ? (this._renderStroke(t2), this._renderFill(t2)) : (this._renderFill(t2), this._renderStroke(t2));
  }
  _render(t2) {
  }
  _renderFill(t2) {
    this.fill && (t2.save(), this._setFillStyles(t2, this), "evenodd" === this.fillRule ? t2.fill("evenodd") : t2.fill(), t2.restore());
  }
  _renderStroke(t2) {
    if (this.stroke && 0 !== this.strokeWidth) {
      if (this.shadow && !this.shadow.affectStroke && this._removeShadow(t2), t2.save(), this.strokeUniform) {
        const e3 = this.getObjectScaling();
        t2.scale(1 / e3.x, 1 / e3.y);
      }
      this._setLineDash(t2, this.strokeDashArray), this._setStrokeStyles(t2, this), t2.stroke(), t2.restore();
    }
  }
  _applyPatternForTransformedGradient(t2, e3) {
    var s2;
    const i2 = this._limitCacheSize(this._getCacheCanvasDimensions()), r2 = this.getCanvasRetinaScaling(), n2 = i2.x / this.scaleX / r2, o2 = i2.y / this.scaleY / r2, a2 = vt({ width: Math.ceil(n2), height: Math.ceil(o2) }), h2 = a2.getContext("2d");
    h2 && (h2.beginPath(), h2.moveTo(0, 0), h2.lineTo(n2, 0), h2.lineTo(n2, o2), h2.lineTo(0, o2), h2.closePath(), h2.translate(n2 / 2, o2 / 2), h2.scale(i2.zoomX / this.scaleX / r2, i2.zoomY / this.scaleY / r2), this._applyPatternGradientTransform(h2, e3), h2.fillStyle = e3.toLive(t2), h2.fill(), t2.translate(-this.width / 2 - this.strokeWidth / 2, -this.height / 2 - this.strokeWidth / 2), t2.scale(r2 * this.scaleX / i2.zoomX, r2 * this.scaleY / i2.zoomY), t2.strokeStyle = null !== (s2 = h2.createPattern(a2, "no-repeat")) && void 0 !== s2 ? s2 : "");
  }
  _findCenterFromElement() {
    return new ot(this.left + this.width / 2, this.top + this.height / 2);
  }
  clone(t2) {
    const e3 = this.toObject(t2);
    return this.constructor.fromObject(e3);
  }
  cloneAsImage(t2) {
    const e3 = this.toCanvasElement(t2);
    return new (tt.getClass("image"))(e3);
  }
  toCanvasElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const e3 = ue(this), s2 = this.group, i2 = this.shadow, r2 = Math.abs, n2 = t2.enableRetinaScaling ? f() : 1, o2 = (t2.multiplier || 1) * n2, a2 = t2.canvasProvider || ((t3) => new se(t3, { enableRetinaScaling: false, renderOnAddRemove: false, skipOffscreen: false }));
    delete this.group, t2.withoutTransform && ce(this), t2.withoutShadow && (this.shadow = null), t2.viewportTransform && me(this, this.getViewportTransform()), this.setCoords();
    const h2 = pt(), l2 = this.getBoundingRect(), c2 = this.shadow, u2 = new ot();
    if (c2) {
      const t3 = c2.blur, e4 = c2.nonScaling ? new ot(1, 1) : this.getObjectScaling();
      u2.x = 2 * Math.round(r2(c2.offsetX) + t3) * r2(e4.x), u2.y = 2 * Math.round(r2(c2.offsetY) + t3) * r2(e4.y);
    }
    const d2 = l2.width + u2.x, g2 = l2.height + u2.y;
    h2.width = Math.ceil(d2), h2.height = Math.ceil(g2);
    const p2 = a2(h2);
    "jpeg" === t2.format && (p2.backgroundColor = "#fff"), this.setPositionByOrigin(new ot(p2.width / 2, p2.height / 2), T, T);
    const m2 = this.canvas;
    p2._objects = [this], this.set("canvas", p2), this.setCoords();
    const v2 = p2.toCanvasElement(o2 || 1, t2);
    return this.set("canvas", m2), this.shadow = i2, s2 && (this.group = s2), this.set(e3), this.setCoords(), p2._objects = [], p2.destroy(), v2;
  }
  toDataURL() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return yt(this.toCanvasElement(t2), t2.format || "png", t2.quality || 1);
  }
  toBlob() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return _t(this.toCanvasElement(t2), t2.format || "png", t2.quality || 1);
  }
  isType() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    return e3.includes(this.constructor.type) || e3.includes(this.type);
  }
  complexity() {
    return 1;
  }
  toJSON() {
    return this.toObject();
  }
  rotate(t2) {
    const { centeredRotation: e3, originX: s2, originY: i2 } = this;
    if (e3) {
      const { x: t3, y: e4 } = this.getRelativeCenterPoint();
      this.originX = T, this.originY = T, this.left = t3, this.top = e4;
    }
    if (this.set("angle", t2), e3) {
      const { x: t3, y: e4 } = this.getPositionByOrigin(s2, i2);
      this.left = t3, this.top = e4, this.originX = s2, this.originY = i2;
    }
  }
  setOnGroup() {
  }
  _setupCompositeOperation(t2) {
    this.globalCompositeOperation && (t2.globalCompositeOperation = this.globalCompositeOperation);
  }
  dispose() {
    et.cancelByTarget(this), this.off(), this._set("canvas", void 0), this._cacheCanvas && u().dispose(this._cacheCanvas), this._cacheCanvas = void 0, this._cacheContext = null;
  }
  animate(t2, e3) {
    return Object.entries(t2).reduce((t3, s2) => {
      let [i2, r2] = s2;
      return t3[i2] = this._animate(i2, r2, e3), t3;
    }, {});
  }
  _animate(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i2 = t2.split("."), r2 = this.constructor.colorProperties.includes(i2[i2.length - 1]), { abort: n2, startValue: o2, onChange: a2, onComplete: h2 } = s2, l2 = { ...s2, target: this, startValue: null != o2 ? o2 : i2.reduce((t3, e4) => t3[e4], this), endValue: e3, abort: null == n2 ? void 0 : n2.bind(this), onChange: (t3, e4, s3) => {
      i2.reduce((e5, s4, r3) => (r3 === i2.length - 1 && (e5[s4] = t3), e5[s4]), this), a2 && a2(t3, e4, s3);
    }, onComplete: (t3, e4, s3) => {
      this.setCoords(), h2 && h2(t3, e4, s3);
    } };
    return r2 ? Xs(l2) : $s(l2);
  }
  isDescendantOf(t2) {
    const { parent: e3, group: s2 } = this;
    return e3 === t2 || s2 === t2 || !!e3 && e3.isDescendantOf(t2) || !!s2 && s2 !== e3 && s2.isDescendantOf(t2);
  }
  getAncestors() {
    const t2 = [];
    let e3 = this;
    do {
      e3 = e3.parent, e3 && t2.push(e3);
    } while (e3);
    return t2;
  }
  findCommonAncestors(t2) {
    if (this === t2) return { fork: [], otherFork: [], common: [this, ...this.getAncestors()] };
    const e3 = this.getAncestors(), s2 = t2.getAncestors();
    if (0 === e3.length && s2.length > 0 && this === s2[s2.length - 1]) return { fork: [], otherFork: [t2, ...s2.slice(0, s2.length - 1)], common: [this] };
    for (let i2, r2 = 0; r2 < e3.length; r2++) {
      if (i2 = e3[r2], i2 === t2) return { fork: [this, ...e3.slice(0, r2)], otherFork: [], common: e3.slice(r2) };
      for (let n2 = 0; n2 < s2.length; n2++) {
        if (this === s2[n2]) return { fork: [], otherFork: [t2, ...s2.slice(0, n2)], common: [this, ...e3] };
        if (i2 === s2[n2]) return { fork: [this, ...e3.slice(0, r2)], otherFork: [t2, ...s2.slice(0, n2)], common: e3.slice(r2) };
      }
    }
    return { fork: [this, ...e3], otherFork: [t2, ...s2], common: [] };
  }
  hasCommonAncestors(t2) {
    const e3 = this.findCommonAncestors(t2);
    return e3 && !!e3.common.length;
  }
  isInFrontOf(t2) {
    if (this === t2) return;
    const e3 = this.findCommonAncestors(t2);
    if (e3.fork.includes(t2)) return true;
    if (e3.otherFork.includes(this)) return false;
    const s2 = e3.common[0] || this.canvas;
    if (!s2) return;
    const i2 = e3.fork.pop(), r2 = e3.otherFork.pop(), n2 = s2._objects.indexOf(i2), o2 = s2._objects.indexOf(r2);
    return n2 > -1 && n2 > o2;
  }
  toObject() {
    const t2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).concat(e2.customProperties, this.constructor.customProperties || []);
    let i2;
    const r2 = s.NUM_FRACTION_DIGITS, { clipPath: n2, fill: o2, stroke: a2, shadow: h2, strokeDashArray: l2, left: c2, top: u2, originX: d2, originY: g2, width: f2, height: p2, strokeWidth: v2, strokeLineCap: y2, strokeDashOffset: _2, strokeLineJoin: x2, strokeUniform: C2, strokeMiterLimit: b2, scaleX: S2, scaleY: w2, angle: T2, flipX: O2, flipY: k2, opacity: D2, visible: M2, backgroundColor: E2, fillRule: P2, paintFirst: A2, globalCompositeOperation: j2, skewX: F2, skewY: L2 } = this;
    n2 && !n2.excludeFromExport && (i2 = n2.toObject(t2.concat("inverted", "absolutePositioned")));
    const I2 = (t3) => Wt(t3, r2), R2 = { ...Xt(this, t2), type: this.constructor.type, version: m, originX: d2, originY: g2, left: I2(c2), top: I2(u2), width: I2(f2), height: I2(p2), fill: zt(o2) ? o2.toObject() : o2, stroke: zt(a2) ? a2.toObject() : a2, strokeWidth: I2(v2), strokeDashArray: l2 ? l2.concat() : l2, strokeLineCap: y2, strokeDashOffset: _2, strokeLineJoin: x2, strokeUniform: C2, strokeMiterLimit: I2(b2), scaleX: I2(S2), scaleY: I2(w2), angle: I2(T2), flipX: O2, flipY: k2, opacity: I2(D2), shadow: h2 ? h2.toObject() : h2, visible: M2, backgroundColor: E2, fillRule: P2, paintFirst: A2, globalCompositeOperation: j2, skewX: I2(F2), skewY: I2(L2), ...i2 ? { clipPath: i2 } : null };
    return this.includeDefaultValues ? R2 : this._removeDefaultValues(R2);
  }
  toDatalessObject(t2) {
    return this.toObject(t2);
  }
  _removeDefaultValues(t2) {
    const e3 = this.constructor.getDefaults(), s2 = Object.keys(e3).length > 0 ? e3 : Object.getPrototypeOf(this);
    return Yt(t2, (t3, e4) => {
      if (e4 === O || e4 === k || "type" === e4) return true;
      const i2 = s2[e4];
      return t3 !== i2 && !(Array.isArray(t3) && Array.isArray(i2) && 0 === t3.length && 0 === i2.length);
    });
  }
  toString() {
    return `#<${this.constructor.type}>`;
  }
  static _fromObject(t2) {
    let { type: e3, ...s2 } = t2, { extraParam: i2, ...r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return $t(s2, r2).then((t3) => i2 ? (delete t3[i2], new this(s2[i2], t3)) : new this(t3));
  }
  static fromObject(t2, e3) {
    return this._fromObject(t2, e3);
  }
};
t(Vs, "stateProperties", Ss), t(Vs, "cacheProperties", ws), t(Vs, "ownDefaults", Ts), t(Vs, "type", "FabricObject"), t(Vs, "colorProperties", [H, N, "backgroundColor"]), t(Vs, "customProperties", []), tt.setClass(Vs), tt.setClass(Vs, "object");
var Gs = (t2, e3) => {
  var s2;
  const { transform: { target: i2 } } = e3;
  null === (s2 = i2.canvas) || void 0 === s2 || s2.fire(`object:${t2}`, { ...e3, target: i2 }), i2.fire(t2, e3);
};
var zs = (t2, e3, s2) => (i2, r2, n2, o2) => {
  const a2 = e3(i2, r2, n2, o2);
  return a2 && Gs(t2, { ...Le(i2, r2, n2, o2), ...s2 }), a2;
};
function Hs(t2) {
  return (e3, s2, i2, r2) => {
    const { target: n2, originX: o2, originY: a2 } = s2, h2 = n2.getPositionByOrigin(o2, a2), l2 = t2(e3, s2, i2, r2);
    return n2.setPositionByOrigin(h2, s2.originX, s2.originY), l2;
  };
}
var Ns = (t2, e3, s2, i2) => (r2, n2, o2, a2) => {
  const h2 = Re(n2, n2.originX, n2.originY, o2, a2)[s2], l2 = ye(n2[e3]);
  if (0 === l2 || l2 > 0 && h2 < 0 || l2 < 0 && h2 > 0) {
    const { target: e4 } = n2, s3 = e4.strokeWidth / (e4.strokeUniform ? e4[i2] : 1), r3 = Ae(n2) ? 2 : 1, o3 = e4[t2], a3 = Math.abs(h2 * r3 / e4[i2]) - s3;
    return e4.set(t2, Math.max(a3, 1)), o3 !== e4[t2];
  }
  return false;
};
var Us = Ns("width", "originX", "x", "scaleX");
var qs = Ns("height", "originY", "y", "scaleY");
var Ks = zs(R, Hs(Us));
var Js = zs(R, Hs(qs));
function Qs(t2, e3, s2, i2, r2) {
  t2.save();
  const { stroke: n2, xSize: o2, ySize: a2, opName: h2 } = this.commonRenderProps(t2, e3, s2, r2, i2);
  let l2 = o2;
  o2 > a2 ? t2.scale(1, a2 / o2) : a2 > o2 && (l2 = a2, t2.scale(o2 / a2, 1)), t2.beginPath(), t2.arc(0, 0, l2 / 2, 0, x, false), t2[h2](), n2 && t2.stroke(), t2.restore();
}
function Zs(t2, e3, s2, i2, r2) {
  t2.save();
  const { stroke: n2, xSize: o2, ySize: a2, opName: h2 } = this.commonRenderProps(t2, e3, s2, r2, i2), l2 = o2 / 2, c2 = a2 / 2;
  t2[`${h2}Rect`](-l2, -c2, o2, a2), n2 && t2.strokeRect(-l2, -c2, o2, a2), t2.restore();
}
var ti = class {
  constructor(e3) {
    t(this, "visible", true), t(this, "actionName", Y), t(this, "angle", 0), t(this, "x", 0), t(this, "y", 0), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "sizeX", 0), t(this, "sizeY", 0), t(this, "touchSizeX", 0), t(this, "touchSizeY", 0), t(this, "cursorStyle", "crosshair"), t(this, "withConnection", false), Object.assign(this, e3);
  }
  shouldActivate(t2, e3, s2, i2) {
    var r2;
    let { tl: n2, tr: o2, br: a2, bl: h2 } = i2;
    return (null === (r2 = e3.canvas) || void 0 === r2 ? void 0 : r2.getActiveObject()) === e3 && e3.isControlVisible(t2) && Ys.isPointInPolygon(s2, [n2, o2, a2, h2]);
  }
  getActionHandler(t2, e3, s2) {
    return this.actionHandler;
  }
  getMouseDownHandler(t2, e3, s2) {
    return this.mouseDownHandler;
  }
  getMouseUpHandler(t2, e3, s2) {
    return this.mouseUpHandler;
  }
  cursorStyleHandler(t2, e3, s2, i2) {
    return e3.cursorStyle;
  }
  getActionName(t2, e3, s2) {
    return e3.actionName;
  }
  getVisibility(t2, e3) {
    var s2, i2;
    return null !== (s2 = null === (i2 = t2._controlsVisibility) || void 0 === i2 ? void 0 : i2[e3]) && void 0 !== s2 ? s2 : this.visible;
  }
  setVisibility(t2, e3, s2) {
    this.visible = t2;
  }
  positionHandler(t2, e3, s2, i2) {
    return new ot(this.x * t2.x + this.offsetX, this.y * t2.y + this.offsetY).transform(e3);
  }
  calcCornerCoords(t2, e3, s2, i2, r2, n2) {
    const o2 = Ot([Mt(s2, i2), Et({ angle: t2 }), Pt((r2 ? this.touchSizeX : this.sizeX) || e3, (r2 ? this.touchSizeY : this.sizeY) || e3)]);
    return { tl: new ot(-0.5, -0.5).transform(o2), tr: new ot(0.5, -0.5).transform(o2), br: new ot(0.5, 0.5).transform(o2), bl: new ot(-0.5, 0.5).transform(o2) };
  }
  commonRenderProps(t2, e3, s2, i2) {
    let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    const { cornerSize: n2, cornerColor: o2, transparentCorners: a2, cornerStrokeColor: h2 } = r2, l2 = n2 || i2.cornerSize, c2 = this.sizeX || l2, u2 = this.sizeY || l2, d2 = void 0 !== a2 ? a2 : i2.transparentCorners, g2 = d2 ? N : H, f2 = h2 || i2.cornerStrokeColor, p2 = !d2 && !!f2;
    return t2.fillStyle = o2 || i2.cornerColor || "", t2.strokeStyle = f2 || "", t2.translate(e3, s2), t2.rotate(xt(i2.getTotalAngle())), { stroke: p2, xSize: c2, ySize: u2, transparentCorners: d2, opName: g2 };
  }
  render(t2, e3, s2, i2, r2) {
    if ("circle" === ((i2 = i2 || {}).cornerStyle || r2.cornerStyle)) Qs.call(this, t2, e3, s2, i2, r2);
    else Zs.call(this, t2, e3, s2, i2, r2);
  }
};
var ei = (t2, e3, s2) => s2.lockRotation ? Pe : e3.cursorStyle;
var si = zs(F, Hs((t2, e3, s2, i2) => {
  let { target: r2, ex: n2, ey: o2, theta: a2, originX: h2, originY: l2 } = e3;
  const c2 = r2.getPositionByOrigin(h2, l2);
  if (Fe(r2, "lockRotation")) return false;
  const u2 = Math.atan2(o2 - c2.y, n2 - c2.x), d2 = Math.atan2(i2 - c2.y, s2 - c2.x);
  let g2 = Ct(d2 - u2 + a2);
  if (r2.snapAngle && r2.snapAngle > 0) {
    const t3 = r2.snapAngle, e4 = r2.snapThreshold || t3, s3 = Math.ceil(g2 / t3) * t3, i3 = Math.floor(g2 / t3) * t3;
    Math.abs(g2 - i3) < e4 ? g2 = i3 : Math.abs(g2 - s3) < e4 && (g2 = s3);
  }
  g2 < 0 && (g2 = 360 + g2), g2 %= 360;
  const f2 = r2.angle !== g2;
  return r2.angle = g2, f2;
}));
function ii(t2, e3) {
  const s2 = e3.canvas, i2 = t2[s2.uniScaleKey];
  return s2.uniformScaling && !i2 || !s2.uniformScaling && i2;
}
function ri(t2, e3, s2) {
  const i2 = Fe(t2, "lockScalingX"), r2 = Fe(t2, "lockScalingY");
  if (i2 && r2) return true;
  if (!e3 && (i2 || r2) && s2) return true;
  if (i2 && "x" === e3) return true;
  if (r2 && "y" === e3) return true;
  const { width: n2, height: o2, strokeWidth: a2 } = t2;
  return 0 === n2 && 0 === a2 && "y" !== e3 || 0 === o2 && 0 === a2 && "x" !== e3;
}
var ni = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"];
var oi = (t2, e3, s2, i2) => {
  const r2 = ii(t2, s2);
  if (ri(s2, 0 !== e3.x && 0 === e3.y ? "x" : 0 === e3.x && 0 !== e3.y ? "y" : "", r2)) return Pe;
  const n2 = Ie(s2, 0, i2);
  return `${ni[n2]}-resize`;
};
function ai(t2, e3, s2, i2) {
  let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
  const n2 = e3.target, o2 = r2.by, a2 = ii(t2, n2);
  let h2, l2, c2, u2, d2, g2;
  if (ri(n2, o2, a2)) return false;
  if (e3.gestureScale) l2 = e3.scaleX * e3.gestureScale, c2 = e3.scaleY * e3.gestureScale;
  else {
    if (h2 = Re(e3, e3.originX, e3.originY, s2, i2), d2 = "y" !== o2 ? Math.sign(h2.x || e3.signX || 1) : 1, g2 = "x" !== o2 ? Math.sign(h2.y || e3.signY || 1) : 1, e3.signX || (e3.signX = d2), e3.signY || (e3.signY = g2), Fe(n2, "lockScalingFlip") && (e3.signX !== d2 || e3.signY !== g2)) return false;
    if (u2 = n2._getTransformedDimensions(), a2 && !o2) {
      const t3 = Math.abs(h2.x) + Math.abs(h2.y), { original: s3 } = e3, i3 = t3 / (Math.abs(u2.x * s3.scaleX / n2.scaleX) + Math.abs(u2.y * s3.scaleY / n2.scaleY));
      l2 = s3.scaleX * i3, c2 = s3.scaleY * i3;
    } else l2 = Math.abs(h2.x * n2.scaleX / u2.x), c2 = Math.abs(h2.y * n2.scaleY / u2.y);
    Ae(e3) && (l2 *= 2, c2 *= 2), e3.signX !== d2 && "y" !== o2 && (e3.originX = je(e3.originX), l2 *= -1, e3.signX = d2), e3.signY !== g2 && "x" !== o2 && (e3.originY = je(e3.originY), c2 *= -1, e3.signY = g2);
  }
  const f2 = n2.scaleX, p2 = n2.scaleY;
  return o2 ? ("x" === o2 && n2.set(W, l2), "y" === o2 && n2.set(V, c2)) : (!Fe(n2, "lockScalingX") && n2.set(W, l2), !Fe(n2, "lockScalingY") && n2.set(V, c2)), f2 !== n2.scaleX || p2 !== n2.scaleY;
}
var hi = zs(j, Hs((t2, e3, s2, i2) => ai(t2, e3, s2, i2)));
var li = zs(j, Hs((t2, e3, s2, i2) => ai(t2, e3, s2, i2, { by: "x" })));
var ci = zs(j, Hs((t2, e3, s2, i2) => ai(t2, e3, s2, i2, { by: "y" })));
var ui = { x: { counterAxis: "y", scale: W, skew: G, lockSkewing: "lockSkewingX", origin: "originX", flip: "flipX" }, y: { counterAxis: "x", scale: V, skew: z, lockSkewing: "lockSkewingY", origin: "originY", flip: "flipY" } };
var di = ["ns", "nesw", "ew", "nwse"];
var gi = (t2, e3, s2, i2) => {
  if (0 !== e3.x && Fe(s2, "lockSkewingY")) return Pe;
  if (0 !== e3.y && Fe(s2, "lockSkewingX")) return Pe;
  const r2 = Ie(s2, 0, i2) % 4;
  return `${di[r2]}-resize`;
};
function fi(t2, e3, s2, i2, r2) {
  const { target: n2 } = s2, { counterAxis: o2, origin: a2, lockSkewing: h2, skew: l2, flip: c2 } = ui[t2];
  if (Fe(n2, h2)) return false;
  const { origin: u2, flip: d2 } = ui[o2], g2 = ye(s2[u2]) * (n2[d2] ? -1 : 1), f2 = -Math.sign(g2) * (n2[c2] ? -1 : 1), p2 = 0.5 * -((0 === n2[l2] && Re(s2, T, T, i2, r2)[t2] > 0 || n2[l2] > 0 ? 1 : -1) * f2) + 0.5, m2 = zs(I, Hs((e4, s3, i3, r3) => (function(t3, e5, s4) {
    let { target: i4, ex: r4, ey: n3, skewingSide: o3, ...a3 } = e5;
    const { skew: h3 } = ui[t3], l3 = s4.subtract(new ot(r4, n3)).divide(new ot(i4.scaleX, i4.scaleY))[t3], c3 = i4[h3], u3 = a3[h3], d3 = Math.tan(xt(u3)), g3 = "y" === t3 ? i4._getTransformedDimensions({ scaleX: 1, scaleY: 1, skewX: 0 }).x : i4._getTransformedDimensions({ scaleX: 1, scaleY: 1 }).y, f3 = 2 * l3 * o3 / Math.max(g3, 1) + d3, p3 = Ct(Math.atan(f3));
    i4.set(h3, p3);
    const m3 = c3 !== i4[h3];
    if (m3 && "y" === t3) {
      const { skewX: t4, scaleX: e6 } = i4, s5 = i4._getTransformedDimensions({ skewY: c3 }), r5 = i4._getTransformedDimensions(), n4 = 0 !== t4 ? s5.x / r5.x : 1;
      1 !== n4 && i4.set(W, n4 * e6);
    }
    return m3;
  })(t2, s3, new ot(i3, r3))));
  return m2(e3, { ...s2, [a2]: p2, skewingSide: f2 }, i2, r2);
}
var pi = (t2, e3, s2, i2) => fi("x", t2, e3, s2, i2);
var mi = (t2, e3, s2, i2) => fi("y", t2, e3, s2, i2);
function vi(t2, e3) {
  return t2[e3.canvas.altActionKey];
}
var yi = (t2, e3, s2) => {
  const i2 = vi(t2, s2);
  return 0 === e3.x ? i2 ? G : V : 0 === e3.y ? i2 ? z : W : "";
};
var _i = (t2, e3, s2, i2) => vi(t2, s2) ? gi(0, e3, s2, i2) : oi(t2, e3, s2, i2);
var xi = (t2, e3, s2, i2) => vi(t2, e3.target) ? mi(t2, e3, s2, i2) : li(t2, e3, s2, i2);
var Ci = (t2, e3, s2, i2) => vi(t2, e3.target) ? pi(t2, e3, s2, i2) : ci(t2, e3, s2, i2);
var bi = () => ({ ml: new ti({ x: -0.5, y: 0, cursorStyleHandler: _i, actionHandler: xi, getActionName: yi }), mr: new ti({ x: 0.5, y: 0, cursorStyleHandler: _i, actionHandler: xi, getActionName: yi }), mb: new ti({ x: 0, y: 0.5, cursorStyleHandler: _i, actionHandler: Ci, getActionName: yi }), mt: new ti({ x: 0, y: -0.5, cursorStyleHandler: _i, actionHandler: Ci, getActionName: yi }), tl: new ti({ x: -0.5, y: -0.5, cursorStyleHandler: oi, actionHandler: hi }), tr: new ti({ x: 0.5, y: -0.5, cursorStyleHandler: oi, actionHandler: hi }), bl: new ti({ x: -0.5, y: 0.5, cursorStyleHandler: oi, actionHandler: hi }), br: new ti({ x: 0.5, y: 0.5, cursorStyleHandler: oi, actionHandler: hi }), mtr: new ti({ x: 0, y: -0.5, actionHandler: si, cursorStyleHandler: ei, offsetY: -40, withConnection: true, actionName: L }) });
var Si = () => ({ mr: new ti({ x: 0.5, y: 0, actionHandler: Ks, cursorStyleHandler: _i, actionName: R }), ml: new ti({ x: -0.5, y: 0, actionHandler: Ks, cursorStyleHandler: _i, actionName: R }) });
var wi = () => ({ ...bi(), ...Si() });
var Ti = class _Ti extends Vs {
  static getDefaults() {
    return { ...super.getDefaults(), ..._Ti.ownDefaults };
  }
  constructor(t2) {
    super(), Object.assign(this, this.constructor.createControls(), _Ti.ownDefaults), this.setOptions(t2);
  }
  static createControls() {
    return { controls: bi() };
  }
  _updateCacheCanvas() {
    const t2 = this.canvas;
    if (this.noScaleCache && t2 && t2._currentTransform) {
      const e3 = t2._currentTransform, s2 = e3.target, i2 = e3.action;
      if (this === s2 && i2 && i2.startsWith(Y)) return false;
    }
    return super._updateCacheCanvas();
  }
  getActiveControl() {
    const t2 = this.__corner;
    return t2 ? { key: t2, control: this.controls[t2], coord: this.oCoords[t2] } : void 0;
  }
  findControl(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (!this.hasControls || !this.canvas) return;
    this.__corner = void 0;
    const s2 = Object.entries(this.oCoords);
    for (let i2 = s2.length - 1; i2 >= 0; i2--) {
      const [r2, n2] = s2[i2], o2 = this.controls[r2];
      if (o2.shouldActivate(r2, this, t2, e3 ? n2.touchCorner : n2.corner)) return this.__corner = r2, { key: r2, control: o2, coord: this.oCoords[r2] };
    }
  }
  calcOCoords() {
    const t2 = this.getViewportTransform(), e3 = this.getCenterPoint(), s2 = Mt(e3.x, e3.y), i2 = Et({ angle: this.getTotalAngle() - (this.group && this.flipX ? 180 : 0) }), r2 = Tt(s2, i2), n2 = Tt(t2, r2), o2 = Tt(n2, [1 / t2[0], 0, 0, 1 / t2[3], 0, 0]), a2 = this.group ? Dt(this.calcTransformMatrix()) : void 0;
    a2 && (a2.scaleX = Math.abs(a2.scaleX), a2.scaleY = Math.abs(a2.scaleY));
    const h2 = this._calculateCurrentDimensions(a2), l2 = {};
    return this.forEachControl((t3, e4) => {
      const s3 = t3.positionHandler(h2, o2, this, t3);
      l2[e4] = Object.assign(s3, this._calcCornerCoords(t3, s3));
    }), l2;
  }
  _calcCornerCoords(t2, e3) {
    const s2 = this.getTotalAngle();
    return { corner: t2.calcCornerCoords(s2, this.cornerSize, e3.x, e3.y, false, this), touchCorner: t2.calcCornerCoords(s2, this.touchCornerSize, e3.x, e3.y, true, this) };
  }
  setCoords() {
    super.setCoords(), this.canvas && (this.oCoords = this.calcOCoords());
  }
  forEachControl(t2) {
    for (const e3 in this.controls) t2(this.controls[e3], e3, this);
  }
  drawSelectionBackground(t2) {
    if (!this.selectionBackgroundColor || this.canvas && this.canvas._activeObject !== this) return;
    t2.save();
    const e3 = this.getRelativeCenterPoint(), s2 = this._calculateCurrentDimensions(), i2 = this.getViewportTransform();
    t2.translate(e3.x, e3.y), t2.scale(1 / i2[0], 1 / i2[3]), t2.rotate(xt(this.angle)), t2.fillStyle = this.selectionBackgroundColor, t2.fillRect(-s2.x / 2, -s2.y / 2, s2.x, s2.y), t2.restore();
  }
  strokeBorders(t2, e3) {
    t2.strokeRect(-e3.x / 2, -e3.y / 2, e3.x, e3.y);
  }
  _drawBorders(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const i2 = { hasControls: this.hasControls, borderColor: this.borderColor, borderDashArray: this.borderDashArray, ...s2 };
    t2.save(), t2.strokeStyle = i2.borderColor, this._setLineDash(t2, i2.borderDashArray), this.strokeBorders(t2, e3), i2.hasControls && this.drawControlsConnectingLines(t2, e3), t2.restore();
  }
  _renderControls(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { hasBorders: s2, hasControls: i2 } = this, r2 = { hasBorders: s2, hasControls: i2, ...e3 }, n2 = this.getViewportTransform(), o2 = r2.hasBorders, a2 = r2.hasControls, h2 = Tt(n2, this.calcTransformMatrix()), l2 = Dt(h2);
    t2.save(), t2.translate(l2.translateX, l2.translateY), t2.lineWidth = this.borderScaleFactor, this.group === this.parent && (t2.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), this.flipX && (l2.angle -= 180), t2.rotate(xt(this.group ? l2.angle : this.angle)), o2 && this.drawBorders(t2, l2, e3), a2 && this.drawControls(t2, e3), t2.restore();
  }
  drawBorders(t2, e3, s2) {
    let i2;
    if (s2 && s2.forActiveSelection || this.group) {
      const t3 = de(this.width, this.height, Lt(e3)), s3 = this.isStrokeAccountedForInDimensions() ? at : (this.strokeUniform ? new ot().scalarAdd(this.canvas ? this.canvas.getZoom() : 1) : new ot(e3.scaleX, e3.scaleY)).scalarMultiply(this.strokeWidth);
      i2 = t3.add(s3).scalarAdd(this.borderScaleFactor).scalarAdd(2 * this.padding);
    } else i2 = this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);
    this._drawBorders(t2, i2, s2);
  }
  drawControlsConnectingLines(t2, e3) {
    let s2 = false;
    t2.beginPath(), this.forEachControl((i2, r2) => {
      i2.withConnection && i2.getVisibility(this, r2) && (s2 = true, t2.moveTo(i2.x * e3.x, i2.y * e3.y), t2.lineTo(i2.x * e3.x + i2.offsetX, i2.y * e3.y + i2.offsetY));
    }), s2 && t2.stroke();
  }
  drawControls(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t2.save();
    const s2 = this.getCanvasRetinaScaling(), { cornerStrokeColor: i2, cornerDashArray: r2, cornerColor: n2 } = this, o2 = { cornerStrokeColor: i2, cornerDashArray: r2, cornerColor: n2, ...e3 };
    t2.setTransform(s2, 0, 0, s2, 0, 0), t2.strokeStyle = t2.fillStyle = o2.cornerColor, this.transparentCorners || (t2.strokeStyle = o2.cornerStrokeColor), this._setLineDash(t2, o2.cornerDashArray), this.forEachControl((e4, s3) => {
      if (e4.getVisibility(this, s3)) {
        const i3 = this.oCoords[s3];
        e4.render(t2, i3.x, i3.y, o2, this);
      }
    }), t2.restore();
  }
  isControlVisible(t2) {
    return this.controls[t2] && this.controls[t2].getVisibility(this, t2);
  }
  setControlVisible(t2, e3) {
    this._controlsVisibility || (this._controlsVisibility = {}), this._controlsVisibility[t2] = e3;
  }
  setControlsVisibility() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.entries(t2).forEach((t3) => {
      let [e3, s2] = t3;
      return this.setControlVisible(e3, s2);
    });
  }
  clearContextTop(t2) {
    if (!this.canvas) return;
    const e3 = this.canvas.contextTop;
    if (!e3) return;
    const s2 = this.canvas.viewportTransform;
    e3.save(), e3.transform(s2[0], s2[1], s2[2], s2[3], s2[4], s2[5]), this.transform(e3);
    const i2 = this.width + 4, r2 = this.height + 4;
    return e3.clearRect(-i2 / 2, -r2 / 2, i2, r2), t2 || e3.restore(), e3;
  }
  onDeselect(t2) {
    return false;
  }
  onSelect(t2) {
    return false;
  }
  shouldStartDragging(t2) {
    return false;
  }
  onDragStart(t2) {
    return false;
  }
  canDrop(t2) {
    return false;
  }
  renderDragSourceEffect(t2) {
  }
  renderDropTargetEffect(t2) {
  }
};
function Oi(t2, e3) {
  return e3.forEach((e4) => {
    Object.getOwnPropertyNames(e4.prototype).forEach((s2) => {
      "constructor" !== s2 && Object.defineProperty(t2.prototype, s2, Object.getOwnPropertyDescriptor(e4.prototype, s2) || /* @__PURE__ */ Object.create(null));
    });
  }), t2;
}
t(Ti, "ownDefaults", { noScaleCache: true, lockMovementX: false, lockMovementY: false, lockRotation: false, lockScalingX: false, lockScalingY: false, lockSkewingX: false, lockSkewingY: false, lockScalingFlip: false, cornerSize: 13, touchCornerSize: 24, transparentCorners: true, cornerColor: "rgb(178,204,255)", cornerStrokeColor: "", cornerStyle: "rect", cornerDashArray: null, hasControls: true, borderColor: "rgb(178,204,255)", borderDashArray: null, borderOpacityWhenMoving: 0.4, borderScaleFactor: 1, hasBorders: true, selectionBackgroundColor: "", selectable: true, evented: true, perPixelTargetFind: false, activeOn: "down", hoverCursor: null, moveCursor: null });
var ki = class extends Ti {
};
Oi(ki, [qe]), tt.setClass(ki), tt.setClass(ki, "object");
var Di = (t2, e3, s2, i2) => {
  const r2 = 2 * (i2 = Math.round(i2)) + 1, { data: n2 } = t2.getImageData(e3 - i2, s2 - i2, r2, r2);
  for (let t3 = 3; t3 < n2.length; t3 += 4) {
    if (n2[t3] > 0) return false;
  }
  return true;
};
var Mi = class {
  constructor(t2) {
    this.options = t2, this.strokeProjectionMagnitude = this.options.strokeWidth / 2, this.scale = new ot(this.options.scaleX, this.options.scaleY), this.strokeUniformScalar = this.options.strokeUniform ? new ot(1 / this.options.scaleX, 1 / this.options.scaleY) : new ot(1, 1);
  }
  createSideVector(t2, e3) {
    const s2 = be(t2, e3);
    return this.options.strokeUniform ? s2.multiply(this.scale) : s2;
  }
  projectOrthogonally(t2, e3, s2) {
    return this.applySkew(t2.add(this.calcOrthogonalProjection(t2, e3, s2)));
  }
  isSkewed() {
    return 0 !== this.options.skewX || 0 !== this.options.skewY;
  }
  applySkew(t2) {
    const e3 = new ot(t2);
    return e3.y += e3.x * Math.tan(xt(this.options.skewY)), e3.x += e3.y * Math.tan(xt(this.options.skewX)), e3;
  }
  scaleUnitVector(t2, e3) {
    return t2.multiply(this.strokeUniformScalar).scalarMultiply(e3);
  }
};
var Ei = new ot();
var Pi = class _Pi extends Mi {
  static getOrthogonalRotationFactor(t2, e3) {
    const s2 = e3 ? we(t2, e3) : Te(t2);
    return Math.abs(s2) < y ? -1 : 1;
  }
  constructor(e3, s2, i2, r2) {
    super(r2), t(this, "AB", void 0), t(this, "AC", void 0), t(this, "alpha", void 0), t(this, "bisector", void 0), this.A = new ot(e3), this.B = new ot(s2), this.C = new ot(i2), this.AB = this.createSideVector(this.A, this.B), this.AC = this.createSideVector(this.A, this.C), this.alpha = we(this.AB, this.AC), this.bisector = Oe(Ce(this.AB.eq(Ei) ? this.AC : this.AB, this.alpha / 2));
  }
  calcOrthogonalProjection(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i2 = this.createSideVector(t2, e3), r2 = ke(i2), n2 = _Pi.getOrthogonalRotationFactor(r2, this.bisector);
    return this.scaleUnitVector(r2, s2 * n2);
  }
  projectBevel() {
    const t2 = [];
    return (this.alpha % x === 0 ? [this.B] : [this.B, this.C]).forEach((e3) => {
      t2.push(this.projectOrthogonally(this.A, e3)), t2.push(this.projectOrthogonally(this.A, e3, -this.strokeProjectionMagnitude));
    }), t2;
  }
  projectMiter() {
    const t2 = [], e3 = Math.abs(this.alpha), s2 = 1 / Math.sin(e3 / 2), i2 = this.scaleUnitVector(this.bisector, -this.strokeProjectionMagnitude * s2), r2 = this.options.strokeUniform ? Se(this.scaleUnitVector(this.bisector, this.options.strokeMiterLimit)) : this.options.strokeMiterLimit;
    return Se(i2) / this.strokeProjectionMagnitude <= r2 && t2.push(this.applySkew(this.A.add(i2))), t2.push(...this.projectBevel()), t2;
  }
  projectRoundNoSkew(t2, e3) {
    const s2 = [], i2 = new ot(_Pi.getOrthogonalRotationFactor(this.bisector), _Pi.getOrthogonalRotationFactor(new ot(this.bisector.y, this.bisector.x)));
    return [new ot(1, 0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i2), new ot(0, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i2)].forEach((i3) => {
      Ee(i3, t2, e3) && s2.push(this.A.add(i3));
    }), s2;
  }
  projectRoundWithSkew(t2, e3) {
    const s2 = [], { skewX: i2, skewY: r2, scaleX: n2, scaleY: o2, strokeUniform: a2 } = this.options, h2 = new ot(Math.tan(xt(i2)), Math.tan(xt(r2))), l2 = this.strokeProjectionMagnitude, c2 = a2 ? l2 / o2 / Math.sqrt(1 / o2 ** 2 + 1 / n2 ** 2 * h2.y ** 2) : l2 / Math.sqrt(1 + h2.y ** 2), u2 = new ot(Math.sqrt(Math.max(l2 ** 2 - c2 ** 2, 0)), c2), d2 = a2 ? l2 / Math.sqrt(1 + h2.x ** 2 * (1 / o2) ** 2 / (1 / n2 + 1 / n2 * h2.x * h2.y) ** 2) : l2 / Math.sqrt(1 + h2.x ** 2 / (1 + h2.x * h2.y) ** 2), g2 = new ot(d2, Math.sqrt(Math.max(l2 ** 2 - d2 ** 2, 0)));
    return [g2, g2.scalarMultiply(-1), u2, u2.scalarMultiply(-1)].map((t3) => this.applySkew(a2 ? t3.multiply(this.strokeUniformScalar) : t3)).forEach((i3) => {
      Ee(i3, t2, e3) && s2.push(this.applySkew(this.A).add(i3));
    }), s2;
  }
  projectRound() {
    const t2 = [];
    t2.push(...this.projectBevel());
    const e3 = this.alpha % x === 0, s2 = this.applySkew(this.A), i2 = t2[e3 ? 0 : 2].subtract(s2), r2 = t2[e3 ? 1 : 0].subtract(s2), n2 = e3 ? this.applySkew(this.AB.scalarMultiply(-1)) : this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)), o2 = De(i2, n2) > 0, a2 = o2 ? i2 : r2, h2 = o2 ? r2 : i2;
    return this.isSkewed() ? t2.push(...this.projectRoundWithSkew(a2, h2)) : t2.push(...this.projectRoundNoSkew(a2, h2)), t2;
  }
  projectPoints() {
    switch (this.options.strokeLineJoin) {
      case "miter":
        return this.projectMiter();
      case "round":
        return this.projectRound();
      default:
        return this.projectBevel();
    }
  }
  project() {
    return this.projectPoints().map((t2) => ({ originPoint: this.A, projectedPoint: t2, angle: this.alpha, bisector: this.bisector }));
  }
};
var Ai = class extends Mi {
  constructor(t2, e3, s2) {
    super(s2), this.A = new ot(t2), this.T = new ot(e3);
  }
  calcOrthogonalProjection(t2, e3) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.strokeProjectionMagnitude;
    const i2 = this.createSideVector(t2, e3);
    return this.scaleUnitVector(ke(i2), s2);
  }
  projectButt() {
    return [this.projectOrthogonally(this.A, this.T, this.strokeProjectionMagnitude), this.projectOrthogonally(this.A, this.T, -this.strokeProjectionMagnitude)];
  }
  projectRound() {
    const t2 = [];
    if (!this.isSkewed() && this.A.eq(this.T)) {
      const e3 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t2.push(this.applySkew(this.A.add(e3)), this.applySkew(this.A.subtract(e3)));
    } else t2.push(...new Pi(this.A, this.T, this.T, this.options).projectRound());
    return t2;
  }
  projectSquare() {
    const t2 = [];
    if (this.A.eq(this.T)) {
      const e3 = new ot(1, 1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);
      t2.push(this.A.add(e3), this.A.subtract(e3));
    } else {
      const e3 = this.calcOrthogonalProjection(this.A, this.T, this.strokeProjectionMagnitude), s2 = this.scaleUnitVector(Oe(this.createSideVector(this.A, this.T)), -this.strokeProjectionMagnitude), i2 = this.A.add(s2);
      t2.push(i2.add(e3), i2.subtract(e3));
    }
    return t2.map((t3) => this.applySkew(t3));
  }
  projectPoints() {
    switch (this.options.strokeLineCap) {
      case "round":
        return this.projectRound();
      case "square":
        return this.projectSquare();
      default:
        return this.projectButt();
    }
  }
  project() {
    return this.projectPoints().map((t2) => ({ originPoint: this.A, projectedPoint: t2 }));
  }
};
var ji = function(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const i2 = [];
  if (0 === t2.length) return i2;
  const r2 = t2.reduce((t3, e4) => (t3[t3.length - 1].eq(e4) || t3.push(new ot(e4)), t3), [new ot(t2[0])]);
  if (1 === r2.length) s2 = true;
  else if (!s2) {
    const t3 = r2[0], e4 = ((t4, e5) => {
      for (let s3 = t4.length - 1; s3 >= 0; s3--) if (e5(t4[s3], s3, t4)) return s3;
      return -1;
    })(r2, (e5) => !e5.eq(t3));
    r2.splice(e4 + 1);
  }
  return r2.forEach((t3, r3, n2) => {
    let o2, a2;
    0 === r3 ? (a2 = n2[1], o2 = s2 ? t3 : n2[n2.length - 1]) : r3 === n2.length - 1 ? (o2 = n2[r3 - 1], a2 = s2 ? t3 : n2[0]) : (o2 = n2[r3 - 1], a2 = n2[r3 + 1]), s2 && 1 === n2.length ? i2.push(...new Ai(t3, t3, e3).project()) : !s2 || 0 !== r3 && r3 !== n2.length - 1 ? i2.push(...new Pi(t3, o2, a2, e3).project()) : i2.push(...new Ai(t3, 0 === r3 ? a2 : o2, e3).project());
  }), i2;
};
var Fi = (t2) => {
  const e3 = {};
  return Object.keys(t2).forEach((s2) => {
    e3[s2] = {}, Object.keys(t2[s2]).forEach((i2) => {
      e3[s2][i2] = { ...t2[s2][i2] };
    });
  }), e3;
};
var Li = (t2) => t2.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var Ii;
var Ri = (t2) => {
  if (Ii || Ii || (Ii = "Intl" in g() && "Segmenter" in Intl && new Intl.Segmenter(void 0, { granularity: "grapheme" })), Ii) {
    const e3 = Ii.segment(t2);
    return Array.from(e3).map((t3) => {
      let { segment: e4 } = t3;
      return e4;
    });
  }
  return Bi(t2);
};
var Bi = (t2) => {
  const e3 = [];
  for (let s2, i2 = 0; i2 < t2.length; i2++) false !== (s2 = $i(t2, i2)) && e3.push(s2);
  return e3;
};
var $i = (t2, e3) => {
  const s2 = t2.charCodeAt(e3);
  if (isNaN(s2)) return "";
  if (s2 < 55296 || s2 > 57343) return t2.charAt(e3);
  if (55296 <= s2 && s2 <= 56319) {
    if (t2.length <= e3 + 1) throw "High surrogate without following low surrogate";
    const s3 = t2.charCodeAt(e3 + 1);
    if (56320 > s3 || s3 > 57343) throw "High surrogate without following low surrogate";
    return t2.charAt(e3) + t2.charAt(e3 + 1);
  }
  if (0 === e3) throw "Low surrogate without preceding high surrogate";
  const i2 = t2.charCodeAt(e3 - 1);
  if (55296 > i2 || i2 > 56319) throw "Low surrogate without preceding high surrogate";
  return false;
};
var Xi = Object.freeze({ __proto__: null, capitalize: function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return `${t2.charAt(0).toUpperCase()}${e3 ? t2.slice(1) : t2.slice(1).toLowerCase()}`;
}, escapeXml: Li, graphemeSplit: Ri });
var Yi = function(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return t2.fill !== e3.fill || t2.stroke !== e3.stroke || t2.strokeWidth !== e3.strokeWidth || t2.fontSize !== e3.fontSize || t2.fontFamily !== e3.fontFamily || t2.fontWeight !== e3.fontWeight || t2.fontStyle !== e3.fontStyle || t2.textDecorationThickness !== e3.textDecorationThickness || t2.textBackgroundColor !== e3.textBackgroundColor || t2.deltaY !== e3.deltaY || s2 && (t2.overline !== e3.overline || t2.underline !== e3.underline || t2.linethrough !== e3.linethrough);
};
var Wi = (t2, e3) => {
  const s2 = e3.split("\n"), i2 = [];
  let r2 = -1, n2 = {};
  t2 = Fi(t2);
  for (let e4 = 0; e4 < s2.length; e4++) {
    const o2 = Ri(s2[e4]);
    if (t2[e4]) for (let s3 = 0; s3 < o2.length; s3++) {
      r2++;
      const o3 = t2[e4][s3];
      o3 && Object.keys(o3).length > 0 && (Yi(n2, o3, true) ? i2.push({ start: r2, end: r2 + 1, style: o3 }) : i2[i2.length - 1].end++), n2 = o3 || {};
    }
    else r2 += o2.length, n2 = {};
  }
  return i2;
};
var Vi = (t2, e3) => {
  if (!Array.isArray(t2)) return Fi(t2);
  const s2 = e3.split(P), i2 = {};
  let r2 = -1, n2 = 0;
  for (let e4 = 0; e4 < s2.length; e4++) {
    const o2 = Ri(s2[e4]);
    for (let s3 = 0; s3 < o2.length; s3++) r2++, t2[n2] && t2[n2].start <= r2 && r2 < t2[n2].end && (i2[e4] = i2[e4] || {}, i2[e4][s3] = { ...t2[n2].style }, r2 === t2[n2].end - 1 && n2++);
  }
  return i2;
};
var Gi = ["display", "transform", H, "fill-opacity", "fill-rule", "opacity", N, "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "vector-effect", "instantiated_by_use", "clip-path"];
function zi(t2, e3) {
  const s2 = t2.nodeName, i2 = t2.getAttribute("class"), r2 = t2.getAttribute("id"), n2 = "(?![a-zA-Z\\-]+)";
  let o2;
  if (o2 = new RegExp("^" + s2, "i"), e3 = e3.replace(o2, ""), r2 && e3.length && (o2 = new RegExp("#" + r2 + n2, "i"), e3 = e3.replace(o2, "")), i2 && e3.length) {
    const t3 = i2.split(" ");
    for (let s3 = t3.length; s3--; ) o2 = new RegExp("\\." + t3[s3] + n2, "i"), e3 = e3.replace(o2, "");
  }
  return 0 === e3.length;
}
function Hi(t2, e3) {
  let s2 = true;
  const i2 = zi(t2, e3.pop());
  return i2 && e3.length && (s2 = (function(t3, e4) {
    let s3, i3 = true;
    for (; t3.parentElement && 1 === t3.parentElement.nodeType && e4.length; ) i3 && (s3 = e4.pop()), i3 = zi(t3 = t3.parentElement, s3);
    return 0 === e4.length;
  })(t2, e3)), i2 && s2 && 0 === e3.length;
}
function Ni(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = {};
  for (const i2 in e3) Hi(t2, i2.split(" ")) && (s2 = { ...s2, ...e3[i2] });
  return s2;
}
var Ui = (t2) => {
  var e3;
  return null !== (e3 = ds[t2]) && void 0 !== e3 ? e3 : t2;
};
var qi = new RegExp(`(${hs})`, "gi");
var Ki = `(${hs})`;
var Ji = String.raw`(skewX)\(${Ki}\)`;
var Qi = String.raw`(skewY)\(${Ki}\)`;
var Zi = String.raw`(rotate)\(${Ki}(?: ${Ki} ${Ki})?\)`;
var tr = String.raw`(scale)\(${Ki}(?: ${Ki})?\)`;
var er = String.raw`(translate)\(${Ki}(?: ${Ki})?\)`;
var sr = `(?:${String.raw`(matrix)\(${Ki} ${Ki} ${Ki} ${Ki} ${Ki} ${Ki}\)`}|${er}|${Zi}|${tr}|${Ji}|${Qi})`;
var ir = `(?:${sr}*)`;
var rr = String.raw`^\s*(?:${ir}?)\s*$`;
var nr = new RegExp(rr);
var or = new RegExp(sr);
var ar = new RegExp(sr, "g");
function hr(t2) {
  const e3 = [];
  if (!(t2 = ((t3) => Be(t3.replace(qi, " $1 ").replace(/,/gi, " ")))(t2).replace(/\s*([()])\s*/gi, "$1")) || t2 && !nr.test(t2)) return [...b];
  for (const s2 of t2.matchAll(ar)) {
    const t3 = or.exec(s2[0]);
    if (!t3) continue;
    let i2 = b;
    const r2 = t3.filter((t4) => !!t4), [, n2, ...o2] = r2, [a2, h2, l2, c2, u2, d2] = o2.map((t4) => parseFloat(t4));
    switch (n2) {
      case "translate":
        i2 = Mt(a2, h2);
        break;
      case L:
        i2 = Et({ angle: a2 }, { x: h2, y: l2 });
        break;
      case Y:
        i2 = Pt(a2, h2);
        break;
      case G:
        i2 = jt(a2);
        break;
      case z:
        i2 = Ft(a2);
        break;
      case "matrix":
        i2 = [a2, h2, l2, c2, u2, d2];
    }
    e3.push(i2);
  }
  return Ot(e3);
}
function lr(t2, e3, s2, i2) {
  const r2 = Array.isArray(e3);
  let n2, o2 = e3;
  if (t2 !== H && t2 !== N || e3 !== E) {
    if ("strokeUniform" === t2) return "non-scaling-stroke" === e3;
    if ("strokeDashArray" === t2) o2 = e3 === E ? null : e3.replace(/,/g, " ").split(/\s+/).map(parseFloat);
    else if ("transformMatrix" === t2) o2 = s2 && s2.transformMatrix ? Tt(s2.transformMatrix, hr(e3)) : hr(e3);
    else if ("visible" === t2) o2 = e3 !== E && "hidden" !== e3, s2 && false === s2.visible && (o2 = false);
    else if ("opacity" === t2) o2 = parseFloat(e3), s2 && void 0 !== s2.opacity && (o2 *= s2.opacity);
    else if ("textAnchor" === t2) o2 = "start" === e3 ? O : "end" === e3 ? M : T;
    else if ("charSpacing" === t2 || t2 === Je) n2 = He(e3, i2) / i2 * 1e3;
    else if ("paintFirst" === t2) {
      const t3 = e3.indexOf(H), s3 = e3.indexOf(N);
      o2 = H, (t3 > -1 && s3 > -1 && s3 < t3 || -1 === t3 && s3 > -1) && (o2 = N);
    } else {
      if ("href" === t2 || "xlink:href" === t2 || "font" === t2 || "id" === t2) return e3;
      if ("imageSmoothing" === t2) return "optimizeQuality" === e3;
      n2 = r2 ? e3.map(He) : He(e3, i2);
    }
  } else o2 = "";
  return !r2 && isNaN(n2) ? o2 : n2;
}
function cr(t2, e3) {
  t2.replace(/;\s*$/, "").split(";").forEach((t3) => {
    if (!t3) return;
    const [s2, i2] = t3.split(":");
    e3[s2.trim().toLowerCase()] = i2.trim();
  });
}
function ur(t2) {
  const e3 = {}, s2 = t2.getAttribute("style");
  return s2 ? ("string" == typeof s2 ? cr(s2, e3) : (function(t3, e4) {
    Object.entries(t3).forEach((t4) => {
      let [s3, i2] = t4;
      void 0 !== i2 && (e4[s3.toLowerCase()] = i2);
    });
  })(s2, e3), e3) : e3;
}
var dr = { stroke: "strokeOpacity", fill: "fillOpacity" };
function gr(t2, e3, s2) {
  if (!t2) return {};
  let i2, r2 = {}, n2 = S;
  t2.parentNode && vs.test(t2.parentNode.nodeName) && (r2 = gr(t2.parentElement, e3, s2), r2.fontSize && (i2 = n2 = He(r2.fontSize)));
  const o2 = { ...e3.reduce((e4, s3) => {
    const i3 = t2.getAttribute(s3);
    return i3 && (e4[s3] = i3), e4;
  }, {}), ...Ni(t2, s2), ...ur(t2) };
  o2[fs] && t2.setAttribute(fs, o2[fs]), o2[gs] && (i2 = He(o2[gs], n2), o2[gs] = `${i2}`);
  const a2 = {};
  for (const t3 in o2) {
    const e4 = Ui(t3), s3 = lr(e4, o2[t3], r2, i2);
    a2[e4] = s3;
  }
  a2 && a2.font && (function(t3, e4) {
    const s3 = t3.match(us);
    if (!s3) return;
    const i3 = s3[1], r3 = s3[3], n3 = s3[4], o3 = s3[5], a3 = s3[6];
    i3 && (e4.fontStyle = i3), r3 && (e4.fontWeight = isNaN(parseFloat(r3)) ? r3 : parseFloat(r3)), n3 && (e4.fontSize = He(n3)), a3 && (e4.fontFamily = a3), o3 && (e4.lineHeight = o3 === J ? 1 : o3);
  })(a2.font, a2);
  const h2 = { ...r2, ...a2 };
  return vs.test(t2.nodeName) ? h2 : (function(t3) {
    const e4 = ki.getDefaults();
    return Object.entries(dr).forEach((s3) => {
      let [i3, r3] = s3;
      if (void 0 === t3[r3] || "" === t3[i3]) return;
      if (void 0 === t3[i3]) {
        if (!e4[i3]) return;
        t3[i3] = e4[i3];
      }
      if (0 === t3[i3].indexOf("url(")) return;
      const n3 = new ze(t3[i3]);
      t3[i3] = n3.setAlpha(Wt(n3.getAlpha() * t3[r3], 2)).toRgba();
    }), t3;
  })(h2);
}
var fr = ["rx", "ry"];
var pr = class _pr extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._pr.ownDefaults };
  }
  constructor(t2) {
    super(), Object.assign(this, _pr.ownDefaults), this.setOptions(t2), this._initRxRy();
  }
  _initRxRy() {
    const { rx: t2, ry: e3 } = this;
    t2 && !e3 ? this.ry = t2 : e3 && !t2 && (this.rx = e3);
  }
  _render(t2) {
    const { width: e3, height: s2 } = this, i2 = -e3 / 2, r2 = -s2 / 2, n2 = this.rx ? Math.min(this.rx, e3 / 2) : 0, o2 = this.ry ? Math.min(this.ry, s2 / 2) : 0, a2 = 0 !== n2 || 0 !== o2;
    t2.beginPath(), t2.moveTo(i2 + n2, r2), t2.lineTo(i2 + e3 - n2, r2), a2 && t2.bezierCurveTo(i2 + e3 - w * n2, r2, i2 + e3, r2 + w * o2, i2 + e3, r2 + o2), t2.lineTo(i2 + e3, r2 + s2 - o2), a2 && t2.bezierCurveTo(i2 + e3, r2 + s2 - w * o2, i2 + e3 - w * n2, r2 + s2, i2 + e3 - n2, r2 + s2), t2.lineTo(i2 + n2, r2 + s2), a2 && t2.bezierCurveTo(i2 + w * n2, r2 + s2, i2, r2 + s2 - w * o2, i2, r2 + s2 - o2), t2.lineTo(i2, r2 + o2), a2 && t2.bezierCurveTo(i2, r2 + w * o2, i2 + w * n2, r2, i2 + n2, r2), t2.closePath(), this._renderPaintInOrder(t2);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...fr, ...t2]);
  }
  _toSVG() {
    const { width: t2, height: e3, rx: s2, ry: i2 } = this;
    return ["<rect ", "COMMON_PARTS", `x="${-t2 / 2}" y="${-e3 / 2}" rx="${s2}" ry="${i2}" width="${t2}" height="${e3}" />
`];
  }
  static async fromElement(t2, e3, s2) {
    const { left: i2 = 0, top: r2 = 0, width: n2 = 0, height: o2 = 0, visible: a2 = true, ...h2 } = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return new this({ ...e3, ...h2, left: i2, top: r2, width: n2, height: o2, visible: Boolean(a2 && n2 && o2) });
  }
};
t(pr, "type", "Rect"), t(pr, "cacheProperties", [...ws, ...fr]), t(pr, "ownDefaults", { rx: 0, ry: 0 }), t(pr, "ATTRIBUTE_NAMES", [...Gi, "x", "y", "rx", "ry", "width", "height"]), tt.setClass(pr), tt.setSVGClass(pr);
var mr = "initialization";
var vr = "added";
var yr = "removed";
var _r = "imperative";
var xr = (t2, e3) => {
  const { strokeUniform: s2, strokeWidth: i2, width: r2, height: n2, group: o2 } = e3, a2 = o2 && o2 !== t2 ? ge(o2.calcTransformMatrix(), t2.calcTransformMatrix()) : null, h2 = a2 ? e3.getRelativeCenterPoint().transform(a2) : e3.getRelativeCenterPoint(), l2 = !e3.isStrokeAccountedForInDimensions(), c2 = s2 && l2 ? pe(new ot(i2, i2), void 0, t2.calcTransformMatrix()) : at, u2 = !s2 && l2 ? i2 : 0, d2 = de(r2 + u2, n2 + u2, Ot([a2, e3.calcOwnMatrix()], true)).add(c2).scalarDivide(2);
  return [h2.subtract(d2), h2.add(d2)];
};
var Cr = class {
  calcLayoutResult(t2, e3) {
    if (this.shouldPerformLayout(t2)) return this.calcBoundingBox(e3, t2);
  }
  shouldPerformLayout(t2) {
    let { type: e3, prevStrategy: s2, strategy: i2 } = t2;
    return e3 === mr || e3 === _r || !!s2 && i2 !== s2;
  }
  shouldLayoutClipPath(t2) {
    let { type: e3, target: { clipPath: s2 } } = t2;
    return e3 !== mr && s2 && !s2.absolutePositioned;
  }
  getInitialSize(t2, e3) {
    return e3.size;
  }
  calcBoundingBox(t2, e3) {
    const { type: s2, target: i2 } = e3;
    if (s2 === _r && e3.overrides) return e3.overrides;
    if (0 === t2.length) return;
    const { left: r2, top: n2, width: o2, height: a2 } = ae(t2.map((t3) => xr(i2, t3)).reduce((t3, e4) => t3.concat(e4), [])), h2 = new ot(o2, a2), l2 = new ot(r2, n2).add(h2.scalarDivide(2));
    if (s2 === mr) {
      const t3 = this.getInitialSize(e3, { size: h2, center: l2 });
      return { center: l2, relativeCorrection: new ot(0, 0), size: t3 };
    }
    return { center: l2.transform(i2.calcOwnMatrix()), size: h2 };
  }
};
t(Cr, "type", "strategy");
var br = class extends Cr {
  shouldPerformLayout(t2) {
    return true;
  }
};
t(br, "type", "fit-content"), tt.setClass(br);
var Sr = "layoutManager";
var wr = class {
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new br();
    t(this, "strategy", void 0), this.strategy = e3, this._subscriptions = /* @__PURE__ */ new Map();
  }
  performLayout(t2) {
    const e3 = { bubbles: true, strategy: this.strategy, ...t2, prevStrategy: this._prevLayoutStrategy, stopPropagation() {
      this.bubbles = false;
    } };
    this.onBeforeLayout(e3);
    const s2 = this.getLayoutResult(e3);
    s2 && this.commitLayout(e3, s2), this.onAfterLayout(e3, s2), this._prevLayoutStrategy = e3.strategy;
  }
  attachHandlers(t2, e3) {
    const { target: s2 } = e3;
    return [U, A, R, F, j, I, X, B, $].map((e4) => t2.on(e4, (t3) => this.performLayout(e4 === U ? { type: "object_modified", trigger: e4, e: t3, target: s2 } : { type: "object_modifying", trigger: e4, e: t3, target: s2 })));
  }
  subscribe(t2, e3) {
    this.unsubscribe(t2, e3);
    const s2 = this.attachHandlers(t2, e3);
    this._subscriptions.set(t2, s2);
  }
  unsubscribe(t2, e3) {
    (this._subscriptions.get(t2) || []).forEach((t3) => t3()), this._subscriptions.delete(t2);
  }
  unsubscribeTargets(t2) {
    t2.targets.forEach((e3) => this.unsubscribe(e3, t2));
  }
  subscribeTargets(t2) {
    t2.targets.forEach((e3) => this.subscribe(e3, t2));
  }
  onBeforeLayout(t2) {
    const { target: e3, type: s2 } = t2, { canvas: i2 } = e3;
    if (s2 === mr || s2 === vr ? this.subscribeTargets(t2) : s2 === yr && this.unsubscribeTargets(t2), e3.fire("layout:before", { context: t2 }), i2 && i2.fire("object:layout:before", { target: e3, context: t2 }), s2 === _r && t2.deep) {
      const { strategy: s3, ...i3 } = t2;
      e3.forEachObject((t3) => t3.layoutManager && t3.layoutManager.performLayout({ ...i3, bubbles: false, target: t3 }));
    }
  }
  getLayoutResult(t2) {
    const { target: e3, strategy: s2, type: i2 } = t2, r2 = s2.calcLayoutResult(t2, e3.getObjects());
    if (!r2) return;
    const n2 = i2 === mr ? new ot() : e3.getRelativeCenterPoint(), { center: o2, correction: a2 = new ot(), relativeCorrection: h2 = new ot() } = r2, l2 = n2.subtract(o2).add(a2).transform(i2 === mr ? b : wt(e3.calcOwnMatrix()), true).add(h2);
    return { result: r2, prevCenter: n2, nextCenter: o2, offset: l2 };
  }
  commitLayout(t2, e3) {
    const { target: s2 } = t2, { result: { size: i2 }, nextCenter: r2 } = e3;
    var n2, o2;
    (s2.set({ width: i2.x, height: i2.y }), this.layoutObjects(t2, e3), t2.type === mr) ? s2.set({ left: null !== (n2 = t2.x) && void 0 !== n2 ? n2 : r2.x + i2.x * ye(s2.originX), top: null !== (o2 = t2.y) && void 0 !== o2 ? o2 : r2.y + i2.y * ye(s2.originY) }) : (s2.setPositionByOrigin(r2, T, T), s2.setCoords(), s2.set("dirty", true));
  }
  layoutObjects(t2, e3) {
    const { target: s2 } = t2;
    s2.forEachObject((i2) => {
      i2.group === s2 && this.layoutObject(t2, e3, i2);
    }), t2.strategy.shouldLayoutClipPath(t2) && this.layoutObject(t2, e3, s2.clipPath);
  }
  layoutObject(t2, e3, s2) {
    let { offset: i2 } = e3;
    s2.set({ left: s2.left + i2.x, top: s2.top + i2.y });
  }
  onAfterLayout(t2, e3) {
    const { target: s2, strategy: i2, bubbles: r2, prevStrategy: n2, ...o2 } = t2, { canvas: a2 } = s2;
    s2.fire("layout:after", { context: t2, result: e3 }), a2 && a2.fire("object:layout:after", { context: t2, result: e3, target: s2 });
    const h2 = s2.parent;
    r2 && null != h2 && h2.layoutManager && ((o2.path || (o2.path = [])).push(s2), h2.layoutManager.performLayout({ ...o2, target: h2 })), s2.set("dirty", true);
  }
  dispose() {
    const { _subscriptions: t2 } = this;
    t2.forEach((t3) => t3.forEach((t4) => t4())), t2.clear();
  }
  toObject() {
    return { type: Sr, strategy: this.strategy.constructor.type };
  }
  toJSON() {
    return this.toObject();
  }
};
tt.setClass(wr, Sr);
var Tr = class extends wr {
  performLayout() {
  }
};
var Or = class _Or extends lt(ki) {
  static getDefaults() {
    return { ...super.getDefaults(), ..._Or.ownDefaults };
  }
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "_activeObjects", []), t(this, "__objectSelectionTracker", void 0), t(this, "__objectSelectionDisposer", void 0), Object.assign(this, _Or.ownDefaults), this.setOptions(s2), this.groupInit(e3, s2);
  }
  groupInit(t2, e3) {
    var s2;
    this._objects = [...t2], this.__objectSelectionTracker = this.__objectSelectionMonitor.bind(this, true), this.__objectSelectionDisposer = this.__objectSelectionMonitor.bind(this, false), this.forEachObject((t3) => {
      this.enterGroup(t3, false);
    }), this.layoutManager = null !== (s2 = e3.layoutManager) && void 0 !== s2 ? s2 : new wr(), this.layoutManager.performLayout({ type: mr, target: this, targets: [...t2], x: e3.left, y: e3.top });
  }
  canEnterGroup(t2) {
    return t2 === this || this.isDescendantOf(t2) ? (i("error", "Group: circular object trees are not supported, this call has no effect"), false) : -1 === this._objects.indexOf(t2) || (i("error", "Group: duplicate objects are not supported inside group, this call has no effect"), false);
  }
  _filterObjectsBeforeEnteringGroup(t2) {
    return t2.filter((t3, e3, s2) => this.canEnterGroup(t3) && s2.indexOf(t3) === e3);
  }
  add() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    const i2 = this._filterObjectsBeforeEnteringGroup(e3), r2 = super.add(...i2);
    return this._onAfterObjectsChange(vr, i2), r2;
  }
  insertAt(t2) {
    for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
    const r2 = this._filterObjectsBeforeEnteringGroup(s2), n2 = super.insertAt(t2, ...r2);
    return this._onAfterObjectsChange(vr, r2), n2;
  }
  remove() {
    const t2 = super.remove(...arguments);
    return this._onAfterObjectsChange(yr, t2), t2;
  }
  _onObjectAdded(t2) {
    this.enterGroup(t2, true), this.fire("object:added", { target: t2 }), t2.fire("added", { target: this });
  }
  _onObjectRemoved(t2, e3) {
    this.exitGroup(t2, e3), this.fire("object:removed", { target: t2 }), t2.fire("removed", { target: this });
  }
  _onAfterObjectsChange(t2, e3) {
    this.layoutManager.performLayout({ type: t2, targets: e3, target: this });
  }
  _onStackOrderChanged() {
    this._set("dirty", true);
  }
  _set(t2, e3) {
    const s2 = this[t2];
    return super._set(t2, e3), "canvas" === t2 && s2 !== e3 && (this._objects || []).forEach((s3) => {
      s3._set(t2, e3);
    }), this;
  }
  _shouldSetNestedCoords() {
    return this.subTargetCheck;
  }
  removeAll() {
    return this._activeObjects = [], this.remove(...this._objects);
  }
  __objectSelectionMonitor(t2, e3) {
    let { target: s2 } = e3;
    const i2 = this._activeObjects;
    if (t2) i2.push(s2), this._set("dirty", true);
    else if (i2.length > 0) {
      const t3 = i2.indexOf(s2);
      t3 > -1 && (i2.splice(t3, 1), this._set("dirty", true));
    }
  }
  _watchObject(t2, e3) {
    t2 && this._watchObject(false, e3), t2 ? (e3.on("selected", this.__objectSelectionTracker), e3.on("deselected", this.__objectSelectionDisposer)) : (e3.off("selected", this.__objectSelectionTracker), e3.off("deselected", this.__objectSelectionDisposer));
  }
  enterGroup(t2, e3) {
    t2.group && t2.group.remove(t2), t2._set("parent", this), this._enterGroup(t2, e3);
  }
  _enterGroup(t2, e3) {
    e3 && le(t2, Tt(wt(this.calcTransformMatrix()), t2.calcTransformMatrix())), this._shouldSetNestedCoords() && t2.setCoords(), t2._set("group", this), t2._set("canvas", this.canvas), this._watchObject(true, t2);
    const s2 = this.canvas && this.canvas.getActiveObject && this.canvas.getActiveObject();
    s2 && (s2 === t2 || t2.isDescendantOf(s2)) && this._activeObjects.push(t2);
  }
  exitGroup(t2, e3) {
    this._exitGroup(t2, e3), t2._set("parent", void 0), t2._set("canvas", void 0);
  }
  _exitGroup(t2, e3) {
    t2._set("group", void 0), e3 || (le(t2, Tt(this.calcTransformMatrix(), t2.calcTransformMatrix())), t2.setCoords()), this._watchObject(false, t2);
    const s2 = this._activeObjects.length > 0 ? this._activeObjects.indexOf(t2) : -1;
    s2 > -1 && this._activeObjects.splice(s2, 1);
  }
  shouldCache() {
    const t2 = ki.prototype.shouldCache.call(this);
    if (t2) {
      for (let t3 = 0; t3 < this._objects.length; t3++) if (this._objects[t3].willDrawShadow()) return this.ownCaching = false, false;
    }
    return t2;
  }
  willDrawShadow() {
    if (super.willDrawShadow()) return true;
    for (let t2 = 0; t2 < this._objects.length; t2++) if (this._objects[t2].willDrawShadow()) return true;
    return false;
  }
  isOnACache() {
    return this.ownCaching || !!this.parent && this.parent.isOnACache();
  }
  drawObject(t2, e3, s2) {
    this._renderBackground(t2);
    for (let e4 = 0; e4 < this._objects.length; e4++) {
      var i2;
      const s3 = this._objects[e4];
      null !== (i2 = this.canvas) && void 0 !== i2 && i2.preserveObjectStacking && s3.group !== this ? (t2.save(), t2.transform(...wt(this.calcTransformMatrix())), s3.render(t2), t2.restore()) : s3.group === this && s3.render(t2);
    }
    this._drawClipPath(t2, this.clipPath, s2);
  }
  setCoords() {
    super.setCoords(), this._shouldSetNestedCoords() && this.forEachObject((t2) => t2.setCoords());
  }
  triggerLayout() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    this.layoutManager.performLayout({ target: this, type: _r, ...t2 });
  }
  render(t2) {
    this._transformDone = true, super.render(t2), this._transformDone = false;
  }
  __serializeObjects(t2, e3) {
    const s2 = this.includeDefaultValues;
    return this._objects.filter(function(t3) {
      return !t3.excludeFromExport;
    }).map(function(i2) {
      const r2 = i2.includeDefaultValues;
      i2.includeDefaultValues = s2;
      const n2 = i2[t2 || "toObject"](e3);
      return i2.includeDefaultValues = r2, n2;
    });
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = this.layoutManager.toObject();
    return { ...super.toObject(["subTargetCheck", "interactive", ...t2]), ..."fit-content" !== e3.strategy || this.includeDefaultValues ? { layoutManager: e3 } : {}, objects: this.__serializeObjects("toObject", t2) };
  }
  toString() {
    return `#<Group: (${this.complexity()})>`;
  }
  dispose() {
    this.layoutManager.unsubscribeTargets({ targets: this.getObjects(), target: this }), this._activeObjects = [], this.forEachObject((t2) => {
      this._watchObject(false, t2), t2.dispose();
    }), super.dispose();
  }
  _createSVGBgRect(t2) {
    if (!this.backgroundColor) return "";
    const e3 = pr.prototype._toSVG.call(this), s2 = e3.indexOf("COMMON_PARTS");
    e3[s2] = 'for="group" ';
    const i2 = e3.join("");
    return t2 ? t2(i2) : i2;
  }
  _toSVG(t2) {
    const e3 = ["<g ", "COMMON_PARTS", " >\n"], s2 = this._createSVGBgRect(t2);
    s2 && e3.push("		", s2);
    for (let s3 = 0; s3 < this._objects.length; s3++) e3.push("		", this._objects[s3].toSVG(t2));
    return e3.push("</g>\n"), e3;
  }
  getSvgStyles() {
    const t2 = void 0 !== this.opacity && 1 !== this.opacity ? `opacity: ${this.opacity};` : "", e3 = this.visible ? "" : " visibility: hidden;";
    return [t2, this.getSvgFilter(), e3].join("");
  }
  toClipPathSVG(t2) {
    const e3 = [], s2 = this._createSVGBgRect(t2);
    s2 && e3.push("	", s2);
    for (let s3 = 0; s3 < this._objects.length; s3++) e3.push("	", this._objects[s3].toClipPathSVG(t2));
    return this._createBaseClipPathSVGMarkup(e3, { reviver: t2 });
  }
  static fromObject(t2, e3) {
    let { type: s2, objects: i2 = [], layoutManager: r2, ...n2 } = t2;
    return Promise.all([Bt(i2, e3), $t(n2, e3)]).then((t3) => {
      let [e4, s3] = t3;
      const i3 = new this(e4, { ...n2, ...s3, layoutManager: new Tr() });
      if (r2) {
        const t4 = tt.getClass(r2.type), e5 = tt.getClass(r2.strategy);
        i3.layoutManager = new t4(new e5());
      } else i3.layoutManager = new wr();
      return i3.layoutManager.subscribeTargets({ type: mr, target: i3, targets: i3.getObjects() }), i3.setCoords(), i3;
    });
  }
};
t(Or, "type", "Group"), t(Or, "ownDefaults", { strokeWidth: 0, subTargetCheck: false, interactive: false }), tt.setClass(Or);
var kr = (t2, e3) => Math.min(e3.width / t2.width, e3.height / t2.height);
var Dr = (t2, e3) => Math.max(e3.width / t2.width, e3.height / t2.height);
var Mr = "\\s*,?\\s*";
var Er = `${Mr}(${hs})`;
var Pr = `${Er}${Er}${Er}${Mr}([01])${Mr}([01])${Er}${Er}`;
var Ar = { m: "l", M: "L" };
var jr = (t2, e3, s2, i2, r2, n2, o2, a2, h2, l2, c2) => {
  const u2 = rt(t2), d2 = nt(t2), g2 = rt(e3), f2 = nt(e3), p2 = s2 * r2 * g2 - i2 * n2 * f2 + o2, m2 = i2 * r2 * g2 + s2 * n2 * f2 + a2;
  return ["C", l2 + h2 * (-s2 * r2 * d2 - i2 * n2 * u2), c2 + h2 * (-i2 * r2 * d2 + s2 * n2 * u2), p2 + h2 * (s2 * r2 * f2 + i2 * n2 * g2), m2 + h2 * (i2 * r2 * f2 - s2 * n2 * g2), p2, m2];
};
var Fr = (t2, e3, s2, i2) => {
  const r2 = Math.atan2(e3, t2), n2 = Math.atan2(i2, s2);
  return n2 >= r2 ? n2 - r2 : 2 * Math.PI - (r2 - n2);
};
function Lr(t2, e3, i2, r2, n2, o2, a2, h2) {
  let l2;
  if (s.cachesBoundsOfCurve && (l2 = [...arguments].join(), p.boundsOfCurveCache[l2])) return p.boundsOfCurveCache[l2];
  const c2 = Math.sqrt, u2 = Math.abs, d2 = [], g2 = [[0, 0], [0, 0]];
  let f2 = 6 * t2 - 12 * i2 + 6 * n2, m2 = -3 * t2 + 9 * i2 - 9 * n2 + 3 * a2, v2 = 3 * i2 - 3 * t2;
  for (let t3 = 0; t3 < 2; ++t3) {
    if (t3 > 0 && (f2 = 6 * e3 - 12 * r2 + 6 * o2, m2 = -3 * e3 + 9 * r2 - 9 * o2 + 3 * h2, v2 = 3 * r2 - 3 * e3), u2(m2) < 1e-12) {
      if (u2(f2) < 1e-12) continue;
      const t4 = -v2 / f2;
      0 < t4 && t4 < 1 && d2.push(t4);
      continue;
    }
    const s2 = f2 * f2 - 4 * v2 * m2;
    if (s2 < 0) continue;
    const i3 = c2(s2), n3 = (-f2 + i3) / (2 * m2);
    0 < n3 && n3 < 1 && d2.push(n3);
    const a3 = (-f2 - i3) / (2 * m2);
    0 < a3 && a3 < 1 && d2.push(a3);
  }
  let y2 = d2.length;
  const _2 = y2, x2 = $r(t2, e3, i2, r2, n2, o2, a2, h2);
  for (; y2--; ) {
    const { x: t3, y: e4 } = x2(d2[y2]);
    g2[0][y2] = t3, g2[1][y2] = e4;
  }
  g2[0][_2] = t2, g2[1][_2] = e3, g2[0][_2 + 1] = a2, g2[1][_2 + 1] = h2;
  const C2 = [new ot(Math.min(...g2[0]), Math.min(...g2[1])), new ot(Math.max(...g2[0]), Math.max(...g2[1]))];
  return s.cachesBoundsOfCurve && (p.boundsOfCurveCache[l2] = C2), C2;
}
var Ir = (t2, e3, s2) => {
  let [i2, r2, n2, o2, a2, h2, l2, c2] = s2;
  const u2 = ((t3, e4, s3, i3, r3, n3, o3) => {
    if (0 === s3 || 0 === i3) return [];
    let a3 = 0, h3 = 0, l3 = 0;
    const c3 = Math.PI, u3 = o3 * C, d2 = nt(u3), g2 = rt(u3), f2 = 0.5 * (-g2 * t3 - d2 * e4), p2 = 0.5 * (-g2 * e4 + d2 * t3), m2 = s3 ** 2, v2 = i3 ** 2, y2 = p2 ** 2, _2 = f2 ** 2, x2 = m2 * v2 - m2 * y2 - v2 * _2;
    let b2 = Math.abs(s3), S2 = Math.abs(i3);
    if (x2 < 0) {
      const t4 = Math.sqrt(1 - x2 / (m2 * v2));
      b2 *= t4, S2 *= t4;
    } else l3 = (r3 === n3 ? -1 : 1) * Math.sqrt(x2 / (m2 * y2 + v2 * _2));
    const w2 = l3 * b2 * p2 / S2, T2 = -l3 * S2 * f2 / b2, O2 = g2 * w2 - d2 * T2 + 0.5 * t3, k2 = d2 * w2 + g2 * T2 + 0.5 * e4;
    let D2 = Fr(1, 0, (f2 - w2) / b2, (p2 - T2) / S2), M2 = Fr((f2 - w2) / b2, (p2 - T2) / S2, (-f2 - w2) / b2, (-p2 - T2) / S2);
    0 === n3 && M2 > 0 ? M2 -= 2 * c3 : 1 === n3 && M2 < 0 && (M2 += 2 * c3);
    const E2 = Math.ceil(Math.abs(M2 / c3 * 2)), P2 = [], A2 = M2 / E2, j2 = 8 / 3 * Math.sin(A2 / 4) * Math.sin(A2 / 4) / Math.sin(A2 / 2);
    let F2 = D2 + A2;
    for (let t4 = 0; t4 < E2; t4++) P2[t4] = jr(D2, F2, g2, d2, b2, S2, O2, k2, j2, a3, h3), a3 = P2[t4][5], h3 = P2[t4][6], D2 = F2, F2 += A2;
    return P2;
  })(l2 - t2, c2 - e3, r2, n2, a2, h2, o2);
  for (let s3 = 0, i3 = u2.length; s3 < i3; s3++) u2[s3][1] += t2, u2[s3][2] += e3, u2[s3][3] += t2, u2[s3][4] += e3, u2[s3][5] += t2, u2[s3][6] += e3;
  return u2;
};
var Rr = (t2) => {
  let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
  const n2 = [];
  let o2, a2 = 0, h2 = 0;
  for (const l2 of t2) {
    const t3 = [...l2];
    let c2;
    switch (t3[0]) {
      case "l":
        t3[1] += e3, t3[2] += s2;
      case "L":
        e3 = t3[1], s2 = t3[2], c2 = ["L", e3, s2];
        break;
      case "h":
        t3[1] += e3;
      case "H":
        e3 = t3[1], c2 = ["L", e3, s2];
        break;
      case "v":
        t3[1] += s2;
      case "V":
        s2 = t3[1], c2 = ["L", e3, s2];
        break;
      case "m":
        t3[1] += e3, t3[2] += s2;
      case "M":
        e3 = t3[1], s2 = t3[2], i2 = t3[1], r2 = t3[2], c2 = ["M", e3, s2];
        break;
      case "c":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2, t3[5] += e3, t3[6] += s2;
      case "C":
        a2 = t3[3], h2 = t3[4], e3 = t3[5], s2 = t3[6], c2 = ["C", t3[1], t3[2], a2, h2, e3, s2];
        break;
      case "s":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2;
      case "S":
        "C" === o2 ? (a2 = 2 * e3 - a2, h2 = 2 * s2 - h2) : (a2 = e3, h2 = s2), e3 = t3[3], s2 = t3[4], c2 = ["C", a2, h2, t3[1], t3[2], e3, s2], a2 = c2[3], h2 = c2[4];
        break;
      case "q":
        t3[1] += e3, t3[2] += s2, t3[3] += e3, t3[4] += s2;
      case "Q":
        a2 = t3[1], h2 = t3[2], e3 = t3[3], s2 = t3[4], c2 = ["Q", a2, h2, e3, s2];
        break;
      case "t":
        t3[1] += e3, t3[2] += s2;
      case "T":
        "Q" === o2 ? (a2 = 2 * e3 - a2, h2 = 2 * s2 - h2) : (a2 = e3, h2 = s2), e3 = t3[1], s2 = t3[2], c2 = ["Q", a2, h2, e3, s2];
        break;
      case "a":
        t3[6] += e3, t3[7] += s2;
      case "A":
        Ir(e3, s2, t3).forEach((t4) => n2.push(t4)), e3 = t3[6], s2 = t3[7];
        break;
      case "z":
      case "Z":
        e3 = i2, s2 = r2, c2 = ["Z"];
    }
    c2 ? (n2.push(c2), o2 = c2[0]) : o2 = "";
  }
  return n2;
};
var Br = (t2, e3, s2, i2) => Math.sqrt((s2 - t2) ** 2 + (i2 - e3) ** 2);
var $r = (t2, e3, s2, i2, r2, n2, o2, a2) => (h2) => {
  const l2 = h2 ** 3, c2 = ((t3) => 3 * t3 ** 2 * (1 - t3))(h2), u2 = ((t3) => 3 * t3 * (1 - t3) ** 2)(h2), d2 = ((t3) => (1 - t3) ** 3)(h2);
  return new ot(o2 * l2 + r2 * c2 + s2 * u2 + t2 * d2, a2 * l2 + n2 * c2 + i2 * u2 + e3 * d2);
};
var Xr = (t2) => t2 ** 2;
var Yr = (t2) => 2 * t2 * (1 - t2);
var Wr = (t2) => (1 - t2) ** 2;
var Vr = (t2, e3, s2, i2, r2, n2, o2, a2) => (h2) => {
  const l2 = Xr(h2), c2 = Yr(h2), u2 = Wr(h2), d2 = 3 * (u2 * (s2 - t2) + c2 * (r2 - s2) + l2 * (o2 - r2)), g2 = 3 * (u2 * (i2 - e3) + c2 * (n2 - i2) + l2 * (a2 - n2));
  return Math.atan2(g2, d2);
};
var Gr = (t2, e3, s2, i2, r2, n2) => (o2) => {
  const a2 = Xr(o2), h2 = Yr(o2), l2 = Wr(o2);
  return new ot(r2 * a2 + s2 * h2 + t2 * l2, n2 * a2 + i2 * h2 + e3 * l2);
};
var zr = (t2, e3, s2, i2, r2, n2) => (o2) => {
  const a2 = 1 - o2, h2 = 2 * (a2 * (s2 - t2) + o2 * (r2 - s2)), l2 = 2 * (a2 * (i2 - e3) + o2 * (n2 - i2));
  return Math.atan2(l2, h2);
};
var Hr = (t2, e3, s2) => {
  let i2 = new ot(e3, s2), r2 = 0;
  for (let e4 = 1; e4 <= 100; e4 += 1) {
    const s3 = t2(e4 / 100);
    r2 += Br(i2.x, i2.y, s3.x, s3.y), i2 = s3;
  }
  return r2;
};
var Nr = (t2, e3) => {
  let s2, i2 = 0, r2 = 0, n2 = { x: t2.x, y: t2.y }, o2 = { ...n2 }, a2 = 0.01, h2 = 0;
  const l2 = t2.iterator, c2 = t2.angleFinder;
  for (; r2 < e3 && a2 > 1e-4; ) o2 = l2(i2), h2 = i2, s2 = Br(n2.x, n2.y, o2.x, o2.y), s2 + r2 > e3 ? (i2 -= a2, a2 /= 2) : (n2 = o2, i2 += a2, r2 += s2);
  return { ...o2, angle: c2(h2) };
};
var Ur = (t2) => {
  let e3, s2, i2 = 0, r2 = 0, n2 = 0, o2 = 0, a2 = 0;
  const h2 = [];
  for (const l2 of t2) {
    const t3 = { x: r2, y: n2, command: l2[0], length: 0 };
    switch (l2[0]) {
      case "M":
        s2 = t3, s2.x = o2 = r2 = l2[1], s2.y = a2 = n2 = l2[2];
        break;
      case "L":
        s2 = t3, s2.length = Br(r2, n2, l2[1], l2[2]), r2 = l2[1], n2 = l2[2];
        break;
      case "C":
        e3 = $r(r2, n2, l2[1], l2[2], l2[3], l2[4], l2[5], l2[6]), s2 = t3, s2.iterator = e3, s2.angleFinder = Vr(r2, n2, l2[1], l2[2], l2[3], l2[4], l2[5], l2[6]), s2.length = Hr(e3, r2, n2), r2 = l2[5], n2 = l2[6];
        break;
      case "Q":
        e3 = Gr(r2, n2, l2[1], l2[2], l2[3], l2[4]), s2 = t3, s2.iterator = e3, s2.angleFinder = zr(r2, n2, l2[1], l2[2], l2[3], l2[4]), s2.length = Hr(e3, r2, n2), r2 = l2[3], n2 = l2[4];
        break;
      case "Z":
        s2 = t3, s2.destX = o2, s2.destY = a2, s2.length = Br(r2, n2, o2, a2), r2 = o2, n2 = a2;
    }
    i2 += s2.length, h2.push(s2);
  }
  return h2.push({ length: i2, x: r2, y: n2 }), h2;
};
var qr = function(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ur(t2), i2 = 0;
  for (; e3 - s2[i2].length > 0 && i2 < s2.length - 2; ) e3 -= s2[i2].length, i2++;
  const r2 = s2[i2], n2 = e3 / r2.length, o2 = t2[i2];
  switch (r2.command) {
    case "M":
      return { x: r2.x, y: r2.y, angle: 0 };
    case "Z":
      return { ...new ot(r2.x, r2.y).lerp(new ot(r2.destX, r2.destY), n2), angle: Math.atan2(r2.destY - r2.y, r2.destX - r2.x) };
    case "L":
      return { ...new ot(r2.x, r2.y).lerp(new ot(o2[1], o2[2]), n2), angle: Math.atan2(o2[2] - r2.y, o2[1] - r2.x) };
    case "C":
    case "Q":
      return Nr(r2, e3);
  }
};
var Kr = new RegExp("[mzlhvcsqta][^mzlhvcsqta]*", "gi");
var Jr = new RegExp(Pr, "g");
var Qr = new RegExp(hs, "gi");
var Zr = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 };
var tn = (t2) => {
  var e3;
  const s2 = [], i2 = null !== (e3 = t2.match(Kr)) && void 0 !== e3 ? e3 : [];
  for (const t3 of i2) {
    const e4 = t3[0];
    if ("z" === e4 || "Z" === e4) {
      s2.push([e4]);
      continue;
    }
    const i3 = Zr[e4.toLowerCase()];
    let r2 = [];
    if ("a" === e4 || "A" === e4) {
      Jr.lastIndex = 0;
      for (let e5 = null; e5 = Jr.exec(t3); ) r2.push(...e5.slice(1));
    } else r2 = t3.match(Qr) || [];
    for (let t4 = 0; t4 < r2.length; t4 += i3) {
      const n2 = new Array(i3), o2 = Ar[e4];
      n2[0] = t4 > 0 && o2 ? o2 : e4;
      for (let e5 = 0; e5 < i3; e5++) n2[e5 + 1] = parseFloat(r2[t4 + e5]);
      s2.push(n2);
    }
  }
  return s2;
};
var en = function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, s2 = new ot(t2[0]), i2 = new ot(t2[1]), r2 = 1, n2 = 0;
  const o2 = [], a2 = t2.length, h2 = a2 > 2;
  let l2;
  for (h2 && (r2 = t2[2].x < i2.x ? -1 : t2[2].x === i2.x ? 0 : 1, n2 = t2[2].y < i2.y ? -1 : t2[2].y === i2.y ? 0 : 1), o2.push(["M", s2.x - r2 * e3, s2.y - n2 * e3]), l2 = 1; l2 < a2; l2++) {
    if (!s2.eq(i2)) {
      const t3 = s2.midPointFrom(i2);
      o2.push(["Q", s2.x, s2.y, t3.x, t3.y]);
    }
    s2 = t2[l2], l2 + 1 < t2.length && (i2 = t2[l2 + 1]);
  }
  return h2 && (r2 = s2.x > t2[l2 - 2].x ? 1 : s2.x === t2[l2 - 2].x ? 0 : -1, n2 = s2.y > t2[l2 - 2].y ? 1 : s2.y === t2[l2 - 2].y ? 0 : -1), o2.push(["L", s2.x + r2 * e3, s2.y + n2 * e3]), o2;
};
var sn = (t2, e3) => t2.map((t3) => t3.map((t4, s2) => 0 === s2 || void 0 === e3 ? t4 : Wt(t4, e3)).join(" ")).join(" ");
var rn = (t2, e3) => Math.floor(Math.random() * (e3 - t2 + 1)) + t2;
var nn = (t2, e3) => {
  let s2 = t2._findCenterFromElement();
  t2.transformMatrix && (((t3) => {
    if (t3.transformMatrix) {
      const { scaleX: e4, scaleY: s3, angle: i2, skewX: r2 } = Dt(t3.transformMatrix);
      t3.flipX = false, t3.flipY = false, t3.set(W, e4), t3.set(V, s3), t3.angle = i2, t3.skewX = r2, t3.skewY = 0;
    }
  })(t2), s2 = s2.transform(t2.transformMatrix)), delete t2.transformMatrix, e3 && (t2.scaleX *= e3.scaleX, t2.scaleY *= e3.scaleY, t2.cropX = e3.cropX, t2.cropY = e3.cropY, s2.x += e3.offsetLeft, s2.y += e3.offsetTop, t2.width = e3.width, t2.height = e3.height), t2.setPositionByOrigin(s2, T, T);
};
var on = Object.freeze({ __proto__: null, addTransformToObject: he, animate: $s, animateColor: Xs, applyTransformToObject: le, calcAngleBetweenVectors: we, calcDimensionsMatrix: Lt, calcPlaneChangeMatrix: ge, calcVectorRotation: Te, cancelAnimFrame: dt, capValue: bs, composeMatrix: It, copyCanvasElement: (t2) => {
  var e3;
  const s2 = vt(t2);
  return null === (e3 = s2.getContext("2d")) || void 0 === e3 || e3.drawImage(t2, 0, 0), s2;
}, cos: rt, createCanvasElement: pt, createImage: mt, createRotateMatrix: Et, createScaleMatrix: Pt, createSkewXMatrix: jt, createSkewYMatrix: Ft, createTranslateMatrix: Mt, createVector: be, crossProduct: De, degreesToRadians: xt, dotProduct: Me, ease: Ps, enlivenObjectEnlivables: $t, enlivenObjects: Bt, findScaleToCover: Dr, findScaleToFit: kr, getBoundsOfCurve: Lr, getOrthonormalVector: ke, getPathSegmentsInfo: Ur, getPointOnPath: qr, getPointer: re, getRandomInt: rn, getRegularPolygonPath: (t2, e3) => {
  const s2 = 2 * Math.PI / t2;
  let i2 = -y;
  t2 % 2 == 0 && (i2 += s2 / 2);
  const r2 = new Array(t2 + 1);
  for (let n2 = 0; n2 < t2; n2++) {
    const t3 = n2 * s2 + i2, { x: o2, y: a2 } = new ot(rt(t3), nt(t3)).scalarMultiply(e3);
    r2[n2] = [0 === n2 ? "M" : "L", o2, a2];
  }
  return r2[t2] = ["Z"], r2;
}, getSmoothPathFromPoints: en, getSvgAttributes: (t2) => {
  const e3 = ["instantiated_by_use", "style", "id", "class"];
  switch (t2) {
    case "linearGradient":
      return e3.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
    case "radialGradient":
      return e3.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
    case "stop":
      return e3.concat(["offset", "stop-color", "stop-opacity"]);
  }
  return e3;
}, getUnitVector: Oe, groupSVGElements: (t2, e3) => t2 && 1 === t2.length ? t2[0] : new Or(t2, e3), hasStyleChanged: Yi, invertTransform: wt, isBetweenVectors: Ee, isIdentityMatrix: bt, isTouchEvent: ne, isTransparent: Di, joinPath: sn, loadImage: Rt, magnitude: Se, makeBoundingBoxFromPoints: ae, makePathSimpler: Rr, matrixToSVG: Vt, mergeClipPaths: (t2, e3) => {
  var s2;
  let i2 = t2, r2 = e3;
  i2.inverted && !r2.inverted && (i2 = e3, r2 = t2), me(r2, null === (s2 = r2.group) || void 0 === s2 ? void 0 : s2.calcTransformMatrix(), i2.calcTransformMatrix());
  const n2 = i2.inverted && r2.inverted;
  return n2 && (i2.inverted = r2.inverted = false), new Or([i2], { clipPath: r2, inverted: n2 });
}, multiplyTransformMatrices: Tt, multiplyTransformMatrixArray: Ot, parsePath: tn, parsePreserveAspectRatioAttribute: Ne, parseUnit: He, pick: Xt, projectStrokeOnPoints: ji, qrDecompose: Dt, radiansToDegrees: Ct, removeFromArray: it, removeTransformFromObject: (t2, e3) => {
  const s2 = wt(e3), i2 = Tt(s2, t2.calcOwnMatrix());
  le(t2, i2);
}, removeTransformMatrixForSvgParsing: nn, requestAnimFrame: ut, resetObjectTransform: ce, rotateVector: Ce, saveObjectTransform: ue, sendObjectToPlane: me, sendPointToPlane: fe, sendVectorToPlane: pe, sin: nt, sizeAfterTransform: de, string: Xi, stylesFromArray: Vi, stylesToArray: Wi, toBlob: _t, toDataURL: yt, toFixed: Wt, transformPath: (t2, e3, s2) => (s2 && (e3 = Tt(e3, [1, 0, 0, 1, -s2.x, -s2.y])), t2.map((t3) => {
  const s3 = [...t3];
  for (let i2 = 1; i2 < t3.length - 1; i2 += 2) {
    const { x: r2, y: n2 } = St({ x: t3[i2], y: t3[i2 + 1] }, e3);
    s3[i2] = r2, s3[i2 + 1] = n2;
  }
  return s3;
})), transformPoint: St });
function an(t2, e3) {
  const s2 = t2.style;
  s2 && Object.entries(e3).forEach((t3) => {
    let [e4, i2] = t3;
    return s2.setProperty(e4, i2);
  });
}
var hn = class extends te {
  constructor(e3) {
    let { allowTouchScrolling: s2 = false, containerClass: i2 = "" } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(e3), t(this, "upper", void 0), t(this, "container", void 0);
    const { el: r2 } = this.lower, n2 = this.createUpperCanvas();
    this.upper = { el: n2, ctx: n2.getContext("2d") }, this.applyCanvasStyle(r2, { allowTouchScrolling: s2 }), this.applyCanvasStyle(n2, { allowTouchScrolling: s2, styles: { position: "absolute", left: "0", top: "0" } });
    const o2 = this.createContainerElement();
    o2.classList.add(i2), r2.parentNode && r2.parentNode.replaceChild(o2, r2), o2.append(r2, n2), this.container = o2;
  }
  createUpperCanvas() {
    const { el: t2 } = this.lower, e3 = pt();
    return e3.className = t2.className, e3.classList.remove("lower-canvas"), e3.classList.add("upper-canvas"), e3.setAttribute("data-fabric", "top"), e3.style.cssText = t2.style.cssText, e3.setAttribute("draggable", "true"), e3;
  }
  createContainerElement() {
    const t2 = d().createElement("div");
    return t2.setAttribute("data-fabric", "wrapper"), an(t2, { position: "relative" }), Zt(t2), t2;
  }
  applyCanvasStyle(t2, e3) {
    const { styles: s2, allowTouchScrolling: i2 } = e3;
    an(t2, { ...s2, "touch-action": i2 ? "manipulation" : E }), Zt(t2);
  }
  setDimensions(t2, e3) {
    super.setDimensions(t2, e3);
    const { el: s2, ctx: i2 } = this.upper;
    Jt(s2, i2, t2, e3);
  }
  setCSSDimensions(t2) {
    super.setCSSDimensions(t2), Qt(this.upper.el, t2), Qt(this.container, t2);
  }
  cleanupDOM(t2) {
    const e3 = this.container, { el: s2 } = this.lower, { el: i2 } = this.upper;
    super.cleanupDOM(t2), e3.removeChild(i2), e3.removeChild(s2), e3.parentNode && e3.parentNode.replaceChild(s2, e3);
  }
  dispose() {
    super.dispose(), u().dispose(this.upper.el), delete this.upper, delete this.container;
  }
};
var ln = (t2, e3, s2, i2) => {
  const { target: r2, offsetX: n2, offsetY: o2 } = e3, a2 = s2 - n2, h2 = i2 - o2, l2 = !Fe(r2, "lockMovementX") && r2.left !== a2, c2 = !Fe(r2, "lockMovementY") && r2.top !== h2;
  return l2 && r2.set(O, a2), c2 && r2.set(k, h2), (l2 || c2) && Gs(A, Le(t2, e3, s2, i2)), l2 || c2;
};
var cn = B;
var un = (t2) => function(e3, s2, i2) {
  const { points: r2, pathOffset: n2 } = i2;
  return new ot(r2[t2]).subtract(n2).transform(Tt(i2.getViewportTransform(), i2.calcTransformMatrix()));
};
var dn = (t2, e3, s2, i2) => {
  const { target: r2, pointIndex: n2 } = e3, o2 = r2, a2 = fe(new ot(s2, i2), void 0, o2.calcOwnMatrix());
  return o2.points[n2] = a2.add(o2.pathOffset), o2.setDimensions(), o2.set("dirty", true), true;
};
var gn = (t2, e3) => function(s2, i2, r2, n2) {
  const o2 = i2.target, a2 = new ot(o2.points[(t2 > 0 ? t2 : o2.points.length) - 1]), h2 = a2.subtract(o2.pathOffset).transform(o2.calcOwnMatrix()), l2 = e3(s2, { ...i2, pointIndex: t2 }, r2, n2), c2 = a2.subtract(o2.pathOffset).transform(o2.calcOwnMatrix()).subtract(h2);
  return o2.left -= c2.x, o2.top -= c2.y, l2;
};
var fn = (t2) => zs(cn, gn(t2, dn));
var pn = (t2, e3, s2) => {
  const { path: i2, pathOffset: r2 } = t2, n2 = i2[e3];
  return new ot(n2[s2] - r2.x, n2[s2 + 1] - r2.y).transform(Tt(t2.getViewportTransform(), t2.calcTransformMatrix()));
};
function mn(t2, e3, s2) {
  const { commandIndex: i2, pointIndex: r2 } = this;
  return pn(s2, i2, r2);
}
function vn(t2, e3, s2, i2) {
  const { target: r2 } = e3, { commandIndex: n2, pointIndex: o2 } = this, a2 = ((t3, e4, s3, i3, r3) => {
    const { path: n3, pathOffset: o3 } = t3, a3 = n3[(i3 > 0 ? i3 : n3.length) - 1], h2 = new ot(a3[r3], a3[r3 + 1]), l2 = h2.subtract(o3).transform(t3.calcOwnMatrix()), c2 = fe(new ot(e4, s3), void 0, t3.calcOwnMatrix());
    n3[i3][r3] = c2.x + o3.x, n3[i3][r3 + 1] = c2.y + o3.y, t3.setDimensions();
    const u2 = h2.subtract(t3.pathOffset).transform(t3.calcOwnMatrix()).subtract(l2);
    return t3.left -= u2.x, t3.top -= u2.y, t3.set("dirty", true), true;
  })(r2, s2, i2, n2, o2);
  return Gs(this.actionName, { ...Le(t2, e3, s2, i2), commandIndex: n2, pointIndex: o2 }), a2;
}
var yn = class extends ti {
  constructor(t2) {
    super(t2);
  }
  render(t2, e3, s2, i2, r2) {
    const n2 = { ...i2, cornerColor: this.controlFill, cornerStrokeColor: this.controlStroke, transparentCorners: !this.controlFill };
    super.render(t2, e3, s2, n2, r2);
  }
};
var _n = class extends yn {
  constructor(t2) {
    super(t2);
  }
  render(t2, e3, s2, i2, r2) {
    const { path: n2 } = r2, { commandIndex: o2, pointIndex: a2, connectToCommandIndex: h2, connectToPointIndex: l2 } = this;
    t2.save(), t2.strokeStyle = this.controlStroke, this.connectionDashArray && t2.setLineDash(this.connectionDashArray);
    const [c2] = n2[o2], u2 = pn(r2, h2, l2);
    if ("Q" === c2) {
      const i3 = pn(r2, o2, a2 + 2);
      t2.moveTo(i3.x, i3.y), t2.lineTo(e3, s2);
    } else t2.moveTo(e3, s2);
    t2.lineTo(u2.x, u2.y), t2.stroke(), t2.restore(), super.render(t2, e3, s2, i2, r2);
  }
};
var xn = (t2, e3, s2, i2, r2, n2) => new (s2 ? _n : yn)({ commandIndex: t2, pointIndex: e3, actionName: "modifyPath", positionHandler: mn, actionHandler: vn, connectToCommandIndex: r2, connectToPointIndex: n2, ...i2, ...s2 ? i2.controlPointStyle : i2.pointStyle });
var Cn = Object.freeze({ __proto__: null, changeHeight: Js, changeObjectHeight: qs, changeObjectWidth: Us, changeWidth: Ks, createObjectDefaultControls: bi, createPathControls: function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const s2 = {};
  let i2 = "M";
  return t2.path.forEach((t3, r2) => {
    const n2 = t3[0];
    switch ("Z" !== n2 && (s2[`c_${r2}_${n2}`] = xn(r2, t3.length - 2, false, e3)), n2) {
      case "C":
        s2[`c_${r2}_C_CP_1`] = xn(r2, 1, true, e3, r2 - 1, /* @__PURE__ */ ((t4) => "C" === t4 ? 5 : "Q" === t4 ? 3 : 1)(i2)), s2[`c_${r2}_C_CP_2`] = xn(r2, 3, true, e3, r2, 5);
        break;
      case "Q":
        s2[`c_${r2}_Q_CP_1`] = xn(r2, 1, true, e3, r2, 3);
    }
    i2 = n2;
  }), s2;
}, createPolyActionHandler: fn, createPolyControls: function(t2) {
  let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const s2 = {};
  for (let i2 = 0; i2 < ("number" == typeof t2 ? t2 : t2.points.length); i2++) s2[`p${i2}`] = new ti({ actionName: cn, positionHandler: un(i2), actionHandler: fn(i2), ...e3 });
  return s2;
}, createPolyPositionHandler: un, createResizeControls: Si, createTextboxDefaultControls: wi, dragHandler: ln, factoryPolyActionHandler: gn, getLocalPoint: Re, polyActionHandler: dn, renderCircleControl: Qs, renderSquareControl: Zs, rotationStyleHandler: ei, rotationWithSnapping: si, scaleCursorStyleHandler: oi, scaleOrSkewActionName: yi, scaleSkewCursorStyleHandler: _i, scalingEqually: hi, scalingX: li, scalingXOrSkewingY: xi, scalingY: ci, scalingYOrSkewingX: Ci, skewCursorStyleHandler: gi, skewHandlerX: pi, skewHandlerY: mi, wrapWithFireEvent: zs, wrapWithFixedAnchor: Hs });
var bn = class _bn extends se {
  constructor() {
    super(...arguments), t(this, "_hoveredTargets", []), t(this, "_currentTransform", null), t(this, "_groupSelector", null), t(this, "contextTopDirty", false);
  }
  static getDefaults() {
    return { ...super.getDefaults(), ..._bn.ownDefaults };
  }
  get upperCanvasEl() {
    var t2;
    return null === (t2 = this.elements.upper) || void 0 === t2 ? void 0 : t2.el;
  }
  get contextTop() {
    var t2;
    return null === (t2 = this.elements.upper) || void 0 === t2 ? void 0 : t2.ctx;
  }
  get wrapperEl() {
    return this.elements.container;
  }
  initElements(t2) {
    this.elements = new hn(t2, { allowTouchScrolling: this.allowTouchScrolling, containerClass: this.containerClass }), this._createCacheCanvas();
  }
  _onObjectAdded(t2) {
    this._objectsToRender = void 0, super._onObjectAdded(t2);
  }
  _onObjectRemoved(t2) {
    this._objectsToRender = void 0, t2 === this._activeObject && (this.fire("before:selection:cleared", { deselected: [t2] }), this._discardActiveObject(), this.fire("selection:cleared", { deselected: [t2] }), t2.fire("deselected", { target: t2 })), t2 === this._hoveredTarget && (this._hoveredTarget = void 0, this._hoveredTargets = []), super._onObjectRemoved(t2);
  }
  _onStackOrderChanged() {
    this._objectsToRender = void 0, super._onStackOrderChanged();
  }
  _chooseObjectsToRender() {
    const t2 = this._activeObject;
    return !this.preserveObjectStacking && t2 ? this._objects.filter((e3) => !e3.group && e3 !== t2).concat(t2) : this._objects;
  }
  renderAll() {
    this.cancelRequestedRender(), this.destroyed || (!this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = false), this.hasLostContext && (this.renderTopLayer(this.contextTop), this.hasLostContext = false), !this._objectsToRender && (this._objectsToRender = this._chooseObjectsToRender()), this.renderCanvas(this.getContext(), this._objectsToRender));
  }
  renderTopLayer(t2) {
    t2.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = true), this.selection && this._groupSelector && (this._drawSelection(t2), this.contextTopDirty = true), t2.restore();
  }
  renderTop() {
    const t2 = this.contextTop;
    this.clearContext(t2), this.renderTopLayer(t2), this.fire("after:render", { ctx: t2 });
  }
  setTargetFindTolerance(t2) {
    t2 = Math.round(t2), this.targetFindTolerance = t2;
    const e3 = this.getRetinaScaling(), s2 = Math.ceil((2 * t2 + 1) * e3);
    this.pixelFindCanvasEl.width = this.pixelFindCanvasEl.height = s2, this.pixelFindContext.scale(e3, e3);
  }
  isTargetTransparent(t2, e3, s2) {
    const i2 = this.targetFindTolerance, r2 = this.pixelFindContext;
    this.clearContext(r2), r2.save(), r2.translate(-e3 + i2, -s2 + i2), r2.transform(...this.viewportTransform);
    const n2 = t2.selectionBackgroundColor;
    t2.selectionBackgroundColor = "", t2.render(r2), t2.selectionBackgroundColor = n2, r2.restore();
    const o2 = Math.round(i2 * this.getRetinaScaling());
    return Di(r2, o2, o2, o2);
  }
  _isSelectionKeyPressed(t2) {
    const e3 = this.selectionKey;
    return !!e3 && (Array.isArray(e3) ? !!e3.find((e4) => !!e4 && true === t2[e4]) : t2[e3]);
  }
  _shouldClearSelection(t2, e3) {
    const s2 = this.getActiveObjects(), i2 = this._activeObject;
    return !!(!e3 || e3 && i2 && s2.length > 1 && -1 === s2.indexOf(e3) && i2 !== e3 && !this._isSelectionKeyPressed(t2) || e3 && !e3.evented || e3 && !e3.selectable && i2 && i2 !== e3);
  }
  _shouldCenterTransform(t2, e3, s2) {
    if (!t2) return;
    let i2;
    return e3 === Y || e3 === W || e3 === V || e3 === R ? i2 = this.centeredScaling || t2.centeredScaling : e3 === L && (i2 = this.centeredRotation || t2.centeredRotation), i2 ? !s2 : s2;
  }
  _getOriginFromCorner(t2, e3) {
    const s2 = { x: t2.originX, y: t2.originY };
    return e3 ? (["ml", "tl", "bl"].includes(e3) ? s2.x = M : ["mr", "tr", "br"].includes(e3) && (s2.x = O), ["tl", "mt", "tr"].includes(e3) ? s2.y = D : ["bl", "mb", "br"].includes(e3) && (s2.y = k), s2) : s2;
  }
  _setupCurrentTransform(t2, e3, s2) {
    var i2;
    const r2 = e3.group ? fe(this.getScenePoint(t2), void 0, e3.group.calcTransformMatrix()) : this.getScenePoint(t2), { key: n2 = "", control: o2 } = e3.getActiveControl() || {}, a2 = s2 && o2 ? null === (i2 = o2.getActionHandler(t2, e3, o2)) || void 0 === i2 ? void 0 : i2.bind(o2) : ln, h2 = ((t3, e4, s3, i3) => {
      if (!e4 || !t3) return "drag";
      const r3 = i3.controls[e4];
      return r3.getActionName(s3, r3, i3);
    })(s2, n2, t2, e3), l2 = t2[this.centeredKey], c2 = this._shouldCenterTransform(e3, h2, l2) ? { x: T, y: T } : this._getOriginFromCorner(e3, n2), { scaleX: u2, scaleY: d2, skewX: g2, skewY: f2, left: p2, top: m2, angle: v2, width: y2, height: _2, cropX: x2, cropY: C2 } = e3, b2 = { target: e3, action: h2, actionHandler: a2, actionPerformed: false, corner: n2, scaleX: u2, scaleY: d2, skewX: g2, skewY: f2, offsetX: r2.x - p2, offsetY: r2.y - m2, originX: c2.x, originY: c2.y, ex: r2.x, ey: r2.y, lastX: r2.x, lastY: r2.y, theta: xt(v2), width: y2, height: _2, shiftKey: t2.shiftKey, altKey: l2, original: { ...ue(e3), originX: c2.x, originY: c2.y, cropX: x2, cropY: C2 } };
    this._currentTransform = b2, this.fire("before:transform", { e: t2, transform: b2 });
  }
  setCursor(t2) {
    this.upperCanvasEl.style.cursor = t2;
  }
  _drawSelection(t2) {
    const { x: e3, y: s2, deltaX: i2, deltaY: r2 } = this._groupSelector, n2 = new ot(e3, s2).transform(this.viewportTransform), o2 = new ot(e3 + i2, s2 + r2).transform(this.viewportTransform), a2 = this.selectionLineWidth / 2;
    let h2 = Math.min(n2.x, o2.x), l2 = Math.min(n2.y, o2.y), c2 = Math.max(n2.x, o2.x), u2 = Math.max(n2.y, o2.y);
    this.selectionColor && (t2.fillStyle = this.selectionColor, t2.fillRect(h2, l2, c2 - h2, u2 - l2)), this.selectionLineWidth && this.selectionBorderColor && (t2.lineWidth = this.selectionLineWidth, t2.strokeStyle = this.selectionBorderColor, h2 += a2, l2 += a2, c2 -= a2, u2 -= a2, ki.prototype._setLineDash.call(this, t2, this.selectionDashArray), t2.strokeRect(h2, l2, c2 - h2, u2 - l2));
  }
  findTarget(t2) {
    if (this._targetInfo) return this._targetInfo;
    if (this.skipTargetFind) return { subTargets: [], currentSubTargets: [] };
    const e3 = this.getScenePoint(t2), s2 = this._activeObject, i2 = this.getActiveObjects(), r2 = this.searchPossibleTargets(this._objects, e3), { subTargets: n2, container: o2, target: a2 } = r2, h2 = { ...r2, currentSubTargets: n2, currentContainer: o2, currentTarget: a2 };
    if (!s2) return h2;
    const l2 = { ...this.searchPossibleTargets([s2], e3), currentSubTargets: n2, currentContainer: o2, currentTarget: a2 };
    if (s2.findControl(this.getViewportPoint(t2), ne(t2))) return { ...l2, target: s2 };
    if (l2.target) {
      if (i2.length > 1) return l2;
      if (!this.preserveObjectStacking) return l2;
      if (this.preserveObjectStacking && t2[this.altSelectionKey]) return l2;
    }
    return h2;
  }
  _pointIsInObjectSelectionArea(t2, e3) {
    let s2 = t2.getCoords();
    const i2 = this.getZoom(), r2 = t2.padding / i2;
    if (r2) {
      const [t3, e4, i3, n2] = s2, o2 = Math.atan2(e4.y - t3.y, e4.x - t3.x), a2 = rt(o2) * r2, h2 = nt(o2) * r2, l2 = a2 + h2, c2 = a2 - h2;
      s2 = [new ot(t3.x - c2, t3.y - l2), new ot(e4.x + l2, e4.y - c2), new ot(i3.x + c2, i3.y + l2), new ot(n2.x - l2, n2.y + c2)];
    }
    return Ys.isPointInPolygon(e3, s2);
  }
  _checkTarget(t2, e3) {
    if (t2 && t2.visible && t2.evented && this._pointIsInObjectSelectionArea(t2, e3)) {
      if (!this.perPixelTargetFind && !t2.perPixelTargetFind || t2.isEditing) return true;
      {
        const s2 = e3.transform(this.viewportTransform);
        if (!this.isTargetTransparent(t2, s2.x, s2.y)) return true;
      }
    }
    return false;
  }
  _searchPossibleTargets(t2, e3, s2) {
    let i2 = t2.length;
    for (; i2--; ) {
      const r2 = t2[i2];
      if (this._checkTarget(r2, e3)) {
        if (ht(r2) && r2.subTargetCheck) {
          const { target: t3 } = this._searchPossibleTargets(r2._objects, e3, s2);
          t3 && s2.push(t3);
        }
        return { target: r2, subTargets: s2 };
      }
    }
    return { subTargets: [] };
  }
  searchPossibleTargets(t2, e3) {
    const s2 = this._searchPossibleTargets(t2, e3, []);
    s2.container = s2.target;
    const { container: i2, subTargets: r2 } = s2;
    if (i2 && ht(i2) && i2.interactive && r2[0]) {
      for (let t3 = r2.length - 1; t3 > 0; t3--) {
        const e4 = r2[t3];
        if (!ht(e4) || !e4.interactive) return s2.target = e4, s2;
      }
      return s2.target = r2[0], s2;
    }
    return s2;
  }
  getViewportPoint(t2) {
    return this._viewportPoint ? this._viewportPoint : this._getPointerImpl(t2, true);
  }
  getScenePoint(t2) {
    return this._scenePoint ? this._scenePoint : this._getPointerImpl(t2);
  }
  _getPointerImpl(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s2 = this.upperCanvasEl, i2 = s2.getBoundingClientRect();
    let r2 = re(t2), n2 = i2.width || 0, o2 = i2.height || 0;
    n2 && o2 || (k in i2 && D in i2 && (o2 = Math.abs(i2.top - i2.bottom)), M in i2 && O in i2 && (n2 = Math.abs(i2.right - i2.left))), this.calcOffset(), r2.x = r2.x - this._offset.left, r2.y = r2.y - this._offset.top, e3 || (r2 = fe(r2, void 0, this.viewportTransform));
    const a2 = this.getRetinaScaling();
    1 !== a2 && (r2.x /= a2, r2.y /= a2);
    const h2 = 0 === n2 || 0 === o2 ? new ot(1, 1) : new ot(s2.width / n2, s2.height / o2);
    return r2.multiply(h2);
  }
  _setDimensionsImpl(t2, e3) {
    this._resetTransformEventData(), super._setDimensionsImpl(t2, e3), this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(this.contextTop);
  }
  _createCacheCanvas() {
    this.pixelFindCanvasEl = pt(), this.pixelFindContext = this.pixelFindCanvasEl.getContext("2d", { willReadFrequently: true }), this.setTargetFindTolerance(this.targetFindTolerance);
  }
  getTopContext() {
    return this.elements.upper.ctx;
  }
  getSelectionContext() {
    return this.elements.upper.ctx;
  }
  getSelectionElement() {
    return this.elements.upper.el;
  }
  getActiveObject() {
    return this._activeObject;
  }
  getActiveObjects() {
    const t2 = this._activeObject;
    return Nt(t2) ? t2.getObjects() : t2 ? [t2] : [];
  }
  _fireSelectionEvents(t2, e3) {
    let s2 = false, i2 = false;
    const r2 = this.getActiveObjects(), n2 = [], o2 = [];
    t2.forEach((t3) => {
      r2.includes(t3) || (s2 = true, t3.fire("deselected", { e: e3, target: t3 }), o2.push(t3));
    }), r2.forEach((i3) => {
      t2.includes(i3) || (s2 = true, i3.fire("selected", { e: e3, target: i3 }), n2.push(i3));
    }), t2.length > 0 && r2.length > 0 ? (i2 = true, s2 && this.fire("selection:updated", { e: e3, selected: n2, deselected: o2 })) : r2.length > 0 ? (i2 = true, this.fire("selection:created", { e: e3, selected: n2 })) : t2.length > 0 && (i2 = true, this.fire("selection:cleared", { e: e3, deselected: o2 })), i2 && (this._objectsToRender = void 0);
  }
  setActiveObject(t2, e3) {
    const s2 = this.getActiveObjects(), i2 = this._setActiveObject(t2, e3);
    return this._fireSelectionEvents(s2, e3), i2;
  }
  _setActiveObject(t2, e3) {
    const s2 = this._activeObject;
    return s2 !== t2 && (!(!this._discardActiveObject(e3, t2) && this._activeObject) && (!t2.onSelect({ e: e3 }) && (this._activeObject = t2, Nt(t2) && s2 !== t2 && t2.set("canvas", this), t2.setCoords(), true)));
  }
  _discardActiveObject(t2, e3) {
    const s2 = this._activeObject;
    return !!s2 && (!s2.onDeselect({ e: t2, object: e3 }) && (this._currentTransform && this._currentTransform.target === s2 && this.endCurrentTransform(t2), Nt(s2) && s2 === this._hoveredTarget && (this._hoveredTarget = void 0), this._activeObject = void 0, true));
  }
  discardActiveObject(t2) {
    const e3 = this.getActiveObjects(), s2 = this.getActiveObject();
    e3.length && this.fire("before:selection:cleared", { e: t2, deselected: [s2] });
    const i2 = this._discardActiveObject(t2);
    return this._fireSelectionEvents(e3, t2), i2;
  }
  endCurrentTransform(t2) {
    const e3 = this._currentTransform;
    this._finalizeCurrentTransform(t2), e3 && e3.target && (e3.target.isMoving = false), this._currentTransform = null;
  }
  _finalizeCurrentTransform(t2) {
    const e3 = this._currentTransform, s2 = e3.target, i2 = { e: t2, target: s2, transform: e3, action: e3.action };
    s2._scaling && (s2._scaling = false), s2.setCoords(), e3.actionPerformed && (this.fire("object:modified", i2), s2.fire(U, i2));
  }
  setViewportTransform(t2) {
    super.setViewportTransform(t2);
    const e3 = this._activeObject;
    e3 && e3.setCoords();
  }
  destroy() {
    const t2 = this._activeObject;
    Nt(t2) && (t2.removeAll(), t2.dispose()), delete this._activeObject, super.destroy(), this.pixelFindContext = null, this.pixelFindCanvasEl = void 0;
  }
  clear() {
    this.discardActiveObject(), this._activeObject = void 0, this.clearContext(this.contextTop), super.clear();
  }
  drawControls(t2) {
    const e3 = this._activeObject;
    e3 && e3._renderControls(t2);
  }
  _toObject(t2, e3, s2) {
    const i2 = this._realizeGroupTransformOnObject(t2), r2 = super._toObject(t2, e3, s2);
    return t2.set(i2), r2;
  }
  _realizeGroupTransformOnObject(t2) {
    const { group: e3 } = t2;
    if (e3 && Nt(e3) && this._activeObject === e3) {
      const s2 = Xt(t2, ["angle", "flipX", "flipY", O, W, V, G, z, k]);
      return he(t2, e3.calcOwnMatrix()), s2;
    }
    return {};
  }
  _setSVGObject(t2, e3, s2) {
    const i2 = this._realizeGroupTransformOnObject(e3);
    super._setSVGObject(t2, e3, s2), e3.set(i2);
  }
};
t(bn, "ownDefaults", { uniformScaling: true, uniScaleKey: "shiftKey", centeredScaling: false, centeredRotation: false, centeredKey: "altKey", altActionKey: "shiftKey", selection: true, selectionKey: "shiftKey", selectionColor: "rgba(100, 100, 255, 0.3)", selectionDashArray: [], selectionBorderColor: "rgba(255, 255, 255, 0.3)", selectionLineWidth: 1, selectionFullyContained: false, hoverCursor: "move", moveCursor: "move", defaultCursor: "default", freeDrawingCursor: "crosshair", notAllowedCursor: "not-allowed", perPixelTargetFind: false, targetFindTolerance: 0, skipTargetFind: false, stopContextMenu: true, fireRightClick: true, fireMiddleClick: true, enablePointerEvents: false, containerClass: "canvas-container", preserveObjectStacking: true });
var Sn = class {
  constructor(e3) {
    t(this, "targets", []), t(this, "__disposer", void 0);
    const s2 = () => {
      const { hiddenTextarea: t2 } = e3.getActiveObject() || {};
      t2 && t2.focus();
    }, i2 = e3.upperCanvasEl;
    i2.addEventListener("click", s2), this.__disposer = () => i2.removeEventListener("click", s2);
  }
  exitTextEditing() {
    this.target = void 0, this.targets.forEach((t2) => {
      t2.isEditing && t2.exitEditing();
    });
  }
  add(t2) {
    this.targets.push(t2);
  }
  remove(t2) {
    this.unregister(t2), it(this.targets, t2);
  }
  register(t2) {
    this.target = t2;
  }
  unregister(t2) {
    t2 === this.target && (this.target = void 0);
  }
  onMouseMove(t2) {
    var e3;
    (null === (e3 = this.target) || void 0 === e3 ? void 0 : e3.isEditing) && this.target.updateSelectionOnMouseMove(t2);
  }
  clear() {
    this.targets = [], this.target = void 0;
  }
  dispose() {
    this.clear(), this.__disposer(), delete this.__disposer;
  }
};
var wn = { passive: false };
var Tn = (t2, e3) => ({ viewportPoint: t2.getViewportPoint(e3), scenePoint: t2.getScenePoint(e3) });
var On = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return t2.addEventListener(...s2);
};
var kn = function(t2) {
  for (var e3 = arguments.length, s2 = new Array(e3 > 1 ? e3 - 1 : 0), i2 = 1; i2 < e3; i2++) s2[i2 - 1] = arguments[i2];
  return t2.removeEventListener(...s2);
};
var Dn = { mouse: { in: "over", out: "out", targetIn: "mouseover", targetOut: "mouseout", canvasIn: "mouse:over", canvasOut: "mouse:out" }, drag: { in: "enter", out: "leave", targetIn: "dragenter", targetOut: "dragleave", canvasIn: "drag:enter", canvasOut: "drag:leave" } };
var Mn = class extends bn {
  constructor(e3) {
    super(e3, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), t(this, "_isClick", void 0), t(this, "textEditingManager", new Sn(this)), ["_onMouseDown", "_onTouchStart", "_onMouseMove", "_onMouseUp", "_onTouchEnd", "_onResize", "_onMouseWheel", "_onMouseOut", "_onMouseEnter", "_onContextMenu", "_onClick", "_onDragStart", "_onDragEnd", "_onDragProgress", "_onDragOver", "_onDragEnter", "_onDragLeave", "_onDrop"].forEach((t2) => {
      this[t2] = this[t2].bind(this);
    }), this.addOrRemove(On);
  }
  _getEventPrefix() {
    return this.enablePointerEvents ? "pointer" : "mouse";
  }
  addOrRemove(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const s2 = this.upperCanvasEl, i2 = this._getEventPrefix();
    t2(Kt(s2), "resize", this._onResize), t2(s2, i2 + "down", this._onMouseDown), t2(s2, `${i2}move`, this._onMouseMove, wn), t2(s2, `${i2}out`, this._onMouseOut), t2(s2, `${i2}enter`, this._onMouseEnter), t2(s2, "wheel", this._onMouseWheel, { passive: false }), t2(s2, "contextmenu", this._onContextMenu), e3 || (t2(s2, "click", this._onClick), t2(s2, "dblclick", this._onClick)), t2(s2, "dragstart", this._onDragStart), t2(s2, "dragend", this._onDragEnd), t2(s2, "dragover", this._onDragOver), t2(s2, "dragenter", this._onDragEnter), t2(s2, "dragleave", this._onDragLeave), t2(s2, "drop", this._onDrop), this.enablePointerEvents || t2(s2, "touchstart", this._onTouchStart, wn);
  }
  removeListeners() {
    this.addOrRemove(kn);
    const t2 = this._getEventPrefix(), e3 = qt(this.upperCanvasEl);
    kn(e3, `${t2}up`, this._onMouseUp), kn(e3, "touchend", this._onTouchEnd, wn), kn(e3, `${t2}move`, this._onMouseMove, wn), kn(e3, "touchmove", this._onMouseMove, wn), clearTimeout(this._willAddMouseDown);
  }
  _onMouseWheel(t2) {
    this._cacheTransformEventData(t2), this._handleEvent(t2, "wheel"), this._resetTransformEventData();
  }
  _onMouseOut(t2) {
    const e3 = this._hoveredTarget, s2 = { e: t2, ...Tn(this, t2) };
    this.fire("mouse:out", { ...s2, target: e3 }), this._hoveredTarget = void 0, e3 && e3.fire("mouseout", { ...s2 }), this._hoveredTargets.forEach((t3) => {
      this.fire("mouse:out", { ...s2, target: t3 }), t3 && t3.fire("mouseout", { ...s2 });
    }), this._hoveredTargets = [];
  }
  _onMouseEnter(t2) {
    const { target: e3 } = this.findTarget(t2);
    this._currentTransform || e3 || (this.fire("mouse:over", { e: t2, ...Tn(this, t2) }), this._hoveredTarget = void 0, this._hoveredTargets = []);
  }
  _onDragStart(t2) {
    this._isClick = false;
    const e3 = this.getActiveObject();
    if (e3 && e3.onDragStart(t2)) {
      this._dragSource = e3;
      const s2 = { e: t2, target: e3 };
      return this.fire("dragstart", s2), e3.fire("dragstart", s2), void On(this.upperCanvasEl, "drag", this._onDragProgress);
    }
    oe(t2);
  }
  _renderDragEffects(t2, e3, s2) {
    let i2 = false;
    const r2 = this._dropTarget;
    r2 && r2 !== e3 && r2 !== s2 && (r2.clearContextTop(), i2 = true), null == e3 || e3.clearContextTop(), s2 !== e3 && (null == s2 || s2.clearContextTop());
    const n2 = this.contextTop;
    n2.save(), n2.transform(...this.viewportTransform), e3 && (n2.save(), e3.transform(n2), e3.renderDragSourceEffect(t2), n2.restore(), i2 = true), s2 && (n2.save(), s2.transform(n2), s2.renderDropTargetEffect(t2), n2.restore(), i2 = true), n2.restore(), i2 && (this.contextTopDirty = true);
  }
  _onDragEnd(t2) {
    const { currentSubTargets: e3 } = this.findTarget(t2), s2 = !!t2.dataTransfer && t2.dataTransfer.dropEffect !== E, i2 = s2 ? this._activeObject : void 0, r2 = { e: t2, target: this._dragSource, subTargets: e3, dragSource: this._dragSource, didDrop: s2, dropTarget: i2 };
    kn(this.upperCanvasEl, "drag", this._onDragProgress), this.fire("dragend", r2), this._dragSource && this._dragSource.fire("dragend", r2), delete this._dragSource, this._onMouseUp(t2);
  }
  _onDragProgress(t2) {
    const e3 = { e: t2, target: this._dragSource, dragSource: this._dragSource, dropTarget: this._draggedoverTarget };
    this.fire("drag", e3), this._dragSource && this._dragSource.fire("drag", e3);
  }
  _onDragOver(t2) {
    const e3 = "dragover", { currentContainer: s2, currentSubTargets: i2 } = this.findTarget(t2), r2 = this._dragSource, n2 = { e: t2, target: s2, subTargets: i2, dragSource: r2, canDrop: false, dropTarget: void 0 };
    let o2;
    this.fire(e3, n2), this._fireEnterLeaveEvents(t2, s2, n2), s2 && (s2.canDrop(t2) && (o2 = s2), s2.fire(e3, n2));
    for (let s3 = 0; s3 < i2.length; s3++) {
      const r3 = i2[s3];
      r3.canDrop(t2) && (o2 = r3), r3.fire(e3, n2);
    }
    this._renderDragEffects(t2, r2, o2), this._dropTarget = o2;
  }
  _onDragEnter(t2) {
    const { currentContainer: e3, currentSubTargets: s2 } = this.findTarget(t2), i2 = { e: t2, target: e3, subTargets: s2, dragSource: this._dragSource };
    this.fire("dragenter", i2), this._fireEnterLeaveEvents(t2, e3, i2);
  }
  _onDragLeave(t2) {
    const { currentSubTargets: e3 } = this.findTarget(t2), s2 = { e: t2, target: this._draggedoverTarget, subTargets: e3, dragSource: this._dragSource };
    this.fire("dragleave", s2), this._fireEnterLeaveEvents(t2, void 0, s2), this._renderDragEffects(t2, this._dragSource), this._dropTarget = void 0, this._hoveredTargets = [];
  }
  _onDrop(t2) {
    const { currentContainer: e3, currentSubTargets: s2 } = this.findTarget(t2), i2 = this._basicEventHandler("drop:before", { e: t2, target: e3, subTargets: s2, dragSource: this._dragSource, ...Tn(this, t2) });
    i2.didDrop = false, i2.dropTarget = void 0, this._basicEventHandler("drop", i2), this.fire("drop:after", i2);
  }
  _onContextMenu(t2) {
    const { target: e3, subTargets: s2 } = this.findTarget(t2), i2 = this._basicEventHandler("contextmenu:before", { e: t2, target: e3, subTargets: s2 });
    return this.stopContextMenu && oe(t2), this._basicEventHandler("contextmenu", i2), false;
  }
  _onClick(t2) {
    const e3 = t2.detail;
    e3 > 3 || e3 < 2 || (this._cacheTransformEventData(t2), 2 == e3 && "dblclick" === t2.type && this._handleEvent(t2, "dblclick"), 3 == e3 && this._handleEvent(t2, "tripleclick"), this._resetTransformEventData());
  }
  fireEventFromPointerEvent(t2, e3, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    this._cacheTransformEventData(t2);
    const { target: r2, subTargets: n2 } = this.findTarget(t2), o2 = { e: t2, target: r2, subTargets: n2, ...Tn(this, t2), transform: this._currentTransform, ...i2 };
    this.fire(e3, o2), r2 && r2.fire(s2, o2);
    for (let t3 = 0; t3 < n2.length; t3++) n2[t3] !== r2 && n2[t3].fire(s2, o2);
    this._resetTransformEventData();
  }
  getPointerId(t2) {
    const e3 = t2.changedTouches;
    return e3 ? e3[0] && e3[0].identifier : this.enablePointerEvents ? t2.pointerId : -1;
  }
  _isMainEvent(t2) {
    return true === t2.isPrimary || false !== t2.isPrimary && ("touchend" === t2.type && 0 === t2.touches.length || (!t2.changedTouches || t2.changedTouches[0].identifier === this.mainTouchId));
  }
  _onTouchStart(t2) {
    this._cacheTransformEventData(t2);
    let e3 = !this.allowTouchScrolling;
    const s2 = this._activeObject;
    void 0 === this.mainTouchId && (this.mainTouchId = this.getPointerId(t2)), this.__onMouseDown(t2);
    const { target: i2 } = this.findTarget(t2);
    (this.isDrawingMode || s2 && i2 === s2) && (e3 = true), e3 && t2.preventDefault();
    const r2 = this.upperCanvasEl, n2 = this._getEventPrefix(), o2 = qt(r2);
    On(o2, "touchend", this._onTouchEnd, wn), e3 && On(o2, "touchmove", this._onMouseMove, wn), kn(r2, `${n2}down`, this._onMouseDown), this._resetTransformEventData();
  }
  _onMouseDown(t2) {
    this._cacheTransformEventData(t2), this.__onMouseDown(t2);
    const e3 = this.upperCanvasEl, s2 = this._getEventPrefix();
    kn(e3, `${s2}move`, this._onMouseMove, wn);
    const i2 = qt(e3);
    On(i2, `${s2}up`, this._onMouseUp), On(i2, `${s2}move`, this._onMouseMove, wn), this._resetTransformEventData();
  }
  _onTouchEnd(t2) {
    if (t2.touches.length > 0) return;
    this._cacheTransformEventData(t2), this.__onMouseUp(t2), this._resetTransformEventData(), delete this.mainTouchId;
    const e3 = this._getEventPrefix(), s2 = qt(this.upperCanvasEl);
    kn(s2, "touchend", this._onTouchEnd, wn), kn(s2, "touchmove", this._onMouseMove, wn), this._willAddMouseDown && clearTimeout(this._willAddMouseDown), this._willAddMouseDown = setTimeout(() => {
      On(this.upperCanvasEl, `${e3}down`, this._onMouseDown), this._willAddMouseDown = 0;
    }, 400);
  }
  _onMouseUp(t2) {
    this._cacheTransformEventData(t2), this.__onMouseUp(t2);
    const e3 = this.upperCanvasEl, s2 = this._getEventPrefix();
    if (this._isMainEvent(t2)) {
      const t3 = qt(this.upperCanvasEl);
      kn(t3, `${s2}up`, this._onMouseUp), kn(t3, `${s2}move`, this._onMouseMove, wn), On(e3, `${s2}move`, this._onMouseMove, wn);
    }
    this._resetTransformEventData();
  }
  _onMouseMove(t2) {
    this._cacheTransformEventData(t2);
    const e3 = this.getActiveObject();
    !this.allowTouchScrolling && (!e3 || !e3.shouldStartDragging(t2)) && t2.preventDefault && t2.preventDefault(), this.__onMouseMove(t2), this._resetTransformEventData();
  }
  _onResize() {
    this.calcOffset(), this._resetTransformEventData();
  }
  _shouldRender(t2) {
    const e3 = this.getActiveObject();
    return !!e3 != !!t2 || e3 && t2 && e3 !== t2;
  }
  __onMouseUp(t2) {
    var e3;
    this._handleEvent(t2, "up:before");
    const s2 = this._currentTransform, i2 = this._isClick, { target: r2 } = this.findTarget(t2), { button: n2 } = t2;
    if (n2) return void ((this.fireMiddleClick && 1 === n2 || this.fireRightClick && 2 === n2) && this._handleEvent(t2, "up"));
    if (this.isDrawingMode && this._isCurrentlyDrawing) return void this._onMouseUpInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    let o2, a2, h2 = false;
    if (s2 && (this._finalizeCurrentTransform(t2), h2 = s2.actionPerformed), !i2) {
      const e4 = r2 === this._activeObject;
      this.handleSelection(t2), h2 || (h2 = this._shouldRender(r2) || !e4 && r2 === this._activeObject);
    }
    if (r2) {
      const e4 = r2.findControl(this.getViewportPoint(t2), ne(t2)), { key: i3, control: n3 } = e4 || {};
      if (a2 = i3, r2.selectable && r2 !== this._activeObject && "up" === r2.activeOn) this.setActiveObject(r2, t2), h2 = true;
      else if (n3) {
        const e5 = n3.getMouseUpHandler(t2, r2, n3);
        e5 && (o2 = this.getScenePoint(t2), e5.call(n3, t2, s2, o2.x, o2.y));
      }
      r2.isMoving = false;
    }
    if (s2 && (s2.target !== r2 || s2.corner !== a2)) {
      const e4 = s2.target && s2.target.controls[s2.corner], i3 = e4 && e4.getMouseUpHandler(t2, s2.target, e4);
      o2 = o2 || this.getScenePoint(t2), i3 && i3.call(e4, t2, s2, o2.x, o2.y);
    }
    this._setCursorFromEvent(t2, r2), this._handleEvent(t2, "up"), this._groupSelector = null, this._currentTransform = null, r2 && (r2.__corner = void 0), h2 ? this.requestRenderAll() : i2 || null !== (e3 = this._activeObject) && void 0 !== e3 && e3.isEditing || this.renderTop();
  }
  _basicEventHandler(t2, e3) {
    const { target: s2, subTargets: i2 = [] } = e3;
    this.fire(t2, e3), s2 && s2.fire(t2, e3);
    for (let r2 = 0; r2 < i2.length; r2++) i2[r2] !== s2 && i2[r2].fire(t2, e3);
    return e3;
  }
  _handleEvent(t2, e3, s2) {
    const { target: i2, subTargets: r2 } = this.findTarget(t2), n2 = { e: t2, target: i2, subTargets: r2, ...Tn(this, t2), transform: this._currentTransform, ..."down:before" === e3 || "down" === e3 ? s2 : {} };
    "up:before" !== e3 && "up" !== e3 || (n2.isClick = this._isClick), this.fire(`mouse:${e3}`, n2), i2 && i2.fire(`mouse${e3}`, n2);
    for (let t3 = 0; t3 < r2.length; t3++) r2[t3] !== i2 && r2[t3].fire(`mouse${e3}`, n2);
  }
  _onMouseDownInDrawingMode(t2) {
    this._isCurrentlyDrawing = true, this.getActiveObject() && (this.discardActiveObject(t2), this.requestRenderAll());
    const e3 = this.getScenePoint(t2);
    this.freeDrawingBrush && this.freeDrawingBrush.onMouseDown(e3, { e: t2, pointer: e3 }), this._handleEvent(t2, "down", { alreadySelected: false });
  }
  _onMouseMoveInDrawingMode(t2) {
    if (this._isCurrentlyDrawing) {
      const e3 = this.getScenePoint(t2);
      this.freeDrawingBrush && this.freeDrawingBrush.onMouseMove(e3, { e: t2, pointer: e3 });
    }
    this.setCursor(this.freeDrawingCursor), this._handleEvent(t2, "move");
  }
  _onMouseUpInDrawingMode(t2) {
    const e3 = this.getScenePoint(t2);
    this.freeDrawingBrush ? this._isCurrentlyDrawing = !!this.freeDrawingBrush.onMouseUp({ e: t2, pointer: e3 }) : this._isCurrentlyDrawing = false, this._handleEvent(t2, "up");
  }
  __onMouseDown(t2) {
    this._isClick = true, this._handleEvent(t2, "down:before");
    let { target: e3 } = this.findTarget(t2), s2 = !!e3 && e3 === this._activeObject;
    const { button: i2 } = t2;
    if (i2) return void ((this.fireMiddleClick && 1 === i2 || this.fireRightClick && 2 === i2) && this._handleEvent(t2, "down", { alreadySelected: s2 }));
    if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    if (this._currentTransform) return;
    let r2 = this._shouldRender(e3), n2 = false;
    if (this.handleMultiSelection(t2, e3) ? (e3 = this._activeObject, n2 = true, r2 = true) : this._shouldClearSelection(t2, e3) && this.discardActiveObject(t2), this.selection && (!e3 || !e3.selectable && !e3.isEditing && e3 !== this._activeObject)) {
      const e4 = this.getScenePoint(t2);
      this._groupSelector = { x: e4.x, y: e4.y, deltaY: 0, deltaX: 0 };
    }
    if (s2 = !!e3 && e3 === this._activeObject, e3) {
      e3.selectable && "down" === e3.activeOn && this.setActiveObject(e3, t2);
      const i3 = e3.findControl(this.getViewportPoint(t2), ne(t2));
      if (e3 === this._activeObject && (i3 || !n2)) {
        this._setupCurrentTransform(t2, e3, s2);
        const r3 = i3 ? i3.control : void 0, n3 = this.getScenePoint(t2), o2 = r3 && r3.getMouseDownHandler(t2, e3, r3);
        o2 && o2.call(r3, t2, this._currentTransform, n3.x, n3.y);
      }
    }
    r2 && (this._objectsToRender = void 0), this._handleEvent(t2, "down", { alreadySelected: s2 }), r2 && this.requestRenderAll();
  }
  _resetTransformEventData() {
    this._targetInfo = this._viewportPoint = this._scenePoint = void 0;
  }
  _cacheTransformEventData(t2) {
    this._resetTransformEventData(), this._viewportPoint = this.getViewportPoint(t2), this._scenePoint = fe(this._viewportPoint, void 0, this.viewportTransform), this._targetInfo = this.findTarget(t2), this._currentTransform && (this._targetInfo.target = this._currentTransform.target);
  }
  __onMouseMove(t2) {
    if (this._isClick = false, this._handleEvent(t2, "move:before"), this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t2);
    if (!this._isMainEvent(t2)) return;
    const e3 = this._groupSelector;
    if (e3) {
      const s2 = this.getScenePoint(t2);
      e3.deltaX = s2.x - e3.x, e3.deltaY = s2.y - e3.y, this.renderTop();
    } else if (this._currentTransform) this._transformObject(t2);
    else {
      const { target: e4 } = this.findTarget(t2);
      this._setCursorFromEvent(t2, e4), this._fireOverOutEvents(t2, e4);
    }
    this.textEditingManager.onMouseMove(t2), this._handleEvent(t2, "move");
  }
  _fireOverOutEvents(t2, e3) {
    const { _hoveredTarget: s2, _hoveredTargets: i2 } = this, { subTargets: r2 } = this.findTarget(t2), n2 = Math.max(i2.length, r2.length);
    this.fireSyntheticInOutEvents("mouse", { e: t2, target: e3, oldTarget: s2, fireCanvas: true });
    for (let o2 = 0; o2 < n2; o2++) r2[o2] === e3 || i2[o2] && i2[o2] === s2 || this.fireSyntheticInOutEvents("mouse", { e: t2, target: r2[o2], oldTarget: i2[o2] });
    this._hoveredTarget = e3, this._hoveredTargets = r2;
  }
  _fireEnterLeaveEvents(t2, e3, s2) {
    const i2 = this._draggedoverTarget, r2 = this._hoveredTargets, { subTargets: n2 } = this.findTarget(t2), o2 = Math.max(r2.length, n2.length);
    this.fireSyntheticInOutEvents("drag", { ...s2, target: e3, oldTarget: i2, fireCanvas: true });
    for (let t3 = 0; t3 < o2; t3++) this.fireSyntheticInOutEvents("drag", { ...s2, target: n2[t3], oldTarget: r2[t3] });
    this._draggedoverTarget = e3;
  }
  fireSyntheticInOutEvents(t2, e3) {
    let { target: s2, oldTarget: i2, fireCanvas: r2, e: n2, ...o2 } = e3;
    const { targetIn: a2, targetOut: h2, canvasIn: l2, canvasOut: c2 } = Dn[t2], u2 = i2 !== s2;
    if (i2 && u2) {
      const t3 = { ...o2, e: n2, target: i2, nextTarget: s2, ...Tn(this, n2) };
      r2 && this.fire(c2, t3), i2.fire(h2, t3);
    }
    if (s2 && u2) {
      const t3 = { ...o2, e: n2, target: s2, previousTarget: i2, ...Tn(this, n2) };
      r2 && this.fire(l2, t3), s2.fire(a2, t3);
    }
  }
  _transformObject(t2) {
    const e3 = this.getScenePoint(t2), s2 = this._currentTransform, i2 = s2.target, r2 = i2.group ? fe(e3, void 0, i2.group.calcTransformMatrix()) : e3;
    s2.shiftKey = t2.shiftKey, s2.altKey = !!this.centeredKey && t2[this.centeredKey], this._performTransformAction(t2, s2, r2), s2.actionPerformed && this.requestRenderAll();
  }
  _performTransformAction(t2, e3, s2) {
    const { action: i2, actionHandler: r2, target: n2 } = e3, o2 = !!r2 && r2(t2, e3, s2.x, s2.y);
    o2 && n2.setCoords(), "drag" === i2 && o2 && (e3.target.isMoving = true, this.setCursor(e3.target.moveCursor || this.moveCursor)), e3.actionPerformed = e3.actionPerformed || o2;
  }
  _setCursorFromEvent(t2, e3) {
    if (!e3) return void this.setCursor(this.defaultCursor);
    let s2 = e3.hoverCursor || this.hoverCursor;
    const i2 = Nt(this._activeObject) ? this._activeObject : null, r2 = (!i2 || e3.group !== i2) && e3.findControl(this.getViewportPoint(t2));
    if (r2) {
      const { control: s3, coord: i3 } = r2;
      this.setCursor(s3.cursorStyleHandler(t2, s3, e3, i3));
    } else {
      if (e3.subTargetCheck) {
        const { subTargets: e4 } = this.findTarget(t2);
        e4.concat().reverse().forEach((t3) => {
          s2 = t3.hoverCursor || s2;
        });
      }
      this.setCursor(s2);
    }
  }
  handleMultiSelection(t2, e3) {
    const s2 = this._activeObject, i2 = Nt(s2);
    if (s2 && this._isSelectionKeyPressed(t2) && this.selection && e3 && e3.selectable && (s2 !== e3 || i2) && (i2 || !e3.isDescendantOf(s2) && !s2.isDescendantOf(e3)) && !e3.onSelect({ e: t2 }) && !s2.getActiveControl()) {
      if (i2) {
        const i3 = s2.getObjects();
        let r2 = [];
        if (e3 === s2) {
          const s3 = this.getScenePoint(t2);
          let n2 = this.searchPossibleTargets(i3, s3);
          if (n2.target ? (e3 = n2.target, r2 = n2.subTargets) : (n2 = this.searchPossibleTargets(this._objects, s3), e3 = n2.target, r2 = n2.subTargets), !e3 || !e3.selectable) return false;
        }
        e3.group === s2 ? (s2.remove(e3), this._hoveredTarget = e3, this._hoveredTargets = r2, 1 === s2.size() && this._setActiveObject(s2.item(0), t2)) : (s2.multiSelectAdd(e3), this._hoveredTarget = s2, this._hoveredTargets = r2), this._fireSelectionEvents(i3, t2);
      } else {
        s2.isEditing && s2.exitEditing();
        const i3 = new (tt.getClass("ActiveSelection"))([], { canvas: this });
        i3.multiSelectAdd(s2, e3), this._hoveredTarget = i3, this._setActiveObject(i3, t2), this._fireSelectionEvents([s2], t2);
      }
      return true;
    }
    return false;
  }
  handleSelection(t2) {
    if (!this.selection || !this._groupSelector) return false;
    const { x: e3, y: s2, deltaX: i2, deltaY: r2 } = this._groupSelector, n2 = new ot(e3, s2), o2 = n2.add(new ot(i2, r2)), a2 = n2.min(o2), h2 = n2.max(o2).subtract(a2), l2 = this.collectObjects({ left: a2.x, top: a2.y, width: h2.x, height: h2.y }, { includeIntersecting: !this.selectionFullyContained }), c2 = n2.eq(o2) ? l2[0] ? [l2[0]] : [] : l2.length > 1 ? l2.filter((e4) => !e4.onSelect({ e: t2 })).reverse() : l2;
    if (1 === c2.length) this.setActiveObject(c2[0], t2);
    else if (c2.length > 1) {
      const e4 = tt.getClass("ActiveSelection");
      this.setActiveObject(new e4(c2, { canvas: this }), t2);
    }
    return this._groupSelector = null, true;
  }
  toCanvasElement() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e3 = arguments.length > 1 ? arguments[1] : void 0;
    const { upper: s2 } = this.elements;
    s2.ctx = void 0;
    const i2 = super.toCanvasElement(t2, e3);
    return s2.ctx = s2.el.getContext("2d"), i2;
  }
  clear() {
    this.textEditingManager.clear(), super.clear();
  }
  destroy() {
    this.removeListeners(), this.textEditingManager.dispose(), super.destroy();
  }
};
var En = { x1: 0, y1: 0, x2: 0, y2: 0 };
var Pn = { ...En, r1: 0, r2: 0 };
var An = (t2, e3) => isNaN(t2) && "number" == typeof e3 ? e3 : t2;
function jn(t2) {
  return t2 && /%$/.test(t2) && Number.isFinite(parseFloat(t2));
}
function Fn(t2, e3) {
  const s2 = "number" == typeof t2 ? t2 : "string" == typeof t2 ? parseFloat(t2) / (jn(t2) ? 100 : 1) : NaN;
  return bs(0, An(s2, e3), 1);
}
var Ln = /\s*;\s*/;
var In = /\s*:\s*/;
function Rn(t2, e3) {
  let s2, i2;
  const r2 = t2.getAttribute("style");
  if (r2) {
    const t3 = r2.split(Ln);
    "" === t3[t3.length - 1] && t3.pop();
    for (let e4 = t3.length; e4--; ) {
      const [r3, n3] = t3[e4].split(In).map((t4) => t4.trim());
      "stop-color" === r3 ? s2 = n3 : "stop-opacity" === r3 && (i2 = n3);
    }
  }
  s2 = s2 || t2.getAttribute("stop-color") || "rgb(0,0,0)", i2 = An(parseFloat(i2 || t2.getAttribute("stop-opacity") || ""), 1);
  const n2 = new ze(s2);
  return n2.setAlpha(n2.getAlpha() * i2 * e3), { offset: Fn(t2.getAttribute("offset"), 0), color: n2.toRgba() };
}
function Bn(t2, e3) {
  const s2 = [], i2 = t2.getElementsByTagName("stop"), r2 = Fn(e3, 1);
  for (let t3 = i2.length; t3--; ) s2.push(Rn(i2[t3], r2));
  return s2;
}
function $n(t2) {
  return "linearGradient" === t2.nodeName || "LINEARGRADIENT" === t2.nodeName ? "linear" : "radial";
}
function Xn(t2) {
  return "userSpaceOnUse" === t2.getAttribute("gradientUnits") ? "pixels" : "percentage";
}
function Yn(t2, e3) {
  return t2.getAttribute(e3);
}
function Wn(t2, e3) {
  return (function(t3, e4) {
    let s2, { width: i2, height: r2, gradientUnits: n2 } = e4;
    return Object.entries(t3).reduce((t4, e5) => {
      let [o2, a2] = e5;
      if ("Infinity" === a2) s2 = 1;
      else if ("-Infinity" === a2) s2 = 0;
      else {
        const t5 = "string" == typeof a2;
        s2 = t5 ? parseFloat(a2) : a2, t5 && jn(a2) && (s2 *= 0.01, "pixels" === n2 && ("x1" !== o2 && "x2" !== o2 && "r2" !== o2 || (s2 *= i2), "y1" !== o2 && "y2" !== o2 || (s2 *= r2)));
      }
      return t4[o2] = s2, t4;
    }, {});
  })("linear" === $n(t2) ? (function(t3) {
    return { x1: Yn(t3, "x1") || 0, y1: Yn(t3, "y1") || 0, x2: Yn(t3, "x2") || "100%", y2: Yn(t3, "y2") || 0 };
  })(t2) : (function(t3) {
    return { x1: Yn(t3, "fx") || Yn(t3, "cx") || "50%", y1: Yn(t3, "fy") || Yn(t3, "cy") || "50%", r1: 0, x2: Yn(t3, "cx") || "50%", y2: Yn(t3, "cy") || "50%", r2: Yn(t3, "r") || "50%" };
  })(t2), { ...e3, gradientUnits: Xn(t2) });
}
var Vn = class {
  constructor(t2) {
    const { type: e3 = "linear", gradientUnits: s2 = "pixels", coords: i2 = {}, colorStops: r2 = [], offsetX: n2 = 0, offsetY: o2 = 0, gradientTransform: a2, id: h2 } = t2 || {};
    Object.assign(this, { type: e3, gradientUnits: s2, coords: { ..."radial" === e3 ? Pn : En, ...i2 }, colorStops: r2, offsetX: n2, offsetY: o2, gradientTransform: a2, id: h2 ? `${h2}_${ft()}` : ft() });
  }
  addColorStop(t2) {
    for (const e3 in t2) this.colorStops.push({ offset: parseFloat(e3), color: t2[e3] });
    return this;
  }
  toObject(t2) {
    return { ...Xt(this, t2), type: this.type, coords: { ...this.coords }, colorStops: this.colorStops.map((t3) => ({ ...t3 })), offsetX: this.offsetX, offsetY: this.offsetY, gradientUnits: this.gradientUnits, gradientTransform: this.gradientTransform ? [...this.gradientTransform] : void 0 };
  }
  toSVG(t2) {
    let { additionalTransform: e3 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const s2 = [], i2 = this.gradientTransform ? this.gradientTransform.concat() : b.concat(), r2 = "pixels" === this.gradientUnits ? "userSpaceOnUse" : "objectBoundingBox", n2 = this.colorStops.map((t3) => ({ ...t3 })).sort((t3, e4) => t3.offset - e4.offset);
    let o2 = -this.offsetX, a2 = -this.offsetY;
    var h2;
    "objectBoundingBox" === r2 ? (o2 /= t2.width, a2 /= t2.height) : (o2 += t2.width / 2, a2 += t2.height / 2), (h2 = t2) && "function" == typeof h2._renderPathCommands && "percentage" !== this.gradientUnits && (o2 -= t2.pathOffset.x, a2 -= t2.pathOffset.y), i2[4] -= o2, i2[5] -= a2;
    const l2 = [`id="SVGID_${this.id}"`, `gradientUnits="${r2}"`, `gradientTransform="${e3 ? e3 + " " : ""}${Vt(i2)}"`, ""].join(" ");
    if ("linear" === this.type) {
      const { x1: t3, y1: e4, x2: i3, y2: r3 } = this.coords;
      s2.push("<linearGradient ", l2, ' x1="', t3, '" y1="', e4, '" x2="', i3, '" y2="', r3, '">\n');
    } else if ("radial" === this.type) {
      const { x1: t3, y1: e4, x2: i3, y2: r3, r1: o3, r2: a3 } = this.coords, h3 = o3 > a3;
      s2.push("<radialGradient ", l2, ' cx="', h3 ? t3 : i3, '" cy="', h3 ? e4 : r3, '" r="', h3 ? o3 : a3, '" fx="', h3 ? i3 : t3, '" fy="', h3 ? r3 : e4, '">\n'), h3 && (n2.reverse(), n2.forEach((t4) => {
        t4.offset = 1 - t4.offset;
      }));
      const c2 = Math.min(o3, a3);
      if (c2 > 0) {
        const t4 = c2 / Math.max(o3, a3);
        n2.forEach((e5) => {
          e5.offset += t4 * (1 - e5.offset);
        });
      }
    }
    return n2.forEach((t3) => {
      let { color: e4, offset: i3 } = t3;
      s2.push(`<stop offset="${100 * i3}%" style="stop-color:${e4};"/>
`);
    }), s2.push("linear" === this.type ? "</linearGradient>" : "</radialGradient>", "\n"), s2.join("");
  }
  toLive(t2) {
    const { x1: e3, y1: s2, x2: i2, y2: r2, r1: n2, r2: o2 } = this.coords, a2 = "linear" === this.type ? t2.createLinearGradient(e3, s2, i2, r2) : t2.createRadialGradient(e3, s2, n2, i2, r2, o2);
    return this.colorStops.forEach((t3) => {
      let { color: e4, offset: s3 } = t3;
      a2.addColorStop(s3, e4);
    }), a2;
  }
  static async fromObject(t2) {
    const { colorStops: e3, gradientTransform: s2 } = t2;
    return new this({ ...t2, colorStops: e3 ? e3.map((t3) => ({ ...t3 })) : void 0, gradientTransform: s2 ? [...s2] : void 0 });
  }
  static fromElement(t2, e3, s2) {
    const i2 = Xn(t2), r2 = e3._findCenterFromElement();
    return new this({ id: t2.getAttribute("id") || void 0, type: $n(t2), coords: Wn(t2, { width: s2.viewBoxWidth || s2.width, height: s2.viewBoxHeight || s2.height }), colorStops: Bn(t2, s2.opacity), gradientUnits: i2, gradientTransform: hr(t2.getAttribute("gradientTransform") || ""), ..."pixels" === i2 ? { offsetX: e3.width / 2 - r2.x, offsetY: e3.height / 2 - r2.y } : { offsetX: 0, offsetY: 0 } });
  }
};
t(Vn, "type", "Gradient"), tt.setClass(Vn, "gradient"), tt.setClass(Vn, "linear"), tt.setClass(Vn, "radial");
var Gn = class {
  get type() {
    return "pattern";
  }
  set type(t2) {
    i("warn", "Setting type has no effect", t2);
  }
  constructor(e3) {
    t(this, "repeat", "repeat"), t(this, "offsetX", 0), t(this, "offsetY", 0), t(this, "crossOrigin", ""), this.id = ft(), Object.assign(this, e3);
  }
  isImageSource() {
    return !!this.source && "string" == typeof this.source.src;
  }
  isCanvasSource() {
    return !!this.source && !!this.source.toDataURL;
  }
  sourceToString() {
    return this.isImageSource() ? this.source.src : this.isCanvasSource() ? this.source.toDataURL() : "";
  }
  toLive(t2) {
    return this.source && (!this.isImageSource() || this.source.complete && 0 !== this.source.naturalWidth && 0 !== this.source.naturalHeight) ? t2.createPattern(this.source, this.repeat) : null;
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const { repeat: e3, crossOrigin: i2 } = this;
    return { ...Xt(this, t2), type: "pattern", source: this.sourceToString(), repeat: e3, crossOrigin: i2, offsetX: Wt(this.offsetX, s.NUM_FRACTION_DIGITS), offsetY: Wt(this.offsetY, s.NUM_FRACTION_DIGITS), patternTransform: this.patternTransform ? [...this.patternTransform] : null };
  }
  toSVG(t2) {
    let { width: e3, height: s2 } = t2;
    const { source: i2, repeat: r2, id: n2 } = this, o2 = An(this.offsetX / e3, 0), a2 = An(this.offsetY / s2, 0);
    return [`<pattern id="SVGID_${n2}" x="${o2}" y="${a2}" width="${"repeat-y" === r2 || "no-repeat" === r2 ? 1 + Math.abs(o2 || 0) : An(i2.width / e3, 0)}" height="${"repeat-x" === r2 || "no-repeat" === r2 ? 1 + Math.abs(a2 || 0) : An(i2.height / s2, 0)}">`, `<image x="0" y="0" width="${i2.width}" height="${i2.height}" xlink:href="${this.sourceToString()}"></image>`, "</pattern>", ""].join("\n");
  }
  static async fromObject(t2, e3) {
    let { type: s2, source: i2, patternTransform: r2, ...n2 } = t2;
    const o2 = await Rt(i2, { ...e3, crossOrigin: n2.crossOrigin });
    return new this({ ...n2, patternTransform: r2 && r2.slice(0), source: o2 });
  }
};
t(Gn, "type", "Pattern"), tt.setClass(Gn), tt.setClass(Gn, "pattern");
var zn = class {
  constructor(e3) {
    t(this, "color", "rgb(0, 0, 0)"), t(this, "width", 1), t(this, "shadow", null), t(this, "strokeLineCap", "round"), t(this, "strokeLineJoin", "round"), t(this, "strokeMiterLimit", 10), t(this, "strokeDashArray", null), t(this, "limitedToCanvasSize", false), this.canvas = e3;
  }
  _setBrushStyles(t2) {
    t2.strokeStyle = this.color, t2.lineWidth = this.width, t2.lineCap = this.strokeLineCap, t2.miterLimit = this.strokeMiterLimit, t2.lineJoin = this.strokeLineJoin, t2.setLineDash(this.strokeDashArray || []);
  }
  _saveAndTransform(t2) {
    const e3 = this.canvas.viewportTransform;
    t2.save(), t2.transform(e3[0], e3[1], e3[2], e3[3], e3[4], e3[5]);
  }
  needsFullRender() {
    return new ze(this.color).getAlpha() < 1 || !!this.shadow;
  }
  _setShadow() {
    if (!this.shadow || !this.canvas) return;
    const t2 = this.canvas, e3 = this.shadow, s2 = t2.contextTop, i2 = t2.getZoom() * t2.getRetinaScaling();
    s2.shadowColor = e3.color, s2.shadowBlur = e3.blur * i2, s2.shadowOffsetX = e3.offsetX * i2, s2.shadowOffsetY = e3.offsetY * i2;
  }
  _resetShadow() {
    const t2 = this.canvas.contextTop;
    t2.shadowColor = "", t2.shadowBlur = t2.shadowOffsetX = t2.shadowOffsetY = 0;
  }
  _isOutSideCanvas(t2) {
    return t2.x < 0 || t2.x > this.canvas.getWidth() || t2.y < 0 || t2.y > this.canvas.getHeight();
  }
};
var Hn = class _Hn extends ki {
  constructor(t2) {
    let { path: e3, left: s2, top: i2, ...r2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _Hn.ownDefaults), this.setOptions(r2), this._setPath(t2 || [], true), "number" == typeof s2 && this.set(O, s2), "number" == typeof i2 && this.set(k, i2);
  }
  _setPath(t2, e3) {
    this.path = Rr(Array.isArray(t2) ? t2 : tn(t2)), this.setBoundingBox(e3);
  }
  _findCenterFromElement() {
    const t2 = this._calcBoundsFromPath();
    return new ot(t2.left + t2.width / 2, t2.top + t2.height / 2);
  }
  _renderPathCommands(t2) {
    const e3 = -this.pathOffset.x, s2 = -this.pathOffset.y;
    t2.beginPath();
    for (const i2 of this.path) switch (i2[0]) {
      case "L":
        t2.lineTo(i2[1] + e3, i2[2] + s2);
        break;
      case "M":
        t2.moveTo(i2[1] + e3, i2[2] + s2);
        break;
      case "C":
        t2.bezierCurveTo(i2[1] + e3, i2[2] + s2, i2[3] + e3, i2[4] + s2, i2[5] + e3, i2[6] + s2);
        break;
      case "Q":
        t2.quadraticCurveTo(i2[1] + e3, i2[2] + s2, i2[3] + e3, i2[4] + s2);
        break;
      case "Z":
        t2.closePath();
    }
  }
  _render(t2) {
    this._renderPathCommands(t2), this._renderPaintInOrder(t2);
  }
  toString() {
    return `#<Path (${this.complexity()}): { "top": ${this.top}, "left": ${this.left} }>`;
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return { ...super.toObject(t2), path: this.path.map((t3) => t3.slice()) };
  }
  toDatalessObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = this.toObject(t2);
    return this.sourcePath && (delete e3.path, e3.sourcePath = this.sourcePath), e3;
  }
  _toSVG() {
    return ["<path ", "COMMON_PARTS", `d="${sn(this.path, s.NUM_FRACTION_DIGITS)}" stroke-linecap="round" />
`];
  }
  _getOffsetTransform() {
    const t2 = s.NUM_FRACTION_DIGITS;
    return ` translate(${Wt(-this.pathOffset.x, t2)}, ${Wt(-this.pathOffset.y, t2)})`;
  }
  toClipPathSVG(t2) {
    const e3 = this._getOffsetTransform();
    return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), { reviver: t2, additionalTransform: e3 });
  }
  toSVG(t2) {
    const e3 = this._getOffsetTransform();
    return this._createBaseSVGMarkup(this._toSVG(), { reviver: t2, additionalTransform: e3 });
  }
  complexity() {
    return this.path.length;
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t2) {
    const { width: e3, height: s2, pathOffset: i2 } = this._calcDimensions();
    this.set({ width: e3, height: s2, pathOffset: i2 }), t2 && this.setPositionByOrigin(i2, T, T);
  }
  _calcBoundsFromPath() {
    const t2 = [];
    let e3 = 0, s2 = 0, i2 = 0, r2 = 0;
    for (const n2 of this.path) switch (n2[0]) {
      case "L":
        i2 = n2[1], r2 = n2[2], t2.push({ x: e3, y: s2 }, { x: i2, y: r2 });
        break;
      case "M":
        i2 = n2[1], r2 = n2[2], e3 = i2, s2 = r2;
        break;
      case "C":
        t2.push(...Lr(i2, r2, n2[1], n2[2], n2[3], n2[4], n2[5], n2[6])), i2 = n2[5], r2 = n2[6];
        break;
      case "Q":
        t2.push(...Lr(i2, r2, n2[1], n2[2], n2[1], n2[2], n2[3], n2[4])), i2 = n2[3], r2 = n2[4];
        break;
      case "Z":
        i2 = e3, r2 = s2;
    }
    return ae(t2);
  }
  _calcDimensions() {
    const t2 = this._calcBoundsFromPath();
    return { ...t2, pathOffset: new ot(t2.left + t2.width / 2, t2.top + t2.height / 2) };
  }
  static fromObject(t2) {
    return this._fromObject(t2, { extraParam: "path" });
  }
  static async fromElement(t2, e3, s2) {
    const { d: i2, ...r2 } = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return new this(i2, { ...r2, ...e3, left: void 0, top: void 0 });
  }
};
t(Hn, "type", "Path"), t(Hn, "cacheProperties", [...ws, "path", "fillRule"]), t(Hn, "ATTRIBUTE_NAMES", [...Gi, "d"]), tt.setClass(Hn), tt.setSVGClass(Hn);
var Nn = class _Nn extends zn {
  constructor(e3) {
    super(e3), t(this, "decimate", 0.4), t(this, "drawStraightLine", false), t(this, "straightLineKey", "shiftKey"), this._points = [], this._hasStraightLine = false;
  }
  needsFullRender() {
    return super.needsFullRender() || this._hasStraightLine;
  }
  static drawSegment(t2, e3, s2) {
    const i2 = e3.midPointFrom(s2);
    return t2.quadraticCurveTo(e3.x, e3.y, i2.x, i2.y), i2;
  }
  onMouseDown(t2, e3) {
    let { e: s2 } = e3;
    this.canvas._isMainEvent(s2) && (this.drawStraightLine = !!this.straightLineKey && s2[this.straightLineKey], this._prepareForDrawing(t2), this._addPoint(t2), this._render());
  }
  onMouseMove(t2, e3) {
    let { e: s2 } = e3;
    if (this.canvas._isMainEvent(s2) && (this.drawStraightLine = !!this.straightLineKey && s2[this.straightLineKey], (true !== this.limitedToCanvasSize || !this._isOutSideCanvas(t2)) && this._addPoint(t2) && this._points.length > 1)) if (this.needsFullRender()) this.canvas.clearContext(this.canvas.contextTop), this._render();
    else {
      const t3 = this._points, e4 = t3.length, s3 = this.canvas.contextTop;
      this._saveAndTransform(s3), this.oldEnd && (s3.beginPath(), s3.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = _Nn.drawSegment(s3, t3[e4 - 2], t3[e4 - 1]), s3.stroke(), s3.restore();
    }
  }
  onMouseUp(t2) {
    let { e: e3 } = t2;
    return !this.canvas._isMainEvent(e3) || (this.drawStraightLine = false, this.oldEnd = void 0, this._finalizeAndAddPath(), false);
  }
  _prepareForDrawing(t2) {
    this._reset(), this._addPoint(t2), this.canvas.contextTop.moveTo(t2.x, t2.y);
  }
  _addPoint(t2) {
    return !(this._points.length > 1 && t2.eq(this._points[this._points.length - 1])) && (this.drawStraightLine && this._points.length > 1 && (this._hasStraightLine = true, this._points.pop()), this._points.push(t2), true);
  }
  _reset() {
    this._points = [], this._setBrushStyles(this.canvas.contextTop), this._setShadow(), this._hasStraightLine = false;
  }
  _render() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.canvas.contextTop, e3 = this._points[0], s2 = this._points[1];
    if (this._saveAndTransform(t2), t2.beginPath(), 2 === this._points.length && e3.x === s2.x && e3.y === s2.y) {
      const t3 = this.width / 1e3;
      e3.x -= t3, s2.x += t3;
    }
    t2.moveTo(e3.x, e3.y);
    for (let i2 = 1; i2 < this._points.length; i2++) _Nn.drawSegment(t2, e3, s2), e3 = this._points[i2], s2 = this._points[i2 + 1];
    t2.lineTo(e3.x, e3.y), t2.stroke(), t2.restore();
  }
  convertPointsToSVGPath(t2) {
    const e3 = this.width / 1e3;
    return en(t2, e3);
  }
  createPath(t2) {
    const e3 = new Hn(t2, { fill: null, stroke: this.color, strokeWidth: this.width, strokeLineCap: this.strokeLineCap, strokeMiterLimit: this.strokeMiterLimit, strokeLineJoin: this.strokeLineJoin, strokeDashArray: this.strokeDashArray });
    return this.shadow && (this.shadow.affectStroke = true, e3.shadow = new Cs(this.shadow)), e3;
  }
  decimatePoints(t2, e3) {
    if (t2.length <= 2) return t2;
    let s2, i2 = t2[0];
    const r2 = this.canvas.getZoom(), n2 = Math.pow(e3 / r2, 2), o2 = t2.length - 1, a2 = [i2];
    for (let e4 = 1; e4 < o2 - 1; e4++) s2 = Math.pow(i2.x - t2[e4].x, 2) + Math.pow(i2.y - t2[e4].y, 2), s2 >= n2 && (i2 = t2[e4], a2.push(i2));
    return a2.push(t2[o2]), a2;
  }
  _finalizeAndAddPath() {
    this.canvas.contextTop.closePath(), this.decimate && (this._points = this.decimatePoints(this._points, this.decimate));
    const t2 = this.convertPointsToSVGPath(this._points);
    if ((function(t3) {
      return "M 0 0 Q 0 0 0 0 L 0 0" === sn(t3);
    })(t2)) return void this.canvas.requestRenderAll();
    const e3 = this.createPath(t2);
    this.canvas.clearContext(this.canvas.contextTop), this.canvas.fire("before:path:created", { path: e3 }), this.canvas.add(e3), this.canvas.requestRenderAll(), e3.setCoords(), this._resetShadow(), this.canvas.fire("path:created", { path: e3 });
  }
};
var Un = ["radius", "startAngle", "endAngle", "counterClockwise"];
var qn = class _qn extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._qn.ownDefaults };
  }
  constructor(t2) {
    super(), Object.assign(this, _qn.ownDefaults), this.setOptions(t2);
  }
  _set(t2, e3) {
    return super._set(t2, e3), "radius" === t2 && this.setRadius(e3), this;
  }
  _render(t2) {
    t2.beginPath(), t2.arc(0, 0, this.radius, xt(this.startAngle), xt(this.endAngle), this.counterClockwise), this._renderPaintInOrder(t2);
  }
  getRadiusX() {
    return this.get("radius") * this.get(W);
  }
  getRadiusY() {
    return this.get("radius") * this.get(V);
  }
  setRadius(t2) {
    this.radius = t2, this.set({ width: 2 * t2, height: 2 * t2 });
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...Un, ...t2]);
  }
  _toSVG() {
    const t2 = (this.endAngle - this.startAngle) % 360;
    if (0 === t2) return ["<circle ", "COMMON_PARTS", 'cx="0" cy="0" ', 'r="', `${this.radius}`, '" />\n'];
    {
      const { radius: e3 } = this, s2 = xt(this.startAngle), i2 = xt(this.endAngle), r2 = rt(s2) * e3, n2 = nt(s2) * e3, o2 = rt(i2) * e3, a2 = nt(i2) * e3;
      return [`<path d="M ${r2} ${n2} A ${e3} ${e3} 0 ${t2 > 180 ? 1 : 0} ${this.counterClockwise ? 0 : 1} ${o2} ${a2}" `, "COMMON_PARTS", " />\n"];
    }
  }
  static async fromElement(t2, e3, s2) {
    const { left: i2 = 0, top: r2 = 0, radius: n2 = 0, ...o2 } = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return new this({ ...o2, radius: n2, left: i2 - n2, top: r2 - n2 });
  }
  static fromObject(t2) {
    return super._fromObject(t2);
  }
};
t(qn, "type", "Circle"), t(qn, "cacheProperties", [...ws, ...Un]), t(qn, "ownDefaults", { radius: 0, startAngle: 0, endAngle: 360, counterClockwise: false }), t(qn, "ATTRIBUTE_NAMES", ["cx", "cy", "r", ...Gi]), tt.setClass(qn), tt.setSVGClass(qn);
var Kn = class extends zn {
  constructor(e3) {
    super(e3), t(this, "width", 10), this.points = [];
  }
  drawDot(t2) {
    const e3 = this.addPoint(t2), s2 = this.canvas.contextTop;
    this._saveAndTransform(s2), this.dot(s2, e3), s2.restore();
  }
  dot(t2, e3) {
    t2.fillStyle = e3.fill, t2.beginPath(), t2.arc(e3.x, e3.y, e3.radius, 0, 2 * Math.PI, false), t2.closePath(), t2.fill();
  }
  onMouseDown(t2) {
    this.points = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t2);
  }
  _render() {
    const t2 = this.canvas.contextTop, e3 = this.points;
    this._saveAndTransform(t2);
    for (let s2 = 0; s2 < e3.length; s2++) this.dot(t2, e3[s2]);
    t2.restore();
  }
  onMouseMove(t2) {
    true === this.limitedToCanvasSize && this._isOutSideCanvas(t2) || (this.needsFullRender() ? (this.canvas.clearContext(this.canvas.contextTop), this.addPoint(t2), this._render()) : this.drawDot(t2));
  }
  onMouseUp() {
    const t2 = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;
    const e3 = [];
    for (let t3 = 0; t3 < this.points.length; t3++) {
      const s3 = this.points[t3], i2 = new qn({ radius: s3.radius, left: s3.x, top: s3.y, originX: T, originY: T, fill: s3.fill });
      this.shadow && (i2.shadow = new Cs(this.shadow)), e3.push(i2);
    }
    const s2 = new Or(e3, { canvas: this.canvas });
    this.canvas.fire("before:path:created", { path: s2 }), this.canvas.add(s2), this.canvas.fire("path:created", { path: s2 }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t2, this.canvas.requestRenderAll();
  }
  addPoint(t2) {
    let { x: e3, y: s2 } = t2;
    const i2 = { x: e3, y: s2, radius: rn(Math.max(0, this.width - 20), this.width + 20) / 2, fill: new ze(this.color).setAlpha(rn(0, 100) / 100).toRgba() };
    return this.points.push(i2), i2;
  }
};
var Jn = class extends zn {
  constructor(e3) {
    super(e3), t(this, "width", 10), t(this, "density", 20), t(this, "dotWidth", 1), t(this, "dotWidthVariance", 1), t(this, "randomOpacity", false), t(this, "optimizeOverlapping", true), this.sprayChunks = [], this.sprayChunk = [];
  }
  onMouseDown(t2) {
    this.sprayChunks = [], this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t2), this.renderChunck(this.sprayChunk);
  }
  onMouseMove(t2) {
    true === this.limitedToCanvasSize && this._isOutSideCanvas(t2) || (this.addSprayChunk(t2), this.renderChunck(this.sprayChunk));
  }
  onMouseUp() {
    const t2 = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = false;
    const e3 = [];
    for (let t3 = 0; t3 < this.sprayChunks.length; t3++) {
      const s3 = this.sprayChunks[t3];
      for (let t4 = 0; t4 < s3.length; t4++) {
        const i2 = s3[t4], r2 = new pr({ width: i2.width, height: i2.width, left: i2.x + 1, top: i2.y + 1, originX: T, originY: T, fill: this.color });
        e3.push(r2);
      }
    }
    const s2 = new Or(this.optimizeOverlapping ? (function(t3) {
      const e4 = {}, s3 = [];
      for (let i2, r2 = 0; r2 < t3.length; r2++) i2 = `${t3[r2].left}${t3[r2].top}`, e4[i2] || (e4[i2] = true, s3.push(t3[r2]));
      return s3;
    })(e3) : e3, { objectCaching: true, subTargetCheck: false, interactive: false });
    this.shadow && s2.set("shadow", new Cs(this.shadow)), this.canvas.fire("before:path:created", { path: s2 }), this.canvas.add(s2), this.canvas.fire("path:created", { path: s2 }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t2, this.canvas.requestRenderAll();
  }
  renderChunck(t2) {
    const e3 = this.canvas.contextTop;
    e3.fillStyle = this.color, this._saveAndTransform(e3);
    for (let s2 = 0; s2 < t2.length; s2++) {
      const i2 = t2[s2];
      e3.globalAlpha = i2.opacity, e3.fillRect(i2.x, i2.y, i2.width, i2.width);
    }
    e3.restore();
  }
  _render() {
    const t2 = this.canvas.contextTop;
    t2.fillStyle = this.color, this._saveAndTransform(t2);
    for (let t3 = 0; t3 < this.sprayChunks.length; t3++) this.renderChunck(this.sprayChunks[t3]);
    t2.restore();
  }
  addSprayChunk(t2) {
    this.sprayChunk = [];
    const e3 = this.width / 2;
    for (let s2 = 0; s2 < this.density; s2++) this.sprayChunk.push({ x: rn(t2.x - e3, t2.x + e3), y: rn(t2.y - e3, t2.y + e3), width: this.dotWidthVariance ? rn(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth, opacity: this.randomOpacity ? rn(0, 100) / 100 : 1 });
    this.sprayChunks.push(this.sprayChunk);
  }
};
var Qn = class extends Nn {
  constructor(t2) {
    super(t2);
  }
  getPatternSrc() {
    const t2 = pt(), e3 = t2.getContext("2d");
    return t2.width = t2.height = 25, e3 && (e3.fillStyle = this.color, e3.beginPath(), e3.arc(10, 10, 10, 0, 2 * Math.PI, false), e3.closePath(), e3.fill()), t2;
  }
  getPattern(t2) {
    return t2.createPattern(this.source || this.getPatternSrc(), "repeat");
  }
  _setBrushStyles(t2) {
    super._setBrushStyles(t2);
    const e3 = this.getPattern(t2);
    e3 && (t2.strokeStyle = e3);
  }
  createPath(t2) {
    const e3 = super.createPath(t2), s2 = e3._getLeftTopCoords().scalarAdd(e3.strokeWidth / 2);
    return e3.stroke = new Gn({ source: this.source || this.getPatternSrc(), offsetX: -s2.x, offsetY: -s2.y }), e3;
  }
};
var Zn = ["x1", "x2", "y1", "y2"];
var to = class _to extends ki {
  constructor() {
    let [t2, e3, s2, i2] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0], r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _to.ownDefaults), this.setOptions(r2), this.x1 = t2, this.x2 = s2, this.y1 = e3, this.y2 = i2, this._setWidthHeight();
    const { left: n2, top: o2 } = r2;
    "number" == typeof n2 && this.set(O, n2), "number" == typeof o2 && this.set(k, o2);
  }
  _setWidthHeight() {
    const { x1: t2, y1: e3, x2: s2, y2: i2 } = this;
    this.width = Math.abs(s2 - t2), this.height = Math.abs(i2 - e3);
    const { left: r2, top: n2, width: o2, height: a2 } = ae([{ x: t2, y: e3 }, { x: s2, y: i2 }]), h2 = new ot(r2 + o2 / 2, n2 + a2 / 2);
    this.setPositionByOrigin(h2, T, T);
  }
  _set(t2, e3) {
    return super._set(t2, e3), Zn.includes(t2) && this._setWidthHeight(), this;
  }
  _render(t2) {
    t2.beginPath();
    const e3 = this.calcLinePoints();
    t2.moveTo(e3.x1, e3.y1), t2.lineTo(e3.x2, e3.y2), t2.lineWidth = this.strokeWidth;
    const s2 = t2.strokeStyle;
    var i2;
    Gt(this.stroke) ? t2.strokeStyle = this.stroke.toLive(t2) : t2.strokeStyle = null !== (i2 = this.stroke) && void 0 !== i2 ? i2 : t2.fillStyle;
    this.stroke && this._renderStroke(t2), t2.strokeStyle = s2;
  }
  _findCenterFromElement() {
    return new ot((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return { ...super.toObject(t2), ...this.calcLinePoints() };
  }
  _getNonTransformedDimensions() {
    const t2 = super._getNonTransformedDimensions();
    return "butt" === this.strokeLineCap && (0 === this.width && (t2.y -= this.strokeWidth), 0 === this.height && (t2.x -= this.strokeWidth)), t2;
  }
  calcLinePoints() {
    const { x1: t2, x2: e3, y1: s2, y2: i2, width: r2, height: n2 } = this, o2 = t2 <= e3 ? -1 : 1, a2 = s2 <= i2 ? -1 : 1;
    return { x1: o2 * r2 / 2, x2: o2 * -r2 / 2, y1: a2 * n2 / 2, y2: a2 * -n2 / 2 };
  }
  _toSVG() {
    const { x1: t2, x2: e3, y1: s2, y2: i2 } = this.calcLinePoints();
    return ["<line ", "COMMON_PARTS", `x1="${t2}" y1="${s2}" x2="${e3}" y2="${i2}" />
`];
  }
  static async fromElement(t2, e3, s2) {
    const { x1: i2 = 0, y1: r2 = 0, x2: n2 = 0, y2: o2 = 0, ...a2 } = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return new this([i2, r2, n2, o2], a2);
  }
  static fromObject(t2) {
    let { x1: e3, y1: s2, x2: i2, y2: r2, ...n2 } = t2;
    return this._fromObject({ ...n2, points: [e3, s2, i2, r2] }, { extraParam: "points" });
  }
};
t(to, "type", "Line"), t(to, "cacheProperties", [...ws, ...Zn]), t(to, "ATTRIBUTE_NAMES", Gi.concat(Zn)), tt.setClass(to), tt.setSVGClass(to);
var eo = class _eo extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._eo.ownDefaults };
  }
  constructor(t2) {
    super(), Object.assign(this, _eo.ownDefaults), this.setOptions(t2);
  }
  _render(t2) {
    const e3 = this.width / 2, s2 = this.height / 2;
    t2.beginPath(), t2.moveTo(-e3, s2), t2.lineTo(0, -s2), t2.lineTo(e3, s2), t2.closePath(), this._renderPaintInOrder(t2);
  }
  _toSVG() {
    const t2 = this.width / 2, e3 = this.height / 2;
    return ["<polygon ", "COMMON_PARTS", 'points="', `${-t2} ${e3},0 ${-e3},${t2} ${e3}`, '" />'];
  }
};
t(eo, "type", "Triangle"), t(eo, "ownDefaults", { width: 100, height: 100 }), tt.setClass(eo), tt.setSVGClass(eo);
var so = ["rx", "ry"];
var io = class _io extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._io.ownDefaults };
  }
  constructor(t2) {
    super(), Object.assign(this, _io.ownDefaults), this.setOptions(t2);
  }
  _set(t2, e3) {
    switch (super._set(t2, e3), t2) {
      case "rx":
        this.rx = e3, this.set("width", 2 * e3);
        break;
      case "ry":
        this.ry = e3, this.set("height", 2 * e3);
    }
    return this;
  }
  getRx() {
    return this.get("rx") * this.get(W);
  }
  getRy() {
    return this.get("ry") * this.get(V);
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject([...so, ...t2]);
  }
  _toSVG() {
    return ["<ellipse ", "COMMON_PARTS", `cx="0" cy="0" rx="${this.rx}" ry="${this.ry}" />
`];
  }
  _render(t2) {
    t2.beginPath(), t2.save(), t2.transform(1, 0, 0, this.ry / this.rx, 0, 0), t2.arc(0, 0, this.rx, 0, x, false), t2.restore(), this._renderPaintInOrder(t2);
  }
  static async fromElement(t2, e3, s2) {
    const i2 = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return i2.left = (i2.left || 0) - i2.rx, i2.top = (i2.top || 0) - i2.ry, new this(i2);
  }
};
t(io, "type", "Ellipse"), t(io, "cacheProperties", [...ws, ...so]), t(io, "ownDefaults", { rx: 0, ry: 0 }), t(io, "ATTRIBUTE_NAMES", [...Gi, "cx", "cy", "rx", "ry"]), tt.setClass(io), tt.setSVGClass(io);
var ro = { exactBoundingBox: false };
var no = class _no extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._no.ownDefaults };
  }
  constructor() {
    let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), t(this, "strokeDiff", void 0), Object.assign(this, _no.ownDefaults), this.setOptions(s2), this.points = e3;
    const { left: i2, top: r2 } = s2;
    this.initialized = true, this.setBoundingBox(true), "number" == typeof i2 && this.set(O, i2), "number" == typeof r2 && this.set(k, r2);
  }
  isOpen() {
    return true;
  }
  _projectStrokeOnPoints(t2) {
    return ji(this.points, t2, this.isOpen());
  }
  _calcDimensions(t2) {
    t2 = { scaleX: this.scaleX, scaleY: this.scaleY, skewX: this.skewX, skewY: this.skewY, strokeLineCap: this.strokeLineCap, strokeLineJoin: this.strokeLineJoin, strokeMiterLimit: this.strokeMiterLimit, strokeUniform: this.strokeUniform, strokeWidth: this.strokeWidth, ...t2 || {} };
    const e3 = this.exactBoundingBox ? this._projectStrokeOnPoints(t2).map((t3) => t3.projectedPoint) : this.points;
    if (0 === e3.length) return { left: 0, top: 0, width: 0, height: 0, pathOffset: new ot(), strokeOffset: new ot(), strokeDiff: new ot() };
    const s2 = ae(e3), i2 = Lt({ ...t2, scaleX: 1, scaleY: 1 }), r2 = ae(this.points.map((t3) => St(t3, i2, true))), n2 = new ot(this.scaleX, this.scaleY);
    let o2 = s2.left + s2.width / 2, a2 = s2.top + s2.height / 2;
    return this.exactBoundingBox && (o2 -= a2 * Math.tan(xt(this.skewX)), a2 -= o2 * Math.tan(xt(this.skewY))), { ...s2, pathOffset: new ot(o2, a2), strokeOffset: new ot(r2.left, r2.top).subtract(new ot(s2.left, s2.top)).multiply(n2), strokeDiff: new ot(s2.width, s2.height).subtract(new ot(r2.width, r2.height)).multiply(n2) };
  }
  _findCenterFromElement() {
    const t2 = ae(this.points);
    return new ot(t2.left + t2.width / 2, t2.top + t2.height / 2);
  }
  setDimensions() {
    this.setBoundingBox();
  }
  setBoundingBox(t2) {
    const { left: e3, top: s2, width: i2, height: r2, pathOffset: n2, strokeOffset: o2, strokeDiff: a2 } = this._calcDimensions();
    this.set({ width: i2, height: r2, pathOffset: n2, strokeOffset: o2, strokeDiff: a2 }), t2 && this.setPositionByOrigin(new ot(e3 + i2 / 2, s2 + r2 / 2), T, T);
  }
  isStrokeAccountedForInDimensions() {
    return this.exactBoundingBox;
  }
  _getNonTransformedDimensions() {
    return this.exactBoundingBox ? new ot(this.width, this.height) : super._getNonTransformedDimensions();
  }
  _getTransformedDimensions() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (this.exactBoundingBox) {
      let n2;
      if (Object.keys(t2).some((t3) => this.strokeUniform || this.constructor.layoutProperties.includes(t3))) {
        var e3, s2;
        const { width: i3, height: r3 } = this._calcDimensions(t2);
        n2 = new ot(null !== (e3 = t2.width) && void 0 !== e3 ? e3 : i3, null !== (s2 = t2.height) && void 0 !== s2 ? s2 : r3);
      } else {
        var i2, r2;
        n2 = new ot(null !== (i2 = t2.width) && void 0 !== i2 ? i2 : this.width, null !== (r2 = t2.height) && void 0 !== r2 ? r2 : this.height);
      }
      return n2.multiply(new ot(t2.scaleX || this.scaleX, t2.scaleY || this.scaleY));
    }
    return super._getTransformedDimensions(t2);
  }
  _set(t2, e3) {
    const s2 = this.initialized && this[t2] !== e3, i2 = super._set(t2, e3);
    return this.exactBoundingBox && s2 && ((t2 === W || t2 === V) && this.strokeUniform && this.constructor.layoutProperties.includes("strokeUniform") || this.constructor.layoutProperties.includes(t2)) && this.setDimensions(), i2;
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return { ...super.toObject(t2), points: this.points.map((t3) => {
      let { x: e3, y: s2 } = t3;
      return { x: e3, y: s2 };
    }) };
  }
  _toSVG() {
    const t2 = [], e3 = this.pathOffset.x, i2 = this.pathOffset.y, r2 = s.NUM_FRACTION_DIGITS;
    for (let s2 = 0, n2 = this.points.length; s2 < n2; s2++) t2.push(Wt(this.points[s2].x - e3, r2), ",", Wt(this.points[s2].y - i2, r2), " ");
    return [`<${this.constructor.type.toLowerCase()} `, "COMMON_PARTS", `points="${t2.join("")}" />
`];
  }
  _render(t2) {
    const e3 = this.points.length, s2 = this.pathOffset.x, i2 = this.pathOffset.y;
    if (e3 && !isNaN(this.points[e3 - 1].y)) {
      t2.beginPath(), t2.moveTo(this.points[0].x - s2, this.points[0].y - i2);
      for (let r2 = 0; r2 < e3; r2++) {
        const e4 = this.points[r2];
        t2.lineTo(e4.x - s2, e4.y - i2);
      }
      !this.isOpen() && t2.closePath(), this._renderPaintInOrder(t2);
    }
  }
  complexity() {
    return this.points.length;
  }
  static async fromElement(t2, e3, s2) {
    const i2 = (function(t3) {
      if (!t3) return [];
      const e4 = t3.replace(/,/g, " ").trim().split(/\s+/), s3 = [];
      for (let t4 = 0; t4 < e4.length; t4 += 2) s3.push({ x: parseFloat(e4[t4]), y: parseFloat(e4[t4 + 1]) });
      return s3;
    })(t2.getAttribute("points")), { left: r2, top: n2, ...o2 } = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return new this(i2, { ...o2, ...e3 });
  }
  static fromObject(t2) {
    return this._fromObject(t2, { extraParam: "points" });
  }
};
t(no, "ownDefaults", ro), t(no, "type", "Polyline"), t(no, "layoutProperties", [G, z, "strokeLineCap", "strokeLineJoin", "strokeMiterLimit", "strokeWidth", "strokeUniform", "points"]), t(no, "cacheProperties", [...ws, "points"]), t(no, "ATTRIBUTE_NAMES", [...Gi]), tt.setClass(no), tt.setSVGClass(no);
var oo = class extends no {
  isOpen() {
    return false;
  }
};
t(oo, "ownDefaults", ro), t(oo, "type", "Polygon"), tt.setClass(oo), tt.setSVGClass(oo);
var ao = class extends ki {
  isEmptyStyles(t2) {
    if (!this.styles) return true;
    if (void 0 !== t2 && !this.styles[t2]) return true;
    const e3 = void 0 === t2 ? this.styles : { line: this.styles[t2] };
    for (const t3 in e3) for (const s2 in e3[t3]) for (const i2 in e3[t3][s2]) return false;
    return true;
  }
  styleHas(t2, e3) {
    if (!this.styles) return false;
    if (void 0 !== e3 && !this.styles[e3]) return false;
    const s2 = void 0 === e3 ? this.styles : { 0: this.styles[e3] };
    for (const e4 in s2) for (const i2 in s2[e4]) if (void 0 !== s2[e4][i2][t2]) return true;
    return false;
  }
  cleanStyle(t2) {
    if (!this.styles) return false;
    const e3 = this.styles;
    let s2, i2, r2 = 0, n2 = true, o2 = 0;
    for (const o3 in e3) {
      s2 = 0;
      for (const a2 in e3[o3]) {
        const h2 = e3[o3][a2] || {};
        r2++, void 0 !== h2[t2] ? (i2 ? h2[t2] !== i2 && (n2 = false) : i2 = h2[t2], h2[t2] === this[t2] && delete h2[t2]) : n2 = false, 0 !== Object.keys(h2).length ? s2++ : delete e3[o3][a2];
      }
      0 === s2 && delete e3[o3];
    }
    for (let t3 = 0; t3 < this._textLines.length; t3++) o2 += this._textLines[t3].length;
    n2 && r2 === o2 && (this[t2] = i2, this.removeStyle(t2));
  }
  removeStyle(t2) {
    if (!this.styles) return;
    const e3 = this.styles;
    let s2, i2, r2;
    for (i2 in e3) {
      for (r2 in s2 = e3[i2], s2) delete s2[r2][t2], 0 === Object.keys(s2[r2]).length && delete s2[r2];
      0 === Object.keys(s2).length && delete e3[i2];
    }
  }
  _extendStyles(t2, e3) {
    const { lineIndex: s2, charIndex: i2 } = this.get2DCursorLocation(t2);
    this._getLineStyle(s2) || this._setLineStyle(s2);
    const r2 = Yt({ ...this._getStyleDeclaration(s2, i2), ...e3 }, (t3) => void 0 !== t3);
    this._setStyleDeclaration(s2, i2, r2);
  }
  getSelectionStyles(t2, e3, s2) {
    const i2 = [];
    for (let r2 = t2; r2 < (e3 || t2); r2++) i2.push(this.getStyleAtPosition(r2, s2));
    return i2;
  }
  getStyleAtPosition(t2, e3) {
    const { lineIndex: s2, charIndex: i2 } = this.get2DCursorLocation(t2);
    return e3 ? this.getCompleteStyleDeclaration(s2, i2) : this._getStyleDeclaration(s2, i2);
  }
  setSelectionStyles(t2, e3, s2) {
    for (let i2 = e3; i2 < (s2 || e3); i2++) this._extendStyles(i2, t2);
    this._forceClearCache = true;
  }
  _getStyleDeclaration(t2, e3) {
    var s2;
    const i2 = this.styles && this.styles[t2];
    return i2 && null !== (s2 = i2[e3]) && void 0 !== s2 ? s2 : {};
  }
  getCompleteStyleDeclaration(t2, e3) {
    return { ...Xt(this, this.constructor._styleProperties), ...this._getStyleDeclaration(t2, e3) };
  }
  _setStyleDeclaration(t2, e3, s2) {
    this.styles[t2][e3] = s2;
  }
  _deleteStyleDeclaration(t2, e3) {
    delete this.styles[t2][e3];
  }
  _getLineStyle(t2) {
    return !!this.styles[t2];
  }
  _setLineStyle(t2) {
    this.styles[t2] = {};
  }
  _deleteLineStyle(t2) {
    delete this.styles[t2];
  }
};
t(ao, "_styleProperties", ss);
var ho = /  +/g;
var lo = /"/g;
function co(t2, e3, i2, r2, n2) {
  return `		${(function(t3, e4) {
    let { left: i3, top: r3, width: n3, height: o2 } = e4, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.NUM_FRACTION_DIGITS;
    const h2 = Ue(H, t3, false), [l2, c2, u2, d2] = [i3, r3, n3, o2].map((t4) => Wt(t4, a2));
    return `<rect ${h2} x="${l2}" y="${c2}" width="${u2}" height="${d2}"></rect>`;
  })(t2, { left: e3, top: i2, width: r2, height: n2 })}
`;
}
var uo;
var go = class _go extends ao {
  static getDefaults() {
    return { ...super.getDefaults(), ..._go.ownDefaults };
  }
  constructor(e3, s2) {
    super(), t(this, "__charBounds", []), Object.assign(this, _go.ownDefaults), this.setOptions(s2), this.styles || (this.styles = {}), this.text = e3, this.initialized = true, this.path && this.setPathInfo(), this.initDimensions(), this.setCoords();
  }
  setPathInfo() {
    const t2 = this.path;
    t2 && (t2.segmentsInfo = Ur(t2.path));
  }
  _splitText() {
    const t2 = this._splitTextIntoLines(this.text);
    return this.textLines = t2.lines, this._textLines = t2.graphemeLines, this._unwrappedTextLines = t2._unwrappedLines, this._text = t2.graphemeText, t2;
  }
  initDimensions() {
    this._splitText(), this._clearCache(), this.dirty = true, this.path ? (this.width = this.path.width, this.height = this.path.height) : (this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, this.height = this.calcTextHeight()), this.textAlign.includes(rs) && this.enlargeSpaces();
  }
  enlargeSpaces() {
    let t2, e3, s2, i2, r2, n2, o2;
    for (let a2 = 0, h2 = this._textLines.length; a2 < h2; a2++) if ((this.textAlign === rs || a2 !== h2 - 1 && !this.isEndOfWrapping(a2)) && (i2 = 0, r2 = this._textLines[a2], e3 = this.getLineWidth(a2), e3 < this.width && (o2 = this.textLines[a2].match(this._reSpacesAndTabs)))) {
      s2 = o2.length, t2 = (this.width - e3) / s2;
      for (let e4 = 0; e4 <= r2.length; e4++) n2 = this.__charBounds[a2][e4], this._reSpaceAndTab.test(r2[e4]) ? (n2.width += t2, n2.kernedWidth += t2, n2.left += i2, i2 += t2) : n2.left += i2;
    }
  }
  isEndOfWrapping(t2) {
    return t2 === this._textLines.length - 1;
  }
  missingNewlineOffset(t2) {
    return 1;
  }
  get2DCursorLocation(t2, e3) {
    const s2 = e3 ? this._unwrappedTextLines : this._textLines;
    let i2;
    for (i2 = 0; i2 < s2.length; i2++) {
      if (t2 <= s2[i2].length) return { lineIndex: i2, charIndex: t2 };
      t2 -= s2[i2].length + this.missingNewlineOffset(i2, e3);
    }
    return { lineIndex: i2 - 1, charIndex: s2[i2 - 1].length < t2 ? s2[i2 - 1].length : t2 };
  }
  toString() {
    return `#<Text (${this.complexity()}): { "text": "${this.text}", "fontFamily": "${this.fontFamily}" }>`;
  }
  _getCacheCanvasDimensions() {
    const t2 = super._getCacheCanvasDimensions(), e3 = this.fontSize;
    return t2.width += e3 * t2.zoomX, t2.height += e3 * t2.zoomY, t2;
  }
  _render(t2) {
    const e3 = this.path;
    e3 && !e3.isNotVisible() && e3._render(t2), this._setTextStyles(t2), this._renderTextLinesBackground(t2), this._renderTextDecoration(t2, "underline"), this._renderText(t2), this._renderTextDecoration(t2, "overline"), this._renderTextDecoration(t2, "linethrough");
  }
  _renderText(t2) {
    this.paintFirst === N ? (this._renderTextStroke(t2), this._renderTextFill(t2)) : (this._renderTextFill(t2), this._renderTextStroke(t2));
  }
  _setTextStyles(t2, e3, s2) {
    if (t2.textBaseline = "alphabetic", this.path) switch (this.pathAlign) {
      case T:
        t2.textBaseline = "middle";
        break;
      case "ascender":
        t2.textBaseline = k;
        break;
      case "descender":
        t2.textBaseline = D;
    }
    t2.font = this._getFontDeclaration(e3, s2);
  }
  calcTextWidth() {
    let t2 = this.getLineWidth(0);
    for (let e3 = 1, s2 = this._textLines.length; e3 < s2; e3++) {
      const s3 = this.getLineWidth(e3);
      s3 > t2 && (t2 = s3);
    }
    return t2;
  }
  _renderTextLine(t2, e3, s2, i2, r2, n2) {
    this._renderChars(t2, e3, s2, i2, r2, n2);
  }
  _renderTextLinesBackground(t2) {
    if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor")) return;
    const e3 = t2.fillStyle, s2 = this._getLeftOffset();
    let i2 = this._getTopOffset();
    for (let e4 = 0, r2 = this._textLines.length; e4 < r2; e4++) {
      const r3 = this.getHeightOfLine(e4);
      if (!this.textBackgroundColor && !this.styleHas("textBackgroundColor", e4)) {
        i2 += r3;
        continue;
      }
      const n2 = this._textLines[e4].length, o2 = this._getLineLeftOffset(e4);
      let a2, h2, l2 = 0, c2 = 0, u2 = this.getValueOfPropertyAt(e4, 0, "textBackgroundColor");
      const d2 = this.getHeightOfLineImpl(e4);
      for (let r4 = 0; r4 < n2; r4++) {
        const n3 = this.__charBounds[e4][r4];
        h2 = this.getValueOfPropertyAt(e4, r4, "textBackgroundColor"), this.path ? (t2.save(), t2.translate(n3.renderLeft, n3.renderTop), t2.rotate(n3.angle), t2.fillStyle = h2, h2 && t2.fillRect(-n3.width / 2, -d2 * (1 - this._fontSizeFraction), n3.width, d2), t2.restore()) : h2 !== u2 ? (a2 = s2 + o2 + c2, this.direction === K && (a2 = this.width - a2 - l2), t2.fillStyle = u2, u2 && t2.fillRect(a2, i2, l2, d2), c2 = n3.left, l2 = n3.width, u2 = h2) : l2 += n3.kernedWidth;
      }
      h2 && !this.path && (a2 = s2 + o2 + c2, this.direction === K && (a2 = this.width - a2 - l2), t2.fillStyle = h2, t2.fillRect(a2, i2, l2, d2)), i2 += r3;
    }
    t2.fillStyle = e3, this._removeShadow(t2);
  }
  _measureChar(t2, e3, s2, i2) {
    const r2 = p.getFontCache(e3), n2 = this._getFontDeclaration(e3), o2 = s2 ? s2 + t2 : t2, a2 = s2 && n2 === this._getFontDeclaration(i2), h2 = e3.fontSize / this.CACHE_FONT_SIZE;
    let l2, c2, u2, d2;
    if (s2 && r2.has(s2) && (u2 = r2.get(s2)), r2.has(t2) && (d2 = l2 = r2.get(t2)), a2 && r2.has(o2) && (c2 = r2.get(o2), d2 = c2 - u2), void 0 === l2 || void 0 === u2 || void 0 === c2) {
      const i3 = (function() {
        if (!uo) {
          const t3 = vt({ width: 0, height: 0 });
          uo = t3.getContext("2d");
        }
        return uo;
      })();
      this._setTextStyles(i3, e3, true), void 0 === l2 && (d2 = l2 = i3.measureText(t2).width, r2.set(t2, l2)), void 0 === u2 && a2 && s2 && (u2 = i3.measureText(s2).width, r2.set(s2, u2)), a2 && void 0 === c2 && (c2 = i3.measureText(o2).width, r2.set(o2, c2), d2 = c2 - u2);
    }
    return { width: l2 * h2, kernedWidth: d2 * h2 };
  }
  getHeightOfChar(t2, e3) {
    return this.getValueOfPropertyAt(t2, e3, "fontSize");
  }
  measureLine(t2) {
    const e3 = this._measureLine(t2);
    return 0 !== this.charSpacing && (e3.width -= this._getWidthOfCharSpacing()), e3.width < 0 && (e3.width = 0), e3;
  }
  _measureLine(t2) {
    let e3, s2, i2 = 0;
    const r2 = this.pathSide === M, n2 = this.path, o2 = this._textLines[t2], a2 = o2.length, h2 = new Array(a2);
    this.__charBounds[t2] = h2;
    for (let r3 = 0; r3 < a2; r3++) {
      const n3 = o2[r3];
      s2 = this._getGraphemeBox(n3, t2, r3, e3), h2[r3] = s2, i2 += s2.kernedWidth, e3 = n3;
    }
    if (h2[a2] = { left: s2 ? s2.left + s2.width : 0, width: 0, kernedWidth: 0, height: this.fontSize, deltaY: 0 }, n2 && n2.segmentsInfo) {
      let t3 = 0;
      const e4 = n2.segmentsInfo[n2.segmentsInfo.length - 1].length;
      switch (this.textAlign) {
        case O:
          t3 = r2 ? e4 - i2 : 0;
          break;
        case T:
          t3 = (e4 - i2) / 2;
          break;
        case M:
          t3 = r2 ? 0 : e4 - i2;
      }
      t3 += this.pathStartOffset * (r2 ? -1 : 1);
      for (let i3 = r2 ? a2 - 1 : 0; r2 ? i3 >= 0 : i3 < a2; r2 ? i3-- : i3++) s2 = h2[i3], t3 > e4 ? t3 %= e4 : t3 < 0 && (t3 += e4), this._setGraphemeOnPath(t3, s2), t3 += s2.kernedWidth;
    }
    return { width: i2, numOfSpaces: 0 };
  }
  _setGraphemeOnPath(t2, e3) {
    const s2 = t2 + e3.kernedWidth / 2, i2 = this.path, r2 = qr(i2.path, s2, i2.segmentsInfo);
    e3.renderLeft = r2.x - i2.pathOffset.x, e3.renderTop = r2.y - i2.pathOffset.y, e3.angle = r2.angle + (this.pathSide === M ? Math.PI : 0);
  }
  _getGraphemeBox(t2, e3, s2, i2, r2) {
    const n2 = this.getCompleteStyleDeclaration(e3, s2), o2 = i2 ? this.getCompleteStyleDeclaration(e3, s2 - 1) : {}, a2 = this._measureChar(t2, n2, i2, o2);
    let h2, l2 = a2.kernedWidth, c2 = a2.width;
    0 !== this.charSpacing && (h2 = this._getWidthOfCharSpacing(), c2 += h2, l2 += h2);
    const u2 = { width: c2, left: 0, height: n2.fontSize, kernedWidth: l2, deltaY: n2.deltaY };
    if (s2 > 0 && !r2) {
      const t3 = this.__charBounds[e3][s2 - 1];
      u2.left = t3.left + t3.width + a2.kernedWidth - a2.width;
    }
    return u2;
  }
  getHeightOfLineImpl(t2) {
    const e3 = this.__lineHeights;
    if (e3[t2]) return e3[t2];
    let s2 = this.getHeightOfChar(t2, 0);
    for (let e4 = 1, i2 = this._textLines[t2].length; e4 < i2; e4++) s2 = Math.max(this.getHeightOfChar(t2, e4), s2);
    return e3[t2] = s2 * this._fontSizeMult;
  }
  getHeightOfLine(t2) {
    return this.getHeightOfLineImpl(t2) * this.lineHeight;
  }
  calcTextHeight() {
    let t2 = 0;
    for (let e3 = 0, s2 = this._textLines.length; e3 < s2; e3++) t2 += e3 === s2 - 1 ? this.getHeightOfLineImpl(e3) : this.getHeightOfLine(e3);
    return t2;
  }
  _getLeftOffset() {
    return this.direction === q ? -this.width / 2 : this.width / 2;
  }
  _getTopOffset() {
    return -this.height / 2;
  }
  _renderTextCommon(t2, e3) {
    t2.save();
    let s2 = 0;
    const i2 = this._getLeftOffset(), r2 = this._getTopOffset();
    for (let n2 = 0, o2 = this._textLines.length; n2 < o2; n2++) this._renderTextLine(e3, t2, this._textLines[n2], i2 + this._getLineLeftOffset(n2), r2 + s2 + this.getHeightOfLineImpl(n2), n2), s2 += this.getHeightOfLine(n2);
    t2.restore();
  }
  _renderTextFill(t2) {
    (this.fill || this.styleHas(H)) && this._renderTextCommon(t2, "fillText");
  }
  _renderTextStroke(t2) {
    (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t2), t2.save(), this._setLineDash(t2, this.strokeDashArray), t2.beginPath(), this._renderTextCommon(t2, "strokeText"), t2.closePath(), t2.restore());
  }
  _renderChars(t2, e3, s2, i2, r2, n2) {
    const o2 = this.textAlign.includes(rs), a2 = this.path, h2 = !o2 && 0 === this.charSpacing && this.isEmptyStyles(n2) && !a2, l2 = this.direction === q, c2 = this.direction === q ? 1 : -1, u2 = e3.direction;
    let d2, g2, f2, p2, m2, v2 = "", y2 = 0;
    if (e3.save(), u2 !== this.direction && (e3.canvas.setAttribute("dir", l2 ? q : K), e3.direction = l2 ? q : K, e3.textAlign = l2 ? O : M), r2 -= this.getHeightOfLineImpl(n2) * this._fontSizeFraction, h2) return this._renderChar(t2, e3, n2, 0, s2.join(""), i2, r2), void e3.restore();
    for (let h3 = 0, l3 = s2.length - 1; h3 <= l3; h3++) p2 = h3 === l3 || this.charSpacing || a2, v2 += s2[h3], f2 = this.__charBounds[n2][h3], 0 === y2 ? (i2 += c2 * (f2.kernedWidth - f2.width), y2 += f2.width) : y2 += f2.kernedWidth, o2 && !p2 && this._reSpaceAndTab.test(s2[h3]) && (p2 = true), p2 || (d2 = d2 || this.getCompleteStyleDeclaration(n2, h3), g2 = this.getCompleteStyleDeclaration(n2, h3 + 1), p2 = Yi(d2, g2, false)), p2 && (a2 ? (e3.save(), e3.translate(f2.renderLeft, f2.renderTop), e3.rotate(f2.angle), this._renderChar(t2, e3, n2, h3, v2, -y2 / 2, 0), e3.restore()) : (m2 = i2, this._renderChar(t2, e3, n2, h3, v2, m2, r2)), v2 = "", d2 = g2, i2 += c2 * y2, y2 = 0);
    e3.restore();
  }
  _applyPatternGradientTransformText(t2) {
    const e3 = this.width + this.strokeWidth, s2 = this.height + this.strokeWidth, i2 = vt({ width: e3, height: s2 }), r2 = i2.getContext("2d");
    return i2.width = e3, i2.height = s2, r2.beginPath(), r2.moveTo(0, 0), r2.lineTo(e3, 0), r2.lineTo(e3, s2), r2.lineTo(0, s2), r2.closePath(), r2.translate(e3 / 2, s2 / 2), r2.fillStyle = t2.toLive(r2), this._applyPatternGradientTransform(r2, t2), r2.fill(), r2.createPattern(i2, "no-repeat");
  }
  handleFiller(t2, e3, s2) {
    let i2, r2;
    return Gt(s2) ? "percentage" === s2.gradientUnits || s2.gradientTransform || s2.patternTransform ? (i2 = -this.width / 2, r2 = -this.height / 2, t2.translate(i2, r2), t2[e3] = this._applyPatternGradientTransformText(s2), { offsetX: i2, offsetY: r2 }) : (t2[e3] = s2.toLive(t2), this._applyPatternGradientTransform(t2, s2)) : (t2[e3] = s2, { offsetX: 0, offsetY: 0 });
  }
  _setStrokeStyles(t2, e3) {
    let { stroke: s2, strokeWidth: i2 } = e3;
    return t2.lineWidth = i2, t2.lineCap = this.strokeLineCap, t2.lineDashOffset = this.strokeDashOffset, t2.lineJoin = this.strokeLineJoin, t2.miterLimit = this.strokeMiterLimit, this.handleFiller(t2, "strokeStyle", s2);
  }
  _setFillStyles(t2, e3) {
    let { fill: s2 } = e3;
    return this.handleFiller(t2, "fillStyle", s2);
  }
  _renderChar(t2, e3, s2, i2, r2, n2, o2) {
    const a2 = this._getStyleDeclaration(s2, i2), h2 = this.getCompleteStyleDeclaration(s2, i2), l2 = "fillText" === t2 && h2.fill, c2 = "strokeText" === t2 && h2.stroke && h2.strokeWidth;
    if (c2 || l2) {
      if (e3.save(), e3.font = this._getFontDeclaration(h2), a2.textBackgroundColor && this._removeShadow(e3), a2.deltaY && (o2 += a2.deltaY), l2) {
        const t3 = this._setFillStyles(e3, h2);
        e3.fillText(r2, n2 - t3.offsetX, o2 - t3.offsetY);
      }
      if (c2) {
        const t3 = this._setStrokeStyles(e3, h2);
        e3.strokeText(r2, n2 - t3.offsetX, o2 - t3.offsetY);
      }
      e3.restore();
    }
  }
  setSuperscript(t2, e3) {
    this._setScript(t2, e3, this.superscript);
  }
  setSubscript(t2, e3) {
    this._setScript(t2, e3, this.subscript);
  }
  _setScript(t2, e3, s2) {
    const i2 = this.get2DCursorLocation(t2, true), r2 = this.getValueOfPropertyAt(i2.lineIndex, i2.charIndex, "fontSize"), n2 = this.getValueOfPropertyAt(i2.lineIndex, i2.charIndex, "deltaY"), o2 = { fontSize: r2 * s2.size, deltaY: n2 + r2 * s2.baseline };
    this.setSelectionStyles(o2, t2, e3);
  }
  _getLineLeftOffset(t2) {
    const e3 = this.getLineWidth(t2), s2 = this.width - e3, i2 = this.textAlign, r2 = this.direction, n2 = this.isEndOfWrapping(t2);
    let o2 = 0;
    return i2 === rs || i2 === as && !n2 || i2 === os && !n2 || i2 === ns && !n2 ? 0 : (i2 === T && (o2 = s2 / 2), i2 === M && (o2 = s2), i2 === as && (o2 = s2 / 2), i2 === os && (o2 = s2), r2 === K && (i2 === M || i2 === os ? o2 = 0 : i2 === O || i2 === ns ? o2 = -s2 : i2 !== T && i2 !== as || (o2 = -s2 / 2)), o2);
  }
  _clearCache() {
    this._forceClearCache = false, this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
  }
  getLineWidth(t2) {
    if (void 0 !== this.__lineWidths[t2]) return this.__lineWidths[t2];
    const { width: e3 } = this.measureLine(t2);
    return this.__lineWidths[t2] = e3, e3;
  }
  _getWidthOfCharSpacing() {
    return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0;
  }
  getValueOfPropertyAt(t2, e3, s2) {
    var i2;
    return null !== (i2 = this._getStyleDeclaration(t2, e3)[s2]) && void 0 !== i2 ? i2 : this[s2];
  }
  _renderTextDecoration(t2, e3) {
    if (!this[e3] && !this.styleHas(e3)) return;
    let s2 = this._getTopOffset();
    const i2 = this._getLeftOffset(), r2 = this.path, n2 = this._getWidthOfCharSpacing(), o2 = "linethrough" === e3 ? 0.5 : "overline" === e3 ? 1 : 0, a2 = this.offsets[e3];
    for (let h2 = 0, l2 = this._textLines.length; h2 < l2; h2++) {
      const l3 = this.getHeightOfLine(h2);
      if (!this[e3] && !this.styleHas(e3, h2)) {
        s2 += l3;
        continue;
      }
      const c2 = this._textLines[h2], u2 = l3 / this.lineHeight, d2 = this._getLineLeftOffset(h2);
      let g2 = 0, f2 = 0, p2 = this.getValueOfPropertyAt(h2, 0, e3), m2 = this.getValueOfPropertyAt(h2, 0, H), v2 = this.getValueOfPropertyAt(h2, 0, Je), y2 = p2, _2 = m2, x2 = v2;
      const C2 = s2 + u2 * (1 - this._fontSizeFraction);
      let b2 = this.getHeightOfChar(h2, 0), S2 = this.getValueOfPropertyAt(h2, 0, "deltaY");
      for (let s3 = 0, n3 = c2.length; s3 < n3; s3++) {
        const n4 = this.__charBounds[h2][s3];
        y2 = this.getValueOfPropertyAt(h2, s3, e3), _2 = this.getValueOfPropertyAt(h2, s3, H), x2 = this.getValueOfPropertyAt(h2, s3, Je);
        const l4 = this.getHeightOfChar(h2, s3), c3 = this.getValueOfPropertyAt(h2, s3, "deltaY");
        if (r2 && y2 && _2) {
          const e4 = this.fontSize * x2 / 1e3;
          t2.save(), t2.fillStyle = m2, t2.translate(n4.renderLeft, n4.renderTop), t2.rotate(n4.angle), t2.fillRect(-n4.kernedWidth / 2, a2 * l4 + c3 - o2 * e4, n4.kernedWidth, e4), t2.restore();
        } else if ((y2 !== p2 || _2 !== m2 || l4 !== b2 || x2 !== v2 || c3 !== S2) && f2 > 0) {
          const e4 = this.fontSize * v2 / 1e3;
          let s4 = i2 + d2 + g2;
          this.direction === K && (s4 = this.width - s4 - f2), p2 && m2 && v2 && (t2.fillStyle = m2, t2.fillRect(s4, C2 + a2 * b2 + S2 - o2 * e4, f2, e4)), g2 = n4.left, f2 = n4.width, p2 = y2, v2 = x2, m2 = _2, b2 = l4, S2 = c3;
        } else f2 += n4.kernedWidth;
      }
      let w2 = i2 + d2 + g2;
      this.direction === K && (w2 = this.width - w2 - f2), t2.fillStyle = _2;
      const T2 = this.fontSize * x2 / 1e3;
      y2 && _2 && x2 && t2.fillRect(w2, C2 + a2 * b2 + S2 - o2 * T2, f2 - n2, T2), s2 += l3;
    }
    this._removeShadow(t2);
  }
  _getFontDeclaration() {
    let { fontFamily: t2 = this.fontFamily, fontStyle: e3 = this.fontStyle, fontWeight: s2 = this.fontWeight, fontSize: i2 = this.fontSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = arguments.length > 1 ? arguments[1] : void 0;
    const n2 = t2.includes("'") || t2.includes('"') || t2.includes(",") || _go.genericFonts.includes(t2.toLowerCase()) ? t2 : `"${t2}"`;
    return [e3, s2, `${r2 ? this.CACHE_FONT_SIZE : i2}px`, n2].join(" ");
  }
  render(t2) {
    this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._forceClearCache && this.initDimensions(), super.render(t2)));
  }
  graphemeSplit(t2) {
    return Ri(t2);
  }
  _splitTextIntoLines(t2) {
    const e3 = t2.split(this._reNewline), s2 = new Array(e3.length), i2 = ["\n"];
    let r2 = [];
    for (let t3 = 0; t3 < e3.length; t3++) s2[t3] = this.graphemeSplit(e3[t3]), r2 = r2.concat(s2[t3], i2);
    return r2.pop(), { _unwrappedLines: s2, lines: e3, graphemeText: r2, graphemeLines: s2 };
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return { ...super.toObject([...es, ...t2]), styles: Wi(this.styles, this.text), ...this.path ? { path: this.path.toObject() } : {} };
  }
  set(t2, e3) {
    const { textLayoutProperties: s2 } = this.constructor;
    super.set(t2, e3);
    let i2 = false, r2 = false;
    if ("object" == typeof t2) for (const e4 in t2) "path" === e4 && this.setPathInfo(), i2 = i2 || s2.includes(e4), r2 = r2 || "path" === e4;
    else i2 = s2.includes(t2), r2 = "path" === t2;
    return r2 && this.setPathInfo(), i2 && this.initialized && (this.initDimensions(), this.setCoords()), this;
  }
  complexity() {
    return 1;
  }
  static async fromElement(t2, e3, s2) {
    const i2 = gr(t2, _go.ATTRIBUTE_NAMES, s2), { textAnchor: r2 = O, textDecoration: n2 = "", dx: o2 = 0, dy: a2 = 0, top: h2 = 0, left: l2 = 0, fontSize: c2 = S, strokeWidth: u2 = 1, ...d2 } = { ...e3, ...i2 }, g2 = new this(Be(t2.textContent || "").trim(), { left: l2 + o2, top: h2 + a2, underline: n2.includes("underline"), overline: n2.includes("overline"), linethrough: n2.includes("line-through"), strokeWidth: 0, fontSize: c2, ...d2 }), f2 = g2.getScaledHeight() / g2.height, p2 = ((g2.height + g2.strokeWidth) * g2.lineHeight - g2.height) * f2, m2 = g2.getScaledHeight() + p2;
    let v2 = 0;
    return r2 === T && (v2 = g2.getScaledWidth() / 2), r2 === M && (v2 = g2.getScaledWidth()), g2.set({ left: g2.left - v2, top: g2.top - (m2 - g2.fontSize * (0.07 + g2._fontSizeFraction)) / g2.lineHeight, strokeWidth: u2 }), g2;
  }
  static fromObject(t2) {
    return this._fromObject({ ...t2, styles: Vi(t2.styles || {}, t2.text) }, { extraParam: "text" });
  }
};
t(go, "textLayoutProperties", ts), t(go, "cacheProperties", [...ws, ...es]), t(go, "ownDefaults", is), t(go, "type", "Text"), t(go, "genericFonts", ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded", "math", "emoji", "fangsong"]), t(go, "ATTRIBUTE_NAMES", Gi.concat("x", "y", "dx", "dy", "font-family", "font-style", "font-weight", "font-size", "letter-spacing", "text-decoration", "text-anchor")), Oi(go, [class extends qe {
  _toSVG() {
    const t2 = this._getSVGLeftTopOffsets(), e3 = this._getSVGTextAndBg(t2.textTop, t2.textLeft);
    return this._wrapSVGTextAndBg(e3);
  }
  toSVG(t2) {
    const e3 = this._createBaseSVGMarkup(this._toSVG(), { reviver: t2, noStyle: true, withShadow: true }), s2 = this.path;
    return s2 ? e3 + s2._createBaseSVGMarkup(s2._toSVG(), { reviver: t2, withShadow: true, additionalTransform: Vt(this.calcOwnMatrix()) }) : e3;
  }
  _getSVGLeftTopOffsets() {
    return { textLeft: -this.width / 2, textTop: -this.height / 2, lineTop: this.getHeightOfLine(0) };
  }
  _wrapSVGTextAndBg(t2) {
    let { textBgRects: e3, textSpans: s2 } = t2;
    const i2 = this.getSvgTextDecoration(this);
    return [e3.join(""), '		<text xml:space="preserve" ', `font-family="${this.fontFamily.replace(lo, "'")}" `, `font-size="${this.fontSize}" `, this.fontStyle ? `font-style="${this.fontStyle}" ` : "", this.fontWeight ? `font-weight="${this.fontWeight}" ` : "", i2 ? `text-decoration="${i2}" ` : "", "rtl" === this.direction ? `direction="${this.direction}" ` : "", 'style="', this.getSvgStyles(true), '"', this.addPaintOrder(), " >", s2.join(""), "</text>\n"];
  }
  _getSVGTextAndBg(t2, e3) {
    const s2 = [], i2 = [];
    let r2, n2 = t2;
    this.backgroundColor && i2.push(...co(this.backgroundColor, -this.width / 2, -this.height / 2, this.width, this.height));
    for (let t3 = 0, o2 = this._textLines.length; t3 < o2; t3++) r2 = this._getLineLeftOffset(t3), "rtl" === this.direction && (r2 += this.width), (this.textBackgroundColor || this.styleHas("textBackgroundColor", t3)) && this._setSVGTextLineBg(i2, t3, e3 + r2, n2), this._setSVGTextLineText(s2, t3, e3 + r2, n2), n2 += this.getHeightOfLine(t3);
    return { textSpans: s2, textBgRects: i2 };
  }
  _createTextCharSpan(t2, e3, i2, r2, n2) {
    const o2 = s.NUM_FRACTION_DIGITS, a2 = this.getSvgSpanStyles(e3, t2 !== t2.trim() || !!t2.match(ho)), h2 = a2 ? `style="${a2}"` : "", l2 = e3.deltaY, c2 = l2 ? ` dy="${Wt(l2, o2)}" ` : "", { angle: u2, renderLeft: d2, renderTop: g2, width: f2 } = n2;
    let p2 = "";
    if (void 0 !== d2) {
      const t3 = f2 / 2;
      u2 && (p2 = ` rotate="${Wt(Ct(u2), o2)}"`);
      const e4 = Et({ angle: Ct(u2) });
      e4[4] = d2, e4[5] = g2;
      const s2 = new ot(-t3, 0).transform(e4);
      i2 = s2.x, r2 = s2.y;
    }
    return `<tspan x="${Wt(i2, o2)}" y="${Wt(r2, o2)}" ${c2}${p2}${h2}>${Li(t2)}</tspan>`;
  }
  _setSVGTextLineText(t2, e3, s2, i2) {
    const r2 = this.getHeightOfLine(e3), n2 = this.textAlign.includes(rs), o2 = this._textLines[e3];
    let a2, h2, l2, c2, u2, d2 = "", g2 = 0;
    i2 += r2 * (1 - this._fontSizeFraction) / this.lineHeight;
    for (let r3 = 0, f2 = o2.length - 1; r3 <= f2; r3++) u2 = r3 === f2 || this.charSpacing || this.path, d2 += o2[r3], l2 = this.__charBounds[e3][r3], 0 === g2 ? (s2 += l2.kernedWidth - l2.width, g2 += l2.width) : g2 += l2.kernedWidth, n2 && !u2 && this._reSpaceAndTab.test(o2[r3]) && (u2 = true), u2 || (a2 = a2 || this.getCompleteStyleDeclaration(e3, r3), h2 = this.getCompleteStyleDeclaration(e3, r3 + 1), u2 = Yi(a2, h2, true)), u2 && (c2 = this._getStyleDeclaration(e3, r3), t2.push(this._createTextCharSpan(d2, c2, s2, i2, l2)), d2 = "", a2 = h2, "rtl" === this.direction ? s2 -= g2 : s2 += g2, g2 = 0);
  }
  _setSVGTextLineBg(t2, e3, s2, i2) {
    const r2 = this._textLines[e3], n2 = this.getHeightOfLine(e3) / this.lineHeight;
    let o2, a2 = 0, h2 = 0, l2 = this.getValueOfPropertyAt(e3, 0, "textBackgroundColor");
    for (let c2 = 0; c2 < r2.length; c2++) {
      const { left: r3, width: u2, kernedWidth: d2 } = this.__charBounds[e3][c2];
      o2 = this.getValueOfPropertyAt(e3, c2, "textBackgroundColor"), o2 !== l2 ? (l2 && t2.push(...co(l2, s2 + h2, i2, a2, n2)), h2 = r3, a2 = u2, l2 = o2) : a2 += d2;
    }
    o2 && t2.push(...co(l2, s2 + h2, i2, a2, n2));
  }
  getSvgStyles(t2) {
    return `${super.getSvgStyles(t2)} text-decoration-thickness: ${Wt(this.textDecorationThickness * this.getObjectScaling().y / 10, s.NUM_FRACTION_DIGITS)}%; white-space: pre;`;
  }
  getSvgSpanStyles(t2, e3) {
    const { fontFamily: i2, strokeWidth: r2, stroke: n2, fill: o2, fontSize: a2, fontStyle: h2, fontWeight: l2, textDecorationThickness: c2, linethrough: u2, overline: d2, underline: g2 } = t2, f2 = this.getSvgTextDecoration({ underline: null != g2 ? g2 : this.underline, overline: null != d2 ? d2 : this.overline, linethrough: null != u2 ? u2 : this.linethrough }), p2 = c2 || this.textDecorationThickness;
    return [n2 ? Ue(N, n2) : "", r2 ? `stroke-width: ${r2}; ` : "", i2 ? `font-family: ${i2.includes("'") || i2.includes('"') ? i2 : `'${i2}'`}; ` : "", a2 ? `font-size: ${a2}px; ` : "", h2 ? `font-style: ${h2}; ` : "", l2 ? `font-weight: ${l2}; ` : "", f2 ? `text-decoration: ${f2}; text-decoration-thickness: ${Wt(p2 * this.getObjectScaling().y / 10, s.NUM_FRACTION_DIGITS)}%; ` : "", o2 ? Ue(H, o2) : "", e3 ? "white-space: pre; " : ""].join("");
  }
  getSvgTextDecoration(t2) {
    return ["overline", "underline", "line-through"].filter((e3) => t2[e3.replace("-", "")]).join(" ");
  }
}]), tt.setClass(go), tt.setSVGClass(go);
var fo = class {
  constructor(e3) {
    t(this, "target", void 0), t(this, "__mouseDownInPlace", false), t(this, "__dragStartFired", false), t(this, "__isDraggingOver", false), t(this, "__dragStartSelection", void 0), t(this, "__dragImageDisposer", void 0), t(this, "_dispose", void 0), this.target = e3;
    const s2 = [this.target.on("dragenter", this.dragEnterHandler.bind(this)), this.target.on("dragover", this.dragOverHandler.bind(this)), this.target.on("dragleave", this.dragLeaveHandler.bind(this)), this.target.on("dragend", this.dragEndHandler.bind(this)), this.target.on("drop", this.dropHandler.bind(this))];
    this._dispose = () => {
      s2.forEach((t2) => t2()), this._dispose = void 0;
    };
  }
  isPointerOverSelection(t2) {
    const e3 = this.target, s2 = e3.getSelectionStartFromPointer(t2);
    return e3.isEditing && s2 >= e3.selectionStart && s2 <= e3.selectionEnd && e3.selectionStart < e3.selectionEnd;
  }
  start(t2) {
    return this.__mouseDownInPlace = this.isPointerOverSelection(t2);
  }
  isActive() {
    return this.__mouseDownInPlace;
  }
  end(t2) {
    const e3 = this.isActive();
    return e3 && !this.__dragStartFired && (this.target.setCursorByClick(t2), this.target.initDelayedCursor(true)), this.__mouseDownInPlace = false, this.__dragStartFired = false, this.__isDraggingOver = false, e3;
  }
  getDragStartSelection() {
    return this.__dragStartSelection;
  }
  setDragImage(t2, e3) {
    var s2;
    let { selectionStart: i2, selectionEnd: r2 } = e3;
    const n2 = this.target, o2 = n2.canvas, a2 = new ot(n2.flipX ? -1 : 1, n2.flipY ? -1 : 1), h2 = n2._getCursorBoundaries(i2), l2 = new ot(h2.left + h2.leftOffset, h2.top + h2.topOffset).multiply(a2).transform(n2.calcTransformMatrix()), c2 = o2.getScenePoint(t2).subtract(l2), u2 = n2.getCanvasRetinaScaling(), d2 = n2.getBoundingRect(), g2 = l2.subtract(new ot(d2.left, d2.top)), f2 = o2.viewportTransform, p2 = g2.add(c2).transform(f2, true), m2 = n2.backgroundColor, v2 = Fi(n2.styles);
    n2.backgroundColor = "";
    const y2 = { stroke: "transparent", fill: "transparent", textBackgroundColor: "transparent" };
    n2.setSelectionStyles(y2, 0, i2), n2.setSelectionStyles(y2, r2, n2.text.length), n2.dirty = true;
    const _2 = n2.toCanvasElement({ enableRetinaScaling: o2.enableRetinaScaling, viewportTransform: true });
    n2.backgroundColor = m2, n2.styles = v2, n2.dirty = true, an(_2, { position: "fixed", left: -_2.width + "px", border: E, width: _2.width / u2 + "px", height: _2.height / u2 + "px" }), this.__dragImageDisposer && this.__dragImageDisposer(), this.__dragImageDisposer = () => {
      _2.remove();
    }, qt(t2.target || this.target.hiddenTextarea).body.appendChild(_2), null === (s2 = t2.dataTransfer) || void 0 === s2 || s2.setDragImage(_2, p2.x, p2.y);
  }
  onDragStart(t2) {
    this.__dragStartFired = true;
    const e3 = this.target, s2 = this.isActive();
    if (s2 && t2.dataTransfer) {
      const s3 = this.__dragStartSelection = { selectionStart: e3.selectionStart, selectionEnd: e3.selectionEnd }, i2 = e3._text.slice(s3.selectionStart, s3.selectionEnd).join(""), r2 = { text: e3.text, value: i2, ...s3 };
      t2.dataTransfer.setData("text/plain", i2), t2.dataTransfer.setData("application/fabric", JSON.stringify({ value: i2, styles: e3.getSelectionStyles(s3.selectionStart, s3.selectionEnd, true) })), t2.dataTransfer.effectAllowed = "copyMove", this.setDragImage(t2, r2);
    }
    return e3.abortCursorAnimation(), s2;
  }
  canDrop(t2) {
    if (this.target.editable && !this.target.getActiveControl() && !t2.defaultPrevented) {
      if (this.isActive() && this.__dragStartSelection) {
        const e3 = this.target.getSelectionStartFromPointer(t2), s2 = this.__dragStartSelection;
        return e3 < s2.selectionStart || e3 > s2.selectionEnd;
      }
      return true;
    }
    return false;
  }
  targetCanDrop(t2) {
    return this.target.canDrop(t2);
  }
  dragEnterHandler(t2) {
    let { e: e3 } = t2;
    const s2 = this.targetCanDrop(e3);
    !this.__isDraggingOver && s2 && (this.__isDraggingOver = true);
  }
  dragOverHandler(t2) {
    const { e: e3 } = t2, s2 = this.targetCanDrop(e3);
    !this.__isDraggingOver && s2 ? this.__isDraggingOver = true : this.__isDraggingOver && !s2 && (this.__isDraggingOver = false), this.__isDraggingOver && (e3.preventDefault(), t2.canDrop = true, t2.dropTarget = this.target);
  }
  dragLeaveHandler() {
    (this.__isDraggingOver || this.isActive()) && (this.__isDraggingOver = false);
  }
  dropHandler(t2) {
    var e3;
    const { e: s2 } = t2, i2 = s2.defaultPrevented;
    this.__isDraggingOver = false, s2.preventDefault();
    let r2 = null === (e3 = s2.dataTransfer) || void 0 === e3 ? void 0 : e3.getData("text/plain");
    if (r2 && !i2) {
      const e4 = this.target, i3 = e4.canvas;
      let n2 = e4.getSelectionStartFromPointer(s2);
      const { styles: o2 } = s2.dataTransfer.types.includes("application/fabric") ? JSON.parse(s2.dataTransfer.getData("application/fabric")) : {}, a2 = r2[Math.max(0, r2.length - 1)], h2 = 0;
      if (this.__dragStartSelection) {
        const t3 = this.__dragStartSelection.selectionStart, s3 = this.__dragStartSelection.selectionEnd;
        n2 > t3 && n2 <= s3 ? n2 = t3 : n2 > s3 && (n2 -= s3 - t3), e4.removeChars(t3, s3), delete this.__dragStartSelection;
      }
      e4._reNewline.test(a2) && (e4._reNewline.test(e4._text[n2]) || n2 === e4._text.length) && (r2 = r2.trimEnd()), t2.didDrop = true, t2.dropTarget = e4, e4.insertChars(r2, o2, n2), i3.setActiveObject(e4), e4.enterEditing(s2), e4.selectionStart = Math.min(n2 + h2, e4._text.length), e4.selectionEnd = Math.min(e4.selectionStart + r2.length, e4._text.length), e4.hiddenTextarea.value = e4.text, e4._updateTextarea(), e4.hiddenTextarea.focus(), e4.fire(X, { index: n2 + h2, action: "drop" }), i3.fire("text:changed", { target: e4 }), i3.contextTopDirty = true, i3.requestRenderAll();
    }
  }
  dragEndHandler(t2) {
    let { e: e3 } = t2;
    if (this.isActive() && this.__dragStartFired && this.__dragStartSelection) {
      var s2;
      const t3 = this.target, i2 = this.target.canvas, { selectionStart: r2, selectionEnd: n2 } = this.__dragStartSelection, o2 = (null === (s2 = e3.dataTransfer) || void 0 === s2 ? void 0 : s2.dropEffect) || E;
      o2 === E ? (t3.selectionStart = r2, t3.selectionEnd = n2, t3._updateTextarea(), t3.hiddenTextarea.focus()) : (t3.clearContextTop(), "move" === o2 && (t3.removeChars(r2, n2), t3.selectionStart = t3.selectionEnd = r2, t3.hiddenTextarea && (t3.hiddenTextarea.value = t3.text), t3._updateTextarea(), t3.fire(X, { index: r2, action: "dragend" }), i2.fire("text:changed", { target: t3 }), i2.requestRenderAll()), t3.exitEditing());
    }
    this.__dragImageDisposer && this.__dragImageDisposer(), delete this.__dragImageDisposer, delete this.__dragStartSelection, this.__isDraggingOver = false;
  }
  dispose() {
    this._dispose && this._dispose();
  }
};
var po = /[ \n\.,;!\?\-]/;
var mo = class extends go {
  constructor() {
    super(...arguments), t(this, "_currentCursorOpacity", 1);
  }
  initBehavior() {
    this._tick = this._tick.bind(this), this._onTickComplete = this._onTickComplete.bind(this), this.updateSelectionOnMouseMove = this.updateSelectionOnMouseMove.bind(this);
  }
  onDeselect(t2) {
    return this.isEditing && this.exitEditing(), this.selected = false, super.onDeselect(t2);
  }
  _animateCursor(t2) {
    let { toValue: e3, duration: s2, delay: i2, onComplete: r2 } = t2;
    return $s({ startValue: this._currentCursorOpacity, endValue: e3, duration: s2, delay: i2, onComplete: r2, abort: () => !this.canvas || this.selectionStart !== this.selectionEnd, onChange: (t3) => {
      this._currentCursorOpacity = t3, this.renderCursorOrSelection();
    } });
  }
  _tick(t2) {
    this._currentTickState = this._animateCursor({ toValue: 0, duration: this.cursorDuration / 2, delay: Math.max(t2 || 0, 100), onComplete: this._onTickComplete });
  }
  _onTickComplete() {
    var t2;
    null === (t2 = this._currentTickCompleteState) || void 0 === t2 || t2.abort(), this._currentTickCompleteState = this._animateCursor({ toValue: 1, duration: this.cursorDuration, onComplete: this._tick });
  }
  initDelayedCursor(t2) {
    this.abortCursorAnimation(), this._tick(t2 ? 0 : this.cursorDelay);
  }
  abortCursorAnimation() {
    let t2 = false;
    [this._currentTickState, this._currentTickCompleteState].forEach((e3) => {
      e3 && !e3.isDone() && (t2 = true, e3.abort());
    }), this._currentCursorOpacity = 1, t2 && this.clearContextTop();
  }
  restartCursorIfNeeded() {
    [this._currentTickState, this._currentTickCompleteState].some((t2) => !t2 || t2.isDone()) && this.initDelayedCursor();
  }
  selectAll() {
    return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
  }
  cmdAll() {
    this.selectAll(), this.renderCursorOrSelection();
  }
  getSelectedText() {
    return this._text.slice(this.selectionStart, this.selectionEnd).join("");
  }
  findWordBoundaryLeft(t2) {
    let e3 = 0, s2 = t2 - 1;
    if (this._reSpace.test(this._text[s2])) for (; this._reSpace.test(this._text[s2]); ) e3++, s2--;
    for (; /\S/.test(this._text[s2]) && s2 > -1; ) e3++, s2--;
    return t2 - e3;
  }
  findWordBoundaryRight(t2) {
    let e3 = 0, s2 = t2;
    if (this._reSpace.test(this._text[s2])) for (; this._reSpace.test(this._text[s2]); ) e3++, s2++;
    for (; /\S/.test(this._text[s2]) && s2 < this._text.length; ) e3++, s2++;
    return t2 + e3;
  }
  findLineBoundaryLeft(t2) {
    let e3 = 0, s2 = t2 - 1;
    for (; !/\n/.test(this._text[s2]) && s2 > -1; ) e3++, s2--;
    return t2 - e3;
  }
  findLineBoundaryRight(t2) {
    let e3 = 0, s2 = t2;
    for (; !/\n/.test(this._text[s2]) && s2 < this._text.length; ) e3++, s2++;
    return t2 + e3;
  }
  searchWordBoundary(t2, e3) {
    const s2 = this._text;
    let i2 = t2 > 0 && this._reSpace.test(s2[t2]) && (-1 === e3 || !P.test(s2[t2 - 1])) ? t2 - 1 : t2, r2 = s2[i2];
    for (; i2 > 0 && i2 < s2.length && !po.test(r2); ) i2 += e3, r2 = s2[i2];
    return -1 === e3 && po.test(r2) && i2++, i2;
  }
  selectWord(t2) {
    t2 = null != t2 ? t2 : this.selectionStart;
    const e3 = this.searchWordBoundary(t2, -1), s2 = Math.max(e3, this.searchWordBoundary(t2, 1));
    this.selectionStart = e3, this.selectionEnd = s2, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
  }
  selectLine(t2) {
    t2 = null != t2 ? t2 : this.selectionStart;
    const e3 = this.findLineBoundaryLeft(t2), s2 = this.findLineBoundaryRight(t2);
    this.selectionStart = e3, this.selectionEnd = s2, this._fireSelectionChanged(), this._updateTextarea();
  }
  enterEditing(t2) {
    !this.isEditing && this.editable && (this.enterEditingImpl(), this.fire("editing:entered", t2 ? { e: t2 } : void 0), this._fireSelectionChanged(), this.canvas && (this.canvas.fire("text:editing:entered", { target: this, e: t2 }), this.canvas.requestRenderAll()));
  }
  enterEditingImpl() {
    this.canvas && (this.canvas.calcOffset(), this.canvas.textEditingManager.exitTextEditing()), this.isEditing = true, this.initHiddenTextarea(), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick();
  }
  updateSelectionOnMouseMove(t2) {
    if (this.getActiveControl()) return;
    const e3 = this.hiddenTextarea;
    qt(e3).activeElement !== e3 && e3.focus();
    const s2 = this.getSelectionStartFromPointer(t2), i2 = this.selectionStart, r2 = this.selectionEnd;
    (s2 === this.__selectionStartOnMouseDown && i2 !== r2 || i2 !== s2 && r2 !== s2) && (s2 > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = s2) : (this.selectionStart = s2, this.selectionEnd = this.__selectionStartOnMouseDown), this.selectionStart === i2 && this.selectionEnd === r2 || (this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
  }
  _setEditingProps() {
    this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = false, this.lockMovementX = this.lockMovementY = true;
  }
  fromStringToGraphemeSelection(t2, e3, s2) {
    const i2 = s2.slice(0, t2), r2 = this.graphemeSplit(i2).length;
    if (t2 === e3) return { selectionStart: r2, selectionEnd: r2 };
    const n2 = s2.slice(t2, e3);
    return { selectionStart: r2, selectionEnd: r2 + this.graphemeSplit(n2).length };
  }
  fromGraphemeToStringSelection(t2, e3, s2) {
    const i2 = s2.slice(0, t2).join("").length;
    if (t2 === e3) return { selectionStart: i2, selectionEnd: i2 };
    return { selectionStart: i2, selectionEnd: i2 + s2.slice(t2, e3).join("").length };
  }
  _updateTextarea() {
    if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
      if (!this.inCompositionMode) {
        const t2 = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
        this.hiddenTextarea.selectionStart = t2.selectionStart, this.hiddenTextarea.selectionEnd = t2.selectionEnd;
      }
      this.updateTextareaPosition();
    }
  }
  updateFromTextArea() {
    const { hiddenTextarea: t2, direction: e3, textAlign: s2, inCompositionMode: i2 } = this;
    if (!t2) return;
    const r2 = s2 !== rs ? s2.replace("justify-", "") : e3 === q ? O : M, n2 = this.getPositionByOrigin(r2, "top");
    this.cursorOffsetCache = {}, this.text = t2.value, this.set("dirty", true), this.initDimensions(), this.setPositionByOrigin(n2, r2, "top"), this.setCoords();
    const o2 = this.fromStringToGraphemeSelection(t2.selectionStart, t2.selectionEnd, t2.value);
    this.selectionEnd = this.selectionStart = o2.selectionEnd, i2 || (this.selectionStart = o2.selectionStart), this.updateTextareaPosition();
  }
  updateTextareaPosition() {
    if (this.selectionStart === this.selectionEnd) {
      const t2 = this._calcTextareaPosition();
      this.hiddenTextarea.style.left = t2.left, this.hiddenTextarea.style.top = t2.top;
    }
  }
  _calcTextareaPosition() {
    if (!this.canvas) return { left: "1px", top: "1px" };
    const t2 = this.inCompositionMode ? this.compositionStart : this.selectionStart, e3 = this._getCursorBoundaries(t2), s2 = this.get2DCursorLocation(t2), i2 = s2.lineIndex, r2 = s2.charIndex, n2 = this.getValueOfPropertyAt(i2, r2, "fontSize") * this.lineHeight, o2 = e3.leftOffset, a2 = this.getCanvasRetinaScaling(), h2 = this.canvas.upperCanvasEl, l2 = h2.width / a2, c2 = h2.height / a2, u2 = l2 - n2, d2 = c2 - n2, g2 = new ot(e3.left + o2, e3.top + e3.topOffset + n2).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new ot(h2.clientWidth / l2, h2.clientHeight / c2));
    return g2.x < 0 && (g2.x = 0), g2.x > u2 && (g2.x = u2), g2.y < 0 && (g2.y = 0), g2.y > d2 && (g2.y = d2), g2.x += this.canvas._offset.left, g2.y += this.canvas._offset.top, { left: `${g2.x}px`, top: `${g2.y}px`, fontSize: `${n2}px`, charHeight: n2 };
  }
  _saveEditingProps() {
    this._savedProps = { hasControls: this.hasControls, borderColor: this.borderColor, lockMovementX: this.lockMovementX, lockMovementY: this.lockMovementY, hoverCursor: this.hoverCursor, selectable: this.selectable, defaultCursor: this.canvas && this.canvas.defaultCursor, moveCursor: this.canvas && this.canvas.moveCursor };
  }
  _restoreEditingProps() {
    this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.selectable = this._savedProps.selectable, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor || this.canvas.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor || this.canvas.moveCursor), delete this._savedProps);
  }
  exitEditingImpl() {
    const t2 = this.hiddenTextarea;
    this.selected = false, this.isEditing = false, t2 && (t2.blur && t2.blur(), t2.parentNode && t2.parentNode.removeChild(t2)), this.hiddenTextarea = null, this.abortCursorAnimation(), this.selectionStart !== this.selectionEnd && this.clearContextTop(), this.selectionEnd = this.selectionStart, this._restoreEditingProps(), this._forceClearCache && (this.initDimensions(), this.setCoords());
  }
  exitEditing() {
    const t2 = this._textBeforeEdit !== this.text;
    return this.exitEditingImpl(), this.fire("editing:exited"), t2 && this.fire(U), this.canvas && (this.canvas.fire("text:editing:exited", { target: this }), t2 && this.canvas.fire("object:modified", { target: this })), this;
  }
  _removeExtraneousStyles() {
    for (const t2 in this.styles) this._textLines[t2] || delete this.styles[t2];
  }
  removeStyleFromTo(t2, e3) {
    const { lineIndex: s2, charIndex: i2 } = this.get2DCursorLocation(t2, true), { lineIndex: r2, charIndex: n2 } = this.get2DCursorLocation(e3, true);
    if (s2 !== r2) {
      if (this.styles[s2]) for (let t3 = i2; t3 < this._unwrappedTextLines[s2].length; t3++) delete this.styles[s2][t3];
      if (this.styles[r2]) for (let t3 = n2; t3 < this._unwrappedTextLines[r2].length; t3++) {
        const e4 = this.styles[r2][t3];
        e4 && (this.styles[s2] || (this.styles[s2] = {}), this.styles[s2][i2 + t3 - n2] = e4);
      }
      for (let t3 = s2 + 1; t3 <= r2; t3++) delete this.styles[t3];
      this.shiftLineStyles(r2, s2 - r2);
    } else if (this.styles[s2]) {
      const t3 = this.styles[s2], e4 = n2 - i2;
      for (let e5 = i2; e5 < n2; e5++) delete t3[e5];
      for (const i3 in this.styles[s2]) {
        const s3 = parseInt(i3, 10);
        s3 >= n2 && (t3[s3 - e4] = t3[i3], delete t3[i3]);
      }
    }
  }
  shiftLineStyles(t2, e3) {
    const s2 = Object.assign({}, this.styles);
    for (const i2 in this.styles) {
      const r2 = parseInt(i2, 10);
      r2 > t2 && (this.styles[r2 + e3] = s2[r2], s2[r2 - e3] || delete this.styles[r2]);
    }
  }
  insertNewlineStyleObject(t2, e3, s2, i2) {
    const r2 = {}, n2 = this._unwrappedTextLines[t2].length, o2 = n2 === e3;
    let a2 = false;
    s2 || (s2 = 1), this.shiftLineStyles(t2, s2);
    const h2 = this.styles[t2] ? this.styles[t2][0 === e3 ? e3 : e3 - 1] : void 0;
    for (const s3 in this.styles[t2]) {
      const i3 = parseInt(s3, 10);
      i3 >= e3 && (a2 = true, r2[i3 - e3] = this.styles[t2][s3], o2 && 0 === e3 || delete this.styles[t2][s3]);
    }
    let l2 = false;
    for (a2 && !o2 && (this.styles[t2 + s2] = r2, l2 = true), (l2 || n2 > e3) && s2--; s2 > 0; ) i2 && i2[s2 - 1] ? this.styles[t2 + s2] = { 0: { ...i2[s2 - 1] } } : h2 ? this.styles[t2 + s2] = { 0: { ...h2 } } : delete this.styles[t2 + s2], s2--;
    this._forceClearCache = true;
  }
  insertCharStyleObject(t2, e3, s2, i2) {
    this.styles || (this.styles = {});
    const r2 = this.styles[t2], n2 = r2 ? { ...r2 } : {};
    s2 || (s2 = 1);
    for (const t3 in n2) {
      const i3 = parseInt(t3, 10);
      i3 >= e3 && (r2[i3 + s2] = n2[i3], n2[i3 - s2] || delete r2[i3]);
    }
    if (this._forceClearCache = true, i2) {
      for (; s2--; ) Object.keys(i2[s2]).length && (this.styles[t2] || (this.styles[t2] = {}), this.styles[t2][e3 + s2] = { ...i2[s2] });
      return;
    }
    if (!r2) return;
    const o2 = r2[e3 ? e3 - 1 : 1];
    for (; o2 && s2--; ) this.styles[t2][e3 + s2] = { ...o2 };
  }
  insertNewStyleBlock(t2, e3, s2) {
    const i2 = this.get2DCursorLocation(e3, true), r2 = [0];
    let n2, o2 = 0;
    for (let e4 = 0; e4 < t2.length; e4++) "\n" === t2[e4] ? (o2++, r2[o2] = 0) : r2[o2]++;
    for (r2[0] > 0 && (this.insertCharStyleObject(i2.lineIndex, i2.charIndex, r2[0], s2), s2 = s2 && s2.slice(r2[0] + 1)), o2 && this.insertNewlineStyleObject(i2.lineIndex, i2.charIndex + r2[0], o2), n2 = 1; n2 < o2; n2++) r2[n2] > 0 ? this.insertCharStyleObject(i2.lineIndex + n2, 0, r2[n2], s2) : s2 && this.styles[i2.lineIndex + n2] && s2[0] && (this.styles[i2.lineIndex + n2][0] = s2[0]), s2 = s2 && s2.slice(r2[n2] + 1);
    r2[n2] > 0 && this.insertCharStyleObject(i2.lineIndex + n2, 0, r2[n2], s2);
  }
  removeChars(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t2 + 1;
    this.removeStyleFromTo(t2, e3), this._text.splice(t2, e3 - t2), this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  insertChars(t2, e3, s2) {
    let i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s2;
    i2 > s2 && this.removeStyleFromTo(s2, i2);
    const r2 = this.graphemeSplit(t2);
    this.insertNewStyleBlock(r2, s2, e3), this._text = [...this._text.slice(0, s2), ...r2, ...this._text.slice(i2)], this.text = this._text.join(""), this.set("dirty", true), this.initDimensions(), this.setCoords(), this._removeExtraneousStyles();
  }
  setSelectionStartEndWithShift(t2, e3, s2) {
    s2 <= t2 ? (e3 === t2 ? this._selectionDirection = O : this._selectionDirection === M && (this._selectionDirection = O, this.selectionEnd = t2), this.selectionStart = s2) : s2 > t2 && s2 < e3 ? this._selectionDirection === M ? this.selectionEnd = s2 : this.selectionStart = s2 : (e3 === t2 ? this._selectionDirection = M : this._selectionDirection === O && (this._selectionDirection = M, this.selectionStart = e3), this.selectionEnd = s2);
  }
};
var vo = class extends mo {
  initHiddenTextarea() {
    const t2 = this.canvas && qt(this.canvas.getElement()) || d(), e3 = t2.createElement("textarea");
    Object.entries({ autocapitalize: "off", autocorrect: "off", autocomplete: "off", spellcheck: "false", "data-fabric": "textarea", wrap: "off", name: "fabricTextarea" }).map((t3) => {
      let [s3, i3] = t3;
      return e3.setAttribute(s3, i3);
    });
    const { top: s2, left: i2, fontSize: r2 } = this._calcTextareaPosition();
    e3.style.cssText = `position: absolute; top: ${s2}; left: ${i2}; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ${r2};`, (this.hiddenTextareaContainer || t2.body).appendChild(e3), Object.entries({ blur: "blur", keydown: "onKeyDown", keyup: "onKeyUp", input: "onInput", copy: "copy", cut: "copy", paste: "paste", compositionstart: "onCompositionStart", compositionupdate: "onCompositionUpdate", compositionend: "onCompositionEnd" }).map((t3) => {
      let [s3, i3] = t3;
      return e3.addEventListener(s3, this[i3].bind(this));
    }), this.hiddenTextarea = e3;
  }
  blur() {
    this.abortCursorAnimation();
  }
  onKeyDown(t2) {
    if (!this.isEditing) return;
    const e3 = "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
    if (t2.keyCode in e3) this[e3[t2.keyCode]](t2);
    else {
      if (!(t2.keyCode in this.ctrlKeysMapDown) || !t2.ctrlKey && !t2.metaKey) return;
      this[this.ctrlKeysMapDown[t2.keyCode]](t2);
    }
    t2.stopImmediatePropagation(), t2.preventDefault(), t2.keyCode >= 33 && t2.keyCode <= 40 ? (this.inCompositionMode = false, this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
  }
  onKeyUp(t2) {
    !this.isEditing || this._copyDone || this.inCompositionMode ? this._copyDone = false : t2.keyCode in this.ctrlKeysMapUp && (t2.ctrlKey || t2.metaKey) && (this[this.ctrlKeysMapUp[t2.keyCode]](t2), t2.stopImmediatePropagation(), t2.preventDefault(), this.canvas && this.canvas.requestRenderAll());
  }
  onInput(t2) {
    const e3 = this.fromPaste, { value: i2, selectionStart: r2, selectionEnd: n2 } = this.hiddenTextarea;
    if (this.fromPaste = false, t2 && t2.stopPropagation(), !this.isEditing) return;
    const o2 = () => {
      this.updateFromTextArea(), this.fire(X), this.canvas && (this.canvas.fire("text:changed", { target: this }), this.canvas.requestRenderAll());
    };
    if ("" === this.hiddenTextarea.value) return this.styles = {}, void o2();
    const a2 = this._splitTextIntoLines(i2).graphemeText, h2 = this._text.length, l2 = a2.length, c2 = this.selectionStart, d2 = this.selectionEnd, g2 = c2 !== d2;
    let f2, p2, m2, v2, y2 = l2 - h2;
    const _2 = this.fromStringToGraphemeSelection(r2, n2, i2), x2 = c2 > _2.selectionStart;
    g2 ? (p2 = this._text.slice(c2, d2), y2 += d2 - c2) : l2 < h2 && (p2 = x2 ? this._text.slice(d2 + y2, d2) : this._text.slice(c2, c2 - y2));
    const C2 = a2.slice(_2.selectionEnd - y2, _2.selectionEnd);
    if (p2 && p2.length && (C2.length && (f2 = this.getSelectionStyles(c2, c2 + 1, false), f2 = C2.map(() => f2[0])), g2 ? (m2 = c2, v2 = d2) : x2 ? (m2 = d2 - p2.length, v2 = d2) : (m2 = d2, v2 = d2 + p2.length), this.removeStyleFromTo(m2, v2)), C2.length) {
      const { copyPasteData: t3 } = u();
      e3 && C2.join("") === t3.copiedText && !s.disableStyleCopyPaste && (f2 = t3.copiedTextStyle), this.insertNewStyleBlock(C2, c2, f2);
    }
    o2();
  }
  onCompositionStart() {
    this.inCompositionMode = true;
  }
  onCompositionEnd() {
    this.inCompositionMode = false;
  }
  onCompositionUpdate(t2) {
    let { target: e3 } = t2;
    const { selectionStart: s2, selectionEnd: i2 } = e3;
    this.compositionStart = s2, this.compositionEnd = i2, this.updateTextareaPosition();
  }
  copy() {
    if (this.selectionStart === this.selectionEnd) return;
    const { copyPasteData: t2 } = u();
    t2.copiedText = this.getSelectedText(), s.disableStyleCopyPaste ? t2.copiedTextStyle = void 0 : t2.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, true), this._copyDone = true;
  }
  paste() {
    this.fromPaste = true;
  }
  _getWidthBeforeCursor(t2, e3) {
    let s2, i2 = this._getLineLeftOffset(t2);
    return e3 > 0 && (s2 = this.__charBounds[t2][e3 - 1], i2 += s2.left + s2.width), i2;
  }
  getDownCursorOffset(t2, e3) {
    const s2 = this._getSelectionForOffset(t2, e3), i2 = this.get2DCursorLocation(s2), r2 = i2.lineIndex;
    if (r2 === this._textLines.length - 1 || t2.metaKey || 34 === t2.keyCode) return this._text.length - s2;
    const n2 = i2.charIndex, o2 = this._getWidthBeforeCursor(r2, n2), a2 = this._getIndexOnLine(r2 + 1, o2);
    return this._textLines[r2].slice(n2).length + a2 + 1 + this.missingNewlineOffset(r2);
  }
  _getSelectionForOffset(t2, e3) {
    return t2.shiftKey && this.selectionStart !== this.selectionEnd && e3 ? this.selectionEnd : this.selectionStart;
  }
  getUpCursorOffset(t2, e3) {
    const s2 = this._getSelectionForOffset(t2, e3), i2 = this.get2DCursorLocation(s2), r2 = i2.lineIndex;
    if (0 === r2 || t2.metaKey || 33 === t2.keyCode) return -s2;
    const n2 = i2.charIndex, o2 = this._getWidthBeforeCursor(r2, n2), a2 = this._getIndexOnLine(r2 - 1, o2), h2 = this._textLines[r2].slice(0, n2), l2 = this.missingNewlineOffset(r2 - 1);
    return -this._textLines[r2 - 1].length + a2 - h2.length + (1 - l2);
  }
  _getIndexOnLine(t2, e3) {
    const s2 = this._textLines[t2];
    let i2, r2, n2 = this._getLineLeftOffset(t2), o2 = 0;
    for (let a2 = 0, h2 = s2.length; a2 < h2; a2++) if (i2 = this.__charBounds[t2][a2].width, n2 += i2, n2 > e3) {
      r2 = true;
      const t3 = n2 - i2, s3 = n2, h3 = Math.abs(t3 - e3);
      o2 = Math.abs(s3 - e3) < h3 ? a2 : a2 - 1;
      break;
    }
    return r2 || (o2 = s2.length - 1), o2;
  }
  moveCursorDown(t2) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t2);
  }
  moveCursorUp(t2) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t2);
  }
  _moveCursorUpOrDown(t2, e3) {
    const s2 = this[`get${t2}CursorOffset`](e3, this._selectionDirection === M);
    if (e3.shiftKey ? this.moveCursorWithShift(s2) : this.moveCursorWithoutShift(s2), 0 !== s2) {
      const t3 = this.text.length;
      this.selectionStart = bs(0, this.selectionStart, t3), this.selectionEnd = bs(0, this.selectionEnd, t3), this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea();
    }
  }
  moveCursorWithShift(t2) {
    const e3 = this._selectionDirection === O ? this.selectionStart + t2 : this.selectionEnd + t2;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e3), 0 !== t2;
  }
  moveCursorWithoutShift(t2) {
    return t2 < 0 ? (this.selectionStart += t2, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t2, this.selectionStart = this.selectionEnd), 0 !== t2;
  }
  moveCursorLeft(t2) {
    0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t2);
  }
  _move(t2, e3, s2) {
    let i2;
    if (t2.altKey) i2 = this[`findWordBoundary${s2}`](this[e3]);
    else {
      if (!t2.metaKey && 35 !== t2.keyCode && 36 !== t2.keyCode) return this[e3] += "Left" === s2 ? -1 : 1, true;
      i2 = this[`findLineBoundary${s2}`](this[e3]);
    }
    return void 0 !== i2 && this[e3] !== i2 && (this[e3] = i2, true);
  }
  _moveLeft(t2, e3) {
    return this._move(t2, e3, "Left");
  }
  _moveRight(t2, e3) {
    return this._move(t2, e3, "Right");
  }
  moveCursorLeftWithoutShift(t2) {
    let e3 = true;
    return this._selectionDirection = O, this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e3 = this._moveLeft(t2, "selectionStart")), this.selectionEnd = this.selectionStart, e3;
  }
  moveCursorLeftWithShift(t2) {
    return this._selectionDirection === M && this.selectionStart !== this.selectionEnd ? this._moveLeft(t2, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = O, this._moveLeft(t2, "selectionStart")) : void 0;
  }
  moveCursorRight(t2) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t2);
  }
  _moveCursorLeftOrRight(t2, e3) {
    const s2 = `moveCursor${t2}${e3.shiftKey ? "WithShift" : "WithoutShift"}`;
    this._currentCursorOpacity = 1, this[s2](e3) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  }
  moveCursorRightWithShift(t2) {
    return this._selectionDirection === O && this.selectionStart !== this.selectionEnd ? this._moveRight(t2, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = M, this._moveRight(t2, "selectionEnd")) : void 0;
  }
  moveCursorRightWithoutShift(t2) {
    let e3 = true;
    return this._selectionDirection = M, this.selectionStart === this.selectionEnd ? (e3 = this._moveRight(t2, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e3;
  }
};
var yo = (t2) => !!t2.button;
var _o = class extends vo {
  constructor() {
    super(...arguments), t(this, "draggableTextDelegate", void 0);
  }
  initBehavior() {
    this.on("mousedown", this._mouseDownHandler), this.on("mouseup", this.mouseUpHandler), this.on("mousedblclick", this.doubleClickHandler), this.on("mousetripleclick", this.tripleClickHandler), this.draggableTextDelegate = new fo(this), super.initBehavior();
  }
  shouldStartDragging() {
    return this.draggableTextDelegate.isActive();
  }
  onDragStart(t2) {
    return this.draggableTextDelegate.onDragStart(t2);
  }
  canDrop(t2) {
    return this.draggableTextDelegate.canDrop(t2);
  }
  doubleClickHandler(t2) {
    this.isEditing && (this.selectWord(this.getSelectionStartFromPointer(t2.e)), this.renderCursorOrSelection());
  }
  tripleClickHandler(t2) {
    this.isEditing && (this.selectLine(this.getSelectionStartFromPointer(t2.e)), this.renderCursorOrSelection());
  }
  _mouseDownHandler(t2) {
    let { e: e3, alreadySelected: s2 } = t2;
    this.canvas && this.editable && !yo(e3) && !this.getActiveControl() && (this.draggableTextDelegate.start(e3) || (this.canvas.textEditingManager.register(this), s2 && (this.inCompositionMode = false, this.setCursorByClick(e3)), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()), this.selected || (this.selected = s2 || this.isEditing)));
  }
  mouseUpHandler(t2) {
    let { e: e3, transform: s2 } = t2;
    const i2 = this.draggableTextDelegate.end(e3);
    if (this.canvas) {
      this.canvas.textEditingManager.unregister(this);
      const t3 = this.canvas._activeObject;
      if (t3 && t3 !== this) return;
    }
    !this.editable || this.group && !this.group.interactive || s2 && s2.actionPerformed || yo(e3) || i2 || this.selected && !this.getActiveControl() && (this.enterEditing(e3), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(true) : this.renderCursorOrSelection());
  }
  setCursorByClick(t2) {
    const e3 = this.getSelectionStartFromPointer(t2), s2 = this.selectionStart, i2 = this.selectionEnd;
    t2.shiftKey ? this.setSelectionStartEndWithShift(s2, i2, e3) : (this.selectionStart = e3, this.selectionEnd = e3), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  }
  getSelectionStartFromPointer(t2) {
    const e3 = this.canvas.getScenePoint(t2).transform(wt(this.calcTransformMatrix())).add(new ot(-this._getLeftOffset(), -this._getTopOffset()));
    let s2 = 0, i2 = 0, r2 = 0;
    for (let t3 = 0; t3 < this._textLines.length && s2 <= e3.y; t3++) s2 += this.getHeightOfLine(t3), r2 = t3, t3 > 0 && (i2 += this._textLines[t3 - 1].length + this.missingNewlineOffset(t3 - 1));
    let n2 = Math.abs(this._getLineLeftOffset(r2));
    const o2 = this._textLines[r2].length, a2 = this.__charBounds[r2];
    for (let t3 = 0; t3 < o2; t3++) {
      const s3 = n2 + a2[t3].kernedWidth;
      if (e3.x <= s3) {
        Math.abs(e3.x - s3) <= Math.abs(e3.x - n2) && i2++;
        break;
      }
      n2 = s3, i2++;
    }
    return Math.min(this.flipX ? o2 - i2 : i2, this._text.length);
  }
};
var xo = "moveCursorUp";
var Co = "moveCursorDown";
var bo = "moveCursorLeft";
var So = "moveCursorRight";
var wo = "exitEditing";
var To = (t2, e3) => {
  const s2 = e3.getRetinaScaling();
  t2.setTransform(s2, 0, 0, s2, 0, 0);
  const i2 = e3.viewportTransform;
  t2.transform(i2[0], i2[1], i2[2], i2[3], i2[4], i2[5]);
};
var Oo = { selectionStart: 0, selectionEnd: 0, selectionColor: "rgba(17,119,255,0.3)", isEditing: false, editable: true, editingBorderColor: "rgba(102,153,255,0.25)", cursorWidth: 2, cursorColor: "", cursorDelay: 1e3, cursorDuration: 600, caching: true, hiddenTextareaContainer: null, keysMap: { 9: wo, 27: wo, 33: xo, 34: Co, 35: So, 36: bo, 37: bo, 38: xo, 39: So, 40: Co }, keysMapRtl: { 9: wo, 27: wo, 33: xo, 34: Co, 35: bo, 36: So, 37: So, 38: xo, 39: bo, 40: Co }, ctrlKeysMapDown: { 65: "cmdAll" }, ctrlKeysMapUp: { 67: "copy", 88: "cut" }, _selectionDirection: null, _reSpace: /\s|\r?\n/, inCompositionMode: false };
var ko = class _ko extends _o {
  static getDefaults() {
    return { ...super.getDefaults(), ..._ko.ownDefaults };
  }
  get type() {
    const t2 = super.type;
    return "itext" === t2 ? "i-text" : t2;
  }
  constructor(t2, e3) {
    super(t2, { ..._ko.ownDefaults, ...e3 }), this.initBehavior();
  }
  _set(t2, e3) {
    return this.isEditing && this._savedProps && t2 in this._savedProps ? (this._savedProps[t2] = e3, this) : ("canvas" === t2 && (this.canvas instanceof Mn && this.canvas.textEditingManager.remove(this), e3 instanceof Mn && e3.textEditingManager.add(this)), super._set(t2, e3));
  }
  setSelectionStart(t2) {
    t2 = Math.max(t2, 0), this._updateAndFire("selectionStart", t2);
  }
  setSelectionEnd(t2) {
    t2 = Math.min(t2, this.text.length), this._updateAndFire("selectionEnd", t2);
  }
  _updateAndFire(t2, e3) {
    this[t2] !== e3 && (this._fireSelectionChanged(), this[t2] = e3), this._updateTextarea();
  }
  _fireSelectionChanged() {
    this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", { target: this });
  }
  initDimensions() {
    this.isEditing && this.initDelayedCursor(), super.initDimensions();
  }
  getSelectionStyles() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart || 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionEnd, s2 = arguments.length > 2 ? arguments[2] : void 0;
    return super.getSelectionStyles(t2, e3, s2);
  }
  setSelectionStyles(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.selectionStart || 0, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.selectionEnd;
    return super.setSelectionStyles(t2, e3, s2);
  }
  get2DCursorLocation() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 ? arguments[1] : void 0;
    return super.get2DCursorLocation(t2, e3);
  }
  render(t2) {
    super.render(t2), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
  }
  toCanvasElement(t2) {
    const e3 = this.isEditing;
    this.isEditing = false;
    const s2 = super.toCanvasElement(t2);
    return this.isEditing = e3, s2;
  }
  renderCursorOrSelection() {
    if (!this.isEditing || !this.canvas) return;
    const t2 = this.clearContextTop(true);
    if (!t2) return;
    const e3 = this._getCursorBoundaries(), s2 = this.findAncestorsWithClipPath(), i2 = s2.length > 0;
    let r2, n2 = t2;
    if (i2) {
      r2 = vt(t2.canvas), n2 = r2.getContext("2d"), To(n2, this.canvas);
      const e4 = this.calcTransformMatrix();
      n2.transform(e4[0], e4[1], e4[2], e4[3], e4[4], e4[5]);
    }
    if (this.selectionStart !== this.selectionEnd || this.inCompositionMode ? this.renderSelection(n2, e3) : this.renderCursor(n2, e3), i2) for (const e4 of s2) {
      const s3 = e4.clipPath, i3 = vt(t2.canvas), r3 = i3.getContext("2d");
      if (To(r3, this.canvas), !s3.absolutePositioned) {
        const t3 = e4.calcTransformMatrix();
        r3.transform(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
      }
      s3.transform(r3), s3.drawObject(r3, true, {}), this.drawClipPathOnCache(n2, s3, i3);
    }
    i2 && (t2.setTransform(1, 0, 0, 1, 0, 0), t2.drawImage(r2, 0, 0)), this.canvas.contextTopDirty = true, t2.restore();
  }
  findAncestorsWithClipPath() {
    const t2 = [];
    let e3 = this;
    for (; e3; ) e3.clipPath && t2.push(e3), e3 = e3.parent;
    return t2;
  }
  _getCursorBoundaries() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 ? arguments[1] : void 0;
    const s2 = this._getLeftOffset(), i2 = this._getTopOffset(), r2 = this._getCursorBoundariesOffsets(t2, e3);
    return { left: s2, top: i2, leftOffset: r2.left, topOffset: r2.top };
  }
  _getCursorBoundariesOffsets(t2, e3) {
    return e3 ? this.__getCursorBoundariesOffsets(t2) : this.cursorOffsetCache && "top" in this.cursorOffsetCache ? this.cursorOffsetCache : this.cursorOffsetCache = this.__getCursorBoundariesOffsets(t2);
  }
  __getCursorBoundariesOffsets(t2) {
    let e3 = 0, s2 = 0;
    const { charIndex: i2, lineIndex: r2 } = this.get2DCursorLocation(t2), { textAlign: n2, direction: o2 } = this;
    for (let t3 = 0; t3 < r2; t3++) e3 += this.getHeightOfLine(t3);
    const a2 = this._getLineLeftOffset(r2), h2 = this.__charBounds[r2][i2];
    h2 && (s2 = h2.left), 0 !== this.charSpacing && i2 === this._textLines[r2].length && (s2 -= this._getWidthOfCharSpacing());
    let l2 = a2 + (s2 > 0 ? s2 : 0);
    return o2 === K && (n2 === M || n2 === rs || n2 === os ? l2 *= -1 : n2 === O || n2 === ns ? l2 = a2 - (s2 > 0 ? s2 : 0) : n2 !== T && n2 !== as || (l2 = a2 - (s2 > 0 ? s2 : 0))), { top: e3, left: l2 };
  }
  renderCursorAt(t2) {
    this._renderCursor(this.canvas.contextTop, this._getCursorBoundaries(t2, true), t2);
  }
  renderCursor(t2, e3) {
    this._renderCursor(t2, e3, this.selectionStart);
  }
  getCursorRenderingData() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.selectionStart, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getCursorBoundaries(t2);
    const s2 = this.get2DCursorLocation(t2), i2 = s2.lineIndex, r2 = s2.charIndex > 0 ? s2.charIndex - 1 : 0, n2 = this.getValueOfPropertyAt(i2, r2, "fontSize"), o2 = this.getObjectScaling().x * this.canvas.getZoom(), a2 = this.cursorWidth / o2, h2 = this.getValueOfPropertyAt(i2, r2, "deltaY"), l2 = e3.topOffset + (1 - this._fontSizeFraction) * this.getHeightOfLine(i2) / this.lineHeight - n2 * (1 - this._fontSizeFraction);
    return { color: this.cursorColor || this.getValueOfPropertyAt(i2, r2, "fill"), opacity: this._currentCursorOpacity, left: e3.left + e3.leftOffset - a2 / 2, top: l2 + e3.top + h2, width: a2, height: n2 };
  }
  _renderCursor(t2, e3, s2) {
    const { color: i2, opacity: r2, left: n2, top: o2, width: a2, height: h2 } = this.getCursorRenderingData(s2, e3);
    t2.fillStyle = i2, t2.globalAlpha = r2, t2.fillRect(n2, o2, a2, h2);
  }
  renderSelection(t2, e3) {
    const s2 = { selectionStart: this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, selectionEnd: this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd };
    this._renderSelection(t2, s2, e3);
  }
  renderDragSourceEffect() {
    const t2 = this.draggableTextDelegate.getDragStartSelection();
    this._renderSelection(this.canvas.contextTop, t2, this._getCursorBoundaries(t2.selectionStart, true));
  }
  renderDropTargetEffect(t2) {
    const e3 = this.getSelectionStartFromPointer(t2);
    this.renderCursorAt(e3);
  }
  _renderSelection(t2, e3, s2) {
    const { textAlign: i2, direction: r2 } = this, n2 = e3.selectionStart, o2 = e3.selectionEnd, a2 = i2.includes(rs), h2 = this.get2DCursorLocation(n2), l2 = this.get2DCursorLocation(o2), c2 = h2.lineIndex, u2 = l2.lineIndex, d2 = h2.charIndex < 0 ? 0 : h2.charIndex, g2 = l2.charIndex < 0 ? 0 : l2.charIndex;
    for (let e4 = c2; e4 <= u2; e4++) {
      const n3 = this._getLineLeftOffset(e4) || 0;
      let o3 = this.getHeightOfLine(e4), h3 = 0, l3 = 0, f2 = 0;
      if (e4 === c2 && (l3 = this.__charBounds[c2][d2].left), e4 >= c2 && e4 < u2) f2 = a2 && !this.isEndOfWrapping(e4) ? this.width : this.getLineWidth(e4) || 5;
      else if (e4 === u2) if (0 === g2) f2 = this.__charBounds[u2][g2].left;
      else {
        const t3 = this._getWidthOfCharSpacing();
        f2 = this.__charBounds[u2][g2 - 1].left + this.__charBounds[u2][g2 - 1].width - t3;
      }
      h3 = o3, (this.lineHeight < 1 || e4 === u2 && this.lineHeight > 1) && (o3 /= this.lineHeight);
      let p2 = s2.left + n3 + l3, m2 = o3, v2 = 0;
      const y2 = f2 - l3;
      this.inCompositionMode ? (t2.fillStyle = this.compositionColor || "black", m2 = 1, v2 = o3) : t2.fillStyle = this.selectionColor, r2 === K && (i2 === M || i2 === rs || i2 === os ? p2 = this.width - p2 - y2 : i2 === O || i2 === ns ? p2 = s2.left + n3 - f2 : i2 !== T && i2 !== as || (p2 = s2.left + n3 - f2)), t2.fillRect(p2, s2.top + s2.topOffset + v2, y2, m2), s2.topOffset += h3;
    }
  }
  getCurrentCharFontSize() {
    const t2 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t2.l, t2.c, "fontSize");
  }
  getCurrentCharColor() {
    const t2 = this._getCurrentCharIndex();
    return this.getValueOfPropertyAt(t2.l, t2.c, H);
  }
  _getCurrentCharIndex() {
    const t2 = this.get2DCursorLocation(this.selectionStart, true), e3 = t2.charIndex > 0 ? t2.charIndex - 1 : 0;
    return { l: t2.lineIndex, c: e3 };
  }
  dispose() {
    this.exitEditingImpl(), this.draggableTextDelegate.dispose(), super.dispose();
  }
};
t(ko, "ownDefaults", Oo), t(ko, "type", "IText"), tt.setClass(ko), tt.setClass(ko, "i-text");
var Do = class _Do extends ko {
  static getDefaults() {
    return { ...super.getDefaults(), ..._Do.ownDefaults };
  }
  constructor(t2, e3) {
    super(t2, { ..._Do.ownDefaults, ...e3 });
  }
  static createControls() {
    return { controls: wi() };
  }
  initDimensions() {
    this.initialized && (this.isEditing && this.initDelayedCursor(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), this.textAlign.includes(rs) && this.enlargeSpaces(), this.height = this.calcTextHeight());
  }
  _generateStyleMap(t2) {
    let e3 = 0, s2 = 0, i2 = 0;
    const r2 = {};
    for (let n2 = 0; n2 < t2.graphemeLines.length; n2++) "\n" === t2.graphemeText[i2] && n2 > 0 ? (s2 = 0, i2++, e3++) : !this.splitByGrapheme && this._reSpaceAndTab.test(t2.graphemeText[i2]) && n2 > 0 && (s2++, i2++), r2[n2] = { line: e3, offset: s2 }, i2 += t2.graphemeLines[n2].length, s2 += t2.graphemeLines[n2].length;
    return r2;
  }
  styleHas(t2, e3) {
    if (this._styleMap && !this.isWrapping) {
      const t3 = this._styleMap[e3];
      t3 && (e3 = t3.line);
    }
    return super.styleHas(t2, e3);
  }
  isEmptyStyles(t2) {
    if (!this.styles) return true;
    let e3, s2 = 0, i2 = t2 + 1, r2 = false;
    const n2 = this._styleMap[t2], o2 = this._styleMap[t2 + 1];
    n2 && (t2 = n2.line, s2 = n2.offset), o2 && (i2 = o2.line, r2 = i2 === t2, e3 = o2.offset);
    const a2 = void 0 === t2 ? this.styles : { line: this.styles[t2] };
    for (const t3 in a2) for (const i3 in a2[t3]) {
      const n3 = parseInt(i3, 10);
      if (n3 >= s2 && (!r2 || n3 < e3)) for (const e4 in a2[t3][i3]) return false;
    }
    return true;
  }
  _getStyleDeclaration(t2, e3) {
    if (this._styleMap && !this.isWrapping) {
      const s2 = this._styleMap[t2];
      if (!s2) return {};
      t2 = s2.line, e3 = s2.offset + e3;
    }
    return super._getStyleDeclaration(t2, e3);
  }
  _setStyleDeclaration(t2, e3, s2) {
    const i2 = this._styleMap[t2];
    super._setStyleDeclaration(i2.line, i2.offset + e3, s2);
  }
  _deleteStyleDeclaration(t2, e3) {
    const s2 = this._styleMap[t2];
    super._deleteStyleDeclaration(s2.line, s2.offset + e3);
  }
  _getLineStyle(t2) {
    const e3 = this._styleMap[t2];
    return !!this.styles[e3.line];
  }
  _setLineStyle(t2) {
    const e3 = this._styleMap[t2];
    super._setLineStyle(e3.line);
  }
  _wrapText(t2, e3) {
    this.isWrapping = true;
    const s2 = this.getGraphemeDataForRender(t2), i2 = [];
    for (let t3 = 0; t3 < s2.wordsData.length; t3++) i2.push(...this._wrapLine(t3, e3, s2));
    return this.isWrapping = false, i2;
  }
  getGraphemeDataForRender(t2) {
    const e3 = this.splitByGrapheme, s2 = e3 ? "" : " ";
    let i2 = 0;
    return { wordsData: t2.map((t3, r2) => {
      let n2 = 0;
      const o2 = e3 ? this.graphemeSplit(t3) : this.wordSplit(t3);
      return 0 === o2.length ? [{ word: [], width: 0 }] : o2.map((t4) => {
        const o3 = e3 ? [t4] : this.graphemeSplit(t4), a2 = this._measureWord(o3, r2, n2);
        return i2 = Math.max(a2, i2), n2 += o3.length + s2.length, { word: o3, width: a2 };
      });
    }), largestWordWidth: i2 };
  }
  _measureWord(t2, e3) {
    let s2, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = 0;
    for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
      r2 += this._getGraphemeBox(t2[n2], e3, n2 + i2, s2, true).kernedWidth, s2 = t2[n2];
    }
    return r2;
  }
  wordSplit(t2) {
    return t2.split(this._wordJoiners);
  }
  _wrapLine(t2, e3, s2) {
    let { largestWordWidth: i2, wordsData: r2 } = s2, n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    const o2 = this._getWidthOfCharSpacing(), a2 = this.splitByGrapheme, h2 = [], l2 = a2 ? "" : " ";
    let c2 = 0, u2 = [], d2 = 0, g2 = 0, f2 = true;
    e3 -= n2;
    const p2 = Math.max(e3, i2, this.dynamicMinWidth), m2 = r2[t2];
    let v2;
    for (d2 = 0, v2 = 0; v2 < m2.length; v2++) {
      const { word: e4, width: s3 } = m2[v2];
      d2 += e4.length, c2 += g2 + s3 - o2, c2 > p2 && !f2 ? (h2.push(u2), u2 = [], c2 = s3, f2 = true) : c2 += o2, f2 || a2 || u2.push(l2), u2 = u2.concat(e4), g2 = a2 ? 0 : this._measureWord([l2], t2, d2), d2++, f2 = false;
    }
    return v2 && h2.push(u2), i2 + n2 > this.dynamicMinWidth && (this.dynamicMinWidth = i2 - o2 + n2), h2;
  }
  isEndOfWrapping(t2) {
    return !this._styleMap[t2 + 1] || this._styleMap[t2 + 1].line !== this._styleMap[t2].line;
  }
  missingNewlineOffset(t2, e3) {
    return this.splitByGrapheme && !e3 ? this.isEndOfWrapping(t2) ? 1 : 0 : 1;
  }
  _splitTextIntoLines(t2) {
    const e3 = super._splitTextIntoLines(t2), s2 = this._wrapText(e3.lines, this.width), i2 = new Array(s2.length);
    for (let t3 = 0; t3 < s2.length; t3++) i2[t3] = s2[t3].join("");
    return e3.lines = i2, e3.graphemeLines = s2, e3;
  }
  getMinWidth() {
    return Math.max(this.minWidth, this.dynamicMinWidth);
  }
  _removeExtraneousStyles() {
    const t2 = /* @__PURE__ */ new Map();
    for (const e3 in this._styleMap) {
      const s2 = parseInt(e3, 10);
      if (this._textLines[s2]) {
        const s3 = this._styleMap[e3].line;
        t2.set(`${s3}`, true);
      }
    }
    for (const e3 in this.styles) t2.has(e3) || delete this.styles[e3];
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return super.toObject(["minWidth", "splitByGrapheme", ...t2]);
  }
};
t(Do, "type", "Textbox"), t(Do, "textLayoutProperties", [...ko.textLayoutProperties, "width"]), t(Do, "ownDefaults", { minWidth: 20, dynamicMinWidth: 2, lockScalingFlip: true, noScaleCache: false, _wordJoiners: /[ \t\r]/, splitByGrapheme: false }), tt.setClass(Do);
var Mo = class extends Cr {
  shouldPerformLayout(t2) {
    return !!t2.target.clipPath && super.shouldPerformLayout(t2);
  }
  shouldLayoutClipPath() {
    return false;
  }
  calcLayoutResult(t2, e3) {
    const { target: s2 } = t2, { clipPath: i2, group: r2 } = s2;
    if (!i2 || !this.shouldPerformLayout(t2)) return;
    const { width: n2, height: o2 } = ae(xr(s2, i2)), a2 = new ot(n2, o2);
    if (i2.absolutePositioned) {
      return { center: fe(i2.getRelativeCenterPoint(), void 0, r2 ? r2.calcTransformMatrix() : void 0), size: a2 };
    }
    {
      const r3 = i2.getRelativeCenterPoint().transform(s2.calcOwnMatrix(), true);
      if (this.shouldPerformLayout(t2)) {
        const { center: s3 = new ot(), correction: i3 = new ot() } = this.calcBoundingBox(e3, t2) || {};
        return { center: s3.add(r3), correction: i3.subtract(r3), size: a2 };
      }
      return { center: s2.getRelativeCenterPoint().add(r3), size: a2 };
    }
  }
};
t(Mo, "type", "clip-path"), tt.setClass(Mo);
var Eo = class extends Cr {
  getInitialSize(t2, e3) {
    let { target: s2 } = t2, { size: i2 } = e3;
    return new ot(s2.width || i2.x, s2.height || i2.y);
  }
};
t(Eo, "type", "fixed"), tt.setClass(Eo);
var Po = class extends wr {
  subscribeTargets(t2) {
    const e3 = t2.target;
    t2.targets.reduce((t3, e4) => (e4.parent && t3.add(e4.parent), t3), /* @__PURE__ */ new Set()).forEach((t3) => {
      t3.layoutManager.subscribeTargets({ target: t3, targets: [e3] });
    });
  }
  unsubscribeTargets(t2) {
    const e3 = t2.target, s2 = e3.getObjects();
    t2.targets.reduce((t3, e4) => (e4.parent && t3.add(e4.parent), t3), /* @__PURE__ */ new Set()).forEach((t3) => {
      !s2.some((e4) => e4.parent === t3) && t3.layoutManager.unsubscribeTargets({ target: t3, targets: [e3] });
    });
  }
};
var Ao = class _Ao extends Or {
  static getDefaults() {
    return { ...super.getDefaults(), ..._Ao.ownDefaults };
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    super(), Object.assign(this, _Ao.ownDefaults), this.setOptions(e3);
    const { left: s2, top: i2, layoutManager: r2 } = e3;
    this.groupInit(t2, { left: s2, top: i2, layoutManager: null != r2 ? r2 : new Po() });
  }
  _shouldSetNestedCoords() {
    return true;
  }
  __objectSelectionMonitor() {
  }
  multiSelectAdd() {
    for (var t2 = arguments.length, e3 = new Array(t2), s2 = 0; s2 < t2; s2++) e3[s2] = arguments[s2];
    "selection-order" === this.multiSelectionStacking ? this.add(...e3) : e3.forEach((t3) => {
      const e4 = this._objects.findIndex((e5) => e5.isInFrontOf(t3)), s3 = -1 === e4 ? this.size() : e4;
      this.insertAt(s3, t3);
    });
  }
  canEnterGroup(t2) {
    return this.getObjects().some((e3) => e3.isDescendantOf(t2) || t2.isDescendantOf(e3)) ? (i("error", "ActiveSelection: circular object trees are not supported, this call has no effect"), false) : super.canEnterGroup(t2);
  }
  enterGroup(t2, e3) {
    t2.parent && t2.parent === t2.group ? t2.parent._exitGroup(t2) : t2.group && t2.parent !== t2.group && t2.group.remove(t2), this._enterGroup(t2, e3);
  }
  exitGroup(t2, e3) {
    this._exitGroup(t2, e3), t2.parent && t2.parent._enterGroup(t2, true);
  }
  _onAfterObjectsChange(t2, e3) {
    super._onAfterObjectsChange(t2, e3);
    const s2 = /* @__PURE__ */ new Set();
    e3.forEach((t3) => {
      const { parent: e4 } = t3;
      e4 && s2.add(e4);
    }), t2 === yr ? s2.forEach((t3) => {
      t3._onAfterObjectsChange(vr, e3);
    }) : s2.forEach((t3) => {
      t3._set("dirty", true);
    });
  }
  onDeselect() {
    return this.removeAll(), false;
  }
  toString() {
    return `#<ActiveSelection: (${this.complexity()})>`;
  }
  shouldCache() {
    return false;
  }
  isOnACache() {
    return false;
  }
  _renderControls(t2, e3, s2) {
    t2.save(), t2.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
    const i2 = { hasControls: false, ...s2, forActiveSelection: true };
    for (let e4 = 0; e4 < this._objects.length; e4++) this._objects[e4]._renderControls(t2, i2);
    super._renderControls(t2, e3), t2.restore();
  }
};
t(Ao, "type", "ActiveSelection"), t(Ao, "ownDefaults", { multiSelectionStacking: "canvas-stacking" }), tt.setClass(Ao), tt.setClass(Ao, "activeSelection");
var jo = class {
  constructor() {
    t(this, "resources", {});
  }
  applyFilters(t2, e3, s2, i2, r2) {
    const n2 = r2.getContext("2d", { willReadFrequently: true, desynchronized: true });
    if (!n2) return;
    n2.drawImage(e3, 0, 0, s2, i2);
    const o2 = { sourceWidth: s2, sourceHeight: i2, imageData: n2.getImageData(0, 0, s2, i2), originalEl: e3, originalImageData: n2.getImageData(0, 0, s2, i2), canvasEl: r2, ctx: n2, filterBackend: this };
    t2.forEach((t3) => {
      t3.applyTo(o2);
    });
    const { imageData: a2 } = o2;
    return a2.width === s2 && a2.height === i2 || (r2.width = a2.width, r2.height = a2.height), n2.putImageData(a2, 0, 0), o2;
  }
};
var Fo = class {
  constructor() {
    let { tileSize: e3 = s.textureSize } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    t(this, "aPosition", new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])), t(this, "resources", {}), this.tileSize = e3, this.setupGLContext(e3, e3), this.captureGPUInfo();
  }
  setupGLContext(t2, e3) {
    this.dispose(), this.createWebGLCanvas(t2, e3);
  }
  createWebGLCanvas(t2, e3) {
    const s2 = vt({ width: t2, height: e3 }), i2 = s2.getContext("webgl", { alpha: true, premultipliedAlpha: false, depth: false, stencil: false, antialias: false });
    i2 && (i2.clearColor(0, 0, 0, 0), this.canvas = s2, this.gl = i2);
  }
  applyFilters(t2, e3, s2, i2, r2, n2) {
    const o2 = this.gl, a2 = r2.getContext("2d");
    if (!o2 || !a2) return;
    let h2;
    n2 && (h2 = this.getCachedTexture(n2, e3));
    const l2 = { originalWidth: e3.width || e3.naturalWidth || 0, originalHeight: e3.height || e3.naturalHeight || 0, sourceWidth: s2, sourceHeight: i2, destinationWidth: s2, destinationHeight: i2, context: o2, sourceTexture: this.createTexture(o2, s2, i2, h2 ? void 0 : e3), targetTexture: this.createTexture(o2, s2, i2), originalTexture: h2 || this.createTexture(o2, s2, i2, h2 ? void 0 : e3), passes: t2.length, webgl: true, aPosition: this.aPosition, programCache: this.programCache, pass: 0, filterBackend: this, targetCanvas: r2 }, c2 = o2.createFramebuffer();
    return o2.bindFramebuffer(o2.FRAMEBUFFER, c2), t2.forEach((t3) => {
      t3 && t3.applyTo(l2);
    }), (function(t3) {
      const e4 = t3.targetCanvas, s3 = e4.width, i3 = e4.height, r3 = t3.destinationWidth, n3 = t3.destinationHeight;
      s3 === r3 && i3 === n3 || (e4.width = r3, e4.height = n3);
    })(l2), this.copyGLTo2D(o2, l2), o2.bindTexture(o2.TEXTURE_2D, null), o2.deleteTexture(l2.sourceTexture), o2.deleteTexture(l2.targetTexture), o2.deleteFramebuffer(c2), a2.setTransform(1, 0, 0, 1, 0, 0), l2;
  }
  dispose() {
    this.canvas && (this.canvas = null, this.gl = null), this.clearWebGLCaches();
  }
  clearWebGLCaches() {
    this.programCache = {}, this.textureCache = {};
  }
  createTexture(t2, e3, s2, i2, r2) {
    const { NEAREST: n2, TEXTURE_2D: o2, RGBA: a2, UNSIGNED_BYTE: h2, CLAMP_TO_EDGE: l2, TEXTURE_MAG_FILTER: c2, TEXTURE_MIN_FILTER: u2, TEXTURE_WRAP_S: d2, TEXTURE_WRAP_T: g2 } = t2, f2 = t2.createTexture();
    return t2.bindTexture(o2, f2), t2.texParameteri(o2, c2, r2 || n2), t2.texParameteri(o2, u2, r2 || n2), t2.texParameteri(o2, d2, l2), t2.texParameteri(o2, g2, l2), i2 ? t2.texImage2D(o2, 0, a2, a2, h2, i2) : t2.texImage2D(o2, 0, a2, e3, s2, 0, a2, h2, null), f2;
  }
  getCachedTexture(t2, e3, s2) {
    const { textureCache: i2 } = this;
    if (i2[t2]) return i2[t2];
    {
      const r2 = this.createTexture(this.gl, e3.width, e3.height, e3, s2);
      return r2 && (i2[t2] = r2), r2;
    }
  }
  evictCachesForKey(t2) {
    this.textureCache[t2] && (this.gl.deleteTexture(this.textureCache[t2]), delete this.textureCache[t2]);
  }
  copyGLTo2D(t2, e3) {
    const s2 = t2.canvas, i2 = e3.targetCanvas, r2 = i2.getContext("2d");
    if (!r2) return;
    r2.translate(0, i2.height), r2.scale(1, -1);
    const n2 = s2.height - i2.height;
    r2.drawImage(s2, 0, n2, i2.width, i2.height, 0, 0, i2.width, i2.height);
  }
  copyGLTo2DPutImageData(t2, e3) {
    const s2 = e3.targetCanvas.getContext("2d"), i2 = e3.destinationWidth, r2 = e3.destinationHeight, n2 = i2 * r2 * 4;
    if (!s2) return;
    const o2 = new Uint8Array(this.imageBuffer, 0, n2), a2 = new Uint8ClampedArray(this.imageBuffer, 0, n2);
    t2.readPixels(0, 0, i2, r2, t2.RGBA, t2.UNSIGNED_BYTE, o2);
    const h2 = new ImageData(a2, i2, r2);
    s2.putImageData(h2, 0, 0);
  }
  captureGPUInfo() {
    if (this.gpuInfo) return this.gpuInfo;
    const t2 = this.gl, e3 = { renderer: "", vendor: "" };
    if (!t2) return e3;
    const s2 = t2.getExtension("WEBGL_debug_renderer_info");
    if (s2) {
      const i2 = t2.getParameter(s2.UNMASKED_RENDERER_WEBGL), r2 = t2.getParameter(s2.UNMASKED_VENDOR_WEBGL);
      i2 && (e3.renderer = i2.toLowerCase()), r2 && (e3.vendor = r2.toLowerCase());
    }
    return this.gpuInfo = e3, e3;
  }
};
var Lo;
function Io() {
  const { WebGLProbe: t2 } = u();
  return t2.queryWebGL(pt()), s.enableGLFiltering && t2.isSupported(s.textureSize) ? new Fo({ tileSize: s.textureSize }) : new jo();
}
function Ro() {
  return !Lo && (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (Lo = Io()), Lo;
}
function Bo(t2) {
  Lo = t2;
}
var $o = ["cropX", "cropY"];
var Xo = class _Xo extends ki {
  static getDefaults() {
    return { ...super.getDefaults(), ..._Xo.ownDefaults };
  }
  constructor(e3, s2) {
    super(), t(this, "_lastScaleX", 1), t(this, "_lastScaleY", 1), t(this, "_filterScalingX", 1), t(this, "_filterScalingY", 1), this.filters = [], Object.assign(this, _Xo.ownDefaults), this.setOptions(s2), this.cacheKey = `texture${ft()}`, this.setElement("string" == typeof e3 ? (this.canvas && qt(this.canvas.getElement()) || d()).getElementById(e3) : e3, s2);
  }
  getElement() {
    return this._element;
  }
  setElement(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    this.removeTexture(this.cacheKey), this.removeTexture(`${this.cacheKey}_filtered`), this._element = t2, this._originalElement = t2, this._setWidthHeight(e3), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters();
  }
  removeTexture(t2) {
    const e3 = Ro(false);
    e3 instanceof Fo && e3.evictCachesForKey(t2);
  }
  dispose() {
    super.dispose(), this.removeTexture(this.cacheKey), this.removeTexture(`${this.cacheKey}_filtered`), this._cacheContext = null, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach((t2) => {
      const e3 = this[t2];
      e3 && u().dispose(e3), this[t2] = void 0;
    });
  }
  getCrossOrigin() {
    return this._originalElement && (this._originalElement.crossOrigin || null);
  }
  getOriginalSize() {
    const t2 = this.getElement();
    return t2 ? { width: t2.naturalWidth || t2.width, height: t2.naturalHeight || t2.height } : { width: 0, height: 0 };
  }
  _stroke(t2) {
    if (!this.stroke || 0 === this.strokeWidth) return;
    const e3 = this.width / 2, s2 = this.height / 2;
    t2.beginPath(), t2.moveTo(-e3, -s2), t2.lineTo(e3, -s2), t2.lineTo(e3, s2), t2.lineTo(-e3, s2), t2.lineTo(-e3, -s2), t2.closePath();
  }
  toObject() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    const e3 = [];
    return this.filters.forEach((t3) => {
      t3 && e3.push(t3.toObject());
    }), { ...super.toObject([...$o, ...t2]), src: this.getSrc(), crossOrigin: this.getCrossOrigin(), filters: e3, ...this.resizeFilter ? { resizeFilter: this.resizeFilter.toObject() } : {} };
  }
  hasCrop() {
    return !!this.cropX || !!this.cropY || this.width < this._element.width || this.height < this._element.height;
  }
  _toSVG() {
    const t2 = [], e3 = this._element, s2 = -this.width / 2, i2 = -this.height / 2;
    let r2 = [], n2 = [], o2 = "", a2 = "";
    if (!e3) return [];
    if (this.hasCrop()) {
      const t3 = ft();
      r2.push('<clipPath id="imageCrop_' + t3 + '">\n', '	<rect x="' + s2 + '" y="' + i2 + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), o2 = ' clip-path="url(#imageCrop_' + t3 + ')" ';
    }
    if (this.imageSmoothing || (a2 = ' image-rendering="optimizeSpeed"'), t2.push("	<image ", "COMMON_PARTS", `xlink:href="${this.getSvgSrc(true)}" x="${s2 - this.cropX}" y="${i2 - this.cropY}" width="${e3.width || e3.naturalWidth}" height="${e3.height || e3.naturalHeight}"${a2}${o2}></image>
`), this.stroke || this.strokeDashArray) {
      const t3 = this.fill;
      this.fill = null, n2 = [`	<rect x="${s2}" y="${i2}" width="${this.width}" height="${this.height}" style="${this.getSvgStyles()}" />
`], this.fill = t3;
    }
    return r2 = this.paintFirst !== H ? r2.concat(n2, t2) : r2.concat(t2, n2), r2;
  }
  getSrc(t2) {
    const e3 = t2 ? this._element : this._originalElement;
    return e3 ? e3.toDataURL ? e3.toDataURL() : this.srcFromAttribute ? e3.getAttribute("src") || "" : e3.src : this.src || "";
  }
  getSvgSrc(t2) {
    return this.getSrc(t2);
  }
  setSrc(t2) {
    let { crossOrigin: e3, signal: s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return Rt(t2, { crossOrigin: e3, signal: s2 }).then((t3) => {
      void 0 !== e3 && this.set({ crossOrigin: e3 }), this.setElement(t3);
    });
  }
  toString() {
    return `#<Image: { src: "${this.getSrc()}" }>`;
  }
  applyResizeFilters() {
    const t2 = this.resizeFilter, e3 = this.minimumScaleTrigger, s2 = this.getTotalObjectScaling(), i2 = s2.x, r2 = s2.y, n2 = this._filteredEl || this._originalElement;
    if (this.group && this.set("dirty", true), !t2 || i2 > e3 && r2 > e3) return this._element = n2, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = i2, void (this._lastScaleY = r2);
    const o2 = vt(n2), { width: a2, height: h2 } = n2;
    this._element = o2, this._lastScaleX = t2.scaleX = i2, this._lastScaleY = t2.scaleY = r2, Ro().applyFilters([t2], n2, a2, h2, this._element), this._filterScalingX = o2.width / this._originalElement.width, this._filterScalingY = o2.height / this._originalElement.height;
  }
  applyFilters() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.filters || [];
    if (t2 = t2.filter((t3) => t3 && !t3.isNeutralState()), this.set("dirty", true), this.removeTexture(`${this.cacheKey}_filtered`), 0 === t2.length) return this._element = this._originalElement, this._filteredEl = void 0, this._filterScalingX = 1, void (this._filterScalingY = 1);
    const e3 = this._originalElement, s2 = e3.naturalWidth || e3.width, i2 = e3.naturalHeight || e3.height;
    if (this._element === this._originalElement) {
      const t3 = vt({ width: s2, height: i2 });
      this._element = t3, this._filteredEl = t3;
    } else this._filteredEl && (this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, s2, i2), this._lastScaleX = 1, this._lastScaleY = 1);
    Ro().applyFilters(t2, this._originalElement, s2, i2, this._element, this.cacheKey), this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height);
  }
  _render(t2) {
    t2.imageSmoothingEnabled = this.imageSmoothing, true !== this.isMoving && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t2), this._renderPaintInOrder(t2);
  }
  drawCacheOnCanvas(t2) {
    t2.imageSmoothingEnabled = this.imageSmoothing, super.drawCacheOnCanvas(t2);
  }
  shouldCache() {
    return this.needsItsOwnCache();
  }
  _renderFill(t2) {
    const e3 = this._element;
    if (!e3) return;
    const s2 = this._filterScalingX, i2 = this._filterScalingY, r2 = this.width, n2 = this.height, o2 = Math.max(this.cropX, 0), a2 = Math.max(this.cropY, 0), h2 = e3.naturalWidth || e3.width, l2 = e3.naturalHeight || e3.height, c2 = o2 * s2, u2 = a2 * i2, d2 = Math.min(r2 * s2, h2 - c2), g2 = Math.min(n2 * i2, l2 - u2), f2 = -r2 / 2, p2 = -n2 / 2, m2 = Math.min(r2, h2 / s2 - o2), v2 = Math.min(n2, l2 / i2 - a2);
    e3 && t2.drawImage(e3, c2, u2, d2, g2, f2, p2, m2, v2);
  }
  _needsResize() {
    const t2 = this.getTotalObjectScaling();
    return t2.x !== this._lastScaleX || t2.y !== this._lastScaleY;
  }
  _resetWidthHeight() {
    this.set(this.getOriginalSize());
  }
  _setWidthHeight() {
    let { width: t2, height: e3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const s2 = this.getOriginalSize();
    this.width = t2 || s2.width, this.height = e3 || s2.height;
  }
  parsePreserveAspectRatioAttribute() {
    const t2 = Ne(this.preserveAspectRatio || ""), e3 = this.width, s2 = this.height, i2 = { width: e3, height: s2 };
    let r2, n2 = this._element.width, o2 = this._element.height, a2 = 1, h2 = 1, l2 = 0, c2 = 0, u2 = 0, d2 = 0;
    return !t2 || t2.alignX === E && t2.alignY === E ? (a2 = e3 / n2, h2 = s2 / o2) : ("meet" === t2.meetOrSlice && (a2 = h2 = kr(this._element, i2), r2 = (e3 - n2 * a2) / 2, "Min" === t2.alignX && (l2 = -r2), "Max" === t2.alignX && (l2 = r2), r2 = (s2 - o2 * h2) / 2, "Min" === t2.alignY && (c2 = -r2), "Max" === t2.alignY && (c2 = r2)), "slice" === t2.meetOrSlice && (a2 = h2 = Dr(this._element, i2), r2 = n2 - e3 / a2, "Mid" === t2.alignX && (u2 = r2 / 2), "Max" === t2.alignX && (u2 = r2), r2 = o2 - s2 / h2, "Mid" === t2.alignY && (d2 = r2 / 2), "Max" === t2.alignY && (d2 = r2), n2 = e3 / a2, o2 = s2 / h2)), { width: n2, height: o2, scaleX: a2, scaleY: h2, offsetLeft: l2, offsetTop: c2, cropX: u2, cropY: d2 };
  }
  static fromObject(t2, e3) {
    let { filters: s2, resizeFilter: i2, src: r2, crossOrigin: n2, type: o2, ...a2 } = t2;
    return Promise.all([Rt(r2, { ...e3, crossOrigin: n2 }), s2 && Bt(s2, e3), i2 ? Bt([i2], e3) : [], $t(a2, e3)]).then((t3) => {
      let [e4, s3 = [], [i3], n3 = {}] = t3;
      return new this(e4, { ...a2, src: r2, filters: s3, resizeFilter: i3, ...n3 });
    });
  }
  static fromURL(t2) {
    let { crossOrigin: e3 = null, signal: s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = arguments.length > 2 ? arguments[2] : void 0;
    return Rt(t2, { crossOrigin: e3, signal: s2 }).then((t3) => new this(t3, i2));
  }
  static async fromElement(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s2 = arguments.length > 2 ? arguments[2] : void 0;
    const r2 = gr(t2, this.ATTRIBUTE_NAMES, s2);
    return this.fromURL(r2["xlink:href"] || r2.href, e3, r2).catch((t3) => (i("log", "Unable to parse Image", t3), null));
  }
};
function Yo(t2) {
  if (!ms.test(t2.nodeName)) return {};
  const e3 = t2.getAttribute("viewBox");
  let s2, i2, r2 = 1, n2 = 1, o2 = 0, a2 = 0;
  const h2 = t2.getAttribute("width"), l2 = t2.getAttribute("height"), c2 = t2.getAttribute("x") || 0, u2 = t2.getAttribute("y") || 0, d2 = !(e3 && ys.test(e3)), g2 = !h2 || !l2 || "100%" === h2 || "100%" === l2;
  let f2 = "", p2 = 0, m2 = 0;
  if (d2 && (c2 || u2) && t2.parentNode && "#document" !== t2.parentNode.nodeName && (f2 = " translate(" + He(c2 || "0") + " " + He(u2 || "0") + ") ", s2 = (t2.getAttribute("transform") || "") + f2, t2.setAttribute("transform", s2), t2.removeAttribute("x"), t2.removeAttribute("y")), d2 && g2) return { width: 0, height: 0 };
  const v2 = { width: 0, height: 0 };
  if (d2) return v2.width = He(h2), v2.height = He(l2), v2;
  const y2 = e3.match(ys);
  o2 = -parseFloat(y2[1]), a2 = -parseFloat(y2[2]);
  const _2 = parseFloat(y2[3]), x2 = parseFloat(y2[4]);
  v2.minX = o2, v2.minY = a2, v2.viewBoxWidth = _2, v2.viewBoxHeight = x2, g2 ? (v2.width = _2, v2.height = x2) : (v2.width = He(h2), v2.height = He(l2), r2 = v2.width / _2, n2 = v2.height / x2);
  const C2 = Ne(t2.getAttribute("preserveAspectRatio") || "");
  if (C2.alignX !== E && ("meet" === C2.meetOrSlice && (n2 = r2 = r2 > n2 ? n2 : r2), "slice" === C2.meetOrSlice && (n2 = r2 = r2 > n2 ? r2 : n2), p2 = v2.width - _2 * r2, m2 = v2.height - x2 * r2, "Mid" === C2.alignX && (p2 /= 2), "Mid" === C2.alignY && (m2 /= 2), "Min" === C2.alignX && (p2 = 0), "Min" === C2.alignY && (m2 = 0)), 1 === r2 && 1 === n2 && 0 === o2 && 0 === a2 && 0 === c2 && 0 === u2) return v2;
  if ((c2 || u2) && "#document" !== t2.parentNode.nodeName && (f2 = " translate(" + He(c2 || "0") + " " + He(u2 || "0") + ") "), s2 = f2 + " matrix(" + r2 + " 0 0 " + n2 + " " + (o2 * r2 + p2) + " " + (a2 * n2 + m2) + ") ", "svg" === t2.nodeName) {
    for (i2 = t2.ownerDocument.createElementNS(cs, "g"); t2.firstChild; ) i2.appendChild(t2.firstChild);
    t2.appendChild(i2);
  } else i2 = t2, i2.removeAttribute("x"), i2.removeAttribute("y"), s2 = i2.getAttribute("transform") + s2;
  return i2.setAttribute("transform", s2), v2;
}
t(Xo, "type", "Image"), t(Xo, "cacheProperties", [...ws, ...$o]), t(Xo, "ownDefaults", { strokeWidth: 0, srcFromAttribute: false, minimumScaleTrigger: 0.5, cropX: 0, cropY: 0, imageSmoothing: true }), t(Xo, "ATTRIBUTE_NAMES", [...Gi, "x", "y", "width", "height", "preserveAspectRatio", "xlink:href", "href", "crossOrigin", "image-rendering"]), tt.setClass(Xo), tt.setSVGClass(Xo);
var Wo = (t2) => t2.tagName.replace("svg:", "");
var Vo = Ke(["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]);
function Go(t2, e3) {
  let s2, i2, r2, n2, o2 = [];
  for (r2 = 0, n2 = e3.length; r2 < n2; r2++) s2 = e3[r2], i2 = t2.getElementsByTagNameNS("http://www.w3.org/2000/svg", s2), o2 = o2.concat(Array.from(i2));
  return o2;
}
var zo = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"];
var Ho = "xlink:href";
function No(t2, e3) {
  var s2;
  const i2 = (null === (s2 = e3.getAttribute(Ho)) || void 0 === s2 ? void 0 : s2.slice(1)) || "", r2 = t2.getElementById(i2);
  if (r2 && r2.getAttribute(Ho) && No(t2, r2), r2 && (zo.forEach((t3) => {
    const s3 = r2.getAttribute(t3);
    !e3.hasAttribute(t3) && s3 && e3.setAttribute(t3, s3);
  }), !e3.children.length)) {
    const t3 = r2.cloneNode(true);
    for (; t3.firstChild; ) e3.appendChild(t3.firstChild);
  }
  e3.removeAttribute(Ho);
}
var Uo = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"];
var qo = (t2) => tt.getSVGClass(Wo(t2).toLowerCase());
var Ko = class {
  constructor(t2, e3, s2, i2, r2) {
    this.elements = t2, this.options = e3, this.reviver = s2, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g, this.doc = i2, this.clipPaths = r2, this.gradientDefs = (function(t3) {
      const e4 = Go(t3, Uo), s3 = {};
      let i3 = e4.length;
      for (; i3--; ) {
        const r3 = e4[i3];
        r3.getAttribute("xlink:href") && No(t3, r3);
        const n2 = r3.getAttribute("id");
        n2 && (s3[n2] = r3);
      }
      return s3;
    })(i2), this.cssRules = (function(t3) {
      const e4 = t3.getElementsByTagName("style"), s3 = {};
      for (let t4 = 0; t4 < e4.length; t4++) {
        const i3 = (e4[t4].textContent || "").replace(/\/\*[\s\S]*?\*\//g, "");
        "" !== i3.trim() && i3.split("}").filter((t5, e5, s4) => s4.length > 1 && t5.trim()).forEach((t5) => {
          if ((t5.match(/{/g) || []).length > 1 && t5.trim().startsWith("@")) return;
          const e5 = t5.split("{"), i4 = {}, r3 = e5[1].trim().split(";").filter(function(t6) {
            return t6.trim();
          });
          for (let t6 = 0; t6 < r3.length; t6++) {
            const e6 = r3[t6].split(":"), s4 = e6[0].trim(), n2 = e6[1].trim();
            i4[s4] = n2;
          }
          (t5 = e5[0].trim()).split(",").forEach((t6) => {
            "" !== (t6 = t6.replace(/^svg/i, "").trim()) && (s3[t6] = { ...s3[t6] || {}, ...i4 });
          });
        });
      }
      return s3;
    })(i2);
  }
  parse() {
    return Promise.all(this.elements.map((t2) => this.createObject(t2)));
  }
  async createObject(t2) {
    const e3 = qo(t2);
    if (e3) {
      const s2 = await e3.fromElement(t2, this.options, this.cssRules);
      return this.resolveGradient(s2, t2, H), this.resolveGradient(s2, t2, N), s2 instanceof Xo && s2._originalElement ? nn(s2, s2.parsePreserveAspectRatioAttribute()) : nn(s2), await this.resolveClipPath(s2, t2), this.reviver && this.reviver(t2, s2), s2;
    }
    return null;
  }
  extractPropertyDefinition(t2, e3, s2) {
    const i2 = t2[e3], r2 = this.regexUrl;
    if (!r2.test(i2)) return;
    r2.lastIndex = 0;
    const n2 = r2.exec(i2)[1];
    return r2.lastIndex = 0, s2[n2];
  }
  resolveGradient(t2, e3, s2) {
    const i2 = this.extractPropertyDefinition(t2, s2, this.gradientDefs);
    if (i2) {
      const r2 = e3.getAttribute(s2 + "-opacity"), n2 = Vn.fromElement(i2, t2, { ...this.options, opacity: r2 });
      t2.set(s2, n2);
    }
  }
  async resolveClipPath(t2, e3, s2) {
    const i2 = this.extractPropertyDefinition(t2, "clipPath", this.clipPaths);
    if (i2) {
      const r2 = wt(t2.calcTransformMatrix()), n2 = i2[0].parentElement;
      let o2 = e3;
      for (; !s2 && o2.parentElement && o2.getAttribute("clip-path") !== t2.clipPath; ) o2 = o2.parentElement;
      o2.parentElement.appendChild(n2);
      const a2 = hr(`${o2.getAttribute("transform") || ""} ${n2.getAttribute("originalTransform") || ""}`);
      n2.setAttribute("transform", `matrix(${a2.join(",")})`);
      const h2 = await Promise.all(i2.map((t3) => qo(t3).fromElement(t3, this.options, this.cssRules).then((t4) => (nn(t4), t4.fillRule = t4.clipRule, delete t4.clipRule, t4)))), l2 = 1 === h2.length ? h2[0] : new Or(h2), c2 = Tt(r2, l2.calcTransformMatrix());
      l2.clipPath && await this.resolveClipPath(l2, o2, n2.getAttribute("clip-path") ? o2 : void 0);
      const { scaleX: u2, scaleY: d2, angle: g2, skewX: f2, translateX: p2, translateY: m2 } = Dt(c2);
      l2.set({ flipX: false, flipY: false }), l2.set({ scaleX: u2, scaleY: d2, angle: g2, skewX: f2, skewY: 0 }), l2.setPositionByOrigin(new ot(p2, m2), T, T), t2.clipPath = l2;
    } else delete t2.clipPath;
  }
};
var Jo = (t2) => ps.test(Wo(t2));
async function Qo(t2, e3) {
  let { crossOrigin: s2, signal: r2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if (r2 && r2.aborted) return i("log", new n("parseSVGDocument")), { objects: [], elements: [], options: {}, allElements: [] };
  const o2 = t2.documentElement;
  !(function(t3) {
    const e4 = Go(t3, ["use", "svg:use"]), s3 = ["x", "y", "xlink:href", "href", "transform"];
    for (const i2 of e4) {
      const e5 = i2.attributes, r3 = {};
      for (const t4 of e5) t4.value && (r3[t4.name] = t4.value);
      const n2 = (r3["xlink:href"] || r3.href || "").slice(1);
      if ("" === n2) return;
      const o3 = t3.getElementById(n2);
      if (null === o3) return;
      let a3 = o3.cloneNode(true);
      const h3 = a3.attributes, l3 = {};
      for (const t4 of h3) t4.value && (l3[t4.name] = t4.value);
      const { x: c3 = 0, y: u3 = 0, transform: d2 = "" } = r3, g2 = `${d2} ${l3.transform || ""} translate(${c3}, ${u3})`;
      if (Yo(a3), /^svg$/i.test(a3.nodeName)) {
        const t4 = a3.ownerDocument.createElementNS(cs, "g");
        Object.entries(l3).forEach((e6) => {
          let [s4, i3] = e6;
          return t4.setAttributeNS(cs, s4, i3);
        }), t4.append(...a3.childNodes), a3 = t4;
      }
      for (const t4 of e5) {
        if (!t4) continue;
        const { name: e6, value: i3 } = t4;
        if (!s3.includes(e6)) if ("style" === e6) {
          const t5 = {};
          cr(i3, t5), Object.entries(l3).forEach((e7) => {
            let [s5, i4] = e7;
            t5[s5] = i4;
          }), cr(l3.style || "", t5);
          const s4 = Object.entries(t5).map((t6) => t6.join(":")).join(";");
          a3.setAttribute(e6, s4);
        } else !l3[e6] && a3.setAttribute(e6, i3);
      }
      a3.setAttribute("transform", g2), a3.setAttribute("instantiated_by_use", "1"), a3.removeAttribute("id"), i2.parentNode.replaceChild(a3, i2);
    }
  })(t2);
  const a2 = Array.from(o2.getElementsByTagName("*")), h2 = { ...Yo(o2), crossOrigin: s2, signal: r2 }, l2 = a2.filter((t3) => (Yo(t3), Jo(t3) && !(function(t4) {
    let e4 = t4;
    for (; e4 && (e4 = e4.parentElement); ) if (e4 && e4.nodeName && Vo.test(Wo(e4)) && !e4.getAttribute("instantiated_by_use")) return true;
    return false;
  })(t3)));
  if (!l2 || l2 && !l2.length) return { objects: [], elements: [], options: {}, allElements: [], options: h2, allElements: a2 };
  const c2 = {};
  a2.filter((t3) => "clipPath" === Wo(t3)).forEach((t3) => {
    t3.setAttribute("originalTransform", t3.getAttribute("transform") || "");
    const e4 = t3.getAttribute("id");
    c2[e4] = Array.from(t3.getElementsByTagName("*")).filter((t4) => Jo(t4));
  });
  const u2 = new Ko(l2, h2, e3, t2, c2);
  return { objects: await u2.parse(), elements: l2, options: h2, allElements: a2 };
}
function Zo(t2, e3, s2) {
  return Qo(new (g()).DOMParser().parseFromString(t2.trim(), "text/xml"), e3, s2);
}
function ta(t2, e3) {
  let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return fetch(t2.replace(/^\n\s*/, "").trim(), { signal: s2.signal }).then((t3) => {
    if (!t3.ok) throw new r(`HTTP error! status: ${t3.status}`);
    return t3.text();
  }).then((t3) => Zo(t3, e3, s2)).catch(() => ({ objects: [], elements: [], options: {}, allElements: [] }));
}
var ea = (t2) => void 0 !== t2.webgl;
var sa = (t2, e3) => {
  const s2 = vt({ width: t2, height: e3 }), i2 = pt().getContext("webgl"), r2 = { imageBuffer: new ArrayBuffer(t2 * e3 * 4) }, n2 = { destinationWidth: t2, destinationHeight: e3, targetCanvas: s2 };
  let o2;
  o2 = g().performance.now(), Fo.prototype.copyGLTo2D.call(r2, i2, n2);
  const a2 = g().performance.now() - o2;
  o2 = g().performance.now(), Fo.prototype.copyGLTo2DPutImageData.call(r2, i2, n2);
  return a2 > g().performance.now() - o2;
};
var ia = "precision highp float";
var ra = `
    ${ia};
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`;
var na = new RegExp(ia, "g");
var oa = class {
  get type() {
    return this.constructor.type;
  }
  constructor() {
    let { type: t2, ...e3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    Object.assign(this, this.constructor.defaults, e3);
  }
  getFragmentSource() {
    return ra;
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    void main() {\n      vTexCoord = aPosition;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }";
  }
  createProgram(t2) {
    let e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getFragmentSource(), s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.getVertexSource();
    const { WebGLProbe: { GLPrecision: i2 = "highp" } } = u();
    "highp" !== i2 && (e3 = e3.replace(na, ia.replace("highp", i2)));
    const n2 = t2.createShader(t2.VERTEX_SHADER), o2 = t2.createShader(t2.FRAGMENT_SHADER), a2 = t2.createProgram();
    if (!n2 || !o2 || !a2) throw new r("Vertex, fragment shader or program creation error");
    if (t2.shaderSource(n2, s2), t2.compileShader(n2), !t2.getShaderParameter(n2, t2.COMPILE_STATUS)) throw new r(`Vertex shader compile error for ${this.type}: ${t2.getShaderInfoLog(n2)}`);
    if (t2.shaderSource(o2, e3), t2.compileShader(o2), !t2.getShaderParameter(o2, t2.COMPILE_STATUS)) throw new r(`Fragment shader compile error for ${this.type}: ${t2.getShaderInfoLog(o2)}`);
    if (t2.attachShader(a2, n2), t2.attachShader(a2, o2), t2.linkProgram(a2), !t2.getProgramParameter(a2, t2.LINK_STATUS)) throw new r(`Shader link error for "${this.type}" ${t2.getProgramInfoLog(a2)}`);
    const h2 = this.getUniformLocations(t2, a2) || {};
    return h2.uStepW = t2.getUniformLocation(a2, "uStepW"), h2.uStepH = t2.getUniformLocation(a2, "uStepH"), { program: a2, attributeLocations: this.getAttributeLocations(t2, a2), uniformLocations: h2 };
  }
  getAttributeLocations(t2, e3) {
    return { aPosition: t2.getAttribLocation(e3, "aPosition") };
  }
  getUniformLocations(t2, e3) {
    const s2 = this.constructor.uniformLocations, i2 = {};
    for (let r2 = 0; r2 < s2.length; r2++) i2[s2[r2]] = t2.getUniformLocation(e3, s2[r2]);
    return i2;
  }
  sendAttributeData(t2, e3, s2) {
    const i2 = e3.aPosition, r2 = t2.createBuffer();
    t2.bindBuffer(t2.ARRAY_BUFFER, r2), t2.enableVertexAttribArray(i2), t2.vertexAttribPointer(i2, 2, t2.FLOAT, false, 0, 0), t2.bufferData(t2.ARRAY_BUFFER, s2, t2.STATIC_DRAW);
  }
  _setupFrameBuffer(t2) {
    const e3 = t2.context;
    if (t2.passes > 1) {
      const s2 = t2.destinationWidth, i2 = t2.destinationHeight;
      t2.sourceWidth === s2 && t2.sourceHeight === i2 || (e3.deleteTexture(t2.targetTexture), t2.targetTexture = t2.filterBackend.createTexture(e3, s2, i2)), e3.framebufferTexture2D(e3.FRAMEBUFFER, e3.COLOR_ATTACHMENT0, e3.TEXTURE_2D, t2.targetTexture, 0);
    } else e3.bindFramebuffer(e3.FRAMEBUFFER, null), e3.finish();
  }
  _swapTextures(t2) {
    t2.passes--, t2.pass++;
    const e3 = t2.targetTexture;
    t2.targetTexture = t2.sourceTexture, t2.sourceTexture = e3;
  }
  isNeutralState(t2) {
    return false;
  }
  applyTo(t2) {
    ea(t2) ? (this._setupFrameBuffer(t2), this.applyToWebGL(t2), this._swapTextures(t2)) : this.applyTo2d(t2);
  }
  applyTo2d(t2) {
  }
  getCacheKey() {
    return this.type;
  }
  retrieveShader(t2) {
    const e3 = this.getCacheKey();
    return t2.programCache[e3] || (t2.programCache[e3] = this.createProgram(t2.context)), t2.programCache[e3];
  }
  applyToWebGL(t2) {
    const e3 = t2.context, s2 = this.retrieveShader(t2);
    0 === t2.pass && t2.originalTexture ? e3.bindTexture(e3.TEXTURE_2D, t2.originalTexture) : e3.bindTexture(e3.TEXTURE_2D, t2.sourceTexture), e3.useProgram(s2.program), this.sendAttributeData(e3, s2.attributeLocations, t2.aPosition), e3.uniform1f(s2.uniformLocations.uStepW, 1 / t2.sourceWidth), e3.uniform1f(s2.uniformLocations.uStepH, 1 / t2.sourceHeight), this.sendUniformData(e3, s2.uniformLocations), e3.viewport(0, 0, t2.destinationWidth, t2.destinationHeight), e3.drawArrays(e3.TRIANGLE_STRIP, 0, 4);
  }
  bindAdditionalTexture(t2, e3, s2) {
    t2.activeTexture(s2), t2.bindTexture(t2.TEXTURE_2D, e3), t2.activeTexture(t2.TEXTURE0);
  }
  unbindAdditionalTexture(t2, e3) {
    t2.activeTexture(e3), t2.bindTexture(t2.TEXTURE_2D, null), t2.activeTexture(t2.TEXTURE0);
  }
  sendUniformData(t2, e3) {
  }
  createHelpLayer(t2) {
    if (!t2.helpLayer) {
      const { sourceWidth: e3, sourceHeight: s2 } = t2, i2 = vt({ width: e3, height: s2 });
      t2.helpLayer = i2;
    }
  }
  toObject() {
    const t2 = Object.keys(this.constructor.defaults || {});
    return { type: this.type, ...t2.reduce((t3, e3) => (t3[e3] = this[e3], t3), {}) };
  }
  toJSON() {
    return this.toObject();
  }
  static async fromObject(t2, e3) {
    let { type: s2, ...i2 } = t2;
    return new this(i2);
  }
};
t(oa, "type", "BaseFilter"), t(oa, "uniformLocations", []);
var aa = { multiply: "gl_FragColor.rgb *= uColor.rgb;\n", screen: "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n", add: "gl_FragColor.rgb += uColor.rgb;\n", difference: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n", subtract: "gl_FragColor.rgb -= uColor.rgb;\n", lighten: "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n", darken: "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n", exclusion: "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n", overlay: "\n    if (uColor.r < 0.5) {\n      gl_FragColor.r *= 2.0 * uColor.r;\n    } else {\n      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n    }\n    if (uColor.g < 0.5) {\n      gl_FragColor.g *= 2.0 * uColor.g;\n    } else {\n      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n    }\n    if (uColor.b < 0.5) {\n      gl_FragColor.b *= 2.0 * uColor.b;\n    } else {\n      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n    }\n    ", tint: "\n    gl_FragColor.rgb *= (1.0 - uColor.a);\n    gl_FragColor.rgb += uColor.rgb;\n    " };
var ha = class extends oa {
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          ${aa[this.mode]}
        }
      }
      `;
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = new ze(this.color).getSource(), i2 = this.alpha, r2 = s2[0] * i2, n2 = s2[1] * i2, o2 = s2[2] * i2, a2 = 1 - i2;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], h2 = e3[t3 + 2];
      let l2, c2, u2;
      switch (this.mode) {
        case "multiply":
          l2 = s3 * r2 / 255, c2 = i3 * n2 / 255, u2 = h2 * o2 / 255;
          break;
        case "screen":
          l2 = 255 - (255 - s3) * (255 - r2) / 255, c2 = 255 - (255 - i3) * (255 - n2) / 255, u2 = 255 - (255 - h2) * (255 - o2) / 255;
          break;
        case "add":
          l2 = s3 + r2, c2 = i3 + n2, u2 = h2 + o2;
          break;
        case "difference":
          l2 = Math.abs(s3 - r2), c2 = Math.abs(i3 - n2), u2 = Math.abs(h2 - o2);
          break;
        case "subtract":
          l2 = s3 - r2, c2 = i3 - n2, u2 = h2 - o2;
          break;
        case "darken":
          l2 = Math.min(s3, r2), c2 = Math.min(i3, n2), u2 = Math.min(h2, o2);
          break;
        case "lighten":
          l2 = Math.max(s3, r2), c2 = Math.max(i3, n2), u2 = Math.max(h2, o2);
          break;
        case "overlay":
          l2 = r2 < 128 ? 2 * s3 * r2 / 255 : 255 - 2 * (255 - s3) * (255 - r2) / 255, c2 = n2 < 128 ? 2 * i3 * n2 / 255 : 255 - 2 * (255 - i3) * (255 - n2) / 255, u2 = o2 < 128 ? 2 * h2 * o2 / 255 : 255 - 2 * (255 - h2) * (255 - o2) / 255;
          break;
        case "exclusion":
          l2 = r2 + s3 - 2 * r2 * s3 / 255, c2 = n2 + i3 - 2 * n2 * i3 / 255, u2 = o2 + h2 - 2 * o2 * h2 / 255;
          break;
        case "tint":
          l2 = r2 + s3 * a2, c2 = n2 + i3 * a2, u2 = o2 + h2 * a2;
      }
      e3[t3] = l2, e3[t3 + 1] = c2, e3[t3 + 2] = u2;
    }
  }
  sendUniformData(t2, e3) {
    const s2 = new ze(this.color).getSource();
    s2[0] = this.alpha * s2[0] / 255, s2[1] = this.alpha * s2[1] / 255, s2[2] = this.alpha * s2[2] / 255, s2[3] = this.alpha, t2.uniform4fv(e3.uColor, s2);
  }
};
t(ha, "defaults", { color: "#F95C63", mode: "multiply", alpha: 1 }), t(ha, "type", "BlendColor"), t(ha, "uniformLocations", ["uColor"]), tt.setClass(ha);
var la = { multiply: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.rgba *= color2.rgba;\n      gl_FragColor = color;\n    }\n    ", mask: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform sampler2D uImage;\n    uniform vec4 uColor;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      vec4 color2 = texture2D(uImage, vTexCoord2);\n      color.a = color2.a;\n      gl_FragColor = color;\n    }\n    " };
var ca = class extends oa {
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return la[this.mode];
  }
  getVertexSource() {
    return "\n    attribute vec2 aPosition;\n    varying vec2 vTexCoord;\n    varying vec2 vTexCoord2;\n    uniform mat3 uTransformMatrix;\n    void main() {\n      vTexCoord = aPosition;\n      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\n      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ";
  }
  applyToWebGL(t2) {
    const e3 = t2.context, s2 = this.createTexture(t2.filterBackend, this.image);
    this.bindAdditionalTexture(e3, s2, e3.TEXTURE1), super.applyToWebGL(t2), this.unbindAdditionalTexture(e3, e3.TEXTURE1);
  }
  createTexture(t2, e3) {
    return t2.getCachedTexture(e3.cacheKey, e3.getElement());
  }
  calculateMatrix() {
    const t2 = this.image, { width: e3, height: s2 } = t2.getElement();
    return [1 / t2.scaleX, 0, 0, 0, 1 / t2.scaleY, 0, -t2.left / e3, -t2.top / s2, 1];
  }
  applyTo2d(t2) {
    let { imageData: { data: e3, width: s2, height: i2 }, filterBackend: { resources: r2 } } = t2;
    const n2 = this.image;
    r2.blendImage || (r2.blendImage = pt());
    const o2 = r2.blendImage, a2 = o2.getContext("2d");
    o2.width !== s2 || o2.height !== i2 ? (o2.width = s2, o2.height = i2) : a2.clearRect(0, 0, s2, i2), a2.setTransform(n2.scaleX, 0, 0, n2.scaleY, n2.left, n2.top), a2.drawImage(n2.getElement(), 0, 0, s2, i2);
    const h2 = a2.getImageData(0, 0, s2, i2).data;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], r3 = e3[t3 + 2], n3 = e3[t3 + 3], o3 = h2[t3], a3 = h2[t3 + 1], l2 = h2[t3 + 2], c2 = h2[t3 + 3];
      switch (this.mode) {
        case "multiply":
          e3[t3] = s3 * o3 / 255, e3[t3 + 1] = i3 * a3 / 255, e3[t3 + 2] = r3 * l2 / 255, e3[t3 + 3] = n3 * c2 / 255;
          break;
        case "mask":
          e3[t3 + 3] = c2;
      }
    }
  }
  sendUniformData(t2, e3) {
    const s2 = this.calculateMatrix();
    t2.uniform1i(e3.uImage, 1), t2.uniformMatrix3fv(e3.uTransformMatrix, false, s2);
  }
  toObject() {
    return { ...super.toObject(), image: this.image && this.image.toObject() };
  }
  static async fromObject(t2, e3) {
    let { type: s2, image: i2, ...r2 } = t2;
    return Xo.fromObject(i2, e3).then((t3) => new this({ ...r2, image: t3 }));
  }
};
t(ca, "type", "BlendImage"), t(ca, "defaults", { mode: "multiply", alpha: 1 }), t(ca, "uniformLocations", ["uTransformMatrix", "uImage"]), tt.setClass(ca);
var ua = class extends oa {
  getFragmentSource() {
    return "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform vec2 uDelta;\n    varying vec2 vTexCoord;\n    const float nSamples = 15.0;\n    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);\n    float random(vec3 scale) {\n      /* use the fragment position for a different seed per-pixel */\n      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n    }\n    void main() {\n      vec4 color = vec4(0.0);\n      float totalC = 0.0;\n      float totalA = 0.0;\n      float offset = random(v3offset);\n      for (float t = -nSamples; t <= nSamples; t++) {\n        float percent = (t + offset - 0.5) / nSamples;\n        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);\n        float weight = 1.0 - abs(percent);\n        float alpha = weight * sample.a;\n        color.rgb += sample.rgb * alpha;\n        color.a += alpha;\n        totalA += weight;\n        totalC += alpha;\n      }\n      gl_FragColor.rgb = color.rgb / totalC;\n      gl_FragColor.a = color.a / totalA;\n    }\n  ";
  }
  applyTo(t2) {
    ea(t2) ? (this.aspectRatio = t2.sourceWidth / t2.sourceHeight, t2.passes++, this._setupFrameBuffer(t2), this.horizontal = true, this.applyToWebGL(t2), this._swapTextures(t2), this._setupFrameBuffer(t2), this.horizontal = false, this.applyToWebGL(t2), this._swapTextures(t2)) : this.applyTo2d(t2);
  }
  applyTo2d(t2) {
    let { imageData: { data: e3, width: s2, height: i2 } } = t2;
    this.aspectRatio = s2 / i2, this.horizontal = true;
    let r2 = this.getBlurValue() * s2;
    const n2 = new Uint8ClampedArray(e3), o2 = 15, a2 = 4 * s2;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      let s3 = 0, i3 = 0, h2 = 0, l2 = 0, c2 = 0;
      const u2 = t3 - t3 % a2, d2 = u2 + a2;
      for (let n3 = -14; n3 < o2; n3++) {
        const a3 = n3 / o2, g2 = 4 * Math.floor(r2 * a3), f2 = 1 - Math.abs(a3);
        let p2 = t3 + g2;
        p2 < u2 ? p2 = u2 : p2 > d2 && (p2 = d2);
        const m2 = e3[p2 + 3] * f2;
        s3 += e3[p2] * m2, i3 += e3[p2 + 1] * m2, h2 += e3[p2 + 2] * m2, l2 += m2, c2 += f2;
      }
      n2[t3] = s3 / l2, n2[t3 + 1] = i3 / l2, n2[t3 + 2] = h2 / l2, n2[t3 + 3] = l2 / c2;
    }
    this.horizontal = false, r2 = this.getBlurValue() * i2;
    for (let t3 = 0; t3 < n2.length; t3 += 4) {
      let s3 = 0, i3 = 0, h2 = 0, l2 = 0, c2 = 0;
      const u2 = t3 % a2, d2 = n2.length - a2 + u2;
      for (let e4 = -14; e4 < o2; e4++) {
        const g2 = e4 / o2, f2 = Math.floor(r2 * g2) * a2, p2 = 1 - Math.abs(g2);
        let m2 = t3 + f2;
        m2 < u2 ? m2 = u2 : m2 > d2 && (m2 = d2);
        const v2 = n2[m2 + 3] * p2;
        s3 += n2[m2] * v2, i3 += n2[m2 + 1] * v2, h2 += n2[m2 + 2] * v2, l2 += v2, c2 += p2;
      }
      e3[t3] = s3 / l2, e3[t3 + 1] = i3 / l2, e3[t3 + 2] = h2 / l2, e3[t3 + 3] = l2 / c2;
    }
  }
  sendUniformData(t2, e3) {
    const s2 = this.chooseRightDelta();
    t2.uniform2fv(e3.uDelta, s2);
  }
  isNeutralState() {
    return 0 === this.blur;
  }
  getBlurValue() {
    let t2 = 1;
    const { horizontal: e3, aspectRatio: s2 } = this;
    return e3 ? s2 > 1 && (t2 = 1 / s2) : s2 < 1 && (t2 = s2), t2 * this.blur * 0.12;
  }
  chooseRightDelta() {
    const t2 = this.getBlurValue();
    return this.horizontal ? [t2, 0] : [0, t2];
  }
};
t(ua, "type", "Blur"), t(ua, "defaults", { blur: 0 }), t(ua, "uniformLocations", ["uDelta"]), tt.setClass(ua);
var da = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBrightness;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += uBrightness;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = Math.round(255 * this.brightness);
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] += s2, e3[t3 + 1] += s2, e3[t3 + 2] += s2;
  }
  isNeutralState() {
    return 0 === this.brightness;
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uBrightness, this.brightness);
  }
};
t(da, "type", "Brightness"), t(da, "defaults", { brightness: 0 }), t(da, "uniformLocations", ["uBrightness"]), tt.setClass(da);
var ga = { matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], colorsOnly: true };
var fa = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  varying vec2 vTexCoord;\n  uniform mat4 uColorMatrix;\n  uniform vec4 uConstants;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color *= uColorMatrix;\n    color += uConstants;\n    gl_FragColor = color;\n  }";
  }
  applyTo2d(t2) {
    const e3 = t2.imageData.data, s2 = this.matrix, i2 = this.colorsOnly;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const r2 = e3[t3], n2 = e3[t3 + 1], o2 = e3[t3 + 2];
      if (e3[t3] = r2 * s2[0] + n2 * s2[1] + o2 * s2[2] + 255 * s2[4], e3[t3 + 1] = r2 * s2[5] + n2 * s2[6] + o2 * s2[7] + 255 * s2[9], e3[t3 + 2] = r2 * s2[10] + n2 * s2[11] + o2 * s2[12] + 255 * s2[14], !i2) {
        const i3 = e3[t3 + 3];
        e3[t3] += i3 * s2[3], e3[t3 + 1] += i3 * s2[8], e3[t3 + 2] += i3 * s2[13], e3[t3 + 3] = r2 * s2[15] + n2 * s2[16] + o2 * s2[17] + i3 * s2[18] + 255 * s2[19];
      }
    }
  }
  sendUniformData(t2, e3) {
    const s2 = this.matrix, i2 = [s2[0], s2[1], s2[2], s2[3], s2[5], s2[6], s2[7], s2[8], s2[10], s2[11], s2[12], s2[13], s2[15], s2[16], s2[17], s2[18]], r2 = [s2[4], s2[9], s2[14], s2[19]];
    t2.uniformMatrix4fv(e3.uColorMatrix, false, i2), t2.uniform4fv(e3.uConstants, r2);
  }
  toObject() {
    return { ...super.toObject(), matrix: [...this.matrix] };
  }
};
function pa(e3, s2) {
  var i2;
  const r2 = (t(i2 = class extends fa {
    toObject() {
      return { type: this.type, colorsOnly: this.colorsOnly };
    }
  }, "type", e3), t(i2, "defaults", { colorsOnly: false, matrix: s2 }), i2);
  return tt.setClass(r2, e3), r2;
}
t(fa, "type", "ColorMatrix"), t(fa, "defaults", ga), t(fa, "uniformLocations", ["uColorMatrix", "uConstants"]), tt.setClass(fa);
var ma = pa("Brownie", [0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095, 0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965, 0, 0, 0, 1, 0]);
var va = pa("Vintage", [0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411, 0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0, 0, 0, 1, 0]);
var ya = pa("Kodachrome", [1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352, -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972, 0, 0, 0, 1, 0]);
var _a = pa("Technicolor", [1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589, -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137, 0, 0, 0, 1, 0]);
var xa = pa("Polaroid", [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0]);
var Ca = pa("Sepia", [0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272, 0.534, 0.131, 0, 0, 0, 0, 0, 1, 0]);
var ba = pa("BlackWhite", [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]);
var Sa = class extends oa {
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t2), this.subFilters = t2.subFilters || [];
  }
  applyTo(t2) {
    ea(t2) && (t2.passes += this.subFilters.length - 1), this.subFilters.forEach((e3) => {
      e3.applyTo(t2);
    });
  }
  toObject() {
    return { type: this.type, subFilters: this.subFilters.map((t2) => t2.toObject()) };
  }
  isNeutralState() {
    return !this.subFilters.some((t2) => !t2.isNeutralState());
  }
  static fromObject(t2, e3) {
    return Promise.all((t2.subFilters || []).map((t3) => tt.getClass(t3.type).fromObject(t3, e3))).then((t3) => new this({ subFilters: t3 }));
  }
};
t(Sa, "type", "Composed"), tt.setClass(Sa);
var wa = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uContrast;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\n    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;\n    gl_FragColor = color;\n  }";
  }
  isNeutralState() {
    return 0 === this.contrast;
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = Math.floor(255 * this.contrast), i2 = 259 * (s2 + 255) / (255 * (259 - s2));
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = i2 * (e3[t3] - 128) + 128, e3[t3 + 1] = i2 * (e3[t3 + 1] - 128) + 128, e3[t3 + 2] = i2 * (e3[t3 + 2] - 128) + 128;
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uContrast, this.contrast);
  }
};
t(wa, "type", "Contrast"), t(wa, "defaults", { contrast: 0 }), t(wa, "uniformLocations", ["uContrast"]), tt.setClass(wa);
var Ta = { Convolute_3_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ", Convolute_3_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[9];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 3.0; h+=1.0) {\n        for (float w = 0.0; w < 3.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ", Convolute_5_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ", Convolute_5_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[25];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 5.0; h+=1.0) {\n        for (float w = 0.0; w < 5.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ", Convolute_7_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ", Convolute_7_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[49];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 7.0; h+=1.0) {\n        for (float w = 0.0; w < 7.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    ", Convolute_9_1: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 0);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      gl_FragColor = color;\n    }\n    ", Convolute_9_0: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform float uMatrix[81];\n    uniform float uStepW;\n    uniform float uStepH;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = vec4(0, 0, 0, 1);\n      for (float h = 0.0; h < 9.0; h+=1.0) {\n        for (float w = 0.0; w < 9.0; w+=1.0) {\n          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\n          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n        }\n      }\n      float alpha = texture2D(uTexture, vTexCoord).a;\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n    " };
var Oa = class extends oa {
  getCacheKey() {
    return `${this.type}_${Math.sqrt(this.matrix.length)}_${this.opaque ? 1 : 0}`;
  }
  getFragmentSource() {
    return Ta[this.getCacheKey()];
  }
  applyTo2d(t2) {
    const e3 = t2.imageData, s2 = e3.data, i2 = this.matrix, r2 = Math.round(Math.sqrt(i2.length)), n2 = Math.floor(r2 / 2), o2 = e3.width, a2 = e3.height, h2 = t2.ctx.createImageData(o2, a2), l2 = h2.data, c2 = this.opaque ? 1 : 0;
    let u2, d2, g2, f2, p2, m2, v2, y2, _2, x2, C2, b2, S2;
    for (C2 = 0; C2 < a2; C2++) for (x2 = 0; x2 < o2; x2++) {
      for (p2 = 4 * (C2 * o2 + x2), u2 = 0, d2 = 0, g2 = 0, f2 = 0, S2 = 0; S2 < r2; S2++) for (b2 = 0; b2 < r2; b2++) v2 = C2 + S2 - n2, m2 = x2 + b2 - n2, v2 < 0 || v2 >= a2 || m2 < 0 || m2 >= o2 || (y2 = 4 * (v2 * o2 + m2), _2 = i2[S2 * r2 + b2], u2 += s2[y2] * _2, d2 += s2[y2 + 1] * _2, g2 += s2[y2 + 2] * _2, c2 || (f2 += s2[y2 + 3] * _2));
      l2[p2] = u2, l2[p2 + 1] = d2, l2[p2 + 2] = g2, l2[p2 + 3] = c2 ? s2[p2 + 3] : f2;
    }
    t2.imageData = h2;
  }
  sendUniformData(t2, e3) {
    t2.uniform1fv(e3.uMatrix, this.matrix);
  }
  toObject() {
    return { ...super.toObject(), opaque: this.opaque, matrix: [...this.matrix] };
  }
};
t(Oa, "type", "Convolute"), t(Oa, "defaults", { opaque: false, matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0] }), t(Oa, "uniformLocations", ["uMatrix", "uOpaque", "uHalfSize", "uSize"]), tt.setClass(Oa);
var ka = "Gamma";
var Da = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform vec3 uGamma;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    vec3 correction = (1.0 / uGamma);\n    color.r = pow(color.r, correction.r);\n    color.g = pow(color.g, correction.g);\n    color.b = pow(color.b, correction.b);\n    gl_FragColor = color;\n    gl_FragColor.rgb *= color.a;\n  }\n";
  }
  constructor() {
    let t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    super(t2), this.gamma = t2.gamma || this.constructor.defaults.gamma.concat();
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = this.gamma, i2 = 1 / s2[0], r2 = 1 / s2[1], n2 = 1 / s2[2];
    this.rgbValues || (this.rgbValues = { r: new Uint8Array(256), g: new Uint8Array(256), b: new Uint8Array(256) });
    const o2 = this.rgbValues;
    for (let t3 = 0; t3 < 256; t3++) o2.r[t3] = 255 * Math.pow(t3 / 255, i2), o2.g[t3] = 255 * Math.pow(t3 / 255, r2), o2.b[t3] = 255 * Math.pow(t3 / 255, n2);
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = o2.r[e3[t3]], e3[t3 + 1] = o2.g[e3[t3 + 1]], e3[t3 + 2] = o2.b[e3[t3 + 2]];
  }
  sendUniformData(t2, e3) {
    t2.uniform3fv(e3.uGamma, this.gamma);
  }
  isNeutralState() {
    const { gamma: t2 } = this;
    return 1 === t2[0] && 1 === t2[1] && 1 === t2[2];
  }
  toObject() {
    return { type: ka, gamma: this.gamma.concat() };
  }
};
t(Da, "type", ka), t(Da, "defaults", { gamma: [1, 1, 1] }), t(Da, "uniformLocations", ["uGamma"]), tt.setClass(Da);
var Ma = { average: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 color = texture2D(uTexture, vTexCoord);\n      float average = (color.r + color.b + color.g) / 3.0;\n      gl_FragColor = vec4(average, average, average, color.a);\n    }\n    ", lightness: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    ", luminosity: "\n    precision highp float;\n    uniform sampler2D uTexture;\n    uniform int uMode;\n    varying vec2 vTexCoord;\n    void main() {\n      vec4 col = texture2D(uTexture, vTexCoord);\n      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\n      gl_FragColor = vec4(average, average, average, col.a);\n    }\n    " };
var Ea = class extends oa {
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    for (let t3, s2 = 0; s2 < e3.length; s2 += 4) {
      const i2 = e3[s2], r2 = e3[s2 + 1], n2 = e3[s2 + 2];
      switch (this.mode) {
        case "average":
          t3 = (i2 + r2 + n2) / 3;
          break;
        case "lightness":
          t3 = (Math.min(i2, r2, n2) + Math.max(i2, r2, n2)) / 2;
          break;
        case "luminosity":
          t3 = 0.21 * i2 + 0.72 * r2 + 0.07 * n2;
      }
      e3[s2 + 2] = e3[s2 + 1] = e3[s2] = t3;
    }
  }
  getCacheKey() {
    return `${this.type}_${this.mode}`;
  }
  getFragmentSource() {
    return Ma[this.mode];
  }
  sendUniformData(t2, e3) {
    t2.uniform1i(e3.uMode, 1);
  }
  isNeutralState() {
    return false;
  }
};
t(Ea, "type", "Grayscale"), t(Ea, "defaults", { mode: "average" }), t(Ea, "uniformLocations", ["uMode"]), tt.setClass(Ea);
var Pa = { ...ga, rotation: 0 };
var Aa = class extends fa {
  calculateMatrix() {
    const t2 = this.rotation * Math.PI, e3 = rt(t2), s2 = nt(t2), i2 = 1 / 3, r2 = Math.sqrt(i2) * s2, n2 = 1 - e3;
    this.matrix = [e3 + n2 / 3, i2 * n2 - r2, i2 * n2 + r2, 0, 0, i2 * n2 + r2, e3 + i2 * n2, i2 * n2 - r2, 0, 0, i2 * n2 - r2, i2 * n2 + r2, e3 + i2 * n2, 0, 0, 0, 0, 0, 1, 0];
  }
  isNeutralState() {
    return 0 === this.rotation;
  }
  applyTo(t2) {
    this.calculateMatrix(), super.applyTo(t2);
  }
  toObject() {
    return { type: this.type, rotation: this.rotation };
  }
};
t(Aa, "type", "HueRotation"), t(Aa, "defaults", Pa), tt.setClass(Aa);
var ja = class extends oa {
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    for (let t3 = 0; t3 < e3.length; t3 += 4) e3[t3] = 255 - e3[t3], e3[t3 + 1] = 255 - e3[t3 + 1], e3[t3 + 2] = 255 - e3[t3 + 2], this.alpha && (e3[t3 + 3] = 255 - e3[t3 + 3]);
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform int uInvert;\n  uniform int uAlpha;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    if (uInvert == 1) {\n      if (uAlpha == 1) {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);\n      } else {\n        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n      }\n    } else {\n      gl_FragColor = color;\n    }\n  }\n";
  }
  isNeutralState() {
    return !this.invert;
  }
  sendUniformData(t2, e3) {
    t2.uniform1i(e3.uInvert, Number(this.invert)), t2.uniform1i(e3.uAlpha, Number(this.alpha));
  }
};
t(ja, "type", "Invert"), t(ja, "defaults", { alpha: false, invert: true }), t(ja, "uniformLocations", ["uInvert", "uAlpha"]), tt.setClass(ja);
var Fa = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uStepH;\n  uniform float uNoise;\n  uniform float uSeed;\n  varying vec2 vTexCoord;\n  float rand(vec2 co, float seed, float vScale) {\n    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n  }\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = this.noise;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = (0.5 - Math.random()) * s2;
      e3[t3] += i2, e3[t3 + 1] += i2, e3[t3 + 2] += i2;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uNoise, this.noise / 255), t2.uniform1f(e3.uSeed, Math.random());
  }
  isNeutralState() {
    return 0 === this.noise;
  }
};
t(Fa, "type", "Noise"), t(Fa, "defaults", { noise: 0 }), t(Fa, "uniformLocations", ["uNoise", "uSeed"]), tt.setClass(Fa);
var La = class extends oa {
  applyTo2d(t2) {
    let { imageData: { data: e3, width: s2, height: i2 } } = t2;
    for (let t3 = 0; t3 < i2; t3 += this.blocksize) for (let r2 = 0; r2 < s2; r2 += this.blocksize) {
      const n2 = 4 * t3 * s2 + 4 * r2, o2 = e3[n2], a2 = e3[n2 + 1], h2 = e3[n2 + 2], l2 = e3[n2 + 3];
      for (let n3 = t3; n3 < Math.min(t3 + this.blocksize, i2); n3++) for (let t4 = r2; t4 < Math.min(r2 + this.blocksize, s2); t4++) {
        const i3 = 4 * n3 * s2 + 4 * t4;
        e3[i3] = o2, e3[i3 + 1] = a2, e3[i3 + 2] = h2, e3[i3 + 3] = l2;
      }
    }
  }
  isNeutralState() {
    return 1 === this.blocksize;
  }
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uBlocksize;\n  uniform float uStepW;\n  uniform float uStepH;\n  varying vec2 vTexCoord;\n  void main() {\n    float blockW = uBlocksize * uStepW;\n    float blockH = uBlocksize * uStepH;\n    int posX = int(vTexCoord.x / blockW);\n    int posY = int(vTexCoord.y / blockH);\n    float fposX = float(posX);\n    float fposY = float(posY);\n    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\n    vec4 color = texture2D(uTexture, squareCoords);\n    gl_FragColor = color;\n  }\n";
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uBlocksize, this.blocksize);
  }
};
t(La, "type", "Pixelate"), t(La, "defaults", { blocksize: 4 }), t(La, "uniformLocations", ["uBlocksize"]), tt.setClass(La);
var Ia = class extends oa {
  getFragmentSource() {
    return "\nprecision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTexture, vTexCoord);\n  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\n    gl_FragColor.a = 0.0;\n  }\n}\n";
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = 255 * this.distance, i2 = new ze(this.color).getSource(), r2 = [i2[0] - s2, i2[1] - s2, i2[2] - s2], n2 = [i2[0] + s2, i2[1] + s2, i2[2] + s2];
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const s3 = e3[t3], i3 = e3[t3 + 1], o2 = e3[t3 + 2];
      s3 > r2[0] && i3 > r2[1] && o2 > r2[2] && s3 < n2[0] && i3 < n2[1] && o2 < n2[2] && (e3[t3 + 3] = 0);
    }
  }
  sendUniformData(t2, e3) {
    const s2 = new ze(this.color).getSource(), i2 = this.distance, r2 = [0 + s2[0] / 255 - i2, 0 + s2[1] / 255 - i2, 0 + s2[2] / 255 - i2, 1], n2 = [s2[0] / 255 + i2, s2[1] / 255 + i2, s2[2] / 255 + i2, 1];
    t2.uniform4fv(e3.uLow, r2), t2.uniform4fv(e3.uHigh, n2);
  }
};
t(Ia, "type", "RemoveColor"), t(Ia, "defaults", { color: "#FFFFFF", distance: 0.02, useAlpha: false }), t(Ia, "uniformLocations", ["uLow", "uHigh"]), tt.setClass(Ia);
var Ra = class extends oa {
  sendUniformData(t2, e3) {
    t2.uniform2fv(e3.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]), t2.uniform1fv(e3.uTaps, this.taps);
  }
  getFilterWindow() {
    const t2 = this.tempScale;
    return Math.ceil(this.lanczosLobes / t2);
  }
  getCacheKey() {
    const t2 = this.getFilterWindow();
    return `${this.type}_${t2}`;
  }
  getFragmentSource() {
    const t2 = this.getFilterWindow();
    return this.generateShader(t2);
  }
  getTaps() {
    const t2 = this.lanczosCreate(this.lanczosLobes), e3 = this.tempScale, s2 = this.getFilterWindow(), i2 = new Array(s2);
    for (let r2 = 1; r2 <= s2; r2++) i2[r2 - 1] = t2(r2 * e3);
    return i2;
  }
  generateShader(t2) {
    const e3 = new Array(t2);
    for (let s2 = 1; s2 <= t2; s2++) e3[s2 - 1] = `${s2}.0 * uDelta`;
    return `
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[${t2}];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        ${e3.map((t3, e4) => `
              color += texture2D(uTexture, vTexCoord + ${t3}) * uTaps[${e4}] + texture2D(uTexture, vTexCoord - ${t3}) * uTaps[${e4}];
              sum += 2.0 * uTaps[${e4}];
            `).join("\n")}
        gl_FragColor = color / sum;
      }
    `;
  }
  applyToForWebgl(t2) {
    t2.passes++, this.width = t2.sourceWidth, this.horizontal = true, this.dW = Math.round(this.width * this.scaleX), this.dH = t2.sourceHeight, this.tempScale = this.dW / this.width, this.taps = this.getTaps(), t2.destinationWidth = this.dW, super.applyTo(t2), t2.sourceWidth = t2.destinationWidth, this.height = t2.sourceHeight, this.horizontal = false, this.dH = Math.round(this.height * this.scaleY), this.tempScale = this.dH / this.height, this.taps = this.getTaps(), t2.destinationHeight = this.dH, super.applyTo(t2), t2.sourceHeight = t2.destinationHeight;
  }
  applyTo(t2) {
    ea(t2) ? this.applyToForWebgl(t2) : this.applyTo2d(t2);
  }
  isNeutralState() {
    return 1 === this.scaleX && 1 === this.scaleY;
  }
  lanczosCreate(t2) {
    return (e3) => {
      if (e3 >= t2 || e3 <= -t2) return 0;
      if (e3 < 11920929e-14 && e3 > -11920929e-14) return 1;
      const s2 = (e3 *= Math.PI) / t2;
      return Math.sin(e3) / e3 * Math.sin(s2) / s2;
    };
  }
  applyTo2d(t2) {
    const e3 = t2.imageData, s2 = this.scaleX, i2 = this.scaleY;
    this.rcpScaleX = 1 / s2, this.rcpScaleY = 1 / i2;
    const r2 = e3.width, n2 = e3.height, o2 = Math.round(r2 * s2), a2 = Math.round(n2 * i2);
    let h2;
    h2 = "sliceHack" === this.resizeType ? this.sliceByTwo(t2, r2, n2, o2, a2) : "hermite" === this.resizeType ? this.hermiteFastResize(t2, r2, n2, o2, a2) : "bilinear" === this.resizeType ? this.bilinearFiltering(t2, r2, n2, o2, a2) : "lanczos" === this.resizeType ? this.lanczosResize(t2, r2, n2, o2, a2) : new ImageData(o2, a2), t2.imageData = h2;
  }
  sliceByTwo(t2, e3, s2, i2, r2) {
    const n2 = t2.imageData, o2 = 0.5;
    let a2 = false, h2 = false, l2 = e3 * o2, c2 = s2 * o2;
    const u2 = t2.filterBackend.resources;
    let d2 = 0, g2 = 0;
    const f2 = e3;
    let p2 = 0;
    u2.sliceByTwo || (u2.sliceByTwo = pt());
    const m2 = u2.sliceByTwo;
    (m2.width < 1.5 * e3 || m2.height < s2) && (m2.width = 1.5 * e3, m2.height = s2);
    const v2 = m2.getContext("2d");
    for (v2.clearRect(0, 0, 1.5 * e3, s2), v2.putImageData(n2, 0, 0), i2 = Math.floor(i2), r2 = Math.floor(r2); !a2 || !h2; ) e3 = l2, s2 = c2, i2 < Math.floor(l2 * o2) ? l2 = Math.floor(l2 * o2) : (l2 = i2, a2 = true), r2 < Math.floor(c2 * o2) ? c2 = Math.floor(c2 * o2) : (c2 = r2, h2 = true), v2.drawImage(m2, d2, g2, e3, s2, f2, p2, l2, c2), d2 = f2, g2 = p2, p2 += c2;
    return v2.getImageData(d2, g2, i2, r2);
  }
  lanczosResize(t2, e3, s2, i2, r2) {
    const n2 = t2.imageData.data, o2 = t2.ctx.createImageData(i2, r2), a2 = o2.data, h2 = this.lanczosCreate(this.lanczosLobes), l2 = this.rcpScaleX, c2 = this.rcpScaleY, u2 = 2 / this.rcpScaleX, d2 = 2 / this.rcpScaleY, g2 = Math.ceil(l2 * this.lanczosLobes / 2), f2 = Math.ceil(c2 * this.lanczosLobes / 2), p2 = {}, m2 = { x: 0, y: 0 }, v2 = { x: 0, y: 0 };
    return (function t3(y2) {
      let _2, x2, C2, b2, S2, w2, T2, O2, k2, D2, M2;
      for (m2.x = (y2 + 0.5) * l2, v2.x = Math.floor(m2.x), _2 = 0; _2 < r2; _2++) {
        for (m2.y = (_2 + 0.5) * c2, v2.y = Math.floor(m2.y), S2 = 0, w2 = 0, T2 = 0, O2 = 0, k2 = 0, x2 = v2.x - g2; x2 <= v2.x + g2; x2++) if (!(x2 < 0 || x2 >= e3)) {
          D2 = Math.floor(1e3 * Math.abs(x2 - m2.x)), p2[D2] || (p2[D2] = {});
          for (let t4 = v2.y - f2; t4 <= v2.y + f2; t4++) t4 < 0 || t4 >= s2 || (M2 = Math.floor(1e3 * Math.abs(t4 - m2.y)), p2[D2][M2] || (p2[D2][M2] = h2(Math.sqrt(Math.pow(D2 * u2, 2) + Math.pow(M2 * d2, 2)) / 1e3)), C2 = p2[D2][M2], C2 > 0 && (b2 = 4 * (t4 * e3 + x2), S2 += C2, w2 += C2 * n2[b2], T2 += C2 * n2[b2 + 1], O2 += C2 * n2[b2 + 2], k2 += C2 * n2[b2 + 3]));
        }
        b2 = 4 * (_2 * i2 + y2), a2[b2] = w2 / S2, a2[b2 + 1] = T2 / S2, a2[b2 + 2] = O2 / S2, a2[b2 + 3] = k2 / S2;
      }
      return ++y2 < i2 ? t3(y2) : o2;
    })(0);
  }
  bilinearFiltering(t2, e3, s2, i2, r2) {
    let n2, o2, a2, h2, l2, c2, u2, d2, g2, f2, p2, m2, v2, y2 = 0;
    const _2 = this.rcpScaleX, x2 = this.rcpScaleY, C2 = 4 * (e3 - 1), b2 = t2.imageData.data, S2 = t2.ctx.createImageData(i2, r2), w2 = S2.data;
    for (u2 = 0; u2 < r2; u2++) for (d2 = 0; d2 < i2; d2++) for (l2 = Math.floor(_2 * d2), c2 = Math.floor(x2 * u2), g2 = _2 * d2 - l2, f2 = x2 * u2 - c2, v2 = 4 * (c2 * e3 + l2), p2 = 0; p2 < 4; p2++) n2 = b2[v2 + p2], o2 = b2[v2 + 4 + p2], a2 = b2[v2 + C2 + p2], h2 = b2[v2 + C2 + 4 + p2], m2 = n2 * (1 - g2) * (1 - f2) + o2 * g2 * (1 - f2) + a2 * f2 * (1 - g2) + h2 * g2 * f2, w2[y2++] = m2;
    return S2;
  }
  hermiteFastResize(t2, e3, s2, i2, r2) {
    const n2 = this.rcpScaleX, o2 = this.rcpScaleY, a2 = Math.ceil(n2 / 2), h2 = Math.ceil(o2 / 2), l2 = t2.imageData.data, c2 = t2.ctx.createImageData(i2, r2), u2 = c2.data;
    for (let t3 = 0; t3 < r2; t3++) for (let s3 = 0; s3 < i2; s3++) {
      const r3 = 4 * (s3 + t3 * i2);
      let c3 = 0, d2 = 0, g2 = 0, f2 = 0, p2 = 0, m2 = 0, v2 = 0;
      const y2 = (t3 + 0.5) * o2;
      for (let i3 = Math.floor(t3 * o2); i3 < (t3 + 1) * o2; i3++) {
        const t4 = Math.abs(y2 - (i3 + 0.5)) / h2, r4 = (s3 + 0.5) * n2, o3 = t4 * t4;
        for (let t5 = Math.floor(s3 * n2); t5 < (s3 + 1) * n2; t5++) {
          let s4 = Math.abs(r4 - (t5 + 0.5)) / a2;
          const n3 = Math.sqrt(o3 + s4 * s4);
          n3 > 1 && n3 < -1 || (c3 = 2 * n3 * n3 * n3 - 3 * n3 * n3 + 1, c3 > 0 && (s4 = 4 * (t5 + i3 * e3), v2 += c3 * l2[s4 + 3], g2 += c3, l2[s4 + 3] < 255 && (c3 = c3 * l2[s4 + 3] / 250), f2 += c3 * l2[s4], p2 += c3 * l2[s4 + 1], m2 += c3 * l2[s4 + 2], d2 += c3));
        }
      }
      u2[r3] = f2 / d2, u2[r3 + 1] = p2 / d2, u2[r3 + 2] = m2 / d2, u2[r3 + 3] = v2 / g2;
    }
    return c2;
  }
};
t(Ra, "type", "Resize"), t(Ra, "defaults", { resizeType: "hermite", scaleX: 1, scaleY: 1, lanczosLobes: 3 }), t(Ra, "uniformLocations", ["uDelta", "uTaps"]), tt.setClass(Ra);
var Ba = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uSaturation;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float rgMax = max(color.r, color.g);\n    float rgbMax = max(rgMax, color.b);\n    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\n    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\n    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = -this.saturation;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = e3[t3], r2 = e3[t3 + 1], n2 = e3[t3 + 2], o2 = Math.max(i2, r2, n2);
      e3[t3] += o2 !== i2 ? (o2 - i2) * s2 : 0, e3[t3 + 1] += o2 !== r2 ? (o2 - r2) * s2 : 0, e3[t3 + 2] += o2 !== n2 ? (o2 - n2) * s2 : 0;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uSaturation, -this.saturation);
  }
  isNeutralState() {
    return 0 === this.saturation;
  }
};
t(Ba, "type", "Saturation"), t(Ba, "defaults", { saturation: 0 }), t(Ba, "uniformLocations", ["uSaturation"]), tt.setClass(Ba);
var $a = class extends oa {
  getFragmentSource() {
    return "\n  precision highp float;\n  uniform sampler2D uTexture;\n  uniform float uVibrance;\n  varying vec2 vTexCoord;\n  void main() {\n    vec4 color = texture2D(uTexture, vTexCoord);\n    float max = max(color.r, max(color.g, color.b));\n    float avg = (color.r + color.g + color.b) / 3.0;\n    float amt = (abs(max - avg) * 2.0) * uVibrance;\n    color.r += max != color.r ? (max - color.r) * amt : 0.00;\n    color.g += max != color.g ? (max - color.g) * amt : 0.00;\n    color.b += max != color.b ? (max - color.b) * amt : 0.00;\n    gl_FragColor = color;\n  }\n";
  }
  applyTo2d(t2) {
    let { imageData: { data: e3 } } = t2;
    const s2 = -this.vibrance;
    for (let t3 = 0; t3 < e3.length; t3 += 4) {
      const i2 = e3[t3], r2 = e3[t3 + 1], n2 = e3[t3 + 2], o2 = Math.max(i2, r2, n2), a2 = (i2 + r2 + n2) / 3, h2 = 2 * Math.abs(o2 - a2) / 255 * s2;
      e3[t3] += o2 !== i2 ? (o2 - i2) * h2 : 0, e3[t3 + 1] += o2 !== r2 ? (o2 - r2) * h2 : 0, e3[t3 + 2] += o2 !== n2 ? (o2 - n2) * h2 : 0;
    }
  }
  sendUniformData(t2, e3) {
    t2.uniform1f(e3.uVibrance, -this.vibrance);
  }
  isNeutralState() {
    return 0 === this.vibrance;
  }
};
t($a, "type", "Vibrance"), t($a, "defaults", { vibrance: 0 }), t($a, "uniformLocations", ["uVibrance"]), tt.setClass($a);
var Xa = Object.freeze({ __proto__: null, BaseFilter: oa, BlackWhite: ba, BlendColor: ha, BlendImage: ca, Blur: ua, Brightness: da, Brownie: ma, ColorMatrix: fa, Composed: Sa, Contrast: wa, Convolute: Oa, Gamma: Da, Grayscale: Ea, HueRotation: Aa, Invert: ja, Kodachrome: ya, Noise: Fa, Pixelate: La, Polaroid: xa, RemoveColor: Ia, Resize: Ra, Saturation: Ba, Sepia: Ca, Technicolor: _a, Vibrance: $a, Vintage: va });
export {
  Ao as ActiveSelection,
  zn as BaseBrush,
  Vs as BaseFabricObject,
  Mn as Canvas,
  jo as Canvas2dFilterBackend,
  hn as CanvasDOMManager,
  qn as Circle,
  Kn as CircleBrush,
  Mo as ClipPathLayout,
  ze as Color,
  ti as Control,
  io as Ellipse,
  Xo as FabricImage,
  ki as FabricObject,
  go as FabricText,
  br as FitContentLayout,
  Eo as FixedLayout,
  Vn as Gradient,
  Or as Group,
  ko as IText,
  Xo as Image,
  Ti as InteractiveFabricObject,
  Ys as Intersection,
  wr as LayoutManager,
  Cr as LayoutStrategy,
  to as Line,
  ki as Object,
  st as Observable,
  Hn as Path,
  Gn as Pattern,
  Qn as PatternBrush,
  Nn as PencilBrush,
  ot as Point,
  oo as Polygon,
  no as Polyline,
  pr as Rect,
  Cs as Shadow,
  Jn as SprayBrush,
  se as StaticCanvas,
  te as StaticCanvasDOMManager,
  go as Text,
  Do as Textbox,
  eo as Triangle,
  Fo as WebGLFilterBackend,
  p as cache,
  tt as classRegistry,
  s as config,
  Cn as controlsUtils,
  lt as createCollectionMixin,
  Xa as filters,
  u as getEnv,
  d as getFabricDocument,
  g as getFabricWindow,
  Ro as getFilterBackend,
  b as iMatrix,
  Io as initFilterBackend,
  sa as isPutImageFaster,
  ea as isWebGLPipelineState,
  Zo as loadSVGFromString,
  ta as loadSVGFromURL,
  Qo as parseSVGDocument,
  et as runningAnimations,
  c as setEnv,
  Bo as setFilterBackend,
  on as util,
  m as version
};
//# sourceMappingURL=fabric.js.map
