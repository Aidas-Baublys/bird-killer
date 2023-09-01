<script lang="ts">
	import { onMount } from 'svelte';
	import { scoreStore } from '../stores/stores';
	import GameCanvas from '../components/gameCanvas.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { supabase, session, score } = data;
	$: ({ supabase, session, score } = data);

	let scoreValue = 0;

	scoreStore.subscribe((value) => {
		scoreValue = value;
	});

	async function saveScore() {
		const { data } = await supabase.from('scores').select('*').eq('user_id', session?.user?.id);

		if (data?.length) {
			await supabase
				.from('scores')
				.update({ score: scoreValue })
				.eq('user_id', session?.user?.id)
				.select();
		} else {
			await supabase
				.from('scores')
				.insert({ user_id: session?.user?.id, score: scoreValue })
				.select();
		}
	}
</script>

{#if session}
	<h2>Logged in as {session.user.email}!!!!!!!!!!</h2>
	<section>
		{#if score.length}
			{#if score[0].score >= scoreValue}
				<div class="score">High Score: {score[0].score}</div>
			{:else}
				<div class="score">New High Score: {scoreValue}</div>
				<button on:click={saveScore}>Save Score</button>
			{/if}
		{:else if scoreValue > 0}
			<div class="score">New High Score: {scoreValue}</div>
			<button on:click={saveScore}>Save Score</button>
		{:else}
			<div class="score">No high score yet! Kill some birds!</div>
		{/if}
		<form action="/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	</section>
	<GameCanvas />
{:else}
	<div>NOT logged in!</div>
	<a href="/login" class="btn btn-primary">Login</a>
	<a href="/register" class="btn btn-secondary">Register</a>
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
