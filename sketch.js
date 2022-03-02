import p5 from "p5/lib/p5.min";

let sketch = (p5) => {
    
    let max_iteration = 1000;
    
    const colors = [];
    colors.push({r:15, g:30, b:66 });
    colors.push({r:26, g:7, b:25 });
    colors.push({r:47, g:1, b:9 });
    colors.push({r:73, g:4, b:4 });
    colors.push({r:100, g:7, b:0 });
    colors.push({r:138, g:44, b:12 });
    colors.push({r:177, g:82, b:24 });
    colors.push({r:209, g:125, b:57 });
    colors.push({r:229, g:181, b:134 });
    colors.push({r:248, g:236, b:211 });
    colors.push({r:191, g:233, b:241 });
    colors.push({r:95, g:201, b:248 });
    colors.push({r:0, g:170, b:255 });
    colors.push({r:0, g:128, b:204 });
    colors.push({r:0, g:87, b:153 });
    colors.push({r:3, g:52, b:106 });

    p5.setup = () => {
        p5.createCanvas(800, 800);
        p5.pixelDensity(1);
        p5.loadPixels();

        for (let x = 0; x < p5.width; x++) {
            for (let y = 0; y < p5.height; y++) {
                let a = p5.map(x, 0, p5.width, -2, 2);
                let b = p5.map(y, 0, p5.height, -2, 2);


                let n = 0;
                let ca = a;
                let cb = b;

                while( n < max_iteration ){
                    let aa = a * a - b * b;
                    let bb = 2 * a * b;

                    a = aa + ca;
                    b = bb + cb;
                    if(Math.abs(a + b) > 16){
                        break;
                    }

                    n++;
                }

                let index = (x + y * p5.width) * 4;
                p5.pixels[index + 0] = getColor(n, max_iteration).r;
                p5.pixels[index + 1] = getColor(n, max_iteration).g;
                p5.pixels[index + 2] = getColor(n, max_iteration).b;
                p5.pixels[index + 3] = 255;
            }
        }
        p5.updatePixels();
    }

    const getColor = (n, max_iteration) => {
        if(n === max_iteration){
            return {r:0, g:0, b:0};
        }
        return colors[n%16];
    }
}

new p5(sketch);;