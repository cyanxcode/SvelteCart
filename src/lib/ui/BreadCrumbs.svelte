<script>
	let { breadCrumbs, seperator } = $props();
	let list = breadCrumbs.split('/');
</script>

<div class="flex cursor-default gap-3 text-lg font-medium md:text-xl dark:text-white">
	{#each list as crumb, i}
		<p class="cursor-pointer">{crumb.charAt(0).toUpperCase() + crumb.slice(1)}</p>
		{#if i !== list.length - 1}
			<p>{seperator}</p>
		{/if}
	{/each}
</div>
