function solution(n, lost, reserve) {
  var answer = 0;
  var checker = new Array (n);        
  checker.fill(1);
  
  reserve.map((b)=>checker[b-1]++);
  lost.map((a)=>checker[a-1]--);
  
  for(let i in checker) {
      if( checker[i]===0 && checker[i-1] === 2) {
          checker[i-1]--;
          checker[i]++;
      }
      else if( checker[i]===0 && checker[i+1] === 2) {
          checker[i+1]--;
          checker[i]++;
      }
  }
  
  answer = checker.reduce((pre, num)=>{
      if(num >= 1) pre++;
      return pre;
  },0)
  
  return answer;
}


/*
function solution(n, lost, reserve) {
    var answer = 0;
    var ans = [];
    for(var i=0;i<=n;i++){ans.push(1);}
    for(var i=1;i<=n;i++){
        for(var j=0;j<lost.length;j++){
            if(i === lost[j]) ans[i] = 0;
        }
        for(var j=0;j<reserve.length;j++){
            if(i === reserve[j]) ans[i] += 1;
        }
    }
    for(var i=1;i<=n;i++){
        if(ans[i]===0 && ans[i-1]===2){
            ans[i-1] = 1;
            ans[i] = 1;
        }else if(ans[i]===0 && ans[i+1]===2){
            ans[i+1] = 1;
            ans[i] = 1;
        }
    }
    for(var i =1;i<=n;i++){
        if(ans[i]>0) answer++;
    }
    return answer;
}

  다른사람 코드인데, 내용자체는 아무리봐도 내꺼랑 같은데 왜인지 모르겠다.
*/