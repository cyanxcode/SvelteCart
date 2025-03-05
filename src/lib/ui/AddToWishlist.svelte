<script lang="ts">
	import confetti from 'canvas-confetti';

	let { product } = $props();
	let isWishlsted = $state(false);

	function toggleWishlist(event: any) {
		isWishlsted = !isWishlsted;
		isWishlsted && TriggerConffeti(event);
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
</script>

<button class="cursor-pointer" onclick={toggleWishlist}>
	{#if isWishlsted}
		<iconify-icon icon="mdi:heart" class="text-2xl text-red-500"></iconify-icon>
	{:else}
		<iconify-icon icon="mdi-light:heart" class="text-2xl text-zinc-600"></iconify-icon>
	{/if}
</button>
