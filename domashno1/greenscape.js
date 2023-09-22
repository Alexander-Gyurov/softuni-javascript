function greenScaping(input){
    let VAT = Number(7.61);
    let discount = Number(0.18);
    let land = Number(input[0]);
    let landPrice = land * VAT;
    let discountedPrice = discount * landPrice;
    let endPrice = landPrice - discountedPrice;
    console.log(`The final price is ${endPrice} lv.`)
    console.log(`The discount is ${discountedPrice} lv.`)
}
greenScaping (["550"])
greenScaping (["150"])