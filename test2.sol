pragma solidity ^0.4.19;
contract sample {
 string public name = “ZeonLab”;
 function set(string _name) {
    name = _name;
 }
 
 function get() constant returns (string) {
   return name;
 }
}