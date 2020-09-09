function orderWeight(strng) {
   var string = strng.split(' ');
   string.sort(function(a,b){
    var aSum = getSum(a); 
    var bSum = getSum(b); 
     if (aSum === bSum) { y
      if (a < b) {
        return -1; 
      } else {
        return 1; 
      }
 
    } 
     else if (aSum < bSum) { 
      
      return -1;
    }
    return 1;
  });
 return string.join(" ");
}

  function getSum(str) {
  str = str.split('');
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}
