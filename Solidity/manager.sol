// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract owner{
    
    address manager;
    uint countOfPub;
    uint countOfSub;

    // modifier that only manager can do something
    modifier managerOnly(){
        
        require(msg.sender == manager);
        _;

    }

    // manager is the one who deployed the contract
    constructor () {

        manager = msg.sender;

    }    
    
    // publisher id to pub Record
    mapping (uint => address) pidMap; // publisher data mapping
    mapping (uint => address) sidMap; // subscriber data mapping

    // params : address of the publisher account and his pid
    function registerPub(address _addr, uint _pid) public managerOnly {

        // check if pid already exists
        require(pidMap[_pid] == 0x0000000000000000000000000000000000000000, "Account already exists");
        
        pidMap[_pid] = _addr;

        countOfPub += 1;
    
    }

    // get count of publishers
    function getCountOfPubs() view internal returns (uint) {

        return countOfPub;

    }

    // remove a publisher by manager
    function removePub(uint _pid) public managerOnly{

        pidMap[_pid] = 0x0000000000000000000000000000000000000000;
        countOfPub -= 1;

    }

    // register subscriber
    function regSubs(uint _sid) public{

        // check if pid already exists
        require(sidMap[_sid] == 0x0000000000000000000000000000000000000000, "Account already exists");
        
        // _managerAddr.transfer(msg.value);
        sidMap[_sid] = msg.sender;

        countOfSub += 1;

    }

    function getCountOfSubs() view internal returns (uint) {

        return countOfSub;

    }

    // remove a subscriber my manager
    function removeSub(uint _sid) public managerOnly{

        sidMap[_sid] = 0x0000000000000000000000000000000000000000;
        countOfSub -= 1;

    }

}
