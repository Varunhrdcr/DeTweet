const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("DeTweetContract");
  const contract = await chai.deploy(); //instance of contract
  
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
