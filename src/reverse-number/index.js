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

const reverse2 = n => {
    var isNegative = n < 0;
    var arr = `${n}`.split('');

    arr = isNegative ? arr.splice(1, arr.length) : arr;

    var reversed = '';
    while (arr.length > 0) {
        reversed += arr.pop();
    }

    var final = isNegative ? 0 - reversed : Number(reversed)

    if (final > (Math.pow(2, 31) - 1) || final < -(Math.pow(2, 31))) {
        return 0;
    }

    return final;

}

export default {
    reverse1,
    reverse2
};