let btn = document.querySelector(".switch-btn")
let video = document.querySelector(".video-container")
let play = document.querySelector(".span")
btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause()
    }else{
        btn.classList.remove("slide");
        video.play()
    }
})
// console.log("play")
// btn.addEventListener("Click",function(){
//     console.log("play")
//     if(play.innerText == "pause"){
//         play.innerText = "play"
//         video.pause()
//     }
//     else{
//         play.innerText = "pause"
//         video.play()
//     }
// })