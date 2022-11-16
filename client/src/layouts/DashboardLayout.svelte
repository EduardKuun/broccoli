<script lang="ts">
	import {
		Button,
		Content,
		Header,
		HeaderAction,
		HeaderGlobalAction,
		HeaderPanelDivider,
		HeaderPanelLink,
		HeaderPanelLinks,
		HeaderUtilities,
		SideNav,
		SideNavItems,
		SideNavLink,
		SkipToContent,
		Theme,
	} from 'carbon-components-svelte';
	import { Route } from 'svelte-router-spa';
	import { onMount } from 'svelte';
	import { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';
	import SettingsAdjust from 'carbon-icons-svelte/lib/SettingsAdjust.svelte';
	import UserAvatarFilledAlt from 'carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';

	export let currentRoute: any;

	let isSideNavOpen = false;
	let isProfileOpen = false;
	let isSettingsOpen = false;

	let initialized = false;
	onMount(() => {
		// stockItems.set({
		// 	name: 'MSI Laptop2',
		// });
		initialized = true;
	});
</script>

<div>
	<Header href="/" company="Purple Cow DIY" platformName="Broccoli" bind:isSideNavOpen>
		<svelte:fragment slot="skip-to-content">
			<SkipToContent />
		</svelte:fragment>

		<HeaderUtilities>
			<HeaderAction
				bind:isOpen={isSettingsOpen}
				icon={SettingsAdjust}
				closeIcon={SettingsAdjust}
			>
				<HeaderPanelLinks>
					<HeaderPanelDivider>Companies</HeaderPanelDivider>
					<HeaderPanelLink>Purple Cow DIY</HeaderPanelLink>
					<Button icon={Add} size="small" style="width:100%">Add</Button>

					<HeaderPanelDivider>Theme</HeaderPanelDivider>
					<div class="theme-toggle">
						<Theme
							persist
							persistKey="__carbon-theme"
							tokens={{}}
							render="toggle"
							toggle={{
								themes: ['g10', 'g100'],
								labelA: 'Dark mode',
								labelB: 'Dark mode',
								hideLabel: true,
								size: 'sm',
							}}
						/>
					</div>
				</HeaderPanelLinks>
			</HeaderAction>

			<HeaderAction
				bind:isOpen={isProfileOpen}
				icon={UserAvatarFilledAlt}
				closeIcon={UserAvatarFilledAlt}
			>
				<HeaderPanelLinks>
					<HeaderPanelDivider>John Doe</HeaderPanelDivider>
					<HeaderPanelLink>Settings</HeaderPanelLink>
					<HeaderPanelLink>Logout</HeaderPanelLink>
				</HeaderPanelLinks>
			</HeaderAction>
		</HeaderUtilities>
	</Header>

	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			<SideNavLink href="/" text="Home" />
			<SideNavLink href="/products" text="Products" />
		</SideNavItems>
	</SideNav>

	<Content>
		{#if initialized}
			<Route {currentRoute} />
		{/if}
	</Content>
</div>

<style>
	.theme-toggle {
		margin: 10px 15px;
	}
</style>
