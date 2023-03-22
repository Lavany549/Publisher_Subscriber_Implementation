pragma solidity ^0.8.0;

//error Unauthorized(address caller);
contract pid{

    // address [] public pid;
    mapping (address => uint) public pid_map;
    //address[] public value;
    //uint[] public index;
    //string public name ;
    //uint public name;
    
    function set(address _addr, uint _pid) public {
        //pid_map.push(msg.sender);
        //require(_addr == msg.sender);
        pid_map[_addr] = _pid;
        //value.push(_addr);
        //index.push(_pid);
        //access(address _addr, uint _pid);
    }
    // function get(address _addr) public view returns (uint index ){
    //     index = pid_map[_addr];
    //     return index;

    // }
     function get(address _addr) public view returns(uint){
        //index = pid_map[_addr];
        //name = "somesh";
        //return name;
         return pid_map[_addr];
        // return index;
         //require(_addr == msg.sender);
        // for (uint i = 0; i <= value.length; i++) {
        //     if ( _addr == value[i]) {
        //         // Skip to next iteration with continue
        //          if (_pid == index[i]){
        //              return true;
        //          }
        //          else{
        //              return false;
        //          }
        //     }
        //     else{
        //         return false;
        //     }

        //require(msg.sender == _addr);
        //name = index;
        //access();
        //return name;
}
    // function access(address _addr, uint _pid) public view returns(uint){
    // //    uint name = 100;
    //     // return name;
    //     // mapping (address => uint) public copy;

    // }
}

    // function getpid(msg.sender) public  view returns(uint){
    //     return uint(pid.length-1);
    // }

//     funtion verify_id(address _account) public returns(uint){
        
//     }  
// }
