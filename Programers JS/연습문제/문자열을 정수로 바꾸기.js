function solution(s) {
    var answer=0;
    
    s[0] === "+" ? answer = parseInt(s.slice(1)) : 
    s[0] === "-" ? answer = parseInt(s.slice(1)) * -1 :
    answer = parseInt(s);
    
    return answer;
}

/*

function strToInt(str){
  return str/1
  }

  개짓거리 할필요 없이 그냥 문자열에 사칙연산 들어가면 자동 형변환 시켜버린다고 한다...
*/