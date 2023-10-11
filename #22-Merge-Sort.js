let randomArray = [56, 12, 89, 34, 22, 67, 41, 73, 91, 8, 65, 99, 18, 50, 77, 3, 45, 88, 29, 60];

function mergeSplit(array){
    if(array.length<=1){
        return array
    }
    let mid = Math.floor(array.length/2)

    // First half
    let farray = array.slice(0, mid)
    // Second half
    let sarray = array.slice(mid)


    return merge(mergeSplit(farray), mergeSplit(sarray))
    
}

function merge(array1, array2){

    let sortedArray = []
    let i = 0
    let j = 0
    while(i<array1.length && j<array2.length){
        if(array1[i]>=array2[j]){
            sortedArray.push(array2[j])
            j++
        }else{
            sortedArray.push(array1[i])
            i++
        }
    }
    return sortedArray.concat(array1.slice(i)).concat(array2.slice(j))

}

let sortedArray = mergeSplit(randomArray)

console.log(sortedArray);

