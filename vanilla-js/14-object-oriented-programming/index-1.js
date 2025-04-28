console.clear();

// Membuat object dengan factory function 
    /*
      Kita membuat fungsi yang tugasnya bikin object baru setiap kali fungsi itu dipanggil. 
      Fungsi itu seperti "pabrik" (factory).
      Kalau kamu minta sesuatu ke pabrik itu, dia bikin barang baru untukmu (dalam hal ini, object baru).
      createCar = pabriknya.
      car1 dan car2 = mobil-mobil baru hasil produksi pabrik.
    */


    // Struktur umum factory function
        function namaFactory(parameter1, parameter2) {
            const obj = {};  // buat object kosong

            obj.property1 = parameter1;  // isi property
            obj.property2 = parameter2;

            obj.method = function() {  // isi method (opsional)
                // sesuatu yang dilakukan object
            };

            return obj;  // Kembalikan obj baru 
        }


    // Contoh sederhana
        function createCar(brand, color) {
            const car = {};

            car.brand = brand;
            car.color = color;

            car.drive = function() {
                return `mobil ${this.brand} warna ${this.color} sedang dikendarai`;
            };

            return car;
        }

        const car1 = createCar("toyota", "Merah");
        const car2 = createCar("Alphard", "Biru");

        console.log(car1);
        console.log(car2);
        console.log(car1.drive());
        console.log(car2.drive());
        console.log();

    
    // Contoh from kodepolitan 
        function convertColor(r, g, b) {
            const color = {};

            color.r = r;
            color.g = g;
            color.b = b;

            color.rgb = function() {
                const {r, g, b} = this;
                return `rgb(${r}, ${g}, ${b})`;
            };

            color.hex = function() {
                const {r, g, b} = this;
                return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            };

            return color;
        }

        const colorr = convertColor(34, 56, 78);
        console.log(colorr);
        console.log(colorr.rgb());
        console.log(colorr.hex());
        console.log();


