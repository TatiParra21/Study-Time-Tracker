const inputTime = document.getElementById("input-time")
const addButton = document.getElementById("add-button")
const thirtyButton = document.getElementById("thirty")
const hourButton = document.getElementById("hour-button")
const hourContainer = document.getElementById("hour-container")
const resetButton = document.getElementById("reset-button")
const titlePart = document.getElementById("title-part")
const timeLeftContainer = document.getElementById("time-left")
let myTime 

let fourHours 
let totalTime 


addButton.addEventListener("click",function(){
    let inputNum = Number(inputTime.value)
    totalTime += inputNum
    timeLeftContainer.innerHTML = fourHourKeeping(fourHours,totalTime)
    localStorage.setItem("totalMin",JSON.stringify(totalTime)) //saving the total minutes to keep track off
    myTime = timeConvert(totalTime)
    localStorage.setItem("currentTime",myTime)
    hourContainer.innerHTML = localStorage.getItem("currentTime") //we are just putting what we have inthe local staorage we just put in
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
    
        myTime = "00:00"
        totalTime = 0
        fourHours = 240
        timeLeftContainer.innerHTML =  "04:00 left"
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

function fourHourKeeping(four, current){
let resting = four - current
fourHours = resting
localStorage.setItem("fourHours",JSON.stringify(fourHours))
return timeConvert(resting)
}





setUp()