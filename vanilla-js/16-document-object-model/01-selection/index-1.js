// DOM selection
	/*
		Selecting with DOM : 
			- getElementById
			- getElementByTagName
			- getElementByClassName
			- querySelector
			- querySelectorAll
	*/

	// Contoh getElementById
		const id = document.getElementById("Etymology_and_naming")
		// console.dir(id);

		id.innerText = "WOI LOOK AT MEE, INI AKU YANG DIMANIPULASI OLEH JS"

	
	// Contoh getElementByTagName
		const imagess = document.getElementsByTagName("img");
		// console.dir(imagess);

		for (let img of imagess) { // diambil satu2 karena ada beberapa img
			// console.dir(img);
			img.src = "https://th.bing.com/th/id/OIP.dSB-o26TpTlU0MGqV5A14QHaG_?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
		}

	
	// Contoh getElementByClassName
		const class1 = document.getElementsByClassName("toctext")
		// console.dir(class1)

		for (let toctext of class1) {
			// console.dir(toctext)
			toctext.innerText = "AKU TELAH DIMANIPULASI"
		}

	
	// QuerySelector (mengambil element yang pertama aja dari semua element)
		// Cari element h1 pertama (tagName)
			const q1 = document.querySelector("h1")
			console.log(q1);

		// Cari element pertama dengan id bernilai "toc" (id)
			const q2 = document.querySelector("#toc");
			console.log(q2);

		// Cari element pertama dengan class bernilai "toctitle" (class)
			const q3 = document.querySelector(".toctitle");
			console.log(q3);

		// Cari lebih detail
			const q4 = document.querySelector('input[type="checkbox"]');
			console.log(q4);
			
			const q5 = document.querySelector('div[lang="en"]');
			console.log(q5);	

	
	// QuerySelectorAll (mengambil semua element)
		// Contoh
			const linkk = document.querySelectorAll("a");
			// console.dir(linkk)

			for (let link of linkk) {
				link.href = "https://www.youtube.com"
				console.log(link.href);
			}



// InnerText, textContent, innerHtml
	/*
		- innerText = untuk mengambil isi murninya saja tanpa menambahkan efek efek seberti bold, dll
		- textContent = mengambil isi murninya + enter dan tab (/t/n)
		- innerHtml = mengambil isinya secara lengkap (kalo merubah isi bisa menambahkan tag HTML)
	*/

	// Contoh
		const i1 = document.querySelector("p");
		console.log(i1.innerText)
		console.log(i1.textContent)
		console.log(i1.innerHTML)
		// i1.innerHTML = "hello <b>brok</b>, apakabar?"



// Mendapatkan atribute yang dimiliki element HTML
	// Contoh 
		const banner = document.querySelector('#banner');
		console.log(banner);
		console.log(banner.attributes);		
		console.log(banner.id);   // Memanggil isi atribute
		console.log(banner.alt);   // Memanggil isi atribute
		console.log(banner.alt = "meme js");   // Mengubah atau mengisi banner.alt
		console.log(banner.setAttribute('class', 'isi-class'));   // Menambah atribute menggunakan setAtribute
		console.log(banner.attributes);		
		console.log(banner.getAttribute('class'));   // Mendapatkan nama atribute menggunakan getAtributes



// Styling menggunakan javascript DOM
	const links = document.querySelectorAll('a');
	
	for (let link of links) {
		link.style.color = 'rgb(0, 108, 134)';
		link.style.textDecorationColor = 'magenta';
		link.style.textDecorationStyle = 'wavy';
		console.log(link.style)
	}



// Classlist DOM (menambahkan nama class supaya nama class sebelumnya tidak tertimpa seperti ketika menggunakan setAttribute)
	// Cara manual
		const h1 = document.querySelector('h1');
		h1.setAttribute('class', 'bg-info')  // Menambahkan atribut 

		let atributSekarang = h1.getAttribute('class');
		console.log(atributSekarang);

		h1.setAttribute('class', `${atributSekarang} border-danger`);  // Menambhakan nama class baru
		h1.setAttribute('class', `${atributSekarang} text-white`);  // Jika ditambahkan lagi maka akan ketimpa dengan class baru


	// Menggunakan classList
		console.log(h1.classList);  // Mengechek nama-nama class di dalam h1 sekarang 
		h1.classList.add('border-danger');   // Menambahkan nama class baru
		h1.classList.remove('text-white');   // Menghapus class
		console.log(h1.classList.contains("bg-info"));  // Mengechek apakah ada nama class tersebut
		console.log(h1.classList.contains("text-white"));  



// Menjelajahi elemenet parent dan child
	// ParentElement
		const textBold = document.querySelector('b');
		console.log(textBold);
		console.log(textBold.parentElement);  // Melihat element parent nya satu diatasnya
		console.log(textBold.parentElement.parentElement);  // Melihat element parent nya dua diatasnya
		console.log(textBold.parentElement.parentElement.parentElement);  // Melihat element parent nya tiga diatasnya


	// Childern
		const paragraf = textBold.parentElement
		console.log(paragraf);
		console.log(paragraf.children);  // Melihat anak element paragraf (akan muncul HTML collection jika anaknya banyak)
		console.log(paragraf.childElementCount); // melihat jumlah anak
		console.log(paragraf.children[6]);  // Melihat isi anak ke 6
		console.log(paragraf.children[6].children);  // Melihat isi anaknya anak ke 6
		console.log(paragraf.children[6].childElementCount);  // Menghitung jumlah anak
		console.log(paragraf.children[6].parentElement);  

	
	
// Sibling (mengetahui element setelah atau sebelumnya)
	// PreviousElementSibling (element sebelum)
		const squareImg = document.querySelector('.square');
		console.log(squareImg.previousElementSibling);

	// NextElementSibling (element sesudah)
		console.log(squareImg.nextElementSibling);



// Append & appenChild (menambahkan element ke dalam HTML) & insertAdjacentElementk
	// Contoh appenChild (cara lama)
		const newImage = document.createElement('img');  // Membuat element baru
		console.dir(newImage);  // Melihat isi object newImage
		newImage.src = "https://th.bing.com/th/id/OIP.YAIA765ruGbQQpHmAgx72wHaEO?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
		document.body.appendChild(newImage);   // Menambahkan newImage ke dalam body (akan otomatis masuk ke baris paling terakhir)
		newImage.classList.add('square');   // Menambahkan class image kedalam newImage agar css nya sama seperti gambar lain


		const headingLee = document.createElement('h1');
		headingLee.innerText = "halo, selamat malam calon orang2 sukses";
		document.body.appendChild(headingLee);


	// Contoh append (cara modern)
		const paragraf2 = document.querySelector('p');
		paragraf2.append('<b>jhekurer</b>');


	// AppendChild vs Append
		// const parent = document.getElementById("parent");
		// const child = document.createElement("div");
		// child.innerText = "Child element";
		// parent.appendChild(child); // Cuma bisa menambahkan 1 element

		// const parent2 = document.getElementById("parent");
		// const child = document.createElement("div");
		// child.innerText = "Child element";
		// const textNode = "Hello, world!";
		// const span = document.createElement("span");
		// span.innerText = "Another child";
		// parent.append(child, textNode, span); // Menambahkan lebih dari satu elemen sekaligus


	// InsertAdjacentElement (menambahkan element diantara element lain)
		const h2 = document.createElement('h2');
		h2.append('this is about cat');
		console.log(h2);
		const hSatu = document.querySelector('h1')
		hSatu.insertAdjacentElement('afterend', h2)   // h2 Dimasukkan setelah h1
	
	
	


		






