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
console.log(myArray);

//----------------------------------------------------------------

function binarySearch(array, target){

    let start = 0
    let end = array.length-1

    while(start<=end){
        const mid = Math.floor(start+end/2)

        if(array[mid]===target){
            return true
        }
        else if(target>array[mid]){
            start = mid + 1
        }
        else{
            end = mid-1
        }
    }
    return false
}

const targetvalue = 4
const answer = binarySearch(myArray, targetvalue)
console.log('Found? : '+answer);