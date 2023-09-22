function foodDelivery(input){
    let chicken = 10.35
    let fish = 12.40
    let vegetarian = 8.15
    let deliveryPrice = 2.50
    
    
//mojesh totalPrice i otdelno za vsqko
    let totalPrice = (chicken * Number(input[0])) + (fish * Number(input[1])) + (vegetarian * Number(input[2]));
    
    let dessert = 0.2 * totalPrice
    let finalPrice = dessert + totalPrice + deliveryPrice;
    console.log(finalPrice);
}
foodDelivery(["2", "4", "3"])
foodDelivery(["9", "2", "6"])