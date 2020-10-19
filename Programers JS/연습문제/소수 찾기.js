function solution(n) {
    var answer = 0;
    var checker=[];
    for(var i=0; i<n+1 ;i++){
        checker.push(1);
    }       
    
    checker[0]=0;
    checker[1]=0;        
    
    for(var j=2 ; j<=n; j++){
        if(checker[j]===1){
            for( var k = 2; k*j <= n ; k++){
                checker[k*j] = 0;
            }
        }
    }
    
    answer = checker.reduce(function(sum,num){
       return sum+=num; 
    }, 0)
    
    return answer;
}

/*

아리스토텔레스의 체였나 뭐였나; 그 방식

function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}

방식은 같은 방식인데,
Set을 활용해 배열에 대한 낭비가 없고

실제로 확인해봐야 하는 값은 제곱근인 Math.sqrt 라는 것을 보여줌

*/