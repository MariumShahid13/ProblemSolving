/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Requirement : Take Array as input in non-descending order 
 * Get its square and sort it in non-descending order
 */
const sortedSquares = function(nums) {
    let squareArray = []

    /** take square of each element in array */
    for(let i = 0 ; i< nums.length; i++) {
        squareArray.push(Math.pow(nums[i], 2))
    }

    /** sorted Array in ascending order*/
    let sortedArray = squareArray.sort((a, b) => a-b)
    return sortedArray

};

console.log([-4,-1,0,3,10])