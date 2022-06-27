<script lang="ts">
	import '../styles/tailwind-output.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div id="theme-container">
	<div id="app-content">
		<Header />

		<main class="flex flex-grow flex-col items-center justify-center bg-slate-300">
			<slot />
		</main>

		<Footer />
	</div>
</div>
