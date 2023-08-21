<script lang="ts">
	import { onMount } from 'svelte';
	import Raven from '../classes/raven';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	onMount(() => {
		ctx = canvas.getContext('2d')!;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let timeToNextRaven = 0;
		let ravensInterval = 500;
		let lastTime = 0;
		let score = 0;

		let ravens: Raven[] = [];

		function drawScore() {
			ctx.fillStyle = 'white';
			ctx.font = '50px Impact';
			ctx.fillText('Score: ' + score, 50, 75);
		}

		window.addEventListener('click', (e) => {
			let increaseScore = 0;
			const clickOnRaven = ctx.getImageData(e.clientX, e.clientY, 1, 1).data;

			if (clickOnRaven.some((color) => color > 0)) {
				ravens = ravens.filter((raven) => {
					if (
						!(
							e.clientX > raven.x &&
							e.clientX < raven.x + raven.width + 150 &&
							e.clientY > raven.y &&
							e.clientY < raven.y + raven.height + 150
						)
					) {
						increaseScore++;
						return true;
					}
				});
			}

			if (increaseScore > 0) {
				score++;
			}
		});

		function animate(timestamp: number = 0) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			let deltaTime = timestamp - lastTime;
			lastTime = timestamp;
			timeToNextRaven += deltaTime;

			if (timeToNextRaven > ravensInterval) {
				ravens.push(new Raven(canvas, ctx));
				timeToNextRaven = 0;
			}

			drawScore();

			ravens.forEach((raven) => {
				raven.update(deltaTime);
				raven.draw();
			});

			ravens = ravens.filter((raven) => !raven.markedForDeletion);

			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<canvas bind:this={canvas} />

<style>
	:global(body) {
		background: linear-gradient(to bottom, red, green, blue);
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		margin: 0;
	}

	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
