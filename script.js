const player = document.getElementById("play");
const songs = document.querySelectorAll(".img-songs");
let currentSong = '';

songs.forEach(img =>{
    img.addEventListener("click",()=>{
        console.log("The Spotify")
        let songPath = img.dataset.audio;
        if(currentSong === songPath){
            if(player.paused){
                player.play();
            }else{
                player.pause();
            }
            return;
        }
        player.src = songPath;
        player.play();
        currentSong = songPath;
    })
} );