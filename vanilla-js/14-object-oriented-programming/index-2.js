console.clear();

// Membuat object dengan constructor function
    // Contoh from kodepolitan
        function Color(r, g, b) {  // ==> nama function kalo bisa kapital
            this.r = r;
            this.g = g;
            this.b = b;
        }

        Color.prototype.rgb = function() {
            const {r, g, b} = this;
            return `rgb(${r}, ${g}, ${b})`;
        };

        Color.prototype.hex = function() {
            const {r, g, b} = this;
            return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        Color.prototype.rgba = function(a = 1.0) {
            const {r, g, b} = this;
            return `rgba(${r}, ${g}, ${b}, ${a})`;
        };


        const color1 = new Color(89, 54, 32);
        const color2 = new Color(49, 74, 311);
        console.log(color1);
        console.log(color2);
        console.log(color1.rgb());
        console.log(color2.hex());
        console.log(color1.rgba(0.2));
        console.log(color2.rgba());
        // document.body.style.backgroundColor = color1.rgba(0.5);  // kalo mau dipanggil di file HTML
        console.log();

    





