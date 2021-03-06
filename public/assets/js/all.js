/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
if(typeof Object.create!=='function'){Object.create=function(obj){function F(){};F.prototype=obj;return new F();};} (function($,w,d,undefined){var NewsBox={init:function(options,elem){var self=this;self.elem=elem;self.$elem=$(elem);self.newsTagName=self.$elem.find(":first-child").prop('tagName');self.newsClassName=self.$elem.find(":first-child").attr('class');self.timer=null;self.resizeTimer=null;self.animationStarted=false;self.isHovered=false;if(typeof options==='string'){if(console){console.error("String property override is not supported");} throw("String property override is not supported");}else{self.options=$.extend({},$.fn.bootstrapNews.options,options);self.prepareLayout();if(self.options.autoplay){self.animate();} if(self.options.navigation){self.buildNavigation();} if(typeof self.options.onToDo==='function'){self.options.onToDo.apply(self,arguments);}}},prepareLayout:function(){var self=this;$(self.elem).find('.'+self.newsClassName).on('mouseenter',function(){self.onReset(true);});$(self.elem).find('.'+self.newsClassName).on('mouseout',function(){self.onReset(false);});$.map(self.$elem.find(self.newsTagName),function(newsItem,index){if(index>self.options.newsPerPage-1){$(newsItem).hide();}else{$(newsItem).show();}});if(self.$elem.find(self.newsTagName).length<self.options.newsPerPage){self.options.newsPerPage=self.$elem.find(self.newsTagName).length;} var height=0;$.map(self.$elem.find(self.newsTagName),function(newsItem,index){if(index<self.options.newsPerPage){height=parseInt(height)+parseInt($(newsItem).height())+10;}});$(self.elem).css({"overflow-y":"hidden","height":height});$(w).resize(function(){if(self.resizeTimer!==null){clearTimeout(self.resizeTimer);} self.resizeTimer=setTimeout(function(){self.prepareLayout();},200);});},findPanelObject:function(){var panel=this.$elem;while(panel.parent()!==undefined){panel=panel.parent();if(panel.parent().hasClass('panel')){return panel.parent();}} return undefined;},buildNavigation:function(){var panel=this.findPanelObject();if(panel){var nav='<a href="javascript:void(0);" id="close-ads-text" class="close"><span class="fa fa-close"></span></a> <ul class=" ads-btn pull-right" style="margin: 0px;">'+'<li><a href="#" class="prev"><span class="glyphicon glyphicon-chevron-down"></span></a></li>'+'<li><a href="#" class="next"><span class="glyphicon glyphicon-chevron-up"></span></a></li>'+'</ul><div class="clearfix"></div>';var footer=$(panel).find(".panel-heading")[0];if(footer){$(footer).append(nav);}else{$(panel).append('<div class="panel-heading">'+nav+'</div>');} var self=this;$(panel).find('.prev').on('click',function(ev){ev.preventDefault();self.onPrev();});$(panel).find('.next').on('click',function(ev){ev.preventDefault();self.onNext();});}},onStop:function(){},onPause:function(){var self=this;self.isHovered=true;if(this.options.autoplay&&self.timer){clearTimeout(self.timer);}},onReset:function(status){var self=this;if(self.timer){clearTimeout(self.timer);} if(self.options.autoplay){self.isHovered=status;self.animate();}},animate:function(){var self=this;self.timer=setTimeout(function(){if(!self.options.pauseOnHover){self.isHovered=false;} if(!self.isHovered){if(self.options.direction==='up'){self.onNext();}else{self.onPrev();}}},self.options.newsTickerInterval);},onPrev:function(){var self=this;if(self.animationStarted){return false;} self.animationStarted=true;var html='<'+self.newsTagName+' style="display:none;" class="'+self.newsClassName+'">'+$(self.$elem).find(self.newsTagName).last().html()+'</'+self.newsTagName+'>';$(self.$elem).prepend(html);$(self.$elem).find(self.newsTagName).first().slideDown(self.options.animationSpeed,function(){$(self.$elem).find(self.newsTagName).last().remove();});$(self.$elem).find(self.newsTagName+':nth-child('+parseInt(self.options.newsPerPage+1)+')').slideUp(self.options.animationSpeed,function(){self.animationStarted=false;self.onReset(self.isHovered);});$(self.elem).find('.'+self.newsClassName).on('mouseenter',function(){self.onReset(true);});$(self.elem).find('.'+self.newsClassName).on('mouseout',function(){self.onReset(false);});},onNext:function(){var self=this;if(self.animationStarted){return false;} self.animationStarted=true;var html='<'+self.newsTagName+' style="display:none;" class='+self.newsClassName+'>'+$(self.$elem).find(self.newsTagName).first().html()+'</'+self.newsTagName+'>';$(self.$elem).append(html);$(self.$elem).find(self.newsTagName).first().slideUp(self.options.animationSpeed,function(){$(this).remove();});$(self.$elem).find(self.newsTagName+':nth-child('+parseInt(self.options.newsPerPage+1)+')').slideDown(self.options.animationSpeed,function(){self.animationStarted=false;self.onReset(self.isHovered);});$(self.elem).find('.'+self.newsClassName).on('mouseenter',function(){self.onReset(true);});$(self.elem).find('.'+self.newsClassName).on('mouseout',function(){self.onReset(false);});}};$.fn.bootstrapNews=function(options){return this.each(function(){var newsBox=Object.create(NewsBox);newsBox.init(options,this);});};$.fn.bootstrapNews.options={newsPerPage:4,navigation:true,autoplay:true,direction:'up',animationSpeed:'normal',newsTickerInterval:4000,pauseOnHover:true,onStop:null,onPause:null,onReset:null,onPrev:null,onNext:null,onToDo:null};})(jQuery,window,document);
(function($){if($.fn.ajaxForm==undefined){$.getScript(base_asset+"public/assets/js/jquery.form.js");}var feature={};feature.fileapi=$("<input type='file'/>").get(0).files!==undefined;feature.formdata=window.FormData!==undefined;$.fn.uploadFile=function(options){var s=$.extend({url:"",method:"POST",enctype:"multipart/form-data",returnType:null,allowDuplicates:false,duplicateStrict:false,allowedTypes:"*",acceptFiles:"*",fileName:"file",formData:true,dynamicFormData:false,maxFileSize:-1,maxFileCount:1,multiple:false,dragDrop:true,autoSubmit:true,showCancel:true,showAbort:true,showDone:true,showDelete:true,showError:true,showStatusAfterSuccess:true,showStatusAfterError:true,showFileCounter:true,fileCounterStyle:"). ",showaFileSize:true,showProgress:true,nestedForms:true,showDownload:false,onLoad:function(obj){},onSelect:function(files){return true;},onSubmit:function(files,xhr){},onSuccess:function(files,response,xhr,pd){},onError:function(files,status,message,pd){},onCancel:function(files,pd){},onAbort:function(files,pd){},downloadCallback:false,deleteCallback:false,afterUploadAll:false,serialize:true,sequential:false,sequentialCount:2,customProgressBar:false,abortButtonClass:"ajax-file-upload-abort",cancelButtonClass:"ajax-file-upload-cancel",dragDropContainerClass:"ajax-upload-dragdrop",dragDropHoverClass:"state-hover",errorClass:"ajax-file-upload-error",uploadButtonClass:"ajax-file-upload",dragDropStr:"<span><b>Drag &amp; Drop Files</b></span>",uploadStr:"Upload",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag &amp; Drop is not allowed.",extErrorStr:"is not allowed. Allowed extensions: ",duplicateErrorStr:"is not allowed. File already exists.",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:" is not allowed. Maximum allowed files are:",downloadStr:"Download",customErrorKeyStr:"jquery-upload-file-error",showQueueDiv:false,statusBarWidth:400,dragdropWidth:400,showPreview:true,previewHeight:"60px",previewWidth:"60px",extraHTML:false,uploadQueuOrder:'top'},options);this.fileCounter=1;this.selectedFiles=0;var formGroup="ajax-file-upload-"+(new Date().getTime());this.formGroup=formGroup;this.errorLog=$("<div></div>");this.responses=[];this.existingFileNames=[];if(!feature.formdata)
{s.dragDrop=false;}if(!feature.formdata){s.multiple=false;}
$(this).html("");var obj=this;var uploadLabel=$('<div>'+s.uploadStr+'</div>');$(uploadLabel).addClass(s.uploadButtonClass);(function checkAjaxFormLoaded(){if($.fn.ajaxForm){if(s.dragDrop){var dragDrop=$('<div class="'+s.dragDropContainerClass+'" style="vertical-align:top;"></div>').width(s.dragdropWidth);$(obj).append(dragDrop);$(dragDrop).append(uploadLabel);$(dragDrop).append($(s.dragDropStr));setDragDropHandlers(obj,s,dragDrop);}else{$(obj).append(uploadLabel);}
$(obj).append(obj.errorLog);if(s.showQueueDiv)
obj.container=$("#"+s.showQueueDiv);else
obj.container=$("<div class='ajax-file-upload-container'></div>").insertAfter($(obj));s.onLoad.call(this,obj);createCutomInputFile(obj,formGroup,s,uploadLabel);}else window.setTimeout(checkAjaxFormLoaded,10);})();this.startUpload=function(){$("form").each(function(i,items)
{if($(this).hasClass(obj.formGroup))
{mainQ.push($(this));}});if(mainQ.length>=1)
submitPendingUploads();}
this.getFileCount=function(){return obj.selectedFiles;}
this.stopUpload=function(){$("."+s.abortButtonClass).each(function(i,items){if($(this).hasClass(obj.formGroup))$(this).click();});$("."+s.cancelButtonClass).each(function(i,items){if($(this).hasClass(obj.formGroup))$(this).click();});}
this.cancelAll=function(){$("."+s.cancelButtonClass).each(function(i,items){if($(this).hasClass(obj.formGroup))$(this).click();});}
this.update=function(settings){s=$.extend(s,settings);}
this.reset=function(removeStatusBars){obj.fileCounter=1;obj.selectedFiles=0;obj.errorLog.html("");if(removeStatusBars!=false)
{obj.container.html("");}}
this.remove=function()
{obj.container.html("");$(obj).remove();}
this.createProgress=function(filename,filepath,filesize){var pd=new createProgressDiv(this,s);pd.progressDiv.show();pd.progressbar.width('100%');var fileNameStr="";if(s.showFileCounter)
fileNameStr=obj.fileCounter+s.fileCounterStyle+filename;else fileNameStr=filename;if(s.showFileSize)
fileNameStr+=" ("+getSizeStr(filesize)+")";pd.filename.html(fileNameStr);obj.fileCounter++;obj.selectedFiles++;if(s.showPreview)
{pd.preview.attr('src',filepath);pd.preview.show();}
if(s.showDownload){pd.download.show();pd.download.click(function(){if(s.downloadCallback)s.downloadCallback.call(obj,[filename]);});}
if(s.showDelete)
{pd.del.show();pd.del.click(function(){pd.statusbar.hide().remove();var arr=[filename];if(s.deleteCallback)s.deleteCallback.call(this,arr,pd);obj.selectedFiles-=1;updateFileCounter(s,obj);});}}
this.getResponses=function(){return this.responses;}
var mainQ=[];var progressQ=[]
var running=false;function submitPendingUploads(){if(running)return;running=true;(function checkPendingForms(){if(!s.sequential)s.sequentialCount=99999;if(mainQ.length==0&&progressQ.length==0)
{if(s.afterUploadAll)s.afterUploadAll(obj);running=false;}
else
{if(progressQ.length<s.sequentialCount)
{var frm=mainQ.shift();if(frm!=undefined)
{progressQ.push(frm);frm.submit();}}
window.setTimeout(checkPendingForms,100);}})();}
function setDragDropHandlers(obj,s,ddObj){ddObj.on('dragenter',function(e){e.stopPropagation();e.preventDefault();$(this).addClass(s.dragDropHoverClass);});ddObj.on('dragover',function(e){e.stopPropagation();e.preventDefault();var that=$(this);if(that.hasClass(s.dragDropContainerClass)&&!that.hasClass(s.dragDropHoverClass)){that.addClass(s.dragDropHoverClass);}});ddObj.on('drop',function(e){e.preventDefault();$(this).removeClass(s.dragDropHoverClass);obj.errorLog.html("");var files=e.originalEvent.dataTransfer.files;if(!s.multiple&&files.length>1){if(s.showError)$("<div class='"+s.errorClass+"'>"+s.multiDragErrorStr+"</div>").appendTo(obj.errorLog);return;}
if(s.onSelect(files)==false)return;serializeAndUploadFiles(s,obj,files);});ddObj.on('dragleave',function(e){$(this).removeClass(s.dragDropHoverClass);});$(document).on('dragenter',function(e){e.stopPropagation();e.preventDefault();});$(document).on('dragover',function(e){e.stopPropagation();e.preventDefault();var that=$(this);if(!that.hasClass(s.dragDropContainerClass)){that.removeClass(s.dragDropHoverClass);}});$(document).on('drop',function(e){e.stopPropagation();e.preventDefault();$(this).removeClass(s.dragDropHoverClass);});}
function getSizeStr(size){var sizeStr="";var sizeKB=size / 1024;if(parseInt(sizeKB)>1024){var sizeMB=sizeKB / 1024;sizeStr=sizeMB.toFixed(2)+" MB";}else{sizeStr=sizeKB.toFixed(2)+" KB";}
return sizeStr;}
function serializeData(extraData){var serialized=[];if(jQuery.type(extraData)=="string"){serialized=extraData.split('&');}else{serialized=$.param(extraData).split('&');}
var len=serialized.length;var result=[];var i,part;for(i=0;i<len;i++){serialized[i]=serialized[i].replace(/\+/g,' ');part=serialized[i].split('=');result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);}
return result;}
function noserializeAndUploadFiles(s,obj,files){var ts=s;var fd=new FormData();var fileArray=[];var fileName=s.fileName.replace("[]","");var fileListStr="";for(var i=0;i<files.length;i++){if(!isFileTypeAllowed(obj,s,files[i].name)){if(s.showError)$("<div><font color='red'><b>"+files[i].name+"</b> "+s.extErrorStr+s.allowedTypes+"</font></div>").appendTo(obj.errorLog);continue;}
if(s.maxFileSize!=-1&&files[i].size>s.maxFileSize){if(s.showError)$("<div><font color='red'><b>"+files[i].name+"</b> "+s.sizeErrorStr+getSizeStr(s.maxFileSize)+"</font></div>").appendTo(obj.errorLog);continue;}
fd.append(fileName+"[]",files[i]);fileArray.push(files[i].name);fileListStr+=obj.fileCounter+"). "+files[i].name+"<br>";obj.fileCounter++;}
if(fileArray.length==0)return;var extraData=s.formData;if(extraData){var sData=serializeData(extraData);for(var j=0;j<sData.length;j++){if(sData[j]){fd.append(sData[j][0],sData[j][1]);}}}
ts.fileData=fd;var pd=new createProgressDiv(obj,s);pd.filename.html(fileListStr);var form=$("<form style='display:block; position:absolute;left: 150px;' class='"+obj.formGroup+"' method='"+s.method+"' action='"+s.url+"' enctype='"+s.enctype+"'></form>");form.appendTo('body');ajaxFormSubmit(form,ts,pd,fileArray,obj);}
function serializeAndUploadFiles(s,obj,files){for(var i=0;i<files.length;i++){if(!isFileTypeAllowed(obj,s,files[i].name)){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+files[i].name+"</b> "+s.extErrorStr+s.allowedTypes+"</div>").appendTo(obj.errorLog);continue;}
if(!s.allowDuplicates&&isFileDuplicate(obj,files[i].name)){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+files[i].name+"</b> "+s.duplicateErrorStr+"</div>").appendTo(obj.errorLog);continue;}
if(s.maxFileSize!=-1&&files[i].size>s.maxFileSize){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+files[i].name+"</b> "+s.sizeErrorStr+getSizeStr(s.maxFileSize)+"</div>").appendTo(obj.errorLog);continue;}
if(s.maxFileCount!=-1&&obj.selectedFiles>=s.maxFileCount){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+files[i].name+"</b> "+s.maxFileCountErrorStr+s.maxFileCount+"</div>").appendTo(obj.errorLog);continue;}
obj.selectedFiles++;obj.existingFileNames.push(files[i].name);var ts=s;var fd=new FormData();var fileName=s.fileName.replace("[]","");fd.append(fileName,files[i]);var extraData=s.formData;if(extraData){var sData=serializeData(extraData);for(var j=0;j<sData.length;j++){if(sData[j]){fd.append(sData[j][0],sData[j][1]);}}}
ts.fileData=fd;var pd=new createProgressDiv(obj,s);var fileNameStr="";if(s.showFileCounter)fileNameStr=obj.fileCounter+s.fileCounterStyle+files[i].name
else fileNameStr=files[i].name;if(s.showFileSize)
fileNameStr+=" ("+getSizeStr(files[i].size)+")";pd.filename.html(fileNameStr);var form=$("<form style='display:block; position:absolute;left: 150px;' class='"+obj.formGroup+"' method='"+s.method+"' action='"+
s.url+"' enctype='"+s.enctype+"'></form>");form.appendTo('body');var fileArray=[];fileArray.push(files[i].name);ajaxFormSubmit(form,ts,pd,fileArray,obj,files[i]);obj.fileCounter++;}}
function isFileTypeAllowed(obj,s,fileName){var fileExtensions=s.allowedTypes.toLowerCase().split(/[\s,]+/g);var ext=fileName.split('.').pop().toLowerCase();if(s.allowedTypes!="*"&&jQuery.inArray(ext,fileExtensions)<0){return false;}
return true;}
function isFileDuplicate(obj,filename){var duplicate=false;if(obj.existingFileNames.length){for(var x=0;x<obj.existingFileNames.length;x++){if(obj.existingFileNames[x]==filename||s.duplicateStrict&&obj.existingFileNames[x].toLowerCase()==filename.toLowerCase()){duplicate=true;}}}
return duplicate;}
function removeExistingFileName(obj,fileArr){if(obj.existingFileNames.length){for(var x=0;x<fileArr.length;x++){var pos=obj.existingFileNames.indexOf(fileArr[x]);if(pos!=-1){obj.existingFileNames.splice(pos,1);}}}}
function getSrcToPreview(file,obj){if(file){obj.show();var reader=new FileReader();reader.onload=function(e){obj.attr('src',e.target.result);};reader.readAsDataURL(file);}}
function updateFileCounter(s,obj){if(s.showFileCounter){var count=$(obj.container).find(".ajax-file-upload-filename").length;obj.fileCounter=count+1;$(obj.container).find(".ajax-file-upload-filename").each(function(i,items){var arr=$(this).html().split(s.fileCounterStyle);var fileNum=parseInt(arr[0])-1;var name=count+s.fileCounterStyle+arr[1];$(this).html(name);count--;});}}
function createCutomInputFile(obj,group,s,uploadLabel){var fileUploadId="ajax-upload-id-"+(new Date().getTime());var form=$("<form id='auto-upload' method='"+s.method+"' action='"+s.url+"' enctype='"+s.enctype+"'><input id='_token' type='hidden' nam='_token' value='asdasd' /></form>");var fileInputStr="<input type='file' id='"+fileUploadId+"' name='"+s.fileName+"' accept='"+s.acceptFiles+"'/>";if(s.multiple){if(s.fileName.indexOf("[]")!=s.fileName.length-2)
{s.fileName+="[]";}
fileInputStr="<input type='file' id='"+fileUploadId+"' name='"+s.fileName+"' accept='"+s.acceptFiles+"' multiple/>";}
var fileInput=$(fileInputStr).appendTo(form);fileInput.change(function(){obj.errorLog.html("");var fileExtensions=s.allowedTypes.toLowerCase().split(",");var fileArray=[];if(this.files)
{for(i=0;i<this.files.length;i++){fileArray.push(this.files[i].name);}
if(s.onSelect(this.files)==false)return;}else{var filenameStr=$(this).val();var flist=[];fileArray.push(filenameStr);if(!isFileTypeAllowed(obj,s,filenameStr)){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+filenameStr+"</b> "+s.extErrorStr+s.allowedTypes+"</div>").appendTo(obj.errorLog);return;}
flist.push({name:filenameStr,size:'NA'});if(s.onSelect(flist)==false)return;}
updateFileCounter(s,obj);uploadLabel.unbind("click");form.hide();createCutomInputFile(obj,group,s,uploadLabel);form.addClass(group);if(s.serialize&&feature.fileapi&&feature.formdata)
{form.removeClass(group);var files=this.files;form.remove();serializeAndUploadFiles(s,obj,files);}else{var fileList="";for(var i=0;i<fileArray.length;i++){if(s.showFileCounter)fileList+=obj.fileCounter+s.fileCounterStyle+fileArray[i]+"<br>";else fileList+=fileArray[i]+"<br>";;obj.fileCounter++;}
if(s.maxFileCount!=-1&&(obj.selectedFiles+fileArray.length)>s.maxFileCount){if(s.showError)$("<div class='"+s.errorClass+"'><b>"+fileList+"</b> "+s.maxFileCountErrorStr+s.maxFileCount+"</div>").appendTo(obj.errorLog);return;}
obj.selectedFiles+=fileArray.length;var pd=new createProgressDiv(obj,s);pd.filename.html(fileList);ajaxFormSubmit(form,s,pd,fileArray,obj,null);}});if(s.nestedForms){form.css({'margin':0,'padding':0});uploadLabel.css({position:'relative',overflow:'hidden',cursor:'default'});fileInput.css({position:'absolute','cursor':'pointer','top':'0px','width':'100%','height':'100%','left':'0px','z-index':'100','opacity':'0.0','filter':'alpha(opacity=0)','-ms-filter':"alpha(opacity=0)",'-khtml-opacity':'0.0','-moz-opacity':'0.0'});form.appendTo(uploadLabel);}else{form.appendTo($('body'));form.css({margin:0,padding:0,display:'block',position:'absolute',left:'-250px'});if(navigator.appVersion.indexOf("MSIE ")!=-1)
{uploadLabel.attr('for',fileUploadId);}else{uploadLabel.click(function(){fileInput.click();});}}}
function defaultProgressBar(obj,s)
{this.statusbar=$("<div class='ajax-file-upload-statusbar'></div>").width(s.statusBarWidth);this.preview=$("<img class='ajax-file-upload-preview' />").width(s.previewWidth).height(s.previewHeight).appendTo(this.statusbar).hide();this.filename=$("<div class='ajax-file-upload-filename'></div>").appendTo(this.statusbar);this.progressDiv=$("<div class='ajax-file-upload-progress'>").appendTo(this.statusbar).hide();this.progressbar=$("<div class='ajax-file-upload-bar'></div>").appendTo(this.progressDiv);this.abort=$("<div>"+s.abortStr+"</div>").appendTo(this.statusbar).hide();this.cancel=$("<div>"+s.cancelStr+"</div>").appendTo(this.statusbar).hide();this.clearfix=$("<div class='clearfix'></div>").appendTo(this.statusbar);this.CenterButton=$("<div align='center'></div>").appendTo(this.statusbar);this.done=$("<div>"+s.doneStr+"</div>").appendTo(this.CenterButton).hide();this.download=$("<div>"+s.downloadStr+"</div>").appendTo(this.CenterButton).hide();this.del=$("<div>"+s.deletelStr+"</div>").appendTo(this.CenterButton).hide();this.abort.addClass("ajax-file-upload-red");this.done.addClass("ajax-file-upload-green");this.download.addClass("ajax-file-upload-green");this.cancel.addClass("ajax-file-upload-red");this.del.addClass("ajax-file-upload-red");return this;}
function createProgressDiv(obj,s){var bar=null;if(s.customProgressBar)
bar=new s.customProgressBar(obj,s);else
bar=new defaultProgressBar(obj,s);bar.abort.addClass(obj.formGroup);bar.abort.addClass(s.abortButtonClass);bar.cancel.addClass(obj.formGroup);bar.cancel.addClass(s.cancelButtonClass);if(s.extraHTML)
bar.extraHTML=$("<div class='extrahtml'>"+s.extraHTML()+"</div>").insertAfter(bar.filename);if(s.uploadQueuOrder=='bottom')
$(obj.container).append(bar.statusbar);else
$(obj.container).prepend(bar.statusbar);return bar;}
function ajaxFormSubmit(form,s,pd,fileArray,obj,file){var currentXHR=null;var options={cache:false,contentType:false,processData:false,forceSync:false,type:s.method,data:s.formData,formData:s.fileData,dataType:s.returnType,beforeSubmit:function(formData,$form,options){if(s.onSubmit.call(this,fileArray)!=false){if(s.dynamicFormData)
{var sData=serializeData(s.dynamicFormData());if(sData){for(var j=0;j<sData.length;j++){if(sData[j]){if(s.fileData!=undefined)options.formData.append(sData[j][0],sData[j][1]);else options.data[sData[j][0]]=sData[j][1];}}}}
if(s.extraHTML)
{$(pd.extraHTML).find("input,select,textarea").each(function(i,items)
{if(s.fileData!=undefined)options.formData.append($(this).attr('name'),$(this).val());else options.data[$(this).attr('name')]=$(this).val();});}
return true;}
pd.statusbar.append("<div class='"+s.errorClass+"'>"+s.uploadErrorStr+"</div>");pd.cancel.show()
form.remove();pd.cancel.click(function(){mainQ.splice(mainQ.indexOf(form),1);removeExistingFileName(obj,fileArray);pd.statusbar.remove();s.onCancel.call(obj,fileArray,pd);obj.selectedFiles-=fileArray.length;updateFileCounter(s,obj);});return false;},beforeSend:function(xhr,o){pd.progressDiv.show();pd.cancel.hide();pd.done.hide();if(s.showAbort){pd.abort.show();pd.abort.click(function(){removeExistingFileName(obj,fileArray);xhr.abort();obj.selectedFiles-=fileArray.length;s.onAbort.call(obj,fileArray,pd);});}
if(!feature.formdata)
{pd.progressbar.width('5%');}else pd.progressbar.width('1%');},uploadProgress:function(event,position,total,percentComplete){if(percentComplete>98)percentComplete=98;var percentVal=percentComplete+'%';if(percentComplete>1)pd.progressbar.width(percentVal)
if(s.showProgress){pd.progressbar.html(percentVal);pd.progressbar.css('text-align','center');}},success:function(data,message,xhr){pd.cancel.remove();progressQ.pop();if(s.returnType=="json"&&$.type(data)=="object"&&data.hasOwnProperty(s.customErrorKeyStr)){pd.abort.hide();var msg=data[s.customErrorKeyStr];s.onError.call(this,fileArray,200,msg,pd);if(s.showStatusAfterError){pd.progressDiv.hide();pd.statusbar.append("<span class='"+s.errorClass+"'>ERROR: "+msg+"</span>");}else{pd.statusbar.hide();pd.statusbar.remove();}
obj.selectedFiles-=fileArray.length;form.remove();return;}
obj.responses.push(data);pd.progressbar.width('100%')
if(s.showProgress){pd.progressbar.html('100%');pd.progressbar.css('text-align','center');}
pd.abort.hide();s.onSuccess.call(this,fileArray,data,xhr,pd);if(s.showStatusAfterSuccess){if(s.showDone){pd.done.show();pd.done.click(function(){pd.statusbar.hide("slow");pd.statusbar.remove();});}else{pd.done.hide();}
if(s.showDelete){pd.del.show();pd.del.click(function(){pd.statusbar.hide().remove();if(s.deleteCallback)s.deleteCallback.call(this,data,pd);obj.selectedFiles-=fileArray.length;updateFileCounter(s,obj);});}else{pd.del.hide();}}else{pd.statusbar.hide("slow");pd.statusbar.remove();}
if(s.showDownload){pd.download.show();pd.download.click(function(){if(s.downloadCallback)s.downloadCallback(data);});}
form.remove();},error:function(xhr,status,errMsg){pd.cancel.remove();progressQ.pop();pd.abort.hide();if(xhr.statusText=="abort")
{pd.statusbar.hide("slow").remove();updateFileCounter(s,obj);}else{s.onError.call(this,fileArray,status,errMsg,pd);if(s.showStatusAfterError){pd.progressDiv.hide();pd.statusbar.append("<span class='"+s.errorClass+"'>ERROR: "+errMsg+"</span>");}else{pd.statusbar.hide();pd.statusbar.remove();}
obj.selectedFiles-=fileArray.length;}
form.remove();}};if(s.showPreview&&file!=null){if(file.type.toLowerCase().split("/").shift()=="image")getSrcToPreview(file,pd.preview);}
if(s.autoSubmit){form.ajaxForm(options);mainQ.push(form);submitPendingUploads();}else{if(s.showCancel){pd.cancel.show();pd.cancel.click(function(){mainQ.splice(mainQ.indexOf(form),1);removeExistingFileName(obj,fileArray);form.remove();pd.statusbar.remove();s.onCancel.call(obj,fileArray,pd);obj.selectedFiles-=fileArray.length;updateFileCounter(s,obj);});}
form.ajaxForm(options);}}
return this;}}(jQuery));
/*
 * blueimp Gallery JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Swipe implementation based on
 * https://github.com/bradbirdsall/Swipe
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, window, document, DocumentTouch */

