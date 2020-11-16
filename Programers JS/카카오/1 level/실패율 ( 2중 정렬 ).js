function solution(N, stages) {
   var answer = [];
   var trying = new Array(N+1).fill(0);
   var fail = new Array(N+1).fill(0);
   
   stages.map(a=>{
       for(let i = 1; i<= a ;i++) {
           if(i>N)break;
           trying[i]++;
           if(i===a) fail[i]++;
       }
   })
   
   var calc = new Array(N+1).fill(0);
   for(let j = 1; j<=N ; j++){
       if(trying === 0 || fail === 0) calc[j] = [j,0];
       else calc[j] = [j,fail[j]/trying[j]];
   }

   calc.shift();    
   
   // 2중 sort가 가능하다;
   calc.sort((a,b)=>{
       if(a[1]>b[1]){
           return -1;
       }else if (a[1]<b[1]){
           return 1;
       }else{
           if(a[0]>b[0]){
               return 1;
           }else{
               return -1;
           }
       }
   })

   answer = calc.map(a=>a[0])
   
   return answer;
}


// 다 풀어놓고, sort 하는 부분에서 막혀서 찾아봤는데
// sort에 대해 2중으로 걸어주면 해당 처리가 가능하더라;;;