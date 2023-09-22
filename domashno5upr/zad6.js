function solve(input){

    let actorName = input[0];
    let startPoints = Number(input[1]);
    let judges = Number(input[2]);

for (let index = 3; index < input.length; index++) {
    let judgeName = input[index];//3
    index++
    let judgePoints = Number(input[index])//4
                                    //
    let currentJudgePoints = (judgeName.length * judgePoints) / 2

    startPoints += currentJudgePoints;

    if(startPoints > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startPoints.toFixed(1)}!`)
        ;break
    }
}
    if(startPoints <=1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startPoints).toFixed(1)} more!`)
    }


}

solve(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
