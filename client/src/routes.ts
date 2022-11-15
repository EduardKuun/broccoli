import DashboardLayout from './views/dashboard/DashboardLayout.svelte';
import Home from './views/dashboard/Home.svelte';
import About from './views/dashboard/About.svelte';

const routes = [
	{
		name: '/',
		layout: DashboardLayout,
		component: Home,
	},
	{
		name: 'about',
		layout: DashboardLayout,
		component: About,
	},
];

export { routes };
