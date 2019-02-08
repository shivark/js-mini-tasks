const reverse1 = n => {
    var b = 0;
    var isNegative = n < 0;
    var r = `${n}`.split('').reverse();

    r = isNegative ? r.splice(0, r.length - 1) : r;

    for (var i = 0; i < r.length; i++) {
        var j = r.length - (i + 1);

        b += Number(r[i]) * (Math.pow(10, j));
    }

    if (b > (Math.pow(2, 31) - 1) || b < -(Math.pow(2, 31))) {
        return 0;
    }

    return isNegative ? 0 - b : b;
};

export default {
    reverse1
};