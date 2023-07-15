import { ethers } from "hardhat";

describe("Escrow", function () {
  let collectible, escrow;
  let buyer, seller, inspector, lender;

  it("Save the addresses", async () => {
    [buyer, seller, inspector, lender] = await ethers.getSigners();

    const Collectible = await ethers.getContractFactory("Collectible");
    collectible = await Collectible.deploy();

    let transaction = await collectible.connect(seller).mint("https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS");

    console.log("Addres: ", await collectible.getAddress());
  });
});
