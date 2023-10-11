
let word1 = 'debit card'
let word2 = 'bad credit'



// We convert the strings to comparable strings
function arrayPrep(word){
    let array = word.toLowerCase()
    array = array.split(' ')
    array = array.join('')
    array = array.split('')
    array = array.sort()
    array = array.join('')
    return array
}
// If you want to do the string way
function isEqual(string1,string2){
    if(string1==string2){
        return true
    }else{
        return false
    }
}

// If you want to do the array method
function anagram(array1, array2, length){

    for (let i = 0; i < length; i++) {
        if(array1[i]!=array2[i]){
            console.log('Not Equal')
            return false
        }
        else{
            console.log('Equal');
        }
    }
    return true
}

let array1 = arrayPrep(word1)
console.log(array1);

let array2 = arrayPrep(word2)
console.log(array2);

// let check = anagram(array1, array2, array1.length)
// console.log(check);

let checkString = isEqual(array1, array2)
console.log(checkString);