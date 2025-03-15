<script lang="ts">
	import img from '$lib/assets/basic.jpg';
	import img2 from '$lib/assets/secondary.jpg';
	import BreadCrumbs from './BreadCrumbs.svelte';
	import Card from './Card.svelte';
	import ListCard from './ListCard.svelte';
	import SkeletonCard from './SkeletonCard.svelte';
	import SkeletonListCard from './SkeletonListCard.svelte';
	import Sort from './Sort.svelte';
	import { selectedSorting } from '$lib/stores/sort';

	let data = [
		{
			id: 1,
			name: 'Product 1',
			price: 10,
			image: [img, img2]
		},
		{
			id: 2,
			name: 'Product 2',
			price: 20,
			image: [img, img2]
		},
		{
			id: 3,
			name: 'Product 3',
			price: 30,
			image: [img, img2]
		},
		{
			id: 4,
			name: 'Product 4',
			price: 40,
			image: [img, img2]
		},
		{
			id: 5,
			name: 'Product 5',
			price: 50,
			image: [img, img2]
		}
	];
	let sortedData: any = $state(data);
	selectedSorting.subscribe((value) => {
		switch (value) {
			case 'Price: Low to High':
				sortedData = [...data].sort((a, b) => a.price - b.price);
				break;
			case 'Price: High to Low':
				sortedData = [...data].sort((a, b) => b.price - a.price);
				break;
			default:
				sortedData = data;
		}
	});

	let isGrid = $state(true);
	let gridClass = 'grid grid-cols-2 gap-1 p-2 lg:grid-cols-4 lg:p-6';
	let listClass = 'grid-cols-1 lg:grid grid-cols-2 gap-4 p-2 lg:p-6';
</script>

<nav
	class="flex w-full flex-col justify-between gap-4 px-10 sm:flex-row sm:items-center dark:bg-black dark:text-white"
>
	<BreadCrumbs breadCrumbs="men/tshirt" seperator="/" />
	<div class="flex w-full items-center justify-end gap-2 md:gap-8">
		<div class="mt-1">
			<Sort />
		</div>
		<div
			class="relative inline-flex h-10 w-24 cursor-pointer items-center justify-between rounded-sm border-2 border-zinc-200 bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800"
		>
			<!-- Hidden Checkbox to control toggle -->
			<input
				type="checkbox"
				id="grid-toggle"
				class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
				bind:checked={isGrid}
			/>

			<!-- Grid Button (Left side) -->
			<label
				for="grid-toggle"
				class={`flex h-full w-1/2 items-center justify-center text-zinc-700 transition-all duration-300 dark:text-zinc-200 ${isGrid ? 'bg-white dark:bg-zinc-900' : 'bg-transparent'} cursor-pointer`}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="16" height="16">
					<!-- Top row -->
					<rect x="2" y="2" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="14" y="2" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="26" y="2" width="10" height="10" rx="2" ry="2" fill="currentColor" />

					<!-- Middle row -->
					<rect x="2" y="14" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="14" y="14" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="26" y="14" width="10" height="10" rx="2" ry="2" fill="currentColor" />

					<!-- Bottom row -->
					<rect x="2" y="26" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="14" y="26" width="10" height="10" rx="2" ry="2" fill="currentColor" />
					<rect x="26" y="26" width="10" height="10" rx="2" ry="2" fill="currentColor" />
				</svg>
			</label>

			<!-- List Button (Right side) -->
			<label
				for="grid-toggle"
				class={`flex h-full w-1/2 items-center justify-center text-zinc-700 transition-all duration-300 dark:text-zinc-200 ${!isGrid ? 'bg-white dark:bg-zinc-900' : 'bg-transparent'} cursor-pointer`}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
					<path d="M3 4h18v2H3zm0 5h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" fill="currentColor" />
				</svg>
			</label>
		</div>
	</div>
</nav>
<main class={isGrid ? gridClass : listClass}>
	{#each sortedData as item}
		{#if isGrid}<Card product={item} />{:else}<ListCard product={item} />{/if}
	{/each}
	{#if isGrid}<SkeletonCard />{:else}<SkeletonListCard />{/if}
</main>
