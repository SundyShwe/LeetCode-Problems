//divide and conquare

//1. divide array into smaller partitions till one item is left
//2. compare each small array and merge into bigger one till it's complete

// O(n Log n)

function mergeSort(arr) {
    return divide(arr);
}

function divide(arr) {
    if (arr.length < 2) return arr; //till one item is left

    //get mid point and diving into left and right
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    //sort and merge the left and right
    return sortAndMerge(divide(leftArr), divide(rightArr));
}

function sortAndMerge(left, right) {
    const mergedArr = [];

    //compare each item and put smaller into mergedArr
    while (left.length && right.length) {
        left[0] < right[0] ? mergedArr.push(left.shift()) : mergedArr.push(right.shift());
    }

    //retrn mergedArr + whatever left of leftArr + whatever left of rightArr
    return [...mergedArr, ...left, ...right];
}

const arr = [6, 2, 4, 7, 1, 8, 3, 5, 11, 9];
console.log(mergeSort(arr));