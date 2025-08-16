let birthyear=prompt("Enter your year:");
let birthage=2025-birthyear;
if (birthage<18){
    console.log("You are a minor.");
}
else if (birthage>=18 && birthage<65){
    console.log("You are a eligible to vote.");
}
else{
    console.log("You are a senior citizen.");
}
