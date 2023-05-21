///0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x5FbDB2315678afecb367f032d93F642f64180aa3
//0x9Bc1E912Ce8673cb5837479DFCad600b48EcB486      old market
//0x0263d12789dADB114b0fa4E4deE82b9f7eaDA9e2      new market
//0x0380cf63fe53f4AEaa0F1a50807CF078212972c3

import nftMarketplace from "./NFTMarketplace.json";
import transferFunds from "./TransferFunds.json";

//NFT MARKETPLACE
export const NFTMarketplaceAddress =
  "0xFDa9eD899C052b7ca5A33e7B9c65357abC5Bf81E";
export const NFTMarketplaceABI = nftMarketplace.abi;

//TRANSFER FUNDS
export const transferFundsAddress =
  "0x0380cf63fe53f4AEaa0F1a50807CF078212972c3";
export const transferFundsABI = transferFunds.abi;
