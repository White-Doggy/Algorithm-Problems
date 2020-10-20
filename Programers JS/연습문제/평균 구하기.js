function solution(arr) {
    var answer = 0;
    arr.map((num)=>{
        answer += num;
    })
    return answer/arr.length;
}

/*

function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}

reduce가 헷갈려서 map을 썼는데, 훨씬 간단하게 처리된다.

*/