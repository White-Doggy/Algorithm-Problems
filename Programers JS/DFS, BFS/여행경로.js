function solution(tickets) {
    var answer = [];
    var root = [];
    
    //각 원소에 대한 시작
    for(let i =0; i<tickets.length ;i++) {
        if(tickets[i][0]==="ICN"){
            let temp = [];
            calc(tickets[i], tickets, temp);
        }
    }    

    
    // 정렬 후 반환
    root.sort((a,b)=>(a.join('')>b.join(''))-(b.join('')>a.join('')));
    return answer=root[0];
    
    
    // BFS 함수
    function calc(start, arr, result) {
        
        // 복사 분할 및 삽입
        let tempResult = result.slice();
        let tempArr = arr.slice();         
        tempArr.splice(arr.indexOf(start),1);
              
        tempResult.pop();
        tempResult.push(start[0]);
        tempResult.push(start[1]);                
        
        if(tempArr.length===0) {
            root.push(tempResult);
            return;
        }     

        // 연결 확인
        tempArr.map(a=>{
            if(a[0]===start[1]) calc(a, tempArr, tempResult);
        })
    }
}


/*
 
    조건 하나를 깜빡하고 놓쳐서 찾아봐버린 문제
    시작점 ICN이라는 점을 놓치면 안된다;

    또한 배열을 파라미터로 활용할 때 주의할 점이
    넘겨주는 파라미터 값이 배열의 경우는 주소를 넘겨주기 때문에
    값이 자꾸 엉킨다. 굳이 사용할꺼면 복사해 줘야하며, 사실 메모리 문제 때문에 안쓰는게 나을 것이다.    

*/