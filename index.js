function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray[i]));
  }
return array;
}
function reduce(sourceArray, callback, starting){
  let total = 0;
  if(startingPoint!=undefined)
    total += startingPoint;
  for(let i = 0;i<sourceArray.length;i++){
    total += sourceArray[i];
  }
  return total;
}
