// Debug the following code that removes negative values from an array

function removeNegatives(arr) { //don't declare var in parameter
    for(var i=0; i<=arr.length; i++) {
        if(arr[i] < 0) { // remove '=' sign 
            arr.splice(i,1); //splice instead of pop to remove elements inside the array
            
        }
    }
    return arr; // correct variable name that we return 
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);