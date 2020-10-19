function solution(strings, n) {
    var answer = strings.sort(function(a,b){
        if(a[n]===b[n]) {
            return (a > b) - ( a < b );
        }
        else {
            return (a[n] > b[n]) - (a[n] < b[n]);
        }
    });    
    
    return answer;
}


/*

sorting이 결과가 양, 0, 음 수에 따라 달라지는데 이를 활용해 처리해야 함

문자열의 경우 단순 합차로 처리가 안됨으로 비교연산자 처리 후 계산 해야함

*/