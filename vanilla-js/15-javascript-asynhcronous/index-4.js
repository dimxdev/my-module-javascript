// Promise
    // Bentuk umum promise
        const janji = new Promise((resolve, reject) => {
            // Proses asynchronous terjadi di sini

            if (prosesBerhasil) {
                resolve(hasil);  // Janji ditepati
            } else {
                reject(error);  // Janji gagal
            }
        });


    // Contoh sederhana promise
        const janjiMakan = new Promise((resolve, reject) => {
            let lapar = true;

            if (lapar) {
                resolve("sudah makan nasih goreng");
            } else {
                reject("maish lapar 😭");
            }
        });

        // Cara pakai
        janjiMakan
            .then((hasil) => {
                console.log(`sukses: ${hasil}`)
            })
            .catch((error) => {
                console.log(`gagal: ${error}`)
            })

    
    // Contoh dari kodepolitan
        const delayColorChange = (color, delay) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.body.style.backgroundColor = color;
                    resolve();
                }, delay);
            });
        };

        delayColorChange("red", 1000)
            .then(() => delayColorChange("yellow", 1000))
            .then(() => delayColorChange("green", 1000))
            .then(() => delayColorChange("blue", 1000))
            .then(() => delayColorChange("black", 1000))
            .then(() => delayColorChange("orange", 1000))
            .then(() => delayColorChange("gray", 1000))
            .then(() => delayColorChange("purple", 1000))
            .then(() => delayColorChange("pink", 1000))
            .then(() => delayColorChange("#87CEEB", 1000));

        