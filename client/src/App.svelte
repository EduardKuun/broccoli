<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes';
</script>

<main>
	<Router {routes} />
</main>
