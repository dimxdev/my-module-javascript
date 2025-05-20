// Generate random color
    const h1 = document.querySelector('h1');
    const button1 = document.querySelector('#button1');
    
    
    button1.addEventListener('click', () => {
        const newColor = rgb();
        document.body.style.backgroundColor = newColor;
        h1.innerText = newColor;
        console.log(newColor);
    });


    const rgb = () => {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;

        return `rgb(${r}, ${g}, ${b})`;
    }; 