let movers = [];
let attractor;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    createMovers(10);
    attractor = new Attractor(width / 2, height / 2, 50);
}

function draw() {
    background(0);
    for (const mover of movers) {
        mover.update();
        mover.show();
        attractor.attract(mover);
        attractor.checkCollision(mover, movers);
    }
    attractor.show();
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

function deviceShaken() {
    attractor.pos.x = width / 2;
    attractor.pos.y = height / 2;
    createMovers(10);
}

function mousePressed(event) {
    if (event instanceof MouseEvent) {
        switch (event.which) {
            case 1: {
                attractor.pos.x = mouseX;
                attractor.pos.y = mouseY;
                break;
            }
            case 3: {
                const mass = random(5, 15);

                movers.push(new Mover(mouseX, mouseY, mass));
                break;
            }
        }
    }
    if (event instanceof TouchEvent) {
        const lastTouch = touches[touches.length - 1];

        if (touches.length === 3) {
            const mass = random(5, 15);
            const { x, y } = lastTouch;

            movers.push(new Mover(x, y, mass));
        } 
    }
}

function createMovers(quantity) {
    movers.length = 0;

    for (let i = 0; i < quantity; i++) {
        const x = random(width);
        const y = random(height);
        const mass = random(5, 15);

        movers[i] = new Mover(x, y, mass);
    }
}
