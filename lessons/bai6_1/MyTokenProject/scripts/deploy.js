async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying with address:", deployer.address);

    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy();

    await token.deployed();

    console.log("MyToken deployed to:", token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
