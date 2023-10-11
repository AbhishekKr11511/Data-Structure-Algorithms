const readLine = require('readline-sync')

// Last in First out
// We will learn about push and pop in stack
const newarray = []

const push = (value) => {
    newarray[newarray.length] = value
    console.log(newarray);
}

const pop = (array) => {
    array.length--
    console.log('popped : '+array)
}

// for (let i = 0; i < 5; i++) {
//     const userInput = readLine.questionInt('Enter you value to enter = ')
//     push(userInput)
// }

// for (let i = 0; i  < 3; i++) {
//     pop(newarray)
// }


//------------------------------------------------------------------------
// let userInput = readLine.questionInt('Enter you value to enter = ')

// while(userInput!=-1){
    //     push(userInput)
    //     userInput = readLine.questionInt('Enter you value to enter = ')
    // }
    
    // console.log(newarray);

//------------------------------------------------------------------------


