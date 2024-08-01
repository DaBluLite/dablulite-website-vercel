import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, RequestEvent } from './$types';
 
export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (session?.user) {
    if((event as RequestEvent).url.searchParams.get("redirect")) {
        throw redirect(303, (event as RequestEvent).url.searchParams.get("redirect")!);
    } else {
        throw redirect(303, '/');
    }
  }
  return {};
};