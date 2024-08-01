import { redirect, type Handle } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';
import type { RequestEvent } from './routes/$types';
 
async function authorizationHandle({ event, resolve }) {
  if (event.url.pathname.startsWith('/protected')) {
    const session = await event.locals.auth();
    if (!session) {
      throw redirect(303, '/authpage?redirect=' + event.url.pathname);
    }
  }

  if (event.url.pathname.startsWith('/authpage')) {
    const session = await event.locals.auth();
    if (session) {
        if((event as RequestEvent).url.searchParams.get("redirect")) {
          throw redirect(303, (event as RequestEvent).url.searchParams.get("redirect")!);
        } else {
          throw redirect(303, '/');
        }
    }
  }
  return resolve(event);
}
export const handle: Handle = sequence(authenticationHandle, authorizationHandle)