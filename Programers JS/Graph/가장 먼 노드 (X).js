function solution(n, edge) {
    var answer = 0;
    var checker = new Array(n+1).fill(0);
    
    edge.sort((a,b)=> a[0]-b[0]);   
    edge.map((arr)=>{
        arr.sort((a,b)=>a-b);
    })
    
    edge.map((a)=>{
        checker[a[1]] === 0 ? checker[a[1]]=checker[a[0]]+1 : Math.max(checker[a[0]],checker[a[1]])+1;
    })
    console.log(checker);
    
    let max = Math.max.apply(null,checker);
    checker.map(num=>{if(num===max)answer++});
    
    return answer;
}

// 1차 실패
// 기본 테스트 케이스, 실행케이스 1개만 맞음;


function solution(n, edge) {
    var answer = 0;
    var checker = new Array(n+1).fill(-1);
    checker[0] = 0;
    checker[1] = 0;
    edge.map((arr)=>{arr.sort((a,b)=>a-b);});
    
    let node = [1];
    
    while(node.length!==0) {
        let now = node.shift();
        edge.map(a=>{
            if(a[0]===now && checker[a[1]]===-1) {
                checker[a[1]] = checker[now]+1;
                node.push(a[1]);
            }
        })
    }    
    console.log(checker);
    let max = Math.max.apply(null,checker);
    checker.map(num=>{if(num===max)answer++});
    
    
    return answer;
}

// 2차 
// 또 안맞음;;;


const solution = (n, edge) => {
    const visited = new Array(n + 1).fill(-1);
    const queue = [1];
    visited[0] = 0;
    visited[1] = 0;
    //모든 노드를 방문할때까지 계속한다.
    while (edge.length !== 0) {
      //방문한 노드를 큐에서 뺀다.
      const Node = queue.shift();
      //edge를 순회하며 다음 방문할 노드를 찾는다.
      for (let i = 0; i < edge.length; i++) {
        //방문할 노드가 있다면
        if (edge[i].includes(Node)) {
          const filter = edge[i].filter((e) => e !== Node);
          //이미 방문했던 노드라면 엣지를 그냥 skip한다.
          if (visited[filter[0]] !== -1) {
            edge.splice(i, 1);
            i--;
            continue;
          }
          //방문하지 않았던 노드라면 노드를 방문해준다.
          queue.push(filter[0]);
          visited[filter[0]] = visited[Node] + 1;
          edge.splice(i, 1);
          i--;
        }
      }
    }
    const maxNum = Math.max(...visited);
    return visited.filter((e) => e === maxNum).length;
  };


/*

결국 찾아본 코드인데,
2번째 시도 방법과 유사하다.

bfs로 탐색하는건 동일한데 왜 내코드는 틀린건지 봐도 헷갈린다;

*/