// Mengenal event prevendefault (jika ada suatu link atau yang akan berpindah ke halaman lain maka dia tidak akan berpindah ketika menggunakan event preventdefault)
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Nanti dia tidak akan pindah ke halaman yang direncanakan sebelumnya
        console.log("formnya udah di submit!");
    });


    const a = document.querySelector('a');
    
    a.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("harusnya ini bakal ke youtube");
    }); 
