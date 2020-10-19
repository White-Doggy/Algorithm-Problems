function solution(s){
    var answer = true;
    var p = 0, y=0;
    
    for ( var c of s ) {
        if(c=="y" || c=="Y") y++;
        else if(c=="p" || c=="P") p++;
    }
    
    if(p!==y) answer=false;
    
    return answer;
}

/*
이렇게 복잡하게 하지않고
uppercase().split().length() 를 통해 갯수를 확인하고 비교하는 방법으로 처리하는 해결책이 있더라
*/