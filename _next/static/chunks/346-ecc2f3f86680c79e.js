"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[346],{89673:function(e,t,a){let n=(0,a(11214).createContext)({id:"",pool:void 0,pools:void 0,refetch:()=>{}});t.Z=n},36807:function(e,t,a){a.d(t,{A:function(){return d}});var n=a(11214),o=a(67934),r=a(3121);let i={name:"",description:"",image:"/images/token.jpg",external_url:"",banner_image:""},s=window.localStorage,c=async e=>{var t,a;if(void 0===e||""===e)return;let n=s.getItem("lastUpdateMetadata"),o=new Date().getTime();if(!(o-new Date(parseInt(n||"0",10)).getTime()>0))return i;let c=await fetch("".concat(r.j6).concat(e.replace(/ipfs:\/\//g,"")));if(!c.ok)return i;let l=await c.json();return l.image=/^ipfs/.test(l.image)?"".concat(r.j6).concat(l.image.replace(/ipfs:\/\//g,"")):l.image,l.banner_image=/^ipfs/.test(null!==(t=l.banner_image)&&void 0!==t?t:"")?"".concat(r.j6).concat((null!==(a=l.banner_image)&&void 0!==a?a:"").replace(/ipfs:\/\//g,"")):l.banner_image,l.tokens&&l.tokens.length&&l.tokens.forEach(e=>{if(e.address&&e.logoURI){var t;l.logoURIs||(l.logoURIs={}),l.logoURIs[e.address]="".concat(r.j6).concat((null!==(t=e.logoURI)&&void 0!==t?t:"").replace(/ipfs:\/\//g,""))}}),s.setItem(e,JSON.stringify(l)),s.setItem("lastUpdateMetadata",o.toString()),l},l=async e=>{try{return s.getItem(e),await c(e)}catch(e){return console.error("Failed to fetch or parse metadata:",e),i}};var u=JSON.parse('{"name":"Staqe Genesis Pool","description":"One of the primary benefits of owning a Genesis NFT is the ability to create staking pools. This means you can set up new pools where users can stake their ERC20 or ERC721 tokens to earn rewards. As a pool creator, you control various aspects like reward structures and staking terms. Owning a Genesis NFT is about more than just owning a piece of digital art; it’s about being a key player in the governance and evolution of the staking protocol, with both financial and strategic benefits. If you\'re looking to be actively involved in shaping the future of a blockchain project, a Genesis NFT provides a unique and powerful way to do so.","image":"ipfs://bafybeibkoohmrfcoltp63ga7c63ww5v45pupm22pavminkzgxgqq7cmd5q","external_url":"https://staqe.app","background_color":"ec4899","banner_image":"ipfs://bafybeiggmtgcvkmyw5vcen242xiuqiucjd6ymsgtnfqdojg46tbsb35wve/100.svg","attributes":[{"trait_type":"STK","value":"0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"},{"trait_type":"NFT","value":"0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968"},{"trait_type":"RWD","value":"0xeEBe00Ac0756308ac4AaBfD76c05c4F3088B8883"}],"tags":{"staqe":{"name":"Staqe Protocol","description":"Tokens used to create a pool in Staqe.App"}},"tokens":[{"chainId":1,"address":"0xa16E02E87b7454126E5E10d957A927A7F5B5d2be","symbol":"STK","name":"Stake Token","decimals":18,"logoURI":"ipfs://bafybeicwojjj6p722mhjxti7ncyf5e4qjujetn6ncznn36jormelh2wrre","tags":["staqe"]},{"chainId":1,"address":"0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968","symbol":"NFT","name":"Stake NFT","decimals":1,"logoURI":"ipfs://bafybeiccpf5ptxeu44xclr5b5ccj72dizneuoubcyqgq6vh57zwqnijr2i","tags":["staqe"]},{"chainId":1,"address":"0xeEBe00Ac0756308ac4AaBfD76c05c4F3088B8883","symbol":"RWD","name":"Reward Token","decimals":18,"logoURI":"ipfs://bafybeib5pigv5wqtrtc2udnzppm3kp3tkjju6rcyy6j7zl6xczj5gwjv2u","tags":["staqe"]},{"chainId":1,"address":"0x10C6E9530F1C1AF873a391030a1D9E8ed0630D26","symbol":"GNS","name":"Genesis NFT","decimals":18,"logoURI":"ipfs://bafybeiezmhcecbkdtc3jzfgsmful5kbnbdpz4kd4cw4cwguc3qba6vticy","tags":["staqe"]}],"timestamp":"2020-06-12T00:00:00+00:00"}');function d(e){let[t,a]=(0,n.useState)({});return(0,n.useEffect)(()=>{e&&0!==e.length&&(async()=>{let t=e.map(e=>l(e.tokenURI)),n=await Promise.all(t),i={};e.forEach((e,t)=>{if("0"===e.id){var a,s;u.image=/^ipfs/.test(u.image)?"".concat(r.j6).concat(u.image.replace(/ipfs:\/\//g,"")):u.image,u.banner_image=/^ipfs/.test(null!==(a=u.banner_image)&&void 0!==a?a:"")?"".concat(r.j6).concat((null!==(s=u.banner_image)&&void 0!==s?s:"").replace(/ipfs:\/\//g,"")):u.banner_image,u.tokens&&u.tokens.length&&u.tokens.forEach(e=>{if(e.address&&e.logoURI){var t;u.logoURIs||(u.logoURIs={}),u.logoURIs[(0,o.Kn)(e.address)]="".concat(r.j6).concat((null!==(t=e.logoURI)&&void 0!==t?t:"").replace(/ipfs:\/\//g,""))}}),i[e.id]=u}n&&void 0!==n[t]&&(i[e.id]=n[t])}),a(i)})()},[JSON.stringify(e,(e,t)=>"bigint"==typeof t?t.toString():t)]),t}},98647:function(e,t,a){a.d(t,{AI:function(){return l},CU:function(){return c},Oh:function(){return u}});var n=a(11214),o=a(52698),r=a(83191),i=a(60918),s=a(89673);let c=()=>{let e=(0,n.useContext)(s.Z);return null!=e?e:{id:"",pool:void 0,pools:void 0,refetch:()=>null}};function l(e,t){let a=(0,n.useMemo)(()=>e?[t,BigInt(e)]:void 0,[e,t]),{data:o,refetch:r}=(0,i.Xws)({args:a}),s=(0,n.useMemo)(()=>o?[{id:e,account:t,...o}]:void 0,[e,t,o]);return{pool:null==s?void 0:s[0],pools:s,refetch:r}}function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2?arguments[2]:void 0,s=(0,o.x)(),{[s]:c}=i.staqeProtocolAddress,{data:l}=(0,i.ZCR)(),u=e>1,d=!!l&&e*t<Number(l),g=(0,n.useMemo)(()=>{let n=Number(l||"0")-1-(e-1)*t,o=Math.max(n-t+1,0);return Array.from({length:n-o+1},(e,t)=>n-t+1).flatMap(e=>[{abi:i.kV_,address:c,functionName:"getPool",args:[a,BigInt(e)]}])},[l,e,t,a,c]),{data:f}=(0,r.N)({contracts:g});return{pools:(0,n.useMemo)(()=>{if(f&&!(f.length<=0))return f.reduce((e,t,n,o)=>(e.push({id:String(g[n].args[1]),account:a,...o[n].result||{}}),e),[])},[f,g,a]),hasPrev:u,hasNext:d}}},68495:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(60918),o=a(11214),r=a(52698),i=a(83191);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(0,r.x)(),{[t]:a}=n.staqeProtocolAddress,s=(0,o.useMemo)(()=>e.map(e=>({totalRewards:e.totalRewards,account:e.account,id:e.id})),[e]),c=(0,o.useMemo)(()=>e.flatMap(e=>Array.from({length:Number(e.totalRewards||0)},(t,o)=>({abi:n.kV_,address:a,functionName:"getReward",args:[e.account,BigInt(e.id),BigInt(o)]}))),[s]),{data:l}=(0,i.N)({contracts:c});return(0,o.useMemo)(()=>l&&0!==l.length?l.reduce((e,t,a)=>{let n=String(c[a].args[1]),o=t.result;return e[n]=e[n]?[...e[n],o]:[o],e},{}):{},[l,c])}},62758:function(e,t,a){a.d(t,{K:function(){return s}});var n=a(60918),o=a(11214),r=a(52698),i=a(83191);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(0,r.x)(),{[t]:a}=n.staqeProtocolAddress,s=(0,o.useMemo)(()=>e.map(e=>({totalStakerStakes:e.totalStakerStakes,account:e.account,id:e.id})),[e]),c=(0,o.useMemo)(()=>e.flatMap(e=>Array.from({length:Number(e.totalStakerStakes||0)},(t,o)=>({abi:n.kV_,address:a,functionName:"getStake",args:[e.account,BigInt(e.id),BigInt(o)]}))),[s]),{data:l}=(0,i.N)({contracts:c});return(0,o.useMemo)(()=>l&&0!==l.length?l.reduce((e,t,a)=>{let n=String(c[a].args[1]),o=t.result;return e[n]=e[n]?[...e[n],o]:[o],e},{}):{},[l,c])}},82680:function(e,t,a){a.d(t,{MF:function(){return c},Z9:function(){return s}});var n=a(15891),o=a(97791),r=a(67998),i=a(11214);function s(e){let[t,a]=(0,i.useState)();return(0,i.useEffect)(()=>{void 0===e||e<=0n||(async()=>{try{let t=await (0,o.Q)(n.v,{blockNumber:e});(null==t?void 0:t.timestamp)&&a((0,r.WU)(new Date(Number(1000n*t.timestamp)),"PP"))}catch(e){console.error("Error fetching block timestamp:",e),a(void 0)}})()},[e]),t}function c(e){let{pools:t,rewards:a,stakes:s}=e,[c,l]=(0,i.useState)(),u=(0,i.useMemo)(()=>{let e=(e,t)=>{let a=new Set;return null==e||e.forEach(e=>{t.forEach(t=>{let n=e[t];n&&n>0n&&a.add(n)})}),a};return Array.from(new Set([...e(t||[],["launchBlock"]),...e(a||[],["rewardBlock"]),...e(s||[],["stakeBlock","unstakeBlock"])]))},[null==t?void 0:t.length,null==a?void 0:a.length,null==s?void 0:s.length]);return(0,i.useEffect)(()=>{u.length&&(async()=>{try{let e=u.map(e=>(0,o.Q)(n.v,{blockNumber:e}).catch(()=>null)),t=(await Promise.all(e)).reduce((e,t,a)=>(t&&(e[u[a].toString()]=(0,r.WU)(new Date(Number(1000n*t.timestamp)),"PP")),e),{});l(t)}catch(e){console.error("Error fetching timestamps:",e)}})()},[u]),c}},15891:function(e,t,a){a.d(t,{v:function(){return b}});var n=a(49877),o=a(41355),r=a(22721),i=a(63437),s=a(25357),c=a(52246),l=a(33031),u=a(93443),d=a(43623),g=a(16625),f=a(66063);let m={...l.d,contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}}},p=(0,c.a)({id:1029,name:"BitTorrent Chain Donau",nativeCurrency:{name:"BitTorrent",symbol:"BTT",decimals:18},rpcUrls:{default:{http:["https://pre-rpc.bittorrentchain.io/"]}},blockExplorers:{default:{name:"BitTorrent",url:"https://testscan.bt.io"}},contracts:{multicall3:{address:"0x5608020135e7Eb9a1ef6683aD4988200eA5Cfcbf"}}}),b=(0,o._)({chains:[u.o,d.v,g.c,p,f.d,m],connectors:[(0,n.L)()],ssr:!0,storage:(0,r.o)({storage:i.Dr}),transports:{[m.id]:(0,s.d)(),[u.o.id]:(0,s.d)(),[p.id]:(0,s.d)(),[f.d.id]:(0,s.d)(),[d.v.id]:(0,s.d)(),[g.c.id]:(0,s.d)()}})}}]);