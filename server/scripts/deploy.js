const main = async () => {
  const contractFactory = await ethers.getContractFactory('DeTweetContract');

  // Deploy the contract once:
  const contract = await contractFactory.deploy();

  // Log the deployed contract's address:
  console.log("Contract deployed to: ", contract.address);
};


const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();