function solve(input) {

    let n = Number(input[0]);
    let printNum = 1
    let isFinish = false

    for (let row = 1; row <= n; row++) {
        let buff = ""
        for (let col = 1; col <= row; col++) {
            buff += `${printNum} `
            if(printNum === n){
                isFinish = true
                break;
            }
            printNum++
            
        }
        console.log(buff)
        if(isFinish){
            break;
        }
    }
}