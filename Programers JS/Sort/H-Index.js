function solution(citations) {    
    var answer;
    var temp = citations.sort((a,b) => b-a );
    console.log(temp);
    for(let i =0 ; i<temp.length ; i++ ) {        
        if( temp[i] < i+1 ) {
            answer = i;
            break;
        }
        else if( i === temp.length-1) answer = i+1;
    }        
    return answer;
}

/*

    sort 쓸때는 가능하면 식을 넣어주는게 맞을 것 같다
    숫자라 문제가 없을 것이라 판단했는데, 저기서 또 문제가 발생함;

    ++ for in 구문도 쓰지말자,
    index가 문자열로 처리되서 왜 인식을 못하나 한참을 찾아봄 

*/