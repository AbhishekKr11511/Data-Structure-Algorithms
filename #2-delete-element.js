const readLine = require('readline-sync')

let arr = [60, 30, 10, 50, 40];
// let reference = [...arr]

// const input = readLine.questionInt('Enter the element you want to be removed : ')

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]==input){
//         var removed = arr.splice(index, 1)
//     }
// }
// if(removed==undefined)console.log('Sorry no element of that sort is found :(')

// console.log('Removed element :- ' +removed);
// console.log("The resulting array :- " +arr)
//-----------------------------------------------------------------------------------

const inputIndex = readLine.questionInt('Enter the position you want to be removed : ')

for (let index = inputIndex-1; index < arr.length; index++) {
    arr[index] = arr[index+1]
}
arr.pop()
console.log(arr)