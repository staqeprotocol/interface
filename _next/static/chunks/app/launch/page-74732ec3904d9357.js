(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{452:function(e,a,l){Promise.resolve().then(l.bind(l,57953))},57953:function(e,a,l){"use strict";l.r(a);var s=l(66660),t=l(70123),n=l(40176),o=l(86508),r=l(2079),i=l(41176),d=l(5850),c=l(33208),u=l(35606),m=l(20339),h=l(95874),p=l(97007),x=l(91462),g=l(52e3),f=l(16787);a.default=()=>{let e=(0,g.x)(),{[e]:a}=n.toqenAddress,{address:l=t.r_}=(0,f.m)(),[j,N]=(0,m.useState)(""),[b,w]=(0,m.useState)(""),[v,k]=(0,m.useState)(""),[y,S]=(0,m.useState)(null),[C,R]=(0,m.useState)(""),[I,E]=(0,m.useState)(null),[F,T]=(0,m.useState)(""),[U,M]=(0,m.useState)(""),[A,P]=(0,m.useState)(""),[_,O]=(0,m.useState)(""),[q,L]=(0,m.useState)(""),[z,B]=(0,m.useState)(""),[J,H]=(0,m.useState)(null),[D,W]=(0,m.useState)(""),[V,G]=(0,m.useState)(null),[K,Q]=(0,m.useState)(""),[X,Y]=(0,m.useState)(null),[Z,$]=(0,m.useState)(""),[ee,ea]=(0,m.useState)("hidden"),[el,es]=(0,m.useState)(""),[et]=(0,o.R)(A,l),[en]=(0,o.c)(_,l),[eo]=(0,o.R)(q,l),{data:er,refetch:ei}=(0,n.fgE)({args:[l,0n]}),ed=(0,m.useMemo)(()=>er&&!!er.filter(e=>e.unstakeBlock<=0n).length,[er]),{writeContract:ec,error:eu}=(0,n.q0D)();console.log("error",eu);let em=async(e,a)=>{try{let l=new FormData;if(!(a instanceof File))return console.error("The field did not contain a file."),"";l.append("file",a),l.append("pinataMetadata",JSON.stringify({name:e})),l.append("pinataOptions",JSON.stringify({cidVersion:0}));let s=await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",{method:"POST",headers:{Authorization:"Bearer ".concat(j)},body:l}),t=await s.json();return console.log("uploadImage",t),t&&t.IpfsHash?"ipfs://"+d.k0.parse(t.IpfsHash).toV1().toString(i.pJ):""}catch(e){return console.log("uploadImage",e),""}},eh=async()=>{let a,l,s,n;if(!y||!I)return"";if(!j){let e=document.getElementById("ipfs");null==e||e.showModal();return}es("Upload Logo Image");let o=await em("Logo",y);k("".concat(t.j6).concat(o.replace(/ipfs:\/\//g,""))),es("Upload Background Image");let r=await em("Image",I);if(R("".concat(t.j6).concat(r.replace(/ipfs:\/\//g,""))),A&&J&&(es("Upload ERC20 Logo"),a=await em("ERC20",J),B("".concat(t.j6).concat(a.replace(/ipfs:\/\//g,"")))),_&&V&&(es("Upload ERC721 Logo"),l=await em("ERC20",V),W("".concat(t.j6).concat(l.replace(/ipfs:\/\//g,"")))),q&&X&&(es("Upload Reward Logo"),s=await em("Reward",X),Q("".concat(t.j6).concat(s.replace(/ipfs:\/\//g,"")))),""==F||""==U||""==o)return console.log("name",F),console.log("description",U),console.log("logoURI",o),console.log("backgroundURI",r),"";console.log("Staqe:",A,_,q),console.log("Info:",et,en,eo);try{let c=[];A&&et&&a&&c.push({chainId:e,address:A,symbol:null==et?void 0:et.symbol,name:null==et?void 0:et.name,decimals:Number(null==et?void 0:et.decimals),logoURI:a,tags:["staqe"]}),_&&en&&l&&c.push({chainId:e,address:_,symbol:null==en?void 0:en.symbol,name:null==en?void 0:en.name,decimals:0,logoURI:l,tags:["staqe"]}),q&&eo&&s&&c.push({chainId:e,address:q,symbol:null==eo?void 0:eo.symbol,name:null==eo?void 0:eo.name,decimals:Number(null==eo?void 0:eo.decimals),logoURI:s,tags:["staqe"]}),console.log("Tokens",c);let u=new Blob([JSON.stringify({name:F,description:U,image:o,background_color:b.replace("#",""),banner_image:r,tags:{staqe:{name:"Staqe Protocol",description:"Tokens used to create a pool in Staqe.App"}},tokens:c})],{type:"application/json"}),m=new FormData;m.append("file",u,"filename.json"),m.append("pinataMetadata",JSON.stringify({name:F})),m.append("pinataOptions",JSON.stringify({cidVersion:0})),es("Upload Metadata");let h=await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",{method:"POST",headers:{Authorization:"Bearer ".concat(j)},body:m}),p=await h.json();p&&p.IpfsHash&&(n="ipfs://"+d.k0.parse(p.IpfsHash).toV1().toString(i.pJ)),console.log("Get Metadata: ".concat(t.j6).concat(d.k0.parse(p.IpfsHash).toV1().toString(i.pJ),"?").concat(Math.random())),es("Get Metadata ...");let x=await fetch("".concat(t.j6).concat(d.k0.parse(p.IpfsHash).toV1().toString(i.pJ),"?").concat(Math.random())),g=await x.json();console.log("Metadata",d.k0.parse(p.IpfsHash).toV1().toString(i.pJ),g),n&&g&&g.name===F&&(es("Send To Blockchain"),ec({args:[A||t.r_,_||t.r_,q||t.r_,BigInt(Z||"0"),n]}))}catch(e){console.log("Error",e)}};return(0,s.jsxs)("section",{className:"custom-screen",children:[(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full h-full",children:(0,s.jsx)("div",{className:"w-full h-[40rem]",children:(0,s.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,s.jsxs)("div",{className:"flex items-center text-center justify-center overflow-hidden rounded-2xl w-full h-3/5 relative bg-slate-200/10",style:{backgroundColor:b},children:[!C&&(0,s.jsx)("div",{className:"absolute ".concat(ee),id:"color-picker",children:(0,s.jsx)(h.gW,{color:b,onChange:w})}),(0,s.jsxs)("label",{htmlFor:"dropzone-image",className:"flex flex-col items-center justify-center w-full h-full",children:[C?(0,s.jsx)("span",{className:"absolute bg-slate-200/10 inset-0 w-full h-full -z-10",style:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(".concat(C,")")}}):(0,s.jsxs)("div",{className:"text-xl px-3 text-center",children:[(0,s.jsx)("span",{className:"link",children:"Click to upload image"})," or"," ",(0,s.jsx)("a",{className:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),ea(ee?"":"hidden")},children:"set background color"})]}),(0,s.jsx)("input",{id:"dropzone-image",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){E(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&(w(""),R(e.result))},e.readAsDataURL(a)}}})]})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center p-4 mx-6 mb-2 -mt-16 overflow-hidden break-words rounded-2xl backdrop-blur-2xl backdrop-saturate-200 shadow-blur border-0 bg-slate-200/10 w-auto h-1/5",children:[(0,s.jsx)("div",{className:"w-auto",children:(0,s.jsx)("div",{className:"bg-slate-200/10 h-24 w-24 mask mask-hexagon-2",children:(0,s.jsxs)("label",{htmlFor:"dropzone-logo",className:"flex flex-col items-center justify-center h-24 w-24",children:[v?(0,s.jsx)(c.default,{src:v,width:0,height:0,alt:"Pool Image",className:"h-24 w-24 mask mask-hexagon-2",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"Click to upload pool logo"})}),(0,s.jsx)("input",{id:"dropzone-logo",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){S(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&k(e.result)},e.readAsDataURL(a)}}})]})})}),(0,s.jsx)("div",{className:"w-auto px-3 my-auto",children:(0,s.jsx)("input",{type:"text",placeholder:"Type Here Pool Name",className:"input input-ghost w-full max-w-xs text-white text-3xl bg-transparent",value:F,onChange:e=>{T(e.target.value)}})}),(0,s.jsx)("div",{className:"flex gap-2 w-auto my-auto ml-auto",children:(0,s.jsx)("div",{className:"bg-slate-200/10 h-12 w-28 rounded-2xl"})})]})]})})}),(0,s.jsx)("div",{className:"w-full h-full -mt-44",children:(0,s.jsxs)("div",{className:"grid grid-cols-5 grid-rows-3 grid-flow-row gap-4",children:[(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-erc20",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-erc20",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[z?(0,s.jsx)(c.default,{src:z,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-erc20",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){H(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&B(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Stake ",(0,s.jsx)("br",{}),"ERC20"]}),(0,s.jsx)("input",{id:"input-erc20",type:"text",className:"grow",placeholder:"0x...",value:A,onChange:e=>{P(e.target.value?(0,x.Kn)(e.target.value):""),(e.target.value&&_||!e.target.value&&!_)&&$("")}}),A&&!_?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max:"," ",(0,s.jsx)("span",{className:"link ml-2",onClick:()=>{let e=document.getElementById("total-max");null==e||e.showModal()},children:Z||"Unlimited"})]}):A?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max: ",(0,s.jsx)("span",{className:"ml-2",children:"Unlimited"})]}):(0,s.jsx)("span",{className:"badge badge-warning",children:(0,s.jsx)("span",{className:"link decoration-dotted underline-offset-2 hover:scale-110",onClick:()=>{let e=document.getElementById("create-erc20");null==e||e.showModal()},children:"CREATE ERC20"})}),!A&&_&&(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})}),(0,s.jsx)("div",{className:"col-span-2 row-span-3",children:(0,s.jsx)("textarea",{className:"textarea textarea-bordered w-full h-full",placeholder:"Type here Description",value:U,onChange:e=>{M(e.target.value)}})}),(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-erc721",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-erc721",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[D?(0,s.jsx)(c.default,{src:D,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-erc721",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){G(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&W(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Stake ",(0,s.jsx)("br",{}),"ERC721"]}),(0,s.jsx)("input",{id:"input-erc721",type:"text",className:"grow",placeholder:"0x...",value:_,onChange:e=>{O(e.target.value?(0,x.Kn)(e.target.value):""),(e.target.value&&A||!e.target.value&&!A)&&$("")}}),_&&!A?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max:"," ",(0,s.jsx)("span",{className:"link ml-2",onClick:()=>{let e=document.getElementById("total-max");null==e||e.showModal()},children:Z||"Unlimited"})]}):_?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max: ",(0,s.jsx)("span",{className:"ml-2",children:"Unlimited"})]}):(0,s.jsx)("span",{className:"badge badge-warning",children:(0,s.jsx)("span",{className:"link decoration-dotted underline-offset-2 hover:scale-110",onClick:()=>{let e=document.getElementById("create-erc721");null==e||e.showModal()},children:"CREATE ERC721"})}),!_&&A&&(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})}),(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-reward",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-reward",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[K?(0,s.jsx)(c.default,{src:K,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-reward",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){Y(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&Q(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Reward ",(0,s.jsx)("br",{}),"ERC20"]}),(0,s.jsx)("input",{id:"input-reward",type:"text",className:"grow",placeholder:"0x...",value:q,onChange:e=>{L(e.target.value?(0,x.Kn)(e.target.value):"")}}),(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})})]})}),(0,s.jsx)("div",{className:"w-full h-full my-4",children:(0,s.jsx)("button",{className:"btn btn-outline btn-block btn-lg btn-success ".concat(el&&"animate-pulse"),onClick:ed?eh:()=>{let e=document.getElementById("not-genesis");null==e||e.showModal()},children:el||"Launch Pool"})}),(0,s.jsxs)("dialog",{id:"total-max",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box",children:[(0,s.jsxs)("label",{className:"form-control w-full",children:[(0,s.jsx)("div",{className:"label",children:(0,s.jsx)("span",{className:"label-text",children:"Total Max Amount Tokens For Staking"})}),(0,s.jsx)("input",{type:"text",placeholder:"Type here Total Max",className:"input input-bordered w-full",value:Z,onChange:e=>{$(e.target.value)}})]}),(0,s.jsx)("div",{className:"modal-action",children:(0,s.jsx)("form",{method:"dialog",children:(0,s.jsx)("button",{className:"btn",children:"Save"})})})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"ipfs",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box flex flex-col justify-center items-center gap-4",children:[(0,s.jsx)("div",{className:"text-center",children:"A Pinata JWT key is required to upload metadata to IPFS. Please register at pinata.cloud and insert the JWT key. This is completely free of charge."}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"form-control w-full",children:(0,s.jsx)("input",{type:"text",placeholder:"Type here pinata JWT",className:"input input-bordered w-full",value:j,onChange:e=>{N(e.currentTarget.value)}})}),(0,s.jsx)("div",{className:"modal-action",children:(0,s.jsx)("form",{method:"dialog",children:(0,s.jsx)("button",{className:"btn",children:"Save"})})})]})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"create-erc20",className:"modal",children:[(0,s.jsx)("div",{className:"modal-box",children:(0,s.jsx)(r.Qj,{toqen:a,standart:"ERC20",dark:!0,steps:!1,handle:e=>{let{data:a,status:l}=e;console.log(a,l)}})}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"create-erc721",className:"modal",children:[(0,s.jsx)("div",{className:"modal-box",children:(0,s.jsx)(r.Qj,{toqen:a,standart:"ERC721",dark:!0,steps:!1,handle:e=>{let{data:a,status:l}=e;console.log(a,l)}})}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"not-genesis",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box flex flex-col justify-center items-center gap-4",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(p.nLl,{className:"text-6xl"})}),(0,s.jsxs)("div",{className:"text-center",children:["Stake NFT Genesis is required to create new pools.",(0,s.jsx)("br",{}),"Please create new NFT Genesis and Stake on:"]}),(0,s.jsx)("div",{children:(0,s.jsx)(u.default,{href:"/pool?id=0",target:"_blank",className:"btn btn-md",children:"Genesis page"})})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]})]})}},86508:function(e,a,l){"use strict";l.d(a,{R:function(){return i},c:function(){return d}});var s=l(40176),t=l(20339),n=l(52e3),o=l(65886),r=l(70123);function i(e,a){let l=(0,n.x)(),{[l]:i}=s.staqeProtocolAddress,[d,c]=(0,t.useState)(),u=(0,t.useMemo)(()=>{if(e&&e!==r.r_&&a&&i)return[{address:e,abi:s.WoU,functionName:"name"},{address:e,abi:s.WoU,functionName:"symbol"},{address:e,abi:s.WoU,functionName:"decimals"},{address:e,abi:s.WoU,functionName:"balanceOf",args:[a]},{address:e,abi:s.WoU,functionName:"allowance",args:[a,i]}]},[e,a,i]),{data:m,refetch:h}=(0,o.N)({allowFailure:!1,contracts:u});return(0,t.useEffect)(()=>{if(!m)return;let[a,l,s,t,n]=m;c({tokenAddress:null!=e?e:r.r_,name:a,symbol:l,decimals:s,balance:t,isApproved:!1,allowance:n})},[m]),[d,h]}function d(e,a){let l=(0,n.x)(),{[l]:i}=s.staqeProtocolAddress,[d,c]=(0,t.useState)(),u=(0,t.useMemo)(()=>{if(e&&e!==r.r_&&a&&i)return[{address:e,abi:s.HrC,functionName:"name"},{address:e,abi:s.HrC,functionName:"symbol"},{address:e,abi:s.HrC,functionName:"balanceOf",args:[a]},{address:e,abi:s.HrC,functionName:"isApprovedForAll",args:[a,i]}]},[e,a,i]),{data:m,refetch:h}=(0,o.N)({allowFailure:!1,contracts:u});return(0,t.useEffect)(()=>{if(!m)return;let[a,l,s,t]=m;c({tokenAddress:null!=e?e:r.r_,name:a,symbol:l,decimals:0n,balance:s,isApproved:t,allowance:0n})},[m]),[d,h]}}},function(e){e.O(0,[619,417,902,758,914,79,612,506,703,456,744],function(){return e(e.s=452)}),_N_E=e.O()}]);