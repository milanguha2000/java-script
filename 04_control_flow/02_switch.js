const month = 3

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("the value is not match");
        break;
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if the value given as a string

const day = "thrus"

switch (day) {
    case "mon":
        console.log("monday");
        break;
    case "tues":
        console.log("tuesday");
        break;
    case "wed":
        console.log("wednesday");
        break;
    case "thrus":
        console.log("thrusday");
        break;
    case "fri":
        console.log("friday");
        break;
    case "sat":
        console.log("saterday");
        break;

    default:
        console.log("sunday");
        break;
}