function solution(brown, yellow) {
    var answer = [];
    for(let i =1 ; i<=yellow ; i++ ){                
        if( yellow/i === parseInt(yellow/i)) {                        
            let count = (i+2) * (yellow/i+2) - yellow;
            if(count === brown) {
                answer.push(i+2);
                answer.push(yellow/i+2);
                break;                
            }
        }
    }
    answer.sort((a,b)=> b-a);
    return answer;
}