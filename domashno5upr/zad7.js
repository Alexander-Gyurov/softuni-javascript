function solve(input){
    let gropus = Number(input[0]);
    let musala = 0
    let monblan =  0
    let kilimanjaro = 0
    let k2 = 0
    let everest = 0

    for(let index = 1; index <= gropus; index++){
        let currentGroup = Number(input[index]);

        if(currentGroup <=5){
            musala+= currentGroup;
        }else if(currentGroup <= 12){
            monblan+= currentGroup;
        }else if(currentGroup <=25){
            kilimanjaro+= currentGroup;
        }else if(currentGroup <=40){
            k2+= currentGroup;
        }else{
            everest+= currentGroup;
        }
    }
let total = musala + monblan + kilimanjaro + k2 + everest;

console.log(`${(musala / total*100).toFixed(2)}%`)
console.log(`${(monblan / total*100).toFixed(2)}%`)
console.log(`${(kilimanjaro / total*100).toFixed(2)}%`)
console.log(`${(k2 / total*100).toFixed(2)}%`)
console.log(`${(everest / total*100).toFixed(2)}%`)
}