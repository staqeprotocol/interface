(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4227:function(e,t,a){Promise.resolve().then(a.bind(a,87038))},51161:function(e,t,a){"use strict";a.d(t,{default:function(){return n.a}});var r=a(25837),n=a.n(r)},81638:function(e,t,a){"use strict";var r=a(95920);t.Z=e=>{let{children:t,...a}=e;return(0,r.jsxs)("div",{...a,className:"relative ".concat(a.className||""),children:[(0,r.jsx)("div",{className:"absolute m-auto blur-[160px] ".concat(a.wrapperclassname||""),style:{background:"linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )"}}),(0,r.jsx)("div",{className:"relative",children:t})]})}},87038:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var r=a(95920),n=a(81638),s=a(89527);let c={some:0,all:1};var i=e=>{let{children:t,className:a,isInviewState:{trueState:r="",falseState:n=""}}=e,i=(0,s.useRef)(null),l=function(e,{root:t,margin:a,amount:r,once:n=!1}={}){let[i,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!e.current||n&&i)return;let s={root:t&&t.current||void 0,margin:a,amount:r};return function(e,t,{root:a,margin:r,amount:n="some"}={}){var s;let i=("string"==typeof(s=e)?s=document.querySelectorAll(s):s instanceof Element&&(s=[s]),Array.from(s||[])),l=new WeakMap,o=new IntersectionObserver(e=>{e.forEach(e=>{let a=l.get(e.target);if(!!a!==e.isIntersecting){if(e.isIntersecting){let a=t(e);"function"==typeof a?l.set(e.target,a):o.unobserve(e.target)}else a&&(a(e),l.delete(e.target))}})},{root:a,rootMargin:r,threshold:"number"==typeof n?n:c[n]});return i.forEach(e=>o.observe(e)),()=>o.disconnect()}(e.current,()=>(l(!0),n?void 0:()=>l(!1)),s)},[t,e,a,n,r]),i}(i,{once:!0});return(0,s.cloneElement)(t,{ref:i,className:"".concat(t.props.className||""," ").concat(a||""," ").concat(l?r:n)})},l=a(51161),o=()=>(0,r.jsx)("section",{children:(0,r.jsx)("div",{className:"custom-screen py-28",children:(0,r.jsx)(i,{className:"duration-1000 delay-300",isInviewState:{trueState:"opacity-1",falseState:"opacity-0"},children:(0,r.jsx)("div",{children:(0,r.jsx)(n.Z,{wrapperclassname:"max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]",children:(0,r.jsxs)("div",{className:"space-y-5 max-w-3xl mx-auto text-center",children:[(0,r.jsx)("div",{className:"text-5xl font-extrabold ...",children:(0,r.jsxs)("h1",{className:"bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-200",children:["Staqe Protocol",(0,r.jsx)("br",{}),"Stake ✹ Reward ✹ Claim"]})}),(0,r.jsx)("p",{className:"max-w-xl mx-auto text-gray-300",children:"A fully decentralized protocol for creating pools, staking ERC20/NFT and earning rewards."}),(0,r.jsx)("div",{className:"flex justify-center font-medium text-sm",children:(0,r.jsxs)("div",{className:"items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0",children:[(0,r.jsx)(l.default,{href:"/dashboard",className:"block py-2 px-4 text-white hover:text-gray-100 font-medium duration-150 active:bg-gray-100 border rounded-lg",children:"Dashboard"}),(0,r.jsx)(l.default,{href:"/launch",className:"block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none",children:"Launch Pool"})]})})]})})})})})})}},function(e){e.O(0,[837,957,366,744],function(){return e(e.s=4227)}),_N_E=e.O()}]);