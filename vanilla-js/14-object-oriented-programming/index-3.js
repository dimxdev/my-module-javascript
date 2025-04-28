console.clear();

// Membuat object dengan class
    // Contoh from kodepolitan
        class Color {
            constructor(r, g, b, name) {
                this.r = r;
                this.g = g;
                this.b = b;
                this.name = name;
            }

            colorName() {
                console.log(`nama warna ini adalah ${this.name}`);
            }

            rgb() {
                const {r, g, b} = this;
                return `rgb(${r}, ${g}, ${b})`;
            }

            hex() {
                const {r, g, b} = this;
                return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            }

            rgba(a = 1.0) {
                const {r, g, b} = this;
                return `rgba(${r}, ${g}, ${b}, ${a})`;
            }
        }

        const skycolor = new Color(185, 243, 252, "sky");
        console.log(skycolor);
        console.log(skycolor.rgb());
        console.log(skycolor.hex());
        console.log(skycolor.rgba(3));
        skycolor.colorName();
        // document.body.style.backgroundColor = skycolor.rgb();  // untuk di file html
        console.log();