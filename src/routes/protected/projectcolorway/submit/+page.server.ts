import {error, redirect} from '@sveltejs/kit';
import type {PageServerLoad}
from './$types';
import {WebhookClient, AttachmentBuilder, userMention} from "discord.js";
import { SECRETKEY_SERVER_ONLY } from "$env/static/private";

import { RateLimiter } from 'sveltekit-rate-limiter/server';

const limiter = new RateLimiter({
  // A rate is defined as [number, unit]
  IP: [10, 'm'], // IP address limiter
  IPUA: [5, 'm'], // IP + User Agent limiter
  cookie: {
    name: 'limiterid', // Unique cookie name for this limiter
    secret: SECRETKEY_SERVER_ONLY, // Use $env/static/private
    rate: [5, 'm'],
    preflight: true // Require preflight call (see load function)
  }
});

export const load: PageServerLoad = async (event) => {
    const {locals, url} = event;
    const session = await locals.auth();
    if (! session ?. user) 
        throw redirect(303, '/authpage?redirect=' + url.pathname);
    


    await limiter.cookieLimiter?.preflight(event);
    return {};
};

const wc = new WebhookClient({id: import.meta.env.VITE_DISCORD_WEBHOOK_ID, token: import.meta.env.VITE_DISCORD_WEBHOOK_TOKEN});

export const actions = {
    colorway: async (event) => {
        if (await limiter.isLimited(event)) throw error(429);

        const {request, locals} = event;

        const session = await locals.auth();

        const data = await request.formData();

        if (! session ?. user) {
            return {errorMsg: "Error: no user is currently logged in"}
        }

        const colorwayName = data.get('colorway-name');
        const accent = data.get('accent');
        const primary = data.get('primary');
        const secondary = data.get('secondary');
        const tertiary = data.get('tertiary');

        const colorStr = btoa(`${accent},${primary},${secondary},${tertiary}`);

        function hexToRgb(hex: string) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return [
                parseInt(result ![1], 16),
                parseInt(result ![2], 16),
                parseInt(result ![3], 16)
            ];
        }


        wc.send({
            content: userMention(session !.user.image ?. split("/")[4]!),
            embeds: [
                {
                    color: (hexToRgb(accent as string)[0] << 16) + (hexToRgb(accent as string)[1] << 8) + hexToRgb(accent as string)[2],
                    title: `Colorway Submission from ${
                        session !.user !.name
                    }`,
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
    },
    colorwaySource: async (event) => {
        if (await limiter.isLimited(event)) throw error(429);

        const {request, locals} = event;

        const session = await locals.auth();
        const data = await request.formData();

        if (! session ?. user) {
            return {errorMsg: "Error: no user is currently logged in"}
        }

        const colorwayName = data.get('colorway-source');
        const sourceFilename = `${
            (colorwayName as String).replaceAll(" ", "-").toLowerCase()
        }.colorways.json`;

        const fileStream = data.get('source');

        const file = new AttachmentBuilder(fileStream?.stream(), {name: sourceFilename});

        const colorways = JSON.parse(await fileStream?.text()).colorways.length;

        wc.send({
            content: userMention(session !.user.image ?. split("/")[4]!),
            embeds: [
                {
                    title: `Colorway Submission from ${
                        session !.user !.name
                    }`,
                    description: `
        Name: ${colorwayName}
        Colorways: ${
                        colorways || 0
                    }`
                }
            ],
            files: [file]
        })
    }
};
