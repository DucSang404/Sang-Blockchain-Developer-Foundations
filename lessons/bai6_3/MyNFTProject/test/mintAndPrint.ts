import { ethers, deployments, getNamedAccounts } from "hardhat";

async function main() {
    const { deployer } = await getNamedAccounts();

    // Lấy thông tin deployment của MyNFT từ hardhat-deploy
    const deployment = await deployments.get("MyNFT");

    // Kết nối đến contract đã deploy qua địa chỉ
    const myNFT = await ethers.getContractAt("MyNFT", deployment.address);

    console.log("Minting NFT...");
    const tx = await myNFT.mint(deployer);
    await tx.wait();

    const owner = await myNFT.ownerOf(0);
    console.log("Owner of tokenId 0:", owner);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
