<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div id="theme-container">
	<div id="app-content">
		<Header />

		<main class="flex flex-grow flex-col items-center justify-center">
			<slot />
		</main>

		<Footer />
	</div>
</div>
