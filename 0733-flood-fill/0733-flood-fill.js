/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const isValidPosition = (row, column, rows, columns, originalColor, image)  => {
    if(row < 0 || row >= rows || column < 0 || column >= columns || image[row][column] !== originalColor) {
        return false;
    }
    return true;
}

const dfsMatrixFill = (originalColor,newColor,image,currentRow,currentColumn, rows,columns) => {
    if(!isValidPosition(currentRow, currentColumn, rows, columns, originalColor, image)) {
        return;
    }

    image[currentRow][currentColumn] = newColor;
    dfsMatrixFill(originalColor,newColor,image,currentRow + 1,currentColumn, rows,columns);
    dfsMatrixFill(originalColor,newColor,image,currentRow - 1,currentColumn, rows,columns);
    dfsMatrixFill(originalColor,newColor,image,currentRow, currentColumn + 1, rows,columns);
    dfsMatrixFill(originalColor,newColor,image,currentRow, currentColumn - 1, rows,columns);
}


var floodFill = function(image, sr, sc, color) {
    
    const originalColor = image[sr][sc];

    if(originalColor === color) {
        return image;
    }

    const rows  = image.length;
    const columns = image[0].length;
    
    dfsMatrixFill(originalColor, color, image, sr, sc, rows, columns);
    
    return image;
};

