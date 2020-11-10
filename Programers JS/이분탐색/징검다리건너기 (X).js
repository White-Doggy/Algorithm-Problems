/* 또 못품 */

def solution(distance, rocks, n): 
    rocks.sort() rocks.append(distance) 
    answer = 0 l, r = 0, distance 
    while l <= r: 
        # print("l, r =>", l, r) prevRock, removeRock = 0, 0, 
        cand = float('inf') minDistance = int((l+r)/2) 
            for i in range(len(rocks)): 
            if minDistance > rocks[i] - prevRock: 
                removeRock += 1 
                # print("removeRock") 
            else: 
                cand = min(cand, rocks[i] - prevRock) 
                prevRock = rocks[i] 
        if removeRock <= n: 
            l = minDistance+1 
            answer = cand 
        elif removeRock > n: 
            r = minDistance-1 
return answer

출처: https://programming119.tistory.com/137 [개발자 아저씨들 힘을모아]

/*

가져온 코드는 파이썬이지만 알아먹는데 문제는 없음

이 문제도 결과적으로 최종 목표를 기준값으로 해서 최대 값과 최소값 사이에서
이분 탐색을 진행하는 과정으로 처리됨;

이건 익숙해지지 않으면 계속 못찾을 것같은 내용

*/