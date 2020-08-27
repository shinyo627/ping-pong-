class Ball {
    constructor() {
        this.x = Math.floor(Math.random() * 300) + 20;
        this.y = height / 2;
        this.r = 20;
        this.xSpeed = 4;
        this.ySpeed = 3;
        // player score
        this.score1 = 0;
        this.score2 = 0;
    }

    drawBall() {
        fill(255, 0, 255);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
        textSize(20);
        text(this.score1, 10, 40);
        text(this.score2, 580, 40);
        
    }
    // ball move
    moveBall() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
   
    // bounce logic based on y and height and scoring
   edges() {
       if(this.y < 0 || this.y > height){
           this.ySpeed *= -1;
       }
       if(this.x > width) {
            this.score1 += 1
            this.reset()
       }
       if(this.x < 0) {
            this.score2 += 1
            this.reset()
       }
   } 

    // respawn after scoring
    reset() {
        this.x = width / 2;
        this.y = height / 2;
    }

//    collision and bounce back from p
    collision(playerInfo, playerHit, otherPlayer) {
        // if the ball meets the either players' surface gotta bounce back.
       let yCollision = (playerInfo.y<this.y||playerInfo.y<this.y+this.r)&&(playerInfo.y+playerInfo.height>this.y ||playerInfo.y+playerInfo.height>this.y-this.r)
       let xCollision = (playerInfo.x<this.x||playerInfo.x<this.x+this.r-5)&&(playerInfo.x+playerInfo.width>this.x||playerInfo.x+playerInfo.width>this.x-this.r+5)
if(yCollision&&xCollision){
    return true;
}
//         if ((this.x > playerInfo.x &&
//         this.x < playerInfo.x + playerInfo.width) &&
//         (this.y + (this.r / 2) >= playerInfo.y)) {
//     this.xSpeed *= -1;
//     this.ySpeed *= -1;
//   }
}

playerWins() {
    // winner logic
    if(this.score1 === 3) {
        this.xSpeed = 0;
        this.ySpeed = 0;
        fill(color(0, 0, 255));
        text('player1 Won! press space to continue.', 150, 200);
        if (keyCode === 32) {
            this.restart(); 
        }
        
    } else if(this.score2 === 3) {
        this.xSpeed = 0;
        this.ySpeed = 0;
        fill(color(0, 0, 255));
        text('player2 Won! press space to continue.', 150, 200);
        if (keyCode === 32) {
            this.restart();
        }

    }
}

restart() {
    this.xSpeed = 1;
    this.ySpeed = 3;
    this.score1 = 0;
    this.score2 = 0;
}


   

}