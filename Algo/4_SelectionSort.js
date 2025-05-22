//sort the arry

//take item and select min and move it to the start
//go throught every item
//O(n2)

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (j = i + 1; j <= arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

const arr = [5, 2, 6, 3, 4, 1, 7];
selectionSort(arr);
console.log('selection sort', arr);