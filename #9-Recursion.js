const readLine = require('readline-sync')

//1
// Create a function to calculate the factorial of any number

// function factorial(num){
//     if(num==0){
//         return 1
//     }
//     else{
//         return num * factorial(num-1)
//     }
// }

// let answer = factorial(6)
// console.log(answer);
//-----------------------------------------------------------

//2
// Create a Function for fibonacci series


// function populate(num){
//     const arr = []

//     function fibonacci(i){
//         if(i <= 2){
//             return 1
//         }
//         else{

//             return fibonacci(i-1) + fibonacci(i-2)
//         }
//     }

//     for (let index = 1; index <= num; index++) {
//         arr.push(fibonacci(index))
//     }

//     return arr
// }

// let series = readLine.questionInt("Enter the number of terms for Fibonacci series = ")
// console.log(populate(series))

//-----------------------------------------------------------------------------------

//3
// Write a recursive function to calculate the sum of all elements in an array of integers.


// function populateArray(base, power){
//     const series = []

//     function exponent(base,power){
//         if(power==0){
//             return 1
//         }
//         else{
//             return base * exponent(base, power-1)
//         }
//     }

//     for (let i = 1; i <= power; i++) {
//         series.push(exponent(base, i))
//     }

//     return series
// }

// let answer = populateArray(2,10)
// console.log(answer);

//-----------------------------------------------------------------------------------

//4
// Count digits in a number using Recursion

// function countDigits(number){
//     if(number/10 < 1){
//         return 1
//     }
//     else{
//         return (1 + countDigits(number/10))
//     }
// }

// let digits = countDigits(123123)
// console.log(digits);

//-----------------------------------------------------------------------------------

//5
// Write a function to reverse a string

// let str = 'Abhishek'
// let arr = str.split('')

// function reverseArray(array, start, end){
//     if(start>=end){

//     }else{
//         let temp = array[start]
//         array[start] = array[end]
//         array[end] = temp

//         return reverseArray(array, start+1, end-1)
//     }
// }
// function revInitialize(array){
//     reverseArray(array, 0, array.length-1)
//     let answer = array.join('')
//     return answer
// }

// const reversedOutput = revInitialize(arr)
// console.log(reversedOutput);

//-----------------------------------------------------------------------------------
//6
// Check if a String is Palindrom 

let string = 'Never odd or even'
let splitstring = string.split(' ').join('')
splitstring = splitstring.toLocaleLowerCase()
console.log(splitstring);

function palindrom(array, start, end){
    if(array[start]!=array[end]){
        return false
    }
    else if(start == end && array[start] == array[end]){
        return true
    }
    else if(start == (end-1) && array[start] == array[end]){
        return true
    }
    else{
        return palindrom(array, start+1, end-1)
    }
}
function palInitialize(array){
    let check = palindrom(array, 0, array.length-1)
    return check
}

let result = palInitialize(splitstring)
console.log(result);
//-----------------------------------------------------------------------------------

