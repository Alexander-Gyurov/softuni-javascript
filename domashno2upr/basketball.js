function basketball(input){
    let yearlyTax = Number(input[0]);
    let shoes = yearlyTax - (40/100 * yearlyTax);
    let clothes = shoes - (20/100 * shoes);
    let ball = (25/100 * clothes);
    let extra = (1/5 * ball);

    let price = yearlyTax + shoes + clothes + ball + extra;
    console.log(price);
}
basketball(["365"])
basketball(["550"])