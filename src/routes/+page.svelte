<script lang="ts">
	import GameCanvas from '../components/gameCanvas.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- <GameCanvas /> -->

{#if data.session}
	<div>Logged in as {data.session.user.email}!!!!!!!!!!</div>
	<form action="/logout" method="POST">
		<button type="submit">Logout</button>
	</form>
{:else}
	<div>NOT logged in!</div>
{/if}
