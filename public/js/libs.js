/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).GLightbox=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var s=Date.now();function l(){var e={},t=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=l(!0,e[n],i[n]):e[n]=i[n])};i<n;i++){var o=arguments[i];s(o)}return e}function o(e,t){if((k(e)||e===window||e===document)&&(e=[e]),A(e)||L(e)||(e=[e]),0!=P(e))if(A(e)&&!L(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(L(e))for(var s in e)if(O(e,s)&&!1===t.call(e[s],e[s],s,e))break}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e[s]=e[s]||[],l={all:n,evt:null,found:null};return t&&i&&P(n)>0&&o(n,(function(e,n){if(e.eventName==t&&e.fn.toString()==i.toString())return l.found=!0,l.evt=n,!1})),l}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.onElement,n=t.withCallback,s=t.avoidDuplicate,l=void 0===s||s,a=t.once,h=void 0!==a&&a,d=t.useCapture,c=void 0!==d&&d,u=arguments.length>2?arguments[2]:void 0,g=i||[];function v(e){T(n)&&n.call(u,e,this),h&&v.destroy()}return C(g)&&(g=document.querySelectorAll(g)),v.destroy=function(){o(g,(function(t){var i=r(t,e,v);i.found&&i.all.splice(i.evt,1),t.removeEventListener&&t.removeEventListener(e,v,c)}))},o(g,(function(t){var i=r(t,e,v);(t.addEventListener&&l&&!i.found||!l)&&(t.addEventListener(e,v,c),i.all.push({eventName:e,fn:v}))})),v}function h(e,t){o(t.split(" "),(function(t){return e.classList.add(t)}))}function d(e,t){o(t.split(" "),(function(t){return e.classList.remove(t)}))}function c(e,t){return e.classList.contains(t)}function u(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"==t)return T(i)&&i(),!1;var n=x(),s=t.split(" ");o(s,(function(t){h(e,"g"+t)})),a(n,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){o(s,(function(e){d(t,"g"+e)})),T(i)&&i()}})}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function f(e){e.style.display="block"}function p(e){e.style.display="none"}function m(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function y(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function x(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function b(e,t,i,n){if(e())t();else{var s;i||(i=100);var l=setInterval((function(){e()&&(clearInterval(l),s&&clearTimeout(s),t())}),i);n&&(s=setTimeout((function(){clearInterval(l)}),n))}}function S(e,t,i){if(I(e))console.error("Inject assets error");else if(T(t)&&(i=t,t=!1),C(t)&&t in window)T(i)&&i();else{var n;if(-1!==e.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+e+'"]'))&&n.length>0)return void(T(i)&&i());var s=document.getElementsByTagName("head")[0],l=s.querySelectorAll('link[rel="stylesheet"]'),o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=e,o.media="all",l?s.insertBefore(o,l[0]):s.appendChild(o),void(T(i)&&i())}if((n=document.querySelectorAll('script[src="'+e+'"]'))&&n.length>0){if(T(i)){if(C(t))return b((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=function(){if(T(i)){if(C(t))return b((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}},document.body.appendChild(r)}}}function w(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function T(e){return"function"==typeof e}function C(e){return"string"==typeof e}function k(e){return!(!e||!e.nodeType||1!=e.nodeType)}function E(e){return Array.isArray(e)}function A(e){return e&&e.length&&isFinite(e.length)}function L(t){return"object"===e(t)&&null!=t&&!T(t)&&!E(t)}function I(e){return null==e}function O(e,t){return null!==e&&hasOwnProperty.call(e,t)}function P(e){if(L(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)O(e,i)&&t++;return t}return e.length}function z(e){return!isNaN(parseFloat(e))&&isFinite(e)}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!t.length)return!1;if(1==t.length)return t[0];"string"==typeof e&&(e=parseInt(e));var i=e<0?1:e+1;i>t.length&&(i="1");var n=[];o(t,(function(e){n.push(e.getAttribute("data-taborder"))}));var s=n.filter((function(e){return e>=parseInt(i)})),l=s.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(l,'"]'))}function X(e){if(e.events.hasOwnProperty("keyboard"))return!1;e.events.keyboard=a("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;if(9==n){var s=document.querySelector(".gbtn.focused");if(!s){var l=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==l||"textarea"==l||"button"==l)return}t.preventDefault();var o=document.querySelectorAll(".gbtn[data-taborder]");if(!o||o.length<=0)return;if(!s){var r=M();return void(r&&(r.focus(),h(r,"focused")))}var a=M(s.getAttribute("data-taborder"));d(s,"focused"),a&&(a.focus(),h(a,"focused"))}39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}})}function Y(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function q(e,t){var i=function(e,t){var i=Y(e)*Y(t);if(0===i)return 0;var n=function(e,t){return e.x*t.x+e.y*t.y}(e,t)/i;return n>1&&(n=1),Math.acos(n)}(e,t);return function(e,t){return e.x*t.y-t.x*e.y}(e,t)>0&&(i*=-1),180*i/Math.PI}var N=function(){function e(i){t(this,e),this.handlers=[],this.el=i}return n(e,[{key:"add",value:function(e){this.handlers.push(e)}},{key:"del",value:function(e){e||(this.handlers=[]);for(var t=this.handlers.length;t>=0;t--)this.handlers[t]===e&&this.handlers.splice(t,1)}},{key:"dispatch",value:function(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments)}}}]),e}();function D(e,t){var i=new N(e);return i.add(t),i}var _=function(){function e(i,n){t(this,e),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=D(this.element,n.rotate||s),this.touchStart=D(this.element,n.touchStart||s),this.multipointStart=D(this.element,n.multipointStart||s),this.multipointEnd=D(this.element,n.multipointEnd||s),this.pinch=D(this.element,n.pinch||s),this.swipe=D(this.element,n.swipe||s),this.tap=D(this.element,n.tap||s),this.doubleTap=D(this.element,n.doubleTap||s),this.longTap=D(this.element,n.longTap||s),this.singleTap=D(this.element,n.singleTap||s),this.pressMove=D(this.element,n.pressMove||s),this.twoFingerPressMove=D(this.element,n.twoFingerPressMove||s),this.touchMove=D(this.element,n.touchMove||s),this.touchEnd=D(this.element,n.touchEnd||s),this.touchCancel=D(this.element,n.touchCancel||s),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(e,[{key:"start",value:function(e){if(e.touches){if(e.target&&e.target.nodeName&&["a","button","input"].indexOf(e.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",e.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var t=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};t.x=i.x,t.y=i.y,this.pinchStartLen=Y(t),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}}}},{key:"move",value:function(e){if(e.touches){var t=this.preV,i=e.touches.length,n=e.touches[0].pageX,s=e.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var l=e.touches[1].pageX,o=e.touches[1].pageY,r={x:e.touches[1].pageX-n,y:e.touches[1].pageY-s};null!==t.x&&(this.pinchStartLen>0&&(e.zoom=Y(r)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=q(r,t),this.rotate.dispatch(e,this.element)),t.x=r.x,t.y=r.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(n-this.x2+l-this.sx2)/2,e.deltaY=(s-this.y2+o-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=l,this.sy2=o}else{if(null!==this.x2){e.deltaX=n-this.x2,e.deltaY=s-this.y2;var a=Math.abs(this.x1-this.x2),h=Math.abs(this.y1-this.y2);(a>10||h>10)&&(this._preventTap=!0)}else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&e.preventDefault()}}},{key:"end",value:function(e){if(e.changedTouches){this._cancelLongTap();var t=this;e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){t.swipe.dispatch(e,t.element)}),0)):(this.tapTimeout=setTimeout((function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1)}),0),t.isDoubleTap||(t.singleTapTimeout=setTimeout((function(){t.singleTap.dispatch(e,t.element)}),250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(e,t){this[e]&&this[e].add(t)}},{key:"off",value:function(e,t){this[e]&&this[e].del(t)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),e}();function W(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=c(e,"gslide-media")?e:e.querySelector(".gslide-media"),s=u(n,".ginner-container"),l=e.querySelector(".gslide-description");i>769&&(n=s),h(n,"greset"),v(n,"translate3d(0, 0, 0)"),a(t,{onElement:n,once:!0,withCallback:function(e,t){d(n,"greset")}}),n.style.opacity="",l&&(l.style.opacity="")}function B(e){if(e.events.hasOwnProperty("touch"))return!1;var t,i,n,s=y(),l=s.width,o=s.height,r=!1,a=null,g=null,f=null,p=!1,m=1,x=1,b=!1,S=!1,w=null,T=null,C=null,k=null,E=0,A=0,L=!1,I=!1,O={},P={},z=0,M=0,X=document.getElementById("glightbox-slider"),Y=document.querySelector(".goverlay"),q=new _(X,{touchStart:function(t){if(r=!0,(c(t.targetTouches[0].target,"ginner-container")||u(t.targetTouches[0].target,".gslide-desc")||"a"==t.targetTouches[0].target.nodeName.toLowerCase())&&(r=!1),u(t.targetTouches[0].target,".gslide-inline")&&!c(t.targetTouches[0].target.parentNode,"gslide-inline")&&(r=!1),r){if(P=t.targetTouches[0],O.pageX=t.targetTouches[0].pageX,O.pageY=t.targetTouches[0].pageY,z=t.targetTouches[0].clientX,M=t.targetTouches[0].clientY,a=e.activeSlide,g=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),f=null,c(g,"gslide-image")&&(f=g.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(g=a.querySelector(".ginner-container")),d(Y,"greset"),t.pageX>20&&t.pageX<window.innerWidth-20)return;t.preventDefault()}},touchMove:function(s){if(r&&(P=s.targetTouches[0],!b&&!S)){if(n&&n.offsetHeight>o){var a=O.pageX-P.pageX;if(Math.abs(a)<=13)return!1}p=!0;var h,d=s.targetTouches[0].clientX,c=s.targetTouches[0].clientY,u=z-d,m=M-c;if(Math.abs(u)>Math.abs(m)?(L=!1,I=!0):(I=!1,L=!0),t=P.pageX-O.pageX,E=100*t/l,i=P.pageY-O.pageY,A=100*i/o,L&&f&&(h=1-Math.abs(i)/o,Y.style.opacity=h,e.settings.touchFollowAxis&&(E=0)),I&&(h=1-Math.abs(t)/l,g.style.opacity=h,e.settings.touchFollowAxis&&(A=0)),!f)return v(g,"translate3d(".concat(E,"%, 0, 0)"));v(g,"translate3d(".concat(E,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(r){if(p=!1,S||b)return C=w,void(k=T);var t=Math.abs(parseInt(A)),i=Math.abs(parseInt(E));if(!(t>29&&f))return t<29&&i<25?(h(Y,"greset"),Y.style.opacity=1,W(g)):void 0;e.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,m=x||1},pinch:function(e){if(!f||p)return!1;b=!0,f.scaleX=f.scaleY=m*e.zoom;var t=m*e.zoom;if(S=!0,t<=1)return S=!1,t=1,k=null,C=null,w=null,T=null,void f.setAttribute("style","");t>4.5&&(t=4.5),f.style.transform="scale3d(".concat(t,", ").concat(t,", 1)"),x=t},pressMove:function(e){if(S&&!b){var t=P.pageX-O.pageX,i=P.pageY-O.pageY;C&&(t+=C),k&&(i+=k),w=t,T=i;var n="translate3d(".concat(t,"px, ").concat(i,"px, 0)");x&&(n+=" scale3d(".concat(x,", ").concat(x,", 1)")),v(f,n)}},swipe:function(t){if(!S)if(b)b=!1;else{if("Left"==t.direction){if(e.index==e.elements.length-1)return W(g);e.nextSlide()}if("Right"==t.direction){if(0==e.index)return W(g);e.prevSlide()}}}});e.events.touch=q}var H=function(){function e(i,n){var s=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t(this,e),this.img=i,this.slide=n,this.onclose=l,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(e){return s.dragStart(e)}),!1),this.img.addEventListener("mouseup",(function(e){return s.dragEnd(e)}),!1),this.img.addEventListener("mousemove",(function(e){return s.drag(e)}),!1),this.img.addEventListener("click",(function(e){return s.slide.classList.contains("dragging-nav")?(s.zoomOut(),!1):s.zoomedIn?void(s.zoomedIn&&!s.dragging&&s.zoomOut()):s.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(e,[{key:"zoomIn",value:function(){var e=this.widowWidth();if(!(this.zoomedIn||e<=768)){var t=this.img;if(t.setAttribute("data-style",t.getAttribute("style")),t.style.maxWidth=t.naturalWidth+"px",t.style.maxHeight=t.naturalHeight+"px",t.naturalWidth>e){var i=e/2-t.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(e){if(this.zoomedIn){var t=e.clientX-this.img.naturalWidth/2,i=e.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,t,i)}}},{key:"setTranslate",value:function(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),e}(),V=function(){function e(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e);var s=n.dragEl,l=n.toleranceX,o=void 0===l?40:l,r=n.toleranceY,a=void 0===r?65:r,h=n.slide,d=void 0===h?null:h,c=n.instance,u=void 0===c?null:c;this.el=s,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=o,this.toleranceY=a,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=d,this.instance=u,this.el.addEventListener("mousedown",(function(e){return i.dragStart(e)}),!1),this.el.addEventListener("mouseup",(function(e){return i.dragEnd(e)}),!1),this.el.addEventListener("mousemove",(function(e){return i.drag(e)}),!1)}return n(e,[{key:"dragStart",value:function(e){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset);var t=e.target.nodeName.toLowerCase();e.target.classList.contains("nodrag")||u(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&u(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=u(e.target,".ginner-container")))}}},{key:"dragEnd",value:function(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var t=Math.abs(this.currentX),i=Math.abs(this.currentY);if(t>0&&t>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=t&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var s=this.shouldClose();return!this.instance.settings.dragAutoSnap&&s&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&s&&this.instance.close())}}}},{key:"shouldChange",value:function(){var e=!1;if(Math.abs(this.currentX)>=this.toleranceX){var t=this.currentX>0?"right":"left";("left"==t&&this.slide!==this.slide.parentNode.lastChild||"right"==t&&this.slide!==this.slide.parentNode.firstChild)&&(e=t)}return e}},{key:"shouldClose",value:function(){var e=!1;return Math.abs(this.currentY)>=this.toleranceY&&(e=!0),e}},{key:"setTranslate",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.style.transition=n?"all .2s ease":"",e.style.transform="translate3d(".concat(t,"px, ").concat(i,"px, 0)")}}]),e}();function j(e,t,i,n){var s=e.querySelector(".gslide-media"),l=new Image,o="gSlideTitle_"+i,r="gSlideDesc_"+i;l.addEventListener("load",(function(){T(n)&&n()}),!1),l.src=t.href,""!=t.sizes&&""!=t.srcset&&(l.sizes=t.sizes,l.srcset=t.srcset),l.alt="",I(t.alt)||""===t.alt||(l.alt=t.alt),""!==t.title&&l.setAttribute("aria-labelledby",o),""!==t.description&&l.setAttribute("aria-describedby",r),t.hasOwnProperty("_hasCustomWidth")&&t._hasCustomWidth&&(l.style.width=t.width),t.hasOwnProperty("_hasCustomHeight")&&t._hasCustomHeight&&(l.style.height=t.height),s.insertBefore(l,s.firstChild)}function F(e,t,i,n){var s=this,l=e.querySelector(".ginner-container"),o="gvideo"+i,r=e.querySelector(".gslide-media"),a=this.getAllPlayers();h(l,"gvideo-container"),r.insertBefore(m('<div class="gvideo-wrapper"></div>'),r.firstChild);var d=e.querySelector(".gvideo-wrapper");S(this.settings.plyr.css,"Plyr");var c=t.href,u=location.protocol.replace(":",""),g="",v="",f=!1;"file"==u&&(u="http"),r.style.maxWidth=t.width,S(this.settings.plyr.js,"Plyr",(function(){if(c.match(/vimeo\.com\/([0-9]*)/)){var l=/vimeo.*\/(\d+)/i.exec(c);g="vimeo",v=l[1]}if(c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var r=function(e){var t="";t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e;return t}(c);g="youtube",v=r}if(null!==c.match(/\.(mp4|ogg|webm|mov)$/)){g="local";var u='<video id="'+o+'" ';u+='style="background:#000; max-width: '.concat(t.width,';" '),u+='preload="metadata" ',u+='x-webkit-airplay="allow" ',u+="playsinline ",u+="controls ",u+='class="gvideo-local">';var p=c.toLowerCase().split(".").pop(),y={mp4:"",ogg:"",webm:""};for(var x in y[p="mov"==p?"mp4":p]=c,y)if(y.hasOwnProperty(x)){var S=y[x];t.hasOwnProperty(x)&&(S=t[x]),""!==S&&(u+='<source src="'.concat(S,'" type="video/').concat(x,'">'))}f=m(u+="</video>")}var w=f||m('<div id="'.concat(o,'" data-plyr-provider="').concat(g,'" data-plyr-embed-id="').concat(v,'"></div>'));h(d,"".concat(g,"-video gvideo")),d.appendChild(w),d.setAttribute("data-id",o),d.setAttribute("data-index",i);var C=O(s.settings.plyr,"config")?s.settings.plyr.config:{},k=new Plyr("#"+o,C);k.on("ready",(function(e){var t=e.detail.plyr;a[o]=t,T(n)&&n()})),b((function(){return e.querySelector("iframe")&&"true"==e.querySelector("iframe").dataset.ready}),(function(){s.resize(e)})),k.on("enterfullscreen",R),k.on("exitfullscreen",R)}))}function R(e){var t=u(e.target,".gslide-media");"enterfullscreen"==e.type&&h(t,"fullscreen"),"exitfullscreen"==e.type&&d(t,"fullscreen")}function G(e,t,i,n){var s,l=this,o=e.querySelector(".gslide-media"),r=!(!O(t,"href")||!t.href)&&t.href.split("#").pop().trim(),d=!(!O(t,"content")||!t.content)&&t.content;if(d&&(C(d)&&(s=m('<div class="ginlined-content">'.concat(d,"</div>"))),k(d))){"none"==d.style.display&&(d.style.display="block");var c=document.createElement("div");c.className="ginlined-content",c.appendChild(d),s=c}if(r){var u=document.getElementById(r);if(!u)return!1;var g=u.cloneNode(!0);g.style.height=t.height,g.style.maxWidth=t.width,h(g,"ginlined-content"),s=g}if(!s)return console.error("Unable to append inline slide content",t),!1;o.style.height=t.height,o.style.width=t.width,o.appendChild(s),this.events["inlineclose"+r]=a("click",{onElement:o.querySelectorAll(".gtrigger-close"),withCallback:function(e){e.preventDefault(),l.close()}}),T(n)&&n()}function Z(e,t,i,n){var s=e.querySelector(".gslide-media"),l=function(e){var t=e.url,i=e.allow,n=e.callback,s=e.appendTo,l=document.createElement("iframe");return l.className="vimeo-video gvideo",l.src=t,l.style.width="100%",l.style.height="100%",i&&l.setAttribute("allow",i),l.onload=function(){h(l,"node-ready"),T(n)&&n()},s&&s.appendChild(l),l}({url:t.href,callback:n});s.parentNode.style.maxWidth=t.width,s.parentNode.style.height=t.height,s.appendChild(l)}var $=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},L(i)&&(this.defaults=l(this.defaults,i))}return n(e,[{key:"sourceType",value:function(e){var t=e;if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/))return"image";if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(e.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==e.match(/\.(mp4|ogg|webm|mov)/))return"video";if(null!==e.match(/\.(mp3|wav|wma|aac|ogg)/))return"audio";if(e.indexOf("#")>-1&&""!==t.split("#").pop().trim())return"inline";return e.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(e,t){var i=this,n=l({descPosition:t.descPosition},this.defaults);if(L(e)&&!k(e)){O(e,"type")||(O(e,"content")&&e.content?e.type="inline":O(e,"href")&&(e.type=this.sourceType(e.href)));var s=l(n,e);return this.setSize(s,t),s}var r="",a=e.getAttribute("data-glightbox"),h=e.nodeName.toLowerCase();if("a"===h&&(r=e.href),"img"===h&&(r=e.src,n.alt=e.alt),n.href=r,o(n,(function(s,l){O(t,l)&&"width"!==l&&(n[l]=t[l]);var o=e.dataset[l];I(o)||(n[l]=i.sanitizeValue(o))})),n.content&&(n.type="inline"),!n.type&&r&&(n.type=this.sourceType(r)),I(a)){if(!n.title&&"a"==h){var d=e.title;I(d)||""===d||(n.title=d)}if(!n.title&&"img"==h){var c=e.alt;I(c)||""===c||(n.title=c)}}else{var u=[];o(n,(function(e,t){u.push(";\\s?"+t)})),u=u.join("\\s?:|"),""!==a.trim()&&o(n,(function(e,t){var s=a,l=new RegExp("s?"+t+"s?:s?(.*?)("+u+"s?:|$)"),o=s.match(l);if(o&&o.length&&o[1]){var r=o[1].trim().replace(/;\s*$/,"");n[t]=i.sanitizeValue(r)}}))}if(n.description&&"."===n.description.substring(0,1)){var g;try{g=document.querySelector(n.description).innerHTML}catch(e){if(!(e instanceof DOMException))throw e}g&&(n.description=g)}if(!n.description){var v=e.querySelector(".glightbox-desc");v&&(n.description=v.innerHTML)}return this.setSize(n,t,e),this.slideConfig=n,n}},{key:"setSize",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),s=this.checkSize(t.height);return e.width=O(e,"width")&&""!==e.width?this.checkSize(e.width):n,e.height=O(e,"height")&&""!==e.height?this.checkSize(e.height):s,i&&"image"==e.type&&(e._hasCustomWidth=!!i.dataset.width,e._hasCustomHeight=!!i.dataset.height),e}},{key:"checkSize",value:function(e){return z(e)?"".concat(e,"px"):e}},{key:"sanitizeValue",value:function(e){return"true"!==e&&"false"!==e?e:"true"===e}}]),e}(),U=function(){function e(i,n,s){t(this,e),this.element=i,this.instance=n,this.index=s}return n(e,[{key:"setContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(c(t,"loaded"))return!1;var n=this.instance.settings,s=this.slideConfig,l=w();T(n.beforeSlideLoad)&&n.beforeSlideLoad({index:this.index,slide:t,player:!1});var o=s.type,r=s.descPosition,a=t.querySelector(".gslide-media"),d=t.querySelector(".gslide-title"),u=t.querySelector(".gslide-desc"),g=t.querySelector(".gdesc-inner"),v=i,f="gSlideTitle_"+this.index,p="gSlideDesc_"+this.index;if(T(n.afterSlideLoad)&&(v=function(){T(i)&&i(),n.afterSlideLoad({index:e.index,slide:t,player:e.instance.getSlidePlayerInstance(e.index)})}),""==s.title&&""==s.description?g&&g.parentNode.parentNode.removeChild(g.parentNode):(d&&""!==s.title?(d.id=f,d.innerHTML=s.title):d.parentNode.removeChild(d),u&&""!==s.description?(u.id=p,l&&n.moreLength>0?(s.smallDescription=this.slideShortDesc(s.description,n.moreLength,n.moreText),u.innerHTML=s.smallDescription,this.descriptionEvents(u,s)):u.innerHTML=s.description):u.parentNode.removeChild(u),h(a.parentNode,"desc-".concat(r)),h(g.parentNode,"description-".concat(r))),h(a,"gslide-".concat(o)),h(t,"loaded"),"video"!==o){if("external"!==o)return"inline"===o?(G.apply(this.instance,[t,s,this.index,v]),void(s.draggable&&new V({dragEl:t.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:this.instance}))):void("image"!==o?T(v)&&v():j(t,s,this.index,(function(){var i=t.querySelector("img");s.draggable&&new V({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:e.instance}),s.zoomable&&i.naturalWidth>i.offsetWidth&&(h(i,"zoomable"),new H(i,t,(function(){e.instance.resize()}))),T(v)&&v()})));Z.apply(this,[t,s,this.index,v])}else F.apply(this.instance,[t,s,this.index,v])}},{key:"slideShortDesc",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("div");n.innerHTML=e;var s=n.innerText,l=i;if((e=s.trim()).length<=t)return e;var o=e.substr(0,t-1);return l?(n=null,o+'... <a href="#" class="desc-more">'+i+"</a>"):o}},{key:"descriptionEvents",value:function(e,t){var i=this,n=e.querySelector(".desc-more");if(!n)return!1;a("click",{onElement:n,withCallback:function(e,n){e.preventDefault();var s=document.body,l=u(n,".gslide-desc");if(!l)return!1;l.innerHTML=t.description,h(s,"gdesc-open");var o=a("click",{onElement:[s,u(l,".gslide-description")],withCallback:function(e,n){"a"!==e.target.nodeName.toLowerCase()&&(d(s,"gdesc-open"),h(s,"gdesc-closed"),l.innerHTML=t.smallDescription,i.descriptionEvents(l,t),setTimeout((function(){d(s,"gdesc-closed")}),400),o.destroy())}})}})}},{key:"create",value:function(){return m(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){k(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var e=new $(this.instance.settings.slideExtraAttributes);return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),e}(),J=w(),K=null!==w()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,Q=document.getElementsByTagName("html")[0],ee={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.8/plyr.css",js:"https://cdn.plyr.io/3.6.8/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'},te=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.customOptions=i,this.settings=l(ee,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(e,[{key:"init",value:function(){var e=this,t=this.getSelector();t&&(this.baseEvents=a("click",{onElement:t,withCallback:function(t,i){t.preventDefault(),e.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=z(t)?t:this.settings.startAt;if(k(e)){var n=e.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),I(i)&&(i=this.getElementIndex(e))<0&&(i=0)}z(i)||(i=0),this.build(),g(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var s=document.body,l=window.innerWidth-document.documentElement.clientWidth;if(l>0){var o=document.createElement("style");o.type="text/css",o.className="gcss-styles",o.innerText=".gscrollbar-fixer {margin-right: ".concat(l,"px}"),document.head.appendChild(o),h(s,"gscrollbar-fixer")}h(s,"glightbox-open"),h(Q,"glightbox-open"),J&&(h(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(h(this.prevButton,"glightbox-button-hidden"),h(this.nextButton,"glightbox-button-hidden")):(d(this.prevButton,"glightbox-button-hidden"),d(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),T(this.settings.onOpen)&&this.settings.onOpen(),K&&this.settings.touchNavigation&&B(this),this.settings.keyboardNavigation&&X(this)}},{key:"openAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,e)}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];f(this.loader),this.index=parseInt(t);var n=this.slidesContainer.querySelector(".current");n&&d(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[t];if(c(s,"loaded"))this.slideAnimateIn(s,i),p(this.loader);else{f(this.loader);var l=this.elements[t],o={index:this.index,slide:s,slideNode:s,slideConfig:l.slideConfig,slideIndex:this.index,trigger:l.node,player:null};this.trigger("slide_before_load",o),l.instance.setContent(s,(function(){p(e.loader),e.resize(),e.slideAnimateIn(s,i),e.trigger("slide_after_load",o)}))}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&c(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(t+1),this.preloadSlide(t-1)),this.updateNavigationClasses(),this.activeSlide=s}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(I(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(c(i,"loaded"))return!1;var n=this.elements[e],s=n.type,l={index:e,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:e,trigger:n.node,player:null};this.trigger("slide_before_load",l),"video"==s||"external"==s?setTimeout((function(){n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}),200):n.instance.setContent(i,(function(){t.trigger("slide_after_load",l)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e)}},{key:"insertSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;t<0&&(t=this.elements.length);var i=new U(e,this,t),n=i.getConfig(),s=l({},n),o=i.create(),r=this.elements.length-1;s.index=t,s.node=!1,s.instance=i,s.slideConfig=n,this.elements.splice(t,0,s);var a=null,h=null;if(this.slidesContainer){if(t>r)this.slidesContainer.appendChild(o);else{var d=this.slidesContainer.querySelectorAll(".gslide")[t];this.slidesContainer.insertBefore(o,d)}(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0==this.index&&0==t&&(this.index=1),this.updateNavigationClasses(),a=this.slidesContainer.querySelectorAll(".gslide")[t],h=this.getSlidePlayerInstance(t),s.slideNode=a}this.trigger("slide_inserted",{index:t,slide:a,slideNode:a,slideConfig:n,slideIndex:t,trigger:null,player:h}),T(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:a,player:h})}},{key:"removeSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),T(this.settings.slideRemoved)&&this.settings.slideRemoved(e)}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),s=e.querySelector(".gslide-description"),l={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},o={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&s&&(p(s),s.style.display=""),d(e,this.effectsClasses),t)g(e,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),T(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}));else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slideBack.in),g(e,a,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:l,current:o}),T(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[l,o])}))}setTimeout((function(){i.resize(e)}),100),h(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;d(e,this.effectsClasses),h(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.slidePlayerPause(e),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),T(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),g(e,i,(function(){var t=e.querySelector(".ginner-container"),i=e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description");t.style.transform="",i.style.transform="",d(i,"greset"),i.style.opacity="",n&&(n.style.opacity=""),d(e,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(e){var t="gvideo"+e,i=this.getAllPlayers();return!(!O(i,t)||!i[t])&&i[t]}},{key:"stopSlideVideo",value:function(e){if(k(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(e){if(k(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(e){if(k(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(e){if(k(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&!i.playing&&(i.play(),this.settings.autofocusVideos&&i.elements.container.focus())}},{key:"setElements",value:function(e){var t=this;this.settings.elements=!1;var i=[];e&&e.length&&o(e,(function(e,n){var s=new U(e,t,n),o=s.getConfig(),r=l({},o);r.slideConfig=o,r.instance=s,r.index=n,i.push(r)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(o(this.elements,(function(){var e=m(t.settings.slideHTML);t.slidesContainer.appendChild(e)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(e){var t=!1;return o(this.elements,(function(i,n){if(O(i,"node")&&i.node==e)return t=n,!0})),t}},{key:"getElements",value:function(){var e=this,t=[];this.elements=this.elements?this.elements:[],!I(this.settings.elements)&&E(this.settings.elements)&&this.settings.elements.length&&o(this.settings.elements,(function(i,n){var s=new U(i,e,n),o=s.getConfig(),r=l({},o);r.node=!1,r.index=n,r.instance=s,r.slideConfig=o,t.push(r)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(o(i,(function(i,n){var s=new U(i,e,n),o=s.getConfig(),r=l({},o);r.node=i,r.index=n,r.instance=s,r.slideConfig=o,r.gallery=i.getAttribute("data-gallery"),t.push(r)})),t):t}},{key:"getGalleryElements",value:function(e,t){return e.filter((function(e){return e.gallery==t}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g".concat(i.in)),e.push("g".concat(i.out))}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=document.body.childNodes,i=[];o(t,(function(e){e.parentNode==document.body&&"#"!==e.nodeName.charAt(0)&&e.hasAttribute&&!e.hasAttribute("aria-hidden")&&(i.push(e),e.setAttribute("aria-hidden","true"))}));var n=O(this.settings.svg,"next")?this.settings.svg.next:"",s=O(this.settings.svg,"prev")?this.settings.svg.prev:"",l=O(this.settings.svg,"close")?this.settings.svg.close:"",r=this.settings.lightboxHTML;r=m(r=(r=(r=r.replace(/{nextSVG}/g,n)).replace(/{prevSVG}/g,s)).replace(/{closeSVG}/g,l)),document.body.appendChild(r);var d=document.getElementById("glightbox-body");this.modal=d;var g=d.querySelector(".gclose");this.prevButton=d.querySelector(".gprev"),this.nextButton=d.querySelector(".gnext"),this.overlay=d.querySelector(".goverlay"),this.loader=d.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=i,this.events={},h(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&g&&(this.events.close=a("click",{onElement:g,withCallback:function(t,i){t.preventDefault(),e.close()}})),g&&!this.settings.closeButton&&g.parentNode.removeChild(g),this.nextButton&&(this.events.next=a("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=a("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=a("click",{onElement:d,withCallback:function(t,i){e.preventOutsideClick||c(document.body,"glightbox-mobile")||u(t.target,".ginner-container")||u(t.target,".gbtn")||c(t.target,"gnext")||c(t.target,"gprev")||e.close()}})),o(this.elements,(function(t,i){e.slidesContainer.appendChild(t.instance.create()),t.slideNode=e.slidesContainer.querySelectorAll(".gslide")[i]})),K&&h(document.body,"glightbox-touch"),this.events.resize=a("resize",{onElement:window,withCallback:function(){e.resize()}}),this.built=!0}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((e=e||this.activeSlide)&&!c(e,"zoomed")){var t=y(),i=e.querySelector(".gvideo-wrapper"),n=e.querySelector(".gslide-image"),s=this.slideDescription,l=t.width,o=t.height;if(l<=768?h(document.body,"glightbox-mobile"):d(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(c(s,"description-bottom")||c(s,"description-top"))&&!c(s,"gabsolute")&&(r=!0),n)if(l<=768)n.querySelector("img");else if(r){var a=s.offsetHeight,u=n.querySelector("img");u.setAttribute("style","max-height: calc(100vh - ".concat(a,"px)")),s.setAttribute("style","max-width: ".concat(u.offsetWidth,"px;"))}if(i){var g=O(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!g){var v=i.clientWidth,f=i.clientHeight,p=v/f;g="".concat(v/p,":").concat(f/p)}var m=g.split(":"),x=this.settings.videosWidth,b=this.settings.videosWidth,S=(b=z(x)||-1!==x.indexOf("px")?parseInt(x):-1!==x.indexOf("vw")?l*parseInt(x)/100:-1!==x.indexOf("vh")?o*parseInt(x)/100:-1!==x.indexOf("%")?l*parseInt(x)/100:parseInt(i.clientWidth))/(parseInt(m[0])/parseInt(m[1]));if(S=Math.floor(S),r&&(o-=s.offsetHeight),b>l||S>o||o<S&&l>b){var w=i.offsetWidth,T=i.offsetHeight,C=o/T,k={width:w*C,height:T*C};i.parentNode.setAttribute("style","max-width: ".concat(k.width,"px")),r&&s.setAttribute("style","max-width: ".concat(k.width,"px;"))}else i.parentNode.style.maxWidth="".concat(x),r&&s.setAttribute("style","max-width: ".concat(x,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var e=this.loop();d(this.nextButton,"disabled"),d(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(h(this.prevButton,"disabled"),h(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||h(this.nextButton,"disabled"):h(this.prevButton,"disabled")}},{key:"loop",value:function(){var e=O(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=O(this.settings,"loop")?this.settings.loop:e,e}},{key:"close",value:function(){var e=this;if(!this.lightboxOpen){if(this.events){for(var t in this.events)this.events.hasOwnProperty(t)&&this.events[t].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&o(this.bodyHiddenChildElms,(function(e){e.removeAttribute("aria-hidden")})),h(this.modal,"glightbox-closing"),g(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),g(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events){for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();e.events=null}var i=document.body;d(Q,"glightbox-open"),d(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),e.modal.parentNode.removeChild(e.modal),e.trigger("close"),T(e.settings.onClose)&&e.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),e.lightboxOpen=!1,e.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!T(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t})}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"trigger",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];o(this.apiEvents,(function(t,s){var l=t.evt,o=t.once,r=t.callback;l==e&&(r(i),o&&n.push(s))})),n.length&&o(n,(function(e){return t.apiEvents.splice(e,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.1.1"}}]),e}();return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new te(e);return t.init(),t}}));
/*!
 * Chart.js v3.7.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Chart=e()}(this,(function(){"use strict";const t="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function e(e,i,s){const n=s||(t=>Array.prototype.slice.call(t));let o=!1,a=[];return function(...s){a=n(s),o||(o=!0,t.call(window,(()=>{o=!1,e.apply(i,a)})))}}function i(t,e){let i;return function(...s){return e?(clearTimeout(i),i=setTimeout(t,e,s)):t.apply(this,s),e}}const s=t=>"start"===t?"left":"end"===t?"right":"center",n=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,o=(t,e,i,s)=>t===(s?"left":"right")?i:"center"===t?(e+i)/2:e;var a=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,s){const n=e.listeners[s],o=e.duration;n.forEach((s=>s({chart:t,initial:e.initial,numSteps:o,currentStep:Math.min(i-e.start,o)})))}_refresh(){this._request||(this._running=!0,this._request=t.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,s)=>{if(!i.running||!i.items.length)return;const n=i.items;let o,a=n.length-1,r=!1;for(;a>=0;--a)o=n[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),r=!0):(n[a]=n[n.length-1],n.pop());r&&(s.draw(),this._notify(s,i,t,"progress")),n.length||(i.running=!1,this._notify(s,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let s=i.length-1;for(;s>=0;--s)i[s].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};
/*!
 * @kurkle/color v0.1.9
 * https://github.com/kurkle/color#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT License
 */const r={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},l="0123456789ABCDEF",h=t=>l[15&t],c=t=>l[(240&t)>>4]+l[15&t],d=t=>(240&t)>>4==(15&t);function u(t){var e=function(t){return d(t.r)&&d(t.g)&&d(t.b)&&d(t.a)}(t)?h:c;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}function f(t){return t+.5|0}const g=(t,e,i)=>Math.max(Math.min(t,i),e);function p(t){return g(f(2.55*t),0,255)}function m(t){return g(f(255*t),0,255)}function x(t){return g(f(t/2.55)/100,0,1)}function b(t){return g(f(100*t),0,100)}const _=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const y=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function v(t,e,i){const s=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-s*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function w(t,e,i){const s=(s,n=(s+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[s(5),s(3),s(1)]}function M(t,e,i){const s=v(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)s[n]*=1-e-i,s[n]+=e;return s}function k(t){const e=t.r/255,i=t.g/255,s=t.b/255,n=Math.max(e,i,s),o=Math.min(e,i,s),a=(n+o)/2;let r,l,h;return n!==o&&(h=n-o,l=a>.5?h/(2-n-o):h/(n+o),r=n===e?(i-s)/h+(i<s?6:0):n===i?(s-e)/h+2:(e-i)/h+4,r=60*r+.5),[0|r,l||0,a]}function S(t,e,i,s){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,s)).map(m)}function P(t,e,i){return S(v,t,e,i)}function D(t){return(t%360+360)%360}function C(t){const e=y.exec(t);let i,s=255;if(!e)return;e[5]!==i&&(s=e[6]?p(+e[5]):m(+e[5]));const n=D(+e[2]),o=+e[3]/100,a=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return S(M,t,e,i)}(n,o,a):"hsv"===e[1]?function(t,e,i){return S(w,t,e,i)}(n,o,a):P(n,o,a),{r:i[0],g:i[1],b:i[2],a:s}}const O={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},A={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let T;function L(t){T||(T=function(){const t={},e=Object.keys(A),i=Object.keys(O);let s,n,o,a,r;for(s=0;s<e.length;s++){for(a=r=e[s],n=0;n<i.length;n++)o=i[n],r=r.replace(o,O[o]);o=parseInt(A[a],16),t[r]=[o>>16&255,o>>8&255,255&o]}return t}(),T.transparent=[0,0,0,0]);const e=T[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}function R(t,e,i){if(t){let s=k(t);s[e]=Math.max(0,Math.min(s[e]+s[e]*i,0===e?360:1)),s=P(s),t.r=s[0],t.g=s[1],t.b=s[2]}}function E(t,e){return t?Object.assign(e||{},t):t}function I(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=m(t[3]))):(e=E(t,{r:0,g:0,b:0,a:1})).a=m(e.a),e}function z(t){return"r"===t.charAt(0)?function(t){const e=_.exec(t);let i,s,n,o=255;if(e){if(e[7]!==i){const t=+e[7];o=255&(e[8]?p(t):255*t)}return i=+e[1],s=+e[3],n=+e[5],i=255&(e[2]?p(i):i),s=255&(e[4]?p(s):s),n=255&(e[6]?p(n):n),{r:i,g:s,b:n,a:o}}}(t):C(t)}class F{constructor(t){if(t instanceof F)return t;const e=typeof t;let i;var s,n,o;"object"===e?i=I(t):"string"===e&&(o=(s=t).length,"#"===s[0]&&(4===o||5===o?n={r:255&17*r[s[1]],g:255&17*r[s[2]],b:255&17*r[s[3]],a:5===o?17*r[s[4]]:255}:7!==o&&9!==o||(n={r:r[s[1]]<<4|r[s[2]],g:r[s[3]]<<4|r[s[4]],b:r[s[5]]<<4|r[s[6]],a:9===o?r[s[7]]<<4|r[s[8]]:255})),i=n||L(t)||z(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=E(this._rgb);return t&&(t.a=x(t.a)),t}set rgb(t){this._rgb=I(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${x(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):this._rgb;var t}hexString(){return this._valid?u(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=k(t),i=e[0],s=b(e[1]),n=b(e[2]);return t.a<255?`hsla(${i}, ${s}%, ${n}%, ${x(t.a)})`:`hsl(${i}, ${s}%, ${n}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const s=i.rgb,n=t.rgb;let o;const a=e===o?.5:e,r=2*a-1,l=s.a-n.a,h=((r*l==-1?r:(r+l)/(1+r*l))+1)/2;o=1-h,s.r=255&h*s.r+o*n.r+.5,s.g=255&h*s.g+o*n.g+.5,s.b=255&h*s.b+o*n.b+.5,s.a=a*s.a+(1-a)*n.a,i.rgb=s}return i}clone(){return new F(this.rgb)}alpha(t){return this._rgb.a=m(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=f(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return R(this._rgb,2,t),this}darken(t){return R(this._rgb,2,-t),this}saturate(t){return R(this._rgb,1,t),this}desaturate(t){return R(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=k(t);i[0]=D(i[0]+e),i=P(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function B(t){return new F(t)}const V=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function W(t){return V(t)?t:B(t)}function N(t){return V(t)?t:B(t).saturate(.5).darken(.1).hexString()}function H(){}const j=function(){let t=0;return function(){return t++}}();function $(t){return null==t}function Y(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function U(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const X=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function q(t,e){return X(t)?t:e}function K(t,e){return void 0===t?e:t}const G=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,Z=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function J(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function Q(t,e,i,s){let n,o,a;if(Y(t))if(o=t.length,s)for(n=o-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<o;n++)e.call(i,t[n],n);else if(U(t))for(a=Object.keys(t),o=a.length,n=0;n<o;n++)e.call(i,t[a[n]],a[n])}function tt(t,e){let i,s,n,o;if(!t||!e||t.length!==e.length)return!1;for(i=0,s=t.length;i<s;++i)if(n=t[i],o=e[i],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function et(t){if(Y(t))return t.map(et);if(U(t)){const e=Object.create(null),i=Object.keys(t),s=i.length;let n=0;for(;n<s;++n)e[i[n]]=et(t[i[n]]);return e}return t}function it(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function st(t,e,i,s){if(!it(t))return;const n=e[t],o=i[t];U(n)&&U(o)?nt(n,o,s):e[t]=et(o)}function nt(t,e,i){const s=Y(e)?e:[e],n=s.length;if(!U(t))return t;const o=(i=i||{}).merger||st;for(let a=0;a<n;++a){if(!U(e=s[a]))continue;const n=Object.keys(e);for(let s=0,a=n.length;s<a;++s)o(n[s],t,e,i)}return t}function ot(t,e){return nt(t,e,{merger:at})}function at(t,e,i){if(!it(t))return;const s=e[t],n=i[t];U(s)&&U(n)?ot(s,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=et(n))}function rt(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function lt(t,e){if(""===e)return t;let i=0,s=rt(e,i);for(;t&&s>i;)t=t[e.substr(i,s-i)],i=s+1,s=rt(e,i);return t}function ht(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ct=t=>void 0!==t,dt=t=>"function"==typeof t,ut=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0};function ft(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const gt=Object.create(null),pt=Object.create(null);function mt(t,e){if(!e)return t;const i=e.split(".");for(let e=0,s=i.length;e<s;++e){const s=i[e];t=t[s]||(t[s]=Object.create(null))}return t}function xt(t,e,i){return"string"==typeof e?nt(mt(t,e),i):nt(mt(t,""),e)}var bt=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>N(e.backgroundColor),this.hoverBorderColor=(t,e)=>N(e.borderColor),this.hoverColor=(t,e)=>N(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return xt(this,t,e)}get(t){return mt(this,t)}describe(t,e){return xt(pt,t,e)}override(t,e){return xt(gt,t,e)}route(t,e,i,s){const n=mt(this,t),o=mt(this,i),a="_"+e;Object.defineProperties(n,{[a]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[a],e=o[s];return U(t)?Object.assign({},e,t):K(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});const _t=Math.PI,yt=2*_t,vt=yt+_t,wt=Number.POSITIVE_INFINITY,Mt=_t/180,kt=_t/2,St=_t/4,Pt=2*_t/3,Dt=Math.log10,Ct=Math.sign;function Ot(t){const e=Math.round(t);t=Lt(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Dt(t))),s=t/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function At(t){const e=[],i=Math.sqrt(t);let s;for(s=1;s<i;s++)t%s==0&&(e.push(s),e.push(t/s));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}function Tt(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Lt(t,e,i){return Math.abs(t-e)<i}function Rt(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}function Et(t,e,i){let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s][i],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function It(t){return t*(_t/180)}function zt(t){return t*(180/_t)}function Ft(t){if(!X(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Bt(t,e){const i=e.x-t.x,s=e.y-t.y,n=Math.sqrt(i*i+s*s);let o=Math.atan2(s,i);return o<-.5*_t&&(o+=yt),{angle:o,distance:n}}function Vt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Wt(t,e){return(t-e+vt)%yt-_t}function Nt(t){return(t%yt+yt)%yt}function Ht(t,e,i,s){const n=Nt(t),o=Nt(e),a=Nt(i),r=Nt(o-n),l=Nt(a-n),h=Nt(n-o),c=Nt(n-a);return n===o||n===a||s&&o===a||r>l&&h<c}function jt(t,e,i){return Math.max(e,Math.min(i,t))}function $t(t){return jt(t,-32768,32767)}function Yt(t,e,i,s=1e-6){return t>=Math.min(e,i)-s&&t<=Math.max(e,i)+s}function Ut(t){return!t||$(t.size)||$(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Xt(t,e,i,s,n){let o=e[n];return o||(o=e[n]=t.measureText(n).width,i.push(n)),o>s&&(s=o),s}function qt(t,e,i,s){let n=(s=s||{}).data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==e&&(n=s.data={},o=s.garbageCollect=[],s.font=e),t.save(),t.font=e;let a=0;const r=i.length;let l,h,c,d,u;for(l=0;l<r;l++)if(d=i[l],null!=d&&!0!==Y(d))a=Xt(t,n,o,a,d);else if(Y(d))for(h=0,c=d.length;h<c;h++)u=d[h],null==u||Y(u)||(a=Xt(t,n,o,a,u));t.restore();const f=o.length/2;if(f>i.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return a}function Kt(t,e,i){const s=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*s)/s+n}function Gt(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Zt(t,e,i,s){let n,o,a,r,l;const h=e.pointStyle,c=e.rotation,d=e.radius;let u=(c||0)*Mt;if(h&&"object"==typeof h&&(n=h.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,s),t.rotate(u),t.drawImage(h,-h.width/2,-h.height/2,h.width,h.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),h){default:t.arc(i,s,d,0,yt),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(u)*d,s-Math.cos(u)*d),u+=Pt,t.lineTo(i+Math.sin(u)*d,s-Math.cos(u)*d),u+=Pt,t.lineTo(i+Math.sin(u)*d,s-Math.cos(u)*d),t.closePath();break;case"rectRounded":l=.516*d,r=d-l,o=Math.cos(u+St)*r,a=Math.sin(u+St)*r,t.arc(i-o,s-a,l,u-_t,u-kt),t.arc(i+a,s-o,l,u-kt,u),t.arc(i+o,s+a,l,u,u+kt),t.arc(i-a,s+o,l,u+kt,u+_t),t.closePath();break;case"rect":if(!c){r=Math.SQRT1_2*d,t.rect(i-r,s-r,2*r,2*r);break}u+=St;case"rectRot":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+a,s-o),t.lineTo(i+o,s+a),t.lineTo(i-a,s+o),t.closePath();break;case"crossRot":u+=St;case"cross":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o);break;case"star":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o),u+=St,o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a),t.moveTo(i+a,s-o),t.lineTo(i-a,s+o);break;case"line":o=Math.cos(u)*d,a=Math.sin(u)*d,t.moveTo(i-o,s-a),t.lineTo(i+o,s+a);break;case"dash":t.moveTo(i,s),t.lineTo(i+Math.cos(u)*d,s+Math.sin(u)*d)}t.fill(),e.borderWidth>0&&t.stroke()}}function Jt(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Qt(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function te(t){t.restore()}function ee(t,e,i,s,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const s=(e.x+i.x)/2;t.lineTo(s,e.y),t.lineTo(s,i.y)}else"after"===n!=!!s?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function ie(t,e,i,s){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(s?e.cp1x:e.cp2x,s?e.cp1y:e.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function se(t,e,i,s,n,o={}){const a=Y(e)?e:[e],r=o.strokeWidth>0&&""!==o.strokeColor;let l,h;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);$(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,o),l=0;l<a.length;++l)h=a[l],r&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),$(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(h,i,s,o.maxWidth)),t.fillText(h,i,s,o.maxWidth),ne(t,i,s,h,o),s+=n.lineHeight;t.restore()}function ne(t,e,i,s,n){if(n.strikethrough||n.underline){const o=t.measureText(s),a=e-o.actualBoundingBoxLeft,r=e+o.actualBoundingBoxRight,l=i-o.actualBoundingBoxAscent,h=i+o.actualBoundingBoxDescent,c=n.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,c),t.lineTo(r,c),t.stroke()}}function oe(t,e){const{x:i,y:s,w:n,h:o,radius:a}=e;t.arc(i+a.topLeft,s+a.topLeft,a.topLeft,-kt,_t,!0),t.lineTo(i,s+o-a.bottomLeft),t.arc(i+a.bottomLeft,s+o-a.bottomLeft,a.bottomLeft,_t,kt,!0),t.lineTo(i+n-a.bottomRight,s+o),t.arc(i+n-a.bottomRight,s+o-a.bottomRight,a.bottomRight,kt,0,!0),t.lineTo(i+n,s+a.topRight),t.arc(i+n-a.topRight,s+a.topRight,a.topRight,0,-kt,!0),t.lineTo(i+a.topLeft,s)}function ae(t,e,i){i=i||(i=>t[i]<e);let s,n=t.length-1,o=0;for(;n-o>1;)s=o+n>>1,i(s)?o=s:n=s;return{lo:o,hi:n}}const re=(t,e,i)=>ae(t,i,(s=>t[s][e]<i)),le=(t,e,i)=>ae(t,i,(s=>t[s][e]>=i));function he(t,e,i){let s=0,n=t.length;for(;s<n&&t[s]<e;)s++;for(;n>s&&t[n-1]>i;)n--;return s>0||n<t.length?t.slice(s,n):t}const ce=["push","pop","shift","splice","unshift"];function de(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ce.forEach((e=>{const i="_onData"+ht(e),s=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const n=s.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"==typeof t[i]&&t[i](...e)})),n}})})))}function ue(t,e){const i=t._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(e);-1!==n&&s.splice(n,1),s.length>0||(ce.forEach((e=>{delete t[e]})),delete t._chartjs)}function fe(t){const e=new Set;let i,s;for(i=0,s=t.length;i<s;++i)e.add(t[i]);return e.size===s?t:Array.from(e)}function ge(){return"undefined"!=typeof window&&"undefined"!=typeof document}function pe(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function me(t,e,i){let s;return"string"==typeof t?(s=parseInt(t,10),-1!==t.indexOf("%")&&(s=s/100*e.parentNode[i])):s=t,s}const xe=t=>window.getComputedStyle(t,null);function be(t,e){return xe(t).getPropertyValue(e)}const _e=["top","right","bottom","left"];function ye(t,e,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const o=_e[n];s[o]=parseFloat(t[e+"-"+o+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}function ve(t,e){const{canvas:i,currentDevicePixelRatio:s}=e,n=xe(i),o="border-box"===n.boxSizing,a=ye(n,"padding"),r=ye(n,"border","width"),{x:l,y:h,box:c}=function(t,e){const i=t.native||t,s=i.touches,n=s&&s.length?s[0]:i,{offsetX:o,offsetY:a}=n;let r,l,h=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(o,a,i.target))r=o,l=a;else{const t=e.getBoundingClientRect();r=n.clientX-t.left,l=n.clientY-t.top,h=!0}return{x:r,y:l,box:h}}(t,i),d=a.left+(c&&r.left),u=a.top+(c&&r.top);let{width:f,height:g}=e;return o&&(f-=a.width+r.width,g-=a.height+r.height),{x:Math.round((l-d)/f*i.width/s),y:Math.round((h-u)/g*i.height/s)}}const we=t=>Math.round(10*t)/10;function Me(t,e,i,s){const n=xe(t),o=ye(n,"margin"),a=me(n.maxWidth,t,"clientWidth")||wt,r=me(n.maxHeight,t,"clientHeight")||wt,l=function(t,e,i){let s,n;if(void 0===e||void 0===i){const o=pe(t);if(o){const t=o.getBoundingClientRect(),a=xe(o),r=ye(a,"border","width"),l=ye(a,"padding");e=t.width-l.width-r.width,i=t.height-l.height-r.height,s=me(a.maxWidth,o,"clientWidth"),n=me(a.maxHeight,o,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:s||wt,maxHeight:n||wt}}(t,e,i);let{width:h,height:c}=l;if("content-box"===n.boxSizing){const t=ye(n,"border","width"),e=ye(n,"padding");h-=e.width+t.width,c-=e.height+t.height}return h=Math.max(0,h-o.width),c=Math.max(0,s?Math.floor(h/s):c-o.height),h=we(Math.min(h,a,l.maxWidth)),c=we(Math.min(c,r,l.maxHeight)),h&&!c&&(c=we(h/2)),{width:h,height:c}}function ke(t,e,i){const s=e||1,n=Math.floor(t.height*s),o=Math.floor(t.width*s);t.height=n/s,t.width=o/s;const a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==s||a.height!==n||a.width!==o)&&(t.currentDevicePixelRatio=s,a.height=n,a.width=o,t.ctx.setTransform(s,0,0,s,0,0),!0)}const Se=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function Pe(t,e){const i=be(t,e),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function De(t,e){return"native"in t?{x:t.x,y:t.y}:ve(t,e)}function Ce(t,e,i,s){const{controller:n,data:o,_sorted:a}=t,r=n._cachedMeta.iScale;if(r&&e===r.axis&&"r"!==e&&a&&o.length){const t=r._reversePixels?le:re;if(!s)return t(o,e,i);if(n._sharedOptions){const s=o[0],n="function"==typeof s.getRange&&s.getRange(e);if(n){const s=t(o,e,i-n),a=t(o,e,i+n);return{lo:s.lo,hi:a.hi}}}}return{lo:0,hi:o.length-1}}function Oe(t,e,i,s,n){const o=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=o.length;t<i;++t){const{index:i,data:r}=o[t],{lo:l,hi:h}=Ce(o[t],e,a,n);for(let t=l;t<=h;++t){const e=r[t];e.skip||s(e,i,t)}}}function Ae(t,e,i,s){const n=[];if(!Jt(e,t.chartArea,t._minPadding))return n;return Oe(t,i,e,(function(t,i,o){t.inRange(e.x,e.y,s)&&n.push({element:t,datasetIndex:i,index:o})}),!0),n}function Te(t,e,i,s,n){let o=[];const a=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,s){const n=e?Math.abs(t.x-s.x):0,o=i?Math.abs(t.y-s.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))}}(i);let r=Number.POSITIVE_INFINITY;return Oe(t,i,e,(function(i,l,h){const c=i.inRange(e.x,e.y,n);if(s&&!c)return;const d=i.getCenterPoint(n);if(!Jt(d,t.chartArea,t._minPadding)&&!c)return;const u=a(e,d);u<r?(o=[{element:i,datasetIndex:l,index:h}],r=u):u===r&&o.push({element:i,datasetIndex:l,index:h})})),o}function Le(t,e,i,s,n){return Jt(e,t.chartArea,t._minPadding)?"r"!==i||s?Te(t,e,i,s,n):function(t,e,i,s){let n=[];return Oe(t,i,e,(function(t,i,o){const{startAngle:a,endAngle:r}=t.getProps(["startAngle","endAngle"],s),{angle:l}=Bt(t,{x:e.x,y:e.y});Ht(l,a,r)&&n.push({element:t,datasetIndex:i,index:o})})),n}(t,e,i,n):[]}function Re(t,e,i,s){const n=De(e,t),o=[],a=i.axis,r="x"===a?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let s,n,o;for(let t=0,a=i.length;t<a;++t){({index:s,data:n}=i[t]);for(let t=0,i=n.length;t<i;++t)o=n[t],o.skip||e(o,s,t)}}(t,((t,e,i)=>{t[r](n[a],s)&&o.push({element:t,datasetIndex:e,index:i}),t.inRange(n.x,n.y,s)&&(l=!0)})),i.intersect&&!l?[]:o}var Ee={modes:{index(t,e,i,s){const n=De(e,t),o=i.axis||"x",a=i.intersect?Ae(t,n,o,s):Le(t,n,o,!1,s),r=[];return a.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=a[0].index,i=t.data[e];i&&!i.skip&&r.push({element:i,datasetIndex:t.index,index:e})})),r):[]},dataset(t,e,i,s){const n=De(e,t),o=i.axis||"xy";let a=i.intersect?Ae(t,n,o,s):Le(t,n,o,!1,s);if(a.length>0){const e=a[0].datasetIndex,i=t.getDatasetMeta(e).data;a=[];for(let t=0;t<i.length;++t)a.push({element:i[t],datasetIndex:e,index:t})}return a},point:(t,e,i,s)=>Ae(t,De(e,t),i.axis||"xy",s),nearest:(t,e,i,s)=>Le(t,De(e,t),i.axis||"xy",i.intersect,s),x:(t,e,i,s)=>Re(t,e,{axis:"x",intersect:i.intersect},s),y:(t,e,i,s)=>Re(t,e,{axis:"y",intersect:i.intersect},s)}};const Ie=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ze=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Fe(t,e){const i=(""+t).match(Ie);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}function Be(t,e){const i={},s=U(e),n=s?Object.keys(e):e,o=U(t)?s?i=>K(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=+o(t)||0;return i}function Ve(t){return Be(t,{top:"y",right:"x",bottom:"y",left:"x"})}function We(t){return Be(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ne(t){const e=Ve(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function He(t,e){t=t||{},e=e||bt.font;let i=K(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let s=K(t.style,e.style);s&&!(""+s).match(ze)&&(console.warn('Invalid font style specified: "'+s+'"'),s="");const n={family:K(t.family,e.family),lineHeight:Fe(K(t.lineHeight,e.lineHeight),i),size:i,style:s,weight:K(t.weight,e.weight),string:""};return n.string=Ut(n),n}function je(t,e,i,s){let n,o,a,r=!0;for(n=0,o=t.length;n<o;++n)if(a=t[n],void 0!==a&&(void 0!==e&&"function"==typeof a&&(a=a(e),r=!1),void 0!==i&&Y(a)&&(a=a[i%a.length],r=!1),void 0!==a))return s&&!r&&(s.cacheable=!1),a}function $e(t,e,i){const{min:s,max:n}=t,o=Z(e,(n-s)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(s,-Math.abs(o)),max:a(n,o)}}function Ye(t,e){return Object.assign(Object.create(t),e)}const Ue=["left","top","right","bottom"];function Xe(t,e){return t.filter((t=>t.pos===e))}function qe(t,e){return t.filter((t=>-1===Ue.indexOf(t.pos)&&t.box.axis===e))}function Ke(t,e){return t.sort(((t,i)=>{const s=e?i:t,n=e?t:i;return s.weight===n.weight?s.index-n.index:s.weight-n.weight}))}function Ge(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:s,stackWeight:n}=i;if(!t||!Ue.includes(s))continue;const o=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=n}return e}(t),{vBoxMaxWidth:s,hBoxMaxHeight:n}=e;let o,a,r;for(o=0,a=t.length;o<a;++o){r=t[o];const{fullSize:a}=r.box,l=i[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*s:a&&e.availableWidth,r.height=n):(r.width=s,r.height=h?h*n:a&&e.availableHeight)}return i}function Ze(t,e,i,s){return Math.max(t[i],e[i])+Math.max(t[s],e[s])}function Je(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Qe(t,e,i,s){const{pos:n,box:o}=i,a=t.maxPadding;if(!U(n)){i.size&&(t[n]-=i.size);const e=s[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?o.height:o.width),i.size=e.size/e.count,t[n]+=i.size}o.getPadding&&Je(a,o.getPadding());const r=Math.max(0,e.outerWidth-Ze(a,t,"left","right")),l=Math.max(0,e.outerHeight-Ze(a,t,"top","bottom")),h=r!==t.w,c=l!==t.h;return t.w=r,t.h=l,i.horizontal?{same:h,other:c}:{same:c,other:h}}function ti(t,e){const i=e.maxPadding;function s(t){const s={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{s[t]=Math.max(e[t],i[t])})),s}return s(t?["left","right"]:["top","bottom"])}function ei(t,e,i,s){const n=[];let o,a,r,l,h,c;for(o=0,a=t.length,h=0;o<a;++o){r=t[o],l=r.box,l.update(r.width||e.w,r.height||e.h,ti(r.horizontal,e));const{same:a,other:d}=Qe(e,i,r,s);h|=a&&n.length,c=c||d,l.fullSize||n.push(r)}return h&&ei(n,e,i,s)||c}function ii(t,e,i,s,n){t.top=i,t.left=e,t.right=e+s,t.bottom=i+n,t.width=s,t.height=n}function si(t,e,i,s){const n=i.padding;let{x:o,y:a}=e;for(const r of t){const t=r.box,l=s[r.stack]||{count:1,placed:0,weight:1},h=r.stackWeight/l.weight||1;if(r.horizontal){const s=e.w*h,o=l.size||t.height;ct(l.start)&&(a=l.start),t.fullSize?ii(t,n.left,a,i.outerWidth-n.right-n.left,o):ii(t,e.left+l.placed,a,s,o),l.start=a,l.placed+=s,a=t.bottom}else{const s=e.h*h,a=l.size||t.width;ct(l.start)&&(o=l.start),t.fullSize?ii(t,o,n.top,a,i.outerHeight-n.bottom-n.top):ii(t,o,e.top+l.placed,a,s),l.start=o,l.placed+=s,o=t.right}}e.x=o,e.y=a}bt.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var ni={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,s){if(!t)return;const n=Ne(t.options.layout.padding),o=Math.max(e-n.width,0),a=Math.max(i-n.height,0),r=function(t){const e=function(t){const e=[];let i,s,n,o,a,r;for(i=0,s=(t||[]).length;i<s;++i)n=t[i],({position:o,options:{stack:a,stackWeight:r=1}}=n),e.push({index:i,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&o+a,stackWeight:r});return e}(t),i=Ke(e.filter((t=>t.box.fullSize)),!0),s=Ke(Xe(e,"left"),!0),n=Ke(Xe(e,"right")),o=Ke(Xe(e,"top"),!0),a=Ke(Xe(e,"bottom")),r=qe(e,"x"),l=qe(e,"y");return{fullSize:i,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(a).concat(r),chartArea:Xe(e,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(a).concat(r)}}(t.boxes),l=r.vertical,h=r.horizontal;Q(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const c=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),u=Object.assign({},n);Je(u,Ne(s));const f=Object.assign({maxPadding:u,w:o,h:a,x:n.left,y:n.top},n),g=Ge(l.concat(h),d);ei(r.fullSize,f,d,g),ei(l,f,d,g),ei(h,f,d,g)&&ei(l,f,d,g),function(t){const e=t.maxPadding;function i(i){const s=Math.max(e[i]-t[i],0);return t[i]+=s,s}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(f),si(r.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,si(r.rightAndBottom,f,d,g),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},Q(r.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})}))}};function oi(t,e=[""],i=t,s,n=(()=>t[0])){ct(s)||(s=mi("_fallback",t));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:s,_getTarget:n,override:n=>oi([n,...t],e,i,s)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,s)=>ci(i,s,(()=>function(t,e,i,s){let n;for(const o of e)if(n=mi(li(o,t),i),ct(n))return hi(t,n)?gi(i,s,t,n):n}(s,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>xi(t).includes(e),ownKeys:t=>xi(t),set(t,e,i){const s=t._storage||(t._storage=n());return t[e]=s[e]=i,delete t._keys,!0}})}function ai(t,e,i,s){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:ri(t,s),setContext:e=>ai(t,e,i,s),override:n=>ai(t.override(n),e,i,s)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>ci(t,e,(()=>function(t,e,i){const{_proxy:s,_context:n,_subProxy:o,_descriptors:a}=t;let r=s[e];dt(r)&&a.isScriptable(e)&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=i;if(r.has(t))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+t);r.add(t),e=e(o,a||s),r.delete(t),hi(t,e)&&(e=gi(n._scopes,n,t,e));return e}(e,r,t,i));Y(r)&&r.length&&(r=function(t,e,i,s){const{_proxy:n,_context:o,_subProxy:a,_descriptors:r}=i;if(ct(o.index)&&s(t))e=e[o.index%e.length];else if(U(e[0])){const i=e,s=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=gi(s,n,t,l);e.push(ai(i,o,a&&a[t],r))}}return e}(e,r,t,a.isIndexable));hi(e,r)&&(r=ai(r,n,o&&o[e],a));return r}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,s)=>(t[i]=s,delete e[i],!0)})}function ri(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:s=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:s,isScriptable:dt(i)?i:()=>i,isIndexable:dt(s)?s:()=>s}}const li=(t,e)=>t?t+ht(e):e,hi=(t,e)=>U(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function ci(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const s=i();return t[e]=s,s}function di(t,e,i){return dt(t)?t(e,i):t}const ui=(t,e)=>!0===t?e:"string"==typeof t?lt(e,t):void 0;function fi(t,e,i,s,n){for(const o of e){const e=ui(i,o);if(e){t.add(e);const o=di(e._fallback,i,n);if(ct(o)&&o!==i&&o!==s)return o}else if(!1===e&&ct(s)&&i!==s)return null}return!1}function gi(t,e,i,s){const n=e._rootScopes,o=di(e._fallback,i,s),a=[...t,...n],r=new Set;r.add(s);let l=pi(r,a,i,o||i,s);return null!==l&&((!ct(o)||o===i||(l=pi(r,a,o,l,s),null!==l))&&oi(Array.from(r),[""],n,o,(()=>function(t,e,i){const s=t._getTarget();e in s||(s[e]={});const n=s[e];if(Y(n)&&U(i))return i;return n}(e,i,s))))}function pi(t,e,i,s,n){for(;i;)i=fi(t,e,i,s,n);return i}function mi(t,e){for(const i of e){if(!i)continue;const e=i[t];if(ct(e))return e}}function xi(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const bi=Number.EPSILON||1e-14,_i=(t,e)=>e<t.length&&!t[e].skip&&t[e],yi=t=>"x"===t?"y":"x";function vi(t,e,i,s){const n=t.skip?e:t,o=e,a=i.skip?e:i,r=Vt(o,n),l=Vt(a,o);let h=r/(r+l),c=l/(r+l);h=isNaN(h)?0:h,c=isNaN(c)?0:c;const d=s*h,u=s*c;return{previous:{x:o.x-d*(a.x-n.x),y:o.y-d*(a.y-n.y)},next:{x:o.x+u*(a.x-n.x),y:o.y+u*(a.y-n.y)}}}function wi(t,e="x"){const i=yi(e),s=t.length,n=Array(s).fill(0),o=Array(s);let a,r,l,h=_i(t,0);for(a=0;a<s;++a)if(r=l,l=h,h=_i(t,a+1),l){if(h){const t=h[e]-l[e];n[a]=0!==t?(h[i]-l[i])/t:0}o[a]=r?h?Ct(n[a-1])!==Ct(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a]}!function(t,e,i){const s=t.length;let n,o,a,r,l,h=_i(t,0);for(let c=0;c<s-1;++c)l=h,h=_i(t,c+1),l&&h&&(Lt(e[c],0,bi)?i[c]=i[c+1]=0:(n=i[c]/e[c],o=i[c+1]/e[c],r=Math.pow(n,2)+Math.pow(o,2),r<=9||(a=3/Math.sqrt(r),i[c]=n*a*e[c],i[c+1]=o*a*e[c])))}(t,n,o),function(t,e,i="x"){const s=yi(i),n=t.length;let o,a,r,l=_i(t,0);for(let h=0;h<n;++h){if(a=r,r=l,l=_i(t,h+1),!r)continue;const n=r[i],c=r[s];a&&(o=(n-a[i])/3,r[`cp1${i}`]=n-o,r[`cp1${s}`]=c-o*e[h]),l&&(o=(l[i]-n)/3,r[`cp2${i}`]=n+o,r[`cp2${s}`]=c+o*e[h])}}(t,o,e)}function Mi(t,e,i){return Math.max(Math.min(t,i),e)}function ki(t,e,i,s,n){let o,a,r,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)wi(t,n);else{let i=s?t[t.length-1]:t[0];for(o=0,a=t.length;o<a;++o)r=t[o],l=vi(i,r,t[Math.min(o+1,a-(s?0:1))%a],e.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,i=r}e.capBezierPoints&&function(t,e){let i,s,n,o,a,r=Jt(t[0],e);for(i=0,s=t.length;i<s;++i)a=o,o=r,r=i<s-1&&Jt(t[i+1],e),o&&(n=t[i],a&&(n.cp1x=Mi(n.cp1x,e.left,e.right),n.cp1y=Mi(n.cp1y,e.top,e.bottom)),r&&(n.cp2x=Mi(n.cp2x,e.left,e.right),n.cp2y=Mi(n.cp2y,e.top,e.bottom)))}(t,i)}const Si=t=>0===t||1===t,Pi=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*yt/i),Di=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*yt/i)+1,Ci={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*kt),easeOutSine:t=>Math.sin(t*kt),easeInOutSine:t=>-.5*(Math.cos(_t*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>Si(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Si(t)?t:Pi(t,.075,.3),easeOutElastic:t=>Si(t)?t:Di(t,.075,.3),easeInOutElastic(t){const e=.1125;return Si(t)?t:t<.5?.5*Pi(2*t,e,.45):.5+.5*Di(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Ci.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*Ci.easeInBounce(2*t):.5*Ci.easeOutBounce(2*t-1)+.5};function Oi(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Ai(t,e,i,s){return{x:t.x+i*(e.x-t.x),y:"middle"===s?i<.5?t.y:e.y:"after"===s?i<1?t.y:e.y:i>0?e.y:t.y}}function Ti(t,e,i,s){const n={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},a=Oi(t,n,i),r=Oi(n,o,i),l=Oi(o,e,i),h=Oi(a,r,i),c=Oi(r,l,i);return Oi(h,c,i)}const Li=new Map;function Ri(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let s=Li.get(i);return s||(s=new Intl.NumberFormat(t,e),Li.set(i,s)),s}(e,i).format(t)}function Ei(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function Ii(t,e){let i,s;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=s)}function zi(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Fi(t){return"angle"===t?{between:Ht,compare:Wt,normalize:Nt}:{between:Yt,compare:(t,e)=>t-e,normalize:t=>t}}function Bi({start:t,end:e,count:i,loop:s,style:n}){return{start:t%i,end:e%i,loop:s&&(e-t+1)%i==0,style:n}}function Vi(t,e,i){if(!i)return[t];const{property:s,start:n,end:o}=i,a=e.length,{compare:r,between:l,normalize:h}=Fi(s),{start:c,end:d,loop:u,style:f}=function(t,e,i){const{property:s,start:n,end:o}=i,{between:a,normalize:r}=Fi(s),l=e.length;let h,c,{start:d,end:u,loop:f}=t;if(f){for(d+=l,u+=l,h=0,c=l;h<c&&a(r(e[d%l][s]),n,o);++h)d--,u--;d%=l,u%=l}return u<d&&(u+=l),{start:d,end:u,loop:f,style:t.style}}(t,e,i),g=[];let p,m,x,b=!1,_=null;const y=()=>b||l(n,x,p)&&0!==r(n,x),v=()=>!b||0===r(o,p)||l(o,x,p);for(let t=c,i=c;t<=d;++t)m=e[t%a],m.skip||(p=h(m[s]),p!==x&&(b=l(p,n,o),null===_&&y()&&(_=0===r(p,n)?t:i),null!==_&&v()&&(g.push(Bi({start:_,end:t,loop:u,count:a,style:f})),_=null),i=t,x=p));return null!==_&&g.push(Bi({start:_,end:d,loop:u,count:a,style:f})),g}function Wi(t,e){const i=[],s=t.segments;for(let n=0;n<s.length;n++){const o=Vi(s[n],t.points,e);o.length&&i.push(...o)}return i}function Ni(t,e){const i=t.points,s=t.options.spanGaps,n=i.length;if(!n)return[];const o=!!t._loop,{start:a,end:r}=function(t,e,i,s){let n=0,o=e-1;if(i&&!s)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(o+=n);o>n&&t[o%e].skip;)o--;return o%=e,{start:n,end:o}}(i,n,o,s);if(!0===s)return Hi(t,[{start:a,end:r,loop:o}],i,e);return Hi(t,function(t,e,i,s){const n=t.length,o=[];let a,r=e,l=t[e];for(a=e+1;a<=i;++a){const i=t[a%n];i.skip||i.stop?l.skip||(s=!1,o.push({start:e%n,end:(a-1)%n,loop:s}),e=r=i.stop?a:null):(r=a,l.skip&&(e=a)),l=i}return null!==r&&o.push({start:e%n,end:r%n,loop:s}),o}(i,a,r<a?r+n:r,!!t._fullLoop&&0===a&&r===n-1),i,e)}function Hi(t,e,i,s){return s&&s.setContext&&i?function(t,e,i,s){const n=t._chart.getContext(),o=ji(t.options),{_datasetIndex:a,options:{spanGaps:r}}=t,l=i.length,h=[];let c=o,d=e[0].start,u=d;function f(t,e,s,n){const o=r?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=o;for(;i[e%l].skip;)e+=o;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:s,style:n}),c=n,d=e%l)}}for(const t of e){d=r?d:t.start;let e,o=i[d%l];for(u=d+1;u<=t.end;u++){const r=i[u%l];e=ji(s.setContext(Ye(n,{type:"segment",p0:o,p1:r,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),$i(e,c)&&f(d,u-1,t.loop,c),o=r,c=e}d<u-1&&f(d,u-1,t.loop,c)}return h}(t,e,i,s):e}function ji(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function $i(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var Yi=Object.freeze({__proto__:null,easingEffects:Ci,color:W,getHoverColor:N,noop:H,uid:j,isNullOrUndef:$,isArray:Y,isObject:U,isFinite:X,finiteOrDefault:q,valueOrDefault:K,toPercentage:G,toDimension:Z,callback:J,each:Q,_elementsEqual:tt,clone:et,_merger:st,merge:nt,mergeIf:ot,_mergerIf:at,_deprecated:function(t,e,i,s){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+s+'" instead')},resolveObjectKey:lt,_capitalize:ht,defined:ct,isFunction:dt,setsEqual:ut,_isClickEvent:ft,toFontString:Ut,_measureText:Xt,_longestText:qt,_alignPixel:Kt,clearCanvas:Gt,drawPoint:Zt,_isPointInArea:Jt,clipArea:Qt,unclipArea:te,_steppedLineTo:ee,_bezierCurveTo:ie,renderText:se,addRoundedRectPath:oe,_lookup:ae,_lookupByKey:re,_rlookupByKey:le,_filterBetween:he,listenArrayEvents:de,unlistenArrayEvents:ue,_arrayUnique:fe,_createResolver:oi,_attachContext:ai,_descriptors:ri,splineCurve:vi,splineCurveMonotone:wi,_updateBezierControlPoints:ki,_isDomSupported:ge,_getParentNode:pe,getStyle:be,getRelativePosition:ve,getMaximumSize:Me,retinaScale:ke,supportsEventListenerOptions:Se,readUsedSize:Pe,fontString:function(t,e,i){return e+" "+t+"px "+i},requestAnimFrame:t,throttled:e,debounce:i,_toLeftRightCenter:s,_alignStartEnd:n,_textX:o,_pointInLine:Oi,_steppedInterpolation:Ai,_bezierInterpolation:Ti,formatNumber:Ri,toLineHeight:Fe,_readValueToProps:Be,toTRBL:Ve,toTRBLCorners:We,toPadding:Ne,toFont:He,resolve:je,_addGrace:$e,createContext:Ye,PI:_t,TAU:yt,PITAU:vt,INFINITY:wt,RAD_PER_DEG:Mt,HALF_PI:kt,QUARTER_PI:St,TWO_THIRDS_PI:Pt,log10:Dt,sign:Ct,niceNum:Ot,_factorize:At,isNumber:Tt,almostEquals:Lt,almostWhole:Rt,_setMinAndMaxByKey:Et,toRadians:It,toDegrees:zt,_decimalPlaces:Ft,getAngleFromPoint:Bt,distanceBetweenPoints:Vt,_angleDiff:Wt,_normalizeAngle:Nt,_angleBetween:Ht,_limitValue:jt,_int16Range:$t,_isBetween:Yt,getRtlAdapter:Ei,overrideTextDirection:Ii,restoreTextDirection:zi,_boundSegment:Vi,_boundSegments:Wi,_computeSegments:Ni});class Ui{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,s){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,s?Math.floor(e/s):i)}}isAttached(t){return!0}updateConfig(t){}}class Xi extends Ui{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const qi={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Ki=t=>null===t||""===t;const Gi=!!Se&&{passive:!0};function Zi(t,e,i){t.canvas.removeEventListener(e,i,Gi)}function Ji(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function Qi(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Ji(i.addedNodes,s),e=e&&!Ji(i.removedNodes,s);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}function ts(t,e,i){const s=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Ji(i.removedNodes,s),e=e&&!Ji(i.addedNodes,s);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const es=new Map;let is=0;function ss(){const t=window.devicePixelRatio;t!==is&&(is=t,es.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function ns(t,i,s){const n=t.canvas,o=n&&pe(n);if(!o)return;const a=e(((t,e)=>{const i=o.clientWidth;s(t,e),i<o.clientWidth&&s()}),window),r=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,s=e.contentRect.height;0===i&&0===s||a(i,s)}));return r.observe(o),function(t,e){es.size||window.addEventListener("resize",ss),es.set(t,e)}(t,a),r}function os(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){es.delete(t),es.size||window.removeEventListener("resize",ss)}(t)}function as(t,i,s){const n=t.canvas,o=e((e=>{null!==t.ctx&&s(function(t,e){const i=qi[t.type]||t.type,{x:s,y:n}=ve(t,e);return{type:i,chart:e,native:t,x:void 0!==s?s:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,Gi)}(n,i,o),o}class rs extends Ui{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,s=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",Ki(n)){const e=Pe(t,"width");void 0!==e&&(t.width=e)}if(Ki(s))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Pe(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const s=i[t];$(s)?e.removeAttribute(t):e.setAttribute(t,s)}));const s=i.style||{};return Object.keys(s).forEach((t=>{e.style[t]=s[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const s=t.$proxies||(t.$proxies={}),n={attach:Qi,detach:ts,resize:ns}[e]||as;s[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),s=i[e];if(!s)return;({attach:os,detach:os,resize:os}[e]||Zi)(t,e,s),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,s){return Me(t,e,i,s)}isAttached(t){const e=pe(t);return!(!e||!e.isConnected)}}function ls(t){return!ge()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?Xi:rs}var hs=Object.freeze({__proto__:null,_detectPlatform:ls,BasePlatform:Ui,BasicPlatform:Xi,DomPlatform:rs});const cs="transparent",ds={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const s=W(t||cs),n=s.valid&&W(e||cs);return n&&n.valid?n.mix(s,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class us{constructor(t,e,i,s){const n=e[i];s=je([t.to,s,n,t.from]);const o=je([t.from,n,s]);this._active=!0,this._fn=t.fn||ds[t.type||typeof o],this._easing=Ci[t.easing]||Ci.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const s=this._target[this._prop],n=i-this._start,o=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=je([t.to,e,s,t.from]),this._from=je([t.from,s,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,s=this._prop,n=this._from,o=this._loop,a=this._to;let r;if(this._active=n!==a&&(o||e<i),!this._active)return this._target[s]=a,void this._notify(!0);e<0?this._target[s]=n:(r=e/i%2,r=o&&r>1?2-r:r,r=this._easing(Math.min(1,Math.max(0,r))),this._target[s]=this._fn(n,a,r))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}bt.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const fs=Object.keys(bt.animation);bt.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),bt.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),bt.describe("animations",{_fallback:"animation"}),bt.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class gs{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!U(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const s=t[i];if(!U(s))return;const n={};for(const t of fs)n[t]=s[t];(Y(s.properties)&&s.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,s=function(t,e){if(!e)return;let i=t.options;if(!i)return void(t.options=e);i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}}));return i}(t,i);if(!s)return[];const n=this._createAnimations(s,i);return i.$shared&&function(t,e){const i=[],s=Object.keys(e);for(let e=0;e<s.length;e++){const n=t[s[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,s=[],n=t.$animations||(t.$animations={}),o=Object.keys(e),a=Date.now();let r;for(r=o.length-1;r>=0;--r){const l=o[r];if("$"===l.charAt(0))continue;if("options"===l){s.push(...this._animateOptions(t,e));continue}const h=e[l];let c=n[l];const d=i.get(l);if(c){if(d&&c.active()){c.update(d,h,a);continue}c.cancel()}d&&d.duration?(n[l]=c=new us(d,t,l,h),s.push(c)):t[l]=h}return s}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(a.add(this._chart,i),!0):void 0}}function ps(t,e){const i=t&&t.options||{},s=i.reverse,n=void 0===i.min?e:0,o=void 0===i.max?e:0;return{start:s?o:n,end:s?n:o}}function ms(t,e){const i=[],s=t._getSortedDatasetMetas(e);let n,o;for(n=0,o=s.length;n<o;++n)i.push(s[n].index);return i}function xs(t,e,i,s={}){const n=t.keys,o="single"===s.mode;let a,r,l,h;if(null!==e){for(a=0,r=n.length;a<r;++a){if(l=+n[a],l===i){if(s.all)continue;break}h=t.values[l],X(h)&&(o||0===e||Ct(e)===Ct(h))&&(e+=h)}return e}}function bs(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function _s(t,e,i){const s=t[e]||(t[e]={});return s[i]||(s[i]={})}function ys(t,e,i,s){for(const n of e.getMatchingVisibleMetas(s).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function vs(t,e){const{chart:i,_cachedMeta:s}=t,n=i._stacks||(i._stacks={}),{iScale:o,vScale:a,index:r}=s,l=o.axis,h=a.axis,c=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(o,a,s),d=e.length;let u;for(let t=0;t<d;++t){const i=e[t],{[l]:o,[h]:d}=i;u=(i._stacks||(i._stacks={}))[h]=_s(n,c,o),u[r]=d,u._top=ys(u,a,!0,s.type),u._bottom=ys(u,a,!1,s.type)}}function ws(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ms(t,e){const i=t.controller.index,s=t.vScale&&t.vScale.axis;if(s){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[s]||void 0===e[s][i])return;delete e[s][i]}}}const ks=t=>"reset"===t||"none"===t,Ss=(t,e)=>e?t:Object.assign({},t);class Ps{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=bs(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Ms(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),s=(t,e,i,s)=>"x"===t?e:"r"===t?s:i,n=e.xAxisID=K(i.xAxisID,ws(t,"x")),o=e.yAxisID=K(i.yAxisID,ws(t,"y")),a=e.rAxisID=K(i.rAxisID,ws(t,"r")),r=e.indexAxis,l=e.iAxisID=s(r,n,o,a),h=e.vAxisID=s(r,o,n,a);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(o),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ue(this._data,this),t._stacked&&Ms(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(U(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let s,n,o;for(s=0,n=e.length;s<n;++s)o=e[s],i[s]={x:o,y:t[o]};return i}(e);else if(i!==e){if(i){ue(i,this);const t=this._cachedMeta;Ms(t),t._parsed=[]}e&&Object.isExtensible(e)&&de(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let s=!1;this._dataCheck();const n=e._stacked;e._stacked=bs(e.vScale,e),e.stack!==i.stack&&(s=!0,Ms(e),e.stack=i.stack),this._resyncElements(t),(s||n!==e._stacked)&&vs(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:s}=this,{iScale:n,_stacked:o}=i,a=n.axis;let r,l,h,c=0===t&&e===s.length||i._sorted,d=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=s,i._sorted=!0,h=s;else{h=Y(s[t])?this.parseArrayData(i,s,t,e):U(s[t])?this.parseObjectData(i,s,t,e):this.parsePrimitiveData(i,s,t,e);const n=()=>null===l[a]||d&&l[a]<d[a];for(r=0;r<e;++r)i._parsed[r+t]=l=h[r],c&&(n()&&(c=!1),d=l);i._sorted=c}o&&vs(this,h)}parsePrimitiveData(t,e,i,s){const{iScale:n,vScale:o}=t,a=n.axis,r=o.axis,l=n.getLabels(),h=n===o,c=new Array(s);let d,u,f;for(d=0,u=s;d<u;++d)f=d+i,c[d]={[a]:h||n.parse(l[f],f),[r]:o.parse(e[f],f)};return c}parseArrayData(t,e,i,s){const{xScale:n,yScale:o}=t,a=new Array(s);let r,l,h,c;for(r=0,l=s;r<l;++r)h=r+i,c=e[h],a[r]={x:n.parse(c[0],h),y:o.parse(c[1],h)};return a}parseObjectData(t,e,i,s){const{xScale:n,yScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l=new Array(s);let h,c,d,u;for(h=0,c=s;h<c;++h)d=h+i,u=e[d],l[h]={x:n.parse(lt(u,a),d),y:o.parse(lt(u,r),d)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const s=this.chart,n=this._cachedMeta,o=e[t.axis];return xs({keys:ms(s,!0),values:e._stacks[t.axis]},o,n.index,{mode:i})}updateRangeFromParsed(t,e,i,s){const n=i[e.axis];let o=null===n?NaN:n;const a=s&&i._stacks[e.axis];s&&a&&(s.values=a,o=xs(s,n,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,e){const i=this._cachedMeta,s=i._parsed,n=i._sorted&&t===i.iScale,o=s.length,a=this._getOtherScale(t),r=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ms(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:c}=function(t){const{min:e,max:i,minDefined:s,maxDefined:n}=t.getUserBounds();return{min:s?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(a);let d,u;function f(){u=s[d];const e=u[a.axis];return!X(u[t.axis])||h>e||c<e}for(d=0;d<o&&(f()||(this.updateRangeFromParsed(l,t,u,r),!n));++d);if(n)for(d=o-1;d>=0;--d)if(!f()){this.updateRangeFromParsed(l,t,u,r);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let s,n,o;for(s=0,n=e.length;s<n;++s)o=e[s][t.axis],X(o)&&i.push(o);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,s=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:s?""+s.getLabelForValue(n[s.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,s,n;return U(t)?(e=t.top,i=t.right,s=t.bottom,n=t.left):e=i=s=n=t,{top:e,right:i,bottom:s,left:n,disabled:!1===t}}(K(this.options.clip,function(t,e,i){if(!1===i)return!1;const s=ps(t,i),n=ps(e,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,s=i.data||[],n=e.chartArea,o=[],a=this._drawStart||0,r=this._drawCount||s.length-a,l=this.options.drawActiveElementsOnTop;let h;for(i.dataset&&i.dataset.draw(t,n,a,r),h=a;h<a+r;++h){const e=s[h];e.hidden||(e.active&&l?o.push(e):e.draw(t,n))}for(h=0;h<o.length;++h)o[h].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const s=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return Ye(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=s.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return Ye(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=s,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const s="active"===e,n=this._cachedDataOpts,o=t+"-"+e,a=n[o],r=this.enableOptionSharing&&ct(i);if(a)return Ss(a,r);const l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=s?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),u=Object.keys(bt.elements[t]),f=l.resolveNamedOptions(d,u,(()=>this.getContext(i,s)),c);return f.$shared&&(f.$shared=r,n[o]=Object.freeze(Ss(f,r))),f}_resolveAnimations(t,e,i){const s=this.chart,n=this._cachedDataOpts,o=`animation-${e}`,a=n[o];if(a)return a;let r;if(!1!==s.options.animation){const s=this.chart.config,n=s.datasetAnimationScopeKeys(this._type,e),o=s.getOptionScopes(this.getDataset(),n);r=s.createResolver(o,this.getContext(t,i,e))}const l=new gs(s,r&&r.animations);return r&&r._cacheable&&(n[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ks(t)||this.chart._animationsDisabled}updateElement(t,e,i,s){ks(s)?Object.assign(t,i):this._resolveAnimations(e,s).update(t,i)}updateSharedOptions(t,e,i){t&&!ks(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,s){t.active=s;const n=this.getStyle(e,s);this._resolveAnimations(e,i,s).update(t,{options:!s&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const s=i.length,n=e.length,o=Math.min(n,s);o&&this.parse(0,o),n>s?this._insertElements(s,n-s,t):n<s&&this._removeElements(n,s-n)}_insertElements(t,e,i=!0){const s=this._cachedMeta,n=s.data,o=t+e;let a;const r=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(r(n),a=t;a<o;++a)n[a]=new this.dataElementType;this._parsing&&r(s._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,s){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const s=i._parsed.splice(t,e);i._stacked&&Ms(i,s)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,s]=t;this[e](i,s)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}Ps.defaults={},Ps.prototype.datasetElementType=null,Ps.prototype.dataElementType=null;class Ds{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Tt(this.x)&&Tt(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const s={};return t.forEach((t=>{s[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),s}}Ds.defaults={},Ds.defaultRoutes=void 0;const Cs={values:t=>Y(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const s=this.chart.options.locale;let n,o=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),o=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t));return i}(t,i)}const a=Dt(Math.abs(o)),r=Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),Ri(t,s,l)},logarithmic(t,e,i){if(0===t)return"0";const s=t/Math.pow(10,Math.floor(Dt(t)));return 1===s||2===s||5===s?Cs.numeric.call(this,t,e,i):""}};var Os={formatters:Cs};function As(t,e){const i=t.options.ticks,s=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),s=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(s,n))}(t),n=i.major.enabled?function(t){const e=[];let i,s;for(i=0,s=t.length;i<s;i++)t[i].major&&e.push(i);return e}(e):[],o=n.length,a=n[0],r=n[o-1],l=[];if(o>s)return function(t,e,i,s){let n,o=0,a=i[0];for(s=Math.ceil(s),n=0;n<t.length;n++)n===a&&(e.push(t[n]),o++,a=i[o*s])}(e,l,n,o/s),l;const h=function(t,e,i){const s=function(t){const e=t.length;let i,s;if(e<2)return!1;for(s=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==s)return!1;return s}(t),n=e.length/i;if(!s)return Math.max(n,1);const o=At(s);for(let t=0,e=o.length-1;t<e;t++){const e=o[t];if(e>n)return e}return Math.max(n,1)}(n,e,s);if(o>0){let t,i;const s=o>1?Math.round((r-a)/(o-1)):null;for(Ts(e,l,h,$(s)?0:a-s,a),t=0,i=o-1;t<i;t++)Ts(e,l,h,n[t],n[t+1]);return Ts(e,l,h,r,$(s)?e.length:r+s),l}return Ts(e,l,h),l}function Ts(t,e,i,s,n){const o=K(s,0),a=Math.min(K(n,t.length),t.length);let r,l,h,c=0;for(i=Math.ceil(i),n&&(r=n-s,i=r/Math.floor(r/i)),h=o;h<0;)c++,h=Math.round(o+c*i);for(l=Math.max(o,0);l<a;l++)l===h&&(e.push(t[l]),c++,h=Math.round(o+c*i))}bt.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Os.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),bt.route("scale.ticks","color","","color"),bt.route("scale.grid","color","","borderColor"),bt.route("scale.grid","borderColor","","borderColor"),bt.route("scale.title","color","","color"),bt.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),bt.describe("scales",{_fallback:"scale"}),bt.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Ls=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Rs(t,e){const i=[],s=t.length/e,n=t.length;let o=0;for(;o<n;o+=s)i.push(t[Math.floor(o)]);return i}function Es(t,e,i){const s=t.ticks.length,n=Math.min(e,s-1),o=t._startPixel,a=t._endPixel,r=1e-6;let l,h=t.getPixelForTick(n);if(!(i&&(l=1===s?Math.max(h-o,a-h):0===e?(t.getPixelForTick(1)-h)/2:(h-t.getPixelForTick(n-1))/2,h+=n<e?l:-l,h<o-r||h>a+r)))return h}function Is(t){return t.drawTicks?t.tickLength:0}function zs(t,e){if(!t.display)return 0;const i=He(t.font,e),s=Ne(t.padding);return(Y(t.text)?t.text.length:1)*i.lineHeight+s.height}function Fs(t,e,i){let n=s(t);return(i&&"right"!==e||!i&&"right"===e)&&(n=(t=>"left"===t?"right":"right"===t?"left":t)(n)),n}class Bs extends Ds{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:s}=this;return t=q(t,Number.POSITIVE_INFINITY),e=q(e,Number.NEGATIVE_INFINITY),i=q(i,Number.POSITIVE_INFINITY),s=q(s,Number.NEGATIVE_INFINITY),{min:q(t,i),max:q(e,s),minDefined:X(t),maxDefined:X(e)}}getMinMax(t){let e,{min:i,max:s,minDefined:n,maxDefined:o}=this.getUserBounds();if(n&&o)return{min:i,max:s};const a=this.getMatchingVisibleMetas();for(let r=0,l=a.length;r<l;++r)e=a[r].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),o||(s=Math.max(s,e.max));return i=o&&i>s?s:i,s=n&&i>s?i:s,{min:q(i,q(s,i)),max:q(s,q(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){J(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:s,grace:n,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=$e(this,n,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const r=a<this.ticks.length;this._convertTicksToLabels(r?Rs(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||"auto"===o.source)&&(this.ticks=As(this,this.ticks),this._labelSizes=null),r&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){J(this.options.afterUpdate,[this])}beforeSetDimensions(){J(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){J(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),J(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){J(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,s,n;for(i=0,s=t.length;i<s;i++)n=t[i],n.label=J(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){J(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){J(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,s=e.minRotation||0,n=e.maxRotation;let o,a,r,l=s;if(!this._isVisible()||!e.display||s>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=s);const h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=jt(this.chart.width-c,0,this.maxWidth);o=t.offset?this.maxWidth/i:u/(i-1),c+6>o&&(o=u/(i-(t.offset?.5:1)),a=this.maxHeight-Is(t.grid)-e.padding-zs(t.title,this.chart.options.font),r=Math.sqrt(c*c+d*d),l=zt(Math.min(Math.asin(jt((h.highest.height+6)/o,-1,1)),Math.asin(jt(a/r,-1,1))-Math.asin(jt(d/r,-1,1)))),l=Math.max(s,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){J(this.options.afterCalculateLabelRotation,[this])}beforeFit(){J(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:s,grid:n}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const o=zs(s,e.options.font);if(a?(t.width=this.maxWidth,t.height=Is(n)+o):(t.height=this.maxHeight,t.width=Is(n)+o),i.display&&this.ticks.length){const{first:e,last:s,widest:n,highest:o}=this._getLabelSizes(),r=2*i.padding,l=It(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(a){const e=i.mirror?0:c*n.width+h*o.height;t.height=Math.min(this.maxHeight,t.height+e+r)}else{const e=i.mirror?0:h*n.width+c*o.height;t.width=Math.min(this.maxWidth,t.width+e+r)}this._calculatePadding(e,s,c,h)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,s){const{ticks:{align:n,padding:o},position:a}=this.options,r=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){const a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1);let c=0,d=0;r?l?(c=s*t.width,d=i*e.height):(c=i*t.height,d=s*e.width):"start"===n?d=e.width:"end"===n?c=t.width:(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-a+o)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-h+o)*this.width/(this.width-h),0)}else{let i=e.height/2,s=t.height/2;"start"===n?(i=0,s=t.height):"end"===n&&(i=e.height,s=0),this.paddingTop=i+o,this.paddingBottom=s+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){J(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)$(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Rs(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:s}=this,n=[],o=[];let a,r,l,h,c,d,u,f,g,p,m,x=0,b=0;for(a=0;a<e;++a){if(h=t[a].label,c=this._resolveTickFontOptions(a),i.font=d=c.string,u=s[d]=s[d]||{data:{},gc:[]},f=c.lineHeight,g=p=0,$(h)||Y(h)){if(Y(h))for(r=0,l=h.length;r<l;++r)m=h[r],$(m)||Y(m)||(g=Xt(i,u.data,u.gc,g,m),p+=f)}else g=Xt(i,u.data,u.gc,g,h),p=f;n.push(g),o.push(p),x=Math.max(g,x),b=Math.max(p,b)}!function(t,e){Q(t,(t=>{const i=t.gc,s=i.length/2;let n;if(s>e){for(n=0;n<s;++n)delete t.data[i[n]];i.splice(0,s)}}))}(s,e);const _=n.indexOf(x),y=o.indexOf(b),v=t=>({width:n[t]||0,height:o[t]||0});return{first:v(0),last:v(e-1),widest:v(_),highest:v(y),widths:n,heights:o}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return $t(this._alignToPixels?Kt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return Ye(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=Ye(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=It(this.labelRotation),i=Math.abs(Math.cos(e)),s=Math.abs(Math.sin(e)),n=this._getLabelSizes(),o=t.autoSkipPadding||0,a=n?n.widest.width+o:0,r=n?n.highest.height+o:0;return this.isHorizontal()?r*i>a*s?a/i:r/s:r*s<a*i?r/i:a/s}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,s=this.options,{grid:n,position:o}=s,a=n.offset,r=this.isHorizontal(),l=this.ticks.length+(a?1:0),h=Is(n),c=[],d=n.setContext(this.getContext()),u=d.drawBorder?d.borderWidth:0,f=u/2,g=function(t){return Kt(i,t,u)};let p,m,x,b,_,y,v,w,M,k,S,P;if("top"===o)p=g(this.bottom),y=this.bottom-h,w=p-f,k=g(t.top)+f,P=t.bottom;else if("bottom"===o)p=g(this.top),k=t.top,P=g(t.bottom)-f,y=p+f,w=this.top+h;else if("left"===o)p=g(this.right),_=this.right-h,v=p-f,M=g(t.left)+f,S=t.right;else if("right"===o)p=g(this.left),M=t.left,S=g(t.right)-f,_=p+f,v=this.left+h;else if("x"===e){if("center"===o)p=g((t.top+t.bottom)/2+.5);else if(U(o)){const t=Object.keys(o)[0],e=o[t];p=g(this.chart.scales[t].getPixelForValue(e))}k=t.top,P=t.bottom,y=p+f,w=y+h}else if("y"===e){if("center"===o)p=g((t.left+t.right)/2);else if(U(o)){const t=Object.keys(o)[0],e=o[t];p=g(this.chart.scales[t].getPixelForValue(e))}_=p-f,v=_-h,M=t.left,S=t.right}const D=K(s.ticks.maxTicksLimit,l),C=Math.max(1,Math.ceil(l/D));for(m=0;m<l;m+=C){const t=n.setContext(this.getContext(m)),e=t.lineWidth,s=t.color,o=n.borderDash||[],l=t.borderDashOffset,h=t.tickWidth,d=t.tickColor,u=t.tickBorderDash||[],f=t.tickBorderDashOffset;x=Es(this,m,a),void 0!==x&&(b=Kt(i,x,e),r?_=v=M=S=b:y=w=k=P=b,c.push({tx1:_,ty1:y,tx2:v,ty2:w,x1:M,y1:k,x2:S,y2:P,width:e,color:s,borderDash:o,borderDashOffset:l,tickWidth:h,tickColor:d,tickBorderDash:u,tickBorderDashOffset:f}))}return this._ticksLength=l,this._borderValue=p,c}_computeLabelItems(t){const e=this.axis,i=this.options,{position:s,ticks:n}=i,o=this.isHorizontal(),a=this.ticks,{align:r,crossAlign:l,padding:h,mirror:c}=n,d=Is(i.grid),u=d+h,f=c?-h:u,g=-It(this.labelRotation),p=[];let m,x,b,_,y,v,w,M,k,S,P,D,C="middle";if("top"===s)v=this.bottom-f,w=this._getXAxisLabelAlignment();else if("bottom"===s)v=this.top+f,w=this._getXAxisLabelAlignment();else if("left"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,y=t.x}else if("right"===s){const t=this._getYAxisLabelAlignment(d);w=t.textAlign,y=t.x}else if("x"===e){if("center"===s)v=(t.top+t.bottom)/2+u;else if(U(s)){const t=Object.keys(s)[0],e=s[t];v=this.chart.scales[t].getPixelForValue(e)+u}w=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===s)y=(t.left+t.right)/2-u;else if(U(s)){const t=Object.keys(s)[0],e=s[t];y=this.chart.scales[t].getPixelForValue(e)}w=this._getYAxisLabelAlignment(d).textAlign}"y"===e&&("start"===r?C="top":"end"===r&&(C="bottom"));const O=this._getLabelSizes();for(m=0,x=a.length;m<x;++m){b=a[m],_=b.label;const t=n.setContext(this.getContext(m));M=this.getPixelForTick(m)+n.labelOffset,k=this._resolveTickFontOptions(m),S=k.lineHeight,P=Y(_)?_.length:1;const e=P/2,i=t.color,r=t.textStrokeColor,h=t.textStrokeWidth;let d;if(o?(y=M,D="top"===s?"near"===l||0!==g?-P*S+S/2:"center"===l?-O.highest.height/2-e*S+S:-O.highest.height+S/2:"near"===l||0!==g?S/2:"center"===l?O.highest.height/2-e*S:O.highest.height-P*S,c&&(D*=-1)):(v=M,D=(1-P)*S/2),t.showLabelBackdrop){const e=Ne(t.backdropPadding),i=O.heights[m],s=O.widths[m];let n=v+D-e.top,o=y-e.left;switch(C){case"middle":n-=i/2;break;case"bottom":n-=i}switch(w){case"center":o-=s/2;break;case"right":o-=s}d={left:o,top:n,width:s+e.width,height:i+e.height,color:t.backdropColor}}p.push({rotation:g,label:_,font:k,color:i,strokeColor:r,strokeWidth:h,textOffset:D,textAlign:w,textBaseline:C,translation:[y,v],backdrop:d})}return p}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-It(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:s,padding:n}}=this.options,o=t+n,a=this._getLabelSizes().widest.width;let r,l;return"left"===e?s?(l=this.right+n,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l+=a)):(l=this.right-o,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l=this.left)):"right"===e?s?(l=this.left+n,"near"===i?r="right":"center"===i?(r="center",l-=a/2):(r="left",l-=a)):(l=this.left+o,"near"===i?r="left":"center"===i?(r="center",l+=a/2):(r="right",l=this.right)):r="right",{textAlign:r,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:s,width:n,height:o}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,s,n,o),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));if(i>=0){return e.setContext(this.getContext(i)).lineWidth}return 0}drawGrid(t){const e=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,o;const a=(t,e,s)=>{s.width&&s.color&&(i.save(),i.lineWidth=s.width,i.strokeStyle=s.color,i.setLineDash(s.borderDash||[]),i.lineDashOffset=s.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,o=s.length;n<o;++n){const t=s[n];e.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,s=i.setContext(this.getContext()),n=i.drawBorder?s.borderWidth:0;if(!n)return;const o=i.setContext(this.getContext(0)).lineWidth,a=this._borderValue;let r,l,h,c;this.isHorizontal()?(r=Kt(t,this.left,n)-n/2,l=Kt(t,this.right,o)+o/2,h=c=a):(h=Kt(t,this.top,n)-n/2,c=Kt(t,this.bottom,o)+o/2,r=l=a),e.save(),e.lineWidth=s.borderWidth,e.strokeStyle=s.borderColor,e.beginPath(),e.moveTo(r,h),e.lineTo(l,c),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Qt(e,i);const s=this._labelItems||(this._labelItems=this._computeLabelItems(t));let n,o;for(n=0,o=s.length;n<o;++n){const t=s[n],i=t.font,o=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),se(e,o,0,t.textOffset,i,t)}i&&te(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:s}}=this;if(!i.display)return;const o=He(i.font),a=Ne(i.padding),r=i.align;let l=o.lineHeight/2;"bottom"===e||"center"===e||U(e)?(l+=a.bottom,Y(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:h,titleY:c,maxWidth:d,rotation:u}=function(t,e,i,s){const{top:o,left:a,bottom:r,right:l,chart:h}=t,{chartArea:c,scales:d}=h;let u,f,g,p=0;const m=r-o,x=l-a;if(t.isHorizontal()){if(f=n(s,a,l),U(i)){const t=Object.keys(i)[0],s=i[t];g=d[t].getPixelForValue(s)+m-e}else g="center"===i?(c.bottom+c.top)/2+m-e:Ls(t,i,e);u=l-a}else{if(U(i)){const t=Object.keys(i)[0],s=i[t];f=d[t].getPixelForValue(s)-x+e}else f="center"===i?(c.left+c.right)/2-x+e:Ls(t,i,e);g=n(s,r,o),p="left"===i?-kt:kt}return{titleX:f,titleY:g,maxWidth:u,rotation:p}}(this,l,e,r);se(t,i.text,0,0,o,{color:i.color,maxWidth:d,rotation:u,textAlign:Fs(r,e,s),textBaseline:"middle",translation:[h,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=K(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===Bs.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];o[i]!==this.id||t&&o.type!==t||s.push(o)}return s}_resolveTickFontOptions(t){return He(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Vs{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const s=this.items,n=t.id,o=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in s||(s[n]=t,function(t,e,i){const s=nt(Object.create(null),[i?bt.get(i):{},bt.get(e),t.defaults]);bt.set(e,s),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const s=i.split("."),n=s.pop(),o=[t].concat(s).join("."),a=e[i].split("."),r=a.pop(),l=a.join(".");bt.route(o,n,l,r)}))}(e,t.defaultRoutes);t.descriptors&&bt.describe(e,t.descriptors)}(t,o,i),this.override&&bt.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,s=this.scope;i in e&&delete e[i],s&&i in bt[s]&&(delete bt[s][i],this.override&&delete gt[i])}}var Ws=new class{constructor(){this.controllers=new Vs(Ps,"datasets",!0),this.elements=new Vs(Ds,"elements"),this.plugins=new Vs(Object,"plugins"),this.scales=new Vs(Bs,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const s=i||this._getRegistryForType(e);i||s.isForType(e)||s===this.plugins&&e.id?this._exec(t,s,e):Q(e,(e=>{const s=i||this._getRegistryForType(e);this._exec(t,s,e)}))}))}_exec(t,e,i){const s=ht(t);J(i["before"+s],[],i),e[t](i),J(i["after"+s],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const s=e.get(t);if(void 0===s)throw new Error('"'+t+'" is not a registered '+i+".");return s}};class Ns{constructor(){this._init=[]}notify(t,e,i,s){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const n=s?this._descriptors(t).filter(s):this._descriptors(t),o=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),o}_notify(t,e,i,s){s=s||{};for(const n of t){const t=n.plugin;if(!1===J(t[i],[e,s,n.options],t)&&s.cancelable)return!1}return!0}invalidate(){$(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,s=K(i.options&&i.options.plugins,{}),n=function(t){const e=[],i=Object.keys(Ws.plugins.items);for(let t=0;t<i.length;t++)e.push(Ws.getPlugin(i[t]));const s=t.plugins||[];for(let t=0;t<s.length;t++){const i=s[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==s||e?function(t,e,i,s){const n=[],o=t.getContext();for(let a=0;a<e.length;a++){const r=e[a],l=Hs(i[r.id],s);null!==l&&n.push({plugin:r,options:js(t.config,r,l,o)})}return n}(t,n,s,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,s=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(s(e,i),t,"stop"),this._notify(s(i,e),t,"start")}}function Hs(t,e){return e||!1!==t?!0===t?{}:t:null}function js(t,e,i,s){const n=t.pluginScopeKeys(e),o=t.getOptionScopes(i,n);return t.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $s(t,e){const i=bt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Ys(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Us(t){const e=t.options||(t.options={});e.plugins=K(e.plugins,{}),e.scales=function(t,e){const i=gt[t.type]||{scales:{}},s=e.scales||{},n=$s(t.type,e),o=Object.create(null),a=Object.create(null);return Object.keys(s).forEach((t=>{const e=s[t];if(!U(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const r=Ys(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(r,n),h=i.scales||{};o[r]=o[r]||t,a[t]=ot(Object.create(null),[{axis:r},e,h[r],h[l]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,r=i.indexAxis||$s(n,e),l=(gt[n]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,r),n=i[e+"AxisID"]||o[e]||e;a[n]=a[n]||Object.create(null),ot(a[n],[{axis:e},s[n],l[t]])}))})),Object.keys(a).forEach((t=>{const e=a[t];ot(e,[bt.scales[e.type],bt.scale])})),a}(t,e)}function Xs(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const qs=new Map,Ks=new Set;function Gs(t,e){let i=qs.get(t);return i||(i=e(),qs.set(t,i),Ks.add(i)),i}const Zs=(t,e,i)=>{const s=lt(e,i);void 0!==s&&t.add(s)};class Js{constructor(t){this._config=function(t){return(t=t||{}).data=Xs(t.data),Us(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Xs(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Us(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Gs(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Gs(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Gs(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Gs(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let s=i.get(t);return s&&!e||(s=new Map,i.set(t,s)),s}getOptionScopes(t,e,i){const{options:s,type:n}=this,o=this._cachedScopes(t,i),a=o.get(e);if(a)return a;const r=new Set;e.forEach((e=>{t&&(r.add(t),e.forEach((e=>Zs(r,t,e)))),e.forEach((t=>Zs(r,s,t))),e.forEach((t=>Zs(r,gt[n]||{},t))),e.forEach((t=>Zs(r,bt,t))),e.forEach((t=>Zs(r,pt,t)))}));const l=Array.from(r);return 0===l.length&&l.push(Object.create(null)),Ks.has(e)&&o.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,gt[e]||{},bt.datasets[e]||{},{type:e},bt,pt]}resolveNamedOptions(t,e,i,s=[""]){const n={$shared:!0},{resolver:o,subPrefixes:a}=Qs(this._resolverCache,t,s);let r=o;if(function(t,e){const{isScriptable:i,isIndexable:s}=ri(t);for(const n of e){const e=i(n),o=s(n),a=(o||e)&&t[n];if(e&&(dt(a)||tn(a))||o&&Y(a))return!0}return!1}(o,e)){n.$shared=!1;r=ai(o,i=dt(i)?i():i,this.createResolver(t,i,a))}for(const t of e)n[t]=r[t];return n}createResolver(t,e,i=[""],s){const{resolver:n}=Qs(this._resolverCache,t,i);return U(e)?ai(n,e,void 0,s):n}}function Qs(t,e,i){let s=t.get(e);s||(s=new Map,t.set(e,s));const n=i.join();let o=s.get(n);if(!o){o={resolver:oi(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},s.set(n,o)}return o}const tn=t=>U(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||dt(t[i])),!1);const en=["top","bottom","left","right","chartArea"];function sn(t,e){return"top"===t||"bottom"===t||-1===en.indexOf(t)&&"x"===e}function nn(t,e){return function(i,s){return i[t]===s[t]?i[e]-s[e]:i[t]-s[t]}}function on(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),J(i&&i.onComplete,[t],e)}function an(t){const e=t.chart,i=e.options.animation;J(i&&i.onProgress,[t],e)}function rn(t){return ge()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const ln={},hn=t=>{const e=rn(t);return Object.values(ln).filter((t=>t.canvas===e)).pop()};function cn(t,e,i){const s=Object.keys(t);for(const n of s){const s=+n;if(s>=e){const o=t[n];delete t[n],(i>0||s>e)&&(t[s+i]=o)}}}class dn{constructor(t,e){const s=this.config=new Js(e),n=rn(t),o=hn(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||ls(n)),this.platform.updateConfig(s);const l=this.platform.acquireContext(n,r.aspectRatio),h=l&&l.canvas,c=h&&h.height,d=h&&h.width;this.id=j(),this.ctx=l,this.canvas=h,this.width=d,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Ns,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=i((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],ln[this.id]=this,l&&h?(a.listen(this,"complete",on),a.listen(this,"progress",an),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:s,_aspectRatio:n}=this;return $(t)?e&&n?n:s?i/s:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ke(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Gt(this.canvas,this.ctx),this}stop(){return a.stop(this),this}resize(t,e){a.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,o=this.platform.getMaximumSize(s,t,e,n),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),r=this.width?"resize":"attach";this.width=o.width,this.height=o.height,this._aspectRatio=this.aspectRatio,ke(this,a,!0)&&(this.notifyPlugins("resize",{size:o}),J(i.onResize,[this,o],this),this.attached&&this._doResize(r)&&this.render())}ensureScalesHaveIDs(){Q(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,s=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],s=Ys(t,i),n="r"===s,o="x"===s;return{options:i,dposition:n?"chartArea":o?"bottom":"left",dtype:n?"radialLinear":o?"category":"linear"}})))),Q(n,(e=>{const n=e.options,o=n.id,a=Ys(o,n),r=K(n.type,e.dtype);void 0!==n.position&&sn(n.position,a)===sn(e.dposition)||(n.position=e.dposition),s[o]=!0;let l=null;if(o in i&&i[o].type===r)l=i[o];else{l=new(Ws.getScale(r))({id:o,type:r,ctx:this.ctx,chart:this}),i[l.id]=l}l.init(n,t)})),Q(s,((t,e)=>{t||delete i[e]})),Q(i,(t=>{ni.configure(this,t,t.options),ni.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(nn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=e.length;i<s;i++){const s=e[i];let n=this.getDatasetMeta(i);const o=s.type||this.config.type;if(n.type&&n.type!==o&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=o,n.indexAxis=s.indexAxis||$s(o,this.options),n.order=s.order||0,n.index=i,n.label=""+s.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=Ws.getController(o),{datasetElementType:s,dataElementType:a}=bt.datasets[o];Object.assign(e.prototype,{dataElementType:Ws.getElement(a),datasetElementType:s&&Ws.getElement(s)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){Q(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let o=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!s&&-1===n.indexOf(e);e.buildOrUpdateElements(i),o=Math.max(+e.getMaxOverflow(),o)}o=this._minPadding=i.layout.autoPadding?o:0,this._updateLayout(o),s||Q(n,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(nn("z","_idx"));const{_active:a,_lastEvent:r}=this;r?this._eventHandler(r,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){Q(this.scales,(t=>{ni.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);ut(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:n}of e){cn(t,s,"_removeElements"===i?-n:n)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),s=i(0);for(let t=1;t<e;t++)if(!ut(s,i(t)))return;return Array.from(s).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;ni.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],Q(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,dt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),s={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",s)&&(i.controller._update(e),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(a.has(this)?this.attached&&!a.running(this)&&a.start(this):(this.draw(),on({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let s,n;for(s=0,n=e.length;s<n;++s){const n=e[s];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,s=!i.disabled,n=this.chartArea,o={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",o)&&(s&&Qt(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),s&&te(e),o.cancelable=!1,this.notifyPlugins("afterDatasetDraw",o))}getElementsAtEventForMode(t,e,i,s){const n=Ee.modes[e];return"function"==typeof n?n(this,t,i,s):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let s=i.filter((t=>t&&t._dataset===e)).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Ye(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const s=i?"show":"hide",n=this.getDatasetMeta(t),o=n.controller._resolveAnimations(void 0,s);ct(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),o.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?s:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),a.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Gt(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete ln[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};Q(this.options.events,(t=>i(t,s)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,s)=>{e.addEventListener(this,i,s),t[i]=s},s=(i,s)=>{t[i]&&(e.removeEventListener(this,i,s),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let o;const a=()=>{s("attach",a),this.attached=!0,this.resize(),i("resize",n),i("detach",o)};o=()=>{this.attached=!1,s("resize",n),this._stop(),this._resize(0,0),i("attach",a)},e.isAttached(this.canvas)?a():o()}unbindEvents(){Q(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},Q(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const s=i?"set":"remove";let n,o,a,r;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),a=0,r=t.length;a<r;++a){o=t[a];const e=o&&this.getDatasetMeta(o.datasetIndex).controller;e&&e[s+"HoverStyle"](o.element,o.datasetIndex,o.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!tt(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const s=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),o=n(e,t),a=i?t:n(t,e);o.length&&this.updateHoverStyle(o,s.mode,!1),a.length&&s.mode&&this.updateHoverStyle(a,s.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:Jt(t,this.chartArea,this._minPadding)},s=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,s))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:s=[],options:n}=this,o=e,a=this._getActiveElements(t,s,i,o),r=ft(t),l=function(t,e,i,s){return i&&"mouseout"!==t.type?s?e:t:null}(t,this._lastEvent,i,r);i&&(this._lastEvent=null,J(n.onHover,[t,a,this],this),r&&J(n.onClick,[t,a,this],this));const h=!tt(a,s);return(h||e)&&(this._active=a,this._updateHoverStyles(a,s,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,s){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,s)}}const un=()=>Q(dn.instances,(t=>t._plugins.invalidate())),fn=!0;function gn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}Object.defineProperties(dn,{defaults:{enumerable:fn,value:bt},instances:{enumerable:fn,value:ln},overrides:{enumerable:fn,value:gt},registry:{enumerable:fn,value:Ws},version:{enumerable:fn,value:"3.7.1"},getChart:{enumerable:fn,value:hn},register:{enumerable:fn,value:(...t)=>{Ws.add(...t),un()}},unregister:{enumerable:fn,value:(...t)=>{Ws.remove(...t),un()}}});class pn{constructor(t){this.options=t||{}}formats(){return gn()}parse(t,e){return gn()}format(t,e){return gn()}add(t,e,i){return gn()}diff(t,e,i){return gn()}startOf(t,e,i){return gn()}endOf(t,e){return gn()}}pn.override=function(t){Object.assign(pn.prototype,t)};var mn={_date:pn};function xn(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let s=[];for(let e=0,n=i.length;e<n;e++)s=s.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=fe(s.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let s,n,o,a,r=e._length;const l=()=>{32767!==o&&-32768!==o&&(ct(a)&&(r=Math.min(r,Math.abs(o-a)||r)),a=o)};for(s=0,n=i.length;s<n;++s)o=e.getPixelForValue(i[s]),l();for(a=void 0,s=0,n=e.ticks.length;s<n;++s)o=e.getPixelForTick(s),l();return r}function bn(t,e,i,s){return Y(t)?function(t,e,i,s){const n=i.parse(t[0],s),o=i.parse(t[1],s),a=Math.min(n,o),r=Math.max(n,o);let l=a,h=r;Math.abs(a)>Math.abs(r)&&(l=r,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:n,end:o,min:a,max:r}}(t,e,i,s):e[i.axis]=i.parse(t,s),e}function _n(t,e,i,s){const n=t.iScale,o=t.vScale,a=n.getLabels(),r=n===o,l=[];let h,c,d,u;for(h=i,c=i+s;h<c;++h)u=e[h],d={},d[n.axis]=r||n.parse(a[h],h),l.push(bn(u,d,o,h));return l}function yn(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function vn(t,e,i,s){let n=e.borderSkipped;const o={};if(!n)return void(t.borderSkipped=o);const{start:a,end:r,reverse:l,top:h,bottom:c}=function(t){let e,i,s,n,o;return t.horizontal?(e=t.base>t.x,i="left",s="right"):(e=t.base<t.y,i="bottom",s="top"),e?(n="end",o="start"):(n="start",o="end"),{start:i,end:s,reverse:e,top:n,bottom:o}}(t);"middle"===n&&i&&(t.enableBorderRadius=!0,(i._top||0)===s?n=h:(i._bottom||0)===s?n=c:(o[wn(c,a,r,l)]=!0,n=h)),o[wn(n,a,r,l)]=!0,t.borderSkipped=o}function wn(t,e,i,s){var n,o,a;return s?(a=i,t=Mn(t=(n=t)===(o=e)?a:n===a?o:n,i,e)):t=Mn(t,e,i),t}function Mn(t,e,i){return"start"===t?e:"end"===t?i:t}function kn(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}class Sn extends Ps{parsePrimitiveData(t,e,i,s){return _n(t,e,i,s)}parseArrayData(t,e,i,s){return _n(t,e,i,s)}parseObjectData(t,e,i,s){const{iScale:n,vScale:o}=t,{xAxisKey:a="x",yAxisKey:r="y"}=this._parsing,l="x"===n.axis?a:r,h="x"===o.axis?a:r,c=[];let d,u,f,g;for(d=i,u=i+s;d<u;++d)g=e[d],f={},f[n.axis]=n.parse(lt(g,l),d),c.push(bn(lt(g,h),f,o,d));return c}updateRangeFromParsed(t,e,i,s){super.updateRangeFromParsed(t,e,i,s);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:s}=e,n=this.getParsed(t),o=n._custom,a=yn(o)?"["+o.start+", "+o.end+"]":""+s.getLabelForValue(n[s.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,s){const n="reset"===s,{index:o,_cachedMeta:{vScale:a}}=this,r=a.getBasePixel(),l=a.isHorizontal(),h=this._getRuler(),c=this.resolveDataElementOptions(e,s),d=this.getSharedOptions(c),u=this.includeOptions(s,d);this.updateSharedOptions(d,s,c);for(let c=e;c<e+i;c++){const e=this.getParsed(c),i=n||$(e[a.axis])?{base:r,head:r}:this._calculateBarValuePixels(c),f=this._calculateBarIndexPixels(c,h),g=(e._stacks||{})[a.axis],p={horizontal:l,base:i.base,enableBorderRadius:!g||yn(e._custom)||o===g._top||o===g._bottom,x:l?i.head:f.center,y:l?f.center:i.head,height:l?f.size:Math.abs(i.size),width:l?Math.abs(i.size):f.size};u&&(p.options=d||this.resolveDataElementOptions(c,t[c].active?"active":s));const m=p.options||t[c].options;vn(p,m,g,o),kn(p,m,h.ratio),this.updateElement(t[c],c,p,s)}}_getStacks(t,e){const i=this._cachedMeta.iScale,s=i.getMatchingVisibleMetas(this._type),n=i.options.stacked,o=s.length,a=[];let r,l;for(r=0;r<o;++r)if(l=s[r],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if($(t)||isNaN(t))continue}if((!1===n||-1===a.indexOf(l.stack)||void 0===n&&void 0===l.stack)&&a.push(l.stack),l.index===t)break}return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const s=this._getStacks(t,i),n=void 0!==e?s.indexOf(e):-1;return-1===n?s.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,s=[];let n,o;for(n=0,o=e.data.length;n<o;++n)s.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const a=t.barThickness;return{min:a||xn(e),pixels:s,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:s,minBarLength:n}}=this,o=s||0,a=this.getParsed(t),r=a._custom,l=yn(r);let h,c,d=a[e.axis],u=0,f=i?this.applyStack(e,a,i):d;f!==d&&(u=f-d,f=d),l&&(d=r.barStart,f=r.barEnd-r.barStart,0!==d&&Ct(d)!==Ct(r.barEnd)&&(u=0),u+=d);const g=$(s)||l?u:s;let p=e.getPixelForValue(g);if(h=this.chart.getDataVisibility(t)?e.getPixelForValue(u+f):p,c=h-p,Math.abs(c)<n&&(c=function(t,e,i){return 0!==t?Ct(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(c,e,o)*n,d===o&&(p-=c/2),h=p+c),p===e.getPixelForValue(o)){const t=Ct(c)*e.getLineWidthForValue(o)/2;p+=t,c-=t}return{size:c,base:p,head:h,center:h+c/2}}_calculateBarIndexPixels(t,e){const i=e.scale,s=this.options,n=s.skipNull,o=K(s.maxBarThickness,1/0);let a,r;if(e.grouped){const i=n?this._getStackCount(t):e.stackCount,l="flex"===s.barThickness?function(t,e,i,s){const n=e.pixels,o=n[t];let a=t>0?n[t-1]:null,r=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===a&&(a=o-(null===r?e.end-e.start:r-o)),null===r&&(r=o+o-a);const h=o-(o-Math.min(a,r))/2*l;return{chunk:Math.abs(r-a)/2*l/s,ratio:i.barPercentage,start:h}}(t,e,s,i):function(t,e,i,s){const n=i.barThickness;let o,a;return $(n)?(o=e.min*i.categoryPercentage,a=i.barPercentage):(o=n*s,a=1),{chunk:o/s,ratio:a,start:e.pixels[t]-o/2}}(t,e,s,i),h=this._getStackIndex(this.index,this._cachedMeta.stack,n?t:void 0);a=l.start+l.chunk*h+l.chunk/2,r=Math.min(o,l.chunk*l.ratio)}else a=i.getPixelForValue(this.getParsed(t)[i.axis],t),r=Math.min(o,e.min*e.ratio);return{base:a-r/2,head:a+r/2,center:a,size:r}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,s=i.length;let n=0;for(;n<s;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}}Sn.id="bar",Sn.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Sn.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Pn extends Ps{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,s){const n=super.parsePrimitiveData(t,e,i,s);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,s){const n=super.parseArrayData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=K(s[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,s){const n=super.parseObjectData(t,e,i,s);for(let t=0;t<n.length;t++){const s=e[i+t];n[t]._custom=K(s&&s.r&&+s.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:s}=e,n=this.getParsed(t),o=i.getLabelForValue(n.x),a=s.getLabelForValue(n.y),r=n._custom;return{label:e.label,value:"("+o+", "+a+(r?", "+r:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,s){const n="reset"===s,{iScale:o,vScale:a}=this._cachedMeta,r=this.resolveDataElementOptions(e,s),l=this.getSharedOptions(r),h=this.includeOptions(s,l),c=o.axis,d=a.axis;for(let r=e;r<e+i;r++){const e=t[r],i=!n&&this.getParsed(r),l={},u=l[c]=n?o.getPixelForDecimal(.5):o.getPixelForValue(i[c]),f=l[d]=n?a.getBasePixel():a.getPixelForValue(i[d]);l.skip=isNaN(u)||isNaN(f),h&&(l.options=this.resolveDataElementOptions(r,e.active?"active":s),n&&(l.options.radius=0)),this.updateElement(e,r,l,s)}this.updateSharedOptions(l,s,r)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let s=super.resolveDataElementOptions(t,e);s.$shared&&(s=Object.assign({},s,{$shared:!1}));const n=s.radius;return"active"!==e&&(s.radius=0),s.radius+=K(i&&i._custom,n),s}}Pn.id="bubble",Pn.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Pn.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Dn extends Ps{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,s=this._cachedMeta;if(!1===this._parsing)s._parsed=i;else{let n,o,a=t=>+i[t];if(U(i[t])){const{key:t="value"}=this._parsing;a=e=>+lt(i[e],t)}for(n=t,o=t+e;n<o;++n)s._parsed[n]=a(n)}}_getRotation(){return It(this.options.rotation-90)}_getCircumference(){return It(this.options.circumference)}_getRotationExtents(){let t=yt,e=-yt;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const s=this.chart.getDatasetMeta(i).controller,n=s._getRotation(),o=s._getCircumference();t=Math.min(t,n),e=Math.max(e,n+o)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,s=this._cachedMeta,n=s.data,o=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-o)/2,0),r=Math.min(G(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:h,rotation:c}=this._getRotationExtents(),{ratioX:d,ratioY:u,offsetX:f,offsetY:g}=function(t,e,i){let s=1,n=1,o=0,a=0;if(e<yt){const r=t,l=r+e,h=Math.cos(r),c=Math.sin(r),d=Math.cos(l),u=Math.sin(l),f=(t,e,s)=>Ht(t,r,l,!0)?1:Math.max(e,e*i,s,s*i),g=(t,e,s)=>Ht(t,r,l,!0)?-1:Math.min(e,e*i,s,s*i),p=f(0,h,d),m=f(kt,c,u),x=g(_t,h,d),b=g(_t+kt,c,u);s=(p-x)/2,n=(m-b)/2,o=-(p+x)/2,a=-(m+b)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:a}}(c,h,r),p=(i.width-o)/d,m=(i.height-o)/u,x=Math.max(Math.min(p,m)/2,0),b=Z(this.options.radius,x),_=(b-Math.max(b*r,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*b,this.offsetY=g*b,s.total=this.calculateTotal(),this.outerRadius=b-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*l,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,s=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===s._parsed[t]||s.data[t].hidden?0:this.calculateCircumference(s._parsed[t]*n/yt)}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=o.chartArea,r=o.options.animation,l=(a.left+a.right)/2,h=(a.top+a.bottom)/2,c=n&&r.animateScale,d=c?0:this.innerRadius,u=c?0:this.outerRadius,f=this.resolveDataElementOptions(e,s),g=this.getSharedOptions(f),p=this.includeOptions(s,g);let m,x=this._getRotation();for(m=0;m<e;++m)x+=this._circumference(m,n);for(m=e;m<e+i;++m){const e=this._circumference(m,n),i=t[m],o={x:l+this.offsetX,y:h+this.offsetY,startAngle:x,endAngle:x+e,circumference:e,outerRadius:u,innerRadius:d};p&&(o.options=g||this.resolveDataElementOptions(m,i.active?"active":s)),x+=e,this.updateElement(i,m,o,s)}this.updateSharedOptions(g,s,f)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,s=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(s+=Math.abs(n))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?yt*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=Ri(e._parsed[t],i.options.locale);return{label:s[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let s,n,o,a,r;if(!t)for(s=0,n=i.data.datasets.length;s<n;++s)if(i.isDatasetVisible(s)){o=i.getDatasetMeta(s),t=o.data,a=o.controller;break}if(!t)return 0;for(s=0,n=t.length;s<n;++s)r=a.resolveDataElementOptions(s),"inner"!==r.borderAlign&&(e=Math.max(e,r.borderWidth||0,r.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,s=t.length;i<s;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(K(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Dn.id="doughnut",Dn.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Dn.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Dn.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>{const n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return Y(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class Cn extends Ps{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:s=[],_dataset:n}=e,o=this.chart._animationsDisabled;let{start:a,count:r}=function(t,e,i){const s=e.length;let n=0,o=s;if(t._sorted){const{iScale:a,_parsed:r}=t,l=a.axis,{min:h,max:c,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(n=jt(Math.min(re(r,a.axis,h).lo,i?s:re(e,l,a.getPixelForValue(h)).lo),0,s-1)),o=u?jt(Math.max(re(r,a.axis,c).hi+1,i?0:re(e,l,a.getPixelForValue(c)).hi+1),n,s)-n:s-n}return{start:n,count:o}}(e,s,o);this._drawStart=a,this._drawCount=r,function(t){const{xScale:e,yScale:i,_scaleRanges:s}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!s)return t._scaleRanges=n,!0;const o=s.xmin!==e.min||s.xmax!==e.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),o}(e)&&(a=0,r=s.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=s;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!o,options:l},t),this.updateElements(s,a,r,t)}updateElements(t,e,i,s){const n="reset"===s,{iScale:o,vScale:a,_stacked:r,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,s),c=this.getSharedOptions(h),d=this.includeOptions(s,c),u=o.axis,f=a.axis,{spanGaps:g,segment:p}=this.options,m=Tt(g)?g:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||n||"none"===s;let b=e>0&&this.getParsed(e-1);for(let h=e;h<e+i;++h){const e=t[h],i=this.getParsed(h),g=x?e:{},_=$(i[f]),y=g[u]=o.getPixelForValue(i[u],h),v=g[f]=n||_?a.getBasePixel():a.getPixelForValue(r?this.applyStack(a,i,r):i[f],h);g.skip=isNaN(y)||isNaN(v)||_,g.stop=h>0&&i[u]-b[u]>m,p&&(g.parsed=i,g.raw=l.data[h]),d&&(g.options=c||this.resolveDataElementOptions(h,e.active?"active":s)),x||this.updateElement(e,h,g,s),b=i}this.updateSharedOptions(c,s,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,s=t.data||[];if(!s.length)return i;const n=s[0].size(this.resolveDataElementOptions(0)),o=s[s.length-1].size(this.resolveDataElementOptions(s.length-1));return Math.max(i,n,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Cn.id="line",Cn.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Cn.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class On extends Ps{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,s=i.data.labels||[],n=Ri(e._parsed[t].r,i.options.locale);return{label:s[t]||"",value:n}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,s=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(s/2,0),o=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-o*this.index,this.innerRadius=this.outerRadius-o}updateElements(t,e,i,s){const n="reset"===s,o=this.chart,a=this.getDataset(),r=o.options.animation,l=this._cachedMeta.rScale,h=l.xCenter,c=l.yCenter,d=l.getIndexAngle(0)-.5*_t;let u,f=d;const g=360/this.countVisibleElements();for(u=0;u<e;++u)f+=this._computeAngle(u,s,g);for(u=e;u<e+i;u++){const e=t[u];let i=f,p=f+this._computeAngle(u,s,g),m=o.getDataVisibility(u)?l.getDistanceFromCenterForValue(a.data[u]):0;f=p,n&&(r.animateScale&&(m=0),r.animateRotate&&(i=p=d));const x={x:h,y:c,innerRadius:0,outerRadius:m,startAngle:i,endAngle:p,options:this.resolveDataElementOptions(u,e.active?"active":s)};this.updateElement(e,u,x,s)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,s)=>{!isNaN(t.data[s])&&this.chart.getDataVisibility(s)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?It(this.resolveDataElementOptions(t,e).angle||i):0}}On.id="polarArea",On.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},On.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,s)=>{const n=t.getDatasetMeta(0).controller.getStyle(s);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(s),index:s}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class An extends Dn{}An.id="pie",An.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Tn extends Ps{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,s=e.data||[],n=e.iScale.getLabels();if(i.points=s,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const o={_loop:!0,_fullLoop:n.length===s.length,options:e};this.updateElement(i,void 0,o,t)}this.updateElements(s,0,s.length,t)}updateElements(t,e,i,s){const n=this.getDataset(),o=this._cachedMeta.rScale,a="reset"===s;for(let r=e;r<e+i;r++){const e=t[r],i=this.resolveDataElementOptions(r,e.active?"active":s),l=o.getPointPositionForValue(r,n.data[r]),h=a?o.xCenter:l.x,c=a?o.yCenter:l.y,d={x:h,y:c,angle:l.angle,skip:isNaN(h)||isNaN(c),options:i};this.updateElement(e,r,d,s)}}}Tn.id="radar",Tn.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Tn.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Ln extends Cn{}Ln.id="scatter",Ln.defaults={showLine:!1,fill:!1},Ln.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Rn=Object.freeze({__proto__:null,BarController:Sn,BubbleController:Pn,DoughnutController:Dn,LineController:Cn,PolarAreaController:On,PieController:An,RadarController:Tn,ScatterController:Ln});function En(t,e,i){const{startAngle:s,pixelMargin:n,x:o,y:a,outerRadius:r,innerRadius:l}=e;let h=n/r;t.beginPath(),t.arc(o,a,r,s-h,i+h),l>n?(h=n/l,t.arc(o,a,l,i+h,s-h,!0)):t.arc(o,a,n,i+kt,s-kt),t.closePath(),t.clip()}function In(t,e,i,s){const n=Be(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]);const o=(i-e)/2,a=Math.min(o,s*e/2),r=t=>{const e=(i-Math.min(o,t))*s/2;return jt(t,0,Math.min(o,e))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:jt(n.innerStart,0,a),innerEnd:jt(n.innerEnd,0,a)}}function zn(t,e,i,s){return{x:i+t*Math.cos(e),y:s+t*Math.sin(e)}}function Fn(t,e,i,s,n){const{x:o,y:a,startAngle:r,pixelMargin:l,innerRadius:h}=e,c=Math.max(e.outerRadius+s+i-l,0),d=h>0?h+s+i+l:0;let u=0;const f=n-r;if(s){const t=((h>0?h-s:0)+(c>0?c-s:0))/2;u=(f-(0!==t?f*t/(t+s):f))/2}const g=(f-Math.max(.001,f*c-i/_t)/c)/2,p=r+g+u,m=n-g-u,{outerStart:x,outerEnd:b,innerStart:_,innerEnd:y}=In(e,d,c,m-p),v=c-x,w=c-b,M=p+x/v,k=m-b/w,S=d+_,P=d+y,D=p+_/S,C=m-y/P;if(t.beginPath(),t.arc(o,a,c,M,k),b>0){const e=zn(w,k,o,a);t.arc(e.x,e.y,b,k,m+kt)}const O=zn(P,m,o,a);if(t.lineTo(O.x,O.y),y>0){const e=zn(P,C,o,a);t.arc(e.x,e.y,y,m+kt,C+Math.PI)}if(t.arc(o,a,d,m-y/d,p+_/d,!0),_>0){const e=zn(S,D,o,a);t.arc(e.x,e.y,_,D+Math.PI,p-kt)}const A=zn(v,p,o,a);if(t.lineTo(A.x,A.y),x>0){const e=zn(v,M,o,a);t.arc(e.x,e.y,x,p-kt,M)}t.closePath()}function Bn(t,e,i,s,n){const{options:o}=e,{borderWidth:a,borderJoinStyle:r}=o,l="inner"===o.borderAlign;a&&(l?(t.lineWidth=2*a,t.lineJoin=r||"round"):(t.lineWidth=a,t.lineJoin=r||"bevel"),e.fullCircles&&function(t,e,i){const{x:s,y:n,startAngle:o,pixelMargin:a,fullCircles:r}=e,l=Math.max(e.outerRadius-a,0),h=e.innerRadius+a;let c;for(i&&En(t,e,o+yt),t.beginPath(),t.arc(s,n,h,o+yt,o,!0),c=0;c<r;++c)t.stroke();for(t.beginPath(),t.arc(s,n,l,o,o+yt),c=0;c<r;++c)t.stroke()}(t,e,l),l&&En(t,e,n),Fn(t,e,i,s,n),t.stroke())}class Vn extends Ds{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.getProps(["x","y"],i),{angle:n,distance:o}=Bt(s,{x:t,y:e}),{startAngle:a,endAngle:r,innerRadius:l,outerRadius:h,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=this.options.spacing/2,u=K(c,r-a)>=yt||Ht(n,a,r),f=Yt(o,l+d,h+d);return u&&f}getCenterPoint(t){const{x:e,y:i,startAngle:s,endAngle:n,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:r,spacing:l}=this.options,h=(s+n)/2,c=(o+a+l+r)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,s=(e.offset||0)/2,n=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>yt?Math.floor(i/yt):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(s){o=s/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*o,Math.sin(e)*o),this.circumference>=_t&&(o=s)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const a=function(t,e,i,s){const{fullCircles:n,startAngle:o,circumference:a}=e;let r=e.endAngle;if(n){Fn(t,e,i,s,o+yt);for(let e=0;e<n;++e)t.fill();isNaN(a)||(r=o+a%yt,a%yt==0&&(r+=yt))}return Fn(t,e,i,s,r),t.fill(),r}(t,this,o,n);Bn(t,this,o,n,a),t.restore()}}function Wn(t,e,i=e){t.lineCap=K(i.borderCapStyle,e.borderCapStyle),t.setLineDash(K(i.borderDash,e.borderDash)),t.lineDashOffset=K(i.borderDashOffset,e.borderDashOffset),t.lineJoin=K(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=K(i.borderWidth,e.borderWidth),t.strokeStyle=K(i.borderColor,e.borderColor)}function Nn(t,e,i){t.lineTo(i.x,i.y)}function Hn(t,e,i={}){const s=t.length,{start:n=0,end:o=s-1}=i,{start:a,end:r}=e,l=Math.max(n,a),h=Math.min(o,r),c=n<a&&o<a||n>r&&o>r;return{count:s,start:l,loop:e.loop,ilen:h<l&&!c?s+h-l:h-l}}function jn(t,e,i,s){const{points:n,options:o}=e,{count:a,start:r,loop:l,ilen:h}=Hn(n,i,s),c=function(t){return t.stepped?ee:t.tension||"monotone"===t.cubicInterpolationMode?ie:Nn}(o);let d,u,f,{move:g=!0,reverse:p}=s||{};for(d=0;d<=h;++d)u=n[(r+(p?h-d:d))%a],u.skip||(g?(t.moveTo(u.x,u.y),g=!1):c(t,f,u,p,o.stepped),f=u);return l&&(u=n[(r+(p?h:0))%a],c(t,f,u,p,o.stepped)),!!l}function $n(t,e,i,s){const n=e.points,{count:o,start:a,ilen:r}=Hn(n,i,s),{move:l=!0,reverse:h}=s||{};let c,d,u,f,g,p,m=0,x=0;const b=t=>(a+(h?r-t:t))%o,_=()=>{f!==g&&(t.lineTo(m,g),t.lineTo(m,f),t.lineTo(m,p))};for(l&&(d=n[b(0)],t.moveTo(d.x,d.y)),c=0;c<=r;++c){if(d=n[b(c)],d.skip)continue;const e=d.x,i=d.y,s=0|e;s===u?(i<f?f=i:i>g&&(g=i),m=(x*m+e)/++x):(_(),t.lineTo(e,i),u=s,x=0,f=g=i),p=i}_()}function Yn(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return!(t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i)?$n:jn}Vn.id="arc",Vn.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Vn.defaultRoutes={backgroundColor:"backgroundColor"};const Un="function"==typeof Path2D;function Xn(t,e,i,s){Un&&!e.options.segment?function(t,e,i,s){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,s)&&n.closePath()),Wn(t,e.options),t.stroke(n)}(t,e,i,s):function(t,e,i,s){const{segments:n,options:o}=e,a=Yn(e);for(const r of n)Wn(t,o,r.style),t.beginPath(),a(t,e,r,{start:i,end:i+s-1})&&t.closePath(),t.stroke()}(t,e,i,s)}class qn extends Ds{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const s=i.spanGaps?this._loop:this._fullLoop;ki(this._points,i,t,s,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Ni(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,s=t[e],n=this.points,o=Wi(this,{property:e,start:s,end:s});if(!o.length)return;const a=[],r=function(t){return t.stepped?Ai:t.tension||"monotone"===t.cubicInterpolationMode?Ti:Oi}(i);let l,h;for(l=0,h=o.length;l<h;++l){const{start:h,end:c}=o[l],d=n[h],u=n[c];if(d===u){a.push(d);continue}const f=r(d,u,Math.abs((s-d[e])/(u[e]-d[e])),i.stepped);f[e]=t[e],a.push(f)}return 1===a.length?a[0]:a}pathSegment(t,e,i){return Yn(this)(t,this,e,i)}path(t,e,i){const s=this.segments,n=Yn(this);let o=this._loop;e=e||0,i=i||this.points.length-e;for(const a of s)o&=n(t,this,a,{start:e,end:e+i-1});return!!o}draw(t,e,i,s){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),Xn(t,this,i,s),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Kn(t,e,i,s){const n=t.options,{[i]:o}=t.getProps([i],s);return Math.abs(e-o)<n.radius+n.hitRadius}qn.id="line",qn.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},qn.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},qn.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class Gn extends Ds{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const s=this.options,{x:n,y:o}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-o,2)<Math.pow(s.hitRadius+s.radius,2)}inXRange(t,e){return Kn(this,t,"x",e)}inYRange(t,e){return Kn(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);return 2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!Jt(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Zt(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Zn(t,e){const{x:i,y:s,base:n,width:o,height:a}=t.getProps(["x","y","base","width","height"],e);let r,l,h,c,d;return t.horizontal?(d=a/2,r=Math.min(i,n),l=Math.max(i,n),h=s-d,c=s+d):(d=o/2,r=i-d,l=i+d,h=Math.min(s,n),c=Math.max(s,n)),{left:r,top:h,right:l,bottom:c}}function Jn(t,e,i,s){return t?0:jt(e,i,s)}function Qn(t){const e=Zn(t),i=e.right-e.left,s=e.bottom-e.top,n=function(t,e,i){const s=t.options.borderWidth,n=t.borderSkipped,o=Ve(s);return{t:Jn(n.top,o.top,0,i),r:Jn(n.right,o.right,0,e),b:Jn(n.bottom,o.bottom,0,i),l:Jn(n.left,o.left,0,e)}}(t,i/2,s/2),o=function(t,e,i){const{enableBorderRadius:s}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,o=We(n),a=Math.min(e,i),r=t.borderSkipped,l=s||U(n);return{topLeft:Jn(!l||r.top||r.left,o.topLeft,0,a),topRight:Jn(!l||r.top||r.right,o.topRight,0,a),bottomLeft:Jn(!l||r.bottom||r.left,o.bottomLeft,0,a),bottomRight:Jn(!l||r.bottom||r.right,o.bottomRight,0,a)}}(t,i/2,s/2);return{outer:{x:e.left,y:e.top,w:i,h:s,radius:o},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function to(t,e,i,s){const n=null===e,o=null===i,a=t&&!(n&&o)&&Zn(t,s);return a&&(n||Yt(e,a.left,a.right))&&(o||Yt(i,a.top,a.bottom))}function eo(t,e){t.rect(e.x,e.y,e.w,e.h)}function io(t,e,i={}){const s=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,o=(t.x+t.w!==i.x+i.w?e:0)-s,a=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+s,y:t.y+n,w:t.w+o,h:t.h+a,radius:t.radius}}Gn.id="point",Gn.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},Gn.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class so extends Ds{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:s}}=this,{inner:n,outer:o}=Qn(this),a=(r=o.radius).topLeft||r.topRight||r.bottomLeft||r.bottomRight?oe:eo;var r;t.save(),o.w===n.w&&o.h===n.h||(t.beginPath(),a(t,io(o,e,n)),t.clip(),a(t,io(n,-e,o)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),a(t,io(n,e)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return to(this,t,e,i)}inXRange(t,e){return to(this,t,null,e)}inYRange(t,e){return to(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:s,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+s)/2:e,y:n?i:(i+s)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}so.id="bar",so.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},so.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var no=Object.freeze({__proto__:null,ArcElement:Vn,LineElement:qn,PointElement:Gn,BarElement:so});function oo(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function ao(t){t.data.datasets.forEach((t=>{oo(t)}))}var ro={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void ao(t);const s=t.width;t.data.datasets.forEach(((e,n)=>{const{_data:o,indexAxis:a}=e,r=t.getDatasetMeta(n),l=o||e.data;if("y"===je([a,t.options.indexAxis]))return;if("line"!==r.type)return;const h=t.scales[r.xAxisID];if("linear"!==h.type&&"time"!==h.type)return;if(t.options.parsing)return;let{start:c,count:d}=function(t,e){const i=e.length;let s,n=0;const{iScale:o}=t,{min:a,max:r,minDefined:l,maxDefined:h}=o.getUserBounds();return l&&(n=jt(re(e,o.axis,a).lo,0,i-1)),s=h?jt(re(e,o.axis,r).hi+1,n,i)-n:i-n,{start:n,count:s}}(r,l);if(d<=(i.threshold||4*s))return void oo(e);let u;switch($(o)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":u=function(t,e,i,s,n){const o=n.samples||s;if(o>=i)return t.slice(e,e+i);const a=[],r=(i-2)/(o-2);let l=0;const h=e+i-1;let c,d,u,f,g,p=e;for(a[l++]=t[p],c=0;c<o-2;c++){let s,n=0,o=0;const h=Math.floor((c+1)*r)+1+e,m=Math.min(Math.floor((c+2)*r)+1,i)+e,x=m-h;for(s=h;s<m;s++)n+=t[s].x,o+=t[s].y;n/=x,o/=x;const b=Math.floor(c*r)+1+e,_=Math.min(Math.floor((c+1)*r)+1,i)+e,{x:y,y:v}=t[p];for(u=f=-1,s=b;s<_;s++)f=.5*Math.abs((y-n)*(t[s].y-v)-(y-t[s].x)*(o-v)),f>u&&(u=f,d=t[s],g=s);a[l++]=d,p=g}return a[l++]=t[h],a}(l,c,d,s,i);break;case"min-max":u=function(t,e,i,s){let n,o,a,r,l,h,c,d,u,f,g=0,p=0;const m=[],x=e+i-1,b=t[e].x,_=t[x].x-b;for(n=e;n<e+i;++n){o=t[n],a=(o.x-b)/_*s,r=o.y;const e=0|a;if(e===l)r<u?(u=r,h=n):r>f&&(f=r,c=n),g=(p*g+o.x)/++p;else{const i=n-1;if(!$(h)&&!$(c)){const e=Math.min(h,c),s=Math.max(h,c);e!==d&&e!==i&&m.push({...t[e],x:g}),s!==d&&s!==i&&m.push({...t[s],x:g})}n>0&&i!==d&&m.push(t[i]),m.push(o),l=e,p=0,u=f=r,h=c=d=n}}return m}(l,c,d,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=u}))},destroy(t){ao(t)}};function lo(t,e,i){const s=function(t){const e=t.options,i=e.fill;let s=K(i&&i.target,i);return void 0===s&&(s=!!e.backgroundColor),!1!==s&&null!==s&&(!0===s?"origin":s)}(t);if(U(s))return!isNaN(s.value)&&s;let n=parseFloat(s);return X(n)&&Math.floor(n)===n?("-"!==s[0]&&"+"!==s[0]||(n=e+n),!(n===e||n<0||n>=i)&&n):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}class ho{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:s,y:n,radius:o}=this;return e=e||{start:0,end:yt},t.arc(s,n,o,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:s}=this,n=t.angle;return{x:e+Math.cos(n)*s,y:i+Math.sin(n)*s,angle:n}}}function co(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,s=e.options,n=e.getLabels().length,o=[],a=s.reverse?e.max:e.min,r=s.reverse?e.min:e.max;let l,h,c;if(c="start"===i?a:"end"===i?r:U(i)?i.value:e.getBaseValue(),s.grid.circular)return h=e.getPointPositionForValue(0,a),new ho({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)});for(l=0;l<n;++l)o.push(e.getPointPositionForValue(l,c));return o}(t):function(t){const{scale:e={},fill:i}=t;let s,n=null;return"start"===i?n=e.bottom:"end"===i?n=e.top:U(i)?n=e.getPixelForValue(i.value):e.getBasePixel&&(n=e.getBasePixel()),X(n)?(s=e.isHorizontal(),{x:s?n:null,y:s?null:n}):null}(t)}function uo(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function fo(t,e,i){const s=[];for(let n=0;n<i.length;n++){const o=i[n],{first:a,last:r,point:l}=go(o,e,"x");if(!(!l||a&&r))if(a)s.unshift(l);else if(t.push(l),!r)break}t.push(...s)}function go(t,e,i){const s=t.interpolate(e,i);if(!s)return{};const n=s[i],o=t.segments,a=t.points;let r=!1,l=!1;for(let t=0;t<o.length;t++){const e=o[t],s=a[e.start][i],h=a[e.end][i];if(Yt(n,s,h)){r=n===s,l=n===h;break}}return{first:r,last:l,point:s}}function po(t){const{chart:e,fill:i,line:s}=t;if(X(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:s}=t,n=[],o=s.segments,a=s.points,r=function(t,e){const i=[],s=t.getMatchingVisibleMetas("line");for(let t=0;t<s.length;t++){const n=s[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);r.push(mo({x:null,y:e.bottom},s));for(let t=0;t<o.length;t++){const e=o[t];for(let t=e.start;t<=e.end;t++)fo(n,a[t],r)}return new qn({points:n,options:{}})}(t);if("shape"===i)return!0;const n=co(t);return n instanceof ho?n:mo(n,s)}function mo(t,e){let i=[],s=!1;return Y(t)?(s=!0,i=t):i=function(t,e){const{x:i=null,y:s=null}=t||{},n=e.points,o=[];return e.segments.forEach((({start:t,end:e})=>{e=uo(t,e,n);const a=n[t],r=n[e];null!==s?(o.push({x:a.x,y:s}),o.push({x:r.x,y:s})):null!==i&&(o.push({x:i,y:a.y}),o.push({x:i,y:r.y}))})),o}(t,e),i.length?new qn({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function xo(t,e,i){let s=t[e].fill;const n=[e];let o;if(!i)return s;for(;!1!==s&&-1===n.indexOf(s);){if(!X(s))return s;if(o=t[s],!o)return!1;if(o.visible)return s;n.push(s),s=o.fill}return!1}function bo(t,e,i){const{segments:s,points:n}=e;let o=!0,a=!1;t.beginPath();for(const r of s){const{start:s,end:l}=r,h=n[s],c=n[uo(s,l,n)];o?(t.moveTo(h.x,h.y),o=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),a=!!e.pathSegment(t,r,{move:a}),a?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function _o(t,e,i,s){if(s)return;let n=e[t],o=i[t];return"angle"===t&&(n=Nt(n),o=Nt(o)),{property:t,start:n,end:o}}function yo(t,e,i,s){return t&&e?s(t[i],e[i]):t?t[i]:e?e[i]:0}function vo(t,e,i){const{top:s,bottom:n}=e.chart.chartArea,{property:o,start:a,end:r}=i||{};"x"===o&&(t.beginPath(),t.rect(a,s,r-a,n-s),t.clip())}function wo(t,e,i,s){const n=e.interpolate(i,s);n&&t.lineTo(n.x,n.y)}function Mo(t,e){const{line:i,target:s,property:n,color:o,scale:a}=e,r=function(t,e,i){const s=t.segments,n=t.points,o=e.points,a=[];for(const t of s){let{start:s,end:r}=t;r=uo(s,r,n);const l=_o(i,n[s],n[r],t.loop);if(!e.segments){a.push({source:t,target:l,start:n[s],end:n[r]});continue}const h=Wi(e,l);for(const e of h){const s=_o(i,o[e.start],o[e.end],e.loop),r=Vi(t,n,s);for(const t of r)a.push({source:t,target:e,start:{[i]:yo(l,s,"start",Math.max)},end:{[i]:yo(l,s,"end",Math.min)}})}}return a}(i,s,n);for(const{source:e,target:l,start:h,end:c}of r){const{style:{backgroundColor:r=o}={}}=e,d=!0!==s;t.save(),t.fillStyle=r,vo(t,a,d&&_o(n,h,c)),t.beginPath();const u=!!i.pathSegment(t,e);let f;if(d){u?t.closePath():wo(t,s,c,n);const e=!!s.pathSegment(t,l,{move:u,reverse:!0});f=u&&e,f||wo(t,s,h,n)}t.closePath(),t.fill(f?"evenodd":"nonzero"),t.restore()}}function ko(t,e,i){const s=po(e),{line:n,scale:o,axis:a}=e,r=n.options,l=r.fill,h=r.backgroundColor,{above:c=h,below:d=h}=l||{};s&&n.points.length&&(Qt(t,i),function(t,e){const{line:i,target:s,above:n,below:o,area:a,scale:r}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&o!==n&&(bo(t,s,a.top),Mo(t,{line:i,target:s,color:n,scale:r,property:l}),t.restore(),t.save(),bo(t,s,a.bottom)),Mo(t,{line:i,target:s,color:o,scale:r,property:l}),t.restore()}(t,{line:n,target:s,above:c,below:d,area:i,scale:o,axis:a}),te(t))}var So={id:"filler",afterDatasetsUpdate(t,e,i){const s=(t.data.datasets||[]).length,n=[];let o,a,r,l;for(a=0;a<s;++a)o=t.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof qn&&(l={visible:t.isDatasetVisible(a),index:a,fill:lo(r,a,s),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,n.push(l);for(a=0;a<s;++a)l=n[a],l&&!1!==l.fill&&(l.fill=xo(n,a,i.propagate))},beforeDraw(t,e,i){const s="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(o,i.axis),s&&ko(t.ctx,i,o))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const s=t.getSortedVisibleDatasetMetas();for(let e=s.length-1;e>=0;--e){const i=s[e].$filler;i&&ko(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const s=e.meta.$filler;s&&!1!==s.fill&&"beforeDatasetDraw"===i.drawTime&&ko(t.ctx,s,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Po=(t,e)=>{let{boxHeight:i=e,boxWidth:s=e}=t;return t.usePointStyle&&(i=Math.min(i,e),s=Math.min(s,e)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(e,i)}};class Do extends Ds{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=J(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,s=He(i.font),n=s.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:r}=Po(i,n);let l,h;e.font=s.string,this.isHorizontal()?(l=this.maxWidth,h=this._fitRows(o,n,a,r)+10):(h=this.maxHeight,l=this._fitCols(o,n,a,r)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,s){const{ctx:n,maxWidth:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.lineWidths=[0],h=s+a;let c=t;n.textAlign="left",n.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach(((t,f)=>{const g=i+e/2+n.measureText(t.text).width;(0===f||l[l.length-1]+g+2*a>o)&&(c+=h,l[l.length-(f>0?0:1)]=0,u+=h,d++),r[f]={left:0,top:u,row:d,width:g,height:s},l[l.length-1]+=g+a})),c}_fitCols(t,e,i,s){const{ctx:n,maxHeight:o,options:{labels:{padding:a}}}=this,r=this.legendHitBoxes=[],l=this.columnSizes=[],h=o-t;let c=a,d=0,u=0,f=0,g=0;return this.legendItems.forEach(((t,o)=>{const p=i+e/2+n.measureText(t.text).width;o>0&&u+s+2*a>h&&(c+=d+a,l.push({width:d,height:u}),f+=d+a,g++,d=u=0),r[o]={left:f,top:u,col:g,width:p,height:s},d=Math.max(d,p),u+=s+a})),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:s},rtl:o}}=this,a=Ei(o,this.left,this.width);if(this.isHorizontal()){let o=0,r=n(i,this.left+s,this.right-this.lineWidths[o]);for(const l of e)o!==l.row&&(o=l.row,r=n(i,this.left+s,this.right-this.lineWidths[o])),l.top+=this.top+t+s,l.left=a.leftForLtr(a.x(r),l.width),r+=l.width+s}else{let o=0,r=n(i,this.top+t+s,this.bottom-this.columnSizes[o].height);for(const l of e)l.col!==o&&(o=l.col,r=n(i,this.top+t+s,this.bottom-this.columnSizes[o].height)),l.top=r,l.left+=this.left+s,l.left=a.leftForLtr(a.x(l.left),l.width),r+=l.height+s}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Qt(t,this),this._draw(),te(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:s}=this,{align:a,labels:r}=t,l=bt.color,h=Ei(t.rtl,this.left,this.width),c=He(r.font),{color:d,padding:u}=r,f=c.size,g=f/2;let p;this.drawTitle(),s.textAlign=h.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;const{boxWidth:m,boxHeight:x,itemHeight:b}=Po(r,f),_=this.isHorizontal(),y=this._computeTitleHeight();p=_?{x:n(a,this.left+u,this.right-i[0]),y:this.top+u+y,line:0}:{x:this.left+u,y:n(a,this.top+y+u,this.bottom-e[0].height),line:0},Ii(this.ctx,t.textDirection);const v=b+u;this.legendItems.forEach(((w,M)=>{s.strokeStyle=w.fontColor||d,s.fillStyle=w.fontColor||d;const k=s.measureText(w.text).width,S=h.textAlign(w.textAlign||(w.textAlign=r.textAlign)),P=m+g+k;let D=p.x,C=p.y;h.setWidth(this.width),_?M>0&&D+P+u>this.right&&(C=p.y+=v,p.line++,D=p.x=n(a,this.left+u,this.right-i[p.line])):M>0&&C+v>this.bottom&&(D=p.x=D+e[p.line].width+u,p.line++,C=p.y=n(a,this.top+y+u,this.bottom-e[p.line].height));!function(t,e,i){if(isNaN(m)||m<=0||isNaN(x)||x<0)return;s.save();const n=K(i.lineWidth,1);if(s.fillStyle=K(i.fillStyle,l),s.lineCap=K(i.lineCap,"butt"),s.lineDashOffset=K(i.lineDashOffset,0),s.lineJoin=K(i.lineJoin,"miter"),s.lineWidth=n,s.strokeStyle=K(i.strokeStyle,l),s.setLineDash(K(i.lineDash,[])),r.usePointStyle){const o={radius:m*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},a=h.xPlus(t,m/2);Zt(s,o,a,e+g)}else{const o=e+Math.max((f-x)/2,0),a=h.leftForLtr(t,m),r=We(i.borderRadius);s.beginPath(),Object.values(r).some((t=>0!==t))?oe(s,{x:a,y:o,w:m,h:x,radius:r}):s.rect(a,o,m,x),s.fill(),0!==n&&s.stroke()}s.restore()}(h.x(D),C,w),D=o(S,D+m+g,_?D+P:this.right,t.rtl),function(t,e,i){se(s,i.text,t,e+b/2,c,{strikethrough:i.hidden,textAlign:h.textAlign(i.textAlign)})}(h.x(D),C,w),_?p.x+=P+u:p.y+=v})),zi(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=He(e.font),o=Ne(e.padding);if(!e.display)return;const a=Ei(t.rtl,this.left,this.width),r=this.ctx,l=e.position,h=i.size/2,c=o.top+h;let d,u=this.left,f=this.width;if(this.isHorizontal())f=Math.max(...this.lineWidths),d=this.top+c,u=n(t.align,u,this.right-f);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);d=c+n(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const g=n(l,u,u+f);r.textAlign=a.textAlign(s(l)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,se(r,e.text,g,d,i)}_computeTitleHeight(){const t=this.options.title,e=He(t.font),i=Ne(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,s,n;if(Yt(t,this.left,this.right)&&Yt(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(s=n[i],Yt(t,s.left,s.left+s.width)&&Yt(e,s.top,s.top+s.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){if("mousemove"===t&&(e.onHover||e.onLeave))return!0;if(e.onClick&&("click"===t||"mouseup"===t))return!0;return!1}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const o=this._hoveredItem,a=(n=i,null!==(s=o)&&null!==n&&s.datasetIndex===n.datasetIndex&&s.index===n.index);o&&!a&&J(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!a&&J(e.onHover,[t,i,this],this)}else i&&J(e.onClick,[t,i,this],this);var s,n}}var Co={id:"legend",_element:Do,start(t,e,i){const s=t.legend=new Do({ctx:t.ctx,options:i,chart:t});ni.configure(t,s,i),ni.addBox(t,s)},stop(t){ni.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const s=t.legend;ni.configure(t,s,i),s.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const s=e.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),e.hidden=!0):(n.show(s),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:o}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const a=t.controller.getStyle(i?0:void 0),r=Ne(a.borderWidth);return{text:e[t.index].label,fillStyle:a.backgroundColor,fontColor:o,hidden:!t.visible,lineCap:a.borderCapStyle,lineDash:a.borderDash,lineDashOffset:a.borderDashOffset,lineJoin:a.borderJoinStyle,lineWidth:(r.width+r.height)/4,strokeStyle:a.borderColor,pointStyle:s||a.pointStyle,rotation:a.rotation,textAlign:n||a.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Oo extends Ds{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const s=Y(i.text)?i.text.length:1;this._padding=Ne(i.padding);const n=s*He(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:s,right:o,options:a}=this,r=a.align;let l,h,c,d=0;return this.isHorizontal()?(h=n(r,i,o),c=e+t,l=o-i):("left"===a.position?(h=i+t,c=n(r,s,e),d=-.5*_t):(h=o-t,c=n(r,e,s),d=.5*_t),l=s-e),{titleX:h,titleY:c,maxWidth:l,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=He(e.font),n=i.lineHeight/2+this._padding.top,{titleX:o,titleY:a,maxWidth:r,rotation:l}=this._drawArgs(n);se(t,e.text,0,0,i,{color:e.color,maxWidth:r,rotation:l,textAlign:s(e.align),textBaseline:"middle",translation:[o,a]})}}var Ao={id:"title",_element:Oo,start(t,e,i){!function(t,e){const i=new Oo({ctx:t.ctx,options:e,chart:t});ni.configure(t,i,e),ni.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;ni.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const s=t.titleBlock;ni.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const To=new WeakMap;var Lo={id:"subtitle",start(t,e,i){const s=new Oo({ctx:t.ctx,options:i,chart:t});ni.configure(t,s,i),ni.addBox(t,s),To.set(t,s)},stop(t){ni.removeBox(t,To.get(t)),To.delete(t)},beforeUpdate(t,e,i){const s=To.get(t);ni.configure(t,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ro={average(t){if(!t.length)return!1;let e,i,s=0,n=0,o=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();s+=t.x,n+=t.y,++o}}return{x:s/o,y:n/o}},nearest(t,e){if(!t.length)return!1;let i,s,n,o=e.x,a=e.y,r=Number.POSITIVE_INFINITY;for(i=0,s=t.length;i<s;++i){const s=t[i].element;if(s&&s.hasValue()){const t=Vt(e,s.getCenterPoint());t<r&&(r=t,n=s)}}if(n){const t=n.tooltipPosition();o=t.x,a=t.y}return{x:o,y:a}}};function Eo(t,e){return e&&(Y(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Io(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function zo(t,e){const{element:i,datasetIndex:s,index:n}=e,o=t.getDatasetMeta(s).controller,{label:a,value:r}=o.getLabelAndValue(n);return{chart:t,label:a,parsed:o.getParsed(n),raw:t.data.datasets[s].data[n],formattedValue:r,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function Fo(t,e){const i=t.chart.ctx,{body:s,footer:n,title:o}=t,{boxWidth:a,boxHeight:r}=e,l=He(e.bodyFont),h=He(e.titleFont),c=He(e.footerFont),d=o.length,u=n.length,f=s.length,g=Ne(e.padding);let p=g.height,m=0,x=s.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);if(x+=t.beforeBody.length+t.afterBody.length,d&&(p+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),x){p+=f*(e.displayColors?Math.max(r,l.lineHeight):l.lineHeight)+(x-f)*l.lineHeight+(x-1)*e.bodySpacing}u&&(p+=e.footerMarginTop+u*c.lineHeight+(u-1)*e.footerSpacing);let b=0;const _=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=h.string,Q(t.title,_),i.font=l.string,Q(t.beforeBody.concat(t.afterBody),_),b=e.displayColors?a+2+e.boxPadding:0,Q(s,(t=>{Q(t.before,_),Q(t.lines,_),Q(t.after,_)})),b=0,i.font=c.string,Q(t.footer,_),i.restore(),m+=g.width,{width:m,height:p}}function Bo(t,e,i,s){const{x:n,width:o}=i,{width:a,chartArea:{left:r,right:l}}=t;let h="center";return"center"===s?h=n<=(r+l)/2?"left":"right":n<=o/2?h="left":n>=a-o/2&&(h="right"),function(t,e,i,s){const{x:n,width:o}=s,a=i.caretSize+i.caretPadding;return"left"===t&&n+o+a>e.width||"right"===t&&n-o-a<0||void 0}(h,t,e,i)&&(h="center"),h}function Vo(t,e,i){const s=i.yAlign||e.yAlign||function(t,e){const{y:i,height:s}=e;return i<s/2?"top":i>t.height-s/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||Bo(t,e,i,s),yAlign:s}}function Wo(t,e,i,s){const{caretSize:n,caretPadding:o,cornerRadius:a}=t,{xAlign:r,yAlign:l}=i,h=n+o,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=We(a);let g=function(t,e){let{x:i,width:s}=t;return"right"===e?i-=s:"center"===e&&(i-=s/2),i}(e,r);const p=function(t,e,i){let{y:s,height:n}=t;return"top"===e?s+=i:s-="bottom"===e?n+i:n/2,s}(e,l,h);return"center"===l?"left"===r?g+=h:"right"===r&&(g-=h):"left"===r?g-=Math.max(c,u)+n:"right"===r&&(g+=Math.max(d,f)+n),{x:jt(g,0,s.width-e.width),y:jt(p,0,s.height-e.height)}}function No(t,e,i){const s=Ne(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-s.right:t.x+s.left}function Ho(t){return Eo([],Io(t))}function jo(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class $o extends Ds{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&e.options.animation&&i.animations,n=new gs(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(t=this.chart.getContext(),e=this,i=this._tooltipItems,Ye(t,{tooltip:e,tooltipItems:i,type:"tooltip"})));var t,e,i}getTitle(t,e){const{callbacks:i}=e,s=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),o=i.afterTitle.apply(this,[t]);let a=[];return a=Eo(a,Io(s)),a=Eo(a,Io(n)),a=Eo(a,Io(o)),a}getBeforeBody(t,e){return Ho(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,s=[];return Q(t,(t=>{const e={before:[],lines:[],after:[]},n=jo(i,t);Eo(e.before,Io(n.beforeLabel.call(this,t))),Eo(e.lines,n.label.call(this,t)),Eo(e.after,Io(n.afterLabel.call(this,t))),s.push(e)})),s}getAfterBody(t,e){return Ho(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,s=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,[t]),o=i.afterFooter.apply(this,[t]);let a=[];return a=Eo(a,Io(s)),a=Eo(a,Io(n)),a=Eo(a,Io(o)),a}_createItems(t){const e=this._active,i=this.chart.data,s=[],n=[],o=[];let a,r,l=[];for(a=0,r=e.length;a<r;++a)l.push(zo(this.chart,e[a]));return t.filter&&(l=l.filter(((e,s,n)=>t.filter(e,s,n,i)))),t.itemSort&&(l=l.sort(((e,s)=>t.itemSort(e,s,i)))),Q(l,(e=>{const i=jo(t.callbacks,e);s.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),o.push(i.labelTextColor.call(this,e))})),this.labelColors=s,this.labelPointStyles=n,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),s=this._active;let n,o=[];if(s.length){const t=Ro[i.position].call(this,s,this._eventPosition);o=this._createItems(i),this.title=this.getTitle(o,i),this.beforeBody=this.getBeforeBody(o,i),this.body=this.getBody(o,i),this.afterBody=this.getAfterBody(o,i),this.footer=this.getFooter(o,i);const e=this._size=Fo(this,i),a=Object.assign({},t,e),r=Vo(this.chart,i,a),l=Wo(i,a,r,this.chart);this.xAlign=r.xAlign,this.yAlign=r.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=o,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,s){const n=this.getCaretPosition(t,i,s);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:s,yAlign:n}=this,{caretSize:o,cornerRadius:a}=i,{topLeft:r,topRight:l,bottomLeft:h,bottomRight:c}=We(a),{x:d,y:u}=t,{width:f,height:g}=e;let p,m,x,b,_,y;return"center"===n?(_=u+g/2,"left"===s?(p=d,m=p-o,b=_+o,y=_-o):(p=d+f,m=p+o,b=_-o,y=_+o),x=p):(m="left"===s?d+Math.max(r,h)+o:"right"===s?d+f-Math.max(l,c)-o:this.caretX,"top"===n?(b=u,_=b-o,p=m-o,x=m+o):(b=u+g,_=b+o,p=m+o,x=m-o),y=b),{x1:p,x2:m,x3:x,y1:b,y2:_,y3:y}}drawTitle(t,e,i){const s=this.title,n=s.length;let o,a,r;if(n){const l=Ei(i.rtl,this.x,this.width);for(t.x=No(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",o=He(i.titleFont),a=i.titleSpacing,e.fillStyle=i.titleColor,e.font=o.string,r=0;r<n;++r)e.fillText(s[r],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,r+1===n&&(t.y+=i.titleMarginBottom-a)}}_drawColorBox(t,e,i,s,n){const o=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:r,boxWidth:l,boxPadding:h}=n,c=He(n.bodyFont),d=No(this,"left",n),u=s.x(d),f=r<c.lineHeight?(c.lineHeight-r)/2:0,g=e.y+f;if(n.usePointStyle){const e={radius:Math.min(l,r)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},i=s.leftForLtr(u,l)+l/2,h=g+r/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,Zt(t,e,i,h),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Zt(t,e,i,h)}else{t.lineWidth=o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=s.leftForLtr(u,l-h),i=s.leftForLtr(s.xPlus(u,1),l-h-2),a=We(o.borderRadius);Object.values(a).some((t=>0!==t))?(t.beginPath(),t.fillStyle=n.multiKeyBackground,oe(t,{x:e,y:g,w:l,h:r,radius:a}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),oe(t,{x:i,y:g+1,w:l-2,h:r-2,radius:a}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,g,l,r),t.strokeRect(e,g,l,r),t.fillStyle=o.backgroundColor,t.fillRect(i,g+1,l-2,r-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:s}=this,{bodySpacing:n,bodyAlign:o,displayColors:a,boxHeight:r,boxWidth:l,boxPadding:h}=i,c=He(i.bodyFont);let d=c.lineHeight,u=0;const f=Ei(i.rtl,this.x,this.width),g=function(i){e.fillText(i,f.x(t.x+u),t.y+d/2),t.y+=d+n},p=f.textAlign(o);let m,x,b,_,y,v,w;for(e.textAlign=o,e.textBaseline="middle",e.font=c.string,t.x=No(this,p,i),e.fillStyle=i.bodyColor,Q(this.beforeBody,g),u=a&&"right"!==p?"center"===o?l/2+h:l+2+h:0,_=0,v=s.length;_<v;++_){for(m=s[_],x=this.labelTextColors[_],e.fillStyle=x,Q(m.before,g),b=m.lines,a&&b.length&&(this._drawColorBox(e,t,_,f,i),d=Math.max(c.lineHeight,r)),y=0,w=b.length;y<w;++y)g(b[y]),d=c.lineHeight;Q(m.after,g)}u=0,d=c.lineHeight,Q(this.afterBody,g),t.y-=n}drawFooter(t,e,i){const s=this.footer,n=s.length;let o,a;if(n){const r=Ei(i.rtl,this.x,this.width);for(t.x=No(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=r.textAlign(i.footerAlign),e.textBaseline="middle",o=He(i.footerFont),e.fillStyle=i.footerColor,e.font=o.string,a=0;a<n;++a)e.fillText(s[a],r.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+i.footerSpacing}}drawBackground(t,e,i,s){const{xAlign:n,yAlign:o}=this,{x:a,y:r}=t,{width:l,height:h}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=We(s.cornerRadius);e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,e.lineWidth=s.borderWidth,e.beginPath(),e.moveTo(a+c,r),"top"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+l-d,r),e.quadraticCurveTo(a+l,r,a+l,r+d),"center"===o&&"right"===n&&this.drawCaret(t,e,i,s),e.lineTo(a+l,r+h-f),e.quadraticCurveTo(a+l,r+h,a+l-f,r+h),"bottom"===o&&this.drawCaret(t,e,i,s),e.lineTo(a+u,r+h),e.quadraticCurveTo(a,r+h,a,r+h-u),"center"===o&&"left"===n&&this.drawCaret(t,e,i,s),e.lineTo(a,r+c),e.quadraticCurveTo(a,r,a+c,r),e.closePath(),e.fill(),s.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const i=Ro[t.position].call(this,this._active,this._eventPosition);if(!i)return;const o=this._size=Fo(this,t),a=Object.assign({},i,this._size),r=Vo(e,t,a),l=Wo(t,a,r,e);s._to===l.x&&n._to===l.y||(this.xAlign=r.xAlign,this.yAlign=r.yAlign,this.width=o.width,this.height=o.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const s={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const o=Ne(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,s,e),Ii(t,e.textDirection),n.y+=o.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),zi(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,s=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!tt(i,s),o=this._positionChanged(s,e);(n||o)&&(this._active=s,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,n=this._active||[],o=this._getActiveElements(t,n,e,i),a=this._positionChanged(o,t),r=e||!tt(o,n)||a;return r&&(this._active=o,(s.enabled||s.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),r}_getActiveElements(t,e,i,s){const n=this.options;if("mouseout"===t.type)return[];if(!s)return e;const o=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&o.reverse(),o}_positionChanged(t,e){const{caretX:i,caretY:s,options:n}=this,o=Ro[n.position].call(this,t,e);return!1!==o&&(i!==o.x||s!==o.y)}}$o.positioners=Ro;var Yo={id:"tooltip",_element:$o,positioners:Ro,afterInit(t,e,i){i&&(t.tooltip=new $o({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:H,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,s=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(s>0&&e.dataIndex<s)return i[e.dataIndex]}return""},afterTitle:H,beforeBody:H,beforeLabel:H,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return $(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:H,afterBody:H,beforeFooter:H,footer:H,afterFooter:H}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Uo=Object.freeze({__proto__:null,Decimation:ro,Filler:So,Legend:Co,SubTitle:Lo,Title:Ao,Tooltip:Yo});function Xo(t,e,i,s){const n=t.indexOf(e);if(-1===n)return((t,e,i,s)=>("string"==typeof e?(i=t.push(e)-1,s.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,s);return n!==t.lastIndexOf(e)?i:n}class qo extends Bs{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:s}of e)t[i]===s&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if($(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:jt(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:Xo(i,t,K(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:s}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(s=this.getLabels().length-1)),this.min=i,this.max=s}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,s=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)s.push({value:i});return s}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Ko(t,e,{horizontal:i,minRotation:s}){const n=It(s),o=(i?Math.sin(n):Math.cos(n))||.001,a=.75*e*(""+t).length;return Math.min(e/o,a)}qo.id="category",qo.defaults={ticks:{callback:qo.prototype.getLabelForValue}};class Go extends Bs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return $(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this;const o=t=>s=e?s:t,a=t=>n=i?n:t;if(t){const t=Ct(s),e=Ct(n);t<0&&e<0?a(0):t>0&&e>0&&o(0)}if(s===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||s<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*n)),a(n+e),t||o(s-e)}this.min=s,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:s}=t;return s?(e=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const s=function(t,e){const i=[],{bounds:s,step:n,min:o,max:a,precision:r,count:l,maxTicks:h,maxDigits:c,includeBounds:d}=t,u=n||1,f=h-1,{min:g,max:p}=e,m=!$(o),x=!$(a),b=!$(l),_=(p-g)/(c+1);let y,v,w,M,k=Ot((p-g)/f/u)*u;if(k<1e-14&&!m&&!x)return[{value:g},{value:p}];M=Math.ceil(p/k)-Math.floor(g/k),M>f&&(k=Ot(M*k/f/u)*u),$(r)||(y=Math.pow(10,r),k=Math.ceil(k*y)/y),"ticks"===s?(v=Math.floor(g/k)*k,w=Math.ceil(p/k)*k):(v=g,w=p),m&&x&&n&&Rt((a-o)/n,k/1e3)?(M=Math.round(Math.min((a-o)/k,h)),k=(a-o)/M,v=o,w=a):b?(v=m?o:v,w=x?a:w,M=l-1,k=(w-v)/M):(M=(w-v)/k,M=Lt(M,Math.round(M),k/1e3)?Math.round(M):Math.ceil(M));const S=Math.max(Ft(k),Ft(v));y=Math.pow(10,$(r)?S:r),v=Math.round(v*y)/y,w=Math.round(w*y)/y;let P=0;for(m&&(d&&v!==o?(i.push({value:o}),v<o&&P++,Lt(Math.round((v+P*k)*y)/y,o,Ko(o,_,t))&&P++):v<o&&P++);P<M;++P)i.push({value:Math.round((v+P*k)*y)/y});return x&&d&&w!==a?i.length&&Lt(i[i.length-1].value,a,Ko(a,_,t))?i[i.length-1].value=a:i.push({value:a}):x&&w!==a||i.push({value:w}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Et(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const s=(i-e)/Math.max(t.length-1,1)/2;e-=s,i+=s}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return Ri(t,this.chart.options.locale,this.options.ticks.format)}}class Zo extends Go{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=X(t)?t:0,this.max=X(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=It(this.options.ticks.minRotation),s=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/s))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Jo(t){return 1===t/Math.pow(10,Math.floor(Dt(t)))}Zo.id="linear",Zo.defaults={ticks:{callback:Os.formatters.numeric}};class Qo extends Bs{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Go.prototype.parse.apply(this,[t,e]);if(0!==i)return X(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=X(t)?Math.max(0,t):null,this.max=X(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,s=this.max;const n=e=>i=t?i:e,o=t=>s=e?s:t,a=(t,e)=>Math.pow(10,Math.floor(Dt(t))+e);i===s&&(i<=0?(n(1),o(10)):(n(a(i,-1)),o(a(s,1)))),i<=0&&n(a(s,-1)),s<=0&&o(a(i,1)),this._zero&&this.min!==this._suggestedMin&&i===a(this.min,0)&&n(a(i,-1)),this.min=i,this.max=s}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(Dt(e.max)),s=Math.ceil(e.max/Math.pow(10,i)),n=[];let o=q(t.min,Math.pow(10,Math.floor(Dt(e.min)))),a=Math.floor(Dt(o)),r=Math.floor(o/Math.pow(10,a)),l=a<0?Math.pow(10,Math.abs(a)):1;do{n.push({value:o,major:Jo(o)}),++r,10===r&&(r=1,++a,l=a>=0?1:l),o=Math.round(r*Math.pow(10,a)*l)/l}while(a<i||a===i&&r<s);const h=q(t.max,o);return n.push({value:h,major:Jo(o)}),n}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Et(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":Ri(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Dt(t),this._valueRange=Dt(this.max)-Dt(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Dt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function ta(t){const e=t.ticks;if(e.display&&t.display){const t=Ne(e.backdropPadding);return K(e.font&&e.font.size,bt.font.size)+t.height}return 0}function ea(t,e,i,s,n){return t===s||t===n?{start:e-i/2,end:e+i/2}:t<s||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function ia(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),s=[],n=[],o=t._pointLabels.length,a=t.options.pointLabels,r=a.centerPointLabels?_t/o:0;for(let d=0;d<o;d++){const o=a.setContext(t.getPointLabelContext(d));n[d]=o.padding;const u=t.getPointPosition(d,t.drawingArea+n[d],r),f=He(o.font),g=(l=t.ctx,h=f,c=Y(c=t._pointLabels[d])?c:[c],{w:qt(l,h.string,c),h:c.length*h.lineHeight});s[d]=g;const p=Nt(t.getIndexAngle(d)+r),m=Math.round(zt(p));sa(i,e,p,ea(m,u.x,g.w,0,180),ea(m,u.y,g.h,90,270))}var l,h,c;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const s=[],n=t._pointLabels.length,o=t.options,a=ta(o)/2,r=t.drawingArea,l=o.pointLabels.centerPointLabels?_t/n:0;for(let o=0;o<n;o++){const n=t.getPointPosition(o,r+a+i[o],l),h=Math.round(zt(Nt(n.angle+kt))),c=e[o],d=aa(n.y,c.h,h),u=na(h),f=oa(n.x,c.w,u);s.push({x:n.x,y:d,textAlign:u,left:f,top:d,right:f+c.w,bottom:d+c.h})}return s}(t,s,n)}function sa(t,e,i,s,n){const o=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i));let r=0,l=0;s.start<e.l?(r=(e.l-s.start)/o,t.l=Math.min(t.l,e.l-r)):s.end>e.r&&(r=(s.end-e.r)/o,t.r=Math.max(t.r,e.r+r)),n.start<e.t?(l=(e.t-n.start)/a,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}function na(t){return 0===t||180===t?"center":t<180?"left":"right"}function oa(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function aa(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function ra(t,e,i,s){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,yt);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let o=1;o<s;o++)i=t.getPointPosition(o,e),n.lineTo(i.x,i.y)}}Qo.id="logarithmic",Qo.defaults={ticks:{callback:Os.formatters.logarithmic,major:{enabled:!0}}};class la extends Go{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=Ne(ta(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=X(t)&&!isNaN(t)?t:0,this.max=X(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ta(this.options))}generateTickLabels(t){Go.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=J(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?ia(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,s){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,s))}getIndexAngle(t){return Nt(t*(yt/(this._pointLabels.length||1))+It(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if($(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if($(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return Ye(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const s=this.getIndexAngle(t)-kt+i;return{x:Math.cos(s)*e+this.xCenter,y:Math.sin(s)*e+this.yCenter,angle:s}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:s,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:s,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),ra(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:s}=e,n=this._pointLabels.length;let o,a,r;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:s}}=t;for(let n=e-1;n>=0;n--){const e=s.setContext(t.getPointLabelContext(n)),o=He(e.font),{x:a,y:r,textAlign:l,left:h,top:c,right:d,bottom:u}=t._pointLabelItems[n],{backdropColor:f}=e;if(!$(f)){const t=Ne(e.backdropPadding);i.fillStyle=f,i.fillRect(h-t.left,c-t.top,d-h+t.width,u-c+t.height)}se(i,t._pointLabels[n],a,r+o.lineHeight/2,o,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),s.display&&this.ticks.forEach(((t,e)=>{if(0!==e){a=this.getDistanceFromCenterForValue(t.value);!function(t,e,i,s){const n=t.ctx,o=e.circular,{color:a,lineWidth:r}=e;!o&&!s||!a||!r||i<0||(n.save(),n.strokeStyle=a,n.lineWidth=r,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),ra(t,i,o,s),n.closePath(),n.stroke(),n.restore())}(this,s.setContext(this.getContext(e-1)),a,n)}})),i.display){for(t.save(),o=n-1;o>=0;o--){const s=i.setContext(this.getPointLabelContext(o)),{color:n,lineWidth:l}=s;l&&n&&(t.lineWidth=l,t.strokeStyle=n,t.setLineDash(s.borderDash),t.lineDashOffset=s.borderDashOffset,a=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),r=this.getPointPosition(o,a),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(r.x,r.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const s=this.getIndexAngle(0);let n,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(s),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((s,a)=>{if(0===a&&!e.reverse)return;const r=i.setContext(this.getContext(a)),l=He(r.font);if(n=this.getDistanceFromCenterForValue(this.ticks[a].value),r.showLabelBackdrop){t.font=l.string,o=t.measureText(s.label).width,t.fillStyle=r.backdropColor;const e=Ne(r.backdropPadding);t.fillRect(-o/2-e.left,-n-l.size/2-e.top,o+e.width,l.size+e.height)}se(t,s.label,0,-n,l,{color:r.color})})),t.restore()}drawTitle(){}}la.id="radialLinear",la.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Os.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},la.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},la.descriptors={angleLines:{_fallback:"grid"}};const ha={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ca=Object.keys(ha);function da(t,e){return t-e}function ua(t,e){if($(e))return null;const i=t._adapter,{parser:s,round:n,isoWeekday:o}=t._parseOpts;let a=e;return"function"==typeof s&&(a=s(a)),X(a)||(a="string"==typeof s?i.parse(a,s):i.parse(a)),null===a?null:(n&&(a="week"!==n||!Tt(o)&&!0!==o?i.startOf(a,n):i.startOf(a,"isoWeek",o)),+a)}function fa(t,e,i,s){const n=ca.length;for(let o=ca.indexOf(t);o<n-1;++o){const t=ha[ca[o]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=s)return ca[o]}return ca[n-1]}function ga(t,e,i){if(i){if(i.length){const{lo:s,hi:n}=ae(i,e);t[i[s]>=e?i[s]:i[n]]=!0}}else t[e]=!0}function pa(t,e,i){const s=[],n={},o=e.length;let a,r;for(a=0;a<o;++a)r=e[a],n[r]=a,s.push({value:r,major:!1});return 0!==o&&i?function(t,e,i,s){const n=t._adapter,o=+n.startOf(e[0].value,s),a=e[e.length-1].value;let r,l;for(r=o;r<=a;r=+n.add(r,1,s))l=i[r],l>=0&&(e[l].major=!0);return e}(t,s,n,i):s}class ma extends Bs{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),s=this._adapter=new mn._date(t.adapters.date);ot(i.displayFormats,s.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:ua(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:s,max:n,minDefined:o,maxDefined:a}=this.getUserBounds();function r(t){o||isNaN(t.min)||(s=Math.min(s,t.min)),a||isNaN(t.max)||(n=Math.max(n,t.max))}o&&a||(r(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||r(this.getMinMax(!1))),s=X(s)&&!isNaN(s)?s:+e.startOf(Date.now(),i),n=X(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(s,n-1),this.max=Math.max(s+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,s="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&s.length&&(this.min=this._userMin||s[0],this.max=this._userMax||s[s.length-1]);const n=this.min,o=he(s,n,this.max);return this._unit=e.unit||(i.autoSkip?fa(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,s,n){for(let o=ca.length-1;o>=ca.indexOf(i);o--){const i=ca[o];if(ha[i].common&&t._adapter.diff(n,s,i)>=e-1)return i}return ca[i?ca.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=ca.indexOf(t)+1,i=ca.length;e<i;++e)if(ha[ca[e]].common)return ca[e]}(this._unit):void 0,this.initOffsets(s),t.reverse&&o.reverse(),pa(this,o,this._majorUnit)}initOffsets(t){let e,i,s=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),s=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;s=jt(s,0,o),n=jt(n,0,o),this._offsets={start:s,end:n,factor:1/(s+1+n)}}_generate(){const t=this._adapter,e=this.min,i=this.max,s=this.options,n=s.time,o=n.unit||fa(n.minUnit,e,i,this._getLabelCapacity(e)),a=K(n.stepSize,1),r="week"===o&&n.isoWeekday,l=Tt(r)||!0===r,h={};let c,d,u=e;if(l&&(u=+t.startOf(u,"isoWeek",r)),u=+t.startOf(u,l?"day":o),t.diff(i,e,o)>1e5*a)throw new Error(e+" and "+i+" are too far apart with stepSize of "+a+" "+o);const f="data"===s.ticks.source&&this.getDataTimestamps();for(c=u,d=0;c<i;c=+t.add(c,a,o),d++)ga(h,c,f);return c!==i&&"ticks"!==s.bounds&&1!==d||ga(h,c,f),Object.keys(h).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,s){const n=this.options,o=n.time.displayFormats,a=this._unit,r=this._majorUnit,l=a&&o[a],h=r&&o[r],c=i[e],d=r&&h&&c&&c.major,u=this._adapter.format(t,s||(d?h:l)),f=n.ticks.callback;return f?J(f,[u,e,i],this):u}generateTickLabels(t){let e,i,s;for(e=0,i=t.length;e<i;++e)s=t[e],s.label=this._tickFormatFunction(s.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,s=It(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(s),o=Math.sin(s),a=this._resolveTickFontOptions(0).size;return{w:i*n+a*o,h:i*o+a*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,s=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,pa(this,[t],this._majorUnit),s),o=this._getLabelSize(n),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const s=this.getMatchingVisibleMetas();if(this._normalized&&s.length)return this._cache.data=s[0].controller.getAllParsedValues(this);for(t=0,e=s.length;t<e;++t)i=i.concat(s[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const s=this.getLabels();for(e=0,i=s.length;e<i;++e)t.push(ua(this,s[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return fe(t.sort(da))}}function xa(t,e,i){let s,n,o,a,r=0,l=t.length-1;i?(e>=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=re(t,"pos",e)),({pos:s,time:o}=t[r]),({pos:n,time:a}=t[l])):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=re(t,"time",e)),({time:s,pos:o}=t[r]),({time:n,pos:a}=t[l]));const h=n-s;return h?o+(a-o)*(e-s)/h:o}ma.id="time",ma.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class ba extends ma{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=xa(e,this.min),this._tableRange=xa(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,s=[],n=[];let o,a,r,l,h;for(o=0,a=t.length;o<a;++o)l=t[o],l>=e&&l<=i&&s.push(l);if(s.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(o=0,a=s.length;o<a;++o)h=s[o+1],r=s[o-1],l=s[o],Math.round((h+r)/2)!==l&&n.push({time:l,pos:o/(a-1)});return n}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(xa(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return xa(this._table,i*this._tableRange+this._minPos,!0)}}ba.id="timeseries",ba.defaults=ma.defaults;var _a=Object.freeze({__proto__:null,CategoryScale:qo,LinearScale:Zo,LogarithmicScale:Qo,RadialLinearScale:la,TimeScale:ma,TimeSeriesScale:ba});return dn.register(Rn,_a,no,Uo),dn.helpers={...Yi},dn._adapters=mn,dn.Animation=us,dn.Animations=gs,dn.animator=a,dn.controllers=Ws.controllers.items,dn.DatasetController=Ps,dn.Element=Ds,dn.elements=no,dn.Interaction=Ee,dn.layouts=ni,dn.platforms=hs,dn.Scale=Bs,dn.Ticks=Os,Object.assign(dn,Rn,_a,no,Uo,hs),dn.Chart=dn,"undefined"!=typeof window&&(window.Chart=dn),dn}));

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
typeof navigator === "object" && (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Plyr', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Plyr = factory());
})(this, (function () { 'use strict';

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
  }

  function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function ownKeys(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _objectSpread2(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
        _defineProperty(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var defaults$1 = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function matches$1(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  function trigger(e, t) {
    if (e && t) {
      var n = new Event(t, {
        bubbles: !0
      });
      e.dispatchEvent(n);
    }
  }

  var getConstructor$1 = function (e) {
    return null != e ? e.constructor : null;
  },
      instanceOf$1 = function (e, t) {
    return !!(e && t && e instanceof t);
  },
      isNullOrUndefined$1 = function (e) {
    return null == e;
  },
      isObject$1 = function (e) {
    return getConstructor$1(e) === Object;
  },
      isNumber$1 = function (e) {
    return getConstructor$1(e) === Number && !Number.isNaN(e);
  },
      isString$1 = function (e) {
    return getConstructor$1(e) === String;
  },
      isBoolean$1 = function (e) {
    return getConstructor$1(e) === Boolean;
  },
      isFunction$1 = function (e) {
    return getConstructor$1(e) === Function;
  },
      isArray$1 = function (e) {
    return Array.isArray(e);
  },
      isNodeList$1 = function (e) {
    return instanceOf$1(e, NodeList);
  },
      isElement$1 = function (e) {
    return instanceOf$1(e, Element);
  },
      isEvent$1 = function (e) {
    return instanceOf$1(e, Event);
  },
      isEmpty$1 = function (e) {
    return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
  },
      is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    nodeList: isNodeList$1,
    element: isElement$1,
    event: isEvent$1,
    empty: isEmpty$1
  };

  function getDecimalPlaces(e) {
    var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }

  function round(e, t) {
    if (1 > t) {
      var n = getDecimalPlaces(t);
      return parseFloat(e.toFixed(n));
    }

    return Math.round(e / t) * t;
  }

  var RangeTouch = function () {
    function e(t, n) {
      _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n), this.init());
    }

    return _createClass(e, [{
      key: "init",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function (e) {
        var t = this,
            n = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[n](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function (t) {
        if (!e.enabled || !is$1.event(t)) return null;
        var n,
            r = t.target,
            i = t.changedTouches[0],
            o = parseFloat(r.getAttribute("min")) || 0,
            s = parseFloat(r.getAttribute("max")) || 100,
            u = parseFloat(r.getAttribute("step")) || 1,
            c = r.getBoundingClientRect(),
            a = 100 / c.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * a : 50 < n && (n += 2 * (n - 50) * a), o + round(n / 100 * (s - o), u);
      }
    }, {
      key: "set",
      value: function (t) {
        e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function (t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = null;
        if (is$1.empty(t) || is$1.string(t) ? r = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? r = [t] : is$1.nodeList(t) ? r = Array.from(t) : is$1.array(t) && (r = t.filter(is$1.element)), is$1.empty(r)) return null;

        var i = _objectSpread2({}, defaults$1, {}, n);

        if (is$1.string(t) && i.watch) {
          var o = new MutationObserver(function (n) {
            Array.from(n).forEach(function (n) {
              Array.from(n.addedNodes).forEach(function (n) {
                is$1.element(n) && matches$1(n, t) && new e(n, i);
              });
            });
          });
          o.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }

        return r.map(function (t) {
          return new e(t, n);
        });
      }
    }, {
      key: "enabled",
      get: function () {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }();

  // ==========================================================================
  // Type checking utils
  // ==========================================================================
  const getConstructor = input => input !== null && typeof input !== 'undefined' ? input.constructor : null;

  const instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);

  const isNullOrUndefined = input => input === null || typeof input === 'undefined';

  const isObject = input => getConstructor(input) === Object;

  const isNumber = input => getConstructor(input) === Number && !Number.isNaN(input);

  const isString = input => getConstructor(input) === String;

  const isBoolean = input => getConstructor(input) === Boolean;

  const isFunction = input => getConstructor(input) === Function;

  const isArray = input => Array.isArray(input);

  const isWeakMap = input => instanceOf(input, WeakMap);

  const isNodeList = input => instanceOf(input, NodeList);

  const isTextNode = input => getConstructor(input) === Text;

  const isEvent = input => instanceOf(input, Event);

  const isKeyboardEvent = input => instanceOf(input, KeyboardEvent);

  const isCue = input => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);

  const isTrack = input => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);

  const isPromise = input => instanceOf(input, Promise) && isFunction(input.then);

  const isElement = input => input !== null && typeof input === 'object' && input.nodeType === 1 && typeof input.style === 'object' && typeof input.ownerDocument === 'object';

  const isEmpty = input => isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;

  const isUrl = input => {
    // Accept a URL object
    if (instanceOf(input, window.URL)) {
      return true;
    } // Must be string from here


    if (!isString(input)) {
      return false;
    } // Add the protocol if required


    let string = input;

    if (!input.startsWith('http://') || !input.startsWith('https://')) {
      string = `http://${input}`;
    }

    try {
      return !isEmpty(new URL(string).hostname);
    } catch (_) {
      return false;
    }
  };

  var is = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };

  // ==========================================================================
  const transitionEndEvent = (() => {
    const element = document.createElement('span');
    const events = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    const type = Object.keys(events).find(event => element.style[event] !== undefined);
    return is.string(type) ? events[type] : false;
  })(); // Force repaint of element

  function repaint(element, delay) {
    setTimeout(() => {
      try {
        // eslint-disable-next-line no-param-reassign
        element.hidden = true; // eslint-disable-next-line no-unused-expressions

        element.offsetHeight; // eslint-disable-next-line no-param-reassign

        element.hidden = false;
      } catch (_) {// Do nothing
      }
    }, delay);
  }

  // ==========================================================================
  // Browser sniffing
  // Unfortunately, due to mixed support, UA sniffing is required
  // ==========================================================================
  const browser = {
    isIE: Boolean(window.document.documentMode),
    isEdge: window.navigator.userAgent.includes('Edge'),
    isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  // ==========================================================================

  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  } // Get a nested value in an object

  function getDeep(object, path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], object);
  } // Deep extend destination object with N more objects

  function extend(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }

    const source = sources.shift();

    if (!is.object(source)) {
      return target;
    }

    Object.keys(source).forEach(key => {
      if (is.object(source[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, {
            [key]: {}
          });
        }

        extend(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    });
    return extend(target, ...sources);
  }

  // ==========================================================================

  function wrap(elements, wrapper) {
    // Convert `elements` to an array, if necessary.
    const targets = elements.length ? elements : [elements]; // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).

    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper; // Cache the current parent and sibling.

      const parent = element.parentNode;
      const sibling = element.nextSibling; // Wrap the element (is automatically removed from its current
      // parent).

      child.appendChild(element); // If the element had a sibling, insert the wrapper before
      // the sibling to maintain the HTML structure; otherwise, just
      // append it to the parent.

      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  } // Set attributes

  function setAttributes(element, attributes) {
    if (!is.element(element) || is.empty(attributes)) {
      return;
    } // Assume null and undefined attributes should be left out,
    // Setting them would otherwise convert them to "null" and "undefined"


    Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  } // Create a DocumentFragment

  function createElement(type, attributes, text) {
    // Create a new <element>
    const element = document.createElement(type); // Set all passed attributes

    if (is.object(attributes)) {
      setAttributes(element, attributes);
    } // Add text node


    if (is.string(text)) {
      element.innerText = text;
    } // Return built element


    return element;
  } // Inaert an element after another

  function insertAfter(element, target) {
    if (!is.element(element) || !is.element(target)) {
      return;
    }

    target.parentNode.insertBefore(element, target.nextSibling);
  } // Insert a DocumentFragment

  function insertElement(type, parent, attributes, text) {
    if (!is.element(parent)) {
      return;
    }

    parent.appendChild(createElement(type, attributes, text));
  } // Remove element(s)

  function removeElement(element) {
    if (is.nodeList(element) || is.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }

    if (!is.element(element) || !is.element(element.parentNode)) {
      return;
    }

    element.parentNode.removeChild(element);
  } // Remove all child elements

  function emptyElement(element) {
    if (!is.element(element)) {
      return;
    }

    let {
      length
    } = element.childNodes;

    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  } // Replace element

  function replaceElement(newChild, oldChild) {
    if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild)) {
      return null;
    }

    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  } // Get an attribute object from a string selector

  function getAttributesFromSelector(sel, existingAttributes) {
    // For example:
    // '.test' to { class: 'test' }
    // '#test' to { id: 'test' }
    // '[data-test="test"]' to { 'data-test': 'test' }
    if (!is.string(sel) || is.empty(sel)) {
      return {};
    }

    const attributes = {};
    const existing = extend({}, existingAttributes);
    sel.split(',').forEach(s => {
      // Remove whitespace
      const selector = s.trim();
      const className = selector.replace('.', '');
      const stripped = selector.replace(/[[\]]/g, ''); // Get the parts and value

      const parts = stripped.split('=');
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, '') : ''; // Get the first character

      const start = selector.charAt(0);

      switch (start) {
        case '.':
          // Add to existing classname
          if (is.string(existing.class)) {
            attributes.class = `${existing.class} ${className}`;
          } else {
            attributes.class = className;
          }

          break;

        case '#':
          // ID selector
          attributes.id = selector.replace('#', '');
          break;

        case '[':
          // Attribute selector
          attributes[key] = value;
          break;
      }
    });
    return extend(existing, attributes);
  } // Toggle hidden

  function toggleHidden(element, hidden) {
    if (!is.element(element)) {
      return;
    }

    let hide = hidden;

    if (!is.boolean(hide)) {
      hide = !element.hidden;
    } // eslint-disable-next-line no-param-reassign


    element.hidden = hide;
  } // Mirror Element.classList.toggle, with IE compatibility for "force" argument

  function toggleClass(element, className, force) {
    if (is.nodeList(element)) {
      return Array.from(element).map(e => toggleClass(e, className, force));
    }

    if (is.element(element)) {
      let method = 'toggle';

      if (typeof force !== 'undefined') {
        method = force ? 'add' : 'remove';
      }

      element.classList[method](className);
      return element.classList.contains(className);
    }

    return false;
  } // Has class name

  function hasClass(element, className) {
    return is.element(element) && element.classList.contains(className);
  } // Element matches selector

  function matches(element, selector) {
    const {
      prototype
    } = Element;

    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }

    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  } // Closest ancestor element matching selector (also tests element itself)

  function closest$1(element, selector) {
    const {
      prototype
    } = Element; // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill

    function closestElement() {
      let el = this;

      do {
        if (matches.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    }

    const method = prototype.closest || closestElement;
    return method.call(element, selector);
  } // Find all elements

  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  } // Find a single element

  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  } // Set focus and tab focus class

  function setFocus(element = null, tabFocus = false) {
    if (!is.element(element)) {
      return;
    } // Set regular focus


    element.focus({
      preventScroll: true
    }); // If we want to mimic keyboard focus via tab

    if (tabFocus) {
      toggleClass(element, this.config.classNames.tabFocus);
    }
  }

  // ==========================================================================

  const defaultCodecs = {
    'audio/ogg': 'vorbis',
    'audio/wav': '1',
    'video/webm': 'vp8, vorbis',
    'video/mp4': 'avc1.42E01E, mp4a.40.2',
    'video/ogg': 'theora'
  }; // Check for feature support

  const support = {
    // Basic support
    audio: 'canPlayType' in document.createElement('audio'),
    video: 'canPlayType' in document.createElement('video'),

    // Check for support
    // Basic functionality vs full UI
    check(type, provider, playsinline) {
      const canPlayInline = browser.isIPhone && playsinline && support.playsinline;
      const api = support[type] || provider !== 'html5';
      const ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);
      return {
        api,
        ui
      };
    },

    // Picture-in-picture support
    // Safari & Chrome only currently
    pip: (() => {
      if (browser.isIPhone) {
        return false;
      } // Safari
      // https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls


      if (is.function(createElement('video').webkitSetPresentationMode)) {
        return true;
      } // Chrome
      // https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture


      if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
        return true;
      }

      return false;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: 'playsInline' in document.createElement('video'),

    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is.empty(input)) {
        return false;
      }

      const [mediaType] = input.split('/');
      let type = input; // Verify we're using HTML5 and there's no media type mismatch

      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      } // Add codec if required


      if (Object.keys(defaultCodecs).includes(type)) {
        type += `; codecs="${defaultCodecs[input]}"`;
      }

      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
      } catch (_) {
        return false;
      }
    },

    // Check for textTracks support
    textTracks: 'textTracks' in document.createElement('video'),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement('input');
      range.type = 'range';
      return range.type === 'range';
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: 'ontouchstart' in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
  };

  // ==========================================================================
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // https://www.youtube.com/watch?v=NPM6172J22g

  const supportsPassiveListeners = (() => {
    // Test via a getter in the options object to see if the passive property is accessed
    let supported = false;

    try {
      const options = Object.defineProperty({}, 'passive', {
        get() {
          supported = true;
          return null;
        }

      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (_) {// Do nothing
    }

    return supported;
  })(); // Toggle event listener


  function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
    // Bail if no element, event, or callback
    if (!element || !('addEventListener' in element) || is.empty(event) || !is.function(callback)) {
      return;
    } // Allow multiple events


    const events = event.split(' '); // Build options
    // Default to just the capture boolean for browsers with no passive listener support

    let options = capture; // If passive events listeners are supported

    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    } // If a single node is passed, bind the event listener


    events.forEach(type => {
      if (this && this.eventListeners && toggle) {
        // Cache event listener
        this.eventListeners.push({
          element,
          type,
          callback,
          options
        });
      }

      element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
    });
  } // Bind event handler

  function on(element, events = '', callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, true, passive, capture);
  } // Unbind event handler

  function off(element, events = '', callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, false, passive, capture);
  } // Bind once-only event handler

  function once(element, events = '', callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events, onceCallback, passive, capture);
      callback.apply(this, args);
    };

    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  } // Trigger event

  function triggerEvent(element, type = '', bubbles = false, detail = {}) {
    // Bail if no element
    if (!is.element(element) || is.empty(type)) {
      return;
    } // Create and dispatch the event


    const event = new CustomEvent(type, {
      bubbles,
      detail: { ...detail,
        plyr: this
      }
    }); // Dispatch the event

    element.dispatchEvent(event);
  } // Unbind all cached event listeners

  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach(item => {
        const {
          element,
          type,
          callback,
          options
        } = item;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  } // Run method when / if player is ready

  function ready() {
    return new Promise(resolve => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, 'ready', resolve)).then(() => {});
  }

  /**
   * Silence a Promise-like object.
   * This is useful for avoiding non-harmful, but potentially confusing "uncaught
   * play promise" rejection error messages.
   * @param  {Object} value An object that may or may not be `Promise`-like.
   */

  function silencePromise(value) {
    if (is.promise(value)) {
      value.then(null, () => {});
    }
  }

  // ==========================================================================

  function dedupe(array) {
    if (!is.array(array)) {
      return array;
    }

    return array.filter((item, index) => array.indexOf(item) === index);
  } // Get the closest value in an array

  function closest(array, value) {
    if (!is.array(array) || !array.length) {
      return null;
    }

    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }

  // ==========================================================================

  function supportsCSS(declaration) {
    if (!window || !window.CSS) {
      return false;
    }

    return window.CSS.supports(declaration);
  } // Standard/common aspect ratios

  const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x, y]) => ({ ...out,
    [x / y]: [x, y]
  }), {}); // Validate an aspect ratio

  function validateAspectRatio(input) {
    if (!is.array(input) && (!is.string(input) || !input.includes(':'))) {
      return false;
    }

    const ratio = is.array(input) ? input : input.split(':');
    return ratio.map(Number).every(is.number);
  } // Reduce an aspect ratio to it's lowest form

  function reduceAspectRatio(ratio) {
    if (!is.array(ratio) || !ratio.every(is.number)) {
      return null;
    }

    const [width, height] = ratio;

    const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);

    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  } // Calculate an aspect ratio

  function getAspectRatio(input) {
    const parse = ratio => validateAspectRatio(ratio) ? ratio.split(':').map(Number) : null; // Try provided ratio


    let ratio = parse(input); // Get from config

    if (ratio === null) {
      ratio = parse(this.config.ratio);
    } // Get from embed


    if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
      ({
        ratio
      } = this.embed);
    } // Get from HTML5 video


    if (ratio === null && this.isHTML5) {
      const {
        videoWidth,
        videoHeight
      } = this.media;
      ratio = [videoWidth, videoHeight];
    }

    return reduceAspectRatio(ratio);
  } // Set aspect ratio for responsive container

  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }

    const {
      wrapper
    } = this.elements;
    const ratio = getAspectRatio.call(this, input);

    if (!is.array(ratio)) {
      return {};
    }

    const [x, y] = reduceAspectRatio(ratio);
    const useNative = supportsCSS(`aspect-ratio: ${x}/${y}`);
    const padding = 100 / x * y;

    if (useNative) {
      wrapper.style.aspectRatio = `${x}/${y}`;
    } else {
      wrapper.style.paddingBottom = `${padding}%`;
    } // For Vimeo we have an extra <div> to hide the standard controls and UI


    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);

      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = `translateY(-${offset}%)`;
      }
    } else if (this.isHTML5) {
      wrapper.classList.add(this.config.classNames.videoFixedRatio);
    }

    return {
      padding,
      ratio
    };
  } // Round an aspect ratio to closest standard ratio

  function roundAspectRatio(x, y, tolerance = 0.05) {
    const ratio = x / y;
    const closestRatio = closest(Object.keys(standardRatios), ratio); // Check match is within tolerance

    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    } // No match


    return [x, y];
  } // Get the size of the viewport
  // https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions

  function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [width, height];
  }

  // ==========================================================================
  const html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }

      const sources = Array.from(this.media.querySelectorAll('source')); // Filter out unsupported sources (if type is specified)

      return sources.filter(source => {
        const type = source.getAttribute('type');

        if (is.empty(type)) {
          return true;
        }

        return support.mime.call(this, type);
      });
    },

    // Get quality levels
    getQualityOptions() {
      // Whether we're forcing all options (e.g. for streaming)
      if (this.config.quality.forced) {
        return this.config.quality.options;
      } // Get sizes from <source> elements


      return html5.getSources.call(this).map(source => Number(source.getAttribute('size'))).filter(Boolean);
    },

    setup() {
      if (!this.isHTML5) {
        return;
      }

      const player = this; // Set speed options from config

      player.options.speed = player.config.speed.options; // Set aspect ratio if fixed

      if (!is.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      } // Quality


      Object.defineProperty(player.media, 'quality', {
        get() {
          // Get sources
          const sources = html5.getSources.call(player);
          const source = sources.find(s => s.getAttribute('src') === player.source); // Return size, if match is found

          return source && Number(source.getAttribute('size'));
        },

        set(input) {
          if (player.quality === input) {
            return;
          } // If we're using an external handler...


          if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            // Get sources
            const sources = html5.getSources.call(player); // Get first match for requested size

            const source = sources.find(s => Number(s.getAttribute('size')) === input); // No matching source found

            if (!source) {
              return;
            } // Get current state


            const {
              currentTime,
              paused,
              preload,
              readyState,
              playbackRate
            } = player.media; // Set new source

            player.media.src = source.getAttribute('src'); // Prevent loading if preload="none" and the current source isn't loaded (#1044)

            if (preload !== 'none' || readyState) {
              // Restore time
              player.once('loadedmetadata', () => {
                player.speed = playbackRate;
                player.currentTime = currentTime; // Resume playing

                if (!paused) {
                  silencePromise(player.play());
                }
              }); // Load new source

              player.media.load();
            }
          } // Trigger change event


          triggerEvent.call(player, player.media, 'qualitychange', false, {
            quality: input
          });
        }

      });
    },

    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      } // Remove child sources


      removeElement(html5.getSources.call(this)); // Set blank video src attribute
      // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
      // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection

      this.media.setAttribute('src', this.config.blankVideo); // Load the new empty source
      // This will cancel existing requests
      // See https://github.com/sampotts/plyr/issues/174

      this.media.load(); // Debugging

      this.debug.log('Cancelled network requests');
    }

  };

  // ==========================================================================

  function generateId(prefix) {
    return `${prefix}-${Math.floor(Math.random() * 10000)}`;
  } // Format string

  function format(input, ...args) {
    if (is.empty(input)) {
      return input;
    }

    return input.toString().replace(/{(\d+)}/g, (match, i) => args[i].toString());
  } // Get percentage

  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }

    return (current / max * 100).toFixed(2);
  } // Replace all occurances of a string in a string

  const replaceAll = (input = '', find = '', replace = '') => input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString()); // Convert to title case

  const toTitleCase = (input = '') => input.toString().replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()); // Convert string to pascalCase

  function toPascalCase(input = '') {
    let string = input.toString(); // Convert kebab case

    string = replaceAll(string, '-', ' '); // Convert snake case

    string = replaceAll(string, '_', ' '); // Convert to title case

    string = toTitleCase(string); // Convert to pascal case

    return replaceAll(string, ' ', '');
  } // Convert string to pascalCase

  function toCamelCase(input = '') {
    let string = input.toString(); // Convert to pascal case

    string = toPascalCase(string); // Convert first character to lowercase

    return string.charAt(0).toLowerCase() + string.slice(1);
  } // Remove HTML from a string

  function stripHTML(source) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('div');
    fragment.appendChild(element);
    element.innerHTML = source;
    return fragment.firstChild.innerText;
  } // Like outerHTML, but also works for DocumentFragment

  function getHTML(element) {
    const wrapper = document.createElement('div');
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  // ==========================================================================

  const resources = {
    pip: 'PIP',
    airplay: 'AirPlay',
    html5: 'HTML5',
    vimeo: 'Vimeo',
    youtube: 'YouTube'
  };
  const i18n = {
    get(key = '', config = {}) {
      if (is.empty(key) || is.empty(config)) {
        return '';
      }

      let string = getDeep(config.i18n, key);

      if (is.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }

        return '';
      }

      const replace = {
        '{seektime}': config.seekTime,
        '{title}': config.title
      };
      Object.entries(replace).forEach(([k, v]) => {
        string = replaceAll(string, k, v);
      });
      return string;
    }

  };

  class Storage {
    constructor(player) {
      _defineProperty$1(this, "get", key => {
        if (!Storage.supported || !this.enabled) {
          return null;
        }

        const store = window.localStorage.getItem(this.key);

        if (is.empty(store)) {
          return null;
        }

        const json = JSON.parse(store);
        return is.string(key) && key.length ? json[key] : json;
      });

      _defineProperty$1(this, "set", object => {
        // Bail if we don't have localStorage support or it's disabled
        if (!Storage.supported || !this.enabled) {
          return;
        } // Can only store objectst


        if (!is.object(object)) {
          return;
        } // Get current storage


        let storage = this.get(); // Default to empty object

        if (is.empty(storage)) {
          storage = {};
        } // Update the working copy of the values


        extend(storage, object); // Update storage

        try {
          window.localStorage.setItem(this.key, JSON.stringify(storage));
        } catch (_) {// Do nothing
        }
      });

      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    } // Check for actual support (see if we can use it)


    static get supported() {
      try {
        if (!('localStorage' in window)) {
          return false;
        }

        const test = '___test'; // Try to use it (it might be disabled, e.g. user is in private mode)
        // see: https://github.com/sampotts/plyr/issues/131

        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch (_) {
        return false;
      }
    }

  }

  // ==========================================================================
  // Fetch wrapper
  // Using XHR to avoid issues with older browsers
  // ==========================================================================
  function fetch(url, responseType = 'text') {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest(); // Check for CORS support

        if (!('withCredentials' in request)) {
          return;
        }

        request.addEventListener('load', () => {
          if (responseType === 'text') {
            try {
              resolve(JSON.parse(request.responseText));
            } catch (_) {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener('error', () => {
          throw new Error(request.status);
        });
        request.open('GET', url, true); // Set the required response type

        request.responseType = responseType;
        request.send();
      } catch (error) {
        reject(error);
      }
    });
  }

  // ==========================================================================

  function loadSprite(url, id) {
    if (!is.string(url)) {
      return;
    }

    const prefix = 'cache';
    const hasId = is.string(id);
    let isCached = false;

    const exists = () => document.getElementById(id) !== null;

    const update = (container, data) => {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = data; // Check again incase of race condition

      if (hasId && exists()) {
        return;
      } // Inject the SVG to the body


      document.body.insertAdjacentElement('afterbegin', container);
    }; // Only load once if ID set


    if (!hasId || !exists()) {
      const useStorage = Storage.supported; // Create container

      const container = document.createElement('div');
      container.setAttribute('hidden', '');

      if (hasId) {
        container.setAttribute('id', id);
      } // Check in cache


      if (useStorage) {
        const cached = window.localStorage.getItem(`${prefix}-${id}`);
        isCached = cached !== null;

        if (isCached) {
          const data = JSON.parse(cached);
          update(container, data.content);
        }
      } // Get the sprite


      fetch(url).then(result => {
        if (is.empty(result)) {
          return;
        }

        if (useStorage) {
          try {
            window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
              content: result
            }));
          } catch (_) {// Do nothing
          }
        }

        update(container, result);
      }).catch(() => {});
    }
  }

  // ==========================================================================

  const getHours = value => Math.trunc(value / 60 / 60 % 60, 10);
  const getMinutes = value => Math.trunc(value / 60 % 60, 10);
  const getSeconds = value => Math.trunc(value % 60, 10); // Format time to UI friendly string

  function formatTime(time = 0, displayHours = false, inverted = false) {
    // Bail if the value isn't a number
    if (!is.number(time)) {
      return formatTime(undefined, displayHours, inverted);
    } // Format time component to add leading zero


    const format = value => `0${value}`.slice(-2); // Breakdown to hours, mins, secs


    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time); // Do we need to display hours?

    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = '';
    } // Render


    return `${inverted && time > 0 ? '-' : ''}${hours}${format(mins)}:${format(secs)}`;
  }

  // ==========================================================================

  const controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const host = window.location.host ? window.location.host : window.top.location.host;
      const cors = url.host !== host || browser.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },

    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper); // Buttons

        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        }; // Progress

        this.elements.progress = getElement.call(this, this.config.selectors.progress); // Inputs

        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        }; // Display

        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        }; // Seek tooltip

        if (is.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
        }

        return true;
      } catch (error) {
        // Log it
        this.debug.warn('It looks like there is a problem with your custom controls HTML', error); // Restore native video controls

        this.toggleNativeControls(true);
        return false;
      }
    },

    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = 'http://www.w3.org/2000/svg';
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = `${!iconUrl.cors ? iconUrl.url : ''}#${this.config.iconPrefix}`; // Create <svg>

      const icon = document.createElementNS(namespace, 'svg');
      setAttributes(icon, extend(attributes, {
        'aria-hidden': 'true',
        focusable: 'false'
      })); // Create the <use> to reference sprite

      const use = document.createElementNS(namespace, 'use');
      const path = `${iconPath}-${type}`; // Set `href` attributes
      // https://github.com/sampotts/plyr/issues/460
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href

      if ('href' in use) {
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
      } // Always set the older attribute even though it's "deprecated" (it'll be around for ages)


      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path); // Add <use> to <svg>

      icon.appendChild(use);
      return icon;
    },

    // Create hidden text label
    createLabel(key, attr = {}) {
      const text = i18n.get(key, this.config);
      const attributes = { ...attr,
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
      };
      return createElement('span', attributes, text);
    },

    // Create a badge
    createBadge(text) {
      if (is.empty(text)) {
        return null;
      }

      const badge = createElement('span', {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement('span', {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },

    // Create a <button>
    createButton(buttonType, attr) {
      const attributes = extend({}, attr);
      let type = toCamelCase(buttonType);
      const props = {
        element: 'button',
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ['element', 'icon', 'label'].forEach(key => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      }); // Default to 'button' type to prevent form submission

      if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
        attributes.type = 'button';
      } // Set class name


      if (Object.keys(attributes).includes('class')) {
        if (!attributes.class.split(' ').some(c => c === this.config.classNames.control)) {
          extend(attributes, {
            class: `${attributes.class} ${this.config.classNames.control}`
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      } // Large play button


      switch (buttonType) {
        case 'play':
          props.toggle = true;
          props.label = 'play';
          props.labelPressed = 'pause';
          props.icon = 'play';
          props.iconPressed = 'pause';
          break;

        case 'mute':
          props.toggle = true;
          props.label = 'mute';
          props.labelPressed = 'unmute';
          props.icon = 'volume';
          props.iconPressed = 'muted';
          break;

        case 'captions':
          props.toggle = true;
          props.label = 'enableCaptions';
          props.labelPressed = 'disableCaptions';
          props.icon = 'captions-off';
          props.iconPressed = 'captions-on';
          break;

        case 'fullscreen':
          props.toggle = true;
          props.label = 'enterFullscreen';
          props.labelPressed = 'exitFullscreen';
          props.icon = 'enter-fullscreen';
          props.iconPressed = 'exit-fullscreen';
          break;

        case 'play-large':
          attributes.class += ` ${this.config.classNames.control}--overlaid`;
          type = 'play';
          props.label = 'play';
          props.icon = 'play';
          break;

        default:
          if (is.empty(props.label)) {
            props.label = type;
          }

          if (is.empty(props.icon)) {
            props.icon = buttonType;
          }

      }

      const button = createElement(props.element); // Setup toggle icon and labels

      if (props.toggle) {
        // Icon
        button.appendChild(controls.createIcon.call(this, props.iconPressed, {
          class: 'icon--pressed'
        }));
        button.appendChild(controls.createIcon.call(this, props.icon, {
          class: 'icon--not-pressed'
        })); // Label/Tooltip

        button.appendChild(controls.createLabel.call(this, props.labelPressed, {
          class: 'label--pressed'
        }));
        button.appendChild(controls.createLabel.call(this, props.label, {
          class: 'label--not-pressed'
        }));
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      } // Merge and set attributes


      extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes); // We have multiple play buttons

      if (type === 'play') {
        if (!is.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }

        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }

      return button;
    },

    // Create an <input type='range'>
    createRange(type, attributes) {
      // Seek input
      const input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
        type: 'range',
        min: 0,
        max: 100,
        step: 0.01,
        value: 0,
        autocomplete: 'off',
        // A11y fixes for https://github.com/sampotts/plyr/issues/905
        role: 'slider',
        'aria-label': i18n.get(type, this.config),
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': 0
      }, attributes));
      this.elements.inputs[type] = input; // Set the fill for webkit now

      controls.updateRangeFill.call(this, input); // Improve support on touch devices

      RangeTouch.setup(input);
      return input;
    },

    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
        min: 0,
        max: 100,
        value: 0,
        role: 'progressbar',
        'aria-hidden': true
      }, attributes)); // Create the label inside

      if (type !== 'volume') {
        progress.appendChild(createElement('span', null, '0'));
        const suffixKey = {
          played: 'played',
          buffer: 'buffered'
        }[type];
        const suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
        progress.innerText = `% ${suffix.toLowerCase()}`;
      }

      this.elements.display[type] = progress;
      return progress;
    },

    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement('div', extend(attributes, {
        class: `${attributes.class ? attributes.class : ''} ${this.config.classNames.display.time} `.trim(),
        'aria-label': i18n.get(type, this.config)
      }), '00:00'); // Reference for updates

      this.elements.display[type] = container;
      return container;
    },

    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      // Navigate through menus via arrow keys and space
      on.call(this, menuItem, 'keydown keyup', event => {
        // We only care about space and ⬆️ ⬇️️ ➡️
        if (![32, 38, 39, 40].includes(event.which)) {
          return;
        } // Prevent play / seek


        event.preventDefault();
        event.stopPropagation(); // We're just here to prevent the keydown bubbling

        if (event.type === 'keydown') {
          return;
        }

        const isRadioButton = matches(menuItem, '[role="menuitemradio"]'); // Show the respective menu

        if (!isRadioButton && [32, 39].includes(event.which)) {
          controls.showMenuPanel.call(this, type, true);
        } else {
          let target;

          if (event.which !== 32) {
            if (event.which === 40 || isRadioButton && event.which === 39) {
              target = menuItem.nextElementSibling;

              if (!is.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;

              if (!is.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }

            setFocus.call(this, target, true);
          }
        }
      }, false); // Enter will fire a `click` event but we still need to manage focus
      // So we bind to keyup which fires after and set focus here

      on.call(this, menuItem, 'keyup', event => {
        if (event.which !== 13) {
          return;
        }

        controls.focusFirstMenuItem.call(this, null, true);
      });
    },

    // Create a settings menu item
    createMenuItem({
      value,
      list,
      type,
      title,
      badge = null,
      checked = false
    }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement('button', extend(attributes, {
        type: 'button',
        role: 'menuitemradio',
        class: `${this.config.classNames.control} ${attributes.class ? attributes.class : ''}`.trim(),
        'aria-checked': checked,
        value
      }));
      const flex = createElement('span'); // We have to set as HTML incase of special characters

      flex.innerHTML = title;

      if (is.element(badge)) {
        flex.appendChild(badge);
      }

      menuItem.appendChild(flex); // Replicate radio button behaviour

      Object.defineProperty(menuItem, 'checked', {
        enumerable: true,

        get() {
          return menuItem.getAttribute('aria-checked') === 'true';
        },

        set(check) {
          // Ensure exclusivity
          if (check) {
            Array.from(menuItem.parentNode.children).filter(node => matches(node, '[role="menuitemradio"]')).forEach(node => node.setAttribute('aria-checked', 'false'));
          }

          menuItem.setAttribute('aria-checked', check ? 'true' : 'false');
        }

      });
      this.listeners.bind(menuItem, 'click keyup', event => {
        if (is.keyboardEvent(event) && event.which !== 32) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        menuItem.checked = true;

        switch (type) {
          case 'language':
            this.currentTrack = Number(value);
            break;

          case 'quality':
            this.quality = value;
            break;

          case 'speed':
            this.speed = parseFloat(value);
            break;
        }

        controls.showMenuPanel.call(this, 'home', is.keyboardEvent(event));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },

    // Format a time for display
    formatTime(time = 0, inverted = false) {
      // Bail if the value isn't a number
      if (!is.number(time)) {
        return time;
      } // Always display hours if duration is over an hour


      const forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },

    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      // Bail if there's no element to display or the value isn't a number
      if (!is.element(target) || !is.number(time)) {
        return;
      } // eslint-disable-next-line no-param-reassign


      target.innerText = controls.formatTime(time, inverted);
    },

    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      } // Update range


      if (is.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      } // Update mute state


      if (is.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },

    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is.element(target)) {
        return;
      } // eslint-disable-next-line


      target.value = value; // Webkit range fill

      controls.updateRangeFill.call(this, target);
    },

    // Update <progress> elements
    updateProgress(event) {
      if (!this.supported.ui || !is.event(event)) {
        return;
      }

      let value = 0;

      const setProgress = (target, input) => {
        const val = is.number(input) ? input : 0;
        const progress = is.element(target) ? target : this.elements.display.buffer; // Update value and label

        if (is.element(progress)) {
          progress.value = val; // Update text label inside

          const label = progress.getElementsByTagName('span')[0];

          if (is.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };

      if (event) {
        switch (event.type) {
          // Video playing
          case 'timeupdate':
          case 'seeking':
          case 'seeked':
            value = getPercentage(this.currentTime, this.duration); // Set seek range value only if it's a 'natural' time event

            if (event.type === 'timeupdate') {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }

            break;
          // Check buffer status

          case 'playing':
          case 'progress':
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
        }
      }
    },

    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      // Get range from event if event passed
      const range = is.event(target) ? target.target : target; // Needs to be a valid <input type='range'>

      if (!is.element(range) || range.getAttribute('type') !== 'range') {
        return;
      } // Set aria values for https://github.com/sampotts/plyr/issues/905


      if (matches(range, this.config.selectors.inputs.seek)) {
        range.setAttribute('aria-valuenow', this.currentTime);
        const currentTime = controls.formatTime(this.currentTime);
        const duration = controls.formatTime(this.duration);
        const format = i18n.get('seekLabel', this.config);
        range.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
      } else if (matches(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute('aria-valuenow', percent);
        range.setAttribute('aria-valuetext', `${percent.toFixed(1)}%`);
      } else {
        range.setAttribute('aria-valuenow', range.value);
      } // WebKit only


      if (!browser.isWebkit) {
        return;
      } // Set CSS custom property


      range.style.setProperty('--value', `${range.value / range.max * 100}%`);
    },

    // Update hover tooltip for seeking
    updateSeekTooltip(event) {
      // Bail if setting not true
      if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }

      const visible = `${this.config.classNames.tooltip}--visible`;

      const toggle = show => toggleClass(this.elements.display.seekTooltip, visible, show); // Hide on touch


      if (this.touch) {
        toggle(false);
        return;
      } // Determine percentage, if already visible


      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();

      if (is.event(event)) {
        percent = 100 / clientRect.width * (event.pageX - clientRect.left);
      } else if (hasClass(this.elements.display.seekTooltip, visible)) {
        percent = parseFloat(this.elements.display.seekTooltip.style.left, 10);
      } else {
        return;
      } // Set bounds


      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      } // Display the time a click would seek to


      controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * percent); // Set position

      this.elements.display.seekTooltip.style.left = `${percent}%`; // Show/hide the tooltip
      // If the event is a moues in/out and percentage is inside bounds

      if (is.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
        toggle(event.type === 'mouseenter');
      }
    },

    // Handle time change event
    timeUpdate(event) {
      // Only invert if only one time element is displayed and used for both duration and currentTime
      const invert = !is.element(this.elements.display.duration) && this.config.invertTime; // Duration

      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert); // Ignore updates while seeking

      if (event && event.type === 'timeupdate' && this.media.seeking) {
        return;
      } // Playing progress


      controls.updateProgress.call(this, event);
    },

    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      // Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      } // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
      // https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
      // https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
      // https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338


      if (this.duration >= 2 ** 32) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      } // Update ARIA values


      if (is.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
      } // If there's a spot to display duration


      const hasDuration = is.element(this.elements.display.duration); // If there's only one time display, display duration there

      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      } // If there's a duration element, update content


      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      } // Update the tooltip (if visible)


      controls.updateSeekTooltip.call(this);
    },

    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },

    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;

      if (setting === 'captions') {
        value = this.currentTrack;
      } else {
        value = !is.empty(input) ? input : this[setting]; // Get default

        if (is.empty(value)) {
          value = this.config[setting].default;
        } // Unsupported value


        if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
          return;
        } // Disabled value


        if (!this.config[setting].options.includes(value)) {
          this.debug.warn(`Disabled value of '${value}' for ${setting}`);
          return;
        }
      } // Get the list if we need to


      if (!is.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      } // If there's no list it means it's not been rendered...


      if (!is.element(list)) {
        return;
      } // Update the label


      const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
      label.innerHTML = controls.getLabel.call(this, setting, value); // Find the radio option and check it

      const target = list && list.querySelector(`[value="${value}"]`);

      if (is.element(target)) {
        target.checked = true;
      }
    },

    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case 'speed':
          return value === 1 ? i18n.get('normal', this.config) : `${value}&times;`;

        case 'quality':
          if (is.number(value)) {
            const label = i18n.get(`qualityLabel.${value}`, this.config);

            if (!label.length) {
              return `${value}p`;
            }

            return label;
          }

          return toTitleCase(value);

        case 'captions':
          return captions.getLabel.call(this);

        default:
          return null;
      }
    },

    // Set the quality menu
    setQualityMenu(options) {
      // Menu required
      if (!is.element(this.elements.settings.panels.quality)) {
        return;
      }

      const type = 'quality';
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]'); // Set options if passed and filter based on uniqueness and config

      if (is.array(options)) {
        this.options.quality = dedupe(options).filter(quality => this.config.quality.options.includes(quality));
      } // Toggle the pane and tab


      const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Get the badge HTML for HD, 4K etc


      const getBadge = quality => {
        const label = i18n.get(`qualityBadge.${quality}`, this.config);

        if (!label.length) {
          return null;
        }

        return controls.createBadge.call(this, label);
      }; // Sort options by the config and then render options


      this.options.quality.sort((a, b) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach(quality => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, 'quality', quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },

    // Set the looping options

    /* setLoopMenu() {
          // Menu required
          if (!is.element(this.elements.settings.panels.loop)) {
              return;
          }
           const options = ['start', 'end', 'all', 'reset'];
          const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
           // Show the pane and tab
          toggleHidden(this.elements.settings.buttons.loop, false);
          toggleHidden(this.elements.settings.panels.loop, false);
           // Toggle the pane and tab
          const toggle = !is.empty(this.loop.options);
          controls.toggleMenuButton.call(this, 'loop', toggle);
           // Empty the menu
          emptyElement(list);
           options.forEach(option => {
              const item = createElement('li');
               const button = createElement(
                  'button',
                  extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                      type: 'button',
                      class: this.config.classNames.control,
                      'data-plyr-loop-action': option,
                  }),
                  i18n.get(option, this.config)
              );
               if (['start', 'end'].includes(option)) {
                  const badge = controls.createBadge.call(this, '00:00');
                  button.appendChild(badge);
              }
               item.appendChild(button);
              list.appendChild(item);
          });
      }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      // Menu required
      if (!is.element(this.elements.settings.panels.captions)) {
        return;
      } // TODO: Captions or language? Currently it's mixed


      const type = 'captions';
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions.getTracks.call(this);
      const toggle = Boolean(tracks.length); // Toggle the pane and tab

      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If there's no captions, bail

      if (!toggle) {
        return;
      } // Generate options data


      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: 'language'
      })); // Add the "Disabled" option to turn off captions

      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get('disabled', this.config),
        list,
        type: 'language'
      }); // Generate options

      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },

    // Set a list of available captions languages
    setSpeedMenu() {
      // Menu required
      if (!is.element(this.elements.settings.panels.speed)) {
        return;
      }

      const type = 'speed';
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]'); // Filter out invalid speeds

      this.options.speed = this.options.speed.filter(o => o >= this.minimumSpeed && o <= this.maximumSpeed); // Toggle the pane and tab

      const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Create items


      this.options.speed.forEach(speed => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, 'speed', speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },

    // Check if we need to hide/show the settings menu
    checkMenu() {
      const {
        buttons
      } = this.elements.settings;
      const visible = !is.empty(buttons) && Object.values(buttons).some(button => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },

    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, tabFocus = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }

      let target = pane;

      if (!is.element(target)) {
        target = Object.values(this.elements.settings.panels).find(p => !p.hidden);
      }

      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, tabFocus);
    },

    // Show/hide menu
    toggleMenu(input) {
      const {
        popup
      } = this.elements.settings;
      const button = this.elements.buttons.settings; // Menu and button are required

      if (!is.element(popup) || !is.element(button)) {
        return;
      } // True toggle by default


      const {
        hidden
      } = popup;
      let show = hidden;

      if (is.boolean(input)) {
        show = input;
      } else if (is.keyboardEvent(input) && input.which === 27) {
        show = false;
      } else if (is.event(input)) {
        // If Plyr is in a shadowDOM, the event target is set to the component, instead of the
        // Element in the shadowDOM. The path, if available, is complete.
        const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target); // If the click was inside the menu or if the click
        // wasn't the button or menu item and we're trying to
        // show the menu (a doc click shouldn't show the menu)

        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      } // Set button attributes


      button.setAttribute('aria-expanded', show); // Show the actual popup

      toggleHidden(popup, !show); // Add class hook

      toggleClass(this.elements.container, this.config.classNames.menu.open, show); // Focus the first item if key interaction

      if (show && is.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        // If closing, re-focus the button
        setFocus.call(this, button, is.keyboardEvent(input));
      }
    },

    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.opacity = 0;
      clone.removeAttribute('hidden'); // Append to parent so we get the "real" size

      tab.parentNode.appendChild(clone); // Get the sizes before we remove

      const width = clone.scrollWidth;
      const height = clone.scrollHeight; // Remove from the DOM

      removeElement(clone);
      return {
        width,
        height
      };
    },

    // Show a panel in the menu
    showMenuPanel(type = '', tabFocus = false) {
      const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`); // Nothing to show, bail

      if (!is.element(target)) {
        return;
      } // Hide all other panels


      const container = target.parentNode;
      const current = Array.from(container.children).find(node => !node.hidden); // If we can do fancy animations, we'll animate the height/width

      if (support.transitions && !support.reducedMotion) {
        // Set the current width as a base
        container.style.width = `${current.scrollWidth}px`;
        container.style.height = `${current.scrollHeight}px`; // Get potential sizes

        const size = controls.getMenuSize.call(this, target); // Restore auto height/width

        const restore = event => {
          // We're only bothered about height and width on the container
          if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
            return;
          } // Revert back to auto


          container.style.width = '';
          container.style.height = ''; // Only listen once

          off.call(this, container, transitionEndEvent, restore);
        }; // Listen for the transition finishing and restore auto height/width


        on.call(this, container, transitionEndEvent, restore); // Set dimensions to target

        container.style.width = `${size.width}px`;
        container.style.height = `${size.height}px`;
      } // Set attributes on current tab


      toggleHidden(current, true); // Set attributes on target

      toggleHidden(target, false); // Focus the first item

      controls.focusFirstMenuItem.call(this, target, tabFocus);
    },

    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download; // Bail if no button

      if (!is.element(button)) {
        return;
      } // Set attribute


      button.setAttribute('href', this.download);
    },

    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null; // Larger overlaid play button

      if (is.array(this.config.controls) && this.config.controls.includes('play-large')) {
        this.elements.container.appendChild(createButton.call(this, 'play-large'));
      } // Create the container


      const container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container; // Default item attributes

      const defaultAttributes = {
        class: 'plyr__controls__item'
      }; // Loop through controls in order

      dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach(control => {
        // Restart button
        if (control === 'restart') {
          container.appendChild(createButton.call(this, 'restart', defaultAttributes));
        } // Rewind button


        if (control === 'rewind') {
          container.appendChild(createButton.call(this, 'rewind', defaultAttributes));
        } // Play/Pause button


        if (control === 'play') {
          container.appendChild(createButton.call(this, 'play', defaultAttributes));
        } // Fast forward button


        if (control === 'fast-forward') {
          container.appendChild(createButton.call(this, 'fast-forward', defaultAttributes));
        } // Progress


        if (control === 'progress') {
          const progressContainer = createElement('div', {
            class: `${defaultAttributes.class} plyr__progress__container`
          });
          const progress = createElement('div', getAttributesFromSelector(this.config.selectors.progress)); // Seek range slider

          progress.appendChild(createRange.call(this, 'seek', {
            id: `plyr-seek-${data.id}`
          })); // Buffer progress

          progress.appendChild(createProgress.call(this, 'buffer')); // TODO: Add loop display indicator
          // Seek tooltip

          if (this.config.tooltips.seek) {
            const tooltip = createElement('span', {
              class: this.config.classNames.tooltip
            }, '00:00');
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }

          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        } // Media current time display


        if (control === 'current-time') {
          container.appendChild(createTime.call(this, 'currentTime', defaultAttributes));
        } // Media duration display


        if (control === 'duration') {
          container.appendChild(createTime.call(this, 'duration', defaultAttributes));
        } // Volume controls


        if (control === 'mute' || control === 'volume') {
          let {
            volume
          } = this.elements; // Create the volume container if needed

          if (!is.element(volume) || !container.contains(volume)) {
            volume = createElement('div', extend({}, defaultAttributes, {
              class: `${defaultAttributes.class} plyr__volume`.trim()
            }));
            this.elements.volume = volume;
            container.appendChild(volume);
          } // Toggle mute button


          if (control === 'mute') {
            volume.appendChild(createButton.call(this, 'mute'));
          } // Volume range control
          // Ignored on iOS as it's handled globally
          // https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html


          if (control === 'volume' && !browser.isIos) {
            // Set the attributes
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            }; // Create the volume range slider

            volume.appendChild(createRange.call(this, 'volume', extend(attributes, {
              id: `plyr-volume-${data.id}`
            })));
          }
        } // Toggle captions button


        if (control === 'captions') {
          container.appendChild(createButton.call(this, 'captions', defaultAttributes));
        } // Settings button / menu


        if (control === 'settings' && !is.empty(this.config.settings)) {
          const wrapper = createElement('div', extend({}, defaultAttributes, {
            class: `${defaultAttributes.class} plyr__menu`.trim(),
            hidden: ''
          }));
          wrapper.appendChild(createButton.call(this, 'settings', {
            'aria-haspopup': true,
            'aria-controls': `plyr-settings-${data.id}`,
            'aria-expanded': false
          }));
          const popup = createElement('div', {
            class: 'plyr__menu__container',
            id: `plyr-settings-${data.id}`,
            hidden: ''
          });
          const inner = createElement('div');
          const home = createElement('div', {
            id: `plyr-settings-${data.id}-home`
          }); // Create the menu

          const menu = createElement('div', {
            role: 'menu'
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home; // Build the menu items

          this.config.settings.forEach(type => {
            // TODO: bundle this with the createMenuItem helper and bindings
            const menuItem = createElement('button', extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
              type: 'button',
              class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
              role: 'menuitem',
              'aria-haspopup': true,
              hidden: ''
            })); // Bind menu shortcuts for keyboard users

            bindMenuItemShortcuts.call(this, menuItem, type); // Show menu on click

            on.call(this, menuItem, 'click', () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement('span', null, i18n.get(type, this.config));
            const value = createElement('span', {
              class: this.config.classNames.menu.value
            }); // Speed contains HTML entities

            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem); // Build the panes

            const pane = createElement('div', {
              id: `plyr-settings-${data.id}-${type}`,
              hidden: ''
            }); // Back button

            const backButton = createElement('button', {
              type: 'button',
              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
            }); // Visible label

            backButton.appendChild(createElement('span', {
              'aria-hidden': true
            }, i18n.get(type, this.config))); // Screen reader label

            backButton.appendChild(createElement('span', {
              class: this.config.classNames.hidden
            }, i18n.get('menuBack', this.config))); // Go back via keyboard

            on.call(this, pane, 'keydown', event => {
              // We only care about <-
              if (event.which !== 37) {
                return;
              } // Prevent seek


              event.preventDefault();
              event.stopPropagation(); // Show the respective menu

              showMenuPanel.call(this, 'home', true);
            }, false); // Go back via button click

            on.call(this, backButton, 'click', () => {
              showMenuPanel.call(this, 'home', false);
            }); // Add to pane

            pane.appendChild(backButton); // Menu

            pane.appendChild(createElement('div', {
              role: 'menu'
            }));
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        } // Picture in picture button


        if (control === 'pip' && support.pip) {
          container.appendChild(createButton.call(this, 'pip', defaultAttributes));
        } // Airplay button


        if (control === 'airplay' && support.airplay) {
          container.appendChild(createButton.call(this, 'airplay', defaultAttributes));
        } // Download button


        if (control === 'download') {
          const attributes = extend({}, defaultAttributes, {
            element: 'a',
            href: this.download,
            target: '_blank'
          }); // Set download attribute for HTML5 only

          if (this.isHTML5) {
            attributes.download = '';
          }

          const {
            download
          } = this.config.urls;

          if (!is.url(download) && this.isEmbed) {
            extend(attributes, {
              icon: `logo-${this.provider}`,
              label: this.provider
            });
          }

          container.appendChild(createButton.call(this, 'download', attributes));
        } // Toggle fullscreen button


        if (control === 'fullscreen') {
          container.appendChild(createButton.call(this, 'fullscreen', defaultAttributes));
        }
      }); // Set available quality levels

      if (this.isHTML5) {
        setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }

      setSpeedMenu.call(this);
      return container;
    },

    // Insert controls
    inject() {
      // Sprite
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this); // Only load external sprite using AJAX

        if (icon.cors) {
          loadSprite(icon.url, 'sprite-plyr');
        }
      } // Create a unique ID


      this.id = Math.floor(Math.random() * 10000); // Null by default

      let container = null;
      this.elements.controls = null; // Set template properties

      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update = true; // If function, run it and use output

      if (is.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      } // Convert falsy controls to empty array (primarily for empty strings)


      if (!this.config.controls) {
        this.config.controls = [];
      }

      if (is.element(this.config.controls) || is.string(this.config.controls)) {
        // HTMLElement or Non-empty string passed as the option
        container = this.config.controls;
      } else {
        // Create controls
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions.getLabel.call(this) // TODO: Looping
          // loop: 'None',

        });
        update = false;
      } // Replace props with their value


      const replace = input => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, `{${key}}`, value);
        });
        return result;
      }; // Update markup


      if (update) {
        if (is.string(this.config.controls)) {
          container = replace(container);
        }
      } // Controls container


      let target; // Inject to custom location

      if (is.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      } // Inject into the container by default


      if (!is.element(target)) {
        target = this.elements.container;
      } // Inject controls HTML (needs to be before captions, hence "afterbegin")


      const insertMethod = is.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
      target[insertMethod]('afterbegin', container); // Find the elements if need be

      if (!is.element(this.elements.controls)) {
        controls.findElements.call(this);
      } // Add pressed property to buttons


      if (!is.empty(this.elements.buttons)) {
        const addProperty = button => {
          const className = this.config.classNames.controlPressed;
          Object.defineProperty(button, 'pressed', {
            enumerable: true,

            get() {
              return hasClass(button, className);
            },

            set(pressed = false) {
              toggleClass(button, className, pressed);
            }

          });
        }; // Toggle classname when pressed property is set


        Object.values(this.elements.buttons).filter(Boolean).forEach(button => {
          if (is.array(button) || is.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      } // Edge sometimes doesn't finish the paint so force a repaint


      if (browser.isEdge) {
        repaint(target);
      } // Setup tooltips


      if (this.config.tooltips.controls) {
        const {
          classNames,
          selectors
        } = this.config;
        const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach(label => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    }

  };

  // ==========================================================================
  /**
   * Parse a string to a URL object
   * @param {String} input - the URL to be parsed
   * @param {Boolean} safe - failsafe parsing
   */

  function parseUrl(input, safe = true) {
    let url = input;

    if (safe) {
      const parser = document.createElement('a');
      parser.href = url;
      url = parser.href;
    }

    try {
      return new URL(url);
    } catch (_) {
      return null;
    }
  } // Convert object to URLSearchParams

  function buildUrlParams(input) {
    const params = new URLSearchParams();

    if (is.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }

    return params;
  }

  // ==========================================================================
  const captions = {
    // Setup captions
    setup() {
      // Requires UI support
      if (!this.supported.ui) {
        return;
      } // Only Vimeo and HTML5 video supported at this point


      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
        // Clear menu and hide
        if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
          controls.setCaptionsMenu.call(this);
        }

        return;
      } // Inject the container


      if (!is.element(this.elements.captions)) {
        this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
        insertAfter(this.elements.captions, this.elements.wrapper);
      } // Fix IE captions if CORS is used
      // Fetch captions and inject as blobs instead (data URIs not supported!)


      if (browser.isIE && window.URL) {
        const elements = this.media.querySelectorAll('track');
        Array.from(elements).forEach(track => {
          const src = track.getAttribute('src');
          const url = parseUrl(src);

          if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
            fetch(src, 'blob').then(blob => {
              track.setAttribute('src', window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement(track);
            });
          }
        });
      } // Get and set initial data
      // The "preferred" options are not realized unless / until the wanted language has a match
      // * languages: Array of user's browser languages.
      // * language:  The language preferred by user settings or config
      // * active:    The state preferred by user settings or config
      // * toggled:   The real captions state


      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
      const languages = dedupe(browserLanguages.map(language => language.split('-')[0]));
      let language = (this.storage.get('language') || this.config.captions.language || 'auto').toLowerCase(); // Use first browser language when language is 'auto'

      if (language === 'auto') {
        [language] = languages;
      }

      let active = this.storage.get('captions');

      if (!is.boolean(active)) {
        ({
          active
        } = this.config.captions);
      }

      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      }); // Watch changes to textTracks and update captions menu

      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      } // Update available languages in list next tick (the event must not be triggered before the listeners)


      setTimeout(captions.update.bind(this), 0);
    },

    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true); // Get the wanted language

      const {
        active,
        language,
        meta,
        currentTrackNode
      } = this.captions;
      const languageExists = Boolean(tracks.find(track => track.language === language)); // Handle tracks (add event listener and "pseudo"-default)

      if (this.isHTML5 && this.isVideo) {
        tracks.filter(track => !meta.get(track)).forEach(track => {
          this.debug.log('Track added', track); // Attempt to store if the original dom element was "default"

          meta.set(track, {
            default: track.mode === 'showing'
          }); // Turn off native caption rendering to avoid double captions
          // Note: mode='hidden' forces a track to download. To ensure every track
          // isn't downloaded at once, only 'showing' tracks should be reassigned
          // eslint-disable-next-line no-param-reassign

          if (track.mode === 'showing') {
            // eslint-disable-next-line no-param-reassign
            track.mode = 'hidden';
          } // Add event listener for cue changes


          on.call(this, track, 'cuechange', () => captions.updateCues.call(this));
        });
      } // Update language first time it matches, or if the previous matching track was removed


      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      } // Enable or disable captions based on track length


      if (this.elements) {
        toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks));
      } // Update available languages in list


      if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
        controls.setCaptionsMenu.call(this);
      }
    },

    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      // If there's no full support
      if (!this.supported.ui) {
        return;
      }

      const {
        toggled
      } = this.captions; // Current state

      const activeClass = this.config.classNames.captions.active; // Get the next state
      // If the method is called without parameter, toggle based on current value

      const active = is.nullOrUndefined(input) ? !toggled : input; // Update state and trigger event

      if (active !== toggled) {
        // When passive, don't override user preferences
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        } // Force language if the call isn't passive and there is no matching language to toggle to


        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true); // Override user preferences to avoid switching languages if a matching track is added

          this.captions.language = track.language; // Set caption, but don't store in localStorage as user preference

          captions.set.call(this, tracks.indexOf(track));
          return;
        } // Toggle button if it's enabled


        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        } // Add class hook


        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // Trigger event (not used internally)

        triggerEvent.call(this, this.media, active ? 'captionsenabled' : 'captionsdisabled');
      } // Wait for the call stack to clear before setting mode='hidden'
      // on the active track - forcing the browser to download it


      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = 'hidden';
        }
      });
    },

    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this); // Disable captions if setting to -1

      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }

      if (!is.number(index)) {
        this.debug.warn('Invalid caption argument', index);
        return;
      }

      if (!(index in tracks)) {
        this.debug.warn('Track not found', index);
        return;
      }

      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const {
          language
        } = track || {}; // Store reference to node for invalidation on remove

        this.captions.currentTrackNode = track; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // When passive, don't override user preferences

        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language
          });
        } // Handle Vimeo captions


        if (this.isVimeo) {
          this.embed.enableTextTrack(language);
        } // Trigger event


        triggerEvent.call(this, this.media, 'languagechange');
      } // Show captions


      captions.toggle.call(this, true, passive);

      if (this.isHTML5 && this.isVideo) {
        // If we change the active track while a cue is already displayed we need to update it
        captions.updateCues.call(this);
      }
    },

    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is.string(input)) {
        this.debug.warn('Invalid language argument', input);
        return;
      } // Normalize


      const language = input.toLowerCase();
      this.captions.language = language; // Set currentTrack

      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },

    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update = false) {
      // Handle media or textTracks missing or null
      const tracks = Array.from((this.media || {}).textTracks || []); // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
      // Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)

      return tracks.filter(track => !this.isHTML5 || update || this.captions.meta.has(track)).filter(track => ['captions', 'subtitles'].includes(track.kind));
    },

    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);

      const sortIsDefault = track => Number((this.captions.meta.get(track) || {}).default);

      const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
      let track;
      languages.every(language => {
        track = sorted.find(t => t.language === language);
        return !track; // Break iteration if there is a match
      }); // If no match is found but is required, get first

      return track || (force ? sorted[0] : undefined);
    },

    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },

    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;

      if (!is.track(currentTrack) && support.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }

      if (is.track(currentTrack)) {
        if (!is.empty(currentTrack.label)) {
          return currentTrack.label;
        }

        if (!is.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }

        return i18n.get('enabled', this.config);
      }

      return i18n.get('disabled', this.config);
    },

    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      // Requires UI
      if (!this.supported.ui) {
        return;
      }

      if (!is.element(this.elements.captions)) {
        this.debug.warn('No captions element to render to');
        return;
      } // Only accept array or empty input


      if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn('updateCues: Invalid input', input);
        return;
      }

      let cues = input; // Get cues from track

      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map(cue => cue.getCueAsHTML()).map(getHTML);
      } // Set new caption text


      const content = cues.map(cueText => cueText.trim()).join('\n');
      const changed = content !== this.elements.captions.innerHTML;

      if (changed) {
        // Empty the container and create a new child element
        emptyElement(this.elements.captions);
        const caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption); // Trigger event

        triggerEvent.call(this, this.media, 'cuechange');
      }
    }

  };

  // ==========================================================================
  // Plyr default config
  // ==========================================================================
  const defaults = {
    // Disable
    enabled: true,
    // Custom media title
    title: '',
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS (this effects YouTube/Vimeo - HTML5 requires the attribute present)
    // TODO: Remove iosNative fullscreen option in favour of this (logic needs work)
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Force an aspect ratio
    // The format must be `'w:h'` (e.g. `'16:9'`)
    ratio: null,
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: 'plyr',
    iconUrl: 'https://cdn.plyr.io/3.6.12/plyr.svg',
    // Blank video (used to prevent errors on source change)
    blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
    // Quality default
    quality: {
      default: 576,
      // The options to display in the UI, if available for the source media
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: false,
      onChange: null
    },
    // Set loops
    loop: {
      active: false // start: null,
      // end: null,

    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: 'auto',
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element

    },
    // Local storage
    storage: {
      enabled: true,
      key: 'plyr'
    },
    // Default controls
    controls: ['play-large', // 'restart',
    // 'rewind',
    'play', // 'fast-forward',
    'progress', 'current-time', // 'duration',
    'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', // 'download',
    'fullscreen'],
    settings: ['captions', 'quality', 'speed'],
    // Localisation
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      pip: 'PIP',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
      start: 'Start',
      end: 'End',
      all: 'All',
      reset: 'Reset',
      disabled: 'Disabled',
      enabled: 'Enabled',
      advertisement: 'Ad',
      qualityBadge: {
        2160: '4K',
        1440: 'HD',
        1080: 'HD',
        720: 'HD',
        576: 'SD',
        480: 'SD'
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: 'https://player.vimeo.com/api/player.js',
        iframe: 'https://player.vimeo.com/video/{0}?{1}',
        api: 'https://vimeo.com/api/oembed.json?url={0}'
      },
      youtube: {
        sdk: 'https://www.youtube.com/iframe_api',
        api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}'
      },
      googleIMA: {
        sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [// Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange', // Custom events
    'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready', // YouTube
    'statechange', // Quality
    'qualitychange', // Ads
    'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick'],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: 'input, textarea, select, [contenteditable]',
      container: '.plyr',
      controls: {
        container: null,
        wrapper: '.plyr__controls'
      },
      labels: '[data-plyr]',
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: '.plyr__time--current',
        duration: '.plyr__time--duration',
        buffer: '.plyr__progress__buffer',
        loop: '.plyr__progress__loop',
        // Used later
        volume: '.plyr__volume--display'
      },
      progress: '.plyr__progress',
      captions: '.plyr__captions',
      caption: '.plyr__caption'
    },
    // Class hooks added to the player in different states
    classNames: {
      type: 'plyr--{0}',
      provider: 'plyr--{0}',
      video: 'plyr__video-wrapper',
      embed: 'plyr__video-embed',
      videoFixedRatio: 'plyr__video-wrapper--fixed-ratio',
      embedContainer: 'plyr__video-embed__container',
      poster: 'plyr__poster',
      posterEnabled: 'plyr__poster-enabled',
      ads: 'plyr__ads',
      control: 'plyr__control',
      controlPressed: 'plyr__control--pressed',
      playing: 'plyr--playing',
      paused: 'plyr--paused',
      stopped: 'plyr--stopped',
      loading: 'plyr--loading',
      hover: 'plyr--hover',
      tooltip: 'plyr__tooltip',
      cues: 'plyr__cues',
      hidden: 'plyr__sr-only',
      hideControls: 'plyr--hide-controls',
      isIos: 'plyr--is-ios',
      isTouch: 'plyr--is-touch',
      uiSupported: 'plyr--full-ui',
      noTransition: 'plyr--no-transition',
      display: {
        time: 'plyr__time'
      },
      menu: {
        value: 'plyr__menu__value',
        badge: 'plyr__badge',
        open: 'plyr--menu-open'
      },
      captions: {
        enabled: 'plyr--captions-enabled',
        active: 'plyr--captions-active'
      },
      fullscreen: {
        enabled: 'plyr--fullscreen-enabled',
        fallback: 'plyr--fullscreen-fallback'
      },
      pip: {
        supported: 'plyr--pip-supported',
        active: 'plyr--pip-active'
      },
      airplay: {
        supported: 'plyr--airplay-supported',
        active: 'plyr--airplay-active'
      },
      tabFocus: 'plyr__tab-focus',
      previewThumbnails: {
        // Tooltip thumbs
        thumbContainer: 'plyr__preview-thumb',
        thumbContainerShown: 'plyr__preview-thumb--is-shown',
        imageContainer: 'plyr__preview-thumb__image-container',
        timeContainer: 'plyr__preview-thumb__time-container',
        // Scrubbing
        scrubbingContainer: 'plyr__preview-scrubbing',
        scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown'
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: 'data-plyr-provider',
        id: 'data-plyr-embed-id',
        hash: 'data-plyr-embed-hash'
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: '',
      tagUrl: ''
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: ''
    },
    // Vimeo plugin
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false // Whether to use an alternative version of YouTube without cookies

    }
  };

  // ==========================================================================
  // Plyr states
  // ==========================================================================
  const pip = {
    active: 'picture-in-picture',
    inactive: 'inline'
  };

  // ==========================================================================
  // Plyr supported types and providers
  // ==========================================================================
  const providers = {
    html5: 'html5',
    youtube: 'youtube',
    vimeo: 'vimeo'
  };
  const types = {
    audio: 'audio',
    video: 'video'
  };
  /**
   * Get provider by URL
   * @param {String} url
   */

  function getProviderByUrl(url) {
    // YouTube
    if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    } // Vimeo


    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }

    return null;
  }

  // ==========================================================================
  // Console wrapper
  // ==========================================================================
  const noop = () => {};

  class Console {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;

      if (this.enabled) {
        this.log('Debugging enabled');
      }
    }

    get log() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }

    get warn() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }

    get error() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }

  }

  class Fullscreen {
    constructor(player) {
      _defineProperty$1(this, "onChange", () => {
        if (!this.enabled) {
          return;
        } // Update toggle button


        const button = this.player.elements.buttons.fullscreen;

        if (is.element(button)) {
          button.pressed = this.active;
        } // Always trigger events on the plyr / media element (not a fullscreen container) and let them bubble up


        const target = this.target === this.player.media ? this.target : this.player.elements.container; // Trigger an event

        triggerEvent.call(this.player, target, this.active ? 'enterfullscreen' : 'exitfullscreen', true);
      });

      _defineProperty$1(this, "toggleFallback", (toggle = false) => {
        // Store or restore scroll position
        if (toggle) {
          this.scrollPosition = {
            x: window.scrollX || 0,
            y: window.scrollY || 0
          };
        } else {
          window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
        } // Toggle scroll


        document.body.style.overflow = toggle ? 'hidden' : ''; // Toggle class hook

        toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle); // Force full viewport on iPhone X+

        if (browser.isIos) {
          let viewport = document.head.querySelector('meta[name="viewport"]');
          const property = 'viewport-fit=cover'; // Inject the viewport meta if required

          if (!viewport) {
            viewport = document.createElement('meta');
            viewport.setAttribute('name', 'viewport');
          } // Check if the property already exists


          const hasProperty = is.string(viewport.content) && viewport.content.includes(property);

          if (toggle) {
            this.cleanupViewport = !hasProperty;

            if (!hasProperty) {
              viewport.content += `,${property}`;
            }
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(',').filter(part => part.trim() !== property).join(',');
          }
        } // Toggle button and fire events


        this.onChange();
      });

      _defineProperty$1(this, "trapFocus", event => {
        // Bail if iOS, not active, not the tab key
        if (browser.isIos || !this.active || event.key !== 'Tab' || event.keyCode !== 9) {
          return;
        } // Get the current focused element


        const focused = document.activeElement;
        const focusable = getElements.call(this.player, 'a[href], button:not(:disabled), input:not(:disabled), [tabindex]');
        const [first] = focusable;
        const last = focusable[focusable.length - 1];

        if (focused === last && !event.shiftKey) {
          // Move focus to first element that can be tabbed if Shift isn't used
          first.focus();
          event.preventDefault();
        } else if (focused === first && event.shiftKey) {
          // Move focus to last element that can be tabbed if Shift is used
          last.focus();
          event.preventDefault();
        }
      });

      _defineProperty$1(this, "update", () => {
        if (this.enabled) {
          let mode;

          if (this.forceFallback) {
            mode = 'Fallback (forced)';
          } else if (Fullscreen.native) {
            mode = 'Native';
          } else {
            mode = 'Fallback';
          }

          this.player.debug.log(`${mode} fullscreen enabled`);
        } else {
          this.player.debug.log('Fullscreen not supported and fallback disabled');
        } // Add styling hook to show button


        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      });

      _defineProperty$1(this, "enter", () => {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen doesn't need the request step


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.requestFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
        } else if (!Fullscreen.native || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({
            navigationUI: 'hide'
          });
        } else if (!is.empty(this.prefix)) {
          this.target[`${this.prefix}Request${this.property}`]();
        }
      });

      _defineProperty$1(this, "exit", () => {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          this.target.webkitExitFullscreen();
          silencePromise(this.player.play());
        } else if (!Fullscreen.native || this.forceFallback) {
          this.toggleFallback(false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is.empty(this.prefix)) {
          const action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
          document[`${this.prefix}${action}${this.property}`]();
        }
      });

      _defineProperty$1(this, "toggle", () => {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      });

      // Keep reference to parent
      this.player = player; // Get prefix

      this.prefix = Fullscreen.prefix;
      this.property = Fullscreen.property; // Scroll position

      this.scrollPosition = {
        x: 0,
        y: 0
      }; // Force the use of 'full window/browser' rather than fullscreen

      this.forceFallback = player.config.fullscreen.fallback === 'force'; // Get the fullscreen element
      // Checks container is an ancestor, defaults to null

      this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container); // Register event listeners
      // Handle event (incase user presses escape etc)

      on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : `${this.prefix}fullscreenchange`, () => {
        // TODO: Filter for target??
        this.onChange();
      }); // Fullscreen toggle on double click

      on.call(this.player, this.player.elements.container, 'dblclick', event => {
        // Ignore double click in controls
        if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
          return;
        }

        this.player.listeners.proxy(event, this.toggle, 'fullscreen');
      }); // Tap focus when in fullscreen

      on.call(this, this.player.elements.container, 'keydown', event => this.trapFocus(event)); // Update the UI

      this.update(); // this.toggle = this.toggle.bind(this);
    } // Determine if native supported


    static get native() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    } // If we're actually using native


    get usingNative() {
      return Fullscreen.native && !this.forceFallback;
    } // Get the prefix for handlers


    static get prefix() {
      // No prefix
      if (is.function(document.exitFullscreen)) {
        return '';
      } // Check for fullscreen support by vendor prefix


      let value = '';
      const prefixes = ['webkit', 'moz', 'ms'];
      prefixes.some(pre => {
        if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
          value = pre;
          return true;
        }

        return false;
      });
      return value;
    }

    static get property() {
      return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
    } // Determine if fullscreen is enabled


    get enabled() {
      return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
    } // Get active state


    get active() {
      if (!this.enabled) {
        return false;
      } // Fallback using classname


      if (!Fullscreen.native || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }

      const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    } // Get target element


    get target() {
      return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
    }

  }

  // ==========================================================================
  // Load image avoiding xhr/fetch CORS issues
  // Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
  // By default it checks if it is at least 1px, but you can add a second argument to change this
  // ==========================================================================
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };

      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src
      });
    });
  }

  // ==========================================================================
  const ui = {
    addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace('.', ''), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },

    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute('controls', '');
      } else {
        this.media.removeAttribute('controls');
      }
    },

    // Setup the UI
    build() {
      // Re-attach media element listeners
      // TODO: Use event bubbling?
      this.listeners.media(); // Don't setup interface if no support

      if (!this.supported.ui) {
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`); // Restore native controls

        ui.toggleNativeControls.call(this, true); // Bail

        return;
      } // Inject custom controls if not present


      if (!is.element(this.elements.controls)) {
        // Inject custom controls
        controls.inject.call(this); // Re-attach control listeners

        this.listeners.controls();
      } // Remove native controls


      ui.toggleNativeControls.call(this); // Setup captions for HTML5

      if (this.isHTML5) {
        captions.setup.call(this);
      } // Reset volume


      this.volume = null; // Reset mute state

      this.muted = null; // Reset loop state

      this.loop = null; // Reset quality setting

      this.quality = null; // Reset speed

      this.speed = null; // Reset volume display

      controls.updateVolume.call(this); // Reset time display

      controls.timeUpdate.call(this); // Reset duration display

      controls.durationUpdate.call(this); // Update the UI

      ui.checkPlaying.call(this); // Check for picture-in-picture support

      toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo); // Check for airplay support

      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5); // Add iOS class

      toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos); // Add touch class

      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch); // Ready for API calls

      this.ready = true; // Ready event at end of execution stack

      setTimeout(() => {
        triggerEvent.call(this, this.media, 'ready');
      }, 0); // Set the title

      ui.setTitle.call(this); // Assure the poster image is set, if the property was added before the element was created

      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {});
      } // Manually set the duration if user has overridden it.
      // The event listeners for it doesn't get called if preload is disabled (#701)


      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
    },

    // Setup aria attribute for play and iframe title
    setTitle() {
      // Find the current text
      let label = i18n.get('play', this.config); // If there's a media title set, use that for the label

      if (is.string(this.config.title) && !is.empty(this.config.title)) {
        label += `, ${this.config.title}`;
      } // If there's a play button, set label


      Array.from(this.elements.buttons.play || []).forEach(button => {
        button.setAttribute('aria-label', label);
      }); // Set iframe title
      // https://github.com/sampotts/plyr/issues/124

      if (this.isEmbed) {
        const iframe = getElement.call(this, 'iframe');

        if (!is.element(iframe)) {
          return;
        } // Default to media type


        const title = !is.empty(this.config.title) ? this.config.title : 'video';
        const format = i18n.get('frameTitle', this.config);
        iframe.setAttribute('title', format.replace('{title}', title));
      }
    },

    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },

    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      // Don't override if call is passive
      if (passive && this.poster) {
        return Promise.reject(new Error('Poster already set'));
      } // Set property synchronously to respect the call order


      this.media.setAttribute('data-poster', poster); // Show the poster

      this.elements.poster.removeAttribute('hidden'); // Wait until ui is ready

      return ready.call(this) // Load image
      .then(() => loadImage(poster)).catch(error => {
        // Hide poster on error unless it's been set by another call
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        } // Rethrow


        throw error;
      }).then(() => {
        // Prevent race conditions
        if (poster !== this.poster) {
          throw new Error('setPoster cancelled by later call to setPoster');
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: `url('${poster}')`,
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ''
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },

    // Check playing state
    checkPlaying(event) {
      // Class hooks
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped); // Set state

      Array.from(this.elements.buttons.play || []).forEach(target => {
        Object.assign(target, {
          pressed: this.playing
        });
        target.setAttribute('aria-label', i18n.get(this.playing ? 'pause' : 'play', this.config));
      }); // Only update controls on non timeupdate events

      if (is.event(event) && event.type === 'timeupdate') {
        return;
      } // Toggle controls


      ui.toggleControls.call(this);
    },

    // Check if media is loading
    checkLoading(event) {
      this.loading = ['stalled', 'waiting'].includes(event.type); // Clear timer

      clearTimeout(this.timers.loading); // Timer to prevent flicker when seeking

      this.timers.loading = setTimeout(() => {
        // Update progress bar loading class state
        toggleClass(this.elements.container, this.config.classNames.loading, this.loading); // Update controls visibility

        ui.toggleControls.call(this);
      }, this.loading ? 250 : 0);
    },

    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const {
        controls: controlsElement
      } = this.elements;

      if (controlsElement && this.config.hideControls) {
        // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
        const recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now(); // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide

        this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
      }
    },

    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      // Loop through values (as they are the keys when the object is spread 🤔)
      Object.values({ ...this.media.style
      }) // We're only fussed about Plyr specific properties
      .filter(key => !is.empty(key) && is.string(key) && key.startsWith('--plyr')).forEach(key => {
        // Set on the container
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key)); // Clean up from media element

        this.media.style.removeProperty(key);
      }); // Remove attribute if empty

      if (is.empty(this.media.style)) {
        this.media.removeAttribute('style');
      }
    }

  };

  class Listeners {
    constructor(_player) {
      _defineProperty$1(this, "firstTouch", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        player.touch = true; // Add touch class

        toggleClass(elements.container, player.config.classNames.isTouch, true);
      });

      _defineProperty$1(this, "setTabFocus", event => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        clearTimeout(this.focusTimer); // Ignore any key other than tab

        if (event.type === 'keydown' && event.which !== 9) {
          return;
        } // Store reference to event timeStamp


        if (event.type === 'keydown') {
          this.lastKeyDown = event.timeStamp;
        } // Remove current classes


        const removeCurrent = () => {
          const className = player.config.classNames.tabFocus;
          const current = getElements.call(player, `.${className}`);
          toggleClass(current, className, false);
        }; // Determine if a key was pressed to trigger this event


        const wasKeyDown = event.timeStamp - this.lastKeyDown <= 20; // Ignore focus events if a key was pressed prior

        if (event.type === 'focus' && !wasKeyDown) {
          return;
        } // Remove all current


        removeCurrent(); // Delay the adding of classname until the focus has changed
        // This event fires before the focusin event

        if (event.type !== 'focusout') {
          this.focusTimer = setTimeout(() => {
            const focused = document.activeElement; // Ignore if current focus element isn't inside the player

            if (!elements.container.contains(focused)) {
              return;
            }

            toggleClass(document.activeElement, player.config.classNames.tabFocus, true);
          }, 10);
        }
      });

      _defineProperty$1(this, "global", (toggle = true) => {
        const {
          player
        } = this; // Keyboard shortcuts

        if (player.config.keyboard.global) {
          toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
        } // Click anywhere closes menu


        toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle); // Detect touch by events

        once.call(player, document.body, 'touchstart', this.firstTouch); // Tab focus detection

        toggleListener.call(player, document.body, 'keydown focus blur focusout', this.setTabFocus, toggle, false, true);
      });

      _defineProperty$1(this, "container", () => {
        const {
          player
        } = this;
        const {
          config,
          elements,
          timers
        } = player; // Keyboard shortcuts

        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
        } // Toggle controls on mouse events and entering fullscreen


        on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', event => {
          const {
            controls: controlsElement
          } = elements; // Remove button states for fullscreen

          if (controlsElement && event.type === 'enterfullscreen') {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          } // Show, then hide after a timeout unless another control event occurs


          const show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
          let delay = 0;

          if (show) {
            ui.toggleControls.call(player, true); // Use longer timeout for touch devices

            delay = player.touch ? 3000 : 2000;
          } // Clear timer


          clearTimeout(timers.controls); // Set new timer to prevent flicker when seeking

          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        }); // Set a gutter for Vimeo

        const setGutter = () => {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }

          const target = elements.wrapper;
          const {
            active
          } = player.fullscreen;
          const [videoWidth, videoHeight] = getAspectRatio.call(player);
          const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`); // If not active, remove styles

          if (!active) {
            if (useNativeAspectRatio) {
              target.style.width = null;
              target.style.height = null;
            } else {
              target.style.maxWidth = null;
              target.style.margin = null;
            }

            return;
          } // Determine which dimension will overflow and constrain view


          const [viewportWidth, viewportHeight] = getViewportSize();
          const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;

          if (useNativeAspectRatio) {
            target.style.width = overflow ? 'auto' : '100%';
            target.style.height = overflow ? '100%' : 'auto';
          } else {
            target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
            target.style.margin = overflow ? '0 auto' : null;
          }
        }; // Handle resizing


        const resized = () => {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setGutter, 50);
        };

        on.call(player, elements.container, 'enterfullscreen exitfullscreen', event => {
          const {
            target
          } = player.fullscreen; // Ignore events not from target

          if (target !== elements.container) {
            return;
          } // If it's not an embed and no ratio specified


          if (!player.isEmbed && is.empty(player.config.ratio)) {
            return;
          } // Set Vimeo gutter


          setGutter(); // Watch for resizes

          const method = event.type === 'enterfullscreen' ? on : off;
          method.call(player, window, 'resize', resized);
        });
      });

      _defineProperty$1(this, "media", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player; // Time change on media

        on.call(player, player.media, 'timeupdate seeking seeked', event => controls.timeUpdate.call(player, event)); // Display duration

        on.call(player, player.media, 'durationchange loadeddata loadedmetadata', event => controls.durationUpdate.call(player, event)); // Handle the media finishing

        on.call(player, player.media, 'ended', () => {
          // Show poster on end
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            // Restart
            player.restart(); // Call pause otherwise IE11 will start playing the video again

            player.pause();
          }
        }); // Check for buffer progress

        on.call(player, player.media, 'progress playing seeking seeked', event => controls.updateProgress.call(player, event)); // Handle volume changes

        on.call(player, player.media, 'volumechange', event => controls.updateVolume.call(player, event)); // Handle play/pause

        on.call(player, player.media, 'playing play pause ended emptied timeupdate', event => ui.checkPlaying.call(player, event)); // Loading state

        on.call(player, player.media, 'waiting canplay seeked playing', event => ui.checkLoading.call(player, event)); // Click video

        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          // Re-fetch the wrapper
          const wrapper = getElement.call(player, `.${player.config.classNames.video}`); // Bail if there's no wrapper (this should never happen)

          if (!is.element(wrapper)) {
            return;
          } // On click play, pause or restart


          on.call(player, elements.container, 'click', event => {
            const targets = [elements.container, wrapper]; // Ignore if click if not container or in video wrapper

            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            } // Touch devices will just show controls (if hidden)


            if (player.touch && player.config.hideControls) {
              return;
            }

            if (player.ended) {
              this.proxy(event, player.restart, 'restart');
              this.proxy(event, () => {
                silencePromise(player.play());
              }, 'play');
            } else {
              this.proxy(event, () => {
                silencePromise(player.togglePlay());
              }, 'play');
            }
          });
        } // Disable right click


        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, 'contextmenu', event => {
            event.preventDefault();
          }, false);
        } // Volume change


        on.call(player, player.media, 'volumechange', () => {
          // Save to storage
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        }); // Speed change

        on.call(player, player.media, 'ratechange', () => {
          // Update UI
          controls.updateSetting.call(player, 'speed'); // Save to storage

          player.storage.set({
            speed: player.speed
          });
        }); // Quality change

        on.call(player, player.media, 'qualitychange', event => {
          // Update UI
          controls.updateSetting.call(player, 'quality', null, event.detail.quality);
        }); // Update download link when ready and if quality changes

        on.call(player, player.media, 'ready qualitychange', () => {
          controls.setDownloadUrl.call(player);
        }); // Proxy events to container
        // Bubble up key events for Edge

        const proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
        on.call(player, player.media, proxyEvents, event => {
          let {
            detail = {}
          } = event; // Get error details from media

          if (event.type === 'error') {
            detail = player.media.error;
          }

          triggerEvent.call(player, elements.container, event.type, true, detail);
        });
      });

      _defineProperty$1(this, "proxy", (event, defaultHandler, customHandlerKey) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        let returned = true; // Execute custom handler

        if (hasCustomHandler) {
          returned = customHandler.call(player, event);
        } // Only call default handler if not prevented in custom handler


        if (returned !== false && is.function(defaultHandler)) {
          defaultHandler.call(player, event);
        }
      });

      _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        on.call(player, element, type, event => this.proxy(event, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
      });

      _defineProperty$1(this, "controls", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player; // IE doesn't support input event, so we fallback to change

        const inputEvent = browser.isIE ? 'change' : 'input'; // Play/pause toggle

        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach(button => {
            this.bind(button, 'click', () => {
              silencePromise(player.togglePlay());
            }, 'play');
          });
        } // Pause


        this.bind(elements.buttons.restart, 'click', player.restart, 'restart'); // Rewind

        this.bind(elements.buttons.rewind, 'click', () => {
          // Record seek time so we can prevent hiding controls for a few seconds after rewind
          player.lastSeekTime = Date.now();
          player.rewind();
        }, 'rewind'); // Rewind

        this.bind(elements.buttons.fastForward, 'click', () => {
          // Record seek time so we can prevent hiding controls for a few seconds after fast forward
          player.lastSeekTime = Date.now();
          player.forward();
        }, 'fastForward'); // Mute toggle

        this.bind(elements.buttons.mute, 'click', () => {
          player.muted = !player.muted;
        }, 'mute'); // Captions toggle

        this.bind(elements.buttons.captions, 'click', () => player.toggleCaptions()); // Download

        this.bind(elements.buttons.download, 'click', () => {
          triggerEvent.call(player, player.media, 'download');
        }, 'download'); // Fullscreen toggle

        this.bind(elements.buttons.fullscreen, 'click', () => {
          player.fullscreen.toggle();
        }, 'fullscreen'); // Picture-in-Picture

        this.bind(elements.buttons.pip, 'click', () => {
          player.pip = 'toggle';
        }, 'pip'); // Airplay

        this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay'); // Settings menu - click toggle

        this.bind(elements.buttons.settings, 'click', event => {
          // Prevent the document click listener closing the menu
          event.stopPropagation();
          event.preventDefault();
          controls.toggleMenu.call(player, event);
        }, null, false); // Can't be passive as we're preventing default
        // Settings menu - keyboard toggle
        // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143

        this.bind(elements.buttons.settings, 'keyup', event => {
          const code = event.which; // We only care about space and return

          if (![13, 32].includes(code)) {
            return;
          } // Because return triggers a click anyway, all we need to do is set focus


          if (code === 13) {
            controls.focusFirstMenuItem.call(player, null, true);
            return;
          } // Prevent scroll


          event.preventDefault(); // Prevent playing video (Firefox)

          event.stopPropagation(); // Toggle menu

          controls.toggleMenu.call(player, event);
        }, null, false // Can't be passive as we're preventing default
        ); // Escape closes menu

        this.bind(elements.settings.menu, 'keydown', event => {
          if (event.which === 27) {
            controls.toggleMenu.call(player, event);
          }
        }); // Set range input alternative "value", which matches the tooltip time (#954)

        this.bind(elements.inputs.seek, 'mousedown mousemove', event => {
          const rect = elements.progress.getBoundingClientRect();
          const percent = 100 / rect.width * (event.pageX - rect.left);
          event.currentTarget.setAttribute('seek-value', percent);
        }); // Pause while seeking

        this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', event => {
          const seek = event.currentTarget;
          const code = event.keyCode ? event.keyCode : event.which;
          const attribute = 'play-on-seeked';

          if (is.keyboardEvent(event) && code !== 39 && code !== 37) {
            return;
          } // Record seek time so we can prevent hiding controls for a few seconds after seek


          player.lastSeekTime = Date.now(); // Was playing before?

          const play = seek.hasAttribute(attribute); // Done seeking

          const done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, '');
            player.pause();
          }
        }); // Fix range inputs on iOS
        // Super weird iOS bug where after you interact with an <input type="range">,
        // it takes over further interactions on the page. This is a hack

        if (browser.isIos) {
          const inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach(input => this.bind(input, inputEvent, event => repaint(event.target)));
        } // Seek


        this.bind(elements.inputs.seek, inputEvent, event => {
          const seek = event.currentTarget; // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)

          let seekTo = seek.getAttribute('seek-value');

          if (is.empty(seekTo)) {
            seekTo = seek.value;
          }

          seek.removeAttribute('seek-value');
          player.currentTime = seekTo / seek.max * player.duration;
        }, 'seek'); // Seek tooltip

        this.bind(elements.progress, 'mouseenter mouseleave mousemove', event => controls.updateSeekTooltip.call(player, event)); // Preview thumbnails plugin
        // TODO: Really need to work on some sort of plug-in wide event bus or pub-sub for this

        this.bind(elements.progress, 'mousemove touchmove', event => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startMove(event);
          }
        }); // Hide thumbnail preview - on mouse click, mouse leave, and video play/seek. All four are required, e.g., for buffering

        this.bind(elements.progress, 'mouseleave touchend click', () => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endMove(false, true);
          }
        }); // Show scrubbing preview

        this.bind(elements.progress, 'mousedown touchstart', event => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event);
          }
        });
        this.bind(elements.progress, 'mouseup touchend', event => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event);
          }
        }); // Polyfill for lower fill in <input type="range"> for webkit

        if (browser.isWebkit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach(element => {
            this.bind(element, 'input', event => controls.updateRangeFill.call(player, event.target));
          });
        } // Current time invert
        // Only if one time element is used for both currentTime and duration


        if (player.config.toggleInvert && !is.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, 'click', () => {
            // Do nothing if we're at the start
            if (player.currentTime === 0) {
              return;
            }

            player.config.invertTime = !player.config.invertTime;
            controls.timeUpdate.call(player);
          });
        } // Volume


        this.bind(elements.inputs.volume, inputEvent, event => {
          player.volume = event.target.value;
        }, 'volume'); // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)

        this.bind(elements.controls, 'mouseenter mouseleave', event => {
          elements.controls.hover = !player.touch && event.type === 'mouseenter';
        }); // Also update controls.hover state for any non-player children of fullscreen element (as above)

        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter(c => !c.contains(elements.container)).forEach(child => {
            this.bind(child, 'mouseenter mouseleave', event => {
              if (elements.controls) {
                elements.controls.hover = !player.touch && event.type === 'mouseenter';
              }
            });
          });
        } // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)


        this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', event => {
          elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
        }); // Show controls when they receive focus (e.g., when using keyboard tab key)

        this.bind(elements.controls, 'focusin', () => {
          const {
            config,
            timers
          } = player; // Skip transition to prevent focus from scrolling the parent element

          toggleClass(elements.controls, config.classNames.noTransition, true); // Toggle

          ui.toggleControls.call(player, true); // Restore transition

          setTimeout(() => {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0); // Delay a little more for mouse users

          const delay = this.touch ? 3000 : 4000; // Clear timer

          clearTimeout(timers.controls); // Hide again after delay

          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        }); // Mouse wheel for volume

        this.bind(elements.inputs.volume, 'wheel', event => {
          // Detect "natural" scroll - suppored on OS X Safari only
          // Other browsers on OS X will be inverted until support improves
          const inverted = event.webkitDirectionInvertedFromDevice; // Get delta from event. Invert if `inverted` is true

          const [x, y] = [event.deltaX, -event.deltaY].map(value => inverted ? -value : value); // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)

          const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y); // Change the volume by 2%

          player.increaseVolume(direction / 50); // Don't break page scrolling at max and min

          const {
            volume
          } = player.media;

          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        }, 'volume', false);
      });

      this.player = _player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.setTabFocus = this.setTabFocus.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    } // Handle key presses


    handleKey(event) {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      const code = event.keyCode ? event.keyCode : event.which;
      const pressed = event.type === 'keydown';
      const repeat = pressed && code === this.lastKey; // Bail if a modifier key is set

      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      } // If the event is bubbled from the media element
      // Firefox doesn't get the keycode for whatever reason


      if (!is.number(code)) {
        return;
      } // Seek by the number keys


      const seekByKey = () => {
        // Divide the max duration into 10th's and times by the number value
        player.currentTime = player.duration / 10 * (code - 48);
      }; // Handle the key on keydown
      // Reset on keyup


      if (pressed) {
        // Check focused element
        // and if the focused element is not editable (e.g. text input)
        // and any that accept key input http://webaim.org/techniques/keyboard/
        const focused = document.activeElement;

        if (is.element(focused)) {
          const {
            editable
          } = player.config.selectors;
          const {
            seek
          } = elements.inputs;

          if (focused !== seek && matches(focused, editable)) {
            return;
          }

          if (event.which === 32 && matches(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        } // Which keycodes should we prevent default


        const preventDefault = [32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79]; // If the code is found prevent default (e.g. prevent scrolling for arrows)

        if (preventDefault.includes(code)) {
          event.preventDefault();
          event.stopPropagation();
        }

        switch (code) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            // 0-9
            if (!repeat) {
              seekByKey();
            }

            break;

          case 32:
          case 75:
            // Space and K key
            if (!repeat) {
              silencePromise(player.togglePlay());
            }

            break;

          case 38:
            // Arrow up
            player.increaseVolume(0.1);
            break;

          case 40:
            // Arrow down
            player.decreaseVolume(0.1);
            break;

          case 77:
            // M key
            if (!repeat) {
              player.muted = !player.muted;
            }

            break;

          case 39:
            // Arrow forward
            player.forward();
            break;

          case 37:
            // Arrow back
            player.rewind();
            break;

          case 70:
            // F key
            player.fullscreen.toggle();
            break;

          case 67:
            // C key
            if (!repeat) {
              player.toggleCaptions();
            }

            break;

          case 76:
            // L key
            player.loop = !player.loop;
            break;
        } // Escape is handle natively when in full screen
        // So we only need to worry about non native


        if (code === 27 && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        } // Store last code for next cycle


        this.lastKey = code;
      } else {
        this.lastKey = null;
      }
    } // Toggle menu


    toggleMenu(event) {
      controls.toggleMenu.call(this.player, event);
    } // Device is touch enabled


  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var loadjs_umd = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {
      /**
       * Global dependencies.
       * @global {Object} document - DOM
       */
      var devnull = function () {},
          bundleIdCache = {},
          bundleResultCache = {},
          bundleCallbackQueue = {};
      /**
       * Subscribe to bundle load event.
       * @param {string[]} bundleIds - Bundle ids
       * @param {Function} callbackFn - The callback function
       */


      function subscribe(bundleIds, callbackFn) {
        // listify
        bundleIds = bundleIds.push ? bundleIds : [bundleIds];
        var depsNotFound = [],
            i = bundleIds.length,
            numWaiting = i,
            fn,
            bundleId,
            r,
            q; // define callback function

        fn = function (bundleId, pathsNotFound) {
          if (pathsNotFound.length) depsNotFound.push(bundleId);
          numWaiting--;
          if (!numWaiting) callbackFn(depsNotFound);
        }; // register callback


        while (i--) {
          bundleId = bundleIds[i]; // execute callback if in result cache

          r = bundleResultCache[bundleId];

          if (r) {
            fn(bundleId, r);
            continue;
          } // add to callback queue


          q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
          q.push(fn);
        }
      }
      /**
       * Publish bundle load event.
       * @param {string} bundleId - Bundle id
       * @param {string[]} pathsNotFound - List of files not found
       */


      function publish(bundleId, pathsNotFound) {
        // exit if id isn't defined
        if (!bundleId) return;
        var q = bundleCallbackQueue[bundleId]; // cache result

        bundleResultCache[bundleId] = pathsNotFound; // exit if queue is empty

        if (!q) return; // empty callback queue

        while (q.length) {
          q[0](bundleId, pathsNotFound);
          q.splice(0, 1);
        }
      }
      /**
       * Execute callbacks.
       * @param {Object or Function} args - The callback args
       * @param {string[]} depsNotFound - List of dependencies not found
       */


      function executeCallbacks(args, depsNotFound) {
        // accept function as argument
        if (args.call) args = {
          success: args
        }; // success and error callbacks

        if (depsNotFound.length) (args.error || devnull)(depsNotFound);else (args.success || devnull)(args);
      }
      /**
       * Load individual file.
       * @param {string} path - The file path
       * @param {Function} callbackFn - The callback function
       */


      function loadFile(path, callbackFn, args, numTries) {
        var doc = document,
            async = args.async,
            maxTries = (args.numRetries || 0) + 1,
            beforeCallbackFn = args.before || devnull,
            pathname = path.replace(/[\?|#].*$/, ''),
            pathStripped = path.replace(/^(css|img)!/, ''),
            isLegacyIECss,
            e;
        numTries = numTries || 0;

        if (/(^css!|\.css$)/.test(pathname)) {
          // css
          e = doc.createElement('link');
          e.rel = 'stylesheet';
          e.href = pathStripped; // tag IE9+

          isLegacyIECss = 'hideFocus' in e; // use preload in IE Edge (to detect load errors)

          if (isLegacyIECss && e.relList) {
            isLegacyIECss = 0;
            e.rel = 'preload';
            e.as = 'style';
          }
        } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
          // image
          e = doc.createElement('img');
          e.src = pathStripped;
        } else {
          // javascript
          e = doc.createElement('script');
          e.src = path;
          e.async = async === undefined ? true : async;
        }

        e.onload = e.onerror = e.onbeforeload = function (ev) {
          var result = ev.type[0]; // treat empty stylesheets as failures to get around lack of onerror
          // support in IE9-11

          if (isLegacyIECss) {
            try {
              if (!e.sheet.cssText.length) result = 'e';
            } catch (x) {
              // sheets objects created from load errors don't allow access to
              // `cssText` (unless error is Code:18 SecurityError)
              if (x.code != 18) result = 'e';
            }
          } // handle retries in case of load failure


          if (result == 'e') {
            // increment counter
            numTries += 1; // exit function and try again

            if (numTries < maxTries) {
              return loadFile(path, callbackFn, args, numTries);
            }
          } else if (e.rel == 'preload' && e.as == 'style') {
            // activate preloaded stylesheets
            return e.rel = 'stylesheet'; // jshint ignore:line
          } // execute callback


          callbackFn(path, result, ev.defaultPrevented);
        }; // add to document (unless callback returns `false`)


        if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
      }
      /**
       * Load multiple files.
       * @param {string[]} paths - The file paths
       * @param {Function} callbackFn - The callback function
       */


      function loadFiles(paths, callbackFn, args) {
        // listify paths
        paths = paths.push ? paths : [paths];
        var numWaiting = paths.length,
            x = numWaiting,
            pathsNotFound = [],
            fn,
            i; // define callback function

        fn = function (path, result, defaultPrevented) {
          // handle error
          if (result == 'e') pathsNotFound.push(path); // handle beforeload event. If defaultPrevented then that means the load
          // will be blocked (ex. Ghostery/ABP on Safari)

          if (result == 'b') {
            if (defaultPrevented) pathsNotFound.push(path);else return;
          }

          numWaiting--;
          if (!numWaiting) callbackFn(pathsNotFound);
        }; // load scripts


        for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
      }
      /**
       * Initiate script load and register bundle.
       * @param {(string|string[])} paths - The file paths
       * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
       *   callback or (3) object literal with success/error arguments, numRetries,
       *   etc.
       * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
       *   literal with success/error arguments, numRetries, etc.
       */


      function loadjs(paths, arg1, arg2) {
        var bundleId, args; // bundleId (if string)

        if (arg1 && arg1.trim) bundleId = arg1; // args (default is {})

        args = (bundleId ? arg2 : arg1) || {}; // throw error if bundle is already defined

        if (bundleId) {
          if (bundleId in bundleIdCache) {
            throw "LoadJS";
          } else {
            bundleIdCache[bundleId] = true;
          }
        }

        function loadFn(resolve, reject) {
          loadFiles(paths, function (pathsNotFound) {
            // execute callbacks
            executeCallbacks(args, pathsNotFound); // resolve Promise

            if (resolve) {
              executeCallbacks({
                success: resolve,
                error: reject
              }, pathsNotFound);
            } // publish bundle load event


            publish(bundleId, pathsNotFound);
          }, args);
        }

        if (args.returnPromise) return new Promise(loadFn);else loadFn();
      }
      /**
       * Execute callbacks when dependencies have been satisfied.
       * @param {(string|string[])} deps - List of bundle ids
       * @param {Object} args - success/error arguments
       */


      loadjs.ready = function ready(deps, args) {
        // subscribe to bundle load event
        subscribe(deps, function (depsNotFound) {
          // execute callbacks
          executeCallbacks(args, depsNotFound);
        });
        return loadjs;
      };
      /**
       * Manually satisfy bundle dependencies.
       * @param {string} bundleId - The bundle id
       */


      loadjs.done = function done(bundleId) {
        publish(bundleId, []);
      };
      /**
       * Reset loadjs dependencies statuses
       */


      loadjs.reset = function reset() {
        bundleIdCache = {};
        bundleResultCache = {};
        bundleCallbackQueue = {};
      };
      /**
       * Determine if bundle has already been defined
       * @param String} bundleId - The bundle id
       */


      loadjs.isDefined = function isDefined(bundleId) {
        return bundleId in bundleIdCache;
      }; // export


      return loadjs;
    });
  });

  // ==========================================================================
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      loadjs_umd(url, {
        success: resolve,
        error: reject
      });
    });
  }

  // ==========================================================================

  function parseId$1(url) {
    if (is.empty(url)) {
      return null;
    }

    if (is.number(Number(url))) {
      return url;
    }

    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Try to extract a hash for private videos from the URL


  function parseHash(url) {
    /* This regex matches a hexadecimal hash if given in any of these forms:
     *  - [https://player.]vimeo.com/video/{id}/{hash}[?params]
     *  - [https://player.]vimeo.com/video/{id}?h={hash}[&params]
     *  - [https://player.]vimeo.com/video/{id}?[params]&h={hash}
     *  - video/{id}/{hash}
     * If matched, the hash is available in the named group `hash`
     */
    const regex = /^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*&*h=|\/)+(?<hash>[\d,a-f]+)/;
    const found = url.match(regex);
    return found ? found.groups.hash : null;
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState$1(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  const vimeo = {
    setup() {
      const player = this; // Add embed class for responsive

      toggleClass(player.elements.wrapper, player.config.classNames.embed, true); // Set speed options from config

      player.options.speed = player.config.speed.options; // Set intial ratio

      setAspectRatio.call(player); // Load the SDK if not already

      if (!is.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch(error => {
          player.debug.warn('Vimeo SDK (player.js) failed to load', error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },

    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const {
        premium,
        referrerPolicy,
        ...frameParams
      } = config; // Get the source URL or ID

      let source = player.media.getAttribute('src');
      let hash = ''; // Get from <div> if needed

      if (is.empty(source)) {
        source = player.media.getAttribute(player.config.attributes.embed.id); // hash can also be set as attribute on the <div>

        hash = player.media.getAttribute(player.config.attributes.embed.hash);
      } else {
        hash = parseHash(source);
      }

      const hashParam = hash ? {
        h: hash
      } : {}; // If the owner has a pro or premium account then we can hide controls etc

      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      } // Get Vimeo params for the iframe


      const params = buildUrlParams({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: 'media',
        playsinline: !this.config.fullscreen.iosNative,
        // hash has to be added to iframe-URL
        ...hashParam,
        ...frameParams
      });
      const id = parseId$1(source); // Build an iframe

      const iframe = createElement('iframe');
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute('src', src);
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', ['autoplay', 'fullscreen', 'picture-in-picture', 'encrypted-media', 'accelerometer', 'gyroscope'].join('; ')); // Set the referrer policy if required

      if (!is.empty(referrerPolicy)) {
        iframe.setAttribute('referrerPolicy', referrerPolicy);
      } // Inject the package


      if (premium || !config.customControls) {
        iframe.setAttribute('data-poster', player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement('div', {
          class: player.config.classNames.embedContainer,
          'data-poster': player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      } // Get poster image


      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then(response => {
          if (is.empty(response) || !response.thumbnail_url) {
            return;
          } // Set and show poster


          ui.setPoster.call(player, response.thumbnail_url).catch(() => {});
        });
      } // Setup instance
      // https://github.com/vimeo/player.js


      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0; // Disable native text track rendering

      if (player.supported.ui) {
        player.embed.disableTextTrack();
      } // Create a faux HTML5 API using the Vimeo API


      player.media.play = () => {
        assurePlaybackState$1.call(player, true);
        return player.embed.play();
      };

      player.media.pause = () => {
        assurePlaybackState$1.call(player, false);
        return player.embed.pause();
      };

      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      }; // Seeking


      let {
        currentTime
      } = player.media;
      Object.defineProperty(player.media, 'currentTime', {
        get() {
          return currentTime;
        },

        set(time) {
          // Vimeo will automatically play on seek if the video hasn't been played before
          // Get current paused state and volume etc
          const {
            embed,
            media,
            paused,
            volume
          } = player;
          const restorePause = paused && !embed.hasPlayed; // Set seeking state and trigger event

          media.seeking = true;
          triggerEvent.call(player, media, 'seeking'); // If paused, mute until seek is complete

          Promise.resolve(restorePause && embed.setVolume(0)) // Seek
          .then(() => embed.setCurrentTime(time)) // Restore paused
          .then(() => restorePause && embed.pause()) // Restore volume
          .then(() => restorePause && embed.setVolume(volume)).catch(() => {// Do nothing
          });
        }

      }); // Playback speed

      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, 'playbackRate', {
        get() {
          return speed;
        },

        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent.call(player, player.media, 'ratechange');
          }).catch(() => {
            // Cannot set Playback Rate, Video is probably not on Pro account
            player.options.speed = [1];
          });
        }

      }); // Volume

      let {
        volume
      } = player.config;
      Object.defineProperty(player.media, 'volume', {
        get() {
          return volume;
        },

        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }

      }); // Muted

      let {
        muted
      } = player.config;
      Object.defineProperty(player.media, 'muted', {
        get() {
          return muted;
        },

        set(input) {
          const toggle = is.boolean(input) ? input : false;
          player.embed.setVolume(toggle ? 0 : player.config.volume).then(() => {
            muted = toggle;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }

      }); // Loop

      let {
        loop
      } = player.config;
      Object.defineProperty(player.media, 'loop', {
        get() {
          return loop;
        },

        set(input) {
          const toggle = is.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop = toggle;
          });
        }

      }); // Source

      let currentSrc;
      player.embed.getVideoUrl().then(value => {
        currentSrc = value;
        controls.setDownloadUrl.call(player);
      }).catch(error => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, 'currentSrc', {
        get() {
          return currentSrc;
        }

      }); // Ended

      Object.defineProperty(player.media, 'ended', {
        get() {
          return player.currentTime === player.duration;
        }

      }); // Set aspect ratio based on video size

      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(dimensions => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      }); // Set autopause

      player.embed.setAutopause(player.config.autopause).then(state => {
        player.config.autopause = state;
      }); // Get title

      player.embed.getVideoTitle().then(title => {
        player.config.title = title;
        ui.setTitle.call(this);
      }); // Get current time

      player.embed.getCurrentTime().then(value => {
        currentTime = value;
        triggerEvent.call(player, player.media, 'timeupdate');
      }); // Get duration

      player.embed.getDuration().then(value => {
        player.media.duration = value;
        triggerEvent.call(player, player.media, 'durationchange');
      }); // Get captions

      player.embed.getTextTracks().then(tracks => {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on('cuechange', ({
        cues = []
      }) => {
        const strippedCues = cues.map(cue => stripHTML(cue.text));
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on('loaded', () => {
        // Assure state and events are updated on autoplay
        player.embed.getPaused().then(paused => {
          assurePlaybackState$1.call(player, !paused);

          if (!paused) {
            triggerEvent.call(player, player.media, 'playing');
          }
        });

        if (is.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element; // Fix keyboard focus issues
          // https://github.com/sampotts/plyr/issues/317

          frame.setAttribute('tabindex', -1);
        }
      });
      player.embed.on('bufferstart', () => {
        triggerEvent.call(player, player.media, 'waiting');
      });
      player.embed.on('bufferend', () => {
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('play', () => {
        assurePlaybackState$1.call(player, true);
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('pause', () => {
        assurePlaybackState$1.call(player, false);
      });
      player.embed.on('timeupdate', data => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, 'timeupdate');
      });
      player.embed.on('progress', data => {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, 'progress'); // Check all loaded

        if (parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, 'canplaythrough');
        } // Get duration as if we do it before load, it gives an incorrect value
        // https://github.com/sampotts/plyr/issues/891


        player.embed.getDuration().then(value => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, 'durationchange');
          }
        });
      });
      player.embed.on('seeked', () => {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, 'seeked');
      });
      player.embed.on('ended', () => {
        player.media.paused = true;
        triggerEvent.call(player, player.media, 'ended');
      });
      player.embed.on('error', detail => {
        player.media.error = detail;
        triggerEvent.call(player, player.media, 'error');
      }); // Rebuild UI

      if (config.customControls) {
        setTimeout(() => ui.build.call(player), 0);
      }
    }

  };

  // ==========================================================================

  function parseId(url) {
    if (is.empty(url)) {
      return null;
    }

    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  function getHost(config) {
    if (config.noCookie) {
      return 'https://www.youtube-nocookie.com';
    }

    if (window.location.protocol === 'http:') {
      return 'http://www.youtube.com';
    } // Use YouTube's default


    return undefined;
  }

  const youtube = {
    setup() {
      // Add embed class for responsive
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Setup API

      if (is.object(window.YT) && is.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        // Reference current global callback
        const callback = window.onYouTubeIframeAPIReady; // Set callback to process queue

        window.onYouTubeIframeAPIReady = () => {
          // Call global callback if set
          if (is.function(callback)) {
            callback();
          }

          youtube.ready.call(this);
        }; // Load the SDK


        loadScript(this.config.urls.youtube.sdk).catch(error => {
          this.debug.warn('YouTube API failed to load', error);
        });
      }
    },

    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then(data => {
        if (is.object(data)) {
          const {
            title,
            height,
            width
          } = data; // Set title

          this.config.title = title;
          ui.setTitle.call(this); // Set aspect ratio

          this.embed.ratio = roundAspectRatio(width, height);
        }

        setAspectRatio.call(this);
      }).catch(() => {
        // Set aspect ratio
        setAspectRatio.call(this);
      });
    },

    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube; // Ignore already setup (race condition)

      const currentId = player.media && player.media.getAttribute('id');

      if (!is.empty(currentId) && currentId.startsWith('youtube-')) {
        return;
      } // Get the source URL or ID


      let source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is.empty(source)) {
        source = player.media.getAttribute(this.config.attributes.embed.id);
      } // Replace the <iframe> with a <div> due to YouTube API issues


      const videoId = parseId(source);
      const id = generateId(player.provider); // Replace media element

      const container = createElement('div', {
        id,
        'data-poster': config.customControls ? player.poster : undefined
      });
      player.media = replaceElement(container, player.media); // Only load the poster when using custom controls

      if (config.customControls) {
        const posterSrc = s => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`; // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)


        loadImage(posterSrc('maxres'), 121) // Higest quality and unpadded
        .catch(() => loadImage(posterSrc('sd'), 121)) // 480p padded 4:3
        .catch(() => loadImage(posterSrc('hq'))) // 360p padded 4:3. Always exists
        .then(image => ui.setPoster.call(player, image.src)).then(src => {
          // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
          if (!src.includes('maxres')) {
            player.elements.poster.style.backgroundSize = 'cover';
          }
        }).catch(() => {});
      } // Setup instance
      // https://developers.google.com/youtube/iframe_api_reference


      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend({}, {
          // Autoplay
          autoplay: player.config.autoplay ? 1 : 0,
          // iframe interface language
          hl: player.config.hl,
          // Only show controls if not fully supported or opted out
          controls: player.supported.ui && config.customControls ? 0 : 1,
          // Disable keyboard as we handle it
          disablekb: 1,
          // Allow iOS inline playback
          playsinline: !player.config.fullscreen.iosNative ? 1 : 0,
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language,
          // Tracking for stats
          widget_referrer: window ? window.location.href : null
        }, config),
        events: {
          onError(event) {
            // YouTube may fire onError twice, so only handle it once
            if (!player.media.error) {
              const code = event.data; // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError

              const message = {
                2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                101: 'The owner of the requested video does not allow it to be played in embedded players.',
                150: 'The owner of the requested video does not allow it to be played in embedded players.'
              }[code] || 'An unknown error occured';
              player.media.error = {
                code,
                message
              };
              triggerEvent.call(player, player.media, 'error');
            }
          },

          onPlaybackRateChange(event) {
            // Get the instance
            const instance = event.target; // Get current speed

            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, 'ratechange');
          },

          onReady(event) {
            // Bail if onReady has already been called. See issue #1108
            if (is.function(player.media.play)) {
              return;
            } // Get the instance


            const instance = event.target; // Get the title

            youtube.getTitle.call(player, videoId); // Create a faux HTML5 API using the YouTube API

            player.media.play = () => {
              assurePlaybackState.call(player, true);
              instance.playVideo();
            };

            player.media.pause = () => {
              assurePlaybackState.call(player, false);
              instance.pauseVideo();
            };

            player.media.stop = () => {
              instance.stopVideo();
            };

            player.media.duration = instance.getDuration();
            player.media.paused = true; // Seeking

            player.media.currentTime = 0;
            Object.defineProperty(player.media, 'currentTime', {
              get() {
                return Number(instance.getCurrentTime());
              },

              set(time) {
                // If paused and never played, mute audio preventively (YouTube starts playing on seek if the video hasn't been played yet).
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                } // Set seeking state and trigger event


                player.media.seeking = true;
                triggerEvent.call(player, player.media, 'seeking'); // Seek after events sent

                instance.seekTo(time);
              }

            }); // Playback speed

            Object.defineProperty(player.media, 'playbackRate', {
              get() {
                return instance.getPlaybackRate();
              },

              set(input) {
                instance.setPlaybackRate(input);
              }

            }); // Volume

            let {
              volume
            } = player.config;
            Object.defineProperty(player.media, 'volume', {
              get() {
                return volume;
              },

              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }

            }); // Muted

            let {
              muted
            } = player.config;
            Object.defineProperty(player.media, 'muted', {
              get() {
                return muted;
              },

              set(input) {
                const toggle = is.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? 'mute' : 'unMute']();
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }

            }); // Source

            Object.defineProperty(player.media, 'currentSrc', {
              get() {
                return instance.getVideoUrl();
              }

            }); // Ended

            Object.defineProperty(player.media, 'ended', {
              get() {
                return player.currentTime === player.duration;
              }

            }); // Get available speeds

            const speeds = instance.getAvailablePlaybackRates(); // Filter based on config

            player.options.speed = speeds.filter(s => player.config.speed.options.includes(s)); // Set the tabindex to avoid focus entering iframe

            if (player.supported.ui && config.customControls) {
              player.media.setAttribute('tabindex', -1);
            }

            triggerEvent.call(player, player.media, 'timeupdate');
            triggerEvent.call(player, player.media, 'durationchange'); // Reset timer

            clearInterval(player.timers.buffering); // Setup buffering

            player.timers.buffering = setInterval(() => {
              // Get loaded % from YouTube
              player.media.buffered = instance.getVideoLoadedFraction(); // Trigger progress only when we actually buffer something

              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent.call(player, player.media, 'progress');
              } // Set last buffer point


              player.media.lastBuffered = player.media.buffered; // Bail if we're at 100%

              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering); // Trigger event

                triggerEvent.call(player, player.media, 'canplaythrough');
              }
            }, 200); // Rebuild UI

            if (config.customControls) {
              setTimeout(() => ui.build.call(player), 50);
            }
          },

          onStateChange(event) {
            // Get the instance
            const instance = event.target; // Reset timer

            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event.data);

            if (seeked) {
              // Unset seeking and fire seeked event
              player.media.seeking = false;
              triggerEvent.call(player, player.media, 'seeked');
            } // Handle events
            // -1   Unstarted
            // 0    Ended
            // 1    Playing
            // 2    Paused
            // 3    Buffering
            // 5    Video cued


            switch (event.data) {
              case -1:
                // Update scrubber
                triggerEvent.call(player, player.media, 'timeupdate'); // Get loaded % from YouTube

                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent.call(player, player.media, 'progress');
                break;

              case 0:
                assurePlaybackState.call(player, false); // YouTube doesn't support loop for a single video, so mimick it.

                if (player.media.loop) {
                  // YouTube needs a call to `stopVideo` before playing again
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent.call(player, player.media, 'ended');
                }

                break;

              case 1:
                // Restore paused state (YouTube starts playing on seek if the video hasn't been played yet)
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState.call(player, true);
                  triggerEvent.call(player, player.media, 'playing'); // Poll to get playback progress

                  player.timers.playing = setInterval(() => {
                    triggerEvent.call(player, player.media, 'timeupdate');
                  }, 50); // Check duration again due to YouTube bug
                  // https://github.com/sampotts/plyr/issues/374
                  // https://code.google.com/p/gdata-issues/issues/detail?id=8690

                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent.call(player, player.media, 'durationchange');
                  }
                }

                break;

              case 2:
                // Restore audio (YouTube starts playing on seek if the video hasn't been played yet)
                if (!player.muted) {
                  player.embed.unMute();
                }

                assurePlaybackState.call(player, false);
                break;

              case 3:
                // Trigger waiting event to add loading classes to container as the video buffers.
                triggerEvent.call(player, player.media, 'waiting');
                break;
            }

            triggerEvent.call(player, player.elements.container, 'statechange', false, {
              code: event.data
            });
          }

        }
      });
    }

  };

  // ==========================================================================
  const media = {
    // Setup media
    setup() {
      // If there's no media, bail
      if (!this.media) {
        this.debug.warn('No media element found!');
        return;
      } // Add type class


      toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true); // Add provider class

      toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true); // Add video class for embeds
      // This will require changes if audio embeds are added

      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
      } // Inject the player wrapper


      if (this.isVideo) {
        // Create the wrapper div
        this.elements.wrapper = createElement('div', {
          class: this.config.classNames.video
        }); // Wrap the video in a container

        wrap(this.media, this.elements.wrapper); // Poster image container

        this.elements.poster = createElement('div', {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }

      if (this.isHTML5) {
        html5.setup.call(this);
      } else if (this.isYouTube) {
        youtube.setup.call(this);
      } else if (this.isVimeo) {
        vimeo.setup.call(this);
      }
    }

  };

  const destroy = instance => {
    // Destroy our adsManager
    if (instance.manager) {
      instance.manager.destroy();
    } // Destroy our adsManager


    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }

    instance.elements.container.remove();
  };

  class Ads {
    /**
     * Ads constructor.
     * @param {Object} player
     * @return {Ads}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (!this.enabled) {
          return;
        } // Check if the Google IMA3 SDK is loaded or load it ourselves


        if (!is.object(window.google) || !is.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
            this.ready();
          }).catch(() => {
            // Script failed to load or is blocked
            this.trigger('error', new Error('Google IMA SDK failed to load'));
          });
        } else {
          this.ready();
        }
      });

      _defineProperty$1(this, "ready", () => {
        // Double check we're enabled
        if (!this.enabled) {
          destroy(this);
        } // Start ticking our safety timer. If the whole advertisement
        // thing doesn't resolve within our set time; we bail


        this.startSafetyTimer(12000, 'ready()'); // Clear the safety timer

        this.managerPromise.then(() => {
          this.clearSafetyTimer('onAdsManagerLoaded()');
        }); // Set listeners on the Plyr instance

        this.listeners(); // Setup the IMA SDK

        this.setupIMA();
      });

      _defineProperty$1(this, "setupIMA", () => {
        // Create the container for our advertisements
        this.elements.container = createElement('div', {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container); // So we can run VPAID2

        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED); // Set language

        google.ima.settings.setLocale(this.player.config.ads.language); // Set playback for iOS10+

        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline); // We assume the adContainer is the video container of the plyr element that will house the ads

        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media); // Create ads loader

        this.loader = new google.ima.AdsLoader(this.elements.displayContainer); // Listen and respond to ads loaded and error events

        this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, event => this.onAdsManagerLoaded(event), false);
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error), false); // Request video ads to be pre-loaded

        this.requestAds();
      });

      _defineProperty$1(this, "requestAds", () => {
        const {
          container
        } = this.player.elements;

        try {
          // Request video ads
          const request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl; // Specify the linear and nonlinear slot sizes. This helps the SDK
          // to select the correct creative if multiple are returned

          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight; // We only overlay ads as we only support video.

          request.forceNonLinearFullSlot = false; // Mute based on current state

          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (error) {
          this.onAdError(error);
        }
      });

      _defineProperty$1(this, "pollCountdown", (start = false) => {
        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute('data-badge-text');
          return;
        }

        const update = () => {
          const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
          const label = `${i18n.get('advertisement', this.player.config)} - ${time}`;
          this.elements.container.setAttribute('data-badge-text', label);
        };

        this.countdownTimer = setInterval(update, 100);
      });

      _defineProperty$1(this, "onAdsManagerLoaded", event => {
        // Load could occur after a source change (race condition)
        if (!this.enabled) {
          return;
        } // Get the ads manager


        const settings = new google.ima.AdsRenderingSettings(); // Tell the SDK to save and restore content video state on our behalf

        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true; // The SDK is polling currentTime on the contentPlayback. And needs a duration
        // so it can determine when to start the mid- and post-roll

        this.manager = event.getAdsManager(this.player, settings); // Get the cue points for any mid-rolls by filtering out the pre- and post-roll

        this.cuePoints = this.manager.getCuePoints(); // Add listeners to the required events
        // Advertisement error events

        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error)); // Advertisement regular events

        Object.keys(google.ima.AdEvent.Type).forEach(type => {
          this.manager.addEventListener(google.ima.AdEvent.Type[type], e => this.onAdEvent(e));
        }); // Resolve our adsManager

        this.trigger('loaded');
      });

      _defineProperty$1(this, "addCuePoints", () => {
        // Add advertisement cue's within the time line if available
        if (!is.empty(this.cuePoints)) {
          this.cuePoints.forEach(cuePoint => {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
              const seekElement = this.player.elements.progress;

              if (is.element(seekElement)) {
                const cuePercentage = 100 / this.player.duration * cuePoint;
                const cue = createElement('span', {
                  class: this.player.config.classNames.cues
                });
                cue.style.left = `${cuePercentage.toString()}%`;
                seekElement.appendChild(cue);
              }
            }
          });
        }
      });

      _defineProperty$1(this, "onAdEvent", event => {
        const {
          container
        } = this.player.elements; // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
        // don't have ad object associated

        const ad = event.getAd();
        const adData = event.getAdData(); // Proxy event

        const dispatchEvent = type => {
          triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, '').toLowerCase()}`);
        }; // Bubble the event


        dispatchEvent(event.type);

        switch (event.type) {
          case google.ima.AdEvent.Type.LOADED:
            // This is the first event sent for an ad - it is possible to determine whether the
            // ad is a video ad or an overlay
            this.trigger('loaded'); // Start countdown

            this.pollCountdown(true);

            if (!ad.isLinear()) {
              // Position AdDisplayContainer correctly for overlay
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            } // console.info('Ad type: ' + event.getAd().getAdPodInfo().getPodIndex());
            // console.info('Ad time: ' + event.getAd().getAdPodInfo().getTimeOffset());


            break;

          case google.ima.AdEvent.Type.STARTED:
            // Set volume to match player
            this.manager.setVolume(this.player.volume);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            // All ads for the current videos are done. We can now request new advertisements
            // in case the video is re-played
            // TODO: Example for what happens when a next video in a playlist would be loaded.
            // So here we load a new video when all ads are done.
            // Then we load new ads within a new adsManager. When the video
            // Is started - after - the ads are loaded, then we get ads.
            // You can also easily test cancelling and reloading by running
            // player.ads.cancel() and player.ads.play from the console I guess.
            // this.player.source = {
            //     type: 'video',
            //     title: 'View From A Blue Moon',
            //     sources: [{
            //         src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type:
            // 'video/mp4', }], poster:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg', tracks:
            // [ { kind: 'captions', label: 'English', srclang: 'en', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            // default: true, }, { kind: 'captions', label: 'French', srclang: 'fr', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt', }, ],
            // };
            // TODO: So there is still this thing where a video should only be allowed to start
            // playing when the IMA SDK is ready or has failed
            if (this.player.ended) {
              this.loadAds();
            } else {
              // The SDK won't allow new ads to be called without receiving a contentComplete()
              this.loader.contentComplete();
            }

            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            // This event indicates the ad has started - the video player can adjust the UI,
            // for example display a pause button and remaining time. Fired when content should
            // be paused. This usually happens right before an ad is about to cover the content
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            // This event indicates the ad has finished - the video player can perform
            // appropriate UI actions, such as removing the timer for remaining time detection.
            // Fired when content should be resumed. This usually happens when an ad finishes
            // or collapses
            this.pollCountdown();
            this.resumeContent();
            break;

          case google.ima.AdEvent.Type.LOG:
            if (adData.adError) {
              this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
            }

            break;
        }
      });

      _defineProperty$1(this, "onAdError", event => {
        this.cancel();
        this.player.debug.warn('Ads error', event);
      });

      _defineProperty$1(this, "listeners", () => {
        const {
          container
        } = this.player.elements;
        let time;
        this.player.on('canplay', () => {
          this.addCuePoints();
        });
        this.player.on('ended', () => {
          this.loader.contentComplete();
        });
        this.player.on('timeupdate', () => {
          time = this.player.currentTime;
        });
        this.player.on('seeked', () => {
          const seekedTime = this.player.currentTime;

          if (is.empty(this.cuePoints)) {
            return;
          }

          this.cuePoints.forEach((cuePoint, index) => {
            if (time < cuePoint && cuePoint < seekedTime) {
              this.manager.discardAdBreak();
              this.cuePoints.splice(index, 1);
            }
          });
        }); // Listen to the resizing of the window. And resize ad accordingly
        // TODO: eventually implement ResizeObserver

        window.addEventListener('resize', () => {
          if (this.manager) {
            this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      });

      _defineProperty$1(this, "play", () => {
        const {
          container
        } = this.player.elements;

        if (!this.managerPromise) {
          this.resumeContent();
        } // Play the requested advertisement whenever the adsManager is ready


        this.managerPromise.then(() => {
          // Set volume to match player
          this.manager.setVolume(this.player.volume); // Initialize the container. Must be done via a user action on mobile devices

          this.elements.displayContainer.initialize();

          try {
            if (!this.initialized) {
              // Initialize the ads manager. Ad rules playlist will start at this time
              this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL); // Call play to start showing the ad. Single video and overlay ads will
              // start at this time; the call will be ignored for ad rules

              this.manager.start();
            }

            this.initialized = true;
          } catch (adError) {
            // An error may be thrown if there was a problem with the
            // VAST response
            this.onAdError(adError);
          }
        }).catch(() => {});
      });

      _defineProperty$1(this, "resumeContent", () => {
        // Hide the advertisement container
        this.elements.container.style.zIndex = ''; // Ad is stopped

        this.playing = false; // Play video

        silencePromise(this.player.media.play());
      });

      _defineProperty$1(this, "pauseContent", () => {
        // Show the advertisement container
        this.elements.container.style.zIndex = 3; // Ad is playing

        this.playing = true; // Pause our video.

        this.player.media.pause();
      });

      _defineProperty$1(this, "cancel", () => {
        // Pause our video
        if (this.initialized) {
          this.resumeContent();
        } // Tell our instance that we're done for now


        this.trigger('error'); // Re-create our adsManager

        this.loadAds();
      });

      _defineProperty$1(this, "loadAds", () => {
        // Tell our adsManager to go bye bye
        this.managerPromise.then(() => {
          // Destroy our adsManager
          if (this.manager) {
            this.manager.destroy();
          } // Re-set our adsManager promises


          this.managerPromise = new Promise(resolve => {
            this.on('loaded', resolve);
            this.player.debug.log(this.manager);
          }); // Now that the manager has been destroyed set it to also be un-initialized

          this.initialized = false; // Now request some new advertisements

          this.requestAds();
        }).catch(() => {});
      });

      _defineProperty$1(this, "trigger", (event, ...args) => {
        const handlers = this.events[event];

        if (is.array(handlers)) {
          handlers.forEach(handler => {
            if (is.function(handler)) {
              handler.apply(this, args);
            }
          });
        }
      });

      _defineProperty$1(this, "on", (event, callback) => {
        if (!is.array(this.events[event])) {
          this.events[event] = [];
        }

        this.events[event].push(callback);
        return this;
      });

      _defineProperty$1(this, "startSafetyTimer", (time, from) => {
        this.player.debug.log(`Safety timer invoked from: ${from}`);
        this.safetyTimer = setTimeout(() => {
          this.cancel();
          this.clearSafetyTimer('startSafetyTimer()');
        }, time);
      });

      _defineProperty$1(this, "clearSafetyTimer", from => {
        if (!is.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log(`Safety timer cleared from: ${from}`);
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      });

      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null; // Setup a promise to resolve when the IMA manager is ready

      this.managerPromise = new Promise((resolve, reject) => {
        // The ad is loaded and ready
        this.on('loaded', resolve); // Ads failed

        this.on('error', reject);
      });
      this.load();
    }

    get enabled() {
      const {
        config
      } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
    }
    /**
     * Load the IMA SDK
     */


    // Build the tag URL
    get tagUrl() {
      const {
        config
      } = this;

      if (is.url(config.tagUrl)) {
        return config.tagUrl;
      }

      const params = {
        AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
        AV_CHANNELID: '5a0458dc28a06145e4519d21',
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = 'https://go.aniview.com/api/adserver6/vast/';
      return `${base}?${buildUrlParams(params)}`;
    }
    /**
     * In order for the SDK to display ads for our video, we need to tell it where to put them,
     * so here we define our ad container. This div is set up to render on top of the video player.
     * Using the code below, we tell the SDK to render ads within that div. We also provide a
     * handle to the content video player - the SDK will poll the current time of our player to
     * properly place mid-rolls. After we create the ad display container, we initialize it. On
     * mobile devices, this initialization is done as the result of a user action.
     */


  }

  const parseVtt = vttDataString => {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach(frame => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach(line => {
        if (!is.number(result.startTime)) {
          // The line with start and end times on it is the first line of interest
          const matchTimes = line.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/); // Note that this currently ignores caption formatting directives that are optionally on the end of this line - fine for non-captions VTT

          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
          }
        } else if (!is.empty(line.trim()) && is.empty(result.text)) {
          // If we already have the startTime, then we're definitely up to the text line(s)
          const lineSplit = line.trim().split('#xywh=');
          [result.text] = lineSplit; // If there's content in lineSplit[1], then we have sprites. If not, then it's just one frame per image

          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(',');
          }
        }
      });

      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  };
  /**
   * Preview thumbnails for seek hover and scrubbing
   * Seeking: Hover over the seek bar (desktop only): shows a small preview container above the seek bar
   * Scrubbing: Click and drag the seek bar (desktop and mobile): shows the preview image over the entire video, as if the video is scrubbing at very high speed
   *
   * Notes:
   * - Thumbs are set via JS settings on Plyr init, not HTML5 'track' property. Using the track property would be a bit gross, because it doesn't support custom 'kinds'. kind=metadata might be used for something else, and we want to allow multiple thumbnails tracks. Tracks must have a unique combination of 'kind' and 'label'. We would have to do something like kind=metadata,label=thumbnails1 / kind=metadata,label=thumbnails2. Square peg, round hole
   * - VTT info: the image URL is relative to the VTT, not the current document. But if the url starts with a slash, it will naturally be relative to the current domain. https://support.jwplayer.com/articles/how-to-add-preview-thumbnails
   * - This implementation uses multiple separate img elements. Other implementations use background-image on one element. This would be nice and simple, but Firefox and Safari have flickering issues with replacing backgrounds of larger images. It seems that YouTube perhaps only avoids this because they don't have the option for high-res previews (even the fullscreen ones, when mousedown/seeking). Images appear over the top of each other, and previous ones are discarded once the new ones have been rendered
   */


  const fitRatio = (ratio, outer) => {
    const targetRatio = outer.width / outer.height;
    const result = {};

    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }

    return result;
  };

  class PreviewThumbnails {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        // Toggle the regular seek tooltip
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }

        if (!this.enabled) {
          return;
        }

        this.getThumbnails().then(() => {
          if (!this.enabled) {
            return;
          } // Render DOM elements


          this.render(); // Check to see if thumb container size was specified manually in CSS

          this.determineContainerAutoSizing();
          this.loaded = true;
        });
      });

      _defineProperty$1(this, "getThumbnails", () => {
        return new Promise(resolve => {
          const {
            src
          } = this.player.config.previewThumbnails;

          if (is.empty(src)) {
            throw new Error('Missing previewThumbnails.src config attribute');
          } // Resolve promise


          const sortAndResolve = () => {
            // Sort smallest to biggest (e.g., [120p, 480p, 1080p])
            this.thumbnails.sort((x, y) => x.height - y.height);
            this.player.debug.log('Preview thumbnails', this.thumbnails);
            resolve();
          }; // Via callback()


          if (is.function(src)) {
            src(thumbnails => {
              this.thumbnails = thumbnails;
              sortAndResolve();
            });
          } // VTT urls
          else {
            // If string, convert into single-element list
            const urls = is.string(src) ? [src] : src; // Loop through each src URL. Download and process the VTT file, storing the resulting data in this.thumbnails

            const promises = urls.map(u => this.getThumbnail(u)); // Resolve

            Promise.all(promises).then(sortAndResolve);
          }
        });
      });

      _defineProperty$1(this, "getThumbnail", url => {
        return new Promise(resolve => {
          fetch(url).then(response => {
            const thumbnail = {
              frames: parseVtt(response),
              height: null,
              urlPrefix: ''
            }; // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
            // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
            // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file

            if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
              thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
            } // Download the first frame, so that we can determine/set the height of this thumbnailsDef


            const tempImage = new Image();

            tempImage.onload = () => {
              thumbnail.height = tempImage.naturalHeight;
              thumbnail.width = tempImage.naturalWidth;
              this.thumbnails.push(thumbnail);
              resolve();
            };

            tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
          });
        });
      });

      _defineProperty$1(this, "startMove", event => {
        if (!this.loaded) {
          return;
        }

        if (!is.event(event) || !['touchmove', 'mousemove'].includes(event.type)) {
          return;
        } // Wait until media has a duration


        if (!this.player.media.duration) {
          return;
        }

        if (event.type === 'touchmove') {
          // Calculate seek hover position as approx video seconds
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        } else {
          // Calculate seek hover position as approx video seconds
          const clientRect = this.player.elements.progress.getBoundingClientRect();
          const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
          this.seekTime = this.player.media.duration * (percentage / 100);

          if (this.seekTime < 0) {
            // The mousemove fires for 10+px out to the left
            this.seekTime = 0;
          }

          if (this.seekTime > this.player.media.duration - 1) {
            // Took 1 second off the duration for safety, because different players can disagree on the real duration of a video
            this.seekTime = this.player.media.duration - 1;
          }

          this.mousePosX = event.pageX; // Set time text inside image container

          this.elements.thumb.time.innerText = formatTime(this.seekTime);
        } // Download and show image


        this.showImageAtCurrentTime();
      });

      _defineProperty$1(this, "endMove", () => {
        this.toggleThumbContainer(false, true);
      });

      _defineProperty$1(this, "startScrubbing", event => {
        // Only act on left mouse button (0), or touch device (event.button does not exist or is false)
        if (is.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
          this.mouseDown = true; // Wait until media has a duration

          if (this.player.media.duration) {
            this.toggleScrubbingContainer(true);
            this.toggleThumbContainer(false, true); // Download and show image

            this.showImageAtCurrentTime();
          }
        }
      });

      _defineProperty$1(this, "endScrubbing", () => {
        this.mouseDown = false; // Hide scrubbing preview. But wait until the video has successfully seeked before hiding the scrubbing preview

        if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
          // The video was already seeked/loaded at the chosen time - hide immediately
          this.toggleScrubbingContainer(false);
        } else {
          // The video hasn't seeked yet. Wait for that
          once.call(this.player, this.player.media, 'timeupdate', () => {
            // Re-check mousedown - we might have already started scrubbing again
            if (!this.mouseDown) {
              this.toggleScrubbingContainer(false);
            }
          });
        }
      });

      _defineProperty$1(this, "listeners", () => {
        // Hide thumbnail preview - on mouse click, mouse leave (in listeners.js for now), and video play/seek. All four are required, e.g., for buffering
        this.player.on('play', () => {
          this.toggleThumbContainer(false, true);
        });
        this.player.on('seeked', () => {
          this.toggleThumbContainer(false);
        });
        this.player.on('timeupdate', () => {
          this.lastTime = this.player.media.currentTime;
        });
      });

      _defineProperty$1(this, "render", () => {
        // Create HTML element: plyr__preview-thumbnail-container
        this.elements.thumb.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        }); // Wrapper for the image for styling

        this.elements.thumb.imageContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer); // Create HTML element, parent+span: time text (e.g., 01:32:00)

        const timeContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement('span', {}, '00:00');
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.container.appendChild(timeContainer); // Inject the whole thumb

        if (is.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        } // Create HTML element: plyr__preview-scrubbing-container


        this.elements.scrubbing.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      });

      _defineProperty$1(this, "destroy", () => {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }

        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      });

      _defineProperty$1(this, "showImageAtCurrentTime", () => {
        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        } // Find the desired thumbnail index
        // TODO: Handle a video longer than the thumbs where thumbNum is null


        const thumbNum = this.thumbnails[0].frames.findIndex(frame => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
        const hasThumb = thumbNum >= 0;
        let qualityIndex = 0; // Show the thumb container if we're not scrubbing

        if (!this.mouseDown) {
          this.toggleThumbContainer(hasThumb);
        } // No matching thumb found


        if (!hasThumb) {
          return;
        } // Check to see if we've already downloaded higher quality versions of this image


        this.thumbnails.forEach((thumbnail, index) => {
          if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        }); // Only proceed if either thumbnum or thumbfilename has changed

        if (thumbNum !== this.showingThumb) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex);
        }
      });

      _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
        const thumbNum = this.showingThumb;
        const thumbnail = this.thumbnails[qualityIndex];
        const {
          urlPrefix
        } = thumbnail;
        const frame = thumbnail.frames[thumbNum];
        const thumbFilename = thumbnail.frames[thumbNum].text;
        const thumbUrl = urlPrefix + thumbFilename;

        if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
          // If we're already loading a previous image, remove its onload handler - we don't want it to load after this one
          // Only do this if not using sprites. Without sprites we really want to show as many images as possible, as a best-effort
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          } // We're building and adding a new image. In other implementations of similar functionality (YouTube), background image
          // is instead used. But this causes issues with larger images in Firefox and Safari - switching between background
          // images causes a flicker. Putting a new image over the top does not


          const previewImage = new Image();
          previewImage.src = thumbUrl;
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log(`Loading image: ${thumbUrl}`); // For some reason, passing the named function directly causes it to execute immediately. So I've wrapped it in an anonymous function...

          previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);

          this.loadingImage = previewImage;
          this.removeOldImages(previewImage);
        } else {
          // Update the existing image
          this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
          this.currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(this.currentImageElement);
        }
      });

      _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
        this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
        this.setImageSizeAndOffset(previewImage, frame);

        if (newImage) {
          this.currentImageContainer.appendChild(previewImage);
          this.currentImageElement = previewImage;

          if (!this.loadedImages.includes(thumbFilename)) {
            this.loadedImages.push(thumbFilename);
          }
        } // Preload images before and after the current one
        // Show higher quality of the same frame
        // Each step here has a short time delay, and only continues if still hovering/seeking the same spot. This is to protect slow connections from overloading


        this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
      });

      _defineProperty$1(this, "removeOldImages", currentImage => {
        // Get a list of all images, convert it from a DOM list to an array
        Array.from(this.currentImageContainer.children).forEach(image => {
          if (image.tagName.toLowerCase() !== 'img') {
            return;
          }

          const removeDelay = this.usingSprites ? 500 : 1000;

          if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            // Wait 200ms, as the new image can take some time to show on certain browsers (even though it was downloaded before showing). This will prevent flicker, and show some generosity towards slower clients
            // First set attribute 'deleting' to prevent multi-handling of this on repeat firing of this function
            // eslint-disable-next-line no-param-reassign
            image.dataset.deleting = true; // This has to be set before the timeout - to prevent issues switching between hover and scrub

            const {
              currentImageContainer
            } = this;
            setTimeout(() => {
              currentImageContainer.removeChild(image);
              this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
            }, removeDelay);
          }
        });
      });

      _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
        return new Promise(resolve => {
          setTimeout(() => {
            const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;

            if (this.showingThumbFilename === oldThumbFilename) {
              // Find the nearest thumbs with different filenames. Sometimes it'll be the next index, but in the case of sprites, it might be 100+ away
              let thumbnailsClone;

              if (forward) {
                thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }

              let foundOne = false;
              thumbnailsClone.forEach(frame => {
                const newThumbFilename = frame.text;

                if (newThumbFilename !== oldThumbFilename) {
                  // Found one with a different filename. Make sure it hasn't already been loaded on this page visit
                  if (!this.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;
                    this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                    const {
                      urlPrefix
                    } = this.thumbnails[0];
                    const thumbURL = urlPrefix + newThumbFilename;
                    const previewImage = new Image();
                    previewImage.src = thumbURL;

                    previewImage.onload = () => {
                      this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                      if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename); // We don't resolve until the thumb is loaded

                      resolve();
                    };
                  }
                }
              }); // If there are none to preload then we want to resolve immediately

              if (!foundOne) {
                resolve();
              }
            }
          }, 300);
        });
      });

      _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
        if (currentQualityIndex < this.thumbnails.length - 1) {
          // Only use the higher quality version if it's going to look any better - if the current thumb is of a lower pixel density than the thumbnail container
          let previewImageHeight = previewImage.naturalHeight;

          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }

          if (previewImageHeight < this.thumbContainerHeight) {
            // Recurse back to the loadImage function - show a higher quality one, but only if the viewer is on this frame for a while
            setTimeout(() => {
              // Make sure the mouse hasn't already moved on and started hovering at another image
              if (this.showingThumbFilename === thumbFilename) {
                this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
                this.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      });

      _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
        const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);

        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });

      _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
        const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);

        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });

      _defineProperty$1(this, "determineContainerAutoSizing", () => {
        if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
          // This will prevent auto sizing in this.setThumbContainerSizeAndPos()
          this.sizeSpecifiedInCSS = true;
        }
      });

      _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
        if (!this.sizeSpecifiedInCSS) {
          const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`;
          this.elements.thumb.imageContainer.style.width = `${thumbWidth}px`;
        } else if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
          const thumbWidth = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.width = `${thumbWidth}px`;
        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
          const thumbHeight = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = `${thumbHeight}px`;
        }

        this.setThumbContainerPos();
      });

      _defineProperty$1(this, "setThumbContainerPos", () => {
        const seekbarRect = this.player.elements.progress.getBoundingClientRect();
        const plyrRect = this.player.elements.container.getBoundingClientRect();
        const {
          container
        } = this.elements.thumb; // Find the lowest and highest desired left-position, so we don't slide out the side of the video container

        const minVal = plyrRect.left - seekbarRect.left + 10;
        const maxVal = plyrRect.right - seekbarRect.left - container.clientWidth - 10; // Set preview container position to: mousepos, minus seekbar.left, minus half of previewContainer.clientWidth

        let previewPos = this.mousePosX - seekbarRect.left - container.clientWidth / 2;

        if (previewPos < minVal) {
          previewPos = minVal;
        }

        if (previewPos > maxVal) {
          previewPos = maxVal;
        }

        container.style.left = `${previewPos}px`;
      });

      _defineProperty$1(this, "setScrubbingContainerSize", () => {
        const {
          width,
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = `${width}px`;
        this.elements.scrubbing.container.style.height = `${height}px`;
      });

      _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
        if (!this.usingSprites) {
          return;
        } // Find difference between height and preview container height


        const multiplier = this.thumbContainerHeight / frame.h; // eslint-disable-next-line no-param-reassign

        previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.left = `-${frame.x * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.top = `-${frame.y * multiplier}px`;
      });

      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }

    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }

    get currentImageContainer() {
      if (this.mouseDown) {
        return this.elements.scrubbing.container;
      }

      return this.elements.thumb.imageContainer;
    }

    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes('w');
    }

    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }

      return this.thumbnails[0].width / this.thumbnails[0].height;
    }

    get thumbContainerHeight() {
      if (this.mouseDown) {
        const {
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      } // If css is used this needs to return the css height for sprites to work (see setImageSizeAndOffset)


      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }

      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }

    get currentImageElement() {
      if (this.mouseDown) {
        return this.currentScrubbingImageElement;
      }

      return this.currentThumbnailImageElement;
    }

    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }

  }

  // ==========================================================================
  const source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is.array(attributes)) {
        attributes.forEach(attribute => {
          insertElement(type, this.media, attribute);
        });
      }
    },

    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, 'sources.length')) {
        this.debug.warn('Invalid source format');
        return;
      } // Cancel current network requests


      html5.cancelRequests.call(this); // Destroy instance and re-setup

      this.destroy.call(this, () => {
        // Reset quality options
        this.options.quality = []; // Remove elements

        removeElement(this.media);
        this.media = null; // Reset class name

        if (is.element(this.elements.container)) {
          this.elements.container.removeAttribute('class');
        } // Set the type and provider


        const {
          sources,
          type
        } = input;
        const [{
          provider = providers.html5,
          src
        }] = sources;
        const tagName = provider === 'html5' ? type : 'div';
        const attributes = provider === 'html5' ? {} : {
          src
        };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        }); // Inject the new element

        this.elements.container.appendChild(this.media); // Autoplay the new source?

        if (is.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        } // Set attributes for audio and video


        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute('crossorigin', '');
          }

          if (this.config.autoplay) {
            this.media.setAttribute('autoplay', '');
          }

          if (!is.empty(input.poster)) {
            this.poster = input.poster;
          }

          if (this.config.loop.active) {
            this.media.setAttribute('loop', '');
          }

          if (this.config.muted) {
            this.media.setAttribute('muted', '');
          }

          if (this.config.playsinline) {
            this.media.setAttribute('playsinline', '');
          }
        } // Restore class hook


        ui.addStyleHook.call(this); // Set new sources for html5

        if (this.isHTML5) {
          source.insertElements.call(this, 'source', sources);
        } // Set video title


        this.config.title = input.title; // Set up from scratch

        media.setup.call(this); // HTML5 stuff

        if (this.isHTML5) {
          // Setup captions
          if (Object.keys(input).includes('tracks')) {
            source.insertElements.call(this, 'track', input.tracks);
          }
        } // If HTML5 or embed but not fully supported, setupInterface and call ready now


        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          // Setup interface
          ui.build.call(this);
        } // Load HTML5 sources


        if (this.isHTML5) {
          this.media.load();
        } // Update previewThumbnails config & reload plugin


        if (!is.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails); // Cleanup previewThumbnails plugin if it was loaded

          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          } // Create new instance if it is still enabled


          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new PreviewThumbnails(this);
          }
        } // Update the fullscreen support


        this.fullscreen.update();
      }, true);
    }

  };

  /**
   * Returns a number whose value is limited to the given range.
   *
   * Example: limit the output of this computation to between 0 and 255
   * (x * 255).clamp(0, 255)
   *
   * @param {Number} input
   * @param {Number} min The lower boundary of the output range
   * @param {Number} max The upper boundary of the output range
   * @returns A number in the range [min, max]
   * @type Number
   */
  function clamp(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }

  // TODO: Use a WeakMap for private globals
  // const globals = new WeakMap();
  // Plyr instance

  class Plyr {
    constructor(target, options) {
      _defineProperty$1(this, "play", () => {
        if (!is.function(this.media.play)) {
          return null;
        } // Intecept play with ads


        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
        } // Return the promise (for HTML5)


        return this.media.play();
      });

      _defineProperty$1(this, "pause", () => {
        if (!this.playing || !is.function(this.media.pause)) {
          return null;
        }

        return this.media.pause();
      });

      _defineProperty$1(this, "togglePlay", input => {
        // Toggle based on current state if nothing passed
        const toggle = is.boolean(input) ? input : !this.playing;

        if (toggle) {
          return this.play();
        }

        return this.pause();
      });

      _defineProperty$1(this, "stop", () => {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is.function(this.media.stop)) {
          this.media.stop();
        }
      });

      _defineProperty$1(this, "restart", () => {
        this.currentTime = 0;
      });

      _defineProperty$1(this, "rewind", seekTime => {
        this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
      });

      _defineProperty$1(this, "forward", seekTime => {
        this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
      });

      _defineProperty$1(this, "increaseVolume", step => {
        const volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is.number(step) ? step : 0);
      });

      _defineProperty$1(this, "decreaseVolume", step => {
        this.increaseVolume(-step);
      });

      _defineProperty$1(this, "airplay", () => {
        // Show dialog if supported
        if (support.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      });

      _defineProperty$1(this, "toggleControls", toggle => {
        // Don't toggle if missing UI support or if it's audio
        if (this.supported.ui && !this.isAudio) {
          // Get state before change
          const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls); // Negate the argument if not undefined since adding the class to hides the controls

          const force = typeof toggle === 'undefined' ? undefined : !toggle; // Apply and get updated state

          const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force); // Close menu

          if (hiding && is.array(this.config.controls) && this.config.controls.includes('settings') && !is.empty(this.config.settings)) {
            controls.toggleMenu.call(this, false);
          } // Trigger event on change


          if (hiding !== isHidden) {
            const eventName = hiding ? 'controlshidden' : 'controlsshown';
            triggerEvent.call(this, this.media, eventName);
          }

          return !hiding;
        }

        return false;
      });

      _defineProperty$1(this, "on", (event, callback) => {
        on.call(this, this.elements.container, event, callback);
      });

      _defineProperty$1(this, "once", (event, callback) => {
        once.call(this, this.elements.container, event, callback);
      });

      _defineProperty$1(this, "off", (event, callback) => {
        off(this.elements.container, event, callback);
      });

      _defineProperty$1(this, "destroy", (callback, soft = false) => {
        if (!this.ready) {
          return;
        }

        const done = () => {
          // Reset overflow (incase destroyed while in fullscreen)
          document.body.style.overflow = ''; // GC for embed

          this.embed = null; // If it's a soft destroy, make minimal changes

          if (soft) {
            if (Object.keys(this.elements).length) {
              // Remove elements
              removeElement(this.elements.buttons.play);
              removeElement(this.elements.captions);
              removeElement(this.elements.controls);
              removeElement(this.elements.wrapper); // Clear for GC

              this.elements.buttons.play = null;
              this.elements.captions = null;
              this.elements.controls = null;
              this.elements.wrapper = null;
            } // Callback


            if (is.function(callback)) {
              callback();
            }
          } else {
            // Unbind listeners
            unbindListeners.call(this); // Cancel current network requests

            html5.cancelRequests.call(this); // Replace the container with the original element provided

            replaceElement(this.elements.original, this.elements.container); // Event

            triggerEvent.call(this, this.elements.original, 'destroyed', true); // Callback

            if (is.function(callback)) {
              callback.call(this.elements.original);
            } // Reset state


            this.ready = false; // Clear for garbage collection

            setTimeout(() => {
              this.elements = null;
              this.media = null;
            }, 200);
          }
        }; // Stop playback


        this.stop(); // Clear timeouts

        clearTimeout(this.timers.loading);
        clearTimeout(this.timers.controls);
        clearTimeout(this.timers.resized); // Provider specific stuff

        if (this.isHTML5) {
          // Restore native video controls
          ui.toggleNativeControls.call(this, true); // Clean up

          done();
        } else if (this.isYouTube) {
          // Clear timers
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing); // Destroy YouTube API

          if (this.embed !== null && is.function(this.embed.destroy)) {
            this.embed.destroy();
          } // Clean up


          done();
        } else if (this.isVimeo) {
          // Destroy Vimeo API
          // then clean up (wait, to prevent postmessage errors)
          if (this.embed !== null) {
            this.embed.unload().then(done);
          } // Vimeo does not always return


          setTimeout(done, 200);
        }
      });

      _defineProperty$1(this, "supports", type => support.mime.call(this, type));

      this.timers = {}; // State

      this.ready = false;
      this.loading = false;
      this.failed = false; // Touch device

      this.touch = support.touch; // Set the media element

      this.media = target; // String selector passed

      if (is.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      } // jQuery, NodeList or Array passed, use first element


      if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
        // eslint-disable-next-line
        this.media = this.media[0];
      } // Set config


      this.config = extend({}, defaults, Plyr.defaults, options || {}, (() => {
        try {
          return JSON.parse(this.media.getAttribute('data-plyr-config'));
        } catch (_) {
          return {};
        }
      })()); // Elements cache

      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }; // Captions

      this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }; // Fullscreen

      this.fullscreen = {
        active: false
      }; // Options

      this.options = {
        speed: [],
        quality: []
      }; // Debugging
      // TODO: move to globals

      this.debug = new Console(this.config.debug); // Log config options and support

      this.debug.log('Config', this.config);
      this.debug.log('Support', support); // We need an element to setup

      if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
        this.debug.error('Setup failed: no suitable element passed');
        return;
      } // Bail if the element is initialized


      if (this.media.plyr) {
        this.debug.warn('Target already setup');
        return;
      } // Bail if not enabled


      if (!this.config.enabled) {
        this.debug.error('Setup failed: disabled by config');
        return;
      } // Bail if disabled or no basic support
      // You may want to disable certain UAs etc


      if (!support.check().api) {
        this.debug.error('Setup failed: no support');
        return;
      } // Cache original element state for .destroy()


      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone; // Set media type based on tag or data attribute
      // Supported: video, audio, vimeo, youtube

      const _type = this.media.tagName.toLowerCase(); // Embed properties


      let iframe = null;
      let url = null; // Different setup based on type

      switch (_type) {
        case 'div':
          // Find the frame
          iframe = this.media.querySelector('iframe'); // <iframe> type

          if (is.element(iframe)) {
            // Detect provider
            url = parseUrl(iframe.getAttribute('src'));
            this.provider = getProviderByUrl(url.toString()); // Rework elements

            this.elements.container = this.media;
            this.media = iframe; // Reset classname

            this.elements.container.className = ''; // Get attributes from URL and set config

            if (url.search.length) {
              const truthy = ['1', 'true'];

              if (truthy.includes(url.searchParams.get('autoplay'))) {
                this.config.autoplay = true;
              }

              if (truthy.includes(url.searchParams.get('loop'))) {
                this.config.loop.active = true;
              } // TODO: replace fullscreen.iosNative with this playsinline config option
              // YouTube requires the playsinline in the URL


              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get('playsinline'));
                this.config.youtube.hl = url.searchParams.get('hl'); // TODO: Should this be setting language?
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            // <div> with attributes
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider); // Remove attribute

            this.media.removeAttribute(this.config.attributes.embed.provider);
          } // Unsupported or missing provider


          if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error('Setup failed: Invalid provider');
            return;
          } // Audio will come later for external providers


          this.type = types.video;
          break;

        case 'video':
        case 'audio':
          this.type = _type;
          this.provider = providers.html5; // Get config from attributes

          if (this.media.hasAttribute('crossorigin')) {
            this.config.crossorigin = true;
          }

          if (this.media.hasAttribute('autoplay')) {
            this.config.autoplay = true;
          }

          if (this.media.hasAttribute('playsinline') || this.media.hasAttribute('webkit-playsinline')) {
            this.config.playsinline = true;
          }

          if (this.media.hasAttribute('muted')) {
            this.config.muted = true;
          }

          if (this.media.hasAttribute('loop')) {
            this.config.loop.active = true;
          }

          break;

        default:
          this.debug.error('Setup failed: unsupported type');
          return;
      } // Check for support again but with type


      this.supported = support.check(this.type, this.provider, this.config.playsinline); // If no support for even API, bail

      if (!this.supported.api) {
        this.debug.error('Setup failed: no support');
        return;
      }

      this.eventListeners = []; // Create listeners

      this.listeners = new Listeners(this); // Setup local storage for user settings

      this.storage = new Storage(this); // Store reference

      this.media.plyr = this; // Wrap media

      if (!is.element(this.elements.container)) {
        this.elements.container = createElement('div', {
          tabindex: 0
        });
        wrap(this.media, this.elements.container);
      } // Migrate custom properties from media to container (so they work 😉)


      ui.migrateStyles.call(this); // Add style hook

      ui.addStyleHook.call(this); // Setup media

      media.setup.call(this); // Listen for events if debugging

      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(' '), event => {
          this.debug.log(`event: ${event.type}`);
        });
      } // Setup fullscreen


      this.fullscreen = new Fullscreen(this); // Setup interface
      // If embed but not fully supported, build interface now to avoid flash of controls

      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui.build.call(this);
      } // Container listeners


      this.listeners.container(); // Global listeners

      this.listeners.global(); // Setup ads if provided

      if (this.config.ads.enabled) {
        this.ads = new Ads(this);
      } // Autoplay if required


      if (this.isHTML5 && this.config.autoplay) {
        this.once('canplay', () => silencePromise(this.play()));
      } // Seek time will be recorded (in listeners.js) so we can prevent hiding controls for a few seconds after seek


      this.lastSeekTime = 0; // Setup preview thumbnails if enabled

      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    } // ---------------------------------------
    // API
    // ---------------------------------------

    /**
     * Types and provider helpers
     */


    get isHTML5() {
      return this.provider === providers.html5;
    }

    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }

    get isYouTube() {
      return this.provider === providers.youtube;
    }

    get isVimeo() {
      return this.provider === providers.vimeo;
    }

    get isVideo() {
      return this.type === types.video;
    }

    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Play the media, or play the advertisement (if they are not blocked)
     */


    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */


    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */


    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */


    get ended() {
      return Boolean(this.media.ended);
    }
    /**
     * Toggle playback based on current status
     * @param {Boolean} input
     */


    /**
     * Seek to a time
     * @param {Number} input - where to seek to in seconds. Defaults to 0 (the start)
     */
    set currentTime(input) {
      // Bail if media duration isn't available yet
      if (!this.duration) {
        return;
      } // Validate input


      const inputIsValid = is.number(input) && input > 0; // Set

      this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0; // Logging

      this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    /**
     * Get current time
     */


    get currentTime() {
      return Number(this.media.currentTime);
    }
    /**
     * Get buffered
     */


    get buffered() {
      const {
        buffered
      } = this.media; // YouTube / Vimeo return a float between 0-1

      if (is.number(buffered)) {
        return buffered;
      } // HTML5
      // TODO: Handle buffered chunks of the media
      // (i.e. seek to another section buffers only that section)


      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }

      return 0;
    }
    /**
     * Get seeking status
     */


    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */


    get duration() {
      // Faux duration set via config
      const fauxDuration = parseFloat(this.config.duration); // Media duration can be NaN or Infinity before the media has loaded

      const realDuration = (this.media || {}).duration;
      const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration; // If config duration is funky, use regular duration

      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {Number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */


    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;

      if (is.string(volume)) {
        volume = Number(volume);
      } // Load volume from storage if no value specified


      if (!is.number(volume)) {
        volume = this.storage.get('volume');
      } // Use config if all else fails


      if (!is.number(volume)) {
        ({
          volume
        } = this.config);
      } // Maximum is volumeMax


      if (volume > max) {
        volume = max;
      } // Minimum is volumeMin


      if (volume < min) {
        volume = min;
      } // Update config


      this.config.volume = volume; // Set the player volume

      this.media.volume = volume; // If muted, and we're increasing volume manually, reset muted state

      if (!is.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */


    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Increase volume
     * @param {Boolean} step - How much to decrease by (between 0 and 1)
     */


    /**
     * Set muted state
     * @param {Boolean} mute
     */
    set muted(mute) {
      let toggle = mute; // Load muted state from storage

      if (!is.boolean(toggle)) {
        toggle = this.storage.get('muted');
      } // Use config if all else fails


      if (!is.boolean(toggle)) {
        toggle = this.config.muted;
      } // Update config


      this.config.muted = toggle; // Set mute on the player

      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */


    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */


    get hasAudio() {
      // Assume yes for all non HTML5 (as we can't tell...)
      if (!this.isHTML5) {
        return true;
      }

      if (this.isAudio) {
        return true;
      } // Get audio tracks


      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {Number} speed - the speed of playback (0.5-2.0)
     */


    set speed(input) {
      let speed = null;

      if (is.number(input)) {
        speed = input;
      }

      if (!is.number(speed)) {
        speed = this.storage.get('speed');
      }

      if (!is.number(speed)) {
        speed = this.config.speed.selected;
      } // Clamp to min/max


      const {
        minimumSpeed: min,
        maximumSpeed: max
      } = this;
      speed = clamp(speed, min, max); // Update config

      this.config.speed.selected = speed; // Set media speed

      setTimeout(() => {
        if (this.media) {
          this.media.playbackRate = speed;
        }
      }, 0);
    }
    /**
     * Get current playback speed
     */


    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */


    get minimumSpeed() {
      if (this.isYouTube) {
        // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
        return Math.min(...this.options.speed);
      }

      if (this.isVimeo) {
        // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
        return 0.5;
      } // https://stackoverflow.com/a/32320020/1191319


      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */


    get maximumSpeed() {
      if (this.isYouTube) {
        // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
        return Math.max(...this.options.speed);
      }

      if (this.isVimeo) {
        // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
        return 2;
      } // https://stackoverflow.com/a/32320020/1191319


      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {Number} input - Quality level
     */


    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;

      if (!options.length) {
        return;
      }

      let quality = [!is.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is.number);
      let updateStorage = true;

      if (!options.includes(quality)) {
        const value = closest(options, quality);
        this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
        quality = value; // Don't update storage if quality is not supported

        updateStorage = false;
      } // Update config


      config.selected = quality; // Set quality

      this.media.quality = quality; // Save to storage

      if (updateStorage) {
        this.storage.set({
          quality
        });
      }
    }
    /**
     * Get current quality level
     */


    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {Boolean} input - Whether to loop or not
     */


    set loop(input) {
      const toggle = is.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle; // Set default to be a true toggle

      /* const type = ['start', 'end', 'all', 'none', 'toggle'].includes(input) ? input : 'toggle';
           switch (type) {
              case 'start':
                  if (this.config.loop.end && this.config.loop.end <= this.currentTime) {
                      this.config.loop.end = null;
                  }
                  this.config.loop.start = this.currentTime;
                  // this.config.loop.indicator.start = this.elements.display.played.value;
                  break;
               case 'end':
                  if (this.config.loop.start >= this.currentTime) {
                      return this;
                  }
                  this.config.loop.end = this.currentTime;
                  // this.config.loop.indicator.end = this.elements.display.played.value;
                  break;
               case 'all':
                  this.config.loop.start = 0;
                  this.config.loop.end = this.duration - 2;
                  this.config.loop.indicator.start = 0;
                  this.config.loop.indicator.end = 100;
                  break;
               case 'toggle':
                  if (this.config.loop.active) {
                      this.config.loop.start = 0;
                      this.config.loop.end = null;
                  } else {
                      this.config.loop.start = 0;
                      this.config.loop.end = this.duration - 2;
                  }
                  break;
               default:
                  this.config.loop.start = 0;
                  this.config.loop.end = null;
                  break;
          } */
    }
    /**
     * Get current loop state
     */


    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {Object} input - The new source object (see docs)
     */


    set source(input) {
      source.change.call(this, input);
    }
    /**
     * Get current source
     */


    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */


    get download() {
      const {
        download
      } = this.config.urls;
      return is.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */


    set download(input) {
      if (!is.url(input)) {
        return;
      }

      this.config.urls.download = input;
      controls.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {String} input - the URL for the new poster image
     */


    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn('Poster can only be set for video');
        return;
      }

      ui.setPoster.call(this, input, false).catch(() => {});
    }
    /**
     * Get the current poster image
     */


    get poster() {
      if (!this.isVideo) {
        return null;
      }

      return this.media.getAttribute('poster') || this.media.getAttribute('data-poster');
    }
    /**
     * Get the current aspect ratio in use
     */


    get ratio() {
      if (!this.isVideo) {
        return null;
      }

      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is.array(ratio) ? ratio.join(':') : ratio;
    }
    /**
     * Set video aspect ratio
     */


    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn('Aspect ratio can only be set for video');
        return;
      }

      if (!is.string(input) || !validateAspectRatio(input)) {
        this.debug.error(`Invalid aspect ratio specified (${input})`);
        return;
      }

      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {Boolean} input - Whether to autoplay or not
     */


    set autoplay(input) {
      const toggle = is.boolean(input) ? input : this.config.autoplay;
      this.config.autoplay = toggle;
    }
    /**
     * Get the current autoplay state
     */


    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {Boolean} input - Whether to enable captions
     */


    toggleCaptions(input) {
      captions.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {Number} - Caption index
     */


    set currentTrack(input) {
      captions.set.call(this, input, false);
      captions.setup();
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */


    get currentTrack() {
      const {
        toggled,
        currentTrack
      } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {String} - Two character ISO language code (e.g. EN, FR, PT, etc)
     */


    set language(input) {
      captions.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */


    get language() {
      return (captions.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */


    set pip(input) {
      // Bail if no support
      if (!support.pip) {
        return;
      } // Toggle based on current state if not passed


      const toggle = is.boolean(input) ? input : !this.pip; // Toggle based on current state
      // Safari

      if (is.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      } // Chrome


      if (is.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */


    get pip() {
      if (!support.pip) {
        return null;
      } // Safari


      if (!is.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      } // Chrome


      return this.media === document.pictureInPictureElement;
    }
    /**
     * Sets the preview thubmnails for the current source
     */


    setPreviewThumbnails(thumbnailSource) {
      if (this.previewThumbnails && this.previewThumbnails.loaded) {
        this.previewThumbnails.destroy();
        this.previewThumbnails = null;
      }

      Object.assign(this.config.previewThumbnails, thumbnailSource); // Create new instance if it is still enabled

      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    }
    /**
     * Trigger the airplay dialog
     * TODO: update player with state, support, enabled
     */


    /**
     * Check for support
     * @param {String} type - Player type (audio/video)
     * @param {String} provider - Provider (html5/youtube/vimeo)
     * @param {Boolean} inline - Where player has `playsinline` sttribute
     */
    static supported(type, provider, inline) {
      return support.check(type, provider, inline);
    }
    /**
     * Load an SVG sprite into the page
     * @param {String} url - URL for the SVG sprite
     * @param {String} [id] - Unique ID
     */


    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {Object} options
     */


    static setup(selector, options = {}) {
      let targets = null;

      if (is.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is.array(selector)) {
        targets = selector.filter(is.element);
      }

      if (is.empty(targets)) {
        return null;
      }

      return targets.map(t => new Plyr(t, options));
    }

  }

  Plyr.defaults = cloneDeep(defaults);

  return Plyr;

}));

/* PrismJS 1.27.0
https://prismjs.com/download.html#themes=prism-coy&languages=markup+css+clike+javascript+aspnet+bash+c+csharp+cpp+css-extras+docker+http+icon+java+javadoclike+jq+json+json5+less+markup-templating+opencl+perl+php+phpdoc+php-extras+plsql+python+sass+scss+sql+swift&plugins=wpd+show-language+inline-color+toolbar+copy-to-clipboard+match-braces */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof i?new i(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,i;switch(t=t||{},a.util.type(n)){case"Object":if(i=a.util.objId(n),t[i])return t[i];for(var l in r={},t[i]=r,n)n.hasOwnProperty(l)&&(r[l]=e(n[l],t));return r;case"Array":return i=a.util.objId(n),t[i]?t[i]:(r=[],t[i]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}},getLanguage:function(e){for(;e;){var t=n.exec(e.className);if(t)return t[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,t){e.className=e.className.replace(RegExp(n,"gi"),""),e.classList.add("language-"+t)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var i=(r=r||a.languages)[e],l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in t)t.hasOwnProperty(s)&&(l[s]=t[s]);t.hasOwnProperty(o)||(l[o]=i[o])}var u=r[e];return r[e]=l,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=l)})),l},DFS:function e(n,t,r,i){i=i||{};var l=a.util.objId;for(var o in n)if(n.hasOwnProperty(o)){t.call(n,o,n[o],r||o);var s=n[o],u=a.util.type(s);"Object"!==u||i[l(s)]?"Array"!==u||i[l(s)]||(i[l(s)]=!0,e(s,t,o,i)):(i[l(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,l=0;i=r.elements[l++];)a.highlightElement(i,!0===n,r.callback)},highlightElement:function(n,t,r){var i=a.util.getLanguage(n),l=a.languages[i];a.util.setLanguage(n,i);var o=n.parentElement;o&&"pre"===o.nodeName.toLowerCase()&&a.util.setLanguage(o,i);var s={element:n,language:i,grammar:l,code:n.textContent};function u(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(o=s.element.parentElement)&&"pre"===o.nodeName.toLowerCase()&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(t&&e.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else u(a.highlight(s.code,s.grammar,s.language));else u(a.util.encode(s.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new s;return u(a,a.head,e),o(e,a,n,a.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,i=0;r=t[i++];)r(n)}},Token:i};function i(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function l(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,n,t,r,s,g){for(var f in t)if(t.hasOwnProperty(f)&&t[f]){var h=t[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var v=h[d],p=v.inside,m=!!v.lookbehind,y=!!v.greedy,k=v.alias;if(y&&!v.pattern.global){var x=v.pattern.toString().match(/[imsuy]*$/)[0];v.pattern=RegExp(v.pattern.source,x+"g")}for(var b=v.pattern||v,w=r.next,A=s;w!==n.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var E=w.value;if(n.length>e.length)return;if(!(E instanceof i)){var P,L=1;if(y){if(!(P=l(b,A,e,m))||P.index>=e.length)break;var S=P.index,O=P.index+P[0].length,j=A;for(j+=w.value.length;S>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof i)continue;for(var C=w;C!==n.tail&&(j<O||"string"==typeof C.value);C=C.next)L++,j+=C.value.length;L--,E=e.slice(A,j),P.index-=A}else if(!(P=l(b,0,E,m)))continue;S=P.index;var N=P[0],_=E.slice(0,S),M=E.slice(S+N.length),W=A+E.length;g&&W>g.reach&&(g.reach=W);var z=w.prev;if(_&&(z=u(n,z,_),A+=_.length),c(n,z,L),w=u(n,z,new i(f,p?a.tokenize(N,p):N,k,N)),M&&u(n,w,M),L>1){var I={cause:f+","+d,reach:W};o(e,n,t,w.prev,A,I),g&&I.reach>g.reach&&(g.reach=I.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function u(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function c(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;n.next=r,r.prev=n,e.length-=a}if(e.Prism=a,i.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var r="";return n.forEach((function(n){r+=e(n,t)})),r}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},l=n.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),a.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,i=t.code,l=t.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),l&&e.close()}),!1),a):a;var g=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(g&&(a.filename=g.src,g.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var h=document.readyState;"loading"===h||"interactive"===h&&g&&g.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",(function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var t={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};t["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var n={};n[a]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,(function(){return a})),"i"),lookbehind:!0,greedy:!0,inside:t},Prism.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(a,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp("(^|[\"'\\s])(?:"+a+")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))","i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml;
!function(s){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var t=s.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),Prism.languages.js=Prism.languages.javascript;
!function(e){function n(e,n){return e.replace(/<<(\d+)>>/g,(function(e,s){return"(?:"+n[+s]+")"}))}function s(e,s,a){return RegExp(n(e,s),a||"")}function a(e,n){for(var s=0;s<n;s++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var t="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",r="class enum interface record struct",i="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function l(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var d=l(r),p=RegExp(l(t+" "+r+" "+i+" "+o)),c=l(r+" "+i+" "+o),u=l(t+" "+r+" "+o),g=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),b=a("\\((?:[^()]|<<self>>)*\\)",2),h="@?\\b[A-Za-z_]\\w*\\b",f=n("<<0>>(?:\\s*<<1>>)?",[h,g]),m=n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[c,f]),k="\\[\\s*(?:,\\s*)*\\]",y=n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[m,k]),w=n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[g,b,k]),v=n("\\(<<0>>+(?:,<<0>>+)+\\)",[w]),x=n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[v,m,k]),$={keyword:p,punctuation:/[<>()?,.:[\]]/},_="'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'",B='"(?:\\\\.|[^\\\\"\r\n])*"';e.languages.csharp=e.languages.extend("clike",{string:[{pattern:s("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:s("(^|[^@$\\\\])<<0>>",[B]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:s("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[m]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[h,x]),lookbehind:!0,inside:$},{pattern:s("(\\busing\\s+)<<0>>(?=\\s*=)",[h]),lookbehind:!0},{pattern:s("(\\b<<0>>\\s+)<<1>>",[d,f]),lookbehind:!0,inside:$},{pattern:s("(\\bcatch\\s*\\(\\s*)<<0>>",[m]),lookbehind:!0,inside:$},{pattern:s("(\\bwhere\\s+)<<0>>",[h]),lookbehind:!0},{pattern:s("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[y]),lookbehind:!0,inside:$},{pattern:s("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[x,u,h]),inside:$}],keyword:p,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:s("([(,]\\s*)<<0>>(?=\\s*:)",[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:s("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:s("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[b]),lookbehind:!0,alias:"class-name",inside:$},"return-type":{pattern:s("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[x,m]),inside:$,alias:"class-name"},"constructor-invocation":{pattern:s("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[x]),lookbehind:!0,inside:$,alias:"class-name"},"generic-method":{pattern:s("<<0>>\\s*<<1>>(?=\\s*\\()",[h,g]),inside:{function:s("^<<0>>",[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:$}}},"type-list":{pattern:s("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[d,f,h,x,p.source,b,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:s("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[f,b]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:p,"class-name":{pattern:RegExp(x),greedy:!0,inside:$},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=B+"|"+_,R=n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>",[E]),z=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),S="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",j=n("<<0>>(?:\\s*\\(<<1>>*\\))?",[m,z]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:s("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[S,j]),lookbehind:!0,greedy:!0,inside:{target:{pattern:s("^<<0>>(?=\\s*:)",[S]),alias:"keyword"},"attribute-arguments":{pattern:s("\\(<<0>>*\\)",[z]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var A=":[^}\r\n]+",F=a(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)",[R]),2),P=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[F,A]),U=a(n("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)",[E]),2),Z=n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[U,A]);function q(n,a){return{interpolation:{pattern:s("((?:^|[^{])(?:\\{\\{)*)<<0>>",[n]),lookbehind:!0,inside:{"format-string":{pattern:s("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[a,A]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:s('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[P]),lookbehind:!0,greedy:!0,inside:q(P,F)},{pattern:s('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[Z]),lookbehind:!0,greedy:!0,inside:q(Z,U)}],char:{pattern:RegExp(_),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(Prism);
Prism.languages.aspnet=Prism.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:Prism.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:Prism.languages.csharp}}}),Prism.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,Prism.languages.insertBefore("inside","punctuation",{directive:Prism.languages.aspnet.directive},Prism.languages.aspnet.tag.inside["attr-value"]),Prism.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),Prism.languages.insertBefore("aspnet",Prism.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:Prism.languages.csharp||{}}});
!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=a.variable[1].inside,i=0;i<o.length;i++)s[o[i]]=e.languages.bash[o[i]];e.languages.shell=e.languages.bash}(Prism);
Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}}),Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete Prism.languages.c.boolean;
!function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n="\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g,(function(){return t.source}));e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g,(function(){return t.source}))),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|'+"<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g,(function(){return n}))+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])}(Prism);
!function(e){var a,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:a={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=a,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var r={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:i})}(Prism);
!function(e){var n="(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)".replace(/<SP_BS>/g,(function(){return"\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])"})),r="\"(?:[^\"\\\\\r\n]|\\\\(?:\r\n|[^]))*\"|'(?:[^'\\\\\r\n]|\\\\(?:\r\n|[^]))*'",t="--[\\w-]+=(?:<STR>|(?![\"'])(?:[^\\s\\\\]|\\\\.)+)".replace(/<STR>/g,(function(){return r})),o={pattern:RegExp(r),greedy:!0},i={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function a(e,r){return e=e.replace(/<OPT>/g,(function(){return t})).replace(/<SP>/g,(function(){return n})),RegExp(e,r)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:a("(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*","i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[o,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:a("(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b","i"),lookbehind:!0,greedy:!0},{pattern:a("(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS","i"),lookbehind:!0,greedy:!0},{pattern:a("(^ONBUILD<SP>)\\w+","i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:i,string:o,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:i},e.languages.dockerfile=e.languages.docker}(Prism);
!function(t){function a(t){return RegExp("(^(?:"+t+"):[ \t]*(?![ \t]))[^]+","i")}t.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:t.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:a("Content-Security-Policy"),lookbehind:!0,alias:["csp","languages-csp"],inside:t.languages.csp},{pattern:a("Public-Key-Pins(?:-Report-Only)?"),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:t.languages.hpkp},{pattern:a("Strict-Transport-Security"),lookbehind:!0,alias:["hsts","languages-hsts"],inside:t.languages.hsts},{pattern:a("[^:]+"),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var e,n=t.languages,s={"application/javascript":n.javascript,"application/json":n.json||n.javascript,"application/xml":n.xml,"text/xml":n.xml,"text/html":n.html,"text/css":n.css,"text/plain":n.plain},i={"application/json":!0,"application/xml":!0};function r(t){var a=t.replace(/^[a-z]+\//,"");return"(?:"+t+"|\\w+/(?:[\\w.-]+\\+)+"+a+"(?![+\\w.-]))"}for(var p in s)if(s[p]){e=e||{};var l=i[p]?r(p):p;e[p.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+l+"(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*","i"),lookbehind:!0,inside:s[p]}}e&&t.languages.insertBefore("http","header",e)}(Prism);
Prism.languages.icon={comment:/#.*/,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,greedy:!0},number:/\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,"builtin-keyword":{pattern:/&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,alias:"variable"},directive:{pattern:/\$\w+/,alias:"builtin"},keyword:/\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,function:/\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,operator:/[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,punctuation:/[\[\](){},;]/};
!function(e){var n=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t="(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",s={pattern:RegExp("(^|[^\\w.])"+t+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[s,{pattern:RegExp("(^|[^\\w.])"+t+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),lookbehind:!0,inside:s.inside},{pattern:RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)"+t+"[A-Z]\\w*\\b"),lookbehind:!0,inside:s.inside}],keyword:n,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":s,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp("(\\bimport\\s+)"+t+"(?:[A-Z]\\w*|\\*)(?=\\s*;)"),lookbehind:!0,inside:{namespace:s.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp("(\\bimport\\s+static\\s+)"+t+"(?:\\w+|\\*)(?=\\s*;)"),lookbehind:!0,alias:"static",inside:{namespace:s.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g,(function(){return n.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism);
!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var g=i[u];if("string"==typeof g||g.content&&"string"==typeof g.content){var l=o[r],s=t.tokenStack[l],f="string"==typeof g?g:g.content,p=n(a,l),k=f.indexOf(p);if(k>-1){++r;var m=f.substring(0,k),d=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),h=f.substring(k+p.length),v=[];m&&v.push.apply(v,c([m])),v.push(d),h&&v.push.apply(v,c([h])),"string"==typeof g?i.splice.apply(i,[u,1].concat(v)):g.content=v}}else g.content&&c(g.content)}return i}(t.tokens)}}}})}(Prism);
!function(e){var a=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],i=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,n=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,s=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:a,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:i,operator:n,punctuation:s};var l={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},r=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:l}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:l}}];e.languages.insertBefore("php","variable",{string:r,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:a,string:r,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:i,operator:n,punctuation:s}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",(function(a){/<\?/.test(a.code)&&e.languages["markup-templating"].buildPlaceholders(a,"php",/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"php")}))}(Prism);
!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,n){"string"==typeof e&&(e=[e]),e.forEach((function(e){!function(e,n){var t="doc-comment",r=a.languages[e];if(r){var o=r[t];if(o||(o=(r=a.languages.insertBefore(e,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[t]),o instanceof RegExp&&(o=r[t]={pattern:o}),Array.isArray(o))for(var i=0,s=o.length;i<s;i++)o[i]instanceof RegExp&&(o[i]={pattern:o[i]}),n(o[i]);else n(o)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=n}))}))}}),e.addSupport(["java","javascript","php"],e)}(Prism);
!function(e){var n="\\\\\\((?:[^()]|\\([^()]*\\))*\\)",t=RegExp('(^|[^\\\\])"(?:[^"\r\n\\\\]|\\\\[^\r\n(]|__)*"'.replace(/__/g,(function(){return n}))),i={interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\{2})*)"+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},a=e.languages.jq={comment:/#.*/,property:{pattern:RegExp(t.source+"(?=\\s*:(?!:))"),lookbehind:!0,greedy:!0,inside:i},string:{pattern:t,lookbehind:!0,greedy:!0,inside:i},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};i.interpolation.inside.content.inside=a}(Prism);
Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;
!function(n){var e=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;n.languages.json5=n.languages.extend("json",{property:[{pattern:RegExp(e.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:e,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}(Prism);
Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}});
!function(E){E.languages.opencl=E.languages.extend("c",{keyword:/\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,boolean:/\b(?:false|true)\b/,"constant-opencl-kernel":{pattern:/\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:2|10)E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,alias:"constant"}}),E.languages.insertBefore("opencl","class-name",{"builtin-type":{pattern:/\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|intptr_t|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|uintptr_t)\b/,alias:"keyword"}});var _={"type-opencl-host":{pattern:/\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,alias:"keyword"},"boolean-opencl-host":{pattern:/\bCL_(?:FALSE|TRUE)\b/,alias:"boolean"},"constant-opencl-host":{pattern:/\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,alias:"constant"},"function-opencl-host":{pattern:/\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,alias:"function"}};E.languages.insertBefore("c","keyword",_),E.languages.cpp&&(_["type-opencl-host-cpp"]={pattern:/\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|Sampler|UserEvent)\b/,alias:"keyword"},E.languages.insertBefore("cpp","keyword",_))}(Prism);
!function(e){var n="(?:\\((?:[^()\\\\]|\\\\[^])*\\)|\\{(?:[^{}\\\\]|\\\\[^])*\\}|\\[(?:[^[\\]\\\\]|\\\\[^])*\\]|<(?:[^<>\\\\]|\\\\[^])*>)";e.languages.perl={comment:[{pattern:/(^\s*)=\w[\s\S]*?=cut.*/m,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],string:[{pattern:RegExp("\\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2",n].join("|")+")"),greedy:!0},{pattern:/("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:RegExp("\\b(?:m|qr)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1","([a-zA-Z0-9])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2",n].join("|")+")[msixpodualngc]*"),greedy:!0},{pattern:RegExp("(^|[^-])\\b(?:s|tr|y)(?![a-zA-Z0-9])\\s*(?:"+["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\2)[^\\\\]|\\\\[^])*\\2(?:(?!\\2)[^\\\\]|\\\\[^])*\\2","([a-zA-Z0-9])(?:(?!\\3)[^\\\\]|\\\\[^])*\\3(?:(?!\\3)[^\\\\]|\\\\[^])*\\3",n+"\\s*"+n].join("|")+")[msixpodualngcer]*"),lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*?>|\b_\b/,alias:"symbol"},"v-string":{pattern:/v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,alias:"string"},function:{pattern:/(\bsub[ \t]+)\w+/,lookbehind:!0},keyword:/\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,punctuation:/[{}[\];(),:]/}}(Prism);
!function(a){var e="(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";a.languages.phpdoc=a.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+e+"\\s+)?)\\$\\w+"),lookbehind:!0}}),a.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+e),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),a.languages.javadoclike.addSupport("php",a.languages.phpdoc)}(Prism);
Prism.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}});
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
Prism.languages.plsql=Prism.languages.extend("sql",{comment:{pattern:/\/\*[\s\S]*?\*\/|--.*/,greedy:!0},keyword:/\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,operator:/:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/}),Prism.languages.insertBefore("plsql","operator",{label:{pattern:/<<\s*\w+\s*>>/,alias:"symbol"}});
Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python;
!function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var r=/\$[-\w]+|#\{\$[-\w]+\}/,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:r,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:r,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(Prism);
Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;
Prism.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp('(^|[^"#])(?:"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^(])|[^\\\\\r\n"])*"|"""(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\"]|"(?!""))*""")(?!["#])'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp('(^|[^"#])(#+)(?:"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\r\n|[^#])|[^\\\\\r\n])*?"|"""(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?""")\\2'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp("#(?:(?:elseif|if)\\b(?:[ \t]*(?:![ \t]*)?(?:\\b\\w+\\b(?:[ \t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},Prism.languages.swift["string-literal"].forEach((function(e){e.inside.interpolation.inside=Prism.languages.swift}));
!function(){if("undefined"!=typeof Prism){if(Prism.languages.css&&(Prism.languages.css.selector.pattern?(Prism.languages.css.selector.inside["pseudo-class"]=/:[\w-]+/,Prism.languages.css.selector.inside["pseudo-element"]=/::[\w-]+/):Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-class":/:[\w-]+/,"pseudo-element":/::[\w-]+/}}),Prism.languages.markup){Prism.languages.markup.tag.inside.tag.inside["tag-id"]=/[\w-]+/;var e={HTML:{a:1,abbr:1,acronym:1,b:1,basefont:1,bdo:1,big:1,blink:1,cite:1,code:1,dfn:1,em:1,kbd:1,i:1,rp:1,rt:1,ruby:1,s:1,samp:1,small:1,spacer:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,var:1,wbr:1,noframes:1,summary:1,command:1,dt:1,dd:1,figure:1,figcaption:1,center:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,address:1,noscript:1,isIndex:1,main:1,mark:1,marquee:1,meter:1,menu:1},SVG:{animateColor:1,animateMotion:1,animateTransform:1,glyph:1,feBlend:1,feColorMatrix:1,feComponentTransfer:1,feFuncR:1,feFuncG:1,feFuncB:1,feFuncA:1,feComposite:1,feConvolveMatrix:1,feDiffuseLighting:1,feDisplacementMap:1,feFlood:1,feGaussianBlur:1,feImage:1,feMerge:1,feMergeNode:1,feMorphology:1,feOffset:1,feSpecularLighting:1,feTile:1,feTurbulence:1,feDistantLight:1,fePointLight:1,feSpotLight:1,linearGradient:1,radialGradient:1,altGlyph:1,textPath:1,tref:1,altglyph:1,textpath:1,altglyphdef:1,altglyphitem:1,clipPath:1,"color-profile":1,cursor:1,"font-face":1,"font-face-format":1,"font-face-name":1,"font-face-src":1,"font-face-uri":1,foreignObject:1,glyphRef:1,hkern:1,vkern:1},MathML:{}}}var t;Prism.hooks.add("wrap",(function(n){if(("tag-id"==n.type||"property"==n.type&&0!=n.content.indexOf("-")||"rule"==n.type&&0!=n.content.indexOf("@-")||"pseudo-class"==n.type&&0!=n.content.indexOf(":-")||"pseudo-element"==n.type&&0!=n.content.indexOf("::-")||"attr-name"==n.type&&0!=n.content.indexOf("data-"))&&-1===n.content.indexOf("<")&&("css"==n.language||"scss"==n.language||"markup"==n.language)){var a="https://webplatform.github.io/docs/",s=n.content;if("css"==n.language||"scss"==n.language)a+="css/","property"==n.type?a+="properties/":"rule"==n.type?(a+="atrules/",s=s.substring(1)):"pseudo-class"==n.type?(a+="selectors/pseudo-classes/",s=s.substring(1)):"pseudo-element"==n.type&&(a+="selectors/pseudo-elements/",s=s.substring(2));else if("markup"==n.language)if("tag-id"==n.type){if(!(t=function(t){var n=t.toLowerCase();if(e.HTML[n])return"html";if(e.SVG[t])return"svg";if(e.MathML[t])return"mathml";if(0!==e.HTML[n]&&"undefined"!=typeof document){var a=(document.createElement(t).toString().match(/\[object HTML(.+)Element\]/)||[])[1];if(a&&"Unknown"!=a)return e.HTML[n]=1,"html"}if(e.HTML[n]=0,0!==e.SVG[t]&&"undefined"!=typeof document){var s=(document.createElementNS("http://www.w3.org/2000/svg",t).toString().match(/\[object SVG(.+)Element\]/)||[])[1];if(s&&"Unknown"!=s)return e.SVG[t]=1,"svg"}return e.SVG[t]=0,0!==e.MathML[t]&&0===t.indexOf("m")?(e.MathML[t]=1,"mathml"):(e.MathML[t]=0,null)}(n.content)||t))return;a+=t+"/elements/"}else if("attr-name"==n.type){if(!t)return;a+=t+"/attributes/"}a+=s,n.tag="a",n.attributes.href=a,n.attributes.target="_blank"}}))}}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=[],t={},n=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(n,a){var r;r="function"==typeof a?a:function(e){var t;return"function"==typeof a.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",(function(){a.onClick.call(this,e)}))):"string"==typeof a.url?(t=document.createElement("a")).href=a.url:t=document.createElement("span"),a.className&&t.classList.add(a.className),t.textContent=a.text,t},n in t?console.warn('There is a button with the key "'+n+'" registered already.'):e.push(t[n]=r)},r=Prism.plugins.toolbar.hook=function(a){var r=a.element.parentNode;if(r&&/pre/i.test(r.nodeName)&&!r.parentNode.classList.contains("code-toolbar")){var o=document.createElement("div");o.classList.add("code-toolbar"),r.parentNode.insertBefore(o,r),o.appendChild(r);var i=document.createElement("div");i.classList.add("toolbar");var l=e,d=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);d&&(l=d.map((function(e){return t[e]||n}))),l.forEach((function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),i.appendChild(n)}})),o.appendChild(i)}};a("label",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}})),Prism.hooks.add("complete",r)}}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document)if(Prism.plugins.toolbar){var e={none:"Plain text",plain:"Plain text",plaintext:"Plain text",text:"Plain text",txt:"Plain text",html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",ssml:"SSML",rss:"RSS",css:"CSS",clike:"C-like",js:"JavaScript",abap:"ABAP",abnf:"ABNF",al:"AL",antlr4:"ANTLR4",g4:"ANTLR4",apacheconf:"Apache Configuration",apl:"APL",aql:"AQL",ino:"Arduino",arff:"ARFF",armasm:"ARM Assembly","arm-asm":"ARM Assembly",art:"Arturo",asciidoc:"AsciiDoc",adoc:"AsciiDoc",aspnet:"ASP.NET (C#)",asm6502:"6502 Assembly",asmatmel:"Atmel AVR Assembly",autohotkey:"AutoHotkey",autoit:"AutoIt",avisynth:"AviSynth",avs:"AviSynth","avro-idl":"Avro IDL",avdl:"Avro IDL",awk:"AWK",gawk:"GAWK",basic:"BASIC",bbcode:"BBcode",bnf:"BNF",rbnf:"RBNF",bsl:"BSL (1C:Enterprise)",oscript:"OneScript",csharp:"C#",cs:"C#",dotnet:"C#",cpp:"C++",cfscript:"CFScript",cfc:"CFScript",cil:"CIL",cmake:"CMake",cobol:"COBOL",coffee:"CoffeeScript",conc:"Concurnas",csp:"Content-Security-Policy","css-extras":"CSS Extras",csv:"CSV",cue:"CUE",dataweave:"DataWeave",dax:"DAX",django:"Django/Jinja2",jinja2:"Django/Jinja2","dns-zone-file":"DNS zone file","dns-zone":"DNS zone file",dockerfile:"Docker",dot:"DOT (Graphviz)",gv:"DOT (Graphviz)",ebnf:"EBNF",editorconfig:"EditorConfig",ejs:"EJS",etlua:"Embedded Lua templating",erb:"ERB","excel-formula":"Excel Formula",xlsx:"Excel Formula",xls:"Excel Formula",fsharp:"F#","firestore-security-rules":"Firestore security rules",ftl:"FreeMarker Template Language",gml:"GameMaker Language",gamemakerlanguage:"GameMaker Language",gap:"GAP (CAS)",gcode:"G-code",gdscript:"GDScript",gedcom:"GEDCOM",gettext:"gettext",po:"gettext",glsl:"GLSL",gn:"GN",gni:"GN","linker-script":"GNU Linker Script",ld:"GNU Linker Script","go-module":"Go module","go-mod":"Go module",graphql:"GraphQL",hbs:"Handlebars",hs:"Haskell",hcl:"HCL",hlsl:"HLSL",http:"HTTP",hpkp:"HTTP Public-Key-Pins",hsts:"HTTP Strict-Transport-Security",ichigojam:"IchigoJam","icu-message-format":"ICU Message Format",idr:"Idris",ignore:".ignore",gitignore:".gitignore",hgignore:".hgignore",npmignore:".npmignore",inform7:"Inform 7",javadoc:"JavaDoc",javadoclike:"JavaDoc-like",javastacktrace:"Java stack trace",jq:"JQ",jsdoc:"JSDoc","js-extras":"JS Extras",json:"JSON",webmanifest:"Web App Manifest",json5:"JSON5",jsonp:"JSONP",jsstacktrace:"JS stack trace","js-templates":"JS Templates",keepalived:"Keepalived Configure",kts:"Kotlin Script",kt:"Kotlin",kumir:"KuMir (КуМир)",kum:"KuMir (КуМир)",latex:"LaTeX",tex:"TeX",context:"ConTeXt",lilypond:"LilyPond",ly:"LilyPond",emacs:"Lisp",elisp:"Lisp","emacs-lisp":"Lisp",llvm:"LLVM IR",log:"Log file",lolcode:"LOLCODE",magma:"Magma (CAS)",md:"Markdown","markup-templating":"Markup templating",matlab:"MATLAB",maxscript:"MAXScript",mel:"MEL",mongodb:"MongoDB",moon:"MoonScript",n1ql:"N1QL",n4js:"N4JS",n4jsd:"N4JS","nand2tetris-hdl":"Nand To Tetris HDL",naniscript:"Naninovel Script",nani:"Naninovel Script",nasm:"NASM",neon:"NEON",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",objc:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",openqasm:"OpenQasm",qasm:"OpenQasm",parigp:"PARI/GP",objectpascal:"Object Pascal",psl:"PATROL Scripting Language",pcaxis:"PC-Axis",px:"PC-Axis",peoplecode:"PeopleCode",pcode:"PeopleCode",php:"PHP",phpdoc:"PHPDoc","php-extras":"PHP Extras","plant-uml":"PlantUML",plantuml:"PlantUML",plsql:"PL/SQL",powerquery:"PowerQuery",pq:"PowerQuery",mscript:"PowerQuery",powershell:"PowerShell",promql:"PromQL",properties:".properties",protobuf:"Protocol Buffers",purebasic:"PureBasic",pbfasm:"PureBasic",purs:"PureScript",py:"Python",qsharp:"Q#",qs:"Q#",q:"Q (kdb+ database)",qml:"QML",rkt:"Racket",cshtml:"Razor C#",razor:"Razor C#",jsx:"React JSX",tsx:"React TSX",renpy:"Ren'py",rpy:"Ren'py",rest:"reST (reStructuredText)",robotframework:"Robot Framework",robot:"Robot Framework",rb:"Ruby",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)","shell-session":"Shell session","sh-session":"Shell session",shellsession:"Shell session",sml:"SML",smlnj:"SML/NJ",solidity:"Solidity (Ethereum)",sol:"Solidity (Ethereum)","solution-file":"Solution file",sln:"Solution file",soy:"Soy (Closure Template)",sparql:"SPARQL",rq:"SPARQL","splunk-spl":"Splunk SPL",sqf:"SQF: Status Quo Function (Arma 3)",sql:"SQL",stata:"Stata Ado",iecst:"Structured Text (IEC 61131-3)",supercollider:"SuperCollider",sclang:"SuperCollider",systemd:"Systemd configuration file","t4-templating":"T4 templating","t4-cs":"T4 Text Templates (C#)",t4:"T4 Text Templates (C#)","t4-vb":"T4 Text Templates (VB)",tap:"TAP",tt2:"Template Toolkit 2",toml:"TOML",trickle:"trickle",troy:"troy",trig:"TriG",ts:"TypeScript",tsconfig:"TSConfig",uscript:"UnrealScript",uc:"UnrealScript",uorazor:"UO Razor Script",uri:"URI",url:"URL",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim","visual-basic":"Visual Basic",vba:"VBA",vb:"Visual Basic",wasm:"WebAssembly","web-idl":"Web IDL",webidl:"Web IDL",wiki:"Wiki markup",wolfram:"Wolfram language",nb:"Mathematica Notebook",wl:"Wolfram language",xeoracube:"XeoraCube","xml-doc":"XML doc (.net)",xojo:"Xojo (REALbasic)",xquery:"XQuery",yaml:"YAML",yml:"YAML",yang:"YANG"};Prism.plugins.toolbar.registerButton("show-language",(function(a){var t=a.element.parentNode;if(t&&/pre/i.test(t.nodeName)){var o,s=t.getAttribute("data-language")||e[a.language]||((o=a.language)?(o.substring(0,1).toUpperCase()+o.substring(1)).replace(/s(?=cript)/,"S"):o);if(s){var r=document.createElement("span");return r.textContent=s,r}}}))}else console.warn("Show Languages plugin loaded before Toolbar plugin.")}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var n=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,r=/^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i,o=[function(n){var o=r.exec(n);if(o){for(var s=(n=o[1]).length>=6?2:1,e=n.length/s,t=1==s?1/15:1/255,i=[],a=0;a<e;a++){var c=parseInt(n.substr(a*s,s),16);i.push(c*t)}return 3==e&&i.push(1),"rgba("+i.slice(0,3).map((function(n){return String(Math.round(255*n))})).join(",")+","+String(Number(i[3].toFixed(3)))+")"}},function(n){var r=(new Option).style;return r.color=n,r.color?n:void 0}];Prism.hooks.add("wrap",(function(r){if("color"===r.type||r.classes.indexOf("color")>=0){for(var s,e=r.content,t=e.split(n).join(""),i=0,a=o.length;i<a&&!s;i++)s=o[i](t);if(!s)return;var c='<span class="inline-color-wrapper"><span class="inline-color" style="background-color:'+s+';"></span></span>';r.content=c+e}}))}}();
!function(){function t(t){var e=document.createElement("textarea");e.value=t.getText(),e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{var o=document.execCommand("copy");setTimeout((function(){o?t.success():t.error()}),1)}catch(e){setTimeout((function(){t.error(e)}),1)}document.body.removeChild(e)}"undefined"!=typeof Prism&&"undefined"!=typeof document&&(Prism.plugins.toolbar?Prism.plugins.toolbar.registerButton("copy-to-clipboard",(function(e){var o=e.element,n=function(t){var e={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3};for(var o in e){for(var n="data-prismjs-"+o,c=t;c&&!c.hasAttribute(n);)c=c.parentElement;c&&(e[o]=c.getAttribute(n))}return e}(o),c=document.createElement("button");c.className="copy-to-clipboard-button",c.setAttribute("type","button");var r=document.createElement("span");return c.appendChild(r),u("copy"),function(e,o){e.addEventListener("click",(function(){!function(e){navigator.clipboard?navigator.clipboard.writeText(e.getText()).then(e.success,(function(){t(e)})):t(e)}(o)}))}(c,{getText:function(){return o.textContent},success:function(){u("copy-success"),i()},error:function(){u("copy-error"),setTimeout((function(){!function(t){window.getSelection().selectAllChildren(t)}(o)}),1),i()}}),c;function i(){setTimeout((function(){u("copy")}),n["copy-timeout"])}function u(t){r.textContent=n[t],c.setAttribute("data-copy-state",t)}})):console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."))}();
!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e={"(":")","[":"]","{":"}"},t={"(":"brace-round","[":"brace-square","{":"brace-curly"},n={"${":"{"},r=0,c=/^(pair-\d+-)(close|open)$/;Prism.hooks.add("complete",(function(c){var i=c.element,d=i.parentElement;if(d&&"PRE"==d.tagName){var u=[];if(Prism.util.isActive(i,"match-braces")&&u.push("(","[","{"),0!=u.length){d.__listenerAdded||(d.addEventListener("mousedown",(function(){var e=d.querySelector("code"),t=s("brace-selected");Array.prototype.slice.call(e.querySelectorAll("."+t)).forEach((function(e){e.classList.remove(t)}))})),Object.defineProperty(d,"__listenerAdded",{value:!0}));var f=Array.prototype.slice.call(i.querySelectorAll("span."+s("token")+"."+s("punctuation"))),h=[];u.forEach((function(c){for(var i=e[c],d=s(t[c]),u=[],p=[],v=0;v<f.length;v++){var m=f[v];if(0==m.childElementCount){var b=m.textContent;(b=n[b]||b)===c?(h.push({index:v,open:!0,element:m}),m.classList.add(d),m.classList.add(s("brace-open")),p.push(v)):b===i&&(h.push({index:v,open:!1,element:m}),m.classList.add(d),m.classList.add(s("brace-close")),p.length&&u.push([v,p.pop()]))}}u.forEach((function(e){var t="pair-"+r+++"-",n=f[e[0]],c=f[e[1]];n.id=t+"open",c.id=t+"close",[n,c].forEach((function(e){e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",o),e.addEventListener("click",l)}))}))}));var p=0;h.sort((function(e,t){return e.index-t.index})),h.forEach((function(e){e.open?(e.element.classList.add(s("brace-level-"+(p%12+1))),p++):(p=Math.max(0,p-1),e.element.classList.add(s("brace-level-"+(p%12+1))))}))}}}))}function s(e){var t=Prism.plugins.customClass;return t?t.apply(e,"none"):e}function i(e){var t=c.exec(e.id);return document.querySelector("#"+t[1]+("open"==t[2]?"close":"open"))}function a(){Prism.util.isActive(this,"brace-hover",!0)&&[this,i(this)].forEach((function(e){e.classList.add(s("brace-hover"))}))}function o(){[this,i(this)].forEach((function(e){e.classList.remove(s("brace-hover"))}))}function l(){Prism.util.isActive(this,"brace-select",!0)&&[this,i(this)].forEach((function(e){e.classList.add(s("brace-selected"))}))}}();

!function(t){var e={};function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){const r={value:0,stars:5,half:!1,emptyStar:"far fa-star",halfStar:"fas fa-star-half-alt",filledStar:"fas fa-star",color:"#fcd703",readonly:!1,click:function(t){console.error("No click callback provided!")}};jQuery.fn.extend({rating:function(t={}){return this.each((function(){$(this).attr("rating")&&$(this).empty(),this.stars=t.value?t.value:r.value,this.readonly=t.readonly?t.readonly:r.readonly,this.getStars=function(){return $(this).find($("i"))},$(this).css({color:t.color?t.color:r.color}).attr("rating",!0),this.readonly||($(this).off("mousemove").on("mousemove",(function(e){let a=t.half?t.half:r.half;if(this.getStars().index(e.target)>=0)if(a){$(this).find("i").attr("class",t.emptyStar?t.emptyStar:r.emptyStar);let a=.5;$(this).find("i").css({width:$(this).find("i").outerWidth()}),e.offsetX>$(e.target).outerWidth()/2&&(a=1);let s=this.getStars().index(e.target)+a;for(let e=0;e<this.getStars().length;e++)e+.5<s?$(this.getStars()[e]).attr("class",t.filledStar?t.filledStar:r.filledStar):e<s&&$(this.getStars()[e]).attr("class",t.halfStar?t.halfStar:r.halfStar)}else{$(this).find("i").attr("class",t.emptyStar?t.emptyStar:r.emptyStar);let a=this.getStars().index(e.target)+1;for(let e=0;e<this.getStars().length;e++)e<a&&$(this.getStars()[e]).attr("class",t.filledStar?t.filledStar:r.filledStar)}})),$(this).off("mouseout").on("mouseout",(function(t){this.printStars()})),$(this).off("click").on("click",(function(e){if(t.half?t.half:r.half){let t=.5;e.offsetX>$(e.target).outerWidth()/2&&(t=1),this.stars=this.getStars().index(e.target)+t}else this.stars=this.getStars().index(e.target)+1;(t.click?t.click:r.click)({stars:this.stars,event:e})})));const e=t.stars?t.stars:r.stars;for(let a=0;a<e;a++){let e=$("<i></i>").addClass(t.emptyStar?t.emptyStar:r.emptyStar).appendTo($(this));if(this.readonly||e.css({cursor:"pointer"}),a>1e3)return}if(this.printStars=function(){if(t.half?t.half:r.half){$(this).find("i").attr("class",t.emptyStar?t.emptyStar:r.emptyStar);for(let e=0;e<this.stars;e++)e<this.stars-.5?$(this.getStars()[e]).attr("class",t.filledStar?t.filledStar:r.filledStar):$(this.getStars()[e]).attr("class",t.halfStar?t.halfStar:r.halfStar)}else{$(this).find("i").attr("class",t.emptyStar?t.emptyStar:r.emptyStar);for(let e=0;e<this.stars;e++)$(this.getStars()[e]).attr("class",t.filledStar?t.filledStar:r.filledStar)}},this.stars>0){this.printStars();(t.click?t.click:r.click)({stars:this.stars})}}))}}),$((function(){$("[data-rating-stars]").each((function(){let t={},e=/^data-rating\-(.+)$/;$.each($(this).get(0).attributes,(function(r,a){if(e.test(a.nodeName)){let r=a.nodeName.match(e)[1];t[r]=a.nodeValue}})),null!=t.input&&(t.click=function(e){$(t.input).val(e.stars)}),$(this).rating(t)}))}))}]);
jQuery(function($){

    // SCROLL TO TOP
    $(window).on('scroll',function(){
        var showAfter = 100;
        if($(this).scrollTop() > showAfter) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').on('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });



    // GLIGHTBOX INIT
    const lightbox = GLightbox({
        'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
        'width': 900,
        'autoPlayVideos': 'true',
    });


    // COURSE GRID & LINE TOGGLE

    // Popular Course Toggle
    $('#popular-course-section .btn-list').on('click', function() {
        $('#popular-course-section .courses').addClass('horizontal-list');
    });

    $('#popular-course-section .btn-grid').on('click', function() {
        $('#popular-course-section .courses').removeClass('horizontal-list');
    });

    // Recent Course Toggle
    $('#recent-course-section .btn-list').on('click', function() {
        $('#recent-course-section .courses').addClass('horizontal-list');
    });

    $('#recent-course-section .btn-grid').on('click', function() {
        $('#recent-course-section .courses').removeClass('horizontal-list');
    });

    // Courses page course toggle
    $('#btn-course-grid-view').on('click', function(){
        $('#course-section .courses').removeClass('horizontal-list');
    });

    $('#btn-course-list-view').on('click', function(){
        $('#course-section .courses').addClass('horizontal-list');
    });


    


    // OWL CAROUSEL
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        dotsData: true,
        dotsContainer: '.owl-dots',
        margin: 20,
        navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            1200:{
                items:2,
                nav:true,
            },

        },
    });

    $('#dots .item').on('click', function() {
        $('#dots .item').trigger('to.owl.carousel', [$(this).index(), 1000]);
    });


    // Popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });



    // Copy to clipboard
    $(document).on('click', '.copyClipBoardBtn', function(e){
        e.preventDefault();
        var copyText = $(this).attr('href');

        navigator.clipboard.writeText(copyText).then(function () {
            alert('"'+copyText+'"'+' Copied!');
        }, function () {
            alert('Failed to copy. Check permissions for clipboard');
        });
    });


    $("#reviewRating").rating({
        "stars": 5,
        "value": 0,
        "half" : false,
        "color" : "#ffc107",
        "emptyStar": "far fa-star",
        "halfStar": "fas fa-star-half-stroke",
        "filledStar": "fa-solid fa-star",
        "click":function (e) {
            console.log(e);
            $("#reviewRatingInput").val(e.stars);
        }
            
    });




    

    

});



// PLAYER
const player = new Plyr('#player');






// S