import { SvelteKitAuth } from "@auth/sveltekit"
import Discord from '@auth/core/providers/discord';

export const { handle } = SvelteKitAuth({
    trustHost: true,
    providers: [Discord]
});