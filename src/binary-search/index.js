const search = (list, t) => {
    var arr = list.sort((a, b) => a - b);
    console.log(arr);
    var l = arr.length - 1;
    return find(arr, t, 0, l);
}

const find = (arr, t, left, right) => {
    var mid = Math.floor((right + left) / 2);

    if (right - left <= 1) {
        if (arr[right] == t) {
            return right;
        }
        if (arr[left] == t) {
            return left;
        } else {
            return -1;
        }
    }

    if (arr[mid] == t) {
        return mid;
    }

    if (arr[mid] > t) {
        return find(arr, t, 0, mid - 1);
    }

    if (arr[mid] < t) {
        return find(arr, t, mid + 1, right);
    }
}

export default search;