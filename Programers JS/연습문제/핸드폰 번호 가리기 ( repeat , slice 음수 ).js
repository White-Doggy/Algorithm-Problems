function solution(phone_number) {
  var answer = '';
  var arr = phone_number.split('');
  for( let index in arr ) {
      if( index < arr.length-4 ) answer+="*";
      else answer+=arr[index];
  }
  return answer;
}

/*
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

repeat 와 slice 의 음수를 활용 할 수 있다.

*/