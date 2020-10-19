function solution(n) {
  var answer = (n + "").split('').map((n)=>parseInt(n)).reverse();
  return answer;
}

/*
  순서만 다르지 거의 이렇게 하더라
*/