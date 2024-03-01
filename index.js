const inputTime = document.getElementById("input-time")
const addButton = document.getElementById("add-button")
const thirtyButton = document.getElementById("thirty")
const hourButton = document.getElementById("hour-button")
const hourContainer = document.getElementById("hour-container")
const resetButton = document.getElementById("reset-button")
const titlePart = document.getElementById("title-part")
let myTime 


let totalTime 


addButton.addEventListener("click",function(){
    let inputNum = Number(inputTime.value)
    totalTime += inputNum
    localStorage.setItem("totalMin",JSON.stringify(totalTime))
    myTime = timeConvert(totalTime)
    localStorage.setItem("currentTime",myTime)
    hourContainer.innerHTML = localStorage.getItem("currentTime")
    checkTime(totalTime)
})

resetButton.addEventListener("click",function(){
    myTime = "00:00"
    totalTime = 0
    localStorage.setItem("totalMin",JSON.stringify(totalTime))
    hourContainer.innerHTML = myTime
    inputTime.value=""
    localStorage.clear()
    titlePart.innerText = "Current Hours"
})

thirtyButton.addEventListener("click",function(){
    totalTime += 30
    localStorage.setItem("totalMin",JSON.stringify(totalTime))
    myTime = timeConvert(totalTime)
    localStorage.setItem("currentTime",myTime)
    hourContainer.innerHTML = localStorage.getItem("currentTime")
    checkTime(totalTime)

})
hourButton.addEventListener("click",function(){
    totalTime +=60
    localStorage.setItem("totalMin",JSON.stringify(totalTime))
    myTime = timeConvert(totalTime)
    localStorage.setItem("currentTime",myTime)
    hourContainer.innerHTML = localStorage.getItem("currentTime")
    checkTime(totalTime)
})

function timeConvert(n){
    console.log(totalTime)
let minutes = n % 60 //This calculates the remaining minutes after converting the 
//inputed number "n" into whole hours. the % operator gives the remainder when "n" is divided by 60, which is how many minutes in an hour.

let hours = (n - minutes)/60 

//this calculates the number of whole hours by subtracting the remaining minutes we got before
/*
To understand
First in (n - minutes) this parts calculates the total number of minutes 
minus the Remaining minutes we got before
For example, if n is 65 minutes and minutes is 5 (since 65 % 60 equals 5),
 then n - minutes would be 60.

 (n - minutes) / 60 this part calculates the total number of minutes after gettibg rid of bonus minites
 for exampke (60)/60 = 1 so if 

*/
totalTime = n
let result = ''
if(minutes <10){
    result = `0${hours}:0${minutes}`
}else{
    result = `0${hours}:${minutes}`
}

return result

}

function setUp(){
    
    if(localStorage.getItem("currentTime")){
        hourContainer.innerHTML = localStorage.getItem("currentTime")
        totalTime = JSON.parse(localStorage.getItem("totalMin"))
        myTime = timeConvert(totalTime)
        console.log(totalTime)
    }else{
    
        console.log("not found?")
        myTime = "00:00"
        totalTime = 0
        hourContainer.innerHTML = myTime
    }
    
}
function checkTime(numero){
    if(numero >= 240){
titlePart.innerText = "YOU DID IT!"
    }else{
        return
    }

}





setUp()