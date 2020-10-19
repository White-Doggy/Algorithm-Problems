function solution(arr) {
  var answer = [];
  if(arr.length == 1) answer.push(-1);
  else {
      var target = Math.min.apply(null,arr);
      arr.splice(arr.indexOf(target),1);
      answer = arr;
  }
  return answer;
}

/*

배열.indexOf(값) == 값의 대상 찾기

Math.min(대상1, 대상2); == 작은값 찾기
Math.max(대상1, 대상2); == 작은값 찾기

Math.min.apply(null, 배열); == 배열에서 최소값 찾기
Math.max.apply(null, 배열); == 배열에서 최대값 찾기

배열.splice(인덱스, 개수) == 해당 인덱스 부터 개수 만큼 대상을 잘라서 배열 반환, 원본 배열에 영향을 줌


*/