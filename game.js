class Game {
    constructor() {
        this.player1Hits=true;
        this.player2Hits=true;
    }

    preloadGame() {
        
    }

    setupGame() {
        // players
        this.player1 = new Player(10);
        this.player2 = new Player(580);
        // this.hiddenplayer = new Player(width/2)
        
        // ball
        this.ball = new Ball();
    }    

    drawGame() {
        this.player1.drawPlayer();
        this.player2.drawPlayer();
        // this.hiddenplayer.drawPlayer()
        this.ball.drawBall();
        this.ball.moveBall();
        this.ball.edges();
        console.log(this.player1Hits)
        // collision logic
        if(this.player1Hits){
            if(this.ball.collision(this.player1)){
            this.ball.xSpeed *= -1;
               this.ball.ySpeed *= -1;
               this.player1Hits=false
               this.player2Hits=true

            }
        }
        if(this.player2Hits){
          if(this.ball.collision(this.player2)){
            this.ball.xSpeed *= -1;
               this.ball.ySpeed *= -1;
               this.player2Hits=false

               this.player1Hits=true

          }  ;

        }
        this.ball.playerWins()
        
    }

    
   showWinner() {
   }
}
