const search = (list, t) => {
    var index = -1;
    var arr = list.sort((a, b) => a - b);
    var l = arr.length - 1;

    while (index < 0) {
        find(arr, t, 0, l);
    }

    return index;

    function find(arr, t, left, right) {
        var mid = Math.floor((right - left) / 2);

        if (arr[mid] == t) {
            index = mid
        }

        if (arr[mid] > t) {
            find(0, mid - 1)
        }

        if (arr[mid] < t) {
            find(mid + 1, l - 1)
        }
    }
}



export default search;