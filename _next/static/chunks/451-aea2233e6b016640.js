"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{8529:function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(e,t,r,o,a){if("function"!=typeof r)throw TypeError("The listener must be a function");var s=new i(r,o||e,a),c=n?n+t:t;return e._events[c]?e._events[c].fn?e._events[c]=[e._events[c],s]:e._events[c].push(s):(e._events[c]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function s(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),s.prototype.eventNames=function(){var e,r,i=[];if(0===this._eventsCount)return i;for(r in e=this._events)t.call(e,r)&&i.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,o=r.length,a=Array(o);i<o;i++)a[i]=r[i].fn;return a},s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},s.prototype.emit=function(e,t,r,i,o,a){var s=n?n+e:e;if(!this._events[s])return!1;var c,l,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,o),!0;case 6:return u.fn.call(u.context,t,r,i,o,a),!0}for(l=1,c=Array(d-1);l<d;l++)c[l-1]=arguments[l];u.fn.apply(u.context,c)}else{var h,f=u.length;for(l=0;l<f;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,i);break;default:if(!c)for(h=1,c=Array(d-1);h<d;h++)c[h-1]=arguments[h];u[l].fn.apply(u[l].context,c)}}return!0},s.prototype.on=function(e,t,n){return o(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return o(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,r,i){var o=n?n+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||a(this,o);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==t||i&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[o]=1===l.length?l[0]:l:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s},54496:function(e,t,n){n.d(t,{L:function(){return h}});var r=n(82701),i=n(72540),o=n(88226),a=n(21592),s=n(52296),c=n(9698),l=n(88857);let u=/(rabby|trustwallet)/,d={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:f(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>f(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:f(e,"isPhantom")}};function h(e={}){let t,n,p,m;let{shimDisconnect:g=!0,unstable_shimAsyncInject:v}=e;function w(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...d[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return d=>({get icon(){return w().icon},get id(){return w().id},get name(){return w().name},get supportsSimulation(){return u.test(this.id.toLowerCase())},type:h.type,async setup(){let n=await this.getProvider();n&&e.target&&(p||(p=this.onConnect.bind(this),n.on("connect",p)),t||(t=this.onAccountsChanged.bind(this),n.on("accountsChanged",t)))},async connect({chainId:o,isReconnecting:a}={}){let s=await this.getProvider();if(!s)throw new l.M;let c=[];if(a)c=await this.getAccounts().catch(()=>[]);else if(g)try{let e=await s.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});(c=e[0]?.caveats?.[0]?.value?.map(e=>r.K(e))).length>0&&(c=await this.getAccounts())}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw e}try{c?.length||a||(c=(await s.request({method:"eth_requestAccounts"})).map(e=>(0,r.K)(e))),p&&(s.removeListener("connect",p),p=void 0),t||(t=this.onAccountsChanged.bind(this),s.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),s.on("chainChanged",n)),m||(m=this.onDisconnect.bind(this),s.on("disconnect",m));let l=await this.getChainId();if(o&&l!==o){let e=await this.switchChain({chainId:o}).catch(e=>{if(e.code===i.ab.code)throw e;return{id:l}});l=e?.id??l}return g&&await d.storage?.removeItem(`${this.id}.disconnected`),e.target||await d.storage?.setItem("injected.connected",!0),{accounts:c,chainId:l}}catch(e){if(e.code===i.ab.code)throw new i.ab(e);if(e.code===i.pT.code)throw new i.pT(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new l.M;n&&(t.removeListener("chainChanged",n),n=void 0),m&&(t.removeListener("disconnect",m),m=void 0),p||(p=this.onConnect.bind(this),t.on("connect",p));try{await (0,o.F)(()=>t.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}g&&await d.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await d.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new l.M;return(await e.request({method:"eth_accounts"})).map(e=>(0,r.K)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new l.M;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("undefined"==typeof window)return;let t=w();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?f(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(g&&await d.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await d.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==v&&!1!==v){let e=async()=>("undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof v?v:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(n=>setTimeout(()=>n(e()),t))]))return!0}throw new l.M}return!!(await (0,a.J)(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let n=await this.getProvider();if(!n)throw new l.M;let r=d.chains.find(e=>e.id===t);if(!r)throw new i.x3(new c.X4);try{return await Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,s.eC)(t)}]}).then(async()=>{await this.getChainId()===t&&d.emitter.emit("change",{chainId:t})}),new Promise(e=>d.emitter.once("change",({chainId:n})=>{n===t&&e()}))]),r}catch(o){if(4902===o.code||o?.data?.originalError?.code===4902)try{let o,a;let{default:c,...l}=r.blockExplorers??{};e?.blockExplorerUrls?o=e.blockExplorerUrls:c&&(o=[c.url,...Object.values(l).map(e=>e.url)]),a=e?.rpcUrls?.length?e.rpcUrls:[r.rpcUrls.default?.http[0]??""];let u={blockExplorerUrls:o,chainId:(0,s.eC)(t),chainName:e?.chainName??r.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??r.nativeCurrency,rpcUrls:a};if(await n.request({method:"wallet_addEthereumChain",params:[u]}),await this.getChainId()!==t)throw new i.ab(Error("User rejected switch after adding network."));return r}catch(e){throw new i.ab(e)}if(o.code===i.ab.code)throw new i.ab(o);throw new i.x3(o)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(d.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),g&&await d.storage?.removeItem(`${this.id}.disconnected`)}else d.emitter.emit("change",{accounts:e.map(e=>(0,r.K)(e))})},onChainChanged(e){let t=Number(e);d.emitter.emit("change",{chainId:t})},async onConnect(e){let r=await this.getAccounts();if(0===r.length)return;let i=Number(e.chainId);d.emitter.emit("connect",{accounts:r,chainId:i});let o=await this.getProvider();o&&(p&&(o.removeListener("connect",p),p=void 0),t||(t=this.onAccountsChanged.bind(this),o.on("accountsChanged",t)),n||(n=this.onChainChanged.bind(this),o.on("chainChanged",n)),m||(m=this.onDisconnect.bind(this),o.on("disconnect",m)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(d.emitter.emit("disconnect"),t&&(n&&(t.removeListener("chainChanged",n),n=void 0),m&&(t.removeListener("disconnect",m),m=void 0),p||(p=this.onConnect.bind(this),t.on("connect",p))))}})}function f(e,t){function n(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let r=e.ethereum;return r?.providers?r.providers.find(e=>n(e)):r&&n(r)?r:void 0}h.type="injected"},52283:function(e,t,n){let r;n.d(t,{_:function(){return b}});var i=n(4772);let o=e=>(t,n,r)=>{let i=r.subscribe;return r.subscribe=(e,t,n)=>{let o=e;if(t){let i=(null==n?void 0:n.equalityFn)||Object.is,a=e(r.getState());o=n=>{let r=e(n);if(!i(a,r)){let e=a;t(a=r,e)}},(null==n?void 0:n.fireImmediately)&&t(a,a)}return i(o)},e(t,n,r)},a=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>a(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>a(t)(e)}}},s=(e,t)=>(n,r,i)=>{let o,s,c={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,u=new Set,d=new Set;try{o=c.getStorage()}catch(e){}if(!o)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`),n(...e)},r,i);let h=a(c.serialize),f=()=>{let e;let t=h({state:c.partialize({...r()}),version:c.version}).then(e=>o.setItem(c.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=i.setState;i.setState=(e,t)=>{p(e,t),f()};let m=e((...e)=>{n(...e),f()},r,i),g=()=>{var e;if(!o)return;l=!1,u.forEach(e=>e(r()));let t=(null==(e=c.onRehydrateStorage)?void 0:e.call(c,r()))||void 0;return a(o.getItem.bind(o))(c.name).then(e=>{if(e)return c.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===c.version)return e.state;if(c.migrate)return c.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(s=c.merge(e,null!=(t=r())?t:m),!0),f()}).then(()=>{null==t||t(s,void 0),l=!0,d.forEach(e=>e(s))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{c={...c,...e},e.getStorage&&(o=e.getStorage())},clearStorage:()=>{null==o||o.removeItem(c.name)},getOptions:()=>c,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},g(),s||m},c=(e,t)=>(n,r,i)=>{let o,s={storage:function(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var t;let r=e=>null===e?null:JSON.parse(e,void 0),i=null!=(t=n.getItem(e))?t:null;return i instanceof Promise?i.then(r):r(i)},setItem:(e,t)=>n.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>n.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},c=!1,l=new Set,u=new Set,d=s.storage;if(!d)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),n(...e)},r,i);let h=()=>{let e=s.partialize({...r()});return d.setItem(s.name,{state:e,version:s.version})},f=i.setState;i.setState=(e,t)=>{f(e,t),h()};let p=e((...e)=>{n(...e),h()},r,i),m=()=>{var e,t;if(!d)return;c=!1,l.forEach(e=>{var t;return e(null!=(t=r())?t:p)});let i=(null==(t=s.onRehydrateStorage)?void 0:t.call(s,null!=(e=r())?e:p))||void 0;return a(d.getItem.bind(d))(s.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(o=s.merge(e,null!=(t=r())?t:p),!0),h()}).then(()=>{null==i||i(o,void 0),o=r(),c=!0,u.forEach(e=>e(o))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.storage&&(d=e.storage)},clearStorage:()=>{null==d||d.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>c,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},s.skipHydration||m(),o||p},l=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),s(e,t)):c(e,t),u=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,o={setState:r,getState:i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,o),o},d=e=>e?u(e):u;var h=n(54496),f=n(8529);class p{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new f})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){let n=t[0];this._emitter.emit(e,{uid:this.uid,...n})}listenerCount(e){return this._emitter.listenerCount(e)}}var m=n(54433),g=n(9698);let v=256;var w=n(73521);function b(e){let t;let{multiInjectedProviderDiscovery:n=!0,storage:a=(0,m.o)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:m.w}),syncConnectedChain:s=!0,ssr:c=!1,...u}=e,f="undefined"!=typeof window&&n?function(){let e=new Set,t=[],n=()=>(function(e){if("undefined"==typeof window)return;let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(n=>{t.some(({info:e})=>e.uuid===n.info.uuid)||(t=[...t,n],e.forEach(e=>e(t,{added:[n]})))}),r=n();return{_listeners:()=>e,clear(){e.forEach(e=>e([],{removed:[...t]})),t=[]},destroy(){this.clear(),e.clear(),r?.()},findProvider:({rdns:e})=>t.find(t=>t.info.rdns===e),getProviders:()=>t,reset(){this.clear(),r?.(),r=n()},subscribe:(n,{emitImmediately:r}={})=>(e.add(n),r&&n(t,{added:t}),()=>e.delete(n))}}():void 0,b=d(()=>u.chains),y=d(()=>[...u.connectors??[],...c?[]:f?.getProviders().map(S)??[]].map(C));function C(e){let t=new p(function(e=11){if(!r||v+e>512){r="",v=0;for(let e=0;e<256;e++)r+=(256+256*Math.random()|0).toString(16).substring(1)}return r.substring(v,v+++e)}()),n={...e({emitter:t,chains:b.getState(),storage:a}),emitter:t,uid:t.uid};return t.on("connect",k),n.setup?.(),n}function S(e){let{info:t}=e,n=e.provider;return(0,h.L)({target:{...t,id:t.rdns,provider:n}})}let I=new Map;function _(){return{chainId:b.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let P="0.0.0-canary-";t=w.i.startsWith(P)?Number.parseInt(w.i.replace(P,"")):Number.parseInt(w.i.split(".")[0]??"0");let E=d(o(a?l(_,{migrate(e,n){if(n===t)return e;let r=_(),i=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId&&b.getState().some(t=>t.id===e.chainId)?e.chainId:r.chainId;return{...r,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:n,name:r,type:i,uid:o}=t.connector;return[e,{...t,connector:{id:n,name:r,type:i,uid:o}}]})},chainId:e.chainId,current:e.current}),merge:(e,t)=>("object"==typeof e&&e&&"status"in e&&delete e.status,{...t,...e}),skipHydration:c,storage:a,version:t}):_));function x(e){E.setState(t=>{let n=t.connections.get(e.uid);return n?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??n.accounts,chainId:e.chainId??n.chainId,connector:n.connector})}:t})}function k(e){"connecting"!==E.getState().status&&"reconnecting"!==E.getState().status&&E.setState(t=>{let n=y.getState().find(t=>t.uid===e.uid);return n?(n.emitter.listenerCount("connect")&&n.emitter.off("connect",x),n.emitter.listenerCount("change")||n.emitter.on("change",x),n.emitter.listenerCount("disconnect")||n.emitter.on("disconnect",O),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:n}),current:e.uid,status:"connected"}):t})}function O(e){E.setState(t=>{let n=t.connections.get(e.uid);if(n){let e=n.connector;e.emitter.listenerCount("change")&&n.connector.emitter.off("change",x),e.emitter.listenerCount("disconnect")&&n.connector.emitter.off("disconnect",O),e.emitter.listenerCount("connect")||n.connector.emitter.on("connect",k)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let r=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:r.connector.uid}})}return s&&E.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(b.getState().some(t=>t.id===e))return E.setState(t=>({...t,chainId:e??t.chainId}))}),f?.subscribe(e=>{let t=new Map;for(let e of y.getState())t.set(e.id,!0);let n=[];for(let r of e){let e=C(S(r));t.has(e.id)||n.push(e)}(!a||E.persist.hasHydrated())&&y.setState(e=>[...e,...n],!0)}),{get chains(){return b.getState()},get connectors(){return y.getState()},storage:a,getClient:function(e={}){let t;let n=e.chainId??E.getState().chainId,r=b.getState().find(e=>e.id===n);if(e.chainId&&!r)throw new g.X4;{let e=I.get(E.getState().chainId);if(e&&!r)return e;if(!r)throw new g.X4}{let e=I.get(n);if(e)return e}if(u.client)t=u.client({chain:r});else{let e=r.id,n=b.getState().map(e=>e.id),o={};for(let[t,r]of Object.entries(u))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t){if("object"==typeof r){if(e in r)o[t]=r[e];else{if(n.some(e=>e in r))continue;o[t]=r}}else o[t]=r}t=(0,i.e)({...o,chain:r,batch:o.batch??{multicall:!0},transport:t=>u.transports[e]({...t,connectors:y})})}return I.set(n,t),t},get state(){return E.getState()},setState(e){let t;t="function"==typeof e?e(E.getState()):e;let n=_();"object"!=typeof t&&(t=n),Object.keys(n).some(e=>!(e in t))&&(t=n),E.setState(t,!0)},subscribe:(e,t,n)=>E.subscribe(e,t,n?{...n,fireImmediately:n.emitImmediately}:void 0),_internal:{mipd:f,store:E,ssr:!!c,syncConnectedChain:s,transports:u.transports,chains:{setState(e){let t="function"==typeof e?e(b.getState()):e;if(0!==t.length)return b.setState(t,!0)},subscribe:e=>b.subscribe(e)},connectors:{providerDetailToConnector:S,setup:C,setState:e=>y.setState("function"==typeof e?e(y.getState()):e,!0),subscribe:e=>y.subscribe(e)},events:{change:x,connect:k,disconnect:O}}}}},54433:function(e,t,n){function r(e,t){return JSON.parse(e,(e,n)=>{let r=n;return r?.__type==="bigint"&&(r=BigInt(r.value)),r?.__type==="Map"&&(r=new Map(r.value)),t?.(e,r)??r})}function i(e,t){return e.slice(0,t).join(".")||"."}function o(e,t){let{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function a(e,t,n,r){return JSON.stringify(e,function(e,t){let n="function"==typeof e,r="function"==typeof t,a=[],s=[];return function(c,l){if("object"==typeof l){if(a.length){let e=o(a,this);0===e?a[a.length]=this:(a.splice(e),s.splice(e)),s[s.length]=c;let n=o(a,l);if(0!==n)return r?t.call(this,c,l,i(s,n)):`[ref=${i(s,n)}]`}else a[0]=l,s[0]=c}return n?e.call(this,c,l):l}}((e,n)=>{let r=n;return"bigint"==typeof r&&(r={__type:"bigint",value:n.toString()}),r instanceof Map&&(r={__type:"Map",value:Array.from(n.entries())}),t?.(e,r)??r},r),n??void 0)}function s(e){let{deserialize:t=r,key:n="wagmi",serialize:i=a,storage:o=c}=e;function s(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...o,key:n,async getItem(e,r){let i=o.getItem(`${n}.${e}`),a=await s(i);return a?t(a)??null:r??null},async setItem(e,t){let r=`${n}.${e}`;null===t?await s(o.removeItem(r)):await s(o.setItem(r,i(t)))},async removeItem(e){await s(o.removeItem(`${n}.${e}`))}}}n.d(t,{o:function(){return s},w:function(){return c}});let c={getItem:()=>null,setItem:()=>{},removeItem:()=>{}}},88857:function(e,t,n){n.d(t,{M:function(){return i},O:function(){return o}});var r=n(74613);class i extends r.G{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class o extends r.G{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}},89400:function(e,t,n){n.d(t,{Dr:function(){return r}});let r={getItem:e=>"undefined"==typeof window?null:function(e,t){let n=e.split("; ").find(e=>e.startsWith(`${t}=`));if(n)return n.substring(t.length+1)}(document.cookie,e)??null,setItem(e,t){"undefined"!=typeof window&&(document.cookie=`${e}=${t};Path=/;SameSite=Lax`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1`)}}},44690:function(e,t,n){n.d(t,{c:function(){return r}});let r=(0,n(20167).a)({id:43113,name:"Avalanche Fuji",nativeCurrency:{decimals:18,name:"Avalanche Fuji",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax-test.network/ext/bc/C/rpc"]}},blockExplorers:{default:{name:"SnowTrace",url:"https://testnet.snowtrace.io",apiUrl:"https://api-testnet.snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7096959}},testnet:!0})},2295:function(e,t,n){n.d(t,{S:function(){return r}});let r=(0,n(20167).a)({id:199,name:"BitTorrent",network:"bittorrent-chain-mainnet",nativeCurrency:{name:"BitTorrent",symbol:"BTT",decimals:18},rpcUrls:{default:{http:["https://rpc.bittorrentchain.io"]},public:{http:["https://rpc.bittorrentchain.io"]}},blockExplorers:{default:{name:"Bttcscan",url:"https://bttcscan.com",apiUrl:"https://api.bttcscan.com/api"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:31078552}}})},13886:function(e,t,n){n.d(t,{d:function(){return r}});let r=(0,n(20167).a)({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0})},77849:function(e,t,n){n.d(t,{d:function(){return r}});let r=(0,n(20167).a)({id:1337,name:"Localhost",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]}}})},4991:function(e,t,n){n.d(t,{v:function(){return r}});let r=(0,n(20167).a)({id:80002,name:"Polygon Amoy",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://rpc-amoy.polygon.technology"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://amoy.polygonscan.com",apiUrl:"https://api-amoy.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3127388}},testnet:!0})},14417:function(e,t,n){n.d(t,{o:function(){return r}});let r=(0,n(20167).a)({id:534351,name:"Scroll Sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia-rpc.scroll.io"]}},blockExplorers:{default:{name:"Scrollscan",url:"https://sepolia.scrollscan.com",apiUrl:"https://api-sepolia.scrollscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:9473}},testnet:!0})},4948:function(e,t,n){n.d(t,{d:function(){return d}});var r=n(11154),i=n(99165);class o extends i.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var a=n(31932),s=n(88226),c=n(73905);let l={current:0,take(){return this.current++},reset(){this.current=0}};var u=n(45219);function d(e,t={}){let{batch:n,fetchOptions:i,key:d="http",name:h="HTTP JSON-RPC",onFetchRequest:f,onFetchResponse:p,retryDelay:m}=t;return({chain:g,retryCount:v,timeout:w})=>{let{batchSize:b=1e3,wait:y=0}="object"==typeof n?n:{},C=t.retryCount??v,S=w??t.timeout??1e4,I=e||g?.rpcUrls.default.http[0];if(!I)throw new o;let _=function(e,t={}){return{async request(n){let{body:i,onRequest:o=t.onRequest,onResponse:a=t.onResponse,timeout:u=t.timeout??1e4}=n,d={...t.fetchOptions??{},...n.fetchOptions??{}},{headers:h,method:f,signal:p}=d;try{let t;let n=await (0,s.F)(async({signal:t})=>{let n={...d,body:Array.isArray(i)?(0,c.P)(i.map(e=>({jsonrpc:"2.0",id:e.id??l.take(),...e}))):(0,c.P)({jsonrpc:"2.0",id:i.id??l.take(),...i}),headers:{"Content-Type":"application/json",...h},method:f||"POST",signal:p||(u>0?t:null)},r=new Request(e,n);return o&&await o(r),await fetch(e,n)},{errorInstance:new r.W5({body:i,url:e}),timeout:u,signal:!0});if(a&&await a(n),n.headers.get("Content-Type")?.startsWith("application/json")?t=await n.json():(t=await n.text(),t=JSON.parse(t||"{}")),!n.ok)throw new r.Gg({body:i,details:(0,c.P)(t.error)||n.statusText,headers:n.headers,status:n.status,url:e});return t}catch(t){if(t instanceof r.Gg||t instanceof r.W5)throw t;throw new r.Gg({body:i,cause:t,url:e})}}}}(I,{fetchOptions:i,onRequest:f,onResponse:p,timeout:S});return(0,u.q)({key:d,name:h,async request({method:e,params:t}){let i={method:e,params:t},{schedule:o}=(0,a.S)({id:I,wait:y,shouldSplitBatch:e=>e.length>b,fn:e=>_.request({body:e}),sort:(e,t)=>e.id-t.id}),s=async e=>n?o(e):[await _.request({body:e})],[{error:c,result:l}]=await s(i);if(c)throw new r.bs({body:i,error:c,url:I});return l},retryCount:C,retryDelay:m,timeout:S,type:"http"},{fetchOptions:i,url:I})}}},20167:function(e,t,n){n.d(t,{a:function(){return r}});function r(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}},88226:function(e,t,n){n.d(t,{F:function(){return r}});function r(e,{errorInstance:t=Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let a;try{let s=new AbortController;n>0&&(a=setTimeout(()=>{r?s.abort():o(t)},n)),i(await e({signal:s?.signal||null}))}catch(e){e?.name==="AbortError"&&o(t),o(e)}finally{clearTimeout(a)}})()})}}}]);