// Belajar axios
    // Menggunakan promise
        axios.get('https://api.thedogapi.com/v1/breeds')
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });


    // Menggunakan async await
        const getHuman = async (id) => {
            try {
                const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                console.log(res.data);
            } catch (error) {
                console.log(error);
                console.log(error.message);
                console.log(error.response.status);
                console.log(error.response.data);
            }
        };

        getHuman(1);
        getHuman(2);
        getHuman(3);