

function minToFront(arr) {
    var min = arr[0]
    var index = 0
    for (var i =0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
            index = i
        }
    }

    arr.splice(index,1)
    arr.unshift(min)
    return arr
}


var test = [5, 93, 22, 4]

console.log(minToFront(test))