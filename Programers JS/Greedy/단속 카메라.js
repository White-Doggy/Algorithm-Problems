function solution(routes) {
    var answer = 0;
    var arr = routes.slice();

    while(arr.length){       
        var minMax = arr[0][0];
        var target = 0;
        for( var i =0; i<arr.length ; i++) {
            if( minMax < arr[i][0] ) {
                minMax=arr[i][0];
                target=i;
            }
        }
        arr.splice(target,1);
        
        for(var j =0; j<arr.length ; j++) {
            if(arr[j][1]>=minMax){
                arr.splice(j,1);
                j--;
            }
        }
                
        answer++;
    }
          
    return answer;
}

/*

이게 왜 맞누;;;

생각 하다보니,
각 객체 값 중 작은 값들 가운데 가장 큰 값보다
나머지 객체의 큰 값이 위에서 고른 값보다 크다면, 
해당 객체들은 모두 해당된다는 것을 바탕으로 처리

만약 반대 경우로 처리해도 됬을지는 의문


온갖 방법이 다있던데 솔직히 복잡해서 모르겠다...
*/