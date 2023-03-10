import { nanoid } from "nanoid";

const CANVAS_ID = 'canvasGame';

export default class GameEngine {
    private canvasId: string;
    private body: HTMLBodyElement;
    private canvas: HTMLCanvasElement;
    private paintingContext: CanvasRenderingContext2D | null;
    private screenHeight: number = 0;
    private screenWidth: number = 0;
    
    initialize() {
        this.canvasId = nanoid(11)
        this.body = document.getElementsByTagName("body")[0];
        this.body.style.padding = '0';
        this.body.style.margin = '0';
        this.body.style.overflow = 'hidden';
        
        const canvas = document.createElement('canvas');
        canvas.id = CANVAS_ID;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.display = 'block';
        this.canvas = this.body.appendChild(canvas);
        
        this.onWindowResized();
        window.addEventListener("resize", () => { this.onWindowResized(); });
    }

    private onWindowResized() {
        this.canvas.height = this.screenHeight = window.innerHeight || document.body.clientHeight;
        this.canvas.width = this.screenWidth = window.innerWidth || document.body.clientWidth;
        this.paint();
    }

    // run() {
    //     this.initialize();
    //     this.paint();
    // }

    private enableLooping: boolean = false;
    startLoop() {
        if (!this.enableLooping) {
            this.enableLooping = true;
            this.loop(Date.now());
        }
    }

    pauseLoop() {

    }

    resetLoop() {

    }

    private loop(timestamp: any) {
        if (this.enableLooping) {

            // this.updateGameData();
            // this.paint();

            window.requestAnimationFrame(this.loop);
        }
    }

    // function update(progress) {
    //     // Update the state of the world for the elapsed time since last render
    //   }
      
    //   function draw() {
    //     // Draw the state of the world
    //   }
      
    //   function loop(timestamp) {
    //     var progress = timestamp - lastRender
      
    //     update(progress)
    //     draw()
      
    //     lastRender = timestamp
    //     window.requestAnimationFrame(loop)
    //   }
    //   var lastRender = 0
    //   window.requestAnimationFrame(loop)

    paint() {
        if (!this.paintingContext) this.paintingContext = this.canvas.getContext("2d");

        if (this.paintingContext) {
            this.paintingContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.paintingContext.fillStyle = "red";
            this.paintingContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.paintingContext.lineWidth = 4;
            this.paintingContext.strokeStyle = "orange";
            this.paintingContext.beginPath();
            this.paintingContext.rect(0, 0, this.canvas.width, this.canvas.height);
            this.paintingContext.stroke();
        
        //     if (this.paintingContext.isLoaded) {
        //         for (var i=0; i<10; i++) {
        //             //clipX, clipY, clipW, clipH, x, y, h, w
        //             this.paintingContext.drawImage(tiles, i*32, 0, 32, 32, i*32*scale, 0, 32*scale, 32*scale);
        //         }
        //     }
        }
    }
}