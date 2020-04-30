function map(sourceArray, callback){
  return callback(sourceArray);
}
function reduce(sourceArray, starting){
  let total;
  if(starting)
    total += starting;
  sourceArray.forEach(e=>{
    total+=e;
  });
  return total;
}