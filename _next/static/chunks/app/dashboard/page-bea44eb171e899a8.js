(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{58849:function(e,t,l){Promise.resolve().then(l.bind(l,24334))},24334:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return j}});var a=l(95382),s=l(49332),n=l(16521),o=l(51369),d=l(82716),r=l(84780),i=l(62172),c=l(57041),u=l(10577),m=l(3091),h=l(11351),v=l(65084),x=l(3744),f=l(24951),p=l(73845);let g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0n;return Number((1000n*BigInt(e)/10n**BigInt(t)).toString())/1e3},w=()=>(0,a.jsx)("div",{className:"timeline-start md:text-end w-full",children:(0,a.jsx)("a",{href:"/pools?size=4",className:"link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white",children:(0,a.jsx)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20",children:"Add First Stake"})})}),k=()=>(0,a.jsx)("div",{className:"timeline-end md:text-end w-full",children:(0,a.jsx)("a",{href:"/launch",className:"link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white",children:(0,a.jsx)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20",children:"Launch First Pool"})})});var j=function(){var e,t;let{address:l=r.r_}=(0,n.m)(),{connectors:j,connect:N}=(0,o.$)(),[b,y]=(0,h.useState)(l);(0,h.useEffect)(()=>{y(new URLSearchParams(window.location.search).get("account")||l)},[l]);let{completed:E,pools:R,staked:S,launched:C}=null!==(t=function(e){let{data:t=0n}=(0,i.ZCR)(),[l,a]=(0,h.useState)(0n),[s,n]=(0,h.useState)(1),o=(0,h.useMemo)(()=>(t+BigInt(10)-1n)/BigInt(10),[t]),{pools:d,hasPrev:r,hasNext:x}=(0,c.Oh)(s,10,e),f=(0,h.useMemo)(()=>JSON.stringify(d,(e,t)=>"bigint"==typeof t?t.toString():t),[d]),[p,g]=(0,h.useState)([]),[w,k]=(0,h.useState)([]),[j,N]=(0,h.useState)(),b=(0,m.K)(j?p:[]),y=(0,u.t)(j?p:[]),E=(0,v.A)(j?p:[]),R=(0,m.K)(j?w:[]),S=(0,u.t)(j?w:[]),C=(0,v.A)(j?w:[]);return(0,h.useEffect)(()=>{g([]),k([])},[]),(0,h.useEffect)(()=>{if(BigInt(s)>o){N(!0);return}if(d&&0===d.length){n(e=>e+1);return}let e=setTimeout(()=>n(e=>e+1),1e3);return()=>clearTimeout(e)},[s,o,d]),(0,h.useEffect)(()=>{t>0n&&l<t&&N(!1)},[t,l]),(0,h.useEffect)(()=>{d&&(d.forEach(t=>{t.owner===e&&k(e=>[...null!=e?e:[],t]),t.totalStakerStakes>0n&&g(e=>[...null!=e?e:[],t])}),a(e=>e+BigInt(d.length)))},[f,r,x,e]),{completed:j,pools:{total:t,processed:l},staked:{pools:p,stakes:b,rewards:y,metadata:E},launched:{pools:w,stakes:R,rewards:S,metadata:C}}}(b))&&void 0!==t?t:{},I=(0,h.useMemo)(()=>{var e,t;return{pools:null==S?void 0:S.pools,rewards:Object.values(null!==(e=null==S?void 0:S.rewards)&&void 0!==e?e:{}).flat(),stakes:Object.values(null!==(t=null==S?void 0:S.stakes)&&void 0!==t?t:{}).flat()}},[S]),A=(0,h.useMemo)(()=>{var e,t;return{pools:null==C?void 0:C.pools,rewards:Object.values(null!==(e=null==C?void 0:C.rewards)&&void 0!==e?e:{}).flat(),stakes:Object.values(null!==(t=null==C?void 0:C.stakes)&&void 0!==t?t:{}).flat()}},[C]),O=(0,x.MF)(I),B=(0,x.MF)(A),F=(0,h.useMemo)(()=>{if(!S)return;let e={};return S.pools&&S.pools.forEach(t=>{S.stakes&&S.stakes[t.id]&&S.stakes[t.id].forEach(l=>{var a,s,n,o,d,r;if(l.amountERC20>0n){let o=t.stakeERC20.tokenAddress;e[o]||(e[o]={total:0n,token:{...t.stakeERC20,logo:null==S?void 0:null===(n=S.metadata)||void 0===n?void 0:null===(s=n[t.id])||void 0===s?void 0:null===(a=s.logoURIs)||void 0===a?void 0:a[o]}}),e[o].total+=l.amountERC20}if(l.idERC721>0n){let a=t.stakeERC721.tokenAddress;e[a]||(e[a]={total:0n,token:{...t.stakeERC721,logo:null==S?void 0:null===(r=S.metadata)||void 0===r?void 0:null===(d=r[t.id])||void 0===d?void 0:null===(o=d.logoURIs)||void 0===o?void 0:o[a]}}),e[a].total+=l.idERC721}})}),Object.values(e)},[S]),M=(0,h.useMemo)(()=>{if(!S)return;let e={};return S.pools&&S.pools.forEach(t=>{S.rewards&&S.rewards[t.id]&&S.rewards[t.id].forEach(l=>{let a=l.rewardToken.tokenAddress;if(!e[a]){var s,n,o;e[a]={total:0n,token:{...l.rewardToken,logo:null==S?void 0:null===(o=S.metadata)||void 0===o?void 0:null===(n=o[t.id])||void 0===n?void 0:null===(s=n.logoURIs)||void 0===s?void 0:s[a]}}}e[a].total+=l.stakerRewardAmount})}),Object.values(e)},[S]),_=(0,h.useMemo)(()=>{if(!C)return;let e={};return C.pools&&C.pools.forEach(t=>{C.rewards&&C.rewards[t.id]&&C.rewards[t.id].forEach(l=>{let a=l.rewardToken.tokenAddress;if(!e[a]){var s,n,o;e[a]={total:0n,token:{...l.rewardToken,logo:null==C?void 0:null===(o=C.metadata)||void 0===o?void 0:null===(n=o[t.id])||void 0===n?void 0:null===(s=n.logoURIs)||void 0===s?void 0:s[a]}}}e[a].total+=l.rewardAmount})}),Object.values(e)},[C]),T=(0,h.useMemo)(()=>{if(!(null==S?void 0:S.pools)||!(null==S?void 0:S.stakes)||!(null==S?void 0:S.rewards)||!(null==S?void 0:S.metadata)||!(null==C?void 0:C.pools)||!(null==C?void 0:C.stakes)||!(null==C?void 0:C.rewards)||!(null==C?void 0:C.metadata))return;let e=[];return C.pools.forEach(t=>{e.push({pool:t,rewards:C.rewards[t.id],metadata:C.metadata[t.id],block:t.launchBlock,type:"launchPool"}),C.rewards[t.id]&&C.rewards[t.id].forEach(l=>{var a;e.push({pool:t,reward:l,metadata:null==C?void 0:null===(a=C.metadata)||void 0===a?void 0:a[t.id],block:l.rewardBlock,type:"addReward"})})}),S.pools.forEach(t=>{S.stakes[t.id]&&S.stakes[t.id].forEach(l=>{e.push({pool:t,stake:l,metadata:S.metadata[t.id],block:l.stakeBlock,type:"stake"}),l.unstakeBlock>0n&&e.push({pool:t,stake:l,metadata:S.metadata[t.id],block:l.unstakeBlock,type:"unstake"})})}),S.pools.forEach(t=>{S.rewards[t.id]&&S.rewards[t.id].forEach(l=>{if(l.stakerRewardAmount>0n){var a;e.push({pool:t,reward:l,metadata:null==S?void 0:null===(a=S.metadata)||void 0===a?void 0:a[t.id],block:l.rewardBlock,type:"reward"})}})}),e.sort((e,t)=>e.block>t.block?-1:Number(e.pool.id)<Number(t.pool.id)?1:-1)},[S,C]);return b===r.r_?(0,a.jsx)("section",{className:"text-center",children:(0,a.jsx)(d.Z,{wrapperclassname:"max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]",children:(0,a.jsxs)("div",{className:"mt-20 flex flex-col gap-4 justify-center items-center",children:[(0,a.jsx)("div",{className:"text-6xl animate-spin",children:(0,a.jsx)(p.dDi,{})}),(0,a.jsx)("div",{className:"text-sm",children:"Connect to show the dashboard."}),(0,a.jsx)("button",{onClick:()=>N({connector:j[0]}),className:"btn btn-ghost",children:"Connect"})]})})}):(0,a.jsxs)("section",{className:"custom-screen",children:[(0,a.jsxs)(d.Z,{wrapperclassname:"max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"bg-slate-200/10 h-24 w-24 mask mask-hexagon-2 mx-auto relative",children:[(0,a.jsx)(s.default,{src:"/staqe.svg",width:0,height:0,alt:"Pool Image",className:"h-24 w-24 mask mask-hexagon-2"}),!E&&R&&R.total>0n&&(0,a.jsx)("div",{className:"absolute inset-0 grid place-items-center",children:(0,a.jsxs)("div",{className:"radial-progress text-white",style:{"--value":(100n*R.processed/R.total).toString()},children:[(100n*R.processed/R.total).toString(),"%"]})})]})}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h1",{className:"text-l link font-mono",onClick:()=>{navigator.clipboard.writeText(b).catch(e=>console.error("Failed to copy text: ",e))},children:b})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2 mt-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2",children:[(0,a.jsxs)("div",{className:"p-1 pb-2 text-center relative",children:[(0,a.jsx)("div",{className:"absolute bg-stone-900/40 rounded-xl inset-0"}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(p.IVw,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Your Stakes"}),(0,a.jsx)("div",{children:(null==F?void 0:F.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:F.map((e,t)=>(0,a.jsx)("div",{className:"tooltip ".concat(t>0&&"-ml-4"),"data-tip":"".concat(g(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]}),(0,a.jsxs)("div",{className:"p-1 pb-2 text-center relative",children:[(0,a.jsx)("div",{className:"absolute bg-stone-900/40 rounded-xl inset-0"}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(p.GZI,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Your Rewards"}),(0,a.jsx)("div",{children:(null==M?void 0:M.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:M.map((e,t)=>(0,a.jsx)("div",{className:"tooltip ".concat(t>0&&"-ml-4"),"data-tip":"".concat(g(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]})]}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h2",{className:"text-xl",children:"Stakes"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2",children:[(0,a.jsxs)("div",{className:"p-1 pb-2 text-center relative",children:[(0,a.jsx)("div",{className:"absolute bg-stone-900/40 rounded-xl inset-0"}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(p.ffz,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Launched Pools"}),(null==C?void 0:null===(e=C.pools)||void 0===e?void 0:e.length)&&(null==C?void 0:C.metadata)?(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-center items-center",children:C.pools.map((e,t)=>{var l,n,o,d;return C.metadata[e.id]&&(0,a.jsx)("div",{className:"tooltip ".concat(t>0&&"-ml-4"),"data-tip":null==C?void 0:null===(l=C.metadata)||void 0===l?void 0:l[e.id].name,children:(0,a.jsx)(s.default,{src:null!==(d=null==C?void 0:null===(n=C.metadata)||void 0===n?void 0:n[e.id].image)&&void 0!==d?d:"",width:0,height:0,alt:null==C?void 0:null===(o=C.metadata)||void 0===o?void 0:o[e.id].name,className:"w-10 h-10 rounded-full"})},"".concat(e.id,"-").concat(t))})})}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})]}),(0,a.jsxs)("div",{className:"p-1 pb-2 text-center relative",children:[(0,a.jsx)("div",{className:"absolute bg-stone-900/40 rounded-xl inset-0"}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(p.DCb,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Added Rewards"}),(0,a.jsx)("div",{children:(null==_?void 0:_.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:_.map((e,t)=>(0,a.jsx)("div",{className:"tooltip ".concat(t>0&&"-ml-4"),"data-tip":"".concat(g(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]})]}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h2",{className:"text-xl",children:"Launches"})})]})]}),(0,a.jsx)("ul",{className:"timeline timeline-snap-icon max-md:timeline-compact timeline-vertical",children:(null==T?void 0:T.length)?T.map((e,t)=>{if((null==e?void 0:e.pool)&&(null==e?void 0:e.metadata))return(0,a.jsxs)("li",{children:[0!==t&&(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"timeline-middle",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-5 w-5",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}),("stake"===e.type||"unstake"===e.type||"reward"===e.type)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"timeline-start md:text-end mb-10 w-full",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full",children:["reward"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Your Reward:"," ",(0,a.jsxs)(f.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[g(e.reward.rewardAmount,e.reward.rewardToken.decimals)," ",e.reward.rewardToken.symbol]})]}),("stake"===e.type||"unstake"===e.type)&&(0,a.jsxs)(a.Fragment,{children:["stake"===e.type?"Your Stake: ":"Your Unstake: ",(0,a.jsxs)(f.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[e.stake.amountERC20>0n&&(0,a.jsxs)(a.Fragment,{children:[g(e.stake.amountERC20,e.pool.stakeERC20.decimals)," ",e.pool.stakeERC20.symbol]})," ",e.stake.idERC721>0n&&(0,a.jsxs)(a.Fragment,{children:[e.stake.amountERC20>0n&&"| ","#",e.stake.idERC721.toString()," ",e.pool.stakeERC721.symbol]})]})]})]})}),(0,a.jsxs)("div",{className:"timeline-end mb-10",children:[O&&O[e.block.toString()],(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Block #",e.block.toString()]})]})]}),("launchPool"===e.type||"addReward"===e.type)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"timeline-start mb-10",children:[B&&B[e.block.toString()],(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Block #",e.block.toString()]})]}),(0,a.jsx)("div",{className:"timeline-end md:text-end mb-10 w-full",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full",children:["launchPool"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Launched Pool:"," ",(0,a.jsx)(f.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:e.metadata.name})]}),"addReward"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Added Reward:"," ",(0,a.jsxs)(f.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[g(e.reward.rewardAmount,e.reward.rewardToken.decimals)," ",e.reward.rewardToken.symbol]})]})]})})]}),t!==T.length-1&&(0,a.jsx)("hr",{})]},e.type+"-"+e.pool.id+"-"+t)}):(0,a.jsxs)("li",{children:[(0,a.jsx)(w,{}),(0,a.jsx)(k,{})]})})]})}},82716:function(e,t,l){"use strict";var a=l(95382);t.Z=e=>{let{children:t,...l}=e;return(0,a.jsxs)("div",{...l,className:"relative ".concat(l.className||""),children:[(0,a.jsx)("div",{className:"absolute m-auto blur-[160px] ".concat(l.wrapperclassname||""),style:{background:"linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )"}}),(0,a.jsx)("div",{className:"relative",children:t})]})}},51369:function(e,t,l){"use strict";l.d(t,{$:function(){return u}});var a=l(5621),s=l(86162);async function n(e,t){let l;if((l="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new s.wi;try{e.setState(e=>({...e,status:"connecting"})),l.emitter.emit("message",{type:"connecting"});let a=await l.connect({chainId:t.chainId}),s=a.accounts;return l.emitter.off("connect",e._internal.events.connect),l.emitter.on("change",e._internal.events.change),l.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",l.id),e.setState(e=>({...e,connections:new Map(e.connections).set(l.uid,{accounts:s,chainId:a.chainId,connector:l}),current:l.uid,status:"connected"})),{accounts:s,chainId:a.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var o=l(11351),d=l(97453),r=l(32935);let i=[];function c(e){let t=e.connectors;return(0,r.v)(i,t)?i:(i=t,t)}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{mutation:t}=e,l=(0,d.Z)(e),{mutate:s,mutateAsync:r,...i}=(0,a.D)({...t,mutationFn:e=>n(l,e),mutationKey:["connect"]});return(0,o.useEffect)(()=>l.subscribe(e=>{let{status:t}=e;return t},(e,t)=>{"connected"===t&&"disconnected"===e&&i.reset()}),[l,i.reset]),{...i,connect:s,connectAsync:r,connectors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,d.Z)(e);return(0,o.useSyncExternalStore)(e=>(function(e,t){let{onChange:l}=t;return e._internal.connectors.subscribe((e,t)=>{l(Object.values(e),t)})})(t,{onChange:e}),()=>c(t),()=>c(t))}({config:l})}}},96512:function(e,t,l){"use strict";l.d(t,{N:function(){return i}});var a=l(55621),s=l(32316),n=l(11351),o=l(83454),d=l(73135),r=l(97453);function i(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{contracts:l=[],query:i={}}=t,c=(0,r.Z)(t),u=(0,d.x)({config:c}),m=function(e,t={}){return{async queryFn({queryKey:l}){let s=[],n=l[1].contracts.length;for(let e=0;e<n;e++){let a=l[1].contracts[e],n=(t.contracts?.[e]).abi;s.push({...a,abi:n})}let{scopeKey:o,...d}=l[1];return(0,a.J)(e,{...d,contracts:s})},queryKey:function(e={}){let t=[];for(let l of e.contracts??[]){let{abi:a,...s}=l;t.push({...s,chainId:s.chainId??e.chainId})}return["readContracts",(0,s.OP)({...e,contracts:t})]}(t)}}(c,{...t,chainId:u}),h=(0,n.useMemo)(()=>{var e;let t=!1;for(let e of l){let{abi:l,address:a,functionName:s}=e;if(!l||!a||!s){t=!1;break}t=!0}return!!(t&&(null===(e=i.enabled)||void 0===e||e))},[l,i.enabled]);return(0,o.aM)({...m,...i,enabled:h,structuralSharing:null!==(e=i.structuralSharing)&&void 0!==e?e:s.if})}}},function(e){e.O(0,[782,735,761,494,543,194,241,289,303,994,744],function(){return e(e.s=58849)}),_N_E=e.O()}]);