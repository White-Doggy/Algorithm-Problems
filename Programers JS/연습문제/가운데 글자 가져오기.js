// 가운데 글자 가져오기

function solution(s) {
    var answer = '';    
    answer = s.length % 2 === 0 ? 
        s.slice(s.length/2-1,s.length/2+1) : s.slice(s.length/2,s.length/2+1);
    return answer;
}

// 다른 제출 코드와 큰 차이는 별로 없어보이지만,
// s.length를 위에서 미리 처리하고 변수로써 호출하는게 맞았다.