function repeatedString(s, n) {
    let repeat = Math.floor(n / s.length);
    let remainder = n % s.length;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            counter += repeat;
            if (i < remainder)
                counter++;
        }
    }
    return counter;
}
