const readLine = require('readline-sync')

const givenString = readLine.question('Enter your String : ')
let tempArray = givenString.split('')
console.log(tempArray);

function reverse(array,emptyArray = []){
    if(array.length==0){
        let reversedArray = emptyArray.join('')
        console.log('reversed array = '+reversedArray);
        return reversedArray
    }
    else{
        let lastElement = array.pop()
        emptyArray.push(lastElement)
        reverse(array, emptyArray)
    }
}

let answer = reverse(tempArray)
console.log(answer)