import{_ as r}from"./extends-64d70faf.js";import{_ as t}from"./objectWithoutPropertiesLoose-87a5ea27.js";import*as e from"react";import{useRef as o,useState as n,useCallback as i}from"react";import{u as a}from"./InputGroupContext-6eee73f3.js";import{u}from"./Button-5d8691f4.js";import{jsx as s}from"react/jsx-runtime";function f(r){return"default"+r.charAt(0).toUpperCase()+r.substr(1)}function c(r){var t=function(r,t){if("object"!=typeof r||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"==typeof t?t:String(t)}function m(r,t,e){var a=o(void 0!==r),u=n(t),s=u[0],f=u[1],c=void 0!==r,m=a.current;return a.current=c,!c&&m&&s!==t&&f(t),[c?r:s,i((function(r){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];e&&e.apply(void 0,[r].concat(o)),f(r)}),[e])]}function p(e,o){return Object.keys(o).reduce((function(n,i){var a,u=n,s=u[f(i)],p=u[i],l=t(u,[f(i),i].map(c)),v=o[i],y=m(p,s,e[v]),b=y[0],j=y[1];return r({},l,((a={})[i]=b,a[v]=j,a))}),e)}const l=["onKeyDown"];const v=e.forwardRef(((r,t)=>{let{onKeyDown:e}=r,o=function(r,t){if(null==r)return{};var e,o,n={},i=Object.keys(r);for(o=0;o<i.length;o++)e=i[o],t.indexOf(e)>=0||(n[e]=r[e]);return n}(r,l);const[n]=u(Object.assign({tagName:"a"},o)),i=a((r=>{n.onKeyDown(r),null==e||e(r)}));return(f=o.href)&&"#"!==f.trim()&&"button"!==o.role?s("a",Object.assign({ref:t},o,{onKeyDown:e})):s("a",Object.assign({ref:t},o,n,{onKeyDown:i}));var f}));v.displayName="Anchor";var y=v;export{y as A,p as a,m as u};
//# sourceMappingURL=Anchor-eec8625e.js.map
