function solution(name) {
  var answer = name.length-1;
  var temp=[];
  
  for (let i=0; i<name.length ; i++) {
      let repeat =0;
      while (name[i]==="A") {
          repeat++;
          i++;
      }
      temp.push(repeat);
  }
      
  answer -= Math.max(...temp);
  
  for( let i =0; i<name.length ; i++) {
      let num = name.charCodeAt(i);
      answer += (num > 78)? 91-num : num-65;
  }    
  return answer;
}


/*

문자의 변형에 대해서는 그냥 아스키 코드 쓰면 되는거라 쉽게 되는데,
이동의 경우가 다른 사람들 찾아봐도 잘 알수가 없다;

단순 이동 횟수에서, A가 겹치는 횟수 만큼 빼면 된다는 의견이 있어 써봤지만
5, 10번에 에러가 발생한다;;;

*/