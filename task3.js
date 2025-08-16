let ogstr=prompt("Enter a string to check if it's a palindrome:");
let str=ogstr.toLowerCase();
if (str==" "){
    console.log("The string is empty.");
}
let count=0;
let revstr=str.split('').reverse().join('');
console.log("The original string is: " + str);
console.log("The reversed string is: " + revstr);
if (str === revstr) {
    console.log("The string is a palindrome.");
}
else{
    console.log("The string is not a palindrome.");
}
for (let i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count++;
    }
}
console.log("The number of vowels in the string is: " + count);



