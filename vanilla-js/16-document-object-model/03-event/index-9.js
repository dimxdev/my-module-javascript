// Mengenal event bubling (stopPropagatio)
    const button = document.querySelector('#changeColor');
    const container = document.querySelector('#container');

    button.addEventListener('click', (e) => {
        container.style.backgroundColor = generateRandomColor();
        e.stopPropagation();  // Hanya mengeksekusi bagian ini saja(parentnya gaikut dieksekusi) 
        // console.log(generateRandomColor());
    });

    container.addEventListener('click', () => {
        container.classList.toggle('hide');
        console.log('halo')
    })


    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256) + 1;
        const g = Math.floor(Math.random() * 256) + 1;
        const b = Math.floor(Math.random() * 256) + 1;

        return `rgb(${r}, ${g}, ${b})`;
    };
