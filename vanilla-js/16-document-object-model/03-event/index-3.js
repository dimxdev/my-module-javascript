// Mengenal fungsi addEventListener
    // Contoh sederhana
        const button1 = document.querySelector('#button1');
        button1.addEventListener('click', function () {
            alert("jawa jawa jawaa");
        });

        button1.addEventListener('click', () => {
            console.log("jawaaaa!");
        });


        const button2 = document.querySelector('#button2');
        function klik1() {
            alert("hei");
        };

        const klik2 = () => {
            console.log("hei hei hei");
        };

        button2.addEventListener('mouseover', klik1);
        button2.addEventListener('mousemove', klik2);


        const h1 = document.querySelector('h1');
        h1.addEventListener('copy', () => {
            alert("woi ngapain copy-copy mau di masukkin gpt ya");
        });
        


    // Kenapa harus menggunakan addEventListener? kenapa nggak pake property DOM saja?
        /*
            - pakai property DOM = semisal kita ingin melakukan 2 event yang sama pada 1 element maka event yang pertama akan ditimpa
            - pakai addEventListener = semisal kita ingin melakukan 2 event yang sama pada 1 element maka kedua event akan dijalankan secara berurutan
        */