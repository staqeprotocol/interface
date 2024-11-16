"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{8090:function(e,a,l){l.r(a);var s=l(98125),t=l(83807),n=l(53541),o=l(70990),r=l(88724),i=l(51961),d=l(65121),c=l(76469),u=l(22392),m=l(62008),p=l(39853),h=l(35508),x=l(5934),g=l(95882),f=l(49138),j=l(93909),N=l(69083);a.default=()=>{let e=(0,j.x)(),{[e]:a}=n.toqenAddress,{address:l=t.r_}=(0,N.m)(),[b,w]=(0,m.useState)(""),[v,k]=(0,m.useState)(""),[y,S]=(0,m.useState)(""),[C,R]=(0,m.useState)(null),[I,E]=(0,m.useState)(""),[F,T]=(0,m.useState)(null),[P,M]=(0,m.useState)(""),[A,U]=(0,m.useState)(""),[q,L]=(0,m.useState)(""),[_,z]=(0,m.useState)(""),[O,B]=(0,m.useState)(""),[J,D]=(0,m.useState)(""),[H,V]=(0,m.useState)(null),[G,W]=(0,m.useState)(""),[K,Q]=(0,m.useState)(null),[Z,X]=(0,m.useState)(""),[Y,$]=(0,m.useState)(null),[ee,ea]=(0,m.useState)(""),[el,es]=(0,m.useState)("hidden"),[et,en]=(0,m.useState)(""),[eo]=(0,o.R)(q,l),[er]=(0,o.c)(_,l),[ei]=(0,o.R)(O,l),{data:ed,refetch:ec}=(0,n.fgE)({args:[l,0n]}),eu=(0,m.useMemo)(()=>ed&&!!ed.filter(e=>e.unstakeBlock<=0n).length,[ed]),{writeContract:em,error:ep}=(0,n.q0D)();console.log("error",ep);let eh=async(e,a)=>{try{let l=new FormData;if(!(a instanceof File))return console.error("The field did not contain a file."),"";l.append("file",a),l.append("pinataMetadata",JSON.stringify({name:e})),l.append("pinataOptions",JSON.stringify({cidVersion:0}));let s=await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",{method:"POST",headers:{Authorization:"Bearer ".concat(b)},body:l}),t=await s.json();return console.log("uploadImage",t),t&&t.IpfsHash?"ipfs://"+d.k0.parse(t.IpfsHash).toV1().toString(i.pJ):""}catch(e){return console.log("uploadImage",e),""}},ex=async()=>{let a,l,s,n;if(!C||!F)return"";if(!b){let e=document.getElementById("ipfs");null==e||e.showModal();return}en("Upload Logo Image");let o=await eh("Logo",C);S("".concat(t.j6).concat(o.replace(/ipfs:\/\//g,""))),en("Upload Background Image");let r=await eh("Image",F);if(E("".concat(t.j6).concat(r.replace(/ipfs:\/\//g,""))),q&&H&&(en("Upload ERC20 Logo"),a=await eh("ERC20",H),D("".concat(t.j6).concat(a.replace(/ipfs:\/\//g,"")))),_&&K&&(en("Upload ERC721 Logo"),l=await eh("ERC20",K),W("".concat(t.j6).concat(l.replace(/ipfs:\/\//g,"")))),O&&Y&&(en("Upload Reward Logo"),s=await eh("Reward",Y),X("".concat(t.j6).concat(s.replace(/ipfs:\/\//g,"")))),""==P||""==A||""==o)return console.log("name",P),console.log("description",A),console.log("logoURI",o),console.log("backgroundURI",r),"";console.log("Staqe:",q,_,O),console.log("Info:",eo,er,ei);try{let c=[];q&&eo&&a&&c.push({chainId:e,address:q,symbol:null==eo?void 0:eo.symbol,name:null==eo?void 0:eo.name,decimals:Number(null==eo?void 0:eo.decimals),logoURI:a,tags:["staqe"]}),_&&er&&l&&c.push({chainId:e,address:_,symbol:null==er?void 0:er.symbol,name:null==er?void 0:er.name,decimals:0,logoURI:l,tags:["staqe"]}),O&&ei&&s&&c.push({chainId:e,address:O,symbol:null==ei?void 0:ei.symbol,name:null==ei?void 0:ei.name,decimals:Number(null==ei?void 0:ei.decimals),logoURI:s,tags:["staqe"]}),console.log("Tokens",c);let u=new Blob([JSON.stringify({name:P,description:A,image:o,background_color:v.replace("#",""),banner_image:r,tags:{staqe:{name:"Staqe Protocol",description:"Tokens used to create a pool in Staqe.App"}},tokens:c})],{type:"application/json"}),m=new FormData;m.append("file",u,"filename.json"),m.append("pinataMetadata",JSON.stringify({name:P})),m.append("pinataOptions",JSON.stringify({cidVersion:0})),en("Upload Metadata");let p=await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",{method:"POST",headers:{Authorization:"Bearer ".concat(b)},body:m}),h=await p.json();h&&h.IpfsHash&&(n="ipfs://"+d.k0.parse(h.IpfsHash).toV1().toString(i.pJ)),console.log("Get Metadata: ".concat(t.j6).concat(d.k0.parse(h.IpfsHash).toV1().toString(i.pJ),"?").concat(Math.random())),en("Get Metadata ...");let x=await fetch("".concat(t.j6).concat(d.k0.parse(h.IpfsHash).toV1().toString(i.pJ),"?").concat(Math.random())),g=await x.json();console.log("Metadata",d.k0.parse(h.IpfsHash).toV1().toString(i.pJ),g),n&&g&&g.name===P&&(en("Send To Blockchain"),em({args:[q||t.r_,_||t.r_,O||t.r_,BigInt(ee||"0"),n]}))}catch(e){console.log("Error",e)}};return(0,s.jsxs)("section",{className:"custom-screen",children:[(0,s.jsx)("div",{className:"flex flex-col gap-2 w-full h-full",children:(0,s.jsx)("div",{className:"w-full h-[40rem]",children:(0,s.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,s.jsxs)("div",{className:"flex items-center text-center justify-center overflow-hidden rounded-2xl w-full h-3/5 relative bg-slate-200/10",style:{backgroundColor:v},children:[!I&&(0,s.jsx)("div",{className:"absolute ".concat(el),id:"color-picker",children:(0,s.jsx)(p.gW,{color:v,onChange:k})}),(0,s.jsxs)("label",{htmlFor:"dropzone-image",className:"flex flex-col items-center justify-center w-full h-full",children:[I?(0,s.jsx)("span",{className:"absolute bg-slate-200/10 inset-0 w-full h-full -z-10",style:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(".concat(I,")")}}):(0,s.jsxs)("div",{className:"text-xl px-3 text-center",children:[(0,s.jsx)("span",{className:"link",children:"Click to upload image"})," or"," ",(0,s.jsx)("a",{className:"link",onClick:e=>{e.preventDefault(),e.stopPropagation(),es(el?"":"hidden")},children:"set background color"})]}),(0,s.jsx)("input",{id:"dropzone-image",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){T(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&(k(""),E(e.result))},e.readAsDataURL(a)}}})]})]}),(0,s.jsxs)("div",{className:"flex flex-row items-center p-4 mx-6 mb-2 -mt-16 overflow-hidden break-words rounded-2xl backdrop-blur-2xl backdrop-saturate-200 shadow-blur border-0 bg-slate-200/10 w-auto h-1/5",children:[(0,s.jsx)("div",{className:"w-auto",children:(0,s.jsx)("div",{className:"bg-slate-200/10 h-24 w-24 mask mask-hexagon-2",children:(0,s.jsxs)("label",{htmlFor:"dropzone-logo",className:"flex flex-col items-center justify-center h-24 w-24",children:[y?(0,s.jsx)(c.default,{src:y,width:0,height:0,alt:"Pool Image",className:"h-24 w-24 mask mask-hexagon-2",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"Click to upload pool logo"})}),(0,s.jsx)("input",{id:"dropzone-logo",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){R(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&S(e.result)},e.readAsDataURL(a)}}})]})})}),(0,s.jsx)("div",{className:"w-auto px-3 my-auto",children:(0,s.jsx)("input",{type:"text",placeholder:"Type Here Pool Name",className:"input input-ghost w-full max-w-xs text-white text-3xl bg-transparent",value:P,onChange:e=>{M(e.target.value)}})}),(0,s.jsx)("div",{className:"flex gap-2 w-auto my-auto ml-auto",children:(0,s.jsxs)("button",{className:"btn btn-block rounded-3xl btn-md btn-success ".concat(et&&"animate-pulse"),onClick:eu?ex:()=>{let e=document.getElementById("not-genesis");null==e||e.showModal()},children:[et?(0,s.jsx)(h.frZ,{className:"animate-spin"}):(0,s.jsx)(g.H8Z,{})," ",et||"Launch Pool"]})})]})]})})}),(0,s.jsx)("div",{className:"w-full h-full -mt-44",children:(0,s.jsxs)("div",{className:"grid grid-cols-5 grid-rows-3 grid-flow-row gap-4",children:[(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-erc20",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-erc20",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[J?(0,s.jsx)(c.default,{src:J,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-erc20",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){V(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&D(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Stake ",(0,s.jsx)("br",{}),"ERC20"]}),(0,s.jsx)("input",{id:"input-erc20",type:"text",className:"grow",placeholder:"0x...",value:q,onChange:e=>{L(e.target.value?(0,f.K)(e.target.value):""),(e.target.value&&_||!e.target.value&&!_)&&ea("")}}),q&&!_?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max:"," ",(0,s.jsx)("span",{className:"link ml-2",onClick:()=>{let e=document.getElementById("total-max");null==e||e.showModal()},children:ee||"Unlimited"})]}):q?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max: ",(0,s.jsx)("span",{className:"ml-2",children:"Unlimited"})]}):(0,s.jsx)("span",{className:"badge badge-warning",children:(0,s.jsx)("span",{className:"link decoration-dotted underline-offset-2 hover:scale-110",onClick:()=>{let e=document.getElementById("create-erc20");null==e||e.showModal()},children:"CREATE ERC20"})}),!q&&_&&(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})}),(0,s.jsx)("div",{className:"col-span-2 row-span-3",children:(0,s.jsx)("textarea",{className:"textarea textarea-bordered w-full h-full",placeholder:"Type here Description",value:A,onChange:e=>{U(e.target.value)}})}),(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-erc721",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-erc721",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[G?(0,s.jsx)(c.default,{src:G,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-erc721",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){Q(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&W(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Stake ",(0,s.jsx)("br",{}),"ERC721"]}),(0,s.jsx)("input",{id:"input-erc721",type:"text",className:"grow",placeholder:"0x...",value:_,onChange:e=>{z(e.target.value?(0,f.K)(e.target.value):""),(e.target.value&&q||!e.target.value&&!q)&&ea("")}}),_&&!q?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max:"," ",(0,s.jsx)("span",{className:"link ml-2",onClick:()=>{let e=document.getElementById("total-max");null==e||e.showModal()},children:ee||"Unlimited"})]}):_?(0,s.jsxs)("span",{className:"badge badge-warning",children:["Max: ",(0,s.jsx)("span",{className:"ml-2",children:"Unlimited"})]}):(0,s.jsx)("span",{className:"badge badge-warning",children:(0,s.jsx)("span",{className:"link decoration-dotted underline-offset-2 hover:scale-110",onClick:()=>{let e=document.getElementById("create-erc721");null==e||e.showModal()},children:"CREATE ERC721"})}),!_&&q&&(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})}),(0,s.jsx)("div",{className:"col-span-3",children:(0,s.jsx)("div",{className:"flex flex-col w-full h-full",children:(0,s.jsxs)("label",{htmlFor:"input-reward",className:"input input-bordered flex items-center gap-2",children:[(0,s.jsxs)("label",{htmlFor:"dropzone-logo-reward",className:"flex justify-center items-center w-14 h-14 bg-neutral-700 rounded-full shadow-md overflow-hidden",children:[Z?(0,s.jsx)(c.default,{src:Z,width:0,height:0,alt:"Token Logo",className:"w-14 h-14 rounded-full shadow-md",priority:!0}):(0,s.jsx)("div",{className:"text-xs px-3 text-center",children:(0,s.jsx)("span",{className:"link decoration-dotted",children:"upload token logo"})}),(0,s.jsx)("input",{id:"dropzone-logo-reward",type:"file",className:"hidden",onChange:e=>{let a=e.target.files?e.target.files[0]:null;if(a){$(a);let e=new FileReader;e.onloadend=()=>{"string"==typeof e.result&&X(e.result)},e.readAsDataURL(a)}}})]}),(0,s.jsxs)("span",{className:"text-neutral-500 text-xs text-center",children:["Reward ",(0,s.jsx)("br",{}),"ERC20"]}),(0,s.jsx)("input",{id:"input-reward",type:"text",className:"grow",placeholder:"0x...",value:O,onChange:e=>{B(e.target.value?(0,f.K)(e.target.value):"")}}),(0,s.jsx)("span",{className:"badge badge-info",children:"Optional"})]})})})]})}),(0,s.jsxs)("dialog",{id:"total-max",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box",children:[(0,s.jsxs)("label",{className:"form-control w-full",children:[(0,s.jsx)("div",{className:"label",children:(0,s.jsx)("span",{className:"label-text",children:"Total Max Amount Tokens For Staking"})}),(0,s.jsx)("input",{type:"text",placeholder:"Type here Total Max",className:"input input-bordered w-full",value:ee,onChange:e=>{ea(e.target.value)}})]}),(0,s.jsx)("div",{className:"modal-action",children:(0,s.jsx)("form",{method:"dialog",children:(0,s.jsx)("button",{className:"btn",children:"Save"})})})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"ipfs",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box flex flex-col justify-center items-center gap-4",children:[(0,s.jsx)("div",{className:"text-center",children:"A Pinata JWT key is required to upload metadata to IPFS. Please register at pinata.cloud and insert the JWT key. This is completely free of charge."}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)("label",{className:"form-control w-full",children:(0,s.jsx)("input",{type:"text",placeholder:"Type here pinata JWT",className:"input input-bordered w-full",value:b,onChange:e=>{w(e.currentTarget.value)}})}),(0,s.jsx)("div",{className:"modal-action",children:(0,s.jsx)("form",{method:"dialog",children:(0,s.jsx)("button",{className:"btn",children:"Save"})})})]})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"create-erc20",className:"modal",children:[(0,s.jsx)("div",{className:"modal-box",children:(0,s.jsx)(r.Qj,{toqen:a,standart:"ERC20",dark:!0,steps:!1,handle:e=>{let{data:a,status:l}=e;console.log(a,l)}})}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"create-erc721",className:"modal",children:[(0,s.jsx)("div",{className:"modal-box",children:(0,s.jsx)(r.Qj,{toqen:a,standart:"ERC721",dark:!0,steps:!1,handle:e=>{let{data:a,status:l}=e;console.log(a,l)}})}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]}),(0,s.jsxs)("dialog",{id:"not-genesis",className:"modal",children:[(0,s.jsxs)("div",{className:"modal-box flex flex-col justify-center items-center gap-4",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(x.nLl,{className:"text-6xl"})}),(0,s.jsxs)("div",{className:"text-center",children:["Stake NFT Genesis is required to create new pools.",(0,s.jsx)("br",{}),"Please create new NFT Genesis and Stake on:"]}),(0,s.jsx)("div",{children:(0,s.jsx)(u.default,{href:"/pool?id=0",target:"_blank",className:"btn btn-md",children:"Genesis page"})})]}),(0,s.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,s.jsx)("button",{children:"close"})})]})]})}},70990:function(e,a,l){l.d(a,{R:function(){return i},c:function(){return d}});var s=l(53541),t=l(62008),n=l(93909),o=l(21235),r=l(83807);function i(e,a){let l=(0,n.x)(),{[l]:i}=s.staqeProtocolAddress,[d,c]=(0,t.useState)(),u=(0,t.useMemo)(()=>{if(e&&e!==r.r_&&a&&i)return[{address:e,abi:s.t4r,functionName:"name"},{address:e,abi:s.t4r,functionName:"symbol"},{address:e,abi:s.t4r,functionName:"decimals"},{address:e,abi:s.t4r,functionName:"balanceOf",args:[a]},{address:e,abi:s.t4r,functionName:"allowance",args:[a,i]},{address:e,abi:s.t4r,functionName:"tokenPrice"},{address:e,abi:s.t4r,functionName:"maxSupply"}]},[e,a,i]),{data:m,refetch:p}=(0,o.N)({allowFailure:!0,contracts:u});return(0,t.useEffect)(()=>{if(!m)return;let[a,l,s,t,n,o,i]=null!=m?m:[];c({tokenAddress:null!=e?e:r.r_,name:null==a?void 0:a.result,symbol:null==l?void 0:l.result,decimals:null==s?void 0:s.result,balance:null==t?void 0:t.result,isApproved:!1,allowance:null==n?void 0:n.result,tokenPrice:null==o?void 0:o.result,maxSupply:null==i?void 0:i.result})},[m]),[d,p]}function d(e,a){let l=(0,n.x)(),{[l]:i}=s.staqeProtocolAddress,[d,c]=(0,t.useState)(),u=(0,t.useMemo)(()=>{if(e&&e!==r.r_&&a&&i)return[{address:e,abi:s.jPS,functionName:"name"},{address:e,abi:s.jPS,functionName:"symbol"},{address:e,abi:s.jPS,functionName:"balanceOf",args:[a]},{address:e,abi:s.jPS,functionName:"isApprovedForAll",args:[a,i]},{address:e,abi:s.jPS,functionName:"tokenPrice"},{address:e,abi:s.jPS,functionName:"maxSupply"}]},[e,a,i]),{data:m,refetch:p}=(0,o.N)({allowFailure:!0,contracts:u});return(0,t.useEffect)(()=>{if(!m)return;let[a,l,s,t,n,o]=m;c({tokenAddress:null!=e?e:r.r_,name:a.result,symbol:l.result,decimals:0n,balance:s.result,isApproved:t.result,allowance:0n,tokenPrice:n.result,maxSupply:o.result})},[m]),[d,p]}}}]);