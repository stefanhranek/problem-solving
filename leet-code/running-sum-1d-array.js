var runningSum = function(nums) {
    let result = [];
    let currentSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        
        currentSum += currentValue;
        result.push(currentSum);
    }
    
    return result;
};