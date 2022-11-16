<script lang="ts">
	import {
		Content,
		Header,
		HeaderUtilities,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent,
		Theme,
	} from 'carbon-components-svelte';
	import { Route } from 'svelte-router-spa';
	import { onMount } from 'svelte';
	import { stockItems } from '../stores';
	import { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

	export let currentRoute: any;

	let theme: CarbonTheme = 'white';
	let isSideNavOpen = false;

	let initialized = false;
	onMount(() => {
		// stockItems.set({
		// 	name: 'MSI Laptop2',
		// });
		initialized = true;
	});
</script>

<div>
	<Header href="/" platformName="Broccoli" bind:isSideNavOpen>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>
		<Theme
			bind:theme
			persist
			persistKey="__carbon-theme"
			tokens={{}}
			render="toggle"
			toggle={{
				themes: ['g10', 'g90'],
				labelA: 'Dark mode',
				labelB: 'Dark mode',
				hideLabel: true,
				size: 'sm',
			}}
		/>
	</Header>

	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			<SideNavLink href="/" text="Home" />
			<SideNavLink href="/stock-items" text="Stock Items" />
		</SideNavItems>
	</SideNav>

	<Content>
		{#if initialized}
			<Route {currentRoute} />
		{/if}
	</Content>
</div>
