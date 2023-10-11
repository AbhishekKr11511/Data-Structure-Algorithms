
let arr1 = [60, 30, 10, 50, 40];
let arr2 = [80, 20, 70, 90];
let arrFinal = []

//-----------------------------------------------------------------------------------


for (let index = 0; index < arr1.length; index++) {
    arrFinal[index] = arr1[index]
}
let length = arrFinal.length
for (let index = 0; index < arr2.length; index++) {
    arrFinal[length + index] = arr2[index]
}

console.log('maxArray : ' +arrFinal);


//-----------------------------------------------------------------------------------

// const arrMerged = arr1.concat(arr2)
// console.log(arrMerged);

//-----------------------------------------------------------------------------------

// let arrMerged = [...arr1, ...arr2]
// console.log(arrMerged)
// arrMerged.sort()
// console.log(arrMerged);