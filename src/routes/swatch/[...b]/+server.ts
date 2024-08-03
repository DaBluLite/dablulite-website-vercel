import type { RequestHandler } from '@sveltejs/kit';
import { image_from_component } from 'svelte-component-to-image'
import Swatch from './Swatch.svelte';

export const GET: RequestHandler = async ({ url }) => {
    if(!url.searchParams.get("c")) {
        return new Response("Error: no colors given")
    } else {
        const colorArr = atob(url.searchParams.get("c")!).split(",");
        const image = await image_from_component(Swatch, {
            width: 128,
            height: 128,
            props: {
              accent: colorArr[0],
              primary: colorArr[1],
              second: colorArr[2],
              tertiary: colorArr[3]
            },
            fonts: []
          })
        const response = new Response(image)
        response.headers.append('Content-Type', 'image/png')
        response.headers.append('Cache-Control', 's-maxage=604800, stale-while-revalidate=604800')
        return response
    }
};
