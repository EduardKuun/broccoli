<script lang="ts">
	import {
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		ToolbarMenuItem,
		Button,
		DataTableSkeleton,
		ToolbarBatchActions,
	} from 'carbon-components-svelte';
	import { Save as SaveIcon } from 'carbon-icons-svelte';
	import { TrashCan as DeleteIcon } from 'carbon-icons-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { products } from '../../stores';
	import AddProduct from '../../components/Products/AddProduct.svelte';

	let addOpen = false;

	let initialized = false;
	onMount(async () => {
		const { data } = await axios.get('http://localhost:8000/api/products');
		$products = data.map((e: any) => ({ ...e, id: e._id }));
		initialized = true;
	});

	let selectedRowIds: string[] = [];

	async function addProduct(event: CustomEvent) {
		const response = await axios.post(
			'http://localhost:8000/api/products',
			event.detail.stockItem
		);
		$products = [{ ...response.data, id: response.data._id }, ...$products];
	}

	async function deleteProducts() {
		const response = await axios.post('http://localhost:8000/api/products/batchDelete', {
			ids: selectedRowIds,
		});
		$products = $products.filter((e: any) => !selectedRowIds.includes(e.id));
		selectedRowIds = [];
	}
</script>

<div>
	{#if !initialized}
		<DataTableSkeleton />
	{/if}
	{#if initialized}
		<DataTable
			batchSelection
			bind:selectedRowIds
			title="Products"
			description="List of all the items you have in stock."
			headers={[
				{
					key: 'code',
					value: 'Code',
					display: (value) => value || '-',
				},
				{
					key: 'name',
					value: 'Name',
				},
				{
					key: 'condition',
					value: 'Condition',
				},
				{
					key: 'quantity',
					value: 'Quantity',
					display: (value) => value || '-',
				},
			]}
			rows={$products}
		>
			<Toolbar>
				<ToolbarBatchActions>
					<Button icon={DeleteIcon} kind="danger" on:click={deleteProducts}>Delete</Button
					>
				</ToolbarBatchActions>
				<ToolbarContent>
					<ToolbarSearch />
					<Button on:click={() => (addOpen = true)}>Add</Button>
				</ToolbarContent>
			</Toolbar>
		</DataTable>
		<AddProduct bind:open={addOpen} on:add={addProduct} />
	{/if}
</div>
