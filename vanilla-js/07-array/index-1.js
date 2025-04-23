console.clear();
let hobi = ["ngoding", "makan", "tidur"];
    console.log(hobi[0]);
    
// Method penting array javascript
    // 1.push() → Menambah item di akhir
    // 2.pop() → Menghapus item terakhir
    // 3.shift() → Menghapus item pertama
    // 4.unshift() → Menambah item di awal 
    // 5.concat() -> menggabungkan array
    // 6.sort() -> mengurutkan array
    // 7.reverse() -> kebalikan sort
    // 8.indexof() -> ngechek posisi index
    // 9.includes() → ADA ATAU TIDAK?
    // 10.join() -> menggabungkan elemen-elemen dalam array menjadi satu string dengan pemisah(delimeter) tertentu yang sudah ditentukan
    // 11.splice() → Menghapus, Menambah, atau Mengganti Elemen dalam Array 
    // 12.slice() → Memotong array tanpa merusak aslinya


    // push
    let teman3 = ["Adi", "Rifqi"];
    teman3.push("Reza");
    console.log(teman3);
    
    // pop
    teman3.pop();
    console.log(teman3);
    
    // shift
    teman3.shift();
    console.log(teman3);
    
    // unshift 
    teman3.unshift("Rey");
    console.log(teman3);

    // concat 
    let angka1 = [1, 2, "a", 4];
    let angka2 = [5, 6, 7, 8];
    console.log(angka1.concat(angka2));

    // sort & reverse
    const kelas_c = ["Dimas", "Siswo", "safril", "Julian", "Rifqi"];
    console.log(kelas_c.sort());
    console.log(kelas_c.reverse());

    // indexof
    console.log(angka2.indexOf(6));
    console.log(angka2.indexOf(10));
    let angka = [10, 20, 30, 40];
    let posisi = angka.indexOf(30);
    if (posisi !== -1) {
    console.log(`Angka ditemukan di index ke-${posisi}`);
    }
    
    // includes
    console.log(angka2.includes(6));
    console.log(angka2.includes(10));

    // join
    const element = ["api", "air", "tanah"];
    console.log(element.join()); //default
    console.log(element.join('')); 
    console.log(element.join(' * '));
    
    // splice
    let buah = ["apel", "jeruk", "mangga", "pisang"];
    buah.splice(2, 1); // index ke berapa, berapa index yang ingin dihapus
    console.log(buah);

    let angka3 = [1, 2, 4];
    angka3.splice(2, 0, 3) // index ke berapa, berapa index yang ingin dihapus, apa yang ingin dimasukkan
    console.log(angka3);

    // slice
    let buah2 = ["apel", "nanas", "jeruk", "pepaya"];
    let potong = buah2.slice(1, 3); // mulai daindex berapa sampai sebelum index berapa
    console.log(potong);

    let angka4 = [10, 20, 30, 40, 50];
    console.log(angka4.slice(2)); // [30, 40, 50] 🎯 (ambil dari indeks ke-2 sampai akhir)
    console.log(angka4.slice(-2)); // [40, 50] 🔙 (pakai indeks negatif = dari belakang)


// Nested array/ array bersarang 
    const XOX = [
        [null, null, "o"],
        ["x", "o", null],
        ["o", null, "x"]
    ];
    console.log(XOX[2]);
    console.log(XOX[2][1]);





