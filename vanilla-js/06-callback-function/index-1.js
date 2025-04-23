console.clear();

// Foreach adalah fungsi di array untuk mengambil nilainya satu satu dan kita bisa otak atik nialinya satu persatu menggunakan function 
    const angka = [1, 2, 3, 4, 5, 6, 7, 8];
    angka.forEach(function(num) {
        console.log(num * num);
    })
    console.log()

    const animes = [
        {
            tittle : "naruto",
            rating : 80,
        },
        {
            tittle : "one piece",
            rating : 90,
        },
        {
            tittle : "gojo",
            rating : 78,
        }
    ];
    animes.forEach(function(anime) {
        console.log(`anime: ${anime.tittle} - rating: ${anime.rating}`);
    })
    console.log();


// Map adalah fungsi di array untuk membuat array baru tapi yang udah dimodifikasi
    const names = ["Dimas", "Siswo", "Azizul", "Angga"]
    const namesCapsLock = names.map(function(name) {
        return name.toUpperCase();
    })
    console.log(namesCapsLock);

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
    const judulKartun = kartuns.map(function(kartun) {
        return kartun.judul;
    })
    const ratingKartun = kartuns.map(function(kartun) {
        return kartun.rating;
    })
    console.log(judulKartun);
    console.log(ratingKartun);
    console.log();

    // Jadi foreach ama map itu kayak adek kakak, yg foreach pake console.log, yang map mengembalikan nilai/ pakai return


// Filter adalah fungsi array yang mengembalikan nilai array lagi sesuai kebutuhan kita 
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const angkaGanjil = number.filter(num => num % 2 === 1)  // penulisan modern heheh
    console.log(angkaGanjil)

    const animes2 = [
        {
            judul : "Hunter X Hunter",
            rating : 80,
            year : 2020,
        },
        {
            judul : "Naruto",
            rating : 99,
            year : 2005,
        },
        {
            judul : "Doraemon",
            rating :89,
            year : 2012,
        },
        {
            judul : "Attack on Titan",
            rating : 65,
            year : 2017,
        }
    ];
    const animeBagus = animes2.filter(anime => anime.rating > 85).map(anime => anime.judul);  // Cara penulisan modern 
    const animeBaru = animes2.filter(function(anime) {
        return anime.year > 2015;
    }).map(function(anime) {
        return anime.judul;
    })  // Cara penulisan tradisional wkwk
    console.log(animeBagus);
    console.log(animeBaru);
    console.log();


// Every adalah fungsi di array yang mengembalikan nilai boolean, dia akan true jika semua isi di dalam array sesuai dengan kriteria yang ditentukan diawal
    const examScore = [90, 65, 80, 70, 55, 78];
    const isGraduate = examScore.every(score => score > 50);
    console.log(isGraduate);


// Some adalah fungsi di array yang mengembalikan nilai boolean, dia akan true jika salah satu isi di dalam array sesuai dengan kriteria yang ditentukan diawal
    const kata = ["halo", "heyy", "horeeee"];
    const isEmpatKata = kata.some(sapa => sapa.length === 4);
    console.log(isEmpatKata);

    const isAdaAnimeBaru = animes2.some(anime => anime.year > 2025);
    console.log(isAdaAnimeBaru);
    console.log();


// Reduce adalah fungsi di dalam array untuk membandingkan isi array
    const examScore2 = [90, 65, 80, 70, 55, 78, 90];
    // menggunakan perulangan manual
        let total = 0;
        for (let score of examScore2) {
            total += score;
        }
        console.log(total);

    // menggunakan fungsi reduce
        const totalExamScore = examScore2.reduce((scoreSatu, scoreDua) => scoreSatu + scoreDua);
        console.log(totalExamScore);
        console.log();

    const bestAnime = animes2.reduce((bestAnimex, currentAnimex) => {
        console.log(bestAnimex, currentAnimex);
        if (currentAnimex.rating > bestAnimex.rating) {
            return currentAnimex;
        } return bestAnimex;
    })
    console.log(bestAnime);
    console.log();
    
    const lowAnime = animes2.reduce((lowAnimex, currentAnimex) => {
        console.log(lowAnimex, currentAnimex);
        if (currentAnimex.rating < lowAnimex.rating) {
            return currentAnimex;
        } return lowAnimex;
    })
    console.log(lowAnime);
    console.log();

        // Ada syntak yang lebih sederahan untuk mencari anime terbaik dan terburuk(rating)
            // best
            const best = animes2.reduce((a, b) => b.rating > a.rating ? b : a);
            // worst
            const worst = animes2.reduce((a, b) => b.rating < a.rating ? b : a);