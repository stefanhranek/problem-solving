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