/**
 * Requirement : Take grid of m * n Find if word exist in grid. 
 */


const exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length
    /** check if word length greater than board */
    if(word.length > (rows * cols) ) return false

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            /** if letter found check its adjacent nodes */
            if(board[i][j] === word[0]) {
                let exist_flag = check_adjacent_nodes(i, j, word, board, 0, rows, cols)
                if(exist_flag) return true
            }
        }
    }
    return false
}

const check_adjacent_nodes = (row, col, word, board, level, maxRows, maxCol) => {
    
    let l = word.length;
 
        // Pattern matched
        if (level == l)
            return true;
 
     // Out of Boundary
     if (row < 0 || col < 0 || row >= maxRows || col >= maxCol)
     return false;
     
    if(board[row][col] === word[level]) {
        let tmp = board[row][col]
        board[row][col] = '#'
        let res = 
            /** check top */
            check_adjacent_nodes(row - 1, col, word, board, level + 1, maxRows, maxCol) |
            /** check bottom */
            check_adjacent_nodes(row + 1, col, word, board, level + 1, maxRows, maxCol) |
            /** check left */
            check_adjacent_nodes(row, col - 1, word, board, level + 1, maxRows, maxCol) |
            /** check right */
            check_adjacent_nodes(row, col + 1, word, board, level + 1, maxRows, maxCol)
            board[row][col] = tmp
            return res
        
    } else {
        return false
    }
   }


let board = [['A', 'B', 'C', 'E'],['S', 'F', 'C', 'S'], ['A','D','E', 'E']]
let word = 'ABCESEECS'

let result = exist(board, word)
console.log(result)