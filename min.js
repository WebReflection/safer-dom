/*! (c) Andrea Giammarchi - ISC */
var saferDOM=function(e){"use strict";var t=Function.call,r=t.bind(t.bind);r(t,t.apply);t=r(t,t);const{defineProperty:n,getPrototypeOf:o,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:s,hasOwnProperty:i}=Object,{concat:a,forEach:d,includes:p,push:u}=[],y=(e,t)=>{n(e,t,{enumerable:!0,value:!1})};var v=e=>{const r=e,v=[],b=[];do{t(d,t(a,c(e),s(e)),r=>{t(p,v,r)||(t(u,v,r),t(u,b,l(e,r)))})}while(e=o(e));return t(d,v,(e,o)=>{n(r,e,(e=>(y(e,"configurable"),t(i,e,"writable")&&y(e,"writable"),e))(b[o]))}),r},b=e=>(v(e.prototype),v(e));const{getOwnPropertyDescriptor:m}=Object,{prototype:h}=Element,{addEventListener:w,removeEventListener:E,dispatchEvent:O,appendChild:f,removeChild:g,insertBefore:P,querySelector:S,querySelectorAll:q}=h,x=(m(Node.prototype,"childNodes").get,m(h,"children").get,document),{defaultView:C,querySelector:D,querySelectorAll:L}=x;b(class extends CustomEvent{}),b(class extends Event{}),b(class extends HTMLElement{}),x.createElement.bind(x);return index}();
