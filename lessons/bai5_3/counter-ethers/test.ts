import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  const contractAddress = "0x0D2688b2546d380a7F8090E48b93f005fD1d5e85";
  const abi = [
    "function getCount() public view returns (uint)",
    "function increment() public"
  ];

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const count = await contract.getCount();
  console.log("Current count:", count.toString());
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
