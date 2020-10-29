'use strict';

// Complete this algo
const minJumps = arr => {

  let length = arr.length 
  let jumps = 0
  let currPosition = 0
 while(currPosition < length){

    if(arr[currPosition]>=length-(currPosition+1)){
        jumps=jumps+1
        return jumps
    }

    let max=arr[currPosition+1]+1
    let indexOfMax=currPosition+1
    for(let i=1;i<=arr[currPosition];i++){
        if(arr[currPosition+i]+i>max){
            max=arr[currPosition+i]+i
            indexOfMax=currPosition+i
        }
    }
    //console.log(currPosition)
    jumps=jumps+1
    currPosition=indexOfMax

}
};

module.exports = minJumps