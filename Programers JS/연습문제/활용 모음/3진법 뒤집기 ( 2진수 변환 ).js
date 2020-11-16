function solution(n) {    
    var answer = parseInt(n.toString(3).split("").reverse().join(''),3);    
    return answer;    
}

// x.toString(N) == N진법 수로 변경

// parseInt(x,N) == N진법 수를 10진법 수로 변경