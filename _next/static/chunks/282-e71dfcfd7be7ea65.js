"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{55831:function(e,n,t){t.d(n,{Hz:function(){return i},U8:function(){return p},j6:function(){return r},r_:function(){return a}});let a="0x0000000000000000000000000000000000000000",i="/images/token.svg",r="https://ipfs.io/ipfs/",p=BigInt(2)**BigInt(256)-BigInt(1)},63366:function(e,n,t){t.d(n,{HrC:function(){return p},J2S:function(){return d},KeN:function(){return b},WoU:function(){return r},Xws:function(){return l},ZCR:function(){return T},fgE:function(){return m},kV_:function(){return s},nYY:function(){return k},q0D:function(){return f},qpw:function(){return I},staqeProtocolAddress:function(){return y},tif:function(){return o},toqenAddress:function(){return u},uvu:function(){return c}});var a=t(25203),i=t(85665);t(30686),t(79561);let r=[{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"spender",internalType:"address",type:"address"}],name:"allowance",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"spender",internalType:"address",type:"address"},{name:"value",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[{name:"account",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"decimals",outputs:[{name:"",internalType:"uint8",type:"uint8"}]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"totalSupply",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"to",internalType:"address",type:"address"},{name:"value",internalType:"uint256",type:"uint256"}],name:"transfer",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"value",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[{name:"",internalType:"bool",type:"bool"}]},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"spender",internalType:"address",type:"address",indexed:!0},{name:"value",internalType:"uint256",type:"uint256",indexed:!1}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"value",internalType:"uint256",type:"uint256",indexed:!1}],name:"Transfer"},{type:"error",inputs:[{name:"spender",internalType:"address",type:"address"},{name:"allowance",internalType:"uint256",type:"uint256"},{name:"needed",internalType:"uint256",type:"uint256"}],name:"ERC20InsufficientAllowance"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"},{name:"balance",internalType:"uint256",type:"uint256"},{name:"needed",internalType:"uint256",type:"uint256"}],name:"ERC20InsufficientBalance"},{type:"error",inputs:[{name:"approver",internalType:"address",type:"address"}],name:"ERC20InvalidApprover"},{type:"error",inputs:[{name:"receiver",internalType:"address",type:"address"}],name:"ERC20InvalidReceiver"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"}],name:"ERC20InvalidSender"},{type:"error",inputs:[{name:"spender",internalType:"address",type:"address"}],name:"ERC20InvalidSpender"}],p=[{stateMutability:"nonpayable",type:"function",inputs:[{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"getApproved",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"operator",internalType:"address",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ownerOf",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"data",internalType:"bytes",type:"bytes"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"approved",internalType:"bool",type:"bool"}],name:"setApprovalForAll",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"interfaceId",internalType:"bytes4",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"tokenURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[]},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"operator",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"bool",type:"bool",indexed:!1}],name:"ApprovalForAll"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Transfer"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"owner",internalType:"address",type:"address"}],name:"ERC721IncorrectOwner"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ERC721InsufficientApproval"},{type:"error",inputs:[{name:"approver",internalType:"address",type:"address"}],name:"ERC721InvalidApprover"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"}],name:"ERC721InvalidOperator"},{type:"error",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"ERC721InvalidOwner"},{type:"error",inputs:[{name:"receiver",internalType:"address",type:"address"}],name:"ERC721InvalidReceiver"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"}],name:"ERC721InvalidSender"},{type:"error",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ERC721NonexistentToken"}],s=[{stateMutability:"nonpayable",type:"constructor",inputs:[{name:"stakeERC20",internalType:"contract IERC20",type:"address"},{name:"stakeERC721",internalType:"contract IERC721",type:"address"},{name:"rewardToken",internalType:"contract IERC20",type:"address"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"rewardAmount",internalType:"uint256",type:"uint256"},{name:"claimAfterBlocks",internalType:"uint256",type:"uint256"},{name:"isForERC721Stakers",internalType:"bool",type:"bool"}],name:"addReward",outputs:[{name:"rewardId",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"rewardAmount",internalType:"uint256",type:"uint256"},{name:"claimAfterBlocks",internalType:"uint256",type:"uint256"},{name:"isForERC721Stakers",internalType:"bool",type:"bool"},{name:"deadline",internalType:"uint256",type:"uint256"},{name:"v",internalType:"uint8",type:"uint8"},{name:"r",internalType:"bytes32",type:"bytes32"},{name:"s",internalType:"bytes32",type:"bytes32"},{name:"max",internalType:"bool",type:"bool"}],name:"addRewardWithPermit",outputs:[{name:"rewardId",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"approve",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"balanceOf",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardId",internalType:"uint256",type:"uint256"}],name:"calculateReward",outputs:[{name:"",internalType:"contract IERC20",type:"address"},{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolIds",internalType:"uint256[]",type:"uint256[]"},{name:"rewardIds",internalType:"uint256[][]",type:"uint256[][]"},{name:"recipient",internalType:"address",type:"address"}],name:"claimRewards",outputs:[{name:"tokens",internalType:"contract IERC20[][]",type:"address[][]"},{name:"amounts",internalType:"uint256[][]",type:"uint256[][]"}]},{stateMutability:"view",type:"function",inputs:[],name:"contractURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"totalMax",internalType:"uint256",type:"uint256"},{name:"tokenURI",internalType:"string",type:"string"}],name:"editPool",outputs:[]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"getApproved",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardId",internalType:"uint256",type:"uint256"}],name:"getClaimedAmount",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"}],name:"getPool",outputs:[{name:"poolDetails",internalType:"struct IStaqeStructs.Pool",type:"tuple",components:[{name:"stakeERC20",internalType:"contract IERC20",type:"address"},{name:"stakeERC721",internalType:"contract IERC721",type:"address"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"totalMax",internalType:"uint256",type:"uint256"},{name:"totalStakedERC20",internalType:"uint256",type:"uint256"},{name:"totalStakedERC721",internalType:"uint256",type:"uint256"},{name:"launchBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"}],name:"getPool",outputs:[{name:"poolDetails",internalType:"struct StaqeDetails.PoolDetails",type:"tuple",components:[{name:"stakeERC20",internalType:"struct StaqeDetails.Token",type:"tuple",components:[{name:"tokenAddress",internalType:"address",type:"address"},{name:"name",internalType:"string",type:"string"},{name:"symbol",internalType:"string",type:"string"},{name:"decimals",internalType:"uint256",type:"uint256"},{name:"balance",internalType:"uint256",type:"uint256"}]},{name:"stakeERC721",internalType:"struct StaqeDetails.Token",type:"tuple",components:[{name:"tokenAddress",internalType:"address",type:"address"},{name:"name",internalType:"string",type:"string"},{name:"symbol",internalType:"string",type:"string"},{name:"decimals",internalType:"uint256",type:"uint256"},{name:"balance",internalType:"uint256",type:"uint256"}]},{name:"rewardToken",internalType:"struct StaqeDetails.Token",type:"tuple",components:[{name:"tokenAddress",internalType:"address",type:"address"},{name:"name",internalType:"string",type:"string"},{name:"symbol",internalType:"string",type:"string"},{name:"decimals",internalType:"uint256",type:"uint256"},{name:"balance",internalType:"uint256",type:"uint256"}]},{name:"owner",internalType:"address",type:"address"},{name:"tokenURI",internalType:"string",type:"string"},{name:"totalRewards",internalType:"uint256",type:"uint256"},{name:"totalStakerStakes",internalType:"uint256",type:"uint256"},{name:"totalMax",internalType:"uint256",type:"uint256"},{name:"totalStakedERC20",internalType:"uint256",type:"uint256"},{name:"totalStakedERC721",internalType:"uint256",type:"uint256"},{name:"launchBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardId",internalType:"uint256",type:"uint256"}],name:"getReward",outputs:[{name:"rewardDetails",internalType:"struct StaqeDetails.RewardDetails",type:"tuple",components:[{name:"rewardToken",internalType:"struct StaqeDetails.Token",type:"tuple",components:[{name:"tokenAddress",internalType:"address",type:"address"},{name:"name",internalType:"string",type:"string"},{name:"symbol",internalType:"string",type:"string"},{name:"decimals",internalType:"uint256",type:"uint256"},{name:"balance",internalType:"uint256",type:"uint256"}]},{name:"stakerRewardAmount",internalType:"uint256",type:"uint256"},{name:"isClaimed",internalType:"bool",type:"bool"},{name:"isForERC721Stakers",internalType:"bool",type:"bool"},{name:"rewardAmount",internalType:"uint256",type:"uint256"},{name:"totalStaked",internalType:"uint256",type:"uint256"},{name:"claimAfterBlocks",internalType:"uint256",type:"uint256"},{name:"rewardBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"rewardId",internalType:"uint256",type:"uint256"}],name:"getReward",outputs:[{name:"rewardDetails",internalType:"struct IStaqeStructs.Reward",type:"tuple",components:[{name:"isForERC721Stakers",internalType:"bool",type:"bool"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"rewardAmount",internalType:"uint256",type:"uint256"},{name:"totalStaked",internalType:"uint256",type:"uint256"},{name:"claimAfterBlocks",internalType:"uint256",type:"uint256"},{name:"rewardBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"}],name:"getRewards",outputs:[{name:"",internalType:"struct IStaqeStructs.Reward[]",type:"tuple[]",components:[{name:"isForERC721Stakers",internalType:"bool",type:"bool"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"rewardAmount",internalType:"uint256",type:"uint256"},{name:"totalStaked",internalType:"uint256",type:"uint256"},{name:"claimAfterBlocks",internalType:"uint256",type:"uint256"},{name:"rewardBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"},{name:"stakeId",internalType:"uint256",type:"uint256"}],name:"getStake",outputs:[{name:"stakeDetails",internalType:"struct IStaqeStructs.Stake",type:"tuple",components:[{name:"amountERC20",internalType:"uint256",type:"uint256"},{name:"idERC721",internalType:"uint256",type:"uint256"},{name:"stakeBlock",internalType:"uint256",type:"uint256"},{name:"unstakeBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"staker",internalType:"address",type:"address"},{name:"poolId",internalType:"uint256",type:"uint256"}],name:"getStakes",outputs:[{name:"",internalType:"struct IStaqeStructs.Stake[]",type:"tuple[]",components:[{name:"amountERC20",internalType:"uint256",type:"uint256"},{name:"idERC721",internalType:"uint256",type:"uint256"},{name:"stakeBlock",internalType:"uint256",type:"uint256"},{name:"unstakeBlock",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[],name:"getTotalPools",outputs:[{name:"",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"owner",internalType:"address",type:"address"},{name:"operator",internalType:"address",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"stakeERC20",internalType:"contract IERC20",type:"address"},{name:"stakeERC721",internalType:"contract IERC721",type:"address"},{name:"rewardToken",internalType:"contract IERC20",type:"address"},{name:"totalMax",internalType:"uint256",type:"uint256"},{name:"tokenURI",internalType:"string",type:"string"}],name:"launchPool",outputs:[{name:"poolId",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[],name:"name",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[],name:"owner",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ownerOf",outputs:[{name:"",internalType:"address",type:"address"}]},{stateMutability:"nonpayable",type:"function",inputs:[],name:"renounceOwnership",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"data",internalType:"bytes",type:"bytes"}],name:"safeTransferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"approved",internalType:"bool",type:"bool"}],name:"setApprovalForAll",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"newURI",internalType:"string",type:"string"}],name:"setContractURI",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"amount",internalType:"uint256",type:"uint256"},{name:"id",internalType:"uint256",type:"uint256"}],name:"stake",outputs:[{name:"stakeId",internalType:"uint256",type:"uint256"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"amount",internalType:"uint256",type:"uint256"},{name:"deadline",internalType:"uint256",type:"uint256"},{name:"v",internalType:"uint8",type:"uint8"},{name:"r",internalType:"bytes32",type:"bytes32"},{name:"s",internalType:"bytes32",type:"bytes32"},{name:"max",internalType:"bool",type:"bool"}],name:"stakeWithPermit",outputs:[{name:"stakeId",internalType:"uint256",type:"uint256"}]},{stateMutability:"view",type:"function",inputs:[{name:"interfaceId",internalType:"bytes4",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",internalType:"bool",type:"bool"}]},{stateMutability:"view",type:"function",inputs:[],name:"symbol",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"view",type:"function",inputs:[{name:"user",internalType:"address",type:"address"},{name:"ierc20",internalType:"contract IERC20",type:"address"},{name:"ierc721",internalType:"contract IERC721",type:"address"}],name:"tokenInfo",outputs:[{name:"token",internalType:"struct StaqeDetails.Token",type:"tuple",components:[{name:"tokenAddress",internalType:"address",type:"address"},{name:"name",internalType:"string",type:"string"},{name:"symbol",internalType:"string",type:"string"},{name:"decimals",internalType:"uint256",type:"uint256"},{name:"balance",internalType:"uint256",type:"uint256"}]}]},{stateMutability:"view",type:"function",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"tokenURI",outputs:[{name:"",internalType:"string",type:"string"}]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"from",internalType:"address",type:"address"},{name:"to",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"transferFrom",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"newOwner",internalType:"address",type:"address"}],name:"transferOwnership",outputs:[]},{stateMutability:"nonpayable",type:"function",inputs:[{name:"poolId",internalType:"uint256",type:"uint256"},{name:"stakeIds",internalType:"uint256[]",type:"uint256[]"}],name:"unstake",outputs:[{name:"amountERC20",internalType:"uint256",type:"uint256"},{name:"idsERC721",internalType:"uint256[]",type:"uint256[]"}]},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Approval"},{type:"event",anonymous:!1,inputs:[{name:"owner",internalType:"address",type:"address",indexed:!0},{name:"operator",internalType:"address",type:"address",indexed:!0},{name:"approved",internalType:"bool",type:"bool",indexed:!1}],name:"ApprovalForAll"},{type:"event",anonymous:!1,inputs:[{name:"_fromTokenId",internalType:"uint256",type:"uint256",indexed:!1},{name:"_toTokenId",internalType:"uint256",type:"uint256",indexed:!1}],name:"BatchMetadataUpdate"},{type:"event",anonymous:!1,inputs:[{name:"staker",internalType:"address",type:"address",indexed:!0},{name:"poolId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Claimed"},{type:"event",anonymous:!1,inputs:[],name:"ContractURIUpdated"},{type:"event",anonymous:!1,inputs:[{name:"launcher",internalType:"address",type:"address",indexed:!0},{name:"poolId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Launched"},{type:"event",anonymous:!1,inputs:[{name:"_tokenId",internalType:"uint256",type:"uint256",indexed:!1}],name:"MetadataUpdate"},{type:"event",anonymous:!1,inputs:[{name:"previousOwner",internalType:"address",type:"address",indexed:!0},{name:"newOwner",internalType:"address",type:"address",indexed:!0}],name:"OwnershipTransferred"},{type:"event",anonymous:!1,inputs:[{name:"rewarder",internalType:"address",type:"address",indexed:!0},{name:"poolId",internalType:"uint256",type:"uint256",indexed:!0},{name:"rewardId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Rewarded"},{type:"event",anonymous:!1,inputs:[{name:"staker",internalType:"address",type:"address",indexed:!0},{name:"poolId",internalType:"uint256",type:"uint256",indexed:!0},{name:"stakeId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Staked"},{type:"event",anonymous:!1,inputs:[{name:"from",internalType:"address",type:"address",indexed:!0},{name:"to",internalType:"address",type:"address",indexed:!0},{name:"tokenId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Transfer"},{type:"event",anonymous:!1,inputs:[{name:"staker",internalType:"address",type:"address",indexed:!0},{name:"poolId",internalType:"uint256",type:"uint256",indexed:!0}],name:"Unstaked"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"},{name:"owner",internalType:"address",type:"address"}],name:"ERC721IncorrectOwner"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"},{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ERC721InsufficientApproval"},{type:"error",inputs:[{name:"approver",internalType:"address",type:"address"}],name:"ERC721InvalidApprover"},{type:"error",inputs:[{name:"operator",internalType:"address",type:"address"}],name:"ERC721InvalidOperator"},{type:"error",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"ERC721InvalidOwner"},{type:"error",inputs:[{name:"receiver",internalType:"address",type:"address"}],name:"ERC721InvalidReceiver"},{type:"error",inputs:[{name:"sender",internalType:"address",type:"address"}],name:"ERC721InvalidSender"},{type:"error",inputs:[{name:"tokenId",internalType:"uint256",type:"uint256"}],name:"ERC721NonexistentToken"},{type:"error",inputs:[],name:"InvalidAmountOrId"},{type:"error",inputs:[],name:"InvalidERC721Token"},{type:"error",inputs:[],name:"InvalidRewardToken"},{type:"error",inputs:[],name:"InvalidStakeId"},{type:"error",inputs:[],name:"InvalidStakeToken"},{type:"error",inputs:[],name:"InvalidTokenURI"},{type:"error",inputs:[],name:"MoreThanTheTotalMaxTokens"},{type:"error",inputs:[],name:"OnlyAvailableToStakersInGenesis"},{type:"error",inputs:[],name:"OnlyOwnerHasAccessToAddRewards"},{type:"error",inputs:[],name:"OnlyOwnerHasAccessToEditTokenURI"},{type:"error",inputs:[{name:"owner",internalType:"address",type:"address"}],name:"OwnableInvalidOwner"},{type:"error",inputs:[{name:"account",internalType:"address",type:"address"}],name:"OwnableUnauthorizedAccount"},{type:"error",inputs:[],name:"PoolDoesNotExist"},{type:"error",inputs:[],name:"PoolDoesNotHaveStakes"},{type:"error",inputs:[],name:"ReentrancyGuardReentrantCall"},{type:"error",inputs:[],name:"RewardAlreadyClaimed"},{type:"error",inputs:[],name:"RewardIsEmpty"},{type:"error",inputs:[],name:"RewardIsNotYetAvailableForClaim"},{type:"error",inputs:[],name:"RewardNotFoundInPool"},{type:"error",inputs:[],name:"RewardTransferFailed"},{type:"error",inputs:[],name:"StakeAlreadyUnstaked"},{type:"error",inputs:[],name:"StakeOnNextBlockAfterReward"},{type:"error",inputs:[],name:"StakeTransferFailed"},{type:"error",inputs:[],name:"StakerDoesNotHaveStakesInPool"},{type:"error",inputs:[],name:"TotalMaxForOnlyOneTypeOfToken"},{type:"error",inputs:[],name:"UnstakeOnNextBlockAndGetReward"},{type:"error",inputs:[],name:"UnstakeTransferFailed"}],y={1337:"0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",534351:"0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",1029:"0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f",97:"0x9cbD0A9D9fb8e8c1baA4687E4e8068aDA57a220f"},u={1337:"0x5FbDB2315678afecb367f032d93F642f64180aa3",534351:"0x3AE2475877243dD4331c51BABa39832450526597",1029:"0x3AE2475877243dD4331c51BABa39832450526597",97:"0x3AE2475877243dD4331c51BABa39832450526597"},d=(0,i.x)({abi:r,functionName:"approve"}),o=(0,i.x)({abi:p,functionName:"setApprovalForAll"}),l=(0,a.c)({abi:s,address:y,functionName:"getPool"}),m=(0,a.c)({abi:s,address:y,functionName:"getStakes"}),T=(0,a.c)({abi:s,address:y,functionName:"getTotalPools"}),c=(0,i.x)({abi:s,address:y,functionName:"addReward"}),b=(0,i.x)({abi:s,address:y,functionName:"claimRewards"}),f=(0,i.x)({abi:s,address:y,functionName:"launchPool"}),k=(0,i.x)({abi:s,address:y,functionName:"stake"}),I=(0,i.x)({abi:s,address:y,functionName:"unstake"})}}]);