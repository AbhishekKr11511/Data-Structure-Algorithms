//Bubble Sort

var count = 0
var comparison = 0

// Function to swap elements
function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
}


function bubbleSort(array){
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            comparison++
            if(array[i]>array[j]){
                swaping(array, i, j)
                count++
            }
        }
    }
}


let arr = [60, 30, 50, 40, 20, 70, 90, 80];
let randomArray = [56, 12, 89, 34, 22, 67, 41, 73, 91, 8, 65, 99, 18, 50, 77, 3, 45, 88, 29, 60];

function printStuff(sortFunction ,arr){

sortFunction(arr)
console.log(arr)
console.log('Count = ' +count);
console.log('Comparison = ' +comparison);

// Resetting
count = 0
comparison = 0

// Best Case Senario
sortFunction(arr)
console.log();
console.log('Best Case Count = ' +count);
console.log('Best Case Comparison = ' +comparison);

// Resetting
count = 0
comparison = 0

// Worst Case Scenario
arr.reverse()
console.log(arr)
sortFunction(arr)
console.log('Worst Case Count = ' +count);
console.log('Worst Case Comparison = ' +comparison);
console.log(arr)

}

printStuff(bubbleSort ,randomArray)