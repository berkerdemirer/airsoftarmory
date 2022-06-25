/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs#typescript
// for information about these interfaces
declare namespace App {
	import type { DecodedIdToken } from 'firebase-admin/auth';
	import type { User } from './types';

	interface Locals {
		idToken: DecodedIdToken;
	}

	interface Session {
		user: User | null;
	}
}
