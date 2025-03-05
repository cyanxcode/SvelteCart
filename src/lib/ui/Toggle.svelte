<script>
	let isGrid = $state(false);
</script>

<label class="inline-flex cursor-pointer items-center">
	<input type="checkbox" bind:checked={isGrid} class="hidden" />
	<span
		class="flex h-7 w-14 items-center rounded-full bg-gray-300 p-1 transition-colors duration-300"
	>
		<span
			class="h-5 w-5 transform rounded-full bg-white shadow-md transition-all duration-300"
			class:translate-x-7={isGrid}
		></span>
	</span>
</label>
