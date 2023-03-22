pragma solidity ^0.8.0;
import "./publisher.sol";

contract Subcriber{
    manager obj;
    constructor(address _pids) {
        obj = manager(_pids);
    }
    //pid Pid;
    function showfiles(uint _pid) public view returns(uint numberoffiles,bytes32[] memory files ){
       return obj.updatefiles(_pid);
        //return files;
       // return hash_files[_pid]
    } 

}
