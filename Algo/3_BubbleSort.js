//sort a given array

//compare with next item and swap place, till there's no need to swap anymore
//O(n2)

function bubbleSort(arr) {
    let isSwapped;
    do {
        isSwapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                isSwapped = true;
                // const temp = arr[i + 1];
                // arr[i + 1] = arr[i];
                // arr[i] = temp;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    } while (isSwapped)
}
const arr = [-2, 4, -6, 20, 8];
bubbleSort(arr);
console.log('sorted array', arr);