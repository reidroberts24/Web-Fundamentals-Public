function removeCookieMessage(element) {
    var cookieDiv = document.querySelector(".cookies-container")
    cookieDiv.remove()
}

function newCityReport() {
    alert("Loading weather report...")
}

function changeDegrees(element) {
    var highTemps = document.querySelectorAll(".high");
    var lowTemps = document.querySelectorAll(".low");
    var tempOptions = element.value;
  
    for (var i = 0; i < highTemps.length; i++) {
        var highTemp = highTemps[i];
        var lowTemp = lowTemps[i];
  
        if (tempOptions == "fahrenheit") {
            var highTempCelsius = parseInt(highTemp.innerText)
            var lowTempCelsius = parseInt(lowTemp.innerText)
            var highTempFahrenheit = celsiusToFahrenheit(highTempCelsius)
            var lowTempFahrenheit = celsiusToFahrenheit(lowTempCelsius)
            highTemp.innerText = highTempFahrenheit + '°'
            lowTemp.innerText = lowTempFahrenheit + '°'
        } else {
            var highTempFahrenheit = parseInt(highTemp.innerText)
            var lowTempFahrenheit = parseInt(lowTemp.innerText)
            var highTempCelsius = fahrenheitToCelsius(highTempFahrenheit)
            var lowTempCelsius = fahrenheitToCelsius(lowTempFahrenheit)
            highTemp.innerText = highTempCelsius + '°'
            lowTemp.innerText = lowTempCelsius + '°'
        }
    }
}
  

function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}