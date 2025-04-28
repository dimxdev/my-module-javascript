console.clear();

// Extend dan fungsi super
    class Peliharaan {
        constructor(nama, age) {
            this.nama = nama;
            this.age = age;
        }

        makan() {
            return `${this.nama} lagi makan`;
        }
    }

    class Kucing extends Peliharaan {
        constructor(nama, age, lives) {
            super(nama, age);
            this.lives = lives;
        }

        meong() {
            return `meowwww!`
        }

        nyawa() {
            return `${this.nama} masih memiliki ${this.lives} nyawa`;
        }
    }

    class Anjing extends Peliharaan {
        gonggong() {
            return `gukguk!`
        }
    }


    const kucing1 = new Kucing("garfil", 3, 9);
    const anjing1 = new Anjing("helly", 2);
    console.log(kucing1);
    console.log(anjing1); 
    console.log(anjing1.gonggong()); 
    console.log(anjing1.makan()); 
    console.log(kucing1.meong());
    console.log(kucing1.nyawa());
    console.log(kucing1.makan());
    console.log();