function solve(input){
    let quantityWrappingPaper = Number(input[0]);
    let quantitySilk = Number(input[1]);
    let quantityGlue = Number(input[2]);
    let quantityDiscount = Number(input[3]);

    let pricePaper =quantityWrappingPaper * 5.80
    let priceSilk = quantitySilk * 7.20
    let priceGlue = quantityGlue * 1.20
    
    let totalPrice = priceGlue + pricePaper + priceSilk
    let priceWithDisc = (totalPrice - (totalPrice * quantityDiscount/100)).toFixed(3)
console.log(priceWithDisc)
}solve(["2", "3", "2.5", "25"])