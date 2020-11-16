function solution(n, arr1, arr2) {
   var answer = [];
   
   var fixed1 = arr1.map(a=>{
       let temp = a.toString(2).split("");
       while(temp.length < n) {
           temp.unshift("0");
       }
       return temp;
   })
   var fixed2 = arr2.map(a=>{
       let temp = a.toString(2).split("");
       while(temp.length < n) {
           temp.unshift("0");
       }
       return temp;
   })

   fixed1.map( (nums,index)=>{
       let temp = "";
       for( let i = 0; i<nums.length ; i++ ){
           if(nums[i]*1 === 1 || fixed2[index][i]*1 === 1 ) temp+="#";
           else temp+=" ";
       }
       answer.push(temp);
   })

   return answer;
}
