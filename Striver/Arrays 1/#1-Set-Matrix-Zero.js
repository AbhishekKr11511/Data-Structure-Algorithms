

// function makeZero(matrix, array){
//     for (let index = 0; index < array.length; index++) {
//         matrix[array[index][0]][array[index][1]] = 0
//     }
// }

const setZero = (matrix) => {
    let mth = []
    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[0].length; n++) {
            if(matrix[m][n]==0){

                // row
                for (let i = 0; i < matrix[m].length; i++) {
                    mth.push([m, i])
                }
                // column
                for (let j = 0; j < matrix.length; j++) {
                    mth.push([j, n])
                }
                
            }
        }
    }
    // console.log(mth);
    // makeZero(matrix ,mth)
    for (let index = 0; index < mth.length; index++) {
        matrix[mth[index][0]][mth[index][1]] = 0
    }

}

let myMatrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
/*

Output :-

[1, 0, 1],
[0, 0, 0],
[1, 0, 1],

*/
console.log(myMatrix);

setZero(myMatrix)

console.log(myMatrix);