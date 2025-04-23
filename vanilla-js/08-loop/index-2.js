// While
    const truePassword = "halo123";
    let input = prompt("masukkan password anda");
    while (input !== truePassword) {
        input = prompt("password salah, masukkan ulang password");
    }
    alert("silahkan masuk");

// Break dalam while
    let input2 = prompt("masukkan apapun!");
    while (true) {
        input2 = prompt(input2);
        if (input2.toLowerCase() === "stop") break;
    }
    alert("oke")

// Break dalam for
    for (i = 0; i < 10000; i++) {
        console.log(i);
        if (i === 100) break;
    }
