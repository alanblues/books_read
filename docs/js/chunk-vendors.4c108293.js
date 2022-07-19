(self["webpackChunkbooks_read"]=self["webpackChunkbooks_read"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),s=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),s=String,i=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw i("Can't set "+s(t)+" as a prototype")}},1223:function(t,e,n){var r=n(5112),s=n(30),i=n(3070).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&i(a,o,{configurable:!0,value:s(null)}),t.exports=function(t){a[o][t]=!0}},5787:function(t,e,n){var r=n(7976),s=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),s=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(s(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),I=n(9711),_=n(9909),E=_.enforce,T=_.get,S=c.Int8Array,x=S&&S.prototype,A=c.Uint8ClampedArray,C=A&&A.prototype,D=S&&v(S),k=x&&v(x),N=Object.prototype,O=c.TypeError,R=b("toStringTag"),L=I("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",F=o&&!!w&&"Opera"!==d(c.opera),P=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!l(t))return!1;var e=d(t);return"DataView"===e||h(V,e)||h(B,e)},j=function(t){var e=v(t);if(l(e)){var n=T(e);return n&&h(n,M)?n[M]:j(e)}},q=function(t){if(!l(t))return!1;var e=d(t);return h(V,e)||h(B,e)},$=function(t){if(q(t))return t;throw O("Target is not a typed array")},K=function(t){if(u(t)&&(!w||y(D,t)))return t;throw O(f(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var s in V){var i=c[s];if(i&&h(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}k[t]&&!n||m(k,t,n?e:F&&x[t]||e,r)}},z=function(t,e,n){var r,s;if(a){if(w){if(n)for(r in V)if(s=c[r],s&&h(s,t))try{delete s[t]}catch(i){}if(D[t]&&!n)return;try{return m(D,t,n?e:F&&D[t]||e)}catch(i){}}for(r in V)s=c[r],!s||s[t]&&!n||m(s,t,e)}};for(r in V)s=c[r],i=s&&s.prototype,i?E(i)[M]=s:F=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(E(i)[M]=s);if((!F||!u(D)||D===Function.prototype)&&(D=function(){throw O("Incorrect invocation")},F))for(r in V)c[r]&&w(c[r],D);if((!F||!k||k===N)&&(k=D.prototype,F))for(r in V)c[r]&&w(c[r].prototype,k);if(F&&v(C)!==k&&w(C,k),a&&!h(k,R))for(r in P=!0,g(k,R,{get:function(){return l(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:P&&L,aTypedArray:$,aTypedArrayConstructor:K,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:j,isView:U,isTypedArray:q,TypedArray:D,TypedArrayPrototype:k}},1318:function(t,e,n){var r=n(5656),s=n(1400),i=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=i(c),l=s(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},9671:function(t,e,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=i(n),d=s(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},4326:function(t,e,n){var r=n(1702),s=r({}.toString),i=r("".slice);t.exports=function(t){return i(s(t),8,-1)}},648:function(t,e,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?i(e):"Object"==(r=i(e))&&s(e.callee)?"Arguments":r}},7741:function(t,e,n){var r=n(1702),s=Error,i=r("".replace),o=function(t){return String(s(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9920:function(t,e,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=s(e),c=o.f,u=i.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),s=n(3070),i=n(9114);t.exports=r?function(t,e,n){return s.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),s=n(3070),i=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:s.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),s=Object.defineProperty;t.exports=function(t,e){try{s(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,s,i=n(7854),o=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),t.exports=s},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var r=n(7293),s=n(9114);t.exports=!r((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},2109:function(t,e,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,y=t.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(f=e[h],t.dontCallGetSet?(p=s(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&i(f,"sham",!0),o(l,h,f,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.apply,o=s.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(i):function(){return o.apply(i,arguments)})},9974:function(t,e,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),s=Function.prototype.call;t.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(t,e,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),s=Function.prototype,i=s.bind,o=s.call,a=r&&i.bind(o,o);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),s=n(614),i=function(t){return s(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(s(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),s=n(7293),i=n(317);t.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),s=n(7293),i=n(4326),o=Object,a=r("".split);t.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),s=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&r(o=e.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},2788:function(t,e,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(t){return o(t)}),t.exports=i.inspectSource},8340:function(t,e,n){var r=n(111),s=n(8880);t.exports=function(t,e){r(e)&&"cause"in e&&s(t,"cause",e.cause)}},9909:function(t,e,n){var r,s,i,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(t){return i(t)?s(t):r(t,{})},w=function(t){return function(e){var n;if(!u(e)||(n=s(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var b=d.state||(d.state=new y),I=c(b.get),_=c(b.has),E=c(b.set);r=function(t,e){if(_(b,t))throw new g(m);return e.facade=t,E(b,t,e),e},s=function(t){return I(b,t)||{}},i=function(t){return _(b,t)}}else{var T=f("state");p[T]=!0,r=function(t,e){if(h(t,T))throw new g(m);return e.facade=t,l(t,T,e),e},s=function(t){return h(t,T)?t[T]:{}},i=function(t){return h(t,T)}}t.exports={set:r,get:s,has:i,enforce:v,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(s(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),s=n(614),i=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return s(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!i(t,"name")||a&&t.name!==e)&&(o?d(t,"name",{value:e,configurable:!0}):t.name=e),f&&n&&i(n,"arity")&&t.length!==n.arity&&d(t,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(s){}var r=l(t);return i(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=m((function(){return s(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},133:function(t,e,n){var r=n(7392),s=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!s((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),s=n(614),i=n(2788),o=r.WeakMap;t.exports=s(o)&&/native code/.test(i(o))},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},30:function(t,e,n){var r,s=n(9670),i=n(6048),o=n(748),a=n(3501),c=n(490),u=n(317),l=n(6200),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},y=function(t){return d+p+h+t+d+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[f][o[t]];return b()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=s(t),n=new g,g[f]=null,n[m]=t):n=b(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),s=n(3353),i=n(3070),o=n(9670),a=n(5656),c=n(1956);e.f=r&&!s?Object.defineProperties:function(t,e){o(t);var n,r=a(e),s=c(e),u=s.length,l=0;while(u>l)i.f(t,n=s[l++],r[n]);return t}},3070:function(t,e,n){var r=n(9781),s=n(4664),i=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";e.f=r?i?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var r=l(t,e);r&&r[f]&&(t[e]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!s(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!s(a,n)&&s(r,n)&&c(l,n);while(e.length>u)s(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},1956:function(t,e,n){var r=n(6324),s=n(748);t.exports=Object.keys||function(t){return r(t,s)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);e.f=s?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),s=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),s=n(614),i=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&s(n=t.toString)&&!i(a=r(n,t)))return a;if(s(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&s(n=t.toString)&&!i(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),c=s([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?c(e,n(t)):e}},2626:function(t,e,n){var r=n(3070).f;t.exports=function(t,e,n){n in t||r(t,n,{configurable:!0,get:function(){return e[n]},set:function(t){e[n]=t}})}},4488:function(t){var e=TypeError;t.exports=function(t){if(void 0==t)throw e("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),s=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=s(t))}},5465:function(t,e,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});t.exports=o},2309:function(t,e,n){var r=n(1913),s=n(5465);(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.23.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var r=n(9303),s=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?s(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),s=n(4488);t.exports=function(t){return r(s(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),s=Math.min;t.exports=function(t){return t>0?s(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),s=Object;t.exports=function(t){return s(r(t))}},4590:function(t,e,n){var r=n(3002),s=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),s=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw s("The argument can't be less than 0");return e}},7593:function(t,e,n){var r=n(6916),s=n(111),i=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!s(t)||i(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!s(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),s=n(2190);t.exports=function(t){var e=r(t,"string");return s(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),s=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++s+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),s=n(7293);t.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(133),c=n(3307),u=s("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!i(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&i(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):d(e)}return u[t]}},9191:function(t,e,n){"use strict";var r=n(5005),s=n(2597),i=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),g=n(1913);t.exports=function(t,e,n,y){var v="stackTraceLimit",w=y?2:1,b=t.split("."),I=b[b.length-1],_=r.apply(null,b);if(_){var E=_.prototype;if(!g&&s(E,"cause")&&delete E.cause,!n)return _;var T=r("Error"),S=e((function(t,e){var n=h(y?e:t,void 0),r=y?new _(t):new _;return void 0!==n&&i(r,"message",n),p&&i(r,"stack",f(r.stack,2)),this&&o(E,this)&&l(r,this,S),arguments.length>w&&d(r,arguments[w]),r}));if(S.prototype=E,"Error"!==I?a?a(S,T):c(S,T,{name:!0}):m&&v in _&&(u(S,_,v),u(S,_,"prepareStackTrace")),c(S,_),!g)try{E.name!==I&&i(E,"name",I),E.constructor=S}catch(x){}return S}}},2262:function(t,e,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(9303),a=n(1223);r({target:"Array",proto:!0},{at:function(t){var e=s(this),n=i(e),r=o(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}}),a("at")},6699:function(t,e,n){"use strict";var r=n(2109),s=n(1318).includes,i=n(7293),o=n(1223),a=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},1703:function(t,e,n){var r=n(2109),s=n(7854),i=n(2104),o=n(9191),a="WebAssembly",c=s[a],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var n={};n[t]=o(t,e,u),r({global:!0,constructor:!0,arity:1,forced:u},n)},h=function(t,e){if(c&&c[t]){var n={};n[t]=o(a+"."+t,e,u),r({target:a,stat:!0,constructor:!0,arity:1,forced:u},n)}};l("Error",(function(t){return function(e){return i(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return i(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return i(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return i(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return i(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return i(t,this,arguments)}})),l("URIError",(function(t){return function(e){return i(t,this,arguments)}})),h("CompileError",(function(t){return function(e){return i(t,this,arguments)}})),h("LinkError",(function(t){return function(e){return i(t,this,arguments)}})),h("RuntimeError",(function(t){return function(e){return i(t,this,arguments)}}))},4506:function(t,e,n){"use strict";var r=n(2109),s=n(1702),i=n(4488),o=n(9303),a=n(1340),c=n(7293),u=s("".charAt),l=c((function(){return"\ud842"!=="𠮷".at(-2)}));r({target:"String",proto:!0,forced:l},{at:function(t){var e=a(i(this)),n=e.length,r=o(t),s=r>=0?r:n+r;return s<0||s>=n?void 0:u(e,s)}})},8675:function(t,e,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=s(e),r=i(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},2958:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),s=n(9671).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,e,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=i.aTypedArray,m=i.exportTypedArrayMethod,g=!u((function(){var t=new Uint8ClampedArray(2);return s(f,t,{length:1,0:3},1),3!==t[1]})),y=g&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new h(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){p(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(g)return s(f,this,n,e);var r=this.length,i=o(n),u=0;if(i+e>r)throw l("Wrong length");while(u<i)this[e+u]=n[u++]}),!g||y)},1118:function(t,e,n){n(2958)},7380:function(t,e,n){n(3408)},2801:function(t,e,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(7741),p=n(9781),m=n(1913),g="DOMException",y=i("Error"),v=i(g),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),s=y(e);return s.name=g,a(r,"stack",o(1,f(s.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,I="stack"in y(g),_="stack"in new v(1,2),E=v&&p&&Object.getOwnPropertyDescriptor(s,g),T=!!E&&!(E.writable&&E.configurable),S=I&&!T&&!_;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:v});var x=i(g),A=x.prototype;if(A.constructor!==x)for(var C in m||a(A,"constructor",o(1,x)),d)if(c(d,C)){var D=d[C],k=D.s;c(x,k)||a(x,k,o(6,D.c))}},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return l},G6:function(){return I},L:function(){return a},LL:function(){return x},Mn:function(){return b},Sg:function(){return h},ZB:function(){return c},ZR:function(){return S},b$:function(){return y},d:function(){return v},eu:function(){return E},hl:function(){return _},jU:function(){return m},m9:function(){return F},ne:function(){return O},r3:function(){return D},ru:function(){return g},uI:function(){return f},vZ:function(){return k},w1:function(){return w},z$:function(){return d}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=c(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return d().indexOf("Electron/")>=0}function w(){const t=d();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return d().indexOf("MSAppHost/")>=0}function I(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}function E(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?A(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new S(r,o,n);return a}}function A(t,e){return t.replace(C,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(N(n)&&N(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){const n=new R(t,e);return n.subscribe.bind(n)}class R{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=L(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i},Fl:function(){return Bt},IU:function(){return Ct},Jd:function(){return E},PG:function(){return Tt},Um:function(){return It},WL:function(){return Pt},X$:function(){return A},X3:function(){return At},Xl:function(){return Dt},dq:function(){return Lt},j:function(){return S},lk:function(){return T},qj:function(){return bt},qq:function(){return w},yT:function(){return xt}});var r=n(7139);let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=g,e=I;while(t){if(t===this)return;t=t.parent}try{return this.parent=g,g=this,I=!0,p=1<<++f,f<=m?l(this):b(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,I=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I=!0;const _=[];function E(){_.push(I),I=!1}function T(){const t=_.pop();I=void 0===t||t}function S(t,e,n){if(I&&g){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;x(r,s)}}function x(t,e){let n=!1;f<=m?u(t)||(t.n|=p,n=!c(t)):n=!t.has(g),n&&(t.add(g),g.deps.push(t))}function A(t,e,n,s,i,o){const c=d.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=s)&&u.push(t)}));else switch(void 0!==n&&u.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(u.push(c.get(y)),(0,r._N)(t)&&u.push(c.get(v)));break;case"set":(0,r._N)(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);C(a(t))}}function C(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==g||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const k=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),O=P(),R=P(!1,!0),L=P(!0),M=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){E();const n=Ct(this)[e].apply(this,t);return T(),n}})),t}function P(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:gt:e?mt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?N.has(s):k(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?_t(a):bt(a):a)}}const V=U(),B=U(!0);function U(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&!St(s)&&(xt(s)||(s=Ct(s),o=Ct(o)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===Ct(i)&&(a?(0,r.aU)(s,o)&&A(e,"set",n,s,o):A(e,"add",n,s)),c}}function j(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,s),i}function q(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&N.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const K={get:O,set:V,deleteProperty:j,has:q,ownKeys:$},G={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},z=(0,r.l7)({},K,{get:R,set:B}),H=t=>t,W=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const s=Ct(t),i=Ct(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=W(s),a=r?H:n?Nt:kt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],r=Ct(n),s=Ct(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Y(t,e=!1){return t=t["__v_raw"],!e&&S(Ct(t),"iterate",y),Reflect.get(t,"size",t)}function X(t){t=Ct(t);const e=Ct(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function Z(t,e){e=Ct(e);const n=Ct(this),{has:s,get:i}=W(n);let o=s.call(n,t);o||(t=Ct(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function tt(t){const e=Ct(this),{has:n,get:r}=W(e);let s=n.call(e,t);s||(t=Ct(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&A(e,"delete",t,void 0,i),o}function et(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=Ct(i),a=e?H:t?Nt:kt;return!t&&S(o,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=Ct(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?H:e?Nt:kt;return!e&&S(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return Y(this)},has:J,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return Y(this)},has:J,add:X,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return Y(this,!0)},has(t){return J.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return J.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)})),[t,n,e,r]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ht={get:lt(!1,!1)},dt={get:lt(!1,!0)},ft={get:lt(!0,!1)};const pt=new WeakMap,mt=new WeakMap,gt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Et(t,!1,K,ht,pt)}function It(t){return Et(t,!1,z,dt,mt)}function _t(t){return Et(t,!0,G,ft,gt)}function Et(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Tt(t){return St(t)?Tt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function xt(t){return!(!t||!t["__v_isShallow"])}function At(t){return Tt(t)||St(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const kt=t=>(0,r.Kn)(t)?bt(t):t,Nt=t=>(0,r.Kn)(t)?_t(t):t;function Ot(t){I&&g&&(t=Ct(t),x(t.dep||(t.dep=a())))}function Rt(t,e){t=Ct(t),t.dep&&C(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Lt(t)?t.value:t}const Ft={get:(t,e,n)=>Mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pt(t){return Tt(t)?t:new Proxy(t,Ft)}class Vt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,Rt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Ct(this);return Ot(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bt(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new Vt(s,i,o||!i,n);return a}},3396:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},FN:function(){return pn},HY:function(){return Re},Ko:function(){return jt},P$:function(){return ot},Q6:function(){return dt},U2:function(){return ct},Us:function(){return Ae},Wm:function(){return Xe},Y8:function(){return rt},_:function(){return Ye},h:function(){return Nn},iD:function(){return Ke},ic:function(){return At},j4:function(){return Ge},kq:function(){return rn},nK:function(){return ht},up:function(){return Pt},wg:function(){return Be},wy:function(){return Lt}});n(6699),n(1703);var r=n(4870),s=n(7139);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let b=null,I=null;function _(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function E(t){let e=d+1,n=h.length;while(e<n){const r=e+n>>>1,s=O(h[r]);s<t?e=r+1:n=r}return e}function T(t){h.length&&h.includes(t,u&&t.allowRecurse?d+1:d)||t===I||(null==t.id?h.push(t):h.splice(E(t.id),0,t),S())}function S(){u||l||(l=!0,b=w.then(R))}function x(t){const e=h.indexOf(t);e>d&&h.splice(e,1)}function A(t,e,n,r){(0,s.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function C(t){A(t,p,f,m)}function D(t){A(t,y,g,v)}function k(t,e=null){if(f.length){for(I=e,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,I=null,k(t,e)}}function N(t){if(k(),g.length){const t=[...new Set(g)];if(g.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>O(t)-O(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const O=t=>null==t.id?1/0:t.id;function R(t){l=!1,u=!0,k(t),h.sort(((t,e)=>O(t)-O(e)));s.dG;try{for(d=0;d<h.length;d++){const t=h[d];t&&!1!==t.active&&i(t,null,14)}}finally{d=0,h.length=0,N(t),u=!1,b=null,(h.length||f.length||g.length)&&R(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let u;let l=r[u=(0,s.hR)(e)]||r[u=(0,s.hR)((0,s._A)(e))];!l&&a&&(l=r[u=(0,s.hR)((0,s.rs)(e))]),l&&o(l,t,6,i);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,i)}}function M(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=M(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function F(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let P=null,V=null;function B(t){const e=P;return P=t,V=t&&t.type.__scopeId||null,e}function U(t,e=P,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&qe(-1);const s=B(e),i=t(...n);return B(s),r._d&&qe(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function j(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=t;let v,w;const b=B(t);try{if(4&n.shapeFlag){const t=i||r;v=sn(d.call(t,t,f,o,m,p,g)),w=l}else{const t=e;0,v=sn(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:q(l)}}catch(_){Pe.length=0,a(_,t,1),v=Xe(Me)}let I=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=I;t.length&&7&e&&(c&&t.some(s.tR)&&(w=$(w,c)),I=en(I,w))}return n.dirs&&(I=en(I),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&(I.transition=n.transition),v=I,B(b),v}const q=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},$=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function K(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||G(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?G(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!F(u,n))return!0}}return!1}function G(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!F(n,i))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const H=t=>t.__isSuspense;function W(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):D(t)}function Q(t,e){if(fn){let n=fn.provides;const r=fn.parent&&fn.parent.provides;r===n&&(n=fn.provides=Object.create(r)),n[t]=e}else 0}function J(t,e,n=!1){const r=fn||P;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const Y={};function X(t,e,n){return Z(t,e,n)}function Z(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=s.kT){const h=fn;let d,f,p=!1,m=!1;if((0,r.dq)(t)?(d=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,s.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?nt(t):(0,s.mf)(t)?i(t,h,2):void 0))):d=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(t,h,3,[g])}:s.dG,e&&a){const t=d;d=()=>nt(t())}let g=t=>{f=b.onStop=()=>{i(t,h,4)}};if(bn)return g=s.dG,e?n&&o(e,h,3,[d(),m?[]:void 0,g]):d(),s.dG;let y=m?[]:Y;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(m?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(f&&f(),o(e,h,3,[t,y===Y?void 0:y,g]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>xe(v,h&&h.suspense):()=>C(v);const b=new r.qq(d,w);return e?n?v():y=b.run():"post"===c?xe(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,b)}}function tt(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?et(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=fn;mn(this);const c=Z(i,o.bind(r),n);return a?mn(a):gn(),c}function et(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function nt(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))nt(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)nt(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{nt(t,e)}));else if((0,s.PO)(t))for(const n in t)nt(t[n],e);return t}function rt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return St((()=>{t.isMounted=!0})),Ct((()=>{t.isUnmounting=!0})),t}const st=[Function,Array],it={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:st,onEnter:st,onAfterEnter:st,onEnterCancelled:st,onBeforeLeave:st,onLeave:st,onAfterLeave:st,onLeaveCancelled:st,onBeforeAppear:st,onAppear:st,onAfterAppear:st,onAppearCancelled:st},setup(t,{slots:e}){const n=pn(),s=rt();let i;return()=>{const o=e.default&&dt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Me){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(s.isLeaving)return ut(a);const l=lt(a);if(!l)return ut(a);const h=ct(l,c,s,n);ht(l,h);const d=n.subTree,f=d&&lt(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(f&&f.type!==Me&&(!He(l,f)||p)){const t=ct(f,c,s,n);if(ht(f,t),"out-in"===u)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},ut(a);"in-out"===u&&l.type!==Me&&(t.delayLeave=(t,e,n)=>{const r=at(s,f);r[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ot=it;function at(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ct(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,I=String(t.key),_=at(n,t),E=(t,e)=>{t&&o(t,r,9,e)},T=(t,e)=>{const n=e[1];E(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const s=_[I];s&&He(t,s)&&s.el._leaveCb&&s.el._leaveCb(),E(r,[e])},enter(t){let e=l,r=h,s=d;if(!n.isMounted){if(!i)return;e=v||l,r=w||h,s=b||d}let o=!1;const a=t._enterCb=e=>{o||(o=!0,E(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();E(f,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),E(n?g:m,[e]),e._leaveCb=void 0,_[s]===t&&delete _[s])};_[s]=t,p?T(p,[e,o]):o()},clone(t){return ct(t,e,n,r)}};return S}function ut(t){if(pt(t))return t=en(t),t.children=null,t}function lt(t){return pt(t)?t.children?t.children[0]:void 0:t}function ht(t,e){6&t.shapeFlag&&t.component?ht(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function dt(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Re?(128&o.patchFlag&&s++,r=r.concat(dt(o.children,e,a))):(e||o.type!==Me)&&r.push(null!=a?en(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const ft=t=>!!t.type.__asyncLoader;const pt=t=>t.type.__isKeepAlive;RegExp,RegExp;function mt(t,e){return(0,s.kJ)(t)?t.some((t=>mt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function gt(t,e){vt(t,"a",e)}function yt(t,e){vt(t,"da",e)}function vt(t,e,n=fn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(_t(e,r,n),n){let t=n.parent;while(t&&t.parent)pt(t.parent.vnode)&&wt(r,e,n,t),t=t.parent}}function wt(t,e,n,r){const i=_t(e,t,r,!0);Dt((()=>{(0,s.Od)(r[e],i)}),n)}function bt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function It(t){return 128&t.shapeFlag?t.ssContent:t}function _t(t,e,n=fn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const i=o(e,n,t,s);return gn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const Et=t=>(e,n=fn)=>(!bn||"sp"===t)&&_t(t,e,n),Tt=Et("bm"),St=Et("m"),xt=Et("bu"),At=Et("u"),Ct=Et("bum"),Dt=Et("um"),kt=Et("sp"),Nt=Et("rtg"),Ot=Et("rtc");function Rt(t,e=fn){_t("ec",t,e)}function Lt(t,e){const n=P;if(null===n)return t;const r=An(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&nt(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Mt(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[s];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Ft="components";function Pt(t,e){return Bt(Ft,t,!0,e)||t}const Vt=Symbol();function Bt(t,e,n=!0,r=!1){const i=P||fn;if(i){const n=i.type;if(t===Ft){const t=Cn(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Ut(i[t]||n[t],e)||Ut(i.appContext[t],e);return!o&&r?n:o}}function Ut(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}function jt(t,e,n,r){let i;const o=n&&n[r];if((0,s.kJ)(t)||(0,s.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=e(t[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const qt=t=>t?yn(t)?An(t)||t.proxy:qt(t.parent):null,$t=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>Jt(t),$forceUpdate:t=>t.f||(t.f=()=>T(t.update)),$nextTick:t=>t.n||(t.n=_.bind(t.proxy)),$watch:t=>tt.bind(t)}),Kt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];Gt&&(c[e]=0)}}const d=$t[e];let f,p;return d?("$attrs"===e&&(0,r.j)(t,"get",e),d(t)):(f=u.__cssModules)&&(f=f[e])?f:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)($t,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gt=!0;function zt(t){const e=Jt(t),n=t.proxy,i=t.ctx;Gt=!1,e.beforeCreate&&Wt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:I,unmounted:_,render:E,renderTracked:T,renderTriggered:S,errorCaptured:x,serverPrefetch:A,expose:C,inheritAttrs:D,components:k,directives:N,filters:O}=e,R=null;if(h&&Ht(h,i,R,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Gt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=kn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Qt(u[r],i,n,r);if(l){const t=(0,s.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function L(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(d&&Wt(d,t,"c"),L(Tt,f),L(St,p),L(xt,m),L(At,g),L(gt,y),L(yt,v),L(Rt,x),L(Ot,T),L(Nt,S),L(Ct,b),L(Dt,_),L(kt,A),(0,s.kJ)(C))if(C.length){const e=t.exposed||(t.exposed={});C.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});E&&t.render===s.dG&&(t.render=E),null!=D&&(t.inheritAttrs=D),k&&(t.components=k),N&&(t.directives=N)}function Ht(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=ee(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?J(n.from||o,n.default,!0):J(n.from||o):J(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Wt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Qt(t,e,n,r){const i=r.includes(".")?et(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&X(i,n)}else if((0,s.mf)(t))X(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Qt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&X(i,r,t)}else 0}function Jt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((t=>Yt(c,t,o,!0))),Yt(c,e,o)):c=e,i.set(e,c),c}function Yt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yt(t,i,n,!0),s&&s.forEach((e=>Yt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Xt={data:Zt,props:re,emits:re,methods:re,computed:re,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:re,directives:re,watch:se,provide:Zt,inject:te};function Zt(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function te(t,e){return re(ee(t),ee(e))}function ee(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ne(t,e){return t?[...new Set([].concat(t,e))]:e}function re(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function se(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=ne(t[r],e[r]);return n}function ie(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,We,1),t.propsDefaults=Object.create(null),ae(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function oe(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;ae(t,e,o,a)&&(h=!0);for(const i in u)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(o[i]=ce(l,u,i,void 0,t,!0)):delete o[i]);if(a!==u)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(F(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=ce(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ae(t,e,n,i){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const l=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:F(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ce(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return u}function ce(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(mn(i),r=s[n]=t.call(null,e),gn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ue(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!(0,s.mf)(t)){const r=t=>{u=!0;const[n,r]=ue(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);le(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(le(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=fe(Boolean,r.type),n=fe(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return r.set(t,l),l}function le(t){return"$"!==t[0]}function he(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function de(t,e){return he(t)===he(e)}function fe(t,e){return(0,s.kJ)(e)?e.findIndex((e=>de(e,t))):(0,s.mf)(e)&&de(e,t)?0:-1}const pe=t=>"_"===t[0]||"$stable"===t,me=t=>(0,s.kJ)(t)?t.map(sn):[sn(t)],ge=(t,e,n)=>{if(e._n)return e;const r=U(((...t)=>me(e(...t))),n);return r._c=!1,r},ye=(t,e,n)=>{const r=t._ctx;for(const i in t){if(pe(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=ge(i,n,r);else if(null!=n){0;const t=me(n);e[i]=()=>t}}},ve=(t,e)=>{const n=me(e);t.slots.default=()=>n},we=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):ye(e,t.slots={})}else t.slots={},e&&ve(t,e);(0,s.Nj)(t.slots,We,1)},be=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,ye(e,i)),a=e}else e&&(ve(t,e),a={default:1});if(o)for(const s in i)pe(s)||s in a||delete i[s]};function Ie(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _e=0;function Ee(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=Ie(),o=new Set;let a=!1;const c=i.app={_uid:_e++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:On,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,u){if(!a){0;const l=Xe(n,r);return l.appContext=i,o&&e?e(l,s):t(l,s,u),a=!0,c._container=s,s.__vue_app__=c,An(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Te(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>Te(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(ft(o)&&!a)return;const c=4&o.shapeFlag?An(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const d=e&&e.r,f=l.refs===s.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,l,12,[u,f]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(f[h]=[c],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],t.k&&(f[t.k]=h.value))}else e?(f[h]=u,(0,s.RI)(p,h)&&(p[h]=u)):i&&(h.value=u,t.k&&(f[t.k]=u))};u?(r.id=-1,xe(r,n)):r()}else 0}}function Se(){}const xe=W;function Ae(t){return Ce(t)}function Ce(t,e){Se();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=s.dG,cloneNode:g,insertStaticContent:y}=t,v=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!He(t,e)&&(r=Z(t),W(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Le:w(t,e,n,r);break;case Me:b(t,e,n,r);break;case Fe:null==t&&I(e,n,r,o);break;case Re:M(t,e,n,r,s,i,o,a,c);break;default:1&h?S(t,e,n,r,s,i,o,a,c):6&h?F(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,et)}null!=l&&s&&Te(l,t&&t.ref,i,e||t,!e)},w=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},I=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},E=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,s,i,o,a,c):O(t,e,s,i,o,a,c)},A=(t,e,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:I}=t;if(t.el&&void 0!==g&&-1===b)f=t.el=g(t.el);else{if(f=t.el=c(t.type,u,y&&y.is,y),8&v?d(f,t.children):16&v&&D(t.children,f,null,r,o,u&&"foreignObject"!==m,l,h),I&&Mt(t,null,r,"created"),y){for(const e in y)"value"===e||(0,s.Gg)(e)||a(f,e,null,y[e],u,t.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&un(p,r,t)}C(f,t,t.scopeId,l,r)}I&&Mt(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(f),i(f,e,n),((p=y&&y.onVnodeMounted)||_||I)&&xe((()=>{p&&un(p,r,t),_&&w.enter(f),I&&Mt(t,null,r,"mounted")}),o)},C=(t,e,n,r,s)=>{if(n&&m(t,n),r)for(let i=0;i<r.length;i++)m(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;C(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},D=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?on(t[u]):sn(t[u]);v(null,c,e,n,r,s,i,o,a)}},O=(t,e,n,r,i,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=e;l|=16&t.patchFlag;const p=t.props||s.kT,m=e.props||s.kT;let g;n&&De(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,e,t),f&&Mt(e,t,n,"beforeUpdate"),n&&De(n,!0);const y=i&&"foreignObject"!==e.type;if(h?R(t.dynamicChildren,h,u,n,r,y,o):c||q(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)L(u,e,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,i,t.children,n,r,X)}}1&l&&t.children!==e.children&&d(u,e.children)}else c||null!=h||L(u,e,p,m,n,r,i);((g=m.onVnodeUpdated)||f)&&xe((()=>{g&&un(g,n,e,t),f&&Mt(e,t,n,"updated")}),r)},R=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Re||!He(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,s,i,o,!0)}},L=(t,e,n,r,i,o,c)=>{if(n!==r){for(const u in r){if((0,s.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,i,o,X)}if(n!==s.kT)for(const u in n)(0,s.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,o,X);"value"in r&&a(t,"value",n.value,r.value)}},M=(t,e,n,r,s,o,a,c,l)=>{const h=e.el=t?t.el:u(""),d=e.anchor=t?t.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(i(h,n,r),i(d,n,r),D(e.children,n,d,s,o,a,c,l)):f>0&&64&f&&p&&t.dynamicChildren?(R(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&ke(t,e,!0)):q(t,e,n,d,s,o,a,c,l)},F=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):P(e,n,r,s,i,o,c):V(t,e,c)},P=(t,e,n,r,s,i,o)=>{const a=t.component=dn(t,r,s);if(pt(t)&&(a.ctx.renderer=et),In(a),a.asyncDep){if(s&&s.registerDep(a,B),!t.el){const t=a.subTree=Xe(Me);b(null,t,e,n)}}else B(a,t,e,n,s,i,o)},V=(t,e,n)=>{const r=e.component=t.component;if(K(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,e,n);r.next=e,x(r.update),r.update()}else e.el=t.el,r.vnode=e},B=(t,e,n,i,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,h=n;0,De(t,!1),n?(n.el=l.el,U(t,n,c)):n=l,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&un(e,u,n,l),De(t,!0);const d=j(t);0;const p=t.subTree;t.subTree=d,v(p,d,f(p.el),Z(p),t,o,a),n.el=d.el,null===h&&z(t,d.el),i&&xe(i,o),(e=n.props&&n.props.onVnodeUpdated)&&xe((()=>un(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:d}=t,f=ft(e);if(De(t,!1),l&&(0,s.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&un(r,d,e),De(t,!0),c&&rt){const n=()=>{t.subTree=j(t),rt(c,t.subTree,t,o,null)};f?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=j(t);0,v(null,r,n,i,t,o,a),e.el=r.el}if(h&&xe(h,o),!f&&(r=u&&u.onVnodeMounted)){const t=e;xe((()=>un(r,d,t)),o)}(256&e.shapeFlag||d&&ft(d.vnode)&&256&d.vnode.shapeFlag)&&t.a&&xe(t.a,o),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>T(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,De(t,!0),h()},U=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,oe(t,e.props,s,n),be(t,e.children,n),(0,r.Jd)(),k(void 0,t.update),(0,r.lk)()},q=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:f,shapeFlag:p}=e;if(f>0){if(128&f)return void G(u,h,n,r,s,i,o,a,c);if(256&f)return void $(u,h,n,r,s,i,o,a,c)}8&p?(16&l&&X(u,s,i),h!==u&&d(n,h)):16&l?16&p?G(u,h,n,r,s,i,o,a,c):X(u,s,i,!0):(8&l&&d(n,""),16&p&&D(h,n,r,s,i,o,a,c))},$=(t,e,n,r,i,o,a,c,u)=>{t=t||s.Z6,e=e||s.Z6;const l=t.length,h=e.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=e[f]=u?on(e[f]):sn(e[f]);v(t[f],r,n,null,i,o,a,c,u)}l>h?X(t,i,o,!0,!1,d):D(e,n,r,i,o,a,c,u,d)},G=(t,e,n,r,i,o,a,c,u)=>{let l=0;const h=e.length;let d=t.length-1,f=h-1;while(l<=d&&l<=f){const r=t[l],s=e[l]=u?on(e[l]):sn(e[l]);if(!He(r,s))break;v(r,s,n,null,i,o,a,c,u),l++}while(l<=d&&l<=f){const r=t[d],s=e[f]=u?on(e[f]):sn(e[f]);if(!He(r,s))break;v(r,s,n,null,i,o,a,c,u),d--,f--}if(l>d){if(l<=f){const t=f+1,s=t<h?e[t].el:r;while(l<=f)v(null,e[l]=u?on(e[l]):sn(e[l]),n,s,i,o,a,c,u),l++}}else if(l>f)while(l<=d)W(t[l],i,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const t=e[l]=u?on(e[l]):sn(e[l]);null!=t.key&&g.set(t.key,l)}let y,w=0;const b=f-m+1;let I=!1,_=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=t[l];if(w>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&He(r,e[y])){s=y;break}void 0===s?W(r,i,o,!0):(E[s-m]=l+1,s>=_?_=s:I=!0,v(r,e[s],n,null,i,o,a,c,u),w++)}const T=I?Ne(E):s.Z6;for(y=T.length-1,l=b-1;l>=0;l--){const t=m+l,s=e[t],d=t+1<h?e[t+1].el:r;0===E[l]?v(null,s,n,d,i,o,a,c,u):I&&(y<0||l!==T[y]?H(s,n,d,2):y--)}}},H=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void H(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Re){i(o,e,n);for(let t=0;t<u.length;t++)H(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Fe)return void _(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),xe((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,u):u()}else i(o,e,n)},W=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=t;if(null!=a&&Te(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const f=1&l&&d,p=!ft(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&un(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);f&&Mt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,et,r):u&&(i!==Re||h>0&&64&h)?X(u,e,n,!1,!0):(i===Re&&384&h||!s&&16&l)&&X(c,e,n),r&&Q(t)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&xe((()=>{m&&un(m,e,t),f&&Mt(t,null,e,"unmounted")}),n)},Q=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Re)return void J(n,r);if(e===Fe)return void E(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,t,e,n)),c&&xe(c,e),xe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)W(t[o],e,n,r,s)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&W(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),N(),e._vnode=t},et={p:v,um:W,m:H,r:Q,mt:P,mc:D,pc:q,pbc:R,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ee(tt,nt)}}function De({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ke(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=on(i[s]),e.el=t.el),n||ke(t,e))}}function Ne(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const Oe=t=>t.__isTeleport;const Re=Symbol(void 0),Le=Symbol(void 0),Me=Symbol(void 0),Fe=Symbol(void 0),Pe=[];let Ve=null;function Be(t=!1){Pe.push(Ve=t?null:[])}function Ue(){Pe.pop(),Ve=Pe[Pe.length-1]||null}let je=1;function qe(t){je+=t}function $e(t){return t.dynamicChildren=je>0?Ve||s.Z6:null,Ue(),je>0&&Ve&&Ve.push(t),t}function Ke(t,e,n,r,s,i){return $e(Ye(t,e,n,r,s,i,!0))}function Ge(t,e,n,r,s){return $e(Xe(t,e,n,r,s,!0))}function ze(t){return!!t&&!0===t.__v_isVNode}function He(t,e){return t.type===e.type&&t.key===e.key}const We="__vInternal",Qe=({key:t})=>null!=t?t:null,Je=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:P,r:t,k:e,f:!!n}:t:null;function Ye(t,e=null,n=null,r=0,i=null,o=(t===Re?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qe(e),ref:e&&Je(e),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(an(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,s.HD)(n)?8:16),je>0&&!a&&Ve&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Ve.push(u),u}const Xe=Ze;function Ze(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==Vt||(t=Me),ze(t)){const r=en(t,e,!0);return n&&an(r,n),je>0&&!a&&Ve&&(6&r.shapeFlag?Ve[Ve.indexOf(t)]=r:Ve.push(r)),r.patchFlag|=-2,r}if(Dn(t)&&(t=t.__vccOpts),e){e=tn(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:H(t)?128:Oe(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return Ye(t,e,n,i,o,c,a,!0)}function tn(t){return t?(0,r.X3)(t)||We in t?(0,s.l7)({},t):t:null}function en(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?cn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Qe(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(Je(e)):[i,Je(e)]:Je(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor};return u}function nn(t=" ",e=0){return Xe(Le,null,t,e)}function rn(t="",e=!1){return e?(Be(),Ge(Me,null,t)):Xe(Me,null,t)}function sn(t){return null==t||"boolean"===typeof t?Xe(Me):(0,s.kJ)(t)?Xe(Re,null,t.slice()):"object"===typeof t?on(t):Xe(Le,null,String(t))}function on(t){return null===t.el||t.memo?t:en(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||We in e?3===r&&P&&(1===P.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=P}}else(0,s.mf)(e)?(e={default:e,_ctx:P},n=32):(e=String(e),64&r?(n=16,e=[nn(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){o(t,e,7,[n,r])}const ln=Ie();let hn=0;function dn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||ln,a={uid:hn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ue(i,o),emitsOptions:M(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let fn=null;const pn=()=>fn||P,mn=t=>{fn=t,t.scope.on()},gn=()=>{fn&&fn.scope.off(),fn=null};function yn(t){return 4&t.vnode.shapeFlag}let vn,wn,bn=!1;function In(t,e=!1){bn=e;const{props:n,children:r}=t.vnode,s=yn(t);ie(t,n,s,e),we(t,r);const i=s?_n(t,e):void 0;return bn=!1,i}function _n(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Kt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?xn(t):null;mn(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),gn(),(0,s.tI)(c)){if(c.then(gn,gn),e)return c.then((n=>{En(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else En(t,c,e)}else Tn(t,e)}function En(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Tn(t,n)}function Tn(t,e,n){const i=t.type;if(!t.render){if(!e&&vn&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=vn(e,c)}}t.render=i.render||s.dG,wn&&wn(t)}mn(t),(0,r.Jd)(),zt(t),(0,r.lk)(),gn()}function Sn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function xn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Sn(t))},slots:t.slots,emit:t.emit,expose:e}}function An(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in $t?$t[n](t):void 0}}))}function Cn(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Dn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const kn=(t,e)=>(0,r.Fl)(t,e,bn);function Nn(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?ze(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ze(n)&&(n=[n]),Xe(t,e,n))}Symbol("");const On="3.2.37"},9242:function(t,e,n){"use strict";n.d(e,{nr:function(){return nt},ri:function(){return ot}});n(6699);var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)d(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=m(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const f=["Webkit","Moz","ms"],p={};function m(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in t)return p[e]=n}return e}const g="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(g,e.slice(6,e.length)):t.setAttributeNS(g,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let I=0;const _=Promise.resolve(),E=()=>{I=0},T=()=>I||(_.then(E),I=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function x(t,e,n,r){t.removeEventListener(e,n,r)}function A(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=D(e);if(r){const o=i[e]=k(r,s);S(t,n,o,a)}else o&&(x(t,n,o,a),i[e]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function D(t){let e;if(C.test(t)){let n;e={};while(n=t.match(C))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function k(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=T(),n}function N(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const O=/^on[a-z]/,R=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?u(t,s,i):"style"===e?l(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||A(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,s,i))?v(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function L(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&O.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!O.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",F="animation",P=(t,{slots:e})=>(0,s.h)(s.P$,j(t),e);P.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},B=(P.props=(0,r.l7)({},s.P$.props,V),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),U=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function j(t){const e={};for(const r in t)r in V||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=q(i),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:I,onLeaveCancelled:_,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:S=b}=e,x=(t,e,n)=>{G(t,e?h:c),G(t,e?l:a),n&&n()},A=(t,e)=>{t._isLeaving=!1,G(t,d),G(t,p),G(t,f),e&&e()},C=t=>(e,n)=>{const r=t?T:w,i=()=>x(e,t,n);B(r,[e,i]),z((()=>{G(e,t?u:o),K(e,t?h:c),U(r)||W(e,s,g,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){B(v,[t]),K(t,o),K(t,a)},onBeforeAppear(t){B(E,[t]),K(t,u),K(t,l)},onEnter:C(!1),onAppear:C(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>A(t,e);K(t,d),X(),K(t,f),z((()=>{t._isLeaving&&(G(t,d),K(t,p),U(I)||W(t,s,y,n))})),B(I,[t,n])},onEnterCancelled(t){x(t,!1),B(b,[t])},onAppearCancelled(t){x(t,!0),B(S,[t])},onLeaveCancelled(t){A(t),B(_,[t])}})}function q(t){if(null==t)return null;if((0,r.Kn)(t))return[$(t.enter),$(t.leave)];{const e=$(t);return[e,e]}}function $(t){const e=(0,r.He)(t);return e}function K(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function G(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let H=0;function W(t,e,n,r){const s=t._endId=++H,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Q(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),i()},d=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,d)}function Q(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(M+"Delay"),i=r(M+"Duration"),o=J(s,i),a=r(F+"Delay"),c=r(F+"Duration"),u=J(a,c);let l=null,h=0,d=0;e===M?o>0&&(l=M,h=o,d=i.length):e===F?u>0&&(l=F,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?M:F:null,d=l?l===M?i.length:c.length:0);const f=l===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Z(i);const o=s||i.props&&"number"===i.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),t._assign(s)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=(0,r.l7)({patchProp:R},c);let st;function it(){return st||(st=(0,s.Us)(rt))}const ot=(...t)=>{const e=it().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=at(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function at(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return O},E9:function(){return rt},F7:function(){return T},Gg:function(){return K},HD:function(){return M},He:function(){return et},Kn:function(){return P},NO:function(){return _},Nj:function(){return tt},Od:function(){return A},PO:function(){return q},Pq:function(){return a},RI:function(){return D},S0:function(){return $},W7:function(){return j},WV:function(){return m},Z6:function(){return b},_A:function(){return H},_N:function(){return N},aU:function(){return X},dG:function(){return I},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return k},kT:function(){return w},l7:function(){return x},mf:function(){return L},rs:function(){return Q},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return F},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=M(r)?d(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return M(t)||P(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(t){const e={};return t.split(l).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(M(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(P(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=m(t[r],e[r]);return n}function m(t,e){if(t===e)return!0;let n=R(t),r=R(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=F(t),r=F(e),n||r)return t===e;if(n=k(t),r=k(e),n||r)return!(!n||!r)&&p(t,e);if(n=P(t),r=P(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function g(t,e){return t.findIndex((t=>m(t,e)))}const y=t=>M(t)?t:null==t?"":k(t)||P(t)&&(t.toString===B||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):N(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:O(e)?{[`Set(${e.size})`]:[...e.values()]}:!P(e)||k(e)||q(e)?e:String(e),w={},b=[],I=()=>{},_=()=>!1,E=/^on[^a-z]/,T=t=>E.test(t),S=t=>t.startsWith("onUpdate:"),x=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C=Object.prototype.hasOwnProperty,D=(t,e)=>C.call(t,e),k=Array.isArray,N=t=>"[object Map]"===U(t),O=t=>"[object Set]"===U(t),R=t=>"[object Date]"===U(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,F=t=>"symbol"===typeof t,P=t=>null!==t&&"object"===typeof t,V=t=>P(t)&&L(t.then)&&L(t.catch),B=Object.prototype.toString,U=t=>B.call(t),j=t=>U(t).slice(8,-1),q=t=>"[object Object]"===U(t),$=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},z=/-(\w)/g,H=G((t=>t.replace(z,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,Q=G((t=>t.replace(W,"-$1").toLowerCase())),J=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),Y=G((t=>t?`on${J(t)}`:"")),X=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},6780:function(t,e,n){"use strict";n.d(e,{Z:function(){return r.Z}});var r=n(2661),s="firebase",i="9.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(s,i,"app-compat")},4406:function(t,e,n){"use strict";n(8675),n(3462),n(7380),n(1118);var r,s=n(2661),i=(n(1703),n(2801),n(2262),n(4506),n(6699),n(7077)),o=n(7142),a=n(5168),c=n(223),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,y)&&t[y]||(t[y]=++v)}var y="closure_uid_"+(1e9*Math.random()>>>0),v=0;function w(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function I(t,e,n){return I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,I.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function T(){this.s=this.s,this.o=this.o}var S=0,x={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=S)){var t=g(this);delete x[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},C=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function D(t){t:{var e=Hn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function k(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var R,L=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function M(t,e){return-1!=t.indexOf(e)}function F(t,e){return t<e?-1:t>e?1:0}t:{var P=d.navigator;if(P){var V=P.userAgent;if(V){R=V;break t}}R=""}function B(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function K(t){var e=rt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var G,z=M(R,"Opera"),H=M(R,"Trident")||M(R,"MSIE"),W=M(R,"Edge"),Q=W||H,J=M(R,"Gecko")&&!(M(R.toLowerCase(),"webkit")&&!M(R,"Edge"))&&!(M(R,"Trident")||M(R,"MSIE"))&&!M(R,"Edge"),Y=M(R.toLowerCase(),"webkit")&&!M(R,"Edge");function X(){var t=d.document;return t?t.documentMode:void 0}t:{var Z="",tt=function(){var t=R;return J?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):H?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Y?/WebKit\/(\S+)/.exec(t):z?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(tt&&(Z=tt?tt[1]:""),H){var et=X();if(null!=et&&et>parseFloat(Z)){G=String(et);break t}}G=Z}var nt,rt={};function st(){return K((function(){let t=0;const e=L(String(G)).split("."),n=L("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=F(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||F(0==s[2].length,0==i[2].length)||F(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(d.document&&H){var it=X();nt=it||(parseInt(G,10)||void 0)}else nt=void 0;var ot=nt,at=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{d.addEventListener("test",f,e),d.removeEventListener("test",f,e)}catch(n){}return t}();function ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ut(t,e){if(ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J){t:{try{$(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ut.Z.h.call(this)}}ct.prototype.h=function(){this.defaultPrevented=!0},E(ut,ct);var lt={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),dt=0;function ft(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++dt,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function mt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=A(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function yt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}mt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=yt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),wt={};function bt(t,e,n,r,s){if(r&&r.once)return Et(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)bt(t,e[i],n,r,s);return null}return n=kt(n),t&&t[ht]?t.N(e,n,m(r)?!!r.capture:!!r,s):It(t,e,n,!1,r,s)}function It(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=m(s)?!!s.capture:!!s,a=Ct(t);if(a||(t[vt]=a=new mt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_t(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)at||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(xt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function Et(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Et(t,e[i],n,r,s);return null}return n=kt(n),t&&t[ht]?t.O(e,n,m(r)?!!r.capture:!!r,s):It(t,e,n,!0,r,s)}function Tt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tt(t,e[i],n,r,s);else r=m(r)?!!r.capture:!!r,n=kt(n),t&&t[ht]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=yt(i,n,r,s),-1<n&&(pt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Ct(t))&&(e=t.g[e.toString()],t=-1,e&&(t=yt(e,n,r,s)),(n=-1<t?e[t]:null)&&St(n))}function St(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ht])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ct(e))?(gt(n,t),0==n.h&&(n.src=null,e[vt]=null)):pt(t)}}}function xt(t){return t in wt?wt[t]:wt[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new ut(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&St(t),t=n.call(r,e)}return t}function Ct(t){return t=t[vt],t instanceof mt?t:null}var Dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"===typeof t?t:(t[Dt]||(t[Dt]=function(e){return t.handleEvent(e)}),t[Dt])}function Nt(){T.call(this),this.i=new mt(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new ct(e,t);else if(e instanceof ct)e.target=e.target||t;else{var s=e;e=new ct(r,t),q(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Rt(o,r,!0,e)&&s}if(o=e.g=t,s=Rt(o,r,!0,e)&&s,s=Rt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Rt(o,r,!1,e)&&s}function Rt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}E(Nt,T),Nt.prototype[ht]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)pt(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Lt=d.JSON.stringify;function Mt(){var t=Kt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ft{constructor(){this.h=this.g=null}add(t,e){const n=Vt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Vt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Bt),(t=>t.reset()));class Bt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){d.setTimeout((()=>{throw t}),0)}function jt(t,e){Pt||qt(),$t||(Pt(),$t=!0),Kt.add(t,e)}function qt(){var t=d.Promise.resolve(void 0);Pt=function(){t.then(Gt)}}var $t=!1,Kt=new Ft;function Gt(){for(var t;t=Mt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Vt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function zt(t,e){Nt.call(this),this.h=t||1,this.g=e||d,this.j=I(this.kb,this),this.l=Date.now()}function Ht(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Wt(t,e,n){if("function"===typeof t)n&&(t=I(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=I(t.handleEvent,t)}return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function Qt(t){t.g=Wt((()=>{t.g=null,t.i&&(t.i=!1,Qt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(zt,Nt),r=zt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Ht(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){zt.Z.M.call(this),Ht(this),delete this.g};class Jt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Qt(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(t){T.call(this),this.h=t,this.g={}}E(Yt,T);var Xt=[];function Zt(t,e,n,r){Array.isArray(n)||(n&&(Xt[0]=n.toString()),n=Xt);for(var s=0;s<n.length;s++){var i=bt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function te(t){B(t.g,(function(t,e){this.g.hasOwnProperty(e)&&St(t)}),t),t.g={}}function ee(){this.g=!0}function ne(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function re(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function se(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+oe(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function oe(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Lt(n)}catch(a){return e}}Yt.prototype.M=function(){Yt.Z.M.call(this),te(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ee.prototype.Aa=function(){this.g=!1},ee.prototype.info=function(){};var ae={},ce=null;function ue(){return ce=ce||new Nt}function le(t){ct.call(this,ae.Ma,t)}function he(t){const e=ue();Ot(e,new le(e,t))}function de(t,e){ct.call(this,ae.STAT_EVENT,t),this.stat=e}function fe(t){const e=ue();Ot(e,new de(e,t))}function pe(t,e){ct.call(this,ae.Na,t),this.size=e}function me(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){t()}),e)}ae.Ma="serverreachability",E(le,ct),ae.STAT_EVENT="statevent",E(de,ct),ae.Na="timingevent",E(pe,ct);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ye={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function we(t){return t.h||(t.h=t.i())}function be(){}ve.prototype.h=null;var Ie,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ee(){ct.call(this,"d")}function Te(){ct.call(this,"c")}function Se(){}function xe(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Yt(this),this.P=Ce,t=Q?125:void 0,this.W=new zt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}E(Ee,ct),E(Te,ct),E(Se,ve),Se.prototype.g=function(){return new XMLHttpRequest},Se.prototype.i=function(){return{}},Ie=new Se;var Ce=45e3,De={},ke={};function Ne(t,e,n){t.K=1,t.v=nn(Je(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Fe(t),t.A=Je(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ae,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Jt(I(t.Ia,t,t.g),t.O)),Zt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),he(1),ne(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Le(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Me(t,n),r==ke){4==e&&(t.o=4,fe(14),s=!1),se(t.j,t.m,null,"[Incomplete Response]");break}if(r==De){t.o=4,fe(15),se(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}se(t.j,t.m,r,null),je(t,r)}Re(t)&&r!=ke&&r!=De&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,fe(11))):(se(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Be(t))}function Me(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ke:(n=Number(e.substring(n,r)),isNaN(n)?De:(r+=1,r+n>e.length?ke:(e=e.substr(r,n),t.C=r+n,e)))}function Fe(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=me(I(t.eb,t),e)}function Ve(t){t.B&&(d.clearTimeout(t.B),t.B=null)}function Be(t){0==t.l.G||t.I||wr(t.l,t)}function Ue(t){Ve(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ht(t.W),te(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||xn(n.i,t)))if(n.I=t.N,!t.J&&xn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vr(n),or(n)}mr(n),fe(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=me(I(n.ab,n),6e3));if(1>=Sn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Ir(n,11)}else if((t.J||n.g==t)&&vr(n),!O(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(M(t,"spdy")||M(t,"quic")||M(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(An(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,en(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ve(a),Fe(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||Ir(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ir(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}he(4)}catch(u){}}function qe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)C(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=qe(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ke(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ke)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ge(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ze(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],ze(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function ze(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=xe.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Zn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Zn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Q||this.g&&(this.h.h||this.g.ga()||tr(this.g)))){this.I||4!=l||7==e||he(8==e||0>=h?3:2),Ve(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var r=tr(this.g);t="";var s=r.length,i=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Be(this);var o="";break e}this.h.i=new d.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,re(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,fe(12),Ue(this),Be(this);break t}se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Le(this,l,o),Q&&this.i&&3==l&&(Zt(this.V,this.W,"tick",this.fb),this.W.start())):(se(this.j,this.m,o,null),je(this,o)),4==l&&Ue(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Fe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Ue(this),Be(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Zn(this.g),e=this.g.ga();this.C<e.length&&(Ve(this),Le(this,t,e),this.i&&4!=t&&Fe(this))}},r.cancel=function(){this.I=!0,Ue(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(he(3),fe(17)),Ue(this),this.o=2,Be(this)):Pe(this,this.Y-t)},r=Ke.prototype,r.R=function(){Ge(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ge(this),this.g.concat()},r.get=function(t,e){return ze(this.h,t)?this.h[t]:e},r.set=function(t,e){ze(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var He=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function We(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Qe){this.g=void 0!==e?e:t.g,Ye(this,t.j),this.s=t.s,Xe(this,t.i),Ze(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new Ke(e.g),n.h=e.h),tn(this,n),this.o=t.o}else t&&(n=String(t).match(He))?(this.g=!!e,Ye(this,n[1]||"",!0),this.s=on(n[2]||""),Xe(this,n[3]||"",!0),Ze(this,n[4]),this.l=on(n[5]||"",!0),tn(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Je(t){return new Qe(t)}function Ye(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xe(t,e,n){t.i=n?on(e,!0):e}function Ze(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function tn(t,e,n){e instanceof pn?(t.h=e,bn(t.h,t.g)):(n||(e=an(e,dn)),t.h=new pn(e,t.g))}function en(t,e,n){t.h.set(e,n)}function nn(t){return en(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function rn(t){return t instanceof Qe?Je(t):new Qe(t,void 0)}function sn(t,e,n,r){var s=new Qe(null,void 0);return t&&Ye(s,t),e&&Xe(s,e),n&&Ze(s,n),r&&(s.l=r),s}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function an(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,cn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(an(e,un,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(an(e,un,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",an(n,fn)),t.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mn(t){t.g||(t.g=new Ke,t.h=0,t.i&&We(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){mn(t),e=wn(t,e),ze(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ze(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ge(t)))}function yn(t,e){return mn(t),e=wn(t,e),ze(t.g.h,e)}function vn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(wn(t,e),N(n)),t.h+=n.length)}function wn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(mn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),vn(this,n,t))}),t)),t.j=e}r=pn.prototype,r.add=function(t,e){mn(this),this.i=null,t=wn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){mn(this),this.g.forEach((function(n,r){C(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){mn(this);var e=[];if("string"===typeof t)yn(this,t)&&(e=k(e,this.g.get(wn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=k(e,t[n])}return e},r.set=function(t,e){return mn(this),this.i=null,t=wn(this,t),yn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var In=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||En,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sn(t){return t.h?1:t.g?t.g.size:0}function xn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function Cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Dn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function kn(){}function Nn(){this.g=new kn}function On(t,e,n){const r=n||"";try{$e(t,(function(t,n){let s=t;m(t)&&(s=Lt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Rn(t,e){const n=new ee;if(d.Image){const r=new Image;r.onload=_(Ln,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Ln,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Ln,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Ln,n,r,"TestLoadImage: timeout",!1,e),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ln(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Mn(t){this.l=t.$b||null,this.j=t.ib||!1}function Fn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=Dn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},kn.prototype.stringify=function(t){return d.JSON.stringify(t,void 0)},kn.prototype.parse=function(t){return d.JSON.parse(t,void 0)},E(Mn,ve),Mn.prototype.g=function(){return new Fn(this.l,this.j)},Mn.prototype.i=function(t){return function(){return t}}({}),E(Fn,Nt);var Pn=0;function Vn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Bn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Fn.prototype,r.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||d).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Bn(this)),this.readyState=Pn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bn(this):Un(this),3==this.readyState&&Vn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Bn(this))},r.Ta=function(t){this.g&&(this.response=t,Bn(this))},r.ha=function(){this.g&&Bn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Fn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=d.JSON.parse;function qn(t){Nt.call(this),this.headers=new Ke,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}E(qn,Nt);var $n="",Kn=/^https?$/i,Gn=["POST","PUT"];function zn(t){return H&&st()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Hn(t){return"content-type"==t.toLowerCase()}function Wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qn(t),Yn(t)}function Qn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Jn(t){if(t.h&&"undefined"!=typeof h&&(!t.C[1]||4!=Zn(t)||2!=t.ba()))if(t.v&&4==Zn(t))Wt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Zn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(He)[1]||null;if(!s&&d.self&&d.self.location){var i=d.self.location.protocol;s=i.substr(0,i.length-1)}r=!Kn.test(s?s.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Zn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Qn(t)}}finally{Yn(t)}}}function Yn(t,e){if(t.g){Xn(t);const r=t.g,s=t.C[0]?f:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Xn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function Zn(t){return t.g?t.g.readyState:0}function tr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function er(t){let e="";return B(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function nr(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=er(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):en(t,e,n))}function rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sr(t){this.za=0,this.l=[],this.h=new ee,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,t),this.$a=rr("retryDelaySeedMs",1e4,t),this.Ya=rr("forwardChannelMaxRetries",2,t),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(ar(t),3==t.G){var e=t.V++,n=Je(t.F);en(n,"SID",t.J),en(n,"RID",e),en(n,"TYPE","terminate"),dr(t,n),e=new xe(t,t.h,e,void 0),e.K=2,e.v=nn(Je(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(e.v.toString(),"")),!n&&d.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fe(e)}_r(t)}function or(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function ar(t){or(t),t.u&&(d.clearTimeout(t.u),t.u=null),vr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&d.clearTimeout(t.m),t.m=null)}function cr(t,e){t.l.push(new In(t.Za++,e)),3==t.G&&ur(t)}function ur(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function lr(t,e){return!(Sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=me(I(t.Ha,t,e),br(t,t.C)),t.C++,!0))}function hr(t,e){var n;n=e?e.m:t.V++;const r=Je(t.F);en(r,"SID",t.J),en(r,"RID",n),en(r,"AID",t.U),dr(t,r),t.o&&t.s&&nr(r,t.o,t.s),n=new xe(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),Ne(n,r,e)}function dr(t,e){t.j&&$e({},(function(t,n){en(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?I(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{On(a,t,"req"+n+"_")}catch(ts){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function pr(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function mr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=me(I(t.Ga,t),br(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(d.clearTimeout(t.B),t.B=null)}function yr(t){t.g=new xe(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Je(t.oa);en(e,"RID","rpc"),en(e,"SID",t.J),en(e,"CI",t.N?"0":"1"),en(e,"AID",t.U),dr(t,e),en(e,"TYPE","xmlhttp"),t.o&&t.s&&nr(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=nn(Je(e)),n.s=null,n.U=!0,Oe(n,t)}function vr(t){null!=t.v&&(d.clearTimeout(t.v),t.v=null)}function wr(t,e){var n=null;if(t.g==e){vr(t),gr(t),t.g=null;var r=2}else{if(!xn(t.i,e))return;n=e.D,Cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ue(),Ot(r,new pe(r,n,e,s)),ur(t)}else pr(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&lr(t,e)||2==r&&mr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ir(t,5);break;case 4:Ir(t,10);break;case 3:Ir(t,6);break;default:Ir(t,2)}}function br(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ir(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=I(t.jb,t);n||(n=new Qe("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Ye(n,"https"),nn(n)),Rn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),_r(t),ar(t)}function _r(t){t.G=0,t.I=-1,t.j&&(0==Dn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function Er(t,e,n){let r=rn(n);if(""!=r.i)e&&Xe(r,e+"."+r.i),Ze(r,r.m);else{const t=d.location;r=sn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&B(t.aa,(function(t,e){en(r,e,t)})),e=t.D,n=t.sa,e&&n&&en(r,e,n),en(r,"VER",t.ma),dr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new qn(new Mn({ib:!0})):new qn(t.qa),e.L=t.H,e}function Sr(){}function xr(){if(H&&!(10<=Number(ot)))throw Error("Environmental error: no available transport.")}function Ar(t,e){Nt.call(this),this.g=new sr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new kr(this)}function Cr(t){Ee.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Dr(){Te.call(this),this.status=1}function kr(t){this.g=t}r=qn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ie.g(),this.C=this.u?we(this.u):we(Ie),this.g.onreadystatechange=I(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Wn(this,i)}t=n||"";const s=new Ke(this.headers);r&&$e(r,(function(t,e){s.set(e,t)})),r=D(s.T()),n=d.FormData&&t instanceof d.FormData,!(0<=A(Gn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=zn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=I(this.pa,this)):this.A=Wt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wn(this,i)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=sr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new xe(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=U(i),q(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,s,e),n=Je(this.F),en(n,"RID",t),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&i&&nr(n,this.o,i),An(this.i,s),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",e),en(n,"SID","null"),s.$=!0,Ne(s,n,null)):Ne(s,n,e),this.G=2}}else 3==this.G&&(t?hr(this,t):0==this.l.length||Tn(this.i)||hr(this))},r.Ga=function(){if(this.u=null,yr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=me(I(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),or(this),yr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Sr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},xr.prototype.g=function(t,e){return new Ar(t,e)},E(Ar,Nt),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(I(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Er(t,null,t.W),ur(t)},Ar.prototype.close=function(){ir(this.g)},Ar.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,cr(this.g,e)}else this.v?(e={},e.__data__=Lt(t),cr(this.g,e)):cr(this.g,t)},Ar.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Ar.Z.M.call(this)},E(Cr,Ee),E(Dr,Te),E(kr,Sr),kr.prototype.xa=function(){Ot(this.g,"a")},kr.prototype.wa=function(t){Ot(this.g,new Cr(t))},kr.prototype.va=function(t){Ot(this.g,new Dr(t))},kr.prototype.ua=function(){Ot(this.g,"b")},xr.prototype.createWebChannel=xr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,ye.COMPLETE="complete",be.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Nr=l.createWebChannelTransport=function(){return new xr},Or=l.getStatEventTarget=function(){return ue()},Rr=l.ErrorCode=ge,Lr=l.EventType=ye,Mr=l.Event=ae,Fr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=l.FetchXmlHttpFactory=Mn,Vr=l.WebChannel=be,Br=l.XhrIo=qn;const Ur="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let qr="9.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new a.Yd("@firebase/firestore");function Kr(){return $r.logLevel}function Gr(t){$r.setLogLevel(t)}function zr(t,...e){if($r.logLevel<=a["in"].DEBUG){const n=e.map(Qr);$r.debug(`Firestore (${qr}): ${t}`,...n)}}function Hr(t,...e){if($r.logLevel<=a["in"].ERROR){const n=e.map(Qr);$r.error(`Firestore (${qr}): ${t}`,...n)}}function Wr(t,...e){if($r.logLevel<=a["in"].WARN){const n=e.map(Qr);$r.warn(`Firestore (${qr}): ${t}`,...n)}}function Qr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw Hr(e),new Error(e)}function Yr(t,e){t||Jr()}function Xr(t,e){t||Jr()}function Zr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class es extends c.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ss{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(jr.UNAUTHENTICATED)))}shutdown(){}}class is{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class os{constructor(t){this.t=t,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ns,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ns)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Yr("string"==typeof e.accessToken),new rs(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Yr(null===t||"string"==typeof t),new jr(t)}}class as{constructor(t,e,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cs{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new as(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class us{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ls{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Yr("string"==typeof t.token),this.p=t.token,new us(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=hs(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function fs(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}function ms(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new es(ts.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new es(ts.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new es(ts.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new es(ts.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gs.fromMillis(Date.now())}static fromDate(t){return gs.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new gs(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?fs(this.nanoseconds,t.nanoseconds):fs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ys(t)}static min(){return new ys(new gs(0,0))}static max(){return new ys(new gs(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n){void 0===e?e=0:e>t.length&&Jr(),void 0===n?n=t.length-e:n>t.length-e&&Jr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===vs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ws extends vs{construct(t,e,n){return new ws(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new es(ts.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ws(e)}static emptyPath(){return new ws([])}}const bs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Is extends vs{construct(t,e,n){return new Is(t,e,n)}static isValidIdentifier(t){return bs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Is.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Is(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new es(ts.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new es(ts.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new es(ts.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new es(ts.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Is(e)}static emptyPath(){return new Is([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this.path=t}static fromPath(t){return new _s(ws.fromString(t))}static fromName(t){return new _s(ws.fromString(t).popFirst(5))}static empty(){return new _s(ws.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ws.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ws.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _s(new ws(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function Ts(t){return t.fields.find((t=>2===t.kind))}function Ss(t){return t.fields.filter((t=>2!==t.kind))}Es.UNKNOWN_ID=-1;class xs{constructor(t,e){this.fieldPath=t,this.kind=e}}class As{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new As(0,ks.min())}}function Cs(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ys.fromTimestamp(1e9===r?new gs(n+1,0):new gs(n,r));return new ks(s,_s.empty(),e)}function Ds(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ks(ys.min(),_s.empty(),-1)}static max(){return new ks(ys.max(),_s.empty(),-1)}}function Ns(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=_s.comparator(t.documentKey,e.documentKey),0!==n?n:fs(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t){if(t.code!==ts.FAILED_PRECONDITION||t.message!==Os)throw t;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Jr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ms(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ms?e:Ms.resolve(e)}catch(t){return Ms.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ms.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ms.reject(e)}static resolve(t){return new Ms(((e,n)=>{e(t)}))}static reject(t){return new Ms(((e,n)=>{n(t)}))}static waitFor(t){return new Ms(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Ms.resolve(!1);for(const n of t)e=e.next((t=>t?Ms.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ms(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ms(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.T=new ns,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{e.error?this.T.reject(new Bs(t,e.error)):this.T.resolve()},this.transaction.onerror=e=>{const n=Ks(e.target.error);this.T.reject(new Bs(t,n))}}static open(t,e,n,r){try{return new Fs(e,t.transaction(r,n))}catch(t){throw new Bs(e,t)}}get A(){return this.T.promise}abort(t){t&&this.T.reject(t),this.aborted||(zr("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new js(e)}}class Ps{constructor(t,e,n){this.name=t,this.version=e,this.P=n,12.2===Ps.v((0,c.z$)())&&Hr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return zr("SimpleDb","Removing database:",t),qs(window.indexedDB.deleteDatabase(t)).toPromise()}static V(){if(!(0,c.hl)())return!1;if(Ps.S())return!0;const t=(0,c.z$)(),e=Ps.v(t),n=0<e&&e<10,r=Ps.D(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static S(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/"})||void 0===t?void 0:t.C)}static N(t,e){return t.store(e)}static v(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(t){return this.db||(zr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Bs(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new es(ts.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new es(ts.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Bs(t,r))},r.onupgradeneeded=t=>{zr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.P.O(e,r.transaction,t.oldVersion,this.version).next((()=>{zr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.M&&(this.db.onversionchange=t=>this.M(t)),this.db}F(t){this.M=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.k(t);const e=Fs.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).next((t=>(e.R(),t))).catch((t=>(e.abort(t),Ms.reject(t)))).toPromise();return i.catch((()=>{})),await e.A,i}catch(t){const e=t,n="FirebaseError"!==e.name&&i<3;if(zr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Vs{constructor(t){this.$=t,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(t){this.$=t}done(){this.B=!0}q(t){this.L=t}delete(){return qs(this.$.delete())}}class Bs extends es{constructor(t,e){super(ts.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Us(t){return"IndexedDbTransactionError"===t.name}class js{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(zr("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(zr("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),qs(n)}add(t){return zr("SimpleDb","ADD",this.store.name,t,t),qs(this.store.add(t))}get(t){return qs(this.store.get(t)).next((e=>(void 0===e&&(e=null),zr("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return zr("SimpleDb","DELETE",this.store.name,t),qs(this.store.delete(t))}count(){return zr("SimpleDb","COUNT",this.store.name),qs(this.store.count())}K(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new Ms(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Ms(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}W(t,e){zr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const r=this.cursor(n);return this.G(r,((t,e,n)=>n.delete()))}J(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.G(r,e)}Y(t){const e=this.cursor({});return new Ms(((n,r)=>{e.onerror=t=>{const e=Ks(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}G(t,e){const n=[];return new Ms(((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new Vs(s),o=e(s.primaryKey,s.value,i);if(o instanceof Ms){const t=o.catch((t=>(i.done(),Ms.reject(t))));n.push(t)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>Ms.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function qs(t){return new Ms(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Ks(t.target.error);n(e)}}))}let $s=!1;function Ks(t){const e=Ps.v((0,c.z$)());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new es("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $s||($s=!0,setTimeout((()=>{throw t}),0)),t}}return t}class Gs{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(t){zr("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{zr("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(t){Us(t)?zr("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ls(t)}await this.Z(1)}))}}class zs{constructor(t,e){this.localStore=t,this.persistence=e}async tt(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.et(e,t)))}et(t,e){const n=new Set;let r=e,s=!0;return Ms.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((e=>{if(null!==e&&!n.has(e))return zr("IndexBackiller",`Processing collection: ${e}`),this.nt(t,e,r).next((t=>{r-=t,n.add(e)}));s=!1})))).next((()=>e-r))}nt(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((r=>this.localStore.localDocuments.getNextDocuments(t,e,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(t,s).next((()=>this.st(r,n))).next((n=>(zr("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n)))).next((()=>s.size))}))))}st(t,e){let n=t;return e.changes.forEach(((t,e)=>{const r=Ds(e);Ns(r,n)>0&&(n=r)})),new ks(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Js(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hs.ot=-1;class Ys{constructor(t,e){this.comparator=t,this.root=e||Zs.EMPTY}insert(t,e){return new Ys(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Zs.BLACK,null,null))}remove(t){return new Ys(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Zs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xs(this.root,t,this.comparator,!0)}}class Xs{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Zs{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Zs.RED,this.left=null!=r?r:Zs.EMPTY,this.right=null!=s?s:Zs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Zs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Zs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Zs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jr();if(this.right.isRed())throw Jr();const t=this.left.check();if(t!==this.right.check())throw Jr();return t+(this.isRed()?0:1)}}Zs.EMPTY=null,Zs.RED=!0,Zs.BLACK=!1,Zs.EMPTY=new class{constructor(){this.size=0}get key(){throw Jr()}get value(){throw Jr()}get color(){throw Jr()}get left(){throw Jr()}get right(){throw Jr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Zs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t){this.comparator=t,this.data=new Ys(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ei(this.data.getIterator())}getIteratorFrom(t){return new ei(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ti))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ti(this.comparator);return e.data=t,e}}class ei{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ni(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t){this.fields=t,t.sort(Is.comparator)}static empty(){return new ri([])}unionWith(t){let e=new ti(Is.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ri(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ps(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new ii(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ii(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return fs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ii.EMPTY_BYTE_STRING=new ii("");const oi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ai(t){if(Yr(!!t),"string"==typeof t){let e=0;const n=oi.exec(t);if(Yr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ci(t.seconds),nanos:ci(t.nanos)}}function ci(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ui(t){return"string"==typeof t?ii.fromBase64String(t):ii.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function hi(t){const e=t.mapValue.fields.__previous_value__;return li(e)?hi(e):e}function di(t){const e=ai(t.mapValue.fields.__local_write_time__.timestampValue);return new gs(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class pi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof pi&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return null==t}function gi(t){return 0===t&&1/t==-1/0}function yi(t){return"number"==typeof t&&Number.isInteger(t)&&!gi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wi={nullValue:"NULL_VALUE"};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?li(t)?4:Li(t)?9007199254740991:10:Jr()}function Ii(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ai(t.timestampValue),r=ai(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ui(t.bytesValue).isEqual(ui(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ci(t.geoPointValue.latitude)===ci(e.geoPointValue.latitude)&&ci(t.geoPointValue.longitude)===ci(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ci(t.integerValue)===ci(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ci(t.doubleValue),r=ci(e.doubleValue);return n===r?gi(n)===gi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],Ii);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ws(n)!==Ws(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ii(n[s],r[s])))return!1;return!0}(t,e);default:return Jr()}}function _i(t,e){return void 0!==(t.values||[]).find((t=>Ii(t,e)))}function Ei(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return fs(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ci(t.integerValue||t.doubleValue),r=ci(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ti(t.timestampValue,e.timestampValue);case 4:return Ti(di(t),di(e));case 5:return fs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ui(t),r=ui(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=fs(n[s],r[s]);if(0!==t)return t}return fs(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=fs(ci(t.latitude),ci(e.latitude));return 0!==n?n:fs(ci(t.longitude),ci(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ei(n[s],r[s]);if(t)return t}return fs(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===vi.mapValue&&e===vi.mapValue)return 0;if(t===vi.mapValue)return 1;if(e===vi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=fs(r[o],i[o]);if(0!==t)return t;const e=Ei(n[r[o]],s[i[o]]);if(0!==e)return e}return fs(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Jr()}}function Ti(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return fs(t,e);const n=ai(t),r=ai(e),s=fs(n.seconds,r.seconds);return 0!==s?s:fs(n.nanos,r.nanos)}function Si(t){return xi(t)}function xi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ai(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,_s.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=xi(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${xi(t.fields[s])}`;return n+"}"}(t.mapValue):Jr();var e,n}function Ai(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ci(t){return!!t&&"integerValue"in t}function Di(t){return!!t&&"arrayValue"in t}function ki(t){return!!t&&"nullValue"in t}function Ni(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oi(t){return!!t&&"mapValue"in t}function Ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ri(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Li(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function Mi(t){return"nullValue"in t?wi:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ai(pi.empty(),_s.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Jr()}function Fi(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ai(pi.empty(),_s.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?vi:Jr()}function Pi(t,e){const n=Ei(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Vi(t,e){const n=Ei(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.value=t}static empty(){return new Bi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Oi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ri(e)}setAll(t){let e=Is.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Ri(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Oi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ii(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Oi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Qs(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Bi(Ri(this.value))}}function Ui(t){const e=[];return Qs(t.fields,((t,n)=>{const r=new Is([t]);if(Oi(n)){const t=Ui(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new ri(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ji{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new ji(t,0,ys.min(),ys.min(),Bi.empty(),0)}static newFoundDocument(t,e,n){return new ji(t,1,e,ys.min(),n,0)}static newNoDocument(t,e){return new ji(t,2,e,ys.min(),Bi.empty(),0)}static newUnknownDocument(t,e){return new ji(t,3,e,ys.min(),Bi.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ys.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ji&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ji(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function $i(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qi(t,e,n,r,s,i,o)}function Ki(t){const e=Zr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Si(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Si(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Si(t))).join(",")),e.ut=t}return e.ut}function Gi(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Si(e.value)}`;var e})).join(", ")}]`),mi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Si(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Si(t))).join(",")),`Target(${e})`}function zi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!co(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ii(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lo(t.startAt,e.startAt)&&lo(t.endAt,e.endAt)}function Hi(t){return _s.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Wi(t,e){return t.filters.filter((t=>t instanceof Yi&&t.field.isEqual(e)))}function Qi(t,e,n){let r=wi,s=!0;for(const i of Wi(t,e)){let t=wi,e=!0;switch(i.op){case"<":case"<=":t=Mi(i.value);break;case"==":case"in":case">=":t=i.value;break;case">":t=i.value,e=!1;break;case"!=":case"not-in":t=wi}Pi({value:r,inclusive:s},{value:t,inclusive:e})<0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];Pi({value:r,inclusive:s},{value:t,inclusive:n.inclusive})<0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}function Ji(t,e,n){let r=vi,s=!0;for(const i of Wi(t,e)){let t=vi,e=!0;switch(i.op){case">=":case">":t=Fi(i.value),e=!1;break;case"==":case"in":case"<=":t=i.value;break;case"<":t=i.value,e=!1;break;case"!=":case"not-in":t=vi}Vi({value:r,inclusive:s},{value:t,inclusive:e})>0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];Vi({value:r,inclusive:s},{value:t,inclusive:n.inclusive})>0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}class Yi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Xi(t,e,n):"array-contains"===e?new no(t,n):"in"===e?new ro(t,n):"not-in"===e?new so(t,n):"array-contains-any"===e?new io(t,n):new Yi(t,e,n)}static ct(t,e,n){return"in"===e?new Zi(t,n):new to(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Ei(e,this.value)):null!==e&&bi(this.value)===bi(e)&&this.at(Ei(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Jr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Xi extends Yi{constructor(t,e,n){super(t,e,n),this.key=_s.fromName(n.referenceValue)}matches(t){const e=_s.comparator(t.key,this.key);return this.at(e)}}class Zi extends Yi{constructor(t,e){super(t,"in",e),this.keys=eo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class to extends Yi{constructor(t,e){super(t,"not-in",e),this.keys=eo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function eo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>_s.fromName(t.referenceValue)))}class no extends Yi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Di(e)&&_i(e.arrayValue,this.value)}}class ro extends Yi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&_i(this.value.arrayValue,e)}}class so extends Yi{constructor(t,e){super(t,"not-in",e)}matches(t){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!_i(this.value.arrayValue,e)}}class io extends Yi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Di(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>_i(this.value.arrayValue,t)))}}class oo{constructor(t,e){this.position=t,this.inclusive=e}}class ao{constructor(t,e="asc"){this.field=t,this.dir=e}}function co(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function uo(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?_s.comparator(_s.fromName(o.referenceValue),n.key):Ei(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function lo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ii(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fo(t,e,n,r,s,i,o,a){return new ho(t,e,n,r,s,i,o,a)}function po(t){return new ho(t)}function mo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function go(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function yo(t){for(const e of t.filters)if(e.ht())return e.field;return null}function vo(t){return null!==t.collectionGroup}function wo(t){const e=Zr(t);if(null===e.lt){e.lt=[];const t=yo(e),n=go(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ao(t)),e.lt.push(new ao(Is.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ao(Is.keyField(),t))}}}return e.lt}function bo(t){const e=Zr(t);if(!e.ft)if("F"===e.limitType)e.ft=$i(e.path,e.collectionGroup,wo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of wo(e)){const e="desc"===s.dir?"asc":"desc";t.push(new ao(s.field,e))}const n=e.endAt?new oo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new oo(e.startAt.position,e.startAt.inclusive):null;e.ft=$i(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Io(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _o(t,e){return zi(bo(t),bo(e))&&t.limitType===e.limitType}function Eo(t){return`${Ki(bo(t))}|lt:${t.limitType}`}function To(t){return`Query(target=${Gi(bo(t))}; limitType=${t.limitType})`}function So(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):_s.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=uo(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,wo(t),e))&&!(t.endAt&&!function(t,e,n){const r=uo(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,wo(t),e))}(t,e)}function xo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ao(t){return(e,n)=>{let r=!1;for(const s of wo(t)){const t=Co(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Co(t,e,n){const r=t.field.isKeyField()?_s.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ei(r,s):Jr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gi(e)?"-0":e}}function ko(t){return{integerValue:""+t}}function No(t,e){return yi(e)?ko(e):Do(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this._=void 0}}function Ro(t,e,n){return t instanceof Fo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Po?Vo(t,e):t instanceof Bo?Uo(t,e):function(t,e){const n=Mo(t,e),r=qo(n)+qo(t._t);return Ci(n)&&Ci(t._t)?ko(r):Do(t.wt,r)}(t,e)}function Lo(t,e,n){return t instanceof Po?Vo(t,e):t instanceof Bo?Uo(t,e):n}function Mo(t,e){return t instanceof jo?Ci(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Fo extends Oo{}class Po extends Oo{constructor(t){super(),this.elements=t}}function Vo(t,e){const n=$o(e);for(const r of t.elements)n.some((t=>Ii(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Bo extends Oo{constructor(t){super(),this.elements=t}}function Uo(t,e){let n=$o(e);for(const r of t.elements)n=n.filter((t=>!Ii(t,r)));return{arrayValue:{values:n}}}class jo extends Oo{constructor(t,e){super(),this.wt=t,this._t=e}}function qo(t){return ci(t.integerValue||t.doubleValue)}function $o(t){return Di(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.field=t,this.transform=e}}function Go(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Po&&e instanceof Po||t instanceof Bo&&e instanceof Bo?ps(t.elements,e.elements,Ii):t instanceof jo&&e instanceof jo?Ii(t._t,e._t):t instanceof Fo&&e instanceof Fo}(t.transform,e.transform)}class zo{constructor(t,e){this.version=t,this.transformResults=e}}class Ho{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ho}static exists(t){return new Ho(void 0,t)}static updateTime(t){return new Ho(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Qo{}function Jo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new oa(t.key,Ho.none()):new ea(t.key,t.data,Ho.none());{const n=t.data,r=Bi.empty();let s=new ti(Is.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new na(t.key,r,new ri(s.toArray()),Ho.none())}}function Yo(t,e,n){t instanceof ea?function(t,e,n){const r=t.value.clone(),s=sa(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof na?function(t,e,n){if(!Wo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=sa(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ra(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof ea?function(t,e,n,r){if(!Wo(t.precondition,e))return n;const s=t.value.clone(),i=ia(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof na?function(t,e,n,r){if(!Wo(t.precondition,e))return n;const s=ia(t.fieldTransforms,r,e),i=e.data;return i.setAll(ra(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Wo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Zo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Mo(r.transform,t||null);null!=s&&(null===n&&(n=Bi.empty()),n.set(r.field,s))}return n||null}function ta(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ps(t,e,((t,e)=>Go(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Qo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class na extends Qo{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ra(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function sa(t,e,n){const r=new Map;Yr(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Lo(o,a,n[s]))}return r}function ia(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Ro(t,i,e))}return r}class oa extends Qo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aa extends Qo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua,la;function ha(t){switch(t){default:return Jr();case ts.CANCELLED:case ts.UNKNOWN:case ts.DEADLINE_EXCEEDED:case ts.RESOURCE_EXHAUSTED:case ts.INTERNAL:case ts.UNAVAILABLE:case ts.UNAUTHENTICATED:return!1;case ts.INVALID_ARGUMENT:case ts.NOT_FOUND:case ts.ALREADY_EXISTS:case ts.PERMISSION_DENIED:case ts.FAILED_PRECONDITION:case ts.ABORTED:case ts.OUT_OF_RANGE:case ts.UNIMPLEMENTED:case ts.DATA_LOSS:return!0}}function da(t){if(void 0===t)return Hr("GRPC error has no .code"),ts.UNKNOWN;switch(t){case ua.OK:return ts.OK;case ua.CANCELLED:return ts.CANCELLED;case ua.UNKNOWN:return ts.UNKNOWN;case ua.DEADLINE_EXCEEDED:return ts.DEADLINE_EXCEEDED;case ua.RESOURCE_EXHAUSTED:return ts.RESOURCE_EXHAUSTED;case ua.INTERNAL:return ts.INTERNAL;case ua.UNAVAILABLE:return ts.UNAVAILABLE;case ua.UNAUTHENTICATED:return ts.UNAUTHENTICATED;case ua.INVALID_ARGUMENT:return ts.INVALID_ARGUMENT;case ua.NOT_FOUND:return ts.NOT_FOUND;case ua.ALREADY_EXISTS:return ts.ALREADY_EXISTS;case ua.PERMISSION_DENIED:return ts.PERMISSION_DENIED;case ua.FAILED_PRECONDITION:return ts.FAILED_PRECONDITION;case ua.ABORTED:return ts.ABORTED;case ua.OUT_OF_RANGE:return ts.OUT_OF_RANGE;case ua.UNIMPLEMENTED:return ts.UNIMPLEMENTED;case ua.DATA_LOSS:return ts.DATA_LOSS;default:return Jr()}}(la=ua||(ua={}))[la.OK=0]="OK",la[la.CANCELLED=1]="CANCELLED",la[la.UNKNOWN=2]="UNKNOWN",la[la.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",la[la.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",la[la.NOT_FOUND=5]="NOT_FOUND",la[la.ALREADY_EXISTS=6]="ALREADY_EXISTS",la[la.PERMISSION_DENIED=7]="PERMISSION_DENIED",la[la.UNAUTHENTICATED=16]="UNAUTHENTICATED",la[la.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",la[la.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",la[la.ABORTED=10]="ABORTED",la[la.OUT_OF_RANGE=11]="OUT_OF_RANGE",la[la.UNIMPLEMENTED=12]="UNIMPLEMENTED",la[la.INTERNAL=13]="INTERNAL",la[la.UNAVAILABLE=14]="UNAVAILABLE",la[la.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Qs(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Js(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Ys(_s.comparator);function ma(){return pa}const ga=new Ys(_s.comparator);function ya(...t){let e=ga;for(const n of t)e=e.insert(n.key,n);return e}function va(t){let e=ga;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function wa(){return Ia()}function ba(){return Ia()}function Ia(){return new fa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const _a=new Ys(_s.comparator),Ea=new ti(_s.comparator);function Ta(...t){let e=Ea;for(const n of t)e=e.add(n);return e}const Sa=new ti(fs);function xa(){return Sa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ca.createSynthesizedTargetChangeForCurrentChange(t,e)),new Aa(ys.min(),n,xa(),ma(),Ta())}}class Ca{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ca(ii.EMPTY_BYTE_STRING,e,Ta(),Ta(),Ta())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class ka{constructor(t,e){this.targetId=t,this.It=e}}class Na{constructor(t,e,n=ii.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Oa{constructor(){this.Tt=0,this.Et=Ma(),this.At=ii.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Ta(),e=Ta(),n=Ta();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Jr()}})),new Ca(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Ma()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Ra{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=ma(),this.Bt=La(),this.Lt=new ti(fs)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Jr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Hi(t))if(0===n){const n=new _s(t.path);this.Kt(e,n,ji.newNoDocument(n,ys.min()))}else Yr(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Hi(s.target)){const e=new _s(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,ji.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Ta();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Aa(t,e,this.Lt,this.$t,n);return this.$t=ma(),this.Bt=La(),this.Lt=new ti(fs),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Oa,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new ti(fs),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||zr("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Oa),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function La(){return new Ys(_s.comparator)}function Ma(){return new Ys(_s.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Pa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Va{constructor(t,e){this.databaseId=t,this.dt=e}}function Ba(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ua(t,e){return t.dt?e.toBase64():e.toUint8Array()}function ja(t,e){return Ba(t,e.toTimestamp())}function qa(t){return Yr(!!t),ys.fromTimestamp(function(t){const e=ai(t);return new gs(e.seconds,e.nanos)}(t))}function $a(t,e){return function(t){return new ws(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ka(t){const e=ws.fromString(t);return Yr(gc(e)),e}function Ga(t,e){return $a(t.databaseId,e.path)}function za(t,e){const n=Ka(e);if(n.get(1)!==t.databaseId.projectId)throw new es(ts.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new es(ts.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _s(Ja(n))}function Ha(t,e){return $a(t.databaseId,e)}function Wa(t){const e=Ka(t);return 4===e.length?ws.emptyPath():Ja(e)}function Qa(t){return new ws(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ja(t){return Yr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ya(t,e,n){return{name:Ga(t,e),fields:n.value.mapValue.fields}}function Xa(t,e,n){const r=za(t,e.name),s=qa(e.updateTime),i=new Bi({mapValue:{fields:e.fields}}),o=ji.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Za(t,e){return"found"in e?function(t,e){Yr(!!e.found),e.found.name,e.found.updateTime;const n=za(t,e.found.name),r=qa(e.found.updateTime),s=new Bi({mapValue:{fields:e.found.fields}});return ji.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){Yr(!!e.missing),Yr(!!e.readTime);const n=za(t,e.missing),r=qa(e.readTime);return ji.newNoDocument(n,r)}(t,e):Jr()}function tc(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Jr()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Yr(void 0===e||"string"==typeof e),ii.fromBase64String(e||"")):(Yr(void 0===e||e instanceof Uint8Array),ii.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?ts.UNKNOWN:da(t.code);return new es(e,t.message||"")}(o);n=new Na(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=za(t,r.document.name),i=qa(r.document.updateTime),o=new Bi({mapValue:{fields:r.document.fields}}),a=ji.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Da(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=za(t,r.document),i=r.readTime?qa(r.readTime):ys.min(),o=ji.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=za(t,r.document),i=r.removedTargetIds||[];n=new Da([],i,s,null)}else{if(!("filter"in e))return Jr();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new ca(r),i=t.targetId;n=new ka(i,s)}}return n}function ec(t,e){let n;if(e instanceof ea)n={update:Ya(t,e.key,e.value)};else if(e instanceof oa)n={delete:Ga(t,e.key)};else if(e instanceof na)n={update:Ya(t,e.key,e.data),updateMask:mc(e.fieldMask)};else{if(!(e instanceof aa))return Jr();n={verify:Ga(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Fo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Po)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Bo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jo)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Jr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ja(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Jr()}(t,e.precondition)),n}function nc(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ho.updateTime(qa(t.updateTime)):void 0!==t.exists?Ho.exists(t.exists):Ho.none()}(e.currentDocument):Ho.none(),r=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Yr("REQUEST_TIME"===e.setToServerValue),n=new Fo;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new Po(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new Bo(t)}else"increment"in e?n=new jo(t,e.increment):Jr();const r=Is.fromServerFormat(e.fieldPath);return new Ko(r,n)}(t,e))):[];if(e.update){e.update.name;const s=za(t,e.update.name),i=new Bi({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new ri(e.map((t=>Is.fromServerFormat(t))))}(e.updateMask);return new na(s,i,t,n,r)}return new ea(s,i,n,r)}if(e.delete){const r=za(t,e.delete);return new oa(r,n)}if(e.verify){const r=za(t,e.verify);return new aa(r,n)}return Jr()}function rc(t,e){return t&&t.length>0?(Yr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?qa(t.updateTime):qa(e);return n.isEqual(ys.min())&&(n=qa(e)),new zo(n,t.transformResults||[])}(t,e)))):[]}function sc(t,e){return{documents:[Ha(t,e.path)]}}function ic(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ha(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ha(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Ni(t.value))return{unaryFilter:{field:hc(t.field),op:"IS_NAN"}};if(ki(t.value))return{unaryFilter:{field:hc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ni(t.value))return{unaryFilter:{field:hc(t.field),op:"IS_NOT_NAN"}};if(ki(t.value))return{unaryFilter:{field:hc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hc(t.field),op:lc(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:hc(t.field),direction:uc(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||mi(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function oc(t){let e=Wa(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Yr(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=cc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new ao(dc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,mi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new oo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new oo(n,e)}(n.endAt)),fo(e,s,o,i,a,"F",c,u)}function ac(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Jr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function cc(t){return t?void 0!==t.unaryFilter?[pc(t)]:void 0!==t.fieldFilter?[fc(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>cc(t))).reduce(((t,e)=>t.concat(e))):Jr():[]}function uc(t){return Fa[t]}function lc(t){return Pa[t]}function hc(t){return{fieldPath:t.canonicalString()}}function dc(t){return Is.fromServerFormat(t.fieldPath)}function fc(t){return Yi.create(dc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Jr()}}(t.fieldFilter.op),t.fieldFilter.value)}function pc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=dc(t.unaryFilter.field);return Yi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=dc(t.unaryFilter.field);return Yi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=dc(t.unaryFilter.field);return Yi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=dc(t.unaryFilter.field);return Yi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Jr()}}function mc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wc(e)),e=vc(t.get(n),e);return wc(e)}function vc(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function wc(t){return t+""}function bc(t){const e=t.length;if(Yr(e>=2),2===e)return Yr(""===t.charAt(0)&&""===t.charAt(1)),ws.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&Jr(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:Jr()}i=e+2}return new ws(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){return[t,yc(e)]}function Ec(t,e,n){return[t,yc(e),n]}const Tc={},Sc=["prefixPath","collectionGroup","readTime","documentId"],xc=["prefixPath","collectionGroup","documentId"],Ac=["collectionGroup","readTime","prefixPath","documentId"],Cc=["canonicalId","targetId"],Dc=["targetId","path"],kc=["path","targetId"],Nc=["collectionId","parent"],Oc=["indexId","uid"],Rc=["uid","sequenceNumber"],Lc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Mc=["indexId","uid","orderedDocumentKey"],Fc=["userId","collectionPath","documentId"],Pc=["userId","collectionPath","largestBatchId"],Vc=["userId","collectionGroup","largestBatchId"],Bc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Uc=[...Bc,"documentOverlays"],jc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qc=jc,$c=[...qc,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Rs{constructor(t,e){super(),this.ee=t,this.currentSequenceNumber=e}}function Gc(t,e){const n=Zr(t);return Ps.N(n.ee,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Yo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ba();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Jo(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ys.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ta())}isEqual(t){return this.batchId===t.batchId&&ps(this.mutations,t.mutations,((t,e)=>ta(t,e)))&&ps(this.baseMutations,t.baseMutations,((t,e)=>ta(t,e)))}}class Hc{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Yr(t.mutations.length===n.length);let r=_a;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Hc(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e,n,r,s=ys.min(),i=ys.min(),o=ii.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Qc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.ne=t}}function Yc(t,e){let n;if(e.document)n=Xa(t.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=_s.fromSegments(e.noDocument.path),r=eu(e.noDocument.readTime);n=ji.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Jr();{const t=_s.fromSegments(e.unknownDocument.path),r=eu(e.unknownDocument.version);n=ji.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new gs(t[0],t[1]);return ys.fromTimestamp(e)}(e.readTime)),n}function Xc(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(t,e){return{name:Ga(t,e.key),fields:e.data.value.mapValue.fields,updateTime:Ba(t,e.version.toTimestamp())}}(t.ne,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:tu(e.version)};else{if(!e.isUnknownDocument())return Jr();r.unknownDocument={path:n.path.toArray(),version:tu(e.version)}}return r}function Zc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function tu(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function eu(t){const e=new gs(t.seconds,t.nanoseconds);return ys.fromTimestamp(e)}function nu(t,e){const n=(e.baseMutations||[]).map((e=>nc(t.ne,e)));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((e=>nc(t.ne,e))),s=gs.fromMillis(e.localWriteTimeMs);return new zc(e.batchId,s,n,r)}function ru(t){const e=eu(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?eu(t.lastLimboFreeSnapshotVersion):ys.min();let r;var s;return void 0!==t.query.documents?(Yr(1===(s=t.query).documents.length),r=bo(po(Wa(s.documents[0])))):r=function(t){return bo(oc(t))}(t.query),new Qc(r,t.targetId,0,t.lastListenSequenceNumber,e,n,ii.fromBase64String(t.resumeToken))}function su(t,e){const n=tu(e.snapshotVersion),r=tu(e.lastLimboFreeSnapshotVersion);let s;s=Hi(e.target)?sc(t.ne,e.target):ic(t.ne,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ki(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function iu(t){const e=oc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Io(e,e.limit,"L"):e}function ou(t,e){return new Wc(e.largestBatchId,nc(t.ne,e.overlayMutation))}function au(t,e){const n=e.path.lastSegment();return[t,yc(e.path.popLast()),n]}function cu(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:tu(r.readTime),documentKey:yc(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{getBundleMetadata(t,e){return lu(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:eu(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return lu(t).put({bundleId:(n=e).id,createTime:tu(qa(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return hu(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:iu(e.bundledQuery),readTime:eu(e.readTime)};var e}))}saveNamedQuery(t,e){return hu(t).put(function(t){return{name:t.name,readTime:tu(qa(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function lu(t){return Gc(t,"bundles")}function hu(t){return Gc(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t,e){this.wt=t,this.userId=e}static se(t,e){const n=e.uid||"";return new du(t,n)}getOverlay(t,e){return fu(t).get(au(this.userId,e)).next((t=>t?ou(this.wt,t):null))}getOverlays(t,e){const n=wa();return Ms.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){const r=[];return n.forEach(((n,s)=>{const i=new Wc(e,s);r.push(this.ie(t,i))})),Ms.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach((t=>r.add(yc(t.getCollectionPath()))));const s=[];return r.forEach((e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);s.push(fu(t).W("collectionPathOverlayIndex",r))})),Ms.waitFor(s)}getOverlaysForCollection(t,e,n){const r=wa(),s=yc(e),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return fu(t).K("collectionPathOverlayIndex",i).next((t=>{for(const e of t){const t=ou(this.wt,e);r.set(t.getKey(),t)}return r}))}getOverlaysForCollectionGroup(t,e,n,r){const s=wa();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return fu(t).J({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=ou(this.wt,e);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(t,e){return fu(t).put(function(t,e,n){const[r,s,i]=au(e,n.mutation.key);return{userId:e,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:ec(t.ne,n.mutation)}}(this.wt,this.userId,e))}}function fu(t){return Gc(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(ci(t.integerValue));else if("doubleValue"in t){const n=ci(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),gi(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(ui(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Li(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Jr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),_s.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}function mu(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function gu(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=mu(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}pu.ye=new pu;class yu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ie(n.value),n=e.next();this.Te()}Ee(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ae(n.value),n=e.next();this.Re()}be(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ie(t);else if(t<2048)this.Ie(960|t>>>6),this.Ie(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ie(480|t>>>12),this.Ie(128|63&t>>>6),this.Ie(128|63&t);else{const t=e.codePointAt(0);this.Ie(240|t>>>18),this.Ie(128|63&t>>>12),this.Ie(128|63&t>>>6),this.Ie(128|63&t)}}this.Te()}Pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ae(t);else if(t<2048)this.Ae(960|t>>>6),this.Ae(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ae(480|t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t);else{const t=e.codePointAt(0);this.Ae(240|t>>>18),this.Ae(128|63&t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t)}}this.Re()}ve(t){const e=this.Ve(t),n=gu(e);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=255&e[r]}De(t){const e=this.Ve(t),n=gu(e);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(t){this.Se(t.length),this.buffer.set(t,this.position),this.position+=t.length}Oe(){return this.buffer.slice(0,this.position)}Ve(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let r=1;r<e.length;++r)e[r]^=n?255:0;return e}Ie(t){const e=255&t;0===e?(this.xe(0),this.xe(255)):255===e?(this.xe(255),this.xe(0)):this.xe(e)}Ae(t){const e=255&t;0===e?(this.ke(0),this.ke(255)):255===e?(this.ke(255),this.ke(0)):this.ke(t)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(t){this.Se(1),this.buffer[this.position++]=t}ke(t){this.Se(1),this.buffer[this.position++]=~t}Se(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class vu{constructor(t){this.Me=t}de(t){this.Me.pe(t)}he(t){this.Me.be(t)}ae(t){this.Me.ve(t)}ue(){this.Me.Ce()}}class wu{constructor(t){this.Me=t}de(t){this.Me.Ee(t)}he(t){this.Me.Pe(t)}ae(t){this.Me.De(t)}ue(){this.Me.Ne()}}class bu{constructor(){this.Me=new yu,this.Fe=new vu(this.Me),this.$e=new wu(this.Me)}seed(t){this.Me.seed(t)}Be(t){return 0===t?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}Le(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Iu(this.indexId,this.documentKey,this.arrayValue,n)}}function _u(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=Eu(t.arrayValue,e.arrayValue),0!==n?n:(n=Eu(t.directionalValue,e.directionalValue),0!==n?n:_s.comparator(t.documentKey,e.documentKey)))}function Eu(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Ue=t.orderBy,this.qe=[];for(const e of t.filters){const t=e;t.ht()?this.Ke=t:this.qe.push(t)}}Ge(t){const e=Ts(t);if(void 0!==e&&!this.Qe(e))return!1;const n=Ss(t);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const t=n[r];if(!this.je(this.Ke,t)||!this.We(this.Ue[s++],t))return!1;++r}for(;r<n.length;++r){const t=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],t))return!1}return!0}Qe(t){for(const e of this.qe)if(this.je(e,t))return!0;return!1}je(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}We(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.ze=new xu}addToCollectionParentIndex(t,e){return this.ze.add(e),Ms.resolve()}getCollectionParents(t,e){return Ms.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Ms.resolve()}deleteFieldIndex(t,e){return Ms.resolve()}getDocumentsMatchingTarget(t,e){return Ms.resolve(null)}getIndexType(t,e){return Ms.resolve(0)}getFieldIndexes(t,e){return Ms.resolve([])}getNextCollectionGroupToUpdate(t){return Ms.resolve(null)}getMinOffset(t,e){return Ms.resolve(ks.min())}getMinOffsetFromCollectionGroup(t,e){return Ms.resolve(ks.min())}updateCollectionGroup(t,e,n){return Ms.resolve()}updateIndexEntries(t,e){return Ms.resolve()}}class xu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new ti(ws.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new ti(ws.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Uint8Array(0);class Cu{constructor(t,e){this.user=t,this.databaseId=e,this.He=new xu,this.Je=new fa((t=>Ki(t)),((t,e)=>zi(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.He.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener((()=>{this.He.add(e)}));const s={collectionId:n,parent:yc(r)};return Du(t).put(s)}return Ms.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[ms(e),""],!1,!0);return Du(t).K(r).next((t=>{for(const r of t){if(r.collectionId!==e)break;n.push(bc(r.parent))}return n}))}addFieldIndex(t,e){const n=Nu(t),r=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);delete r.indexId;const s=n.add(r);if(e.indexState){const n=Ou(t);return s.next((t=>{n.put(cu(t,this.user,e.indexState.sequenceNumber,e.indexState.offset))}))}return s.next()}deleteFieldIndex(t,e){const n=Nu(t),r=Ou(t),s=ku(t);return n.delete(e.indexId).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=ku(t);let r=!0;const s=new Map;return Ms.forEach(this.Ye(e),(e=>this.Xe(t,e).next((t=>{r&&(r=!!t),s.set(e,t)})))).next((()=>{if(r){let t=Ta();const r=[];return Ms.forEach(s,((s,i)=>{var o;zr("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${Ki(e)}`);const a=function(t,e){const n=Ts(e);if(void 0===n)return null;for(const r of Wi(t,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(t,e){const n=new Map;for(const r of Ss(e))for(const e of Wi(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,s),u=function(t,e){const n=[];let r=!0;for(const s of Ss(e)){const e=0===s.kind?Qi(t,s.fieldPath,t.startAt):Ji(t,s.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new oo(n,r)}(i,s),l=function(t,e){const n=[];let r=!0;for(const s of Ss(e)){const e=0===s.kind?Ji(t,s.fieldPath,t.endAt):Qi(t,s.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new oo(n,r)}(i,s),h=this.Ze(s,i,u),d=this.Ze(s,i,l),f=this.tn(s,i,c),p=this.en(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ms.forEach(p,(s=>n.j(s,e.limit).next((e=>{e.forEach((e=>{const n=_s.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))}))}))))})).next((()=>r))}return Ms.resolve(null)}))}Ye(t){let e=this.Je.get(t);return e||(e=[t],this.Je.set(t,e),e)}en(t,e,n,r,s,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,s.length),c=a/(null!=e?e.length:1),u=[];for(let l=0;l<a;++l){const a=e?this.nn(e[l/c]):Au,h=this.sn(t,a,n[l%c],r),d=this.rn(t,a,s[l%c],i),f=o.map((e=>this.sn(t,a,e,!0)));u.push(...this.createRange(h,d,f))}return u}sn(t,e,n,r){const s=new Iu(t,_s.empty(),e,n);return r?s:s.Le()}rn(t,e,n,r){const s=new Iu(t,_s.empty(),e,n);return r?s.Le():s}Xe(t,e){const n=new Tu(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next((t=>{let e=null;for(const r of t)n.Ge(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e}))}getIndexType(t,e){let n=2;return Ms.forEach(this.Ye(e),(e=>this.Xe(t,e).next((t=>{t?0!==n&&t.fields.length<function(t){let e=new ti(Is.comparator),n=!1;for(const r of t.filters){const t=r;t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field))}for(const r of t.orderBy)r.field.isKeyField()||(e=e.add(r.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})))).next((()=>n))}on(t,e){const n=new bu;for(const r of Ss(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const s=n.Be(r.kind);pu.ye.re(t,s)}return n.Oe()}nn(t){const e=new bu;return pu.ye.re(t,e.Be(0)),e.Oe()}un(t,e){const n=new bu;return pu.ye.re(Ai(this.databaseId,e),n.Be(function(t){const e=Ss(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Oe()}tn(t,e,n){if(null===n)return[];let r=[];r.push(new bu);let s=0;for(const i of Ss(t)){const t=n[s++];for(const n of r)if(this.cn(e,i.fieldPath)&&Di(t))r=this.an(r,i,t);else{const e=n.Be(i.kind);pu.ye.re(t,e)}}return this.hn(r)}Ze(t,e,n){return this.tn(t,e,n.position)}hn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Oe();return e}an(t,e,n){const r=[...t],s=[];for(const i of n.arrayValue.values||[])for(const t of r){const n=new bu;n.seed(t.Oe()),pu.ye.re(i,n.Be(e.kind)),s.push(n)}return s}cn(t,e){return!!t.filters.find((t=>t instanceof Yi&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=Nu(t),r=Ou(t);return(e?n.K("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.K()).next((t=>{const e=[];return Ms.forEach(t,(t=>r.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new As(e.sequenceNumber,new ks(eu(e.readTime),new _s(bc(e.documentKey)),e.largestBatchId)):As.empty(),r=t.fields.map((([t,e])=>new xs(Is.fromServerFormat(t),e)));return new Es(t.indexId,t.collectionGroup,r,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:fs(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const r=Nu(t),s=Ou(t);return this.ln(t).next((t=>r.K("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>Ms.forEach(e,(e=>s.put(cu(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return Ms.forEach(e,((e,r)=>{const s=n.get(e.collectionGroup);return(s?Ms.resolve(s):this.getFieldIndexes(t,e.collectionGroup)).next((s=>(n.set(e.collectionGroup,s),Ms.forEach(s,(n=>this.fn(t,e,n).next((e=>{const s=this.dn(r,n);return e.isEqual(s)?Ms.resolve():this._n(t,r,n,e,s)})))))))}))}wn(t,e,n,r){return ku(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,e.key),documentKey:e.key.path.toArray()})}mn(t,e,n,r){return ku(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,e.key),e.key.path.toArray()])}fn(t,e,n){const r=ku(t);let s=new ti(_u);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,e)])},((t,r)=>{s=s.add(new Iu(n.indexId,e,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(t,e){let n=new ti(_u);const r=this.on(e,t);if(null==r)return n;const s=Ts(e);if(null!=s){const i=t.data.field(s.fieldPath);if(Di(i))for(const s of i.arrayValue.values||[])n=n.add(new Iu(e.indexId,t.key,this.nn(s),r))}else n=n.add(new Iu(e.indexId,t.key,Au,r));return n}_n(t,e,n,r,s){zr("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,r,s){const i=t.getIterator(),o=e.getIterator();let a=ni(i),c=ni(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const r=n(a,c);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(c),c=ni(o)):e?(s(a),a=ni(i)):(a=ni(i),c=ni(o))}}(r,s,_u,(r=>{i.push(this.wn(t,e,n,r))}),(r=>{i.push(this.mn(t,e,n,r))})),Ms.waitFor(i)}ln(t){let e=1;return Ou(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,r)=>{r.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>_u(t,e))).filter(((t,e,n)=>!e||0!==_u(t,n[e-1])));const r=[];r.push(t);for(const i of n){const n=_u(i,t),s=_u(i,e);if(0===n)r[0]=t.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(e);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,Au,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,Au,[]]));return s}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Ru)}getMinOffset(t,e){return Ms.mapArray(this.Ye(e),(e=>this.Xe(t,e).next((t=>t||Jr())))).next(Ru)}}function Du(t){return Gc(t,"collectionParents")}function ku(t){return Gc(t,"indexEntries")}function Nu(t){return Gc(t,"indexConfiguration")}function Ou(t){return Gc(t,"indexState")}function Ru(t){Yr(0!==t.length);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Ns(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new ks(e.readTime,e.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mu{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Mu(t,Mu.DEFAULT_COLLECTION_PERCENTILE,Mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((t,e,n)=>(a++,n.delete())));i.push(c.next((()=>{Yr(1===a)})));const u=[];for(const l of n.mutations){const t=Ec(e,l.key.path,n.batchId);i.push(s.delete(t)),u.push(l.key)}return Ms.waitFor(i).next((()=>u))}function Pu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Jr();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mu.DEFAULT_COLLECTION_PERCENTILE=10,Mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mu.DEFAULT=new Mu(41943040,Mu.DEFAULT_COLLECTION_PERCENTILE,Mu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mu.DISABLED=new Mu(-1,0,0);class Vu{constructor(t,e,n,r){this.userId=t,this.wt=e,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(t,e,n,r){Yr(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new Vu(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Uu(t).J({index:"userMutationsIndex",range:n},((t,n,r)=>{e=!1,r.done()})).next((()=>e))}addMutationBatch(t,e,n,r){const s=ju(t),i=Uu(t);return i.add({}).next((o=>{Yr("number"==typeof o);const a=new zc(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map((e=>ec(t.ne,e))),s=n.mutations.map((e=>ec(t.ne,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let l=new ti(((t,e)=>fs(t.canonicalString(),e.canonicalString())));for(const t of r){const e=Ec(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(i.put(c)),u.push(s.put(e,Tc))}return l.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Ms.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return Uu(t).get(e).next((t=>t?(Yr(t.userId===this.userId),nu(this.wt,t)):null))}yn(t,e){return this.gn[e]?Ms.resolve(this.gn[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.gn[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Uu(t).J({index:"userMutationsIndex",range:r},((t,e,r)=>{e.userId===this.userId&&(Yr(e.batchId>=n),s=nu(this.wt,e)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Uu(t).J({index:"userMutationsIndex",range:e,reverse:!0},((t,e,r)=>{n=e.batchId,r.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Uu(t).K("userMutationsIndex",e).next((t=>t.map((t=>nu(this.wt,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=_c(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return ju(t).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=bc(a);if(o===this.userId&&e.path.isEqual(u))return Uu(t).get(c).next((t=>{if(!t)throw Jr();Yr(t.userId===this.userId),s.push(nu(this.wt,t))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ti(fs);const r=[];return e.forEach((e=>{const s=_c(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=ju(t).J({range:i},((t,r,s)=>{const[i,o,a]=t,c=bc(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),Ms.waitFor(r).next((()=>this.pn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=_c(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new ti(fs);return ju(t).J({range:i},((t,e,s)=>{const[i,a,c]=t,u=bc(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(t,o)))}pn(t,e){const n=[],r=[];return e.forEach((e=>{r.push(Uu(t).get(e).next((t=>{if(null===t)throw Jr();Yr(t.userId===this.userId),n.push(nu(this.wt,t))})))})),Ms.waitFor(r).next((()=>n))}removeMutationBatch(t,e){return Fu(t.ee,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.In(e.batchId)})),Ms.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}In(t){delete this.gn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return Ms.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return ju(t).J({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=bc(t[1]);r.push(e)}else n.done()})).next((()=>{Yr(0===r.length)}))}))}containsKey(t,e){return Bu(t,this.userId,e)}Tn(t){return qu(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Bu(t,e,n){const r=_c(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return ju(t).J({range:i,H:!0},((t,n,r)=>{const[i,a,c]=t;i===e&&a===s&&(o=!0),r.done()})).next((()=>o))}function Uu(t){return Gc(t,"mutations")}function ju(t){return Gc(t,"documentMutations")}function qu(t){return Gc(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new $u(0)}static Rn(){return new $u(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.referenceDelegate=t,this.wt=e}allocateTargetId(t){return this.bn(t).next((e=>{const n=new $u(e.highestTargetId);return e.highestTargetId=n.next(),this.Pn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.bn(t).next((t=>ys.fromTimestamp(new gs(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.bn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.bn(t).next((r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.Pn(t,r))))}addTargetData(t,e){return this.vn(t,e).next((()=>this.bn(t).next((n=>(n.targetCount+=1,this.Vn(e,n),this.Pn(t,n))))))}updateTargetData(t,e){return this.vn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Gu(t).delete(e.targetId))).next((()=>this.bn(t))).next((e=>(Yr(e.targetCount>0),e.targetCount-=1,this.Pn(t,e))))}removeTargets(t,e,n){let r=0;const s=[];return Gu(t).J(((i,o)=>{const a=ru(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))})).next((()=>Ms.waitFor(s))).next((()=>r))}forEachTarget(t,e){return Gu(t).J(((t,n)=>{const r=ru(n);e(r)}))}bn(t){return zu(t).get("targetGlobalKey").next((t=>(Yr(null!==t),t)))}Pn(t,e){return zu(t).put("targetGlobalKey",e)}vn(t,e){return Gu(t).put(su(this.wt,e))}Vn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.bn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=Ki(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Gu(t).J({range:r,index:"queryTargetsIndex"},((t,n,r)=>{const i=ru(n);zi(e,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(t,e,n){const r=[],s=Hu(t);return e.forEach((e=>{const i=yc(e.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(t,n,e))})),Ms.waitFor(r)}removeMatchingKeys(t,e,n){const r=Hu(t);return Ms.forEach(e,(e=>{const s=yc(e.path);return Ms.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=Hu(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=Hu(t);let s=Ta();return r.J({range:n,H:!0},((t,e,n)=>{const r=bc(t[1]),i=new _s(r);s=s.add(i)})).next((()=>s))}containsKey(t,e){const n=yc(e.path),r=IDBKeyRange.bound([n],[ms(n)],!1,!0);let s=0;return Hu(t).J({index:"documentTargetsIndex",H:!0,range:r},(([t,e],n,r)=>{0!==t&&(s++,r.done())})).next((()=>s>0))}te(t,e){return Gu(t).get(e).next((t=>t?ru(t):null))}}function Gu(t){return Gc(t,"targets")}function zu(t){return Gc(t,"targetGlobal")}function Hu(t){return Gc(t,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu([t,e],[n,r]){const s=fs(t,n);return 0===s?fs(e,r):s}class Qu{constructor(t){this.Sn=t,this.buffer=new ti(Wu),this.Dn=0}Cn(){return++this.Dn}xn(t){const e=[t,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Wu(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ju{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(t){zr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Us(t)?zr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ls(t)}await this.kn(3e5)}))}}class Yu{constructor(t,e){this.On=t,this.params=e}calculateTargetCount(t,e){return this.On.Mn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Ms.resolve(Hs.ot);const n=new Qu(e);return this.On.forEachTarget(t,(t=>n.xn(t.sequenceNumber))).next((()=>this.On.Fn(t,(t=>n.xn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.On.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.On.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector","Garbage collection skipped; disabled"),Ms.resolve(Lu)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(zr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lu):this.$n(t,e)))}getCacheSize(t){return this.On.getCacheSize(t)}$n(t,e){let n,r,s,i,o,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(zr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(u=Date.now(),Kr()<=a["in"].DEBUG&&zr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-l}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(c-o)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ms.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Yu(t,e)}(this,e)}Mn(t){const e=this.Bn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}Bn(t){let e=0;return this.Fn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Fn(t,e){return this.Ln(t,((t,n)=>e(n)))}addReference(t,e,n){return Zu(t,n)}removeReference(t,e,n){return Zu(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Zu(t,e)}Un(t,e){return function(t,e){let n=!1;return qu(t).Y((r=>Bu(t,r,e).next((t=>(t&&(n=!0),Ms.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(t,((i,o)=>{if(o<=e){const e=this.Un(t,i).next((e=>{if(!e)return s++,n.getEntry(t,i).next((()=>(n.removeEntry(i,ys.min()),Hu(t).delete([0,yc(i.path)]))))}));r.push(e)}})).next((()=>Ms.waitFor(r))).next((()=>n.apply(t))).next((()=>s))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Zu(t,e)}Ln(t,e){const n=Hu(t);let r,s=Hs.ot;return n.J({index:"documentTargetsIndex"},(([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==Hs.ot&&e(new _s(bc(r)),s),s=o,r=i):s=Hs.ot})).next((()=>{s!==Hs.ot&&e(new _s(bc(r)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Zu(t,e){return Hu(t).put(function(t,e){return{targetId:0,path:yc(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.changes=new fa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ji.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ms.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.wt=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return il(t).put(n)}removeEntry(t,e,n){return il(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Zc(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.qn(t,n))))}getEntry(t,e){let n=ji.newInvalidDocument(e);return il(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ol(e))},((t,r)=>{n=this.Kn(e,r)})).next((()=>n))}Gn(t,e){let n={size:0,document:ji.newInvalidDocument(e)};return il(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ol(e))},((t,r)=>{n={document:this.Kn(e,r),size:Pu(r)}})).next((()=>n))}getEntries(t,e){let n=ma();return this.Qn(t,e,((t,e)=>{const r=this.Kn(t,e);n=n.insert(t,r)})).next((()=>n))}jn(t,e){let n=ma(),r=new Ys(_s.comparator);return this.Qn(t,e,((t,e)=>{const s=this.Kn(t,e);n=n.insert(t,s),r=r.insert(t,Pu(e))})).next((()=>({documents:n,Wn:r})))}Qn(t,e,n){if(e.isEmpty())return Ms.resolve();let r=new ti(cl);e.forEach((t=>r=r.add(t)));const s=IDBKeyRange.bound(ol(r.first()),ol(r.last())),i=r.getIterator();let o=i.getNext();return il(t).J({index:"documentKeyIndex",range:s},((t,e,r)=>{const s=_s.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&cl(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.q(ol(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(t,e,n){const r=[e.popLast().toArray(),e.lastSegment(),Zc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return il(t).K(IDBKeyRange.bound(r,s,!0)).next((t=>{let e=ma();for(const n of t){const t=this.Kn(_s.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,r){let s=ma();const i=al(e,n),o=al(e,ks.max());return il(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((t,e,n)=>{const i=this.Kn(_s.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(t){return new rl(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return sl(t).get("remoteDocumentGlobalKey").next((t=>(Yr(!!t),t)))}qn(t,e){return sl(t).put("remoteDocumentGlobalKey",e)}Kn(t,e){if(e){const t=Yc(this.wt,e);if(!t.isNoDocument()||!t.version.isEqual(ys.min()))return t}return ji.newInvalidDocument(t)}}function nl(t){return new el(t)}class rl extends tl{constructor(t,e){super(),this.zn=t,this.trackRemovals=e,this.Hn=new fa((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,r=new ti(((t,e)=>fs(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(e.push(this.zn.removeEntry(t,s,o.readTime)),i.isValidDocument()){const a=Xc(this.zn.wt,i);r=r.add(s.path.popLast());const c=Pu(a);n+=c-o.size,e.push(this.zn.addEntry(t,s,a))}else if(n-=o.size,this.trackRemovals){const n=Xc(this.zn.wt,i.convertToNoDocument(ys.min()));e.push(this.zn.addEntry(t,s,n))}})),r.forEach((n=>{e.push(this.zn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.zn.updateMetadata(t,n)),Ms.waitFor(e)}getFromCache(t,e){return this.zn.Gn(t,e).next((t=>(this.Hn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.zn.jn(t,e).next((({documents:t,Wn:e})=>(e.forEach(((e,n)=>{this.Hn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function sl(t){return Gc(t,"remoteDocumentGlobal")}function il(t){return Gc(t,"remoteDocumentsV14")}function ol(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function al(t,e){const n=e.documentKey.path.toArray();return[t,Zc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function cl(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=fs(n[i],r[i]),s)return s;return s=fs(n.length,r.length),s||(s=fs(n[n.length-2],r[r.length-2]),s||fs(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ul{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Xo(n.mutation,t,ri.empty(),gs.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ta()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ta()){const r=wa();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=ya();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=wa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ta())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=ma();const i=Ia(),o=Ia();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof na)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Xo(o.mutation,e,o.mutation.getFieldMask(),gs.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ul(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ia();let r=new Ys(((t,e)=>t-e)),s=Ta();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ri.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Ta()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ba();c.forEach((t=>{if(!s.has(t)){const r=Jo(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ms.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return _s.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):vo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ms.resolve(wa());let o=-1,a=s;return i.next((e=>Ms.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ms.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Ta()))).next((t=>({batchId:o,changes:va(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _s(e)).next((t=>{let e=ya();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=ya();return this.indexManager.getCollectionParents(t,r).next((i=>Ms.forEach(i,(i=>{const o=function(t,e){return new ho(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,ji.newInvalidDocument(n)))}));let n=ya();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&Xo(i.mutation,s,ri.empty(),gs.now()),So(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ms.resolve(ji.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Ms.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:qa(n.createTime)}),Ms.resolve()}getNamedQuery(t,e){return Ms.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:iu(t.bundledQuery),readTime:qa(t.readTime)}}(e)),Ms.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.overlays=new Ys(_s.comparator),this.Xn=new Map}getOverlay(t,e){return Ms.resolve(this.overlays.get(e))}getOverlays(t,e){const n=wa();return Ms.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Ms.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Ms.resolve()}getOverlaysForCollection(t,e,n){const r=wa(),s=e.length+1,i=new _s(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ms.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Ys(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=wa(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=wa(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ms.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Wc(e,n));let s=this.Xn.get(e);void 0===s&&(s=Ta(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.Zn=new ti(pl.ts),this.es=new ti(pl.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new pl(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new pl(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new _s(new ws([])),n=new pl(e,t),r=new pl(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new _s(new ws([])),n=new pl(e,t),r=new pl(e,t+1);let s=Ta();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new pl(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class pl{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return _s.comparator(t.key,e.key)||fs(t.ls,e.ls)}static ns(t,e){return fs(t.ls,e.ls)||_s.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new ti(pl.ts)}checkEmpty(t){return Ms.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new zc(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new pl(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ms.resolve(i)}lookupMutationBatch(t,e){return Ms.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return Ms.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ms.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Ms.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new pl(e,0),r=new pl(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),Ms.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ti(fs);return e.forEach((t=>{const e=new pl(t,0),r=new pl(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Ms.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;_s.isDocumentKey(s)||(s=s.child(""));const i=new pl(new _s(s),0);let o=new ti(fs);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),Ms.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Yr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ms.forEach(e.mutations,(r=>{const s=new pl(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new pl(e,0),r=this.ds.firstAfterOrEqual(n);return Ms.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ms.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.ps=t,this.docs=new Ys(_s.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ms.resolve(n?n.document.mutableCopy():ji.newInvalidDocument(e))}getEntries(t,e){let n=ma();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ji.newInvalidDocument(t))})),Ms.resolve(n)}getAllFromCollection(t,e,n){let r=ma();const s=new _s(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ns(Ds(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Ms.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Jr()}Is(t,e){return Ms.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new yl(this)}getSize(t){return Ms.resolve(this.size)}}class yl extends tl{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Ms.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.persistence=t,this.Ts=new fa((t=>Ki(t)),zi),this.lastRemoteSnapshotVersion=ys.min(),this.highestTargetId=0,this.Es=0,this.As=new fl,this.targetCount=0,this.Rs=$u.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ms.resolve()}getLastRemoteSnapshotVersion(t){return Ms.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ms.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ms.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Ms.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new $u(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Ms.resolve()}updateTargetData(t,e){return this.vn(e),Ms.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Ms.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ms.waitFor(s).next((()=>r))}getTargetCount(t){return Ms.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ms.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ms.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Ms.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Ms.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ms.resolve(n)}containsKey(t,e){return Ms.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Hs(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new vl(this),this.indexManager=new Su,this.remoteDocumentCache=function(t){return new gl(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Jc(e),this.Ds=new hl(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new ml(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){zr("MemoryPersistence","Starting transaction:",t);const r=new bl(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Ms.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class bl extends Rs{constructor(t){super(),this.currentSequenceNumber=t}}class Il{constructor(t){this.persistence=t,this.ks=new fl,this.Os=null}static Ms(t){return new Il(t)}get Fs(){if(this.Os)return this.Os;throw Jr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Ms.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Ms.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Ms.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ms.forEach(this.Fs,(n=>{const r=_s.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,ys.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Ms.or([()=>Ms.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.wt=t}O(t,e,n,r){const s=new Fs("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0}),t.createObjectStore("documentMutations")}(t),El(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=Ms.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),El(t)),i=i.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ys.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(t,e){return e.store("mutations").K().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ic,{unique:!0});const r=e.store("mutations"),s=n.map((t=>r.put(t)));return Ms.waitFor(s)}))}(t,s)))),i=i.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(t,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&r>=12&&(i=i.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:Fc});e.createIndex("collectionPathOverlayIndex",Pc,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",Vc,{unique:!1})}(t)}))),n<13&&r>=13&&(i=i.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:Sc});e.createIndex("documentKeyIndex",xc),e.createIndex("collectionGroupIndex",Ac)}(t))).next((()=>this.Gs(t,s))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(t,s)))),n<15&&r>=15&&(i=i.next((()=>function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:Oc}).createIndex("sequenceNumberIndex",Rc,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:Lc}).createIndex("documentKeyIndex",Mc,{unique:!1})}(t)))),i}Ls(t){let e=0;return t.store("remoteDocuments").J(((t,n)=>{e+=Pu(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.K().next((e=>Ms.forEach(e,(e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Ms.forEach(n,(n=>{Yr(n.userId===e.userId);const r=nu(this.wt,n);return Fu(t,e.userId,r).next((()=>{}))}))))}))))}Us(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const r=[];return n.J(((n,s)=>{const i=new ws(n),o=function(t){return[0,yc(t)]}(i);r.push(e.get(o).next((n=>n?Ms.resolve():(n=>e.put({targetId:0,path:yc(n),sequenceNumber:t.highestListenSequenceNumber}))(i))))})).next((()=>Ms.waitFor(r)))}))}qs(t,e){t.createObjectStore("collectionParents",{keyPath:Nc});const n=e.store("collectionParents"),r=new xu,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:yc(r)})}};return e.store("remoteDocuments").J({H:!0},((t,e)=>{const n=new ws(t);return s(n.popLast())})).next((()=>e.store("documentMutations").J({H:!0},(([t,e,n],r)=>{const i=bc(e);return s(i.popLast())}))))}Ks(t){const e=t.store("targets");return e.J(((t,n)=>{const r=ru(n),s=su(this.wt,r);return e.put(s)}))}Gs(t,e){const n=e.store("remoteDocuments"),r=[];return n.J(((t,n)=>{const s=e.store("remoteDocumentsV14"),i=(o=n,o.document?new _s(ws.fromString(o.document.name).popFirst(5)):o.noDocument?_s.fromSegments(o.noDocument.path):o.unknownDocument?_s.fromSegments(o.unknownDocument.path):Jr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>Ms.waitFor(r)))}Qs(t,e){const n=e.store("mutations"),r=nl(this.wt),s=new wl(Il.Ms,this.wt.ne);return n.K().next((t=>{const n=new Map;return t.forEach((t=>{var e;let r=null!==(e=n.get(t.userId))&&void 0!==e?e:Ta();nu(this.wt,t).keys().forEach((t=>r=r.add(t))),n.set(t.userId,r)})),Ms.forEach(n,((t,n)=>{const i=new jr(n),o=du.se(this.wt,i),a=s.getIndexManager(i),c=Vu.se(i,this.wt,a,s.referenceDelegate);return new ll(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Kc(e,Hs.ot),t).next()}))}))}}function El(t){t.createObjectStore("targetDocuments",{keyPath:Dc}).createIndex("documentTargetsIndex",kc,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Cc,{unique:!0}),t.createObjectStore("targetGlobal")}const Tl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Sl{constructor(t,e,n,r,s,i,o,a,c,u,l=14){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=t=>Promise.resolve(),!Sl.V())throw new es(ts.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Xu(this,r),this.ei=e+"main",this.wt=new Jc(a),this.ni=new Ps(this.ei,this.Hs,new _l(this.wt)),this.Vs=new Ku(this.referenceDelegate,this.wt),this.remoteDocumentCache=nl(this.wt),this.Ds=new uu,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Hr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new es(ts.FAILED_PRECONDITION,Tl);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Vs.getHighestSequenceNumber(t)))})).then((t=>{this.Ps=new Hs(t,this.Ws)})).then((()=>{this.vs=!0})).catch((t=>(this.ni&&this.ni.close(),Promise.reject(t))))}ci(t){return this.ti=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ni.F((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Al(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(t).next((t=>{t||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(t))).next((e=>this.isPrimary&&!e?this.li(t).next((()=>!1)):!!e&&this.fi(t).next((()=>!0)))))).catch((t=>{if(Us(t))return zr("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return zr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.js.enqueueRetryable((()=>this.ti(t))),this.isPrimary=t}))}ai(t){return xl(t).get("owner").next((t=>Ms.resolve(this.di(t))))}_i(t){return Al(t).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=Gc(t,"clientMetadata");return e.K().next((t=>{const n=this.gi(t,18e5),r=t.filter((t=>-1===n.indexOf(t)));return Ms.forEach(r,(t=>e.delete(t.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const e of t)this.si.removeItem(this.yi(e.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(t){return!!t&&t.ownerId===this.clientId}hi(t){return this.zs?Ms.resolve(!0):xl(t).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)){if(this.di(e)&&this.networkEnabled)return!0;if(!this.di(e)){if(!e.allowTabSynchronization)throw new es(ts.FAILED_PRECONDITION,Tl);return!1}}return!(!this.networkEnabled||!this.inForeground)||Al(t).K().next((t=>void 0===this.gi(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&zr("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Kc(t,Hs.ot);return this.li(e).next((()=>this._i(e)))})),this.ni.close(),this.Ai()}gi(t,e){return t.filter((t=>this.mi(t.updateTimeMs,e)&&!this.pi(t.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(t=>Al(t).K().next((t=>this.gi(t,18e5).map((t=>t.clientId))))))}get started(){return this.vs}getMutationQueue(t,e){return Vu.se(t,this.wt,e,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Cu(t,this.wt.ne.databaseId)}getDocumentOverlayCache(t){return du.se(this.wt,t)}getBundleCache(){return this.Ds}runTransaction(t,e,n){zr("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",s=15===(i=this.Hs)?$c:14===i?qc:13===i?jc:12===i?Uc:11===i?Bc:void Jr();var i;let o;return this.ni.runTransaction(t,r,s,(r=>(o=new Kc(r,this.Ps?this.Ps.next():Hs.ot),"readwrite-primary"===e?this.ai(o).next((t=>!!t||this.hi(o))).next((e=>{if(!e)throw Hr(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new es(ts.FAILED_PRECONDITION,Os);return n(o)})).next((t=>this.fi(o).next((()=>t)))):this.bi(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}bi(t){return xl(t).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)&&!this.di(t)&&!(this.zs||this.allowTabSynchronization&&t.allowTabSynchronization))throw new es(ts.FAILED_PRECONDITION,Tl)}))}fi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xl(t).put("owner",e)}static V(){return Ps.V()}li(t){const e=xl(t);return e.get("owner").next((t=>this.di(t)?(zr("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):Ms.resolve()))}mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Hr(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Js=()=>{this.Ii(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(t){var e;try{const n=null!==(null===(e=this.si)||void 0===e?void 0:e.getItem(this.yi(t)));return zr("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return Hr("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(E){Hr("Failed to set zombie client id.",E)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(E){}}yi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function xl(t){return Gc(t,"owner")}function Al(t){return Gc(t,"clientMetadata")}function Cl(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dl{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Ta(),r=Ta();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Dl(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Ms.resolve(null)}xi(t,e,n,r){return mo(e)||r.isEqual(ys.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(Kr()<=a["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),To(e)),this.Mi(t,i,e,Cs(r,-1)))}))}ki(t,e){let n=new ti(Ao(t));return e.forEach(((e,r)=>{So(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return Kr()<=a["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",To(e)),this.Di.getDocumentsMatchingQuery(t,e,ks.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Ys(fs),this.Bi=new fa((t=>Ki(t)),zi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ll(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function Ol(t,e,n,r){return new Nl(t,e,n,r)}async function Rl(t,e){const n=Zr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Ta();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Ll(t,e){const n=Zr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ms.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Yr(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ta();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ml(t){const e=Zr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Fl(t,e){const n=Zr(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(ii.EMPTY_BYTE_STRING,ys.min()).withLastLimboFreeSnapshotVersion(ys.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=ma(),c=Ta();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(Pl(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(ys.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ms.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function Pl(t,e,n){let r=Ta(),s=Ta();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=ma();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ys.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function Vl(t,e){const n=Zr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Bl(t,e){const n=Zr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,Ms.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new Qc(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Ul(t,e,n){const r=Zr(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Us(t))throw t;zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function jl(t,e,n){const r=Zr(t);let s=ys.min(),i=Ta();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Zr(t),s=r.Bi.get(n);return void 0!==s?Ms.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,bo(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:ys.min(),n?i:Ta()))).next((t=>(Kl(r,xo(e),t),{documents:t,ji:i})))))}function ql(t,e){const n=Zr(t),r=Zr(n.Vs),s=n.$i.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(t=>r.te(t,e).next((t=>t?t.target:null))))}function $l(t,e){const n=Zr(t),r=n.Li.get(e)||ys.min();return n.persistence.runTransaction("Get new document changes","readonly",(t=>n.Ui.getAllFromCollectionGroup(t,e,Cs(r,-1),Number.MAX_SAFE_INTEGER))).then((t=>(Kl(n,e,t),t)))}function Kl(t,e,n){let r=ys.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}async function Gl(t,e,n,r){const s=Zr(t);let i=Ta(),o=ma();for(const u of n){const t=e.Wi(u.metadata.name);u.document&&(i=i.add(t));const n=e.zi(u);n.setReadTime(e.Hi(u.metadata.readTime)),o=o.insert(t,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await Bl(s,function(t){return bo(po(ws.fromString(`__bundle__/docs/${t}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(t=>Pl(t,a,o).next((e=>(a.apply(t),e))).next((e=>s.Vs.removeMatchingKeysForTargetId(t,c.targetId).next((()=>s.Vs.addMatchingKeys(t,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(t,e.Gi,e.Qi))).next((()=>e.Gi))))))}async function zl(t,e,n=Ta()){const r=await Bl(t,bo(iu(e.bundledQuery))),s=Zr(t);return s.persistence.runTransaction("Save named query","readwrite",(t=>{const i=qa(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(t,e);const o=r.withResumeToken(ii.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(t,o).next((()=>s.Vs.removeMatchingKeysForTargetId(t,r.targetId))).next((()=>s.Vs.addMatchingKeys(t,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(t,e)))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return`firestore_clients_${t}_${e}`}function Wl(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ql(t,e){return`firestore_targets_${t}_${e}`}class Jl{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Ji(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new es(r.error.code,r.error.message))),i?new Jl(t,e,r.state,s):(Hr("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Yl{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ji(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new es(n.error.code,n.error.message))),s?new Yl(t,n.state,r):(Hr("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Xl{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ji(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=xa();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=yi(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Xl(t,s):(Hr("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Zl{constructor(t,e){this.clientId=t,this.onlineState=e}static Ji(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Zl(e.clientId,e.onlineState):(Hr("SharedClientState",`Failed to parse online state: ${t}`),null)}}class th{constructor(){this.activeTargetIds=xa()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eh{constructor(t,e,n,r,s){this.window=t,this.js=e,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Ys(fs),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=Hl(this.persistenceKey,this.tr),this.ur=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new th),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.dr=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ri();for(const n of t){if(n===this.tr)continue;const t=this.getItem(Hl(this.persistenceKey,n));if(t){const e=Xl.Ji(n,t);e&&(this.sr=this.sr.insert(e.clientId,e))}}this._r();const e=this.storage.getItem(this.lr);if(e){const t=this.wr(e);t&&this.mr(t)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.ur,JSON.stringify(t))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(t){let e=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.yr(t,"pending")}updateMutationState(t,e,n){this.yr(t,e,n),this.pr(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Ql(this.persistenceKey,t));if(n){const r=Yl.Ji(t,n);r&&(e=r.state)}}return this.Ir.Xi(t),this._r(),e}removeLocalQueryTarget(t){this.Ir.Zi(t),this._r()}isLocalQueryTarget(t){return this.Ir.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Ql(this.persistenceKey,t))}updateQueryState(t,e,n){this.Tr(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.pr(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.Er(t)}notifyBundleLoaded(t){this.Ar(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return zr("SharedClientState","READ",t,e),e}setItem(t,e){zr("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){zr("SharedClientState","REMOVE",t),this.storage.removeItem(t)}nr(t){const e=t;if(e.storageArea===this.storage){if(zr("SharedClientState","EVENT",e.key,e.newValue),e.key===this.rr)return void Hr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.cr.test(e.key)){if(null==e.newValue){const t=this.Rr(e.key);return this.br(t,null)}{const t=this.Pr(e.key,e.newValue);if(t)return this.br(t.clientId,t)}}else if(this.ar.test(e.key)){if(null!==e.newValue){const t=this.vr(e.key,e.newValue);if(t)return this.Vr(t)}}else if(this.hr.test(e.key)){if(null!==e.newValue){const t=this.Sr(e.key,e.newValue);if(t)return this.Dr(t)}}else if(e.key===this.lr){if(null!==e.newValue){const t=this.wr(e.newValue);if(t)return this.mr(t)}}else if(e.key===this.ur){const t=function(t){let e=Hs.ot;if(null!=t)try{const n=JSON.parse(t);Yr("number"==typeof n),e=n}catch(t){Hr("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==Hs.ot&&this.sequenceNumberHandler(t)}else if(e.key===this.dr){const t=this.Cr(e.newValue);await Promise.all(t.map((t=>this.syncEngine.Nr(t))))}}else this.ir.push(e)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(t,e,n){const r=new Jl(this.currentUser,t,e,n),s=Wl(this.persistenceKey,this.currentUser,t);this.setItem(s,r.Yi())}pr(t){const e=Wl(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Er(t){const e={clientId:this.tr,onlineState:t};this.storage.setItem(this.lr,JSON.stringify(e))}Tr(t,e,n){const r=Ql(this.persistenceKey,t),s=new Yl(t,e,n);this.setItem(r,s.Yi())}Ar(t){const e=JSON.stringify(Array.from(t));this.setItem(this.dr,e)}Rr(t){const e=this.cr.exec(t);return e?e[1]:null}Pr(t,e){const n=this.Rr(t);return Xl.Ji(n,e)}vr(t,e){const n=this.ar.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Jl.Ji(new jr(s),r,e)}Sr(t,e){const n=this.hr.exec(t),r=Number(n[1]);return Yl.Ji(r,e)}wr(t){return Zl.Ji(t)}Cr(t){return JSON.parse(t)}async Vr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.kr(t.batchId,t.state,t.error);zr("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Dr(t){return this.syncEngine.Or(t.targetId,t.state,t.error)}br(t,e){const n=e?this.sr.insert(t,e):this.sr.remove(t),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((t=>{r.has(t)||i.push(t)})),r.forEach((t=>{s.has(t)||o.push(t)})),this.syncEngine.Mr(i,o).then((()=>{this.sr=n}))}mr(t){this.sr.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}gr(t){let e=xa();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class nh{constructor(){this.Fr=new th,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new th,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);zr("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(zr("RestConnection","Received: ",t),t)),(e=>{throw Wr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+qr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=ih[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Br;o.listenOnce(Lr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rr.NO_ERROR:const e=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Rr.TIMEOUT:zr("Connection",'RPC "'+t+'" timed out'),i(new es(ts.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ts).indexOf(e)>=0?e:ts.UNKNOWN}(t.status);i(new es(e,t.message))}else i(new es(ts.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new es(ts.UNAVAILABLE,"Connection failed."));break;default:Jr()}}finally{zr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Nr(),i=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pr({})),this.uo(o.initMessageHeaders,e,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");zr("Connection","Creating WebChannel: "+a,o);const u=s.createWebChannel(a,o);let l=!1,h=!1;const d=new oh({jr:t=>{h?zr("Connection","Not sending because WebChannel is closed:",t):(l||(zr("Connection","Opening WebChannel transport."),u.open(),l=!0),zr("Connection","WebChannel sending:",t),u.send(t))},Wr:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Vr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(u,Vr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.eo())})),f(u,Vr.EventType.ERROR,(t=>{h||(h=!0,Wr("Connection","WebChannel transport errored:",t),d.eo(new es(ts.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Yr(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){zr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=ua[t];if(void 0!==e)return da(e)}(t),n=s.message;void 0===e&&(e=ts.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,d.eo(new es(e,n)),u.close()}else zr("Connection","WebChannel received:",n),d.no(n)}})),f(i,Mr.STAT_EVENT,(t=>{t.stat===Fr.PROXY?zr("Connection","Detected buffering proxy"):t.stat===Fr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(){return"undefined"!=typeof window?window:null}function uh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){return new Va(t,!0)}class hh{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new hh(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===ts.RESOURCE_EXHAUSTED?(Hr(e.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===ts.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new es(ts.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fh extends dh{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=tc(this.wt,t),n=function(t){if(!("targetChange"in t))return ys.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ys.min():e.readTime?qa(e.readTime):ys.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Qa(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=Hi(r)?{documents:sc(t,r)}:{query:ic(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Ua(t,e.resumeToken):e.snapshotVersion.compareTo(ys.min())>0&&(n.readTime=Ba(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=ac(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Qa(this.wt),e.removeTarget=t,this.Mo(e)}}class ph extends dh{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Yr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=rc(t.writeResults,t.commitTime),n=qa(t.commitTime);return this.listener.Jo(n,e)}return Yr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Qa(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ec(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new es(ts.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ts.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new es(ts.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ts.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new es(ts.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class gh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Hr(e),this.su=!1):zr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{xh(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zr(t);e.lu.add(4),await wh(e),e._u.set("Unknown"),e.lu.delete(4),await vh(e)}(this))}))})),this._u=new gh(n,r)}}async function vh(t){if(xh(t))for(const e of t.fu)await e(!0)}async function wh(t){for(const e of t.fu)await e(!1)}function bh(t,e){const n=Zr(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Sh(n)?Th(n):Kh(n).Co()&&_h(n,e))}function Ih(t,e){const n=Zr(t),r=Kh(n);n.hu.delete(e),r.Co()&&Eh(n,e),0===n.hu.size&&(r.Co()?r.ko():xh(n)&&n._u.set("Unknown"))}function _h(t,e){t.wu.Nt(e.targetId),Kh(t).Qo(e)}function Eh(t,e){t.wu.Nt(e),Kh(t).jo(e)}function Th(t){t.wu=new Ra({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Kh(t).start(),t._u.iu()}function Sh(t){return xh(t)&&!Kh(t).Do()&&t.hu.size>0}function xh(t){return 0===Zr(t).lu.size}function Ah(t){t.wu=void 0}async function Ch(t){t.hu.forEach(((e,n)=>{_h(t,e)}))}async function Dh(t,e){Ah(t),Sh(t)?(t._u.uu(e),Th(t)):t._u.set("Unknown")}async function kh(t,e,n){if(t._u.set("Online"),e instanceof Na&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nh(t,n)}else if(e instanceof Da?t.wu.Ut(e):e instanceof ka?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ys.min()))try{const e=await Ml(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ii.EMPTY_BYTE_STRING,n.snapshotVersion)),Eh(t,e);const r=new Qc(n.target,e,1,n.sequenceNumber);_h(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){zr("RemoteStore","Failed to raise snapshot:",e),await Nh(t,e)}}async function Nh(t,e,n){if(!Us(e))throw e;t.lu.add(1),await wh(t),t._u.set("Offline"),n||(n=()=>Ml(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await vh(t)}))}function Oh(t,e){return e().catch((n=>Nh(t,n,e)))}async function Rh(t){const e=Zr(t),n=Gh(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Lh(e);)try{const t=await Vl(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Mh(e,t)}catch(t){await Nh(e,t)}Fh(e)&&Ph(e)}function Lh(t){return xh(t)&&t.au.length<10}function Mh(t,e){t.au.push(e);const n=Gh(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Fh(t){return xh(t)&&!Gh(t).Do()&&t.au.length>0}function Ph(t){Gh(t).start()}async function Vh(t){Gh(t).Xo()}async function Bh(t){const e=Gh(t);for(const n of t.au)e.Ho(n.mutations)}async function Uh(t,e,n){const r=t.au.shift(),s=Hc.from(r,e,n);await Oh(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Rh(t)}async function jh(t,e){e&&Gh(t).zo&&await async function(t,e){if(n=e.code,ha(n)&&n!==ts.ABORTED){const n=t.au.shift();Gh(t).No(),await Oh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Rh(t)}var n}(t,e),Fh(t)&&Ph(t)}async function qh(t,e){const n=Zr(t);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=xh(n);n.lu.add(3),await wh(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await vh(n)}async function $h(t,e){const n=Zr(t);e?(n.lu.delete(2),await vh(n)):e||(n.lu.add(2),await wh(n),n._u.set("Unknown"))}function Kh(t){return t.mu||(t.mu=function(t,e,n){const r=Zr(t);return r.tu(),new fh(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Ch.bind(null,t),Jr:Dh.bind(null,t),Go:kh.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),Sh(t)?Th(t):t._u.set("Unknown")):(await t.mu.stop(),Ah(t))}))),t.mu}function Gh(t){return t.gu||(t.gu=function(t,e,n){const r=Zr(t);return r.tu(),new ph(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Vh.bind(null,t),Jr:jh.bind(null,t),Yo:Bh.bind(null,t),Jo:Uh.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Rh(t)):(await t.gu.stop(),t.au.length>0&&(zr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zh{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new zh(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new es(ts.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hh(t,e){if(Hr("AsyncQueue",`${e}: ${t}`),Us(t))return new es(ts.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.comparator=t?(e,n)=>t(e,n)||_s.comparator(e.key,n.key):(t,e)=>_s.comparator(t.key,e.key),this.keyedMap=ya(),this.sortedSet=new Ys(this.comparator)}static emptySet(t){return new Wh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Wh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Wh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.yu=new Ys(_s.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Jr():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Jh{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Jh(t,e,Wh.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_o(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.Iu=void 0,this.listeners=[]}}class Xh{constructor(){this.queries=new fa((t=>Eo(t)),_o),this.onlineState="Unknown",this.Tu=new Set}}async function Zh(t,e){const n=Zr(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Yh),s)try{i.Iu=await n.onListen(r)}catch(t){const n=Hh(t,`Initialization of query '${To(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&rd(n)}async function td(t,e){const n=Zr(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ed(t,e){const n=Zr(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(r=!0);e.Iu=s}}r&&rd(n)}function nd(t,e,n){const r=Zr(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function rd(t){t.Tu.forEach((t=>{t.next()}))}class sd{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Jh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Jh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e){this.payload=t,this.byteLength=e}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.wt=t}Wi(t){return za(this.wt,t)}zi(t){return t.metadata.exists?Xa(this.wt,t.document,!1):ji.newNoDocument(this.Wi(t.metadata.name),this.Hi(t.metadata.readTime))}Hi(t){return qa(t)}}class ad{constructor(t,e,n){this.xu=t,this.localStore=e,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=cd(t)}Nu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.payload.namedQuery)this.queries.push(t.payload.namedQuery);else if(t.payload.documentMetadata){this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e;const n=ws.fromString(t.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ku(t){const e=new Map,n=new od(this.wt);for(const r of t)if(r.metadata.queries){const t=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||Ta()).add(t);e.set(n,r)}}return e}async complete(){const t=await Gl(this.localStore,new od(this.wt),this.documents,this.xu.id),e=this.ku(this.documents);for(const n of this.queries)await zl(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:t}}}function cd(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t){this.key=t}}class ld{constructor(t){this.key=t}}class hd{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Ta(),this.mutatedKeys=Ta(),this.Lu=Ao(t),this.Uu=new Wh(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Qh,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=So(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Jr()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Jh(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Qh,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Ta(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new ld(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new ud(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Ta();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Jh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class dd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class fd{constructor(t){this.key=t,this.Xu=!1}}class pd{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new fa((t=>Eo(t)),_o),this.ec=new Map,this.nc=new Set,this.sc=new Ys(_s.comparator),this.ic=new Map,this.rc=new fl,this.oc={},this.uc=new Map,this.cc=$u.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function md(t,e){const n=Kd(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await Bl(n.localStore,bo(e));n.isPrimaryClient&&bh(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await gd(n,e,r,"current"===i)}return s}async function gd(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await jl(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return Dd(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await jl(t.localStore,e,!0),i=new hd(e,s.ji),o=i.Ku(s.documents),a=Ca.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);Dd(t,n,c.zu);const u=new dd(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function yd(t,e){const n=Zr(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!_o(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ul(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ih(n.remoteStore,r.targetId),Ad(n,r.targetId)})).catch(Ls)):(Ad(n,r.targetId),await Ul(n.localStore,r.targetId,!0))}async function vd(t,e,n){const r=Gd(t);try{const t=await function(t,e){const n=Zr(t),r=gs.now(),s=e.reduce(((t,e)=>t.add(e.key)),Ta());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ma(),c=Ta();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Zo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new na(t.key,e,Ui(e.value.mapValue),Ho.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:va(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Ys(fs)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Od(r,t.changes),await Rh(r.remoteStore)}catch(t){const e=Hh(t,"Failed to persist write");n.reject(e)}}async function wd(t,e){const n=Zr(t);try{const t=await Fl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Yr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Yr(r.Xu):t.removedDocuments.size>0&&(Yr(r.Xu),r.Xu=!1))})),await Od(n,t,e)}catch(t){await Ls(t)}}function bd(t,e,n){const r=Zr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Zr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)})),r&&rd(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Id(t,e,n){const r=Zr(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new Ys(_s.comparator);t=t.insert(i,ji.newNoDocument(i,ys.min()));const n=Ta().add(i),s=new Aa(ys.min(),new Map,new ti(fs),t,n);await wd(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),Nd(r)}else await Ul(r.localStore,e,!1).then((()=>Ad(r,e,n))).catch(Ls)}async function _d(t,e){const n=Zr(t),r=e.batch.batchId;try{const t=await Ll(n.localStore,e);xd(n,r,null),Sd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Od(n,t)}catch(t){await Ls(t)}}async function Ed(t,e,n){const r=Zr(t);try{const t=await function(t,e){const n=Zr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Yr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);xd(r,e,n),Sd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Od(r,t)}catch(n){await Ls(n)}}async function Td(t,e){const n=Zr(t);xh(n.remoteStore)||zr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Zr(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const r=n.uc.get(t)||[];r.push(e),n.uc.set(t,r)}catch(t){const n=Hh(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Sd(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function xd(t,e,n){const r=Zr(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||Cd(t,e)}))}function Cd(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(Ih(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Nd(t))}function Dd(t,e,n){for(const r of n)r instanceof ud?(t.rc.addReference(r.key,e),kd(t,r)):r instanceof ld?(zr("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||Cd(t,r.key)):Jr()}function kd(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(zr("SyncEngine","New document in limbo: "+n),t.nc.add(r),Nd(t))}function Nd(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new _s(ws.fromString(e)),r=t.cc.next();t.ic.set(r,new fd(n)),t.sc=t.sc.insert(n,r),bh(t.remoteStore,new Qc(bo(po(n.path)),r,2,Hs.ot))}}async function Od(t,e,n){const r=Zr(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Dl.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Zr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ms.forEach(e,(e=>Ms.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ms.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Us(t))throw t;zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Rd(t,e){const n=Zr(t);if(!n.currentUser.isEqual(e)){zr("SyncEngine","User change. New user:",e.toKey());const t=await Rl(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new es(ts.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Od(n,t.Ki)}}function Ld(t,e){const n=Zr(t),r=n.ic.get(e);if(r&&r.Xu)return Ta().add(r.key);{let t=Ta();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}async function Md(t,e){const n=Zr(t),r=await jl(n.localStore,e.query,!0),s=e.view.Ju(r);return n.isPrimaryClient&&Dd(n,e.targetId,s.zu),s}async function Fd(t,e){const n=Zr(t);return $l(n.localStore,e).then((t=>Od(n,t)))}async function Pd(t,e,n,r){const s=Zr(t),i=await function(t,e){const n=Zr(t),r=Zr(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>r.yn(t,e).next((e=>e?n.localDocuments.getDocuments(t,e):Ms.resolve(null)))))}(s.localStore,e);null!==i?("pending"===n?await Rh(s.remoteStore):"acknowledged"===n||"rejected"===n?(xd(s,e,r||null),Sd(s,e),function(t,e){Zr(Zr(t).mutationQueue).In(e)}(s.localStore,e)):Jr(),await Od(s,i)):zr("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Vd(t,e){const n=Zr(t);if(Kd(n),Gd(n),!0===e&&!0!==n.ac){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await Bd(n,t.toArray());n.ac=!0,await $h(n.remoteStore,!0);for(const r of e)bh(n.remoteStore,r)}else if(!1===e&&!1!==n.ac){const t=[];let e=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then((()=>(Ad(n,s),Ul(n.localStore,s,!0)))),Ih(n.remoteStore,s)})),await e,await Bd(n,t),function(t){const e=Zr(t);e.ic.forEach(((t,n)=>{Ih(e.remoteStore,n)})),e.rc.cs(),e.ic=new Map,e.sc=new Ys(_s.comparator)}(n),n.ac=!1,await $h(n.remoteStore,!1)}}async function Bd(t,e,n){const r=Zr(t),s=[],i=[];for(const o of e){let t;const e=r.ec.get(o);if(e&&0!==e.length){t=await Bl(r.localStore,bo(e[0]));for(const t of e){const e=r.tc.get(t),n=await Md(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await ql(r.localStore,o);t=await Bl(r.localStore,e),await gd(r,Ud(e),o,!1)}s.push(t)}return r.Zu.Go(i),s}function Ud(t){return fo(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function jd(t){const e=Zr(t);return Zr(Zr(e.localStore).persistence).Ri()}async function qd(t,e,n,r){const s=Zr(t);if(s.ac)return void zr("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await $l(s.localStore,xo(i[0])),r=Aa.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Od(s,t,r);break}case"rejected":await Ul(s.localStore,e,!0),Ad(s,e,r);break;default:Jr()}}async function $d(t,e,n){const r=Kd(t);if(r.ac){for(const t of e){if(r.ec.has(t)){zr("SyncEngine","Adding an already active target "+t);continue}const e=await ql(r.localStore,t),n=await Bl(r.localStore,e);await gd(r,Ud(e),n.targetId,!1),bh(r.remoteStore,n)}for(const t of n)r.ec.has(t)&&await Ul(r.localStore,t,!1).then((()=>{Ih(r.remoteStore,t),Ad(r,t)})).catch(Ls)}}function Kd(t){const e=Zr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ld.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Id.bind(null,e),e.Zu.Go=ed.bind(null,e.eventManager),e.Zu.lc=nd.bind(null,e.eventManager),e}function Gd(t){const e=Zr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_d.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ed.bind(null,e),e}function zd(t,e,n){const r=Zr(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=Zr(t),r=qa(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n.Ds.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(r)>=0))}(t.localStore,r))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(cd(r));const s=new ad(r,t.localStore,e.wt);let i=await e.fc();for(;i;){const t=await s.Nu(i);t&&n._updateProgress(t),i=await e.fc()}const o=await s.complete();return await Od(t,o.Mu,void 0),await function(t,e){const n=Zr(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n.Ds.saveBundleMetadata(t,e)))}(t.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(t){return Wr("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then((t=>{r.sharedClientState.notifyBundleLoaded(t)}))}class Hd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=lh(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Ol(this.persistence,new kl,t.initialUser,this.wt)}_c(t){return new wl(Il.Ms,this.wt)}dc(t){return new nh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wd extends Hd{constructor(t,e,n){super(),this.yc=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.yc.initialize(this,t),await Gd(this.yc.syncEngine),await Rh(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(t){return Ol(this.persistence,new kl,t.initialUser,this.wt)}mc(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ju(n,t.asyncQueue,e)}gc(t,e){const n=new zs(e,this.persistence);return new Gs(t.asyncQueue,n)}_c(t){const e=Cl(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Mu.withCacheSize(this.cacheSizeBytes):Mu.DEFAULT;return new Sl(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,ch(),uh(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(t){return new nh}}class Qd extends Wd{constructor(t,e){super(t,e,!1),this.yc=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.yc.syncEngine;this.sharedClientState instanceof eh&&(this.sharedClientState.syncEngine={kr:Pd.bind(null,e),Or:qd.bind(null,e),Mr:$d.bind(null,e),Ri:jd.bind(null,e),Nr:Fd.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ci((async t=>{await Vd(this.yc.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())}))}dc(t){const e=ch();if(!eh.V(e))throw new es(ts.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Cl(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new eh(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Jd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>bd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rd.bind(null,this.syncEngine),await $h(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Xh}createDatastore(t){const e=lh(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ah(r));var r;return function(t,e,n,r){return new mh(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>bd(this.syncEngine,t,0),i=sh.V()?new sh:new rh,new yh(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new pd(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Zr(t);zr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await wh(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,e){this.Ec=t,this.wt=e,this.metadata=new ns,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((t=>{t&&t.Cu()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const t=await this.bc();if(null===t)return null;const e=this.Ac.decode(t),n=Number(e);isNaN(n)&&this.Pc(`length string (${e}) is not valid number`);const r=await this.vc(n);return new id(JSON.parse(r),t.length+n)}Vc(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const t=this.Vc();t<0&&this.Pc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async vc(t){for(;this.buffer.length<t;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const e=this.Ac.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Pc(t){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${t}`)}async Sc(){const t=await this.Ec.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new es(ts.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=Zr(t),r=Qa(n.wt)+"/documents",s={documents:e.map((t=>Ga(n.wt,t)))},i=await n.ao("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach((t=>{const e=Za(n.wt,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Yr(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new oa(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=_s.fromPath(e);this.mutations.push(new aa(n,this.precondition(n)))})),await async function(t,e){const n=Zr(t),r=Qa(n.wt)+"/documents",s={writes:e.map((t=>ec(n.wt,t)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Jr();e=ys.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new es(ts.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ho.updateTime(e):Ho.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(ys.min()))throw new es(ts.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ho.updateTime(e)}return Ho.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new hh(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const t=new tf(this.datastore),e=this.xc(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Nc(t)}))))})).catch((t=>{this.Nc(t)}))}))}xc(t){try{const e=this.updateFunction(t);return!mi(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Nc(t){this.Dc>0&&this.kc(t)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(t)}kc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!ha(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=ds.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new es(ts.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rf(t,e){t.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Rl(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function sf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await of(t);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>qh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>qh(e.remoteStore,n))),t.onlineComponents=e}async function of(t){return t.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await rf(t,new Hd)),t.offlineComponents}async function af(t){return t.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await sf(t,new Jd)),t.onlineComponents}function cf(t){return of(t).then((t=>t.persistence))}function uf(t){return of(t).then((t=>t.localStore))}function lf(t){return af(t).then((t=>t.remoteStore))}function hf(t){return af(t).then((t=>t.syncEngine))}async function df(t){const e=await af(t),n=e.eventManager;return n.onListen=md.bind(null,e.syncEngine),n.onUnlisten=yd.bind(null,e.syncEngine),n}function ff(t){return t.asyncQueue.enqueue((async()=>{const e=await cf(t),n=await lf(t);return e.setNetworkEnabled(!0),function(t){const e=Zr(t);return e.lu.delete(0),vh(e)}(n)}))}function pf(t){return t.asyncQueue.enqueue((async()=>{const e=await cf(t),n=await lf(t);return e.setNetworkEnabled(!1),async function(t){const e=Zr(t);e.lu.add(0),await wh(e),e._u.set("Offline")}(n)}))}function mf(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await function(t,e){const n=Zr(t);return n.persistence.runTransaction("read document","readonly",(t=>n.localDocuments.getDocument(t,e)))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new es(ts.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=Hh(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await uf(t),e,n))),n.promise}function gf(t,e,n={}){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Xd({next:i=>{e.enqueueAndForget((()=>td(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new es(ts.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new es(ts.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new sd(po(n.path),i,{includeMetadataChanges:!0,Du:!0});return Zh(t,o)}(await df(t),t.asyncQueue,e,n,r))),r.promise}function yf(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await jl(t,e,!0),s=new hd(e,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const r=Hh(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await uf(t),e,n))),n.promise}function vf(t,e,n={}){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Xd({next:n=>{e.enqueueAndForget((()=>td(t,o))),n.fromCache&&"server"===r.source?s.reject(new es(ts.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new sd(n,i,{includeMetadataChanges:!0,Du:!0});return Zh(t,o)}(await df(t),t.asyncQueue,e,n,r))),r.promise}function wf(t,e){const n=new Xd(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){Zr(t).Tu.add(e),e.next()}(await df(t),n))),()=>{n.Tc(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){Zr(t).Tu.delete(e)}(await df(t),n)))}}function bf(t,e,n){const r=new ns;return t.asyncQueue.enqueueAndForget((async()=>{const s=await function(t){return af(t).then((t=>t.datastore))}(t);new ef(t.asyncQueue,s,n,e,r).run()})),r.promise}function If(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Zd(t,e)}(function(t,e){if(t instanceof Uint8Array)return Yd(t,e);if(t instanceof ArrayBuffer)return Yd(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,lh(e));t.asyncQueue.enqueueAndForget((async()=>{zd(await hf(t),s,r)}))}function _f(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=Zr(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n.Ds.getNamedQuery(t,e)))}(await uf(t),e)))}const Ef=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e,n){if(!n)throw new es(ts.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sf(t,e,n,r){if(!0===e&&!0===r)throw new es(ts.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xf(t){if(!_s.isDocumentKey(t))throw new es(ts.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Af(t){if(_s.isDocumentKey(t))throw new es(ts.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Jr()}function Df(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new es(ts.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cf(t);throw new es(ts.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kf(t,e){if(e<=0)throw new es(ts.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new es(ts.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new es(ts.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Sf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1,t instanceof pi?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new es(ts.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(t.options.projectId)}(t))}get app(){if(!this._app)throw new es(ts.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new es(ts.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ss;switch(t.type){case"gapi":const e=t.client;return Yr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new cs(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new es(ts.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ef.get(t);e&&(zr("ComponentProvider","Removing Datastore"),Ef.delete(t),e.terminate())}(this),Promise.resolve()}}function Rf(t,e,n,r={}){var s;const i=(t=Df(t,Of))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Wr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=jr.MOCK_USER;else{e=(0,c.Sg)(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new es(ts.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(i)}t._authCredentials=new is(new rs(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ff(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Lf(this.firestore,t,this._key)}}class Mf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Mf(this.firestore,t,this._query)}}class Ff extends Mf{constructor(t,e,n){super(t,e,po(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Lf(this.firestore,null,new _s(t))}withConverter(t){return new Ff(this.firestore,t,this._path)}}function Pf(t,e,...n){if(t=(0,c.m9)(t),Tf("collection","path",e),t instanceof Of){const r=ws.fromString(e,...n);return Af(r),new Ff(t,null,r)}{if(!(t instanceof Lf||t instanceof Ff))throw new es(ts.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ws.fromString(e,...n));return Af(r),new Ff(t.firestore,null,r)}}function Vf(t,e){if(t=Df(t,Of),Tf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new es(ts.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mf(t,null,function(t){return new ho(ws.emptyPath(),t)}(e))}function Bf(t,e,...n){if(t=(0,c.m9)(t),1===arguments.length&&(e=ds.I()),Tf("doc","path",e),t instanceof Of){const r=ws.fromString(e,...n);return xf(r),new Lf(t,null,new _s(r))}{if(!(t instanceof Lf||t instanceof Ff))throw new es(ts.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ws.fromString(e,...n));return xf(r),new Lf(t.firestore,t instanceof Ff?t.converter:null,new _s(r))}}function Uf(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),(t instanceof Lf||t instanceof Ff)&&(e instanceof Lf||e instanceof Ff)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function jf(t,e){return t=(0,c.m9)(t),e=(0,c.m9)(e),t instanceof Mf&&e instanceof Mf&&t.firestore===e.firestore&&_o(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qf{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new hh(this,"async_queue_retry"),this.Kc=()=>{const t=uh();t&&zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=uh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=uh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new ns;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(E){if(!Us(E))throw E;zr("AsyncQueue","Operation failed with retryable error: "+E)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Hr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=zh.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Jr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function $f(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Kf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ns,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=-1;class zf extends Of{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new qf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Wf(this),this._firestoreClient.terminate()}}function Hf(t){return t._firestoreClient||Wf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wf(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new fi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nf(t._authCredentials,t._appCheckCredentials,t._queue,r)}function Qf(t,e){sp(t=Df(t,zf));const n=Hf(t),r=t._freezeSettings(),s=new Jd;return Yf(n,s,new Wd(s,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Jf(t){sp(t=Df(t,zf));const e=Hf(t),n=t._freezeSettings(),r=new Jd;return Yf(e,r,new Qd(r,n.cacheSizeBytes))}function Yf(t,e,n){const r=new ns;return t.asyncQueue.enqueue((async()=>{try{await rf(t,n),await sf(t,e),r.resolve()}catch(t){const n=t;if(!function(t){return"FirebaseError"===t.name?t.code===ts.FAILED_PRECONDITION||t.code===ts.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(n))throw n;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function Xf(t){if(t._initialized&&!t._terminated)throw new es(ts.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ns;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!Ps.V())return Promise.resolve();const e=t+"main";await Ps.delete(e)}(Cl(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function Zf(t){return function(t){const e=new ns;return t.asyncQueue.enqueueAndForget((async()=>Td(await hf(t),e))),e.promise}(Hf(t=Df(t,zf)))}function tp(t){return ff(Hf(t=Df(t,zf)))}function ep(t){return pf(Hf(t=Df(t,zf)))}function np(t,e){const n=Hf(t=Df(t,zf)),r=new Kf;return If(n,t._databaseId,e,r),r}function rp(t,e){return _f(Hf(t=Df(t,zf)),e).then((e=>e?new Mf(t,null,e.query):null))}function sp(t){if(t._initialized||t._terminated)throw new es(ts.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new es(ts.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Is(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class op{constructor(t){this._byteString=t}static fromBase64String(t){try{return new op(ii.fromBase64String(t))}catch(t){throw new es(ts.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new op(ii.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new es(ts.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new es(ts.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return fs(this._lat,t._lat)||fs(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=/^__.*__$/;class lp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new na(t,this.data,this.fieldMask,e,this.fieldTransforms):new ea(t,this.data,e,this.fieldTransforms)}}class hp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new na(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function dp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Jr()}}class fp{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new fp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Rp(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(dp(this.Zc)&&up.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class pp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||lh(t)}aa(t,e,n,r=!1){return new fp({Zc:t,methodName:e,ca:n,path:Is.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function mp(t){const e=t._freezeSettings(),n=lh(t._databaseId);return new pp(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gp(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Dp("Data must be an object, but it was:",o,r);const a=Ap(r,o);let c,u;if(i.merge)c=new ri(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=kp(e,r,n);if(!o.contains(s))throw new es(ts.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Lp(t,s)||t.push(s)}c=new ri(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new lp(new Bi(a),c,u)}class yp extends ap{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yp}}function vp(t,e,n){return new fp({Zc:3,ca:e.settings.ca,methodName:t._methodName,na:n},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class wp extends ap{_toFieldTransform(t){return new Ko(t.path,new Fo)}isEqual(t){return t instanceof wp}}class bp extends ap{constructor(t,e){super(t),this.ha=e}_toFieldTransform(t){const e=vp(this,t,!0),n=this.ha.map((t=>xp(t,e))),r=new Po(n);return new Ko(t.path,r)}isEqual(t){return this===t}}class Ip extends ap{constructor(t,e){super(t),this.ha=e}_toFieldTransform(t){const e=vp(this,t,!0),n=this.ha.map((t=>xp(t,e))),r=new Bo(n);return new Ko(t.path,r)}isEqual(t){return this===t}}class _p extends ap{constructor(t,e){super(t),this.la=e}_toFieldTransform(t){const e=new jo(t.wt,No(t.wt,this.la));return new Ko(t.path,e)}isEqual(t){return this===t}}function Ep(t,e,n,r){const s=t.aa(1,e,n);Dp("Data must be an object, but it was:",s,r);const i=[],o=Bi.empty();Qs(r,((t,r)=>{const a=Op(e,t,n);r=(0,c.m9)(r);const u=s.ia(a);if(r instanceof yp)i.push(a);else{const t=xp(r,u);null!=t&&(i.push(a),o.set(a,t))}}));const a=new ri(i);return new hp(o,a,s.fieldTransforms)}function Tp(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[kp(e,r,n)],u=[s];if(i.length%2!=0)throw new es(ts.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<i.length;c+=2)a.push(kp(e,i[c])),u.push(i[c+1]);const l=[],h=Bi.empty();for(let f=a.length-1;f>=0;--f)if(!Lp(l,a[f])){const t=a[f];let e=u[f];e=(0,c.m9)(e);const n=o.ia(t);if(e instanceof yp)l.push(t);else{const r=xp(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new ri(l);return new hp(h,d,o.fieldTransforms)}function Sp(t,e,n,r=!1){return xp(n,t.aa(r?4:3,e))}function xp(t,e){if(Cp(t=(0,c.m9)(t)))return Dp("Unsupported field value:",e,t),Ap(t,e);if(t instanceof ap)return function(t,e){if(!dp(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=xp(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,c.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return No(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=gs.fromDate(t);return{timestampValue:Ba(e.wt,n)}}if(t instanceof gs){const n=new gs(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ba(e.wt,n)}}if(t instanceof cp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof op)return{bytesValue:Ua(e.wt,t._byteString)};if(t instanceof Lf){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Cf(t)}`)}(t,e)}function Ap(t,e){const n={};return Js(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,((t,r)=>{const s=xp(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Cp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof gs||t instanceof cp||t instanceof op||t instanceof Lf||t instanceof ap)}function Dp(t,e,n){if(!Cp(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Cf(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function kp(t,e,n){if((e=(0,c.m9)(e))instanceof ip)return e._internalPath;if("string"==typeof e)return Op(t,e);throw Rp("Field path arguments must be of type string or ",t,!1,void 0,n)}const Np=new RegExp("[~\\*/\\[\\]]");function Op(t,e,n){if(e.search(Np)>=0)throw Rp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ip(...e.split("."))._internalPath}catch(r){throw Rp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rp(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new es(ts.INVALID_ARGUMENT,a+t+c)}function Lp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Fp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Fp extends Mp{data(){return super.data()}}function Pp(t,e){return"string"==typeof e?Op(t,e):e instanceof ip?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bp extends Mp{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Up(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Up extends Bp{data(t={}){return super.data(t)}}class jp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Vp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Up(this._firestore,this._userDataWriter,n.key,n,new Vp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new es(ts.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Up(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Vp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Up(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Vp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:qp(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Jr()}}function $p(t,e){return t instanceof Bp&&e instanceof Bp?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof jp&&e instanceof jp&&t._firestore===e._firestore&&jf(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new es(ts.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gp{}function zp(t,...e){for(const n of e)t=n._apply(t);return t}class Hp extends Gp{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=mp(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){cm(o,i);const e=[];for(const n of o)e.push(am(r,t,n));a={arrayValue:{values:e}}}else a=am(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||cm(o,i),a=Sp(n,e,o,"in"===i||"not-in"===i);const c=Yi.create(s,i,a);return function(t,e){if(e.ht()){const n=yo(t);if(null!==n&&!n.isEqual(e.field))throw new es(ts.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=go(t);null!==r&&um(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new es(ts.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new es(ts.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Mf(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Wp(t,e,n){const r=e,s=Pp("where",t);return new Hp(s,r,n)}class Qp extends Gp{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new es(ts.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new es(ts.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ao(e,n);return function(t,e){if(null===go(t)){const n=yo(t);null!==n&&um(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new Mf(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ho(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Jp(t,e="asc"){const n=e,r=Pp("orderBy",t);return new Qp(r,n)}class Yp extends Gp{constructor(t,e,n){super(),this.type=t,this.ma=e,this.ga=n}_apply(t){return new Mf(t.firestore,t.converter,Io(t._query,this.ma,this.ga))}}function Xp(t){return kf("limit",t),new Yp("limit",t,"F")}function Zp(t){return kf("limitToLast",t),new Yp("limitToLast",t,"L")}class tm extends Gp{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=om(t,this.type,this.ya,this.pa);return new Mf(t.firestore,t.converter,function(t,e){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function em(...t){return new tm("startAt",t,!0)}function nm(...t){return new tm("startAfter",t,!1)}class rm extends Gp{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=om(t,this.type,this.ya,this.pa);return new Mf(t.firestore,t.converter,function(t,e){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function sm(...t){return new rm("endBefore",t,!1)}function im(...t){return new rm("endAt",t,!0)}function om(t,e,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Mp)return function(t,e,n,r,s){if(!r)throw new es(ts.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of wo(t))if(o.field.isKeyField())i.push(Ai(e,r.key));else{const t=r.data.field(o.field);if(li(t))throw new es(ts.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new es(ts.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new oo(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=mp(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new es(ts.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new es(ts.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!vo(t)&&-1!==i.indexOf("/"))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(ws.fromString(i));if(!_s.isDocumentKey(n))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new _s(n);a.push(Ai(e,s))}else{const t=Sp(n,r,i);a.push(t)}}return new oo(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function am(t,e,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new es(ts.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vo(e)&&-1!==n.indexOf("/"))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ws.fromString(n));if(!_s.isDocumentKey(r))throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ai(t,new _s(r))}if(n instanceof Lf)return Ai(t,n._key);throw new es(ts.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cf(n)}.`)}function cm(t,e){if(!Array.isArray(t)||0===t.length)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new es(ts.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function um(t,e,n){if(!n.isEqual(e))throw new es(ts.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{convertValue(t,e="none"){switch(bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ci(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ui(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Jr()}}convertObject(t,e){const n={};return Qs(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new cp(ci(t.latitude),ci(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=hi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(di(t));default:return null}}convertTimestamp(t){const e=ai(t);return new gs(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=ws.fromString(t);Yr(gc(n));const r=new pi(n.get(1),n.get(3)),s=new _s(n.popFirst(5));return r.isEqual(e)||Hr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fm extends hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new op(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lf(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=mp(t)}set(t,e,n){this._verifyNotCommitted();const r=mm(t,this._firestore),s=dm(r.converter,e,n),i=gp(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Ho.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const s=mm(t,this._firestore);let i;return i="string"==typeof(e=(0,c.m9)(e))||e instanceof ip?Tp(this._dataReader,"WriteBatch.update",s._key,e,n,r):Ep(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(i.toMutation(s._key,Ho.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=mm(t,this._firestore);return this._mutations=this._mutations.concat(new oa(e._key,Ho.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new es(ts.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mm(t,e){if((t=(0,c.m9)(t)).firestore!==e)throw new es(ts.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){t=Df(t,Lf);const e=Df(t.firestore,zf);return gf(Hf(e),t._key).then((n=>km(e,t,n)))}class ym extends hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new op(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Lf(this.firestore,null,e)}}function vm(t){t=Df(t,Lf);const e=Df(t.firestore,zf),n=Hf(e),r=new ym(e);return mf(n,t._key).then((n=>new Bp(e,r,t._key,n,new Vp(null!==n&&n.hasLocalMutations,!0),t.converter)))}function wm(t){t=Df(t,Lf);const e=Df(t.firestore,zf);return gf(Hf(e),t._key,{source:"server"}).then((n=>km(e,t,n)))}function bm(t){t=Df(t,Mf);const e=Df(t.firestore,zf),n=Hf(e),r=new ym(e);return Kp(t._query),vf(n,t._query).then((n=>new jp(e,r,t,n)))}function Im(t){t=Df(t,Mf);const e=Df(t.firestore,zf),n=Hf(e),r=new ym(e);return yf(n,t._query).then((n=>new jp(e,r,t,n)))}function _m(t){t=Df(t,Mf);const e=Df(t.firestore,zf),n=Hf(e),r=new ym(e);return vf(n,t._query,{source:"server"}).then((n=>new jp(e,r,t,n)))}function Em(t,e,n){t=Df(t,Lf);const r=Df(t.firestore,zf),s=dm(t.converter,e,n);return Dm(r,[gp(mp(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Ho.none())])}function Tm(t,e,n,...r){t=Df(t,Lf);const s=Df(t.firestore,zf),i=mp(s);let o;return o="string"==typeof(e=(0,c.m9)(e))||e instanceof ip?Tp(i,"updateDoc",t._key,e,n,r):Ep(i,"updateDoc",t._key,e),Dm(s,[o.toMutation(t._key,Ho.exists(!0))])}function Sm(t){return Dm(Df(t.firestore,zf),[new oa(t._key,Ho.none())])}function xm(t,e){const n=Df(t.firestore,zf),r=Bf(t),s=dm(t.converter,e);return Dm(n,[gp(mp(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Ho.exists(!1))]).then((()=>r))}function Am(t,...e){var n,r,s;t=(0,c.m9)(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||$f(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($f(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,l,h;if(t instanceof Lf)l=Df(t.firestore,zf),h=po(t._key.path),u={next:n=>{e[o]&&e[o](km(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Df(t,Mf);l=Df(n.firestore,zf),h=n._query;const r=new ym(l);u={next:t=>{e[o]&&e[o](new jp(l,r,n,t))},error:e[o+1],complete:e[o+2]},Kp(t._query)}return function(t,e,n,r){const s=new Xd(r),i=new sd(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Zh(await df(t),i))),()=>{s.Tc(),t.asyncQueue.enqueueAndForget((async()=>td(await df(t),i)))}}(Hf(l),h,a,u)}function Cm(t,e){return wf(Hf(t=Df(t,zf)),$f(e)?e:{next:e})}function Dm(t,e){return function(t,e){const n=new ns;return t.asyncQueue.enqueueAndForget((async()=>vd(await hf(t),e,n))),n.promise}(Hf(t),e)}function km(t,e,n){const r=n.docs.get(e._key),s=new ym(t);return new Bp(t,s,e._key,r,new Vp(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=mp(t)}get(t){const e=mm(t,this._firestore),n=new fm(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Jr();const r=t[0];if(r.isFoundDocument())return new Mp(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Mp(this._firestore,n,e._key,null,e.converter);throw Jr()}))}set(t,e,n){const r=mm(t,this._firestore),s=dm(r.converter,e,n),i=gp(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=mm(t,this._firestore);let i;return i="string"==typeof(e=(0,c.m9)(e))||e instanceof ip?Tp(this._dataReader,"Transaction.update",s._key,e,n,r):Ep(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=mm(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=mm(t,this._firestore),n=new ym(this._firestore);return super.get(t).then((t=>new Bp(this._firestore,n,e._key,t._document,new Vp(!1,!1),e.converter)))}}function Om(t,e,n){t=Df(t,zf);const r=Object.assign(Object.assign({},lm),n);return function(t){if(t.maxAttempts<1)throw new es(ts.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),bf(Hf(t),(n=>e(new Nm(t,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){return new yp("deleteField")}function Lm(){return new wp("serverTimestamp")}function Mm(...t){return new bp("arrayUnion",t)}function Fm(...t){return new Ip("arrayRemove",t)}function Pm(t){return new _p("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){qr=t}(i.SDK_VERSION),(0,i._registerComponent)(new o.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new zf(r,new os(t.getProvider("auth-internal")),new ls(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,i.registerVersion)(Ur,"3.4.12",t),(0,i.registerVersion)(Ur,"3.4.12","esm2017")}();const Vm="@firebase/firestore-compat",Bm="0.1.21";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Um(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new es("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(){if("undefined"===typeof Uint8Array)throw new es("unimplemented","Uint8Arrays are not available in this environment.")}function qm(){if(!si())throw new es("unimplemented","Blobs are unavailable in Firestore in this environment.")}class $m{constructor(t){this._delegate=t}static fromBase64String(t){return qm(),new $m(op.fromBase64String(t))}static fromUint8Array(t){return jm(),new $m(op.fromUint8Array(t))}toBase64(){return qm(),this._delegate.toBase64()}toUint8Array(){return jm(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){return Gm(t,["next","error","complete"])}function Gm(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{enableIndexedDbPersistence(t,e){return Qf(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Jf(t._delegate)}clearIndexedDbPersistence(t){return Xf(t._delegate)}}class Hm{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof pi||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Wr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Rf(this._delegate,t,e,n)}enableNetwork(){return tp(this._delegate)}disableNetwork(){return ep(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Sf("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Zf(this._delegate)}onSnapshotsInSync(t){return Cm(this._delegate,t)}get app(){if(!this._appCompat)throw new es("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new cg(this,Pf(this._delegate,t))}catch(e){throw tg(e,"collection()","Firestore.collection()")}}doc(t){try{return new Zm(this,Bf(this._delegate,t))}catch(e){throw tg(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new ig(this,Vf(this._delegate,t))}catch(e){throw tg(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Om(this._delegate,(e=>t(new Jm(this,e))))}batch(){return Hf(this._delegate),new Ym(new pm(this._delegate,(t=>Dm(this._delegate,t))))}loadBundle(t){return np(this._delegate,t)}namedQuery(t){return rp(this._delegate,t).then((t=>t?new ig(this,t):null))}}class Wm extends hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new $m(new op(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return Zm.forKey(e,this.firestore,null)}}function Qm(t){Gr(t)}class Jm{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Wm(t)}get(t){const e=ug(t);return this._delegate.get(e).then((t=>new rg(this._firestore,new Bp(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const r=ug(t);return n?(Um("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=ug(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=ug(t);return this._delegate.delete(e),this}}class Ym{constructor(t){this._delegate=t}set(t,e,n){const r=ug(t);return n?(Um("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=ug(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=ug(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class Xm{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new Up(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new sg(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=Xm.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let s=r.get(e);return s||(s=new Xm(t,new Wm(t),e),r.set(e,s)),s}}Xm.INSTANCES=new WeakMap;class Zm{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Wm(t)}static forPath(t,e,n){if(t.length%2!==0)throw new es("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new Zm(e,new Lf(e._delegate,n,new _s(t)))}static forKey(t,e,n){return new Zm(e,new Lf(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new cg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new cg(this.firestore,Pf(this._delegate,t))}catch(e){throw tg(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=(0,c.m9)(t),t instanceof Lf&&Uf(this._delegate,t)}set(t,e){e=Um("DocumentReference.set",e);try{return e?Em(this._delegate,t,e):Em(this._delegate,t)}catch(n){throw tg(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Tm(this._delegate,t):Tm(this._delegate,t,e,...n)}catch(r){throw tg(r,"updateDoc()","DocumentReference.update()")}}delete(){return Sm(this._delegate)}onSnapshot(...t){const e=eg(t),n=ng(t,(t=>new rg(this.firestore,new Bp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return Am(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?vm(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?wm(this._delegate):gm(this._delegate),e.then((t=>new rg(this.firestore,new Bp(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new Zm(this.firestore,t?this._delegate.withConverter(Xm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function tg(t,e,n){return t.message=t.message.replace(e,n),t}function eg(t){for(const e of t)if("object"===typeof e&&!Km(e))return e;return{}}function ng(t,e){var n,r;let s;return s=Km(t[0])?t[0]:Km(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{s.next&&s.next(e(t))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class rg{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new Zm(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return $p(this._delegate,t._delegate)}}class sg extends rg{data(t){const e=this._delegate.data(t);return Xr(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class ig{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Wm(t)}where(t,e,n){try{return new ig(this.firestore,zp(this._delegate,Wp(t,e,n)))}catch(r){throw tg(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new ig(this.firestore,zp(this._delegate,Jp(t,e)))}catch(n){throw tg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new ig(this.firestore,zp(this._delegate,Xp(t)))}catch(e){throw tg(e,"limit()","Query.limit()")}}limitToLast(t){try{return new ig(this.firestore,zp(this._delegate,Zp(t)))}catch(e){throw tg(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new ig(this.firestore,zp(this._delegate,em(...t)))}catch(e){throw tg(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new ig(this.firestore,zp(this._delegate,nm(...t)))}catch(e){throw tg(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new ig(this.firestore,zp(this._delegate,sm(...t)))}catch(e){throw tg(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new ig(this.firestore,zp(this._delegate,im(...t)))}catch(e){throw tg(e,"endAt()","Query.endAt()")}}isEqual(t){return jf(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Im(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?_m(this._delegate):bm(this._delegate),e.then((t=>new ag(this.firestore,new jp(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=eg(t),n=ng(t,(t=>new ag(this.firestore,new jp(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return Am(this._delegate,e,n)}withConverter(t){return new ig(this.firestore,t?this._delegate.withConverter(Xm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class og{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new sg(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ag{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new ig(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new sg(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new og(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new sg(this._firestore,n))}))}isEqual(t){return $p(this._delegate,t._delegate)}}class cg extends ig{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new Zm(this.firestore,t):null}doc(t){try{return new Zm(this.firestore,void 0===t?Bf(this._delegate):Bf(this._delegate,t))}catch(e){throw tg(e,"doc()","CollectionReference.doc()")}}add(t){return xm(this._delegate,t).then((t=>new Zm(this.firestore,t)))}isEqual(t){return Uf(this._delegate,t._delegate)}withConverter(t){return new cg(this.firestore,t?this._delegate.withConverter(Xm.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function ug(t){return Df(t,Lf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(...t){this._delegate=new ip(...t)}static documentId(){return new lg(Is.keyField().canonicalString())}isEqual(t){return t=(0,c.m9)(t),t instanceof ip&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(t){this._delegate=t}static serverTimestamp(){const t=Lm();return t._methodName="FieldValue.serverTimestamp",new hg(t)}static delete(){const t=Rm();return t._methodName="FieldValue.delete",new hg(t)}static arrayUnion(...t){const e=Mm(...t);return e._methodName="FieldValue.arrayUnion",new hg(e)}static arrayRemove(...t){const e=Fm(...t);return e._methodName="FieldValue.arrayRemove",new hg(e)}static increment(t){const e=Pm(t);return e._methodName="FieldValue.increment",new hg(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={Firestore:Hm,GeoPoint:cp,Timestamp:gs,Blob:$m,Transaction:Jm,WriteBatch:Ym,DocumentReference:Zm,DocumentSnapshot:rg,Query:ig,QueryDocumentSnapshot:sg,QuerySnapshot:ag,CollectionReference:cg,FieldPath:lg,FieldValue:hg,setLogLevel:Qm,CACHE_SIZE_UNLIMITED:Gf};function fg(t,e){t.INTERNAL.registerComponent(new o.wA("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)}),"PUBLIC").setServiceProps(Object.assign({},dg)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t){fg(t,((t,e)=>new Hm(t,e,new zm))),t.registerVersion(Vm,Bm)}pg(s.Z)},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},2661:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(223),s=n(7142),i=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,(0,i._addComponent)(t,new s.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,i.deleteApp)(this._delegate))))}_getService(t,e=i._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=i._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,i._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,i._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:i.registerVersion,setLogLevel:i.setLogLevel,onLog:i.onLog,apps:null,SDK_VERSION:i.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:s,useAsService:h,modularAPIs:i}};function s(t){delete e[t]}function o(t){if(t=t||i._DEFAULT_ENTRY_NAME,!(0,r.r3)(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(s,o={}){const a=i.initializeApp(s,o);if((0,r.r3)(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map((t=>e[t]))}function l(e){const s=e.name,a=s.replace("-compat","");if(i._registerComponent(e)&&"PUBLIC"===e.type){const i=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:s});return t[a]()};void 0!==e.serviceProps&&(0,r.ZB)(i,e.serviceProps),n[a]=i,t.prototype[a]=function(...t){const n=this._getService.bind(this,s);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){(0,r.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),t}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.29";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){(0,i.registerVersion)(p,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},7077:function(t,e,n){"use strict";n.r(e),n.d(e,{FirebaseError:function(){return i.ZR},SDK_VERSION:function(){return vt},_DEFAULT_ENTRY_NAME:function(){return it},_addComponent:function(){return ut},_addOrOverwriteComponent:function(){return lt},_apps:function(){return at},_clearComponents:function(){return pt},_components:function(){return ct},_getProvider:function(){return dt},_registerComponent:function(){return ht},_removeServiceInstance:function(){return ft},deleteApp:function(){return _t},getApp:function(){return bt},getApps:function(){return It},initializeApp:function(){return wt},onLog:function(){return Tt},registerVersion:function(){return Et},setLogLevel:function(){return St}});var r=n(7142),s=n(5168),i=n(223);n(6699),n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function y(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));d.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(E(this),e),_(h.get(this))}:function(...e){return _(t.apply(E(this),e))}:function(e,...n){const r=t.call(E(this),e,...n);return f.set(r,e.sort?e.sort():[e]),_(r)}}function I(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=I(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const E=t=>m.get(t);function T(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],A=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>C(e,n)||t.get(e,n,r),has:(e,n)=>!!C(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",O="0.7.28",R=new s.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",F="@firebase/analytics",P="@firebase/app-check-compat",V="@firebase/app-check",B="@firebase/auth",U="@firebase/auth-compat",j="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",K="@firebase/functions-compat",G="@firebase/installations",z="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",J="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.9.0",it="[DEFAULT]",ot={[N]:"fire-core",[L]:"fire-core-compat",[F]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[P]:"fire-app-check-compat",[B]:"fire-auth",[U]:"fire-auth-compat",[j]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[K]:"fire-fn-compat",[G]:"fire-iid",[z]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[J]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t,e){t.container.addOrOverwriteComponent(e)}function ht(t){const e=t.name;if(ct.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t,e,n=it){dt(t,e).clearInstance(n)}function pt(){ct.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},gt=new i.LL("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=st;function wt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw gt.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw gt.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ct.values())a.addComponent(r);const c=new yt(t,n,a);return at.set(s,c),c}function bt(t=it){const e=at.get(t);if(!e)throw gt.create("no-app",{appName:t});return e}function It(){return Array.from(at.values())}async function _t(t){const e=t.name;at.has(e)&&(at.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function Et(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}ht(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}function Tt(t,e){if(null!==t&&"function"!==typeof t)throw gt.create("invalid-log-argument");(0,s.Am)(t,e)}function St(t){(0,s.Ub)(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="firebase-heartbeat-database",At=1,Ct="firebase-heartbeat-store";let Dt=null;function kt(){return Dt||(Dt=T(xt,At,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ct)}}}).catch((t=>{throw gt.create("storage-open",{originalErrorMessage:t.message})}))),Dt}async function Nt(t){var e;try{const e=await kt();return e.transaction(Ct).objectStore(Ct).get(Rt(t))}catch(n){throw gt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Ot(t,e){var n;try{const n=await kt(),r=n.transaction(Ct,"readwrite"),s=r.objectStore(Ct);return await s.put(e,Rt(t)),r.done}catch(r){throw gt.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function Rt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=1024,Mt=2592e6;class Ft{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Mt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pt(),{heartbeatsToSend:e,unsentEntries:n}=Vt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pt(){const t=new Date;return t.toISOString().substring(0,10)}function Vt(t,e=Lt){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Nt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){ht(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),ht(new r.wA("heartbeat",(t=>new Ft(t)),"PRIVATE")),Et(N,O,t),Et(N,O,"esm2017"),Et("fire-js","")}jt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return s}});n(1703);var r=n(223);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return s}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach((e=>{e.setLogLevel(t)}))}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.4c108293.js.map