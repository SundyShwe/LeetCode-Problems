//find a pivot 
//put smallers to the left
//put bigger to the right
//do it till arr to recursive only 1 item left

//avarage - O(n Log(n))
//worse case - O(n^2)

function quickSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[arr.length - 1]; //let's assume the last item as pivot, it can be first or middle
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]); //put smaller to left and bigger to right
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; //recursively apply quicksort to left and right
}

const arr = [8, 20, -2, 4, -6];
const sorted = quickSort(arr);
console.log('sorted array with quick sort', sorted);


