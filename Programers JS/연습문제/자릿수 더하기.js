function solution(n)
{
    var answer = 0;
    var num=n;
    
    do {
        answer += num % 10;
        num = parseInt(num / 10);
    } while(num!=0)
    
    return answer;
}

/*

function solution(n)
{
    var answer = 0;

    n = "" + n;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(var i = 0 ; i < n.length ; i ++){
        answer += n.charAt(i) * 1;
    }

    return answer;
}

  문자열에 대한 연산을 통해 문자열로 바꾸고,
  해당 자리수 문자열에 대해 곱셈으로 처리하는 간단한 방식도 있었다;

*/