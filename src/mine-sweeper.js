const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (matrix) 
{
  let field = matrix.map(row => row.slice()); //Танцы с бубном помогли узнать что и [...array] и .slice() делают неглубокую копию массива, для копирования внутренних нужно делать map!!!
  for (let i=0; i<field.length; i++) 
  {
    for (let j=0; j<field[i].length; j++) 
    {
      field[i][j]=0;
    }
  }
  for (let i=0; i<field.length; i++) 
  {
    console.log(matrix[i]);
    for (let j=0; j<field[i].length; j++) 
    {
      console.log(matrix[i][j]);
      console.log(field[i][j]);
      if(matrix[i][j]==true&&matrix[i-1]!=undefined&&matrix[i-1][j-1]!=undefined) field[i-1][j-1]++; 
      if(matrix[i][j]==true&&matrix[i-1]!=undefined&&matrix[i-1][j]!=undefined) field[i-1][j]++; 
      if(matrix[i][j]==true&&matrix[i-1]!=undefined&&matrix[i-1][j+1]!=undefined) field[i-1][j+1]++; 
      if(matrix[i][j]==true&&matrix[i]!=undefined&&matrix[i][j-1]!=undefined) field[i][j-1]++; 
      if(matrix[i][j]==true&&matrix[i]!=undefined&&matrix[i][j+1]!=undefined) field[i][j+1]++; 
      if(matrix[i][j]==true&&matrix[i+1]!=undefined&&matrix[i+1][j-1]!=undefined) field[i+1][j-1]++; 
      if(matrix[i][j]==true&&matrix[i+1]!=undefined&&matrix[i+1][j]!=undefined) field[i+1][j]++; 
      if(matrix[i][j]==true&&matrix[i+1]!=undefined&&matrix[i+1][j+1]!=undefined) field[i+1][j+1]++; 
      console.log(field[i][j]);
    }
  }
  return field;
}

module.exports = {
  minesweeper
};
