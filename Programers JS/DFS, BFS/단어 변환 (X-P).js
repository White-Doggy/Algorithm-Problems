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

function solution(begin, target, words) {
    var answer = 0;    
    var result = [];
    
    // 최초 확인후 처리
    if(words.indexOf(target)===-1) return 0;
    
    calc(begin, words, result, 0);    
    return answer = Math.min.apply(null, result);
    
    
    function calc (now, arr, result, num) {        
        let temp =[];
        // 확인        
        if(now === target) {            
            result.push(num);
        }        
        
        // 변화 가능 체크
        arr.map(s=>{
            let t = s.split('');
            let count = t.reduce((prev, a,index)=>{                
                if(a!==now[index]) prev++;      
                return prev;
            },0)
            if(count === 1) temp.push(s);
        });               
        for(let i =0; i<temp.length; i++) {            
           let nextArr = arr.slice();
           nextArr.splice(nextArr.indexOf(temp[i]),1);        
           calc(temp[i], nextArr, result, num+1);
       }
    }
}

/*
  진짜 별 이상한 부분에서 문법적으로 안맞다고 뜨는 경우가 너무 많다;
*/