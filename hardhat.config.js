require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();
const projectId = "_N2T74yygUy1yEG7v2B_mbU2ML1bKWW9";

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      account: process.env.pkey,
      //accounts: [privateKey],
    },
  },
  solidity: "0.8.17",
};
