// XMLHttpRequest (request bawaan javascript) ==> tidak mendukung promise
    const req = new XMLHttpRequest();
    // let data;

    req.onload = function () {  // Calback function saat berhasil
        // console.log(this);  // mengechek root req
        data = JSON.parse(this.responseText);
        console.log(data);
    };

    req.onerror = function () {   // Callback function saat gagal
        console.log('Error', this);
    };

    req.open('GET', 'https://api.tvmaze.com/schedule?country=US&date=2025-05-04');  // Melakukan request
    req.send();  // untuk memanggil fungsi2 diatas supaya keluar output di console


    