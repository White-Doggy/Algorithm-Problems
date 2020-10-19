function solution(arr)
{
    var answer = [];
    var temp=-1;
    for ( var num of arr ){
        if(temp !== num){
            answer.push(num);        
            temp=num;
        }      
    }
    return answer;
}

/*
filter을 활용해 처리하는 방법도 있음
*/