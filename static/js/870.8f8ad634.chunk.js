"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[870],{8119:function(e,t,r){r.d(t,{Z:function(){return y}});var o=r(9439),n=r(3366),i=r(7462),a=r(7313),l=r(2197),c=r(1921),s=r(7592),d=r(7342),u=r(1171),v=r(6417),h=(0,u.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(7430),p=r(2298);function f(e){return(0,p.Z)("MuiAvatar",e)}(0,m.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],k=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,i.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),w=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var y=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiAvatar"}),s=r.alt,u=r.children,h=r.className,m=r.component,p=void 0===m?"div":m,y=r.imgProps,x=r.sizes,E=r.src,z=r.srcSet,M=r.variant,Z=void 0===M?"circular":M,L=(0,n.Z)(r,g),C=null,j=function(e){var t=e.crossOrigin,r=e.referrerPolicy,n=e.src,i=e.srcSet,l=a.useState(!1),c=(0,o.Z)(l,2),s=c[0],d=c[1];return a.useEffect((function(){if(n||i){d(!1);var e=!0,o=new Image;return o.onload=function(){e&&d("loaded")},o.onerror=function(){e&&d("error")},o.crossOrigin=t,o.referrerPolicy=r,o.src=n,i&&(o.srcset=i),function(){e=!1}}}),[t,r,n,i]),s}((0,i.Z)({},y,{src:E,srcSet:z})),N=E||z,O=N&&"error"!==j,S=(0,i.Z)({},r,{colorDefault:!O,component:p,variant:Z}),I=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(r,f,t)}(S);return C=O?(0,v.jsx)(w,(0,i.Z)({alt:s,srcSet:z,src:E,sizes:x,ownerState:S,className:I.img},y)):null!=u?u:N&&s?s[0]:(0,v.jsx)(b,{ownerState:S,className:I.fallback}),(0,v.jsx)(k,(0,i.Z)({as:p,ownerState:S,className:(0,l.Z)(I.root,h),ref:t},L,{children:C}))}))},7363:function(e,t,r){r.d(t,{f:function(){return i}});var o=r(7430),n=r(2298);function i(e){return(0,n.Z)("MuiListItemIcon",e)}var a=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=a},1081:function(e,t,r){r.d(t,{L:function(){return i}});var o=r(7430),n=r(2298);function i(e){return(0,n.Z)("MuiListItemText",e)}var a=(0,o.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},3319:function(e,t,r){r.d(t,{Z:function(){return Z}});var o=r(4942),n=r(3366),i=r(7462),a=r(7313),l=r(2197),c=r(1921),s=r(7551),d=r(7592),u=r(7342),v=r(1195),h=r(8499),m=r(4993),p=r(6983),f=r(7430);var g=(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),k=r(7363),w=r(1081),b=r(2298);function y(e){return(0,b.Z)("MuiMenuItem",e)}var x=(0,f.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),E=r(6417),z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],M=(0,d.ZP)(h.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((function(e){var t,r=e.theme,n=e.ownerState;return(0,i.Z)({},r.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((r.vars||r).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(x.selected),(0,o.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(x.selected,":hover"),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,o.Z)(t,"&.".concat(x.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(g.root),{marginTop:r.spacing(1),marginBottom:r.spacing(1)}),(0,o.Z)(t,"& + .".concat(g.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(w.Z.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(w.Z.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(k.Z.root),{minWidth:36}),t),!n.dense&&(0,o.Z)({},r.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},r.typography.body2,(0,o.Z)({},"& .".concat(k.Z.root," svg"),{fontSize:"1.25rem"})))})),Z=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiMenuItem"}),o=r.autoFocus,s=void 0!==o&&o,d=r.component,h=void 0===d?"li":d,f=r.dense,g=void 0!==f&&f,k=r.divider,w=void 0!==k&&k,b=r.disableGutters,x=void 0!==b&&b,Z=r.focusVisibleClassName,L=r.role,C=void 0===L?"menuitem":L,j=r.tabIndex,N=r.className,O=(0,n.Z)(r,z),S=a.useContext(v.Z),I=a.useMemo((function(){return{dense:g||S.dense||!1,disableGutters:x}}),[S.dense,g,x]),B=a.useRef(null);(0,m.Z)((function(){s&&B.current&&B.current.focus()}),[s]);var H,R=(0,i.Z)({},r,{dense:I.dense,divider:w,disableGutters:x}),W=function(e){var t=e.disabled,r=e.dense,o=e.divider,n=e.disableGutters,a=e.selected,l=e.classes,s={root:["root",r&&"dense",t&&"disabled",!n&&"gutters",o&&"divider",a&&"selected"]},d=(0,c.Z)(s,y,l);return(0,i.Z)({},l,d)}(r),F=(0,p.Z)(B,t);return r.disabled||(H=void 0!==j?j:-1),(0,E.jsx)(v.Z.Provider,{value:I,children:(0,E.jsx)(M,(0,i.Z)({ref:F,role:C,tabIndex:H,component:h,focusVisibleClassName:(0,l.Z)(W.focusVisible,Z),className:(0,l.Z)(W.root,N)},O,{ownerState:R,classes:W}))})}))},1834:function(e,t,r){r.d(t,{$4n:function(){return H},HiG:function(){return s},I4:function(){return l},IWo:function(){return w},N7y:function(){return M},SyR:function(){return u},d2n:function(){return p},dcc:function(){return j},f7T:function(){return W},haR:function(){return L},irF:function(){return h},o7N:function(){return y},ruR:function(){return I},sX6:function(){return O},v$_:function(){return E},vUr:function(){return g}});var o=r(7313);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=["size","color","stroke"];function l(e){var t=e.size,r=void 0===t?24:t,l=e.color,c=void 0===l?"currentColor":l,s=e.stroke,d=void 0===s?2:s,u=i(e,a);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-aperture",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:d,stroke:c,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:12,cy:12,r:9}),o.createElement("path",{d:"M3.6 15h10.55"}),o.createElement("path",{d:"M6.551 4.938l3.26 10.034"}),o.createElement("path",{d:"M17.032 4.636l-8.535 6.201"}),o.createElement("path",{d:"M20.559 14.51l-8.535 -6.201"}),o.createElement("path",{d:"M12.257 20.916l3.261 -10.034"}))}var c=["size","color","stroke"];function s(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,s=e.stroke,d=void 0===s?2:s,u=i(e,c);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-down-right",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:d,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:7,y1:7,x2:17,y2:17}),o.createElement("polyline",{points:"17 8 17 17 8 17"}))}var d=["size","color","stroke"];function u(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,u=i(e,d);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-up-left",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:7,y1:7,x2:17,y2:17}),o.createElement("polyline",{points:"16 7 7 7 7 16"}))}var v=["size","color","stroke"];function h(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,v);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-basket",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("polyline",{points:"7 10 12 4 17 10"}),o.createElement("path",{d:"M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"}),o.createElement("circle",{cx:12,cy:15,r:2}))}var m=["size","color","stroke"];function p(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,m);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-bell-ringing",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),o.createElement("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),o.createElement("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),o.createElement("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"}))}var f=["size","color","stroke"];function g(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,f);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-copy",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("rect",{x:8,y:8,width:12,height:12,rx:2}),o.createElement("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"}))}var k=["size","color","stroke"];function w(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,k);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-currency-dollar",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"}),o.createElement("path",{d:"M12 3v3m0 12v3"}))}var b=["size","color","stroke"];function y(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,b);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-layout-dashboard",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M4 4h6v8h-6z"}),o.createElement("path",{d:"M4 16h6v4h-6z"}),o.createElement("path",{d:"M14 12h6v8h-6z"}),o.createElement("path",{d:"M14 4h6v4h-6z"}))}var x=["size","color","stroke"];function E(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,x);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-list-check",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M3.5 5.5l1.5 1.5l2.5 -2.5"}),o.createElement("path",{d:"M3.5 11.5l1.5 1.5l2.5 -2.5"}),o.createElement("path",{d:"M3.5 17.5l1.5 1.5l2.5 -2.5"}),o.createElement("line",{x1:11,y1:6,x2:20,y2:6}),o.createElement("line",{x1:11,y1:12,x2:20,y2:12}),o.createElement("line",{x1:11,y1:18,x2:20,y2:18}))}var z=["size","color","stroke"];function M(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,z);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-login",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),o.createElement("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"}))}var Z=["size","color","stroke"];function L(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,Z);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mail",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("rect",{x:3,y:5,width:18,height:14,rx:2}),o.createElement("polyline",{points:"3 7 12 13 21 7"}))}var C=["size","color","stroke"];function j(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,C);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-menu",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:4,y1:8,x2:20,y2:8}),o.createElement("line",{x1:4,y1:16,x2:20,y2:16}))}var N=["size","color","stroke"];function O(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,N);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-mood-happy",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:12,cy:12,r:9}),o.createElement("line",{x1:9,y1:9,x2:9.01,y2:9}),o.createElement("line",{x1:15,y1:9,x2:15.01,y2:9}),o.createElement("path",{d:"M8 13a4 4 0 1 0 8 0m0 0h-8"}))}var S=["size","color","stroke"];function I(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,S);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-typography",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("line",{x1:4,y1:20,x2:7,y2:20}),o.createElement("line",{x1:14,y1:20,x2:21,y2:20}),o.createElement("line",{x1:6.9,y1:15,x2:13.8,y2:15}),o.createElement("line",{x1:10.2,y1:6.3,x2:16,y2:20}),o.createElement("polyline",{points:"5 20 11 4 13 4 20 20"}))}var B=["size","color","stroke"];function H(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,B);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user-plus",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:9,cy:7,r:4}),o.createElement("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),o.createElement("path",{d:"M16 11h6m-3 -3v6"}))}var R=["size","color","stroke"];function W(e){var t=e.size,r=void 0===t?24:t,a=e.color,l=void 0===a?"currentColor":a,c=e.stroke,s=void 0===c?2:c,d=i(e,R);return o.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-user",width:r,height:r,viewBox:"0 0 24 24",strokeWidth:s,stroke:l,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),o.createElement("circle",{cx:12,cy:7,r:4}),o.createElement("path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}))}}}]);