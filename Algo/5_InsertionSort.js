//Imagine your array into sorted and unsorted
//sorted part is at front and then follow by unsorted part
//pointer for sorted will go backward to compare till it's <0
//pointer for unsorted will go forward to compare till it's > arr's length

//O(n~2)

function insertionSort(arr) {
    for (let unsort = 1; unsort < arr.length; unsort++) {
        let sorted = unsort - 1;  //let assume  ending of sorted part starts just before unsorted part
        let itemToInsert = arr[unsort]; //first item of unsorted part

        //then we will compare the itemToInsert in our sorted part
        //shift bigger item forward till smaller item is found
        //then insert next to the smaller item
        while (sorted >= 0 && arr[sorted] > itemToInsert) {
            arr[sorted + 1] = arr[sorted];
            sorted--;
        }
        arr[sorted + 1] = itemToInsert;
    }
}
const arr = [-2, 4, -6, 20, 8, 5];
insertionSort(arr);
console.log('Insertion Sorted Array', arr);