function map(sourceArray, callback){
  return callback(sourceArray);
}
function reduce(sourceArray, callback, starting){
  let total;
  if(starting)
    total += starting;

  total =callback(sourceArray);
  
  return total;
}
