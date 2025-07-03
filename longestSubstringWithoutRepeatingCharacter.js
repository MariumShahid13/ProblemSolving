/** 
 * Longest Substring Without Repeating Characters
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let a = s.split("")
  let o = getSubstrings(a, [])
  console.log(o)
  let max = getLargestStringLength(o)
  console.log(max)
    return max
  
};

const getLargestStringLength = (o) => {
    let max = 0;
    for (let i = 0; i < o.length; i++) {
        if(o[i].length > max) {
            max = o[i].length
        }
        
    }
    return max
}


const getSubstrings = (a, o) => {

    if(a.length === 0) {
        return o
    }
    let s = ''
    for (let i = 0; i < a.length; i++) {
        if(!s.includes(a[i])) {
            s = s + a[i]
        }
        else {
            break
        }
        
    }
    a.splice(0,1)
    o.push(s)
    return getSubstrings(a,o)
}

lengthOfLongestSubstring('dvdf')

