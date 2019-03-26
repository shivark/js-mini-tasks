const largestInArray = (arr) => {
    let largest = arr[0];
    let largetsIndex = -1;

    arr.forEach((element, index) => {
        (element >= largest) && (largest = element,
            largetsIndex = index);
    });

    return largetsIndex;
}

const selectionSort = (arr) => {
    let items = arr;
    let sorted = [];

    while (items.length > 0) {
        let i = largestInArray(items);
        sorted.push(items[i])
        items.splice(i, 1);
    }

    return sorted;
}

export default selectionSort;