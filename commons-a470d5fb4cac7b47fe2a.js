(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{1624:function(t){"use strict";t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/cfs/static/6994b4c41930cc8777694e2ca808fa97/b5df7/logo_white.png","srcSet":"/cfs/static/6994b4c41930cc8777694e2ca808fa97/3c755/logo_white.png 27w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/b1ede/logo_white.png 55w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/b5df7/logo_white.png 109w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/d139e/logo_white.png 218w","sizes":"(min-width: 109px) 109px, 100vw"},"sources":[{"srcSet":"/cfs/static/6994b4c41930cc8777694e2ca808fa97/29e1f/logo_white.avif 27w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/cda45/logo_white.avif 55w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/dd6ea/logo_white.avif 109w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/ddafa/logo_white.avif 218w","type":"image/avif","sizes":"(min-width: 109px) 109px, 100vw"},{"srcSet":"/cfs/static/6994b4c41930cc8777694e2ca808fa97/015a3/logo_white.webp 27w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/735c8/logo_white.webp 55w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/501bf/logo_white.webp 109w,\\n/cfs/static/6994b4c41930cc8777694e2ca808fa97/d5035/logo_white.webp 218w","type":"image/webp","sizes":"(min-width: 109px) 109px, 100vw"}]},"width":109,"height":38}')},7606:function(t,e,r){"use strict";r.d(e,{G:function(){return g}});r(5827);var n=r(4694),o=r(5697),i=r.n(o),a=r(7294);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function y(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=d(e.slice(0,n)),i=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=i:t[o]=i,t}),{})}var b=!1;try{b=!0}catch(w){}function m(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===c(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function h(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?s({},t,e):{}}function g(t){var e=t.forwardedRef,r=f(t,["forwardedRef"]),o=r.icon,i=r.mask,a=r.symbol,c=r.className,u=r.title,d=r.titleId,y=m(o),w=h("classes",[].concat(p(function(t){var e,r=t.spin,n=t.pulse,o=t.fixedWidth,i=t.inverse,a=t.border,c=t.listItem,u=t.flip,l=t.size,f=t.rotation,p=t.pull,d=(s(e={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":i,"fa-border":a,"fa-li":c,"fa-flip-horizontal":"horizontal"===u||"both"===u,"fa-flip-vertical":"vertical"===u||"both"===u},"fa-".concat(l),null!=l),s(e,"fa-rotate-".concat(f),null!=f&&0!==f),s(e,"fa-pull-".concat(p),null!=p),s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(d).map((function(t){return d[t]?t:null})).filter((function(t){return t}))}(r)),p(c.split(" ")))),T=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),O=h("mask",m(i)),A=(0,n.icon)(y,l({},w,{},T,{},O,{symbol:a,title:u,titleId:d}));if(!A)return function(){var t;!b&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var E=A.abstract,S={ref:e};return Object.keys(r).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(S[t]=r[t])})),v(E[0],S)}g.displayName="FontAwesomeIcon",g.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),i=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=y(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[d(e)]=n}return t}),{attrs:{}}),a=n.style,c=void 0===a?{}:a,s=f(n,["style"]);return i.attrs.style=l({},i.attrs.style,{},c),e.apply(void 0,[r.tag,l({},i.attrs,{},s)].concat(p(o)))}.bind(null,a.createElement)},2993:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(t[s],a[s]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(n&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(t[s]!==a[s])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(e&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!i(t[u[s]],a[u[s]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(t,e,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=t(u.map((function(t){return t.props}))),f.canUseDOM?e(s):r&&(s=r(s))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,u=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},9219:function(t,e,r){"use strict";var n=r(3552),o=r(7294),i=r(410),a=r(7606),c=r(8014),s=r(5444),u=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={back:r.props.back},r}return(0,n.Z)(e,t),e.prototype.render=function(){var t=o.createElement("button",{className:"btn btn-back"},o.createElement(a.G,{icon:c.A35}));return o.createElement("header",{className:"shadow"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col-3"},null!=this.state.back?t:null),o.createElement("div",{className:"col"},o.createElement(s.Link,{to:"/"},o.createElement(i.S,{src:"../images/logo_white.png",height:38,quality:95,formats:["AUTO","WEBP","AVIF"],alt:"Feed Sharmaine Everyday",__imageData:r(1624)}))),o.createElement("div",{className:"col-3"})))},e}(o.Component);e.Z=u},7198:function(t,e,r){"use strict";var n=r(7294),o=r(9219);e.Z=function(t){var e=t.children;return n.createElement(n.Fragment,null,n.createElement(o.Z,null),n.createElement("main",null,e))}},3751:function(t,e,r){"use strict";r.d(e,{Z:function(){return gt}});var n,o,i,a,c=r(7294),s=(r(5827),r(5697)),u=r.n(s),l=r(4839),f=r.n(l),p=r(2993),d=r.n(p),y=r(6494),b=r.n(y),m="bodyAttributes",h="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),T="cssText",O="href",A="http-equiv",E="innerHTML",S="itemprop",C="name",j="property",x="rel",k="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},H=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Y=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},W=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(t){var e=Q(t,v.TITLE),r=Q(t,R);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=Q(t,L);return e||n||void 0},V=function(t){return Q(t,M)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},J=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+F(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===e.indexOf(s)||r===x&&"canonical"===t[r].toLowerCase()||s===x&&"stylesheet"===t[s].toLowerCase()||(r=s),-1===e.indexOf(c)||c!==E&&c!==T&&c!==S||(r=c)}if(!r||!t[r])return!1;var u=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=b()({},n[c],o[c]);n[c]=s}return t}),[]).reverse()},Q=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},X=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:r.g.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,u=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;st(v.BODY,n),st(v.HTML,o),ct(f,p);var d={baseTag:ut(v.BASE,r),linkTags:ut(v.LINK,i),metaTags:ut(v.META,a),noscriptTags:ut(v.NOSCRIPT,c),scriptTags:ut(v.SCRIPT,u),styleTags:ut(v.STYLE,l)},y={},b={};Object.keys(d).forEach((function(t){var e=d[t],r=e.newTags,n=e.oldTags;r.length&&(y[t]=r),n.length&&(b[t]=d[t].oldTags)})),e&&e(),s(t,y,b)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),st(v.TITLE,e)},st=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(B),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var s=a[c],u=e[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==a.join(",")&&r.setAttribute(B,a.join(","))}},ut=function(t,e){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===E)r.innerHTML=e.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[n]?"":e[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[I[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[B]=!0,o=ft(r,n),[c.createElement(v.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=lt(r),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case m:case h:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[B]=!0,n);return Object.keys(e).forEach((function(t){var r=I[t]||t;if(r===E||r===T){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),c.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===E||t===T)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+K(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===z.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},dt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,s=t.scriptTags,u=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(v.BASE,e,n),bodyAttributes:pt(m,r,n),htmlAttributes:pt(h,o,n),link:pt(v.LINK,i,n),meta:pt(v.META,a,n),noscript:pt(v.NOSCRIPT,c,n),script:pt(v.SCRIPT,s,n),style:pt(v.STYLE,u,n),title:pt(v.TITLE,{title:f,titleAttributes:p},n)}},yt=f()((function(t){return{baseTag:$([O,P],t),bodyAttributes:G(m,t),defer:Q(t,N),encode:Q(t,_),htmlAttributes:G(h,t),linkTags:J(v.LINK,[x,O],t),metaTags:J(v.META,[C,w,A,j,S],t),noscriptTags:J(v.NOSCRIPT,[E],t),onChangeClientState:V(t),scriptTags:J(v.SCRIPT,[k,E],t),styleTags:J(v.STYLE,[T],t),title:Z(t),titleAttributes:G(g,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),bt=(o=yt,a=i=function(t){function e(){return q(this,e),W(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return U({},n,((e={})[r.type]=[].concat(n[r.type]||[],[U({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case v.TITLE:return U({},o,((e={})[n.type]=a,e.titleAttributes=U({},i),e));case v.BODY:return U({},o,{bodyAttributes:U({},i)});case v.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((r={})[n.type]=U({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=U({},e);return Object.keys(t).forEach((function(e){var n;r=U({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return c.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[D[r]||r]=t[r],e}),e)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=Y(t,["children"]),n=U({},r);return e&&(n=this.mapChildrenToProps(e,n)),c.createElement(o,n)},H(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);bt.renderStatic=bt.rewind;var mt=r(5444);function ht(t){var e,r,n=t.description,o=t.lang,i=t.meta,a=t.title,s=(0,mt.useStaticQuery)("63159454").site,u=n||s.siteMetadata.description,l=null===(e=s.siteMetadata)||void 0===e?void 0:e.title;return c.createElement(bt,{htmlAttributes:{lang:o},title:a,titleTemplate:l?"%s | "+l:null,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=s.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:u}].concat(i)})}ht.defaultProps={lang:"en",meta:[],description:""};var gt=ht}}]);
//# sourceMappingURL=commons-a470d5fb4cac7b47fe2a.js.map