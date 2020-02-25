function sockMerchant(n, ar) {
    ar.sort();
    let sockCount = 1;
    let pairCount = 0;
    for (let i = 0; i < ar.length; i++) {
        ar[i] === ar[i+1] 
        ? sockCount ++
        : ((pairCount += Math.floor(sockCount/2)), (sockCount = 1))
    }
    return pairCount;
}