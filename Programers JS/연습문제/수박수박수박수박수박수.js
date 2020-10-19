function solution(n) {
    var answer="";
    
    for (let i = 0; i < parseInt(n/2) ; i++ ) {
        answer+= "수박";
    }
    if(n%2) answer+= "수";
    return answer;
}

/*
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

string.repeat( count );
해당 문자열을 횟수 만큼 반복하는 메서드.
*/