// Menjalankan event melalui property DOM
	// Function langsung
		const button1 = document.querySelector('#button1')
		button1.onclick = function () {
			alert("you have click me");
		}

	// Function pisah
		const mouseOver = () => {
			console.log("stop it broh!");
		}

		button1.onmouseover = mouseOver;

