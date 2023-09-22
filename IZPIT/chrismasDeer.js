function solve(input){
let days = Number(input[0])
let totalFood = Number(input[1])
let foodDeer1PerDay = Number(input[2])
let foodDeer2PerDay = Number(input[3])
let foodDeer3PerDay = Number(input[4])

let deer1 = days * foodDeer1PerDay
let deer2 = days * foodDeer2PerDay
let deer3 = days * foodDeer3PerDay
let totalNeededFood = deer1 + deer2 +deer3

if(totalNeededFood <= totalFood){
    let diff = Math.floor(totalFood - totalNeededFood)
    console.log(`${diff} kilos of food left.`)
} else{
    let diff = Math.ceil(totalNeededFood - totalFood)
    console.log(`${diff} more kilos of food are needed.`)
}

}solve(["2"
    ,"10"
    ,"1"
    ,"1"
    ,"2"
    ])