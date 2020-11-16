function solution(a, b) {
    var answer = 0;
    a.map((num,index)=>{
        answer+=num*b[index];
    })
    return answer;
}