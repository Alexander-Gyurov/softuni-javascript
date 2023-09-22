function bonusScore(input){
let wholeNum = Number(input[0])
let bonus = 0.0;
if(wholeNum <= 100){
    bonus = 5
    if(wholeNum % 2 == 0){
        bonus += 1
    } else if (wholeNum % 10 == 5){
        bonus +=2
    }
} else if(wholeNum > 1000){
bonus = wholeNum * 1.20
if(wholeNum % 2 == 0){
    bonus += 1
} else if (wholeNum % 10 == 5){
    bonus +=2
}
} else{
    bonus = wholeNum * 1.10
    if(wholeNum % 2 == 0){
        bonus += 1
    } else if (wholeNum % 10 == 5){
        bonus +=2
    }
}

console.log(bonus)
console.log(wholeNum + bonus)
}