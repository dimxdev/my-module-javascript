console.clear();
let mahasiswa = {
    nama : "Dimas",
    Nim : 2350081081,
    aktif : true,
    "jenis kelamin" : "laki-laki"
};


// Memanggil menggunakan Dot notation (tradisional)
    console.log(mahasiswa.nama);


// memanggil menggunakan Bracket notation (modern) jika key ada spasi 
    console.log(mahasiswa["nama"]);
    console.log(mahasiswa["jenis kelamin"]);

    let i = "jenis kelamin";
    let j = "Nim"; 
    console.log(mahasiswa[i])
    console.log(mahasiswa[j])


// Menambahkan
    mahasiswa.hobi = "ngoding";
    console.log(mahasiswa);


// Mengubah 
    mahasiswa.Nim = 2350081089;
    console.log(mahasiswa);


// Looping object
    for (let kuy in mahasiswa){
        console.log(`${kuy}: ${mahasiswa[kuy]}`);
    }

    for (let key in mahasiswa){
        console.log(key)
    }


// memanggil array dalam object
    const shoppingCart = [
        {
            product : "vue.js",
            price : 3,
            quality : 50
        },
        {
            product : "react.js",
            price : 5,
            quality : 70
        },
        {
            product : "angular.js",
            price : 7,
            quality :100
        }
    ];
    console.log(shoppingCart[1]);
    console.log(shoppingCart[1].product); // disarankan
    console.log(shoppingCart[1]['product']); // tidak disarankan