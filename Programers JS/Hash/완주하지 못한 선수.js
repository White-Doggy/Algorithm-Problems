// 1차

function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    
    for( var name of participant ) {
        if(completion.find(data=>data===name)) completion.splice(completion.indexOf(name),1);
        else return name;
    }
    
    return answer;
}


/*
그냥 풀어댄 하나씩 확인하며 제거하는 방식인데,
역시나 정확도보다 효율성에서 문제가된다.

indexOf()
find()
를 알자
*/

function solution(participant, completion) {    
    participant.sort();
    completion.sort();
    
    console.log(participant, completion);
    
    for( var index in participant ) {
        if(participant[index] != completion[index]) return participant[index];
    }    
}

//그냥 정렬 시키고, 하나씩 비교 하면서 없는 경우 빼내면 되긴하더라;


