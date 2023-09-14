import { expect } from "chai";
import { ethers } from "hardhat";
import { Nefti } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Nefti", function () {
  // We define a fixture to reuse the same setup in every test.

  let nefti: Nefti;
  let signers: SignerWithAddress[];
  before(async () => {
    signers = await ethers.getSigners();
    const neftiFactory = await ethers.getContractFactory("Nefti");
    nefti = (await neftiFactory.deploy()) as Nefti;
    await nefti.deployed();
  });

  describe("Deployment", function () {
    it("Should have zero balance on deploy", async function () {
      expect(await nefti.balanceOf(signers[0].address, 1)).to.equal(0);
    });
  });

  describe("Minting", function () {
    it("Should mint 1000 token to the deployer", async function () {
      await nefti.mint(signers[0].address, "url", 1000);
      expect(await nefti.balanceOf(signers[0].address, 1)).to.equal(1000);
    });
  });
});
