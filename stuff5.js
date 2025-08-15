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
let inputString = "hello my name is rishabh";
console.log("The longest word is: " + longestword(inputString));