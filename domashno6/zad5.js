function solve(input) {
    let index = 0
    let acc = 0

    let command = input[index];
    index++

    while (command !== "NoMoreMoney") {
        let money = Number(command);

        if(money < 0){
            console.log(`Invalid operation!`);
            break;
        }
        acc += money
        console.log("Increase: " + money.toFixed(2))
    
        command = input[index];
        index++
    }

    console.log(`Total: `+ acc.toFixed(2));
}