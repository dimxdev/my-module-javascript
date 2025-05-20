// Belajar Keyboard Event Dan Mengenal Object Dalam Event
    // Contoh untuk mengechek apa aja sih objek listener
        const button = document.querySelector('button');
        button.addEventListener('click', (e) => {   // Nama parameter bebas (berisi object listener)
            console.log(e);
        });
        
        button.addEventListener('mouseover', (e) => {   // Nama parameter bebas (berisi object listener)
            console.log(e);
        });



    // Mengenal listener keyup & keydown (keyboard ditekan & dilepas)
        const input = document.querySelector('input');
        input.addEventListener('keydown', (e) => {
            console.log("keyboard ditekan");
            console.log(e);
        });
        
        input.addEventListener('keyup', (e) => {
            console.log("keyboard dilepas");
            console.log(e.key);  
            console.log(e.code);  
            console.log(e.keyCode);  
        });


    
    // Latihan sederhana
        const input2 = document.querySelector('#input2');
        input2.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowUp' :
                    console.log("arrowUp di tekan");
                    break;
                case 'ArrowDown' :
                    console.log("arrowDown ditekan");
                    break;
                case 'ArrowLeft' :
                    console.log("arrowLeft ditekan");
                    break;
                case 'ArrowRight' :
                    console.log("arrowRight ditekan");
                    break;
                default :
                    console.log("diabaikain!")
            }
        });