import DashboardLayout from './layouts/DashboardLayout.svelte';
import Home from './views/dashboard/Home.svelte';
import Products from './views/dashboard/Products.svelte';

const routes = [
	{
		name: '/',
		layout: DashboardLayout,
		component: Home,
	},
	{
		name: '/products',
		layout: DashboardLayout,
		component: Products,
	},
];

export { routes };
