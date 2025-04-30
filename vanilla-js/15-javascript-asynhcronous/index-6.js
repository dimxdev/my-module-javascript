// Await keyword
    const delayColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay);
        });
    };

    async function changeColor() {
        await delayColorChange("red", 1000);
        await delayColorChange("yellow", 1000);
        await delayColorChange("green", 1000);
        await delayColorChange("blue", 1000);
        await delayColorChange("purple", 1000);
        await delayColorChange("pink", 1000);
        await delayColorChange("black", 1000);
        await delayColorChange("grey", 1000);
        return "all done";
    }

    async function printRainbow() {
        await changeColor();
        console.log("all Done!")
    }

    printRainbow();