(function (factory) {
  'use strict'
  if (typeof define === 'function' && define.amd) {
    // Register as an anonymous AMD module:
    define(['./blueimp-helper'], factory)
  } else {
    // Browser globals:
    window.blueimp = window.blueimp || {}
    window.blueimp.Gallery = factory(
      window.blueimp.helper || window.jQuery
    )
  }
}(function ($) {
  'use strict'

  function Gallery (list, options) {
    if (document.body.style.maxHeight === undefined) {
      // document.body.style.maxHeight is undefined on IE6 and lower
      return null
    }
    if (!this || this.options !== Gallery.prototype.options) {
      // Called as function instead of as constructor,
      // so we simply return a new instance:
      return new Gallery(list, options)
    }
    if (!list || !list.length) {
      this.console.log(
        'blueimp Gallery: No or empty list provided as first argument.',
        list
      )
      return
    }
    this.list = list
    this.num = list.length
    this.initOptions(options)
    this.initialize()
  }

  $.extend(Gallery.prototype, {
    options: {
      // The Id, element or querySelector of the gallery widget:
      container: '#blueimp-gallery',
      // The tag name, Id, element or querySelector of the slides container:
      slidesContainer: 'div',
      // The tag name, Id, element or querySelector of the title element:
      titleElement: 'h3',
      // The class to add when the gallery is visible:
      displayClass: 'blueimp-gallery-display',
      // The class to add when the gallery controls are visible:
      controlsClass: 'blueimp-gallery-controls',
      // The class to add when the gallery only displays one element:
      singleClass: 'blueimp-gallery-single',
      // The class to add when the left edge has been reached:
      leftEdgeClass: 'blueimp-gallery-left',
      // The class to add when the right edge has been reached:
      rightEdgeClass: 'blueimp-gallery-right',
      // The class to add when the automatic slideshow is active:
      playingClass: 'blueimp-gallery-playing',
      // The class for all slides:
      slideClass: 'slide',
      // The slide class for loading elements:
      slideLoadingClass: 'slide-loading',
      // The slide class for elements that failed to load:
      slideErrorClass: 'slide-error',
      // The class for the content element loaded into each slide:
      slideContentClass: 'slide-content',
      // The class for the "toggle" control:
      toggleClass: 'toggle',
      // The class for the "prev" control:
      prevClass: 'prev',
      // The class for the "next" control:
      nextClass: 'next',
      // The class for the "close" control:
      closeClass: 'close',
      // The class for the "play-pause" toggle control:
      playPauseClass: 'play-pause',
      // The list object property (or data attribute) with the object type:
      typeProperty: 'type',
      // The list object property (or data attribute) with the object title:
      titleProperty: 'title',
      // The list object property (or data attribute) with the object URL:
      urlProperty: 'href',
      // The list object property (or data attribute) with the object srcset URL(s):
      srcsetProperty: 'urlset',
      // The gallery listens for transitionend events before triggering the
      // opened and closed events, unless the following option is set to false:
      displayTransition: true,
      // Defines if the gallery slides are cleared from the gallery modal,
      // or reused for the next gallery initialization:
      clearSlides: true,
      // Defines if images should be stretched to fill the available space,
      // while maintaining their aspect ratio (will only be enabled for browsers
      // supporting background-size="contain", which excludes IE < 9).
      // Set to "cover", to make images cover all available space (requires
      // support for background-size="cover", which excludes IE < 9):
      stretchImages: false,
      // Toggle the controls on pressing the Return key:
      toggleControlsOnReturn: true,
      // Toggle the controls on slide click:
      toggleControlsOnSlideClick: true,
      // Toggle the automatic slideshow interval on pressing the Space key:
      toggleSlideshowOnSpace: true,
      // Navigate the gallery by pressing left and right on the keyboard:
      enableKeyboardNavigation: true,
      // Close the gallery on pressing the Esc key:
      closeOnEscape: true,
      // Close the gallery when clicking on an empty slide area:
      closeOnSlideClick: true,
      // Close the gallery by swiping up or down:
      closeOnSwipeUpOrDown: true,
      // Emulate touch events on mouse-pointer devices such as desktop browsers:
      emulateTouchEvents: true,
      // Stop touch events from bubbling up to ancestor elements of the Gallery:
      stopTouchEventsPropagation: false,
      // Hide the page scrollbars:
      hidePageScrollbars: true,
      // Stops any touches on the container from scrolling the page:
      disableScroll: true,
      // Carousel mode (shortcut for carousel specific options):
      carousel: false,
      // Allow continuous navigation, moving from last to first
      // and from first to last slide:
      continuous: true,
      // Remove elements outside of the preload range from the DOM:
      unloadElements: true,
      // Start with the automatic slideshow:
      startSlideshow: false,
      // Delay in milliseconds between slides for the automatic slideshow:
      slideshowInterval: 5000,
      // The starting index as integer.
      // Can also be an object of the given list,
      // or an equal object with the same url property:
      index: 0,
      // The number of elements to load around the current index:
      preloadRange: 2,
      // The transition speed between slide changes in milliseconds:
      transitionSpeed: 400,
      // The transition speed for automatic slide changes, set to an integer
      // greater 0 to override the default transition speed:
      slideshowTransitionSpeed: undefined,
      // The event object for which the default action will be canceled
      // on Gallery initialization (e.g. the click event to open the Gallery):
      event: undefined,
      // Callback function executed when the Gallery is initialized.
      // Is called with the gallery instance as "this" object:
      onopen: undefined,
      // Callback function executed when the Gallery has been initialized
      // and the initialization transition has been completed.
      // Is called with the gallery instance as "this" object:
      onopened: undefined,
      // Callback function executed on slide change.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslide: undefined,
      // Callback function executed after the slide change transition.
      // Is called with the gallery instance as "this" object and the
      // current index and slide as arguments:
      onslideend: undefined,
      // Callback function executed on slide content load.
      // Is called with the gallery instance as "this" object and the
      // slide index and slide element as arguments:
      onslidecomplete: undefined,
      // Callback function executed when the Gallery is about to be closed.
      // Is called with the gallery instance as "this" object:
      onclose: undefined,
      // Callback function executed when the Gallery has been closed
      // and the closing transition has been completed.
      // Is called with the gallery instance as "this" object:
      onclosed: undefined
    },

    carouselOptions: {
      hidePageScrollbars: false,
      toggleControlsOnReturn: false,
      toggleSlideshowOnSpace: false,
      enableKeyboardNavigation: false,
      closeOnEscape: false,
      closeOnSlideClick: false,
      closeOnSwipeUpOrDown: false,
      disableScroll: false,
      startSlideshow: true
    },

    console: window.console && typeof window.console.log === 'function'
      ? window.console
      : {log: function () {}},

    // Detect touch, transition, transform and background-size support:
    support: (function (element) {
      var support = {
        touch: window.ontouchstart !== undefined ||
          (window.DocumentTouch && document instanceof DocumentTouch)
      }
      var transitions = {
        webkitTransition: {
          end: 'webkitTransitionEnd',
          prefix: '-webkit-'
        },
        MozTransition: {
          end: 'transitionend',
          prefix: '-moz-'
        },
        OTransition: {
          end: 'otransitionend',
          prefix: '-o-'
        },
        transition: {
          end: 'transitionend',
          prefix: ''
        }
      }
      var prop
      for (prop in transitions) {
        if (transitions.hasOwnProperty(prop) &&
          element.style[prop] !== undefined) {
          support.transition = transitions[prop]
          support.transition.name = prop
          break
        }
      }
      function elementTests () {
        var transition = support.transition
        var prop
        var translateZ
        document.body.appendChild(element)
        if (transition) {
          prop = transition.name.slice(0, -9) + 'ransform'
          if (element.style[prop] !== undefined) {
            element.style[prop] = 'translateZ(0)'
            translateZ = window.getComputedStyle(element)
              .getPropertyValue(transition.prefix + 'transform')
            support.transform = {
              prefix: transition.prefix,
              name: prop,
              translate: true,
              translateZ: !!translateZ && translateZ !== 'none'
            }
          }
        }
        if (element.style.backgroundSize !== undefined) {
          support.backgroundSize = {}
          element.style.backgroundSize = 'contain'
          support.backgroundSize.contain = window
            .getComputedStyle(element)
            .getPropertyValue('background-size') === 'contain'
          element.style.backgroundSize = 'cover'
          support.backgroundSize.cover = window
            .getComputedStyle(element)
            .getPropertyValue('background-size') === 'cover'
        }
        document.body.removeChild(element)
      }
      if (document.body) {
        elementTests()
      } else {
        $(document).on('DOMContentLoaded', elementTests)
      }
      return support
    // Test element, has to be standard HTML and must not be hidden
    // for the CSS3 tests using window.getComputedStyle to be applicable:
    }(document.createElement('div'))),

    requestAnimationFrame: window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame,

    initialize: function () {
      this.initStartIndex()
      if (this.initWidget() === false) {
        return false
      }
      this.initEventListeners()
      // Load the slide at the given index:
      this.onslide(this.index)
      // Manually trigger the slideend event for the initial slide:
      this.ontransitionend()
      // Start the automatic slideshow if applicable:
      if (this.options.startSlideshow) {
        this.play()
      }
    },

    slide: function (to, speed) {
      window.clearTimeout(this.timeout)
      var index = this.index
      var direction
      var naturalDirection
      var diff
      if (index === to || this.num === 1) {
        return
      }
      if (!speed) {
        speed = this.options.transitionSpeed
      }
      if (this.support.transform) {
        if (!this.options.continuous) {
          to = this.circle(to)
        }
        // 1: backward, -1: forward:
        direction = Math.abs(index - to) / (index - to)
        // Get the actual position of the slide:
        if (this.options.continuous) {
          naturalDirection = direction
          direction = -this.positions[this.circle(to)] / this.slideWidth
          // If going forward but to < index, use to = slides.length + to
          // If going backward but to > index, use to = -slides.length + to
          if (direction !== naturalDirection) {
            to = -direction * this.num + to
          }
        }
        diff = Math.abs(index - to) - 1
        // Move all the slides between index and to in the right direction:
        while (diff) {
          diff -= 1
          this.move(
            this.circle((to > index ? to : index) - diff - 1),
            this.slideWidth * direction,
            0
          )
        }
        to = this.circle(to)
        this.move(index, this.slideWidth * direction, speed)
        this.move(to, 0, speed)
        if (this.options.continuous) {
          this.move(
            this.circle(to - direction),
            -(this.slideWidth * direction),
            0
          )
        }
      } else {
        to = this.circle(to)
        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
      }
      this.onslide(to)
    },

    getIndex: function () {
      return this.index
    },

    getNumber: function () {
      return this.num
    },

    prev: function () {
      if (this.options.continuous || this.index) {
        this.slide(this.index - 1)
      }
    },

    next: function () {
      if (this.options.continuous || this.index < this.num - 1) {
        this.slide(this.index + 1)
      }
    },

    play: function (time) {
      var that = this
      window.clearTimeout(this.timeout)
      this.interval = time || this.options.slideshowInterval
      if (this.elements[this.index] > 1) {
        this.timeout = this.setTimeout(
          (!this.requestAnimationFrame && this.slide) || function (to, speed) {
            that.animationFrameId = that.requestAnimationFrame.call(
              window,
              function () {
                that.slide(to, speed)
              }
            )
          },
          [this.index + 1, this.options.slideshowTransitionSpeed],
          this.interval
        )
      }
      this.container.addClass(this.options.playingClass)
    },

    pause: function () {
      window.clearTimeout(this.timeout)
      this.interval = null
      this.container.removeClass(this.options.playingClass)
    },

    add: function (list) {
      var i
      if (!list.concat) {
        // Make a real array out of the list to add:
        list = Array.prototype.slice.call(list)
      }
      if (!this.list.concat) {
        // Make a real array out of the Gallery list:
        this.list = Array.prototype.slice.call(this.list)
      }
      this.list = this.list.concat(list)
      this.num = this.list.length
      if (this.num > 2 && this.options.continuous === null) {
        this.options.continuous = true
        this.container.removeClass(this.options.leftEdgeClass)
      }
      this.container
        .removeClass(this.options.rightEdgeClass)
        .removeClass(this.options.singleClass)
      for (i = this.num - list.length; i < this.num; i += 1) {
        this.addSlide(i)
        this.positionSlide(i)
      }
      this.positions.length = this.num
      this.initSlides(true)
    },

    resetSlides: function () {
      this.slidesContainer.empty()
      this.unloadAllSlides()
      this.slides = []
    },

    handleClose: function () {
      var options = this.options
      this.destroyEventListeners()
      // Cancel the slideshow:
      this.pause()
      this.container[0].style.display = 'none'
      this.container
        .removeClass(options.displayClass)
        .removeClass(options.singleClass)
        .removeClass(options.leftEdgeClass)
        .removeClass(options.rightEdgeClass)
      if (options.hidePageScrollbars) {
        document.body.style.overflow = this.bodyOverflowStyle
      }
      if (this.options.clearSlides) {
        this.resetSlides()
      }
      if (this.options.onclosed) {
        this.options.onclosed.call(this)
      }
    },

    close: function () {
      var that = this
      function closeHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(
            that.support.transition.end,
            closeHandler
          )
          that.handleClose()
        }
      }
      if (this.options.onclose) {
        this.options.onclose.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(
          this.support.transition.end,
          closeHandler
        )
        this.container.removeClass(this.options.displayClass)
      } else {
        this.handleClose()
      }
    },

    circle: function (index) {
      // Always return a number inside of the slides index range:
      return (this.num + (index % this.num)) % this.num
    },

    move: function (index, dist, speed) {
      this.translateX(index, dist, speed)
      this.positions[index] = dist
    },

    translate: function (index, x, y, speed) {
      var style = this.slides[index].style
      var transition = this.support.transition
      var transform = this.support.transform
      style[transition.name + 'Duration'] = speed + 'ms'
      style[transform.name] = 'translate(' + x + 'px, ' + y + 'px)' +
      (transform.translateZ ? ' translateZ(0)' : '')
    },

    translateX: function (index, x, speed) {
      this.translate(index, x, 0, speed)
    },

    translateY: function (index, y, speed) {
      this.translate(index, 0, y, speed)
    },

    animate: function (from, to, speed) {
      if (!speed) {
        this.slidesContainer[0].style.left = to + 'px'
        return
      }
      var that = this
      var start = new Date().getTime()
      var timer = window.setInterval(function () {
        var timeElap = new Date().getTime() - start
        if (timeElap > speed) {
          that.slidesContainer[0].style.left = to + 'px'
          that.ontransitionend()
          window.clearInterval(timer)
          return
        }
        that.slidesContainer[0].style.left = (((to - from) *
          (Math.floor((timeElap / speed) * 100) / 100)) +
          from) + 'px'
      }, 4)
    },

    preventDefault: function (event) {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    },

    stopPropagation: function (event) {
      if (event.stopPropagation) {
        event.stopPropagation()
      } else {
        event.cancelBubble = true
      }
    },

    onresize: function () {
      this.initSlides(true)
    },

    onmousedown: function (event) {
      // Trigger on clicks of the left mouse button only
      // and exclude video elements:
      if (event.which && event.which === 1 &&
        event.target.nodeName !== 'VIDEO') {
        // Preventing the default mousedown action is required
        // to make touch emulation work with Firefox:
        event.preventDefault()
        ;(event.originalEvent || event).touches = [{
          pageX: event.pageX,
          pageY: event.pageY
        }]
        this.ontouchstart(event)
      }
    },

    onmousemove: function (event) {
      if (this.touchStart) {
        (event.originalEvent || event).touches = [{
          pageX: event.pageX,
          pageY: event.pageY
        }]
        this.ontouchmove(event)
      }
    },

    onmouseup: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    onmouseout: function (event) {
      if (this.touchStart) {
        var target = event.target
        var related = event.relatedTarget
        if (!related || (related !== target &&
          !$.contains(target, related))) {
          this.onmouseup(event)
        }
      }
    },

    ontouchstart: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      this.touchStart = {
        // Remember the initial touch coordinates:
        x: touches.pageX,
        y: touches.pageY,
        // Store the time to determine touch duration:
        time: Date.now()
      }
      // Helper variable to detect scroll movement:
      this.isScrolling = undefined
      // Reset delta values:
      this.touchDelta = {}
    },

    ontouchmove: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      // jQuery doesn't copy touch event properties by default,
      // so we have to access the originalEvent object:
      var touches = (event.originalEvent || event).touches[0]
      var scale = (event.originalEvent || event).scale
      var index = this.index
      var touchDeltaX
      var indices
      // Ensure this is a one touch swipe and not, e.g. a pinch:
      if (touches.length > 1 || (scale && scale !== 1)) {
        return
      }
      if (this.options.disableScroll) {
        event.preventDefault()
      }
      // Measure change in x and y coordinates:
      this.touchDelta = {
        x: touches.pageX - this.touchStart.x,
        y: touches.pageY - this.touchStart.y
      }
      touchDeltaX = this.touchDelta.x
      // Detect if this is a vertical scroll movement (run only once per touch):
      if (this.isScrolling === undefined) {
        this.isScrolling = this.isScrolling ||
        Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
      }
      if (!this.isScrolling) {
        // Always prevent horizontal scroll:
        event.preventDefault()
        // Stop the slideshow:
        window.clearTimeout(this.timeout)
        if (this.options.continuous) {
          indices = [
            this.circle(index + 1),
            index,
            this.circle(index - 1)
          ]
        } else {
          // Increase resistance if first slide and sliding left
          // or last slide and sliding right:
          this.touchDelta.x = touchDeltaX =
            touchDeltaX /
            (
            ((!index && touchDeltaX > 0) ||
            (index === this.num - 1 && touchDeltaX < 0))
              ? (Math.abs(touchDeltaX) / this.slideWidth + 1)
              : 1
          )
          indices = [index]
          if (index) {
            indices.push(index - 1)
          }
          if (index < this.num - 1) {
            indices.unshift(index + 1)
          }
        }
        while (indices.length) {
          index = indices.pop()
          this.translateX(index, touchDeltaX + this.positions[index], 0)
        }
      } else {
        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
      }
    },

    ontouchend: function (event) {
      if (this.options.stopTouchEventsPropagation) {
        this.stopPropagation(event)
      }
      var index = this.index
      var speed = this.options.transitionSpeed
      var slideWidth = this.slideWidth
      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
      // Determine if slide attempt triggers next/prev slide:
      var isValidSlide =
      (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
        Math.abs(this.touchDelta.x) > slideWidth / 2
      // Determine if slide attempt is past start or end:
      var isPastBounds = (!index && this.touchDelta.x > 0) ||
        (index === this.num - 1 && this.touchDelta.x < 0)
      var isValidClose = !isValidSlide && this.options.closeOnSwipeUpOrDown &&
        ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
        Math.abs(this.touchDelta.y) > this.slideHeight / 2)
      var direction
      var indexForward
      var indexBackward
      var distanceForward
      var distanceBackward
      if (this.options.continuous) {
        isPastBounds = false
      }
      // Determine direction of swipe (true: right, false: left):
      direction = this.touchDelta.x < 0 ? -1 : 1
      if (!this.isScrolling) {
        if (isValidSlide && !isPastBounds) {
          indexForward = index + direction
          indexBackward = index - direction
          distanceForward = slideWidth * direction
          distanceBackward = -slideWidth * direction
          if (this.options.continuous) {
            this.move(this.circle(indexForward), distanceForward, 0)
            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
          } else if (indexForward >= 0 &&
            indexForward < this.num) {
            this.move(indexForward, distanceForward, 0)
          }
          this.move(index, this.positions[index] + distanceForward, speed)
          this.move(
            this.circle(indexBackward),
            this.positions[this.circle(indexBackward)] + distanceForward,
            speed
          )
          index = this.circle(indexBackward)
          this.onslide(index)
        } else {
          // Move back into position
          if (this.options.continuous) {
            this.move(this.circle(index - 1), -slideWidth, speed)
            this.move(index, 0, speed)
            this.move(this.circle(index + 1), slideWidth, speed)
          } else {
            if (index) {
              this.move(index - 1, -slideWidth, speed)
            }
            this.move(index, 0, speed)
            if (index < this.num - 1) {
              this.move(index + 1, slideWidth, speed)
            }
          }
        }
      } else {
        if (isValidClose) {
          this.close()
        } else {
          // Move back into position
          this.translateY(index, 0, speed)
        }
      }
    },

    ontouchcancel: function (event) {
      if (this.touchStart) {
        this.ontouchend(event)
        delete this.touchStart
      }
    },

    ontransitionend: function (event) {
      var slide = this.slides[this.index]
      if (!event || slide === event.target) {
        if (this.interval) {
          this.play()
        }
        this.setTimeout(
          this.options.onslideend,
          [this.index, slide]
        )
      }
    },

    oncomplete: function (event) {
      var target = event.target || event.srcElement
      var parent = target && target.parentNode
      var index
      if (!target || !parent) {
        return
      }
      index = this.getNodeIndex(parent)
      $(parent).removeClass(this.options.slideLoadingClass)
      if (event.type === 'error') {
        $(parent).addClass(this.options.slideErrorClass)
        this.elements[index] = 3 // Fail
      } else {
        this.elements[index] = 2 // Done
      }
      // Fix for IE7's lack of support for percentage max-height:
      if (target.clientHeight > this.container[0].clientHeight) {
        target.style.maxHeight = this.container[0].clientHeight
      }
      if (this.interval && this.slides[this.index] === parent) {
        this.play()
      }
      this.setTimeout(
        this.options.onslidecomplete,
        [index, parent]
      )
    },

    onload: function (event) {
      this.oncomplete(event)
    },

    onerror: function (event) {
      this.oncomplete(event)
    },

    onkeydown: function (event) {
      switch (event.which || event.keyCode) {
        case 13: // Return
          if (this.options.toggleControlsOnReturn) {
            this.preventDefault(event)
            this.toggleControls()
          }
          break
        case 27: // Esc
          if (this.options.closeOnEscape) {
            this.close()
            // prevent Esc from closing other things
            event.stopImmediatePropagation()
          }
          break
        case 32: // Space
          if (this.options.toggleSlideshowOnSpace) {
            this.preventDefault(event)
            this.toggleSlideshow()
          }
          break
        case 37: // Left
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.prev()
          }
          break
        case 39: // Right
          if (this.options.enableKeyboardNavigation) {
            this.preventDefault(event)
            this.next()
          }
          break
      }
    },

    handleClick: function (event) {
      var options = this.options
      var target = event.target || event.srcElement
      var parent = target.parentNode
      function isTarget (className) {
        return $(target).hasClass(className) ||
        $(parent).hasClass(className)
      }
      if (isTarget(options.toggleClass)) {
        // Click on "toggle" control
        this.preventDefault(event)
        this.toggleControls()
      } else if (isTarget(options.prevClass)) {
        // Click on "prev" control
        this.preventDefault(event)
        this.prev()
      } else if (isTarget(options.nextClass)) {
        // Click on "next" control
        this.preventDefault(event)
        this.next()
      } else if (isTarget(options.closeClass)) {
        // Click on "close" control
        this.preventDefault(event)
        this.close()
      } else if (isTarget(options.playPauseClass)) {
        // Click on "play-pause" control
        this.preventDefault(event)
        this.toggleSlideshow()
      } else if (parent === this.slidesContainer[0]) {
        // Click on slide background
        if (options.closeOnSlideClick) {
          this.preventDefault(event)
          this.close()
        } else if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      } else if (parent.parentNode &&
        parent.parentNode === this.slidesContainer[0]) {
        // Click on displayed element
        if (options.toggleControlsOnSlideClick) {
          this.preventDefault(event)
          this.toggleControls()
        }
      }
    },

    onclick: function (event) {
      if (this.options.emulateTouchEvents &&
        this.touchDelta && (Math.abs(this.touchDelta.x) > 20 ||
        Math.abs(this.touchDelta.y) > 20)) {
        delete this.touchDelta
        return
      }
      return this.handleClick(event)
    },

    updateEdgeClasses: function (index) {
      if (!index) {
        this.container.addClass(this.options.leftEdgeClass)
      } else {
        this.container.removeClass(this.options.leftEdgeClass)
      }
      if (index === this.num - 1) {
        this.container.addClass(this.options.rightEdgeClass)
      } else {
        this.container.removeClass(this.options.rightEdgeClass)
      }
    },

    handleSlide: function (index) {
      if (!this.options.continuous) {
        this.updateEdgeClasses(index)
      }
      this.loadElements(index)
      if (this.options.unloadElements) {
        this.unloadElements(index)
      }
      this.setTitle(index)
    },

    onslide: function (index) {
      this.index = index
      this.handleSlide(index)
      this.setTimeout(this.options.onslide, [index, this.slides[index]])
    },

    setTitle: function (index) {
      var text = this.slides[index].firstChild.title
      var titleElement = this.titleElement
      if (titleElement.length) {
        this.titleElement.empty()
        if (text) {
          titleElement[0].appendChild(document.createTextNode(text))
        }
      }
    },

    setTimeout: function (func, args, wait) {
      var that = this
      return func && window.setTimeout(function () {
        func.apply(that, args || [])
      }, wait || 0)
    },

    imageFactory: function (obj, callback) {
      var that = this
      var img = this.imagePrototype.cloneNode(false)
      var url = obj
      var backgroundSize = this.options.stretchImages
      var called
      var element
      var title
      function callbackWrapper (event) {
        if (!called) {
          event = {
            type: event.type,
            target: element
          }
          if (!element.parentNode) {
            // Fix for IE7 firing the load event for
            // cached images before the element could
            // be added to the DOM:
            return that.setTimeout(callbackWrapper, [event])
          }
          called = true
          $(img).off('load error', callbackWrapper)
          if (backgroundSize) {
            if (event.type === 'load') {
              element.style.background = 'url("' + url +
                '") center no-repeat'
              element.style.backgroundSize = backgroundSize
            }
          }
          callback(event)
        }
      }
      if (typeof url !== 'string') {
        url = this.getItemProperty(obj, this.options.urlProperty)
        title = this.getItemProperty(obj, this.options.titleProperty)
      }
      if (backgroundSize === true) {
        backgroundSize = 'contain'
      }
      backgroundSize = this.support.backgroundSize &&
        this.support.backgroundSize[backgroundSize] && backgroundSize
      if (backgroundSize) {
        element = this.elementPrototype.cloneNode(false)
      } else {
        element = img
        img.draggable = false
      }
      if (title) {
        element.title = title
      }
      $(img).on('load error', callbackWrapper)
      img.src = url
      return element
    },

    createElement: function (obj, callback) {
      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
      var factory = (type && this[type.split('/')[0] + 'Factory']) ||
        this.imageFactory
      var element = obj && factory.call(this, obj, callback)
      var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
      if (!element) {
        element = this.elementPrototype.cloneNode(false)
        this.setTimeout(callback, [{
          type: 'error',
          target: element
        }])
      }
      if (srcset) {
        element.setAttribute('srcset', srcset)
      }
      $(element).addClass(this.options.slideContentClass)
      return element
    },

    loadElement: function (index) {
      if (!this.elements[index]) {
        if (this.slides[index].firstChild) {
          this.elements[index] = $(this.slides[index])
            .hasClass(this.options.slideErrorClass) ? 3 : 2
        } else {
          this.elements[index] = 1 // Loading
          $(this.slides[index]).addClass(this.options.slideLoadingClass)
          this.slides[index].appendChild(this.createElement(
            this.list[index],
            this.proxyListener
          ))
        }
      }
    },

    loadElements: function (index) {
      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
      var j = index
      var i
      for (i = 0; i < limit; i += 1) {
        // First load the current slide element (0),
        // then the next one (+1),
        // then the previous one (-2),
        // then the next after next (+2), etc.:
        j += i * (i % 2 === 0 ? -1 : 1)
        // Connect the ends of the list to load slide elements for
        // continuous navigation:
        j = this.circle(j)
        this.loadElement(j)
      }
    },

    unloadElements: function (index) {
      var i,
        diff
      for (i in this.elements) {
        if (this.elements.hasOwnProperty(i)) {
          diff = Math.abs(index - i)
          if (diff > this.options.preloadRange &&
            diff + this.options.preloadRange < this.num) {
            this.unloadSlide(i)
            delete this.elements[i]
          }
        }
      }
    },

    addSlide: function (index) {
      var slide = this.slidePrototype.cloneNode(false)
      slide.setAttribute('data-index', index)
      this.slidesContainer[0].appendChild(slide)
      this.slides.push(slide)
    },

    positionSlide: function (index) {
      var slide = this.slides[index]
      slide.style.width = this.slideWidth + 'px'
      if (this.support.transform) {
        slide.style.left = (index * -this.slideWidth) + 'px'
        this.move(
          index, this.index > index
            ? -this.slideWidth
            : (this.index < index ? this.slideWidth : 0),
          0
        )
      }
    },

    initSlides: function (reload) {
      var clearSlides,
        i
      if (!reload) {
        this.positions = []
        this.positions.length = this.num
        this.elements = {}
        this.imagePrototype = document.createElement('img')
        this.elementPrototype = document.createElement('div')
        this.slidePrototype = document.createElement('div')
        $(this.slidePrototype).addClass(this.options.slideClass)
        this.slides = this.slidesContainer[0].children
        clearSlides = this.options.clearSlides ||
        this.slides.length !== this.num
      }
      this.slideWidth = this.container[0].offsetWidth
      this.slideHeight = this.container[0].offsetHeight
      this.slidesContainer[0].style.width =
        (this.num * this.slideWidth) + 'px'
      if (clearSlides) {
        this.resetSlides()
      }
      for (i = 0; i < this.num; i += 1) {
        if (clearSlides) {
          this.addSlide(i)
        }
        this.positionSlide(i)
      }
      // Reposition the slides before and after the given index:
      if (this.options.continuous && this.support.transform) {
        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
        this.move(this.circle(this.index + 1), this.slideWidth, 0)
      }
      if (!this.support.transform) {
        this.slidesContainer[0].style.left =
          (this.index * -this.slideWidth) + 'px'
      }
    },

    unloadSlide: function (index) {
      var slide,
        firstChild
      slide = this.slides[index]
      firstChild = slide.firstChild
      if (firstChild !== null) {
        slide.removeChild(firstChild)
      }
    },

    unloadAllSlides: function () {
      var i,
        len
      for (i = 0, len = this.slides.length; i < len; i++) {
        this.unloadSlide(i)
      }
    },

    toggleControls: function () {
      var controlsClass = this.options.controlsClass
      if (this.container.hasClass(controlsClass)) {
        this.container.removeClass(controlsClass)
      } else {
        this.container.addClass(controlsClass)
      }
    },

    toggleSlideshow: function () {
      if (!this.interval) {
        this.play()
      } else {
        this.pause()
      }
    },

    getNodeIndex: function (element) {
      return parseInt(element.getAttribute('data-index'), 10)
    },

    getNestedProperty: function (obj, property) {
      property.replace(
        // Matches native JavaScript notation in a String,
        // e.g. '["doubleQuoteProp"].dotProp[2]'
        // eslint-disable-next-line no-useless-escape
        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
          var prop = dotProp || singleQuoteProp || doubleQuoteProp ||
            (arrayIndex && parseInt(arrayIndex, 10))
          if (str && obj) {
            obj = obj[prop]
          }
        }
      )
      return obj
    },

    getDataProperty: function (obj, property) {
      var prop
      if (obj.dataset) {
        // eslint-disable-next-line standard/computed-property-even-spacing
        prop = obj.dataset[property.replace(/-([a-z])/g, function (_, b) {
          return b.toUpperCase()
        })]
      } else if (obj.getAttribute) {
        prop = obj.getAttribute('data-' +
            property.replace(/([A-Z])/g, '-$1').toLowerCase())
      }
      if (typeof prop === 'string') {
        // eslint-disable-next-line no-useless-escape
        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/
            .test(prop)) {
          try {
            return $.parseJSON(prop)
          } catch (ignore) {}
        }
        return prop
      }
    },

    getItemProperty: function (obj, property) {
      var prop = this.getDataProperty(obj, property)
      if (prop === undefined) {
        prop = obj[property]
      }
      if (prop === undefined) {
        prop = this.getNestedProperty(obj, property)
      }
      return prop
    },

    initStartIndex: function () {
      var index = this.options.index
      var urlProperty = this.options.urlProperty
      var i
      // Check if the index is given as a list object:
      if (index && typeof index !== 'number') {
        for (i = 0; i < this.num; i += 1) {
          if (this.list[i] === index ||
            this.getItemProperty(this.list[i], urlProperty) ===
            this.getItemProperty(index, urlProperty)) {
            index = i
            break
          }
        }
      }
      // Make sure the index is in the list range:
      this.index = this.circle(parseInt(index, 10) || 0)
    },

    initEventListeners: function () {
      var that = this
      var slidesContainer = this.slidesContainer
      function proxyListener (event) {
        var type = that.support.transition &&
        that.support.transition.end === event.type
          ? 'transitionend'
          : event.type
        that['on' + type](event)
      }
      $(window).on('resize', proxyListener)
      $(document.body).on('keydown', proxyListener)
      this.container.on('click', proxyListener)
      if (this.support.touch) {
        slidesContainer
          .on('touchstart touchmove touchend touchcancel', proxyListener)
      } else if (this.options.emulateTouchEvents &&
        this.support.transition) {
        slidesContainer
          .on('mousedown mousemove mouseup mouseout', proxyListener)
      }
      if (this.support.transition) {
        slidesContainer.on(
          this.support.transition.end,
          proxyListener
        )
      }
      this.proxyListener = proxyListener
    },

    destroyEventListeners: function () {
      var slidesContainer = this.slidesContainer
      var proxyListener = this.proxyListener
      $(window).off('resize', proxyListener)
      $(document.body).off('keydown', proxyListener)
      this.container.off('click', proxyListener)
      if (this.support.touch) {
        slidesContainer
          .off('touchstart touchmove touchend touchcancel', proxyListener)
      } else if (this.options.emulateTouchEvents &&
        this.support.transition) {
        slidesContainer
          .off('mousedown mousemove mouseup mouseout', proxyListener)
      }
      if (this.support.transition) {
        slidesContainer.off(
          this.support.transition.end,
          proxyListener
        )
      }
    },

    handleOpen: function () {
      if (this.options.onopened) {
        this.options.onopened.call(this)
      }
    },

    initWidget: function () {
      var that = this
      function openHandler (event) {
        if (event.target === that.container[0]) {
          that.container.off(
            that.support.transition.end,
            openHandler
          )
          that.handleOpen()
        }
      }
      this.container = $(this.options.container)
      if (!this.container.length) {
        this.console.log(
          'blueimp Gallery: Widget container not found.',
          this.options.container
        )
        return false
      }
      this.slidesContainer = this.container.find(
        this.options.slidesContainer
      ).first()
      if (!this.slidesContainer.length) {
        this.console.log(
          'blueimp Gallery: Slides container not found.',
          this.options.slidesContainer
        )
        return false
      }
      this.titleElement = this.container.find(
        this.options.titleElement
      ).first()
      if (this.num === 1) {
        this.container.addClass(this.options.singleClass)
      }
      if (this.options.onopen) {
        this.options.onopen.call(this)
      }
      if (this.support.transition && this.options.displayTransition) {
        this.container.on(
          this.support.transition.end,
          openHandler
        )
      } else {
        this.handleOpen()
      }
      if (this.options.hidePageScrollbars) {
        // Hide the page scrollbars:
        this.bodyOverflowStyle = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      }
      this.container[0].style.display = 'block'
      this.initSlides()
      this.container.addClass(this.options.displayClass)
    },

    initOptions: function (options) {
      // Create a copy of the prototype options:
      this.options = $.extend({}, this.options)
      // Check if carousel mode is enabled:
      if ((options && options.carousel) ||
        (this.options.carousel && (!options || options.carousel !== false))) {
        $.extend(this.options, this.carouselOptions)
      }
      // Override any given options:
      $.extend(this.options, options)
      if (this.num < 3) {
        // 1 or 2 slides cannot be displayed continuous,
        // remember the original option by setting to null instead of false:
        this.options.continuous = this.options.continuous ? null : false
      }
      if (!this.support.transition) {
        this.options.emulateTouchEvents = false
      }
      if (this.options.event) {
        this.preventDefault(this.options.event)
      }
    }

  })

  return Gallery
}));

