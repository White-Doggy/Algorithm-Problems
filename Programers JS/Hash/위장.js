function solution(clothes) {
    var answer = 0;
    var cloth_index= [];
    var counting=[];
    
    clothes.map( data => {
                if(!cloth_index.find( cloth => data[1]===cloth )) cloth_index.push(data[1]);}                
               )
    
    
    for(let index in cloth_index) {
        let count = clothes.reduce((prev,cloth)=>{
            if(cloth_index[index]===cloth[1]) prev++;
            return prev;
        },0)
        counting[index] = count+1;
    }
    
    answer = counting.reduce((calc,num)=>{
        return calc*num;
    },1);
    
    return answer-1;
    
}

/*
    그냥 총 종류수 + 1 로 안입는 케이스를 추가시키고
    최종 가지수에서 -1 로 완전히 안입는 경우를 빼면 되는 내용이긴 한데,
    코드가 너무 장황하다.
*/


function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
}

/*
    다른 사람 풀이인데, 굳이 번거롭게 인덱스 찾고 확인하고 따로 카운팅 배열 만들고 하는게 아닌
    obj[arr[1]] = (obj[arr[1]] || 0) + 1; 으로
    의상 종류 타입을 인덱스로 하는 배열에, 만약 인덱스 값이 존재하면 해당값에다 더해가는 방식으로 
    처리하면 매우 간단했다;
*/