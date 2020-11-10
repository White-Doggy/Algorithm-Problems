/* 못품 */

const solution = (n, times) => {
    let answer = Infinity;
  
    times.sort((a, b) => {
      return a - b;
    });
    let left = 1;
    //가장 최대의 시간
    let right = times[times.length - 1] * n;
  
    //가장 최소의 시간을 찾을때까지 계속 탐색한다.
    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      let cnt = 0;
      for (let i = 0; i < times.length; i++) {
        cnt += parseInt(mid / times[i]);
        if (cnt >= n) {
          answer = Math.min(answer, mid);
        }
      }
      if (cnt >= n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return answer;
  };

/*
   생각 자체를 잘못해서 못품
   이분 탐색 문제라고 하길래 어떻게 이게 이분인가 싶어서 결국 찾아보게 됐는데

   각각의 소요 시간이 아니라, 소요 시간을 기준으로 n을 달성하는가 아니면 초과 하는가를 통해
   이분탐색을 진행하여 바로 최소 요구시간을 찾는 문제;
*/