// tipe data primitive (dasar)
    let nama = "Dimas";                           // String
    const umur = 20;                              // Number
    let ApakahHidup = true;                       // Boolean
    let pacar = null;                             // Null
    let BelumDiisi;                               // Undefined
    let AngkaBesar = 12345570608893n;             // Bigint

    // tipe data bentukan
    let hobi = ["ngaji", "ngodding"];             // Array
    let user = {nama : "Dimas", umur : "19"};     // Object
    function sapa(){                              // Function
        console.log("halo", nama, "ganteng");
    }

    sapa();
    console.log(nama);
    console.log(`selamat malam ${nama} ganteng`);

    let namaa = "Dimas";
    console.log(namaa)
    console.log(namaa[1]);
    console.log(namaa.length);

    namaa = namaa + " ganteng";
    console.log(namaa)

    let namadepan = "Dims"
    let namabelakang = "hidytlh"
    let namalengkap = namadepan + " " + namabelakang
    console.log(namalengkap) 
    namalengkap += 1                                    // auto jadi string
    console.log(namalengkap) 
    namalengkap += " rower"
    console.log(namalengkap) 
    console.log(namalengkap.replace("rower", "tampan")) // mengganti
    console.log(namalengkap.slice(2,9))                 // dari index sekian sampai sekian
    console.log(typeof namalengkap) 
    console.log(namalengkap.toLocaleUpperCase())        // uppercase
    console.log("HHHHHello".toLocaleLowerCase())        // lowercase 

