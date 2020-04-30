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
  total += sourceArray.reduce(callback);

  return total;
}
