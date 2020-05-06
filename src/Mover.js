class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.radius = Math.floor(sqrt(this.mass) * 2);
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.velocity.add(this.acc);
        this.pos.add(this.velocity);
        this.acc.set(0, 0);
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }
}
