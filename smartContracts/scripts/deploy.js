const hre = require("hardhat");
const fs = require("fs");

async function main() {
	let nftBazar;

	// deploy nftBazar
	nftBazar = await hre.ethers.deployContract("NFTBazar", []);
	await nftBazar.waitForDeployment();

	// interface and deployed contract address
	const nftBazarAbi = nftBazar.interface.format("json");
	const nftBazarAddr = nftBazar.target;

	// create contracts object

	const contracts = {
		NFTBazar: [nftBazarAbi, nftBazarAddr],
	};

	// export contracts object to constants folder in src
	fs.writeFileSync(
		"../frontend/src/constants/contracts.json",
		JSON.stringify(contracts, null, 2)
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
