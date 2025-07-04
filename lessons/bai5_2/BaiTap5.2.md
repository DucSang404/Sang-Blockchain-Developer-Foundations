
# Bài Tập 5.2 – Gửi Transaction dùng Ethers.js và Hardhat

## 🎯 Mục tiêu

- Deploy một smart contract đơn giản bằng Hardhat.
- Gọi hàm `increment()` từ contract bằng Ethers.js.
- In kết quả của `getCount()` ra console.

## ✅ Yêu cầu

Sử dụng template: https://github.com/appscyclone/ac-hardhat-template

## Các bước thực hiện

### 1. Cài đặt môi trường

- **Clone repo**:
  ```bash
  git clone https://github.com/appscyclone/ac-hardhat-template.git
  ```

- **Cài đặt dependencies**:
  ```bash
  yarn install
  ```

  ![Cài dependencies](images/yarn.png)

- **Tạo file `.env` với nội dung**:
  ```env
  REPORT_GAS=
  TESTNET_PRIVATE_KEY=<private_key_metamask>
  ETHERSCAN_API=
  ```

  ![Tạo file .env](images/env.png)

---

### 2. Biên dịch Contract

```bash
npx hardhat compile
```

![Biên dịch contract](images/compile.png)

---

### 3. Viết và chạy Unit Test

- Kiểm tra khởi tạo và hàm `increment()` trong `test/Counter.test.ts`:
```bash
npx hardhat test
```

![Chạy unit test](images/test.png)

---

### 4. Deploy lên mạng Sepolia

```bash
npx hardhat deploy --network sepolia --tags deploy
```

- Script `deploy/1-deploy.ts` sẽ triển khai contract `Counter`.

![Triển khai contract](images/address.png)

- Kiểm tra trên `Etherscan`.
![Kiểm tra trên Etherscan](images/check_deploy.png)

---

### 5. Gọi hàm từ contract

```bash
npx hardhat run scripts/test.ts --network sepolia
```

- Script `scripts/test.ts` gọi `increment()` và `getCount()`, kết quả in ra console là `1`.

![Gọi hàm increment()](images/call_func.png)

- Kiểm tra trên `Etherscan`.
![Kiểm tra trên Etherscan](images/check_func.png)

---

## 📌 Kết luận

- ✅ Đã deploy thành công contract `Counter` lên Sepolia.
- ✅ Gọi hàm `increment()` và `getCount()` thành công.
- ✅ Console hiển thị: `Current count is: 1`
