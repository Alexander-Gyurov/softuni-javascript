function solve(input){
    let index = 0
    let people = Number(input[index])
    let category1 = 0
    let category2 = 0
    let category3 = 0
    let category4 = 0 
    let categoryPercent1 = 0
    let categoryPercent2 = 0
    let categoryPercent3 = 0
    let categoryPercent4 = 0
    let totalgrade = 0
    index++
    for(let i = index; i <=people; i++){
        //let quantityGrade ="0
        totalgrade += Number(input[i])
        let grade = Number(input[i])
        if(grade >= 5.00){
            category1++
        }else if(grade >=4 && grade <=4.99){
            category2++
        }else if(grade >=3 && grade <= 3.99){
            category3++
        }else if(grade <3){
            category4++
        }
         
    }
    categoryPercent1 = ((category1 / people * 100)).toFixed(2)
    categoryPercent2 = ((category2 / people * 100)).toFixed(2) 
    categoryPercent3 = ((category3 / people * 100)).toFixed(2) 
    categoryPercent4 = ((category4 / people * 100)).toFixed(2)  
    console.log(`Top students: ${categoryPercent1}%`)
    console.log(`Between 4.00 and 4.99: ${categoryPercent2}%`)
    console.log(`Between 3.00 and 3.99: ${categoryPercent3}%`)
    console.log(`Fail: ${categoryPercent4}%`)
    let avg = (totalgrade / people).toFixed(2)
    console.log( `Average: `+ avg)

}solve(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

