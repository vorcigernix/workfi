// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');
const fs = require('fs');

async function main() {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy
	const Greeter = await hre.ethers.getContractFactory('Greeter');
	const greeter = await Greeter.deploy('Hello, Hardhat!');

	await greeter.deployed();

	console.log('Greeter deployed to:', greeter.address);
	fs.writeFileSync(
		'./config.js',
		`
  export const contractAddress = "${greeter.address}"
  export const ownerAddress = "${greeter.signer.address}"
  `
	);

	const WorkFi = await hre.ethers.getContractFactory('IWorkFi');
	const workfi = await WorkFi.deploy();

	await workfi.deployed();

	console.log('Workfi deployed to:', workfi.address);
	fs.writeFileSync(
		'./config.js',
		`
export const workficontractAddress = "${workfi.address}"
export const workfiownerAddress = "${workfi.signer.address}"
`
	);

	const Dummy = await hre.ethers.getContractFactory('DummyWorkFi');
	const dummy = await Dummy.deploy();

	await dummy.deployed();

	console.log('Workfi deployed to:', dummy.address);
	fs.writeFileSync(
		'./config.js',
		`
export const dummycontractAddress = "${dummy.address}"
export const dummyownerAddress = "${dummy.signer.address}"
`
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
