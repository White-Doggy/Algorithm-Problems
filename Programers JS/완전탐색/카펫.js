function solution(answers) {
    var answer = [];
    
    var answer1=[1,2,3,4,5];
    var answer2=[2,1,2,3,2,4,2,5];
    var answer3=[3,3,1,1,2,2,4,4,5,5];
    
    var score = [0, 0, 0];
    
    answers.map((num,index)=>{
        if(num === answer1[index%5]) score[0]++;
        if(num === answer2[index%8]) score[1]++;
        if(num === answer3[index%10]) score[2]++;
    });
    
    var max = Math.max.apply(null, score);
    
    score.map((num, index)=> {
        if(max === num) answer.push(index+1);
    })
    console.log(answer);    
    return answer;
}

/*

처음에는 숫자 반복에 대한 식을 세우려 했었는데, 위 케이스와 같이 반복되는 패턴이 짧은 경우
그냥 패턴자체를 배열로 해 순환 시키는 방식이 생각할 요소도 적고 간단하다

A : 복잡하게 생각하지 마라

*/