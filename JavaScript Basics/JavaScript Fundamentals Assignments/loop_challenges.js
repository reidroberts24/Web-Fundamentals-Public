// Problem 1
for (var i=0; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
console.log("---------End of Problem 1-------------------------------")
// Problem 2
for (var i=100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}
console.log("---------End of Problem 2-------------------------------")
// Problem 3
var array = [4, 2.5, 1, -0.5, -2, -3.5]
for (var i=0; i < array.length; i++) {
    console.log(array[i])
    
}

console.log("---------End of Problem 3-------------------------------")

// Problem 4
var sum = 0
for (var i=0; i <= 100; i++) {
    sum += i
}
console.log("Final sum:", sum)
console.log("---------End of Problem 4-------------------------------")

// Problem 5
var product = 1
for (var i=1; i <= 12; i++) {
    product *= i
}
console.log("Final product:", product)
console.log("---------End of Problem 5-------------------------------")
