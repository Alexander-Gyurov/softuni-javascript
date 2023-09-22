function literature(input){
let pagesOnBook = Number(input[0]);
let pagesPerHour = Number(input[1]);
let daysForBook = Number(input[2]);

    let timeForBook = pagesOnBook / pagesPerHour;
    let timePerDay = timeForBook / daysForBook;
    console.log(timePerDay);
}
literature(["212", "20", "2"])
literature(["432", "15", "4"])