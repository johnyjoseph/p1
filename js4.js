function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   document.getElementById("demo").innerHTML=sum_sq([0,1,2,3,4]);
//   console.log(sum_sq([0,1,2,3,4])); 