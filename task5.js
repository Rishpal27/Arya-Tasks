function longestword(str) {
    let words = str.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
let inputString = prompt("Enter a sentence");
console.log("The longest word is: " + longestword(inputString));
