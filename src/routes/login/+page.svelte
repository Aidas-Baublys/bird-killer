<script lang="ts">
	import { enhance } from '$app/forms';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<main>
	<h1>Login</h1>
	<form method="POST" use:enhance>
		<label for="email">Email</label>
		<input type="text" name="email" />
		<label for="password">Password</label>
		<input type="password" name="password" />
		<button>Login</button>
	</form>
	<button>
		<a href={base + '/register'} class="btn btn-secondary">Register</a>
	</button>
	{#if $page.status === 400}
		<p>{$page.form.message}</p>
	{/if}
</main>

<style>
	main {
		margin: 10px;
	}
	button:last-of-type {
		margin: 10px 0;
	}
</style>
