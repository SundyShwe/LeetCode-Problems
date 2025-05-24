//sort the arry

//take item and select min and move it to the start
//go throught every item
//O(n^2)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (i !== minIndex) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

const arr = [5, 2, 6, 3, 4, 1, 7];
selectionSort(arr);
console.log('selection sort', arr);