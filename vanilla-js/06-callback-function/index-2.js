console.clear();

// Function biasa
    function tambah(a, b) {
        return a + b;
    }
    const hasilTambah = tambah(5, 7);
    console.log(hasilTambah);


// Function exspresion
    const kurang = function(a, b) {
        return a - b;
    }
    console.log(kurang(6, 9));


// Arrow function
    const kuadrat = (a) => {  // boleh juga parameter gausah pake kurung kalau cuma satu parameter
        return a * a;
    }
    console.log(kuadrat(7));
    
    const perkalian = (a, b) => {
        return a * b;
    }
    console.log(perkalian(9, 8));


// Implisit return pada arrow function
    const kuadratSecond = (a) => a * a; // auto buang retrun dan kurung kurawal jika hanya satu baris
    console.log(kuadratSecond(8));

    const random = () => (  // bisa pake ini juga kalau kode cuma satu baris tapi lumayan panjang 
        Math.floor(Math.random() * 6) + 1
    )
    console.log(random());
    console.log();


// Settimeout (program akan dieksekusi setelah waktu yang ditentukan)
    console.log("hallo");
    setTimeout(() => {
        console.log("masih disana gk?");
    }, 2000);


// Setinterval (program akan dieksekusi setiap berapa waktu yang dentukan setiap waktu yang ditentukan)
    const intervalKu = setInterval(() => {
        console.log(Math.random() * 5)
    }, 1);

    // Cara menghentikan (harus dimasukkan ke =dalam variabel)
    setTimeout(() => {
        clearInterval(intervalKu);
        console.log("angka random dihentikan");
    }, 5000);
    