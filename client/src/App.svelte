<script lang="ts">
	import { Theme } from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/all.css';
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes';
</script>

<main>
	<Theme persist persistKey="__carbon-theme" />
	<Router {routes} />
</main>
