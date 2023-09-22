function aquarium(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3])/100;

    let volume = lenght * width * height;
    let volumeL = volume * 0.001;
    let needed = volumeL * (1 - percent);
    console.log(needed);
}
aquarium(["85", "75", "47", "17"]);
aquarium(["105", "77", "89", "18.5"])