function projectCreation(input){
    let name = (input[0]);
    let project = (input[1]);
    let time = Number(3);
    let projectTime = project * time;
console.log(`The architect ${name} will need ${projectTime} hours to complete ${project} project/s.`)

}
projectCreation(["George", "4"])
projectCreation(["Sanya", "9"])