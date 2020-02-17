function minMaxAvg(arr){
  //Average number
  var sum = 0;
  var max = arr[0];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++){
    sum = sum + arr[i]
  }
  for (var i = 1; i < arr.length; i++){
    //find out the max
    if (arr[i] > max){
      max = arr[i]
    }
   for (var i = 0; i < arr.length; i++){
     //find out min
     if (arr[i] < min){
       min = arr[i];
     }
   }
  }
 var avg = sum/arr.length
 return [min,max,avg]
}
console.log(minMaxAvg([10,4,2,12,8]));
console.log(minMaxAvg([20,10,3,40,9,8,90]));