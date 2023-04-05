// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract publisher{

    // manager address for the publisher
    address myManager;

    // publisher pid
    uint pid;

    // map of topics to who all subscribed to it
    mapping (string => uint[]) subscription; 

    // map of topics to hash of files included in the order
    mapping (string => bytes32[]) publishments;

    constructor () {

    }

    // set the manager for the publisher
    // this will be called from application side
    function setManager(address _manager) public{
        
        myManager = _manager;

    }

    function setPid (uint _pid) public{

        pid = _pid;

    }

    // publish something
    // add the hash to the publishments map
    function publish(bytes32 _hash, string memory _topic) public{

        publishments[_topic].push(_hash);

    }

    // get the number of files published so far in a topic
    function getPublishCount(string memory _topic) public view returns(uint){

        return publishments[_topic].length;

    }

    // function to add a subscriber to some topic
    function addSubscriber(uint _sid, string memory _topic) public{
        
        // check if the topic is active
        // if the topic has atleast one file for the subscriber to see something
        require(publishments[_topic].length > 0);

        subscription[_topic].push(_sid);

    } 

    //unsubscribe a subscriber from a topic of this publisher
    function unSubscribe(uint _sid, string memory _topic) public{

        bool flag = false;
        
        for(uint i = 0; i < subscription[_topic].length; i += 1){
            if(subscription[_topic][i] == _sid){
                flag = true;
                delete subscription[_topic][i];
                break;
            }
        }

        require(flag == true, "The id was never registered in the topic");

    }

    // function to return the hash of some file in a topic
    function verify(string memory _topic, uint _count) view public returns (bytes32){
        
        require(_count < publishments[_topic].length);
        return publishments[_topic][_count];
    }

}
