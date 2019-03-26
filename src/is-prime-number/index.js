const isPrimeNumber = n => {

    if (n <= 1) {
        return false;
    }

    if (n === 2) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    for (let d = 3; d < n; d++) {
        if (n % d === 0) {
            return false;
        }
    }

    return true;
}

export default isPrimeNumber;