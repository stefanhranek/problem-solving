function twoStrings(s1, s2) {
    let result = "NO";    
    console.log(s1);
    result = 
        (s1.split('').filter((el, key) => s2.indexOf(el) > -1).length > 0) 
        ? "YES" 
        : "NO";
    // console.log(result);
    return result;
}