function solution(board, moves) {
   var answer = 0;
   var queue = [];
   
   while(moves.length > 0) {
       let now = moves.shift()-1;        
       
       for(let i = 0 ; i < board.length ; i++) {
           if(board[i][now]!==0) {
               queue.push(board[i][now]);
               board[i][now]=0;                
               break;
           }            
       }
       
       if(queue.length >= 2 && queue[queue.length-1]===queue[queue.length-2]) {            
           queue.pop();
           queue.pop();
           answer = answer+2;
       }
   }
   
   return answer;
}