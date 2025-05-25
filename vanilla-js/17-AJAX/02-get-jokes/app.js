// Menambahkan Data Headers Di Request Menggunakan Axios
    const jokes = document.querySelector('#jokes');
    const button = document.querySelector('button');

    const addJokes = async () => {
        const jokeText = await getJokes();
        const newLi = document.createElement('li');
        newLi.append(jokeText);
        jokes.append(newLi);
    } 

    const getJokes = async () => {
        try {
            const config = {
                headers: {
                    Accept: 'application/json',
                }, 
            };
            const res = await axios.get('https://icanhazdadjoke.com/', config);

            return res.data.joke;
        } catch (err) {
            return 'no jokes available!'
        }
    };

    button.addEventListener('click', addJokes);