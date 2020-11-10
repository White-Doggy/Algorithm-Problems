function solution(triangle) {
    var answer = 0;
    var checker = new Array(triangle.length).fill(-1);
        
    checking(0,0,0);
        
    return Math.max.apply(null,checker);
    
    function checking( location, num, step) {
        // 현재 단계값 더하기
        let sum = num + triangle[step][location];                
        
        // 최종단계 경우 반환
        if(step === triangle.length-1 ) {              
            checker[location] = Math. max(sum,checker[location]);
        }
        else {
            // 최종단계가 아닌경우 연산 반복
            checking( location, sum, step+1);
            if(location !== (triangle[step+1].length-1)) checking( location+1, sum, step+1);
        }
        
    }
}

/*
    1차, 그냥 다 더하는 방식으로 비교하며 처리하였는데,
    시간초과
*/

function solution(triangle) {
    var answer = 0;
    var checker = triangle[triangle.length-1].slice();
        
    checking(triangle.length-1);
        
    return Math.max.apply(null,checker);
    
    function checking(step) {
        //최종적으로 연산되면 반환
        if(step === 0) return checker[0];
        
        // 좌우 비교 후 큰쪽을 윗 단계와 더함
        else {
            for(let i = 0; i<triangle[step-1].length ;i++) {
                checker[i] = triangle[step-1][i] + Math.max(checker[i],checker[i+1]);
            }
            checking(step-1);
        }
    }
}

/*

    역으로 하단부터 상단으로 이동하며 연산 횟수를 줄임으로써 해결됨

*/