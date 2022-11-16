<script lang="ts">
	import {
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button,
	} from 'carbon-components-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { stockItems } from '../../stores';

	let initialized = false;
	onMount(async () => {
		const { data } = await axios.get('http://localhost:8000/api/stockItems');
		$stockItems = data;
		initialized = true;
	});
</script>

<div>
	{#if initialized}
		<DataTable
			title="Stock Items"
			description="List of all the items you have in stock."
			headers={[
				{
					key: 'name',
					value: 'Name',
				},
			]}
			rows={$stockItems}
		>
			<Toolbar>
				<ToolbarContent>
					<ToolbarSearch />
					<Button>Add</Button>
				</ToolbarContent>
			</Toolbar>
		</DataTable>
	{/if}
</div>
