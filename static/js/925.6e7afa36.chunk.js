"use strict";(self.webpackChunkmy_app_net=self.webpackChunkmy_app_net||[]).push([[925],{925:function(e,r,n){n.r(r);var t=n(885),s=n(2791),u=n(364),i=n(1076),c=n(184),a=function(){var e=(0,u.v9)((function(e){return e.chat.status})),r=(0,u.I0)();return(0,s.useEffect)((function(){return r((0,i.WE)()),function(){r((0,i.R7)())}}),[]),(0,c.jsxs)("div",{children:["error"===e&&(0,c.jsx)("div",{children:"Some error occurred! Please refresh the page."}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{}),(0,c.jsx)(d,{})]})]})},o=function(){var e=(0,u.v9)((function(e){return e.chat.messages})),r=(0,s.useRef)(null),n=(0,s.useState)(!0),i=(0,t.Z)(n,2),a=i[0],o=i[1];return(0,s.useEffect)((function(){var e;a&&(null===(e=r.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),(0,c.jsxs)("div",{style:{height:"600px",overflow:"auto"},onScroll:function(e){var r=e.currentTarget;Math.abs(r.scrollHeight-r.scrollTop-r.clientHeight)<500?!a&&o(!0):a&&o(!1)},children:[e.map((function(e){return(0,c.jsx)(l,{message:e},e.id)})),(0,c.jsx)("div",{ref:r})]})},l=(0,s.memo)((function(e){var r=e.message;return console.log(">>>>Render"),(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:r.photo,style:{width:"50px"},alt:"ava"})," ",(0,c.jsx)("b",{children:r.userName}),(0,c.jsx)("br",{}),r.message,(0,c.jsx)("hr",{})]})})),d=function(){var e=(0,s.useState)(""),r=(0,t.Z)(e,2),n=r[0],a=r[1],o=(0,u.v9)((function(e){return e.chat.status})),l=(0,u.I0)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("textarea",{onChange:function(e){return a(e.currentTarget.value)},value:n})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{disabled:"ready"!==o,onClick:function(){n&&(l((0,i.bG)(n)),a(""))},children:"Send"})})]})};r.default=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(a,{})})}}}]);
//# sourceMappingURL=925.6e7afa36.chunk.js.map