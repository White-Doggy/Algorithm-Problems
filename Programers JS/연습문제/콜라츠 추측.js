function solution(num) {
  var answer = 0;
  var value = num;
  
  if(num==1) return 0;
  
  for(let i=1 ;i>0 ; i++) {
      if(value%2===0) {
          value/=2;            
      }
      else {
          value = value*3 + 1;            
      }
      
      if(value === 1) {
          answer = i;
          break;
      }
      else if(i>=500) {
          answer = -1;
          break;    
      }
  }    
  return answer;
}

/*

딱 한 케이스가 에러나서 왜인가 생각하다가 질문탭을 보니,
1에 대한 처리가 없는 경우인 사람이 많았다.


function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}

3항 연산자의 재귀로 풀수있다.

*/