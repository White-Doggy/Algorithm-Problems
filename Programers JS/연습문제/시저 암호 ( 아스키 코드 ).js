function solution(s, n) {
  var answer = '';
  var checker, num;
  
  var testing = "Za";
  console.log(testing.charCodeAt(0));
  console.log(testing.charCodeAt(1));
  
  for(var i=0 ; i<s.length ; i++){
      if(s[i]===' '){
          answer+=' ';    
      }
      else {  
          checker = s.charCodeAt(i);
          num = checker + n;
          if((checker >= 97 && num >122) || ( checker <= 90 && num > 90 )){
               answer += String.fromCharCode(num-26);
          }            
          else{
              answer += String.fromCharCode(num);
          }
      }
  }    
  
  return answer;
}


/*

대상 문자열.charCodeAt(인덱스);
String.fromCharCode(아스키코드);
를 통해 아스키 코드 획득, 아스키 코드 기반 문자열 생성을 진행

upper.includes(text) 
비교를 위한 알파벳 배열을 만들고, include 함수를 활용해
대소문자 구분 후 넘겨버리는 방식으로 처리하는 방법도 있었다.

*/