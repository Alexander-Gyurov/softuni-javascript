function solve(input) {
    
    let quantitySea = Number(input[0])
    let quantityMount = Number(input[1])
    let index = 2
    let numberTickets = quantitySea + quantityMount
    let profit = 0

    for (let i = index; i <= index+numberTickets; i++) {

        if(input[i]  == "Stop"){
            break;
        }

        switch (input[i]) {
            case "sea":
                if( quantitySea != 0){
                    profit += 680
                    quantitySea--
                };
                break;
            case "mountain":
                if( quantityMount != 0){
                profit += 499
                quantityMount--
                };
                break;
        }
    }

    if(quantitySea == 0 && quantityMount==0){
        console.log(" Good job! Everything is sold." )
    }
    console.log(`Profit: ${profit} leva.`)

}solve(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])
