<script lang="ts">
	import GameCanvas from '../components/gameCanvas.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { score } = data;
	$: ({ score } = data);
</script>

{#if data.session}
	<h2>Logged in as {data.session.user.email}!!!!!!!!!!</h2>
	<section>
		<div class="score">High Score: {score[0].score}</div>
		<form action="/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	</section>
	<GameCanvas />
{:else}
	<div>NOT logged in!</div>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>
	</div>
{/if}

<style>
	h2 {
		margin: 10px 10px 5px;
	}

	section {
		display: flex;
	}

	.score,
	button {
		margin: 0 10px 10px;
	}
</style>
