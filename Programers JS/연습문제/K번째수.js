// K번째수

function solution(array, commands) {
    var answer = [];
    
    for( var nums of commands ){
        var temp = array.slice(nums[0]-1,nums[1]);
        temp.sort((a,b)=>a-b);
        answer.push(temp[nums[2]-1]);
    }    
    return answer;
}

// slice 는 언급에서 1씩 빼야 맞다.

/*

function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}

다른 예
풀어적은 내용을 한줄로 압축해 작성;;;

*/