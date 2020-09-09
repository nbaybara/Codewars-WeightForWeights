function orderWeight(strng) {
   var string = strng.split(' ');
   string.sort(function(a,b){
    var lSum = getSum(a); 
    var rSum = getSum(b); 
     if (rSum === lSum) { 
      if (a < b) {
        return -1; 
      } else {
        return 1; 
      }
 
    } 
     else if (lSum < rSum) { 
      
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
