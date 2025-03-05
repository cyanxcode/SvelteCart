<script>
	import AddToWishlist from './AddToWishlist.svelte';

	let { product } = $props();
</script>

<div
	class="grid grid-cols-3 rounded-md p-2 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900"
>
	<div class="relative aspect-square w-full overflow-hidden rounded-md">
		<img
			src={product.image[0]}
			alt={product.name}
			class="absolute z-10 aspect-square w-full object-cover transition-opacity duration-300 hover:opacity-0"
		/>
		<img
			src={product.image[1]}
			alt={product.name}
			class="absolute top-0 aspect-square w-full object-cover"
		/>
	</div>
	<div class="col-span-2 mt-2 flex flex-col px-2">
		<div class="w-full text-base/4">
			<div class="flex w-full items-center justify-between">
				<h2 class="text-lg font-semibold">{product.name}</h2>
				<AddToWishlist {product} />
			</div>
			<h2 class="text-md text-zinc-600 dark:text-zinc-400">T Shirt</h2>
			<div class="text-md mt-2 flex gap-2">
				<p class="text-zinc-600 line-through dark:text-zinc-400">${product.price + 10}</p>
				<p class="font-semibold">${product.price}</p>
			</div>
		</div>
	</div>
</div>
