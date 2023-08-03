const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("NFTBazar", function () {
	let nftBazar, user1, user2;
	beforeEach(async () => {
		accounts = await ethers.getSigners();
		user1 = accounts[2];
		user2 = accounts[3];

		// deploy VRFCoordinatorV2Mock
		nftBazar = await ethers.deployContract("NFTBazar", []);
		await nftBazar.waitForDeployment();

		console.log("NFTBazar contract at  : ", nftBazar.target);
	});

	const toWei = (ether) => ethers.parseEther(ether);

	it("integrated test", async () => {
		// user1 creates nft
		const tx = await nftBazar.createToken("dhanshri", toWei("3"), {
			value: toWei("3"),
		});

		const txRec = await tx.wait();

		console.log(txRec);
	});
});
