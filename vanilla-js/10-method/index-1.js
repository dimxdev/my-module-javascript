console.clear();

// Method adalah function yang berada di dalam object. Biasanya digunakan untuk membuat object itu bisa melakukan aksi sendiri. Jadi, kalau object = data, maka method = aksi dari data itu.
// Contoh object biasa
    let user = {
        nama : "Dimas",
        gender : "Laki-laki",
        agama : "Islam",
        usia : 20
    };
    console.log()


// Object with method
    let user2 = {
        nama : "asep",
        gender : "laki-laki",
        sapa : function() {
            console.log(`Halo namaku ${this.nama}`);
        }
    };
    user2.sapa(); // usahakan kalau functon di dalam object jangan menggunakan arrow function
    console.log();


// Keyword this
    let orang = {
        nama : "Dimas",
        hobi : "Belajar koding",
        kenalan : function() {
            console.log(`halo namaku ${this.nama}, hobiku adalah ${this.hobi}`);
        }
    }
    console.log(orang.nama);
    orang.kenalan();
    console.log();


// Descriptor
    const user3 = {};

    Object.defineProperty(user3, "nama", {
    value: "Dimas",
    writable: false,      // ❌ Gak bisa diubah
    enumerable: true,     // ✅ Bisa di-loop
    configurable: true    // ✅ Bisa dihapus / diubah descriptor
    });

    console.log(user3.nama); // "Dimas"
    user.nama = "Ganteng";  // ❌ Gagal (writable: false)
    console.log(user3.nama); // Tetap "Dimas"

    for (let key in user3) {
    console.log(key);     // ✅ Muncul: "nama" (karena enumerable: true)
    }


