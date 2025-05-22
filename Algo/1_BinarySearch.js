//find an item in a sorted array (*must be sorted array*)

//BinarySearch = two pointers
//start form Mid item
//if it's smaller than searchKey, we'll go to the right side since the bigger numbers are in the right side
//else we'll go to left side as we need to find between smaller numbers

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] == key) {
            return mid;
        }
        if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`search 9 in the array`, binarySearch(array, 9));