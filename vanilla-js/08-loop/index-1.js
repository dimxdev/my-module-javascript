console.clear();

// for loop
    let hobi = ["ngoding", "makan", "tidur"];
    for (let i = 0; i < hobi.length; i++){
        console.log(hobi[i]);
    }
    console.log();

    let teman = ["Kamal", "Siswo", "Julian", "Sapril"];
    for (let i = 0; i < teman.length; i++){
        console.log(teman[i]);
    }
    console.log();
    
    for(let i = 1; i <= 10; i+= 2){
        console.log(i);
    }
    console.log();
    

// for...of (Modern &  untuk array)
    let teman2 = ["Kamal", "Siswo", "Julian", "Sapril"];
    for (let nama of teman){
        console.log(nama);
    }
    console.log();
    
    
// Nested loop(perulangan bersarang)
    const pilihan = "abcd";
    for (let i = 1; i <= 5; i++){
        console.log(`${i}.soal nomor ${i}`);
        for (let j = 0; j < pilihan.length; j++){
            console.log(`   ${pilihan[j]}. jawaban ${j + 1}`);
        }
    }
    console.log();
    

// Mendapatkan data dari nested array menggunakan nested loop
    const barisStudent = [
        ["Dimas", "Safril", "Julian", "Nopal"],
        ["Febri", "Fairuz", "Putra"],
        ["Rifqi", "Siswo", "Ihsan"]
    ];
    
    for (i = 0; i < barisStudent.length; i++){
        baris = barisStudent[i];
        console.log(`barisan duduk #${i + 1}`);
        for(j = 0; j < baris.length; j++){
            console.log(`  -${baris[j]}`);
        }
    }
    console.log();
    
    for (row of barisStudent) {
        for (murid of row) {
            console.log(murid);
        }
    }
    console.log();


// While loop 
    let num = 0
    while (num < 10){
        console.log(num + 1);
        num++;
    }
    console.log();
    
    
// for in (untuk perulangan object)
    const studentScore = {
        Dimas : 50,
        julian : 70,
        febri: 60,
        safril: 55,
        rifqi : 78,
        siswo :99
    };
    
    for (key in studentScore) {
        console.log(`${key} mendapatkan nilai ${studentScore[key]}`);
    }
    
    let totalScore = 0;
    let scores = Object.values(studentScore) // mengambil isi key dijadikan menjadi array
    for (score of scores) {
        totalScore += score;
    }
    let rataRata = totalScore / scores.length
    console.log(`rata-rata niali = ${rataRata}`);
    console.log();
    

