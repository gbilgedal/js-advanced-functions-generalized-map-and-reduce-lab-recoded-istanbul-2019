function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray[i]));
  }
return array;
}
function reduce(sourceArray, callback, starting){
  let total;
  if(starting){
    total += starting;
  }
  for(let i =0;i<sourceArray.length;i++){
    total = callback(sourceArray[i],starting);
  }
  return total;
}
