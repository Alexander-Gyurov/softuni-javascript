function solve(input){
    let town = input[0];
    let sale = Number(input[1]);
    let end = "0"
switch (town){
    case "Sofia":
        if(sale >=0 && sale <= 500){
            end = sale * 0.05
            console.log(end.toFixed(2));
        } else if(sale >= 500 && sale <= 1000){
            end = sale * 0.07
            console.log(end.toFixed(2));
        } else if(sale >= 1000 && sale <= 10000){
            end = sale * 0.08
            console.log(end.toFixed(2));
        } else if(sale > 10000){
            end = sale * 0.12
            console.log(end.toFixed(2));
        } else{
            console.log("error")
        }; break;
    case "Varna":
        if(sale >=0 && sale <= 500){
            end = sale * 0.045
            console.log(end.toFixed(2));
        } else if(sale >= 500 && sale <= 1000){
            end = sale * 0.075
            console.log(end.toFixed(2));
        } else if(sale >= 1000 && sale <= 10000){
            end = sale * 0.10
            console.log(end.toFixed(2));
        } else if(sale > 10000){
            end = sale * 0.13
            console.log(end.toFixed(2));
        } else{
            console.log("error")
        }; break;
    case "Plovdiv":
        if(sale >=0 && sale <= 500){
            end = sale * 0.055
            console.log(end.toFixed(2));
        } else if(sale >= 500 && sale <= 1000){
            end = sale * 0.08
            console.log(end.toFixed(2));
        } else if(sale >= 1000 && sale <= 10000){
            end = sale * 0.12
            console.log(end.toFixed(2));
        } else if(sale > 10000){
            end = sale * 0.145
            console.log(end.toFixed(2));
        } else{
            console.log("error")
        }; break;
    default:
        console.log("error"); break;
}
}
solve (["Kaspichan",
"-50"])




