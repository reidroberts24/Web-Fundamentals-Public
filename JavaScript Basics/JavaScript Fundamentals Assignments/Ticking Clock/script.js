var rotationSecondHand
var rotationMinuteHand
var rotationHourHand

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hours = time/3600
    var mins = time/60
    console.log(mins*360)

    //hour hand
    var hourHand = document.querySelector("#hour")
    rotationHourHand = 180 + Math.floor(hours % 12)*30 + "deg"
    hourHand.style.transform = "rotate(" + rotationHourHand + ")"
    if (rotationHourHand == "360deg") {
        rotationHourHand = "0deg"
    }


    //minutes hand
    var minuteHand = document.querySelector("#minutes")
    rotationMinuteHand = 180+Math.floor(mins)*6 +"deg"
    minuteHand.style.transform = "rotate(" + rotationMinuteHand + ")"
    if (rotationMinuteHand == "360deg") {
        rotationMinuteHand = "0deg"
    }

    //always move second clock 6 degrees per tick
    var secondHand = document.querySelector("#seconds")
    rotationSecondHand = 180 + mins*360 + "deg"
    secondHand.style.transform = "rotate(" + rotationSecondHand + ")"
}, 1000);
 