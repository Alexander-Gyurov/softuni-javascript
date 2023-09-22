function repainting(input){
    let nylon = (Number(input[0]) + 2) * 1.50;
    let paint = (Number(input[1]) + (10/100 * Number(input[1]))) * 14.50;
    let paintThingy = Number(input[2]) * 5.00;
    let bags = 0.40;
    let workHours = Number(input[3])

    let totalPrice = nylon + paint + paintThingy + bags;
    let finalPrice = (totalPrice * 0.3) * workHours;
    let finalFinal = totalPrice + finalPrice;
    console.log(finalFinal)
}
repainting(["10", "11", "4", "8"])
repainting (["5", "10", "10", "1"])