import DashboardLayout from './layouts/DashboardLayout.svelte';
import Home from './views/dashboard/Home.svelte';
import StockItems from './views/dashboard/StockItems.svelte';

const routes = [
	{
		name: '/',
		layout: DashboardLayout,
		component: Home,
	},
	{
		name: '/stock-items',
		layout: DashboardLayout,
		component: StockItems,
	},
];

export { routes };
