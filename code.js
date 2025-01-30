function divideAndConquerSum(a) {
  var len = a.length;
  if (len < 3) { // sum
    var sum = 0;
    for (var i = 0; i < len; i++) {
      sum += a[i];
    }
    return sum;
  } 
  else { // divide
    var div = Math.ceil(len/3);
    return divideAndConquerSum(a.slice(0, div)) 
      + divideAndConquerSum(a.slice(div, (2*div)))
      + divideAndConquerSum(a.slice((2*div)));
  }
    
}

