'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const nextCache = {};
  let currNode = linkedlist.head;
  let nextVal = currNode.next.value;

  while (currNode !== null) {
    let nextNode = currNode.next;
    if (nextNode !== null) {
      let nextVal = currNode.next.value;
      if (nextCache.hasOwnProperty(nextVal)) {
        return true;
      } else {
        nextCache[nextVal] = 0;
      }
    }
    currNode = currNode.next;
  }
  console.log(nextCache);
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
