function solve(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let buff = ""

    for (let i = startInterval; i <= endInterval; i++) {
        let numAsString = String(i)
        let sumEvenPosition = 0;
        let oddPosition = 0;

        for (let chPosition = 0; chPosition < numAsString.length; chPosition++) {
            if (chPosition % 2 === 0) {
                sumEvenPosition += Number(numAsString[chPosition])
            } else {
                oddPosition += Number(numAsString[chPosition])
            }
        }
        if (sumEvenPosition === oddPosition) {
            buff += numAsString + " "
        }
    }
    console.log(buff)
}