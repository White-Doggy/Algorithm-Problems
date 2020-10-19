function solution(seoul) {
    var answer = '';
    for(var i in seoul){
        if(seoul[i]==="Kim"){
            answer = "김서방은 "+i+"에 있다";
            break;
        }
    }
    return answer;
}

/*

function findKim(seoul){
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
}

본래 stirng에서 해당 문자열 index를 찾는 함수인데,
배열에 대해서도 적용가능하며, 해당 인덱스를 찾아준다;

 */
