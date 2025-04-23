console.clear()
// Function Biasa 
    function sapa1() {
        console.log("halo ganteng!!");
    }
    sapa1();
    console.log();
    
    
// Function dengan parameter
    function sapa(nama) {
        console.log(`halo ${nama} ganteng!!`);
    }
    sapa("Dimas");
    console.log();
    
    
// Function dengan return value
    function tambah(a, b) {
        return a + b;
    }
    tambah = tambah(10, 16);
    console.log(tambah);
    console.log();
    
    
// Arrow Function
    const kali = (a, b) => {
        return a * b;
    }
    console.log(kali(10, 20));
    
    const bagi = (a, b) => a / b;  // auto buang retrun dan kurung kurawal jika hanya satu baris
    console.log(bagi(10, 100));
    
    const sapa2 = (nama) => {
        console.log(`Hai ${nama} ganteng!`)
    }
    sapa2("Dimas")
    console.log();


// Scope / ruang lingkup
    let programming = "javascript";
    function program() {
        let programming = "typescript"; // jika belum di deklarasi ulang maka akan mengubah isi variabel
        console.log(programming); // typescript
    }
    console.log(programming); // javascript
    program();
    console.log();


// Lexical scope
    function lamarKerja() {
        const jabatan = "programmer";

        function orangDalam() {
            let kenalan = `orang dalam bisa memasukkan ${jabatan}`; // memanggil variabel diluar fungsi tapi juga variabel tersebut didalam fungsi
            console.log(kenalan);
        }

        orangDalam();
    }
    lamarKerja();
    console.log();


// Function expresion (membuat fungsi di dalam variabel)
    const perpangkatan = function (nilai) {
        return nilai * nilai;
    }
    console.log(perpangkatan(5));
    console.log();


// Function sebagai argumen function lain
    function duaKali(func) {
        func();
        func();
    }

    function lemparDadu() {
        let hasil = Math.floor(Math.random() * 6) + 1;
        console.log(hasil);
    }
    duaKali(lemparDadu);
    console.log();


// Function dengan return function 
    function returnFunction() {
        const angkaRandom = Math.floor(Math.random() * 10) + 1;
        if (angkaRandom > 5) {
            return function() {
                console.log("angka lebih besar dari 5");
                console.log(`angka adalah ${angkaRandom}`);
            } 
        } else if (angkaRandom < 5) {
            return function() {
                console.log("angka lebih kecil dari 5");
                console.log(`angka adalah ${angkaRandom}`);
            }
        } else {
            return function() {
                console.log("angka adalah 5");
                console.log(`angka adalah ${angkaRandom}`);
            }
        }
    }
    const coba = returnFunction(); // harus dimasukkan ke variabel soalnya menggunakan anonymous function
    coba();
    console.log();


// Function dengan lebih dari satu return
    function penjumlahanAritmatika(n) {
        let penjumlahanManual = 0;
        for (let i = 1; i <= n; i++) {
            penjumlahanManual += i;
        }

        let penjumlahanRumus = n * (n + 1) / 2;

        return {
            manual : penjumlahanManual,
            rumus : penjumlahanRumus,
            pembanding : penjumlahanManual === penjumlahanRumus
        }; 
    }

    for (let n = 1; n <= 5; n++) {
        let hasil = penjumlahanAritmatika(n);
        console.log(`untuk n = ${n}`);
        console.log(`penjumlahan manual = ${hasil.manual}`);
        console.log(`penjumlahan rumus = ${hasil.rumus}`);
        console.log(`apakah sama nilainya = ${hasil.pembanding}\n`);
    }

    