"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{39339:function(e,t,a){a.d(t,{offchainLookup:function(){return g},offchainLookupSignature:function(){return b}});var r=a(28519),s=a(44397),n=a(99471),o=a(54663);class c extends n.G{constructor({callbackSelector:e,cause:t,data:a,extraData:r,sender:s,urls:n}){super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],t.metaMessages?.length?"":[],"Offchain Gateway Call:",n&&["  Gateway URL(s):",...n.map(e=>`    ${(0,o.Gr)(e)}`)],`  Sender: ${s}`,`  Data: ${a}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class i extends n.G{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,o.Gr)(t)}`,`Response: ${(0,s.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class u extends n.G{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var f=a(12179),d=a(38839),l=a(39556),p=a(62672),h=a(93437),w=a(42557),y=a(66080);let b="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function g(e,{blockNumber:t,blockTag:a,data:s,to:n}){let{args:o}=(0,d.p)({data:s,abi:[m]}),[i,f,y,b,g]=o,{ccipRead:O}=e,G=O&&"function"==typeof O?.request?O.request:k;try{if(!function(e,t){if(!(0,h.U)(e,{strict:!1}))throw new p.b({address:e});if(!(0,h.U)(t,{strict:!1}))throw new p.b({address:t});return e.toLowerCase()===t.toLowerCase()}(n,i))throw new u({sender:i,to:n});let s=await G({data:y,sender:i,urls:f}),{data:o}=await (0,r.R)(e,{blockNumber:t,blockTag:a,data:(0,w.zo)([b,(0,l.E)([{type:"bytes"},{type:"bytes"}],[s,g])]),to:n});return o}catch(e){throw new c({callbackSelector:b,cause:e,data:s,extraData:g,sender:i,urls:f})}}async function k({data:e,sender:t,urls:a}){let r=Error("An unknown error occurred.");for(let n=0;n<a.length;n++){let o=a[n],c=o.includes("{data}")?"GET":"POST",u="POST"===c?{data:e,sender:t}:void 0;try{let a;let n=await fetch(o.replace("{sender}",t).replace("{data}",e),{body:JSON.stringify(u),method:c});if(a=n.headers.get("Content-Type")?.startsWith("application/json")?(await n.json()).data:await n.text(),!n.ok){r=new f.Gg({body:u,details:a?.error?(0,s.P)(a.error):n.statusText,headers:n.headers,status:n.status,url:o});continue}if(!(0,y.v)(a)){r=new i({result:a,url:o});continue}return a}catch(e){r=new f.Gg({body:u,details:e.message,url:o})}}throw r}}}]);