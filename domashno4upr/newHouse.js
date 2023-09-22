function solve(input){ //TULIPS IS THE ANSWER
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0
    let diff = 0
    let discount = 0
    let finalPrice = 0
//vsqko break da ima
    switch (flower){
        case "Roses":
            if(quantity >= 80){
                price = (quantity * 5)
                discount = price * 0.10;
                finalPrice = price - discount
                if(budget >= finalPrice){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < finalPrice){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            } else if(quantity < 80){
                price = (quantity * 5)
                if(budget >= price){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < price){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            }; break;

        case "Dahlias":
            if(quantity >= 90){
                price = (quantity * 3.80)
                discount = price * 0.15;
                finalPrice = price - discount
                if(budget >= finalPrice){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < finalPrice){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            } else if(quantity < 90){
                price = (quantity * 3.80);
                if(budget >= price){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < price){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            }; break;
        case "Tulips":
            if(quantity >= 80){
                price = (quantity * 3.80)
                discount = price * 0.15;
                finalPrice = price - discount
                if(budget >= finalPrice){
                    diff = (budget - finalPrice).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < finalPrice){
                    diff = (finalPrice - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            } else if(quantity < 80){
                price = (quantity * 2.80);
                if(budget >= price){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < price){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            }; break;
        case "Narcissus":
            if(quantity <= 120){
                price = (quantity * 3)
                discount = price * 1.15;
                finalPrice = price - discount
                if(budget >= finalPrice){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < finalPrice){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            } else if(quantity > 120){
                price = (quantity * 3);
                if(budget >= price){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < price){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            }; break;
        case "Gladiolus":
            if(quantity <= 90){
                price = (quantity * 2.50)
                discount = price * 1.20;
                finalPrice = price - discount
                if(budget >= finalPrice){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < finalPrice){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            } else if(quantity > 80){
                price = (quantity * 2.50);
                if(budget >= price){
                    diff = (budget - price).toFixed(2);
                    console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff} leva left.`);
                } else if(budget < price){
                    diff = (price - budget).toFixed(2);
                    console.log(`Not enough money, you need ${diff} leva more.`);
                }
            }; break;
    
    }
}
solve(["Roses",
"55",
"250"])

