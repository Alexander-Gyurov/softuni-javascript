function solve(input){
    let people = Number(input[0]);
    let season = input[1];

    switch(season){
        case "spring":
            if(people <=5){
                let price = (50 * people).toFixed(2)
                console.log(`${price} leva.`)
            }else{
                let price = (48 * people).toFixed(2)
                console.log(`${price} leva.`)
            } break;
        case "summer":
            if(people <=5){
                let price = (48.50 * people)
                let priceWDisc = (price - (price *15/100)).toFixed(2)
                console.log(`${priceWDisc} leva.`)
            }else{
                let price = 45 * people
                let priceWDisc = (price - (price *15/100)).toFixed(2)
                console.log(`${priceWDisc} leva.`)
            }
             break;
        case "autumn":
            if(people <=5){
                let price = (60 * people).toFixed(2)
                console.log(`${price} leva.`)
            }else{
                let price = (49.50 * people).toFixed(2)
                console.log(`${price} leva.`)
            } break;
        case "winter":
            if(people <=5){
                let price = 86 * people
                let priceWDisc = (price + (price *8/100)).toFixed(2)
                console.log(`${priceWDisc} leva.`)
            }else{
                let price = 85 * people
                let priceWDisc = (price + (price *8/100)).toFixed(2)
                console.log(`${priceWDisc} leva.`)
            } break;
            
    }
    
    

} solve(["5", "spring"])