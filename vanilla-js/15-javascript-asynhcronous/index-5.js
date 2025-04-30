console.clear();

// Async keyword 
    // Contoh 1 (tanpa variabel)
        async function hello1() {
            return "hello world";
        };

        console.log(hello1());
        hello1()
            .then((response) => {
                console.log(`rensonse : ${response}`)
            });

    // Contoh 2 (dengan variabel dan .then)
        const hello2 = async () => {
            return "hello handsome";
        }

        console.log(hello2());
        hello2()
            .then((response) => {
                console.log(`response : ${response}`)
            });
            
        
    // Contoh 3 (dengan variabel, .then, .catch)
        const hello3 = async () => {
            throw "maaf gak kenal";  // Yang bakal dieksekusi yang .catch
        }
        
        // console.log(hello3());
        hello3()
            .then((response) => {
                console.log(`response : ${response}`)
            })
            .catch((reject) => {
                console.log(`reject : ${reject}`)
            })



