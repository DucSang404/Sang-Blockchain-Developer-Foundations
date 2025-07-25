// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    struct Student {
        string name;
        uint8 age;
        bool isRegistered;
    }

    address public immutable owner;
    mapping (address => Student) private students;

    event StudentRegistered(address indexed user, string _name, uint age);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function register(address user, string calldata name, uint8 age) external onlyOwner {
        students[user] = Student(name, age, true);
        emit StudentRegistered(user, name, age);
    }

    function getStudent(address user) external view returns (string memory, uint8, bool) {
        Student storage s = students[user];
        return (s.name, s.age, s.isRegistered);
    }

    function isStudentRegister(address user) external view returns (bool) {
        return students[user].isRegistered;
    }
}

