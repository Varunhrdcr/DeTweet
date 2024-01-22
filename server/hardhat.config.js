require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

task("accounts","Print the list of accounts ",async(taskArgs,hre) => {
  const accounts = await hre.ehters.getSigners();
  for(const account of accounts){
    console.log(account.address);
  }
});
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks:{
    sepolia:{
      url:process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};
