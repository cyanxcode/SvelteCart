<script>
	import Skeleton from './Skeleton.svelte';
</script>

<div class="grid grid-cols-3 gap-2 p-2">
	<div class="col-span-1">
		<Skeleton width="w-full" height="aspect-square" />
	</div>

	<div class="col-span-2 flex flex-col gap-2">
		<Skeleton width="w-full" height="h-4" />
		<Skeleton width="w-1/2`" height="h-3" />
		<Skeleton width="w-1/2`" height="h-3" />
	</div>
</div>
