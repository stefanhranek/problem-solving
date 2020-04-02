var singleNumber = function(nums) {
    let s = nums.sort();
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            i++;
        } else {
            return s[i];
        }
    }
};