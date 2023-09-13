// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

library Counters {
	struct Counter {
		uint256 value;
	}

	function next(Counter storage counter) external returns (uint256) {
		counter.value += 1;
		return counter.value;
	}

	function current(Counter storage counter) external view returns (uint256) {
		return counter.value;
	}
}
