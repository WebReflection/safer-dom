/*! (c) Andrea Giammarchi - ISC */
var saferDOM=function(e){"use strict";var t=Function.call,r=t.bind(t.bind);r(t,t.apply);t=r(t,t);const{defineProperty:n,getPrototypeOf:o,getOwnPropertyDescriptor:l,getOwnPropertyNames:s,hasOwnProperty:c}=Object,i=(e,t)=>{n(e,t,{enumerable:!0,value:!1})};var a=e=>{const r=e,a=[],d=[];do{s(e).forEach(t=>{a.includes(t)||(a.push(t),d.push(l(e,t)))})}while(e=o(e));return a.forEach((e,o)=>{n(r,e,(e=>(i(e,"configurable"),t(c,e,"writable")&&i(e,"writable"),e))(d[o]))}),r},d=e=>(a(e.prototype),a(e));const{getOwnPropertyDescriptor:p}=Object,{prototype:u}=Element,{addEventListener:y,removeEventListener:h,dispatchEvent:v,appendChild:E,removeChild:b,insertBefore:f,querySelector:m,querySelectorAll:w}=u,O=(p(Node.prototype,"childNodes").get,p(u,"children").get,document),{defaultView:g,querySelector:P,querySelectorAll:q}=O;d(class extends CustomEvent{}),d(class extends Event{}),d(class extends HTMLElement{}),O.createElement.bind(O);return index}();
