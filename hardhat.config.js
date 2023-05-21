require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-etherscan');


const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.g.alchemy.com/v2/e-ZcruahPi4jBfAMYgXJrzL7nnr1GQVV";
const NEXT_PUBLIC_PRIVATE_KEY = "a27ecd982ed34bfd05a62799c9bd22316932b6c0174523fe138e0abe9a10cdc8";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    
    mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      chainID: 80001,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: '46XVWARADQ1TT1YUJCVJ4GPTFT5AMI8NUV'
    }
  },
  

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
