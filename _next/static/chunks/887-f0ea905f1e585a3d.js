"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{11215:function(e,t,a){a.d(t,{default:function(){return n.a}});var s=a(70765),n=a.n(s)},14225:function(e,t,a){a.d(t,{S:function(){return f}});var s=a(20599),n=a(22747),i=a(98139),r=a(74180),u=class extends r.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,a){let i=t.queryKey,r=t.queryHash??(0,s.Rm)(i,t),u=this.get(r);return u||(u=new n.A({cache:this,queryKey:i,queryHash:r,options:e.defaultQueryOptions(t),state:a,defaultOptions:e.getQueryDefaults(i)}),this.add(u)),u}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,s._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,s._x)(e,t)):t}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},o=a(87289),l=class extends r.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#a=Date.now()}#t;#a;build(e,t,a){let s=new o.m({mutationCache:this,mutationId:++this.#a,options:e.defaultMutationOptions(t),state:a});return this.add(s),s}add(e){let t=c(e),a=this.#t.get(t)??[];a.push(e),this.#t.set(t,a),this.notify({type:"added",mutation:e})}remove(e){let t=c(e);if(this.#t.has(t)){let a=this.#t.get(t)?.filter(t=>t!==e);a&&(0===a.length?this.#t.delete(t):this.#t.set(t,a))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(c(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(c(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){i.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,s.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,s.X7)(e,t))}notify(e){i.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(s.ZT))))}};function c(e){return e.options.scope?.id??String(e.mutationId)}var h=a(30853),d=a(58446);function m(e,{pages:t,pageParams:a}){let s=t.length-1;return e.getNextPageParam(t[s],t,a[s],a)}var f=class{#s;#n;#i;#r;#u;#o;#l;#c;constructor(e={}){this.#s=e.queryCache||new u,this.#n=e.mutationCache||new l,this.#i=e.defaultOptions||{},this.#r=new Map,this.#u=new Map,this.#o=0}mount(){this.#o++,1===this.#o&&(this.#l=h.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onFocus())}),this.#c=d.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onOnline())}))}unmount(){this.#o--,0===this.#o&&(this.#l?.(),this.#l=void 0,this.#c?.(),this.#c=void 0)}isFetching(e){return this.#s.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#n.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let a=this.defaultQueryOptions(e),n=this.#s.build(this,a);return e.revalidateIfStale&&n.isStaleByTime((0,s.KC)(a.staleTime,n))&&this.prefetchQuery(a),Promise.resolve(t)}}getQueriesData(e){return this.#s.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,a){let n=this.defaultQueryOptions({queryKey:e}),i=this.#s.get(n.queryHash),r=i?.state.data,u=(0,s.SE)(t,r);if(void 0!==u)return this.#s.build(this,n).setData(u,{...a,manual:!0})}setQueriesData(e,t,a){return i.V.batch(()=>this.#s.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,a)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state}removeQueries(e){let t=this.#s;i.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let a=this.#s,s={type:"active",...e};return i.V.batch(()=>(a.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(s,t)))}cancelQueries(e={},t={}){let a={revert:!0,...t};return Promise.all(i.V.batch(()=>this.#s.findAll(e).map(e=>e.cancel(a)))).then(s.ZT).catch(s.ZT)}invalidateQueries(e={},t={}){return i.V.batch(()=>{if(this.#s.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let a={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(a,t)})}refetchQueries(e={},t){let a={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(i.V.batch(()=>this.#s.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,a);return a.throwOnError||(t=t.catch(s.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(s.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let a=this.#s.build(this,t);return a.isStaleByTime((0,s.KC)(t.staleTime,a))?a.fetch(t):Promise.resolve(a.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(s.ZT).catch(s.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,a)=>{let n=async()=>{let a;let n=e.options,i=e.fetchOptions?.meta?.fetchMore?.direction,r=e.state.data?.pages||[],u=e.state.data?.pageParams||[],o=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?o=!0:e.signal.addEventListener("abort",()=>{o=!0}),e.signal)})},c=(0,s.cG)(e.options,e.fetchOptions),h=async(t,a,n)=>{if(o)return Promise.reject();if(null==a&&t.pages.length)return Promise.resolve(t);let i={queryKey:e.queryKey,pageParam:a,direction:n?"backward":"forward",meta:e.options.meta};l(i);let r=await c(i),{maxPages:u}=e.options,h=n?s.Ht:s.VX;return{pages:h(t.pages,r,u),pageParams:h(t.pageParams,a,u)}};if(i&&r.length){let e="backward"===i,t={pages:r,pageParams:u},s=(e?function(e,{pages:t,pageParams:a}){return e.getPreviousPageParam?.(t[0],t,a[0],a)}:m)(n,t);a=await h(t,s,e)}else{a=await h({pages:[],pageParams:[]},u[0]??n.initialPageParam);let e=t??r.length;for(let t=1;t<e;t++){let e=m(n,a);a=await h(a,e)}}return a};e.options.persister?e.fetchFn=()=>e.options.persister?.(n,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},a):e.fetchFn=n}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(s.ZT).catch(s.ZT)}resumePausedMutations(){return d.N.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#s}getMutationCache(){return this.#n}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#r.set((0,s.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#r.values()],a={};return t.forEach(t=>{(0,s.to)(e,t.queryKey)&&(a={...a,...t.defaultOptions})}),a}setMutationDefaults(e,t){this.#u.set((0,s.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#u.values()],a={};return t.forEach(t=>{(0,s.to)(e,t.mutationKey)&&(a={...a,...t.defaultOptions})}),a}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,s.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===s.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#s.clear(),this.#n.clear()}}},10069:function(e,t,a){a.d(t,{f:function(){return o}});var s=a(152),n=["light","dark"],i="(prefers-color-scheme: dark)",r="undefined"==typeof window,u=s.createContext(void 0),o=e=>s.useContext(u)?e.children:s.createElement(c,{...e}),l=["light","dark"],c=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:r=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:y=l,defaultTheme:g=r?"system":"light",attribute:p="data-theme",value:v,children:b,nonce:C}=e,[q,w]=s.useState(()=>d(c,g)),[O,Q]=s.useState(()=>d(c)),P=v?Object.values(v):y,E=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=f());let s=v?v[t]:t,i=a?m():null,u=document.documentElement;if("class"===p?(u.classList.remove(...P),s&&u.classList.add(s)):s?u.setAttribute(p,s):u.removeAttribute(p),o){let e=n.includes(g)?g:null,a=n.includes(t)?t:e;u.style.colorScheme=a}null==i||i()},[]),T=s.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(c,t)}catch(e){}},[t]),S=s.useCallback(e=>{Q(f(e)),"system"===q&&r&&!t&&E("system")},[q,t]);s.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(S),S(e),()=>e.removeListener(S)},[S]),s.useEffect(()=>{let e=e=>{e.key===c&&T(e.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),s.useEffect(()=>{E(null!=t?t:q)},[t,q]);let A=s.useMemo(()=>({theme:q,setTheme:T,forcedTheme:t,resolvedTheme:"system"===q?O:q,themes:r?[...y,"system"]:y,systemTheme:r?O:void 0}),[q,T,t,O,r,y]);return s.createElement(u.Provider,{value:A},s.createElement(h,{forcedTheme:t,disableTransitionOnChange:a,enableSystem:r,enableColorScheme:o,storageKey:c,themes:y,defaultTheme:g,attribute:p,value:v,children:b,attrs:P,nonce:C}),b)},h=s.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:r,enableSystem:u,enableColorScheme:o,defaultTheme:l,value:c,attrs:h,nonce:d}=e,m="system"===l,f="class"===r?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(h.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(r,"',s='setAttribute';"),y=o?(n.includes(l)?l:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(l,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],s=c?c[e]:e,i=t?e+"|| ''":"'".concat(s,"'"),u="";return o&&a&&!t&&n.includes(e)&&(u+="d.style.colorScheme = '".concat(e,"';")),"class"===r?t||s?u+="c.add(".concat(i,")"):u+="null":s&&(u+="d[s](n,".concat(i,")")),u},p=t?"!function(){".concat(f).concat(g(t),"}()"):u?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(a,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(i,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}").concat(m?"":"else{"+g(l,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(a,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}else{").concat(g(l,!1,!1),";}").concat(y,"}catch(t){}}();");return s.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:p}})}),d=(e,t)=>{let a;if(!r){try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);