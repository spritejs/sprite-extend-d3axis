(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("spritejs"));
	else if(typeof define === 'function' && define.amd)
		define(["spritejs"], factory);
	else if(typeof exports === 'object')
		exports["Axis"] = factory(require("spritejs"));
	else
		root["spritejs"] = root["spritejs"] || {}, root["spritejs"]["Axis"] = factory(root["spritejs"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {// for webpack build

// import Axis from './index'

// module.exports = Axis

// const Axis = require('./index')

const Axis = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["default"] = (Axis);

module.exports = Axis;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Axis; });
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var sprite_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sprite_core__WEBPACK_IMPORTED_MODULE_1__);


var _dec, _dec2, _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(29);


const { parseStringFloat, parseColorString, parseValue, attr } = sprite_core__WEBPACK_IMPORTED_MODULE_1__["utils"];

function ticksToD(axis) {
  if (!axis) return;

  let {
    direction,
    ticks,
    length,
    vLength,
    font,
    lineWidth,
    color,
    axisScales
  } = axis.attr();

  const originTicks = ticks.slice(0);

  let axisTicks = ticks.slice(0);

  if (axisScales.length) {
    axisTicks = axisTicks.map(tick => axisScales.reduce((v, s) => s(v), tick));
    axisTicks = axisTicks.filter(tick => tick >= 0);
  }

  if (axisTicks.length <= 0) {
    return;
  }
  ticks = ticks.slice(-axisTicks.length);

  if (axisScales.length) {
    const scale = axisScales[axisScales.length - 1],
          [start, end] = scale.range(),
          [from, to] = scale.domain();

    if (start < axisTicks[0]) {
      ticks.unshift(from);
      axisTicks.unshift(start);
    }
    if (end > axisTicks[axisTicks.length - 1]) {
      ticks.push(to);
      axisTicks.push(end);
    }
  }

  const dist = axisTicks[axisTicks.length - 1] - axisTicks[0];
  if (length === 'auto') length = dist;

  let d;

  const points = axisTicks.map(tick => length * (tick - axisTicks[0]) / dist);

  let offsetY = 0,
      offsetX = 0,
      offsetX0 = 0;

  axis.clear();

  ticks.forEach((data, i) => {
    if (originTicks.indexOf(data) === -1) return;

    const label = new sprite_core__WEBPACK_IMPORTED_MODULE_1__["Label"]();

    label.text = data;
    label.attr({ font, fillColor: color });
    const [w, h] = label.contentSize;

    offsetY = Math.max(offsetY, h);
    offsetX = Math.max(offsetX, w);

    if (i === 0) {
      offsetX0 = w;
    }

    let x = points[i];

    if (x != null) {
      if (direction === 'top') {
        label.attr({
          anchor: [0.5, 1.0],
          pos: [offsetX0 + x, vLength - 5]
        });
      } else if (direction === 'bottom') {
        label.attr({
          anchor: [0.5, 0],
          pos: [offsetX0 + x, vLength]
        });
      } else if (direction === 'left') {
        x = length - x;
        label.attr({
          anchor: [0, 0.5],
          pos: [vLength + 5, x]
        });
      } else if (direction === 'right') {
        x = length - x;
        label.attr({
          anchor: [1.0, 0.5],
          pos: [-5, x]
        });
      }

      axis.appendChild(label);
    }
  });

  let rect;
  if (direction === 'top') {
    d = `M0 ${vLength} h${length}`;
    points.forEach(point => {
      d += `M${point} 0 v${vLength}`;
    });
    rect = [offsetX0, offsetY + 5, length, vLength];
  } else if (direction === 'bottom') {
    d = `M0 0 h${length}`;
    points.forEach(point => {
      d += `M${Math.round(point)} 0 v${vLength}`;
    });
    rect = [offsetX0, 0, length, vLength];
  } else if (direction === 'left') {
    d = `M0 0 v${length}`;
    points.forEach(point => {
      d += `M0 ${length - point} h${vLength}`;
    });
    rect = [0, offsetY / 2, vLength, length];
  } else if (direction === 'right') {
    d = `M${offsetX + 5} 0 v${length}`;
    points.forEach(point => {
      d += `M${offsetX + 5 - vLength} ${length - point} h${vLength}`;
    });

    rect = [offsetX + 5, offsetY / 2, vLength, length];
  }

  const path = new sprite_core__WEBPACK_IMPORTED_MODULE_1__["Path"]();
  path.attr({
    d,
    lineWidth,
    strokeColor: color,
    pos: [rect[0], rect[1]]
  });
  axis.appendChild(path);
}

let AxisSpriteAttr = (_dec = parseValue(parseStringFloat), _dec2 = parseValue(parseColorString), (_class = class AxisSpriteAttr extends sprite_core__WEBPACK_IMPORTED_MODULE_1__["Group"].Attr {
  constructor(subject) {
    super(subject);

    this.setDefault({
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke', // stroke, fill

      font: '24px Arial',
      axisScales: []
    });
  }

  set font(val) {
    this.clearCache();
    this.set('font', val);
    ticksToD(this.subject);
  }

  set direction(val) {
    this.clearCache();
    this.set('direction', val);
    ticksToD(this.subject);
  }

  set length(val) {
    this.clearCache();
    this.set('length', val);
    ticksToD(this.subject);
  }

  set vLength(val) {
    this.clearCache();
    this.set('vLength', Math.round(val));
    ticksToD(this.subject);
  }

  set ticks(ticks) {
    this.clearCache();
    this.set('ticks', ticks.sort((a, b) => a - b));
    ticksToD(this.subject);
  }

  // set d3 scales, unsafe

  set axisScales(val) {
    this.clearCache();
    this.saveObj('axisScales', val);
    ticksToD(this.subject);
  }
  get axisScales() {
    return this.loadObj('axisScales') || [];
  }

  set lineWidth(val) {
    this.clearCache();
    this.set('lineWidth', val);
    ticksToD(this.subject);
  }

  set color(val) {
    this.clearCache();
    this.set('color', val);
    ticksToD(this.subject);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'font', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'direction', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'direction'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'length', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'length'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'vLength', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'vLength'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'ticks', [_dec, attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'ticks'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'axisScales', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'axisScales'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_dec2, attr], babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(_class.prototype, 'color'), _class.prototype)), _class));
let Axis = (_temp = _class2 = class Axis extends sprite_core__WEBPACK_IMPORTED_MODULE_1__["Group"] {

  constructor(ticks = [0, 100], opts) {
    super(opts);
    if (ticks) {
      this.attr({ ticks });
    }
  }

  cloneNode() {
    const node = super.cloneNode();
    node.attr('axisScales', this.attr('axisScales'));
  }
}, _class2.Attr = AxisSpriteAttr, _temp);



Object(sprite_core__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('axis', Axis);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
var $Object = __webpack_require__(23).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(6);
var $getOwnPropertyDescriptor = __webpack_require__(10).f;

__webpack_require__(21)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(7);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(11);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(13);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(16);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(20).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(22);
var core = __webpack_require__(23);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(20);
var core = __webpack_require__(23);
var ctx = __webpack_require__(24);
var hide = __webpack_require__(26);
var has = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(17) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(28);
var IE8_DOM_DEFINE = __webpack_require__(16);
var toPrimitive = __webpack_require__(13);
var dP = Object.defineProperty;

exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ })
/******/ ]);
});