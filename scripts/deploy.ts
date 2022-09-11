const hre = require("hardhat");

async function main() {
  // We get the contract to deploy.
  const CarDealer = await hre.ethers.getContractFactory("CarDealer");
  const carDealer = await CarDealer.deploy();

  await carDealer.deployed();

  console.log("CarDealer deployed to:", carDealer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
