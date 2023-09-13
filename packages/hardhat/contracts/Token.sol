//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./interfaces/ERC20.sol";

contract Token is ERC20 {
	mapping(address => uint256) private balances;

	mapping(address => mapping(address => uint256)) private allowances;

	uint256 private _totalSupply;

	string public name;
	string public symbol;

	constructor(string memory _name, string memory _symbol) {
		name = _name;
		symbol = _symbol;
	}

	function balanceOf(
		address _owner
	) public view override returns (uint256 balance) {
		return balances[_owner];
	}

	function totalSupply() public view override returns (uint256) {
		return _totalSupply;
	}

	function transfer(
		address _to,
		uint256 _value
	) public override returns (bool success) {
		if (balances[msg.sender] >= _value && _value > 0) {
			balances[msg.sender] -= _value;
			balances[_to] += _value;
			emit Transfer(msg.sender, _to, _value);
			return true;
		} else {
			return false;
		}
	}

	function transferFrom(
		address _from,
		address _to,
		uint256 _value
	) public override returns (bool success) {
		if (
			balances[_from] >= _value &&
			allowances[_from][msg.sender] >= _value &&
			_value > 0
		) {
			balances[_to] += _value;
			balances[_from] -= _value;
			allowances[_from][msg.sender] -= _value;
			emit Transfer(_from, _to, _value);
			return true;
		} else {
			return false;
		}
	}

	function approve(
		address _spender,
		uint256 _value
	) public override returns (bool success) {
		allowances[msg.sender][_spender] = _value;
		emit Approval(msg.sender, _spender, _value);
		return true;
	}

	function allowance(
		address _owner,
		address _spender
	) public view override returns (uint256 remaining) {
		return allowances[_owner][_spender];
	}

	function mint(address _to, uint256 _value) public {
		balances[_to] += _value;
		_totalSupply += _value;
		emit Transfer(address(0), _to, _value);
	}

	function burn(address _from, uint256 _value) public {
		balances[_from] -= _value;
		_totalSupply -= _value;
		emit Transfer(_from, address(0), _value);
	}

	function decimals() public pure returns (uint8) {
		return 1;
	}
}
