

function findOptimalLocation(parkingLocations, customerLocations) {
    var minDistance = Infinity
    var optimalLocation

    for (var i = 0; i < parkingLocations.length; i++) {
        for (var j = 0; j < customerLocations.length; j++) {
            let x = Math.abs(parkingLocations[i][0] - customerLocations[j][0])
            let y = Math.abs(parkingLocations[i][1] - customerLocations[j][1])
            let currDistance = x + y
            console.log("Distance:",currDistance) //debugging
            if (currDistance < minDistance) {
                minDistance = currDistance
                optimalLocation = [parkingLocations[i][0], parkingLocations[i][1]]   //return x,y coords
                console.log("current optimal:",optimalLocation) //debugging
            }
        }
    }
    return optimalLocation 
}


parking = [[5,3],[3,5],[0,0],[1,4]]
customers = [[0,1]]
console.log(findOptimalLocation(parking, customers))