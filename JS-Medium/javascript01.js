'use strict'

function pascalsTriangle(rows) {
    if (rows === 0) return [];
    if (rows === 1) return [[1]];
    let result = [];
    for (let row = 0; row < rows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-1][col-1] + result[row-1][col]));
            }
        }
        result.push(arr);
    }
    return result;
}


console.table(pascals(8));