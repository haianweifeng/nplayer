(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(16),a=n(125);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+s:s}(t,e,n,r)}}function s(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},125:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},128:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(2),s=n(61),i=n.n(s),l=n(119);t.a=e=>{const{to:t,children:n,className:r}=e,s=Object(o.k)();return a.a.createElement("button",{className:Object(l.a)(i.a.ButtonContainer,r),onClick:()=>{t.startsWith("http")?window.open(t,"_blank"):s.push(t)}},n)}},138:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(24),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:r.a,theme:a};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=l({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==a&&(o.style=void 0!==o.style?l({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var s=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,s=l({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(s.style=void 0!==s.style?l({},s.style,a):a),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,s=0,i=[],l=[i];s>-1;){for(;(o=r[s]++)<a[s];){var y=void 0,f=t[s],m=n[s][o];if("string"==typeof m?(f=s>0?f:["plain"],y=m):(f=p(f,m.type),m.alias&&(f=p(f,m.alias)),y=m.content),"string"==typeof y){var d=y.split(c),g=d.length;i.push({types:f,content:d[0]});for(var h=1;h<g;h++)u(i),l.push(i=[]),i.push({types:f,content:d[h]})}else s++,t.push(f),n.push(y),r.push(0),a.push(y.length)}s--,t.pop(),n.pop(),r.pop(),a.pop()}return u(i),l}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(121),s=n(3),i=n(138);var l=({code:e})=>a.a.createElement(i.a,Object(s.a)({},i.b,{code:e,language:"jsx"}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:o})=>a.a.createElement("pre",{className:e,style:{...t,textAlign:"left"}},n.map(((e,t)=>a.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>a.a.createElement("span",o({token:e,key:t})))))))))),c=n(128),u=n(71),p=n.n(u);t.default=()=>a.a.createElement("div",{className:p.a.Container},a.a.createElement("div",{className:p.a.Content},a.a.createElement("div",{className:p.a.Title},"\u5feb\u901f\u4e0a\u624b"),a.a.createElement("div",null,a.a.createElement("div",{className:p.a.Tagline},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 NPlayer"),a.a.createElement(l,{code:"npm i -S nplayer"})),a.a.createElement("div",null,a.a.createElement("div",{className:p.a.Tagline},"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528 NPlayer"),a.a.createElement(l,{code:"import Player from 'nplayer'\n\nconst player = new Player({\n  videoAttrs: { src: 'VIDEO_SRC' }\n})\n\nplayer.mount(document.body)"})),a.a.createElement(c.a,{className:p.a.LearnMoreBtn,to:Object(o.a)("/docs/")},"\u66f4\u591a\u7528\u6cd5")))}}]);