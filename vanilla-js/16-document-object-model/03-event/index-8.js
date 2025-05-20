// Praktek input realtime dengan event dan DOM
    const form = document.querySelector('#form');
    const input = document.querySelector('input');
    const list = document.querySelector('#notes');
    const h1 = document.querySelector('h1');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = input.value;
        const li = document.createElement('li');
        li.innerText = inputValue;
        list.append(li);
        input.value = '';
    });



// Evnet input(ketika kita menginputkan sesuatu kedalam form) dan change(ketika kita merubah isi form)
    input.addEventListener('input', () => {
        h1.innerText = input.value;
    });

    input.addEventListener('change', () => {
        console.log("nilai berubah")
    });



// Menghapus isi list nya 
    // list.addEventListener('click', (e) => {
    //     console.log(e);
    //     e.target.remove(); // Menghapus anaknya dari parent
    // })
    list.addEventListener('click', (e) => {
        e.target.nodeName === 'LI' && e.target.remove(); // Menghapus yang dari inputan saja
    });

