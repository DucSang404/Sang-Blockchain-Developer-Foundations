import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import "hardhat-deploy";

const deployMyNFT: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("MyNFT", {
        from: deployer,
        args: [],
        log: true,
    });
};

export default deployMyNFT;
deployMyNFT.tags = ["deploy"];
