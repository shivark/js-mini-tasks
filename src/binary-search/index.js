const search = (list, t) => {
    var arr = list.sort((a, b) => a - b);
    var length = arr.length - 1;
    return find(arr, t, 0, length);
}

const find = (arr, t, l, r) => {
    var mid = Math.floor((r + l) / 2);

    if (r - l <= 1) {
        return arr[r] === t
            ? r
            : arr[l] === t
                ? l
                : -1;
    }

    if (arr[mid] == t) {
        return mid;
    }

    if (arr[mid] > t) {
        return find(arr, t, 0, mid - 1);
    }

    if (arr[mid] < t) {
        return find(arr, t, mid + 1, r);
    }
}

export default search;