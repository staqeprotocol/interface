"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[400],{47710:function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,r,o,a){if("function"!=typeof r)throw TypeError("The listener must be a function");var s=new i(r,o||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,a=Array(o);i<o;i++)a[i]=r[i].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,i,o,a){var s=n?n+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,o),!0;case 6:return u.fn.call(u.context,t,r,i,o,a),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,f=u.length;for(l=0;l<f;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,i);break;default:if(!c)for(h=1,c=Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||i&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s},20291:function(e,t,n){n.d(t,{L:function(){return h}});var r=n(84486),i=n(25812),o=n(54806),a=n(80331),s=n(37148),c=n(63801),l=n(21468);let u=/(rabby|trustwallet)/,d={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:f(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>f(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:f(e,"isPhantom")}};function h(e={}){let t,n,p,m;let{shimDisconnect:g=!0,unstable_shimAsyncInject:v}=e;function w(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...d[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return d=>({get icon(){return w().icon},get id(){return w().id},get name(){return w().name},get supportsSimulation(){return u.test(this.id.toLowerCase())},type:h.type,async setup(){let n=await this.getProvider();n&&e.target&&(p||(p=this.onConnect.bind(this),n.on("connect",p)),t||(t=this.onAccountsChanged.bind(this),n.on("accountsChanged",t)))},async connect({chainId:o,isReconnecting:a}={}){let s=await this.getProvider();if(!s)throw new l.M;let c=[];if(a)c=await this.getAccounts().catch(()=>[]);else if(g)try{let e=await s.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});c=e[0]?.caveats?.[0]?.value?.map(e=>r.K(e))}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw e}try{c?.length||a||(c=(await s.request({method:"eth_requestAccounts"})).map(e=>(0,r.K)(e))),p&&(s.removeListener("connect",p),p=void 0),t||(t=this.onAccountsChanged.bind(this),s.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),s.on("chainChanged",n)),m||(m=this.onDisconnect.bind(this),s.on("disconnect",m));let l=await this.getChainId();if(o&&l!==o){let e=await this.switchChain({chainId:o}).catch(e=>{if(e.code===i.ab.code)throw e;return{id:l}});l=e?.id??l}return g&&await d.storage?.removeItem(`${this.id}.disconnected`),e.target||await d.storage?.setItem("injected.connected",!0),{accounts:c,chainId:l}}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw new i.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new l.M;n&&(t.removeListener("chainChanged",n),n=void 0),m&&(t.removeListener("disconnect",m),m=void 0),p||(p=this.onConnect.bind(this),t.on("connect",p)),g&&await d.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await d.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new l.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,r.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new l.M;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=w();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?f(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(g&&await d.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await d.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==v&&!1!==v){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof v?v:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(n=>setTimeout(()=>n(e()),t))]))return!0}throw new l.M}return!!(await (0,o.J)(()=>(0,a.F)(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=await this.getProvider();if(!n)throw new l.M;let r=d.chains.find(e=>e.id===t);if(!r)throw new i.x3(new c.X4);try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,s.eC)(t)}]}).then(async()=>{await this.getChainId()===t&&d.emitter.emit("change",{chainId:t})}),new Promise(e=>d.emitter.once("change",({chainId:n})=>{n===t&&e()}))]),r}catch(o){if(4902===o.code||o?.data?.originalError?.code===4902)try{let o,a;let{default:c,...l}=r.blockExplorers??{};e?.blockExplorerUrls?o=e.blockExplorerUrls:c&&(o=[c.url,...Object.values(l).map(e=>e.url)]),a=e?.rpcUrls?.length?e.rpcUrls:[r.rpcUrls.default?.http[0]??""];let u={blockExplorerUrls:o,chainId:(0,s.eC)(t),chainName:e?.chainName??r.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??r.nativeCurrency,rpcUrls:a};if(await n.request({method:"wallet_addEthereumChain",params:[u]}),await this.getChainId()!==t)throw new i.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new i.ab(e)}if(o.code===i.ab.code)throw new i.ab(o);throw new i.x3(o)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(d.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),g&&await d.storage?.removeItem(`${this.id}.disconnected`)}else d.emitter.emit("change",{accounts:e.map(e=>(0,r.K)(e))})},onChainChanged(e){let t=Number(e);d.emitter.emit("change",{chainId:t})},async onConnect(e){let r=await this.getAccounts();if(0===r.length)return;let i=Number(e.chainId);d.emitter.emit("connect",{accounts:r,chainId:i});let o=await this.getProvider();o&&(p&&(o.removeListener("connect",p),p=void 0),t||(t=this.onAccountsChanged.bind(this),o.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),o.on("chainChanged",n)),m||(m=this.onDisconnect.bind(this),o.on("disconnect",m)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(d.emitter.emit("disconnect"),t&&(n&&(t.removeListener("chainChanged",n),n=void 0),m&&(t.removeListener("disconnect",m),m=void 0),p||(p=this.onConnect.bind(this),t.on("connect",p))))}})}function f(e,t){function n(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let r=e.ethereum;return r?.providers?r.providers.find(e=>n(e)):r&&n(r)?r:void 0}h.type="injected"},30948:function(e,t,n){let r;n.d(t,{_:function(){return S}});var i,o=n(66582);let a=e=>(t,n,r)=>{let i=r.subscribe;return r.subscribe=(e,t,n)=>{let o=e;if(t){let i=(null==n?void 0:n.equalityFn)||Object.is,a=e(r.getState());o=n=>{let r=e(n);if(!i(a,r)){let e=a;t(a=r,e)}},(null==n?void 0:n.fireImmediately)&&t(a,a)}return i(o)},e(t,n,r)},s=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>s(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>s(t)(e)}}},c=(e,t)=>(n,r,i)=>{let o,a,c={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,u=new Set,d=new Set;try{o=c.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),n(...e)},r,i);let h=s(c.serialize),f=()=>{let e;let t=h({state:c.partialize({...r()}),version:c.version}).then(e=>o.setItem(c.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=i.setState;i.setState=(e,t)=>{p(e,t),f()};let m=e((...e)=>{n(...e),f()},r,i),g=()=>{var e;if(!o)return;l=!1,u.forEach(e=>e(r()));let t=(null==(e=c.onRehydrateStorage)?void 0:e.call(c,r()))||void 0;return s(o.getItem.bind(o))(c.name).then(e=>{if(e)return c.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===c.version)return e.state;if(c.migrate)return c.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(a=c.merge(e,null!=(t=r())?t:m),!0),f()}).then(()=>{null==t||t(a,void 0),l=!0,d.forEach(e=>e(a))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{c={...c,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},g(),a||m},l=(e,t)=>(n,r,i)=>{let o,a={storage:function(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var t;let r=e=>null===e?null:JSON.parse(e,void 0),i=null!=(t=n.getItem(e))?t:null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,t)=>n.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>n.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,l=new Set,u=new Set,d=a.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)},r,i);let h=()=>{let e=a.partialize({...r()});return d.setItem(a.name,{state:e,version:a.version})},f=i.setState;i.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{n(...e),h()},r,i),m=()=>{var e,t;if(!d)return;c=!1,l.forEach(e=>{var t;return e(null!=(t=r())?t:p)});let i=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=r())?e:p))||void 0;return s(d.getItem.bind(d))(a.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(o=a.merge(e,null!=(t=r())?t:p),!0),h()}).then(()=>{null==i||i(o,void 0),o=r(),c=!0,u.forEach(e=>e(o))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>c,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},a.skipHydration||m(),o||p},u=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),c(e,t)):l(e,t),d=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,o),o},h=e=>e?d(e):d;var f=n(20291),p=n(47710),m=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class g{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),i.set(this,new p)}on(e,t){m(this,i,"f").on(e,t)}once(e,t){m(this,i,"f").once(e,t)}off(e,t){m(this,i,"f").off(e,t)}emit(e,...t){let n=t[0];m(this,i,"f").emit(e,{uid:this.uid,...n})}listenerCount(e){return m(this,i,"f").listenerCount(e)}}i=new WeakMap;var v=n(20651),w=n(63801);let y=256;var b=n(75718);function S(e){let t;let{multiInjectedProviderDiscovery:n=!0,storage:i=(0,v.o)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:v.w}),syncConnectedChain:s=!0,ssr:c,...l}=e,d="undefined"!=typeof window&&n?function(){let e=new Set,t=[],n=()=>(function(e){let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(n=>{t.some(({info:e})=>e.uuid===n.info.uuid)||(t=[...t,n],e.forEach(e=>e(t,{added:[n]})))}),r=n();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),r()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),r(),r=n()},subscribe:(n,{emitImmediately:r}={})=>(e.add(n),r&&n(t,{added:t}),()=>e.delete(n))}}():void 0,p=h(()=>l.chains),m=h(()=>[...l.connectors??[],...c?[]:d?.getProviders().map(C)??[]].map(S));function S(e){let t=new g(function(e=11){if(!r||y+e>512){r="",y=0;for(let e=0;e<256;e++)r+=(256+256*Math.random()|0).toString(16).substring(1)}return r.substring(y,y+++e)}()),n={...e({emitter:t,chains:p.getState(),storage:i}),emitter:t,uid:t.uid};return t.on("connect",O),n.setup?.(),n}function C(e){let{info:t}=e,n=e.provider;return(0,f.L)({target:{...t,id:t.rdns,provider:n}})}let I=new Map;function _(){return{chainId:p.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let P="0.0.0-canary-";t=b.i.startsWith(P)?parseInt(b.i.replace(P,"")):parseInt(b.i.split(".")[0]??"0");let E=h(a(i?u(_,{migrate(e,n){if(n===t)return e;let r=_(),i=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:r.chainId;return{...r,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:n,name:r,type:i,uid:o}=t.connector;return[e,{...t,connector:{id:n,name:r,type:i,uid:o}}]})},chainId:e.chainId,current:e.current}),skipHydration:c,storage:i,version:t}):_));function k(e){E.setState(t=>{let n=t.connections.get(e.uid);return n?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??n.accounts,chainId:e.chainId??n.chainId,connector:n.connector})}:t})}function O(e){"connecting"!==E.getState().status&&"reconnecting"!==E.getState().status&&E.setState(t=>{let n=m.getState().find(t=>t.uid===e.uid);return n?(n.emitter.listenerCount("connect")&&n.emitter.off("connect",k),n.emitter.listenerCount("change")||n.emitter.on("change",k),n.emitter.listenerCount("disconnect")||n.emitter.on("disconnect",x),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:n}),current:e.uid,status:"connected"}):t})}function x(e){E.setState(t=>{let n=t.connections.get(e.uid);if(n){let e=n.connector;e.emitter.listenerCount("change")&&n.connector.emitter.off("change",k),e.emitter.listenerCount("disconnect")&&n.connector.emitter.off("disconnect",x),e.emitter.listenerCount("connect")||n.connector.emitter.on("connect",O)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let r=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:r.connector.uid}})}return s&&E.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(p.getState().some(t=>t.id===e))return E.setState(t=>({...t,chainId:e??t.chainId}))}),d?.subscribe(e=>{let t=new Map;for(let e of m.getState())t.set(e.id,!0);let n=[];for(let r of e){let e=S(C(r));t.has(e.id)||n.push(e)}(!i||E.persist.hasHydrated())&&m.setState(e=>[...e,...n],!0)}),{get chains(){return p.getState()},get connectors(){return m.getState()},storage:i,getClient:function(e={}){let t;let n=e.chainId??E.getState().chainId,r=p.getState().find(e=>e.id===n);if(e.chainId&&!r)throw new w.X4;{let e=I.get(E.getState().chainId);if(e&&!r)return e;if(!r)throw new w.X4}{let e=I.get(n);if(e)return e}if(l.client)t=l.client({chain:r});else{let e=r.id,n=p.getState().map(e=>e.id),i={};for(let[t,r]of Object.entries(l))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof r){if(e in r)i[t]=r[e];else{if(n.some(e=>e in r))continue;i[t]=r}}else i[t]=r}t=(0,o.e)({...i,chain:r,batch:i.batch??{multicall:!0},transport:t=>l.transports[e]({...t,connectors:m})})}return I.set(n,t),t},get state(){return E.getState()},setState(e){let t;t="function"==typeof e?e(E.getState()):e;let n=_();"object"!=typeof t&&(t=n),Object.keys(n).some(e=>!(e in t))&&(t=n),E.setState(t,!0)},subscribe:(e,t,n)=>E.subscribe(e,t,n?{...n,fireImmediately:n.emitImmediately}:void 0),_internal:{mipd:d,store:E,ssr:!!c,syncConnectedChain:s,transports:l.transports,chains:{setState(e){let t="function"==typeof e?e(p.getState()):e;if(0!==t.length)return p.setState(t,!0)},subscribe:e=>p.subscribe(e)},connectors:{providerDetailToConnector:C,setup:S,setState:e=>m.setState("function"==typeof e?e(m.getState()):e,!0),subscribe:e=>m.subscribe(e)},events:{change:k,connect:O,disconnect:x}}}}},20651:function(e,t,n){function r(e,t){return JSON.parse(e,(e,n)=>{let r=n;return r?.__type==="bigint"&&(r=BigInt(r.value)),r?.__type==="Map"&&(r=new Map(r.value)),t?.(e,r)??r})}function i(e,t){return e.slice(0,t).join(".")||"."}function o(e,t){let{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function a(e,t,n,r){return JSON.stringify(e,function(e,t){let n="function"==typeof e,r="function"==typeof t,a=[],s=[];return function(c,l){if("object"==typeof l){if(a.length){let e=o(a,this);0===e?a[a.length]=this:(a.splice(e),s.splice(e)),s[s.length]=c;let n=o(a,l);if(0!==n)return r?t.call(this,c,l,i(s,n)):`[ref=${i(s,n)}]`}else a[0]=l,s[0]=c}return n?e.call(this,c,l):l}}((e,n)=>{let r=n;return"bigint"==typeof r&&(r={__type:"bigint",value:n.toString()}),r instanceof Map&&(r={__type:"Map",value:Array.from(n.entries())}),t?.(e,r)??r},r),n??void 0)}function s(e){let{deserialize:t=r,key:n="wagmi",serialize:i=a,storage:o=c}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...o,key:n,async getItem(e,r){let i=o.getItem(`${n}.${e}`),a=await s(i);return a?t(a)??null:r??null},async setItem(e,t){let r=`${n}.${e}`;null===t?await s(o.removeItem(r)):await s(o.setItem(r,i(t)))},async removeItem(e){await s(o.removeItem(`${n}.${e}`))}}}n.d(t,{o:function(){return s},w:function(){return c}});let c={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},21468:function(e,t,n){n.d(t,{M:function(){return i},O:function(){return o}});var r=n(64703);class i extends r.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class o extends r.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},34343:function(e,t,n){n.d(t,{Dr:function(){return r}});let r={getItem:e=>"undefined"==typeof window?null:function(e,t){let n=e.split("; ").find(e=>e.startsWith(`${t}=`));if(n)return n.substring(t.length+1)}(document.cookie,e)??null,setItem(e,t){"undefined"!=typeof window&&(document.cookie=`${e}=${t}`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1`)}}},62804:function(e,t,n){n.d(t,{d:function(){return r}});let r=(0,n(47378).a)({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0})},31417:function(e,t,n){n.d(t,{d:function(){return r}});let r=(0,n(47378).a)({id:1337,name:"Localhost",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]}}})},50258:function(e,t,n){n.d(t,{o:function(){return r}});let r=(0,n(47378).a)({id:534351,name:"Scroll Sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia-rpc.scroll.io"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia-blockscout.scroll.io",apiUrl:"https://sepolia-blockscout.scroll.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:9473}},testnet:!0})},78258:function(e,t,n){n.d(t,{d:function(){return d}});var r=n(43397),i=n(80924);class o extends i.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var a=n(32165),s=n(80331),c=n(70671);let l={current:0,take(){return this.current++},reset(){this.current=0}};var u=n(51509);function d(e,t={}){let{batch:n,fetchOptions:i,key:d="http",name:h="HTTP JSON-RPC",onFetchRequest:f,onFetchResponse:p,retryDelay:m}=t;return({chain:g,retryCount:v,timeout:w})=>{let{batchSize:y=1e3,wait:b=0}="object"==typeof n?n:{},S=t.retryCount??v,C=w??t.timeout??1e4,I=e||g?.rpcUrls.default.http[0];if(!I)throw new o;let _=function(e,t={}){return{async request(n){let{body:i,onRequest:o=t.onRequest,onResponse:a=t.onResponse,timeout:u=t.timeout??1e4}=n,d={...t.fetchOptions??{},...n.fetchOptions??{}},{headers:h,method:f,signal:p}=d;try{let t;let n=await (0,s.F)(async({signal:t})=>{let n={...d,body:Array.isArray(i)?(0,c.P)(i.map(e=>({jsonrpc:"2.0",id:e.id??l.take(),...e}))):(0,c.P)({jsonrpc:"2.0",id:i.id??l.take(),...i}),headers:{...h,"Content-Type":"application/json"},method:f||"POST",signal:p||(u>0?t:null)},r=new Request(e,n);return o&&await o(r),await fetch(e,n)},{errorInstance:new r.W5({body:i,url:e}),timeout:u,signal:!0});if(a&&await a(n),n.headers.get("Content-Type")?.startsWith("application/json")?t=await n.json():(t=await n.text(),t=JSON.parse(t||"{}")),!n.ok)throw new r.Gg({body:i,details:(0,c.P)(t.error)||n.statusText,headers:n.headers,status:n.status,url:e});return t}catch(t){if(t instanceof r.Gg||t instanceof r.W5)throw t;throw new r.Gg({body:i,details:t.message,url:e})}}}}(I,{fetchOptions:i,onRequest:f,onResponse:p,timeout:C});return(0,u.q)({key:d,name:h,async request({method:t,params:i}){let o={method:t,params:i},{schedule:s}=(0,a.S)({id:`${e}`,wait:b,shouldSplitBatch:e=>e.length>y,fn:e=>_.request({body:e}),sort:(e,t)=>e.id-t.id}),c=async e=>n?s(e):[await _.request({body:e})],[{error:l,result:u}]=await c(o);if(l)throw new r.bs({body:o,error:l,url:I});return u},retryCount:S,retryDelay:m,timeout:C,type:"http"},{fetchOptions:i,url:I})}}},47378:function(e,t,n){n.d(t,{a:function(){return r}});function r(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}},80331:function(e,t,n){n.d(t,{F:function(){return r}});function r(e,{errorInstance:t=Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let a;try{let s=new AbortController;n>0&&(a=setTimeout(()=>{r?s.abort():o(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){"AbortError"===e.name&&o(t),o(e)}finally{clearTimeout(a)}})()})}}}]);