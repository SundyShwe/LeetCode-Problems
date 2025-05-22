//find an item in sorted array

//use two pointers and start checking mid item
//if mid item is less than searchKey, then we'll hv to search in the right side where big numbers are
//else search in left side as we need to find between small numbers

function binarySearch(arr, key) {
    return doSearch(arr, key, 0, arr.length - 1);
}

function doSearch(arr, key, left, right) {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) return mid;

    if (arr[mid] < key) {
        return doSearch(arr, key, mid + 1, right);
    } else {
        return doSearch(arr, key, left, mid - 1);
    }

}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`search 7 in the array`, binarySearch(array, 7));