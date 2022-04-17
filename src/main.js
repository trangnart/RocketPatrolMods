/*
 * Jane Tran
 * Rocket Patrol -> Cat Nom
 * 04/17/2022
 * 12 hours
 */
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

/*
 * POINTS BREAKDOWN
 * Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
 * -> Redesign to cat catching food theme, sound change to cat meow, pastel aesthetic
 * Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
 * -> Create a mice type that is smaller, moves faster, and worth 50 points
 * Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
 * -> rocket = paw, spaceship = fish/mice, explosion = fish bone
 */