function solve(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * height * lenght;
    let index = 3;
    let command = input[index];

    while (command !== `Done`) {
        let numberOfBoxes = Number(command);
        freeSpace -= numberOfBoxes;

        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
            break;
        }
        index++
        command = input[index];
    }

    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`)
    }
}