function solution(n, costs) {
    var answer = 0;
    var costTemp = costs.slice('');
    var arr = new Array(n);
    arr.fill(0);        
    costTemp.sort((a,b)=> a[2]-b[2]);    
    
    for(let i = 0; i<costTemp.length ; i++) {
        if(arr[costTemp[i][0]]===0 || arr[costTemp[i][1]]===0) {
            answer+=costTemp[i][2];
            costTemp.slice(i,1);            
            arr[costTemp[i][0]]=1;
            arr[costTemp[i][1]]=1;            
        }        
    }    
    return answer;
}

/*
    전에 알고리즘 강의 때인가? 네트워크 강의 때인가
    최적 경로를 더하면 최소 경로의 값이 나온다고 했었는데 
    다른 조건을 잘못 기억하고 있는 듯 하다.

    크루스칼 알고리즘 == 최적화된 경로를 계속 추가해 완료시키는 방법;

    var cycleTable = Array(n).fill(0).map((element, index)=> index);
*/

function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=> a[2]-b[2])
    // 정렬 

    var cycleTable = Array(n).fill(0).map((element, index)=> index)
    // 비교용 배열

    while(!isOne(cycleTable)){
        // 모두 똑같은지 확인하는 함수
        var current = costs.shift()
        var one = current[0]
        var the_other = current[1]
        var cost = current[2]

        if(cycleTable[the_other] !== cycleTable[one]){
            cycleTable = changeCycleTableNumber(cycleTable, one, the_other)
            // 비교 배열을 동일하게 만드는 함수
            answer+=cost
        }
    }
    return answer;
}

function changeCycleTableNumber(cycleTable, one, the_other){
    var cycleTheOther = cycleTable[the_other]
    var cycleOne = cycleTable[one]
    for(var i=0; i<cycleTable.length; i++){
        if(cycleTable[i] === cycleTheOther) cycleTable[i] = cycleOne
    }
    return cycleTable 
}
    
function isOne(cycleTable){
    for(var i=1; i<cycleTable.length; i++){
        if(cycleTable[i-1] !== cycleTable[i]) return false 
    }
    return true 
}

/*
뭐가 문제인지 못찾겠어서 결국 찾아봤는데,
크루스칼과 거의 다를게 없다;

내가 빼먹은건 방문 했떤걸 전부 0으로 했다는 문제점인데,
이걸 고치면 이코드와 큰차이가 없는데도 불구하고 에러가 나온다.

나중에 다시 해볼 필요가 있다.

Array(n).fill(0).map((element, index)=> index);

이건 활용할 필요가 있다.
*/