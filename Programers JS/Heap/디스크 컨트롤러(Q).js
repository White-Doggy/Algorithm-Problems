function solution(jobs) {
    var answer = 0;
    var jobsNum = jobs.length;
    jobs.sort((a,b)=>a[0]-b[0]);    
    
    var queue = [];
    var time = 0;
    while(1) {
        // 시간 기반 queue 삽입
        jobs = jobs.reduce((arr,num)=>{
               if(num[0]<=time) {
                   queue.push(num);
                   return arr;
               }
               else {                
                   arr.push(num);
                   return arr;
               }        
        },[])
        
        // 빈 경우 처리
        if(queue.length === 0 && jobs.length !== 0) {
            queue.push(jobs.shift());
            time = queue[0][0];
        }
        
        // 큐 정렬
        queue.sort((a,b)=>a[1]-b[1]);    

        let now = queue.shift();
        time = time + now[1];
        answer += (time - now[0]);       
        
        if(jobs.length === 0 && queue.length === 0) break;
    }
        
    return parseInt(answer / jobsNum) ;
}


// 큐에 넣고 정렬하면서 하나씩 처리하는 형태로 구현
// 그러나 8, 10번 케이스에 에러 발생


const solution = (jobs) => {
    let answer = 0,
      j = 0,
      time = 0;
    jobs.sort((a, b) => {
      return a[0] - b[0];
    });
  
    const priorityQueue = [];
    while (j < jobs.length || priorityQueue.length !== 0) {
      // queue 에 넣음  
      if (jobs.length > j && time >= jobs[j][0]) {
        priorityQueue.push(jobs[j++]);
        priorityQueue.sort((a, b) => {
          return a[1] - b[1];
        });
        continue;
      }

      // queue 처리
      if (priorityQueue.length !== 0) {
        time += priorityQueue[0][1];
        answer += time - priorityQueue[0][0];
        priorityQueue.shift();
      } else {
        time = jobs[j][0];
      }
    }
    return parseInt(answer / jobs.length);
  };

  /*
    다른사람 코드
    구동 자체는 거의 똑같은데 이쪽은 문제가없다;
  */ 