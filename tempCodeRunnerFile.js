while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        arrFinal[i+j] = arr1[i]
        i++
    }
    else{
        arrFinal[i+j] = arr2[j]
        j++
    }
}