// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase();
}

// const buildCharMap = (str) => {
//     const object= {};
//     for (let char of cleanString(str)) {
//         object[char] = object[char]++ || 1; 
//     }
//     return object;
// }

// function anagrams(stringA, stringB) {
//     const objectA = buildCharMap(stringA);
//     const objectB = buildCharMap(stringB);
    
//     if (Object.keys(objectA).length !== Object.keys(objectB).length) return false;
//     for (let key in objectA) {
//         if (objectA[key] !== objectB[key]) return false;
//     }
//     return true;
// }
function anagrams(stringA, stringB) {
    return cleanString(stringA).split('').sort().join('') === cleanString(stringB).split('').sort().join('');
}

module.exports = anagrams;
