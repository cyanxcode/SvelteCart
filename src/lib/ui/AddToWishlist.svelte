<script lang="ts">
	import confetti from 'canvas-confetti';
	import { wishlist } from '$lib/stores/wishlist';

	let { product } = $props();
	let isWishlisted = $state($wishlist.find((p: any) => p.id === product.id));

	// Subscribe to the wishlist store manually and check if the product is in the wishlist
	const unsubscribe = wishlist.subscribe((w) => {
		isWishlisted = w.some((p: any) => p.id === product.id);
	});

	function toggleWishlist(event: any) {
		isWishlisted = !isWishlisted;
		isWishlisted && TriggerConffeti(event);
		if (isWishlisted) {
			wishlist.update((w) => [...w, product]);
		} else {
			wishlist.update((w) => w.filter((p: any) => p.id !== product.id));
		}
	}
	function TriggerConffeti(event: any) {
		let { clientX: x, clientY: y } = event;
		confetti({
			particleCount: 30,
			startVelocity: 15,
			colors: ['#ff0051'],
			spread: 80,
			origin: { x: x / window.innerWidth, y: y / window.innerHeight }
		});
	}
	import { onDestroy } from 'svelte';
	onDestroy(() => {
		unsubscribe();
	});
</script>

<button class="cursor-pointer" onclick={toggleWishlist}>
	{#if isWishlisted}
		<iconify-icon icon="mdi:heart" class=" text-2xl text-red-500"></iconify-icon>
	{:else}
		<iconify-icon icon="mdi-light:heart" class="text-2xl text-zinc-600"></iconify-icon>
	{/if}
</button>
