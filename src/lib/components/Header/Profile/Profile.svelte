<script lang="ts">
	import { user } from '$lib/stores/user';
</script>

{#if $user}
	<a
		href="/profile"
		class="hover:border-prime hover:text-primary-600 flex h-7 w-7 items-center justify-center rounded-full border-2 border-dashed text-sm font-thin no-underline transition-colors"
	>
		{$user.email[0].toUpperCase()}
	</a>
{/if}
