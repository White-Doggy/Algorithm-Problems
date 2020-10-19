function solution(s) {
    var answer = s.split('').sort(function(a,b){
        return (a<b) - (a>b);
    }).join('');
    return answer;
}

/*
단순 문자열은 split으로 쪼갠 뒤 sort하고 join할 필요가 있었다.

function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

sort 자체가 오름차순이기 때문에 sort후 reverse 하는 간단한 방법도 가능했다.
*/