/**
 Design an algorithm to encode a list of strings to a single string. 
 The encoded string is then decoded back to the original list of strings.
Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]
 */
/**
 Basically asking to 
 1. join the array into a string, 
 2. pass the string to another server/machine (or here is another funciton)
 3. split the string into original array
 */

function encode(strArr) {
    let encoded = '';
    //instead of just joining it with '#', we put the length of string infront (becos array item can have # too)
    //eg. ['love','you'] => '4#love3#you'
    for (let str of strArr) {
        encoded += str.length + '#' + str;
    }
    return encoded;
}
function decode(str) {
    const decoded = [];

    while (str.length) { //till all str items are retrieved
        //get the first index of '#
        const index = str.indexOf('#');
        if (index) {
            //get length that is passed in the encoded
            const strLength = str.charAt(index - 1) * 1;// * 1 is to change string into number
            //calculate start and end
            const start = index + 1;
            const end = start + length;
            //get substring for array tiem
            const strItem = str.substring(start, end);
            decoded.push(strItem);

            //remove the aldy retrieved item from encoded
            str = str.substring(end);
        }
    }
    return decoded;
}
const inputStr = ["Sundy", "You", "Can", "Do", "It!"];
const encodedStr = encode(inputStr);
console.log('out put is', decode(encodedStr));