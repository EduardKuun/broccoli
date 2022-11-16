<script lang="ts">
	import {
		Form,
		Modal,
		FormGroup,
		Checkbox,
		RadioButton,
		RadioButtonGroup,
		TextInput,
		NumberInput,
		FluidForm,
		Select,
		SelectItem,
	} from 'carbon-components-svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let open: boolean;

	let formState = {
		values: {
			name: '',
			code: '',
			quantity: 1,
			condition: 'New',
		},
	};

	function handleAdd() {
		dispatch('add', {
			stockItem: formState.values,
		});
		open = false;
		formState = {
			values: {
				name: '',
				code: '',
				quantity: 1,
				condition: 'New',
			},
		};
	}
</script>

<Modal
	bind:open
	modalHeading="Add item"
	primaryButtonText="Add"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (open = false)}
	on:click:button--primary={handleAdd}
	on:open
	on:close
	primaryButtonDisabled={!formState.values.name}
>
	<Form>
		<TextInput labelText="Name" required bind:value={formState.values.name} />
		<TextInput labelText="Code" bind:value={formState.values.code} />
		<NumberInput
			label="Quantity"
			bind:value={formState.values.quantity}
			min={1}
			required
		/>
		<Select labelText="Condition" bind:selected={formState.values.condition}>
			<SelectItem value="New" text="New" />
			<SelectItem value="Used" text="Used" />
		</Select>
	</Form>
</Modal>
