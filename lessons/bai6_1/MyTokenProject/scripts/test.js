async function main() {
  const [deployer] = await ethers.getSigners();

  const tokenAddress = "0x6eE529Aa68A0f59748F94F71878f62F36793D1e2"; // địa chỉ sau khi deploy
  const MyToken = await ethers.getContractAt("MyToken", tokenAddress);

  const balance = await MyToken.balanceOf(deployer.address);
  console.log("Deployer balance:", ethers.utils.formatUnits(balance, 18), "MTK");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
