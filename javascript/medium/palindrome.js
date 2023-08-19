/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let lowerCaseString = str.trim().toLowerCase();
    let stringArray = lowerCaseString.split("");
    let reverseArray = [];

    for(let i = stringArray.length - 1; i >= 0; i--){
        reverseArray.push(stringArray[i]);
    }

    let match = reverseArray.every((element, index) => element === stringArray[index]);


    return match ? str + " is a palindrome" : str + " is not a palindrome";
}

console.log(isPalindrome("MaDam"));
