<script>
	import { selectedSorting } from '$lib/stores/sort';
	let isTabOpen = $state(false);
	function toggleTab() {
		isTabOpen = !isTabOpen;
	}
	let options = ['Price: Low to High', 'Price: High to Low', 'Newest First', 'Oldest First'];
</script>

<div class="relative">
	<button onclick={toggleTab} aria-label="Sort">
		<iconify-icon
			icon="mage:filter"
			class=" rounded-full p-2 text-2xl transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
		></iconify-icon>
	</button>

	{#if isTabOpen}
		<div
			class="absolute top-14 right-0 z-30 w-64 rounded-lg bg-white shadow-xl transition-all duration-200 dark:bg-zinc-800"
		>
			<p class="mx-6 my-1 font-mono text-xl font-light text-zinc-500">Sort:</p>
			<main class="flex flex-col py-2">
				{#each options as option}
					<button
						onclick={() => {
							$selectedSorting = option;
							isTabOpen = false;
						}}
						class="flex items-center gap-2 px-4 py-1 text-lg font-light text-zinc-800 hover:bg-zinc-100"
					>
						{#if $selectedSorting === option}
							<iconify-icon
								icon="material-symbols-light:check-rounded"
								class="w-5 hover:bg-zinc-100 dark:hover:bg-zinc-800"
							></iconify-icon>
						{:else}
							<div class="w-5"></div>
						{/if}

						<p class="text-zinc-700 dark:text-zinc-300">{option}</p>
					</button>
				{/each}
			</main>
		</div>
	{/if}
</div>
