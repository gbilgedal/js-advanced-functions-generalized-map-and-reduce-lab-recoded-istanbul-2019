function map(sourceArray, callback){
  return callback(sourceArray);
}
function reduce(sourceArray, starting){
  let total;
  if(starting)
    total += starting;
  for(let i =0;i<sourceArray.length;i++){
    total+=sourceArray[i];
  }


  return total;
}
