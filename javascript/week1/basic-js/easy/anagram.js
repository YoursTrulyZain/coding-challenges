/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

*/

function isAnagram(str1, str2) {
    let array1 = str1.split("");
    array1.sort();
    let array2 = str2.split("");
    array2.sort();

    if(array1.length === array2.length){

        let match = array1.every((element, index) => element === array2[index]);
        console.log(match ? str1 + " and " + str2 + " are anagrams." : str1 + " and " + str2 + " are not anagrams.");

    }else{
        console.log(str1 + " and " + str2 + " are not anagrams.");
    }
}

isAnagram("elegiggle", "dad");