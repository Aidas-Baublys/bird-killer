<script lang="ts">
	import GameCanvas from '../components/gameCanvas.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if data.session}
	<div class="user-info">Logged in as {data.session.user.email}!!!!!!!!!!</div>
	<form action="/logout" method="POST">
		<button type="submit">Logout</button>
	</form>
	<GameCanvas />
{:else}
	<div>NOT logged in!</div>
	<div class="auth-buttons">
		<a href="/login" class="btn btn-primary">Login</a>
		<a href="/register" class="btn btn-secondary">Register</a>
	</div>
{/if}

<style>
	.user-info {
		font-weight: 900;
		margin: 10px;
	}

	button {
		margin: 0 10px;
	}
</style>
