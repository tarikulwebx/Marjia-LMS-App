/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs5/dt-1.11.5/sp-2.0.0/sr-1.1.0
 *
 * Included libraries:
 *   DataTables 1.11.5, SearchPanes 2.0.0, StateRestore 1.1.0
 */

/*!
   Copyright 2008-2021 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.11.5
 ©2008-2021 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(l,z,A){l instanceof String&&(l=String(l));for(var q=l.length,E=0;E<q;E++){var P=l[E];if(z.call(A,P,E,l))return{i:E,v:P}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(l,z,A){if(l==Array.prototype||l==Object.prototype)return l;l[z]=A.value;return l};$jscomp.getGlobal=function(l){l=["object"==typeof globalThis&&globalThis,l,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var z=0;z<l.length;++z){var A=l[z];if(A&&A.Math==Math)return A}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(l,z){var A=$jscomp.propertyToPolyfillSymbol[z];if(null==A)return l[z];A=l[A];return void 0!==A?A:l[z]};
$jscomp.polyfill=function(l,z,A,q){z&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(l,z,A,q):$jscomp.polyfillUnisolated(l,z,A,q))};$jscomp.polyfillUnisolated=function(l,z,A,q){A=$jscomp.global;l=l.split(".");for(q=0;q<l.length-1;q++){var E=l[q];if(!(E in A))return;A=A[E]}l=l[l.length-1];q=A[l];z=z(q);z!=q&&null!=z&&$jscomp.defineProperty(A,l,{configurable:!0,writable:!0,value:z})};
$jscomp.polyfillIsolated=function(l,z,A,q){var E=l.split(".");l=1===E.length;q=E[0];q=!l&&q in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var P=0;P<E.length-1;P++){var ma=E[P];if(!(ma in q))return;q=q[ma]}E=E[E.length-1];A=$jscomp.IS_SYMBOL_NATIVE&&"es6"===A?q[E]:null;z=z(A);null!=z&&(l?$jscomp.defineProperty($jscomp.polyfills,E,{configurable:!0,writable:!0,value:z}):z!==A&&($jscomp.propertyToPolyfillSymbol[E]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(E):$jscomp.POLYFILL_PREFIX+E,
E=$jscomp.propertyToPolyfillSymbol[E],$jscomp.defineProperty(q,E,{configurable:!0,writable:!0,value:z})))};$jscomp.polyfill("Array.prototype.find",function(l){return l?l:function(z,A){return $jscomp.findInternal(this,z,A).v}},"es6","es3");
(function(l){"function"===typeof define&&define.amd?define(["jquery"],function(z){return l(z,window,document)}):"object"===typeof exports?module.exports=function(z,A){z||(z=window);A||(A="undefined"!==typeof window?require("jquery"):require("jquery")(z));return l(A,z,z.document)}:window.DataTable=l(jQuery,window,document)})(function(l,z,A,q){function E(a){var b,c,d={};l.each(a,function(e,h){(b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" ")&&(c=e.replace(b[0],
b[2].toLowerCase()),d[c]=e,"o"===b[1]&&E(a[e]))});a._hungarianMap=d}function P(a,b,c){a._hungarianMap||E(a);var d;l.each(b,function(e,h){d=a._hungarianMap[e];d===q||!c&&b[d]!==q||("o"===d.charAt(0)?(b[d]||(b[d]={}),l.extend(!0,b[d],b[e]),P(a[d],b[d],c)):b[d]=b[e])})}function ma(a){var b=u.defaults.oLanguage,c=b.sDecimal;c&&Xa(c);if(a){var d=a.sZeroRecords;!a.sEmptyTable&&d&&"No data available in table"===b.sEmptyTable&&X(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&d&&"Loading..."===b.sLoadingRecords&&
X(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&c!==a&&Xa(a)}}function zb(a){S(a,"ordering","bSort");S(a,"orderMulti","bSortMulti");S(a,"orderClasses","bSortClasses");S(a,"orderCellsTop","bSortCellsTop");S(a,"order","aaSorting");S(a,"orderFixed","aaSortingFixed");S(a,"paging","bPaginate");S(a,"pagingType","sPaginationType");S(a,"pageLength","iDisplayLength");S(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":
"");"boolean"===typeof a.scrollX&&(a.scrollX=a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&P(u.models.oSearch,a[b])}function Ab(a){S(a,"orderable","bSortable");S(a,"orderData","aDataSort");S(a,"orderSequence","asSorting");S(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"!==typeof b||Array.isArray(b)||(a.aDataSort=[b])}function Bb(a){if(!u.__browser){var b={};u.__browser=b;var c=l("<div/>").css({position:"fixed",top:0,left:-1*l(z).scrollLeft(),height:1,
width:1,overflow:"hidden"}).append(l("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(l("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}l.extend(a.oBrowser,u.__browser);a.oScroll.iBarWidth=u.__browser.barWidth}
function Cb(a,b,c,d,e,h){var f=!1;if(c!==q){var g=c;f=!0}for(;d!==e;)a.hasOwnProperty(d)&&(g=f?b(g,a[d],d,a):a[d],f=!0,d+=h);return g}function Ya(a,b){var c=u.defaults.column,d=a.aoColumns.length;c=l.extend({},u.models.oColumn,c,{nTh:b?b:A.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=l.extend({},u.models.oSearch,c[d]);Ga(a,d,l(b).data())}function Ga(a,b,c){b=a.aoColumns[b];
var d=a.oClasses,e=l(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var h=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);h&&(b.sWidthOrig=h[1])}c!==q&&null!==c&&(Ab(c),P(u.defaults.column,c,!0),c.mDataProp===q||c.mData||(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),c.sClass&&e.addClass(c.sClass),l.extend(b,c),X(b,c,"sWidth","sWidthOrig"),c.iDataSort!==q&&(b.aDataSort=[c.iDataSort]),X(b,c,"aDataSort"));var f=b.mData,g=na(f),
k=b.mRender?na(b.mRender):null;c=function(m){return"string"===typeof m&&-1!==m.indexOf("@")};b._bAttrSrc=l.isPlainObject(f)&&(c(f.sort)||c(f.type)||c(f.filter));b._setter=null;b.fnGetData=function(m,n,p){var t=g(m,n,q,p);return k&&n?k(t,n,m,p):t};b.fnSetData=function(m,n,p){return ha(f)(m,n,p)};"number"!==typeof f&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==l.inArray("asc",b.asSorting);c=-1!==l.inArray("desc",b.asSorting);b.bSortable&&(a||c)?a&&!c?
(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI):(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI="")}function sa(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Za(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;""===b.sY&&""===b.sX||Ha(a);F(a,null,"column-sizing",[a])}function ta(a,b){a=Ia(a,"bVisible");
return"number"===typeof a[b]?a[b]:null}function ua(a,b){a=Ia(a,"bVisible");b=l.inArray(b,a);return-1!==b?b:null}function oa(a){var b=0;l.each(a.aoColumns,function(c,d){d.bVisible&&"none"!==l(d.nTh).css("display")&&b++});return b}function Ia(a,b){var c=[];l.map(a.aoColumns,function(d,e){d[b]&&c.push(e)});return c}function $a(a){var b=a.aoColumns,c=a.aoData,d=u.ext.type.detect,e,h,f;var g=0;for(e=b.length;g<e;g++){var k=b[g];var m=[];if(!k.sType&&k._sManualType)k.sType=k._sManualType;else if(!k.sType){var n=
0;for(h=d.length;n<h;n++){var p=0;for(f=c.length;p<f;p++){m[p]===q&&(m[p]=T(a,p,g,"type"));var t=d[n](m[p],a);if(!t&&n!==d.length-1)break;if("html"===t&&!Z(m[p]))break}if(t){k.sType=t;break}}k.sType||(k.sType="string")}}}function Db(a,b,c,d){var e,h,f,g=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){var k=b[e];var m=k.targets!==q?k.targets:k.aTargets;Array.isArray(m)||(m=[m]);var n=0;for(h=m.length;n<h;n++)if("number"===typeof m[n]&&0<=m[n]){for(;g.length<=m[n];)Ya(a);d(m[n],k)}else if("number"===typeof m[n]&&
0>m[n])d(g.length+m[n],k);else if("string"===typeof m[n]){var p=0;for(f=g.length;p<f;p++)("_all"==m[n]||l(g[p].nTh).hasClass(m[n]))&&d(p,k)}}if(c)for(e=0,a=c.length;e<a;e++)d(e,c[e])}function ia(a,b,c,d){var e=a.aoData.length,h=l.extend(!0,{},u.models.oRow,{src:c?"dom":"data",idx:e});h._aData=b;a.aoData.push(h);for(var f=a.aoColumns,g=0,k=f.length;g<k;g++)f[g].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==q&&(a.aIds[b]=h);!c&&a.oFeatures.bDeferRender||ab(a,e,c,d);return e}function Ja(a,
b){var c;b instanceof l||(b=l(b));return b.map(function(d,e){c=bb(a,e);return ia(a,c.data,e,c.cells)})}function T(a,b,c,d){"search"===d?d="filter":"order"===d&&(d="sort");var e=a.iDraw,h=a.aoColumns[c],f=a.aoData[b]._aData,g=h.sDefaultContent,k=h.fnGetData(f,d,{settings:a,row:b,col:c});if(k===q)return a.iDrawError!=e&&null===g&&(da(a,0,"Requested unknown parameter "+("function"==typeof h.mData?"{function}":"'"+h.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),g;if((k===f||null===k)&&null!==
g&&d!==q)k=g;else if("function"===typeof k)return k.call(f);if(null===k&&"display"===d)return"";"filter"===d&&(a=u.ext.type.search,a[h.sType]&&(k=a[h.sType](k)));return k}function Eb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function cb(a){return l.map(a.match(/(\\.|[^\.])+/g)||[""],function(b){return b.replace(/\\\./g,".")})}function db(a){return U(a.aoData,"_aData")}function Ka(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}
function La(a,b,c){for(var d=-1,e=0,h=a.length;e<h;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===q&&a.splice(d,1)}function va(a,b,c,d){var e=a.aoData[b],h,f=function(k,m){for(;k.childNodes.length;)k.removeChild(k.firstChild);k.innerHTML=T(a,b,m,"display")};if("dom"!==c&&(c&&"auto"!==c||"dom"!==e.src)){var g=e.anCells;if(g)if(d!==q)f(g[d],d);else for(c=0,h=g.length;c<h;c++)f(g[c],c)}else e._aData=bb(a,e,d,d===q?q:e._aData).data;e._aSortData=null;e._aFilterData=null;f=a.aoColumns;if(d!==q)f[d].sType=null;
else{c=0;for(h=f.length;c<h;c++)f[c].sType=null;eb(a,e)}}function bb(a,b,c,d){var e=[],h=b.firstChild,f,g=0,k,m=a.aoColumns,n=a._rowReadObject;d=d!==q?d:n?{}:[];var p=function(x,w){if("string"===typeof x){var r=x.indexOf("@");-1!==r&&(r=x.substring(r+1),ha(x)(d,w.getAttribute(r)))}},t=function(x){if(c===q||c===g)f=m[g],k=x.innerHTML.trim(),f&&f._bAttrSrc?(ha(f.mData._)(d,k),p(f.mData.sort,x),p(f.mData.type,x),p(f.mData.filter,x)):n?(f._setter||(f._setter=ha(f.mData)),f._setter(d,k)):d[g]=k;g++};if(h)for(;h;){var v=
h.nodeName.toUpperCase();if("TD"==v||"TH"==v)t(h),e.push(h);h=h.nextSibling}else for(e=b.anCells,h=0,v=e.length;h<v;h++)t(e[h]);(b=b.firstChild?b:b.nTr)&&(b=b.getAttribute("id"))&&ha(a.rowId)(d,b);return{data:d,cells:e}}function ab(a,b,c,d){var e=a.aoData[b],h=e._aData,f=[],g,k;if(null===e.nTr){var m=c||A.createElement("tr");e.nTr=m;e.anCells=f;m._DT_RowIndex=b;eb(a,e);var n=0;for(g=a.aoColumns.length;n<g;n++){var p=a.aoColumns[n];e=(k=c?!1:!0)?A.createElement(p.sCellType):d[n];e._DT_CellIndex={row:b,
column:n};f.push(e);if(k||!(!p.mRender&&p.mData===n||l.isPlainObject(p.mData)&&p.mData._===n+".display"))e.innerHTML=T(a,b,n,"display");p.sClass&&(e.className+=" "+p.sClass);p.bVisible&&!c?m.appendChild(e):!p.bVisible&&c&&e.parentNode.removeChild(e);p.fnCreatedCell&&p.fnCreatedCell.call(a.oInstance,e,T(a,b,n),h,b,n)}F(a,"aoRowCreatedCallback",null,[m,h,b,f])}}function eb(a,b){var c=b.nTr,d=b._aData;if(c){if(a=a.rowIdFn(d))c.id=a;d.DT_RowClass&&(a=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?Ma(b.__rowc.concat(a)):
a,l(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&l(c).attr(d.DT_RowAttr);d.DT_RowData&&l(c).data(d.DT_RowData)}}function Fb(a){var b,c,d=a.nTHead,e=a.nTFoot,h=0===l("th, td",d).length,f=a.oClasses,g=a.aoColumns;h&&(c=l("<tr/>").appendTo(d));var k=0;for(b=g.length;k<b;k++){var m=g[k];var n=l(m.nTh).addClass(m.sClass);h&&n.appendTo(c);a.oFeatures.bSort&&(n.addClass(m.sSortingClass),!1!==m.bSortable&&(n.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),fb(a,m.nTh,
k)));m.sTitle!=n[0].innerHTML&&n.html(m.sTitle);gb(a,"header")(a,n,m,f)}h&&wa(a.aoHeader,d);l(d).children("tr").children("th, td").addClass(f.sHeaderTH);l(e).children("tr").children("th, td").addClass(f.sFooterTH);if(null!==e)for(a=a.aoFooter[0],k=0,b=a.length;k<b;k++)m=g[k],m.nTf=a[k].cell,m.sClass&&l(m.nTf).addClass(m.sClass)}function xa(a,b,c){var d,e,h=[],f=[],g=a.aoColumns.length;if(b){c===q&&(c=!1);var k=0;for(d=b.length;k<d;k++){h[k]=b[k].slice();h[k].nTr=b[k].nTr;for(e=g-1;0<=e;e--)a.aoColumns[e].bVisible||
c||h[k].splice(e,1);f.push([])}k=0;for(d=h.length;k<d;k++){if(a=h[k].nTr)for(;e=a.firstChild;)a.removeChild(e);e=0;for(b=h[k].length;e<b;e++){var m=g=1;if(f[k][e]===q){a.appendChild(h[k][e].cell);for(f[k][e]=1;h[k+g]!==q&&h[k][e].cell==h[k+g][e].cell;)f[k+g][e]=1,g++;for(;h[k][e+m]!==q&&h[k][e].cell==h[k][e+m].cell;){for(c=0;c<g;c++)f[k+c][e+m]=1;m++}l(h[k][e].cell).attr("rowspan",g).attr("colspan",m)}}}}}function ja(a,b){var c="ssp"==Q(a),d=a.iInitDisplayStart;d!==q&&-1!==d&&(a._iDisplayStart=c?
d:d>=a.fnRecordsDisplay()?0:d,a.iInitDisplayStart=-1);c=F(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==l.inArray(!1,c))V(a,!1);else{c=[];var e=0;d=a.asStripeClasses;var h=d.length,f=a.oLanguage,g="ssp"==Q(a),k=a.aiDisplay,m=a._iDisplayStart,n=a.fnDisplayEnd();a.bDrawing=!0;if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,V(a,!1);else if(!g)a.iDraw++;else if(!a.bDestroying&&!b){Gb(a);return}if(0!==k.length)for(b=g?a.aoData.length:n,f=g?0:m;f<b;f++){g=k[f];var p=a.aoData[g];null===p.nTr&&ab(a,g);var t=
p.nTr;if(0!==h){var v=d[e%h];p._sRowStripe!=v&&(l(t).removeClass(p._sRowStripe).addClass(v),p._sRowStripe=v)}F(a,"aoRowCallback",null,[t,p._aData,e,f,g]);c.push(t);e++}else e=f.sZeroRecords,1==a.iDraw&&"ajax"==Q(a)?e=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(e=f.sEmptyTable),c[0]=l("<tr/>",{"class":h?d[0]:""}).append(l("<td />",{valign:"top",colSpan:oa(a),"class":a.oClasses.sRowEmpty}).html(e))[0];F(a,"aoHeaderCallback","header",[l(a.nTHead).children("tr")[0],db(a),m,n,k]);F(a,"aoFooterCallback",
"footer",[l(a.nTFoot).children("tr")[0],db(a),m,n,k]);d=l(a.nTBody);d.children().detach();d.append(l(c));F(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function ka(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&Hb(a);d?ya(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;ja(a);a._drawHold=!1}function Ib(a){var b=a.oClasses,c=l(a.nTable);c=l("<div/>").insertBefore(c);var d=a.oFeatures,e=l("<div/>",{id:a.sTableId+"_wrapper",
"class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var h=a.sDom.split(""),f,g,k,m,n,p,t=0;t<h.length;t++){f=null;g=h[t];if("<"==g){k=l("<div/>")[0];m=h[t+1];if("'"==m||'"'==m){n="";for(p=2;h[t+p]!=m;)n+=h[t+p],p++;"H"==n?n=b.sJUIHeader:"F"==n&&(n=b.sJUIFooter);-1!=n.indexOf(".")?(m=n.split("."),k.id=m[0].substr(1,m[0].length-1),k.className=m[1]):"#"==n.charAt(0)?k.id=n.substr(1,n.length-1):k.className=n;t+=p}e.append(k);
e=l(k)}else if(">"==g)e=e.parent();else if("l"==g&&d.bPaginate&&d.bLengthChange)f=Jb(a);else if("f"==g&&d.bFilter)f=Kb(a);else if("r"==g&&d.bProcessing)f=Lb(a);else if("t"==g)f=Mb(a);else if("i"==g&&d.bInfo)f=Nb(a);else if("p"==g&&d.bPaginate)f=Ob(a);else if(0!==u.ext.feature.length)for(k=u.ext.feature,p=0,m=k.length;p<m;p++)if(g==k[p].cFeature){f=k[p].fnInit(a);break}f&&(k=a.aanFeatures,k[g]||(k[g]=[]),k[g].push(f),e.append(f))}c.replaceWith(e);a.nHolding=null}function wa(a,b){b=l(b).children("tr");
var c,d,e;a.splice(0,a.length);var h=0;for(e=b.length;h<e;h++)a.push([]);h=0;for(e=b.length;h<e;h++){var f=b[h];for(c=f.firstChild;c;){if("TD"==c.nodeName.toUpperCase()||"TH"==c.nodeName.toUpperCase()){var g=1*c.getAttribute("colspan");var k=1*c.getAttribute("rowspan");g=g&&0!==g&&1!==g?g:1;k=k&&0!==k&&1!==k?k:1;var m=0;for(d=a[h];d[m];)m++;var n=m;var p=1===g?!0:!1;for(d=0;d<g;d++)for(m=0;m<k;m++)a[h+m][n+d]={cell:c,unique:p},a[h+m].nTr=f}c=c.nextSibling}}}function Na(a,b,c){var d=[];c||(c=a.aoHeader,
b&&(c=[],wa(c,b)));b=0;for(var e=c.length;b<e;b++)for(var h=0,f=c[b].length;h<f;h++)!c[b][h].unique||d[h]&&a.bSortCellsTop||(d[h]=c[b][h].cell);return d}function Oa(a,b,c){F(a,"aoServerParams","serverParams",[b]);if(b&&Array.isArray(b)){var d={},e=/(.*?)\[\]$/;l.each(b,function(n,p){(n=p.name.match(e))?(n=n[0],d[n]||(d[n]=[]),d[n].push(p.value)):d[p.name]=p.value});b=d}var h=a.ajax,f=a.oInstance,g=function(n){var p=a.jqXHR?a.jqXHR.status:null;if(null===n||"number"===typeof p&&204==p)n={},za(a,n,[]);
(p=n.error||n.sError)&&da(a,0,p);a.json=n;F(a,null,"xhr",[a,n,a.jqXHR]);c(n)};if(l.isPlainObject(h)&&h.data){var k=h.data;var m="function"===typeof k?k(b,a):k;b="function"===typeof k&&m?m:l.extend(!0,b,m);delete h.data}m={data:b,success:g,dataType:"json",cache:!1,type:a.sServerMethod,error:function(n,p,t){t=F(a,null,"xhr",[a,null,a.jqXHR]);-1===l.inArray(!0,t)&&("parsererror"==p?da(a,0,"Invalid JSON response",1):4===n.readyState&&da(a,0,"Ajax error",7));V(a,!1)}};a.oAjaxData=b;F(a,null,"preXhr",[a,
b]);a.fnServerData?a.fnServerData.call(f,a.sAjaxSource,l.map(b,function(n,p){return{name:p,value:n}}),g,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=l.ajax(l.extend(m,{url:h||a.sAjaxSource})):"function"===typeof h?a.jqXHR=h.call(f,b,g,a):(a.jqXHR=l.ajax(l.extend(m,h)),h.data=k)}function Gb(a){a.iDraw++;V(a,!0);Oa(a,Pb(a),function(b){Qb(a,b)})}function Pb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,h=a.aoPreSearchCols,f=[],g=pa(a);var k=a._iDisplayStart;var m=!1!==d.bPaginate?
a._iDisplayLength:-1;var n=function(x,w){f.push({name:x,value:w})};n("sEcho",a.iDraw);n("iColumns",c);n("sColumns",U(b,"sName").join(","));n("iDisplayStart",k);n("iDisplayLength",m);var p={draw:a.iDraw,columns:[],order:[],start:k,length:m,search:{value:e.sSearch,regex:e.bRegex}};for(k=0;k<c;k++){var t=b[k];var v=h[k];m="function"==typeof t.mData?"function":t.mData;p.columns.push({data:m,name:t.sName,searchable:t.bSearchable,orderable:t.bSortable,search:{value:v.sSearch,regex:v.bRegex}});n("mDataProp_"+
k,m);d.bFilter&&(n("sSearch_"+k,v.sSearch),n("bRegex_"+k,v.bRegex),n("bSearchable_"+k,t.bSearchable));d.bSort&&n("bSortable_"+k,t.bSortable)}d.bFilter&&(n("sSearch",e.sSearch),n("bRegex",e.bRegex));d.bSort&&(l.each(g,function(x,w){p.order.push({column:w.col,dir:w.dir});n("iSortCol_"+x,w.col);n("sSortDir_"+x,w.dir)}),n("iSortingCols",g.length));b=u.ext.legacy.ajax;return null===b?a.sAjaxSource?f:p:b?f:p}function Qb(a,b){var c=function(f,g){return b[f]!==q?b[f]:b[g]},d=za(a,b),e=c("sEcho","draw"),h=
c("iTotalRecords","recordsTotal");c=c("iTotalDisplayRecords","recordsFiltered");if(e!==q){if(1*e<a.iDraw)return;a.iDraw=1*e}d||(d=[]);Ka(a);a._iRecordsTotal=parseInt(h,10);a._iRecordsDisplay=parseInt(c,10);e=0;for(h=d.length;e<h;e++)ia(a,d[e]);a.aiDisplay=a.aiDisplayMaster.slice();ja(a,!0);a._bInitComplete||Pa(a,b);V(a,!1)}function za(a,b,c){a=l.isPlainObject(a.ajax)&&a.ajax.dataSrc!==q?a.ajax.dataSrc:a.sAjaxDataProp;if(!c)return"data"===a?b.aaData||b[a]:""!==a?na(a)(b):b;ha(a)(b,c)}function Kb(a){var b=
a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,h=a.aanFeatures,f='<input type="search" class="'+b.sFilterInput+'"/>',g=d.sSearch;g=g.match(/_INPUT_/)?g.replace("_INPUT_",f):g+f;b=l("<div/>",{id:h.f?null:c+"_filter","class":b.sFilter}).append(l("<label/>").append(g));var k=function(n){var p=this.value?this.value:"";e.return&&"Enter"!==n.key||p==e.sSearch||(ya(a,{sSearch:p,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive,"return":e.return}),a._iDisplayStart=0,ja(a))};h=
null!==a.searchDelay?a.searchDelay:"ssp"===Q(a)?400:0;var m=l("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",h?hb(k,h):k).on("mouseup",function(n){setTimeout(function(){k.call(m[0],n)},10)}).on("keypress.DT",function(n){if(13==n.keyCode)return!1}).attr("aria-controls",c);l(a.nTable).on("search.dt.DT",function(n,p){if(a===p)try{m[0]!==A.activeElement&&m.val(e.sSearch)}catch(t){}});return b[0]}function ya(a,b,c){var d=a.oPreviousSearch,
e=a.aoPreSearchCols,h=function(g){d.sSearch=g.sSearch;d.bRegex=g.bRegex;d.bSmart=g.bSmart;d.bCaseInsensitive=g.bCaseInsensitive;d.return=g.return},f=function(g){return g.bEscapeRegex!==q?!g.bEscapeRegex:g.bRegex};$a(a);if("ssp"!=Q(a)){Rb(a,b.sSearch,c,f(b),b.bSmart,b.bCaseInsensitive,b.return);h(b);for(b=0;b<e.length;b++)Sb(a,e[b].sSearch,b,f(e[b]),e[b].bSmart,e[b].bCaseInsensitive);Tb(a)}else h(b);a.bFiltered=!0;F(a,null,"search",[a])}function Tb(a){for(var b=u.ext.search,c=a.aiDisplay,d,e,h=0,f=
b.length;h<f;h++){for(var g=[],k=0,m=c.length;k<m;k++)e=c[k],d=a.aoData[e],b[h](a,d._aFilterData,e,d._aData,k)&&g.push(e);c.length=0;l.merge(c,g)}}function Sb(a,b,c,d,e,h){if(""!==b){var f=[],g=a.aiDisplay;d=ib(b,d,e,h);for(e=0;e<g.length;e++)b=a.aoData[g[e]]._aFilterData[c],d.test(b)&&f.push(g[e]);a.aiDisplay=f}}function Rb(a,b,c,d,e,h){e=ib(b,d,e,h);var f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster;h=[];0!==u.ext.search.length&&(c=!0);var k=Ub(a);if(0>=b.length)a.aiDisplay=g.slice();else{if(k||
c||d||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)e.test(a.aoData[b[c]]._sFilterRow)&&h.push(b[c]);a.aiDisplay=h}}function ib(a,b,c,d){a=b?a:jb(a);c&&(a="^(?=.*?"+l.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0)){var h=e.match(/^"(.*)"$/);e=h?h[1]:e}return e.replace('"',"")}).join(")(?=.*?")+").*$");return new RegExp(a,d?"i":"")}function Ub(a){var b=a.aoColumns,c,d;var e=!1;var h=0;for(c=a.aoData.length;h<c;h++){var f=
a.aoData[h];if(!f._aFilterData){var g=[];e=0;for(d=b.length;e<d;e++){var k=b[e];k.bSearchable?(k=T(a,h,e,"filter"),null===k&&(k=""),"string"!==typeof k&&k.toString&&(k=k.toString())):k="";k.indexOf&&-1!==k.indexOf("&")&&(Qa.innerHTML=k,k=tc?Qa.textContent:Qa.innerText);k.replace&&(k=k.replace(/[\r\n\u2028]/g,""));g.push(k)}f._aFilterData=g;f._sFilterRow=g.join("  ");e=!0}}return e}function Vb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Wb(a){return{sSearch:a.search,
bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function Nb(a){var b=a.sTableId,c=a.aanFeatures.i,d=l("<div/>",{"class":a.oClasses.sInfo,id:c?null:b+"_info"});c||(a.aoDrawCallback.push({fn:Xb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),l(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Xb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),h=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),g=
f?c.sInfo:c.sInfoEmpty;f!==h&&(g+=" "+c.sInfoFiltered);g+=c.sInfoPostFix;g=Yb(a,g);c=c.fnInfoCallback;null!==c&&(g=c.call(a.oInstance,a,d,e,h,f,g));l(b).html(g)}}function Yb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,h=a.fnRecordsDisplay(),f=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,h)).replace(/_PAGE_/g,c.call(a,f?1:Math.ceil(d/e))).replace(/_PAGES_/g,
c.call(a,f?1:Math.ceil(h/e)))}function Aa(a){var b=a.iInitDisplayStart,c=a.aoColumns;var d=a.oFeatures;var e=a.bDeferLoading;if(a.bInitialised){Ib(a);Fb(a);xa(a,a.aoHeader);xa(a,a.aoFooter);V(a,!0);d.bAutoWidth&&Za(a);var h=0;for(d=c.length;h<d;h++){var f=c[h];f.sWidth&&(f.nTh.style.width=K(f.sWidth))}F(a,null,"preInit",[a]);ka(a);c=Q(a);if("ssp"!=c||e)"ajax"==c?Oa(a,[],function(g){var k=za(a,g);for(h=0;h<k.length;h++)ia(a,k[h]);a.iInitDisplayStart=b;ka(a);V(a,!1);Pa(a,g)},a):(V(a,!1),Pa(a))}else setTimeout(function(){Aa(a)},
200)}function Pa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&sa(a);F(a,null,"plugin-init",[a,b]);F(a,"aoInitComplete","init",[a,b])}function kb(a,b){b=parseInt(b,10);a._iDisplayLength=b;lb(a);F(a,null,"length",[a,b])}function Jb(a){var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=Array.isArray(d[0]),h=e?d[0]:d;d=e?d[1]:d;e=l("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect});for(var f=0,g=h.length;f<g;f++)e[0][f]=new Option("number"===typeof d[f]?a.fnFormatNumber(d[f]):d[f],
h[f]);var k=l("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(k[0].id=c+"_length");k.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));l("select",k).val(a._iDisplayLength).on("change.DT",function(m){kb(a,l(this).val());ja(a)});l(a.nTable).on("length.dt.DT",function(m,n,p){a===n&&l("select",k).val(p)});return k[0]}function Ob(a){var b=a.sPaginationType,c=u.ext.pager[b],d="function"===typeof c,e=function(f){ja(f)};b=l("<div/>").addClass(a.oClasses.sPaging+b)[0];
var h=a.aanFeatures;d||c.fnInit(a,b,e);h.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(f){if(d){var g=f._iDisplayStart,k=f._iDisplayLength,m=f.fnRecordsDisplay(),n=-1===k;g=n?0:Math.ceil(g/k);k=n?1:Math.ceil(m/k);m=c(g,k);var p;n=0;for(p=h.p.length;n<p;n++)gb(f,"pageButton")(f,h.p[n],n,m,g,k)}else c.fnUpdate(f,e)},sName:"pagination"}));return b}function Ra(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,h=a.fnRecordsDisplay();0===h||-1===e?d=0:"number"===typeof b?(d=b*e,d>h&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<h&&(d+=e):"last"==b?d=Math.floor((h-1)/e)*e:da(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(F(a,null,"page",[a]),c&&ja(a));return b}function Lb(a){return l("<div/>",{id:a.aanFeatures.r?null:a.sTableId+"_processing","class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function V(a,b){a.oFeatures.bProcessing&&l(a.aanFeatures.r).css("display",b?"block":"none");
F(a,null,"processing",[a,b])}function Mb(a){var b=l(a.nTable),c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,h=a.oClasses,f=b.children("caption"),g=f.length?f[0]._captionSide:null,k=l(b[0].cloneNode(!1)),m=l(b[0].cloneNode(!1)),n=b.children("tfoot");n.length||(n=null);k=l("<div/>",{"class":h.sScrollWrapper}).append(l("<div/>",{"class":h.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollHeadInner}).css({"box-sizing":"content-box",
width:c.sXInner||"100%"}).append(k.removeAttr("id").css("margin-left",0).append("top"===g?f:null).append(b.children("thead"))))).append(l("<div/>",{"class":h.sScrollBody}).css({position:"relative",overflow:"auto",width:d?K(d):null}).append(b));n&&k.append(l("<div/>",{"class":h.sScrollFoot}).css({overflow:"hidden",border:0,width:d?d?K(d):null:"100%"}).append(l("<div/>",{"class":h.sScrollFootInner}).append(m.removeAttr("id").css("margin-left",0).append("bottom"===g?f:null).append(b.children("tfoot")))));
b=k.children();var p=b[0];h=b[1];var t=n?b[2]:null;if(d)l(h).on("scroll.DT",function(v){v=this.scrollLeft;p.scrollLeft=v;n&&(t.scrollLeft=v)});l(h).css("max-height",e);c.bCollapse||l(h).css("height",e);a.nScrollHead=p;a.nScrollBody=h;a.nScrollFoot=t;a.aoDrawCallback.push({fn:Ha,sName:"scrolling"});return k[0]}function Ha(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY;b=b.iBarWidth;var h=l(a.nScrollHead),f=h[0].style,g=h.children("div"),k=g[0].style,m=g.children("table");g=a.nScrollBody;var n=l(g),p=
g.style,t=l(a.nScrollFoot).children("div"),v=t.children("table"),x=l(a.nTHead),w=l(a.nTable),r=w[0],C=r.style,G=a.nTFoot?l(a.nTFoot):null,aa=a.oBrowser,L=aa.bScrollOversize;U(a.aoColumns,"nTh");var O=[],I=[],H=[],ea=[],Y,Ba=function(D){D=D.style;D.paddingTop="0";D.paddingBottom="0";D.borderTopWidth="0";D.borderBottomWidth="0";D.height=0};var fa=g.scrollHeight>g.clientHeight;if(a.scrollBarVis!==fa&&a.scrollBarVis!==q)a.scrollBarVis=fa,sa(a);else{a.scrollBarVis=fa;w.children("thead, tfoot").remove();
if(G){var ba=G.clone().prependTo(w);var la=G.find("tr");ba=ba.find("tr")}var mb=x.clone().prependTo(w);x=x.find("tr");fa=mb.find("tr");mb.find("th, td").removeAttr("tabindex");c||(p.width="100%",h[0].style.width="100%");l.each(Na(a,mb),function(D,W){Y=ta(a,D);W.style.width=a.aoColumns[Y].sWidth});G&&ca(function(D){D.style.width=""},ba);h=w.outerWidth();""===c?(C.width="100%",L&&(w.find("tbody").height()>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(w.outerWidth()-b)),h=w.outerWidth()):
""!==d&&(C.width=K(d),h=w.outerWidth());ca(Ba,fa);ca(function(D){var W=z.getComputedStyle?z.getComputedStyle(D).width:K(l(D).width());H.push(D.innerHTML);O.push(W)},fa);ca(function(D,W){D.style.width=O[W]},x);l(fa).css("height",0);G&&(ca(Ba,ba),ca(function(D){ea.push(D.innerHTML);I.push(K(l(D).css("width")))},ba),ca(function(D,W){D.style.width=I[W]},la),l(ba).height(0));ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+H[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow=
"hidden";D.style.width=O[W]},fa);G&&ca(function(D,W){D.innerHTML='<div class="dataTables_sizing">'+ea[W]+"</div>";D.childNodes[0].style.height="0";D.childNodes[0].style.overflow="hidden";D.style.width=I[W]},ba);Math.round(w.outerWidth())<Math.round(h)?(la=g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y")?h+b:h,L&&(g.scrollHeight>g.offsetHeight||"scroll"==n.css("overflow-y"))&&(C.width=K(la-b)),""!==c&&""===d||da(a,1,"Possible column misalignment",6)):la="100%";p.width=K(la);f.width=K(la);
G&&(a.nScrollFoot.style.width=K(la));!e&&L&&(p.height=K(r.offsetHeight+b));c=w.outerWidth();m[0].style.width=K(c);k.width=K(c);d=w.height()>g.clientHeight||"scroll"==n.css("overflow-y");e="padding"+(aa.bScrollbarLeft?"Left":"Right");k[e]=d?b+"px":"0px";G&&(v[0].style.width=K(c),t[0].style.width=K(c),t[0].style[e]=d?b+"px":"0px");w.children("colgroup").insertBefore(w.children("thead"));n.trigger("scroll");!a.bSorted&&!a.bFiltered||a._drawHold||(g.scrollTop=0)}}function ca(a,b,c){for(var d=0,e=0,h=
b.length,f,g;e<h;){f=b[e].firstChild;for(g=c?c[e].firstChild:null;f;)1===f.nodeType&&(c?a(f,g,d):a(f,d),d++),f=f.nextSibling,g=c?g.nextSibling:null;e++}}function Za(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,h=d.sX,f=d.sXInner,g=c.length,k=Ia(a,"bVisible"),m=l("th",a.nTHead),n=b.getAttribute("width"),p=b.parentNode,t=!1,v,x=a.oBrowser;d=x.bScrollOversize;(v=b.style.width)&&-1!==v.indexOf("%")&&(n=v);for(v=0;v<k.length;v++){var w=c[k[v]];null!==w.sWidth&&(w.sWidth=Zb(w.sWidthOrig,p),t=!0)}if(d||
!t&&!h&&!e&&g==oa(a)&&g==m.length)for(v=0;v<g;v++)k=ta(a,v),null!==k&&(c[k].sWidth=K(m.eq(v).width()));else{g=l(b).clone().css("visibility","hidden").removeAttr("id");g.find("tbody tr").remove();var r=l("<tr/>").appendTo(g.find("tbody"));g.find("thead, tfoot").remove();g.append(l(a.nTHead).clone()).append(l(a.nTFoot).clone());g.find("tfoot th, tfoot td").css("width","");m=Na(a,g.find("thead")[0]);for(v=0;v<k.length;v++)w=c[k[v]],m[v].style.width=null!==w.sWidthOrig&&""!==w.sWidthOrig?K(w.sWidthOrig):
"",w.sWidthOrig&&h&&l(m[v]).append(l("<div/>").css({width:w.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(v=0;v<k.length;v++)t=k[v],w=c[t],l($b(a,t)).clone(!1).append(w.sContentPadding).appendTo(r);l("[name]",g).removeAttr("name");w=l("<div/>").css(h||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(g).appendTo(p);h&&f?g.width(f):h?(g.css("width","auto"),g.removeAttr("width"),g.width()<p.clientWidth&&n&&g.width(p.clientWidth)):e?g.width(p.clientWidth):
n&&g.width(n);for(v=e=0;v<k.length;v++)p=l(m[v]),f=p.outerWidth()-p.width(),p=x.bBounding?Math.ceil(m[v].getBoundingClientRect().width):p.outerWidth(),e+=p,c[k[v]].sWidth=K(p-f);b.style.width=K(e);w.remove()}n&&(b.style.width=K(n));!n&&!h||a._reszEvt||(b=function(){l(z).on("resize.DT-"+a.sInstance,hb(function(){sa(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0)}function Zb(a,b){if(!a)return 0;a=l("<div/>").css("width",K(a)).appendTo(b||A.body);b=a[0].offsetWidth;a.remove();return b}function $b(a,b){var c=
ac(a,b);if(0>c)return null;var d=a.aoData[c];return d.nTr?d.anCells[b]:l("<td/>").html(T(a,c,b,"display"))[0]}function ac(a,b){for(var c,d=-1,e=-1,h=0,f=a.aoData.length;h<f;h++)c=T(a,h,b,"display")+"",c=c.replace(uc,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=h);return e}function K(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function pa(a){var b=[],c=a.aoColumns;var d=a.aaSortingFixed;var e=l.isPlainObject(d);var h=[];var f=function(n){n.length&&
!Array.isArray(n[0])?h.push(n):l.merge(h,n)};Array.isArray(d)&&f(d);e&&d.pre&&f(d.pre);f(a.aaSorting);e&&d.post&&f(d.post);for(a=0;a<h.length;a++){var g=h[a][0];f=c[g].aDataSort;d=0;for(e=f.length;d<e;d++){var k=f[d];var m=c[k].sType||"string";h[a]._idx===q&&(h[a]._idx=l.inArray(h[a][1],c[k].asSorting));b.push({src:g,col:k,dir:h[a][1],index:h[a]._idx,type:m,formatter:u.ext.type.order[m+"-pre"]})}}return b}function Hb(a){var b,c=[],d=u.ext.type.order,e=a.aoData,h=0,f=a.aiDisplayMaster;$a(a);var g=
pa(a);var k=0;for(b=g.length;k<b;k++){var m=g[k];m.formatter&&h++;bc(a,m.col)}if("ssp"!=Q(a)&&0!==g.length){k=0;for(b=f.length;k<b;k++)c[f[k]]=k;h===g.length?f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=w[r.col];C=C<G?-1:C>G?1:0;if(0!==C)return"asc"===r.dir?C:-C}C=c[n];G=c[p];return C<G?-1:C>G?1:0}):f.sort(function(n,p){var t,v=g.length,x=e[n]._aSortData,w=e[p]._aSortData;for(t=0;t<v;t++){var r=g[t];var C=x[r.col];var G=
w[r.col];r=d[r.type+"-"+r.dir]||d["string-"+r.dir];C=r(C,G);if(0!==C)return C}C=c[n];G=c[p];return C<G?-1:C>G?1:0})}a.bSorted=!0}function cc(a){var b=a.aoColumns,c=pa(a);a=a.oLanguage.oAria;for(var d=0,e=b.length;d<e;d++){var h=b[d];var f=h.asSorting;var g=h.ariaTitle||h.sTitle.replace(/<.*?>/g,"");var k=h.nTh;k.removeAttribute("aria-sort");h.bSortable&&(0<c.length&&c[0].col==d?(k.setAttribute("aria-sort","asc"==c[0].dir?"ascending":"descending"),h=f[c[0].index+1]||f[0]):h=f[0],g+="asc"===h?a.sSortAscending:
a.sSortDescending);k.setAttribute("aria-label",g)}}function nb(a,b,c,d){var e=a.aaSorting,h=a.aoColumns[b].asSorting,f=function(g,k){var m=g._idx;m===q&&(m=l.inArray(g[1],h));return m+1<h.length?m+1:k?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=l.inArray(b,U(e,"0")),-1!==c?(b=f(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=h[b],e[c]._idx=b)):(e.push([b,h[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=f(e[0]),e.length=1,e[0][1]=h[b],
e[0]._idx=b):(e.length=0,e.push([b,h[0]]),e[0]._idx=0);ka(a);"function"==typeof d&&d(a)}function fb(a,b,c,d){var e=a.aoColumns[c];ob(b,{},function(h){!1!==e.bSortable&&(a.oFeatures.bProcessing?(V(a,!0),setTimeout(function(){nb(a,c,h.shiftKey,d);"ssp"!==Q(a)&&V(a,!1)},0)):nb(a,c,h.shiftKey,d))})}function Sa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=pa(a),e=a.oFeatures,h;if(e.bSort&&e.bSortClasses){e=0;for(h=b.length;e<h;e++){var f=b[e].src;l(U(a.aoData,"anCells",f)).removeClass(c+(2>e?e+1:3))}e=
0;for(h=d.length;e<h;e++)f=d[e].src,l(U(a.aoData,"anCells",f)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function bc(a,b){var c=a.aoColumns[b],d=u.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ua(a,b)));for(var h,f=u.ext.type.order[c.sType+"-pre"],g=0,k=a.aoData.length;g<k;g++)if(c=a.aoData[g],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)h=d?e[g]:T(a,g,b,"sort"),c._aSortData[b]=f?f(h):h}function Ca(a){if(!a._bLoadingState){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,
order:l.extend(!0,[],a.aaSorting),search:Vb(a.oPreviousSearch),columns:l.map(a.aoColumns,function(c,d){return{visible:c.bVisible,search:Vb(a.aoPreSearchCols[d])}})};a.oSavedState=b;F(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oFeatures.bStateSave&&!a.bDestroying&&a.fnStateSaveCallback.call(a.oInstance,a,b)}}function dc(a,b,c){if(a.oFeatures.bStateSave)return b=a.fnStateLoadCallback.call(a.oInstance,a,function(d){pb(a,d,c)}),b!==q&&pb(a,b,c),!0;c()}function pb(a,b,c){var d,e=a.aoColumns;a._bLoadingState=
!0;var h=a._bInitComplete?new u.Api(a):null;if(b&&b.time){var f=F(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1!==l.inArray(!1,f))a._bLoadingState=!1;else if(f=a.iStateDuration,0<f&&b.time<+new Date-1E3*f)a._bLoadingState=!1;else if(b.columns&&e.length!==b.columns.length)a._bLoadingState=!1;else{a.oLoadedState=l.extend(!0,{},b);b.start!==q&&(null===h?(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start):Ra(a,b.start/b.length));b.length!==q&&(a._iDisplayLength=b.length);b.order!==q&&(a.aaSorting=
[],l.each(b.order,function(k,m){a.aaSorting.push(m[0]>=e.length?[0,m[1]]:m)}));b.search!==q&&l.extend(a.oPreviousSearch,Wb(b.search));if(b.columns){f=0;for(d=b.columns.length;f<d;f++){var g=b.columns[f];g.visible!==q&&(h?h.column(f).visible(g.visible,!1):e[f].bVisible=g.visible);g.search!==q&&l.extend(a.aoPreSearchCols[f],Wb(g.search))}h&&h.columns.adjust()}a._bLoadingState=!1;F(a,"aoStateLoaded","stateLoaded",[a,b])}}else a._bLoadingState=!1;c()}function Ta(a){var b=u.settings;a=l.inArray(a,U(b,
"nTable"));return-1!==a?b[a]:null}function da(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)z.console&&console.log&&console.log(c);else if(b=u.ext,b=b.sErrMode||b.errMode,a&&F(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function X(a,b,c,d){Array.isArray(c)?l.each(c,function(e,h){Array.isArray(h)?X(a,b,h[0],h[1]):
X(a,b,h)}):(d===q&&(d=c),b[c]!==q&&(a[d]=b[c]))}function qb(a,b,c){var d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];l.isPlainObject(e)?(l.isPlainObject(a[d])||(a[d]={}),l.extend(!0,a[d],e)):c&&"data"!==d&&"aaData"!==d&&Array.isArray(e)?a[d]=e.slice():a[d]=e}return a}function ob(a,b,c){l(a).on("click.DT",b,function(d){l(a).trigger("blur");c(d)}).on("keypress.DT",b,function(d){13===d.which&&(d.preventDefault(),c(d))}).on("selectstart.DT",function(){return!1})}function R(a,b,c,d){c&&a[b].push({fn:c,
sName:d})}function F(a,b,c,d){var e=[];b&&(e=l.map(a[b].slice().reverse(),function(h,f){return h.fn.apply(a.oInstance,d)}));null!==c&&(b=l.Event(c+".dt"),l(a.nTable).trigger(b,d),e.push(b.result));return e}function lb(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function gb(a,b){a=a.renderer;var c=u.ext.renderer[b];return l.isPlainObject(a)&&a[b]?c[a[b]]||c._:"string"===typeof a?c[a]||c._:c._}function Q(a){return a.oFeatures.bServerSide?
"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Da(a,b){var c=ec.numbers_length,d=Math.floor(c/2);b<=c?a=qa(0,b):a<=d?(a=qa(0,c-2),a.push("ellipsis"),a.push(b-1)):(a>=b-1-d?a=qa(b-(c-2),b):(a=qa(a-d+2,a+d-1),a.push("ellipsis"),a.push(b-1)),a.splice(0,0,"ellipsis"),a.splice(0,0,0));a.DT_el="span";return a}function Xa(a){l.each({num:function(b){return Ua(b,a)},"num-fmt":function(b){return Ua(b,a,rb)},"html-num":function(b){return Ua(b,a,Va)},"html-num-fmt":function(b){return Ua(b,a,Va,rb)}},function(b,
c){M.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(M.type.search[b+a]=M.type.search.html)})}function fc(a){return function(){var b=[Ta(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return u.ext.internal[a].apply(this,b)}}var u=function(a,b){if(this instanceof u)return l(a).DataTable(b);b=a;this.$=function(f,g){return this.api(!0).$(f,g)};this._=function(f,g){return this.api(!0).rows(f,g).data()};this.api=function(f){return f?new B(Ta(this[M.iApiIndex])):new B(this)};this.fnAddData=
function(f,g){var k=this.api(!0);f=Array.isArray(f)&&(Array.isArray(f[0])||l.isPlainObject(f[0]))?k.rows.add(f):k.row.add(f);(g===q||g)&&k.draw();return f.flatten().toArray()};this.fnAdjustColumnSizing=function(f){var g=this.api(!0).columns.adjust(),k=g.settings()[0],m=k.oScroll;f===q||f?g.draw(!1):(""!==m.sX||""!==m.sY)&&Ha(k)};this.fnClearTable=function(f){var g=this.api(!0).clear();(f===q||f)&&g.draw()};this.fnClose=function(f){this.api(!0).row(f).child.hide()};this.fnDeleteRow=function(f,g,k){var m=
this.api(!0);f=m.rows(f);var n=f.settings()[0],p=n.aoData[f[0][0]];f.remove();g&&g.call(this,n,p);(k===q||k)&&m.draw();return p};this.fnDestroy=function(f){this.api(!0).destroy(f)};this.fnDraw=function(f){this.api(!0).draw(f)};this.fnFilter=function(f,g,k,m,n,p){n=this.api(!0);null===g||g===q?n.search(f,k,m,p):n.column(g).search(f,k,m,p);n.draw()};this.fnGetData=function(f,g){var k=this.api(!0);if(f!==q){var m=f.nodeName?f.nodeName.toLowerCase():"";return g!==q||"td"==m||"th"==m?k.cell(f,g).data():
k.row(f).data()||null}return k.data().toArray()};this.fnGetNodes=function(f){var g=this.api(!0);return f!==q?g.row(f).node():g.rows().nodes().flatten().toArray()};this.fnGetPosition=function(f){var g=this.api(!0),k=f.nodeName.toUpperCase();return"TR"==k?g.row(f).index():"TD"==k||"TH"==k?(f=g.cell(f).index(),[f.row,f.columnVisible,f.column]):null};this.fnIsOpen=function(f){return this.api(!0).row(f).child.isShown()};this.fnOpen=function(f,g,k){return this.api(!0).row(f).child(g,k).show().child()[0]};
this.fnPageChange=function(f,g){f=this.api(!0).page(f);(g===q||g)&&f.draw(!1)};this.fnSetColumnVis=function(f,g,k){f=this.api(!0).column(f).visible(g);(k===q||k)&&f.columns.adjust().draw()};this.fnSettings=function(){return Ta(this[M.iApiIndex])};this.fnSort=function(f){this.api(!0).order(f).draw()};this.fnSortListener=function(f,g,k){this.api(!0).order.listener(f,g,k)};this.fnUpdate=function(f,g,k,m,n){var p=this.api(!0);k===q||null===k?p.row(g).data(f):p.cell(g,k).data(f);(n===q||n)&&p.columns.adjust();
(m===q||m)&&p.draw();return 0};this.fnVersionCheck=M.fnVersionCheck;var c=this,d=b===q,e=this.length;d&&(b={});this.oApi=this.internal=M.internal;for(var h in u.ext.internal)h&&(this[h]=fc(h));this.each(function(){var f={},g=1<e?qb(f,b,!0):b,k=0,m;f=this.getAttribute("id");var n=!1,p=u.defaults,t=l(this);if("table"!=this.nodeName.toLowerCase())da(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{zb(p);Ab(p.column);P(p,p,!0);P(p.column,p.column,!0);P(p,l.extend(g,t.data()),!0);var v=
u.settings;k=0;for(m=v.length;k<m;k++){var x=v[k];if(x.nTable==this||x.nTHead&&x.nTHead.parentNode==this||x.nTFoot&&x.nTFoot.parentNode==this){var w=g.bRetrieve!==q?g.bRetrieve:p.bRetrieve;if(d||w)return x.oInstance;if(g.bDestroy!==q?g.bDestroy:p.bDestroy){x.oInstance.fnDestroy();break}else{da(x,0,"Cannot reinitialise DataTable",3);return}}if(x.sTableId==this.id){v.splice(k,1);break}}if(null===f||""===f)this.id=f="DataTables_Table_"+u.ext._unique++;var r=l.extend(!0,{},u.models.oSettings,{sDestroyWidth:t[0].style.width,
sInstance:f,sTableId:f});r.nTable=this;r.oApi=c.internal;r.oInit=g;v.push(r);r.oInstance=1===c.length?c:t.dataTable();zb(g);ma(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=Array.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);g=qb(l.extend(!0,{},p),g);X(r.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));X(r,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod",
"aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);X(r.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);X(r.oLanguage,g,"fnInfoCallback");
R(r,"aoDrawCallback",g.fnDrawCallback,"user");R(r,"aoServerParams",g.fnServerParams,"user");R(r,"aoStateSaveParams",g.fnStateSaveParams,"user");R(r,"aoStateLoadParams",g.fnStateLoadParams,"user");R(r,"aoStateLoaded",g.fnStateLoaded,"user");R(r,"aoRowCallback",g.fnRowCallback,"user");R(r,"aoRowCreatedCallback",g.fnCreatedRow,"user");R(r,"aoHeaderCallback",g.fnHeaderCallback,"user");R(r,"aoFooterCallback",g.fnFooterCallback,"user");R(r,"aoInitComplete",g.fnInitComplete,"user");R(r,"aoPreDrawCallback",
g.fnPreDrawCallback,"user");r.rowIdFn=na(g.rowId);Bb(r);var C=r.oClasses;l.extend(C,u.ext.classes,g.oClasses);t.addClass(C.sTable);r.iInitDisplayStart===q&&(r.iInitDisplayStart=g.iDisplayStart,r._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(r.bDeferLoading=!0,f=Array.isArray(g.iDeferLoading),r._iRecordsDisplay=f?g.iDeferLoading[0]:g.iDeferLoading,r._iRecordsTotal=f?g.iDeferLoading[1]:g.iDeferLoading);var G=r.oLanguage;l.extend(!0,G,g.oLanguage);G.sUrl?(l.ajax({dataType:"json",url:G.sUrl,
success:function(I){P(p.oLanguage,I);ma(I);l.extend(!0,G,I);F(r,null,"i18n",[r]);Aa(r)},error:function(){Aa(r)}}),n=!0):F(r,null,"i18n",[r]);null===g.asStripeClasses&&(r.asStripeClasses=[C.sStripeOdd,C.sStripeEven]);f=r.asStripeClasses;var aa=t.children("tbody").find("tr").eq(0);-1!==l.inArray(!0,l.map(f,function(I,H){return aa.hasClass(I)}))&&(l("tbody tr",this).removeClass(f.join(" ")),r.asDestroyStripes=f.slice());f=[];v=this.getElementsByTagName("thead");0!==v.length&&(wa(r.aoHeader,v[0]),f=Na(r));
if(null===g.aoColumns)for(v=[],k=0,m=f.length;k<m;k++)v.push(null);else v=g.aoColumns;k=0;for(m=v.length;k<m;k++)Ya(r,f?f[k]:null);Db(r,g.aoColumnDefs,v,function(I,H){Ga(r,I,H)});if(aa.length){var L=function(I,H){return null!==I.getAttribute("data-"+H)?H:null};l(aa[0]).children("th, td").each(function(I,H){var ea=r.aoColumns[I];if(ea.mData===I){var Y=L(H,"sort")||L(H,"order");H=L(H,"filter")||L(H,"search");if(null!==Y||null!==H)ea.mData={_:I+".display",sort:null!==Y?I+".@data-"+Y:q,type:null!==Y?
I+".@data-"+Y:q,filter:null!==H?I+".@data-"+H:q},Ga(r,I)}})}var O=r.oFeatures;f=function(){if(g.aaSorting===q){var I=r.aaSorting;k=0;for(m=I.length;k<m;k++)I[k][1]=r.aoColumns[k].asSorting[0]}Sa(r);O.bSort&&R(r,"aoDrawCallback",function(){if(r.bSorted){var Y=pa(r),Ba={};l.each(Y,function(fa,ba){Ba[ba.src]=ba.dir});F(r,null,"order",[r,Y,Ba]);cc(r)}});R(r,"aoDrawCallback",function(){(r.bSorted||"ssp"===Q(r)||O.bDeferRender)&&Sa(r)},"sc");I=t.children("caption").each(function(){this._captionSide=l(this).css("caption-side")});
var H=t.children("thead");0===H.length&&(H=l("<thead/>").appendTo(t));r.nTHead=H[0];var ea=t.children("tbody");0===ea.length&&(ea=l("<tbody/>").insertAfter(H));r.nTBody=ea[0];H=t.children("tfoot");0===H.length&&0<I.length&&(""!==r.oScroll.sX||""!==r.oScroll.sY)&&(H=l("<tfoot/>").appendTo(t));0===H.length||0===H.children().length?t.addClass(C.sNoFooter):0<H.length&&(r.nTFoot=H[0],wa(r.aoFooter,r.nTFoot));if(g.aaData)for(k=0;k<g.aaData.length;k++)ia(r,g.aaData[k]);else(r.bDeferLoading||"dom"==Q(r))&&
Ja(r,l(r.nTBody).children("tr"));r.aiDisplay=r.aiDisplayMaster.slice();r.bInitialised=!0;!1===n&&Aa(r)};R(r,"aoDrawCallback",Ca,"state_save");g.bStateSave?(O.bStateSave=!0,dc(r,g,f)):f()}});c=null;return this},M,y,J,sb={},gc=/[\r\n\u2028]/g,Va=/<.*?>/g,vc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,wc=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,rb=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,Z=function(a){return a&&!0!==a&&"-"!==a?!1:!0},hc=
function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},ic=function(a,b){sb[b]||(sb[b]=new RegExp(jb(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(sb[b],"."):a},tb=function(a,b,c){var d="string"===typeof a;if(Z(a))return!0;b&&d&&(a=ic(a,b));c&&d&&(a=a.replace(rb,""));return!isNaN(parseFloat(a))&&isFinite(a)},jc=function(a,b,c){return Z(a)?!0:Z(a)||"string"===typeof a?tb(a.replace(Va,""),b,c)?!0:null:null},U=function(a,b,c){var d=[],e=0,h=a.length;if(c!==q)for(;e<
h;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<h;e++)a[e]&&d.push(a[e][b]);return d},Ea=function(a,b,c,d){var e=[],h=0,f=b.length;if(d!==q)for(;h<f;h++)a[b[h]][c]&&e.push(a[b[h]][c][d]);else for(;h<f;h++)e.push(a[b[h]][c]);return e},qa=function(a,b){var c=[];if(b===q){b=0;var d=a}else d=b,b=a;for(a=b;a<d;a++)c.push(a);return c},kc=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},Ma=function(a){a:{if(!(2>a.length)){var b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<
e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();b=[];e=a.length;var h,f=0;d=0;a:for(;d<e;d++){c=a[d];for(h=0;h<f;h++)if(b[h]===c)continue a;b.push(c);f++}return b},lc=function(a,b){if(Array.isArray(b))for(var c=0;c<b.length;c++)lc(a,b[c]);else a.push(b);return a},mc=function(a,b){b===q&&(b=0);return-1!==this.indexOf(a,b)};Array.isArray||(Array.isArray=function(a){return"[object Array]"===Object.prototype.toString.call(a)});Array.prototype.includes||(Array.prototype.includes=mc);
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});String.prototype.includes||(String.prototype.includes=mc);u.util={throttle:function(a,b){var c=b!==q?b:200,d,e;return function(){var h=this,f=+new Date,g=arguments;d&&f<d+c?(clearTimeout(e),e=setTimeout(function(){d=q;a.apply(h,g)},c)):(d=f,a.apply(h,g))}},escapeRegex:function(a){return a.replace(wc,"\\$1")},set:function(a){if(l.isPlainObject(a))return u.util.set(a._);if(null===
a)return function(){};if("function"===typeof a)return function(c,d,e){a(c,"set",d,e)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(c,d){c[a]=d};var b=function(c,d,e){e=cb(e);var h=e[e.length-1];for(var f,g,k=0,m=e.length-1;k<m;k++){if("__proto__"===e[k]||"constructor"===e[k])throw Error("Cannot set prototype values");f=e[k].match(Fa);g=e[k].match(ra);if(f){e[k]=e[k].replace(Fa,"");c[e[k]]=[];h=e.slice();h.splice(0,k+1);f=h.join(".");if(Array.isArray(d))for(g=
0,m=d.length;g<m;g++)h={},b(h,d[g],f),c[e[k]].push(h);else c[e[k]]=d;return}g&&(e[k]=e[k].replace(ra,""),c=c[e[k]](d));if(null===c[e[k]]||c[e[k]]===q)c[e[k]]={};c=c[e[k]]}if(h.match(ra))c[h.replace(ra,"")](d);else c[h.replace(Fa,"")]=d};return function(c,d){return b(c,d,a)}},get:function(a){if(l.isPlainObject(a)){var b={};l.each(a,function(d,e){e&&(b[d]=u.util.get(e))});return function(d,e,h,f){var g=b[e]||b._;return g!==q?g(d,e,h,f):d}}if(null===a)return function(d){return d};if("function"===typeof a)return function(d,
e,h,f){return a(d,e,h,f)};if("string"!==typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("("))return function(d,e){return d[a]};var c=function(d,e,h){if(""!==h){var f=cb(h);for(var g=0,k=f.length;g<k;g++){h=f[g].match(Fa);var m=f[g].match(ra);if(h){f[g]=f[g].replace(Fa,"");""!==f[g]&&(d=d[f[g]]);m=[];f.splice(0,g+1);f=f.join(".");if(Array.isArray(d))for(g=0,k=d.length;g<k;g++)m.push(c(d[g],e,f));d=h[0].substring(1,h[0].length-1);d=""===d?m:m.join(d);break}else if(m){f[g]=f[g].replace(ra,
"");d=d[f[g]]();continue}if(null===d||d[f[g]]===q)return q;d=d[f[g]]}}return d};return function(d,e){return c(d,e,a)}}};var S=function(a,b,c){a[b]!==q&&(a[c]=a[b])},Fa=/\[.*?\]$/,ra=/\(\)$/,na=u.util.get,ha=u.util.set,jb=u.util.escapeRegex,Qa=l("<div>")[0],tc=Qa.textContent!==q,uc=/<.*?>/g,hb=u.util.throttle,nc=[],N=Array.prototype,xc=function(a){var b,c=u.settings,d=l.map(c,function(h,f){return h.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase()){var e=
l.inArray(a,d);return-1!==e?[c[e]]:null}if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?b=l(a):a instanceof l&&(b=a)}else return[];if(b)return b.map(function(h){e=l.inArray(this,d);return-1!==e?c[e]:null}).toArray()};var B=function(a,b){if(!(this instanceof B))return new B(a,b);var c=[],d=function(f){(f=xc(f))&&c.push.apply(c,f)};if(Array.isArray(a))for(var e=0,h=a.length;e<h;e++)d(a[e]);else d(a);this.context=Ma(c);b&&l.merge(this,b);this.selector={rows:null,
cols:null,opts:null};B.extend(this,this,nc)};u.Api=B;l.extend(B.prototype,{any:function(){return 0!==this.count()},concat:N.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new B(b[a],this[a]):null},filter:function(a){var b=[];if(N.filter)b=N.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);
return new B(this.context,b)},flatten:function(){var a=[];return new B(this.context,a.concat.apply(a,this.toArray()))},join:N.join,indexOf:N.indexOf||function(a,b){b=b||0;for(var c=this.length;b<c;b++)if(this[b]===a)return b;return-1},iterator:function(a,b,c,d){var e=[],h,f,g=this.context,k,m=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);var n=0;for(h=g.length;n<h;n++){var p=new B(g[n]);if("table"===b){var t=c.call(p,g[n],n);t!==q&&e.push(t)}else if("columns"===b||"rows"===b)t=c.call(p,g[n],
this[n],n),t!==q&&e.push(t);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){var v=this[n];"column-rows"===b&&(k=Wa(g[n],m.opts));var x=0;for(f=v.length;x<f;x++)t=v[x],t="cell"===b?c.call(p,g[n],t.row,t.column,n,x):c.call(p,g[n],t,n,x,k),t!==q&&e.push(t)}}return e.length||d?(a=new B(g,a?e.concat.apply([],e):e),b=a.selector,b.rows=m.rows,b.cols=m.cols,b.opts=m.opts,a):this},lastIndexOf:N.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,
map:function(a){var b=[];if(N.map)b=N.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new B(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:N.pop,push:N.push,reduce:N.reduce||function(a,b){return Cb(this,a,b,0,this.length,1)},reduceRight:N.reduceRight||function(a,b){return Cb(this,a,b,this.length-1,-1,-1)},reverse:N.reverse,selector:null,shift:N.shift,slice:function(){return new B(this.context,this)},sort:N.sort,
splice:N.splice,toArray:function(){return N.slice.call(this)},to$:function(){return l(this)},toJQuery:function(){return l(this)},unique:function(){return new B(this.context,Ma(this))},unshift:N.unshift});B.extend=function(a,b,c){if(c.length&&b&&(b instanceof B||b.__dt_wrapper)){var d,e=function(g,k,m){return function(){var n=k.apply(g,arguments);B.extend(n,n,m.methodExt);return n}};var h=0;for(d=c.length;h<d;h++){var f=c[h];b[f.name]="function"===f.type?e(a,f.val,f):"object"===f.type?{}:f.val;b[f.name].__dt_wrapper=
!0;B.extend(a,b[f.name],f.propExt)}}};B.register=y=function(a,b){if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)B.register(a[c],b);else{d=a.split(".");var e=nc,h;a=0;for(c=d.length;a<c;a++){var f=(h=-1!==d[a].indexOf("()"))?d[a].replace("()",""):d[a];a:{var g=0;for(var k=e.length;g<k;g++)if(e[g].name===f){g=e[g];break a}g=null}g||(g={name:f,val:{},methodExt:[],propExt:[],type:"object"},e.push(g));a===c-1?(g.val=b,g.type="function"===typeof b?"function":l.isPlainObject(b)?"object":"other"):e=h?
g.methodExt:g.propExt}}};B.registerPlural=J=function(a,b,c){B.register(a,c);B.register(b,function(){var d=c.apply(this,arguments);return d===this?this:d instanceof B?d.length?Array.isArray(d[0])?new B(d.context,d[0]):d[0]:q:d})};var oc=function(a,b){if(Array.isArray(a))return l.map(a,function(d){return oc(d,b)});if("number"===typeof a)return[b[a]];var c=l.map(b,function(d,e){return d.nTable});return l(c).filter(a).map(function(d){d=l.inArray(this,c);return b[d]}).toArray()};y("tables()",function(a){return a!==
q&&null!==a?new B(oc(a,this.context)):this});y("table()",function(a){a=this.tables(a);var b=a.context;return b.length?new B(b[0]):a});J("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});J("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});J("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});J("tables().footer()","table().footer()",
function(){return this.iterator("table",function(a){return a.nTFoot},1)});J("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});y("draw()",function(a){return this.iterator("table",function(b){"page"===a?ja(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),ka(b,!1===a))})});y("page()",function(a){return a===q?this.page.info().page:this.iterator("table",function(b){Ra(b,a)})});y("page.info()",function(a){if(0===this.context.length)return q;
a=this.context[0];var b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===Q(a)}});y("page.len()",function(a){return a===q?0!==this.context.length?this.context[0]._iDisplayLength:q:this.iterator("table",function(b){kb(b,a)})});var pc=function(a,b,c){if(c){var d=new B(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==
Q(a))ka(a,b);else{V(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();Oa(a,[],function(h){Ka(a);h=za(a,h);for(var f=0,g=h.length;f<g;f++)ia(a,h[f]);ka(a,b);V(a,!1)})}};y("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});y("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});y("ajax.reload()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});y("ajax.url()",function(a){var b=this.context;if(a===q){if(0===b.length)return q;
b=b[0];return b.ajax?l.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(c){l.isPlainObject(c.ajax)?c.ajax.url=a:c.ajax=a})});y("ajax.url().load()",function(a,b){return this.iterator("table",function(c){pc(c,!1===b,a)})});var ub=function(a,b,c,d,e){var h=[],f,g,k;var m=typeof b;b&&"string"!==m&&"function"!==m&&b.length!==q||(b=[b]);m=0;for(g=b.length;m<g;m++){var n=b[m]&&b[m].split&&!b[m].match(/[\[\(:]/)?b[m].split(","):[b[m]];var p=0;for(k=n.length;p<k;p++)(f=
c("string"===typeof n[p]?n[p].trim():n[p]))&&f.length&&(h=h.concat(f))}a=M.selector[a];if(a.length)for(m=0,g=a.length;m<g;m++)h=a[m](d,e,h);return Ma(h)},vb=function(a){a||(a={});a.filter&&a.search===q&&(a.search=a.filter);return l.extend({search:"none",order:"current",page:"all"},a)},wb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Wa=function(a,b){var c=[],d=a.aiDisplay;var e=a.aiDisplayMaster;
var h=b.search;var f=b.order;b=b.page;if("ssp"==Q(a))return"removed"===h?[]:qa(0,e.length);if("current"==b)for(f=a._iDisplayStart,a=a.fnDisplayEnd();f<a;f++)c.push(d[f]);else if("current"==f||"applied"==f)if("none"==h)c=e.slice();else if("applied"==h)c=d.slice();else{if("removed"==h){var g={};f=0;for(a=d.length;f<a;f++)g[d[f]]=null;c=l.map(e,function(k){return g.hasOwnProperty(k)?null:k})}}else if("index"==f||"original"==f)for(f=0,a=a.aoData.length;f<a;f++)"none"==h?c.push(f):(e=l.inArray(f,d),(-1===
e&&"removed"==h||0<=e&&"applied"==h)&&c.push(f));return c},yc=function(a,b,c){var d;return ub("row",b,function(e){var h=hc(e),f=a.aoData;if(null!==h&&!c)return[h];d||(d=Wa(a,c));if(null!==h&&-1!==l.inArray(h,d))return[h];if(null===e||e===q||""===e)return d;if("function"===typeof e)return l.map(d,function(k){var m=f[k];return e(k,m._aData,m.nTr)?k:null});if(e.nodeName){h=e._DT_RowIndex;var g=e._DT_CellIndex;if(h!==q)return f[h]&&f[h].nTr===e?[h]:[];if(g)return f[g.row]&&f[g.row].nTr===e.parentNode?
[g.row]:[];h=l(e).closest("*[data-dt-row]");return h.length?[h.data("dt-row")]:[]}if("string"===typeof e&&"#"===e.charAt(0)&&(h=a.aIds[e.replace(/^#/,"")],h!==q))return[h.idx];h=kc(Ea(a.aoData,d,"nTr"));return l(h).filter(e).map(function(){return this._DT_RowIndex}).toArray()},a,c)};y("rows()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=vb(b);var c=this.iterator("table",function(d){return yc(d,a,b)},1);c.selector.rows=a;c.selector.opts=b;return c});y("rows().nodes()",function(){return this.iterator("row",
function(a,b){return a.aoData[b].nTr||q},1)});y("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return Ea(a.aoData,b,"_aData")},1)});J("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){b=b.aoData[c];return"search"===a?b._aFilterData:b._aSortData},1)});J("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){va(b,c,a)})});J("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,
b){return b},1)});J("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var h=0,f=this[d].length;h<f;h++){var g=c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);b.push((!0===a?"#":"")+g)}return new B(c,b)});J("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,h=e[c],f,g;e.splice(c,1);var k=0;for(f=e.length;k<f;k++){var m=e[k];var n=m.anCells;null!==m.nTr&&(m.nTr._DT_RowIndex=k);if(null!==n)for(m=0,g=n.length;m<
g;m++)n[m]._DT_CellIndex.row=k}La(b.aiDisplayMaster,c);La(b.aiDisplay,c);La(a[d],c,!1);0<b._iRecordsDisplay&&b._iRecordsDisplay--;lb(b);c=b.rowIdFn(h._aData);c!==q&&delete b.aIds[c]});this.iterator("table",function(b){for(var c=0,d=b.aoData.length;c<d;c++)b.aoData[c].idx=c});return this});y("rows.add()",function(a){var b=this.iterator("table",function(d){var e,h=[];var f=0;for(e=a.length;f<e;f++){var g=a[f];g.nodeName&&"TR"===g.nodeName.toUpperCase()?h.push(Ja(d,g)[0]):h.push(ia(d,g))}return h},1),
c=this.rows(-1);c.pop();l.merge(c,b);return c});y("row()",function(a,b){return wb(this.rows(a,b))});y("row().data()",function(a){var b=this.context;if(a===q)return b.length&&this.length?b[0].aoData[this[0]]._aData:q;var c=b[0].aoData[this[0]];c._aData=a;Array.isArray(a)&&c.nTr&&c.nTr.id&&ha(b[0].rowId)(a,c.nTr.id);va(b[0],this[0],"data");return this});y("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});y("row.add()",function(a){a instanceof
l&&a.length&&(a=a[0]);var b=this.iterator("table",function(c){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?Ja(c,a)[0]:ia(c,a)});return this.row(b[0])});l(A).on("plugin-init.dt",function(a,b){a=new B(b);a.on("stateSaveParams",function(d,e,h){d=e.rowIdFn;e=e.aoData;for(var f=[],g=0;g<e.length;g++)e[g]._detailsShow&&f.push("#"+d(e[g]._aData));h.childRows=f});var c=a.state.loaded();c&&c.childRows&&a.rows(l.map(c.childRows,function(d){return d.replace(/:/g,"\\:")})).every(function(){F(b,null,"requestChild",
[this])})});var zc=function(a,b,c,d){var e=[],h=function(f,g){if(Array.isArray(f)||f instanceof l)for(var k=0,m=f.length;k<m;k++)h(f[k],g);else f.nodeName&&"tr"===f.nodeName.toLowerCase()?e.push(f):(k=l("<tr><td></td></tr>").addClass(g),l("td",k).addClass(g).html(f)[0].colSpan=oa(a),e.push(k[0]))};h(c,d);b._details&&b._details.detach();b._details=l(e);b._detailsShow&&b._details.insertAfter(b.nTr)},qc=u.util.throttle(function(a){Ca(a[0])},500),xb=function(a,b){var c=a.context;c.length&&(a=c[0].aoData[b!==
q?b:a[0]])&&a._details&&(a._details.remove(),a._detailsShow=q,a._details=q,l(a.nTr).removeClass("dt-hasChild"),qc(c))},rc=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];d._details&&((d._detailsShow=b)?(d._details.insertAfter(d.nTr),l(d.nTr).addClass("dt-hasChild")):(d._details.detach(),l(d.nTr).removeClass("dt-hasChild")),F(c[0],null,"childRow",[b,a.row(a[0])]),Ac(c[0]),qc(c))}},Ac=function(a){var b=new B(a),c=a.aoData;b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
0<U(c,"_details").length&&(b.on("draw.dt.DT_details",function(d,e){a===e&&b.rows({page:"current"}).eq(0).each(function(h){h=c[h];h._detailsShow&&h._details.insertAfter(h.nTr)})}),b.on("column-visibility.dt.DT_details",function(d,e,h,f){if(a===e)for(e=oa(e),h=0,f=c.length;h<f;h++)d=c[h],d._details&&d._details.children("td[colspan]").attr("colspan",e)}),b.on("destroy.dt.DT_details",function(d,e){if(a===e)for(d=0,e=c.length;d<e;d++)c[d]._details&&xb(b,d)}))};y("row().child()",function(a,b){var c=this.context;
if(a===q)return c.length&&this.length?c[0].aoData[this[0]]._details:q;!0===a?this.child.show():!1===a?xb(this):c.length&&this.length&&zc(c[0],c[0].aoData[this[0]],a,b);return this});y(["row().child.show()","row().child().show()"],function(a){rc(this,!0);return this});y(["row().child.hide()","row().child().hide()"],function(){rc(this,!1);return this});y(["row().child.remove()","row().child().remove()"],function(){xb(this);return this});y("row().child.isShown()",function(){var a=this.context;return a.length&&
this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var Bc=/^([^:]+):(name|visIdx|visible)$/,sc=function(a,b,c,d,e){c=[];d=0;for(var h=e.length;d<h;d++)c.push(T(a,e[d],b));return c},Cc=function(a,b,c){var d=a.aoColumns,e=U(d,"sName"),h=U(d,"nTh");return ub("column",b,function(f){var g=hc(f);if(""===f)return qa(d.length);if(null!==g)return[0<=g?g:d.length+g];if("function"===typeof f){var k=Wa(a,c);return l.map(d,function(p,t){return f(t,sc(a,t,0,0,k),h[t])?t:null})}var m="string"===typeof f?f.match(Bc):
"";if(m)switch(m[2]){case "visIdx":case "visible":g=parseInt(m[1],10);if(0>g){var n=l.map(d,function(p,t){return p.bVisible?t:null});return[n[n.length+g]]}return[ta(a,g)];case "name":return l.map(e,function(p,t){return p===m[1]?t:null});default:return[]}if(f.nodeName&&f._DT_CellIndex)return[f._DT_CellIndex.column];g=l(h).filter(f).map(function(){return l.inArray(this,h)}).toArray();if(g.length||!f.nodeName)return g;g=l(f).closest("*[data-dt-column]");return g.length?[g.data("dt-column")]:[]},a,c)};
y("columns()",function(a,b){a===q?a="":l.isPlainObject(a)&&(b=a,a="");b=vb(b);var c=this.iterator("table",function(d){return Cc(d,a,b)},1);c.selector.cols=a;c.selector.opts=b;return c});J("columns().header()","column().header()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTh},1)});J("columns().footer()","column().footer()",function(a,b){return this.iterator("column",function(c,d){return c.aoColumns[d].nTf},1)});J("columns().data()","column().data()",function(){return this.iterator("column-rows",
sc,1)});J("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});J("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,h){return Ea(b.aoData,h,"search"===a?"_aFilterData":"_aSortData",c)},1)});J("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return Ea(a.aoData,e,"anCells",b)},1)});J("columns().visible()","column().visible()",
function(a,b){var c=this,d=this.iterator("column",function(e,h){if(a===q)return e.aoColumns[h].bVisible;var f=e.aoColumns,g=f[h],k=e.aoData,m;if(a!==q&&g.bVisible!==a){if(a){var n=l.inArray(!0,U(f,"bVisible"),h+1);f=0;for(m=k.length;f<m;f++){var p=k[f].nTr;e=k[f].anCells;p&&p.insertBefore(e[h],e[n]||null)}}else l(U(e.aoData,"anCells",h)).detach();g.bVisible=a}});a!==q&&this.iterator("table",function(e){xa(e,e.aoHeader);xa(e,e.aoFooter);e.aiDisplay.length||l(e.nTBody).find("td[colspan]").attr("colspan",
oa(e));Ca(e);c.iterator("column",function(h,f){F(h,null,"column-visibility",[h,f,a,b])});(b===q||b)&&c.columns.adjust()});return d});J("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ua(b,c):c},1)});y("columns.adjust()",function(){return this.iterator("table",function(a){sa(a)},1)});y("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return ta(c,b);if("fromData"===
a||"toVisible"===a)return ua(c,b)}});y("column()",function(a,b){return wb(this.columns(a,b))});var Dc=function(a,b,c){var d=a.aoData,e=Wa(a,c),h=kc(Ea(d,e,"anCells")),f=l(lc([],h)),g,k=a.aoColumns.length,m,n,p,t,v,x;return ub("cell",b,function(w){var r="function"===typeof w;if(null===w||w===q||r){m=[];n=0;for(p=e.length;n<p;n++)for(g=e[n],t=0;t<k;t++)v={row:g,column:t},r?(x=d[g],w(v,T(a,g,t),x.anCells?x.anCells[t]:null)&&m.push(v)):m.push(v);return m}if(l.isPlainObject(w))return w.column!==q&&w.row!==
q&&-1!==l.inArray(w.row,e)?[w]:[];r=f.filter(w).map(function(C,G){return{row:G._DT_CellIndex.row,column:G._DT_CellIndex.column}}).toArray();if(r.length||!w.nodeName)return r;x=l(w).closest("*[data-dt-row]");return x.length?[{row:x.data("dt-row"),column:x.data("dt-column")}]:[]},a,c)};y("cells()",function(a,b,c){l.isPlainObject(a)&&(a.row===q?(c=a,a=null):(c=b,b=null));l.isPlainObject(b)&&(c=b,b=null);if(null===b||b===q)return this.iterator("table",function(n){return Dc(n,a,vb(c))});var d=c?{page:c.page,
order:c.order,search:c.search}:{},e=this.columns(b,d),h=this.rows(a,d),f,g,k,m;d=this.iterator("table",function(n,p){n=[];f=0;for(g=h[p].length;f<g;f++)for(k=0,m=e[p].length;k<m;k++)n.push({row:h[p][f],column:e[p][k]});return n},1);d=c&&c.selected?this.cells(d,c):d;l.extend(d.selector,{cols:b,rows:a,opts:c});return d});J("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:q},1)});y("cells().data()",function(){return this.iterator("cell",
function(a,b,c){return T(a,b,c)},1)});J("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});J("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return T(b,c,d,a)},1)});J("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:ua(a,c)}},1)});J("cells().invalidate()","cell().invalidate()",
function(a){return this.iterator("cell",function(b,c,d){va(b,c,a,d)})});y("cell()",function(a,b,c){return wb(this.cells(a,b,c))});y("cell().data()",function(a){var b=this.context,c=this[0];if(a===q)return b.length&&c.length?T(b[0],c[0].row,c[0].column):q;Eb(b[0],c[0].row,c[0].column,a);va(b[0],c[0].row,"data",c[0].column);return this});y("order()",function(a,b){var c=this.context;if(a===q)return 0!==c.length?c[0].aaSorting:q;"number"===typeof a?a=[[a,b]]:a.length&&!Array.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));
return this.iterator("table",function(d){d.aaSorting=a.slice()})});y("order.listener()",function(a,b,c){return this.iterator("table",function(d){fb(d,a,b,c)})});y("order.fixed()",function(a){if(!a){var b=this.context;b=b.length?b[0].aaSortingFixed:q;return Array.isArray(b)?{pre:b}:b}return this.iterator("table",function(c){c.aaSortingFixed=l.extend(!0,{},a)})});y(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];l.each(b[d],function(h,
f){e.push([f,a])});c.aaSorting=e})});y("search()",function(a,b,c,d){var e=this.context;return a===q?0!==e.length?e[0].oPreviousSearch.sSearch:q:this.iterator("table",function(h){h.oFeatures.bFilter&&ya(h,l.extend({},h.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});J("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,h){var f=e.aoPreSearchCols;if(a===q)return f[h].sSearch;e.oFeatures.bFilter&&
(l.extend(f[h],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ya(e,e.oPreviousSearch,1))})});y("state()",function(){return this.context.length?this.context[0].oSavedState:null});y("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});y("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});y("state.save()",function(){return this.iterator("table",function(a){Ca(a)})});
u.versionCheck=u.fnVersionCheck=function(a){var b=u.version.split(".");a=a.split(".");for(var c,d,e=0,h=a.length;e<h;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};u.isDataTable=u.fnIsDataTable=function(a){var b=l(a).get(0),c=!1;if(a instanceof u.Api)return!0;l.each(u.settings,function(d,e){d=e.nScrollHead?l("table",e.nScrollHead)[0]:null;var h=e.nScrollFoot?l("table",e.nScrollFoot)[0]:null;if(e.nTable===b||d===b||h===b)c=!0});return c};u.tables=u.fnTables=function(a){var b=
!1;l.isPlainObject(a)&&(b=a.api,a=a.visible);var c=l.map(u.settings,function(d){if(!a||a&&l(d.nTable).is(":visible"))return d.nTable});return b?new B(c):c};u.camelToHungarian=P;y("$()",function(a,b){b=this.rows(b).nodes();b=l(b);return l([].concat(b.filter(a).toArray(),b.find(a).toArray()))});l.each(["on","one","off"],function(a,b){y(b+"()",function(){var c=Array.prototype.slice.call(arguments);c[0]=l.map(c[0].split(/\s/),function(e){return e.match(/\.dt\b/)?e:e+".dt"}).join(" ");var d=l(this.tables().nodes());
d[b].apply(d,c);return this})});y("clear()",function(){return this.iterator("table",function(a){Ka(a)})});y("settings()",function(){return new B(this.context,this.context)});y("init()",function(){var a=this.context;return a.length?a[0].oInit:null});y("data()",function(){return this.iterator("table",function(a){return U(a.aoData,"_aData")}).flatten()});y("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,h=b.nTBody,f=b.nTHead,
g=b.nTFoot,k=l(e);h=l(h);var m=l(b.nTableWrapper),n=l.map(b.aoData,function(t){return t.nTr}),p;b.bDestroying=!0;F(b,"aoDestroyCallback","destroy",[b]);a||(new B(b)).columns().visible(!0);m.off(".DT").find(":not(tbody *)").off(".DT");l(z).off(".DT-"+b.sInstance);e!=f.parentNode&&(k.children("thead").detach(),k.append(f));g&&e!=g.parentNode&&(k.children("tfoot").detach(),k.append(g));b.aaSorting=[];b.aaSortingFixed=[];Sa(b);l(n).removeClass(b.asStripeClasses.join(" "));l("th, td",f).removeClass(d.sSortable+
" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);h.children().detach();h.append(n);f=a?"remove":"detach";k[f]();m[f]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),k.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&h.children().each(function(t){l(this).addClass(b.asDestroyStripes[t%p])}));c=l.inArray(b,u.settings);-1!==c&&u.settings.splice(c,1)})});l.each(["column","row","cell"],function(a,b){y(b+"s().every()",function(c){var d=this.selector.opts,e=
this;return this.iterator(b,function(h,f,g,k,m){c.call(e[b](f,"cell"===b?g:d,"cell"===b?d:q),f,g,k,m)})})});y("i18n()",function(a,b,c){var d=this.context[0];a=na(a)(d.oLanguage);a===q&&(a=b);c!==q&&l.isPlainObject(a)&&(a=a[c]!==q?a[c]:a._);return a.replace("%d",c)});u.version="1.11.5";u.settings=[];u.models={};u.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,"return":!1};u.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",
src:null,idx:-1};u.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};u.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,
25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,
fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},
fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",
sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:l.extend({},u.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};E(u.defaults);u.defaults.column={aDataSort:null,
iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};E(u.defaults.column);u.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,
iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],
aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:q,oAjaxData:q,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,
bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Q(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Q(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,h=
e.bPaginate;return e.bServerSide?!1===h||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!h||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};u.ext=M={buttons:{},classes:{},build:"bs5/dt-1.11.5/sp-2.0.0/sr-1.1.0",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:u.fnVersionCheck,
iApiIndex:0,oJUIClasses:{},sVersion:u.version};l.extend(M,{afnFiltering:M.search,aTypes:M.type.detect,ofnSearch:M.type.search,oSort:M.type.order,afnSortData:M.order,aoFeatures:M.feature,oApi:M.internal,oStdClasses:M.classes,oPagination:M.pager});l.extend(u.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",
sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var ec=u.ext.pager;l.extend(ec,{simple:function(a,b){return["previous","next"]},full:function(a,b){return["first","previous","next","last"]},numbers:function(a,b){return[Da(a,b)]},simple_numbers:function(a,b){return["previous",Da(a,b),"next"]},
full_numbers:function(a,b){return["first","previous",Da(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",Da(a,b),"last"]},_numbers:Da,numbers_length:7});l.extend(!0,u.ext.renderer,{pageButton:{_:function(a,b,c,d,e,h){var f=a.oClasses,g=a.oLanguage.oPaginate,k=a.oLanguage.oAria.paginate||{},m,n,p=0,t=function(x,w){var r,C=f.sPageButtonDisabled,G=function(I){Ra(a,I.data.action,!0)};var aa=0;for(r=w.length;aa<r;aa++){var L=w[aa];if(Array.isArray(L)){var O=l("<"+(L.DT_el||"div")+"/>").appendTo(x);
t(O,L)}else{m=null;n=L;O=a.iTabIndex;switch(L){case "ellipsis":x.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=g.sFirst;0===e&&(O=-1,n+=" "+C);break;case "previous":m=g.sPrevious;0===e&&(O=-1,n+=" "+C);break;case "next":m=g.sNext;if(0===h||e===h-1)O=-1,n+=" "+C;break;case "last":m=g.sLast;if(0===h||e===h-1)O=-1,n+=" "+C;break;default:m=a.fnFormatNumber(L+1),n=e===L?f.sPageButtonActive:""}null!==m&&(O=l("<a>",{"class":f.sPageButton+" "+n,"aria-controls":a.sTableId,"aria-label":k[L],
"data-dt-idx":p,tabindex:O,id:0===c&&"string"===typeof L?a.sTableId+"_"+L:null}).html(m).appendTo(x),ob(O,{action:L},G),p++)}}};try{var v=l(b).find(A.activeElement).data("dt-idx")}catch(x){}t(l(b).empty(),d);v!==q&&l(b).find("[data-dt-idx="+v+"]").trigger("focus")}}});l.extend(u.ext.type.detect,[function(a,b){b=b.oLanguage.sDecimal;return tb(a,b)?"num"+b:null},function(a,b){if(a&&!(a instanceof Date)&&!vc.test(a))return null;b=Date.parse(a);return null!==b&&!isNaN(b)||Z(a)?"date":null},function(a,
b){b=b.oLanguage.sDecimal;return tb(a,b,!0)?"num-fmt"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b)?"html-num"+b:null},function(a,b){b=b.oLanguage.sDecimal;return jc(a,b,!0)?"html-num-fmt"+b:null},function(a,b){return Z(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);l.extend(u.ext.type.search,{html:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," ").replace(Va,""):""},string:function(a){return Z(a)?a:"string"===typeof a?a.replace(gc," "):a}});var Ua=function(a,
b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=ic(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};l.extend(M.type.order,{"date-pre":function(a){a=Date.parse(a);return isNaN(a)?-Infinity:a},"html-pre":function(a){return Z(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return Z(a)?"":"string"===typeof a?a.toLowerCase():a.toString?a.toString():""},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<
b?1:a>b?-1:0}});Xa("");l.extend(!0,u.ext.renderer,{header:{_:function(a,b,c,d){l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass))})},jqueryui:function(a,b,c,d){l("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(l("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);l(a.nTable).on("order.dt.DT",function(e,h,f,g){a===h&&(e=c.idx,b.removeClass(d.sSortAsc+
" "+d.sSortDesc).addClass("asc"==g[e]?d.sSortAsc:"desc"==g[e]?d.sSortDesc:c.sSortingClass),b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass("asc"==g[e]?d.sSortJUIAsc:"desc"==g[e]?d.sSortJUIDesc:c.sSortingClassJUI))})}}});var yb=function(a){Array.isArray(a)&&(a=a.join(","));return"string"===typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):a};u.render=
{number:function(a,b,c,d,e){return{display:function(h){if("number"!==typeof h&&"string"!==typeof h)return h;var f=0>h?"-":"",g=parseFloat(h);if(isNaN(g))return yb(h);g=g.toFixed(c);h=Math.abs(g);g=parseInt(h,10);h=c?b+(h-g).toFixed(c).substring(2):"";0===g&&0===parseFloat(h)&&(f="");return f+(d||"")+g.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+h+(e||"")}}},text:function(){return{display:yb,filter:yb}}};l.extend(u.ext.internal,{_fnExternApiFunc:fc,_fnBuildAjax:Oa,_fnAjaxUpdate:Gb,_fnAjaxParameters:Pb,
_fnAjaxUpdateDraw:Qb,_fnAjaxDataSrc:za,_fnAddColumn:Ya,_fnColumnOptions:Ga,_fnAdjustColumnSizing:sa,_fnVisibleToColumnIndex:ta,_fnColumnIndexToVisible:ua,_fnVisbleColumns:oa,_fnGetColumns:Ia,_fnColumnTypes:$a,_fnApplyColumnDefs:Db,_fnHungarianMap:E,_fnCamelToHungarian:P,_fnLanguageCompat:ma,_fnBrowserDetect:Bb,_fnAddData:ia,_fnAddTr:Ja,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==q?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return l.inArray(c,a.aoData[b].anCells)},_fnGetCellData:T,
_fnSetCellData:Eb,_fnSplitObjNotation:cb,_fnGetObjectDataFn:na,_fnSetObjectDataFn:ha,_fnGetDataMaster:db,_fnClearTable:Ka,_fnDeleteIndex:La,_fnInvalidate:va,_fnGetRowElements:bb,_fnCreateTr:ab,_fnBuildHead:Fb,_fnDrawHead:xa,_fnDraw:ja,_fnReDraw:ka,_fnAddOptionsHtml:Ib,_fnDetectHeader:wa,_fnGetUniqueThs:Na,_fnFeatureHtmlFilter:Kb,_fnFilterComplete:ya,_fnFilterCustom:Tb,_fnFilterColumn:Sb,_fnFilter:Rb,_fnFilterCreateSearch:ib,_fnEscapeRegex:jb,_fnFilterData:Ub,_fnFeatureHtmlInfo:Nb,_fnUpdateInfo:Xb,
_fnInfoMacros:Yb,_fnInitialise:Aa,_fnInitComplete:Pa,_fnLengthChange:kb,_fnFeatureHtmlLength:Jb,_fnFeatureHtmlPaginate:Ob,_fnPageChange:Ra,_fnFeatureHtmlProcessing:Lb,_fnProcessingDisplay:V,_fnFeatureHtmlTable:Mb,_fnScrollDraw:Ha,_fnApplyToChildren:ca,_fnCalculateColumnWidths:Za,_fnThrottle:hb,_fnConvertToWidth:Zb,_fnGetWidestNode:$b,_fnGetMaxLenString:ac,_fnStringToCss:K,_fnSortFlatten:pa,_fnSort:Hb,_fnSortAria:cc,_fnSortListener:nb,_fnSortAttachListener:fb,_fnSortingClasses:Sa,_fnSortData:bc,_fnSaveState:Ca,
_fnLoadState:dc,_fnImplementState:pb,_fnSettingsFromNode:Ta,_fnLog:da,_fnMap:X,_fnBindAction:ob,_fnCallbackReg:R,_fnCallbackFire:F,_fnLengthOverflow:lb,_fnRenderer:gb,_fnDataSource:Q,_fnRowAttributes:eb,_fnExtend:qb,_fnCalculateEnd:function(){}});l.fn.dataTable=u;u.$=l;l.fn.dataTableSettings=u.settings;l.fn.dataTableExt=u.ext;l.fn.DataTable=function(a){return l(this).dataTable(a).api()};l.each(u,function(a,b){l.fn.DataTable[a]=b});return u});


/*!
 DataTables Bootstrap 5 integration
 2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var e=a.length,d=0;d<e;d++){var f=a[d];if(b.call(c,f,d,a))return{i:d,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};
$jscomp.polyfill=function(a,b,c,e){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,e):$jscomp.polyfillUnisolated(a,b,c,e))};$jscomp.polyfillUnisolated=function(a,b,c,e){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];if(!(d in c))return;c=c[d]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<d.length-1;f++){var l=d[f];if(!(l in e))return;e=e[l]}d=d[d.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?e[d]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=
$jscomp.propertyToPolyfillSymbol[d],$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(b,c){return $jscomp.findInternal(this,b,c).v}},"es6","es3");
(function(a){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(b){return a(b,window,document)}):"object"===typeof exports?module.exports=function(b,c){b||(b=window);c&&c.fn.dataTable||(c=require("datatables.net")(b,c).$);return a(c,b,b.document)}:a(jQuery,window,document)})(function(a,b,c,e){var d=a.fn.dataTable;a.extend(!0,d.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
renderer:"bootstrap"});a.extend(d.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});d.ext.renderer.pageButton.bootstrap=function(f,l,A,B,m,t){var u=new d.Api(f),C=f.oClasses,n=f.oLanguage.oPaginate,D=f.oLanguage.oAria.paginate||{},h,k,v=0,y=function(q,w){var x,E=function(p){p.preventDefault();a(p.currentTarget).hasClass("disabled")||
u.page()==p.data.action||u.page(p.data.action).draw("page")};var r=0;for(x=w.length;r<x;r++){var g=w[r];if(Array.isArray(g))y(q,g);else{k=h="";switch(g){case "ellipsis":h="&#x2026;";k="disabled";break;case "first":h=n.sFirst;k=g+(0<m?"":" disabled");break;case "previous":h=n.sPrevious;k=g+(0<m?"":" disabled");break;case "next":h=n.sNext;k=g+(m<t-1?"":" disabled");break;case "last":h=n.sLast;k=g+(m<t-1?"":" disabled");break;default:h=g+1,k=m===g?"active":""}if(h){var F=a("<li>",{"class":C.sPageButton+
" "+k,id:0===A&&"string"===typeof g?f.sTableId+"_"+g:null}).append(a("<a>",{href:"#","aria-controls":f.sTableId,"aria-label":D[g],"data-dt-idx":v,tabindex:f.iTabIndex,"class":"page-link"}).html(h)).appendTo(q);f.oApi._fnBindAction(F,{action:g},E);v++}}}};try{var z=a(l).find(c.activeElement).data("dt-idx")}catch(q){}y(a(l).empty().html('<ul class="pagination"/>').children("ul"),B);z!==e&&a(l).find("[data-dt-idx="+z+"]").trigger("focus")};return d});


/*!
 SearchPanes 2.0.0
 2019-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.getGlobal=function(l){l=["object"==typeof globalThis&&globalThis,l,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var n=0;n<l.length;++n){var k=l[n];if(k&&k.Math==Math)return k}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy=function(){try{var l={},n=Object.create(new $jscomp.global.Proxy(l,{get:function(k,r,v){return k==l&&"q"==r&&v==n}}));return!0===n.q}catch(k){return!1}};$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS=!1;$jscomp.ES6_CONFORMANCE=$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS&&$jscomp.checkEs6ConformanceViaProxy();$jscomp.arrayIteratorImpl=function(l){var n=0;return function(){return n<l.length?{done:!1,value:l[n++]}:{done:!0}}};$jscomp.arrayIterator=function(l){return{next:$jscomp.arrayIteratorImpl(l)}};
$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(l,n,k){if(l==Array.prototype||l==Object.prototype)return l;l[n]=k.value;return l};$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(l,n){var k=$jscomp.propertyToPolyfillSymbol[n];if(null==k)return l[n];k=l[k];return void 0!==k?k:l[n]};$jscomp.polyfill=function(l,n,k,r){n&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(l,n,k,r):$jscomp.polyfillUnisolated(l,n,k,r))};
$jscomp.polyfillUnisolated=function(l,n,k,r){k=$jscomp.global;l=l.split(".");for(r=0;r<l.length-1;r++){var v=l[r];if(!(v in k))return;k=k[v]}l=l[l.length-1];r=k[l];n=n(r);n!=r&&null!=n&&$jscomp.defineProperty(k,l,{configurable:!0,writable:!0,value:n})};
$jscomp.polyfillIsolated=function(l,n,k,r){var v=l.split(".");l=1===v.length;r=v[0];r=!l&&r in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var A=0;A<v.length-1;A++){var C=v[A];if(!(C in r))return;r=r[C]}v=v[v.length-1];k=$jscomp.IS_SYMBOL_NATIVE&&"es6"===k?r[v]:null;n=n(k);null!=n&&(l?$jscomp.defineProperty($jscomp.polyfills,v,{configurable:!0,writable:!0,value:n}):n!==k&&($jscomp.propertyToPolyfillSymbol[v]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(v):$jscomp.POLYFILL_PREFIX+v,v=
$jscomp.propertyToPolyfillSymbol[v],$jscomp.defineProperty(r,v,{configurable:!0,writable:!0,value:n})))};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(l){if(l)return l;var n=function(v,A){this.$jscomp$symbol$id_=v;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:A})};n.prototype.toString=function(){return this.$jscomp$symbol$id_};var k=0,r=function(v){if(this instanceof r)throw new TypeError("Symbol is not a constructor");return new n("jscomp_symbol_"+(v||"")+"_"+k++,v)};return r},"es6","es3");$jscomp.initSymbolIterator=function(){};
$jscomp.polyfill("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var n="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),k=0;k<n.length;k++){var r=$jscomp.global[n[k]];"function"===typeof r&&"function"!=typeof r.prototype[l]&&$jscomp.defineProperty(r.prototype,l,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return l},"es6",
"es3");$jscomp.initSymbolAsyncIterator=function(){};$jscomp.iteratorPrototype=function(l){l={next:l};l[Symbol.iterator]=function(){return this};return l};$jscomp.makeIterator=function(l){var n="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];return n?n.call(l):$jscomp.arrayIterator(l)};$jscomp.owns=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)};
$jscomp.polyfill("WeakMap",function(l){function n(){if(!l||!Object.seal)return!1;try{var p=Object.seal({}),u=Object.seal({}),x=new l([[p,2],[u,3]]);if(2!=x.get(p)||3!=x.get(u))return!1;x.delete(p);x.set(u,4);return!x.has(p)&&4==x.get(u)}catch(F){return!1}}function k(){}function r(p){var u=typeof p;return"object"===u&&null!==p||"function"===u}function v(p){if(!$jscomp.owns(p,C)){var u=new k;$jscomp.defineProperty(p,C,{value:u})}}function A(p){if(!$jscomp.ISOLATE_POLYFILLS){var u=Object[p];u&&(Object[p]=
function(x){if(x instanceof k)return x;Object.isExtensible(x)&&v(x);return u(x)})}}if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(l&&$jscomp.ES6_CONFORMANCE)return l}else if(n())return l;var C="$jscomp_hidden_"+Math.random();A("freeze");A("preventExtensions");A("seal");var I=0,t=function(p){this.id_=(I+=Math.random()+1).toString();if(p){p=$jscomp.makeIterator(p);for(var u;!(u=p.next()).done;)u=u.value,this.set(u[0],u[1])}};t.prototype.set=function(p,u){if(!r(p))throw Error("Invalid WeakMap key");
v(p);if(!$jscomp.owns(p,C))throw Error("WeakMap key fail: "+p);p[C][this.id_]=u;return this};t.prototype.get=function(p){return r(p)&&$jscomp.owns(p,C)?p[C][this.id_]:void 0};t.prototype.has=function(p){return r(p)&&$jscomp.owns(p,C)&&$jscomp.owns(p[C],this.id_)};t.prototype.delete=function(p){return r(p)&&$jscomp.owns(p,C)&&$jscomp.owns(p[C],this.id_)?delete p[C][this.id_]:!1};return t},"es6","es3");$jscomp.MapEntry=function(){};
$jscomp.polyfill("Map",function(l){function n(){if($jscomp.ASSUME_NO_NATIVE_MAP||!l||"function"!=typeof l||!l.prototype.entries||"function"!=typeof Object.seal)return!1;try{var t=Object.seal({x:4}),p=new l($jscomp.makeIterator([[t,"s"]]));if("s"!=p.get(t)||1!=p.size||p.get({x:4})||p.set({x:4},"t")!=p||2!=p.size)return!1;var u=p.entries(),x=u.next();if(x.done||x.value[0]!=t||"s"!=x.value[1])return!1;x=u.next();return x.done||4!=x.value[0].x||"t"!=x.value[1]||!u.next().done?!1:!0}catch(F){return!1}}
if($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS){if(l&&$jscomp.ES6_CONFORMANCE)return l}else if(n())return l;var k=new WeakMap,r=function(t){this.data_={};this.head_=C();this.size=0;if(t){t=$jscomp.makeIterator(t);for(var p;!(p=t.next()).done;)p=p.value,this.set(p[0],p[1])}};r.prototype.set=function(t,p){t=0===t?0:t;var u=v(this,t);u.list||(u.list=this.data_[u.id]=[]);u.entry?u.entry.value=p:(u.entry={next:this.head_,previous:this.head_.previous,head:this.head_,key:t,value:p},u.list.push(u.entry),
this.head_.previous.next=u.entry,this.head_.previous=u.entry,this.size++);return this};r.prototype.delete=function(t){t=v(this,t);return t.entry&&t.list?(t.list.splice(t.index,1),t.list.length||delete this.data_[t.id],t.entry.previous.next=t.entry.next,t.entry.next.previous=t.entry.previous,t.entry.head=null,this.size--,!0):!1};r.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=C();this.size=0};r.prototype.has=function(t){return!!v(this,t).entry};r.prototype.get=function(t){return(t=
v(this,t).entry)&&t.value};r.prototype.entries=function(){return A(this,function(t){return[t.key,t.value]})};r.prototype.keys=function(){return A(this,function(t){return t.key})};r.prototype.values=function(){return A(this,function(t){return t.value})};r.prototype.forEach=function(t,p){for(var u=this.entries(),x;!(x=u.next()).done;)x=x.value,t.call(p,x[1],x[0],this)};r.prototype[Symbol.iterator]=r.prototype.entries;var v=function(t,p){var u=p&&typeof p;"object"==u||"function"==u?k.has(p)?u=k.get(p):
(u=""+ ++I,k.set(p,u)):u="p_"+p;var x=t.data_[u];if(x&&$jscomp.owns(t.data_,u))for(t=0;t<x.length;t++){var F=x[t];if(p!==p&&F.key!==F.key||p===F.key)return{id:u,list:x,index:t,entry:F}}return{id:u,list:x,index:-1,entry:void 0}},A=function(t,p){var u=t.head_;return $jscomp.iteratorPrototype(function(){if(u){for(;u.head!=t.head_;)u=u.previous;for(;u.next!=u.head;)return u=u.next,{done:!1,value:p(u)};u=null}return{done:!0,value:void 0}})},C=function(){var t={};return t.previous=t.next=t.head=t},I=0;
return r},"es6","es3");$jscomp.findInternal=function(l,n,k){l instanceof String&&(l=String(l));for(var r=l.length,v=0;v<r;v++){var A=l[v];if(n.call(k,A,v,l))return{i:v,v:A}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(l){return l?l:function(n,k){return $jscomp.findInternal(this,n,k).v}},"es6","es3");
$jscomp.iteratorFromArray=function(l,n){l instanceof String&&(l+="");var k=0,r={next:function(){if(k<l.length){var v=k++;return{value:n(v,l[v]),done:!1}}r.next=function(){return{done:!0,value:void 0}};return r.next()}};r[Symbol.iterator]=function(){return r};return r};$jscomp.polyfill("Array.prototype.keys",function(l){return l?l:function(){return $jscomp.iteratorFromArray(this,function(n){return n})}},"es6","es3");
$jscomp.polyfill("Object.is",function(l){return l?l:function(n,k){return n===k?0!==n||1/n===1/k:n!==n&&k!==k}},"es6","es3");$jscomp.polyfill("Array.prototype.includes",function(l){return l?l:function(n,k){var r=this;r instanceof String&&(r=String(r));var v=r.length;k=k||0;for(0>k&&(k=Math.max(k+v,0));k<v;k++){var A=r[k];if(A===n||Object.is(A,n))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(l,n,k){if(null==l)throw new TypeError("The 'this' value for String.prototype."+k+" must not be null or undefined");if(n instanceof RegExp)throw new TypeError("First argument to String.prototype."+k+" must not be a regular expression");return l+""};$jscomp.polyfill("String.prototype.includes",function(l){return l?l:function(n,k){return-1!==$jscomp.checkStringArgs(this,n,"includes").indexOf(n,k||0)}},"es6","es3");
$jscomp.underscoreProtoCanBeSet=function(){var l={a:!0},n={};try{return n.__proto__=l,n.a}catch(k){}return!1};$jscomp.setPrototypeOf=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(l,n){l.__proto__=n;if(l.__proto__!==n)throw new TypeError(l+" is not extensible");return l}:null;$jscomp.polyfill("Object.setPrototypeOf",function(l){return l||$jscomp.setPrototypeOf},"es6","es5");
(function(){function l(h){k=h;r=h.fn.dataTable}function n(h){D=h;H=h.fn.dataTable}var k,r,v=function(){function h(a,b,c,d,e){var f=this;void 0===e&&(e=null);if(!r||!r.versionCheck||!r.versionCheck("1.10.0"))throw Error("SearchPane requires DataTables 1.10 or newer");if(!r.select)throw Error("SearchPane requires Select");a=new r.Api(a);this.classes=k.extend(!0,{},h.classes);this.c=k.extend(!0,{},h.defaults,b);b&&b.hideCount&&void 0===b.viewCount&&(this.c.viewCount=!this.c.hideCount);b=a.columns().eq(0).toArray().length;
this.s={colExists:c<b,colOpts:void 0,customPaneSettings:e,displayed:!1,dt:a,dtPane:void 0,firstSet:!0,index:c,indexes:[],listSet:!1,name:void 0,rowData:{arrayFilter:[],arrayOriginal:[],bins:{},binsOriginal:{},filterMap:new Map,totalOptions:0},scrollTop:0,searchFunction:void 0,selections:[],serverSelect:[],serverSelecting:!1,tableLength:null,updating:!1};this.s.colOpts=this.s.colExists?this._getOptions():this._getBonusOptions();this.dom={buttonGroup:k("<div/>").addClass(this.classes.buttonGroup),clear:k('<button type="button">&#215;</button>').attr("disabled",
"true").addClass(this.classes.disabledButton).addClass(this.classes.paneButton).addClass(this.classes.clearButton).html(this.s.dt.i18n("searchPanes.clearPane",this.c.i18n.clearPane)),collapseButton:k('<button type="button"><span class="'+this.classes.caret+'">&#x5e;</span></button>').addClass(this.classes.paneButton).addClass(this.classes.collapseButton),container:k("<div/>").addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout+(10>parseInt(this.c.layout.split("-")[1],
10)?this.c.layout:this.c.layout.split("-")[0]+"-9")).addClass(this.s.customPaneSettings&&this.s.customPaneSettings.className?this.s.customPaneSettings.className:""),countButton:k('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton),dtP:k("<table><thead><tr><th>"+(this.s.colExists?k(this.s.dt.column(this.s.index).header()).text():this.s.customPaneSettings.header||"Custom Pane")+"</th><th/></tr></thead></table>"),lower:k("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
nameButton:k('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton),panesContainer:d,searchBox:k("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),searchButton:k('<button type = "button"/>').addClass(this.classes.searchIcon).addClass(this.classes.paneButton),searchCont:k("<div/>").addClass(this.classes.searchCont),searchLabelCont:k("<div/>").addClass(this.classes.searchLabelCont),topRow:k("<div/>").addClass(this.classes.topRow),
upper:k("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)};this.s.name=this.s.colOpts.name?this.s.colOpts.name:this.s.customPaneSettings&&this.s.customPaneSettings.name?this.s.customPaneSettings.name:this.s.colExists?k(this.s.dt.column(this.s.index).header()).text():this.s.customPaneSettings.header||"Custom Pane";var g=this.s.dt.table(0).node();this.s.searchFunction=function(m,q,w){if(0===f.s.selections.length||m.nTable!==g)return!0;m=null;f.s.colExists&&(m=q[f.s.index],
"filter"!==f.s.colOpts.orthogonal.filter&&(m=f.s.rowData.filterMap.get(w),m instanceof k.fn.dataTable.Api&&(m=m.toArray())));return f._search(m,w)};k.fn.dataTable.ext.search.push(this.s.searchFunction);if(this.c.clear)this.dom.clear.on("click.dtsp",function(){f.dom.container.find("."+f.classes.search.replace(/\s+/g,".")).each(function(){k(this).val("").trigger("input")});f.clearPane()});this.s.dt.on("draw.dtsp",function(){return f.adjustTopRow()});this.s.dt.on("buttons-action.dtsp",function(){return f.adjustTopRow()});
this.s.dt.on("column-reorder.dtsp",function(m,q,w){f.s.index=w.mapping[f.s.index]});return this}h.prototype.addRow=function(a,b,c,d,e,f,g){f||(f=this.s.rowData.bins[b]?this.s.rowData.bins[b]:0);g||(g=this._getShown(b));for(var m,q=0,w=this.s.indexes;q<w.length;q++){var y=w[q];y.filter===b&&(m=y.index)}void 0===m&&(m=this.s.indexes.length,this.s.indexes.push({filter:b,index:m}));return this.s.dtPane.row.add({className:e,display:""!==a?a:this.emptyMessage(),filter:b,index:m,shown:g,sort:c,total:f,type:d})};
h.prototype.adjustTopRow=function(){var a=this.dom.container.find("."+this.classes.subRowsContainer.replace(/\s+/g,".")),b=this.dom.container.find("."+this.classes.subRow1.replace(/\s+/g,".")),c=this.dom.container.find("."+this.classes.subRow2.replace(/\s+/g,".")),d=this.dom.container.find("."+this.classes.topRow.replace(/\s+/g,"."));(252>k(a[0]).width()||252>k(d[0]).width())&&0!==k(a[0]).width()?(k(a[0]).addClass(this.classes.narrow),k(b[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch),
k(c[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)):(k(a[0]).removeClass(this.classes.narrow),k(b[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch),k(c[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton))};h.prototype.clearData=function(){this.s.rowData={arrayFilter:[],arrayOriginal:[],bins:{},binsOriginal:{},filterMap:new Map,totalOptions:0}};h.prototype.clearPane=function(){this.s.dtPane.rows({selected:!0}).deselect();
this.updateTable();return this};h.prototype.collapse=function(){var a=this;this.s.displayed&&(this.c.collapse||!0===this.s.colOpts.collapse)&&!1!==this.s.colOpts.collapse&&(k(this.s.dtPane.table().container()).addClass(this.classes.hidden),this.dom.topRow.addClass(this.classes.bordered),this.dom.nameButton.addClass(this.classes.disabledButton),this.dom.countButton.addClass(this.classes.disabledButton),this.dom.searchButton.addClass(this.classes.disabledButton),this.dom.collapseButton.addClass(this.classes.rotated),
this.dom.topRow.one("click.dtsp",function(){return a.show()}))};h.prototype.destroy=function(){this.s.dtPane&&this.s.dtPane.off(".dtsp");this.s.dt.off(".dtsp");this.dom.clear.off(".dtsp");this.dom.nameButton.off(".dtsp");this.dom.countButton.off(".dtsp");this.dom.searchButton.off(".dtsp");this.dom.collapseButton.off(".dtsp");k(this.s.dt.table().node()).off(".dtsp");this.dom.container.detach();for(var a=k.fn.dataTable.ext.search.indexOf(this.s.searchFunction);-1!==a;)k.fn.dataTable.ext.search.splice(a,
1),a=k.fn.dataTable.ext.search.indexOf(this.s.searchFunction);this.s.dtPane&&this.s.dtPane.destroy();this.s.listSet=!1};h.prototype.emptyMessage=function(){var a=this.c.i18n.emptyMessage;this.c.emptyMessage&&(a=this.c.emptyMessage);!1!==this.s.colOpts.emptyMessage&&null!==this.s.colOpts.emptyMessage&&(a=this.s.colOpts.emptyMessage);return this.s.dt.i18n("searchPanes.emptyMessage",a)};h.prototype.getPaneCount=function(){return this.s.dtPane?this.s.dtPane.rows({selected:!0}).data().toArray().length:
0};h.prototype.rebuildPane=function(a,b){void 0===a&&(a=null);void 0===b&&(b=!1);this.clearData();var c=[];this.s.serverSelect=[];var d=null;this.s.dtPane&&(b&&(this.s.dt.page.info().serverSide?this.s.serverSelect=this.s.dtPane.rows({selected:!0}).data().toArray():c=this.s.dtPane.rows({selected:!0}).data().toArray()),this.s.dtPane.clear().destroy(),d=this.dom.container.prev(),this.destroy(),this.s.dtPane=void 0,k.fn.dataTable.ext.search.push(this.s.searchFunction));this.dom.container.removeClass(this.classes.hidden);
this.s.displayed=!1;this._buildPane(this.s.dt.page.info().serverSide?this.s.serverSelect:c,a,d);return this};h.prototype.resize=function(a){this.c.layout=a;this.dom.container.removeClass().addClass(this.classes.show).addClass(this.classes.container).addClass(this.s.colOpts.className).addClass(this.classes.layout+(10>parseInt(a.split("-")[1],10)?a:a.split("-")[0]+"-9")).addClass(null!==this.s.customPaneSettings&&this.s.customPaneSettings.className?this.s.customPaneSettings.className:"");this.adjustTopRow()};
h.prototype.setListeners=function(){var a=this;if(this.s.dtPane){this.s.dtPane.select.style("os");var b;this.s.dtPane.off("select.dtsp").on("select.dtsp",function(){clearTimeout(b);a._updateSelection(!a.s.updating);a.dom.clear.removeClass(a.classes.disabledButton).removeAttr("disabled")});this.s.dtPane.off("deselect.dtsp").on("deselect.dtsp",function(){b=setTimeout(function(){a._updateSelection(!0);0===a.s.dtPane.rows({selected:!0}).data().toArray().length&&a.dom.clear.addClass(a.classes.disabledButton).attr("disabled",
"true")},50)});this.s.firstSet&&(this.s.firstSet=!1,this.s.dt.on("stateSaveParams.dtsp",function(c,d,e){if(k.isEmptyObject(e))a.s.dtPane.state.clear();else{c=[];if(a.s.dtPane){c=a.s.dtPane.rows({selected:!0}).data().map(function(y){return y.filter.toString()}).toArray();var f=a.dom.searchBox.val();var g=a.s.dtPane.order();var m=a.s.rowData.binsOriginal;var q=a.s.rowData.arrayOriginal;var w=a.dom.collapseButton.hasClass(a.classes.rotated)}void 0===e.searchPanes&&(e.searchPanes={});void 0===e.searchPanes.panes&&
(e.searchPanes.panes=[]);for(d=0;d<e.searchPanes.panes.length;d++)e.searchPanes.panes[d].id===a.s.index&&(e.searchPanes.panes.splice(d,1),d--);e.searchPanes.panes.push({arrayFilter:q,bins:m,collapsed:w,id:a.s.index,order:g,searchTerm:f,selected:c})}}));this.s.dtPane.off("user-select.dtsp").on("user-select.dtsp",function(c,d,e,f,g){g.stopPropagation()});this.s.dtPane.off("draw.dtsp").on("draw.dtsp",function(){return a.adjustTopRow()});this.dom.nameButton.off("click.dtsp").on("click.dtsp",function(){var c=
a.s.dtPane.order()[0][1];a.s.dtPane.order([0,"asc"===c?"desc":"asc"]).draw();a.s.dt.state.save()});this.dom.countButton.off("click.dtsp").on("click.dtsp",function(){var c=a.s.dtPane.order()[0][1];a.s.dtPane.order([1,"asc"===c?"desc":"asc"]).draw();a.s.dt.state.save()});this.dom.collapseButton.off("click.dtsp").on("click.dtsp",function(c){c.stopPropagation();c=k(a.s.dtPane.table().container());c.toggleClass(a.classes.hidden);a.dom.topRow.toggleClass(a.classes.bordered);a.dom.nameButton.toggleClass(a.classes.disabledButton);
a.dom.countButton.toggleClass(a.classes.disabledButton);a.dom.searchButton.toggleClass(a.classes.disabledButton);a.dom.collapseButton.toggleClass(a.classes.rotated);if(c.hasClass(a.classes.hidden))a.dom.topRow.on("click.dtsp",function(){return a.dom.collapseButton.click()});else a.dom.topRow.off("click.dtsp");a.s.dt.state.save()});this.dom.clear.off("click.dtsp").on("click.dtsp",function(){a.dom.container.find("."+a.classes.search.replace(/ /g,".")).each(function(){k(this).val("").trigger("input")});
a.clearPane()});this.dom.searchButton.off("click.dtsp").on("click.dtsp",function(){return a.dom.searchBox.focus()});this.dom.searchBox.off("click.dtsp").on("input.dtsp",function(){var c=a.dom.searchBox.val();a.s.dtPane.search(c).draw();"string"===typeof c&&(0<c.length||0===c.length&&0<a.s.dtPane.rows({selected:!0}).data().toArray().length)?a.dom.clear.removeClass(a.classes.disabledButton).removeAttr("disabled"):a.dom.clear.addClass(a.classes.disabledButton).attr("disabled","true");a.s.dt.state.save()});
this.s.dtPane.select.style("os")}};h.prototype._serverPopulate=function(a){if(a.tableLength)this.s.tableLength=a.tableLength,this.s.rowData.totalOptions=this.s.tableLength;else if(null===this.s.tableLength||this.s.dt.rows()[0].length>this.s.tableLength)this.s.tableLength=this.s.dt.rows()[0].length,this.s.rowData.totalOptions=this.s.tableLength;var b=this.s.dt.column(this.s.index).dataSrc();if(a.searchPanes.options[b]){var c=0;for(a=a.searchPanes.options[b];c<a.length;c++)b=a[c],this.s.rowData.arrayFilter.push({display:b.label,
filter:b.value,sort:b.label,type:b.label}),this.s.rowData.bins[b.value]=b.total}c=Object.keys(this.s.rowData.bins).length;a=this._uniqueRatio(c,this.s.tableLength);!1===this.s.displayed&&((void 0===this.s.colOpts.show&&null===this.s.colOpts.threshold?a>this.c.threshold:a>this.s.colOpts.threshold)||!0!==this.s.colOpts.show&&1>=c)?(this.dom.container.addClass(this.classes.hidden),this.s.displayed=!1):(this.s.rowData.arrayOriginal=this.s.rowData.arrayFilter,this.s.rowData.binsOriginal=this.s.rowData.bins,
this.s.displayed=!0)};h.prototype.show=function(){this.s.displayed&&(this.dom.topRow.removeClass(this.classes.bordered),this.dom.nameButton.removeClass(this.classes.disabledButton),this.dom.countButton.removeClass(this.classes.disabledButton),this.dom.searchButton.removeClass(this.classes.disabledButton),this.dom.collapseButton.removeClass(this.classes.rotated),k(this.s.dtPane.table().container()).removeClass(this.classes.hidden))};h.prototype._uniqueRatio=function(a,b){return 0<b&&(0<this.s.rowData.totalOptions&&
!this.s.dt.page.info().serverSide||this.s.dt.page.info().serverSide&&0<this.s.tableLength)?a/this.s.rowData.totalOptions:1};h.prototype.updateTable=function(){var a=this.s.dtPane.rows({selected:!0}).data().toArray().map(function(b){return b.filter});this.s.selections=a;this._searchExtras()};h.prototype._getComparisonRows=function(){var a=this.s.colOpts.options?this.s.colOpts.options:this.s.customPaneSettings&&this.s.customPaneSettings.options?this.s.customPaneSettings.options:void 0;if(void 0!==a){var b=
this.s.dt.rows(),c=b.data().toArray(),d=[];this.s.dtPane.clear();this.s.indexes=[];for(var e=0;e<a.length;e++){var f=a[e],g=""!==f.label?f.label:this.emptyMessage(),m=f.className,q=g,w="function"===typeof f.value?f.value:[],y=g,z=0;if("function"===typeof f.value){for(var E=0;E<c.length;E++)f.value.call(this.s.dt,c[E],b[0][E])&&z++;"function"!==typeof w&&w.push(f.filter)}d.push(this.addRow(q,w,y,g,m,z))}return d}};h.prototype._getMessage=function(a){return this.s.dt.i18n("searchPanes.count",this.c.i18n.count).replace(/{total}/g,
a.total)};h.prototype._getShown=function(a){};h.prototype._getPaneConfig=function(){var a=this,b=r.Scroller,c=this.s.dt.settings()[0].oLanguage;c.url=void 0;c.sUrl=void 0;return{columnDefs:[{className:"dtsp-nameColumn",data:"display",render:function(d,e,f){if("sort"===e)return f.sort;if("type"===e)return f.type;f=a._getMessage(f);f='<span class="'+a.classes.pill+'">'+f+"</span>";a.c.viewCount&&a.s.colOpts.viewCount||(f="");return"filter"===e?"string"===typeof d&&null!==d.match(/<[^>]*>/)?d.replace(/<[^>]*>/g,
""):d:'<div class="'+a.classes.nameCont+'"><span title="'+("string"===typeof d&&null!==d.match(/<[^>]*>/)?d.replace(/<[^>]*>/g,""):d)+'" class="'+a.classes.name+'">'+d+"</span>"+f+"</div>"},targets:0,type:this.s.dt.settings()[0].aoColumns[this.s.index]?this.s.dt.settings()[0].aoColumns[this.s.index]._sManualType:null},{className:"dtsp-countColumn "+this.classes.badgePill,data:"total",searchable:!1,targets:1,visible:!1}],deferRender:!0,dom:"t",info:!1,language:c,paging:b?!0:!1,scrollX:!1,scrollY:"200px",
scroller:b?!0:!1,select:!0,stateSave:this.s.dt.settings()[0].oFeatures.bStateSave?!0:!1}};h.prototype._makeSelection=function(){this.updateTable();this.s.updating=!0;this.s.dt.draw();this.s.updating=!1};h.prototype._populatePaneArray=function(a,b,c,d){void 0===d&&(d=this.s.rowData.bins);if("string"===typeof this.s.colOpts.orthogonal)c=c.oApi._fnGetCellData(c,a,this.s.index,this.s.colOpts.orthogonal),this.s.rowData.filterMap.set(a,c),this._addOption(c,c,c,c,b,d);else{var e=c.oApi._fnGetCellData(c,
a,this.s.index,this.s.colOpts.orthogonal.search);null===e&&(e="");"string"===typeof e&&(e=e.replace(/<[^>]*>/g,""));this.s.rowData.filterMap.set(a,e);d[e]?d[e]++:(d[e]=1,this._addOption(e,c.oApi._fnGetCellData(c,a,this.s.index,this.s.colOpts.orthogonal.display),c.oApi._fnGetCellData(c,a,this.s.index,this.s.colOpts.orthogonal.sort),c.oApi._fnGetCellData(c,a,this.s.index,this.s.colOpts.orthogonal.type),b,d))}this.s.rowData.totalOptions++};h.prototype._reloadSelect=function(a){if(void 0!==a){for(var b,
c=0;c<a.searchPanes.panes.length;c++)if(a.searchPanes.panes[c].id===this.s.index){b=c;break}if(b){c=this.s.dtPane;var d=c.rows({order:"index"}).data().map(function(g){return null!==g.filter?g.filter.toString():null}).toArray(),e=0;for(a=a.searchPanes.panes[b].selected;e<a.length;e++){b=a[e];var f=-1;null!==b&&(f=d.indexOf(b.toString()));-1<f&&(this.s.serverSelecting=!0,c.row(f).select(),this.s.serverSelecting=!1)}}}};h.prototype._updateSelection=function(a){this.s.scrollTop=k(this.s.dtPane.table().node()).parent()[0].scrollTop;
this.s.dt.page.info().serverSide&&!this.s.updating?this.s.serverSelecting||(this.s.serverSelect=this.s.dtPane.rows({selected:!0}).data().toArray(),this.s.dt.draw(!1)):a&&this._makeSelection()};h.prototype._addOption=function(a,b,c,d,e,f){if(Array.isArray(a)||a instanceof r.Api)if(a instanceof r.Api&&(a=a.toArray(),b=b.toArray()),a.length===b.length)for(var g=0;g<a.length;g++)f[a[g]]?f[a[g]]++:(f[a[g]]=1,e.push({display:b[g],filter:a[g],sort:c[g],type:d[g]})),this.s.rowData.totalOptions++;else throw Error("display and filter not the same length");
else"string"===typeof this.s.colOpts.orthogonal?(f[a]?f[a]++:(f[a]=1,e.push({display:b,filter:a,sort:c,type:d})),this.s.rowData.totalOptions++):e.push({display:b,filter:a,sort:c,type:d})};h.prototype._buildPane=function(a,b,c){var d=this;void 0===a&&(a=[]);void 0===b&&(b=null);void 0===c&&(c=null);this.s.selections=[];var e=this.s.dt.state.loaded();this.s.listSet&&(e=this.s.dt.state());if(this.s.colExists){var f=-1;if(e&&e.searchPanes&&e.searchPanes.panes)for(var g=0;g<e.searchPanes.panes.length;g++)if(e.searchPanes.panes[g].id===
this.s.index){f=g;break}if((!1===this.s.colOpts.show||void 0!==this.s.colOpts.show&&!0!==this.s.colOpts.show)&&-1===f)return this.dom.container.addClass(this.classes.hidden),this.s.displayed=!1;if(!0===this.s.colOpts.show||-1!==f)this.s.displayed=!0;if(this.s.dt.page.info().serverSide||b&&b.searchPanes&&b.searchPanes.options)b&&b.searchPanes&&b.searchPanes.options&&this._serverPopulate(b);else{0===this.s.rowData.arrayFilter.length&&(this.s.rowData.totalOptions=0,this._populatePane(),this.s.rowData.arrayOriginal=
this.s.rowData.arrayFilter,this.s.rowData.binsOriginal=this.s.rowData.bins);g=Object.keys(this.s.rowData.binsOriginal).length;f=this._uniqueRatio(g,this.s.dt.rows()[0].length);if(!1===this.s.displayed&&((void 0===this.s.colOpts.show&&null===this.s.colOpts.threshold?f>this.c.threshold:f>this.s.colOpts.threshold)||!0!==this.s.colOpts.show&&1>=g)){this.dom.container.addClass(this.classes.hidden);this.s.displayed=!1;return}this.dom.container.addClass(this.classes.show);this.s.displayed=!0}}else this.s.displayed=
!0;this._displayPane();if(!this.s.listSet)this.dom.dtP.on("stateLoadParams.dtsp",function(w,y,z){k.isEmptyObject(d.s.dt.state.loaded())&&k.each(z,function(E){delete z[E]})});null!==c&&0<this.dom.panesContainer.has(c).length?this.dom.container.insertAfter(c):this.dom.panesContainer.prepend(this.dom.container);c=k.fn.dataTable.ext.errMode;k.fn.dataTable.ext.errMode="none";this.s.dtPane=this.dom.dtP.DataTable(k.extend(!0,this._getPaneConfig(),this.c.dtOpts,this.s.colOpts?this.s.colOpts.dtOpts:{},this.s.colOpts.options||
!this.s.colExists?{createdRow:function(w,y){k(w).addClass(y.className)}}:void 0,null!==this.s.customPaneSettings&&this.s.customPaneSettings.dtOpts?this.s.customPaneSettings.dtOpts:{},k.fn.dataTable.versionCheck("2")?{layout:{bottomLeft:null,bottomRight:null,topLeft:null,topRight:null}}:{}));this.dom.dtP.addClass(this.classes.table);g="Custom Pane";this.s.customPaneSettings&&this.s.customPaneSettings.header?g=this.s.customPaneSettings.header:this.s.colOpts.header?g=this.s.colOpts.header:this.s.colExists&&
(g=k.fn.dataTable.versionCheck("2")?this.s.dt.column(this.s.index).title():this.s.dt.settings()[0].aoColumns[this.s.index].sTitle);g=this._escapeHTML(g);this.dom.searchBox.attr("placeholder",g);k.fn.dataTable.select.init(this.s.dtPane);k.fn.dataTable.ext.errMode=c;if(this.s.colExists)for(g=0,f=this.s.rowData.arrayFilter.length;g<f;g++)if(this.s.dt.page.info().serverSide){c=this.addRow(this.s.rowData.arrayFilter[g].display,this.s.rowData.arrayFilter[g].filter,this.s.rowData.arrayFilter[g].sort,this.s.rowData.arrayFilter[g].type);
for(var m=0,q=this.s.serverSelect;m<q.length;m++)q[m].filter===this.s.rowData.arrayFilter[g].filter&&(this.s.serverSelecting=!0,c.select(),this.s.serverSelecting=!1)}else!this.s.dt.page.info().serverSide&&this.s.rowData.arrayFilter[g]?this.addRow(this.s.rowData.arrayFilter[g].display,this.s.rowData.arrayFilter[g].filter,this.s.rowData.arrayFilter[g].sort,this.s.rowData.arrayFilter[g].type):this.s.dt.page.info().serverSide||this.addRow("","","","");r.select.init(this.s.dtPane);(this.s.colOpts.options||
this.s.customPaneSettings&&this.s.customPaneSettings.options)&&this._getComparisonRows();this.s.dtPane.draw();this.s.dtPane.table().node().parentNode.scrollTop=this.s.scrollTop;this.adjustTopRow();this.setListeners();this.s.listSet=!0;for(g=0;g<a.length;g++)if(f=a[g])for(m=0,q=this.s.dtPane.rows().indexes().toArray();m<q.length;m++)c=q[m],this.s.dtPane.row(c).data()&&f.filter===this.s.dtPane.row(c).data().filter&&(this.s.dt.page.info().serverSide?(this.s.serverSelecting=!0,this.s.dtPane.row(c).select(),
this.s.serverSelecting=!1):this.s.dtPane.row(c).select());this.s.dt.page.info().serverSide&&this.s.dtPane.search(this.dom.searchBox.val()).draw();if((this.c.initCollapsed&&!1!==this.s.colOpts.initCollapsed||this.s.colOpts.initCollapsed)&&(this.c.collapse&&!1!==this.s.colOpts.collapse||this.s.colOpts.collapse))if(this.s.dtPane.settings()[0]._bInitComplete)this.collapse();else this.s.dtPane.one("init",function(){return d.collapse()});if(e&&e.searchPanes&&e.searchPanes.panes&&(!b||1===b.draw))for(this._reloadSelect(e),
b=0,e=e.searchPanes.panes;b<e.length;b++)a=e[b],a.id===this.s.index&&(a.searchTerm&&0<a.searchTerm.length&&this.dom.searchBox.val(a.searchTerm).trigger("input"),a.order&&this.s.dtPane.order(a.order).draw(),a.collapsed?this.collapse():this.show());return!0};h.prototype._displayPane=function(){this.dom.dtP.empty();this.dom.topRow.empty().addClass(this.classes.topRow);3<parseInt(this.c.layout.split("-")[1],10)&&this.dom.container.addClass(this.classes.smallGap);this.dom.topRow.addClass(this.classes.subRowsContainer).append(this.dom.upper.append(this.dom.searchCont)).append(this.dom.lower.append(this.dom.buttonGroup));
(!1===this.c.dtOpts.searching||this.s.colOpts.dtOpts&&!1===this.s.colOpts.dtOpts.searching||!this.c.controls||!this.s.colOpts.controls||this.s.customPaneSettings&&this.s.customPaneSettings.dtOpts&&void 0!==this.s.customPaneSettings.dtOpts.searching&&!this.s.customPaneSettings.dtOpts.searching)&&this.dom.searchBox.removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton).attr("disabled","true");this.dom.searchBox.appendTo(this.dom.searchCont);this._searchContSetup();this.c.clear&&
this.c.controls&&this.s.colOpts.controls&&this.dom.clear.appendTo(this.dom.buttonGroup);this.c.orderable&&this.s.colOpts.orderable&&this.c.controls&&this.s.colOpts.controls&&this.dom.nameButton.appendTo(this.dom.buttonGroup);this.c.viewCount&&this.s.colOpts.viewCount&&this.c.orderable&&this.s.colOpts.orderable&&this.c.controls&&this.s.colOpts.controls&&this.dom.countButton.appendTo(this.dom.buttonGroup);(this.c.collapse&&!1!==this.s.colOpts.collapse||this.s.colOpts.collapse)&&this.c.controls&&this.s.colOpts.controls&&
this.dom.collapseButton.appendTo(this.dom.buttonGroup);this.dom.container.prepend(this.dom.topRow).append(this.dom.dtP).show()};h.prototype._escapeHTML=function(a){return a.toString().replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"')};h.prototype._getBonusOptions=function(){return k.extend(!0,{},h.defaults,{threshold:null},this.c?this.c:{})};h.prototype._getOptions=function(){var a=this.s.dt.settings()[0].aoColumns[this.s.index].searchPanes,b=k.extend(!0,{},h.defaults,
{collapse:null,emptyMessage:!1,initCollapsed:null,threshold:null},a);a&&a.hideCount&&void 0===a.viewCount&&(b.viewCount=!a.hideCount);return b};h.prototype._populatePane=function(){this.s.rowData.arrayFilter=[];this.s.rowData.bins={};var a=this.s.dt.settings()[0];if(!this.s.dt.page.info().serverSide)for(var b=0,c=this.s.dt.rows().indexes().toArray();b<c.length;b++)this._populatePaneArray(c[b],this.s.rowData.arrayFilter,a)};h.prototype._search=function(a,b){for(var c=this.s.colOpts,d=this.s.dt,e=0,
f=this.s.selections;e<f.length;e++){var g=f[e];"string"===typeof g&&"string"===typeof a&&(g=this._escapeHTML(g));if(Array.isArray(a))if("and"===c.combiner){if(!a.includes(g))return!1}else{if(a.includes(g))return!0}else if("function"===typeof g)if(g.call(d,d.row(b).data(),b)){if("or"===c.combiner)return!0}else{if("and"===c.combiner)return!1}else if(a===g||("string"!==typeof a||0!==a.length)&&a==g||null===g&&"string"===typeof a&&""===a)return!0}return"and"===c.combiner?!0:!1};h.prototype._searchContSetup=
function(){this.c.controls&&this.s.colOpts.controls&&this.dom.searchButton.appendTo(this.dom.searchLabelCont);!1===this.c.dtOpts.searching||!1===this.s.colOpts.dtOpts.searching||this.s.customPaneSettings&&this.s.customPaneSettings.dtOpts&&void 0!==this.s.customPaneSettings.dtOpts.searching&&!this.s.customPaneSettings.dtOpts.searching||this.dom.searchLabelCont.appendTo(this.dom.searchCont)};h.prototype._searchExtras=function(){var a=this.s.updating;this.s.updating=!0;var b=this.s.dtPane.rows({selected:!0}).data().pluck("filter").toArray(),
c=b.indexOf(this.emptyMessage()),d=k(this.s.dtPane.table().container());-1<c&&(b[c]="");0<b.length?d.addClass(this.classes.selected):0===b.length&&d.removeClass(this.classes.selected);this.s.updating=a};h.version="2.0.0-dev";h.classes={bordered:"dtsp-bordered",buttonGroup:"dtsp-buttonGroup",buttonSub:"dtsp-buttonSub",caret:"dtsp-caret",clear:"dtsp-clear",clearAll:"dtsp-clearAll",clearButton:"clearButton",collapseAll:"dtsp-collapseAll",collapseButton:"dtsp-collapseButton",container:"dtsp-searchPane",
countButton:"dtsp-countButton",disabledButton:"dtsp-disabledButton",hidden:"dtsp-hidden",hide:"dtsp-hide",layout:"dtsp-",name:"dtsp-name",nameButton:"dtsp-nameButton",nameCont:"dtsp-nameCont",narrow:"dtsp-narrow",paneButton:"dtsp-paneButton",paneInputButton:"dtsp-paneInputButton",pill:"dtsp-pill",rotated:"dtsp-rotated",search:"dtsp-search",searchCont:"dtsp-searchCont",searchIcon:"dtsp-searchIcon",searchLabelCont:"dtsp-searchButtonCont",selected:"dtsp-selected",smallGap:"dtsp-smallGap",subRow1:"dtsp-subRow1",
subRow2:"dtsp-subRow2",subRowsContainer:"dtsp-subRowsContainer",title:"dtsp-title",topRow:"dtsp-topRow"};h.defaults={clear:!0,collapse:!0,combiner:"or",container:function(a){return a.table().container()},controls:!0,dtOpts:{},emptyMessage:null,hideCount:!1,i18n:{clearPane:"&times;",count:"{total}",emptyMessage:"<em>No data</em>"},initCollapsed:!1,layout:"auto",name:void 0,orderable:!0,orthogonal:{display:"display",filter:"filter",hideCount:!1,search:"filter",show:void 0,sort:"sort",threshold:.6,type:"type",
viewCount:!0},preSelect:[],threshold:.6,viewCount:!0};return h}(),A=window&&window.__extends||function(){var h=function(a,b){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])};return h(a,b)};return function(a,b){function c(){this.constructor=a}h(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}(),C=function(h){function a(b,c,d,e,f){return h.call(this,b,c,d,e,f)||this}A(a,h);
a.prototype._serverPopulate=function(b){this.s.rowData.binsShown={};this.s.rowData.arrayFilter=[];if(void 0!==b.tableLength)this.s.tableLength=b.tableLength,this.s.rowData.totalOptions=this.s.tableLength;else if(null===this.s.tableLength||this.s.dt.rows()[0].length>this.s.tableLength)this.s.tableLength=this.s.dt.rows()[0].length,this.s.rowData.totalOptions=this.s.tableLength;var c=this.s.dt.column(this.s.index).dataSrc();if(void 0!==b.searchPanes.options[c]){var d=0;for(b=b.searchPanes.options[c];d<
b.length;d++)c=b[d],this.s.rowData.arrayFilter.push({display:c.label,filter:c.value,shown:+c.count,sort:c.label,total:+c.total,type:c.label}),this.s.rowData.binsShown[c.value]=+c.count,this.s.rowData.bins[c.value]=+c.total}d=Object.keys(this.s.rowData.bins).length;b=this._uniqueRatio(d,this.s.tableLength);if(!this.s.colOpts.show&&!1===this.s.displayed&&((void 0===this.s.colOpts.show&&null===this.s.colOpts.threshold?b>this.c.threshold:b>this.s.colOpts.threshold)||!0!==this.s.colOpts.show&&1>=d))this.dom.container.addClass(this.classes.hidden),
this.s.displayed=!1;else if(this.s.rowData.arrayOriginal=this.s.rowData.arrayFilter,this.s.rowData.binsOriginal=this.s.rowData.bins,this.s.displayed=!0,this.s.dtPane){d=this.s.serverSelect;this.s.dtPane.rows().remove();for(var e=0,f=this.s.rowData.arrayFilter;e<f.length;e++)if(b=f[e],this._shouldAddRow(b)){c=this.addRow(b.display,b.filter,b.sort,b.type);for(var g=0;g<d.length;g++){var m=d[g];if(m.filter===b.filter){this.s.serverSelecting=!0;c.select();this.s.serverSelecting=!1;d.splice(g,1);this.s.selections.push(b.filter);
break}}}for(e=0;e<d.length;e++)for(m=d[e],f=0,g=this.s.rowData.arrayOriginal;f<g.length;f++)b=g[f],b.filter===m.filter&&(c=this.addRow(b.display,b.filter,b.sort,b.type),this.s.serverSelecting=!0,c.select(),this.s.serverSelecting=!1,this.s.selections.push(b.filter));this.s.serverSelect=this.s.dtPane.rows({selected:!0}).data().toArray();this.s.dtPane.draw()}};a.prototype.updateRows=function(){if(!this.s.dt.page.info().serverSide){this.s.rowData.binsShown={};for(var b=0,c=this.s.dt.rows({search:"applied"}).indexes().toArray();b<
c.length;b++)this._updateShown(c[b],this.s.dt.settings()[0],this.s.rowData.binsShown)}b=0;for(c=this.s.dtPane.rows().data().toArray();b<c.length;b++){var d=c[b];d.shown="number"===typeof this.s.rowData.binsShown[d.filter]?this.s.rowData.binsShown[d.filter]:0;this.s.dtPane.row(d.index).data(d)}this.s.dtPane.draw();this.s.dtPane.table().node().parentNode.scrollTop=this.s.scrollTop};a.prototype._makeSelection=function(){};a.prototype._reloadSelect=function(){};a.prototype._shouldAddRow=function(b){return!0};
a.prototype._updateSelection=function(){!this.s.dt.page.info().serverSide||this.s.updating||this.s.serverSelecting||(this.s.serverSelect=this.s.dtPane.rows({selected:!0}).data().toArray())};a.prototype._updateShown=function(b,c,d){void 0===d&&(d=this.s.rowData.binsShown);b=c.oApi._fnGetCellData(c,b,this.s.index,this.s.colOpts.orthogonal.search);d[b]?d[b]++:d[b]=1};return a}(v),I=window&&window.__extends||function(){var h=function(a,b){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,
d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])};return h(a,b)};return function(a,b){function c(){this.constructor=a}h(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}(),t,p=function(h){function a(b,c,d,e,f){return h.call(this,b,t.extend({i18n:{countFiltered:"{shown} ({total})"}},c),d,e,f)||this}I(a,h);a.prototype._getMessage=function(b){var c=this.s.dt.i18n("searchPanes.count",this.c.i18n.count),d=this.s.dt.i18n("searchPanes.countFiltered",
this.c.i18n.countFiltered);return(this.s.filteringActive?d:c).replace(/{total}/g,b.total).replace(/{shown}/g,b.shown)};a.prototype._getShown=function(b){return this.s.rowData.binsShown&&this.s.rowData.binsShown[b]?this.s.rowData.binsShown[b]:0};return a}(C),u=window&&window.__extends||function(){var h=function(a,b){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])};return h(a,b)};return function(a,b){function c(){this.constructor=
a}h(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}(),x,F=function(h){function a(b,c,d,e,f){return h.call(this,b,x.extend({i18n:{count:"{shown}"}},c),d,e,f)||this}u(a,h);a.prototype.updateRows=function(){var b=this.s.dtPane.rows({selected:!0}).data().toArray();if(this.s.colOpts.options||this.s.customPaneSettings&&this.s.customPaneSettings.options){this._getComparisonRows();for(var c=this.s.dtPane.rows().toArray()[0],d=0;d<c.length;d++){var e=this.s.dtPane.row(c[d]),f=
e.data();if(void 0!==f)if(0===f.shown)e.remove(),c=this.s.dtPane.rows(),d--;else for(var g=0,m=b;g<m.length;g++){var q=m[g];if(f.filter===q.filter){e.select();b.splice(d,1);this.s.selections.push(f.filter);break}}}}else{if(!this.s.dt.page.info().serverSide)for(this._activePopulatePane(),this.s.rowData.binsShown={},e=0,q=this.s.dt.rows({search:"applied"}).indexes().toArray();e<q.length;e++)this._updateShown(q[e],this.s.dt.settings()[0],this.s.rowData.binsShown);this.s.dtPane.rows().remove();f=0;for(g=
this.s.rowData.arrayFilter;f<g.length;f++)if(c=g[f],0!==c.shown)for(e=this.addRow(c.display,c.filter,c.sort,c.type,void 0),d=0;d<b.length;d++)if(q=b[d],q.filter===c.filter){e.select();b.splice(d,1);this.s.selections.push(c.filter);break}for(d=0;d<b.length;d++)for(q=b[d],f=0,g=this.s.rowData.arrayOriginal;f<g.length;f++)c=g[f],c.filter===q.filter&&(e=this.addRow(c.display,c.filter,c.sort,c.type,void 0),e.select(),this.s.selections.push(c.filter))}this.s.dtPane.draw();this.s.dtPane.table().node().parentNode.scrollTop=
this.s.scrollTop;this.s.dt.page.info().serverSide||this.s.dt.draw()};a.prototype._activePopulatePane=function(){this.s.rowData.arrayFilter=[];this.s.rowData.bins={};var b=this.s.dt.settings()[0];if(!this.s.dt.page.info().serverSide)for(var c=0,d=this.s.dt.rows({search:"applied"}).indexes().toArray();c<d.length;c++)this._populatePaneArray(d[c],this.s.rowData.arrayFilter,b)};a.prototype._getComparisonRows=function(){var b=this.s.colOpts.options?this.s.colOpts.options:this.s.customPaneSettings&&this.s.customPaneSettings.options?
this.s.customPaneSettings.options:void 0;if(void 0!==b){var c=this.s.dt.rows(),d=this.s.dt.rows({search:"applied"}),e=c.data().toArray(),f=d.data().toArray(),g=[];this.s.dtPane.clear();this.s.indexes=[];for(var m=0;m<b.length;m++){var q=b[m],w=""!==q.label?q.label:this.emptyMessage(),y=q.className,z=w,E="function"===typeof q.value?q.value:[],B=0,O=w,M=0;if("function"===typeof q.value){for(var G=0;G<e.length;G++)q.value.call(this.s.dt,e[G],c[0][G])&&M++;for(G=0;G<f.length;G++)q.value.call(this.s.dt,
f[G],d[0][G])&&B++;"function"!==typeof E&&E.push(q.filter)}g.push(this.addRow(z,E,O,w,y,M,B))}return g}};a.prototype._getMessage=function(b){return this.s.dt.i18n("searchPanes.count",this.c.i18n.count).replace(/{total}/g,b.total).replace(/{shown}/g,b.shown)};a.prototype._getShown=function(b){return this.s.rowData.binsShown&&this.s.rowData.binsShown[b]?this.s.rowData.binsShown[b]:0};a.prototype._shouldAddRow=function(b){return 0<b.shown};return a}(C),P=window&&window.__extends||function(){var h=function(a,
b){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])};return h(a,b)};return function(a,b){function c(){this.constructor=a}h(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}}(),N,K=function(h){function a(b,c,d,e,f){return h.call(this,b,N.extend({i18n:{count:"{total}",countFiltered:"{shown} ({total})"}},c),d,e,f)||this}P(a,h);a.prototype._activePopulatePane=function(){this.s.rowData.arrayFilter=
[];this.s.rowData.binsShown={};var b=this.s.dt.settings()[0];if(!this.s.dt.page.info().serverSide)for(var c=0,d=this.s.dt.rows({search:"applied"}).indexes().toArray();c<d.length;c++)this._populatePaneArray(d[c],this.s.rowData.arrayFilter,b,this.s.rowData.binsShown)};a.prototype._getMessage=function(b){var c=this.s.dt.i18n("searchPanes.count",this.c.i18n.count),d=this.s.dt.i18n("searchPanes.countFiltered",this.c.i18n.countFiltered);return(this.s.filteringActive?d:c).replace(/{total}/g,b.total).replace(/{shown}/g,
b.shown)};return a}(F),D,H,J=function(){function h(a,b,c,d){var e=this;void 0===c&&(c=!1);void 0===d&&(d=v);if(!H||!H.versionCheck||!H.versionCheck("1.10.0"))throw Error("SearchPane requires DataTables 1.10 or newer");if(!H.select)throw Error("SearchPane requires Select");var f=new H.Api(a);this.classes=D.extend(!0,{},h.classes);this.c=D.extend(!0,{},h.defaults,b);this.dom={clearAll:D('<button type="button"/>').addClass(this.classes.clearAll).html(f.i18n("searchPanes.clearMessage",this.c.i18n.clearMessage)),
collapseAll:D('<button type="button"/>').addClass(this.classes.collapseAll).html(f.i18n("searchPanes.collapseMessage",this.c.i18n.collapseMessage)),container:D("<div/>").addClass(this.classes.panes).html(f.i18n("searchPanes.loadMessage",this.c.i18n.loadMessage)),emptyMessage:D("<div/>").addClass(this.classes.emptyMessage),panes:D("<div/>").addClass(this.classes.container),showAll:D('<button type="button"/>').addClass(this.classes.showAll).addClass(this.classes.disabledButton).attr("disabled","true").html(f.i18n("searchPanes.showMessage",
this.c.i18n.showMessage)),title:D("<div/>").addClass(this.classes.title),titleRow:D("<div/>").addClass(this.classes.titleRow)};this.s={colOpts:[],dt:f,filterCount:0,minPaneWidth:260,page:0,paging:!1,paneClass:d,panes:[],selectionList:[],serverData:{},stateRead:!1,updating:!1};if(!f.settings()[0]._searchPanes){this._getState();if(this.s.dt.page.info().serverSide)this.s.dt.on("preXhr.dtsps",function(g,m,q){void 0===q.searchPanes&&(q.searchPanes={});void 0===q.searchPanes_null&&(q.searchPanes_null={});
g=0;for(m=e.s.selectionList;g<m.length;g++){var w=m[g];var y=e.s.dt.column(w.column).dataSrc();void 0===q.searchPanes[y]&&(q.searchPanes[y]={});void 0===q.searchPanes_null[y]&&(q.searchPanes_null[y]={});for(var z=0;z<w.rows.length;z++)q.searchPanes[y][z]=w.rows[z],null===q.searchPanes[y][z]&&(q.searchPanes_null[y][z]=!0)}0<e.s.selectionList.length&&(q.searchPanesLast=y)});this._setXHR();f.settings()[0]._searchPanes=this;if(this.s.dt.settings()[0]._bInitComplete||c)this._paneDeclare(f,a,b);else f.one("preInit.dtsps",
function(){e._paneDeclare(f,a,b)});return this}}h.prototype.clearSelections=function(){for(var a=0,b=this.s.panes;a<b.length;a++){var c=b[a];c.s.dtPane&&(c.s.scrollTop=c.s.dtPane.table().node().parentNode.scrollTop)}this.dom.container.find("."+this.classes.search.replace(/\s+/g,".")).each(function(){D(this).val("").trigger("input")});this.s.selectionList=[];a=[];b=0;for(var d=this.s.panes;b<d.length;b++)c=d[b],c.s.dtPane&&a.push(c.clearPane());return a};h.prototype.getNode=function(){return this.dom.container};
h.prototype.rebuild=function(a,b){void 0===a&&(a=!1);void 0===b&&(b=!1);this.dom.emptyMessage.detach();!1===a&&this.dom.panes.empty();for(var c=[],d=0,e=this.s.panes;d<e.length;d++){var f=e[d];if(!1===a||f.s.index===a)f.clearData(),f.rebuildPane(this.s.dt.page.info().serverSide?this.s.serverData:void 0,b),this.dom.panes.append(f.dom.container),c.push(f)}this._updateSelection();this._updateFilterCount();this._attachPaneContainer();this._initSelectionListeners(!1);this.s.dt.draw(!b);this.resizePanes();
return 1===c.length?c[0]:c};h.prototype.resizePanes=function(){if("auto"===this.c.layout){var a=D(this.s.dt.searchPanes.container()).width(),b=Math.floor(a/this.s.minPaneWidth),c=1,d=0;a=[];for(var e=0,f=this.s.panes;e<f.length;e++){var g=f[e];g.s.displayed&&a.push(g.s.index)}g=a.length;if(b===g)c=b;else for(;1<b;b--)if(e=g%b,0===e){c=b;d=0;break}else e>d&&(c=b,d=e);var m=0!==d?a.slice(a.length-d,a.length):[];this.s.panes.forEach(function(q){q.s.displayed&&q.resize("columns-"+(m.includes(q.s.index)?
d:c))})}else for(a=0,b=this.s.panes;a<b.length;a++)g=b[a],g.adjustTopRow();return this};h.prototype._initSelectionListeners=function(a){};h.prototype._serverTotals=function(){};h.prototype._setXHR=function(){var a=this;this.s.dt.on("xhr.dtsps",function(b,c,d){d&&d.searchPanes&&d.searchPanes.options&&(a.s.serverData=d,a.s.serverData.tableLength=d.recordsTotal,a._serverTotals())})};h.prototype._stateLoadListener=function(){var a=this;this.s.dt.on("stateLoadParams.dtsps",function(b,c,d){if(void 0!==
d.searchPanes){a.clearSelections();a.s.selectionList=d.searchPanes.selectionList?d.searchPanes.selectionList:[];if(d.searchPanes.panes)for(b=0,d=d.searchPanes.panes;b<d.length;b++){c=d[b];for(var e=0,f=a.s.panes;e<f.length;e++){var g=f[e];c.id===g.s.index&&(g.dom.searchBox.val(c.searchTerm),g.s.dtPane.order(c.order))}}a._makeSelections(a.s.selectionList)}})};h.prototype._updateSelection=function(){this.s.selectionList=[];for(var a=0,b=this.s.panes;a<b.length;a++){var c=b[a];if(c.s.dtPane){var d=c.s.dtPane.rows({selected:!0}).data().toArray().map(function(e){return e.filter});
d.length&&this.s.selectionList.push({column:c.s.index,rows:d})}}};h.prototype._attach=function(){var a=this;this.dom.titleRow.removeClass(this.classes.hide).detach().append(this.dom.title);if(this.c.clear)this.dom.clearAll.appendTo(this.dom.titleRow).on("click.dtsps",function(){return a.clearSelections()});this.c.collapse&&(this.dom.showAll.appendTo(this.dom.titleRow),this.dom.collapseAll.appendTo(this.dom.titleRow),this._setCollapseListener());for(var b=0,c=this.s.panes;b<c.length;b++)this.dom.panes.append(c[b].dom.container);
this.dom.container.text("").removeClass(this.classes.hide).append(this.dom.titleRow).append(this.dom.panes);this.s.panes.forEach(function(d){return d.setListeners()});0===D("div."+this.classes.container).length&&this.dom.container.prependTo(this.s.dt)};h.prototype._attachMessage=function(){try{var a=this.s.dt.i18n("searchPanes.emptyPanes",this.c.i18n.emptyPanes)}catch(b){a=null}null===a?(this.dom.container.addClass(this.classes.hide),this.dom.titleRow.removeClass(this.classes.hide)):(this.dom.container.removeClass(this.classes.hide),
this.dom.titleRow.addClass(this.classes.hide),this.dom.emptyMessage.html(a).appendTo(this.dom.container))};h.prototype._attachPaneContainer=function(){for(var a=0,b=this.s.panes;a<b.length;a++)if(!0===b[a].s.displayed){this._attach();return}this._attachMessage()};h.prototype._checkCollapse=function(){for(var a=!0,b=!0,c=0,d=this.s.panes;c<d.length;c++){var e=d[c];e.s.displayed&&(e.dom.collapseButton.hasClass(e.classes.rotated)?(this.dom.showAll.removeClass(this.classes.disabledButton).removeAttr("disabled"),
b=!1):(this.dom.collapseAll.removeClass(this.classes.disabledButton).removeAttr("disabled"),a=!1))}a&&this.dom.collapseAll.addClass(this.classes.disabledButton).attr("disabled","true");b&&this.dom.showAll.addClass(this.classes.disabledButton).attr("disabled","true")};h.prototype._checkMessage=function(){for(var a=0,b=this.s.panes;a<b.length;a++)if(!0===b[a].s.displayed){this.dom.emptyMessage.detach();this.dom.titleRow.removeClass(this.classes.hide);return}this._attachMessage()};h.prototype._collapseAll=
function(){for(var a=0,b=this.s.panes;a<b.length;a++)b[a].collapse()};h.prototype._findPane=function(a){for(var b=0,c=this.s.panes;b<c.length;b++){var d=c[b];if(a===d.s.name)return d}};h.prototype._getState=function(){var a=this.s.dt.state.loaded();a&&a.searchPanes&&a.searchPanes.selectionList&&(this.s.selectionList=a.searchPanes.selectionList)};h.prototype._makeSelections=function(a){for(var b=0;b<a.length;b++){for(var c=a[b],d=void 0,e=0,f=this.s.panes;e<f.length;e++){var g=f[e];if(g.s.index===
c.column){d=g;break}}if(d&&d.s.dtPane){for(e=0;e<d.s.dtPane.rows().data().toArray().length;e++)c.rows.includes("function"===typeof d.s.dtPane.row(e).data().filter?d.s.dtPane.cell(e,0).data():d.s.dtPane.row(e).data().filter)&&d.s.dtPane.row(e).select();d.updateTable()}}};h.prototype._paneDeclare=function(a,b,c){var d=this;a.columns(0<this.c.columns.length?this.c.columns:void 0).eq(0).each(function(g){d.s.panes.push(new d.s.paneClass(b,c,g,d.dom.panes))});for(var e=a.columns().eq(0).toArray().length,
f=0;f<this.c.panes.length;f++)this.s.panes.push(new this.s.paneClass(b,c,e+f,this.dom.panes,this.c.panes[f]));0<this.c.order.length&&(this.s.panes=this.c.order.map(function(g){return d._findPane(g)}));this.s.dt.settings()[0]._bInitComplete?this._startup(a):this.s.dt.settings()[0].aoInitComplete.push({fn:function(){return d._startup(a)}})};h.prototype._setCollapseListener=function(){var a=this;this.dom.collapseAll.on("click.dtsps",function(){a._collapseAll();a.dom.collapseAll.addClass(a.classes.disabledButton).attr("disabled",
"true");a.dom.showAll.removeClass(a.classes.disabledButton).removeAttr("disabled");a.s.dt.state.save()});this.dom.showAll.on("click.dtsps",function(){a._showAll();a.dom.showAll.addClass(a.classes.disabledButton).attr("disabled","true");a.dom.collapseAll.removeClass(a.classes.disabledButton).removeAttr("disabled");a.s.dt.state.save()});for(var b=0,c=this.s.panes;b<c.length;b++)c[b].dom.collapseButton.on("click.dtsps",function(){return a._checkCollapse()});this._checkCollapse()};h.prototype._showAll=
function(){for(var a=0,b=this.s.panes;a<b.length;a++)b[a].show()};h.prototype._startup=function(a){var b=this;this._attach();this.dom.panes.empty();for(var c=0,d=this.s.panes;c<d.length;c++){var e=d[c];e.rebuildPane(0<Object.keys(this.s.serverData).length?this.s.serverData:void 0);this.dom.panes.append(e.dom.container)}"auto"===this.c.layout&&this.resizePanes();c=this.s.dt.state.loaded();!this.s.stateRead&&c&&this.s.dt.page(c.start/this.s.dt.page.len()).draw("page");this.s.stateRead=!0;this._checkMessage();
a.on("preDraw.dtsps",function(){b.s.updating||b.s.paging||(b._updateFilterCount(),b._updateSelection());b.s.paging=!1});D(window).on("resize.dtsps",H.util.throttle(function(){return b.resizePanes()}));this.s.dt.on("stateSaveParams.dtsps",function(f,g,m){void 0===m.searchPanes&&(m.searchPanes={});m.searchPanes.selectionList=b.s.selectionList});this._stateLoadListener();a.off("page.dtsps").on("page.dtsps",function(){b.s.paging=!0;b.s.page=b.s.dt.page()});if(this.s.dt.page.info().serverSide)a.off("preXhr.dtsps").on("preXhr.dtsps",
function(f,g,m){m.searchPanes||(m.searchPanes={});m.searchPanes_null||(m.searchPanes_null={});g=f=0;for(var q=b.s.panes;g<q.length;g++){var w=q[g],y=b.s.dt.column(w.s.index).dataSrc();m.searchPanes[y]||(m.searchPanes[y]={});m.searchPanes_null[y]||(m.searchPanes_null[y]={});if(w.s.dtPane){w=w.s.dtPane.rows({selected:!0}).data().toArray();for(var z=0;z<w.length;z++)m.searchPanes[y][z]=w[z].filter,m.searchPanes[y][z]||(m.searchPanes_null[y][z]=!0),f++}}0<f&&(f!==b.s.filterCount?(m.start=0,b.s.page=0):
m.start=b.s.page*b.s.dt.page.len(),b.s.dt.page(b.s.page),b.s.filterCount=f);0<b.s.selectionList.length&&(m.searchPanesLast=b.s.dt.column(b.s.selectionList[b.s.selectionList.length-1].column).dataSrc())});else a.on("preXhr.dtsps",function(){return b.s.panes.forEach(function(f){return f.clearData()})});this.s.dt.on("xhr.dtsps",function(f,g){if(g.nTable===b.s.dt.table().node()&&!b.s.dt.page.info().serverSide){var m=!1;b.s.dt.one("preDraw.dtsps",function(){if(!m){var q=b.s.dt.page();m=!0;b.s.updating=
!0;b.dom.panes.empty();for(var w=0,y=b.s.panes;w<y.length;w++){var z=y[w];z.clearData();z.rebuildPane(void 0,!0);b.dom.panes.append(z.dom.container)}b.s.dt.page.info().serverSide||b.s.dt.draw();b.s.updating=!1;b._updateSelection();b._checkMessage();b.s.dt.one("draw.dtsps",function(){b.s.updating=!0;b.s.dt.page(q).draw(!1);b.s.updating=!1})}})}});d=this.c.preSelect;c&&c.searchPanes&&c.searchPanes.selectionList&&(d=c.searchPanes.selectionList);this._makeSelections(d);this._updateFilterCount();a.on("destroy.dtsps",
function(){for(var f=0,g=b.s.panes;f<g.length;f++)g[f].destroy();a.off(".dtsps");b.dom.showAll.off(".dtsps");b.dom.clearAll.off(".dtsps");b.dom.collapseAll.off(".dtsps");D(a.table().node()).off(".dtsps");b.dom.container.detach();b.clearSelections()});this.c.collapse&&this._setCollapseListener();if(this.c.clear)this.dom.clearAll.on("click.dtsps",function(){return b.clearSelections()});a.settings()[0]._searchPanes=this;this.s.dt.state.save()};h.prototype._updateFilterCount=function(){for(var a=0,b=
0,c=this.s.panes;b<c.length;b++){var d=c[b];d.s.dtPane&&(a+=d.getPaneCount())}this.dom.title.html(this.s.dt.i18n("searchPanes.title",this.c.i18n.title,a));this.c.filterChanged&&"function"===typeof this.c.filterChanged&&this.c.filterChanged.call(this.s.dt,a);0===a?this.dom.clearAll.addClass(this.classes.disabledButton).attr("disabled","true"):this.dom.clearAll.removeClass(this.classes.disabledButton).removeAttr("disabled")};h.version="2.0.0";h.classes={clear:"dtsp-clear",clearAll:"dtsp-clearAll",collapseAll:"dtsp-collapseAll",
container:"dtsp-searchPanes",disabledButton:"dtsp-disabledButton",emptyMessage:"dtsp-emptyMessage",hide:"dtsp-hidden",panes:"dtsp-panesContainer",search:"dtsp-search",showAll:"dtsp-showAll",title:"dtsp-title",titleRow:"dtsp-titleRow"};h.defaults={clear:!0,collapse:!0,columns:[],container:function(a){return a.table().container()},filterChanged:void 0,i18n:{clearMessage:"Clear All",clearPane:"&times;",collapse:{0:"SearchPanes",_:"SearchPanes (%d)"},collapseMessage:"Collapse All",count:"{total}",emptyMessage:"<em>No data</em>",
emptyPanes:"No SearchPanes",loadMessage:"Loading Search Panes...",showMessage:"Show All",title:"Filters Active - %d"},layout:"auto",order:[],panes:[],preSelect:[]};return h}(),Q=window&&window.__extends||function(){var h=function(a,b){h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,d){c.__proto__=d}||function(c,d){for(var e in d)d.hasOwnProperty(e)&&(c[e]=d[e])};return h(a,b)};return function(a,b){function c(){this.constructor=a}h(a,b);a.prototype=null===b?Object.create(b):(c.prototype=
b.prototype,new c)}}(),L=function(h){function a(b,c,d){void 0===d&&(d=!1);var e=this,f;c.cascadePanes&&c.viewTotal?f=K:c.cascadePanes?f=F:c.viewTotal&&(f=p);e=h.call(this,b,c,d,f)||this;var g=e.s.dt.state.loaded();e.s.dt.off("init.dtsps").on("init.dtsps",function(){return e._initSelectionListeners(!0,g&&g.searchPanes&&g.searchPanes.selectionList?g.searchPanes.selectionList:e.c.preSelect)});return e}Q(a,h);a.prototype._initSelectionListeners=function(b,c){void 0===b&&(b=!0);void 0===c&&(c=[]);b&&(this.s.selectionList=
c);b=0;for(c=this.s.panes;b<c.length;b++){var d=c[b];if(d.s.displayed)d.s.dtPane.off("select.dtsp").on("select.dtsp",this._update(d)).off("deselect.dtsp").on("deselect.dtsp",this._update(d))}this.s.dt.off("draw.dtsps").on("draw.dtsps",this._update());this._updateSelectionList()};a.prototype._serverTotals=function(){for(var b=0,c=this.s.panes;b<c.length;b++){var d=c[b];if(d.s.colOpts.show){var e=this.s.dt.column(d.s.index).dataSrc(),f=!0,g=0;for(e=this.s.serverData.searchPanes.options[e];g<e.length;g++){var m=
e[g];if(m.total!==m.count){f=!1;break}}d.s.filteringActive=!f;d._serverPopulate(this.s.serverData)}}};a.prototype._stateLoadListener=function(){var b=this,c=function(d,e,f){if(void 0!==f.searchPanes){b.s.selectionList=f.searchPanes.selectionList?f.searchPanes.selectionList:[];if(f.searchPanes.panes)for(d=0,f=f.searchPanes.panes;d<f.length;d++){e=f[d];for(var g=0,m=b.s.panes;g<m.length;g++){var q=m[g];e.id===q.s.index&&(q.dom.searchBox.val(e.searchTerm),q.s.dtPane.order(e.order))}}b._updateSelectionList()}};
this.s.dt.off("stateLoadParams.dtsps",c).on("stateLoadParams.dtsps",c)};a.prototype._updateSelection=function(){};a.prototype._update=function(b){var c=this;void 0===b&&(b=void 0);return function(){return c._updateSelectionList(b)}};a.prototype._updateSelectionList=function(b){void 0===b&&(b=void 0);if(!(this.s.updating||b&&b.s.serverSelecting)){if(void 0!==b){this.s.dt.page.info().serverSide&&b._updateSelection();var c=b.s.dtPane.rows({selected:!0}).data().toArray().map(function(d){return d.filter});
this.s.selectionList=this.s.selectionList.filter(function(d){return d.column!==b.s.index});0<c.length&&this.s.selectionList.push({column:b.s.index,rows:c});this.s.dt.page.info().serverSide&&this.s.dt.draw(!1)}this._remakeSelections();this._updateFilterCount()}};a.prototype._remakeSelections=function(){this.s.updating=!0;if(this.s.dt.page.info().serverSide){e=void 0;0<this.s.selectionList.length&&(e=this.s.panes[this.s.selectionList[this.s.selectionList.length-1].column]);for(var b=0,c=this.s.panes;b<
c.length;b++)B=c[b],!B.s.displayed||e&&B.s.index===e.s.index||B.updateRows()}else{e=this.s.selectionList;b=!1;this.clearSelections();this.s.dt.draw();this.s.dt.rows().toArray()[0].length>this.s.dt.rows({search:"applied"}).toArray()[0].length&&(b=!0);this.s.selectionList=e;c=0;for(var d=this.s.panes;c<d.length;c++){var e=d[c];e.s.displayed&&(e.s.filteringActive=b,e.updateRows())}c=0;for(d=this.s.selectionList;c<d.length;c++){B=d[c];e=void 0;for(var f=0,g=this.s.panes;f<g.length;f++){var m=g[f];if(m.s.index===
B.column){e=m;break}}if(e.s.dtPane){f=e.s.dtPane.rows().indexes().toArray();g=0;for(m=B.rows;g<m.length;g++)for(var q=m[g],w=0,y=f;w<y.length;w++){var z=e.s.dtPane.row(y[w]),E=z.data();q===E.filter&&z.select()}e.s.selections=B.rows;if(0!==B.rows.length){this.s.dt.draw();q=f=m=g=0;for(w=this.s.panes;q<w.length;q++){var B=w[q];B.s.dtPane&&(g+=B.getPaneCount(),g>m&&(f++,m=g))}g=0<g;m=0;for(q=this.s.panes;m<q.length;m++)B=q[m],B.s.displayed&&(b||e.s.index!==B.s.index||!g?B.s.filteringActive=g||b:1===
f&&(B.s.filteringActive=!1),B.s.index!==e.s.index&&B.updateRows())}}}this.s.dt.draw()}this.s.updating=!1};return a}(J);(function(h){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return h(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);b&&b.fn.dataTable||(b=require("datatables.net")(a,b).$);return h(b,a,a.document)}:h(window.jQuery,window,document)})(function(h,a,b){function c(e,f,g){void 0===f&&(f=null);void 0===g&&
(g=!1);e=new d.Api(e);f=f?f:e.init().searchPanes||d.defaults.searchPanes;return(f&&(f.cascadePanes||f.viewTotal)?new L(e,f,g):new J(e,f,g)).getNode()}l(h);n(h);N=x=t=h;var d=h.fn.dataTable;h.fn.dataTable.SearchPanes=J;h.fn.DataTable.SearchPanes=J;h.fn.dataTable.SearchPanesST=L;h.fn.DataTable.SearchPanesST=L;h.fn.dataTable.SearchPane=v;h.fn.DataTable.SearchPane=v;h.fn.dataTable.SearchPaneViewTotal=p;h.fn.DataTable.SearchPaneViewTotal=p;h.fn.dataTable.SearchPaneCascade=F;h.fn.DataTable.SearchPaneCascade=
F;h.fn.dataTable.SearchPaneCascadeViewTotal=K;h.fn.DataTable.SearchPaneCascadeViewTotal=K;a=h.fn.dataTable.Api.register;a("searchPanes()",function(){return this});a("searchPanes.clearSelections()",function(){return this.iterator("table",function(e){e._searchPanes&&e._searchPanes.clearSelections()})});a("searchPanes.rebuildPane()",function(e,f){return this.iterator("table",function(g){g._searchPanes&&g._searchPanes.rebuild(e,f)})});a("searchPanes.resizePanes()",function(){var e=this.context[0];return e._searchPanes?
e._searchPanes.resizePanes():null});a("searchPanes.container()",function(){var e=this.context[0];return e._searchPanes?e._searchPanes.getNode():null});h.fn.dataTable.ext.buttons.searchPanesClear={action:function(e,f){f.searchPanes.clearSelections()},text:"Clear Panes"};h.fn.dataTable.ext.buttons.searchPanes={action:function(e,f,g,m){this.popover(m._panes.getNode(),{align:"container",span:"container"});m._panes.rebuild(void 0,!0)},config:{},init:function(e,f,g){var m=h.extend({filterChanged:function(q){e.button(f).text(e.i18n("searchPanes.collapse",
void 0!==e.context[0].oLanguage.searchPanes?e.context[0].oLanguage.searchPanes.collapse:e.context[0]._searchPanes.c.i18n.collapse,q))}},g.config);m=m&&(m.cascadePanes||m.viewTotal)?new h.fn.dataTable.SearchPanesST(e,m):new h.fn.dataTable.SearchPanes(e,m);e.button(f).text(g.text||e.i18n("searchPanes.collapse",m.c.i18n.collapse,0));g._panes=m},text:null};h(b).on("preInit.dt.dtsp",function(e,f){"dt"===e.namespace&&(f.oInit.searchPanes||d.defaults.searchPanes)&&(f._searchPanes||c(f,null,!0))});d.ext.feature.push({cFeature:"P",
fnInit:c});d.ext.features&&d.ext.features.register("searchPanes",c)})})();


/*!
 Bootstrap 5 integration for DataTables' SearchPanes
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs5","datatables.net-searchpanes"],function(a){return b(a)}):"object"===typeof exports?module.exports=function(a,c){a||(a=window);c&&c.fn.dataTable||(c=require("datatables.net-bs5")(a,c).$);c.fn.dataTable.SearchPanes||require("datatables.net-searchpanes")(a,c);return b(c)}:b(jQuery)})(function(b){var a=b.fn.dataTable;b.extend(!0,a.SearchPane.classes,{buttonGroup:"btn-group",disabledButton:"disabled",narrow:"col",
pane:{container:"table"},paneButton:"btn btn-light",pill:"badge rounded-pill bg-secondary",search:"form-control search",table:"table table-sm table-borderless",topRow:"dtsp-topRow"});b.extend(!0,a.SearchPanes.classes,{clearAll:"dtsp-clearAll btn btn-light",collapseAll:"dtsp-collapseAll btn btn-light",container:"dtsp-searchPanes",disabledButton:"disabled",panes:"dtsp-panes dtsp-panesContainer",showAll:"dtsp-showAll btn btn-light",title:"dtsp-title",titleRow:"dtsp-titleRow"});return a.searchPanes});


/*!
 StateRestore 1.1.0
 2019-2022 SpryMedia Ltd - datatables.net/license
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.owns=function(h,r){return Object.prototype.hasOwnProperty.call(h,r)};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(h,r,g){if(h==Array.prototype||h==Object.prototype)return h;h[r]=g.value;return h};
$jscomp.getGlobal=function(h){h=["object"==typeof globalThis&&globalThis,h,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var r=0;r<h.length;++r){var g=h[r];if(g&&g.Math==Math)return g}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};
$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(h,r){var g=$jscomp.propertyToPolyfillSymbol[r];if(null==g)return h[r];g=h[g];return void 0!==g?g:h[r]};$jscomp.polyfill=function(h,r,g,t){r&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(h,r,g,t):$jscomp.polyfillUnisolated(h,r,g,t))};
$jscomp.polyfillUnisolated=function(h,r,g,t){g=$jscomp.global;h=h.split(".");for(t=0;t<h.length-1;t++){var u=h[t];if(!(u in g))return;g=g[u]}h=h[h.length-1];t=g[h];r=r(t);r!=t&&null!=r&&$jscomp.defineProperty(g,h,{configurable:!0,writable:!0,value:r})};
$jscomp.polyfillIsolated=function(h,r,g,t){var u=h.split(".");h=1===u.length;t=u[0];t=!h&&t in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var m=0;m<u.length-1;m++){var x=u[m];if(!(x in t))return;t=t[x]}u=u[u.length-1];g=$jscomp.IS_SYMBOL_NATIVE&&"es6"===g?t[u]:null;r=r(g);null!=r&&(h?$jscomp.defineProperty($jscomp.polyfills,u,{configurable:!0,writable:!0,value:r}):r!==g&&($jscomp.propertyToPolyfillSymbol[u]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(u):$jscomp.POLYFILL_PREFIX+u,u=
$jscomp.propertyToPolyfillSymbol[u],$jscomp.defineProperty(t,u,{configurable:!0,writable:!0,value:r})))};$jscomp.polyfill("Object.values",function(h){return h?h:function(r){var g=[],t;for(t in r)$jscomp.owns(r,t)&&g.push(r[t]);return g}},"es8","es3");$jscomp.polyfill("Object.is",function(h){return h?h:function(r,g){return r===g?0!==r||1/r===1/g:r!==r&&g!==g}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(h){return h?h:function(r,g){var t=this;t instanceof String&&(t=String(t));var u=t.length;g=g||0;for(0>g&&(g=Math.max(g+u,0));g<u;g++){var m=t[g];if(m===r||Object.is(m,r))return!0}return!1}},"es7","es3");
$jscomp.checkStringArgs=function(h,r,g){if(null==h)throw new TypeError("The 'this' value for String.prototype."+g+" must not be null or undefined");if(r instanceof RegExp)throw new TypeError("First argument to String.prototype."+g+" must not be a regular expression");return h+""};$jscomp.polyfill("String.prototype.includes",function(h){return h?h:function(r,g){return-1!==$jscomp.checkStringArgs(this,r,"includes").indexOf(r,g||0)}},"es6","es3");
$jscomp.arrayIteratorImpl=function(h){var r=0;return function(){return r<h.length?{done:!1,value:h[r++]}:{done:!0}}};$jscomp.arrayIterator=function(h){return{next:$jscomp.arrayIteratorImpl(h)}};$jscomp.initSymbol=function(){};
$jscomp.polyfill("Symbol",function(h){if(h)return h;var r=function(u,m){this.$jscomp$symbol$id_=u;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:m})};r.prototype.toString=function(){return this.$jscomp$symbol$id_};var g=0,t=function(u){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new r("jscomp_symbol_"+(u||"")+"_"+g++,u)};return t},"es6","es3");$jscomp.initSymbolIterator=function(){};
$jscomp.polyfill("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var r="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<r.length;g++){var t=$jscomp.global[r[g]];"function"===typeof t&&"function"!=typeof t.prototype[h]&&$jscomp.defineProperty(t.prototype,h,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}})}return h},"es6",
"es3");$jscomp.initSymbolAsyncIterator=function(){};$jscomp.iteratorPrototype=function(h){h={next:h};h[Symbol.iterator]=function(){return this};return h};$jscomp.iteratorFromArray=function(h,r){h instanceof String&&(h+="");var g=0,t={next:function(){if(g<h.length){var u=g++;return{value:r(u,h[u]),done:!1}}t.next=function(){return{done:!0,value:void 0}};return t.next()}};t[Symbol.iterator]=function(){return t};return t};
$jscomp.polyfill("Array.prototype.keys",function(h){return h?h:function(){return $jscomp.iteratorFromArray(this,function(r){return r})}},"es6","es3");$jscomp.assign=$jscomp.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(h,r){for(var g=1;g<arguments.length;g++){var t=arguments[g];if(t)for(var u in t)$jscomp.owns(t,u)&&(h[u]=t[u])}return h};$jscomp.polyfill("Object.assign",function(h){return h||$jscomp.assign},"es6","es3");
$jscomp.findInternal=function(h,r,g){h instanceof String&&(h=String(h));for(var t=h.length,u=0;u<t;u++){var m=h[u];if(r.call(g,m,u,h))return{i:u,v:m}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(h){return h?h:function(r,g){return $jscomp.findInternal(this,r,g).v}},"es6","es3");
(function(){function h(q){g=q;t=q.fn.dataTable}function r(q){m=q;x=q.fn.dataTable}var g,t,u=function(){function q(a,c,d,f,k,b){void 0===f&&(f=void 0);void 0===k&&(k=!1);void 0===b&&(b=function(){return null});if(!t||!t.versionCheck||!t.versionCheck("1.10.0"))throw Error("StateRestore requires DataTables 1.10 or newer");if(!t.Buttons)throw Error("StateRestore requires Buttons");a=new t.Api(a);this.classes=g.extend(!0,{},q.classes);this.c=g.extend(!0,{},q.defaults,c);this.s={dt:a,identifier:d,isPreDefined:k,
savedState:null};this.dom={background:g('<div class="'+this.classes.background+'"/>'),closeButton:g('<div class="'+this.classes.closeButton+'">x</div>'),confirmation:g('<div class="'+this.classes.confirmation+'"/>'),confirmationTitleRow:g('<div class="'+this.classes.confirmationTitleRow+'"></div>'),dtContainer:g(this.s.dt.table().container()),duplicateError:g('<span class="'+this.classes.modalError+'">'+this.s.dt.i18n("stateRestore.duplicateError",this.c.i18n.duplicateError)+"</span>"),emptyError:g('<span class="'+
this.classes.modalError+'">'+this.s.dt.i18n("stateRestore.emptyError",this.c.i18n.emptyError)+"</span>"),removeContents:g('<div class="'+this.classes.confirmationText+'"><span>'+this.s.dt.i18n("stateRestore.removeConfirm",this.c.i18n.removeConfirm).replace(/%s/g,this.s.identifier)+"</span></div>"),removeError:g('<span class="'+this.classes.modalError+'">'+this.s.dt.i18n("stateRestore.removeError",this.c.i18n.removeError)+"</span>"),removeTitle:g('<h2 class="'+this.classes.confirmationTitle+'">'+this.s.dt.i18n("stateRestore.removeTitle",
this.c.i18n.removeTitle)+"</h2>"),renameContents:g('<div class="'+this.classes.confirmationText+" "+this.classes.renameModal+'"><label class="'+this.classes.confirmationMessage+'">'+this.s.dt.i18n("stateRestore.renameLabel",this.c.i18n.renameLabel).replace(/%s/g,this.s.identifier)+"</label></div>"),renameInput:g('<input class="'+this.classes.input+'" type="text"></input>'),renameTitle:g('<h2 class="'+this.classes.confirmationTitle+'">'+this.s.dt.i18n("stateRestore.renameTitle",this.c.i18n.renameTitle)+
"</h2>")};this.save(f,b)}q.prototype.remove=function(a){var c,d=this;void 0===a&&(a=!1);if(!this.c.remove)return!1;var f,k={action:"remove",stateRestore:(c={},c[this.s.identifier]=this.s.savedState,c)},b=function(){d.dom.confirmation.trigger("dtsr-remove");g(d.s.dt.table().node()).trigger("stateRestore-change")};this.c.ajax?"string"===typeof this.c.ajax&&this.s.dt.settings()[0]._bInitComplete?f=function(){g.ajax({data:k,success:b,type:"POST",url:d.c.ajax});return!0}:"function"===typeof this.c.ajax&&
(f=function(){"function"===typeof d.c.ajax&&d.c.ajax.call(d.s.dt,k,b);return!0}):f=function(){try{localStorage.removeItem("DataTables_stateRestore_"+d.s.identifier+"_"+location.pathname),b()}catch(e){return"remove"}return!0};a?(this.dom.confirmation.appendTo(this.dom.dtContainer),g(this.s.dt.table().node()).trigger("dtsr-modal-inserted"),f(),this.dom.confirmation.remove()):this._newModal(this.dom.removeTitle,this.s.dt.i18n("stateRestore.removeSubmit",this.c.i18n.removeSubmit),f,this.dom.removeContents);
return!0};q.prototype.compare=function(a){this.c.saveState.order||(a.order=void 0);this.c.saveState.search||(a.search=void 0);if(this.c.saveState.columns&&a.columns)for(var c=0,d=a.columns.length;c<d;c++)"boolean"===typeof this.c.saveState.columns||this.c.saveState.columns.visible||(a.columns[c].visible=void 0),"boolean"===typeof this.c.saveState.columns||this.c.saveState.columns.search||(a.columns[c].search=void 0);else this.c.saveState.columns||(a.columns=void 0);this.c.saveState.searchBuilder||
(a.searchBuilder=void 0);this.c.saveState.searchPanes||(a.searchPanes=void 0);this.c.saveState.select||(a.select=void 0);this.c.saveState.colReorder||(a.ColReorder=void 0);this.c.saveState.scroller||(a.scroller=void 0,void 0!==t.Scroller&&(a.start=0));this.c.saveState.paging||(a.start=0);delete a.time;c=this.s.savedState;delete c.time;delete c.c;delete c.stateRestore;return this._deepCompare(a,c)};q.prototype.destroy=function(){Object.values(this.dom).forEach(function(a){return a.off().remove()})};
q.prototype.load=function(){var a=this,c=this.s.savedState,d=this.s.dt.settings()[0];c.time=+new Date;d.oLoadedState=g.extend(!0,{},c);g("div.dt-button-background").click();g.fn.dataTable.ext.oApi._fnImplementState(d,c,function(){a.s.dt.one("preDraw",function(f,k){setTimeout(function(){var b=k._iDisplayStart/k._iDisplayLength,e=c.start/c.length;0<=b&&0<=e&&b!==e&&a.s.dt.page(e).draw(!1)},50)});a.s.dt.draw(!1)});return c};q.prototype.rename=function(a,c){var d=this;void 0===a&&(a=null);if(this.c.rename){var f=
function(){var k;if(null===a){var b=g("input."+d.classes.input.replace(/ /g,".")).val();if(0===b.length)return"empty";if(c.includes(b))return"duplicate";a=b}b={action:"rename",stateRestore:(k={},k[d.s.identifier]=a,k)};k=function(){d.s.identifier=a;d.save(d.s.savedState,function(){return null},!1);d.dom.removeContents=g('<div class="'+d.classes.confirmationText+'"><span>'+d.s.dt.i18n("stateRestore.removeConfirm",d.c.i18n.removeConfirm).replace(/%s/g,d.s.identifier)+"</span></div>");d.dom.confirmation.trigger("dtsr-rename")};
if(d.c.ajax)"string"===typeof d.c.ajax&&d.s.dt.settings()[0]._bInitComplete?g.ajax({data:b,success:k,type:"POST",url:d.c.ajax}):"function"===typeof d.c.ajax&&d.c.ajax.call(d.s.dt,b,k);else try{localStorage.removeItem("DataTables_stateRestore_"+d.s.identifier+"_"+location.pathname),k()}catch(e){return!1}return!0};if(null!==a){if(c.includes(a))throw Error(this.s.dt.i18n("stateRestore.duplicateError",this.c.i18n.duplicateError));if(0===a.length)throw Error(this.s.dt.i18n("stateRestore.emptyError",this.c.i18n.emptyError));
this.dom.confirmation.appendTo(this.dom.dtContainer);g(this.s.dt.table().node()).trigger("dtsr-modal-inserted");f();this.dom.confirmation.remove()}else this.dom.renameInput.val(this.s.identifier),this.dom.renameContents.append(this.dom.renameInput),this._newModal(this.dom.renameTitle,this.s.dt.i18n("stateRestore.renameButton",this.c.i18n.renameButton),f,this.dom.renameContents)}};q.prototype.save=function(a,c,d){var f,k=this;void 0===d&&(d=!0);if(this.c.save){this.s.dt.state.save();if(void 0===a)a=
this.s.dt.state();else if("object"!==typeof a)return;a.stateRestore?(a.stateRestore.isPreDefined=this.s.isPreDefined,a.stateRestore.state=this.s.identifier):a.stateRestore={isPreDefined:this.s.isPreDefined,state:this.s.identifier};this.s.savedState=a;this.c.saveState.order||(this.s.savedState.order=void 0);this.c.saveState.search||(this.s.savedState.search=void 0);if(this.c.saveState.columns&&this.s.savedState.columns){a=0;for(var b=this.s.savedState.columns.length;a<b;a++)"boolean"===typeof this.c.saveState.columns||
this.c.saveState.columns.visible||(this.s.savedState.columns[a].visible=void 0),"boolean"===typeof this.c.saveState.columns||this.c.saveState.columns.search||(this.s.savedState.columns[a].search=void 0)}else this.c.saveState.columns||(this.s.savedState.columns=void 0);this.c.saveState.searchBuilder||(this.s.savedState.searchBuilder=void 0);this.c.saveState.searchPanes||(this.s.savedState.searchPanes=void 0);this.c.saveState.select||(this.s.savedState.select=void 0);this.c.saveState.colReorder||(this.s.savedState.ColReorder=
void 0);this.c.saveState.scroller||(this.s.savedState.scroller=void 0,void 0!==t.Scroller&&(this.s.savedState.start=0));this.c.saveState.paging||(this.s.savedState.start=0);this.s.savedState.c=this.c;if(this.s.savedState.c.splitSecondaries.length)for(a=0,b=this.s.savedState.c.splitSecondaries;a<b.length;a++){var e=b[a];e.parent&&(e.parent=void 0)}if(this.s.isPreDefined)c&&c.call(this);else{var l={action:"save",stateRestore:(f={},f[this.s.identifier]=this.s.savedState,f)},p=function(){c&&c.call(k);
k.dom.confirmation.trigger("dtsr-save");g(k.s.dt.table().node()).trigger("stateRestore-change")};if(this.c.ajax)if("string"===typeof this.c.ajax&&d)if(this.s.dt.settings()[0]._bInitComplete)g.ajax({data:l,success:p,type:"POST",url:this.c.ajax});else this.s.dt.one("init",function(){g.ajax({data:l,success:p,type:"POST",url:k.c.ajax})});else"function"===typeof this.c.ajax&&d&&this.c.ajax.call(this.s.dt,l,p);else localStorage.setItem("DataTables_stateRestore_"+this.s.identifier+"_"+location.pathname,
JSON.stringify(this.s.savedState)),p()}}else c&&c.call(this)};q.prototype._deepCompare=function(a,c){var d=[a,c];a=[Object.keys(a).sort(),Object.keys(c).sort()];a[0].includes("scroller")&&(c=a[0].indexOf("start"))&&a[0].splice(c,1);a[1].includes("scroller")&&(c=a[1].indexOf("start"))&&a[1].splice(c,1);for(c=0;c<a[0].length;c++)if(0===a[0][c].indexOf("_")&&(a[0].splice(c,1),c--),"baseRowTop"===a[0][c]||"baseScrollTop"===a[0][c]||"scrollTop"===a[0][c])a[0].splice(c,1),c--;for(c=0;c<a[1].length;c++)if(0===
a[1][c].indexOf("_")&&(a[1].splice(c,1),c--),"baseRowTop"===a[1][c]||"baseScrollTop"===a[1][c]||"scrollTop"===a[1][c])a[1].splice(c,1),c--;if(a[0].length!==a[1].length){var f=a[0].length>a[1].length?0:1;for(c=0;c<a[f].length;c++)if(a[0][c]!==a[1][c])if(this.s.isPreDefined){if(1===f&&void 0===d[0][a[0][c]])return!1;a[f].splice(c,1);c--}else void 0===d[f][a[f][c]]&&(a[f].splice(c,1),c--);if(a[0].length!==a[1].length)return!1}for(c=0;c<a[0].length;c++){if(a[0][c]!==a[1][c]||typeof d[0][a[0][c]]!==typeof d[1][a[1][c]])return!1;
if("object"===typeof d[0][a[0][c]]){if(!this._deepCompare(d[0][a[0][c]],d[1][a[1][c]]))return!1}else if("number"===typeof d[0][a[0][c]]&&"number"===typeof d[1][a[1][c]]){if(Math.round(d[0][a[0][c]])!==Math.round(d[1][a[1][c]]))return!1}else if(d[0][a[0][c]]!==d[1][a[1][c]])return!1}return!0};q.prototype._newModal=function(a,c,d,f){var k=this;this.dom.background.appendTo(this.dom.dtContainer);this.dom.confirmationTitleRow.empty().append(a);var b=g('<button class="'+this.classes.confirmationButton+
" "+this.classes.dtButton+'">'+c+"</button>");this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(f).append(g('<div class="'+this.classes.confirmationButtons+'"></div>').append(b)).appendTo(this.dom.dtContainer);g(this.s.dt.table().node()).trigger("dtsr-modal-inserted");a=f.children("input");0<a.length?g(a[0]).focus():b.focus();var e=g("div."+this.classes.background.replace(/ /g,".")),l=function(p){"Enter"===p.key?b.click():"Escape"===p.key&&e.click()};this.c.modalCloseButton&&
(this.dom.confirmation.append(this.dom.closeButton),this.dom.closeButton.on("click",function(){return e.click()}));b.on("click",function(){var p=d();!0===p?(k.dom.background.remove(),k.dom.confirmation.remove(),g(document).unbind("keyup",l),b.off("click")):(k.dom.confirmation.children("."+k.classes.modalError).remove(),k.dom.confirmation.append(k.dom[p+"Error"]))});this.dom.confirmation.on("click",function(p){p.stopPropagation()});e.one("click",function(){k.dom.background.remove();k.dom.confirmation.remove();
g(document).unbind("keyup",l)});g(document).on("keyup",l)};q.prototype._searchToHung=function(a){return{bCaseInsensitive:a.caseInsensitive,bRegex:a.regex,bSmart:a.smart,sSearch:a.search}};q.version="1.1.0";q.classes={background:"dtsr-background",closeButton:"dtsr-popover-close",confirmation:"dtsr-confirmation",confirmationButton:"dtsr-confirmation-button",confirmationButtons:"dtsr-confirmation-buttons",confirmationMessage:"dtsr-confirmation-message dtsr-name-label",confirmationText:"dtsr-confirmation-text",
confirmationTitle:"dtsr-confirmation-title",confirmationTitleRow:"dtsr-confirmation-title-row",dtButton:"dt-button",input:"dtsr-input",modalError:"dtsr-modal-error",renameModal:"dtsr-rename-modal"};q.defaults={_createInSaved:!1,ajax:!1,create:!0,creationModal:!1,i18n:{creationModal:{button:"Create",colReorder:"Column Order:",columns:{search:"Column Search:",visible:"Column Visibility:"},name:"Name:",order:"Sorting:",paging:"Paging:",scroller:"Scroll Position:",search:"Search:",searchBuilder:"SearchBuilder:",
searchPanes:"SearchPanes:",select:"Select:",title:"Create New State",toggleLabel:"Includes:"},duplicateError:"A state with this name already exists.",emptyError:"Name cannot be empty.",emptyStates:"No saved states",removeConfirm:"Are you sure you want to remove %s?",removeError:"Failed to remove state.",removeJoiner:" and ",removeSubmit:"Remove",removeTitle:"Remove State",renameButton:"Rename",renameLabel:"New Name for %s:",renameTitle:"Rename State"},modalCloseButton:!0,remove:!0,rename:!0,save:!0,
saveState:{colReorder:!0,columns:{search:!0,visible:!0},order:!0,paging:!0,scroller:!0,search:!0,searchBuilder:!0,searchPanes:!0,select:!0},splitSecondaries:["updateState","renameState","removeState"],toggle:{colReorder:!1,columns:{search:!1,visible:!1},order:!1,paging:!1,scroller:!1,search:!1,searchBuilder:!1,searchPanes:!1,select:!1}};return q}(),m,x,C=function(){function q(a,c){var d=this;if(!x||!x.versionCheck||!x.versionCheck("1.10.0"))throw Error("StateRestore requires DataTables 1.10 or newer");
if(!x.Buttons)throw Error("StateRestore requires Buttons");a=new x.Api(a);this.classes=m.extend(!0,{},q.classes);if(void 0===a.settings()[0]._stateRestore){this.c=m.extend(!0,{},q.defaults,c);this.s={dt:a,hasColReorder:void 0!==x.ColReorder,hasScroller:void 0!==x.Scroller,hasSearchBuilder:void 0!==x.SearchBuilder,hasSearchPanes:void 0!==x.SearchPanes,hasSelect:void 0!==x.select,states:[]};this.s.dt.on("xhr",function(b,e,l){l&&l.stateRestore&&d._addPreDefined(l.stateRestore)});this.dom={background:m('<div class="'+
this.classes.background+'"/>'),closeButton:m('<div class="'+this.classes.closeButton+'">x</div>'),colReorderToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.colReorderToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.colReorder",this.c.i18n.creationModal.colReorder)+"</label></div>"),columnsSearchToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+
'"><input type="checkbox" class="'+this.classes.columnsSearchToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.columns.search",this.c.i18n.creationModal.columns.search)+"</label></div>"),columnsVisibleToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+' "><input type="checkbox" class="'+this.classes.columnsVisibleToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+
'">'+this.s.dt.i18n("stateRestore.creationModal.columns.visible",this.c.i18n.creationModal.columns.visible)+"</label></div>"),confirmation:m('<div class="'+this.classes.confirmation+'"/>'),confirmationTitleRow:m('<div class="'+this.classes.confirmationTitleRow+'"></div>'),createButtonRow:m('<div class="'+this.classes.formRow+" "+this.classes.modalFoot+'"><button class="'+this.classes.creationButton+" "+this.classes.dtButton+'">'+this.s.dt.i18n("stateRestore.creationModal.button",this.c.i18n.creationModal.button)+
"</button></div>"),creation:m('<div class="'+this.classes.creation+'"/>'),creationForm:m('<div class="'+this.classes.creationForm+'"/>'),creationTitle:m('<div class="'+this.classes.creationText+'"><h2 class="'+this.classes.creationTitle+'">'+this.s.dt.i18n("stateRestore.creationModal.title",this.c.i18n.creationModal.title)+"</h2></div>"),dtContainer:m(this.s.dt.table().container()),duplicateError:m('<span class="'+this.classes.modalError+'">'+this.s.dt.i18n("stateRestore.duplicateError",this.c.i18n.duplicateError)+
"</span>"),emptyError:m('<span class="'+this.classes.modalError+'">'+this.s.dt.i18n("stateRestore.emptyError",this.c.i18n.emptyError)+"</span>"),nameInputRow:m('<div class="'+this.classes.formRow+'"><label class="'+this.classes.nameLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.name",this.c.i18n.creationModal.name)+'</label><input class="'+this.classes.nameInput+'" type="text"></div>'),orderToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+
this.classes.orderToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.order",this.c.i18n.creationModal.order)+"</label></div>"),pagingToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.pagingToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.paging",this.c.i18n.creationModal.paging)+
"</label></div>"),removeContents:m('<div class="'+this.classes.confirmationText+'"><span></span></div>'),removeTitle:m('<div class="'+this.classes.creationText+'"><h2 class="'+this.classes.creationTitle+'">'+this.s.dt.i18n("stateRestore.removeTitle",this.c.i18n.removeTitle)+"</h2></div>"),scrollerToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.scrollerToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+
'">'+this.s.dt.i18n("stateRestore.creationModal.scroller",this.c.i18n.creationModal.scroller)+"</label></div>"),searchBuilderToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.searchBuilderToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.searchBuilder",this.c.i18n.creationModal.searchBuilder)+"</label></div>"),searchPanesToggle:m('<div class="'+this.classes.formRow+
" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.searchPanesToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.searchPanes",this.c.i18n.creationModal.searchPanes)+"</label></div>"),searchToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.searchToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+
'">'+this.s.dt.i18n("stateRestore.creationModal.search",this.c.i18n.creationModal.search)+"</label></div>"),selectToggle:m('<div class="'+this.classes.formRow+" "+this.classes.checkRow+'"><input type="checkbox" class="'+this.classes.selectToggle+" "+this.classes.checkBox+'" checked><label class="'+this.classes.checkLabel+'">'+this.s.dt.i18n("stateRestore.creationModal.select",this.c.i18n.creationModal.select)+"</label></div>"),toggleLabel:m('<label class="'+this.classes.nameLabel+" "+this.classes.toggleLabel+
'">'+this.s.dt.i18n("stateRestore.creationModal.toggleLabel",this.c.i18n.creationModal.toggleLabel)+"</label>")};a.settings()[0]._stateRestore=this;this._searchForStates();this._addPreDefined(this.c.preDefined);var f,k={action:"load"};"function"===typeof this.c.ajax?f=function(){"function"===typeof d.c.ajax&&d.c.ajax.call(d.s.dt,k,function(b){return d._addPreDefined(b)})}:"string"===typeof this.c.ajax&&(f=function(){m.ajax({data:k,success:function(b){d._addPreDefined(b)},type:"POST",url:d.c.ajax})});
if("function"===typeof f)if(this.s.dt.settings()[0]._bInitComplete)f();else this.s.dt.one("preInit.dtsr",function(){f()});this.s.dt.on("destroy.dtsr",function(){d.destroy()});this.s.dt.on("draw.dtsr buttons-action.dtsr",function(){return d.findActive()});return this}}q.prototype.addState=function(a,c,d){var f=this;if(this.c.create&&this.c.save){var k=function(b,e){if(0===b.length)return"empty";if(c.includes(b))return"duplicate";f.s.dt.state.save();var l=f.s.dt.state();l.stateRestore={isPredefined:!1,
state:b,tableId:f.s.dt.table().node().id};var p=new u(f.s.dt.settings()[0],m.extend(!0,{},f.c,e,d),b,l,!1,function(){f.s.states.push(this);f._collectionRebuild()});m(f.s.dt.table().node()).on("dtsr-modal-inserted",function(){p.dom.confirmation.one("dtsr-remove",function(){return f._removeCallback(p.s.identifier)});p.dom.confirmation.one("dtsr-rename",function(){return f._collectionRebuild()});p.dom.confirmation.one("dtsr-save",function(){return f._collectionRebuild()})});return!0};if(null===this.getState(a))if(this.c.creationModal||
void 0!==d&&d.creationModal)this._creationModal(k,a,d);else{a=k(a,{});if("empty"===a)throw Error(this.s.dt.i18n("stateRestore.emptyError",this.c.i18n.emptyError));if("duplicate"===a)throw Error(this.s.dt.i18n("stateRestore.duplicateError",this.c.i18n.duplicateError));}else throw Error(this.s.dt.i18n("stateRestore.duplicateError",this.c.i18n.duplicateError));}};q.prototype.removeAll=function(a){if(0!==this.s.states.length){var c=this.s.states.map(function(f){return f.s.identifier}),d=c[0];1<c.length&&
(d=c.slice(0,-1).join(", ")+this.s.dt.i18n("stateRestore.removeJoiner",this.c.i18n.removeJoiner)+c.slice(-1));m(this.dom.removeContents.children("span")).text(this.s.dt.i18n("stateRestore.removeConfirm",this.c.i18n.removeConfirm).replace(/%s/g,d));this._newModal(this.dom.removeTitle,this.s.dt.i18n("stateRestore.removeSubmit",this.c.i18n.removeSubmit),a,this.dom.removeContents)}};q.prototype.destroy=function(){for(var a=0,c=this.s.states;a<c.length;a++)c[a].destroy();Object.values(this.dom).forEach(function(d){d.off();
d.remove()});this.s.states=[];this.s.dt.off(".dtsr");m(this.s.dt.table().node()).off(".dtsr")};q.prototype.findActive=function(){this.s.dt.state.save();var a=this.s.dt.state(),c=m("button."+m.fn.DataTable.Buttons.defaults.dom.button.className.replace(/ /g,"."));0===c.length&&(c=m("a."+m.fn.DataTable.Buttons.defaults.dom.button.className.replace(/ /g,".")));for(var d=0,f=c;d<f.length;d++){var k=f[d];this.s.dt.button(m(k).parent()[0]).active(!1)}d=[];f=0;for(var b=this.s.states;f<b.length;f++){var e=
b[f];if(e.compare(a)){d.push({data:e.s.savedState,name:e.s.identifier});for(var l=0,p=c;l<p.length;l++)if(k=p[l],m(k).text()===e.s.identifier){this.s.dt.button(m(k).parent()[0]).active(!0);break}}}return d};q.prototype.getState=function(a){for(var c=0,d=this.s.states;c<d.length;c++){var f=d[c];if(f.s.identifier===a)return f}return null};q.prototype.getStates=function(a){if(void 0===a)return this.s.states;for(var c=[],d=0;d<a.length;d++){for(var f=a[d],k=!1,b=0,e=this.s.states;b<e.length;b++){var l=
e[b];if(f===l.s.identifier){c.push(l);k=!0;break}}k||c.push(void 0)}return c};q.prototype._addPreDefined=function(a){for(var c=this,d=function(e){for(var l=0;l<f.s.states.length;l++)f.s.states[l].s.identifier===e&&f.s.states.splice(l,1);var p=f;l=a[e];var n=new u(f.s.dt,m.extend(!0,{},f.c,void 0!==l.c?{saveState:l.c.saveState}:void 0,!0),e,l,!0,function(){p.s.states.push(this);p._collectionRebuild()});n.s.savedState=l;m(f.s.dt.table().node()).on("dtsr-modal-inserted",function(){n.dom.confirmation.one("dtsr-remove",
function(){return c._removeCallback(n.s.identifier)});n.dom.confirmation.one("dtsr-rename",function(){return c._collectionRebuild()});n.dom.confirmation.one("dtsr-save",function(){return c._collectionRebuild()})})},f=this,k=0,b=Object.keys(a).sort(function(e,l){return e>l?1:e<l?-1:0});k<b.length;k++)d(b[k])};q.prototype._collectionRebuild=function(){var a=[];this.c._createInSaved&&a.push("createState");if(0===this.s.states.length)a.push('<span class="'+this.classes.emptyStates+'">'+this.s.dt.i18n("stateRestore.emptyStates",
this.c.i18n.emptyStates)+"</span>");else{this.s.states=this.s.states.sort(function(b,e){b=b.s.identifier;e=e.s.identifier;return b>e?1:b<e?-1:0});for(var c=0,d=this.s.states;c<d.length;c++){var f=d[c],k=Object.assign([],this.c.splitSecondaries);!k.includes("updateState")||this.c.save&&f.c.save||k.splice(k.indexOf("updateState"),1);!k.includes("renameState")||this.c.save&&f.c.save&&this.c.rename&&f.c.rename||k.splice(k.indexOf("renameState"),1);!k.includes("removeState")||this.c.remove&&f.c.remove||
k.splice(k.indexOf("removeState"),1);0<k.length&&!k.includes("<h3>"+f.s.identifier+"</h3>")&&k.unshift("<h3>"+f.s.identifier+"</h3>");a.push({_stateRestore:f,attr:{title:f.s.identifier},config:{split:k},extend:"stateRestore",text:f.s.identifier})}}this.s.dt.button("SaveStateRestore:name").collectionRebuild(a)};q.prototype._creationModal=function(a,c,d){var f=this;this.dom.creation.empty();this.dom.creationForm.empty();this.dom.nameInputRow.children("input").val(c);this.dom.creationForm.append(this.dom.nameInputRow);
var k=this.s.dt.settings()[0].oInit;c=[];var b=void 0!==d&&void 0!==d.toggle;((!b||void 0===d.toggle.order)&&this.c.toggle.order||b&&d.toggle.order)&&this.c.saveState.order&&(void 0===k.ordering||k.ordering)&&c.push(this.dom.orderToggle);((!b||void 0===d.toggle.search)&&this.c.toggle.search||b&&d.toggle.search)&&this.c.saveState.search&&(void 0===k.searching||k.searching)&&c.push(this.dom.searchToggle);((!b||void 0===d.toggle.paging)&&this.c.toggle.paging||b&&d.toggle.paging)&&this.c.saveState.paging&&
(void 0===k.paging||k.paging)&&c.push(this.dom.pagingToggle);this.s.hasColReorder&&((!b||void 0===d.toggle.colReorder)&&this.c.toggle.colReorder||b&&d.toggle.colReorder)&&this.c.saveState.colReorder&&c.push(this.dom.colReorderToggle);this.s.hasScroller&&((!b||void 0===d.toggle.scroller)&&this.c.toggle.scroller||b&&d.toggle.scroller)&&this.c.saveState.scroller&&c.push(this.dom.scrollerToggle);this.s.hasSearchBuilder&&((!b||void 0===d.toggle.searchBuilder)&&this.c.toggle.searchBuilder||b&&d.toggle.searchBuilder)&&
this.c.saveState.searchBuilder&&c.push(this.dom.searchBuilderToggle);this.s.hasSearchPanes&&((!b||void 0===d.toggle.searchPanes)&&this.c.toggle.searchPanes||b&&d.toggle.searchPanes)&&this.c.saveState.searchPanes&&c.push(this.dom.searchPanesToggle);this.s.hasSelect&&((!b||void 0===d.toggle.select)&&this.c.toggle.select||b&&d.toggle.select)&&this.c.saveState.select&&c.push(this.dom.selectToggle);"boolean"===typeof this.c.toggle.columns&&((!b||void 0===d.toggle.order)&&this.c.toggle.columns||b&&d.toggle.order)&&
this.c.saveState.columns?(c.push(this.dom.columnsSearchToggle),c.push(this.dom.columnsVisibleToggle)):(b&&void 0!==d.toggle.columns||"boolean"===typeof this.c.toggle.columns)&&"boolean"===typeof d.toggle.order||("boolean"!==typeof this.c.saveState.columns&&this.c.saveState.columns?((b&&void 0!==d.toggle.columns&&"boolean"!==typeof d.toggle.columns&&d.toggle.columns.search||(!b||void 0===d.toggle.columns||"boolean"!==typeof d.toggle.columns&&void 0===d.toggle.columns.search)&&"boolean"!==typeof this.c.toggle.columns&&
this.c.toggle.columns.search)&&this.c.saveState.columns.search&&c.push(this.dom.columnsSearchToggle),(b&&void 0!==d.toggle.columns&&"boolean"!==typeof d.toggle.columns&&d.toggle.columns.visible||(!b||void 0===d.toggle.columns||"boolean"!==typeof d.toggle.columns&&void 0===d.toggle.columns.visible)&&"boolean"!==typeof this.c.toggle.columns&&this.c.toggle.columns.visible)&&this.c.saveState.columns.visible&&c.push(this.dom.columnsVisibleToggle)):this.c.saveState.columns&&(c.push(this.dom.columnsSearchToggle),
c.push(this.dom.columnsVisibleToggle)));c.sort(function(n,v){n=n.children("label.dtsr-check-label")[0].innerHTML;v=v.children("label.dtsr-check-label")[0].innerHTML;return n<v?-1:n>v?1:0});for(k=0;k<c.length;k++)d=c[k],this.dom.creationForm.append(d);m(this.dom.creationForm.children("div."+this.classes.checkRow)[0]).prepend(this.dom.toggleLabel);this.dom.background.appendTo(this.dom.dtContainer);this.dom.creation.append(this.dom.creationTitle).append(this.dom.creationForm).append(this.dom.createButtonRow).appendTo(this.dom.dtContainer);
m(this.s.dt.table().node()).trigger("dtsr-modal-inserted");k=function(n){m(n.children("label:last-child")).on("click",function(){n.children("input").prop("checked",!n.children("input").prop("checked"))})};for(b=0;b<c.length;b++)d=c[b],k(d);var e=m("button."+this.classes.creationButton.replace(/ /g,"."));c=this.dom.creationForm.find("input");0<c.length?m(c[0]).focus():e.focus();var l=m("div."+this.classes.background.replace(/ /g,".")),p=function(n){"Enter"===n.key?e.click():"Escape"===n.key&&l.click()};
this.c.modalCloseButton&&(this.dom.creation.append(this.dom.closeButton),this.dom.closeButton.on("click",function(){return l.click()}));e.on("click",function(){var n={colReorder:f.dom.colReorderToggle.children("input").is(":checked"),columns:{search:f.dom.columnsSearchToggle.children("input").is(":checked"),visible:f.dom.columnsVisibleToggle.children("input").is(":checked")},order:f.dom.orderToggle.children("input").is(":checked"),paging:f.dom.pagingToggle.children("input").is(":checked"),scroller:f.dom.scrollerToggle.children("input").is(":checked"),
search:f.dom.searchToggle.children("input").is(":checked"),searchBuilder:f.dom.searchBuilderToggle.children("input").is(":checked"),searchPanes:f.dom.searchPanesToggle.children("input").is(":checked"),select:f.dom.selectToggle.children("input").is(":checked")};n=a(m("input."+f.classes.nameInput.replace(/ /g,".")).val(),{saveState:n});!0===n?(f.dom.background.remove(),f.dom.creation.remove(),m(document).unbind("keyup",p)):(f.dom.creation.children("."+f.classes.modalError).remove(),f.dom.creation.append(f.dom[n+
"Error"]))});l.one("click",function(){f.dom.background.remove();f.dom.creation.remove();m(document).unbind("keyup",p);f._collectionRebuild()});m(document).on("keyup",p);this.s.dt.state.save()};q.prototype._removeCallback=function(a){for(var c=0;c<this.s.states.length;c++)this.s.states[c].s.identifier===a&&(this.s.states.splice(c,1),c--);this._collectionRebuild();return!0};q.prototype._newModal=function(a,c,d,f){var k=this;this.dom.background.appendTo(this.dom.dtContainer);this.dom.confirmationTitleRow.empty().append(a);
var b=m('<button class="'+this.classes.confirmationButton+" "+this.classes.dtButton+'">'+c+"</button>");this.dom.confirmation.empty().append(this.dom.confirmationTitleRow).append(f).append(m('<div class="'+this.classes.confirmationButtons+'"></div>').append(b)).appendTo(this.dom.dtContainer);m(this.s.dt.table().node()).trigger("dtsr-modal-inserted");a=f.children("input");0<a.length?m(a[0]).focus():b.focus();var e=m("div."+this.classes.background.replace(/ /g,".")),l=function(p){"Enter"===p.key?b.click():
"Escape"===p.key&&e.click()};b.on("click",function(){var p=d(!0);!0===p?(k.dom.background.remove(),k.dom.confirmation.remove(),m(document).unbind("keyup",l),b.off("click")):(k.dom.confirmation.children("."+k.classes.modalError).remove(),k.dom.confirmation.append(k.dom[p+"Error"]))});this.dom.confirmation.on("click",function(p){p.stopPropagation()});e.one("click",function(){k.dom.background.remove();k.dom.confirmation.remove();m(document).unbind("keyup",l)});m(document).on("keyup",l)};q.prototype._searchForStates=
function(){for(var a=this,c=function(b){if(b.match(new RegExp("^DataTables_stateRestore_.*_"+location.pathname.replace(/\//g,"/")+"$"))){var e=JSON.parse(localStorage.getItem(b));if(e.stateRestore.isPreDefined||e.stateRestore.tableId&&e.stateRestore.tableId!==d.s.dt.table().node().id)return"continue";var l=d,p=new u(d.s.dt,m.extend(!0,{},d.c,{saveState:e.c.saveState}),e.stateRestore.state,e,!1,function(){this.s.savedState=e;l.s.states.push(this);l._collectionRebuild()});m(d.s.dt.table().node()).on("dtsr-modal-inserted",
function(){p.dom.confirmation.one("dtsr-remove",function(){return a._removeCallback(p.s.identifier)});p.dom.confirmation.one("dtsr-rename",function(){return a._collectionRebuild()});p.dom.confirmation.one("dtsr-save",function(){return a._collectionRebuild()})})}},d=this,f=0,k=Object.keys(localStorage);f<k.length;f++)c(k[f])};q.version="1.0.0";q.classes={background:"dtsr-background",checkBox:"dtsr-check-box",checkLabel:"dtsr-check-label",checkRow:"dtsr-check-row",closeButton:"dtsr-popover-close",colReorderToggle:"dtsr-colReorder-toggle",
columnsSearchToggle:"dtsr-columns-search-toggle",columnsVisibleToggle:"dtsr-columns-visible-toggle",confirmation:"dtsr-confirmation",confirmationButton:"dtsr-confirmation-button",confirmationButtons:"dtsr-confirmation-buttons",confirmationMessage:"dtsr-confirmation-message dtsr-name-label",confirmationText:"dtsr-confirmation-text",confirmationTitle:"dtsr-confirmation-title",confirmationTitleRow:"dtsr-confirmation-title-row",creation:"dtsr-creation",creationButton:"dtsr-creation-button",creationForm:"dtsr-creation-form",
creationText:"dtsr-creation-text",creationTitle:"dtsr-creation-title",dtButton:"dt-button",emptyStates:"dtsr-emptyStates",formRow:"dtsr-form-row",leftSide:"dtsr-left",modalError:"dtsr-modal-error",modalFoot:"dtsr-modal-foot",nameInput:"dtsr-name-input",nameLabel:"dtsr-name-label",orderToggle:"dtsr-order-toggle",pagingToggle:"dtsr-paging-toggle",rightSide:"dtsr-right",scrollerToggle:"dtsr-scroller-toggle",searchBuilderToggle:"dtsr-searchBuilder-toggle",searchPanesToggle:"dtsr-searchPanes-toggle",searchToggle:"dtsr-search-toggle",
selectToggle:"dtsr-select-toggle",toggleLabel:"dtsr-toggle-title"};q.defaults={_createInSaved:!1,ajax:!1,create:!0,creationModal:!1,i18n:{creationModal:{button:"Create",colReorder:"Column Order",columns:{search:"Column Search",visible:"Column Visibility"},name:"Name:",order:"Sorting",paging:"Paging",scroller:"Scroll Position",search:"Search",searchBuilder:"SearchBuilder",searchPanes:"SearchPanes",select:"Select",title:"Create New State",toggleLabel:"Includes:"},duplicateError:"A state with this name already exists.",
emptyError:"Name cannot be empty.",emptyStates:"No saved states",removeConfirm:"Are you sure you want to remove %s?",removeError:"Failed to remove state.",removeJoiner:" and ",removeSubmit:"Remove",removeTitle:"Remove State",renameButton:"Rename",renameLabel:"New Name for %s:",renameTitle:"Rename State"},modalCloseButton:!0,preDefined:{},remove:!0,rename:!0,save:!0,saveState:{colReorder:!0,columns:{search:!0,visible:!0},order:!0,paging:!0,scroller:!0,search:!0,searchBuilder:!0,searchPanes:!0,select:!0},
splitSecondaries:["updateState","renameState","removeState"],toggle:{colReorder:!1,columns:{search:!1,visible:!1},order:!1,paging:!1,scroller:!1,search:!1,searchBuilder:!1,searchPanes:!1,select:!1}};return q}();(function(q){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return q(a,window,document)}):"object"===typeof exports?module.exports=function(a,c){a||(a=window);c&&c.fn.dataTable||(c=require("datatables.net")(a,c).$);return q(c,a,a.document)}:q(window.jQuery,
window,document)})(function(q,a,c){function d(b,e){e=new q.fn.dataTable.StateRestoreCollection(b,e.config);f(b,e)}function f(b,e){var l=b.stateRestore.states(),p=[],n=b.settings()[0]._stateRestore.c;n._createInSaved&&p.push("createState");if(void 0===l||0===l.length)p.push('<span class="'+e.classes.emptyStates+'">'+b.i18n("stateRestore.emptyStates",e.c.i18n.emptyStates)+"</span>");else for(e=0;e<l.length;e++){var v=l[e],w=Object.assign([],n.splitSecondaries);w.includes("updateState")&&!n.save&&w.splice(w.indexOf("updateState"),
1);!w.includes("renameState")||n.save&&n.rename||w.splice(w.indexOf("renameState"),1);w.includes("removeState")&&!n.remove&&w.splice(w.indexOf("removeState"),1);0<w.length&&!w.includes("<h3>"+v.s.identifier+"</h3>")&&w.unshift("<h3>"+v.s.identifier+"</h3>");p.push({_stateRestore:v,attr:{title:v.s.identifier},config:{split:w},extend:"stateRestore",text:v.s.identifier})}b.button("SaveStateRestore:name").collectionRebuild(p)}h(q);r(q);var k=q.fn.dataTable;q.fn.dataTable.StateRestore=u;q.fn.DataTable.StateRestore=
u;q.fn.dataTable.StateRestoreCollection=C;q.fn.DataTable.StateRestoreCollection=C;a=q.fn.dataTable.Api.register;a("stateRestore()",function(){return this});a("stateRestore.state()",function(b){var e=this.context[0];if(!e._stateRestore){var l=q.fn.DataTable.Api(e),p=new q.fn.dataTable.StateRestoreCollection(l,{});f(l,p)}this[0]=e._stateRestore.getState(b);return this});a("stateRestore.state.add()",function(b,e){var l=this.context[0];if(!l._stateRestore){var p=q.fn.DataTable.Api(l),n=new q.fn.dataTable.StateRestoreCollection(p,
{});f(p,n)}if(!l._stateRestore.c.create)return this;if(l._stateRestore.addState){p=[];n=0;for(var v=l._stateRestore.s.states;n<v.length;n++)p.push(v[n].s.identifier);l._stateRestore.addState(b,p,e);return this}});a("stateRestore.states()",function(b){var e=this.context[0];if(!e._stateRestore){var l=q.fn.DataTable.Api(e),p=new q.fn.dataTable.StateRestoreCollection(l,{});f(l,p)}this.length=0;this.push.apply(this,e._stateRestore.getStates(b));return this});a("stateRestore.state().save()",function(){var b=
this[0];b.c.save&&b.save();return this});a("stateRestore.state().rename()",function(b){var e=this.context[0],l=this[0];if(l.c.save){var p=[],n=0;for(e=e._stateRestore.s.states;n<e.length;n++)p.push(e[n].s.identifier);l.rename(b,p)}return this});a("stateRestore.state().load()",function(){this[0].load();return this});a("stateRestore.state().remove()",function(b){var e=this[0];e.c.remove&&e.remove(b);return this});a("stateRestore.states().remove()",function(b){var e=this,l=function(p){var n=!0;e.each(function(v){void 0!==
v&&v.c.remove&&(v=v.remove(p),!0!==v&&(n=v))});return n};this.context[0]._stateRestore.c.remove&&(b?l(b):this.context[0]._stateRestore.removeAll(l));return this});a("stateRestore.activeStates()",function(){var b=this.context[0];this.length=0;if(!b._stateRestore){var e=q.fn.DataTable.Api(b),l=new q.fn.dataTable.StateRestoreCollection(e,{});f(e,l)}b._stateRestore&&this.push.apply(this,b._stateRestore.findActive());return this});q.fn.dataTable.ext.buttons.stateRestore={action:function(b,e,l,p){p._stateRestore.load();
l.blur()},config:{split:["updateState","renameState","removeState"]},text:function(b){return b.i18n("buttons.stateRestore","State %d",b.stateRestore.states()[0].length+1)}};q.fn.dataTable.ext.buttons.updateState={action:function(b,e,l,p){q("div.dt-button-background").click();p.parent._stateRestore.save()},text:function(b){return b.i18n("buttons.updateState","Update")}};q.fn.dataTable.ext.buttons.savedStates={buttons:[],extend:"collection",init:function(b,e,l){b.on("stateRestore-change",function(){b.button(e).text(b.i18n("buttons.savedStates",
"Saved States",b.stateRestore.states().length))});void 0===b.settings()[0]._stateRestore&&d(b,l)},name:"SaveStateRestore",text:function(b){return b.i18n("buttons.savedStates","Saved States",0)}};q.fn.dataTable.ext.buttons.savedStatesCreate={buttons:[],extend:"collection",init:function(b,e,l){b.on("stateRestore-change",function(){b.button(e).text(b.i18n("buttons.savedStates","Saved States",b.stateRestore.states().length))});void 0===b.settings()[0]._stateRestore&&(void 0===l.config&&(l.config={}),
l.config._createInSaved=!0,d(b,l))},name:"SaveStateRestore",text:function(b){return b.i18n("buttons.savedStates","Saved States",0)}};q.fn.dataTable.ext.buttons.createState={action:function(b,e,l,p){b.stopPropagation();b=e.settings()[0]._stateRestore.c;var n=e.settings()[0].oLanguage;if(b.create&&b.save){var v=e.stateRestore.states().toArray();n=void 0!==n.buttons&&void 0!==n.buttons.stateRestore?n.buttons.stateRestore:"State ";if(n.indexOf("%d")===n.length-3)var w=new RegExp(n.replace(/%d/g,""));
else{var B=n.split("%d");w=[];for(var A=0;A<B.length;A++)n=B[A],w.push(new RegExp(n))}var E=function(z){if(Array.isArray(w)){var y=z;for(var D=0,F=w;D<F.length;D++)y=y.replace(F[D],"")}else y=z.replace(w,"");return isNaN(+y)||y.length===z?0:+y};n=v.map(function(z){return E(z.s.identifier)}).sort(function(z,y){return+z<+y?1:+z>+y?-1:0})[0];e.stateRestore.state.add(e.i18n("buttons.stateRestore","State %d",void 0!==n?n+1:1),p.config);p=e.stateRestore.states().sort(function(z,y){z=+E(z.s.identifier);
y=+E(y.s.identifier);return z>y?1:z<y?-1:0});v=[];b._createInSaved&&(v.push("createState"),v.push(""));for(B=0;B<p.length;B++)A=p[B],n=Object.assign([],b.splitSecondaries),n.includes("updateState")&&!b.save&&n.splice(n.indexOf("updateState"),1),!n.includes("renameState")||b.save&&b.rename||n.splice(n.indexOf("renameState"),1),n.includes("removeState")&&!b.remove&&n.splice(n.indexOf("removeState"),1),0<n.length&&!n.includes("<h3>"+A.s.identifier+"</h3>")&&n.unshift("<h3>"+A.s.identifier+"</h3>"),v.push({_stateRestore:A,
attr:{title:A.s.identifier},config:{split:n},extend:"stateRestore",text:A.s.identifier});e.button("SaveStateRestore:name").collectionRebuild(v);l.blur()}},init:function(b,e,l){void 0===b.settings()[0]._stateRestore&&1<b.button("SaveStateRestore:name").length&&d(b,l)},text:function(b){return b.i18n("buttons.createState","Create State")}};q.fn.dataTable.ext.buttons.removeState={action:function(b,e,l,p){p.parent._stateRestore.remove();l.blur()},text:function(b){return b.i18n("buttons.removeState","Remove")}};
q.fn.dataTable.ext.buttons.removeAllStates={action:function(b,e,l){e.stateRestore.states().remove(!0);l.blur()},text:function(b){return b.i18n("buttons.removeAllStates","Remove All States")}};q.fn.dataTable.ext.buttons.renameState={action:function(b,e,l,p){b=[];var n=0;for(e=e.settings()[0]._stateRestore.s.states;n<e.length;n++)b.push(e[n].s.identifier);p.parent._stateRestore.rename(void 0,b);l.blur()},text:function(b){return b.i18n("buttons.renameState","Rename")}};q(c).on("preInit.dt.dtsr",function(b,
e){"dt"!==b.namespace||!e.oInit.stateRestore&&!k.defaults.stateRestore||e._stateRestore||(b=null,void 0===b&&(b=null),e=new k.Api(e),b=b?b:e.init().stateRestore||k.defaults.stateRestore,b=new C(e,b),f(e,b))})})})();


/*!
 Bootstrap integration for DataTables' StateRestore
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs5","datatables.net-staterestore"],function(a){return b(a)}):"object"===typeof exports?module.exports=function(a,c){a||(a=window);c&&c.fn.dataTable||(c=require("datatables.net-bs5")(a,c).$);c.fn.dataTable.StateRestore||require("datatables.net-staterestore")(a,c);return b(c)}:b(jQuery)})(function(b){var a=b.fn.dataTable;b.extend(!0,a.StateRestoreCollection.classes,{checkBox:"dtsr-check-box form-check-input",checkLabel:"dtsr-check-label form-check-label",
checkRow:"dtsr-check-row form-check",creationButton:"dtsr-creation-button btn btn-secondary",creationForm:"dtsr-creation-form modal-body",creationText:"dtsr-creation-text modal-header",creationTitle:"dtsr-creation-title modal-title",nameInput:"dtsr-name-input form-control",nameLabel:"dtsr-name-label form-label"});b.extend(!0,a.StateRestore.classes,{confirmationButton:"dtsr-confirmation-button btn btn-secondary",input:"dtsr-input form-control"});return a.stateRestore});



/**
 * Bootstrap Multiselect (http://davidstutz.de/bootstrap-multiselect/)
 *
 * Apache License, Version 2.0:
 * Copyright (c) 2012 - 2021 David Stutz
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a
 * copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * BSD 3-Clause License:
 * Copyright (c) 2012 - 2021 David Stutz
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *    - Redistributions of source code must retain the above copyright notice,
 *      this list of conditions and the following disclaimer.
 *    - Redistributions in binary form must reproduce the above copyright notice,
 *      this list of conditions and the following disclaimer in the documentation
 *      and/or other materials provided with the distribution.
 *    - Neither the name of David Stutz nor the names of its contributors may be
 *      used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
(function (root, factory) {
    // check to see if 'knockout' AMD module is specified if using requirejs
    if (typeof define === 'function' && define.amd &&
        typeof require === 'function' && typeof require.specified === 'function' && require.specified('knockout')) {

        // AMD. Register as an anonymous module.
        define(['jquery', 'knockout'], factory);
    } else {
        // Browser globals
        factory(root.jQuery, root.ko);
    }
})(this, function ($, ko) {
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {
            after: ['options', 'value', 'selectedOptions', 'enable', 'disable'],

            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect(config);

                if (allBindings.has('options')) {
                    var options = allBindings.get('options');
                    if (ko.isObservable(options)) {
                        ko.computed({
                            read: function () {
                                options();
                                setTimeout(function () {
                                    var ms = $element.data('multiselect');
                                    if (ms)
                                        ms.updateOriginalOptions();//Not sure how beneficial this is.
                                    $element.multiselect('rebuild');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        });
                    }
                }

                //value and selectedOptions are two-way, so these will be triggered even by our own actions.
                //It needs some way to tell if they are triggered because of us or because of outside change.
                //It doesn't loop but it's a waste of processing.
                if (allBindings.has('value')) {
                    var value = allBindings.get('value');
                    if (ko.isObservable(value)) {
                        ko.computed({
                            read: function () {
                                value();
                                setTimeout(function () {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                //Switched from arrayChange subscription to general subscription using 'refresh'.
                //Not sure performance is any better using 'select' and 'deselect'.
                if (allBindings.has('selectedOptions')) {
                    var selectedOptions = allBindings.get('selectedOptions');
                    if (ko.isObservable(selectedOptions)) {
                        ko.computed({
                            read: function () {
                                selectedOptions();
                                setTimeout(function () {
                                    $element.multiselect('refresh');
                                }, 1);
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    }
                }

                var setEnabled = function (enable) {
                    setTimeout(function () {
                        if (enable)
                            $element.multiselect('enable');
                        else
                            $element.multiselect('disable');
                    });
                };

                if (allBindings.has('enable')) {
                    var enable = allBindings.get('enable');
                    if (ko.isObservable(enable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(enable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(enable);
                    }
                }

                if (allBindings.has('disable')) {
                    var disable = allBindings.get('disable');
                    if (ko.isObservable(disable)) {
                        ko.computed({
                            read: function () {
                                setEnabled(!disable());
                            },
                            disposeWhenNodeIsRemoved: element
                        }).extend({ rateLimit: 100, notifyWhenChangesStop: true });
                    } else {
                        setEnabled(!disable);
                    }
                }

                ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                    $element.multiselect('destroy');
                });
            },

            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var $element = $(element);
                var config = ko.toJS(valueAccessor());

                $element.multiselect('setOptions', config);
                $element.multiselect('rebuild');
            }
        };
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index], index);
        }
    }

    /**
     * Constructor to create a new multiselect using the given select.
     *
     * @param {jQuery} select
     * @param {Object} options
     * @returns {Multiselect}
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        this.options = this.mergeOptions($.extend({}, options, this.$select.data()));

        // Placeholder via data attributes
        if (this.$select.attr("data-placeholder")) {
            this.options.nonSelectedText = this.$select.data("placeholder");
        }

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;
        this.lastToggledInput = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onSelectAll = $.proxy(this.options.onSelectAll, this);
        this.options.onDeselectAll = $.proxy(this.options.onDeselectAll, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        this.options.onInitialized = $.proxy(this.options.onInitialized, this);
        this.options.onFiltering = $.proxy(this.options.onFiltering, this);

        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildReset();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();
        this.buildButtons();

        this.updateButtonText();
        this.updateSelectAll(true);

        if (this.options.enableClickableOptGroups && this.options.multiple) {
            this.updateOptGroups();
        }

        this.options.wasDisabled = this.$select.prop('disabled');
        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0 && !this.options.wasDisabled) {
            this.disable(true);
        }

        this.$select.wrap('<span class="multiselect-native-select" />').after(this.$container);
        this.$select.prop('tabindex', '-1');

        if (this.options.widthSynchronizationMode !== 'never') {
            this.synchronizeButtonAndPopupWidth();
        }

        this.options.onInitialized(this.$select, this.$container);
    }

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {String}
             */
            buttonText: function (selectedOptions, select) {
                if (this.disabledText.length > 0 && select.prop('disabled')) {
                    return this.disabledText;
                }
                else if (selectedOptions.length === 0) {
                    return this.nonSelectedText;
                }
                else if (this.allSelectedText
                    && selectedOptions.length === $('option', $(select)).length
                    && $('option', $(select)).length !== 1
                    && this.multiple) {

                    if (this.selectAllNumber) {
                        return this.allSelectedText + ' (' + selectedOptions.length + ')';
                    }
                    else {
                        return this.allSelectedText;
                    }
                }
                else if (this.numberDisplayed != 0 && selectedOptions.length > this.numberDisplayed) {
                    return selectedOptions.length + ' ' + this.nSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    selectedOptions.each(function () {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });

                    return selected.substr(0, selected.length - this.delimiterText.length);
                }
            },
            /**
             * Updates the title of the button similar to the buttonText function.
             *
             * @param {jQuery} options
             * @param {jQuery} select
             * @returns {@exp;selected@call;substr}
             */
            buttonTitle: function (options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
                }
                else {
                    var selected = '';
                    var delimiter = this.delimiterText;

                    options.each(function () {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).text();
                        selected += label + delimiter;
                    });
                    return selected.substr(0, selected.length - this.delimiterText.length);
                }
            },
            checkboxName: function (option) {
                return false; // no checkbox name
            },
            /**
             * Create a label.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionLabel: function (element) {
                return $(element).attr('label') || $(element).text();
            },
            /**
             * Create a class.
             *
             * @param {jQuery} element
             * @returns {String}
             */
            optionClass: function (element) {
                return $(element).attr('class') || '';
            },
            /**
             * Triggered on change of the multiselect.
             *
             * Not triggered when selecting/deselecting options manually.
             *
             * @param {jQuery} option
             * @param {Boolean} checked
             */
            onChange: function (option, checked) {

            },
            /**
             * Triggered when the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShow: function (event) {

            },
            /**
             * Triggered when the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHide: function (event) {

            },
            /**
             * Triggered after the dropdown is shown.
             *
             * @param {jQuery} event
             */
            onDropdownShown: function (event) {

            },
            /**
             * Triggered after the dropdown is hidden.
             *
             * @param {jQuery} event
             */
            onDropdownHidden: function (event) {

            },
            /**
             * Triggered on select all.
             */
            onSelectAll: function () {

            },
            /**
             * Triggered on deselect all.
             */
            onDeselectAll: function () {

            },
            /**
             * Triggered after initializing.
             *
             * @param {jQuery} $select
             * @param {jQuery} $container
             */
            onInitialized: function ($select, $container) {

            },
            /**
             * Triggered on filtering.
             *
             * @param {jQuery} $filter
             */
            onFiltering: function ($filter) {

            },
            enableHTML: false,
            buttonClass: 'custom-select',
            inheritClass: false,
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            dropRight: false,
            dropUp: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            selectAllNumber: true,
            selectAllJustVisible: true,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableFullValueFiltering: false,
            enableClickableOptGroups: false,
            enableCollapsibleOptGroups: false,
            collapseOptGroupsByDefault: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            resetButtonText: 'Reset',
            numberDisplayed: 3,
            disableIfEmpty: false,
            disabledText: '',
            delimiterText: ', ',
            includeResetOption: false,
            includeResetDivider: false,
            resetText: 'Reset',
            indentGroupOptions: true,
            // possible options: 'never', 'always', 'ifPopupIsSmaller', 'ifPopupIsWider'
            widthSynchronizationMode: 'never',
            buttonTextAlignment: 'center',
            enableResetButton: false,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-bs-toggle="dropdown"><span class="multiselect-selected-text"></span></button>',
                popupContainer: '<div class="multiselect-container dropdown-menu"></div>',
                filter: '<div class="multiselect-filter d-flex align-items-center"><i class="fas fa-sm fa-search text-muted"></i><input type="search" class="multiselect-search form-control" /></div>',
                buttonGroup: '<div class="multiselect-buttons btn-group" style="display:flex;"></div>',
                buttonGroupReset: '<button type="button" class="multiselect-reset btn btn-secondary btn-block"></button>',
                option: '<button type="button" class="multiselect-option dropdown-item"></button>',
                divider: '<div class="dropdown-divider"></div>',
                optionGroup: '<button type="button" class="multiselect-group dropdown-item"></button>',
                resetButton: '<div class="multiselect-reset text-center p-2"><button type="button" class="btn btn-sm btn-block btn-outline-secondary"></button></div>'
            }
        },

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function () {
            this.$container = $(this.options.buttonContainer);
            if (this.options.widthSynchronizationMode !== 'never') {
                this.$container.on('show.bs.dropdown', $.proxy(function () {
                    // the width needs to be synchronized again in case the width of the button changed in between
                    this.synchronizeButtonAndPopupWidth();
                    this.options.onDropdownShow();
                }, this));
            }
            else {
                this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            }
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
        },

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function () {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);
            if (this.$select.attr('class') && this.options.inheritClass) {
                this.$button.addClass(this.$select.attr('class'));
            }
            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
            }
            else {
                this.enable();
            }

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width': '100%' //this.options.buttonWidth,
                });
                this.$container.css({
                    'width': this.options.buttonWidth
                });
            }

            if (this.options.buttonTextAlignment) {
                switch (this.options.buttonTextAlignment) {
                    case 'left':
                        this.$button.addClass('text-left');
                        break;
                    case 'center':
                        this.$button.addClass('text-center');
                        break;
                    case 'right':
                        this.$button.addClass('text-right');
                        break;
                }
            }

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
            }

            this.$container.prepend(this.$button);
        },

        /**
         * Builds the popup container representing the dropdown menu.
         */
        buildDropdown: function () {

            // Build popup container.
            this.$popupContainer = $(this.options.templates.popupContainer);

            if (this.options.dropRight) {
                this.$container.addClass('dropright');
            }
            else if (this.options.dropUp) {
                this.$container.addClass("dropup");
            }

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$popupContainer.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
                });
            }

            if (this.options.widthSynchronizationMode !== 'never') {
                this.$popupContainer.css('overflow-x', 'hidden');
            }

            this.$popupContainer.on("touchstart click", function (e) {
                e.stopPropagation();
            });

            this.$container.append(this.$popupContainer);
        },

        synchronizeButtonAndPopupWidth: function () {
            if (!this.$popupContainer || this.options.widthSynchronizationMode === 'never') {
                return;
            }

            var buttonWidth = this.$button.outerWidth();
            switch (this.options.widthSynchronizationMode) {
                case 'always':
                    this.$popupContainer.css('min-width', buttonWidth);
                    this.$popupContainer.css('max-width', buttonWidth);
                    break;
                case 'ifPopupIsSmaller':
                    this.$popupContainer.css('min-width', buttonWidth);
                    break;
                case 'ifPopupIsWider':
                    this.$popupContainer.css('max-width', buttonWidth);
                    break;
            }
        },

        /**
         * Build the dropdown options and binds all necessary events.
         *
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function () {

            this.$select.children().each($.proxy(function (index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();

                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
                }

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
                }
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                    }
                    else {
                        this.createOptionValue(element, false);
                    }

                }

                // Other illegal tags will be ignored.
            }, this));

            // Bind the change event on the dropdown elements.
            $(this.$popupContainer).off('change', '> *:not(.multiselect-group) input[type="checkbox"], > *:not(.multiselect-group) input[type="radio"]');
            $(this.$popupContainer).on('change', '> *:not(.multiselect-group) input[type="checkbox"], > *:not(.multiselect-group) input[type="radio"]', $.proxy(function (event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('.multiselect-option')
                            .addClass(this.options.selectedClass);
                    }
                    else {
                        $target.closest('.multiselect-option')
                            .removeClass(this.options.selectedClass);
                    }
                }

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {

                    if (checked) {
                        this.selectAll(this.options.selectAllJustVisible, true);
                    }
                    else {
                        this.deselectAll(this.options.selectAllJustVisible, true);
                    }
                }
                else {
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                        }
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('.dropdown-item').removeClass(this.options.selectedClass);
                            }

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                        }

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest(".dropdown-item").css("outline", "");
                        }
                    }
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                    }

                    // To prevent select all from firing onChange: #575
                    this.options.onChange($option, checked);

                    // Do not update select all or optgroups on select all change!
                    this.updateSelectAll();

                    if (this.options.enableClickableOptGroups && this.options.multiple) {
                        this.updateOptGroups();
                    }
                }

                this.$select.change();
                this.updateButtonText();

                if (this.options.preventInputChangeEvent) {
                    return false;
                }
            }, this));

            $('.multiselect-option', this.$popupContainer).off('mousedown');
            $('.multiselect-option', this.$popupContainer).on('mousedown', function (e) {
                if (e.shiftKey) {
                    // Prevent selecting text by Shift+click
                    return false;
                }
            });

            $(this.$popupContainer).off('touchstart click', '.multiselect-option, .multiselect-all, .multiselect-group');
            $(this.$popupContainer).on('touchstart click', '.multiselect-option, .multiselect-all, .multiselect-group', $.proxy(function (event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (event.shiftKey && this.options.multiple) {
                    if (!$target.is("input")) { // Handles checkbox selection manually (see https://github.com/davidstutz/bootstrap-multiselect/issues/431)
                        event.preventDefault();
                        $target = $target.closest(".multiselect-option").find("input");
                        $target.prop("checked", !$target.prop("checked"));
                    }
                    var checked = $target.prop('checked') || false;

                    if (this.lastToggledInput !== null && this.lastToggledInput !== $target) { // Make sure we actually have a range
                        var from = this.$popupContainer.find(".multiselect-option:visible").index($target.closest(".multiselect-option"));
                        var to = this.$popupContainer.find(".multiselect-option:visible").index(this.lastToggledInput.closest(".multiselect-option"));

                        if (from > to) { // Swap the indices
                            var tmp = to;
                            to = from;
                            from = tmp;
                        }

                        // Make sure we grab all elements since slice excludes the last index
                        ++to;

                        // Change the checkboxes and underlying options
                        var range = this.$popupContainer.find(".multiselect-option:not(.multiselect-filter-hidden)").slice(from, to).find("input");

                        range.prop('checked', checked);

                        if (this.options.selectedClass) {
                            range.closest('.multiselect-option')
                                .toggleClass(this.options.selectedClass, checked);
                        }

                        for (var i = 0, j = range.length; i < j; i++) {
                            var $checkbox = $(range[i]);

                            var $option = this.getOptionByValue($checkbox.val());

                            $option.prop('selected', checked);
                        }
                    }

                    // Trigger the select "change" event
                    $target.trigger("change");
                }
                else if (!$target.is('input')) {
                    var $checkbox = $target.closest('.multiselect-option, .multiselect-all').find('.form-check-input');
                    if ($checkbox.length > 0) {
                        if (this.options.multiple || !$checkbox.prop('checked')) {
                            $checkbox.prop('checked', !$checkbox.prop('checked'));
                            $checkbox.change();
                        }
                    }
                    else if (this.options.enableClickableOptGroups && this.options.multiple && !$target.hasClass("caret-container")) {
                        var groupItem = $target;
                        if (!groupItem.hasClass("multiselect-group")) {
                            groupItem = $target.closest('.multiselect-group');
                        }
                        $checkbox = groupItem.find(".form-check-input");
                        if ($checkbox.length > 0) {
                            $checkbox.prop('checked', !$checkbox.prop('checked'));
                            $checkbox.change();
                        }
                    }

                    event.preventDefault();
                }

                // Remembers last clicked option
                var $input = $target.closest(".multiselect-option").find("input[type='checkbox'], input[type='radio']");
                if ($input.length > 0) {
                    this.lastToggledInput = $target;
                }
                else {
                    this.lastToggledInput = null;
                }

                $target.blur();
            }, this));

            //Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function (event) {
                var $items = $(this.$container).find(".multiselect-option:not(.disabled), .multiselect-group:not(.disabled), .multiselect-all").filter(":visible");
                var index = $items.index($items.filter(':focus'));
                var $search = $('.multiselect-search', this.$container);

                // keyCode 9 == Tab
                if (event.keyCode === 9 && this.$container.hasClass('show')) {
                    this.$button.click();
                }
                // keyCode 13 = Enter
                else if (event.keyCode == 13) {
                    var $current = $items.eq(index);
                    setTimeout(function () {
                        $current.focus();
                    }, 1);
                }
                // keyCode 38 = Arrow Up
                else if (event.keyCode == 38) {
                    if (index == 0 && !$search.is(':focus')) {
                        setTimeout(function () {
                            $search.focus();
                        }, 1);
                    }
                }
                // keyCode 40 = Arrow Down
                else if (event.keyCode == 40) {
                    if ($search.is(':focus')) {
                        var $first = $items.eq(0);
                        setTimeout(function () {
                            $search.blur();
                            $first.focus();
                        }, 1);
                    }
                    else if (index == -1) {
                        setTimeout(function () {
                            $search.focus();
                        }, 1);
                    }
                }
            }, this));

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                $(".multiselect-group input", this.$popupContainer).off("change");
                $(".multiselect-group input", this.$popupContainer).on("change", $.proxy(function (event) {
                    event.stopPropagation();

                    var $target = $(event.target);
                    var checked = $target.prop('checked') || false;

                    var $item = $(event.target).closest('.dropdown-item');
                    var $group = $item.nextUntil(".multiselect-group")
                        .not('.multiselect-filter-hidden')
                        .not('.disabled');

                    var $inputs = $group.find("input");

                    var $options = [];

                    if (this.options.selectedClass) {
                        if (checked) {
                            $item.addClass(this.options.selectedClass);
                        }
                        else {
                            $item.removeClass(this.options.selectedClass);
                        }
                    }

                    $.each($inputs, $.proxy(function (index, input) {
                        var $input = $(input);
                        var value = $input.val();
                        var $option = this.getOptionByValue(value);

                        if (checked) {
                            $input.prop('checked', true);
                            $input.closest('.dropdown-item')
                                .addClass(this.options.selectedClass);

                            $option.prop('selected', true);
                        }
                        else {
                            $input.prop('checked', false);
                            $input.closest('.dropdown-item')
                                .removeClass(this.options.selectedClass);

                            $option.prop('selected', false);
                        }

                        $options.push(this.getOptionByValue(value));
                    }, this))

                    // Cannot use select or deselect here because it would call updateOptGroups again.

                    this.options.onChange($options, checked);

                    this.$select.change();
                    this.updateButtonText();
                    this.updateSelectAll();
                }, this));
            }

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $(".multiselect-group .caret-container", this.$popupContainer).off("click");
                $(".multiselect-group .caret-container", this.$popupContainer).on("click", $.proxy(function (event) {
                    var $group = $(event.target).closest('.multiselect-group');
                    var $inputs = $group.nextUntil(".multiselect-group")
                        .not('.multiselect-filter-hidden');

                    var visible = true;
                    $inputs.each(function () {
                        visible = visible && !$(this).hasClass('multiselect-collapsible-hidden');
                    });

                    if (visible) {
                        $inputs.hide()
                            .addClass('multiselect-collapsible-hidden');
                    }
                    else {
                        $inputs.show()
                            .removeClass('multiselect-collapsible-hidden');
                    }
                }, this));
            }
        },

        /**
         * Create a checkbox container with input and label based on given values
         * @param {JQuery} $item 
         * @param {String} label 
         * @param {String} name 
         * @param {String} value 
         * @param {String} inputType 
         * @returns {JQuery}
         */
        createCheckbox: function ($item, labelContent, name, value, title, inputType) {
            var $wrapper = $('<span />');
            $wrapper.addClass("form-check");

            if (this.options.enableHTML && $(labelContent).length > 0) {
                var $checkboxLabel = $('<label class="form-check-label" />');
                $checkboxLabel.html(labelContent);
                $wrapper.append($checkboxLabel);
            }
            else {
                var $checkboxLabel = $('<label class="form-check-label" />');
                $checkboxLabel.text(labelContent);
                $wrapper.append($checkboxLabel);
            }

            var $checkbox = $('<input class="form-check-input"/>').attr('type', inputType);
            $checkbox.val(value);
            $wrapper.prepend($checkbox);

            if (name) {
                $checkbox.attr('name', name);
            }

            $item.prepend($wrapper);
            $item.attr("title", title || labelContent);

            return $checkbox;
        },

        /**
         * Create an option using the given select option.
         *
         * @param {jQuery} element
         */
        createOptionValue: function (element, isGroupOption) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
            }

            // Support the label attribute on options.
            var label = this.options.optionLabel(element);
            var classes = this.options.optionClass(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";
            var title = $element.attr('title');

            var $option = $(this.options.templates.option);
            $option.addClass(classes);

            if (isGroupOption && this.options.indentGroupOptions) {
                $option.addClass("multiselect-group-option-indented")
            }

            // Hide all children items when collapseOptGroupsByDefault is true
            if (this.options.collapseOptGroupsByDefault && $(element).parent().prop("tagName").toLowerCase() === "optgroup") {
                $option.addClass("multiselect-collapsible-hidden");
                $option.hide();
            }

            var name = this.options.checkboxName($element);
            var $checkbox = this.createCheckbox($option, label, name, value, title, inputType);

            var selected = $element.prop('selected') || false;

            if (value === this.options.selectAllValue) {
                $option.addClass("multiselect-all");
                $option.removeClass("multiselect-option");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
            }

            this.$popupContainer.append($option);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('.dropdown-item')
                    .addClass('disabled');
            }

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('.dropdown-item')
                    .addClass(this.options.selectedClass);
            }
        },

        /**
         * Creates a divider using the given select option.
         *
         * @param {jQuery} element
         */
        createDivider: function (element) {
            var $divider = $(this.options.templates.divider);
            this.$popupContainer.append($divider);
        },

        /**
         * Creates an optgroup.
         *
         * @param {jQuery} group
         */
        createOptgroup: function (group) {
            var $group = $(group);
            var label = $group.attr("label");
            var value = $group.attr("value");
            var title = $group.attr('title');

            var $groupOption = $("<span class='multiselect-group dropdown-item-text'></span>");

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                $groupOption = $(this.options.templates.optionGroup);
                var $checkbox = this.createCheckbox($groupOption, label, null, value, title, "checkbox");
            }
            else {
                if (this.options.enableHTML) {
                    $groupOption.html(" " + label);
                }
                else {
                    $groupOption.text(" " + label);
                }
            }

            var classes = this.options.optionClass(group);
            $groupOption.addClass(classes);

            if (this.options.enableCollapsibleOptGroups && this.options.multiple) {
                $groupOption.find('.form-check').addClass('d-inline-block');
                $groupOption.append('<span class="caret-container dropdown-toggle pl-1"></span>');
            }

            if ($group.is(':disabled')) {
                $groupOption.addClass('disabled');
            }

            this.$popupContainer.append($groupOption);

            $("option", group).each($.proxy(function ($, group) {
                this.createOptionValue(group, true);
            }, this));
        },

        /**
         * Build the reset.
         *
         */
        buildReset: function () {
            if (this.options.includeResetOption) {

                // Check whether to add a divider after the reset.
                if (this.options.includeResetDivider) {
                    var divider = $(this.options.templates.divider);
                    divider.addClass("mt-0");
                    this.$popupContainer.prepend(divider);
                }

                var $resetButton = $(this.options.templates.resetButton);

                if (this.options.enableHTML) {
                    $('button', $resetButton).html(this.options.resetText);
                }
                else {
                    $('button', $resetButton).text(this.options.resetText);
                }

                $('button', $resetButton).click($.proxy(function () {
                    this.clearSelection();
                }, this));

                this.$popupContainer.prepend($resetButton);
            }
        },

        /**
         * Build the select all.
         *
         * Checks if a select all has already been created.
         */
        buildSelectAll: function () {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
            }

            var alreadyHasSelectAll = this.hasSelectAll();

            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {

                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$popupContainer.prepend($(this.options.templates.divider));
                }

                var $option = $(this.options.templates.li || this.options.templates.option);
                var $checkbox = this.createCheckbox($option, this.options.selectAllText, this.options.selectAllName, this.options.selectAllValue, this.options.selectAllText, "checkbox");

                $option.addClass("multiselect-all");
                $option.removeClass("multiselect-option");
                $option.find(".form-check-label").addClass("font-weight-bold");

                this.$popupContainer.prepend($option);

                $checkbox.prop('checked', false);
            }
        },

        /**
         * Builds the filter.
         */
        buildFilter: function () {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);

                    // Handles optional filter clear button                        
                    if (!this.options.includeFilterClearBtn) {
                        this.$filter.find(".multiselect-search").attr("type", "text");

                        // Remove clear button if the old design of the filter with input groups and separated clear button is used
                        this.$filter.find(".multiselect-clear-filter").remove();
                    }
                    else {
                        // Firefox does not support a clear button in search inputs right now therefore it must be added manually
                        if (this.isFirefox() && this.$filter.find(".multiselect-clear-filter").length === 0) {
                            this.$filter.append("<i class='fas fa-times text-muted multiselect-clear-filter multiselect-moz-clear-filter'></i>");
                        }

                        this.$filter.find(".multiselect-clear-filter").on('click', $.proxy(function (event) {
                            clearTimeout(this.searchTimeout);

                            this.query = '';
                            this.$filter.find('.multiselect-search').val('');
                            $('.dropdown-item', this.$popupContainer).show().removeClass('multiselect-filter-hidden');

                            this.updateSelectAll();

                            if (this.options.enableClickableOptGroups && this.options.multiple) {
                                this.updateOptGroups();
                            }

                        }, this));
                    }

                    this.$popupContainer.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function (event) {
                        event.stopPropagation();
                    }).on('input keydown', $.proxy(function (event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                            event.preventDefault();
                        }

                        if (this.isFirefox() && this.options.includeFilterClearBtn) {
                            if (event.target.value) {
                                this.$filter.find(".multiselect-moz-clear-filter").show();
                            }
                            else {
                                this.$filter.find(".multiselect-moz-clear-filter").hide();
                            }
                        }

                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function () {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('.multiselect-option, .multiselect-group', this.$popupContainer), $.proxy(function (index, element) {
                                    var value = $('input', element).length > 0 ? $('input', element).val() : "";
                                    var text = $('.form-check-label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                    }
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                    }
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                    }

                                    if (value !== this.options.selectAllValue && text) {

                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering) {
                                            filterCandidate = filterCandidate.toLowerCase();
                                            this.query = this.query.toLowerCase();
                                        }

                                        if (this.options.enableFullValueFiltering && this.options.filterBehavior !== 'both') {
                                            var valueToMatch = filterCandidate.trim().substring(0, this.query.length);
                                            if (this.query.indexOf(valueToMatch) > -1) {
                                                showElement = true;
                                            }
                                        }
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                        }

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        if (!showElement) {
                                            $(element).css('display', 'none');
                                            $(element).addClass('multiselect-filter-hidden');
                                        }
                                        if (showElement) {
                                            $(element).css('display', 'block');
                                            $(element).removeClass('multiselect-filter-hidden');
                                        }

                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                        }
                                        else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show()
                                                    .removeClass('multiselect-filter-hidden');
                                            }

                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show()
                                                    .removeClass('multiselect-filter-hidden');
                                            }
                                        }
                                    }
                                }, this));
                            }

                            this.updateSelectAll();

                            if (this.options.enableClickableOptGroups && this.options.multiple) {
                                this.updateOptGroups();
                            }

                            this.updatePopupPosition();

                            this.options.onFiltering(event.target);

                        }, this), 300, this);
                    }, this));
                }
            }
        },

        /**
         * Builds the filter.
         */
        buildButtons: function () {
            if (this.options.enableResetButton) {
                var $buttonGroup = $(this.options.templates.buttonGroup);
                this.$buttonGroupReset = $(this.options.templates.buttonGroupReset).text(this.options.resetButtonText);
                $buttonGroup.append(this.$buttonGroupReset);
                this.$popupContainer.prepend($buttonGroup);
                
                // We save all options that were previously selected.
                this.defaultSelection = {};
                $('option', this.$select).each($.proxy(function(index, element) {
                    var $option = $(element);
                    this.defaultSelection[$option.val()] = $option.prop('selected');
                }, this));

                this.$buttonGroupReset.on('click', $.proxy(function(event) {
                    $('option', this.$select).each($.proxy(function(index, element) {
                        var $option = $(element);
                        $option.prop('selected', this.defaultSelection[$option.val()]);
                    }, this));
                    this.refresh();

                    if (this.options.enableFiltering) {
                        this.$filter.trigger('keydown');
                        $('input', this.$filter).val('');
                    }
                }, this));
            }
        },

        updatePopupPosition: function() {
            // prevent gaps between popup and select when filter is used (#1199)
            var transformMatrix = this.$popupContainer.css("transform");
            var matrixType = transformMatrix.substring(0, transformMatrix.indexOf('('));
            var values = transformMatrix.substring(transformMatrix.indexOf('(') + 1, transformMatrix.length - 1);
            var valuesArray = values.split(',');

            var valueIndex = 5;
            if(matrixType === "matrix3d") {
                valueIndex = 13;
            }

            var yTransformation = valuesArray[valueIndex];
            // Need to check to avoid errors when testing and in some other situations.
            yTransformation = typeof yTransformation === 'undefined' ? 0 : yTransformation.trim();
            if (yTransformation < 0) {
                yTransformation = this.$popupContainer.css("height").replace('px', '') * -1;
                valuesArray[valueIndex] = yTransformation;
                transformMatrix = matrixType + '(' + valuesArray.join(',') + ')';
                this.$popupContainer.css("transform", transformMatrix);
            }
        },

        /**
         * Unbinds the whole plugin.
         */
        destroy: function () {
            this.$container.remove();
            this.$select.unwrap();
            this.$select.show();

            // reset original state
            this.$select.prop('disabled', this.options.wasDisabled);

            this.$select.data('multiselect', null);
        },

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function () {
            var inputs = {};
            $('.multiselect-option input', this.$popupContainer).each(function () {
                inputs[$(this).val()] = $(this);
            });

            $('option', this.$select).each($.proxy(function (index, element) {
                var $elem = $(element);
                var $input = inputs[$(element).val()];

                if ($elem.is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.closest('.multiselect-option')
                            .addClass(this.options.selectedClass);
                    }
                }
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.closest('.multiselect-option')
                            .removeClass(this.options.selectedClass);
                    }
                }

                if ($elem.is(":disabled")) {
                    $input.attr('disabled', 'disabled')
                        .prop('disabled', true)
                        .closest('.multiselect-option')
                        .addClass('disabled');
                }
                else {
                    $input.prop('disabled', false)
                        .closest('.multiselect-option')
                        .removeClass('disabled');
                }
            }, this));

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Select all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         *
         * @param {Array} selectValues
         * @param {Boolean} triggerOnChange
         */
        select: function (selectValues, triggerOnChange) {
            if (!$.isArray(selectValues)) {
                selectValues = [selectValues];
            }

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if ($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('.dropdown-item')
                        .addClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', true);
                $option.prop('selected', true);

                if (!this.options.multiple) {
                    var $checkboxesNotThis = $('input', this.$container).not($checkbox);
                    $($checkboxesNotThis).prop('checked', false);
                    $($checkboxesNotThis).closest('.multiselect-option').removeClass("active")

                    var $optionsNotThis = $('option', this.$select).not($option);
                    $optionsNotThis.prop('selected', false);
                }

                if (triggerOnChange) {
                    this.options.onChange($option, true);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Deselects all options of the given values.
         *
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         *
         * @param {Array} deselectValues
         * @param {Boolean} triggerOnChange
         */
        deselect: function (deselectValues, triggerOnChange) {
            if (!this.options.multiple) {
                // In single selection mode at least on option needs to be selected
                return;
            }

            if (!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
            }

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
                }

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if ($option === undefined || $checkbox === undefined) {
                    continue;
                }

                if (this.options.selectedClass) {
                    $checkbox.closest('.dropdown-item')
                        .removeClass(this.options.selectedClass);
                }

                $checkbox.prop('checked', false);
                $option.prop('selected', false);

                if (triggerOnChange) {
                    this.options.onChange($option, false);
                }
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }
        },

        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean} justVisible
         * @param {Boolean} triggerOnSelectAll
         */
        selectAll: function (justVisible, triggerOnSelectAll) {
            if (!this.options.multiple) {
                // In single selection mode only one option can be selected at a time
                return;
            }

            // Record all changes, i.e., options selected that were not selected before.
            var selected = [];
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;

            if (justVisible) {
                var visibleOptions = $(".multiselect-option:not(.disabled):not(.multiselect-filter-hidden)", this.$popupContainer);
                $('input:enabled', visibleOptions).prop('checked', true);
                visibleOptions.addClass(this.options.selectedClass);

                $('input:enabled', visibleOptions).each($.proxy(function (index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    if (!$(option).prop('selected')) {
                        selected.push(option);
                    }
                    $(option).prop('selected', true);
                }, this));
            }
            else {
                var allOptions = $(".multiselect-option:not(.disabled)", this.$popupContainer);
                $('input:enabled', allOptions).prop('checked', true);
                allOptions.addClass(this.options.selectedClass);

                $('input:enabled', allOptions).each($.proxy(function (index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    if (!$(option).prop('selected')) {
                        selected.push(option);
                    }
                    $(option).prop('selected', true);
                }, this));
            }

            $('.multiselect-option input[value="' + this.options.selectAllValue + '"]', this.$popupContainer).prop('checked', true);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (triggerOnSelectAll) {
                this.options.onSelectAll(selected);
            }
        },

        /**
         * Deselects all options.
         *
         * If justVisible is true or not specified, only visible options are deselected.
         *
         * @param {Boolean} justVisible
         */
        deselectAll: function (justVisible, triggerOnDeselectAll) {
            if (!this.options.multiple) {
                // In single selection mode at least on option needs to be selected
                return;
            }

            // Record changes, i.e., those options that are deselected but were not deselected before.
            var deselected = [];
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;

            if (justVisible) {
                var visibleOptions = $(".multiselect-option:not(.disabled):not(.multiselect-filter-hidden)", this.$popupContainer);
                $('input[type="checkbox"]:enabled', visibleOptions).prop('checked', false);
                visibleOptions.removeClass(this.options.selectedClass);

                $('input[type="checkbox"]:enabled', visibleOptions).each($.proxy(function (index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    if ($(option).prop('selected')) {
                        deselected.push(option);
                    }
                    $(option).prop('selected', false);
                }, this));
            }
            else {
                var allOptions = $(".multiselect-option:not(.disabled):not(.multiselect-group)", this.$popupContainer);
                $('input[type="checkbox"]:enabled', allOptions).prop('checked', false);
                allOptions.removeClass(this.options.selectedClass);

                $('input[type="checkbox"]:enabled', allOptions).each($.proxy(function (index, element) {
                    var value = $(element).val();
                    var option = this.getOptionByValue(value);
                    if ($(option).prop('selected')) {
                        deselected.push(option);
                    }
                    $(option).prop('selected', false);
                }, this));
            }

            $('.multiselect-all input[value="' + this.options.selectAllValue + '"]', this.$popupContainer).prop('checked', false);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            this.updateButtonText();
            this.updateSelectAll();

            if (triggerOnDeselectAll) {
                this.options.onDeselectAll(deselected);
            }
        },

        /**
         * Rebuild the plugin.
         *
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function () {
            this.$popupContainer.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();
            this.buildButtons();

            this.updateButtonText();
            this.updateSelectAll(true);

            if (this.options.enableClickableOptGroups && this.options.multiple) {
                this.updateOptGroups();
            }

            if (this.options.disableIfEmpty) {
                if ($('option', this.$select).length <= 0) {
                    if (!this.$select.prop('disabled')) {
                        this.disable(true);
                    }
                }
                else if (this.$select.data("disabled-by-option")) {
                    this.enable();
                }
            }

            if (this.options.dropRight) {
                this.$container.addClass('dropright');
            }
            else if (this.options.dropUp) {
                this.$container.addClass('dropup');
            }

            if (this.options.widthSynchronizationMode !== 'never') {
                this.synchronizeButtonAndPopupWidth();
            }
        },

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function (dataprovider) {

            var groupCounter = 0;
            var $select = this.$select.empty();

            $.each(dataprovider, function (index, option) {
                var $tag;

                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;

                    $tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter,
                        disabled: !!option.disabled,
                        value: option.value
                    });

                    forEach(option.children, function (subOption) { // add children option tags
                        var attributes = {
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected,
                            disabled: !!subOption.disabled
                        };

                        //Loop through attributes object and add key-value for each attribute
                        for (var key in subOption.attributes) {
                            attributes['data-' + key] = subOption.attributes[key];
                        }
                        //Append original attributes + new data attributes to option
                        $tag.append($('<option/>').attr(attributes));
                    });
                }
                else {

                    var attributes = {
                        'value': option.value,
                        'label': option.label || option.value,
                        'title': option.title,
                        'class': option['class'],
                        'selected': !!option['selected'],
                        'disabled': !!option['disabled']
                    };
                    //Loop through attributes object and add key-value for each attribute
                    for (var key in option.attributes) {
                        attributes['data-' + key] = option.attributes[key];
                    }
                    //Append original attributes + new data attributes to option
                    $tag = $('<option/>').attr(attributes);

                    $tag.text(option.label || option.value);
                }

                $select.append($tag);
            });

            this.rebuild();
        },

        /**
         * Enable the multiselect.
         */
        enable: function () {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');

            this.updateButtonText();
        },

        /**
         * Disable the multiselect.
         */
        disable: function (disableByOption) {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');

            if (disableByOption) {
                this.$select.data("disabled-by-option", true);
            }
            else {
                this.$select.data("disabled-by-option", null);
            }

            this.updateButtonText();
        },

        /**
         * Set the options.
         *
         * @param {Array} options
         */
        setOptions: function (options) {
            this.options = this.mergeOptions(options);
        },

        /**
         * Merges the given options with the default options.
         *
         * @param {Array} options
         * @returns {Array}
         */
        mergeOptions: function (options) {
            return $.extend(true, {}, this.defaults, this.options, options);
        },

        /**
         * Checks whether a select all checkbox is present.
         *
         * @returns {Boolean}
         */
        hasSelectAll: function () {
            return $('.multiselect-all', this.$popupContainer).length > 0;
        },

        /**
         * Update opt groups.
         */
        updateOptGroups: function () {
            var $groups = $('.multiselect-group', this.$popupContainer)
            var selectedClass = this.options.selectedClass;

            $groups.each(function () {
                var $options = $(this).nextUntil('.multiselect-group')
                    .not('.multiselect-filter-hidden')
                    .not('.disabled');

                var checked = true;
                $options.each(function () {
                    var $input = $('input', this);

                    if (!$input.prop('checked')) {
                        checked = false;
                    }
                });

                if (selectedClass) {
                    if (checked) {
                        $(this).addClass(selectedClass);
                    }
                    else {
                        $(this).removeClass(selectedClass);
                    }
                }

                $('input', this).prop('checked', checked);
            });
        },

        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function (notTriggerOnSelectAll) {
            if (this.hasSelectAll()) {
                var allBoxes = $(".multiselect-option:not(.multiselect-filter-hidden):not(.multiselect-group):not(.disabled) input:enabled", this.$popupContainer);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllItem = $(".multiselect-all", this.$popupContainer);
                var selectAllInput = selectAllItem.find("input");

                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllItem.addClass(this.options.selectedClass);
                }
                else {
                    selectAllInput.prop("checked", false);
                    selectAllItem.removeClass(this.options.selectedClass);
                }
            }
        },

        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function () {
            var options = this.getSelected();

            // First update the displayed button text.
            if (this.options.enableHTML) {
                $('.multiselect .multiselect-selected-text', this.$container).html(this.options.buttonText(options, this.$select));
            }
            else {
                $('.multiselect .multiselect-selected-text', this.$container).text(this.options.buttonText(options, this.$select));
            }

            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
            this.$button.trigger('change');
        },

        /**
         * Get all selected options.
         *
         * @returns {jQUery}
         */
        getSelected: function () {
            return $('option', this.$select).filter(":selected");
        },

        /**
         * Gets a select option by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
                }
            }
        },

        /**
         * Get the input (radio/checkbox) by its value.
         *
         * @param {String} value
         * @returns {jQuery}
         */
        getInputByValue: function (value) {

            var checkboxes = $('.multiselect-option input:not(.multiselect-search)', this.$popupContainer);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
                }
            }
        },

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function () {
            this.originalOptions = this.$select.clone()[0].options;
        },

        asyncFunction: function (callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function () {
                callback.apply(self || window, args);
            }, timeout);
        },

        setAllSelectedText: function (allSelectedText) {
            this.options.allSelectedText = allSelectedText;
            this.updateButtonText();
        },

        isFirefox: function () {
            var firefoxIdentifier = 'firefox';
            var valueNotFoundIndex = -1;

            if (navigator && navigator.userAgent) {
                return navigator.userAgent.toLocaleLowerCase().indexOf(firefoxIdentifier) > valueNotFoundIndex;
            }

            return false;
        }
    };

    $.fn.multiselect = function (option, parameter, extraOptions) {
        return this.each(function () {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;

            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
            }

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);

                if (option === 'destroy') {
                    $(this).data('multiselect', false);
                }
            }
        });
    };

    $.fn.multiselect.Constructor = Multiselect;

    $(function () {
        $("select[data-role=multiselect]").multiselect();
    });

});

(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

//   // Scroll to top button appear
//   $(document).on('scroll', function() {
//     var scrollDistance = $(this).scrollTop();
//     if (scrollDistance > 100) {
//       $('.scroll-to-top').fadeIn();
//     } else {
//       $('.scroll-to-top').fadeOut();
//     }
//   });

//   // Smooth scrolling using jQuery easing
//   $(document).on('click', 'a.scroll-to-top', function(e) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//       scrollTop: ($($anchor.attr('href')).offset().top)
//     }, 300, 'easeInOutExpo');
//     e.preventDefault();
//   });


  // SCROLL TO TOP
  $(window).on('scroll',function(){
      var showAfter = 100;
      if($(this).scrollTop() > showAfter) {
          $('.scroll-to-top').fadeIn();
      } else {
          $('.scroll-to-top').fadeOut();
      }
  });

  $('.scroll-to-top').on('click', function(e){
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });


})(jQuery); // End of use strict
