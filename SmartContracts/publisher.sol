// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./publisher_ids.sol"; // importing uid.sol

struct publisher_data {
        uint Pid;
        address account;
        address manager;
    }


contract manager  {  

    //************************Contract variables*********************************
    mapping (uint => uint[] ) public sub_lists; 
    publisher_data[] public pds; //array of publisher_data objects
    mapping (uint => bytes32[]) public hash_files;
    pid obj;
     // obj of uid for contract uid.sol

    // uint[] public counter;
    //mapping(uint => uint) public counter;
    //*******************************************************************************
    //************************Constructor********************************************
     
   constructor(address _pids) {
        obj = pid(_pids);
    }
    //*******************************************************************************
    //********************Contract functions*****************************************
    //********************list of functions******************************************
    /*
    1. create_sub
    2.unsubscribe
    3.indexOf (internal function to find the index of _sub_id in sub_list[_uid] )
    4.updatepd
    5.verification
    6.hashgen
    */
    function create_sub(uint _pid,uint _sub_id) public  returns(bytes32[] memory) { // test passed
        sub_lists[_pid].push(_sub_id);
        return hash_files[_pid];// return can be omited
        //sub_lists.push(_uid,_sub_id);
        //sub_lists[_uid] = array.push(_sub_id);
        //  sub_lists[_uid][counter[_uid]] = _sub_id;
        //  counter[_uid] ++;
        //sub_lists[_uid] = subscribers.push(_sub_id);
        // this is for retrieving -- uint[] storage values = uintToUintArrayMapping[key];        
    }

    function unsubscribe(uint _pid,uint _sub_id) public  { //test passed
       

        uint index = indexOf(_pid,_sub_id);
        require(index < sub_lists[_pid].length,"index outof bound");      
        for (uint i = index; i<sub_lists[_pid].length-1; i++){
            sub_lists[_pid][i] = sub_lists[_pid][i+1];
        }
        sub_lists[_pid].pop();
    }

    function indexOf(uint _pid,uint _sub_id) internal view returns (uint) { //internal function to unsubscribe and test passed
        uint[] storage sublist = sub_lists[_pid];
        for (uint i = 0; i < sublist.length; i++) {
            if (sublist[i] == _sub_id) {
                return i;
            }
        }
        revert("Element not found");
    } 
   
   function hashgen(string memory _text,uint _pid,address _account,address _manager) external returns(bytes32){
       // deal with manager address and deploy pid address
       bytes32 hash_out = keccak256(abi.encodePacked(_text,_account));//remove in blockchain and perform the hash and sign off chain to keep ur private key safe
        updatepd(_pid,_account,_manager);
        //updatefiles();
        hash_files[_pid].push(hash_out);
        return hash_out;
        

    }
    function updatefiles(uint _pid) public view returns(uint numberoffiles,bytes32[] memory files) {
           files = hash_files[_pid];
           numberoffiles = hash_files[_pid].length;
            return (numberoffiles,files) ;
        }
    function numberofsubs(uint _pid) public view returns(uint  files) {
           files = sub_lists[_pid].length;
            return files;
        }


    function updatepd(uint _pid,address _account,address _manager) public {
       if( verification(_account,_pid)){
           pds.push(publisher_data(_pid,_account,_manager));
       }
    //    else {
           
    //    }
       
        
    }
  
    function verification(address _account,uint _pid)  public view returns(bool) {
        uint index = obj.get(_account);
        if (index == _pid)
        {
            return true;
        }
        else{
            return false;
        }
       
    }
}
