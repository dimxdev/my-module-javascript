// Callback normal
    // setTimeout(() => {
    //     document.body.style.backgroundColor = "red";
    // }, 1000)
    
    // setTimeout(() => {
    //         document.body.style.backgroundColor = "yellow";
    //     }, 2000);
        
    // setTimeout(() => {
    //             document.body.style.backgroundColor = "green";
    //         }, 3000);
            
    // setTimeout(() => {
    //                 document.body.style.backgroundColor = "blue";
    //             }, 4000);
                 
                
// Callback hell
    setTimeout(() => {
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "yellow";
            setTimeout(() => {
                document.body.style.backgroundColor = "green";
                setTimeout(() => {
                    document.body.style.backgroundColor = "blue";
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000)

    
    searchMoviesApi("naruto", function(movies) {
        saveToMyDb(movies, function() {
            // kalau berhasil disimpan di database
        }, () => {
            // kalau gagal di coba lagi
        });
    }, () => {
        // jika sever error
    });