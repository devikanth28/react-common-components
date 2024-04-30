var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],a="start",s="end",f="clippingParents",c="viewport",p="popper",u="reference",d=i.reduce((function(e,t){return e.concat([t+"-"+a,t+"-"+s])}),[]),l=[].concat(i,[o]).reduce((function(e,t){return e.concat([t,t+"-"+a,t+"-"+s])}),[]),h=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function m(e){return e.split("-")[0]}function v(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function g(e){return e instanceof v(e).Element||e instanceof Element}function y(e){return e instanceof v(e).HTMLElement||e instanceof HTMLElement}function b(e){return"undefined"!=typeof ShadowRoot&&(e instanceof v(e).ShadowRoot||e instanceof ShadowRoot)}var w=Math.max,x=Math.min,O=Math.round;function E(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function D(){return!/^((?!chrome|android).)*safari/i.test(E())}function j(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&y(e)&&(o=e.offsetWidth>0&&O(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&O(r.height)/e.offsetHeight||1);var a=(g(e)?v(e):window).visualViewport,s=!D()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,u=r.height/i;return{width:p,height:u,top:c,right:f+p,bottom:c+u,left:f,x:f,y:c}}function A(e){var t=j(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function L(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&b(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function W(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){return v(e).getComputedStyle(e)}function P(e){return["table","td","th"].indexOf(W(e))>=0}function B(e){return((g(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===W(e)?e:e.assignedSlot||e.parentNode||(b(e)?e.host:null)||B(e)}function k(e){return y(e)&&"fixed"!==M(e).position?e.offsetParent:null}function R(e){for(var t=v(e),n=k(e);n&&P(n)&&"static"===M(n).position;)n=k(n);return n&&("html"===W(n)||"body"===W(n)&&"static"===M(n).position)?t:n||function(e){var t=/firefox/i.test(E());if(/Trident/i.test(E())&&y(e)&&"fixed"===M(e).position)return null;var n=H(e);for(b(n)&&(n=n.host);y(n)&&["html","body"].indexOf(W(n))<0;){var r=M(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function T(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function V(e,t,n){return w(e,x(t,n))}function q(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function C(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var S={name:"arrow",enabled:!0,phase:"main",fn:function(o){var a,s=o.state,f=o.name,c=o.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,d=m(s.placement),l=T(d),h=[r,n].indexOf(d)>=0?"height":"width";if(p&&u){var v=function(e,t){return q("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:C(e,i))}(c.padding,s),g=A(p),y="y"===l?e:r,b="y"===l?t:n,w=s.rects.reference[h]+s.rects.reference[l]-u[l]-s.rects.popper[h],x=u[l]-s.rects.reference[l],O=R(p),E=O?"y"===l?O.clientHeight||0:O.clientWidth||0:0,D=w/2-x/2,j=v[y],L=E-g[h]-v[b],W=E/2-g[h]/2+D,M=V(j,W,L),P=l;s.modifiersData[f]=((a={})[P]=M,a.centerOffset=M-W,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&L(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function N(e){return e.split("-")[1]}var I={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(o){var i,a=o.popper,f=o.popperRect,c=o.placement,p=o.variation,u=o.offsets,d=o.position,l=o.gpuAcceleration,h=o.adaptive,m=o.roundOffsets,g=o.isFixed,y=u.x,b=void 0===y?0:y,w=u.y,x=void 0===w?0:w,E="function"==typeof m?m({x:b,y:x}):{x:b,y:x};b=E.x,x=E.y;var D=u.hasOwnProperty("x"),j=u.hasOwnProperty("y"),A=r,L=e,W=window;if(h){var P=R(a),H="clientHeight",k="clientWidth";if(P===v(a)&&"static"!==M(P=B(a)).position&&"absolute"===d&&(H="scrollHeight",k="scrollWidth"),c===e||(c===r||c===n)&&p===s)L=t,x-=(g&&P===W&&W.visualViewport?W.visualViewport.height:P[H])-f.height,x*=l?1:-1;if(c===r||(c===e||c===t)&&p===s)A=n,b-=(g&&P===W&&W.visualViewport?W.visualViewport.width:P[k])-f.width,b*=l?1:-1}var T,V=Object.assign({position:d},h&&I),q=!0===m?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:O(n*o)/o||0,y:O(r*o)/o||0}}({x:b,y:x},v(a)):{x:b,y:x};return b=q.x,x=q.y,l?Object.assign({},V,((T={})[L]=j?"0":"",T[A]=D?"0":"",T.transform=(W.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",T)):Object.assign({},V,((i={})[L]=j?x+"px":"",i[A]=D?b+"px":"",i.transform="",i))}var U={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:m(t.placement),variation:N(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,F(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,F(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},_={passive:!0};var z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=v(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,_)})),s&&f.addEventListener("resize",n.update,_),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,_)})),s&&f.removeEventListener("resize",n.update,_)}},data:{}},X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,(function(e){return X[e]}))}var G={start:"end",end:"start"};function J(e){return e.replace(/start|end/g,(function(e){return G[e]}))}function K(e){var t=v(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Q(e){return j(B(e)).left+K(e).scrollLeft}function Z(e){var t=M(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function $(e){return["html","body","#document"].indexOf(W(e))>=0?e.ownerDocument.body:y(e)&&Z(e)?e:$(H(e))}function ee(e,t){var n;void 0===t&&(t=[]);var r=$(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=v(r),a=o?[i].concat(i.visualViewport||[],Z(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ee(H(a)))}function te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t,n){return t===c?te(function(e,t){var n=v(e),r=B(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=D();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+Q(e),y:f}}(e,n)):g(t)?function(e,t){var n=j(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):te(function(e){var t,n=B(e),r=K(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=w(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=w(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Q(e),f=-r.scrollTop;return"rtl"===M(o||n).direction&&(s+=w(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(B(e)))}function re(e,t,n,r){var o="clippingParents"===t?function(e){var t=ee(H(e)),n=["absolute","fixed"].indexOf(M(e).position)>=0&&y(e)?R(e):e;return g(n)?t.filter((function(e){return g(e)&&L(e,n)&&"body"!==W(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ne(e,n,r);return t.top=w(o.top,t.top),t.right=x(o.right,t.right),t.bottom=x(o.bottom,t.bottom),t.left=w(o.left,t.left),t}),ne(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function oe(o){var i,f=o.reference,c=o.element,p=o.placement,u=p?m(p):null,d=p?N(p):null,l=f.x+f.width/2-c.width/2,h=f.y+f.height/2-c.height/2;switch(u){case e:i={x:l,y:f.y-c.height};break;case t:i={x:l,y:f.y+f.height};break;case n:i={x:f.x+f.width,y:h};break;case r:i={x:f.x-c.width,y:h};break;default:i={x:f.x,y:f.y}}var v=u?T(u):null;if(null!=v){var g="y"===v?"height":"width";switch(d){case a:i[v]=i[v]-(f[g]/2-c[g]/2);break;case s:i[v]=i[v]+(f[g]/2-c[g]/2)}}return i}function ie(r,o){void 0===o&&(o={});var a=o,s=a.placement,d=void 0===s?r.placement:s,l=a.strategy,h=void 0===l?r.strategy:l,m=a.boundary,v=void 0===m?f:m,y=a.rootBoundary,b=void 0===y?c:y,w=a.elementContext,x=void 0===w?p:w,O=a.altBoundary,E=void 0!==O&&O,D=a.padding,A=void 0===D?0:D,L=q("number"!=typeof A?A:C(A,i)),W=x===p?u:p,M=r.rects.popper,P=r.elements[E?W:x],H=re(g(P)?P:P.contextElement||B(r.elements.popper),v,b,h),k=j(r.elements.reference),R=oe({reference:k,element:M,strategy:"absolute",placement:d}),T=te(Object.assign({},M,R)),V=x===p?T:k,S={top:H.top-V.top+L.top,bottom:V.bottom-H.bottom+L.bottom,left:H.left-V.left+L.left,right:V.right-H.right+L.right},N=r.modifiersData.offset;if(x===p&&N){var I=N[d];Object.keys(S).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";S[r]+=I[i]*o}))}return S}function ae(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?l:c,u=N(r),h=u?f?d:d.filter((function(e){return N(e)===u})):i,v=h.filter((function(e){return p.indexOf(e)>=0}));0===v.length&&(v=h);var g=v.reduce((function(t,n){return t[n]=ie(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[m(n)],t}),{});return Object.keys(g).sort((function(e,t){return g[e]-g[t]}))}var se={name:"flip",enabled:!0,phase:"main",fn:function(i){var s=i.state,f=i.options,c=i.name;if(!s.modifiersData[c]._skip){for(var p=f.mainAxis,u=void 0===p||p,d=f.altAxis,l=void 0===d||d,h=f.fallbackPlacements,v=f.padding,g=f.boundary,y=f.rootBoundary,b=f.altBoundary,w=f.flipVariations,x=void 0===w||w,O=f.allowedAutoPlacements,E=s.options.placement,D=m(E),j=h||(D===E||!x?[Y(E)]:function(e){if(m(e)===o)return[];var t=Y(e);return[J(e),t,J(t)]}(E)),A=[E].concat(j).reduce((function(e,t){return e.concat(m(t)===o?ae(s,{placement:t,boundary:g,rootBoundary:y,padding:v,flipVariations:x,allowedAutoPlacements:O}):t)}),[]),L=s.rects.reference,W=s.rects.popper,M=new Map,P=!0,B=A[0],H=0;H<A.length;H++){var k=A[H],R=m(k),T=N(k)===a,V=[e,t].indexOf(R)>=0,q=V?"width":"height",C=ie(s,{placement:k,boundary:g,rootBoundary:y,altBoundary:b,padding:v}),S=V?T?n:r:T?t:e;L[q]>W[q]&&(S=Y(S));var I=Y(S),F=[];if(u&&F.push(C[R]<=0),l&&F.push(C[S]<=0,C[I]<=0),F.every((function(e){return e}))){B=k,P=!1;break}M.set(k,F)}if(P)for(var U=function(e){var t=A.find((function(t){var n=M.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},_=x?3:1;_>0;_--){if("break"===U(_))break}s.placement!==B&&(s.modifiersData[c]._skip=!0,s.placement=B,s.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function fe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ce(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}var pe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ie(t,{elementContext:"reference"}),s=ie(t,{altBoundary:!0}),f=fe(a,r),c=fe(s,o,i),p=ce(f),u=ce(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}};var ue={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,a=t.name,s=i.offset,f=void 0===s?[0,0]:s,c=l.reduce((function(t,i){return t[i]=function(t,o,i){var a=m(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,f),t}),{}),p=c[o.placement],u=p.x,d=p.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=u,o.modifiersData.popperOffsets.y+=d),o.modifiersData[a]=c}};var de={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=oe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,s=o.options,f=o.name,c=s.mainAxis,p=void 0===c||c,u=s.altAxis,d=void 0!==u&&u,l=s.boundary,h=s.rootBoundary,v=s.altBoundary,g=s.padding,y=s.tether,b=void 0===y||y,O=s.tetherOffset,E=void 0===O?0:O,D=ie(i,{boundary:l,rootBoundary:h,padding:g,altBoundary:v}),j=m(i.placement),L=N(i.placement),W=!L,M=T(j),P="x"===M?"y":"x",B=i.modifiersData.popperOffsets,H=i.rects.reference,k=i.rects.popper,q="function"==typeof E?E(Object.assign({},i.rects,{placement:i.placement})):E,C="number"==typeof q?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),S=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(B){if(p){var F,U="y"===M?e:r,_="y"===M?t:n,z="y"===M?"height":"width",X=B[M],Y=X+D[U],G=X-D[_],J=b?-k[z]/2:0,K=L===a?H[z]:k[z],Q=L===a?-k[z]:-H[z],Z=i.elements.arrow,$=b&&Z?A(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],ne=ee[_],re=V(0,H[z],$[z]),oe=W?H[z]/2-J-re-te-C.mainAxis:K-re-te-C.mainAxis,ae=W?-H[z]/2+J+re+ne+C.mainAxis:Q+re+ne+C.mainAxis,se=i.elements.arrow&&R(i.elements.arrow),fe=se?"y"===M?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==S?void 0:S[M])?F:0,pe=X+ae-ce,ue=V(b?x(Y,X+oe-ce-fe):Y,X,b?w(G,pe):G);B[M]=ue,I[M]=ue-X}if(d){var de,le="x"===M?e:r,he="x"===M?t:n,me=B[P],ve="y"===P?"height":"width",ge=me+D[le],ye=me-D[he],be=-1!==[e,r].indexOf(j),we=null!=(de=null==S?void 0:S[P])?de:0,xe=be?ge:me-H[ve]-k[ve]-we+C.altAxis,Oe=be?me+H[ve]+k[ve]-we-C.altAxis:ye,Ee=b&&be?function(e,t,n){var r=V(e,t,n);return r>n?n:r}(xe,me,Oe):V(b?xe:ge,me,b?Oe:ye);B[P]=Ee,I[P]=Ee-me}i.modifiersData[f]=I}},requiresIfExists:["offset"]};function he(e,t,n){void 0===n&&(n=!1);var r,o,i=y(t),a=y(t)&&function(e){var t=e.getBoundingClientRect(),n=O(t.width)/e.offsetWidth||1,r=O(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=B(t),f=j(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==W(t)||Z(s))&&(c=(r=t)!==v(r)&&y(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:K(r)),y(t)?((p=j(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=Q(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}function me(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var ve={placement:"bottom",modifiers:[],strategy:"absolute"};function ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function ye(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ve:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},ve,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;u(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:g(e)?ee(e):e.contextElement?ee(e.contextElement):[],popper:ee(t)};var a,c,d=function(e){var t=me(e);return h.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r}),a=function(){};f.push(i||a)}})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(ge(t,n)){s.rects={reference:he(t,R(n),"fixed"===s.options.strategy),popper:A(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,u=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:u,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){u(),c=!0}};if(!ge(e,t))return p;function u(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var be=function(){};if("production"!==process.env.NODE_ENV){var we=function(e,t){var n=arguments.length;t=new Array(n>1?n-1:0);for(var r=1;r<n;r++)t[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return t[o++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};be=function(e,t,n){var r=arguments.length;n=new Array(r>2?r-2:0);for(var o=2;o<r;o++)n[o-2]=arguments[o];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");e||we.apply(null,[t].concat(n))}}var xe=be;export{de as a,le as b,U as c,S as d,z as e,se as f,W as g,pe as h,y as i,ue as o,ye as p,xe as w};
//# sourceMappingURL=warning-64d0a8e4.js.map