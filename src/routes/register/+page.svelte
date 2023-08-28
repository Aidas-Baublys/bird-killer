<script>
	import { enhance } from '$app/forms';
</script>

<main>
	<h1>Register</h1>
	<form method="post" use:enhance>
		<label for="email">Email</label>
		<input type="text" name="email" />
		<label for="password">Password</label>
		<input type="password" name="password" />
		<button>Register</button>
	</form>
</main>
