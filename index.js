function ConvertToCelsius(F)
{
    let C = (F-32) * 5 / 9;

    return C;
}
function DescribeTempature(F)
    {
        let C = ConvertToCelsius(F);

        let message = `${F} F is ${C} C, `;
    if(C < 0 ){
    message += "Very Cold"; 
} else if (C < 20) {
    message += "Cold";
} else if (C < 30) {
    message += " Warm";
}
else if (C < 40){
    message += "Hot";
}
else if (C >= 40){
    message += " Very Hot";
}


return message;
    }

    let F = prompt("Enter number of F");
let description = DescribeTempature(F);
alert(description);