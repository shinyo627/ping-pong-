const game = new Game();
let mode;

function preload() {
game.preloadGame();
}

function setup() {
mode = 0;
let mainCanvas = createCanvas(600, 400);
mainCanvas.parent('mainCanvas');

game.setupGame();
}

function draw() {
clear();
background(0);
// start page logic
if(mode === 0){
    fill(color(0, 0, 255));
    textSize(30);
    text('press space to start', 180, 200); 
        }
if(mode === 1) {
    game.drawGame();
    
    // player movement
if (keyIsDown(87)) {
    game.player1.moveUp();
        }
if (keyIsDown(83)) {
    game.player1.moveDown();
        }
if (keyIsDown(68)) {
    game.player1.moveRight();
        }
if (keyIsDown(65)) {
    game.player1.moveLeft();
    }
// player2
if (keyIsDown(38)) {
    game.player2.moveUp();
        }
if (keyIsDown(40)) {
    game.player2.moveDown();
        }
if (keyIsDown(39)) {
    game.player2.moveRight();
        }
if (keyIsDown(37)) {
    game.player2.moveLeft();
        }
    }

}
// start page logic 
function keyPressed() {
    if(keyCode === 32) {
        mode = 1;
    }
}



