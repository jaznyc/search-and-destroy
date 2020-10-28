'use strict';

// Complete this algo
// Complete the Binary Search function found in the codebase. This function should return 'true' if the searched item is in the ordered array, and 'false' if it isn't. Like our BST contains() function, this function should run in O(log(n)) time!

// Be sure to clearly diagram your algorithm with your partner, and step through several base and edge cases before implementing it in the code. If you want to, include at least one of your own test-specs for the examples you brainstormed.

// const binarySearch = (array, target) => {
// 	// Write an ordered array from min to max value 
// 	const array = [1, 2, 3, 4, 5, 6, 7, 8]
// 	const target = 5 


// 	// Grab array at index(3) and check if target is = to that value, then return true
// 	// If != to target, check if it's less than or grater the index(3) value
// 	// If <index(3) slice beginning of array to that index and if it is  >index(3) then slice idex(3) + 1 to the end of the array 
// 	// Keep cutting in half until we get the number we are looking for 
// };

const binarySearch = (array, target) => {
	const searchIdx = Math.floor(array.length/2) 
  
	if (array[searchIdx] === target){
	  return true
	} 
	if(array[searchIdx] > target) { 
	  let beginningHalf = array.slice([0], searchIdx)
	  return binarySearch(beginningHalf, target)
	} else if (array[searchIdx] < target){
	  
	  let finalHalf = array.slice(searchIdx + 1)
	  return binarySearch (finalHalf, target)
	}
	else return false
  }
  
//   const array = [1, 2, 3, 4, 5, 6, 7, 8]
  
//   const target = 9 
  
//   binarySearch(array, target)

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch