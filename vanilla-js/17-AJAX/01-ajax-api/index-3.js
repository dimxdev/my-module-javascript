// Fetch (fitur terbaru javascript untuk melakukan request)  ==> mendukung promise
    // Fetch menggunakan promise 
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
            .then((res) => {
                if (!res.ok) {
                    throw Error('data tidak ditemukan');
                }
                // console.log(res);  // Mengecheck root res
                return res.json();
            })
            .then((data) => {
                console.log("request 1 promise", data);
                return fetch('https://api.thecatapi.com/v1/breeds');
            })
            .then((res) => {
                if (!res.ok) {
                    throw Error('data tidak ditemukan');
                }

                return res.json();
            })
            .then((data) => {
                console.log("request 2 promise", data);
            })
            .catch((err) => {
                console.log('error', err);
            });


    
    // Fetch menggunakan async & await
        const animals = async () => {
            try {
                const res = await fetch('https://api.thedogapi.com/v1/breeds');
                const data = await res.json();
                console.log("request 1 async", data);

                const res2 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
                const data2 = await res2.json();
                console.log("request 2 async", data2);
            } catch (err) {
                console.log(err);
            }
        } ;

        animals();