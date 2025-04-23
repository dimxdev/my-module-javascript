const robot = {
    nama : "Lexa",
    pembuat : "Dimas",
    tujuan : "Membantu manusia",
    perkenalan : function() {
        console.log(`Halo namaku ${this.nama}, aku adalah robot pintar yang dibuat oleh ${this.pembuat}, tujuanku dibuat adalah untuk ${this.tujuan}`);
    }, 

    // Method modern
    sapa(nama) {
        console.log(`Selamat pagi ${nama} pintar😊, semoga hari harimu penuh dengan keberkahan🤗🤗`);
    }
}