(function($){var delimiter=new Array();var tags_callbacks=new Array();$.fn.doAutosize=function(o){var minWidth=$(this).data('minwidth'),maxWidth=$(this).data('maxwidth'),val='',input=$(this),testSubject=$('#'+$(this).data('tester_id'));if(val===(val=input.val())){return;}
var escaped=val.replace(/&/g,'&amp;').replace(/\s/g,' ').replace(/</g,'&lt;').replace(/>/g,'&gt;');testSubject.html(escaped);var testerWidth=testSubject.width(),newWidth=(testerWidth+o.comfortZone)>=minWidth?testerWidth+o.comfortZone:minWidth,currentWidth=input.width(),isValidWidthChange=(newWidth<currentWidth&&newWidth>=minWidth)||(newWidth>minWidth&&newWidth<maxWidth);if(isValidWidthChange){input.width(newWidth);}};$.fn.resetAutosize=function(options){var minWidth=$(this).data('minwidth')||options.minInputWidth||$(this).width(),maxWidth=$(this).data('maxwidth')||options.maxInputWidth||($(this).closest('.tagsinput').width()-options.inputPadding),val='',input=$(this),testSubject=$('<tester/>').css({position:'absolute',top:-9999,left:-9999,width:'auto',fontSize:input.css('fontSize'),fontFamily:input.css('fontFamily'),fontWeight:input.css('fontWeight'),letterSpacing:input.css('letterSpacing'),whiteSpace:'nowrap'}),testerId=$(this).attr('id')+'_autosize_tester';if(!$('#'+testerId).length>0){testSubject.attr('id',testerId);testSubject.appendTo('body');}
input.data('minwidth',minWidth);input.data('maxwidth',maxWidth);input.data('tester_id',testerId);input.css('width',minWidth);};$.fn.addTag=function(value,options){options=jQuery.extend({focus:false,callback:true},options);this.each(function(){var id=$(this).attr('id');var tagslist=$(this).val().split(delimiter[id]);if(tagslist[0]==''){tagslist=new Array();}
value=jQuery.trim(value);if(options.unique){var skipTag=$(this).tagExist(value);if(skipTag==true){$('#'+id+'_tag').addClass('not_valid');}}else{var skipTag=false;}
if(value!=''&&skipTag!=true){$('<span>').addClass('tag').append($('<span>').text(value).append('&nbsp;&nbsp;'),$('<a>',{href:'#',title:'Removing tag',text:'x'}).click(function(){return $('#'+id).removeTag(escape(value));})).insertBefore('#'+id+'_addTag');tagslist.push(value);$('#'+id+'_tag').val('');if(options.focus){$('#'+id+'_tag').focus();}else{$('#'+id+'_tag').blur();}
$.fn.tagsInput.updateTagsField(this,tagslist);if(options.callback&&tags_callbacks[id]&&tags_callbacks[id]['onAddTag']){var f=tags_callbacks[id]['onAddTag'];f.call(this,value);}
if(tags_callbacks[id]&&tags_callbacks[id]['onChange'])
{var i=tagslist.length;var f=tags_callbacks[id]['onChange'];f.call(this,$(this),tagslist[i-1]);}}});return false;};$.fn.removeTag=function(value){value=unescape(value);this.each(function(){var id=$(this).attr('id');var old=$(this).val().split(delimiter[id]);$('#'+id+'_tagsinput .tag').remove();str='';for(i=0;i<old.length;i++){if(old[i]!=value){str=str+delimiter[id]+old[i];}}
$.fn.tagsInput.importTags(this,str);if(tags_callbacks[id]&&tags_callbacks[id]['onRemoveTag']){var f=tags_callbacks[id]['onRemoveTag'];f.call(this,value);}});return false;};$.fn.tagExist=function(val){var id=$(this).attr('id');var tagslist=$(this).val().split(delimiter[id]);return(jQuery.inArray(val,tagslist)>=0);};$.fn.importTags=function(str){var id=$(this).attr('id');$('#'+id+'_tagsinput .tag').remove();$.fn.tagsInput.importTags(this,str);}
$.fn.tagsInput=function(options){var settings=jQuery.extend({interactive:true,defaultText:'Add Another Video Category ',minChars:0,width:'300px',height:'100px',autocomplete:{selectFirst:false},hide:true,delimiter:',',unique:true,removeWithBackspace:true,placeholderColor:'#666666',autosize:true,comfortZone:20,inputPadding:6*2},options);var uniqueIdCounter=0;this.each(function(){if(typeof $(this).attr('data-tagsinput-init')!=='undefined'){return;}
$(this).attr('data-tagsinput-init',true);if(settings.hide){$(this).hide();}
var id=$(this).attr('id');if(!id||delimiter[$(this).attr('id')]){id=$(this).attr('id','tags'+new Date().getTime()+(uniqueIdCounter++)).attr('id');}
var data=jQuery.extend({pid:id,real_input:'#'+id,holder:'#'+id+'_tagsinput',input_wrapper:'#'+id+'_addTag',fake_input:'#'+id+'_tag'},settings);delimiter[id]=data.delimiter;if(settings.onAddTag||settings.onRemoveTag||settings.onChange){tags_callbacks[id]=new Array();tags_callbacks[id]['onAddTag']=settings.onAddTag;tags_callbacks[id]['onRemoveTag']=settings.onRemoveTag;tags_callbacks[id]['onChange']=settings.onChange;}
var markup='<div id="'+id+'_tagsinput" class="tagsinput"><div id="'+id+'_addTag">';if(settings.interactive){markup=markup+'<input id="'+id+'_tag" value="" readonly="readonly" style="width:200px;" data-default="'+settings.defaultText+'" />';}
markup=markup+'</div><div class="tags_clear"></div></div>';$(markup).insertAfter(this);$(data.holder).css('width',settings.width);$(data.holder).css('min-height',settings.height);$(data.holder).css('height',settings.height);if($(data.real_input).val()!=''){$.fn.tagsInput.importTags($(data.real_input),$(data.real_input).val());}
if(settings.interactive){$(data.fake_input).val($(data.fake_input).attr('data-default'));$(data.fake_input).css('color',settings.placeholderColor);$(data.fake_input).resetAutosize(settings);$(data.holder).bind('click',data,function(event){$(event.data.fake_input).focus();});$(data.fake_input).bind('focus',data,function(event){if($(event.data.fake_input).val()==$(event.data.fake_input).attr('data-default')){$(event.data.fake_input).val('');}
$(event.data.fake_input).css('color','#000000');});if(settings.autocomplete_url!=undefined){autocomplete_options={source:settings.autocomplete_url};for(attrname in settings.autocomplete){autocomplete_options[attrname]=settings.autocomplete[attrname];}
if(jQuery.Autocompleter!==undefined){$(data.fake_input).autocomplete(settings.autocomplete_url,settings.autocomplete);$(data.fake_input).bind('result',data,function(event,data,formatted){if(data){$('#'+id).addTag(data[0]+"",{focus:true,unique:(settings.unique)});}});}else if(jQuery.ui.autocomplete!==undefined){$(data.fake_input).autocomplete(autocomplete_options);$(data.fake_input).bind('autocompleteselect',data,function(event,ui){$(event.data.real_input).addTag(ui.item.value,{focus:true,unique:(settings.unique)});return false;});}}else{$(data.fake_input).bind('blur',data,function(event){var d=$(this).attr('data-default');if($(event.data.fake_input).val()!=''&&$(event.data.fake_input).val()!=d){if((event.data.minChars<=$(event.data.fake_input).val().length)&&(!event.data.maxChars||(event.data.maxChars>=$(event.data.fake_input).val().length)))
$(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});}else{$(event.data.fake_input).val($(event.data.fake_input).attr('data-default'));$(event.data.fake_input).css('color',settings.placeholderColor);}
return false;});}
$(data.fake_input).bind('keypress',data,function(event){if(_checkDelimiter(event)){event.preventDefault();if((event.data.minChars<=$(event.data.fake_input).val().length)&&(!event.data.maxChars||(event.data.maxChars>=$(event.data.fake_input).val().length)))
$(event.data.real_input).addTag($(event.data.fake_input).val(),{focus:true,unique:(settings.unique)});$(event.data.fake_input).resetAutosize(settings);return false;}else if(event.data.autosize){$(event.data.fake_input).doAutosize(settings);}});data.removeWithBackspace&&$(data.fake_input).bind('keydown',function(event)
{if(event.keyCode==8&&$(this).val()=='')
{event.preventDefault();var last_tag=$(this).closest('.tagsinput').find('.tag:last').text();var id=$(this).attr('id').replace(/_tag$/,'');last_tag=last_tag.replace(/[\s]+x$/,'');$('#'+id).removeTag(escape(last_tag));$(this).trigger('focus');}});$(data.fake_input).blur();if(data.unique){$(data.fake_input).keydown(function(event){if(event.keyCode==8||String.fromCharCode(event.which).match(/\w+|[áéíóúÁÉÍÓÚñÑ,/]+/)){$(this).removeClass('not_valid');}});}}});return this;};$.fn.tagsInput.updateTagsField=function(obj,tagslist){var id=$(obj).attr('id');$(obj).val(tagslist.join(delimiter[id]));};$.fn.tagsInput.importTags=function(obj,val){$(obj).val('');var id=$(obj).attr('id');var tags=val.split(delimiter[id]);for(i=0;i<tags.length;i++){$(obj).addTag(tags[i],{focus:false,callback:false});}
if(tags_callbacks[id]&&tags_callbacks[id]['onChange'])
{var f=tags_callbacks[id]['onChange'];f.call(obj,obj,tags[i]);}};var _checkDelimiter=function(event){var found=false;if(event.which==13){return true;}
if(typeof event.data.delimiter==='string'){if(event.which==event.data.delimiter.charCodeAt(0)){found=true;}}else{$.each(event.data.delimiter,function(index,delimiter){if(event.which==delimiter.charCodeAt(0)){found=true;}});}
return found;}})(jQuery);
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t=e.fn.select2.amd;var t;return function(){if(!t||!t.requirejs){t?n=t:t={};var e,n,r;!function(t){function i(e,t){return $.call(e,t)}function o(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(e=e.split("/"),s=e.length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),e=h.slice(0,h.length-1).concat(e),u=0;u<e.length;u+=1)if(p=e[u],"."===p)e.splice(u,1),u-=1;else if(".."===p){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((h||g)&&f){for(n=e.split("/"),u=n.length;u>0;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;d>0;d-=1)if(i=f[h.slice(0,d).join("/")],i&&(i=i[r])){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function s(e,n){return function(){var r=w.call(arguments,0);return"string"!=typeof r[0]&&1===r.length&&r.push(null),h.apply(t,r.concat([e,n]))}}function a(e){return function(t){return o(t,e)}}function l(e){return function(t){m[e]=t}}function c(e){if(i(v,e)){var n=v[e];delete v[e],_[e]=!0,p.apply(t,n)}if(!i(m,e)&&!i(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function d(e){return function(){return y&&y.config&&y.config[e]||{}}}var p,h,f,g,m={},v={},y={},_={},$=Object.prototype.hasOwnProperty,w=[].slice,b=/\.js$/;f=function(e,t){var n,r=u(e),i=r[0];return e=r[1],i&&(i=o(i,t),n=c(i)),i?e=n&&n.normalize?n.normalize(e,a(t)):o(e,t):(e=o(e,t),r=u(e),i=r[0],e=r[1],i&&(n=c(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){return s(e)},exports:function(e){var t=m[e];return"undefined"!=typeof t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},p=function(e,n,r,o){var a,u,d,p,h,y,$=[],w=typeof r;if(o=o||e,"undefined"===w||"function"===w){for(n=!n.length&&r.length?["require","exports","module"]:n,h=0;h<n.length;h+=1)if(p=f(n[h],o),u=p.f,"require"===u)$[h]=g.require(e);else if("exports"===u)$[h]=g.exports(e),y=!0;else if("module"===u)a=$[h]=g.module(e);else if(i(m,u)||i(v,u)||i(_,u))$[h]=c(u);else{if(!p.p)throw new Error(e+" missing "+u);p.p.load(p.n,s(o,!0),l(u),{}),$[h]=m[u]}d=r?r.apply(m[e],$):void 0,e&&(a&&a.exports!==t&&a.exports!==m[e]?m[e]=a.exports:d===t&&y||(m[e]=d))}else e&&(m[e]=r)},e=n=h=function(e,n,r,i,o){if("string"==typeof e)return g[e]?g[e](n):c(f(e,n).f);if(!e.splice){if(y=e,y.deps&&h(y.deps,y.callback),!n)return;n.splice?(e=n,n=r,r=null):e=t}return n=n||function(){},"function"==typeof r&&(r=i,i=o),i?p(t,e,n,r):setTimeout(function(){p(t,e,n,r)},4),h},h.config=function(e){return h(e)},e._defined=m,r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),i(m,e)||i(v,e)||(v[e]=[e,t,n])},r.amd={jQuery:!0}}(),t.requirejs=e,t.require=n,t.define=r}}(),t.define("almond",function(){}),t.define("jquery",[],function(){var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),t}),t.define("select2/utils",["jquery"],function(e){function t(e){var t=e.prototype,n=[];for(var r in t){var i=t[r];"function"==typeof i&&"constructor"!==r&&n.push(r)}return n}var n={};n.Extend=function(e,t){function n(){this.constructor=e}var r={}.hasOwnProperty;for(var i in t)r.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},n.Decorate=function(e,n){function r(){var t=Array.prototype.unshift,r=n.prototype.constructor.length,i=e.prototype.constructor;r>0&&(t.call(arguments,e.prototype.constructor),i=n.prototype.constructor),i.apply(this,arguments)}function i(){this.constructor=r}var o=t(n),s=t(e);n.displayName=e.displayName,r.prototype=new i;for(var a=0;a<s.length;a++){var l=s[a];r.prototype[l]=e.prototype[l]}for(var c=(function(e){var t=function(){};e in r.prototype&&(t=r.prototype[e]);var i=n.prototype[e];return function(){var e=Array.prototype.unshift;return e.call(arguments,t),i.apply(this,arguments)}}),u=0;u<o.length;u++){var d=o[u];r.prototype[d]=c(d)}return r};var r=function(){this.listeners={}};return r.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},r.prototype.trigger=function(e){var t=Array.prototype.slice;this.listeners=this.listeners||{},e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},r.prototype.invoke=function(e,t){for(var n=0,r=e.length;r>n;n++)e[n].apply(this,t)},n.Observable=r,n.generateChars=function(e){for(var t="",n=0;e>n;n++){var r=Math.floor(36*Math.random());t+=r.toString(36)}return t},n.bind=function(e,t){return function(){e.apply(t,arguments)}},n._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];o=o.substring(0,1).toLowerCase()+o.substring(1),o in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},n.hasScroll=function(t,n){var r=e(n),i=n.style.overflowX,o=n.style.overflowY;return i!==o||"hidden"!==o&&"visible"!==o?"scroll"===i||"scroll"===o?!0:r.innerHeight()<n.scrollHeight||r.innerWidth()<n.scrollWidth:!1},n.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},n.appendMany=function(t,n){if("1.7"===e.fn.jquery.substr(0,3)){var r=e();e.map(n,function(e){r=r.add(e)}),n=r}t.append(n)},n}),t.define("select2/results",["jquery","./utils"],function(e,t){function n(e,t,r){this.$element=e,this.data=r,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var r=e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(t.message);r.append(n(i(t.args))),r[0].className+=" select2-results__message",this.$results.append(r)},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},n.prototype.append=function(e){this.hideLoading();var t=[];if(null==e.results||0===e.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)},n.prototype.position=function(e,t){var n=t.find(".select2-results");n.append(e)},n.prototype.sort=function(e){var t=this.options.get("sorter");return t(e)},n.prototype.setClasses=function(){var t=this;this.data.current(function(n){var r=e.map(n,function(e){return e.id.toString()}),i=t.$results.find(".select2-results__option[aria-selected]");i.each(function(){var t=e(this),n=e.data(this,"data"),i=""+n.id;null!=n.element&&n.element.selected||null==n.element&&e.inArray(i,r)>-1?t.attr("aria-selected","true"):t.attr("aria-selected","false")});var o=i.filter("[aria-selected=true]");o.length>0?o.first().trigger("mouseenter"):i.first().trigger("mouseenter")})},n.prototype.showLoading=function(e){this.hideLoading();var t=this.options.get("translations").get("searching"),n={disabled:!0,loading:!0,text:t(e)},r=this.option(n);r.className+=" loading-results",this.$results.prepend(r)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(t){var n=document.createElement("li");n.className="select2-results__option";var r={role:"treeitem","aria-selected":"false"};t.disabled&&(delete r["aria-selected"],r["aria-disabled"]="true"),null==t.id&&delete r["aria-selected"],null!=t._resultId&&(n.id=t._resultId),t.title&&(n.title=t.title),t.children&&(r.role="group",r["aria-label"]=t.text,delete r["aria-selected"]);for(var i in r){var o=r[i];n.setAttribute(i,o)}if(t.children){var s=e(n),a=document.createElement("strong");a.className="select2-results__group",e(a),this.template(t,a);for(var l=[],c=0;c<t.children.length;c++){var u=t.children[c],d=this.option(u);l.push(d)}var p=e("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(t,n);return e.data(n,"data",t),n},n.prototype.bind=function(t){var n=this,r=t.id+"-results";this.$results.attr("id",r),t.on("results:all",function(e){n.clear(),n.append(e.data),t.isOpen()&&n.setClasses()}),t.on("results:append",function(e){n.append(e.data),t.isOpen()&&n.setClasses()}),t.on("query",function(e){n.hideMessages(),n.showLoading(e)}),t.on("select",function(){t.isOpen()&&n.setClasses()}),t.on("unselect",function(){t.isOpen()&&n.setClasses()}),t.on("open",function(){n.$results.attr("aria-expanded","true"),n.$results.attr("aria-hidden","false"),n.setClasses(),n.ensureHighlightVisible()}),t.on("close",function(){n.$results.attr("aria-expanded","false"),n.$results.attr("aria-hidden","true"),n.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=n.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=n.getHighlightedResults();if(0!==e.length){var t=e.data("data");"true"==e.attr("aria-selected")?n.trigger("close",{}):n.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=n.getHighlightedResults(),t=n.$results.find("[aria-selected]"),r=t.index(e);if(0!==r){var i=r-1;0===e.length&&(i=0);var o=t.eq(i);o.trigger("mouseenter");var s=n.$results.offset().top,a=o.offset().top,l=n.$results.scrollTop()+(a-s);0===i?n.$results.scrollTop(0):0>a-s&&n.$results.scrollTop(l)}}),t.on("results:next",function(){var e=n.getHighlightedResults(),t=n.$results.find("[aria-selected]"),r=t.index(e),i=r+1;if(!(i>=t.length)){var o=t.eq(i);o.trigger("mouseenter");var s=n.$results.offset().top+n.$results.outerHeight(!1),a=o.offset().top+o.outerHeight(!1),l=n.$results.scrollTop()+a-s;0===i?n.$results.scrollTop(0):a>s&&n.$results.scrollTop(l)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){n.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=n.$results.scrollTop(),r=n.$results.get(0).scrollHeight-n.$results.scrollTop()+e.deltaY,i=e.deltaY>0&&t-e.deltaY<=0,o=e.deltaY<0&&r<=n.$results.height();i?(n.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):o&&(n.$results.scrollTop(n.$results.get(0).scrollHeight-n.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(t){var r=e(this),i=r.data("data");return"true"===r.attr("aria-selected")?void(n.options.get("multiple")?n.trigger("unselect",{originalEvent:t,data:i}):n.trigger("close",{})):void n.trigger("select",{originalEvent:t,data:i})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(){var t=e(this).data("data");n.getHighlightedResults().removeClass("select2-results__option--highlighted"),n.trigger("results:focus",{data:t,element:e(this)})})},n.prototype.getHighlightedResults=function(){var e=this.$results.find(".select2-results__option--highlighted");return e},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]"),n=t.index(e),r=this.$results.offset().top,i=e.offset().top,o=this.$results.scrollTop()+(i-r),s=i-r;o-=2*e.outerHeight(!1),2>=n?this.$results.scrollTop(0):(s>this.$results.outerHeight()||0>s)&&this.$results.scrollTop(o)}},n.prototype.template=function(t,n){var r=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),o=r(t,n);null==o?n.style.display="none":"string"==typeof o?n.innerHTML=i(o):e(n).append(o)},n}),t.define("select2/keys",[],function(){var e={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return e}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,n){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return t.Extend(r,t.Observable),r.prototype.render=function(){var t=e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),t.attr("title",this.$element.attr("title")),t.attr("tabindex",this._tabindex),this.$selection=t,t},r.prototype.bind=function(e){var t=this,r=(e.id+"-container",e.id+"-results");this.container=e,this.$selection.on("focus",function(e){t.trigger("focus",e)}),this.$selection.on("blur",function(e){t._handleBlur(e)}),this.$selection.on("keydown",function(e){t.trigger("keypress",e),e.which===n.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){t.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){t.update(e.data)}),e.on("open",function(){t.$selection.attr("aria-expanded","true"),t.$selection.attr("aria-owns",r),t._attachCloseHandler(e)}),e.on("close",function(){t.$selection.attr("aria-expanded","false"),t.$selection.removeAttr("aria-activedescendant"),t.$selection.removeAttr("aria-owns"),t.$selection.focus(),t._detachCloseHandler(e)}),e.on("enable",function(){t.$selection.attr("tabindex",t._tabindex)}),e.on("disable",function(){t.$selection.attr("tabindex","-1")})},r.prototype._handleBlur=function(t){var n=this;window.setTimeout(function(){document.activeElement==n.$selection[0]||e.contains(n.$selection[0],document.activeElement)||n.trigger("blur",t)},1)},r.prototype._attachCloseHandler=function(t){e(document.body).on("mousedown.select2."+t.id,function(t){var n=e(t.target),r=n.closest(".select2"),i=e(".select2.select2-container--open");i.each(function(){var t=e(this);if(this!=r[0]){var n=t.data("element");n.select2("close")}})})},r.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id)},r.prototype.position=function(e,t){var n=t.find(".selection");n.append(e)},r.prototype.destroy=function(){this._detachCloseHandler(this.container)},r.prototype.update=function(){throw new Error("The `update` method must be defined in child classes.")},r}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(e){var t=this;r.__super__.bind.apply(this,arguments);var n=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",n),this.$selection.attr("aria-labelledby",n),this.$selection.on("mousedown",function(e){1===e.which&&t.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(){}),this.$selection.on("blur",function(){}),e.on("selection:update",function(e){t.update(e.data)})},r.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},r.prototype.display=function(e,t){var n=this.options.get("templateSelection"),r=this.options.get("escapeMarkup");return r(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0===e.length)return void this.clear();var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r),n.prop("title",t.title||t.text)},r}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,n){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},r.prototype.bind=function(){var t=this;r.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){t.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(n){if(!t.options.get("disabled")){var r=e(this),i=r.parent(),o=i.data("data");t.trigger("unselect",{originalEvent:n,data:o})}})},r.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},r.prototype.display=function(e,t){var n=this.options.get("templateSelection"),r=this.options.get("escapeMarkup");return r(n(e,t))},r.prototype.selectionContainer=function(){var t=e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return t},r.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],r=0;r<e.length;r++){var i=e[r],o=this.selectionContainer(),s=this.display(i,o);o.append(s),o.prop("title",i.title||i.text),o.data("data",i),t.push(o)}var a=this.$selection.find(".select2-selection__rendered");n.appendMany(a,t)}},r}),t.define("select2/selection/placeholder",["../utils"],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id,r=t.length>1;if(r||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},e}),t.define("select2/selection/allowClear",["jquery","../keys"],function(e,t){function n(){}return n.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},n.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();for(var r=n.data("data"),i=0;i<r.length;i++){var o={data:r[i]};if(this.trigger("unselect",o),o.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},n.prototype._handleKeyboardClear=function(e,n,r){r.isOpen()||(n.which==t.DELETE||n.which==t.BACKSPACE)&&this._handleClear(n)},n.prototype.update=function(t,n){if(t.call(this,n),!(this.$selection.find(".select2-selection__placeholder").length>0||0===n.length)){var r=e('<span class="select2-selection__clear">&times;</span>');r.data("data",n),this.$selection.find(".select2-selection__rendered").prepend(r)}},n}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){function r(e,t,n){e.call(this,t,n)}return r.prototype.render=function(t){var n=e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=n,this.$search=n.find("input");var r=t.call(this);return this._transferTabIndex(),r},r.prototype.bind=function(e,t,r){var i=this;e.call(this,t,r),t.on("open",function(){i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(){i.$search.trigger("focus")}),t.on("results:focus",function(e){i.$search.attr("aria-activedescendant",e.id)}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented();var t=e.which;if(t===n.BACKSPACE&&""===i.$search.val()){var r=i.$searchContainer.prev(".select2-selection__choice");if(r.length>0){var o=r.data("data");i.searchRemoveChoice(o),e.preventDefault()}}});var o=document.documentMode,s=o&&11>=o;this.$selection.on("input.searchcheck",".select2-search--inline",function(){return s?void i.$selection.off("input.search input.searchcheck"):void i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)return void i.$selection.off("input.search input.searchcheck");var t=e.which;t!=n.SHIFT&&t!=n.CTRL&&t!=n.ALT&&t!=n.TAB&&i.handleSearch(e)})},r.prototype._transferTabIndex=function(){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},r.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},r.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.focus()},r.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},r.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},r.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";if(""!==this.$search.attr("placeholder"))e=this.$selection.find(".select2-selection__rendered").innerWidth();else{var t=this.$search.val().length+1;e=.75*t+"em"}this.$search.css("width",e)},r}),t.define("select2/selection/eventRelay",["jquery"],function(e){function t(){}return t.prototype.bind=function(t,n,r){var i=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting"],s=["opening","closing","selecting","unselecting"];t.call(this,n,r),n.on("*",function(t,n){if(-1!==e.inArray(t,o)){n=n||{};var r=e.Event("select2:"+t,{params:n});i.$element.trigger(r),-1!==e.inArray(t,s)&&(n.prevented=r.isDefaultPrevented())}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){function n(e){this.dict=e||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var r=t(e);n._cache[e]=r}return new n(n._cache[e])},n}),t.define("select2/diacritics",[],function(){var e={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return e}),t.define("select2/data/base",["../utils"],function(e){function t(){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(){throw new Error("The `current` method must be defined in child classes.")},t.prototype.query=function(){throw new Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(){},t.prototype.destroy=function(){},t.prototype.generateResultId=function(t,n){var r=t.id+"-result-";return r+=e.generateChars(4),r+=null!=n.id?"-"+n.id.toString():"-"+e.generateChars(4)},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,n){function r(e,t){this.$element=e,this.options=t,r.__super__.constructor.call(this)}return t.Extend(r,e),r.prototype.current=function(e){var t=[],r=this;this.$element.find(":selected").each(function(){var e=n(this),i=r.item(e);t.push(i)}),e(t)},r.prototype.select=function(e){var t=this;if(e.selected=!0,n(e.element).is("option"))return e.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(r){var i=[];e=[e],e.push.apply(e,r);for(var o=0;o<e.length;o++){var s=e[o].id;-1===n.inArray(s,i)&&i.push(s)}t.$element.val(i),t.$element.trigger("change")});else{var r=e.id;this.$element.val(r),this.$element.trigger("change")}},r.prototype.unselect=function(e){var t=this;return this.$element.prop("multiple")?(e.selected=!1,
n(e.element).is("option")?(e.element.selected=!1,void this.$element.trigger("change")):void this.current(function(r){for(var i=[],o=0;o<r.length;o++){var s=r[o].id;s!==e.id&&-1===n.inArray(s,i)&&i.push(s)}t.$element.val(i),t.$element.trigger("change")})):void 0},r.prototype.bind=function(e){var t=this;this.container=e,e.on("select",function(e){t.select(e.data)}),e.on("unselect",function(e){t.unselect(e.data)})},r.prototype.destroy=function(){this.$element.find("*").each(function(){n.removeData(this,"data")})},r.prototype.query=function(e,t){var r=[],i=this,o=this.$element.children();o.each(function(){var t=n(this);if(t.is("option")||t.is("optgroup")){var o=i.item(t),s=i.matches(e,o);null!==s&&r.push(s)}}),t({results:r})},r.prototype.addOptions=function(e){t.appendMany(this.$element,e)},r.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup"),t.label=e.text):(t=document.createElement("option"),void 0!==t.textContent?t.textContent=e.text:t.innerText=e.text),e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var r=n(t),i=this._normalizeItem(e);return i.element=t,n.data(t,"data",i),r},r.prototype.item=function(e){var t={};if(t=n.data(e[0],"data"),null!=t)return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var r=e.children("option"),i=[],o=0;o<r.length;o++){var s=n(r[o]),a=this.item(s);i.push(a)}t.children=i}return t=this._normalizeItem(t),t.element=e[0],n.data(e[0],"data",t),t},r.prototype._normalizeItem=function(e){n.isPlainObject(e)||(e={id:e,text:e}),e=n.extend({},{text:""},e);var t={selected:!1,disabled:!1};return null!=e.id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),n.extend({},t,e)},r.prototype.matches=function(e,t){var n=this.options.get("matcher");return n(e,t)},r}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,n){function r(e,t){var n=t.get("data")||[];r.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return t.Extend(r,e),r.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){return n.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),r.__super__.select.call(this,e)},r.prototype.convertToOptions=function(e){function r(e){return function(){return n(this).val()==e.id}}for(var i=this,o=this.$element.find("option"),s=o.map(function(){return i.item(n(this)).id}).get(),a=[],l=0;l<e.length;l++){var c=this._normalizeItem(e[l]);if(n.inArray(c.id,s)>=0){var u=o.filter(r(c)),d=this.item(u),p=n.extend(!0,{},d,c),h=this.option(p);u.replaceWith(h)}else{var f=this.option(c);if(c.children){var g=this.convertToOptions(c.children);t.appendMany(f,g)}a.push(f)}}return a},r}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,n){function r(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),r.__super__.constructor.call(this,e,t)}return t.Extend(r,e),r.prototype._applyDefaults=function(e){var t={data:function(e){return n.extend({},e,{q:e.term})},transport:function(e,t,r){var i=n.ajax(e);return i.then(t),i.fail(r),i}};return n.extend({},t,e,!0)},r.prototype.processResults=function(e){return e},r.prototype.query=function(e,t){function r(){var r=o.transport(o,function(r){var o=i.processResults(r,e);i.options.get("debug")&&window.console&&console.error&&(o&&o.results&&n.isArray(o.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),t(o)},function(){});i._request=r}var i=this;null!=this._request&&(n.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var o=n.extend({type:"GET"},this.ajaxOptions);"function"==typeof o.url&&(o.url=o.url.call(this.$element,e)),"function"==typeof o.data&&(o.data=o.data.call(this.$element,e)),this.ajaxOptions.delay&&""!==e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(r,this.ajaxOptions.delay)):r()},r}),t.define("select2/data/tags",["jquery"],function(e){function t(t,n,r){var i=r.get("tags"),o=r.get("createTag");if(void 0!==o&&(this.createTag=o),t.call(this,n,r),e.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return t.prototype.query=function(e,t,n){function r(e,o){for(var s=e.results,a=0;a<s.length;a++){var l=s[a],c=null!=l.children&&!r({results:l.children},!0),u=l.text===t.term;if(u||c)return o?!1:(e.data=s,void n(e))}if(o)return!0;var d=i.createTag(t);if(null!=d){var p=i.option(d);p.attr("data-select2-tag",!0),i.addOptions([p]),i.insertTag(s,d)}e.results=s,n(e)}var i=this;return this._removeOldTags(),null==t.term||null!=t.page?void e.call(this,t,n):void e.call(this,t,r)},t.prototype.createTag=function(t,n){var r=e.trim(n.term);return""===r?null:{id:r,text:r}},t.prototype.insertTag=function(e,t,n){t.unshift(n)},t.prototype._removeOldTags=function(){var t=(this._lastTag,this.$element.find("option[data-select2-tag]"));t.each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){function t(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},t.prototype.query=function(e,t,n){function r(e){i.trigger("select",{data:e})}var i=this;t.term=t.term||"";var o=this.tokenizer(t,this.options,r);o.term!==t.term&&(this.$search.length&&(this.$search.val(o.term),this.$search.focus()),t.term=o.term),e.call(this,t,n)},t.prototype.tokenizer=function(t,n,r,i){for(var o=r.get("tokenSeparators")||[],s=n.term,a=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};a<s.length;){var c=s[a];if(-1!==e.inArray(c,o)){var u=s.substr(0,a),d=e.extend({},n,{term:u}),p=l(d);null!=p?(i(p),s=s.substr(a+1)||"",a=0):a++}else a++}return{term:s}},t}),t.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){return t.term=t.term||"",t.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):void e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){return t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):void e.call(this,t,n)},e}),t.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){var r=this;this.current(function(i){var o=null!=i?i.length:0;return r.maximumSelectionLength>0&&o>=r.maximumSelectionLength?void r.trigger("results:message",{message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):void e.call(r,t,n)})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.bind=function(){},n.prototype.position=function(){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),t.define("select2/dropdown/search",["jquery","../utils"],function(e){function t(){}return t.prototype.render=function(t){var n=t.call(this),r=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=r,this.$search=r.find("input"),n.prepend(r),n},t.prototype.bind=function(t,n,r){var i=this;t.call(this,n,r),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(){e(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),n.on("open",function(){i.$search.attr("tabindex",0),i.$search.focus(),window.setTimeout(function(){i.$search.focus()},0)}),n.on("close",function(){i.$search.attr("tabindex",-1),i.$search.val("")}),n.on("results:all",function(e){if(null==e.query.term||""===e.query.term){var t=i.showSearch(e);t?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide")}})},t.prototype.handleSearch=function(){if(!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},t.prototype.showSearch=function(){return!0},t}),t.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;r>=0;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){function t(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&this.$results.append(this.$loadingMore)},t.prototype.bind=function(t,n,r){var i=this;t.call(this,n,r),n.on("query",function(e){i.lastParams=e,i.loading=!0}),n.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",function(){var t=e.contains(document.documentElement,i.$loadingMore[0]);if(!i.loading&&t){var n=i.$results.offset().top+i.$results.outerHeight(!1),r=i.$loadingMore.offset().top+i.$loadingMore.outerHeight(!1);n+50>=r&&i.loadMore()}})},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");return t.html(n(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){function n(t,n,r){this.$dropdownParent=r.get("dropdownParent")||e(document.body),t.call(this,n,r)}return n.prototype.bind=function(e,t,n){var r=this,i=!1;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),i||(i=!0,t.on("results:all",function(){r._positionDropdown(),r._resizeDropdown()}),t.on("results:append",function(){r._positionDropdown(),r._resizeDropdown()}))}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},n.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},n.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(t){var n=e("<span></span>"),r=t.call(this);return n.append(r),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(){this.$dropdownContainer.detach()},n.prototype._attachPositioningHandler=function(n,r){var i=this,o="scroll.select2."+r.id,s="resize.select2."+r.id,a="orientationchange.select2."+r.id,l=this.$container.parents().filter(t.hasScroll);l.each(function(){e(this).data("select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})}),l.on(o,function(){var t=e(this).data("select2-scroll-position");e(this).scrollTop(t.y)}),e(window).on(o+" "+s+" "+a,function(){i._positionDropdown(),i._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n,r){var i="scroll.select2."+r.id,o="resize.select2."+r.id,s="orientationchange.select2."+r.id,a=this.$container.parents().filter(t.hasScroll);a.off(i),e(window).off(i+" "+o+" "+s)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown.hasClass("select2-dropdown--above"),r=this.$dropdown.hasClass("select2-dropdown--below"),i=null,o=(this.$container.position(),this.$container.offset());o.bottom=o.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)};s.top=o.top,s.bottom=o.top+s.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<o.top-a.height,u=l.bottom>o.bottom+a.height,d={left:o.left,top:s.bottom};if("static"!==this.$dropdownParent[0].style.position){var p=this.$dropdownParent.offset();d.top-=p.top,d.left-=p.left}n||r||(i="below"),u||!c||n?!c&&u&&n&&(i="below"):i="above",("above"==i||n&&"below"!==i)&&(d.top=s.top-a.height),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}function t(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return t.prototype.showSearch=function(t,n){return e(n.data.results)<this.minimumResultsForSearch?!1:t.call(this,n)},t}),t.define("select2/dropdown/selectOnClose",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(){r._handleSelectOnClose()})},e.prototype._handleSelectOnClose=function(){var e=this.getHighlightedResults();if(!(e.length<1)){var t=e.data("data");null!=t.element&&t.element.selected||null==t.element&&t.selected||this.trigger("select",{data:t})}},e}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&n.ctrlKey||this.trigger("close",{})},e}),t.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Please enter "+t+" or more characters";return n},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(e,t,n,r,i,o,s,a,l,c,u,d,p,h,f,g,m,v,y,_,$,w,b,x,A,C,E,O,S){function T(){this.reset()}T.prototype.apply=function(d){if(d=e.extend({},this.defaults,d),null==d.dataAdapter){if(null!=d.ajax?d.dataAdapter=f:null!=d.data?d.dataAdapter=h:d.dataAdapter=p,d.minimumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,v)),d.maximumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,y)),d.maximumSelectionLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,_)),d.tags&&(d.dataAdapter=c.Decorate(d.dataAdapter,g)),(null!=d.tokenSeparators||null!=d.tokenizer)&&(d.dataAdapter=c.Decorate(d.dataAdapter,m)),null!=d.query){var S=t(d.amdBase+"compat/query");d.dataAdapter=c.Decorate(d.dataAdapter,S)}if(null!=d.initSelection){var T=t(d.amdBase+"compat/initSelection");d.dataAdapter=c.Decorate(d.dataAdapter,T)}}if(null==d.resultsAdapter&&(d.resultsAdapter=n,null!=d.ajax&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,x)),null!=d.placeholder&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,b)),d.selectOnClose&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,E))),null==d.dropdownAdapter){if(d.multiple)d.dropdownAdapter=$;else{var D=c.Decorate($,w);d.dropdownAdapter=D}if(0!==d.minimumResultsForSearch&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,C)),d.closeOnSelect&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,O)),null!=d.dropdownCssClass||null!=d.dropdownCss||null!=d.adaptDropdownCssClass){var q=t(d.amdBase+"compat/dropdownCss");d.dropdownAdapter=c.Decorate(d.dropdownAdapter,q)}d.dropdownAdapter=c.Decorate(d.dropdownAdapter,A)}if(null==d.selectionAdapter){if(d.multiple?d.selectionAdapter=i:d.selectionAdapter=r,null!=d.placeholder&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,o)),d.allowClear&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,s)),d.multiple&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,a)),null!=d.containerCssClass||null!=d.containerCss||null!=d.adaptContainerCssClass){var j=t(d.amdBase+"compat/containerCss");d.selectionAdapter=c.Decorate(d.selectionAdapter,j)}d.selectionAdapter=c.Decorate(d.selectionAdapter,l)}if("string"==typeof d.language)if(d.language.indexOf("-")>0){var L=d.language.split("-"),P=L[0];d.language=[d.language,P]}else d.language=[d.language];if(e.isArray(d.language)){var k=new u;d.language.push("en");for(var I=d.language,R=0;R<I.length;R++){var U=I[R],M={};try{M=u.loadPath(U)}catch(H){try{U=this.defaults.amdLanguageBase+U,M=u.loadPath(U)}catch(z){d.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+U+'" could not be automatically loaded. A fallback will be used instead.');continue}}k.extend(M)}d.translations=k}else{var N=u.loadPath(this.defaults.amdLanguageBase+"en"),B=new u(d.language);B.extend(N),d.translations=B}return d},T.prototype.reset=function(){function t(e){function t(e){return d[e]||e}return e.replace(/[^\u0000-\u007E]/g,t)}function n(r,i){if(""===e.trim(r.term))return i;if(i.children&&i.children.length>0){for(var o=e.extend(!0,{},i),s=i.children.length-1;s>=0;s--){var a=i.children[s],l=n(r,a);null==l&&o.children.splice(s,1)}return o.children.length>0?o:n(r,o)}var c=t(i.text).toUpperCase(),u=t(r.term).toUpperCase();return c.indexOf(u)>-1?i:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:S,matcher:n,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},T.prototype.set=function(t,n){var r=e.camelCase(t),i={};i[r]=n;var o=c._convertData(i);e.extend(this.defaults,o)};var D=new T;return D}),t.define("select2/options",["require","jquery","./defaults","./utils"],function(e,t,n,r){function i(t,i){if(this.options=t,null!=i&&this.fromElement(i),this.options=n.apply(this.options),i&&i.is("input")){var o=e(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=r.Decorate(this.options.dataAdapter,o)}}return i.prototype.fromElement=function(e){var n=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),e.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),e.data("data",e.data("select2Tags")),e.data("tags",!0)),e.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",e.data("ajaxUrl")),e.data("ajax--url",e.data("ajaxUrl")));var i={};i=t.fn.jquery&&"1."==t.fn.jquery.substr(0,2)&&e[0].dataset?t.extend(!0,{},e[0].dataset,e.data()):e.data();var o=t.extend(!0,{},i);o=r._convertData(o);for(var s in o)t.inArray(s,n)>-1||(t.isPlainObject(this.options[s])?t.extend(this.options[s],o[s]):this.options[s]=o[s]);return this},i.prototype.get=function(e){return this.options[e]},i.prototype.set=function(e,t){this.options[e]=t},i}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,n,r){var i=function(e,n){null!=e.data("select2")&&e.data("select2").destroy(),this.$element=e,this.id=this._generateId(e),n=n||{},this.options=new t(n,e),i.__super__.constructor.call(this);var r=e.attr("tabindex")||0;e.data("old-tabindex",r),e.attr("tabindex","-1");var o=this.options.get("dataAdapter");this.dataAdapter=new o(e,this.options);var s=this.render();this._placeContainer(s);var a=this.options.get("selectionAdapter");this.selection=new a(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,s);var l=this.options.get("dropdownAdapter");this.dropdown=new l(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,s);var c=this.options.get("resultsAdapter");this.results=new c(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var u=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){u.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),e.data("select2",this)};return n.Extend(i,n.Observable),i.prototype._generateId=function(e){var t="";return t=null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+n.generateChars(2):n.generateChars(4),t="select2-"+t},i.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},i.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return 0>=i?"auto":i+"px"}if("style"==t){var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;l>a;a+=1){var c=s[a].replace(/\s/g,""),u=c.match(n);if(null!==u&&u.length>=1)return u[1]}return null}return t},i.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},i.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this._sync=n.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=r?(this._observer=new r(function(n){e.each(n,t._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",t._sync,!1)},i.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,n){e.trigger(t,n)})},i.prototype._registerSelectionEvents=function(){var t=this,n=["toggle","focus"];this.selection.on("toggle",function(){t.toggleDropdown()}),this.selection.on("focus",function(e){t.focus(e)}),this.selection.on("*",function(r,i){-1===e.inArray(r,n)&&t.trigger(r,i)})},i.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,n){e.trigger(t,n)})},i.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",function(t,n){e.trigger(t,n)})},i.prototype._registerEvents=function(){var e=this;this.on("open",function(){e.$container.addClass("select2-container--open")}),this.on("close",function(){e.$container.removeClass("select2-container--open")}),this.on("enable",function(){e.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){e.$container.addClass("select2-container--disabled")}),this.on("blur",function(){e.$container.removeClass("select2-container--focus")}),this.on("query",function(t){e.isOpen()||e.trigger("open",{}),this.dataAdapter.query(t,function(n){e.trigger("results:all",{data:n,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(n){e.trigger("results:append",{data:n,query:t})})}),this.on("keypress",function(t){var n=t.which;e.isOpen()?n===r.ESC||n===r.TAB||n===r.UP&&t.altKey?(e.close(),t.preventDefault()):n===r.ENTER?(e.trigger("results:select",{}),t.preventDefault()):n===r.SPACE&&t.ctrlKey?(e.trigger("results:toggle",{}),t.preventDefault()):n===r.UP?(e.trigger("results:previous",{}),t.preventDefault()):n===r.DOWN&&(e.trigger("results:next",{}),t.preventDefault()):(n===r.ENTER||n===r.SPACE||n===r.DOWN&&t.altKey)&&(e.open(),t.preventDefault())})},i.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},i.prototype.trigger=function(e,t){var n=i.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===t&&(t={}),e in r){var o=r[e],s={prevented:!1,name:e,args:t};if(n.call(this,o,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},i.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},i.prototype.open=function(){this.isOpen()||this.trigger("query",{})},i.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},i.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},i.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},i.prototype.focus=function(){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},i.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==e||0===e.length)&&(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},i.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var e=[];return this.dataAdapter.current(function(t){e=t}),e},i.prototype.val=function(t){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==t||0===t.length)return this.$element.val();var n=t[0];e.isArray(n)&&(n=e.map(n,function(e){return e.toString()})),this.$element.val(n).trigger("change")},i.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},i.prototype.render=function(){var t=e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container.addClass("select2-container--"+this.options.get("theme")),t.data("element",this.$element),t},i}),t.define("jquery-mousewheel",["jquery"],function(e){return e}),t.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(e,t,n,r){if(null==e.fn.select2){var i=["open","close","destroy"];e.fn.select2=function(t){if(t=t||{},"object"==typeof t)return this.each(function(){var r=e.extend(!0,{},t);new n(e(this),r)}),this;if("string"==typeof t){var r;return this.each(function(){var n=e(this).data("select2");null==n&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2.");var i=Array.prototype.slice.call(arguments,1);r=n[t].apply(n,i)}),e.inArray(t,i)>-1?this:r}throw new Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=r),n}),{define:t.define,require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n});
var MG_Flipbook=function(){var Self=this,timer,o={},data={},flipTimer;Self.init=function(options){Self.params=options;Self.addEvents()},Self.addEvent=function(element,type,handler){var handlers;if(element.addEventListener){element.addEventListener(type,handler,false)}else{if(!handler.$$guid){handler.$$guid=Self.addEvent.guid++}if(!element.events){element.events={}}handlers=element.events[type];if(!handlers){handlers=element.events[type]={};if(element["on"+type]){handlers[0]=element["on"+type]}}handlers[handler.$$guid]=handler;element["on"+type]=Self.handleEvent}},Self.addEvent.guid=1,Self.removeEvent=function(element,type,handler){if(element.removeEventListener){element.removeEventListener(type,handler,false)}else{if(element.events&&element.events[type]){delete element.events[type][handler.$$guid]}}},Self.handleEvent=function(event){var returnValue=true;event=event||Self.fixEvent(((this.ownerDocument||this.document||this).parentWindow||window).event);var handlers=this.events[event.type];for(var i in handlers){this.$$handleEvent=handlers[i];if(this.$$handleEvent(event)===false){returnValue=false}}return returnValue},Self.fixEvent=function(event){event.preventDefault=Self.fixEvent.preventDefault;event.stopPropagation=Self.fixEvent.stopPropagation;return event},Self.fixEvent.preventDefault=function(){this.returnValue=false},Self.fixEvent.stopPropagation=function(){this.cancelBubble=true},Self.addEvents=function(){Self.addEvent(document.body,"mousemove",Self.initFlip);Self.addEvent(document,"mouseout",function(e){var elem;e=e?e:window.event;var from=e.relatedTarget||e.toElement;if(!from||from.nodeName=="HTML"){Self.endFlip()}})},Self.hasClass=function(elem,className){return elem.className&&new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className)},Self.closestElm=function(elem,selector,container){var container=container||document.body,firstChar=selector.charAt(0);while(elem&&elem!==container){if(firstChar==="."&&Self.hasClass(elem,selector.substr(1))){return elem}if(firstChar==="#"&&elem.id===selector.substr(1)){return elem}if(firstChar==="["&&elem.getAttribute(selector.substr(1,selector.indexOf("]")-1))){return elem}elem=elem.parentNode}return false},Self.dataSet=function(string){var data;try{data=eval("("+string+")")}catch(e){data=false}return data},Self.data=function(elem,key,val){elem.data=elem.data||{};switch(arguments.length){case 3:elem.data[key]=val;break;case 2:return elem.data[key];break;default:return elem.data}},Self.callbackData=function(){data={index:o.index,setLength:o.setLength,currentImage:o.currentImage,imgWrapper:o.imgWrapper,currentUrl:o.currentUrl,active:o.active,status:o.status};return data},Self.initFlip=function(e){var e=e||window.event,targetElement=e.target||e.srcElement;clearTimeout(flipTimer);flipTimer=window.setTimeout(function(){Self.startFlip(targetElement)},0)},Self.startFlip=function(targetElement){var targetElement=targetElement,i=0,len=Self.params.thumbnailsSets.length,digitsPreffix,digitsSuffix,firstThumbnail,setLength,incrementer,index,digits,meta,elem,img;if(o.active&&!Self.closestElm(targetElement,"[data-flipbook_active]")){Self.endFlip()}for(;i<len;i++){if(Self.closestElm(targetElement,Self.params.thumbnailsSets[i].thumbnailsContainer)&&((!Self.params.thumbnailsSets[i].extendHoverClassName&&Self.hasClass(targetElement,Self.params.thumbnailsSets[i].thumbnailsClassName))||(Self.params.thumbnailsSets[i].extendHoverClassName&&Self.closestElm(targetElement,"."+Self.params.thumbnailsSets[i].extendHoverClassName)))){elem=targetElement;img=targetElement;if(Self.params.thumbnailsSets[i].excludeContainer&&Self.closestElm(elem,Self.params.thumbnailsSets[i].excludeContainer)){return false}if(Self.params.thumbnailsSets[i].extendHoverClassName){elem=Self.closestElm(elem,"."+Self.params.thumbnailsSets[i].extendHoverClassName);img=elem.querySelector("."+Self.params.thumbnailsSets[i].thumbnailsClassName)}if(o.active){if(elem.getAttribute("data-flipbook_active")){return false}else{Self.endFlip()}}if(!Self.params.thumbnailsSets[i].cover){digitsPreffix=img.src.substring(0,img.src.lastIndexOf(Self.params.thumbnailsSets[i].digitsPreffix)+1);digits=img.src.replace(digitsPreffix,"");digitsSuffix=Self.params.thumbnailsSets[i].digitsSuffix;digits=parseInt(digits.replace(digitsSuffix,""),10);firstThumbnail=Self.params.thumbnailsSets[i].firstThumbnail;setLength=Self.params.thumbnailsSets[i].setLength;incrementer=Self.params.thumbnailsSets[i].incrementer;index=(digits-firstThumbnail)/incrementer}else{meta=Self.dataSet(img.getAttribute("data-flipbook"));setLength=meta.setLength;firstThumbnail=meta.firstThumbnail;digits=parseInt(meta.firstThumbnail,10)-meta.incrementer;digitsPreffix=meta.digitsPreffix;digitsSuffix=meta.digitsSuffix;incrementer=meta.incrementer;index=-1}o={index:index,setLength:setLength,currentUrl:img.src,firstThumbnail:firstThumbnail,digits:digits,digitsPreffix:digitsPreffix,digitsSuffix:digitsSuffix,incrementer:incrementer,currentImage:img,imgWrapper:false,interval:Self.params.thumbnailsSets[i].interval,active:true,callback:Self.params.thumbnailsSets[i].callback,init:Self.params.thumbnailsSets[i].init,status:"started"};elem.setAttribute("data-flipbook_active","1");if(Self.params.thumbnailsSets[i].extendHoverClassName){o.imgWrapper=elem}if(o.init&&!elem.init){Self.callbackData();o.init(data)}if(!elem.init){Self.data(elem,"oldThumbUrl",img.src);Self.data(elem,"oldIndex",index);elem.init=true}if(o.callback){Self.callbackData();o.callback(data)}if(Self.params.thumbnailsSets[i].resetIndex){o.digits=(setLength-1)*o.incrementer+parseInt(o.firstThumbnail,10);o.index=(setLength-1);Self.callbackData()}window.clearTimeout(timer);timer=window.setTimeout(Self.preload,0);return false}}},Self.endFlip=function(){var activeElm;window.clearTimeout(timer);if(o.active){activeElm=document.querySelector("[data-flipbook_active]");if(activeElm){activeElm.removeAttribute("data-flipbook_active");if(activeElm.nodeName==="IMG"){activeElm.src=Self.data(activeElm,"oldThumbUrl")}else{activeElm.querySelector("img").src=Self.data(activeElm,"oldThumbUrl")}}o.active=false;o.status="ended";o.index=Self.data(activeElm,"oldIndex");if(o.callback){Self.callbackData();o.callback(data)}}},Self.preload=function(){var tempImage=new Image();if(o.digits<(o.setLength-1)*o.incrementer+parseInt(o.firstThumbnail,10)){o.digits=o.digits+o.incrementer;o.index++}else{o.digits=parseInt(o.firstThumbnail,10);o.index=0}if(o.firstThumbnail.length>String(o.digits).length){o.currentUrl=o.digitsPreffix+o.firstThumbnail.substring(0,o.firstThumbnail.length-String(o.digits).length)+o.digits+o.digitsSuffix}else{o.currentUrl=o.digitsPreffix+o.digits+o.digitsSuffix}tempImage.onerror=function(){Self.endFlip()};tempImage.onload=function(){if(o.active){if(o.status!=="running"){timer=window.setTimeout(Self.flipImage,0)}else{timer=window.setTimeout(Self.flipImage,o.interval)}}};tempImage.src=o.currentUrl},Self.flipImage=function(index){window.clearTimeout(timer);o.currentImage.src=o.currentUrl;o.status="running";if(o.callback){Self.callbackData();o.callback(data)}if(typeof index!=="undefined"){o.digits=index*o.incrementer+parseInt(o.firstThumbnail,10);o.index=index;Self.callbackData()}Self.preload()},Self.jumpTo=function(index){o.digits=index*o.incrementer+parseInt(o.firstThumbnail,10);o.index=index;if(o.firstThumbnail.length>String(o.digits).length){o.currentUrl=o.digitsPreffix+o.firstThumbnail.substring(0,o.firstThumbnail.length-String(o.digits).length)+o.digits+o.digitsSuffix}else{o.currentUrl=o.digitsPreffix+o.digits+o.digitsSuffix}o.currentImage.src=o.currentUrl;if(o.callback){Self.callbackData();o.callback(data)}},Self.changeIndex=function(index){o.digits=index*o.incrementer+parseInt(o.firstThumbnail,10);o.index=index;Self.callbackData()},Self.pauseFlip=function(){window.clearTimeout(timer);o.status="paused"}};
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7."),b.isIE8=-1!==c.indexOf("MSIE 8."),b.isLowIE=b.isIE7||b.isIE8,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(a,c){if(void 0===c||c===!1)return!0;if(e=a.split("_"),e.length>1){var d=b.find(p+"-"+e[0]);if(d.length>0){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(p+"-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery",g=Boolean(a.fn.mfpFastClick);return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s),h=g?"mfpFastClick":"click";e[h](function(){b.prev()}),f[h](function(){b.next()}),b.isIE7&&(x("b",e[0],!1,!0),x("a",e[0],!1,!0),x("b",f[0],!1,!0),x("a",f[0],!1,!0)),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowLeft&&g&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){v.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g,h=a(this);if(c){var i,j,k,l,m,n;h.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,v.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0],(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)&&(l=!0,d())}).on("touchend"+f,function(a){d(),l||n>1||(g=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){g=!1},b),e())})})}h.on("click"+f,function(){g||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&v.off("touchmove"+f+" touchend"+f)}}(),A()});
$(document).ready(function() {
  $("#collections").click(function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: base_url + "member-collections.html",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#result').empty().append(data);
        }
      },
      beforeSend: function() {
        $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    });
  });
  $(document).on('change', '#favorite_date', function(e) {
    var date_search = this.value;
    if (date_search == null || date_search == "") {
      $.ajax({
        type: "GET",
        url: base_url + "member-collections.html",
        success: function(data) {
          if (data == 0) {
            $('#myModal').modal('show');
          } else {
            $('#result').empty().append(data);
          }
        },
        beforeSend: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
        },
        complete: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
        }
      });
    } else {
      $.ajax({
        type: "GET",
        url: base_url + "member-collections.html&date=" + date_search + "&keyword=all",
        success: function(data) {
          if (data == 0) {
            $('#myModal').modal('show');
          } else {
            $('#result').empty().append(data);
          }
        },
        beforeSend: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
        },
        complete: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
        }
      });
    }
  })
  $('#keyword_search_favorite').keyup(function() {
    var keywords = $(this).val();
    if (keywords == null || keywords == "") {
      $.ajax({
        type: "GET",
        url: base_url + "member-collections.html",
        success: function(data) {
          if (data == 0) {
            $('#myModal').modal('show');
          } else {
            $('#result').empty().append(data);
          }
        },
        beforeSend: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
        },
        complete: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
        }
      });
    } else {
      $.ajax({
        type: "GET",
        url: base_url + "member-collections.html&date=all&keyword=" + keywords,
        success: function(data) {
          if (data == 0) {
            $('#myModal').modal('show');
          } else {
            $('#result').empty().append(data);
          }
        },
        beforeSend: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
        },
        complete: function() {
          $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
        }
      });
    }
  })
  $(document).on('click', '#page_navigation ul li a', function(e) {
    e.preventDefault();
    var page = $(this).attr('href').split('page=')[1];
    getpage(page);
  });

  function getpage(page) {
    $.ajax({
      url: base_url + "member-collections.html?page=" + page,
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#data').empty().html(data)
        }
      },
      beforeSend: function() {
        $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#result-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  }
  $("#channel").click(function(e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: base_url + "member-subscribe.html",
      success: function(data) {
        $('#subscribe').empty().append(data);
      },
      beforeSend: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      },
      error: function(ajaxContext) {
        $('#myModal').modal('show');
      }
    });
  });
  $(document).on('click', '#member-subscribe ul li a', function(e) {
    e.preventDefault();
    var page = $(this).attr('href').split('page=')[1];
    getpagechannel(page);
  });

  function getpagechannel(page) {
    $.ajax({
      url: base_url + "member-subscribe.html?page=" + page,
      success: function(data) {
        $('#data-channel').empty().html(data)
      },
      beforeSend: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  }
  $("#overview").click(function(e) {
    e.preventDefault();
    $(".member-content h2 a").removeClass("active");
    $(this).addClass('active');
    $.ajax({
      type: "GET",
      url: base_url + "member-overview.html",
      success: function(data) {
        $('#setting').empty().append(data)
      },
      error: function(data) {
        $('#myModal').modal('show');
      }
    });
  });
  $("#changepassword").click(function(e) {
    e.preventDefault();
    $(".member-content h2 a").removeClass("active");
    $(this).addClass('active');
    $.ajax({
      type: "GET",
      url: base_url + "member-change-password.html",
      success: function(data) {
        $('#setting').empty().append(data)
      },
      beforeSend: function() {
        $('#setting-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#setting-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      },
      error: function(data) {
        $('#myModal').modal('show');
      }
    });
  });
  $("#paymenthistory").click(function(e) {
    e.preventDefault();
    $(".member-content h2 a").removeClass("active");
    $(this).addClass('active');
    $.ajax({
      type: "GET",
      url: base_url + "member-payment-history.html",
      success: function(data) {
        $('#setting').empty().append(data)
      },
      error: function(data) {
        $('#myModal').modal('show');
      }
    });
  });
  $(document).on('click', '#messagemember', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "message-member.html",
      success: function(data) {
        $('#resultmessage').empty().append(data)
      },
      beforeSend: function() {
        $('#loadingmessges').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> loading Messges").show();
      },
      complete: function() {
        $('#loadingmessges').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> loading Messges").hide();
      },
      error: function(data) {
        $('#myModal').modal('show');
      }
    });
  });
  $(document).on('click', '#friendmember', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "member-friend.html",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#resultmessage').empty().append(data)
        }
      },
      beforeSend: function() {
        $('#loadingmessges').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> loading Your Friend").show();
      },
      complete: function() {
        $('#loadingmessges').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> loading Your Friend").hide();
      }
    });
  });
  $(document).on('click', '#edit', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "member-edit.html",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#setting').empty().append(data)
        }
      },
      beforeSend: function() {
        $('#setting-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#setting-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    });
  });
  $(document).on('click', '#change-block', function(e) {
    e.preventDefault();
    var memberfriend = $(this).attr('friend');
    $.ajax({
      url: base_url + "member-friend-update-status/" + memberfriend + ".html",
      success: function(data) {
        $('#friend-result').load(base_url + 'member-friend.html');
      }
    });
  });
  $(document).on('click', '#send-reply', function(e) {
    e.preventDefault();
    var friendmember = $(this).attr('friend');
    var messageid = $(this).attr('message');
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyy = today.getFullYear();
    var hh = today.getHours();
    var ii = today.getMinutes();
    var ss = today.getSeconds();
    $.ajax({
      url: base_url + "send-reply.html",
      type: "POST",
      data: {
        'friendmember': friendmember,
        'reply_text': $('input[name=reply-text]').val(),
        '_token': $('input[name=_token]').val(),
        'messageid': messageid
      },
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#box-message').append('<div class="message-content">You: ' + $('input[name=reply-text]').val() + '<span class="pull-right"><small>' + yyy + '/' + mm + '/' + dd + ' ' + hh + ':' + ii + ':' + ss + '</small></span></div> ');
          $('input[name=reply-text]').val("");
        }
      }
    });
  });
  $(document).on('click', '#add-friend', function(e) {
    e.preventDefault();
    $('#addmodal').modal('show');
  });
  $(document).on('click', '#un-friend-modal', function(e) {
    e.preventDefault();
    $('#unmodal').modal('show');
  });
  $(document).on('click', '#send-message-to-member', function(e) {
    var memberid = $(this).attr('member-id')
    e.preventDefault();
    $.ajax({
      url: base_url + "send-message-to-member.html&member=" + memberid,
      type: "GET",
      success: function(data) {
        $('#member-view-result-profile').empty().append(data);
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  });
  $(document).on('click', '#send-to-member', function(e) {
    var sendto = $(this).attr("friendid");
    console.log($('input[name=txt_message]').val());
    e.preventDefault();
    $.ajax({
      url: base_url + "send-message-to-member.html&member=" + sendto,
      type: "POST",
      data: {
        'message': $('input[name=txt_message]').val(),
        '_token': $('input[name=_token]').val()
      },
      success: function(data) {
        if (data == 0) {
          $('#msg').html("WARNING !: Please input some text for message")
        }
        if (data == 1) {
          $('#msg').html('<div class="alert alert-success"><span  class="glyphicon glyphicon-remove"></span><strong> Send message successfully !</strong></div>').fadeIn();
          $('input[name=txt_message]').val("");
          $('input[name=txt_message]').focus();
        }
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#view-member-video', function() {
    var member = $(this).attr('member-id');
    $.ajax({
      url: base_url + "loadingvideo&member=" + member,
      success: function(data) {
        $('#member-view-result-profile').empty().append(data);
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#page-navigation-member-profile ul li a', function(e) {
    e.preventDefault();
    var memberid = $('#memberIdProfile').attr('member-id');
    var page = $(this).attr('href').split('page=')[1];
    getpage_video_profile(memberid, page);
  });

  function getpage_video_profile(memberid, page) {
    $.ajax({
      url: base_url + "loadingvideo&member=" + memberid + "?page=" + page,
      success: function(data) {
        $('#member-view-result-profile').empty().html(data)
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  }
  $(document).on('click', '#view-member-subscribe', function() {
    var member = $(this).attr('member-id');
    $.ajax({
      url: base_url + "loadingsubscribe&member=" + member,
      success: function(data) {
        $('#member-view-result-profile').empty().append(data);
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#member-subscribe-page-navigation ul li a', function(e) {
    e.preventDefault();
    var memberid = $(this).attr('member-id');
    var page = $(this).attr('href').split('page=')[1];
    getpage_subscribe_profile(memberid, page);
  });

  function getpage_subscribe_profile(memberid, page) {
    $.ajax({
      url: base_url + "loadingsubscribe&member=" + memberid + "?page=" + page,
      success: function(data) {
        $('#member-view-result-profile').empty().append(data)
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  }
  $(document).on('click', '#view-member-firend', function(e) {
    e.preventDefault();
    var memberuser = $(this).attr('member-id');
    $.ajax({
      url: base_url + "friend-memner&id=" + memberuser,
      success: function(data) {
        $('#member-view-result-profile').empty().append(data);
      },
      beforeSend: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#member-load-result').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#block-user', function(e) {
    e.preventDefault();
    var user = $(this).attr('data-user')
    $('#block-user-modal').modal('show');
  });
  $('.block-check').click(function(e) {
    e.preventDefault();
    $(this).checked = true;
    console.log($('input:radio[name=block]').val())
  })
  $(document).on('click', '#report-user', function(e) {
    e.preventDefault();
    var user = $(this).attr('data-user')
    $('#report-user-modal').modal('show');
  })
  $(document).on('click', '#report-user-send', function(e) {
    e.preventDefault();
    var userid = $(this).attr('data');
    $.ajax({
      url: base_url + "report-user",
      type: "post",
      data: {
        'report_content': $('textarea[name=report_content]').val(),
        '_token': $('input[name=_token]').val(),
        'memberid': userid,
      },
      success: function(data) {
        if (data == 1) {
          $('#msg-report').html('Your message has been sent !')
          $('textarea[name=report_content]').val("")
        }
        if (data == 2) {
          $('#msg-report').html('Your content must be not null!')
        }
        if (data == 0) {
          window.location.reload();
        }
        if (data == 3) {
          $('#myModal').modal('show');
        }
        if (data == 4) {
          $('#msg-report').html('You have to send reports. if there are five people and sending reports to this user. the system will automatically block')
        }
      }
    });
  });
  $(document).on('click', '#block-user-send', function(e) {
    e.preventDefault();
    var userid = $(this).attr('data');
    $.ajax({
      url: base_url + "block-user",
      type: "post",
      data: {
        'block_content': $('textarea[name=block_content]').val(),
        '_token': $('input[name=_token]').val(),
        'memberid': userid,
      },
      success: function(data) {
        if (data == 1) {
          $('#msg-block').html('Your message has been sent !')
          $('textarea[name=block_content]').val("")
        }
        if (data == 2) {
          $('#msg-block').html('Your content must be not null!')
        }
        if (data == 0) {
          window.location.reload();
        }
        if (data == 3) {
          $('#myModal').modal('show');
        }
        if (data == 4) {
          $('#msg-block').html('You have to send reports. if there are five people and sending reports to this user. the system will automatically block')
        }
      }
    });
  });
  $(document).on('click', '#fillter li a', function(e) {
    e.preventDefault();
    var key = $(this).attr('data');
    $('#fillter li a').removeClass('filter-active');
    $(this).addClass('filter-active');
    $.ajax({
      url: base_url + "filter-channel.html&key=" + key,
      success: function(data) {
        $('#result-filter').empty().html(data).fadeIn('fast');
      }
    })
  })
  $(document).on('click', '#pornstars-fillter li a', function(e) {
    e.preventDefault();
    var key = $(this).attr('data');
    $('#pornstars-fillter li a').removeClass('filter-active');
    $('#pornstars-fillter-horizontal li a').removeClass('filter-active');
    $(this).addClass('filter-active');
    $.ajax({
      url: base_url + "filter-porn-stars.html&key=" + key,
      success: function(data) {
        $('#result-filter-porn-star').empty().html(data).fadeIn();
      }
    })
  })
  $(document).on('click', '#pornstars-fillter-horizontal li a', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $.ajax({
      url: href,
      success: function(data) {
        $('#result-filter-porn-star').empty().html(data).fadeIn();
      }
    })
  })
  $(document).on('click', '#channel-filter-page ul li a', function(e) {
    e.preventDefault();
    var key = $('#channel-page-data').attr('data-key');
    var page = $(this).attr('href').split('page=')[1];
    get_channel_filter(page, key);
  })

  function get_channel_filter(page, key) {
    $.ajax({
      url: base_url + "filter-channel.html&key=" + key + "?page=" + page,
      success: function(data) {
        console.log(data);
        $('#result-filter').empty().html(data).fadeIn();
      }
    })
  }
  $(document).on('click', '#porn-star-filter-page ul li a', function(e) {
    e.preventDefault();
    var key = $(this).attr('data-key');
    var page = $(this).attr('href').split('page=')[1];
    get_porn_star_filter(page, key);
  })

  function get_porn_star_filter(page, key) {
    $.ajax({
      url: base_url + "filter-porn-stars.html&key=" + key + "?page=" + page,
      success: function(data) {
        console.log(data);
        $('#result-filter-porn-star').empty().append(data);
      }
    })
  }
  $(document).on('click', '#on-subscriber', function(e) {
    e.preventDefault();
    var channel_id = $(this).attr('channel-data');
    $.ajax({
      url: base_url + "subscribe&chanel=" + channel_id,
      success: function(data) {
        if (data == 1) {
          $('#channel-msg').empty().append('Thank you for subscribed!');
          $('#channel-subscriber-success').modal('show');
          $('#txt_subscriber').empty().text('Subscribed');
        }
        if (data == 3) {
          $('#channel-msg').empty().append('Thank you for subscribed!');
          $('#channel-subscriber-success').modal('show');
          $('#txt_subscriber').empty().text('Subscribed');
        }
        if (data == 2) {
          $('#channel-msg').empty().append('You already subscribe this channel!');
          $('#channel-subscriber-success').modal('show');
        }
        if (data == 0) {
          $('#channel-msg').empty().append('You must first login to your account to subscribe to this channel. If you do not yet have an account <a id="subscribe-show-login" data-toggle="modal" data-target="#signup" href="#">click here</a> to create one');
          $('#channel-subscriber-success').modal('show');
        }
      }
    })
  })
  $('#channel-subscriber-success').click(function(e) {
    $('#channel-subscriber-success').modal('hide');
  })
  $(document).on('click', '#send-mail-box', function() {
    $('#modal-msg-box').modal('show');
  });
  $(document).on('click', '#send-msg', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "private-msg",
      type: "POST",
      data: {
        'string_id': $('input[name=string_id]').val(),
        'msg_email': $('input[name=msg-email]').val(),
        'msg_content': $('textarea[name=msg-content]').val(),
        '_token': $('input[name=_token]').val()
      },
      success: function(data) {
        if (data == 0) {
          $('#share_video_response').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-remove"></span><strong> Invalid Email must be not null !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 1) {
          $('#share_video_response').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-remove"></span><strong> Invalid Email format !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 2) {
          $('#share_video_response').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-remove"></span><strong> Invalid Content Only text success !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 3) {
          $('#share_video_response').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-remove"></span><strong> Invalid Content must be not null !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 4) {
          $('#share_video_response').html('<div class="alert alert-success"><span  class="glyphicon glyphicon-ok"></span><strong> Messges has been sent successfully !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 5) {
          $('#share_video_response').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-remove"></span><strong>You sent the message one time before. Please wait for reply</strong></div>').fadeIn().delay(10000).fadeOut();
        }
      }
    })
  })
  $(document).on('click', '#profile-send-comment', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "profile-comment",
      type: "POST",
      data: {
        'profile_comment_text': $('input[name=profile-comment-text]').val(),
        'profileid': $('input[name=id]').val(),
        '_token': $('input[name=_token]').val()
      },
      success: function(data) {
        console.log(data);
        $('#update-comment').prepend(data);
        $('input[name=profile-comment-text]').val("");
      }
    });
  });
  $(document).on('click', '#close-ads', function(e) {
    e.preventDefault();
    $('#text_ads').fadeOut();
  })
  $(document).on('click', '#upload-video', function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#all-video').removeClass('active');
    $.ajax({
      url: base_url + "upload-video.html&action=get_temp",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#result-upload').empty().html(data).fadeIn();
        }
      },
      beforeSend: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#member-upload', function(e) {
    $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>Processing...").show();
  })
  $(document).on('click', '#all-video', function(e) {
    $('#upload-video').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
    $.ajax({
      url: base_url + "show-video-upload.html",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        } else {
          $('#result-upload').empty().html(data).fadeIn();
        }
      },
      beforeSend: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/").hide();
      }
    })
  })
  $(document).on('click', '#subscription', function() {
    $(this).addClass('active');
    $('#channel').removeClass('active')
    $.ajax({
      url: base_url + "show-payment",
      success: function(data) {
        if (data == 0) {
          $('#myModal').modal('show');
        }
        if (data == 1) {
          $('#subscribe').html('<span>You currently are not subscribed to any channels</span>').fadeIn();
        }
        if (data.length > 10) {
          $('#subscribe').html(data).fadeIn();
        }
      },
      beforeSend: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#subscribe-load').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    })
  })
  $(document).on('click', '#edit-video', function(e) {
    e.preventDefault();
    var video_id = $(this).attr('data-id');
    $.ajax({
      url: base_url + "member-delete-video&id=" + video_id,
      success: function(data) {
        if (data == 1) {
          $('#loading-upload').html('<div class="alert alert-success"><span  class="glyphicon glyphicon-ok"></span><strong> ' + language.DELETED_SUCCESSFULLY + '</strong></div>').fadeIn().delay(10000).fadeOut();
          $('#result-upload').load(base_url + 'show-video-upload.html');
        }
        if (data == 0) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> ' + language.VIDEO_NOT_FOUND + '</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 2) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> ' + language.DELETED_UNSUCCESSFULLY + '</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 3) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> ' + language.DELETED_UNSUCCESSFULLY + '</strong></div>').fadeIn().delay(10000).fadeOut();
        }
      }
    })
  })
  $(document).on('click', '#edit-thumbnail', function(e) {
    e.preventDefault();
    var video_id = $(this).attr('data-id');
    $.ajax({
      url: base_url + "member-edit-thumbnail-video&id=" + video_id,
      success: function(data) {
        if (data != 2 && data != 0 && data != 3) {
          $('#edit-video-upload').empty().append(data);
        }
        if (data == 2) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> File not exites!</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 0) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> File not found !</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 3) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> Please login your account !</strong></div>').fadeIn().delay(10000).fadeOut();
          window.location.reload();
        }
      },
      beforeSend: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").show();
      },
      complete: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").hide();
      }
    })
  })
  $(document).on('click', '.chose_thumb', function(e) {
    e.preventDefault();
    var data_id = $(this).attr('data-id');
    var data_id_split = data_id.split('_');
    var video_id = data_id_split[0];
    var thumb_id = data_id_split[1];
    $('#show-thumb span').removeClass('chose');
    $('#chose_complete_' + thumb_id + '').addClass('chose');
    $('#save-thumb').fadeIn();
    $('#save-thumb').attr('data-id', data_id);
  })
  $(document).on('click', '#save-thumb', function(e) {
    e.preventDefault();
    var data = $(this).attr('data-id');
    $.ajax({
      url: base_url + "save-thumb&t=" + data,
      success: function(data) {
        if (data == 1) {
          $('#loading-upload').html('<div class="alert alert-success"><span  class="glyphicon glyphicon-ok"></span><strong> Thumbnail has been update successfully !</strong></div>').fadeIn().delay(10000).fadeOut();
          $('#result-upload').load(base_url + '/show-video-upload.html');
        }
        if (data == 2) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> Please login your account !</strong></div>').fadeIn().delay(10000).fadeOut();
          window.location.reload();
        }
        if (data == 4) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> Request not found!</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 3) {
          $('#loading-upload').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> Request not found!</strong></div>').fadeIn().delay(10000).fadeOut();
        }
      },
      beforeSend: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").show();
      },
      complete: function() {
        $('#loading-upload').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").hide();
      }
    })
  })
  $(document).on('click', '#resgist-channel', function(e) {
    e.preventDefault();
    $.ajax({
      url: base_url + "channel-regist",
      type: "POST",
      data: {
        'user_mail': $('input[name=user_mail]').val(),
        'channel_name': $('input[name=channel_name]').val(),
        'channel_description': $('textarea[name=channel_description]').val(),
        'channel_logo': $('input[name=channel_logo]').val(),
        '_token': $('input[name=_token]').val()
      },
      success: function(data) {
        if (data == 1) {
          $('#msg-channel').html('<div class="alert alert-success"><span  class="glyphicon glyphicon-ok"></span><strong> Register successfully. Please wait for approve by Administrator!</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 0) {
          $('#msg-channel').html('<div class="alert alert-danger"><span  class="glyphicon glyphicon-ok"></span><strong> You are already register. Please wait to check by Administrator!</strong></div>').fadeIn().delay(10000).fadeOut();
        }
        if (data == 2) {
          $('#myModal').modal('show');
        }
      },
      beforeSend: function() {
        $('#load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").show();
      },
      complete: function() {
        $('#load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/> Please waiting...").hide();
      }
    })
  })
  $("#channel-overview").click(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#channel-dashboard').removeClass('active')
    $.ajax({
      type: "GET",
      url: base_url + "change-channel.html",
      success: function(data) {
        if (data == 1) {
          console.log("asd")
        }
        if (data == 0) {
          $('#myModal').modal('show');
        }
        if (data.length > 10) {
          $('#setting-channel').empty().append(data)
        }
      },
      beforeSend: function() {
        $('#setting-load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#setting-load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    });
  });
  $("#channel-dashboard").click(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $('#channel-overview').removeClass('active')
    $.ajax({
      type: "GET",
      url: base_url + "channel-dashboard.html",
      success: function(data) {
        if (data == 1) {
          console.log("asd")
        }
        if (data == 0) {
          $('#myModal').modal('show');
        }
        if (data.length > 10) {
          $('#setting-channel').empty().append(data)
        }
      },
      beforeSend: function() {
        $('#setting-load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").show();
      },
      complete: function() {
        $('#setting-load-channel').html("<img src='" + base_asset + "/public/assets/images/result_loading.gif'/>").hide();
      }
    });
  });
  $(document).on('click', '#video-filter li a', function(e) {
    e.preventDefault();
    var url = $(this).attr("data-value");
    window.location.href = base_url + "" + url + "";
  })
  $(document).on('click', '#chose-date li a', function(e) {
    var data_date = $(this).attr('role');
    var full_text = $(this).attr('full-text');
    $('#txt-date').empty().text(full_text);
    $('#date-sort').attr('data-date', data_date);
    var time = $('#set-time').attr('data-time');
    var url = base_url + "top-rate.html&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        console.log(data);
        $('#top-rate-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#chose-time li a', function(e) {
    var data_date = $('#date-sort').attr('data-date');
    var time = $(this).attr('role');
    $('#set-time').attr('data-time', time);
    var url = base_url + "top-rate.html&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#top-rate-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#page_toprate_fileter ul li a', function(e) {
    e.preventDefault();
    var data_date = $('#hiden-data-date-time').attr('data-date');
    var data_time = $('#hiden-data-date-time').attr('data-time');
    var page = $(this).attr('href').split('page=')[1];
    get_top_rate_filter(page, data_date, data_time);
  })

  function get_top_rate_filter(page, data_date, data_time) {
    var url = base_url + "top-rate.html&date=" + data_date + "&time=" + data_time + "?page=" + page;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#top-rate-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  }
  $(document).on('click', '#chose-date-view li a', function(e) {
    var data_date = $(this).attr('role');
    var full_text = $(this).attr('full-text');
    $('#txt-date-view').empty().text(full_text);
    $('#date-sort-view').attr('data-date', data_date);
    var time = $('#set-view-time').attr('data-time');
    var url = base_url + "most-view.html&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        console.log(data);
        $('#most-view-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#chose-time-view li a', function(e) {
    var data_date = $('#date-sort-view').attr('data-date');
    var full_text = $(this).attr('full-text');
    $('#txt-time-view').empty().text(full_text);
    var time = $(this).attr('role');
    $('#set-view-time').attr('data-time', time);
    var url = base_url + "most-view.html&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#most-view-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#page_mostview_fileter ul li a', function(e) {
    e.preventDefault();
    var data_date = $('#hiden-data-mostview-time').attr('data-date');
    var data_time = $('#hiden-data-mostview-time').attr('data-time');
    var page = $(this).attr('href').split('page=')[1];
    get_top_view_filter(page, data_date, data_time);
  })

  function get_top_view_filter(page, data_date, data_time) {
    var url = base_url + "most-view.html&date=" + data_date + "&time=" + data_time + "?page=" + page;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#most-view-fillter').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  }
  $(document).on('click', '.categories-sort', function(e) {
    e.preventDefault();
    var action = $(this).attr('data-action');
    var cat = $(this).attr('data-categories');
    var name = $(this).attr('data-name');
    var time = $('#hidden-action').attr('data-time')
    if (typeof time == 'undefined') {
      time = 'all';
    }
    window.location.href = base_url + 'categories/' + cat + '.' + name + '.html&sort=' + action + '&time=' + time;
  });
  $(document).on('click', '#chose-time-cat li a', function(e) {
    e.preventDefault();
    var cat = $(this).attr('data-categories');
    var name = $(this).attr('data-name');
    var action = $('#hidden-action').attr('data-action');
    var time = $(this).attr('role');
    var full_text = $(this).attr('full-text');
    window.location.href = base_url + 'categories/' + cat + '.' + name + '.html&sort=' + action + '&time=' + time;
  })
  $(document).on('click', '#sort_by li a', function(e) {
    e.preventDefault();
    var full_text = $(this).attr('full-text');
    $("#sort_by li a").removeClass('active');
    $("#close-sort").removeClass('open');
    $("#txt-sort-by").empty().text(full_text);
    $(this).addClass('active');
    var sort_by = $(this).attr('data-sort');
    var sort_date = $('#sort_date_default').attr('value');
    var sort_time = $('#sort_time_default').attr('value');
    $('#sort_by_default').attr('value', sort_by);
    var keywork = $('#keyword').attr('value');
    var url = base_url + "search.html&keyword=" + keywork + "&sort=" + sort_by + "&date=" + sort_date + "&duration=" + sort_time + "";
    $.ajax({
      url: url,
      success: function(data) {
        $('#ajax-result-content').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    });
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    return false;
  })
  $(document).on('click', '#sort_date li a', function(e) {
    e.preventDefault();
    $("#sort_date li a").removeClass('active');
    $(this).addClass('active');
    $("#close-date").removeClass('open');
    var full_text = $(this).attr('full-text');
    $("#txt-date-sort").empty().text(full_text);
    var sort_date = $(this).attr('data-sort-date');
    var sort_by = $('#sort_by_default').attr('value');
    var sort_time = $('#sort_time_default').attr('value');
    $('#sort_date_default').attr('value', sort_date);
    var keywork = $('#keyword').attr('value');
    var url = base_url + "search.html&keyword=" + keywork + "&sort=" + sort_by + "&date=" + sort_date + "&duration=" + sort_time + "";
    $.ajax({
      url: url,
      success: function(data) {
        $('#ajax-result-content').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    });
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    return false;
  })
  $(document).on('click', '#sort_time li a', function(e) {
    e.preventDefault();
    $("#sort_time li a").removeClass('active');
    $(this).addClass('active');
    $("#close-duration").removeClass('open');
    var full_text = $(this).attr('full-text');
    $("#txt-duration-sort").empty().text(full_text);
    var sort_date = $('#sort_date_default').attr('value');
    var sort_by = $('#sort_by_default').attr('value');
    var sort_time = $(this).attr('data-sort-time');
    $('#sort_time_default').attr('value', sort_time);
    var keywork = $('#keyword').attr('value');
    var url = base_url + "search.html&keyword=" + keywork + "&sort=" + sort_by + "&date=" + sort_date + "&duration=" + sort_time + "";
    $.ajax({
      url: url,
      success: function(data) {
        $('#ajax-result-content').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    });
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    return false;
  })
  $(document).on('click', '#search-filter-page ul li a', function(e) {
    e.preventDefault();
    var data_date = $(this).attr('data-date');
    var data_time = $(this).attr('data-time');
    var href = $(this).attr('href').split('?page=')[0];
    var page = $(this).attr('href').split('page=')[1];
    get_search_page_filter(href, page);
  })

  function get_search_page_filter(href, page) {
    var full_uri = href + "?page=" + page;
    $.ajax({
      url: href + "?page=" + page,
      success: function(data) {
        $('#ajax-result-content').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
    if (full_uri != window.location) {
      window.history.pushState({
        path: full_uri
      }, '', full_uri);
    }
    return false;
  }
  $(document).on('click', '#sort-premium li', function(e) {
    e.preventDefault();
    var action = $(this).attr('data-action');
    var url = base_url + "premium-hd.html&sort=" + action + "";
    window.location.href = "" + url + "";
  })
  $(document).on('click', '#chose_local li a', function(e) {
    var lang = $(this).attr('lang');
    var url = "" + base_url + "/" + lang;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
  })
  $(document).on('click', '#chose-date-video li a', function(e) {
    var action = $('#chose-date-video').attr('data-action');
    var data_date = $(this).attr('role');
    var full_text = $(this).attr('full-text');
    $('#txt-date-video').empty().text(full_text);
    $('#date-sort-video').attr('data-date', data_date);
    var time = $('#set-time-video').attr('data-time');
    var url = base_url + "video.html&action=" + action + "&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#result-video-filter-page').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#chose-time-video li a', function(e) {
    var action = $('#chose-time-video').attr('data-action');
    var data_date = $('#date-sort-video').attr('data-date');
    var time = $(this).attr('role');
    var full_text = $(this).attr('full-text');
    $('#txt-time-video').empty().text(full_text);
    $('#set-time-video').attr('data-time', time);
    var url = base_url + "video.html&action=" + action + "&date=" + data_date + "&time=" + time;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#result-video-filter-page').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  })
  $(document).on('click', '#result-video-filter-paginate ul li a', function(e) {
    e.preventDefault();
    var action = $('#date-sort-video').attr('data-action')
    var data_date = $('#date-sort-video').attr('data-date');
    var data_time = $('#set-time-video').attr('data-time');
    var page = $(this).attr('href').split('page=')[1];
    get_video_paginate_filter(page, action, data_date, data_time);
  })

  function get_video_paginate_filter(page, action, data_date, data_time) {
    url = base_url + "video.html&action=" + action + "&date=" + data_date + "&time=" + data_time + "?page=" + page;
    if (url != window.location) {
      window.history.pushState({
        path: url
      }, '', url);
    }
    $.ajax({
      url: url,
      success: function(data) {
        $('#result-video-filter-page').empty().append(data);
      },
      beforeSend: function() {
        $('#jax-loading').modal('show');
      },
      complete: function() {
        $('#jax-loading').modal('hide');
      }
    })
  }
  $("#show-about").click(function(e) {
    e.preventDefault();
    $(this).closest("div").toggleClass("expanded")
  });
  $(document).on('click', '[id*="pornvote-"]', function(event) {
    event.preventDefault();
    var vote_id = $(this).attr("id");
    var id_split = vote_id.split('-');
    var vote = id_split[1];
    var item_id = id_split[2];
    $.ajax({
      url: base_url + 'pornstar_rating&type=' + vote + '&id=' + item_id,
      success: function(data) {
        if (data['msg'] !== '') {
          $("#msg-rating").animate({
            'opacity': 0
          }, 200, function() {
            $(this).html('<center class="text-danger">' + data['msg'] + '</center>');
          }).animate({
            'opacity': 1
          }, 200);
          $("#msg-rating").delay(5000).animate({
            'opacity': 0
          }, 200, function() {
            $(this).html('<a href="javascript:void(0);" id="pornvote-like-' + item_id + '"  class="tt vUp" title="Like"><i class="fa fa-thumbs-o-up"></i><span>' + data['like'] + '</span></a><a href="javascript:void(0);" id="pornvote-dislike-' + item_id + '" class="tt vDn" title="Dislike"><i class="fa fa-thumbs-o-down"></i><span>' + data['dislike'] + '</span></a><span class="result"><span  style="width:' + data['percent_like'] + '%;"></span></span>')
          }).animate({
            'opacity': 1
          }, 200);
        } else {
          if (data['like'] != 0 || data['dislikes'] != 0) {
            $("#msg-rating .result span").css("width", data['percent_like'] + "%");
            if (data['like'] != $("#pornvote-like-" + item_id + " span").text()) {
              $("#pornvote-like-" + item_id + " span").animate({
                'opacity': 0
              }, 200, function() {
                $(this).text(data['like']);
              }).animate({
                'opacity': 1
              }, 200);
            }
            if (data['dislike'] != $("#pornvote-dislike-" + item_id + " span").text()) {
              $("#pornvote-dislike-" + item_id + " span").animate({
                'opacity': 0
              }, 200, function() {
                $(this).text(data['dislike']);
              }).animate({
                'opacity': 1
              }, 200);
            }
          } else {
            $("#msg-rating").animate({
              'opacity': 0
            }, 200, function() {
              $(this).html('<center class="text-danger"><a data-toggle="modal" data-target="#myModal" href="#">Login to vote</a></center>');
            }).animate({
              'opacity': 1
            }, 200);
            $("#msg-rating").delay(5000).animate({
              'opacity': 0
            }, 200, function() {
              $('#pornvote-like-' + item_id + ' span').html(data['like']);
              $('#pornvote-dislikelike-' + item_id + 'span').html(data['dislike']);
            }).animate({
              'opacity': 1
            }, 200);
          }
        }
      }
    })
  });
  $(document).on('click', '[id*="pornmenu-"]', function(event) {
    event.preventDefault();
    var vote_id = $(this).attr("id");
    var id_split = vote_id.split('-');
    var porn_menu = id_split[1];
    var item_id = id_split[2];
    if (porn_menu == "video") {
      $('#pornmenu-video-' + item_id + '').addClass('active')
      $('#pornmenu-photo-' + item_id + '').removeClass('active')
      var href = $(this).attr('data-href');
      // if (href != window.location) {
      //   window.history.pushState({
      //     path: href
      //   }, '', href);
      // }
      $.ajax({
        url: href,
        success: function(data) {
            $('#jax-loading').modal('hide');
            $('#menu_result').empty().append(data);
        },
        beforeSend: function() {
          $('#jax-loading').modal('show');
        },
        complete: function() {
          $('#jax-loading').modal('hide');
        }
      });
    } else {
      $('#pornmenu-video-' + item_id + '').removeClass('active')
      $('#pornmenu-photo-' + item_id + '').addClass('active')
      var href = $(this).attr('data-href');
      // if (href != window.location) {
      //   window.history.pushState({
      //     path: href
      //   }, '', href);
      // }
      $.ajax({
        url: href,
        success: function(data) {
            $('#jax-loading').modal('hide');
            $('#menu_result').empty().append(data);
        },
        beforeSend: function() {
          $('#jax-loading').modal('show');
        },
        complete: function() {
          $('#jax-loading').modal('hide');
        }
      });
    }
  });
});

function is_int(x) {
    return x % 1 === 0;
}
$(document).ready(function() {
    var rating_text = $('#rating_text').html();
    var rating_current = $("input[id='current_rating']").val();
    $("#share_video a").click(function(event) {
        event.preventDefault();
        if ($("#share_video_box").is(':hidden')) {
            $("#share_video_box").fadeIn();
        } else {
            $("#share_video_box").hide();
        }
    });
    $("#flag_video a").click(function(event) {
        event.preventDefault();
        if ($("#flag_video_box").is(':hidden')) {
            $("#flag_video_box").fadeIn();
        } else {
            $("#flag_video_box").hide();
        }
    });
    $("#embed_video a").click(function(event) {
        event.preventDefault();
        if ($("#embed_video_box").is(':hidden')) {
            $("#embed_video_box").fadeIn();
        } else {
            $("#embed_video_box").hide();
        }
    });
    $("#close_flag").click(function(event) {
        event.preventDefault();
        $("#flag_video_box").hide();
    });
    $("#close_share").click(function(event) {
        event.preventDefault();
        $("#share_video_box").hide();
    });
    $("#close_embed").click(function(event) {
        event.preventDefault();
        $("#embed_video_box").hide();
    });
    $("#close_favorite").click(function(event) {
        event.preventDefault();
        $("#favorite_video_box").hide();
    });
    $("textarea[id='video_embed_code']").click(function() {
        $(this).select();
        $(this).focus();
    });
    $("a[id*='favorite_video_']").click(function(event) {
        event.preventDefault();
        var fav_id = $(this).attr('id');
        var id_split = fav_id.split('_');
        var video_id = id_split[2];
        user_posting('#response_message', lang_favoriting);
        $.post(base_url + '/ajax/favorite_video', {
            video_id: video_id
        }, function(response) {
            if (response.status == 0) {
                user_posting('#response_message', response.msg);
            } else {
                user_response('#response_message', response.msg);
            }
        }, 'json');
    });
    $("[id*='star_']").click(function(event) {
        event.preventDefault();
        var star_id = $(this).attr("id");
        var id_split = star_id.split('_');
        var rating = id_split[2];
        var video_id = id_split[3];
        $("#rating_text").html(lang_thanks);
        $.post(base_url + '/ajax/rate_video', {
            video_id: video_id,
            rating: rating
        }, function(response) {
            $("#rating").html(response.rating_code);
            $("#rating_text").html(response.msg);
        }, "json");
    });
    $("[id*='star_']").mouseover(function() {
        var star_id = $(this).attr('id');
        var id_split = star_id.split('_');
        var rating = id_split[2];
        var video_id = id_split[3];
        for (var i = 1; i <= 5; i++) {
            var star_sel = $("a[id='star_video_" + i + "_" + video_id + "']");
            if (i <= rating)
                $(star_sel).removeClass().addClass('full');
            else
                $(star_sel).removeClass();
        }
        if (rating == 1) {
            $('#rating_text').html(lang_lame);
        } else if (rating == 2) {
            $('#rating_text').html(lang_bleh);
        } else if (rating == 3) {
            $('#rating_text').html(lang_alright);
        } else if (rating == 4) {
            $('#rating_text').html(lang_good);
        } else if (rating == 5) {
            $('#rating_text').html(lang_awesome);
        }
    });
    $("ul[id='rating_container_video']").mouseout(function() {
        var star_id = $("[id*='star_video_1_']").attr('id');
        var id_split = star_id.split('_');
        var video_id = id_split[3];
        for (var i = 0; i < 5; i++) {
            var star = i + 1;
            var star_sel = $("a[id='star_video_" + star + "_" + video_id + "']");
            if (rating_current >= i + 1) {
                $(star_sel).removeClass().addClass('full');
            } else if (rating_current >= i + 0.5) {
                $(star_sel).removeClass().addClass('half');
            } else {
                $(star_sel).removeClass();
            }
        }
        $('#rating_text').html(rating_text);
    });
    $("a#show_related_videos").click(function(event) {
        event.preventDefault();
        $("#video_comments").hide();
        $("#related_videos").show();
    });
    $("a#show_comments").click(function(event) {
        event.preventDefault();
        $("#related_videos").hide();
        $("#video_comments").show();
    });
    $("input[id*='post_video_comment_']").click(function() {
        var video_msg = $("#post_message");
        var input_id = $(this).attr('id');
        var id_split = input_id.split('_');
        var video_id = id_split[3];
        var comment = $("textarea[id='video_comment']").val();
        if (comment == '') {
            video_msg.show();
            return false;
        }
        video_msg.hide();
        user_posting_load('#video_response', lang_posting, 1);
        reset_chars_counter();
        $.post(base_url + '/ajax/video_comment', {
            video_id: video_id,
            comment: comment
        }, function(response) {
            if (response.status == '0') {
                $("textarea[id='video_comment']").val('');
                user_posting('#video_response', response.msg);
            } else {
                $(".no_comments").hide();
                $("textarea[id='video_comment']").val('');
                var bDIV = $("#comments_delimiter");
                var cDIV = document.createElement("div");
                $(cDIV).html(response.code);
                $(bDIV).after(cDIV);
                user_response('#video_response', response.msg);
                $('#end_num').html(parseInt($('#end_num').html(), 10) + 1);
                $('#total_comments').html(parseInt($('#total_comments').html(), 10) + 1);
                $('#total_video_comments').html(parseInt($('#total_video_comments').html(), 10) + 1);
            }
        }, "json");
    });
    $("body").on('click', "a[id*='p_video_comments_']", function(event) {
        event.preventDefault();
        var page_id = $(this).attr('id');
        var id_split = page_id.split('_');
        var video_id = id_split[3];
        var page = id_split[4];
        $.post(base_url + '/ajax/video_pagination', {
            video_id: video_id,
            page: page
        }, function(response) {
            if (response != '') {
                var comments_id = $('#video_comments_' + video_id);
                $(comments_id).hide();
                $(comments_id).html(response);
                $(comments_id).show();
            }
        });
    });
    $("body").on('click', "a[id*='_related_videos_']", function(event) {
        event.preventDefault();
        var bar_id = $(this).attr('id');
        var id_split = bar_id.split('_');
        var move = id_split[0];
        var video_id = id_split[3];
        var page = $("input[id='current_page_related_videos']").val();
        var prev_bar = $('#prev_related_videos_' + video_id);
        var next_bar = $('#next_related_videos_' + video_id);
        $('.center_related').show();
        $.post(base_url + '/ajax/related_videos', {
            video_id: video_id,
            page: page,
            move: move
        }, function(response) {
            if (response.status == '1') {
                var related_div = $('#related_videos_container_' + page);
                if (response.move == 'next') {
                    $(related_div).hide();
                    $(related_div).html(response.videos);
                    $(related_div).fadeIn();
                } else {
                    related_div = $('#related_videos_container_' + response.page);
                    related_div.fadeOut();
                }
                $("input[id='current_page_related_videos']").val(response.page);
                if (response.pages <= 1) {
                    $(prev_bar).hide();
                    $(next_bar).hide();
                }
                if (response.page > 1) {
                    $(prev_bar).show();
                } else {
                    $(prev_bar).hide();
                }
                if (response.page >= response.pages) {
                    $(next_bar).hide();
                } else {
                    $(next_bar).show();
                }
            }
            $('.center_related').hide();
        }, 'json');
    });
    $("#custom_width").change(function() {
        var cw = $("#custom_width").val();
        var src = $(this).attr('data-src');
        var string = $(this).attr('data-string');
        var poster = $(this).attr('data-poster');
        if (is_int(cw) && cw >= 320) {
            if ($("#custom_size").hasClass("has-error")) {
                $("#custom_size").removeClass("has-error");
            }
            var ch = Math.round(cw / (video_width / video_height));
            $("#custom_height").val(ch);
            var embed_code = '<iframe allowfullscreen src="' + base_url + '/embedframe/' + string + '" frameborder="0" width="' + cw + '" height="' + ch + '" scrolling="no"></iframe>'
            $("#video_embed_code").val(embed_code);
        } else {
            $("#custom_size").addClass("has-error");
        }
        if (cw == '' && $("#custom_height").val() == '') {
            if ($("#custom_size").hasClass("has-error")) {
                $("#custom_size").removeClass("has-error");
            }
        }
    });
    $("#custom_height").change(function() {
        var cw = $("#custom_width").val();
        var ch = $("#custom_height").val();
        var string = $(this).attr('data-string');
        var poster = $(this).attr('data-poster');
        var src = $(this).attr('data-src');
        if (is_int(cw) && cw >= 320 && is_int(ch) && ch >= 180) {
            if ($("#custom_size").hasClass("has-error")) {
                $("#custom_size").removeClass("has-error");
            }
            var embed_code = '<iframe allowfullscreen src="' + base_url + '/embedframe/' + string + '" frameborder="0" width="' + cw + '" height="' + ch + '" scrolling="no"></iframe>'
            $("#video_embed_code").val(embed_code);
        } else {
            $("#custom_size").addClass("has-error");
        }
        if (cw == '' && ch == '') {
            if ($("#custom_size").hasClass("has-error")) {
                $("#custom_size").removeClass("has-error");
            }
        }
    });
});
$(document).ready(function() {
    $("[id*='vote_']").click(function(event) {
        event.preventDefault();
        var vote_id = $(this).attr("id");
        var id_split = vote_id.split('_');
        var vote = id_split[1];
        var item_id = id_split[2];
        $.ajax({
            url: '' + base_url + 'rating&type=' + vote + '&id=' + item_id,
            success: function(data) {
                if (data['msg'] != '') {
                    $('#vote-contain').hide();
                    $("#votemsg").show();

                    $("#votemsg").animate({
                        'opacity': 0
                    }, 200, function() {
                        $(this).html('<center class="text-danger">' + data['msg'] + '</center>');
                    }).animate({
                        'opacity': 1
                    }, 200);

                    $("#votemsg").delay(5000).animate({
                        'opacity': 0
                    }, 200, function() {
                        $('#vote-contain').show();
                        $("#votemsg").hide();
                        // $(this).html('<div class="pull-left"><i class="glyphicon glyphicon-thumbs-up"></i> <span id="video_likes" class="text-white">' + data['like'] + '</span></div><div class="pull-right"><i class="glyphicon glyphicon-thumbs-down"></i> <span id="video_dislikes" class="text-white">' + data['dislike'] + '</span></div><div class="clearfix"></div>');
                    }).animate({
                        'opacity': 1
                    }, 200);
                } else {
                    if (data['like'] != 0 || data['dislikes'] != 0) {
                        if ($(".dislikes").hasClass("not-voted")) {
                            $(".dislikes").removeClass("not-voted");
                        }
                        $("#video_rate").css("width", data['percent_like'] + "%");
                        $("#video_rate_number").html(data['percent_like']+'%');
                        if (data['like'] != $("#video_likes").text()) {
                            $("#video_likes").animate({
                                'opacity': 0
                            }, 200, function() {
                                $(this).text(data['like']);
                            }).animate({
                                'opacity': 1
                            }, 200);
                        }
                        if (data['dislike'] != $("#video_dislikes").text()) {
                            $("#video_dislikes").animate({
                                'opacity': 0
                            }, 200, function() {
                                $(this).text(data['dislike']);
                            }).animate({
                                'opacity': 1
                            }, 200);
                        }
                    } else {
                        $('#vote-contain').hide();
                        $("#votemsg").show();

                        $("#votemsg").animate({
                            'opacity': 0
                        }, 200, function() {
                            $(this).html('<center class="text-danger"><a data-toggle="modal" data-target="#myModal" href="#">Login to vote</a></center>');
                        }).animate({
                            'opacity': 1
                        }, 200);
                        $("#votemsg").delay(5000).animate({
                            'opacity': 0
                        }, 200, function() {
                            $('#vote-contain').show();
                            $("#votemsg").hide();
                            // $(this).html('<div class="pull-left"><i class="glyphicon glyphicon-thumbs-up"></i> <span id="video_likes" class="text-white">' + data['like'] + '</span></div><div class="pull-right"><i class="glyphicon glyphicon-thumbs-down"></i> <span id="video_dislikes" class="text-white">' + data['dislike'] + '</span></div><div class="clearfix"></div>');
                        }).animate({
                            'opacity': 1
                        }, 200);
                    }
                }
            }
        })
    });

    function stopError() {
        return true;
    }
    $('img.js-videoThumbFlip').each(function(i, e) {
        var el = $(this);
        var server = el.data('from')
        var digitsSuffix = el.data('digitssuffix');
        var digitsPreffix = el.data('digitspreffix');
        var preview = el.data('preview');
        var mainSrc = el.data('src');
        var flipbook = new MG_Flipbook();
        if (server === 'www.pornhub.com') {
            flipbook.params = {
                thumbnailsSets: [{
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'js-videoThumbFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: false,
                    firstThumbnail: '1',
                    digitsSuffix: '.jpg',
                    digitsPreffix: '/',
                    incrementer: 1,
                    setLength: 16,
                }, {
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'ourFriendsFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: true,
                }]
            };
            el.mouseenter(function() {
                flipbook.startFlip(el[0]);
            });
            el.mouseout(function() {
                flipbook.endFlip();
            });
        }
        if (server === 'pornfun.com') {
            flipbook.params = {
                thumbnailsSets: [{
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'js-videoThumbFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: false,
                    firstThumbnail: '1',
                    digitsSuffix: '.jpg',
                    digitsPreffix: '/',
                    incrementer: 1,
                    setLength: 16,
                }, {
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'ourFriendsFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: true,
                }]
            };
            el.mouseenter(function() {
                flipbook.startFlip(el[0]);
            });
            el.mouseout(function() {
                flipbook.endFlip();
            });
        }
        if (server === 'www.txxx.com') {
            flipbook.params = {
                thumbnailsSets: [{
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'js-videoThumbFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: false,
                    firstThumbnail: '1',
                    digitsSuffix: '.jpg',
                    digitsPreffix: '/',
                    incrementer: 1,
                    setLength: 10,
                }, {
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'ourFriendsFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: true,
                }]
            };
            el.mouseenter(function() {
                flipbook.startFlip(el[0]);
            });
            el.mouseout(function() {
                flipbook.endFlip();
            });
        }
        if (server === 'www.xvideos.com') {
            if (digitsSuffix !== '' && digitsPreffix !== '') {
                flipbook.params = {
                    thumbnailsSets: [{
                        thumbnailsContainer: '.videos',
                        thumbnailsClassName: 'js-videoThumbFlip',
                        excludeContainer: false,
                        interval: 500,
                        cover: false,
                        firstThumbnail: '1',
                        digitsSuffix: '.' + digitsSuffix,
                        digitsPreffix: '.' + digitsPreffix,
                        incrementer: 1,
                        setLength: 16,
                    }, {
                        thumbnailsContainer: '.videos',
                        thumbnailsClassName: 'ourFriendsFlip',
                        excludeContainer: false,
                        interval: 500,
                        cover: true,
                    }]
                };
                el.mouseenter(function() {
                    flipbook.startFlip(el[0]);
                });
                el.mouseout(function() {
                    flipbook.endFlip();
                });
            }
        }
        if (server === 'h2porn.com') {
            flipbook.params = {
                thumbnailsSets: [{
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'js-videoThumbFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: false,
                    firstThumbnail: '1',
                    digitsSuffix: '.jpg',
                    digitsPreffix: '/',
                    incrementer: 1,
                    setLength: 11,
                }, {
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'ourFriendsFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: true,
                }]
            };
            el.mouseenter(function() {
                flipbook.startFlip(el[0]);
            });
            el.mouseout(function() {
                flipbook.endFlip();
            });
        }
        if (server === 'fapbox.com') {
            flipbook.params = {
                thumbnailsSets: [{
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'js-videoThumbFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: false,
                    firstThumbnail: '1',
                    digitsSuffix: '.jpg',
                    digitsPreffix: '-3b',
                    incrementer: 1,
                    setLength: 10,
                }, {
                    thumbnailsContainer: '.videos',
                    thumbnailsClassName: 'ourFriendsFlip',
                    excludeContainer: false,
                    interval: 500,
                    cover: true,
                }]
            };
            el.mouseenter(function() {
                flipbook.startFlip(el[0]);
            });
            el.mouseout(function() {
                flipbook.endFlip();
            });
        }
        if (server === 'www.youporn.com') {
            if (digitsSuffix !== '' && digitsPreffix !== '') {
                flipbook.params = {
                    thumbnailsSets: [{
                        thumbnailsContainer: '.videos',
                        thumbnailsClassName: 'js-videoThumbFlip',
                        excludeContainer: false,
                        interval: 500,
                        cover: false,
                        firstThumbnail: '1',
                        digitsSuffix: '/' + digitsSuffix,
                        digitsPreffix: '/' + digitsPreffix,
                        incrementer: 1,
                        setLength: 16,
                    }, {
                        thumbnailsContainer: '.videos',
                        thumbnailsClassName: 'ourFriendsFlip',
                        excludeContainer: false,
                        interval: 500,
                        cover: true,
                    }]
                };
                el.mouseenter(function() {
                    flipbook.startFlip(el[0]);
                });
                el.mouseout(function() {
                    flipbook.endFlip();
                });
            }
        }
        if (server === 'xhamster.com') {
            if (preview !== '') {
                var timer = 0;
                var next = 0;
                var xframe = 0;

                function defaultThumb() {
                    el.attr('src', mainSrc);
                }
                el.mouseenter(function() {
                    el.css({
                        'width': '2600px',
                        'max-width': 'none',
                        'height': '145px'
                    });
                    el.attr('src', preview);
                    timer = setInterval(function() {
                        next += 260;
                        xframe += 1;
                        el.css('margin-left', -Math.floor(next));
                        if (xframe === 9) {
                            next = 0
                            xframe = 0
                        }
                    }, 1000);
                });
                el.mouseleave(function() {
                    clearInterval(timer);
                    defaultThumb();
                    el.attr('style', '');
                });
            }
        }
        if (server === 'upload') {
            if (preview !== '') {
                function defaultThumb() {
                    el.attr('src', mainSrc);
                }
                el.mouseenter(function() {
                    prevArr = preview.split(",");
                    if(prevArr.length) {
	                    var startIndex = 0;
	                    el.attr('src', prevArr[startIndex]);
	                    startIndex++;
	                    timer = setInterval(function() {
	                    	el.attr('src', prevArr[startIndex]);
	                    	startIndex = startIndex == prevArr.length - 1 ? 0 : startIndex + 1;
	                    }, 1000);
                    }
                });
                el.mouseleave(function() {
                    clearInterval(timer);
                    defaultThumb();
                });
            }
        }
    });
    window.onerror = stopError;
    $('a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
        event.preventDefault();
        $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
        $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
        $('a[href="#toggle-search"]').closest('li').toggleClass('active');
        if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
            setTimeout(function() {
                $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
            }, 100);
        }
    });
    $(document).on('keyup', function(event) {
        if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
            $('a[href="#toggle-search"]').trigger('click');
        }
    });
});

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
var loadWarning = true;
if (getCookie('warning18') !== null) {
    loadWarning = false;
}
$(window).load(function() {
    // if (loadWarning) {
    //     $('#warningPopup').modal('show');
    // }
    // $('#warningPopup').on('hidden.bs.modal', function(e) {
    //     setCookie('warning18', 'successfull')
    // })
    $(document).on('click', '.warning-exit', function() {
        window.open('', '_blank');
        window.close();
    })
});

(function($){$.extend({tablesorter: new
function(){var parsers=[],widgets=[];this.defaults={cssHeader:"header",cssAsc:"headerSortUp",cssDesc:"headerSortDown",cssChildRow:"expand-child",sortInitialOrder:"asc",sortMultiSortKey:"shiftKey",sortForce:null,sortAppend:null,sortLocaleCompare:true,textExtraction:"simple",parsers:{},widgets:[],widgetZebra:{css:["even","odd"]},headers:{},widthFixed:true,cancelSelection:true,sortList:[],headerList:[],dateFormat:"us",decimal:'/\.|\,/g',onRenderHeader:null,selectorHeaders:'thead th',debug:false};function benchmark(s,d){log(s+","+(new Date().getTime()-d.getTime())+"ms");}
this.benchmark=benchmark;function log(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s);}else{alert(s);}}
function buildParserCache(table,$headers){if(table.config.debug){var parsersDebug="";}
if(table.tBodies.length==0)return;var rows=table.tBodies[0].rows;if(rows[0]){var list=[],cells=rows[0].cells,l=cells.length;for(var i=0;i<l;i++){var p=false;if($.metadata&&($($headers[i]).metadata()&&$($headers[i]).metadata().sorter)){p=getParserById($($headers[i]).metadata().sorter);}else if((table.config.headers[i]&&table.config.headers[i].sorter)){p=getParserById(table.config.headers[i].sorter);}
if(!p){p=detectParserForColumn(table,rows,-1,i);}
if(table.config.debug){parsersDebug+="column:"+i+" parser:"+p.id+"\n";}
list.push(p);}}
if(table.config.debug){log(parsersDebug);}
return list;};function detectParserForColumn(table,rows,rowIndex,cellIndex){var l=parsers.length,node=false,nodeValue=false,keepLooking=true;while(nodeValue==''&&keepLooking){rowIndex++;if(rows[rowIndex]){node=getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex);nodeValue=trimAndGetNodeText(table.config,node);if(table.config.debug){log('Checking if value was empty on row:'+rowIndex);}}else{keepLooking=false;}}
for(var i=1;i<l;i++){if(parsers[i].is(nodeValue,table,node)){return parsers[i];}}
return parsers[0];}
function getNodeFromRowAndCellIndex(rows,rowIndex,cellIndex){return rows[rowIndex].cells[cellIndex];}
function trimAndGetNodeText(config,node){return $.trim(getElementText(config,node));}
function getParserById(name){var l=parsers.length;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==name.toLowerCase()){return parsers[i];}}
return false;}
function buildCache(table){if(table.config.debug){var cacheTime=new Date();}
var totalRows=(table.tBodies[0]&&table.tBodies[0].rows.length)||0,totalCells=(table.tBodies[0].rows[0]&&table.tBodies[0].rows[0].cells.length)||0,parsers=table.config.parsers,cache={row:[],normalized:[]};for(var i=0;i<totalRows;++i){var c=$(table.tBodies[0].rows[i]),cols=[];if(c.hasClass(table.config.cssChildRow)){cache.row[cache.row.length-1]=cache.row[cache.row.length-1].add(c);continue;}
cache.row.push(c);for(var j=0;j<totalCells;++j){cols.push(parsers[j].format(getElementText(table.config,c[0].cells[j]),table,c[0].cells[j]));}
cols.push(cache.normalized.length);cache.normalized.push(cols);cols=null;};if(table.config.debug){benchmark("Building cache for "+totalRows+" rows:",cacheTime);}
return cache;};function getElementText(config,node){var text="";if(!node)return"";if(!config.supportsTextContent)config.supportsTextContent=node.textContent||false;if(config.textExtraction=="simple"){if(config.supportsTextContent){text=node.textContent;}else{if(node.childNodes[0]&&node.childNodes[0].hasChildNodes()){text=node.childNodes[0].innerHTML;}else{text=node.innerHTML;}}}else{if(typeof(config.textExtraction)=="function"){text=config.textExtraction(node);}else{text=$(node).text();}}
return text;}
function appendToTable(table,cache){if(table.config.debug){var appendTime=new Date()}
var c=cache,r=c.row,n=c.normalized,totalRows=n.length,checkCell=(n[0].length-1),tableBody=$(table.tBodies[0]),rows=[];for(var i=0;i<totalRows;i++){var pos=n[i][checkCell];rows.push(r[pos]);if(!table.config.appender){var l=r[pos].length;for(var j=0;j<l;j++){tableBody[0].appendChild(r[pos][j]);}}}
if(table.config.appender){table.config.appender(table,rows);}
rows=null;if(table.config.debug){benchmark("Rebuilt table:",appendTime);}
applyWidget(table);setTimeout(function(){$(table).trigger("sortEnd");},0);};function buildHeaders(table){if(table.config.debug){var time=new Date();}
var meta=($.metadata)?true:false;var header_index=computeTableHeaderCellIndexes(table);$tableHeaders=$(table.config.selectorHeaders,table).each(function(index){this.column=header_index[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=formatSortingOrder(table.config.sortInitialOrder);this.count=this.order;if(checkHeaderMetadata(this)||checkHeaderOptions(table,index))this.sortDisabled=true;if(checkHeaderOptionsSortingLocked(table,index))this.order=this.lockedOrder=checkHeaderOptionsSortingLocked(table,index);if(!this.sortDisabled){var $th=$(this).addClass(table.config.cssHeader);if(table.config.onRenderHeader)table.config.onRenderHeader.apply($th);}
table.config.headerList[index]=this;});if(table.config.debug){benchmark("Built headers:",time);log($tableHeaders);}
return $tableHeaders;};function computeTableHeaderCellIndexes(t){var matrix=[];var lookup={};var thead=t.getElementsByTagName('THEAD')[0];var trs=thead.getElementsByTagName('TR');for(var i=0;i<trs.length;i++){var cells=trs[i].cells;for(var j=0;j<cells.length;j++){var c=cells[j];var rowIndex=c.parentNode.rowIndex;var cellId=rowIndex+"-"+c.cellIndex;var rowSpan=c.rowSpan||1;var colSpan=c.colSpan||1
var firstAvailCol;if(typeof(matrix[rowIndex])=="undefined"){matrix[rowIndex]=[];}
for(var k=0;k<matrix[rowIndex].length+1;k++){if(typeof(matrix[rowIndex][k])=="undefined"){firstAvailCol=k;break;}}
lookup[cellId]=firstAvailCol;for(var k=rowIndex;k<rowIndex+rowSpan;k++){if(typeof(matrix[k])=="undefined"){matrix[k]=[];}
var matrixrow=matrix[k];for(var l=firstAvailCol;l<firstAvailCol+colSpan;l++){matrixrow[l]="x";}}}}
return lookup;}
function checkCellColSpan(table,rows,row){var arr=[],r=table.tHead.rows,c=r[row].cells;for(var i=0;i<c.length;i++){var cell=c[i];if(cell.colSpan>1){arr=arr.concat(checkCellColSpan(table,headerArr,row++));}else{if(table.tHead.length==1||(cell.rowSpan>1||!r[row+1])){arr.push(cell);}}}
return arr;};function checkHeaderMetadata(cell){if(($.metadata)&&($(cell).metadata().sorter===false)){return true;};return false;}
function checkHeaderOptions(table,i){if((table.config.headers[i])&&(table.config.headers[i].sorter===false)){return true;};return false;}
function checkHeaderOptionsSortingLocked(table,i){if((table.config.headers[i])&&(table.config.headers[i].lockedOrder))return table.config.headers[i].lockedOrder;return false;}
function applyWidget(table){var c=table.config.widgets;var l=c.length;for(var i=0;i<l;i++){getWidgetById(c[i]).format(table);}}
function getWidgetById(name){var l=widgets.length;for(var i=0;i<l;i++){if(widgets[i].id.toLowerCase()==name.toLowerCase()){return widgets[i];}}};function formatSortingOrder(v){if(typeof(v)!="Number"){return(v.toLowerCase()=="desc")?1:0;}else{return(v==1)?1:0;}}
function isValueInArray(v,a){var l=a.length;for(var i=0;i<l;i++){if(a[i][0]==v){return true;}}
return false;}
function setHeadersCss(table,$headers,list,css){$headers.removeClass(css[0]).removeClass(css[1]);var h=[];$headers.each(function(offset){if(!this.sortDisabled){h[this.column]=$(this);}});var l=list.length;for(var i=0;i<l;i++){h[list[i][0]].addClass(css[list[i][1]]);}}
function fixColumnWidth(table,$headers){var c=table.config;if(c.widthFixed){var colgroup=$('<colgroup>');$("tr:first td",table.tBodies[0]).each(function(){colgroup.append($('<col>').css('width',$(this).width()));});$(table).prepend(colgroup);};}
function updateHeaderSortCount(table,sortList){var c=table.config,l=sortList.length;for(var i=0;i<l;i++){var s=sortList[i],o=c.headerList[s[0]];o.count=s[1];o.count++;}}
function multisort(table,sortList,cache){if(table.config.debug){var sortTime=new Date();}
var dynamicExp="var sortWrapper = function(a,b) {",l=sortList.length;for(var i=0;i<l;i++){var c=sortList[i][0];var order=sortList[i][1];var s=(table.config.parsers[c].type=="text")?((order==0)?makeSortFunction("text","asc",c):makeSortFunction("text","desc",c)):((order==0)?makeSortFunction("numeric","asc",c):makeSortFunction("numeric","desc",c));var e="e"+i;dynamicExp+="var "+e+" = "+s;dynamicExp+="if("+e+") { return "+e+"; } ";dynamicExp+="else { ";}
var orgOrderCol=cache.normalized[0].length-1;dynamicExp+="return a["+orgOrderCol+"]-b["+orgOrderCol+"];";for(var i=0;i<l;i++){dynamicExp+="}; ";}
dynamicExp+="return 0; ";dynamicExp+="}; ";if(table.config.debug){benchmark("Evaling expression:"+dynamicExp,new Date());}
eval(dynamicExp);cache.normalized.sort(sortWrapper);if(table.config.debug){benchmark("Sorting on "+sortList.toString()+" and dir "+order+" time:",sortTime);}
return cache;};function makeSortFunction(type,direction,index){var a="a["+index+"]",b="b["+index+"]";if(type=='text'&&direction=='asc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+a+" < "+b+") ? -1 : 1 )));";}else if(type=='text'&&direction=='desc'){return"("+a+" == "+b+" ? 0 : ("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : ("+b+" < "+a+") ? -1 : 1 )));";}else if(type=='numeric'&&direction=='asc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+a+" - "+b+"));";}else if(type=='numeric'&&direction=='desc'){return"("+a+" === null && "+b+" === null) ? 0 :("+a+" === null ? Number.POSITIVE_INFINITY : ("+b+" === null ? Number.NEGATIVE_INFINITY : "+b+" - "+a+"));";}};function makeSortText(i){return"((a["+i+"] < b["+i+"]) ? -1 : ((a["+i+"] > b["+i+"]) ? 1 : 0));";};function makeSortTextDesc(i){return"((b["+i+"] < a["+i+"]) ? -1 : ((b["+i+"] > a["+i+"]) ? 1 : 0));";};function makeSortNumeric(i){return"a["+i+"]-b["+i+"];";};function makeSortNumericDesc(i){return"b["+i+"]-a["+i+"];";};function sortText(a,b){if(table.config.sortLocaleCompare)return a.localeCompare(b);return((a<b)?-1:((a>b)?1:0));};function sortTextDesc(a,b){if(table.config.sortLocaleCompare)return b.localeCompare(a);return((b<a)?-1:((b>a)?1:0));};function sortNumeric(a,b){return a-b;};function sortNumericDesc(a,b){return b-a;};function getCachedSortType(parsers,i){return parsers[i].type;};this.construct=function(settings){return this.each(function(){if(!this.tHead||!this.tBodies)return;var $this,$document,$headers,cache,config,shiftDown=0,sortOrder;this.config={};config=$.extend(this.config,$.tablesorter.defaults,settings);$this=$(this);$.data(this,"tablesorter",config);$headers=buildHeaders(this);this.config.parsers=buildParserCache(this,$headers);cache=buildCache(this);var sortCSS=[config.cssDesc,config.cssAsc];fixColumnWidth(this);$headers.click(function(e){var totalRows=($this[0].tBodies[0]&&$this[0].tBodies[0].rows.length)||0;if(!this.sortDisabled&&totalRows>0){$this.trigger("sortStart");var $cell=$(this);var i=this.column;this.order=this.count++%2;if(this.lockedOrder)this.order=this.lockedOrder;if(!e[config.sortMultiSortKey]){config.sortList=[];if(config.sortForce!=null){var a=config.sortForce;for(var j=0;j<a.length;j++){if(a[j][0]!=i){config.sortList.push(a[j]);}}}
config.sortList.push([i,this.order]);}else{if(isValueInArray(i,config.sortList)){for(var j=0;j<config.sortList.length;j++){var s=config.sortList[j],o=config.headerList[s[0]];if(s[0]==i){o.count=s[1];o.count++;s[1]=o.count%2;}}}else{config.sortList.push([i,this.order]);}};setTimeout(function(){setHeadersCss($this[0],$headers,config.sortList,sortCSS);appendToTable($this[0],multisort($this[0],config.sortList,cache));},1);return false;}}).mousedown(function(){if(config.cancelSelection){this.onselectstart=function(){return false};return false;}});$this.bind("update",function(){var me=this;setTimeout(function(){me.config.parsers=buildParserCache(me,$headers);cache=buildCache(me);},1);}).bind("updateCell",function(e,cell){var config=this.config;var pos=[(cell.parentNode.rowIndex-1),cell.cellIndex];cache.normalized[pos[0]][pos[1]]=config.parsers[pos[1]].format(getElementText(config,cell),cell);}).bind("sorton",function(e,list){$(this).trigger("sortStart");config.sortList=list;var sortList=config.sortList;updateHeaderSortCount(this,sortList);setHeadersCss(this,$headers,sortList,sortCSS);appendToTable(this,multisort(this,sortList,cache));}).bind("appendCache",function(){appendToTable(this,cache);}).bind("applyWidgetId",function(e,id){getWidgetById(id).format(this);}).bind("applyWidgets",function(){applyWidget(this);});if($.metadata&&($(this).metadata()&&$(this).metadata().sortlist)){config.sortList=$(this).metadata().sortlist;}
if(config.sortList.length>0){$this.trigger("sorton",[config.sortList]);}
applyWidget(this);});};this.addParser=function(parser){var l=parsers.length,a=true;for(var i=0;i<l;i++){if(parsers[i].id.toLowerCase()==parser.id.toLowerCase()){a=false;}}
if(a){parsers.push(parser);};};this.addWidget=function(widget){widgets.push(widget);};this.formatFloat=function(s){var i=parseFloat(s);return(isNaN(i))?0:i;};this.formatInt=function(s){var i=parseInt(s);return(isNaN(i))?0:i;};this.isDigit=function(s,config){return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g,'')));};this.clearTableBody=function(table){if($.browser.msie){function empty(){while(this.firstChild)this.removeChild(this.firstChild);}
empty.apply(table.tBodies[0]);}else{table.tBodies[0].innerHTML="";}};}});$.fn.extend({tablesorter:$.tablesorter.construct});var ts=$.tablesorter;ts.addParser({id:"text",is:function(s){return true;},format:function(s){return $.trim(s.toLocaleLowerCase());},type:"text"});ts.addParser({id:"digit",is:function(s,table){var c=table.config;return $.tablesorter.isDigit(s,c);},format:function(s){return $.tablesorter.formatFloat(s);},type:"numeric"});ts.addParser({id:"currency",is:function(s){return /^[£$€?.]/.test(s);},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g),""));},type:"numeric"});ts.addParser({id:"ipAddress",is:function(s){return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);},format:function(s){var a=s.split("."),r="",l=a.length;for(var i=0;i<l;i++){var item=a[i];if(item.length==2){r+="0"+item;}else{r+=item;}}
return $.tablesorter.formatFloat(r);},type:"numeric"});ts.addParser({id:"url",is:function(s){return /^(https?|ftp|file):\/\/$/.test(s);},format:function(s){return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//),''));},type:"text"});ts.addParser({id:"isoDate",is:function(s){return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);},format:function(s){return $.tablesorter.formatFloat((s!="")?new Date(s.replace(new RegExp(/-/g),"/")).getTime():"0");},type:"numeric"});ts.addParser({id:"percent",is:function(s){return /\%$/.test($.trim(s));},format:function(s){return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g),""));},type:"numeric"});ts.addParser({id:"usLongDate",is:function(s){return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));},format:function(s){return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"shortDate",is:function(s){return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);},format:function(s,table){var c=table.config;s=s.replace(/\-/g,"/");if(c.dateFormat=="us"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$1/$2");}else if(c.dateFormat=="uk"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/,"$3/$2/$1");}else if(c.dateFormat=="dd/mm/yy"||c.dateFormat=="dd-mm-yy"){s=s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/,"$1/$2/$3");}
return $.tablesorter.formatFloat(new Date(s).getTime());},type:"numeric"});ts.addParser({id:"time",is:function(s){return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);},format:function(s){return $.tablesorter.formatFloat(new Date("2000/01/01 "+s).getTime());},type:"numeric"});ts.addParser({id:"metadata",is:function(s){return false;},format:function(s,table,cell){var c=table.config,p=(!c.parserMetadataName)?'sortValue':c.parserMetadataName;return $(cell).metadata()[p];},type:"numeric"});ts.addWidget({id:"zebra",format:function(table){if(table.config.debug){var time=new Date();}
var $tr,row=-1,odd;$("tr:visible",table.tBodies[0]).each(function(i){$tr=$(this);if(!$tr.hasClass(table.config.cssChildRow))row++;odd=(row%2==0);$tr.removeClass(table.config.widgetZebra.css[odd?0:1]).addClass(table.config.widgetZebra.css[odd?1:0])});if(table.config.debug){$.tablesorter.benchmark("Applying Zebra widget",time);}}});})(jQuery);
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){$.timeago=function(timestamp){if(timestamp instanceof Date){return inWords(timestamp);}else if(typeof timestamp==="string"){return inWords($.timeago.parse(timestamp));}else if(typeof timestamp==="number"){return inWords(new Date(timestamp));}else{return inWords($.timeago.datetime(timestamp));}};var $t=$.timeago;$.extend($.timeago,{settings:{refreshMillis:60000,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"Ago",suffixFromNow:"Recently",inPast:'Any moment now',seconds:"0 Minute ",minute:"1 Minute ",minutes:"%d Minute",hour:"1 Hours ",hours:"%d hours",day:"1 Day",days:"%d Days",month:"1 Month ",months:"%d Months",year:"1 Year ",years:"%d Years",wordSeparator:" ",numbers:[]}},inWords:function(distanceMillis){if(!this.settings.allowPast&&!this.settings.allowFuture){throw'timeago allowPast and allowFuture settings can not both be set to false.';} var $l=this.settings.strings;var prefix=$l.prefixAgo;var suffix=$l.suffixAgo;if(this.settings.allowFuture){if(distanceMillis<0){prefix=$l.prefixFromNow;suffix=$l.suffixFromNow;}} if(!this.settings.allowPast&&distanceMillis>=0){return this.settings.strings.inPast;} var seconds=Math.abs(distanceMillis)/ 1000;var minutes=seconds / 60;var hours=minutes / 60;var days=hours / 24;var years=days / 365;function substitute(stringOrFunction,number){var string=$.isFunction(stringOrFunction)?stringOrFunction(number,distanceMillis):stringOrFunction;var value=($l.numbers&&$l.numbers[number])||number;return string.replace(/%d/i,value);} var words=seconds<45&&substitute($l.seconds,Math.round(seconds))||seconds<90&&substitute($l.minute,1)||minutes<45&&substitute($l.minutes,Math.round(minutes))||minutes<90&&substitute($l.hour,1)||hours<24&&substitute($l.hours,Math.round(hours))||hours<42&&substitute($l.day,1)||days<30&&substitute($l.days,Math.round(days))||days<45&&substitute($l.month,1)||days<365&&substitute($l.months,Math.round(days / 30))||years<1.5&&substitute($l.year,1)||substitute($l.years,Math.round(years));var separator=$l.wordSeparator||"";if($l.wordSeparator===undefined){separator=" ";} return $.trim([prefix,words,suffix].join(separator));},parse:function(iso8601){var s=$.trim(iso8601);s=s.replace(/\.\d+/,"");s=s.replace(/-/,"/").replace(/-/,"/");s=s.replace(/T/," ").replace(/Z/," UTC");s=s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");s=s.replace(/([\+\-]\d\d)$/," $100");return new Date(s);},datetime:function(elem){var iso8601=$t.isTime(elem)?$(elem).attr("datetime"):$(elem).attr("title");return $t.parse(iso8601);},isTime:function(elem){return $(elem).get(0).tagName.toLowerCase()==="time";}});var functions={init:function(){var refresh_el=$.proxy(refresh,this);refresh_el();var $s=$t.settings;if($s.refreshMillis>0){this._timeagoInterval=setInterval(refresh_el,$s.refreshMillis);}},update:function(time){var parsedTime=$t.parse(time);$(this).data('timeago',{datetime:parsedTime});if($t.settings.localeTitle)$(this).attr("title",parsedTime.toLocaleString());refresh.apply(this);},updateFromDOM:function(){$(this).data('timeago',{datetime:$t.parse($t.isTime(this)?$(this).attr("datetime"):$(this).attr("title"))});refresh.apply(this);},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null;}}};$.fn.timeago=function(action,options){var fn=action?functions[action]:functions.init;if(!fn){throw new Error("Unknown function name '"+action+"' for timeago");} this.each(function(){fn.call(this,options);});return this;};function refresh(){if(!$.contains(document.documentElement,this)){$(this).timeago("dispose");return this;} var data=prepareData(this);var $s=$t.settings;if(!isNaN(data.datetime)){if($s.cutoff==0||Math.abs(distance(data.datetime))<$s.cutoff){$(this).text(inWords(data.datetime));}} return this;} function prepareData(element){element=$(element);if(!element.data("timeago")){element.data("timeago",{datetime:$t.datetime(element)});var text=$.trim(element.text());if($t.settings.localeTitle){element.attr("title",element.data('timeago').datetime.toLocaleString());}else if(text.length>0&&!($t.isTime(element)&&element.attr("title"))){element.attr("title",text);}} return element.data("timeago");} function inWords(date){return $t.inWords(distance(date));} function distance(date){return(new Date().getTime()-date.getTime());} document.createElement("abbr");document.createElement("time");}));
var speed=10000;canTick=true;$(document).ready(function(){$('.ticker-container ul div').each(function(i){if($(window).width()>=500){$(this).find('li').width($(window).width()-parseInt($(this).css('left')));} if(i==0){$(this).addClass('ticker-active');}else{$(this).addClass('not-active');} if($(this).find('li').height()>30){$(this).find('li').css({'height':'20px','width':'200%','text-align':'left','padding-left':'5px'});$(this).find('li').css('width',$(this).find('li span').width());}});startTicker();animateTickerElementHorz();});$(window).resize(function(){$('.ticker-container ul div').each(function(i){if($(this).find('li').height()>30){$(this).css({'height':'20px','width':'200%','text-align':'left','padding-left':'5px'});$(this).find('li').css('width',$(this).find('li span').width());}});});function startTicker(){setInterval(function(){if(canTick){$('.ticker-container ul div.ticker-active').removeClass('ticker-active').addClass('remove');if($('.ticker-container ul div.remove').next().length){$('.ticker-container ul div.remove').next().addClass('next');}else{$('.ticker-container ul div').first().addClass('next');} $('.ticker-container ul div.next').removeClass('not-active next').addClass('ticker-active');setTimeout(function(){$('.ticker-container ul div.remove').css('transition','0s ease-in-out').removeClass('remove').addClass('not-active finished');if($(window).width()<500){if($('.ticker-container ul div.finished li').width()<$(window).width()){$('.ticker-container ul div.finished').removeClass('finished');}}else{if($('.ticker-container ul div.finished li').width()<($(window).width()-(parseInt($('.ticker-container ul div.ticker-active').css('left'))+15))){$('.ticker-container ul div.finished').removeClass('finished');}} setTimeout(function(){$('.ticker-container ul div').css('transition','0.25s ease-in-out');},75);animateTickerElementHorz();},250);}},speed);} function animateTickerElementHorz(){if($(window).width()<500){if($('.ticker-container ul div.ticker-active li').width()>$(window).width()){setTimeout(function(){$('.ticker-container ul div.ticker-active li').animate({'margin-left':'-'+(($('.ticker-container ul div.ticker-active li').width()-$(window).width())+15)},speed-(speed / 5),'swing',function(){setTimeout(function(){$('.ticker-container ul div.finished').removeClass('finished').find('li').css('margin-left',0);},((speed / 5)/ 2));});},((speed / 5)/ 2));}}else{if($('.ticker-container ul div.ticker-active li').width()>($(window).width()-parseInt($('.ticker-container ul div.ticker-active').css('left')))){setTimeout(function(){$('.ticker-container ul div.ticker-active li').animate({'margin-left':Math.abs($('.ticker-container ul div.ticker-active li').width()-($(window).width()-parseInt($('.ticker-container ul div.ticker-active').css('left')))+15)*-1},speed-(speed / 5),'swing',function(){setTimeout(function(){$('.ticker-container ul div.finished').removeClass('finished').find('li').css('margin-left',0);},((speed / 5)/ 2));});},((speed / 5)/ 2));}}} $('.ticker-container').on('mouseover',function(){canTick=false;});$('.ticker-container').on('mouseout',function(){canTick=true;});
;var swfobject=function(){var aq="undefined",aD="object",ab="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",aE="application/x-shockwave-flash",ac="SWFObjectExprInst",ax="onreadystatechange",af=window,aL=document,aB=navigator,aa=false,Z=[aN],aG=[],ag=[],al=[],aJ,ad,ap,at,ak=false,aU=false,aH,an,aI=true,ah=function(){var a=typeof aL.getElementById!=aq&&typeof aL.getElementsByTagName!=aq&&typeof aL.createElement!=aq,e=aB.userAgent.toLowerCase(),c=aB.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(e),j=c?/mac/.test(c):/mac/.test(e),g=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,d=!+"\v1",f=[0,0,0],k=null;if(typeof aB.plugins!=aq&&typeof aB.plugins[ab]==aD){k=aB.plugins[ab].description;if(k&&!(typeof aB.mimeTypes!=aq&&aB.mimeTypes[aE]&&!aB.mimeTypes[aE].enabledPlugin)){aa=true;d=false;k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");f[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10);f[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);f[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof af.ActiveXObject!=aq){try{var i=new ActiveXObject(X);if(i){k=i.GetVariable("$version");if(k){d=true;k=k.split(" ")[1].split(",");f=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)];}}}catch(b){}}}return{w3:a,pv:f,wk:g,ie:d,win:h,mac:j};}(),aK=function(){if(!ah.w3){return;}if((typeof aL.readyState!=aq&&aL.readyState=="complete")||(typeof aL.readyState==aq&&(aL.getElementsByTagName("body")[0]||aL.body))){aP();}if(!ak){if(typeof aL.addEventListener!=aq){aL.addEventListener("DOMContentLoaded",aP,false);}if(ah.ie&&ah.win){aL.attachEvent(ax,function(){if(aL.readyState=="complete"){aL.detachEvent(ax,arguments.callee);aP();}});if(af==top){(function(){if(ak){return;}try{aL.documentElement.doScroll("left");}catch(a){setTimeout(arguments.callee,0);return;}aP();})();}}if(ah.wk){(function(){if(ak){return;}if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);return;}aP();})();}aC(aP);}}();function aP(){if(ak){return;}try{var b=aL.getElementsByTagName("body")[0].appendChild(ar("span"));b.parentNode.removeChild(b);}catch(a){return;}ak=true;var d=Z.length;for(var c=0;c<d;c++){Z[c]();}}function aj(a){if(ak){a();}else{Z[Z.length]=a;}}function aC(a){if(typeof af.addEventListener!=aq){af.addEventListener("load",a,false);}else{if(typeof aL.addEventListener!=aq){aL.addEventListener("load",a,false);}else{if(typeof af.attachEvent!=aq){aM(af,"onload",a);}else{if(typeof af.onload=="function"){var b=af.onload;af.onload=function(){b();a();};}else{af.onload=a;}}}}}function aN(){if(aa){Y();}else{am();}}function Y(){var d=aL.getElementsByTagName("body")[0];var b=ar(aD);b.setAttribute("type",aE);var a=d.appendChild(b);if(a){var c=0;(function(){if(typeof a.GetVariable!=aq){var e=a.GetVariable("$version");if(e){e=e.split(" ")[1].split(",");ah.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)];}}else{if(c<10){c++;setTimeout(arguments.callee,10);return;}}d.removeChild(b);a=null;am();})();}else{am();}}function am(){var g=aG.length;if(g>0){for(var h=0;h<g;h++){var c=aG[h].id;var l=aG[h].callbackFn;var a={success:false,id:c};if(ah.pv[0]>0){var i=aS(c);if(i){if(ao(aG[h].swfVersion)&&!(ah.wk&&ah.wk<312)){ay(c,true);if(l){a.success=true;a.ref=av(c);l(a);}}else{if(aG[h].expressInstall&&au()){var e={};e.data=aG[h].expressInstall;e.width=i.getAttribute("width")||"0";e.height=i.getAttribute("height")||"0";if(i.getAttribute("class")){e.styleclass=i.getAttribute("class");}if(i.getAttribute("align")){e.align=i.getAttribute("align");}var f={};var d=i.getElementsByTagName("param");var k=d.length;for(var j=0;j<k;j++){if(d[j].getAttribute("name").toLowerCase()!="movie"){f[d[j].getAttribute("name")]=d[j].getAttribute("value");}}ae(e,f,c,l);}else{aF(i);if(l){l(a);}}}}}else{ay(c,true);if(l){var b=av(c);if(b&&typeof b.SetVariable!=aq){a.success=true;a.ref=b;}l(a);}}}}}function av(b){var d=null;var c=aS(b);if(c&&c.nodeName=="OBJECT"){if(typeof c.SetVariable!=aq){d=c;}else{var a=c.getElementsByTagName(aD)[0];if(a){d=a;}}}return d;}function au(){return!aU&&ao("6.0.65")&&(ah.win||ah.mac)&&!(ah.wk&&ah.wk<312);}function ae(f,d,h,e){aU=true;ap=e||null;at={success:false,id:h};var a=aS(h);if(a){if(a.nodeName=="OBJECT"){aJ=aO(a);ad=null;}else{aJ=a;ad=h;}f.id=ac;if(typeof f.width==aq||(!/%$/.test(f.width)&&parseInt(f.width,10)<310)){f.width="310";}if(typeof f.height==aq||(!/%$/.test(f.height)&&parseInt(f.height,10)<137)){f.height="137";}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";var b=ah.ie&&ah.win?"ActiveX":"PlugIn",c="MMredirectURL="+af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;if(typeof d.flashvars!=aq){d.flashvars+="&"+c;}else{d.flashvars=c;}if(ah.ie&&ah.win&&a.readyState!=4){var g=ar("div");h+="SWFObjectNew";g.setAttribute("id",h);a.parentNode.insertBefore(g,a);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a);}else{setTimeout(arguments.callee,10);}})();}aA(f,d,h);}}function aF(a){if(ah.ie&&ah.win&&a.readyState!=4){var b=ar("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(aO(a),b);a.style.display="none";(function(){if(a.readyState==4){a.parentNode.removeChild(a);}else{setTimeout(arguments.callee,10);}})();}else{a.parentNode.replaceChild(aO(a),a);}}function aO(b){var d=ar("div");if(ah.win&&ah.ie){d.innerHTML=b.innerHTML;}else{var e=b.getElementsByTagName(aD)[0];if(e){var a=e.childNodes;if(a){var f=a.length;for(var c=0;c<f;c++){if(!(a[c].nodeType==1&&a[c].nodeName=="PARAM")&&!(a[c].nodeType==8)){d.appendChild(a[c].cloneNode(true));}}}}}return d;}function aA(e,g,c){var d,a=aS(c);if(ah.wk&&ah.wk<312){return d;}if(a){if(typeof e.id==aq){e.id=c;}if(ah.ie&&ah.win){var f="";for(var i in e){if(e[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){g.movie=e[i];}else{if(i.toLowerCase()=="styleclass"){f+=' class="'+e[i]+'"';}else{if(i.toLowerCase()!="classid"){f+=" "+i+'="'+e[i]+'"';}}}}}var h="";for(var j in g){if(g[j]!=Object.prototype[j]){h+='<param name="'+j+'" value="'+g[j]+'" />';}}a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+h+"</object>";ag[ag.length]=e.id;d=aS(e.id);}else{var b=ar(aD);b.setAttribute("type",aE);for(var k in e){if(e[k]!=Object.prototype[k]){if(k.toLowerCase()=="styleclass"){b.setAttribute("class",e[k]);}else{if(k.toLowerCase()!="classid"){b.setAttribute(k,e[k]);}}}}for(var l in g){if(g[l]!=Object.prototype[l]&&l.toLowerCase()!="movie"){aQ(b,l,g[l]);}}a.parentNode.replaceChild(b,a);d=b;}}return d;}function aQ(b,d,c){var a=ar("param");a.setAttribute("name",d);a.setAttribute("value",c);b.appendChild(a);}function aw(a){var b=aS(a);if(b&&b.nodeName=="OBJECT"){if(ah.ie&&ah.win){b.style.display="none";(function(){if(b.readyState==4){aT(a);}else{setTimeout(arguments.callee,10);}})();}else{b.parentNode.removeChild(b);}}}function aT(a){var b=aS(a);if(b){for(var c in b){if(typeof b[c]=="function"){b[c]=null;}}b.parentNode.removeChild(b);}}function aS(a){var c=null;try{c=aL.getElementById(a);}catch(b){}return c;}function ar(a){return aL.createElement(a);}function aM(a,c,b){a.attachEvent(c,b);al[al.length]=[a,c,b];}function ao(a){var b=ah.pv,c=a.split(".");c[0]=parseInt(c[0],10);c[1]=parseInt(c[1],10)||0;c[2]=parseInt(c[2],10)||0;return(b[0]>c[0]||(b[0]==c[0]&&b[1]>c[1])||(b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]))?true:false;}function az(b,f,a,c){if(ah.ie&&ah.mac){return;}var e=aL.getElementsByTagName("head")[0];if(!e){return;}var g=(a&&typeof a=="string")?a:"screen";if(c){aH=null;an=null;}if(!aH||an!=g){var d=ar("style");d.setAttribute("type","text/css");d.setAttribute("media",g);aH=e.appendChild(d);if(ah.ie&&ah.win&&typeof aL.styleSheets!=aq&&aL.styleSheets.length>0){aH=aL.styleSheets[aL.styleSheets.length-1];}an=g;}if(ah.ie&&ah.win){if(aH&&typeof aH.addRule==aD){aH.addRule(b,f);}}else{if(aH&&typeof aL.createTextNode!=aq){aH.appendChild(aL.createTextNode(b+" {"+f+"}"));}}}function ay(a,c){if(!aI){return;}var b=c?"visible":"hidden";if(ak&&aS(a)){aS(a).style.visibility=b;}else{az("#"+a,"visibility:"+b);}}function ai(b){var a=/[\\\"<>\.;]/;var c=a.exec(b)!=null;return c&&typeof encodeURIComponent!=aq?encodeURIComponent(b):b;}var aR=function(){if(ah.ie&&ah.win){window.attachEvent("onunload",function(){var a=al.length;for(var b=0;b<a;b++){al[b][0].detachEvent(al[b][1],al[b][2]);}var d=ag.length;for(var c=0;c<d;c++){aw(ag[c]);}for(var e in ah){ah[e]=null;}ah=null;for(var f in swfobject){swfobject[f]=null;}swfobject=null;});}}();return{registerObject:function(a,e,c,b){if(ah.w3&&a&&e){var d={};d.id=a;d.swfVersion=e;d.expressInstall=c;d.callbackFn=b;aG[aG.length]=d;ay(a,false);}else{if(b){b({success:false,id:a});}}},getObjectById:function(a){if(ah.w3){return av(a);}},embedSWF:function(k,e,h,f,c,a,b,i,g,j){var d={success:false,id:e};if(ah.w3&&!(ah.wk&&ah.wk<312)&&k&&e&&h&&f&&c){ay(e,false);aj(function(){h+="";f+="";var q={};if(g&&typeof g===aD){for(var o in g){q[o]=g[o];}}q.data=k;q.width=h;q.height=f;var n={};if(i&&typeof i===aD){for(var p in i){n[p]=i[p];}}if(b&&typeof b===aD){for(var l in b){if(typeof n.flashvars!=aq){n.flashvars+="&"+l+"="+b[l];}else{n.flashvars=l+"="+b[l];}}}if(ao(c)){var m=aA(q,n,e);if(q.id==e){ay(e,true);}d.success=true;d.ref=m;}else{if(a&&au()){q.data=a;ae(q,n,e,j);return;}else{ay(e,true);}}if(j){j(d);}});}else{if(j){j(d);}}},switchOffAutoHideShow:function(){aI=false;},ua:ah,getFlashPlayerVersion:function(){return{major:ah.pv[0],minor:ah.pv[1],release:ah.pv[2]};},hasFlashPlayerVersion:ao,createSWF:function(a,b,c){if(ah.w3){return aA(a,b,c);}else{return undefined;}},showExpressInstall:function(b,a,d,c){if(ah.w3&&au()){ae(b,a,d,c);}},removeSWF:function(a){if(ah.w3){aw(a);}},createCSS:function(b,a,c,d){if(ah.w3){az(b,a,c,d);}},addDomLoadEvent:aj,addLoadEvent:aC,getQueryParamValue:function(b){var a=aL.location.search||aL.location.hash;if(a){if(/\?/.test(a)){a=a.split("?")[1];}if(b==null){return ai(a);}var c=a.split("&");for(var d=0;d<c.length;d++){if(c[d].substring(0,c[d].indexOf("="))==b){return ai(c[d].substring((c[d].indexOf("=")+1)));}}}return"";},expressInstallCallback:function(){if(aU){var a=aS(ac);if(a&&aJ){a.parentNode.replaceChild(aJ,a);if(ad){ay(ad,true);if(ah.ie&&ah.win){aJ.style.display="block";}}if(ap){ap(at);}}aU=false;}}};}();var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(b){this.initSWFUpload(b);};}SWFUpload.prototype.initSWFUpload=function(c){try{this.customSettings={};this.settings=c;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo();}catch(d){delete SWFUpload.instances[this.movieName];throw d;}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(e){if(typeof(e)!=="string"||e.match(/^https?:\/\//i)||e.match(/^\//)){return e;}var f=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var d=window.location.pathname.lastIndexOf("/");if(d<=0){path="/";}else{path=window.location.pathname.substr(0,d)+"/";}return path+e;};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(c,d){this.settings[c]=(this.settings[c]==undefined)?d:this.settings[c];};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime();}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url);}delete this.ensureDefault;};SWFUpload.prototype.loadFlash=function(){var d,c;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added";}d=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(d==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id;}c=document.createElement("div");c.innerHTML=this.getFlashHTML();d.parentNode.replaceChild(c.firstChild,d);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement();}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("");};SWFUpload.prototype.getFlashVars=function(){var c=this.buildParamString();var d=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(d),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(c),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("");};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName);}if(this.movieElement===null){throw"Could not find Flash element";}return this.movieElement;};SWFUpload.prototype.buildParamString=function(){var f=this.settings.post_params;var d=[];if(typeof(f)==="object"){for(var e in f){if(f.hasOwnProperty(e)){d.push(encodeURIComponent(e.toString())+"="+encodeURIComponent(f[e].toString()));}}}return d.join("&amp;");};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var g=null;g=this.getMovieElement();if(g&&typeof(g.CallFunction)==="unknown"){for(var j in g){try{if(typeof(g[j])==="function"){g[j]=null;}}catch(h){}}try{g.parentNode.removeChild(g);}catch(f){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true;}catch(i){return false;}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""));};SWFUpload.prototype.addSetting=function(d,f,e){if(f==undefined){return(this.settings[d]=e);}else{return(this.settings[d]=f);}};SWFUpload.prototype.getSetting=function(b){if(this.settings[b]!=undefined){return this.settings[b];}return"";};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString);}catch(ex){throw"Call to "+functionName+" failed";}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue);}return returnValue;};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile");};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles");};SWFUpload.prototype.startUpload=function(b){this.callFlash("StartUpload",[b]);};SWFUpload.prototype.cancelUpload=function(d,c){if(c!==false){c=true;}this.callFlash("CancelUpload",[d,c]);};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload");};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats");};SWFUpload.prototype.setStats=function(b){this.callFlash("SetStats",[b]);};SWFUpload.prototype.getFile=function(b){if(typeof(b)==="number"){return this.callFlash("GetFileByIndex",[b]);}else{return this.callFlash("GetFile",[b]);}};SWFUpload.prototype.addFileParam=function(e,d,f){return this.callFlash("AddFileParam",[e,d,f]);};SWFUpload.prototype.removeFileParam=function(d,c){this.callFlash("RemoveFileParam",[d,c]);};SWFUpload.prototype.setUploadURL=function(b){this.settings.upload_url=b.toString();this.callFlash("SetUploadURL",[b]);};SWFUpload.prototype.setPostParams=function(b){this.settings.post_params=b;this.callFlash("SetPostParams",[b]);};SWFUpload.prototype.addPostParam=function(d,c){this.settings.post_params[d]=c;this.callFlash("SetPostParams",[this.settings.post_params]);};SWFUpload.prototype.removePostParam=function(b){delete this.settings.post_params[b];this.callFlash("SetPostParams",[this.settings.post_params]);};SWFUpload.prototype.setFileTypes=function(d,c){this.settings.file_types=d;this.settings.file_types_description=c;this.callFlash("SetFileTypes",[d,c]);};SWFUpload.prototype.setFileSizeLimit=function(b){this.settings.file_size_limit=b;this.callFlash("SetFileSizeLimit",[b]);};SWFUpload.prototype.setFileUploadLimit=function(b){this.settings.file_upload_limit=b;this.callFlash("SetFileUploadLimit",[b]);};SWFUpload.prototype.setFileQueueLimit=function(b){this.settings.file_queue_limit=b;this.callFlash("SetFileQueueLimit",[b]);};SWFUpload.prototype.setFilePostName=function(b){this.settings.file_post_name=b;this.callFlash("SetFilePostName",[b]);};SWFUpload.prototype.setUseQueryString=function(b){this.settings.use_query_string=b;this.callFlash("SetUseQueryString",[b]);};SWFUpload.prototype.setRequeueOnError=function(b){this.settings.requeue_on_error=b;this.callFlash("SetRequeueOnError",[b]);};SWFUpload.prototype.setHTTPSuccess=function(b){if(typeof b==="string"){b=b.replace(" ","").split(",");}this.settings.http_success=b;this.callFlash("SetHTTPSuccess",[b]);};SWFUpload.prototype.setAssumeSuccessTimeout=function(b){this.settings.assume_success_timeout=b;this.callFlash("SetAssumeSuccessTimeout",[b]);};SWFUpload.prototype.setDebugEnabled=function(b){this.settings.debug_enabled=b;this.callFlash("SetDebugEnabled",[b]);};SWFUpload.prototype.setButtonImageURL=function(b){if(b==undefined){b="";}this.settings.button_image_url=b;this.callFlash("SetButtonImageURL",[b]);};SWFUpload.prototype.setButtonDimensions=function(f,e){this.settings.button_width=f;this.settings.button_height=e;var d=this.getMovieElement();if(d!=undefined){d.style.width=f+"px";d.style.height=e+"px";}this.callFlash("SetButtonDimensions",[f,e]);};SWFUpload.prototype.setButtonText=function(b){this.settings.button_text=b;this.callFlash("SetButtonText",[b]);};SWFUpload.prototype.setButtonTextPadding=function(c,d){this.settings.button_text_top_padding=d;this.settings.button_text_left_padding=c;this.callFlash("SetButtonTextPadding",[c,d]);};SWFUpload.prototype.setButtonTextStyle=function(b){this.settings.button_text_style=b;this.callFlash("SetButtonTextStyle",[b]);};SWFUpload.prototype.setButtonDisabled=function(b){this.settings.button_disabled=b;this.callFlash("SetButtonDisabled",[b]);};SWFUpload.prototype.setButtonAction=function(b){this.settings.button_action=b;this.callFlash("SetButtonAction",[b]);};SWFUpload.prototype.setButtonCursor=function(b){this.settings.button_cursor=b;this.callFlash("SetButtonCursor",[b]);};SWFUpload.prototype.queueEvent=function(d,f){if(f==undefined){f=[];}else{if(!(f instanceof Array)){f=[f];}}var e=this;if(typeof this.settings[d]==="function"){this.eventQueue.push(function(){this.settings[d].apply(this,f);});setTimeout(function(){e.executeNextEvent();},0);}else{if(this.settings[d]!==null){throw"Event handler "+d+" is unknown or is not a function";}}};SWFUpload.prototype.executeNextEvent=function(){var b=this.eventQueue?this.eventQueue.shift():null;if(typeof(b)==="function"){b.apply(this);}};SWFUpload.prototype.unescapeFilePostParams=function(l){var j=/[$]([0-9a-f]{4})/i;var i={};var k;if(l!=undefined){for(var h in l.post){if(l.post.hasOwnProperty(h)){k=h;var g;while((g=j.exec(k))!==null){k=k.replace(g[0],String.fromCharCode(parseInt("0x"+g[1],16)));}i[k]=l.post[h];}}l.post=i;}return l;};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface");}catch(b){return false;}};SWFUpload.prototype.flashReady=function(){var b=this.getMovieElement();if(!b){this.debug("Flash called back ready but the flash movie can't be found.");return;}this.cleanUp(b);this.queueEvent("swfupload_loaded_handler");};SWFUpload.prototype.cleanUp=function(f){try{if(this.movieElement&&typeof(f.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var h in f){try{if(typeof(f[h])==="function"){f[h]=null;}}catch(e){}}}}catch(g){}window.__flash__removeCallback=function(c,b){try{if(c){c[b]=null;}}catch(a){}};};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler");};SWFUpload.prototype.fileQueued=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("file_queued_handler",b);};SWFUpload.prototype.fileQueueError=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("file_queue_error_handler",[e,f,d]);};SWFUpload.prototype.fileDialogComplete=function(d,f,e){this.queueEvent("file_dialog_complete_handler",[d,f,e]);};SWFUpload.prototype.uploadStart=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("return_upload_start_handler",b);};SWFUpload.prototype.returnUploadStart=function(d){var c;if(typeof this.settings.upload_start_handler==="function"){d=this.unescapeFilePostParams(d);c=this.settings.upload_start_handler.call(this,d);}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function";}}if(c===undefined){c=true;}c=!!c;this.callFlash("ReturnUploadStart",[c]);};SWFUpload.prototype.uploadProgress=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("upload_progress_handler",[e,f,d]);};SWFUpload.prototype.uploadError=function(e,f,d){e=this.unescapeFilePostParams(e);this.queueEvent("upload_error_handler",[e,f,d]);};SWFUpload.prototype.uploadSuccess=function(d,e,f){d=this.unescapeFilePostParams(d);this.queueEvent("upload_success_handler",[d,e,f]);};SWFUpload.prototype.uploadComplete=function(b){b=this.unescapeFilePostParams(b);this.queueEvent("upload_complete_handler",b);};SWFUpload.prototype.debug=function(b){this.queueEvent("debug_handler",b);};SWFUpload.prototype.debugMessage=function(h){if(this.settings.debug){var f,g=[];if(typeof h==="object"&&typeof h.name==="string"&&typeof h.message==="string"){for(var e in h){if(h.hasOwnProperty(e)){g.push(e+": "+h[e]);}}f=g.join("\n")||"";g=f.split("\n");f="EXCEPTION: "+g.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(f);}else{SWFUpload.Console.writeLine(h);}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(g){var e,f;try{e=document.getElementById("SWFUpload_Console");if(!e){f=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(f);e=document.createElement("textarea");e.id="SWFUpload_Console";e.style.fontFamily="monospace";e.setAttribute("wrap","off");e.wrap="off";e.style.overflow="auto";e.style.width="700px";e.style.height="350px";e.style.margin="5px";f.appendChild(e);}e.value+=g+"\n";e.scrollTop=e.scrollHeight-e.clientHeight;}catch(h){alert("Exception: "+h.name+" Message: "+h.message);}};(function(c){var b={init:function(d,e){return this.each(function(){var n=c(this);var m=n.clone();var j=c.extend({id:n.attr("id"),swf:"uploadify.swf",uploader:"uploadify.php",auto:true,buttonClass:"",buttonCursor:"hand",buttonImage:null,buttonText:"SELECT FILES",checkExisting:false,debug:false,fileObjName:"Filedata",fileSizeLimit:0,fileTypeDesc:"All Files",fileTypeExts:"*.*",height:30,method:"post",multi:true,formData:{},preventCaching:true,progressData:"percentage",queueID:false,queueSizeLimit:999,removeCompleted:true,removeTimeout:3,requeueErrors:false,successTimeout:30,uploadLimit:0,width:120,overrideEvents:[]},d);var g={assume_success_timeout:j.successTimeout,button_placeholder_id:j.id,button_width:j.width,button_height:j.height,button_text:null,button_text_style:null,button_text_top_padding:0,button_text_left_padding:0,button_action:(j.multi?SWFUpload.BUTTON_ACTION.SELECT_FILES:SWFUpload.BUTTON_ACTION.SELECT_FILE),button_disabled:false,button_cursor:(j.buttonCursor=="arrow"?SWFUpload.CURSOR.ARROW:SWFUpload.CURSOR.HAND),button_window_mode:SWFUpload.WINDOW_MODE.TRANSPARENT,debug:j.debug,requeue_on_error:j.requeueErrors,file_post_name:j.fileObjName,file_size_limit:j.fileSizeLimit,file_types:j.fileTypeExts,file_types_description:j.fileTypeDesc,file_queue_limit:j.queueSizeLimit,file_upload_limit:j.uploadLimit,flash_url:j.swf,prevent_swf_caching:j.preventCaching,post_params:j.formData,upload_url:j.uploader,use_query_string:(j.method=="get"),file_dialog_complete_handler:a.onDialogClose,file_dialog_start_handler:a.onDialogOpen,file_queued_handler:a.onSelect,file_queue_error_handler:a.onSelectError,swfupload_loaded_handler:j.onSWFReady,upload_complete_handler:a.onUploadComplete,upload_error_handler:a.onUploadError,upload_progress_handler:a.onUploadProgress,upload_start_handler:a.onUploadStart,upload_success_handler:a.onUploadSuccess};if(e){g=c.extend(g,e);}g=c.extend(g,j);var o=swfobject.getFlashPlayerVersion();var h=(o.major>=9);if(h){window["uploadify_"+j.id]=new SWFUpload(g);var i=window["uploadify_"+j.id];n.data("uploadify",i);var l=c("<div />",{id:j.id,"class":"uploadify",css:{height:j.height+"px",width:j.width+"px"}});c("#"+i.movieName).wrap(l);l=c("#"+j.id);l.data("uploadify",i);var f=c("<div />",{id:j.id+"-button","class":"uploadify-button "+j.buttonClass});if(j.buttonImage){f.css({"background-image":"url('"+j.buttonImage+"')","text-indent":"-9999px"});}f.html('<span class="uploadify-button-text">'+j.buttonText+"</span>").css({height:j.height+"px","line-height":j.height+"px",width:j.width+"px"});l.append(f);c("#"+i.movieName).css({position:"absolute","z-index":1});if(!j.queueID){var k=c("<div />",{id:j.id+"-queue","class":"uploadify-queue"});l.after(k);i.settings.queueID=j.id+"-queue";i.settings.defaultQueue=true;}i.queueData={files:{},filesSelected:0,filesQueued:0,filesReplaced:0,filesCancelled:0,filesErrored:0,uploadsSuccessful:0,uploadsErrored:0,averageSpeed:0,queueLength:0,queueSize:0,uploadSize:0,queueBytesUploaded:0,uploadQueue:[],errorMsg:"Some files were not added to the queue:"};i.original=m;i.wrapper=l;i.button=f;i.queue=k;if(j.onInit){j.onInit.call(n,i);}}else{if(j.onFallback){j.onFallback.call(n);}}});},cancel:function(d,f){var e=arguments;this.each(function(){var l=c(this),i=l.data("uploadify"),j=i.settings,h=-1;if(e[0]){if(e[0]=="*"){var g=i.queueData.queueLength;c("#"+j.queueID).find(".uploadify-queue-item").each(function(){h++;if(e[1]===true){i.cancelUpload(c(this).attr("id"),false);}else{i.cancelUpload(c(this).attr("id"));}c(this).find(".data").removeClass("data").html(" - Cancelled");c(this).find(".uploadify-progress-bar").remove();c(this).delay(1000+100*h).fadeOut(500,function(){c(this).remove();});});i.queueData.queueSize=0;i.queueData.queueLength=0;if(j.onClearQueue){j.onClearQueue.call(l,g);}}else{for(var m=0;m<e.length;m++){i.cancelUpload(e[m]);c("#"+e[m]).find(".data").removeClass("data").html(" - Cancelled");c("#"+e[m]).find(".uploadify-progress-bar").remove();c("#"+e[m]).delay(1000+100*m).fadeOut(500,function(){c(this).remove();});}}}else{var k=c("#"+j.queueID).find(".uploadify-queue-item").get(0);$item=c(k);i.cancelUpload($item.attr("id"));$item.find(".data").removeClass("data").html(" - Cancelled");$item.find(".uploadify-progress-bar").remove();$item.delay(1000).fadeOut(500,function(){c(this).remove();});}});},destroy:function(){this.each(function(){var f=c(this),d=f.data("uploadify"),e=d.settings;d.destroy();if(e.defaultQueue){c("#"+e.queueID).remove();}c("#"+e.id).replaceWith(d.original);if(e.onDestroy){e.onDestroy.call(this);}delete d;});},disable:function(d){this.each(function(){var g=c(this),e=g.data("uploadify"),f=e.settings;if(d){e.button.addClass("disabled");if(f.onDisable){f.onDisable.call(this);}}else{e.button.removeClass("disabled");if(f.onEnable){f.onEnable.call(this);}}e.setButtonDisabled(d);});},settings:function(e,g,h){var d=arguments;var f=g;this.each(function(){var k=c(this),i=k.data("uploadify"),j=i.settings;if(typeof(d[0])=="object"){for(var l in g){setData(l,g[l]);}}if(d.length===1){f=j[e];}else{switch(e){case"uploader":i.setUploadURL(g);break;case"formData":if(!h){g=c.extend(j.formData,g);}i.setPostParams(j.formData);break;case"method":if(g=="get"){i.setUseQueryString(true);}else{i.setUseQueryString(false);}break;case"fileObjName":i.setFilePostName(g);break;case"fileTypeExts":i.setFileTypes(g,j.fileTypeDesc);break;case"fileTypeDesc":i.setFileTypes(j.fileTypeExts,g);break;case"fileSizeLimit":i.setFileSizeLimit(g);break;case"uploadLimit":i.setFileUploadLimit(g);break;case"queueSizeLimit":i.setFileQueueLimit(g);break;case"buttonImage":i.button.css("background-image",settingValue);break;case"buttonCursor":if(g=="arrow"){i.setButtonCursor(SWFUpload.CURSOR.ARROW);}else{i.setButtonCursor(SWFUpload.CURSOR.HAND);}break;case"buttonText":c("#"+j.id+"-button").find(".uploadify-button-text").html(g);break;case"width":i.setButtonDimensions(g,j.height);break;case"height":i.setButtonDimensions(j.width,g);break;case"multi":if(g){i.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);}else{i.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);}break;}j[e]=g;}});if(d.length===1){return f;}},stop:function(){this.each(function(){var e=c(this),d=e.data("uploadify");d.queueData.averageSpeed=0;d.queueData.uploadSize=0;d.queueData.bytesUploaded=0;d.queueData.uploadQueue=[];d.stopUpload();});},upload:function(){var d=arguments;this.each(function(){var f=c(this),e=f.data("uploadify");e.queueData.averageSpeed=0;e.queueData.uploadSize=0;e.queueData.bytesUploaded=0;e.queueData.uploadQueue=[];if(d[0]){if(d[0]=="*"){e.queueData.uploadSize=e.queueData.queueSize;e.queueData.uploadQueue.push("*");e.startUpload();}else{for(var g=0;g<d.length;g++){e.queueData.uploadSize+=e.queueData.files[d[g]].size;e.queueData.uploadQueue.push(d[g]);}e.startUpload(e.queueData.uploadQueue.shift());}}else{e.startUpload();}});}};var a={onDialogOpen:function(){var d=this.settings;this.queueData.errorMsg="File type not success !";this.queueData.filesReplaced=0;this.queueData.filesCancelled=0;if(d.onDialogOpen){d.onDialogOpen.call(this);}},onDialogClose:function(d,f,g){var e=this.settings;this.queueData.filesErrored=d-f;this.queueData.filesSelected=d;this.queueData.filesQueued=f-this.queueData.filesCancelled;this.queueData.queueLength=g;if(c.inArray("onDialogClose",e.overrideEvents)<0){if(this.queueData.filesErrored>0){alert(this.queueData.errorMsg);}}if(e.onDialogClose){e.onDialogClose.call(this,this.queueData);}if(e.auto){c("#"+e.id).uploadify("upload","*");}},onSelect:function(g){var h=this.settings;var e={};for(var f in this.queueData.files){e=this.queueData.files[f];if(e.uploaded!=true&&e.name==g.name){var d=confirm('The file named "'+g.name+'" is already in the queue.\nDo you want to replace the existing item in the queue?');if(!d){this.cancelUpload(g.id);this.queueData.filesCancelled++;return false;}else{c("#"+e.id).remove();this.cancelUpload(e.id);this.queueData.filesReplaced++;}}}var i=Math.round(g.size/1024);var l="KB";if(i>1000){i=Math.round(i/1000);l="MB";}var k=i.toString().split(".");i=k[0];if(k.length>1){i+="."+k[1].substr(0,2);}i+=l;var j=g.name;if(j.length>25){j=j.substr(0,25)+"...";}if(c.inArray("onSelect",h.overrideEvents)<0){c("#"+h.queueID).append('<div id="'+g.id+'" class="uploadify-queue-item">     <div class="cancel">      <a href="javascript:$(\'#'+h.id+"').uploadify('cancel', '"+g.id+'\')">X</a>     </div>     <span class="fileName">'+j+" ("+i+')</span><span class="data"></span>     <div class="uploadify-progress">      <div class="uploadify-progress-bar"><!--Progress Bar--></div>     </div>    </div>');}this.queueData.queueSize+=g.size;this.queueData.files[g.id]=g;if(h.onSelect){h.onSelect.apply(this,arguments);}},onSelectError:function(d,g,f){var e=this.settings;if(c.inArray("onSelectError",e.overrideEvents)<0){switch(g){case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:if(e.queueSizeLimit>f){this.queueData.errorMsg+="\nThe number of files selected exceeds the remaining upload limit ("+f+").";}else{this.queueData.errorMsg+="\nThe number of files selected exceeds the queue size limit ("+e.queueSizeLimit+").";}break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:this.queueData.errorMsg+='\nThe file "'+d.name+'" exceeds the size limit ('+e.fileSizeLimit+").";break;case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:this.queueData.errorMsg+='\nThe file "'+d.name+'" is empty.';break;case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:this.queueData.errorMsg+='\nThe file "'+d.name+'" is not an accepted file type ('+e.fileTypeDesc+").";break;}}if(g!=SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED){delete this.queueData.files[d.id];}if(e.onSelectError){e.onSelectError.apply(this,arguments);}},onQueueComplete:function(){if(this.settings.onQueueComplete){this.settings.onQueueComplete.call(this,this.settings.queueData);}},onUploadComplete:function(f){var g=this.settings,d=this;var e=this.getStats();this.queueData.queueLength=e.files_queued;if(this.queueData.uploadQueue[0]=="*"){if(this.queueData.queueLength>0){this.startUpload();}else{this.queueData.uploadQueue=[];if(g.onQueueComplete){g.onQueueComplete.call(this,this.queueData);}}}else{if(this.queueData.uploadQueue.length>0){this.startUpload(this.queueData.uploadQueue.shift());}else{this.queueData.uploadQueue=[];if(g.onQueueComplete){g.onQueueComplete.call(this,this.queueData);}}}if(c.inArray("onUploadComplete",g.overrideEvents)<0){if(g.removeCompleted){switch(f.filestatus){case SWFUpload.FILE_STATUS.COMPLETE:setTimeout(function(){if(c("#"+f.id)){d.queueData.queueSize-=f.size;d.queueData.queueLength-=1;delete d.queueData.files[f.id];c("#"+f.id).fadeOut(500,function(){c(this).remove();});}},g.removeTimeout*1000);break;case SWFUpload.FILE_STATUS.ERROR:if(!g.requeueErrors){setTimeout(function(){if(c("#"+f.id)){d.queueData.queueSize-=f.size;d.queueData.queueLength-=1;delete d.queueData.files[f.id];c("#"+f.id).fadeOut(500,function(){c(this).remove();});}},g.removeTimeout*1000);}break;}}else{f.uploaded=true;}}if(g.onUploadComplete){g.onUploadComplete.call(this,f);}},onUploadError:function(e,i,h){var f=this.settings;var g="Error";switch(i){case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:g="HTTP Error ("+h+")";break;case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:g="Missing Upload URL";break;case SWFUpload.UPLOAD_ERROR.IO_ERROR:g="IO Error";break;case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:g="Security Error";break;case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:alert("The upload limit has been reached ("+h+").");g="Exceeds Upload Limit";break;case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:g="Failed";break;case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:break;case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:g="Validation Error";break;case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:g="Cancelled";this.queueData.queueSize-=e.size;this.queueData.queueLength-=1;if(e.status==SWFUpload.FILE_STATUS.IN_PROGRESS||c.inArray(e.id,this.queueData.uploadQueue)>=0){this.queueData.uploadSize-=e.size;}if(f.onCancel){f.onCancel.call(this,e);}delete this.queueData.files[e.id];break;case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:g="Stopped";break;}if(c.inArray("onUploadError",f.overrideEvents)<0){if(i!=SWFUpload.UPLOAD_ERROR.FILE_CANCELLED&&i!=SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED){c("#"+e.id).addClass("uploadify-error");}c("#"+e.id).find(".uploadify-progress-bar").css("width","1px");if(i!=SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND&&e.status!=SWFUpload.FILE_STATUS.COMPLETE){c("#"+e.id).find(".data").html(" - "+g);}}var d=this.getStats();this.queueData.uploadsErrored=d.upload_errors;if(f.onUploadError){f.onUploadError.call(this,e,i,h,g);}},onUploadProgress:function(g,m,j){var h=this.settings;var e=new Date();var n=e.getTime();var k=n-this.timer;if(k>500){this.timer=n;}var i=m-this.bytesLoaded;this.bytesLoaded=m;var d=this.queueData.queueBytesUploaded+m;var p=Math.round(m/j*100);var o="KB/s";var l=0;var f=(i/1024)/(k/1000);f=Math.floor(f*10)/10;if(this.queueData.averageSpeed>0){this.queueData.averageSpeed=Math.floor((this.queueData.averageSpeed+f)/2);}else{this.queueData.averageSpeed=Math.floor(f);}if(f>1000){l=(f*0.001);this.queueData.averageSpeed=Math.floor(l);o="MB/s";}if(c.inArray("onUploadProgress",h.overrideEvents)<0){if(h.progressData=="percentage"){c("#"+g.id).find(".data").html(" - "+p+"%");}else{if(h.progressData=="speed"&&k>500){c("#"+g.id).find(".data").html(" - "+this.queueData.averageSpeed+o);}}c("#"+g.id).find(".uploadify-progress-bar").css("width",p+"%");}if(h.onUploadProgress){h.onUploadProgress.call(this,g,m,j,d,this.queueData.uploadSize);}},onUploadStart:function(d){var e=this.settings;var f=new Date();this.timer=f.getTime();this.bytesLoaded=0;if(this.queueData.uploadQueue.length==0){this.queueData.uploadSize=d.size;}if(e.checkExisting){c.ajax({type:"POST",async:false,url:e.checkExisting,data:{filename:d.name},success:function(h){if(h==1){var g=confirm('A file with the name "'+d.name+'" already exists on the server.\nWould you like to replace the existing file?');if(!g){this.cancelUpload(d.id);c("#"+d.id).remove();if(this.queueData.uploadQueue.length>0&&this.queueData.queueLength>0){if(this.queueData.uploadQueue[0]=="*"){this.startUpload();}else{this.startUpload(this.queueData.uploadQueue.shift());}}}}}});}if(e.onUploadStart){e.onUploadStart.call(this,d);}},onUploadSuccess:function(f,h,d){var g=this.settings;var e=this.getStats();this.queueData.uploadsSuccessful=e.successful_uploads;this.queueData.queueBytesUploaded+=f.size;if(c.inArray("onUploadSuccess",g.overrideEvents)<0){c("#"+f.id).find(".data").html(" - Complete");}if(g.onUploadSuccess){g.onUploadSuccess.call(this,f,h,d);}}};c.fn.uploadify=function(d){if(b[d]){return b[d].apply(this,Array.prototype.slice.call(arguments,1));}else{if(typeof d==="object"||!d){return b.init.apply(this,arguments);}else{c.error("The method "+d+" does not exist in $.uploadify");}}};})($);
!function(a){a.fn.json2html=function(b,c,d){if("undefined"==typeof json2html)return void 0;var e={append:!0,replace:!1,prepend:!1,eventData:{}};return void 0!==d&&a.extend(e,d),e.events=!0,this.each(function(){for(var d=json2html.transform(b,c,e),f=a(document.createElement("i")).html(d.html),g=0;g<d.events.length;g++){var h=d.events[g],i=a(f).find("[json2html-event-id-"+h.type+"='"+h.id+"']");if(0===i.length)throw"jquery.json2html was unable to attach event "+h.id+" to DOM";a(i).removeAttr("json2html-event-id-"+h.type),a(i).on(h.type,h.data,function(b){b.data.event=b,b.data.action.call(a(this),b.data)})}e.replace?a.fn.replaceWith.apply(a(this),a(f).children()):e.prepend?a.fn.prepend.apply(a(this),a(f).children()):a.fn.append.apply(a(this),a(f).children())})}}(jQuery),function(a){a.bonsai=function(b,c){var d={data:[],folderClass:"folder",folderIconClass:"icon-folder",folderIconOpenClass:"icon-folder-open",folderIconCloseClass:"icon-folder-close"},e=this;e.settings={};var f=function(){e.settings=a.extend({},d,c),e.el=b,e.settings.data,a('<ul class="section"></ul>')};return e.foo_public_method=function(){},f(),e.el.each(function(){return a(this).find("."+e.settings.folderClass).each(function(){a(this).children("a").click(function(b){b.preventDefault(),a(this).parent().toggleClass("open"),a(this).parent().hasClass("open")?a(this).find("."+e.settings.folderIconClass).removeClass(e.settings.folderIconCloseClass).addClass(e.settings.folderIconOpenClass):a(this).find("."+e.settings.folderIconClass).removeClass(e.settings.folderIconOpenClass).addClass(e.settings.folderIconOpenClass)})}),a(this)})}}(jQuery);
(function() {var method; var noop = function () {}; var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn']; var length = methods.length; var console = (window.console = window.console || {}); while (length--) {method = methods[length]; if (!console[method]) {console[method] = noop; } } }()); $(document).ready(function(){var transforms = {'barChart': [{"tag":"ul","class":"barChart", "children":function() {return(json2html.transform(this.groups,transforms.barChartNode));}} ], 'barChartNode': [{"tag":"li","class":"group","children":[{"tag":"a","class":"bar","html":"${value}"}, {"tag":"ul","class":"barChart", "children":function() {return(json2html.transform(this.groups,transforms.barChartNode));}} ]} ]}; function getBarChart(json) {} getBarChart({'groups':[{'value':10,'label':'Day 1', 'groups':[{'value':12,'label':'Day 1', 'groups':[{'value':12,'label':'Day 1'},{'value':7,'label':'Day 2'},{'value':4,'label':'Day 3'},{'value':2,'label':'Day 4'},{'value':0,'label':'Day 5'} ] },{'value':7,'label':'Day 2'},{'value':4,'label':'Day 3'},{'value':2,'label':'Day 4'},{'value':0,'label':'Day 5'} ] }, {'value':5,'label':'Day 2'}, {'value':15,'label':'Day 3'}, {'value':4,'label':'Day 4'}, {'value':5,'label':'Day 5'} ]}); var mytree = new $.bonsai($('.bonsai')); });
$(function () {
    $('.popup-modal').magnificPopup({type: 'inline', preloader: false, focus: '#username', modal: true, });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
$(window).on('load',function(){
    $('.ticker-container').css('display','block');
});
function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    $dialog.css("margin-top", offset);
}
$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function () {
    $('.modal:visible').each(centerModal);
});
$(document).ready(function() {
    $(".tablesorter").tablesorter();
    $('[data-toggle="tooltip"]').tooltip();
    $("abbr.timeago").timeago(); $("span.timeago").timeago();

    $(".display").click(function() {
        $(this).toggleClass('glyphicon-minus');
        $(this).prev(".sub-menu").toggle();
    });
    document.addEventListener("DOMContentLoaded", function(event) {
        document.querySelectorAll('img').forEach(function(img){
            img.onerror = function(){this.style.display='none';};
        })
    });
});

//# sourceMappingURL=all.js.map
