/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const dfsMatrixFill = (originalColor,newColor,image,currentRow,currentColumn, rows,columns) => {
    if(currentRow < 0 || currentRow >= rows || currentColumn < 0 || currentColumn >= columns || image[currentRow][currentColumn] !== originalColor){
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

