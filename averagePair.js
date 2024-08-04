/**
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: 0(1)

Sample Input:
averagePair ([1,2,3],2.5) // true 
averagePair ([1,3,3,5,6,7,10,12,19],8) // true 
averagePair ([-1,0,3,4,5,6], 4.1) // false 
averagePair([1],4) // false
**/


// Time: O(N)
// Space: O(N)
function averagePair(array, avg) {
  let tmpObject = {}
  for (let index = 0; index < array.length; index++) {
    if (tmpObject[array[index]]) {
      return true
    } else {
      tmpObject[((avg * 2) - array[index])] = true
    }
  }
  return false
}

// Time: O(N)
// Space: O(1)
function averagePair(array, avg) {
  let right = array.length - 1
  let left = 0
  while (right > left) {
    if (((array[right] + array[left]) / 2) > avg) {
      right = right - 1
    } else if (((array[right] + array[left]) / 2) < avg) {
      left = left + 1
    } else if (((array[right] + array[left]) / 2) == avg) {
      return true
    }
  }
  return false
}