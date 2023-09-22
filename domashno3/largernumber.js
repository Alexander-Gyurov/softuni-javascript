function largerNumber(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2) {
console.log(num1);
    } else {
        console.log(num2);
    }
}
largerNumber(["5", "3"])
console.log("-------")
largerNumber(["3", "5"])
console.log("-------")
largerNumber(["10", "10"])
console.log("-------")
largerNumber(["-5", "5"])

