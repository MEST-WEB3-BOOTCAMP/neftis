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
      await nefti.mint("url", 1000);
      expect(await nefti.balanceOf(signers[0].address, 1)).to.equal(1000);
    });
  });

  describe("Transfer", function () {
    it("Should transfer 100 token to the second account", async function () {
      await nefti.safeTransferFrom(signers[0].address, signers[1].address, 1, 100, "0x00");
      expect(await nefti.balanceOf(signers[1].address, 1)).to.equal(100);
    });

    it("Should fail to transfer 1000 token to the second account", async function () {
      await expect(nefti.safeTransferFrom(signers[0].address, signers[1].address, 1, 1000, "0x00")).to.be.revertedWith(
        "ERC1155: insufficient balance for transfer",
      );
    });

    it("Should fail to transfer 100 token to the second account if not owner or operator", async function () {
      await expect(nefti.safeTransferFrom(signers[1].address, signers[2].address, 1, 100, "0x00")).to.be.revertedWith(
        "ERC1155: caller is not owner or approved operator",
      );
    });
  });
});
