<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Raven from '../classes/raven';
	import { scoreStore } from '../stores/stores';
	import lazer from '../assets/audio/super-mega-lazer.mp3';
	import ravenDeath from '../assets/audio/raven-dies.wav';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let ravens: Raven[] = [];
	let score = 0;
	let timeToNextRaven = 0;
	let ravensInterval = 500;
	let lastTime = 0;

	scoreStore.subscribe((value) => {
		score = value;
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

	function drawScore() {
		ctx.fillStyle = 'white';
		ctx.font = '50px Impact';
		ctx.fillText('Score: ' + score, 50, 75);
	}

	function rmRavenAddScore(e: MouseEvent) {
		const soundFX = new Audio();

		soundFX.src = lazer;
		soundFX.play();

		let increaseScore = 0;
		const clickOnRaven = ctx.getImageData(e.clientX, e.clientY, 1, 1).data;

		if (clickOnRaven.some((color) => color > 0)) {
			ravens = ravens.filter((raven) => {
				if (
					!(
						e.clientX > raven.x &&
						e.clientX < raven.x + raven.width + 200 &&
						e.clientY > raven.y &&
						e.clientY < raven.y + raven.height + 200
					)
				) {
					soundFX.src = ravenDeath;
					soundFX.volume = 0.7;
					soundFX.play();

					increaseScore++;

					return true;
				}
			});
		}

		if (increaseScore > 0) {
			scoreStore.update((value) => value + 1);
		}
	}

	onMount(() => {
		if (!canvas) return;
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		canvas.addEventListener('click', rmRavenAddScore);
		animate();
	});

	onDestroy(() => {
		if (canvas) {
			canvas.removeEventListener('click', rmRavenAddScore);
		}
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% - 80px);
		margin-top: 80px;
	}
</style>
