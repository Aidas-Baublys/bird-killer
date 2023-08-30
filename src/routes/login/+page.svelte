<script lang="ts">
	import { enhance } from '$app/forms';
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
</main>
