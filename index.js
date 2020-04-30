function map(sourceArray, callback){
let array = [];
  for(let i =0;i<sourceArray.length;i++){
    array.push(callback(sourceArray[i]));
  }
return array;
}
function reduce(sourceArray, callback, starting=0){
  let total;
  if(starting>0){
    total += starting;
  }
  total += sourceArray.reduce(callback);

  return total;
}
