function solution(operations) {
    var answer = [];
    var queue = [];
    
    while(operations.length !==0) {
        let num = parseInt(operations[0].substring(2));
        if( operations[0][0] === "I" ) {            
            queue.push(num);
        }
        else {
            if(operations[0][2]==="-") {                
                let min = Math.min.apply(null,queue);
                queue.splice(queue.indexOf(min),1);
            }
            else {
                let max = Math.max.apply(null,queue);
                queue.splice(queue.indexOf(max),1);
            }
        }
        operations.shift();
    }
    
    console.log(queue);
    if(queue.length === 0) { 
        answer[0]=0;
        answer[1]=0;
    }
    else {
        answer.push(Math.max.apply(null,queue));
        answer.push(Math.min.apply(null,queue));
    }

    return answer;
}

// 맞긴 맞는데

function solution(arg) {
    var list = [];
    arg.forEach(t=>{
        if(t[0] === 'I'){
            list.push(+(t.split(" ")[1]));            
        }
        else{
            if(!list.length) return;

            var val = (t[2] === '-' ? Math.min : Math.max)(...list);
            var delIndex = list.findIndex(t=> t ===  val);

            list.splice(delIndex, 1);
        }
    })

    return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
}

// 훨씬 간결한 코드;