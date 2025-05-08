// Membuat lsit pokemon menggunakan DOM

const container = document.querySelector('#container');
const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 1000; i++) {
	const pokeBall = document.createElement('div');
	pokeBall.classList.add('pokemon');

	const gambarPokemon = document.createElement('img');
	gambarPokemon.src = `${imgUrl}${i}.png`;

	const nomorPokemon = document.createElement('span');
	nomorPokemon.innerHTML = `<b>${i}</b>`;

	container.appendChild(pokeBall);
	pokeBall.appendChild(gambarPokemon);
	pokeBall.appendChild(nomorPokemon);
}

