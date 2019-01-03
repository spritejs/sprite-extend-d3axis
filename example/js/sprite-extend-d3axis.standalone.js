(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spritejs"] = factory();
	else
		root["spritejs"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _spritejs = __webpack_require__(1);

var _spritejs2 = _interopRequireDefault(_spritejs);

var _index = __webpack_require__(203);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_spritejs2.default.Axis = _index2.default;

module.exports = _spritejs2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Easings = exports.Effects = exports.Resource = exports.Color = exports.createElement = exports.createNode = exports.isValidNodeType = exports.registerNodeType = exports.Paper2D = exports.Scene = exports.Layer = exports.Group = exports.Path = exports.Label = exports.Sprite = exports.BaseSprite = exports.BaseNode = exports.stylesheet = exports.querySelectorAll = exports.querySelector = exports.use = exports.utils = exports.math = exports.version = exports._debugger = undefined;

var _spritejs = __webpack_require__(2);

var spritejs = _interopRequireWildcard(_spritejs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = spritejs; // es modules for rollup

var _debugger = spritejs._debugger,
    version = spritejs.version,
    math = spritejs.math,
    utils = spritejs.utils,
    use = spritejs.use,
    querySelector = spritejs.querySelector,
    querySelectorAll = spritejs.querySelectorAll,
    stylesheet = spritejs.stylesheet,
    BaseNode = spritejs.BaseNode,
    BaseSprite = spritejs.BaseSprite,
    Sprite = spritejs.Sprite,
    Label = spritejs.Label,
    Path = spritejs.Path,
    Group = spritejs.Group,
    Layer = spritejs.Layer,
    Scene = spritejs.Scene,
    Paper2D = spritejs.Paper2D,
    registerNodeType = spritejs.registerNodeType,
    isValidNodeType = spritejs.isValidNodeType,
    createNode = spritejs.createNode,
    createElement = spritejs.createElement,
    Color = spritejs.Color,
    Resource = spritejs.Resource,
    Effects = spritejs.Effects,
    Easings = spritejs.Easings,
    Timeline = spritejs.Timeline;
exports._debugger = _debugger;
exports.version = version;
exports.math = math;
exports.utils = utils;
exports.use = use;
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;
exports.stylesheet = stylesheet;
exports.BaseNode = BaseNode;
exports.BaseSprite = BaseSprite;
exports.Sprite = Sprite;
exports.Label = Label;
exports.Path = Path;
exports.Group = Group;
exports.Layer = Layer;
exports.Scene = Scene;
exports.Paper2D = Paper2D;
exports.registerNodeType = registerNodeType;
exports.isValidNodeType = isValidNodeType;
exports.createNode = createNode;
exports.createElement = createElement;
exports.Color = Color;
exports.Resource = Resource;
exports.Effects = Effects;
exports.Easings = Easings;
exports.Timeline = Timeline;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _values3=__webpack_require__(3);var _values4=_interopRequireDefault2(_values3);var _isFinite=__webpack_require__(38);var _isFinite2=_interopRequireDefault2(_isFinite);var _regenerator=__webpack_require__(41);var _regenerator2=_interopRequireDefault2(_regenerator);var _asyncToGenerator2=__webpack_require__(44);var _asyncToGenerator3=_interopRequireDefault2(_asyncToGenerator2);var _weakSet=__webpack_require__(85);var _weakSet2=_interopRequireDefault2(_weakSet);var _defineProperty3=__webpack_require__(100);var _defineProperty4=_interopRequireDefault2(_defineProperty3);var _get3=__webpack_require__(104);var _get4=_interopRequireDefault2(_get3);var _getIterator2=__webpack_require__(113);var _getIterator3=_interopRequireDefault2(_getIterator2);var _fromCodePoint=__webpack_require__(116);var _fromCodePoint2=_interopRequireDefault2(_fromCodePoint);var _set2=__webpack_require__(119);var _set3=_interopRequireDefault2(_set2);var _defineProperties=__webpack_require__(122);var _defineProperties2=_interopRequireDefault2(_defineProperties);var _stringify=__webpack_require__(125);var _stringify2=_interopRequireDefault2(_stringify);var _setPrototypeOf=__webpack_require__(127);var _setPrototypeOf2=_interopRequireDefault2(_setPrototypeOf);var _get5=__webpack_require__(131);var _get6=_interopRequireDefault2(_get5);var _from=__webpack_require__(134);var _from2=_interopRequireDefault2(_from);var _isIterable2=__webpack_require__(138);var _isIterable3=_interopRequireDefault2(_isIterable2);var _toPrimitive2=__webpack_require__(141);var _toPrimitive3=_interopRequireDefault2(_toPrimitive2);var _extends2=__webpack_require__(144);var _extends3=_interopRequireDefault2(_extends2);var _getOwnPropertyDescriptor=__webpack_require__(109);var _getOwnPropertyDescriptor2=_interopRequireDefault2(_getOwnPropertyDescriptor);var _weakMap=__webpack_require__(150);var _weakMap2=_interopRequireDefault2(_weakMap);var _set4=__webpack_require__(155);var _set5=_interopRequireDefault2(_set4);var _isNan=__webpack_require__(164);var _isNan2=_interopRequireDefault2(_isNan);var _toArray3=__webpack_require__(167);var _toArray4=_interopRequireDefault2(_toArray3);var _entries=__webpack_require__(168);var _entries2=_interopRequireDefault2(_entries);var _promise=__webpack_require__(45);var _promise2=_interopRequireDefault2(_promise);var _keys=__webpack_require__(171);var _keys2=_interopRequireDefault2(_keys);var _slicedToArray3=__webpack_require__(174);var _slicedToArray4=_interopRequireDefault2(_slicedToArray3);var _toConsumableArray3=__webpack_require__(175);var _toConsumableArray4=_interopRequireDefault2(_toConsumableArray3);var _map=__webpack_require__(176);var _map2=_interopRequireDefault2(_map);var _assign=__webpack_require__(145);var _assign2=_interopRequireDefault2(_assign);var _createClass3=__webpack_require__(182);var _createClass4=_interopRequireDefault2(_createClass3);var _getPrototypeOf2=__webpack_require__(105);var _getPrototypeOf3=_interopRequireDefault2(_getPrototypeOf2);var _classCallCheck3=__webpack_require__(183);var _classCallCheck4=_interopRequireDefault2(_classCallCheck3);var _possibleConstructorReturn2=__webpack_require__(184);var _possibleConstructorReturn3=_interopRequireDefault2(_possibleConstructorReturn2);var _inherits2=__webpack_require__(197);var _inherits3=_interopRequireDefault2(_inherits2);var _create=__webpack_require__(198);var _create2=_interopRequireDefault2(_create);var _typeof2=__webpack_require__(185);var _typeof3=_interopRequireDefault2(_typeof2);var _toStringTag=__webpack_require__(201);var _toStringTag2=_interopRequireDefault2(_toStringTag);var _symbol=__webpack_require__(188);var _symbol2=_interopRequireDefault2(_symbol);var _defineProperty5=__webpack_require__(101);var _defineProperty6=_interopRequireDefault2(_defineProperty5);function _interopRequireDefault2(obj){return obj&&obj.__esModule?obj:{default:obj};}module.exports=/******/function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/(0,_defineProperty6.default)(exports,name,{enumerable:true,get:getter});/******/}/******/};/******//******/// define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof _symbol2.default!=='undefined'&&_toStringTag2.default){/******/(0,_defineProperty6.default)(exports,_toStringTag2.default,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&(typeof value==='undefined'?'undefined':(0,_typeof3.default)(value))==='object'&&value&&value.__esModule)return value;/******/var ns=(0,_create2.default)(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));}/******/return ns;/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="/js/";/******//******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"version",function(){return version;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Scene",function(){return Scene;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Paper2D",function(){return Paper2D;});/* harmony import */var sprite_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"math",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["math"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"utils",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"use",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["use"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelector",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["querySelector"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelectorAll",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"stylesheet",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["stylesheet"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BaseNode",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Label",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Label"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Path",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Path"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Group",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Group"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"registerNodeType",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isValidNodeType",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["isValidNodeType"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createNode",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createNode"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createElement",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["createElement"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Color",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Color"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Effects",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Effects"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Easings",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Easings"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Timeline",function(){return sprite_core__WEBPACK_IMPORTED_MODULE_0__["Timeline"];});/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(102);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BaseSprite",function(){return _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"];});/* harmony import */var _sprite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(132);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Sprite",function(){return _sprite__WEBPACK_IMPORTED_MODULE_2__["default"];});/* harmony import */var _layer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(133);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Layer",function(){return _layer__WEBPACK_IMPORTED_MODULE_3__["default"];});/* harmony import */var _scene__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(134);/* harmony import */var _resource__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(103);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Resource",function(){return _resource__WEBPACK_IMPORTED_MODULE_5__["default"];});/* harmony import */var _platform__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(104);/* harmony import */var _platform_devtools__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(135);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"_debugger",function(){return _platform_devtools__WEBPACK_IMPORTED_MODULE_7__["_debugger"];});var Scene=function(_scene__WEBPACK_IMPOR){(0,_inherits3.default)(Scene,_scene__WEBPACK_IMPOR);function Scene(container){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,_classCallCheck4.default)(this,Scene);var _this=(0,_possibleConstructorReturn3.default)(this,(Scene.__proto__||(0,_getPrototypeOf3.default)(Scene)).call(this,container,options));if(options.useDocumentCSS){sprite_core__WEBPACK_IMPORTED_MODULE_0__["stylesheet"].fromDocumentCSS();}return _this;}return Scene;}(_scene__WEBPACK_IMPORTED_MODULE_4__["default"]);var setDeprecation=sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"].setDeprecation;if(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"]){Object(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"])();}Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('layer',_layer__WEBPACK_IMPORTED_MODULE_3__["default"],true);Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["registerNodeType"])('scene',Scene,true);function Paper2D(){setDeprecation('spritejs.Paper2D','Instead use new spritejs.Scene.');for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return new(Function.prototype.bind.apply(Scene,[null].concat(args)))();}var version="2.26.4";/***/},/* 1 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Color",function(){return Color;});/* harmony import */var sprite_animator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Effects",function(){return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Easings",function(){return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Easings"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Timeline",function(){return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"];});/* harmony import */var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SvgPath",function(){return svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__["default"];});/* harmony import */var sprite_math__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11);/* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__,"math",function(){return sprite_math__WEBPACK_IMPORTED_MODULE_2__;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20);/* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__,"utils",function(){return _utils__WEBPACK_IMPORTED_MODULE_3__;});/* harmony import */var _core_basesprite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BaseSprite",function(){return _core_basesprite__WEBPACK_IMPORTED_MODULE_4__["default"];});/* harmony import */var _core_sprite__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(36);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Sprite",function(){return _core_sprite__WEBPACK_IMPORTED_MODULE_5__["default"];});/* harmony import */var _core_label__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(37);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Label",function(){return _core_label__WEBPACK_IMPORTED_MODULE_6__["default"];});/* harmony import */var _core_layer__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(43);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Layer",function(){return _core_layer__WEBPACK_IMPORTED_MODULE_7__["default"];});/* harmony import */var _core_group__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(47);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Group",function(){return _core_group__WEBPACK_IMPORTED_MODULE_8__["default"];});/* harmony import */var _core_basenode__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"BaseNode",function(){return _core_basenode__WEBPACK_IMPORTED_MODULE_9__["default"];});/* harmony import */var _core_path__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(49);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Path",function(){return _core_path__WEBPACK_IMPORTED_MODULE_10__["default"];});/* harmony import */var _core_batch__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(46);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Batch",function(){return _core_batch__WEBPACK_IMPORTED_MODULE_11__["default"];});/* harmony import */var _core_use__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(50);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"use",function(){return _core_use__WEBPACK_IMPORTED_MODULE_12__["default"];});/* harmony import */var _modules_animation__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(51);/* harmony import */var _modules_actions__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(55);/* harmony import */var _modules_layout__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(58);/* harmony import */var _modules_dom__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(67);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelector",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["querySelector"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelectorAll",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["querySelectorAll"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"registerNodeType",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["registerNodeType"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isValidNodeType",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["isValidNodeType"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createNode",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["createNode"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createElement",function(){return _modules_dom__WEBPACK_IMPORTED_MODULE_16__["createElement"];});/* harmony import */var _modules_css__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(100);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"stylesheet",function(){return _modules_css__WEBPACK_IMPORTED_MODULE_17__["default"];});// load modules
var Color=_utils__WEBPACK_IMPORTED_MODULE_3__["Color"];/***/},/* 2 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Timeline",function(){return sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"];});/* harmony import */var _effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Effects",function(){return _effect__WEBPACK_IMPORTED_MODULE_1__["default"];});/* harmony import */var _easing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Easings",function(){return _easing__WEBPACK_IMPORTED_MODULE_2__["Easings"];});/* harmony import */var _animator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Animator",function(){return _animator__WEBPACK_IMPORTED_MODULE_3__["default"];});/***/},/* 3 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);var _nowtime=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNowTime"])();var defaultOptions={originTime:0,playbackRate:1.0};var _timeMark=(0,_symbol2.default)('timeMark'),_playbackRate=(0,_symbol2.default)('playbackRate'),_timers=(0,_symbol2.default)('timers'),_originTime=(0,_symbol2.default)('originTime'),_setTimer=(0,_symbol2.default)('setTimer'),_parent=(0,_symbol2.default)('parent');var Timeline=function(){function Timeline(options,parent){(0,_classCallCheck4.default)(this,Timeline);if(options instanceof Timeline){parent=options;options={};}options=(0,_assign2.default)({},defaultOptions,options);if(parent){this[_parent]=parent;}var nowtime=options.nowtime||_nowtime;if(!parent){var createTime=nowtime();Object.defineProperty(this,'globalTime',{get:function get(){return nowtime()-createTime;}});}else{Object.defineProperty(this,'globalTime',{get:function get(){return parent.currentTime;}});}// timeMark records the reference points on timeline
// Each time we change the playbackRate or currentTime or entropy
// A new timeMark will be generated
// timeMark sorted by entropy
// If you reset entropy, all the timeMarks behind the new entropy
// should be dropped
this[_timeMark]=[{globalTime:this.globalTime,localTime:-options.originTime,entropy:-options.originTime,playbackRate:options.playbackRate,globalEntropy:0}];if(this[_parent]){this[_timeMark][0].globalEntropy=this[_parent].entropy;}this[_originTime]=options.originTime;this[_playbackRate]=options.playbackRate;this[_timers]=new _map2.default();}(0,_createClass4.default)(Timeline,[{key:'markTime',value:function markTime(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$time=_ref.time,time=_ref$time===undefined?this.currentTime:_ref$time,_ref$entropy=_ref.entropy,entropy=_ref$entropy===undefined?this.entropy:_ref$entropy,_ref$playbackRate=_ref.playbackRate,playbackRate=_ref$playbackRate===undefined?this.playbackRate:_ref$playbackRate;var timeMark={globalTime:this.globalTime,localTime:time,entropy:entropy,playbackRate:playbackRate,globalEntropy:this.globalEntropy};this[_timeMark].push(timeMark);}},{key:'fork',value:function fork(options){return new Timeline(options,this);}},{key:'seekGlobalTime',value:function seekGlobalTime(seekEntropy){var idx=this.seekTimeMark(seekEntropy),timeMark=this[_timeMark][idx];var entropy=timeMark.entropy,playbackRate=timeMark.playbackRate,globalTime=timeMark.globalTime;return globalTime+(seekEntropy-entropy)/Math.abs(playbackRate);}},{key:'seekLocalTime',value:function seekLocalTime(seekEntropy){var idx=this.seekTimeMark(seekEntropy),timeMark=this[_timeMark][idx];var localTime=timeMark.localTime,entropy=timeMark.entropy,playbackRate=timeMark.playbackRate;if(playbackRate>0){return localTime+(seekEntropy-entropy);}return localTime-(seekEntropy-entropy);}},{key:'seekTimeMark',value:function seekTimeMark(entropy){var timeMark=this[_timeMark];var l=0,r=timeMark.length-1;if(entropy<=timeMark[l].entropy){return l;}if(entropy>=timeMark[r].entropy){return r;}var m=Math.floor((l+r)/2);// binary search
while(m>l&&m<r){if(entropy===timeMark[m].entropy){return m;}if(entropy<timeMark[m].entropy){r=m;}else if(entropy>timeMark[m].entropy){l=m;}m=Math.floor((l+r)/2);}return l;}},{key:'updateTimers',value:function updateTimers(){var _this2=this;var timers=[].concat((0,_toConsumableArray4.default)(this[_timers]));timers.forEach(function(_ref2){var _ref3=(0,_slicedToArray4.default)(_ref2,2),id=_ref3[0],timer=_ref3[1];_this2[_setTimer](timer.handler,timer.time,id);});}},{key:'clearTimeout',value:function(_clearTimeout){function clearTimeout(_x2){return _clearTimeout.apply(this,arguments);}clearTimeout.toString=function(){return _clearTimeout.toString();};return clearTimeout;}(function(id){var timer=this[_timers].get(id);if(timer&&timer.timerID!=null){if(this[_parent]){this[_parent].clearTimeout(timer.timerID);}else{clearTimeout(timer.timerID);}}this[_timers].delete(id);})},{key:'clearInterval',value:function clearInterval(id){return this.clearTimeout(id);}},{key:'clear',value:function clear(){var _this3=this;// clear all running timers
var timers=this[_timers];[].concat((0,_toConsumableArray4.default)(timers.keys())).forEach(function(id){_this3.clearTimeout(id);});}/*
    setTimeout(func, {delay: 100, isEntropy: true})
    setTimeout(func, {entropy: 100})
    setTimeout(func, 100})
   */},{key:'setTimeout',value:function setTimeout(handler){var time=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{delay:0};return this[_setTimer](handler,time);}},{key:'setInterval',value:function setInterval(handler){var time=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{delay:0};var that=this;var id=this[_setTimer](function step(){// reset timer before handler cause we may clearTimeout in handler()
that[_setTimer](step,time,id);handler();},time);return id;}},{key:_setTimer,value:function value(handler,time){var _this4=this;var id=arguments.length>2&&arguments[2]!==undefined?arguments[2]:(0,_symbol2.default)('timerID');time=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatDelay"])(time);var timer=this[_timers].get(id);var delay=void 0,timerID=null,startTime=void 0,startEntropy=void 0;if(timer){this.clearTimeout(id);if(time.isEntropy){delay=(time.delay-(this.entropy-timer.startEntropy))/Math.abs(this.playbackRate);}else{delay=(time.delay-(this.currentTime-timer.startTime))/this.playbackRate;}startTime=timer.startTime;startEntropy=timer.startEntropy;}else{delay=time.delay/(time.isEntropy?Math.abs(this.playbackRate):this.playbackRate);startTime=this.currentTime;startEntropy=this.entropy;}var parent=this[_parent],globalTimeout=parent?parent.setTimeout.bind(parent):setTimeout;var heading=time.heading;// console.log(heading, parent, delay)
if(!parent&&heading===false&&delay<0){delay=Infinity;}// if playbackRate is zero, delay will be infinity.
// For wxapp bugs, cannot use Number.isFinite yet.
if(isFinite(delay)||parent){// eslint-disable-line no-restricted-globals
delay=Math.ceil(delay);if(globalTimeout!==setTimeout){delay={delay:delay,heading:heading};}timerID=globalTimeout(function(){_this4[_timers].delete(id);handler();},delay);}this[_timers].set(id,{timerID:timerID,handler:handler,time:time,startTime:startTime,startEntropy:startEntropy});return id;}},{key:'parent',get:function get(){return this[_parent];}},{key:'lastTimeMark',get:function get(){return this[_timeMark][this[_timeMark].length-1];}},{key:'currentTime',get:function get(){var _lastTimeMark=this.lastTimeMark,localTime=_lastTimeMark.localTime,globalTime=_lastTimeMark.globalTime;return localTime+(this.globalTime-globalTime)*this.playbackRate;},set:function set(time){var _this5=this;var from=this.currentTime,to=time,timers=this[_timers];this.markTime({time:time});[].concat((0,_toConsumableArray4.default)(timers)).forEach(function(_ref4){var _ref5=(0,_slicedToArray4.default)(_ref4,2),id=_ref5[0],timer=_ref5[1];if(!timers.has(id))return;// Need check because it maybe clearTimeout by former handler().
var _timer$time=timer.time,isEntropy=_timer$time.isEntropy,delay=_timer$time.delay,heading=_timer$time.heading,handler=timer.handler,startTime=timer.startTime;if(!isEntropy){var endTime=startTime+delay;if(delay===0||heading!==false&&(to-from)*delay<=0||from<=endTime&&endTime<=to||from>=endTime&&endTime>=to){handler();_this5.clearTimeout(id);}}else if(delay===0){handler();_this5.clearTimeout(id);}});this.updateTimers();}// Both currentTime and entropy should be influenced by playbackRate.
// If current playbackRate is negative, the currentTime should go backwards
// while the entropy remain to go forwards.
// Both of the initial values is set to -originTime
},{key:'entropy',get:function get(){var _lastTimeMark2=this.lastTimeMark,entropy=_lastTimeMark2.entropy,globalEntropy=_lastTimeMark2.globalEntropy;return entropy+Math.abs((this.globalEntropy-globalEntropy)*this.playbackRate);},// get globalTime() {
//   if(this[_parent]) {
//     return this[_parent].currentTime;
//   }
//   return nowtime();
// }
// change entropy will NOT cause currentTime changing but may influence the pass
// and the future of the timeline. (It may change the result of seek***Time)
// While entropy is set, all the marks behind will be droped
set:function set(entropy){if(this.entropy>entropy){var idx=this.seekTimeMark(entropy);this[_timeMark].length=idx+1;}this.markTime({entropy:entropy});this.updateTimers();}},{key:'globalEntropy',get:function get(){return this[_parent]?this[_parent].entropy:this.globalTime;}},{key:'playbackRate',get:function get(){return this[_playbackRate];},set:function set(rate){if(rate!==this.playbackRate){this.markTime({playbackRate:rate});this[_playbackRate]=rate;this.updateTimers();}}},{key:'paused',get:function get(){if(this.playbackRate===0)return true;var parent=this.parent;while(parent){if(parent.playbackRate===0)return true;parent=parent.parent;}return false;}}]);return Timeline;}();/* harmony default export */__webpack_exports__["default"]=Timeline;/***/},/* 4 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createNowTime",function(){return createNowTime;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"formatDelay",function(){return formatDelay;});function createNowTime(){var syncLocker=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var nowtime=null;if(Date.now){nowtime=Date.now;}else{nowtime=function nowtime(){return new Date().getTime();};}return nowtime;}/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */function formatDelay(delay){if(typeof delay==='number'){delay={delay:delay};}else if('entropy'in delay){delay={delay:delay.entropy,isEntropy:true};}return delay;}/***/},/* 5 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]={// s - startFrame, e - endFrame
default:function _default(from,to,p,s,e){if(typeof from==='number'&&typeof to==='number'){return from+(p-s)/(e-s)*(to-from);}if(p-s>e-p){return to;}return from;}};/***/},/* 6 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Easings",function(){return Easings;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseEasing",function(){return parseEasing;});var BezierEasing=__webpack_require__(7);var bezierFuncCache=new _map2.default();function getBezierEasing(){for(var _len2=arguments.length,value=Array(_len2),_key2=0;_key2<_len2;_key2++){value[_key2]=arguments[_key2];}var easing=bezierFuncCache.get(value);if(easing){return easing;}easing=BezierEasing.apply(undefined,value);bezierFuncCache.set(value,easing);return easing;}function getStepsEasing(step){var pos=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'end';return function(p,frames){for(var i=1;i<frames.length;i++){var offset=frames[i].offset;if(p<=offset){var start=frames[i-1].offset,end=offset;var fp=(p-start)/(end-start),d=1/step;var t=fp/d;if(pos==='end'){t=Math.floor(t);}else{t=Math.ceil(t);}return d*t*(end-start)+start;}}return 0;};}function parseEasingStr(easingStr){var pattern=/^cubic-bezier\((.*)\)/,matched=easingStr.match(pattern);if(matched){var value=matched[1].trim();value=value.split(',').map(function(v){return parseFloat(v.trim());});return getBezierEasing.apply(undefined,(0,_toConsumableArray4.default)(value));}pattern=/^steps\((.*)\)/;matched=easingStr.match(pattern);if(matched){var _value=matched[1].trim();_value=_value.split(',').map(function(v){return v.trim();});var _value2=_value,_value3=(0,_slicedToArray4.default)(_value2,2),step=_value3[0],pos=_value3[1];return getStepsEasing(parseInt(step,10),pos);}return easingStr;}var Easings={linear:function linear(p){return p;},ease:getBezierEasing(0.25,0.1,0.25,1),'ease-in':getBezierEasing(0.42,0,1,1),'ease-out':getBezierEasing(0,0,0.58,1),'ease-in-out':getBezierEasing(0.42,0,0.58,1),// 'step-start': function(p, frames){
//   let ret = 0
//   for(let i = 0; i < frames.length; i++){
//     const {offset} = frames[i]
//     ret = offset
//     if(p < offset){
//       break
//     }
//   }
//   return ret
// },
// 'step-end': function(p, frames){
//   let ret = 0
//   for(let i = 0; i < frames.length; i++){
//     const {offset} = frames[i]
//     if(p < offset){
//       break
//     }
//     ret = offset
//   }
//   return ret
// }
'step-start':getStepsEasing(1,'start'),'step-end':getStepsEasing(1,'end')};function parseEasing(easing){if(typeof easing==='string'){if(!Easings[easing]){easing=parseEasingStr(easing);}else{// load default Easing
easing=Easings[easing];}}else if(easing.type==='cubic-bezier'){easing=getBezierEasing.apply(undefined,(0,_toConsumableArray4.default)(easing.value));}else if(easing.type==='steps'){easing=getStepsEasing(easing.step,easing.pos);}return easing;}/***/},/* 7 *//***/function(module,exports){/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS=4;var NEWTON_MIN_SLOPE=0.001;var SUBDIVISION_PRECISION=0.0000001;var SUBDIVISION_MAX_ITERATIONS=10;var kSplineTableSize=11;var kSampleStepSize=1.0/(kSplineTableSize-1.0);var float32ArraySupported=typeof Float32Array==='function';function A(aA1,aA2){return 1.0-3.0*aA2+3.0*aA1;}function B(aA1,aA2){return 3.0*aA2-6.0*aA1;}function C(aA1){return 3.0*aA1;}// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT,aA1,aA2){return((A(aA1,aA2)*aT+B(aA1,aA2))*aT+C(aA1))*aT;}// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT,aA1,aA2){return 3.0*A(aA1,aA2)*aT*aT+2.0*B(aA1,aA2)*aT+C(aA1);}function binarySubdivide(aX,aA,aB,mX1,mX2){var currentX,currentT,i=0;do{currentT=aA+(aB-aA)/2.0;currentX=calcBezier(currentT,mX1,mX2)-aX;if(currentX>0.0){aB=currentT;}else{aA=currentT;}}while(Math.abs(currentX)>SUBDIVISION_PRECISION&&++i<SUBDIVISION_MAX_ITERATIONS);return currentT;}function newtonRaphsonIterate(aX,aGuessT,mX1,mX2){for(var i=0;i<NEWTON_ITERATIONS;++i){var currentSlope=getSlope(aGuessT,mX1,mX2);if(currentSlope===0.0){return aGuessT;}var currentX=calcBezier(aGuessT,mX1,mX2)-aX;aGuessT-=currentX/currentSlope;}return aGuessT;}function LinearEasing(x){return x;}module.exports=function bezier(mX1,mY1,mX2,mY2){if(!(0<=mX1&&mX1<=1&&0<=mX2&&mX2<=1)){throw new Error('bezier x values must be in [0, 1] range');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}// Precompute samples table
var sampleValues=float32ArraySupported?new Float32Array(kSplineTableSize):new Array(kSplineTableSize);for(var i=0;i<kSplineTableSize;++i){sampleValues[i]=calcBezier(i*kSampleStepSize,mX1,mX2);}function getTForX(aX){var intervalStart=0.0;var currentSample=1;var lastSample=kSplineTableSize-1;for(;currentSample!==lastSample&&sampleValues[currentSample]<=aX;++currentSample){intervalStart+=kSampleStepSize;}--currentSample;// Interpolate to provide an initial guess for t
var dist=(aX-sampleValues[currentSample])/(sampleValues[currentSample+1]-sampleValues[currentSample]);var guessForT=intervalStart+dist*kSampleStepSize;var initialSlope=getSlope(guessForT,mX1,mX2);if(initialSlope>=NEWTON_MIN_SLOPE){return newtonRaphsonIterate(aX,guessForT,mX1,mX2);}else if(initialSlope===0.0){return guessForT;}else{return binarySubdivide(aX,intervalStart,intervalStart+kSampleStepSize,mX1,mX2);}}return function BezierEasing(x){// Because JavaScript number are imprecise, we should guarantee the extremes are right.
if(x===0){return 0;}if(x===1){return 1;}return calcBezier(getTForX(x),mY1,mY2);};};/***/},/* 8 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9);/* harmony import */var _easing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6);var _timing=(0,_symbol2.default)('timing'),_keyframes=(0,_symbol2.default)('keyframes'),_initState=(0,_symbol2.default)('initState'),_readyDefer=(0,_symbol2.default)('readyDefer'),_finishedDefer=(0,_symbol2.default)('finishedDefer'),_effects=(0,_symbol2.default)('effects'),_activeReadyTimer=(0,_symbol2.default)('activeReadyTimer'),_activeFinishTimer=(0,_symbol2.default)('activeFinishTimer'),_removeDefer=(0,_symbol2.default)('removeDefer');/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */var defaultTiming={delay:0,endDelay:0,fill:'auto',iterations:1.0,playbackRate:1.0,direction:'normal',easing:'linear',effect:null};/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 *//* harmony default export */__webpack_exports__["default"]=function(){function _class(initState,keyframes,timing){var _this6=this;(0,_classCallCheck4.default)(this,_class);if(Array.isArray(initState)){var _ref6=[initState[0],initState,keyframes];// 如果 initState 缺省，默认 keyframes 的第一帧为 initState
initState=_ref6[0];keyframes=_ref6[1];timing=_ref6[2];}if(typeof timing==='number'){timing={duration:timing};}this[_timing]=(0,_assign2.default)({},defaultTiming,timing);this[_timing].easing=Object(_easing__WEBPACK_IMPORTED_MODULE_2__["parseEasing"])(this[_timing].easing);this[_keyframes]=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["calculateFramesOffset"])(keyframes);var lastFrame=this[_keyframes][this[_keyframes].length-1];this[_initState]={};// 初始状态
(0,_keys2.default)(lastFrame).forEach(function(key){if(Object.prototype.hasOwnProperty.call(initState,key)){if(key!=='easing'&&key!=='offset'){_this6[_initState][key]=initState[key];}}});// 补齐参数
this[_keyframes]=this[_keyframes].map(function(frame){return(0,_assign2.default)({},_this6[_initState],frame);});if(this[_keyframes][0].offset!==0){// 要补第一帧
this[_keyframes].unshift((0,_assign2.default)({},this[_initState],{offset:0}));}if(lastFrame.offset<1){// 要补最后一帧
this[_keyframes].push((0,_assign2.default)({},lastFrame,{offset:1}));}this[_effects]={};this.timeline=null;// idle, no effect
}(0,_createClass4.default)(_class,[{key:'pause',value:function pause(){this.timeline.playbackRate=0;}},{key:_activeReadyTimer,value:function value(){var _this7=this;if(this[_readyDefer]&&!this[_readyDefer].timerID){if(this.timeline.currentTime<0){this[_readyDefer].timerID=this.timeline.setTimeout(function(){_this7[_readyDefer].resolve();delete _this7[_readyDefer];},{delay:-this.timeline.currentTime,heading:false});}else{this[_readyDefer].timerID=this.timeline.setTimeout(function(){_this7[_readyDefer].resolve();delete _this7[_readyDefer];},{delay:0,isEntropy:true});}}}},{key:_activeFinishTimer,value:function value(){var _this8=this;var _timing2=this[_timing],duration=_timing2.duration,iterations=_timing2.iterations,endDelay=_timing2.endDelay;var delay=Math.ceil(duration*iterations+endDelay-this.timeline.currentTime)+1;if(this[_finishedDefer]&&!this[_finishedDefer].timerID){this[_finishedDefer].timerID=this.timeline.setTimeout(function(){_this8[_finishedDefer].resolve();_this8[_removeDefer](_readyDefer);_this8[_removeDefer](_finishedDefer);},{delay:delay,heading:false});this[_finishedDefer].reverseTimerID=this.timeline.setTimeout(function(){_this8[_finishedDefer].resolve();_this8[_removeDefer](_readyDefer);_this8[_removeDefer](_finishedDefer);_this8.timeline=null;},{delay:-this[_timing].delay-1,heading:false});}}},{key:'play',value:function play(){if(this.playState==='finished'){this.cancel();}if(this.playState==='idle'){if(this.playbackRate<=0){return;}var _timing3=this[_timing],delay=_timing3.delay,playbackRate=_timing3.playbackRate,timeline=_timing3.timeline;this.timeline=new sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]({originTime:delay,playbackRate:playbackRate},timeline);this[_activeReadyTimer]();this[_activeFinishTimer]();}else if(this.playState==='paused'){this.timeline.playbackRate=this.playbackRate;this[_activeReadyTimer]();}}},{key:_removeDefer,value:function value(deferID){var defered=this[deferID],timeline=this.timeline;if(defered&&timeline){timeline.clearTimeout(defered.timerID);if(defered.reverseTimerID){timeline.clearTimeout(defered.reverseTimerID);}}delete this[deferID];}},{key:'cancel',value:function cancel(){this[_removeDefer](_readyDefer);this[_removeDefer](_finishedDefer);this.timeline=null;}},{key:'finish',value:function finish(){if(this.timeline){this.timeline.currentTime=Infinity/this.playbackRate;}this[_removeDefer](_readyDefer);this[_removeDefer](_finishedDefer);}},{key:'applyEffects',value:function applyEffects(effects){return(0,_assign2.default)(this[_effects],effects);}},{key:'playbackRate',get:function get(){return this[_timing].playbackRate;},set:function set(rate){if(this.timeline){this.timeline.playbackRate=rate;}this[_timing].playbackRate=rate;}},{key:'playState',get:function get(){var timeline=this.timeline,_timing4=this[_timing],iterations=_timing4.iterations,duration=_timing4.duration,endDelay=_timing4.endDelay;var state='running';if(timeline==null){state='idle';}else if(timeline.paused){state='paused';}else if(timeline.currentTime<0){// 开始 pending
state='pending';}else{var ed=timeline.currentTime-iterations*duration;if(ed>0&&ed<endDelay){// 结束 pending
state='pending';}else if(ed>=endDelay){state='finished';}}return state;}},{key:'progress',get:function get(){if(!this.timeline)return 0;var _timing5=this[_timing],duration=_timing5.duration,iterations=_timing5.iterations;var timeline=this.timeline,playState=this.playState;var p=void 0;if(playState==='idle'){p=0;}else if(playState==='paused'&&timeline.currentTime<0){p=0;}else if(playState==='pending'){if(timeline.currentTime<0){p=0;}else{var time=timeline.seekLocalTime(iterations*duration);p=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(time,duration)[1]/duration;}}else if(playState==='running'||playState==='paused'){p=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(timeline.currentTime,duration)[1]/duration;}if(playState==='finished'){p=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["periodicity"])(iterations,1)[1];}return p;}},{key:'frame',get:function get(){var playState=this.playState,initState=this[_initState],fill=this[_timing].fill;if(playState==='idle'){return initState;}var currentTime=this.timeline.currentTime,keyframes=this[_keyframes].slice(0);var _Object=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getProgress"])(this.timeline,this[_timing],this.progress),p=_Object.p,inverted=_Object.inverted;var frameState=initState;if(currentTime<0&&playState==='pending'){// 在开始前 delay 阶段
if(fill==='backwards'||fill==='both'){frameState=inverted?keyframes[keyframes.length-1]:keyframes[0];}}else if(playState!=='pending'&&playState!=='finished'||fill==='forwards'||fill==='both'){// 不在 endDelay 或结束状态，或 forwards
frameState=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getCurrentFrame"])(this[_timing],keyframes,this[_effects],p);}return frameState;}},{key:'timing',get:function get(){return this[_timing];}},{key:'baseTimeline',set:function set(timeline){this[_timing].timeline=timeline;},get:function get(){return this[_timing].timeline;}},{key:'ready',get:function get(){if(this[_readyDefer]){return this[_readyDefer].promise;}if(this.timeline&&this.timeline.currentTime>=0){if(this.playState!=='paused'){return _promise2.default.resolve();}}this[_readyDefer]=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["defer"])();if(this.timeline){// 已经在 pending 状态
this[_activeReadyTimer]();}if(this[_readyDefer]){return this[_readyDefer].promise;}return _promise2.default.resolve();}},{key:'finished',get:function get(){if(this.playState==='finished'){return _promise2.default.resolve();}if(!this[_finishedDefer]){this[_finishedDefer]=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["defer"])();if(this.timeline){this[_activeFinishTimer]();}}return this[_finishedDefer].promise;}}]);return _class;}();/***/},/* 9 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"defer",function(){return defer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"periodicity",function(){return periodicity;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"calculateFramesOffset",function(){return calculateFramesOffset;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getProgress",function(){return getProgress;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getCurrentFrame",function(){return getCurrentFrame;});/* harmony import */var _easing__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);/* harmony import */var _effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);function defer(){var ret={};ret.promise=new _promise2.default(function(resolve,reject){ret.resolve=resolve;ret.reject=reject;});return ret;}function periodicity(val,dur){var t=Math.floor(val/dur);var v=val-t*dur;if(v===0&&t>0){v=dur;t--;}return[t,v];}function calculateFramesOffset(keyframes){keyframes=keyframes.slice(0);var firstFrame=keyframes[0],lastFrame=keyframes[keyframes.length-1];lastFrame.offset=lastFrame.offset||1;firstFrame.offset=firstFrame.offset||0;var offset=0,offsetFrom=-1;for(var i=0;i<keyframes.length;i++){var frame=keyframes[i];if(frame.offset!=null){var dis=i-offsetFrom;if(dis>1){var delta=(frame.offset-offset)/dis;for(var j=0;j<dis-1;j++){keyframes[offsetFrom+j+1].offset=offset+delta*(j+1);}}offset=frame.offset;offsetFrom=i;}if(frame.easing!=null){frame.easing=Object(_easing__WEBPACK_IMPORTED_MODULE_0__["parseEasing"])(frame.easing);}if(i>0){var hasEasing=keyframes[i].easing!=null;// 如果中间某个属性没有了，需要从前一帧复制过来
keyframes[i]=(0,_assign2.default)({},keyframes[i-1],keyframes[i]);if(!hasEasing){// easing 不能复制
delete keyframes[i].easing;}}}return keyframes;}function getProgress(timeline,timing,p){var currentTime=timeline.currentTime,direction=timing.direction,duration=timing.duration;var inverted=false;if(direction==='reverse'){p=1-p;inverted=true;}else if(direction==='alternate'||direction==='alternate-reverse'){var period=Math.floor(currentTime/duration);if(p===1)period--;// period = Math.max(0, period)
if(period%2^direction==='alternate-reverse'){p=1-p;inverted=true;}}return{p:p,inverted:inverted};}function calculateFrame(previousFrame,nextFrame,effects,p){var ret={};(0,_entries2.default)(nextFrame).forEach(function(_ref7){var _ref8=(0,_slicedToArray4.default)(_ref7,2),key=_ref8[0],value=_ref8[1];if(key!=='offset'&&key!=='easing'){var effect=effects[key]||effects.default;var v=effect(previousFrame[key],value,p,previousFrame.offset,nextFrame.offset);if(v!=null){ret[key]=v;}}});return ret;}function getCurrentFrame(timing,keyframes,effects,p){var easing=timing.easing,effect=timing.effect;if(!effect){// timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
effects=(0,_assign2.default)({},effects,_effect__WEBPACK_IMPORTED_MODULE_1__["default"]);}var ret={};p=easing(p,keyframes);for(var i=1;i<keyframes.length;i++){var frame=keyframes[i],offset=frame.offset;if(offset>=p||i===keyframes.length-1){var previousFrame=keyframes[i-1],previousOffset=previousFrame.offset,_easing=previousFrame.easing;var ep=p;if(_easing){var d=offset-previousOffset;ep=_easing((p-previousOffset)/d)*d+previousOffset;}if(effect){ret=effect(previousFrame,frame,ep,previousOffset,offset);}else{ret=calculateFrame(previousFrame,frame,effects,ep);}break;}}return ret;}/***/},/* 10 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_math__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);/* harmony import */var _platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14);/* harmony import */var _parse_svg_path__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(15);/* harmony import */var _abs_svg_path__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);/* harmony import */var _normalize_svg_path__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(17);/* harmony import */var _is_svg_path__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19);var _path=(0,_symbol2.default)('path');var _bounds=(0,_symbol2.default)('bounds');var _savedPaths=(0,_symbol2.default)('savedPaths');var _renderProps=(0,_symbol2.default)('renderProps');var _beginPath=(0,_symbol2.default)('beginPath');var SvgPath=function(){function SvgPath(d){(0,_classCallCheck4.default)(this,SvgPath);if(!Object(_is_svg_path__WEBPACK_IMPORTED_MODULE_5__["default"])(d)){throw new Error('Not an SVG path!');}var path=Object(_normalize_svg_path__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_abs_svg_path__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_parse_svg_path__WEBPACK_IMPORTED_MODULE_2__["default"])(d)));this[_path]=path;this[_bounds]=null;this[_savedPaths]=[];this[_renderProps]={};this[_beginPath]=false;}(0,_createClass4.default)(SvgPath,[{key:'save',value:function save(){this[_savedPaths].push({path:this[_path],bounds:this[_bounds],renderProps:(0,_assign2.default)({},this[_renderProps])});return this;}},{key:'restore',value:function restore(){if(this[_savedPaths].length){var _savedPaths$pop=this[_savedPaths].pop(),path=_savedPaths$pop.path,bounds=_savedPaths$pop.bounds,renderProps=_savedPaths$pop.renderProps;this[_path]=path;this[_bounds]=bounds;this[_renderProps]=renderProps;}return this;}},{key:'isPointInPath',value:function isPointInPath(x,y){return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["isPointInPath"])(this,x,y);}},{key:'getPointAtLength',value:function getPointAtLength(len){return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["getPointAtLength"])(this.d,len);}},{key:'getTotalLength',value:function getTotalLength(){return Object(_platform__WEBPACK_IMPORTED_MODULE_1__["getTotalLength"])(this.d);}},{key:'transform',value:function transform(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}this[_bounds]=null;var m=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](args);var commands=this[_path];this[_path]=commands.map(function(c){var _c=(0,_toArray4.default)(c),cmd=_c[0],args=_c.slice(1);var transformed=[cmd];for(var i=0;i<args.length;i+=2){var x0=args[i],y0=args[i+1];var _m$transformPoint=m.transformPoint(x0,y0),_m$transformPoint2=(0,_slicedToArray4.default)(_m$transformPoint,2),x=_m$transformPoint2[0],y=_m$transformPoint2[1];transformed.push(x,y);}return transformed;});return this;}},{key:'translate',value:function translate(x,y){var m=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().translate(x,y);return this.transform.apply(this,(0,_toConsumableArray4.default)(m.m));}},{key:'rotate',value:function rotate(deg){var m=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().rotate(deg);return this.transform.apply(this,(0,_toConsumableArray4.default)(m.m));}},{key:'scale',value:function scale(sx,sy){if(sy==null)sy=sx;var m=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().scale(sx,sy);return this.transform.apply(this,(0,_toConsumableArray4.default)(m.m));}},{key:'skew',value:function skew(degX,degY){var m=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]().skew(degX,degY);return this.transform.apply(this,(0,_toConsumableArray4.default)(m.m));}},{key:'trim',value:function trim(){var _bounds2=(0,_slicedToArray4.default)(this.bounds,2),x=_bounds2[0],y=_bounds2[1];this.translate(-x,-y);return this;}},{key:'beginPath',value:function beginPath(){this[_beginPath]=true;return this;}},{key:'to',value:function to(context){var commands=this[_path];var renderProps=this[_renderProps];if(commands.length){if(this[_beginPath]){context.beginPath();}commands.forEach(function(c){var _c2=(0,_toArray4.default)(c),cmd=_c2[0],args=_c2.slice(1);if(cmd==='M'){context.moveTo.apply(context,(0,_toConsumableArray4.default)(args));}else{context.bezierCurveTo.apply(context,(0,_toConsumableArray4.default)(args));}});}(0,_assign2.default)(context,renderProps);return{stroke:function stroke(){context.stroke();return this;},fill:function fill(){context.fill();return this;}};}},{key:'strokeStyle',value:function strokeStyle(value){this[_renderProps].strokeStyle=value;return this;}},{key:'fillStyle',value:function fillStyle(value){this[_renderProps].fillStyle=value;return this;}},{key:'lineWidth',value:function lineWidth(value){this[_renderProps].lineWidth=value;return this;}},{key:'lineCap',value:function lineCap(value){this[_renderProps].lineCap=value;return this;}},{key:'lineJoin',value:function lineJoin(value){this[_renderProps].lineJoin=value;return this;}},{key:'bounds',get:function get(){if(!this[_bounds]){var path=this[_path];this[_bounds]=[0,0,0,0];if(path.length){var bounds=[Infinity,Infinity,-Infinity,-Infinity];for(var i=0,l=path.length;i<l;i++){var points=path[i].slice(1);for(var j=0;j<points.length;j+=2){if(points[j+0]<bounds[0])bounds[0]=points[j+0];if(points[j+1]<bounds[1])bounds[1]=points[j+1];if(points[j+0]>bounds[2])bounds[2]=points[j+0];if(points[j+1]>bounds[3])bounds[3]=points[j+1];}}this[_bounds]=bounds;}}return this[_bounds];}},{key:'size',get:function get(){var bounds=this.bounds;return[bounds[2]-bounds[0],bounds[3]-bounds[1]];}},{key:'center',get:function get(){var _bounds3=(0,_slicedToArray4.default)(this.bounds,4),x0=_bounds3[0],y0=_bounds3[1],x1=_bounds3[2],y1=_bounds3[3];return[(x0+x1)/2,(y0+y1)/2];}},{key:'d',get:function get(){return this[_path].map(function(p){var _p=(0,_toArray4.default)(p),c=_p[0],points=_p.slice(1);return c+points.join();}).join('');}},{key:'path',get:function get(){return this[_path];}}]);return SvgPath;}();/* harmony default export */__webpack_exports__["default"]=SvgPath;/***/},/* 11 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _matrix__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Matrix",function(){return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"];});/* harmony import */var _vector__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Vector",function(){return _vector__WEBPACK_IMPORTED_MODULE_1__["default"];});/***/},/* 12 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);// from https://github.com/chrisaljoudi/transformatrix.js
/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */var Matrix=function Matrix(m){m=m||[1,0,0,1,0,0];this.m=[m[0],m[1],m[2],m[3],m[4],m[5]];};Matrix.prototype.unit=function(){this.m=[1,0,0,1,0,0];return this;};Matrix.prototype.multiply=function(m){var m1=this.m;var m2=void 0;if(m instanceof Matrix){m2=m.m;}else{m2=m;}var m11=m1[0]*m2[0]+m1[2]*m2[1],m12=m1[1]*m2[0]+m1[3]*m2[1],m21=m1[0]*m2[2]+m1[2]*m2[3],m22=m1[1]*m2[2]+m1[3]*m2[3];var dx=m1[0]*m2[4]+m1[2]*m2[5]+m1[4],dy=m1[1]*m2[4]+m1[3]*m2[5]+m1[5];m1[0]=m11;m1[1]=m12;m1[2]=m21;m1[3]=m22;m1[4]=dx;m1[5]=dy;return this;};Matrix.prototype.inverse=function(){var inv=new Matrix(this.m),invm=inv.m;var d=1/(invm[0]*invm[3]-invm[1]*invm[2]),m0=invm[3]*d,m1=-invm[1]*d,m2=-invm[2]*d,m3=invm[0]*d,m4=d*(invm[2]*invm[5]-invm[3]*invm[4]),m5=d*(invm[1]*invm[4]-invm[0]*invm[5]);invm[0]=m0;invm[1]=m1;invm[2]=m2;invm[3]=m3;invm[4]=m4;invm[5]=m5;return inv;};/**
  (1, 0, sx)
  (0, 1, sy)
 * */Matrix.prototype.translate=function(x,y){return this.multiply([1,0,0,1,x,y]);};/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */Matrix.prototype.rotate=function(deg){var rad=deg*Math.PI/180,c=Math.cos(rad),s=Math.sin(rad);return this.multiply([c,s,-s,c,0,0]);};/**
    (1, tx, 0)
    (ty, 1, 0)
 */Matrix.prototype.skew=function(degX,degY){degY|=0;var radX=degX*Math.PI/180,radY=degY*Math.PI/180;var tx=Math.tan(radX),ty=Math.tan(radY);return this.multiply([1,ty,tx,1,0,0]);};/**
  (sx, 0, 0)
  (0, sy, 0)
 */Matrix.prototype.scale=function(sx,sy){return this.multiply([sx,0,0,sy,0,0]);};Matrix.prototype.transformPoint=function(px,py){var x=px,y=py;px=x*this.m[0]+y*this.m[2]+this.m[4];py=x*this.m[1]+y*this.m[3]+this.m[5];return[px,py];};Matrix.prototype.transformVector=function(px,py){var x=px,y=py;px=x*this.m[0]+y*this.m[2];py=x*this.m[1]+y*this.m[3];return[px,py];};/* harmony default export */__webpack_exports__["default"]=Matrix;/***/},/* 13 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var Vector=function(){function Vector(p1){var p2=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[0,0,0];(0,_classCallCheck4.default)(this,Vector);var _p2=(0,_slicedToArray4.default)(p1,3),x1=_p2[0],y1=_p2[1],z1=_p2[2],_p3=(0,_slicedToArray4.default)(p2,3),x2=_p3[0],y2=_p3[1],z2=_p3[2];z1=z1||0;z2=z2||0;this.x=x1-x2;this.y=y1-y2;this.z=z1-z2;}(0,_createClass4.default)(Vector,[{key:'unit',value:function unit(){var length=this.length;return new Vector([this.x/length,this.y/length,this.z/length]);}},{key:'dot',value:function dot(v){return this.x*v.x+this.y*v.y+this.z*v.z;}},{key:'cross',value:function cross(v){var x1=this.x,y1=this.y,z1=this.z,x2=v.x,y2=v.y,z2=v.z;return new Vector([y1*z2-z1*y2,z1*x2-x1*z2,x1*y2-x2*y1]);}},{key:'length',get:function get(){var x=this.x,y=this.y,z=this.z;return Math.sqrt(x*x+y*y+z*z);}}]);return Vector;}();/* harmony default export */__webpack_exports__["default"]=Vector;/***/},/* 14 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getPointAtLength",function(){return getPointAtLength;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getTotalLength",function(){return getTotalLength;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isPointInPath",function(){return isPointInPath;});function createSvgPath(d){var path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);return path;}function getPointAtLength(d,len){var path=createSvgPath(d);var _path$getPointAtLengt=path.getPointAtLength(len),x=_path$getPointAtLengt.x,y=_path$getPointAtLengt.y;return[x,y];}function getTotalLength(d,len){var path=createSvgPath(d);return path.getTotalLength(len);}function isPointInPath(_ref9,x,y){var d=_ref9.d;var path=new Path2D(d);var context=document.createElement('canvas').getContext('2d');return context.isPointInPath(path,x,y);}/***/},/* 15 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return parse;});// https://github.com/jkroso/parse-svg-path
/**
 * expected argument lengths
 * @type {Object}
 *//* eslint-disable */var length={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0/**
   * segment pattern
   * @type {RegExp}
   */};var segment=/([astvzqmhlc])([^astvzqmhlc]*)/ig;/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */function parse(path){var data=[];path.replace(segment,function(_,command,args){var type=command.toLowerCase();args=parseValues(args);// overloaded moveTo
if(type=='m'&&args.length>2){data.push([command].concat(args.splice(0,2)));type='l';command=command=='m'?'l':'L';}while(true){if(args.length==length[type]){args.unshift(command);return data.push(args);}if(args.length<length[type])throw new Error('malformed path data');data.push([command].concat(args.splice(0,length[type])));}});return data;}var number=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function parseValues(args){var numbers=args.match(number);return numbers?numbers.map(Number):[];}/* eslint-enable *//***/},/* 16 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return absolutize;});// https://github.com/jkroso/abs-svg-path
/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 *//* eslint-disable */function absolutize(path){var startX=0;var startY=0;var x=0;var y=0;return path.map(function(seg){seg=seg.slice();var type=seg[0];var command=type.toUpperCase();// is relative
if(type!=command){seg[0]=command;switch(type){case'a':seg[6]+=x;seg[7]+=y;break;case'v':seg[1]+=y;break;case'h':seg[1]+=x;break;default:for(var i=1;i<seg.length;){seg[i++]+=x;seg[i++]+=y;}}}// update cursor state
switch(command){case'Z':x=startX;y=startY;break;case'H':x=seg[1];break;case'V':y=seg[1];break;case'M':x=startX=seg[1];y=startY=seg[2];break;default:x=seg[seg.length-2];y=seg[seg.length-1];}return seg;});}/* eslint-enable *//***/},/* 17 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return normalize;});/* harmony import */var _a2c__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18);// https://github.com/jkroso/normalize-svg-path
/* eslint-disable */function normalize(path){// init state
var prev;var result=[];var bezierX=0;var bezierY=0;var startX=0;var startY=0;var quadX=null;var quadY=null;var x=0;var y=0;for(var i=0,len=path.length;i<len;i++){var seg=path[i];var command=seg[0];switch(command){case'M':startX=seg[1];startY=seg[2];break;case'A':var curves=Object(_a2c__WEBPACK_IMPORTED_MODULE_0__["default"])(x,y,seg[6],seg[7],seg[4],seg[5],seg[1],seg[2],seg[3]);if(!curves.length)continue;curves=curves.map(function(curve){var _curve=(0,_slicedToArray4.default)(curve,8),x0=_curve[0],y0=_curve[1],x1=_curve[2],y1=_curve[3],x2=_curve[4],y2=_curve[5],x=_curve[6],y=_curve[7];return{x1:x1,y1:y1,x2:x2,y2:y2,x:x,y:y};});for(var j=0,c;j<curves.length;j++){c=curves[j];seg=['C',c.x1,c.y1,c.x2,c.y2,c.x,c.y];if(j<curves.length-1)result.push(seg);}break;case'S':// default control point
var cx=x;var cy=y;if(prev=='C'||prev=='S'){cx+=cx-bezierX;// reflect the previous command's control
cy+=cy-bezierY;// point relative to the current point
}seg=['C',cx,cy,seg[1],seg[2],seg[3],seg[4]];break;case'T':if(prev=='Q'||prev=='T'){quadX=x*2-quadX;// as with 'S' reflect previous control point
quadY=y*2-quadY;}else{quadX=x;quadY=y;}seg=quadratic(x,y,quadX,quadY,seg[1],seg[2]);break;case'Q':quadX=seg[1];quadY=seg[2];seg=quadratic(x,y,seg[1],seg[2],seg[3],seg[4]);break;case'L':seg=line(x,y,seg[1],seg[2]);break;case'H':seg=line(x,y,seg[1],y);break;case'V':seg=line(x,y,x,seg[1]);break;case'Z':seg=line(x,y,startX,startY);break;}// update state
prev=command;x=seg[seg.length-2];y=seg[seg.length-1];if(seg.length>4){bezierX=seg[seg.length-4];bezierY=seg[seg.length-3];}else{bezierX=x;bezierY=y;}result.push(seg);}return result;}function line(x1,y1,x2,y2){return['C',x1,y1,x2,y2,x2,y2];}function quadratic(x1,y1,cx,cy,x2,y2){return['C',x1/3+2/3*cx,y1/3+2/3*cy,x2/3+2/3*cx,y2/3+2/3*cy,x2,y2];}/* eslint-enable *//***/},/* 18 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return a2c;});// https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
// Convert an arc to a sequence of cubic bézier curves
//
var TAU=Math.PI*2;/* eslint-disable space-infix-ops */// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//
function unit_vector_angle(ux,uy,vx,vy){var sign=ux*vy-uy*vx<0?-1:1;var dot=ux*vx+uy*vy;// Add this to work with arbitrary vectors:
// dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
// rounding errors, e.g. -1.0000000000000002 can screw up this
if(dot>1.0){dot=1.0;}if(dot<-1.0){dot=-1.0;}return sign*Math.acos(dot);}// Convert from endpoint to center parameterization,
// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
//
// Return [cx, cy, theta1, delta_theta]
//
function get_arc_center(x1,y1,x2,y2,fa,fs,rx,ry,sin_phi,cos_phi){// Step 1.
//
// Moving an ellipse so origin will be the middlepoint between our two
// points. After that, rotate it to line up ellipse axes with coordinate
// axes.
//
var x1p=cos_phi*(x1-x2)/2+sin_phi*(y1-y2)/2;var y1p=-sin_phi*(x1-x2)/2+cos_phi*(y1-y2)/2;var rx_sq=rx*rx;var ry_sq=ry*ry;var x1p_sq=x1p*x1p;var y1p_sq=y1p*y1p;// Step 2.
//
// Compute coordinates of the centre of this ellipse (cx', cy')
// in the new coordinate system.
//
var radicant=rx_sq*ry_sq-rx_sq*y1p_sq-ry_sq*x1p_sq;if(radicant<0){// due to rounding errors it might be e.g. -1.3877787807814457e-17
radicant=0;}radicant/=rx_sq*y1p_sq+ry_sq*x1p_sq;radicant=Math.sqrt(radicant)*(fa===fs?-1:1);var cxp=radicant*rx/ry*y1p;var cyp=radicant*-ry/rx*x1p;// Step 3.
//
// Transform back to get centre coordinates (cx, cy) in the original
// coordinate system.
//
var cx=cos_phi*cxp-sin_phi*cyp+(x1+x2)/2;var cy=sin_phi*cxp+cos_phi*cyp+(y1+y2)/2;// Step 4.
//
// Compute angles (theta1, delta_theta).
//
var v1x=(x1p-cxp)/rx;var v1y=(y1p-cyp)/ry;var v2x=(-x1p-cxp)/rx;var v2y=(-y1p-cyp)/ry;var theta1=unit_vector_angle(1,0,v1x,v1y);var delta_theta=unit_vector_angle(v1x,v1y,v2x,v2y);if(fs===0&&delta_theta>0){delta_theta-=TAU;}if(fs===1&&delta_theta<0){delta_theta+=TAU;}return[cx,cy,theta1,delta_theta];}//
// Approximate one unit arc segment with bézier curves,
// see http://math.stackexchange.com/questions/873224
//
function approximate_unit_arc(theta1,delta_theta){var alpha=4/3*Math.tan(delta_theta/4);var x1=Math.cos(theta1);var y1=Math.sin(theta1);var x2=Math.cos(theta1+delta_theta);var y2=Math.sin(theta1+delta_theta);return[x1,y1,x1-y1*alpha,y1+x1*alpha,x2+y2*alpha,y2-x2*alpha,x2,y2];}function a2c(x1,y1,x2,y2,fa,fs,rx,ry,phi){var sin_phi=Math.sin(phi*TAU/360);var cos_phi=Math.cos(phi*TAU/360);// Make sure radii are valid
//
var x1p=cos_phi*(x1-x2)/2+sin_phi*(y1-y2)/2;var y1p=-sin_phi*(x1-x2)/2+cos_phi*(y1-y2)/2;if(x1p===0&&y1p===0){// we're asked to draw line to itself
return[];}if(rx===0||ry===0){// one of the radii is zero
return[];}// Compensate out-of-range radii
//
rx=Math.abs(rx);ry=Math.abs(ry);var lambda=x1p*x1p/(rx*rx)+y1p*y1p/(ry*ry);if(lambda>1){rx*=Math.sqrt(lambda);ry*=Math.sqrt(lambda);}// Get center parameters (cx, cy, theta1, delta_theta)
//
var cc=get_arc_center(x1,y1,x2,y2,fa,fs,rx,ry,sin_phi,cos_phi);var result=[];var theta1=cc[2];var delta_theta=cc[3];// Split an arc to multiple segments, so each segment
// will be less than τ/4 (= 90°)
//
var segments=Math.max(Math.ceil(Math.abs(delta_theta)/(TAU/4)),1);delta_theta/=segments;for(var i=0;i<segments;i++){result.push(approximate_unit_arc(theta1,delta_theta));theta1+=delta_theta;}// We have a bezier approximation of a unit circle,
// now need to transform back to the original ellipse
//
return result.map(function(curve){for(var _i3=0;_i3<curve.length;_i3+=2){var x=curve[_i3+0];var y=curve[_i3+1];// scale
x*=rx;y*=ry;// rotate
var xp=cos_phi*x-sin_phi*y;var yp=sin_phi*x+cos_phi*y;// translate
curve[_i3+0]=xp+cc[0];curve[_i3+1]=yp+cc[1];}return curve;});}/***/},/* 19 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return isPath;});// https://github.com/dy/is-svg-path
function isPath(str){if(typeof str!=='string')return false;str=str.trim();// https://www.w3.org/TR/SVG/paths.html#PathDataBNF
if(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str)&&/[\dz]$/i.test(str)&&str.length>4)return true;return false;}/***/},/* 20 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _parse_font__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseFont",function(){return _parse_font__WEBPACK_IMPORTED_MODULE_0__["default"];});/* harmony import */var _svgpath__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(27);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createSvgPath",function(){return _svgpath__WEBPACK_IMPORTED_MODULE_1__["default"];});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"appendUnit",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["appendUnit"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Color",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["Color"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fourValuesShortCut",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"eightValuesShortCut",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["eightValuesShortCut"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"notice",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["notice"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"oneOrTwoValues",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseColor",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseColorString",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"praseString",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["praseString"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseStringFloat",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseStringInt",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseStringTransform",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"rectVertices",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sortOrderedSprites",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"generateID",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["generateID"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sizeToPixel",function(){return _utils__WEBPACK_IMPORTED_MODULE_2__["sizeToPixel"];});/* harmony import */var _decorators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"cachable",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["cachable"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"composit",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["composit"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"attr",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["attr"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"deprecate",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["deprecate"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"flow",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["flow"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"absolute",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["absolute"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"relative",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["relative"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"inherit",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["inherit"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"inheritAttributes",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["inheritAttributes"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"parseValue",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["parseValue"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"setDeprecation",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["setDeprecation"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"decorators",function(){return _decorators__WEBPACK_IMPORTED_MODULE_3__["decorators"];});/* harmony import */var _store__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"attributeNames",function(){return _store__WEBPACK_IMPORTED_MODULE_4__["attributeNames"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"relatedAttributes",function(){return _store__WEBPACK_IMPORTED_MODULE_4__["relatedAttributes"];});/* harmony import */var _render__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(30);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"findColor",function(){return _render__WEBPACK_IMPORTED_MODULE_5__["findColor"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"cacheContextPool",function(){return _render__WEBPACK_IMPORTED_MODULE_5__["cacheContextPool"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"drawRadiusBox",function(){return _render__WEBPACK_IMPORTED_MODULE_5__["drawRadiusBox"];});/***/},/* 21 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return parseFont;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22);// borrow from node-canvas (https://github.com/Automattic/node-canvas)
/**
 * Font RegExp helpers.
 */var weights='bold|bolder|lighter|[1-9]00',styles='italic|oblique',variants='small-caps',stretches='ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',units='px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',string='\'([^\']+)\'|"([^"]+)"|([\\w-]|[\u4E00-\u9FA5])+';// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
var weightRe=new RegExp('('+weights+') +','i');var styleRe=new RegExp('('+styles+') +','i');var variantRe=new RegExp('('+variants+') +','i');var stretchRe=new RegExp('('+stretches+') +','i');/* eslint-disable prefer-template */var sizeFamilyRe=new RegExp('([\\d\\.]+)('+units+') *'+'((?:'+string+')( *, *(?:'+string+'))*)');/* eslint-enable prefer-template *//**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */function parseFont(str,defaultHeight){// Try for required properties first.
var sizeFamily=sizeFamilyRe.exec(str);if(!sizeFamily)return;// invalid
// Default values and required properties
var font={weight:'normal',style:'normal',stretch:'normal',variant:'normal',size:parseFloat(sizeFamily[1]),unit:sizeFamily[2],family:sizeFamily[3].replace(/ *, */g,',')};// Stop search at `sizeFamily.index`
var substr=str.substring(0,sizeFamily.index);// Optional, unordered properties.
var weight=weightRe.exec(substr),style=styleRe.exec(substr),variant=variantRe.exec(substr),stretch=stretchRe.exec(substr);if(weight)font.weight=weight[1];if(style)font.style=style[1];if(variant)font.variant=variant[1];if(stretch)font.stretch=stretch[1];font.size0=font.size;font.size=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sizeToPixel"])({size:font.size0,unit:font.unit},defaultHeight);if(font.unit==='vw'||font.unit==='vh'){if(typeof document!=='undefined'&&document.documentElement){var _document$documentEle=document.documentElement,clientWidth=_document$documentEle.clientWidth,clientHeight=_document$documentEle.clientHeight;var val=font.unit==='vw'?clientWidth:clientHeight;font.size=val*font.size/100;}}return font;}/* eslint-enable *//***/},/* 22 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Color",function(){return Color;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseColor",function(){return parseColor;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseColorString",function(){return parseColorString;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseStringTransform",function(){return parseStringTransform;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseValuesString",function(){return parseValuesString;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"praseString",function(){return praseString;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseStringInt",function(){return parseStringInt;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseStringFloat",function(){return parseStringFloat;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"oneOrTwoValues",function(){return oneOrTwoValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"fourValuesShortCut",function(){return fourValuesShortCut;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"eightValuesShortCut",function(){return eightValuesShortCut;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"rectVertices",function(){return rectVertices;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"appendUnit",function(){return appendUnit;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sortOrderedSprites",function(){return sortOrderedSprites;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"notice",function(){return notice;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"generateID",function(){return generateID;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sizeToPixel",function(){return sizeToPixel;});var colorString=__webpack_require__(23);var Color=function(){function Color(color){(0,_classCallCheck4.default)(this,Color);if(typeof color==='string'){var _colorString$get=colorString.get(color||'rgba(0,0,0,1)'),model=_colorString$get.model,value=_colorString$get.value;this.model=model;this.value=value;}else{this.model=color.model;this.value=color.value;}}(0,_createClass4.default)(Color,[{key:'toString',value:function toString(){var _value4=(0,_slicedToArray4.default)(this.value,4),a=_value4[0],b=_value4[1],c=_value4[2],d=_value4[3];var model=this.model;if(model==='rgb'){return model+'a('+a+','+b+','+c+','+d+')';}return model+'a('+a+','+b+'%,'+c+'%,'+d+')';}},{key:'str',get:function get(){return String(this);}}]);return Color;}();function parseColor(color){return new Color(color);}function parseColorString(color){if(color&&typeof color==='string'&&color!=='inherit'){return parseColor(color).toString();}return color;}function parseStringTransform(str){if(typeof str!=='string')return str;var rules=str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);var ret={};if(rules){rules.forEach(function(rule){var matched=rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);var _matched=(0,_slicedToArray4.default)(matched,3),m=_matched[1],v=_matched[2];if(m==='rotate'){ret[m]=parseStringFloat(v)[0];}else{ret[m]=parseStringFloat(v);}});}return ret;}function parseValuesString(str,parser){if(typeof str==='string'&&str!==''&&str!=='inherit'){var values=str.split(/[\s,]+/g);return values.map(function(v){var ret=parser?parser(v):v;return(0,_isNan2.default)(ret)?v:ret;});}return str;}function praseString(str){return parseValuesString(str);}function parseStringInt(str){return parseValuesString(str,parseInt);}function parseStringFloat(str){return parseValuesString(str,function(v){if(v==='center')return 0.5;if(v==='left'||v==='top')return 0;if(v==='right'||v==='bottom')return 1;return parseFloat(v);});}function oneOrTwoValues(val){if(!Array.isArray(val)){return[val,val];}if(val.length===1){return[val[0],val[0]];}return val;}function fourValuesShortCut(val){if(!Array.isArray(val)){return[val,val,val,val];}if(val.length===1){return[val[0],val[0],val[0],val[0]];}if(val.length===2){return[val[0],val[1],val[0],val[1]];}return[].concat((0,_toConsumableArray4.default)(val),[0,0,0,0]).slice(0,4);}function eightValuesShortCut(val){if(!Array.isArray(val)){return[val,val,val,val,val,val,val,val];}if(val.length===1){return eightValuesShortCut(val[0]);}if(val.length===2){return[val[0],val[1],val[0],val[1],val[0],val[1],val[0],val[1]];}if(val.length===4){return[val[0],val[1],val[2],val[3],val[0],val[1],val[2],val[3]];}return[].concat((0,_toConsumableArray4.default)(val),[0,0,0,0,0,0,0,0]).slice(0,8);}function rectVertices(rect){var _rect=(0,_slicedToArray4.default)(rect,4),x=_rect[0],y=_rect[1],w=_rect[2],h=_rect[3];return[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];}function appendUnit(value){var defaultUnit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'px';if(value===''){return value;}if(typeof value==='string'&&(0,_isNan2.default)(Number(value))){return value;}return value+defaultUnit;}function sortOrderedSprites(sprites){var reversed=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;return[].concat((0,_toConsumableArray4.default)(sprites)).sort(function(a,b){if(reversed){;var _ref10=[b,a];a=_ref10[0];b=_ref10[1];}if(a.zIndex===b.zIndex){return a.zOrder-b.zOrder;}return a.zIndex-b.zIndex;});}var noticed=new _set5.default();function notice(msg){var level=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'warn';if(typeof console!=='undefined'&&!noticed.has(msg)){console[level](msg);// eslint-disable-line no-console
noticed.add(msg);}}var IDMap=new _weakMap2.default();function generateID(obj){if(IDMap.has(obj)){return IDMap.get(obj);}var id=Math.random().toString(36).slice(2);IDMap.set(obj,id);return id;}function sizeToPixel(value,defaultWidth){// eslint-disable-line complexity
if(typeof value==='string'){var matched=value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);if(matched){value={size:parseFloat(matched[1]),unit:matched[2]};}else{value={size:parseInt(value,10),unit:'px'};}}var _value5=value,size=_value5.size,unit=_value5.unit;if(unit==='pt'){size/=0.75;}else if(unit==='pc'){size*=16;}else if(unit==='in'){size*=96;}else if(unit==='cm'){size*=96.0/2.54;}else if(unit==='mm'){size*=96.0/25.4;}else if(unit==='em'||unit==='rem'||unit==='ex'){if(!defaultWidth&&typeof getComputedStyle==='function'&&typeof document!=='undefined'){var root=getComputedStyle(document.documentElement).fontSize;defaultWidth=sizeToPixel(root,16);}size*=defaultWidth;if(unit==='ex')size/=2;}else if(unit==='q'){size*=96.0/25.4/4;}else if(unit==='vw'||unit==='vh'){if(typeof document!=='undefined'){var val=unit==='vw'?document.documentElement.clientWidth:document.documentElement.clientHeight;size*=val/100;}}else if(unit==='vmax'||unit==='vmin'){if(typeof document!=='undefined'){var width=document.documentElement.clientWidth;var height=document.documentElement.clientHeight;if(unit==='vmax'){size*=Math.max(width,height)/100;}else{size*=Math.min(width,height)/100;}}}return size;}/***/},/* 23 *//***/function(module,exports,__webpack_require__){/* MIT license */var colorNames=__webpack_require__(24);var swizzle=__webpack_require__(25);var reverseNames={};// create a list of reverse color names
for(var name in colorNames){if(colorNames.hasOwnProperty(name)){reverseNames[colorNames[name]]=name;}}var cs=module.exports={to:{},get:{}};cs.get=function(string){var prefix=string.substring(0,3).toLowerCase();var val;var model;switch(prefix){case'hsl':val=cs.get.hsl(string);model='hsl';break;case'hwb':val=cs.get.hwb(string);model='hwb';break;default:val=cs.get.rgb(string);model='rgb';break;}if(!val){return null;}return{model:model,value:val};};cs.get.rgb=function(string){if(!string){return null;}var abbr=/^#([a-f0-9]{3,4})$/i;var hex=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i;var rgba=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var per=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var keyword=/(\D+)/;var rgb=[0,0,0,1];var match;var i;var hexAlpha;if(match=string.match(hex)){hexAlpha=match[2];match=match[1];for(i=0;i<3;i++){// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
var i2=i*2;rgb[i]=parseInt(match.slice(i2,i2+2),16);}if(hexAlpha){rgb[3]=Math.round(parseInt(hexAlpha,16)/255*100)/100;}}else if(match=string.match(abbr)){match=match[1];hexAlpha=match[3];for(i=0;i<3;i++){rgb[i]=parseInt(match[i]+match[i],16);}if(hexAlpha){rgb[3]=Math.round(parseInt(hexAlpha+hexAlpha,16)/255*100)/100;}}else if(match=string.match(rgba)){for(i=0;i<3;i++){rgb[i]=parseInt(match[i+1],0);}if(match[4]){rgb[3]=parseFloat(match[4]);}}else if(match=string.match(per)){for(i=0;i<3;i++){rgb[i]=Math.round(parseFloat(match[i+1])*2.55);}if(match[4]){rgb[3]=parseFloat(match[4]);}}else if(match=string.match(keyword)){if(match[1]==='transparent'){return[0,0,0,0];}rgb=colorNames[match[1]];if(!rgb){return null;}rgb[3]=1;return rgb;}else{return null;}for(i=0;i<3;i++){rgb[i]=clamp(rgb[i],0,255);}rgb[3]=clamp(rgb[3],0,1);return rgb;};cs.get.hsl=function(string){if(!string){return null;}var hsl=/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var match=string.match(hsl);if(match){var alpha=parseFloat(match[4]);var h=(parseFloat(match[1])+360)%360;var s=clamp(parseFloat(match[2]),0,100);var l=clamp(parseFloat(match[3]),0,100);var a=clamp(isNaN(alpha)?1:alpha,0,1);return[h,s,l,a];}return null;};cs.get.hwb=function(string){if(!string){return null;}var hwb=/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;var match=string.match(hwb);if(match){var alpha=parseFloat(match[4]);var h=(parseFloat(match[1])%360+360)%360;var w=clamp(parseFloat(match[2]),0,100);var b=clamp(parseFloat(match[3]),0,100);var a=clamp(isNaN(alpha)?1:alpha,0,1);return[h,w,b,a];}return null;};cs.to.hex=function(){var rgba=swizzle(arguments);return'#'+hexDouble(rgba[0])+hexDouble(rgba[1])+hexDouble(rgba[2])+(rgba[3]<1?hexDouble(Math.round(rgba[3]*255)):'');};cs.to.rgb=function(){var rgba=swizzle(arguments);return rgba.length<4||rgba[3]===1?'rgb('+Math.round(rgba[0])+', '+Math.round(rgba[1])+', '+Math.round(rgba[2])+')':'rgba('+Math.round(rgba[0])+', '+Math.round(rgba[1])+', '+Math.round(rgba[2])+', '+rgba[3]+')';};cs.to.rgb.percent=function(){var rgba=swizzle(arguments);var r=Math.round(rgba[0]/255*100);var g=Math.round(rgba[1]/255*100);var b=Math.round(rgba[2]/255*100);return rgba.length<4||rgba[3]===1?'rgb('+r+'%, '+g+'%, '+b+'%)':'rgba('+r+'%, '+g+'%, '+b+'%, '+rgba[3]+')';};cs.to.hsl=function(){var hsla=swizzle(arguments);return hsla.length<4||hsla[3]===1?'hsl('+hsla[0]+', '+hsla[1]+'%, '+hsla[2]+'%)':'hsla('+hsla[0]+', '+hsla[1]+'%, '+hsla[2]+'%, '+hsla[3]+')';};// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb=function(){var hwba=swizzle(arguments);var a='';if(hwba.length>=4&&hwba[3]!==1){a=', '+hwba[3];}return'hwb('+hwba[0]+', '+hwba[1]+'%, '+hwba[2]+'%'+a+')';};cs.to.keyword=function(rgb){return reverseNames[rgb.slice(0,3)];};// helpers
function clamp(num,min,max){return Math.min(Math.max(min,num),max);}function hexDouble(num){var str=num.toString(16).toUpperCase();return str.length<2?'0'+str:str;}/***/},/* 24 *//***/function(module,exports,__webpack_require__){"use strict";module.exports={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};/***/},/* 25 *//***/function(module,exports,__webpack_require__){"use strict";var isArrayish=__webpack_require__(26);var concat=Array.prototype.concat;var slice=Array.prototype.slice;var swizzle=module.exports=function swizzle(args){var results=[];for(var i=0,len=args.length;i<len;i++){var arg=args[i];if(isArrayish(arg)){// http://jsperf.com/javascript-array-concat-vs-push/98
results=concat.call(results,slice.call(arg));}else{results.push(arg);}}return results;};swizzle.wrap=function(fn){return function(){return fn(swizzle(arguments));};};/***/},/* 26 *//***/function(module,exports){module.exports=function isArrayish(obj){if(!obj||typeof obj==='string'){return false;}return obj instanceof Array||Array.isArray(obj)||obj.length>=0&&(obj.splice instanceof Function||(0,_getOwnPropertyDescriptor2.default)(obj,obj.length-1)&&obj.constructor.name!=='String');};/***/},/* 27 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return createSvgPath;});/* harmony import */var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);function createSvgPath(path){if(typeof path==='string')path={d:path};var p=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](path.d);if(path.transform||path.trim){if(path.transform){(0,_entries2.default)(path.transform).forEach(function(_ref11){var _ref12=(0,_slicedToArray4.default)(_ref11,2),key=_ref12[0],value=_ref12[1];if(!Array.isArray(value))value=[value];p[key].apply(p,(0,_toConsumableArray4.default)(value));});}if(path.trim){p.trim();}}return p;}/***/},/* 28 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"attr",function(){return attr;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"composit",function(){return composit;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"cachable",function(){return cachable;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"inheritAttributes",function(){return inheritAttributes;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"inherit",function(){return inherit;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"relative",function(){return relative;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"flow",function(){return flow;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"absolute",function(){return absolute;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"setDeprecation",function(){return setDeprecation;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"deprecate",function(){return deprecate;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseValue",function(){return parseValue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"decorators",function(){return decorators;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(22);/* harmony import */var _store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29);var _attrAbsolute=(0,_symbol2.default)('attrAbsolute');/* eslint-disable prefer-rest-params */function polyfillLegacy(target,key,descriptor){return{target:target,key:key,descriptor:descriptor};}function getPV(subject,relative){var parent=subject.parent;var pv=null;if(parent){var attrSize=parent.attrSize;if(attrSize){var attrV=relative==='pw'?attrSize[0]:attrSize[1];while(attrSize&&attrV===''){// flexible value
parent=parent.parent;attrSize=parent.attrSize;}}if(relative==='pw'){pv=attrSize?parent.contentSize[0]:parent.resolution[0];}else if(relative==='ph'){pv=attrSize?parent.contentSize[1]:parent.resolution[1];}}return pv;}function attr(options){var cache=false,reflow=false,relayout=false,quiet=false,value=null,extra=null;var decorator=function decorator(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor=elementDescriptor,key=_elementDescriptor.key,kind=_elementDescriptor.kind;_store__WEBPACK_IMPORTED_MODULE_1__["attributeNames"].add(key);if(quiet&&(cache||reflow||relayout)){throw new Error(key+': quietSet cannot enable cache or reflow or relayout');}var _symbolKey=key,defaultValue=value!=null?value:elementDescriptor.value;var relativeType=elementDescriptor.descriptor.__relative;var inheritValue=elementDescriptor.descriptor.__inherit;var composit=elementDescriptor.descriptor.__composit;if(kind==='field'){defaultValue=elementDescriptor.initializer?elementDescriptor.initializer():value;_symbolKey=(0,_symbol2.default)(key);var setter=quiet?function(val){this.quietSet(_symbolKey,val);}:function(val){this.set(_symbolKey,val);};elementDescriptor={kind:'method',key:key,placement:'prototype',descriptor:{configurable:true,enumerable:true,set:setter,get:function get(){return this.get(_symbolKey);}}};}if(relativeType){elementDescriptor=applyRative(elementDescriptor,relativeType);}if(inheritValue){elementDescriptor=applyInherit(elementDescriptor,inheritValue.defaultValue);}var descriptor=elementDescriptor.descriptor;var _getter=descriptor.get;if(!_getter){_getter=function _getter(){var ret=this.get(key);return ret!=null?ret:this.getDefaultValue(key,defaultValue);};}if(composit){if(cache||reflow||relayout||quiet||value||extra){throw new Error('Cannot apply state to composit attribute.');}descriptor.get=_getter;}else if(!relativeType&&!inheritValue){descriptor.get=function(){var ret=_getter.call(this);return ret!=null?ret:this.getDefaultValue(key,defaultValue);};}else if(relativeType){// enable set default to user defined getter
descriptor.get=function(){var ret=_getter.call(this);var subject=this.subject;if(ret==null){ret=this.getDefaultValue(key,defaultValue);}else if(ret.relative){var _relative=ret.relative.trim();if(_relative==='pw'||_relative==='ph'){var pv=getPV(subject,_relative);if(pv!==ret.pv){this[key]=ret.rv;return this[key];}subject.cache=null;if(subject[_attrAbsolute]){return pv*ret.v;}return ret.rv;}if(_relative==='rw'||_relative==='rh'){var layer=subject.layer;var _pv=null;if(layer){if(_relative==='rw'){_pv=layer.resolution[0];}else if(_relative==='rh'){_pv=layer.resolution[1];}}if(_pv!==ret.pv){this[key]=ret.rv;return this[key];}subject.cache=null;if(subject[_attrAbsolute]){return _pv*ret.v;}return ret.rv;}}return ret;};}else{// enable set default to user defined getter
descriptor.get=function(){var ret=_getter.call(this);var subject=this.subject;if(ret==null){ret=this.getDefaultValue(key,defaultValue);}if(ret==='inherit'){var _value6=null;var parent=subject.parent;while(parent&&parent.attr){_value6=parent.attr(key);if(_value6!=null)break;parent=parent.parent;}return _value6!=null?_value6:this.__inheritDefaults[key];}return ret;};}if(!composit){var _setter=descriptor.set;var _clearCache=!(descriptor.__cachable||cache);descriptor.set=function(val){var subject=this.subject;this.__updateTag=false;this.__reflowTag=reflow;this.__clearLayout=relayout;if(!this.__styleTag&&val!=null&&this.__attributesSet){this.__attributesSet.add(key);}if(!this.__styleTag&&val==null&&this.__attributesSet){if(this.__attributesSet.has(key)){this.__attributesSet.delete(key);}}_setter.call(this,val);if(subject&&!this.__quietTag&&this.__updateTag){var clearLayout=this.__clearLayout;if(subject.hasLayout){var offsetSize=subject.boxOffsetSize,layoutSize=subject.__lastLayout;clearLayout|=!layoutSize||offsetSize[0]!==layoutSize[0]||offsetSize[1]!==layoutSize[1];subject.__lastLayout=offsetSize;}if(clearLayout)subject.clearLayout();subject.forceUpdate(_clearCache);if(this.__reflowTag){subject.reflow();}}if(this.__updateTag){if(_store__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].has(key)){subject.updateStyles();}if(extra){this[extra](key,val);}}};// delete this.__reflowTag;
// delete this.__updateTag;
}if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};if(options.descriptor){return decorator(options);}if(arguments.length===3){return decorator.apply(this,arguments);}quiet=!!options.quiet;cache=!!options.cache;reflow=!!options.reflow;relayout=!!options.relayout;value=options.value;extra=options.extra;return decorator;}function composit(struct){return function(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor2=elementDescriptor,kind=_elementDescriptor2.kind,key=_elementDescriptor2.key;if(kind!=='field'){throw new Error('Invalid composit attribute '+key);}elementDescriptor.kind='method';var set=void 0,get=void 0;if(typeof struct==='string'){set=function set(val){this[struct]=val;};get=function get(){return this[struct];};}else if(Array.isArray(struct)){set=function set(val){var _this9=this;struct.forEach(function(key,i){_this9[key]=val!=null?val[i]:null;});};get=function get(){var _this10=this;return struct.map(function(key){return _this10[key];});};}else{struct=(0,_entries2.default)(struct);set=function set(val){var _this11=this;struct.forEach(function(_ref13){var _ref14=(0,_slicedToArray4.default)(_ref13,2),prop=_ref14[0],key=_ref14[1];_this11[key]=val!=null?val[prop]:null;});};get=function get(){var _this12=this;var ret={};struct.forEach(function(_ref15){var _ref16=(0,_slicedToArray4.default)(_ref15,2),prop=_ref16[0],key=_ref16[1];ret[prop]=_this12[key];});return ret;};}elementDescriptor.descriptor={get:get,set:set,__composit:true};if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};}// after attr
function cachable(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor3=elementDescriptor,descriptor=_elementDescriptor3.descriptor;descriptor.__cachable=true;if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;}var inheritAttributes=new _set5.default();// after attr
function inherit(){var defaultValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';return function(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor4=elementDescriptor,descriptor=_elementDescriptor4.descriptor;descriptor.__inherit={defaultValue:defaultValue};if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};}function applyInherit(elementDescriptor,defaultValue){var key=elementDescriptor.key,_finisher=elementDescriptor.finisher,target=elementDescriptor.target;inheritAttributes.add(key);if(target){if(!target.hasOwnProperty('__inheritDefaults')){// eslint-disable-line no-prototype-builtins
target.__inheritDefaults=(0,_create2.default)(target.__inheritDefaults||null);}target.__inheritDefaults[key]=defaultValue;return elementDescriptor;}return(0,_extends3.default)({},elementDescriptor,{finisher:function finisher(klass){if(_finisher)_finisher(klass);var proto=klass.prototype;if(!proto.hasOwnProperty('__inheritDefaults')){// eslint-disable-line no-prototype-builtins
proto.__inheritDefaults=(0,_create2.default)(proto.__inheritDefaults||null);}proto.__inheritDefaults[key]=defaultValue;}});}// after attr
// relative -> width | height
function relative(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'width';return function(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor5=elementDescriptor,descriptor=_elementDescriptor5.descriptor;descriptor.__relative=type;if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};}function applyRative(elementDescriptor,type){var descriptor=elementDescriptor.descriptor;var setter=descriptor.set;descriptor.set=function(val){if(typeof val==='string'){val=val.trim();if(val.slice(-1)==='%'){var _relative2=type==='width'?'pw':'ph';var pv=getPV(this.subject,_relative2);val={relative:_relative2,pv:pv,v:parseFloat(val)/100,rv:val};}else{var _relative3=val.slice(-2);if(_relative3==='rw'||_relative3==='rh'){var _pv2=null;var layer=this.subject.layer;if(layer){_pv2=layer.resolution[_relative3==='rw'?0:1];}val={relative:_relative3,pv:_pv2,v:parseFloat(val)/100,rv:val};}else{val=val?parseFloat(val):val;}}}setter.call(this,val);};return elementDescriptor;}function flow(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor6=elementDescriptor,descriptor=_elementDescriptor6.descriptor,key=_elementDescriptor6.key;if(descriptor.get){var _getter=descriptor.get;descriptor.get=function(){var ret=this.flow(key);if(ret===undefined){ret=_getter.call(this);this.flow(key,ret);}return ret;};}if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;}// set tag force to get absolute value from relative attributes
function absolute(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor7=elementDescriptor,descriptor=_elementDescriptor7.descriptor;if(descriptor.get){var _getter=descriptor.get;descriptor.get=function(){this[_attrAbsolute]=true;var ret=_getter.call(this);this[_attrAbsolute]=false;return ret;};}if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;}function setDeprecation(apiName){var msg=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';msg='[Deprecation] '+apiName+' has been deprecated.'+msg;Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notice"])(msg);}function deprecate(msg){var apiName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var decorator=function decorator(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor8=elementDescriptor,descriptor=_elementDescriptor8.descriptor,key=_elementDescriptor8.key;apiName=apiName||'Method '+key;if(typeof descriptor.value==='function'){var func=descriptor.value;descriptor.value=function(){setDeprecation(apiName,msg);for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return func.apply(this,args);};}if(descriptor.set){var setter=descriptor.set;descriptor.set=function(val){setDeprecation(apiName,msg);return setter.call(this,val);};}if(descriptor.get){var getter=descriptor.get;descriptor.get=function(){setDeprecation(apiName,msg);return getter.call(this);};}if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};if(msg.descriptor){return decorator(msg);}if(arguments.length===3){return decorator.apply(this,arguments);}return decorator;}// before attr
function parseValue(){for(var _len5=arguments.length,parsers=Array(_len5),_key5=0;_key5<_len5;_key5++){parsers[_key5]=arguments[_key5];}return function(elementDescriptor){if(arguments.length===3){elementDescriptor=polyfillLegacy.apply(this,arguments);}var _elementDescriptor9=elementDescriptor,descriptor=_elementDescriptor9.descriptor;var setter=descriptor.set;descriptor.set=function(val){if(val!=null&&val!==''&&val!=='inherit'){val=parsers.reduce(function(v,parser){return parser(v);},val);}setter.call(this,val);};if(arguments.length===3)return elementDescriptor.descriptor;return elementDescriptor;};}// return a function to apply any decorators to a descriptor
function decorators(){for(var _len6=arguments.length,funcs=Array(_len6),_key6=0;_key6<_len6;_key6++){funcs[_key6]=arguments[_key6];}return function(key,value,descriptor){var elementDescriptor=void 0;if(!descriptor){elementDescriptor=key;}else{elementDescriptor={key:key,descriptor:descriptor,value:value};}var ret=funcs.reduceRight(function(a,b){return b.call(this,a);},elementDescriptor);return ret&&ret.descriptor;};}/* eslint-enable prefer-rest-params *//***/},/* 29 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"attributeNames",function(){return attributeNames;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"relatedAttributes",function(){return relatedAttributes;});var attributeNames=new _set5.default();var relatedAttributes=new _set5.default();/***/},/* 30 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"drawRadiusBox",function(){return drawRadiusBox;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"findColor",function(){return findColor;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"cacheContextPool",function(){return cacheContextPool;});// export function drawRadiusBox(context, {x, y, w, h, r}) {
//   // avoid radius larger than width or height
//   r = Math.min(r, Math.floor(Math.min(w, h) / 2));
//   // avoid radius is negative
//   r = Math.max(r, 0);
//   context.beginPath();
//   context.moveTo(x + r, y);
//   context.arcTo(x + w, y, x + w, y + h, r);
//   context.arcTo(x + w, y + h, x, y + h, r);
//   context.arcTo(x, y + h, x, y, r);
//   context.arcTo(x, y, x + w, y, r);
//   context.closePath();
// }
function drawEllipseBorder(ctx,x,y,w,h){var pos=arguments.length>5&&arguments[5]!==undefined?arguments[5]:'leftTop';var kappa=0.5522848,ox=w/2*kappa,// control point offset horizontal
oy=h/2*kappa,// control point offset vertical
xe=x+w,// x-end
ye=y+h,// y-end
xm=x+w/2,// x-middle
ym=y+h/2;// y-middle
if(pos==='leftTop'){ctx.moveTo(x,ym);ctx.bezierCurveTo(x,ym-oy,xm-ox,y,xm,y);}else if(pos==='rightTop'){ctx.bezierCurveTo(xm+ox,y,xe,ym-oy,xe,ym);}else if(pos==='rightBottom'){ctx.bezierCurveTo(xe,ym+oy,xm+ox,ye,xm,ye);}else if(pos==='leftBottom'){ctx.bezierCurveTo(xm-ox,ye,x,ym+oy,x,ym);}}function drawRadiusBox(context,_ref17,radius){var _ref18=(0,_slicedToArray4.default)(_ref17,4),x=_ref18[0],y=_ref18[1],w=_ref18[2],h=_ref18[3];if(!radius){context.beginPath();context.rect(x,y,w,h);}else{if(!radius)radius=[0,0,0,0,0,0,0,0];var _radius$map=radius.map(function(r,i){if(i%2)return Math.min(r,h/2);return Math.min(r,w/2);}),_radius$map2=(0,_slicedToArray4.default)(_radius$map,8),tl0=_radius$map2[0],tl1=_radius$map2[1],tr0=_radius$map2[2],tr1=_radius$map2[3],br0=_radius$map2[4],br1=_radius$map2[5],bl0=_radius$map2[6],bl1=_radius$map2[7];context.beginPath();context.moveTo(x,y+tl1);drawEllipseBorder(context,x,y,tl0*2,tl1*2,'leftTop');context.lineTo(x+w-tr0,y);drawEllipseBorder(context,x+w-tr0*2,y,tr0*2,tr1*2,'rightTop');context.lineTo(x+w,y+h-br1);drawEllipseBorder(context,x+w-br0*2,y+h-br1*2,br0*2,br1*2,'rightBottom');context.lineTo(x+bl0,y+h);drawEllipseBorder(context,x,y+h-bl1*2,bl0*2,bl1*2,'leftBottom');context.closePath();}}/* istanbul ignore next  */function gradientBox(angle,rect){var _rect2=(0,_slicedToArray4.default)(rect,4),x=_rect2[0],y=_rect2[1],w=_rect2[2],h=_rect2[3];angle%=360;if(angle<0){angle+=360;}var ret=[x,y,x+w,y+h];if(angle>=0&&angle<90){var tan=Math.tan(Math.PI*angle/180);var d=tan*w;if(d<=h){ret=[x,y,x+w,y+d];}else{d=h/tan;ret=[x,y,x+d,y+h];}}else if(angle>=90&&angle<180){var _tan=Math.tan(Math.PI*(angle-90)/180);var _d2=_tan*h;if(_d2<=w){ret=[x+w,y,x+w-_d2,y+h];}else{_d2=w/_tan;ret=[x+w,y,x,y+_d2];}}else if(angle>=180&&angle<270){var _tan2=Math.tan(Math.PI*(angle-180)/180);var _d3=_tan2*w;if(_d3<=h){ret=[x+w,y+h,x,y+h-_d3];}else{_d3=h/_tan2;ret=[x+w,y+h,x+w-_d3,y];}}else if(angle>=270&&angle<360){var _tan3=Math.tan(Math.PI*(angle-270)/180);var _d4=_tan3*h;if(_d4<=w){ret=[x,y+h,x+_d4,y];}else{_d4=w/_tan3;ret=[x,y+h,x+w,y+h-_d4];}}return ret;}function findColor(context,sprite,prop){var gradients=sprite.attr('gradients')||{};var color=prop==='border'?sprite.attr(prop).color:sprite.attr(prop),gradient=void 0;if(gradients[prop]){/* istanbul ignore next */gradient=gradients[prop];}else if(typeof color!=='string'){gradient=color;}if(gradient){var _gradient=gradient,colors=_gradient.colors,vector=_gradient.vector,direction=_gradient.direction,rect=_gradient.rect;/* istanbul ignore if  */if(direction!=null){if(prop==='border'){rect=rect||[0,0].concat((0,_toConsumableArray4.default)(sprite.outerSize));}else{var _sprite$attr=sprite.attr('border'),borderWidth=_sprite$attr.width;rect=rect||[borderWidth,borderWidth].concat((0,_toConsumableArray4.default)(sprite.innerSize));}vector=gradientBox(direction,rect);}if(vector.length===4){color=context.createLinearGradient.apply(context,(0,_toConsumableArray4.default)(vector));}else if(vector.length===6){color=context.createRadialGradient.apply(context,(0,_toConsumableArray4.default)(vector));}/* istanbul ignore next  */else if(vector.length===3){// for wxapp
color=context.createCircularGradient.apply(context,(0,_toConsumableArray4.default)(vector));}/* istanbul ignore next  */else{throw Error('Invalid gradient vector!');}colors.forEach(function(o){color.addColorStop(o.offset,o.color);});}return color;}var contextPool=[],maxPollSize=20;var cacheContextPool={get:function get(context){if(contextPool.length>0){return contextPool.pop();}var canvas=context.canvas;if(!canvas||!canvas.cloneNode){return;}var copied=canvas.cloneNode();return copied.getContext('2d');},put:function put(){for(var _len7=arguments.length,contexts=Array(_len7),_key7=0;_key7<_len7;_key7++){contexts[_key7]=arguments[_key7];}contexts.every(function(context){var ret=contextPool.length<maxPollSize;if(ret){context.canvas.width=0;context.canvas.height=0;contextPool.push(context);}return ret;});},get size(){return contextPool.length;}};/***/},/* 31 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return BaseSprite;});/* harmony import */var sprite_math__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11);/* harmony import */var sprite_animator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20);/* harmony import */var _baseattr__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(32);/* harmony import */var _basenode__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(34);/* harmony import */var _filters__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(35);function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}var _animations=(0,_symbol2.default)('animations'),_cachePriority=(0,_symbol2.default)('cachePriority'),_effects=(0,_symbol2.default)('effects'),_flow=(0,_symbol2.default)('flow'),_releaseKeys=(0,_symbol2.default)('releaseKeys');var CACHE_PRIORITY_THRESHOLDS=0;// disable cache_priority, for canvas drawing bug...
var BaseSprite=_decorate(null,function(_initialize,_BaseNode){var BaseSprite=function(_BaseNode2){(0,_inherits3.default)(BaseSprite,_BaseNode2);/**
      new Sprite({
        attr: {
          ...
        }
      })
     */function BaseSprite(attrs){(0,_classCallCheck4.default)(this,BaseSprite);var _this13=(0,_possibleConstructorReturn3.default)(this,(BaseSprite.__proto__||(0,_getPrototypeOf3.default)(BaseSprite)).call(this,attrs));_initialize(_this13);_this13[_animations]=new _set5.default();_this13[_cachePriority]=0;_this13[_flow]={};_this13[_releaseKeys]=new _set5.default();return _this13;}return BaseSprite;}(_BaseNode);return{F:BaseSprite,d:[{kind:"field",static:true,key:"Attr",value:function value(){return _baseattr__WEBPACK_IMPORTED_MODULE_3__["default"];}},{kind:"method",static:true,key:"setAttributeEffects",value:function value(){var effects=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(this.prototype[_effects]==null){this.prototype[_effects]=effects;}(0,_assign2.default)(this.prototype[_effects],effects);}},{kind:"method",static:true,key:"addAttributes",value:function value(){var attrs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return this.Attr.addAttributes(attrs);}},{kind:"method",static:true,key:"defineAttributes",value:function value(attrs,effects){this.Attr=function(_Attr){(0,_inherits3.default)(_class2,_Attr);function _class2(subject){(0,_classCallCheck4.default)(this,_class2);var _this14=(0,_possibleConstructorReturn3.default)(this,(_class2.__proto__||(0,_getPrototypeOf3.default)(_class2)).call(this,subject));if(attrs.init){attrs.init.call(_this14,_this14,subject);}return _this14;}return _class2;}(this.Attr);if(attrs)this.addAttributes(attrs);if(effects)this.setAttributeEffects(effects);return this.Attr;}},{kind:"get",key:"effects",value:function value(){return this[_effects];}},{kind:"method",key:"setReleaseKey",value:function value(key){this[_releaseKeys].add(key);}},{kind:"method",key:"reflow",value:function value(){this[_flow]={};}},{kind:"method",key:"flow",value:function value(prop,_value7){if(_value7===undefined){return this[_flow][prop];}this[_flow][prop]=_value7;}},{kind:"get",key:"hasLayout",value:function value(){if(this.attr('position')==='absolute')return false;if(this.parent&&this.parent.relayout){var display=this.parent.attr('display');return display!==''&&display!=='static';}return false;}},{kind:"set",key:"zIndex",value:function value(val){this.attr('zIndex',val);}},{kind:"get",key:"zIndex",value:function value(){return this.attr('zIndex');}},{kind:"get",key:"isVirtual",value:function value(){return false;}},{kind:"method",key:"isVisible",value:function value(){if(!this.parent)return false;var display=this.attr('display');if(display==='none'){return false;}var opacity=this.attr('opacity');if(opacity<=0){return false;}if(this.isVirtual)return true;var _offsetSize=(0,_slicedToArray4.default)(this.offsetSize,2),width=_offsetSize[0],height=_offsetSize[1];if(width<=0||height<=0){return false;}if(this.parent.isVisible){return this.parent.isVisible();}return true;}},{kind:"get",key:"transform",value:function value(){var transform=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"](this.attr('transformMatrix'));var transformOrigin=this.attr('transformOrigin');if(transformOrigin){var t=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Matrix"]();t.translate.apply(t,(0,_toConsumableArray4.default)(transformOrigin));t.multiply(transform);t.translate.apply(t,(0,_toConsumableArray4.default)(transformOrigin.map(function(v){return-v;})));return t;}return transform;}},{kind:"method",key:"connect",value:function value(parent){var _this15=this;var zOrder=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;if(parent&&!(parent instanceof _basenode__WEBPACK_IMPORTED_MODULE_4__["default"])){var node=new _basenode__WEBPACK_IMPORTED_MODULE_4__["default"]();node.context=parent;node.timeline=new sprite_animator__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();node.update=function(){var currentTime=this.timeline.currentTime;node.dispatchEvent('update',{target:this,timeline:this.timeline,renderTime:currentTime},true,true);};parent=node;}var ret=_get(_getPrototypeOf(BaseSprite.prototype),"connect",this).call(this,parent,zOrder);Object.defineProperty(this,'context',{get:function get(){return parent.cache||parent.context;},configurable:true});this[_animations].forEach(function(animation){if(parent.layer){animation.baseTimeline=parent.layer.timeline;}animation.play();animation.finished.then(function(){_this15[_animations].delete(animation);});});if(this.hasLayout)this.clearLayout();this.reflow();return ret;}},{kind:"method",key:"disconnect",value:function value(parent){var _this16=this;this[_animations].forEach(function(animation){return animation.cancel();});if(this.cache){this.cache=null;}if(this.hasLayout)this.clearLayout();this.reflow();var ret=_get(_getPrototypeOf(BaseSprite.prototype),"disconnect",this).call(this,parent);delete this.context;[].concat((0,_toConsumableArray4.default)(this[_releaseKeys])).forEach(function(key){return delete _this16[key];});return ret;}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"]],key:"xy",value:function value(){var x=void 0,y=void 0;if(this.hasLayout){x=this.attr('layoutX');y=this.attr('layoutY');}else{var _attr2=this.attr('pos');var _attr3=(0,_slicedToArray4.default)(_attr2,2);x=_attr3[0];y=_attr3[1];}return[x,y];}},{kind:"get",key:"animations",value:function value(){return this[_animations];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"],_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"attrSize",value:function value(){var _attr4=this.attr('size'),_attr5=(0,_slicedToArray4.default)(_attr4,2),width=_attr5[0],height=_attr5[1];var isBorderBox=this.attr('boxSizing')==='border-box';if(this.hasLayout){var layoutWidth=this.attr('layoutWidth'),layoutHeight=this.attr('layoutHeight');var _ref19=[layoutWidth!==''?layoutWidth:width,layoutHeight!==''?layoutHeight:height];width=_ref19[0];height=_ref19[1];}if(isBorderBox){var borderWidth=this.attr('border').width,_attr6=this.attr('padding'),_attr7=(0,_slicedToArray4.default)(_attr6,4),paddingTop=_attr7[0],paddingRight=_attr7[1],paddingBottom=_attr7[2],paddingLeft=_attr7[3];if(width!==''){width=Math.max(0,width-2*borderWidth-paddingLeft-paddingRight);}if(height!==''){height=Math.max(0,height-2*borderWidth-paddingTop-paddingBottom);}}return[width,height];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["absolute"],_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"boxOffsetSize",value:function value(){// get original boxSize, without layout
if(this.isVirtual)return[0,0];var _attr8=this.attr('size'),_attr9=(0,_slicedToArray4.default)(_attr8,2),width=_attr9[0],height=_attr9[1];var _attr10=this.attr('padding'),_attr11=(0,_slicedToArray4.default)(_attr10,4),top=_attr11[0],right=_attr11[1],bottom=_attr11[2],left=_attr11[3];var _attr12=this.attr('border'),borderWidth=_attr12.width,lw=borderWidth*2;return[left+(width|0)+right+lw,top+(height|0)+bottom+lw];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"contentSize",value:function value(){if(this.isVirtual)return[0,0];var _attrSize=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize[0],height=_attrSize[1];return[width|0,height|0];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"clientSize",value:function value(){var _attr13=this.attr('padding'),_attr14=(0,_slicedToArray4.default)(_attr13,4),top=_attr14[0],right=_attr14[1],bottom=_attr14[2],left=_attr14[3],_contentSize=(0,_slicedToArray4.default)(this.contentSize,2),width=_contentSize[0],height=_contentSize[1];return[left+width+right,top+height+bottom];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"offsetSize",value:function value(){var _attr15=this.attr('border'),borderWidth=_attr15.width,_clientSize=(0,_slicedToArray4.default)(this.clientSize,2),width=_clientSize[0],height=_clientSize[1];return[width+2*borderWidth,height+2*borderWidth];}},{kind:"get",key:"layoutSize",value:function value(){var size=this.offsetSize;var _attr16=this.attr('margin'),_attr17=(0,_slicedToArray4.default)(_attr16,4),top=_attr17[0],right=_attr17[1],bottom=_attr17[2],left=_attr17[3];return[left+size[0]+right,top+size[1]+bottom];}},{kind:"get",key:"innerSize",value:function value(){return this.contentSize;}},{kind:"get",key:"outerSize",value:function value(){return this.offsetSize;}},{kind:"method",key:"getParentXY",value:function value(){var lx=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var ly=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var layer=this.layer;if(!layer)return[0,0];var parents=[];var target=this.parent;while(target&&target!==layer){parents.push(target);target=target.parent;}parents.reverse();var parentX=lx,parentY=ly;parents.forEach(function(node){var scrollLeft=node.attr('scrollLeft'),scrollTop=node.attr('scrollTop'),borderWidth=node.attr('border').width,padding=node.attr('padding');var _node$pointToOffset=node.pointToOffset(parentX,parentY);var _node$pointToOffset2=(0,_slicedToArray4.default)(_node$pointToOffset,2);parentX=_node$pointToOffset2[0];parentY=_node$pointToOffset2[1];parentX=parentX-node.originalRect[0]-borderWidth-padding[3]+scrollLeft;parentY=parentY-node.originalRect[1]-borderWidth-padding[0]+scrollTop;});return[parentX,parentY];}},{kind:"method",key:"getLayerXY",value:function value(){var dx=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var dy=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var layer=this.layer;if(!layer)return[0,0];var target=this;var x=dx,y=dy;while(target&&target!==layer){var _target$offsetToPoint=target.offsetToPoint(x,y);var _target$offsetToPoint2=(0,_slicedToArray4.default)(_target$offsetToPoint,2);x=_target$offsetToPoint2[0];y=_target$offsetToPoint2[1];var parent=target.parent;if(parent!==layer){var borderWidth=parent.attr('border').width;var padding=parent.attr('padding'),scrollLeft=parent.attr('scrollLeft')||0,scrollTop=parent.attr('scrollTop')||0;// const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
// const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop
x=x+parent.originalRect[0]+borderWidth+padding[3]-scrollLeft;y=y+parent.originalRect[1]+borderWidth+padding[0]-scrollTop;}target=parent;}return[x,y];}},{kind:"get",key:"boundingRect",value:function value(){var transform=this.transform;var _originalRect=(0,_slicedToArray4.default)(this.originalRect,4),ox=_originalRect[0],oy=_originalRect[1],width=_originalRect[2],height=_originalRect[3];if(this.hasLayout){var margin=this.attr('margin');width+=margin[1];height+=margin[2];}var vertexs=[[ox,oy],[width+ox,oy],[ox,height+oy],[width+ox,height+oy]];var transformed=vertexs.map(function(v){return transform.transformPoint(v[0],v[1]);});var vx=transformed.map(function(v){return v[0];}),vy=transformed.map(function(v){return v[1];});var minX=Math.min.apply(Math,(0,_toConsumableArray4.default)(vx)),minY=Math.min.apply(Math,(0,_toConsumableArray4.default)(vy)),maxX=Math.max.apply(Math,(0,_toConsumableArray4.default)(vx)),maxY=Math.max.apply(Math,(0,_toConsumableArray4.default)(vy));return[minX,minY].concat([maxX-minX,maxY-minY]);}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_2__["flow"]],key:"originalRect",value:function value(){var _offsetSize2=(0,_slicedToArray4.default)(this.offsetSize,2),width=_offsetSize2[0],height=_offsetSize2[1],_attr18=this.attr('anchor'),_attr19=(0,_slicedToArray4.default)(_attr18,2),anchorX=_attr19[0],anchorY=_attr19[1];var rect=[-anchorX*width,-anchorY*height,width,height];if(this.hasLayout){var margin=this.attr('margin');rect[0]+=margin[3];rect[1]+=margin[0];}return rect;}},{kind:"get",key:"originalRenderRect",value:function value(){var bound=this.originalRect,pos=this.xy;return[pos[0]+bound[0],pos[1]+bound[1],bound[2],bound[3]];}},{kind:"get",key:"renderBox",value:function value(){var bound=this.boundingRect,pos=this.xy;return[Math.floor(pos[0]+bound[0]),Math.floor(pos[1]+bound[1]),Math.ceil(pos[0]+bound[0]+bound[2]),Math.ceil(pos[1]+bound[1]+bound[3])];}},{kind:"get",key:"renderRect",value:function value(){var _renderBox=(0,_slicedToArray4.default)(this.renderBox,4),x0=_renderBox[0],y0=_renderBox[1],x1=_renderBox[2],y1=_renderBox[3];return[x0,y0,x1-x0,y1-y0];}},{kind:"get",key:"vertices",value:function value(){var vertices=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"])(this.originalRect),transform=this.transform,_xy=(0,_slicedToArray4.default)(this.xy,2),x0=_xy[0],y0=_xy[1];return vertices.map(function(v){var _transform$transformP=transform.transformPoint(v[0],v[1]),_transform$transformP2=(0,_slicedToArray4.default)(_transform$transformP,2),x=_transform$transformP2[0],y=_transform$transformP2[1];return[x0+x,y0+y];});}},{kind:"set",key:"cache",value:function value(context){if(context==null){this[_cachePriority]=0;if(this.parent&&this.parent.cache){this.parent.cache=null;}}if(this.cacheContext&&context!==this.cacheContext){_utils__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"].put(this.cacheContext);}this.cacheContext=context;}},{kind:"get",key:"cache",value:function value(){if(this[_cachePriority]>=CACHE_PRIORITY_THRESHOLDS){return this.cacheContext;}if(this.cacheContext){this.cache=null;}return false;}},{kind:"method",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_2__["deprecate"])('Instead use sprite.cache = null')],key:"clearCache",value:function value(){this.cache=null;}},{kind:"method",key:"appendTo",value:function value(parent){parent.appendChild(this);}},{kind:"method",key:"forceUpdate",value:function value(){var clearCache=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(clearCache){this.cache=null;}_get(_getPrototypeOf(BaseSprite.prototype),"forceUpdate",this).call(this);}},{kind:"method",key:"pointToOffset",value:function value(x,y){var _xy2=(0,_slicedToArray4.default)(this.xy,2),x0=_xy2[0],y0=_xy2[1];var dx=x-x0,dy=y-y0;var transform=this.transform;return transform.inverse().transformPoint(dx,dy);}},{kind:"method",key:"offsetToPoint",value:function value(dx,dy){var transform=this.transform;var _xy3=(0,_slicedToArray4.default)(this.xy,2),x0=_xy3[0],y0=_xy3[1];var _transform$transformP3=transform.transformPoint(dx,dy),_transform$transformP4=(0,_slicedToArray4.default)(_transform$transformP3,2),x=_transform$transformP4[0],y=_transform$transformP4[1];return[x+x0,y+y0];}},{kind:"method",key:"getOffsetXY",value:function value(evt){var parentX=void 0,parentY=void 0;if(evt.parentX!=null){// group
parentX=evt.parentX;parentY=evt.parentY;}else{parentX=evt.layerX;parentY=evt.layerY;}if(parentX!=null&&parentY!=null){return this.pointToOffset(parentX,parentY);}}},{kind:"method",key:"dispatchEvent",value:function value(type,evt){var collisionState=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var swallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(collisionState){var offsetXY=this.getOffsetXY(evt);if(offsetXY){evt.offsetX=offsetXY[0];evt.offsetY=offsetXY[1];}}return _get(_getPrototypeOf(BaseSprite.prototype),"dispatchEvent",this).call(this,type,evt,collisionState,swallow);}},{kind:"method",key:"pointCollision",value:function value(evt){/* istanbul ignore if */if(!this.isVisible()){return false;}var offsetXY=this.getOffsetXY(evt);if(!offsetXY)return true;var _offsetXY=(0,_slicedToArray4.default)(offsetXY,2),nx=_offsetXY[0],ny=_offsetXY[1];evt.offsetX=nx;evt.offsetY=ny;var _originalRect2=(0,_slicedToArray4.default)(this.originalRect,4),ox=_originalRect2[0],oy=_originalRect2[1],ow=_originalRect2[2],oh=_originalRect2[3];if(nx>=ox&&nx-ox<ow&&ny>=oy&&ny-oy<oh){if(this.context&&this.context.isPointInPath){var borderWidth=this.attr('border').width,borderRadius=this.attr('borderRadius');if(borderWidth||borderRadius){var _outerSize=(0,_slicedToArray4.default)(this.outerSize,2),width=_outerSize[0],height=_outerSize[1];var x=0,y=0,w=width,h=height,r=borderRadius;Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(this.context,[x,y,w,h],r);if(this.layer&&this.layer.offset){nx+=this.layer.offset[0];ny+=this.layer.offset[1];}return this.context.isPointInPath(nx-ox,ny-oy);}}return true;}}},{kind:"method",key:"OBBCollision",value:function value(sprite){// vertices: [p1, p2, p3, p4]
var _vertices=(0,_slicedToArray4.default)(this.vertices,3),p11=_vertices[0],p12=_vertices[1],p13=_vertices[2],_sprite$vertices=(0,_slicedToArray4.default)(sprite.vertices,3),p21=_sprite$vertices[0],p22=_sprite$vertices[1],p23=_sprite$vertices[2];var a1=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p12,p11).unit(),a2=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p13,p12).unit(),a3=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p22,p21).unit(),a4=new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](p23,p22).unit();// The projection of the axis of a vertex in a certain direction
function verticesProjection(vertices,axis){var _vertices$map=vertices.map(function(v){return axis.dot(new sprite_math__WEBPACK_IMPORTED_MODULE_0__["Vector"](v));}),_vertices$map2=(0,_slicedToArray4.default)(_vertices$map,4),p1=_vertices$map2[0],p2=_vertices$map2[1],p3=_vertices$map2[2],p4=_vertices$map2[3];return[Math.min(p1,p2,p3,p4),Math.max(p1,p2,p3,p4)];}function projectionIntersect(p1,p2){var m1=(p1[0]+p1[1])/2,l1=Math.abs(p1[1]-p1[0]),m2=(p2[0]+p2[1])/2,l2=Math.abs(p2[1]-p2[0]);return Math.abs(m2-m1)<=(l1+l2)/2;}return projectionIntersect(verticesProjection(this.vertices,a1),verticesProjection(sprite.vertices,a1))&&projectionIntersect(verticesProjection(this.vertices,a2),verticesProjection(sprite.vertices,a2))&&projectionIntersect(verticesProjection(this.vertices,a3),verticesProjection(sprite.vertices,a3))&&projectionIntersect(verticesProjection(this.vertices,a4),verticesProjection(sprite.vertices,a4));}},{kind:"method",key:"relayout",value:function value(){}},{kind:"method",key:"draw",value:function value(t){var drawingContext=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.context;// eslint-disable-line complexity
_get(_getPrototypeOf(BaseSprite.prototype),"draw",this).call(this,t,drawingContext);if(!this.isVisible()){return;}var bound=this.originalRect;var cachableContext=!this.isVirtual&&this.cache;var filter=this.attr('filter'),shadow=this.attr('shadow'),enableCache=this.attr('enableCache')||shadow||filter;var ratio=this.layer?this.layer.displayRatio||1.0:1.0;if(enableCache&&(shadow||filter||cachableContext!==false)&&!cachableContext){cachableContext=_utils__WEBPACK_IMPORTED_MODULE_2__["cacheContextPool"].get(drawingContext);if(cachableContext){// +2 to solve 1px problem
cachableContext.canvas.width=Math.ceil(bound[2]*ratio)+2;cachableContext.canvas.height=Math.ceil(bound[3]*ratio)+2;}}var evtArgs={context:drawingContext,cacheContext:cachableContext,target:this,renderTime:t,fromCache:!!this.cache};drawingContext.save();drawingContext.translate.apply(drawingContext,(0,_toConsumableArray4.default)(this.xy));drawingContext.transform.apply(drawingContext,(0,_toConsumableArray4.default)(this.transform.m));// fix for wxapp
var alpha=drawingContext.globalAlpha!=null?drawingContext.globalAlpha:1;drawingContext.globalAlpha=alpha*this.attr('opacity');if(!cachableContext){drawingContext.translate(bound[0],bound[1]);}else{cachableContext.save();// solve 1px problem
cachableContext.translate(bound[0]-Math.floor(bound[0])+1,bound[1]-Math.floor(bound[1])+1);if(ratio!==1.0){cachableContext.scale(ratio,ratio);}}this.dispatchEvent('beforedraw',evtArgs,true,true);if(cachableContext){// set cache before render for group
if(!this.cache){this.cache=cachableContext;this.render(t,cachableContext);}}else{this.render(t,drawingContext);}if((shadow||filter)&&!cachableContext){console.warn('No cachable context. Shadows and filters have been ignored.');}if(cachableContext&&cachableContext.canvas.width>0&&cachableContext.canvas.height>0){if(filter){drawingContext.filter=_filters__WEBPACK_IMPORTED_MODULE_5__["default"].compile(filter);}if(shadow){var blur=shadow.blur,color=shadow.color,offset=shadow.offset;blur=blur||1;color=color||'rgba(0,0,0,1)';drawingContext.shadowBlur=blur;drawingContext.shadowColor=color;if(offset){drawingContext.shadowOffsetX=offset[0];drawingContext.shadowOffsetY=offset[1];}}drawingContext.drawImage(cachableContext.canvas,Math.floor(bound[0])-1,Math.floor(bound[1])-1,bound[2]+2,bound[3]+2);}this.dispatchEvent('afterdraw',evtArgs,true,true);if(cachableContext){cachableContext.restore();}drawingContext.restore();this[_cachePriority]++;return drawingContext;}},{kind:"get",key:"needRender",value:function value(){if(this.isVirtual)return false;var _offsetSize3=(0,_slicedToArray4.default)(this.offsetSize,2),offsetWidth=_offsetSize3[0],offsetHeight=_offsetSize3[1];if(offsetWidth<=0||offsetHeight<=0)return false;var border=this.attr('border');if(border.width<=0&&this.attr('borderRadius')<=0&&!this.attr('bgcolor')&&!this.attr('gradients').bgcolor&&!this.attr('bgimage')){return false;// don't need to render
}return true;}},{kind:"method",key:"show",value:function value(){this.attr('display',this.__originalDisplay||'');return this;}},{kind:"method",key:"hide",value:function value(){var display=this.attr('display');if(display!=='none'){this.__originalDisplay=display;this.attr('display','none');}return this;}},{kind:"method",key:"render",value:function value(t,drawingContext){var border=this.attr('border'),borderRadius=this.attr('borderRadius'),padding=this.attr('padding'),_offsetSize4=(0,_slicedToArray4.default)(this.offsetSize,2),offsetWidth=_offsetSize4[0],offsetHeight=_offsetSize4[1],_clientSize2=(0,_slicedToArray4.default)(this.clientSize,2),clientWidth=_clientSize2[0],clientHeight=_clientSize2[1];if(!this.needRender){drawingContext.translate(padding[3],padding[0]);return false;}var borderWidth=border.width;var borderStyle=border.style;// draw border
if(borderWidth){drawingContext.lineWidth=borderWidth;var x=borderWidth/2,y=borderWidth/2,w=offsetWidth-borderWidth,h=offsetHeight-borderWidth,r=borderRadius;Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(drawingContext,[x,y,w,h],r);if(borderStyle&&borderStyle!=='solid'){var dashOffset=this.attr('dashOffset');drawingContext.lineDashOffset=dashOffset;if(borderStyle==='dashed'){borderStyle=[borderWidth*3,borderWidth*3];}drawingContext.setLineDash(borderStyle);}drawingContext.strokeStyle=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext,this,'border');drawingContext.stroke();}// draw bgcolor
var bgcolor=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["findColor"])(drawingContext,this,'bgcolor');var bgimage=this.attr('bgimage');if(this.cache==null||borderWidth||borderRadius||bgcolor||bgimage&&bgimage.display!=='none'){var _x29=borderWidth,_y=borderWidth,_w=clientWidth,_h=clientHeight,_r=borderRadius;if(Array.isArray(_r)){_r=_r.map(function(r){return r-borderWidth/2;});}Object(_utils__WEBPACK_IMPORTED_MODULE_2__["drawRadiusBox"])(drawingContext,[_x29,_y,_w,_h],_r);if(bgcolor){drawingContext.fillStyle=bgcolor;drawingContext.fill();}// clip is expensive, we should only perform clip when it has to.
if(bgimage&&bgimage.display!=='none'||borderRadius&&(this.nodeType!=='sprite'||this.textures&&this.textures.length)){drawingContext.clip();}if(bgimage&&bgimage.image&&bgimage.display!=='none'){drawBgImage(drawingContext,bgimage,borderWidth,offsetWidth,offsetHeight,clientWidth,clientHeight);}}drawingContext.translate(borderWidth+padding[3],borderWidth+padding[0]);return true;}}]};},_basenode__WEBPACK_IMPORTED_MODULE_4__["default"]);function drawDot9Image(drawingContext,image,clip9,borderWidth,offsetWidth,offsetHeight,clientWidth,clientHeight){var w=image.width,h=image.height;var _ref20=clip9||[16,16,16,16],_ref21=(0,_slicedToArray4.default)(_ref20,4),top=_ref21[0],right=_ref21[1],bottom=_ref21[2],left=_ref21[3];var leftTop=[0,0,left,top],rightTop=[w-right,0,right,top],rightBottom=[w-right,h-bottom,right,bottom],leftBottom=[0,h-bottom,left,bottom];var boxRight=offsetWidth-right-borderWidth,boxBottom=offsetHeight-borderWidth-bottom;// draw .9 cross
var midWidth=w-left-right,midHeight=h-top-bottom;if(midWidth>0){var midBoxWidth=clientWidth-left-right+2;var leftOffset=borderWidth+left-1;while(midBoxWidth>0){var ww=Math.min(midBoxWidth,midWidth)+1;var topPiece=[left-1,0,ww,top],bottomPiece=[left-1,h-bottom,ww,bottom];drawingContext.drawImage.apply(drawingContext,[image].concat(topPiece,[leftOffset,borderWidth,ww,top]));drawingContext.drawImage.apply(drawingContext,[image].concat(bottomPiece,[leftOffset,boxBottom,ww,bottom]));midBoxWidth-=midWidth;if(midBoxWidth>0){leftOffset+=midWidth;}}}if(midHeight>0){var midBoxHeight=clientHeight-top-bottom+2;var topOffset=borderWidth+top-1;while(midBoxHeight>0){var hh=Math.min(midBoxHeight,midHeight)+1;var leftPiece=[0,top-1,left,hh],rightPiece=[w-right,top-1,right,hh];drawingContext.drawImage.apply(drawingContext,[image].concat(leftPiece,[borderWidth,topOffset,left,hh]));drawingContext.drawImage.apply(drawingContext,[image].concat(rightPiece,[boxRight,topOffset,right,hh]));midBoxHeight-=midHeight;if(midBoxHeight>0){topOffset+=midHeight;}}}if(midHeight&&midWidth>0){var _midBoxWidth=clientWidth-left-right+2;var _leftOffset=borderWidth+left-1;while(_midBoxWidth>0){var _midBoxHeight=clientHeight-top-bottom+2;var _topOffset=borderWidth+top-1;while(_midBoxHeight>0){var _ww=Math.min(_midBoxWidth,midWidth)+1,_hh=Math.min(_midBoxHeight,midHeight)+1;var midPiece=[left-1,top-1,_ww,_hh];drawingContext.drawImage.apply(drawingContext,[image].concat(midPiece,[_leftOffset,_topOffset,_ww,_hh]));_midBoxHeight-=midWidth;if(_midBoxHeight>0){_topOffset+=midHeight;}}_midBoxWidth-=midWidth;if(_midBoxWidth>0){_leftOffset+=midWidth;}}}// draw four corners
drawingContext.drawImage.apply(drawingContext,[image].concat(leftTop,[borderWidth,borderWidth,left,top]));drawingContext.drawImage.apply(drawingContext,[image].concat(rightTop,[boxRight,borderWidth,right,top]));drawingContext.drawImage.apply(drawingContext,[image].concat(rightBottom,[boxRight,boxBottom,left,bottom]));drawingContext.drawImage.apply(drawingContext,[image].concat(leftBottom,[borderWidth,boxBottom,left,bottom]));}function drawBgImage(drawingContext,bgimage,borderWidth,offsetWidth,offsetHeight,clientWidth,clientHeight){var image=bgimage.image,display=bgimage.display,clip9=bgimage.clip9;if(display==='.9'){drawDot9Image(drawingContext,image,clip9,borderWidth,offsetWidth,offsetHeight,clientWidth,clientHeight);}else{var offset=bgimage.offset||[0,0],w=image.width,h=image.height;if(display==='center'){offset=[(clientWidth-w)*0.5,(clientHeight-h)*0.5];}else if(display==='stretch'){w=clientWidth-offset[0];h=clientHeight-offset[1];}drawingContext.drawImage(image,borderWidth+offset[0],borderWidth+offset[1],w,h);if(w>0&&(display==='repeat'||display==='repeatX')){var cw=clientWidth-borderWidth-offset[0]-w;while(cw>borderWidth){drawingContext.drawImage(image,clientWidth-cw,borderWidth+offset[1],w,h);if(h>0&&display==='repeat'){var ch=clientHeight-borderWidth-offset[1]-h;while(ch>borderWidth){drawingContext.drawImage(image,clientWidth-cw,clientHeight-ch,w,h);ch-=h;}}cw-=w;}}if(h>0&&(display==='repeat'||display==='repeatY')){var _ch=clientHeight-borderWidth-offset[1]-h;while(_ch>borderWidth){drawingContext.drawImage(image,borderWidth+offset[0],clientHeight-_ch,w,h);_ch-=h;}}}}/***/},/* 32 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return SpriteAttr;});/* harmony import */var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);/* harmony import */var sprite_math__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11);/* harmony import */var _attr__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(33);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20);function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}var cache=true,reflow=true,relayout=true;function parseBorderValue(val){if(val==null){return null;}if(typeof val==='number'||typeof val==='string'){val={width:parseFloat(val)};}else if(Array.isArray(val)){val={width:parseFloat(val[0]),color:Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])(val[1]||'#000')};}else{val.width=parseFloat(val.width);val.color=Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])(val.color||'#000');}val=(0,_assign2.default)({width:1,color:Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"])('#000'),style:'solid'},val);return val;}var SpriteAttr=_decorate(null,function(_initialize,_NodeAttr){var SpriteAttr=function(_NodeAttr2){(0,_inherits3.default)(SpriteAttr,_NodeAttr2);function SpriteAttr(subject){(0,_classCallCheck4.default)(this,SpriteAttr);var _this17=(0,_possibleConstructorReturn3.default)(this,(SpriteAttr.__proto__||(0,_getPrototypeOf3.default)(SpriteAttr)).call(this,subject));_initialize(_this17);Object.defineProperty(_this17,'__reflowTag',{writable:true,value:false});return _this17;}return SpriteAttr;}(_NodeAttr);return{F:SpriteAttr,d:[{kind:"method",key:"clearFlow",value:function value(){this.__reflowTag=true;return this;}},{kind:"method",key:"set",value:function value(key,_value8){var isQuiet=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;_get(_getPrototypeOf(SpriteAttr.prototype),"set",this).call(this,key,_value8,isQuiet);// auto reflow
if(key==='margin'){this.__reflowTag=true;}}},{kind:"method",key:"merge",value:function value(attrs){var _this18=this;if(typeof attrs==='string'){attrs=JSON.parse(attrs);}(0,_entries2.default)(attrs).forEach(function(_ref22){var _ref23=(0,_slicedToArray4.default)(_ref22,2),key=_ref23[0],value=_ref23[1];if(key!=='offsetPath'&&key!=='offsetDistance'&&key!=='offsetRotate'&&key!=='offsetAngle'&&key!=='offsetPoint'){// this[key] = value;
_this18.subject.attr(key,value);}else if(key==='offsetPath'){var offsetPath=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](value);_this18.set('offsetPath',offsetPath.d);_this18.saveObj('offsetPath',offsetPath);}else{_this18.set(key,value);}});return this;}},{kind:"method",key:"serialize",value:function value(){var attrs=this.getAttributes();delete attrs.id;var offsetAngle=this.get('offsetAngle');if(offsetAngle!=null)attrs.offsetAngle=offsetAngle;var offsetPoint=this.get('offsetPoint');if(offsetPoint!=null)attrs.offsetPoint=offsetPoint;return(0,_stringify2.default)(attrs);}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"enableCache",value:function value(){return false;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"],_utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"]),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,relayout:relayout,reflow:reflow})],key:"anchor",value:function value(){return[0,0];}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"display",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],key:"layoutX",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],key:"layoutY",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],key:"x",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],key:"y",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"]),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['x','y'])],key:"pos",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"bgcolor",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"opacity",value:function value(){return 1;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],key:"width",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],key:"height",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('width')],key:"layoutWidth",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow}),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["relative"])('height')],key:"layoutHeight",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"]),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['width','height'])],key:"size",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseInt),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"borderWidth",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"borderColor",value:function value(){return'rgba(0,0,0,0)';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"borderStyle",value:function value(){return'solid';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseBorderValue),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])({width:'borderWidth',color:'borderColor',style:'borderStyle'})],key:"border",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"paddingTop",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"paddingRight",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"paddingBottom",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"paddingLeft",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"],_utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"]),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['paddingTop','paddingRight','paddingBottom','paddingLeft'])],key:"padding",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"],_utils__WEBPACK_IMPORTED_MODULE_3__["eightValuesShortCut"]),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"borderRadius",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow})],key:"boxSizing",value:function value(){return'content-box';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"dashOffset",value:function value(){return 0;}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringTransform"]),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:'matrix(1,0,0,1,0,0)'})],key:"transform",value:function value(val){var _this19=this;/*
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0],
          matrix: [1,0,0,1,0,0],
         */(0,_assign2.default)(this.__attr,{rotate:0,scale:[1,1],translate:[0,0],skew:[0,0]});if(Array.isArray(val)){this.transformMatrix=val;this.set('transform','matrix('+val+')');}else{this.transformMatrix=[1,0,0,1,0,0];var transformStr=[];(0,_entries2.default)(val).forEach(function(_ref24){var _ref25=(0,_slicedToArray4.default)(_ref24,2),key=_ref25[0],value=_ref25[1];if(key==='matrix'&&Array.isArray(value)){_this19.transformMatrix=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](value).m;}else{_this19[key]=value;}transformStr.push(key+'('+value+')');});this.set('transform',transformStr.join(' '));}}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"]),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"transformOrigin",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"transformMatrix",value:function value(){return[1,0,0,1,0,0];}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:0})],key:"rotate",value:function value(val){var delta=this.rotate-val;this.set('rotate',val);var transform=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix).rotate(-delta);this.transformMatrix=transform.m;}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringFloat"],_utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"]),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:[1,1]})],key:"scale",value:function value(val){val=Object(_utils__WEBPACK_IMPORTED_MODULE_3__["oneOrTwoValues"])(val).map(function(v){if(Math.abs(v)>0.001){return v;}return 1/v>0?0.001:-0.001;});var oldVal=this.scale||[1,1];var delta=[val[0]/oldVal[0],val[1]/oldVal[1]];this.set('scale',val);var offsetAngle=this.get('offsetAngle');if(offsetAngle){this.rotate-=offsetAngle;}var transform=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);transform.scale.apply(transform,delta);this.transformMatrix=transform.m;if(offsetAngle){this.rotate+=offsetAngle;}}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:[0,0]})],key:"translate",value:function value(val){var oldVal=this.translate||[0,0];var delta=[val[0]-oldVal[0],val[1]-oldVal[1]];this.set('translate',val);var transform=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);transform.translate.apply(transform,delta);this.transformMatrix=transform.m;}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:[0,0]})],key:"skew",value:function value(val){var _ref26,_transform$multiply;var oldVal=this.skew||[0,0];var invm=(_ref26=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"]()).skew.apply(_ref26,(0,_toConsumableArray4.default)(oldVal)).inverse();this.set('skew',val);var transform=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](this.transformMatrix);(_transform$multiply=transform.multiply(invm)).skew.apply(_transform$multiply,(0,_toConsumableArray4.default)(val));this.transformMatrix=transform.m;}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseInt),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:0})],key:"zIndex",value:function value(val){this.set('zIndex',val);var subject=this.subject;if(subject.parent){subject.parent.sortedChildNodes=Object(_utils__WEBPACK_IMPORTED_MODULE_3__["sortOrderedSprites"])(subject.parent.childNodes);}}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"linearGradients",value:function value(val)/* istanbul ignore next  */{this.gradients=val;}},{kind:"get",key:"linearGradients",value:function value(){return this.gradients;}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"gradients",value:function value(){return{};}},{kind:"method",key:"resetOffset",value:function value(){var offsetPath=this.offsetPath;var dis=this.offsetDistance;if(offsetPath){var pathObj=this.loadObj('offsetPath');if(pathObj){offsetPath=pathObj;}else{offsetPath=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](offsetPath);this.saveObj('offsetPath',offsetPath);}}if(offsetPath!=null){var len=dis*offsetPath.getTotalLength();var _offsetPath$getPointA=offsetPath.getPointAtLength(len),_offsetPath$getPointA2=(0,_slicedToArray4.default)(_offsetPath$getPointA,2),x=_offsetPath$getPointA2[0],y=_offsetPath$getPointA2[1];var angle=this.offsetRotate;if(angle==='auto'||angle==='reverse'){if(angle==='reverse'&&len===0){len=1;}var _offsetPath$getPointA3=offsetPath.getPointAtLength(angle==='auto'?len+1:len-1),_offsetPath$getPointA4=(0,_slicedToArray4.default)(_offsetPath$getPointA3,2),x1=_offsetPath$getPointA4[0],y1=_offsetPath$getPointA4[1];if(x1===x&&y1===y){// last point
angle=this.get('offsetAngle');}else{angle=180*Math.atan2(y1-y,x1-x)/Math.PI;}if(this.offsetRotate==='reverse'){angle=-angle;}}var offsetAngle=this.get('offsetAngle');if(offsetAngle){this.rotate-=offsetAngle;}this.set('offsetAngle',angle);this.rotate+=angle;var offsetPoint=this.get('offsetPoint');if(offsetPoint){this.pos=[this.x-offsetPoint[0],this.y-offsetPoint[1]];}this.set('offsetPoint',[x,y]);this.pos=[this.x+x,this.y+y];}}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"offsetPath",value:function value(val){var offsetPath=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](val);this.set('offsetPath',offsetPath.d);this.saveObj('offsetPath',offsetPath);this.resetOffset();}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:0})],key:"offsetDistance",value:function value(val){this.set('offsetDistance',val);this.resetOffset();}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,value:'auto'})],key:"offsetRotate",value:function value(val){if(typeof val==='string'&&val!=='auto'&&val!=='reverse'){val=parseFloat(val);}this.set('offsetRotate',val);this.resetOffset();}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"filter",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache})],key:"shadow",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({cache:cache,relayout:relayout})],key:"position",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow,relayout:relayout,cache:cache})],key:"marginTop",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow,relayout:relayout,cache:cache})],key:"marginRight",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow,relayout:relayout,cache:cache})],key:"marginBottom",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({reflow:reflow,relayout:relayout,cache:cache})],key:"marginLeft",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_3__["parseStringInt"],_utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"]),_utils__WEBPACK_IMPORTED_MODULE_3__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_3__["composit"])(['marginTop','marginRight','marginBottom','marginLeft'])],key:"margin",value:void 0},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_3__["attr"])({value:''})],key:"bgimage",value:function value(val){if(val&&val.clip9)val.clip9=Object(_utils__WEBPACK_IMPORTED_MODULE_3__["fourValuesShortCut"])(val.clip9);if(val&&!val.image&&this.subject.loadBgImage){val=this.subject.loadBgImage(val);}this.set('bgimage',val);}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_3__["attr"]],key:"clipOverflow",value:function value(){return true;}}]};},_attr__WEBPACK_IMPORTED_MODULE_2__["default"]);/***/},/* 33 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Attr;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _attr=(0,_symbol2.default)('attr'),_style=(0,_symbol2.default)('style'),_temp=(0,_symbol2.default)('store'),_subject=(0,_symbol2.default)('subject'),_default=(0,_symbol2.default)('default');var Attr=_decorate(null,function(_initialize){var Attr=function Attr(subject){(0,_classCallCheck4.default)(this,Attr);_initialize(this);this[_subject]=subject;this[_default]={};this[_attr]={};this[_style]={};this.__cached={};if(!subject.updateStyles)subject.updateStyles=function(){};this[_temp]=new _map2.default();// save non-serialized values
Object.defineProperty(this,'__attributesSet',{value:new _set5.default()});Object.defineProperty(this,'__styleTag',{writable:true,value:false});Object.defineProperty(this,'__updateTag',{writable:true,value:false});};return{F:Attr,d:[{kind:"field",static:true,key:"relatedAttributes",value:function value(){return _utils__WEBPACK_IMPORTED_MODULE_0__["relatedAttributes"];}},{kind:"field",static:true,key:"attributeNames",value:function value(){return _utils__WEBPACK_IMPORTED_MODULE_0__["attributeNames"];}},{kind:"method",static:true,key:"addAttributes",value:function value(attrs){var descriptors={};(0,_entries2.default)(attrs).forEach(function(_ref27){var _ref28=(0,_slicedToArray4.default)(_ref27,2),key=_ref28[0],v=_ref28[1];if(typeof v==='function'){var _setter=v;v={set:function set(val){_setter(this,val);}};}var _v=v,wrappers=_v.decorators,value=_v.value,get=_v.get,set=_v.set;wrappers=wrappers||[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]];if(set==null){set=function set(val){this.set(key,val);};}if(get==null){get=function get(){return this.get(key);};}var $decorator=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["decorators"]).apply(undefined,(0,_toConsumableArray4.default)(wrappers));descriptors[key]=$decorator(key,value,{set:set,get:get});});(0,_defineProperties2.default)(this.prototype,descriptors);}},{kind:"get",key:"__attr",value:function value(){return this[_attr];}},{kind:"method",key:"setDefault",value:function value(attrs){(0,_assign2.default)(this[_default],attrs);}},{kind:"method",key:"getDefaultValue",value:function value(key,defaultValue){if(key in this[_default])return this[_default][key];return defaultValue;}},{kind:"method",key:"saveObj",value:function value(key,val){this[_temp].set(key,val);this.__updateTag=true;}},{kind:"method",key:"loadObj",value:function value(key){return this[_temp].get(key);}},{kind:"method",key:"quietSet",value:function value(key,val){this.set(key,val,true);}},{kind:"method",key:"clearStyle",value:function value(){this[_style]={};}},{kind:"method",key:"clearLayout",value:function value(){this.__clearLayout=true;return this;}},{kind:"get",key:"style",value:function value(){return this[_style];}},{kind:"method",key:"set",value:function value(key,val){var isQuiet=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;this.__quietTag=isQuiet;var oldVal=void 0;if(isQuiet&&key.length>5&&key.indexOf('data-')===0){var dataKey=key.slice(5);oldVal=this.subject.data(dataKey);this.subject.data(dataKey,val);}else if(this.__styleTag){oldVal=this[_style][key];if(val!=null){this[_style][key]=val;}else{delete this[_style][key];}}else{oldVal=this[_attr][key];}if(val&&(typeof val==='undefined'?'undefined':(0,_typeof3.default)(val))==='object'){if(oldVal!==val&&(0,_stringify2.default)(val)===(0,_stringify2.default)(oldVal)){return false;}}else if(oldVal===val){return false;}if(!this.__styleTag){this[_attr][key]=val;}this.__updateTag=true;return true;}},{kind:"method",key:"get",value:function value(key){if(key.length>5&&key.indexOf('data-')===0){return this.subject.data(key.slice(5));}if(this.__getStyleTag||this[_style][key]!=null&&!this.__attributesSet.has(key)){return this[_style][key];}return this[_attr][key];}},{kind:"method",key:"getAttributes",value:function value(){var _this20=this;var includeDefault=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var ret={};if(includeDefault){[].concat((0,_toConsumableArray4.default)(_utils__WEBPACK_IMPORTED_MODULE_0__["attributeNames"])).forEach(function(key){if(key in _this20){ret[key]=_this20[key];}});}[].concat((0,_toConsumableArray4.default)(this.__attributesSet)).forEach(function(key){if(key.indexOf('__internal')!==0){ret[key]=_this20[key];}});(0,_entries2.default)(this).forEach(function(_ref29){var _ref30=(0,_slicedToArray4.default)(_ref29,2),key=_ref30[0],value=_ref30[1];if(key.indexOf('__')!==0){ret[key]=value;}});return ret;}},{kind:"get",key:"attrs",value:function value(){return this.getAttributes(true);}},{kind:"method",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["deprecate"])('You can remove this call.')],key:"clearCache",value:function value(){return this;}},{kind:"method",key:"merge",value:function value(attrs){var _this21=this;if(typeof attrs==='string'){attrs=JSON.parse(attrs);}(0,_entries2.default)(attrs).forEach(function(_ref31){var _ref32=(0,_slicedToArray4.default)(_ref31,2),key=_ref32[0],value=_ref32[1];_this21.subject.attr(key,value);});return this;}},{kind:"method",key:"serialize",value:function value(){var attrs=this.getAttributes();delete attrs.id;return(0,_stringify2.default)(attrs);}},{kind:"get",key:"subject",value:function value(){return this[_subject];}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({quiet:true})],key:"id",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({quiet:true})],key:"name",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(String),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({quiet:true})],key:"class",value:void 0}]};});/***/},/* 34 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return BaseNode;});/* harmony import */var _attr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(33);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);function _defineProperty(obj,key,value){if(key in obj){(0,_defineProperty6.default)(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}// import stylesheet from './stylesheet';
function createAttribute(attr,key){(0,_defineProperty6.default)(attr,key,{enumerable:false,configurable:true,set:function set(value){if(!this.__styleTag&&value!=null){this.__attributesSet.add(key);}if(!this.__styleTag&&value==null){if(this.__attributesSet.has(key)){this.__attributesSet.delete(key);}}this.quietSet(key,value);var subject=this.subject;// fixed color inherit
// if(key === 'color') {
//   subject.attr('fillColor', value);
// }
// fixed font inherit
if(key==='fontSize'||key==='fontFamily'||key==='fontStyle'||key==='fontVariant'||key==='fontWeight'){var font=this.get('font')||'normal normal normal 16px Arial';var parsed=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font);parsed.fontSize=parsed.size+parsed.unit;if(key==='fontSize'&&(typeof value==='number'||/[\d.]$/.test(value))){value+='px';}parsed[key]=value;var style=parsed.style,variant=parsed.variant,weight=parsed.weight,family=parsed.family,fontSize=parsed.fontSize;subject.attr('font',style+' '+variant+' '+weight+' '+fontSize+' '+family);}if(key==='font'||key==='lineHeight'||key==='lineBreak'||key==='wordBreak'||key==='letterSpacing'||key==='textIndent'){var children=subject.querySelectorAll('*');children.forEach(function(node){if(node.retypesetting)node.retypesetting();});}if(_utils__WEBPACK_IMPORTED_MODULE_1__["inheritAttributes"].has(key)){subject.forceUpdate();}},get:function get(){var ret=this.get(key);return ret!=null?ret:this.getDefaultValue(key);}});}var _eventHandlers=(0,_symbol2.default)('eventHandlers'),_collisionState=(0,_symbol2.default)('collisionState'),_data=(0,_symbol2.default)('data'),_mouseCapture=(0,_symbol2.default)('mouseCapture');var _attr=(0,_symbol2.default)('attr');var BaseNode=function(){function BaseNode(attrs){(0,_classCallCheck4.default)(this,BaseNode);this[_eventHandlers]={};this[_data]={};this[_attr]=new this.constructor.Attr(this);if(attrs){this.attr(attrs);}}(0,_createClass4.default)(BaseNode,[{key:'serialize',value:function serialize(){var nodeType=this.nodeType,attrs=this[_attr].serialize(),dataset=(0,_stringify2.default)(this.dataset),id=this.id;return{nodeType:nodeType,attrs:attrs,dataset:dataset,id:id};}},{key:'clearLayout',value:function clearLayout(){if(this.hasLayout){this.parent.clearLayout();}}},{key:'merge',value:function merge(attrs){this[_attr].merge(attrs);}},{key:'cloneNode',value:function cloneNode(){var node=new this.constructor();node.merge(this[_attr].serialize());node.data(this.dataset);var bgimage=this.attr('bgimage');if(bgimage&&bgimage.image){node.attr('bgimage',null);node.attr('bgimage',(0,_assign2.default)({},bgimage));}return node;}},{key:'attr',value:function attr(props,val){var _this22=this;var setVal=function setVal(key,value){if(!(key in _this22[_attr])){createAttribute(_this22[_attr],key);}_this22[_attr][key]=value;};if((typeof props==='undefined'?'undefined':(0,_typeof3.default)(props))==='object'){(0,_entries2.default)(props).forEach(function(_ref33){var _ref34=(0,_slicedToArray4.default)(_ref33,2),prop=_ref34[0],value=_ref34[1];_this22.attr(prop,value);});return this;}if(typeof props==='string'){if(val!==undefined){if(props==='attrs'){if(Array.isArray(val)){val=_assign2.default.apply(Object,[{}].concat((0,_toConsumableArray4.default)(val)));}(0,_entries2.default)(val).forEach(function(_ref35){var _ref36=(0,_slicedToArray4.default)(_ref35,2),prop=_ref36[0],value=_ref36[1];_this22.attr(prop,value);});return this;}if(props==='style'){if(Array.isArray(val)){val=_assign2.default.apply(Object,[{}].concat((0,_toConsumableArray4.default)(val)));}(0,_entries2.default)(val).forEach(function(_ref37){var _ref38=(0,_slicedToArray4.default)(_ref37,2),prop=_ref38[0],value=_ref38[1];_this22.style[prop]=value;});return this;}if(typeof val==='function'){val=val(this.attr(props));}if(val&&typeof val.then==='function'){return val.then(function(res){setVal(props,res);});}setVal(props,val);return this;}if(!(props in this[_attr])){createAttribute(this[_attr],props);}return this[_attr][props];}return this[_attr].attrs;}},{key:'forceUpdate',value:function forceUpdate(clearCache){var parent=this.parent;if(parent){this.parent.update(this);}}},{key:'restyle',value:function restyle(){// stylesheet.computeStyle(this);
}},{key:'draw',value:function draw(){var styleNeedUpdate=this.__styleNeedUpdate;if(styleNeedUpdate){this.restyle();if(this.querySelectorAll){var children=this.querySelectorAll('*');children.forEach(function(child){return child.restyle();});}if(styleNeedUpdate==='siblings'){if(this.parent){var _children=this.parent.children;var index=_children.indexOf(this);var len=_children.length;for(var i=index+1;i<len;i++){var node=_children[i];node.restyle();if(node.querySelectorAll){var nodes=node.querySelectorAll('*');nodes.forEach(function(child){return child.restyle();});}}}}}}},{key:'data',value:function data(props,val){var _this23=this;var setVal=function setVal(key,value){_this23[_data][key]=value;if(_this23.attr){var attrKey='data-'+key;// this.attr(attrKey, value);
if(_attr__WEBPACK_IMPORTED_MODULE_0__["default"].relatedAttributes.has(attrKey)){_this23.updateStyles();}}if(value==null){delete _this23[_data][key];}};if((typeof props==='undefined'?'undefined':(0,_typeof3.default)(props))==='object'){(0,_entries2.default)(props).forEach(function(_ref39){var _ref40=(0,_slicedToArray4.default)(_ref39,2),prop=_ref40[0],value=_ref40[1];_this23.data(prop,value);});return this;}if(typeof props==='string'){if(val!==undefined){if(typeof val==='function'){val=val(this[_data][props]);}if(val&&typeof val.then==='function'){return val.then(function(res){setVal(props,res);});}setVal(props,val);return this;}return this[_data][props];}return this[_data];}},{key:'updateStyles',value:function updateStyles(){var nextSibling=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;// append to parent & reset name or class or id auto updateStyles
this.__styleNeedUpdate=nextSibling?'siblings':'children';this.forceUpdate(true);}},{key:'getEventHandlers',value:function getEventHandlers(type){return type!=null?this[_eventHandlers][type]||[]:this[_eventHandlers];}},{key:'on',value:function on(type,handler){var _this24=this;if(Array.isArray(type)){type.forEach(function(t){return _this24.on(t,handler);});}else{this[_eventHandlers][type]=this[_eventHandlers][type]||[];this[_eventHandlers][type].push(handler);}return this;}},{key:'once',value:function once(type,handler){var _this25=this;if(Array.isArray(type)){type.forEach(function(t){return _this25.once(t,handler);});}else{this.on(type,function f(){this.off(type,f);for(var _len8=arguments.length,args=Array(_len8),_key8=0;_key8<_len8;_key8++){args[_key8]=arguments[_key8];}return handler.apply(this,args);});}return this;}},{key:'off',value:function off(type,handler){var _this26=this;if(Array.isArray(type)){type.forEach(function(t){return _this26.off(t,handler);});}else if(handler&&this[_eventHandlers][type]){var idx=this[_eventHandlers][type].indexOf(handler);if(idx>=0){this[_eventHandlers][type].splice(idx,1);}}else{delete this[_eventHandlers][type];}return this;}},{key:'remove',value:function remove(){var exit=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!this.parent)return null;return this.parent.removeChild(this,exit);}},{key:'pointCollision',value:function pointCollision(evt){throw Error('you mast override this method');}},{key:'setMouseCapture',value:function setMouseCapture(){this[_mouseCapture]=true;}},{key:'releaseMouseCapture',value:function releaseMouseCapture(){this[_mouseCapture]=false;}},{key:'isCaptured',value:function isCaptured(evt){return(evt.type==='mousemove'||evt.type==='mousedown'||evt.type==='mouseup')&&this[_mouseCapture];}},{key:'dispatchEvent',value:function dispatchEvent(type,evt){var _this27=this;var collisionState=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var swallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;// eslint-disable-line complexity
var handlers=this.getEventHandlers(type);evt.returnValue=true;if(swallow&&handlers.length===0){return;}if(!evt.stopDispatch){evt.stopDispatch=function(){evt.terminated=true;};}if(!evt.stopPropagation){evt.stopPropagation=function(){evt.cancelBubble=true;};}if(!evt.preventDefault){evt.preventDefault=function(){evt.returnValue=false;};}if(evt.type!==type){if(evt.type){evt.originalType=evt.type;}evt.type=type;}var isCollision=collisionState||this.pointCollision(evt);var captured=this.isCaptured(evt);if(this[_collisionState]&&type==='mouseleave'){// dispatched from group
evt.target=this;this[_collisionState]=false;isCollision=true;this.attr('__internal_state_hover_',null);}if(!evt.terminated&&(isCollision||captured)){if(!evt.target)evt.target=this;var changedTouches=evt.originalEvent&&evt.originalEvent.changedTouches;if(changedTouches){if(type==='touchstart'){var touch=changedTouches[0],layer=this.layer;if(touch&&touch.identifier!=null){layer.touchedTargets[touch.identifier]=layer.touchedTargets[touch.identifier]||[];layer.touchedTargets[touch.identifier].push(this);}}if(/^touch/.test(type)){var touches=(0,_from2.default)(evt.originalEvent.touches),_layer=this.layer;evt.targetTouches=[];touches.forEach(function(touch){var identifier=touch.identifier;if(_layer.touchedTargets[identifier]&&_layer.touchedTargets[identifier].indexOf(_this27)>=0){evt.targetTouches.push(touch);}});evt.touches=touches;evt.changedTouches=(0,_from2.default)(changedTouches);}}if(type==='mousedown'||type==='touchstart'){this.attr('__internal_state_active_','active');}else if(type==='mouseup'||type==='touchend'){this.attr('__internal_state_active_',null);}[].concat((0,_toConsumableArray4.default)(handlers)).forEach(function(handler){return handler.call(_this27,evt);});if(!this[_collisionState]&&isCollision&&type==='mousemove'){var _evt=(0,_assign2.default)({},evt);_evt.type='mouseenter';delete _evt.target;_evt.terminated=false;this.dispatchEvent('mouseenter',_evt,true,true);this.attr('__internal_state_hover_','hover');this[_collisionState]=true;}}if(this[_collisionState]&&!isCollision&&type==='mousemove'){var _evt2=(0,_assign2.default)({},evt);_evt2.type='mouseleave';delete _evt2.target;_evt2.terminated=false;this.dispatchEvent('mouseleave',_evt2);this.attr('__internal_state_hover_',null);// this[_collisionState] = false;
}return isCollision;}// called when layer appendChild
},{key:'connect',value:function connect(parent){var zOrder=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;if(this.parent){// throw new Error('This node belongs to another parent node! Remove it first...')
this.remove();}Object.defineProperty(this,'zOrder',{value:zOrder,writable:false,configurable:true});Object.defineProperty(this,'parent',{get:function get(){return parent;},configurable:true});this.dispatchEvent('append',{parent:parent,zOrder:zOrder},true,true);parent.dispatchEvent('appendChild',{child:this,zOrder:zOrder},true,true);if(this.layer){this.updateStyles(true);}return this;}// override to recycling resources
},{key:'disconnect',value:function disconnect(parent){if(!this.parent||parent!==this.parent){throw new Error('Invalid node to disconnect');}if(this.layer){var nextSibling=this.nextElementSilbing;if(nextSibling)nextSibling.updateStyles(true);}var zOrder=this.zOrder;delete this.zOrder;delete this.parent;delete this.isDirty;this.dispatchEvent('remove',{parent:parent,zOrder:zOrder},true,true);parent.dispatchEvent('removeChild',{child:this,zOrder:zOrder},true,true);return this;}},{key:'enter',value:function enter(){// override to do atction after connection, can return a promise
return this;}},{key:'exit',value:function exit(){// override to do atction before disconnection, can return a promise
return this;}},{key:'__attr',get:function get(){return this[_attr];}},{key:'layer',get:function get(){return this.parent&&this.parent.layer;}},{key:'dataset',get:function get(){return this[_data];}},{key:'id',set:function set(val){this.attr('id',val);},get:function get(){return this.attr('id');}},{key:'name',set:function set(val){this.attr('name',val);},get:function get(){return this.attr('name');}},{key:'className',set:function set(val){this.attr('class',val);},get:function get(){return this.attr('class');}}]);return BaseNode;}();_defineProperty(BaseNode,"Attr",_attr__WEBPACK_IMPORTED_MODULE_0__["default"]);_defineProperty(BaseNode,"inheritAttributes",_utils__WEBPACK_IMPORTED_MODULE_1__["inheritAttributes"]);/***/},/* 35 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);// http://www.runoob.com/cssref/css3-pr-filter.html
/* harmony default export */__webpack_exports__["default"]={blur:function blur(px){return'blur('+Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(px)+')';},brightness:function brightness(percent){return'brightness('+percent+')';},contrast:function contrast(percent){return'contrast('+percent+')';},dropShadow:function dropShadow(_ref41){var _ref42=(0,_slicedToArray4.default)(_ref41,4),offsetX=_ref42[0],offsetY=_ref42[1],shadowRadius=_ref42[2],color=_ref42[3];return'drop-shadow('+Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetX)+' '+Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(offsetY)+' '+Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(shadowRadius)+' '+color+')';},grayscale:function grayscale(percent){return'grayscale('+percent+')';},hueRotate:function hueRotate(value){return'hue-rotate('+Object(_utils__WEBPACK_IMPORTED_MODULE_0__["appendUnit"])(value,'deg')+')';},invert:function invert(percent){return'invert('+percent+')';},opacity:function opacity(percent){return'opacity('+percent+')';},saturate:function saturate(percent){return'saturate('+percent+')';},sepia:function sepia(percent){return'sepia('+percent+')';},url:function url(path){return'url('+path+')';},compile:function compile(){var _this28=this;var filter=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return(0,_entries2.default)(filter).reduce(function(accumulator,curVal){return accumulator.concat(_this28[curVal[0]](curVal[1]));},[]).join(' ');}};/***/},/* 36 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Sprite;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(31);/* harmony import */var _filters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35);function set(target,property,value,receiver){if(typeof Reflect!=="undefined"&&_set3.default){set=_set3.default;}else{set=function set(target,property,value,receiver){var base=_superPropBase(target,property);var desc;if(base){desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.set){desc.set.call(receiver,value);return true;}else if(!desc.writable){return false;}}desc=(0,_getOwnPropertyDescriptor2.default)(receiver,property);if(desc){if(!desc.writable){return false;}desc.value=value;(0,_defineProperty6.default)(receiver,property,desc);}else{_defineProperty(receiver,property,value);}return true;};}return set(target,property,value,receiver);}function _set(target,property,value,receiver,isStrict){var s=set(target,property,value,receiver||target);if(!s&&isStrict){throw new Error('failed to set property');}return value;}function _defineProperty(obj,key,value){if(key in obj){(0,_defineProperty6.default)(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _texturesCache=(0,_symbol2.default)('_texturesCache');var _images=(0,_symbol2.default)('_images');var TextureAttr=_decorate(null,function(_initialize,_BaseSprite$Attr){var TextureAttr=function(_BaseSprite$Attr2){(0,_inherits3.default)(TextureAttr,_BaseSprite$Attr2);function TextureAttr(){var _ref43;(0,_classCallCheck4.default)(this,TextureAttr);for(var _len9=arguments.length,args=Array(_len9),_key9=0;_key9<_len9;_key9++){args[_key9]=arguments[_key9];}var _this29=(0,_possibleConstructorReturn3.default)(this,(_ref43=TextureAttr.__proto__||(0,_getPrototypeOf3.default)(TextureAttr)).call.apply(_ref43,[this].concat(args)));_initialize(_this29);return _this29;}return TextureAttr;}(_BaseSprite$Attr);return{F:TextureAttr,d:[{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"enableCache",value:function value(){return true;}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({value:[]})],key:"textures",value:function value(textures){if(!Array.isArray(textures)){textures=[textures];}textures=textures.map(function(texture){if(!texture.image){texture={image:texture};}texture.__tag=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["generateID"])(texture.image);// prevent JSON.stringify ignorance
return texture;});this.loadTextures(textures);this.set('textures',textures);}},{kind:"method",key:"loadTextures",value:function value(textures){var subject=this.subject;// adaptive textures
var width=0,height=0;subject.images=textures.map(function(texture){var image=texture.image,rect=texture.rect,srcRect=texture.srcRect;var w=void 0,h=void 0;if(rect){w=rect[2]+rect[0];h=rect[3]+rect[1];}else if(srcRect){w=srcRect[2];h=srcRect[3];}else{w=image.width;h=image.height;}if(width<w){width=w;}if(height<h){height=h;}delete texture.image;return image;});var texturesSize=subject.texturesSize;if(!texturesSize||texturesSize[0]!==width||texturesSize[1]!==height){var attrSize=subject.attrSize;if(attrSize[0]===''||attrSize[1]===''){subject.reflow();subject.clearLayout();}}subject.texturesSize=[width,height];return textures;}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);var Sprite=_decorate(null,function(_initialize2,_BaseSprite){var Sprite=function(_BaseSprite2){(0,_inherits3.default)(Sprite,_BaseSprite2);/**
      new Sprite({
        attr: {
          ...
        },
        attributeChangedCallback: function(prop, oldValue, newValue){
         }
      })
     */function Sprite(attr){(0,_classCallCheck4.default)(this,Sprite);if(attr&&attr.constructor!==Object){attr={textures:[attr]};}var _this30=(0,_possibleConstructorReturn3.default)(this,(Sprite.__proto__||(0,_getPrototypeOf3.default)(Sprite)).call(this));_initialize2(_this30);_this30[_texturesCache]=new _map2.default();if(attr){_this30.attr(attr);}return _this30;}return Sprite;}(_BaseSprite);return{F:Sprite,d:[{kind:"field",static:true,key:"Attr",value:function value(){return TextureAttr;}},{kind:"method",key:"cloneNode",value:function value(){var _this31=this;var node=_get(_getPrototypeOf(Sprite.prototype),"cloneNode",this).call(this);if(this.images){node.textures=this.textures.map(function(texture,i){texture.image=_this31.images[i];return texture;});}return node;}},{kind:"set",key:"images",value:function value(images){this[_images]=images;}},{kind:"get",key:"images",value:function value(){return this[_images];}},{kind:"set",key:"textures",value:function value(textures){this.attr('textures',textures);}},{kind:"get",key:"textures",value:function value(){return this.attr('textures');}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],key:"contentSize",value:function value(){var _attrSize2=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize2[0],height=_attrSize2[1];var boxSize=this.texturesSize||[0,0];var w=width,h=height;if(width===''){w=boxSize[0]|0;if(height!==''&&boxSize[1]){w*=height/boxSize[1];}}if(height===''){h=boxSize[1]|0;if(width!==''&&boxSize[0]){h*=width/boxSize[0];}}return[w,h];}},{kind:"method",key:"pointCollision",value:function value(evt){var _this32=this;if(_get(_getPrototypeOf(Sprite.prototype),"pointCollision",this).call(this,evt)){var textures=this.textures;if(textures){var offsetX=evt.offsetX,offsetY=evt.offsetY;if(offsetX==null&&offsetY==null)return true;evt.targetTextures=[];var _attr20=this.attr('anchor'),_attr21=(0,_slicedToArray4.default)(_attr20,2),anchorX=_attr21[0],anchorY=_attr21[1],_contentSize2=(0,_slicedToArray4.default)(this.contentSize,2),width=_contentSize2[0],height=_contentSize2[1];offsetX+=width*anchorX;offsetY+=height*anchorY;textures.forEach(function(texture){var _ref44=texture.rect||[0,0].concat((0,_toConsumableArray4.default)(_this32.innerSize)),_ref45=(0,_slicedToArray4.default)(_ref44,4),x=_ref45[0],y=_ref45[1],w=_ref45[2],h=_ref45[3];if(offsetX>=x&&offsetX-x<w&&offsetY>=y&&offsetY-y<h){// touched textures
evt.targetTextures.push(texture);}});}return true;}return false;}},{kind:"get",key:"cache",value:function value(){var bg=this.attr('bgcolor')||this.attr('gradients').bgcolor;if(!bg&&this.textures.length<=1){return false;}return _get(_getPrototypeOf(Sprite.prototype),"cache",this);}},{kind:"set",key:"cache",value:function value(context){_set(_getPrototypeOf(Sprite.prototype),"cache",context,this,true);}},{kind:"method",key:"render",value:function value(t,drawingContext){var _this33=this;_get(_getPrototypeOf(Sprite.prototype),"render",this).call(this,t,drawingContext);var textures=this.textures;var cliped=!this.attr('clipOverflow');if(this.images&&this.images.length){textures.forEach(function(texture,i){var img=_this33.images[i];var _contentSize3=(0,_slicedToArray4.default)(_this33.contentSize,2),w=_contentSize3[0],h=_contentSize3[1];var rect=texture.rect||[0,0,w,h];var srcRect=texture.srcRect;if(!cliped&&texture.rect&&(rect[2]>w||rect[3]>h)){cliped=true;drawingContext.beginPath();drawingContext.rect(0,0,w,h);drawingContext.clip();}drawingContext.save();if(texture.filter){Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setDeprecation"])('texture.filter','Instead use sprite.attr({filter}).');var imgRect=srcRect?[0,0,srcRect[2],srcRect[3]]:[0,0,img.width,img.height];var sx=rect[2]/imgRect[2],sy=rect[3]/imgRect[3];drawingContext.filter=_filters__WEBPACK_IMPORTED_MODULE_2__["default"].compile(texture.filter);if(srcRect){drawingContext.drawImage.apply(drawingContext,[img].concat((0,_toConsumableArray4.default)(srcRect),[sx*imgRect[0]+rect[0],sy*imgRect[1]+rect[1],sx*srcRect[2],sy*srcRect[3]]));}else{drawingContext.drawImage(img,sx*imgRect[0]+rect[0],sy*imgRect[1]+rect[1],sx*img.width,sy*img.height);}}else if(srcRect){drawingContext.drawImage.apply(drawingContext,[img].concat((0,_toConsumableArray4.default)(srcRect),(0,_toConsumableArray4.default)(rect)));}else{drawingContext.drawImage.apply(drawingContext,[img].concat((0,_toConsumableArray4.default)(rect)));}drawingContext.restore();});}}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);/***/},/* 37 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Label;});/* harmony import */var css_line_break__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38);/* harmony import */var css_line_break__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(31);/* harmony import */var _utils_render__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30);function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _boxSize=(0,_symbol2.default)('boxSize'),_outputText=(0,_symbol2.default)('outputText');var measureText=function measureText(node,text,font){var lineHeight=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'';var ctx=node.context;if(!ctx){return[0,0];}ctx.save();ctx.font=font;var _ctx$measureText=ctx.measureText(text),width=_ctx$measureText.width;ctx.restore();var letterSpacing=node.attr('letterSpacing');if(letterSpacing){width+=letterSpacing*(text.length-1);}var _Object2=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font),size=_Object2.size;var height=lineHeight||size*1.2;return[width,height].map(Math.round);};function calculTextboxSize(node){if(!node.context)return'';var text=node.text,font=node.attr('font'),lineHeight=node.attr('lineHeight'),textIndent=node.attr('textIndent');var lines=[];var width=0,height=0;node[_outputText]=text;var lineBreak=node.attr('lineBreak'),textboxWidth=node.hasLayout?node.attr('layoutWidth'):node.attr('width');if(lineBreak!==''&&textboxWidth!==''){var wordBreak=node.attr('wordBreak');text.split(/\n/).forEach(function(line){var breaker=Object(css_line_break__WEBPACK_IMPORTED_MODULE_0__["LineBreaker"])(line,{lineBreak:lineBreak,wordBreak:wordBreak});var words=[];var bk=breaker.next();while(!bk.done){words.push(bk.value.slice());bk=breaker.next();}var l='';words.forEach(function(word){if(!l){l=word;}else{var ll=''+l+word;var _measureText=measureText(node,ll,font),_measureText2=(0,_slicedToArray4.default)(_measureText,1),w=_measureText2[0];if(w>(lines.length===0?textboxWidth-textIndent:textboxWidth)){lines.push(l);l=word;}else{l=ll;}}});lines.push(l);});// lines = node[_outputText].split(/\n/)
node[_outputText]=lines.join('\n');}else{lines=text.split(/\n/);}lines.forEach(function(line,idx){var _measureText3=measureText(node,line,font,lineHeight),_measureText4=(0,_slicedToArray4.default)(_measureText3,2),w=_measureText4[0],h=_measureText4[1];if(idx===0)w+=textIndent;width=Math.max(width,w);height+=h;});var boxSize=node[_boxSize];if(!boxSize||boxSize[0]!==width||boxSize[1]!==height){var attrSize=node.attrSize;if(attrSize[0]===''||attrSize[1]===''){node.reflow();node.clearLayout();}}node[_boxSize]=[width,height];}function setFontPart(font,part){var _Object$assign2=(0,_assign2.default)(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font),part),style=_Object$assign2.style,variant=_Object$assign2.variant,weight=_Object$assign2.weight,size0=_Object$assign2.size0,unit=_Object$assign2.unit,family=_Object$assign2.family;return style+' '+variant+' '+weight+' '+size0+unit+' '+family;}var LabelSpriteAttr=_decorate(null,function(_initialize,_BaseSprite$Attr){var LabelSpriteAttr=function(_BaseSprite$Attr3){(0,_inherits3.default)(LabelSpriteAttr,_BaseSprite$Attr3);function LabelSpriteAttr(){var _ref46;(0,_classCallCheck4.default)(this,LabelSpriteAttr);for(var _len10=arguments.length,args=Array(_len10),_key10=0;_key10<_len10;_key10++){args[_key10]=arguments[_key10];}var _this34=(0,_possibleConstructorReturn3.default)(this,(_ref46=LabelSpriteAttr.__proto__||(0,_getPrototypeOf3.default)(LabelSpriteAttr)).call.apply(_ref46,[this].concat(args)));_initialize(_this34);return _this34;}return LabelSpriteAttr;}(_BaseSprite$Attr);return{F:LabelSpriteAttr,d:[{kind:"method",key:"retypesetting",value:function value(){this.subject.retypesetting();}},{kind:"method",key:"widthRetypeseeting",value:function value(){if(this.lineBreak!=='')this.subject.retypesetting();}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(String),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'})],key:"text",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('normal normal normal 16px Arial')],key:"font",value:function value(){return'inherit';}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"fontSize",value:function value(val){if(val==null)val='16px';var unit='px';if(typeof val==='string'){var unitReg=/^([\d.]+)(\w+)/;var matches=val.match(unitReg);if(!matches){return null;}val=parseFloat(matches[1]);unit=matches[2];}this.font=setFontPart(this.font,{size0:val,unit:unit});}},{kind:"get",key:"fontSize",value:function value(){var font=this.font;var _Object3=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font),size0=_Object3.size0,unit=_Object3.unit;return''+size0+unit;}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"fontFamily",value:function value(val){if(val==null)val='Arial';this.font=setFontPart(this.font,{family:val});}},{kind:"get",key:"fontFamily",value:function value(){return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).family;}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"fontStyle",value:function value(val){if(val==null)val='normal';this.font=setFontPart(this.font,{style:val});}},{kind:"get",key:"fontStyle",value:function value(){return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).style;}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"fontVariant",value:function value(val){if(val==null)val='normal';this.font=setFontPart(this.font,{variant:val});}},{kind:"get",key:"fontVariant",value:function value(){return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).variant;}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"fontWeight",value:function value(val){if(val==null)val='normal';this.font=setFontPart(this.font,{weight:val});}},{kind:"get",key:"fontWeight",value:function value(){return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(this.font).weight;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],key:"lineHeight",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('left')],key:"textAlign",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_1__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],key:"strokeColor",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_1__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],key:"color",value:function value(){return'inherit';}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_1__["composit"])('color')],key:"fillColor",value:void 0},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["attr"]],key:"flexible",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],key:"lineBreak",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])('')],key:"wordBreak",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(0)],key:"letterSpacing",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'retypesetting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["inherit"])(0)],key:"textIndent",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'widthRetypeseeting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('width')],key:"width",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({extra:'widthRetypeseeting'}),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["relative"])('width')],key:"layoutWidth",value:function value(){return'';}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_2__["default"].Attr);var Label=_decorate(null,function(_initialize2,_BaseSprite){var Label=function(_BaseSprite3){(0,_inherits3.default)(Label,_BaseSprite3);function Label(attr){(0,_classCallCheck4.default)(this,Label);if((typeof attr==='undefined'?'undefined':(0,_typeof3.default)(attr))!=='object'){attr={text:String(attr)};}var _this35=(0,_possibleConstructorReturn3.default)(this,(Label.__proto__||(0,_getPrototypeOf3.default)(Label)).call(this,attr));_initialize2(_this35);return _this35;}return Label;}(_BaseSprite);return{F:Label,d:[{kind:"field",static:true,key:"Attr",value:function value(){return LabelSpriteAttr;}},{kind:"set",key:"text",value:function value(val){this.attr('text',val);}},{kind:"get",key:"text",value:function value(){return this.attr('text');}},{kind:"get",key:"textboxSize",value:function value(){if(!this[_boxSize])calculTextboxSize(this);return this[_boxSize];}},{kind:"get",key:"flexibleFont",value:function value(){var font=this.attr('font');if(this.attr('width')===''&&this.attr('layoutWidth')==='')return font;var textboxSize=this.textboxSize,contentSize=this.contentSize;var _Object4=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font),style=_Object4.style,variant=_Object4.variant,weight=_Object4.weight,size=_Object4.size,family=_Object4.family;size*=contentSize[0]/textboxSize[0];return style+' '+variant+' '+weight+' '+Math.floor(size)+'px "'+family+'"';}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_1__["flow"]],key:"contentSize",value:function value(){var _attrSize3=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize3[0],height=_attrSize3[1];if(width===''||height===''){var textboxSize=this.textboxSize;if(!textboxSize)return[0,0];width=width||textboxSize[0];height=height||textboxSize[1];}if(this.attr('flexible')&&this.attr('height')===''&&this.attr('layoutHeight')===''){height=Math.ceil(height*width/this.textboxSize[0]);}return[width,height];}},{kind:"method",key:"retypesetting",value:function value(){// calculTextboxSize(this);
this[_boxSize]=false;this[_outputText]=null;this.reflow();this.forceUpdate(true);}},{kind:"method",key:"restyle",value:function value(){_get(_getPrototypeOf(Label.prototype),"restyle",this).call(this);this.retypesetting();}},{kind:"method",key:"render",value:function value(t,drawingContext){var _this36=this;_get(_getPrototypeOf(Label.prototype),"render",this).call(this,t,drawingContext);var textAlign=this.attr('textAlign'),flexible=this.attr('flexible'),font=flexible?this.flexibleFont:this.attr('font'),lineHeight=this.attr('lineHeight');var text=this.text;if(text){var _contentSize4=(0,_slicedToArray4.default)(this.contentSize,2),w=_contentSize4[0],h=_contentSize4[1];if(!this[_outputText])calculTextboxSize(this);text=this[_outputText]||this.text;if((this.textboxSize[0]>w||this.textboxSize[1]>h)&&this.attr('clipOverflow')){drawingContext.beginPath();drawingContext.rect(0,0,w,h);drawingContext.clip();}drawingContext.font=font;var lines=text.split(/\n/);drawingContext.textBaseline='top';var align=textAlign;drawingContext.textBaseline='middle';var strokeColor=Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["findColor"])(drawingContext,this,'strokeColor');if(strokeColor){drawingContext.strokeStyle=strokeColor;}var fillColor=Object(_utils_render__WEBPACK_IMPORTED_MODULE_3__["findColor"])(drawingContext,this,'fillColor');if(!strokeColor&&!fillColor){fillColor=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"])('black');}if(fillColor){drawingContext.fillStyle=fillColor;}var top=0;var width=this.contentSize[0];var letterSpacing=this.attr('letterSpacing'),textIndent=this.attr('textIndent');lines.forEach(function(line,idx){var _measureText5=measureText(_this36,line,font,lineHeight),_measureText6=(0,_slicedToArray4.default)(_measureText5,2),w=_measureText6[0],h=_measureText6[1];var left=0;if(align==='center'){left=(width-w)/2;}else if(align==='right'){left=width-w;}var indent=0;if(textIndent&&idx===0&&align!=='right'){indent=textIndent;}if(letterSpacing){var l=left;[].concat((0,_toConsumableArray4.default)(line)).forEach(function(letter,i){if(idx===0&&i===0){l+=indent;}if(fillColor){drawingContext.fillText(letter,l,top+h/2);}if(strokeColor){drawingContext.strokeText(letter,l,top+h/2);}l+=measureText(_this36,letter,font)[0]+letterSpacing;});}else{if(fillColor){drawingContext.fillText(line,left+indent,top+h/2);}if(strokeColor){drawingContext.strokeText(line,left+indent,top+h/2);}}top+=h;});}}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_2__["default"]);/***/},/* 38 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _Util=__webpack_require__(39);Object.defineProperty(exports,'toCodePoints',{enumerable:true,get:function get(){return _Util.toCodePoints;}});Object.defineProperty(exports,'fromCodePoint',{enumerable:true,get:function get(){return _Util.fromCodePoint;}});var _LineBreak=__webpack_require__(40);Object.defineProperty(exports,'LineBreaker',{enumerable:true,get:function get(){return _LineBreak.LineBreaker;}});/***/},/* 39 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var toCodePoints=exports.toCodePoints=function toCodePoints(str){var codePoints=[];var i=0;var length=str.length;while(i<length){var value=str.charCodeAt(i++);if(value>=0xd800&&value<=0xdbff&&i<length){var extra=str.charCodeAt(i++);if((extra&0xfc00)===0xdc00){codePoints.push(((value&0x3ff)<<10)+(extra&0x3ff)+0x10000);}else{codePoints.push(value);i--;}}else{codePoints.push(value);}}return codePoints;};var fromCodePoint=exports.fromCodePoint=function fromCodePoint(){if(_fromCodePoint2.default){return _fromCodePoint2.default.apply(String,arguments);}var length=arguments.length;if(!length){return'';}var codeUnits=[];var index=-1;var result='';while(++index<length){var codePoint=arguments.length<=index?undefined:arguments[index];if(codePoint<=0xffff){codeUnits.push(codePoint);}else{codePoint-=0x10000;codeUnits.push((codePoint>>10)+0xd800,codePoint%0x400+0xdc00);}if(index+1===length||codeUnits.length>0x4000){result+=String.fromCharCode.apply(String,codeUnits);codeUnits.length=0;}}return result;};var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';// Use a lookup table to find the index.
var lookup=typeof Uint8Array==='undefined'?[]:new Uint8Array(256);for(var i=0;i<chars.length;i++){lookup[chars.charCodeAt(i)]=i;}var decode=exports.decode=function decode(base64){var bufferLength=base64.length*0.75,len=base64.length,i=void 0,p=0,encoded1=void 0,encoded2=void 0,encoded3=void 0,encoded4=void 0;if(base64[base64.length-1]==='='){bufferLength--;if(base64[base64.length-2]==='='){bufferLength--;}}var buffer=typeof ArrayBuffer!=='undefined'&&typeof Uint8Array!=='undefined'&&typeof Uint8Array.prototype.slice!=='undefined'?new ArrayBuffer(bufferLength):new Array(bufferLength);var bytes=Array.isArray(buffer)?buffer:new Uint8Array(buffer);for(i=0;i<len;i+=4){encoded1=lookup[base64.charCodeAt(i)];encoded2=lookup[base64.charCodeAt(i+1)];encoded3=lookup[base64.charCodeAt(i+2)];encoded4=lookup[base64.charCodeAt(i+3)];bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63;}return buffer;};var polyUint16Array=exports.polyUint16Array=function polyUint16Array(buffer){var length=buffer.length;var bytes=[];for(var _i=0;_i<length;_i+=2){bytes.push(buffer[_i+1]<<8|buffer[_i]);}return bytes;};var polyUint32Array=exports.polyUint32Array=function polyUint32Array(buffer){var length=buffer.length;var bytes=[];for(var _i2=0;_i2<length;_i2+=4){bytes.push(buffer[_i2+3]<<24|buffer[_i2+2]<<16|buffer[_i2+1]<<8|buffer[_i2]);}return bytes;};/***/},/* 40 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.LineBreaker=exports.inlineBreakOpportunities=exports.lineBreakAtIndex=exports.codePointsToCharacterClasses=exports.UnicodeTrie=exports.BREAK_ALLOWED=exports.BREAK_NOT_ALLOWED=exports.BREAK_MANDATORY=exports.classes=exports.LETTER_NUMBER_MODIFIER=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;(0,_defineProperty6.default)(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=(0,_getIterator3.default)(arr),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((0,_isIterable3.default)(Object(arr))){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _Trie=__webpack_require__(41);var _linebreakTrie=__webpack_require__(42);var _linebreakTrie2=_interopRequireDefault(_linebreakTrie);var _Util=__webpack_require__(39);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return(0,_from2.default)(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var LETTER_NUMBER_MODIFIER=exports.LETTER_NUMBER_MODIFIER=50;// Non-tailorable Line Breaking Classes
var BK=1;//  Cause a line break (after)
var CR=2;//  Cause a line break (after), except between CR and LF
var LF=3;//  Cause a line break (after)
var CM=4;//  Prohibit a line break between the character and the preceding character
var NL=5;//  Cause a line break (after)
var SG=6;//  Do not occur in well-formed text
var WJ=7;//  Prohibit line breaks before and after
var ZW=8;//  Provide a break opportunity
var GL=9;//  Prohibit line breaks before and after
var SP=10;// Enable indirect line breaks
var ZWJ=11;// Prohibit line breaks within joiner sequences
// Break Opportunities
var B2=12;//  Provide a line break opportunity before and after the character
var BA=13;//  Generally provide a line break opportunity after the character
var BB=14;//  Generally provide a line break opportunity before the character
var HY=15;//  Provide a line break opportunity after the character, except in numeric context
var CB=16;//   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL=17;//  Prohibit line breaks before
var CP=18;//  Prohibit line breaks before
var EX=19;//  Prohibit line breaks before
var IN=20;//  Allow only indirect line breaks between pairs
var NS=21;//  Allow only indirect line breaks before
var OP=22;//  Prohibit line breaks after
var QU=23;//  Act like they are both opening and closing
// Numeric Context
var IS=24;//  Prevent breaks after any and before numeric
var NU=25;//  Form numeric expressions for line breaking purposes
var PO=26;//  Do not break following a numeric expression
var PR=27;//  Do not break in front of a numeric expression
var SY=28;//  Prevent a break before; and allow a break after
// Other Characters
var AI=29;//  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL=30;//  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ=31;//  Treat as NS or ID for strict or normal breaking.
var EB=32;//  Do not break from following Emoji Modifier
var EM=33;//  Do not break from preceding Emoji Base
var H2=34;//  Form Korean syllable blocks
var H3=35;//  Form Korean syllable blocks
var HL=36;//  Do not break around a following hyphen; otherwise act as Alphabetic
var ID=37;//  Break before or after; except in some numeric context
var JL=38;//  Form Korean syllable blocks
var JV=39;//  Form Korean syllable blocks
var JT=40;//  Form Korean syllable blocks
var RI=41;//  Keep pairs together. For pairs; break before and after other classes
var SA=42;//  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX=43;//  Have as yet unknown line breaking behavior or unassigned code positions
var classes=exports.classes={BK:BK,CR:CR,LF:LF,CM:CM,NL:NL,SG:SG,WJ:WJ,ZW:ZW,GL:GL,SP:SP,ZWJ:ZWJ,B2:B2,BA:BA,BB:BB,HY:HY,CB:CB,CL:CL,CP:CP,EX:EX,IN:IN,NS:NS,OP:OP,QU:QU,IS:IS,NU:NU,PO:PO,PR:PR,SY:SY,AI:AI,AL:AL,CJ:CJ,EB:EB,EM:EM,H2:H2,H3:H3,HL:HL,ID:ID,JL:JL,JV:JV,JT:JT,RI:RI,SA:SA,XX:XX};var BREAK_MANDATORY=exports.BREAK_MANDATORY='!';var BREAK_NOT_ALLOWED=exports.BREAK_NOT_ALLOWED='×';var BREAK_ALLOWED=exports.BREAK_ALLOWED='÷';var UnicodeTrie=exports.UnicodeTrie=(0,_Trie.createTrieFromBase64)(_linebreakTrie2.default);var ALPHABETICS=[AL,HL];var HARD_LINE_BREAKS=[BK,CR,LF,NL];var SPACE=[SP,ZW];var PREFIX_POSTFIX=[PR,PO];var LINE_BREAKS=HARD_LINE_BREAKS.concat(SPACE);var KOREAN_SYLLABLE_BLOCK=[JL,JV,JT,H2,H3];var HYPHEN=[HY,BA];var codePointsToCharacterClasses=exports.codePointsToCharacterClasses=function codePointsToCharacterClasses(codePoints){var lineBreak=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'strict';var types=[];var indicies=[];var categories=[];codePoints.forEach(function(codePoint,index){var classType=UnicodeTrie.get(codePoint);if(classType>LETTER_NUMBER_MODIFIER){categories.push(true);classType-=LETTER_NUMBER_MODIFIER;}else{categories.push(false);}if(['normal','auto','loose'].indexOf(lineBreak)!==-1){// U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
if([0x2010,0x2013,0x301c,0x30a0].indexOf(codePoint)!==-1){indicies.push(index);return types.push(CB);}}if(classType===CM||classType===ZWJ){// LB10 Treat any remaining combining mark or ZWJ as AL.
if(index===0){indicies.push(index);return types.push(AL);}// LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
// the base character in all of the following rules. Treat ZWJ as if it were CM.
var prev=types[index-1];if(LINE_BREAKS.indexOf(prev)===-1){indicies.push(indicies[index-1]);return types.push(prev);}indicies.push(index);return types.push(AL);}indicies.push(index);if(classType===CJ){return types.push(lineBreak==='strict'?NS:ID);}if(classType===SA){return types.push(AL);}if(classType===AI){return types.push(AL);}// For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
// and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
// to take into account the actual line breaking properties for these characters.
if(classType===XX){if(codePoint>=0x20000&&codePoint<=0x2fffd||codePoint>=0x30000&&codePoint<=0x3fffd){return types.push(ID);}else{return types.push(AL);}}types.push(classType);});return[indicies,types,categories];};var isAdjacentWithSpaceIgnored=function isAdjacentWithSpaceIgnored(a,b,currentIndex,classTypes){var current=classTypes[currentIndex];if(Array.isArray(a)?a.indexOf(current)!==-1:a===current){var i=currentIndex;while(i<=classTypes.length){i++;var next=classTypes[i];if(next===b){return true;}if(next!==SP){break;}}}if(current===SP){var _i=currentIndex;while(_i>0){_i--;var prev=classTypes[_i];if(Array.isArray(a)?a.indexOf(prev)!==-1:a===prev){var n=currentIndex;while(n<=classTypes.length){n++;var _next=classTypes[n];if(_next===b){return true;}if(_next!==SP){break;}}}if(prev!==SP){break;}}}return false;};var previousNonSpaceClassType=function previousNonSpaceClassType(currentIndex,classTypes){var i=currentIndex;while(i>=0){var type=classTypes[i];if(type===SP){i--;}else{return type;}}return 0;};var _lineBreakAtIndex=function _lineBreakAtIndex(codePoints,classTypes,indicies,index,forbiddenBreaks){if(indicies[index]===0){return BREAK_NOT_ALLOWED;}var currentIndex=index-1;if(Array.isArray(forbiddenBreaks)&&forbiddenBreaks[currentIndex]===true){return BREAK_NOT_ALLOWED;}var beforeIndex=currentIndex-1;var afterIndex=currentIndex+1;var current=classTypes[currentIndex];// LB4 Always break after hard line breaks.
// LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
var before=beforeIndex>=0?classTypes[beforeIndex]:0;var next=classTypes[afterIndex];if(current===CR&&next===LF){return BREAK_NOT_ALLOWED;}if(HARD_LINE_BREAKS.indexOf(current)!==-1){return BREAK_MANDATORY;}// LB6 Do not break before hard line breaks.
if(HARD_LINE_BREAKS.indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB7 Do not break before spaces or zero width space.
if(SPACE.indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
if(previousNonSpaceClassType(currentIndex,classTypes)===ZW){return BREAK_ALLOWED;}// LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
if(UnicodeTrie.get(codePoints[currentIndex])===ZWJ&&(next===ID||next===EB||next===EM)){return BREAK_NOT_ALLOWED;}// LB11 Do not break before or after Word joiner and related characters.
if(current===WJ||next===WJ){return BREAK_NOT_ALLOWED;}// LB12 Do not break after NBSP and related characters.
if(current===GL){return BREAK_NOT_ALLOWED;}// LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
if([SP,BA,HY].indexOf(current)===-1&&next===GL){return BREAK_NOT_ALLOWED;}// LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
if([CL,CP,EX,IS,SY].indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB14 Do not break after ‘[’, even after spaces.
if(previousNonSpaceClassType(currentIndex,classTypes)===OP){return BREAK_NOT_ALLOWED;}// LB15 Do not break within ‘”[’, even with intervening spaces.
if(isAdjacentWithSpaceIgnored(QU,OP,currentIndex,classTypes)){return BREAK_NOT_ALLOWED;}// LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
if(isAdjacentWithSpaceIgnored([CL,CP],NS,currentIndex,classTypes)){return BREAK_NOT_ALLOWED;}// LB17 Do not break within ‘——’, even with intervening spaces.
if(isAdjacentWithSpaceIgnored(B2,B2,currentIndex,classTypes)){return BREAK_NOT_ALLOWED;}// LB18 Break after spaces.
if(current===SP){return BREAK_ALLOWED;}// LB19 Do not break before or after quotation marks, such as ‘ ” ’.
if(current===QU||next===QU){return BREAK_NOT_ALLOWED;}// LB20 Break before and after unresolved CB.
if(next===CB||current===CB){return BREAK_ALLOWED;}// LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
if([BA,HY,NS].indexOf(next)!==-1||current===BB){return BREAK_NOT_ALLOWED;}// LB21a Don't break after Hebrew + Hyphen.
if(before===HL&&HYPHEN.indexOf(current)!==-1){return BREAK_NOT_ALLOWED;}// LB21b Don’t break between Solidus and Hebrew letters.
if(current===SY&&next===HL){return BREAK_NOT_ALLOWED;}// LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
if(next===IN&&ALPHABETICS.concat(IN,EX,NU,ID,EB,EM).indexOf(current)!==-1){return BREAK_NOT_ALLOWED;}// LB23 Do not break between digits and letters.
if(ALPHABETICS.indexOf(next)!==-1&&current===NU||ALPHABETICS.indexOf(current)!==-1&&next===NU){return BREAK_NOT_ALLOWED;}// LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
if(current===PR&&[ID,EB,EM].indexOf(next)!==-1||[ID,EB,EM].indexOf(current)!==-1&&next===PO){return BREAK_NOT_ALLOWED;}// LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
if(ALPHABETICS.indexOf(current)!==-1&&PREFIX_POSTFIX.indexOf(next)!==-1||PREFIX_POSTFIX.indexOf(current)!==-1&&ALPHABETICS.indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB25 Do not break between the following pairs of classes relevant to numbers:
if(// (PR | PO) × ( OP | HY )? NU
[PR,PO].indexOf(current)!==-1&&(next===NU||[OP,HY].indexOf(next)!==-1&&classTypes[afterIndex+1]===NU)||// ( OP | HY ) × NU
[OP,HY].indexOf(current)!==-1&&next===NU||// NU ×	(NU | SY | IS)
current===NU&&[NU,SY,IS].indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
if([NU,SY,IS,CL,CP].indexOf(next)!==-1){var prevIndex=currentIndex;while(prevIndex>=0){var type=classTypes[prevIndex];if(type===NU){return BREAK_NOT_ALLOWED;}else if([SY,IS].indexOf(type)!==-1){prevIndex--;}else{break;}}}// NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
if([PR,PO].indexOf(next)!==-1){var _prevIndex=[CL,CP].indexOf(current)!==-1?beforeIndex:currentIndex;while(_prevIndex>=0){var _type=classTypes[_prevIndex];if(_type===NU){return BREAK_NOT_ALLOWED;}else if([SY,IS].indexOf(_type)!==-1){_prevIndex--;}else{break;}}}// LB26 Do not break a Korean syllable.
if(JL===current&&[JL,JV,H2,H3].indexOf(next)!==-1||[JV,H2].indexOf(current)!==-1&&[JV,JT].indexOf(next)!==-1||[JT,H3].indexOf(current)!==-1&&next===JT){return BREAK_NOT_ALLOWED;}// LB27 Treat a Korean Syllable Block the same as ID.
if(KOREAN_SYLLABLE_BLOCK.indexOf(current)!==-1&&[IN,PO].indexOf(next)!==-1||KOREAN_SYLLABLE_BLOCK.indexOf(next)!==-1&&current===PR){return BREAK_NOT_ALLOWED;}// LB28 Do not break between alphabetics (“at”).
if(ALPHABETICS.indexOf(current)!==-1&&ALPHABETICS.indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
if(current===IS&&ALPHABETICS.indexOf(next)!==-1){return BREAK_NOT_ALLOWED;}// LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
if(ALPHABETICS.concat(NU).indexOf(current)!==-1&&next===OP||ALPHABETICS.concat(NU).indexOf(next)!==-1&&current===CP){return BREAK_NOT_ALLOWED;}// LB30a Break between two regional indicator symbols if and only if there are an even number of regional
// indicators preceding the position of the break.
if(current===RI&&next===RI){var i=indicies[currentIndex];var count=1;while(i>0){i--;if(classTypes[i]===RI){count++;}else{break;}}if(count%2!==0){return BREAK_NOT_ALLOWED;}}// LB30b Do not break between an emoji base and an emoji modifier.
if(current===EB&&next===EM){return BREAK_NOT_ALLOWED;}return BREAK_ALLOWED;};var lineBreakAtIndex=exports.lineBreakAtIndex=function lineBreakAtIndex(codePoints,index){// LB2 Never break at the start of text.
if(index===0){return BREAK_NOT_ALLOWED;}// LB3 Always break at the end of text.
if(index>=codePoints.length){return BREAK_MANDATORY;}var _codePointsToCharacte=codePointsToCharacterClasses(codePoints),_codePointsToCharacte2=_slicedToArray(_codePointsToCharacte,2),indicies=_codePointsToCharacte2[0],classTypes=_codePointsToCharacte2[1];return _lineBreakAtIndex(codePoints,classTypes,indicies,index);};var cssFormattedClasses=function cssFormattedClasses(codePoints,options){if(!options){options={lineBreak:'normal',wordBreak:'normal'};}var _codePointsToCharacte3=codePointsToCharacterClasses(codePoints,options.lineBreak),_codePointsToCharacte4=_slicedToArray(_codePointsToCharacte3,3),indicies=_codePointsToCharacte4[0],classTypes=_codePointsToCharacte4[1],isLetterNumber=_codePointsToCharacte4[2];if(options.wordBreak==='break-all'||options.wordBreak==='break-word'){classTypes=classTypes.map(function(type){return[NU,AL,SA].indexOf(type)!==-1?ID:type;});}var forbiddenBreakpoints=options.wordBreak==='keep-all'?isLetterNumber.map(function(isLetterNumber,i){return isLetterNumber&&codePoints[i]>=0x4e00&&codePoints[i]<=0x9fff;}):null;return[indicies,classTypes,forbiddenBreakpoints];};var inlineBreakOpportunities=exports.inlineBreakOpportunities=function inlineBreakOpportunities(str,options){var codePoints=(0,_Util.toCodePoints)(str);var output=BREAK_NOT_ALLOWED;var _cssFormattedClasses=cssFormattedClasses(codePoints,options),_cssFormattedClasses2=_slicedToArray(_cssFormattedClasses,3),indicies=_cssFormattedClasses2[0],classTypes=_cssFormattedClasses2[1],forbiddenBreakpoints=_cssFormattedClasses2[2];codePoints.forEach(function(codePoint,i){output+=(0,_Util.fromCodePoint)(codePoint)+(i>=codePoints.length-1?BREAK_MANDATORY:_lineBreakAtIndex(codePoints,classTypes,indicies,i+1,forbiddenBreakpoints));});return output;};var Break=function(){function Break(codePoints,lineBreak,start,end){_classCallCheck(this,Break);this._codePoints=codePoints;this.required=lineBreak===BREAK_MANDATORY;this.start=start;this.end=end;}_createClass(Break,[{key:'slice',value:function slice(){return _Util.fromCodePoint.apply(undefined,_toConsumableArray(this._codePoints.slice(this.start,this.end)));}}]);return Break;}();var LineBreaker=exports.LineBreaker=function LineBreaker(str,options){var codePoints=(0,_Util.toCodePoints)(str);var _cssFormattedClasses3=cssFormattedClasses(codePoints,options),_cssFormattedClasses4=_slicedToArray(_cssFormattedClasses3,3),indicies=_cssFormattedClasses4[0],classTypes=_cssFormattedClasses4[1],forbiddenBreakpoints=_cssFormattedClasses4[2];var length=codePoints.length;var lastEnd=0;var nextIndex=0;return{next:function next(){if(nextIndex>=length){return{done:true};}var lineBreak=BREAK_NOT_ALLOWED;while(nextIndex<length&&(lineBreak=_lineBreakAtIndex(codePoints,classTypes,indicies,++nextIndex,forbiddenBreakpoints))===BREAK_NOT_ALLOWED){}if(lineBreak!==BREAK_NOT_ALLOWED||nextIndex===length){var value=new Break(codePoints,lineBreak,lastEnd,nextIndex);lastEnd=nextIndex;return{value:value,done:false};}return{done:true};}};};/***/},/* 41 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Trie=exports.createTrieFromBase64=exports.UTRIE2_INDEX_2_MASK=exports.UTRIE2_INDEX_2_BLOCK_LENGTH=exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=exports.UTRIE2_INDEX_1_OFFSET=exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH=exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET=exports.UTRIE2_INDEX_2_BMP_LENGTH=exports.UTRIE2_LSCP_INDEX_2_LENGTH=exports.UTRIE2_DATA_MASK=exports.UTRIE2_DATA_BLOCK_LENGTH=exports.UTRIE2_LSCP_INDEX_2_OFFSET=exports.UTRIE2_SHIFT_1_2=exports.UTRIE2_INDEX_SHIFT=exports.UTRIE2_SHIFT_1=exports.UTRIE2_SHIFT_2=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;(0,_defineProperty6.default)(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Util=__webpack_require__(39);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}/** Shift size for getting the index-2 table offset. */var UTRIE2_SHIFT_2=exports.UTRIE2_SHIFT_2=5;/** Shift size for getting the index-1 table offset. */var UTRIE2_SHIFT_1=exports.UTRIE2_SHIFT_1=6+5;/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */var UTRIE2_INDEX_SHIFT=exports.UTRIE2_INDEX_SHIFT=2;/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */var UTRIE2_SHIFT_1_2=exports.UTRIE2_SHIFT_1_2=UTRIE2_SHIFT_1-UTRIE2_SHIFT_2;/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */var UTRIE2_LSCP_INDEX_2_OFFSET=exports.UTRIE2_LSCP_INDEX_2_OFFSET=0x10000>>UTRIE2_SHIFT_2;/** Number of entries in a data block. 32=0x20 */var UTRIE2_DATA_BLOCK_LENGTH=exports.UTRIE2_DATA_BLOCK_LENGTH=1<<UTRIE2_SHIFT_2;/** Mask for getting the lower bits for the in-data-block offset. */var UTRIE2_DATA_MASK=exports.UTRIE2_DATA_MASK=UTRIE2_DATA_BLOCK_LENGTH-1;var UTRIE2_LSCP_INDEX_2_LENGTH=exports.UTRIE2_LSCP_INDEX_2_LENGTH=0x400>>UTRIE2_SHIFT_2;/** Count the lengths of both BMP pieces. 2080=0x820 */var UTRIE2_INDEX_2_BMP_LENGTH=exports.UTRIE2_INDEX_2_BMP_LENGTH=UTRIE2_LSCP_INDEX_2_OFFSET+UTRIE2_LSCP_INDEX_2_LENGTH;/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */var UTRIE2_UTF8_2B_INDEX_2_OFFSET=exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET=UTRIE2_INDEX_2_BMP_LENGTH;var UTRIE2_UTF8_2B_INDEX_2_LENGTH=exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH=0x800>>6;/* U+0800 is the first code point after 2-byte UTF-8 *//**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */var UTRIE2_INDEX_1_OFFSET=exports.UTRIE2_INDEX_1_OFFSET=UTRIE2_UTF8_2B_INDEX_2_OFFSET+UTRIE2_UTF8_2B_INDEX_2_LENGTH;/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=0x10000>>UTRIE2_SHIFT_1;/** Number of entries in an index-2 block. 64=0x40 */var UTRIE2_INDEX_2_BLOCK_LENGTH=exports.UTRIE2_INDEX_2_BLOCK_LENGTH=1<<UTRIE2_SHIFT_1_2;/** Mask for getting the lower bits for the in-index-2-block offset. */var UTRIE2_INDEX_2_MASK=exports.UTRIE2_INDEX_2_MASK=UTRIE2_INDEX_2_BLOCK_LENGTH-1;var createTrieFromBase64=exports.createTrieFromBase64=function createTrieFromBase64(base64){var buffer=(0,_Util.decode)(base64);var view32=Array.isArray(buffer)?(0,_Util.polyUint32Array)(buffer):new Uint32Array(buffer);var view16=Array.isArray(buffer)?(0,_Util.polyUint16Array)(buffer):new Uint16Array(buffer);var headerLength=24;var index=view16.slice(headerLength/2,view32[4]/2);var data=view32[5]===2?view16.slice((headerLength+view32[4])/2):view32.slice(Math.ceil((headerLength+view32[4])/4));return new Trie(view32[0],view32[1],view32[2],view32[3],index,data);};var Trie=exports.Trie=function(){function Trie(initialValue,errorValue,highStart,highValueIndex,index,data){_classCallCheck(this,Trie);this.initialValue=initialValue;this.errorValue=errorValue;this.highStart=highStart;this.highValueIndex=highValueIndex;this.index=index;this.data=data;}/**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */_createClass(Trie,[{key:'get',value:function get(codePoint){var ix=void 0;if(codePoint>=0){if(codePoint<0x0d800||codePoint>0x0dbff&&codePoint<=0x0ffff){// Ordinary BMP code point, excluding leading surrogates.
// BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
// 16 bit data is stored in the index array itself.
ix=this.index[codePoint>>UTRIE2_SHIFT_2];ix=(ix<<UTRIE2_INDEX_SHIFT)+(codePoint&UTRIE2_DATA_MASK);return this.data[ix];}if(codePoint<=0xffff){// Lead Surrogate Code Point.  A Separate index section is stored for
// lead surrogate code units and code points.
//   The main index has the code unit data.
//   For this function, we need the code point data.
// Note: this expression could be refactored for slightly improved efficiency, but
//       surrogate code points will be so rare in practice that it's not worth it.
ix=this.index[UTRIE2_LSCP_INDEX_2_OFFSET+(codePoint-0xd800>>UTRIE2_SHIFT_2)];ix=(ix<<UTRIE2_INDEX_SHIFT)+(codePoint&UTRIE2_DATA_MASK);return this.data[ix];}if(codePoint<this.highStart){// Supplemental code point, use two-level lookup.
ix=UTRIE2_INDEX_1_OFFSET-UTRIE2_OMITTED_BMP_INDEX_1_LENGTH+(codePoint>>UTRIE2_SHIFT_1);ix=this.index[ix];ix+=codePoint>>UTRIE2_SHIFT_2&UTRIE2_INDEX_2_MASK;ix=this.index[ix];ix=(ix<<UTRIE2_INDEX_SHIFT)+(codePoint&UTRIE2_DATA_MASK);return this.data[ix];}if(codePoint<=0x10ffff){return this.data[this.highValueIndex];}}// Fall through.  The code point is outside of the legal range of 0..0x10ffff.
return this.errorValue;}}]);return Trie;}();/***/},/* 42 *//***/function(module,exports,__webpack_require__){"use strict";module.exports='KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';/***/},/* 43 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Layer;});/* harmony import */var sprite_animator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);/* harmony import */var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44);/* harmony import */var _basenode__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34);/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(31);/* harmony import */var _batch__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(46);/* harmony import */var _group__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(47);/* harmony import */var _helpers_group__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(48);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20);function _defineProperty(obj,key,value){if(key in obj){(0,_defineProperty6.default)(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}// import stylesheet from './stylesheet';
var _zOrder=(0,_symbol2.default)('zOrder'),_timeline=(0,_symbol2.default)('timeline'),_renderDeferer=(0,_symbol2.default)('renderDeferrer'),_drawTask=(0,_symbol2.default)('drawTask'),_autoRender=(0,_symbol2.default)('autoRender'),_adjustTimer=(0,_symbol2.default)('adjustTimer');var LayerAttr=_decorate(null,function(_initialize,_BaseNode$Attr){var LayerAttr=function(_BaseNode$Attr2){(0,_inherits3.default)(LayerAttr,_BaseNode$Attr2);function LayerAttr(subject){(0,_classCallCheck4.default)(this,LayerAttr);var _this37=(0,_possibleConstructorReturn3.default)(this,(LayerAttr.__proto__||(0,_getPrototypeOf3.default)(LayerAttr)).call(this,subject));_initialize(_this37);_this37.setDefault({bgcolor:''});return _this37;}return LayerAttr;}(_BaseNode$Attr);return{F:LayerAttr,d:[{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_7__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_7__["attr"]],key:"bgcolor",value:function value(val){this.set('bgcolor',val);var subject=this.subject;if(subject.canvas&&subject.canvas.style){if(val!=null){this.quietSet('canvasBgColor',subject.canvas.style.backgroundColor);subject.canvas.style.backgroundColor=val;}else{subject.canvas.style.backgroundColor=this.get('canvasBgColor');}}}}]};},_basenode__WEBPACK_IMPORTED_MODULE_2__["default"].Attr);var Layer=function(_basenode__WEBPACK_IM){(0,_inherits3.default)(Layer,_basenode__WEBPACK_IM);function Layer(){var _ref47=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},context=_ref47.context,_ref47$evaluateFPS=_ref47.evaluateFPS,evaluateFPS=_ref47$evaluateFPS===undefined?false:_ref47$evaluateFPS,_ref47$renderMode=_ref47.renderMode,renderMode=_ref47$renderMode===undefined?'repaintAll':_ref47$renderMode,_ref47$autoRender=_ref47.autoRender,autoRender=_ref47$autoRender===undefined?true:_ref47$autoRender,_ref47$useDocumentCSS=_ref47.useDocumentCSS,useDocumentCSS=_ref47$useDocumentCSS===undefined?false:_ref47$useDocumentCSS;(0,_classCallCheck4.default)(this,Layer);var _this38=(0,_possibleConstructorReturn3.default)(this,(Layer.__proto__||(0,_getPrototypeOf3.default)(Layer)).call(this));_this38[_autoRender]=autoRender;// renderMode: repaintAll | repaintDirty
if(renderMode==='repaintDirty'){Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setDeprecation"])('renderRepaintDirty');}if(evaluateFPS!==false){Object(_utils__WEBPACK_IMPORTED_MODULE_7__["setDeprecation"])('evaluateFPS');}_this38.outputContext=context;if(context.canvas)context.canvas.layer_=_this38;_this38.childNodes=[];_this38.sortedChildNodes=[];_this38[_zOrder]=0;_this38[_timeline]=new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"](_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["timeline"]);_this38[_renderDeferer]=null;_this38.touchedTargets={};// auto release
/* istanbul ignore if  */if(context.canvas&&context.canvas.addEventListener){context.canvas.addEventListener('DOMNodeRemovedFromDocument',function(){_this38._savePlaybackRate=_this38.timeline.playbackRate;_this38._saveChildren=[].concat((0,_toConsumableArray4.default)(_this38.childNodes));_this38.remove.apply(_this38,(0,_toConsumableArray4.default)(_this38.childNodes));_this38.timeline.playbackRate=0;});context.canvas.addEventListener('DOMNodeInsertedIntoDocument',function(){if(_this38._saveChildren){_this38.timeline.playbackRate=_this38._savePlaybackRate;_this38.append.apply(_this38,(0,_toConsumableArray4.default)(_this38._saveChildren));delete _this38._saveChildren;}});}if(useDocumentCSS){_this38.fromDocumentCSS();}return _this38;}(0,_createClass4.default)(Layer,[{key:'fromDocumentCSS',value:function fromDocumentCSS(){// stylesheet.fromDocumentCSS();
}},{key:'clearContext',value:function clearContext(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.outputContext;if(context.canvas){var _context$canvas=context.canvas,width=_context$canvas.width,height=_context$canvas.height;context.clearRect(0,0,width,height);}}},{key:'prepareRender',value:function prepareRender(){var _this39=this;if(!this[_renderDeferer]){this[_renderDeferer]={};this[_renderDeferer].promise=new _promise2.default(function(resolve,reject){(0,_assign2.default)(_this39[_renderDeferer],{resolve:resolve,reject:reject});if(_this39.autoRender){_this39[_drawTask]=Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["requestAnimationFrame"])(function(){delete _this39[_drawTask];_this39.draw();});}});// .catch(ex => console.error(ex.message))
}return this[_renderDeferer]?this[_renderDeferer].promise:_promise2.default.resolve();}},{key:'forceUpdate',value:function forceUpdate(){return this.prepareRender();}},{key:'restyle',value:function restyle(){var bgcolor=this.style.bgcolor;(0,_get4.default)(Layer.prototype.__proto__||(0,_getPrototypeOf3.default)(Layer.prototype),'restyle',this).call(this);if(bgcolor){var color=this.attr('bgcolor');if(color!==bgcolor&&this.canvas&&this.canvas.style){this.canvas.style=color;}}}},{key:'draw',value:function draw(){var clearContext=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;// if(this.__styleNeedUpdate) {
//   stylesheet.computeStyle(this);
// }
(0,_get4.default)(Layer.prototype.__proto__||(0,_getPrototypeOf3.default)(Layer.prototype),'draw',this).call(this);var renderDeferrer=this[_renderDeferer];this[_renderDeferer]=null;if(this[_drawTask]){Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_1__["cancelAnimationFrame"])(this[_drawTask]);delete this[_drawTask];}var currentTime=this.timeline.currentTime;this.repaint(currentTime,clearContext);(0,_get4.default)(Layer.prototype.__proto__||(0,_getPrototypeOf3.default)(Layer.prototype),'dispatchEvent',this).call(this,'update',{target:this,timeline:this.timeline,renderTime:currentTime},true,true);if(renderDeferrer){renderDeferrer.resolve();}}},{key:'update',value:function update(target){if(target&&target.isDirty)return;if(target){target.isDirty=true;}this.prepareRender();}},{key:'isVisible',value:function isVisible(){if(this.canvas){return this.canvas.width>0&&this.canvas.height>0;}return true;}},{key:'drawSprites',value:function drawSprites(renderEls,t){if(this.beforeDrawTransform){this.outputContext.save();this.beforeDrawTransform();}for(var i=0;i<renderEls.length;i++){var child=renderEls[i],isDirty=child.isDirty;child.isDirty=false;if(child.parent===this){child.draw(t);if(isDirty){child.dispatchEvent('update',{target:child,renderTime:t},true,true);}}}if(this.beforeDrawTransform){this.outputContext.restore();}}},{key:'repaint',value:function repaint(t){var clearContext=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var renderEls=this.sortedChildNodes;var outputContext=this.outputContext;if(clearContext)this.clearContext(outputContext);this.drawSprites(renderEls,t);}},{key:'pointCollision',value:function pointCollision(evt){if(this.outputContext.canvas){var layerX=evt.layerX,layerY=evt.layerY;var _outputContext$canvas=this.outputContext.canvas,width=_outputContext$canvas.width,height=_outputContext$canvas.height;if(layerX==null&&layerY==null||layerX>=0&&layerY>=0&&layerX<width&&layerY<height){return true;}return false;}/* istanbul ignore next  */return true;}},{key:'dispatchEvent',value:function dispatchEvent(type,evt){var _this40=this;var collisionState=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var swallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(swallow&&this.getEventHandlers(type).length===0){return;}if(!swallow&&!evt.terminated&&type!=='mouseenter'){var isCollision=collisionState||this.pointCollision(evt);var changedTouches=evt.originalEvent&&evt.originalEvent.changedTouches;if(changedTouches&&(type==='touchend'||type==='touchmove')){isCollision=true;}if(isCollision||type==='mouseleave'){var sprites=this.sortedChildNodes.slice(0).reverse(),targetSprites=[];if(changedTouches&&(type==='touchend'||type==='touchmove')){var touch=changedTouches[0];if(touch&&touch.identifier!=null){var targets=this.layer.touchedTargets[touch.identifier];if(targets){targets.forEach(function(target){if(target!==_this40&&target.layer===_this40){var _target$getParentXY=target.getParentXY(evt.layerX,evt.layerY),_target$getParentXY2=(0,_slicedToArray4.default)(_target$getParentXY,2),parentX=_target$getParentXY2[0],parentY=_target$getParentXY2[1];var _parentX=evt.parentX;var _parentY=evt.parentY;evt.parentX=parentX;evt.parentY=parentY;target.dispatchEvent(type,evt,true,true);evt.parentX=_parentX;evt.parentY=_parentY;}});if(type==='touchend')delete this.layer.touchedTargets[touch.identifier];}}}else{for(var i=0;i<sprites.length;i++){var sprite=sprites[i];var hit=sprite.dispatchEvent(type,evt,collisionState,swallow);if(hit){if(evt.targetSprites){targetSprites.push.apply(targetSprites,(0,_toConsumableArray4.default)(evt.targetSprites));delete evt.targetSprites;}// detect mouseenter/mouseleave
targetSprites.push(sprite);}if(evt.terminated&&type!=='mousemove'){break;}}}evt.targetSprites=targetSprites;// stopDispatch can only terminate event in the same level
evt.terminated=false;collisionState=isCollision;}}evt.targetSprites=evt.targetSprites||[];if(evt.cancelBubble){// stop bubbling
return false;}if(evt.targetSprites.length>0){// bubbling
collisionState=true;}var layerX=evt.layerX,layerY=evt.layerY;if(layerX!=null&&layerY!=null){evt.offsetX=layerX+this.offset[0];evt.offsetY=layerY+this.offset[1];}return(0,_get4.default)(Layer.prototype.__proto__||(0,_getPrototypeOf3.default)(Layer.prototype),'dispatchEvent',this).call(this,type,evt,collisionState,swallow);}},{key:'group',value:function group(){var group=new _group__WEBPACK_IMPORTED_MODULE_5__["default"]();group.append.apply(group,arguments);this.appendChild(group);return group;}},{key:'batch',value:function batch(){var _this41=this;for(var _len11=arguments.length,sprites=Array(_len11),_key11=0;_key11<_len11;_key11++){sprites[_key11]=arguments[_key11];}sprites.forEach(function(sprite){if(sprite.layer!==_this41){_this41.appendChild(sprite);}});var batch=new _batch__WEBPACK_IMPORTED_MODULE_4__["default"](this);batch.add.apply(batch,sprites);return batch;}},{key:'adjust',value:function adjust(handler)/* istanbul ignore next  */{var _this42=this;var update=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!update)return;var outputContext=this.outputContext;var shadowContext=this.adjustContext||outputContext.canvas.cloneNode().getContext('2d');if(!this[_adjustTimer]){this.autoRender=false;shadowContext.clearRect(0,0,shadowContext.canvas.width,shadowContext.canvas.height);shadowContext._clearTag=false;shadowContext.drawImage(outputContext.canvas,0,0);this.adjustContext=shadowContext;}else{clearTimeout(this[_adjustTimer]);}this[_adjustTimer]=setTimeout(function(){_this42.autoRender=true;delete _this42[_adjustTimer];},100);if(shadowContext.canvas.width>0&&shadowContext.canvas.height>0){this.clearContext(outputContext);outputContext.save();handler.call(this,outputContext);outputContext.drawImage(shadowContext.canvas,0,0);outputContext.restore();}}},{key:'resolution',get:function get(){return[this.canvas.width,this.canvas.height];}},{key:'autoRender',set:function set(value){this[_autoRender]=value;if(value){this.draw();}},get:function get(){return this[_autoRender];}},{key:'layer',get:function get(){return this;}},{key:'children',get:function get(){return this.childNodes.filter(function(child){return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_3__["default"];});}},{key:'timeline',get:function get(){return this[_timeline];}},{key:'context',get:function get(){return this.outputContext;}},{key:'canvas',get:function get(){return this.outputContext&&this.outputContext.canvas;}},{key:'offset',get:function get(){return[0,0];}}]);return Layer;}(_basenode__WEBPACK_IMPORTED_MODULE_2__["default"]);_defineProperty(Layer,"Attr",LayerAttr);(0,_assign2.default)(Layer.prototype,_helpers_group__WEBPACK_IMPORTED_MODULE_6__["default"]);/***/},/* 44 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* WEBPACK VAR INJECTION */(function(global){/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"requestAnimationFrame",function(){return requestAnimationFrame;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"cancelAnimationFrame",function(){return cancelAnimationFrame;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"timeline",function(){return timeline;});/* harmony import */var sprite_animator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);var _requestAnimationFrame=void 0,_cancelAnimationFrame=void 0;if(typeof global.requestAnimationFrame==='undefined'){_requestAnimationFrame=function _requestAnimationFrame(fn){return setTimeout(function(){fn(Date.now());},16);};_cancelAnimationFrame=function _cancelAnimationFrame(id){return clearTimeout(id);};}else{_requestAnimationFrame=global.requestAnimationFrame;_cancelAnimationFrame=global.cancelAnimationFrame;}var steps=new _map2.default();var timerId=void 0;var currentTime=Date.now();var requestAnimationFrame=function requestAnimationFrame(step){var id=(0,_symbol2.default)('requestId');steps.set(id,step);if(timerId==null){if(steps.size===1){currentTime=Date.now();}timerId=_requestAnimationFrame(function(t){timerId=null;currentTime=Date.now();[].concat((0,_toConsumableArray4.default)(steps)).forEach(function(_ref48){var _ref49=(0,_slicedToArray4.default)(_ref48,2),id=_ref49[0],callback=_ref49[1];callback(t);steps.delete(id);});});}return id;};var cancelAnimationFrame=function cancelAnimationFrame(id){steps.delete(id);if(!steps.size&&timerId){_cancelAnimationFrame(timerId);timerId=null;}};var timeline=new sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]({nowtime:function nowtime(){return steps.size?currentTime:Date.now();}});/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(45));/***/},/* 45 *//***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==='undefined'?'undefined':(0,_typeof3.default)(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 46 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Batch;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);var _batch=(0,_symbol2.default)('batch');var Batch=function(){function Batch(layer){(0,_classCallCheck4.default)(this,Batch);this.layer=layer;this[_batch]=new _set5.default();this.cache=null;}(0,_createClass4.default)(Batch,[{key:'add',value:function add(){var _this43=this;for(var _len12=arguments.length,nodes=Array(_len12),_key12=0;_key12<_len12;_key12++){nodes[_key12]=arguments[_key12];}nodes.forEach(function(node){if(!node.layer||node.layer!==_this43.layer){/* istanbul ignore next  */throw new Error('Batch node must append to this layer first!');}if(node[_batch]){/* istanbul ignore next  */throw new Error('Node already batched!');}node.attr('enableCache',true);var that=_this43;Object.defineProperty(node,'cache',{configurable:true,get:function get(){return that.cache;},set:function set(context){if(that.baseNode===this){if(that.cache&&context!==that.cache){_utils__WEBPACK_IMPORTED_MODULE_0__["cacheContextPool"].put(that.cache);}that.cache=context;}else if(context==null){throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');}}});node[_batch]=_this43;_this43[_batch].add(node);});}},{key:'remove',value:function remove(){var _this44=this;for(var _len13=arguments.length,nodes=Array(_len13),_key13=0;_key13<_len13;_key13++){nodes[_key13]=arguments[_key13];}nodes.forEach(function(node){if(_this44[_batch].has(node)){delete node[_batch];delete node.cache;_this44[_batch].delete(node);}});}},{key:'baseNode',get:function get(){var batchNodes=[].concat((0,_toConsumableArray4.default)(this[_batch]));var baseNode=batchNodes[0],zOrder=Infinity,zIndex=Infinity;for(var i=0;i<batchNodes.length;i++){var node=batchNodes[i];if(zIndex>node.zIndex){zIndex=node.zIndex;zOrder=node.zOrder;baseNode=node;}else if(zIndex===node.zIndex&&zOrder>node.zOrder){zOrder=node.zOrder;baseNode=node;}}return baseNode;}}]);return Batch;}();/***/},/* 47 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Group;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(31);/* harmony import */var _helpers_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(48);function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var _zOrder=(0,_symbol2.default)('zOrder'),_layoutTag=(0,_symbol2.default)('layoutTag');var reflow=true,relayout=true;var GroupAttr=_decorate(null,function(_initialize,_BaseSprite$Attr){var GroupAttr=function(_BaseSprite$Attr4){(0,_inherits3.default)(GroupAttr,_BaseSprite$Attr4);function GroupAttr(subject){(0,_classCallCheck4.default)(this,GroupAttr);var _this45=(0,_possibleConstructorReturn3.default)(this,(GroupAttr.__proto__||(0,_getPrototypeOf3.default)(GroupAttr)).call(this,subject));_initialize(_this45);GroupAttr.inits.forEach(function(init){init(_this45,subject);});return _this45;}return GroupAttr;}(_BaseSprite$Attr);return{F:GroupAttr,d:[{kind:"field",static:true,key:"inits",value:function value(){return[];}},{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow,value:null})],key:"clip",value:function value(val){if(val){val=typeof val==='string'?{d:val}:val;this.subject.svg=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSvgPath"])(val);this.set('clip',val);}else{this.subject.svg=null;this.set('clip',null);}}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({relayout:relayout}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width')],key:"layoutWidth",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({relayout:relayout}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height')],key:"layoutHeight",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow,relayout:relayout}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('width')],key:"width",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow,relayout:relayout}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["relative"])('height')],key:"height",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({relayout:relayout})],key:"display",value:function value(){return'';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"scrollLeft",value:function value(){return 0;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"scrollTop",value:function value(){return 0;}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);var _layout=(0,_symbol2.default)('layout');var Group=_decorate(null,function(_initialize2,_BaseSprite){var Group=function(_BaseSprite4){(0,_inherits3.default)(Group,_BaseSprite4);function Group(){var attr=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};(0,_classCallCheck4.default)(this,Group);var _this46=(0,_possibleConstructorReturn3.default)(this,(Group.__proto__||(0,_getPrototypeOf3.default)(Group)).call(this,attr));_initialize2(_this46);_this46.childNodes=[];_this46.sortedChildNodes=[];_this46[_zOrder]=0;_this46[_layoutTag]=false;return _this46;}return Group;}(_BaseSprite);return{F:Group,d:[{kind:"field",static:true,key:"Attr",value:function value(){return GroupAttr;}},{kind:"method",static:true,key:"applyLayout",value:function value(name,layout){this[_layout]=this[_layout]||{};var attrs=layout.attrs,relayout=layout.relayout;if(attrs.init){GroupAttr.inits.push(attrs.init);}Group.addAttributes(attrs);this[_layout][name]=relayout;}},{kind:"get",key:"isVirtual",value:function value(){var display=this.attr('display');if(display!==''&&display!=='none')return false;var _attr22=this.attr('border'),borderWidth=_attr22.width,borderRadius=this.attr('borderRadius'),bgcolor=this.attr('bgcolor'),_attr23=this.attr('gradients'),bgGradient=_attr23.bgcolor,_attrSize4=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize4[0],height=_attrSize4[1],_attr24=this.attr('anchor'),_attr25=(0,_slicedToArray4.default)(_attr24,2),anchorX=_attr25[0],anchorY=_attr25[1],bgimage=this.attr('bgimage'),_attr26=this.attr('padding'),_attr27=(0,_slicedToArray4.default)(_attr26,4),paddingTop=_attr27[0],paddingRight=_attr27[1],paddingBottom=_attr27[2],paddingLeft=_attr27[3];return!anchorX&&!anchorY&&!width&&!height&&!borderRadius&&!borderWidth&&!bgcolor&&!bgGradient&&!bgimage&&!paddingTop&&!paddingRight&&!paddingBottom&&!paddingLeft;}},{kind:"method",key:"scrollTo",value:function value(x,y){this.attr('scrollLeft',x);this.attr('scrollTop',y);}},{kind:"method",key:"scrollBy",value:function value(dx,dy){var x=this.attr('scrollLeft'),y=this.attr('scrollTop');this.scrollTo(x+dx,y+dy);}},{kind:"method",key:"cloneNode",value:function value(deepCopy){var node=_get(_getPrototypeOf(Group.prototype),"cloneNode",this).call(this);if(deepCopy){var children=this.childNodes;children.forEach(function(child){var subNode=child.cloneNode(deepCopy);node.append(subNode);});}return node;}},{kind:"get",key:"children",value:function value(){var children=this.childNodes||[];return children.filter(function(child){return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"];});}},{kind:"method",key:"update",value:function value(child){child.isDirty=true;var attrSize=this.attrSize;if(attrSize[0]===''||attrSize[1]===''){this.reflow();}this.forceUpdate(true);}},{kind:"method",key:"pointCollision",value:function value(evt){if(_get(_getPrototypeOf(Group.prototype),"pointCollision",this).call(this,evt)||this.isVirtual){if(this.svg){var offsetX=evt.offsetX,offsetY=evt.offsetY;if(offsetX==null&&offsetY==null)return true;var rect=this.originalRect;evt.isInClip=this.svg.isPointInPath(offsetX-rect[0],offsetY-rect[1]);}return true;}return false;}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],key:"contentSize",value:function value(){if(this.isVirtual)return[0,0];var _attrSize5=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize5[0],height=_attrSize5[1];if(width===''||height===''){if(this.attr('clip')){var svg=this.svg;var bounds=svg.bounds;width=width||bounds[2];height=height||bounds[3];}else{var right=void 0,bottom=void 0;right=0;bottom=0;this.childNodes.forEach(function(sprite){if(sprite.attr('display')!=='none'){var renderBox=sprite.renderBox;if(renderBox){right=Math.max(right,renderBox[2]);bottom=Math.max(bottom,renderBox[3]);}}});width=width||right;height=height||bottom;}}return[width,height];}},{kind:"method",key:"dispatchEvent",value:function value(type,evt){var collisionState=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var swallow=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;if(swallow&&this.getEventHandlers(type).length===0){return;}if(!swallow&&!evt.terminated&&type!=='mouseenter'){var isCollision=collisionState||this.pointCollision(evt);if(isCollision||type==='mouseleave'){var scrollLeft=this.attr('scrollLeft'),scrollTop=this.attr('scrollTop'),borderWidth=this.attr('border').width,padding=this.attr('padding');var parentX=void 0,parentY=void 0;if('offsetX'in evt)parentX=evt.offsetX-this.originalRect[0]-borderWidth-padding[3]+scrollLeft;if('offsetY'in evt)parentY=evt.offsetY-this.originalRect[1]-borderWidth-padding[0]+scrollTop;var _parentX=evt.parentX,_parentY=evt.parentY;evt.parentX=parentX;evt.parentY=parentY;var sprites=this.sortedChildNodes.slice(0).reverse();var targetSprites=[];for(var i=0;i<sprites.length&&evt.isInClip!==false;i++){var sprite=sprites[i];var hit=sprite.dispatchEvent(type,evt,collisionState,swallow);if(hit){if(evt.targetSprites){targetSprites.push.apply(targetSprites,(0,_toConsumableArray4.default)(evt.targetSprites));delete evt.targetSprites;}targetSprites.push(sprite);}if(evt.terminated&&type!=='mousemove'){break;}}evt.targetSprites=targetSprites;// stopDispatch can only terminate event in the same level
evt.terminated=false;evt.parentX=_parentX;evt.parentY=_parentY;collisionState=isCollision;}}evt.targetSprites=evt.targetSprites||[];if(evt.cancelBubble){// stop bubbling
return false;}if(evt.targetSprites.length>0){// bubbling
collisionState=true;}return _get(_getPrototypeOf(Group.prototype),"dispatchEvent",this).call(this,type,evt,collisionState,swallow);}},{kind:"method",key:"relayout",value:function value(){var items=this.childNodes.filter(function(child){if(child.hasLayout){child.attr('layoutWidth',null);child.attr('layoutHeight',null);child.attr('layoutX',null);child.attr('layoutY',null);}if(child.relayout){var _display=child.attr('display');if(_display!==''&&_display!=='static'){child.relayout();}}return child.hasLayout&&child.attr('display')!=='none';});var display=this.attr('display');var doLayout=Group[_layout][display];if(doLayout){doLayout(this,items);}}},{kind:"method",key:"clearLayout",value:function value(){this[_layoutTag]=false;if(this.hasLayout)this.parent.clearLayout();}},{kind:"method",key:"draw",value:function value(t){var drawingContext=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.context;// must relayout before draw
// prevent originalRect changing when rendering.
var display=this.attr('display');if(display!==''&&display!=='static'&&!this[_layoutTag]){this.relayout();this[_layoutTag]=true;}return _get(_getPrototypeOf(Group.prototype),"draw",this).call(this,t,drawingContext);}},{kind:"method",key:"render",value:function value(t,drawingContext){var clipPath=this.attr('clip');if(clipPath){this.svg.beginPath().to(drawingContext);drawingContext.clip();}if(!this.isVirtual){_get(_getPrototypeOf(Group.prototype),"render",this).call(this,t,drawingContext);if(this.attr('clipOverflow')){drawingContext.beginPath();drawingContext.rect(0,0,this.contentSize[0],this.contentSize[1]);drawingContext.clip();}}drawingContext.save();var scrollLeft=this.attr('scrollLeft'),scrollTop=this.attr('scrollTop');drawingContext.translate(-scrollLeft,-scrollTop);var sprites=this.sortedChildNodes;for(var i=0;i<sprites.length;i++){var child=sprites[i],isDirty=child.isDirty;child.isDirty=false;child.draw(t,drawingContext);if(isDirty){child.dispatchEvent('update',{target:child,renderTime:t},true,true);}}drawingContext.restore();}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);(0,_assign2.default)(Group.prototype,_helpers_group__WEBPACK_IMPORTED_MODULE_2__["default"]);/***/},/* 48 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);var _zOrder=(0,_symbol2.default)('zOrder');var _removeTask=(0,_symbol2.default)('removeTask');/* harmony default export */__webpack_exports__["default"]={appendChild:function appendChild(sprite){var _this47=this;var update=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var _append=function _append(){var children=_this47.childNodes;children.push(sprite);_this47[_zOrder]=_this47[_zOrder]||0;sprite.connect(_this47,_this47[_zOrder]++);_this47.sortedChildNodes=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(_this47.childNodes);// for(let i = children.length - 1; i > 0; i--) {
//   const a = children[i],
//     b = children[i - 1];
//   if(a.zIndex < b.zIndex) {
//     children[i] = b;
//     children[i - 1] = a;
//   }
// }
if(update){sprite.forceUpdate();}if(sprite.layer){return sprite.enter();}return sprite;};var _remove=sprite.remove();if(_remove&&_remove.promise){// deferred
if(_remove.resolve)_remove.resolve();_remove.promise.then(function(){return _append();});return _remove;}return _append();},append:function append(){var _this48=this;for(var _len14=arguments.length,sprites=Array(_len14),_key14=0;_key14<_len14;_key14++){sprites[_key14]=arguments[_key14];}sprites.forEach(function(sprite){_this48.appendChild(sprite);});return this;},removeChild:function removeChild(child){if(child[_removeTask])return child[_removeTask];var idx=this.childNodes.indexOf(child);if(idx===-1){return null;}var that=this;function remove(sprite){delete child[_removeTask];// re-calculate index because it's async...
var idx=that.childNodes.indexOf(child);if(idx===-1){return null;}that.childNodes.splice(idx,1);that.sortedChildNodes=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(that.childNodes);if(sprite.isVisible()||sprite.lastRenderBox){sprite.forceUpdate();}sprite.disconnect(that);return sprite;}var action=child.exit();if(action.promise){child[_removeTask]=action;action.promise.then(function(){return remove(child);});return action;}return remove(child);},clear:function clear(){var _this49=this;var children=this.childNodes.slice(0);children.forEach(function(child){return _this49.removeChild(child);});return this;},remove:function remove(){var _this50=this;for(var _len15=arguments.length,args=Array(_len15),_key15=0;_key15<_len15;_key15++){args[_key15]=arguments[_key15];}if(args.length===0){if(!this.parent)return null;return this.parent.removeChild(this);}args.forEach(function(sprite){_this50.removeChild(sprite);});return this;},insertBefore:function insertBefore(newchild,refchild){var _this51=this;if(refchild==null){return this.appendChild(newchild);}var idx=this.childNodes.indexOf(refchild);var refZOrder=refchild.zOrder;if(idx>=0){var _insert=function _insert(){for(var i=0;i<_this51.childNodes.length;i++){var child=_this51.childNodes[i],zOrder=child.zOrder;if(zOrder>=refZOrder){delete child.zOrder;Object.defineProperty(child,'zOrder',{value:zOrder+1,writable:false,configurable:true});}}_this51.childNodes.splice(idx,0,newchild);newchild.connect(_this51,refZOrder);_this51.sortedChildNodes=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(_this51.childNodes);newchild.forceUpdate();_this51[_zOrder]=_this51[_zOrder]||0;_this51[_zOrder]++;if(_this51.layer){return newchild.enter();}};var _remove=this.removeChild(newchild);if(_remove&&_remove.promise){if(_remove.resolve)_remove.resolve();_remove.promise.then(function(){return _insert();});return _remove;}return _insert();}return null;},replaceChild:function replaceChild(newChild,oldChild){var _this52=this;_promise2.default.resolve(this.insertBefore(newChild,oldChild)).then(function(){_this52.removeChild(oldChild);});}};/***/},/* 49 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Path;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);/* harmony import */var _basesprite__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(31);function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var reflow=true,quiet=true;var PathSpriteAttr=_decorate(null,function(_initialize,_BaseSprite$Attr){var PathSpriteAttr=function(_BaseSprite$Attr5){(0,_inherits3.default)(PathSpriteAttr,_BaseSprite$Attr5);function PathSpriteAttr(){var _ref50;(0,_classCallCheck4.default)(this,PathSpriteAttr);for(var _len16=arguments.length,args=Array(_len16),_key16=0;_key16<_len16;_key16++){args[_key16]=arguments[_key16];}var _this53=(0,_possibleConstructorReturn3.default)(this,(_ref50=PathSpriteAttr.__proto__||(0,_getPrototypeOf3.default)(PathSpriteAttr)).call.apply(_ref50,[this].concat(args)));_initialize(_this53);return _this53;}return PathSpriteAttr;}(_BaseSprite$Attr);return{F:PathSpriteAttr,d:[{kind:"set",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow})],key:"path",value:function value(val){if(val){val=typeof val==='string'?{d:val}:val;this.subject.svg=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createSvgPath"])(val);this.set('path',val);}else{this.subject.svg=null;this.set('path',null);}}},{kind:"set",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"d",value:function value(val){if(val){var path=this.path;if(!path){this.path={d:val};}else{this.path=(0,_assign2.default)(path,{d:val});}}else{this.path=null;}}},{kind:"get",key:"d",value:function value(){return this.path?this.path.d:null;}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat,Math.round),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])(1)],key:"lineWidth",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseStringFloat"],function(val){return typeof val==='number'?[val]:val;}),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"lineDash",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(parseFloat),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"]],key:"lineDashOffset",value:function value(){return 0;}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('butt')],key:"lineCap",value:function value(){return'inherit';}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('miter')],key:"lineJoin",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('')],key:"strokeColor",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"]),_utils__WEBPACK_IMPORTED_MODULE_0__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('')],key:"fillColor",value:function value(){return'inherit';}},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({reflow:reflow})],key:"flexible",value:void 0},{kind:"field",decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_0__["attr"])({quiet:quiet}),Object(_utils__WEBPACK_IMPORTED_MODULE_0__["inherit"])('box')],key:"bounding",value:function value(){return'inherit';}},{kind:"field",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["attr"],Object(_utils__WEBPACK_IMPORTED_MODULE_0__["composit"])('strokeColor')],key:"color",value:void 0}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"].Attr);var Path=_decorate(null,function(_initialize2,_BaseSprite){var Path=function(_BaseSprite5){(0,_inherits3.default)(Path,_BaseSprite5);function Path(attr){(0,_classCallCheck4.default)(this,Path);if(typeof attr==='string'){attr={d:attr};}var _this54=(0,_possibleConstructorReturn3.default)(this,(Path.__proto__||(0,_getPrototypeOf3.default)(Path)).call(this,attr));_initialize2(_this54);return _this54;}return Path;}(_BaseSprite);return{F:Path,d:[{kind:"field",static:true,key:"Attr",value:function value(){return PathSpriteAttr;}},{kind:"set",key:"path",value:function value(val){this.attr('path',val);}},{kind:"get",key:"path",value:function value(){return this.attr('path');}},{kind:"method",key:"getPointAtLength",value:function value(length){if(this.svg){return this.svg.getPointAtLength(length);}return[0,0];}},{kind:"method",key:"getPathLength",value:function value(){if(this.svg){return this.svg.getTotalLength();}return 0;}},{kind:"method",key:"findPath",value:function value(offsetX,offsetY){var rect=this.originalRect;var pathOffset=this.pathOffset;if(this.svg&&this.svg.isPointInPath(offsetX-rect[0]-pathOffset[0],offsetY-rect[1]-pathOffset[1])){return[this.svg];}return[];}},{kind:"get",key:"lineWidth",value:function value(){var lineWidth=this.attr('lineWidth'),gradients=this.attr('gradients'),fillColor=this.attr('fillColor'),strokeColor=this.attr('strokeColor');var hasStrokeColor=strokeColor||gradients&&gradients.strokeColor,hasFillColor=fillColor||gradients&&gradients.fillColor;if(!hasStrokeColor&&hasFillColor){// fill: ignore stroke
return 0;}return lineWidth;}},{kind:"get",key:"pathOffset",value:function value(){var lw=Math.round(this.lineWidth);return[lw,lw];}},{kind:"get",key:"pathSize",value:function value(){return this.svg?this.svg.size:[0,0];}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],key:"contentSize",value:function value(){if(!this.svg)return _get(_getPrototypeOf(Path.prototype),"contentSize",this);var bounds=this.svg.bounds;var _attrSize6=(0,_slicedToArray4.default)(this.attrSize,2),width=_attrSize6[0],height=_attrSize6[1];var pathOffset=this.pathOffset;if(width===''){width=bounds[2]-Math.min(0,bounds[0])+2*pathOffset[0];}if(height===''){height=bounds[3]-Math.min(0,bounds[1])+2*pathOffset[1];}if(this.attr('flexible')&&this.attr('height')===''&&this.attr('layoutHeight')===''){height=Math.ceil(height*width/(bounds[2]-Math.min(0,bounds[0])+2*pathOffset[0]));}return[width,height].map(Math.ceil);}},{kind:"get",decorators:[_utils__WEBPACK_IMPORTED_MODULE_0__["flow"]],key:"originalRect",value:function value(){var svg=this.svg;if(svg){var bounds=svg.bounds,offset=this.pathOffset;var _offsetSize5=(0,_slicedToArray4.default)(this.offsetSize,2),width=_offsetSize5[0],height=_offsetSize5[1],_attr28=this.attr('anchor'),_attr29=(0,_slicedToArray4.default)(_attr28,2),anchorX=_attr29[0],anchorY=_attr29[1];var rect=[0,0,width,height],offsetX=Math.min(0,bounds[0]),offsetY=Math.min(0,bounds[1]);rect[0]=offsetX-offset[0]-anchorX*(width+offsetX-2*offset[0]);rect[1]=offsetY-offset[1]-anchorY*(height+offsetY-2*offset[1]);return rect;}return _get(_getPrototypeOf(Path.prototype),"originalRect",this);}},{kind:"method",key:"pointCollision",value:function value(evt){if(_get(_getPrototypeOf(Path.prototype),"pointCollision",this).call(this,evt)){var offsetX=evt.offsetX,offsetY=evt.offsetY;if(offsetX==null&&offsetY==null)return true;var svg=this.svg;if(svg){var bounds=svg.bounds;offsetX+=Math.min(0,bounds[0]);offsetY+=Math.min(0,bounds[1]);}evt.targetPaths=this.findPath(offsetX,offsetY);if(this.attr('bounding')==='path'){return evt.targetPaths.length>0;}return true;}return false;}},{kind:"method",key:"render",value:function value(t,drawingContext){_get(_getPrototypeOf(Path.prototype),"render",this).call(this,t,drawingContext);var d=this.attr('d'),lineWidth=this.attr('lineWidth'),lineCap=this.attr('lineCap'),lineJoin=this.attr('lineJoin'),lineDash=this.attr('lineDash'),flexible=this.attr('flexible');if(d){var svg=this.svg;var _svg$bounds=(0,_slicedToArray4.default)(svg.bounds,4),ox=_svg$bounds[0],oy=_svg$bounds[1],ow=_svg$bounds[2],oh=_svg$bounds[3];var _pathOffset=(0,_slicedToArray4.default)(this.pathOffset,2),px=_pathOffset[0],py=_pathOffset[1];var _contentSize5=(0,_slicedToArray4.default)(this.contentSize,2),w=_contentSize5[0],h=_contentSize5[1];if((w<ow||h<oh)&&this.attr('clipOverflow')){drawingContext.beginPath();drawingContext.rect(0,0,w,h);drawingContext.clip();}if(flexible){svg.save();var sw=w/(ow-Math.min(0,ox)+2*px);svg.scale(sw,sw);ox*=sw;oy*=sw;px*=sw;py*=sw;}if(ox<0||oy<0){drawingContext.translate(-Math.min(0,ox),-Math.min(0,oy));}drawingContext.translate(px,py);svg.beginPath().to(drawingContext);if(flexible){svg.restore();}drawingContext.lineWidth=lineWidth;drawingContext.lineCap=lineCap;drawingContext.lineJoin=lineJoin;if(lineDash!=null){drawingContext.setLineDash(lineDash);var lineDashOffset=this.attr('lineDashOffset');drawingContext.lineDashOffset=lineDashOffset;}var fillColor=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findColor"])(drawingContext,this,'fillColor');if(fillColor){drawingContext.fillStyle=fillColor;}var strokeColor=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["findColor"])(drawingContext,this,'strokeColor');if(!strokeColor&&!fillColor){strokeColor=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])('black');}if(strokeColor){drawingContext.strokeStyle=strokeColor;}if(fillColor){drawingContext.fill();}if(strokeColor){drawingContext.stroke();}}}}]};},_basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]);/***/},/* 50 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return use;});var installed=new _weakMap2.default();var _merged=(0,_symbol2.default)('merged');var target=null;function use(plugin){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var merge=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(!target){target=(0,_assign2.default)({},this);target.__spritejs=this;// target.use = use.bind(target);
target.use=function(plugin){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var merge=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return use.call(target,plugin,options,merge);};}if(typeof options==='boolean'){merge=options;options=null;}if(installed.has(plugin)){var _ret=installed.get(plugin);if(merge&&!_ret[_merged]){(0,_assign2.default)(target,_ret);_ret[_merged]=true;}return _ret;}var install=plugin.install||plugin;var ret=install.call(plugin,target,options)||{};installed.set(plugin,ret);if(merge){(0,_assign2.default)(target.__spritejs,ret);ret[_merged]=true;}return ret;}/***/},/* 51 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _core_basesprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31);/* harmony import */var _animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52);(0,_assign2.default)(_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype,{animate:function animate(frames,timing){var _this55=this;var isStyleAnim=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var setter=null;if(isStyleAnim){setter=function setter(frame,target){target.__attr.__styleTag=true;target.attr(frame);target.__attr.__styleTag=false;};}var animation=new _animation__WEBPACK_IMPORTED_MODULE_1__["default"](this,frames,timing,setter);if(this.effects)animation.applyEffects(this.effects);if(this.layer){animation.baseTimeline=this.layer.timeline;animation.play();animation.finished.then(function(){_this55.animations.delete(animation);});}this.animations.add(animation);return animation;},transition:function transition(sec){var _ref53;var easing=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'linear';var isStyleAnim=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var that=this,_animation=(0,_symbol2.default)('animation');easing=easing||'linear';var delay=0;if((typeof sec==='undefined'?'undefined':(0,_typeof3.default)(sec))==='object'){delay=sec.delay||0;sec=sec.duration;}return _ref53={},(0,_defineProperty4.default)(_ref53,_animation,null),(0,_defineProperty4.default)(_ref53,'cancel',function cancel(){var preserveState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var animation=this[_animation];if(animation){animation.cancel(preserveState);}}),(0,_defineProperty4.default)(_ref53,'end',function end(){var animation=this[_animation];if(animation&&(animation.playState==='running'||animation.playState==='pending')){animation.finish();}}),(0,_defineProperty4.default)(_ref53,'reverse',function reverse(){var animation=this[_animation];if(animation){if(animation.playState==='running'||animation.playState==='pending'){animation.playbackRate=-animation.playbackRate;}else{var direction=animation.timing.direction;animation.timing.direction=direction==='reverse'?'normal':'reverse';animation.play();}}return animation.finished;}),(0,_defineProperty4.default)(_ref53,'attr',function attr(prop,val){this.end();if(typeof prop==='string'){prop=(0,_defineProperty4.default)({},prop,val);}(0,_entries2.default)(prop).forEach(function(_ref51){var _ref52=(0,_slicedToArray4.default)(_ref51,2),key=_ref52[0],value=_ref52[1];if(typeof value==='function'){prop[key]=value(that.attr(key));}});this[_animation]=that.animate([prop],{duration:sec*1000,delay:delay*1000,fill:'forwards',easing:easing},isStyleAnim);return this[_animation].finished;}),_ref53;}});/***/},/* 52 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_animator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);/* harmony import */var sprite_math__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20);/* harmony import */var _patheffect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53);/* harmony import */var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44);var _defaultEffect=sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default;var defaultEffect=function defaultEffect(from,to,p,start,end){var unitFrom='px',unitTo='px';var matchFrom=null,matchTo=null;var exp=/^([\d.]+)(%|rh|rw)$/i;if(typeof from==='string'){matchFrom=exp.exec(from);if(matchFrom){unitFrom=matchFrom[2];}}if(typeof to==='string'){matchTo=exp.exec(to);if(matchTo){unitTo=matchTo[2];}}if(unitFrom===unitTo){if(matchFrom)from=parseFloat(matchFrom[1]);if(matchTo)to=parseFloat(matchTo[1]);}var v=_defaultEffect(from,to,p,start,end);return unitFrom!=='px'?''+v+unitFrom:v;};sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"].default=defaultEffect;function arrayEffect(arr1,arr2,p,start,end){if(typeof arr1==='string'){arr1=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"])(arr1);}if(typeof arr2==='string'){arr2=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"])(arr2);}if(Array.isArray(arr1)){return arr1.map(function(o,i){return defaultEffect(o,arr2[i],p,start,end);});}return defaultEffect(arr1,arr2,p,start,end);}function objectEffect(obj1,obj2,p,start,end){var t1=(0,_assign2.default)({},obj2,obj1),t2=(0,_assign2.default)({},obj1,obj2);(0,_entries2.default)(t1).forEach(function(_ref54){var _ref55=(0,_slicedToArray4.default)(_ref54,2),key=_ref55[0],value=_ref55[1];t1[key]=arrayEffect(value,t2[key],p,start,end);});return t1;}function getTransformMatrix(trans){var matrix=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"]();(0,_entries2.default)(trans).forEach(function(_ref56){var _ref57=(0,_slicedToArray4.default)(_ref56,2),key=_ref57[0],val=_ref57[1];if(key==='matrix'){matrix=new sprite_math__WEBPACK_IMPORTED_MODULE_1__["Matrix"](val);}else if(Array.isArray(val)){var _matrix;(_matrix=matrix)[key].apply(_matrix,(0,_toConsumableArray4.default)(val));}else if(key==='scale'){matrix.scale(val,val);}else{matrix[key](val);}});return matrix.m;}function arrayEqual(arr1,arr2){if(arr1.length!==arr2.length)return false;for(var i=0;i<arr1.length;i++){if(arr1[i]!==arr2[i]){return false;}}return true;}function transformEffect(trans1,trans2,p,start,end){trans1=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"])(trans1);trans2=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"])(trans2);if(!arrayEqual((0,_keys2.default)(trans1),(0,_keys2.default)(trans2))){trans1=getTransformMatrix(trans1);trans2=getTransformMatrix(trans2);}if(Array.isArray(trans1)||Array.isArray(trans2)){return arrayEffect(trans1,trans2,p,start,end);}return objectEffect(trans1,trans2,p,start,end);}function colorEffect(color1,color2,p,start,end){var c1=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(color1);var c2=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"])(color2);if(c1.model===c2.model){c1.value=arrayEffect(c1.value,c2.value,p,start,end).map(function(c,i){return i<3?Math.round(c):Math.round(c*100)/100;});return c1.str;}return defaultEffect(color1,color2,p,start,end);}function pathEffect(path1,path2,p,start,end){path1=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createSvgPath"])(path1);path2=Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createSvgPath"])(path2);return Object(_patheffect__WEBPACK_IMPORTED_MODULE_3__["default"])(path1.d,path2.d,p,start,end);}(0,_assign2.default)(sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"],{arrayEffect:arrayEffect,transformEffect:transformEffect,colorEffect:colorEffect,pathEffect:pathEffect,pos:arrayEffect,size:arrayEffect,transform:transformEffect,bgcolor:colorEffect,border:function border(v1,v2,p,start,end){return{width:defaultEffect(v1.width,v2.width,p,start,end),color:colorEffect(v1.color,v2.color,p,start,end),style:arrayEffect(v1.style,v2.style,p,start,end)};},scale:arrayEffect,translate:arrayEffect,skew:arrayEffect,padding:arrayEffect,margin:arrayEffect,color:colorEffect,strokeColor:colorEffect,fillColor:colorEffect,d:_patheffect__WEBPACK_IMPORTED_MODULE_3__["default"],path:pathEffect,clip:pathEffect});/* harmony default export */__webpack_exports__["default"]=function(_sprite_animator__WEB){(0,_inherits3.default)(_class3,_sprite_animator__WEB);function _class3(sprite,frames,timing,setter){(0,_classCallCheck4.default)(this,_class3);var _this56=(0,_possibleConstructorReturn3.default)(this,(_class3.__proto__||(0,_getPrototypeOf3.default)(_class3)).call(this,sprite.attr(),frames,timing));_this56.target=sprite;_this56.setter=setter||function(frame,target){target.attr(frame);};return _this56;}(0,_createClass4.default)(_class3,[{key:'finish',value:function finish(){// finish should change attrs synchronously
(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'finish',this).call(this);Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(this.requestId);this.setter(this.frame,this.target);}},{key:'play',value:function play(){if(!this.target.parent||this.playState==='running'){return;}(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'play',this).call(this);this.setter(this.frame,this.target);var that=this;this.ready.then(function(){that.setter(that.frame,that.target);that.requestId=Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(function update(){var target=that.target;if(typeof document!=='undefined'&&document.documentElement&&document.documentElement.contains&&target.layer&&target.layer.canvas&&!document.documentElement.contains(target.layer.canvas)){// if dom element has been removed stop animation.
// it usually occurs in single page applications.
that.cancel();return;}var playState=that.playState;that.setter(that.frame,that.target);if(playState==='idle')return;if(playState==='running'){that.requestId=Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);}else if(playState==='paused'||playState==='pending'&&that.timeline.currentTime<0){// playbackRate < 0 will cause playState reset to pending...
that.ready.then(function(){that.setter(that.frame,that.target);that.requestId=Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);});}});});}},{key:'cancel',value:function cancel(){var preserveState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(this.requestId);if(preserveState){this.setter(this.frame,this.target);(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'cancel',this).call(this);}else{(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'cancel',this).call(this);this.setter(this.frame,this.target);}}},{key:'playState',get:function get(){if(!this.target.parent){return'idle';}return(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'playState',this);}},{key:'finished',get:function get(){var _this57=this;// set last frame when finished
// because while the web page is not focused
// requestAnimationFrame will not trigger while deferTime of
// the animator is still running
return(0,_get4.default)(_class3.prototype.__proto__||(0,_getPrototypeOf3.default)(_class3.prototype),'finished',this).then(function(){var that=_this57;return new _promise2.default(function(resolve){function update(){that.setter(that.frame,that.target);var playState=that.playState;if(playState==='finished'||playState==='idle'){Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["cancelAnimationFrame"])(that.requestId);resolve();}else{Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_4__["requestAnimationFrame"])(update);}}update();});});}}]);return _class3;}(sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Animator"]);/***/},/* 53 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return pathEffect;});/* harmony import */var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);/* harmony import */var _sort__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(54);// https://github.com/AlloyTeam/pasition
function _subShapes(shapes,count){var _loop=function _loop(i){var shape=shapes[shapes.length-1];var newShape=[];var x=shape[0][0],y=shape[0][1];shape.forEach(function(){newShape.push([x,y,x,y,x,y,x,y]);});shapes.push(newShape);};for(var i=0;i<count;i++){_loop(i);}}function _upShapes(shapes,count){var _loop2=function _loop2(i){var shape=shapes[shapes.length-1];var newShape=[];shape.forEach(function(curve){newShape.push(curve.slice(0));});shapes.push(newShape);};for(var i=0;i<count;i++){_loop2(i);}}function split(x1,y1,x2,y2,x3,y3,x4,y4,t){return{left:_split(x1,y1,x2,y2,x3,y3,x4,y4,t),right:_split(x4,y4,x3,y3,x2,y2,x1,y1,1-t,true)};}function _split(x1,y1,x2,y2,x3,y3,x4,y4,t,reverse){var x12=(x2-x1)*t+x1;var y12=(y2-y1)*t+y1;var x23=(x3-x2)*t+x2;var y23=(y3-y2)*t+y2;var x34=(x4-x3)*t+x3;var y34=(y4-y3)*t+y3;var x123=(x23-x12)*t+x12;var y123=(y23-y12)*t+y12;var x234=(x34-x23)*t+x23;var y234=(y34-y23)*t+y23;var x1234=(x234-x123)*t+x123;var y1234=(y234-y123)*t+y123;if(reverse){return[x1234,y1234,x123,y123,x12,y12,x1,y1];}return[x1,y1,x12,y12,x123,y123,x1234,y1234];}function _splitCurves(curves,count){var i=0,index=0;for(;i<count;i++){var curve=curves[index];var cs=split(curve[0],curve[1],curve[2],curve[3],curve[4],curve[5],curve[6],curve[7],0.5);curves.splice(index,1);curves.splice(index,0,cs.left,cs.right);index+=2;if(index>=curves.length-1){index=0;}}}function pathToShapes(path){var x=0,y=0;var shapes=[];path.forEach(function(p){var _p4=(0,_toArray4.default)(p),cmd=_p4[0],points=_p4.slice(1);if(cmd==='M'){x=points[0];y=points[1];}else{shapes.push([x,y].concat((0,_toConsumableArray4.default)(points)));x=points[4];y=points[5];}});return[shapes];}// match two path
function match(pathA,pathB){var minCurves=arguments.length>2&&arguments[2]!==undefined?arguments[2]:100;var shapesA=pathToShapes(pathA.path);var shapesB=pathToShapes(pathB.path);var lenA=shapesA.length,lenB=shapesB.length;if(lenA>lenB){_subShapes(shapesB,lenA-lenB);}else if(lenA<lenB){_upShapes(shapesA,lenB-lenA);}shapesA=Object(_sort__WEBPACK_IMPORTED_MODULE_1__["sort"])(shapesA,shapesB);shapesA.forEach(function(curves,index){var lenA=curves.length,lenB=shapesB[index].length;if(lenA>lenB){if(lenA<minCurves){_splitCurves(curves,minCurves-lenA);_splitCurves(shapesB[index],minCurves-lenB);}else{_splitCurves(shapesB[index],lenA-lenB);}}else if(lenA<lenB){if(lenB<minCurves){_splitCurves(curves,minCurves-lenA);_splitCurves(shapesB[index],minCurves-lenB);}else{_splitCurves(curves,lenB-lenA);}}});shapesA.forEach(function(curves,index){shapesA[index]=Object(_sort__WEBPACK_IMPORTED_MODULE_1__["sortCurves"])(curves,shapesB[index]);});return[shapesA,shapesB];}function lerpPoints(x1,y1,x2,y2,t){return[x1+(x2-x1)*t,y1+(y2-y1)*t];}function lerpCurve(curveA,curveB,t){return lerpPoints(curveA[0],curveA[1],curveB[0],curveB[1],t).concat(lerpPoints(curveA[2],curveA[3],curveB[2],curveB[3],t)).concat(lerpPoints(curveA[4],curveA[5],curveB[4],curveB[5],t)).concat(lerpPoints(curveA[6],curveA[7],curveB[6],curveB[7],t));}function lerp(pathA,pathB,t){var _match=match(pathA,pathB),_match2=(0,_slicedToArray4.default)(_match,2),shapesA=_match2[0],shapesB=_match2[1];var closed=/z$/img.test(pathB.d)?'z':'';return''+shapesA.map(function(shapeA,i){var shapeB=shapesB[i];return shapeA.map(function(curveA,i){var curveB=shapeB[i];var curve=lerpCurve(curveA,curveB,t);if(i===0){return'M'+curve[0]+' '+curve[1]+' C'+curve[2]+' '+curve[3]+', '+curve[4]+' '+curve[5]+', '+curve[6]+' '+curve[7];}return curve[2]+' '+curve[3]+', '+curve[4]+' '+curve[5]+', '+curve[6]+' '+curve[7];});}).join(' ')+closed;}function pathEffect(pathA,pathB,p,s,e){var ep=(p-s)/(e-s);if(ep<=0)return pathA;if(ep>=1)return pathB;pathA=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathA);pathB=new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_0__["default"](pathB);return lerp(pathA,pathB,ep);}/***/},/* 54 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sort",function(){return sort;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sortCurves",function(){return sortCurves;});// https://github.com/AlloyTeam/pasition
function shapeBox(shape){var minX=shape[0][0],minY=shape[0][1],maxX=minX,maxY=minY;shape.forEach(function(curve){var x1=curve[0],x2=curve[2],x3=curve[4],x4=curve[6],y1=curve[1],y2=curve[3],y3=curve[5],y4=curve[7];minX=Math.min(minX,x1,x2,x3,x4);minY=Math.min(minY,y1,y2,y3,y4);maxX=Math.max(maxX,x1,x2,x3,x4);maxY=Math.max(maxY,y1,y2,y3,y4);});return[minX,minY,maxX,maxY];}function boxDistance(boxA,boxB){return Math.sqrt(Math.pow(boxA[0]-boxB[0],2)+Math.pow(boxA[1]-boxB[1],2))+Math.sqrt(Math.pow(boxA[2]-boxB[2],2)+Math.pow(boxA[3]-boxB[3],2));}function curveDistance(curveA,curveB){var x1=curveA[0],x2=curveA[2],x3=curveA[4],x4=curveA[6],y1=curveA[1],y2=curveA[3],y3=curveA[5],y4=curveA[7],xb1=curveB[0],xb2=curveB[2],xb3=curveB[4],xb4=curveB[6],yb1=curveB[1],yb2=curveB[3],yb3=curveB[5],yb4=curveB[7];return Math.sqrt(Math.pow(xb1-x1,2)+Math.pow(yb1-y1,2))+Math.sqrt(Math.pow(xb2-x2,2)+Math.pow(yb2-y2,2))+Math.sqrt(Math.pow(xb3-x3,2)+Math.pow(yb3-y3,2))+Math.sqrt(Math.pow(xb4-x4,2)+Math.pow(yb4-y4,2));}function sortCurves(curvesA,curvesB){var arrList=permuteCurveNum(curvesA.length);var list=[];arrList.forEach(function(arr){var distance=0;var i=0;arr.forEach(function(index){distance+=curveDistance(curvesA[index],curvesB[i++]);});list.push({index:arr,distance:distance});});list.sort(function(a,b){return a.distance-b.distance;});var result=[];list[0].index.forEach(function(index){result.push(curvesA[index]);});return result;}function sort(pathA,pathB){var arrList=permuteNum(pathA.length);var list=[];arrList.forEach(function(arr){var distance=0;arr.forEach(function(index){distance+=boxDistance(shapeBox(pathA[index]),shapeBox(pathB[index]));});list.push({index:arr,distance:distance});});list.sort(function(a,b){return a.distance-b.distance;});var result=[];list[0].index.forEach(function(index){result.push(pathA[index]);});return result;}function permuteCurveNum(num){var arr=[];for(var i=0;i<num;i++){var indexArr=[];for(var j=0;j<num;j++){var index=j+i;if(index>num-1)index-=num;indexArr[index]=j;}arr.push(indexArr);}return arr;}function permuteNum(num){var arr=[];for(var i=0;i<num;i++){arr.push(i);}return permute(arr);}function permute(input){var permArr=[],usedChars=[];function main(input){var i=void 0,ch=void 0;for(i=0;i<input.length;i++){ch=input.splice(i,1)[0];usedChars.push(ch);if(input.length===0){permArr.push(usedChars.slice());}main(input);input.splice(i,0,ch);usedChars.pop();}return permArr;}return main(input);}/***/},/* 55 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _attr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56);/* harmony import */var _node__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(57);/***/},/* 56 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _core_baseattr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32);var defaultValues={state:'default',states:{},actions:{'beforeEnter:':{duration:300,easing:'ease-in'},'beforeExit:':{duration:300,easing:'ease-out'},'hide:':{duration:300,easing:'ease-in'},':hide':{duration:300,easing:'ease-out'},'hide:beforeShow':'none','beforeShow:':{duration:300,easing:'ease-in'}},enterMode:'normal',exitMode:'normal'};_core_baseattr__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes({states:{value:defaultValues.states,set:function set(val){val=(0,_assign2.default)({},val);var states=this.states;// recover __default
(0,_entries2.default)(states).forEach(function(_ref58){var _ref59=(0,_slicedToArray4.default)(_ref58,2),key=_ref59[0],value=_ref59[1];if(value.__default&&!(key in val)){val[key]=value;}});this.quietSet('states',val);}},actions:{value:defaultValues.actions,set:function set(val){if(Array.isArray(val)){var value={};val.forEach(function(v){var key=void 0;var action=v.action;if(!action){action=(0,_assign2.default)({},v);delete action.from;delete action.to;delete action.both;}if(v.both){if(!Array.isArray(v.both)){v.both=[v.both];}if(v.both.length>1){key=v.both.join(':');value[key]=(0,_assign2.default)({},action);key=v.both.reverse().join(':');value[key]=(0,_assign2.default)({},action);}else{value[v.both[0]+':']=(0,_assign2.default)({},action);value[':'+v.both[0]]=(0,_assign2.default)({},action);}}else{key=(v.from||'')+':'+(v.to||'');value[key]=(0,_assign2.default)({},action);}});val=value;}var defaultVal=defaultValues.actions;val=(0,_assign2.default)({},defaultVal,val);this.quietSet('actions',val);}},state:{value:defaultValues.state,set:function set(val){if(val==null)val='default';var oldState=this.state;if(oldState!==val){this.quietSet('state',val);var states=this.states;var action=null;var toState=states[val]||{};var subject=this.subject;if(!subject.__ignoreAction&&subject.layer){var fromState=states[oldState],actions=this.actions;action=actions[oldState+':'+val]||actions[':'+val]||actions[oldState+':'];if(!action||action==='none')action={duration:0};var animation=subject.changeState(fromState,toState,action);var tag=(0,_symbol2.default)('tag');animation.tag=tag;if(animation.__reversed){subject.dispatchEvent('state-to-'+oldState,{from:val,to:oldState,action:animation.__reversed,cancelled:true,animation:animation},true,true);}subject.dispatchEvent('state-from-'+oldState,{from:oldState,to:val,action:action,animation:animation},true,true);animation.finished.then(function(){if(animation.tag===tag){subject.dispatchEvent('state-to-'+val,{from:oldState,to:val,action:action,animation:animation},true,true);}});if(oldState==='afterExit'){animation.finish();}}else{subject.dispatchEvent('state-from-'+oldState,{from:oldState,to:val},true,true);if(toState)subject.attr(toState);subject.dispatchEvent('state-to-'+val,{from:oldState,to:val},true,true);}}}},enterMode:{value:defaultValues.enterMode},exitMode:{value:defaultValues.exitMode}});/***/},/* 57 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _core_basesprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(31);function doActions(ret,target,act){var actions=target.children.map(function(c){return c[act]();}).filter(function(d){return d.promise;});if(ret.promise){actions.unshift(ret);}if(actions.length){var deferred={promise:_promise2.default.all(actions.map(function(d){return d.promise;})),resolve:function resolve(){actions.forEach(function(d){return d.resolve();});return this.promise;}};return deferred;}return null;}var _resolveState=(0,_symbol2.default)('resolveState'),_changeStateAction=(0,_symbol2.default)('changeStateAction'),_show=(0,_symbol2.default)('show'),_hide=(0,_symbol2.default)('hide'),_enter=(0,_symbol2.default)('enter');var _enter2=_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.enter;var _exit2=_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.exit;(0,_assign2.default)(_core_basesprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype,{changeState:function changeState(fromState,toState,action){var _this58=this;var animation=void 0;if(this[_changeStateAction]){var currentAnim=this[_changeStateAction].animation;if(this[_changeStateAction].reversable&&(currentAnim.playState==='running'||currentAnim.playState==='pending')&&this[_changeStateAction].fromState===toState&&this[_changeStateAction].toState===fromState){currentAnim.playbackRate=-currentAnim.playbackRate;animation=currentAnim;animation.__reversed=this[_changeStateAction].action;}else{currentAnim.finish();}}if(!animation){// const [_fromState, _toState] = [Object.assign({}, fromState), Object.assign({}, toState)];
// delete _fromState.__default;
// delete _toState.__default;
var _fromState={},_toState={};(0,_entries2.default)(fromState||{}).forEach(function(_ref60){var _ref61=(0,_slicedToArray4.default)(_ref60,2),key=_ref61[0],value=_ref61[1];if(key!=='__default'){if(typeof value==='function'){_fromState[key]=_this58.attr(key);}else{_fromState[key]=value;}}});(0,_entries2.default)(toState||{}).forEach(function(_ref62){var _ref63=(0,_slicedToArray4.default)(_ref62,2),key=_ref63[0],value=_ref63[1];if(key!=='__default'){if(typeof value==='function'){_toState[key]=value(_this58.attr(key));}else{_toState[key]=value;}}});animation=this.animate([_fromState,_toState],(0,_assign2.default)({fill:'forwards'},action));animation.finished.then(function(){if(_this58[_changeStateAction]&&_this58[_changeStateAction].animation===animation)delete _this58[_changeStateAction];});}this[_changeStateAction]={animation:animation,fromState:fromState,toState:toState,action:action,reversable:action.reversable!==false};return animation;},resolveStates:function resolveStates(states,before,after){var _this59=this;var currentAnimation=null,resolved=false;var _states=[];var prev=null;for(var i=0;i<states.length;i++){var s=states[i];if(prev!==s){prev=s;_states.push(s);}}states=_states;var _resolveStates=function _resolveStates(){_this59.__ignoreAction=false;var fromState=_this59.attr('state');if(fromState===states[0]){states.shift();}var len=states.length;var resolveState=function resolveState(state,i){var promise=new _promise2.default(function(resolve){_this59.once('state-to-'+state,function(){fromState=state;if(i===len-1){// lastState
delete _this59[_resolveState];}if(after)after.call(_this59,states);resolve(_this59);});_this59.once('state-from-'+fromState,function(_ref64){var animation=_ref64.animation;if(animation&&resolved)animation.finish();else currentAnimation=animation;});_this59.attr('state',state);});return promise;};var promise=_promise2.default.resolve();states.forEach(function(state,i){promise=promise.then(function(){return resolveState(state,i);});});var ret={get animation(){return currentAnimation;},states:states,resolve:function resolve(){resolved=true;if(currentAnimation)currentAnimation.finish();return promise;},promise:promise};_this59[_resolveState]=ret;return ret;};var rs=this[_resolveState];if(rs){rs.resolve();this.__ignoreAction=true;var promise=rs.promise.then(function(){if(before)before.call(_this59,states);return _resolveStates().promise;});return{promise:promise,resolve:function resolve(){resolved=true;if(currentAnimation)currentAnimation.finish();return promise;}};}if(before)before.call(this,states);return _resolveStates();},// state: original -> show -> hide -> show -> original
show:function show(){var _this60=this;if(this[_show])return this[_show];var originalDisplay=this.attr('__originalDisplay')||'';var originalState=this.attr('__originalState')||'default';var states=this.attr('states');if(states.show){var _st=['show',originalState];if(states.beforeShow){_st.unshift('beforeShow');}var deferred=this.resolveStates(_st,function(){var state=_this60.attr('state');if(state==='hide'){_this60.once('state-from-hide',function(){_this60.attr('display',originalDisplay);});}});deferred.promise=deferred.promise.then(function(){if(!_this60[_hide]){delete _this60.__attr.__originalDisplay;delete _this60.__attr.__originalState;if(states.show.__default){delete states.show;_this60.attr('states',states);}}delete _this60[_show];});this[_show]=deferred;return deferred;}var rs=this[_resolveState];if(rs){rs.resolve();rs.promise.then(function(){_this60.attr('state',originalState);_this60.attr('display',originalDisplay);});return rs;}this.attr('state',originalState);this.attr('display',originalDisplay);return this;},hide:function hide(){var _this61=this;var state=this.attr('state');if(this[_hide]||state==='hide'||state==='afterExit'||state==='beforeExit')return this[_hide];var __originalDisplay=this.attr('__originalDisplay');if(__originalDisplay==null){var display=this.attr('display');this.attr({__originalDisplay:display!=='none'?display:'',__originalState:state!=='hide'?state:'default'});}var states=this.attr('states');if(states.hide){var deferred=this.resolveStates(['show','hide'],function(){if(!states.show){var beforeHide={__default:true};if(states.beforeShow){(0,_keys2.default)(states.beforeShow).forEach(function(key){beforeHide[key]=_this61.attr(key);});}(0,_keys2.default)(states.hide).forEach(function(key){beforeHide[key]=_this61.attr(key);});states.show=beforeHide;_this61.attr('states',states);}});deferred.promise=deferred.promise.then(function(){_this61.attr('display','none');delete _this61[_hide];return _this61;});this[_hide]=deferred;return deferred;}var rs=this[_resolveState];if(rs){rs.resolve();rs.promise.then(function(){_this61.attr('state','hide');_this61.attr('display','none');});return rs;}this.attr('state','hide');this.attr('display','none');return this;},enter:function enter(toState){var _this62=this;var states=this.attr('states');var ret=void 0;if(states&&(states.beforeEnter||states.afterEnter)){var deferred=this.resolveStates(['beforeEnter','afterEnter'],function(_states){var state=_this62.attr('state');_states.push(toState||state);if(state!=='beforeEnter'&&state!=='afterEnter'&&(!states.afterEnter||states.afterEnter.__default)){var afterEnter={__default:true};(0,_keys2.default)(states.beforeEnter).forEach(function(key){afterEnter[key]=_this62.attr(key);});states.afterEnter=afterEnter;_this62.attr('states',states);}});ret=deferred;}else{ret=_enter2.call(this);}this[_enter]=ret;if(this.children){var enterMode=this.attr('enterMode');if(enterMode==='onebyone'||enterMode==='onebyone-reverse'){var promise=null;var resolved=false;if(ret.promise){promise=ret.promise;}else{promise=_promise2.default.resolve(this);}var children=this.children;if(enterMode==='onebyone-reverse'){children=[].concat((0,_toConsumableArray4.default)(children)).reverse();}var currentTask=ret;children.forEach(function(c){var states=c.attr('states');if(states&&(states.beforeEnter||states.afterEnter)){if(!states.afterEnter||states.afterEnter.__default){var afterEnter={__default:true};(0,_keys2.default)(states.beforeEnter).forEach(function(key){afterEnter[key]=c.attr(key);});states.afterEnter=afterEnter;c.attr('states',states);}}var toState=c.attr('state');c.attr('state','beforeEnter');promise=promise.then(function(){var d=c.enter(toState);if(d.promise){currentTask=d;if(resolved&&d.resolve){d.resolve();}return d.promise;}return d;});});this[_enter]={promise:promise,resolve:function resolve(){if(currentTask&&currentTask.resolve)currentTask.resolve();resolved=true;}};}else{var _deferred=doActions(ret,this,'enter');if(_deferred)this[_enter]=_deferred;}}return this[_enter];},exit:function exit(toState){var _this63=this;var onbyone=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var _exit=function _exit(){var states=_this63.attr('states');var ret=void 0;var afterEnter=states.afterEnter||{};if(states&&(states.beforeExit||states.afterExit)){var state=void 0;var deferred=_this63.resolveStates(['beforeExit','afterExit'],function(){state=_this63.attr('state');if(state!=='beforeExit'&&state!=='afterExit'&&(!states.beforeExit||states.beforeExit.__default)){states.beforeExit=(0,_assign2.default)({},afterEnter);states.beforeExit.__default=true;_this63.attr('states',states);}});deferred.promise.then(function(){if(!onbyone){_this63.attr(afterEnter);_this63.__attr.quietSet('state',toState||state);}return _this63;});ret=deferred;}else{var rs=_this63[_resolveState];if(rs){rs.resolve();rs.promise.then(function(){_this63.attr(afterEnter);return _exit2.call(_this63);});ret=rs;}else{ret=_exit2.call(_this63);_this63.attr(afterEnter);}}if(_this63.children){var exitMode=_this63.attr('exitMode');if(exitMode==='onebyone'||exitMode==='onebyone-reverse'){var promise=_promise2.default.resolve(_this63);var resolved=false;var children=_this63.children;if(exitMode==='onebyone-reverse'){children=[].concat((0,_toConsumableArray4.default)(children)).reverse();}var currentTask=null;children.forEach(function(c){var states=c.attr('states');if(states&&(states.beforeExit||states.afterExit)){if(!states.beforeExit||states.beforeExit.__default){states.beforeExit=(0,_assign2.default)({},afterEnter);states.beforeExit.__default=true;c.attr('states',states);}}var toState=c.attr('state');c.attr('state','beforeExit');promise=promise.then(function(){var d=c.exit(toState,true);if(d.promise){currentTask=d;if(resolved&&d.resolve)d.resolve();return d.promise;}return d;});c.__toState=toState;});promise=promise.then(function(){var p=ret.promise||_promise2.default.resolve(_this63);currentTask=ret;return p.then(function(){_this63.children.forEach(function(c){var states=c.attr('states');c.attr(states.afterEnter);c.__attr.quietSet('state',c.__toState);delete c.__toState;});});});return{promise:promise,resolve:function resolve(){if(currentTask&&currentTask.resolve)currentTask.resolve();resolved=true;}};}var _deferred2=doActions(ret,_this63,'exit');if(_deferred2)return _deferred2;}return ret;};if(this[_enter]&&this[_enter].promise){var resolved=false;this[_enter].resolve();var promise=this[_enter].promise.then(function(){var deferred=_exit();if(resolved&&deferred.resolve){deferred.resolve();}return deferred.promise;});return{promise:promise,resolve:function resolve(){resolved=true;}};}return _exit();}});/***/},/* 58 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _attr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59);/* harmony import */var _flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(60);/* harmony import */var _core_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(47);_core_group__WEBPACK_IMPORTED_MODULE_2__["default"].applyLayout('flex',_flex__WEBPACK_IMPORTED_MODULE_1__);/***/},/* 59 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _core_baseattr__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(32);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);/*
  BaseAttr.addAttributes({
    flexGrow: {
      decorators: [],
      value: ...,
      set: ...,
      get: ...,
    },
  });
*/var relayout=true,reflow=true,cache=true;_core_baseattr__WEBPACK_IMPORTED_MODULE_0__["default"].addAttributes({flexGrow:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:0},flexShrink:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseFloat),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:1},flexBasis:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout,reflow:reflow})],value:'auto'},order:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseValue"])(parseInt),Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({cache:cache,relayout:relayout})],value:0},alignSelf:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({cache:cache,relayout:relayout})],value:''},flex:{set:function set(val){this.clearFlow();if(val!=null&&val!=='initial'){if(val==='auto'){this.flexGrow=1;this.flexShrink=1;this.flexBasis='auto';}else if(val==='none'){this.flexGrow=0;this.flexShrink=0;this.flexBasis='auto';}else if(typeof val==='string'){var values=val.trim().split(/\s+/);this.flexGrow=values[0];this.flexShrink=values[1];this.flexBasis=values[2];}else{this.flexGrow=val;this.flexShrink=1;this.flexBasis='auto';}}else{this.flexGrow=0;this.flexShrink=1;this.flexBasis='auto';}},get:function get(){return this.flexGrow+' '+this.flexShrink+' '+this.flexBasis;}}});/***/},/* 60 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"attrs",function(){return attrs;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"relayout",function(){return relayout;});/* harmony import */var sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(61);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);var attrs={flexDirection:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:'row'},flexWrap:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:'nowrap'},justifyContent:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:'flex-start'},alignItems:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:'stretch'},alignContent:{decorators:[Object(_utils__WEBPACK_IMPORTED_MODULE_1__["attr"])({relayout:relayout})],value:'stretch'}};function relayout(containerSprite,itemsSprite){itemsSprite.sort(function(a,b){var orderA=a.attributes.order|0,orderB=b.attributes.order|0;if(orderA!==orderB){return orderA-orderB;}return a.zOrder-b.zOrder;});var container=sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__["Node"].create({width:containerSprite.attrSize[0],height:containerSprite.attrSize[1],flexDirection:containerSprite.attributes.flexDirection,alignItems:containerSprite.attributes.alignItems,justifyContent:containerSprite.attributes.justifyContent,flexWrap:containerSprite.attributes.flexWrap,alignContent:containerSprite.attributes.alignContent});itemsSprite.forEach(function(item){var _item$attr=item.attr('margin'),_item$attr2=(0,_slicedToArray4.default)(_item$attr,4),marginTop=_item$attr2[0],marginRight=_item$attr2[1],marginBottom=_item$attr2[2],marginLeft=_item$attr2[3];var _item$attr3=item.attr('padding'),_item$attr4=(0,_slicedToArray4.default)(_item$attr3,4),paddingTop=_item$attr4[0],paddingRight=_item$attr4[1],paddingBottom=_item$attr4[2],paddingLeft=_item$attr4[3];var borderWidth=item.attr('border').width;var _item$attrSize=(0,_slicedToArray4.default)(item.attrSize,2),width=_item$attrSize[0],height=_item$attrSize[1];var config={width:width,height:height,offsetWidth:item.contentSize[0],offsetHeight:item.contentSize[1],minWidth:item.attributes.minWidth,maxWidth:item.attributes.maxWidth,minHeight:item.attributes.minHeight,maxHeight:item.attributes.maxHeight,boxSizing:item.attr('boxSizing'),marginTop:marginTop,marginRight:marginRight,marginBottom:marginBottom,marginLeft:marginLeft,paddingTop:paddingTop,paddingRight:paddingRight,paddingBottom:paddingBottom,paddingLeft:paddingLeft,borderTop:borderWidth,borderRight:borderWidth,borderBottom:borderWidth,borderLeft:borderWidth,alignSelf:item.attributes.alignSelf,// flex: item.attributes.flex,
flexBasis:item.attributes.flexBasis,flexGrow:item.attributes.flexGrow,flexShrink:item.attributes.flexShrink};var node=sprite_flex_layout__WEBPACK_IMPORTED_MODULE_0__["Node"].create(config);container.appendChild(node);});container.calculateLayout();var layout=container.getAllComputedLayout();containerSprite.attr({layoutWidth:layout.width,layoutHeight:layout.height});layout.children.forEach(function(item,index){var sprite=itemsSprite[index];var _sprite$originalRect=(0,_slicedToArray4.default)(sprite.originalRect,2),ox=_sprite$originalRect[0],oy=_sprite$originalRect[1];// fix anchor
sprite.attr({layoutX:item.left-ox,layoutY:item.top-oy,layoutWidth:item.width,layoutHeight:item.height,layoutRight:item.left+item.width,layoutBottom:item.top+item.height});});}/***/},/* 61 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _node__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Node",function(){return _node__WEBPACK_IMPORTED_MODULE_0__["default"];});/***/},/* 62 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(63);/* harmony import */var _compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(65);/* harmony import */var _util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64);var id=1;var Node=function(){function Node(config){(0,_classCallCheck4.default)(this,Node);this.config=new _config__WEBPACK_IMPORTED_MODULE_0__["default"](config,this);this.parent=null;this.children=[];this.id=id++;}(0,_createClass4.default)(Node,[{key:'appendChild',value:function appendChild(node){if(!(node instanceof Node)){throw new Error('appended Child must be instance of Node');}node.parent=this;this.children.push(node);return this;}},{key:'calculateLayout',value:function calculateLayout(width,height,direction){if(width)this.width=width;if(height)this.height=height;if(direction)this.flexDirection=direction;var instance=new _compose__WEBPACK_IMPORTED_MODULE_1__["default"](this);instance.compose();}},{key:'getComputedLayout',value:function getComputedLayout(){var _this64=this;var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var width=this.computedWidth;if(width===undefined){width=this.width;}var height=this.computedHeight;if(height===undefined){height=this.height;}var layout={left:this.left||0,top:this.top||0,width:width,height:height};props.forEach(function(item){layout[item]=_this64[item];});return layout;}},{key:'getAllComputedLayout',value:function getAllComputedLayout(props){var layout=this.getComputedLayout();layout.children=this.children.sort(function(a,b){return a.id>b.id?1:-1;}).map(function(item){return item.getComputedLayout(props);});return layout;}}],[{key:'create',value:function create(config){return new Node(config);}}]);return Node;}();_util__WEBPACK_IMPORTED_MODULE_2__["flexProperties"].forEach(function(property){(0,_defineProperty6.default)(Node.prototype,property,{get:function get(){return this.config[property];},set:function set(value){this.config[property]=value;}});});/* harmony default export */__webpack_exports__["default"]=Node;/***/},/* 63 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64);var Config=function(){function Config(){var _this65=this;var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var node=arguments[1];(0,_classCallCheck4.default)(this,Config);this.config={};this.node=node;(0,_keys2.default)(config).forEach(function(item){if(_util__WEBPACK_IMPORTED_MODULE_0__["flexProperties"].indexOf(item)===-1){throw new Error('config '+item+' is not valid');}_this65[item]=config[item];});}(0,_createClass4.default)(Config,[{key:'parse',value:function parse(){this.parseBorder();this.parsePadding();this.parseMargin();this.parseFlex();this.parseFlexFlow();this.parseFlexProps();this.parseSize();this.parseComputedWidth();this.parseComputedHeight();this.parseLayoutWidth();this.parseLayoutHeight();}},{key:'parseNumberValue',value:function parseNumberValue(value,parentValue){if(value==='auto'||typeof value==='number')return value;if(!value)return 0;var percentValue=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parsePercentValue"])(value);if(typeof percentValue==='number'){if(typeof parentValue==='string'){parentValue=this.node.parent[parentValue];}value=percentValue*parentValue;}else if(/^[\d.-]+$/.test(value)){value=parseFloat(value,10);}else{throw new Error(value+' is not a number');}return value;}},{key:'parseBorder',value:function parseBorder(){var _this66=this;var border=this.border||[0,0,0,0];if(border){border=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(border).map(function(item){return _this66.parseNumberValue(item);});}var borderList=['borderTop','borderRight','borderBottom','borderLeft'];this.border=borderList.map(function(item,index){_this66[item]=_this66.parseNumberValue(_this66[item])||border[index];if(_this66[item]<0||_this66[item]==='auto'){throw new Error(item+':'+_this66[item]+' is not valid');}return _this66[item];});}},{key:'parsePadding',value:function parsePadding(){var _this67=this;var padding=this.padding||[0,0,0,0];if(padding){padding=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(padding).map(function(item){return _this67.parseNumberValue(item,'width');});}var paddingList=['paddingTop','paddingRight','paddingBottom','paddingLeft'];this.padding=paddingList.map(function(item,index){_this67[item]=_this67.parseNumberValue(_this67[item],'width')||padding[index];if(_this67[item]<0||_this67[item]==='auto'){throw new Error(item+':'+_this67[item]+' is not valid');}return _this67[item];});}},{key:'parseMargin',value:function parseMargin(){var _this68=this;var margin=this.margin||[0,0,0,0];if(margin){margin=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseCombineValue"])(margin).map(function(item){return _this68.parseNumberValue(item,'width');});}var marginList=['marginTop','marginRight','marginBottom','marginLeft'];this.margin=marginList.map(function(item,index){_this68[item]=_this68.parseNumberValue(_this68[item],'width')||margin[index];return _this68[item];});}},{key:'parseFlex',value:function parseFlex(){var flex=this.flex;if(flex){if(typeof flex==='number'){this.flexGrow=this.flexGrow||flex;}else{var _flex$split=flex.split(/\s+/),_flex$split2=(0,_slicedToArray4.default)(_flex$split,3),flexFlow=_flex$split2[0],flexShrink=_flex$split2[1],_flexBasis=_flex$split2[2];if(!this.flexFlow){this.flexFlow=flexFlow;}if(!this.flexShrink){this.flexShrink=flexShrink;}if(!this.flexBasis){this.flexBasis=_flexBasis;}}}this.flexShrink=parseFloat(this.flexShrink)||1;this.flexGrow=parseFloat(this.flexGrow)||0;var flexBasis=this.flexBasis;if(flexBasis){var flexDirection=this.node.parent.flexDirection;var isRow=flexDirection==='row'||flexDirection==='row-reverse';flexBasis=this.parseNumberValue(flexBasis,isRow?'width':'height');this.flexBasis=flexBasis;}else if(this.flexBasis===''){this.flexBasis=undefined;}}},{key:'parseSize',value:function parseSize(){var _this69=this;var widths=['width','minWidth','maxWidth'];widths.forEach(function(item){_this69[item]=_this69.parseNumberValue(_this69[item],'width')||0;});if(this.width&&!this.offsetWidth){this.offsetWidth=this.width;}var heights=['height','minHeight','maxHeight'];heights.forEach(function(item){_this69[item]=_this69.parseNumberValue(_this69[item],'height')||0;});if(this.height&&!this.offsetHeight){this.offsetHeight=this.height;}}},{key:'parseFlexFlow',value:function parseFlexFlow(){var _this70=this;var flexFlow=this.flexFlow;if(flexFlow){flexFlow.split(/\s+/).forEach(function(item){if(_util__WEBPACK_IMPORTED_MODULE_0__["flexDirectionValues"].indexOf(item)>-1){_this70.flexDirection=item;}else if(_util__WEBPACK_IMPORTED_MODULE_0__["flexWrapValues"].indexOf(item)>-1){_this70.flexWrap=item;}else{throw new Error('FlexFlow: '+flexFlow+' is not valid');}});}}},{key:'parseFlexProps',value:function parseFlexProps(){var _this71=this;var props={flexDirection:_util__WEBPACK_IMPORTED_MODULE_0__["flexDirectionValues"],flexWrap:_util__WEBPACK_IMPORTED_MODULE_0__["flexWrapValues"],justifyContent:_util__WEBPACK_IMPORTED_MODULE_0__["justifyContentValues"],alignItems:_util__WEBPACK_IMPORTED_MODULE_0__["alignItemsValues"],alignSelf:_util__WEBPACK_IMPORTED_MODULE_0__["alignSelfValues"],alignContent:_util__WEBPACK_IMPORTED_MODULE_0__["alignContentValues"]};(0,_keys2.default)(props).forEach(function(item){if(_this71[item]){var allowValues=props[item];if(allowValues.indexOf(_this71[item])===-1){throw new Error(item+' value:'+_this71[item]+' is not valid');}}else{_this71[item]=props[item][0];}});}},{key:'getFlexBasis',value:function getFlexBasis(){var type=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'width';var flexDirection=this.node.parent.flexDirection;var flexBasis=this.flexBasis;if(flexBasis!==undefined&&flexBasis!=='auto'){var isRow=flexDirection==='row'||flexDirection==='row-reverse';if(type==='width'&&isRow||type==='height'&&!isRow){return this.parseNumberValue(flexBasis,isRow?'width':'height');}}}},{key:'parseComputedWidth',value:function parseComputedWidth(){var width=this.getFlexBasis('width');if(width===undefined){width=this.offsetWidth||0;}var minWidth=this.minWidth;var maxWidth=this.maxWidth;if(maxWidth&&minWidth&&maxWidth<minWidth){maxWidth=minWidth;}if(minWidth&&width<minWidth){width=minWidth;}if(maxWidth&&width>maxWidth){width=maxWidth;}this.config.computedWidth=width;}},{key:'parseLayoutWidth',value:function parseLayoutWidth(){var _this72=this;var width=this.computedWidth;var marginLeft=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginLeft);var marginRight=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginRight);width+=marginLeft+marginRight;if(this.boxSizing!=='border-box'){var props=['borderLeft','borderRight','paddingLeft','paddingRight'];props.forEach(function(item){width+=_this72[item]||0;});}this.layoutWidth=width;}},{key:'parseComputedHeight',value:function parseComputedHeight(){var height=this.getFlexBasis('height');if(height===undefined){height=this.offsetHeight||0;}var minHeight=this.minHeight;var maxHeight=this.maxHeight;if(maxHeight&&minHeight&&maxHeight<minHeight){maxHeight=minHeight;}if(minHeight&&height<minHeight){height=minHeight;}if(maxHeight&&height>maxHeight){height=maxHeight;}this.config.computedHeight=height;}},{key:'parseLayoutHeight',value:function parseLayoutHeight(){var _this73=this;var height=this.computedHeight;var marginTop=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginTop);var marginBottom=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(this.marginBottom);height+=marginTop+marginBottom;if(this.boxSizing!=='border-box'){var props=['borderTop','borderBottom','paddingTop','paddingBottom'];props.forEach(function(item){height+=_this73[item]||0;});}this.layoutHeight=height;}},{key:'computedWidth',get:function get(){return this.config.computedWidth;},set:function set(value){this.config.computedWidth=value;this.parseLayoutWidth();}},{key:'computedHeight',get:function get(){return this.config.computedHeight;},set:function set(value){this.config.computedHeight=value;this.parseLayoutHeight();}}]);return Config;}();/* harmony default export */__webpack_exports__["default"]=Config;/***/},/* 64 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"flexProperties",function(){return flexProperties;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"flexDirectionValues",function(){return flexDirectionValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"flexWrapValues",function(){return flexWrapValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"justifyContentValues",function(){return justifyContentValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"alignItemsValues",function(){return alignItemsValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"alignSelfValues",function(){return alignSelfValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"alignContentValues",function(){return alignContentValues;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseCombineValue",function(){return parseCombineValue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parsePercentValue",function(){return parsePercentValue;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseSpaceBetween",function(){return parseSpaceBetween;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getProp",function(){return getProp;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"exchangeFlexProp",function(){return exchangeFlexProp;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parseMarginAuto",function(){return parseMarginAuto;});var flexProperties=['flex','flexDirection','flexWrap','flexFlow','justifyContent','alignContent','alignItems','alignSelf','flexShrink','flexBasis','flexGrow','maxHeight','maxWidth','minHeight','minWidth','border','borderTop','borderRight','borderBottom','borderLeft','height','width','margin','marginTop','marginRight','marginBottom','marginLeft','padding','paddingTop','paddingRight','paddingBottom','paddingLeft','boxSizing','layoutWidth','layoutHeight','offsetWidth','offsetHeight','computedWidth','computedHeight','order'];var flexDirectionValues=['row','row-reverse','column','column-reverse'];var flexWrapValues=['nowrap','wrap','wrap-reverse'];var justifyContentValues=['flex-start','flex-end','center','space-between','space-around','space-evenly'];var alignItemsValues=['stretch','flex-start','flex-end','center','baseline'];var alignSelfValues=['auto','stretch','flex-start','flex-end','center','baseline'];var alignContentValues=['stretch','flex-start','flex-end','center','space-between','space-around','space-evenly'];function parseCombineValue(value){if(!Array.isArray(value)){value=[value,value,value,value];}else if(value.length===1){value=[value[0],value[0],value[0],value[0]];}else if(value.length===2){value=[value[0],value[1],value[0],value[1]];}else if(value.length===3){value[3]=value[1];}return value;}/**
 * parse percent value
 * @param {String} value percent value, like `10%`
 */function parsePercentValue(value){if(!/%$/.test(value))return false;return 0.01*parseFloat(value,10);}/**
 * parse space between items
 * @param {Number} space space size
 * @param {String} type flex-start/flex-end/...
 * @param {Number} num array size
 */function parseSpaceBetween(space,type,num){var marginSize=[];var fillFull=function fillFull(){var size=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;for(var i=marginSize.length;i<num+1;i++){marginSize[i]=size;}};if(space<0){if(type==='space-between'||type==='stretch'){type='flex-start';}else if(type==='space-around'||type==='space-evenly'){type='center';}}if(type==='flex-end'){marginSize[0]=space;fillFull();}else if(type==='center'){var itemSize=space/2;marginSize[0]=itemSize;fillFull();marginSize[num]=itemSize;}else if(type==='space-between'){marginSize[0]=0;if(num===1){fillFull(space);}else{fillFull(space/(num-1));marginSize[num]=0;}}else if(type==='space-between-reverse'){if(num===1){marginSize[0]=space;fillFull(0);}else{marginSize[0]=0;fillFull(space/(num-1));marginSize[num]=0;}}else if(type==='space-around'){var _itemSize=space/num;marginSize[0]=_itemSize/2;fillFull(_itemSize);marginSize[num]=_itemSize/2;}else if(type==='space-evenly'){var _itemSize2=space/(num+1);fillFull(_itemSize2);}else if(type==='stretch'){var _itemSize3=space/num;marginSize[0]=0;fillFull(_itemSize3);}else{// flex-start
fillFull();}return marginSize;}function getProp(flexDirection){if(flexDirection==='column'||flexDirection==='column-reverse'){return{mainLayoutSize:'layoutHeight',crossLayoutSize:'layoutWidth',mainSize:'height',mainComputedSize:'computedHeight',crossSize:'width',crossComputedSize:'computedWidth',mainPos:'top',mainMaxSize:'maxHeight',mainMinSize:'minHeight',crossPos:'left',crossMaxSize:'maxWidth',mainMarginStart:'marginTop',mainMarginEnd:'marginBottom',crossMarginStart:'marginLeft',crossMarginEnd:'marginRight'};}return{mainLayoutSize:'layoutWidth',crossLayoutSize:'layoutHeight',mainSize:'width',mainComputedSize:'computedWidth',crossSize:'height',crossComputedSize:'computedHeight',mainPos:'left',mainMaxSize:'maxWidth',mainMinSize:'minWidth',crossMaxSize:'maxHeight',crossPos:'top',mainMarginStart:'marginLeft',mainMarginEnd:'marginRight',crossMarginStart:'marginTop',crossMarginEnd:'marginBottom'};}function exchangeFlexProp(prop){if(prop==='flex-start')return'flex-end';if(prop==='flex-end')return'flex-start';if(prop==='space-between')return'space-between-reverse';return prop;}function parseMarginAuto(value){var autoValue=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;if(value==='auto')return autoValue;return value||0;}/***/},/* 65 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _flexLine__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66);/* harmony import */var _util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64);var Compose=function(){function Compose(container){var _this74=this;(0,_classCallCheck4.default)(this,Compose);this.container=container;var props=Object(_util__WEBPACK_IMPORTED_MODULE_1__["getProp"])(container.flexDirection);(0,_keys2.default)(props).forEach(function(prop){_this74[prop]=props[prop];});container.children.forEach(function(item){item.config.parse();});container.children=this.parseOrder(container.children);this.flexLines=this.parseFlexLines(container.children);}(0,_createClass4.default)(Compose,[{key:'parseOrder',value:function parseOrder(items){return items.sort(function(a,b){var ar=a.order|0;var br=b.order|0;if(a.order&&b.order)return ar>br?1:-1;if(a.order)return ar>0?1:-1;if(b.order)return br>0?-1:1;return a.id>b.id?1:-1;});}/**
   * parse flex lines by flexWrap
   * @param {Array} items flex items
   */},{key:'parseFlexLines',value:function parseFlexLines(items){var _this75=this;var wrap=this.container.flexWrap;var flexDirection=this.container.flexDirection;var containerPropValue=this.container[this.mainSize];var lines=[];if(wrap==='nowrap'||!containerPropValue){lines=[items];}else{var line=[];var propValue=0;items.forEach(function(item){var value=item[_this75.mainLayoutSize];if(propValue+value>containerPropValue&&line.length){lines.push(line);propValue=0;line=[];}propValue+=value;line.push(item);});if(line.length){lines.push(line);line=[];}if(wrap==='wrap-reverse'){lines=lines.reverse();}}if(flexDirection==='row-reverse'||flexDirection==='column-reverse'){lines=lines.map(function(line){return line.reverse();});}lines=lines.map(function(line){return new _flexLine__WEBPACK_IMPORTED_MODULE_0__["default"](line,_this75.container);});return lines;}/**
   * parse align-content on multiline flex lines
   */},{key:'parseAlignContent',value:function parseAlignContent(){var alignContent=this.container.alignContent;var crossAxisSize=this.container[this.crossSize];var space=0;var lineLength=this.flexLines.length;if(crossAxisSize){var linesCrossAxisSize=0;this.flexLines.forEach(function(line){linesCrossAxisSize+=line.crossAxisSize;});// margin between lines
space=crossAxisSize-linesCrossAxisSize;}var linesMarginSize=[];if(lineLength===1){this.container.alignContent='stretch';linesMarginSize=[0,space];}else{if(this.container.flexWrap==='wrap-reverse'){alignContent=Object(_util__WEBPACK_IMPORTED_MODULE_1__["exchangeFlexProp"])(alignContent);}linesMarginSize=Object(_util__WEBPACK_IMPORTED_MODULE_1__["parseSpaceBetween"])(space,alignContent,lineLength);}var crossPosition=0;this.flexLines.forEach(function(line,index){crossPosition+=linesMarginSize[index]||0;line.crossPosition=crossPosition;line.crossSpace=linesMarginSize[index+1]||0;crossPosition+=line.crossAxisSize;});}},{key:'parseAlignSelf',value:function parseAlignSelf(){this.flexLines.forEach(function(line){line.parseAlignSelf(line.crossAxisSize);});}},{key:'computeContainerSize',value:function computeContainerSize(){var line=this.flexLines[0];if(!this.container[this.crossSize]){this.container[this.crossSize]=line.crossAxisSize;}if(!this.container[this.mainSize]){this.container[this.mainSize]=line.mainAxisSize;}}},{key:'parseMainAxis',value:function parseMainAxis(){this.flexLines.forEach(function(line){line.parseMainAxis();});}},{key:'compose',value:function compose(){this.parseAlignContent();this.parseAlignSelf();this.parseMainAxis();this.computeContainerSize();}}]);return Compose;}();/* harmony default export */__webpack_exports__["default"]=Compose;/***/},/* 66 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _util__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(64);var CROSS_AXIS_SIZE=(0,_symbol2.default)('crossAxisSize');var FlexLine=function(){function FlexLine(items,container){var _this76=this;(0,_classCallCheck4.default)(this,FlexLine);this.items=items;this.container=container;this.flexDirection=container.flexDirection;this.crossPosition=0;this.crossSpace=0;var props=Object(_util__WEBPACK_IMPORTED_MODULE_0__["getProp"])(this.flexDirection);(0,_keys2.default)(props).forEach(function(prop){_this76[prop]=props[prop];});}/**
   * get main axis size base on flex direction
   */(0,_createClass4.default)(FlexLine,[{key:'parseAutoCrossMargin',value:function parseAutoCrossMargin(item,crossSize){var startAuto=item[this.crossMarginStart]==='auto';var endAuto=item[this.crossMarginEnd]==='auto';if(startAuto||endAuto){if(this.container.alignContent==='stretch'){crossSize+=this.crossSpace;}var layoutSize=item[this.crossLayoutSize];var size=0;if(startAuto&&endAuto){size=(crossSize-layoutSize)/2;}else if(startAuto){size=crossSize-layoutSize;}else{size=item[this.crossMarginStart];}item[this.crossPos]=this.crossPosition+size;return true;}return false;}},{key:'parseItemAlignSelf',value:function parseItemAlignSelf(item,crossSize){// has auto value in margin on cross axis
if(this.parseAutoCrossMargin(item,crossSize))return;var alignSelf=item.alignSelf;if(alignSelf==='auto'){alignSelf=item.parent.alignItems;}var flexWrap=this.container.flexWrap;if(flexWrap==='wrap-reverse'){alignSelf=Object(_util__WEBPACK_IMPORTED_MODULE_0__["exchangeFlexProp"])(alignSelf);}var layoutSize=item[this.crossLayoutSize];var itemCrossSize=item[this.crossSize];var crossSpace=this.crossSpace;if(this.container.alignContent!=='stretch'){crossSpace=0;}var crossPosition=0;switch(alignSelf){case'flex-end':crossPosition=crossSpace+crossSize-layoutSize;break;case'center':crossPosition=(crossSpace+crossSize-layoutSize)/2;break;case'stretch':// stretch item cross size
if(!itemCrossSize){var maxSize=item[this.crossMaxSize]||0;var caculateSize=this.crossAxisSize-item[this.crossLayoutSize]+item[this.crossComputedSize];if(this.container.alignContent==='stretch'){caculateSize+=this.crossSpace;}if(maxSize){item[this.crossComputedSize]=Math.min(caculateSize,maxSize);}else{item[this.crossComputedSize]=caculateSize;}}else if(flexWrap==='wrap-reverse'){crossPosition=crossSpace+crossSize-layoutSize;}break;case'baseline':throw new Error('align-self:baseline is not support');default:// default is flex-start
break;}var pos=this.crossPosition+crossPosition;item[this.crossPos]=pos+Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[this.crossMarginStart]);}},{key:'parseAlignSelf',value:function parseAlignSelf(){var _this77=this;var crossSize=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;this.items.forEach(function(item){_this77.parseItemAlignSelf(item,crossSize);});}},{key:'hasMarginAutoInMainAxis',value:function hasMarginAutoInMainAxis(){var _this78=this;return this.items.some(function(item){return item[_this78.mainMarginStart]==='auto'||item[_this78.mainMarginEnd]==='auto';});}},{key:'hasFlexGrow',value:function hasFlexGrow(){return this.items.some(function(item){return item.flexGrow;});}},{key:'parseByFlexGrow',value:function parseByFlexGrow(space){var _this79=this;var grow=0;var max=0;var items=[];this.items.forEach(function(item){grow+=item.flexGrow||0;items.push({max:item[_this79.mainMaxSize],grow:item.flexGrow});if(item[_this79.mainMaxSize])max++;});var _loop3=function _loop3(){var itemSpace=space/Math.max(grow,1);if(!max){items.forEach(function(item,index){if(item.grow){var increSpace=item.grow*itemSpace;_this79.items[index][_this79.mainComputedSize]+=increSpace;space-=increSpace;}});return'break';}var flag=false;items.forEach(function(item,index){if(item.max&&item.grow){var leaveSpace=item.max-_this79.items[index][_this79.mainComputedSize];if(itemSpace*item.grow>leaveSpace){_this79.items[index][_this79.mainComputedSize]=item.max;space-=leaveSpace;grow-=item.grow;delete item.max;delete item.grow;flag=true;}}});if(!grow)return'break';if(!flag){max=0;}};while(true){var _ret4=_loop3();if(_ret4==='break')break;}return space;}},{key:'parseByMarginAuto',value:function parseByMarginAuto(space){var _this80=this;var marginAutoNum=0;this.items.forEach(function(item){if(item[_this80.mainMarginStart]==='auto'){marginAutoNum++;}if(item[_this80.mainMarginEnd]==='auto'){marginAutoNum++;}});var itemSpace=space/marginAutoNum;var pos=0;this.items.forEach(function(item){pos+=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[_this80.mainMarginStart],itemSpace);item[_this80.mainPos]=pos;pos+=item[_this80.mainLayoutSize]-Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[_this80.mainMarginStart]);pos+=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[_this80.mainMarginEnd],itemSpace)-Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[_this80.mainMarginEnd]);});}},{key:'parseJustifyContent',value:function parseJustifyContent(){var justifyContent=this.container.justifyContent;var flexDirection=this.container.flexDirection;if(flexDirection==='row-reverse'||flexDirection==='column-reverse'){justifyContent=Object(_util__WEBPACK_IMPORTED_MODULE_0__["exchangeFlexProp"])(justifyContent);}return justifyContent;}},{key:'parseByJustifyContentPositive',value:function parseByJustifyContentPositive(space){return this.parseByJustifyContentSpace(space);}},{key:'parseByJustifyContentSpace',value:function parseByJustifyContentSpace(space){var _this81=this;var justifyContent=this.parseJustifyContent();var marginSizes=Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseSpaceBetween"])(space,justifyContent,this.items.length);var pos=0;this.items.forEach(function(item,index){pos+=marginSizes[index]||0;item[_this81.mainPos]=pos+Object(_util__WEBPACK_IMPORTED_MODULE_0__["parseMarginAuto"])(item[_this81.mainMarginStart]);pos+=item[_this81.mainLayoutSize];});}},{key:'parseByJustifyContentNegative',value:function parseByJustifyContentNegative(space){var _this82=this;var shrink=0;var min=0;var items=[];this.items.forEach(function(item){var shrinkItem=item.flexShrink*item[_this82.mainComputedSize];shrink+=shrinkItem;items.push({min:item[_this82.mainMinSize],shrink:shrinkItem});if(item[_this82.mainMinSize])min++;});var _loop4=function _loop4(){var itemSpace=(0-space)/shrink;if(!min){items.forEach(function(item,index){if(item.shrink){var decreSpace=item.shrink*itemSpace;var size=_this82.items[index][_this82.mainComputedSize]-decreSpace;if(size>0){_this82.items[index][_this82.mainComputedSize]-=decreSpace;space+=decreSpace;}else{_this82.items[index][_this82.mainComputedSize]=1;space+=decreSpace+size;}}});return'break';}var flag=false;items.forEach(function(item,index){if(item.min){var leaveSpace=_this82.items[index][_this82.mainComputedSize]-item.min;if(itemSpace*item.shrink>leaveSpace){_this82.items[index][_this82.mainComputedSize]=item.min;space+=leaveSpace;shrink-=item.shrink;delete item.min;delete item.shrink;flag=true;}}});if(!flag){min=0;}};while(true){var _ret5=_loop4();if(_ret5==='break')break;}this.parseByJustifyContentSpace(space);}},{key:'parseMainAxis',value:function parseMainAxis(){var _this83=this;var mainSize=this.container[this.mainSize];// container size is not set
if(!mainSize){var pos=0;this.items.forEach(function(item){item[_this83.mainPos]=pos;pos+=item[_this83.mainLayoutSize];});return;}var space=mainSize-this.mainAxisSize;if(space>0){if(this.hasFlexGrow()){space=this.parseByFlexGrow(space);}if(this.hasMarginAutoInMainAxis()){return this.parseByMarginAuto(space);}return this.parseByJustifyContentPositive(space);}return this.parseByJustifyContentNegative(space);}},{key:'mainAxisSize',get:function get(){var _this84=this;var value=0;this.items.forEach(function(item){value+=item[_this84.mainLayoutSize]||0;});return value;}/**
   * get cross axis size based on flex direction
   */},{key:'crossAxisSize',get:function get(){var _this85=this;if(this[CROSS_AXIS_SIZE])return this[CROSS_AXIS_SIZE];var values=this.items.map(function(item){return item[_this85.crossLayoutSize]||0;});var result=Math.max.apply(Math,(0,_toConsumableArray4.default)(values));this[CROSS_AXIS_SIZE]=result;return result;}}]);return FlexLine;}();/* harmony default export */__webpack_exports__["default"]=FlexLine;/***/},/* 67 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _selector__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelector",function(){return _selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"querySelectorAll",function(){return _selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"];});/* harmony import */var _nodetype__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(99);/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"registerNodeType",function(){return _nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createNode",function(){return _nodetype__WEBPACK_IMPORTED_MODULE_1__["createNode"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"createElement",function(){return _nodetype__WEBPACK_IMPORTED_MODULE_1__["createElement"];});/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"isValidNodeType",function(){return _nodetype__WEBPACK_IMPORTED_MODULE_1__["isValidNodeType"];});/* harmony import */var _core_basenode__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34);/* harmony import */var _core_basesprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(31);/* harmony import */var _core_sprite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(36);/* harmony import */var _core_label__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(37);/* harmony import */var _core_path__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(49);/* harmony import */var _core_group__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(47);/* harmony import */var _core_layer__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(43);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('node',_core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"]);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('basesprite',_core_basesprite__WEBPACK_IMPORTED_MODULE_3__["default"]);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('sprite',_core_sprite__WEBPACK_IMPORTED_MODULE_4__["default"]);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('label',_core_label__WEBPACK_IMPORTED_MODULE_5__["default"]);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('path',_core_path__WEBPACK_IMPORTED_MODULE_6__["default"]);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('group',_core_group__WEBPACK_IMPORTED_MODULE_7__["default"],true);Object(_nodetype__WEBPACK_IMPORTED_MODULE_1__["registerNodeType"])('layer',_core_layer__WEBPACK_IMPORTED_MODULE_8__["default"],true);(0,_defineProperties2.default)(_core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"].prototype,{attributes:{get:function get(){if(typeof Proxy==='function'){try{return new Proxy(this.__attr,{get:function get(target,prop){if(prop in target)return target[prop];return target.subject.attr(prop);},set:function set(target,prop,value){if(typeof prop!=='string'||/^__/.test(prop))target[prop]=value;else target.subject.attr(prop,value);return true;},deleteProperty:function deleteProperty(target,prop){if(typeof prop!=='string'||/^__/.test(prop))delete target[prop];else target.subject.attr(prop,null);return true;}});}catch(ex){return this.__attr;}}return this.__attr;}},style:{get:function get(){if(typeof Proxy==='function'){try{return new Proxy(this.__attr,{get:function get(target,prop){if(prop!=='id'&&prop!=='name'&&prop!=='class'){return target[prop];}return null;},set:function set(target,prop,value){if(prop!=='id'&&prop!=='name'&&prop!=='class'){target.subject.attr(prop,value);}return true;},deleteProperty:function deleteProperty(target,prop){if(prop!=='id'&&prop!=='name'&&prop!=='class'){target.subject.attr(prop,null);return true;}return false;}});}catch(ex){return this.__attr;}}return this.__attr;}},parentNode:{get:function get(){return this.parent;}},nextSibling:{get:function get(){return this.getNodeNearBy(1);}},previousSibling:{get:function get(){return this.getNodeNearBy(-1);}},nextElementSibling:{get:function get(){return this.getNodeNearBy(1,true);}},previousElementSibling:{get:function get(){return this.getNodeNearBy(-1,true);}}});(0,_assign2.default)(_core_basenode__WEBPACK_IMPORTED_MODULE_2__["default"].prototype,{addEventListener:function addEventListener(type,handler){return this.on(type,handler);},removeEventListener:function removeEventListener(type,handler){return this.off(type,handler);},getNodeNearBy:function getNodeNearBy(){var distance=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;var isElement=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(!this.parent)return null;if(distance===0)return this;var children=isElement?this.parent.children:this.parent.childNodes;var idx=children.indexOf(this);return children[idx+distance];},getAttribute:function getAttribute(prop){/* istanbul ignore next */return this.attr(prop);},setAttribute:function setAttribute(prop,val){/* istanbul ignore next */return this.attr(prop,val);},removeAttribute:function removeAttribute(prop){/* istanbul ignore next */return this.attr(prop,null);},contains:function contains(node){while(node&&this!==node){node=node.parent;}return!!node;}});/***/},/* 68 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"querySelectorAll",function(){return querySelectorAll;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"querySelector",function(){return querySelector;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isMatched",function(){return isMatched;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"compile",function(){return compile;});/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20);var CSSselect=__webpack_require__(69);CSSselect.pseudos.hover=function(next){return!!next.attr('__internal_state_hover_');};CSSselect.pseudos.active=function(next){return!!next.attr('__internal_state_active_');};function isTag(elem){return elem.nodeType===1||typeof elem.nodeType==='string';}function getChildren(elem){if(elem.scene_){return[elem.scene_];}if(elem.layer_){return[elem.layer_];}return(0,_from2.default)(elem.childNodes||[]);}function getParent(elem){if(elem.nodeType===1)return elem.parentElement;if(typeof elem.nodeType==='string'){return elem.parent||elem.canvas||elem.container;}}function removeSubsets(nodes){var idx=nodes.length,node=void 0,ancestor=void 0,replace=void 0;// Check if each node (or one of its ancestors) is already contained in the
// array.
while(--idx>-1){node=ancestor=nodes[idx];// Temporarily remove the node under consideration
nodes[idx]=null;replace=true;while(ancestor){if(nodes.indexOf(ancestor)>-1){replace=false;nodes.splice(idx,1);break;}ancestor=getParent(ancestor);}// If the node has been found to be unique, re-insert it.
if(replace){nodes[idx]=node;}}return nodes;}var adapter={isTag:isTag,existsOne:function existsOne(test,elems){return elems.some(function(elem){return isTag(elem)?test(elem)||adapter.existsOne(test,getChildren(elem)):false;});},getSiblings:function getSiblings(elem){var parent=getParent(elem);return parent&&getChildren(parent);},getChildren:getChildren,getParent:getParent,getAttributeValue:function getAttributeValue(elem,name){if(elem.nodeType===1&&name==='class'||name==='id'){return elem[name];}if(this.hasAttrib(elem,name)){var val=elem.attributes[name];if(Array.isArray(val)){val='['+val.join()+']';}return String(val);}},hasAttrib:function hasAttrib(elem,name){return elem.attributes[name]!=null;},removeSubsets:removeSubsets,getName:function getName(elem){return elem.tagName?elem.tagName.toLowerCase():null;},findOne:function findOne(test,arr){var elem=null;for(var i=0,l=arr.length;i<l&&!elem;i++){if(test(arr[i])){elem=arr[i];}else{var childs=getChildren(arr[i]);if(childs&&childs.length>0){elem=findOne(test,childs);}}}return elem;},findAll:function findAll(test,elems){var result=[];for(var i=0,j=elems.length;i<j;i++){if(!isTag(elems[i]))continue;// eslint-disable-line
if(test(elems[i]))result.push(elems[i]);var childs=getChildren(elems[i]);if(childs)result=result.concat(findAll(test,childs));}return result;},getText:function getText(elem){if(Array.isArray(elem))return elem.map(getText).join('');if(isTag(elem))return getText(getChildren(elem));if(elem.nodeType===3)return elem.nodeValue;if(typeof elem.nodeType==='string')return elem.text;return'';}};function resolveQuery(query){if(typeof query!=='string')return query;var matches=query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);if(matches){matches=matches.map(function(matched){var kv=matched.slice(1,-1).split('=');var color=Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseColorString"])(kv[1].replace(/['"]/g,''));return[matched,'['+kv[0]+'="'+color+'"]'];});matches.forEach(function(_ref65){var _ref66=(0,_slicedToArray4.default)(_ref65,2),r=_ref66[0],p=_ref66[1];query=query.replace(r,p);});}matches=query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);if(matches){matches=matches.map(function(matched){var kv=matched.slice(1,-1).split('=');var arr=kv[1].slice(2,-2).split(/,/g).map(function(k){return k.trim();});return[matched,'['+kv[0]+'="['+arr+']"]'];});matches.forEach(function(_ref67){var _ref68=(0,_slicedToArray4.default)(_ref67,2),r=_ref68[0],p=_ref68[1];query=query.replace(r,p);});}return query;}function querySelectorAll(query,elems){return CSSselect.selectAll(resolveQuery(query),elems,{adapter:adapter});}function querySelector(query,elems){return CSSselect.selectOne(resolveQuery(query),elems,{adapter:adapter});}function isMatched(elem,query){return CSSselect.is(elem,resolveQuery(query),{adapter:adapter});}function compile(query){return CSSselect.compile(resolveQuery(query),{adapter:adapter});}/***/},/* 69 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=CSSselect;var DomUtils=__webpack_require__(70);var falseFunc=__webpack_require__(88).falseFunc;var compileRaw=__webpack_require__(89);function wrapCompile(func){return function addAdapter(selector,options,context){options=options||{};options.adapter=options.adapter||DomUtils;return func(selector,options,context);};}var compile=wrapCompile(compileRaw);var compileUnsafe=wrapCompile(compileRaw.compileUnsafe);function getSelectorFunc(searchFunc){return function select(query,elems,options){options=options||{};options.adapter=options.adapter||DomUtils;if(typeof query!=="function"){query=compileUnsafe(query,options,elems);}if(query.shouldTestNextSiblings){elems=appendNextSiblings(options&&options.context||elems,options.adapter);}if(!Array.isArray(elems))elems=options.adapter.getChildren(elems);else elems=options.adapter.removeSubsets(elems);return searchFunc(query,elems,options);};}function getNextSiblings(elem,adapter){var siblings=adapter.getSiblings(elem);if(!Array.isArray(siblings))return[];siblings=siblings.slice(0);while(siblings.shift()!==elem){}return siblings;}function appendNextSiblings(elems,adapter){// Order matters because jQuery seems to check the children before the siblings
if(!Array.isArray(elems))elems=[elems];var newElems=elems.slice(0);for(var i=0,len=elems.length;i<len;i++){var nextSiblings=getNextSiblings(newElems[i],adapter);newElems.push.apply(newElems,nextSiblings);}return newElems;}var selectAll=getSelectorFunc(function selectAll(query,elems,options){return query===falseFunc||!elems||elems.length===0?[]:options.adapter.findAll(query,elems);});var selectOne=getSelectorFunc(function selectOne(query,elems,options){return query===falseFunc||!elems||elems.length===0?null:options.adapter.findOne(query,elems);});function is(elem,query,options){options=options||{};options.adapter=options.adapter||DomUtils;return(typeof query==="function"?query:compile(query,options))(elem);}/*
	the exported interface
*/function CSSselect(query,elems,options){return selectAll(query,elems,options);}CSSselect.compile=compile;CSSselect.filters=compileRaw.Pseudos.filters;CSSselect.pseudos=compileRaw.Pseudos.pseudos;CSSselect.selectAll=selectAll;CSSselect.selectOne=selectOne;CSSselect.is=is;//legacy methods (might be removed)
CSSselect.parse=compile;CSSselect.iterate=selectAll;//hooks
CSSselect._compileUnsafe=compileUnsafe;CSSselect._compileToken=compileRaw.compileToken;/***/},/* 70 *//***/function(module,exports,__webpack_require__){var DomUtils=module.exports;[__webpack_require__(71),__webpack_require__(83),__webpack_require__(84),__webpack_require__(85),__webpack_require__(86),__webpack_require__(87)].forEach(function(ext){(0,_keys2.default)(ext).forEach(function(key){DomUtils[key]=ext[key].bind(DomUtils);});});/***/},/* 71 *//***/function(module,exports,__webpack_require__){var ElementType=__webpack_require__(72),getOuterHTML=__webpack_require__(73),isTag=ElementType.isTag;module.exports={getInnerHTML:getInnerHTML,getOuterHTML:getOuterHTML,getText:getText};function getInnerHTML(elem,opts){return elem.children?elem.children.map(function(elem){return getOuterHTML(elem,opts);}).join(""):"";}function getText(elem){if(Array.isArray(elem))return elem.map(getText).join("");if(isTag(elem))return elem.name==="br"?"\n":getText(elem.children);if(elem.type===ElementType.CDATA)return getText(elem.children);if(elem.type===ElementType.Text)return elem.data;return"";}/***/},/* 72 *//***/function(module,exports){//Types of elements found in the DOM
module.exports={Text:"text",//Text
Directive:"directive",//<? ... ?>
Comment:"comment",//<!-- ... -->
Script:"script",//<script> tags
Style:"style",//<style> tags
Tag:"tag",//Any tag
CDATA:"cdata",//<![CDATA[ ... ]]>
Doctype:"doctype",isTag:function isTag(elem){return elem.type==="tag"||elem.type==="script"||elem.type==="style";}};/***/},/* 73 *//***/function(module,exports,__webpack_require__){/*
  Module dependencies
*/var ElementType=__webpack_require__(74);var entities=__webpack_require__(75);/*
  Boolean Attributes
*/var booleanAttributes={__proto__:null,allowfullscreen:true,async:true,autofocus:true,autoplay:true,checked:true,controls:true,default:true,defer:true,disabled:true,hidden:true,ismap:true,loop:true,multiple:true,muted:true,open:true,readonly:true,required:true,reversed:true,scoped:true,seamless:true,selected:true,typemustmatch:true};var unencodedElements={__proto__:null,style:true,script:true,xmp:true,iframe:true,noembed:true,noframes:true,plaintext:true,noscript:true};/*
  Format attributes
*/function formatAttrs(attributes,opts){if(!attributes)return;var output='',value;// Loop through the attributes
for(var key in attributes){value=attributes[key];if(output){output+=' ';}if(!value&&booleanAttributes[key]){output+=key;}else{output+=key+'="'+(opts.decodeEntities?entities.encodeXML(value):value)+'"';}}return output;}/*
  Self-enclosing tags (stolen from node-htmlparser)
*/var singleTag={__proto__:null,area:true,base:true,basefont:true,br:true,col:true,command:true,embed:true,frame:true,hr:true,img:true,input:true,isindex:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true};var render=module.exports=function(dom,opts){if(!Array.isArray(dom)&&!dom.cheerio)dom=[dom];opts=opts||{};var output='';for(var i=0;i<dom.length;i++){var elem=dom[i];if(elem.type==='root')output+=render(elem.children,opts);else if(ElementType.isTag(elem))output+=renderTag(elem,opts);else if(elem.type===ElementType.Directive)output+=renderDirective(elem);else if(elem.type===ElementType.Comment)output+=renderComment(elem);else if(elem.type===ElementType.CDATA)output+=renderCdata(elem);else output+=renderText(elem,opts);}return output;};function renderTag(elem,opts){// Handle SVG
if(elem.name==="svg")opts={decodeEntities:opts.decodeEntities,xmlMode:true};var tag='<'+elem.name,attribs=formatAttrs(elem.attribs,opts);if(attribs){tag+=' '+attribs;}if(opts.xmlMode&&(!elem.children||elem.children.length===0)){tag+='/>';}else{tag+='>';if(elem.children){tag+=render(elem.children,opts);}if(!singleTag[elem.name]||opts.xmlMode){tag+='</'+elem.name+'>';}}return tag;}function renderDirective(elem){return'<'+elem.data+'>';}function renderText(elem,opts){var data=elem.data||'';// if entities weren't decoded, no need to encode them back
if(opts.decodeEntities&&!(elem.parent&&elem.parent.name in unencodedElements)){data=entities.encodeXML(data);}return data;}function renderCdata(elem){return'<![CDATA['+elem.children[0].data+']]>';}function renderComment(elem){return'<!--'+elem.data+'-->';}/***/},/* 74 *//***/function(module,exports){//Types of elements found in the DOM
module.exports={Text:"text",//Text
Directive:"directive",//<? ... ?>
Comment:"comment",//<!-- ... -->
Script:"script",//<script> tags
Style:"style",//<style> tags
Tag:"tag",//Any tag
CDATA:"cdata",//<![CDATA[ ... ]]>
isTag:function isTag(elem){return elem.type==="tag"||elem.type==="script"||elem.type==="style";}};/***/},/* 75 *//***/function(module,exports,__webpack_require__){var encode=__webpack_require__(76),decode=__webpack_require__(79);exports.decode=function(data,level){return(!level||level<=0?decode.XML:decode.HTML)(data);};exports.decodeStrict=function(data,level){return(!level||level<=0?decode.XML:decode.HTMLStrict)(data);};exports.encode=function(data,level){return(!level||level<=0?encode.XML:encode.HTML)(data);};exports.encodeXML=encode.XML;exports.encodeHTML4=exports.encodeHTML5=exports.encodeHTML=encode.HTML;exports.decodeXML=exports.decodeXMLStrict=decode.XML;exports.decodeHTML4=exports.decodeHTML5=exports.decodeHTML=decode.HTML;exports.decodeHTML4Strict=exports.decodeHTML5Strict=exports.decodeHTMLStrict=decode.HTMLStrict;exports.escape=encode.escape;/***/},/* 76 *//***/function(module,exports,__webpack_require__){var inverseXML=getInverseObj(__webpack_require__(77)),xmlReplacer=getInverseReplacer(inverseXML);exports.XML=getInverse(inverseXML,xmlReplacer);var inverseHTML=getInverseObj(__webpack_require__(78)),htmlReplacer=getInverseReplacer(inverseHTML);exports.HTML=getInverse(inverseHTML,htmlReplacer);function getInverseObj(obj){return(0,_keys2.default)(obj).sort().reduce(function(inverse,name){inverse[obj[name]]="&"+name+";";return inverse;},{});}function getInverseReplacer(inverse){var single=[],multiple=[];(0,_keys2.default)(inverse).forEach(function(k){if(k.length===1){single.push("\\"+k);}else{multiple.push(k);}});//TODO add ranges
multiple.unshift("["+single.join("")+"]");return new RegExp(multiple.join("|"),"g");}var re_nonASCII=/[^\0-\x7F]/g,re_astralSymbols=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;function singleCharReplacer(c){return"&#x"+c.charCodeAt(0).toString(16).toUpperCase()+";";}function astralReplacer(c){// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
var high=c.charCodeAt(0);var low=c.charCodeAt(1);var codePoint=(high-0xD800)*0x400+low-0xDC00+0x10000;return"&#x"+codePoint.toString(16).toUpperCase()+";";}function getInverse(inverse,re){function func(name){return inverse[name];}return function(data){return data.replace(re,func).replace(re_astralSymbols,astralReplacer).replace(re_nonASCII,singleCharReplacer);};}var re_xmlChars=getInverseReplacer(inverseXML);function escapeXML(data){return data.replace(re_xmlChars,singleCharReplacer).replace(re_astralSymbols,astralReplacer).replace(re_nonASCII,singleCharReplacer);}exports.escape=escapeXML;/***/},/* 77 *//***/function(module){module.exports={"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""};/***/},/* 78 *//***/function(module){module.exports={"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"};/***/},/* 79 *//***/function(module,exports,__webpack_require__){var entityMap=__webpack_require__(78),legacyMap=__webpack_require__(80),xmlMap=__webpack_require__(77),decodeCodePoint=__webpack_require__(81);var decodeXMLStrict=getStrictDecoder(xmlMap),decodeHTMLStrict=getStrictDecoder(entityMap);function getStrictDecoder(map){var keys=(0,_keys2.default)(map).join("|"),replace=getReplacer(map);keys+="|#[xX][\\da-fA-F]+|#\\d+";var re=new RegExp("&(?:"+keys+");","g");return function(str){return String(str).replace(re,replace);};}var decodeHTML=function(){var legacy=(0,_keys2.default)(legacyMap).sort(sorter);var keys=(0,_keys2.default)(entityMap).sort(sorter);for(var i=0,j=0;i<keys.length;i++){if(legacy[j]===keys[i]){keys[i]+=";?";j++;}else{keys[i]+=";";}}var re=new RegExp("&(?:"+keys.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),replace=getReplacer(entityMap);function replacer(str){if(str.substr(-1)!==";")str+=";";return replace(str);}//TODO consider creating a merged map
return function(str){return String(str).replace(re,replacer);};}();function sorter(a,b){return a<b?1:-1;}function getReplacer(map){return function replace(str){if(str.charAt(1)==="#"){if(str.charAt(2)==="X"||str.charAt(2)==="x"){return decodeCodePoint(parseInt(str.substr(3),16));}return decodeCodePoint(parseInt(str.substr(2),10));}return map[str.slice(1,-1)];};}module.exports={XML:decodeXMLStrict,HTML:decodeHTML,HTMLStrict:decodeHTMLStrict};/***/},/* 80 *//***/function(module){module.exports={"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"};/***/},/* 81 *//***/function(module,exports,__webpack_require__){var decodeMap=__webpack_require__(82);module.exports=decodeCodePoint;// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint){if(codePoint>=0xD800&&codePoint<=0xDFFF||codePoint>0x10FFFF){return'\uFFFD';}if(codePoint in decodeMap){codePoint=decodeMap[codePoint];}var output="";if(codePoint>0xFFFF){codePoint-=0x10000;output+=String.fromCharCode(codePoint>>>10&0x3FF|0xD800);codePoint=0xDC00|codePoint&0x3FF;}output+=String.fromCharCode(codePoint);return output;}/***/},/* 82 *//***/function(module){module.exports={"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376};/***/},/* 83 *//***/function(module,exports){var getChildren=exports.getChildren=function(elem){return elem.children;};var getParent=exports.getParent=function(elem){return elem.parent;};exports.getSiblings=function(elem){var parent=getParent(elem);return parent?getChildren(parent):[elem];};exports.getAttributeValue=function(elem,name){return elem.attribs&&elem.attribs[name];};exports.hasAttrib=function(elem,name){return!!elem.attribs&&hasOwnProperty.call(elem.attribs,name);};exports.getName=function(elem){return elem.name;};/***/},/* 84 *//***/function(module,exports){exports.removeElement=function(elem){if(elem.prev)elem.prev.next=elem.next;if(elem.next)elem.next.prev=elem.prev;if(elem.parent){var childs=elem.parent.children;childs.splice(childs.lastIndexOf(elem),1);}};exports.replaceElement=function(elem,replacement){var prev=replacement.prev=elem.prev;if(prev){prev.next=replacement;}var next=replacement.next=elem.next;if(next){next.prev=replacement;}var parent=replacement.parent=elem.parent;if(parent){var childs=parent.children;childs[childs.lastIndexOf(elem)]=replacement;}};exports.appendChild=function(elem,child){child.parent=elem;if(elem.children.push(child)!==1){var sibling=elem.children[elem.children.length-2];sibling.next=child;child.prev=sibling;child.next=null;}};exports.append=function(elem,next){var parent=elem.parent,currNext=elem.next;next.next=currNext;next.prev=elem;elem.next=next;next.parent=parent;if(currNext){currNext.prev=next;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(currNext),0,next);}}else if(parent){parent.children.push(next);}};exports.prepend=function(elem,prev){var parent=elem.parent;if(parent){var childs=parent.children;childs.splice(childs.lastIndexOf(elem),0,prev);}if(elem.prev){elem.prev.next=prev;}prev.parent=parent;prev.prev=elem.prev;prev.next=elem;elem.prev=prev;};/***/},/* 85 *//***/function(module,exports,__webpack_require__){var isTag=__webpack_require__(72).isTag;module.exports={filter:filter,find:find,findOneChild:findOneChild,findOne:findOne,existsOne:existsOne,findAll:findAll};function filter(test,element,recurse,limit){if(!Array.isArray(element))element=[element];if(typeof limit!=="number"||!isFinite(limit)){limit=Infinity;}return find(test,element,recurse!==false,limit);}function find(test,elems,recurse,limit){var result=[],childs;for(var i=0,j=elems.length;i<j;i++){if(test(elems[i])){result.push(elems[i]);if(--limit<=0)break;}childs=elems[i].children;if(recurse&&childs&&childs.length>0){childs=find(test,childs,recurse,limit);result=result.concat(childs);limit-=childs.length;if(limit<=0)break;}}return result;}function findOneChild(test,elems){for(var i=0,l=elems.length;i<l;i++){if(test(elems[i]))return elems[i];}return null;}function findOne(test,elems){var elem=null;for(var i=0,l=elems.length;i<l&&!elem;i++){if(!isTag(elems[i])){continue;}else if(test(elems[i])){elem=elems[i];}else if(elems[i].children.length>0){elem=findOne(test,elems[i].children);}}return elem;}function existsOne(test,elems){for(var i=0,l=elems.length;i<l;i++){if(isTag(elems[i])&&(test(elems[i])||elems[i].children.length>0&&existsOne(test,elems[i].children))){return true;}}return false;}function findAll(test,rootElems){var result=[];var stack=rootElems.slice();while(stack.length){var elem=stack.shift();if(!isTag(elem))continue;if(elem.children&&elem.children.length>0){stack.unshift.apply(stack,elem.children);}if(test(elem))result.push(elem);}return result;}/***/},/* 86 *//***/function(module,exports,__webpack_require__){var ElementType=__webpack_require__(72);var isTag=exports.isTag=ElementType.isTag;exports.testElement=function(options,element){for(var key in options){if(!options.hasOwnProperty(key));else if(key==="tag_name"){if(!isTag(element)||!options.tag_name(element.name)){return false;}}else if(key==="tag_type"){if(!options.tag_type(element.type))return false;}else if(key==="tag_contains"){if(isTag(element)||!options.tag_contains(element.data)){return false;}}else if(!element.attribs||!options[key](element.attribs[key])){return false;}}return true;};var Checks={tag_name:function tag_name(name){if(typeof name==="function"){return function(elem){return isTag(elem)&&name(elem.name);};}else if(name==="*"){return isTag;}else{return function(elem){return isTag(elem)&&elem.name===name;};}},tag_type:function tag_type(type){if(typeof type==="function"){return function(elem){return type(elem.type);};}else{return function(elem){return elem.type===type;};}},tag_contains:function tag_contains(data){if(typeof data==="function"){return function(elem){return!isTag(elem)&&data(elem.data);};}else{return function(elem){return!isTag(elem)&&elem.data===data;};}}};function getAttribCheck(attrib,value){if(typeof value==="function"){return function(elem){return elem.attribs&&value(elem.attribs[attrib]);};}else{return function(elem){return elem.attribs&&elem.attribs[attrib]===value;};}}function combineFuncs(a,b){return function(elem){return a(elem)||b(elem);};}exports.getElements=function(options,element,recurse,limit){var funcs=(0,_keys2.default)(options).map(function(key){var value=options[key];return key in Checks?Checks[key](value):getAttribCheck(key,value);});return funcs.length===0?[]:this.filter(funcs.reduce(combineFuncs),element,recurse,limit);};exports.getElementById=function(id,element,recurse){if(!Array.isArray(element))element=[element];return this.findOne(getAttribCheck("id",id),element,recurse!==false);};exports.getElementsByTagName=function(name,element,recurse,limit){return this.filter(Checks.tag_name(name),element,recurse,limit);};exports.getElementsByTagType=function(type,element,recurse,limit){return this.filter(Checks.tag_type(type),element,recurse,limit);};/***/},/* 87 *//***/function(module,exports){// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets=function(nodes){var idx=nodes.length,node,ancestor,replace;// Check if each node (or one of its ancestors) is already contained in the
// array.
while(--idx>-1){node=ancestor=nodes[idx];// Temporarily remove the node under consideration
nodes[idx]=null;replace=true;while(ancestor){if(nodes.indexOf(ancestor)>-1){replace=false;nodes.splice(idx,1);break;}ancestor=ancestor.parent;}// If the node has been found to be unique, re-insert it.
if(replace){nodes[idx]=node;}}return nodes;};// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION={DISCONNECTED:1,PRECEDING:2,FOLLOWING:4,CONTAINS:8,CONTAINED_BY:16};// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos=exports.compareDocumentPosition=function(nodeA,nodeB){var aParents=[];var bParents=[];var current,sharedParent,siblings,aSibling,bSibling,idx;if(nodeA===nodeB){return 0;}current=nodeA;while(current){aParents.unshift(current);current=current.parent;}current=nodeB;while(current){bParents.unshift(current);current=current.parent;}idx=0;while(aParents[idx]===bParents[idx]){idx++;}if(idx===0){return POSITION.DISCONNECTED;}sharedParent=aParents[idx-1];siblings=sharedParent.children;aSibling=aParents[idx];bSibling=bParents[idx];if(siblings.indexOf(aSibling)>siblings.indexOf(bSibling)){if(sharedParent===nodeB){return POSITION.FOLLOWING|POSITION.CONTAINED_BY;}return POSITION.FOLLOWING;}else{if(sharedParent===nodeA){return POSITION.PRECEDING|POSITION.CONTAINS;}return POSITION.PRECEDING;}};// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort=function(nodes){var idx=nodes.length,node,position;nodes=nodes.slice();while(--idx>-1){node=nodes[idx];position=nodes.indexOf(node);if(position>-1&&position<idx){nodes.splice(idx,1);}}nodes.sort(function(a,b){var relative=comparePos(a,b);if(relative&POSITION.PRECEDING){return-1;}else if(relative&POSITION.FOLLOWING){return 1;}return 0;});return nodes;};/***/},/* 88 *//***/function(module,exports){module.exports={trueFunc:function trueFunc(){return true;},falseFunc:function falseFunc(){return false;}};/***/},/* 89 *//***/function(module,exports,__webpack_require__){/*
	compiles a selector to an executable function
*/module.exports=compile;var parse=__webpack_require__(90);var BaseFuncs=__webpack_require__(88);var sortRules=__webpack_require__(91);var procedure=__webpack_require__(92);var Rules=__webpack_require__(93);var Pseudos=__webpack_require__(95);var trueFunc=BaseFuncs.trueFunc;var falseFunc=BaseFuncs.falseFunc;var filters=Pseudos.filters;function compile(selector,options,context){var next=compileUnsafe(selector,options,context);return wrap(next,options);}function wrap(next,options){var adapter=options.adapter;return function base(elem){return adapter.isTag(elem)&&next(elem);};}function compileUnsafe(selector,options,context){var token=parse(selector,options);return compileToken(token,options,context);}function includesScopePseudo(t){return t.type==="pseudo"&&(t.name==="scope"||Array.isArray(t.data)&&t.data.some(function(data){return data.some(includesScopePseudo);}));}var DESCENDANT_TOKEN={type:"descendant"};var FLEXIBLE_DESCENDANT_TOKEN={type:"_flexibleDescendant"};var SCOPE_TOKEN={type:"pseudo",name:"scope"};var PLACEHOLDER_ELEMENT={};//CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
//http://www.w3.org/TR/selectors4/#absolutizing
function absolutize(token,options,context){var adapter=options.adapter;//TODO better check if context is document
var hasContext=!!context&&!!context.length&&context.every(function(e){return e===PLACEHOLDER_ELEMENT||!!adapter.getParent(e);});token.forEach(function(t){if(t.length>0&&isTraversal(t[0])&&t[0].type!=="descendant"){//don't return in else branch
}else if(hasContext&&!includesScopePseudo(t)){t.unshift(DESCENDANT_TOKEN);}else{return;}t.unshift(SCOPE_TOKEN);});}function compileToken(token,options,context){token=token.filter(function(t){return t.length>0;});token.forEach(sortRules);var isArrayContext=Array.isArray(context);context=options&&options.context||context;if(context&&!isArrayContext)context=[context];absolutize(token,options,context);var shouldTestNextSiblings=false;var query=token.map(function(rules){if(rules[0]&&rules[1]&&rules[0].name==="scope"){var ruleType=rules[1].type;if(isArrayContext&&ruleType==="descendant"){rules[1]=FLEXIBLE_DESCENDANT_TOKEN;}else if(ruleType==="adjacent"||ruleType==="sibling"){shouldTestNextSiblings=true;}}return compileRules(rules,options,context);}).reduce(reduceRules,falseFunc);query.shouldTestNextSiblings=shouldTestNextSiblings;return query;}function isTraversal(t){return procedure[t.type]<0;}function compileRules(rules,options,context){return rules.reduce(function(func,rule){if(func===falseFunc)return func;if(!(rule.type in Rules)){throw new Error("Rule type "+rule.type+" is not supported by css-select");}return Rules[rule.type](func,rule,options,context);},options&&options.rootFunc||trueFunc);}function reduceRules(a,b){if(b===falseFunc||a===trueFunc){return a;}if(a===falseFunc||b===trueFunc){return b;}return function combine(elem){return a(elem)||b(elem);};}function containsTraversal(t){return t.some(isTraversal);}//:not, :has and :matches have to compile selectors
//doing this in lib/pseudos.js would lead to circular dependencies,
//so we add them here
filters.not=function(next,token,options,context){var opts={xmlMode:!!(options&&options.xmlMode),strict:!!(options&&options.strict),adapter:options.adapter};if(opts.strict){if(token.length>1||token.some(containsTraversal)){throw new Error("complex selectors in :not aren't allowed in strict mode");}}var func=compileToken(token,opts,context);if(func===falseFunc)return next;if(func===trueFunc)return falseFunc;return function not(elem){return!func(elem)&&next(elem);};};filters.has=function(next,token,options){var adapter=options.adapter;var opts={xmlMode:!!(options&&options.xmlMode),strict:!!(options&&options.strict),adapter:adapter};//FIXME: Uses an array as a pointer to the current element (side effects)
var context=token.some(containsTraversal)?[PLACEHOLDER_ELEMENT]:null;var func=compileToken(token,opts,context);if(func===falseFunc)return falseFunc;if(func===trueFunc){return function hasChild(elem){return adapter.getChildren(elem).some(adapter.isTag)&&next(elem);};}func=wrap(func,options);if(context){return function has(elem){return next(elem)&&(context[0]=elem,adapter.existsOne(func,adapter.getChildren(elem)));};}return function has(elem){return next(elem)&&adapter.existsOne(func,adapter.getChildren(elem));};};filters.matches=function(next,token,options,context){var opts={xmlMode:!!(options&&options.xmlMode),strict:!!(options&&options.strict),rootFunc:next,adapter:options.adapter};return compileToken(token,opts,context);};compile.compileToken=compileToken;compile.compileUnsafe=compileUnsafe;compile.Pseudos=Pseudos;/***/},/* 90 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=parse;var re_name=/^(?:\\.|[\w\-\u00c0-\uFFFF])+/,re_escape=/\\([\da-f]{1,6}\s?|(\s)|.)/ig,//modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
re_attr=/^\s*((?:\\.|[\w\u00c0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00c0-\uFFFF\-])*)|)|)\s*(i)?\]/;var actionTypes={__proto__:null,"undefined":"exists","":"equals","~":"element","^":"start","$":"end","*":"any","!":"not","|":"hyphen"};var simpleSelectors={__proto__:null,">":"child","<":"parent","~":"sibling","+":"adjacent"};var attribSelectors={__proto__:null,"#":["id","equals"],".":["class","element"]};//pseudos, whose data-property is parsed as well
var unpackPseudos={__proto__:null,"has":true,"not":true,"matches":true};var stripQuotesFromPseudos={__proto__:null,"contains":true,"icontains":true};var quotes={__proto__:null,"\"":true,"'":true};//unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139
function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:// BMP codepoint
high<0?String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);}function unescapeCSS(str){return str.replace(re_escape,funescape);}function isWhitespace(c){return c===" "||c==="\n"||c==="\t"||c==="\f"||c==="\r";}function parse(selector,options){var subselects=[];selector=parseSelector(subselects,selector+"",options);if(selector!==""){throw new SyntaxError("Unmatched selector: "+selector);}return subselects;}function parseSelector(subselects,selector,options){var tokens=[],sawWS=false,data,firstChar,name,quot;function getName(){var sub=selector.match(re_name)[0];selector=selector.substr(sub.length);return unescapeCSS(sub);}function stripWhitespace(start){while(isWhitespace(selector.charAt(start))){start++;}selector=selector.substr(start);}function isEscaped(pos){var slashCount=0;while(selector.charAt(--pos)==="\\"){slashCount++;}return(slashCount&1)===1;}stripWhitespace(0);while(selector!==""){firstChar=selector.charAt(0);if(isWhitespace(firstChar)){sawWS=true;stripWhitespace(1);}else if(firstChar in simpleSelectors){tokens.push({type:simpleSelectors[firstChar]});sawWS=false;stripWhitespace(1);}else if(firstChar===","){if(tokens.length===0){throw new SyntaxError("empty sub-selector");}subselects.push(tokens);tokens=[];sawWS=false;stripWhitespace(1);}else{if(sawWS){if(tokens.length>0){tokens.push({type:"descendant"});}sawWS=false;}if(firstChar==="*"){selector=selector.substr(1);tokens.push({type:"universal"});}else if(firstChar in attribSelectors){selector=selector.substr(1);tokens.push({type:"attribute",name:attribSelectors[firstChar][0],action:attribSelectors[firstChar][1],value:getName(),ignoreCase:false});}else if(firstChar==="["){selector=selector.substr(1);data=selector.match(re_attr);if(!data){throw new SyntaxError("Malformed attribute selector: "+selector);}selector=selector.substr(data[0].length);name=unescapeCSS(data[1]);if(!options||("lowerCaseAttributeNames"in options?options.lowerCaseAttributeNames:!options.xmlMode)){name=name.toLowerCase();}tokens.push({type:"attribute",name:name,action:actionTypes[data[2]],value:unescapeCSS(data[4]||data[5]||""),ignoreCase:!!data[6]});}else if(firstChar===":"){if(selector.charAt(1)===":"){selector=selector.substr(2);tokens.push({type:"pseudo-element",name:getName().toLowerCase()});continue;}selector=selector.substr(1);name=getName().toLowerCase();data=null;if(selector.charAt(0)==="("){if(name in unpackPseudos){quot=selector.charAt(1);var quoted=quot in quotes;selector=selector.substr(quoted+1);data=[];selector=parseSelector(data,selector,options);if(quoted){if(selector.charAt(0)!==quot){throw new SyntaxError("unmatched quotes in :"+name);}else{selector=selector.substr(1);}}if(selector.charAt(0)!==")"){throw new SyntaxError("missing closing parenthesis in :"+name+" "+selector);}selector=selector.substr(1);}else{var pos=1,counter=1;for(;counter>0&&pos<selector.length;pos++){if(selector.charAt(pos)==="("&&!isEscaped(pos))counter++;else if(selector.charAt(pos)===")"&&!isEscaped(pos))counter--;}if(counter){throw new SyntaxError("parenthesis not matched");}data=selector.substr(1,pos-2);selector=selector.substr(pos);if(name in stripQuotesFromPseudos){quot=data.charAt(0);if(quot===data.slice(-1)&&quot in quotes){data=data.slice(1,-1);}data=unescapeCSS(data);}}}tokens.push({type:"pseudo",name:name,data:data});}else if(re_name.test(selector)){name=getName();if(!options||("lowerCaseTags"in options?options.lowerCaseTags:!options.xmlMode)){name=name.toLowerCase();}tokens.push({type:"tag",name:name});}else{if(tokens.length&&tokens[tokens.length-1].type==="descendant"){tokens.pop();}addToken(subselects,tokens);return selector;}}}addToken(subselects,tokens);return selector;}function addToken(subselects,tokens){if(subselects.length>0&&tokens.length===0){throw new SyntaxError("empty sub-selector");}subselects.push(tokens);}/***/},/* 91 *//***/function(module,exports,__webpack_require__){module.exports=sortByProcedure;/*
	sort the parts of the passed selector,
	as there is potential for optimization
	(some types of selectors are faster than others)
*/var procedure=__webpack_require__(92);var attributes={__proto__:null,exists:10,equals:8,not:7,start:6,end:6,any:5,hyphen:4,element:4};function sortByProcedure(arr){var procs=arr.map(getProcedure);for(var i=1;i<arr.length;i++){var procNew=procs[i];if(procNew<0)continue;for(var j=i-1;j>=0&&procNew<procs[j];j--){var token=arr[j+1];arr[j+1]=arr[j];arr[j]=token;procs[j+1]=procs[j];procs[j]=procNew;}}}function getProcedure(token){var proc=procedure[token.type];if(proc===procedure.attribute){proc=attributes[token.action];if(proc===attributes.equals&&token.name==="id"){//prefer ID selectors (eg. #ID)
proc=9;}if(token.ignoreCase){//ignoreCase adds some overhead, prefer "normal" token
//this is a binary operation, to ensure it's still an int
proc>>=1;}}else if(proc===procedure.pseudo){if(!token.data){proc=3;}else if(token.name==="has"||token.name==="contains"){proc=0;//expensive in any case
}else if(token.name==="matches"||token.name==="not"){proc=0;for(var i=0;i<token.data.length;i++){//TODO better handling of complex selectors
if(token.data[i].length!==1)continue;var cur=getProcedure(token.data[i][0]);//avoid executing :has or :contains
if(cur===0){proc=0;break;}if(cur>proc)proc=cur;}if(token.data.length>1&&proc>0)proc-=1;}else{proc=1;}}return proc;}/***/},/* 92 *//***/function(module){module.exports={"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1};/***/},/* 93 *//***/function(module,exports,__webpack_require__){var attributes=__webpack_require__(94);var Pseudos=__webpack_require__(95);/*
	all available rules
*/module.exports={__proto__:null,attribute:attributes.compile,pseudo:Pseudos.compile,//tags
tag:function tag(next,data,options){var name=data.name;var adapter=options.adapter;return function tag(elem){return adapter.getName(elem)===name&&next(elem);};},//traversal
descendant:function descendant(next,data,options){// eslint-disable-next-line no-undef
var isFalseCache=typeof _weakSet2.default!=="undefined"?new _weakSet2.default():null;var adapter=options.adapter;return function descendant(elem){var found=false;while(!found&&(elem=adapter.getParent(elem))){if(!isFalseCache||!isFalseCache.has(elem)){found=next(elem);if(!found&&isFalseCache){isFalseCache.add(elem);}}}return found;};},_flexibleDescendant:function _flexibleDescendant(next,data,options){var adapter=options.adapter;// Include element itself, only used while querying an array
return function descendant(elem){var found=next(elem);while(!found&&(elem=adapter.getParent(elem))){found=next(elem);}return found;};},parent:function parent(next,data,options){if(options&&options.strict){throw new Error("Parent selector isn't part of CSS3");}var adapter=options.adapter;return function parent(elem){return adapter.getChildren(elem).some(test);};function test(elem){return adapter.isTag(elem)&&next(elem);}},child:function child(next,data,options){var adapter=options.adapter;return function child(elem){var parent=adapter.getParent(elem);return!!parent&&next(parent);};},sibling:function sibling(next,data,options){var adapter=options.adapter;return function sibling(elem){var siblings=adapter.getSiblings(elem);for(var i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;if(next(siblings[i]))return true;}}return false;};},adjacent:function adjacent(next,data,options){var adapter=options.adapter;return function adjacent(elem){var siblings=adapter.getSiblings(elem),lastElement;for(var i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;lastElement=siblings[i];}}return!!lastElement&&next(lastElement);};},universal:function universal(next){return next;}};/***/},/* 94 *//***/function(module,exports,__webpack_require__){var falseFunc=__webpack_require__(88).falseFunc;//https://github.com/slevithan/XRegExp/blob/master/src/xregexp.js#L469
var reChars=/[-[\]{}()*+?.,\\^$|#\s]/g;/*
	attribute selectors
*/var attributeRules={__proto__:null,equals:function equals(next,data,options){var name=data.name;var value=data.value;var adapter=options.adapter;if(data.ignoreCase){value=value.toLowerCase();return function equalsIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.toLowerCase()===value&&next(elem);};}return function equals(elem){return adapter.getAttributeValue(elem,name)===value&&next(elem);};},hyphen:function hyphen(next,data,options){var name=data.name;var value=data.value;var len=value.length;var adapter=options.adapter;if(data.ignoreCase){value=value.toLowerCase();return function hyphenIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&(attr.length===len||attr.charAt(len)==="-")&&attr.substr(0,len).toLowerCase()===value&&next(elem);};}return function hyphen(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.substr(0,len)===value&&(attr.length===len||attr.charAt(len)==="-")&&next(elem);};},element:function element(next,data,options){var name=data.name;var value=data.value;var adapter=options.adapter;if(/\s/.test(value)){return falseFunc;}value=value.replace(reChars,"\\$&");var pattern="(?:^|\\s)"+value+"(?:$|\\s)",flags=data.ignoreCase?"i":"",regex=new RegExp(pattern,flags);return function element(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&regex.test(attr)&&next(elem);};},exists:function exists(next,data,options){var name=data.name;var adapter=options.adapter;return function exists(elem){return adapter.hasAttrib(elem,name)&&next(elem);};},start:function start(next,data,options){var name=data.name;var value=data.value;var len=value.length;var adapter=options.adapter;if(len===0){return falseFunc;}if(data.ignoreCase){value=value.toLowerCase();return function startIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.substr(0,len).toLowerCase()===value&&next(elem);};}return function start(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.substr(0,len)===value&&next(elem);};},end:function end(next,data,options){var name=data.name;var value=data.value;var len=-value.length;var adapter=options.adapter;if(len===0){return falseFunc;}if(data.ignoreCase){value=value.toLowerCase();return function endIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.substr(len).toLowerCase()===value&&next(elem);};}return function end(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.substr(len)===value&&next(elem);};},any:function any(next,data,options){var name=data.name;var value=data.value;var adapter=options.adapter;if(value===""){return falseFunc;}if(data.ignoreCase){var regex=new RegExp(value.replace(reChars,"\\$&"),"i");return function anyIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&regex.test(attr)&&next(elem);};}return function any(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.indexOf(value)>=0&&next(elem);};},not:function not(next,data,options){var name=data.name;var value=data.value;var adapter=options.adapter;if(value===""){return function notEmpty(elem){return!!adapter.getAttributeValue(elem,name)&&next(elem);};}else if(data.ignoreCase){value=value.toLowerCase();return function notIC(elem){var attr=adapter.getAttributeValue(elem,name);return attr!=null&&attr.toLowerCase()!==value&&next(elem);};}return function not(elem){return adapter.getAttributeValue(elem,name)!==value&&next(elem);};}};module.exports={compile:function compile(next,data,options){if(options&&options.strict&&(data.ignoreCase||data.action==="not")){throw new Error("Unsupported attribute selector");}return attributeRules[data.action](next,data,options);},rules:attributeRules};/***/},/* 95 *//***/function(module,exports,__webpack_require__){/*
	pseudo selectors

	---

	they are available in two forms:
	* filters called when the selector
	  is compiled and return a function
	  that needs to return next()
	* pseudos get called on execution
	  they need to return a boolean
*/var getNCheck=__webpack_require__(96);var BaseFuncs=__webpack_require__(88);var attributes=__webpack_require__(94);var trueFunc=BaseFuncs.trueFunc;var falseFunc=BaseFuncs.falseFunc;var checkAttrib=attributes.rules.equals;function getAttribFunc(name,value){var data={name:name,value:value};return function attribFunc(next,rule,options){return checkAttrib(next,data,options);};}function getChildFunc(next,adapter){return function(elem){return!!adapter.getParent(elem)&&next(elem);};}var filters={contains:function contains(next,text,options){var adapter=options.adapter;return function contains(elem){return next(elem)&&adapter.getText(elem).indexOf(text)>=0;};},icontains:function icontains(next,text,options){var itext=text.toLowerCase();var adapter=options.adapter;return function icontains(elem){return next(elem)&&adapter.getText(elem).toLowerCase().indexOf(itext)>=0;};},//location specific methods
"nth-child":function nthChild(next,rule,options){var func=getNCheck(rule);var adapter=options.adapter;if(func===falseFunc)return func;if(func===trueFunc)return getChildFunc(next,adapter);return function nthChild(elem){var siblings=adapter.getSiblings(elem);for(var i=0,pos=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;else pos++;}}return func(pos)&&next(elem);};},"nth-last-child":function nthLastChild(next,rule,options){var func=getNCheck(rule);var adapter=options.adapter;if(func===falseFunc)return func;if(func===trueFunc)return getChildFunc(next,adapter);return function nthLastChild(elem){var siblings=adapter.getSiblings(elem);for(var pos=0,i=siblings.length-1;i>=0;i--){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;else pos++;}}return func(pos)&&next(elem);};},"nth-of-type":function nthOfType(next,rule,options){var func=getNCheck(rule);var adapter=options.adapter;if(func===falseFunc)return func;if(func===trueFunc)return getChildFunc(next,adapter);return function nthOfType(elem){var siblings=adapter.getSiblings(elem);for(var pos=0,i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;if(adapter.getName(siblings[i])===adapter.getName(elem))pos++;}}return func(pos)&&next(elem);};},"nth-last-of-type":function nthLastOfType(next,rule,options){var func=getNCheck(rule);var adapter=options.adapter;if(func===falseFunc)return func;if(func===trueFunc)return getChildFunc(next,adapter);return function nthLastOfType(elem){var siblings=adapter.getSiblings(elem);for(var pos=0,i=siblings.length-1;i>=0;i--){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)break;if(adapter.getName(siblings[i])===adapter.getName(elem))pos++;}}return func(pos)&&next(elem);};},//TODO determine the actual root element
root:function root(next,rule,options){var adapter=options.adapter;return function(elem){return!adapter.getParent(elem)&&next(elem);};},scope:function scope(next,rule,options,context){var adapter=options.adapter;if(!context||context.length===0){//equivalent to :root
return filters.root(next,rule,options);}function equals(a,b){if(typeof adapter.equals==="function")return adapter.equals(a,b);return a===b;}if(context.length===1){//NOTE: can't be unpacked, as :has uses this for side-effects
return function(elem){return equals(context[0],elem)&&next(elem);};}return function(elem){return context.indexOf(elem)>=0&&next(elem);};},//jQuery extensions (others follow as pseudos)
checkbox:getAttribFunc("type","checkbox"),file:getAttribFunc("type","file"),password:getAttribFunc("type","password"),radio:getAttribFunc("type","radio"),reset:getAttribFunc("type","reset"),image:getAttribFunc("type","image"),submit:getAttribFunc("type","submit")};//helper methods
function getFirstElement(elems,adapter){for(var i=0;elems&&i<elems.length;i++){if(adapter.isTag(elems[i]))return elems[i];}}//while filters are precompiled, pseudos get called when they are needed
var pseudos={empty:function empty(elem,adapter){return!adapter.getChildren(elem).some(function(elem){return adapter.isTag(elem)||elem.type==="text";});},"first-child":function firstChild(elem,adapter){return getFirstElement(adapter.getSiblings(elem),adapter)===elem;},"last-child":function lastChild(elem,adapter){var siblings=adapter.getSiblings(elem);for(var i=siblings.length-1;i>=0;i--){if(siblings[i]===elem)return true;if(adapter.isTag(siblings[i]))break;}return false;},"first-of-type":function firstOfType(elem,adapter){var siblings=adapter.getSiblings(elem);for(var i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)return true;if(adapter.getName(siblings[i])===adapter.getName(elem))break;}}return false;},"last-of-type":function lastOfType(elem,adapter){var siblings=adapter.getSiblings(elem);for(var i=siblings.length-1;i>=0;i--){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)return true;if(adapter.getName(siblings[i])===adapter.getName(elem))break;}}return false;},"only-of-type":function onlyOfType(elem,adapter){var siblings=adapter.getSiblings(elem);for(var i=0,j=siblings.length;i<j;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem)continue;if(adapter.getName(siblings[i])===adapter.getName(elem)){return false;}}}return true;},"only-child":function onlyChild(elem,adapter){var siblings=adapter.getSiblings(elem);for(var i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])&&siblings[i]!==elem)return false;}return true;},//:matches(a, area, link)[href]
link:function link(elem,adapter){return adapter.hasAttrib(elem,"href");},visited:falseFunc,//Valid implementation
//TODO: :any-link once the name is finalized (as an alias of :link)
//forms
//to consider: :target
//:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
selected:function selected(elem,adapter){if(adapter.hasAttrib(elem,"selected"))return true;else if(adapter.getName(elem)!=="option")return false;//the first <option> in a <select> is also selected
var parent=adapter.getParent(elem);if(!parent||adapter.getName(parent)!=="select"||adapter.hasAttrib(parent,"multiple")){return false;}var siblings=adapter.getChildren(parent);var sawElem=false;for(var i=0;i<siblings.length;i++){if(adapter.isTag(siblings[i])){if(siblings[i]===elem){sawElem=true;}else if(!sawElem){return false;}else if(adapter.hasAttrib(siblings[i],"selected")){return false;}}}return sawElem;},//https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
//:matches(
//  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
//  optgroup[disabled] > option),
// fieldset[disabled] * //TODO not child of first <legend>
//)
disabled:function disabled(elem,adapter){return adapter.hasAttrib(elem,"disabled");},enabled:function enabled(elem,adapter){return!adapter.hasAttrib(elem,"disabled");},//:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
checked:function checked(elem,adapter){return adapter.hasAttrib(elem,"checked")||pseudos.selected(elem,adapter);},//:matches(input, select, textarea)[required]
required:function required(elem,adapter){return adapter.hasAttrib(elem,"required");},//:matches(input, select, textarea):not([required])
optional:function optional(elem,adapter){return!adapter.hasAttrib(elem,"required");},//jQuery extensions
//:not(:empty)
parent:function parent(elem,adapter){return!pseudos.empty(elem,adapter);},//:matches(h1, h2, h3, h4, h5, h6)
header:namePseudo(["h1","h2","h3","h4","h5","h6"]),//:matches(button, input[type=button])
button:function button(elem,adapter){var name=adapter.getName(elem);return name==="button"||name==="input"&&adapter.getAttributeValue(elem,"type")==="button";},//:matches(input, textarea, select, button)
input:namePseudo(["input","textarea","select","button"]),//input:matches(:not([type!='']), [type='text' i])
text:function text(elem,adapter){var attr;return adapter.getName(elem)==="input"&&(!(attr=adapter.getAttributeValue(elem,"type"))||attr.toLowerCase()==="text");}};function namePseudo(names){if(typeof _set5.default!=="undefined"){// eslint-disable-next-line no-undef
var nameSet=new _set5.default(names);return function(elem,adapter){return nameSet.has(adapter.getName(elem));};}return function(elem,adapter){return names.indexOf(adapter.getName(elem))>=0;};}function verifyArgs(func,name,subselect){if(subselect===null){if(func.length>2&&name!=="scope"){throw new Error("pseudo-selector :"+name+" requires an argument");}}else{if(func.length===2){throw new Error("pseudo-selector :"+name+" doesn't have any arguments");}}}//FIXME this feels hacky
var re_CSS3=/^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;module.exports={compile:function compile(next,data,options,context){var name=data.name;var subselect=data.data;var adapter=options.adapter;if(options&&options.strict&&!re_CSS3.test(name)){throw new Error(":"+name+" isn't part of CSS3");}if(typeof filters[name]==="function"){return filters[name](next,subselect,options,context);}else if(typeof pseudos[name]==="function"){var func=pseudos[name];verifyArgs(func,name,subselect);if(func===falseFunc){return func;}if(next===trueFunc){return function pseudoRoot(elem){return func(elem,adapter,subselect);};}return function pseudoArgs(elem){return func(elem,adapter,subselect)&&next(elem);};}else{throw new Error("unmatched pseudo-class :"+name);}},filters:filters,pseudos:pseudos};/***/},/* 96 *//***/function(module,exports,__webpack_require__){var parse=__webpack_require__(97),compile=__webpack_require__(98);module.exports=function nthCheck(formula){return compile(parse(formula));};module.exports.parse=parse;module.exports.compile=compile;/***/},/* 97 *//***/function(module,exports){module.exports=parse;//following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
//[ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
var re_nthElement=/^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;/*
	parses a nth-check formula, returns an array of two numbers
*/function parse(formula){formula=formula.trim().toLowerCase();if(formula==="even"){return[2,0];}else if(formula==="odd"){return[2,1];}else{var parsed=formula.match(re_nthElement);if(!parsed){throw new SyntaxError("n-th rule couldn't be parsed ('"+formula+"')");}var a;if(parsed[1]){a=parseInt(parsed[1],10);if(isNaN(a)){if(parsed[1].charAt(0)==="-")a=-1;else a=1;}}else a=0;return[a,parsed[3]?parseInt((parsed[2]||"")+parsed[3],10):0];}}/***/},/* 98 *//***/function(module,exports,__webpack_require__){module.exports=compile;var BaseFuncs=__webpack_require__(88),trueFunc=BaseFuncs.trueFunc,falseFunc=BaseFuncs.falseFunc;/*
	returns a function that checks if an elements index matches the given rule
	highly optimized to return the fastest solution
*/function compile(parsed){var a=parsed[0],b=parsed[1]-1;//when b <= 0, a*n won't be possible for any matches when a < 0
//besides, the specification says that no element is matched when a and b are 0
if(b<0&&a<=0)return falseFunc;//when a is in the range -1..1, it matches any element (so only b is checked)
if(a===-1)return function(pos){return pos<=b;};if(a===0)return function(pos){return pos===b;};//when b <= 0 and a === 1, they match any element
if(a===1)return b<0?trueFunc:function(pos){return pos>=b;};//when a > 0, modulo can be used to check if there is a match
var bMod=b%a;if(bMod<0)bMod+=a;if(a>1){return function(pos){return pos>=b&&pos%a===bMod;};}a*=-1;//make `a` positive
return function(pos){return pos<=b&&pos%a===bMod;};}/***/},/* 99 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"registerNodeType",function(){return registerNodeType;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createNode",function(){return createNode;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createElement",function(){return createElement;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"isValidNodeType",function(){return isValidNodeType;});/* harmony import */var _selector__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68);var nodeTypes=new _map2.default();/* istanbul ignore next  */var ownerDocumentDescriptor={get:function get(){var that=this;return{createElementNS:function createElementNS(uri,name){var sprite=createNode(name);if(sprite){return that.appendChild(sprite);}return null;}};}};var elementProto={getElementById:function getElementById(id){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"])('#'+id,this);},getElementsByName:function getElementsByName(name){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])('[name="'+name+'"]',this);},getElementsByClassName:function getElementsByClassName(className){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])('.'+className,this);},getElementsByTagName:function getElementsByTagName(tagName){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(tagName,this);},querySelector:function querySelector(selector){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelector"])(selector,this);},querySelectorAll:function querySelectorAll(selector){return Object(_selector__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(selector,this);}};function registerNodeType(type,Class){var isQuerable=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var nodeType=type.toLowerCase();var tagName=type.toUpperCase();Object.defineProperty(Class.prototype,'nodeType',{get:function get(){return nodeType;}});// friendly to snabbdom
Object.defineProperty(Class.prototype,'tagName',{get:function get(){return tagName;}});Object.defineProperty(Class.prototype,'nodeName',{get:function get(){return tagName;}});nodeTypes.set(nodeType,Class);if(isQuerable&&!Class.prototype.ownerDocument){Object.defineProperty(Class.prototype,'ownerDocument',ownerDocumentDescriptor);Class.prototype.namespaceURI='http://spritejs.org/'+type;(0,_assign2.default)(Class.prototype,elementProto);}}function createNode(type){var Class=getNodeType(type);if(Class){for(var _len17=arguments.length,args=Array(_len17>1?_len17-1:0),_key17=1;_key17<_len17;_key17++){args[_key17-1]=arguments[_key17];}return new(Function.prototype.bind.apply(Class,[null].concat(args)))();}return null;}function createElement(type,attrs,content){var Node=typeof type==='string'?getNodeType(type):type;if(!Node)return null;var sprite=new Node(typeof content==='string'?content:undefined);if(attrs!==null){sprite.attr(attrs);}if((typeof content==='undefined'?'undefined':(0,_typeof3.default)(content))==='object'&&sprite.append){if(content instanceof Array){sprite.append.apply(sprite,(0,_toConsumableArray4.default)(content));}else{sprite.append(content);}}return sprite;}function getNodeType(type){return nodeTypes.get(type.toLowerCase());}function isValidNodeType(type){return!!getNodeType(type);}/***/},/* 100 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _core_basenode__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34);/* harmony import */var _core_layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(43);/* harmony import */var _stylesheet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(101);/* istanbul ignore next */_core_layer__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.fromDocumentCSS=function(){_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].fromDocumentCSS();};_core_basenode__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.restyle=function(){_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"].computeStyle(this);};/* harmony default export */__webpack_exports__["default"]=_stylesheet__WEBPACK_IMPORTED_MODULE_2__["default"];/***/},/* 101 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _dom_selector__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68);/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20);var cssWhat=__webpack_require__(90);var cssRules=[];var keyFrames={};var _matchedSelectors=(0,_symbol2.default)('matchedSelectors');var _transitions=(0,_symbol2.default)('transitions');var _animation=(0,_symbol2.default)('animation');/* istanbul ignore next */function parseTransitionValue(values){if(typeof values==='string')values=values.trim().split(/\s*,\s*/g);var ret=[];for(var i=0;i<values.length;i++){var value=values[i].toString();if(value==='initial'){value=0;}else if(/ms$/.test(value)){value=parseFloat(value)/1000;}else{value=parseFloat(value);}ret.push(value);}return ret;}/* istanbul ignore next */function parseAnimationValue(value){value=value.toString();if(value==='initial'){value=0;}else if(/ms$/.test(value)){value=parseFloat(value);}else{value=parseFloat(value)*1000;}return value;}/* istanbul ignore next */function toPxValue(value,defaultWidth){// eslint-disable-line complexity
if(typeof value==='string'){var matched=value.match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);if(matched){// console.log(matched);
var size=parseFloat(matched[1]);var unit=matched[2];value=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["sizeToPixel"])({size:size,unit:unit});}else{var _size=Number(value);if(!(0,_isNan2.default)(_size)){value=_size;}}}return value;}/* istanbul ignore next */var CSSGetter={opacity:true,width:true,height:true,backgroundColor:true,flexGrow:true,flexShrink:true,flexBasis:true,order:true,flexDirection:true,flexWrap:true,justifyContent:true,alignItems:true,alignContent:true,position:true,alignSelf:true,transform:true,transformOrigin:true,borderTopWidth:true,borderRightWidth:true,borderBottomWidth:true,borderLeftWidth:true,borderTopColor:true,borderRightColor:true,borderBottomColor:true,borderLeftColor:true,borderTopStyle:true,borderRightStyle:true,borderBottomStyle:true,borderLeftStyle:true,borderTopLeftRadius:true,borderTopRightRadius:true,borderBottomRightRadius:true,borderBottomLeftRadius:true,boxSizing:true,display:true,paddingTop:true,paddingRight:true,paddingBottom:true,paddingLeft:true,marginTop:true,marginRight:true,marginBottom:true,marginLeft:true,zIndex:true,font:true,fontSize:true,fontFamily:true,fontStyle:true,fontVariantCaps:true,fontWeight:true,color:true,textAlign:true,lineHeight:true,lineBreak:true,wordBreak:true,letterSpacing:true,textIndent:true,transitionDuration:parseTransitionValue,transitionTimingFunction:function transitionTimingFunction(values){if(typeof values==='string')values=values.trim().split(/\s*,\s*/g);var ret=[];for(var i=0;i<values.length;i++){var value=values[i].toString();if(value==='initial')value='ease';ret.push(value);}return ret;},transitionDelay:parseTransitionValue,transitionProperty:true,animationDuration:parseAnimationValue,animationDelay:parseAnimationValue,animationTimingFunction:function animationTimingFunction(value){value=value.toString();return value!=='initial'?value:'ease';},animationIterationCount:function animationIterationCount(value){value=value.toString();if(value==='initial')return 1;if(value==='infinity')return Infinity;return parseFloat(value);},animationDirection:function animationDirection(value){value=value.toString();return value!=='initial'?value:'normal';},animationFillMode:function animationFillMode(value){value=value.toString();if(value==='initial'||value==='none')value='auto';return value;},animationPlayState:true,animationName:true};/* istanbul ignore next */function parseRuleAttrs(rule){// eslint-disable-line complexity
var styleAttrs=void 0;var isStyleMap=!!rule.styleMap;if(!isStyleMap){if(!rule.style)return;var props=[].concat((0,_toConsumableArray4.default)(rule.style)).map(function(key){return[key,rule.style[key]];}).filter(function(_ref69){var _ref70=(0,_slicedToArray4.default)(_ref69,2),key=_ref70[0],value=_ref70[1];return value!=null;});var matched=rule.cssText.match(/--sprite-[\w-]+\s*:\s*.+?(;|$)/img);if(matched){matched.forEach(function(rule){var _rule$split=rule.split(':'),_rule$split2=(0,_slicedToArray4.default)(_rule$split,2),key=_rule$split2[0],value=_rule$split2[1];props.push([key,value.trim().replace(/;$/,'')]);});}var isIgnore=props['--sprite-ignore'];if(isIgnore&&isIgnore!=='false'&&isIgnore!=='0'){return;}styleAttrs=props;}if(rule.styleMap&&rule.styleMap.has('--sprite-ignore')){var _isIgnore=rule.styleMap.get('--sprite-ignore')[0].trim();if(_isIgnore!=='false'&&_isIgnore!=='0'&&_isIgnore!==''){return;}}if(rule.styleMap){styleAttrs=[].concat((0,_toConsumableArray4.default)(rule.styleMap));}var attrs={},reserved={};var borderRadius=null;var transition=null;var gradient={};styleAttrs.forEach(function(_ref71){var _ref72=(0,_slicedToArray4.default)(_ref71,2),key=_ref72[0],value=_ref72[1];// eslint-disable-line complexity
if(key==='--sprite-transition'){throw new Error('Not support --sprite-transition, instead use transition.');}if(key==='--sprite-animation'){throw new Error('Not support --sprite-animation, instead use animation.');}if(key.indexOf('--sprite-')===0){key=key.replace('--sprite-','');key=toCamel(key);if(isStyleMap)value=value[0][0].trim();if(key==='gradient'){// --sprite-gradient: bgcolor,color vector(0, 150, 150, 0) 0,#fff 0.5,rgba(33, 33, 77, 0.7) 1,rgba(128, 45, 88, 0.5)
var _matched2=value.match(/(.+?)vector\((.+?)\)(.+)/);if(_matched2){var properties=_matched2[1].trim().split(/\s*,\s*/g),vector=_matched2[2].split(',').map(function(s){return Number(s.trim());}),colors=_matched2[3].trim().split(/\s+/).map(function(s){var m=s.match(/^([\d.]+),(.*)/);if(m){return{offset:Number(m[1].trim()),color:m[2].trim()};}return null;}).filter(function(c){return c!=null;});properties.forEach(function(prop){gradient[prop]={vector:vector,colors:colors};});}}if(key==='border'){var values=value.split(/\s+/);var _values=(0,_slicedToArray4.default)(values,3),style=_values[0],width=_values[1],color=_values[2];reserved.border={style:style,width:width,color:color};}else{if(key!=='fontSize'&&typeof value==='string'){if(/,/.test(value)){var _values2=value.split(',');value=_values2.map(function(v){return toPxValue(v.trim());});}else{value=toPxValue(value);}}reserved[key]=value;}}else{key=toCamel(key);if(key in CSSGetter){if(typeof CSSGetter[key]==='function'){value=CSSGetter[key](value);}else{if(isStyleMap){value=value[0].toString();}if(key!=='fontSize'){value=toPxValue(value);}}if(/^animation/.test(key)){attrs.animation=attrs.animation||{};attrs.animation[key]=value;return;}if(value==='initial')return;if(key==='backgroundColor')key='bgcolor';if(key==='fontVariantCaps')key='fontVariant';if(key==='lineHeight'&&value==='normal')value='';if(/Radius$/.test(key)){if(typeof value==='string'){value=value.split(/\s+/).map(function(v){return toPxValue(v);});}else{value=[value,value];}borderRadius=borderRadius||[0,0,0,0,0,0,0,0];if(key==='borderTopLeftRadius'){borderRadius[0]=value[0];borderRadius[1]=value[1];}else if(key==='borderTopRightRadius'){borderRadius[2]=value[0];borderRadius[3]=value[1];}else if(key==='borderBottomRightRadius'){borderRadius[4]=value[0];borderRadius[5]=value[1];}else if(key==='borderBottomLeftRadius'){borderRadius[6]=value[0];borderRadius[7]=value[1];}}else if(/^border(Left|Right|Top|Bottom)\w+/.test(key)){if(/Color$/.test(key)){attrs.borderColor=value;}else if(/Style$/.test(key)){attrs.borderStyle=value;}else if(/Width$/.test(key)){attrs.borderWidth=value;}}else if(key==='transitionDelay'){transition=transition||{};transition.delay=value;}else if(key==='transitionDuration'){transition=transition||{};transition.duration=value;}else if(key==='transitionTimingFunction'){transition=transition||{};transition.easing=value;}else if(key==='transitionProperty'){transition=transition||{};transition.properties=value;}else{attrs[key]=value;}}}});if(borderRadius){attrs.borderRadius=borderRadius;}(0,_assign2.default)(attrs,reserved,gradient);if(transition){transition.properties=transition.properties||'all';transition.delay=transition.delay||[0];transition.duration=transition.duration||[0];transition.easing=transition.easing||['ease'];attrs.transitions=[];var properties=transition.properties.split(',').map(function(p){return p.trim();});properties.forEach(function(key,i){var _attrs=null;if(key.indexOf('--sprite-')===0){key=key.replace('--sprite-','');}key=toCamel(key);if(key!=='borderRadius'&&/^border/.test(key)){key='border';}if(key==='backgroundColor'||key==='background')key='bgcolor';if(key==='fontVariantCaps')key='fontVariant';if(key==='all'){_attrs=(0,_assign2.default)({},attrs);delete _attrs.transitions;delete _attrs.animation;}else if(key in attrs){_attrs=(0,_defineProperty4.default)({},key,attrs[key]);}if(_attrs){attrs.transitions.push({easing:transition.easing[i],attrs:_attrs,delay:transition.delay[i],duration:transition.duration[i]});}});}if('fontSize'in attrs||'fontFamily'in attrs||'fontStyle'in attrs||'fontVariant'in attrs||'fontWeight'in attrs){// for font inherit
var font=attrs.font||'normal normal normal 16px Arial';var _Object5=Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseFont"])(font),style=_Object5.style,variant=_Object5.variant,weight=_Object5.weight,family=_Object5.family,size=_Object5.size,unit=_Object5.unit;attrs.font=(attrs.fontStyle||style)+' '+(attrs.fontVariant||variant)+' '+(attrs.fontWeight||weight)+' '+(attrs.fontSize||size+unit)+' '+(attrs.fontFamily||family);delete attrs.fontSize;delete attrs.fontFamily;delete attrs.fontVariant;delete attrs.fontWeight;delete attrs.fontStyle;}return attrs;}function parseFrames(rule)/* istanbul ignore next */{var rules=rule.cssRules||rule.rules;if(rules&&rules.length>0){var frames=[];for(var i=0;i<rules.length;i++){var _rule=rules[i];var offset=parseFloat(_rule.keyText)/100;var frame=parseRuleAttrs(_rule);frame.offset=offset;frames.push(frame);}return frames;}}/* istanbul ignore next */function toCamel(str){return str.replace(/([^-])(?:-+([^-]))/g,function($0,$1,$2){return $1+$2.toUpperCase();});}function resolveToken(token){// eslint-disable-line complexity
var ret='',priority=0,valid=true;if(token.type==='tag'){ret=token.name;priority=1;}else if(token.type==='universal'){ret='*';priority=0;}else if(token.type==='pseudo'){var data=token.data;if(data!=null){if(token.name==='not'){data.forEach(function(rules){rules.forEach(function(token){var r=resolveToken(token);ret+=r.token;valid&=r.valid;});});ret=':'+token.name+'('+ret+')';}else{ret=':'+token.name+'('+token.data+')';}}else{ret=':'+token.name;}if(token.name==='hover')/* istanbul ignore next */{_utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add('__internal_state_hover_');}else if(token.name==='active')/* istanbul ignore next */{_utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add('__internal_state_active_');}// not support yet
valid=token.name!=='focus'&&token.name!=='link'&&token.name!=='visited'&&token.name!=='lang';priority=token.name!=='not'?1000:0;}else if(token.type==='pseudo-element')/* istanbul ignore next */{ret='::'+token.name;priority=1;valid=false;// pseudo-element not support
}else if(token.type==='attribute'){var name=token.name,action=token.action,value=token.value;_utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"].add(name);if(action==='exists'){ret='['+name+']';}else if(action==='equals'){if(name==='id'){ret='#'+value;}else{ret='['+name+'="'+value+'"]';}}else if(action==='not')/* istanbul ignore next */{throw new Error('Attribute \'not\' action is not allowed.');// ret = `[${name}!="${value}"]`;
}else if(action==='start'){ret='['+name+'^="'+value+'"]';}else if(action==='end'){ret='['+name+'$="'+value+'"]';}else if(action==='element'){if(name==='class'){ret='.'+value;}else{ret='['+name+'~="'+value+'"]';}}else if(action==='any'){ret='['+name+'*="'+value+'"]';}else if(action==='hyphen'){ret='['+name+'|="'+value+'"]';}if(name==='id'&&action==='equals'){priority=1000000;}else{priority=1000;}}else if(token.type==='child'){ret='>';priority=0;}else if(token.type==='parent')/* istanbul ignore next */{throw new Error('Parent selector is not allowed.');// ret = '<';
// priority = 0;
}else if(token.type==='sibling'){ret='~';priority=0;}else if(token.type==='adjacent'){ret='+';priority=0;}else if(token.type==='descendant'){ret=' ';priority=0;}else/* istanbul ignore next */{throw new Error('Unknown token '+token+'.');}return{token:ret,priority:priority,valid:valid};}var order=0;/* harmony default export */__webpack_exports__["default"]={add:function add(rules){var fromDoc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;(0,_entries2.default)(rules).forEach(function(_ref73){var _ref74=(0,_slicedToArray4.default)(_ref73,2),rule=_ref74[0],attributes=_ref74[1];var selectors=cssWhat(rule);for(var i=0;i<selectors.length;i++){var selector=selectors[i];var tokens=selector.map(function(token){return resolveToken(token);}).filter(function(token){return token.valid;});var r=tokens.reduce(function(a,b){a.priority+=b.priority;a.tokens.push(b.token);return a;},{tokens:[],priority:0});var selectorStr=r.tokens.join('');try{var compiled=Object(_dom_selector__WEBPACK_IMPORTED_MODULE_0__["compile"])(selectorStr);var _rule2={selector:selectorStr,compiled:compiled,priority:r.priority,attributes:attributes,order:order++,fromDoc:fromDoc};cssRules.push(_rule2);}catch(ex)/* istanbul ignore next */{console.warn(ex.message);}}});cssRules.sort(function(a,b){var d=a.priority-b.priority;return d!==0?d:a.order-b.order;});},fromDocumentCSS:function fromDocumentCSS(stylesheets,override)/* istanbul ignore next */{if(override){cssRules=cssRules.filter(function(r){return!r.fromDoc;});}if(typeof document==='undefined')return;if(!stylesheets)stylesheets=document.styleSheets;if(stylesheets){var styleRules={};for(var i=0;i<stylesheets.length;i++){var rules=null;try{rules=stylesheets[i].cssRules||stylesheets[i].rules;}catch(ex){rules=null;}if(!rules)continue;// eslint-disable-line no-continue
for(var j=0;j<rules.length;j++){var rule=rules[j];var selectorText=rule.selectorText;if(rule.type!==1&&rule.type!==7){// is not style rule or keyframesrule
continue;// eslint-disable-line no-continue
}if(rule.type===7){var frames=parseFrames(rule);keyFrames[rule.name]=frames;continue;// eslint-disable-line no-continue
}var attrs=parseRuleAttrs(rule);if(attrs){styleRules[selectorText]=styleRules[selectorText]||{};(0,_assign2.default)(styleRules[selectorText],attrs);}}}this.add(styleRules,true);}},computeStyle:function computeStyle(el){if(!el.attributes)return{};el.__styleNeedUpdate=false;if(cssRules.length<=0)return{};var attrs={};var selectors=[];var transitions=[];cssRules.forEach(function(rule){var compiled=rule.compiled,selector=rule.selector,attributes=rule.attributes;if(Object(_dom_selector__WEBPACK_IMPORTED_MODULE_0__["isMatched"])(el,compiled)){(0,_assign2.default)(attrs,attributes);// console.log(JSON.stringify(attrs.transitions));
if(attrs.transitions)/* istanbul ignore next */{transitions.push.apply(transitions,(0,_toConsumableArray4.default)(attrs.transitions));attrs.transitions.forEach(function(t){(0,_keys2.default)(t.attrs).forEach(function(k){// if(k in attrs) delete attrs[k];
el.attributes.__getStyleTag=true;if(el.attributes[k]){attrs[k]=el.attributes[k];}el.attributes.__getStyleTag=false;// console.log(el.attributes.style[k]);
});});delete attrs.transitions;}selectors.push(selector);}});// if(selectors.length <= 0) return;
var matchedSelectors=selectors.join();if(el[_matchedSelectors]!==matchedSelectors){// console.log(transitions);
/* istanbul ignore if */if(attrs.animation){var animation=attrs.animation;var delay=animation.animationDelay,direction=animation.animationDirection,duration=animation.animationDuration,fill=animation.animationFillMode,iterations=animation.animationIterationCount,name=animation.animationName,playState=animation.animationPlayState,easing=animation.animationTimingFunction;var frames=keyFrames[name];if(frames){if(el[_animation]){el[_animation].cancel();}el[_animation]=el.animate(frames,{duration:duration,delay:delay,fill:fill,iterations:iterations,easing:easing,direction:direction});el.setReleaseKey(_animation);if(playState!=='running')el[_animation].pause();}else{console.warn('Unknow animation: '+name);}delete attrs.animation;}/* istanbul ignore if */if(el[_transitions]){el[_transitions].forEach(function(t){t.cancel(true);el.attributes.__styleTag=true;el.attr(t.__attrs);el.attributes.__styleTag=false;});delete el[_transitions];}/* istanbul ignore if */if(transitions.length>0){el[_transitions]=[];el.setReleaseKey(_transitions);_promise2.default.all(transitions.map(function(t){var attrs=t.attrs,delay=t.delay,duration=t.duration,easing=t.easing;var transition=el.transition({duration:duration,delay:delay},easing,true);transition.__attrs=attrs;el[_transitions].push(transition);return transition.attr((0,_assign2.default)({},attrs));})).then(function(){el.dispatchEvent('transitionend',{},true,true);});}el.dispatchEvent('stylechange',{oldSelectors:el[_matchedSelectors],newSelectors:matchedSelectors},true,true);el[_matchedSelectors]=matchedSelectors;el.attributes.clearStyle();el.attributes.__styleTag=true;el.attr(attrs);el.attributes.__styleTag=false;// if(el.forceUpdate) el.forceUpdate();
}return attrs;},get relatedAttributes(){return _utils__WEBPACK_IMPORTED_MODULE_1__["relatedAttributes"];},get cssRules(){return cssRules;}};/***/},/* 102 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);/* harmony import */var _resource__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103);var _loadBgImagePassport=(0,_symbol2.default)('loadBgImagePassport');sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"].prototype.loadBgImage=function(val){var _this86=this;var res=void 0;if(val.id){res=_resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture({id:val.id});}else if(val.src){res=_resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(val.src);}if(res instanceof _promise2.default){var passport=(0,_symbol2.default)('passport');this[_loadBgImagePassport]=passport;res.then(function(_ref75){var img=_ref75.img,texture=_ref75.texture;if(passport===_this86[_loadBgImagePassport]){var bgimage=_this86.attr('bgimage');bgimage.image=img;_this86.attr('bgimage',null);_this86.attr('bgimage',bgimage);}});}else if(res){val.image=res.img;}return val;};/* harmony default export */__webpack_exports__["default"]=sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"];/***/},/* 103 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _platform__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(104);var axios=__webpack_require__(105);var loadedResources=new _map2.default();/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */var Resource={loadTimeout:30000,loadedResources:loadedResources,loadTexture:function loadTexture(texture){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Resource.loadTimeout;if(typeof texture==='string'){texture={src:texture};}if(!texture.id){texture.id=texture.src;}var mapKey=texture.id;if(!loadedResources.has(mapKey)){var promise=new _promise2.default(function(resolve,reject){var timer=setTimeout(function(){reject(new Error('load img timeout'));},timeout);Object(_platform__WEBPACK_IMPORTED_MODULE_0__["loadImage"])(texture.src).then(function(img){// save image not canvas for svg preserveAspectRatio
resolve({img:img,texture:texture,fromCache:false});loadedResources.set(mapKey,img);clearTimeout(timer);});});loadedResources.set(mapKey,promise);return promise;}var img=loadedResources.get(mapKey);if(img instanceof _promise2.default){return img.then(function(res){return{img:res.img,texture:texture,fromCache:false};});}return{img:img,texture:texture,fromCache:true};},/**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */loadFrames:function(){var _ref76=(0,_asyncToGenerator3.default)(/*#__PURE__*/_regenerator2.default.mark(function _callee(src,frameData){var texture,frames;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(typeof frameData==='string')){_context.next=5;break;}_context.next=3;return axios.get(frameData);case 3:frameData=_context.sent;frameData=frameData.data;case 5:_context.next=7;return this.loadTexture(src);case 7:texture=_context.sent;frames=frameData.frames;(0,_entries2.default)(frames).forEach(function(_ref77){var _ref78=(0,_slicedToArray4.default)(_ref77,2),key=_ref78[0],frame=_ref78[1];var _frame$sourceSize=frame.sourceSize,w=_frame$sourceSize.w,h=_frame$sourceSize.h;var canvas=Object(_platform__WEBPACK_IMPORTED_MODULE_0__["createCanvas"])(w,h),srcRect=frame.frame,rect=frame.spriteSourceSize,context=canvas.getContext('2d');var rotated=frame.rotated;context.save();if(rotated){context.translate(0,h);context.rotate(-0.5*Math.PI);var tmp=rect.y;rect.y=rect.x;rect.x=h-srcRect.h-tmp;context.drawImage(texture.img,srcRect.x,srcRect.y,srcRect.h,srcRect.w,rect.x,rect.y,rect.h,rect.w);}else{context.drawImage(texture.img,srcRect.x,srcRect.y,srcRect.w,srcRect.h,rect.x,rect.y,rect.w,rect.h);}context.restore();loadedResources.set(key,canvas);});return _context.abrupt('return',texture);case 11:case'end':return _context.stop();}}},_callee,this);}));function loadFrames(_x74,_x75){return _ref76.apply(this,arguments);}return loadFrames;}()};/* harmony default export */__webpack_exports__["default"]=Resource;/***/},/* 104 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createCanvas",function(){return createCanvas;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"loadImage",function(){return loadImage;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getContainer",function(){return getContainer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"shim",function(){return shim;});function createCanvas(){var width=arguments.length>0&&arguments[0]!==undefined?arguments[0]:300;var height=arguments.length>1&&arguments[1]!==undefined?arguments[1]:150;var canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;return canvas;}function loadImage(src){var img=document.createElement('img');if(typeof src==='string'&&!/^data:image\/(.*);base64/.test(src)){// base64 dont need crossOrigin - fix early webkit cross domain bug
img.crossOrigin='anonymous';}var promise=new _promise2.default(function(resolve){img.addEventListener('load',function(){resolve(img);});});img.src=src;return promise;}function getContainer(container){if(typeof container==='string'){container=document.querySelector(container);}if(!container){throw new Error('Container is not defined or cannot found.');}return container;}function shim(){// CustomEvent polyfill https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent
try{// a : While a window.CustomEvent object exists, it cannot be called as a constructor.
// b : There is no window.CustomEvent object
new window.CustomEvent('T');}catch(e){var _CustomEvent=function _CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;};_CustomEvent.prototype=window.Event.prototype;window.CustomEvent=_CustomEvent;}}/***/},/* 105 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(106);/***/},/* 106 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);var bind=__webpack_require__(108);var Axios=__webpack_require__(110);var defaults=__webpack_require__(111);/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */function createInstance(defaultConfig){var context=new Axios(defaultConfig);var instance=bind(Axios.prototype.request,context);// Copy axios.prototype to instance
utils.extend(instance,Axios.prototype,context);// Copy context to instance
utils.extend(instance,context);return instance;}// Create the default instance to be exported
var axios=createInstance(defaults);// Expose Axios class to allow class inheritance
axios.Axios=Axios;// Factory for creating new instances
axios.create=function create(instanceConfig){return createInstance(utils.merge(defaults,instanceConfig));};// Expose Cancel & CancelToken
axios.Cancel=__webpack_require__(129);axios.CancelToken=__webpack_require__(130);axios.isCancel=__webpack_require__(126);// Expose all/spread
axios.all=function all(promises){return _promise2.default.all(promises);};axios.spread=__webpack_require__(131);module.exports=axios;// Allow use of default import syntax in TypeScript
module.exports.default=axios;/***/},/* 107 *//***/function(module,exports,__webpack_require__){"use strict";var bind=__webpack_require__(108);var isBuffer=__webpack_require__(109);/*global toString:true*/// utils is a library of generic helper functions non-specific to axios
var toString=Object.prototype.toString;/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */function isArray(val){return toString.call(val)==='[object Array]';}/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */function isArrayBuffer(val){return toString.call(val)==='[object ArrayBuffer]';}/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */function isFormData(val){return typeof FormData!=='undefined'&&val instanceof FormData;}/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function isArrayBufferView(val){var result;if(typeof ArrayBuffer!=='undefined'&&ArrayBuffer.isView){result=ArrayBuffer.isView(val);}else{result=val&&val.buffer&&val.buffer instanceof ArrayBuffer;}return result;}/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */function isString(val){return typeof val==='string';}/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */function isNumber(val){return typeof val==='number';}/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */function isUndefined(val){return typeof val==='undefined';}/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */function isObject(val){return val!==null&&(typeof val==='undefined'?'undefined':(0,_typeof3.default)(val))==='object';}/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */function isDate(val){return toString.call(val)==='[object Date]';}/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */function isFile(val){return toString.call(val)==='[object File]';}/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */function isBlob(val){return toString.call(val)==='[object Blob]';}/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */function isFunction(val){return toString.call(val)==='[object Function]';}/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */function isStream(val){return isObject(val)&&isFunction(val.pipe);}/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */function isURLSearchParams(val){return typeof URLSearchParams!=='undefined'&&val instanceof URLSearchParams;}/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */function trim(str){return str.replace(/^\s*/,'').replace(/\s*$/,'');}/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */function isStandardBrowserEnv(){if(typeof navigator!=='undefined'&&navigator.product==='ReactNative'){return false;}return typeof window!=='undefined'&&typeof document!=='undefined';}/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */function forEach(obj,fn){// Don't bother if no value provided
if(obj===null||typeof obj==='undefined'){return;}// Force an array if not already something iterable
if((typeof obj==='undefined'?'undefined':(0,_typeof3.default)(obj))!=='object'){/*eslint no-param-reassign:0*/obj=[obj];}if(isArray(obj)){// Iterate over array values
for(var i=0,l=obj.length;i<l;i++){fn.call(null,obj[i],i,obj);}}else{// Iterate over object keys
for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){fn.call(null,obj[key],key,obj);}}}}/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */function merge()/* obj1, obj2, obj3, ... */{var result={};function assignValue(val,key){if((0,_typeof3.default)(result[key])==='object'&&(typeof val==='undefined'?'undefined':(0,_typeof3.default)(val))==='object'){result[key]=merge(result[key],val);}else{result[key]=val;}}for(var i=0,l=arguments.length;i<l;i++){forEach(arguments[i],assignValue);}return result;}/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */function extend(a,b,thisArg){forEach(b,function assignValue(val,key){if(thisArg&&typeof val==='function'){a[key]=bind(val,thisArg);}else{a[key]=val;}});return a;}module.exports={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim};/***/},/* 108 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=function bind(fn,thisArg){return function wrap(){var args=new Array(arguments.length);for(var i=0;i<args.length;i++){args[i]=arguments[i];}return fn.apply(thisArg,args);};};/***/},/* 109 *//***/function(module,exports){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports=function(obj){return obj!=null&&(isBuffer(obj)||isSlowBuffer(obj)||!!obj._isBuffer);};function isBuffer(obj){return!!obj.constructor&&typeof obj.constructor.isBuffer==='function'&&obj.constructor.isBuffer(obj);}// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj){return typeof obj.readFloatLE==='function'&&typeof obj.slice==='function'&&isBuffer(obj.slice(0,0));}/***/},/* 110 *//***/function(module,exports,__webpack_require__){"use strict";var defaults=__webpack_require__(111);var utils=__webpack_require__(107);var InterceptorManager=__webpack_require__(123);var dispatchRequest=__webpack_require__(124);/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */function Axios(instanceConfig){this.defaults=instanceConfig;this.interceptors={request:new InterceptorManager(),response:new InterceptorManager()};}/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */Axios.prototype.request=function request(config){/*eslint no-param-reassign:0*/// Allow for axios('example/url'[, config]) a la fetch API
if(typeof config==='string'){config=utils.merge({url:arguments[0]},arguments[1]);}config=utils.merge(defaults,{method:'get'},this.defaults,config);config.method=config.method.toLowerCase();// Hook up interceptors middleware
var chain=[dispatchRequest,undefined];var promise=_promise2.default.resolve(config);this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){chain.unshift(interceptor.fulfilled,interceptor.rejected);});this.interceptors.response.forEach(function pushResponseInterceptors(interceptor){chain.push(interceptor.fulfilled,interceptor.rejected);});while(chain.length){promise=promise.then(chain.shift(),chain.shift());}return promise;};// Provide aliases for supported request methods
utils.forEach(['delete','get','head','options'],function forEachMethodNoData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,config){return this.request(utils.merge(config||{},{method:method,url:url}));};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){/*eslint func-names:0*/Axios.prototype[method]=function(url,data,config){return this.request(utils.merge(config||{},{method:method,url:url,data:data}));};});module.exports=Axios;/***/},/* 111 *//***/function(module,exports,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(process){var utils=__webpack_require__(107);var normalizeHeaderName=__webpack_require__(113);var DEFAULT_CONTENT_TYPE={'Content-Type':'application/x-www-form-urlencoded'};function setContentTypeIfUnset(headers,value){if(!utils.isUndefined(headers)&&utils.isUndefined(headers['Content-Type'])){headers['Content-Type']=value;}}function getDefaultAdapter(){var adapter;if(typeof XMLHttpRequest!=='undefined'){// For browsers use XHR adapter
adapter=__webpack_require__(114);}else if(typeof process!=='undefined'){// For node use HTTP adapter
adapter=__webpack_require__(114);}return adapter;}var defaults={adapter:getDefaultAdapter(),transformRequest:[function transformRequest(data,headers){normalizeHeaderName(headers,'Content-Type');if(utils.isFormData(data)||utils.isArrayBuffer(data)||utils.isBuffer(data)||utils.isStream(data)||utils.isFile(data)||utils.isBlob(data)){return data;}if(utils.isArrayBufferView(data)){return data.buffer;}if(utils.isURLSearchParams(data)){setContentTypeIfUnset(headers,'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if(utils.isObject(data)){setContentTypeIfUnset(headers,'application/json;charset=utf-8');return(0,_stringify2.default)(data);}return data;}],transformResponse:[function transformResponse(data){/*eslint no-param-reassign:0*/if(typeof data==='string'){try{data=JSON.parse(data);}catch(e){/* Ignore */}}return data;}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,validateStatus:function validateStatus(status){return status>=200&&status<300;}};defaults.headers={common:{'Accept':'application/json, text/plain, */*'}};utils.forEach(['delete','get','head'],function forEachMethodNoData(method){defaults.headers[method]={};});utils.forEach(['post','put','patch'],function forEachMethodWithData(method){defaults.headers[method]=utils.merge(DEFAULT_CONTENT_TYPE);});module.exports=defaults;/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(112));/***/},/* 112 *//***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 113 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);module.exports=function normalizeHeaderName(headers,normalizedName){utils.forEach(headers,function processHeader(value,name){if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()){headers[normalizedName]=value;delete headers[name];}});};/***/},/* 114 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);var settle=__webpack_require__(115);var buildURL=__webpack_require__(118);var parseHeaders=__webpack_require__(119);var isURLSameOrigin=__webpack_require__(120);var createError=__webpack_require__(116);var btoa=typeof window!=='undefined'&&window.btoa&&window.btoa.bind(window)||__webpack_require__(121);module.exports=function xhrAdapter(config){return new _promise2.default(function dispatchXhrRequest(resolve,reject){var requestData=config.data;var requestHeaders=config.headers;if(utils.isFormData(requestData)){delete requestHeaders['Content-Type'];// Let the browser set it
}var request=new XMLHttpRequest();var loadEvent='onreadystatechange';var xDomain=false;// For IE 8/9 CORS support
// Only supports POST and GET calls and doesn't returns the response headers.
// DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
if("none"!=='test'&&typeof window!=='undefined'&&window.XDomainRequest&&!('withCredentials'in request)&&!isURLSameOrigin(config.url)){request=new window.XDomainRequest();loadEvent='onload';xDomain=true;request.onprogress=function handleProgress(){};request.ontimeout=function handleTimeout(){};}// HTTP basic authentication
if(config.auth){var username=config.auth.username||'';var password=config.auth.password||'';requestHeaders.Authorization='Basic '+btoa(username+':'+password);}request.open(config.method.toUpperCase(),buildURL(config.url,config.params,config.paramsSerializer),true);// Set the request timeout in MS
request.timeout=config.timeout;// Listen for ready state
request[loadEvent]=function handleLoad(){if(!request||request.readyState!==4&&!xDomain){return;}// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
if(request.status===0&&!(request.responseURL&&request.responseURL.indexOf('file:')===0)){return;}// Prepare the response
var responseHeaders='getAllResponseHeaders'in request?parseHeaders(request.getAllResponseHeaders()):null;var responseData=!config.responseType||config.responseType==='text'?request.responseText:request.response;var response={data:responseData,// IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
status:request.status===1223?204:request.status,statusText:request.status===1223?'No Content':request.statusText,headers:responseHeaders,config:config,request:request};settle(resolve,reject,response);// Clean up request
request=null;};// Handle low level network errors
request.onerror=function handleError(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
reject(createError('Network Error',config,null,request));// Clean up request
request=null;};// Handle timeout
request.ontimeout=function handleTimeout(){reject(createError('timeout of '+config.timeout+'ms exceeded',config,'ECONNABORTED',request));// Clean up request
request=null;};// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(utils.isStandardBrowserEnv()){var cookies=__webpack_require__(122);// Add xsrf header
var xsrfValue=(config.withCredentials||isURLSameOrigin(config.url))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):undefined;if(xsrfValue){requestHeaders[config.xsrfHeaderName]=xsrfValue;}}// Add headers to the request
if('setRequestHeader'in request){utils.forEach(requestHeaders,function setRequestHeader(val,key){if(typeof requestData==='undefined'&&key.toLowerCase()==='content-type'){// Remove Content-Type if data is undefined
delete requestHeaders[key];}else{// Otherwise add header to the request
request.setRequestHeader(key,val);}});}// Add withCredentials to request if needed
if(config.withCredentials){request.withCredentials=true;}// Add responseType to request if needed
if(config.responseType){try{request.responseType=config.responseType;}catch(e){// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
if(config.responseType!=='json'){throw e;}}}// Handle progress if needed
if(typeof config.onDownloadProgress==='function'){request.addEventListener('progress',config.onDownloadProgress);}// Not all browsers support upload events
if(typeof config.onUploadProgress==='function'&&request.upload){request.upload.addEventListener('progress',config.onUploadProgress);}if(config.cancelToken){// Handle cancellation
config.cancelToken.promise.then(function onCanceled(cancel){if(!request){return;}request.abort();reject(cancel);// Clean up request
request=null;});}if(requestData===undefined){requestData=null;}// Send the request
request.send(requestData);});};/***/},/* 115 *//***/function(module,exports,__webpack_require__){"use strict";var createError=__webpack_require__(116);/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */module.exports=function settle(resolve,reject,response){var validateStatus=response.config.validateStatus;// Note: status is not exposed by XDomainRequest
if(!response.status||!validateStatus||validateStatus(response.status)){resolve(response);}else{reject(createError('Request failed with status code '+response.status,response.config,null,response.request,response));}};/***/},/* 116 *//***/function(module,exports,__webpack_require__){"use strict";var enhanceError=__webpack_require__(117);/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */module.exports=function createError(message,config,code,request,response){var error=new Error(message);return enhanceError(error,config,code,request,response);};/***/},/* 117 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */module.exports=function enhanceError(error,config,code,request,response){error.config=config;if(code){error.code=code;}error.request=request;error.response=response;return error;};/***/},/* 118 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);function encode(val){return encodeURIComponent(val).replace(/%40/gi,'@').replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']');}/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */module.exports=function buildURL(url,params,paramsSerializer){/*eslint no-param-reassign:0*/if(!params){return url;}var serializedParams;if(paramsSerializer){serializedParams=paramsSerializer(params);}else if(utils.isURLSearchParams(params)){serializedParams=params.toString();}else{var parts=[];utils.forEach(params,function serialize(val,key){if(val===null||typeof val==='undefined'){return;}if(utils.isArray(val)){key=key+'[]';}else{val=[val];}utils.forEach(val,function parseValue(v){if(utils.isDate(v)){v=v.toISOString();}else if(utils.isObject(v)){v=(0,_stringify2.default)(v);}parts.push(encode(key)+'='+encode(v));});});serializedParams=parts.join('&');}if(serializedParams){url+=(url.indexOf('?')===-1?'?':'&')+serializedParams;}return url;};/***/},/* 119 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */module.exports=function parseHeaders(headers){var parsed={};var key;var val;var i;if(!headers){return parsed;}utils.forEach(headers.split('\n'),function parser(line){i=line.indexOf(':');key=utils.trim(line.substr(0,i)).toLowerCase();val=utils.trim(line.substr(i+1));if(key){if(parsed[key]&&ignoreDuplicateOf.indexOf(key)>=0){return;}if(key==='set-cookie'){parsed[key]=(parsed[key]?parsed[key]:[]).concat([val]);}else{parsed[key]=parsed[key]?parsed[key]+', '+val:val;}}});return parsed;};/***/},/* 120 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);module.exports=utils.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv(){var msie=/(msie|trident)/i.test(navigator.userAgent);var urlParsingNode=document.createElement('a');var originURL;/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function resolveURL(url){var href=url;if(msie){// IE needs attribute set twice to normalize properties
urlParsingNode.setAttribute('href',href);href=urlParsingNode.href;}urlParsingNode.setAttribute('href',href);// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname};}originURL=resolveURL(window.location.href);/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return function isURLSameOrigin(requestURL){var parsed=utils.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host;};}():// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true;};}();/***/},/* 121 *//***/function(module,exports,__webpack_require__){"use strict";// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function E(){this.message='String contains an invalid character';}E.prototype=new Error();E.prototype.code=5;E.prototype.name='InvalidCharacterError';function btoa(input){var str=String(input);var output='';for(// initialize result and counter
var block,charCode,idx=0,map=chars;// if the next str index does not exist:
//   change the mapping table to "="
//   check if d has no fractional digits
str.charAt(idx|0)||(map='=',idx%1);// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
output+=map.charAt(63&block>>8-idx%1*8)){charCode=str.charCodeAt(idx+=3/4);if(charCode>0xFF){throw new E();}block=block<<8|charCode;}return output;}module.exports=btoa;/***/},/* 122 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);module.exports=utils.isStandardBrowserEnv()?// Standard browser envs support document.cookie
function standardBrowserEnv(){return{write:function write(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+'='+encodeURIComponent(value));if(utils.isNumber(expires)){cookie.push('expires='+new Date(expires).toGMTString());}if(utils.isString(path)){cookie.push('path='+path);}if(utils.isString(domain)){cookie.push('domain='+domain);}if(secure===true){cookie.push('secure');}document.cookie=cookie.join('; ');},read:function read(name){var match=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'));return match?decodeURIComponent(match[3]):null;},remove:function remove(name){this.write(name,'',Date.now()-86400000);}};}():// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null;},remove:function remove(){}};}();/***/},/* 123 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);function InterceptorManager(){this.handlers=[];}/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */InterceptorManager.prototype.use=function use(fulfilled,rejected){this.handlers.push({fulfilled:fulfilled,rejected:rejected});return this.handlers.length-1;};/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */InterceptorManager.prototype.eject=function eject(id){if(this.handlers[id]){this.handlers[id]=null;}};/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */InterceptorManager.prototype.forEach=function forEach(fn){utils.forEach(this.handlers,function forEachHandler(h){if(h!==null){fn(h);}});};module.exports=InterceptorManager;/***/},/* 124 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);var transformData=__webpack_require__(125);var isCancel=__webpack_require__(126);var defaults=__webpack_require__(111);var isAbsoluteURL=__webpack_require__(127);var combineURLs=__webpack_require__(128);/**
 * Throws a `Cancel` if cancellation has been requested.
 */function throwIfCancellationRequested(config){if(config.cancelToken){config.cancelToken.throwIfRequested();}}/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */module.exports=function dispatchRequest(config){throwIfCancellationRequested(config);// Support baseURL config
if(config.baseURL&&!isAbsoluteURL(config.url)){config.url=combineURLs(config.baseURL,config.url);}// Ensure headers exist
config.headers=config.headers||{};// Transform request data
config.data=transformData(config.data,config.headers,config.transformRequest);// Flatten headers
config.headers=utils.merge(config.headers.common||{},config.headers[config.method]||{},config.headers||{});utils.forEach(['delete','get','head','post','put','patch','common'],function cleanHeaderConfig(method){delete config.headers[method];});var adapter=config.adapter||defaults.adapter;return adapter(config).then(function onAdapterResolution(response){throwIfCancellationRequested(config);// Transform response data
response.data=transformData(response.data,response.headers,config.transformResponse);return response;},function onAdapterRejection(reason){if(!isCancel(reason)){throwIfCancellationRequested(config);// Transform response data
if(reason&&reason.response){reason.response.data=transformData(reason.response.data,reason.response.headers,config.transformResponse);}}return _promise2.default.reject(reason);});};/***/},/* 125 *//***/function(module,exports,__webpack_require__){"use strict";var utils=__webpack_require__(107);/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */module.exports=function transformData(data,headers,fns){/*eslint no-param-reassign:0*/utils.forEach(fns,function transform(fn){data=fn(data,headers);});return data;};/***/},/* 126 *//***/function(module,exports,__webpack_require__){"use strict";module.exports=function isCancel(value){return!!(value&&value.__CANCEL__);};/***/},/* 127 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */module.exports=function isAbsoluteURL(url){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);};/***/},/* 128 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */module.exports=function combineURLs(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL;};/***/},/* 129 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */function Cancel(message){this.message=message;}Cancel.prototype.toString=function toString(){return'Cancel'+(this.message?': '+this.message:'');};Cancel.prototype.__CANCEL__=true;module.exports=Cancel;/***/},/* 130 *//***/function(module,exports,__webpack_require__){"use strict";var Cancel=__webpack_require__(129);/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function CancelToken(executor){if(typeof executor!=='function'){throw new TypeError('executor must be a function.');}var resolvePromise;this.promise=new _promise2.default(function promiseExecutor(resolve){resolvePromise=resolve;});var token=this;executor(function cancel(message){if(token.reason){// Cancellation has already been requested
return;}token.reason=new Cancel(message);resolvePromise(token.reason);});}/**
 * Throws a `Cancel` if cancellation has been requested.
 */CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason;}};/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */CancelToken.source=function source(){var cancel;var token=new CancelToken(function executor(c){cancel=c;});return{token:token,cancel:cancel};};module.exports=CancelToken;/***/},/* 131 *//***/function(module,exports,__webpack_require__){"use strict";/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */module.exports=function spread(callback){return function wrap(arr){return callback.apply(null,arr);};};/***/},/* 132 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);/* harmony import */var _resource__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(103);function _decorate(decorators,factory,superClass){var r=factory(function initialize(O){_initializeInstanceElements(O,decorated.elements);},superClass);var decorated=_decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)),decorators);_initializeClassElements(r.F,decorated.elements);return _runClassFinishers(r.F,decorated.finishers);}function _createElementDescriptor(def){var key=_toPropertyKey(def.key);var descriptor;if(def.kind==="method"){descriptor={value:def.value,writable:true,configurable:true,enumerable:false};try{Object.defineProperty(def.value,"name",{value:(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?"":key,configurable:true});}catch(ex){};}else if(def.kind==="get"){descriptor={get:def.value,configurable:true,enumerable:false};}else if(def.kind==="set"){descriptor={set:def.value,configurable:true,enumerable:false};}else if(def.kind==="field"){descriptor={configurable:true,writable:true,enumerable:true};}var element={kind:def.kind==="field"?"field":"method",key:key,placement:def.static?"static":def.kind==="field"?"own":"prototype",descriptor:descriptor};if(def.decorators)element.decorators=def.decorators;if(def.kind==="field")element.initializer=def.value;return element;}function _coalesceGetterSetter(element,other){if(element.descriptor.get!==undefined){other.descriptor.get=element.descriptor.get;}else{other.descriptor.set=element.descriptor.set;}}function _coalesceClassElements(elements){var newElements=[];var isSameElement=function isSameElement(other){return other.kind==="method"&&other.key===element.key&&other.placement===element.placement;};for(var i=0;i<elements.length;i++){var element=elements[i];var other;if(element.kind==="method"&&(other=newElements.find(isSameElement))){if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other)){throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");}other.descriptor=element.descriptor;}else{if(_hasDecorators(element)){if(_hasDecorators(other)){throw new ReferenceError("Decorators can't be placed on different accessors with for "+"the same property ("+element.key+").");}other.decorators=element.decorators;}_coalesceGetterSetter(element,other);}}else{newElements.push(element);}}return newElements;}function _hasDecorators(element){return element.decorators&&element.decorators.length;}function _isDataDescriptor(desc){return desc!==undefined&&!(desc.value===undefined&&desc.writable===undefined);}function _initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach(function(kind){elements.forEach(function(element){var placement=element.placement;if(element.kind===kind&&(placement==="static"||placement==="prototype")){var receiver=placement==="static"?F:proto;_defineClassElement(receiver,element);}});});}function _initializeInstanceElements(O,elements){["method","field"].forEach(function(kind){elements.forEach(function(element){if(element.kind===kind&&element.placement==="own"){_defineClassElement(O,element);}});});}function _defineClassElement(receiver,element){var descriptor=element.descriptor;if(element.kind==="field"){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:initializer===void 0?void 0:initializer.call(receiver)};}(0,_defineProperty6.default)(receiver,element.key,descriptor);}function _decorateClass(elements,decorators){var newElements=[];var finishers=[];var placements={static:[],prototype:[],own:[]};elements.forEach(function(element){_addElementPlacement(element,placements);});elements.forEach(function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=_decorateElement(element,placements);newElements.push(elementFinishersExtras.element);newElements.push.apply(newElements,elementFinishersExtras.extras);finishers.push.apply(finishers,elementFinishersExtras.finishers);});if(!decorators){return{elements:newElements,finishers:finishers};}var result=_decorateConstructor(newElements,decorators);finishers.push.apply(finishers,result.finishers);result.finishers=finishers;return result;}function _addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&keys.indexOf(element.key)!==-1){throw new TypeError("Duplicated element ("+element.key+")");}keys.push(element.key);}function _decorateElement(element,placements){var extras=[];var finishers=[];for(var decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=_fromElementDescriptor(element);var elementFinisherExtras=_toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element;_addElementPlacement(element,placements);if(elementFinisherExtras.finisher){finishers.push(elementFinisherExtras.finisher);}var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++){_addElementPlacement(newExtras[j],placements);}extras.push.apply(extras,newExtras);}}return{element:element,finishers:finishers,extras:extras};}function _decorateConstructor(elements,decorators){var finishers=[];for(var i=decorators.length-1;i>=0;i--){var obj=_fromClassDescriptor(elements);var elementsAndFinisher=_toClassDescriptor((0,decorators[i])(obj)||obj);if(elementsAndFinisher.finisher!==undefined){finishers.push(elementsAndFinisher.finisher);}if(elementsAndFinisher.elements!==undefined){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++){for(var k=j+1;k<elements.length;k++){if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement){throw new TypeError("Duplicated element ("+elements[j].key+")");}}}}}return{elements:elements,finishers:finishers};}function _fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);if(element.kind==="field")obj.initializer=element.initializer;return obj;}function _toElementDescriptors(elementObjects){if(elementObjects===undefined)return;return _toArray(elementObjects).map(function(elementObject){var element=_toElementDescriptor(elementObject);_disallowProperty(elementObject,"finisher","An element descriptor");_disallowProperty(elementObject,"extras","An element descriptor");return element;});}function _toElementDescriptor(elementObject){var kind=String(elementObject.kind);if(kind!=="method"&&kind!=="field"){throw new TypeError('An element descriptor\'s .kind property must be either "method" or'+' "field", but a decorator created an element descriptor with'+' .kind "'+kind+'"');}var key=_toPropertyKey(elementObject.key);var placement=String(elementObject.placement);if(placement!=="static"&&placement!=="prototype"&&placement!=="own"){throw new TypeError('An element descriptor\'s .placement property must be one of "static",'+' "prototype" or "own", but a decorator created an element descriptor'+' with .placement "'+placement+'"');}var descriptor=elementObject.descriptor;_disallowProperty(elementObject,"elements","An element descriptor");var element={kind:kind,key:key,placement:placement,descriptor:(0,_assign2.default)({},descriptor)};if(kind!=="field"){_disallowProperty(elementObject,"initializer","A method descriptor");}else{_disallowProperty(descriptor,"get","The property descriptor of a field descriptor");_disallowProperty(descriptor,"set","The property descriptor of a field descriptor");_disallowProperty(descriptor,"value","The property descriptor of a field descriptor");element.initializer=elementObject.initializer;}return element;}function _toElementFinisherExtras(elementObject){var element=_toElementDescriptor(elementObject);var finisher=_optionalCallableProperty(elementObject,"finisher");var extras=_toElementDescriptors(elementObject.extras);return{element:element,finisher:finisher,extras:extras};}function _fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(_fromElementDescriptor)};var desc={value:"Descriptor",configurable:true};(0,_defineProperty6.default)(obj,_toStringTag2.default,desc);return obj;}function _toClassDescriptor(obj){var kind=String(obj.kind);if(kind!=="class"){throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator'+' created a class descriptor with .kind "'+kind+'"');}_disallowProperty(obj,"key","A class descriptor");_disallowProperty(obj,"placement","A class descriptor");_disallowProperty(obj,"descriptor","A class descriptor");_disallowProperty(obj,"initializer","A class descriptor");_disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");var elements=_toElementDescriptors(obj.elements);return{elements:elements,finisher:finisher};}function _disallowProperty(obj,name,objectType){if(obj[name]!==undefined){throw new TypeError(objectType+" can't have a ."+name+" property.");}}function _optionalCallableProperty(obj,name){var value=obj[name];if(value!==undefined&&typeof value!=="function"){throw new TypeError("Expected '"+name+"' to be a function");}return value;}function _runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(newConstructor!==undefined){if(typeof newConstructor!=="function"){throw new TypeError("Finishers must return a constructor.");}constructor=newConstructor;}}return constructor;}function _toPropertyKey(arg){var key=_toPrimitive(arg,"string");return(typeof key==='undefined'?'undefined':(0,_typeof3.default)(key))==="symbol"?key:String(key);}function _toPrimitive(input,hint){if((typeof input==='undefined'?'undefined':(0,_typeof3.default)(input))!=="object"||input===null)return input;var prim=input[_toPrimitive3.default];if(prim!==undefined){var res=prim.call(input,hint||"default");if((typeof res==='undefined'?'undefined':(0,_typeof3.default)(res))!=="object")return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return(hint==="string"?String:Number)(input);}function _toArray(arr){return _arrayWithHoles(arr)||_iterableToArray(arr)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArray(iter){if((0,_isIterable3.default)(Object(iter))||Object.prototype.toString.call(iter)==="[object Arguments]")return(0,_from2.default)(iter);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&_get6.default){_get=_get6.default;}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=(0,_getOwnPropertyDescriptor2.default)(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break;}return object;}function _getPrototypeOf(o){_getPrototypeOf=_setPrototypeOf2.default?_getPrototypeOf3.default:function _getPrototypeOf(o){return o.__proto__||(0,_getPrototypeOf3.default)(o);};return _getPrototypeOf(o);}var attr=sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"].attr;var generateID=sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"].generateID;var _mapTextures=(0,_symbol2.default)('mapTextures'),_loadTexturePassport=(0,_symbol2.default)('loadTexturePassport');var ResAttr=_decorate(null,function(_initialize,_Sprite$Attr){var ResAttr=function(_Sprite$Attr2){(0,_inherits3.default)(ResAttr,_Sprite$Attr2);function ResAttr(){var _ref79;(0,_classCallCheck4.default)(this,ResAttr);for(var _len18=arguments.length,args=Array(_len18),_key18=0;_key18<_len18;_key18++){args[_key18]=arguments[_key18];}var _this87=(0,_possibleConstructorReturn3.default)(this,(_ref79=ResAttr.__proto__||(0,_getPrototypeOf3.default)(ResAttr)).call.apply(_ref79,[this].concat(args)));_initialize(_this87);return _this87;}return ResAttr;}(_Sprite$Attr);return{F:ResAttr,d:[{kind:"set",decorators:[attr({value:[]})],key:"textures",value:function value(textures){if(!Array.isArray(textures)){textures=[textures];}textures=textures.map(function(texture){if(typeof texture==='string'){texture={src:texture};}else if(!texture.src&&!texture.id&&!texture.image){var id=generateID(texture);_resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadedResources.set(id,texture);texture={image:texture,id:id};}else if(texture.nodeType===1){texture={image:texture,src:texture.src};}return texture;});this.set('textures',textures);this.loadTextures(textures);}},{kind:"method",key:_mapTextures,value:function value(textures){var clearCache=false;var res=textures.map(function(_ref80){var img=_ref80.img,texture=_ref80.texture,fromCache=_ref80.fromCache;if(!fromCache)clearCache=true;return(0,_assign2.default)({},texture,{image:img});});if(clearCache){// async loaded images
this.subject.forceUpdate(true);}_get(_getPrototypeOf(ResAttr.prototype),"loadTextures",this).call(this,res);}},{kind:"method",key:"loadTextures",value:function value(textures){var _this88=this;// adaptive textures
var passport=(0,_symbol2.default)('passport');this[_loadTexturePassport]=passport;var hasPromise=false;var tasks=textures.map(function(texture){if(texture.image){return{img:texture.image,texture:texture,fromCache:true};}var loadingTexture=_resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(texture);if(loadingTexture instanceof _promise2.default){hasPromise=true;}return loadingTexture;});if(hasPromise){_promise2.default.all(tasks).then(function(res){if(_this88[_loadTexturePassport]===passport){// prevent multicall loadTextures
_this88[_mapTextures](res);}});}else{// if preload image, calculate the size of sprite synchronously
this[_mapTextures](tasks);}}}]};},sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr);sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"].Attr=ResAttr;/* harmony default export */__webpack_exports__["default"]=sprite_core__WEBPACK_IMPORTED_MODULE_0__["Sprite"];/***/},/* 133 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var sprite_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);/* harmony import */var _platform__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104);var _resolution=(0,_symbol2.default)('resolution');var _attrs=(0,_symbol2.default)('attrs');var _displayRatio=(0,_symbol2.default)('displayRatio');var ExLayer=function(_sprite_core__WEBPACK){(0,_inherits3.default)(ExLayer,_sprite_core__WEBPACK);function ExLayer(id){var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,_classCallCheck4.default)(this,ExLayer);if((typeof id==='undefined'?'undefined':(0,_typeof3.default)(id))==='object'){opts=id;id=opts.id||'id_'+Math.random().toString().slice(2,10);}var _opts=opts,context=_opts.context,resolution=_opts.resolution,_opts$handleEvent=_opts.handleEvent,handleEvent=_opts$handleEvent===undefined?true:_opts$handleEvent,_opts$evaluateFPS=_opts.evaluateFPS,evaluateFPS=_opts$evaluateFPS===undefined?false:_opts$evaluateFPS,_opts$renderMode=_opts.renderMode,renderMode=_opts$renderMode===undefined?'repaintAll':_opts$renderMode,_opts$autoRender=_opts.autoRender,autoRender=_opts$autoRender===undefined?true:_opts$autoRender,_opts$useDocumentCSS=_opts.useDocumentCSS,useDocumentCSS=_opts$useDocumentCSS===undefined?false:_opts$useDocumentCSS;context=context||Object(_platform__WEBPACK_IMPORTED_MODULE_1__["createCanvas"])().getContext('2d');var canvas=context.canvas;canvas.dataset.layerId=id;canvas.style.position='absolute';var _this89=(0,_possibleConstructorReturn3.default)(this,(ExLayer.__proto__||(0,_getPrototypeOf3.default)(ExLayer)).call(this,{context:context,evaluateFPS:evaluateFPS,renderMode:renderMode,autoRender:autoRender,useDocumentCSS:useDocumentCSS}));_this89.handleEvent=handleEvent;if(context.canvas&&context.canvas.addEventListener){context.canvas.addEventListener('mouseleave',function(evt){// fixed mouseleave outof range
var layers=_this89.parent?_this89.parent.sortedChildNodes:[_this89];var _evt$target$getBoundi=evt.target.getBoundingClientRect(),left=_evt$target$getBoundi.left,top=_evt$target$getBoundi.top;var clientX=evt.clientX,clientY=evt.clientY;var originalX=Math.round((clientX|0)-left);var originalY=Math.round((clientY|0)-top);var _this89$toLocalPos=_this89.toLocalPos(originalX,originalY),_this89$toLocalPos2=(0,_slicedToArray4.default)(_this89$toLocalPos,2),x=_this89$toLocalPos2[0],y=_this89$toLocalPos2[1];layers.forEach(function(layer){if(layer.handleEvent){layer.dispatchEvent('mouseleave',{originalEvent:evt,layerX:x,layerY:y,originalX:originalX,originalY:originalY,x:x,y:y});}});});}if(resolution){_this89.resolution=resolution;}else{_this89[_resolution]=[_this89.canvas.width,_this89.canvas.height,0,0];}_this89[_attrs]=new _set5.default(['renderMode','autoRender','evaluateFps','handleEvent','displayRatio']);return _this89;}(0,_createClass4.default)(ExLayer,[{key:'pointCollision',value:function pointCollision(evt){if(this.outputContext.canvas){var layerX=evt.layerX|0,layerY=evt.layerY|0;var _resolution2=(0,_slicedToArray4.default)(this.resolution,4),width=_resolution2[0],height=_resolution2[1],offsetLeft=_resolution2[2],offsetTop=_resolution2[3];layerX+=offsetLeft;layerY+=offsetTop;if(layerX>=0&&layerY>=0&&layerX<width&&layerY<height){return true;}return false;}/* istanbul ignore next  */return true;}},{key:'setDisplayRatio',value:function setDisplayRatio(ratio){var maxDisplayRatio=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Infinity;var updateDisplay=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(typeof ratio==='string'){if(ratio.endsWith('rw')){ratio=parseFloat(ratio);}else if(ratio.endsWith('vw')){ratio=parseFloat(ratio)*this.viewport[0]/this.resolution[0];}else if(ratio==='auto'){if(typeof window!=='undefined'&&window.devicePixelRatio){ratio=window.devicePixelRatio*this.viewport[0]/this.resolution[0];}else{ratio=this.viewport[0]/this.resolution[0];}}else{ratio=parseFloat(ratio);}}if((0,_isFinite2.default)(ratio)){ratio=Math.min(ratio,maxDisplayRatio);}else{ratio=1;}this[_displayRatio]=ratio;if(updateDisplay)this.updateDisplay();this.dispatchEvent('ratioChange',{target:this},true,true);}},{key:'updateDisplay',value:function updateDisplay(){var _this90=this;var ratio=this[_displayRatio];var resolution=this[_resolution];var _resolution$map=resolution.map(function(r){return r*ratio;}),_resolution$map2=(0,_slicedToArray4.default)(_resolution$map,4),width=_resolution$map2[0],height=_resolution$map2[1],offsetLeft=_resolution$map2[2],offsetTop=_resolution$map2[3];var outputCanvas=this.outputContext.canvas;outputCanvas.width=width;outputCanvas.height=height;// this.outputContext.clearRect(0, 0, width, height);
if(offsetLeft||offsetTop){this.outputContext.translate(offsetLeft,offsetTop);}this.beforeDrawTransform=function(){_this90.outputContext.scale(ratio,ratio);};this.childNodes.forEach(function(child){delete child.lastRenderBox;child.forceUpdate();});}},{key:'toLocalPos',value:function toLocalPos(x,y){var resolution=this.resolution,viewport=this.viewport;x=x*resolution[0]/viewport[0]-resolution[2];y=y*resolution[1]/viewport[1]-resolution[3];return[x,y];}},{key:'toGlobalPos',value:function toGlobalPos(x,y){var resolution=this.resolution,viewport=this.viewport;x=x*viewport[0]/resolution[0]+resolution[2];y=y*viewport[1]/resolution[1]+resolution[3];return[x,y];}},{key:'clearContext',value:function clearContext(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.outputContext;if(context.canvas){var _context$canvas2=context.canvas,width=_context$canvas2.width,height=_context$canvas2.height;var resolution=this.resolution;context.clearRect(-(resolution[2]|0),-(resolution[3]|0),width,height);}}},{key:'takeSnapshot',value:function(){var _ref81=(0,_asyncToGenerator3.default)(/*#__PURE__*/_regenerator2.default.mark(function _callee2(){var snapshotCanvas,context,children;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return this.prepareRender();case 2:snapshotCanvas=this.canvas.cloneNode(true),context=snapshotCanvas.getContext('2d');context.drawImage(this.canvas,0,0);children=this.childNodes.map(function(child){return child.serialize();});return _context2.abrupt('return',{context:context,children:children});case 6:case'end':return _context2.stop();}}},_callee2,this);}));function takeSnapshot(){return _ref81.apply(this,arguments);}return takeSnapshot;}()},{key:'putSnapshot',value:function putSnapshot(snapshot){var _this91=this;var outputContext=this.outputContext;this.clearContext(outputContext);outputContext.drawImage(snapshot.context.canvas,0,0);snapshot.children.forEach(function(child){var node=Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["createNode"])(child.nodeType);if(child.id){node.id=child.id;}node.attr(JSON.parse(child.attrs));_this91.appendChild(node,false);});for(var i=0;i<this.childNodes.length;i++){var child=this.childNodes[i];child.dispatchEvent('update',{target:child,context:child.context,renderBox:child.renderBox,lastRenderBox:child.lastRenderBox},true);child.lastRenderBox=child.renderBox;}return this.childNodes;}},{key:'id',get:function get(){return this.canvas.dataset.layerId;}},{key:'resolution',get:function get(){return this[_resolution];},set:function set(resolution){this[_resolution]=resolution;if(this[_displayRatio]==null){this.setDisplayRatio(this.parent.displayRatio,this.parent.maxDisplayRatio,false);}this.updateDisplay();this.dispatchEvent('resolutionChange',{target:this},true,true);}},{key:'viewport',get:function get(){var canvas=this.canvas;if(canvas){if(canvas.getBoundingClientRect){var _canvas$getBoundingCl=canvas.getBoundingClientRect(),_width=_canvas$getBoundingCl.width,_height=_canvas$getBoundingCl.height;if(_width>0){return[_width,_height];}}if(canvas.clientWidth)return[canvas.clientWidth,canvas.clientHeight];}if(this.parent){return this.parent.layerViewport;}var _resolution3=(0,_slicedToArray4.default)(this[_resolution],2),width=_resolution3[0],height=_resolution3[1];return[width,height];}},{key:'offset',get:function get(){return[this.resolution[2],this.resolution[3]];}},{key:'center',get:function get(){var _resolution4=(0,_slicedToArray4.default)(this.resolution,2),width=_resolution4[0],height=_resolution4[1];return[width/2,height/2];}},{key:'displayRatio',get:function get(){return this[_displayRatio];}},{key:'zIndex',get:function get(){return this.attr('zIndex');},set:function set(zIndex){this.attr('zIndex',zIndex);this.canvas.style.zIndex=zIndex;this.parent.layers.reverse();}}]);return ExLayer;}(sprite_core__WEBPACK_IMPORTED_MODULE_0__["Layer"]);/* harmony default export */__webpack_exports__["default"]=ExLayer;/***/},/* 134 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Scene;});/* harmony import */var sprite_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);/* harmony import */var _layer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(133);/* harmony import */var _resource__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(103);/* harmony import */var _platform__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(104);/* harmony import */var _platform_devtools__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(135);var _sprite_core__WEBPACK2=sprite_core__WEBPACK_IMPORTED_MODULE_0__["utils"],setDeprecation=_sprite_core__WEBPACK2.setDeprecation,sortOrderedSprites=_sprite_core__WEBPACK2.sortOrderedSprites;var _layerMap=(0,_symbol2.default)('layerMap'),_zOrder=(0,_symbol2.default)('zOrder'),_layers=(0,_symbol2.default)('layers'),_snapshot=(0,_symbol2.default)('snapshot'),_viewport=(0,_symbol2.default)('viewport'),_resolution=(0,_symbol2.default)('resolution'),_resizeHandler=(0,_symbol2.default)('resizeHandler'),_attrs=(0,_symbol2.default)('attrs'),_events=(0,_symbol2.default)('events'),_subscribe=(0,_symbol2.default)('subscribe'),_displayRatio=(0,_symbol2.default)('displayRatio');var Scene=function(_sprite_core__WEBPACK3){(0,_inherits3.default)(Scene,_sprite_core__WEBPACK3);function Scene(container){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};(0,_classCallCheck4.default)(this,Scene);var _this92=(0,_possibleConstructorReturn3.default)(this,(Scene.__proto__||(0,_getPrototypeOf3.default)(Scene)).call(this));container=Object(_platform__WEBPACK_IMPORTED_MODULE_3__["getContainer"])(container);_this92.container=container;container.scene_=_this92;/* istanbul ignore if */if(arguments.length===3){setDeprecation('Scene(container, width, height)','Instead use Scene(container, {viewport, resolution}).');/* eslint-disable prefer-rest-params */options={viewport:[arguments[1],arguments[2]]};/* eslint-enabel prefer-rest-params */}_this92[_zOrder]=0;_this92[_layerMap]={};_this92[_layers]=[];_this92[_snapshot]=Object(_platform__WEBPACK_IMPORTED_MODULE_3__["createCanvas"])();var viewport=options.viewport||['',''];_this92.viewport=viewport;// scale, width, height, top, bottom, left, right
// width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
_this92.stickMode=options.stickMode||'scale';_this92.stickExtend=!!options.stickExtend;_this92.stickOffset=[0,0];_this92.resolution=options.resolution||[].concat((0,_toConsumableArray4.default)(_this92.viewport));_this92.maxDisplayRatio=options.maxDisplayRatio||Infinity;_this92.displayRatio=options.displayRatio||1.0;// d3-friendly
_this92.namespaceURI='http://spritejs.org/scene';var that=_this92;Object.defineProperty(_this92,'ownerDocument',{get:function get(){return{createElementNS:function createElementNS(uri,name){return that.layer(name);},documentElement:typeof document!=='undefined'?document:null};}});_this92[_events]=new _set5.default();var events=['mousedown','mouseup','mousemove','touchstart','touchend','touchmove','click','dblclick'];events.forEach(function(event){return _this92.delegateEvent(event);});/* istanbul ignore next */container.addEventListener('DOMNodeRemovedFromDocument',function(){if(_this92[_resizeHandler]){window.removeEventListener('resize',_this92[_resizeHandler]);delete _this92[_resizeHandler];}});_this92[_attrs]=new _set5.default(['resolution','viewport','stickMode','stickExtend','subscribe','displayRatio','maxDisplayRatio']);_this92[_subscribe]=null;return _this92;}// unit vw、rw (default 1rw ?)
(0,_createClass4.default)(Scene,[{key:'insertBefore',value:function insertBefore(newchild,refchild){var _this93=this;if(refchild==null){return this.appendLayer(newchild);}if(!this.hasLayer(refchild)){throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');}this.appendLayer(newchild,false);this.container.insertBefore(newchild.canvas||newchild,refchild.canvas||refchild);var els=this.container.children;[].concat((0,_toConsumableArray4.default)(els)).forEach(function(el,i){var id=el.dataset.layerId;if(id){var layer=_this93.layer(id);delete layer.zOrder;Object.defineProperty(layer,'zOrder',{value:i,writable:false,configurable:true});}});this[_layers]=sortOrderedSprites((0,_values4.default)(this[_layerMap]),true);}},{key:'replaceChild',value:function replaceChild(newLayer,oldLayer){this.insertBefore(newLayer,oldLayer);this.removeChild(oldLayer);}},{key:'appendChild',value:function appendChild(layer){return this.appendLayer(layer);}},{key:'removeChild',value:function removeChild(layer){return this.removeLayer(layer);}},{key:'updateViewport',value:function updateViewport(layer){var _this94=this;var _layerViewport=(0,_slicedToArray4.default)(this.layerViewport,2),width=_layerViewport[0],height=_layerViewport[1],stickMode=this.stickMode,stickExtend=this.stickExtend;var layers=layer?[layer]:this[_layers];layers=layers.filter(function(layer){var canvas=layer.canvas;if(!canvas)return false;// ignore not canvas layer
canvas.style.width=width+'px';canvas.style.height=height+'px';(0,_assign2.default)(canvas.style,{top:'',right:'',bottom:'',left:'',transform:''});if(!stickExtend&&(stickMode==='width'||stickMode==='height')){canvas.style.top='50%';canvas.style.left='50%';canvas.style.transform='translate(-50%, -50%)';}else if(!stickExtend&&(stickMode==='right'||stickMode==='bottom')){canvas.style.right='0';canvas.style.bottom='0';}else{canvas.style.top='0';canvas.style.left='0';}if(stickExtend){layer.resolution=_this94.layerResolution;}return true;});this.dispatchEvent('viewportChange',{target:this,layers:layers});return this;}},{key:'updateResolution',value:function updateResolution(layer){var _this95=this;var layers=layer?[layer]:this[_layers];layers.forEach(function(layer){if(layer.canvas){layer.resolution=_this95.layerResolution;}});this.dispatchEvent('resolutionChange',{target:this,layers:layers});return this;}},{key:'setViewport',value:function setViewport(width,height){this.viewport=[width,height];return this;}},{key:'setResolution',value:function setResolution(width,height){this.resolution=[width,height];return this;}},{key:'delegateEvent',value:function delegateEvent(event){var _this96=this;var receiver=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.container;if(typeof event==='string'){event={type:event,passive:true};}if(this[_events].has(event.type)){return false;}this[_events].add(event.type);var _event=event,type=_event.type,passive=_event.passive;receiver.addEventListener(type,function(e){var layers=_this96[_layers];var evtArgs={originalEvent:e,type:type,stopDispatch:function stopDispatch(){this.terminated=true;}};// mouse event layerX, layerY value change while browser scaled.
var originalX=void 0,originalY=void 0,x=void 0,y=void 0;/* istanbul ignore else */if(e instanceof CustomEvent){(0,_assign2.default)(evtArgs,e.detail);if(evtArgs.x!=null&&evtArgs.y!=null){x=evtArgs.x;y=evtArgs.y;}else if(evtArgs.originalX!=null&&evtArgs.originalY!=null){originalX=evtArgs.originalX;originalY=evtArgs.originalY;}}else{var _e$target$getBounding=e.target.getBoundingClientRect(),left=_e$target$getBounding.left,top=_e$target$getBounding.top;var _ref82=e.changedTouches?e.changedTouches[0]:e,clientX=_ref82.clientX,clientY=_ref82.clientY;if(clientX!=null&&clientY!=null){originalX=Math.round((clientX|0)-left);originalY=Math.round((clientY|0)-top);}}// else {
//   originalX = NaN;
//   originalY = NaN;
// }
for(var i=0;i<layers.length;i++){var layer=layers[i];if(layer.handleEvent){if(originalX!=null&&originalY!=null){var _layer$toLocalPos=layer.toLocalPos(originalX,originalY);var _layer$toLocalPos2=(0,_slicedToArray4.default)(_layer$toLocalPos,2);x=_layer$toLocalPos2[0];y=_layer$toLocalPos2[1];}else if(x!=null&&y!=null){var _layer$toGlobalPos=layer.toGlobalPos(x,y);var _layer$toGlobalPos2=(0,_slicedToArray4.default)(_layer$toGlobalPos,2);originalX=_layer$toGlobalPos2[0];originalY=_layer$toGlobalPos2[1];}layer.dispatchEvent(type,(0,_assign2.default)({},evtArgs,{layerX:x,layerY:y,originalX:originalX,originalY:originalY,x:x,y:y}));}}},{passive:passive});return true;}},{key:'dispatchEvent',value:function dispatchEvent(type){var evt=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var container=this.container;container.dispatchEvent(new CustomEvent(type,{detail:evt}));(0,_get4.default)(Scene.prototype.__proto__||(0,_getPrototypeOf3.default)(Scene.prototype),'dispatchEvent',this).call(this,type,evt,true);}},{key:'preload',value:function(){var _ref83=(0,_asyncToGenerator3.default)(/*#__PURE__*/_regenerator2.default.mark(function _callee3(){var _this97=this;for(var _len19=arguments.length,resources=Array(_len19),_key19=0;_key19<_len19;_key19++){resources[_key19]=arguments[_key19];}var ret,tasks,i,res,task,_resource__WEBPACK_IM,id,src;return _regenerator2.default.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:ret=[],tasks=[];for(i=0;i<resources.length;i++){res=resources[i];task=void 0;if(typeof res==='string'){task=_resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadTexture(res);}else if(Array.isArray(res)){task=(_resource__WEBPACK_IM=_resource__WEBPACK_IMPORTED_MODULE_2__["default"]).loadFrames.apply(_resource__WEBPACK_IM,(0,_toConsumableArray4.default)(res));}else{id=res.id,src=res.src;task=_resource__WEBPACK_IMPORTED_MODULE_2__["default"].loadTexture({id:id,src:src});}/* istanbul ignore if  */if(!(task instanceof _promise2.default)){task=_promise2.default.resolve(task);}tasks.push(task.then(function(r){ret.push(r);_this97.dispatchEvent('preload',{target:_this97,current:r,loaded:ret,resources:resources});}));}_context3.next=4;return _promise2.default.all(tasks);case 4:return _context3.abrupt('return',ret);case 5:case'end':return _context3.stop();}}},_callee3,this);}));function preload(){return _ref83.apply(this,arguments);}return preload;}()},{key:'layer',value:function layer(){var id=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'default';var opts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{handleEvent:true};if(!this.hasLayer(id)){/* istanbul ignore if  */if(typeof window!=='undefined'&&window.getComputedStyle){var pos=window.getComputedStyle&&window.getComputedStyle(this.container).position;if(this.container.style&&pos!=='absolute'&&pos!=='fixed'){this.container.style.position='relative';}}this.appendLayer(new _layer__WEBPACK_IMPORTED_MODULE_1__["default"](id,opts));}return this[_layerMap][id];}},{key:'appendLayer',value:function appendLayer(layer){var appendDOMElement=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(!(layer instanceof _layer__WEBPACK_IMPORTED_MODULE_1__["default"])){// append dom element
layer.id=layer.id||'_layer'+Math.random();if(!layer.dataset){layer.dataset={};}layer.dataset.layerId=layer.id;// layer.connect = (parent, zOrder) => {
//   layer.parent = parent;
//   Object.defineProperty(layer, 'zOrder', {
//     value: zOrder,
//     writable: false,
//     configurable: true,
//   });
// };
// layer.disconnect = (parent) => {
//   delete layer.zOrder;
// };
}var id=layer.id;if(this.hasLayer(id)&&this[_layerMap][id]!==layer){throw new Error('layer '+id+' already exists! remove first...');}this.removeLayer(layer);this[_layerMap][id]=layer;layer.connect(this,this[_zOrder]++);this.updateViewport(layer);// layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);
if(!this.stickExtend){layer.resolution=this.layerResolution;}this[_layers]=sortOrderedSprites((0,_values4.default)(this[_layerMap]),true);/* istanbul ignore if  */if(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["setDebugToolsObserver"]&&layer.id!=='__debuglayer__'){Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["setDebugToolsObserver"])(this,layer);}if(appendDOMElement)this.container.appendChild(layer.canvas||layer);return layer;}},{key:'removeLayer',value:function removeLayer(layer){if(typeof layer==='string'){layer=this[_layerMap][layer];}if(this.hasLayer(layer)){layer.disconnect(this);this.container.removeChild(layer.canvas||layer);delete this[_layerMap][layer.id];this[_layers]=sortOrderedSprites((0,_values4.default)(this[_layerMap]),true);/* istanbul ignore if  */if(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["removeDebugToolsObserver"]){Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_4__["removeDebugToolsObserver"])(layer);}return layer;}return null;}},{key:'hasLayer',value:function hasLayer(layer){var layerID=void 0;if(typeof layer==='string'){layerID=layer;layer=this[_layerMap][layer];}else{layerID=layer.id;}return layer&&this[_layerMap][layerID]===layer;}},{key:'querySelector',value:function querySelector(selector){return Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["querySelector"])(selector,this);}},{key:'querySelectorAll',value:function querySelectorAll(selector){return Object(sprite_core__WEBPACK_IMPORTED_MODULE_0__["querySelectorAll"])(selector,this);}},{key:'snapshot',value:function(){var _ref84=(0,_asyncToGenerator3.default)(/*#__PURE__*/_regenerator2.default.mark(function _callee4(){var _viewport2,width,height,canvas,_layerViewport2,sw,sh,layers,ctx,renderTasks,rect;return _regenerator2.default.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_viewport2=(0,_slicedToArray4.default)(this.viewport,2),width=_viewport2[0],height=_viewport2[1];canvas=this[_snapshot];canvas.width=width;canvas.height=height;_layerViewport2=(0,_slicedToArray4.default)(this.layerViewport,2),sw=_layerViewport2[0],sh=_layerViewport2[1];layers=this[_layers].slice(0).reverse();ctx=canvas.getContext('2d');renderTasks=layers.map(function(layer){return layer.prepareRender();});_context4.next=10;return _promise2.default.all(renderTasks);case 10:rect=[0,0,sw,sh];if(!this.stickExtend){if(this.stickMode==='width'||this.stickMode==='height'){rect[0]=(width-sw)/2;rect[1]=(height-sh)/2;}else if(this.stickMode==='bottom'||this.stickMode==='right'){rect[0]=width-sw;rect[1]=height-sh;}}layers.forEach(function(layer){if(layer.canvas){ctx.drawImage.apply(ctx,[layer.canvas].concat(rect));}});return _context4.abrupt('return',canvas);case 14:case'end':return _context4.stop();}}},_callee4,this);}));function snapshot(){return _ref84.apply(this,arguments);}return snapshot;}()},{key:'displayRatio',set:function set(value){var _this98=this;var oldRatio=this[_displayRatio];this[_displayRatio]=value;if(oldRatio!=null&&oldRatio!==value){var layers=this[_layers];layers.forEach(function(layer){if(layer.canvas){layer.setDisplayRatio(_this98[_displayRatio],_this98.maxDisplayRatio);}});this.dispatchEvent('ratioChange',{target:this,layers:layers});}return this;},get:function get(){return this[_displayRatio];}},{key:'subscribe',get:function get(){return this[_subscribe];},set:function set(events){var _this99=this;this[_subscribe]=events;events.forEach(function(event){return _this99.delegateEvent(event);});}},{key:'width',get:function get(){return this.viewport[0];}},{key:'height',get:function get(){return this.viewport[1];}},{key:'children',get:function get(){return this.childNodes.filter(function(layer){return layer.canvas;});}},{key:'childNodes',get:function get(){return(0,_values4.default)(this[_layerMap]);}},{key:'sortedChildNodes',get:function get(){return this[_layers];}},{key:'layerViewport',get:function get(){var _resolution5=(0,_slicedToArray4.default)(this.resolution,2),rw=_resolution5[0],rh=_resolution5[1],_viewport3=(0,_slicedToArray4.default)(this.viewport,2),vw=_viewport3[0],vh=_viewport3[1],stickMode=this.stickMode,stickExtend=this.stickExtend;var width=vw,height=vh;if(!stickExtend){if(stickMode==='width'||stickMode==='top'||stickMode==='bottom'){height=vw*rh/rw;}else if(stickMode==='height'||stickMode==='left'||stickMode==='right'){width=vh*rw/rh;}}return[width,height];}},{key:'distortion',get:function get()/* istanbul ignore next */{if(this.stickMode!=='scale'){return 1.0;}var _resolution6=(0,_slicedToArray4.default)(this.resolution,2),rw=_resolution6[0],rh=_resolution6[1],_viewport4=(0,_slicedToArray4.default)(this.viewport,2),vw=_viewport4[0],vh=_viewport4[1];var dw=rw==='flex'?2:rw/vw,dh=rh==='flex'?2:rh/vh;return dw/dh;}},{key:'viewport',set:function set(viewport){var _this100=this;if(!Array.isArray(viewport))viewport=[viewport,viewport];var _viewport5=viewport,_viewport6=(0,_slicedToArray4.default)(_viewport5,2),width=_viewport6[0],height=_viewport6[1];this[_viewport]=[width,height];/* istanbul ignore next */if(width==='auto'||height==='auto'){if(!this[_resizeHandler]){this[_resizeHandler]=function(){_this100.updateViewport();if(_this100.resolution[0]==='flex'||_this100.resolution[1]==='flex'){_this100.updateResolution();}};window.addEventListener('resize',this[_resizeHandler]);}}else if(this[_resizeHandler]){window.removeEventListener('resize',this[_resizeHandler]);delete this[_resizeHandler];}if(this[_layers].length){this.updateViewport();}},get:function get(){var _viewport7=(0,_slicedToArray4.default)(this[_viewport],2),width=_viewport7[0],height=_viewport7[1];if(width===''||(0,_isNan2.default)(Number(width))){width=this.container.clientWidth;}if(height===''||(0,_isNan2.default)(Number(height))){height=this.container.clientHeight;}return[width,height];}},{key:'layerResolution',get:function get(){var _resolution7=(0,_slicedToArray4.default)(this.resolution,2),rw=_resolution7[0],rh=_resolution7[1];var _viewport8=(0,_slicedToArray4.default)(this.viewport,2),vw=_viewport8[0],vh=_viewport8[1],stickMode=this.stickMode,stickExtend=this.stickExtend;if(rw==='flex'){rw=2*vw;}if(rh==='flex'){rh=2*vh;}var width=rw,height=rh,offsetTop=0,offsetLeft=0;if(stickExtend){if(stickMode==='width'||stickMode==='top'||stickMode==='bottom'){var vrh=rw*vh/vw;height=vrh;if(stickMode==='width'){offsetTop=Math.round((vrh-rh)/2);}else if(stickMode==='bottom'){offsetTop=vrh-rh;}}else if(stickMode==='height'||stickMode==='left'||stickMode==='right'){var vrw=rh*vw/vh;width=vrw;if(stickMode==='height'){offsetLeft=Math.round((vrw-rw)/2);}else if(stickMode==='right'){offsetLeft=vrw-rw;}}}this.stickOffset=[offsetLeft,offsetTop];return[width,height,offsetLeft,offsetTop];}},{key:'resolution',set:function set(resolution){if(!Array.isArray(resolution)){resolution=[resolution,resolution];}var _resolution8=resolution,_resolution9=(0,_slicedToArray4.default)(_resolution8,2),width=_resolution9[0],height=_resolution9[1];this[_resolution]=[width,height];this.updateResolution();},get:function get(){return this[_resolution];}},{key:'layers',get:function get(){return this[_layers];}}]);return Scene;}(sprite_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]);/***/},/* 135 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"_debugger",function(){return _debugger;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"setDebugToolsObserver",function(){return setDebugToolsObserver;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"removeDebugToolsObserver",function(){return removeDebugToolsObserver;});var _debugger=null;var setDebugToolsObserver=null;var removeDebugToolsObserver=null;/***/}]/******/);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(8).Object.values;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(6);
var $values = __webpack_require__(22)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(8);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(11);
var has = __webpack_require__(21);
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
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(20);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(15);
var toPrimitive = __webpack_require__(19);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(17)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(17)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(7).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(23);
var toIObject = __webpack_require__(25);
var isEnum = __webpack_require__(37).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(24);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(21);
var toIObject = __webpack_require__(25);
var arrayIndexOf = __webpack_require__(29)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(26);
var defined = __webpack_require__(28);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(25);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(32);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(35);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
module.exports = __webpack_require__(8).Number.isFinite;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(6);
var _isFinite = __webpack_require__(7).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(43);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(45);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(62);
__webpack_require__(66);
__webpack_require__(83);
__webpack_require__(84);
module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(49)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(50)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var defined = __webpack_require__(28);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(53);
var $iterCreate = __webpack_require__(54);
var setToStringTag = __webpack_require__(58);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(59)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(20);
var setToStringTag = __webpack_require__(58);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(59)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(56);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(57).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(7).document;
module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(21);
var TAG = __webpack_require__(59)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(35);
var Symbol = __webpack_require__(7).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(21);
var toObject = __webpack_require__(61);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(28);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
var global = __webpack_require__(7);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(53);
var TO_STRING_TAG = __webpack_require__(59)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(64);
var step = __webpack_require__(65);
var Iterators = __webpack_require__(53);
var toIObject = __webpack_require__(25);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(50)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(51);
var global = __webpack_require__(7);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(67);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(69);
var speciesConstructor = __webpack_require__(73);
var task = __webpack_require__(74).set;
var microtask = __webpack_require__(76)();
var newPromiseCapabilityModule = __webpack_require__(77);
var perform = __webpack_require__(78);
var promiseResolve = __webpack_require__(79);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(59)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(80)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(58)($Promise, PROMISE);
__webpack_require__(81)(PROMISE);
Wrapper = __webpack_require__(8)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(82)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(27);
var TAG = __webpack_require__(59)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(30);
var getIterFn = __webpack_require__(72);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(53);
var ITERATOR = __webpack_require__(59)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(67);
var ITERATOR = __webpack_require__(59)('iterator');
var Iterators = __webpack_require__(53);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(59)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(75);
var html = __webpack_require__(57);
var cel = __webpack_require__(18);
var global = __webpack_require__(7);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(27)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var macrotask = __webpack_require__(74).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(27)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(77);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var core = __webpack_require__(8);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(16);
var SPECIES = __webpack_require__(59)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(59)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(8);
var global = __webpack_require__(7);
var speciesConstructor = __webpack_require__(73);
var promiseResolve = __webpack_require__(79);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(77);
var perform = __webpack_require__(78);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(62);
__webpack_require__(87);
__webpack_require__(96);
__webpack_require__(98);
module.exports = __webpack_require__(8).WeakSet;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(88);
var validate = __webpack_require__(94);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(95)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(80);
var getWeak = __webpack_require__(89).getWeak;
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(69);
var createArrayMethod = __webpack_require__(90);
var $has = __webpack_require__(21);
var validate = __webpack_require__(94);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(35)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(21);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(9);
var IObject = __webpack_require__(26);
var toObject = __webpack_require__(61);
var toLength = __webpack_require__(30);
var asc = __webpack_require__(91);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(92);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(93);
var SPECIES = __webpack_require__(59)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var $export = __webpack_require__(6);
var meta = __webpack_require__(89);
var fails = __webpack_require__(17);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(80);
var forOf = __webpack_require__(69);
var anInstance = __webpack_require__(68);
var isObject = __webpack_require__(14);
var setToStringTag = __webpack_require__(58);
var dP = __webpack_require__(12).f;
var each = __webpack_require__(90)(0);
var DESCRIPTORS = __webpack_require__(16);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(97)('WeakSet');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(6);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(99)('WeakSet');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(6);
var aFunction = __webpack_require__(10);
var ctx = __webpack_require__(9);
var forOf = __webpack_require__(69);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(101);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(105);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(109);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
module.exports = __webpack_require__(8).Object.getPrototypeOf;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(61);
var $getPrototypeOf = __webpack_require__(60);

__webpack_require__(108)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(8);
var fails = __webpack_require__(17);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var $Object = __webpack_require__(8).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(25);
var $getOwnPropertyDescriptor = __webpack_require__(112).f;

__webpack_require__(108)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(37);
var createDesc = __webpack_require__(20);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(19);
var has = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(48);
module.exports = __webpack_require__(115);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var get = __webpack_require__(72);
module.exports = __webpack_require__(8).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(118);
module.exports = __webpack_require__(8).String.fromCodePoint;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(32);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(8).Reflect.set;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(12);
var gOPD = __webpack_require__(112);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(21);
var $export = __webpack_require__(6);
var createDesc = __webpack_require__(20);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperties: __webpack_require__(56) });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(8);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(128), __esModule: true };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(130).set });


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(9)(Function.call, __webpack_require__(112).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
module.exports = __webpack_require__(8).Reflect.get;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(112);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(21);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(136);
module.exports = __webpack_require__(8).Array.from;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(9);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(61);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var toLength = __webpack_require__(30);
var createProperty = __webpack_require__(137);
var getIterFn = __webpack_require__(72);

$export($export.S + $export.F * !__webpack_require__(82)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(20);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
__webpack_require__(48);
module.exports = __webpack_require__(140);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(67);
var ITERATOR = __webpack_require__(59)('iterator');
var Iterators = __webpack_require__(53);
module.exports = __webpack_require__(8).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143).f('toPrimitive');


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(59);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(145);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(148) });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(149);
var pIE = __webpack_require__(37);
var toObject = __webpack_require__(61);
var IObject = __webpack_require__(26);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(17)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(62);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
module.exports = __webpack_require__(8).WeakMap;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(90)(0);
var redefine = __webpack_require__(52);
var meta = __webpack_require__(89);
var assign = __webpack_require__(148);
var weak = __webpack_require__(88);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(17);
var validate = __webpack_require__(94);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(95)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(97)('WeakMap');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(99)('WeakMap');


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(62);
__webpack_require__(157);
__webpack_require__(159);
__webpack_require__(162);
__webpack_require__(163);
module.exports = __webpack_require__(8).Set;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(158);
var validate = __webpack_require__(94);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(95)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(55);
var redefineAll = __webpack_require__(80);
var ctx = __webpack_require__(9);
var anInstance = __webpack_require__(68);
var forOf = __webpack_require__(69);
var $iterDefine = __webpack_require__(50);
var step = __webpack_require__(65);
var setSpecies = __webpack_require__(81);
var DESCRIPTORS = __webpack_require__(16);
var fastKey = __webpack_require__(89).fastKey;
var validate = __webpack_require__(94);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(6);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(160)('Set') });


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(67);
var from = __webpack_require__(161);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(69);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(97)('Set');


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(99)('Set');


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);
module.exports = __webpack_require__(8).Number.isNaN;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(6);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(134);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
module.exports = __webpack_require__(8).Object.entries;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(6);
var $entries = __webpack_require__(22)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(172), __esModule: true };

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(173);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(61);
var $keys = __webpack_require__(23);

__webpack_require__(108)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(138);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(113);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(134);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(177), __esModule: true };

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(62);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
module.exports = __webpack_require__(8).Map;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(158);
var validate = __webpack_require__(94);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(95)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(6);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(160)('Map') });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(97)('Map');


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(99)('Map');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(101);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(185);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(186);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(188);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(62);
module.exports = __webpack_require__(143).f('iterator');


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(189), __esModule: true };

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(190);
__webpack_require__(47);
__webpack_require__(195);
__webpack_require__(196);
module.exports = __webpack_require__(8).Symbol;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(7);
var has = __webpack_require__(21);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(52);
var META = __webpack_require__(89).KEY;
var $fails = __webpack_require__(17);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(58);
var uid = __webpack_require__(35);
var wks = __webpack_require__(59);
var wksExt = __webpack_require__(143);
var wksDefine = __webpack_require__(191);
var enumKeys = __webpack_require__(192);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(19);
var createDesc = __webpack_require__(20);
var _create = __webpack_require__(55);
var gOPNExt = __webpack_require__(193);
var $GOPD = __webpack_require__(112);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(23);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(194).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(37).f = $propertyIsEnumerable;
  __webpack_require__(149).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(51)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(51);
var wksExt = __webpack_require__(143);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(149);
var pIE = __webpack_require__(37);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(25);
var gOPN = __webpack_require__(194).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(24);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191)('asyncIterator');


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(191)('observable');


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(127);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(198);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(185);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(199), __esModule: true };

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(200);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(55) });


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(202), __esModule: true };

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
module.exports = __webpack_require__(143).f('toStringTag');


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _get2 = __webpack_require__(104);

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = __webpack_require__(109);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = __webpack_require__(105);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(183);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(182);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(184);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(197);

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = __webpack_require__(174);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _dec, _dec2, _desc, _value, _class, _class2, _temp;

var _spritejs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = __webpack_require__(204);

var parseStringFloat = _spritejs.utils.parseStringFloat,
    parseColorString = _spritejs.utils.parseColorString,
    parseValue = _spritejs.utils.parseValue,
    attr = _spritejs.utils.attr;


function ticksToD(axis) {
  if (!axis) return;

  var _axis$attr = axis.attr(),
      direction = _axis$attr.direction,
      ticks = _axis$attr.ticks,
      length = _axis$attr.length,
      vLength = _axis$attr.vLength,
      font = _axis$attr.font,
      lineWidth = _axis$attr.lineWidth,
      color = _axis$attr.color,
      axisScales = _axis$attr.axisScales;

  var originTicks = ticks.slice(0);

  var axisTicks = ticks.slice(0);

  if (axisScales.length) {
    axisTicks = axisTicks.map(function (tick) {
      return axisScales.reduce(function (v, s) {
        return s(v);
      }, tick);
    });
    axisTicks = axisTicks.filter(function (tick) {
      return tick >= 0;
    });
  }

  if (axisTicks.length <= 0) {
    return;
  }
  ticks = ticks.slice(-axisTicks.length);

  if (axisScales.length) {
    var scale = axisScales[axisScales.length - 1],
        _scale$range = scale.range(),
        _scale$range2 = (0, _slicedToArray3.default)(_scale$range, 2),
        start = _scale$range2[0],
        end = _scale$range2[1],
        _scale$domain = scale.domain(),
        _scale$domain2 = (0, _slicedToArray3.default)(_scale$domain, 2),
        from = _scale$domain2[0],
        to = _scale$domain2[1];


    if (start < axisTicks[0]) {
      ticks.unshift(from);
      axisTicks.unshift(start);
    }
    if (end > axisTicks[axisTicks.length - 1]) {
      ticks.push(to);
      axisTicks.push(end);
    }
  }

  var dist = axisTicks[axisTicks.length - 1] - axisTicks[0];
  if (length === 'auto') length = dist;

  var d = void 0;

  var points = axisTicks.map(function (tick) {
    return length * (tick - axisTicks[0]) / dist;
  });

  var offsetY = 0,
      offsetX = 0,
      offsetX0 = 0;

  axis.clear();

  ticks.forEach(function (data, i) {
    if (originTicks.indexOf(data) === -1) return;

    var label = new _spritejs.Label();

    label.text = data;
    label.attr({ font: font, fillColor: color });

    var _label$contentSize = (0, _slicedToArray3.default)(label.contentSize, 2),
        w = _label$contentSize[0],
        h = _label$contentSize[1];

    offsetY = Math.max(offsetY, h);
    offsetX = Math.max(offsetX, w);

    if (i === 0) {
      offsetX0 = w;
    }

    var x = points[i];

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

  var rect = void 0;
  if (direction === 'top') {
    d = 'M0 ' + vLength + ' h' + length;
    points.forEach(function (point) {
      d += 'M' + point + ' 0 v' + vLength;
    });
    rect = [offsetX0, offsetY + 5, length, vLength];
  } else if (direction === 'bottom') {
    d = 'M0 0 h' + length;
    points.forEach(function (point) {
      d += 'M' + Math.round(point) + ' 0 v' + vLength;
    });
    rect = [offsetX0, 0, length, vLength];
  } else if (direction === 'left') {
    d = 'M0 0 v' + length;
    points.forEach(function (point) {
      d += 'M0 ' + (length - point) + ' h' + vLength;
    });
    rect = [0, offsetY / 2, vLength, length];
  } else if (direction === 'right') {
    d = 'M' + (offsetX + 5) + ' 0 v' + length;
    points.forEach(function (point) {
      d += 'M' + (offsetX + 5 - vLength) + ' ' + (length - point) + ' h' + vLength;
    });

    rect = [offsetX + 5, offsetY / 2, vLength, length];
  }

  var path = new _spritejs.Path();
  path.attr({
    d: d,
    lineWidth: lineWidth,
    strokeColor: color,
    pos: [rect[0], rect[1]]
  });
  axis.appendChild(path);
}

var AxisSpriteAttr = (_dec = parseValue(parseStringFloat), _dec2 = parseValue(parseColorString), (_class = function (_Group$Attr) {
  (0, _inherits3.default)(AxisSpriteAttr, _Group$Attr);

  function AxisSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, AxisSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AxisSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(AxisSpriteAttr)).call(this, subject));

    _this.setDefault({
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke', // stroke, fill

      font: '24px Arial',
      axisScales: [],

      textFormat: function textFormat(d) {
        return d;
      }
    });
    return _this;
  }

  (0, _createClass3.default)(AxisSpriteAttr, [{
    key: 'font',
    set: function set(val) {
      this.clearCache();
      this.set('font', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'direction',
    set: function set(val) {
      this.clearCache();
      this.set('direction', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'length',
    set: function set(val) {
      this.clearCache();
      this.set('length', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'vLength',
    set: function set(val) {
      this.clearCache();
      this.set('vLength', Math.round(val));
      ticksToD(this.subject);
    }
  }, {
    key: 'ticks',
    set: function set(ticks) {
      this.clearCache();
      this.set('ticks', ticks.map(this.textFormat).sort(function (a, b) {
        return a - b;
      }));
      ticksToD(this.subject);
    }

    // set d3 scales, unsafe

  }, {
    key: 'axisScales',
    set: function set(val) {
      this.clearCache();
      this.saveObj('axisScales', val);
      ticksToD(this.subject);
    },
    get: function get() {
      return this.loadObj('axisScales') || [];
    }
  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.clearCache();
      this.set('lineWidth', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.clearCache();
      this.set('color', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'textFormat',
    set: function set(fn) {
      this.clearCache();
      var ticks = this.ticks.map(fn);
      this.set('ticks', ticks);
      this.set('textFormat', fn);
      ticksToD(this.subject);
    }
  }]);
  return AxisSpriteAttr;
}(_spritejs.Group.Attr), (_applyDecoratedDescriptor(_class.prototype, 'font', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'direction', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'direction'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'length', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'length'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'vLength', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'vLength'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'ticks', [_dec, attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'ticks'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'axisScales', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'axisScales'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_dec2, attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textFormat', [attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textFormat'), _class.prototype)), _class));
var Axis = (_temp = _class2 = function (_Group) {
  (0, _inherits3.default)(Axis, _Group);

  function Axis() {
    var ticks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 100];
    var opts = arguments[1];
    (0, _classCallCheck3.default)(this, Axis);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Axis.__proto__ || (0, _getPrototypeOf2.default)(Axis)).call(this, opts));

    if (ticks) {
      _this2.attr({ ticks: ticks });
    }
    return _this2;
  }

  (0, _createClass3.default)(Axis, [{
    key: 'cloneNode',
    value: function cloneNode() {
      var node = (0, _get3.default)(Axis.prototype.__proto__ || (0, _getPrototypeOf2.default)(Axis.prototype), 'cloneNode', this).call(this);
      node.attr('axisScales', this.attr('axisScales'));
    }
  }]);
  return Axis;
}(_spritejs.Group), _class2.Attr = AxisSpriteAttr, _temp);
exports.default = Axis;


(0, _spritejs.registerNodeType)('axis', Axis);

/***/ }),
/* 204 */
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


/***/ })
/******/ ]);
});