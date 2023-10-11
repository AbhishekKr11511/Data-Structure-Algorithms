let myArray = [
    43, 55, 90, 38, 91, 95, 34,
    86, 63,  8,  3, 34, 10, 75,
    32, 23, 47, 38, 55, 79, 10
]

let arr = [60, 30, 50, 40, 20, 70, 90, 80];

var count = 0
var comparisons = 0

function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
    count++
}

function insertionSort(array){
    let startingPos = 1
    while(startingPos<array.length){
        for(let i = startingPos-1; i >=0; i--){
            comparisons++
            if(array[i]<array[i-1]){
                swaping(array, i, i-1)
            }
            console.log('Swapped : '+myArray);
        }
        startingPos++
    }
}

insertionSort(myArray)
console.log(myArray);

console.log('Count : '+count);
console.log('comparisons : '+comparisons);