import { json } from '@sveltejs/kit';

export const _sources = {
    sources: [
        {
            name: "DaBluLite's Personal Colorways",
            description: "A list of my personal colorways, that's all",
            id: "dablulites-personal-colorways",
            url: "https://raw.githubusercontent.com/DaBluLite/dablulite.github.io/master/colorways/index.json"
        }
    ]
}

export function GET() {
	return json(_sources, {
        headers: {
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
          }
    });
}