class Player {
    constructor(x) {
        this.x = x;
        this.y = height/2;
        this.height = 100;
        this.width = 9;
    }

    drawPlayer() {
        fill(0, 255, 255)
        rect(this.x, this.y, this.width, this.height);
    }

    moveUp() {
        if(this.y <= 0){
            return;
        }
        // if(this.y >= height-this.height) {
        //     this.y = height-100;
        // }
        this.y -= 5;
    }
    moveDown() {
        // console.log(this.y,height,this.height)
        if( this.y + this.height >= height){
            return;
        }
        this.y += 5;
    }
    moveLeft() {
        if(this.x <= 0){
            return;
        }
        this.x -= 5;
    }
    moveRight() {
        if(this.x + this.width >= width){
            return;
        }
        this.x += 5;
    }
};

