function solution(a, b) {
    var answer = 0;
    var small, big;
    a > b ? (big = a, small=b ): ( big=b, small=a );
    while ( small <= big ) {
           answer += small++;
           }
    return answer;
}

/*
    그냥 Math.min(a,b) Math.max(a,b) 쓰면 되는걸 이상하게 했다.
*/