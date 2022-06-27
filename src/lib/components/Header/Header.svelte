<script lang="ts">
	import Profile from './Profile/Profile.svelte';
	let previousY: number;
	let currentY: number;
	let clientHeight: number;
	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};
	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;
</script>

<svelte:window bind:scrollY={currentY} />

<header />
