console.clear();

// Latihan request menggunakan callback function 
    const requestCallback = (url, success, failure) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                failure("error: connection timeout");
            } else {
                success(`succes: ${url} (${delay}ms)`);
            }
        }, delay);
    };

    requestCallback("movie.com", function(response){
        console.log(`success ${response}`);
        requestCallback("movie.com", function(response){
            console.log(`success ${response}`);
            requestCallback("movie.com", function(response){
                console.log(`success ${response}`);
                requestCallback("movie.com", function(response){
                    console.log(`success ${response}`);
                    requestCallback("movie.com", function(response){
                        console.log(`success ${response}`);
                    }, function(error) {
                        console.log(`error ${error}`);
                    })
                }, function(error) {
                    console.log(`error ${error}`);
                })
            }, function(error) {
                console.log(`error ${error}`);
            })
        }, function(error) {
            console.log(`error ${error}`);
        })
    }, function(error) {
        console.log(`error ${error}`);
    })


