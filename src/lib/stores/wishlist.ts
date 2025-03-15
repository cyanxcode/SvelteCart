import { writable } from 'svelte/store';

let initialWishlist = [];

if (typeof window !== 'undefined') {
	const savedWishlist = localStorage.getItem('wishlist');
	initialWishlist = savedWishlist ? JSON.parse(savedWishlist) : [];
}

// Create a writable store with the initial wishlist
export const wishlist = writable(initialWishlist);

if (typeof window !== 'undefined') {
	wishlist.subscribe((value) => {
		localStorage.setItem('wishlist', JSON.stringify(value));
	});
}
