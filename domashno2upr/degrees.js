function degrees(input){
    let radian = Number(input[0]);
    let degree = radian * 180/Math.PI;
    console.log(degree);
}
degrees(["3.1416"])
degrees(["6.2832"])