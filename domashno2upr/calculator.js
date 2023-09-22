function calculator(input){
    let deposit = Number(input[0]);
    let deadline = Number(input[1]);
    let precent = Number(input[2]);

    let finalPrice = deposit + deadline * ((deposit * precent) / 12);
console.log(finalPrice)
}
calculator(["200", "3", "0.057"])
calculator(["2350", "6", "0.07"])