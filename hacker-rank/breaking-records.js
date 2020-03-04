function breakingRecords(scores) {
    let minCounter = 0; 
    let maxCounter = 0;
    let min = scores[0];
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minCounter++;
        } else if (scores[i] > max) {
            max = scores[i];
            maxCounter++;
        } else {
            continue;
        }

    }
    return [maxCounter, minCounter];
}