// let myArray = [
//     43, 55, 90, 38, 91, 95, 34,
//     86, 63,  8,  3, 34, 10, 75,
//     32, 23, 47, 38, 55, 79, 10
// ]

// let f_array = myArray.slice(0, myArray.length/2)

// console.log(f_array);

// let l_array = myArray.slice(myArray.length/2, myArray.length)

// console.log(l_array);

// //----------------------------------------------------------------

// let arr1 = [1,2,3,4,5]
// let arr2 = [11, 22, 33, 44, 55]
// let arr3 = [10, 20, 30, 40, 50]

// console.log(arr1.concat(arr2).concat(arr3).concat(10));


let newMap = new Map()

newMap.set(1, ['D', 'S', 'A'])
newMap.set(2, ['W', 'R', 'T'])
newMap.set(3, ['U', 'I', 'O'])
newMap.set(4, ['Z', 'X', 'C'])

// console.log(newMap);
console.log(newMap.size);
console.log(newMap.has(2));

newMap.forEach(item=>{
    console.log(item)
})

// console.log(arrayOf2);

// newMap.forEach((value, key)=>console.log(`${value} => ${key}`))
