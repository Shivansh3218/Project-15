let incre = document.getElementById("inc")
let display = document.getElementById("display")
let decrement = document.getElementById("dec")
let count = 0
display.innerText =count
function bomb(){
     count++
    display.innerText =count
}
function bomb2(){
     count--
    display.innerText =count
}
function bomb3(){
     count =0
    display.innerText =count
}