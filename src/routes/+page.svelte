<script>
	import { isCartOpen } from '$lib';
	import { theme } from '$lib/stores/theme';
	import Cart from '$lib/ui/Cart.svelte';
	import ProductView from '$lib/ui/ProductView.svelte';

	function toggleTheme() {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	}
</script>

<nav class="flex h-20 w-full items-center justify-end gap-10 px-10 dark:bg-black dark:text-white">
	<button onclick={toggleTheme}>{$theme == 'dark' ? 'Sun' : 'Moon'}</button>
	<button onclick={() => ($isCartOpen = true)}>Wishlist</button>
</nav>
<main class="w-full dark:bg-zinc-950">
	<ProductView />
</main>

<Cart />
