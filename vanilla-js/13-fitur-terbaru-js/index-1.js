console.clear();
// Default value pada function
    function lemparDadu(sisi = 6) {
       return Math.floor(Math.random() * sisi) + 1;
    }
    console.log(lemparDadu());

    function sapa(nama = "user", pesan = "parameternya coi") {
        return `${nama}, ${pesan}`
    }
    console.log(sapa("dimas"));
    console.log();


// Mengubah array / object menjadi deret value argument function menggunakan spread operator(...)
    const angka = [1, 2, 3, 4, 5, 6];
    console.log(Math.max(...angka));
    console.log(Math.min(...angka));
    console.log(...angka);
    console.log();

    const user = {
        nama : "Dimas",
        umur : 19,
    }
    const kontak = {
        instagram : "@dimxdev__",
        linkedin : "dimxdev"
    }
    const profileLengkap = {
        ...user,
        ...kontak,
        learning : "javascript and react",
    }
    console.log(profileLengkap);
    console.log();
    console.log();


// Menggabungkan array menggunakan spread operator (...)
    const nama = ["Dimas", "Fairuz", "Daud"];
    const number = [3, 5, 7, 8, 9, 0, 19];
    const campuran = [...nama, "woiwoiwoiwoi", ...number];
    console.log(campuran);
    console.log(...campuran);
    console.log();


// Unlimited parameter function menggunakan spread operator (...)
    const sumAll = (...num) => {
        return num.reduce((a1, a2) => a1 + a2);
    }
    console.log(sumAll(3, 4, 5, 6, 7, 8, 9, 99687));
    console.log();
    
    const pesertaLomba = ["Dimas", "Julian", "Aril", "Rifqi", "Noval", "Anji", "Sundar", "Adi"];
    const pemenangLomba = (juara1, juara2, juara3, ...sisa) => {
        console.log(`medali emas diraih oleh : ${juara1}`);
        console.log(`medali perak diraih oleh : ${juara2}`);
        console.log(`medali perunggu diraih oleh : ${juara3}`);
        console.log(`peserta lainnya : ${sisa}`);
    }
    pemenangLomba(...pesertaLomba);
    console.log();


// Bongkar element array ke masing-masing variabel dengan mudah
    const mahasiswaKelasC = ["Dimas", "Julian", "Rizqi", "Kais", "Rifqi", "Fazri"];
    const [rank1, rank2, rank3, ...sisanya] = mahasiswaKelasC;
    console.log(rank1);
    console.log(rank2);
    console.log(rank3);
    console.log(...sisanya);
    console.log(sisanya);
    console.log();


// Bongkar property object ke masing-masing variabel
    const admin = {
        name : "sutris",
        email : "sutris@gmail.com" 
    };
    const {name : namaa, email, phone = "081239827193"} = admin;
    console.log(admin.name);
    console.log(namaa);
    // console.log(name); // ini akan error karena name sudah diganti dengan name lain yaitu namaa 
    console.log(admin.email);
    console.log(email);
    console.log(admin.phone);
    console.log(phone);
    console.log();


// Bongkar property objek menggunakan function
    const requirement = {
        nama : "Dimas",
        email : "brotowalidimas@g,ail.com",
        role : "developer"
    };

    const namaAndRole = ({nama, role}) => {
        return `${nama} - ${role}`;
    }
    console.log(namaAndRole(requirement));
    console.log();

    // contoh lain
    const kartuns = [
        {
            judul : "upin-ipin",
            rating :  10,
        },
        {
            judul : "spongebob", 
            rating : 9,
        },
        {
            judul : "boboiboy",
            rating : 7,
        }
    ];
    const kartun = kartuns.map(({judul, rating}) => {
        return `judul : ${judul}, rating : ${rating}`;
    })
    console.log(kartun);




