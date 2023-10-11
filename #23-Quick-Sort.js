let randomArray = [56, 12, 89, 34, 22, 67, 41, 73, 91, 8, 65, 99, 18, 50, 77, 3, 45, 88, 29, 60];


function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot = arr[0]
    let lessArray = []
    let greatArray = []

    for (let i = 1; i < arr.length; i++) {

        if(arr[i]<=pivot){
            lessArray.push(arr[i])
        }        
        else{
            greatArray.push(arr[i])
        }
    }

    return (quickSort(lessArray).concat(pivot).concat(quickSort(greatArray)))
    
}

let sortedArray = quickSort(randomArray)

console.log(sortedArray);