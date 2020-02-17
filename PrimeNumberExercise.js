var max = 1000
function isPrime(num){
  for (var i = 2; i < num; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}
for (var i =2; i < max; i++){
  if(isPrime(i) == true){
    document.write(i)
    document.write("<br/>")
  }
}