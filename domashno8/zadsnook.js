function solve(input){
    let stage = input[0];
    let type = input[1];
    let countTicket = Number(input[2]);
    let pic = input[3];
    let totalPRice = 0;
    let isNeedPic= true
    switch(stage){
        case "Quarter final":
        switch(type){
            case "Standard": totalPRice = countTicket * 55.50; break;
            case "Premium": totalPRice = countTicket * 105.20; break;
            case "VIP": totalPRice = countTicket * 118.90; break;
        
        }; break;
        case "Semi final":
            switch(type){
            case "Standard": totalPRice = countTicket * 75.88; break;
            case "Premium": totalPRice = countTicket * 125.22; break;
            case "VIP": totalPRice = countTicket * 300.40; break;
            }break;

        case "Final": 
        switch(type){
            case "Standard": totalPRice = countTicket * 110.10; break;
            case "Premium": totalPRice = countTicket * 160.66; break;
            case "VIP": totalPRice = countTicket * 400; break;
        
    }; break
}
if(totalPRice >4000){
    totalPRice *= 0.75
    isNeedPic = false
} else if(totalPRice >2500){
    totalPRice *= 0.90
}
if(pic === "Y" && isNeedPic){
    totalPRice +=40 * countTicket
}
console.log(totalPRice.toFixed(2))
}