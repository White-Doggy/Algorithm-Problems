// 나누어 떨어지는 숫자배열

function solution(arr, divisor) {
    var answer = [];    
    for ( var num of arr ){
        if(num % divisor == 0 || divisor == 0 ) {
            answer.push(num);
        }
    }
    
    answer.sort((a,b)=> a-b);
    
    if(answer.length == 0){
         answer.push(-1);
    }
    
    return answer;
}

// answer.sort((a,b)=> a-b); 오름차순 배열 정렬
// answer.sort((a,b)=> b-a); 내림차순 배열 정렬

// *  return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// 로 한문장에 처리 하는 사람이 많았음


