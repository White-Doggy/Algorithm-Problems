// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
// var size = input.shift();

input = [5,5,2,3,4,1]

input.sort((a,b)=>a-b);
input.map(a=>console.log(a));

/*

백준 알고리즘 테스트용
node를 안배워서 정확한 input 내용 같은건 모르겠으나,
fs에 입력 받고 문자열로 바꾼 뒤, trim으로 빈공간을 앞뒤 빈공간을 지우고 \n 기준으로 나눈 뒤 배열로 생성
++ 맨 앞 수는 배열 크기를 의미하는 듯

백준은 테스팅이 없으니, 직접 넣는 수 밖에;

*/