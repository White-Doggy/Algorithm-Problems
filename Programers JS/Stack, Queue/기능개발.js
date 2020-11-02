function solution(progresses, speeds) {
    var answer = [];
    var checker = 0;
    
    while(progresses.length) {
        
        progresses = progresses.map((num,index)=>{
        return num + speeds[index];            
        })
        
        while(progresses[0]>=100) {
            progresses.shift();
            speeds.shift();
            checker++;
        }
        
        if(checker !== 0) {
            answer.push(checker);
            checker = 0;
        }
    }        
    
    return answer;
}


