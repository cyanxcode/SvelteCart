<script lang="ts">
	import { isCartOpen } from '../index';
	import { wishlist } from '$lib/stores/wishlist';
	import Card from './Card.svelte';

	let startY = 0;

	function handleSwipeStart(event: any) {
		startY = event.touches[0].clientY;
	}
	function handleSwipeMove(event: any) {
		let deltaY = event.touches[0].clientY - startY;
		if (deltaY > 50) {
			$isCartOpen = false;
		}
	}
</script>

<main
	class="fixed z-20 h-[100vh] w-full bg-zinc-100 dark:bg-zinc-900 dark:text-white {$isCartOpen
		? `top-0 opacity-100 transition-all duration-400`
		: `top-full opacity-0 transition-all duration-400`}"
	ontouchstart={handleSwipeStart}
	ontouchmove={handleSwipeMove}
>
	<nav class="bg-primary flex h-20 w-full items-center justify-between px-10">
		<div class="w-20"></div>
		<div class="text-3xl">Wishlist</div>
		<button onclick={() => ($isCartOpen = false)} class="w-20">Go Back</button>
	</nav>
	{#if $wishlist.length > 0}
		<main class="grid grid-cols-2 gap-1 p-2 lg:grid-cols-4 lg:p-6">
			{#each $wishlist as product (product.id)}
				<Card {product} />
			{/each}
		</main>
		<section class="grid h-full w-full place-content-center">
			<button class="bg-primary rounded-md p-2 text-white">Checkout</button>
		</section>
	{:else}
		<section class="-mt-20 grid h-full w-full place-content-center">
			<p class="text-lg">Your wishlist is empty.</p>
		</section>
	{/if}
</main>
