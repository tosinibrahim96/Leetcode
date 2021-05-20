let arr = [1,2,3,4,12];

console.log('Greatest value is at index: '+greatestNumber1(arr));

function greatestNumber(arr){
  for (let index = 0; index < arr.length; index++) {
    isCurrentValueGreatest = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[index]) {
        isCurrentValueGreatest = false;
      }
    }
    if (isCurrentValueGreatest) {
      return index;
    }
  }
}




function greatestNumber1(arr){

  greatestNumberIndex = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[greatestNumberIndex]) {
      greatestNumberIndex = index;
    }
  }

  return greatestNumberIndex;
}
