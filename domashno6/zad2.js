function solve(input){
let index = 0;
let username = input[index];
index++;

let password = input[index];
index++

let tempPass = input[index];
index++

while(true){
    if(tempPass === password){
        break;
    }
    tempPass = input[index];
    index++
}
console.log(`Welcome ${username}!`);
}