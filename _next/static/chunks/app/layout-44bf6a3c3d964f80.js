(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{86017:function(e,t,n){Promise.resolve().then(n.t.bind(n,4978,23)),Promise.resolve().then(n.t.bind(n,79601,23)),Promise.resolve().then(n.bind(n,7901)),Promise.resolve().then(n.bind(n,96507))},40888:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var s=n(20120),a=n.n(s)},7901:function(e,t,n){"use strict";n.d(t,{Providers:function(){return A}});var s=n(9131),a=n(91889),r=n(41244),i=n(35993),c=n(55463),o=class extends c.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,n){let s=t.queryKey,i=t.queryHash??(0,a.Rm)(s,t),c=this.get(i);return c||(c=new r.A({cache:this,queryKey:s,queryHash:i,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(s)}),this.add(c)),c}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,a._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,a._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},l=n(94056),u=class extends c.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#n=Date.now()}#t;#n;build(e,t,n){let s=new l.m({mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:n});return this.add(s),s}add(e){let t=h(e),n=this.#t.get(t)??[];n.push(e),this.#t.set(t,n),this.notify({type:"added",mutation:e})}remove(e){let t=h(e);if(this.#t.has(t)){let n=this.#t.get(t)?.filter(t=>t!==e);n&&(0===n.length?this.#t.delete(t):this.#t.set(t,n))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(h(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(h(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,a.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,a.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(a.ZT))))}};function h(e){return e.options.scope?.id??String(e.mutationId)}var d=n(62279),m=n(24015);function f(e,{pages:t,pageParams:n}){let s=t.length-1;return e.getNextPageParam(t[s],t,n[s],n)}var y=class{#s;#a;#r;#i;#c;#o;#l;#u;constructor(e={}){this.#s=e.queryCache||new o,this.#a=e.mutationCache||new u,this.#r=e.defaultOptions||{},this.#i=new Map,this.#c=new Map,this.#o=0}mount(){this.#o++,1===this.#o&&(this.#l=d.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onFocus())}),this.#u=m.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onOnline())}))}unmount(){this.#o--,0===this.#o&&(this.#l?.(),this.#l=void 0,this.#u?.(),this.#u=void 0)}isFetching(e){return this.#s.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),s=this.#s.build(this,n);return e.revalidateIfStale&&s.isStaleByTime(n.staleTime)&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return this.#s.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,n){let s=this.defaultQueryOptions({queryKey:e}),r=this.#s.get(s.queryHash),i=r?.state.data,c=(0,a.SE)(t,i);if(void 0!==c)return this.#s.build(this,s).setData(c,{...n,manual:!0})}setQueriesData(e,t,n){return i.V.batch(()=>this.#s.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,n)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state}removeQueries(e){let t=this.#s;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=this.#s,s={type:"active",...e};return i.V.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(s,t)))}cancelQueries(e={},t={}){let n={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#s.findAll(e).map(e=>e.cancel(n)))).then(a.ZT).catch(a.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#s.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let n={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(n,t)})}refetchQueries(e={},t){let n={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#s.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,n);return n.throwOnError||(t=t.catch(a.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(a.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=this.#s.build(this,t);return n.isStaleByTime(t.staleTime)?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(a.ZT).catch(a.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,n)=>{let s=async()=>{let n;let s=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,i=e.state.data?.pages||[],c=e.state.data?.pageParams||[],o=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?o=!0:e.signal.addEventListener("abort",()=>{o=!0}),e.signal)})},u=e.options.queryFn&&e.options.queryFn!==a.CN?e.options.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${e.options.queryHash}'`)),h=async(t,n,s)=>{if(o)return Promise.reject();if(null==n&&t.pages.length)return Promise.resolve(t);let r={queryKey:e.queryKey,pageParam:n,direction:s?"backward":"forward",meta:e.options.meta};l(r);let i=await u(r),{maxPages:c}=e.options,h=s?a.Ht:a.VX;return{pages:h(t.pages,i,c),pageParams:h(t.pageParams,n,c)}};if(r&&i.length){let e="backward"===r,t={pages:i,pageParams:c},a=(e?function(e,{pages:t,pageParams:n}){return e.getPreviousPageParam?.(t[0],t,n[0],n)}:f)(s,t);n=await h(t,a,e)}else{n=await h({pages:[],pageParams:[]},c[0]??s.initialPageParam);let e=t??i.length;for(let t=1;t<e;t++){let e=f(s,n);n=await h(n,e)}}return n};e.options.persister?e.fetchFn=()=>e.options.persister?.(s,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n):e.fetchFn=s}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(a.ZT).catch(a.ZT)}resumePausedMutations(){return m.N.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#s}getMutationCache(){return this.#a}getDefaultOptions(){return this.#r}setDefaultOptions(e){this.#r=e}setQueryDefaults(e,t){this.#i.set((0,a.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#i.values()],n={};return t.forEach(t=>{(0,a.to)(e,t.queryKey)&&(n={...n,...t.defaultOptions})}),n}setMutationDefaults(e,t){this.#c.set((0,a.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#c.values()],n={};return t.forEach(t=>{(0,a.to)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#r.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,a.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===a.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#r.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#s.clear(),this.#a.clear()}},g=n(58065),p=n(3905),v=["light","dark"],b="(prefers-color-scheme: dark)",x="undefined"==typeof window,w=p.createContext(void 0),C=e=>p.useContext(w)?e.children:p.createElement(j,{...e}),q=["light","dark"],j=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:a=!0,storageKey:r="theme",themes:i=q,defaultTheme:c=s?"system":"light",attribute:o="data-theme",value:l,children:u,nonce:h}=e,[d,m]=p.useState(()=>P(r,c)),[f,y]=p.useState(()=>P(r)),g=l?Object.values(l):i,x=p.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=E());let r=l?l[t]:t,i=n?S():null,u=document.documentElement;if("class"===o?(u.classList.remove(...g),r&&u.classList.add(r)):r?u.setAttribute(o,r):u.removeAttribute(o),a){let e=v.includes(c)?c:null,n=v.includes(t)?t:e;u.style.colorScheme=n}null==i||i()},[]),C=p.useCallback(e=>{let t="function"==typeof e?e(e):e;m(t);try{localStorage.setItem(r,t)}catch(e){}},[t]),j=p.useCallback(e=>{y(E(e)),"system"===d&&s&&!t&&x("system")},[d,t]);p.useEffect(()=>{let e=window.matchMedia(b);return e.addListener(j),j(e),()=>e.removeListener(j)},[j]),p.useEffect(()=>{let e=e=>{e.key===r&&C(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),p.useEffect(()=>{x(null!=t?t:d)},[t,d]);let _=p.useMemo(()=>({theme:d,setTheme:C,forcedTheme:t,resolvedTheme:"system"===d?f:d,themes:s?[...i,"system"]:i,systemTheme:s?f:void 0}),[d,C,t,f,s,i]);return p.createElement(w.Provider,{value:_},p.createElement(O,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:a,storageKey:r,themes:i,defaultTheme:c,attribute:o,value:l,children:u,attrs:g,nonce:h}),u)},O=p.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:a,enableColorScheme:r,defaultTheme:i,value:c,attrs:o,nonce:l}=e,u="system"===i,h="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(o.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),d=r?(v.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=c?c[e]:e,i=t?e+"|| ''":"'".concat(a,"'"),o="";return r&&n&&!t&&v.includes(e)&&(o+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||a?o+="c.add(".concat(i,")"):o+="null":a&&(o+="d[s](n,".concat(i,")")),o},f=t?"!function(){".concat(h).concat(m(t),"}()"):a?"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(u,")){var t='").concat(b,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(m("dark"),"}else{").concat(m("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(m(c?"x[e]":"e",!0),"}").concat(u?"":"else{"+m(i,!1,!1)+"}").concat(d,"}catch(e){}}()"):"!function(){try{".concat(h,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(m(c?"x[e]":"e",!0),"}else{").concat(m(i,!1,!1),";}").concat(d,"}catch(t){}}();");return p.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:f}})}),P=(e,t)=>{let n;if(!x){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},S=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},E=e=>(e||(e=window.matchMedia(b)),e.matches?"dark":"light"),_=n(20926),Q=n(55527);function A(e){let{children:t}=e,[n]=(0,p.useState)(()=>new y);return(0,s.jsx)(_.F,{config:Q.v,children:(0,s.jsx)(g.aH,{client:n,children:(0,s.jsx)(C,{attribute:"class",children:t})})})}},96507:function(e,t,n){"use strict";n.d(t,{default:function(){return b}});var s=n(9131),a=()=>(0,s.jsx)("footer",{className:"mt-20",children:(0,s.jsx)("div",{className:"custom-screen",children:(0,s.jsxs)("div",{className:"mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex",children:[(0,s.jsx)("p",{className:"text-gray-400 text-center",children:"\xa9 2025 Staqe.App"}),(0,s.jsx)("div",{className:"flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0",children:(0,s.jsx)("a",{href:"/",target:"_blank","aria-label":"social media",children:(0,s.jsxs)("svg",{className:"w-6 h-6 hover:text-gray-200 duration-150",fill:"none",viewBox:"0 0 48 48",children:[(0,s.jsx)("g",{clipPath:"url(#clip0_17_80)",children:(0,s.jsx)("path",{fill:"currentColor",d:"M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"})}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_17_80",children:(0,s.jsx)("path",{fill:"currentColor",d:"M0 0h48v48H0z"})})})]})})})]})})}),r=n(40888),i=n(58166),c=n(76278),o=n(94704);async function l(e,t){let n;if((n="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new o.wi;try{e.setState(e=>({...e,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});let s=await n.connect({chainId:t.chainId}),a=s.accounts;return n.emitter.off("connect",e._internal.events.connect),n.emitter.on("change",e._internal.events.change),n.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",n.id),e.setState(e=>({...e,connections:new Map(e.connections).set(n.uid,{accounts:a,chainId:s.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:a,chainId:s.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var u=n(3905),h=n(79259),d=n(17311);let m=[];function f(e){let t=e.connectors;return(0,d.v)(m,t)?m:(m=t,t)}async function y(e,t={}){let n;if(t.connector)n=t.connector;else{let{connections:t,current:s}=e.state,a=t.get(s);n=a?.connector}let s=e.state.connections;n&&(await n.disconnect(),n.emitter.off("change",e._internal.events.change),n.emitter.off("disconnect",e._internal.events.disconnect),n.emitter.on("connect",e._internal.events.connect),s.delete(n.uid)),e.setState(e=>{if(0===s.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=s.values().next().value;return{...e,connections:new Map(s),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let n=e.state.connections.get(t)?.connector;if(!n)return;await e.storage?.setItem("recentConnectorId",n.id)}}let g=[];function p(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,d.v)(g,t)?g:(g=t,t)}var v=()=>{let{address:e,status:t,chainId:n}=(0,i.m)(),{connectors:a,connect:o}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,h.Z)(e),s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,h.Z)(e);return(0,u.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e._internal.connectors.subscribe((e,t)=>{n(Object.values(e),t)})})(t,{onChange:e}),()=>f(t),()=>f(t))}({config:n}),{mutate:a,mutateAsync:r,...i}=(0,c.D)({...t,mutationFn:e=>l(n,e),mutationKey:["connect"]});return(0,u.useEffect)(()=>n.subscribe(e=>{let{status:t}=e;return t},(e,t)=>{"connected"===t&&"disconnected"===e&&i.reset()}),[n,i]),{...i,connect:a,connectAsync:r,connectors:s}}(),{disconnect:m}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,n=(0,h.Z)(e),{mutate:s,mutateAsync:a,...r}=(0,c.D)({...t,mutationFn:e=>y(n,e),mutationKey:["disconnect"]});return{...r,connectors:(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,h.Z)(e);return(0,u.useSyncExternalStore)(e=>(function(e,t){let{onChange:n}=t;return e.subscribe(()=>p(e),n,{equalityFn:d.v})})(t,{onChange:e}),()=>p(t),()=>p(t))})({config:n}).map(e=>e.connector),disconnect:s,disconnectAsync:a}}();return(0,s.jsx)("header",{className:"relative",children:(0,s.jsxs)("div",{className:"custom-screen navbar bg-base-100",children:[(0,s.jsxs)("div",{className:"navbar-start",children:[(0,s.jsxs)("div",{className:"dropdown",children:[(0,s.jsx)("div",{tabIndex:0,role:"button",className:"btn btn-ghost lg:hidden",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h8m-8 6h16"})})}),(0,s.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/launch",children:"Launch"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/pools?size=4",children:"Pools"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/dashboard?account=".concat(null!=e?e:""),children:"Dashboard"})})]})]}),(0,s.jsx)(r.default,{href:"/",className:"btn btn-ghost text-xl",children:"Staqe"})]}),(0,s.jsx)("div",{className:"navbar-center lg:flex lg:gap-2",children:(0,s.jsxs)("ul",{className:"menu menu-horizontal px-1 z-[1] flex gap-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/launch",children:"Launch"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/pools?size=4",children:"Pools"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r.default,{href:"/dashboard?account=".concat(null!=e?e:""),children:"Dashboard"})})]})}),(0,s.jsx)("div",{className:"navbar-end mr-4",children:e?(0,s.jsx)("div",{className:"font-mono",children:"".concat(e.slice(0,5),"..").concat(e.slice(e.length-3))}):(0,s.jsx)("button",{onClick:()=>o({connector:a[0]}),className:"btn",children:"Connect"})})]})})},b=e=>{let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{}),(0,s.jsx)("main",{className:"flex-grow",children:t}),(0,s.jsx)(a,{})]})}},55527:function(e,t,n){"use strict";n.d(t,{v:function(){return f}});var s=n(17938),a=n(29765),r=n(67974),i=n(7820),c=n(78258),o=n(47378),l=n(31417),u=n(50258),h=n(62804);let d={...l.d,contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}}},m=(0,o.a)({id:1029,name:"BitTorrent Chain Donau",nativeCurrency:{name:"BitTorrent",symbol:"BTT",decimals:18},rpcUrls:{default:{http:["https://pre-rpc.bittorrentchain.io/"]}},blockExplorers:{default:{name:"BitTorrent",url:"https://testscan.bt.io"}},contracts:{multicall3:{address:"0x5608020135e7Eb9a1ef6683aD4988200eA5Cfcbf"}}}),f=(0,a._)({chains:[d,u.o,m,h.d],connectors:[(0,s.L)()],ssr:!1,storage:(0,r.o)({storage:i.Dr}),transports:{[d.id]:(0,c.d)(),[u.o.id]:(0,c.d)(),[m.id]:(0,c.d)(),[h.d.id]:(0,c.d)()}})},79601:function(){},4978:function(e){e.exports={style:{fontFamily:"'__Baumans_d09834', '__Baumans_Fallback_d09834'",fontWeight:400,fontStyle:"normal"},className:"__className_d09834"}}},function(e){e.O(0,[547,468,120,133,837,649,157,744],function(){return e(e.s=86017)}),_N_E=e.O()}]);