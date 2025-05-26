/**
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, 
such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 */

//area = height * width (nums of items beftween them)
//since it is calulation area between item A to item B, we'll use two pointers
//calculate the area 
//compare the pointer, move the smaller value one becos we mant max area

function mostWater(height) {
    let mostWater = 0;
    //two pointers for left height and right height
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        //get width (distance between two pointers)
        const width = right - left;

        //eg. left hight is 1 and right height is 6, we need to use 1 to calculate, otherwise it'll overflow
        const area = Math.min(height[left], height[right]) * width;
        mostWater = Math.max(area, mostWater);

        //move the pointer of smaller value
        height[left] < height[right] ? left++ : right--;
    }
    return mostWater;
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log('most water area ', mostWater(height));