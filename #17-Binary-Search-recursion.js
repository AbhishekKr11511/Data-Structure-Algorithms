// We do Binary Search in this module
const readline = require('readline-sync')

let myArray = [
    43, 55, 90, 38, 91, 95, 34,
    86, 63,  8,  3, 34, 10, 75,
    32, 23, 47, 38, 55, 79
]

console.log(myArray);
// console.log(myArray.sort());


// Binary Search can only be implimented on a sorted array, So we sort it here with bubble sort
function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
}
function bubbleSort(array){
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]>array[j]){
                swaping(array, i, j)
            }
        }
    }
}


bubbleSort(myArray)
console.log('Sorted by Bubble Sort = '+myArray);

//----------------------------------------------------------------

// This is where We do the Binary Search

let count = 0

function binarySort(array, value){
    if(array[0]<=value && value<=array[array.length-1]){
        if(array[Math.floor(array.length/2)] == value){
            return true
        }
        else if(array[Math.floor(array.length/2)] > value){
            let f_half = array.slice(0, array.length/2)
            count++
            console.log('first half')
            console.log(f_half);
            return binarySort(f_half, value)
        }
        else if(array[Math.floor(array.length/2)] < value){
            let l_half = array.slice(array.length/2, array.length)
            count++
            console.log('last half');
            console.log(l_half);
            return binarySort(l_half, value)
        }
        return false
    }
    return false
}



let userInput = readline.questionInt('Enter your input to search : ')

let doesItHaveIT = binarySort(myArray,userInput)

let maxPossibleCount = Math.ceil(Math.log2(myArray.length))
console.log('Max Possible Count = '+maxPossibleCount);

console.log('Found? : '+doesItHaveIT);
console.log('Divides it took : '+count);


