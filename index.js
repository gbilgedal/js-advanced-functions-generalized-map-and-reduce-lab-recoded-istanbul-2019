function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray[i]));
  }
return array;
}
function reduce(sourceArray, callback, starting){
  let total;
  for(let i =0;i<sourceArray.length;i++){
  total += callback(sourceArray[i]);
  }
  return total;
}
