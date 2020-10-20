function solution(x) {    
  return x%(x+"").split('').reduce((pre, num)=> pre + (num*1),0)===0 ? true : false;
}

/*
  reduce 사용 시
  함수 부분은 function 형태로 할게 아니라면,
  중괄호가 필요없다. 주의
*/