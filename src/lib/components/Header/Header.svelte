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

<header
	class="bg-surface-1/50 container sticky top-0 flex h-[var(--header-height)] items-center px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-0"
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<nav class="flex flex-grow">
		<a href="/" class="mr-4 text-2xl font-thin md:mr-8">With Svelte</a>
		<ul class="mr-4 flex flex-grow items-center gap-4 md:gap-8">
			<li>
				<a href="/learn">Learn</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
	<div class="flex items-center gap-4 md:gap-8">
		<Profile />
	</div>
</header>
