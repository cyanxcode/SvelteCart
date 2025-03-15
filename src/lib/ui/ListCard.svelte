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
				<h2 class="text-md font-semibold sm:text-lg">{product.name}</h2>
				<AddToWishlist {product} />
			</div>
			<h2 class="sm:text-md text-sm text-zinc-600 dark:text-zinc-300">T Shirt</h2>
			<div class="sm:text-md flex gap-2 text-sm">
				<p class="text-zinc-600 line-through dark:text-zinc-300">${product.price + 10}</p>
				<p class="font-semibold">${product.price}</p>
			</div>
			<p
				class=" mr-10 line-clamp-2 text-zinc-600 sm:line-clamp-none dark:font-light dark:text-zinc-300"
			>
				Hello world, this is a premium tshirt made with imported cotton from kashmir
			</p>
		</div>
	</div>
</div>
