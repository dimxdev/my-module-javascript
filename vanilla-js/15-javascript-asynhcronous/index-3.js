console.clear();

// Latihan request menggunakan promise
    const requestPromise = (url) => {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 4500) + 500;
            setTimeout(() => {
               if (delay > 4000) {
                reject("error : conection timeout");
               } else {
                resolve(`succes: ${url} (${delay}ms)`);
               }
            }, delay);
        });
    };


    requestPromise("youtube.com")
        .then((response) => {
            console.log(`succes ${response}`);
            requestPromise("youtube.com")
            .then((response) => {
                console.log(`succes ${response}`);
                requestPromise("youtube.com")
                .then((response) => {
                    console.log(`succes ${response}`);
                    requestPromise("youtube.com")
                    .then((response) => {
                        console.log(`succes ${response}`);
                        requestPromise("youtube.com")
                        .then((response) => {
                            console.log(`succes ${response}`);
                            requestPromise("youtube.com")
                            .then((response) => {
                                console.log(`succes ${response}`);
                            })
                            .catch((error) => {
                                console.log(`error ${error}`);
                            })
                        })
                        .catch((error) => {
                            console.log(`error ${error}`);
                        })
                    })
                    .catch((error) => {
                        console.log(`error ${error}`);
                    })
                })
                .catch((error) => {
                    console.log(`error ${error}`);
                })
            })
            .catch((error) => {
                console.log(`error ${error}`);
            })
        })
        .catch((error) => {
            console.log(`error ${error}`);
        })