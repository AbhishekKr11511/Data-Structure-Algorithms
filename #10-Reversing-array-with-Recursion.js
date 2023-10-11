
let arr = [60, 30, 50, 40, 20, 70, 90, 80];
arr.sort()

function swaping(array, i, j){
    [array[i],array[j]] = [array[j],array[i]]
}


function splitInTwo(array){
    let lastElement = array.pop()
    let twoValues = [array, lastElement]
    return twoValues
}

const reversed = []
function reverseArray(array){
    if(array.length == 0){
        return
    }
    else{
        const values = splitInTwo(array)
        swaping(values, 0, 1)
        reversed.push(values[0])
        return reverseArray(values[1])
    }
}
reverseArray(arr)

console.log(reversed)

//-------------------------------------------------------
