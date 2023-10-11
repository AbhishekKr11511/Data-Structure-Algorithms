const readlineSync = require('readline-sync')

let arr = [60, 30, 10, 50, 40];

// // arra.push(70)
// console.log(arra)

// const swapElements = (array, i1, i2) => {
//     [array[i1], array[i2]] = [array[i2], array[i1]]
// }

// const q = readlineSync.questionInt('Enter your Number : ')

// arra = [...arra, q]
// swapElements(arra, (findex - 1) , (arra.length - 1))

// console.log(arra)

//-----------------------------------------------------------------------------------

let findex = readlineSync.questionInt('Enter the place you want to insert : ')

if(findex > arr.length){
    console.log('you have exceeded the array length')
    findex = arr.length + 1
}

for(let i = (arr.length-1); i >= (findex-1) ; i--){
    arr[i+1] = arr[i]
}
arr[findex-1] = 100
console.log(arr)
//-----------------------------------------------------------------------------------