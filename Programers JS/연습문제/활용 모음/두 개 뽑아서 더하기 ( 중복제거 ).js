function solution(numbers) {
    var answer = [];
    for( let i =0; i<numbers.length-1;i++) {
        for(let j = i+1; j<numbers.length;j++) {
            answer.push(numbers[i]+numbers[j]);            
        }
    }
    answer = Array.from(new Set(answer)); 
    answer.sort((a,b)=>a-b);
    
    return answer;
}

// 중복 제거 방법 

/*

const arr = [2,1,5,1,6,5,2,3];
    
// 1. Set
// Set을 사용하면 유니크한 Set객체를 반환합니다.
// Set객체를 다시 Array.from으로 배열로 변경합니다.

const set = Array.from(new Set(arr)); // [2, 1, 5, 6, 3]


// 2. reduce
// Array.includes(value) : value가 Array배열에 존재하는지 판단해 true, false를 반환합니다.

arr.reduce((acc,curr) => acc.includes(curr) ? acc : [...acc,curr],[]);  // [2, 1, 5, 6, 3]


// ES6를 사용 못 할 때

// 1. reduce, indexOf
arr.reduce(function(acc,curr,index){
    acc.indexOf(curr) > -1 ? acc : acc.push(curr);
    return acc;
},[]); // [2, 1, 5, 6, 3]

// 2. filter, indexOf
arr.filter(function(a, i, self){
	return self.indexOf(a) === i;
}); // [2, 1, 5, 6, 3]

*/