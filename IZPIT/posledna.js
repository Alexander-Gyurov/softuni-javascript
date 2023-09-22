function generateMultiplicationTable(number) {
    let numberString = `${number}`
    let firstDigit = Number(numberString[2])
    let secondDigit = Number(numberString[1])
    let thirdDigit = Number(numberString[0])
  
    for (let i = 1; i <= firstDigit; i++) {
      for (let j = 1; j <= secondDigit; j++) {
        for (let k = 1; k <= thirdDigit; k++) {
          let product = i * j * k;
          console.log(`${i} * ${j} * ${k} = ${product};`);
        }
      }
    }
  }generateMultiplicationTable(["324"])
  
