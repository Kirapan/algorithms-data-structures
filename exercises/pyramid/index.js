// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stair = '') {
    const midpoint = Math.floor((2 * n - 1) / 2)
    if(n === row) {
        return;
    }
    if(stair.length === (n * 2 -1)) {
        console.log(stair);
        return pyramid(n, row + 1);
    }
    if(stair.length < (midpoint - row) || stair.length > (midpoint + row)) {
        pyramid(n, row, stair + ' ')
    } else {
        pyramid(n, row, stair + '#')
    }
}

// function pyramid(n) {
//     let i = 0;
//     while (i < n) {
//         let space = ' '.repeat(n - 1 - i);
//         let hash = '#'.repeat(i * 2 + 1);
//         console.log(space + hash + space);
//         i++;
//     }
// }

module.exports = pyramid;
