const game = new Game();

function preload() {
game.preloadGame();
}

function setup() {
let mainCanvas = createCanvas(600, 400);
mainCanvas.parent('mainCanvas')

game.setupGame();
}

function draw() {
clear();
background(0);
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





