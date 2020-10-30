function solution(n) {
  var answer = 0;
  if(n === Math.pow(Math.floor(Math.sqrt(n)),2)) answer = Math.pow(Math.floor(Math.sqrt(n))+1,2);
  else answer = -1;
  return answer;
}


/*
  Math.floor(대상) == 정수화 시킴
  Math.sqrt(대상) == 제곱근
  Math.pow(대상,수치) == 제곱
*/