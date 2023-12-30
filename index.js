/// document.getElementById("count").innerText = 5

// let count = 5

// console.log(count)

// function increment(){
//     console.log("the button was clicked")
// }

// let lap =23
// let lap2 = 25
// let lap3 = 33

// function lapTime(){
//     total=lap+lap2+lap3
//     console.log(total)
// }

// lapTime()

// let lc = 0

// function lapCompleted(){
//     lc=lc+1
//     console.log(lc)
// }
// lapCompleted()
// lapCompleted()
// lapCompleted()

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count =0

function increment(){
    count = count + 1
    countEl.textContent = count
    //console.log(count)
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
    
}