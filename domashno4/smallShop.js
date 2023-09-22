function solve(input){
let product = (input[0]);
let city = (input[1]);
let quantity = Number(input[2]);
//let price??
if(city === "Sofia"){
    if(product === "coffe"){
        let price = quantity * 0.50;
        console.log(price);
    } else if(product === "water"){
        let price = quantity * 0.80;
        console.log(price);
    } else if(product === "beer"){
        let price = quantity * 1.20;
        console.log(price);
    } else if(product === "sweets"){
        let price = quantity * 1.45;
        console.log(price);
    } else {
        let price = quantity * 1.60;
        console.log(price);
    }

} else if(city === "Plovdiv"){
    if(product === "coffe"){
        let price = quantity * 0.40;
        console.log(price);
    } else if(product === "water"){
        let price = quantity * 0.70;
        console.log(price);
    } else if(product === "beer"){
        let price = quantity * 1.15;
        console.log(price);
    } else if(product === "sweets"){
        let price = quantity * 1.30;
        console.log(price);
    } else{
        let price = quantity * 1.50;
        console.log(price);
    }

} else {
    if(product === "coffe"){
        let price = quantity * 0.45;
        console.log(price);
    } else if(product === "water"){
        let price = quantity * 0.70;
        console.log(price);
    } else if(product === "beer"){
        let price = quantity * 1.10;
        console.log(price);
    } else if(product === "sweets"){
        let price = quantity * 1.35;
        console.log(price);
    } else {
        let price = quantity * 1.55;
        console.log(price);
    }

}

}
solve(["peanuts", "Varna", "2"])