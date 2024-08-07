/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true 
sameFrequency (34,14) // false 
sameFrequency (3589578, 5879385) // true 
sameFrequency (22,222) // false
**/

function sameFrequency(firstNum, secondNum) {
  if ((firstNum.toString()).length == (secondNum.toString()).length) {
    let firstNumFrequency = {}
    let secondNumFrequency = {}

    for (let i = 0; i < (firstNum.toString()).length; i++) {
      firstNumFrequency[(firstNum.toString())[i]] = (firstNumFrequency[(firstNum.toString())[i]] || 0) + 1;
      secondNumFrequency[(secondNum.toString())[i]] = (secondNumFrequency[(secondNum.toString())[i]] || 0) + 1;
    }
    if (Object.keys(firstNumFrequency).length == Object.keys(secondNumFrequency).length) {
      for (const property in firstNumFrequency) {
        if (firstNumFrequency[property] != secondNumFrequency[property]) {
          return false
        }
      }
    } else {
      return false
    }
    return true
  } else return false
}
