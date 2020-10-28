function solution(numbers) { var answer = 0; 
    // numbers를 배열로 변환하고 내림차순으로 정렬 
    let a = numbers.split('').sort((a,b)=>b-a); 
    // 최댓값 
    let N = Number(a.join('')); 
    // 에라토스 테네스의 체로 소수 구하기 
    let arr = makePrimeNum(N); for(let i=2; i<=N; i++){ 
        // 소수가 아니면 패스 
        if(arr[i] == false) continue; 
        // 소수면 해당 숫자를 문자열로 바꾸고 배열로 변환 
        let temp = i.toString().split(''); 
        // numbers에 해당 하는 값을 돌면서 temp에도 있으면 temp에서 삭제 
        for(let cn of a){ let idx = temp.indexOf(cn); if(idx > -1) temp.splice(idx,1); } 
        // temp.length가 0이면 numbers에 모두 있는 숫자 이므로 
        answer++ if(temp.length == 0) answer++; } return answer; } 
        
        //에라토스테네스의 체 
        function makePrimeNum(N){ let arr = []; 
            for(let i=2; i<=N; i++){ if(arr[i] == false) continue; 
                for(let k=i+i; k<=N; k+=i){ arr[k] = false; } } return arr; }

출처: https://webigotr.tistory.com/247 [diligent web hacker]


/*
   소수처리야 여러가지 방법이 있겠지만
   문자열에 대해 어떻게 처리하는가 에대한 생각이 안떠올라서 결국 찾아보게 되었는데,

   완전탐색임으로 이를 범위를 설정하고 해당 범위의 소수를 모두 구한 뒤,
   이런 각각의 소수에 대해서 해당 조건에 부합하는지 파악해 처리하게 된다.

*/