console.clear();

// Mengelola kondisi error menggunakan asyc dan await
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

    async function requestHandler() {
        try {
            let result = await requestPromise("youtube.com");
            console.log(result);
        } catch (error) {
            console.log(`pesan error : ${error}`);
        }
    }

    requestHandler();