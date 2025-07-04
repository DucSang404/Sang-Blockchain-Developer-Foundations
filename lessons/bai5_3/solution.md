# Báo Cáo Dự Án: Gọi Contract Ethereum với Ethers.js
## 1. Chuẩn bị
Xem lại contract đã deploy ở 5.2 

![Chuẩn bị smart contract](images/address.png)

## 2. Tạo file script để kết nối tới contract 

```ts
import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  const abi = [
    "function getCount() public view returns (uint)",
    "function increment() public"
  ];
  const contractAddress = "0xCF960816734Ec0D472e2dFf77e89569559998b08";

  const contract = new ethers.Contract(contractAddress, abi, provider);

  const count = await contract.getCount();
  console.log("Current count is:", count.toString());
}

main().catch(console.error);

```

## 3. Chạy Script
Chạy script bằng lệnh sau:

```bash
npx ts-node test.ts
```

![Chạy Script](images/check.png)

```
Số đếm được hiển thị hiện tại là 1
```



