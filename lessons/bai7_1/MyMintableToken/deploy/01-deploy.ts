import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployFunc: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    // Deploy contract
    const result = await deploy("MyMintableToken", {
        from: deployer,
        log: true,
    });

    // Lấy contract instance đúng kiểu
    const token = await ethers.getContractAt("MyMintableToken", result.address);

    // Mint 1000 token cho deployer
    const mintTx = await token.mint(deployer, ethers.utils.parseEther("1000"));
    await mintTx.wait();

    // In balance của deployer
    const balance = await token.balanceOf(deployer);
    console.log(`Deployer balance: ${ethers.utils.formatEther(balance)} MMT`);
};

export default deployFunc;
deployFunc.tags = ["deploy"];
