function solution(number, k) {
  var answer = '';
  var stack =[];
  
  for( let i = 0 ; i< number.length ; i ++ ){
      while(k>0 && stack.length!=0 && stack[stack.length-1] < number[i]) {
          stack.pop();
          k--;
      }
      stack.push(number[i]);
  }
  
  // 주의점
  stack.splice(stack.length - k, k);
  
  return answer = stack.join('');
}


/*
  조건을 잘 알아야했다. 큰수라는게 단순히 이전 수보다 다음수가 크면 되는 거라
  스택 형태의 자료형에서 빼내는 수를 확인하면 되는 내용;
  
  중요한 점은 남은 빼내기 회수에 대해 처리하는 과정이 필수였다는 점
*/