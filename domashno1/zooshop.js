function zooshop(input){
    let dogFoodPrice = Number(2.50);
    let catFoodPrice = Number(4);
    let dogFood = Number(input[0])
    let catFood = Number(input[1])
    let bothFoods = (dogFoodPrice * dogFood) + (catFoodPrice * catFood)
    console.log(`${bothFoods} lv.`)
}
zooshop(["5", "4"])
zooshop(["13", "9"])