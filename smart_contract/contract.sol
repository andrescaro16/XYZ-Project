// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DecoToken {
    string public name = "Deco Token";
    string public symbol = "DECO";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    address public owner; // Declare the owner variable

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Burn(address indexed burner, uint256 value);

    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * (10 ** uint256(decimals));
        balanceOf[msg.sender] = totalSupply;

        owner = msg.sender; // Set the contract deployer as the owner
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this");
        _;
    }

    // Function to mint new tokens (only the contract owner can call this)
    function mint(uint256 amount) public onlyOwner {
        require(amount > 0, "Amount should be greater than 0");
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
    }

    // Function to burn tokens (user can burn their own tokens)
    function burn(uint256 amount) public {
        require(amount > 0, "Amount should be greater than 0");
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        emit Burn(msg.sender, amount);
    }

    // Function to allow others to spend tokens on behalf of the caller
    function approve(address spender, uint256 amount) public returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    // Function to transfer tokens from one address to another
    function transfer(address to, uint256 value) public returns (bool) {
        require(to != address(0), "Invalid address");
        require(value > 0, "Amount should be greater than 0");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    // Function to transfer tokens from one address to another on behalf of the owner
    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public returns (bool) {
        require(to != address(0), "Invalid address");
        require(value > 0, "Amount should be greater than 0");
        require(balanceOf[from] >= value, "Insufficient balance");
        require(allowance[from][msg.sender] >= value, "Allowance exceeded");

        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;
        emit Transfer(from, to, value);
        return true;
    }
}