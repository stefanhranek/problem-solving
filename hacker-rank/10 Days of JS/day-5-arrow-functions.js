const modifyArray = (nums) => {
    let numsNew = [];
    for (let i = 0; i < nums.length; i++) {
        (nums[i]%2 === 0) 
        ? numsNew.push(nums[i]*2)
        : numsNew.push(nums[i]*3)
    }
    return numsNew;
}