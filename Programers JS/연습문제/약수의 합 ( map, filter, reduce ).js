function solution(n) {
  var answer = 0;
  var temp=0;
  for (let i =1; i<=n ; i++) {
      if(n%i===0) answer+=i;
  }
  return answer;
}

/*

헛짓하다가 찾아봤었는데 그냥 나눠떨어지는거 다더하는 사람이 많았음...

특이점으로 map, reduce 쓰는 사람도 많음


map()
인자값: currenValue, index, array
요소를 일괄적으로 변경

var arr = ['foo', 'hello', 'diamond', 'A']
// 각 요소의 글자 길이값 반환
var arr2 = arr.map((v) => v.length)
console.log(arr2)	 // [3, 5, 7, 1]


filter()
요소를 걸러내어 배열로 true/false 반환, 없으면 빈 배열

var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.filter((v) => (v % 5 === 0))
console.log(arr2)	// [15, 395, 400, 3000]


find()
단 하나의 요소만 반환, 여러 개 있으면 처음값만 반환

let arr = [4, 15, 377, 395, 400, 1024, 3000]
let arr2 = arr.find((n) => (n % 5 === 0))
console.log(arr2)	// 15


reduce()
인자값은 callback [, initivalValue]
callback은 previouseValue, currentValue, currentIndex, array
[, initivalValue]는 옵션
reduce()는 위의 map, find, filter 대체 가능

let arr = [9, 2, 8, 5, 7]
let sum = arr.reduce((pre, val) => pre + val)
console.log(sum)	// 31

// map
var arr = ['foo', 'hello', 'diamond', 'A']
var arr2 = arr.reduce((pre, value) => {
    pre.push(value.length)
    return pre
}, [])
console.log(arr2)   // [3, 5, 7, 1]

// filter
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (value % 5 == 0) {
        pre.push(value);
    }
    return pre;
}, []);
console.log(arr2)    // [15, 395, 400, 3000]

// find
var arr = [4, 15, 377, 395, 400, 1024, 3000]
var arr2 = arr.reduce((pre, value) => {
    if (typeof pre == 'undefined' && value % 5 == 0) {
        pre = value;
    }
    return pre;
}, undefined);
console.log(arr2)  // 15

*/