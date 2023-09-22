function solve(input){
    let index = 0
    let command =  input[index];
    index++

    while(true){
        if(command === "Stop"){
            break;
        }
        console.log(command);
        command = input[index]
        index++
    }

}