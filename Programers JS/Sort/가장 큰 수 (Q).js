//1차 실패

function solution(numbers) {
    var answer = '';    
    var arr = numbers.map(a=>a+'').sort().reverse();    
    
    for(let i = 0; i < arr.length-1 ;i++) {
       for(let j = 0 ; j < arr[i].length ; j++) {
           let compare = j >= arr[i+1].length ? arr[i+1][arr[i+1].length-1] : arr[i+1][j];
           if ( arr[i][j] > compare ) break;
           else if (  arr[i][j] < compare ) {
               let temp = arr[i];               
               arr[i] = arr[i+1];
               arr[i+1] = temp;
           }           
       }
    }  
    
    return answer = arr.join('');
}

/*

아스키 코드 전환 후 정렬시 얼추 비슷하게 나오는 것을 활용해 해결해 보려했는데 안됨

반례케이스 추가

[10, 101] 10110
[1, 11, 111, 1111] 1111111111
[0, 0, 0, 0, 0, 0] 0


 */

function solution(numbers) {
    
    var answer = numbers.map(c=> c + '').
    				sort((a,b) => (b+a) - (a+b)).join('');
    
    return answer[0]==='0'? '0' : answer;
}

/*
    저 헛짓거리가 필요없는게,
    문자열임을 활용한 (b+a) - (a+b)의 비교로 매우 간단하게 처리가 가능했었다...

    그리고 전부 0인 경우만을 위한 마지막 리턴처리;;;
*/