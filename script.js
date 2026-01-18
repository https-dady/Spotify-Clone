const player = document.getElementById("play");
const songs = document.querySelectorAll(".img-songs");
const playBtn = document.querySelector(".play")
const pauseBtn = document.querySelector(".pause")
const songPlayed = document.getElementById("songPlayed");
const range = document.getElementById("currentDuration");
let currTimeStamp = document.querySelector(".currTimeStamp");
let totalTimeStamp = document.querySelector(".totalTimeStamp");
let currentSong = '';

songs.forEach(img =>{
    img.addEventListener("click",()=>{
        console.log("The Coder Tarun")
        let songPath = img.dataset.audio;
        let imgPath = img.dataset.img;
        if(currentSong === songPath){
            if(player.paused){
                player.play();
                playBtn.style.display = "none";
                pauseBtn.style.display = "inline"
            }else{
                player.pause();
                playBtn.style.display = "inline";
                pauseBtn.style.display = "none"
            }
            return;
        }
        player.src = songPath;
        player.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline"
        currentSong = songPath;
        songPlayed.src = imgPath;
    })
    playBtn.addEventListener("click",()=>{
        player.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "inline"
    })
    pauseBtn.addEventListener("click",()=>{
        player.pause();
        playBtn.style.display = "inline";
        pauseBtn.style.display = "none"
    })

} );


player.addEventListener("timeupdate",()=>{
    range.max = player.duration || 0;
    range.value = player.currentTime ||0;
    currTimeStamp.innerHTML = totalTimeOut(player.currentTime);
    totalTimeStamp.innerHTML = totalTimeOut(player.duration);
});
function totalTimeOut(sec){
    if(isNaN(sec)) return "00:00";
    let m = Math.floor(sec/60);
    let s = Math.floor(sec%60);
    return `${m}:${s < 10 ? "0" + s : s}`;
}

range.onchange = function(){
    player.currentTime = range.value;
    player.play();
}
range.oninput = function(){
    player.currentTime = range.value;
    player.play();
}