// const day = parseInt(prompt("masukkan hari 1-7"));
const day = prompt("masukkan hari 1-7");

switch(day){
    case "1" :
        console.log("senin");
        break;
    case "2" :
        console.log("selasa");
        break;
    case "3" :
        console.log("rabu");
        break;
    case "4" :
        console.log("kamis");
        break;
    case "5" :
        console.log("jum'at");
        break;
    case "6" :
        console.log("sabtu");
        break;
    case "7" :
        console.log("minggu");
        break;
    default :
        console.log("invalid day");
}
