// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyMintableToken is ERC20, Ownable {
    constructor() ERC20("MyMintableToken", "MMT") Ownable(msg.sender) {
        // Gọi constructor ERC20 và truyền owner là msg.sender cho Ownable
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
