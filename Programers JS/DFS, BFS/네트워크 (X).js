function solution(n, computers) {
    var answer = 0;
    
    let visited = new Array(n).fill(false);
    
    for(let i =0; i< n; i++) {
        if(!visited[i]){
            dfs(i);
            answer++;
        }
    }
    
    function dfs (num) {
        visited[num] = true;
        for(let i = 0; i<n; i++) {
            if(i !== num && computers[num][i] && !visited[i]) dfs(i);
        }
    }
    return answer;
}

/*

    문제 좀 잘 읽자;;
    문제 자체가 기존 연결 상태를 바탕으로 열결 가지수를 구하는 문제인 줄 알았는데,

    연결 상태는 그냥 고정이고
    독립된 네트워크는 몇개인가에 대해 묻는 문제였다;

    괜히 씨름하다가 시간만 날림

*/