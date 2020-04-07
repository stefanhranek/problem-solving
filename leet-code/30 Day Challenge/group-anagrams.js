/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {}
    strs.forEach(str => {
        let splitStr = str.split('').sort();
        hash[splitStr] ?  hash[splitStr].push(str) : hash[splitStr] = [str];
    })
    
    const keys = Object.keys(hash);
    const answer = keys.map(function(values) { return hash[values] });
    return answer;
};



/* 
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/