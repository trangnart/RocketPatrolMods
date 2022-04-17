/*
 * Jane Tran
 * Rocket Patrol -> Cat Nom
 * 04/17/2022
 * 12 hours
 */
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/sweet.wav');
        this.load.audio('sfx_eat', './assets/nom.wav');
        this.load.audio('sfx_paw', './assets/meow.wav');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'cursive',
            fontSize: '25px',
            backgroundColor: '#E8ACC9',
            color: '#F6D7E8',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'CAT NOM', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#E8ACC9';
        menuConfig.color = '#F6D7E8';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Novice mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000
          }
          this.sound.play('sfx_select');
          this.scene.start("playScene");
        }
      }
}