arr = [5, 93, 22, 4]

function popFront(arr) {
    var removed = arr[0] //store first element
    for (var i = 1; i <= arr.length; i++) { 
        arr[i-1] = arr[i] //shift every element to the left once in the array
    }
    arr.pop() // remove extraneous final value in the array
    return removed //return first value 

}

console.log(popFront(arr))