<script lang="ts">
	import {
		Content,
		Header,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent,
	} from 'carbon-components-svelte';
	import { Route } from 'svelte-router-spa';

	export let currentRoute: any;

	let isSideNavOpen = false;
</script>

<div>
	<Header href="/" platformName="Broccoli" bind:isSideNavOpen>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>
	</Header>

	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			<SideNavLink href="/" text="Home" />
			<SideNavLink href="/about" text="About" />
		</SideNavItems>
	</SideNav>

	<Content>
		<Route {currentRoute} />
	</Content>
</div>
