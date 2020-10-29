function solution(numbers, target) {
    var answer = 0;
    calc(0,0);
    return answer;
    
    function calc(sum, index) {
        if(index === numbers.length) {
            if(sum === target) answer++;
        }
        else {
            calc(sum+numbers[index],index+1);
            calc(sum-numbers[index],index+1);            
        }
    }
}

/*

    문제 자체를 잘못 이해해서 찾아보게된 문제;
    제공되는 배열에 대해 전부 사용하고, 순서조차도 고정이며
    바뀌는건 + - 뿐임으로 트리 탐색을 통해 모든 대상을 탐색해도 크게 연산에 부하가 걸리지않았다.

*/