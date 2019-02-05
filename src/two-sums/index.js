// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Given nums = [2, 7, 11, 15], target = 9, return [0, 1].

const sum1 = (arr, target) => {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] == target - arr[i]) {
                return [i, j];
            }
        }
    }
};

const sum2 = (arr, target) => {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    for (let j = 0; j < arr.length; j++) {
        let complement = target - arr[j];

        if (map.has(complement) && map.get(complement) != j) {
            return [j, map.get(target - arr[j])];
        }
    }
};

const sum3 = (arr, target) => {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [i, map.get(target - arr[i])];
        }

        map.set(arr[i], i);
    }
};

export default {
    sum1,
    sum2,
    sum3
};