import{c,u as x,a as o,j as e,g as d,R as l,r as m,A as h,m as p,k as n}from"./index-cf0b05af.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=c("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function j({faq:s}){const[t,a]=m.useState(!1);return e.jsxs("div",{className:"card overflow-hidden",children:[e.jsxs("button",{type:"button",onClick:()=>a(!t),"aria-expanded":t,className:"w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left",children:[e.jsx("span",{className:"text-slate-900 font-semibold text-sm md:text-base leading-snug",children:s.q}),e.jsx("span",{className:"shrink-0 size-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center",children:t?e.jsx(u,{size:13}):e.jsx(f,{size:13})})]}),e.jsx(h,{initial:!1,children:t&&e.jsx(p.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:"easeInOut"},children:e.jsx("p",{className:"px-5 sm:px-6 pb-5 text-slate-600 text-sm leading-relaxed",children:s.a})})})]})}function y(){const s=x(),{locale:t}=o(),a=n[t]||n.es;return e.jsx("section",{className:"py-20 sm:py-28 bg-white border-t border-slate-200",children:e.jsxs("div",{className:"max-w-3xl mx-auto px-5 sm:px-6",children:[e.jsx(d,{badge:s("faq.badge"),title:`${s("faq.title_1")} ${s("faq.title_2")}`,subtitle:s("faq.subtitle")}),e.jsx("div",{className:"space-y-3",children:a.map((i,r)=>e.jsx(l,{delay:Math.min(r,4)*.04,children:e.jsx(j,{faq:i})},i.q))}),e.jsxs(l,{className:"text-center mt-10",children:[e.jsx("p",{className:"text-slate-500 text-sm mb-2",children:s("faq.more_q")}),e.jsxs("a",{href:"#contacto",className:"text-blue-600 hover:text-blue-700 font-semibold transition-colors",children:[s("faq.more_a")," →"]})]})]})})}export{y as default};
