// Game mtebak angka menggunakan perulangan
    let maxAngka = parseInt(prompt("masukkan angka maksimal"));
    while (!maxAngka) {
        maxAngka = parseInt(prompt("kubilang masukkan ya masukkan!🤬"));
    }

    const angkaTebakan = Math.floor(Math.random() * maxAngka) + 1;
    console.log(angkaTebakan);

    let inputTebakan = parseInt(prompt("masukkan tebakan pertama kamu!"));
    let jumlahTebakan = 1;

    while (inputTebakan !== angkaTebakan) {
        if (inputTebakan < angkaTebakan) {
           inputTebakan = parseInt(prompt("angka terlalu kecil, tolong masukkan lagi!"));
        } else {
           inputTebakan = parseInt(prompt("angka terlalu besar, tolong masukkan lagi"));
        } jumlahTebakan++ ;
    }

    alert(`selamat anda benar dengan ${jumlahTebakan} kali tebakan`)