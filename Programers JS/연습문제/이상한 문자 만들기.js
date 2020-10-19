function solution(s) {
  var answer = '';
  var checker = 0;
  var upper = s.toUpperCase();
  var lower = s.toLowerCase();
  
  for ( let i = 0 ; i < s.length ; i++ ){
      if(s[i]===' ') {
          checker = 0;
          answer+=" ";
          continue;
      }
      else if (checker%2==0) answer+=upper[i];
      else answer+=lower[i];
      checker++;
  }
  return answer;
}

/*

// 문자열을 대문자로 변환
s = s.toUpperCase();
document.write(s + '<br />');
// 출력 결과: ABC ABCD ADOBE PHOTOSHOP


// 문자열을 소문자로 변환
document.write(s.toLowerCase() + '<br />');
// 출력 결과: abc abcd adobe photoshop



문자열 뿐만 아니라 문자열 내에서 단일 대상에도 적용가능
결과 값으로 해당 대상만 처리되어 반환
ex)

s[0].toUpperCase();

*/