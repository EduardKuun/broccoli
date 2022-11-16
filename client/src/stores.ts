import { Writable, writable } from 'svelte/store';

export const products: Writable<any> = writable();
export const dashboard: Writable<{ stockItemCount: number }> = writable();
