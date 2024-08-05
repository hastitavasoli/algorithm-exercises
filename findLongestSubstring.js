/** 
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring(*') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6]
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8|
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
**/

function findLongestSubstring(mainString) {
  let indexOfChar = {}
  let subString = ''
  let index = 0

  if (typeof mainString == 'string' && mainString.length > 1) {
    while (mainString.length > 0) {
      if (typeof indexOfChar[mainString[index]] != 'undefined') {
        let tmpString = mainString.slice(0, index)
        if (tmpString.length > subString.length) {
          subString = tmpString
        }
        mainString = mainString.slice(indexOfChar[mainString[index]] + 1)
        indexOfChar = {}
        index = 0
      } else {
        indexOfChar[mainString[index]] = index
        if (index == (mainString.length - 1)) {
          let tmpString = mainString
          mainString = ''
          if (tmpString.length > subString.length) {
            subString = tmpString
          }
        } else {
          index = index + 1
        }
      }
    }
  }
  return (subString.length)
}