import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async (event) => {
  const session = await event.locals.auth();
  if (!session?.user) throw redirect(303, '/authpage?redirect=' + event.url.pathname);
  return {};
};

export const actions = {
	colorway: async ({ request, locals }) => {
    const session = await locals.auth();

    const data = await request.formData();

    console.log(data);
		
    const colorwayName = data.get('colorway-name');
		const accent = data.get('accent');
    const primary = data.get('primary');
    const secondary = data.get('secondary');
    const tertiary = data.get('tertiary');

    const colorStr = btoa(`${accent},${primary},${secondary},${tertiary}`);

    fetch("https://discord.com/api/webhooks/1264242544196325460/mC6STFHWk9R5-GXt1ia-wEDkjntNT_hHXLsny9iTBsMoTxEpV8tOQ1o08BWFry6MGy4j", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "Colorway Submission from " + session!.user!.name,
            description: `
              Colorway Name: ${colorwayName}
              Accent: ${accent}
              Primary: ${primary}
              Secondary: ${secondary}
              Tertiary: ${tertiary}
            `,
            thumbnail: {
              url: `https://dablulite.vercel.app/swatch?c=${colorStr}`,
              width: 128,
              height: 128
            }
          }
        ]
    })
    })
	}
};