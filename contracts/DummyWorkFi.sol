//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IWorkFi.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import {
    ISuperfluidToken
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";

contract DummyWorkFi is IWorkFi {

    function acceptWorker(uint32 bountyId, address worker) external override { }

    function createBounty(
        uint128 stablePay, 
        uint128 nativePay, 
        uint96 exchangeRate, 
        address nativeToken, 
        uint256 deadline
    ) external override returns (uint32) { 
        return 5;
    }

    function invest(uint32 bountyId, uint128 stableAmount) external override { }

    function acceptPayment(uint32 bountyId) external override { }

    function closeBounty(uint32 bountyId) external override { }

    /////////////////
    // VIEW FUNCTIONS
    /////////////////

    function getInvestment(uint32 bountyId) external pure override returns (uint128) { return 1000 * (10 ** 18); }

    function getBounty(uint32 bountyId) external view override returns (BountyMetadata memory) {

        return BountyMetadata({
            stablePay: 2000 * (10 ** 18),
            nativePay: 1000 * (10 ** 18),
            exchangeRate: 1 ether,
            nativeToken: 0x96B82B65ACF7072eFEb00502F45757F254c2a0D4,
            worker: address(0),
            recruiter: address(1),
            isClosed: bountyId == 0,
            deadline: block.timestamp + 60 days
        });

    }
    function getOpenBounties() external pure override returns (uint32[] memory) {
        
        uint32[] memory result = new uint32[](4);
        for (uint8 i = 0; i < 4; i++) {
            result[i] = i + 1;
        }

        return result;
    }

    function getOpenBounties(address recruiter) external pure override returns (uint32[] memory) {
        uint32[] memory result = new uint32[](4);
        for (uint8 i = 0; i < 4; i++) {
            result[i] = i + 1;
        }

        return result;
    }

    function getInvestedBounties(bool isOpen) external pure override returns (uint32[] memory) {

        if (!isOpen) {
            return new uint32[](1);
        }

        uint32[] memory result = new uint32[](4);
        for (uint8 i = 0; i < 4; i++) {
            result[i] = i + 1;
        }

        return result;
    }

}