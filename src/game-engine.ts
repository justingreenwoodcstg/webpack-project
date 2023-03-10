import { nanoid } from "nanoid";

const CANVAS_ID = 'canvasGame';

export default class GameEngine {
    private canvasId: string;
    private body: HTMLBodyElement;
    private canvas: HTMLCanvasElement;
    private paintingContext: CanvasRenderingContext2D | null;
    private screenHeight: number = 0;
    private screenWidth: number = 0;
    //init() {
        // this.canvas = null;
        // this.run = run;
        // if (window.jQuery)  
        //     this.initialize = initializeWithJquery; // This will use jquery.
        // else
        //this.initialize = initialize; // This will bypass jquery. That would make it tighter for sure!
        // return me;
    //}
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

    run() {
        this.initialize();
        this.paint();
    }

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
        }
    }
}