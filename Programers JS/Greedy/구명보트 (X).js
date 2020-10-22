function solution(people, limit) {
    var answer = 0;
    people.sort().reverse();
    
    while(people.length !== 0) {
        let counting = 0;           
                
        for(let i =0; i<people.length ; i++) {            
            if(((counting + people[i]) <=limit) && people[i]!=0 ) {                
                counting += people[i];
                people[i]=0;
            }
        }  
        
        if(counting === 0) break;
        answer++;       
    }
    
    return answer;
}

/*
1 차 제출안 / 실패
효율성과 정확성 모두 떨어진다고 한다;

*/

function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    
    var little = 0;
    var big = people.length - 1;
    
    while(little < big) {
        let value = people[little] + people[big];
        if(value > limit) big--;
        else {
            big--;
            little++;
        }
        answer++;                
    }    
    if(little == big) answer++
    
    return answer;
}

/*

결국 못참고 찾아봤다

내가 생각한 작은 쪽 부터 밀어넣는 방식이 아닌
정렬 후 큰쪽, 작은쪽 동시 비교 후에 점진 적으로 비교하는 방식으로 사람들이 풀더라

그리고 중요한건
" sort()는 기본적으로 문자열의 유니코드에 따라 정렬합니다. "
즉 그냥 sort() 써놓으면 조질가능성이 매우 높다는 것;

sort((a,b) a-b); 와 같은식으로 해줘야 정상 작동한다.

*/