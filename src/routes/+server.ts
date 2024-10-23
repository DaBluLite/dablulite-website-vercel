import { json } from '@sveltejs/kit';

export const _sources = {
    sources: [
        {
            name: "DaBluLite's Personal Colorways",
            description: "A list of my personal colorways, that's all",
            id: "dablulites-personal-colorways",
            authorGh: "DaBluLite",
            url: "https://raw.githubusercontent.com/DaBluLite/dablulite.github.io/master/colorways/index.json"
        },
        {
            name: "Computer-Made Colorways",
            description: "Custom Colorways made for the Discord Plugin \"DiscordColorways\"",
            id: "computer-made-colorways",
            authorGh: "kingofcube",
            url: "https://raw.githubusercontent.com/kingofcube/computermade-colorways/main/colorways.json"
        }
    ]
}

export function GET({ url: { searchParams } }) {
    if(searchParams.get("q")) {
        return json({ sources: _sources.sources.filter(source => source.name.toLowerCase().includes(searchParams.get("q")?.toLowerCase() as string) || source.description.toLowerCase().includes(searchParams.get("q") as string)) }, {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
        });
    } else {
        return json(_sources, {
            headers: {
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
              }
        });
    }
}