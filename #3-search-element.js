const readLine = require('readline-sync')

let arr = [60, 30, 10, 50, 40];

const search = readLine.questionInt('Enter element you want to search : ')

// for (let index = 0; index < arr.length; index++) {
//     if(arr[index]===search){
//         // console.log(index);
//         console.log(`Your element's position is : ${index+1}`);
//         console.log(`Your element's position is : ${arr.length - index} from last`);
//         return;
//     }
// }
// console.log('No such element found :(');

//----------------------------------------------------------


// array.indexOf(element) is an array method to get the index of the given element in just one line 

console.log("The index of your element : "+arr.indexOf(search))