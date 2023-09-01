<script lang="ts">
	import { enhance } from '$app/forms';
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
	<a href="/register" class="btn btn-secondary">Register</a>
	{#if $page.status === 400}
		<p>{$page.form.message}</p>
	{/if}
</main>
