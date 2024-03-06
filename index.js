const inputTime = document.getElementById("input-time")
const addButton = document.getElementById("add-button")
const thirtyButton = document.getElementById("thirty")
const hourButton = document.getElementById("hour-button")
const hourContainer = document.getElementById("hour-container")
const resetButton = document.getElementById("reset-button")
const titlePart = document.getElementById("title-part")
const timeLeftContainer = document.getElementById("time-left")
let myTime 
let totalLeft
let fourHours 
let totalTime 


addButton.addEventListener("click",function(){
    if(inputTime.value){
    let inputNum = Number(inputTime.value)
    totalTime += inputNum
    totalLeft = totalLeftFactor(inputNum)
    
  updateStuff()
    checkTime(totalTime)
    resetInput()
}
})
function resetInput(){
    inputTime.value = ""
}

function totalLeftFactor(sub){
    totalLeft-= sub
    if(totalLeft < 0){
        totalLeft = 0
    }else{
        return totalLeft
    }
}

resetButton.addEventListener("click",function(){
    myTime = "00:00"
    totalTime = 0
    fourHours = "04:00"
    totalLeft = 240
    
    setItems("totalMin",totalTime)
    setItems("totalLeft",totalLeft)
    
    hourContainer.innerHTML = myTime
    timeLeftContainer.innerHTML = fourHours
    inputTime.value=""
    localStorage.clear()
    titlePart.innerText = "Current Hours"
})

function setItems(key,mins){
    localStorage.setItem(key,JSON.stringify(mins))
}

thirtyButton.addEventListener("click",function(){
    totalTime += 30
    totalLeft = totalLeftFactor(30)
    updateStuff()
    checkTime(totalTime)

})

function updateStuff(){
    setItems("totalMin",totalTime)
    setItems("totalLeft",totalLeft)
    myTime = timeConvert(totalTime)
    fourHours = timeConvert(totalLeft)
    setItems("currentTime",myTime)
    setItems("fourHours",fourHours)
    hourContainer.innerHTML = localStorage.getItem("currentTime")
    timeLeftContainer.innerHTML = localStorage.getItem("fourHours")
}
hourButton.addEventListener("click",function(){
    totalTime +=60
    totalLeft = totalLeftFactor(60)
    updateStuff()
  
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
        totalLeft = JSON.parse(localStorage.getItem("totalLeft"))
        fourHours = timeConvert(totalLeft)
        myTime = timeConvert(totalTime)
        checkTime(totalTime)
        console.log(totalTime)
    }else{
    
        myTime = "00:00"
        fourHours="04:00"
        totalTime = 0
        totalLeft = 240
        setItems("totalMin",totalTime)
        setItems("totalLeft",totalLeft)
        timeLeftContainer.innerHTML =  fourHours
        hourContainer.innerHTML = myTime
    }
    
}
function checkTime(numero){
    if(numero >= 240){
titlePart.innerText = "YOU DID IT!"
totalTime = 240
totalLeft = 0 
hourContainer.innerHTML = "04:00"
timeLeftContainer.innerHTML =  "00:00"
setItems("totalMin",totalTime)
setItems("totalLeft",totalLeft)

    }else{
        return
    }

}






setUp()