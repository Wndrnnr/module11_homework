function isInteger(num) {
    return (num ^ 0) === num;
  }
  
  
  const sqr = (x, n) => {
    if((x > 0 && n > 0) && (isInteger(x) && isInteger(n))){
      let result = Math.pow(x,n)
      console.log(result)
    } 
    
  }
   sqr(4,3)