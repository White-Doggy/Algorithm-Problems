function solution(priorities, location) {
    var answer = 0;
    var position = [];
    var counting = 1;
    priorities.map((num,index)=>{
       position.push([num, index]);
    });        
    var rank = priorities.sort((a,b)=> b-a);
    
    while( position.length > 0){          
        let now = position.shift();
        if(now[0]>=rank[0]){
            rank.shift();
            if(now[1]===location) {
                answer = counting;
                break;
            }
            counting++;
        }
        else position.push(now);
    }
    
    return answer;
}


// 다른 풀이

function solution(priorities, location) {
    var list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){
        var cur = list.splice(0,1)[0];        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);                        
        }
        else{            
            count++;
            if(cur.my) return count;
        }
    }
}

/*

    방법 자체는 비슷하다.
    다소 다른점은, some을 쓴건데
    some은 조건에 대해 일부가 참인 경우 참을 반환함 ( 대소 비교에 용이 )
    유사 형태로 every가 있음 (모든 요소가 참인경우)

*/