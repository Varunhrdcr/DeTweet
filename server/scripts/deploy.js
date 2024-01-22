const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("DeTweetContract");
  const contract = await chai.deploy(); //instance of contract

  await contract.deployed();
  console.log("Contract Deployed at : ", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});