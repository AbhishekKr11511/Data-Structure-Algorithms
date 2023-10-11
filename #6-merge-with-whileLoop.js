// When working with while loops to merge arrays, this only works if the arrays are sorted before hand. We can either use array.sort() method, or we can sort the array ourselves using our prefered algorithm.


let arr1 = [60, 30, 10, 50, 40];
let arr2 = [80, 20, 70, 90];
let arrFinal = []

arr1.sort()
arr2.sort()
console.log(arr1);
console.log(arr2);

let i = 0
let j = 0

console.log('Sorted Out \n');

while(i <= arr1.length && j <= arr2.length){
    if(arr1[i] < arr2[j]){
        arrFinal[i+j] = arr1[i]
        i++
    }
    else{
        arrFinal[i+j] = arr2[j]
        j++
    }
}
// arrFinal.pop() // For deleting the last undefined value
arrFinal.length  = arrFinal.length -1 // same as above
console.log(arrFinal);