function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray));
  }
return array;
}
function reduce(sourceArray, callback, starting){
  let total;
  total = callback(sourceArray,starting); 

  return total;
}
