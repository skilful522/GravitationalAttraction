class Attractor {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.mass = mass;
        this.radius = Math.floor(sqrt(this.mass) * 2);
    }

    attract(mover) {
        let force = p5.Vector.sub(this.pos, mover.pos);
        let distanceSq = constrain(force.magSq(), 5, 25);
        let G = 6.67e-3;
        let strength = (G * (this.mass * mover.mass)) / distanceSq;
        force.setMag(strength);
        mover.applyForce(force);
    }

    show() {
        noStroke();
        fill(255, 0, 100);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }

    checkCollision(currentMover, movers) {
        const radiusSum = this.radius + currentMover.radius;

        const distance = dist(this.pos.x, this.pos.y, currentMover.pos.x, currentMover.pos.y);

        if (distance <= radiusSum) {
            currentMover.pos = createVector(this.pos.x, this.pos.y);
            const index = movers.indexOf(currentMover);

            movers.splice(index, 1);
        }
    }
}
