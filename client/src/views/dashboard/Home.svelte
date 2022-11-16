<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { dashboard } from '../../stores';
	import { Button, Tile } from 'carbon-components-svelte';
	import Container from 'carbon-pictograms-svelte/lib/Container.svelte';
	import Flower_01 from 'carbon-pictograms-svelte/lib/Flower_01.svelte';
	import Money from 'carbon-icons-svelte/lib/Money.svelte';

	let initialized = false;
	onMount(async () => {
		const { data } = await axios.get('http://localhost:8000/api/dashboard');
		$dashboard = data;
		initialized = true;
	});
</script>

<div>
	<div class="landing">
		<Flower_01 width="200" height="200" />
		<span>
			<h2>Welcome</h2>
			<h5>How will we be growing your business today?</h5>
		</span>
	</div>
	<Button icon={Money} size="xl" kind="tertiary">Sale</Button>
	<Button icon={Money} size="xl" kind="tertiary">Purchase</Button>
</div>

<style>
	.landing {
		margin: auto;
		width: 80%;
		display: flex;
		align-items: center;
		gap: 25px;
		padding: 50px 0;
	}
</style>
