function speedinfo(input){
    let speed = Number(input[0]);
    if(speed <= 10){
        console.log("slow")
    } else if(speed > 10, speed <= 50){
        console.log("average")
    } else if(speed > 50, speed <= 150){
        console.log("fast")
    } else if(speed > 150, speed <= 1000){
        console.log("ultra fast")
    }   else { 
        console.log("extremely fast")
    }
}
speedinfo(["8"])
console.log("---")
speedinfo(["49.5"])
console.log("---")
speedinfo(["126"])
console.log("---")
speedinfo(["160"])
console.log("---")
speedinfo(["3500"])