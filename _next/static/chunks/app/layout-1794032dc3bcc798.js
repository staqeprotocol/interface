(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{95711:function(e,n,t){Promise.resolve().then(t.t.bind(t,81505,23)),Promise.resolve().then(t.t.bind(t,94734,23)),Promise.resolve().then(t.bind(t,28412)),Promise.resolve().then(t.bind(t,6826))},28412:function(e,n,t){"use strict";t.d(n,{Providers:function(){return u},b:function(){return d}});var c=t(61972),s=t(48580),r=t(23891),i=t(10069),a=t(152),o=t(43428),l=t(70006);let d=(0,a.createContext)(void 0);function u(e){let{children:n}=e,[t]=(0,a.useState)(()=>new s.S),[u,h]=(0,a.useState)(!0);return(0,c.jsx)(o.F,{config:l.v,children:(0,c.jsx)(r.aH,{client:t,children:(0,c.jsx)(i.f,{attribute:"class",children:(0,c.jsx)(d.Provider,{value:{isMainnet:u,setIsMainnet:h},children:n})})})})}},6826:function(e,n,t){"use strict";t.d(n,{default:function(){return j}});var c=t(61972),s=()=>(0,c.jsx)("footer",{className:"mt-20",children:(0,c.jsx)("div",{className:"custom-screen",children:(0,c.jsxs)("div",{className:"mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex",children:[(0,c.jsx)("p",{className:"text-gray-400 text-center",children:"\xa9 2025 Staqe.App"}),(0,c.jsx)("div",{className:"flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0",children:(0,c.jsx)("a",{href:"/",target:"_blank","aria-label":"social media",children:(0,c.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-200 duration-150",fill:"none",viewBox:"0 0 48 48",children:[(0,c.jsx)("g",{clipPath:"url(#clip0_17_80)",children:(0,c.jsx)("path",{fill:"currentColor",d:"M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"})}),(0,c.jsx)("defs",{children:(0,c.jsx)("clipPath",{id:"clip0_17_80",children:(0,c.jsx)("path",{fill:"currentColor",d:"M0 0h48v48H0z"})})})]})})})]})})}),r=t(28412),i=t(11215),a=t(152),o=t(40203),l=t(56008),d=t(47489);async function u(e,n={}){let t;if(n.connector)t=n.connector;else{let{connections:n,current:c}=e.state,s=n.get(c);t=s?.connector}let c=e.state.connections;t&&(await t.disconnect(),t.emitter.off("change",e._internal.events.change),t.emitter.off("disconnect",e._internal.events.disconnect),t.emitter.on("connect",e._internal.events.connect),c.delete(t.uid)),e.setState(e=>{if(0===c.size)return{...e,connections:new Map,current:null,status:"disconnected"};let n=c.values().next().value;return{...e,connections:new Map(c),current:n.connector.uid}});{let n=e.state.current;if(!n)return;let t=e.state.connections.get(n)?.connector;if(!t)return;await e.storage?.setItem("recentConnectorId",t.id)}}var h=t(36707),x=t(83176);let m=[];function f(e){let n=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,x.v)(m,n)?m:(m=n,n)}var b=()=>{let{address:e,status:n,chainId:t}=(0,o.m)(),{connectors:s,connect:m}=(0,l.$)(),{disconnect:b}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=e,t=(0,h.Z)(e),{mutate:c,mutateAsync:s,...r}=(0,d.D)({...n,mutationFn:e=>u(t,e),mutationKey:["disconnect"]});return{...r,connectors:(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,h.Z)(e);return(0,a.useSyncExternalStore)(e=>(function(e,n){let{onChange:t}=n;return e.subscribe(()=>f(e),t,{equalityFn:x.v})})(n,{onChange:e}),()=>f(n),()=>f(n))})({config:t}).map(e=>e.connector),disconnect:c,disconnectAsync:s}}(),j=(0,a.useContext)(r.b);if(!j)throw Error("Navbar must be used within a NavbarProvider");let{isMainnet:v,setIsMainnet:g}=j;return(0,c.jsx)("header",{className:"relative",children:(0,c.jsxs)("div",{className:"custom-screen navbar bg-base-100",children:[(0,c.jsxs)("div",{className:"navbar-start",children:[(0,c.jsxs)("div",{className:"dropdown",children:[(0,c.jsx)("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,c.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),(0,c.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/launch",children:"Launch"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/pools?size=4",children:"Pools"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/dashboard?account=".concat(null!=e?e:""),children:"Dashboard"})})]})]}),(0,c.jsx)(i.default,{href:"/",className:"btn btn-ghost text-xl",children:"Staqe"})]}),(0,c.jsx)("div",{className:"navbar-center lg:flex lg:gap-2",children:(0,c.jsxs)("ul",{className:"menu menu-horizontal px-1 z-[1] flex gap-2",children:[(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/launch",children:"Launch"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/pools?size=4",children:"Pools"})}),(0,c.jsx)("li",{children:(0,c.jsx)(i.default,{href:"/dashboard?account=".concat(null!=e?e:""),children:"Dashboard"})})]})}),(0,c.jsx)("div",{className:"navbar-end mr-4",children:e?(0,c.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,c.jsx)("div",{tabIndex:0,role:"button",className:"btn btn-ghost btn-sm m-1",children:(0,c.jsx)("div",{className:"font-mono",children:"".concat(e.slice(0,5),"..").concat(e.slice(e.length-3))})}),(0,c.jsxs)("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:[(0,c.jsx)("li",{children:(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)("span",{children:"Chain ID:"}),(0,c.jsx)("span",{children:t})]})}),(0,c.jsx)("li",{children:(0,c.jsxs)("div",{className:"flex justify-end items-center justify-items-center gap-2",children:[(0,c.jsx)("span",{children:"Testnet"}),(0,c.jsx)("input",{type:"checkbox",className:"toggle toggle-md",checked:v,onChange:()=>{g(!v)}}),(0,c.jsx)("span",{children:"Mainnet"})]})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{onClick:()=>b(),children:"Disconnect"})})]})]}):(0,c.jsx)("button",{onClick:()=>m({connector:s[0]}),className:"btn btn-ghost btn-sm m-1",children:"Connect"})})]})})},j=e=>{let{children:n}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(b,{}),(0,c.jsx)("main",{className:"flex-grow",children:n}),(0,c.jsx)(s,{})]})}},70006:function(e,n,t){"use strict";t.d(n,{v:function(){return j}});var c=t(92590),s=t(37062),r=t(92698),i=t(63792),a=t(44657),o=t(80235),l=t(44619),d=t(84150),u=t(42020),h=t(97990),x=t(31976),m=t(10710);let f={...l.d,testnet:!0,contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}}},b=(0,o.a)({id:1029,name:"BitTorrent Chain Donau",testnet:!0,nativeCurrency:{name:"BitTorrent",symbol:"BTT",decimals:18},rpcUrls:{default:{http:["https://pre-rpc.bittorrentchain.io/"]}},blockExplorers:{default:{name:"BitTorrent",url:"https://testscan.bt.io"}},contracts:{multicall3:{address:"0x5608020135e7Eb9a1ef6683aD4988200eA5Cfcbf"}}}),j=(0,s._)({chains:[d.o,u.v,h.c,x.S,b,m.d,f],connectors:[(0,c.L)()],ssr:!0,storage:(0,r.o)({storage:i.Dr}),transports:{[f.id]:(0,a.d)(),[d.o.id]:(0,a.d)(),[x.S.id]:(0,a.d)(),[b.id]:(0,a.d)(),[m.d.id]:(0,a.d)(),[u.v.id]:(0,a.d)(),[h.c.id]:(0,a.d)()}})},94734:function(){},81505:function(e){e.exports={style:{fontFamily:"'__Baumans_d09834', '__Baumans_Fallback_d09834'",fontWeight:400,fontStyle:"normal"},className:"__className_d09834"}},56008:function(e,n,t){"use strict";t.d(n,{$:function(){return u}});var c=t(47489),s=t(42510);async function r(e,n){let t;if((t="function"==typeof n.connector?e._internal.connectors.setup(n.connector):n.connector).uid===e.state.current)throw new s.wi;try{e.setState(e=>({...e,status:"connecting"})),t.emitter.emit("message",{type:"connecting"});let c=await t.connect({chainId:n.chainId}),s=c.accounts;return t.emitter.off("connect",e._internal.events.connect),t.emitter.on("change",e._internal.events.change),t.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",t.id),e.setState(e=>({...e,connections:new Map(e.connections).set(t.uid,{accounts:s,chainId:c.chainId,connector:t}),current:t.uid,status:"connected"})),{accounts:s,chainId:c.chainId}}catch(n){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),n}}var i=t(152),a=t(36707),o=t(83176);let l=[];function d(e){let n=e.connectors;return(0,o.v)(l,n)?l:(l=n,n)}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:n}=e,t=(0,a.Z)(e),{mutate:s,mutateAsync:o,...l}=(0,c.D)({...n,mutationFn:e=>r(t,e),mutationKey:["connect"]});return(0,i.useEffect)(()=>t.subscribe(e=>{let{status:n}=e;return n},(e,n)=>{"connected"===n&&"disconnected"===e&&l.reset()}),[t,l.reset]),{...l,connect:s,connectAsync:o,connectors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,a.Z)(e);return(0,i.useSyncExternalStore)(e=>(function(e,n){let{onChange:t}=n;return e._internal.connectors.subscribe((e,n)=>{t(Object.values(e),n)})})(n,{onChange:e}),()=>d(n),()=>d(n))}({config:t})}}}},function(e){e.O(0,[138,223,765,540,519,751,593,575,744],function(){return e(e.s=95711)}),_N_E=e.O()}]);