!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("spritejs")):"function"==typeof define&&define.amd?define(["spritejs"],e):"object"==typeof exports?exports.Axis=e(require("spritejs")):(t.spritejs=t.spritejs||{},t.spritejs.Axis=e(t.spritejs))}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/js/",n(n.s=101)}([function(t,e){var n=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(29)("wks"),o=n(14),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(93),o=n(31);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(8),o=n(41),i=n(28),u=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(5),o=n(13);t.exports=n(4)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2),o=n(0),i=n(42),u=n(9),c=n(6),f=function(t,e,n){var a,s,l,p=t&f.F,d=t&f.G,y=t&f.S,h=t&f.P,v=t&f.B,b=t&f.W,_=d?o:o[e]||(o[e]={}),g=_.prototype,x=d?r:y?r[e]:(r[e]||{}).prototype;for(a in d&&(n=e),n)(s=!p&&x&&void 0!==x[a])&&c(_,a)||(l=s?x[a]:n[a],_[a]=d&&"function"!=typeof x[a]?n[a]:v&&s?i(l,r):b&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((_.virtual||(_.virtual={}))[a]=l,t&f.R&&g&&!g[a]&&u(g,a,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e){t.exports={}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(2),o=n(0),i=n(22),u=n(16),c=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){n(77);for(var r=n(2),o=n(9),i=n(11),u=n(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var a=c[f],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){var r=n(5).f,o=n(6),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(35),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(8),o=n(82),i=n(19),u=n(30)("IE_PROTO"),c=function(){},f=function(){var t,e=n(40)("iframe"),r=i.length;for(e.style.display="none",n(78).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e){t.exports=!0},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(84)(!0);n(37)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(25),o=n(13),i=n(3),u=n(28),c=n(6),f=n(41),a=Object.getOwnPropertyDescriptor;e.f=n(4)?a:function(t,e){if(t=i(t),e=u(e,!0),f)try{return a(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(29)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(27),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(35),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6),o=n(3),i=n(81)(!1),u=n(30)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";var r=n(22),o=n(10),i=n(36),u=n(9),c=n(11),f=n(83),a=n(18),s=n(44),l=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,y,h,v,b){f(n,e,y);var _,g,x,m=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},O=e+" Iterator",S="values"==h,j=!1,w=t.prototype,M=w[l]||w["@@iterator"]||h&&w[h],P=M||m(h),k=h?S?m("entries"):P:void 0,E="Array"==e&&w.entries||M;if(E&&(x=s(E.call(new t)))!==Object.prototype&&x.next&&(a(x,O,!0),r||"function"==typeof x[l]||u(x,l,d)),S&&M&&"values"!==M.name&&(j=!0,P=function(){return M.call(this)}),r&&!b||!p&&!j&&w[l]||u(w,l,P),c[e]=P,c[O]=d,h)if(_={values:S?P:m("values"),keys:v?P:m("keys"),entries:k},b)for(g in _)g in w||i(w,g,_[g]);else o(o.P+o.F*(p||j),e,_);return _}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(86)),o=u(n(74)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,e,n){t.exports={default:n(95),__esModule:!0}},function(t,e,n){var r=n(7),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(4)&&!n(12)(function(){return 7!=Object.defineProperty(n(40)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(96);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(10),o=n(0),i=n(12);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){var r=n(6),o=n(45),i=n(30)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(31);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports={default:n(98),__esModule:!0}},function(t,e){t.exports=function(t,e,n,r,o){var i={};return Object.keys(r).forEach(function(t){i[t]=r[t]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(t,e,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null),i}},function(e,n){e.exports=t},function(t,e,n){var r=n(32),o=n(1)("iterator"),i=n(11);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(8),o=n(49);t.exports=n(0).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){n(17),n(24),t.exports=n(50)},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){var r=n(32),o=n(1)("iterator"),i=n(11);t.exports=n(0).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){n(17),n(24),t.exports=n(53)},function(t,e,n){t.exports={default:n(54),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(55)),o=i(n(52));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,r.default)(Object(t)))return function(t,e){var n=[],r=!0,i=!1,u=void 0;try{for(var c,f=(0,o.default)(t);!(r=(c=f.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,u=t}finally{try{!r&&f.return&&f.return()}finally{if(i)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){var r=n(10);r(r.S,"Object",{create:n(21)})},function(t,e,n){n(57);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){t.exports={default:n(58),__esModule:!0}},function(t,e,n){var r=n(7),o=n(8),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(42)(Function.call,n(26).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(10);r(r.S,"Object",{setPrototypeOf:n(60).set})},function(t,e,n){n(61),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){t.exports={default:n(62),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(63)),o=u(n(59)),i=u(n(38));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},function(t,e,n){n(15)("observable")},function(t,e,n){n(15)("asyncIterator")},function(t,e){},function(t,e,n){var r=n(3),o=n(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,e,n){var r=n(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(20),o=n(34),i=n(25);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&e.push(u);return e}},function(t,e,n){var r=n(14)("meta"),o=n(7),i=n(6),u=n(5).f,c=0,f=Object.isExtensible||function(){return!0},a=!n(12)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,r)&&s(t),t}}},function(t,e,n){"use strict";var r=n(2),o=n(6),i=n(4),u=n(10),c=n(36),f=n(71).KEY,a=n(12),s=n(29),l=n(18),p=n(14),d=n(1),y=n(16),h=n(15),v=n(70),b=n(69),_=n(8),g=n(7),x=n(3),m=n(28),O=n(13),S=n(21),j=n(68),w=n(26),M=n(5),P=n(20),k=w.f,E=M.f,L=j.f,T=r.Symbol,C=r.JSON,A=C&&C.stringify,F=d("_hidden"),N=d("toPrimitive"),I={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),R=Object.prototype,z="function"==typeof T,V=r.QObject,H=!V||!V.prototype||!V.prototype.findChild,J=i&&a(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(R,e);r&&delete R[e],E(t,e,n),r&&t!==R&&E(R,e,r)}:E,q=function(t){var e=D[t]=S(T.prototype);return e._k=t,e},B=z&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},K=function(t,e,n){return t===R&&K(G,e,n),_(t),e=m(e,!0),_(n),o(D,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=S(n,{enumerable:O(0,!1)})):(o(t,F)||E(t,F,O(1,{})),t[F][e]=!0),J(t,e,n)):E(t,e,n)},U=function(t,e){_(t);for(var n,r=v(e=x(e)),o=0,i=r.length;i>o;)K(t,n=r[o++],e[n]);return t},Y=function(t){var e=I.call(this,t=m(t,!0));return!(this===R&&o(D,t)&&!o(G,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,F)&&this[F][t])||e)},Q=function(t,e){if(t=x(t),e=m(e,!0),t!==R||!o(D,e)||o(G,e)){var n=k(t,e);return!n||!o(D,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=L(x(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==F||e==f||r.push(e);return r},Z=function(t){for(var e,n=t===R,r=L(n?G:x(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(R,e)||i.push(D[e]);return i};z||(c((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===R&&e.call(G,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),J(this,t,O(1,n))};return i&&H&&J(R,t,{configurable:!0,set:e}),q(t)}).prototype,"toString",function(){return this._k}),w.f=Q,M.f=K,n(33).f=j.f=X,n(25).f=Y,n(34).f=Z,i&&!n(22)&&c(R,"propertyIsEnumerable",Y,!0),y.f=function(t){return q(d(t))}),u(u.G+u.W+u.F*!z,{Symbol:T});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=P(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!z,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=T(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!z,"Object",{create:function(t,e){return void 0===e?S(t):U(S(t),e)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),C&&u(u.S+u.F*(!z||a(function(){var t=T();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!B(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,A.apply(C,r)}}),T.prototype[N]||n(9)(T.prototype,N,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(72),n(67),n(66),n(65),t.exports=n(0).Symbol},function(t,e,n){t.exports={default:n(73),__esModule:!0}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=function(){}},function(t,e,n){"use strict";var r=n(76),o=n(75),i=n(11),u=n(3);t.exports=n(37)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(3),o=n(80),i=n(79);t.exports=function(t){return function(e,n,u){var c,f=r(e),a=o(f.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(5),o=n(8),i=n(20);t.exports=n(4)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},function(t,e,n){"use strict";var r=n(21),o=n(13),i=n(18),u={};n(9)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(23),o=n(31);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){n(24),n(17),t.exports=n(16).f("iterator")},function(t,e,n){t.exports={default:n(85),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(38),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){var r=n(10);r(r.S+r.F*!n(4),"Object",{defineProperty:n(5).f})},function(t,e,n){n(88);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){t.exports={default:n(89),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(90),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){var r=n(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(3),o=n(26).f;n(43)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},function(t,e,n){n(94);var r=n(0).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(45),o=n(44);n(43)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){n(97),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){"use strict";e.__esModule=!0;var r=i(n(46)),o=i(n(39));function i(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e,n,i){null===e&&(e=Function.prototype);var u=(0,o.default)(e,n);if(void 0===u){var c=(0,r.default)(e);return null===c?void 0:t(c,n,i)}if("value"in u)return u.value;var f=u.get;return void 0!==f?f.call(i):void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o,i,u,c,f=b(n(99)),a=b(n(39)),s=b(n(46)),l=b(n(92)),p=b(n(91)),d=b(n(87)),y=b(n(64)),h=b(n(56)),v=n(48);function b(t){return t&&t.__esModule?t:{default:t}}var _=n(47),g=v.utils.parseStringFloat,x=v.utils.parseColorString,m=v.utils.parseValue,O=v.utils.attr;function S(t){if(t){var e=t.attr(),n=e.direction,r=e.ticks,o=e.length,i=e.vLength,u=e.font,c=e.lineWidth,f=e.color,a=e.axisScales,s=r.slice(0),l=r.slice(0);if(a.length&&(l=(l=l.map(function(t){return a.reduce(function(t,e){return e(t)},t)})).filter(function(t){return t>=0})),!(l.length<=0)){if(r=r.slice(-l.length),a.length){var p=a[a.length-1],d=p.range(),y=(0,h.default)(d,2),b=y[0],_=y[1],g=p.domain(),x=(0,h.default)(g,2),m=x[0],O=x[1];b<l[0]&&(r.unshift(m),l.unshift(b)),_>l[l.length-1]&&(r.push(O),l.push(_))}var S=l[l.length-1]-l[0];"auto"===o&&(o=S);var j=void 0,w=l.map(function(t){return o*(t-l[0])/S}),M=0,P=0,k=0;t.remove(),r.forEach(function(e,r){if(-1!==s.indexOf(e)){var o=new v.Label;o.text=e,o.attr({font:u,fillColor:f});var c=(0,h.default)(o.contentSize,2),a=c[0],l=c[1];M=Math.max(M,l),P=Math.max(P,a),0===r&&(k=a);var p=w[r];null!=p&&("top"===n?o.attr({pos:[k+p-Math.round(a/2),0]}):"bottom"===n?o.attr({pos:[k+p-Math.round(a/2),i+5]}):"left"===n?o.attr({pos:[i+5,p]}):"right"===n&&o.attr({pos:[0,p]}),t.appendChild(o))}});var E=void 0;"top"===n?(j="M0 "+i+" h"+o,w.forEach(function(t){j+="M"+t+" 0 v"+i}),E=[k,M+5,o,i]):"bottom"===n?(j="M0 0 h"+o,w.forEach(function(t){j+="M"+Math.round(t)+" 0 v"+i}),E=[k,0,o,i]):"left"===n?(j="M0 0 v"+o,w.forEach(function(t){j+="M0 "+t+" h"+i}),E=[0,M/2,i,o]):"right"===n&&(j="M"+(P+5)+" 0 v"+o,w.forEach(function(t){j+="M"+(P+5-i)+" "+t+" h"+i}),E=[P+5,M/2,i,o]);var L=new v.Path;L.attr({d:j,lineWidth:c,strokeColor:f,pos:[E[0],E[1]]}),t.appendChild(L)}}}var j=(r=m(g),o=m(x),_((i=function(t){function e(t){(0,l.default)(this,e);var n=(0,d.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return n.setDefault({length:"auto",vLength:10,ticks:[0,100],direction:"top",lineWidth:1,color:"black",renderMode:"stroke",font:"24px Arial",axisScales:[]}),n}return(0,y.default)(e,t),(0,p.default)(e,[{key:"font",set:function(t){this.clearCache(),this.set("font",t),S(this.subject)}},{key:"direction",set:function(t){this.clearCache(),this.set("direction",t),S(this.subject)}},{key:"length",set:function(t){this.clearCache(),this.set("length",t),S(this.subject)}},{key:"vLength",set:function(t){this.clearCache(),this.set("vLength",Math.round(t)),S(this.subject)}},{key:"ticks",set:function(t){this.clearCache(),this.set("ticks",t.sort(function(t,e){return t-e})),S(this.subject)}},{key:"axisScales",set:function(t){this.clearCache(),this.saveObj("axisScales",t),S(this.subject)},get:function(){return this.loadObj("axisScales")||[]}},{key:"lineWidth",set:function(t){this.clearCache(),this.set("lineWidth",t),S(this.subject)}},{key:"color",set:function(t){this.clearCache(),this.set("color",t),S(this.subject)}}]),e}(v.Group.Attr)).prototype,"font",[O],(0,a.default)(i.prototype,"font"),i.prototype),_(i.prototype,"direction",[O],(0,a.default)(i.prototype,"direction"),i.prototype),_(i.prototype,"length",[O],(0,a.default)(i.prototype,"length"),i.prototype),_(i.prototype,"vLength",[O],(0,a.default)(i.prototype,"vLength"),i.prototype),_(i.prototype,"ticks",[r,O],(0,a.default)(i.prototype,"ticks"),i.prototype),_(i.prototype,"axisScales",[O],(0,a.default)(i.prototype,"axisScales"),i.prototype),_(i.prototype,"lineWidth",[O],(0,a.default)(i.prototype,"lineWidth"),i.prototype),_(i.prototype,"color",[o,O],(0,a.default)(i.prototype,"color"),i.prototype),i),w=(c=u=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,100],n=arguments[1];(0,l.default)(this,e);var r=(0,d.default)(this,(e.__proto__||(0,s.default)(e)).call(this,n));return t&&r.attr({ticks:t}),r}return(0,y.default)(e,t),(0,p.default)(e,[{key:"cloneNode",value:function(){(0,f.default)(e.prototype.__proto__||(0,s.default)(e.prototype),"cloneNode",this).call(this).attr("axisScales",this.attr("axisScales"))}}]),e}(v.Group),u.Attr=j,c);e.default=w,(0,v.registerNodeType)("axis",w)},function(t,e,n){"use strict";var r,o=n(100),i=(r=o)&&r.__esModule?r:{default:r};t.exports=i.default}])});