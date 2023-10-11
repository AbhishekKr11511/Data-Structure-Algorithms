// Really Important

let count = 0
let comparison = 0

// Function to swap elements
function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
}

// Made the sorting a function which takes the array as the parameter
function whatSort(array){
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

// Sorting
whatSort(randomArray)
console.log(randomArray);
console.log('Count = ' + count)
console.log('Comparisons = ' + comparison)

// Reset the count
count = 0
comparison = 0

// Sorting for best case ( already Sorted )
whatSort(randomArray)
console.log('Best Case = '+ count);
console.log('Comparisons = ' + comparison)

// Resetting again
count = 0
comparison = 0


//Reversing
randomArray.reverse()
console.log(randomArray);

// Sorting and again for worst case the get the count
whatSort(randomArray)
console.log('Worst Case = '+count);
console.log('Comparisons = ' + comparison)