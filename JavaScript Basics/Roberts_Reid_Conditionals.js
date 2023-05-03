//declare variabes
var trueOrFalse = [true, false]
var isHomeworkDone = trueOrFalse[Math.floor(Math.random()*2)] //randomize if HW is done or now
var timeOfDay = Math.floor(Math.random() * 25); //random int between 0-24
var isWednesday = trueOrFalse[Math.floor(Math.random()*2)] //randomize if it's Wednesday or not
var options = ["latte", "sleep"] 
var evenOptions = ["ice cream", "cookies", "candy"]
var oddOptions = ["hot chocolate", "tea", "cake"]
var iceCreams = ["strawberry ice cream", "vanilla ice cream"]
var treat //declare variable to be returned by the function

//Function to pick our reward
function pickTreat() {
    if (isHomeworkDone == false) { 
        treat = "No rewards yet! Finish your homework!"
        return treat
    }
    if (timeOfDay < 10) { // want a latte if before 10 am
        treat = options[0]

    } else if (timeOfDay >= 10 && timeOfDay < 15) { // want hot chocolate is between 10 and 4 pm
        treat = oddOptions[0]

    } else if (timeOfDay >= 15 && timeOfDay < 18) { // want random treat if between 3-6 pm
        var choice = Math.floor(Math.random()*3)
        if (timeOfDay % 2 == 0) {
            
            if (evenOptions[choice] == "ice cream") { // want strawberry if it's wednesday
                if (isWednesday) {
                    treat = iceCreams[0]
                } else {
                    treat = iceCreams[1]  // otherwise want vanilla
                }
            } else {
                treat = evenOptions[choice]
            }

        } else {
            treat = oddOptions[choice]
        }
        
        
    } else if (timeOfDay >= 18 && timeOfDay <= 22){
        if (isWednesday) {
            treat = iceCreams[0]
        } else {
            treat = iceCreams[1]  // otherwise want vanilla
        }
    } else { // if time of day is past 10 pm we want sleep
        treat = options[1]
    }
    return treat
}

console.log("My reward is:", pickTreat())