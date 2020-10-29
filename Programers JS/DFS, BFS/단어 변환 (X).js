function solution(begin, target, words) {
    var answer = -1;
    
     if(words.indexOf(target)===-1 || begin === target) {
        return 0;   
    }
    words.splice(words.indexOf(target),1);
    words.push(begin);
    
    for(let name of words) {   
        var tempWords = words.slice();
        calc(words, 0, target);
    }    
    console.log(words);
    return answer;
    
    function calc(arr, num, now){                
        if(answer!==-1 && num >= answer) return;        
        if(now === begin) answer = num;
        else {                        
            for ( let j = 0; j<arr.length ; j++ ) {   
                console.log(arr.length);
                var tempNum=0;
                for (let i =0; i<arr[j].length ; i++) {
                    if(arr[j][i] === now[i]) tempNum++;                
                }
               
                if( tempNum === arr[j].length-1) {
                    var tempArr = arr.slice();
                    var next = tempArr.splice(j,1);                   
                    num++;
                    
                    console.log(tempArr, num, next);
                    calc(tempArr, num, next);
                }
            }
        }
    }
}

/*
    target에서 begin으로 역행하는 방식을 생각햇는데;
    생각보다 안된다 결국 찾아보는데;
    
    재시도
 */

