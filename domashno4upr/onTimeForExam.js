function solve(input){
let hoursExam = Number(input[0]);
let minExam = Number(input[1]);
let horsArrive = Number(input[2]);
let minArrive = Number(input[3]);

let timeExam = hoursExam * 60 + minExam
let timeArrive = horsArrive * 60 + minArrive
let diff = Math.abs(timeExam - timeArrive)
let h = Math.floor(diff / 60);
    let min = diff % 60;
if(timeArrive < timeExam && (timeExam - timeArrive > 30)){
    console.log("Early");
    if(h > 0){
        if(min < 10){
            console.log(`${h}:0${min} hour before the start`)
        } else{
        console.log(`${h}:${min} hours before the start`)
        }
    } else{
         
    }
} else if(timeArrive <= timeExam){
    console.log("On time");
    if(min > 0){
        console.log(`${min} minutes before the start`)
    } 
} else{
    console.log("Late");
    if(h > 0){
        if(min < 10){
            console.log(`${h}:0${min} hours after the start`)
        } else{
            console.log(`${h}:${min} hours after the start`)

        }
    } else{
        console.log(`${min} minutes after the start`)
    }
}


}