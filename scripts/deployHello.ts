import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Hello");
  const contract = await Contract.deploy();

  await contract.deployed();
  console.log(`contract deployed, address = ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
