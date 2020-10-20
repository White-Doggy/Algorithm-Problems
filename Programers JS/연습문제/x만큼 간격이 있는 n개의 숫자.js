function solution(x, n) {
  var answer = [];
  for(let i = 1; i<=n ;i++) {
      answer.push(i*x);
  }
  return answer;
}

/*
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

array n 으로 개수 크기의 배열 생성 후
map(value, index) 임을 활용해 결과 반영하는 방식;
*/