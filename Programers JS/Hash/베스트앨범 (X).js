function solution(genres, plays) {
    var answer = [];
    var genresAll = Array.from(new Set(genres));
    var counter=[];
    var rank=[];
    var arr = [];        
    
    for( let index in genres ) {
        arr[index]={genres:genres[index], play:plays[index], num:index};
    }
    arr.sort((a,b)=> b.play - a.play );    
    console.log(arr);
    
    for( let index in genresAll) {
        let count = 0;
        for( let value of arr ) {
            if(value.genres===genresAll[index]) count += value.play;
        }         
        counter.push(count);
    }

    while(counter.length!=0) {
        let max = Math.max.apply(null,counter);
        rank.push(genresAll[counter.indexOf(max)]);
        counter.splice(counter.indexOf(max),1);
    }
    
    for(let g of rank) {
        let temp = -1;
        let num = 0;
        for ( let i in arr){
            if(arr[i].genres===g) {
                if(arr[i].play === ;)
            }
        }
    }
    
    return answer;    
}

/*

중도 포기; 
너무 복잡하게 하고있다

*/


function solution(genres, plays) {
    let answer = [];
    genres = genres.map((genre, index)=>{
        return {
            genre,
            index,
            playCount : plays[index]
        }
    });

    // 총 횟수 장르 배열 생성
    let genrePlayCount = [];
    genres.map(song=>{
        let thisGenre = genrePlayCount.find(genrePlay=>genrePlay.genre===song.genre);
        if(!thisGenre) {
            genrePlayCount.push({
                genre : song.genre,
                totalPlayCount : song.playCount
            });
        }
        else {
            thisGenre.totalPlayCount+=song.playCount;
        }
    })

    genrePlayCount.sort((a,b)=>b.totalPlayCount-a.totalPlayCount);



    for(let i=0; i<genrePlayCount.length; i++) {
        let currentGenre = [];
        let thisGenre = genrePlayCount[i].genre;
        genres.map(song=>{
            if(song.genre===thisGenre){
                currentGenre.push(song);
            }
        })
        currentGenre.song((a,b)=>b.playCount-a.playCount);
        answer.push(currentGenre[0].index);
        if(currentGenre.length>1){
            answer.push(currentGenre[1].index);
        }
    }
}

/*

다른 사람 답변
결국 방식은 생각하던 방식과 같은데, 나는 구현 자체를 끝까지 못해서 이런 결과;
괜히 객체로 처리하다보니까 sort라던가 안먹히는게 생기더라
나중에 다시해봐야함;

*/