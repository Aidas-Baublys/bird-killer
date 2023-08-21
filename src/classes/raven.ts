import ravens from '../assets/ravens/raven.png';

export class Raven {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	width: number;
	height: number;
	x: number;
	y: number;
	directionX: number;
	directionY: number;
	markedForDeletion = false;
	image: HTMLImageElement = new Image();
	spriteWidth: number;
	spriteHeight: number;
	sizeModifier: number;
	frame: number;
	maxFrame: number;
	timeSinceFlap: number;
	flapInterval: number;

	constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.spriteWidth = 271;
		this.spriteHeight = 194;
		this.sizeModifier = Math.random() * 0.6 + 0.4;
		this.width = this.spriteWidth * this.sizeModifier;
		this.height = this.spriteHeight * this.sizeModifier;
		this.x = canvas.width;
		this.y = Math.random() * (canvas.height - this.height);
		this.directionX = Math.random() * 5 + 3;
		this.directionY = Math.random() * 5 - 2.5;
		this.image.src = ravens;
		this.frame = 0;
		this.maxFrame = 4;
		this.timeSinceFlap = 0;
		this.flapInterval = Math.random() * 50 + 50;
	}

	update(deltaTime = 0) {
		if (this.y < 0 || this.y > this.canvas.height - this.height) {
			this.directionY = this.directionY * -1;
		}

		this.x -= this.directionX;
		this.y += this.directionY;

		if (this.x < 0 - this.width) {
			this.markedForDeletion = true;
		}

		this.timeSinceFlap += deltaTime;

		if (this.timeSinceFlap > this.flapInterval) {
			if (this.frame >= this.maxFrame) {
				this.frame = 0;
			} else {
				this.frame++;
			}
			this.timeSinceFlap = 0;
		}
	}

	draw() {
		this.ctx.drawImage(
			this.image,
			this.frame * this.spriteWidth,
			0,
			this.spriteWidth,
			this.spriteHeight,
			this.x,
			this.y,
			this.width,
			this.height
		);
	}
}

export default Raven;
