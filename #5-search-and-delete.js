const readLine = require('readline-sync')


let arr = [60, 30, 10, 50, 40];

const inputElement = readLine.questionInt('Enter the element you want to delete : ')

console.log(arr);

// We are using 2 inbuilt array methods to seach and delete in a single line of code without any use of loops or condition

if(arr.indexOf(inputElement)!= -1){
    arr.splice(arr.indexOf(inputElement), 1)
}

console.log(arr);