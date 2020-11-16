function solution(s) {
    var result
	
    if((s.length === 4 || s.length === 6) && (parseInt(s)===s*1)){
        result = true
    } else
        result = false
    return result;    
}

// 소수점도 문자로 취급해서 isNaN 으로는 풀리지 않는 문제 ;;;