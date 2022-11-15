<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes';
	import { Theme } from 'carbon-components-svelte';
</script>

<main>
	<Theme theme="g90" tokens={{}} />
	<Router {routes} />
</main>
