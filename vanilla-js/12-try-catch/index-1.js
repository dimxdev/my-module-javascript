console.clear();

// Contoh sederhana
    try {
        saya.kenalan();
    } catch {
        console.log("error bos!!");
    }

    console.log("pagi gess"); 
    console.log();

    /* 
      kelebihan menggunakan try and catch adalah ketika da baris kode yang error dia tetap akan bisa mengeksekusi kode berikutnya. 
    */


// Contoh kalo di dalam function
    function convertKeKapital(teks) {
        try {
            console.log(teks.toUpperCase());
        } catch (error) {
            console.log(error);
            console.log("parameter harus string ya ganteng")
        }
    }
    convertKeKapital(123);
    console.log()

    function perkalian(a, b) {
        try {
            if (typeof a !== "number" || typeof b !== "number") {
                throw new Error("Kedua parameter harus angka, bukan huruf 😤");
            }
            return a * b;
        } catch (error) {
            return `parameternya harus angka ya ganteng!!\n${error}`;
        }
    }
    console.log(perkalian(1, "x")); 

    
