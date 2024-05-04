(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{75301:function(e,l,t){Promise.resolve().then(t.bind(t,65423))},40888:function(e,l,t){"use strict";t.d(l,{default:function(){return s.a}});var a=t(20120),s=t.n(a)},65423:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return g}});var a=t(9131),s=t(79169),d=t(58166),o=t(10620),n=t(55831),i=t(63366),r=t(43669),c=t(56679),u=t(13035),m=t(3905),h=t(60432),x=t(24522),v=t(40888),f=t(48562);let k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0n;return Number((1000n*BigInt(e)/10n**BigInt(l)).toString())/1e3},w=()=>(0,a.jsx)("div",{className:"timeline-start md:text-end mb-10 w-full",children:(0,a.jsx)("a",{href:"/pools?size=4",className:"link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white",children:(0,a.jsx)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20",children:"Add First Stake"})})}),p=()=>(0,a.jsx)("div",{className:"timeline-end md:text-end mb-10 w-full",children:(0,a.jsx)("a",{href:"/launch",className:"link text-xl underline underline-offset-8 decoration-dotted text-gray-500 hover:text-white",children:(0,a.jsx)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-20 text-center w-full hover:bg-neutral-900/20",children:"Launch First Pool"})})});var g=function(){var e;let{address:l=n.r_}=(0,d.m)(),[t,g]=(0,m.useState)(l);(0,m.useEffect)(()=>{g(new URLSearchParams(window.location.search).get("account")||l)},[l]);let{completed:j,pools:N,staked:b,launched:y}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.r_,{data:l=0n}=(0,i.ZCR)(),[t,a]=(0,m.useState)(0n),[s,d]=(0,m.useState)(1),{pools:o}=(0,r.Oh)(s,10,e),[x,v]=(0,m.useState)([]),[f,k]=(0,m.useState)([]),[w,p]=(0,m.useState)(),g=(0,u.K)(w?x:[]),j=(0,c.t)(w?x:[]),N=(0,h.A)(w?x:[]),b=(0,u.K)(w?f:[]),y=(0,c.t)(w?f:[]),E=(0,h.A)(w?f:[]);return(0,m.useEffect)(()=>{t<=0n&&k([]),(null==o?void 0:o.length)&&!(l<=0n)&&!w&&(o.forEach(l=>{l.owner===e&&k(e=>[...null!=e?e:[],l]),l.totalStakerStakes>0n&&v(e=>[...null!=e?e:[],l])}),a(e=>e+BigInt(o.length)))},[w,o,l,t,e]),(0,m.useEffect)(()=>{if(!(l<=0n)){if(t<l){void 0===w&&p(!1);let e=setTimeout(()=>d(s+1),100);return()=>clearTimeout(e)}p(!0)}},[w,s,l,t]),{completed:w,pools:{total:l,processed:t},staked:{pools:x,stakes:g,rewards:j,metadata:N},launched:{pools:f,stakes:b,rewards:y,metadata:E}}}(t),E=(0,m.useMemo)(()=>{var e,l;return{pools:b.pools,rewards:Object.values(null!==(e=b.rewards)&&void 0!==e?e:{}).flat(),stakes:Object.values(null!==(l=b.stakes)&&void 0!==l?l:{}).flat()}},[b]),R=(0,m.useMemo)(()=>{var e,l;return{pools:y.pools,rewards:Object.values(null!==(e=y.rewards)&&void 0!==e?e:{}).flat(),stakes:Object.values(null!==(l=y.stakes)&&void 0!==l?l:{}).flat()}},[y]),C=(0,x.MF)(E),S=(0,x.MF)(R),A=(0,m.useMemo)(()=>{let e={};return b.pools&&b.pools.forEach(l=>{b.stakes&&b.stakes[l.id]&&b.stakes[l.id].forEach(t=>{var a,s,d,o,n,i;if(t.amountERC20>0n){let o=l.stakeERC20.tokenAddress;e[o]||(e[o]={total:0n,token:{...l.stakeERC20,logo:null==b?void 0:null===(d=b.metadata)||void 0===d?void 0:null===(s=d[l.id])||void 0===s?void 0:null===(a=s.logoURIs)||void 0===a?void 0:a[o]}}),e[o].total+=t.amountERC20}if(t.idERC721>0n){let a=l.stakeERC721.tokenAddress;e[a]||(e[a]={total:0n,token:{...l.stakeERC721,logo:null==b?void 0:null===(i=b.metadata)||void 0===i?void 0:null===(n=i[l.id])||void 0===n?void 0:null===(o=n.logoURIs)||void 0===o?void 0:o[a]}}),e[a].total+=t.idERC721}})}),Object.values(e)},[b]),O=(0,m.useMemo)(()=>{let e={};return b.pools&&b.pools.forEach(l=>{b.rewards&&b.rewards[l.id]&&b.rewards[l.id].forEach(t=>{let a=t.rewardToken.tokenAddress;if(!e[a]){var s,d,o;e[a]={total:0n,token:{...t.rewardToken,logo:null==b?void 0:null===(o=b.metadata)||void 0===o?void 0:null===(d=o[l.id])||void 0===d?void 0:null===(s=d.logoURIs)||void 0===s?void 0:s[a]}}}e[a].total+=t.stakerRewardAmount})}),Object.values(e)},[b]),F=(0,m.useMemo)(()=>{let e={};return y.pools&&y.pools.forEach(l=>{y.rewards&&y.rewards[l.id]&&y.rewards[l.id].forEach(t=>{let a=t.rewardToken.tokenAddress;if(!e[a]){var s,d,o;e[a]={total:0n,token:{...t.rewardToken,logo:null==y?void 0:null===(o=y.metadata)||void 0===o?void 0:null===(d=o[l.id])||void 0===d?void 0:null===(s=d.logoURIs)||void 0===s?void 0:s[a]}}}e[a].total+=t.rewardAmount})}),Object.values(e)},[y]),B=(0,m.useMemo)(()=>{if(!(null==b?void 0:b.pools)||!(null==b?void 0:b.stakes)||!(null==b?void 0:b.rewards)||!(null==b?void 0:b.metadata)||!(null==y?void 0:y.pools)||!(null==y?void 0:y.stakes)||!(null==y?void 0:y.rewards)||!(null==y?void 0:y.metadata))return;let e=[];return y.pools.forEach(l=>{e.push({pool:l,rewards:y.rewards[l.id],metadata:y.metadata[l.id],block:l.launchBlock,type:"launchPool"}),y.rewards[l.id]&&y.rewards[l.id].forEach(t=>{var a;e.push({pool:l,reward:t,metadata:null==y?void 0:null===(a=y.metadata)||void 0===a?void 0:a[l.id],block:t.rewardBlock,type:"addReward"})})}),b.pools.forEach(l=>{b.stakes[l.id]&&b.stakes[l.id].forEach(t=>{e.push({pool:l,stake:t,metadata:b.metadata[l.id],block:t.stakeBlock,type:"stake"}),t.unstakeBlock>0n&&e.push({pool:l,stake:t,metadata:b.metadata[l.id],block:t.unstakeBlock,type:"unstake"})})}),b.pools.forEach(l=>{b.rewards[l.id]&&b.rewards[l.id].forEach(t=>{if(t.stakerRewardAmount>0n){var a;e.push({pool:l,reward:t,metadata:null==b?void 0:null===(a=b.metadata)||void 0===a?void 0:a[l.id],block:t.rewardBlock,type:"reward"})}})}),e.sort((e,l)=>e.block>l.block?1:Number(e.pool.id)<Number(l.pool.id)?1:-1)},[b,y]);return t===n.r_?(0,a.jsx)("section",{className:"custom-screen text-center m-10",children:"Loading ..."}):(0,a.jsx)("section",{className:"custom-screen",children:(0,a.jsxs)(o.Z,{wrapperclassname:"max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)("div",{className:"bg-slate-200/10 h-24 w-24 mask mask-hexagon-2 mx-auto",children:(0,a.jsx)(s.default,{src:"/staqe.svg",width:0,height:0,alt:"Pool Image",className:"h-24 w-24 mask mask-hexagon-2"})})}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h1",{className:"text-l link font-mono",onClick:()=>{navigator.clipboard.writeText(t).catch(e=>console.error("Failed to copy text: ",e))},children:t})}),!j&&N.total>0n&&(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full z-20",children:(0,a.jsxs)("div",{className:"relative w-full h-full",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full opacity-80 bg-black"}),(0,a.jsx)("div",{className:"w-full h-20 py-20 mx-auto text-center",children:(0,a.jsxs)("div",{className:"radial-progress text-white",style:{"--value":(100n*N.processed/N.total).toString()},children:[(100n*N.processed/N.total).toString(),"%"]})})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2 mt-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2",children:[(0,a.jsxs)("div",{className:"p-1 pb-2 bg-stone-900/40 rounded-xl text-center",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(f.IVw,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Your Stakes"}),(0,a.jsx)("div",{children:(null==A?void 0:A.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:A.map((e,l)=>(0,a.jsx)("div",{className:"tooltip ".concat(l>0&&"-ml-4"),"data-tip":"".concat(k(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]}),(0,a.jsxs)("div",{className:"p-1 pb-2 bg-stone-900/40 rounded-xl text-center",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(f.GZI,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Your Rewards"}),(0,a.jsx)("div",{children:(null==O?void 0:O.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:O.map((e,l)=>(0,a.jsx)("div",{className:"tooltip ".concat(l>0&&"-ml-4"),"data-tip":"".concat(k(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]})]}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h2",{className:"text-xl",children:"Stakes"})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 grid-flow-row gap-2",children:[(0,a.jsxs)("div",{className:"p-1 pb-2 bg-stone-900/40 rounded-xl text-center",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(f.ffz,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Launched Pools"}),(null==y?void 0:null===(e=y.pools)||void 0===e?void 0:e.length)&&(null==y?void 0:y.metadata)?(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"flex justify-center items-center",children:y.pools.map((e,l)=>{var t,d,o,n;return y.metadata[e.id]&&(0,a.jsx)("div",{className:"tooltip ".concat(l>0&&"-ml-4"),"data-tip":null==y?void 0:null===(t=y.metadata)||void 0===t?void 0:t[e.id].name,children:(0,a.jsx)(s.default,{src:null!==(n=null==y?void 0:null===(d=y.metadata)||void 0===d?void 0:d[e.id].image)&&void 0!==n?n:"",width:0,height:0,alt:null==y?void 0:null===(o=y.metadata)||void 0===o?void 0:o[e.id].name,className:"w-10 h-10 rounded-full"})},"".concat(e.id,"-").concat(l))})})}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})]}),(0,a.jsxs)("div",{className:"p-1 pb-2 bg-stone-900/40 rounded-xl text-center",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(f.DCb,{className:"text-7xl w-full"})}),(0,a.jsx)("div",{className:"text-2xl pb-2",children:"Added Rewards"}),(0,a.jsx)("div",{children:(null==F?void 0:F.length)?(0,a.jsx)("div",{className:"flex justify-center items-center",children:F.map((e,l)=>(0,a.jsx)("div",{className:"tooltip ".concat(l>0&&"-ml-4"),"data-tip":"".concat(k(e.total,e.token.decimals)," ").concat(e.token.symbol),children:(0,a.jsx)(s.default,{src:"".concat(e.token.logo?e.token.logo:"/images/token.svg"),width:0,height:0,alt:"Reward",className:"w-10 h-10 rounded-full"})},e.token.tokenAddress))}):(0,a.jsx)("div",{className:"w-full text-gray-400 h-10",children:"NONE"})})]})]}),(0,a.jsx)("div",{className:"divider",children:(0,a.jsx)("h2",{className:"text-xl",children:"Launches"})})]})]}),(0,a.jsx)("ul",{className:"timeline timeline-snap-icon max-md:timeline-compact timeline-vertical",children:(null==B?void 0:B.length)?B.map((e,l)=>{if((null==e?void 0:e.pool)&&(null==e?void 0:e.metadata))return(0,a.jsxs)("li",{children:[0!==l&&(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"timeline-middle",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-5 w-5",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}),("stake"===e.type||"unstake"===e.type||"reward"===e.type)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"timeline-start md:text-end mb-10 w-full",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full",children:["reward"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Your Reward:"," ",(0,a.jsxs)(v.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[k(e.reward.rewardAmount,e.reward.rewardToken.decimals)," ",e.reward.rewardToken.symbol]})]}),("stake"===e.type||"unstake"===e.type)&&(0,a.jsxs)(a.Fragment,{children:["stake"===e.type?"Your Stake: ":"Your Unstake: ",(0,a.jsxs)(v.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[e.stake.amountERC20>0n&&(0,a.jsxs)(a.Fragment,{children:[k(e.stake.amountERC20,e.pool.stakeERC20.decimals)," ",e.pool.stakeERC20.symbol]})," ",e.stake.idERC721>0n&&(0,a.jsxs)(a.Fragment,{children:[e.stake.amountERC20>0n&&"| ","#",e.stake.idERC721.toString()," ",e.pool.stakeERC721.symbol]})]})]})]})}),(0,a.jsxs)("div",{className:"timeline-end mb-10",children:[C&&C[e.block.toString()],(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Block #",e.block.toString()]})]})]}),("launchPool"===e.type||"addReward"===e.type)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"timeline-start mb-10",children:[S&&S[e.block.toString()],(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["Block #",e.block.toString()]})]}),(0,a.jsx)("div",{className:"timeline-end md:text-end mb-10 w-full",children:(0,a.jsxs)("div",{className:"rounded-2xl bg-neutral-800/40 mx-auto py-10 text-center w-full",children:["launchPool"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Launched Pool:"," ",(0,a.jsx)(v.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:e.metadata.name})]}),"addReward"===e.type&&(0,a.jsxs)(a.Fragment,{children:["Added Reward:"," ",(0,a.jsxs)(v.default,{href:"/pool?id=".concat(e.pool.id),className:"link underline underline-offset-4 decoration-dotted",children:[k(e.reward.rewardAmount,e.reward.rewardToken.decimals)," ",e.reward.rewardToken.symbol]})]})]})})]}),l!==B.length-1&&(0,a.jsx)("hr",{})]},e.type+"-"+e.pool.id+"-"+l)}):(0,a.jsxs)("li",{children:[(0,a.jsx)(w,{}),(0,a.jsx)(p,{})]})})]})})}},10620:function(e,l,t){"use strict";var a=t(9131);l.Z=e=>{let{children:l,...t}=e;return(0,a.jsxs)("div",{...t,className:"relative ".concat(t.className||""),children:[(0,a.jsx)("div",{className:"absolute m-auto blur-[160px] ".concat(t.wrapperclassname||""),style:{background:"linear-gradient( 171.8deg,  rgba(5,111,146,1) 13.5%, rgba(6,57,84,1) 78.6% )"}}),(0,a.jsx)("div",{className:"relative",children:l})]})}}},function(e){e.O(0,[205,120,133,531,837,290,282,252,649,157,744],function(){return e(e.s=75301)}),_N_E=e.O()}]);