console.clear();

// OOP js
class Robot {
    constructor(nama, pembuat, tujuan) {
      this.nama = nama;
      this.pembuat = pembuat;
      this.tujuan = tujuan;
    }
  
    perkenalan() {
      console.log(`Halo, aku ${this.nama}, dibuat oleh ${this.pembuat}, untuk ${this.tujuan}.`);
    }
  
    sapa(namaOrang) {
      console.log(`Halo ${namaOrang}, semoga harimu menyenangkan! 😊`);
    }
  }
  
  const robot1 = new Robot("Lexa", "Dimas", "membantu manusia");
  robot1.perkenalan();
  robot1.sapa("Dimas");
  