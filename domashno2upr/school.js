function school(input){
    let pens = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let cleaning = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let totalPrice = pens + markers + cleaning;
    let totalWithDiscount = totalPrice - (totalPrice * discount);
    console.log(totalWithDiscount);

}
school(["2", "3", "4", "25"])
school(["4", "2", "5", "13"])