function solve(input){
    let fruit = (input[0]);
    let day = (input[1]);
    let quantity = Number(input[2]);
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if(fruit === "banana"){
                let price = quantity * 2.50;
                console.log(quantity.toFixed(2))
            } else if (fruit === "apple"){
                let price = quantity * 1.20;
                console.log(quantity.toFixed(2))
            } else if (fruit === "orange"){
                let price = quantity * 0.85;
                console.log(quantity.toFixed(2))
            } else if (fruit === "grapefruit"){
                let price = quantity * 1.45;
                console.log(quantity.toFixed(2))
            } else if (fruit === "kiwi"){
                let price = quantity * 2.70;
                console.log(quantity.toFixed(2))
            } else if (fruit === "pineapple"){
                let price = quantity * 5.50;
                console.log(quantity.toFixed(2))
            } else if (fruit === "grapes"){
                let price = quantity * 3.85;
                console.log(quantity.toFixed(2))
            } else{
                console.log("error");
            }; break; //????
            case "Saturday":
            case "Sunday":
                if(fruit === "banana"){
                    let price = quantity * 2.70;
                    console.log(quantity.toFixed(2))
                } else if (fruit === "apple"){
                    let price = quantity * 1.25;
                    console.log(quantity.toFixed(2))
                } else if (fruit === "orange"){
                    let price = quantity * 0.90;
                    console.log(quantity.toFixed(2))
                } else if (fruit === "grapefruit"){
                    let price = quantity * 1.60;
                    console.log(quantity.toFixed(2))
                } else if (fruit === "kiwi"){
                    let price = quantity * 3.00;
                    console.log(quantity.toFixed(2))
                } else if (fruit === "pineapple"){
                    let price = quantity * 5.60;
                    console.log(quantity.toFixed(2))
                } else {
                    let price = quantity * 4.20;
                    console.log(quantity.toFixed(2))
                }; break;
                default:
                    console.log("error"); break;
    }

}
solve([""])