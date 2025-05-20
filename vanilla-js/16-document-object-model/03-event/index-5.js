// Keyword this (jika ada 2 element berbeda tapi memiliki fungsi listener yang sama bisa dibuatkan function dan menggunakan this)
    const buttons = document.querySelectorAll('button');
    const headings = document.querySelectorAll('h1');


    for (let button of buttons) {
        button.addEventListener('click', generateColor);
    }

    for (let heading of headings) {
        heading.addEventListener('click', generateColor);
    }

    const rgb = () => {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;

        return `rgb(${r}, ${g}, ${b})`;
    }; 

    function generateColor() {
        this.style.backgroundColor = rgb();
        this.style.color = rgb();
    };

