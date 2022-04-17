/*
 * Jane Tran
 * Rocket Patrol -> Cat Nom
 * 04/17/2022
 * 12 hours
 */
// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        //this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
        this.moveSpeed = 4;
        if(texture == 'mice') {
            this.moveSpeed = 9;
        }
    }

    update() {
        // move spaceship left
        this.x += this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
        if(this.x > game.config.width) {
            this.x = 0 - this.width;
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}