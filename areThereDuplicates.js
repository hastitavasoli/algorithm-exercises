/**
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Examples:
areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
**/


// Time - O(n)
// Space - O(n)
function areThereDuplicates(array) {
  let tmpArray = []
  for (let index = 0; index < array.length; index++) {
    if (tmpArray.includes(array[index])) {
      return true
    } else {
      tmpArray.push(array[index])
    }
  }
  return false
}


// Time - O(n log n)
// Space - O(1)
function areThereDuplicates(array) {
  let sortedArray = array.sort()
  for (let index = 0; index < array.length; index++) {
    if (sortedArray[index + 1]) {
      if (sortedArray[index] == sortedArray[index + 1]) {
        return true
      }
    }
  }
  return false
}
