/** 
 
Write a function called is Subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:
isSubsequence('hello', 'hello world'); // true 
isSubsequence('sing', 'sting'); // true 
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)
Space Complexity - 0(1)

**/

function isSubsequence(subString, mainString) {
  let subIndex = 0
  let mainIndex = 0

  if (subString.length < mainString.length) {
    while (subIndex < subString.length && mainIndex < mainString.length) {
      if (subString[subIndex] === mainString[mainIndex]) {
        subIndex = subIndex + 1
      }
      mainIndex = mainIndex + 1
    }
    if (subIndex === subString.length) {
      return true
    }

    return false

  } else {

    return false
  }
}