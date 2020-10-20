function solution(n, m) {
  var answer = [];
  
  var big = Math.max(n,m);
  var small = Math.min(n,m);
  var num = 0;
  

  
  for(let i = 1 ; i <= big ; i++ ) {
      if( (small%i ==0 && big%i ==0) &&i>num ) num = i;
  }
  
  answer.push(num);

  if(big%small === 0) {
      answer.push(big);
      return answer
  }
  
  num=big + 1;
  console.log(num);
  
  while(1) {
      if( num % big ===0 && num % small ===0 ) {
          answer.push(num);
          break;
      }
      num++;
  }
      
  return answer;
}