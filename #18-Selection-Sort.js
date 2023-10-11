let myArray = [
    43, 55, 90, 38, 91, 95, 34,
    86, 63,  8,  3, 34, 10, 75,
    32, 23, 47, 38, 55, 79, 10
]

console.log("My Array : "+myArray);


function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
}

function selectionSort(array){
    let swapSmall = 0
    while(swapSmall < array.length-1){
        let smallestElementIndex = swapSmall
        for(let i = swapSmall+1; i<array.length; i++){
            // Just change the less than sign to greater than to sort in descending order
            if(array[i] < array[smallestElementIndex]){
                smallestElementIndex = i
            }

        }
        // console.log('Zero Index : '+swapSmall)
        // console.log('Zero Element : '+array[swapSmall])
        // console.log('Current Small Index: '+smallestElementIndex)
        // console.log('Current small element : '+array[smallestElementIndex])
        swaping(array, swapSmall, smallestElementIndex)
        // console.log('Swapped : '+myArray)
        swapSmall = swapSmall+1
    }
}

selectionSort(myArray)

console.log(myArray)